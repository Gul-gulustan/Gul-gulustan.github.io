/* ==========================================================================
   Gül Gülistan — service worker: sayfayı ziyaretçinin telefonunda saklar.
   Keeps the site on the visitor's own device.

   NE İŞE YARAR / what it buys you
   İlk ziyaret normal hızdadır (her şey ağdan iner). İkinci ziyaretten sonra
   sayfa telefonun kendi diskinden açılır — ağ hiç beklenmez, internet yoksa
   bile dükkân açılır. Açılış ekranı ~50 ms'de görünür.
   The first visit is normal speed. From the second on, the page opens from the
   phone's own disk: no network wait, and it still opens with no signal at all.

   KURALLAR / the rules — üçü de bilerek farklı:
   1) index.html  → ÖNCE AĞ. Push ettiğin değişiklik gecikmesin diye. Ağ yoksa
      diskteki kopya verilir.  Network first, so your pushes are never delayed;
      the stored copy is used only when the network fails.
   2) app.js?v= / styles.css?v=  → ÖNCE DİSK. Adreste `?v=` numarası olduğu
      için yeni sürüm ZATEN başka bir adrestir; eskisi asla yanlışlıkla
      verilmez.  Cache first — the `?v=` number makes every new version a new
      URL, so a stale one can never be served by mistake.
   3) uploads/  → ÖNCE DİSK. Dosya adları benzersiz (zaman damgalı), aynı ad
      asla başka bir resme işaret etmez.  Cache first: upload names are unique.

   Sayaç servisi gibi DIŞ adresler hiç karıştırılmaz — dokunmadan geçilir.
   Anything on another domain (the visit counter) is passed straight through.

   BOZULURSA / if it ever misbehaves
   Adrese `?sw-off` ekleyip aç:  https://gul-gulustan.github.io/?sw-off
   Bu, service worker'ı siler ve tüm kopyaları temizler. Sonra normal aç.
   Open the site with `?sw-off` on the end: it unregisters the worker and wipes
   every cached copy. Then load the site normally again.

   VERSION'u elle değiştirmen GEREKMEZ. `?v=` numarasını artırmak yeterlidir —
   yeni adres diskte bulunmaz, ağdan iner. VERSION'u sadece "her şeyi sıfırdan
   indirsin" istediğinde artır.
   You do NOT need to touch VERSION. Bumping `?v=` is enough: a new URL is not
   on disk, so it is fetched. Bump VERSION only to force a full re-download.
   ========================================================================== */

const VERSION = "gul-gulistan-v1";
const SHELL = "./";

// Kurulum: sadece sayfanın iskeleti saklanır, gerisi kullanıldıkça birikir.
// Install: store just the shell; everything else accumulates as it is used.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches
      .open(VERSION)
      .then((cache) => cache.add(new Request(SHELL, { cache: "reload" })))
      .catch(() => {}),
  );
});

// Etkinleşme: eski sürümlerin kopyalarını sil, sekmeleri hemen devral.
// Activate: drop caches from older versions and take over open tabs at once.
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)),
      );
      await self.clients.claim();
    })(),
  );
});

// Sayfadan gelen "kendini sil" emri (?sw-off ile tetiklenir).
// The page's "remove yourself" order, triggered by ?sw-off.
self.addEventListener("message", (event) => {
  if (event.data !== "sw-off") return;
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
      await self.registration.unregister();
    })(),
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;

  // Sadece okuma istekleri; SMS/telefon bağlantıları zaten buradan geçmez.
  if (req.method !== "GET") return;

  // Başka siteler (ziyaretçi sayacı) bizi ilgilendirmez.
  // Other origins (the visit counter) are none of our business.
  if (new URL(req.url).origin !== self.location.origin) return;

  event.respondWith(
    req.mode === "navigate" ? networkFirst(req) : cacheFirst(req),
  );
});

// index.html: ağ önce. Böylece yeni ürünler gecikmez.
async function networkFirst(req) {
  const cache = await caches.open(VERSION);
  try {
    const res = await fetch(req);
    if (res && res.ok) cache.put(req, res.clone());
    return res;
  } catch {
    // Ağ yok: diskteki sayfa. Yoksa iskelet.
    return (await cache.match(req)) || (await cache.match(SHELL)) || Response.error();
  }
}

// app.js?v= / styles.css?v= / uploads: disk önce, yoksa ağdan al ve sakla.
async function cacheFirst(req) {
  const cache = await caches.open(VERSION);
  const hit = await cache.match(req);
  if (hit) return hit;

  const res = await fetch(req);
  // Sadece kendi dosyalarımızın sağlam yanıtları saklanır.
  if (res && res.ok && res.type === "basic") cache.put(req, res.clone());
  return res;
}

# Turkana — çiçek sitesi / flower site

Veritabanı, backend, build adımı yok. `index.html` dosyasını çift tıklayıp açabilirsin.
No database, no backend, no build step — just open `index.html`.

```
flower/
├── index.html     ← sayfanın iskeleti / the page skeleton
├── styles.css     ← görünüm / all the styling
├── app.js         ← CONFIG + BANNERS + T + MENU + mantık / and the logic
└── uploads/       ← ürün/kategori resimleri + logo + parallax görselleri
```

Düzenlemen gereken her şey **`app.js`'in en üstünde**.
Everything you need to edit sits **at the top of `app.js`**.

## 1. Telefon numarası / Phone number

`app.js` içinde, `CONFIG` bloğu:

```js
const CONFIG = {
  phone: "+99362998301", // ← siparişin SMS ile gideceği numara
  brand: "Turkana",
  currency: "m",
  currencyAfter: true, // 12 m  →  true   |   m12  →  false
  deliveryFee: 40, // dostawka hyzmaty / delivery fee
  defaultLanguage: "ru", // ru | tk
  defaultTheme: "light", // dark | light
  logo: "uploads/logo.webp",
  heroLeft: "uploads/hero-left.png",
  heroRight: "uploads/hero-right.png",
  bannerAutoplayMs: 3500,
};
```

Bu numara iki yerde kullanılır:

- **Sipariş SMS'i** — müşteri sepeti doldurup gönder düğmesine basınca telefonun
  kendi **mesajlar (SMS)** uygulaması açılır, sipariş hazır metin olarak yazılıdır.
  WhatsApp veya internet gerekmez, müşteri sadece **Gönder**e basar.
- **Arama düğmesi** — sol alttaki yuvarlak ve sepetin altındaki küçük kare.
  Numara geçersizse ikisi de kendini gizler.

## 2. İki sipariş biçimi / The two ways to order

Sepetin içinde **Adaty (Обычный)** ve **Sowgat (Подарок)** diye iki düğme var.

**Adaty / Обычный** — çiçeği kendine alırsın:

| Alan          | Zorunlu mu? |
| ------------- | ----------- |
| Ad / Имя      | evet        |
| Adres / Адрес | evet        |

**Sowgat / Подарок** — çiçek başkasına gider. Adres sorulmaz: dükkân alıcıyı
arayıp sorar. Sadece iki satır vardır:

| Alan                            | Zorunlu mu?                   |
| ------------------------------- | ----------------------------- |
| Sowgady almaly adamyň nomeri    | evet — **+993 ve tam 8 hane** |
| Gutlag ýazgysy / Текст открытки | hayır, boş kalabilir          |

Numara kutusunun solunda `+993` sabit durur, yazılamaz — müşteri sadece 8 hane
yazar. Yapıştırılan `+993 65 12 34 56` gibi bir metinden ülke kodu ve boşluklar
kendiliğinden ayıklanır. Sekiz hane dolunca kutunun çerçevesi yeşile döner.
Eksikse sipariş gönderilmez, uyarı çıkar ve kutuya odaklanır.

`+993` mesaja da yazılır, böylece çiçekçi numaraya dokunup doğrudan arayabilir:

```
Salam! Sargyt etmek isleýärin:

2 x Bägül - 160 m
Dostawka hyzmaty: 40 m

Jemi: 200 m
Sargyt görnüşi: Sowgat
Alyjynyň belgisi: +993 61234567
Gutlag: "Doglan gunun bilen!"
```

## 3. Ürün eklemek / Adding products

`app.js` içindeki `const MENU = [...]` listesi. Her kategori bir blok, her ürün
tek bir kayıt (sayfada tek bir kart/div olarak çıkar):

```js
{
  "id": "bagul",
  "name": { "tk": "Bägüller", "ru": "Розы" },
  "image": "bagul1.webp",
  "items": [
    { "id": "p1", "name": { "tk": "Gyzyl bägül", "ru": "Красная роза" }, "price": 25, "image": "bagul-gyzyl.webp" }
  ]
}
```

- `id` her ürün için farklı olmalı (sepet bununla çalışır).
- `image` → `uploads/` klasöründeki dosyanın **sadece adı**. Yeni resmi bu klasöre kopyala.
- Resim yoksa `"image": null` yaz; kart çiçek simgesiyle görünür.
- Dil eksikse Rusça (`ru`) yazısı kullanılır.

## 4. Banner (kayan afiş) / Auto-scrolling banner

`app.js` içindeki `const BANNERS = [...]` listesi. Kendiliğinden kayar
(`CONFIG.bannerAutoplayMs` süresinde bir), parmakla / mouse ile sürüklenip de
geçilebilir:

```js
{
  image: 'bagul1.webp',
  title: { tk: 'Täze bägüller', ru: 'Свежие розы' },
  text: { tk: 'Her gün ir bilen gelýär', ru: 'Привозим каждое утро' },
}
```

Liste boşsa (`BANNERS = []`) banner alanı hiç görünmez.

## 5. Hazır özellikler / What's included

- **Parallax üst alan**: logo + "Hoş geldiňiz" yazısı kaydırınca yavaşça kaybolur,
  yan görseller daha yavaş sürüklenir
- **Kayan banner**: otomatik kayar, elle de kaydırılabilir, noktalarla gezinilir
- **Kategori şeridi**: yapışkan (sticky) durur; bir kategoriye dokunursan sayfa o
  ürünlere kayar; sayfayı kendin kaydırdıkça hangi kategoride olduğun otomatik
  öne çıkar (scroll-spy)
- **Ürüne dokun → büyük resim penceresi** açılır; karttaki **+** / **-** ise
  pencereyi açmadan direkt sepete ekler/çıkarır
- **Adaty / Sowgat** sipariş biçimi, numara kuralı ile birlikte (yukarı bak)
- Sol altta **arama düğmesi**, sağ altta **sepet** (sepet simgesi bir çiçek)
- Dil değiştirici: Русский / Türkmençe
- Koyu ↔ açık tema; seçim tarayıcıda saklanır
- Sepet, yazılanlar, dil, tema ve seçilen sipariş biçimi sayfa yenilenince
  kaybolmaz (localStorage)
- Sipariş, WhatsApp değil **telefonun kendi SMS uygulaması** ile gönderilir
- PDF menü yok, backend/veritabanı çağrısı yok, internet gerekmez

## 6. Yayına almak / Publishing

GitHub Pages: `index.html`, `styles.css`, `app.js` ve `uploads/` klasörünü repo
köküne koy, push et. **Üçü de gitmeli** — biri eksikse sayfa açılmaz.

```bash
cp -R index.html styles.css app.js uploads Creatorcreats77.github.io/
cd Creatorcreats77.github.io && git add . && git commit -m "flower" && git push
```

Yerelde denemek için (resimlerin yüklenmesi için sunucu şart değil, ama önerilir):

```bash
python3 -m http.server 8080     # → http://localhost:8080
```

## 7. Önbellek: "push ettim ama site değişmedi" / Cache busting

Push ettikten sonra sitede eski ürünleri görüyorsan **sunucu değil, tarayıcı
suçludur**. GitHub Pages her dosyayı `cache-control: max-age=600` ile gönderir:
tarayıcı `app.js` dosyasını **10 dakika** kendi diskinde saklar ve o süre
boyunca sunucuya hiç sormaz.

After a push, seeing the old products is the **browser's** doing, not the
server's. GitHub Pages serves every file with `cache-control: max-age=600`, so
the browser keeps `app.js` on disk for **10 minutes** without asking again.

**Çözüm / the fix** — `index.html`'in en altındaki iki satırda adresin sonunda
bir sürüm numarası var:

```html
<link rel="stylesheet" href="styles.css?v=2" />
<script src="app.js?v=2"></script>
```

Tarayıcı için `app.js?v=2` ile `app.js?v=3` **iki ayrı dosyadır** — numara
değişince eski kopyayı atıp yenisini indirmek zorunda kalır.
`?v=...` kısmı sunucuda hiçbir şey değiştirmez, dosyanın adı `app.js` olarak
kalır; sadece tarayıcıya "bu yeni" demenin yoludur.

To the browser, `app.js?v=2` and `app.js?v=3` are **two different files**, so a
new number forces a fresh download. The `?v=...` part changes nothing on the
server — the file is still plain `app.js`.

> **Kural / the rule:** ürün, fiyat veya banner değiştirdiğin **her seferde**
> bu iki satırdaki sayıyı bir artır (`v=2` → `v=3`), sonra push et.
> Bump the number on both lines every time you change products, prices or
> banners, then push.

Küçük not: `index.html`'in kendisi de 10 dakika saklanır. Yani en kötü ihtimalle
yeni içerik 10 dakika gecikir; ondan sonra herkes doğru sürümü görür — tek tek
kimseye "önbelleği temizle" demen gerekmez. Kendin hemen görmek istersen:

Small caveat: `index.html` itself is cached for 10 minutes too, so in the worst
case the update is 10 minutes late — after that everyone gets it, with nobody
having to clear anything. To see it immediately yourself:

- Mac masaüstü: `Cmd+Shift+R` (Chrome/Edge) · `Cmd+Option+R` (Safari)
- Gizli / incognito pencerede aç
- Telefonda ana ekrana eklediysen: kısayolu sil, siteyi aç, tekrar ekle

## 8. Sayfa neden yavaş açılıyordu / Why the page opened slowly

Sorun sunucu değildi — GitHub Pages dosyaları hızlı veriyor (`index.html` 6 KB,
`app.js` 20 KB sıkıştırılmış). Sorun **açılışta inen resimlerdi ve sıranın
yanlış olmasıydı**. Üç şey düzeltildi:

The server was never the problem — GitHub Pages delivers the files quickly
(6 KB of HTML, 20 KB of gzipped JS). The problem was **which images loaded at
boot, and in what order**. Three fixes:

**1. Zincir kırıldı / the chain was broken.** Logonun adresi `app.js` içindeki
`CONFIG.logo`'dan gelir, yani tarayıcı sırayla bekliyordu: *index.html insin →
app.js insin → app.js çalışsın → logo inmeye başlasın*. Dört bekleme arka
arkaya. `index.html`'in `<head>` kısmına eklenen `<link rel="preload">`
satırları `styles.css`, `app.js` ve logoyu **aynı anda** başlatır.

The logo's URL lives in `CONFIG.logo` inside `app.js`, so the browser waited in
a chain: *HTML → app.js → run it → only now start the logo*. The
`<link rel="preload">` lines in `<head>` start all three at once instead.

**2. Afişler tek tek iniyor / banners load one at a time.** Beş afişin beşi de
açılışta iniyordu — **91 KB**, üstelik dördü ilk 3,5 saniye boyunca görünmüyor
bile. Artık sadece görünen afiş iner; kalanlar `data-src` olarak bekler ve
sayfa boşa çıkınca (`requestIdleCallback`) arka planda tamamlanır.

All five banners used to download at boot — **91 KB**, four of which nobody
sees for the first 3.5 seconds. Now only the visible one loads; the rest wait
in `data-src` and fill in once the page is idle.

**3. 120 kart iki adımda çiziliyor / the grid draws in two steps.** Önce bütün
kategori başlıkları + ilk kategorinin kartları, hemen sonraki karede kalan
kartlar. Başlıklar en baştan var olduğu için kategori şeridine basmak çalışır.

First every section heading plus the first category's cards, then the remaining
cards on the next frame. The headings exist from the start, so tapping a
category still works during that frame.

Ölçüm / measured — sunucunun kendi kaydından, istek sırası:

```
ÖNCE / BEFORE                        SONRA / AFTER
1 index.html                         1 index.html
2 styles.css                         2 styles.css
3 app.js                             3 app.js
4 logo.webp                          4 logo.webp      ← preload ile erken başlar
5 hero-right / hero-left             5 afiş #1 / banner #1
7  afiş #4  ┐                        6 hero-left / hero-right (düşük öncelik)
8  afiş #1  │ 91 KB, hepsi           …
9  afiş #2  │ menüden ÖNCE          80 afiş #4  ┐ boşta, menü göründükten
10 afiş #3  │                       126 afiş #2  │ sonra / after the menu
11 afiş #5  ┘                       128 afiş #3  ┘ is already on screen
```

Açılış ekranı (dönen çizgi) zaten en baştan görünüyordu; o `index.html`'in
içinde, hiçbir dosyayı beklemez. Değişen şey, ondan **sonrasının** ne kadar
sürdüğü.

The boot screen was already instant — it is inline in `index.html` and waits
for nothing. What changed is how long everything *after* it takes.

> Değiştirirsen dikkat / if you edit: `<head>`'deki preload satırlarındaki
> `?v=` numarası en alttaki iki satırla aynı olmalı, logo yolu da `CONFIG.logo`
> ile aynı olmalı. Tutmazsa dosya iki kez iner — yavaşlatır, hızlandırmaz.

## 9. Service worker: ikinci ziyaret ağsız açılır / offline-capable

`sw.js` sayfayı ziyaretçinin kendi cihazında saklar. İlk ziyaret normal
hızdadır; ikinciden sonra sayfa diskten açılır — ağ hiç beklenmez, **internet
olmasa bile dükkân açılır**.

The first visit is normal speed; from the second on the page opens from the
visitor's own disk, with no network wait — **it opens with no signal at all**.

Üç ayrı kural var, üçü de bilerek farklı / three deliberately different rules:

| Ne | Kural | Neden |
| --- | --- | --- |
| `index.html` | **önce ağ** / network first | Push ettiğin değişiklik gecikmeden görünsün. Ağ yoksa diskteki kopya. |
| `app.js?v=` · `styles.css?v=` | **diskten ver + arkadan yenile** / stale-while-revalidate | Sayfa anında açılsın diye diskten verilir, aynı anda yenisi indirilip saklanır. `?v=` artırdıysan zaten yeni adrestir, anında gelir. |
| `uploads/…` | **önce disk** / cache first | Dosya adları benzersiz (zaman damgalı), aynı ad başka resme işaret etmez. |

Ziyaretçi sayacı gibi **dış adresler hiç karıştırılmaz**, dokunmadan geçer.

### "Ya `?v=` artırmayı unutursam?" / what if you forget to bump `?v=`

Kısa cevap: **müşteri en fazla bir ziyaret geride kalır, sonra kendiliğinden
düzelir.** Sonsuza kadar eskide takılı kalmaz.

| Ne yaptın | Müşteri ne görür |
| --- | --- |
| `?v=` artırdın (doğrusu) | Yeni sürümü **hemen**, ilk açılışta |
| `?v=` artırmayı unuttun | O açılışta eskisini, **bir sonraki açılışta yenisini** |
| Hiç `?v=` yokken (eski hâli) | Eskisini **sonsuza kadar** — bu yüzden düzeltildi |

Sebebi: `app.js` diskten verilirken arka planda sessizce yeniden indirilir ve
saklanır. Bir sonraki açılışta artık yeni kopya diskten gelir. `index.html`
zaten hep ağdan sorulur, o hiç eskimez.

Short answer: **a customer is at most one visit behind, then it heals itself.**
`app.js` is served from disk while a fresh copy downloads in the background, so
the next open already has it. `index.html` is always asked over the network.

### Yayınlarken ne yapmalısın / what to do when you publish

**Hiçbir şey değişmiyor.** 7. bölümdeki kural aynen geçerli: `?v=` numarasını
artır, push et. Yeni numara yeni adrestir, diskte bulunmaz, ağdan iner.
`sw.js` içindeki `VERSION` satırına **dokunmana gerek yok** — onu sadece "her
şey sıfırdan insin" istediğinde artırırsın.

Nothing changes: bump `?v=` and push, exactly as in section 7. You do **not**
need to touch `VERSION` in `sw.js`; that is only for forcing a full re-download.

### Bir şey ters giderse / if it ever misbehaves

Adresin sonuna `?sw-off` ekleyip aç:

```
https://gul-gulustan.github.io/?sw-off
```

Service worker silinir, saklanan bütün kopyalar temizlenir. Sonra siteyi normal
aç — temiz bir kopya iner ve worker yeniden kurulur.

Opening the site with `?sw-off` unregisters the worker and wipes every cached
copy; loading it normally afterwards fetches a clean copy and re-installs.

> Kalıcı olarak kapatmak istersen `?sw-off` yetmez — `index.html`'in en
> altındaki service worker `<script>` bloğunu silmen gerekir. `?sw-off` bir
> temizlik düğmesidir, kapatma anahtarı değil.
> To turn it off for good, delete the service worker `<script>` block at the
> bottom of `index.html`; `?sw-off` is a reset button, not an off switch.

### Ölçüm / verified

Kanıt: yerel sunucu **tamamen kapatıldı**, sonra sayfa yeniden açıldı —

```
sunucu: bağlantı reddedildi / connection refused
  başlık        Gül Gülistan — Заказ онлайн
  kategori      7
  kart          117
  logo          yüklendi
  resim         127 adet ekranda
```

Küçük not: saklanan kopyalar zamanla birikir (şu an ~3 MB resim). Tarayıcı yer
sıkışınca kendisi temizler; senin bir şey yapman gerekmez.
The stored copies grow over time (~3 MB of images today). Browsers evict them
under storage pressure on their own.

## 10. Değişiklik günlüğü / Changelog

### 2026-08-21 — service worker düzeltmesi / stale-while-revalidate fix

**Neyi düzeltti:** `sw.js`'in ilk hâli `app.js?v=`'yi *sadece* diskten
veriyordu. `?v=` artırmayı unutursan müşteri eski sürümde **kalıcı olarak**
takılı kalıyordu — testte 3 ziyaret üst üste eski adı gösterdi, sunucuda yenisi
dururken.

The first `sw.js` served `app.js?v=` from disk only, so forgetting to bump `?v=`
pinned customers to the old version **permanently** — three consecutive test
visits showed the stale name while the server had the new one.

- `staleWhileRevalidate()` eklendi: diskten anında verilir, arkadan yenisi
  indirilip saklanır → en fazla bir ziyaret gecikme.
- `dropOldVersions()` eklendi: `app.js?v=5` saklanınca `?v=4` silinir.
- `index.html` artık `fetch(..., {cache:"no-cache"})` ile sorulur — tarayıcının
  10 dakikalık kopyası atlanır, push anında görünür.
- `uploads/` aynı kaldı (adlar benzersiz, önce disk).
- Sürüm `?v=4` → **`?v=5`**.

Test edildi / verified: `?v=` artırınca **tek** ziyarette yeni sürüm geldi;
artırmadan bırakınca ikinci ziyarette kendiliğinden düzeldi; sunucu tamamen
kapatıldığında sayfa yine diskten açıldı.

### 2026-08-19 — service worker

- Yeni dosya **`sw.js`** — index.html önce ağ, `?v=`'li dosyalar ve `uploads/`
  önce disk, dış adresler dokunulmadan geçer.
- `index.html` en altına kayıt `<script>`'i (`load` olayından sonra, `file://`
  ve `?sw-off` korumalı).
- Sunucu kapatılarak test edildi: sayfa tamamen diskten açıldı (117 kart,
  7 kategori, 127 resim). `?sw-off` kayıt ve kopyaları sildi, sonra temiz kurdu.
- `?v=` **değişmedi** (4) — app.js ve styles.css bu turda değişmedi.

Ayrıntı 9. bölümde. / Details in section 9.

### 2026-08-19 — açılış hızı / boot speed

- `index.html` `<head>`: `styles.css`, `app.js` ve `uploads/logo.webp` için
  `<link rel="preload">`.
- `renderHero()`: logo `fetchpriority="high"`, yan süsler `fetchpriority="low"`
  + `decoding="async"` — süsler menüyle bant genişliği yarışmaz.
- `renderBanner()`: sadece görünen afiş `src` alır, kalanlar `data-src`;
  yeni `hydrateBanner()` onları boşta / ilk kaydırmada tamamlar. **91 KB** açılış
  yükünden çıktı.
- `renderContent()`: 120 kart tek seferde değil, iki adımda çiziliyor
  (`contentPass` sayacı dil değişiminde yarışı önler).
- Sürüm `?v=3` → **`?v=4`**.

Ayrıntılı açıklama 8. bölümde. Ürün, fiyat, resim, dil ve `CONFIG` değişmedi.
Full explanation in section 8. No product, price, image, language or `CONFIG`
change.

### 2026-08-18 — rusça adlar / Russian names

Sitede sağ üstten **Русский** seçilince ürün adları hâlâ türkmence latin
yazıyordu (`Gül 12`, `Karopka 3`). Artık her ürünün `ru` alanı gerçekten
rusçadır. Panelden gelen veride ikisi de aynı metindi, çeviri elle yapıldı.

Picking **Русский** used to still show Latin Turkmen product names; every `ru`
field now holds real Russian. The export had the same text in both languages,
so the translation was done by hand.

| tk                     | ru                 |
| ---------------------- | ------------------ |
| Guller                 | Цветы              |
| Gelin gül              | Свадебные букеты   |
| Buket mekdep harytlary | Школьные букеты    |
| Kompozisiya            | Композиции         |
| Miska                  | Миски              |
| Suwenir                | Сувениры           |
| Karopkalar             | Коробки            |
| `Gül N`                | `Цветок N`         |
| `Okuw buket N`         | `Школьный букет N` |
| `Täze haryt`           | `Новый товар`      |

- 7 kategori + **120 ürünün tamamı** çevrildi, latin harfli `ru` alanı kalmadı.
- **Afişlerin rusçası:** _1 сентября · Букеты к школе у нас_, _Украшение машин_,
  _14 микрорайон · Мы находимся здесь_, _Самые красивые цветы у нас_,
  _Упаковочная бумага разных видов!_ Marka adı `Gül Gülistan` olarak bırakıldı.
- **`T.ru` içindeki `delivery` alanı** türkmence kalmıştı (`Dostawka hyzmaty`),
  **`Доставка`** yapıldı. Türkmence tablodaki (`T.tk`) hâli aynen duruyor.
- `index.html` sürümü `?v=2` → **`?v=3`** (7. bölümdeki kural).

Türkmence (`tk`) adların hiçbiri değişmedi; fiyatlar, resimler, kimlikler
(`p11336` gibi) ve `CONFIG` aynı. Panelden yeni bir dışa aktarma alırsan bu
rusça adlar **kaybolur** — ya çeviriyi panele de gir, ya da bu tabloyu
kullanarak tekrar uygula.

Nothing on the Turkmen side changed; prices, images, ids and `CONFIG` are
untouched. A fresh export from the panel will **overwrite** these Russian
names — either enter them in the panel too, or re-apply them from the table.

### 2026-08-18 — panel verisi aktarıldı / admin export imported

Kaynak / source: yönetim panelinden indirilen `gul-gulistan/` klasörü
(`data/products.json`, `data/categories.json`, `data/banners.json`).
Bu klasör depoya **girmez**, sadece veriyi taşımak için kullanılır.

- **`app.js` → `MENU` bloğu tamamen yeniden yazıldı.** 113 ürün → **120 ürün**,
  5 kategori → **7 kategori**. Sıralama paneldeki `sortOrder` ile aynı:
  Buket mekdep harytlary (6), Gelin gül (6), Guller (50), Kompozisiya (20),
  Miska (10), Suwenir (19), Karopkalar (9).
  Kategori kimlikleri `c<panel id>`, ürünler `p<panel id>` olarak korundu —
  böylece sepet ve panel aynı kimliği kullanır.
- **Yeni kategori adları** panelden geldiği gibi: `2241` artık tk `Gelin gül` /
  ru `Buket`, `2240` tk `Kompozisiya` / ru `Gul miska mix`.
- **`uploads/` klasörüne 47 yeni resim kopyalandı** (`-sm.webp` küçük boy).
  Her ürünün resmi kontrol edildi, eksik dosya yok.
- **`BANNERS` listesine bir afiş eklendi**, en başa: _1 sentyabr — Buket
  hyzmaty bizde_ (`1787045401358-44080659-sm.webp`). Eski dört afiş duruyor,
  toplam 5.
- **Yazı düzeltmesi:** "Gül Gülüstan" → **"Gül Gülistan"** — sayfa başlığı
  (`<title>`), alt bilgi, `CONFIG.brand` ve üçüncü afişin yazısı.
- **`index.html`'e `?v=2` önbellek kırıcı eklendi** (yukarıdaki 7. bölüm).
- Dokunulmayanlar: logo, parallax görselleri, `styles.css`, telefon numarası,
  dostawka ücreti ve diğer `CONFIG` alanları.

Dikkat / heads-up: panelden gelen 120 üründen **88 tanesinin fiyatı `0`**.
Bu veri panelde de böyle — site doğru aktardı. Fiyatlar gerçekten girilecekse
panelde düzeltip yeni bir dışa aktarma almak gerekir.
88 of the 120 products come out of the panel with a price of `0`; that is how
the export is, not a conversion loss. Fix them in the panel and re-export.

git add -A && git commit -m "cache busting + readme" && git push

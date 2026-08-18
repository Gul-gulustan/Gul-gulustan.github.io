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

| Alan | Zorunlu mu? |
| --- | --- |
| Ad / Имя | evet |
| Adres / Адрес | evet |

**Sowgat / Подарок** — çiçek başkasına gider. Adres sorulmaz: dükkân alıcıyı
arayıp sorar. Sadece iki satır vardır:

| Alan | Zorunlu mu? |
| --- | --- |
| Sowgady almaly adamyň nomeri | evet — **+993 ve tam 8 hane** |
| Gutlag ýazgysy / Текст открытки | hayır, boş kalabilir |

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

## 8. Değişiklik günlüğü / Changelog

### 2026-08-18 — rusça adlar / Russian names

Sitede sağ üstten **Русский** seçilince ürün adları hâlâ türkmence latin
yazıyordu (`Gül 12`, `Karopka 3`). Artık her ürünün `ru` alanı gerçekten
rusçadır. Panelden gelen veride ikisi de aynı metindi, çeviri elle yapıldı.

Picking **Русский** used to still show Latin Turkmen product names; every `ru`
field now holds real Russian. The export had the same text in both languages,
so the translation was done by hand.

| tk | ru |
| --- | --- |
| Guller | Цветы |
| Gelin gül | Свадебные букеты |
| Buket mekdep harytlary | Школьные букеты |
| Kompozisiya | Композиции |
| Miska | Миски |
| Suwenir | Сувениры |
| Karopkalar | Коробки |
| `Gül N` | `Цветок N` |
| `Okuw buket N` | `Школьный букет N` |
| `Täze haryt` | `Новый товар` |

- 7 kategori + **120 ürünün tamamı** çevrildi, latin harfli `ru` alanı kalmadı.
- **Afişlerin rusçası:** *1 сентября · Букеты к школе у нас*, *Украшение машин*,
  *14 микрорайон · Мы находимся здесь*, *Самые красивые цветы у нас*,
  *Упаковочная бумага разных видов!* Marka adı `Gül Gülistan` olarak bırakıldı.
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
- **`BANNERS` listesine bir afiş eklendi**, en başa: *1 sentyabr — Buket
  hyzmaty bizde* (`1787045401358-44080659-sm.webp`). Eski dört afiş duruyor,
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
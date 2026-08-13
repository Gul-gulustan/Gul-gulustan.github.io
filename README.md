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

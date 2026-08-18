/* ==========================================================================
   Turkana — çiçek sitesi / flower site: veri + mantık.
   Düzenlemen gereken yer en üstteki CONFIG, BANNERS, T ve MENU bloklarıdır.
   Data + logic. The blocks you edit are CONFIG, BANNERS, T and MENU, all at
   the top of this file.

   Sıradan bir betik (module değil) — böylece index.html dosyaya çift
   tıklayarak da açılabilir. / A classic script, not a module, so
   double-clicking index.html still works over file://.
   ========================================================================== */

/* ==========================================================================
1. CONFIG — düzenlemesi gereken tek yer / the only place you need to edit
========================================================================== */
const CONFIG = {
  // Siparişin SMS ile gideceği numara. Ülke kodu ile, başında + olabilir.
  // The order is sent here as a text message. Include the country code.
  phone: "+99362205334",

  brand: "Gül Gülistan", // üst barda görünen isim / name in the header
  currency: "m", // para birimi / currency symbol
  currencyAfter: true, // simge fiyatın sonunda mı? / symbol after the price
  deliveryFee: 0, // dostawka hyzmaty / delivery fee, added on top of the cart total
  defaultLanguage: "ru", // ru | tk
  defaultTheme: "light", // dark | light

  // Parallax alanı / parallax hero artwork
  logo: "uploads/logo.webp",
  heroLeft: "uploads/hero-left.webp",
  heroRight: "uploads/hero-right.webp",

  bannerAutoplayMs: 3500, // banner kaç ms'de bir kayar / autoplay delay

  // Ziyaretçi sayacı / visit counter.
  // Sunucu yok: sayı ücretsiz bir sayaç servisinde tutulur. "name" bu
  // siteye özel olmalı — aynı adı başkası kullanırsa sayılar karışır.
  // Aynı tarayıcı 24 saatte bir kez sayılır, yani "kaç kişi açtı".
  // No server: the number lives on a free counter service. "name" must be
  // unique to this site — a shared name would mix your count with theirs.
  // One browser counts once per 24h, so it reads as "how many people".
  counter: {
    enabled: true,
    name: "gul-gulustan-github-io", // benzersiz olsun / keep unique
    key: "visits",
    everyHours: 24, // 0 → her açılışı say / count every page load
  },
};

/* ==========================================================================
2. BANNERS — kendiliğinden kayar, parmakla sürüklenebilir
          auto-scrolls, drag / swipe also works
========================================================================== */
const BANNERS = [
  {
    image: "1787045401358-44080659-sm.webp",
    title: {
      ru: "1 сентября",
      tk: "1 sentyabr",
    },
    text: {
      ru: "Букеты к школе у нас",
      tk: "Buket hyzmaty bizde",
    },
  },
  {
    image: "1786659276769-779041703-sm.webp",
    title: {
      ru: "Украшение машин",
      tk: "Masyn Bezeg",
    },
    text: {
      ru: "+993 62205334",
      tk: "+993 62205334",
    },
  },
  {
    image: "1786659306517-246082929-sm.webp",
    title: {
      ru: "14 микрорайон",
      tk: "14 mikrayon",
    },
    text: {
      ru: "Мы находимся здесь",
      tk: "Yerlesyan Yerimiz",
    },
  },
  {
    image: "1786659333693-394128807-sm.webp",
    title: {
      ru: "Gül Gülistan",
      tk: "Gül Gülistan",
    },
    text: {
      ru: "Самые красивые цветы у нас",
      tk: "In owadan guller bizde",
    },
  },
  {
    image: "1786659406178-550231885-sm.webp",
    title: {
      ru: "Упаковочная бумага разных видов!",
      tk: "Durli gornusdaki bezeg kagyzlary bizde!",
    },
    text: {
      ru: "",
      tk: "",
    },
  },
];

/* ==========================================================================
3. LANGUAGES + UI TEXT
========================================================================== */
const LANGS = [
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "tk", label: "Türkmençe", flag: "🇹🇲" },
];

const T = {
  ru: {
    tagline: "Заказ онлайн",
    welcome: "Добро пожаловать",
    cart: "Корзина",
    empty: "Корзина пуста",
    emptyHint: "Нажмите на товар — он появится здесь.",
    delivery: "Доставка",
    total: "Итого",
    order: "Заказ",
    sendOrder: "Заказать по СМС",
    callNow: "Позвонить",
    clear: "Очистить корзину",
    added: "добавлено в корзину",
    item: "товаров",
    addToCart: "В корзину",
    viewCart: "Открыть корзину",
    name: "Ваше имя *",
    address: "Ваш адрес *",
    cartEmptyWarn: "Корзина пуста",
    noPhone: "Номер телефона не указан (CONFIG.phone)",
    missingInfo: "Укажите, пожалуйста, имя и адрес",
    opening: "Открываем приложение сообщений…",
    msgHello: "Здравствуйте! Хочу сделать заказ:",
    msgTotal: "Итого",
    msgName: "Имя",
    msgAddress: "Адрес",
    visitors: "посетителей",
    cartShort: "Корзина",

    // Sade / hediye kipi ve kart / simple + gift mode and the card
    modeSimple: "Обычный",
    modeGift: "Подарок",
    giftPhone: "Номер того, кто получит подарок *",
    cardText: "Текст открытки",
    cardHint: "Открытку можно оставить пустой.",
    badPhone: "Номер получателя: +993 и 8 цифр",
    msgType: "Тип заказа",
    msgPhone: "Телефон получателя",
    msgCard: "Открытка",
  },
  tk: {
    tagline: "Onlaýn sargyt",
    welcome: "Hoş geldiňiz",
    cart: "Sebedim",
    empty: "Sebediňiz boş",
    emptyHint: "Haryda basyň, şu ýere goşulýar.",
    delivery: "Dostawka hyzmaty",
    total: "Jemi",
    order: "Sargyt",
    sendOrder: "SMS bilen sargyt et",
    callNow: "Jaň et",
    clear: "Sebedi boşat",
    added: "sebede goşuldy",
    item: "haryt",
    addToCart: "Sebede goş",
    viewCart: "Sebede git",
    name: "Adyňyz *",
    address: "Salgyňyz *",
    cartEmptyWarn: "Sebediňiz boş",
    noPhone: "Telefon belgisi bellenmedi (CONFIG.phone)",
    missingInfo: "Adyňyzy we salgyňyzy giriziň",
    opening: "Habar programmasy açylýar…",
    msgHello: "Salam! Sargyt etmek isleýärin:",
    msgTotal: "Jemi",
    msgName: "Ady",
    msgAddress: "Salgy",
    visitors: "myhman",
    cartShort: "Sebet",

    // Sade / hediye kipi ve kart / simple + gift mode and the card
    modeSimple: "Adaty",
    modeGift: "Sowgat",
    giftPhone: "Sowgady almaly adamyň nomeri *",
    cardText: "Gutlag ýazgysy",
    cardHint: "Gutlagy boş goýup bilersiňiz.",
    badPhone: "Alyjynyň belgisi: +993 we 8 sifr",
    msgType: "Sargyt görnüşi",
    msgPhone: "Alyjynyň belgisi",
    msgCard: "Gutlag",
  },
};

/* ==========================================================================
4. MENU — kategoriler ve ürünler / categories and products
Resimler "uploads/" klasöründen gelir. Images are served from uploads/.
========================================================================== */
const MENU = [
  {
    id: "c2471",
    name: {
      tk: "Buket mekdep harytlary",
      ru: "Школьные букеты",
    },
    items: [
      {
        id: "p12521",
        name: {
          tk: "Täze haryt",
          ru: "Новый товар",
        },
        price: 0,
        image: "1787045356741-613982406-sm.webp",
      },
      {
        id: "p12522",
        name: {
          tk: "Okuw buket 1",
          ru: "Школьный букет 1",
        },
        price: 100,
        image: "1787045361506-194424953-sm.webp",
      },
      {
        id: "p12523",
        name: {
          tk: "Okuw buket 2",
          ru: "Школьный букет 2",
        },
        price: 150,
        image: "1787045365199-22092051-sm.webp",
      },
      {
        id: "p12524",
        name: {
          tk: "Okuw buket 3",
          ru: "Школьный букет 3",
        },
        price: 150,
        image: "1787045370040-594166164-sm.webp",
      },
      {
        id: "p12525",
        name: {
          tk: "Okuw buket 4",
          ru: "Школьный букет 4",
        },
        price: 100,
        image: "1787045376194-206294722-sm.webp",
      },
      {
        id: "p12526",
        name: {
          tk: "Okuw buket 5",
          ru: "Школьный букет 5",
        },
        price: 500,
        image: "1787045380767-874142320-sm.webp",
      },
    ],
  },
  {
    id: "c2241",
    name: {
      tk: "Gelin gül",
      ru: "Свадебные букеты",
    },
    items: [
      {
        id: "p11337",
        name: {
          tk: "Gelin gül 1",
          ru: "Свадебный букет 1",
        },
        price: 250,
        image: "1786648824483-821274881-sm.webp",
      },
      {
        id: "p11338",
        name: {
          tk: "Gelin gül 2",
          ru: "Свадебный букет 2",
        },
        price: 250,
        image: "1786648842226-543544030-sm.webp",
      },
      {
        id: "p11351",
        name: {
          tk: "Gelin gül 3",
          ru: "Свадебный букет 3",
        },
        price: 500,
        image: "1786649477962-563087972-sm.webp",
      },
      {
        id: "p11352",
        name: {
          tk: "Gelin gül 4",
          ru: "Свадебный букет 4",
        },
        price: 200,
        image: "1786649533074-2149237-sm.webp",
      },
      {
        id: "p11353",
        name: {
          tk: "Gelin gül 5",
          ru: "Свадебный букет 5",
        },
        price: 500,
        image: "1786649569154-597465853-sm.webp",
      },
      {
        id: "p11373",
        name: {
          tk: "Gelin gül 6",
          ru: "Свадебный букет 6",
        },
        price: 600,
        image: "1786650414202-916511479-sm.webp",
      },
    ],
  },
  {
    id: "c2237",
    name: {
      tk: "Guller",
      ru: "Цветы",
    },
    items: [
      {
        id: "p11339",
        name: {
          tk: "Gül 1",
          ru: "Цветок 1",
        },
        price: 900,
        image: "1786648963289-11097523-sm.webp",
      },
      {
        id: "p11342",
        name: {
          tk: "Gül 2",
          ru: "Цветок 2",
        },
        price: 1350,
        image: "1786649152398-339765595-sm.webp",
      },
      {
        id: "p11347",
        name: {
          tk: "Gül 3",
          ru: "Цветок 3",
        },
        price: 350,
        image: "1786649316784-540667862-sm.webp",
      },
      {
        id: "p11349",
        name: {
          tk: "Gül 4",
          ru: "Цветок 4",
        },
        price: 400,
        image: "1786649358699-517207707-sm.webp",
      },
      {
        id: "p11350",
        name: {
          tk: "Gül 5",
          ru: "Цветок 5",
        },
        price: 500,
        image: "1786649394326-596365692-sm.webp",
      },
      {
        id: "p11354",
        name: {
          tk: "Gül 6",
          ru: "Цветок 6",
        },
        price: 150,
        image: "1786649605048-107151811-sm.webp",
      },
      {
        id: "p11355",
        name: {
          tk: "Gül 7",
          ru: "Цветок 7",
        },
        price: 300,
        image: "1786649649535-448601730-sm.webp",
      },
      {
        id: "p11358",
        name: {
          tk: "Gül 8",
          ru: "Цветок 8",
        },
        price: 450,
        image: "1786649767190-70076846-sm.webp",
      },
      {
        id: "p11359",
        name: {
          tk: "Gül 9",
          ru: "Цветок 9",
        },
        price: 1200,
        image: "1786649800555-623125253-sm.webp",
      },
      {
        id: "p11360",
        name: {
          tk: "Gül 10",
          ru: "Цветок 10",
        },
        price: 400,
        image: "1786649829779-317901405-sm.webp",
      },
      {
        id: "p11361",
        name: {
          tk: "Gül 11",
          ru: "Цветок 11",
        },
        price: 600,
        image: "1786649854503-184312033-sm.webp",
      },
      {
        id: "p11362",
        name: {
          tk: "Gül 12",
          ru: "Цветок 12",
        },
        price: 450,
        image: "1786649925539-763277604-sm.webp",
      },
      {
        id: "p11363",
        name: {
          tk: "Gül 13",
          ru: "Цветок 13",
        },
        price: 1000,
        image: "1786650027969-694246142-sm.webp",
      },
      {
        id: "p11364",
        name: {
          tk: "Gül 14",
          ru: "Цветок 14",
        },
        price: 750,
        image: "1786650075050-121002592-sm.webp",
      },
      {
        id: "p11365",
        name: {
          tk: "Gül 15",
          ru: "Цветок 15",
        },
        price: 800,
        image: "1786650089244-378385639-sm.webp",
      },
      {
        id: "p11366",
        name: {
          tk: "Gül 16",
          ru: "Цветок 16",
        },
        price: 400,
        image: "1786650104998-802030852-sm.webp",
      },
      {
        id: "p11367",
        name: {
          tk: "Gül 17",
          ru: "Цветок 17",
        },
        price: 1000,
        image: "1786650172283-772005156-sm.webp",
      },
      {
        id: "p11368",
        name: {
          tk: "Gül 18",
          ru: "Цветок 18",
        },
        price: 300,
        image: "1786650285358-521388530-sm.webp",
      },
      {
        id: "p11369",
        name: {
          tk: "Gül 19",
          ru: "Цветок 19",
        },
        price: 750,
        image: "1786650300645-216118680-sm.webp",
      },
      {
        id: "p11370",
        name: {
          tk: "Gül 20",
          ru: "Цветок 20",
        },
        price: 400,
        image: "1786650326560-911525305-sm.webp",
      },
      {
        id: "p11371",
        name: {
          tk: "Gül 21",
          ru: "Цветок 21",
        },
        price: 350,
        image: "1786650361451-594240118-sm.webp",
      },
      {
        id: "p11372",
        name: {
          tk: "Gül 22",
          ru: "Цветок 22",
        },
        price: 400,
        image: "1786650393913-985698315-sm.webp",
      },
      {
        id: "p11374",
        name: {
          tk: "Gül 23",
          ru: "Цветок 23",
        },
        price: 550,
        image: "1786650454440-380331078-sm.webp",
      },
      {
        id: "p11376",
        name: {
          tk: "Gül 24",
          ru: "Цветок 24",
        },
        price: 150,
        image: "1786650530608-997211749-sm.webp",
      },
      {
        id: "p11377",
        name: {
          tk: "Gül 25",
          ru: "Цветок 25",
        },
        price: 500,
        image: "1786650552217-328664991-sm.webp",
      },
      {
        id: "p11378",
        name: {
          tk: "Gül 26",
          ru: "Цветок 26",
        },
        price: 350,
        image: "1786650573544-18163286-sm.webp",
      },
      {
        id: "p11379",
        name: {
          tk: "Gül 27",
          ru: "Цветок 27",
        },
        price: 250,
        image: "1786650622533-229909035-sm.webp",
      },
      {
        id: "p11380",
        name: {
          tk: "Gül 28",
          ru: "Цветок 28",
        },
        price: 250,
        image: "1786650642921-211332510-sm.webp",
      },
      {
        id: "p11381",
        name: {
          tk: "Gül 29",
          ru: "Цветок 29",
        },
        price: 600,
        image: "1786650669988-610480323-sm.webp",
      },
      {
        id: "p11384",
        name: {
          tk: "Gül 30",
          ru: "Цветок 30",
        },
        price: 800,
        image: "1786650749176-116745163-sm.webp",
      },
      {
        id: "p11385",
        name: {
          tk: "Gül 31",
          ru: "Цветок 31",
        },
        price: 350,
        image: "1786650780198-877041497-sm.webp",
      },
      {
        id: "p11386",
        name: {
          tk: "Gül 32",
          ru: "Цветок 32",
        },
        price: 350,
        image: "1786650815135-343002936-sm.webp",
      },
      {
        id: "p11387",
        name: {
          tk: "Gül 33",
          ru: "Цветок 33",
        },
        price: 250,
        image: "1786650907356-797059664-sm.webp",
      },
      {
        id: "p11388",
        name: {
          tk: "Gül 34",
          ru: "Цветок 34",
        },
        price: 350,
        image: "1786650941049-23552337-sm.webp",
      },
      {
        id: "p11389",
        name: {
          tk: "Gül 35",
          ru: "Цветок 35",
        },
        price: 500,
        image: "1786650968876-711575804-sm.webp",
      },
      {
        id: "p11391",
        name: {
          tk: "Gül 36",
          ru: "Цветок 36",
        },
        price: 500,
        image: "1786651020028-329736903-sm.webp",
      },
      {
        id: "p11393",
        name: {
          tk: "Gül 37",
          ru: "Цветок 37",
        },
        price: 300,
        image: "1786651057640-339990611-sm.webp",
      },
      {
        id: "p11394",
        name: {
          tk: "Gül 38",
          ru: "Цветок 38",
        },
        price: 700,
        image: "1786651095006-877119869-sm.webp",
      },
      {
        id: "p11397",
        name: {
          tk: "Gül 39",
          ru: "Цветок 39",
        },
        price: 250,
        image: "1786651174877-999354342-sm.webp",
      },
      {
        id: "p11398",
        name: {
          tk: "Gül 40",
          ru: "Цветок 40",
        },
        price: 350,
        image: "1786651205556-468970883-sm.webp",
      },
      {
        id: "p11399",
        name: {
          tk: "Gül 41",
          ru: "Цветок 41",
        },
        price: 500,
        image: "1786651222037-277177476-sm.webp",
      },
      {
        id: "p11402",
        name: {
          tk: "Gül 42",
          ru: "Цветок 42",
        },
        price: 600,
        image: "1786651367857-727933429-sm.webp",
      },
      {
        id: "p11414",
        name: {
          tk: "Gül 43",
          ru: "Цветок 43",
        },
        price: 150,
        image: "1786652023775-278525544-sm.webp",
      },
      {
        id: "p11415",
        name: {
          tk: "Gül 44",
          ru: "Цветок 44",
        },
        price: 300,
        image: "1786652290430-786787843-sm.webp",
      },
      {
        id: "p11416",
        name: {
          tk: "Gül 45",
          ru: "Цветок 45",
        },
        price: 300,
        image: "1786652316810-407728332-sm.webp",
      },
      {
        id: "p11417",
        name: {
          tk: "Gül 46",
          ru: "Цветок 46",
        },
        price: 300,
        image: "1786652355477-56904026-sm.webp",
      },
      {
        id: "p11419",
        name: {
          tk: "Gül 47",
          ru: "Цветок 47",
        },
        price: 250,
        image: "1786652457865-547584299-sm.webp",
      },
      {
        id: "p11420",
        name: {
          tk: "Gül 48",
          ru: "Цветок 48",
        },
        price: 0,
        image: "1786652534604-780397317-sm.webp",
      },
      {
        id: "p11422",
        name: {
          tk: "Gül 49",
          ru: "Цветок 49",
        },
        price: 0,
        image: "1786652589966-433597661-sm.webp",
      },
      {
        id: "p11424",
        name: {
          tk: "Gül 50",
          ru: "Цветок 50",
        },
        price: 0,
        image: "1786652695673-785397237-sm.webp",
      },
    ],
  },
  {
    id: "c2240",
    name: {
      tk: "Kompozisiya",
      ru: "Композиции",
    },
    items: [
      {
        id: "p11336",
        name: {
          tk: "Kompozisiya 1",
          ru: "Композиция 1",
        },
        price: 0,
        image: "1786648801782-102088268-sm.webp",
      },
      {
        id: "p11340",
        name: {
          tk: "Kompozisiya 2",
          ru: "Композиция 2",
        },
        price: 1000,
        image: "1786649074399-628441790-sm.webp",
      },
      {
        id: "p11341",
        name: {
          tk: "Kompozisiya 3",
          ru: "Композиция 3",
        },
        price: 300,
        image: "1786649121382-77977362-sm.webp",
      },
      {
        id: "p11343",
        name: {
          tk: "Kompozisiya 4",
          ru: "Композиция 4",
        },
        price: 750,
        image: "1786649186173-937650273-sm.webp",
      },
      {
        id: "p11346",
        name: {
          tk: "Kompozisiya 5",
          ru: "Композиция 5",
        },
        price: 249.88,
        image: "1786649285142-381643818-sm.webp",
      },
      {
        id: "p11348",
        name: {
          tk: "Kompozisiya 6",
          ru: "Композиция 6",
        },
        price: 1200,
        image: "1786649335061-911359408-sm.webp",
      },
      {
        id: "p11356",
        name: {
          tk: "Kompozisiya 7",
          ru: "Композиция 7",
        },
        price: 350,
        image: "1786649684170-710595326-sm.webp",
      },
      {
        id: "p11357",
        name: {
          tk: "Kompozisiya 8",
          ru: "Композиция 8",
        },
        price: 1000,
        image: "1786649713513-965823024-sm.webp",
      },
      {
        id: "p11375",
        name: {
          tk: "Kompozisiya 9",
          ru: "Композиция 9",
        },
        price: 650,
        image: "1786650490971-899050392-sm.webp",
      },
      {
        id: "p11382",
        name: {
          tk: "Kompozisiya 10",
          ru: "Композиция 10",
        },
        price: 300,
        image: "1786650712784-33731027-sm.webp",
      },
      {
        id: "p11383",
        name: {
          tk: "Kompozisiya 11",
          ru: "Композиция 11",
        },
        price: 200,
        image: "1786650730093-433882236-sm.webp",
      },
      {
        id: "p11390",
        name: {
          tk: "Kompozisiya 12",
          ru: "Композиция 12",
        },
        price: 300,
        image: "1786650996223-179220735-sm.webp",
      },
      {
        id: "p11392",
        name: {
          tk: "Kompozisiya 13",
          ru: "Композиция 13",
        },
        price: 1000,
        image: "1786651040135-708072744-sm.webp",
      },
      {
        id: "p11395",
        name: {
          tk: "Kompozisiya 14",
          ru: "Композиция 14",
        },
        price: 2500,
        image: "1786651132556-335599058-sm.webp",
      },
      {
        id: "p11396",
        name: {
          tk: "Kompozisiya 15",
          ru: "Композиция 15",
        },
        price: 1050,
        image: "1786651157508-631540740-sm.webp",
      },
      {
        id: "p11400",
        name: {
          tk: "Kompozisiya 16",
          ru: "Композиция 16",
        },
        price: 400,
        image: "1786651310842-935371773-sm.webp",
      },
      {
        id: "p11401",
        name: {
          tk: "Kompozisiya 17",
          ru: "Композиция 17",
        },
        price: 600,
        image: "1786651345699-980214376-sm.webp",
      },
      {
        id: "p11418",
        name: {
          tk: "Kompozisiya 18",
          ru: "Композиция 18",
        },
        price: 0,
        image: "1786652389631-621886363-sm.webp",
      },
      {
        id: "p11421",
        name: {
          tk: "Kompozisiya 19",
          ru: "Композиция 19",
        },
        price: 0,
        image: "1786652561374-908985608-sm.webp",
      },
      {
        id: "p11423",
        name: {
          tk: "Kompozisiya 20",
          ru: "Композиция 20",
        },
        price: 0,
        image: "1786652622338-348532014-sm.webp",
      },
    ],
  },
  {
    id: "c2239",
    name: {
      tk: "Miska",
      ru: "Миски",
    },
    items: [
      {
        id: "p12550",
        name: {
          tk: "Miska 1",
          ru: "Миска 1",
        },
        price: 0,
        image: "1787047650259-843373088-sm.webp",
      },
      {
        id: "p12551",
        name: {
          tk: "Miska 2",
          ru: "Миска 2",
        },
        price: 0,
        image: "1787047653431-232505125-sm.webp",
      },
      {
        id: "p12552",
        name: {
          tk: "Miska 3",
          ru: "Миска 3",
        },
        price: 0,
        image: "1787047656422-916495313-sm.webp",
      },
      {
        id: "p12553",
        name: {
          tk: "Miska 4",
          ru: "Миска 4",
        },
        price: 0,
        image: "1787047662358-558738604-sm.webp",
      },
      {
        id: "p12554",
        name: {
          tk: "Miska 5",
          ru: "Миска 5",
        },
        price: 0,
        image: "1787047667070-101660194-sm.webp",
      },
      {
        id: "p12555",
        name: {
          tk: "Miska 6",
          ru: "Миска 6",
        },
        price: 0,
        image: "1787047670260-539612769-sm.webp",
      },
      {
        id: "p12556",
        name: {
          tk: "Miska 7",
          ru: "Миска 7",
        },
        price: 0,
        image: "1787047673532-440662741-sm.webp",
      },
      {
        id: "p12557",
        name: {
          tk: "Miska 8",
          ru: "Миска 8",
        },
        price: 0,
        image: "1787047677279-445157477-sm.webp",
      },
      {
        id: "p12558",
        name: {
          tk: "Miska 9",
          ru: "Миска 9",
        },
        price: 0,
        image: "1787047690628-250422268-sm.webp",
      },
      {
        id: "p12559",
        name: {
          tk: "Miska 10",
          ru: "Миска 10",
        },
        price: 0,
        image: "1787047694027-600220287-sm.webp",
      },
    ],
  },
  {
    id: "c2238",
    name: {
      tk: "Suwenir",
      ru: "Сувениры",
    },
    items: [
      {
        id: "p12540",
        name: {
          tk: "Suwenir 1",
          ru: "Сувенир 1",
        },
        price: 0,
        image: "1787047530093-442657565-sm.webp",
      },
      {
        id: "p12541",
        name: {
          tk: "Suwenir 2",
          ru: "Сувенир 2",
        },
        price: 0,
        image: "1787047534965-461308274-sm.webp",
      },
      {
        id: "p12542",
        name: {
          tk: "Suwenir 3",
          ru: "Сувенир 3",
        },
        price: 150,
        image: "1787047538017-760805531-sm.webp",
      },
      {
        id: "p12543",
        name: {
          tk: "Suwenir 4",
          ru: "Сувенир 4",
        },
        price: 0,
        image: "1787047541390-921926483-sm.webp",
      },
      {
        id: "p12544",
        name: {
          tk: "Suwenir 5",
          ru: "Сувенир 5",
        },
        price: 250,
        image: "1787047545894-112842566-sm.webp",
      },
      {
        id: "p12545",
        name: {
          tk: "Suwenir 6",
          ru: "Сувенир 6",
        },
        price: 230,
        image: "1787047549319-568261191-sm.webp",
      },
      {
        id: "p12546",
        name: {
          tk: "Suwenir 7",
          ru: "Сувенир 7",
        },
        price: 230,
        image: "1787047552994-571617262-sm.webp",
      },
      {
        id: "p12547",
        name: {
          tk: "Suwenir 8",
          ru: "Сувенир 8",
        },
        price: 120,
        image: "1787047557284-584232057-sm.webp",
      },
      {
        id: "p12548",
        name: {
          tk: "Suwenir 9",
          ru: "Сувенир 9",
        },
        price: 120,
        image: "1787047564826-347616227-sm.webp",
      },
      {
        id: "p12549",
        name: {
          tk: "Suwenir 10",
          ru: "Сувенир 10",
        },
        price: 250,
        image: "1787047569183-450091708-sm.webp",
      },
      {
        id: "p12560",
        name: {
          tk: "Suwenir 11",
          ru: "Сувенир 11",
        },
        price: 100,
        image: "1787047723393-844609439-sm.webp",
      },
      {
        id: "p12561",
        name: {
          tk: "Suwenir 12",
          ru: "Сувенир 12",
        },
        price: 190,
        image: "1787047726880-128581508-sm.webp",
      },
      {
        id: "p12562",
        name: {
          tk: "Suwenir 13",
          ru: "Сувенир 13",
        },
        price: 180,
        image: "1787047729859-175669292-sm.webp",
      },
      {
        id: "p12563",
        name: {
          tk: "Suwenir 14",
          ru: "Сувенир 14",
        },
        price: 90,
        image: "1787047732873-540021001-sm.webp",
      },
      {
        id: "p12565",
        name: {
          tk: "Suwenir 16",
          ru: "Сувенир 16",
        },
        price: 1200,
        image: "1787047748192-77549226-sm.webp",
      },
      {
        id: "p12566",
        name: {
          tk: "Suwenir 17",
          ru: "Сувенир 17",
        },
        price: 110,
        image: "1787047751412-330533065-sm.webp",
      },
      {
        id: "p12567",
        name: {
          tk: "Suwenir 18",
          ru: "Сувенир 18",
        },
        price: 120,
        image: "1787047768002-717684452-sm.webp",
      },
      {
        id: "p12568",
        name: {
          tk: "Suwenir 19",
          ru: "Сувенир 19",
        },
        price: 190,
        image: "1787047770739-510752544-sm.webp",
      },
      {
        id: "p12569",
        name: {
          tk: "Suwenir 20",
          ru: "Сувенир 20",
        },
        price: 350,
        image: "1787047773926-603410638-sm.webp",
      },
    ],
  },
  {
    id: "c2472",
    name: {
      tk: "Karopkalar",
      ru: "Коробки",
    },
    items: [
      {
        id: "p12530",
        name: {
          tk: "Karopka 1",
          ru: "Коробка 1",
        },
        price: 600,
        image: "1787047174197-631418762-sm.webp",
      },
      {
        id: "p12531",
        name: {
          tk: "Karopka 2",
          ru: "Коробка 2",
        },
        price: 450,
        image: "1787047208615-216243103-sm.webp",
      },
      {
        id: "p12532",
        name: {
          tk: "Karopka 3",
          ru: "Коробка 3",
        },
        price: 250,
        image: "1787047234390-205873236-sm.webp",
      },
      {
        id: "p12533",
        name: {
          tk: "Karopka 4",
          ru: "Коробка 4",
        },
        price: 230,
        image: "1787047252495-720721452-sm.webp",
      },
      {
        id: "p12534",
        name: {
          tk: "Karopka 5",
          ru: "Коробка 5",
        },
        price: 200,
        image: "1787047275175-175368938-sm.webp",
      },
      {
        id: "p12535",
        name: {
          tk: "Karopka 6",
          ru: "Коробка 6",
        },
        price: 140,
        image: "1787047289418-587340071-sm.webp",
      },
      {
        id: "p12536",
        name: {
          tk: "Karopka 7",
          ru: "Коробка 7",
        },
        price: 300,
        image: "1787047317262-603115194-sm.webp",
      },
      {
        id: "p12537",
        name: {
          tk: "Karopka 8",
          ru: "Коробка 8",
        },
        price: 250,
        image: "1787047337983-66149595-sm.webp",
      },
      {
        id: "p12538",
        name: {
          tk: "Karopka 9",
          ru: "Коробка 9",
        },
        price: 200,
        image: "1787047352486-705946432-sm.webp",
      },
    ],
  },
];

/* ==========================================================================
5. APP
========================================================================== */
const LS = {
  cart: "sm.market.cart",
  lang: "sm.market.lang",
  theme: "sm.market.theme",
  who: "sm.market.who",
  mode: "sm.market.mode", // sade mi hediye mi / simple or gift
  counted: "sm.market.counted", // son sayım zamanı / last counted at (ms)
};

const $ = (sel) => document.querySelector(sel);
const els = {
  html: document.documentElement,
  header: $("header.topbar"),
  heroDecor: $("#heroDecor"),
  heroContent: $("#heroContent"),
  heroLogo: $("#heroLogo"),
  heroLeft: $("#heroLeft"),
  heroRight: $("#heroRight"),
  bannerWrap: $("#bannerWrap"),
  bannerTrack: $("#bannerTrack"),
  bannerDots: $("#bannerDots"),
  catrail: $("#catrail"),
  catrailNav: $("nav.catrail"),
  content: $("#content"),
  langBtn: $("#langBtn"),
  langMenu: $("#langMenu"),
  langFlag: $("#langFlag"),
  langCode: $("#langCode"),
  themeBtn: $("#themeBtn"),
  iconSun: $("#iconSun"),
  iconMoon: $("#iconMoon"),
  fab: $("#fab"),
  fabBadge: $("#fabBadge"),
  visits: $("#visits"),
  visitsNum: $("#visitsNum"),
  // topOrder: $("#topOrder"),
  backdrop: $("#backdrop"),
  sheet: $("#sheet"),
  sheetBody: $("#sheetBody"),
  cartLines: $("#cartLines"),
  checkout: $("#checkout"),
  sheetCount: $("#sheetCount"),
  sheetClose: $("#sheetClose"),
  deliveryValue: $("#deliveryValue"),
  totalValue: $("#totalValue"),
  orderBtn: $("#orderBtn"),
  callBtn: $("#callBtn"),
  clearBtn: $("#clearBtn"),
  pop: $("#pop"),
  popBack: $("#popBack"),
  popCard: $("#popCard"),
  popClose: $("#popClose"),
  popImg: $("#popImg"),
  popImgWrap: $("#popImgWrap"),
  popBadge: $("#popBadge"),
  popTitle: $("#popTitle"),
  popPricePill: $("#popPricePill"),
  popPriceBig: $("#popPriceBig"),
  popStepper: $("#popStepper"),
  popQty: $("#popQty"),
  popDec: $("#popDec"),
  popInc: $("#popInc"),
  popCta: $("#popCta"),
  callFab: $("#callFab"),
  toasts: $("#toasts"),
};

const store = (() => {
  const read = (key, fallback) => {
    try {
      const v = localStorage.getItem(key);
      return v == null ? fallback : JSON.parse(v);
    } catch {
      return fallback;
    }
  };
  const write = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* private mode */
    }
  };
  return { read, write };
})();

// Sipariş biçimleri. Sade: kendine alırsın, ad + adres yeter.
// Hediye: başkasına gider — adresi biz sormayız, alıcıyı arayıp sorarız.
// O yüzden sadece iki şey lazım: alıcının telefonu ve gutlag ýazgysy.
// The two ways to order. Simple: it is for you, name + address is enough.
// Gift: it goes to someone else — we do not ask for their address, the shop
// rings them and asks. So only two things are needed: the recipient's phone
// number and the card text.
const MODES = ["simple", "gift"];

// Alanlar tek nesnede durur ve kip değişince silinmez — müşteri sade ile
// hediye arasında gidip gelirken yazdıklarını kaybetmesin.
// Every field lives in one object and survives a mode change, so nothing
// typed is lost while the customer flips between simple and gift.
const BLANK_WHO = {
  name: "",
  address: "",
  phone: "", // sadece 8 hane, +993 önekisiz / the 8 digits only, no +993
  card: "",
};

// localStorage'daki kayıt elle de değiştirilebilir; sadece tanıdığımız
// alanları ve sadece metin olanları alırız.
// The saved record can be edited by hand, so take only the fields we know
// and only the ones that are text.
const cleanWho = (saved) => {
  const out = {};
  if (!saved || typeof saved !== "object") return out;
  Object.keys(BLANK_WHO).forEach((key) => {
    if (typeof saved[key] === "string") out[key] = saved[key];
  });
  return out;
};

const state = {
  lang: LANGS.some((l) => l.code === store.read(LS.lang, null))
    ? store.read(LS.lang, null)
    : CONFIG.defaultLanguage,
  active: MENU.length ? MENU[0].id : null, // category highlighted in the rail
  cart: store.read(LS.cart, {}), // { productId: qty }
  // Eski kayıtta yeni alanlar yok; boş şablonun üstüne yazılır. Kayıt
  // bozuksa şablon olduğu gibi kalır, alanlar hep string olur.
  // Older saved data lacks the new fields, so it lands on a blank
  // template. A corrupt record leaves the template untouched, which keeps
  // every field a string.
  who: { ...BLANK_WHO, ...cleanWho(store.read(LS.who, null)) },
  mode: MODES.includes(store.read(LS.mode, null))
    ? store.read(LS.mode, null)
    : "simple",
  sheetOpen: false,
  popId: null, // product shown in the big popup
};

const PRODUCTS = new Map();
const CATEGORY_OF = new Map();
MENU.forEach((cat) =>
  cat.items.forEach((p) => {
    PRODUCTS.set(p.id, p);
    CATEGORY_OF.set(p.id, cat);
  }),
);

const t = (key) => (T[state.lang] || T.ru)[key] || key;
const tr = (obj) =>
  obj ? obj[state.lang] || obj.ru || Object.values(obj)[0] || "" : "";
const nameOf = (item) => tr(item.name);
const money = (n) => {
  const num = Number(n).toFixed(2).replace(/\.00$/, "");
  return CONFIG.currencyAfter
    ? `${num} ${CONFIG.currency}`
    : `${CONFIG.currency}${num}`;
};
const imgUrl = (file) => `uploads/${file}`;
const escape = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[c],
  );

const cartCount = () => Object.values(state.cart).reduce((n, q) => n + q, 0);
const cartTotal = () =>
  Object.entries(state.cart).reduce((sum, [id, q]) => {
    const p = PRODUCTS.get(id);
    return p ? sum + p.price * q : sum;
  }, 0);
const deliveryFee = () => (cartCount() > 0 ? CONFIG.deliveryFee : 0);
const grandTotal = () => cartTotal() + deliveryFee();

const lockScroll = () => {
  document.body.classList.toggle(
    "locked",
    state.sheetOpen || state.popId !== null,
  );
};

/* -------------------------------------------------------------------- hero */
function renderHero() {
  els.heroLogo.src = CONFIG.logo;
  els.heroLogo.alt = CONFIG.brand;
  els.heroLeft.src = CONFIG.heroLeft;
  els.heroRight.src = CONFIG.heroRight;
  [els.heroLogo, els.heroLeft, els.heroRight].forEach((img) => {
    img.onerror = () => {
      img.style.visibility = "hidden";
    };
  });
}

// Both layers trail the page at a fraction of the scroll speed and the hero
// fades out as it leaves — the same feel as the Electron menu.
function parallax(y) {
  els.heroContent.style.transform = `translate3d(0, ${Math.min(y * 0.4, 200)}px, 0)`;
  els.heroDecor.style.transform = `translate3d(0, ${Math.min(y * 0.22, 110)}px, 0)`;
  els.html.style.setProperty("--hero-op", String(Math.max(0, 1 - y / 220)));
}

/* ------------------------------------------------------------------ banner */
// A clone of the last banner sits in front and a clone of the first at the end,
// so sliding past either edge keeps moving the same way instead of rewinding.
const banner = {
  slides: [],
  index: 0,
  first: 0,
  last: 0,
  loop: false,
  timer: null,
  startX: null,
  dragX: 0,
};

function renderBanner() {
  if (!BANNERS.length) {
    els.bannerWrap.style.display = "none";
    return;
  }

  banner.loop = BANNERS.length > 1;
  banner.slides = banner.loop
    ? [BANNERS[BANNERS.length - 1], ...BANNERS, BANNERS[0]]
    : BANNERS.slice();
  banner.first = banner.loop ? 1 : 0;
  banner.last = banner.loop ? BANNERS.length : 0;
  banner.index = banner.first;

  els.bannerTrack.innerHTML = banner.slides
    .map((b) => {
      const title = tr(b.title),
        text = tr(b.text);
      return `
<div class="slide">
  ${b.image ? `<img src="${imgUrl(b.image)}" alt="${escape(title)}" draggable="false" onerror="this.remove()" />` : ""}
  <div class="veil"></div>
  ${title || text ? `<div class="txt">${title ? `<b>${escape(title)}</b>` : ""}${text ? `<span>${escape(text)}</span>` : ""}</div>` : ""}
</div>`;
    })
    .join("");

  els.bannerDots.innerHTML = banner.loop
    ? BANNERS.map(
        (_, i) =>
          `<button type="button" data-dot="${i}" aria-label="${i + 1}"></button>`,
      ).join("")
    : "";

  moveBanner(false);
  restartBanner();
}

// A clone shows the same picture as its twin, so stepping from either is equal.
const twin = (i) =>
  i === banner.slides.length - 1 ? banner.first : i === 0 ? banner.last : i;

function moveBanner(animate = true) {
  els.bannerTrack.style.transition = animate
    ? "transform 500ms ease-in-out"
    : "none";
  els.bannerTrack.style.transform = `translateX(calc(-${banner.index * 100}% + ${banner.dragX}px))`;
  const dot = banner.loop
    ? (banner.index - 1 + BANNERS.length) % BANNERS.length
    : 0;
  els.bannerDots.querySelectorAll("[data-dot]").forEach((b) => {
    b.setAttribute("aria-current", Number(b.dataset.dot) === dot);
  });
}

function stepBanner(dir) {
  banner.index = twin(banner.index) + dir;
  moveBanner(true);
}

function stopBanner() {
  if (banner.timer) clearInterval(banner.timer);
  banner.timer = null;
}

function restartBanner() {
  stopBanner();
  if (!banner.loop) return;
  banner.timer = setInterval(() => stepBanner(1), CONFIG.bannerAutoplayMs);
}

// Once the slide onto a clone has finished we are visually already on its twin,
// so jump to the twin's real index with the transition switched off.
els.bannerTrack.addEventListener("transitionend", (e) => {
  if (!banner.loop || e.target !== els.bannerTrack) return;
  const next = twin(banner.index);
  if (next === banner.index) return;
  banner.index = next;
  moveBanner(false);
  void els.bannerTrack.offsetHeight; // commit before transitions come back
});

els.bannerTrack.addEventListener("pointerdown", (e) => {
  if (!banner.loop) return;
  stopBanner();
  banner.startX = e.clientX;
  els.bannerTrack.classList.add("dragging");
  els.bannerTrack.setPointerCapture(e.pointerId);
});

els.bannerTrack.addEventListener("pointermove", (e) => {
  if (banner.startX === null) return;
  banner.dragX = e.clientX - banner.startX;
  moveBanner(false);
});

function endBannerDrag(e) {
  if (banner.startX === null) return;
  const dx = e.clientX - banner.startX;
  banner.startX = null;
  banner.dragX = 0;
  els.bannerTrack.classList.remove("dragging");
  // A phone needs a shorter commit distance than a wide tablet, so scale it.
  const threshold = Math.max(50, els.bannerTrack.clientWidth * 0.15);
  if (dx <= -threshold) stepBanner(1);
  else if (dx >= threshold) stepBanner(-1);
  else moveBanner(true);
  restartBanner();
}
els.bannerTrack.addEventListener("pointerup", endBannerDrag);
els.bannerTrack.addEventListener("pointercancel", endBannerDrag);

els.bannerDots.addEventListener("click", (e) => {
  const dot = e.target.closest("[data-dot]");
  if (!dot) return;
  banner.index = Number(dot.dataset.dot) + banner.first;
  moveBanner(true);
  restartBanner();
});

/* -------------------------------------------------------------- categories */
function renderCategories() {
  els.catrail.innerHTML = MENU.map((cat) => {
    const thumb = cat.image
      ? `<img src="${imgUrl(cat.image)}" alt="" loading="lazy" decoding="async" onerror="this.remove()" />`
      : "";
    return `
<button class="chip${thumb ? "" : " plain"}" type="button" data-cat="${escape(cat.id)}" aria-selected="${state.active === cat.id}">
  ${thumb}${escape(nameOf(cat))} <span class="count">${cat.items.length}</span>
</button>`;
  }).join("");
}

// Where the page must land so a section header clears the header + rail.
const anchorOffset = () =>
  els.header.offsetHeight + els.catrailNav.offsetHeight + 10;

let clickScrolling = null;

function scrollToCategory(id) {
  const section = document.getElementById(`cat-${id}`);
  if (!section) return;
  setActive(id);
  // While the smooth scroll runs, the spy would fight it over the active chip.
  clearTimeout(clickScrolling);
  clickScrolling = setTimeout(() => {
    clickScrolling = null;
  }, 700);
  const top =
    section.getBoundingClientRect().top + window.scrollY - anchorOffset();
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

function setActive(id) {
  if (state.active === id) return;
  state.active = id;
  const chips = [...els.catrail.querySelectorAll(".chip")];
  chips.forEach((c) => c.setAttribute("aria-selected", c.dataset.cat === id));
  const chip = chips.find((c) => c.dataset.cat === id);
  if (!chip) return;
  // Scroll the rail itself — scrollIntoView would drag the whole page along.
  const target =
    chip.offsetLeft - (els.catrail.clientWidth - chip.offsetWidth) / 2;
  els.catrail.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
}

// Scrolling down walks the rail through the categories, like the Electron app.
function spy() {
  if (clickScrolling) return;
  const anchor = anchorOffset() + 8;
  const sections = els.content.querySelectorAll(".section");
  if (!sections.length) return;
  let current = null;
  for (const s of sections) {
    const r = s.getBoundingClientRect();
    if (r.top - anchor <= 0 && r.bottom - anchor > 0) {
      current = s.dataset.cat;
      break;
    }
  }
  // Above the first section (still on the hero) keep the first chip lit; past
  // the last one keep the last chip lit.
  if (!current) {
    current =
      sections[0].getBoundingClientRect().top - anchor > 0
        ? MENU[0].id
        : MENU[MENU.length - 1].id;
  }
  setActive(current);
}

/* ------------------------------------------------------------ product grid */
// One product = one card div.
function card(p) {
  const qty = state.cart[p.id] || 0;
  const media = p.image
    ? `<img src="${imgUrl(p.image)}" alt="${escape(nameOf(p))}" loading="lazy" decoding="async" onerror="this.style.display='none'" />`
    : "";
  return `
<div class="card${qty ? " in-cart" : ""}" data-id="${escape(p.id)}">
<div class="card-img">
  <span class="ph" aria-hidden="true">🌸</span>
  ${media}
  <span class="qty-flag">${qty}</span>
  <span class="zoom" aria-hidden="true">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
  </span>
</div>
<div class="card-body">
  <div class="card-name">${escape(nameOf(p))}</div>
  <div class="card-foot">
    <span class="price">${escape(money(p.price))}</span>
    <button class="add" type="button" data-act="inc" aria-label="+">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
    </button>
    <div class="stepper">
      <button type="button" data-act="dec" aria-label="-">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M5 12h14"/></svg>
      </button>
      <button type="button" data-act="inc" aria-label="+">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
      </button>
    </div>
  </div>
</div>
</div>`;
}

function renderContent() {
  els.content.innerHTML = MENU.map(
    (cat) => `
<section class="section" id="cat-${escape(cat.id)}" data-cat="${escape(cat.id)}">
<div class="section-head">
  <h2>${escape(nameOf(cat))}</h2>
  <span class="n">${cat.items.length} ${escape(t("item"))}</span>
</div>
<div class="grid">${cat.items.map(card).join("")}</div>
</section>`,
  ).join("");
}

/* ------------------------------------------------------- big image popup */
function renderPop() {
  const p = PRODUCTS.get(state.popId);
  if (!p) return;
  const qty = state.cart[p.id] || 0;

  els.popTitle.textContent = nameOf(p);
  els.popBadge.textContent = tr(CATEGORY_OF.get(p.id)?.name);
  els.popBadge.style.display = els.popBadge.textContent ? "" : "none";
  els.popPricePill.textContent = money(p.price);
  els.popPriceBig.textContent = money(p.price);

  // Popup tek bir <img> kullanır: yeni ürün açılırken parıltıyı geri getir.
  // The popup reuses one <img>, so bring the shimmer back for each product.
  if (p.image) {
    const url = imgUrl(p.image);
    if (els.popImg.getAttribute("src") !== url) {
      els.popImgWrap.classList.remove("ok");
      els.popImg.src = url;
    }
    els.popImg.alt = nameOf(p);
    els.popImg.style.display = "";
    if (els.popImg.complete && els.popImg.currentSrc)
      els.popImgWrap.classList.add("ok");
  } else {
    els.popImg.removeAttribute("src");
    els.popImg.style.display = "none";
    els.popImgWrap.classList.add("ok"); // resim yok, parıltı da yok / no image, no shimmer
  }

  els.popQty.textContent = qty;
  els.popStepper.classList.toggle("on", qty > 0);
  els.popCta.textContent = qty > 0 ? t("viewCart") : t("addToCart");
}

function openProduct(id) {
  if (!PRODUCTS.has(id)) return;
  state.popId = id;
  renderPop();
  els.pop.classList.add("open");
  els.popBack.classList.add("open");
  lockScroll();
  // Android's back gesture should close the picture, not leave the page.
  history.pushState({ productPopup: true }, "", location.href);
}

function closeProduct(fromPopState = false) {
  if (state.popId === null) return;
  state.popId = null;
  els.pop.classList.remove("open");
  els.popBack.classList.remove("open");
  lockScroll();
  if (!fromPopState && history.state && history.state.productPopup)
    history.back();
}

window.addEventListener("popstate", () => {
  if (state.popId !== null) closeProduct(true);
});

els.popBack.addEventListener("click", () => closeProduct());
els.popClose.addEventListener("click", () => closeProduct());
els.pop.addEventListener("click", (e) => {
  if (!els.popCard.contains(e.target)) closeProduct();
});

els.popInc.addEventListener("click", () => {
  setQty(state.popId, (state.cart[state.popId] || 0) + 1);
});
els.popDec.addEventListener("click", () => {
  setQty(state.popId, (state.cart[state.popId] || 0) - 1);
});
els.popCta.addEventListener("click", () => {
  const qty = state.cart[state.popId] || 0;
  if (qty > 0) {
    closeProduct();
    openSheet(true);
    return;
  }
  add(state.popId);
});

/* -------------------------------------------------------------------- cart */
function renderCart() {
  const ids = Object.keys(state.cart);
  const count = cartCount();

  els.fabBadge.textContent = count;
  els.fabBadge.classList.toggle("on", count > 0);
  // els.topOrder.classList.toggle("on", count > 0);
  els.sheetCount.textContent = count ? `${count} ${t("item")}` : "";
  els.deliveryValue.textContent = money(deliveryFee());
  els.totalValue.textContent = money(grandTotal());
  els.orderBtn.disabled = count === 0;

  if (!ids.length) {
    els.cartLines.innerHTML = `<div class="empty"><div class="big">🌷</div><div>${escape(t("empty"))}</div><div>${escape(t("emptyHint"))}</div></div>`;
    els.checkout.hidden = true;
    return;
  }

  const lines = ids
    .map((id) => {
      const p = PRODUCTS.get(id);
      if (!p) return "";
      const qty = state.cart[id];
      const media = p.image
        ? `<img src="${imgUrl(p.image)}" alt="" loading="lazy" onerror="this.remove()" />`
        : "";
      return `
<div class="line" data-id="${escape(id)}">
  <div class="line-img">${media}</div>
  <div class="line-main">
    <div class="line-name">${escape(nameOf(p))}</div>
    <div class="line-price">${escape(money(p.price))}</div>
  </div>
  <div class="stepper" style="display:flex">
    <button type="button" data-act="dec" aria-label="-">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M5 12h14"/></svg>
    </button>
    <span class="q">${qty}</span>
    <button type="button" data-act="inc" aria-label="+">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
    </button>
  </div>
  <div class="line-sum">${escape(money(p.price * qty))}</div>
</div>`;
    })
    .join("");

  els.cartLines.innerHTML = lines;
  els.checkout.hidden = false;
  renderCheckout();
}

/* ---------------------------------------------- sade / hediye — simple / gift */
// Kart yazısı için üst sınır. Uzun metin SMS'i böler ve kartın kâğıdına
// zaten sığmaz. / Cap for the card text: longer splits the SMS and would
// not fit the paper card anyway.
const CARD_MAX = 240;

const FLOWER_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 12C9.5 9.9 9.5 6.2 12 4c2.5 2.2 2.5 5.9 0 8Z"/><path d="M12 12C9.5 9.9 9.5 6.2 12 4c2.5 2.2 2.5 5.9 0 8Z" transform="rotate(72 12 12)"/><path d="M12 12C9.5 9.9 9.5 6.2 12 4c2.5 2.2 2.5 5.9 0 8Z" transform="rotate(144 12 12)"/><path d="M12 12C9.5 9.9 9.5 6.2 12 4c2.5 2.2 2.5 5.9 0 8Z" transform="rotate(216 12 12)"/><path d="M12 12C9.5 9.9 9.5 6.2 12 4c2.5 2.2 2.5 5.9 0 8Z" transform="rotate(288 12 12)"/><circle cx="12" cy="12" r="2.3"/></svg>`;

const GIFT_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 12v8.5H4V12"/><path d="M2.5 7.5h19V12h-19z"/><path d="M12 7.5v13"/><path d="M12 7.5S11 3 8.5 3a2.25 2.25 0 0 0 0 4.5Z"/><path d="M12 7.5S13 3 15.5 3a2.25 2.25 0 0 1 0 4.5Z"/></svg>`;

// Türkmenistan cep numarası: +993 ve tam 8 hane — ne eksik ne fazla.
// Önek sabit olduğu için kutuya yazılmaz, kutunun solunda durur; state'te de
// sadece 8 hane saklanır.
// A Turkmen mobile number: +993 and exactly 8 digits — no more, no less. The
// prefix is fixed, so it is not typed into the box: it sits to the left of it,
// and only the 8 digits are kept in state.
const PHONE_PREFIX = "+993";
const PHONE_DIGITS = 8;
const phoneOk = (digits) =>
  new RegExp(`^\\d{${PHONE_DIGITS}}$`).test(digits.trim());

// Alıcının tam numarası, mesaja yazılacağı hâliyle.
// The recipient's full number, exactly as it goes into the message.
const giftPhone = () => `${PHONE_PREFIX} ${state.who.phone.trim()}`;

// Ödeme bloğu sadece dil ya da kip değişince yeniden çizilir. Adet
// değişiminde çizilseydi, yazarken imleç her tıklamada kaçardı.
// The checkout block is rebuilt only when the language or the mode
// changes. Rebuilding it on every quantity tap would throw the caret out
// of whatever the customer was typing.
let checkoutSig = null;

function renderCheckout() {
  const sig = `${state.lang}|${state.mode}`;
  if (sig === checkoutSig && els.checkout.childElementCount) return;
  checkoutSig = sig;

  const gift = state.mode === "gift";
  els.checkout.classList.toggle("gift", gift);

  const modes = `
<div class="modes">
<button class="mode" type="button" data-mode="simple" aria-pressed="${!gift}">
  ${FLOWER_ICON}<span>${escape(t("modeSimple"))}</span>
</button>
<button class="mode" type="button" data-mode="gift" aria-pressed="${gift}">
  ${GIFT_ICON}<span>${escape(t("modeGift"))}</span>
</button>
</div>`;

  // Sade: kendine alırsın, ad + adres. Hediye: iki satır, o kadar —
  // alıcının numarası ve gutlag ýazgysy.
  // Simple: it is for you, name + address. Gift: two rows and nothing else —
  // the recipient's number and the card text.
  const fields = gift
    ? `
<div class="fields">
<label class="field-label" for="f-phone">${escape(t("giftPhone"))}</label>
<div class="phone-field">
  <span class="phone-prefix" id="phonePrefix">${PHONE_PREFIX}</span>
  <input id="f-phone" data-field="phone" type="tel" inputmode="numeric"
         autocomplete="tel-national" maxlength="${PHONE_DIGITS}"
         pattern="\\d{${PHONE_DIGITS}}" aria-describedby="phonePrefix"
         value="${escape(state.who.phone)}"
         placeholder="${"X".repeat(PHONE_DIGITS)}" />
</div>
<textarea id="f-card" class="card" data-field="card" rows="3" maxlength="${CARD_MAX}"
          placeholder="${escape(t("cardText"))}" aria-label="${escape(t("cardText"))}">${escape(state.who.card)}</textarea>
</div>
<div class="gift-note">
<span>${escape(t("cardHint"))}</span>
<b id="cardCount">0/${CARD_MAX}</b>
</div>`
    : `
<div class="fields">
<input id="f-name" data-field="name" type="text" autocomplete="name"
       value="${escape(state.who.name)}"
       placeholder="${escape(t("name"))}" aria-label="${escape(t("name"))}" />
<textarea id="f-address" data-field="address" rows="2"
          placeholder="${escape(t("address"))}" aria-label="${escape(t("address"))}">${escape(state.who.address)}</textarea>
</div>`;

  els.checkout.innerHTML = modes + fields;
  if (gift) {
    paintPhoneState();
    paintCardCount();
  }
}

// Numara tam 8 hane olunca kutu yeşile döner; eksikken kırmızı değil nötr
// durur — daha yazarken kimseyi azarlamayalım.
// The box turns green once the number is exactly 8 digits. While it is still
// short it stays neutral rather than red: no scolding somebody mid-typing.
function paintPhoneState() {
  const field = $(".phone-field");
  if (!field) return;
  field.classList.toggle("ok", phoneOk(state.who.phone));
}

function paintCardCount() {
  const count = $("#cardCount");
  if (count) count.textContent = `${state.who.card.length}/${CARD_MAX}`;
}

function setMode(mode) {
  if (!MODES.includes(mode) || state.mode === mode) return;
  state.mode = mode;
  store.write(LS.mode, mode);
  renderCheckout();
}

// Kip düğmeleri ve alanlar her çizimde yenilenir; dinleyiciler bu yüzden
// hiç değişmeyen kapsayıcıda durur — bir kez bağlanır, hep çalışır.
// The mode buttons and the fields are replaced on every render, so the
// listeners sit on the container that never is: bound once, always live.
els.checkout.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-mode]");
  if (btn) setMode(btn.dataset.mode);
});

els.checkout.addEventListener("input", (e) => {
  const field = e.target.dataset.field;
  if (!field || !(field in BLANK_WHO)) return;

  let value = e.target.value;

  // Numara kutusuna sadece rakam girer. Yapıştırılan "+993 65 12 34 56" gibi
  // bir metinden ülke kodu ve boşluklar ayıklanır, geriye 8 hane kalır — böyle
  // yapıştıran müşteri hata mesajı görmez, numarası düzelmiş olur.
  // Only digits reach the number box. Pasting something like "+993 65 12 34 56"
  // drops the country code and the spaces and leaves the 8 digits, so a
  // customer who pastes never meets an error — their number is simply fixed.
  if (field === "phone") {
    value = value.replace(/\D/g, "");
    if (value.startsWith("993")) value = value.slice(3);
    value = value.slice(0, PHONE_DIGITS);
    if (value !== e.target.value) e.target.value = value;
  }

  state.who[field] = value;
  store.write(LS.who, state.who);

  if (field === "phone") paintPhoneState();
  else if (field === "card") paintCardCount();
});

function setQty(id, qty) {
  if (qty > 0) state.cart[id] = Math.min(qty, 99);
  else delete state.cart[id];
  store.write(LS.cart, state.cart);

  // Keep the product's card in sync without re-rendering the whole grid.
  document
    .querySelectorAll(`.card[data-id="${CSS.escape(id)}"]`)
    .forEach((el) => {
      const q = state.cart[id] || 0;
      el.classList.toggle("in-cart", q > 0);
      el.querySelector(".qty-flag").textContent = q;
    });

  if (state.popId === id) renderPop();
  renderCart();
}

function add(id) {
  const p = PRODUCTS.get(id);
  if (!p) return;
  setQty(id, (state.cart[id] || 0) + 1);
  toast(`${nameOf(p)} — ${t("added")}`);
  els.fab.classList.remove("pulse");
  void els.fab.offsetWidth;
  els.fab.classList.add("pulse");
}

function toast(text) {
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = text;
  els.toasts.appendChild(el);
  setTimeout(() => el.remove(), 2150);
}

/* ------------------------------------------------------------- SMS ordering */
function buildMessage() {
  const lines = [t("msgHello"), ""];

  Object.keys(state.cart).forEach((id) => {
    const p = PRODUCTS.get(id);
    if (!p) return;
    const qty = state.cart[id];
    lines.push(`${qty} x ${nameOf(p)} - ${money(p.price * qty)}`);
  });

  lines.push(`${t("delivery")}: ${money(deliveryFee())}`);
  lines.push("", `${t("msgTotal")}: ${money(grandTotal())}`);

  const who = state.who;
  if (state.mode === "gift") {
    // Numara ülke koduyla birlikte yazılır — çiçekçi mesajdaki numaraya
    // dokunup doğrudan arayabilsin. Kart yazısı tırnak içinde: karta geçecek
    // olanla siparişin geri kalanı karışmasın.
    // The number goes out with its country code, so the florist can tap it in
    // the message and call straight away. The card text sits in quotes so what
    // belongs on the card never blurs into the rest of the order.
    lines.push(`${t("msgType")}: ${t("modeGift")}`);
    lines.push(`${t("msgPhone")}: ${giftPhone()}`);
    if (who.card.trim()) lines.push(`${t("msgCard")}: "${who.card.trim()}"`);
  } else {
    lines.push(`${t("msgName")}: ${who.name.trim()}`);
    lines.push(`${t("msgAddress")}: ${who.address.trim()}`);
  }

  return lines.join("\n");
}

// CONFIG.phone'u arama/SMS bağlantısına uygun hale getirir; geçersizse "".
// Normalises CONFIG.phone for tel:/sms: links; returns "" when unusable.
const phoneNumber = () => {
  const number = String(CONFIG.phone || "").replace(/[^\d+]/g, "");
  return number.replace(/\D/g, "").length < 8 ? "" : number;
};

// İki arama düğmesi var: sepetin altındaki kare ve sol alttaki yuvarlak.
// Numara yoksa ikisi de hiç görünmez — çalışmayan düğme göstermeyelim.
// There are two call buttons: the square under the cart and the circle at
// the bottom left. With no usable number neither appears — better no
// button than a dead one.
function setupCallButton() {
  const number = phoneNumber();
  const buttons = [els.callBtn, els.callFab];
  if (!number) {
    buttons.forEach((b) => {
      b.hidden = true;
    });
    return;
  }
  buttons.forEach((b) => {
    b.hidden = false;
    b.href = `tel:${number}`;
  });
}

function sendOrder() {
  if (!cartCount()) {
    toast(t("cartEmptyWarn"));
    return;
  }

  // Siparişin gidebilmesi için gereken alanlar kipe göre değişir: sade kipte
  // ad + adres, hediye kipinde tam 8 haneli alıcı numarası. Gutlag ýazgysy
  // hiçbir zaman zorunlu değil — boş kart da bir seçimdir.
  // What an order needs depends on the mode: name + address when simple, a
  // recipient's number of exactly 8 digits when it is a gift. The card text is
  // never required — leaving it blank is a choice too.
  const gift = state.mode === "gift";
  const missing = gift
    ? phoneOk(state.who.phone)
      ? null
      : "phone"
    : ["name", "address"].find((field) => !state.who[field].trim()) || null;

  if (missing) {
    toast(gift ? t("badPhone") : t("missingInfo"));
    openSheet(true);
    const target = els.checkout.querySelector(`#f-${missing}`);
    target?.focus();
    target?.scrollIntoView({ block: "center", behavior: "smooth" });
    return;
  }

  const number = phoneNumber();
  if (!number) {
    toast(t("noPhone"));
    return;
  }

  // iOS wants sms:<number>&body=…, Android and the rest want ?body=…
  const sep = /iP(hone|ad|od)|Macintosh/i.test(navigator.userAgent) ? "&" : "?";
  toast(t("opening"));
  window.location.href = `sms:${number}${sep}body=${encodeURIComponent(buildMessage())}`;
}

/* -------------------------------------------------------------- cart sheet */
function openSheet(open) {
  state.sheetOpen = open;
  els.sheet.classList.toggle("open", open);
  els.backdrop.classList.toggle("open", open);
  lockScroll();
}

/* ------------------------------------------------------------------- theme */
function setTheme(theme) {
  els.html.dataset.theme = theme;
  els.iconSun.style.display = theme === "dark" ? "block" : "none";
  els.iconMoon.style.display = theme === "dark" ? "none" : "block";
  $('meta[name="theme-color"]').content =
    theme === "dark" ? "#0a1018" : "#fafafa";
  store.write(LS.theme, theme);
}

/* ------------------------------------------------------------- static text */
function renderStatic() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  els.html.lang = state.lang;
  document.title = `${CONFIG.brand} — ${t("tagline")}`;
  $("#brandName").textContent = CONFIG.brand;
  $("#footBrand").textContent = CONFIG.brand;

  // Sayı zaten geldiyse yeni dilin binlik ayracıyla yaz.
  // If the total already arrived, redraw it with the new locale.
  if (els.visits.dataset.total)
    els.visitsNum.textContent = Number(els.visits.dataset.total).toLocaleString(
      state.lang,
    );

  const lang = LANGS.find((l) => l.code === state.lang) || LANGS[0];
  els.fab.setAttribute("aria-label", t("cart"));
  els.fab.title = t("cart");
  // els.topOrder.setAttribute("aria-label", t("order"));
  // els.topOrder.title = t("order");

  // Arama düğmeleri ikonlu; adları dille birlikte değişsin.
  // The call buttons are icon-led, so their names follow the language.
  [els.callBtn, els.callFab].forEach((b) => {
    b.setAttribute("aria-label", t("callNow"));
    b.title = t("callNow");
  });

  els.langFlag.textContent = lang.flag;
  els.langCode.textContent = lang.code.toUpperCase();
  els.langMenu.innerHTML = LANGS.map(
    (l) => `
<button class="lang-item" type="button" role="menuitem" data-lang="${l.code}" aria-current="${l.code === state.lang}">
<span style="font-size:17px">${l.flag}</span><span>${escape(l.label)}</span>
</button>`,
  ).join("");
}

function renderAll() {
  renderStatic();
  renderBanner();
  renderCategories();
  renderContent();
  renderCart();
  if (state.popId !== null) renderPop();
  sweepImages();
}

/* ------------------------------------------------------------------ events */
els.catrail.addEventListener("click", (e) => {
  const chip = e.target.closest(".chip");
  if (chip) scrollToCategory(chip.dataset.cat);
});

els.content.addEventListener("click", (e) => {
  const el = e.target.closest(".card");
  if (!el) return;
  const id = el.dataset.id;
  const act = e.target.closest("[data-act]")?.dataset.act;

  if (act === "inc") add(id);
  else if (act === "dec") setQty(id, (state.cart[id] || 0) - 1);
  else openProduct(id); // tapping the meal opens the big picture
});

els.sheetBody.addEventListener("click", (e) => {
  const line = e.target.closest(".line");
  const act = e.target.closest("[data-act]")?.dataset.act;
  if (!line || !act) return;
  setQty(
    line.dataset.id,
    (state.cart[line.dataset.id] || 0) + (act === "inc" ? 1 : -1),
  );
  renderCart();
});

els.langBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const open = els.langMenu.classList.toggle("open");
  els.langBtn.setAttribute("aria-expanded", open);
});

els.langMenu.addEventListener("click", (e) => {
  const item = e.target.closest("[data-lang]");
  if (!item) return;
  state.lang = item.dataset.lang;
  store.write(LS.lang, state.lang);
  els.langMenu.classList.remove("open");
  els.langBtn.setAttribute("aria-expanded", "false");
  const keep = state.active;
  renderAll();
  state.active = null;
  setActive(keep);
});

document.addEventListener("click", () => {
  els.langMenu.classList.remove("open");
  els.langBtn.setAttribute("aria-expanded", "false");
});

els.themeBtn.addEventListener("click", () => {
  setTheme(els.html.dataset.theme === "dark" ? "light" : "dark");
});

els.fab.addEventListener("click", () => openSheet(true));
// els.topOrder.addEventListener("click", () => openSheet(true));
els.sheetClose.addEventListener("click", () => openSheet(false));
els.backdrop.addEventListener("click", () => openSheet(false));
els.orderBtn.addEventListener("click", sendOrder);

els.clearBtn.addEventListener("click", () => {
  state.cart = {};
  store.write(LS.cart, state.cart);
  renderContent();
  renderCart();
  if (state.popId !== null) renderPop();
});

document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  if (state.popId !== null) closeProduct();
  else if (state.sheetOpen) openSheet(false);
  els.langMenu.classList.remove("open");
});

// Parallax and the category spy share one throttled scroll pass.
let ticking = false;
window.addEventListener(
  "scroll",
  () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      parallax(window.scrollY);
      spy();
      ticking = false;
    });
  },
  { passive: true },
);

// Keep the sticky rail glued right under the header on any screen size.
const syncHeaderHeight = () => {
  els.html.style.setProperty("--header-h", `${els.header.offsetHeight}px`);
};
window.addEventListener("resize", () => {
  syncHeaderHeight();
  moveBanner(false);
});

// Autoplay is pointless while the tab is hidden, and browsers batch the timers.
document.addEventListener("visibilitychange", () => {
  if (document.hidden) stopBanner();
  else restartBanner();
});

/* --------------------------------------------------- ziyaretçi / visitors */
// Backend yok, bu yüzden sayı ücretsiz bir sayaç servisinde tutuluyor.
// İlk servis cevap vermezse ikincisi denenir; ikisi de olmazsa satır
// gizli kalır — kırık bir "—" göstermektense hiç göstermemek daha iyi.
// No backend, so the total lives on a free counter service. If the first
// one is down the second is tried; if both fail the row stays hidden —
// better to show nothing than a broken "—".
//
// Not: bu sayı herkese açıktır ve isteyen artırabilir. Kabaca bir fikir
// verir, ciddi istatistik değildir.
// Note: the number is public and anyone can inflate it. It is a rough
// signal, not real analytics.
const COUNTER_APIS = [
  {
    hit: (n, k) => `https://abacus.jasoncameron.dev/hit/${n}/${k}`,
    get: (n, k) => `https://abacus.jasoncameron.dev/get/${n}/${k}`,
  },
  {
    hit: (n, k) => `https://api.counterapi.dev/v1/${n}/${k}/up`,
    get: (n, k) => `https://api.counterapi.dev/v1/${n}/${k}/`,
  },
];

async function countVisit() {
  const cfg = CONFIG.counter;
  if (!cfg?.enabled || !cfg.name || !cfg.key) return;

  // Aynı tarayıcıyı her yenilemede saymayalım.
  // Do not re-count the same browser on every refresh.
  const windowMs = Math.max(0, cfg.everyHours || 0) * 3600e3;
  const last = Number(store.read(LS.counted, 0)) || 0;
  const isNew = Date.now() - last >= windowMs;

  const n = encodeURIComponent(cfg.name);
  const k = encodeURIComponent(cfg.key);

  for (const api of COUNTER_APIS) {
    try {
      const res = await fetch(isNew ? api.hit(n, k) : api.get(n, k), {
        cache: "no-store",
      });
      if (!res.ok) continue;
      const data = await res.json();
      // Abacus "value", CounterAPI "count" döndürür / returns "count".
      const total = Number(data.value ?? data.count);
      if (!Number.isFinite(total)) continue;

      if (isNew) store.write(LS.counted, Date.now());
      els.visits.dataset.total = String(total);
      els.visitsNum.textContent = total.toLocaleString(state.lang);
      els.visits.hidden = false;
      return;
    } catch {
      /* servis kapalı ya da ağ yok / service down or offline */
    }
  }
}

/* ------------------------------------------------------- resim yükleyicisi */
// Tek dinleyici tüm resimleri karşılar: kart, sepet, kategori, popup, banner.
// load/error olayları köpürmediği için yakalama (capture) evresindeyiz.
// One listener serves every picture — cards, cart, rail, popup, banner.
// load/error do not bubble, hence the capture phase.
const imgDone = (e) => {
  const img = e.target;
  if (img.tagName === "IMG") img.parentElement?.classList.add("ok");
};
document.addEventListener("load", imgDone, true);
document.addEventListener("error", imgDone, true);

// Önbellekten gelen resimler dinleyiciden önce bitmiş olabilir.
// Cached pictures may already be done before the listener ever runs.
const sweepImages = () => {
  document.querySelectorAll("img").forEach((img) => {
    if (img.complete && img.currentSrc) img.parentElement?.classList.add("ok");
  });
};

/* --------------------------------------------------------------------- init */
// Drop cart entries whose product no longer exists in MENU.
Object.keys(state.cart).forEach((id) => {
  if (!PRODUCTS.has(id)) delete state.cart[id];
});

setTheme(store.read(LS.theme, null) || CONFIG.defaultTheme);
setupCallButton();
renderHero();
renderAll();
syncHeaderHeight();
parallax(window.scrollY);

// Menüyü bekletmesin diye ağ isteği en sona bırakıldı.
// Fired last so the network request never holds up the menu.
countVisit();

// Menü çizildi; açılış ekranını kaldır. / Menu is on screen, drop the boot screen.
requestAnimationFrame(() => {
  els.html.classList.add("ready");
  const boot = document.getElementById("boot");
  boot?.addEventListener("transitionend", () => boot.remove(), {
    once: true,
  });
  setTimeout(() => boot?.remove(), 600);
});

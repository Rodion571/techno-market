const products = [
    {
      id: 1,
      name: "Ноутбук Acer Aspire 3 A315-59-51ST",
      price: 19999,
      image: "https://content2.rozetka.com.ua/goods/images/big/423900740.jpg",
      category: "Ноутбуки",
      brand: "Acer",
      description: "15.6\" IPS Full HD, Intel Core i5-1235U, 16 ГБ ОЗУ, 512 ГБ SSD."
    },
    {
      id: 2,
      name: "Ноутбук Lenovo IdeaPad 3 15ITL6",
      price: 18499,
      image: "https://i.citrus.world/imgcache/size_800/uploads/shop/6/b/6b7c1c0689134eb80d5a5878755d5bf4.webp",
      category: "Ноутбуки",
      brand: "Lenovo",
      description: "Intel Core i3-1115G4, 8 ГБ ОЗУ, SSD 256 ГБ, 15.6\" Full HD."
    },
    {
      id: 3,
      name: "Ноутбук ASUS Vivobook X1504VA",
      price: 23999,
      image: "https://files.foxtrot.com.ua/PhotoNew/img_0_58_28167_0_1_89f142.jpg",
      category: "Ноутбуки",
      brand: "ASUS",
      description: "Intel Core i5-1335U, 16 ГБ ОЗУ, SSD 512 ГБ, Windows 11."
    },
    {
      id: 4,
      name: "Ноутбук Apple MacBook Air 13 M1",
      price: 41999,
      image: "https://estore.ua/media/catalog/product/m/a/macbook-air-silver-m1-2020_2.jpg",
      category: "Ноутбуки",
      brand: "Apple",
      description: "Apple M1, 8 ГБ ОЗУ, SSD 256 ГБ, macOS, 13.3\" Retina."
    },
    {
      id: 5,
      name: "Ноутбук HP 255 G9",
      price: 17999,
      image: "https://d.428.ua/img/4560861/3000/2000/noutbuk_hp_255_g9_9m3h2at~1499~1008.jpg",
      category: "Ноутбуки",
      brand: "HP",
      description: "AMD Ryzen 3 5425U, 8 ГБ ОЗУ, SSD 256 ГБ, 15.6\" Full HD."
    },
    {
      id: 6,
      name: "Ноутбук Dell Inspiron 15 3520",
      price: 22999,
      image: "https://content2.rozetka.com.ua/goods/images/big/319164937.jpg",
      category: "Ноутбуки",
      brand: "Dell",
      description: "Intel Core i5-1235U, 8 ГБ ОЗУ, SSD 512 ГБ."
    },
    {
      id: 7,
      name: "Ноутбук ASUS TUF Gaming F15",
      price: 37999,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFUEDGeeLq8B4rMAuJdXzXvuQhVUsl7FyJ5A&s",
      category: "Ноутбуки",
      brand: "ASUS",
      description: "Intel Core i5-11400H, RTX 3050, 16 ГБ ОЗУ, SSD 512 ГБ."
    },
    {
      id: 8,
      name: "Ноутбук MSI GF63 Thin 11SC",
      price: 29999,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSoVhJkAgRuvFzepf2etFO5WPNB62QH43NlQ&s",
      category: "Ноутбуки",
      brand: "MSI",
      description: "Intel Core i5-11400H, GTX 1650, 16 ГБ ОЗУ, SSD 512 ГБ."
    },
    {
      id: 9,
      name: "Ноутбук Huawei MateBook D15",
      price: 21999,
      image: "https://pcshop.ua/image/cache/webp/catalog/tovar/noutbuk-huawei-matebook-d-15-2022-bode-wfe9al-mystic-silver-1024x768.webp",
      category: "Ноутбуки",
      brand: "Huawei",
      description: "Intel Core i3-1115G4, 8 ГБ ОЗУ, SSD 256 ГБ, Full HD."
    },
    {
      id: 10,
      name: "Ноутбук Apple MacBook Pro 14 M2",
      price: 67999,
      image: "https://images.prom.ua/4918125609_w640_h320_noutbuk-apple-macbook.jpg",
      category: "Ноутбуки",
      brand: "Apple",
      description: "Apple M2 Pro, 16 ГБ ОЗУ, SSD 512 ГБ, macOS."
    },
    {
        id: 11,
        name: "Телевізор Samsung UE50TU7100U",
        price: 15999,
        image: "https://i.can.ua/goods/6885/6885383.jpg",
        category: "Телевізори",
        brand: "Samsung",
        description: "50\" 4K UHD, HDR, Smart TV, Tizen, 3 HDMI, 2 USB."
      },
      {
        id: 12,
        name: "Телевізор LG 43UP75006LF",
        price: 13999,
        image: "https://avic.com.ua/assets/cache/products/279277/43ut81006la-2-prod_xl.jpeg",
        category: "Телевізори",
        brand: "LG",
        description: "43\" 4K UHD, WebOS, HDR, 2 HDMI, 2 USB."
      },
      {
        id: 13,
        name: "Телевізор Xiaomi Mi TV 4S 43",
        price: 12999,
        image: "https://dzvinok.ua/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/x/i/xiaomi_mi_tv_uhd_4s_43_international-foto1.webp",
        category: "Телевізори",
        brand: "Xiaomi",
        description: "43\" 4K UHD, Android TV, Dolby Audio, 3 HDMI, 2 USB."
      },
      {
        id: 14,
        name: "Телевізор Sony KD-55X80J",
        price: 24999,
        image: "https://content2.rozetka.com.ua/goods/images/big/184583769.jpg",
        category: "Телевізори",
        brand: "Sony",
        description: "55\" 4K UHD, Google TV, HDR, 4 HDMI, 2 USB."
      },
      {
        id: 15,
        name: "Телевізор Philips 50PUS7506/12",
        price: 17999,
        image: "https://cdn.27.ua/799/12/17/6361623_1.jpeg",
        category: "Телевізори",
        brand: "Philips",
        description: "50\" 4K UHD, HDR, Ambilight, 3 HDMI, 2 USB."
      },
      {
        id: 16,
        name: "Телевізор Hisense 50A6G",
        price: 17999,
        image: "https://i.citrus.world/imgcache/size_800/uploads/shop/0/1/01944b5b5c5cf23181fabd5411bab07f.jpg",
        category: "Телевізори",
        brand: "Hisense",
        description: "50\" 4K UHD, VIDAA, HDR, 3 HDMI, 2 USB."
      },
      {
        id: 17,
        name: "Телевізор Samsung UE43AU7100U",
        price: 13999,
        image: "https://televizor.kiev.ua/i_pars/big_big_first/Samsung-UE43AU7100U.jpg",
        category: "Телевізори",
        brand: "Samsung",
        description: "43\" 4K UHD, HDR, Smart TV, Tizen, 2 HDMI, 2 USB."
      },
      {
        id: 18,
        name: "Телевізор LG 55UP80006LB",
        price: 21999,
        image: "https://www.lg.com/ua/images/televisions/md07562851/gallery/medium01.jpg",
        category: "Телевізори",
        brand: "LG",
        description: "55\" 4K UHD, WebOS, HDR, 4 HDMI, 2 USB."
      },
      {
        id: 19,
        name: "Телевізор TCL 50P715",
        price: 17999,
        image: "https://i.eldorado.ua/500x240/goods_images/1038962/7524437-1637675413.jpg",
        category: "Телевізори",
        brand: "TCL",
        description: "50\" 4K UHD, Google TV, HDR, 3 HDMI, 2 USB."
      },
      {
        id: 20,
        name: "Телевізор Sharp LC-50UI7422E",
        price: 16999,
        image: "https://cdn-files.kimovil.com/tv_default/0004/12/thumb_311560_tv_default_big.jpeg",
        category: "Телевізори",
        brand: "Sharp",
        description: "50\" 4K UHD, HDR, Smart TV, 3 HDMI, 2 USB."
      },
      {
        id: 21,
        name: "Смартфон Samsung Galaxy A53 5G",
        price: 14999,
        image: "https://www.samsung-online.com.ua/uploads/shop/products/main/c_038e3395d7a64914333130884b4a31ee.jpg",
        category: "Телефони",
        brand: "Samsung",
        description: "6.5\" Super AMOLED, Exynos 1280, 6 ГБ RAM, 128 ГБ, 64 Мп."
      },
      {
        id: 22,
        name: "Смартфон Xiaomi Redmi Note 11",
        price: 9999,
        image: "https://cdn.new-brz.net/app/public/models/REDMINOTE11-464GGR/large/w/220920080011040437.webp",
        category: "Телефони",
        brand: "Xiaomi",
        description: "6.43\" AMOLED, Snapdragon 680, 4 ГБ RAM, 64 ГБ, 50 Мп."
      },
      {
        id: 23,
        name: "Смартфон Apple iPhone 13",
        price: 34999,
        image: "https://sota.store/image/cache/catalog/Apple/iphone-13-grn-01-1024x1024.webp",
        category: "Телефони",
        brand: "Apple",
        description: "6.1\" Super Retina XDR, A15 Bionic, 4 ГБ RAM, 128 ГБ, 12 Мп."
      },
      {
        id: 24,
        name: "Смартфон Huawei P50 Pro",
        price: 29999,
        image: "https://i.allo.ua/media/catalog/product/cache/1/image/710x600/602f0fa2c1f0d1ba5e241f914e856ff9/import/6757200111185578.webp",
        category: "Телефони",
        brand: "Huawei",
        description: "6.6\" OLED, Kirin 9000, 8 ГБ RAM, 256 ГБ, 50 Мп."
      },
      {
        id: 25,
        name: "Смартфон Oppo A95",
        price: 12999,
        image: "https://content.rozetka.com.ua/goods/images/big/271526289.jpg",
        category: "Телефони",
        brand: "Oppo",
        description: "6.43\" AMOLED, Snapdragon 680, 8 ГБ RAM, 128 ГБ, 48 Мп."
      },
      {
        id: 26,
        name: "Смартфон Realme 8 Pro",
        price: 15999,
        image: "https://i.citrus.world/imgcache/size_800/uploads/shop/6/2/6205b94dc655a6b7a817bacdd38b23df.jpg",
        category: "Телефони",
        brand: "Realme",
        description: "6.4\" Super AMOLED, Snapdragon 720G, 8 ГБ RAM, 128 ГБ, 108 Мп."
      },
      {
        id: 27,
        name: "Смартфон Xiaomi Mi 11 Lite",
        price: 18999,
        image: "https://i1.price.ua/images/model/52/4675838/2/1/type4/xiaomi_mi_11_lite_6_128gb_6398846.jpg",
        category: "Телефони",
        brand: "Xiaomi",
        description: "6.55\" AMOLED, Snapdragon 732G, 6 ГБ RAM, 128 ГБ, 64 Мп."
      },
      {
        id: 28,
        name: "Смартфон Samsung Galaxy S21 FE",
        price: 24999,
        image: "https://hotline.ua/img/tx/333/3339145045.jpg",
        category: "Телефони",
        brand: "Samsung",
        description: "6.4\" Dynamic AMOLED 2X, Exynos 2100, 6 ГБ RAM, 128 ГБ, 12 Мп."
      },
      {
        id: 29,
        name: "Смартфон Poco X3 Pro",
        price: 15999,
        image: "https://cdn.new-brz.net/app/public/models/POCOX3PRO-6-128PHB/large/w/210629160016392701.webp",
        category: "Телефони",
        brand: "Poco",
        description: "6.67\" IPS LCD, Snapdragon 860, 6 ГБ RAM, 128 ГБ, 48 Мп."
      },
      {
        id: 30,
        name: "Смартфон Nokia X20",
        price: 17999,
        image: "https://yellow.ua/media/catalog/product/cache/9/image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_8.jpg",
        category: "Телефони",
        brand: "Nokia",
        description: "6.67\" IPS LCD, Snapdragon 480, 6 ГБ RAM, 128 ГБ, 64 Мп."
      },
      {
        id: 31,
        name: "Мікрохвильовка Samsung MS23K3513AK",
        price: 3999,
        image: "https://s.ek.ua/jpg_zoom1/1045039.jpg",
        category: "Мікрохвильовки",
        brand: "Samsung",
        description: "23 л, потужність 800 Вт, 6 рівнів потужності, гриль."
      },
      {
        id: 32,
        name: "Мікрохвильовка LG MS2535GIS",
        price: 4999,
        image: "https://content2.rozetka.com.ua/goods/images/big/11076532.jpg",
        category: "Мікрохвильовки",
        brand: "LG",
        description: "25 л, потужність 1000 Вт, гриль, 7 автоматичних програм."
      },
      {
        id: 33,
        name: "Мікрохвильовка Bosch HMT75G451",
        price: 6999,
        image: "https://media3.bsh-group.com/Product_Shots/5120x/MCSA029019_HMT75G450_def.webp",
        category: "Мікрохвильовки",
        brand: "Bosch",
        description: "20 л, потужність 800 Вт, гриль, 5 рівнів потужності."
      },
      {
        id: 34,
        name: "Мікрохвильовка Panasonic NN-GD371S",
        price: 7499,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_fuNlvGKDc7H9gyzXJvy19alS_PmuvoaKqw&s",
        category: "Мікрохвильовки",
        brand: "Panasonic",
        description: "23 л, потужність 1000 Вт, інверторна технологія, гриль."
      },
      {
        id: 35,
        name: "Мікрохвильовка Sharp R-2140S",
        price: 3499,
        image: "https://vencon.ua/uploads/goods/312632/main/sharp-yc-pg254ae-s.jpg",
        category: "Мікрохвильовки",
        brand: "Sharp",
        description: "20 л, потужність 800 Вт, 5 рівнів потужності, механічне керування."
      },
      {
        id: 36,
        name: "Мікрохвильовка Whirlpool MWP 253 SB",
        price: 5999,
        image: "https://images.prom.ua/4488338579_w600_h600_4488338579.jpg",
        category: "Мікрохвильовки",
        brand: "Whirlpool",
        description: "25 л, потужність 900 Вт, гриль, 10 автоматичних програм."
      },
      {
        id: 37,
        name: "Мікрохвильовка Samsung MG23K3575AS",
        price: 5999,
        image: "https://assol.in.ua/image/cache/catalog/brain/2/9/U0581229_2big-445x445.jpg",
        category: "Мікрохвильовки",
        brand: "Samsung",
        description: "23 л, потужність 800 Вт, гриль, авторозморожування."
      },
      {
        id: 38,
        name: "Мікрохвильовка LG MS2355DPS",
        price: 4799,
        image: "https://i.moyo.ua/img/gallery/4224/82/1645105_zoom.jpg",
        category: "Мікрохвильовки",
        brand: "LG",
        description: "23 л, потужність 800 Вт, гриль, сенсорне керування."
      },
      {
        id: 39,
        name: "Мікрохвильовка Daewoo KOR-6L5",
        price: 3199,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvcLjixsueuptGRQcF-sFC5-NNAFxUmwAfRA&s",
        category: "Мікрохвильовки",
        brand: "Daewoo",
        description: "20 л, потужність 700 Вт, механічне керування."
      },
      {
        id: 40,
        name: "Мікрохвильовка Electrolux EMS21400S",
        price: 4999,
        image: "https://prof.lv/media/catalog/product/cache/bb2e4f278882af2cb0666a1a14d552d6/f/0/f03067507de6a7a89862502a11bfc197c2d7b4da08cab960a71f03c57a582eab.jpeg",
        category: "Мікрохвильовки",
        brand: "Electrolux",
        description: "21 л, потужність 800 Вт, гриль, 5 рівнів потужності."
      },
      {
        id: 41,
        name: "Зарядна станція Anker PowerHouse 521",
        price: 17999,
        image: "https://krause-ukraine.com/image/cache/catalog/image/cache/catalog/ANKER/521/anker521-500x500.webp",
        category: "Зарядні станції",
        brand: "Anker",
        description: "Power Delivery 60 Вт, ємність 25600 мАч, 2 USB порти."
      },
      {
        id: 42,
        name: "Зарядна станція EcoFlow RIVER 256Wh",
        price: 21999,
        image: "https://files.foxtrot.com.ua/PhotoNew/img_0_45862_271_0_1_fgRIre.jpg",
        category: "Зарядні станції",
        brand: "EcoFlow",
        description: "Вихідна потужність 600 Вт, 3 AC порти, 2 USB порти."
      },
      {
        id: 43,
        name: "Зарядна станція Goal Zero Yeti 500X",
        price: 34999,
        image: "https://deps.ua/components/com_jshopping/files/img_products/full_47392_1.jpg",
        category: "Зарядні станції",
        brand: "Goal Zero",
        description: "500 Вт, ємність 50500 мАч, 2 AC порти, 3 USB порти."
      },
      {
        id: 44,
        name: "Зарядна станція Jackery Explorer 240",
        price: 15999,
        image: "https://avic.com.ua/assets/cache/products/256901/zaryadnaya-stantsiya-jackery-explorer-240eu-prod_xl.jpg",
        category: "Зарядні станції",
        brand: "Jackery",
        description: "240 Вт, ємність 67000 мАч, 2 USB порти, 1 AC порт."
      },
      {
        id: 45,
        name: "Зарядна станція Bluetti EB70",
        price: 24999,
        image: "https://storgom.ua/cache/i/products/81/134721/0001.808x684.jpg",
        category: "Зарядні станції",
        brand: "Bluetti",
        description: "700 Вт, ємність 71600 мАч, 4 USB порти, 2 AC порти."
      },
      {
        id: 46,
        name: "Зарядна станція Rockpals 500W",
        price: 19999,
        image: "https://m.media-amazon.com/images/I/81pceA9GUvL._AC_UF894,1000_QL80_.jpg",
        category: "Зарядні станції",
        brand: "Rockpals",
        description: "500 Вт, ємність 54000 мАч, 3 AC порти, 2 USB порти."
      },
      {
        id: 47,
        name: "Зарядна станція Zendure SuperBase Pro 2000",
        price: 49999,
        image: "https://www.bezpeka-shop.com/media/iopt/catalog/product/cache/bd09c1cab6eecf7f144204e047673fc3/3/6/368d22f6b57bb724139eacb5a855a748790cf590d7490b9b766c48dbf9783709.webp",
        category: "Зарядні станції",
        brand: "Zendure",
        description: "2000 Вт, ємність 2000 Втч, 2 AC порти, 3 USB порти."
      },
      {
        id: 48,
        name: "Зарядна станція EGO Power+ Nexus 3000",
        price: 34999,
        image: "https://m.media-amazon.com/images/I/717EcNpKiyL._AC_UF1000,1000_QL80_.jpg",
        category: "Зарядні станції",
        brand: "EGO Power+",
        description: "3000 Вт, ємність 10000 мАч, 4 AC порти, 2 USB порти."
      },
      {
        id: 49,
        name: "Зарядна станція Suaoki G500",
        price: 21999,
        image: "https://i.ebayimg.com/images/g/Y4IAAOSwoJBf7Sg9/s-l1200.jpg",
        category: "Зарядні станції",
        brand: "Suaoki",
        description: "500 Вт, ємність 150000 мАч, 3 AC порти, 2 USB порти."
      },
      {
        id: 50,
        name: "Зарядна станція PAXCESS 300W",
        price: 12999,
        brand: "PAXCESS",
        image: "https://akbcenter.com.ua/image/cache/catalog/images/11807/portativna-zaryadna-stantsiya-pps300-300w-300wh-z-chistoyu-sinusoyidoyu-2-800x800.jpg",
        category: "Зарядні станції",
        description: "300 Вт, ємність 30000 мАч, 2 AC порти, 2 USB порти."
      },
      {
        id: 51,
        name: "Ігрова приставка Sony PlayStation 5",
        price: 18999,
        brand: "Sony",
        image: "https://sota.store/image/cache/catalog/Sony/playstation-5-01-1024x1024.webp",
        category: "Ігрові приставки",
        description: "8 ядер, 16 ГБ RAM, SSD 825 ГБ, підтримка 4K, зворотна сумісність з PS4."
      },
      {
        id: 52,
        name: "Ігрова приставка Microsoft Xbox Series X",
        price: 18999,
        brand: "Microsoft",
        image: "https://justbuy.com.ua/wp-content/uploads/2024/11/4646399485-removebg-preview.png",
        category: "Ігрові приставки",
        description: "8 ядер, 16 ГБ RAM, SSD 1 ТБ, підтримка 4K, сумісність з Xbox One."
      },
      {
        id: 53,
        name: "Ігрова приставка Nintendo Switch OLED",
        price: 14999,
        brand: "Nintendo",
        image: "https://mygadget.ua/image/cache/catalog/gadgets/consoles/nintendo/222/543/1-max-850.jpg",
        category: "Ігрові приставки",
        description: "7\" OLED екран, 64 ГБ вбудованої пам'яті, підтримка ігор в 1080p."
      },
      {
        id: 54,
        name: "Ігрова приставка Sony PlayStation 4 Pro",
        price: 12999,
        brand: "Sony",
        image: "https://content2.rozetka.com.ua/goods/images/big/191429380.jpg",
        category: "Ігрові приставки",
        description: "4K стрімінг, 1 ТБ HDD, підтримка HDR."
      },
      {
        id: 55,
        name: "Ігрова приставка Microsoft Xbox Series S",
        price: 11999,
        brand: "Microsoft",
        image: "https://assol.in.ua/image/cache/catalog/assol/26621/igrovaya-pristavka-microsoft-xbox-series-s-512-gb-2-445x445.jpg",
        category: "Ігрові приставки",
        description: "4K відео відтворення, 512 ГБ SSD, підтримка Xbox Game Pass."
      },
      {
        id: 56,
        name: "Ігрова приставка Nintendo Switch Lite",
        price: 8999,
        brand: "Nintendo",
        image: "https://img.mta.ua/image/cache/data/foto/z162/162090/photos/Nintendo-Switch-Lite-47-Turquoise-01-600x600.jpg",
        category: "Ігрові приставки",
        description: "5.5\" екран, 32 ГБ вбудованої пам'яті, легка і компактна."
      },
      {
        id: 57,
        name: "Ігрова приставка Sony PlayStation 4 Slim",
        price: 9999,
        brand: "Sony",
        image: "https://hotline.ua/img/tx/110/1101287005.jpg",
        category: "Ігрові приставки",
        description: "500 ГБ HDD, підтримка HD 1080p, компактний дизайн."
      },
      {
        id: 58,
        name: "Ігрова приставка Microsoft Xbox One X",
        price: 14999,
        brand: "Microsoft",
        image: "https://s.ek.ua/jpg_zoom1/1243777.jpg",
        category: "Ігрові приставки",
        description: "4K Ultra HD, 1 ТБ HDD, покращена продуктивність для ігор."
      },
      {
        id: 59,
        name: "Ігрова приставка PlayStation VR",
        price: 10999,
        brand: "Sony",
        image: "https://super.com.ua/upload/iblock/067/0672a7e4335332b0b7c97c0f9e2e6dfa.png",
        category: "Ігрові приставки",
        description: "Віртуальна реальність, повний комплект з навушниками та камерою."
      },
      {
        id: 60,
        name: "Ігрова приставка SEGA Genesis Mini",
        price: 4999,
        brand: "SEGA",
        image: "https://up2date.com.ua/image/catalog/nastolki/sega-genesis-mini-1.jpg",
        category: "Ігрові приставки",
        description: "Мініатюрна версія класичної приставки, 40 попередньо встановлених ігор."
      },
      {
        id: 61,
        name: "Картридж HP 62 Black",
        price: 599,
        brand: "HP",
        image: "https://images.prom.ua/4143946264_w640_h640_4143946264.jpg",
        category: "Розхідники",
        description: "Чорний картридж для принтерів HP DeskJet та HP Envy, 165 сторінок."
      },
      {
        id: 62,
        name: "Картридж Canon PG-445XL",
        price: 799,
        brand: "Canon",
        image: "https://content2.rozetka.com.ua/goods/images/big/387258491.jpg",
        category: "Розхідники",
        description: "Чорний картридж для принтерів Canon PIXMA, збільшена ємність."
      },
      {
        id: 63,
        name: "Тонер Brother TN-2411",
        price: 1099,
        brand: "Brother",
        image: "https://images.prom.ua/2272395026_toner-dlya-brother.jpg",
        category: "Розхідники",
        description: "Тонер для лазерних принтерів Brother, чорний, 1200 сторінок."
      },
      {
        id: 64,
        name: "Лист паперу A4, 500 листів",
        price: 299,
        brand: "Unknown",
        image: "https://omixcdn.com/img/catalog/bumaga-ofisnaya-maestro-standart-a4-80-gm2-500-listov-klass-b.jpg",
        category: "Розхідники",
        description: "Листи паперу формату A4 для принтерів і копіювальних апаратів, 80 г/м²."
      },
      {
        id: 65,
        name: "Чорнила Epson 103 Black",
        price: 249,
        brand: "Epson",
        image: "https://images.prom.ua/2534229009_w600_h600_2534229009.jpg",
        category: "Розхідники",
        description: "Чорні чорнила для принтерів Epson, 70 мл."
      },
      {
        id: 66,
        name: "Картридж Samsung MLT-D111S",
        price: 1399,
        brand: "Samsung",
        image: "https://kiev-itservice.com.ua/data_resized/data/tovars/14/9cc60d24da1a358d32f576e3d5e31694.png",
        category: "Розхідники",
        description: "Чорний тонер для лазерних принтерів Samsung, 1000 сторінок."
      },
      {
        id: 67,
        name: "Лента для термопринтера Dymo 12mm",
        price: 399,
        brand: "Dymo",
        image: "https://cdn.27.ua/sc--media--prod/default/8e/48/2b/8e482b15-6107-4c2b-8d57-e97a7b0cda7a.jpg",
        category: "Розхідники",
        description: "Лента для принтерів етикеток Dymo, 12 мм, чорний текст на білому фоні."
      },
      {
        id: 68,
        name: "Картридж для Epson 502",
        price: 499,
        brand: "Epson",
        image: "https://digita.com.ua/files/resized/products/28986b/z/sumisniy-chornilniy-kartridzh-t502-dlya-epson-502/4rsy38xlsl105wt35gze0t_0f38076.jpg",
        category: "Розхідники",
        description: "Картридж для струменевих принтерів Epson, 100 мл."
      },
      {
        id: 69,
        name: "Картридж Xerox 106R02323",
        price: 2299,
        brand: "Xerox",
        image: "https://i.ebayimg.com/images/g/-lIAAOSw5BZhereZ/s-l500.jpg",
        category: "Розхідники",
        description: "Тонер для лазерних принтерів Xerox, 2500 сторінок."
      },
      {
        id: 70,
        name: "Фотопапір A4, 20 аркушів",
        price: 149,
        image: "https://omixcdn.com/img/catalog/fotobumaga-matovaya-a4-230-gm2-20ar-buromax-0.png",
        category: "Розхідники",
        brand: "Samsung",
        description: "Глянцевий фотопапір формату A4 для друку фотографій, 20 аркушів."
      },
      {
        id: 71,
        name: "Холодильник Samsung RB37J5000WW",
        price: 17999,
        image: "https://files.foxtrot.com.ua/PhotoNew/img_0_142_2974_5_1.jpg",
        category: "Холодильники",
        brand: "Samsung",
        description: "Холодильник з морозильною камерою, об'єм 345 літрів, клас енергоспоживання A+."
      },
      {
        id: 72,
        name: "Холодильник LG GA-B489SQCZ",
        price: 21999,
        image: "https://www.lg.com/ru/images/refrigerators/md05235989/gallery/GA-B489SEKZ_medium_01.jpg",
        category: "Холодильники",
        brand: "LG",
        description: "Холодильник з морозильною камерою, об'єм 384 літри, інверторний компресор."
      },
      {
        id: 73,
        name: "Холодильник Whirlpool WTNF 901 W",
        price: 16999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtDvd1zgPB38bBx2bWPo-ccihnP69iqtkvdQ&s",
        category: "Холодильники",
        brand: "Whirlpool",
        description: "Морозильна камера внизу, об'єм 366 літрів, система No Frost."
      },
      {
        id: 74,
        name: "Холодильник Bosch KGV39VL31R",
        price: 22999,
        image: "https://bs-partner.com.ua/upload/iblock/abd/kgv39vl31.jpg",
        category: "Холодильники",
        brand: "Bosch",
        description: "Холодильник з морозильною камерою, об'єм 368 літрів, енергозбереження A++."
      },
      {
        id: 75,
        name: "Холодильник Beko RCNK 365E20W",
        price: 15999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrttfU0ssDV-LPfF3eNio6-CdRMDDAuMowqA&s",
        category: "Холодильники",
        brand: "Beko",
        description: "Холодильник з морозильною камерою, об'єм 350 літрів, система No Frost."
      },
      {
        id: 76,
        name: "Холодильник Electrolux EN3853MOX",
        price: 24999,
        image: "https://www.electrolux.ua/services/eml/asset/6356dc75-c100-4784-bc62-f6ef3595541d/E4RM3Q/PSEERF17CPE0000B/WS_PN/PSEERF17CPE0000B.png",
        category: "Холодильники",
        brand: "Electrolux",
        description: "Холодильник Side-by-Side, об'єм 601 літр, система MultiFlow."
      },
      {
        id: 77,
        name: "Холодильник Samsung RT35K5030S9",
        price: 18999,
        image: "https://tt.ua/image/cache/product/45733/main-1-720x720.webp?357cd4d9",
        category: "Холодильники",
        brand: "Samsung",
        description: "Холодильник з морозильною камерою, об'єм 350 літрів, система No Frost."
      },
      {
        id: 78,
        name: "Холодильник LG GBB72MCBAP",
        price: 25999,
        image: "https://content.rozetka.com.ua/goods/images/big/445003683.jpg",
        category: "Холодильники",
        brand: "LG",
        description: "Холодильник з морозильною камерою, об'єм 394 літри, система Door Cooling."
      },
      {
        id: 79,
        name: "Холодильник Haier A3FE-635CJS",
        price: 22999,
        image: "https://content1.rozetka.com.ua/goods/images/big/446533568.jpg",
        category: "Холодильники",
        brand: "Haier",
        description: "Холодильник з морозильною камерою, об'єм 348 літрів, інверторний компресор."
      },
      {
        id: 80,
        name: "Холодильник Sharp SJ-FX81DCST",
        price: 30999,
        image: "https://content.rozetka.com.ua/goods/images/big_tile/541298983.jpg",
        category: "Холодильники",
        brand: "Sharp",
        description: "Холодильник Side-by-Side, об'єм 620 літрів, система No Frost."
      },
      {
        id: 81,
        name: "Духовка Electrolux EOA 5240 AOX",
        price: 10999,
        image: "https://tehnohata.ua/frontend/web/uploads/items/102079_0.jpeg",
        category: "Духовки",
        brand: "Electrolux",
        description: "Електрична духовка, об'єм 72 літра, система 3D Heat, клас енергоспоживання A."
      },
      {
        id: 82,
        name: "Духовка Bosch HBA534BS0",
        price: 13999,
        image: "https://media3.bsh-group.com/Product_Shots/MCSA02401828_HBF514BS0R_BuiltInOven_Bosch_STP_EVO_def.webp",
        category: "Духовки",
        brand: "Bosch",
        description: "Електрична духовка, об'єм 71 літр, конвекційна система, клас енергоспоживання A."
      },
      {
        id: 83,
        name: "Духовка Whirlpool AKP 746 IX",
        price: 15999,
        image: "https://viyar.ua/store/Items/photos/ph151181.jpg",
        category: "Духовки",
        brand: "Whirlpool",
        description: "Електрична духовка, об'єм 65 літрів, система 6th Sense, клас енергоспоживання A."
      },
      {
        id: 84,
        name: "Духовка Samsung NV75J3030AS",
        price: 12999,
        image: "https://tt.ua/image/cache/product/38979/main-1-720x720.webp?424a5a7d",
        category: "Духовки",
        brand: "Samsung",
        description: "Електрична духовка, об'єм 75 літрів, система конвекції, клас енергоспоживання A."
      },
      {
        id: 85,
        name: "Духовка Gorenje BO737E60X",
        price: 14999,
        image: "https://tt.ua/image/cache/product/45505/main-1-720x720.webp?6bb6c5d8",
        category: "Духовки",
        brand: "Gorenje",
        description: "Електрична духовка, об'єм 65 літрів, система конвекції та гриля, клас енергоспоживання A."
      },
      {
        id: 86,
        name: "Духовка Zanussi ZOB 16111 XK",
        price: 11999,
        image: "https://content2.rozetka.com.ua/goods/images/big/45563597.jpg",
        category: "Духовки",
        brand: "Zanussi",
        description: "Електрична духовка, об'єм 58 літрів, гриль, клас енергоспоживання A."
      },
      {
        id: 87,
        name: "Духовка Candy FST 100 X",
        price: 8999,
        image: "https://content.rozetka.com.ua/goods/images/big/46407271.jpg",
        category: "Духовки",
        brand: "Candy",
        description: "Компактна електрична духовка, об'єм 35 літрів, гриль, клас енергоспоживання A."
      },
      {
        id: 88,
        name: "Духовка Electrolux EOF4P70X",
        price: 11999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqIIqKhxXj7xj_1x6Qj4wIK6vKMI-HUuexEA&s",
        category: "Духовки",
        brand: "Electrolux",
        description: "Електрична духовка, об'єм 72 літри, система конвекції, клас енергоспоживання A."
      },
      {
        id: 89,
        name: "Духовка Whirlpool AKP 7450 IX",
        price: 13999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYOrCckZd1hmdr440CkSkYOiqhACxcxt0OHw&s",
        category: "Духовки",
        brand: "Whirlpool",
        description: "Електрична духовка, об'єм 73 літри, система конвекції, клас енергоспоживання A."
      },
      {
        id: 90,
        name: "Духовка Gorenje BO 75 SY2W",
        price: 9999,
        image: "https://luxshop.waterfilter.in.ua/image/cache/catalog/duhovye-shkafy-folder/9/nenko-ru-files-gorenje-bo75sy2w-750x750.jpg",
        category: "Духовки",
        brand: "Gorenje",
        description: "Електрична духовка, об'єм 71 літр, система конвекції, клас енергоспоживання A."
      },
      {
        id: 91,
        name: "Пароочисник Polti VAPORETTO",
        price: 5999,
        image: "https://batis.com.ua//image/cache/data/Polti/PGEU0010-1-700x700.jpg",
        category: "Пароочисники",
        brand: "Polti",
        description: "Пароочисник з різними насадками для чищення килимів, плит, вікон і більше."
      },
      {
        id: 92,
        name: "Пароочисник Bissell PowerFresh Slim",
        price: 7999,
        image: "https://img1.domopolis.ua/img.dp/ec0/ec0963791793910a82b20cdf2d7d6f29x700x700x80.jpg",
        category: "Пароочисники",
        brand: "Bissell",
        description: "Універсальний пароочисник з вертикальним дизайном, для чищення підлоги та вікон."
      },
      {
        id: 93,
        name: "Пароочисник Shark Lift-Away",
        price: 8999,
        image: "https://i.citrus.world/imgcache/size_800/uploads/shop/1/6/1686223899-4.jpg",
        category: "Пароочисники",
        brand: "Shark",
        description: "Компактний пароочисник з можливістю підняття, для очищення різних поверхонь."
      },
      {
        id: 94,
        name: "Пароочисник Kitfort KT-1005",
        price: 4999,
        image: "https://topradar.com.ua/image/cache/catalog/i/mm/jg/b9e38e6f725d28b535d1abcec72ccac2-500x500.jpg",
        category: "Пароочисники",
        brand: "Kitfort",
        description: "Ефективний пароочисник для чистки підлоги та килимів з кількома насадками."
      },
      {
        id: 95,
        name: "Пароочисник Thomas 7830",
        price: 10999,
        image: "https://content1.rozetka.com.ua/goods/images/big/448418036.jpg",
        category: "Пароочисники",
        brand: "Thomas",
        description: "Професійний пароочисник для дому з високою потужністю і великою кількістю насадок."
      },
      {
        id: 96,
        name: "Пароочисник Polti Vaporetto Smart 100B",
        price: 12999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3gcPW-maPySnriZmR65KD70YIAzRx-AM9EA&s",
        category: "Пароочисники",
        brand: "Polti",
        description: "Пароочисник з високою ефективністю очищення, підходить для чистки підлоги та стін."
      },
      {
        id: 97,
        name: "Пароочисник Bissell PowerFresh Deluxe",
        price: 9999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvlHnu-KKuBzw0clVl0JYC9UTPQ2029PeW6w&s",
        category: "Пароочисники",
        brand: "Bissell",
        description: "Пароочисник з регулюванням потужності пара та швидким нагріванням."
      },
      {
        id: 98,
        name: "Пароочисник Shark Steam Pocket",
        price: 7499,
        image: "https://i.citrus.world/imgcache/size_800/uploads/shop/1/6/1686223904-1.jpg",
        category: "Пароочисники",
        brand: "Shark",
        description: "Легкий і ефективний пароочисник для підлоги з автоматичним вимкненням."
      },
      {
        id: 99,
        name: "Пароочисник Kitfort KT-1007",
        price: 5999,
        image: "https://hotline.ua/img/tx/196/1963188035.jpg",
        category: "Пароочисники",
        brand: "Kitfort",
        description: "Пароочисник з додатковими насадками для миття вікон, плитки та сантехніки."
      },
      {
        id: 100,
        name: "Пароочисник Thomas 7831",
        price: 11999,
        image: "https://content2.rozetka.com.ua/goods/images/big/432194660.jpg",
        category: "Пароочисники",
        brand: "Thomas",
        description: "Професійний пароочисник з потужним паровим ударом для глибокого очищення."
      }
];
export default products;
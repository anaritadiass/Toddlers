const products = [
    {
      name: "Disney Babygrow Up!",
      imgUrl:
        "https://i.etsystatic.com/20415863/r/il/4205b4/3132019101/il_1140xN.3132019101_cg1o.jpg",
      description:
        "Disney Babygrow Up! for newborns upto 6 months",
      size: "0-2 months",
    },
    {
      name: "NVIDIA GeForce RTX 3080",
      imgUrl:
            "https://www.tejar.pk/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/n/v/nvidia_geforce_rtx_3080_founders_edition_-_5tejar_1.jpg",
      description:
          "The GeForce RTX 3080 is an enthusiast-class graphics card by NVIDIA, launched on September 1st, 2020. Built on the 8 nm process, and based on the GA102 graphics processor, in its GA102-200-KD-A1 variant, the card supports DirectX 12 Ultimate. This ensures that all modern games will run on GeForce RTX 3080.",
      price: 1200,
      countInStock: 5,
    },
    {
      name: "Iphone 12",
      imgUrl:
        "https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80",
      description:
        "Welcome to a new era of iPhone. Beautifully bright 6.1-inch Super Retina XDR display.1 Ceramic Shield with 4x better drop performance.2 Incredible low-light photography with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing, and playback. Powerful A14 Bionic chip. And new MagSafe accessories for easy attach and faster wireless charging.3 Let the fun begin.",
      price: 1099,
      countInStock: 10,
    },
    {
      name: "Samsung Odyssey G9 Gaming Monitor",
      imgUrl:
          "https://pulsogamer.com.py/7644-thickbox_default/monitor-gamer-samsung-49-odyssey-g9-qled-uhd-4k-curvo.jpg",
      description:
          "Gamers need vivid color and smooth motion to get the most out of their play. A screen with a 1000R curve to its 49 inches offering up a bit more of the surroundings only makes it sweeter. You get all of that in the Odyssey G9, which has a native 240Hz display at 5,120-by-1,440-pixel resolution (that's a 32:9 aspect ratio) in a curve. Most curved monitors have a radius (R) of 1800 to 3800...the lower R number of 1000 means it will surround you all the more.",
      price: 1599,
      countInStock: 5,
    },
    {
      name: "Cannon EOS-1D",
      imgUrl:
        "https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description:
        "The EOS-1D X combines speed with image quality, to create the next generation camera for professionals. Full frame 18 megapixel sensor with Dual “DIGIC 5+” processors sets the standard, and up to 12 frames per second shooting takes it beyond.",
      price: 1300,
      countInStock: 5,
    },
    {
        name: "Corsair One a200",
        imgUrl:
            "https://www.notebookcheck.com/fileadmin/_processed_/3/4/csm_3_1080.e902ed3a_acae238a1f.jpg",
        description:
            "Desktop PCs come in all shapes and prices these days, but few look as cool as this ultra-quiet tower. That's because Corsair's One a200 is liquid-cooled, so the AMD Ryzen 9 5900X inside is kept cold enough to deliver some stellar gaming performance. The dimensions of the sculpted-metal tower itself are ultracompact, one that goes back to 2017, measuring 15 by 6.9 by 7.9 inches—that's one-third the size of a typical mid-tower. The front sports ports galore with two zones of RGB color. If the gamer on your list lacks space but wants the ultimate gaming tower anyway, this is the one to get.",
        price: 3799,
        countInStock: 5,
    },
    {
      name: "Amazon Alexa",
      imgUrl:
        "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
      description:
        "It is capable of voice interaction, music playback, making to-do lists, setting alarms, streaming podcasts, playing audiobooks, and providing weather, traffic, sports, and other real-time information, such as news. Alexa can also control several smart devices using itself as a home automation system.",
      price: 50,
      countInStock: 25,
    },
    {
        name: "Vaonis Stellina Observation Station",
        imgUrl:
            "https://www.axismag.jp/axismag-admin/wp-content/uploads/2021/01/stellina01.png",
        description:
            "Hubble would probably argue that telescope technology has come a long way, but the scopes you can usually put on your deck to check the stars don't seem much different than from Galileo's day. But Vaonis has kicked us into smart telescope territory. The company's original scope, called the Stellina, puts a telescope that is part digital camera (with a Sony image sensor) on top of a stable tripod, all in a unit weighing under 25 pounds and measuring 19 by 15 by 4.7 inches. Connect it to a smartphone or tablet and use it to control the view and record or share 6.4-megapixel images of the planets. Multiple users, up to 10, can connect to the Stellina at once.",
        price: 3999,
        countInStock: 5,
    },
    {
      name: "Audio Technica Headphones",
      imgUrl:
        "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description:
        "Outfitted with 45mm large-aperture dynamic drivers and an over-ear, closed-back design, the ATH-M50x headphones deliver clarity, deep bass, and extended bandwidth (15 Hz to 28 kHz) while isolating you from outside sounds.",
      price: 233,
      countInStock: 4,
    },
    {
      name: "JBL FLIP 4",
      imgUrl:
        "https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
      description:
        "JBL Flip 4 is the next generation in the award-winning Flip series; it is a portable Bluetooth speaker that delivers surprisingly powerful stereo sound. This compact speaker is powered by a 3000mAh rechargeable Li-ion battery that offers up to 12 hours of continuous, high-quality audio playtime.",
      price: 140,
      countInStock: 10,
    },
  ];
  
  module.exports = products;
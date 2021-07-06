console.log("Hello testing!");

// CSS Selector:
$$("#orb-search-q")
$$('#orb-nav-links > ul > li:nth-child(4)')
$$('section.module.module--promo > div > ul > li.media-list__item.media-list__item--1 > div > a')
$$('#orb-nav-links > ul > li:nth-child(2n)') //- не совсем получилось

// Xpath:
//input[@id="orb-search-q"]
//div[@id='orb-nav-links']//li[4]
//section[@class='module module--promo']//div[@class='module__content']//li[@class='media-list__item media-list__item--1']//a[@class='block-link__overlay-link']
//div[@class='orb-nav-section orb-nav-links orb-nav-focus']//li[position() mod 2 = 0]
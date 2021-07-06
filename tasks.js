console.log("Hello testing!");

// CSS Selector:
$$("#orb-search-q")
$$('.orb-nav-links > ul > li.orb-nav-reeldotcom')
$$('section.module.module--promo > div > ul > li.media-list__item.media-list__item--1 > div > a')
$$('div#orb-nav-links li:nth-child(even):not([class$="hide"])')

// Xpath:
//input[@id="orb-search-q"]
//div[@id='orb-nav-links']//li[4]
//section[@class='module module--promo']//div[@class='module__content']//li[@class='media-list__item media-list__item--1']//a[@class='block-link__overlay-link']
//div[@class='orb-nav-section orb-nav-links orb-nav-focus']//li[not(contains (@class,'hide'))][position() mod 2 = 0]
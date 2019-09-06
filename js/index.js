const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav = document.querySelectorAll("nav a");
nav.forEach(function(item, index) {
  item.textContent = siteContent["nav"]["nav-item-" + index];
})

let cta_h1 = document.querySelector(".cta-text h1");
cta_h1.textContent = siteContent["cta"]["h1"];

let cta_button = document.querySelector(".cta-text button");
cta_button.textContent = siteContent["cta"]["button"];

let cta_image = document.getElementById("cta-img");
cta_image.setAttribute('src', siteContent["cta"]["img-src"]);

let topContent = document.querySelectorAll(".top-content .text-content");
topContent[0].childNodes[1].textContent = siteContent["main-content"]["features-h4"];
topContent[0].childNodes[3].textContent = siteContent["main-content"]["features-content"];
topContent[1].childNodes[1].textContent = siteContent["main-content"]["about-h4"];
topContent[1].childNodes[3].textContent = siteContent["main-content"]["about-content"];

let middle_image = document.getElementById("middle-img");
middle_image.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let bottomContent = document.querySelectorAll(".bottom-content .text-content");
bottomContent[0].childNodes[1].textContent = siteContent["main-content"]["services-h4"];
bottomContent[0].childNodes[3].textContent = siteContent["main-content"]["services-content"];
bottomContent[1].childNodes[1].textContent = siteContent["main-content"]["product-h4"];
bottomContent[1].childNodes[3].textContent = siteContent["main-content"]["product-content"];
bottomContent[2].childNodes[1].textContent = siteContent["main-content"]["vision-h4"];
bottomContent[2].childNodes[3].textContent = siteContent["main-content"]["vision-content"];

let contactContent = document.querySelectorAll(".contact");
contactContent[0].childNodes[1].textContent = siteContent["contact"]["contact-h4"];
contactContent[0].childNodes[3].textContent = siteContent["contact"]["address"];
contactContent[0].childNodes[5].textContent = siteContent["contact"]["phone"];
contactContent[0].childNodes[7].textContent = siteContent["contact"]["email"];

let footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];
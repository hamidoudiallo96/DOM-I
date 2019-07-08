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

// // Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



// Task 1 and 2:

// Nav items
const navItems = document.querySelectorAll("header nav a")
const navLinks = Array.from(navItems);
navLinks[0].textContent = siteContent["nav"]["nav-item-1"];
navLinks[1].textContent = siteContent["nav"]["nav-item-2"];
navLinks[2].textContent = siteContent["nav"]["nav-item-3"];
navLinks[3].textContent = siteContent["nav"]["nav-item-4"];
navLinks[4].textContent = siteContent["nav"]["nav-item-5"];
navLinks[5].textContent = siteContent["nav"]["nav-item-6"];
// cta class
// h1
const newClass = document.querySelectorAll(".cta-text h1");
newClass1 = Array.from(newClass);
newClass1[0].textContent = siteContent["cta"]["h1"];

// button
const newButton = document.querySelector(".cta-text button");
newButton.textContent = siteContent["cta"]["button"];

// img
const image1 = document.getElementById("cta-img");
image1.src = siteContent["cta"]["img-src"];


// main-content class

// top content
const firstContent = document.querySelectorAll(".top-content div.text-content");
const firstContent1 = Array.from(firstContent);
const firstContent12 = Array.from(firstContent1);
firstContent12[0].children[0].textContent = siteContent["main-content"]["features-h4"];
firstContent12[0].children[1].textContent = siteContent["main-content"]["features-content"];
firstContent12[1].children[0].textContent = siteContent["main-content"]["about-h4"];
firstContent12[1].children[1].textContent = siteContent["main-content"]["about-content"];

const img2 = document.querySelector("#middle-img");
img2.src = siteContent["main-content"]["middle-img-src"];

const bottom = document.querySelectorAll(".bottom-content .text-content");
bottom1 = Array.from(bottom);
bottom1[0].children[0].textContent = siteContent["main-content"]["services-h4"]
bottom1[0].children[1].textContent = siteContent["main-content"]["services-content"]
bottom1[1].children[0].textContent = siteContent["main-content"]["product-h4"]
bottom1[1].children[1].textContent = siteContent["main-content"]["product-content"]
bottom1[2].children[0].textContent = siteContent["main-content"]["vision-h4"]
bottom1[2].children[1].textContent = siteContent["main-content"]["vision-content"]


const low = document.querySelectorAll(".contact h4");
low[0].textContent = siteContent ["contact"]["contact-h4"];
const low1 = document.querySelectorAll(".contact p");
low1[0].textContent = siteContent ["contact"]["address"];
low1[1].textContent = siteContent ["contact"]["phone"];
low1[2].textContent = siteContent ["contact"]["email"];

const foot = document.querySelector("footer p");
foot.textContent = siteContent["footer"]["copyright"];




// Task 3:
navItems.forEach(item => item.style.color = "green");
const navbar = document.querySelector('nav');
const link_1 = document.createElement("a");
link_1.textContent = "Home";
link_1.style.color = "purple";
link_1.style.textDecoration = "underline";
navbar.prepend(link_1);

const link_2 = document.createElement("a")
link_2.textContent = "Menu";
link_2.style.color = "red";
link_2.style.fontStyle = "bold";
navbar.appendChild(link_2);

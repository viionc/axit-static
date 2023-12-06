const serviceTabList = document.getElementById("service-tab-list");
const serviceContentList = Array.from(document.querySelectorAll("#services > article > div"));
const tabArray = Array.from(serviceTabList.querySelectorAll("li"));
const headerElement = document.querySelector("header");
const navMenu = document.getElementById("nav-menu");
const navButton = document.getElementById("nav-button");

const handleTabMouseOver = (index) => {
    serviceContentList.forEach((div) => div.classList.replace("flex", "hidden"));
    tabArray.forEach((tab) => {
        tab.classList.replace("bg-orange-300", "bg-zinc-600");
        tab.classList.replace("text-black", "text-white");
    });
    serviceContentList[index].classList.replace("hidden", "flex");
    tabArray[index].classList.replace("bg-zinc-600", "bg-orange-300");
    tabArray[index].classList.replace("text-white", "text-black");
};

const handleNavMenu = () => {
    if (navMenu.classList.contains("flex")) {
        navMenu.classList.replace("flex", "hidden");
        document.body.classList.remove("overflow-hidden");
        navButton.querySelector("i").classList.replace("fa-xmark", "fa-bars");
    } else {
        navMenu.classList.replace("hidden", "flex");
        document.body.classList.add("overflow-hidden");
        navButton.querySelector("i").classList.replace("fa-bars", "fa-xmark");
    }
};

window.addEventListener("scroll", () => {
    if (window.scrollY > 1) {
        headerElement.classList.add("fixed");
        headerElement.classList.add("bg-opacity-[75%]");
    } else {
        headerElement.classList.remove("fixed");
        headerElement.classList.remove("bg-opacity-[75%]");
    }

    if (window.scrollY > 2500) {
        document.getElementById("design").style.backgroundImage = "url('./assets/background-2.png')";
    }
});

tabArray.forEach((tab, index) => {
    tab.addEventListener("mouseover", () => handleTabMouseOver(index));
});

document.getElementById("contact-form").addEventListener("submit", (e) => e.preventDefault());
navButton.addEventListener("click", handleNavMenu);

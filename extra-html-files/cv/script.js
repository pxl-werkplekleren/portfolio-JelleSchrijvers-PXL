function ToonMenu() {
    const navLinks = document.querySelector(".nav-links");
    const menuIcon = document.querySelector(".menu-icon");

    if (navLinks.style.display === "block") {
        navLinks.style.display = "none";
        menuIcon.src = "/JS-map/iconen/menu_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
    } else {
        navLinks.style.display = "block";
        menuIcon.src = "/JS-map/iconen/close_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
    }
}

function ToonSideBar() {
    const SideBar = document.querySelector(".over-mij");
    const Contact = document.querySelector(".contact-info");
    const Socials = document.querySelector(".socials");
    const SideBarLength = document.querySelector(".sidebar");
    const dropdownIcon = document.querySelector(".dropdown-icon");

    if (SideBar.style.display === "block"){
        SideBar.style.display = "none";
        Contact.style.display = "none";
        Socials.style.display = "none";
        SideBarLength.style.height = "6rem";
        dropdownIcon.src ="/JS-map/iconen/chevron-down-svgrepo-com-nobg.svg";
    }else {
        SideBar.style.display = "block";
        Contact.style.display = "block";
        Socials.style.display = "block";
        SideBarLength.style.height = "32rem";
        dropdownIcon.src = "/JS-map/iconen/chevron-up-svgrepo-com-nobg.svg";
    }
}
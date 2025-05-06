// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuIcon = document.querySelector(".menu-icon");
    const mobileMenu = document.querySelector(".mobile-menu");
    const desktopMenu = document.querySelector(".desktop-menu");
    const allKenyaDropdown = document.querySelector(".location-dropdown span");
    const allKenyaDropdownContent = document.querySelector(".location-dropdown .dropdown");
     const menuIcon = document.querySelector(".menu-icon");
    const mobileToggleMenu = document.querySelector(".mobile-toggle-menu");
    const backButton = document.querySelector(".back-button");

    // Show mobile menu when menu icon is clicked
    menuIcon.addEventListener("click", () => {
        mobileToggleMenu.classList.add("active");
    });

    // Hide mobile menu when back button is clicked
    backButton.addEventListener("click", () => {
        mobileToggleMenu.classList.remove("active");
    });
});

    // Mobile Menu Icon Click
    mobileMenuIcon.addEventListener("click", () => {
        const isMenuVisible = desktopMenu.style.display === "none" || !desktopMenu.style.display;
        desktopMenu.style.display = isMenuVisible ? "block" : "none";
    });

    // All Kenya Dropdown Hover
    allKenyaDropdown.addEventListener("mouseenter", () => {
        allKenyaDropdownContent.style.display = "block";
    });

    allKenyaDropdown.addEventListener("mouseleave", () => {
        allKenyaDropdownContent.style.display = "none";
    });

    // Desktop Dropdowns
    const dropdownButtons = document.querySelectorAll(".menu li.dropdown-button");
    dropdownButtons.forEach((button) => {
        const dropdown = button.querySelector(".dropdown");

        button.addEventListener("mouseenter", () => {
            dropdown.style.display = "block";
        });

        button.addEventListener("mouseleave", () => {
            dropdown.style.display = "none";
        });
    });
});

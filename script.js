/* =====================================================
   PORTFOLIO JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen =
            navLinks.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

        const icon =
            menuToggle.querySelector("i");

        if (icon) {

            if (isOpen) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

                menuToggle.setAttribute(
                    "aria-label",
                    "Close navigation menu"
                );

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );
            }
        }
    });


    /* CLOSE MENU AFTER CLICKING LINK */

    const navItems =
        navLinks.querySelectorAll("a");

    navItems.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            const icon =
                menuToggle.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        });
    });
}


/* =====================================================
   DARK / LIGHT MODE
===================================================== */

const themeToggle =
    document.getElementById("themeToggle");


if (themeToggle) {

    const themeIcon =
        themeToggle.querySelector("i");


    /* CHECK SAVED THEME */

    const savedTheme =
        localStorage.getItem("portfolio-theme");


    if (savedTheme === "dark") {

        document.body.classList.add(
            "dark-theme"
        );

        if (themeIcon) {

            themeIcon.classList.remove(
                "fa-moon"
            );

            themeIcon.classList.add(
                "fa-sun"
            );
        }

        themeToggle.setAttribute(
            "aria-label",
            "Switch to light mode"
        );

    } else {

        document.body.classList.remove(
            "dark-theme"
        );

        if (themeIcon) {

            themeIcon.classList.remove(
                "fa-sun"
            );

            themeIcon.classList.add(
                "fa-moon"
            );
        }

        themeToggle.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );
    }


    /* TOGGLE THEME */

    themeToggle.addEventListener(
        "click",
        () => {

            const isDark =
                document.body.classList.toggle(
                    "dark-theme"
                );


            if (isDark) {

                localStorage.setItem(
                    "portfolio-theme",
                    "dark"
                );

                if (themeIcon) {

                    themeIcon.classList.remove(
                        "fa-moon"
                    );

                    themeIcon.classList.add(
                        "fa-sun"
                    );
                }

                themeToggle.setAttribute(
                    "aria-label",
                    "Switch to light mode"
                );

            } else {

                localStorage.setItem(
                    "portfolio-theme",
                    "light"
                );

                if (themeIcon) {

                    themeIcon.classList.remove(
                        "fa-sun"
                    );

                    themeIcon.classList.add(
                        "fa-moon"
                    );
                }

                themeToggle.setAttribute(
                    "aria-label",
                    "Switch to dark mode"
                );
            }
        }
    );
}


/* =====================================================
   CURRENT YEAR
===================================================== */

const year =
    document.getElementById("year");

if (year) {

    year.textContent =
        new Date().getFullYear();
}


/* =====================================================
   ABOUT PAGE TABS
===================================================== */

const tabLinks =
    document.getElementsByClassName(
        "tab-links"
    );

const tabContents =
    document.getElementsByClassName(
        "tab-contents"
    );


function opentab(tabName, element) {

    for (const tabLink of tabLinks) {

        tabLink.classList.remove(
            "active-link"
        );
    }


    for (const tabContent of tabContents) {

        tabContent.classList.remove(
            "active-tab"
        );
    }


    if (element) {

        element.classList.add(
            "active-link"
        );
    }


    const selectedContent =
        document.getElementById(tabName);


    if (selectedContent) {

        selectedContent.classList.add(
            "active-tab"
        );
    }
}
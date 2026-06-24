document.addEventListener("DOMContentLoaded", () => {

    /* 1. INTERRUPTEUR MODE SOMBRE AVEC MÉMOIRE LOCALSTORAGE */
    const themeToggleBtn = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeToggleBtn.textContent = "☀️ Mode Clair";
    }

    themeToggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        let theme = "light";
        if (document.body.classList.contains("dark-mode")) {
            theme = "dark";
            themeToggleBtn.textContent = "☀️ Mode Clair";
        } else {
            themeToggleBtn.textContent = "🌙 Mode Sombre";
        }
        localStorage.setItem("theme", theme);
    });

    /* 2. NAVIGATION MOBILE (HAMBURGER) */
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    /* 3. EFFET DE CHARGEMENT DES COMPÉTENCES AU DEFILEMENT */
    const progressBars = document.querySelectorAll(".progress");

    const animateSkills = () => {
        progressBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                const targetWidth = bar.getAttribute("data-progress");
                bar.style.width = targetWidth;
            }
        });
    };

    window.addEventListener("scroll", animateSkills);
    animateSkills();

    /* 4. VALIDATION DU FORMULAIRE DE CONTACT */
    const contactForm = document.getElementById("contact-form");
    const formError = document.getElementById("form-error");
    const formSuccess = document.getElementById("form-success");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        formError.style.display = "none";
        formSuccess.style.display = "none";

        if (name === "" || email === "" || message === "") {
            formError.textContent = "Erreur : Tous les champs sont obligatoires.";
            formError.style.display = "block";
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            formError.textContent = "Erreur : L'adresse email n'est pas valide.";
            formError.style.display = "block";
            return;
        }

        formSuccess.style.display = "block";
        contactForm.reset();
    });

    /* 5. BOUTON RETOUR RAPIDE EN HAUT */
    const backToTopBtn = document.getElementById("back-to-top");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});
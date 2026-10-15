"use strict";
/* ==================================================================
   TeamVision site script
   Compiled to scripts.js with `make`. Edit this file, not scripts.js.
   ================================================================== */
// Everything is wrapped in a function so no variable leaks into the global scope.
(function () {
    /** True when the visitor asked the OS for less animation. */
    const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
    fillTexts();
    setupNavShadow();
    setupDemoPopup();
    setupIntroGate();
    setupHeroLoop();
    setupStepsScroller();
    /* ==================================================================
       TEXTS: fill every [data-text] element from the TEXTS object
       (defined in texts.ts). data-text="record.body" reads TEXTS.record.body.
       **double asterisks** in a text become bold.
       ================================================================== */
    function fillTexts() {
        document.querySelectorAll("[data-text]").forEach(function (element) {
            var _a;
            const [group, field] = element.dataset.text.split(".");
            const text = (_a = TEXTS[group]) === null || _a === void 0 ? void 0 : _a[field];
            if (text === undefined) {
                console.warn("Missing text: " + element.dataset.text);
                return;
            }
            // Escape the text, then turn **bold** into <b>bold</b>.
            const escaped = text
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;");
            element.innerHTML = escaped.replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
        });
    }
    /* ==================================================================
       NAV: add a shadow once the page has scrolled
       ================================================================== */
    function setupNavShadow() {
        const nav = document.getElementById("nav");
        addEventListener("scroll", function () {
            const hasScrolled = scrollY > 10;
            nav.classList.toggle("scrolled", hasScrolled);
        }, { passive: true });
    }
    /* ==================================================================
       DEMO REQUEST POPUP
       Collects the basics and hands them to the visitor's email app.
       ================================================================== */
    function setupDemoPopup() {
        const dialog = document.getElementById("demo");
        const form = document.getElementById("demo-form");
        // Older browsers without <dialog> support keep the plain mailto: links.
        if (!dialog || !dialog.showModal)
            return;
        const fields = form.elements;
        // Every "Request a demo" link opens the popup instead of the mail app.
        document.querySelectorAll("[data-demo]").forEach(function (link) {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                dialog.classList.remove("sent");
                dialog.showModal();
                fields.name.focus();
            });
        });
        // Close buttons inside the popup.
        dialog.querySelectorAll("[data-close]").forEach(function (button) {
            button.addEventListener("click", function () {
                dialog.close();
            });
        });
        // A click on the dark backdrop (outside the box) closes the popup.
        dialog.addEventListener("click", function (event) {
            if (event.target === dialog)
                dialog.close();
        });
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            if (!form.reportValidity())
                return;
            const name = fields.name.value.trim();
            const email = fields.email.value.trim();
            const org = fields.org.value.trim();
            const message = fields.msg.value.trim();
            let body = "Name: " + name + "\nEmail: " + email + "\nOrganisation: " + org;
            if (message)
                body += "\n\n" + message;
            const subject = "TeamVision demo request — " + org;
            window.location.href =
                "mailto:info@teamvision.ai" +
                    "?subject=" + encodeURIComponent(subject) +
                    "&body=" + encodeURIComponent(body);
            // Switch the popup to its "almost there" message.
            dialog.classList.add("sent");
        });
    }
    /* ==================================================================
       INTRO GATE
       A full-screen page explaining the problem, shown before the site.
       Both of its buttons (and the Escape key) lead into the site.
       ================================================================== */
    function setupIntroGate() {
        const gate = document.getElementById("gate");
        const root = document.documentElement;
        // The inline script in <head> adds "gated" when the gate must be shown.
        if (!root.classList.contains("gated")) {
            gate.classList.add("gone");
            gate.remove();
            return;
        }
        document.querySelectorAll("[data-enter]").forEach(function (button) {
            button.addEventListener("click", enterSite);
        });
        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape")
                enterSite();
        });
        /** Hides the gate and moves focus to the top of the site. */
        function showSite() {
            gate.classList.add("gone");
            root.classList.remove("gated");
            // To show the gate only once per visit, uncomment:
            // try { sessionStorage.setItem("tv-entered", "1"); } catch (err) {}
            window.scrollTo(0, 0);
            const main = document.getElementById("top");
            main.setAttribute("tabindex", "-1");
            main.focus({ preventScroll: true });
        }
        function enterSite(event) {
            var _a;
            const alreadyEntered = gate.classList.contains("gone");
            const animationRunning = document.querySelector(".wipe") !== null;
            if (alreadyEntered || animationRunning)
                return;
            if (event)
                event.preventDefault();
            // The wipe animation starts from the clicked button, if any.
            const clicked = event === null || event === void 0 ? void 0 : event.currentTarget;
            const button = ((_a = clicked === null || clicked === void 0 ? void 0 : clicked.classList) === null || _a === void 0 ? void 0 : _a.contains("btn")) ? clicked : null;
            const canAnimate = button && !reduceMotion && Boolean(document.body.animate);
            if (!canAnimate) {
                showSite();
                setTimeout(function () { gate.remove(); }, reduceMotion ? 0 : 500);
                return;
            }
            playWipe(button);
        }
        /**
         * The clicked parallelogram button grows until it covers the whole page,
         * then fades away to reveal the site underneath.
         */
        function playWipe(button) {
            const start = button.getBoundingClientRect();
            const wipe = document.createElement("div");
            wipe.className = "wipe";
            // Same colour as the clicked button (drawn by its ::before).
            wipe.style.background = getComputedStyle(button, "::before").backgroundColor;
            document.body.appendChild(wipe);
            // The shape is skewed by 14deg, so it must be wider than the screen
            // by `slant` on each side to cover the corners.
            const pad = 40;
            const height = innerHeight + pad * 2;
            const slant = Math.tan((14 * Math.PI) / 180) * height;
            const from = {
                left: start.left + "px",
                top: start.top + "px",
                width: start.width + "px",
                height: start.height + "px",
            };
            const to = {
                left: -slant - pad + "px",
                top: -pad + "px",
                width: innerWidth + 2 * slant + 2 * pad + "px",
                height: height + "px",
            };
            const grow = wipe.animate([from, to], {
                duration: 750,
                easing: "cubic-bezier(.7,0,.25,1)",
                fill: "forwards",
            });
            grow.onfinish = function () {
                showSite();
                gate.remove();
                const fade = wipe.animate([{ opacity: 1 }, { opacity: 0 }], {
                    duration: 1100,
                    easing: "ease-out",
                    fill: "forwards",
                });
                fade.onfinish = function () {
                    wipe.remove();
                };
            };
        }
    }
    /* ==================================================================
       HERO LOOP
       Every 3.5s the next step lights up: its word in the motto,
       its slice of the donut, its label and its background image.
       ================================================================== */
    function setupHeroLoop() {
        const STEP_COUNT = 3;
        const INTERVAL_MS = 2000;
        const words = document.querySelectorAll(".motto span");
        const segments = document.querySelectorAll(".loop .seg");
        const labels = document.querySelectorAll(".loop .node");
        const backgrounds = document.querySelectorAll(".hero-bg img");
        /** Turns on item number `active` in a list and turns off all the others. */
        function highlight(items, active) {
            items.forEach(function (item, index) {
                item.classList.toggle("on", index === active);
            });
        }
        function showStep(step) {
            highlight(backgrounds, step);
            highlight(words, step);
            highlight(segments, step);
            highlight(labels, step);
        }
        showStep(0);
        if (reduceMotion) {
            // No cycling: light up every word, slice and label at once.
            // The background stays on the first image.
            [words, segments, labels].forEach(function (items) {
                items.forEach(function (item) {
                    item.classList.add("on");
                });
            });
            return;
        }
        let current = 0;
        setInterval(function () {
            current = (current + 1) % STEP_COUNT;
            showStep(current);
        }, INTERVAL_MS);
    }
    /* ==================================================================
       STEPS SCROLLER
       The step crossing the middle of the screen becomes active,
       and the sticky panel and header tab next to it switch to match.
       ================================================================== */
    function setupStepsScroller() {
        const steps = document.querySelectorAll(".step");
        const panels = document.querySelectorAll(".panel");
        const tabs = document.querySelectorAll(".steps-nav a");
        function activate(index) {
            [steps, panels, tabs].forEach(function (items) {
                items.forEach(function (item, i) {
                    item.classList.toggle("on", i === index);
                });
            });
        }
        // The observed area is a thin band in the middle 10% of the viewport.
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting)
                    return;
                const index = Number(entry.target.dataset.step);
                activate(index);
            });
        }, { rootMargin: "-45% 0px -45% 0px" });
        steps.forEach(function (step) {
            observer.observe(step);
        });
    }
})();

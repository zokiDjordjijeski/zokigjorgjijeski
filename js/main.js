(function () {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelectorAll('.nav a[href^="#"]');
  const sections = document.querySelectorAll("section[id]");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("is-open");
    });

    links.forEach((link) => {
      link.addEventListener("click", () => nav.classList.remove("is-open"));
    });
  }

  const setActive = () => {
    let current = "";
    const offset = 120;

    sections.forEach((section) => {
      const top = section.offsetTop - offset;
      if (window.scrollY >= top) {
        current = section.getAttribute("id") || "";
      }
    });

    links.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === "#" + current);
    });
  };

  window.addEventListener("scroll", setActive, { passive: true });
  setActive();
})();

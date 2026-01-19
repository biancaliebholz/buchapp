function initBurgerMenu() {
  const toggleBtn = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  toggleBtn.addEventListener("click", function () {

    if (navLinks.classList.contains("is-open")) {
      navLinks.classList.remove("is-open");
    } else {
      navLinks.classList.add("is-open");
    }

  });
}

initBurgerMenu();
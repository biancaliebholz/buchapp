const toggleBtn = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

toggleBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  toggleBtn.setAttribute("aria-expanded", isOpen);
});
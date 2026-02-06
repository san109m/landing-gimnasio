const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuBtn.classList.toggle("active");

  menuBtn.textContent = menuBtn.classList.contains("active") ? "✕" : "☰";
});


document.addEventListener("click", (e) => {
  const clickDentroMenu = navLinks.contains(e.target);
  const clickEnBoton = menuBtn.contains(e.target);

  if (!clickDentroMenu && !clickEnBoton) {
    navLinks.classList.remove("active");
    menuBtn.classList.remove("active");
    menuBtn.textContent = "☰";
  }
});

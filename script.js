const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
let slidderInner = document.getElementById("galeriaimagenes")
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

const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel img");
const dots = document.querySelectorAll(".dot");

let index = 0;

setInterval(() => {
  index++;

  if (index === slides.length) {
    index = 0;
  }

  track.style.transform = `translateX(-${index * 100}%)`;

  // actualizar dots
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");

}, 3000);

const typingElement = document.querySelector('.typing');
const text = "A Passionate Developer";
let index = 0;

function typeEffect() {
  if(index < text.length){
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}
typeEffect();

const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('#projects .card');
cards.forEach(card => {
  const categories = card.dataset.category
    ? card.dataset.category.split(" ")
    : [];

  if (!categories.includes("featured")) {
    card.style.display = "none";
  }
});
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // remove active from all
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const category = btn.dataset.category;

    cards.forEach(card => {
      const categories = card.dataset.category.split(" ");

      if (category === "all" || categories.includes(category)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
});

const form = document.querySelector(".contact-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  try {

    const response = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {
      alert("Message sent successfully!");
      form.reset();
    } else {
      alert("Failed to send message.");
    }

  } catch (error) {

    console.error("Form Error:", error);
    alert("Error sending message.");

  }
});


/* Particle Background */

const canvas = document.createElement("canvas");
canvas.classList.add("starfield");

document.querySelector(".hero").appendChild(canvas);

const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

let particles = Array(120).fill().map(() => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  radius: Math.random() * 2,
  dx: (Math.random() - 0.5) * 0.6,
  dy: (Math.random() - 0.5) * 0.6
}));

function animate() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {

    ctx.beginPath();

    ctx.arc(
      p.x,
      p.y,
      p.radius,
      0,
      Math.PI * 2
    );

    ctx.fillStyle = "#9b59b6";
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

  });

  requestAnimationFrame(animate);
}

animate();


/* Mobile Menu */

const menuToggle = document.querySelector(".menu-toggle");
const navUl = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navUl.classList.toggle("active");
});

document.addEventListener("click", (e) => {

  if (
    !navUl.contains(e.target) &&
    !menuToggle.contains(e.target)
  ) {
    navUl.classList.remove("active");
  }

});
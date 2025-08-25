const typingElement = document.querySelector('.typing');
const text = "A Passionate Developer 🚀";
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
const cards = document.querySelectorAll('.card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // remove active from all
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const category = btn.dataset.category;

    cards.forEach(card => {
      if (category === "all" || card.dataset.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});


document.querySelector(".contact-form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Thanks! Your message has been submitted. (Backend integration needed to send email)");
});

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
  x: Math.random()*canvas.width,
  y: Math.random()*canvas.height,
  radius: Math.random()*2,
  dx: (Math.random()-0.5)*0.6,
  dy: (Math.random()-0.5)*0.6
}));

function animate(){
  ctx.fillStyle = "rgba(0,0,0,0.25)";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI*2);
    ctx.fillStyle = "#9b59b6";
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if(p.x<0||p.x>canvas.width) p.dx*=-1;
    if(p.y<0||p.y>canvas.height) p.dy*=-1;
  });

  requestAnimationFrame(animate);
}
animate();


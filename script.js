const roles = ["Fullstack Developer", "Web Developer", "Java Developer"];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typedRole = document.getElementById("typed-role");

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (!isDeleting) {
    typedRole.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  } else {
    typedRole.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  }

  if (!isDeleting && charIndex === currentRole.length) {
    setTimeout(() => (isDeleting = true), 1200);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  setTimeout(typeEffect, isDeleting ? 80 : 120);
}

typeEffect();

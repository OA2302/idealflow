const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav img');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

const img = document.querySelector('.img img');

img.addEventListener('mouseover', () => {
  img.style.transform = 'scale(1.2)';
});

img.addEventListener('mouseout', () => {
  img.style.transform = 'scale(1)';
});

const buttons = document.querySelectorAll('.btn button');

buttons.forEach((button) => {
  button.addEventListener('mouseover', () => {
    button.style.transform = 'scale(1.2)';
  });

  button.addEventListener('mouseout', () => {
    button.style.transform = 'scale(1)';
  });
});

const scrollToTopButton = document.querySelector('.scroll-to-top-button');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  if (!validateForm()) {
    e.preventDefault(); // Prevent form submission if validation fails
  }
});

function validateForm() {
  // Your form validation logic here
  return true; // Return true if the form is valid, false otherwise
}

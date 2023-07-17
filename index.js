// Burger menu toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Smooth scroll on nav links
const navItems = document.querySelectorAll('.nav-links li a');
navItems.forEach(function(item) {
  item.addEventListener('click', function(event) {
    event.preventDefault();
    const target = document.querySelector(item.getAttribute('href'));
    scrollTo(target, 500);
    navLinks.classList.remove('show');
  });
});

// Form submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;
  // Perform form submission or AJAX request here
  // Placeholder code: alert the form data
  alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  contactForm.reset();
});

// Smooth scroll function
function scrollTo(element, duration) {
  const targetPosition = element.offsetTop - 50;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function scrollAnimation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(scrollAnimation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(scrollAnimation);
}

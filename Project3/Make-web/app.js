

// Get all form inputs and labels
const inputs = document.querySelectorAll('form input, form textarea, form select');
const labels = document.querySelectorAll('form label');

// Add event listener to each input to check for validity on change
inputs.forEach(input => {
  input.addEventListener('change', () => {
    // Check if input is valid and add/remove valid class from label accordingly
    if (input.checkValidity()) {
      input.parentElement.classList.add('valid');
    } else {
      input.parentElement.classList.remove('valid');
    }
  });
});

const homeLink = document.querySelector('.home-link');
const loginLink = document.querySelector('.login-link');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    homeLink.classList.add('show');
    loginLink.classList.add('show');
  } else {
    homeLink.classList.remove('show');
    loginLink.classList.remove('show');
  }
});

document.getElementById("submit-button").addEventListener("click", function() {
    document.getElementById("submit-button").style.color = "green";
  });
  
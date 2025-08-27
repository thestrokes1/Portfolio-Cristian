// Labels green when valid
const inputs = document.querySelectorAll('form input, form textarea, form select');
inputs.forEach(input => {
  input.addEventListener('change', () => {
    if (input.checkValidity()) input.parentElement.classList.add('valid');
    else input.parentElement.classList.remove('valid');
  });
});

// Submit button click effect
const submitBtn = document.getElementById('submit-button');
if (submitBtn) {
  submitBtn.addEventListener('click', () => {
    submitBtn.style.color = 'green';
    setTimeout(() => submitBtn.style.color = '', 800);
  });
}

// Age auto-calculation from DOB
const dobInput = document.getElementById('dob');
const ageInput = document.getElementById('age');
if (dobInput && ageInput) {
  dobInput.addEventListener('change', () => {
    const dob = new Date(dobInput.value);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) age--;
    if (age >= 0) ageInput.value = age;
  });
}

// Image preview
const fileInput = document.getElementById('profile-picture');
const previewImg = document.getElementById('preview');
if (fileInput && previewImg) {
  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (!file) { previewImg.hidden = true; return; }
    const reader = new FileReader();
    reader.onload = e => { previewImg.src = e.target.result; previewImg.hidden = false; };
    reader.readAsDataURL(file);
  });
}

// Registration submit -> save to localStorage
const form = document.getElementById('registrationForm');
const status = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (ageInput && Number(ageInput.value) < 18) {
      status.textContent = 'You must be 18 or older.';
      status.style.color = 'red';
      return;
    }

    localStorage.setItem('registeredFirstName', document.getElementById('first-name').value.trim());
    localStorage.setItem('registeredLastName', document.getElementById('last-name').value.trim());
    localStorage.setItem('registeredEmail', document.getElementById('email').value.trim().toLowerCase());
    localStorage.setItem('registeredPassword', document.getElementById('new-password').value);
    localStorage.setItem('registeredDOB', dobInput.value);
    localStorage.setItem('registeredAge', ageInput.value);
    localStorage.setItem('registeredReferrer', document.getElementById('referrer').value);
    localStorage.setItem('registeredBio', document.getElementById('bio').value);

    status.textContent = '✅ Registration saved! You can login now.';
    status.style.color = 'limegreen';
    form.reset();
    previewImg.hidden = true;

    setTimeout(() => window.location.href = 'login.html', 1200);
  });
}

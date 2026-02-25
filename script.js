function changeText() {
  document.getElementById("title").innerText = "JavaScript is working!";
}

function scrollToContact() {
  const contactSection = document.getElementById('contact');
  contactSection.scrollIntoView({ behavior: 'smooth' });
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

document.getElementById('email_address').value = "type e-mail here";
document.getElementById('email_address').style.color ="lightgrey";

const input = document.getElementById('email_address');

input.addEventListener('focus', function () {
  if (this.value === "type e-mail here") {
    this.value = "";
    this.style.color = "black";
  }
});

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

function displayErrorMessage(element) {
  let errorMsg = document.querySelector(".error-message");
  if (!errorMsg) {
    errorMsg = document.createElement("p");
    errorMsg.textContent = "Please enter your email.";
    errorMsg.className = "error-message";
    errorMsg.style.color = "red";
    element.parentNode.appendChild(errorMsg);
  }

  element.addEventListener("focus", () => {
    const msg = document.querySelector(".error-message");
    if (msg) msg.remove();
  }, { once: true });

}

// Select the form
const emailForm = document.getElementById('email_form');

// Listen for submit
emailForm.addEventListener('submit', function (event) {
  event.preventDefault(); // stop default form submission

  const emailInput = document.getElementById('email_address');
  const email = emailInput.value.trim();

  // Basic validation
  if (email === "") {
    displayErrorMessage(emailInput);
    return;
  }

  if (!validateEmail(email)) {
    displayErrorMessage(emailInput);

    return;
  }

  // Here you would send the email to your server or service
  alert(`Thank you! ${email} has been added to the list.`);

  // Optional: clear the input
  emailInput.value = "";
});

// Email validation function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
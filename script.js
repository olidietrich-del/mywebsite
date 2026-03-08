function changeText() {
  document.getElementById("title").innerText = "JavaScript is working!";
}

//this button scrolls smoothly to my contact section. Quick way for user to get my contact details
function scrollToContact() {
  const contactSection = document.getElementById('contact');
  contactSection.scrollIntoView({ behavior: 'smooth' });
}

//Brings user to my projects site when clicked
const projectCards = document.querySelectorAll('.projects__card');

projectCards.forEach(card => {
  card.addEventListener('click', () => {
    window.location.href = 'projects.html';
  });
});

//Expands cards to see what services I provide
const serviceCards = document.querySelectorAll('.services__card');

serviceCards.forEach(card => {
  card.addEventListener('click', function () {
    if (this.classList.contains('services__card--active')) {
      this.classList.remove('services__card--active');
    } else {
      serviceCards.forEach(c => c.classList.remove('services__card--active'));
      this.classList.add('services__card--active');
    }
  });
});

// e-mail newsletter form
const emailForm = document.getElementById('email_form');

emailForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const emailInput = document.getElementById('email_address');
  const email = emailInput.value.trim();


  if (email === "") {
    displayErrorMessage(emailInput, "Please enter your e-mail");
    return;
  }

  localStorage.setItem("newsletterEmail", email)

  // alert function on screen
  alert(`Thank you! ${email} has been added to the list.`);


  emailInput.value = "";
});

window.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById('email_address');


  emailInput.value = "type e-mail here";
  emailInput.style.color = "#237886";

  emailInput.addEventListener("focus", function () {
    if (this.value === "type e-mail here") {
      this.value = "";
      this.style.color = "black";
    }
  });
});

// get in touch via this form
const form = document.querySelector(".needs-validation");

form.addEventListener("submit", function (event) {

  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  } else {
    alert("Thank you for your message, I'll be in touch with you shortly");
  }

  form.classList.add("was-validated");

});

//Display an error message in red if e-mail hasn't been filled in!
//error message for contact form
function displayErrorMessage(element, message) {

  let errorMsg = element.parentNode.querySelector(".error-message");

  if (!errorMsg) {
    errorMsg = document.createElement("p");
    errorMsg.className = "error-message";
    errorMsg.textContent = message;
    errorMsg.style.color = "red";
    element.parentNode.appendChild(errorMsg);
  }

  element.addEventListener("focus", () => {
    errorMsg.remove();
  }, { once: true });

}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
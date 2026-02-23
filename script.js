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

// Select the form
const emailForm = document.getElementById('email_form');

// Listen for submit
emailForm.addEventListener('submit', function(event) {
    event.preventDefault(); // stop default form submission

    const emailInput = document.getElementById('email_address');
    const email = emailInput.value.trim();

    // Basic validation
    if(email === "") {
        alert("Please enter your email.");
        return;
    }

    if(!validateEmail(email)) {
        alert("Please enter a valid email.");
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
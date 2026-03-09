# Project title: Oli Dietrich - Circus Artist

* Github repo: https://github.com/olidietrich-del/mywebsite.git
* hosted page link Github: https://olidietrich-del.github.io/mywebsite/

## Table of contents
1. Overview
2. Features
3. Technologies used

# 1.Overview

This is my own website as a circus performer, teacher and webdeveloper that I'll use in the future!


# 2.Features:
- About - Personal info / bio 
- Projects - 3 main projects including my own work and with 2 different companies
- Services - 3 different services I provide including teaching, performing and webdesign
- Gallery - Pictures of me from different photoshoots
- Contact - e-mail and phone number, newsletter and contact form

# 3.Technologies used:
### html and css
structure and styling of the website. Including responsive design

### javascript
Adding interactivity for example with e-mail newsletter:

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

### Astro Project in different folder
I put the astro project in a separate folder. 
I can run the site through the path:
C:\Users\olidi\OneDrive\Dokumente\Webdesign Course\private\my-astro-site> npm run dev

### REST API
 I used in my projects folder (my work) so people can see the temperature and windspeed and know if I'll perform outside.

  fetch("https://api.open-meteo.com/v1/forecast?latitude=53.35&longitude=-6.26&current_weather=true") //taking weather data for outdoor shows
    .then(response => response.json()) //this puts the data from plain text into the actual temperature or windspeed
    .then(data => {
      const temp = data.current_weather.temperature;
      const wind = data.current_weather.windspeed;

      weatherElement.innerHTML =
        `Current temperature: ${temp}°C <br> Wind speed: ${wind} km/h`;
    })
    .catch(error => {
      weatherElement.innerText = "Unable to load weather data.";
      console.error("Weather API error:", error);
    });





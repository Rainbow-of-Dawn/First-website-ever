const message =
  "Thank you for submitting your request to the Royal Administration of Colchis. Your case will be reviewed shortly.";

document.getElementById("contactForm");
document.addEventListener("submit", function (event) {
  event.preventDefault();
  alert(message);
});

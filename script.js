

document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const errorMessage = document.getElementById("error-message");
    const errorIcon = document.getElementById("error-icon");
    const submitBtn = document.getElementById("submit-btn");
  
    // Function to validate email format
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    // Function to handle form submission
    function handleSubmit(event) {
      event.preventDefault();
      const email = emailInput.value;
      if (!isValidEmail(email)) {
        errorMessage.textContent = "Please provide a valid email.";
        errorMessage.style.display = "block"; // Show the error message
        emailInput.classList.add("input-error"); // Add the CSS class for red border
        emailInput.classList.add("error");
        errorIcon.style.display = "inline";
      } else {
        errorMessage.style.display = "none"; // Hide the error message
        emailInput.classList.remove("error");
        errorIcon.style.display = "none";
        // Perform form submission or other actions here
      }
    }
  
    // Add event listener for form submission
    const form = document.querySelector(".input-form");
    form.addEventListener("submit", handleSubmit);
  
    // Add event listener for button click
    submitBtn.addEventListener("click", function () {
      if (!isValidEmail(emailInput.value)) {
        errorMessage.style.display = "block"; // Show the error message
        emailInput.classList.add("input-error");
        errorIcon.style.display = "inline";
      }
    });
  });
  
  
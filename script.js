// Get references to the menu elements
const menuToggle = document.getElementById("menu-toggle");
const menuLinks = document.querySelector(".menu-links");
const closingMenuIcon = menuToggle.querySelector(".Closing_Menu");

let isClosingMenuVisible = false; // Initialize the state variable as false (hidden)

// Add a click event listener to the menu-toggle button
menuToggle.addEventListener("click", () => {
  // Toggle the "show" class on the menu-links
  menuLinks.classList.toggle("show");

  // Toggle the visibility of the Closing_Menu based on the state variable
  if (isClosingMenuVisible) {
    closingMenuIcon.style.display = "none"; // Hide the Closing_Menu
  } else {
    closingMenuIcon.style.display = "block"; // Show the Closing_Menu
  }

  // Update the state variable
  isClosingMenuVisible = !isClosingMenuVisible;
});

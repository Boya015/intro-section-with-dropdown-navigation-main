document.addEventListener("DOMContentLoaded", function() {
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
  
    // Add a click event listener to the toggle-arrow for the toggle section
    const toggleSection = document.querySelector('.toggle-section');
    const toggleArrow = toggleSection.querySelector('.toggle-arrow');
    const toggleIcon = toggleArrow ? toggleArrow.querySelector('.toggle-icon') : null;
    const toggleContent = toggleSection.querySelector('.toggle-content');
  
    let isCollapsed = false; // Initialize the state variable as false (expanded)
  
    toggleArrow.addEventListener('click', () => {
      toggleContent.classList.toggle('show');
  
      // Toggle the arrow icon
      if (isCollapsed) {
        // Show the up arrow
        toggleIcon.innerHTML = `
          <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
            <path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/>
          </svg>
        `;
      } else {
        // Show the down arrow
        toggleIcon.innerHTML = `
          <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
            <path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/>
          </svg>
        `;
      }
  
      // Update the state variable
      isCollapsed = !isCollapsed;
    });
  });
  
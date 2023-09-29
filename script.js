document.addEventListener("DOMContentLoaded", function () {
  // Toggle function to handle showing/hiding elements
  function toggleElement(element, isCollapsed) {
    element.classList.toggle("show");
    // Add this line to override the display property
    element.style.display = element.classList.contains("show") ? "block" : "none";
    return !isCollapsed;
  }

  // Toggle arrow function to change the arrow icon
  function toggleArrowIcon(isCollapsed, toggleIcon) {
    if (isCollapsed) {
      toggleIcon.innerHTML = `
        <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
          <path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/>
        </svg>
      `;
    } else {
      toggleIcon.innerHTML = `
        <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
          <path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/>
        </svg>
      `;
    }
  }

  // Get references to the menu elements
  const menuToggle = document.getElementById("menu-toggle");
  const menuLinks = document.querySelector(".menu-links");
  const closingMenuIcon = menuToggle.querySelector(".Closing_Menu");

  let isClosingMenuVisible = false;

  // Add a click event listener to the menu-toggle button
  menuToggle.addEventListener("click", () => {
    isClosingMenuVisible = toggleElement(menuLinks, isClosingMenuVisible);
    closingMenuIcon.style.display = isClosingMenuVisible ? "block" : "none";
  });

  // Get references to the toggle section elements (existing)
  const toggleSection = document.querySelector('.toggle-section');
  const toggleArrow = toggleSection.querySelector('.toggle-arrow');
  const toggleIcon = toggleArrow ? toggleArrow.querySelector('.toggle-icon') : null;
  const toggleContent = toggleSection.querySelector('.toggle-content');

  let isCollapsed = true;

  // Add a click event listener to the toggle-arrow (existing)
  toggleArrow.addEventListener('click', () => {
    isCollapsed = toggleElement(toggleContent, isCollapsed);
    toggleArrowIcon(isCollapsed, toggleIcon);
  });

 
  // Get references to the toggle section elements for toggle-section_2 (new)
  const toggleSection2 = document.querySelector('.toggle-section_2');
  const toggleArrow2 = toggleSection2.querySelector('.toggle-icon'); // Use .toggle-icon directly since it's an SVG
  const toggleContent2 = toggleSection2.querySelector('.toggle-content_2');

  let isCollapsed2 = true;

  // Add a click event listener to the toggle-icon for toggle-section_2 (new)
  toggleArrow2.addEventListener('click', () => {
    isCollapsed2 = toggleElement(toggleContent2, isCollapsed2);
    toggleArrowIcon(isCollapsed2, toggleArrow2);
  });
});

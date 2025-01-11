// Dropdown toggle function
const userDropdownToggle = document.getElementById('user-dropdown-toggle');
const dropdownIcon = document.getElementById('dropdown-icon');
const userDropdown = document.getElementById('user-dropdown');

function toggleDropdown() {
  const isOpen = userDropdown.style.display === 'block';
  userDropdown.style.display = isOpen ? 'none' : 'block';
  dropdownIcon.classList.toggle('open', !isOpen);
}
userDropdownToggle.addEventListener('click', toggleDropdown);
dropdownIcon.addEventListener('click', toggleDropdown);

// Close dropdown when clikd outside
document.addEventListener('click', (event) => {
  if (!event.target.closest('.user-menu')) {
    userDropdown.style.display = 'none';
    dropdownIcon.classList.remove('open');
  }
});



document.addEventListener("DOMContentLoaded", () => {
    const menuToggles = document.querySelectorAll(".card-menu");
  
    // Event listener for toggle buttoms
    menuToggles.forEach((toggle, index) => {
      toggle.addEventListener("click", (event) => {
        event.stopPropagation(); 
        const card = toggle.closest(".card"); 
        const popup = card.querySelector(".card-menu-popup"); 
  
        // Close popups
        document.querySelectorAll(".card-menu-popup").forEach((menu) => {
          if (menu !== popup) menu.style.display = "none";
        });
  
        // Toggle popup
        if (popup.style.display === "block") {
          popup.style.display = "none";
        } else {

          // Dynamic positioning
          const rect = toggle.getBoundingClientRect();
          popup.style.display = "block";
          popup.style.position = "absolute";
          popup.style.top = `${rect.bottom + window.scrollY}px`; 
          popup.style.left = `${rect.left + window.scrollX - 120}px`; 
        }
      });
    });
  
    // Close the popup menu when clicking outside
    document.addEventListener("click", () => {
      document.querySelectorAll(".card-menu-popup").forEach((menu) => {
        menu.style.display = "none";
      });
    });
  });
  

  
//   Logout popup
const logoutButton = document.getElementById('logoutButton');

// lick event listener
logoutButton.addEventListener('click', function () {
  // confirmation
  const userConfirmed = confirm("Are you sure you want to log out?");
  
  if (userConfirmed) {
    //  logout logic 
    console.log("User logged out.");
    
  } else {
    console.log("User canceled logout.");
  }
});

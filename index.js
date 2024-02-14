// Get all menu items
const menuItems = document.querySelectorAll('.menu-bar ul li a');

// Add event listeners to each menu item
menuItems.forEach(menuItem => {
  menuItem.addEventListener('mouseover', () => {
    menuItem.style.color = 'red'; // Change text color to red on mouseover
  });

  menuItem.addEventListener('mouseout', () => {
    menuItem.style.color = 'white'; // Revert text color to white on mouseout
  });
});

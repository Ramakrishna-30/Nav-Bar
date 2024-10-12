// Select the elements needed
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links');
const links = document.querySelector('.links');

// Event listener for the nav toggle button (for smaller screens)
navToggle.addEventListener('click', function () {
  // If links container has the 'show-links' class, remove it, otherwise add it
  linksContainer.classList.toggle('show-links');
});

// Optional: Dynamically adjust height if the number of links changes (for more complex cases)
// const linksHeight = links.getBoundingClientRect().height;
// const containerHeight = linksContainer.getBoundingClientRect().height;
// if (containerHeight === 0) {
//   linksContainer.style.height = `${linksHeight}px`;
// } else {
//   linksContainer.style.height = 0;
// }

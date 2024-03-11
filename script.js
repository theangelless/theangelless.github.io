function showSection(sectionId) {
  var sections = document.querySelectorAll('.section');
  sections.forEach(function(section) {
      section.classList.remove('active');
  });
  var sectionToShow = document.getElementById(sectionId);
  sectionToShow.classList.add('active');
}

// Get references to the buttons and sections
const aboutBtn = document.getElementById('aboutBtn');
const galleryBtn = document.getElementById('galleryBtn');
const contactsBtn = document.getElementById('contactsBtn');

const aboutSection = document.getElementById('about');
const gallerySection = document.getElementById('gallery');
const contactsSection = document.getElementById('contacts');

// Function to toggle active class based on active section
function toggleActiveButton(button) {
    // Remove 'active' class from all buttons
    aboutBtn.classList.remove('active');
    galleryBtn.classList.remove('active');
    contactsBtn.classList.remove('active');

    // Add 'active' class to the clicked button
    button.classList.add('active');
}

// Event listeners for button clicks
aboutBtn.addEventListener('click', () => {
    toggleActiveButton(aboutBtn);
});

galleryBtn.addEventListener('click', () => {
    toggleActiveButton(galleryBtn);
});

contactsBtn.addEventListener('click', () => {
    toggleActiveButton(contactsBtn);
});

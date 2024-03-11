function showSection(sectionId) {
  var sections = document.querySelectorAll('.section');
  sections.forEach(function(section) {
      section.classList.remove('active');
  });
  var sectionToShow = document.getElementById(sectionId);
  sectionToShow.classList.add('active');
}

// Get references to the buttons
const aboutBtn = document.getElementById('aboutBtn');
const galleryBtn = document.getElementById('galleryBtn');
const contactsBtn = document.getElementById('contactsBtn');

// Event listeners for button clicks
aboutBtn.addEventListener('click', () => {
    aboutBtn.classList.add('active');
    galleryBtn.classList.remove('active');
    contactsBtn.classList.remove('active');
});

galleryBtn.addEventListener('click', () => {
    aboutBtn.classList.remove('active');
    galleryBtn.classList.add('active');
    contactsBtn.classList.remove('active');
});

contactsBtn.addEventListener('click', () => {
    aboutBtn.classList.remove('active');
    galleryBtn.classList.remove('active');
    contactsBtn.classList.add('active');
});
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

// Get reference to the gallery container
const gallery = document.getElementById('gallery');

// Function to fetch images from a folder and create gallery items
function fetchImages(folderPath) {
    fetch(folderPath)
        .then(response => response.text())
        .then(text => {
            const parser = new DOMParser();
            const htmlDoc = parser.parseFromString(text, 'text/html');
            const images = htmlDoc.querySelectorAll('a[href$=".jpg"], a[href$=".jpeg"], a[href$=".png"], a[href$=".gif"]');
            
            images.forEach(image => {
                const imageUrl = folderPath + image.getAttribute('href');
                const galleryItem = document.createElement('div');
                galleryItem.classList.add('gallery-item');
                galleryItem.innerHTML = `<img src="${imageUrl}" alt="${image.getAttribute('href')}">`;
                gallery.appendChild(galleryItem);
            });
        })
        .catch(error => console.error('Error fetching images:', error));
}

// Call the fetchImages function with the path to your image folder
fetchImages('.\pictures\gallery');
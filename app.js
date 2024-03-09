function showSection(sectionId) {
  var sections = document.querySelectorAll('.section');
  sections.forEach(function(section) {
      section.classList.remove('active');
  });
  var sectionToShow = document.getElementById(sectionId);
  sectionToShow.classList.add('active');
}
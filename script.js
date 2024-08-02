function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}

function showContent(sectionId) {
  var sections = document.querySelectorAll('.content-section');
  var navLinks = document.querySelectorAll('.topnav a');
  sections.forEach(section => {
      if (section.id === sectionId) {
          section.classList.add('active-content');
      } else {
          section.classList.remove('active-content');
      }
  });
  navLinks.forEach(link => {
      if (link.getAttribute('href') === '#' + sectionId) {
          link.classList.add('active');
      } else {
          link.classList.remove('active');
      }
  });
}

document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('backToTopBtn');

    // Show or hide the button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) { // Show the button after scrolling down 300px
        backToTopBtn.style.display = 'block';
      } else {
        backToTopBtn.style.display = 'none';
      }
    });

    // Scroll back to the top when button is clicked
    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
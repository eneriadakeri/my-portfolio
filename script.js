// Function for Custom Navbar Toggling
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x) {
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
  }
}

// Function for Showing Content Based on Section ID
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

// Show or Hide Back to Top Button
document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
      window.addEventListener('scroll', function() {
        backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
      });
      backToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
});

// Set Active Class for Navbar Links
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.forEach(link => link.classList.remove('active'));
      this.classList.add('active');
    });
  });
});

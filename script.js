// Function for Custom Navbar Toggling
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x) {
    x.className = x.className === "topnav" ? "topnav responsive" : "topnav";
  }
}

// Function for Showing Content Based on Section ID
function showContent(sectionId) {
  var sections = document.querySelectorAll('.content-section');
  var navLinks = document.querySelectorAll('.topnav a');
  sections.forEach(section => {
    section.classList.toggle('active-content', section.id === sectionId);
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + sectionId);
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

// Function to Open Gallery ( Swiper)
function openGallery(images) {
  // Add the class to prevent body scroll
  document.body.classList.add('no-scroll');

  // Select the Swiper wrapper
  const swiperWrapper = document.querySelector('.swiper-wrapper');

  // Populate Swiper slides dynamically
  swiperWrapper.innerHTML = images.map(img => `<div class="swiper-slide"><img src="${img}" alt="Gallery image"></div>`).join('');

  // Initialize Swiper
  const swiper = new Swiper('.swiper-container', {
    loop: images.length > 1,  // Enable loop mode if more than one image
    pagination: { 
      el: '.swiper-pagination', 
      clickable: true 
    },
    navigation: { 
      nextEl: '.swiper-button-next', 
      prevEl: '.swiper-button-prev' 
    },
    slidesPerView: 1,
    slidesPerGroup: 1
  });

  // Show the lightbox
  document.getElementById('image-lightbox').style.display = 'flex';
}

// Function to Close Gallery
function closeGallery() {
  // Remove the class to allow body scroll
  document.body.classList.remove('no-scroll');

  // Hide the lightbox
  document.getElementById('image-lightbox').style.display = 'none';
}

// JavaScript to handle Bootstrap collapse events for toggling the icons
document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.getElementById("navbarToggle");
  const navbarCollapse = document.getElementById("navbarNav");

  // Set the initial icon to the burger icon
  toggleButton.innerHTML = '<span class="navbar-toggler-icon"></span>';

  // Listen for the collapse show event (when the menu is expanding)
  navbarCollapse.addEventListener("show.bs.collapse", function() {
      toggleButton.innerHTML = '<span class="close-icon">&times;</span>'; // Change to close icon
  });

  // Listen for the collapse hide event (when the menu is collapsing)
  navbarCollapse.addEventListener("hide.bs.collapse", function() {
      toggleButton.innerHTML = '<span class="navbar-toggler-icon"></span>'; // Change back to burger icon
  });
});


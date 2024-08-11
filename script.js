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

document.addEventListener("DOMContentLoaded", function () {
  var currentImageIndex = 0;
  var images = [];

  window.showGallery = function(imageArray) {
    images = imageArray;
    currentImageIndex = 0;
    showImage(currentImageIndex);
    document.getElementById('image-lightbox').style.display = 'block';
  };

  function showImage(index) {
    var lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.src = images[index];
    lightboxImage.alt = "Image " + (index + 1);
  }

  window.closeImage = function() {
    document.getElementById('image-lightbox').style.display = 'none';
  };

  window.changeImage = function(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
    showImage(currentImageIndex);
  };
});


function openImage(src) {
  const lightboxImage = document.getElementById("lightbox-image");
  lightboxImage.src = src;

  const lightbox = document.getElementById("image-lightbox");
  lightbox.style.display = "flex"; // Use flex for centering
}

function closeImage() {
  const lightbox = document.getElementById("image-lightbox");
  lightbox.style.display = "none";
}

function changeImage(direction) {
  // Your image changing logic here
}

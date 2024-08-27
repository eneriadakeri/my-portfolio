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

let currentIndex = 0;
let images = [];

function openModal(initialImage, imageArray) {
  images = imageArray;
  currentIndex = imageArray.indexOf(initialImage);
  document.getElementById('modal-image').src = images[currentIndex];
  document.getElementById('image-modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('image-modal').style.display = 'none';
}

function changeImage(step) {
  currentIndex = (currentIndex + step + images.length) % images.length;
  document.getElementById('modal-image').src = images[currentIndex];
}


document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('modal1');
  const openModal = document.querySelector('.image-link');
  const closeModal = document.getElementById('closeModal');

  // Show the modal
  openModal.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    modal.classList.add('show'); // Add 'show' class to display the modal
  });

  // Hide the modal
  closeModal.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    modal.classList.remove('show'); // Remove 'show' class to hide the modal
  });

  // Hide the modal when clicking outside of the modal content
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.classList.remove('show');
    }
  });
});

function openGallery(images) {
  // Add the class to prevent body scroll
  document.body.classList.add('no-scroll');

  // Initialize the Swiper or your gallery logic here
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  swiperWrapper.innerHTML = images.map(img => `<div class="swiper-slide"><img src="${img}" alt="Gallery image"></div>`).join('');

  const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
  });

  // Show the lightbox
  document.getElementById('image-lightbox').style.display = 'flex';
}

function closeGallery() {
  // Remove the class to allow body scroll
  document.body.classList.remove('no-scroll');

  // Hide the lightbox
  document.getElementById('image-lightbox').style.display = 'none';
}

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

let currentImageIndex = 0;
let imageGallery = [];

function showGallery(images) {
  imageGallery = images;
  currentImageIndex = 0;
  showImageInLightbox(images[currentImageIndex]);
}

function showImageInLightbox(src) {
  const lightbox = document.getElementById('image-lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  lightboxImage.src = src;
  lightbox.style.display = 'block';
}

function showImage(imageSrc) {
  showImageInLightbox(imageSrc);
}

function closeImage() {
  const lightbox = document.getElementById('image-lightbox');
  lightbox.style.display = 'none';
}

function changeImage(direction) {
  currentImageIndex += direction;
  
  if (currentImageIndex < 0) {
    currentImageIndex = imageGallery.length - 1;
  } else if (currentImageIndex >= imageGallery.length) {
    currentImageIndex = 0;
  }

  showImageInLightbox(imageGallery[currentImageIndex]);
}

// Add event listener to close lightbox when clicking outside the image
document.getElementById('image-lightbox').addEventListener('click', function(event) {
  if (event.target === this) {
    closeImage();
  }
});


let galleryImages = [];
let currentIndex = 0;
let pdfUrl = null;

function showGallery(images) {
  galleryImages = images || [];
  pdfUrl = null;
  currentIndex = 0;
  showImage(currentIndex);
  document.getElementById('image-lightbox').style.display = 'block';
}

function showPdf(pdf) {
  pdfUrl = pdf || null;
  if (pdfUrl) {
    document.getElementById('pdf-viewer').src = pdfUrl;
    document.getElementById('pdf-lightbox').style.display = 'block';
  }
}

function showImage(index) {
  const lightboxImage = document.getElementById('lightbox-image');
  lightboxImage.src = galleryImages[index];
  const caption = document.getElementById('caption');
  caption.innerHTML = `Image ${index + 1} of ${galleryImages.length}`;
}

function changeImage(n) {
  currentIndex = (currentIndex + n + galleryImages.length) % galleryImages.length;
  showImage(currentIndex);
}

function closeImage() {
  document.getElementById('image-lightbox').style.display = 'none';
}

function closePdf() {
  document.getElementById('pdf-lightbox').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  if (prevButton && nextButton) {
    prevButton.addEventListener('click', () => changeImage(-1));
    nextButton.addEventListener('click', () => changeImage(1));
  }
});

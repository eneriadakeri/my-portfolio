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


document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");
  const sections = document.querySelectorAll("section");

  // Έλεγχος για αποθηκευμένο θέμα
  const savedTheme = localStorage.getItem("theme");

  // Αν δεν υπάρχει αποθηκευμένο θέμα, χρησιμοποιούμε dark mode
  if (savedTheme === "light") {
      applyLightMode();
  } else {
      applyDarkMode();
  }

  // Toggle event για το κουμπί
  toggleButton.addEventListener("click", function () {
      if (document.body.classList.contains("light-mode")) {
          applyDarkMode();
      } else {
          applyLightMode();
      }
  });

  function applyLightMode() {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
      themeIcon.classList.remove("fa-moon"); // Αφαιρούμε το φεγγάρι
      themeIcon.classList.add("fa-sun"); // Προσθέτουμε τον ήλιο
      sections.forEach(section => {
          section.style.background = "#ffffff";
          section.style.color = "#121212";
      });
      localStorage.setItem("theme", "light");
  }

  function applyDarkMode() {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
      themeIcon.classList.remove("fa-sun"); // Αφαιρούμε τον ήλιο
      themeIcon.classList.add("fa-moon"); // Προσθέτουμε το φεγγάρι
      sections.forEach(section => {
          section.style.background = "#121212";
          section.style.color = "#ffffff";
      });
      localStorage.setItem("theme", "dark");
  }
});


// 📌 Show/Hide Accessibility Menu
document.getElementById("accessibility-btn").addEventListener("click", function () {
  let menu = document.getElementById("accessibility-menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});

function closeAccessibilityMenu() {
  document.getElementById("accessibility-menu").style.display = "none";
}

// 📌 Toggle Light/Dark Mode
function toggleMode() {
  document.body.classList.toggle("light-mode");
}

// 📌 Font Size Adjustments
function increaseFont() {
  document.body.style.fontSize = "larger";
}

function decreaseFont() {
  document.body.style.fontSize = "smaller";
}

function resetFont() {
  document.body.style.fontSize = "";
}

// 📌 High Contrast Mode
function toggleHighContrast() {
  document.body.classList.toggle("high-contrast");
}

// 📌 Dyslexia-Friendly Font
function toggleDyslexiaFont() {
  document.body.classList.toggle("dyslexia-font");
}

// 📌 Reduce Animations
function toggleReduceMotion() {
  document.body.classList.toggle("reduce-motion");
}

// 📌 Underline Links
function toggleUnderlineLinks() {
  document.body.classList.toggle("underline-links");
}

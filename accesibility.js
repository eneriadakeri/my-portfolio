document.addEventListener("DOMContentLoaded", function () {
    const button = document.createElement("button");
    button.innerHTML = '<i class="fas fa-wheelchair"></i>'; // Χρησιμοποιούμε το εικονίδιο "wheelchair" για ΑΜΕΑ
    button.style.position = "fixed";
    button.style.bottom = "20px";
    button.style.right = "20px";
    button.style.background = "#007BFF";
    button.style.color = "white";
    button.style.padding = "12px 20px";
    button.style.border = "none";
    button.style.borderRadius = "50%";
    button.style.cursor = "pointer";
    button.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
    button.style.transition = "background-color 0.3s ease-in-out";
    button.setAttribute("aria-label", "Accessibility Menu");  // Προσθήκη ετικέτας για προσβασιμότητα

    document.body.appendChild(button);
    
    const menu = document.createElement("div");
    menu.id = "accessibility-menu";
    menu.style.position = "fixed";
    menu.style.bottom = "80px";
    menu.style.right = "20px";
    menu.style.background = "#ffffff";
    menu.style.padding = "15px";
    menu.style.borderRadius = "10px";
    menu.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
    menu.style.display = "none";
    menu.style.zIndex = "9999";
    menu.style.width = "250px";
    
    menu.innerHTML = `
      <h3 style="font-size: 16px; margin-bottom: 10px; text-align: center;">Accessibility</h3>
      <button class="accessibility-button" aria-label="Increase font size" onclick="adjustFontSize(2)">+ Increase Font</button>
      <button class="accessibility-button" aria-label="Decrease font size" onclick="adjustFontSize(-2)">- Decrease Font</button>
      <button class="accessibility-button" aria-label="Toggle high contrast mode" onclick="toggleHighContrast()">High Contrast</button>
      <button class="accessibility-button" aria-label="Toggle underline links" onclick="toggleUnderlineLinks()">Underline Links</button>
      <button class="accessibility-button" aria-label="Toggle large cursor" onclick="toggleLargeCursor()">Large Cursor</button>
      <button class="accessibility-button" aria-label="Toggle animations" onclick="toggleAnimations()">No Animations</button>
    `;
    document.body.appendChild(menu);
    
    button.addEventListener("click", function () {
      menu.style.display = menu.style.display === "none" ? "block" : "none";
    });
});

function adjustFontSize(change) {
    let body = document.body;
    let currentSize = parseInt(window.getComputedStyle(body).fontSize);
    body.style.fontSize = `${currentSize + change}px`;
}

function toggleHighContrast() {
    document.body.classList.toggle("high-contrast");
}

function toggleUnderlineLinks() {
    document.body.classList.toggle("underline-links");
}

function toggleLargeCursor() {
    document.body.classList.toggle("large-cursor");
}

function toggleAnimations() {
    document.body.classList.toggle("no-animations");
}
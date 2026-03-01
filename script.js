/*
  Author: Jeremy Lockhart
  Date: 03-01-2026
  Purpose:
    - Run the page’s JavaScript features (modal, tooltip behavior, dark mode, and form message)
*/

"use strict";

/* =========================
   Add a delayed notification
   ========================= */
function showNotifyBar() {
  setTimeout(function () {
    var note = document.createElement("div");
    note.className = "notifyBar";
    note.innerText = "This page updates dynamically using JavaScript.";

    document.body.insertBefore(note, document.body.firstChild);
  }, 1200);
}

/* =========================
   Dynamically add content
   ========================= */
function addProjectContent() {
  var projectsSection = document.getElementById("projects");

  var newParagraph = document.createElement("p");
  newParagraph.className = "highlightBox";
  newParagraph.innerText =
    "Recent Project: Daily Water Tracker (Android App). Built using Kotlin and Android Studio.";

  projectsSection.appendChild(newParagraph);
}

/* =========================
   Modify existing elements
   ========================= */
function updateExistingElements() {
  var projectsHeading = document.querySelector("#projects h2");
  projectsHeading.innerText = "Projects (Updated with JavaScript)";

  var aboutSection = document.getElementById("about");
  aboutSection.style.backgroundColor = "#f0f8ff";
  aboutSection.style.padding = "12px";
  aboutSection.style.borderRadius = "8px";
}

/* =========================
   Welcome Modal (no prompt)
   ========================= */
function showWelcomeModal() {
  var modal = document.getElementById("welcomeModal");
  modal.classList.remove("hidden");
}

function closeWelcomeModal() {
  var modal = document.getElementById("welcomeModal");
  modal.classList.add("hidden");
}

/* =========================
   Dark Mode (save preference)
   ========================= */
function applyDarkModeFromStorage() {
  var darkToggle = document.getElementById("darkToggle");
  var pref = localStorage.getItem("darkMode"); // "on" or "off"

  if (pref === "on") {
    document.body.classList.add("dark-mode");
    darkToggle.checked = true;
  }
  else {
    document.body.classList.remove("dark-mode");
    darkToggle.checked = false;
  }
}

function handleDarkToggleChange() {
  var darkToggle = document.getElementById("darkToggle");

  if (darkToggle.checked) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "on");
  }
  else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "off");
  }
}

/* =========================
   Timed Form Submission
   ========================= */
function handleFormSubmit(evt) {
  if (evt.preventDefault) {
    evt.preventDefault();
  }
  else {
    evt.returnValue = false;
  }

  var contactForm = document.getElementById("contactForm");

  var statusMsg = document.getElementById("formStatus");
  if (!statusMsg) {
    statusMsg = document.createElement("p");
    statusMsg.id = "formStatus";
    contactForm.appendChild(statusMsg);
  }

  statusMsg.innerText = "Sending message...";

  setTimeout(function () {
    statusMsg.innerText = "Message sent successfully!";

    document.getElementById("senderName").value = "";
    document.getElementById("senderEmail").value = "";
    document.getElementById("message").value = "";
  }, 2500);
}

/* =========================
   Event Listeners
   ========================= */
function createEventListeners() {
  var closeBtn = document.getElementById("closeModalBtn");
  var darkToggle = document.getElementById("darkToggle");
  var contactForm = document.getElementById("contactForm");

  if (closeBtn.addEventListener) {
    closeBtn.addEventListener("click", closeWelcomeModal, false);
  }
  else if (closeBtn.attachEvent) {
    closeBtn.attachEvent("onclick", closeWelcomeModal);
  }

  if (darkToggle.addEventListener) {
    darkToggle.addEventListener("change", handleDarkToggleChange, false);
  }
  else if (darkToggle.attachEvent) {
    darkToggle.attachEvent("onchange", handleDarkToggleChange);
  }

  if (contactForm.addEventListener) {
    contactForm.addEventListener("submit", handleFormSubmit, false);
  }
  else if (contactForm.attachEvent) {
    contactForm.attachEvent("onsubmit", handleFormSubmit);
  }
}

/* =========================
   Page Setup (on load)
   ========================= */
function setUpPage() {
  showNotifyBar();
  addProjectContent();
  updateExistingElements();

  showWelcomeModal();

  applyDarkModeFromStorage();
  createEventListeners();
}

/* Attach setUpPage on window load (same cross-browser style from the PDFs) */
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false);
}
else if (window.attachEvent) {
  window.attachEvent("onload", setUpPage);
}
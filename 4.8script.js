/*
  Author: Jeremy Lockhart
  Date: 03-01-2026
  Purpose:
  - Handle modal
  - Handle dark mode with localStorage
  - Handle fake form submission
  - Add dynamic content
*/

"use strict";

/* Add notification bar */
function showNotifyBar() {
  setTimeout(function () {
    var note = document.createElement("div");
    note.className = "notifyBar";
    note.innerText = "This page updates dynamically using JavaScript.";
    document.body.insertBefore(note, document.body.firstChild);
  }, 1200);
}

/* Add dynamic project content */
function addProjectContent() {
  var projectsSection = document.getElementById("projects");

  var newParagraph = document.createElement("p");
  newParagraph.className = "highlightBox";
  newParagraph.innerText =
    "Recent Project: Daily Water Tracker (Android App). Built using Kotlin and Android Studio.";

  projectsSection.appendChild(newParagraph);
}

/* Update elements */
function updateElements() {
  var projectsHeading = document.querySelector("#projects h2");
  projectsHeading.innerText = "Projects (Updated with JavaScript)";
}

/* Modal */
function showWelcomeModal() {
  document.getElementById("welcomeModal").classList.remove("hidden");
}

function closeWelcomeModal() {
  document.getElementById("welcomeModal").classList.add("hidden");
}

/* Dark Mode */
function applyDarkMode() {
  var pref = localStorage.getItem("darkMode");
  var toggle = document.getElementById("darkToggle");

  if (pref === "on") {
    document.body.classList.add("dark-mode");
    toggle.checked = true;
  }
}

function toggleDarkMode() {
  var toggle = document.getElementById("darkToggle");

  if (toggle.checked) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "on");
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "off");
  }
}

/* Fake Form Submit */
function handleFormSubmit(evt) {
  evt.preventDefault();

  var form = document.getElementById("contactForm");
  var status = document.getElementById("formStatus");

  if (!status) {
    status = document.createElement("p");
    status.id = "formStatus";
    form.appendChild(status);
  }

  status.innerText = "Sending message...";

  setTimeout(function () {
    status.innerText = "Message sent successfully!";
    document.getElementById("senderName").value = "";
    document.getElementById("senderEmail").value = "";
    document.getElementById("message").value = "";
  }, 2500);
}

/* Setup */
function setUpPage() {
  showNotifyBar();
  addProjectContent();
  updateElements();
  showWelcomeModal();
  applyDarkMode();

  document.getElementById("closeModalBtn")
    .addEventListener("click", closeWelcomeModal);

  document.getElementById("darkToggle")
    .addEventListener("change", toggleDarkMode);

  document.getElementById("contactForm")
    .addEventListener("submit", handleFormSubmit);
}

window.addEventListener("load", setUpPage);
/*
  Name: Jeremy Lockhart
  Date: 03-01-2026
  Purpose:
  - Create project objects
  - Store them using sessionStorage
  - Load and display them dynamically
  - Handle contact form with message box
*/

"use strict";

/* Default project objects */
function getDefaultProjects() {
  return [
    {
      title: "Daily Water Tracker",
      summary: "Android app that tracks daily water intake.",
      imageUrl: "https://via.placeholder.com/60",
      repoUrl: "https://github.com/jlockhart5393"
    },
    {
      title: "Photo Gallery App",
      summary: "Simple Android gallery with splash screen.",
      imageUrl: "https://via.placeholder.com/60",
      repoUrl: "https://github.com/jlockhart5393"
    },
    {
      title: "Interactive Portfolio",
      summary: "Web portfolio using JavaScript and storage.",
      imageUrl: "https://via.placeholder.com/60",
      repoUrl: "https://github.com/jlockhart5393"
    }
  ];
}

/* Load or save projects */
function getProjects() {
  var stored = sessionStorage.getItem("projects");

  if (!stored) {
    var defaults = getDefaultProjects();
    sessionStorage.setItem("projects", JSON.stringify(defaults));
    return defaults;
  }

  return JSON.parse(stored);
}

/* Render project cards */
function renderProjects() {
  var projects = getProjects();
  var holder = document.getElementById("projectList");

  holder.innerHTML = "";

  var grid = document.createElement("div");
  grid.className = "projectGrid";

  for (var i = 0; i < projects.length; i++) {
    var card = document.createElement("div");
    card.className = "projectCard";

    var img = document.createElement("img");
    img.src = projects[i].imageUrl;

    var title = document.createElement("h3");
    title.innerText = projects[i].title;

    var summary = document.createElement("p");
    summary.innerText = projects[i].summary;

    var link = document.createElement("a");
    link.href = projects[i].repoUrl;
    link.target = "_blank";
    link.className = "projectLink";
    link.innerText = "View Repository";

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(summary);
    card.appendChild(link);

    grid.appendChild(card);
  }

  holder.appendChild(grid);
}

/* Dark mode toggle */
function handleDarkToggle() {
  var toggle = document.getElementById("darkToggle");

  if (toggle.checked) {
    document.body.className = "dark-mode";
    localStorage.setItem("darkMode", "true");
  } else {
    document.body.className = "";
    localStorage.setItem("darkMode", "false");
  }
}

/* Load dark mode */
function loadDarkMode() {
  var saved = localStorage.getItem("darkMode");

  if (saved === "true") {
    document.body.className = "dark-mode";
    document.getElementById("darkToggle").checked = true;
  }
}

/* Contact form handler */
function handleFormSubmit(e) {
  e.preventDefault();

  var name = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var status = document.getElementById("formStatus");

  if (name === "" || email === "" || message === "") {
    status.innerText = "Please fill out all fields.";
    return;
  }

  status.innerText = "Sending message...";

  setTimeout(function () {
    status.innerText = "Message sent successfully (demo only).";
    document.getElementById("contactForm").reset();
  }, 1200);
}

/* Welcome modal */
function showWelcomeModal() {
  var overlay = document.createElement("div");
  overlay.className = "modalOverlay";

  var box = document.createElement("div");
  box.className = "modalBox";

  var heading = document.createElement("h3");
  heading.innerText = "Welcome!";

  var text = document.createElement("p");
  text.innerText = "Projects are loaded using sessionStorage and JSON.";

  var button = document.createElement("button");
  button.innerText = "Close";

  button.onclick = function () {
    document.body.removeChild(overlay);
  };

  box.appendChild(heading);
  box.appendChild(text);
  box.appendChild(button);
  overlay.appendChild(box);

  document.body.appendChild(overlay);
}

/* Setup page */
function setUpPage() {
  renderProjects();
  loadDarkMode();
  showWelcomeModal();

  document.getElementById("darkToggle").addEventListener("change", handleDarkToggle);
  document.getElementById("contactForm").addEventListener("submit", handleFormSubmit);
}

window.addEventListener("load", setUpPage);
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import InstagramButton from "./InstagramButton";
import { MantineWrapper } from "./MantineWrapper";

// Extract Instagram username from URL
function getInstagramUsername(): string | null {
  const pathname = window.location.pathname;
  const match = pathname.match(/^\/([^\/]+)\/?$/);

  if (
    match &&
    match[1] &&
    !["explore", "reels", "stories", "direct", "accounts", "settings"].includes(
      match[1]
    )
  ) {
    return match[1];
  }

  return null;
}

// Find the target section and inject the button
function injectBondeeButton() {
  const username = getInstagramUsername();

  if (!username) {
    return;
  }

  const targetSection = document.querySelector(".x14vqqas");

  if (!targetSection) {
    return;
  }

  // Check if button already exists
  if (document.querySelector("#bondee-ig-button-root")) {
    return;
  }

  // Create container for React component
  const container = document.createElement("div");
  container.id = "bondee-ig-button-root";
  targetSection.appendChild(container);

  // Render React component
  const root = ReactDOM.createRoot(container);
  root.render(
    <StrictMode>
      <MantineWrapper>
        <InstagramButton username={username} />
      </MantineWrapper>
    </StrictMode>
  );

  console.log("Bondee Extension: Button injected successfully");
}

// Observe DOM changes
function setupObserver() {
  const observer = new MutationObserver(() => {
    const username = getInstagramUsername();
    if (username && !document.querySelector("#bondee-ig-button-root")) {
      injectBondeeButton();
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  return observer;
}

// Initialize
function init() {
  console.log("Bondee Extension: Initializing Instagram integration");

  injectBondeeButton();
  setupObserver();

  setTimeout(() => {
    injectBondeeButton();
  }, 2000);

  // Listen for URL changes
  let lastUrl = window.location.href;
  setInterval(() => {
    if (window.location.href !== lastUrl) {
      lastUrl = window.location.href;
      setTimeout(() => {
        injectBondeeButton();
      }, 1000);
    }
  }, 500);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

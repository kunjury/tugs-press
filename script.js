// Pause sheet motion on scroll
let scrolling = false;
window.addEventListener("scroll", () => {
  document.querySelectorAll(".bg-layer").forEach(l => l.style.animationPlayState = "paused");
  scrolling = true;
  clearTimeout(window.scrollTimeout);
  window.scrollTimeout = setTimeout(() => {
    scrolling = false;
    document.querySelectorAll(".bg-layer").forEach(l => l.style.animationPlayState = "running");
  }, 700);
});

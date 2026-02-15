function goRegister() {
  window.location.href = "events.html";
}

/* Scroll animation */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".fade").forEach(el => observer.observe(el));

/* FAQ dropdown */
document.querySelectorAll(".faq-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;

    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});

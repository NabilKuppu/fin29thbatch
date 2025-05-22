// Countdown Timer
// Calculate target date ONCE when the page loads
const targetDate = new Date().getTime() + 30 * 24 * 60 * 60 * 1000; // 30 days from now

function updateCountdown() {
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  } else {
    // Countdown finished
    document.getElementById("days").textContent = 0;
    document.getElementById("hours").textContent = 0;
    document.getElementById("minutes").textContent = 0;
    document.getElementById("seconds").textContent = 0;
  }
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// Add click animations
document.querySelectorAll("button, a").forEach((element) => {
  element.addEventListener("click", function () {
    this.style.transform = "scale(0.95)";
    setTimeout(() => {
      this.style.transform = "";
    }, 150);
  });
});

// Add hover effects for course items
document.querySelectorAll(".course-item").forEach((item) => {
  item.addEventListener("mouseenter", function () {
    this.style.transform = "translateX(10px)";
  });

  item.addEventListener("mouseleave", function () {
    this.style.transform = "translateX(0)";
  });
});

// Navigation button functionality
document.querySelectorAll(".nav-button").forEach((button) => {
  button.addEventListener("click", function () {
    // Remove active class from all buttons
    document
      .querySelectorAll(".nav-button")
      .forEach((btn) => btn.classList.remove("active"));
    // Add active class to clicked button
    this.classList.add("active");
  });
});

// Add loading animation on page load
window.addEventListener("load", function () {
  document.querySelector(".dashboard-container").style.animation =
    "fadeIn 0.8s ease-out";
});

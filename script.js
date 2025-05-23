// Countdown Timer
// Set target date to August 15th of current year
const currentYear = new Date().getFullYear();
const targetDate = new Date(currentYear, 7, 15).getTime(); // Month is 0-based, so 7 = August

// Check if we need to set next year's date
const now = new Date().getTime();
if (now > targetDate) {
  // If current date is past August 15th, set target to next year
  const nextYear = currentYear + 1;
  targetDate = new Date(nextYear, 7, 15).getTime();
}

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

    // Store the current countdown values in localStorage
    localStorage.setItem("countdownDays", days);
    localStorage.setItem("countdownHours", hours);
    localStorage.setItem("countdownMinutes", minutes);
    localStorage.setItem("countdownSeconds", seconds);
  } else {
    // Countdown finished
    document.getElementById("days").textContent = 0;
    document.getElementById("hours").textContent = 0;
    document.getElementById("minutes").textContent = 0;
    document.getElementById("seconds").textContent = 0;
  }
}

// Function to initialize countdown with stored values
function initializeCountdown() {
  const storedDays = localStorage.getItem("countdownDays");
  const storedHours = localStorage.getItem("countdownHours");
  const storedMinutes = localStorage.getItem("countdownMinutes");
  const storedSeconds = localStorage.getItem("countdownSeconds");

  if (storedDays !== null) {
    document.getElementById("days").textContent = storedDays;
    document.getElementById("hours").textContent = storedHours;
    document.getElementById("minutes").textContent = storedMinutes;
    document.getElementById("seconds").textContent = storedSeconds;
  }
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Initialize with stored values and then start updating
initializeCountdown();
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

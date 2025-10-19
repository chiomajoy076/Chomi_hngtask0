function updateTime() {
  const timeElement = document.getElementById("current-time");
  if (timeElement) {
    timeElement.textContent = Date.now();
  }
}

// Update time once at render and every 1 second
updateTime();
setInterval(updateTime, 1000);

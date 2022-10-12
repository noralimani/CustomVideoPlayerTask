let video = document.getElementById("tractiveVideo");
let playBtn = document.getElementById("playButton");
let audioBtn = document
  .getElementById("shadowPlayer")
  .shadowRoot.getElementById("play");
const timestamp = document.getElementById("timestamp");
let currentTime = 0;

// update the video status
function toggleVideoStatus() {
  video.paused ? video.play() : video.pause();
}

// update play/pause icon
function updatePlayIcon() {
  video.paused
    ? (playBtn.innerHTML = '<i class="fa-solid fa-play"></i>')
    : (playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>');
}

//timestamp
function updateProgress() {
  currentTime = (video.currentTime / video.duration) * 100;
  // Get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = "0" + String(mins);
  }
  // Get seconds
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = "0" + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

//event listeners
video.addEventListener("click", () => {
  toggleVideoStatus();
  audioBtn.click();
});
playBtn.addEventListener("click", () => {
  toggleVideoStatus();
  audioBtn.click();
});
video.addEventListener("play", updatePlayIcon);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

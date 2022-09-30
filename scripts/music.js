const poster = document.querySelector("#poster");
const songTitle = document.querySelector("#songTitle");
const currentTime = document.querySelector("#currentTime");
const totalTime = document.querySelector("#totalTime");
const currentAudio = document.querySelector("#currentAudio");
const playBtn = document.querySelector("#playBtn");
const track = document.querySelector("#track");
const artist = document.querySelector("#artist");
const repeat = document.querySelector("#repeat");
const volume = document.querySelector("#volume");
const volumeValue = document.querySelector("#volumeValue");

let repeatIt = false;
let playing = false;
let eachSec = setInterval(refresh, 100);
let currentIndex = 0;

function playSong(value) {
  poster.src = `images/${songs[value].poster}`;
  songTitle.innerText = songs[value].title;
  totalTime.innerText = songs[value].duration;
  currentAudio.src = `songs/${songs[value].name}`;
  artist.innerText = songs[value].artist;
  activeSong(value);
  currentIndex = value;
  playMusic(1);
}
track.oninput = function () {
  currentAudio.currentTime = this.value;
};
volume.oninput = function () {
  currentAudio.volume = this.value;
  volumeValue.innerText = parseInt(this.value * 100);
};

function activeSong(value) {
  let y = "#songNo" + currentIndex;
  document.querySelector(y).className = "eachSong";
  let x = "#songNo" + value;
  document.querySelector(x).className = "eachSong activeSong";
}

const playMusic = (value) => {
  if (value === 1) {
    playBtn.className = "circle pause";
    currentAudio.play();
    playing = true;
  } else {
    playBtn.className = "circle play";
    currentAudio.pause();
    playing = false;
  }
};

const playPause = () => {
  if (playing) {
    playMusic(2);
    playing = false;
  } else {
    playMusic(1);
    playing = true;
  }
};

function refresh() {
  const audioLength = currentAudio.duration;

  track.max = audioLength;
  track.value = currentAudio.currentTime;

  let audioMin = parseInt(audioLength / 60);
  let overSec = parseInt(audioLength % 60);

  if (audioMin < 10) {
    audioMin = "0" + audioMin;
  }
  if (overSec < 10) {
    overSec = "0" + overSec;
  }
  let currentMin = parseInt(currentAudio.currentTime / 60);
  let currentSec = parseInt(currentAudio.currentTime % 60);

  if (currentSec < 10) {
    currentSec = "0" + currentSec;
  }
  if (currentMin < 10) {
    currentMin = "0" + currentMin;
  }
  totalTime.innerHTML = audioMin + ":" + overSec;
  currentTime.innerHTML = currentMin + ":" + currentSec;

  if (audioLength === currentAudio.currentTime) {
    if (repeatIt) {
      playSong(currentIndex);
    } else {
      nextSong(2);
    }
  }
}
function nextSong(value) {
  if (value === 2) {
    // Play the next song in the playlist
    playSong((parseInt(currentIndex) + parseInt(1)) % songs.length);
  } else {
    // Play the previous song in the playlist
    let previous = (currentIndex - 1 + parseInt(songs.length)) % songs.length;
    playSong(previous);
  }
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
function shuffleList() {
  shuffle(songs);
  playSong(0);
  showSongs();
  document.querySelector("#songNo0").className = "eachSong activeSong";
}

function repeatSong() {
  repeatIt = !repeatIt;
  repeat.classList.toggle("active");
}

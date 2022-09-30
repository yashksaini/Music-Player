let songsList = document.querySelector("#songsList");
let box = document.getElementsByClassName("box");
let trackArea = document.querySelector("#trackArea");
let playlist = document.querySelector("#playlist");
let themeValue = true;
const songs = [
  {
    title: "Besabriyaan",
    duration: "4:15",
    artist: "Arman Malik",
    poster: "1.jpg",
    name: "1.mp3",
  },
  {
    title: "Dhoonde Ankhiyaan",
    duration: "4:35",
    artist: "Yasser Desai, Altamash Faridi",
    poster: "2.png",
    name: "2.mp3",
  },
  {
    title: "Duniyaa",
    duration: "3:42",
    artist: "Akhil, Dhvani Bhanushali",
    poster: "3.jpg",
    name: "3.mp3",
  },
  {
    title: "Kesariya Tera Ishq Hai Piya",
    duration: "4:28",
    artist: "Arijit Singh",
    poster: "4.jpg",
    name: "4.mp3",
  },
  {
    title: "Main Rang Sharbaton Ka",
    duration: "4:37",
    artist: "Arijit Singh",
    poster: "5.jpg",
    name: "5.mp3",
  },
  {
    title: "Raat Bhar",
    duration: "5:25",
    artist: "Arijit Singh",
    poster: "6.jpg",
    name: "6.mp3",
  },
  {
    title: "Tera Yaar Hoon Main",
    duration: "4:24",
    artist: "Arijit Singh",
    poster: "7.jpg",
    name: "7.mp3",
  },
  {
    title: "Zindagi Aa Raha Hoon Main",
    duration: "4:47",
    artist: "Atif Aslam",
    poster: "8.jpg",
    name: "8.mp3",
  },
];

const showSongs = () => {
  songsList.innerHTML = `<div class="songTitle">All Songs</div>`;
  songs.forEach((element, index) => {
    songsList.innerHTML += `<div class="eachSong" id="songNo${index}">
        <div class="playBtn circle" onclick="playSong(${index})"><i class="fa-solid fa-play"></i><i class="fa-solid fa-chart-simple"></i></div>
        <div class="details">
          <h1>${element.title}</h1>
          <div class="songFooter">
            <p>${element.artist}</p>
            <span>${element.duration}</span>
          </div>
        </div>
      </div>`;
  });
};
showSongs();

const theme = (value) => {
  if (value === 0) {
    document.documentElement.style.setProperty("--dark", "#fcfcfc");
    document.documentElement.style.setProperty("--white", "#20242e");
    document.documentElement.style.setProperty("--grey", "#e9e9e9");
    document.documentElement.style.setProperty("--light", "#e9e9e9");
    document.documentElement.style.setProperty("--song", "#304253");
    box[0].className = "box circle active";
    box[1].className = "box circle";
  } else {
    document.documentElement.style.setProperty("--dark", "#20242e");
    document.documentElement.style.setProperty("--white", "#fcfcfc");
    document.documentElement.style.setProperty("--grey", "#c5c5c5");
    document.documentElement.style.setProperty("--light", "#4d5765");
    document.documentElement.style.setProperty("--song", "#f6f6f6");
    box[1].className = "box circle active";
    box[0].className = "box circle";
  }
};
theme(0);
const showPlaylist = () => {
  playlist.classList.toggle("showBack");
  trackArea.classList.toggle("hide");
  songsList.classList.toggle("hide");
};

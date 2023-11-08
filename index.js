
const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('playPause');
const stopButton = document.getElementById('stop');
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
var playPauseButtonC=document.querySelector('.change')
const songs = ['./music/song2.mp3', './music/song4.mp', './music/song3.mp3','./music/song4.mp3',]; 
let currentSongIndex = 0;

function playSong(index) {
    audio.src = songs[index];
    audio.load();
    audio.play();
}

playSong(currentSongIndex);

playPauseButton.addEventListener('click', function() {
     
    if (audio.paused) {
        playPauseButtonC.setAttribute('src',"./images/pause-solid.svg");
        audio.play();
    } else {
        playPauseButtonC.setAttribute('src',"./images/play-solid.svg");
        audio.pause();
        // playPauseButton.textContent = 'Play';
        
    }
});

stopButton.addEventListener('click', function() {
    audio.pause();
    audio.currentTime = 0;
    // playPauseButton.textContent = 'Play';
    playPauseButtonC.setAttribute('src',"./images/play-solid.svg");

    

});

previousButton.addEventListener('click', function() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(currentSongIndex);
    playPauseButtonC.setAttribute('src',"./images/pause-solid.svg");

});

nextButton.addEventListener('click', function() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(currentSongIndex);
    playPauseButtonC.setAttribute('src',"./images/pause-solid.svg");

});


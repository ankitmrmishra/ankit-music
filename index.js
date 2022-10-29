const musicContainer = document.querySelector('.music-container')
const prevBtn = document.querySelector('#prev')
const playBtn = document.querySelector('#play')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progressContainer = document.querySelector('.progress-container')
const progress = document.querySelector('.progress')
const cover = document.querySelector('#cover')
const title = document.querySelector('#title')


// song deatils

const songs = ["songa" , "songb" , "songc" , "Toh Kya" , "songe"]

let songIndex = 3

songLoad(songs[songIndex]) 

function songLoad(song) {
    title.innerHTML = song
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.jpg`
}

function playSong() {
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}
function pauseSong(){
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')

    audio.pause()
}
//event listensers
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})
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

function prevsong(){
 songIndex-- 
if(songIndex < 0 ){
    songIndex = songs.length - 1
} 
songLoad(songs[songIndex]) 
audio.play()

}
function nextsong(){
    songIndex++ 
if(songIndex > (songs.length -1) ){
    songIndex = 0
} 
songLoad(songs[songIndex]) 
audio.play()
    


}
 
function updateProgress(e){
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime / duration ) * 100
    progress.style.width = `${progressPercent}%`
}
function setProgress(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration
    audio.currentTime = (clickX / width) * duration

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

//change song evnets

prevBtn.addEventListener('click' , prevsong)
nextBtn.addEventListener('click' , nextsong)


audio.addEventListener('timeupdate' , updateProgress )

progressContainer.addEventListener('click' , setProgress)

audio.addEventListener('ended' , nextsong)
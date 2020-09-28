const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;
const backgrounds = ['aerial-view-of-the-beach-shore.jpg', 'beach (5).jpg', 'forest.jpg', 'misty-mountain-village_tyrol_austria.jpg', 'mountain-retreat.jpg', 'treeinforest.jpg', 'bg.jpg'];
const audio = document.getElementById('audio');
const audioPlay = document.getElementById('audioPlay');
audioPlay.addEventListener('click', planMusic);

let audioOn = false;
let counter = 0;
let currentImageIndex = 0;
breathAnimation();

function planMusic(){
  
  if (!audioOn){
    audioPlay.style["background-image"] = "url('img/audioOff.png')";
    audioPlay.style["transition"] = "background 0.5s linear";
    audio.play();
  }else{
    audioPlay.style["background-image"] = "url('img/audioOn.png')";
    audioPlay.style["transition"] = "background 0.5s linear";
    audio.pause();
    }
    audioOn = !audioOn;
}

function breathAnimation() {
  text.innerText = 'Breathe In!';
  container.className = 'container grow';
  
  setTimeout(() => {
    text.innerText = 'Hold';

    setTimeout(() => {
      text.innerText = 'Breathe Out!';
      container.className = 'container shrink';
    }, holdTime);

    if (counter % 2 === 0) {
      document.body.style["background-image"] = "url('img/" + backgrounds[currentImageIndex] + "')";
      document.body.style["transition"] = "background 0.5s linear";
      currentImageIndex++;
      if (currentImageIndex >= backgrounds.length) {
        currentImageIndex = 0;
      }
    }
    counter++;
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);




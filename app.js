let source = document.querySelector('.goku');
let namekLand = document.querySelector('body');

let ssjSound = new Audio('./audios/ssj.mp3');
var superSound = new Audio('./audios/Goku vs Jiren.mp3');
var namekSound = new Audio('./audios/dbzTone.mp3');
var homeSound = new Audio('./audios/dragonball.mp3');
var kaioken = new Audio('./audios/kaioken.mp3');
var kameha = new Audio('./audios/kamehameha.mp3');
var appear = new Audio('./audios/appear.mp3');
var scream = new Audio('./audios/scream.mp3');
var select = new Audio('./audios/mousse.mp3');
var ambianceSound = new Audio('./audios/menu.mp3')
var broly = new Audio('./audios/broly.ogg');
var jiren = new Audio('./audios/jiren.ogg');
var freezer = new Audio('./audios/freezer.ogg');
var jiren = new Audio('./audios/jiren.ogg');
var piccolo = new Audio('./audios/piccolo.ogg');
var cell = new Audio('./audios/cell.ogg');
var gokussj = new Audio('./audios/gokussj.ogg');
var gokugod = new Audio('./audios/gokugod.ogg');
var gokusuper = new Audio('./audios/gokublue.ogg');
var gokublue = new Audio('./audios/gokussjsuper.ogg');
var gokuDBS = new Audio('./audios/gkugod.ogg');
var goku = new Audio('./audios/goku.ogg');
var vegeta = new Audio('./audios/vegeta.ogg');


function muteAll(){
console.log("Browser tab is hidden")

ssjSound.pause();
ssjSound.currentTime = 0;

superSound.pause();
superSound.currentTime = 0;

namekSound.pause();
namekSound.currentTime = 0;

homeSound.pause();
homeSound.currentTime = 0;

kaioken.pause();
kaioken.currentTime = 0;


kameha.pause();
kameha.currentTime = 0;

appear.pause();
appear.currentTime = 0;

scream.pause();
scream.currentTime = 0;

broly.pause();
broly.currentTime = 0;

jiren.pause();
jiren.currentTime = 0;

freezer.pause();
freezer.currentTime = 0;

piccolo.pause();
piccolo.currentTime = 0;

cell.pause();
cell.currentTime = 0;

ambianceSound.pause();
ambianceSound.currentTime = 0;

select.pause();
select.currentTime = 0;

scream.pause();
scream.currentTime = 0;


goku.pause();
goku.currentTime = 0;

gokuDBS.pause();
gokuDBS.currentTime = 0;

gokublue.pause();
gokublue.currentTime = 0;

gokusuper.pause();
gokusuper.currentTime = 0;

gokugod.pause();
gokugod.currentTime = 0;

gokussj.pause();
gokussj.currentTime = 0;


vegeta.pause();
vegeta.currentTime = 0;
}
// pause all musics when user leave the page
document.addEventListener("visibilitychange", function() {
  if (document.hidden){
    muteAll()
  } else {
      console.log("Browser tab is visible")
  }
});


loadMusic = () => {
    homeSound.pause();
    homeSound.currentTime = 0;
    superSound.pause();
    superSound.currentTime = 0;
    namekSound.play();
    namekSound.volume = 0.2;
}

loadMusicSuper = () => {
    scream.pause();
    scream.currentTime = 0;
    kameha.pause();
    kameha.currentTime = 0;
    homeSound.pause();
    homeSound.currentTime = 0;
    namekSound.pause();
    namekSound.currentTime = 0;
    kaioken.play();
    superSound.play();
    kaioken.volume = .2;
    superSound.volume = 0.2;
}

namek = () => {
    kameha.pause();
    kameha.currentTime = 0;
    homeSound.pause();
    homeSound.currentTime = 0;
    superSound.pause();
    superSound.currentTime = 0;
    kaioken.pause();
    kaioken.currentTime = 0;
    ssjSound.play();
    ssjSound.volume = 0.2;
    source.src = './images/gokuSSJ.png';
    loadMusic();
    namekLand.style.backgroundImage = "url('./images/namek.png')"
    appear.play();
    appear.volume = .5;
}

volcano = () => {
    kameha.pause();
    kameha.currentTime = 0;
    homeSound.pause();
    homeSound.currentTime = 0;
    superSound.pause();
    superSound.currentTime = 0;
    kaioken.pause();
    kaioken.currentTime = 0;
    ssjSound.play();
    ssjSound.volume = 0.2;
    source.src = './images/Goku-SSJ-Blue.png';
    loadMusic();
    namekLand.style.backgroundImage = "url('./images/volcano.jpg')"
    appear.play();
    appear.volume = .2;
    scream.play();
    scream.volume = .2;
}

dbsuper = () => {
    source.src = './images/ssjGod.png';
    loadMusicSuper();
    namekLand.style.backgroundImage = "url('./images/dbsuper.jpg')"
    appear.play();
    appear.volume = .5;
}

home = () => {
    source.src = './images/goku.png';
    namekLand.style.backgroundImage = "url('./images/home.png')";
    scream.pause();
    scream.currentTime = 0;
    kameha.pause();
    kameha.currentTime = 0;
    superSound.pause();
    superSound.currentTime = 0;
    kaioken.pause();
    kaioken.currentTime = 0;
    namekSound.pause();
    namekSound.currentTime = 0;
    ssjSound.pause();
    ssjSound.currentTime = 0;
    homeSound.play();
    homeSound.volume = .2;
    appear.play();
    appear.volume = .2;
}

kamehaaa = () => {
    scream.pause();
    scream.currentTime = 0;
    namekSound.pause();
    namekSound.currentTime = 0;
    superSound.pause();
    superSound.currentTime = 0;
    ssjSound.pause();
    ssjSound.currentTime = 0;
    homeSound.pause();
    homeSound.currentTime = 0;
    namekLand.style.backgroundImage = 'url(./images/space.jpg)';
    source.src = './images/gokuKameha.png';
    kameha.play();
    kameha.volume = .2;
    appear.play();
    appear.volume = .2;
}

let perso1Src = document.querySelector('.perso:nth-child(1n)');
let perso2Src = document.querySelector('.perso:nth-child(2n)');

let persoLeft = document.querySelector('.persoLeft');
let persoRight = document.querySelector('.persoRight');

var getAllImages = document.getElementsByTagName('img');
let backLeft = document.querySelector('.blocLeft')
let backRight = document.querySelector('.blocRight')


function changeBack() {
  document.querySelector('.blocAll').style.backgroundImage = "url(./images/backBlack.jpeg)";
}

for (var i = 0; i < 8; i++) {
    (function(x) {
      getAllImages[x].addEventListener('click', function() {
        changeBack()

        if(persoRight.src[persoRight.src.length-1] !== "g" && persoLeft.src[persoLeft.src.length-1] !== "g"){
          document.getElementById('vs').style.display = "none"      
        } else {
          document.getElementById('vs').style.display = "block"
        }

        select.pause();
        select.currentTime = 0;
        select.play();
        select.volume = 0.3;
        appear.play();
        appear.volume = 0.5;
        ambianceSound.play();
        ambianceSound.volume = 0.3;
          persoLeft.src = this.getAttribute('src');
          if(this.getAttribute('src') === './images/goku.png'){
              backLeft.style.backgroundImage = 'url(./images/home.png)'
              backLeft.style.transition = "2s"
              backLeft.style.animationName = "animLeft"
              goku.play();
              goku.volume = .2;
          } else if(this.getAttribute('src') === './images/gokuKameha.png'){
            backLeft.style.backgroundImage = 'url(./images/space.jpg)'
            gokublue.play();
            gokublue.volume = .2;
          } else if(this.getAttribute('src') === './images/gokuSSJ.png'){
            gokussj.play();
            gokussj.volume = .2;
            backLeft.style.backgroundImage = 'url(./images/namek.png)'
          } else if(this.getAttribute('src') === './images/gokuSSJGod.png'){
            gokuDBS.play();
            gokuDBS.volume = .2;
            backLeft.style.backgroundImage = 'url(./images/volcano.jpg)'
          } else if(this.getAttribute('src') === './images/ssjGod.png'){
            backLeft.style.backgroundImage = 'url(./images/dbsuper.jpg)'
            gokugod.play();
            gokugod.volume = .2;
          } else if(this.getAttribute('src') === './images/gokuSSJDbSuper.png'){
            backLeft.style.backgroundImage = 'url(./images/kamehouse.png)'
            gokusuper.play();
            gokusuper.volume = .2;
          }
      })
    }(i))
  }


  function restartAnimationPerso1() {
    let getPerso1 = document.querySelector(".persoLeft");
    getPerso1.style.animationName = "none";
    requestAnimationFrame(() => {
      setTimeout(() => {
        getPerso1.style.animationName = "appearLeft"
      }, 0);
    });
  }

  let tabPerso1 = document.querySelectorAll('.perso1')
  for (const x of tabPerso1) {
    x.addEventListener('click', 
    ()=> restartAnimationPerso1()
    ) 
  }

  function restartAnimationPerso2() {
    let getPerso2 = document.querySelector(".persoRight");
    getPerso2.style.animationName = "none";
    requestAnimationFrame(() => {
      setTimeout(() => {
        getPerso2.style.animationName = "appearRight"
      }, 0);
    });
  }

  let tabPerso2 = document.querySelectorAll('.perso2')
  for (const x of tabPerso2) {
    x.addEventListener('click', 
    ()=> restartAnimationPerso2()
    ) 
  }



  for (var i = 8; i < getAllImages.length; i++) {
    (function(x) {
      getAllImages[x].addEventListener('click', function(e) {

        changeBack()

        if(persoRight.src[persoRight.src.length-1] !== "g" && persoLeft.src[persoLeft.src.length-1] !== "g"){
          document.getElementById('vs').style.display = "none"      
        } else {
          document.getElementById('vs').style.display = "block"
        }



        persoRight.src = this.getAttribute('src');
          select.pause();
          select.currentTime = 0;
          select.play();
          select.volume = 0.3;
          appear.play();
          appear.volume = 0.7;
          if(this.getAttribute('src') === './images/vegeta.png'){
            vegeta.play();
            vegeta.volume = .2;
            backRight.style.backgroundImage = 'url(./images/vegetaNamek.jpg)'
        } else if(this.getAttribute('src') === './images/freezer.png'){
            freezer.play();
            freezer.volume = .2;
            backRight.style.backgroundImage = 'url(./images/freezerLand.jpg)'
        } else if(this.getAttribute('src') === './images/cell.png'){
            cell.play();
            cell.volume = .2;
            backRight.style.backgroundImage = 'url(./images/cellCity.jpg)'
        } else if(this.getAttribute('src') === './images/broly.png'){
            broly.play();
            broly.volume = .2;
            backRight.style.backgroundImage = 'url(./images/brolyLand.jpg)'
        } else if(this.getAttribute('src') === './images/jiren.png'){
            jiren.play();
            jiren.volume = .2;
            backRight.style.backgroundImage = 'url(./images/gokudbsuper.jpg)'
        } else if(this.getAttribute('src') === './images/picc.png'){
            piccolo.play();
            piccolo.volume = .2;
            backRight.style.backgroundImage = 'url(./images/landPiccolo.png)'
        }
      })
    }(i))
  }
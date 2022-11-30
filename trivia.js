"use strict";

const $ = selector => document.querySelector(selector);

const audioChanger = (() =>{

});
const elementChanger = (()=>{}); 

//audio player
document.addEventListener("DOMContentLoaded",() =>{
 let audio = new Audio("https://cdn.uppbeat.io/audio-output/389/2116/main-version/streaming-previews/STREAMING-aura-tatami-main-version-02-18-7741.mp3");
 audio.loop = true;
 audio.volume = 0.2; 
 audio.play();  
});
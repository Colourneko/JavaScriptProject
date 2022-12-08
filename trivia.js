"use strict";

const $ = selector => document.querySelector(selector);

let btn = $(".text-right");
let options = $("#option");
let options2 = $("#flexRadioDefault1");
let options3 = $("#flexRadioDefault2");
let options4 = $("#flexRadioDefault3");
//audio player
const playAudio = (() => {
    let audio = new Audio("https://cdn.uppbeat.io/audio-output/389/2116/main-version/streaming-previews/STREAMING-aura-tatami-main-version-02-18-7741.mp3");
    audio.loop = true;
    audio.volume = 0.2; 
    audio.muted = false;
    audio.play();
}); 
//image and text changer 
const elementChanger = (()=>{
    btn.addEventListener("click",() =>{
        if (!$("input[name=flexRadioDefault]:checked" )) {
            alert("Please select a radio button");
          }else{
            for (let index = 0; index < 10; index++){
                console.log(randomIDs());
          }}
    });
}); 
//custom alert function made with bootstrap
const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  btn.append(wrapper)
}
const randomIDs = () => {
    let idTags = [options, options2, options3, options4];
    idTags.forEach(tag => {
  let value = Math.random() < 0.5 ? "right" : "wrong";
  $(tag).innerHTML = value;
});
}
document.addEventListener("DOMContentLoaded",() =>{
playAudio();
elementChanger();
});
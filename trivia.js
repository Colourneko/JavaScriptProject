"use strict";

const $ = selector => document.querySelector(selector);

let btn = $(".text-right");


//audio player
const playAudio = (() => {
  let audio = new Audio("https://cdn.uppbeat.io/audio-output/389/2116/main-version/streaming-previews/STREAMING-aura-tatami-main-version-02-18-7741.mp3");
  audio.loop = true;
  audio.volume = 0.2; 
  audio.muted = false;
  audio.play();
}); 



const rightAnwers = (() => {
  let correctAnswers = 0;
  let totalQuestions = 10;
  for (let i = 1; i <= totalQuestions; i++) {
    let rightAnswer = $(`#RIGHT${i}`);
    if (rightAnswer.checked) correctAnswers++;
  }

  // Calculate the number of incorrect answers
  let incorrectAnswers = totalQuestions - correctAnswers;

  // Create a new div element to display the results
  const div = document.createElement('div');
  div.classList.add('text-success');
  div.style.color = "black";

  // Create a Bootstrap h4 tag to display the results
  const h4 = document.createElement('h4');
  h4.innerText = `Correct answers: ${correctAnswers}/${totalQuestions}`;

  // Add the h4 tag to the div element
  div.append(h4);

  // Add the div element to the page
  btn.append(div);
});


const elementChecker = (() => {
  btn.addEventListener("click", () => {
    let isChecked = false;
    for (let i = 1; i <= 10; i++) {
      let rightAnswer = $(`#RIGHT${i}`);
      if (rightAnswer.checked) {
        isChecked = true;
        break;
      }
    }
    if (!isChecked) {
      alert("Please select a radio button");
    } else {
      rightAnwers();
    }
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
document.addEventListener("DOMContentLoaded",() =>{
playAudio();
elementChecker();
});

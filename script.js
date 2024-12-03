const btn = document.querySelector('.btn');
const textArea = document.querySelector('.text-area');
let voiceSelect = document.querySelector('.select');

let speech = new SpeechSynthesisUtterance();
let voices = [];

window.speechSynthesis.onvoiceschanged = function () {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach(function (voice, i) {
    voiceSelect.options[i] = new Option(voice.name, i);
  });
};

voiceSelect.addEventListener('change', function () {
  speech.voice = voices[voiceSelect.value];
});

btn.addEventListener('click', function () {
  speech.text = textArea.value;
  window.speechSynthesis.speak(speech);
});

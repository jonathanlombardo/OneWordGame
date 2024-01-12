// Definisco i singoli livelli come [question , answer, nearAnswer, tip]
const levels = [
  ["Ciao", "ciao!", "ciao", "Un po' più di entusiasmo!"],
  ["Pronto?", "si!", "si", "Un po' più di entusiasmo!"],
  ["Allora... ci siamo!", "chi?", "chi", "...chirichì!"],
  ["Noi!", "voi?", "voi", "eh???"],
  ["Hai finito?", "si", "si!", "Calma zio..."],
  ["Ok, a che livello eravamo?", "cinque", "sei", "Non questo, quello prima..."],
  ["Bene, andiamo avanti...", "", "ok", "Non ho chiesto il tuo parere!"],
  ["Cavoli, sei bravo! Se sarei bravo come te mi vanterei in giro.", "fossi", "sarei?", "Perché come si dice?"],
  ["Ti metti pure a correggermi? Io 'so perché so di non sapere'.", "cit", "socrate", "Si, lo ha DETTO lui!"],
  ["A volte la risposta è tra le righe...", "detto", "Si, lo ha DETTO lui!", "Solo una parola, grazie!"],
  ["Ecco un detto: Il sole splende come non aveva mai...?", "fatto", "splenduto", "non esiste il participio passato di splendere!"],
  ["Ok, mi sono stufato. Metti fine a questa cosa!", "fine", "come?", "METTI FINE A QUESTA COSA!"],
];

const titleElement = document.querySelector("#title");
const inputElement = document.querySelector("#input");
const tipElement = document.querySelector("#tip");
const buttonElement = document.querySelector("#button");

let i = 0;
console.log(`level ${i + 1}`);

titleElement.innerText = levels[0][0];
inputElement.value = "";

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    buttonElement.click();
  }
});

buttonElement.addEventListener("click", function () {
  const answer = inputElement.value.trim().toLowerCase();
  const correctAnswer = levels[i][1];
  const nearAnswer = levels[i][2];
  const tip = levels[i][3];

  tipElement.classList.remove("text-black");

  if (answer == correctAnswer) {
    i++;

    if (i == levels.length) {
      inputElement.classList.add("d-none");
      buttonElement.classList.add("d-none");
      titleElement.innerHTML = "Il gioco è finito...<br/>e smettila di sprecare la vita cazzeggiando!";
    } else {
      console.log(`level ${i + 1}`);
      titleElement.innerText = levels[i][0];
      inputElement.value = "";
    }
  } else if (answer == nearAnswer) {
    tipElement.innerText = tip;
    tipElement.classList.add("text-black");
  } else {
    inputElement.value = "";
  }

  tipElement.innerText = tip;
});

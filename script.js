let guessedNumber = null;
let name;
let guess;
const min = 0;
const max = 25;

while (name === undefined || name === null || name.length === 0) {
  name = prompt("Welkom bij het spel Guess the number! Wat is je naam?");
}

alert("Leuk dat je dit spel komt spelen " + name + "! Laten we snel beginnen.");

guessedNumber = Math.floor(Math.random() * (max - min)) + min;
console.log("Pssst het nummer is: " + guessedNumber);

while (guess !== guessedNumber) {
  guess = parseInt(prompt("Kies een willekeurig getal van 0 tot en met 25.."));
  alert("Je gok is: " + guess);
  if (guess > guessedNumber) {
    alert("Helaas, je gok was te hoog. Probeer het opnieuw:");
  } else if (guess < guessedNumber) {
    alert("Helaaaas, je gok was te laag. Probeer het opnieuw:");
  } else {
    alert("Goed geraden! Het nummer was inderdaad: " + guess);
    alert(
      "We sluiten de game af. Bedankt voor het spelen " + name + ", tot de volgende keer!"
    );
  }
}

// Bonusvragen nog uitvogelen

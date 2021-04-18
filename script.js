const person = function() {
    var person = prompt("Welkom! Wat is je naam?", "Jouw naam");

    if (person != null) {
    alert("Hey " + person + "! Leuk dat je dit spel komt spelen.");
    }
}

const guessNumber = function(number) {
    var number = prompt("Raad het juiste getal, kies een nummer van 0 tot en met 25", "Het door jou gekozen nummer");

    if (number === (Math.floor((Math.random() * 25) + 0))) {
        alert ("Dat is het juiste getal! Gefeliciteerd je hebt gewonnen.");
        endGame();
    } else {
        alert ("Dat is niet correct");
        guessNumber();
    }
};

const endGame = function(){
    alert ("Bedankt voor het spelen! Tot de volgende keer.")
}

person();
guessNumber();
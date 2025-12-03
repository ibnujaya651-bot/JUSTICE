const characters = [
    {
        name: "Kelly",
        clue: "Karakter lari cepat, skill Dash Run, rambut kuning."
    },
    {
        name: "Hayato",
        clue: "Ahli samurai, skill Bushido, semakin sekarat semakin sakit."
    },
    {
        name: "Chrono",
        clue: "Kolaborasi dengan CR7, skill shield biru."
    },
    {
        name: "Alok",
        clue: "DJ terkenal, skill heal area + movement speed."
    },
    {
        name: "Jota",
        clue: "Kolaborasi Joe Taslim, skill sustain saat menggunakan SMG/Shotgun."
    }
];

let index = 0;

function loadCharacter() {
    document.getElementById("clue").textContent = characters[index].clue;
    document.getElementById("result").textContent = "";
    document.getElementById("answer").value = "";
}

function checkAnswer() {
    const userAns = document.getElementById("answer").value.trim().toLowerCase();
    const correct = characters[index].name.toLowerCase();

    if (userAns === correct) {
        document.getElementById("result").textContent = "Benar! 🎉";
        document.getElementById("result").style.color = "lightgreen";
    } else {
        document.getElementById("result").textContent = "Salah! Coba lagi.";
        document.getElementById("result").style.color = "red";
    }
}

function nextCharacter() {
    index++;
    if (index >= characters.length) {
        index = 0;
    }
    loadCharacter();
}

loadCharacter();

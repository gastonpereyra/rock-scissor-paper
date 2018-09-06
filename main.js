const ROCK= {
    name: "Rock",
    win: "Scissor",
    src: "./img/rock-icon-grey.png"
};
const PAPER= {
    name: "Paper",
    win: "Rock",
    src: "./img/paper-icon-grey.png"
};
const SCISSOR= {
    name: "Scissor",
    win: "Paper",
    src: "./img/scissors-icon-grey.png"
};

const choices= [ROCK, PAPER, SCISSOR];
let playerChoice= null;
let comSelect= null;
let games= 0;
let wins= 0;
let draws= 0;
let losses= 0;

document.addEventListener('DOMContentLoaded', () => {
    const comChoice = () => {
        const result= Math.round(Math.random()*2);
        return choices[result];
    }
    
    const gameResult = (player, com) => {
        return player.name == com.name ? 2 : player.win == com.name ? 0 : 1;
    }
    document.getElementById('rock').onclick = () => {
        playerChoice= ROCK;
        document.getElementById('rock').classList.add("card-select");
        document.getElementById('scissor').classList.remove("card-select");
        document.getElementById('paper').classList.remove("card-select");
    }
    document.getElementById('scissor').onclick = () => {
        playerChoice= SCISSOR;
        document.getElementById('rock').classList.remove("card-select");
        document.getElementById('scissor').classList.add("card-select");
        document.getElementById('paper').classList.remove("card-select");
    }
    document.getElementById('paper').onclick = () => {
        playerChoice= PAPER;
        document.getElementById('rock').classList.remove("card-select");
        document.getElementById('scissor').classList.remove("card-select");
        document.getElementById('paper').classList.add("card-select");
    }
    document.getElementById('cheat').onclick = () => {
        document.getElementById('comResult').innerHTML="<strong>by Gastón Pereyra</strong>";
        games++;
        wins++;
        document.getElementById('comCard').src="./img/com.png";
        document.getElementById('played').innerHTML= games;
        document.getElementById('wins').innerHTML= wins;
    }
    document.getElementById('play').onclick = () => {
        comSelect= comChoice();
        const result= gameResult(playerChoice, comSelect);
        console.log(playerChoice.name+" vs "+comSelect.name);
        games++;
        switch (result) {
            case 0: wins++; break;
            case 1: losses++; break;
            case 2: draws++; break;
        };
        document.getElementById('comCard').src=comSelect.src;
        document.getElementById('comResult').innerHTML=comSelect.name;
        document.getElementById('played').innerHTML= games;
        document.getElementById('wins').innerHTML= wins;
        document.getElementById('draws').innerHTML= draws;
        document.getElementById('losses').innerHTML= losses;
    }

});
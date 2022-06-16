/** 
 * * * WORDLE Game Software * * *
 * 
 * */
 import { word_checker } from "./wordle.js";

 
 let COUNT = 0;

 /** GLOBAL CONSTANTS **/ 
 let WORDLE_GUESSES = [[], [], [], [], [], []];   // player guesses of secret word

 const WORDS = [
     'Spend', 'Allot', 'Clock', 'Shake', 'Clean', 'Slime', 'Craft',
     'Juice', 'Gloom', 'Grave', 'Abide', 'Adore', 'Adorn', 'Atone',
     'Brake', 'Feign', 'Scaff', 'Crown'
 ];

 const SECRET_WORD = 'grave';
 
 
 
 /**  DOM */
 const rows = document.querySelectorAll('.row');

 
 
 // Listen for A - Z keystrokes
 document.addEventListener('keydown', (e) => {
    if((/[a-zA-Z]/).test(e.key) && e.key !== "Enter" && e.key !== "Backspace" && (e.key).length === 1 ) {
        if(WORDLE_GUESSES[COUNT].length === 5) return;
        WORDLE_GUESSES[COUNT].push(e.key.toLowerCase());
        renderGuesses(WORDLE_GUESSES[COUNT], COUNT, rows);
    } 
    else if(e.key === "Enter") {
        let word_guess = word_checker(SECRET_WORD, WORDLE_GUESSES[COUNT]);
        render_result(COUNT, rows, word_guess)

        if(check_end_state(word_guess, COUNT) === true) {
            alert("Brilliant!")
        } 
        if(check_end_state(word_guess, COUNT) === false) {
            alert(SECRET_WORD);
        }
        COUNT = COUNT + 1;

    }
    else if(e.key === "Backspace") {
        if(WORDLE_GUESSES[COUNT].length < 0) {
            return
        }
        WORDLE_GUESSES[COUNT].pop();
        deleteLetter(WORDLE_GUESSES[COUNT], COUNT, rows);
    }
    else {
        return
    }
 });



function renderGuesses (guess_array, row_num, rows) {
    rows[row_num].children[guess_array.length - 1].innerText = guess_array[guess_array.length - 1].toUpperCase();
}

function deleteLetter(guess_array, row_num, rows) {
    rows[row_num].children[guess_array.length].innerText = ""
}


function render_result(row_num, rows, results_array) {
    for(let i = 0; i < results_array.length; i++) {
        rows[row_num].children[i].style.color = "white";
        if(results_array[i] === "C"){
            rows[row_num].children[i].style.backgroundColor = "green";
        } 
        else if(results_array[i] === "W") {
            rows[row_num].children[i].style.backgroundColor = "#d1d188";
        }
        else if(results_array[i] === "F") {
            rows[row_num].children[i].style.backgroundColor = "grey"
        }
    }
}


function check_end_state(guess, guess_count) {
    console.log(guess)
    if(guess.includes("W") === false && guess.includes("F") === false) {
        return true;
    }
    if(guess_count === 5) return false;
}
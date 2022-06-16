/** 
 * * * WORDLE Game Software * * *
 * 
 * */
 import { word_checker } from "./wordle.js";

 


 /** GLOBAL CONSTANTS **/ 
 let WORDLE_GUESSES = [[], [], [], [], [], []];   // player guesses of secret word

 const WORDS = [
     'Spend', 'Allot', 'Clock', 'Shake', 'Clean', 'Slime', 'Craft',
     'Juice', 'Gloom', 'Grave', 'Abide', 'Adore', 'Adorn', 'Atone',
     'Brake', 'Feign', 'Scaff', 'Crown'
 ];

 const SECRET_WORD = 'grave';
 
 
 
 /**  DOM */
 
 let COUNT = 0;
 // Listen for A - Z keystrokes
 document.addEventListener('keydown', (e) => {
    if((/[a-zA-Z]/).test(e.key) && e.key !== "Enter" && e.key !== "Backspace" && (e.key).length === 1 ) {
        // letter_typer(e.key, WORDLE_GUESSES[COUNT]);
        if(WORDLE_GUESSES[COUNT].length === 5) return;
        WORDLE_GUESSES[COUNT].push(e.key.toLowerCase());
        console.log(WORDLE_GUESSES[COUNT])
    } 
    else if(e.key === "Enter") {
        console.log(WORDLE_GUESSES[COUNT])
        word_checker(SECRET_WORD, WORDLE_GUESSES[COUNT]);
        COUNT = COUNT + 1;
    }
    else if(e.key === "Backspace") {
        WORDLE_GUESSES[COUNT].pop();
    }
    else {
        return
    }
 });
 
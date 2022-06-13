/** 
 * * * WORDLE Game Software * * *
 * 
 * */
 import { letter_typer } from "./wordle.js";

 


 /** GLOBAL CONSTANTS **/ 
 let WORDLE_GUESSES = [[], [], [], [], [], []];   // player guesses of secret word
 const WORDS = [
     'Spend', 'Allot', 'Clock', 'Shake', 'Clean', 'Slime', 'Craft',
     'Juice', 'Gloom', 'Grave', 'Abide', 'Adore', 'Adorn', 'Atone',
     'Brake', 'Feign', 'Scaff', 'Crown'
 ];
 const SECRET_WORD = 'Grave';
 
 
 
 /**  DOM */
 
 // Listen for A - Z keystrokes
 window.addEventListener('keydown', (event) => {
     letter_typer(event, WORDLE_GUESSES);
 });
 
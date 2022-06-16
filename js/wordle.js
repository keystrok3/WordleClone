// export function letter_typer(letter, word_array ) {
//     if(word_array.length === 5) return;
//     word_array.push(letter.toLowerCase());
// }

export function guess_checker(secret_word, word_array) {
    return word_checker(secret_word, word_array);
}


export function word_checker(secret_word, word_array) {
    // C -> correct position; W -> Wrong Position; F -> No such letter
    let secretWord = secret_word.split("");
    
    let word_guess = word_array;
    for(let i = 0;  i < word_guess.length; i++) {
        if(word_guess[i] === secretWord[i]) {
            word_guess[i] = "C";
            continue;
        }
        if((word_guess[i] !== secretWord[i]) && (secretWord.includes(word_guess[i]) === true)) {
            word_guess[i] = "W";
            continue;
        }
        if((word_guess[i] !== secretWord[i]) && secretWord.includes(word_guess[i]) === false) {
            word_guess[i] = "F";
            continue;
        }
    }
    console.log(word_guess)
    return word_guess;
}





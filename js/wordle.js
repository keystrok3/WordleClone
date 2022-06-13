
let CURRENT_ATTEMPT = 0;


// Runs in main.js on a keydown event
// Second parameter is array of arrays that contains words (guesses)
export function letter_typer(e, attempts_array) {
    let word_array = attempts_array[CURRENT_ATTEMPT];

    // check if key pressed is an alphabetic letter
    let letterkey = e.key;
    if((/[a-zA-Z]/).test(letterkey)) {
        word_array.push(letterkey);
        word_watcher(attempts_array, word_array);
    }
}

// Called by letter_typer()  when the array (in params) is full
export function word_watcher(attempts_array, word_array) {
    if(word_array.length === 5) {
        // call evaluator
        CURRENT_ATTEMPT += 1;
        console.log(attempts_array)
    }
}





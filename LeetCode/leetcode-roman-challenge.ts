/**
 * Leetcode Roman Numbers challenge
 */

let lettersAndNumbers: Object = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}
// pole s hondotama římských čísel

let romanLettersArray = (letter: string): string => {
    // vsechny
    // a jestli se najde par
    // tak se vrati match
    let lettersOfRoman = Object.keys(lettersAndNumbers)
    lettersOfRoman.forEach(element => {
        if(element === letter)  romanToInt(element)
    });

    return 'Nope';
}

function romanToInt(s: string): number {
    return lettersAndNumbers[s]
};
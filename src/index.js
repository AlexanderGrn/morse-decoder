const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

const MAP = {
    '00': '',
    '10': '.',
    '11': '-'
}

function decode(expr) {
    const splitter = '**********';
    let arrOfWords = expr.split(splitter);

    arrOfWords.forEach((word, index) => {
        let arrOfChar = [];

        for (let i = 0; i < word.length; i += 10) {
            arrOfChar.push(word.slice(i, i + 10));
        }

        arrOfChar.forEach((char, i) => {
            let arr = [];

            for (let i = 0; i < 10; i += 2) {
                arr.push(MAP[char.slice(i, i + 2)]);
            }
            arrOfChar[i] = MORSE_TABLE[arr.join('')];
        })

        arrOfWords[index] = arrOfChar.join('');
    });

    return arrOfWords.join(' ');
}

//console.log(decode("00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010"))

module.exports = {
    decode
}

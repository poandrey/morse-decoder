const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let a = expr.split('');
    let num = a.length / 10;
    let b = [];
    for (let i = 0; i < num; i++) {
      b.push(a.splice(0, 10));
    }
    let z = [];
    b.forEach((i) => z.push(i.join('').replace(/^0+/, ''))
    );
    let res = z.map((i) => i.replace(/10/g, '.').replace(/11/g, '-')
    );
    return res.map(i => i === '**********' ? ' ' : MORSE_TABLE[i]).join('');
  }

module.exports = {
    decode
}

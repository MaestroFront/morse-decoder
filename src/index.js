const MORSE_TABLE = {
    '.-':     'a', '-...':   'b', '-.-.':   'c', '-..':    'd', '.':      'e', '..-.':   'f', '--.':    'g', '....':   'h', '..':     'i',
    '.---':   'j', '-.-':    'k', '.-..':   'l', '--':     'm', '-.':     'n', '---':    'o', '.--.':   'p', '--.-':   'q', '.-.':    'r',
    '...':    's', '-':      't', '..-':    'u', '...-':   'v', '.--':    'w', '-..-':   'x', '-.--':   'y', '--..':   'z', '.----':  '1',
    '..---':  '2', '...--':  '3', '....-':  '4', '.....':  '5', '-....':  '6', '--...':  '7', '---..':  '8', '----.':  '9', '-----':  '0',
};

module.exports = {
    decode(expr) {
        const keysArray = Object.keys(MORSE_TABLE);
        const valuesArray = Object.values(MORSE_TABLE);
        let array = [];
        let result = [];
    
        const combineToArray = () => expr = expr.split(/(.{10})/).filter(item => item);
        combineToArray()
    
        const removeZeroes = () => expr.map(item => item === '**********' ? array.push(' ') : array.push(String(+item)))
        removeZeroes()
    
        const decodeToDotsAndDashes = () => array = array.map((item) => item.replace(/11/g, '-').replace(/10/g, '.'));
        decodeToDotsAndDashes();
    
        const decodeToLetters = () => {
            for (let i = 0; i < array.length; i++) {
                if (array[i] === ' ') {
                    result.push(array[i]);
                }
                for (let j = 0; j < keysArray.length; j++) {
                    if (array[i] === keysArray[j]) {
                        result.push(valuesArray[j])
                    }
                }
            }
        }
        decodeToLetters();
    
        const convertToString = () => result = result.join('');
        convertToString();
    
        return result;
    
    }
}
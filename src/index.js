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

function decode(expr) {
    let tmp = expr.split("**********");
    let ans = [];

    tmp.forEach(function (item) {
        let word = "";

        while (item.length / 10 >= 1) {
            let char = "";

            for (let j = 0; j < 5; j++) {
                char += digitToMorse(item[0] + item[1]);
                item = item.substring(2);
            }

            word += MORSE_TABLE[char];
        }

        ans.push(word);

    })

    return ans.join(" ");

}

function digitToMorse(nums) {
    if (nums === "10")
        return ".";
    else if (nums === "11")
        return "-";
    else
        return "";
}

module.exports = {
    decode
}

decode("00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010");
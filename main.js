function capitalize(string) {
    const arr = string.split('');
    arr.splice(0, 1, arr[0].toUpperCase());
    const new_string = arr.join('');
    return new_string;
}

function reverseString(string) {
    const arr = string.split('');
    arr.reverse();
    const new_string = arr.join('');
    return new_string;
}

const Calculator = {
    add(x, y) {
        return x + y;
    },
    sub(x, y) {
        return x - y;
    },
    mult(x, y) {
        return x * y;
    },
    div(x, y) {
        return x / y;
    }
}

function caesarCipher(string, shift) {
    const arr = string.split('');
    const ascii_array = []
    for (let i = 0; i < string.length; i++) {
        let ascii = string.charCodeAt(i);
        ascii+=shift;
        if (ascii < 97 && ascii > 90) {
            ascii = ascii - 26;
        }
        else if (ascii > 122) {
            ascii = ascii - 26;
        }
        ascii_array.push(ascii);
    }
    return String.fromCharCode(...ascii_array);
}

function analyzeArray(arr) {
    const length = arr.length;
    let min = Number.MAX_SAFE_INTEGER;
    let max = 0;
    let sum = 0;
    function parse(arr) {
        for (let i = 0; i < length; i++) {
            sum += arr[i];
            if (arr[i] > max) {
                max = arr[i];
            }
            if (arr[i] < min) {
                min = arr[i];
            }
        }
    }
    parse(arr);
    const average = sum / length;
    return {
        average: average,
        min: min,
        max: max,
        length: length
    };
}

module.exports = {
    capitalize: capitalize,
    reverseString: reverseString,
    Calculator,
    caesarCipher: caesarCipher,
    analyzeArray: analyzeArray
}
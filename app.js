const userInput = document.getElementById('number');
const convertButton = document.getElementById('convert-btn');
const resultDiv = document.getElementById('output');

convertButton.addEventListener('click', convertToRoman);

function convertToRoman() {
    const romanNumerals = [{value: 1000, symbol: "M"}, {value: 900, symbol: "CM"}, {
        value: 500, symbol: "D"
    }, {value: 400, symbol: "CD"}, {value: 100, symbol: "C"}, {value: 90, symbol: "XC"}, {
        value: 50, symbol: "L"
    }, {value: 40, symbol: "XL"}, {value: 10, symbol: "X"}, {value: 9, symbol: "IX"}, {
        value: 5, symbol: "V"
    }, {value: 4, symbol: "IV"}, {value: 1, symbol: "I"},]

    let result = '';
    const number = parseInt(userInput.value);

    if (isNaN(number)) {
        resultDiv.replaceChildren('Please enter a valid number');
    } else if (number <= 0) {
        resultDiv.replaceChildren('Please enter a number greater than or equal to 1');
    } else if (number > 3999) {
        resultDiv.replaceChildren('Please enter a number less than or equal to 3999');
    } else {
        let numberInput = number;
        for (let i = 0; i < romanNumerals.length; i++) {
            while (numberInput >= romanNumerals[i].value) {
                result += romanNumerals[i].symbol;
                numberInput -= romanNumerals[i].value;
            }
        }
        resultDiv.replaceChildren(result);
    }
}
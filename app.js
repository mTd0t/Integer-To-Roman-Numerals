const userInput = document.getElementById('number-input');
const convertButton = document.getElementById('convert-btn');
const resultDiv = document.getElementById('result');


convertButton.addEventListener('click', convertToRoman);


function convertToRoman(num) {
    const romanNumerals = [{value: 1000, symbol: "M"}, {value: 900, symbol: "CM"}, {
        value: 500, symbol: "D"
    }, {value: 400, symbol: "CD"}, {value: 100, symbol: "C"}, {value: 90, symbol: "XC"}, {
        value: 50, symbol: "L"
    }, {value: 40, symbol: "XL"}, {value: 10, symbol: "X"}, {value: 9, symbol: "IX"}, {
        value: 5, symbol: "V"
    }, {value: 4, symbol: "IV"}, {value: 1, symbol: "I"},]


    let result = '';

    if(userInput.value === '' || userInput.value < 0 || userInput.value > 3999) {
        alert('Please enter a valid number!');
    }

    let numberInput = userInput.value;
    for (let i = 0; i < romanNumerals.length; i++) {
        while (numberInput >= romanNumerals[i].value) {
            result += romanNumerals[i].symbol;
            numberInput -= romanNumerals[i].value;}
    }
    resultDiv.replaceChildren(result);
}



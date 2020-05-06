const inputBinary = document.getElementById("inputBinary");
const convert = document.getElementById("convert");
const result = document.getElementById("resultDecimal");


function convertBin2Dec() {
    var binary = inputBinary.value.replace(/^[0]+/g, "");
    var calc, resultBinary;
    resultBinary = 0;
    for (var i = 0; i < binary.length; i++) {
        if (isNaN(binary[i])) {
            result.textContent = "Input Inválido. Apenas números."
            break;
        }
        switch (binary[i]) {
            case '0':
                calc = calculateBinary(binary[i], resultBinary);
                resultBinary = calc;
                break;
            case '1':
                calc = calculateBinary(binary[i], resultBinary);
                resultBinary = calc;
                break
            default:
                result.textContent = "Input Inválido. Apenas '0' e '1'."
        }
        if (i == binary.length - 1) {
            result.textContent = resultBinary;
        }
    }
}

function calculateBinary(binaryNumber, precedingResult) {
    var binNumber = parseInt(binaryNumber)
    return precedingResult * 2 + binNumber;
}

convert.addEventListener("click", convertBin2Dec);
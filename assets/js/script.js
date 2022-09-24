
let btnSubmit = document.querySelector("#btnSubmit");
const frmNumbers = document.querySelector(".form-number");

btnSubmit.addEventListener("click", function(event){
    event.preventDefault();
    const frmNumber = document.querySelector(".form-number");
    const userInputBinary = frmNumber.binaryNumber.value;
    const userImputDecimal = frmNumber.decimalNumber.value;
if(userInputBinary !== ''){
    function createArrayBinary(strValue){
        const arrayStrBorkenBinaryNumber = strValue.split("");
        const arrayIntBrokenBinaryNumber = [];
        for(i = arrayStrBorkenBinaryNumber.length -1; i >= 0 ; i--){
            arrayIntBrokenBinaryNumber.push(parseInt(arrayStrBorkenBinaryNumber[i]));
        }
        return arrayIntBrokenBinaryNumber;    
    }
    function calculateBinaryNumber(intArrayValue){
        let sumArrayBinary = 0;
        for(i = 0; i < intArrayValue.length; i++){
            sumArrayBinary += intArrayValue[i] * 2**i;
        }
        return sumArrayBinary;
    }
    const arrayBinary = createArrayBinary(userInputBinary);
    const decimalNumber = calculateBinaryNumber(arrayBinary);
    document.querySelector("#decimalNumber").value = '';
    document.querySelector("#decimalNumber").value += decimalNumber;
}
else{
    function ArrayBinary(inputDecimal){
        inputDecimal = parseInt(inputDecimal);
        let arrayIntBokenDecimalNumber = [];
        let i = 0;
        while(true){
            if(i < 1){
                arrayIntBokenDecimalNumber.push(inputDecimal % 2);
                i += 1;
                continue;
             }
            inputDecimal = (inputDecimal - inputDecimal % 2) / 2;
            arrayIntBokenDecimalNumber.push(inputDecimal % 2);
            i += 1;
            if(inputDecimal === 1){
                break;
            }
        }
    return arrayIntBokenDecimalNumber;
}
    function inverteArray(arrayNumbersBinary){
        let arrayInverted = [];
        for(i = arrayNumbersBinary.length; i >= 0 ; i--){
            arrayInverted.push(arrayNumbersBinary[i]);
        }
    return arrayInverted;
}
    const binaryNumberConverted = ArrayBinary(userImputDecimal);
    const decimalStrNumberConverted = inverteArray(binaryNumberConverted);
    const decimalNumberConverted = parseInt(decimalStrNumberConverted.join().replace(/,/g, ""));
    document.querySelector("#binaryNumber").value = decimalNumberConverted;
}
})

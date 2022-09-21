
let btnSubmit = document.querySelector("#btnSubmit");

btnSubmit.addEventListener("click", function(event){
    event.preventDefault();

    const frmNumber = document.querySelector("#formNumber");
    const userInput = frmNumber.name.value;

    function createArrayBinary(strValue){
        const arrayStrBorkenBinaryNumber = strValue.split("");
        const arrayIntBrokenBinaryNumber = [];
        for(i = arrayStrBorkenBinaryNumber.length -1; i >= 0 ; i--){
            arrayIntBrokenBinaryNumber.push(parseInt(arrayStrBorkenBinaryNumber[i]));
        }
        return arrayIntBrokenBinaryNumber;    
    }
    const arrayBinary = createArrayBinary(userInput);

    function calculateBinaryNumber(intArrayValue){
        let sumArrayBinary = 0;
        for(i = 0; i < intArrayValue.length; i++){
            sumArrayBinary += intArrayValue[i] * 2**i;
        }
        return sumArrayBinary;
    }
    const decimalNumber = calculateBinaryNumber(arrayBinary);
    document.querySelector("#result").innerHTML += decimalNumber;

})


const btnSubmit = document.querySelector("#btnSubmit");
const btnClear = document.querySelector("#btn-clear");



btnSubmit.addEventListener("click", function(event){
    event.preventDefault();
    const frmNumber = document.querySelector(".form-number");
    const userInputBinary = frmNumber.binaryNumber.value;
    const userInputDecimal = frmNumber.decimalNumber.value;
    const decimalNumber = parseInt(userInputBinary, 2).toString(10);
    const binaryNumber = parseInt(userInputDecimal, 10).toString(2);
    let verified = true;

    const arrayTestBinary = userInputBinary.split("");
    for (let counter = 0; counter < arrayTestBinary.length; counter++){
        if (arrayTestBinary[counter] !== "0" & arrayTestBinary[counter] !== "1"){
            verified = false;
            alert("Enter only 0 (zero) and 1 (one)");
            break;
        }
    }
    const arrayTestDecimal = userInputDecimal.split("");
    for (counter = 0; counter < arrayTestDecimal.length; counter++){
        console.log(arrayTestDecimal[counter]);
        if(arrayTestDecimal[counter] === "," || arrayTestDecimal[counter] === "."){
            verified = false;
            alert("Enter only whole numbers")
            break;
        }
    }

if(verified === true){
    if(userInputDecimal == "" & userInputBinary == ""){
        document.querySelector("#binaryNumber").value = "";
        document.querySelector("#decimalNumber").value = "";
    }
    else if(userInputDecimal === ""){
        document.querySelector("#decimalNumber").value = decimalNumber;
    }
    else if(userInputBinary === ""){
        document.querySelector("#binaryNumber").value = binaryNumber;
    }
    else if(userInputDecimal !== "" & userInputBinary !== ""){
        alert("Clear the fields!");
    }
}
})

btnClear.addEventListener("click", function(event){
    event.preventDefault();
    document.querySelector("#binaryNumber").value = "";
    document.querySelector("#decimalNumber").value = "";
})


let btnSubmit = document.querySelector("#btnSubmit");

btnSubmit.addEventListener("click", function(event){
    event.preventDefault();

    const frmNumber = document.querySelector("#formNumber");
    const userInput = frmNumber.name.value;
    const binaryNumber = [userInput.length]
    // let sizeBinaryNumber = binaryNumber.length;

    for (let i = 0; i <= binaryNumber.length; i++){
        console.log(i);
    }
    console.log(typeof(binaryNumber.length))
    document.querySelector("#result").innerHTML += binaryNumber;

})

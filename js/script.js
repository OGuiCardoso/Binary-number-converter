
let btnSubmit = document.querySelector("#btnSubmit");

btnSubmit.addEventListener("click", function(event){
    event.preventDefault();

    let frmNumber = document.querySelector("#formNumber");
    let binaryNumber = frmNumber.name.value;
    binaryNumber = parseInt(binaryNumber);
    binaryNumber += 1
    document.querySelector("#result").innerHTML += binaryNumber;

})


let inputText = document.getElementById("campo");
let numberValue = inputText.value
let paragraph = document.createElement("p");
let text = document.createTextNode("The number converted to decimal is: ");

paragraph.appendChild(text);
document.body.appendChild(paragraph);

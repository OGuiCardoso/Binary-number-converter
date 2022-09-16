const form = document.getElementById('form');
const inputText = document.getElementById("campo");







form.addEventListener('submit', function(e){
    console.log(inputText.value);
    e.preventDefault();
});



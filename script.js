const inputField = document.querySelectorAll("input");
const buttonSubmit = document.querySelector("button");

var form = document.getElementById("my-form");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

buttonSubmit.addEventListener('click', () => {
    for(input of inputField) {
        if(!input.checkValidity()) {
            input.style.border = '1px solid red';
        } else {
            input.style.border = '1px solid green';
        }
        console.log('TRUE');
    }
});


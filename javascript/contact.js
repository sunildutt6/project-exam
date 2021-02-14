const form = document.querySelector("form")
const firstName = document.querySelector("#firstName")
const firstNameError = document.querySelector("#firstNameError")
const lastName = document.querySelector("#lastName")
const lastNameError = document.querySelector("#lastNameError")
const email = document.querySelector("#email")
const emailError = document.querySelector("#emailError")


function formValidation(event) {
    event.preventDefault()

    if (checkLength(firstName.value, 0) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }
    if (checkLength(lastName.value, 0) === true) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
    }
    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
    if(firstName.value.trim().length > 0 &&
    lastName.value.trim().length > 0 === true &&
    validateEmail(email.value) === true ) {
            message.innerHTML = '<div class="message">Your message has been sent</div>'
    } else {
        message.innerHTML = "";
    }           
     form.reset()
 }

    
form.addEventListener("submit", formValidation);
function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) { 
    const regEx = /\S+@\S+\.\S+/;
     const patternMatches = regEx.test(email);    
   return patternMatches;
 }
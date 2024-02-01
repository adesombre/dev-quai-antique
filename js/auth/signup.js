const nameinput =document.getElementById("NameInput");
const lastnameinput = document.getElementById("LastnameInput");
const emailinput =document.getElementById("EmailInput");
const passinput = document.getElementById("PasswordInput");
const validpassinput = document.getElementById("ValidatePasswordInput");
const btnValidInscription =document.getElementById("btn-valid-inscription")


nameinput.addEventListener("keyup", validateForm);
lastnameinput.addEventListener("keyup", validateForm);
emailinput.addEventListener("keyup", validateForm);
passinput.addEventListener("keyup", validateForm);
validpassinput.addEventListener("keyup", validateForm);


function validateForm(){
    const nomOK =validateRequired(nameinput);
    const prenomOK=validateRequired(lastnameinput)
    const emailOK=validateEmail(emailinput);
    const passOK =validPassword(passinput);
    const passConfirme= validateConfirmationPassword(passinput,validpassinput);
   
    if (nomOK && prenomOK && emailOK && passOK && passConfirme){
        btnValidInscription.disabled =false;
    }else{
        btnValidInscription.disabled =true;
    }
}
function validPassword(input){
    const regexpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const userPass = input.value;
    if ( userPass.match(regexpass)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    } 
    
}
function validateConfirmationPassword(inputPwd, inputConfirmePwd){

    if (inputPwd.value === inputConfirmePwd.value){
        inputConfirmePwd.classList.add("is-valid");
        inputConfirmePwd.classList.remove("is-invalid");
        return true;
    }else {
        inputConfirmePwd.classList.add("is-invalid");
        inputConfirmePwd.classList.remove("is-valid");
        return false;
    }

}

function validateRequired(input){

    if (input.value != ""){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validateEmail(input) {
    const regexemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailuser = input.value;
    if (mailuser.match(regexemail)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
    
}

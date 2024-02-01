const emailinput =document.getElementById("EmailInput");
const passinput = document.getElementById("PasswordInput");
const btnvalidationconnexion =document.getElementById("btn-validate-connexion");

emailinput.addEventListener("keyup", validateForm);
passinput.addEventListener("keyup", validateForm);

function validateForm(){
  const emailOK= validateEmail(emailinput);
  const passOK = validateRequired(passinput);
  if (emailOK && passOK){
    btnvalidationconnexion.disabled= false;
   

}else {
    btnvalidationconnexion.disabled= true;
    
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
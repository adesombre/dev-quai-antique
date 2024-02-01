const nameinput =document.getElementById("nameInput");
const lastnameinput = document.getElementById("lastnameInput");
const allergieinput =document.getElementById("allergieInput");
const convivesinput = document.getElementById("nbconvivesInput");


nameinput.addEventListener("keyup", validateForm);
lastnameinput.addEventListener("keyup", validateForm);
allergieinput.addEventListener("keyup", validateForm);
convivesinput.addEventListener("keyup", validateForm);


function validateForm(){
    validateRequired(nameinput);
    validateRequired(lastnameinput)
    validateRequired(emailinput);
    validateRequired(allergieinput);
    validateRequired(convivesinput);
}

function validateRequired(input){

    if (input.value != ""){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
    }else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
    }
}
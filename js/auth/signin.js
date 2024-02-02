const email =document.getElementById("EmailInput");
const password =document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btn-signin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
    //ici il faudras appeler une api pour verifier les credentials
    if (email.value == "alain@gmail.com" && password.value =="123456Aa@")
    {   
       
        //il faudras recupere le vrai token
        const token ="arzarezetstdrtdytfjghgvbljnlkjjklhiuguygiugiyfuihgkhiyfuftdyturfgh,bkj";
        setToken(token);
        //placer ce token en cooki
        window.location.replace("/");
    }else {
        email.classList.add("is-invalid");
        password.classList.add("is-invalid");
        
        alert("vos donnee ne corresponde pas au compte");
    }

}
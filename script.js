// Contas Cadastradas
var registredEmails=[];
var passwordArray=[];

const formOpenBtn = document.querySelector("#form-open"),
    home = document.querySelector(".home"),
    formContainer = document.querySelector(".form_container"),
    formCloseBtn = document.querySelector(".form-close"),
    signupBtn = document.querySelector("#signup"),
    loginBtn = document.querySelector("#login"),
    pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));


// Controles de formulário
signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});

// Mostrar e ocultar senha
pwShowHide.forEach((icon) => {
    icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input");
        if (getPwInput.type === "password") {
            getPwInput.type = "text";
            icon.classList.replace("uil-eye-slash","uil-eye");
        } else {
            getPwInput.type = "password";
            icon.classList.replace("uil-eye","uil-eye-slash");
        }
    });
});



function login(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("senha").value;
    event.preventDefault();

    var i = registredEmails.indexOf(email);

    if(registredEmails.indexOf(email) == -1){
        if (email == ""){
            alert("Digite seu Email.");
            return ;
        }
        alert("Email não existe.");
        return ;
    }
    else if(passwordArray[i] != password){
        if (password == ""){
            alert("Digite sua senha.");
            return ;
        }
        alert("Usuário ou senha incorretos.");
        return ;
    }
    else {
        setTimeout(function() {
            window.location.href = "https://ncd.ufes.br/smartidosos.html";
        }, 1000);

        document.getElementById("se").value ="";
        document.getElementById("sp").value="";
        return ;
    }
}

function register(){
    event.preventDefault();

    const emailRegister = document.getElementById("r-email").value;
    const passwordRegister = document.getElementById("r-senha").value;
    const passwordConfirmRegister = document.getElementById("rc-senha").value;

    if ( passwordRegister != passwordConfirmRegister ){
        alert("A senha não corresponde, digite sua senha novamente");
        return;
    }
    else if(registredEmails.indexOf(emailRegister) == -1){
        registredEmails.push(emailRegister);
        passwordArray.push(passwordRegister);

        alert(emailRegister + "  Thanks for registration. \nTry to login Now");

        document.getElementById("r-email").value ="";
        document.getElementById("r-senha").value="";
        document.getElementById("rc-senha").value="";
    }
    else{
        alert(emailRegister + " já está cadastrado.");
        return ;
    }
}
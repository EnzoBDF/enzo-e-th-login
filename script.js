let ls = []

// elementos do DOM
const inputRegisterUsername = document.getElementById("inputRegisterUsername");
const inputRegisterPassword = document.getElementById("inputRegisterPassword");
const inputConfirmPassword = document.getElementById("inputConfirmPassword");
const inputLoginUsername = document.getElementById("inputLoginUsername");
const inputLoginPassword = document.getElementById("inputLoginPassword");
const spanCurrentUser = document.getElementById("spanCurrentUser");
const btnDesconectar = document.getElementById("btnDesconectar");
const divLogin = document.getElementById("divLogin");

// lista de usuarios
const users = [];


function register() {
    // checa se usuario ja existe
    if (users.find(obj => obj.username === inputRegisterUsername.value) === undefined) {
        // checa se senhas sao iguais
        if(inputRegisterPassword.value === inputConfirmPassword.value) {
            // empurra objeto de usuário para o array
            if(localStorage.getItem('users') != null){
                users = JSON.parse(localStorage.getItem('users'))
            }
            users.push({username: inputRegisterUsername.value,
                        password: inputRegisterPassword.value}); 
            alert("USUÁRIO CRIADO");

            localStorage.setItem('users', JSON.stringify(users))
        }
        else alert("SENHAS NÃO COINCIDEM");
    }
    else alert("USUÁRIO JÁ EXISTENTE");
}

function login() {
    // checa se usuario e senha estao no array
    if (users.find(obj => (obj.username === inputLoginUsername.value) && 
                          (obj.password === inputLoginPassword.value))) {
        // mostra e esconde elementos da UI
        spanCurrentUser.innerHTML = `Usuário logado: <b>${inputLoginUsername.value}</b>`;
        btnDesconectar.style.display = "block";
        divLogin.style.display = "none";
        alert("LOGIN FEITO COM SUCESSO");
    }
    else alert("USUÁRIO OU SENHA INVÁLIDOS");
}

function logoff() {
    // mostra e esconde elementos da UI
    btnDesconectar.style.display = "none";
    spanCurrentUser.innerHTML = "";
    divLogin.style.display = "block";
}
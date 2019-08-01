// let nome = document.querySelector("#nome");
// let email = document.querySelector("#email");
// let confirmacao  = document.querySelector("#confirmacaoEmail");  
// let senha = document.querySelector("#password");
// let opcao = document.querySelector("div");
// let botao = document.querySelector("button");
// let h1 = document.querySelector("h1");

// function cadastrar(){
//     if(email.value == confirmacao.value){
//         localStorage.setItem("nome", nome.value);
//         localStorage.setItem("email", email.value);
//         localStorage.setItem("confirmacao",confirmacao.value);
//         localStorage.setItem("senha", senha.value);
//         console.log("teste");

//     }
//     else{
//         alert("erro!!");
//     }    
// }

// function limpar(){
//      localStorage.clear();
// }

// function sumirCadastro(){
//     localStorage.setItem("nome", nome.value);
//     localStorage.setItem("email", email.value);
//     localStorage.setItem("senha", senha.value);
//     localStorage.setItem("confirmacao",confirmacao.value);
//     Input.style.display="none";
// }

// botao.onclick = cadastrar;





let nome = document.querySelector("#Nome");
let email = document.querySelector("#Email");
let confirme = document.querySelector("#Confirme");
let senha = document.querySelector("#Senha");
let genero = document.querySelector("#Sexo");
let h2 = document.querySelector("h2");
let botao = document.querySelector("button");
let a = document.querySelector("a");

let div = document.querySelector("div");
let section = document.querySelector("section");


if(localStorage.nome){
    h2.innerHTML = `SEJA BEM VINDO ${localStorage.nome}`;
    a.innerHTML = `NÂO È O ${localStorage.nome}`;
    div.style.display = `none`;
    section.style.display = `initial`;
    
} else {
    function acessar(){
        
        localStorage.setItem("nome", nome.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("senha", senha.value);
        localStorage.setItem("genero", genero.value);
        
        
        div.style.display = "initial";
        
        if(email.value == confirme.value){
            h2.innerHTML = `SEJA BEM VINDO ${localStorage.nome}`;
            a.innerHTML = `NÂO È O ${localStorage.nome}`;
            div.style.display = `none`;
            section.style.display = `initial`;
        } else {
            alert("Email nao corresponde");
        }
    }
}


function reset() {
    localStorage.clear("nome");
}

botao.onclick = acessar;

a.onclick = reset;
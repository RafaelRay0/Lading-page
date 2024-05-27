
function enviarForm() {

const email = document.getElementById("name").value;

const senha = document.getElementById("password").value;

    if( email === "Admin" && senha === "Admin") {
        alert("Enviado com sucesso")
    }else {
        alert("Senha ou e-mail incorreto!")
    }
        
}
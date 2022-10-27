function cadastro(){
    let nome = document.getElementById("txtnome").value;
    let telefone = document.getElementById("txttelefone").value;
    let email = document.getElementById("txtemail").value;
    
    document.getElementById("rsnome").innerHTML = nome
    document.getElementById("rstelefone").innerHTML = telefone
    document.getElementById("rsemail").innerHTML = email
}
const iconeOlho = document.querySelector('#olho');
const inputSenha = document.querySelector('#senha');



iconeOlho.addEventListener('click', function(){
    trocarIcone(olho, 'fa-eye', 'fa-eye-slash');
    mostrarSenha(inputSenha);
}
)

function mostrarSenha(elemento){
    if(elemento.type == "password"){
        elemento.type = 'text';
    }else{
        elemento.type = 'password';
    }
}

function trocarIcone(elemento, classeRemovida,classeNova){
    if(elemento.classList.contains(classeRemovida)){
        elemento.classList.remove(classeRemovida);
        elemento.classList.add(classeNova);
    }else{
        elemento.classList.remove(classeNova)
        elemento.classList.add(classeRemovida)
    }
}


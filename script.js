async function buscaEndereco(cep) {
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvertida = await consultaCEP.json();
        if (consultaCEPConvertida.erro) {
            throw Error('CEP não existente!');
        }     
        
        var estado = document.getElementById('estado');
        var cidade = document.getElementById('cidade');
        var bairro = document.getElementById('bairro');
        var logradouro = document.getElementById('logradouro');

        estado.value = consultaCEPConvertida.uf;
        cidade.value = consultaCEPConvertida.localidade;
        bairro.value = consultaCEPConvertida.bairro;
        logradouro.value = consultaCEPConvertida.logradouro;

        console.log(consultaCEPConvertida);
    }   catch (erro) {
        console.log(erro)
    }
} 

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));
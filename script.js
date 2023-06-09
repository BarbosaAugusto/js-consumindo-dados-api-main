var consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/')
    .then(resposta => resposta.json())
    .then(r => {
        if (r.erro) {
            throw Error('Esse CEP não existe!')
        } else 
            console.log(r)
    })
    .catch(erro => console.log(erro))
    .finally(mensagem => console.log('Processamaneto concluído!'));
        
console.log(consultaCEP)

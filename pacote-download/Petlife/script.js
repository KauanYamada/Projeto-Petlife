let elementosDuvida = document.querySelectorAll('.duvida') // diferente do querySelector simples, eu uso aqui o querySelectorAll para reconhecer todos os meus elementos da classe duvida.

elementosDuvida.forEach(function (duvida) { // aqui eu estou dizendo que quero executar uma função para cada elemento duvida que peguei lá em cima
    duvida.addEventListener('click', function () { // aqui dentro da função, estou adicionando para cada elemento de duvida um evento de clique
        duvida.classList.toggle('ativa') // essa linha será executada com o clique. Aqui estou adicionando a classe 'ativa' nos elementos html de duvida sempre que houver um clique. Nos CSS eu fiz com que a classe ativa faça com que apareça a caixa do parágrafo novamente.
    })
})
// Função para obter o índice do jogo a partir da URL
function carregarJogoId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('jogo');
}

// Função para ler o arquivo JSON
function carregarJson() {
    fetch('dados.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na rede ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const jogoId = carregarJogoId();
            
            if (jogoId !== null && jogoId >= 0 && jogoId < data.jogo.length) {
                const jogo = data.jogo[jogoId];
                exibirJogoInfo(jogo);
            } else {
                console.log('Índice de jogos inválido');
            }
        })
        .catch(error => {
            console.error('Houve um problema com a operação de leitura:', error);
        });
}

// Função para exibir as informações dos jogos no corpo do HTML
function exibirJogoInfo(jogo) {
    document.getElementById('jogo-jogo').textContent = jogo.jogo;
    document.getElementById('jogo-genero').textContent = jogo.genero;
    document.getElementById('jogo-preco').textContent = jogo.preco;
    document.getElementById('jogo-plataforma').textContent = jogo.plataforma;
}

// Chama a função para ler o arquivo JSON
carregarJson();
// Função para obter o índice da receita a partir da URL
function carregarReceitaId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('receita');
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
            const receitaId = carregarReceitaId();
            
            if (receitaId !== null && receitaId >= 0 && receitaId < data.receita.length) {
                const receita = data.receita[receitaId];
                exibirReceitaInfo(receita);
            } else {
                console.log('Índice de receitas inválida');
            }
        })
        .catch(error => {
            console.error('Houve um problema com a operação de leitura:', error);
        });
}

// Função para exibir as informações das receitas no corpo do HTML
function exibirReceitaInfo(receita) {
    document.getElementById('receita-receita').textContent = receita.receita;
    document.getElementById('receita-ingredientes').textContent = receita.ingredientes;
    document.getElementById('receita-preparo').textContent = receita.preparo;
}

// Chama a função para ler o arquivo JSON
carregarJson();
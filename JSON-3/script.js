// Função para obter o índice da cidade a partir da URL
function carregarCidadeId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('cidade');
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
            const cidadeId = carregarCidadeId();
            
            if (cidadeId !== null && cidadeId >= 0 && cidadeId < data.cidade.length) {
                const cidade = data.cidade[cidadeId];
                exibirCidadeInfo(cidade);
            } else {
                console.log('Índice de cidades inválida');
            }
        })
        .catch(error => {
            console.error('Houve um problema com a operação de leitura:', error);
        });
}

// Função para exibir as informações da cidade no corpo do HTML
function exibirCidadeInfo(cidade) {
    document.getElementById('cidade-cidade').textContent = cidade.cidade;
    document.getElementById('cidade-pais').textContent = cidade.pais;
    document.getElementById('cidade-continente').textContent = cidade.continente;
}

// Chama a função para ler o arquivo JSON
carregarJson();
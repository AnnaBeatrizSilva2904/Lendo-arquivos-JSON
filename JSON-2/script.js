// Função para obter os índices dos animais a partir da URL
function carregarAnimaisId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('animais');
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
            const animaisId = carregarAnimaisId();
            
            if (animaisId !== null && animaisId >= 0 && animaisId < data.animais.length) {
                const animais = data.animais[animaisId];
                exibirAnimaisInfo(animais);
            } else {
                console.log('Índice de animais inválido');
            }
        })
        .catch(error => {
            console.error('Houve um problema com a operação de leitura:', error);
        });
}

// Função para exibir as informações dos animais no corpo do HTML
function exibirAnimaisInfo(animais) {
    document.getElementById('animais-nome').textContent = animais.nome;
    document.getElementById('animais-especie').textContent = animais.especie;
    document.getElementById('animais-habitat').textContent = animais.habitat;
    document.getElementById('animais-dieta').textContent = animais.dieta;
    document.getElementById('animais-imagem').src = "img/" + animais.imagem;
}

// Chama a função para ler o arquivo JSON
carregarJson();
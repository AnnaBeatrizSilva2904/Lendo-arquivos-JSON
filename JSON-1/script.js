// Função para obter o índice do cliente a partir da URL
function carregarClienteId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('cliente');
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
            const clienteId = carregarClienteId();
            
            if (clienteId !== null && clienteId >= 0 && clienteId < data.clientes.length) {
                const cliente = data.clientes[clienteId];
                exibirClienteInfo(cliente);
            } else {
                console.log('Índice de cliente inválido');
            }
        })
        .catch(error => {
            console.error('Houve um problema com a operação de leitura:', error);
        });
}

// Função para exibir as informações do cliente no corpo do HTML
function exibirClienteInfo(cliente) {
    document.getElementById('cliente-nome').textContent = cliente.nome;
    document.getElementById('cliente-idade').textContent = cliente.idade;
    document.getElementById('cliente-cidade').textContent = cliente.cidade;
}

// Chama a função para ler o arquivo JSON
carregarJson();
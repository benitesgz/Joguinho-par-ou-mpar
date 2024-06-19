// Selecionar elementos do DOM
const startBtn = document.getElementById('startBtn'); // Botão de iniciar o jogo
const modal = document.getElementById('escolhaModal'); // Modal de escolha (par ou ímpar)
const resultadoElement = document.getElementById('resultado'); // Elemento para exibir o resultado
let escolhaJogador; // Variável para armazenar a escolha do jogador (par ou ímpar)
let numeroJogador; // Variável para armazenar o número digitado pelo jogador

// Adicionar evento de clique ao botão Start
startBtn.addEventListener('click', function() {
    // Esconder o botão Start e mostrar o modal de escolha e a div de jogo
    this.style.display = 'none'; // Esconde o botão Start
    document.querySelector('.jogo').style.display = 'block'; // Mostra a div de jogo
    modal.style.display = 'block'; // Mostra o modal de escolha
});

// Função para avaliar a escolha do jogador
function avaliarEscolha() {
    // Obter escolha digitada pelo jogador e limpar espaços em branco e converter para minúsculo
    escolhaJogador = document.getElementById('escolhaJogador').value.toLowerCase().trim();

    // Verificar se a escolha é válida (deve ser "par" ou "ímpar")
    if (escolhaJogador !== 'par' && escolhaJogador !== 'ímpar') {
        alert('Por favor, digite "par" ou "ímpar" na escolha.');
        return;
    }

    // Obter número digitado pelo jogador e converter para inteiro
    numeroJogador = parseInt(document.getElementById('numeroJogador').value);

    // Verificar se o número digitado é válido (deve ser um número inteiro)
    if (isNaN(numeroJogador)) {
        alert('Por favor, digite um número válido.');
        return;
    }

    // Gerar número aleatório para o computador entre 1 e 10
    const numeroMaquina = Math.floor(Math.random() * 10) + 1;

    // Exibir número do computador (opcional, para visualização durante o desenvolvimento)
    alert(`O número do computador é: ${numeroMaquina}`);

    // Calcular a soma dos números digitado pelo jogador e gerado pelo computador
    const soma = numeroJogador + numeroMaquina;

    // Determinar se a soma é par ou ímpar
    const resultado = (soma % 2 === 0) ? 'par' : 'ímpar';

    // Comparar escolha do jogador com resultado para determinar o vencedor
    if (escolhaJogador === resultado) {
        resultadoElement.textContent = `Você ganhou! A soma é ${soma}.`;
    } else {
        resultadoElement.textContent = `Você perdeu! A soma é ${soma}.`;
    }
}

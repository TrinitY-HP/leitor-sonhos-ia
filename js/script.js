// Dicionário de Interpretações
const interpretacoes = {
    "voar": "Sonhar com voar simboliza liberdade, desejo de escape ou necessidade de perspectiva.",
    "cair": "Pode indicar medo de fracasso, insegurança ou perda de controle.",
    "água": "Representa emoções profundas. Água clara: paz interior. Água turva: conflitos emocionais.",
    "dente": "Sinal de ansiedade sobre aparência ou medo de envelhecimento.",
    "perseguição": "Reflete situações estressantes na vida real ou medos não resolvidos.",
    "morte": "Simboliza transformação, fim de um ciclo ou medo do desconhecido.",
    "casamento": "Pode representar união de aspectos internos ou ansiedade sobre compromissos.",
    // Adicione mais termos aqui
};

// Função de Busca Aprimorada
function buscarInterpretacao(texto) {
    const palavras = texto.toLowerCase().split(/[\s,;.]+/); // Separa por palavras
    let resultados = [];

    for (const palavra of palavras) {
        if (interpretacoes[palavra]) {
            resultados.push(interpretacoes[palavra]);
        }
    }

    return resultados.length > 0 
        ? resultados.join("<br><br>") 
        : "Nenhuma interpretação encontrada. Tente usar palavras-chave como 'voar', 'cair', 'água', etc.";
}

// Evento do Formulário
document.getElementById('form-sonho').addEventListener('submit', (e) => {
    e.preventDefault();
    const texto = document.getElementById('descricao-sonho').value;
    const resultadoDiv = document.getElementById('resultado-ia');
    
    resultadoDiv.innerHTML = `<h3>🔍 Resultado da Análise:</h3><p>${buscarInterpretacao(texto)}</p>`;
});
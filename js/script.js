// script.js

// Função para simular a análise de sonhos com IA (versão simplificada)
async function interpretarSonhoIA(textoSonho) {
    try {
        // Substitua SUA_API_KEY pelo token do Hugging Face (configurado no Netlify)
        const response = await fetch('https://api-inference.huggingface.co/models/google/gemma-7b', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.HUGGINGFACE_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ inputs: textoSonho })
        });

        const data = await response.json();
        return data[0].generated_text || "Interpretação não disponível.";
    } catch (error) {
        console.error("Erro na API:", error);
        return "Erro ao processar o sonho. Tente novamente.";
    }
}

// Versão alternativa sem IA (análise por palavras-chave)
const interpretacoes = {
    "voar": "Sonhar com voar simboliza liberdade ou desejo de escapar de uma situação.",
    "cair": "Pode indicar medo de perder controle ou inseguranças.",
    "água": "Representa emoções profundas ou o inconsciente.",
    // Adicione mais termos aqui
};

// Processar o formulário
document.getElementById('form-sonho').addEventListener('submit', async (e) => {
    e.preventDefault();
    const texto = document.getElementById('descricao-sonho').value.toLowerCase();
    const resultadoDiv = document.getElementById('resultado-ia');

    // Opção 1: Usar IA (comente as linhas abaixo se não quiser usar API)
    // const interpretacao = await interpretarSonhoIA(texto);
    // resultadoDiv.innerHTML = `<h3>Interpretação da IA:</h3><p>${interpretacao}</p>`;

    // Opção 2: Usar palavras-chave (descomente para usar)
    for (const palavra of Object.keys(interpretacoes)) {
        if (texto.includes(palavra)) {
            resultadoDiv.innerHTML = `<h3>Interpretação:</h3><p>${interpretacoes[palavra]}</p>`;
            return;
        }
    }
    resultadoDiv.innerHTML = "Nenhuma interpretação encontrada para este sonho.";
});
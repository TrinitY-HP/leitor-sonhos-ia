// Carregar dados da biblioteca
async function carregarSonhos() {
    const response = await fetch('js/sonhos.json');
    const data = await response.json();
    return data.sonhos;
}

// Função de Busca
async function buscarSonhos() {
    const termo = document.getElementById('input-busca').value.toLowerCase();
    const resultadosDiv = document.getElementById('resultados-busca');
    const sonhos = await carregarSonhos();

    const resultados = sonhos.filter(sonho => 
        sonho.titulo.toLowerCase().includes(termo) || 
        sonho.palavrasChave.some(palavra => palavra.includes(termo))
    );

    resultadosDiv.innerHTML = resultados.length > 0 
        ? resultados.map(sonho => `
            <div class="sonho-item">
                <h3>${sonho.titulo}</h3>
                <p>📚 ${sonho.interpretacao}</p>
                <small>Palavras-chave: ${sonho.palavrasChave.join(', ')}</small>
            </div>
        `).join('')
        : "<p>Nenhum sonho encontrado. Tente termos como 'voar' ou 'água'.</p>";
}

// Busca automática ao digitar
document.getElementById('input-busca').addEventListener('input', buscarSonhos);
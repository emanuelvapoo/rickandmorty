document.addEventListener('DOMContentLoaded', function() {
    const baseUrl = 'https://rickandmortyapi.com/api/location'; 

    const carregarLocais = async () => {
        try {
            const res = await fetch(`${baseUrl}`);
            const data = await res.json();
            const dadosLimitados = data.results.slice(3, 16);  

            if (dadosLimitados) {  
                const containerLocais = document.getElementById('locations-container');
                dadosLimitados.forEach(local => {  
                    const localElement = document.createElement('div');
                    localElement.classList.add('location');
                    localElement.innerHTML = `
                        <h2>${local.name}</h2>
                        <p>Tipo: ${local.type}</p>
                        <p>Dimensão: ${local.dimension}</p>
                    `;
                    containerLocais.appendChild(localElement);
                });
            }
        } catch (error) {
            console.error('Erro ao carregar locais:', error);
        }
    };

    carregarLocais();
});
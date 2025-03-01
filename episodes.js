document.addEventListener('DOMContentLoaded', function() {
    const baseUrl = 'https://rickandmortyapi.com/api'; 

    const carregarEpisodios = async () => {
        try {
            const res = await fetch(`${baseUrl}/episode`);
            const data = await res.json();
            const dadosLimitados = data.results.slice(3, 15); 
            return { results: dadosLimitados };
        } catch (error) {
            console.error('Erro ao buscar episódios:', error);
        }
    };

    const carregarTodosComPromiseAll = async () => {
        try {
            const { results: episodios } = await carregarEpisodios();
            if (episodios) {
                const containerEpisodios = document.getElementById('episodes-container');
                episodios.map(episodio => {
                    const elementoEpisodio = document.createElement('div');
                    elementoEpisodio.classList.add('episode');
                    elementoEpisodio.innerHTML = `
                        <h2>${episodio.name}</h2>
                        <p>Data de Exibição: ${episodio.air_date}</p>
                        <p>Episódio: ${episodio.episode}</p>
                    `;
                    containerEpisodios.appendChild(elementoEpisodio);
                });
            }
        } catch (error) {
            console.error('Erro ao carregar todos os episódios:', error);
        }
    };

    carregarTodosComPromiseAll();
});
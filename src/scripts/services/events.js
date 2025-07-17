//  src/scripts/services/events.js

import { baseUrl } from '../variables.js' // Importa a baseUrl do seu arquivo de variáveis

async function getEvents(userName) {
    try {
        // Constrói a URL completa para a API de eventos do GitHub
        // Exemplo: https://api.github.com/users/SEU_USUARIO/events
        const response = await fetch(`${baseUrl}/${userName}/events`)

        // Verifica se a resposta da rede foi bem-sucedida (status 200 OK)
        if (!response.ok) {
            // Se a resposta não for OK, lança um erro com o status
            throw new Error(`Erro ao buscar eventos: ${response.status} ${response.statusText}`);
        }

        // Converte a resposta para JSON e a retorna
        return await response.json()
    } catch (error) {
        console.error("Erro na função getEvents:", error);
        // Retorna um array vazio ou um erro mais específico, dependendo de como você quer tratar
        return []; // Retorna um array vazio para que a aplicação não quebre
    }
}

export { getEvents } // Exporta a função para que ela possa ser usada em outros arquivos
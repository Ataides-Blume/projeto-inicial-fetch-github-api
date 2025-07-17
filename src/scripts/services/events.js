import { baseUrl } from '../variables.js' 

async function getEvents(userName) {
    try {
        const response = await fetch(`${baseUrl}/${userName}/events`)
        
        if (!response.ok) {
            
            throw new Error(`Erro ao buscar eventos: ${response.status} ${response.statusText}`);
        }

            return await response.json()
    } catch (error) {
        console.error("Erro na função getEvents:", error);
        
        return []; 
    }
}

export { getEvents }
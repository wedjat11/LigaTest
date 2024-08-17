// Obtener la clave API desde las variables de entorno
let KEY = process.env.SPORTMONKS_API_KEY;

console.log('Token:', KEY);

export default async function handler(req, res) {
    const leagueId = 271; 
    const seasonId = 23584; 

    try {
        const url = `https://api.sportmonks.com/v3/football/schedules/seasons/${seasonId}?api_token=${KEY}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.data) {
            const today = new Date();


            const filteredRounds = data.data[0].rounds.filter(round => {
                const roundStartDate = new Date(round.starting_at);
                
                return roundStartDate >= today; // Filtrar solo rounds que inician en el futuro
            });

            const futureFixtures = filteredRounds.flatMap(round => round.fixtures);

            res.status(200).json(futureFixtures);
        } else {
            // Si no hay rounds, retornar un arreglo vacío
            res.status(200).json(["sin data"]);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
}

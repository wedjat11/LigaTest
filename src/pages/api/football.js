
let KEY = process.env.SPORTMONKS_API_KEY

console.log('Token:', KEY);
export default async function handler(req, res) {
   

    try {;
        const response = await fetch(`https://api.sportmonks.com/v3/football/teams/countries/320?api_token=${KEY}`, {
            
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        res.status(200).json(data); // Retorna los datos al frontend
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

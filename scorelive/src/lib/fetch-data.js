

export const fetchFixtures = async => {
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0dfb1c45cd56487b0625e8264e19c2cb',
            
        }
    };
    const result = fetch (
        'https://api.soccersapi.com/v2.2/livescores/?user=olatomeewa&token=0dfb1c45cd56487b0625e8264e19c2cb&t=tomorrow	',
        options
        ) 
        .then( (response) => response.json())
        .then ((response) => {return response;
        })
        .catch( (err) => console.error (err))

        return result;
}
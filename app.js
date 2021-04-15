const Pokedex = async () => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
        const data = await res.json()
        console.log(data.results)
    }
    catch (error) {
        console.log(error)
    }

};

Pokedex();


// Fetch 

// ForEach
// fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         console.log(data.results);
//             data.results.forEach(element => {
//                 console.log(element.name)
//             });
//     })
//     .catch(err => console.log(err));




// const Nombresdepokemon = async () => {
//     try {
//         const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
//         const data = await res.json()
//         console.log(data.results)
//     }
//     catch (error) {
//         console.log(error)
//     }
// }

// Nombresdepokemon();
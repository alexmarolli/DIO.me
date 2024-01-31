const offset=0;
const limit=10;

const url =`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonList = document.getElementById('pokemonList');

fetch (url)
    .then((response)=> response.json())
    .then((jsonBody)=>jsonBody.results)
    .then((pokemons)=>{
        for (let i=0 ; i<pokemons.length; i++){
            const pokemon = pokemons[i];
            pokemonList.innerHTML+=convertPokemonToLi(pokemon)
        }
    })
    .catch((error)=> console.log(error))


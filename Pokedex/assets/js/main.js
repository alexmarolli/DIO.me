const offset=0;
const limit=10;


function convertPokemonToLi(pokemon) {
    console.log(pokemon.types)
    return `
        <li class="pokemon ${pokemon.type}"> 
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                     ${pokemon.types.map((type)=>`<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `

}

const pokemonList = document.getElementById('pokemonList');

pokeApi.getPokemons()
    .then((pokemons =[]) =>{
        pokemonList.innerHTML+= pokemons.map(convertPokemonToLi).join('');
    })





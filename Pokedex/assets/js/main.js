const loadMoreButton = document.getElementById('loadMoreButton');
const limit = 12
let offset = 0;
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

function loadPokemonsItens (offset , limit){
    pokeApi.getPokemons(offset, limit)
        .then((pokemons =[]) =>{
            const newHtml = pokemons.map(convertPokemonToLi).join('');
            // Cria um elemento temporário para adicionar os novos pokemons
            const tempContainer = document.createElement('div');
            tempContainer.innerHTML = newHtml;
            // Adiciona a classe 'new' aos novos cards
            const newCards = tempContainer.querySelectorAll('.pokemon');
            newCards.forEach(card => {
                card.classList.add('new');
                pokemonList.appendChild(card); // Adiciona os novos cards à lista
            });
        })
}
loadPokemonsItens(offset , limit);

loadMoreButton.addEventListener('click', () =>{
    offset+=limit
    loadPokemonsItens(offset ,limit)
    }
)





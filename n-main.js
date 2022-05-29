const poke_container = document.getElementById('poke_container');
const pokemons_number = 151;

const fetchPokemons = async () => {
    for (let i = 1; i <= pokemons_number; i++) {
        await getPokemon(i);
    }
};

const getPokemon = async id => {
    const url =`https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    createPokemonCard(pokemon);
}

const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');
    const {id, name, sprites, types} = pokemon;
    const type = types[0].type.name;
    const pokeInnerHTML = `<div class="img-container"> <img class="poke-sp" src="${sprites.front_default}" alt="${name}" /> </div>
    <div class="info">
    <span class="number">${id}</span>
    <h3 class="name">${name}</h3>
    <small class="type">Type: <span>${type}</span></small>
    </div>
    `;
    pokemonEl.innerHTML = pokeInnerHTML;
    poke_container.appendChild(pokemonEl);
}

fetchPokemons();


//modal
const modal = document.querySelector(".modal1");
const pokeCard = document.querySelector(".logo");
const closeButton = document.querySelector(".close-button1");

function toggleModal() {
    modal.classList.toggle("show-modal1");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

pokeCard.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
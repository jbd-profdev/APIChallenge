let input = document.querySelector('input');
const button = document.querySelector('#submit');
let pokemonTitle = document.querySelector('#pokemonTitle');
const resetButton = document.querySelector('#reset');
const card = document.querySelector('.card');
let clicked = false;
let ability = document.querySelector("#ability");
let move = document.querySelector("#move");
let type = document.querySelector("#type");
let height = document.querySelector("#height");
let weight = document.querySelector("#weight");

    function getPokemon(name){
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(function(data){
            // console.log(data.json());
            return data.json();
        })
        .then(function(data){
            card.classList.toggle('hidden');
            let pokemon = data;
            ability.textContent=`Abilitiy: ${pokemon.abilities[0].ability.name}`;
            move.textContent=`Move: ${pokemon.moves[0].move.name}`;
            type.textContent=`Type: ${pokemon.types[0].type.name}`;
            height.textContent=`Height: ${pokemon.height}`;
            weight.textContent=`Weight: ${pokemon.weight}`;
            pokemonTitle.innerText = pokemon.name;
            console.log(pokemon);
            clicked = true;
        })
        .catch(function(error) {
            console.log(error);
            card.classList.toggle('hidden');
            pokemonTitle.innerText = name;
            ability.textContent=`${name} does not appear to exist. Please check spelling and/or ensure all letters are lower case!`;
            clicked = true;
        })
    }

function reset(){
    card.classList.toggle('hidden');
    pokemonTitle.innerText = '';
    input.value = '';
    ability.textContent = '';
    move.textContent = '';
    type.textContent = '';
    height.textContent = '';
    weight.textContent = '';
    clicked = false;
    name = "";
}

button.addEventListener('click',function(e){
    e.preventDefault();
    if (input.value !== '' && clicked == false) {
        getPokemon(input.value);
    }
    
})

resetButton.addEventListener('click',reset);
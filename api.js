window.getPokeData = async function() {
    const pokemon = await getPokemon();
    const randomPokemon = shuffle(pokemon);
    const pokemonChoices = fourPokemon(randomPokemon);
    const [ firstPokemon ] = pokemonChoices;
    const number = getPokeNumber(firstPokemon);
    const image = getPokeImage(firstPokemon);
    console.log(firstPokemon);
    console.log(number);
    console.log(image);
}

async function getPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const pokemon = await response.json();
    return pokemon.results;
}

function shuffle(unshuffled) {
    const shuffled = unshuffled
    .map(value => ({ value, randomNumber: Math.random() }))
    .sort((a, b) => a.randomNumber - b.randomNumber)
    .map(({ value }) => value);
    return shuffled;

}

function fourPokemon(randomPokemon) {
    return randomPokemon.splice(0, 4);
}

function getPokeNumber({ url }) {
   const numberRegEx = /(\d+)\/$/;
   return (url.match(numberRegEx) || [])[1];
}

function getPokeImage(number){
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`;
}
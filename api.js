window.getPokeData = async function() {
    const pokemon = await getPokemon();
    const randomPokemon = shuffle(pokemon);
    const pokemonChoices = fourPokemon(randomPokemon); //Array of 4 pokemon
    const [ firstPokemon ] = pokemonChoices; //Returns first pokemon in array of four
    const number = getPokeNumber(firstPokemon); //Using Regular Expressions, returns URL's number
    const image = getPokeImage(number); //Returns image URL of pokemon using number from data retrieved from API

    return {
        pokemonChoices,
        correct: {
            image,
            name: firstPokemon.name
        }
    };
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
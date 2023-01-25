import pokemonArray from "./data/pokemon.js"
let pokemonArrayCopy = [...pokemonArray]; 


const cardContainer = document.querySelector(".card-container");
const reduceSize = document.querySelector(".inputBox-reduceSearch")

const handleInputReduce = (event) => {
    pokemonArrayCopy = [...pokemonArray]; 
    let numberToReduce = event.target.value;
    pokemonArrayCopy.length = numberToReduce
    populatePage(pokemonArrayCopy)
}

const makePokemonCard = (pokemonObject) => {
    let uppercaseName = pokemonObject.name.charAt(0).toUpperCase() + pokemonObject.name.slice(1);
    const cardHTML = 
        `
        <div class="card"> 
            <img class="card__image" src="${pokemonObject.sprite}" alt="">
        <div class="card__content">
        <h1 class="card__heading">
            ${uppercaseName}
        </h1>
        <p class="card__text">
        ${uppercaseName} (#${pokemonObject.id}) is a ${pokemonObject.types.join(" & ")} type pokemon.
        </p>
        </div>
        `
    return cardHTML;
}

const populatePage = (arrayOfPokemon) => {
    cardContainer.innerHTML = ""
    for (let index = 0; index < arrayOfPokemon.length; index++) {
        cardContainer.innerHTML += makePokemonCard(arrayOfPokemon[index]);
        
    }
}

reduceSize.addEventListener("input", handleInputReduce)

populatePage(pokemonArrayCopy);
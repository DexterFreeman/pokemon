import pokemonArray from "./data/pokemon.js"
let pokemonArrayCopy = [...pokemonArray]; 


const cardContainer = document.querySelector(".card-container");
const reduceSize = document.querySelector(".inputBox-reduceSearch")
const filterByName = document.querySelector(".inputBox-filterName")
const filterByType = document.querySelectorAll(".inputBox-filterType")


const handleInputReduce = (event) => {
    pokemonArrayCopy = [...pokemonArray]; 
    let numberToReduce = event.target.value;
    if (numberToReduce)
    pokemonArrayCopy.length = numberToReduce
    populatePage(pokemonArrayCopy)
}

const handleFilterByName = (event) => {
    let nameToFilter = event.target.value.toLowerCase();
    if (nameToFilter == ""){
        populatePage(pokemonArrayCopy)
    }
    else {
        let filteredPokemon = pokemonArrayCopy.filter((object) => object.name.toLowerCase().includes(nameToFilter))
        populatePage(filteredPokemon)
    }

}

const handleFilterByType = (type) => {
    let typesToFilter = type.toLowerCase(); 
    let filteredPokemon = pokemonArrayCopy.filter((object) => object.types.includes(typesToFilter))
    populatePage(filteredPokemon)
    
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
filterByName.addEventListener("input", handleFilterByName)
filterByType.forEach((checkbox) => {
    checkbox.addEventListener("change", function() {
       switch (checkbox.id){
        case "checkbox-ice":
            if(checkbox.checked){
                handleFilterByType("ice")
            }
            else {
                populatePage(pokemonArrayCopy)
            }
            break;  

        case "checkbox-rock":
            if (checkbox.checked){
                handleFilterByType("rock")
            }
            else {
                populatePage(pokemonArrayCopy)
        }
            break; 

        case "checkbox-fighting":
            if (checkbox.checked){
                handleFilterByType("fighting")
            }
            else {
                populatePage(pokemonArrayCopy)
            }
            break; 

        case "checkbox-grass":
            if (checkbox.checked){
                handleFilterByType("grass")
            }
            else {
                populatePage(pokemonArrayCopy)
            }
            break; 

        case "checkbox-fire":
            if (checkbox.checked){
                handleFilterByType("fire")
            }
            else {
                populatePage(pokemonArrayCopy)
            }
            break; 

        case "checkbox-water":
            if (checkbox.checked){
                handleFilterByType("water")
            }
            else {
                populatePage(pokemonArrayCopy)
            }
            break; 

        case "checkbox-flying":
            if (checkbox.checked){
                handleFilterByType("flying")
            }
            else {
                populatePage(pokemonArrayCopy)
            }
            break; 

        case "checkbox-fairy":
            if (checkbox.checked){
                handleFilterByType("fairy")
            }
            else {
                populatePage(pokemonArrayCopy)
            }
            break; 

        case "checkbox-dark":
            if (checkbox.checked){
                handleFilterByType("dark")
            }
            else {
                populatePage(pokemonArrayCopy)
            }
            break; 

        case "checkbox-bug":
            if (checkbox.checked){
                handleFilterByType("bug")
            }
            else {
                populatePage(pokemonArrayCopy)
            }
            break; 

        case "checkbox-electric":
            if (checkbox.checked){
                handleFilterByType("electric")
            }
            else {
                populatePage(pokemonArrayCopy)
            }
            break; 
        
        case "checkbox-ground":
            if (checkbox.checked){
                handleFilterByType("ground")
            }
            else {
                populatePage(pokemonArrayCopy)
            }
            break;
            
        case "checkbox-psychic":
            if (checkbox.checked){
                handleFilterByType("psychic")
            }
            else {
                populatePage(pokemonArrayCopy)
            }
            break; 

        case "checkbox-steel":
            if (checkbox.checked){
                handleFilterByType("steel")
            }
            else {
                populatePage(pokemonArrayCopy)
            }
            break; 

        case "checkbox-ghost":
            if (checkbox.checked){
                handleFilterByType("ghost")
            }
            else {
                populatePage(pokemonArrayCopy)
            }
            break; 

        case "checkbox-dragon":
            if (checkbox.checked){
                handleFilterByType("dragon")
            }
            else {
                populatePage(pokemonArrayCopy)
            }
            break; 

        case "checkbox-normal":
            if (checkbox.checked){
                handleFilterByType("normal")
            }
            else {
                populatePage(pokemonArrayCopy)
            }
            break;

        case "checkbox-poison":
            if (checkbox.checked){
                handleFilterByType("poison")
            }
            else {
                populatePage(pokemonArrayCopy)
            }
            break;
       }
    })
})
populatePage(pokemonArrayCopy);
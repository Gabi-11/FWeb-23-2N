const Tipo1 = document.querySelector("#Tipo1")
const Tipo2 = document.querySelector("#Tipo2")
const imgPoke = document.querySelector("#imgPoke")
const IDPoke = document.querySelector("#IDPoke")
const nomePoke = document.querySelector("#NomePoke")
const PesoPoke = document.querySelector("#PesoPoke")
const AlturaPoke = document.querySelector("#AlturaPoke")
const audioPoke = document.querySelector("#audioPoke")
const btnA = document.querySelector("#btnA")
const btnB = document.querySelector("#btnB")
const formNome = document.querySelector("#formNome")
const backGroundSound = document.querySelector("#backGroundSound")
const input = document.querySelector("#inputNome")


let IDPokemon = 1

const fetchpokemon = async (pokemon) => {
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await APIresponse.json()
    return data
}

const showPokemon = async (pokemon) => {
    const infoPokemon = await fetchpokemon(pokemon)
    IDPokemon = infoPokemon.id
    IDPoke.innerHTML = infoPokemon.id
    nomePoke.innerHTML = infoPokemon.name
    imgPoke.src = infoPokemon.sprites.front_default
    Tipo1.innerHTML = infoPokemon.types[0].type.name
    Tipo2.innerHTML = ''
    Tipo2.innerHTML = infoPokemon.types[1].type.name
    PesoPoke.innerHTML = infoPokemon.weight
    AlturaPoke.innerHTML = infoPokemon.height
    audioPoke.src = infoPokemon.cries.latest
    
}
showPokemon(IDPokemon)
audioPoke.play()

formNome.addEventListener("submit", (event) => {
    event.preventDefault();
    showPokemon(input.value.toLowerCase())
    
    
})

btnA.addEventListener("click", (event) => {
    event.preventDefault()
    IDPokemon-=1;
        showPokemon(IDPokemon)
})

btnB.addEventListener("click", (event) => {
    IDPokemon+=1
        showPokemon(IDPokemon)
    
})
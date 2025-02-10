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
    IDPoke.innerHTML = `ID: ${infoPokemon.id}`
    nomePoke.innerHTML = infoPokemon.name.charAt(0).toUpperCase() + infoPokemon.name.slice(1) // Capitaliza a primeira letra
    imgPoke.src = infoPokemon.sprites.front_default

    // Exibindo Tipos
    Tipo1.innerHTML = infoPokemon.types[0].type.name.charAt(0).toUpperCase() + infoPokemon.types[0].type.name.slice(1) // Capitaliza o tipo
    if (infoPokemon.types.length > 1) {
        Tipo2.innerHTML = infoPokemon.types[1].type.name.charAt(0).toUpperCase() + infoPokemon.types[1].type.name.slice(1) // Capitaliza o tipo
    } else {
        Tipo2.innerHTML = '' // Deixa vazio se não houver o segundo tipo
    }

    // Exibindo Peso e Altura
    PesoPoke.innerHTML = `Peso: ${infoPokemon.weight / 10} kg` // Exibe peso com a unidade
    AlturaPoke.innerHTML = `Altura: ${infoPokemon.height / 10} m` // Exibe altura com a unidade

    // Atualizando áudio
    audioPoke.src = infoPokemon.sprites.front_shiny

    // Tocar áudio
    audioPoke.play()
}

showPokemon(IDPokemon)

formNome.addEventListener("submit", (event) => {
    event.preventDefault();
    showPokemon(input.value.toLowerCase())
})

btnA.addEventListener("click", (event) => {
    event.preventDefault()
    IDPokemon -= 1;
    showPokemon(IDPokemon)
})

btnB.addEventListener("click", (event) => {
    IDPokemon += 1
    showPokemon(IDPokemon)
})

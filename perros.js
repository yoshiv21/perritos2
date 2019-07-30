//DAME 3 PERRITOS  //DAME 5 PERRITOS

// 1. VARIABLES
const perritosArea = document.getElementById("perritos")
const perritosBreedArea = document.getElementById("perritosBreed")
const botonPerritos = document.getElementById("dameperritos")
const botonTresPerritos = document.getElementById("tresPerritos")
const botonCincoPerritos = document.getElementById("cincoPerritos")

// 2. FUNCIONES
const extraerPerritos = () => {
    fetch("https://dog.ceo/api/breeds/image/random/3").then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
        perritosArea.innerHTML = `
        <p>Primer Perro</p>
        <img src="${data.message[0]}" />
        <p>Segundo Perro</p>
        <img src="${data.message[1]}" />
        <p>Tercer Perro</p>
        <img src="${data.message[2]}" />
    `
    })
}   

const extraerPerritosRaza = () => {
    fetch(" https://dog.ceo/api/breed/hound/images ").then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
        perritosArea.innerHTML = `
        <p>Primer Perrito<p/>
        <img src="${data.message[0]}" />
        <p>Segundo Perrito<p/>
        <img src="${data.message[1]}" />
        <p>Tercer Perrito<p/>
        <img src="${data.message[2]}" />

        `
    })
}

// 3. EVENTOS
botonPerritos.addEventListener("click", () => {
    extraerPerritos()
})


botonTresPerritos.addEventListener("click", () => {
    extraerPerritosRaza()

})
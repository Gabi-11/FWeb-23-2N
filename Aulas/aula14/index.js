const titulo1 = document.querySelector("#Objeto1")
const titulo2 = document.querySelector("#Objeto2")
const titulo3 = document.querySelector("#Objeto3")
const titulo4 = document.querySelector("#Objeto4")
const titulo5 = document.querySelector("#Objeto5")

fetch("./index.json")
.then(Response => Response.json())
.then(mochila => {

    titulo1.innerHTML = mochila.objeto1;
    titulo1.innerHTML = mochila.objeto2;
    titulo1.innerHTML = mochila.objeto3;
    titulo1.innerHTML = mochila.objeto4;
    titulo1.innerHTML = mochila.objeto5;

}
)
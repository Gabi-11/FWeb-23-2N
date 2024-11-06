let banners = ["./img/01bulbasaur.png", "./img/04Charmander.png"]
let cont = 0;

function trocaBanner(){
    cont = (cont+1)%2;
    document.querySelector("#imgbanner").src = banners[cont]
}

setInterval(trocaBanner, 1000);


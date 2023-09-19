const url = "https://raw.githubusercontent.com/oicrruf/g15-computer-science/develop/ejercicios/pokedex-registro/json/pokemon.json";
const busqueda = async () =>{
    let inputtext = document.getElementById("filtro").value;
    const response = await fetch(url);
    const result = await response.json();
    let busquedaPoke = result.filter(pkmon=>pkmon.name.toLowerCase().includes(inputtext.toLowerCase()))    
  //  dibujar(result);
    dibujar(busquedaPoke);
}
busqueda();
let text =document.getElementById("filtro");
text.addEventListener("keyup",busqueda);
/*function filtroPokemon(nombre,pokemon){
    let resultado=pokemon.filter(function(pokemon){
        return pokemon.name=nombre;
    })
    return resultado;
}*/
const dibujar = (response) => {
    document.querySelector("#resultado").innerHTML="";
    for(let i in response){
        let div = document.createElement("div");
        div.classList.add("column","is-3");
        div.setAttribute("data-id",response[i].number)
        div.innerHTML+=`
            <div class="card">
                <div class="card-image">
                <figure class="image is-square" onclick="">
                    <img src="${response[i].ThumbnailImage}" alt="${response[i].ThumbnailImage}" onclick="">
                </figure>
                </div>
                <div class="card-content" >
                    <div class="content">
                    <p class="title is-4">${response[i].name}</p>
                    <p class="subtitle is-6">Numero: ${response[i].number}</p>
                    <p class="subtitle is-6">Tipo: ${response[i].type}</p>
                </div>
                </div>
            </div>`
        div.addEventListener("click",function(){
            alert("-Habilidad:"+response[i].abilities+" -Altura:"+response[i].height+" -Peso:"+response[i].weight+" -Debilidades:"+response[i].weakness)
        })
        document.querySelector("#resultado").appendChild(div);
    }
}
/*
function buscar(nombre,pokemones){
    let respuesta3 = pokemones.filter(function (pokemon){
        return pokemon.name.toLowerCase().includes(nombre.toLowerCase())
    })
    return respuesta3
}

let boton = document.querySelector("#busqueda");
boton.addEventListener("click", busqueda);
//let input =document.querySelector("#buscar)
*/
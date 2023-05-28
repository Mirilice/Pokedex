const pokemonList = document.getElementById('pokemonList')
const carrega = document.getElementById('carrega')
let limit = 8,offset = 0;




function loadPokemonItemns(offset,limit){
    function convertPokemonToHtml(pokemon){
    return `
    <div class="content ${pokemon.color}">
        <p class="numero ">#${pokemon.number}</p>
        <div class="divPoke">
            <div class="poderes">
                <p class="nome">${pokemon.name}</p>
           
               ${pokemon.types.map((type)=>`<p class="poder">${type}</p>`).join('')}
            </div>
            <img src="${pokemon.img}" alt="${pokemon.name}" />
        </div>
    </div>
    `
}
    pokeApi.getPokemons(offset,limit).then((pokemons = []) =>{
        const newHtml = pokemons.map(convertPokemonToHtml).join('')
        pokemonList.innerHTML += newHtml
    })
}
loadPokemonItemns(offset,limit)

carrega.addEventListener('click',()=>{
    offset+=limit
    loadPokemonItemns(offset,limit)
})

  
   
/*try{

} catch(error){

}finally{

}*/

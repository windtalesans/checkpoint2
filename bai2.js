const item="pokedeck"
const APIkey ="pokemon/ditto"
const pokename=document.querySelector(".NAME")
const poketype=document.querySelector(".TYPE")
const pokeheight=document.querySelector(".HEIGHT")
const pokeweight=document.querySelector(".WEIGHT")
const pokebiq=document.querySelector(".BIQ")
searchInput.addEventListener("change",async(event)=>{
 try{
    const result = await fetch(
        'https://pokeapi.co/api/v2/'
    )
    const Data = await result.json(); 
    pokename.innerHTML=Data.NAME
    poketype.innerHTML=Data.TYPE
    pokeheight.innerHTML=Data.HEIGHT
    pokeweight.innerHTML=Data.WEIGHT
    pokebiq.innerHTML=Data.BIQ
    console.log(Data)
  }catch(error){
    console.error("a error have been found:",error)
  }
})
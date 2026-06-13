let idAtual = 1
let id = 1
const urlBase = `https://rickandmortyapi.com/api/character/`
const urlname = `?name=`

const procuraPerson = document.getElementById("procura_id")

 const imgPerson = document.querySelector("img-person")
 const namePerson = document.querySelector("person-name")
 const especiePerson = document.querySelector("person-especie")
 const locationPerson = document.querySelector("person-location")
 const generPerson = document.querySelector("person-gener")
 const personType = document.querySelector("person-type")

   
 async function () {

 }



 async function rickapi(person) {
    if (isNaN(person))
    fetch ${urlBase}${urlname}${id}
    response.json
    
    }else{
     fetch ${urlBase}${id}
     await = await response.json
    }






 async function filmeapi(person) {
    if (isNaN(person)){
     fetch ${urlBase}${urlname}${procuraPerson}

    }else{
    fetch ${urlBase}${id}
    await = await

    }


    const url = `${urlBase}${id}`
    const data = await (await fetch(url)).json
}

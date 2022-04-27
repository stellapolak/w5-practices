/*const firstPerson={
    name: "Peter",
    sex: "male",

}

const secondPerson = {
    name: "Sarah",
    sex: "female"
}

function detectSex(person){
    console.log(person)
    if (person.sex === "female"){
        return "This person is a female"
    }else{
        return 
    }
}*/


/*
const beerSectionComponent = function (inner, id){
    return `
        <section id=${cards}>${inner}</section>    
    `
}*/

const beerCardComponent = function (name, company, type){
    console.log(company)
    return `
        <div class="cards">
            <div class="beerName">${name}</div>   
            <div class="beerCompany">${company}</div>> 
            <div class="beerType">${type}</div>
        </div>    
    `
}



//ha ez nem egy függvény lenne, hanem sima string, akkor nem lehetne beletenni változó értékeket paraméterként. A függvény paramétereint (name, company, type) bármilyen szó megadható, csak azt következetesen kell utána használni.


const beerTitleComponent = `
<h1>Beers</h1>`;

const loadEvent = function (){
    const rootElement = document.getElementById("root");
    rootElement.insertAdjacentHTML("beforeend", beerTitleComponent) //ez egy metótdus, ami már eleve meg volt írva, mi csak használjuk, 2 stringet kér (position, egy olyan string, amit html kóddá tud alakítani) / a before end,
    console.log(beers.cards)
    console.log(beers.logo) 

    //a tömbnél ha van adat akkor forof és elnevezni, ha nincs, akkor fort kell használni. A beer ebben az esetben annak a töbnek a neve, ami a beer.cards-on belül van, és azt adjuk vissza és most hoztuk létre-->

    for (const beer of beers.cards) {
        console.log(beer)
      //  console.log(beers.cards[0].title) -->ehelyett hoztuk létre a a beer iterátort(ez az elnevezés neve)

        rootElement.insertAdjacentHTML("beforeend", beerCardComponent(beer.title, beer.sub))
    }
}

// console.log(company) ilyen nincs!




// a js rögtön létrehoz egy window objektumot, amit lát a böngésző. Minden egyes scriptben benne kell lennie a ....-nak

window.addEventListener("load", loadEvent);



// console.log(window)


console.log(beers);

// 
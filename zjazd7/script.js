/*
var obj = { x: 60 }

function returnX() {
    return this.x;
}

/*
let newReturnX = returnX;
console.log(newReturnX());
let boundReturnX = newReturnX.bind(obj);
console.log(boundReturnX());




function showAuto (kolor, marka) {
    console.log(this);
    console.log(arguments);

}

showAuto();

let auto = {
    kolor : 'czerwony',
    marka: 'mazda'
}

let shower = showAuto.apply(auto);
let wystawa = showAuto.bind();
console.log(wystawa);

*/




function Kociarnia(imie, kolor, dzwiek) {
    return {
        imie: imie,
        kolor: kolor,
        rasa: "Syberyjski",
        dzwiek : dzwiek,
        odglos: function () { console.log(this.dzwiek); }
    }
}

let Garfield = Kociarnia("Garfield", "Rudy", "Miauu");
let GarfieldMaly = Kociarnia("GarfieldMaly", "Czerwony", "Mial Mial");
let Tom = Object.create(Garfield);

console.log(Garfield);
console.log(GarfieldMaly);
Tom.odglos();
console.log(Tom);

console.log(Tom.__proto__.isPrototypeOf.name);




function Psiarnia (imie, kolor) {
    this.imie = imie;
    this.kolor = kolor;
    this.rasa = "Kundel";
}

Psiarnia.prototype.odglos = function (dzwiek) {
    console.log(this.dzwiek);
}

let Azor = new Psiarnia('Azor', 'Bury');
console.log(Azor);
Azor.odglos("Whoof");



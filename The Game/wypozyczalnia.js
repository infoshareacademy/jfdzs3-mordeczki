/// plik stworzony do nauki !!! 
class Rekaw{
    constructor(color,dlugosc)
    {
        this.color = color;
        this.dlugosc = dlugosc;
    }
}
class Sukienka{
    constructor(color, dlugosc)
    {
        this.color = color;
        this.dlugosc = dlugosc
        this.rekaw = new Rekaw(color, 58);

    }
    zaloz(){
        console.log("założyłem");
    }
}
class Spodnie{
    constructor(color, dlugosc, material, zamek){
        this.color = color;
        this.dlugosc = dlugosc;
        this.material = material;
        this.zamek = zamek;
    } 
}
class Klient{
    constructor(name, budzet){
        this.name = name;
        this.budzet = budzet;
        this.tors = null;
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let princeska = new Sukienka("czerwona", 90);
let komertowa = new Sukienka("czarna", 100);
let cygaretki = new Spodnie("braz", 90, "welna", "zip")
////////////////////////////////////////////////////////////
let klient1 = new Klient("grzegorz",1000);

princeska.zaloz();


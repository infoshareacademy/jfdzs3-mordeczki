/*
let a = 4;
let b = 4;

if (a > b) {
    console.log('A jest wieksze od B');
}
else if (a < b) {
    console.log('B jest wieksze od A');
}
else {
    console.log('B jest rowne A');
}

console.log(a > b ? 'A jest wieksze od B' : 'B jest wieksze od A');
console.log(`Zmienna a wynosi ${a}, natomiast zmienna b wynosi ${b}`);

let day='Poniedziałek';

switch (day) {
    case 'Poniedziałek' : console.log('Smutno bo poniedziałek'); break;
    case 'Wtorek' : console.log('Fajnie że wtorek'); break; 
    case 'Sobota' : console.log('Super że sobota'); break;     
    default : console.log('Co dzisiaj jest za dzień?'); break;  
}
*/

/*
let names = ['Ania','Ewelina','Karina','Elina'];
    names.push('Andromeda');
    names.push('Natasha');
let startIndex = names.indexOf('Ewelina')+2;
let newNames=names.slice(startIndex,names.indexOf('Natasha'));
    newNames.unshift('Shepard');
let wynik = names[3]==newNames[1];

console.log(`Wynik zadania: ${wynik}`);
*/
/*

let number=[];
   for (let i=1 ; i<=35 ; i++) {
     number.push(i);
   }

   for (let i=1 ; i<=number.length ; i++) {
    if (i<=15) {
        console.log(`Interacja ${i}`);
    }
    if (i<=25) {   
        continue; 
    } 
    if (i>25 && i<=30) {
        let modulo = i % 2;
        console.log(`Reszta z dzielenia: ${modulo}`);      
   }
    else if (i==31) {
        break;      
    }    
  }
  

 const min = 3;
 const max = 7;
 
 const result =  Math.floor(Math.random() * (max-min+1) + min);
console.log(result)
*/

/*
const text = "marcin";
console.log( text.charAt(0).toUpperCase() + text.slice(1) ); //Marcin





function Rand() {
    return Number(Math.random()*100).toPrecision(4);   

}


let hero = {
    strength : +Rand(),
    knowledge : Rand(),
    stamina : +Rand()
}



let enemy = {
    strength : +Rand(),
    knowledge : Rand(),
    stamina : +Rand(),
    loot : ['Sword','Gold','Ring']
}


    console.log(`Hero: ${hero.strength} Enemy ${enemy.strength}`);

    if (hero.strength > enemy.strength) {
        for (let i=0; i<enemy.loot.length; i++) {
            if (enemy.loot[i]==='Gold') {console.log('GOLD!!');}
        }
    }
    else {
        console.warn('WASTED: Game over!');
    }





let s1 = new String('STREIanger THinevgsen');
let s2 = new String('STREIanger THinevgsen');
let s3 = s2;

if (s1!==s2) {
    console.log('Poor me');
}

if (s2 === s3) {
    let wynik = s1.slice(3,5);
        wynik += s1.slice(15,17);
        wynik += s1.slice(19,21);   
    console.log(`I am ${wynik}`);
}




let groundZerg = {
    power : 1,
    health : 10,
    armour : 10,
    range : 10
}

let flyingZerg = {
    power : 10,
    health : 10,
    armour : 10,
    range : 10
}

function evolutionPool (zerg,  evolutionMetod) {
    evolutionMetod(zerg);   
}

function Ground (zerg) {
    if (zerg.power !== 1) {
    return;
    }
    zerg.armour+=10;
    zerg.health+=10;
}

function Flying (zerg) {
    if (zerg.power <= 1) {
    return;
    }
    zerg.power+=5;
    zerg.range+=5;
}

evolutionPool(groundZerg, Ground);
evolutionPool(flyingZerg, Flying);

/*
evolutionPool(groundZerg, Flying);
evolutionPool(flyingZerg, Ground);


console.log(groundZerg);
console.log(flyingZerg);




let data = new Date();
console.log (data.getHours());

*/




/*
let shopingList = ['Mleko','Maslo','Maka','Jajka','Mieso'];
    
    shopingList.pop();
    console.log(`Lista zakupow ma ${shopingList.length}: ${shopingList}`);

    shopingList.unshift('Pomidor','Ogorek');
    console.log(`Lista zakupow ma ${shopingList.length}: ${shopingList}`);

    shopingList.push('Salata');
    console.log(`Lista zakupow ma ${shopingList.length}: ${shopingList}`);

    shopingList.shift();
    console.log(`Lista zakupow ma ${shopingList.length}: ${shopingList}`);

 */


let names = ['Arek','Darek','Czarek','Mariusz','Marek','Wiesław','Aneta','Stanisława'];
let newNames = names.map(function(name) {
    if (name.slice(-1) == 'a') {    
    return name + ' Kowalska';
    }
    else {
        return name + ' Kowalski';      
    }
});
//console.log(`Tablica ${newNames}`);

/*
newNames.forEach(function(name) {
    if (name.includes('rek')) {
    console.log(name);
    }
  });

*/

let newestNames = newNames.map(function(name) {
    return name.split(' ')[0];
});
    newestNames.filter(first => first.length <2);
    console.log(newestNames);    
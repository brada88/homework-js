/*Zadatak 1. Napisi program koji ovisno o varijabli time mogucih vrijednosti 
ZORA, JUTRO, POSLIJEPODNE, POPODNE, PRIJEPODNE, PREDVECER, NOC ispisuje Dobro jutro, Dobar dan ili Dobra vecer. 
Unos time varijable neka bude preko konzole, te ako korisnik nije unio ni jednu od mogucnosti neka ispis bude: 
Koje je to doba dana? Program napisi uz pomoc if-a i switch case-a.*/

var time;
if (time === "ZORA" || time === "JUTRO") {
    console.log("Dobro jutro"); 
} else if (time === "PRIJEPODNE" || time === "POPODNE" || time === "POSLIJEPODNE") {
    console.log("Dobar dan"); 
} else if (time === "PREDVECER" || time === "NOC") {
    console.log("Dobra vecer");
}


switch (time) {
    case "ZORA":
    case "JUTRO":    
    console.log("Dobro jutro");
        break;

    case "PRIJEPODNE":
    case "POPODNE":
    case "POSLIJEPODNE":
    console.log("Dobar dan");
        break;

    case "PREDVECER":
    case "NOC":
    console.log("Dobra vecer");
        break;
    default: null
        console.log("Koje je to doba dana?");
}



/*Zadatak 2. 
Napisi program koji omogucava unos proizvoljnog broja godina preko konzole, te 
napisi ternarni izraz koji bira vrijednosti MALOLJETAN i PUNOLJETAN. 
Potom za MALOLJETAN ispisi "Korisnik je maloljentan", a za punoljetan "Korisnik je punoljetan". 
Ako korisnik nije unio broj napisi "Pogresan unos!".*/ 

var godine;

var godine = ( godine>18 ? MALOLJETAN : PUNOLJETAN );

switch (godine) {
    case "MALOLJETAN":
    console.log("Korisnik je maloljetan");
        break;
    case "PUNOLJETAN":
    console.log("Korisnik je punoljetan");
        break;
    default: null
    console.log("Pogresan unos!");
}



/*Zadatak 3.
Napisi program u kojem korisnik unosi broj preko konzole. Ako korisnik nije unio broj, 
program racuna da je korisnik unio broj 7. Program zatim ispisuje "Tvoj sretni broj je ___" i potom 
preko Math.random funkcije izvlaci cijeli broj od 0 do 9. Ukoliko je izvuceni broj identican korisnikovom 
sretnom broju ispisi "Jackpot!", a u suprotnom "Vise srece drugi put!". 
Napomena: Ukoliko ne znate koristiti Math.random pokusajte guglati kako se koristi.*/

var broj;
if (broj === null) {
    return 7;
    console.log("Tvoj sretni broj je 7");
} 
var Math.floor(Math.random() * 10);

if (broj === Math.floor(Math.random() * 10)) {
    console.log("Jackpot!");
} else {
    console.log("Vise srece drugi put!");
}



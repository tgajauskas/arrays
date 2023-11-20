// Pirma užduotis

// Sukurkite naują array su žemiau pateiktais personažų pavadinimais.
// Naudodami 'console.log()' atspausdinkite pirmą ir paskutinį elementą.
// Naudodami prompt("Įveskite skaičių nuo 1 iki 6"), atspausdinkite personažą, kurio eilės numeris buvo įvestas

// Jon Snow
// Cersei Lannister
// Daenerys Targaryen
// Theon Greyjoy
// Tyrion Lannister
// Arya Stark
// Ketvirta užduotis

//                  0               1                   2                   3                   4               5
var personazai = ["Jon Snow", "Cersei Lannister", "Daenerys Targaryen", "Theon Greyjoy", "Tyrion Lannister", "Arya Stark"]

console.log("Pirmas personažas: " + personazai[0])
console.log("Paskutinis personažas: " + personazai[personazai.length - 1])

var numeris = prompt("Įveskite skaičių nuo 1 iki 6.")
if (numeris >=1 && numeris <=6) {
    console.log("Pasirinkote personažą:", personazai[numeris - 1])
} else {
    prompt("Įrašėte netinkamą skaičių. Įveskite skaičių nuo 1 iki 6.")
}


// Antra užduotis
// Išsaugokite įvestus skaičius į skaiciuMasyvas
// Atspausdinkite tokį rezultatą:

// Skaičių suma: x
// Skaičių vidurkis: x
// Didžiausias skaičius: x
// Mažiausias skaičius: x
// P.S.
// Kad surasti sumą - panaudokite for / while ciklą. To pačio ciklo viduje taip pat galite ieškoti didžiausio/mažiausio skaičiaus ir jį saugoti.

var skaiciuMasyvas = [10,20,30,40,50,60,70,80,90,100]
var suma = 0

for (var i = 0; i < skaiciuMasyvas.length; i++) {
    suma += skaiciuMasyvas[i]
}
console.log("Suma: " + suma)

var vidurkis = suma / skaiciuMasyvas.length;
console.log("Vidurkis: " + vidurkis)


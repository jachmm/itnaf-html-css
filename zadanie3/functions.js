// Zadanie 1
function isOdd(x) {
    if (x%2 != 0) return true;
    return false;
}

const isEven = (x) => {
    if (x%2 == 0) return true;
    return false;
}

var HTML = "isOdd: 2,3: "
HTML += isOdd(2) + ", "
HTML += isOdd(3) + "<br />"
HTML += "isEven: 2,3: "
HTML += isEven(2) + ", "
HTML += isEven(3) + "<br />"

document.getElementById("Wynik").innerHTML = HTML;

// Zadanie 2
var licznik = 0
function incrementation() {
    licznik++;
    document.getElementById("zad2").innerHTML = licznik;
}

var red = 0;
function switchColor() {
    if (red == 0) {
        red = 1;
        document.querySelector("#zad2").style.color = "red"
    }
    else {
        red = 0;
        document.querySelector("#zad2").style.color = "black"
    }
}

// Zadanie 3
function range(a, b){
    HTML = []
    for (i = a; i <= b; i++) {
        HTML.push(i);
    }
    document.getElementById("zad3").innerHTML += "[" + HTML +"]";
}
range(1,4);

// Zadanie 4
function sum(tab) {
    let sum = 0
    tab.forEach(element => {
        sum += element
    });
    document.getElementById("zad4").innerHTML += "Suma: " + sum;
}
sum([1,2,3,4]);

// Zadanie 5
function fibonacci(n) {
    let tab = [];
    let a = 0, b = 1;
    for (var i = 0; i < n; i++) {
        tab.push(a);
        let temp = a;
        a = b;
        b = temp + b;
    }
    return tab;
}

document.getElementById("zad5").innerHTML += "Fibonacci: " + fibonacci(9);

// Zadanie 6
function palindrom(str) {
    let rev = str.split("").reverse().join("");
    if (str.toUpperCase() === rev.toUpperCase()) return true;
    else return false;
}
document.getElementById("zad6").innerHTML += "palindrom(kajak): " + palindrom("kajak") + "<br />";
document.getElementById("zad6").innerHTML += "palindrom(kaj): " + palindrom("kaj");

// Zadanie 7
function isHappyNumber(a) {
    let previous = new Set();
    let result = false;
    while (a != 1) {
        let numbers = a.toString().split('');
        let sum = 0;
        numbers.forEach(number => {
            sum += parseInt(number) * parseInt(number);
        })
        if (sum == 1) {
            result = true;
        }
        if (previous.has(sum)) {
            break;
        }
        a = sum;
        previous.add(a);
    }
    return result;
}

document.getElementById("zad7").innerHTML += "isHappyNumber(19): " + isHappyNumber(19);
document.getElementById("zad7").innerHTML += "<br />isHappyNumber(20): " + isHappyNumber(20);
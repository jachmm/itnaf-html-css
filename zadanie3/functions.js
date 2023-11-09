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
let righe = 10;
let colonne = 10;

function DisegnaTabella() {
    let div1 = document.getElementById('div1');
    let tabella = document.createElement("table");

    var i = 1;
    for (var r = 0; r < righe; r++) {
        let row = document.createElement("tr");
        for (var c = 0; c < colonne; c++, i++) {
            let cell = document.createElement("td");
            let cellText = document.createTextNode(i);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tabella.appendChild(row);
    }

    div1.appendChild(tabella);
}

function estraiNumeroCasuale() {
    return Math.floor(Math.random() * (righe * colonne)) + 1;
}

function evidenziaCella(numero) {
    let cella = document.querySelector(`td:contains("${numero}")`);
    cella.style.backgroundColor = "red";
    cella.classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", function () {
    DisegnaTabella();

    let button = document.querySelector("button");
    button.addEventListener("click", function () {
        let numeroEstratto = estraiNumeroCasuale();
        evidenziaCella(numeroEstratto);
    });
});

function evidenziaCella(numero) {
    let celle = document.querySelectorAll("td");

    for (let i = 0; i < celle.length; i++) {
        if (celle[i].textContent == numero) {
            celle[i].style.backgroundColor = "red";
            celle[i].classList.add("hidden");
            break; 
        }
    }
}

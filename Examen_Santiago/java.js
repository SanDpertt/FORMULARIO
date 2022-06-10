const form = document.getElementById("formulario");

form.addEventListener("submit", function(event) {
    event.preventDefault();

})

function insertRowtable() {

    let Table = document.getElementById("Cuadro");
    let newLineRow = Table.insertRow(-1);
    let newCelda = newLineRow.insertCell(0);

    var resultado;
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = (document.getElementById("n2").value);
    var n3 = parseInt(document.getElementById("n3").value);
    var n4 = parseInt(document.getElementById("n4").value);

    if (n4 >= 20000) {
        resultado = ((n4) - (n4 * 0.2))
    } else {
        resultado = n4
    }

    newCelda.textContent = n1;
    let newCelda2 = newLineRow.insertCell(1);
    newCelda2.textContent = n2;
    let newCelda3 = newLineRow.insertCell(2);
    newCelda3.textContent = n3;
    let newCelda4 = newLineRow.insertCell(3);
    newCelda4.textContent = resultado;

}
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
    let newCelda5 = newLineRow.insertCell(4);

    const modal = document.querySelector(".modalDialog");
    const boton = document.createElement("button");
    const boton2 = document.createElement("button");
    const pmodal = document.getElementById("pr");
    boton.innerText = "Mostrar";
    boton2.innerText = "Editar";
    boton.onclick = function() {
        modal.classList.add("modalDialog--mostrar");
        pmodal.innerText = "El codigo es: " + n1 + "\n" + "El nombre es: " + n2 + "\n" + "La cantiadad es: " + n3 + "\n" + "El precio es: " + resultado;
    }

    const cerrarModal = document.querySelector(".close");
    cerrarModal.addEventListener("click", function() {

        modal.classList.remove("modalDialog--mostrar");
    })

    newCelda5.appendChild(boton);
    let newCelda6 = newLineRow.insertCell(5);
    newCelda6.appendChild(boton2);

}
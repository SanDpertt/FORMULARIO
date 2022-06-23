// Para que la pagina no se recargue
const form = document.getElementById("formulario");

form.addEventListener("submit", function(event) {
    event.preventDefault();

})

// Para que la pagina no se recargue
const form2 = document.getElementById("editar");
form2.addEventListener("submit", function(event2) {
    event2.preventDefault();

})

//Funcione del formulario
function insertRowtable() {

    let Table = document.getElementById("Cuadro");
    let newLineRow = Table.insertRow(-1);
    let newCelda = newLineRow.insertCell(0);

    // Para que pueda mostrarse se tiene que pasar a entero o a texto depende a lo que se busca
    var resultado;
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = (document.getElementById("n2").value);
    var n3 = parseInt(document.getElementById("n3").value);
    var n4 = parseInt(document.getElementById("n4").value);

    // Operaciones verdadero o falso
    if (n4 >= 20000) {
        resultado = ((n4) - (n4 * 0.2))
    } else {
        resultado = n4
    }

    // Para que se creen celdas apartir del formulario
    newCelda.textContent = n1;
    let newCelda2 = newLineRow.insertCell(1);
    newCelda2.textContent = n2;
    let newCelda3 = newLineRow.insertCell(2);
    newCelda3.textContent = n3;
    let newCelda4 = newLineRow.insertCell(3);
    newCelda4.textContent = resultado;
    let newCelda5 = newLineRow.insertCell(4);

    // Creamos botones y le dimos funcionalidad
    const modal = document.querySelector(".modalDialog");
    const modal2 = document.querySelector(".modalDialog2");
    const boton = document.createElement("button");
    const boton2 = document.createElement("button");
    const boton3 = document.createElement("button");
    const pmodal = document.getElementById("pr");
    const Actualiza = document.getElementById("Actualizar");
    boton.innerText = "Mostrar";
    boton2.innerText = "Eliminar";
    boton3.innerText = "Actualizar";

    //El modal
    boton.onclick = function() {
        modal.classList.add("modalDialog--mostrar");
        pmodal.innerText = "El codigo es: " + n1 + "\n" + "El nombre es: " + n2 + "\n" + "La cantiadad es: " + n3 + "\n" + "El precio es: " + resultado;
    }

    // El modal cierra
    const cerrarModal = document.querySelector(".close");
    cerrarModal.addEventListener("click", function() {

        modal.classList.remove("modalDialog--mostrar");
    })

    //El modal para editar
    boton3.onclick = function() {
        modal2.classList.add("modalDialog2--mostrar2");
    }

    // El modal para editar cierra
    const cModal = document.querySelector(".close2");
    cModal.addEventListener("click", function() {

        modal2.classList.remove("modalDialog2--mostrar2");
    })

    newCelda5.appendChild(boton);
    let newCelda6 = newLineRow.insertCell(5);
    newCelda6.appendChild(boton3)
    let newCelda7 = newLineRow.insertCell(6);
    newCelda7.appendChild(boton2)

    //Borrar fila

    boton2.onclick = function(e) {
        const fila = e.target.parentNode.parentNode
        fila.remove()
    }

    Actualiza.onclick = function(a) {
        const fila = a.target.parentNode.parentNode
        console.log(fila)
        alert("Se actualizo?")

    }

}
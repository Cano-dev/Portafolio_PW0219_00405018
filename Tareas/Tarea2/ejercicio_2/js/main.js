let diario = [];
let eventos = [];

// Evento de click en el boton de agregar evento
document.getElementById("btnEvento").onclick = agregarEvento;
// Funcion para agregar eventos de un dia
function agregarEvento(){
    let unEvento = document.getElementById("evento");
    eventos.push(unEvento.value);
    unEvento.value = "";
}

// Evento de click en el boton de submit
document.getElementById("btnSubmit").onclick = agregarDia;
// Funcion para agregar el dia al journal
function agregarDia() {
    let accidente;
    let radioBTNS = document.getElementsByName('accident');

    for (let i = 0; i < radioBTNS.length; i++) {
        if (radioBTNS[i].checked) {
            accidente = radioBTNS[i].value;
        }
    } 

    diario.push({eventos, accidente});
    agregarFila(eventos, accidente);
    eventos = [];
}

// Funciona para agregar una fila(dia) en el HTML
let agregarFila = (evento, accidente) => {
    let tabla = document.getElementById('bitacoraBody');
    let fila = document.createElement("tr");

    fila.className = "dia_insertado";
    fila.innerHTML = `
          <td class="bitacora-event"> ${evento} </td>
          <td class="bitacora-accedent"> ${accidente} </td>
      `;
  
    tabla.appendChild(fila);
};

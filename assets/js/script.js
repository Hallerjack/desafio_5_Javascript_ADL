/* Inicializando Datos */
const listaDeTareas = document.querySelector("tbody");
const btnAgregar = document.querySelector("#agregar-tarea");
const input = document.querySelector("#nueva-tarea");
const cuentaTareas = document.getElementById("cuenta-tareas");

/* Inicializando Arreglo: 4 objetos por defecto creados */
const tareas = [
    {id: "0798", tarea: "Estudiar Javascript", completado: false},
    {id: "6453", tarea: "Cargar los audífonos", completado: false},
    {id: "7249", tarea: "Practicar bajo eléctrico", completado: false},
    {id: "1209", tarea: "Preparar la mochila", completado: false},
]

renderTarea()

/* Funciones fundamentales */

/* Renderizar HTML */
function renderTarea() {
    
    html = ""

    for (let tarea of tareas) {
        html += `<tr>
                    <td>${tarea.id}</td>
                    <td>${tarea.tarea}</td>
                    <td><button onClick="borrar(${tarea.id})" class="btn-eliminar">Eliminar</button></td>
                    <td><input type="checkbox" onClick="cambiar(${tarea.id})" ${tarea.completado ? "checked" : ""}></td>
                 </tr>
                `
    }

    /* Se imprime en el DOM lo procesado en el for of */
    listaDeTareas.innerHTML = html;

    /* Contabilizando las tareas totales */
    cuentaTareas.textContent = `Total de tareas: ${tareas.length}`;

    /* Contabilizando las tareas realizadas */
    const tareasRealizadas = tareas.filter(tarea => tarea.completado === true);
    cuentaTareas.textContent += ` / Realizadas: ${tareasRealizadas.length}`;
};

/* Evento al presionar el botón Agregar */
btnAgregar.addEventListener("click", () => {
    
    /* Agregar tareas al arreglo: Hice un ID basado en la fecha, pero solo con 4 dígitos */
    const nuevaTarea = {id: String(Date.now()).slice(-4), tarea: input.value, completado: false} 
    tareas.push(nuevaTarea)
    input.value = ""
    
    /* Actualizamos la info del HTML */
    renderTarea()
});

/* Funcion para eliminar tareas */
function borrar(id) {
    let index = tareas.findIndex((ele) => ele.id == id)
    tareas.splice(index, 1)

    /* Actualizamos la info del HTML */
    renderTarea()
};

/* Funcion para cambiar el estado de la tarea */
function cambiar(id) {
    let index = tareas.findIndex((ele) => ele.id == id)
    tareas[index].completado = !tareas[index].completado

    /* Actualizamos la info del HTML */
    renderTarea()
};
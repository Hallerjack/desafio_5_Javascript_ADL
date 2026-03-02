/* Inicializando Datos */
const listaDeTareas = document.querySelector("tbody");
const btnAgregar = document.querySelector("#agregar-tarea");
const input = document.querySelector("#nueva-tarea");
const cuentaTareas = document.getElementById("cuenta-tareas");

/* Inicializando Arreglo */
const tareas = []

/* Renderizar HTML */
function renderTarea() {
    
    html = ""

    for (let tarea of tareas) {
        html += `<tr>
                    <td>${tarea.id}</td>
                    <td>${tarea.tarea}</td>
                    <td><button onClick="borrar(${tarea.id})" class="btn-eliminar">Eliminar</button></td>
                    <td></td>
                 </tr>
                `
    }
    listaDeTareas.innerHTML = html;
}

/* Evento al presionar el botón Agregar */
btnAgregar.addEventListener("click", () => {
    
    /* Agregar tareas al arreglo */
    const nuevaTarea = input.value 
    tareas.push({id: String(Date.now()).slice(-4), tarea: nuevaTarea})
    input.value = ""
    
    /* Actualizamos la info del HTML */
    renderTarea()
});

/* Funcion para eliminar tareas */
function borrar(id) {
    const index = tareas.findIndex((ele) => ele.id === id)
    tareas.splice(index, 1)
    renderTarea();
}

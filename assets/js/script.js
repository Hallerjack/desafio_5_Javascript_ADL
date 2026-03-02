/* Inicializando Datos */
const listaDeTareas = document.querySelector("tbody");
const btnAgregar = document.querySelector("#agregar-tarea");
const input = document.querySelector("#nueva-tarea");
const cuentaTareas = document.getElementById("cuenta-tareas");

/* Inicializando Arreglo */
const tareas = []

btnAgregar.addEventListener("click", () => {
    /* Agregar tareas al arreglo */
    const nuevaTarea = input.value 
    tareas.push({id: String(Date.now()).slice(-4), tarea: nuevaTarea})
    input.value = ""

    /* Actualizamos la info del HTML */
    html = ""

    for (let tarea of tareas) {
        html += `<tr>
                    <td>${tarea.id}</td>
                    <td>${tarea.tarea}</td>
                    <td><button>Eliminar</button></td>
                    <td></td>
                 </tr>
                `
    }
    listaDeTareas.innerHTML = html;


});
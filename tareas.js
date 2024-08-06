class Tarea {
  constructor(titulo, categoria) {
    this.id = Math.random();
    this.titulo = titulo;
    this.categoria = categoria;
  }
}

let listaTareas = [];
let TAREAS_LOCAL_STORAGE = "tareas";

$(document).ready(() => {
  $("#botonGuardarTarea").click(() => {
    const inputTarea = $("#inputTarea");
    const valorTarea = inputTarea.val();
    const search = new URLSearchParams(location.search); //despues de ? me da search o query
    const categoriaId = search.get("categoria");
    const tarea = new Tarea(valorTarea, categoriaId);
    listaTareas.push(tarea);
    const listaTareaString = JSON.stringify(listaTareas);
    localStorage.setItem(TAREAS_LOCAL_STORAGE, listaTareaString);
    location.reload();
  });
});

$(document).ready(() => {
  const listaTareaString = localStorage.getItem(TAREAS_LOCAL_STORAGE);
  if (listaTareaString !== null) {
    listaTareas = JSON.parse(listaTareaString);
    mostrarListaTareashtml(listaTareas);
  }
});

const mostrarListaTareashtml = (listaTareas) => {
  for (let tarea of listaTareas) {
    const copiaTemplate = $("#templatetarea").contents().clone();
    copiaTemplate.text(tarea.titulo);
    $("#listaTarea").append(copiaTemplate.contents());
  }
};

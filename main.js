class Categoria {
  constructor(nombre) {
    this.id = Math.random();
    this.nombre = nombre;
  }
}
let listaCategoria = []; // creo un array para tener una lista de las categorias
let CATEGORIA_LOCAL_STORAGE = "categorias";

$(document).ready(() => {
  //ejecuta la funcion cuando este listo el documento
  $("#botonGuardarCategoria").click(() => {
    // cuando el usuario le da click boton guardar
    const inputCategoria = $("#inputCategoria"); // variable para seleccionar el elemento del input
    const nombreCategoria = inputCategoria.val(); // obtener el valor escribio usuario
    const categoria = new Categoria(nombreCategoria); //creamos la categoria objeto
    listaCategoria.push(categoria); // lo agrega al array al final
    const listaCategoriaString = JSON.stringify(listaCategoria); // creo variable lista categoria pasa a Json con String al array.
    localStorage.setItem(CATEGORIA_LOCAL_STORAGE, listaCategoriaString); // guarda en el local Storage en su key o llave.
    location.reload(); // para actualizar o refrescar pagina
  });
});

$(document).ready(() => {
  const listaCateg = localStorage.getItem(CATEGORIA_LOCAL_STORAGE);
  if (listaCateg !== null) {  //no es null
    listaCategoria = JSON.parse(listaCateg); // pasarmos a un objeto
    mostrarListaCategoria(listaCategoria);// se convierte en html, porque es lo que el usuario ve.
  }
});

const mostrarListaCategoria = (listaCategoria) => {
  for (let categoria of listaCategoria) { //bucle.
    const copiaTemplate = $("#categoriaCard").contents().clone(); // tomo el contenido, .clone copio el contenido.
    copiaTemplate.find("h5").text(categoria.nombre);
    copiaTemplate.find("a").attr("href", `/tareas.html?categoria=${categoria.id}`);
    $("#listaCategoria").append(copiaTemplate); // . append pegar el contenido al final.
  }
};

// class Tarea {
//   constructor(titulo, category, fecha) {
//     this.titulo = titulo;id
//     this.category = category;
//     this.completada = false;
//     this.fecha = fecha;
//   }
// }

// const TAREAS_LOCAL_STORAGE = "tareas";

// let listaTodos = [];

// $(document).ready(() => {

// });

// $("#boton-crear-categ").click( () => {
//     alert("hola")
// });

function agregarTarea() {
    var tarea=document.getElementById("tarea-nueva").value;
    var nuelist=document.createElement("Li");
    nuelist.textContent=tarea;
    document.getElementById("lista tarea").appendChild(nuelist);
    document.getElementById("nueva tarea").value=" "; 
}
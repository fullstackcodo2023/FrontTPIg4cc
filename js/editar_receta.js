function modificar() {
    let id = document.getElementById("id").value
    let receta_ingresada = document.getElementById("receta").value
    let dificultad_ingresada = document.getElementById("dificultad").value 
    let duracion_ingresada = document.getElementById("duracion").value 
    let ingredientes_ingresados = document.getElementById("ingredientes").value 
    let pasos_ingresados = document.getElementById("pasos").value 
    let imagen_ingresada = document.getElementById("imagen").value 

    let datos = {
        receta:receta_ingresada,
        dificultad:dificultad_ingresada,
        duracion:duracion_ingresada,
        ingredientes:ingredientes_ingresados,
        pasos:pasos_ingresados,
        imagen:imagen_ingresada
    }

    console.log(datos);

    let url = "http://localhost:5000/update/"+id
    var options = {
        body: JSON.stringify(datos),
        method: 'PUT',
        
        headers: { 'Content-Type': 'application/json' },
        // el navegador seguirá automáticamente las redirecciones y
        // devolverá el recurso final al que se ha redirigido.
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")

            //Puedes utilizar window.location.href para obtener la URL actual, redirigir a otras páginas
           window.location.href = "../index.html";
          
        })
        .catch(err => {
            this.error = true
            console.error(err);
            alert("Error al Modificar")
        })      
}
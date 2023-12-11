function guardar() {
    let receta_ingresada = document.getElementById("receta").value
    let dificultad_ingresada = document.getElementById("dificultad").value 
    let duracion_ingresada = document.getElementById("duracion").value 
    let ingredientes_ingresados = document.getElementById("ingredientes").value 
    let pasos_ingresados = document.getElementById("pasos").value 
    let imagen_ingresada = document.getElementById("imagen").value 


    // Se arma el objeto de js 
    let datos = {
        receta:receta_ingresada,
        dificultad:dificultad_ingresada,
        duracion:duracion_ingresada,
        ingredientes:ingredientes_ingresados,
        pasos:pasos_ingresados,
        imagen:imagen_ingresada
    }
    console.log(datos);
    
    let url = "http://localhost:5500/update/registro"
    var options = {
        body: JSON.stringify(datos),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
            // Devuelve el href (URL) de la página actual
            window.location.href = "../index.html";  
            
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
}
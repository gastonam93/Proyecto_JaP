

document.addEventListener("DOMContentLoaded", function(){
   

    if (usuario==null){
        Swal.fire('Debes logearte para encontrar lo que buscas ;)','', 'warning');
        setTimeout("location.href='login.html'",3500);
    }else{
        Swal.fire({
            title: 'Bienvenid@' + " " + usuario,
            timer: 1750,
            timerProgressBar: true,
          })
    
    }
    
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });

    document.getElementById("usuario").innerHTML=usuario;

    document.getElementById("salir").addEventListener('click',()=>{
        cerrarSesion();
    });
});
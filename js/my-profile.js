

document.addEventListener("DOMContentLoaded", function(e){

    if (usuario==null){
        Swal.fire('Debes logearte para encontrar lo que buscas ;)','', 'warning');
        setTimeout("location.href='login.html'",3500);
    };

    document.getElementById("salir").addEventListener('click',()=>{
        cerrarSesion();
    });
    document.getElementById("usuario").innerHTML = usuario;
    });
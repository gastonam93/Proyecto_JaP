let nombre=JSON.parse(localStorage.getItem('priNombre'));
let apellido=JSON.parse(localStorage.getItem('priApellido'));
let segnombre=JSON.parse(localStorage.getItem('segNombre'));
let segapellido=JSON.parse(localStorage.getItem('segApellido'));
let telcontacto=JSON.parse(localStorage.getItem('telContacto'));


function datos(){
  let priNombre=document.getElementById('priNombre').value;
  let priApellido=document.getElementById('priApellido').value;
  let segNombre=document.getElementById('segNombre').value;
  let segApellido=document.getElementById('segApellido').value;
  let telContacto=document.getElementById('telContacto').value;


  if (priNombre!="" && priApellido !=""){
  localStorage.setItem('priNombre',JSON.stringify(priNombre))
  localStorage.setItem('priApellido',JSON.stringify(priApellido))
  localStorage.setItem('segNombre',JSON.stringify(segNombre))
  localStorage.setItem('segApellido',JSON.stringify(segApellido))
  localStorage.setItem('telContacto', JSON.stringify(telContacto))
  }
}




document.addEventListener("DOMContentLoaded", function(e){

    document.getElementById('formularioPerfil').addEventListener('submit', function (event) {
        
        if (!this.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        
        document.body.classList.add('was-validated') 
        
      })
    

    if (usuario==null){
        Swal.fire('Debes logearte para encontrar lo que buscas ;)','', 'warning');
        setTimeout("location.href='login.html'",3500);
    };

    document.getElementById("salir").addEventListener('click',()=>{
        cerrarSesion();
    });
    
    document.getElementById("usuario").innerHTML = usuario;

    document.getElementById("correo").value = usuario;

    document.getElementById('guardar').addEventListener('click',()=>{
      datos();
    });

    document.getElementById("priNombre").value = nombre;
    document.getElementById("priApellido").value = apellido;
    document.getElementById('segNombre').value = segnombre;
    document.getElementById('segApellido').value = segapellido;
    document.getElementById('telContacto').value = telcontacto;



    });
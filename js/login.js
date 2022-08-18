function login(){

    let user=document.getElementById('usuario').value;
    let password=document.getElementById('contraseña').value;

    if(user!="" && password!=""){
        localStorage.setItem('user',JSON.stringify(user))
        location.href='index.html';
    }else{
         Swal.fire(
    'Debes ingresar todos los datos','', 'warning',);
    }
}



document.addEventListener('DOMContentLoaded',()=>{

    document.getElementById('enter').addEventListener('click',()=>{
        login();
    });
})
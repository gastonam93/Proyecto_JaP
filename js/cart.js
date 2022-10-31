let comissionPercentage = 0.15;


function showProdComprados(compra) {
    for (let carri of compra) {
      let carrito = `
        <tr>
        <td><img src=${carri.image} width=100></td>
        <td>${carri.name}</td>
        <td>${carri.currency} ${carri.unitCost}</td>
        <td><input type="number" id="cantidad" value="1" min="1" onchange="multiplicar(articulo)"></td>
        <td><strong id="subtotal"></strong></td>
        </tr>`;
  
      document.getElementById("productosComprados").innerHTML += carrito;
    }
  }

  function multiplicar(articulo){
    let numero = document.getElementById('cantidad').value;
    for (let item of articulo){
      precio=item.unitCost

      document.getElementById('subtotal').innerHTML=item.currency+" "+ numero*precio;
      document.getElementById('costoProd').innerHTML=numero*precio;
    }
    updateTotalCosts();
  }

  function updateTotalCosts(){
    let precioUnitario = document.getElementById("costoProd").innerHTML;
    let costoEnvio = document.getElementById('envioProd').innerHTML=Math.round(comissionPercentage * parseFloat(precioUnitario));

    document.getElementById('costoTotal').innerHTML=(parseFloat(precioUnitario) + parseFloat(costoEnvio))
    
}



function chequearForma(){
  let tarjeta = document.getElementById('tCredito')
  let transferencia = document.getElementById('tBancaria')


  if (!tarjeta.checked || !transferencia.checked){
    document.getElementById('tarjeta1').required=true;
    document.getElementById('tarjeta2').required=true;
    document.getElementById('tarjeta3').required=true;
    document.getElementById('transferencia').required=true;
    document.getElementById('transferencia').disabled=false;
    document.getElementById('tarjeta1').disabled=false;
    document.getElementById('tarjeta2').disabled=false;
    document.getElementById('tarjeta3').disabled=false;
    document.getElementById('seleccionPago').innerHTML="<p class='invalid'>No se seleccionó una forma de pago </p>";
  
  }  if (tarjeta.checked) {
    document.getElementById('transferencia').required=false;
    document.getElementById('transferencia').disabled=true;
    document.getElementById('transferencia').value="";
    document.getElementById('tarjeta1').required=true;
    document.getElementById('tarjeta2').required=true;
    document.getElementById('tarjeta3').required=true;
    document.getElementById('seleccionPago').innerHTML="<p>Tarjeta de crédito</p>";

  } if (transferencia.checked) {
    document.getElementById('tarjeta1').required=false;
    document.getElementById('tarjeta2').required=false;
    document.getElementById('tarjeta3').required=false;
    document.getElementById('transferencia').disabled=false;
    document.getElementById('tarjeta1').disabled=true;
    document.getElementById('tarjeta2').disabled=true;
    document.getElementById('tarjeta3').disabled=true;
    document.getElementById('tarjeta1').value="";
    document.getElementById('tarjeta2').value="";
    document.getElementById('tarjeta3').value="";
    document.getElementById('seleccionPago').innerHTML="<p>Transferencia Bancaria</p>";
 } 

}

document.addEventListener("DOMContentLoaded", function(e){

  (function () {
    
  var forms = document.querySelectorAll('.needs-validation')


    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener('submit', function (event) {
        
    if (!this.checkValidity()) {
      chequearForma();
      event.preventDefault()
      event.stopPropagation()
    }
    
    this.classList.add('was-validated') 
    
  })
  
})

})()


        getJSONData(CART_INFO_URL+"25801.json").then(function (resultObj) {

          if (resultObj.status === "ok") {
          compra = resultObj.data.articles;
          showProdComprados(compra);
          articulo = resultObj.data.articles;
          multiplicar(articulo);   
          }
        });
   
      
  if (usuario==null){
    Swal.fire('Debes logearte para encontrar lo que buscas ;)','', 'warning');
    setTimeout("location.href='login.html'",3500);
  };

  document.getElementById("salir").addEventListener('click',()=>{
    cerrarSesion();
  });

  document.getElementById("usuario").innerHTML = usuario;


  document.getElementById("premium").addEventListener("change", function(){
    comissionPercentage = 0.15;
    updateTotalCosts();
  });

  document.getElementById("express").addEventListener("change", function(){
    comissionPercentage = 0.07;
    updateTotalCosts();
  });

  document.getElementById("standard").addEventListener("change", function(){
    comissionPercentage = 0.05;
    updateTotalCosts();
  });

  
 
});

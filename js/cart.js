
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
    }
  }


document.addEventListener("DOMContentLoaded", function(e){
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

});


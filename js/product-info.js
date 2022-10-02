let prod = JSON.parse(localStorage.getItem("id"));

function showProdInfoList(producto) {
  let datosProd = `
                <div>
                    <br><h2>${producto.name}</h2><hr>
                    <h5><b>Precio</b></h5>
                    <p>${producto.currency}-${producto.cost}</p>
                    <h5><b>Descripción</b></h5>
                    <p>${producto.description}</p>
                    <h5><b>Categoría</b></h5>
                    <p>${producto.category}</p>
                    <h5><b>Cantidad vendidos</b></h5>
                    <p>${producto.soldCount}</p>
                    <h5><b>Imágenes ilustrativas</b></h5>
                </div>
        `;
  document.getElementById("datosProducto").innerHTML = datosProd;

  for (let i = 0; i < producto.images.length; i++) {
    producto.images[i];

    let datosProd2 = `<div class="col-md-3" ><img src=${producto.images[i]} class="img-fluid img-thumbnail"></div>`;

    document.getElementById("datosProducto2").innerHTML += datosProd2;
  }
}

function showProdCommentList(comment) {
  for (let comentario of comment) {
    let comentariosProd = `
            <div>
                <p><b>${comentario.user}</b>  ${comentario.dateTime} ${puntuacion(comentario.score)}</p>
                <p>${comentario.description}</p>
            </div>
            `;

    document.getElementById("comentariosProducto").innerHTML += comentariosProd;
  }
}

function puntuacion(puntos) {
  var estrellas = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= puntos) {
      estrellas += '<i style="color:yellow" class="fas fa-star" ></i>';
    } else {
      estrellas += '<i class="far fa-star"></i>';
    }
  }
  return estrellas;
}

function showRelProdList(producto) {
  for (let rel of producto) {
    let relProd = `<div onclick="redirigir(${rel.id})" class="col-md-3 cursor-active"><img src=${rel.image} 
    class="img-fluid img-thumbnail">${rel.name}</div>`;

    document.getElementById("relProductos").innerHTML += relProd;
  }
}

function redirigir(id) {
  localStorage.removeItem("id");
  localStorage.setItem("id", id);
  window.location = "product-info.html";
}

document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData(PRODUCT_INFO_URL + prod + ".json").then(function (resultObj) {
    if (resultObj.status === "ok") {
      let producto = resultObj.data;
      showProdInfoList(producto);
      let rel = resultObj.data.relatedProducts;
      showRelProdList(rel);
    }
  });

  getJSONData(PRODUCT_INFO_COMMENTS_URL + prod + ".json").then(function (resultObj) {
    if (resultObj.status === "ok") {
      comment = resultObj.data;
      showProdCommentList(comment);
    }
  });

  document.getElementById("usuario").innerHTML = usuario;

  document.getElementById("relProductos").addEventListener("click", function () {
      redirigir(id);
    });

    document.getElementById("salir").addEventListener('click',()=>{
        cerrarSesion();
    });

    if (usuario==null){
      Swal.fire('Debes logearte para encontrar lo que buscas ;)','', 'warning');
      setTimeout("location.href='login.html'",3500);
  };
});

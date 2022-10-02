let categoria=JSON.parse(localStorage.getItem('catID'));

function setid(id) {
    localStorage.setItem("id", id);
    window.location = "product-info.html"
}

let lista = [];

function showProductsList(categoria){
    let listarProductos = "";

    for(let category of categoria){ 

        listarProductos += `
        <div onclick="setid(${category.id})" class="list-group-item list-group-item-action cursor-active">
            <div class="row">
                <div class="col-3">
                    <img src="` + category.image + `" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>`+ category.name + ' - ' + category.currency + ' ' + category.cost + `</h4> 
                        <p> `+ category.description +`</p> 
                        </div>
                        <small class="text-muted">` + category.soldCount + ` artículos</small> 
                    </div>
                </div>
            </div>
        </div>
        `
        
    }
    document.getElementById("mostrarProductos").innerHTML = listarProductos;
}


function filtrar(){
    
    let inicial = parseInt(document.getElementById('min').value);
    let final = parseInt(document.getElementById('max').value);
    let listaFiltrada = lista.filter((category) => category.cost>=inicial && category.cost<=final);
    showProductsList(listaFiltrada);
};


document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL+categoria+".json").then(function(resultObj){
        if (resultObj.status === "ok")
        {
            lista = resultObj.data.products;
            showProductsList(lista);
        }
    });
    
    document.getElementById("usuario").innerHTML=usuario;

    document.getElementById('filtrar').addEventListener('click',()=>{
        filtrar();
    });


    document.getElementById("limpiar").addEventListener("click", ()=>{
        document.getElementById("min").value = "";
        document.getElementById("max").value = "";

        showProductsList(lista);
    });
    

    document.getElementById("sortAsc").addEventListener("click", ()=>{
        lista.sort(function(a,b) {
            return a.cost-b.cost     
        });  
        showProductsList(lista)
    });
    

    document.getElementById("sortDesc").addEventListener("click", ()=>{
        lista.sort(function(a,b) {
            return b.cost-a.cost       
        });
        showProductsList(lista);
    });
    

    document.getElementById("sortBySoldCount").addEventListener("click", ()=>{
        lista.sort(function(a,b){
            return b.soldCount-a.soldCount
        });
        showProductsList(lista);
    });

    if (usuario==null){
        Swal.fire('Debes logearte para encontrar lo que buscas ;)','', 'warning');
        setTimeout("location.href='login.html'",3500);
    };

    document.getElementById("salir").addEventListener('click',()=>{
        cerrarSesion();
    });
});

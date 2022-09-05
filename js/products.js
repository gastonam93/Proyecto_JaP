let categoria=JSON.parse(localStorage.getItem('catID'));


let lista = [];

function showCategoriesList(categoria){
    let listarProductos = "";

    for(let category of categoria){ 

        listarProductos += `
        <div class="list-group-item list-group-item-action">
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

        document.getElementById("mostrarProductos").innerHTML = listarProductos; 
    }
}


function filtrar(){
    
    let inicial = parseInt(document.getElementById('min').value);
    let final = parseInt(document.getElementById('max').value);
    let listaFiltrada = lista.filter((category) => category.cost>=inicial && category.cost<=final);
    showCategoriesList(listaFiltrada);
};


document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL+categoria+".json").then(function(resultObj){
        if (resultObj.status === "ok")
        {
            lista = resultObj.data.products;
            showCategoriesList(lista);
        }
    });
    
    document.getElementById("usuario").innerHTML=usuario;

    document.getElementById('filtrar').addEventListener('click',()=>{
        filtrar();
    });


    document.getElementById("limpiar").addEventListener("click", ()=>{
        document.getElementById("min").value = "";
        document.getElementById("max").value = "";

        showCategoriesList(lista);
    });
    

    document.getElementById("sortAsc").addEventListener("click", ()=>{
        lista.sort(function(a,b) {
            return a.cost-b.cost        
        });  

        showCategoriesList(lista);
    });
    

    document.getElementById("sortDesc").addEventListener("click", ()=>{
        lista.sort(function(a,b) {
            return b.cost-a.cost       
        });
        showCategoriesList(lista);
    });
    

    document.getElementById("sortBySoldCount").addEventListener("click", ()=>{
        lista.sort(function(a,b){
            return b.soldCount-a.soldCount
        });
        showCategoriesList(lista);
    });
});

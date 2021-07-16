
document.addEventListener('DOMContentLoaded',()=>{
    cargarProductos();
    //fitroCaneca();
})

const cargarProductos=()=>{

    //const url_json = "assets/productos.json"
    const llamar =fetch("../assets/productos.json");
    llamar.then(response => response.json())
    .then(datos =>{
        let html='';
        let i=0;
        datos.productos.forEach(producto => {
            i++;
            html+=`
            <div class="caja" id=${i}>
            <img class="img_producto" src=${producto.imagen} class"imagenes">
            <div class="informacion_prod">
                <h3 class="nombres_prod">${producto.nombre}</h3>
                <small class="codigo_prod">${producto.código}</small>
            </div>
            </div>`;

            
        });
        document.getElementById('productos-lista').innerHTML=html;

    }).catch(error=>console.log(error));
}

const fitroCaneca  = () =>{
  
    const llamar =fetch("../assets/productos.json");
    llamar.then(response => response.json())
      .then(datos =>{
          let html='';
          let i=0;
          datos.productos.forEach(producto => {
              i++;
              if(producto.imagen.includes('Caneca')){
                html+=`
              <div class="caja" id=${i}>
              <img class="img_producto" src=${producto.imagen} class"imagenes">
              <div class="informacion_prod">
                  <h3 class="nombres_prod">${producto.nombre}</h3>
                  <small class="codigo_prod">${producto.código}</small>
              </div>
              </div>`;
  
  
              }
              
  
              
          });
          document.getElementById('productos-lista').innerHTML=html;
  
      }).catch(error=>console.log(error));
  }
  
  
  const fitroTanque  = () =>{
    
    const llamar =fetch("../assets/productos.json");
    llamar.then(response => response.json())
      .then(datos =>{
          let html='';
          let i=0;
          datos.productos.forEach(producto => {
              i++;
              if(producto.imagen.includes('Tanque')){
                html+=`
              <div class="caja" id=${i}>
              <img class="img_producto" src=${producto.imagen} class"imagenes">
              <div class="informacion_prod">
                  <h3 class="nombres_prod">${producto.nombre}</h3>
                  <small class="codigo_prod">${producto.código}</small>
              </div>
              </div>`;
  
  
              }
              
  
              
          });
          document.getElementById('productos-lista').innerHTML=html;
  
      }).catch(error=>console.log(error));
  }
  
  document.getElementById("Canecas").onclick = function(){
    fitroCaneca();
  }
  
  document.getElementById("Todos").onclick = function() {
    cargarProductos();
  }
  
  document.getElementById("Tanques").onclick = function(){
    fitroTanque();
  }




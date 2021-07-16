document.addEventListener('DOMContentLoaded',()=>{
    mostrarProvincias();
})

const mostrarProvincias=()=>{

    //const url_json = "assets/productos.json"
    const llamar =fetch("../assets/provincias.json");
    llamar.then(response => response.json())
    .then(datos =>{
        let html='';
        datos.provincias.forEach(provincia => {
            html+=`
            <option value="provincias" class="dropdown-item" href="#">${provincia.nombre}</option>
            `;
        });
        document.getElementById('dropProv').innerHTML=html;

    }).catch(error=>console.log(error));
}

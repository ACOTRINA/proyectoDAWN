document.addEventListener('DOMContentLoaded', () => {

    

});


document.getElementById('buscador2').onclick = function(){
    buscador1();
      
};




function buscador1(){
    let noticias =  document.getElementsByClassName('items');

    let tBuscador = document.getElementsByTagName('input');
    let texto =  tBuscador[1].value;
    let text1 = texto.toUpperCase();
    

    let html ='';
    for(noticia of noticias){
        
        let n = noticia.getElementsByClassName('titulo')[0].textContent;
        
        
        if(n.toUpperCase().includes(text1)){
            let divinfo =  noticia.getElementsByClassName('informacion')[0];
            let informacion =  divinfo.getElementsByTagName('p')[0].textContent;

            let notIndividual = noticia.getElementsByTagName('h3')[0].textContent;

            let imagen = noticia.getElementsByTagName('img')[0];
            let altimg = imagen.getAttribute('alt');
            let atImg =  imagen.getAttribute('src');
            
            

            html += `
            <div class="items">
 
            <div class="card noticiaIndividual">
              <div class="card-header">
                <h3>${notIndividual}</h3>
              </div>
    
              <div class="informacion">
                <p class="titulo">${n}</p>
              </div>
              <img src="${atImg}" alt="${altimg}">
              <div class="informacion">
                <p>${informacion}</p>
              </div>
            </div>
        
        </div>`
            

        }


    }
    document.getElementById('item-container').innerHTML = html;
    document.getElementsByTagName('input')[1].value = "";


}

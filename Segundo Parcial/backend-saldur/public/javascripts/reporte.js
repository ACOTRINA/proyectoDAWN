let temp=document.querySelector("select#inputGroupSelect01");
    
    fetch("http://localhost:3001/clientes")
      .then(response => response.json())
      .then(data => {

        let html='';
        data.forEach(cliente =>{
          console.log(cliente.id)
          html+=`<option value="${cliente.id}">${cliente.nombre}</option>`
          
        })
        temp.innerHTML+=html;
      })
      .catch(console.error);
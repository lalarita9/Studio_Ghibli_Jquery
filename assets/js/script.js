window.onload = function() {

  $(document).ready(function() {
      $('#search-btn').on('click', function(evento) {
          evento.preventDefault();
         
          let titulo = $('#opcion').val().trim();
          var pelicula= titulo.toString().toLowerCase();
          //El usuario debe elegir una pelicula//
          if (titulo === '') {
            alert('Debe seleccionar una opción');
    
        } else {
            console.log('Campo correcto');
        }
          
          
          //Solicitud de datos a la Appi a través de Get//
          $.ajax({
              type: "GET",
              url: `https://studio-ghibli-films-api.herokuapp.com/api/${pelicula}`,
              dataType: "json",
              success: function(data) {
                  console.log(data);
                  console.log(pelicula)
                 
                  //Resultado se muestra en formato Card de Boostrap en HTML//
                  $('.resultado').html(`<div class="card" style="width: 30rem;">
                          <img src="${data.poster}" class="card-img-top" style="height:250px;" alt="imagen ghibli">
                          <div class="card-body"><h5 class="card-title"><b>${data.title}</b></h5>
                          <hr color="#b2b2a2"></hr>
                          <p class="card-text"> ${data.synopsis}</p>
                          <hr color="#b2b2a2"></hr>
                          <p class="card-text"><b>Título Romanizado:</b> ${data.hepburn}</p>
                          <hr color="#b2b2a2"></hr>
                          <p class="card-text"><b>Año de Estreno:</b> ${data.release}</p>
                          <hr color="#b2b2a2"></hr>
                          <p class="card-text"><b>Director:</b> ${data.director}</p>
                          <hr color="#b2b2a2"></hr>
                          <a href="https://studio-ghibli-films-api.herokuapp.com/" target="black"><button type="button" class="btn-2"><b>Más Información</b></button></a>
                                                                   
                          </div>`);
              
              },

              //Función error en caso que haya un mal funcionamiento//
              error: function(error) {
                  alert("La petición no se ha podido completar");
              },
          });

         
        });
        

  });



}





    



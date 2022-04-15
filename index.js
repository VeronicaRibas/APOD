let button = document.querySelector('#submit')

button.addEventListener('click', () => {
  apiNasa()
})


function apiNasa() {
  
  var data = $('#data').val();


  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=b7FljSDWC0XNOGRJGb5T1npVwCerc6jaMBWBjl1z&date=${data}`,
    success: function(data){
      apiDia(data);
    }
  
  })
}

function apiDia(fim){
  var imagem = $(".imagem");
  var titulo = $(".titulo");
  var explanation = $(".explanation");
  var copyright = $(".copyright")
 
  titulo.html(`${fim.title}`);
  explanation.html(`${fim.explanation}`);
  copyright.html(`${fim.copyright}`)
  

  if(fim.media_type == 'image') {
    imagem.html(`<img class='img' src="${fim.url}"/>`)
  } else {
    imagem.html(`<iframe class="img" src="${fim.url}?autoplay=1&mute=1"></iframe>`)
    }
  }
  


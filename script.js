let count =1;
document.getElementById("radio1").checked = true;

setInterval( function(){
  nextImage();
}, 7000)


function nextImage(){
  count++;
  if(count>4){
    count =1;
  }

  document.getElementById("radio" +count).checked = true; 
}


var imgAtual = "imagens/tenis1cima.jpeg" ;
var imgAnterior = "imagens/tenis2cima.jpg"

function trocar(){
  document.getElementById("figura").src = imgAtual;
  let aux = imgAtual;
  imgAtual = imgAnterior;
  imgAnterior = aux;
}

var imgAtual = "imagens/tenis1cima.jpg";
var imgAnterior = "imagens/tenis2cima.jpg"

function trocar(){
  document.getElementById("figura").src = imgAtual;
  let aux = imgAtual;
  imgAtual = imgAnterior;
  imgAnterior = aux;
}
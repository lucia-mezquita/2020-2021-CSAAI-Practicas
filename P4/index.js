console.log("Ejecutando JS....")

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc');
const ctx = canvas.getContext('2d');



const imagen1 = document.getElementById('image1');
const imagen2 = document.getElementById('image2');
const imagen3 = document.getElementById('image3');

const original = document.getElementById('original');
const mirror = document.getElementById('mirror');
const negative = document.getElementById('negative');
const gray = document.getElementById('gray');



//--Acceso deslizador
const R = document.getElementById('R');
const G = document.getElementById('G');
const B = document.getElementById('B');
const gray = document.getElementById('gray');


//--Valores del deslizador
const Range_Value_R = document.getElementById('Range_Value_R');
const Range_Value_G = document.getElementById('Range_Value_G');
const Range_Value_B = document.getElementById('Range_Value_B');
const range_value_gray = document.getElementById('Range_Value_G');
 


//-- Función de retrollamada de imagen cargada
//-- La imagen no se carga instantaneamente, sino que
//-- lleva un tiempo. Sólo podemos acceder a ella una vez
//-- que esté totalmente cargada
img.onload = function () {

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original
  canvas.width = img.width;
  canvas.height = img.height;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  console.log("Imagen lista...");
};


//-- Funcion de retrollamada del deslizador

//Funcion de retrollamada de los deslizadores
R.oninput = () => {
  colors();
}
G.oninput = () => {
  colors();
}
B.oninput = () => {
  colors();
}


//--Duncion habilitada para los deslizadores
function dnables (){
  R.disabled = false;
  G.disabled = false;
  B.disabled = false;
}
//--Funcion deshabilitada para los deslizadores
function disabled(){

  R.disabled = true;
  G.disabled = true;
  B.disabled = true;
}


deslizador.oninput = () => {




  //-- Mostrar el nuevo valor del deslizador
  range_value.innerHTML = deslizador.value;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  //-- Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  //-- Obtener el array con todos los píxeles
  let data = imgData.data

  //-- Obtener el umbral de rojo del desliador
  umbral = deslizador.value

  //-- Filtrar la imagen según el nuevo umbral
  for (let i = 0; i < data.length; i+=4) {
    if (data[i] > umbral)
      data[i] = umbral;
  }

  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);
}




//--Funcion creada para las diferentes elecciones de imagenes 
image1.onclick = () => {
  img.src="marrueco1.JPG";
}
image2.onclick = () => {
  img.src="marruecos2.JPG";
}
image3.onclick = () => {
  img.src="paris.JPG";
}

console.log("Fin...");
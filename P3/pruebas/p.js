console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 600;
canvas.height = 700;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");


// sonidos
const destruir = new Audio("plop.mp3");

//--Estados
const Estado = {
    Init: 0,
    Start: 1,
    Play: 2,
    End: 3,
    

}
// ESTADO INCIAL
let estado = ESTADO.INIT;

//-- Posición del elemento a animar
let x_bola = 300;
let y_bola = 600;
let radiobola = 6;
let x_pala = (canvas.width-80)/2;
let y_pala = canvas.height-20;


//--Dibujar ladrillos
let X_ladrillo = 10;
let Y_ladrillo = 10;





const LADRILLO = {
    F: 7,
    C: 11,
    W: 43, 
    H: 20, 
    Padding: 10, 
    Visible: true  // si se ven los ladrillos o no
};

const ladrillos = [];

// ladrillos
for(let i = 0; i < LADRILLO.F; i++){
    ladrillos[i] = []; // inicializa filas
    for(let j = 0; j < LADRILLO.C; j++){
        ladrillos[i][j] = {
            x: X_ladrillo + (LADRILLO.W + LADRILLO.Padding) * j,
            y: Y_ladrillo + (LADRILLO.H + LADRILLO.Padding) * i,
            W: LADRILLO.W,
            H: LADRILLO.H,
            Padding: LADRILLO.Padding,
            Visible: LADRILLO.Visible,

        };
    }
}


//-- Movimiento pala
var move = window.event;

//-- Velocidad horizontal del objeto
let velx = 2;
let vely = 2;

//--Funcion bola
function bola(){
    ctx.beginPath();
    ctx.arc(x_bola, y_bola, r_bola, 0, 2 * Math.PI);

    //-- Dibujar
    ctx.fillStyle = 'yellow';

    //-- Rellenar
    ctx.fill();

    //-- Dibujar el trazo
    ctx.stroke()
  ctx.closePath();
}


//-Funcion romper ladrillos
function breakladrillo(){
    for(let i = 0; i < LADRILLO.F; i++){
        for(let j = 0; j < LADRILLO.C; j++){
            if(x_bola >= ladrillos[i][j].x && x_bola <= (ladrillos[i][j].x+35+10) && y_bola >= ladrillos[i][j].y && y_bola <= (ladrillos[i][j].y)+30+10 && ladrillos[i][j].VISIBLE){
                destroy.currentTime = 0;
                destroy.play();
                ladrillos[i][j].VISIBLE = false;
                vely = -vely;
                if(ladrillos[i][j].y == 280){
                    puntos = puntos + 1;
                }
                if(ladrillos[i][j].y == 230){
                    puntos = puntos + 2;
                }
                if(ladrillos[i][j].y == 180){
                    puntos = puntos + 3;
                }
                if(ladrillos[i][j].y == 130){
                    puntos = puntos + 5;
                }
                if(ladrillos[i][j].y == 80){
                    puntos = puntos + 10;
                }
                
            }
        }
    }  
}


//--Funcion pala
function pala(){
    ctx.beginPath();
    
    //ctx.rect((canvas.width-80)/2, canvas.height-20, 80, 20)
    ctx.rect(x_pala, y_pala, 80, 20);

    //-- Dibujar
    ctx.fillStyle = 'grey';

    //-- Rellenar
    ctx.fill();

    //-- Dibujar el trazo
    ctx.stroke()
  ctx.closePath();
}

//-- Funcion principal de animacion
function update() 
{
  console.log("test");


  //-- Algoritmo de animacion:
  //-- 1) Actualizar posiciones de los elementos
  //-- (física del movimiento rectilineo uniforme)
  //-- Comprobar colisión con borde derecho
  
   //-- Condicion de rebote en extremos del canvas
   if (x_bola < 0 || x_bola >= (canvas.width) ) {
    velx = -velx;
  }
  if (y_bola < 0 || ((x_bola >= x_pala && x_bola < (x_pala+80)) && y_bola >= y_pala  && y_bola < (y_pala + 20))) {
    vely = -vely;
  }
  //|| y_bola >= (canvas.height-20)
  //X_bola >= X_bloque && X_bola < (X_bloque+80+10) && Y_bola >= (Y_bloque-10) && Y_bola < (Y_bloque+20+10)
  // Actualizar la posición
  x_bola = x_bola + velx;
  y_bola = y_bola - vely;
  

  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
 // dibujamos los ladrillos
    for(let i = 0; i < LADRILLO.F; i++){
        for(let j = 0; j < LADRILLO.C; j++){
            // si es viisble, se pinta
            if(ladrillos[i][j].Visible){
                ctx.beginPath();
                ctx.rect(ladrillos[i][j].x, ladrillos[i][j].y, LADRILLO.W, LADRILLO.H);
                ctx.fillStyle ='blue';
                ctx.fill();
                ctx.closePath;
            }
        }
    }
  //-- 3) Dibujar los elementos visibles
  //---BOLA
  bola();
  
  //--PALA
  pala();



  //-- 4) Volver a ejecutar update cuando toque
  requestAnimationFrame(update);


  //--Movimiento de la pala 
  window.onkeydown = (e) => {
      console.log();
      
      switch (e.key){
        case "ArrowRight":
            if(x_pala<=canvas.width-100){
                 x_pala = x_pala + 25;}
             break;
        case "ArrowLeft":
            if(x_pala>0){
                x_pala = x_pala-25;}
            break;
        case " ":
            Estado.Init;
      }
    }
}

//-- ¡Que empiece la función!
update();
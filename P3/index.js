console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Sonidos
const pong_raqueta = new Audio("pong-raqueta.mp3");
const pong_rebote = new Audio("pong-rebote.mp3");
const pong_tanto = new Audio("pong-tanto.mp3");


//-- Definir el tamaño del canvas
canvas.width = 500;
canvas.height = 600;


//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");


//-- Posiciones iniciales
var ball_Radius = 7;
var ball_x = canvas.width/2;
var ball_y = canvas.height-30;
var dx = 3;
var dy = -3;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;

// PADDLE MOVEMENT
var rightPressed = false;
var leftPressed = false;



//-- Var ladrillos (bricks)
var ladrillosRow = 6;
var ladrillosColumn = 9;
var ladrillosWidth = 65;
var ladrillosHeight = 20;
var ladrillosPadding = 10;
var ladrillosmarginTop = 35;
var ladrillosmarginLeft = 25;

//-Score (puntuacion)
var score = 0;

//--Vidas
var lives = 3;



document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 68) {
        rightPressed = true;
    }
    else if(e.keyCode == 65) {
        leftPressed = true;
    }
    else if(e.keyCode == 32) {
        playing = true;
        dx = 2;
        dy = -2;
        ball_x = paddleX+paddleWidth/2;
        ball_y = canvas.height-30;
    }
    
    }
function keyUpHandler(e) {
    if(e.keyCode == 68) {
        rightPressed = false;
    }
    else if(e.keyCode == 65) {
        leftPressed = false;
    }
}

function drawBricks() {
    for(i=0; i<ladrillosColumn; i++) {
        for(j=0; j<ladrillosRow; j++) {
            if(ladrillos[i][j].status == 1) {
                var ladrillosX = (j*(ladrillosWidth+ladrillosPadding))+ladrillosmarginLeft;
                var ladrillosY = (i*(ladrillosHeight+ladrillosPadding))+ladrillosmarginTop;
                ladrillos[i][j].x = ladrillosX;
                ladrillos[i][j].y = ladrillosY;
                ctx.beginPath();
                ctx.rect(ladrillosX, ladrillosY, ladrillosWidth, ladrillosHeight);
                ctx.fillStyle = "#dfa75b";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
};


function drawBall() {
    ctx.beginPath();
    ctx.arc(ball_x, ball_y, ball_Radius, 0, Math.PI*2);
    ctx.fillStyle = 'rgb(243, 12, 12)';
    ctx.fill();
    ctx.closePath();
};


function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#9c9c9c";
    ctx.fill();
    ctx.closePath();
};

var ladrillos = [];
for(i = 0; i < ladrillosColumn; i++) {
    ladrillos[i] = [];
    for(j = 0; j < ladrillosRow; j++) {
        ladrillos[i][j] = { 
            x: 0, y: 0, 
            status: 1 
        };
    }
}

function drawScore() {
    ctx.font = "16px Bowlby One";
    ctx.fillStyle = "#230c33";
    ctx.fillText("Score: "+score,canvas.width-65, 20);
};


function drawLives() {
    ctx.font = "15px Bowlby One";
    ctx.fillStyle = "#230c33";
    ctx.fillText("Lives: "+lives, 8, 20); 
};

function collision() {
    for(i = 0; i < ladrillosColumn; i++) {
        for(j = 0; j < ladrillosRow; j++) {
            var b = ladrillos[i][j];
            if(b.status == 1) {
                if(ball_x > b.x && ball_x < b.x+ladrillosWidth && ball_y > b.y && ball_y < b.y+ladrillosHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if(score == ladrillosRow*ladrillosColumn) {
                        alert("HAS GANADO, CONGRATS!");
                        document.location.reload();
                    }
                    //REPRODUCIR SONIDO
        pong_rebote.currentTime = 0;
        pong_rebote.play();
                }
            }
        }
    }
};

//-- Funcion principal de animacion
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    drawScore();
    drawLives();
    collision();
    
     
    if(ball_x + dx > canvas.width-ball_Radius || ball_x + dx < ball_Radius) {
        dx = -dx;
        //REPRODUCIR SONIDO
        pong_rebote.currentTime = 0;
        pong_rebote.play();
    }

    if(ball_y + dy < ball_Radius) {
        dy = -dy;
        //REPRODUCIR SONIDO
        pong_rebote.currentTime = 0;
        pong_rebote.play();
    }
    else if(ball_y + dy > canvas.height-ball_Radius) {
        if(ball_x > paddleX && ball_x < paddleX + paddleWidth) {
            dy = -dy;
            //REPRODUCIR SONIDO
            pong_rebote.currentTime = 0;
            pong_rebote.play();
        }
        else {
            lives--;
            if(!lives) {
                alert("GAME OVER");
                document.location.reload();
            }
            else {
                ball_x = canvas.width/2;
                ball_y = canvas.height-30;
                dx = 5;
                dy = -5;
                paddleX = (canvas.width-paddleWidth)/2;
                //REPRODUCIR SONIDO
                pong_rebote.currentTime = 0;
                pong_rebote.play();
            }
        
        }
    }
    
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 5;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 5;
    }
    
    ball_x += dx;
    ball_y += dy;
    requestAnimationFrame(update);
}

update();
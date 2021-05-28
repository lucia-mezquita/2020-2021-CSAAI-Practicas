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



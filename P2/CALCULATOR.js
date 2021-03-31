console.log("Ejecutando JS...");


//-- Elementos de la interfaz de la calculadora
display = document.getElementById("display")
button1 = document.getElementById("button1") 
button2 = document.getElementById("button2") 
button3 = document.getElementById("button3")
button4 = document.getElementById("button4")
button5 = document.getElementById("button5")
button6 = document.getElementById("button6")
button7 = document.getElementById("button7")
button8 = document.getElementById("button8")
button9 = document.getElementById("button9")
button0 = document.getElementById("button0")
plus = document.getElementById("plus")
equal = document.getElementById("equal")
CLEAR = document.getElementById("CLEAR")
dot = document.getElementById("dot")
DELETE = document.getElementById("DELETE")
minus = document.getElementById("minus")


//-- Funciones de retrollamada de los botones
//-- Cada vez que se aprieta un boton se actua
//-- sobre la cadena: añadiendo digito, operador +
//-- poniendo a cero o evaluando la expresión


// -- Insertar digito 1
button1.onclick = () => {
  display.innerHTML += button1.value;
}

//-- Insertar digito 2
button2.onclick = () => {
  display.innerHTML += button2.value;
}
//-- Insertar digito 3
button3.onclick = () => {
    display.innerHTML += button3.value;
  }

//-- Insertar digito 4
button4.onclick = () => {
    display.innerHTML += button4.value;
  }

//-- Insertar digito 5
button5.onclick = () => {
    display.innerHTML += button5.value;
  }

//-- Insertar digito 6
button6.onclick = () => {
    display.innerHTML += button6.value;
  }

//-- Insertar digito 7
button7.onclick = () => {
    display.innerHTML += button7.value;
  }

  //-- Insertar digito 8
button8.onclick = () => {
    display.innerHTML += button8.value;
  }
//-- Insertar digito 9
button9.onclick = () => {
    display.innerHTML += button9.value;
  }

//-- Insertar digito 0
button0.onclick = () => {
    display.innerHTML += button0.value;
  } 

//-- Insertar simbolo de sumar
plus.onclick = () => {
  display.innerHTML += plus.value;
}

//-- Insertar simbolo de restar
minus.onclick = () => {
    display.innerHTML += minus.value;
  }

//-- Evaluar la expresion
equal.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
}

//-- Multiplicacion
multiply.onclick = () =>{
    display.innerHTML += multiply.value;
}

//-- Division
divide.onclick = () =>{
    display.innerHTML += divide.value;
} 

//-- Numero PI
pi.onclick = () =>{
    display.innerHTML += pi.value;
} 

//-- Eliminar solo un digito
DELETE.onclick = () => {
    display.innerHTML = display.innerHTML.slice(0,-1);
}

//-- punto
dot.onclick = () =>{
    display.innerHTML += dot.value;
}

//-- Poner a cero la expresion
CLEAR.onclick = () => {
  display.innerHTML = "0";
}
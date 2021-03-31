console.log("Ejecutando JS...");


//-- Elementos de la interfaz de la calculadora
display = document.getElementById("display")
boton1 = document.getElementById("boton1")
boton2 = document.getElementById("boton2")
suma = document.getElementById("suma")
igual = document.getElementById("igual")
clear = document.getElementById("clear")

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


//-- Insertar simbolo de sumar
plus.onclick = () => {
  display.innerHTML += plus.value;
}

//-- Evaluar la expresion
equal.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
}

//-- Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = "0";
}
console.log("Ejecutando JS...");

display = document.getElementById("display")
equal = document.getElementById("equal")
DELETE = document.getElementById("DELETE")
CLEAR = document.getElementById("CLEAR")

//-- CREAR DOS ARRAYS PARA LOS DIGITOS Y OPERACIONES
//-- CLASS DIGIT Y OPERATION

digit = document.getElementsByClassName("digit")
operation = document.getElementsByClassName("operation")

for (i=0; i<digit.length; i++){
  digit[i].onclick = (ev) => {
    if (display.innerHTML == "0"){
      display.innerHTML = ev.target.value;
    }else{
      display.innerHTML += ev.target.value;
    }
  click.play();
  }
}


for (i=0; i<operation.length; i++){
  operation[i].onclick = (ev) => {
    if (display.innerHTML == "0"){
      display.innerHTML = ev.target.value;
    }else{
      display.innerHTML += ev.target.value;
    }
    click.play();
  }
}


//-- Borra ultimo caracter introducido y de la operacion tmb.
DELETE.onclick = () => {
  if (display.innerHTML == "0") {
    display.innerHTML = "0";
  }else if (display.innerHTML == "") {
    display.innerHTML = "0";
  }else{
    display.innerHTML = display.innerHTML.slice(0,-1)
  }
  click.play();}

//-- Evaluar la expresion
equal.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
  click.play();}

//-- Poner a cero la expresion
CLEAR.onclick = () => {
  display.innerHTML = "0";
  click.play();
}

//-- Raiz cuadrada en la expresion
sqrt.onclick = () => {
  display.innerHTML = Math.sqrt(display.innerHTML);
  click.play();
}





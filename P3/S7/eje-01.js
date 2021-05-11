//-- Boton normal
const button = document.getElementById("button");
const button_test = document.getElementById("button-test");

//-- Checkbox
const c1 = document.getElementById("checkbox1");
const c2 = document.getElementById("checkbox2");
const c1_test = document.getElementById("c1_test");
const c2_test = document.getElementById("c2_test");

//-- Botones radio
const r1 = document.getElementById("radio1");
const r2 = document.getElementById("radio2");
const r3 = document.getElementById("radio3");
const r4 = document.getElementById("radio4");
const r_disp = document.getElementById("radio_display");

//-- Boton normal
button.onclick = () => {
    //-- Cambiar de color el texto
    if (button_test.style.color == "") {
        button_test.style.color = "yellow";
    } else {
        button_test.style.color = "";
    }
}

//---- Botones checkbox
c1.onchange = () => {
    if (c1.checked) {
        c1_test.style.color = "orange";
    } else {
        c1_test.style.color = "";
    }
}

c2.onchange = () => {
    if (c2.checked) {
        c2_test.style.color = "blue";
    } else {
        c2_test.style.color = "";
    }
}

//-- Botones radio

r1.onchange = () => {
    r_disp.innerHTML = "primera opcion";   
}

r2.onchange = () => {
    r_disp.innerHTML = "segunda opcion";   
}

r3.onchange = () => {
    r_disp.innerHTML = "tercera opcion";   
}

r4.onchange = () => {
    r_disp.innerHTML = "cuarta opcion";   
}
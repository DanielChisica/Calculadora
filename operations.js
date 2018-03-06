var screen = document.getElementById("screen");
var numclick = function () {
    if(screen.getAttribute("value")==0){
        screen.setAttribute("value",this.textContent);
    }else{
        screen.setAttribute("value",screen.getAttribute("value") + this.textContent);
    }
};
var btnNumbers = document.getElementsByClassName("btn-num");


for (var i = 0; i < btnNumbers.length; i++) {
    btnNumbers[i].onclick = numclick;
}

var memory = 0;
var lastOperator = "";

/**
var add = function () {
    memory += Number(screen.getAttribute("value"));
}

var subtract = function () {
    memory -= Number(screen.getAttribute("value"));
}

var multiply = function () {
    memory *= Number(screen.getAttribute("value"));
}

var divide = function () {
    memory /= Number(screen.getAttribute("value"));
}
*/



document.getElementById("op:+").onclick = function (){

    memory += Number(screen.getAttribute("value"));
    screen.setAttribute("value", 0);
    lastOperator = "+";
}

document.getElementById("op:-").onclick = function () {
    memory -= Number(screen.getAttribute("value"));
    screen.setAttribute("value", 0);
    lastOperator = "-";
}

document.getElementById("op:*").onclick = function () {
    memory *= Number(screen.getAttribute("value"));
    screen.setAttribute("value", 0);
    lastOperator = "*";
}

document.getElementById("op:/").onclick = function () {
    memory /= Number(screen.getAttribute("value"));
    screen.setAttribute("value", 0);
    lastOperator = "/";
}

document.getElementById("equal").onclick = function () {
    switch (lastOperator) {
        case "+":
            memory += Number(screen.getAttribute("value"))-cache;
            lastOperator = "";
            break;

        case "-":
            memory -= Number(screen.getAttribute("value"));
            lastOperator = "";
            break;

        case "*":
            memory *= Number(screen.getAttribute("value"));
            lastOperator = "";
            break;

        case "/":
            memory /= Number(screen.getAttribute("value"));
            lastOperator = "";
            break;

    }

    screen.setAttribute("value",memory);
};

document.getElementById("clear").onclick = function () {
    memory = 0;
    screen.setAttribute("value",0);
};

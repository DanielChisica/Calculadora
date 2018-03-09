/**
 * @file Working with Tags
 * @author Daniel Jiménez Chísica <djimenez4223@universidadean.edu.co>
 * @version 0.1
 */

/**
 * Gets the text box in the html file that represents the screen
 */
var screen = document.getElementById("screen");

/**
 * Gets the text box in the html file that represents the history screen
 */
var historial = document.getElementById("history");

/**
 * This variable defines a function for each number that calculator has
 */
var numclick = function () {
    if (screen.getAttribute("value") == 0) {
        screen.setAttribute("value", this.textContent);
    } else {
        screen.setAttribute("value", screen.getAttribute("value") + this.textContent);
    }
};

/**
 * Gets all the numbers defined by the class btn-num
 */
var btnNumbers = document.getElementsByClassName("btn-num");
var record = "";

/**
 * Assigns a function for each number button
 */
for (var i = 0; i < btnNumbers.length; i++) {
    btnNumbers[i].onclick = numclick;
}

var memory = 0;
var lastOperator = "";



/**
 * Contains the logic of the sum
 */
document.getElementById("op:+").onclick = function () {

    if (lastOperator == "=") {
        record += " + ";

    } else {
        record += Number(screen.getAttribute("value")) + " + ";
    }

    historial.setAttribute("value", record);

    if (Number(screen.getAttribute("value")) !== 0 && lastOperator !== "=") {
        memory += Number(screen.getAttribute("value"));
    }
    screen.setAttribute("value", 0);



    lastOperator = "+";



}

/**
 * Generates the subtraction operation
 */
document.getElementById("op:-").onclick = function () {


    if (lastOperator == "=") {
        record += " - ";

    } else {
        record += Number(screen.getAttribute("value")) + " - ";
    }

    historial.setAttribute("value", record);

    lastValue = Number(screen.getAttribute("value"));

    if (memory !== Number(screen.getAttribute("value"))) {
        if (memory != 0) {
            memory -= Number(screen.getAttribute("value"));
        } else {
            memory = Number(screen.getAttribute("value"));
        }
    }
    screen.setAttribute("value", 0);
    lastOperator = "-";

}

/**
 * Generates the multiplication operation
 */
document.getElementById("op:*").onclick = function () {
    if (lastOperator == "=") {
        record += " * ";


    } else {
        record += Number(screen.getAttribute("value")) + " * ";
    }

    historial.setAttribute("value", record);


    if (Number(screen.getAttribute("value")) !== 0) {
        if (memory == 0) {
            memory = 1;
        }
        if (lastOperator !== "=") {
            memory *= Number(screen.getAttribute("value"));
        }

    }
    screen.setAttribute("value", 0);
    lastOperator = "*";
}

/**
 * Sets the division operation
 */
document.getElementById("op:/").onclick = function () {
    if (lastOperator == "=") {
        record += " / ";

    } else {
        record += Number(screen.getAttribute("value")) + " / ";
    }

    historial.setAttribute("value", record);

    if (Number(screen.getAttribute("value")) !== 0) {
        if (memory == 0) {
            memory = Number(screen.getAttribute("value"));
        } else {
            if (lastOperator !== "=") {
                memory /= Number(screen.getAttribute("value"));
            }
        }
    }
    screen.setAttribute("value", 0);
    lastOperator = "/";
}

/**
 * Gives the result of an  previous operation
 */
document.getElementById("equal").onclick = function () {

    switch (lastOperator) {
        case "+":
            memory += Number(screen.getAttribute("value"));
            lastOperator = "=";
            break;

        case "-":
            memory -= Number(screen.getAttribute("value"));
            lastOperator = "=";
            break;

        case "*":
            memory *= Number(screen.getAttribute("value"));
            lastOperator = "=";
            break;

        case "/":
            memory /= Number(screen.getAttribute("value"));
            lastOperator = "=";
            break;
    }
    record += Number(screen.getAttribute("value")) + " = " + memory + "\n";
    historial.setAttribute("value", record);
    screen.setAttribute("value", memory);

};

/**
 * Cleans the calculator memory
 */
document.getElementById("clear").onclick = function () {
    memory = 0;
    screen.setAttribute("value", 0);
    record = "";
    historial.setAttribute("value", 0);
};

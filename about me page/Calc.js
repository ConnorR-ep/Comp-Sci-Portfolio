var button = document.getElementById("submitButton");

button.addEventListener("click", doMath);
 


function doMath() {
if  (document.getElementById("DropdownMenu1").value == "+"){
    var num1 = document.getElementById('Number1').value;

    var num2 = document.getElementById('Number2').value;

    var answer = parseInt(num1) + parseInt(num2);

    document.getElementById('Answer').innerHTML = answer;

    }

}



var button = document.getElementById("submitButton");

button.addEventListener("click", doMath2);

function doMath2() {
if  (document.getElementById("DropdownMenu1").value == "-"){
    var num1 = document.getElementById('Number1').value;

    var num2 = document.getElementById('Number2').value;

    var answer = parseInt(num1) - parseInt(num2);

    document.getElementById('Answer').innerHTML = answer;

    }

}

var button = document.getElementById("submitButton");

button.addEventListener("click", doMath3);

function doMath3() {
if  (document.getElementById("DropdownMenu1").value == "x"){
    var num1 = document.getElementById('Number1').value;

    var num2 = document.getElementById('Number2').value;

    var answer = parseInt(num1) * parseInt(num2);

    document.getElementById('Answer').innerHTML = answer;

    }

}


var button = document.getElementById("submitButton");

button.addEventListener("click", doMath4);

function doMath4() {
if  (document.getElementById("DropdownMenu1").value == "Ã·"){
    var num1 = document.getElementById('Number1').value;

    var num2 = document.getElementById('Number2').value;

    var answer = parseInt(num1) / parseInt(num2);

    document.getElementById('Answer').innerHTML = answer;

    }

}

var button = document.getElementById("submitButton");

button.addEventListener("click", doMath5);

function doMath5() {
if  (document.getElementById("DropdownMenu1").value == "^"){
    var num1 = document.getElementById('Number1').value;

    var num2 = document.getElementById('Number2').value;

    var answer = Math.pow(parseInt(num1), parseInt(num2));

    document.getElementById('Answer').innerHTML = answer;

    }

}


var button = document.getElementById("submitButton");

button.addEventListener("click", doMath6);

function doMath6() {
if  (document.getElementById("DropdownMenu1").value == "%"){
    var num1 = document.getElementById('Number1').value;

 var num2 = document.getElementById('Number2').value;
 
    var answer = parseInt(num1) / 100;

    document.getElementById('Answer').innerHTML = answer;

    }

}

var button = document.getElementById("submitButton");

button.addEventListener("click", doMath7);

function doMath7() {
if  (document.getElementById("DropdownMenu1").value == "Pi"){
    var num1 = document.getElementById('Number1').value;

 var num2 = document.getElementById('Number2').value;
 
    var answer = parseInt(num1) * 3.141592653589793;

    document.getElementById('Answer').innerHTML = answer;

    }

}
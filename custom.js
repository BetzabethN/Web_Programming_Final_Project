// NARVAEZ BETZABETH 2018106117

//get values of inputs and put into variables

var f_submit = document.getElementById("first_submit")

f_submit.onclick = function () {
    var apple_qu = document.getElementById("apple_q").value;
    var orange_qu = document.getElementById("orange_q").value;
    var banana_qu = document.getElementById("banana_q").value;
    var watermelon_qu = document.getElementById("watermelon_q").value;

    document.getElementById("o_apple").innerText = apple_qu;
    document.getElementById("o_orange").innerText = orange_qu;
    document.getElementById("o_banana").innerText = banana_qu;
    document.getElementById("o_watermelon").innerText = watermelon_qu;

}



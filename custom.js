// NARVAEZ BETZABETH 2018106117

//DID NOT WORK T-T
//get values of inputs and put into variables

//var f_submit = document.getElementById("first_submit")

//f_submit.onclick = function () {
   // localStorage["apple_qu"] = document.getElementById("apple_q").value;
   // localStorage["orange_qu"] = document.getElementById("orange_q").value;
   // localStorage["banana_qu"] = document.getElementById("banana_q").value;
   // localStorage["watermelon_qu"] = document.getElementById("watermelon_q").value;

   // document.getElementById("o_apple").innerText = localStorage["apple_qu"];
   // document.getElementById("o_orange").innerText = localStorage["orange_qu"];
   // document.getElementById("o_banana").innerText = localStorage["banana_qu"];
   // document.getElementById("o_watermelon").innerText = localStorage["watermelon_qu"];

//}

var apple_qu = document.getElementById("apple_q").value;
var orange_qu = document.getElementById("orange_q").value;

function mouseDown(e) {
    e = e || window.event;
    switch (e.which) {
        case 1:
            apple_qu = applq + 1;
            break;
        case 2: break;
        case 3:
            apple_qu = apple_qu - 1;
            break;
    }
}

function f1() {
    //make the text in Uppercase
    document.getElementById("textarea1").style.textTransform = "uppercase";
}
  
function f2() {
    //make the text in Lowercase
    document.getElementById("textarea1").style.textTransform = "lowercase";
}

function f3() {
    //make the text bold
    document.getElementById("textarea1").style.fontWeight = "bold";
}
  
function f4() {
    //make the text italic
    document.getElementById("textarea1").style.fontStyle = "italic";
}
  
function f5() {
    //make the text alignment left
    document.getElementById("textarea1").style.textAlign = "left";
}
  
function f6() {
    //make the text alignment center
    document.getElementById("textarea1").style.textAlign = "center";
}
  
function f7() {
    //make the text alignment right
    document.getElementById("textarea1").style.textAlign = "right";
}
  
function f8() {
    //make the text capitalize
    document.getElementById("textarea1").style.textTransform = "capitalize";
}

function f9() {
    //make the text back to normal by removing all the methods applied 
    document.getElementById("textarea1").style.fontWeight = "normal";
    document.getElementById("textarea1").style.textAlign = "left";
    document.getElementById("textarea1").style.fontStyle = "normal";
    document.getElementById("textarea1").style.textTransform = "capitalize";
    document.getElementById("textarea1").value = " ";
}
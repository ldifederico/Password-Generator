//enable checkboxes
/* var lowercaseChars = " ";
var uppercaseChars = " ";
var numericChars = " ";
var specialChars = " ";

function checkCheckbox1(){
    var checkbox = document.getElementById(defaultCheck1);
    if (checkbox.checked == true){
        lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
    } else {
        lowercaseChars = "0";
    }
}

function checkCheckbox2(){
    var checkbox = document.getElementById(defaultCheck2);
    if (checkbox.checked == true){
        uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    } else {
        uppercaseChars = "0";
    }
}

function checkCheckbox3(){
    var checkbox = document.getElementById(defaultCheck3);
    if (checkbox.checked == true){
        numericChars = "0123456789"
    } else {
        numericChars = "0";
    }
}

function checkCheckbox4(){
    var checkbox = document.getElementById(defaultCheck4);
    if (checkbox.checked == true){
        specialChars = "!#$%&'()*+,-./:;=>?@[^_`{|}~"
    } else {
        specialChars = "0";
    }
}  */

alert("Enter desired password criteria. If no criteria are selected, all will be included.")
//generate random password
function generatePassword(){

    //select password length
    var length = document.getElementById("slider").value;
    
    // var values = lowercaseChars + uppercaseChars + numericChars + specialChars;
    var values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[^_`{|}~";
    var password = "";

    //loop
    for(var i = 0; i < length; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length )));
    }

    //display password
    document.getElementById("display").value = password; 

}

//set length display
document.getElementById("length").innerHTML = "Length: 69";

//set length using slider
document.getElementById("slider").oninput = function(){
    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
    else{
        document.getElementById("length").innerHTML = "Length: 1";
    }
}

//check if all criteria have been met


//copy to clipboard button
function copyPassword(){
    document.getElementById("display").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard!");
}


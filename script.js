//enable checkboxes
var lowercaseChars = " ";
var uppercaseChars = " ";
var numericChars = " ";
var specialChars = " ";

var checkbox1 = document.getElementById("defaultCheck1");
checkbox1.addEventListener("click", checkCheckbox1);

var checkbox2 = document.getElementById("defaultCheck2");
checkbox2.addEventListener("click", checkCheckbox2);

var checkbox3 = document.getElementById("defaultCheck3");
checkbox3.addEventListener("click", checkCheckbox3);

var checkbox4 = document.getElementById("defaultCheck4");
checkbox4.addEventListener("click", checkCheckbox4);

function checkCheckbox1(){
    console.log('we are here');
    if (checkbox1.checked){
        lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        console.log('we added the characters and the are ' + lowercaseChars);
    }
    else {
        lowercaseChars = ""
        console.log('empty string');
    }
        
}

function checkCheckbox2(){
    console.log('we are here');
    if (checkbox2.checked){
        uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        console.log('we added the characters and the are ' + uppercaseChars);
    }
    else {
        uppercaseChars = ""
        console.log('empty string');
    }
}

function checkCheckbox3(){
    console.log('we are here');
    if (checkbox3.checked){
        numericChars = "0123456789"
        console.log('we added the characters and the are ' + numericChars);
    }
    else {
        numericChars = ""
        console.log('empty string');
    }
}

function checkCheckbox4(){
    console.log('we are here');
    if (checkbox4.checked){
        specialChars = "!#$%&'()*+,-./:;=>?@[^_`{|}~"
        console.log('we added the characters and the are ' + specialChars);
    }
    else {
        specialChars = ""
        console.log('empty string');
    }
}  

alert("Enter desired password criteria. If no criteria are selected, password will not generate.")
//generate random password
function generatePassword(){

    //select password length
    var length = document.getElementById("slider").value;
    
    var values = lowercaseChars + uppercaseChars + numericChars + specialChars;
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

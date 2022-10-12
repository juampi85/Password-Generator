const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
"x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","¡","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","¿","°","/"];
let pass1 = document.getElementById('pass1');
let pass2 = document.getElementById('pass2');
let passBtn = document.getElementById('passBtn');
let passLength = document.getElementById('passLength');
let copyBtn1 = document.getElementById('copyBtn1');
let copyBtn2 = document.getElementById('copyBtn2');

let definitiveLength = 0;
passLength.focus()

function onlyNumbers(e){
    let num = /[^0-9]/gi;
    e.value = e.value.replace(num, "");
}

function passCleaner(){
    pass1.textContent = "";
    pass2.textContent = "";
}

function finalLength(){
    if (passLength.value === "") {
        return definitiveLength = 15;
    } else {
        return definitiveLength = passLength.value;
    }
}

function passGenerator(){
    finalLength();
    if (pass1.textContent === "" && pass2.textContent === "") {
        for (let i = 0; i < definitiveLength; i++){
            pass1.textContent += characters[Math.floor((Math.random()*characters.length))];
            pass2.textContent += characters[Math.floor((Math.random()*characters.length))];
        } 
    } else {
        passCleaner();
        passGenerator();
    }
    
}

passBtn.addEventListener ("click", passGenerator);
copyBtn1.addEventListener("click", copyPass1);
copyBtn2.addEventListener("click", copyPass2);


function copyPass1() {
    navigator.clipboard.writeText(pass1.textContent);
}

function copyPass2() {
    navigator.clipboard.writeText(pass2.textContent);
}
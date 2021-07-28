document.addEventListener("keydown", tecladoEvents);

function getDisplay(){
    return document.getElementById("expression");
}

function verifyClick(inputValue){
    if(inputValue === "AC"){
        clearDisplay();
    }else if(inputValue === "="){
        doMath(getDisplay().innerHTML);
    }else{
        updateDisplay(inputValue);
    }
}

function checkMath(text){
    text = String(text);
    if(text.length === 0){
        // Retirado o sinal de - por causa de números negativos.
        if(text == "+" || text == "*" || text == "/"){
            return;
        }
    }else{
        doMath(text);
    }
}

function doMath(text){
    console.log(text);
    text = String(text).replace("x", "*");
    let conta = eval(text);
    updateDisplay(conta, true);
}

function clearDisplay(){
    updateDisplay("", true);
}

function updateDisplay(number, all = false){
    if(typeof(number) == "undefined"){
        return;
    }
    // Modifica o display para toda expressão passada pelo primeiro argumento
    if(all){
        getDisplay().innerHTML = number;
        return true;
    }
    let text = getDisplay().innerHTML;
    if(text.length === 0){
        if(number == "+" || number =="x" || number == "/"){
            return;
        }
    }
    if(number == "+" || number == "-" || number == "x" || number == "/"){
        console.log(getDisplay().innerHTML.indexOf(number));
        if(getDisplay().innerHTML.indexOf("+") !== -1){
            return;
        }
        if(getDisplay().innerHTML.indexOf("-") !== -1){
            return;
        }
        if(getDisplay().innerHTML.indexOf("x") !== -1){
            return;
        }
        if(getDisplay().innerHTML.indexOf("/") !== -1){
            return;
        }
    }
    getDisplay().innerHTML = getDisplay().innerHTML+number;
}

function tecladoEvents(event){
    console.log(event.key);
    if(event.key === "Backspace"){
        updateDisplay(getDisplay().innerHTML.slice(0,-1), true);
        //getDisplay().innerHTML = getDisplay().innerHTML.slice(0,-1);
    }else if(event.key === "Enter"){
        if(getDisplay().innerHTML.length === 0){
            verifyClick("=");
        }
    }else if(event.key === "+" || event.key === "-" || event.key === "/"){
        updateDisplay(event.key);
    }else if(event.key === "*"){
        updateDisplay("x");
    }else if(Number(event.key)){
        updateDisplay(event.key);
    }
}


let num = document.getElementById("number");
let countP = document.getElementById("countPlus");
let countM = document.getElementById("countMinus");
let value = parseInt(num.innerHTML);
let valueCP = parseInt(countP.innerHTML);
let valueCM = parseInt(countM.innerHTML);

function increase() {
    value++;
    valueCP++;
    num.innerHTML = value;
    countP.innerHTML = valueCP;
}

function decrease() {
    value--;
    valueCM++;
    num.innerHTML = value;
    countM.innerHTML = valueCM;
}
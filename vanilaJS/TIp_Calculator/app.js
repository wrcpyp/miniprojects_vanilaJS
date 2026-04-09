function cal() {
    let billAmount = document.querySelector("#value").value;
    let percentage = document.querySelector("#percen").value;
    billAmount = parseFloat(billAmount);
    percentage = parseFloat(percentage);
    let total = document.querySelector("#totalValue");
    let result = parseFloat(billAmount + (billAmount * percentage / 100));
    total.innerHTML = result.toFixed(2);
}


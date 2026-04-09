function convert() {
    let irr = document.getElementById("irr").value;
    document.getElementById("usd").value = (irr * 0.00002381).toFixed(2);
}
function bgGreen() {
    document.body.style.backgroundColor = "green";
}

function bgRed() {
    document.body.style.backgroundColor = "red";
}

function bgBlue() {
    document.body.style.backgroundColor = "blue";
}

function bgRandom() {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

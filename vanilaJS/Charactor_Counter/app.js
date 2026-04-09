const getText = document.querySelector("#text")
const showText = document.querySelector(".showStringLen")

document.querySelector("#text").addEventListener("input", () => {
    let stringLength = getText.value.length
    showText.innerHTML = `String length : ${stringLength}`
})

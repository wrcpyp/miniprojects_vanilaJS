let rock = document.querySelector("#rock").innerHTML
let paper = document.querySelector("#paper").innerHTML
let scissors = document.querySelector("#scissors").innerHTML
let love = document.querySelector("#love").innerHTML
let result = document.querySelector(".result")
let myScoreEl = document.querySelector(".my-score")
let comScoreEl = document.querySelector(".com-score")
const rpsl = ["👊", "🖐", "✌️", "🤟"]

let myScore = 0
let comScore = 0

function comRandomAns(rpsl) {
    let comAns = Math.floor(Math.random() * rpsl.length)
    return rpsl[comAns]
}

function getRock() {
    let comAns = comRandomAns(rpsl)
    if (comAns == "👊") {
        result.innerHTML = "it's tie!"
    } else if (comAns == "🖐") {
        result.innerHTML = "You lose! Paper beats Rock!"
        comScore++
        comScoreEl.innerHTML = comScore
    } else if (comAns == "✌️") {
        result.innerHTML = "You win! Rock beats Scissors!"
        myScore++
        myScoreEl.innerHTML = myScore
    } else if (comAns == "🤟") {
        result.innerHTML = "You lose! Love beats Rock!"
        comScore++
        comScoreEl.innerHTML = comScore
    }
}

function getPaper() {
    let comAns = comRandomAns(rpsl)
    if (comAns == "👊") {
        result.innerHTML = "You win! Paper beats Rock!"
        myScore++
        myScoreEl.innerHTML = myScore
    } else if (comAns == "🖐") {
        result.innerHTML = "it's tie!"
    } else if (comAns == "✌️") {
        result.innerHTML = "You lose! Scissors beats Paper!"
        comScore++
        comScoreEl.innerHTML = comScore
    } else if (comAns == "🤟") {
        result.innerHTML = "You lose! Love beats Paper!"
        comScore++
        comScoreEl.innerHTML = comScore
    }
}

function getScissors() {
    let comAns = comRandomAns(rpsl)
    if (comAns == "👊") {
        result.innerHTML = "You lose! Rock beats Scissors!"
        comScore++
        comScoreEl.innerHTML = comScore
    } else if (comAns == "🖐") {
        result.innerHTML = "You win! Scissors beats Paper"
        myScore++
        myScoreEl.innerHTML = myScore
    } else if (comAns == "✌️") {
        result.innerHTML = "it's tie!"
    } else if (comAns == "🤟") {
        result.innerHTML = "You lose! Love beats Scissors!"
        comScore++
        comScoreEl.innerHTML = comScore
    }
}

function getLove() {
    let comAns = comRandomAns(rpsl)
    if (comAns == "👊") {
        result.innerHTML = "You win! Love beats Rock!"
        myScore++
        myScoreEl.innerHTML = myScore
    } else if (comAns == "🖐") {
        result.innerHTML = "You win! Love beats Paper!"
        myScore++
        myScoreEl.innerHTML = myScore
    } else if (comAns == "✌️") {
        result.innerHTML = "You win! Love beats Scissors!"
        myScore++
        myScoreEl.innerHTML = myScore
    } else if (comAns == "🤟") {
        result.innerHTML = "You win! Love beats Love! Your Love have more than computer XD!"
        myScore++
        myScoreEl.innerHTML = myScore
    }
}






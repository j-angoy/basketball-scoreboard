let homeScore = 0
let visitorScore = 0
let period = 1

homeEl = document.getElementById("home-score")
visitorEl = document.getElementById("visitor-score")
periodEl = document.getElementById("period")

function periodDown(){
    period -= 1
    periodEl.textContent = period
}

function periodUp(){
    period += 1
    periodEl.textContent = period
}


function add1Home() {
    homeScore += 1
    homeEl.textContent = homeScore
}   

function add2Home() {
    homeScore += 2
    homeEl.textContent = homeScore
}   

function add3Home() {
    homeScore += 3
    homeEl.textContent = homeScore
}   

function add1Visitor() {
    visitorScore += 1
    visitorEl.textContent = visitorScore
}   

function add2Visitor() {
    visitorScore += 2
    visitorEl.textContent = visitorScore
}  

function add3Visitor() {
    visitorScore += 3
    visitorEl.textContent = visitorScore
}  
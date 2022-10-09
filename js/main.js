const canvas = document.getElementById("game")
const format = canvas.getContext("2d")

const ground = new Image()
ground.src = "style/img/ground.jpg"

const food = new Image()
food.src = "style/img/apple.png"

let box = 48;
let score = 0;

function drawField() {
	format.drawImage(ground, 0, 0)
}

let showField = setInterval(drawField, 100)

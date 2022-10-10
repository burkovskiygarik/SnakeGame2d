const canvas = document.getElementById("game")
const format = canvas.getContext("2d")

const ground = new Image()
ground.src = "style/img/ground.jpg"

const foodImg = new Image()
foodImg.src = "style/img/apple.png"

// const headSnake = new Image()
// headSnake.src = "style/img/snake.png"

let box = 50;
let score = 0;

let food = {
	x: Math.floor((Math.random() * 12 + 1)) * box,
	y: Math.floor((Math.random() * 10 + 1)) * box,
}

let snake = [];
snake[0] = {
	x:6*box,
	y:5*box,
}


function drawField() {
	format.drawImage(ground, 0, 0)

	format.drawImage(foodImg, food.x, food.y)

	for(let i = 0; i < snake.length; i++) {
		//format.drawImage(headSnake, 8*box, 250);
		format.fillStyle = "green";
		format.fillRect(snake[i].x, snake[i].y, box, box)
	}
	format.fillStyle = "white"
	format.font = "30px Arial"
	format.fillText(score, box*1.35, box*0.75)
}

let showField = setInterval(drawField, 100)


// Initialize canvas and context
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
var divBottom = canvas.getBoundingClientRect().top;

//change canvas dimentions
// ctx.canvas.width = window.innerWidth - 25;
// ctx.canvas.height = window.innerHeight - divBottom;
console.log(canvas.width);
// Set initial game state
let snake = [{ x: 10, y: 10 }];
let food = { x: 15, y: 15 };
let direction = "right";
let gameSpeed = 100;
let gameOver = false;

// Main game loop
function gameLoop() {
    if (gameOver) return;

    // Update game state
    moveSnake();
    checkCollision();

    // Render game
    render();

    // Repeat the loop
    setTimeout(gameLoop, gameSpeed);
}

// Move the snake
function moveSnake() {
    let head = { x: snake[0].x, y: snake[0].y };

    // Update head position based on direction
    switch (direction) {
        case "up":
            head.y--;
            break;
        case "down":
            head.y++;
            break;
        case "left":
            head.x--;
            break;
        case "right":
            head.x++;
            break;
    }

    // Add new head to the snake
    snake.unshift(head);

    // Check if snake eats the food
    if (head.x === food.x && head.y === food.y) {
        // Generate new food position
        food.x = Math.floor(Math.random() * canvas.width / 10);
        food.y = Math.floor(Math.random() * canvas.height / 10);
    } else {
        // Remove the tail if not eating food
        snake.pop();
    }
}

// Check for collisions
function checkCollision() {
    let head = snake[0];

    // Check if snake hits the walls
    if (head.x < 0 || head.x >= canvas.width / 10 || head.y < 0 || head.y >= canvas.height / 10) {
        gameOver = true;
        alert("Game Over!");
        return;
    }

    // Check if snake hits itself
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            gameOver = true;
            alert("Game Over!");
            return;
        }
    }
}

// Render the game
function render() {
    // Clear canvas
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw food
    ctx.fillStyle = "red";
    ctx.fillRect(food.x * 10, food.y * 10, 10, 10);

    // Draw snake
    ctx.fillStyle = "green";
    snake.forEach(segment => {
        ctx.fillRect(segment.x * 10, segment.y * 10, 10, 10);
    });
}

// Handle keyboard input
document.addEventListener("keydown", event => {
    switch (event.key) {
        case "ArrowUp":
            if (direction !== "down") direction = "up";
            break;
        case "ArrowDown":
            if (direction !== "up") direction = "down";
            break;
        case "ArrowLeft":
            if (direction !== "right") direction = "left";
            break;
        case "ArrowRight":
            if (direction !== "left") direction = "right";
            break;
    }
});

//Handle resizing
// window.addEventListener("resize", event => {
//     divBottom = canvas.getBoundingClientRect().top;

//     //change canvas dimentions
//     ctx.canvas.width = window.innerWidth - 25;
//     ctx.canvas.height = window.innerHeight - divBottom - 10;
// })

// Start the game loop
gameLoop();
// Initialize canvas and context
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
var divBottom = canvas.getBoundingClientRect().top;
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = (window.innerHeight - divBottom);

// Set initial game state
let snake = [{ x: 10, y: 10 }];
let food = { x: 15, y: 15 };
let direction = "right";
let gameSpeed = 100;
let gameOver = false;
let mobile = false;
let xDown = null;
let yDown = null;

function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }

function restart(){
    snake = [{ x: 10, y: 10 }];
    food = { x: 15, y: 15 };
    direction = "right";
    gameSpeed = 100;
    gameOver = false;
    mobile = false;
    xDown = null;
    yDown = null;
    gameLoop();
}

//check for mobile user
function isMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

    if (regex.test(navigator.userAgent)) {
        mobile = true;
    } 

    return;
}

function getTouches(evt){
    return evt.touches || evt.originalEvent.touches;
}
  
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
        on();
        return;
    }

    // Check if snake hits itself
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            gameOver = true;
            on();
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

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};   

function handleTouchMove(evt) {
    if ( !xDown || !yDown ) {
         return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                         
    if ( Math.abs(xDiff) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            if (direction !== "right") direction = "left";
        } else {
            if (direction !== "left") direction = "right"; 
        }                       
    } else {
        if ( yDiff > 0 ) {
            if (direction !== "down") direction = "up";
        } else { 
            if (direction !== "up") direction = "down";
        }                                                                 
    }
    
    /* reset values */
    xDown = null;
    yDown = null;                                             
}

function preventArrowKeyScrolling(event) {
    // Check if the pressed key is an arrow key (ArrowUp, ArrowDown, ArrowLeft, ArrowRight)
    if (event.key.startsWith('Arrow')) {
        // Prevent the default scrolling behavior for arrow keys
        event.preventDefault();
    }
}

isMobile();

if(mobile){
    // Handle touch input
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove);
} else {
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
}

document.addEventListener('keydown', preventArrowKeyScrolling);
// Start the game loop

gameLoop();


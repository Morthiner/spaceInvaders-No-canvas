const grid = document.querySelector('.grid');
let currentShooterIndex = 202;
let width = 15;

// 5-14: The square's indexes are used as coordinates for the characters use as reference
    // As we chose a 300x300 grid and 20x20 sprites we get 15x15 = 225 squares with indexes varying from 0 to 224 
for(let i = 0; i < 225; i++){
    const square = document.createElement('div')
    grid.appendChild(square)
    const text = document.createTextNode(`${i}`)
    square.appendChild(text)
}

const squares = Array.from(document.querySelectorAll('.grid div'))

// 17-29: The function draw() is used to draw the enemy sprites based on the indexes from the alienInvaders array
const alienInvaders = [
    0,1,2,3,4,5,6,7,8,9,
    15,16,17,18,19,20,21,22,23,24,
    30,31,32,33,34,35,36,37,38,39
]

function draw() {
    for(let i = 0; i < alienInvaders.length; i++){
        squares[alienInvaders[i]].classList.add('invaders')
    }
}

draw()

// 36-64: We make the shooter sprite move by removing and adding the .shooter class everytime the event is triggered
    // Every time the event is triggered the currentShooterIndex value is refreshed based on the event key pressed...
        // ...and on the switch configuration 
    // The sprite stays on the grid thanks to the conditionals (41,46,51,56) that check whether the indexes are...
        // ... within a certain numerical interval 
squares[currentShooterIndex].classList.add('shooter')

function moveShooter(e) {
    squares[currentShooterIndex].classList.remove('shooter')
    switch(e.key){
        case "ArrowLeft":
            if(currentShooterIndex % width !== 0) {
                currentShooterIndex -= 1;
            };
            break;
        case "ArrowRight":
            if(currentShooterIndex % width < width - 1) {
                currentShooterIndex += 1;
            };
            break;
        case "ArrowUp":
            if(currentShooterIndex < 0 || currentShooterIndex > 14){
                currentShooterIndex -= 15;
            };
            break;
        case "ArrowDown":
            if(currentShooterIndex < 210 || currentShooterIndex > 224){
                currentShooterIndex += 15;
            }
    }
    squares[currentShooterIndex].classList.add('shooter')
}

document.addEventListener('keydown', moveShooter)


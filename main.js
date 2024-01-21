const player = document.querySelector("#player")
const obs = document.querySelector(".obs")


const screenW = 500;
const screenH = 300;

let playerX = 0;
const playerW = 50;
const playerH = 50;

const playerSpeed = 3

let direction = "stop"
let pressed;

let space_pressed;

let obsX = 250;
let obsY = 0;

const playerBottom = () => parseInt(getComputedStyle(player).bottom)

window.onkeydown = (e) => {
    if (e.code === "Space") {
        console.log(player.style.bottom)
        space_pressed = true

    } else if (e.code === "KeyD") {
        pressed = e.code
        direction = "right"
    } else if (e.code === "KeyA") {
        pressed = e.code
        direction = "left"
    }
}

window.onkeyup = e => {
    if (e.code == pressed) {
        direction = "stop"
    } else if (e.code === "Space" && space_pressed) {
        space_pressed = false
    }
}

directionInterval = setInterval(() => {
    if (direction === "right") {
        if (playerX + playerW + playerSpeed <= screenW) {
            playerX += playerSpeed
            player.style.left = `${playerX}px`
        }
    } else if (direction === "left") {
        if (playerX - playerSpeed >= 0) {
            playerX -= playerSpeed
            player.style.left = `${playerX}px`
        }
    }

    if (space_pressed) {
        if (parseInt(getComputedStyle(player).bottom) === 0) {
            player.style.animation = "0.5s ease jump"

            setTimeout(() => {
                player.style.animation = 0
            }, 510)
        }
    }

    // console.log(obsY + 25 < playerBottom())
    // console.log(obsY > playerBottom() + playerH)

    if (obsX < (playerX + playerW) && (obsX + 25) > playerX){
        // if(obsY > (playerBottom() + playerH) && (obsY + 25) < playerBottom()){
        if (playerBottom() < obsY + 25){
            obs.style.background = "blue"
        }
    }

    
    obs.style.left = `${obsX}px`
    obs.style.bottom = `${obsY}px`

}, 10)


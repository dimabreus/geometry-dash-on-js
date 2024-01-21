import obstacles from "./levels/compiler.js";

const player = document.querySelector("#player")

const screenW = 500;
const screenH = 300;

let playerX = 150;
const playerW = 50;
const playerH = 50;

const playerSpeed = 1

let direction = "stop"
let pressed;

let space_pressed;

let directionInterval;

const fps = 144;

const playerBottom = () => parseInt(getComputedStyle(player).bottom)

window.onkeydown = (e) => {
    if (e.code === "Space") {
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


    obstacles.forEach(el => {

        // let el = {
        //     left: 50 + 12.5,
        //     right: 50 + 12.5 + 25,
        //     top: 0 + 40,
        //     bottom: 0,
        //     w: 25,
        //     h: 40,
        //     style: document.querySelector(".obs-1").style,
        //     elem: document.querySelector(".obs-1")
        // }
        if (Math.min(el.left, el.right) < Math.max(playerX, playerX + playerW) &&
            Math.max(el.left, el.right) > Math.min(playerX, playerX + playerW) &&
            Math.min(el.top, el.bottom) < Math.max(playerBottom() + playerH, playerBottom()) &&
            Math.max(el.top, el.bottom) > Math.min(playerBottom() + playerH, playerBottom())) {
            el.style.background = "blue"
        }
    })



    // obstacles.forEach((el, i) => {
    //     el.left -= 3;
    //     el.style = el.elem.style;

    //     el.right = el.left + el.w

    //     if (el.left < -25) {
    //         document.querySelector("#canvas").removeChild(el.elem)
    //         obstacles.splice(i, 1)
    //     }
    // })


    // obstacles.forEach(el => {
    //     el.style.left = `${el.left}px`
    //     el.style.bottom = `${el.bottom}px`
    // })


}, 1000 / fps)


import obstacles from "./levels/compiler.js";

jumper_audio.play()

const player = document.querySelector("#player");
const canvas = document.querySelector("#canvas");
const spaceBtn = document.querySelector("#space");
const aBtn = document.querySelector("#btnA");
const dBtn = document.querySelector("#btnD");

const screenW = 500;
const screenH = 300;

let playerX = 150;
const playerW = 50;
const playerH = 50;

const playerSpeed = 3

window.direction = "stop";
window.pressed;

window.space_pressed;

const fps = 144;

const checkCollision = (element1, element2, margin = -1) => {
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();

    return !(
        rect1.right + margin < rect2.left ||
        rect1.left - margin > rect2.right ||
        rect1.bottom + margin < rect2.top ||
        rect1.top - margin > rect2.bottom
    );
}

const changeIcon = (icon) => {
    if (icon === "icon_01") {

    } else if (icon === "icon_02") {

    }
}



let lastFrameTimeMs = 0;

const gameLoop = (timestamp) => {
    const delta = timestamp - lastFrameTimeMs;
    lastFrameTimeMs = timestamp;

    if (window.direction === "right") {
        if (playerX + playerW + playerSpeed <= screenW) {
            playerX += playerSpeed
            player.style.left = `${playerX}px`
        }
    } else if (window.direction === "left") {
        if (playerX - playerSpeed >= 0) {
            playerX -= playerSpeed
            player.style.left = `${playerX}px`
        }
    }

    if (window.space_pressed) {
        if (parseInt(getComputedStyle(player).bottom) === 0) {
            player.style.animation = "0.5s ease jump"

            setTimeout(() => {
                player.style.animation = ""
            }, 510)
        }
    }


    obstacles.forEach(el => {
        if (checkCollision(player, el.elem.childNodes[0])) {
            el.style.background = "blue"
        }
    })



    obstacles.forEach((el, i) => {
        el.left -= 500 * (delta / 1000);
        el.style = el.elem.style;

        el.right = el.left + el.w
        el.top = el.bottom + el.h

        if (el.left < -25) {
            canvas.removeChild(el.elem)
            obstacles.splice(i, 1)
        }
    })


    obstacles.forEach(el => {
        el.style.left = `${el.left}px`
        el.style.bottom = `${el.bottom}px`
    })

    // document.body.style.setProperty('--playerCurrentY', '250px ');

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
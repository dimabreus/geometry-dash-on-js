import obstacles from "./levels/compiler.js";
import { blocks } from "./levels/compiler.js"
import { checkCollision, checkIsOnTop } from "./js/functions.js";

// jumper_audio.play()

const player = document.querySelector("#player");
const canvas = document.querySelector("#canvas");

const screenW = 700;
const screenH = 500;

let playerX = 150;
const playerW = 50;
const playerH = 50;

let onBlock = false;

const playerSpeed = 500 // px/s
const gameSpeed = 500 // px/s

let groundY = 0;

window.direction = "stop";

let lastFrameTimeMs = 0;

const gameLoop = (timestamp) => {
    const delta = timestamp - lastFrameTimeMs;
    lastFrameTimeMs = timestamp;
    const currentPlayerSpeed = playerSpeed * (delta / 1000);
    const currentGameSpeed = gameSpeed * (delta / 1000);

    if (window.direction === "right") {
        if (playerX + playerW + currentPlayerSpeed <= screenW) {
            playerX += currentPlayerSpeed
        } else {
            playerX = screenW - playerW
        }
        player.style.left = `${playerX}px`
    } else if (window.direction === "left") {
        if (playerX - currentPlayerSpeed >= 0) {
            playerX -= currentPlayerSpeed
        } else {
            playerX = 0;

        }
        player.style.left = `${playerX}px`
    }

    if (window.space_pressed) {
        if (parseInt(getComputedStyle(player).bottom) === groundY) {
            player.style.animation = "0.5s ease jump"

            setTimeout(() => {
                player.style.animation = ""
            }, 510)
        }
    }

    obstacles.forEach((el, i) => {
        if (checkCollision(player, el.elem.childNodes[0])) {
            el.style.background = "blue" // Событие смерти
        }

        el.left -= currentGameSpeed;
        el.style = el.elem.style;

        el.right = el.left + el.w;
        el.top = el.bottom + el.h;

        if (el.left < -25) {
            canvas.removeChild(el.elem);
            obstacles.splice(i, 1);
        } else {
            el.style.left = `${el.left}px`;
            el.style.bottom = `${el.bottom}px`;
        }
    })

    blocks.forEach(el => {
        if (checkIsOnTop(player, el.elem)) {
            groundY = el.top;
            player.style.bottom = `${el.top}px`;
            el.style.background = "red";
            onBlock = true;
        } else {
            if (onBlock) {
                if (!player.style.animation && parseInt(getComputedStyle(player).bottom) === el.top) {
                    player.style.animation = "0.25s ease fall";

                    setTimeout(() => {
                        player.style.animation = "";
                    }, 260)
                }

                onBlock = false
            } else if (checkCollision(player, el.elem)) {
                el.style.background = "blue";
            }

            groundY = 0;
            player.style.bottom = `${groundY}px`;

            if (el.style.background !== "blue") {
                el.style.background = "green";
            }
        }
    })

    document.body.style.setProperty('--playerCurrentY', `${groundY}px`);

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
const spaceBtn = document.querySelector("#space");
const aBtn = document.querySelector("#btnA");
const dBtn = document.querySelector("#btnD");

window.onkeydown = e => {
    if (e.code === "Space") {
        window.space_pressed = true
    } else if (e.code === "KeyD") {
        window.pressed = e.code
        window.direction = "right"
    } else if (e.code === "KeyA") {
        window.pressed = e.code
        window.direction = "left"
    }
}

window.onkeyup = e => {
    if (e.code == window.pressed) {
        window.direction = "stop"
    } else if (e.code === "Space" && window.space_pressed) {
        window.space_pressed = false
    }
}

spaceBtn.onmousedown = () => {
    if (!window.space_pressed) {
        window.space_pressed = true
    }
}

spaceBtn.onmouseup = () => {
    if (window.space_pressed) {
        window.space_pressed = false
    }
}

aBtn.onmousedown = () => {
    window.pressed = "keyA"
    window.direction = "left"
}

aBtn.onmouseup = () => {
    window.direction = "stop"
}

dBtn.onmousedown = () => {
    window.pressed = "keyD"
    window.direction = "right"
}

dBtn.onmouseup = () => {
    window.direction = "stop"
}


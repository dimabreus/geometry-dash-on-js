import a from "./levels.js";

let obstacles = [];
let blocks = [];

let newDiv, col;

const canvas = document.querySelector("#canvas");

a.forEach((el, i) => {
    newDiv = document.createElement("div");

    if (el.type === "block") {
        newDiv.classList.add("block")
        newDiv.classList.add(`block${i}`)

        blocks.push({
            left: el.x,
            right: el.x + 50,
            top: el.y + 50,
            bottom: el.y,
            w: 50,
            h: 50,
            style: newDiv.style,
            elem: newDiv
        })

        newDiv.style.left = `${el.x}px`;
        newDiv.style.bottom = `${el.y}px`;


        canvas.appendChild(newDiv);
    } else {
        newDiv.classList.add("obs")
        newDiv.classList.add(`obs${i}`)

        obstacles.push({
            left: el.x + 12.5,
            right: el.x + 12.5 + 25,
            top: el.y + 40,
            bottom: el.y,
            w: 25,
            h: 40,
            rotate: el.rotate,
            style: newDiv.style,
            elem: newDiv
        })

        newDiv.style.left = `${el.x}px`;
        newDiv.style.bottom = `${el.y}px`;

        newDiv.style.transform = `rotate(${el.rotate}deg)`

        canvas.appendChild(newDiv);

        col = document.createElement("div");

        newDiv.appendChild(col)
    }

})


export default obstacles
export { blocks }

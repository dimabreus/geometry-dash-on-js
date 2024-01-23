import obstacles from "./levels/compiler.js";
import { blocks } from "./levels/compiler.js"

// jumper_audio.play()

console.log(`
+++++++******+++====------------------------------------======+++++++++++++=====-------------===+++++**
++++++********+++====-------------------------------------=======+++++++++=======------------===++++++*
++++++********+++====-------------------------------------===========++++++======------------====+++++*
++++++********+++====------------------------------------============+++++++======-----------====+++++*
++++++********+++=====--=============------------------=============++++++++++=====-------======++++++*
==++++********++++=====================-==-========================+++++++++++++++=========++++++++++**
===+++********+++++====================--:::-=====================+++++++++=+++++++++++++**************
====++*********+++++===========+++++++=.:==-::=+++++++++++++++++++++++==-::=***************************
===++++********+++++++====++++++++++++=.------.-==+++++++++++++++++==:..:-==***************************
===++++********+++++++++++++++++++++++-.:------:::---::::::--==++=:.:-===::=***************************
+++++++********+++++++++++++++++++++++-.:--=====-:-++-==++--:::::.:-=====-:=***************************
++++++********++++++++++++++++++++++++:.-=========+*#+*###*+**=--========-:+***************************
+++++******+++++++++++++++++++++++++==. =++====+++*##++%%#**##+=======+++::+***************************
++++*******+++++++++++++++++++++++++=: .=*+==++****#%*#%%#*#%**++=====++=::+*****************##########
************++++++++++++++++++***+++-. :=**++******%%%#%%#%%#****++===++=:.-+**************############
***************+++++***************=:  -+********+*%*#%%%%*##*****++++**=:.:=*####*********############
***********************************=: .==++++++*#+*%+*###+=%*++*++*+++++=:.:+*########****#############
**********************************+-. .=+++++++*#*+*++**+==#=***++++++===:.:-+*########################
************************#########*+-. :++****+*####==++==:-*##*==+=+++===:..:-*########################
****#####************############*=-. -*#%%#+-*####+-===-:*##**++*+++++==:.:=*#########################
**#########*********##############+=: -#%#*##+=*###*===--=##%##-=#%%#**+=..-*##########################
***########*********#############**=: .+*++*###+==##+====#*=++=+**+*#%#*=.:=*##########################
***#########*******##############*+-:  -+*####*+==+#*+=+*++=+*##*+==+*#*:.-+*##########################
****############*################**+-. .+%##*+=-==-=###*--====****+====:.:=*****#######################
****##############################*+=:. .=#*++====-=+#*=--=-:-==+#%#+=:..:=********####################
****#############################*+*+=-.  :++++====+++++=-----==++**=.  .-+***********#################
****###########################****+==-:.  .-============----=======:  .:=+*************###############
*****+*#########################***+=+-.   .:==========----------=++-.  .:=+*************##############
***=   =########################**+**=:.   :-=============------=+++=.   .:-+************##############
***+. .+%%%%###################**+*+=-:   :-============------=+**++=:.   .:-=**********###############
*#+--=#%%%%+--+################***++=-.  :=++=======--------+++**++++=:    .:-=+**#####################
**-::-#%%%#-:::+################****=-.  :++++===--------=+++**+++++++=:.   .:-=+*#####################
+++++##%%#+:..-#####+-:=#########**++-.  :=+***+==-----==+**+++++++++++=-.   .:-=*#####################
-=*##**#%*:...=#####-...+########***=-.  .-=++**+=----=+*++++++++*+++++++-:. ..:-+*####################
-=+****##*-:..:-*###*=-+%%%%######**+-:  .-++++++=---=+++++++++++++******+=:....:=+*###################
-=-::-+++=-::.  -##*:::=%%%%%%#####*+-:   -+**++===--=====++**************+=:...:-=*###################
=-::::-=-::..   -##*:..=%###%%%%###*+-.   -+***+==========++*####****###**++=:..::-+**#################
==-:::---:::::.:++*#***##===*%%%%###+-:.  .=++++++========+++**********##**++=:..:-=+*########*********
==--:-===-:-==-::::+#**+-::-+%%%%%##*+-.   -++***++=======+**********####***++-...:-=*#######**********
===---====-==-...::=**+-:::*########*+=:   -+*####++=====+*%%%%#%%##%%%%#***++=:..:-=+#######**********
+++====-====-:...:-==+====+**********+=:. .-+**##%#+=====+*%####**###%%##****++-..:-=+#########********
+++***+=:-=-:-::::--====++++---=+++++++-.  =+***#%%#++===+#%#**++++**#%%#*****+=:.:-+*#%%%%######******
==+++*+--=+=-===-::-==--===-::::========:  =*######%%*+=++#%#*+*+**#%%%#******+=:::=+#%%%%%%%%#########
==--=++++++*#***+---==-----::::-----====-. =*#######%#*++*####*####%%%%#*******=:::=+#%%%%%%%%%%%######
==---=====+**==+++===----..--------------. -*#%%%%%%%%#***#%%%%##%%%%%%#*******=:::-+*#%%%%%%%%%%%%###%
=--=====------=-======-------------------. .=++++++#%%#***%%%%%%%%%%%%#*******+=::-=+*#################
+=+===-------=---------------------------: .=++++===+##****++***##%###********+=---=+*#################
+++==++=-----==------::::::::------------:  =***+=====+++++++++*######*******+=--=++*******############
+*++++==--=+++++---==--==-::::::::::::::::. :++++++======++++****####*******+=--=+++********+++********
**+=-+=========-====--:+#*+-::--::......    .=+**++======++***######*++*****++---=++++++++++=======++++
**+==+++++---:----++++*#%%%#*+==---:....     -+***++=====+**********+=+*####*+=---=====================
*******+++=------:::-=*+#+**#+**===-----:.   :+****++++=+**##******+=--=*%%##**=::-===========------===
####**+***+=------:::::--------=**+--=++=:   .:-+**+++++=========+++=:..:+%%%##+-::====================
####******++=====+=-----::---::::=++===-=-  .:::-===++*=-----:::::-=**+++*#####*+--===--:::::::--------
##########*++++=+++==--------:--:::=+***=- .:-------=*#===-----:----#%%%%%%%####**++==-::::...........:
#########*******+**++======-====---:-=***+==+=+=====+#%+++====--===+#######*********++==-:.:...........
##########***####****=======++*+=----:-+####%%%%%%%%%%%%%%####**##*###########**#*****++====-:::.......
#########*###########*++++++=+**+=--::::-+*##%%%%%#####%%%%%%%##########%%%%############*****+=----=--:
########*+**###########*****++****+--------*##%%%%%##%%%%%%%%###################################*******
#############################*####*+=-==++=-+#%%%%%%%%%%%%%%######################################*****
##################%%%%%%%%%%%%%#####++++*#####%%%%%%%%%%%%####%#####%%%################################
###*******+++++++**##%%%%%%%%%%%%%%##****###%%%%%%%%%%%%%%%%%%%%%%%%%%%%#####################%%%%######
###****+++++=======++*##%%%%%%%%%%%%%###****##%%%%%%%%%%%%%%%%%%%%%%%%%%##################%%%%%%%%%%###
####**++++===========++**##%%%%%%%%%%#****####%%%%%%%%%%%%%%%%%%%%%%%%%##################%%%%%%%%%%%###
`)


const player = document.querySelector("#player");
const canvas = document.querySelector("#canvas");

const screenW = 500;
const screenH = 300;

let playerX = 150;
const playerW = 50;
const playerH = 50;

const playerSpeed = 3 // px/tick
const gameSpeed = 500 // px/s

let groundY = 0;

window.direction = "stop";

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

const checkIsOnTop = (element1, element2, margin = -1) => {
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();

    return (
        rect1.bottom + margin <= rect2.top &&
        !(rect1.right + margin < rect2.left ||
            rect1.left - margin > rect2.right ||
            rect1.top - margin > rect2.bottom)
    );
};


let lastFrameTimeMs = 0;
let onBlock = false;

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
        if (parseInt(getComputedStyle(player).bottom) === groundY) {
            player.style.animation = "0.5s ease jump"

            setTimeout(() => {
                player.style.animation = ""
            }, 510)
        }
    }


    obstacles.forEach(el => {
        if (checkCollision(player, el.elem.childNodes[0])) {
            el.style.background = "blue" // Событие смерти
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
        } else {
            el.style.left = `${el.left}px`
            el.style.bottom = `${el.bottom}px`
        }
    })

    blocks.forEach(el => {
        if (checkIsOnTop(player, el.elem)) {
            groundY = el.top
            player.style.bottom = `${el.top}px`
            el.style.background = "red"
            onBlock = true
        } else {
            if (onBlock) {
                console.log(parseInt(getComputedStyle(player).bottom) === el.top)
                console.log(!player.style.animation)
                console.log(123, parseInt(getComputedStyle(player).bottom) === el.top && !player.style.animation)
                if (!player.style.animation && parseInt(getComputedStyle(player).bottom) === el.top) {
                    console.log("Анимация запущена")
                    player.style.animation = "0.25s ease fall"

                    setTimeout(() => {
                        player.style.animation = ""
                    }, 260)
                }

                onBlock = false
            }
            else if (checkCollision(player, el.elem)) {
                el.style.background = "blue"
            }

            groundY = 0
            player.style.bottom = `${groundY}px`
            if (el.style.background !== "blue") {
                el.style.background = "green";
            }
        }
    })

    document.body.style.setProperty('--playerCurrentY', `${groundY}px`);

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
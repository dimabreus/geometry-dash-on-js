const changeDebug = (debug) => {
    if (debug === "1") {
        document.body.style.setProperty('--hitbox', 'unset')
    } else if (debug === "2") {
        document.body.style.setProperty('--hitbox', 'lightblue')
    }
}
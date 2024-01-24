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

export { checkCollision, checkIsOnTop }
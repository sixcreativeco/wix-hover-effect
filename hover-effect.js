document.addEventListener("DOMContentLoaded", function() {
const numPoints = 5;
let points = [];

document.body.addEventListener("mousemove", handleMouseMove);

function handleMouseMove(event) {
    const cursorLocation = {
        x: event.clientX,
        y: event.clientY
    };

    points.push(cursorLocation);
    if (points.length > numPoints) {
        points.shift();
    }

    updateBackground();
}

function updateBackground() {
    let gradient = 'radial-gradient(at ';

    points.forEach((point, index) => {
        gradient += `${point.x}px ${point.y}px`;
        if (index < points.length - 1) {
            gradient += ', ';
        }
    });

    gradient += ', #234158, #76AE91, #234158, #4988EF, #234158)';

    document.body.style.background = gradient;
}
});

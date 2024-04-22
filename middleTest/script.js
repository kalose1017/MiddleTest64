var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var starX = Math.random() * (canvas.width - 100) + 50;
var starY = Math.random() * (canvas.height - 100) + 50;

var heartX = canvas.width / 2;
var heartY = canvas.height / 2;

function drawStar(x, y, radius, spikes, color) {
    var step = Math.PI / spikes;
    var rotation = Math.PI / 2 * 3;
    var cx = x;
    var cy = y;
    var color = "yellow";
    var x2;
    var y2;
    context.beginPath();
    context.moveTo(cx, cy - radius);
    for (var i = 0; i < spikes; i++) {
        x2 = cx + Math.cos(rotation) * radius;
        y2 = cy + Math.sin(rotation) * radius;
        context.lineTo(x2, y2);
        rotation += step;

        x2 = cx + Math.cos(rotation) * (radius * 0.5);
        y2 = cy + Math.sin(rotation) * (radius * 0.5);
        context.lineTo(x2, y2);
        rotation += step;
    }
    context.lineTo(cx, cy - radius);
    context.closePath();
    context.fillStyle = color;
    context.fill();
    context.lineWidth = 3;
    context.strokeStyle = 'black';
    context.stroke();
}

function drawHeart(x, y, size, color, angle) {
    context.save();
    context.translate(x, y);
    context.rotate(angle);
    var cx = -size / 4;
    var cy = 0;
    context.beginPath();
    context.arc(cx, cy, size / 2, Math.PI, 0);
    context.arc(cx + size / 2, cy, size / 2, Math.PI, 0);
    context.lineTo(0, size);
    context.closePath();
    context.fillStyle = color;
    context.fill();
    context.lineWidth = 3;
    context.strokeStyle = 'black';
    context.stroke();
    context.restore();
}

var rotationAngle = 0;
var heartSpeed = 4;
var rotationSpeed = Math.PI / 80;

window.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'ArrowLeft':
            if (event.code === 'ArrowUp') {
                heartX -= heartSpeed;
                heartY -= heartSpeed;
            } else if (event.code === 'ArrowDown') {
                heartX -= heartSpeed;
                heartY += heartSpeed;
            } else {
                heartX -= heartSpeed;
            }
            break;
        case 'ArrowRight':
            if (event.code === 'ArrowUp') {
                heartX += heartSpeed;
                heartY -= heartSpeed;
            } else if (event.code === 'ArrowDown') {
                heartX += heartSpeed;
                heartY += heartSpeed;
            } else {
                heartX += heartSpeed;
            }
            break;
        case 'ArrowUp':
            if (event.code === 'ArrowLeft') {
                heartX -= heartSpeed;
                heartY -= heartSpeed;
            } else if (event.code === 'ArrowRight') {
                heartX += heartSpeed;
                heartY -= heartSpeed;
            } else {
                heartY -= heartSpeed;
            }
            break;
        case 'ArrowDown':
            if (event.code === 'ArrowLeft') {
                heartX -= heartSpeed;
                heartY += heartSpeed;
            } else if (event.code === 'ArrowRight') {
                heartX += heartSpeed;
                heartY += heartSpeed;
            } else {
                heartY += heartSpeed;
            }
            break;
    }
});

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    rotationAngle += rotationSpeed;
    drawHeart(heartX, heartY, 100, 'red', rotationAngle);
    drawStar(starX, starY, 50, 5, 'blue');
    requestAnimationFrame(animate);
}

animate();

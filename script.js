const logo = document.getElementById('logo');

let x = 100;
let y = 100;
let xSpeed = 2;
let ySpeed = 2;

const colors = [
    '#FF0000', '#00FF00', '#0000FF', '#FFFF00', 
    '#00FFFF', '#FF00FF', '#FF4500', '#ADFF2F', 
    '#7B68EE', '#FF1493', '#00FA9A', '#FFD700'
];
let lastColor;

function getRandomColor() {
    let newColor;
    do {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === lastColor);
    lastColor = newColor;
    return newColor;
}

function animate() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const logoWidth = logo.offsetWidth;
    const logoHeight = logo.offsetHeight;

    x += xSpeed;
    y += ySpeed;

    let colorChanged = false;

    if (x + logoWidth >= screenWidth) {
        xSpeed = -Math.abs(xSpeed);
        x = screenWidth - logoWidth;
        colorChanged = true;
    } else if (x <= 0) {
        xSpeed = Math.abs(xSpeed);
        x = 0;
        colorChanged = true;
    }

    if (y + logoHeight >= screenHeight) {
        ySpeed = -Math.abs(ySpeed);
        y = screenHeight - logoHeight;
        colorChanged = true;
    } else if (y <= 0) {
        ySpeed = Math.abs(ySpeed);
        y = 0;
        colorChanged = true;
    }

    if (colorChanged) {
        logo.style.backgroundColor = getRandomColor();
    }

    logo.style.left = x + 'px';
    logo.style.top = y + 'px';

    requestAnimationFrame(animate);
}

logo.style.backgroundColor = getRandomColor();
animate();

/**
 * Set Varible at the beginig of the page
 */

var canvas = document.getElementsByClassName("canvas")[0];
var ctx = canvas.getContext("2d");
var _color = 'red';
// var x = 0, y = 0;
var x = 130, y = 60, move = 5, backgroundColor = 'white';
/**
 * Set the funciton
 */

function go() {
    draw();
    document.onkeydown = checkKey;
    // document.addEventListener('onkeydown', checkKey)
}
function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        y -= move;
        draw();
    }
    else if (e.keyCode == '40') {
        // down arrow
        y += move;
        draw();
    }
    else if (e.keyCode == '37') {
        // left arrow
        x -= move;
        draw();
    }
    else if (e.keyCode == '39') {
        x += move;
        draw();
        // right arrow
    }




    let btnColor = document.getElementsByClassName('btn-color')[0];
    if (btnColor) {
        btnColor.addEventListener('click', () => {
            let color = document.getElementById('color').value;
            console.log(color);
            setColor(color);
        })
    }
}

function draw() {

    clearCanvas();

    ctx.fillStyle = _color;
    ctx.fillRect(10 + x, 0 + y, 10, 10);
    ctx.fillRect(20 + x, 0 + y, 10, 10);
    ctx.fillRect(30 + x, 0 + y, 10, 10);
    ctx.fillRect(20 + x, 10 + y, 10, 10);
    ctx.fillRect(20 + x, 20 + y, 10, 10);

}
function drawLine() {
    ctx.moveTo(x, y);
    ctx.arc(x, y, 10, 0, 2 * Math.PI, false);
    ctx.stroke();
}

function setColor(color) {
    _color = color;
    draw();
}
function elementFalling() {
    setInterval(() => {
        // some code
        console.count('misisipy');
        y += move; // <= y = y+ 10
        console.log(y);
        draw();
    }, 800);
}
function clearCanvas() {
    ctx.fillStyle = backgroundColor;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(0, 0, canvas.width, canvas.height);

}

go();
// elementFalling();



canvas.addEventListener('mousemove', (e) => {
    //    x = e.clientX;
    //    y = e.clientY;
   // console.log('mousemove x', e.clientX);
   // console.log('mousemove y', e.clientY);
   // drawLine();
})
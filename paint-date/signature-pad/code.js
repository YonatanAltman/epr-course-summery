console.log('CANVAS CODE!');

var canvas = document.querySelector("canvas");

var signaturePad = new SignaturePad(canvas);

// Returns signature image as data URL (see https://mdn.io/todataurl for the list of possible parameters)
signaturePad.toDataURL(); // save image as PNG
signaturePad.toDataURL("image/svg+xml"); // save image as SVG

// Draws signature image from data URL.
// NOTE: This method does not populate internal data structure that represents drawn signature. Thus, after using #fromDataURL, #toData won't work properly.
// signaturePad.fromDataURL("data:image/png;base64,iVBORw0K...");

// Returns signature image as an array of point groups
const data = signaturePad.toData();

// Draws signature image from an array of point groups
signaturePad.fromData(data);


// Returns true if canvas is empty, otherwise returns false
signaturePad.isEmpty();

// Unbinds all event handlers
signaturePad.off();

// Rebinds all event handlers
signaturePad.on();

function setColor() {

}

function changeSize() {

}

function erase() {

}
function save() {
    signaturePad.toDataURL("image/jpeg"); // save image as JPEG

}
function clear() {
    // Clears the canvas
    signaturePad.clear();

}

let btnClearCanvas = document.getElementsByClassName('btn-clear');
if (btnClearCanvas && btnClearCanvas.length > 0) {

    btnClearCanvas[0].addEventListener('click', function () {
        console.log('btn Clear Canvas');
        clear();

    })
}
let btnSaveCanvas = document.getElementsByClassName('btn-save');
if (btnSaveCanvas && btnSaveCanvas.length > 0) {

    btnSaveCanvas[0].addEventListener('click', function () {
        console.log('btn Save Canvas');
        save();

    })
}

const frame = [
    ["#00BCD4", "#FFEB3B", "#FFEB3B", "#00BCD4"],
    ["#FFEB3B", "#FFC107", "#FFC107", "#FFEB3B"],
    ["#FFEB3B", "#FFC107", "#FFC107", "#FFEB3B"],
    ["#00BCD4", "#FFEB3B", "#FFEB3B", "#00BCD4"]
];

window.onload = function draw() {
    var drawingCanvas = document.getElementById('canv');

    if (drawingCanvas && drawingCanvas.getContext) {

        ctx = canv.getContext("2d");
        width = frame[0].length; // Get the width of the array
        height = frame.length; // Get the height of the array
        scale = 128; // Scales the whole image by this amount, set to 1 for default size

        // Make sure the canvas is no larger than the size we need
        canv.width = width * scale;
        canv.height = height * scale;

        // Loop through each color and draw that section
        for (var row = 0; row < height; row++) {
            for (var col = 0; col < width; col++) { // Since there are nested arrays we need two for loops
                ctx.fillStyle = frame[row][col]; // Set the color to the one specified
                ctx.fillRect(col * scale, row * scale, scale, scale); // framectually draw the rectangle
            }
        }


    }
}
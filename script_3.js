var canv = document.getElementById("canv_3"), // Select our canvas element
    ctxt = canv.getContext("2d");


var img = new Image();
img.src = "rss-codejam-canvas/Sheets/image.png";

ctxt.drawImage(img, 100, 100);
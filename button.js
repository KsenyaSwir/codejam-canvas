var btn = document.querySelector('#draw');
var images = document.querySelectorAll('#gallery canvas');

var i = 0;
btn.onclick = function() {
    images[i].style.display = 'none';
    i++;
    if (i >= images.length) {
        i = 0;
    }
    images[i].style.display = 'block';
}
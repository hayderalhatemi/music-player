let upload = document.getElementById('upload');
let song = document.querySelector('.song');

upload.onchange = function () {
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = function () {
        song.src = file.result;
    }
}
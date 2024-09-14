let playList = document.querySelector('.audio');
let list = document.getElementById('list');
let back = document.getElementById('back');
let buttons = document.querySelector('.buttons');
let songs = document.querySelectorAll('.audio audio');

window.onload = function() {
    document.getElementById('upload').addEventListener('change', function(event) {
        const files = event.target.files;
        const audioContainer = document.querySelector('.audio2');
    
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const fileURL = URL.createObjectURL(file);
            const fileName = document.createElement('p');
            fileName.textContent = file.name;
            fileName.style.fontWeight = 'bold';
            const audioPlayer = document.createElement('audio');
            audioPlayer.controls = true;
            audioPlayer.src = fileURL;

            audioContainer.appendChild(audioPlayer);
            audioContainer.appendChild(fileName);
        };
    });

    playList.style.display = 'none';
    buttons.style.display = 'none';
};

list.addEventListener ('click', function() {
    playList.style.display = 'block';
});

back.addEventListener('click', function() {
    playList.style.display = 'none';
    buttons.style.display = 'none';
});
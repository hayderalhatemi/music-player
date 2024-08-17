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
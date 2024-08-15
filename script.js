document.getElementById('upload').addEventListener('change', function(event) {
    const files = event.target.files;
    const audioContainer = document.querySelector('.audio2');
    audioContainer.innerHTML = '';

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileURL = URL.createObjectURL(file);
        const audioPlayer = document.createElement('audio');
        audioPlayer.controls = true;
        audioPlayer.src = fileURL;
        audioPlayer.style.display = 'block';
        audioContainer.appendChild(audioPlayer);
    };
});
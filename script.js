document.getElementById('uploadd').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const audioPlayer = document.getElementById('music');
        const fileURL = URL.createObjectURL(file);
        audioPlayer.src = fileURL;
        audioPlayer.style.display = 'block';
        audioPlayer.play();
    }
});
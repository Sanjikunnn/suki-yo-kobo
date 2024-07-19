document.addEventListener('DOMContentLoaded', function() {
    const lyricsText = [
        "beli ciki", 
        "beli koyo", 
        "suki yo", 
        "ima anata ni omoi nosete", 
        "hora", 
        "sunao ni naru no watashi", 
        "kono saki motto",
        "soba ni ite mo ii ka na?",
        "koi to koi ga kasanatte",
        "suki yo"
    ];

    const delayTimes = [1000, 4000, 1000, 3000, 1000, 4000, 3000, 3000, 3000, 7000]; 

    const lyricsContainer = document.getElementById('lyrics');
    const backgroundMusic = document.getElementById('background-music');
    const playButton = document.getElementById('play-button');
    let currentElement = null;
    let cumulativeDelay = 0;

    function showLyrics() {
        lyricsText.forEach((line, index) => {
            setTimeout(() => {
                if (currentElement) {
                    currentElement.classList.remove('highlight');
                    currentElement.classList.add('dim');
                }
                const lineElement = document.createElement('div');
                lineElement.textContent = line;
                lineElement.classList.add('highlight');
                lyricsContainer.appendChild(lineElement);
                animateLyrics(lineElement);
                currentElement = lineElement;
            }, cumulativeDelay);
            cumulativeDelay += delayTimes[index]; 
        });
    }

    function animateLyrics(element) {
        element.style.animation = 'fadeIn 2s forwards, zoomIn 0.6s forwards'; 
    }

    // Function to start music and unmute
    function startMusic() {
        backgroundMusic.muted = false;
        backgroundMusic.play().catch(error => {
            console.error("Error playing the background music:", error);
        });
    }

    // Play button event listener
    playButton.addEventListener('click', function() {
        startMusic();
        playButton.style.display = 'none'; // Hide the button after clicking
    });

    // Auto-start lyrics display
    showLyrics();
});

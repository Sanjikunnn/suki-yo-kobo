document.addEventListener('DOMContentLoaded', function() {
  const lyricsText = [
      "beli ciki", 
      "beli koyo", 
      "suki yo", 
      "ima anata ni omoi nosete hora", 
      "sunao ni naru no watashi", 
      "kono saki motto",
      "soba ni ite mo ii ka na?",
      "koi to koi ga kasanatte",
      "suki yo", 
      "ima anata ni omoi todoke", 
      "nee kizuite kuremasen ka?", 
      "dou shiyou mo nai kurai", 
      "kokoro made suki ni natte yuku"
  ];

  const delayTimes = [2000, 4000, 1000, 4000, 4000, 3000, 3000, 3000, 3000, 5000, 2000, 3000, 2000]; 

  const lyricsContainer = document.getElementById('lyrics');
  const backgroundMusic = document.getElementById('background-music');
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

  // Attempt to play the background music when the page loads
  backgroundMusic.play().catch(error => {
      console.error("Autoplay gagal:", error);
      alert("Klik 'OK' untuk play lagu.");
      backgroundMusic.play();
  });

  showLyrics();
});

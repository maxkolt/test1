// JavaScript для навигации и прокрутки
(function () {
  const adContainer = document.getElementById('adContainer');
  const adImages = [
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300/ff0000',
    'https://via.placeholder.com/300/00ff00',
    'https://via.placeholder.com/300/0000ff'
  ];
  let currentIndex = 0;

  function updateAd() {
    const adImage = adContainer.querySelector('.ad-image');
    adImage.src = adImages[currentIndex];
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % adImages.length;
    updateAd();
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + adImages.length) % adImages.length;
    updateAd();
  }

  adContainer.querySelector('.next').addEventListener('click', showNext);
  adContainer.querySelector('.prev').addEventListener('click', showPrev);

  let startX = 0;
  let isDragging = false;

  adContainer.addEventListener('touchstart', function (e) {
    startX = e.touches[0].clientX;
    isDragging = true;
  });

  adContainer.addEventListener('touchmove', function (e) {
    if (!isDragging) return;
    let currentX = e.touches[0].clientX;
    if (currentX - startX > 50) {
      showPrev();
      isDragging = false;
    } else if (startX - currentX > 50) {
      showNext();
      isDragging = false;
    }
  });

  adContainer.addEventListener('touchend', function () {
    isDragging = false;
  });
})();
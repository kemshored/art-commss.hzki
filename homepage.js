document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.image-slider');
    sliders.forEach(slider => {
      const images = slider.querySelectorAll('img');
      const leftBtn = slider.querySelector('.arrow-left');
      const rightBtn = slider.querySelector('.arrow-right');
      let currentIndex = 0;
      function showImage(index) {
        images.forEach((img, i) => {
          img.classList.toggle('active', i === index);
        });
      }

       leftBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
      });
      rightBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
      });
    });
  });

  
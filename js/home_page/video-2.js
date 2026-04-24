const slider = document.getElementById('slider-container');

function scrollRight() {
    const card = slider.querySelector('.group');
    if (card) {
        const cardWidth = card.offsetWidth;
        const gap = parseInt(window.getComputedStyle(slider).gap) || 0;
        slider.scrollLeft += (cardWidth + gap);
    }
}


let isDown = false, startX, scrollLeftVal;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeftVal = slider.scrollLeft;
    slider.classList.remove('scroll-smooth');
});
slider.addEventListener('mouseleave', () => isDown = false);
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.add('scroll-smooth');
});
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeftVal - walk;
});


const video = document.getElementById('heroVideo');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');

function toggleVideo() {
    if (video.paused) {
        video.play();
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
    } else {
        video.pause();
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
    }
}

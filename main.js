const slider = document.querySelector('.slider');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

let scrollAmount = 0;
const step = 320; // Slide width + margin

nextButton.addEventListener('click', () => {
    scrollAmount += step;
    slider.style.transform = `translateX(-${scrollAmount}px)`;
});

prevButton.addEventListener('click', () => {
    scrollAmount -= step;
    if (scrollAmount < 0) scrollAmount = 0;
    slider.style.transform = `translateX(-${scrollAmount}px)`;
});

const dropdown = new bootstrap.Dropdown(document.getElementById('languageDropdown'));

slider.style.transition = "transform 0.5s ease-in-out";

document.getElementById('year').textContent = new Date().getFullYear();




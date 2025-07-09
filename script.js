const slides = document.querySelectorAll('.slide-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentSlideIndex = 0;

// Function to show the current slide and hide others
function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.remove('hidden');
        } else {
            slide.classList.add('hidden');
        }
    });
    updateNavigationButtons();
}

// Function to update the state of navigation buttons (enabled/disabled)
function updateNavigationButtons() {
    prevBtn.disabled = currentSlideIndex === 0;
    nextBtn.disabled = currentSlideIndex === slides.length - 1;
}

// Event listener for "Previous" button
prevBtn.addEventListener('click', () => {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        showSlide(currentSlideIndex);
    }
});

// Event listener for "Next" button
nextBtn.addEventListener('click', () => {
    if (currentSlideIndex < slides.length - 1) {
        currentSlideIndex++;
        showSlide(currentSlideIndex);
    }
});

// Initialize the presentation by showing the first slide
showSlide(currentSlideIndex); 
// News Slider Controller
let currentNewsIdx = 0;

function rotateNewsSlider() {
    const slides = document.querySelectorAll('.news-slide');
    if (slides.length > 0) {
        // Hide all slides
        slides.forEach(s => s.classList.remove('active'));
        
        // Increment and show next slide
        currentNewsIdx++;
        if (currentNewsIdx > slides.length) { 
            currentNewsIdx = 1; 
        }
        
        slides[currentNewsIdx - 1].classList.add('active');
        
        // Repeat every 5 seconds
        setTimeout(rotateNewsSlider, 5000);
    }
}

// Start slider when window loads
window.addEventListener('load', rotateNewsSlider);

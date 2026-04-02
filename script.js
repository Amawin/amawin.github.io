// 1. Countdown Logic (3rd April 6PM)
var countDownDate = new Date("April 3, 2026 18:00:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if(document.getElementById("days")) {
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
    }

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown-container").innerHTML = "<h3>DURGA IS OUT NOW!</h3>";
    }
}, 1000);

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

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

// 2. News Slider Logic (අලුත් එක)
let currentNews = 0;
function startNewsSlider() {
    const slides = document.querySelectorAll('.news-slide');
    if (slides.length > 0) {
        slides.forEach(s => s.classList.remove('active')); // ඔක්කොම slide හංගනවා
        currentNews++;
        if (currentNews > slides.length) { currentNews = 1; }
        slides[currentNews - 1].classList.add('active'); // පෙන්වන්න ඕන එක විතරක් පෙන්වනවා
        setTimeout(startNewsSlider, 5000); // තත්පර 5න් 5ට
    }
}

// සයිට් එක සම්පූර්ණයෙන් load වුණාම slider එක පටන් ගන්න
window.onload = startNewsSlider;

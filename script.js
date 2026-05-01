window.addEventListener('load', function() {
    // 0.5 seconds delay for AMAWIN loader
    setTimeout(function() {
        const loader = document.getElementById('loader');
        const content = document.getElementById('main-content');

        loader.style.transition = "opacity 0.3s ease";
        loader.style.opacity = "0";
        
        setTimeout(() => {
            loader.style.display = 'none';
            content.style.display = 'block';
        }, 300);
    }, 500); 
});

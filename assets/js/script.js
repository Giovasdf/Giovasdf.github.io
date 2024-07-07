    window.addEventListener('scroll', function() {
        const parallaxText = document.querySelector('.display-1');
        let scrollPosition = window.pageYOffset;
        // Ajusta el 0.5 para cambiar la velocidad del parallax
        parallaxText.style.backgroundPositionY = (scrollPosition * 0.5) + 'px';
    });

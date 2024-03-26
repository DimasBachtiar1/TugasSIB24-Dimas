// Carousel

var slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName('slide');
            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = 'none';
            }
            slides[slideIndex - 1].style.display = 'block';
        }

        
        setInterval(function () {
            plusSlides(-1);
        }, 10000); 

// // navbar
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav .fitur ul');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');

})
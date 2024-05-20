const travelButton = document.getElementById('travelButton');
const travelBanner = document.getElementById('travelBanner');


const handButton = document.getElementById('handButton');
const handBanner = document.getElementById('handBanner');


const hobbiesButton = document.getElementById('hobbiesButton');
const hobbiesBanner = document.getElementById('hobbiesBanner');

travelButton.addEventListener('click', function () {
    travelBanner.classList.toggle('active');
});

handButton.addEventListener('click', function () {
    handBanner.classList.toggle('active');
});


hobbiesButton.addEventListener('click', function () {
    hobbiesBanner.classList.toggle('active');
});

const sliders = document.querySelectorAll('.slider');

sliders.forEach(slider => {
    const images = slider.querySelectorAll('img');
    let currentImageIndex = 0;

    function showNextImage() {
        images[currentImageIndex].style.display = 'none';
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].style.display = 'block';
    }

    setInterval(showNextImage, 2000);
});


window.addEventListener('scroll', function () {
    var header = document.getElementById('header');
    var navLinks = document.querySelectorAll('.navlist a');

    if (window.scrollY > 0) {
        navLinks.forEach(function (link) {
            link.style.paddingBottom = '24px';
        });
        header.style.height = '50px'; 
        header.style.opacity = '0.85';

    } else {
        navLinks.forEach(function (link) {
            link.style.paddingBottom = '39px';
        });
        header.style.height = '100px';
        header.style.opacity = '1';

    }
});



var buttonSavan = document.getElementById('buttonSavan');

buttonSavan.addEventListener('click', function () {
    window.open('https://savan.app/', '_blank');
});

var buttonSavan = document.getElementById('buttonBoa');

buttonSavan.addEventListener('click', function () {
    window.open('https://www.bordeauxopenair.fr/', '_blank');
});


var aboutMe = document.getElementById('aboutMe');
var contact = document.getElementById('contact');
var header = document.getElementById('header');
var intro = document.getElementById('intro');
var project = document.getElementById('project');




let isOn = false;
const toggleButton = document.getElementById('toggleButton');
const lightElements = document.querySelectorAll('.light');
const darkElements = document.querySelectorAll('.dark');
const buttonElements = document.querySelectorAll('.switch-button');
const textElements = document.querySelectorAll('.text-light');
const nightIcon = document.querySelector('.moon-icon');


toggleButton.addEventListener('click', function () {
    isOn = !isOn;

    lightElements.forEach(function (element) {
        if (isOn) {
            element.classList.add('light-night');
            element.classList.remove('light-day');

        } else {
            element.classList.remove('light-night');
            element.classList.add('light-day');
        }
    });

    darkElements.forEach(function (element) {
        if (isOn) {
            element.classList.add('dark-night');
            element.classList.remove('dark-day');

        } else {
            element.classList.remove('dark-night');
            element.classList.add('dark-day');

        }
    });

    buttonElements.forEach(function (element) {
        if (isOn) {
            element.classList.add('switch-button');
        } else {
            element.classList.remove('switch-button');
        }
    });
    textElements.forEach(function (element) {
        if (isOn) {
            element.classList.add('dark-text');
            element.classList.remove('light-text');

        } else {
            element.classList.remove('dark-text');
            element.classList.add('light-text');

        }
    });

    if (isOn) {
        nightIcon.classList.remove('fas');
        nightIcon.classList.remove('fa-moon');
        nightIcon.classList.add('fa-regular');
        nightIcon.classList.add('fa-sun');
    } else {
        nightIcon.classList.remove('fa-regular');
        nightIcon.classList.remove('fa-sun');
        nightIcon.classList.add('fas');
        nightIcon.classList.add('fa-moon');
    }
});
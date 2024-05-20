const handButton = document.getElementById('handButton');
const handBanner = document.getElementById('handBanner');


const hobbiesButton = document.getElementById('hobbiesButton');
const hobbiesBanner = document.getElementById('hobbiesBanner');

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

    setInterval(showNextImage, 3000); // Change d'image toutes les 3 secondes (3000 ms)
});


window.addEventListener('scroll', function () {
    var header = document.getElementById('header');
    var navLinks = document.querySelectorAll('.navlist a');

    if (window.scrollY > 0) {
        navLinks.forEach(function (link) {
            link.style.paddingBottom = '22px';
        });
        header.style.height = '50px'; // Ajustez cette valeur pour définir la nouvelle hauteur du header lors du défilement
        header.style.opacity = '0.85';

    } else {
        navLinks.forEach(function (link) {
            link.style.paddingBottom = '39px';
        });
        header.style.height = '100px'; // Hauteur originale du header
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
const buttonElements = document.querySelectorAll('.switchButton');
const textElements = document.querySelectorAll('.text-light');
const nightIcon = document.querySelector('.moon-icon');


toggleButton.addEventListener('click', function () {
    isOn = !isOn; // Inverse l'état actuel (on/off)

    lightElements.forEach(function (element) {
        if (isOn) {
            element.classList.add('lightnight');
        } else {
            element.classList.remove('lightnight');
        }
    });

    darkElements.forEach(function (element) {
        if (isOn) {
            element.classList.add('darknight');
        } else {
            element.classList.remove('darknight');
        }
    });

    buttonElements.forEach(function (element) {
        if (isOn) {
            element.classList.add('switchButton');
        } else {
            element.classList.remove('switchButton');
        }
    });
    textElements.forEach(function (element) {
        if (isOn) {
            element.classList.add('darkText');
        } else {
            element.classList.remove('darkText');
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
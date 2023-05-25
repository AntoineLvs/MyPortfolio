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

    if (window.scrollY > 0) {
        header.style.height = '50px'; // Ajustez cette valeur pour définir la nouvelle hauteur du header lors du défilement
        header.style.opacity = '0.85';
    } else {
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


// const toggleButton = document.getElementById('toggleButton');
// var aboutMe = document.getElementById('aboutMe');
// var contact = document.getElementById('contact');


// let isOn = false;

// toggleButton.addEventListener('click', function () {
//     isOn = !isOn; // Inverse l'état actuel (on/off)

//     if (isOn) {

//         aboutMe.style.backgroundColor = 'rgb(150 163 191)';
//         contact.style.backgroundColor = 'rgb(150 163 191)';

//     } else {

//         aboutMe.style.backgroundColor = 'rgba(32, 41, 56, 1)';
//         contact.style.backgroundColor = 'rgba(32, 41, 56, 1)';


//     }
// });
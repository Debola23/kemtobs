function openPopup() {
    document.getElementById("popupContainer").style.display = "block";
    document.getElementById("overlay").style.display = "block";   
}
function closePopup() {
    document.getElementById("popupContainer").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

document.getElementById('open-sidebar').addEventListener('click', function() {
    document.getElementById('sidebar').classList.add('open');
});

document.getElementById('close-sidebar').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('open');
});

let sidebarLinks = document.querySelectorAll('.sidebar-link');
sidebarLinks.forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('sidebar').classList.remove('open');
    });
});

let currentIndex = 0;
const images = document.querySelectorAll('.image-container img');
const texts = [
    'Feel free to communicate with us',
    'For business of every size and scope',
    'We provide cloud based services'
];
const textOverlay = document.querySelector('.text-overlay');

function changeImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
    textOverlay.style.opacity = 0;
    setTimeout(() => {
        textOverlay.textContent = texts[currentIndex];
        textOverlay.style.opacity = 1;
    }, 500); // Wait for the image transition halfway before changing the text
}
setInterval(changeImage, 10000);


// Agrega la funcionalidad de zoom al hacer clic en las imágenes
const images = document.querySelectorAll('.zoom');

images.forEach(image => {
    image.addEventListener('click', () => {
        image.classList.toggle('zoomed');
    });
});

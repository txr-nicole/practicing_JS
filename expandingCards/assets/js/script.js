let slides = document.querySelectorAll('.slide');

slides.forEach(slide => {
    slide.addEventListener("click", () => {
        console.log('clicou')
        removeActive();
        slide.classList.add('active')
    });
})
function removeActive() {
    slides.forEach(slide => {
        slide.classList.remove('active')
    })
}


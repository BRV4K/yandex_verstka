let slideIndex = 0;
showSlide(slideIndex);

function plusSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    let slides = document.getElementsByClassName("slides");
    let btn_next = document.querySelector(".btn-next");
    let btn_prev = document.querySelector(".btn-prev");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    if (n === 3){
        btn_next.style.cursor = 'unset';
        btn_next.style.opacity = '0.5';
        btn_next.style.pointerEvents = 'none';
    }

    if (n === 2){
        btn_next.style.cursor = 'pointer';
        btn_prev.style.cursor = 'pointer';
        btn_prev.style.opacity = '1';
        btn_next.style.opacity = '1';
        btn_next.style.pointerEvents = 'auto';
    }

    if (n === 1){
        btn_next.style.cursor = 'pointer';
        btn_prev.style.cursor = 'pointer';
        btn_prev.style.opacity = '1';
        btn_next.style.opacity = '1';
        btn_prev.style.pointerEvents = 'auto';
    }

    if (n === 0){
        btn_next.style.cursor = 'pointer';
        btn_prev.style.cursor = 'unset';
        btn_prev.style.opacity = '0.5';
        btn_prev.style.pointerEvents = 'none';
    }

    slides[slideIndex].style.display = 'block';
}
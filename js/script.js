const swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
let modal = document.querySelector('.top button')
modal.addEventListener('click',()=> {
    document.querySelector('.top-modal').style.display="block"
})
let modalClose = document.querySelector('.top-modal-bg-square-close')
modalClose.addEventListener('click',()=> {
    document.querySelector('.top-modal').style.display="none"
})

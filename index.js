
let navbar = document.querySelector ('#bars');
let menulist = document.querySelector ('.menu');

navbar.onclick = ()=>{
    navbar.classList.toggle('fa-times');
    menulist.classList.toggle('active');
};
window.onscroll = () =>{
    navbar.classList.remove('fa-times');
    menulist.classList.remove('active');
}
document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#overlay').classList.toggle('active');
}
document.querySelector('#close').onclick = () =>{
    document.querySelector('#overlay').classList.remove('active');
}

const TrandingSlider = new Swiper(".tranding-slider", {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',

    }
});





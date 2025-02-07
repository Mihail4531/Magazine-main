function SliderAbout (){
    var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".about__pagination-left",
          prevEl: ".about__pagination-right",
        },
      });
}
export default SliderAbout;
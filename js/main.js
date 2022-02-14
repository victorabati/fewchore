$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.wwdSection').offset().top }, 'slow');
      return false;
    });
  });

/* Initialize Swiper */
var swiper = new Swiper('.wwdSwiper', {
      effect: 'coverflow',
      observer: true,
      observeParents: true,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      },
    loop: true
    });

/* FAQ Script */
let li = document.querySelectorAll(".faq-text li");
    for (var i = 0; i < li.length; i++) {
      li[i].addEventListener("click", (e)=>{
        let clickedLi;
        if(e.target.classList.contains("question-arrow")){
          clickedLi = e.target.parentElement;
        }else{
          clickedLi = e.target.parentElement.parentElement;
        }
       clickedLi.classList.toggle("showAnswer");
      });
    }

    /* WOW */
    $(function(){
      new WOW().init(); 
    });
    
    //also at the window load event
    $(window).on('load', function(){
    
         new WOW().init(); 
    });

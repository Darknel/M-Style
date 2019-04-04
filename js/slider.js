jQuery(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      	loop: false,
      	margin: 10,
      	responsiveClass: true,
      	responsive: {
            0: {
                items: 1,
                dots: false,
                nav: false
            },
            500: {
                items: 2,
                dots: false,
                nav: false
            },
            992: {
                items: 3,
                dots: false,
                nav: false
            },
            1200: {
                items: 4,
                nav: false,
                loop: false,
                dots: false,
                margin: 20
            }
        }
    })
    $('.owl-carousel-2').owlCarousel({
      	loop: false,
      	margin: 10,
      	responsiveClass: true,
      	responsive: {
            0: {
                items: 1,
                dots: false,
                nav: false
            },
            500: {
                items: 1,
                dots: false,
                nav: false
            },
            992: {
                items: 2,
                dots: false,
                nav: false
            },
            1200: {
                items: 2,
                nav: false,
                loop: false,
                dots: false,
                margin: 20
            }
        }
    })
})
 

$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    
    // typing text animation script
    /*var typed = new Typed(".typing_studies_Once", {
        strings: ["Studies"],
        typeSpeed: 200
    });*/

    var typed = new Typed(".typing-2", {
        strings: ["Santeri Mikkola", "Santeri Mikkola"],
        typeSpeed: 200,
        wait: true,
        backSpeed: 140,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });


    const openModalButtons = document.querySelectorAll('[data-modal-target]')
    const closeModalButtons = document.querySelectorAll('[data-close-button]')
    const overlay = document.getElementById('overlay')

    openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
    })

    overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
    })

    closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
    })

    function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
    disableScroll();
    document.body.classList.add("stop-scrolling");
    }

    function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
    enableScroll();
    document.body.classList.remove("stop-scrolling");
    }

    function disableScroll() {
        // Get the current page scroll position
        scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
        scrollLeft =
        window.pageXOffset || document.documentElement.scrollLeft,
      
            // if any scroll is attempted,
            // set this to the previous value
            window.onscroll = function() {
                window.scrollTo(scrollLeft, scrollTop);
            };
    }
      
    function enableScroll() {
        window.onscroll = function() {};
    }


});
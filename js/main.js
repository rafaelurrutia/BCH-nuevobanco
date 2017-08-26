// evento que permite ir al inicio
$(".menu-mobile").click(function () {
    $(".menuprincipal ul").toggleClass('open-menu');
});


// evento que permite ir al inicio
$("#footer #to-top").click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, "slow");
    return false;
});

// cajas
$('.box-buton').click(function (e) {
        
    if ($(this).parent('.box-menu').hasClass('opened')) {
        //$('.box-buton').removeClass('grayscale');
        $('.box-menu').removeClass('opened');
        $('.box-content').removeClass('opened');
        $('.box-buton span').removeClass('inactive');
        $('.box-buton').removeClass('inactive');
        $(this).find('span').removeClass('active'); 
    } else {
        $('.box-menu').removeClass('opened');
        $('.box-menu').removeClass('forzarposicion');
        //$('.box-buton').addClass('grayscale');
        //$(this).removeClass('grayscale');
        $(this).parent('.box-menu').addClass('opened');
        $('.box-buton span').addClass('inactive');
        $('.box-buton').addClass('inactive');
        $(this).removeClass('inactive');
        $(this).find('span').removeClass('inactive').addClass('active');
        if ($(this).parent('.box-menu').next('.box-menu').length) {
            $(this).parent('.box-menu').next('.box-menu').addClass('forzarposicion');
        } else {
            $(this).parent('.box-menu').addClass('forzarposicion');
        }
    }
    e.preventDefault();
});

// tooltip
$(".circle-tooltip").mouseenter(function () {
    $(this).parent().find('.circle-tooltip').not(this).removeClass('active');
    $(this).addClass('active');
});


// acordion flecha arriba flecha abajo
function toggleArrow(e) {
    $(e.target)
        .prev('.panel-heading')
        .find("i")
        .toggleClass('MCSS-arrow-arriba MCSS-arrow-down');
}
$("div[id^='accordion']").on('hidden.bs.collapse', toggleArrow);
$("div[id^='accordion']").on('shown.bs.collapse', toggleArrow);

$('#verMas').click(function (e) {
    $('#seguridad-reforzada .section-4').toggleClass('open'); 
    $('#verMas span.sp1').toggle(); 
    $('#verMas span.sp2').toggle(); 
});

$('h6.faq ').click(function (e) {
    $('.select-body').addClass('open'); 
});
$('#centro-de-ayuda .nav-tabs > li > a').click(function (e) {
    $('.select-body').removeClass('open'); 
});

// cambiar posicion elementos html
$("#footer .section-1 .right-side").after($('#footer .section-1 .left-side'));

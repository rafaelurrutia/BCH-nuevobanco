var sizeMoveScroll = 200;
var desktopSize = 991;
var tabletSize = 990;
var mobileSize = 768;
var heightMenu1 = 0;

var lastId,
    topMenu = $(".menuprincipal"),
    //topMenuHeight = topMenu.outerHeight()+(15+18),
    topMenuHeight = topMenu.outerHeight() + (15 - heightMenu1),
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
        var item = $($(this).attr("href"));
        if (item.length) {
            return item;
        }
    });

function position() {

    var size = $(window).width();

    if ((size > mobileSize) && (size < tabletSize)) {
        heightMenu1 = 18;
    } else {
        heightMenu1 = 0;
    }

    topMenuHeight = topMenu.outerHeight() + (15 - heightMenu1);

    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop)
            return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
            .parent().removeClass("active")
            .end().filter("[href='#" + id + "']").parent().addClass("active");
    }
}

$(window).scroll(function () {
    var scrollh = $(this).scrollTop();
    if (scrollh >= sizeMoveScroll) {
        $(".menuprincipal").addClass('active');
    } else {
        $(".menuprincipal").removeClass('active');
    }
});

$(document).ready(function () {
    var scrollh = $(this).scrollTop();
    if (scrollh >= sizeMoveScroll) {
        $(".menuprincipal").addClass('active');
    } else {
        $(".menuprincipal").removeClass('active');
    }
});


// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function (e) {
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 300);
    $('.menuprincipal ul').removeClass('open-menu');
    e.preventDefault();
});


$(document).ready(function () {
    position();
});

$(window).scroll(function () {
    position();
});

$(window).resize(function () {
    position();
});
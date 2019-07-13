// Hide / Collapse menu bar when Nav Link is clicked in Mobile View
$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

// Animate tech icons
AOS.init({
    duration: 1200,
});

// Hide / Collapse menu bar when Nav Link is clicked in Mobile View
$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

// Hide / Collapse menu bar when Nav Brand is clicked in Mobile View
$('.navbar-brand').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});


// Animate tech icons
AOS.init({
    duration: 1200,
});

var $root = $('html, body');
$('a.smoothscroll').click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 60
    }, 500);
    return false;
});

$('.rss-item').readmore({

    collapsedHeight: 500,
    moreLink: '<a href="#"><p>Read more...</a><p>',
    lessLink: '<a href="#"><p>Collapse Story...</a><p>'

});
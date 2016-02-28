var $root = $('html, body');
$('a.smoothscroll').click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 0
    }, 500);
    return false;
});
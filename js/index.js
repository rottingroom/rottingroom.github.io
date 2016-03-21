var $root = $('html, body');
$('a.smoothscroll').click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 60
    }, 500);
    return false;
});
var $root = $('html, body');
$('a.smoothscroll').click(function() {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - 70
    }, 500);
    return false;
});
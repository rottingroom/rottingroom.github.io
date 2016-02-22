$(document).ready( function() { 

        // Scroll to anchor
        $('html,body').animate({scrollTop: $($(this).attr('href')).offset().top - 100},'slow');
        e.preventDefault();
        return false;
});
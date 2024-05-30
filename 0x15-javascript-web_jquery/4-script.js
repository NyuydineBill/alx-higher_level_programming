$(document).ready(function() {
    function toggleHeaderClass() {
        let headerElement = $('header');
        if(headerElement.hasClass('red')) {
            headerElement.removeClass('red').addClass('green');
        } else if (headerElement.hasClass('green')) {
            headerElement.removeClass('green').addClass('red');
        } else {
            headerElement.addClass('red');
        }
    }

    $('#toggle_header').click(function() {
        toggleHeaderClass();
    })
})
$(function() {
    $.get('https://fourtonfish.com/hellosalut/?lang=fr', function(data, txtStatus) {
        if (txtStatus === 'success') {
            // Selección y actualización del contenido del elemento <div> con el ID 'hello'
            $('DIV#hello').text(data.hello);
        }
    });
});
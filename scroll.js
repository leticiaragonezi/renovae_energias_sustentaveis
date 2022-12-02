$('nav a').click(function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top,
        menuDeCabecalho = $('nav').innerHeight()


    $(`html, body`).animate({
        scrollTop: targetOffset - menuDeCabecalho
    }, 450)

});


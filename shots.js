(function() {

    var sizes = [
        '360x640',
        '768x1024',
        '1280x1024'
    ];
    var Pageres = require('pageres');

    var pageres = new Pageres({delay: 2, format: "jpg"})
        .src('creativecherry.com/our-work/cyclone-promotions', sizes, {crop: true})
        .src('powaband.com', sizes, {crop: true})
        .src('paprika-software.com', sizes, {crop: true})
        .src('cobbcollective.com', sizes, {crop: true})
        .src('integreon.com', sizes, {crop: true})
        .src('360training.co.uk', sizes, {crop: true})
        .src('phenomenalpeople.org.uk', sizes, {crop: true})
        .dest(__dirname + "/shots");

    pageres.run(function (err) {
        console.log('done');
    });
})();

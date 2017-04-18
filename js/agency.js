// Agency Theme JavaScript

(function($) {

    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery); // End of use strict


function initialize() {
    var myLatlng = new google.maps.LatLng(30.050958, 31.206122);
    var style = [{ "featureType": "administrative", "elementType": "all", "stylers": [{ "saturation": "-100" }] }, { "featureType": "administrative.province", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 65 }, { "visibility": "on" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": "50" }, { "visibility": "simplified" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": "-100" }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "all", "stylers": [{ "lightness": "30" }] }, { "featureType": "road.local", "elementType": "all", "stylers": [{ "lightness": "40" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "saturation": -100 }, { "visibility": "simplified" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "hue": 21 }, { "lightness": 25 }, { "saturation": 100 }] }, { "featureType": "water", "elementType": "labels", "stylers": [{ "lightness": -25 }, { "saturation": -100 }] }]

    var mapOptions = {
        zoom: 16,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: style
    }
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    //=====Initialise Default Marker    
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'marker'
            //=====You can even customize the icons here
    });

    //=====Initialise InfoWindow
    var infowindow = new google.maps.InfoWindow({
        content: "<div><h4>sigma designs</h4><p>28 Abdel Moneim Riad st. - Mohandseen Cairo, Egypt<p><p>Call +2010 1402924</p></div>"
    });
    infowindow.open(map, marker);

    //=====Eventlistener for InfoWindow
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });
}

google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function() {


    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var modalImg = document.getElementById("img01");
    $('.gallary .image img').click(function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        $('.navbar-fixed-top').css('z-index', '0');

    })

    // When the user clicks on <span> (x), close the modal
    $('.close').click(function() {
        modal.style.display = "none";
        $('.navbar-fixed-top').css('z-index', '1030');

    })

    $(document).keyup(function(e) {
        if (e.keyCode === 13) $('.close').click(); // enter
        if (e.keyCode === 27) $('.close').click(); // esc
    });


});
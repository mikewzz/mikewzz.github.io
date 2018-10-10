
$(document).ready(function() {
    function preloader() {
        if (document.getElementById) {
            document.getElementById("preload-01").style.background = "url(./images/HeaderPhotoNYRedone_40.png) no-repeat -9999px -9999px";
            document.getElementById("preload-02").style.background = "url(./images/website1.png) no-repeat -9999px -9999px";
            document.getElementById("preload-03").style.background = "url(./images/website3.png) no-repeat -9999px -9999px";
        }
    }
    function addLoadEvent(func) {
        var oldonload = window.onload;
        if (typeof window.onload != 'function') {
            window.onload = func;
        } else {
            window.onload = function() {
                if (oldonload) {
                    oldonload();
                }
                func();
            }
        }
    }
    addLoadEvent(preloader);

    
    //this closes the navbar when anchor link is clicked in responsive burger menu mode

    $('.navbar a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
    
    //smooth scroll @ 300 ms 
    $('#myNav a[href^="#"], .coolButtonDiv a').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top-50
        }, 300);

        return false;
    });
    

// When the window has finished loading create our google map below
    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        // Basic options for a simple Google Map
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 11,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(43.6529, -79.3849), // New York

            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#eeeeee"}]},{"featureType":"administrative.country","elementType":"geometry","stylers":[{"lightness":"100"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"lightness":"0"},{"color":"#d0ecff"}]},{"featureType":"administrative.country","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels.text","stylers":[{"visibility":"simplified"},{"color":"#5594d3"}]},{"featureType":"administrative.locality","elementType":"labels.icon","stylers":[{"visibility":"simplified"},{"lightness":60}]},{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"simplified"},{"color":"#ffffff"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#fafafa"}]},{"featureType":"landscape.natural","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.attraction","elementType":"geometry","stylers":[{"color":"#e8e8e8"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"poi.business","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"all","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#d7e6f4"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi.school","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi.sports_complex","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#e5e5e5"},{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#ebf2fa"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#eeeeee"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"color":"#6f6f6f"}]},{"featureType":"road.local","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.station","elementType":"geometry.fill","stylers":[{"color":"#eeeeee"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#a3ccf0"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]}]
        };

        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(43.6529, -79.3849),
            map: map,
        });
    }

    $(function() {
        var header = $(".navbar");
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
        
            if (scroll >= 200) {
                header.addClass("shrinkNav");
                $('.navbarLogo').height(50);
                $('.navbarLogo').css("margin-top","7.5px");
                $('.navbarLogo').css("margin-bottom","7.5px");
            } else {
                header.removeClass("shrinkNav");
                $('.navbarLogo').height(65);
                $('.navbarLogo').css("margin-top","15px");
                $('.navbarLogo').css("margin-bottom","15px");
            }
        });
    });

//remove anchor tag url
    $(window).on('hashchange', function(e){
        history.replaceState ("", document.title, e.originalEvent.oldURL);
    });


//header color generator!!
    function getRandomColor(){
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
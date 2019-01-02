$(document).ready(function() {
    $(function() {
        var e=$(window);
        e.height(), Modernizr.touch&&$(".revealOnScroll").addClass("animated"), e.on("scroll", function() {
            var t=e.scrollTop(), l=e.height();
            $(".revealOnScroll:not(.animated)").each(function() {
                var e=$(this), i=e.offset().top;
                t+l>i&&(e.data("timeout")?window.setTimeout(function() {
                    e.addClass("animated "+e.data("animation"))
                }
                , parseInt(e.data("timeout"), 10)):e.addClass("animated "+e.data("animation")))
            }
            ), $(".revealOnScroll.animated").each(function(e) {
                $(this).offset().top, 0==t&&$(this).removeClass("animated fadeInUp bounceInLeft fadeInRight fadeInDown")
            }
            )
        }
        )
    }
    ), $(".navbar a").on("click", function() {
        $(".navbar-collapse").collapse("hide")
    }
    ), $('#myNav a[href^="#"], .coolButtonDiv a').click(function() {
        return $("html, body").animate( {
            scrollTop: $($.attr(this, "href")).offset().top-40
        }
        , 300), !1
    }
    ), google.maps.event.addDomListener(window, "load", function() {
        var e= {
            zoom:11, center:new google.maps.LatLng(43.6529, -79.3849), styles:[ {
                featureType:"all", elementType:"labels.icon", stylers:[ {
                    visibility: "off"
                }
                ]
            }
            , {
                featureType:"administrative", elementType:"geometry.fill", stylers:[ {
                    color: "#eeeeee"
                }
                ]
            }
            , {
                featureType:"administrative.country", elementType:"geometry", stylers:[ {
                    lightness: "100"
                }
                ]
            }
            , {
                featureType:"administrative.country", elementType:"geometry.stroke", stylers:[ {
                    lightness: "0"
                }
                , {
                    color: "#d0ecff"
                }
                ]
            }
            , {
                featureType:"administrative.country", elementType:"labels", stylers:[ {
                    visibility: "off"
                }
                ]
            }
            , {
                featureType:"administrative.province", elementType:"all", stylers:[ {
                    visibility: "off"
                }
                ]
            }
            , {
                featureType:"administrative.locality", elementType:"labels.text", stylers:[ {
                    visibility: "simplified"
                }
                , {
                    color: "#5594d3"
                }
                ]
            }
            , {
                featureType:"administrative.locality", elementType:"labels.icon", stylers:[ {
                    visibility: "simplified"
                }
                , {
                    lightness: 60
                }
                ]
            }
            , {
                featureType:"administrative.neighborhood", elementType:"all", stylers:[ {
                    visibility: "off"
                }
                ]
            }
            , {
                featureType:"administrative.land_parcel", elementType:"all", stylers:[ {
                    visibility: "off"
                }
                ]
            }
            , {
                featureType:"landscape.man_made", elementType:"all", stylers:[ {
                    visibility: "simplified"
                }
                , {
                    color: "#ffffff"
                }
                ]
            }
            , {
                featureType:"landscape.natural", elementType:"geometry", stylers:[ {
                    color: "#fafafa"
                }
                ]
            }
            , {
                featureType:"landscape.natural", elementType:"labels", stylers:[ {
                    visibility: "simplified"
                }
                ]
            }
            , {
                featureType:"poi", elementType:"geometry", stylers:[ {
                    color: "#eeeeee"
                }
                ]
            }
            , {
                featureType:"poi", elementType:"labels.icon", stylers:[ {
                    visibility: "off"
                }
                ]
            }
            , {
                featureType:"poi.attraction", elementType:"geometry", stylers:[ {
                    color: "#e8e8e8"
                }
                ]
            }
            , {
                featureType:"poi.business", elementType:"all", stylers:[ {
                    visibility: "simplified"
                }
                ]
            }
            , {
                featureType:"poi.business", elementType:"labels.icon", stylers:[ {
                    visibility: "off"
                }
                ]
            }
            , {
                featureType:"poi.medical", elementType:"all", stylers:[ {
                    color: "#eeeeee"
                }
                ]
            }
            , {
                featureType:"poi.park", elementType:"geometry", stylers:[ {
                    color: "#d7e6f4"
                }
                ]
            }
            , {
                featureType:"poi.park", elementType:"labels", stylers:[ {
                    visibility: "off"
                }
                ]
            }
            , {
                featureType:"poi.place_of_worship", elementType:"geometry", stylers:[ {
                    color: "#eeeeee"
                }
                ]
            }
            , {
                featureType:"poi.school", elementType:"geometry", stylers:[ {
                    color: "#eeeeee"
                }
                ]
            }
            , {
                featureType:"poi.sports_complex", elementType:"geometry", stylers:[ {
                    color: "#eeeeee"
                }
                ]
            }
            , {
                featureType:"road.highway", elementType:"geometry", stylers:[ {
                    color: "#e5e5e5"
                }
                , {
                    visibility: "simplified"
                }
                ]
            }
            , {
                featureType:"road.highway", elementType:"labels", stylers:[ {
                    visibility: "off"
                }
                ]
            }
            , {
                featureType:"road.arterial", elementType:"geometry.stroke", stylers:[ {
                    visibility: "off"
                }
                ]
            }
            , {
                featureType:"road.arterial", elementType:"labels.icon", stylers:[ {
                    visibility: "off"
                }
                ]
            }
            , {
                featureType:"road.local", elementType:"geometry.fill", stylers:[ {
                    color: "#ebf2fa"
                }
                ]
            }
            , {
                featureType:"road.local", elementType:"geometry.stroke", stylers:[ {
                    visibility: "on"
                }
                , {
                    color: "#eeeeee"
                }
                ]
            }
            , {
                featureType:"road.local", elementType:"labels", stylers:[ {
                    visibility: "simplified"
                }
                ]
            }
            , {
                featureType:"road.local", elementType:"labels.text", stylers:[ {
                    color: "#6f6f6f"
                }
                ]
            }
            , {
                featureType:"road.local", elementType:"labels.icon", stylers:[ {
                    visibility: "off"
                }
                ]
            }
            , {
                featureType:"transit", elementType:"all", stylers:[ {
                    visibility: "off"
                }
                ]
            }
            , {
                featureType:"transit.line", elementType:"labels", stylers:[ {
                    visibility: "off"
                }
                ]
            }
            , {
                featureType:"transit.station", elementType:"geometry.fill", stylers:[ {
                    color: "#eeeeee"
                }
                ]
            }
            , {
                featureType:"water", elementType:"all", stylers:[ {
                    visibility: "simplified"
                }
                ]
            }
            , {
                featureType:"water", elementType:"geometry.fill", stylers:[ {
                    color: "#a3ccf0"
                }
                ]
            }
            , {
                featureType:"water", elementType:"labels", stylers:[ {
                    visibility: "off"
                }
                ]
            }
            ]
        }
        , t=document.getElementById("map"), l=new google.maps.Map(t, e);
        new google.maps.Marker( {
            position: new google.maps.LatLng(43.6529, -79.3849), map: l
        }
        )
    }
    ), $(function() {
        var e=$(".navbar");
        $(window).scroll(function() {
            $(window).scrollTop()>=200?(e.addClass("shrinkNav"), $(".navbarLogo").height(50), $(".navbarLogo").css("margin-top", "7.5px"), $(".navbarLogo").css("margin-bottom", "7.5px")): (e.removeClass("shrinkNav"), $(".navbarLogo").height(65), $(".navbarLogo").css("margin-top", "15px"), $(".navbarLogo").css("margin-bottom", "15px"))
        }
        )
    }
    ), $(window).on("hashchange", function(e) {
        history.replaceState("", document.title, e.originalEvent.oldURL)
    }
    )
}

);
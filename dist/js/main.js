jQuery(document).ready(function () {

    jQuery(".phone-menu").click(function () {
        jQuery(this).toggleClass("change");
        jQuery('.sidenav').toggleClass('active');
    });
    jQuery(".closebtn").click(function () {
        jQuery('.phone-menu').toggleClass("change");
        jQuery('.sidenav').toggleClass('active');
    });

    $(function () {
        $('a[href*=\\#]:not([href=\\#])').on('click', function () {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.substr(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        });
    });

    var inview = new Waypoint.Inview({
        element: $('#first-waypoint')[0],
        enter: function (direction) {

        },
        entered: function (direction) {
            $('#first-waypoint').addClass('start');
        },
        exit: function (direction) {

        },
        exited: function (direction) {
            $('#first-waypoint').removeClass('start');
        }
    });

    var inview2 = new Waypoint.Inview({
        element: $('#second-waypoint')[0],
        enter: function (direction) {

        },
        entered: function (direction) {
            $('#second-waypoint').addClass('start');
        },
        exit: function (direction) {

        },
        exited: function (direction) {
            $('#second-waypoint').removeClass('start');
        }
    });

    var inview3 = new Waypoint.Inview({
        element: $('#third-waypoint')[0],
        enter: function (direction) {

        },
        entered: function (direction) {
            $('#third-waypoint').addClass('start');
        },
        exit: function (direction) {

        },
        exited: function (direction) {
            $('#third-waypoint').removeClass('start');
        }
    });

    var inview4 = new Waypoint.Inview({
        element: $('#fourth-waypoint')[0],
        enter: function (direction) {

        },
        entered: function (direction) {
            $('#fourth-waypoint').addClass('start');
        },
        exit: function (direction) {

        },
        exited: function (direction) {
            $('#fourth-waypoint').removeClass('start');
        }
    });

    var inview5 = new Waypoint.Inview({
        element: $('#fifth-waypoint')[0],
        enter: function (direction) {

        },
        entered: function (direction) {
            $('#fifth-waypoint').addClass('start');
        },
        exit: function (direction) {

        },
        exited: function (direction) {
            $('#fifth-waypoint').removeClass('start');
        }
    });

    var inview6 = new Waypoint.Inview({
        element: $('#sixth-waypoint')[0],
        enter: function (direction) {

        },
        entered: function (direction) {
            $('#sixth-waypoint').addClass('start');
        },
        exit: function (direction) {

        },
        exited: function (direction) {
            $('#sixth-waypoint').removeClass('start');
        }
    });
    
    var myPath = document.getElementById("eleventh-img2");
    var length = myPath.getTotalLength();
    console.log(length);


    function pathPrepare($el) {
        var lineLength = $el[0].getTotalLength();
        $el.css("stroke-dasharray", lineLength);
        $el.css("stroke-dashoffset", lineLength);
    }

    var $shape = $("path#Path1");
    var $shape2 = $("path#Path2");
    var $rays = $("path.rays");
    var $compass = $("path.compass");
    var $circle = $("circle.compass");
    var $text = $("path.text");
    var $img1a = $("path#first-img1");
    var $img1b = $("path#first-img2");
    var $img2a = $("path#second-img1");
    var $img2b = $("path#second-img2");
    var $img2c = $("path.second-img3");
    var $img3a = $("path#third-img1");
    var $img4a = $("path#fourth-img1");
    var $img5a = $("path#fifth-img1");
    var $img6a = $("path#sixth-img1");
    var $img7a = $("path#seventh-img1");
    var $img8a = $("path#eighth-img1");
    var $img9a = $("path#nineth-img1");
    var $img9b = $("path#nineth-img2");
    var $img10a = $("path#tenth-img1");
    var $img10b = $("path#tenth-img2");
    var $img10c = $("path#tenth-img3");
    var $img11a = $("path#eleventh-img1");
    var $img11b = $("path#eleventh-img2");

    // prepare SVG
    pathPrepare($shape);

    // init controller
    var controller = new ScrollMagic.Controller();

    // build tween
    var tween = new TimelineMax()
            .add(TweenMax.to($shape, 1, {strokeDashoffset: 0, ease: Linear.easeNone}));
    var tween2 = new TimelineMax()
            .add(TweenMax.to($rays, 1, {strokeDashoffset: 0, ease: Linear.easeNone}));
    var tween3 = new TimelineMax()
            .add(TweenMax.to($compass, 0.8, {strokeDashoffset: 0, ease: Linear.easeNone}))
            .add(TweenMax.to($circle, 0.2, {strokeDashoffset: 0, ease: Linear.easeNone}));
    var tween4 = new TimelineMax()
            .add(TweenMax.to($text, 1, {strokeDashoffset: 0, ease: Linear.easeNone}));
    var tween5 = new TimelineMax()
            .add(TweenMax.to($shape2, 1, {strokeDashoffset: 0, ease: Linear.easeNone}));
    var tween6 = new TimelineMax()
            .add(TweenMax.to($img1a, 0.5, {strokeDashoffset: 0, ease: Linear.easeNone}))
            .add(TweenMax.to($img1b, 0.5, {strokeDashoffset: 0, ease: Linear.easeNone}));
    var tween7 = new TimelineMax()
            .add(TweenMax.to($img2a, 0.4, {strokeDashoffset: 0, ease: Linear.easeNone}))
            .add(TweenMax.to($img2b, 0.4, {strokeDashoffset: 0, ease: Linear.easeNone}))
            .add(TweenMax.to($img2c, 0.2, {strokeDashoffset: 0, ease: Linear.easeNone}));
    var tween8 = new TimelineMax()
            .add(TweenMax.to($img3a, 1, {strokeDashoffset: 0, ease: Linear.easeNone}));
    var tween9 = new TimelineMax()
            .add(TweenMax.to($img4a, 1, {strokeDashoffset: 0, ease: Linear.easeNone}));
    var tween10 = new TimelineMax()
            .add(TweenMax.to($img5a, 1, {strokeDashoffset: 0, ease: Linear.easeNone}));
    var tween11 = new TimelineMax()
            .add(TweenMax.to($img6a, 1, {strokeDashoffset: 0, ease: Linear.easeNone}));
    var tween12 = new TimelineMax()
            .add(TweenMax.to($img7a, 1, {strokeDashoffset: 0, ease: Linear.easeNone}));
    var tween13 = new TimelineMax()
            .add(TweenMax.to($img8a, 1, {strokeDashoffset: 0, ease: Linear.easeNone}));
    var tween14 = new TimelineMax()
            .add(TweenMax.to($img9a, 0.7, {strokeDashoffset: 0, ease: Linear.easeNone}))
            .add(TweenMax.to($img9b, 0.3, {strokeDashoffset: 0, ease: Linear.easeNone}));
    var tween15 = new TimelineMax()
            .add(TweenMax.to($img10a, 0.6, {strokeDashoffset: 0, ease: Linear.easeNone}))
            .add(TweenMax.to($img10b, 0.2, {strokeDashoffset: 0, ease: Linear.easeNone}))
            .add(TweenMax.to($img10c, 0.2, {strokeDashoffset: 0, ease: Linear.easeNone}));
    var tween16 = new TimelineMax()
            .add(TweenMax.to($img11a, 0.6, {strokeDashoffset: 0, ease: Linear.easeNone}))
            .add(TweenMax.to($img11b, 0.4, {strokeDashoffset: 0, ease: Linear.easeNone}));

    if ($(window).width() > 1199) {
        // build scene
        var scene = new ScrollMagic.Scene({
            triggerElement: "#Path1",
            offset: 30,
            triggerHook: "onCenter",
            duration: 2190,
            tweenChanges: true
        })
                .setTween(tween)
                .addTo(controller);

        var scene = new ScrollMagic.Scene({
            triggerElement: "#Path2",
            offset: 30,
            triggerHook: "onCenter",
            duration: 2154,
            tweenChanges: true
        })
                .setTween(tween5)
                .addTo(controller);
    } else {
        // build scene
        var scene = new ScrollMagic.Scene({
            triggerElement: "#Path1",
            offset: 30,
            triggerHook: "onCenter",
            duration: 1831,
            tweenChanges: true
        })
                .setTween(tween)
                .addTo(controller);

        var scene = new ScrollMagic.Scene({
            triggerElement: "#Path2",
            offset: 30,
            triggerHook: "onCenter",
            duration: 1785,
            tweenChanges: true
        })
                .setTween(tween5)
                .addTo(controller);
    }



    var scene2 = new ScrollMagic.Scene({triggerElement: "#rays", duration: 300, tweenChanges: true})
            .setTween(tween2)
            .addTo(controller);
    var scene3 = new ScrollMagic.Scene({triggerElement: "#compass", duration: 200, tweenChanges: true})
            .setTween(tween3)
            .addTo(controller);
    var scene4 = new ScrollMagic.Scene({triggerElement: "#text", duration: 200, tweenChanges: true})
            .setTween(tween4)
            .addTo(controller);
    var scene5 = new ScrollMagic.Scene({triggerElement: "#first-img", duration: 200, tweenChanges: true})
            .setTween(tween6)
            .addTo(controller);
    var scene6 = new ScrollMagic.Scene({triggerElement: "#second-img", offset: -120, duration: 424, tweenChanges: true})
            .setTween(tween7)
            .addTo(controller);
    var scene7 = new ScrollMagic.Scene({triggerElement: "#third-img", offset: -100, duration: 300, tweenChanges: true})
            .setTween(tween8)
            .addTo(controller);
    var scene8 = new ScrollMagic.Scene({triggerElement: "#fourth-img", offset: -80, duration: 295, tweenChanges: true})
            .setTween(tween9)
            .addTo(controller);
    var scene9 = new ScrollMagic.Scene({triggerElement: "#fifth-img", offset: -100, duration: 300, tweenChanges: true})
            .setTween(tween10)
            .addTo(controller);
    var scene10 = new ScrollMagic.Scene({triggerElement: "#sixth-img", offset: -60, duration: 220, tweenChanges: true})
            .setTween(tween11)
            .addTo(controller);
    var scene11 = new ScrollMagic.Scene({triggerElement: "#seventh-img", offset: -100, duration: 310, tweenChanges: true})
            .setTween(tween12)
            .addTo(controller);
    var scene12 = new ScrollMagic.Scene({triggerElement: "#eighth-img", offset: -150, duration: 500, tweenChanges: true})
            .setTween(tween13)
            .addTo(controller);
    var scene13 = new ScrollMagic.Scene({triggerElement: "#nineth-img", offset: -150, duration: 400, tweenChanges: true})
            .setTween(tween14)
            .addTo(controller);
    var scene14 = new ScrollMagic.Scene({triggerElement: "#tenth-img", offset: -150, duration: 300, tweenChanges: true})
            .setTween(tween15)
            .addTo(controller);
    var scene15 = new ScrollMagic.Scene({triggerElement: "#eleventh-img", offset: -150, duration: 300, tweenChanges: true})
            .setTween(tween16)
            .addTo(controller);

});
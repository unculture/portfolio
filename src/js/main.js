"use strict";

var TweenMax = require("gsap/src/uncompressed/TweenMax");
var $ = require("jquery");

(function() {
    var blocks = $(".blocks__block");

    var scrollHandler = function() {
        var scrollBottom = $(window).scrollTop() + window.innerHeight;

        blocks.each(function(i) {
            var $this = $(this);

            var t = $this.offset().top;
            var h = $this.height();

            if (t - scrollBottom > 400) {
                return false;
            }

            if (t + h < scrollBottom) {
                return;
            }

            if (t < scrollBottom && !TweenMax.isTweening(this) && this.isIn !== true) {
                TweenMax.fromTo(this, 0.8, {
                    perspective: "200em",
                    rotationX: "25deg"
                }, {
                    perspective: 0,
                    rotationX: 0,
                    overwrite: true,
                    force3D: true,
                    ease: Power2.easeInOut,
                    onComplete: function () {
                        this.isIn = true
                    }.bind(this)
                });
            }

            if (t >= scrollBottom) {
                TweenMax.set(this, {
                    perspective: "200em",
                    rotationX: "25deg"
                });

                this.isIn = false;
            }

        });
    };

    scrollHandler();

    $(window).on("scroll", scrollHandler);
})();



"use strict";

var $ = require("jquery");

(function() {

    $(".nav-handle").click(function() {
        $(".main-navigation").toggleClass("is-active");
    });
})();



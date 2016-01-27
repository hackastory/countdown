'use strict';

var sound = new Audio('stop.mp3');
var TIME_IN_SECONDS = 5;
var isCounting = false;
var $logo = $("#logo");
var $text = $("#text");
var $body = $("body");

function $(selector) {
    return document.querySelector(selector);
}

function reset() {
    $body.className = "";
    $logo.className = "";
    $text.innerHTML = 'GO';
}

function timeup() {
    isCounting = false;
    $body.className = "timeup";
    $text.innerHTML = "TIME UP";
    sound.currentTime = 0;
    sound.play();
}

function setup() {
    $logo.onclick = function() {
        isCounting = false;
        reset();
    }

    $text.onclick = function() {
        countdown();
    }
}

function countdown() {
    $body.className = "";
    isCounting = true;
    var then = +new Date();

    function anim() {
        var now = +new Date();
        var diff = TIME_IN_SECONDS - Math.round( (now - then) / 1000);
        $text.innerHTML = diff;

        if (diff < 1) {
            $logo.className = "";
            timeup();
        } else if (isCounting) {
            $logo.className = "pulse";
            requestAnimationFrame(anim);
        } else {
            reset();
        }

    }

    anim();
}

setup();
reset();
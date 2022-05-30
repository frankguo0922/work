"use strict";

var persent = 0;
var timer = setInterval(function () {
  $(".bar").css("width", persent + "%");
  persent += 1;

  if (persent > 100) {
    $(".atext").addClass("complete");
    clearInterval(timer);
    setTimeout(eatcount, 3000);
  }
}, 15);
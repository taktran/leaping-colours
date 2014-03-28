/*global Two:true, Leap:true */
(function (){
  'use strict';

  function getRandomColor() {
    return 'rgb(' +
      Math.floor(Math.random() * 255) + ',' +
      Math.floor(Math.random() * 255) + ',' +
      Math.floor(Math.random() * 255) + ')';
  }


  $(function() {

    var two = new Two({
      fullscreen: true,
      autostart: true
    }).appendTo(document.body);

    var rect = two.makeRectangle(two.width / 2, two.height / 2, 250, 250);
    var rectElem = $('#two-' + rect.id);
    rect.noStroke().fill = getRandomColor();

    // Update the renderer in order to generate corresponding DOM Elements.
    two.update();

    rectElem
      .css('cursor', 'pointer')
      .click(function(e) {
        rect.fill = getRandomColor();
      });

    two.bind('update', function(frameCount, timeDelta) {
      rect.rotation = frameCount / 60;
    });


    Leap.loop(function(obj) {
      if (obj.hands.length < 1) {
        return;
      }

      var hand = obj.hands[0];

      var x = hand.palmPosition[0];
      var y = hand.palmPosition[1];
      // var z = hand.palmPosition[2];

      var hue = Math.round(x/2) % 360;
      var saturation = Math.round(y/3);

      var color = "hsl(" + hue + "," + saturation + "%,50%)";
      rect.fill = color;

    });

  });



})();
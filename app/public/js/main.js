/*global Two:true */
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
    rect.noStroke().fill = getRandomColor();

    // Update the renderer in order to generate corresponding DOM Elements.
    two.update();

    $(('#two-' + rect.id))
      .css('cursor', 'pointer')
      .click(function(e) {
        rect.fill = getRandomColor();
      });

    two.bind('update', function(frameCount, timeDelta) {
      rect.rotation = frameCount / 60;
    });

  });



})();
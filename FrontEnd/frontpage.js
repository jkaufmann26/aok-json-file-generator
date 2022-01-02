$('#dragThis').draggable({
  drag: function() {
    var offset = $(this).offset();
    var xPos = Math.abs(offset.left);
    var yPos = Math.abs(offset.top);
    $('#posX').text('x: ' + xPos);
    $('#posY').text('y: ' + yPos);
  },
  stop: function(event, ui) {

    // Show dropped position.
    var Stoppos = $(this).position();
    var left = Math.abs(Stoppos.left);
    var top = Math.abs(Stoppos.top);
    $('#posY').text('top: ' + top);
  }

});

$('#dragThis2').draggable({
  drag: function() {
    var offset = $(this).offset();
    var xPos = Math.abs(offset.left);
    var yPos = Math.abs(offset.top);
    $('#posX1').text('x: ' + xPos);
    $('#posY1').text('y: ' + yPos);
  },
  stop: function(event, ui) {

    // Show dropped position.
    var Stoppos = $(this).position();
    var left = Math.abs(Stoppos.left);
    var top = Math.abs(Stoppos.top);
    $('#posX1').text('left: ' + left);
    $('#posY1').text('top: ' + top);
  }

});

var enemyX1=1190;
var enemyX2=1415;
var enemyX3=1640;
var enemyY1=0;
var enemyY2=0;
var enemyY3=0;

var allyX1=0;
var allyX2=225;
var allyX3=450;
var allyY1=0;
var allyY2=0;
var allyY3=0;

var yOffset = 1000; //verticle resolution - 80 in this case 1080-80
var enemyXOffset = 63;

$('#dragEnemy1').draggable({
  drag: function() {
    var offset = $(this).offset();
    var xPos = Math.abs(offset.left);
    var yPos = Math.abs(offset.top);
    enemyX1 = xPos;
    enemyY1 = yPos
    console.log('enemyx1: ',xPos,'enemyy1: ', yPos);
  },
});

$('#dragEnemy2').draggable({
  drag: function() {
    var offset = $(this).offset();
    var xPos = Math.abs(offset.left);
    var yPos = Math.abs(offset.top);
    enemyX2 = xPos;
    enemyY2 = yPos
  },
});
$('#dragEnemy3').draggable({
  drag: function() {
    var offset = $(this).offset();
    var xPos = Math.abs(offset.left);
    var yPos = Math.abs(offset.top);
    enemyX3 = xPos;
    enemyY3 = yPos
  },
});

$('#dragAlly2').draggable({
  drag: function() {
    var offset = $(this).offset();
    var xPos = Math.abs(offset.left);
    var yPos = Math.abs(offset.top);
    allyX1 = xPos;
    allyY1 = yPos
  },
});


$('#dragAlly1').draggable({
  drag: function() {
    var offset = $(this).offset();
    var xPos = Math.abs(offset.left);
    var yPos = Math.abs(offset.top);
    allyX2 = xPos;
    allyY2 = yPos
  },
});


$('#dragAlly3').draggable({
  drag: function() {
    var offset = $(this).offset();
    var xPos = Math.abs(offset.left);
    var yPos = Math.abs(offset.top);
    allyX3 = xPos;
    allyY3 = yPos
  },
});



//Seperator for the stuff I was gonna do in py, think it might just be easier to keep it all in js
//Idk how files are supposed to work in js, so I just left it in here, we can move it later if it should be moved
//a1X,a1Y,a2X,a2Y,a3X,a3Y,e1X,e1Y,e2X,e2Y,e3X,e3Y
function generateJson() //probably compress this into an array or 2 or 6 (1 defined in order, 2 all x/ys in order, 6 basically tuples)
{
  let test={
    "VIDEO_FPS_BACKGROUND" : "REFRESH_RATE",
    "VIDEO_FPS_FOREGROUND" : "REFRESH_RATE",
    "VIDEO_VSYNC" : "false",
    "VIDEO_FULLSCREEN_MODE" : "false",
    "NETWORK_REGION_USEAST1" : "true",
    "CURSOR_HIGHLIGHTING" : "true",
    "STICKY_TARGETING" : "true",
    "PARTY_TABS" : "true",
    "CLICK_ALLY_HOLD_SHIFT" : "true",
    "CLICK_ENEMY_HOLD_CONTROL" : "true",
    "NAMEPLATE_EMBEDDED_KEYBINDS" : "true",
    "NAMEPLATE_USE_CHARACTER_NAME" : "true",
    "NAMEPLATE_USE_CLASS_NAME" : "true",
    "NAMEPLATE_USE_KEYBIND" : "false",
    "NAMEPLATE_USE_NUMBER" : "false",
    "NAMEPLATE_TARGET_INDICATOR_ALLY" : "true",
    "NAMEPLATE_TARGET_INDICATOR_ENEMY" : "true",
    "NAMEPLATE_HIDE_ALLY" : "false",
    "NAMEPLATE_HIDE_ENEMY" : "false",
    "ALLY_TARGET_FEET_GLOW" : "true",
    "ALLY_PARTY_FRAME_SPACER" : "0",
    "ALLY_1_PARTY_FRAME_HIDDEN" : "false",
    "ALLY_1_PARTY_FRAME_X_OFFSET" : String(allyX1),
    "ALLY_1_PARTY_FRAME_Y_OFFSET" : String(yOffset-allyY1),
    "ALLY_2_PARTY_FRAME_HIDDEN" : "false",
    "ALLY_2_PARTY_FRAME_X_OFFSET" : String(allyX2),
    "ALLY_2_PARTY_FRAME_Y_OFFSET" : String(yOffset-allyY2),
    "ALLY_3_PARTY_FRAME_HIDDEN" : "false",
    "ALLY_3_PARTY_FRAME_X_OFFSET" : String(allyX3),
    "ALLY_3_PARTY_FRAME_Y_OFFSET" : String(yOffset-allyY3),
    "ENEMY_TARGET_FEET_GLOW" : "true",
    "ENEMY_PARTY_FRAME_SPACER" : "0",
    "ENEMY_1_PARTY_FRAME_HIDDEN" : "false",
    "ENEMY_1_PARTY_FRAME_X_OFFSET" : String(enemyX1-enemyXOffset),
    "ENEMY_1_PARTY_FRAME_Y_OFFSET" : String(yOffset-enemyY1),
    "ENEMY_2_PARTY_FRAME_HIDDEN" : "false",
    "ENEMY_2_PARTY_FRAME_X_OFFSET" : String(enemyX2-enemyXOffset),
    "ENEMY_2_PARTY_FRAME_Y_OFFSET" : String(yOffset-enemyY2),
    "ENEMY_3_PARTY_FRAME_HIDDEN" : "false",
    "ENEMY_3_PARTY_FRAME_X_OFFSET" : String(enemyX3-enemyXOffset),
    "ENEMY_3_PARTY_FRAME_Y_OFFSET" : String(yOffset-enemyY3),
    "SHOW_PLAY_UI_LONGBAR" : "true",
    "SHOW_PLAY_UI_BACKDROP" : "true",
    "VOLUME_LEVEL" : "100",
    "PLAY_HIDE_CHANNEL_CHAT" : "false",
    "PLAY_HIDE_CHANNEL_FRAME" : "true",
    "PLAY_ROLE_QUEUE_DPS" : "false",
    "PLAY_ROLE_QUEUE_HEALER" : "false"
  }
  return test;
}

function download(text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', 'options.json');

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

$(document).keypress(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(keycode == '13'){
      download(JSON.stringify(generateJson(),null,'\t'));
  }
});
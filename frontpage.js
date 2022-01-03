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

var ally1Check=false;
var ally2Check=false;
var ally3Check=false;
var enemy1Check=false;
var enemy2Check=false;
var enemy3Check=false;
var allAllyCheck=false;
var allEnemyCheck=false;

var yOffset = 1000; //verticle resolution - 80 in this case 1080-80
var enemyXOffset = 63;

var options;

$.getJSON("Presets/options.json", function(json) {
  options = json;
  console.log(options); // this will show the info it in firebug console
});

$('#dragEnemy1').draggable({
  drag: function() {
    var offset = $(this).offset();
    var xPos = Math.abs(offset.left);
    var yPos = Math.abs(offset.top);
    enemyX1 = xPos;
    enemyY1 = yPos;
  },
});

$('#dragEnemy2').draggable({
  drag: function() {
    var offset = $(this).offset();
    var xPos = Math.abs(offset.left);
    var yPos = Math.abs(offset.top);
    enemyX2 = xPos;
    enemyY2 = yPos;
  },
});
$('#dragEnemy3').draggable({
  drag: function() {
    var offset = $(this).offset();
    var xPos = Math.abs(offset.left);
    var yPos = Math.abs(offset.top);
    enemyX3 = xPos;
    enemyY3 = yPos;
  },
});

$('#dragAlly1').draggable({
  drag: function() {
    var offset = $(this).offset();
    var xPos = Math.abs(offset.left);
    var yPos = Math.abs(offset.top);
    allyX1 = xPos;
    allyY1 = yPos;
  },
});


$('#dragAlly2').draggable({
  drag: function() {
    var offset = $(this).offset();
    var xPos = Math.abs(offset.left);
    var yPos = Math.abs(offset.top);
    allyX2 = xPos;
    allyY2 = yPos;
  },
});


$('#dragAlly3').draggable({
  drag: function() {
    var offset = $(this).offset();
    var xPos = Math.abs(offset.left);
    var yPos = Math.abs(offset.top);
    allyX3 = xPos;
    allyY3 = yPos;
  },
});

function valueChangedAlly1(){
  if(document.getElementById("allyChecked1").checked){
    document.getElementById('dragAlly1').style.display = 'block';
    ally1Check = true;
  }
  else{
    document.getElementById('dragAlly1').style.display = 'none';
    ally1Check = false
  }
}
    
function valueChangedAlly2(){
  if(document.getElementById("allyChecked2").checked){
    document.getElementById('dragAlly2').style.display = 'block';
    ally2Check = true;
  }
  else {
    document.getElementById('dragAlly2').style.display = 'none';
    ally2Check = false;
  }
}

function valueChangedAlly3(){
  if(document.getElementById("allyChecked3").checked){
    document.getElementById('dragAlly3').style.display = 'block';
    ally3Check = true;
  }
  else{ 
    document.getElementById('dragAlly3').style.display = 'none';
    ally3Check = false;
  }
}
    
function valueChangedEnemy1(){
    if(document.getElementById("enemyChecked1").checked){
      document.getElementById('dragEnemy1').style.display = 'block';
      enemy1Check = true;
    }
    else{
      document.getElementById('dragEnemy1').style.display = 'none';
      enemy1Check = false;
    }

}

function valueChangedEnemy2()
{
  if(document.getElementById("enemyChecked2").checked){
    document.getElementById('dragEnemy2').style.display = 'block';
    enemy2Check = true;
  }
  else{
    document.getElementById('dragEnemy2').style.display = 'none';
    enemy2Check = false;

  }
}
    
function valueChangedEnemy3()
{
  if(document.getElementById("enemyChecked3").checked){
    document.getElementById('dragEnemy3').style.display = 'block';
    enemy3Check = true;
  }
  else{
    document.getElementById('dragEnemy3').style.display = 'none';
    enemy3Check = false;

  }
}

function valueChangedAllyAll()
{
  if(document.getElementById("allAllyChecked").checked){
    document.getElementById('dragAlly1').style.display = 'block';
    document.getElementById("allyChecked1").checked = true;
    document.getElementById('dragAlly2').style.display = 'block';
    document.getElementById("allyChecked2").checked = true;
    document.getElementById('dragAlly3').style.display = 'block';
    document.getElementById("allyChecked3").checked = true;
    allAllyCheck = true;
  }
  else{
    document.getElementById('dragAlly1').style.display = 'none';
    document.getElementById("allyChecked1").checked = false;
    document.getElementById('dragAlly2').style.display = 'none';
    document.getElementById("allyChecked2").checked = false;
    document.getElementById('dragAlly3').style.display = 'none';
    document.getElementById("allyChecked3").checked = false;
    allAllyCheck = false;
  }
}

function valueChangedEnemyAll()
{
  if(document.getElementById("allEnemyChecked").checked){
    document.getElementById('dragEnemy1').style.display = 'block';
    document.getElementById("enemyChecked1").checked = true;
    document.getElementById('dragEnemy2').style.display = 'block';
    document.getElementById("enemyChecked2").checked = true;
    document.getElementById('dragEnemy3').style.display = 'block';
    document.getElementById("enemyChecked3").checked = true;
    allEnemyCheck = true;
  }
  else{
    document.getElementById('dragEnemy1').style.display = 'none';
    document.getElementById("enemyChecked1").checked = false;
    document.getElementById('dragEnemy2').style.display = 'none';
    document.getElementById("enemyChecked2").checked = false;
    document.getElementById('dragEnemy3').style.display = 'none';
    document.getElementById("enemyChecked3").checked = false;
    allEnemyCheck = false;
  }
}


function generateJson()
{
  options.NAMEPLATE_HIDE_ALLY=String(allAllyCheck);
  options.NAMEPLATE_HIDE_ENEMY=String(allEnemyCheck);
  options.ALLY_1_PARTY_FRAME_HIDDEN=String(ally1Check);
  options.ALLY_1_PARTY_FRAME_X_OFFSET=String(allyX1);
  options.ALLY_1_PARTY_FRAME_Y_OFFSET=String(yOffset-allyY1);
  options.ALLY_2_PARTY_FRAME_HIDDEN=String(ally2Check);
  options.ALLY_2_PARTY_FRAME_X_OFFSET=String(allyX2);
  options.ALLY_2_PARTY_FRAME_Y_OFFSET=String(yOffset-allyY2);
  options.ALLY_3_PARTY_FRAME_HIDDEN=String(ally3Check);
  options.ALLY_3_PARTY_FRAME_X_OFFSET=String(allyX3);
  options.ALLY_3_PARTY_FRAME_Y_OFFSET=String(yOffset-allyY3);
  options.ENEMY_1_PARTY_FRAME_HIDDEN=String(enemy1Check);
  options.ENEMY_1_PARTY_FRAME_X_OFFSET=String(enemyX1-enemyXOffset);
  options.ENEMY_1_PARTY_FRAME_Y_OFFSET=String(yOffset-enemyY1);
  options.ENEMY_2_PARTY_FRAME_HIDDEN=String(enemy2Check);
  options.ENEMY_2_PARTY_FRAME_X_OFFSET=String(enemyX2-enemyXOffset);
  options.ENEMY_2_PARTY_FRAME_Y_OFFSET=String(yOffset-enemyY2);
  options.ENEMY_3_PARTY_FRAME_HIDDEN=String(enemy3Check);
  options.ENEMY_3_PARTY_FRAME_X_OFFSET=String(enemyX3-enemyXOffset);
  options.ENEMY_3_PARTY_FRAME_Y_OFFSET=String(yOffset-enemyY3);

  return options;
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
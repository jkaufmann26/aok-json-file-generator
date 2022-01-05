var options;

var yOffset;
var enemyXOffset;
var enemyX1;
var enemyX2;
var enemyX3;
var enemyY1;
var enemyY2;
var enemyY3;

var allyX1;
var allyX2;
var allyX3;
var allyY1;
var allyY2;
var allyY3;

var ally1Check;
var ally2Check;
var ally3Check;
var enemy1Check;
var enemy2Check;
var enemy3Check;
var allAllyCheck;
var allEnemyCheck;
var partyTab;
var showBar;
loadJson("Presets/original.json");

//All global definitions should be together up here, makes reading a lot easier
//Make sure everything in the json has an initial value, or it will populate the file with 'undefined'
// var keys = Object.keys(options);
// console.log(keys);
var snapX = 20;
var snapY = 20;

function loadJsonText()
{
  var inFile = document.getElementById('jsonIn').value;
  options = JSON.parse(inFile);
  // console.log(options);
  updateVars();
}

function handleFileSelect(evt) {
  const reader = new FileReader()
  reader.onload = handleFileLoad;
  reader.readAsText(evt.target.files[0])
}

function handleFileLoad(event){
  console.log(event);
  // document.getElementById('fileContent').textContent = event.target.result;
  options= JSON.parse(event.target.result);
  // console.log(options);
  updateVars();
}

function uploadInit(){
  document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);
}

$('#dragEnemy1').draggable({
  drag: function() {
    var offset = $(this).offset();
    var xPos = Math.abs(offset.left);
    var yPos = Math.abs(offset.top);
    enemyX1 = xPos;
    enemyY1 = yPos;
    // console.log(enemyX1, enemyY1);
  },
  grid: [ 1, 1 ],
  snap: true,
  containment: "parent",
});

$('#dragEnemy2').draggable({
  drag: function() {
    var offset = $(this).offset();
    var xPos = Math.abs(offset.left);
    var yPos = Math.abs(offset.top);
    enemyX2 = xPos;
    enemyY2 = yPos;
  },
  grid: [ 1, 1 ],
  snap: true,
  containment: "parent" ,
});
$('#dragEnemy3').draggable({
  drag: function() {
    var offset = $(this).offset();
    var xPos = Math.abs(offset.left);
    var yPos = Math.abs(offset.top);
    enemyX3 = xPos;
    enemyY3 = yPos;
  },
  grid: [ 1, 1 ],
  snap: true,
  containment: "parent" ,
});

$('#dragAlly1').draggable({
  drag: function() {
    var offset = $(this).offset();
    var xPos = Math.abs(offset.left);
    var yPos = Math.abs(offset.top);
    allyX1 = xPos;
    allyY1 = yPos;
  },
  grid: [ 1, 1 ],
  snap: true,
  containment: "parent",
});


$('#dragAlly2').draggable({
  drag: function() {
    var offset = $(this).offset();
    var xPos = Math.abs(offset.left);
    var yPos = Math.abs(offset.top);
    allyX2 = xPos;
    allyY2 = yPos;
  },
  grid: [ 1, 1 ],
  snap: true,
  containment: "parent" ,
});


$('#dragAlly3').draggable({
  drag: function() {
    var offset = $(this).offset();
    var xPos = Math.abs(offset.left);
    var yPos = Math.abs(offset.top);
    allyX3 = xPos;
    allyY3 = yPos;
  },
  grid: [ 1, 1 ],
  snap: true,
  containment: "parent" ,
});

//Commented the press enter to download, afraid a user will accidentally hold enter on like chrome or somethign that auto-dls could re-add with a confirm window maybe
// $(document).keypress(function(event){
//   var keycode = (event.keyCode ? event.keyCode : event.which);
//   if(keycode == '13'){
//       // download(JSON.stringify(generateJson(),null,'\t'));
//   }
// });

document.addEventListener('keydown', (e) => {
  switch(e.key){
    case "Shift":
      enableSnap();
      break;
    case "-":
      snapX-=5;
      snapY-=5;
      break;
    case "=":
      snapX+=5;
      snapY+=5;
      break;
    case "_":
      snapX-=25;
      snapY-=25;
      break;
    case "+":
      snapX+=25;
      snapY+=25;
      break;
    default:
      break;
  }
  if(snapX<1)
    snapX=1;
  if(snapY<1)
    snapY=1;
})

window.addEventListener('keyup', (e) => {
  if(e.key == "Shift")
  {
    disableSnap();
  }
})

function valueChangedAlly1(){
  if(document.getElementById("allyChecked1").checked){
    document.getElementById('dragAlly1').style.display = 'none';
    ally1Check = true;
  }
  else{
    document.getElementById('dragAlly1').style.display = 'block';
    ally1Check = false
  }
}
    
function valueChangedAlly2(){
  if(document.getElementById("allyChecked2").checked){
    document.getElementById('dragAlly2').style.display = 'none';
    ally2Check = true;
  }
  else {
    document.getElementById('dragAlly2').style.display = 'block';
    ally2Check = false;
  }
}

function valueChangedAlly3(){
  if(document.getElementById("allyChecked3").checked){
    document.getElementById('dragAlly3').style.display = 'none';
    ally3Check = true;
  }
  else{ 
    document.getElementById('dragAlly3').style.display = 'block';
    ally3Check = false;
  }
}
    
function valueChangedEnemy1(){
    if(document.getElementById("enemyChecked1").checked){
      document.getElementById('dragEnemy1').style.display = 'none';
      enemy1Check = true;
    }
    else{
      document.getElementById('dragEnemy1').style.display = 'block';
      enemy1Check = false;
    }

}

function valueChangedEnemy2()
{
  if(document.getElementById("enemyChecked2").checked){
    document.getElementById('dragEnemy2').style.display = 'none';
    enemy2Check = true;
  }
  else{
    document.getElementById('dragEnemy2').style.display = 'block';
    enemy2Check = false;

  }
}
    
function valueChangedEnemy3()
{
  if(document.getElementById("enemyChecked3").checked){
    document.getElementById('dragEnemy3').style.display = 'none';
    enemy3Check = true;
  }
  else{
    document.getElementById('dragEnemy3').style.display = 'block';
    enemy3Check = false;

  }
}
    
function valueChangedBottomBar()
{
  if(document.getElementById("bottomBar").checked){
    document.getElementById('bottomBar').style.display = 'block';
    showBar = true;
  }
  else{
    document.getElementById('bottomBar').style.display = 'none';
    showBar = false;

  }
}

function valueChangedAllyAll()
{
  if(document.getElementById("allAllyChecked").checked){
    document.getElementById('dragAlly1').style.display = 'none';
    document.getElementById("allyChecked1").checked = true;
    document.getElementById('dragAlly2').style.display = 'none';
    document.getElementById("allyChecked2").checked = true;
    document.getElementById('dragAlly3').style.display = 'none';
    document.getElementById("allyChecked3").checked = true;
    allAllyCheck = true;
  }
  else{
    document.getElementById('dragAlly1').style.display = 'block';
    document.getElementById("allyChecked1").checked = false;
    document.getElementById('dragAlly2').style.display = 'block';
    document.getElementById("allyChecked2").checked = false;
    document.getElementById('dragAlly3').style.display = 'block';
    document.getElementById("allyChecked3").checked = false;
    allAllyCheck = false;
  }
}

function valueChangedEnemyAll()
{
  if(document.getElementById("allEnemyChecked").checked){
    document.getElementById('dragEnemy1').style.display = 'none';
    document.getElementById("enemyChecked1").checked = true;
    document.getElementById('dragEnemy2').style.display = 'none';
    document.getElementById("enemyChecked2").checked = true;
    document.getElementById('dragEnemy3').style.display = 'none';
    document.getElementById("enemyChecked3").checked = true;
    allEnemyCheck = true;
  }
  else{
    document.getElementById('dragEnemy1').style.display = 'block';
    document.getElementById("enemyChecked1").checked = false;
    document.getElementById('dragEnemy2').style.display = 'block';
    document.getElementById("enemyChecked2").checked = false;
    document.getElementById('dragEnemy3').style.display = 'block';
    document.getElementById("enemyChecked3").checked = false;
    allEnemyCheck = false;
  }
}

function valueChangedPartyFrame()
{
  if(document.getElementById("partyFrame").checked){
    document.getElementById("background").className = "backgroundWithPartyFrame";
    partyTab = true;
  }
  else{
    document.getElementById("background").className = "backgroundWithoutPartyFrame";
    partyTab = false;
  }
}

function toggleFullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {  
      document.documentElement.requestFullScreen();  
    } else if (document.documentElement.mozRequestFullScreen) {  
      document.documentElement.mozRequestFullScreen();  
    } else if (document.documentElement.webkitRequestFullScreen) {  
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
    }  
  } else {  
    if (document.cancelFullScreen) {  
      document.cancelFullScreen();  
    } else if (document.mozCancelFullScreen) {  
      document.mozCancelFullScreen();  
    } else if (document.webkitCancelFullScreen) {  
      document.webkitCancelFullScreen();  
    }  
  }  
}

function buttonGenerate(){
  download(JSON.stringify(generateJson(),null,'\t'));
}

function collapse(){
  if (document.getElementById("collapsable").style.display === "none") {
    document.getElementById("collapsable").style.display = "block";
    
  } else {
    document.getElementById("collapsable").style.display = "none";
  }
}

function generateJson()
{
  
  var h = $(document).height();
  var w = $(document).width();
  var scaleH = h/1080;
  var scaleW = w/1920;

  var pannelY = $('#dragEnemy1').height();
  var enemyW = $('#dragEnemy1').width();
  var allyW = $('#dragAlly1').width();
  yOffset = h-pannelY; //verticle resolution - 80 in this case 1080-80
  enemyXOffset = parseInt(.29*enemyW);
  
  options.NAMEPLATE_HIDE_ALLY=String(allAllyCheck);
  options.NAMEPLATE_HIDE_ENEMY=String(allEnemyCheck);
  options.ALLY_1_PARTY_FRAME_HIDDEN=String(ally1Check);
  options.ALLY_1_PARTY_FRAME_X_OFFSET=String(parseInt(allyX1/scaleW));
  options.ALLY_1_PARTY_FRAME_Y_OFFSET=String(parseInt((yOffset-allyY1)/scaleH));
  options.ALLY_2_PARTY_FRAME_HIDDEN=String(ally2Check);
  options.ALLY_2_PARTY_FRAME_X_OFFSET=String(parseInt(allyX2/scaleW));
  options.ALLY_2_PARTY_FRAME_Y_OFFSET=String(parseInt((yOffset-allyY2)/scaleH));
  options.ALLY_3_PARTY_FRAME_HIDDEN=String(ally3Check);
  options.ALLY_3_PARTY_FRAME_X_OFFSET=String(parseInt(allyX3/scaleW));
  options.ALLY_3_PARTY_FRAME_Y_OFFSET=String(parseInt((yOffset-allyY3)/scaleH));
  options.ENEMY_1_PARTY_FRAME_HIDDEN=String(enemy1Check);
  options.ENEMY_1_PARTY_FRAME_X_OFFSET=String(parseInt((enemyX1/scaleW)-enemyXOffset));
  options.ENEMY_1_PARTY_FRAME_Y_OFFSET=String(parseInt((yOffset-enemyY1)/scaleH));
  options.ENEMY_2_PARTY_FRAME_HIDDEN=String(enemy2Check);
  options.ENEMY_2_PARTY_FRAME_X_OFFSET=String(parseInt((enemyX2/scaleW)-enemyXOffset));
  options.ENEMY_2_PARTY_FRAME_Y_OFFSET=String(parseInt((yOffset-enemyY2)/scaleH));
  options.ENEMY_3_PARTY_FRAME_HIDDEN=String(enemy3Check);
  options.ENEMY_3_PARTY_FRAME_X_OFFSET=String(parseInt((enemyX3/scaleW)-enemyXOffset));
  options.ENEMY_3_PARTY_FRAME_Y_OFFSET=String(parseInt((yOffset-enemyY3)/scaleH));
  options.PARTY_TABS=String(partyTab);
  options.SHOW_PLAY_UI_LONGBAR=String(showBar);
  options.SHOW_PLAY_UI_BACKDROP=String(showBar);
  

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


function updateVars()
{
  var h = $(document).height();
  var w = $(document).width();
  var pannelY = $('#dragEnemy1').height();
  var enemyW = $('#dragEnemy1').width();
  var allyW = $('#dragAlly1').width();
  // console.log(pannelY);
  // console.log(enemyW);
  // console.log(allyW);
  enemyX1=parseInt(options.ENEMY_1_PARTY_FRAME_X_OFFSET);
  enemyX2=parseInt(options.ENEMY_2_PARTY_FRAME_X_OFFSET);
  enemyX3=parseInt(options.ENEMY_3_PARTY_FRAME_X_OFFSET);
  enemyY1=parseInt(options.ENEMY_1_PARTY_FRAME_Y_OFFSET);
  enemyY2=parseInt(options.ENEMY_2_PARTY_FRAME_Y_OFFSET);
  enemyY3=parseInt(options.ENEMY_3_PARTY_FRAME_Y_OFFSET);
  allyX1=parseInt(options.ALLY_1_PARTY_FRAME_X_OFFSET);
  allyX2=parseInt(options.ALLY_2_PARTY_FRAME_X_OFFSET);
  allyX3=parseInt(options.ALLY_3_PARTY_FRAME_X_OFFSET);
  allyY1=parseInt(options.ALLY_1_PARTY_FRAME_Y_OFFSET);
  allyY2=parseInt(options.ALLY_2_PARTY_FRAME_Y_OFFSET);
  allyY3=parseInt(options.ALLY_3_PARTY_FRAME_Y_OFFSET);
  ally1Check='true'===options.ALLY_1_PARTY_FRAME_HIDDEN;
  ally2Check='true'===options.ALLY_2_PARTY_FRAME_HIDDEN;
  ally3Check='true'===options.ALLY_3_PARTY_FRAME_HIDDEN;
  enemy1Check='true'===options.ENEMY_1_PARTY_FRAME_HIDDEN;
  enemy2Check='true'===options.ENEMY_2_PARTY_FRAME_HIDDEN;
  enemy3Check='true'===options.ENEMY_3_PARTY_FRAME_HIDDEN;
  allAllyCheck='true'===options.NAMEPLATE_HIDE_ALLY;
  allEnemyCheck='true'===options.NAMEPLATE_HIDE_ENEMY;
  partyTab='true'===options.PARTY_TABS;
  showBar='true'===options.SHOW_PLAY_UI_LONGBAR || 'true'===options.SHOW_PLAY_UI_BACKDROP;
  scaleVars();
  
  $('#dragEnemy1').css({'top':enemyY1,'left':enemyX1-2,'position':'absolute'});
  $('#dragEnemy2').css({'top':enemyY2,'left':enemyX2-2,'position':'absolute'});
  $('#dragEnemy3').css({'top':enemyY3,'left':enemyX3-2,'position':'absolute'});

  $('#dragAlly1').css({'top':allyY1,'left':allyX1,'position':'absolute'});
  $('#dragAlly2').css({'top':allyY2,'left':allyX2,'position':'absolute'});
  $('#dragAlly3').css({'top':allyY3,'left':allyX3,'position':'absolute'});

  valueChangedAlly1();
  valueChangedAlly2();
  valueChangedAlly3();
  valueChangedEnemy1();
  valueChangedEnemy2();
  valueChangedEnemy3();
  // valueChangedPartyFrame();
  // valueChangedBottomBar();
}

function enableSnap()
{
  $('#dragAlly1').draggable("option", "grid", [snapX,snapY]);
  $('#dragAlly2').draggable("option", "grid", [snapX,snapY]);
  $('#dragAlly3').draggable("option", "grid", [snapX,snapY]);
  $('#dragEnemy1').draggable("option", "grid", [snapX,snapY]);
  $('#dragEnemy2').draggable("option", "grid", [snapX,snapY]);
  $('#dragEnemy3').draggable("option", "grid", [snapX,snapY]);
}

function disableSnap()
{
  $('#dragAlly1').draggable("option", "grid", [1,1]);
  $('#dragAlly2').draggable("option", "grid", [1,1]);
  $('#dragAlly3').draggable("option", "grid", [1,1]);
  $('#dragEnemy1').draggable("option", "grid", [1,1]);
  $('#dragEnemy2').draggable("option", "grid", [1,1]);
  $('#dragEnemy3').draggable("option", "grid", [1,1]);
}

function loadJson(filename)
{
  options = function () {
    var jsonTemp = null;
    $.ajax({
        'async': false,
        'url': filename,
        'success': function (data) {
            jsonTemp = data;
        }
    });
    return jsonTemp;
  }(); 
  // console.log(options);

updateVars();
}

function scaleVars()
{
  var h = $(document).height();
  var w = $(document).width();
  var scaleH = h/1080;
  var scaleW = w/1920;

  var pannelY = $('#dragEnemy1').height();
  var enemyW = $('#dragEnemy1').width();
  var allyW = $('#dragAlly1').width();
  yOffset = h-pannelY;
  enemyXOffset = parseInt(.29*enemyW);
  enemyX1=(scaleW*enemyX1)+enemyXOffset;
  enemyX2=(scaleW*enemyX2)+enemyXOffset;
  enemyX3=(scaleW*enemyX3)+enemyXOffset;
  enemyY1=yOffset-(enemyY1*scaleH);
  enemyY2=yOffset-(enemyY2*scaleH);
  enemyY3=yOffset-(enemyY3*scaleH);
  allyX1=scaleW*allyX1;
  allyX2=scaleW*allyX2;
  allyX3=scaleW*allyX3;
  allyY1=yOffset-(allyY1*scaleH);
  allyY2=yOffset-(allyY2*scaleH);
  allyY3=yOffset-(allyY3*scaleH);
}
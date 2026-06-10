 /*
function drawMap() {

    if (currentScreen !== 'map') {return;
    
    }
    const mapgrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    mapgrad.addColorStop(0, '#1E90FF');
    mapgrad.addColorStop(1, '#0B3D6B');
    ctx.fillStyle = mapgrad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.beginPath();
    ctx.shadowBlur = 0;
    for (let i = 0; i < frameFilesFlipped.length; i++) {
    const img = new Image();
    img.src = frameFilesFlipped[i];
    img.onload = () => {
        flippedFramesLoaded++;
    };
    framesFlipped.push(img);
}
    
    ctx.setLineDash([]);
    
    for (let loc of mapLocations) {
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(0,0,0,0.5)';
        ctx.beginPath();
        ctx.arc(loc.x, loc.y, 30, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,200,0.2)';
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(loc.x, loc.y, 26, 0, Math.PI * 2);
        ctx.fillStyle = loc.color;
        ctx.fill();
        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        ctx.beginPath();
        ctx.arc(loc.x, loc.y, 18, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0,0,0,0.7)';
        ctx.fill();
        
        ctx.fillStyle = '#FFD700';
        ctx.font = 'bold 18px monospace';
        ctx.shadowBlur = 0;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(loc.number, loc.x, loc.y);
        
        ctx.fillStyle = 'white';
        ctx.font = '18px monospace';
        ctx.fillText(loc.name, loc.x, loc.y - 45);
    }
    
    ctx.shadowBlur = 0;
    ctx.shadowColor = 'transparent';
    ctx.textAlign = 'start';
    ctx.textBaseline = 'alphabetic';
}
*/
 
 
 
 
 /*<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>English project</title>
 <link rel="stylesheet" href="style.css">
 <script src="script.js" defer></script>
 <style>
    h1{text-align: center;
       color:crimson;
       text-align: center;
       font-family: Georgia, 'Times New Roman', Times, serif;}
    canvas{
        display: block;
        margin-left:auto;
        margin-right:auto;
        margin-top:auto;
        margin-bottom:auto;
        border-style: solid;
        border-color:brown;
        border-width: 5px;
        
    }

    
    


</style>
</head>

<body style="background-color: black;"> 
   
<h1>Placeholder</h1>
<canvas id="islandCanvas" width="800" height="800"></canvas>
<script>


const canvas = document.getElementById('islandCanvas');
const ctx = canvas.getContext('2d');
const homeLabel = 'Home'

currentScreen='map';
savageryPercentage=0;
distanceFromMonster=100;
beackIntroComplete=false;
beginBeackChallenge=false;
jungleIntroComplete=false;
beginJungleChallenge=false;
mountainIntroComplete=false;
beginMountainComplete=false;
castleRockIntroComplete=false;
beginCastleRockChallenge=false;
TowerIntroComplete=false;
beginTowerChallenge=false;
mapLocations = [
    { x: 200, y: 300, name: 'Beach', number: 1, color: '#6B8E23' },
    { x: 350, y: 220, name: 'Jungle', number: 2, color: '#228B22' },
    { x: 500, y: 280, name: 'Mountain', number: 3, color: '#8B8682' },
    { x: 650, y: 380, name: 'CastleRock', number: 4, color: '#696969' },
    { x: 800, y: 250, name: 'Tower', number: 5, color: '#CD853F' }
    ];
hBC={x:50,y:35};
hBR=30;
//300,225,400,200
startButtonLeft=300;
startButtonTop=225;
startButtonBottom=startButtonTop+200;
startButtonRight=startButtonLeft+400;
currentGameStarted=null;
currentLevel=null;
homeButton=null;
// Resize canvas to something more map-like
canvas.width = 1000;
canvas.height = 600;

//event listeners
canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    // Only allow map selection if no game is active
    if (currentScreen==='map' && currentGameStarted===null) {
        for (let loc of mapLocations) {
            if (distance(loc.x, loc.y, mouseX, mouseY) < 26) {
            currentScreen = loc.name;
            switchScreen();
            return;
            }
        }
    }
    if (distance(hBC.x,hBC.y,mouseX,mouseY)<20){
        let choice = confirm("Do you wish to leave this level?");
        if (choice==true){
            currentScreen='map';
            switchScreen();
        }
    }
    else if (currentLevel!=null && currentGameStarted===null){
        if (mouseX > startButtonLeft && mouseX < startButtonRight && mouseY > startButtonTop && mouseY < startButtonBottom){
            console.log('Start button clicked - currentLevel:', currentLevel);
        currentGameStarted = currentLevel;
        console.log('currentGameStarted set to:', currentGameStarted);
            
    }
        }
    
        
    });
    
window.addEventListener("keydown", (event) =>{
        if (event.key==='b'){
            let choice = confirm("Do you wish to leave this level?");
            if (choice==true){
                currentScreen='map';
                currentLevel=null;
                currentGameStarted=null;
                switchScreen();
                
            } 

        }
        if (event.key==="ArrowUp"){
            if (currentGameStarted==='Beach' && !isJumping){
                velocity=jumpStrength;
                isJumping=true;
            }
        }
        
        if (event.key=='d'){
            if (currentGameStarted==='CastleRock' && !boulderFalling){
                boulderFalling=true;

            }}
        
        if (currentGameStarted==='Tower'){
            if (event.key === 'ArrowLeft' || event.key === 'a') {
                leftPressed = true;}
            if (event.key === 'ArrowRight' || event.key === 'd') {
                rightPressed = true;}
            if ((event.key === 'ArrowUp' || event.key === ' ' || event.key === 'w') && currentGameStarted === 'Tower' && isOnGround) {
                playerVY = jumpPower;
                isOnGround = false;}}
});
window.addEventListener("mousedown", (event)=>{
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    if (currentGameStarted==='Jungle'){
        isDragging=true;
        dragStartX=mouseX;
        dragStartY=mouseY;
    }

    if (currentGameStarted==='Mountain' && distance(trashX,trashY,mouseX,mouseY)<20){
        isDraggingItem=true;
        
    }
});
window.addEventListener("mousemove", (event)=>{
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    if (currentGameStarted==='Jungle'){
    dragCurrentX=mouseX;
    dragCurrentY=mouseY;
    }
    if (currentGameStarted==='Mountain' &&  isDraggingItem){
        trashX=mouseX;
        trashY=mouseY;
    }
});
window.addEventListener('mouseup', (event) =>{
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    if (currentGameStarted==='Jungle' && dragStartX!=null && dragStartY!=null){
    
        const dx=dragStartX-dragCurrentX;
        const dy=dragStartY-dragCurrentY;
        const dragDistance = Math.sqrt(
        Math.pow(dragCurrentX - dragStartX, 2) + 
        Math.pow(dragCurrentY - dragStartY, 2));
        power = Math.min(dragDistance, maxPower);
        const angleRad = Math.atan2(dy,dx);
        spearVX= power * Math.cos(angleRad);
        spearVY = power * Math.sin(angleRad);
        
        isDragging=false;
        spearReleased=true;

        

    }

    if (currentGameStarted==='Mountain' && isDraggingItem){
        isDraggingItem=false;
        trashX=Math.random()*800+100;
        trashY=Math.random()*200+100;
        trashAwarded=false;
    }
})
window.addEventListener("keyup",(event)=>{
    if (event.key === 'ArrowLeft' || event.key === 'a') {
    leftPressed = false;
    }
    if (event.key === 'ArrowRight' || event.key === 'd') {
        rightPressed = false;
    }
});
//helper function
function distance(x1,y1,x2,y2){
    return Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
    } 

const homeImg = new Image();
    homeImg.src = 'homeButton.png';
    homeImg.onload = () => {
        homeButton = homeImg;
    };
function drawHomeButton(){
    ctx.drawImage(homeButton,hBC.x,hBC.y,50,50)};
function gameLoop(currentTime) {
    requestAnimationFrame(gameLoop);
    
    if (currentTime - lastFrameTime >= frameDelay) {
        lastFrameTime = currentTime;
        frameCount++;
        
        if (currentGameStarted ==='Beach'){
            updateBeach();
        }
        else if (currentGameStarted === 'Jungle'){
            updateJungle();
        }
        else if (currentGameStarted === 'Mountain'){
            updateMountain();
        }
        else if (currentGameStarted === 'CastleRock'){
            updateCastleRock();
        }
        else if (currentGameStarted === 'Tower'){
            updateTower();
        }
    }
    
}
requestAnimationFrame(gameLoop);
//overall
const gravity=0.5;
const jumpStrength = -10;
let isJumping=false;
let velocity=0;
let lastFrameTime = 0;
const frameDelay = 1000 / 30;
let frameIndex=0;
let frameCount = 0;


//beach functions etc

//beach variables + constants 
let conchX=1200;
let conchY=300;
let floor1X0=0;
let floor1X1=floor1X0+canvas.width;
let floor2X0=1000;
let floor2X1=floor2X0+canvas.width;
let groundLevel=300;
let playerY=250;
let playerX=100;
const frameFiles = ['oneFoot.png', 'leftLeg.png', 'rightLeg.png'];
const frames = [];
const background1='beachBack1.png';
const background2='beachBack2.png';
let framesLoaded = 0;
let animationSpeed=3;
let animationCounter=0;
let level1Over=false;
let level1Won=false;
let beachPowerPoints=0;
let spawnTimer=1;
let timeUntilNextConch=60;
let conchAwarded=false;
let drawBack1=false;
let beachGameBackground1=null;
let beachGameBackground2=null;
let conch=null;
for (let i = 0; i < frameFiles.length; i++) {
    const img = new Image();
    img.src = frameFiles[i];
    img.onload = () => {
        framesLoaded++;
    };
    frames.push(img);
}

const gameImg = new Image();
    gameImg.src = 'beachBack1.png';
    gameImg.onload = () => {
    beachGameBackground1 = gameImg;};

const otherGameImg = new Image();
    otherGameImg.src='beachBack2.png';
    otherGameImg.onload=()=>{
        beachGameBackground2=otherGameImg;
    }
const conchImg=new Image();
conchImg.src='conch.png';
conchImg.onload=()=>{
    conch=conchImg;
    
}
    
function updatePlayerBeach(){
    playerY+=velocity;
    velocity+=gravity;
    if (playerY>groundLevel){
        playerY = groundLevel; 
        velocity=0;
        isJumping=false;
    }

}
function beachGameOver(){
    ctx.fillStyle='white';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font='50px monospace'
    ctx.fillText('GAME OVER',500,300);
    currentGameStarted=null;
    drawHomeButton();
    ctx.fill();
}
function beachGameWon(){
    ctx.fillStyle='white';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font='50px monospace'
    ctx.fillText('GAME WON',500,300);
    currentGameStarted=null;
    drawHomeButton();
    ctx.fill();
}
function updateBeach() {
console.log('beachRunning'); if (level1Over){ beachGameOver(); return; } if (level1Won){ beachGameWon(); return; } ctx.clearRect(0, 0, canvas.width, canvas.height); 
// Draw a red dot at (800, 250) to see if something covers it 
  if (beachGameBackground1)
  { ctx.drawImage(beachGameBackground1,floor1X0,0,canvas.width,canvas.height); } 
  if (beachGameBackground2)
  { ctx.drawImage(beachGameBackground2,floor2X0,0,canvas.width,canvas.height); } 
  if (conch){ ctx.drawImage(conch,conchX,conchY,200,200); } conchX-=25; 
  //draws floor 
  if (floor1X1 > 0) { floor1X0 -= 20; floor1X1 -= 20; } 
  else { 
    floor1X0 = 1000; 
    floor1X1 = floor1X0+canvas.width; 
    floor1X0 -= 20; 
    floor1X1 -= 20; } 
  if (floor2X1 > 0) 
    { floor2X0 -= 20; floor2X1 -= 20; } 
 
  else 
  { floor2X0 = 1000; 
    floor2X1 = floor2X0+canvas.width; 
    floor2X0 -= 20; floor2X1 -= 20; }
   ctx.font='24px monospace'; 
   ctx.fillStyle='black'; 
   ctx.fillText('points ' + beachPowerPoints,900,50); 
   ctx.fill();

    
    // Draw animation only if images are loaded
    if (framesLoaded === frameFiles.length) {
        animationCounter++;
        if (animationCounter>=animationSpeed){
            animationCounter=0;
            frameIndex++;
           if (frameIndex >= frames.length) frameIndex = 0;
        }
        
        updatePlayerBeach()
        ctx.drawImage(frames[frameIndex], playerX, playerY, 200, 200);
        
    }
    
    // Check for successful jump-over FIRST
if (conchX + 30 < playerX && !conchAwarded && playerY < groundLevel) {
    conchAwarded = true;
    beachPowerPoints += 100;
}

// THEN check for collision (ground only)
const playerBodyRadius = 50;
const conchVisibleRadius = 20;

if (!conchAwarded && playerY >= groundLevel - 10) {
    const distanceToConch = Math.sqrt(
        Math.pow((playerX + 100) - conchX-80, 2) + 
        Math.pow((playerY + 100) - conchY-80, 2)
    );
    
    if (distanceToConch < 60) {
        level1Over = true;
        beachGameOver();
        return;
    }
}
        
    if (conchX < -100 && spawnTimer <= 0) {
  
    spawnTimer = timeUntilNextConch;
    conchX = 1000;
    conchAwarded=false;
    timeUntilNextConch = Math.random() * 60 + 30; // 30-90 frames between spawns
    
    }
    if (spawnTimer > 0) spawnTimer--;


    if (beachPowerPoints>=1000){
        level1Won=true;
        beachGameWon();
    }

   

    
    drawHomeButton();
    }

function drawBeach(){
    // Make sure trash from other levels isn't drawn
    trashX = null;
    trashY = null;
    level1Over=false;
    level1Won=false;
    beachPowerPoints=0;
    playerY	= groundLevel;
    velocity=0;
    isJumping=false;
    conchX=1000;
    conchY=350;
    floor1X0=0
    floor1X1 =1000;
    floor2X0=1000;
    floor2X1= 2000;
    frameIndex=0;
    animationCounter=0;
    conchAwarded=false;
    currentLevel='Beach';
    const img= new Image();
    img.src = 'beach.png';
    img.onload= () => {
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
        drawHomeButton();
        drawStartButton(); 
    };
}

let pigX=700;
let pigY=300;
let spearActive=false;
let spearX=100;
let spearY=300;
let handX=200;
let handY=300;
let power=0;
let maxPower=20;
let spearVX= null;
let spearVY = null;
let junglePoints=0;
let level2Over=false;
let level2Won=false;
let pigHitBoxRadius=40;
let dragStartX=null;
let dragStartY=null;
let dragCurrentX=null;
let dragCurrentY=null;
let isDragging=false;
let junglegroundLevel=500;
let spearReleased=false;

function jungleGameWon(){
    ctx.fillStyle='white';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font='50px monospace'
    ctx.fillText('GAME WON',500,300);
    currentGameStarted=null;
    ctx.fill();
}
function updateJungle(){
console.log('jungleRunning');
    if (level2Won){
        jungleGameWon();
        return;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (spearReleased){
            //calculate spearVX,spearVY,aimAngle,and aimPower
            spearActive=true;
            spearX=handX;
            spearY=handY;
            spearReleased=false;

        }

    if (isDragging){
        ctx.beginPath();
        ctx.moveTo(dragStartX,dragStartY);
        ctx.lineTo(dragCurrentX,dragCurrentY);
        ctx.strokeStyle='white';
        ctx.stroke();
        

    
    }

    if (spearActive){
        spearX+=spearVX;
        spearY+=spearVY;
        spearVY+=gravity;
        
        //chech collision with pig 
        if (distance(spearX,spearY,pigX,pigY)<pigHitBoxRadius){
            junglePoints+=100;
            spearActive=false;
            pigX=Math.random()*300+500
            pigY=300;
            //Respawn pig at new random X position (on ground)
        }

            
        if (spearY>junglegroundLevel){
           spearActive=false;}
    }
    if (junglePoints >= 1000){ level2Won = true}
    
    

    //placeholder for drawings
    //pig
    ctx.beginPath();
    ctx.arc(pigX,pigY,40,0,Math.PI*2);
    ctx.fillStyle='pink';
    ctx.fill();
    //spear
    
    // In updateJungle(), when drawing the spear:
if (spearActive) {
    const spearAngle = Math.atan2(spearVY, spearVX);
    const spearLength = 200;  // how long the spear looks
    
    const spearTipX = spearX + Math.cos(spearAngle) * spearLength;
    const spearTipY = spearY + Math.sin(spearAngle) * spearLength;
    
    ctx.beginPath();
    ctx.moveTo(spearX, spearY);
    ctx.lineTo(spearTipX, spearTipY);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 3;
    ctx.stroke();
}
    
    ctx.font='24px monospace';
    ctx.fillText('Points ' + junglePoints,900,100)
    ctx.fillStyle='white';
    ctx.fill();
    drawHomeButton();
}
function drawJungle(){

pigX=700;
pigY=300;
spearReleased=false;
 spearActive=false;
spearX=100;
spearY=300;
handX=200;
handY=300;
power=0;
maxPower=20;
degrees= 45;
spearVX= null;
spearVY = null;
junglePoints=0;
level2Over=false;
level2Won=false;
pigHitBoxRadius=40;
dragStartX=null;
dragStartY=null;
dragCurrentX=null;
dragCurrentY=null;
isDragging=false;
junglegroundLevel=500;
currentLevel='Jungle';
    const img= new Image();
    img.src = 'jungle.png';
    img.onload= () => {
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
        drawHomeButton();
        drawStartButton(); 
    };
}

let holeX = 500;
let holeY = 300;
let holeRadius=50;
let trashX = 900;
let trashY = 200;
let itemActive = false;
let itemType = 'trash';  // or just use color/size
let mountainPoints = 0;
let level3Won = false;
let isDraggingItem = false;
let trashSpawnTimer = 0;
 let timeLimit=1000;
 let trashAwarded=false;

 function mountainGameOver(){
    ctx.fillStyle='white';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font='50px monospace'
    ctx.fillText('GAME OVER',500,300);
    currentGameStarted=null;
    ctx.fill();
 }
function mountainGameWon(){
    ctx.fillStyle='white';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font='50px monospace'
    ctx.fillText('GAME WON',500,300);
    currentGameStarted=null;
    ctx.fill();
}
function updateMountain(){
    console.log('mountainRunning');
    if (level3Won){
        mountainGameWon();
        return;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(holeX,holeY,holeRadius,0,Math.PI*2);
    ctx.fillStyle='white';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(trashX,trashY,20,0,Math.PI*2);
    ctx.fillStyle='green';
    ctx.fill();
    ctx.fillText('Timer '+ timeLimit,100,100);
    ctx.fillText('Points ' + mountainPoints,900,100);
    ctx.fillStyle='white';
    ctx.fill();
    if (distance(holeX,holeY,trashX,trashY)<holeRadius && !trashAwarded){
        trashX=Math.random()*800+100;
        trashY=Math.random()*200+100;
        mountainPoints+=100;
        holeRadius+=10;
        trashAwarded=true;

        
    }
    timeLimit-=5
    if (timeLimit<=0 && mountainPoints<1000){
        mountainGameOver();
    }

    if (mountainPoints>=1000){
        mountainGameWon();
    }
    drawHomeButton();
}
function drawMountain(){
    holeX=500;
    holeY=400;
    holeRadius=50;
    trashX=900;
    trashY=200;
    itemActive = false;
     itemType = 'trash';  // or just use color/size
    mountainPoints = 0;
    level3Won = false;
    isDraggingItem = false;
    trashAwarded=false;

    trashSpawnTimer = 0;
    timeLimit=2000;
    currentLevel='Mountain';
    const img= new Image();
    img.src = 'mountains.png';
    img.onload= () => {
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
        drawHomeButton();
        drawStartButton();
    };
}

 let boulderX = 200;
let boulderY = 200;
 let castleRockGround=500;
 let boulderFalling=false;
 let figureDirection=1;
 let figureSpeed=15;
let level4Won=false;
 let castleRockPoints=0;
 let figureX=500;
 let figureY=450;
 let boulderAwarded=false;


function castleRockGameWon(){
    ctx.fillStyle='white';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font='50px monospace'
    ctx.fillText('GAME WON',500,300);
    currentGameStarted=null;
    ctx.fill();
}
function updateCastleRock(){
    console.log('castleRunning');
    if (level4Won){
        castleRockGameWon();
        return;
    }
     ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(figureX,figureY,20,0,Math.PI*2);
    ctx.fillStyle='blue';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(boulderX,boulderY,50,0,Math.PI*2);
    ctx.fillStyle='gray';
    ctx.fill();
    ctx.fillStyle='white';
    ctx.fill();
    ctx.fillText('points ' + castleRockPoints,900,100)
    

    figureX+=figureDirection*figureSpeed
    if (distance(figureX,figureY,canvas.width,figureY)<20){
        figureDirection= figureDirection*-1
    }
    if (distance(figureX,figureY,300,figureY)<20){
        figureDirection= figureDirection*-1
    }

    if (boulderFalling&& !boulderAwarded && distance(figureX,figureY,boulderX,boulderY)<50){
        castleRockPoints+=100
        boulderAwarded=true;
    }
    if (boulderFalling){
        boulderX+=15
        boulderY+=20

    }
    if (boulderY>castleRockGround){
        boulderX=200;
        boulderY=200;
        boulderFalling=false;
        boulderAwarded=false;
    }

    
    if (castleRockPoints>=1000){
        castleRockGameWon();
    }
    drawHomeButton();
}
function drawCastleRock(){
    boulderX = 200;
    boulderY = 200;
    boulderFalling=false;
    figureDirection=1;
    figureSpeed=15;
    level3Won=false;
    castleRockPoints=0;
    figureX=500;
     figureY=450;
    currentLevel='CastleRock';
    const img= new Image();
    img.src = 'CastleRock.png';
    img.onload= () => {
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
        drawHomeButton();
        drawStartButton();
    };
}

let playerTowerX = 500;
let playerTowerY = 520;
let playerWidth = 50;
let playerHeight = 50;
let playerVX = 0;
let playerVY = 0;
let isOnGround = false;
let platforms = [];
let towerHoleY = 700;  // Top of rising darkness
let holeRiseSpeed = 1;
let towerPoints = 0;
let level5Won = false;
let level5Over=false;
let towerGravity = 0.8;
let jumpPower = -20;
let platformWidth = 100;
let platformHeight = 10;
let platformGap = 100;
let nextPlatformY = 500;
let cameraY=0;
function towerGameWon(){
    ctx.fillStyle='white';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font='50px monospace'
    ctx.fillText('GAME WON',500,300);
    currentGameStarted=null;
    ctx.fill();
}
function towerGameOver(){
    ctx.fillStyle='white';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font='50px monospace'
    ctx.fillText('GAME OVER',500,300);
    currentGameStarted=null;
    ctx.fill();
} 
function generatePlatform(x,y,width){
    return{
        x:x,
        y:y,
        width:width,
        height:platformHeight
    };
}
function generateInitialPlatforms(){
    platforms = [];
    // Ground platform (starting platform)
    //200,300,400,500,600
    //250,450,550,350,150
    platforms.push(generatePlatform(400, 550, 200));
    // A few platforms above
    platforms.push(generatePlatform(300, 450, 150));
    platforms.push(generatePlatform(500, 350, 120));
    platforms.push(generatePlatform(200, 250, 150));
    platforms.push(generatePlatform(600, 150, 150));
    nextPlatformY = 100;
}

function updateTower(){
    console.log('towerRunning');
    
    

    if (level5Won){
        towerGameWon();
        return;
    }
    if (level5Over){
        towerGameOver();
        return;
    }
    ctx.clearRect(0,0,canvas.width,canvas.height);
     // ===== DRAW BACKGROUND =====
    // ADD YOUR BACKGROUND DRAWING CODE
    // At the top of updateTower, after ctx.clearRect:
    ctx.fillStyle = '#1a1a2e';  // Dark blue-gray background
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // ===== DRAW BLACK HOLE / DARKNESS =====
    // ADD CODE TO DRAW RISING DARKNESS AT holeY
    ctx.beginPath();
    ctx.ellipse(500,towerHoleY-cameraY,100,25,0,0,Math.PI*2);
    ctx.fillStyle='black';
    ctx.fill();
    // ===== DRAW ALL PLATFORMS =====
    // LOOP THROUGH platforms array and draw each one
     ctx.fillStyle='green';
    for (let coor of platforms){
        ctx.fillRect(coor.x,coor.y-cameraY,coor.width,coor.height);
    }
    
    // ===== DRAW PLAYER =====
    // DRAW playerTowerX, playerTowerY, playerWidth, playerHeight
    
     // ===== PLAYER MOVEMENT (GRAVITY & INPUT) =====
    
    playerVY+=towerGravity;
    playerTowerY+=playerVY
   
    // Set horizontal speed based on keys pressed
    
    if (leftPressed) playerVX = -5;
    else if (rightPressed) playerVX = 5;
    else playerVX=0;
    
    // Update position
    playerTowerX += playerVX;

    // Keep player on screen
    if (playerTowerX < 0) playerTowerX = 0;
    if (playerTowerX + playerWidth > canvas.width) playerTowerX = canvas.width - playerWidth;


    // ===== PLATFORM COLLISION =====
    // CHECK if player is falling (playerVY > 0)
   // Check if player is falling and feet are landing on platform
    if (playerVY > 0) {
        for (let platform of platforms) {
            if (playerTowerY + playerHeight >= platform.y &&
                playerTowerY + playerHeight <= platform.y + 20 &&
                playerTowerX + playerWidth > platform.x &&
                playerTowerX < platform.x + platform.width) {
            
                playerTowerY = platform.y - playerHeight;
                playerVY = 0;
                playerVX=0;
                isOnGround = true;
                
                break;
        }
    }
}
    cameraY=playerTowerY-300;

    ctx.fillStyle='red';
    ctx.fillRect(playerTowerX,playerTowerY-cameraY,playerWidth,playerHeight)
    
    // ===== RISING HOLE =====
    // holeY -= holeRiseSpeed
    // IF playerTowerY + playerHeight > holeY: level5Over = true
    towerHoleY-= holeRiseSpeed;
    if (playerTowerY+playerHeight>towerHoleY){
        level5Over=true;
    }


    
    // Find the highest platform (smallest Y)
let highestWorldY = platforms[0].y;
for (let platform of platforms) {
    if (platform.y < highestWorldY) {
        highestWorldY = platform.y;
    }
}

// Generate new platform when highest is too close to camera top
if (highestWorldY < cameraY + 300) {  // Within 300px of screen top
    let newY = highestWorldY - platformGap;
    let newX = Math.random() * (700 - platformWidth+300);
    platforms.push(generatePlatform(newX, newY, platformWidth));
}
    // ===== REMOVE OFFSCREEN PLATFORMS =====
    
    
    // Remove platforms below the screen
    platforms = platforms.filter(p => p.y - cameraY < canvas.height + 100);
    // ===== POINTS =====
    // INCREASE towerPoints over time (e.g., every frame or every platform passed)
    // DRAW points on screen
    towerPoints+=1
    ctx.fillText('points '+ towerPoints,900,100);
    ctx.fillStyle='white';
    ctx.fill();
    // ===== WIN CONDITION =====
    // IF towerPoints >= target: level5Won = true
    if (towerPoints>=1500){
        level5Won=true;
    }
    // ===== DRAW UI =====
    drawHomeButton();
    
   
}

function drawTower(){
    // ADD points display, timer, etc.
   cameraY=0;
    playerTowerX = 500;
    playerTowerY = 550-playerHeight;
    playerVX = 0;
    playerVY = 0;
    isOnGround = true;
    towerHoleY = 700;
    holeRiseSpeed = 1;
    towerPoints = 0;
    level5Won = false;
    level5Over = false;
    leftPressed = false;
    rightPressed = false;
    platforms = [];
    nextPlatformY = 500;
   
    
    // Generate starting platforms
    generateInitialPlatforms();
    currentLevel='Tower';
    const beachgrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    beachgrad.addColorStop(0, 'yellow');
    beachgrad.addColorStop(1, 'orange');
    ctx.fillStyle = beachgrad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    drawHomeButton();
    drawStartButton();
}

function drawMap(){
    console.log("DRAWING MAP");
    // Draw ocean background (gradient)
   const mapgrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
   mapgrad.addColorStop(0, '#1E90FF');
   mapgrad.addColorStop(1, '#0B3D6B');
   ctx.fillStyle = mapgrad;
   ctx.fillRect(0, 0, canvas.width, canvas.height);

   // Island locations (x, y, name, number)
    
    // Draw connecting lines (thicker, with shadow)
    ctx.beginPath();
    ctx.shadowBlur = 0;
    for (let i = 0; i < mapLocations.length - 1; i++) {
       ctx.beginPath();
       ctx.moveTo(mapLocations[i].x, mapLocations[i].y);
       ctx.lineTo(mapLocations[i + 1].x, mapLocations[i + 1].y);
       ctx.strokeStyle = '#DAA520';
       ctx.lineWidth = 3;
       ctx.setLineDash([8, 6]);
       ctx.stroke();
       }
    
    ctx.setLineDash([]); // reset to solid

   // Draw islands (circles with stroke and number)
    for (let loc of mapLocations) {
      
        // Shadow for depth
      ctx.shadowBlur = 8;
      ctx.shadowColor = 'rgba(0,0,0,0.5)';
    
      // Outer circle (glow)
      ctx.beginPath();
      ctx.arc(loc.x, loc.y, 30, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,200,0.2)';
      ctx.fill();
        
      // Main island circle
      ctx.beginPath();
      ctx.arc(loc.x, loc.y, 26, 0, Math.PI * 2);
      ctx.fillStyle = loc.color;
      ctx.fill();
      ctx.strokeStyle = '#FFD700';
      ctx.lineWidth = 2;
      ctx.stroke();
    
      // Number background
      ctx.beginPath();
      ctx.arc(loc.x, loc.y, 18, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0,0,0,0.7)';
      ctx.fill();
    
      // Number
      ctx.fillStyle = '#FFD700';
      ctx.font = 'bold 18px monospace';
      ctx.shadowBlur = 0;
      ctx.textAlign='center';
      ctx.textBaseline = "middle";
      ctx.fillText(loc.number, loc.x, loc.y);
    
      // Name label
      ctx.fillStyle = 'white';
      ctx.font = '18px monospace';
      ctx.shadowBlur = 0;
      ctx.fillText(loc.name, loc.x, loc.y - 45);
    

    // RESET CANVAS STATE (VERY IMPORTANT)
ctx.shadowBlur = 0;
ctx.shadowColor = 'transparent';
ctx.setLineDash([]);
ctx.textAlign = 'start';
ctx.textBaseline = 'alphabetic';
ctx.lineWidth = 1;

    }
}



function drawStartButton(){
    const img = new Image();
    img.src = 'startButton.png';
    img.onload=()=>{
        ctx.drawImage(img,300,225,400,200); 
    };
}

function switchScreen(){
    if (currentScreen=='map'){
        drawMap();
        currentGameStarted = null;
        currentLevel = null;
    }
    else if (currentScreen=='Beach'){
        drawBeach();
    }
    else if (currentScreen=='Jungle'){
        drawJungle();
    }
    else if (currentScreen=='Mountain'){
        drawMountain();
    }
    else if (currentScreen=='CastleRock'){
        drawCastleRock();
    }
    else if (currentScreen=='Tower'){
        drawTower();
    }
}
switchScreen();
 </script>
 

</body>
</html>*/
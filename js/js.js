function start(){motorOff(),timer=setInterval(function(){moverNave()},1e3*dt),paused=!1}function stop(){clearInterval(timer),paused=!0,motorOff()}function pause(){paused&&!instDisplayed?(start(),document.getElementById("msgText").style.display="none"):(stop(),instDisplayed||(document.getElementById("msgText").innerHTML="PAUSED",document.getElementById("msgText").style.display="block"))}function moverNave(){checkFuel(),v+=a*dt,checkSpeed(),document.getElementById("velocidad").innerHTML=v.toFixed(2),y+=v*dt,checkHeight(),document.getElementById("altura").innerHTML=(maxY-y).toFixed(2),maxY>y&&y>0?document.getElementById("nave").style.top=y+"%":(end=!0,stop(),checkColision())}function motorOn(){!hayFuel||paused||end||(playAudio("sounds/propulsion.mp3"),a=-g,null==timerFuel&&(timerFuel=setInterval(function(){actualizarFuel()},10),document.getElementById("naveImg").src="img/rocketOn.png"))}function motorOff(){a=g,end||paused||(clearInterval(timerFuel),timerFuel=null,document.getElementById("naveImg").src="img/rocketOff.png")}function actualizarFuel(){!hayFuel||paused||end||(fuel-=.1,0>=fuel&&(hayFuel=!1,fuel=0,motorOff()),document.getElementById("fuel").innerHTML=fuel.toFixed(2))}function restart(){y=10,v=0,a=-g,fuel=100,document.getElementById("fuel").innerHTML=fuel.toFixed(2),hayFuel=!0,end=!1,instDisplayed=!1,ocultarInstrucciones(),document.getElementById("naveImg").src="img/rocketOff.png",document.getElementById("msgText").style.display="none",stop(),start()}function visualizarInstrucciones(){instDisplayed=!0,document.getElementById("helpDiv").style.display="block",document.getElementsByClassName("c")[0].style.display="block",document.getElementById("msgText").style.display="none"}function ocultarInstrucciones(){instDisplayed=!1,document.getElementById("helpDiv").style.display="none",document.getElementsByClassName("c")[0].style.display="none"}function checkColision(){0>y?(document.getElementById("naveImg").src="img/rftop.gif",document.getElementById("altura").innerHTML=70..toFixed(2),playAudio("sounds/explosion.mp3")):(document.getElementById("altura").innerHTML=0..toFixed(2),v>getSpeedMode()?(document.getElementById("naveImg").src="img/rfbot.gif",playAudio("sounds/explosion.mp3")):(score(),playAudio("sounds/win.mp3"))),stop()}function checkKey(){var e=event.which||event.keyCode;switch(e){case 82:restart();break;case 80:pause();break;case 72:stop(),instDisplayed?(start(),ocultarInstrucciones()):(stop(),visualizarInstrucciones());break;case 77:changeSound();break;case 32:motorOn()}}function getSpeedMode(){var e;switch(mode){case"easy":e=5;break;case"medium":e=3;break;case"hard":e=1}return e}function checkSpeed(){v<getSpeedMode()?document.getElementById("speedp").style.color="#14AF2B":v>getSpeedMode()+1?document.getElementById("speedp").style.color="#E95618":document.getElementById("speedp").style.color="#EBC70F"}function checkFuel(){fuel>=60?document.getElementById("fuelp").style.color="#14AF2B":60>fuel&&fuel>=30?document.getElementById("fuelp").style.color="#EBC70F":document.getElementById("fuelp").style.color="#E95618"}function checkHeight(){var e=maxY-y;5>=e||e>=maxY-5?document.getElementById("heightp").style.color="#E95618":e>5&&15>=e||maxY-5>e&&e>=maxY-15?document.getElementById("heightp").style.color="#EBC70F":document.getElementById("heightp").style.color="#14AF2B"}function changeColor(e,t,n){document.getElementById("easy").style.background=e,document.getElementById("medium").style.background=t,document.getElementById("hard").style.background=n}function changeSound(){soundEnabled?document.getElementById("sound").src="img/soundOFF.png":document.getElementById("sound").src="img/soundON.png",soundEnabled=!soundEnabled}function playAudio(e){soundEnabled&&(audio=new Audio(e),audio.play())}function score(){var e=fuel*(10-v);switch(mode){case"easy":e=1*e;break;case"medium":e=1.1*e;break;case"hard":e=1.2*e}e=e.toFixed(0),document.getElementById("msgText").innerHTML="SCORE: "+e,document.getElementById("msgText").style.display="block"}var y=10,v=0,g=1.622,a=g,dt=.016683,timer=null,timerFuel=null,fuel=100,audio,soundEnabled=!0,instDisplayed=!1,paused=!1,end=!1,maxY=67,mode="medium",hayFuel=!0;window.onload=function(){document.getElementById("medium").style.background="#E30B32",document.getElementById("showm").onclick=function(){visualizarInstrucciones(),pause()},document.getElementById("hidem").onclick=function(){ocultarInstrucciones(),start()},document.getElementById("sound").onclick=function(){changeSound()},document.onmousedown=motorOn,document.onmouseup=motorOff,document.onkeydown=checkKey,document.onkeyup=motorOff,document.getElementById("pause").onclick=function(){pause()},document.getElementById("restart").onclick=function(){document.getElementsByClassName("c")[0].style.display="none",document.getElementById("msgText").style.display="none",restart()},document.getElementById("help").onclick=function(){instDisplayed?(start(),ocultarInstrucciones()):(stop(),visualizarInstrucciones())},document.getElementById("return").onclick=function(){start(),ocultarInstrucciones()},document.getElementById("easy").onclick=function(){mode="easy",changeColor("#E30B32","#810909","#810909")},document.getElementById("medium").onclick=function(){mode="medium",changeColor("#810909","#E30B32","#810909")},document.getElementById("hard").onclick=function(){mode="hard",changeColor("#810909","#810909","#E30B32")},start()};
var enSzamom =''; 
var id= 0; //visszaszámláláshoz
var szam = 11; //visszaszámláláshoz
var audio;
var audio2 = new Audio('hangok/terrorist-wins.mp3');
var audio3 = new Audio('hangok/counter-terrorists-win.mp3')
window.onload = function() {
    velSzam = Math.floor(Math.random() * (101 - 1) ) + 1;   
    document.getElementById("genSzam").innerText = velSzam;  
}

function preLoad()
{
   
   audio2 = new Audio('hangok / terrorist-wins.mp3');
}

function egy(){
  enSzamom += document.getElementById("egy").value;
  document.getElementById("bevSzam").innerText = enSzamom;
}

function ketto(){
  enSzamom += document.getElementById("ketto").value;
  document.getElementById("bevSzam").innerText = enSzamom;
}

function harom(){
  enSzamom += document.getElementById("harom").value;
  document.getElementById("bevSzam").innerText = enSzamom;
}

function negy(){
  enSzamom += document.getElementById("negy").value;
  document.getElementById("bevSzam").innerText = enSzamom;
}

function ot(){
  enSzamom += document.getElementById("ot").value;
  document.getElementById("bevSzam").innerText = enSzamom;
}

function hat(){
  enSzamom += document.getElementById("hat").value;
  document.getElementById("bevSzam").innerText = enSzamom;
}

function het(){
  enSzamom += document.getElementById("het").value;
  document.getElementById("bevSzam").innerText = enSzamom;
}

function nyolc(){
  enSzamom += document.getElementById("nyolc").value;
  document.getElementById("bevSzam").innerText = enSzamom;
}

function kilenc(){
  enSzamom += document.getElementById("kilenc").value;
  document.getElementById("bevSzam").innerText = enSzamom;
}

function nulla(){
  enSzamom += document.getElementById("nulla").value;
  document.getElementById("bevSzam").innerText = enSzamom;
}
 

function bevitel(){
  if(parseInt(enSzamom) == velSzam){     
    stopSzamlalo(); //visszaszámlálás leállítása
  }else{
    document.getElementById("allapot").innerText = "Állapot: helytelen kód!";
    document.getElementById("allapot").style.color = "red";
  }
}

function szamlalo(){
  
  id= setInterval(function(){
  document.getElementById("szamlalo").innerText = --szam;
  
  if(szam == 11)
  {            
      audio.play();
  }

    if (szam == 0){
      clearInterval(id);     
      document.getElementById("allapot").innerText = "BUMM!"; 
      document.getElementById("allapot").style.color="red";    
      audio2.play();
    }
  },1000)
}

function stopSzamlalo(){
  clearInterval(id);
  document.getElementById("allapot").innerText = "Állapot: a bomba hatástalanítva! ";
  document.getElementById("allapot").style.color = "lightgreen"; 
  audio3.play();
}

function torles(){
  document.getElementById("bevSzam").innerText = "";
  enSzamom = '';
}

function kezd()
{
    audio = new Audio("hangok/bomb-has-been-planted.mp3");   
    audio.loop = false;
    audio.play();
    szamlalo();
}



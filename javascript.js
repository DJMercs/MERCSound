

/*   ************************************** ACCORDEON **************************************    */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


/* *********************** ANIMATION DU MEDAILLON EN PAGE D'ACCUEIL **************************** */
var div=document.getElementById("medaillon");

function bordure(){     

  div.style.backgroundColor="#a6edb7";
}

function bordureBis(){    

  div.style.backgroundColor="#161a13";
}

setInterval(bordure,1000);
setInterval(bordureBis,800);


/*  *******************************************************************************************  */

     /* *********************** CONTROLE DES WIDGET MIXCLOUD **************************** */



/*var widget = Mixcloud.PlayerWidget(document.getElementById("my-widget-iframe"));
    widget.ready.then(function() {
        // Put code that interacts with the widget here
    });

    var widget2 = Mixcloud.PlayerWidget(document.getElementById(... // if you have more than one widget to control
*/





/*var widget = Mixcloud.PlayerWidget(window.querySelectorAll("iframe"));
widget.events.play.on(playListener);
function playListener() {
    console.log("ca marche"); 
    }*/



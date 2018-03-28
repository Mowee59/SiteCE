"use strict";


var detailEvent="";
var eventPageSetup = (function () {

    var dataKeyHere = "-L7eqDVBoU92wqFctvyY"; // TODO: Replace this var by variable datakey from buttons
    firebase.database().ref('test/'+ dataKeyHere).once('value').then(function(snapshot) {
      detailEvent = (snapshot.val());
        console.log(detailEvent);
        document.querySelector(".event-title h1").innerHTML = detailEvent.nom;


        // Pour le mois

        var valuesMoisReverse = {

            "JAN" : "Janvier",
            "FEV" : "Février",
            "MAR": "Mars",
            "AVR": "Avril",
            "MAI": "Mai",
            "JUIN": "Juin",
            "JUIL": "Juillet",
            "AOU": "Août",
            "SEP": "Septembre",
            "OCT": "Octobre",
            "NOV": "Novembre",
            "DEC": "Décembre"
        };

        document.querySelector("#jour").innerHTML = detailEvent.date.jour;
        document.querySelector("#mois").innerHTML = valuesMoisReverse[detailEvent.date.mois];
        document.querySelector("#annee").innerHTML = detailEvent.date.annee;

        document.querySelector("#author").innerHTML = detailEvent.auteur;

        document.querySelector("#description p").innerHTML = detailEvent.desc;
      });
    })();

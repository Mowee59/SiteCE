"use strict";


//* Fichier provisioire



(

    function () {

            var eventsRef = firebase.database().ref('test');


        /* Affichage de sderniers évenements ajoutés */

        eventsRef.limitToLast(4).once('value').then(evenements.lastEvents, evenements.errorData);


        /* A supprimer, pour afficher un espace sous les cartes */

        var row = document.getElementById('contenu')
        row.style.marginBottom = "50px";


    }());

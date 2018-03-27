"use strict";





var main = (

    function () {

            var eventsRef = firebase.database().ref('test');
            

        /* Affichage de sderniers évenements ajoutés */

        eventsRef.orderByKey().once('value').then(evenements.afficherEvent, evenements.errorData);


        /* A supprimer, pour afficher un espace sous les cartes */

        var row = document.getElementById('contenu');
        row.style.marginBottom = "50px";
        
        

    }());

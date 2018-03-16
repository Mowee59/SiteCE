"use strict";


//* Fichier provisioire



(

    function () {



        /* Affichage de sderniers évenements ajoutés */

        firebase.database().ref('test').limitToLast(4).once('value').then(evenements.lastEvents, evenements.errorData)


        /* A supprimer, pour afficher un espace sous les cartes */

        var row = document.getElementById('contenu')
        row.style.marginBottom = "50px";


    }());

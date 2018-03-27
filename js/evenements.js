"use strict";

var evenements = (function () {

    var eventsRef = firebase.database().ref('test');


    return {


        afficherEvent: function (snapshot) {

            var events = snapshot.val();

            var contenu = document.querySelector("#contenu");

            var compteur = 0;            // COmpteur qui permet de creer une nouvelle ligne

            for ( let key in events) {

                
                if (compteur % 4 === 0) {
                    var row = document.createElement('div');
                    row.className = "row";
                    contenu.appendChild(row);
                }
                let col = document.createElement('div');
                col.className = "col-md-6 col-xl-3 ";
                var mycard = cards.createCard(events[key], key)

                col.appendChild(mycard);
                row.appendChild(col);
                compteur++;
            }


        },

        errorData: function (error) {

            console.log('error', error);

        }
    }
})();

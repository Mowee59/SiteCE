"use strict";

var evenements = (function () {

    var eventsRef = firebase.database().ref('test');


    return {


        lastEvents: function (snapshot) {

            var events = snapshot.val()
            var keys = Object.keys(events);
            
            var contenu = document.querySelector("#contenu");
            var row = document.createElement('div');
            row.className = "row";
            contenu.appendChild(row);

            /* Modifier syntaxe */
            for (let key of keys) {
                
                
                let col = document.createElement('div');
                col.className = "col-md";
                var mycard = cards.createCard(events[key], key)

                col.appendChild(mycard);
                row.appendChild(col);
            }


        },

        errorData(error) {

            console.log('error', error);

        }
    }
})();

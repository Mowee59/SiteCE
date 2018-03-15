"use strict";


//* Fichier provisioire



(

    function () {

      
      
        var contenu = document.querySelector("#contenu");
        var row = document.createElement('div');
        row.className = "row";
        contenu.appendChild(row);


        var date = {
            jour: 16,
            mois: 'OCT',
            annee: "2018"

        };

        for (let i = 0; i < 4; i++) {

            let col = document.createElement('div');
            col.className = "col-md";
            var mycard = cards.createCard(date, "Londres, Royaume-Uni", "Musée du Thé", "Visite dans un des musée les plus atypique de grande Bretagne ...", "https://placeimg.com/220/185/any");

            col.appendChild(mycard);
            row.appendChild(col);


        }

        //* Pour afficher un espace en bas

        row.style.marginBottom = "50px";
        

    }());

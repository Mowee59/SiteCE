"use strict";

var cards = (function () {


        return {

            createCard: function (date, infocontent, titre, desc, image) {
                /* Fonction qui retourne une carte créé 
        
        Le format de la date est du type : 
        
        
                var date = {
                    jour: 16,
                    mois: 'OCT',
                    annee: "2018"

                };
    
        A implement dans la base de donné pour la récuperer plus rapidement */


                var img = document.createElement('img');
                img.className = "card-img-top img-fluid";
                img.src = image;

                var card = document.createElement('div');
                card.className = 'card';
                var block = document.createElement('div');
                block.className = 'card-block';
                var info = document.createElement('div');
                info.className = 'info';

                var card_desc = document.createElement('div');
                card_desc = document.createElement('div');
                card_desc.className = "card-desc";
                card_desc.innerHTML = desc;

                var title = document.createElement('h3');
                title.className = 'card-title';
                title.innerHTML = titre;
                info.innerHTML = infocontent;

                var info_date = document.createElement('p');
                info_date.className = "date";
                var tjour = document.createElement('span');
                tjour.className = "date_jour";
                tjour.innerHTML = date.jour;

                var tmois = document.createElement('span');
                tmois.className = "date_mois";
                tmois.innerHTML = date.mois;

                var tannee = document.createElement('span');
                tannee.className = "date_annee";
                tannee.innerHTML = date.annee;

                card.appendChild(img);

                info_date.appendChild(tjour);
                info_date.appendChild(tmois);
                info_date.appendChild(tannee);

                block.appendChild(title);
                block.appendChild(card_desc);
                block.appendChild(info);
                block.appendChild(info_date);






                card.appendChild(block);


                return card;
            }
        }

}());

"use strict";

var cards = (function () {

    var eventsRef = firebase.database().ref('test') ;   
    
    return {

        createCard: function (event, key) {


            console.log(key);
            var img = document.createElement('img');
            img.className = "card-img-top img-fluid";
            img.src = 'http://via.placeholder.com/220x170';

            var card = document.createElement('div');
            card.className = 'card';
            var block = document.createElement('div');
            block.className = 'card-block';
            var info = document.createElement('div');
            info.className = 'info';

            var card_desc = document.createElement('div');
            card_desc = document.createElement('div');
            card_desc.className = "card-desc";
            card_desc.innerHTML = event.desc;

            var title = document.createElement('h3');
            title.className = 'card-title';
            title.innerHTML = event.nom;
            info.innerHTML = event.lieu;

            var info_date = document.createElement('p');
            info_date.className = "date";
            var tjour = document.createElement('span');
            tjour.className = "date_jour";
            tjour.innerHTML = event.date.jour;

            var tmois = document.createElement('span');
            tmois.className = "date_mois";
            tmois.innerHTML = event.date.mois;

            var tannee = document.createElement('span');
            tannee.className = "date_annee";
            tannee.innerHTML = event.date.annee;

            card.appendChild(img);

            info_date.appendChild(tjour);
            info_date.appendChild(tmois);
            info_date.appendChild(tannee);
            card.appendChild(info);
            card.appendChild(info_date);

            block.appendChild(title);
            block.appendChild(card_desc);






            card.appendChild(block);
            card.dataset.key = key;


            return card;
        },
            
            displayLastEvents: function(){
                
        eventsRef.limitToLast(4).once('value').then(evenements.lastEvents, evenements.errorData);
            }
        
    }

}());

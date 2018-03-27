"use strict";

var cards = (function () {

    var eventsRef = firebase.database().ref('test');

    return {

        createCard: function (event, key) {


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
            card_desc.innerHTML = event.desc.substring(0, 45) + "...";

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

         

            var tags = event.tags.split(" ");
            var list_tags = document.createElement('ul');
            list_tags.className = "list_tags";
            for (let tag of tags) {
                
                if (tag === "Voyages") {
                    let etiquette = document.createElement('li');
                    let icone = document.createElement('i');
                    icone.className = "ion-earth";
                    etiquette.appendChild(icone)
                    etiquette.innerHTML += "Voyages";

                    list_tags.appendChild(etiquette);
                } else if (tag === "Sport") {
                    let etiquette = document.createElement('li');
                    let icone = document.createElement('i');
                    icone.className = "ion-android-bicycle";
                    etiquette.appendChild(icone)
                    etiquette.innerHTML += "Sport";

                    list_tags.appendChild(etiquette);
                }  else if (tag === "Musique") {
                    let etiquette = document.createElement('li');
                    let icone = document.createElement('i');
                    icone.className = "ion-music-note";
                    etiquette.appendChild(icone)
                    etiquette.innerHTML += "Musique";

                    list_tags.appendChild(etiquette);
                } else if (tag === "Soirées") {
                    let etiquette = document.createElement('li');
                    let icone = document.createElement('i');
                    icone.className = "ion-android-bar";
                    etiquette.appendChild(icone)
                    etiquette.innerHTML += "Soirées";

                    list_tags.appendChild(etiquette);
                } else if (tag === "Enfants") {
                    let etiquette = document.createElement('li');
                    let icone = document.createElement('i');
                    icone.className = "ion-android-happy";
                    etiquette.appendChild(icone)
                    etiquette.innerHTML += "Enfants";

                    list_tags.appendChild(etiquette);
                }else if (tag === "Auberge") {
                    let etiquette = document.createElement('li');
                    let icone = document.createElement('i');
                    icone.className = "ion-home";
                    etiquette.appendChild(icone)
                    etiquette.innerHTML += "Auberge Espagnole";

                    list_tags.appendChild(etiquette);
                }else if (tag === "Restauration") {
                    let etiquette = document.createElement('li');
                    let icone = document.createElement('i');
                    icone.className = "ion-android-restaurant";
                    etiquette.appendChild(icone)
                    etiquette.innerHTML += "Restauration";

                    list_tags.appendChild(etiquette);
                }else if (tag === "Thématique") {
                    let etiquette = document.createElement('li');
                    let icone = document.createElement('i');
                    icone.className = "ion-bowtie";
                    etiquette.appendChild(icone)
                    etiquette.innerHTML += "Journée Thématique";

                    list_tags.appendChild(etiquette);
                }
            }

            card.appendChild(img);

            info_date.appendChild(tjour);
            info_date.appendChild(tmois);
            info_date.appendChild(tannee);
            card.appendChild(info);
            card.appendChild(info_date);

            block.appendChild(title);
            block.appendChild(card_desc);
            block.appendChild(list_tags);







            card.appendChild(block);
            card.dataset.key = key;


            return card;
        },



    }

}());

<<<<<<< Updated upstream
    "use strict";

    var formEvent = (function () {






        // Récupération des éléments 
        var eventsRef = firebase.database().ref('test');
        var champs = []; // Liste des champs à valider

        var nomEvent = document.getElementById('nomEvent');
        var lieuEvent = document.getElementById('lieuEvent');
        var btn_ajouter = document.getElementsByClassName('btn-ajouter')[0];
        var dureeEvent = document.getElementById('dureeEvent');
        var annee = document.getElementById('anneeEvent');
        var jour = document.getElementById('jourEvent');
        var mois = document.getElementById('moisEvent');
        var desc = document.getElementById('desc');
        var checkboxes = [].slice.call(document.querySelectorAll('input[type="checkbox"]'));


        // Définition des règles de validation
        nomEvent.isCorrect = function () {
            if (this.value.length <= 5) {
                return false;
            } else {
                return true;
=======
"use strict";

var formEvent = (function () {


    return {

        // Fonction qui créé un nouveau formulaire
        createFormEvent: function () {

            // Creation et assemblage des divers éléments constituats le formulaire

            var valuesTags = ["Sport", "Voyages", "Formations", "Loisirs"];
            var valuesMois = {

                "Janvier" : "JAN",
                "Février" : "Février",
                "Mars": "MAR",
                "Avril": "AVR",
                "Mai": "MAI",
                "Juin": "JUN",
                "Juillet": "JUL",
                "Août": "AOU",
                "Septembre": "SEP",
                "Octobre": "OCT",
                "Novembre": "NOV",
                "Décembre": "DEC"
            };


            //formulaire
            var form = document.createElement('form');
            form.classList = "formulaire";

            //Le groupe titre
            var title_group = document.createElement('div');
            title_group.className = "form-group";
            var title = document.createElement('h3');
            title.className = "form-title";
            title.innerHTML = "Ajouter un événement";
            title_group.appendChild(title);
            form.appendChild(title);

            form.appendChild(document.createElement('hr'));

            //Nom de l'évènement
            var nameEventGroup = document.createElement('div');
            nameEventGroup.className = "form-group";
            var label_name = document.createElement('label');
            label_name.className = "input-title";
            label_name.htmlFor = "nomEvent";
            label_name.innerHTML = "Nom de l'évènement";
            var i_name_event = document.createElement('input');
            i_name_event.setAttribute('type', 'text');
            i_name_event.id = "nomEvent";
            i_name_event.name = "nomEvent";
            i_name_event.className = "form-control";
            i_name_event.placeholder = "Ex : Séjour à San Francisco";
            var invalid_name = document.createElement('span');
            invalid_name.className = "invalid";
            invalid_name.innerHTML = "5 caractères minimum";
            nameEventGroup.appendChild(label_name);
            nameEventGroup.appendChild(i_name_event);
            nameEventGroup.appendChild(invalid_name);
            form.appendChild(nameEventGroup);

            form.appendChild(document.createElement('hr'));

            // Le groupe catégorie
            var tagsEventGroup = document.createElement('div');
            tagsEventGroup.className = "input-title";
            var label_tag = document.createElement('label');
            label_tag.className = "input-title";
            label_tag.htmlFor = "tagsEvent";
            label_tag.innerHTML = "Catégories";
            var checkboxes_inline = document.createElement('div');
            checkboxes_inline.className = "checkbox-inline";
            for (let value of valuesTags) {

                let span = document.createElement('span');
                let input = document.createElement('input');
                input.type = 'checkbox';
                input.value = value;
                span.appendChild(input);
                span.innerHTML += value;
                checkboxes_inline.appendChild(span);
>>>>>>> Stashed changes
            }
        };

        lieuEvent.isCorrect = function () {
            if (this.value.length <= 3) {
                return false;
            } else {
                return true;
            }
        };

        dureeEvent.isCorrect = function () {
            if (this.value.length <= 3) {
                return false;
            } else {
                return true;
            }
        };

        checkboxes.isCorrect = function () {

            return this.some(element => element.checked);
        };

        desc.isCorrect = function () {
            if (this.value.length <= 20) {
                return false;
            } else {
                return true;
            }
        };


        // Ajout des entrées dans un tableau
        champs.push(nomEvent, lieuEvent, dureeEvent, desc);



        // TODO : Validation date




        // Ajout des events listener des champs texte
        for (let champ of champs) {

            champ.addEventListener('blur', formulaire.validerChamps);
        }



        // Clique sur le bouton ajouter
        btn_ajouter.addEventListener('click', function (event) {
            
            var tags = "";

            for (let c of checkboxes) {
                if (c.checked) {
                    tags += c.value + " ";
                }
            }
            
            if (champs.every((element) => element.isCorrect()) && checkboxes.isCorrect()) {
                console.log('aa')
                eventsRef.push({
                    "lieu": lieuEvent.value,
                    "nom": nomEvent.value,
                    "desc": desc.value,
                    "date": {
                        "annee": annee.value,
                        "jour": jour.value,
                        "mois": mois.value
                    },
                    "tags": tags
                });
                alert('Evénement ajouté !');
            }
            
            document.querySelector('form').reset();
        });




    })();

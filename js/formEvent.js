    "use strict";

    var formEvent = (function () {








        // Traduction francaise du datepicker
       var $picker = $('.datepicker').pickadate({
            monthsFull: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
            monthsShort: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec'],
            weekdaysFull: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
            weekdaysShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
            today: 'Aujourd\'hui',
            clear: 'Effacer',
            close: 'Fermer',
            firstDay: 1,
            format: 'dd mmmm yyyy',
            formatSubmit: 'yyyy/mm/dd',
            labelMonthNext: "Mois suivant",
            labelMonthPrev: "Mois précédent",
            labelMonthSelect: "Sélectionner un mois",
            labelYearSelect: "Sélectionner une année",
            min: Date.now(),
            selectYears: true,
            selectMonths: true,
            formatSubmit: 'd/mmm/yyyy',
            hiddenName: true
        });
        
        



        // Récupération des éléments 
        var eventsRef = firebase.database().ref('test');
        var champs = []; // Liste des champs à valider

        var nomEvent = document.getElementById('nomEvent');
        var lieuEvent = document.getElementById('lieuEvent');
        var btn_ajouter = document.getElementsByClassName('btn-ajouter')[0];
        var dureeEvent = document.getElementById('dureeEvent');
        var date = document.getElementById('dateEvent').value.split(" ");
        var checkboxes = [].slice.call(document.querySelectorAll('input[type="checkbox"]'));


        // Définition des règles de validation
        nomEvent.isCorrect = function () {
            if (this.value.length <= 5) {
                return false;
            } else {
                return true;
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
                eventsRef.push({
                    "auteurid": user.uid,
                    "auteur": user.pseudo,
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

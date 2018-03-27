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

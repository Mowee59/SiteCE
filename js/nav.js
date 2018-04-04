(function () {

    //Bare de recherche
    var search = document.getElementById("search");
    var adv = document.getElementById("adv");
    var input = document.getElementById("input-nav");


    input.addEventListener('focus', function (event) {

        search.classList.add("btn-search-focus");
        adv.classList.add("btn-barre-focus");

    });

    input.addEventListener('blur', function (event) {
        search.classList.remove("btn-search-focus");


    });

    //Ecran de connexion
    var mailLogin = document.getElementById('mailLogIn');
    var mdpLogin = document.getElementById('mdpLogIn');
    var regex_mail = /^[a-zA-z0-9_.]+@\w{2,}\.[a-z]{2,3}/;
    var connexion = document.getElementById('logIn');
    var deconnexion = document.getElementById('deconnexion');


    // Form connexion
    mailLogin.isCorrect = function () {
        return regex_mail.test(this.value)
    }
    mailLogin.addEventListener('blur', formulaire.validerChamps);

    mdpLogin.isCorrect = function () {
        return this.value.length >= 6;
    }
    mdpLogin.addEventListener('blur', formulaire.validerChamps);


    //Bouton Deconnexion Validation
    deconnexion.addEventListener('click', function (event) {
        firebase.auth().signOut();
    });



    connexion.addEventListener('click', function () {

        if (mailLogin.isCorrect() && mdpLogin.isCorrect()) {

            firebase.auth().signInWithEmailAndPassword(mailLogin.value, mdpLogin.value)
                .catch(function (err) {
                    console.log(err);
                });
            document.querySelector('#formLogIn p').classList.remove('show');
            // TODO : Gerer erreurs
            //Fermetur du modal bootstrap
            $('#connexion').modal('hide');
        } else {
            
            document.querySelector('#formLogIn p').classList.add('show');
        }

    });


}());

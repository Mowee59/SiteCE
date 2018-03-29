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
    deconnexion.addEventListener('click', function(event){
        firebase.auth().signOut();
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // Evenement déclenché lors d'un changment d'état (conenxion/deconnexion)
    firebase.auth().onAuthStateChanged(function (user) {
        window.user = user; // On l'attache a windows pour pouvoir le consulter depuis n'importe ou
        let nav_member = document.getElementsByClassName('member')[0];
        let nav_guest = document.getElementsByClassName('navigation')[0];

        if (user) {
            
                        nav_guest.classList.add('hide');

            nav_guest.classList.remove('show');
            document.getElementById('logospace').className="col-md-1";
                        nav_member.classList.remove('hide');
            nav_member.classList.add('show');


        } else {
            nav_member.classList.add('hide');
            nav_guest.classList.add('show');
            nav_guest.classList.remove('hide');
            document.getElementById('logospace').className="col-md-2";
                        nav_member.classList.remove('show');

        }

      


    });


    connexion.addEventListener('click', function () {

        if (mailLogin.isCorrect() && mdpLogin.isCorrect()) {

            firebase.auth().signInWithEmailAndPassword(mailLogin.value, mdpLogin.value)
                .catch(function (err) {
                    console.log(err);
                });
            console.log('clique')

        }

    });


}());

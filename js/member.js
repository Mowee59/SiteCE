"use strict";

var member = (function () {

    var usersRef = firebase.database().ref('/users');


    // Evenement déclenché lors d'un changment d'état (conenxion/deconnexion)
    firebase.auth().onAuthStateChanged(function (user) {
        window.user = user; // On l'attache a windows pour pouvoir le consulter depuis n'importe ou
        let nav_member = document.getElementsByClassName('member')[0];
        let nav_guest = document.getElementsByClassName('navigation')[0];

        if (user) {
            
            //chargement du pseudo
            member.loadPseudo();

            nav_guest.classList.add('hide');
            nav_guest.classList.remove('show');
            document.getElementById('logospace').className = "col-md-1";
            nav_member.classList.remove('hide');
            nav_member.classList.add('show');


        } else {
            nav_member.classList.add('hide');
            nav_guest.classList.add('show');
            nav_guest.classList.remove('hide');
            document.getElementById('logospace').className = "col-md-2";
            nav_member.classList.remove('show');

        }




    });

    
    


    return {

        // Récupeure le pseudo de l'utilisateur depuis firebase
        loadPseudo: () => usersRef.once('value').then(snap => user.pseudo = snap.val()[user.uid].pseudo),

        // Change le pseudo sur firebase
        setPseudo: (pseudo) => usersRef.child(user.uid).update({
            "pseudo": pseudo
        })

    };



})();

"use strict";

var formulaire = (function () {


    return {
        validerChamps: function (event) {
            let champ = event.target;
            var span = this.nextElementSibling;
            if (this.isCorrect()) {
                span.classList.remove('show');
                champ.classList.add('correct');
                champ.classList.remove('not-correct');
            } else {
                champ.classList.add('not-correct');
                champ.classList.remove('correct');
                span.classList.add('show');

            }
        }
    };

})();

"use strict";

var recherche = (function(){

    return {

        resultLayout: function () {

            document.querySelector('.car').remove();
            document.querySelector('.justify-content-center').remove();
            document.getElementById('contenu').innerHTML = "";

        }

    };
})();

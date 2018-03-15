var nav = (function () {

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

})();
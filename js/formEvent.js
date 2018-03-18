"use strict";

var formEvent = (function () {


    return {

        // Fonction qui créé un nouveau formulaire
        createFormEvent: function () {

            // Creation et assemblage des divers éléments constituats le formulaire

            var valuesTags = ["Sport", "Voyages", "Formations", "Loisirs"];
            var valuesMois = {

                "Janvier": "JAN",
                "Février": "FEV",
                "Mars": "MAR",
                "Avril": "AVR",
                "Mai": "MAI",
                "Juin": "JUIN",
                "Juillet": "JUIL",
                "Août": "AOU",
                "Septembre": "SEP",
                "Octobre": "OCT",
                "Novembe": "NOV",
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
            }
            var invalid_tag = document.createElement('span');
            invalid_tag.className = "invalid";
            invalid_tag.innerHTML = "Cochez au moins une catégorie";
            tagsEventGroup.appendChild(label_tag);
            tagsEventGroup.appendChild(checkboxes_inline);
            tagsEventGroup.appendChild(invalid_tag);
            form.appendChild(tagsEventGroup);

            //Date
            var row_date = document.createElement('div');
            row_date.className = 'form-row';

            //Jour
            var colJour = document.createElement('div');
            colJour.classList.add('form-group', 'col');
            row_date.appendChild(colJour);
            var label_jour = document.createElement('label');
            label_jour.className = "input-title";
            label_jour.htmlFor = "jourEvent";
            label_jour.innerHTML = "Jour"
            colJour.appendChild(label_jour);
            var select_jour = document.createElement('select');
            select_jour.className = "form_control";
            select_jour.id = "jourEvent";
            for (let i = 1; i <= 31; i++) {
                let opt = document.createElement('option');
                opt.value = i.toString();
                opt.innerHTML = i.toString();
                select_jour.appendChild(opt);
            }
            colJour.appendChild(select_jour);
            var invalid_jour = document.createElement('span');
            invalid_jour.innerHTML = "Sélectionnez un jour";
            colJour.appendChild(invalid_jour);

            //Mois
            var colMois = document.createElement('div');
            colMois.classList.add('form-group', 'col');
            row_date.appendChild(colMois);
            var label_mois = document.createElement('label');
            label_mois.className = "input-title";
            label_mois.htmlFor = "moisEvent";
            label_mois.innerHTML = "Mois";
            colMois.appendChild(label_mois);
            var select_mois = document.createElement('select');
            select_mois.className = "form_control";
            select_mois.id = "moisEvent";
            for (let mois in valuesMois) {
                let opt = document.createElement('option');
                opt.value = valuesMois[mois];
                opt.innerHTML = mois;
                select_mois.appendChild(opt);
            }
            colMois.appendChild(select_mois);
            var invalid_mois = document.createElement('span');
            invalid_mois.innerHTML = "Sélectionnez un mois";
            colMois.appendChild(invalid_mois);

            //Annee
            var colAnnee = document.createElement('div');
            colAnnee.classList.add('form-group', 'col');
            row_date.appendChild(colAnnee);
            var label_annee = document.createElement('label');
            label_annee.className = "input-title";
            label_annee.htmlFor = "anneeEvent";
            label_annee.innerHTML = "Année";
            colAnnee.appendChild(label_annee);
            var select_annee = document.createElement('select');
            select_annee.className = "form_control";
            select_annee.id = "anneeEvent";
            for (let i = 2018; i <= 2020; i++) {
                let opt = document.createElement('option');
                opt.value = i.toString();
                opt.innerHTML = i.toString();
                select_annee.appendChild(opt);
            }
            colAnnee.appendChild(select_annee);
            var invalid_annee = document.createElement('span');
            invalid_annee.innerHTML = "Sélectionnez une annéee";
            colAnnee.appendChild(invalid_annee);

            form.appendChild(document.createElement('hr'));

            //Description
            var desc_group = document.createElement('div');
            desc_group.className = "form-group";
            var label_desc = document.createElement("label");
            label_desc.className = "input-title";
            label_desc.htmlFor = "desc";
            label_desc.innerHTML = "Description";
            desc_group.appendChild(label_desc);
            var txt_area = document.createElement('textarea');
            txt_area.className = "form-control";
            txt_area.rows = "5";
            desc_group.appendChild(txt_area);
            var invalid_desc = document.createElement('span');
            invalid_desc.className = "invalid";
            invalid_desc.innerHTML = "20 caractères minimum";
            txt_area.appendChild(invalid_desc);
            form.appendChild(desc_group);

            form.appendChild(document.createElement('hr'));

            //Bouton ajouter
            var btn_group = document.createElement('div');
            btn_group.className = "form-group";
            var btn = document.createElement('a');
            btn.href = "#";
            btn.classList.add('btn', 'btn-plein', 'btn-ajouter');
            btn.innerHTML = "Ajouter";
            btn_group.appendChild(btn);
            form.appendChild(btn_group);

            return form;


        }

    }

})();

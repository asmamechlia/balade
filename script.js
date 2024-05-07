// script.js
document.addEventListener("DOMContentLoaded", function () {
    const inscriptionBtn = document.getElementById("inscription-btn");
    const inscriptionFormContainer = document.querySelector(".inscription-form-container");

    inscriptionBtn.addEventListener("click", function () {
        // Toggle la visibilité du formulaire d'inscription
        inscriptionFormContainer.innerHTML = ''; // Efface le contenu existant
        inscriptionFormContainer.style.display = (inscriptionFormContainer.style.display === "none") ? "block" : "none";

        if (inscriptionFormContainer.style.display === "block") {
            // Ajoute le formulaire au conteneur
            const formulaireContent = document.createElement('div');
            formulaireContent.innerHTML = '<h2>Formulaire d\'inscription</h2>' + 
                '<form action="votre_action_de_formulaire" method="POST">' + 
                '   <div class="form-group">' + 
                '       <label for="nom">Nom :</label>' + 
                '       <input type="text" class="form-control" id="nom" name="nom" required>' + 
                '   </div>' + 
                '   <div class="form-group">' + 
                '       <label for="prenom">Prénom :</label>' + 
                '       <input type="text" class="form-control" id="prenom" name="prenom" required>' + 
                '   </div>' + 
                '   <button type="submit" class="btn btn-primary">Valider l\'inscription</button>' + 
                '</form>';
            inscriptionFormContainer.appendChild(formulaireContent);
        }
    });
});

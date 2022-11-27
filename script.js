
let listeTickets = []

/** Permet d'ajouter un utilisateur dans l'API */
function ajoutUtilisateur(nom){
    const addUser = {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ username: nom, password: "none" })
    }
    fetch(`https://webhelprequest.deta.dev/users`, addUser)
    .then(response => response.json())
    .then(response => console.log(response)) 
}



/** Récupération des utilisateurs depuis l'API et remplir la variable globale listeTickets */
function recupUtilisateurs() {
    fetch(`https://webhelprequest.deta.dev/users`)
    .then(response => response.json())
    .then(response => console.log(response));

}

/** Remplir la ComboBox avec les nom des utilisateurs */
function remplirComboBox(listeUtilisateurs){

}

/** Ajout d'un nouveau ticket par un utilisateur */
function nouveauTicket(){

}


/** Permet d'ajouter un ticket dans l'API  et dans la variable globale listeTickets*/
function ajoutTicket(){

}

/** Rafraichi l'affichage des tickets */
function rafraichirTicket(){

}

/** Permet de "supprimer" le premier ticket dans l'API et dans la variable globale listeTickets*/
function supprimTicket(){

}

/** Inverse un ticket avec le suivant */
function switchTicket(){
    
}


recupUtilisateurs()








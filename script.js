
let listeTickets = []
let listeUti = []

/** Permet d'ajouter un utilisateur dans l'API */
function ajoutUtilisateur(nom){
    const addUser = {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ "username": nom, "password": "none" })
    }
    fetch(`https://webhelprequest.deta.dev/users`, addUser)
    .then(response => response.json())
    .then(response => console.log(response)) 
}
function postTicket(subject, userId){
    const addTicket = {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ "subject": subject, "userId": userId })
    }
    fetch(`https://webhelprequest.deta.dev/tickets`, addTicket)
    .then(response => response.json())
    .then(response => {
        
        console.log(response.data);
        listeTickets.push(response.data[0]);
        console.log(response.data[0]);
        console.log(listeTickets);
        //rafraichirTicket()
    }) 
}



/** Récupération des utilisateurs depuis l'API */
function recupUtilisateurs() {
    fetch(`https://webhelprequest.deta.dev/users`)
    .then(response => response.json())
    .then(response => remplirComboBox(response.data));

}

/** Récupération des Tickets depuis l'API et remplir la variable globale listeTickets */
function recupTickets() {
    fetch(`https://webhelprequest.deta.dev/tickets`)
    .then(response => response.json())
    .then(response => remplirTickets(response.data));

}

/** Remplir la ComboBox avec les nom des utilisateurs */
function remplirComboBox(listeUtilisateurs){
    const COMBOBOX = document.getElementById("user-select");
    listeUti = []
    listeUtilisateurs.map( item => {
        listeUti.push(item.username )
        let newOption = document.createElement("option");
        newOption.setAttribute("value",item.username );
        newOption.textContent = item.username;
        COMBOBOX.appendChild(newOption);
    })
    recupTickets() 
}

/** Remplir les tickets en fonction de la variable globle */
function remplirTickets(listeTick){
    const COMBOBOX = document.getElementById("user-select");
    listeTickets = listeTick.filter(item => item.done == 0 && listeUti.includes(item.users_id) ); 
    
    console.log(listeTickets);
    rafraichirTicket()
}

function newElement(elemName,options,...childrens){
    let newElem = document.createElement( elemName);
    for (const [key, value] of Object.entries(options)){
        if (key != "textContent"){
            newElem.setAttributeNS(null, key, value);
        } else {
            newElem.textContent = value
        }
    }
    if (childrens.length > 0){
        childrens.map(child => {
            newElem.appendChild(
                newElement(
                    child.elemName,
                    child.options,
                    ...child.childrens
                    ));
        })
    }
    return newElem;
}


/** Rafraichi l'affichage des tickets */
function rafraichirTicket(){
    const listing = document.getElementById("liste-tickets")
    listing.innerHTML = "";
    listeTickets.map(
        item => listing.appendChild(
            newElement(
                "li",
                {
                    "class":"m-2 bg-primary rounded-2 p-2 list-group-item"
                },
                {
                    "elemName" : "div",
                    "options": {
                        "class":"d-flex justify-content-between"
                    },
                    "childrens":[
                        {
                            "elemName" : "p",
                            "options": {
                                "textContent" : item.users_id,
                            },
                            "childrens":[]
                        },
                        {
                            "elemName" : "p",
                            "options": {
                                "textContent" : item.key,
                            },
                            "childrens":[]
                        }
                    ]
                },
                {
                    "elemName" : "div",
                    "options": {
                        "class":"d-flex justify-content-between"
                    },
                    "childrens":[
                        {
                            "elemName" : "p",
                            "options": {
                                "textContent" : item.subject,
                            },
                            "childrens":[]
                        },
                        {
                            "elemName" : "img",
                            "options": {
                                "src" : "next.svg",
                                "alt" : "Bouton passer son tour",
                            },
                            "childrens":[]
                        }
                    ]
                },
                

            )
        )
    )

}

/** Ajout d'un nouveau ticket par un utilisateur */
function nouveauTicket(){
    const COMBOBOX = document.getElementById("user-select");
    const ENTRYBOX = document.getElementById("entry");
    if (COMBOBOX.value != "" && ENTRYBOX.value != "" ) {
        console.log(COMBOBOX.value);
        console.log(ENTRYBOX.value);
        postTicket(ENTRYBOX.value,COMBOBOX.value)

    }
}


/** Permet d'ajouter un ticket dans l'API  et dans la variable globale listeTickets*/
function ajoutTicket(){

}

/** Permet de "supprimer" le premier ticket dans l'API et dans la variable globale listeTickets*/
function supprimTicket(){

}

/** Inverse un ticket avec le suivant */
function switchTicket(){

}


recupUtilisateurs()

document.getElementById("formBox").addEventListener(
    "submit",
    event => {
        event.preventDefault()
        nouveauTicket()}
);







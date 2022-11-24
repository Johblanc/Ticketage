
/*

fetch('https://webhelprequest.deta.dev/users')
.then(response => response.json()) 
.then(json => console.log(json));*/

getUsers()

function getUsers() {
    fetch(`https://webhelprequest.deta.dev/users`)
    .then(response => response.json())
    .then(response => console.log(response));

}

/* const addUser = {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ username: "Johann", password: "none" })
}
fetch(`https://webhelprequest.deta.dev/users`, addUser)
    .then(response => response.json())
    .then(response => console.log(response)) */
    



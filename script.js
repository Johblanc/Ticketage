getUsers()

function getUsers() {
    fetch(`https://webhelprequest.deta.dev/users`)
        .then(response => response.json())
        .then(response => console.log(response));
}






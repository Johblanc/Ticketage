function getUsers() {
    fetch(`https://webhelprequest.deta.dev/users`)
        .then(response => response.json())
    .then (console.log(getUser()));
}











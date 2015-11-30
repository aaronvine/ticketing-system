app.controller('UserController', function (tickets) {
    this.tickets = tickets;
    this.userEmail = tickets[0].userEmail;
});

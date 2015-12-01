app.controller('FormController', function (ticketsService) {
    var _this = this;
    _this.tickets = ticketsService.tickets;
    _this.newTicket = {};
    _this.addNewTicket = function (isValid) {
        _this.submitted = true;
        // if (isValid) {
        ticketsService.addNewTicketToService(_this.newTicket);
        _this.newTicket = {};
        // alert('the ticket was correctly added');
        // } else {
        //     alert('please correct the details');
        // }
    };
    _this.tickets = ticketsService.tickets;
});

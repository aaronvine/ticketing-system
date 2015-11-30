app.controller('MainController', function ($stateParams, ticketsService) {
    var _this = this;
    _this.title = ticketsService.title;
    _this.idCount = ticketsService.idCount;
    _this.currentId = $stateParams.ticketId;
    _this.tickets = ticketsService.tickets;
    _this.newTicket = {};
    _this.addNewTicket = function () {
        ticketsService.addNewTicketToService(_this.newTicket);
        _this.newTicket = {};
    };
    _this.tickets = ticketsService.tickets;
});

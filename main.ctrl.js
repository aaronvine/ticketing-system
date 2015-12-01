app.controller('MainController', function ($stateParams, ticketsService) {
    var _this = this;
    _this.title = ticketsService.title;
    _this.tickets = ticketsService.tickets;
});

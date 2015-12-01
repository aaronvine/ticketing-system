app.controller('MainController', function ($stateParams, ticketsService) {
    var _this = this;
    _this.title = ticketsService.getTitle();
    _this.tickets = ticketsService.getTickets();
    _this.getTickets = function () {
        _this.tickets = ticketsService.getTickets();
    };
    ticketsService.registerObserverCallback(_this.getTickets);

});

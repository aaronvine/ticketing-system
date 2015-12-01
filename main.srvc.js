app.service('ticketsService', function (localStorageService) {
    var _this = this;
    _this.title = 'Ticketing system';
    _this.tickets = localStorageService.getTickets();
    _this.observerCallbacks = [];

    _this.registerObserverCallback = function (callback) {
        _this.observerCallbacks.push(callback);
    };

    _this.notifyObservers = function () {
        angular.forEach(_this.observerCallbacks, function (callback) {
            callback();
        });
    };

    _this.addNewTicketToService = function (newTicket) {
        newTicket.id = uuid();
        localStorageService.addNewTicketToStorage(newTicket);
        _this.tickets = localStorageService.getTickets();
        _this.notifyObservers();
    };

    _this.getTickets = function () {
        return _this.tickets;
    };

    _this.getTitle = function () {
        return _this.title;
    };
});

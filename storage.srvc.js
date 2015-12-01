app.service('localStorageService', function () {
    var _this = this;
    _this.storage = localStorage;
    if (!_this.storage.getItem('tickets')) {
        console.log('no tickets in local storage');
        ticketsToStore = [
        {
            title: 'the title',
            content: 'my domain is broken!!!!',
            userEmail: 'bob@bobcorp.com'
        },
        {
            title: 'second title',
            content: 'hello\ni have a lot of problems\ngoodbye',
            userEmail: 'foo@goo.com'
        },
        {
            title: 'help me',
            content: 'lost my site\nrecover it',
            userEmail: 'alice@alicecorp.com'
        },
        {
            title: 'alice again',
            content: 'lost my site again\npleaseee recover it\nblah blah blash',
            userEmail: 'alice@alicecorp.com'
        },
        {
            title: 'the title 4',
            content: 'my domain is broken once again!!!!\narrghhh',
            userEmail: 'bob@bobcorp.com'
        }
        ];
        ticketsToStore.map(function (ticket) {
            ticket.id = uuid();
            return ticket;
        });
        _this.storage.setItem('tickets', JSON.stringify(ticketsToStore));
    }
    _this.tickets = JSON.parse(_this.storage.getItem('tickets'));

    _this.addNewTicketToStorage = function (newTicket) {
        ticketsToStore = JSON.parse(_this.storage.getItem('tickets'));
        ticketsToStore.push(newTicket);
        _this.storage.setItem('tickets', JSON.stringify(ticketsToStore));
        _this.tickets = JSON.parse(_this.storage.getItem('tickets'));
    };

    _this.getTickets = function () {
        return _this.tickets;
    };
});

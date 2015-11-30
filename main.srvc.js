app.service('ticketsService', function () {
    var _this = this;
    _this.title = 'Ticketing system';
    _this.tickets = [
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

    _this.tickets = _this.tickets.map(function (ticket) {
        ticket.id = uuid();
        return ticket;
    });

    _this.addNewTicketToService = function (newTicket) {
        newTicket.id = uuid();
        _this.tickets.push(newTicket);
    };
});

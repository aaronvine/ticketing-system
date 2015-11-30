var app = angular.module('app', ['ui.router']);
app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/tickets-list');
    $stateProvider
        .state('tickets-list', {
            url: '/tickets-list',
            templateUrl: 'tickets-list.html',
            controller: 'MainController',
            controllerAs: 'main'
        })
        .state('ticket', {
            url: '/tickets-list/:ticketId',
            templateUrl: 'ticket.html',
            controller: 'MainController',
            controllerAs: 'main'
        })
        .state('user-page', {
            url: '/users?email',
            templateUrl: 'user-page.html',
            controller: 'UserController',
            controllerAs: 'user'
        });
});

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

app.controller('UserController', function ($stateParams, ticketsService) {
    var _this = this;
    _this.tickets = ticketsService.tickets;
    _this.currentEmailFilter = $stateParams.email;
});

app.service('ticketsService', function () {
    var _this = this;
    _this.title = 'Ticketing system';
    _this.idCount = 5;
    _this.tickets = [
    {
        id: 1,
        title: 'the title',
        content: 'my domain is broken!!!!',
        userEmail: 'bob@bobcorp.com'
    },
    {
        id: 2,
        title: 'second title',
        content: 'hello\ni have a lot of problems\ngoodbye',
        userEmail: 'foo@goo.com'
    },
    {
        id: 3,
        title: 'help me',
        content: 'lost my site\nrecover it',
        userEmail: 'alice@alicecorp.com'
    },
    {
        id: 4,
        title: 'alice again',
        content: 'lost my site again\npleaseee recover it\nblah blah blash',
        userEmail: 'alice@alicecorp.com'
    },
    {
        id: 5,
        title: 'the title 4',
        content: 'my domain is broken once again!!!!\narrghhh',
        userEmail: 'bob@bobcorp.com'
    }
    ];
    _this.addNewTicketToService = function (newTicket) {
        newTicket.id = _this.idCount;
        _this.idCount++;
        _this.tickets.push(newTicket);
    };
});

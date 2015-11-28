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
            url: '/ticket/:ticketId',
            templateUrl: 'ticket.html',
            controller: 'MainController',
            controllerAs: 'main'
        });
});

app.controller('MainController', function ($stateParams) {
    var ts = this;
    ts.title = 'Ticketing System';
    ts.clicked = false;
    ts.currentId = $stateParams.ticketId;
    ts.tickets = [
    {
        id: 1,
        title: 'the title',
        content: 'my domain is broken!!!!',
        userEmail: 'bob@bobcorp.com'
        //show: true
    },
    {
        id: 2,
        title: 'second title',
        content: 'hello\ni have a lot of problems\ngoodbye',
        userEmail: 'foo@goo.com'
        //show: true
    },
    {
        id: 3,
        title: 'help me',
        content: 'lost my site\nrecover it',
        userEmail: 'alice@alicecorp.com'
        //show: true
    }
    ];
});

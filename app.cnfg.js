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
            resolve: {
                ticket: function ($stateParams, ticketsService, $state) {
                    try {
                        return ticketsService.tickets.filter(function (ticket) {
                            return ticket.id === $stateParams.ticketId;
                        })[0];
                    } catch (e) {
                        console.error(e);
                        $state.go('404');
                    }
                }
            },
            controller: 'TicketController',
            controllerAs: 'ticketCtrl'
        })
        .state('user-page', {
            url: '/users?email',
            templateUrl: 'user-page.html',
            resolve: {
                tickets: function ($stateParams, ticketsService, $state) {
                    try {
                        return ticketsService.tickets.filter(function (ticket) {
                            return ticket.userEmail === $stateParams.email;
                        });
                    } catch (e) {
                        console.error(e);
                        $state.go('404');
                    }
                }
            },
            controller: 'UserController',
            controllerAs: 'user'
        })
        .state('404', {
            template: '<h2>404!</h2>'
        });
});

function uuid() {
    return Math.floor(Math.random() * 999999).toString(36);
}

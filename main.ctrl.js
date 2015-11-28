app.controller('MainController', function () {
    var ts = this;
    ts.title = 'Ticketing System';
    ts.clicked = false;
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
    // ts.showTicket = function (ticket) {
    //     if (ts.clicked) {
    //         angular.forEach(ts.tickets, function (value, key) {
    //             value.show = true;
    //         });
    //         ts.clicked = false;
    //     } else {
    //         angular.forEach(ts.tickets, function (value, key) {
    //             if (value !== ticket) {
    //                 value.show = false;
    //             }
    //         });
    //         ts.clicked = true;
    //     }
    // };
});

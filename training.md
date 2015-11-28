#Angular (1.x, not 2.0)

##Resources
- https://thinkster.io/a-better-way-to-learn-angularjs
- https://github.com/jmcunningham/AngularJS-Learning
- http://www.revillweb.com/tutorials/angularjs-in-30-minutes-angularjs-tutorial//
- http://toddmotto.com/ultimate-guide-to-learning-angular-js-in-one-day/

## Mini project

### Description
Write a very simplistic ticketing system in a [SPA](https://github.com/wix/ng-training-kit/blob/master/Content/Website%20Architecture%20Basics.md#single-page-applications) using Angular (1.x):
The app should display a list of tickets (start with some hardcoded). Each ticket contains a title, content and user email. (i.e. `{title: 'the title', content: 'my domain is broken!!!!', userEmail: 'bob@bobcorp.com'}`

### Steps

1. Display a list of the titles of the tickets you have (hardcoded object, like in the gallery), along with the first line of the content.
2. Make each title clickable, and when clicking on it show the "full" ticket, and hide the list.
3. Make the tickets deep-linkable by their index - going to /1 will show ticket 1, and so on. Do this using [ui-router](https://scotch.io/tutorials/angular-routing-using-ui-router) (you may need to read the ngRoute method in this post beforehand). Note that this will require a refactor of what you did before because now the architechture changes a bit.
4. In the end of the tickets list, add a box where you can add a new ticket, with 3 field (title, content and userEmail). When a ticket is added it'll be added to the list and be also deep linkable.
5. User page - when going to /users?email=bob@bobcorp.com  a new page will display all tickets we have by this user (the filtering is done client side)


#Typescript
TBD

#Front-ops
TBD

# Testing
TBD

# TDD
TBD

# SCSS
TBD

# E2E testing - Protractor
TBD





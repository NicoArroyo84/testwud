# Wud Technical Test

The app shows a list of users retrieved by using a simple server API and allowing to save new users.

In the users view (users in the menu) a list of the current users are displayed in a table with their data. New users can be added by clicking on "Add User" button and completing the form.

First and last names are mandatory. Email is not mandatory but needs to be valid.

## Summary

A user service has been created to communicate the server and the user controller.

The server API service is allocated in api/server.js. The request header has been modified to allow all CORS request operations.

To create the navbar wudNavbar dynamically the states are get in the component controller, then using ngrepeat directive to populate all the states that has a "label" property. To know which states have this property defined a custom filter has been applied (isUndefined) in its controller.

In order to validate the email a directive (validateEmail) with this porpuse has been added which is used in the user creation form, overwriting the angular default one (default one allows for instance email@sun.xx with ".xx".

### Prerequisities

Nodejs npm and gulp to run it

### Installing

Clone the git project.

Install dependencies.
```
npm install
bower install
```
Run server API.
```
npm start
```
In another cmd window run the serve the app with gulp.
```
gulp serve
```

## Author

* Nicolas Arroyo



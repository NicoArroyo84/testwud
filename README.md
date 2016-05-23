# Wud Technical Test

The app shows a list of users retrieved using a simple server API as well as allowing to save new users.

In the users view (users in the menu) a list of the current users are display in a table with their data. New users can be added by clicking on "Add User" button and completing the form.

First and last name are mandatory. Email is not mandatory but needs to be a valid email.

## Resume

A user service has been created to communicate between the server and our controller.

The server API service is implemented in api/server.js. The request header has been modified to allow CORS operations in all operations

To create the navbar wudNavbar dynamically the states are get in the component controller, then using the ngrepeat directiveall the states with a label property are created. To know which states have a label defined a custom filter has been applied (isUndefined) in its controllerr

To validate the email a directive (validateEmail) with this porpuse has been added which is been used in the user creation form, overwriting the angular default one (default one allows for instance email@sun.xx with ".xx"

### Prerequisities

Nodejs npm and gulp to run it


### Installing

Clone the git project

Install dependencies
```
npm install
```
Run server API
```
npm start
```
In another cmd window run the serve the app with gulp
```
gulp serve
```


## Author

* **Nicolas Arroyo** 



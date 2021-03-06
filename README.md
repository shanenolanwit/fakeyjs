# fakeyjs
Starting point for using NodeJS to demonstrate simple webapp exploits

 * Create a mysql database (ie fakeyjs)

 ```
 CREATE DATABASE fakeyjs;
 USE fakeyjs; 
 ```
 * Import the db_setup.sql script
``` 
source /path/db_setup.sql ;
```
 * Copy and rename or simply rename the config-template.js file to config.js
 * Fill out the development section of the config file to reflect your mysql configuration and desired node configuration eg:
  ```
   development: {
        database: {
            host:   '127.0.0.1',
            port:   '3306',
            user:   'database_username',
            pass:   'database_password',
            name:   'fakeyjs'
        },
        server: {
            host:   '127.0.0.1',
            port:   '8000'
        },
        fakeserver : {
            host:   '127.0.0.1',
            port:   '9000'
        }
    }
  ```
 * Run npm install to install dependencies
```
npm install
```
 * Run npm run start to start up the authentic server
```
  npm run start
```
 * Run npm run fake in a new window to start up the fake server
```
  npm run fake
```
* Open the authentic servers homepage in your browser ( eg http://localhost:8000/ )
  
Objectives

* Use the developer console of your browser to obtain an auth token so you can use resttful endpoints (see hints)
* Figure out how to get users to use your fake server instead of the authentic server
  * Add to the view/server as required to make the fake server seem even more authentic, maybe even create a copycat database (you could also include a new table to store all the details you steal)
* Although not exposed to the frontend, the provided database has a table that stores company usernames and passwords, try to come up with a way of identifying and accessing these details (assuming you have no access to the schema), then try to find the plaintext values.
* Figure out what value the database would store when given a plaintext password value of 'fakeyjs'
* Find any details you can about a reference number BBPL887
* Identify weaknesses in the code
  * Create a second clone of this project and implement fixes

Hints

* Use the credentials - shane / secprog to log in initially
* The server api has a number of endpoints, most are used to render views, but the query endpoint is a restful endpoint which returns json data
  * Use [postman](https://www.getpostman.com/ "POSTMAN") to test it out - [server]:[port]/query?product_id=[product_id]
  ![postman.png](https://raw.githubusercontent.com/shanenolanwit/fakeyjs/master/public/img/postman.png "API request")

* This company has implemented a homegrown, two step encryption algorithm for its passwords. The first step is to take an Md5 hash of the password, it's up to you to identify the second step. 
* Use the passwords.txt file which has been provided, to help you solve the values of the encrypted passwords


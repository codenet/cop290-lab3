This is a rough setup to get you started for the Lab-3 implementation of the
[COP290 course](http://abhilash-jindal.com/teaching/2022-2-cop-290/).  Both the
server and the client were downloaded from Swagger for the default petstore
APIs. 

They have been modified to support a single `add_pet` API.

## Setup database

Install and start mysql. Instructions for OSX:
```
brew install mysql
brew services start mysql
```

Instructions for Linux can be found online. Once mysql server is running,
create the database:

```
$ sudo mysql -u root
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 8
Server version: 8.0.32 Homebrew

Copyright (c) 2000, 2023, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> create database pets;
Query OK, 1 row affected (0.01 sec)
mysql> CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';
Query OK, 1 row affected (0.01 sec)
mysql> GRANT ALL ON pets.* TO 'newuser'@'localhost';
Query OK, 1 row affected (0.01 sec)
```

## Start server

It is advised to setup the `server/` in PyCharm IDE. PyCharm will automatically
discover the `requirements.txt` and install the dependencies. You can then run
the `server/swagger_server/__main__.py` in "debug mode".  Running in debug mode
lets you setup "breakpoints" which are a very powerful debugging mechanism. 

Otherwise, you can run the server from command line:
```
pip3 install -r requirements.txt
python3 -m swagger_server
```

After the server starts, you should be able to see it in your browser at
http://localhost:8080/api/v3/ui/. `server/README.md` has more details about
the server.

When the server starts, it creates some database tables. The code to setup the
database is in `server/swagger_server/db.py`. You can go to your mysql server
to check:

```
mysql> show tables;
+----------------+
| Tables_in_pets |
+----------------+
| category       |
| pet            |
| pet_tag        |
| tag            |
+----------------+
4 rows in set (0.01 sec)

mysql> describe category;
+-------+--------------+------+-----+---------+----------------+
| Field | Type         | Null | Key | Default | Extra          |
+-------+--------------+------+-----+---------+----------------+
| id    | int          | NO   | PRI | NULL    | auto_increment |
| name  | varchar(255) | NO   | UNI | NULL    |                |
+-------+--------------+------+-----+---------+----------------+
2 rows in set (0.01 sec)
```

> A good exercise would be to try to create another table in the database from
`db.py`.

## Start client

You will need to install node first.

```
cd my-app
yarn install
yarn start
```

If the above does not work, use the following instead:
```
cd my-app
npm install
npm start
```

This will start the client at http://localhost:3000/. 

## Seeing a database-server-client interaction

If you were running the server in debug mode, you can setup a breakpoint in the
`add_pet` method of `server/swagger_server/controllers/pet_controller`.

Similarly to follow along with the client, you can `right click in Chrome >
Inspect` to open developer tools. Next select the `Sources tab > my-app > src >
App.js`. Finally, set a breakpoint inside the function `f`.

Now when you click the `Add` button on UI, the code will first stop in the
client.  You can keep stepping through the program. It will eventually call an
API on the server. 

Now, the server will stop at the breakpoint. You can step along the code to see
it adding data to the database and finally replying back to the client.  You can
check that the pet is indeed added into the database.

```
mysql> select * from category;
+----+------+
| id | name |
+----+------+
|  1 | Dog  |
+----+------+
1 row in set (0.00 sec)
```

You can also examine the API call's request and response parameters in the
Network tab of Chrome developer tool.

Following are good exercise to do:
* Query the rest of the tables to see the added pet and how it is related with
other tables.
* Complete the form in frontend to contain pet tags, attach images. `ADD` button
should use the values in the form instead of the hard-coded value.
* Use the value returned from the `add_pet` API call to actually display the
added pet.
* Create support for another API in the server from http://localhost:8080/api/v3/ui/.

# eCommerce-SQL

## Description

If you are a business owner that is looking store, categorize, and tag your merchandize then this would be a good back end for you. It utilizes a mysql database and uses sequelize as well as dotenv and router to pull, post, put and delete information from the ossociated objects. This would allow anyone that is interested in managing their merchandise the adjust the data as needed.

## Installation

In order to run the application first open your terminal at the root level. Run npm i to install all the dependancies. From there sign into the mydsql database by running mysql -uroot -p then insert your password directly after the p. Then use SOURCE ./db/index.js to seed the database. Then create a .env file and add the following with your information for your sql server.

- DB_NAME = "ecommerce_db"
- DB_USER = "(your user, usually root)"
- DB_PASSWORD = "(Your password)"

Once you have done run node index.js in order to start the server.

## Usage

Once you have the server running. In either your local browser or in an associate route organization app you can check how the various routes are able to run different functions on the database. Here are the following possible routes and their associated functions.

- GET - http://localhost:3000/api/tag - "Gets all tag data"
- GET - http://localhost:3000/api/tag/1 - "Get the tag data from a specific tag with the id of 1"
- POST - http://localhost:3000/api/tag - Creates a new tag item. You must include the the tag name in a json object"
- PUT - http://localhost:3000/api/tag/1 - "Edits a current item with an ID of 1. Must include tag name in a json object"
- DELTE - http://localhost:3000/api/tag/1 - Deletes the file with an id number of 1"

- Instructions are the same for http://localhost:3000/api/category and http://localhost:3000/api/product.

![A screenshot of the get all function](assets/Screenshot%202023-05-04%20at%208.15.34%20PM.png)
  ![A screenshot of getting data by id](assets/Screenshot%202023-05-04%20at%208.15.44%20PM.png)
  ![A screenshot of adding an item using the post function](assets/Screenshot%202023-05-04%20at%208.15.54%20PM.png)

## Credits

- Insomnia - https://docs.insomnia.rest/
- Node.js - https://nodejs.org/en
- mySQL - https://www.mysql.com/
- dotenv - https://www.npmjs.com/package/dotenv
- Express - https://www.npmjs.com/package/express
- Router - https://www.npmjs.com/package/router

## License

MIT License

Copyright (c) 2023 Alex Horning

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

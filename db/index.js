/*
index.js:
- imports sequelize model-
- creates a sequelize class instance
- Initiates the sequelize instance's constructor
- Exports module,instance,models
*/

//Import squelize module
const Sequelize = require('sequelize');
//Create an instance and initiate the constructor
//storage: 'library.db' SQLITE  
const sequelize =  new Sequelize({
    dialect: 'mysql',
    host: 'us-cdbr-east-02.cleardb.com',
    username:'b81b82c8876c8e',
    password:'0f7dca31',
    database:'heroku_a85609d2d0b8c1b',
    port:3306,
    logging: false
});

const db = {
    sequelize,
    Sequelize,
    models:{}
}

db.models.Book =  require('./models/Book.js')(sequelize);

module.exports = db;


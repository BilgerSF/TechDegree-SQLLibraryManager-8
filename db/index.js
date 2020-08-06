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
const sequelize =  new Sequelize({
    dialect: 'sqlite',
    storage: 'leads.db',
    logging: false
});

const db = {
    sequelize,
    Sequelize,
    models:{}
}

db.models.Book =  require('./models/Book.js')(sequelize);

module.exports = db;


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
const sequelize =  new Sequelize('heroku_a85609d2d0b8c1b','b81b82c8876c8e','0f7dca31',{
    host: 'us-cdbr-east-02.cleardb.com',
    dialect:'mysql'
});

const db = {
    sequelize,
    Sequelize,
    models:{}
}

db.models.Book =  require('./models/Book.js')(sequelize);
sequelize.sync({force:true})
.then(()=>{
   console.log('tables have been synchronized');
})

module.exports = db;


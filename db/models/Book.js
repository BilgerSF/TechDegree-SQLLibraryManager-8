/*
Book.js:
- Here is where the database tables (sequelize model) and fields are defined.
*/

const Sequelize = require('sequelize');


module.exports = (sequelize) => {

    //Table and field defintions
    class Book extends Sequelize.Model {}

    //Field definitions
    Book.init({

      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
  
      title: {
        type: Sequelize.STRING(50),
        allowNull: false, //disallow null. field validation- title can not be null
        validate: {
          notNull: {
            msg: 'Please provide a Title',
          },
          notEmpty: {
            msg: 'Please provide a Title',
          },
        },
      },
      
      author:{
        type: Sequelize.STRING(50),
        allowNull: false, //disallow null. field validation- title can not be null
        validate: {
          notNull: {
            msg: 'Please provide an author',
          },
          notEmpty: {
            msg: 'Please provide an author',
          },
        },
      },

      genre:{
        type: Sequelize.STRING(20),
      },
      
      year:{
        type: Sequelize.INTEGER
      }
  
    }, { 
      //Adjust models:
      //freezeTableName: true, // disable plural table names
      //timestamps: false, // disable timestamps
      //modelName: 'movie', // set model name to something else
      //tableName: 'my_movies_table', // changes the table name in the database to my_movies_table:
      //paranoid: true, // enable "soft" deletes.. paranoid option to true means that a destroyed record will not be physically deleted from the database, but it will also not be returned in future queries.
      sequelize 
    });
  
    return Book;
  };
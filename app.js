/*
app.js sets up an express server:
- Routing
- Middlewares
- Template engine
*/
//Import express module
const express =  require('express');
//Import express built in body-parser
const bodyParser = require('body-parser');
//Import routes
const routes = require('./routes/routes')

//Create an express app
const app = express();
//Server porttt
const PORT = process.env.PORT || 3000;
//.....MiddleWares...//
//load body-parser for incorming URL encoded data
app.use(bodyParser.urlencoded({extended:true}));
//Load Static Middleware
app.use(express.static('public'));

//Set template engine (pug in this case)
app.set('view engine', 'pug');


//Use routes
app.use(routes);

//Error Handler; non existing route/request failure
app.use( (req,res,next) => {
    //create error object
    const err = new Error('Oh no!, this route does not exist');
    err.status = 404;
    next(err);
  });

app.use((err,req,res,next) =>{
    res.locals.error = err;
    res.status(err.status);
    res.render('page-not-found');
    console.error('Oh no!, this route does not exist',err);
});





//LocalHost- Listen to port 3000
app.listen(PORT,function(){
    console.log('The app is listening to port 3000')
    //Create database table when the server starts

});

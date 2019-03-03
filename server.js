const path = require('path');
const express = require('express');
const handlebars = require('hbs');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

var env = process.env.NODE_ENV || 'development';
var config = require('./config')[env];

//Create the connection
const conn = mysql.createConnection({
  host: config.database.host,
  user: config.database.user,
  password: config.database.pass,
  database: config.database.name
});

//Test the connection
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});

//set views file
app.set('views',path.join(__dirname,'views'));
//set view engine
app.set('view engine', 'hbs');
//set folder public as static folder for static files
app.use('/assets',express.static(__dirname + '/public'));

// For details on bodyParser config see https://github.com/expressjs/body-parser
// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: false }));

//home page
app.get('/',(req, res) => {
  res.render('home',{
    data: []
  });
});

//list products
app.get('/list',(req, res) => {
  let sql = "SELECT * FROM product";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.render('products',{
      results: results
    });
  });
});

//create products
app.post('/save',(req, res) => {
  let data = {name: req.body.product_name, price: req.body.product_price};
  let sql = "INSERT INTO product SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.redirect('/list');
  });
});

//update products
app.post('/update',(req, res) => {
  let sql = "UPDATE product SET name='"+req.body.product_name+"', price='"+req.body.product_price+"' WHERE id="+req.body.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.redirect('/list');
  });
});

//route for delete data
app.post('/delete',(req, res) => {
  let sql = "DELETE FROM product WHERE id="+req.body.product_id+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
      res.redirect('/list');
  });
});

//query data
app.get('/query',(req, res) => {
  let sql = "SELECT * FROM product WHERE id="+req.query.product_id+"";
  let query = conn.query(sql, (err, results) => {
    if(err){
      res.json({
        error: err
      })
    }else {
      res.json({
        data: results
      })
    }
    
  });
});

//server listening
app.listen(config.server.port, () => {
  console.log('Server is running at port ' + config.server.port);
});

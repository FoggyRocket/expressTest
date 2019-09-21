const express = require('express');
const app = express();
//
const bodyParser = require("body-parser");

app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');
//body
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('index')
})
//param
app.get('/params/:data',(req,res)=>{

    res.json(req.params)
})
//
app.get("/detail/:dylan/:id/:name", (req, res) => {
    res.json(req.params);
  });
//
app.get('/query',(req,res)=>{
    res.json(req.query)
})
//se envian los paramatros en la peticion 
app.post('/segunda', (req,res)=> {
    console.log('que esto',req.body)
    res.send('Hola Mundo')
})
//Get se ve el query en la url
app.get('/segunda', (req,res)=> {

    res.send('Hola Mundo')
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})
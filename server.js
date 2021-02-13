//Définition des modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

//Connexion à la base de donnée
mongoose.connect('mongodb://localhost:27017/building-manegment').then(() => {
    console.log('Connected to mongoDB')
}).catch(e => {
    console.log('Error while DB connecting');
    console.log(e);
});


//On définit notre objet express nommé app
const app = express();

//Body Parser
var urlencodedParser = bodyParser.urlencoded({
    extended: true
});
app.use(urlencodedParser);

app.use(bodyParser.json());

//Définition des CORS
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//Définition du routeur

const userRoute = require('./routes/userRoute');
const referenceRoute = require('./routes/referenceRoute');
const customerRoute = require('./routes/customerRoute');
const orderRoute = require('./routes/orderRoute');
const productRoute = require('./routes/productRoute');
const projectRoute = require('./routes/projectRoute');
const suplierRoute = require('./routes/suplierRoute');




app.use('/user', userRoute);
app.use('/reference', referenceRoute);
app.use('/customer', customerRoute);
app.use('/order', orderRoute);
app.use('/product', productRoute);
app.use('/project', projectRoute);
app.use('/suplier', suplierRoute);



//Définition et mise en place du port d'écoute
var port = 8000;
app.listen(port, () => console.log(`Listening on port ${port}`));
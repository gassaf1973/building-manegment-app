const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
/*
const errorController = require('./controllers/error');
const User = require('./models/user');
*/

// initialization
const PORT = process.env.PORT || 3001;

const app = express();
/*
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
/*
app.use((req, res, next) => {
  User.findById('5bab316ce0a7c75f783cb8a8')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);
*/
const dbRoute = 'mongodb://localhost:27017/cortoba?authSource=cortoba';
mongoose.connect(dbRoute, { useNewUrlParser: true });
let db = mongoose.connection;
db.once('open', () => console.log('Connected to the database'));
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// start server

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} ...`);
});
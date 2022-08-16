const express = require('express');
const path = require('path');
const index_router = require('./routes/index');
const movies_router = require('./routes/movies');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index_router);
app.use('/movies', movies_router);

module.exports = app;

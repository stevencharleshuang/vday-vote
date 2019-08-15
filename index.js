// Package requirements
const express        = require('express');
const logger         = require('morgan');
const bodyParser     = require('body-parser');
const path           = require('path');
const methodOverride = require('method-override');
const router         = require('./routes/router');
const app            = express();
const PORT           = process.env.PORT || 3000;

// Set view engine as EJS and join "views" path to root
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set server_secret object key
app.set('server_secret', process.env.SERVER_SECRET);

// Use morgan
app.use(logger('dev'));
// Join public dir to root dir
app.use(express.static(path.join(__dirname, 'public')));
// Body parser call for json object/array returns
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());
// Set method override _method usage
app.use(methodOverride('_method'));

app.use('/', router);

// Home route, redirect to public homepage
// app.get('/', (req, res) => {
//   console.log('At Homepage');
// });

// json object for server errors
app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).json({
    error: err,
    message: err.message
  })
})

// Port listener and console logged response
app.listen(PORT, () => {
  console.log(`Server up and running! Port: ${PORT} Env: ${app.get('env')}`);
});
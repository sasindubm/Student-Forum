const express = require('express');
const app = express();
const Routes = require('./routes/routes.js');

//Middleware
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', Routes);

app.listen(process.env.PORT || 3000, () => {
    console.log('server is listening on port 3000.');
});
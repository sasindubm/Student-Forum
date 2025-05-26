const express = require('express');
const session = require('express-session');
const dotenv = require ('dotenv');
const routes = require ('./routes/routes');
const app = express();

//Middleware
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

//Routes
app.get('/', (req, res) => {
    res.render('login', { title: 'login', navigation: false });
}
);

app.get('/register', (req, res) => {
    res.render('register', { title: 'register', navigation: false });
}
);

app.get('/home',(req, res)=>{
    res.render('index',{title:'Home', navigation:true});
});

app.get('/pastpaper',(req, res)=>{
    res.render('pastpaper',{title:'pastpapers',navigation:false});
});

app.get('/syllabus',(req, res)=>{
    res.render('syllabus',{title:'syllabus',navigation:false});
});

app.listen(process.env.PORT || 3000,()=>{
    console.log('server is listening on port 3000.');
});
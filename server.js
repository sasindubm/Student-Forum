const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/',(req, res)=>{
    res.render('index',{title:'Home', navigation:true});
});

app.get('/pastpaper',(req, res)=>{
    res.render('pastpaper',{title:'pastpapers',navigation:false});
});

app.get('/syllabus',(req, res)=>{
    res.render('syllabus',{title:'syllabus',navigation:false});
});

app.listen(port,()=>{
    console.log(`server is listening on port ${port}.`);
});
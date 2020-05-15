const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const blog = require('./controllers/blog.controller');

app.use(bodyParser.json());
app.post('/api/posts', blog.insertPost);
app.get('/api/posts', blog.getAllPost);
app.get('/api/posts/:id', blog.getOne);



app.get('/', function(req, res) {
    res.send('Hello anyan');
});

app.listen(3000);
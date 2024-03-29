const express = require('express');
const app = express();
const port = 5000;
const handlebars = require('express-handlebars');
const path = require('path');
const routes = require('./routes');


app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended : false}))
app.use(routes);


app.listen(port, () => console.log(`Server is listening to port ${port}...`));
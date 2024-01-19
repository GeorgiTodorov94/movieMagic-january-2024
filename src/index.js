const express = require('express');
const app = express();
const port = 5000;
const handlebars = require('express-handlebars');
const path = require('path')

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.get('/', (req, res) => {
    res.send('Home Page');
})

app.listen(port, () => console.log(`Server is listening to port ${port}`))
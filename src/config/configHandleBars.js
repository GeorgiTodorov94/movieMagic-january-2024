function configHandleBars(app){
    app.engine('hbs', handlebars.engine({
        extname: 'hbs'
    }));
    
    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname, 'views'));
    return app;
}

module.exports = configHandleBars;
const express = require('express');
const app = express();
const c = console.log,
    port = 8000;

app.get('/', (req, res) =>{
    res.send("Hola mundo");
});
app.get('/send_file', (req, res ) => {
    res.set({
        'content-type': 'text/html; charset=utf-8'
    });
    res.sendFile(`${__dirname}/views/index.html`);
});

// parametros
app.get('/user/:id/:age', (req, res) => {
    res.json({
        id: req.params.id,
        age: req.params.age
    });
});

// query

app.get('/courses', (req, res) => {
    res.json({
        page: req.query.page,
        }
    )
})
app.listen(port, ()  => console.log(`iniciando servidor en el puerto ${port}`));

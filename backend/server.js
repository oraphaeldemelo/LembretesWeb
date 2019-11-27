const express = require('express');
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use(require('./src/routes/routes'));

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000");
    
})
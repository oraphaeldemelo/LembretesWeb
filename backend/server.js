const express = require('express');
const cors = require('cors');
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//routes
app.use(require('./src/routes/routes'));

app.listen(3333, () => {
    console.log("servidor rodando na porta 3333");
    
})
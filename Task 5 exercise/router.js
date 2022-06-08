const express = require('express');

const userRouter = require('./app/Users');

const port = 3000;

const app = express();

app.use(express.json());

app.use('/user', userRouter);

const server = app.listen(port, () => {

console.log(`Server up on ${server.address().address}:${port}`);

});
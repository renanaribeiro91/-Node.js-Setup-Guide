import express from 'express';

const app = express();
app.get('/', (request, response) => response.send({ message: 'hello' }));
app.listen(3333);

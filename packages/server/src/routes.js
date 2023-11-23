import express from 'express';

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.json({ message: 'Hello' })
});

routes.get('/signin', (request, response) => {
    return response.json({ message: 'Hello sign in', data: { token: 'asdasd-343rfd-34fdfs'} })
});

export default routes;
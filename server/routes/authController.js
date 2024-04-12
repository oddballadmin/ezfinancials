import express from 'express';

const router = express.Router();

export const test = router.get('/', (req, res) => {
    res.send(JSON.stringify({ message: 'Hello World, routes are working' }));
});


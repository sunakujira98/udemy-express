const express = require('express');

const router = express.Router();

router.get('/', (req, rest, next) => {
    rest.send('<h1>Hello from express!</h1>');
});

module.exports = router;
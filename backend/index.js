const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json());

app.post('/login', (req, res) => {
    const token = jwt.sign(req.body.userName, "SecretTokenOfJwt");
    res.json({
        'status': 'Token generated successfully',
        token: token
    })
});
app.listen(3005, () => {console.log('Server is listening')});
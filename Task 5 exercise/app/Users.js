const express = require('express');

const router = express.Router(); // create a router instance

let idCounter = 3;

const users = [{id: 1, username: "fred123"}, {id: 2, username: "fred234"}];

function response(res, data, status = 200, contentType = 'application/json') {

res.contentType(contentType).status(status).send(data);

}

// register GET route

router.get('/', (req, res) => response(res, JSON.stringify(users)));

// register GET route

router.get('/:id', (req, res) => {

const id = req.params.id;

const user = users.find(user => user.id == id);

if (user) {

return response(res, JSON.stringify(user));

}

response(res, `User with id ${id} not found.`, 404, 'text/plain');

});

// register POST route

router.post('/', (req, res) => {

const username = req.body.username;

if (username) {

const newUser = {id: idCounter++, username};

users.push(newUser);

return response(res, JSON.stringify(newUser));

}

response(res, `Bad request data.`, 400, 'text/plain');

});
router.delete('/:id', (req, res) => {

    const user = users.find(user => user.id == req.params.id);
    
    const index = users.indexOf(user);
    
    if (index > -1) {
    
    users.splice(index, 1);
    
    delete user.id;
    
    return response(res, JSON.stringify(user));
    
    }
    
    response(res, `User with id ${id} not found.`, 404, 'text/plain');
    
    });
    
    module.exports = router;

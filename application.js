const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());
    var users = 
    [    
        {
            id: 1,
            username: 'Bluebird',
            email: 'bluebird2000@gmail.com',
            password: 'default111'
        },
        {
            id: 2,
            username: 'vidibon',
            email: 'vidibon2000@gmail.com',
            password: 'xttremescholar'
        }
    ];

const homeAll = app.get('/users', (req,res) => {
    res.send(users);
});

const home = app.get('/', (req,res) =>
    res.send('Hello'));

const home1 = app.get('/users/:id', (req, res) => {
    let user = users.find(u => u.id === parseInt(req.params.id));
    if(!user)
        res.status(404).send('Could not process request');
        res.status(200).send(user);
});

const home2 = app.post('/users/create', (req, res) => {
   const schema = {
       username: Joi.string().min(5).required(),
       email:Joi.required(),
       password:Joi.required()
   };
   const validateForm = Joi.validate(req.body, schema);
   if(validateForm.error) {
       res.status(400).send(validateForm.error.details[0].message);
       return;
   }
   //do something nice here
    const createUser = {
        id: users.length +1,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    };
    users.push(createUser);
    res.send(createUser);
});

const home3 = app.put('/users/update/:id', (req, res) => {
    var updateUser = users.find(u => u.id === parseInt(req.params.id));
    if(!updateUser)
    res.status(404).send('This page is unavailable');
    //
    const schema = {
        username: Joi.string().min(5).required(),
        email: Joi.string().required(),
        password: Joi.string().required()
    };
    const proceedToValidate = Joi.validate(req.body, schema);
    if(proceedToValidate.error){
        res.status(400).send(proceedToValidate.error[0].message);
        return;
    }
    updateUser.username = req.body.username;
    updateUser.email = req.body.email;
    updateUser.password = req.body.password;
    res.send(updateUser);
});

const home4 = app.delete('/users/delete/:id', (req, res) => {
    var deleteUser = users.find(u => u.id === parseInt(req.params.id));
    if(!deleteUser)
    res.status(404).send('coudl not process request, page unavailable');
    const index = users.indexOf(deleteUser);
    users.splice(index, 1);
    res.send(deleteUser);
});


const port = process.env.PORT || 3000;
if (!module.parent) {
    app.listen(port, '127.0.0.1', () => console.log(`Now listening to port ${port}`));
}


module.exports = {
    app,
};
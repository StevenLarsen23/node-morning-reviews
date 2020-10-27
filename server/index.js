//#const app = require('express')();
const express = require('express');
const users = require('../users.json');

const app = express();
const port = 4338;

app.use(express.json())

//# axis.get('/api/users?name=steven')

app.get('/api/users', (req, res) => {
    res.status(200).send(users)
})

app.get('/api/users/:id', (req, res) => {
    //# req.params.id
    const {id} = req.params;

    if(!id){
        return res.status(404).send('Unable to find resource');
    }

    const findUser = users.find(user => user.id === +id);

    if(!foundUser) {
        return res.status(500).send('Unable to find user');
    }

    res.status(200).send(foundUser);
})


// //# query - sends data without required end point
// //# axios.post('/api/users?name=steven')
// app.post('/api/users', (req, res) => {
//     const {name} = req.query
// })

// //# params - dosen't send data without required end point
// //# axios.post('/api/users/steven)
// app.post('/api/users/:name', (req, res) => {
//     const {name} = req.params
// })

// //# body
// //# axios.post('/api/users', {name: steven, age: 31, email: '', password: ''})
// app.post('/api/users', (req, res) => {
//     const {name} = req.body
// })









app.listen(port, ()=> {
    console.log(`Server running on ${port}`);
});
//#const app = require('express')();
const express = require('express');
const ctrl = require('./controller')

const app = express();
const port = 4338;

app.use(express.json())

//# axis.get('/api/users?name=steven')

app.get('/api/users', ctrl.getUsers);
app.get('/api/users/:id', ctrl.getOneUser);
app.post('/api/users', ctrl.createUser);
app.put('/api/users/:id', ctrl.updateUser);
app.delete('/api/users/:id', ctrl.deleteUser);


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
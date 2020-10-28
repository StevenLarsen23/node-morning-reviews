const users = require('../users.json');

let id = users[users.length -1].id +1

module.exports = {
    getUsers: (req, res) => {
        res.status(200).send(users)
    },
    getOneUser: (req, res) => {
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
    
    },
    createUser: (req, res) => {
        const {newUser} = req.body
        newUser.id = id,
        id++
        users.push(newUser)
        res.status(201).send(users)
    },
    updateUser: (req, res) => {
        const {updatedUser} = req.body;
        const {id} = req.params;
        const index = users.findIndex((user) => user.id === +id);
        if(index === -1){
            return res.status(400).send('User not found')
        };
        users[index] = { ...users[index], ...updatedUser};
        res.status(200).send(users);
    },
    deleteUser: (req, res) => {
        const {id} = req.params;
        const index = users.findIndex((user) => user.id === +id);
        if(index === -1){
            return res.status(400).send('User not found')
        }
        users.splice(index, 1);
        res.status(200).send(users);
    }
}
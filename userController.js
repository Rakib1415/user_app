
const users = require('./Users');
exports.getALlUsers = (req, res)=>{
    res.json(users.getAllUsers());
};
exports.getUserById = (req, res)=>{
    let {id} = req.params;
    id = parseInt(id);
    const user = users.getUserById(id);
    res.json(user);
}
exports.createUser = (req,res)=>{
    const {name, email, phone} = req.body;
    const user = users.createUserById({
        name,
        email,
        phone
    });
    res.json(user);
}

exports.updateUserById = (req, res)=>{
    let {id} = req.params;
    const {name, email, phone} = req.body;
    id = parseInt(id);
    const user = users.updateUserById(id, {
        name,
        email,
        phone
    });
    res.json(user);
}
exports.deleteUserById = (req, res)=>{
    let {id} = req.params;
    id = parseInt(id);
    const user = users.deleteUserById(id);
    res.json(user);
}
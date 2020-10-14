class Users {
    constructor(){
        this.users = [];
    }

    getAllUsers(){
        return this.users;
    }
    getUserById(id){
        return this.users.find(user => user.id === id);
    }
    createUserById(user){
        const id = this.users.length + 1;
        user.id = id;
        this.users.push(user);
        return user;
    }
    updateUserById(id, updateUser){
        const index = this.users.findIndex(user => user.id === id);
        this.users[index].name = updateUser.name || this.users[index].name;
        this.users[index].email = updateUser.email || this.users[index].email;
        this.users[index].phone = updateUser.phone || this.users[index].phone;
        return this.users[index];
    }
    deleteUserById(id){
        const index = this.users.findIndex(user => user.id === id);
        const deleteUser = this.users[index];
        this.users = this.users.filter(user => user.id !== id);
        return deleteUser;
    }
}
module.exports = new Users();
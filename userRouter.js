const router = require('express').Router();
const {
    getALlUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById
} = require('./userController');

router.get('/',getALlUsers);
router.get('/:id',getUserById);
router.post('/',createUser);
router.put('/:id', updateUserById)
router.delete('/:id', deleteUserById);

module.exports = router;
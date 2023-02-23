const userController = require('../controllers/userController.js')


const router = require('express').Router()

router.post('/', userController.createUser)

router.get('/', userController.getAllUsers)

router.get('/:id', userController.getUniqueUser)

router.put('/:id', userController.updateUser)

router.delete('/:id', userController.deleteUser)

router.delete('/disable/:id', userController.disableUser)

module.exports = router

const db = require('../models')

const User = db.User

const createUser = async (req, res) => {
    let info = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
    }

    const user = await User.create(info)
    res.status(200).send(user)
}

//GET ALL USERS

const getAllUsers = async (req, res) => {
    let user = await User.findAll({
        attributes: [
            'firstName',
            'lastName',
            'email',
            'phone',
        ],
        where: {
            isActive: true
        }
    })
    res.status(200).send(user)
}

//GET USER

const getUniqueUser = async (req, res) => {
    let id = req.params.id
    let user = await User.findOne({ where: { id: id, isActive: true } })
    res.status(200).send(user)
}


//UPDATE USER

const updateUser = async (req, res) => {
    let id = req.params.id

    let user = await User.findOne({ where: { id: id } })
    if (user == null || user == undefined) {
        res.status(400).send("User not found.");
    }

    user = await User.update(req.body, { where: { id: id } })
    res.status(200).send("User updated!")
}

//DELETE USER

const deleteUser = async (req, res) => {
    let id = req.params.id
    await User.destroy({ where: { id: id } })
    res.status(200).send('User Deleted')
}

const disableUser = async (req, res) => {
    let id = req.params.id

    let user = await User.findOne({ where: { id: id } })
    if (user == null || user == undefined) {
        res.status(400).send("User not found.");
    }

    user = await User.update({ isActive: false }, { where: { id: id } })
    res.status(200).send('User Deleted')
}

module.exports = {
    createUser,
    getAllUsers,
    getUniqueUser,
    updateUser,
    deleteUser,
    disableUser
}
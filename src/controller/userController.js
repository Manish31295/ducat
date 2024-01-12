const User = require('../model/userModel')

const createUser = async (req, res) => {
    try{
        const userInfo = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
        })
        condsole.log('userInfo=======', userInfo)
        res.status(200).json({ success: true, message: 'Created Successfully'})

    }catch(error) {
        res.status(500).json({ success: false, message: 'Server Error', error: error})
    }

}

const getAllUser = async (req, res) => {
    try{
        res.status(200).json({ success: true, message: 'Get All User Information'})
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error', error: error})
    }

}

module.exports = {
    createUser,
    getAllUser
};
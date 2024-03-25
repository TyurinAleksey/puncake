const bcrypt = require("bcryptjs")
const User = require ('../model/user.js')

module.exports.login = function(req, res) {
    res.status(200).json({
        login: {
            email: req.body.email,
            password: req.body.password,
        }
    })
}

// module.exports.register = function(req, res) {
//     const user = new User({
//         email: req.body.email,
//         password: req.body.password,
//     })
//     user.save().then(() => console.log ('User created'))
// }

module.exports.register = async (req, res) => {
    const candidate = await User.findOne({email: req.body.email})

    if (candidate) {
        res.status(409).json({
            message: "Email уже занят!"
        })
    } else {
        const salt = bcrypt.genSaltSync(10)
        const password = req.body.password
        const user = new User({
            email: req.body.email,
            password: bcrypt.hashSync(password, salt)
        })
        try {
            await user.save()
            res.status(201).json(user)
        } 
        catch(e) {

        }
    }
}
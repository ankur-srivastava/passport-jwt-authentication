const jwt = require('jwt-simple')
const passportuser = require('../models/passportusers')
require('dotenv').config()

function login(req, res) {
    passportuser.findOne({email: req.body.email}, (err, user) => {
        if(err) {
            console.error('Error when fetching user')
            res.json({
                error: err
            })
        } else {
            const payload = {
                id: user.id,
                expire: Date.now() + 1000 * 60 * 60 * 24 * 7, //7 days
            }
            const token = jwt.encode(payload, process.env.jwtSecret)
            res.json({
                token
            })
        }
    })
}

function register(req, res) {
    passportuser.register(
        new passportuser({username: req.body.username, email: req.body.email}),
        req.body.password, (err, user) => {
            if(err) {
                console.error('Error when fetching user')
                res.json({
                    error: err
                })
            } else {
                res.json({
                    message: 'User Created'
                })
            }
        }
        )
}

module.exports = {login, register}

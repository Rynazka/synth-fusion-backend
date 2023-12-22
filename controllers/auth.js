const query = require("../database")
async function register(req, res, next) {
    try {
        console.log(req.body)
        res.send(req.body)
    }catch(err){
        next(err)
    }
}


async function login(req, res, next) {
    try {
       
    }catch(err){
        next(err)
    }
}

module.exports = {
register,
login
}
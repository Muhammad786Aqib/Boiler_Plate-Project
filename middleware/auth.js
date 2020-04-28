const { User } = require('../models/User');

let auth = (req, res, next) => {

    
    let authHeader = req.header('Authorization');
    let token = authHeader.split(' ')[1];
    
    
    User.findByToken(token, (err, user) => {
        //if(err) throw err;
        if(!user) return res.json({ isAuth: false, error: err })

        req.token = token; 
        req.user = user;
        next(); 
    });

    
}

module.exports = { auth };
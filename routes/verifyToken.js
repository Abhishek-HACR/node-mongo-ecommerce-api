const jwt = require("jsonwebtoken");

const verifyToken = (req,res,next)=>{
    const authHeaders = req.Headers.token
    
    if(authHeaders){
        const token = authHeaders.split(" ")[1]
        jwt.verify(token,process.env.JWT_SEC , (err,user)=>{
            if(err) res.send(403).json("Token is not valid!");
            req.user = user;
            next();
        });
    }else{
        return res.send(401).json("you are not loggedIn!");
    }
};

const verifyTokenAndAuthorization = (req,res,next)=>{
    const verifyToken = (req,res,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }else{
            res.send(403).json("You are not allowed to do that!");
        }
    });
};

module.exports = {verifyToken , verifyTokenAndAuthorization};
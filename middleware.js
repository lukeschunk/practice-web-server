//here we're going to use module exports to expose middleware

var middleware = {
    requireAuthentication: function(req, res, next) {
        console.log("private route hit");
        next();
    },
    logger: function(req, res, next) {
        console.log('request:' + req.method);
        next();
    }
    
};

module.exports = middleware;
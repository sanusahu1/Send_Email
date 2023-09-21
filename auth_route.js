const { send_email } = require('../config/sendEmail');


module.exports = {
    configure: function (app, mongo, ObjectId, url, assert, dbb) {

        var auth_component = require('../components/auth_component')(mongo,ObjectId,url,assert,dbb);
        
        app.post('/login', function (req, res) {
            try {
                if (req.body.hasOwnProperty("email")  && req.body.hasOwnProperty("password")) {

                    auth_component.login(req.body.email, req.body.password, function (result, error, message) {
                        if (error) {
                            res.json({ status: false, message: message });
                        }
                        else {

                            send_email(req.body.email);
                            res.json({ status: true, message: message, result: result });

                        }
                    })

                }
                else {
                    if (req.body.hasOwnProperty("email") == false) {
                        res.json({ status: false, message: "email parameter is missing" });
                    } else if (req.body.hasOwnProperty("password") == false) {
                        res.json({ status: false, message: "Enter Your Password" });
                    }
                }
            } catch (er) {
                console.log("error occures: " + er);
                res.json({ status: false, message: "failed at try block...!" });
            }
        });

    }
}





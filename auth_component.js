module.exports = function (mongo, ObjectId, url, assert, dbb) {
    var auth_component = {

        login: function (email, password, callback) {
            try {
                let exist = false
                mongo.connect(url, { useNewUrlParser: true }, function (err, db) {
                    assert.equal(null, err);
                    var cursor = db.db().collection(examle.USERS).find({ 'email': email });
                    cursor.forEach(function (doc, err) {
                        if (err) {
                            callback(null, true, "Some Error Occured");
                            db.close();
                        }
                        else {
                            if (doc.password === password) {
                                exist = true;
                                value = doc;
                            }
                        }

                    }, function () {
                        if (exist) {
                            callback(value, false, "Login Successful");
                        }
                        else {
                            callback(null, true, "Invalid Credential");
                        }
                        db.close();
                    })
                })

            }
            catch (error) {
                callback(null, true, error);
            }
        },
    }
    return auth_component;
}
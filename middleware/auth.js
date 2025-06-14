const db = require('../config/db');

exports.log = (req, res, next) => {
    const { email, password } = req.body;
    const sql = 'SELECT * FROM user WHERE email=? AND password=?';
    db.query(sql, [email, password], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            next();
        } else {
            res.redirect('/login')
            window.alert('Login Failed');
        }
    })
};

exports.register = (req, res, next) => {
    const { email, password } = req.body;
    const sql = 'INSERT INTO user (email, password) VALUES (?, ?)';
    db.query(sql, [email, password], (err, results) => {
        if (err) throw err;
        if (results.affectedRows > 0) {
            return res.redirect('/');
        } else {
            res.redirect('/register');
            window.alert('Registration Failed');
        }
    });
};
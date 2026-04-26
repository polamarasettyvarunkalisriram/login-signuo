const db = require('../config/db');

const finduser = (email, callback) => {
    const sql = 'SELECT * FROM users WHERE email=?';
    db.query(sql, [email], callback);
};

const createuser = (userdata, callback) => {
    const { name, email, password, isverified, phonenumber } = userdata;

    const sql = `
        INSERT INTO users (name, email, password, isverified, phonenumber)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(sql, [name, email, password, isverified, phonenumber], callback);
};

module.exports = { finduser, createuser };
const db = require('./index.js');
module.exports = {
    readAll: (callback) => {
        db.query("SELECT * FROM tennis;", (err, result) => {
            if (err) {
                callback(err);
            } else {
                callback(null, result);
            }
        });
    },
    // obj = {name: "ting", amount: 1234};
    addItem: ({name, amount}, callback) => {
        // you can pass in name instead of obj.name
        db.query(`INSERT INTO tennis (item_name, amount) VALUES ('${name}', ${amount});`, (err) => {
            if (err) {
                callback(err);
            } else {
                callback(null);
            }
        });
    }
};
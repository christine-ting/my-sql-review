const db = require('./index.js');
const data = [
    {
        name: 'ting',
        amount: 10
    },
    {
        name: 'tiffany',
        amount: 80
    },
    {
        name: 'winnie',
        amount: 120
    },
    {
        name: 'mike',
        amount: 50
    },
    {
        name: 'jeff',
        amount: 100
    },
];

data.forEach(({name, amount}) => {
    db.query(`INSERT INTO tennis (item_name, amount) VALUES ("${name}", ${amount});`);
});
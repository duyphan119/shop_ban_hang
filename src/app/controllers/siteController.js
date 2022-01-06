
class siteController {
    welcome(req, res, next) {
        const mysql = require('mysql');
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'password',
            database: 'shop_ban_hang'
        });

        connection.connect();

        connection.query('SELECT * from account', function (error, results, fields) {
            if (error) throw error;
            console.log('Connect');
        });

        connection.end();
        res.json({
            message: "Chào chủ tịch Duy Phan"
        });
    }
}
module.exports = new siteController();
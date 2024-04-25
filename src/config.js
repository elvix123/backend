require('dotenv').config();

module.exports = {
    app: {
        port: process.env.PORT || 3306,
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        password: process.MYSQL_PASSWORD || '',
        database: process.env.MYSQL_DB || 'ejemplo'
    }

}
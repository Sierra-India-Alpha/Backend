module.exports = {
    dialect : 'mysql',
    host: process.env.MYSQLHOST,
    database: process.env.MYSQLDATABASE,
    port: process.env.MYSQLPORT,
    username: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    define: {
        timestamps: true,
        underscored: true,
    }
}
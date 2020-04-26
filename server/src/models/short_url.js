const Sequelize = require("sequelize")

module.exports = (sequelize, type) => {
    return sequelize.define("ShortUrl", {
        id: {
            type: Sequelize.INTEGER(),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        long_url: Sequelize.STRING(1024),
        short_url: Sequelize.STRING(255)
    }, {
        tableName: 'ShortUrl'
    })
}
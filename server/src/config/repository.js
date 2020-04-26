const Sequelize = require("sequelize")

const ShortUrlModel = require("../models/short_url")

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
})

const ShortUrl = ShortUrlModel(sequelize, Sequelize)

sequelize.sync({ force: true })
    .then(() => {
        console.log(`Database & tables created!`)
    })

module.exports = {
    sequelize,
    ShortUrl
};
global.sequelize = sequelize;
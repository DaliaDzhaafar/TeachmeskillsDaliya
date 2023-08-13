const allurewriter = require('@shelex/cypress-allure-plugin/writer')

module.exports = (on, config) =>{
    allurewriter(on,config);
    return config
}
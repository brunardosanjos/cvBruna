var pessoa = require('./pessoa.json')
var skills = require('./skills.json')
var education = require('./education.json')
var experiences = require('./experiences.json')
var idiomas = require('./idiomas.json')



module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index', { pessoa, skills, education, experiences, idiomas })
    })
}

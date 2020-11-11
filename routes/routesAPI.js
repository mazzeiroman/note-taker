
var dbJSON = require("../db/db.json");

module.exports = function(app) {
    
    app.get('/api/notes', function(req, res) {
        res.json(dbJSON);
    })
    app.post('/api/notes', function(req, res) {
        dbJSON.push(req.body);
        res.json(true);
    })
    app.delete('/api/notes/:id', function(req, res){
        const id = req.params.id;
        dbJSON.splice(id, 1);
        res.json(dbJSON);   
    })
};
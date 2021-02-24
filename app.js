var app = require('./config/server')

var port = 5000

app.listen(port, function(){
    console.log('Servidor on na porta: '+ port);
})

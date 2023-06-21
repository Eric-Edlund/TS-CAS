const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 5000;                  //Save the port number where your server will be listening

app.use(express.static(__dirname + "/public"));

//Idiomatic expression in express to route and respond to a client request
app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('public/index.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});

app.get('/integrator', (req, res) => {
    res.sendFile('public/integrator.html', {root: __dirname})
})

app.get('/input_parse_test_page', (req, res) => {
    res.sendFile('public/input_parse_test_page.html', {root: __dirname})
})

app.get('/solver', (req, res) => {
    res.sendFile('public/solver.html', {root: __dirname})
})

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});


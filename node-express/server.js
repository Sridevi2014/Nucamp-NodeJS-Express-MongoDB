const express = require('express');
//The Morgan middleware library is used for logging
const morgan = require('morgan');
const bodyParser = require('body-parser');
const campsiteRouter = require('./routes/campsiteRouter'); 
const promotionRouter = require('./routes/promotionRouter');
const partnerRouter = require('./routes/partnerRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

//if user going to campsites, its going display all campsite details
app.use('/campsites', campsiteRouter);
//if user going to promotions, its going display all promotion details
app.use('/promotions', promotionRouter);
//if user going to partners, its going display all partner details
app.use('/partners', partnerRouter);


app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
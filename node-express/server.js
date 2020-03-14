const express = require('express'); // imported express
//The Morgan middleware library is used for logging
const morgan = require('morgan');
const bodyParser = require('body-parser');
const campsiteRouter = require('./routes/campsiteRouter'); //importe
const promotionRouter = require('./routes/promotionRouter');
const partnerRouter = require('./routes/partnerRouter');

const hostname = 'localhost'; //we created server instance
const port = 3000;

const app = express();// calling express function / using middlewar
app.use(morgan('dev'));
app.use(bodyParser.json());

//if user requests campsites url, campsiteRouter going to display all campsite details
app.use('/campsites', campsiteRouter);
//if user requests promotions url, promotionsRouter going to promotions all promotion details
app.use('/promotions', promotionRouter);
//if user requests partners url, partnerRouter going to display all partner details
app.use('/partners', partnerRouter);

app.use(express.static(__dirname + '/public')); //grab static files from public dir

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
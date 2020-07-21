const apiRoutes = require('./routes/apiRoutes/animalRoutes');
const htmlRoutes = require('./routes/htmlRoutes/index');

const express = require('express');
const app = express();
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.use(express.static('public'));

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});
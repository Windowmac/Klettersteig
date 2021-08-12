const express = require('express');
const router = require('./routes');
const sequalize = require('./db/connection');
const exphbs = require('express-handlebars');
const { urlencoded } = require('express');
const hbs = exphbs.create({});
const axios = require('axios');
const path = require('path');

const PORT = process.env.PORT || 3030;
const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + '/public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(router);

sequalize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('listening on: ', PORT));
});


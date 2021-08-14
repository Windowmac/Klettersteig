const express = require('express');
const router = require('./routes');
const sequelize = require('./db/connection');
const exphbs = require('express-handlebars');
const { urlencoded } = require('express');
const hbs = exphbs.create({});
const path = require('path');
const PORT = process.env.PORT || 3030;
const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + '/public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(router);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('listening on: ', PORT));
});


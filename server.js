const express = require('express');
const router = require('./routes');
const sequelize = require('./db/connection');
const exphbs = require('express-handlebars');
const { urlencoded } = require('express');
const hbs = exphbs.create({});
const path = require('path');
const PORT = process.env.PORT || 3030;
const app = express();
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: process.env.SECRET,
  cookie: {
    maxAge: 900000,
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + '/public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(session(sess));

app.use(router);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('listening on: ', PORT));
});


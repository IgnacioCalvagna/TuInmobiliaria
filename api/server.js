const express = require('express');
const http = require('http');
const { User } = require('./models');
const cors = require('cors');

const app = express();

const db = require('./db');

const bodyParser = require('body-parser');
const routes = require('./routes');
const morgan = require('morgan');
const nodemailer = require('nodemailer');
const cookieParser = require('cookie-parser');
const sessions = require('express-session');
const passport = require('passport');
const { findByPlaceholderText } = require('@testing-library/react');
const localStrategy = require('passport-local').Strategy;

app.use(cors()),
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('tiny'));

app.use(cookieParser());

app.use(
  sessions({
    secret: 'tuinmueble',
    resave: true,
    saveUninitialized: true,
    cookie: { _expires: 60000000000000 },
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new localStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },

    function (email, password, done) {
      User.findOne({ where: { email } })
        .then(user => {
          if (!user) {
            return done(null, false);
          }

          user.setHash(password, user.salt).then(hash => {
            if (hash !== user.password) {
              return done(null, false);
            }

            return done(null, user);
          });
        })
        .catch(done);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findByPk(id)
    .then(user => {
      done(null, user);
    })
    .catch(done);
});

app.use(function (err, req, res, next) {
  console.error(err);
  res.status(500).send(err);
});

app.use('/api', routes);

const port = 3001;
db.sync({ force: false }).then(() => {
  app.listen(port, function () {
    console.log(`Listening on port http://localhost:${port}`);
  });
});


// import passport from 'koa-passport';
// import User_modle from './models/user';
// // import LocalStrategy from 'passport-local'

// passport.serializeUser(function (user, done) {
//   done(null, user.id)
// })

// passport.deserializeUser(function (id, done) {
//   done(null, user)
// })

// var LocalStrategy = require('passport-local').Strategy
// passport.use(new LocalStrategy({
//   usernameField: 'user_email',
//   passwordField: 'password',
// }, function (username, password, done) {
//   // retrieve user ...
//   if (username === 'test' && password === 'test') {
//     done(null, user)
//   } else {
//     done(null, false)
//   }
// }))

// passport.use(new LocalStrategy({
//    usernameField: 'user_email',
//    passwordField: 'password',
//  },
//   function (username, password, done) {
//     User_modle.findOne({ username: username, password: password }, done);
//   }
// ));


// passport.serializeUser(function (user, done) {
//   done(null, user._id)
// })

// passport.deserializeUser(function (id, done) {
//   User_modle.findById(id, done);
// })


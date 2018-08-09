
import { Strategy as LocalStrategy } from 'passport-local';
import User_modal from './models/user';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

// const pass = (passport) => {
//   passport.use(new LocalStrategy(
//     function (username, password, done) {
//       let query = { user_email: username };
//       User_modal.findOne(query, function (err, user) {
//         if (err) { return done(err); }
//         if (!user) { return done(null, false, { message: 'No user found' }); }
//         if (user.password != password) { return done(null, false); }
//         return done(null, user);
//       });
//     }));

//   passport.serializeUser(function (user, done) {
//     done(null, user.id);
//   });

//   passport.deserializeUser(function (id, done) {
//     User_modal.findById(id, function (err, user) {
//       if (err) { return done(err); }
//       done(null, user);
//     });
//   });
// }

const pass_jwt = (passport) => {
  let opts = {}
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = 'secret';
  // opts.issuer = 'accounts.examplesoft.com';
  // opts.audience = 'yoursite.net';
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    console.log('auth jwt-payload: ',jwt_payload);
    User_modal.findOne({ user_email: jwt_payload.user.user_email }, function (err, user) {

      if (err) {
        return done(err, false);
      }
      if (user) {
        console.log('work')
        return done(null, user);
      } else {
        return done(null, false);
        // or you could create a new account
      }
    });
  }));
}
export default pass_jwt;

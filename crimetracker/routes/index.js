var express = require('express');
var router = express.Router();

module.exports = function(passport){
  
  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });
  
  router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));
  
  router.get('/auth/google/callback',
  passport.authenticate('google', {failureRedirect:'/login', failureFlash: true}),
  (req, res) => {
    console.log(req.user.token);
    req.session.token = req.user.token;        
    req.session.user = req.user.profile.displayName;
    
    return res.redirect('http://localhost:4200/map/' + req.user.profile.id);
  }
);

router.get('/logout', (req, res) => {
  req.logout();
  req.session = null;
  res.redirect('/');
});

function isLoggedIn(req, res, next) {
  console.log(req.isAuthenticated());
  // if user is authenticated in the session, carry on
  if (req.session.token)
  {
    return next();
  }  
  // if they aren't redirect them to the home page
  res.redirect('/');
}

return router;

}
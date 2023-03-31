const express = require('express');

const router = express.Router()
const passport= require('passport');
const session = require('express-session');
const googleController = require('../../controllers/google/googlePassportController')
const app=express

app.use(passport.initialize());
app.use(session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false
  }));
  
  
  

router.get('/google', googleController);

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }),(req, res)=> {


  res.status(200).json({message: 'Success',user:{id:req.user.id,name:req.user.name,email:req.user.email}})
   
 })


module.exports = router
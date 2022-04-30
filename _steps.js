/**
 * ----------------------
 * Server Site
 * ----------------------
 * 1) 1st jwt website/github go and install server-site ($ npm install jsonwebtoken).
 * 2) 2nd jwt require copy and past server-site(const jwt = require('jsonwebtoken');)
 * 
 * 3) create a secret key server site cmd open and type (1.node 2.require('crypto').randomBytes(64).toString('hex') and its sentence past and get a random token.)
 * 
 * 4) index.js  for create a post api and async function.And create a (jwt.sign)...ex1!(const token = jwt.sign({ foo: 'bar' }, 'shhhhh');)..jwt.sign(user,secret key for .env)mean which information i will put? and go .env and write a capital letter word (ACCESS_TOKEN_SECRET=and put a secret key), and i if a option for token expire time ..{expiresIn: '1d'} and send a  accessToken  for object value.for exp...res.send({ accessToken });
 * 
 * accessToken full example..
 * 
 * exp2..!(const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1d'});)
 * 
 * ------------------
 * Client site
 * ------------------
*/
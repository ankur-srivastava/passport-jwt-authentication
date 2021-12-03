const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const localStrategy = require('passport-local')
const passportuser = require('./src/models/passportusers')

const authRoute = require('./src/routes/authRoute')
const postRoute = require('./src/routes/postRoute')
const auth = require('./src/middleware/auth')()

const app = express()

// For parsing application/json
app.use(express.json())
  
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.use(auth.initialize())

// Routers
app.use('/api/auth', authRoute)
app.use('/api/post', postRoute)

const dbUrl = `mongodb+srv://admin:${process.env.DB_PASS}@cluster0.gavbp.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('DB Connected');
}).catch((error)=>{
    console.error('DB Connection Error ', error);
});

// passport
passport.use(new localStrategy(passportuser.authenticate()))
app.use(passport.initialize())
app.use(passport.session())
passport.serializeUser(passportuser.serializeUser())
passport.deserializeUser(passportuser.deserializeUser)

app.listen(3001, () => {
    console.log('Server Started')
});

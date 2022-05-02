/**
    * @description      : 
    * @author           : mario
    * @group            : 
    * @created          : 02/05/2022 - 02:28:48
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 02/05/2022
    * - Author          : mario
    * - Modification    : 
**/

const express = require('express')
require('dotenv').config()

const env = process.env

const app = express()
const PORT = 3001 || env.PORT

app.get('/login', (req, res) => {
    res.redirect(`${env.SF_LOGIN_URL}/services/oauth2/authorize?response_type=code&client_id=${env.CONSUMER_KEY}&redirect_uri=${env.SF_REDIRECT_URI}`)
})

app.get('/oauth2/callback', (req, res) => {
    res.send(req.query.code)
})

app.listen(PORT, () => {
    console.log(`Running at http://localhost:${PORT}`)
})

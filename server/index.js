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
const jsForce = require('jsforce')
require('dotenv').config()

const env = process.env

const app = express()
const PORT = 3002 || env.PORT

// const conn = new jsForce.Connection({
//     loginUrl:env.SF_LOGIN_URL
// })

// conn.login(env.SF_USERNAME, env.SF_PASSWORD+"aPrxaPAl8OC6v.JbJVzB4CqGqtfG2Vbdi.lpLz6.m4REGb9mAZrmZQziX1bm0NrtGZt.kC3skA==", (err, userInfo) => {
//     if(err) {
//         console.log(err)
//     } else {
//         console.log(userInfo.id)
//         console.log(userInfo.organizationId)
//     }
// })

(async () => {
    let conn = new jsForce.Connection({
        loginUrl: env.SF_LOGIN_URL
    });
    try {
        await conn.login(env.SF_USERNAME, env.SF_PASSWORD, (err, userInfo) => {
            if(err) console.log(err)
            else console.log(userInfo)
        });
        console.log('Connected to Salesforce!');
        let soql = `select id, name,
            (SELECT Id, FirstName, LastName, Email_Verified__c, Enrollment_Status__c from Contacts)
            FROM Account`;
        let accounts = await conn.query(soql);
        console.log(accounts)
        await conn.logout();
    } catch (err) {
        console.error(err);
    }
})()

app.get('/login', (req, res) => {
    // res.redirect(`${env.SF_LOGIN_URL}/services/oauth2/authorize?response_type=code&client_id=${env.CONSUMER_KEY}&redirect_uri=${env.SF_REDIRECT_URI}`)
    (async () => {
        let conn = new jsForce.Connection({
            loginUrl: env.SF_LOGIN_URL
        });
        try {
            await conn.login(env.SF_USERNAME, env.SF_PASSWORD+env.SF_TOKEN, (err, userInfo) => {
                if(err) console.log(err)
                else console.log(userInfo)
            });
            console.log('Connected to Salesforce!');
            let soql = `SELECT Id, OpenApiVerson__c FROM swagger__mdt`;
            let accounts = await conn.query(soql);
            console.log(accounts)
            await conn.logout();
        } catch (err) {
            console.error(err);
        }
    })()
})

app.get('/oauth2/callback', (req, res) => {
    // res.redirect(`https://www.google.com/search?q=${req.query.code}`)
    // res.send(req.query.code);
    console.log('req.query.code')
    console.log(req.query.code)
    res.sendFile(`C:/Projects/Electron/electron/src/index.html`)
})

app.listen(PORT, () => {
    console.log(`Running at http://localhost:${PORT}`)
})
// @6991oiraM
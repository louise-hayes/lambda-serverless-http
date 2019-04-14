const express = require('express')
const sls = require('serverless-http')
const app = express()

app.get('/', async (req, res, next) => {

  res.status(200).send('Hello World!')

  let response = await funcx();

})
module.exports.server = sls(app);

// app.listen(port,yada) 
// nothing listening - event handler instead of a permanent listener
// serverless - app only running when it is used
// see handler in serverless.yml file

// you map an event source to lambda function

// resource event
// event source
// configure event source mapping
// aws poll based services

// dynamo db table updated triggers lambda function

// dynamodb streams record event
// lambda polling dynamodb streams for records 4 x second then invokes function

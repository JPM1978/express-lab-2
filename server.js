const express = require('express');
const port = 3000;
const app = express();

let bottles = 99;

app.get('/', (request, response) => {
  response.send('98 bottles of beer on the wall')
})


app.get('/greeting/:name', (request, response) => {
    response.send(`Hello ${request.params.name}`)
})


app.get('/:number', (request, response) => {
  let num = request.params.number

  response.send(
    `${num} bottles of beer on the wall! <br><br> <a href="http://localhost:${port}/${
      num - 1
    }">Take 1 Down!</a>`
  )
})


app.listen(port, () => {
  console.log(`Live on port: ${port}`)
}) 
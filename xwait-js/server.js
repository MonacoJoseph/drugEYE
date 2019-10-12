const express = require('express');
const app = express();
const port = 3000;
var counter = 0;

const increment = () => {
    return counter++;
}




app.get('/', function (req, res, next) {
    res.send(200);
    if(counter >= 10){
        res.send(400);
    }   
  })

  app.post('/', function (req, res) {
    console.log(increment());
    if(counter >= 10){
        res.send(400);
    }

    res.send('Got a POST request')
  })

  


app.listen(port, () => console.log(`Example app listening on http://localhost:${port}`));
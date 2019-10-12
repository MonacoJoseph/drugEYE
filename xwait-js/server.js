const express = require('express');
const app = express();
const port = 3000;
var counter = 0;

const increment = () => {
    return counter++;
}

const decrement = () =>{
  return counter--;
}





app.get('/', function (req, res, next) {
    console.log('increment');
    res.send(`${counter}`)
  })

  app.post('/', function (req, res) {
    console.log(increment());
    res.send(`${counter}`)
  })




  


app.listen(port, () => console.log(`Example app listening on http://localhost:${port}`));
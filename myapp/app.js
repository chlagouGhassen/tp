const express = require('express')
const app = express();
const port = 3000;
app.get('/',(req,res)=>{
    res.send('hello');
    

});
app.get('/date',(req,res)=>{
 const date =new Date();
 const formattedDate=date.toLocaleString();

  res.send(`<h1>La date et 'heure actueles sont:${formattedDate}<h1>`);
});
app.listen(port,()=> {
    console.log(`application sur le port ${port}`);

});
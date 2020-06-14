var express = require('express');

var app = express();

app.get('/',
  (req,res)=> {
    res.send('Hello there');
});

app.get('/homepage',
  (req,res)=> {
    var user = {
      name:'Nick',
      lastname:'Lukic'
    }

    user.forEach(element => { //ovo mi ne radi. How to print something in express in the console
      console.log(element)
    });
    
    res.send('Hello World!'); //ne mogu da odstampam u korisnickoj konzoli, samo u serverskoj
    
});

app.get('/loop',
  (req,res)=> {
    var a = [];
      for (var i = 0; i <= 1000;i++){
        if(i%2 == 0){
          a.push(i);
        }
    }
    res.send(a);
});


app.listen(3000, 
  ()=> {
    console.log('Server started on port 3000.');
  });


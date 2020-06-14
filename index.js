var express = require('express');
const path = require('path');

var app = express();

app.get('/',
  (req,res)=> {
    res.send('Hello there');
});

// app.get('/homepage',
//   (req,res)=> {
//     var user = {
//       name:'Nick',
//       lastname:'Lukic'
//     }

//     user.forEach(element => { //ovo mi ne radi. How to print something in express in the console
//       console.log(element)
//     });
    
//     res.send('Hello World!'); //ne mogu da odstampam u korisnickoj konzoli, samo u serverskoj
    
// });

app.get('/homepage',(req,res)=>{
  res.sendFile(path.join(__dirname,'homepage.html'))
})

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

app.get('/fizzbuzz',
  (req,res)=> {
    var fizzbuzz = [];
      for (var i = 1; i <= 100; i++){
        if(i%3 == 0){
          fizzbuzz.push('fizz');
        } else if(i%5 == 0){
          fizzbuzz.push('buzz')
        } else {
          fizzbuzz.push(i)
        }
    }
    res.send(fizzbuzz);
});


app.listen(3000, 
  ()=> {
    console.log('Server started on port 3000.');
  });


const express = require('express');

const morgan = require('morgan');

const port = 3000;

const app = express();

app.use(morgan('dev'));

//app.get('/', (req, res) => {
   

//res.send('Hello world');

//});
//app.get("http://www.google.com"); {
   

    
    
  //  };
    //app.get("http://www.nba.com"); {
   

    
    
    //};
    app.get("./test.html"); {
   

    
    
    };
    app.get("./test2.html"); {
   

    
    
    };
    app.get("./test3.html"); {
   

    
    
    };


const server = app.listen(port, () => {

console.log(`Server up on ${server.address().address}:${port}`);

});
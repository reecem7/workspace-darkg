//main entry point for app
//dotenv needs to be loaded before the watson services
// require('dotenv').config({silent: true});
    require('runme.js');
    const express = require('express');
    const path = require('path');
    const app = express();
    //map for static files loaded in HTML
    app.use(express.static(__dirname));

    app.get('/',function(req,res){
      // console.log(req.originalUrl); // '/'

      // res.sendFile(path.join(__dirname + '/ui/index.html'));
      res.sendFile(path.join(__dirname + '/workspace.html'));

      //__dirname : It will resolve to your project folder.
    });

    // app.use(express.static(__dirname + '/ui/'));
    //
    //   app.get('/',function(req,res){
    //     // console.log(req.originalUrl); // '/'
    //
    //     res.sendFile(path.join(__dirname + '/ui/index.html'));

    // const PORT = 3000;
    // app.listen(PORT);
    // console.log("Running at Port 3000");
    var port = 3030;
    app.listen(port, function() {
      // eslint-disable-next-line
      console.log('Server running on port: %d', port);
    });

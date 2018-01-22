var express = require('express');
var router = express.Router();

const testFolder = './videos/';
const fs = require('fs');

const arr = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
      arr.push(file);
    });
    fs.writeFile("studentidlist.txt",arr, function(err){
      if(err) {
        console.log(err);
        
      }
      
      console.log("file was saved");
      
    });
    console.log(arr);
  })
  res.render('index', { title: 'Express' });

});

module.exports = router;

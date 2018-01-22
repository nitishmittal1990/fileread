var express = require('express');
var router = express.Router();
const fs = require('fs');
var recursive = require("recursive-readdir");
// const testFolder = './videos/';

const arr = [];
const testFolder = "./videos";
/* GET home page. */
router.get('/', function(req, res, next) {
  recursive(testFolder, function (err, files) {
    // `files` is an array of absolute file paths 
    console.log(files);
    files.forEach(file => {
      console.log(file.split("/").pop());
      arr.push(file.split("/").pop());
    });
    
    var file = fs.createWriteStream('array.txt');
    file.on('error', function (err) { /* error handling */ });
    arr.forEach(function (v) { file.write(v + '\n'); });
    file.end();
    arr.length = 0;
  });
  
  res.render('index', { title: 'Express' });

});

module.exports = router;

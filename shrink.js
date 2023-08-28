var fs = require('fs')
  , gm = require('gm');

// resize and remove EXIF profile data
gm('pexels-anastasiya-lobanovskaya-1035683.jpg')
.resize(240, 240)
.noProfile()
.write('pexels-anastasiya-lobanovskaya-1035683_240_240.jpeg', function (err) {
  if (!err) console.log('done');
});

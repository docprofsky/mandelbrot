var element, canvas, width, height;

// init canvas
element = document.getElementById("mainCanvas");
canvas = element.getContext('2d');
width = element.width;
height = element.height;


var p=canvas.createImageData(width, height);

var historray = Array.apply(null, Array(1000)).map(Number.prototype.valueOf,0);

for(var Px = 0; Px < width; Px++){
    for(var Py = 0; Py < width; Py++){
    var x0 = (Px / width) * 3.5 - 2.5;
    var y0 = (Py / height) * 2 - 1;
    var x = 0.0;
    var y = 0.0;
    var iteration = 0;
    var maxIteration = 1000;
    while (x*x + y*y < 2*2 && iteration < maxIteration){
        var xtemp = x*x - y*y + x0;
      y = 2*x*y + y0;
      x = xtemp;
      iteration++;
    }
    historray[iteration]++;
    //console.log(iteration);
    var scale = 1.5;
    var gamma = 2.2;
    var red = Math.pow(iteration, gamma) * scale;
    var green = Math.pow(iteration-23, gamma) * scale;
    var blue = Math.pow(iteration-46, gamma) * scale;
    var pix = (Py*width+Px)*4;
    p.data[pix+0]=red;
    p.data[pix+1]=green;
    p.data[pix+2]=blue;
    p.data[pix+3]=255;
  }
}
canvas.putImageData(p,0,0);
console.log("Done");
console.log(historray);
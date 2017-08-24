
canvasSetup = document.getElementById("myCanvas");
ctx = canvasSetup.getContext("2d");
code = document.getElementById("coordenates");
code840 = document.getElementById("coordenates840");
code640 = document.getElementById("coordenates640");
myImage = new Image();
axisX = 0;
axisY = 0;
axisX2 = 0;
axisY2 = 0;
clicks = 2;


function storeAxes(event) {
    var left, top, width, height;
    var left840, top840, width840, height840;
    var left640, top640, width640, height640;
    var x = event.offsetX;
    var y = event.offsetY;
    axisX = x;
    axisY = y;

    if(clicks == 0){
      clicks = 2;
    }
    clicks--;
    console.log(clicks);

    if (clicks == 1){
      axisX2 = axisX;
      axisY2 = axisY;
    } else if (clicks == 0) {
      left = axisX2;
      top = axisY2;
      width = axisX - axisX2;
      height = axisY - axisY2;
      console.log("--"+clicks +": ("+left+", "+top+") : "+width+"x"+height+".");
      code.innerHTML = "left: "+left+"px;<br>top: "+top+"px;<br>width: "+width+"px;<br>height: "+height+"px;";
      scroll(0,0);
      if(myImage.width > 840){
        left840 = Math.round(left * 840 / myImage.width, 1);
        top840 = Math.round(top * 840 / myImage.width, 1);
        width840 = Math.round(width * 840 / myImage.width, 1);
        height840 = Math.round(height * 840 / myImage.width, 1);
        code840.innerHTML = "left: "+left840+"px;<br>top: "+top840+"px;<br>width: "+width840+"px;<br>height: "+height840+"px;";
      }
      if (myImage.width > 640) {
        left640 = Math.round(left * 640 / myImage.width, 1);
        top640 = Math.round(top * 640 / myImage.width, 1);
        width640 = Math.round(width * 640 / myImage.width, 1);
        height640 = Math.round(height * 640 / myImage.width, 1);
        code640.innerHTML = "left: "+left640+"px;<br>top: "+top640+"px;<br>width: "+width640+"px;<br>height: "+height640+"px;";
      }
    }
}


function loadImage() {
    var imgURL = document.getElementById("myURL").value;
    myImage.src = imgURL;
    //Getting Canvas Size according to Image Size
    canvasSetup.width = myImage.width;
    canvasSetup.height = myImage.height;
    ctx.drawImage(myImage, 0, 0);
}

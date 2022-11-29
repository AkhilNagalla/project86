

 var x= document.getElementById("myAudio");
 var img = document.getElementById("myImage");
 var c = document.getElementById("myCanvas");


function new_image()
{
	  var ctx = c.getContext("2d");
	  ctx.drawImage(img, 0, 0);

}

function playSound(){
    x.play();    
    
}

function pauseSound(){
    x.pause();    
    
}

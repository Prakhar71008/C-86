var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
var birthday_object;

function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg", function(Img){
        birthday_object=Img;
        birthday_object.scaleToHeight(500);
        birthday_object.scaleToWidth(500);
        birthday_object.set({
            top:0,
            left:0
        });
        canvas.add(birthday_object);
    });
	
}

function playSound(){
	x.play();
}

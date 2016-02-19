// get the width and height of an image by its url
function getMeta(url){   
    var img = new Image();
    img.onload = function(){
        alert( this.width+' '+ this.height );
    };
    img.src = url;
}
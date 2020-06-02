var i = 0; // Starting Point
var images = [];
var time = 3000; 


//Image List
images[0] = '../img2/dolphin1.jpeg';
images[1] = '../img2/dolphin2.jpeg';
images[2] = '../img2/dolphin3.jpeg';
images[3] = '../img2/dolphin4.jpeg';
images[4] = '../img2/dolphin5.jpg';
images[5] = '../img2/dolphin6.jpg';
images[6] = '../img2/dolphin7.png';

// Transition
function changeImages(){
    document.getElementById("slide").src = images[i];

    if(i < images.length - 1){
        i++;
    }else{
        i = 0;
    }

    setTimeout('changeImages()', time);
}


window.onload = changeImages;

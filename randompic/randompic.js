

var imgArray = ["imgs/bullmastiff.jpg", "imgs/germanShepherd.jpg", "imgs/goldenRetriever.jpg", "imgs/greatDane.jpg", "imgs/australianShepherd.jpg"];

function randomPic(){

    var imgArray = ["imgs/bullmastiff.jpg", "imgs/germanShepherd.jpg", "imgs/goldenRetriever.jpg", "imgs/greatDane.jpg", "imgs/australianShepherd.jpg"];

    var num = Math.floor(Math.random() * (imgArray.length+1));

    document.src = imgArray[num];

}
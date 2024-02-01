// Api 
const quotes = document.getElementById("print-quotes")

let api_url = "https://type.fit/api/quotes";

var randNum = Math.floor( Math.random() * 16 );

var data;
const print = document.getElementById("print-quotes");

async function getquotes(url){
    let myquote = await fetch(url)
    data = await myquote.json();

    print.innerHTML = data[randNum].text;
    console.log(data);
}

getquotes(api_url);

// load api


let images = [
    "./image/img1.jpg",
    "./image/img2.jpg",
    "./image/img3.jpg",
    "./image/img4.jpg",
    "./image/img5.jpg"
];
console.log(images);

const myimage = document.getElementById("firstimg");

let currentImageindex = 0;

function updateimage(){
currentImageindex++;
console.log(currentImageindex);
console.log(images.length);
    if(currentImageindex >= images.length){
        currentImageindex = 0;
    }

    myimage.src = images[currentImageindex];
}

setInterval(updateimage, 3000)
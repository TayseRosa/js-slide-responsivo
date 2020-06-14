let time = 2000,
currentImageIndex = 0,
images = document.querySelectorAll("#slider img"),
max = images.length

function nextImage(){
    //console.log(images)
    //console.log(images[1])
    images[currentImageIndex].classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
    currentImageIndex = 0

    images[currentImageIndex].classList.add("selected")
}

function start(){
    setInterval(()=>{
        //Troca da images
        nextImage();
    }, time);
}
window.addEventListener("load", start)
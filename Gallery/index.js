let imgNumber = 0;

function nextImage() {
    imgNumber++;
    showImageByIndex(imgNumber);
}

function previousImage() {
    imgNumber--;
    showImageByIndex(imgNumber);
}

function showImageByIndex(i) {
    let catImage = document.getElementById("catImage");

    switch (i % 5) {
        case 0:
            catImage.src = "img/1.jpg";
            break;
        case 1:
            catImage.src = "img/2.jpg";
            break;
        case 2:
            catImage.src = "img/3.webp";
            break;
        case 3:
            catImage.src = "img/4.jpg";
            break;
        case 4:
            catImage.src = "img/5.jpg";
            break;

    }
}
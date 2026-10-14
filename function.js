function Display(previewPic) {
    console.log("Mouse over an image!");
    console.log(previewPic.alt);
    console.log(previewPic.src);

    let displayArea = document.getElementById("displayedImage");

    displayArea.innerHTML = previewPic.alt;
    displayArea.style.backgroundImage = "url('" + previewPic.src + "')";
};

function undo() {
    let displayArea = document.getElementById("displayedImage");

    displayArea.style.backgroundImage = "url('')";
    displayArea.innerHTML = "Hover over an image below to display here.";
};
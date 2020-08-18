let imgInput = document.querySelector('#acceptImg')

function uploadFile(){
    imgInput.click();
    imgInput.addEventListener("change", function(){
        let imgObj = imgInput.files[0];
        let imgLink = URL.createObjectURL(imgObj);
        let img =  document.createElement("img");
        img.src = imgLink;
        
        let textBox = createBox();
        img.setAttribute("class","upload-img")
        
        textBox.appendChild(img)

    })    
}

function downloadBoard() {
    //  create an anchor
    let a = document.createElement("a");
    //  set filename to it's download attribute
    a.download = "file.png";
    //  convert board to url 
    let url = board.toDataURL("image/png;base64");
    //  set as href of anchor
    a.href = url;
    // click the anchor
    a.click();
    //  reload behaviour does not get triggerd
    a.remove();
} 
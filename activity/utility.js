function createBox(){
    let isOpen = true;
let isStickyDown = false;
let initialX = null, initialY = null;

let stickyPad = document.createElement("div");
let navBar = document.createElement("div");
let close = document.createElement("div");
let minimize = document.createElement("div");
let textbox = document.createElement("div");
//    add classes
stickyPad.setAttribute("class", "stickyPad");
navBar.setAttribute("class", "nav-bar");
close.setAttribute("class", "close");
minimize.setAttribute("class", "minimize");
textbox.setAttribute("class", "textbox");
// create subtree
stickyPad.appendChild(navBar);
stickyPad.appendChild(textbox);
navBar.appendChild(minimize);
navBar.appendChild(close);

// add subtree to page
document.body.appendChild(stickyPad);

minimize.addEventListener(  "click", function() {
    if(isOpen)
        textbox.style.display = "none";
    
    else
        textbox.style.display = "block";
    
    isOpen = !isOpen;
} );

close.addEventListener("click", function(){
    stickyPad.remove();
});

//on mousedown start the rearrangemant
navBar.addEventListener( "mousedown", function(e){
    initialX = e.clientX;
    initialY = e.clientY;
    isStickyDown = true;
} );

navBar.addEventListener( "mousemove", function(e){
    if(isStickyDown)
    {
        let finalX = e.clientX; 
        let finalY = e.clientY;
        
        let dx = finalX - initialX;
        let dy = finalY - initialY;
        
        let { top, left } = stickyPad.getBoundingClientRect();
        
        stickyPad.style.top = top + dy + "px";
        stickyPad.style.left = left + dx + "px";
        console.log(stickyPad.style.top);

        initialX = finalX;
        initialY = finalY;
    }
} );

navBar.addEventListener("mouseup", function(){
    isStickyDown = false;
})

navBar.addEventListener("mouseleave", function(){
    isStickyDown = false;
})
return textbox;
}
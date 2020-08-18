ctx.lineWidth = 5;
let activeTool = 'pencil';
let pencil = document.querySelector('#pencil');
let eraser = document.querySelector('#eraser');
let pencilOptions = document.querySelector('#pencil-options');
let eraserOptions = document.querySelector('#eraser-options');
ctx.lineCap = "round";
ctx.lineJoin = 'round';


function handleTool(tool) {
    if (tool == "pencil") {
        if (activeTool == "pencil") {
            pencilOptions.classList.add('show');
        }
        else {
            activeTool = 'pencil';
            ctx.strokeStyle = 'black';
            eraserOptions.classList.remove('show');
        }
    }
    else if (tool == "eraser") {
        if (activeTool == 'eraser') {
            eraserOptions.classList.add('show');
        }
        else {
            activeTool = 'eraser';
            ctx.strokeStyle = 'white';
            pencilOptions.classList.remove('show');
        }
    }
    else if (tool == 'sticky') {
        createSticky();
    }
    else if (tool == 'upload') {
        uploadFile();
    }
    else if (tool == 'undo') {
        undoLast();
    }
    else if (tool == 'redo') {
        redoLast();
    }
    else if (tool == 'download') {
        downloadBoard();
    }
}

function changeColor(color) {
    ctx.strokeStyle = color;
    socket.emit('colorChange', color);
}

let sliders = document.querySelectorAll('input[type="range"]');
for (let i = 0; i < sliders.length; i++) {
    sliders[i].addEventListener('change', function () {
        let width = sliders[i].value;
        ctx.lineWidth = width;
        socket.emit('widthChange', width);
    });
}


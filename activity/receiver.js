socket.on( 'rColorChange', function(color){
    ctx.strokeStyle = color;
});
socket.on( 'serverWidthChange', function(width){
    ctx.lineWidth = width;
});
socket.on('onmd', function( point ){
    let {x, y, color, width} = point;
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.beginPath( );
    ctx.moveTo( x, y );
})

socket.on('onmm', function( point ){
    let {x, y, color, width} = point;
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.lineTo( x, y);
    ctx.stroke();
})

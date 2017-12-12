let ctx = c.getContext('2d'),
    canvas_width = c.width,
    canvas_height = c.height;

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas_width, canvas_height);
ctx.font = '32px monospace';
ctx.fillStyle = 'blue';
ctx.fillText('Some random text...', 50, 50);

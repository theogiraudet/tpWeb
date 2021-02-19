
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

canvas.width=800
canvas.height=600

document.getElementById('colour').value = '#000000'
document.getElementById('spinnerWidth').value = 5
document.getElementById('butRect').checked = false
document.getElementById('butLine').checked = true

// Code final à utiliser pour manipuler Pencil.
var drawing = new Drawing();
var pencil = new Pencil(ctx, drawing, canvas);
drawing.paint.bind(drawing)(ctx, canvas);


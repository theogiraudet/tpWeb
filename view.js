Rectangle.prototype.paint = function (ctx) {
    ctx.strokeStyle = this.color
    ctx.lineWidth = this.thickness
    ctx.strokeRect(this.startX, this.startY, this.width, this.height)
//    ctx.stroke()
};

Line.prototype.paint = function (ctx) {
    ctx.strokeStyle = this.color
    ctx.lineWidth = this.thickness
    ctx.beginPath();
    ctx.moveTo(this.startX, this.startY)
    ctx.lineTo(this.endX, this.endY)
    ctx.stroke();
};

Drawing.prototype.paint = function (ctx, canvas) {
    //console.log(this.shapeArray)
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    this.shapeArray.forEach(element => element.paint(ctx))
};

function updateShapeList(document, drawing) {
    document.getElementById('shapeList').innerHTML =
        Array.from(drawing.shapeArray).map(obj => toDom(obj[1], obj[0])).join('<br/>')
}

function toDom(shape, index) {
    if(shape && typeof shape === 'object') {
        let innerHtml =  '<li>'
        if (shape.constructor === Rectangle)
            innerHtml = '<span style="color:' + shape.color + '">□</span> Rectangle'
        else if(shape.constructor === Line)
            innerHtml = '<span style="color:' + shape.color + '">/</span> Line'

        innerHtml += `
                <button type="button" class="btn btn-default remove" id="remove${index}">
                    <span class="glyphicon glyphicon-remove-sign"></span>
                </button>`
        return innerHtml + '</li>'

    }
}
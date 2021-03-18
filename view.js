Rectangle.prototype.paint = function (ctx) {
    ctx.strokeStyle = this.color
    ctx.lineWidth = this.thickness
    ctx.strokeRect(this.startX, this.startY, this.width, this.height)
};

Line.prototype.paint = function (ctx) {
    ctx.strokeStyle = this.color
    ctx.lineWidth = this.thickness
    ctx.beginPath();
    ctx.moveTo(this.startX, this.startY)
    ctx.lineTo(this.endX, this.endY)
    ctx.stroke();
};

Circle.prototype.paint = function(ctx) {
    ctx.strokeStyle = this.color
    ctx.lineWidth = this.thickness
    ctx.beginPath()
    ctx.ellipse(this.startX, this.startY, this.radius, this.radius, 0, 0, 2 * Math.PI, false)
    ctx.stroke()
}

Drawing.prototype.paint = function (ctx, canvas) {
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    this.shapeArray.forEach(element => element.paint(ctx))
};

function updateShapeList(index, shape) {
    document.getElementById('shapeList')
        .insertAdjacentHTML('beforeend', toDom(shape, index))
}

function toDom(shape, index) {
    if(shape && typeof shape === 'object') {
        let innerHtml =  `<li id="liRemove${index}">`
        if (shape.constructor === Rectangle)
            innerHtml += '<span style="color:' + shape.color + '">□</span> Rectangle'
        else if(shape.constructor === Line)
            innerHtml += '<span style="color:' + shape.color + '">/</span> Line'
        else if(shape.constructor === Circle)
            innerHtml += '<span style="color:' + shape.color + '">◯</span> Circle'

        innerHtml += `
                <button type="button" class="btn btn-default remove" id="remove${index}">
                    <span class="glyphicon glyphicon-remove-sign"></span>
                </button>`
        return innerHtml + '</li>'

    }
}
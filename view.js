Rectangle.prototype.paint = function (ctx) {
    ctx.strokeStyle = this.color
    ctx.lineWidth = this.thickness
    ctx.rect(this.startX, this.startY, this.width, this.height)
    ctx.stroke()
};

Line.prototype.paint = function (ctx) {
    ctx.beginPath();
    ctx.moveTo(this.startX, this.startY)
    ctx.lineTo(this.endX, this.endY)
    ctx.strokeStyle = this.color
    ctx.lineWidth = this.thickness
    ctx.stroke();
};

Drawing.prototype.paint = function (ctx, canvas) {
    //console.log(this.shapeArray)
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    this.shapeArray.forEach(element => element.paint.bind(element)(ctx))
};

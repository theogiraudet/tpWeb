Rectangle.prototype.paint = function (ctx) {
    ctx.rect(this.startX, this.startY, this.startX + this.width, this.startY + this.height)
    ctx.strokeStyle = this.color
    ctx.lineWidth = this.thickness
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

Drawing.prototype.paint = function (ctx) {
    console.log(this.shapeArray)
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    this.shapeArray.forEach(element => element.paint(ctx))
};


var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	this.id = 0

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
	document.getElementById('butRect').onclick = (_) => this.currEditingMode = editingMode.rect
	document.getElementById('butLine').onclick = (_) => this.currEditingMode = editingMode.line
	document.getElementById('spinnerWidth').onchange = (e) => this.currLineWidth = e.target.value
	document.getElementById('colour').onchange = (e) => this.currColour = e.target.value


	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

	Pencil.prototype.onInteractionStart = function(dragNDrop) {
		if(this.currEditingMode === editingMode.rect)
			this.currentShape = new Rectangle(dragNDrop.xFinal, dragNDrop.yFinal, this.currLineWidth, this.currColour, 0, 0)
	    else if(this.currEditingMode === editingMode.line)
	    	this.currentShape = new Line(dragNDrop.xFinal, dragNDrop.yFinal, this.currLineWidth, this.currColour, dragNDrop.x, dragNDrop.y)
		drawing.paint.bind(drawing)(ctx, canvas)
		this.currentShape.paint.bind(this.currentShape)(ctx)
	}

	Pencil.prototype.onInteractionUpdate = function(dragNDrop) {
		if(this.currEditingMode === editingMode.rect) {
			this.currentShape.width = dragNDrop.xFinal - this.currentShape.startX
			this.currentShape.height = dragNDrop.yFinal - this.currentShape.startY
		} else if(this.currEditingMode === editingMode.line) {
			this.currentShape.endX = dragNDrop.xFinal
			this.currentShape.endY = dragNDrop.yFinal
		}
		drawing.paint.bind(drawing)(ctx, canvas)
		this.currentShape.paint.bind(this.currentShape)(ctx)
	}

	Pencil.prototype.onInteractionEnd = function(_) {
		drawing.shapeArray.set(this.id, this.currentShape)
		drawing.paint.bind(drawing)(ctx, canvas)
		updateShapeList(this.id, this.currentShape)
		document.getElementById("remove" + this.id).onclick =
			(event) => remove(drawing, event.currentTarget.id.substring(6), ctx, canvas)
		this.id++
		this.currentShape = 0
	}
}

function remove(drawing, index, ctx, canvas) {
	drawing.shapeArray.delete(parseInt(index))
	document.getElementById('remove' + index).remove()
	document.getElementById('liRemove' + index).remove()
	drawing.paint(ctx, canvas)
}



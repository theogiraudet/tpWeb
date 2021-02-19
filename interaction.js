
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
  this.x = 0
  this.y = 0
  this.xFinal = 0
  this.yFinal = 0
  this.isDragged = false

	// Developper les 3 fonctions gérant les événements
  DnD.prototype.onMouseDown = function(evt) {
    const pos = getMousePosition(canvas, evt)
    this.xFinal = this.x = pos.x
    this.yFinal = this.y = pos.y
    this.isDragged = true
    interactor.onInteractionStart(this)
    //console.log(`x = ${xFinal}, y = ${yFinal}`)
  }

  DnD.prototype.onMouseMove = function(evt) {
    if(this.isDragged) {
      this.x = this.xFinal
      this.y = this.yFinal
      const pos = getMousePosition(canvas, evt)
      this.xFinal = pos.x
      this.yFinal = pos.y
      interactor.onInteractionUpdate(this)
      //console.log(`x = ${xFinal}, y = ${yFinal}`)
    }
  }

  DnD.prototype.onMouseUp = function(evt) {
    if(this.isDragged) {
      const pos = getMousePosition(canvas, evt)
      this.xFinal = pos.x
      this.yFinal = pos.y
      this.isDragged = false
      interactor.onInteractionEnd(this)
      //console.log(`x = ${xFinal}, y = ${yFinal}`)
    }
  }

  canvas.addEventListener('mousedown', this.onMouseDown)
  canvas.addEventListener('mousemove', this.onMouseMove)
  canvas.addEventListener('mouseup', this.onMouseUp)
	// Associer les fonctions précédentes aux évènements du canvas.
}


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  let rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}




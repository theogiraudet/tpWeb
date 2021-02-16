
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
  let x = 0
  let y = 0
  let xFinal = 0
  let yFinal = 0
  let isDragged = false;

	// Developper les 3 fonctions gérant les événements
  DnD.prototype.onMouseDown = function(evt) {
    const pos = getMousePosition(canvas, evt)
    xFinal = pos.x
    yFinal = pos.y
    isDragged = true
    console.log(`x = ${xFinal}, y = ${yFinal}`)
  }

  DnD.prototype.onMouseMove = function(evt) {
    if(this.isDragged) {
      x = xFinal
      y = yFinal
      const pos = getMousePosition(canvas, evt)
      xFinal = pos.x
      yFinal = pos.y
      console.log(`x = ${xFinal}, y = ${yFinal}`)
    }
  }

  DnD.prototype.onMouseUp = function(evt) {
    if(isDragged) {
      const pos = getMousePosition(canvas, evt)
      xFinal = pos.x
      yFinal = pos.y
      isDragged = false
      console.log(`x = ${xFinal}, y = ${yFinal}`)
    }
  }

  canvas.addEventListener('mousedown', this.onMouseDown)
  canvas.addEventListener('mousemove', this.onMouseMove)
  canvas.addEventListener('mouseup', this.onMouseUp)
	// Associer les fonctions précédentes aux évènements du canvas.
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};




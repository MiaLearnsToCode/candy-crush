function init() {

  const grid = document.querySelector('#grid')

  // Grid size
  const width = 9
  const height = 7
  const cells = width * height

  // other variables
  const colors = ['green', 'purple', 'orange', 'blue']
  let inPlay = []
  let proximity = null

  // function that checks that you are trying to move a candy only by one cell either vertically or horizontally
  function checkProximity() {
    const firstCell = parseInt(inPlay[0].getAttribute('data-id'))
    const secondCell = parseInt(inPlay[1].getAttribute('data-id'))
    console.log(firstCell, secondCell)
    if (firstCell === secondCell + 1 || firstCell === secondCell - 1 || firstCell === secondCell - width || firstCell === secondCell + width) {
      proximity = true
    } else {
      proximity = false
    }
  }

  // function that checks if the candy you are moving will crush a row or column 
  function checkPossibility() {
    
  }

  // function that swaps two candies
  function swap() {
    const first = inPlay[0].classList[1]
    const second = inPlay[1].classList[1]
    inPlay[0].classList.remove(first)
    inPlay[0].classList.add(second)
    inPlay[1].classList.remove(second)
    inPlay[1].classList.add(first)
    
  }

  // function that allows the swap function to run only if the move is allowed
  function play(cell) {
    inPlay.push(cell)
    if (inPlay.length === 2) {
      checkProximity()
      checkPossibility()
      if (proximity && possibility) {
        swap()
      } 
      inPlay = []
    }
  }

  // Grid generation
  function createBoard() {
    for (let i = 0; i < cells; i++) {
      const cell = document.createElement('div')
      cell.classList.add('cell')
      cell.classList.add(`${colors[Math.floor(Math.random() * Math.floor(4))]}`)
      cell.setAttribute('data-id', i)
      grid.appendChild(cell)
      cell.addEventListener('click', () => play(cell))
    }
  }

  createBoard()
  
}

window.addEventListener('DOMContentLoaded', init)
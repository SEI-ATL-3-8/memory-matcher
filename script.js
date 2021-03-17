
let isGameOver = false
let faceDowns = ['A', 'A', 'B', 'B']
// TODO: shuffle these!
let firstCardForRound = null
let secondCardForRound = null

const handleClick = (id) => {
  // is the clicked card the first one for the round or the second?
  if (firstCardForRound === null) {
    // it must be the first one
    firstCardForRound = id
    // reveal the card
    document.querySelector('#cell-' + id).innerText = faceDowns[id]
  } else {
    // it must be the second one
    secondCardForRound = id
    // reveal the card
    document.querySelector('#cell-' + id).innerText = faceDowns[id]
    // check for match
    if (faceDowns[firstCardForRound] === faceDowns[secondCardForRound]) {
      console.log('match!');
      // here we would reset the round
      // set firstCardForRound & secondCardForRound to null
      // leave them face up: doesn't require any additional action
    } else {
      console.log('no match!');
      // actually we reset the round in both cases!
      // also hide the two cards, but after a delay with setTimeout
    }
  }
}

document.querySelector('#cell-0').addEventListener('click', () => {
    handleClick(0)
})

document.querySelector('#cell-1').addEventListener('click', () => {
    handleClick(1)
})

document.querySelector('#cell-2').addEventListener('click', () => {
    handleClick(2)
})

document.querySelector('#cell-3').addEventListener('click', () => {
    handleClick(3)
})




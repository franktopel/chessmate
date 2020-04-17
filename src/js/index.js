import './components/chess-mate/chess-mate'

const chessmate = document.createElement('chess-mate')
chessmate.setAttribute('height', '400')
chessmate.setAttribute('width', '400')
document.body.appendChild(chessmate)
console.log(chessmate.attributes)

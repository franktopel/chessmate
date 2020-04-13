import './components/chess-mate/chess-mate';

const chessmate = document.createElement('chess-mate');
document.body.appendChild(chessmate);
chessmate.setAttribute('height', '400');
chessmate.setAttribute('width', '400');
console.log(chessmate.attributes);

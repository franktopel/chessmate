import chess, { Chess } from 'chess.js';
import { ChessBoardElement } from 'chessboard-element';

export default class ChessMate extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.board = new ChessBoardElement();
    this.shadowRoot.appendChild(this.board);
  }

  connectedCallback() {}
}

customElements.define('chess-mate', ChessMate);

import chess, { Chess } from 'chess.js';
import { ChessBoardElement } from 'chessboard-element';

export default class ChessMate extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.board = new ChessBoardElement();
    this.board.setAttribute('draggable-pieces', '');
    this.board.start();
    this.shadowRoot.appendChild(this.board);
  }

  connectedCallback() {}

  static get observedAttributes() {
    return ['height', 'width'];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    console.log(attr, oldVal, newVal);
    switch (attr) {
      case 'height':
      case 'width':
        if (newVal) {
          this.style.height = `${newVal}px`;
          this.style.width = `${newVal}px`;
          this.removeAttribute(attr);
        }
        break;
      default:
        break;
    }
  }
}

customElements.define('chess-mate', ChessMate);

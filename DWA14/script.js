import { LitElement, html, css, property } from 'lit';

class LitNumericInput extends LitElement {
  @property({ type: Number }) value = 0;

  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
    }

    button {
      font-size: 18px;
      padding: 5px 10px;
      margin: 5px;
    }
  `;

  subtract() {
    if (this.value > -10) {
      this.value -= 1;
    }
  }

  add() {
    if (this.value < 10) {
      this.value += 1;
    }
  }

  reset() {
    this.value = 0;
  }

  render() {
    return html`
      <div>
        <button @click=${this.subtract}>-</button>
        <span>${this.value}</span>
        <button @click=${this.add}>+</button>
      </div>
      <button @click=${this.reset}>Reset</button>
    `;
  }
}

customElements.define('lit-numeric-input', LitNumericInput);

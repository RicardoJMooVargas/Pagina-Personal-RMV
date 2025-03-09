import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('dropdown-menu')
export class DropdownMenu extends LitElement {
    @property({ type: Boolean }) open = false;

    static styles = css`
      :host {
        position: relative;
        display: inline-block;
      }
    
      .menu {
        position: absolute;
        top: 100%;
        left: 0;
        background: white;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        min-width: 150px;
        padding: 8px 0;
        display: none;
        z-index: 1000; /* Asegura que esté por encima del navbar */
      }
    
      .menu.open {
        display: block;
      }
    
      .menu-item {
        padding: 8px 12px;
        cursor: pointer;
        transition: background 0.2s;
      }
    
      .menu-item:hover {
        background: #f0f0f0;
      }
    `;


    toggleMenu() {
        this.open = !this.open;
    }

    closeMenu() {
        this.open = false;
    }

    render() {
        return html`
      <div @click="${this.toggleMenu}">
        <slot name="trigger">Menú</slot>
      </div>
      <div class="menu ${this.open ? 'open' : ''}" @mouseleave="${this.closeMenu}">
        <slot></slot>
      </div>
    `;
    }
}

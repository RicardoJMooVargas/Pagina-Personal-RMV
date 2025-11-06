import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './NavBar.ts';
import './ContactsBar.ts';

@customElement('main-layout')
export class MainLayout extends LitElement {
    @property({ type: Function })
    navigate?: (path: string) => void;

    render() {
        return html`
            <header>
                <nav-bar .navigate=${this.navigate}></nav-bar>
            </header>
            <main class="content">
                <slot></slot>
            </main>
            <footer>
                <p><strong>©</strong> 2024 Ricardo J Moo Vargas</p>
            </footer>
        `;
    }

    static styles = css`
        .content {
            display: grid;
            grid-template-columns: 10% 1fr 10%;
            margin-bottom: 90px;
            margin-top: 100px;
        }

        ::slotted(*) {
            grid-column: 2 / 3;
        }

        footer {
            bottom: 0;
            left: 0;
            width: 100%;
            min-height: 90px;
            text-align: center;
            padding: 16px;
            background-color: var(--deep-dark);
            color: var(--light);
        }
    `;
}



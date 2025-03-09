import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import './index.css';
import './pages/Home/ResourcesSection.ts';
import "./pages/Home/ProjectsSection.ts";
import "./pages/Home/InfoSection.ts"
import './Components/NavBar';
import "./Components/ContactsBar.ts"

@customElement('app-router')
class AppRouter extends LitElement {

    render() {
        return html`
        <header>
            <nav-bar></nav-bar>
        </header>
        <main class="content">
            <info-page></info-page>
            <resources-page></resources-page>
            <projects-page></projects-page>
        </main>
        <footer>
            <p> <strong>©</strong> 2024 Ricardo J Moo Vargas</p>
        </footer>
    `;
    }
    static styles = css`
        main {
            margin-bottom: 90px;
            display: grid;
            grid-template-columns: 10% 2fr 10%;
            grid-template-rows: auto auto auto;
        }

        info-page {
            grid-column: 2 / 3;
            margin: 24px 0;
            padding: 8px;
        }
        projects-page {
            grid-column: 2 / 3;
            margin: 24px 0;
            padding: 8px;
        }
        
        resources-page {
            grid-column: 2 / 3;
            margin: 24px 0;
            padding: 8px;
        }
        
        footer {
            // POSITIONS
            bottom: 0;  
            left: 0;
            min-height: 90px;
            text-align: center;
            padding: 16px;
            /* BACKGROUNDS AND COLORS */
            background-color: var(--deep-dark);
            color: var(--light);
        }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        'app-router': AppRouter;
    }
}

import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

// Importa las secciones que componen el Home
import './InfoSection.ts';
import './ProjectsSection.ts';
import './ResourcesSection.ts';

@customElement('home-page')
export class HomePage extends LitElement {
    render() {
        return html`
            <div class="home-container">
                <info-page></info-page>
                <resources-page></resources-page>
                <projects-page></projects-page>
            </div>
        `;
    }

    static styles = css`
        .home-container {
            display: grid;
            grid-template-columns: 1fr;
            gap: 48px; /* Espacio entre secciones */
            margin: 24px 0;
        }

        info-page,
        projects-page,
        resources-page {
            width: 100%;
        }
    `;
}


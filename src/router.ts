import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

// Importa los componentes de las páginas
import './pages/Home/HomePage.ts';
import './pages/About/AboutPage.ts';
import './Components/MainLayout.ts';

@customElement('app-router')
export class AppRouter extends LitElement {
    @property({ type: String })
    currentRoute = '/';

    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('popstate', () => this.handleRouteChange());
        this.handleRouteChange();
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('popstate', () => this.handleRouteChange());
    }

    handleRouteChange() {
        this.currentRoute = window.location.pathname;
        this.requestUpdate();
    }

    navigate(path: string) {
        window.history.pushState({}, '', path);
        this.handleRouteChange();
    }

    render() {
        let pageContent;

        switch (this.currentRoute) {
            case '/':
                pageContent = html`<home-page></home-page>`;
                break;
            case '/about':
                pageContent = html`<about-page></about-page>`;
                break;
            default:
                pageContent = html`<home-page></home-page>`;
        }

        return html`
            <main-layout .navigate=${(path: string) => this.navigate(path)}>
                ${pageContent}
            </main-layout>
        `;
    }
}


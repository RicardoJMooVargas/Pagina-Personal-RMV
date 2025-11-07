import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

@customElement("simple-card")
export class CardComponent extends LitElement {

    @property({ type: String }) type = "simple"; // 'simple', 'info', 'repo'
    @property({ type: String }) srcimg = "default";
    @property({ type: String }) color = "default";
    @property({ type: String }) title = "Card Title";
    @property({ type: String }) description = "";
    @property({ type: Array }) items: string[] = [];
    @property({ type: String }) icon = ""; // SVG path or something
    @property({ type: Array }) stats: { icon: string, text: string }[] = [];
    @property({ type: String }) buttonText = "";
    @property({ type: String }) buttonHref = "";
    @property({ type: String }) footerImage = "";

    render() {
        if (this.type === "info") {
            return this.renderInfoCard();
        } else if (this.type === "repo") {
            return this.renderRepoCard();
        } else {
            return this.renderSimpleCard();
        }
    }

    renderSimpleCard() {
        return html`
            <div class="contour">
                <div class="card">
                    <div class="card-title">
                        ${this.title}
                    </div>
                    <div class="card-scontent">
                        <slot></slot>
                    </div>
                </div>
                ${this.footerImage || this.srcimg !== "default" ? html`<div class="footer-image"><img src="${this.footerImage || (this.srcimg !== "default" ? this.srcimg : "https://picsum.photos/200/300")}" alt=""></div>` : ''}
            </div>
        `;
    }

    renderInfoCard() {
        return html`
            <div class="info-card">
                ${this.icon ? html`<div class="card-icon">${unsafeHTML(this.icon)}</div>` : ''}
                <h2>${this.title}</h2>
                ${this.description ? html`<p>${this.description}</p>` : ''}
                ${this.items.length > 0 ? html`
                    <ul class="tech-list">
                        ${this.items.map(item => html`<li><span class="tech-bullet">⚡</span> ${unsafeHTML(item)}</li>`)}
                    </ul>
                ` : ''}
            </div>
            ${this.footerImage ? html`<div class="footer-image"><img src="${this.footerImage}" alt=""></div>` : ''}
        `;
    }

    renderRepoCard() {
        return html`
            <div class="repo-card">
                <div class="repo-header">
                    <div class="github-icon">${unsafeHTML(this.icon)}</div>
                    <h2>${this.title}</h2>
                    <p class="repo-description">${this.description}</p>
                </div>
                ${this.stats.length > 0 ? html`
                    <div class="repo-stats">
                        ${this.stats.map(stat => html`
                            <div class="stat-item">
                                ${unsafeHTML(stat.icon)}
                                <span>${stat.text}</span>
                            </div>
                        `)}
                    </div>
                ` : ''}
                ${this.buttonText ? html`
                    <a href="${this.buttonHref}" target="_blank" rel="noopener noreferrer" class="repo-button">
                        ${unsafeHTML(this.icon)}
                        <span>${this.buttonText}</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M7 17L17 7" stroke-width="2" stroke-linecap="round"/>
                            <path d="M7 7h10v10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                ` : ''}
            </div>
            ${this.footerImage ? html`<div class="footer-image"><img src="${this.footerImage}" alt=""></div>` : ''}
        `;
    }

    static styles = css`
        /* Simple Card Styles */
        .contour {
            margin: 12px 0;
            border-radius: 8px;
        }
        
        .card {
            display: flex;
            padding: 16px;
            border-radius: 8px 8px 0 0;
            background: var(--dark);
            flex-direction: column;
        }
        
        .card-title {
            color: var(--light);
            font-size: 1.5em;
            padding: 10px;
            text-align: center;
        }
        
        .card-scontent {
            color: var(--light);
        }
        
        .footer-image {
            border-radius: 0 0 8px 8px;
            overflow: hidden;
        }
        .footer-image img {
            object-fit: cover;
            max-height: 124px;
            width: 100%;
            filter: blur(2px);
            border-radius: 0 0 8px 8px;
            transition: filter 0.3s ease, max-height 0.3s ease;
        }
        
        .footer-image img:hover {
            filter: none;
            max-height: 200px;
        }
        
        /* Info Card Styles */
        .info-card {
            background: rgba(255, 255, 255, 0.9);
            border-radius: 16px;
            padding: 32px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            color: #000000;
        }

        .info-card:hover {
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
            border-color: var(--green);
        }

        .card-icon {
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, var(--green), var(--primary));
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
            color: white;
            box-shadow: 0 8px 20px rgba(0, 255, 136, 0.3);
        }

        .info-card h2 {
            font-size: 1.8rem;
            margin: 0 0 16px 0;
            color: var(--green);
        }

        .info-card p {
            line-height: 1.6;
            opacity: 0.9;
            margin-bottom: 20px;
        }

        .tech-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .tech-list li {
            padding: 12px 0;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            color: #000000;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .tech-list li:last-child {
            border-bottom: none;
        }

        .tech-bullet {
            font-size: 1.5rem;
        }

        /* Repo Card Styles */
        .repo-card {
            background: linear-gradient(135deg, rgba(36, 41, 46, 0.9), rgba(22, 27, 34, 0.9));
            border-radius: 20px;
            padding: 48px;
            border: 2px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
            margin-bottom: 40px;
            color: var(--light);
        }

        .repo-header {
            text-align: center;
            margin-bottom: 40px;
        }

        .github-icon {
            color: var(--green);
            margin-bottom: 20px;
            width: 64px;
            height: 64px;
        }

        .repo-card h2 {
            font-size: 2.2rem;
            margin: 0 0 16px 0;
            color: var(--light);
        }

        .repo-description {
            font-size: 1.1rem;
            color: var(--green);
            font-weight: 600;
        }

        .repo-stats {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin-bottom: 40px;
        }

        .stat-item {
            display: flex;
            align-items: center;
            gap: 8px;
            color: var(--light);
        }

        .stat-item svg {
            color: var(--green);
        }

        .repo-button {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 18px 40px;
            background: linear-gradient(135deg, var(--green), var(--primary));
            color: white;
            text-decoration: none;
            border-radius: 12px;
            font-size: 1.1rem;
            font-weight: 700;
            transition: all 0.3s ease;
            box-shadow: 0 8px 30px rgba(0, 255, 136, 0.3);
            margin: 0 auto;
            width: fit-content;
        }

        .repo-button:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 40px rgba(0, 255, 136, 0.5);
            background: linear-gradient(135deg, var(--primary), var(--green));
        }

        /* Responsive */
        @media (max-width: 768px) {
            .repo-stats {
                flex-direction: column;
                align-items: center;
                gap: 20px;
            }
        }
    `;
}

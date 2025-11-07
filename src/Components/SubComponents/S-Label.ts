import {customElement, property} from "lit/decorators.js";
import {css, html, LitElement} from "lit";
import { unsafeHTML } from 'lit/directives/unsafe-html.js';


@customElement("s-label")
export class SimpleCard extends LitElement{

    @property({ type: String }) label = "Skill";
    @property({ type: String }) icon = "";
    @property({ type: String }) color = "#42b883";

    render() {
        return html`
            <span class="skill-label">
                ${this.icon ? html`<span class="skill-icon">${unsafeHTML(this.icon)}</span>` : ''}
                <span class="skill-text">${this.label}</span>
            </span>
        `
    }
    static styles = css`
        .skill-label {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: linear-gradient(135deg, var(--green), var(--primary));
            border-radius: 20px;
            padding: 8px 16px;
            color: white;
            font-weight: 600;
            font-size: 0.95rem;
            transition: all 0.3s ease;
            box-shadow: 0 4px 10px rgba(0, 255, 136, 0.2);
        }
        
        .skill-label:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 15px rgba(0, 255, 136, 0.4);
        }
        
        .skill-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 20px;
            height: 20px;
        }
        
        .skill-icon svg {
            width: 100%;
            height: 100%;
        }
        
        .skill-text {
            line-height: 1;
        }
    `
}
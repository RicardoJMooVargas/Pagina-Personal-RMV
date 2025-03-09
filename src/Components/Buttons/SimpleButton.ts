import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('simple-button')
export class SimpleButton extends LitElement {
    @property({ type: String }) color = "secondary";
    @property({ type: String}) type = "simple";
    @property({ type: String }) text = 'button'
    @property({type: Number}) size = 200;

    render() {
        return html`
        <button class=${this.color + "-" + this.type}>
            ${ this.text }
        </button>
        `;
    }

    static styles = css`
        button {
            border: none;
            padding: 8px 15px;
            border-radius: 6px;
            cursor: pointer;
            background-color: rgba(0, 0, 0, 0.0);
        }
        
        button:hover {
            background-color: var(--primary);
        }
    
        .primary-simple { background-color: var(--primary); }
        .secondary-simple { background-color: var(--secondary); }
        .green-simple { background-color: var(--green); }
        .info-simple { background-color: var(--info); }
        .light-simple { background-color: var(--light); }
        .dark-simple { background-color: var(--dark); }

        .primary-outline { 
            color: var(--primary);
            /* border: 1px solid var(--primary); */
        }
        .secondary-outline { 
            color: var(--secondary);
            /* border: 1px solid var(--secondary); */
        }
        .info-outline { 
            color: var(--info);
            /* border: 1px solid var(--info); */
        }
        .light-outline { 
            color: var(--light);
            /* border: 1px solid var(--light); */	
        }
        .dark-outline { 
            color: var(--dark);
            /* border: 1px solid var(--dark); */
        }
    `;
}
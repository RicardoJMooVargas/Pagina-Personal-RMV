import {customElement} from "lit/decorators.js";
import {css, html, LitElement} from "lit";


@customElement("s-label")
export class SimpleCard extends LitElement{


    render() {
        return html`
            <span>
                Linux
            </span>
        `
    }
    static styles = css`
        span {
            background: #42b883;
            border-radius: 15px;
            padding: 4px 14px;
        }
    `
}
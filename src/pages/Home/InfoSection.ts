import {LitElement, html, css} from 'lit'
import { customElement } from 'lit/decorators.js'
import "../Components/SubComponents/S-Image.ts"

@customElement('info-page')
export class InfoPage extends LitElement {
    render() {
        return html`
        <div class="container-info">
            <div class="perfil-image">
                <s-img 
                    src="img-perfil.jpg" 
                    borderRadius="circle" 
                    border=4
                ></s-img>
                <h2>Hey I am</h2>
                <h1>Ricardo De Jesus Moo Vargas</h1>
                <h2>nice to meet you 👏</h2>
            </div>
            
            <div class="perfil-description">
                <h1>Profile</h1>
               <p>
                   Ingeniero en sistemas computacionales egresado de la Universidad
                   Autónoma de Campeche, Facultad de Ingeniería. Con un enfoque en
                   la resolución de problemas mediante la creación de software tanto
                   Web como especializado para automatización. Mis puntos fuertes están
                   actualmente en el desarrollo frontend con conocimientos basicos de
                   backend. Tengo la aspiración de convertirme en un desarrollador
                   full stack con habilidades de arquitecto de software.
               </p>
            </div>
        </div>
        `;
    }

    static styles = css`
        .container-info {
            /* POSITION AND SIZE */
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr auto;
            border-radius: 12px;
        }
        
        .perfil-image {
            /* POSITION AND SIZE */
            margin: 0 12px;
            grid-column: 1/2;
            display: grid;
            place-items: center;
            text-align: center;
            /* BACKGROUND, COLORS AND EFECTS */
            color: var(--dark);
        }
        .perfil-image h1{
            background: linear-gradient(45deg, var(--primary), var(--secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
        }
        
        .perfil-description {
            /* POSITION AND SIZE */
            margin: 0 12px;
            grid-column: 2/3;
            padding: 16px;
            border-radius: 8px;
            /* BACKGROUND, COOLORS and EFECTS */
            background-color: var(--dark-transparent);
        }
        
        
        h1 {
            margin: 0;
            color: var(--green)
        }
        
        @media (max-width: 800px) {
            .container-info { grid-template-columns: auto 1fr auto }
            .perfil-image { grid-column: 2/3 }
            .perfil-description { grid-column: 2/3; text-align: center }
            .perfil-image h1 { margin: 12px 0; }
        }
    `;
}


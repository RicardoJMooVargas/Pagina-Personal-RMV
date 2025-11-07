import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import "../../Components/SimpleCard.ts";
import "../../Components/SubComponents/S-Label.ts";
@customElement("projects-page")
export class ProjectsSection extends LitElement {


    render() {
        return html`
        <div class="container-projects">
            <div class="skills-category">
                <h2>Skills</h2>
                <div class="skills">
                    <s-label 
                        label="Linux" 
                        icon='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.592-.308 1.119-.308 1.119s.393-.97.586-1.41c.193-.441.276-.643.276-.643s-.097.432-.097.432c-.568 2.043-1.281 3.662-1.281 3.662.181-.286.47-.683.925-1.186.455-.503 1.084-1.175 1.746-1.819 1.324-1.286 2.945-2.498 4.781-3.316 1.836-.818 3.861-1.245 5.811-1.245 1.95 0 3.975.427 5.811 1.245 1.836.818 3.457 2.03 4.781 3.316.662.644 1.291 1.316 1.746 1.819.455.503.744.9.925 1.186 0 0-.713-1.619-1.281-3.662 0 0-.097-.432-.097-.432s.083.202.276.643c.193.44.586 1.41.586 1.41s-.03-.527-.308-1.119c-.589-1.771-1.831-3.47-2.716-4.521-.75-1.067-.974-1.928-1.05-3.02-.065-1.491 1.056-5.965-3.17-6.298-.165-.013-.325-.021-.48-.021z"/></svg>'
                    ></s-label>
                    
                    <s-label 
                        label="Vue.js" 
                        icon='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 3h3.5L12 15l6.5-12H22L12 21 2 3m4.5 0h3L12 7.58 14.5 3h3L12 13.08 6.5 3z"/></svg>'
                    ></s-label>
                    
                    <s-label 
                        label="React" 
                        icon='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9.55 4.54c.3-.38.59-.77.86-1.15.27-.39.52-.79.76-1.18-.34-.07-.68-.12-1.03-.17l-.24.41c-.27.47-.55.92-.83 1.36.27.52.54 1.02.79 1.49m-9.14 0c.25-.47.52-.97.79-1.49-.28-.44-.56-.89-.83-1.36l-.24-.41c-.35.05-.69.1-1.03.17.24.39.49.79.76 1.18.27.38.56.77.86 1.15M9.85 4.15c-.3.38-.59.77-.86 1.15a26.6 26.6 0 0 0-.76 1.18c.34.07.68.12 1.03.17l.24-.41c.27-.47.55-.92.83-1.36a26.6 26.6 0 0 0-.79-1.49m4.3 0c-.25.47-.52.97-.79 1.49.28.44.56.89.83 1.36l.24.41c.35-.05.69-.1 1.03-.17a26.6 26.6 0 0 0-.76-1.18 26.6 26.6 0 0 0-.86-1.15M12 17.79c1.14 0 2.31-.18 3.42-.55-.33-.59-.68-1.21-1.05-1.85-.76.05-1.55.05-2.37.05s-1.61 0-2.37-.05c-.37.64-.72 1.26-1.05 1.85 1.11.37 2.28.55 3.42.55z"/></svg>'
                    ></s-label>
                    
                    <s-label 
                        label="ASP.NET" 
                        icon='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.1 18.5h1.2l1.1-3.4h3.5l1.1 3.4h1.2l-3.5-9.9h-1l-3.6 9.9zm2-4.6l1.5-4.6 1.5 4.6h-3zm12.3 4.8c1.4 0 2.6-.7 3.1-2h.1v1.8h1v-7.3h-1v3.5c-.5-1.2-1.6-1.9-3.1-1.9-2.1 0-3.7 1.7-3.7 3.9 0 2.2 1.6 4 3.6 4zm.2-1c-1.4 0-2.6-1.2-2.6-2.9s1.2-2.9 2.6-2.9c1.4 0 2.6 1.1 2.6 2.9s-1.2 2.9-2.6 2.9z"/></svg>'
                    ></s-label>
                    
                    <s-label 
                        label="Flutter" 
                        icon='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.314 0L2.3 12 6 15.7 21.684.012h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/></svg>'
                    ></s-label>
                    
                    <s-label 
                        label="Servidores" 
                        icon='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 1h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 8h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zm0 8h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1zM6 4h2v2H6V4zm0 8h2v2H6v-2zm0 8h2v2H6v-2zm8-14h4v2h-4V4zm0 8h4v2h-4v-2zm0 8h4v2h-4v-2z"/></svg>'
                    ></s-label>
                </div>
            </div>
            <div class="project-category">
                <div class="projects-list">
                    <h2>Projects</h2>
                    <div class="projects">
                        <simple-card title="DeliveryApp">
                            Proyecto hecho para la empresa Vidrios y Aluminios Armando de manera interna
                            para la gestión de pedidos y entrega a domicilio de sus productos, con funciones
                            basicas para tal motivo.
                        </simple-card>
                        <simple-card title="ERPSphere">
                            Sistema de herramientas de uso general para empresas Medianas aun en desarrollo.
                        </simple-card>
                    </div>
                </div>
            </div>
        </div>
        `;
    }

    static styles = css`
        /* BASICS CSS */
        h2 {
            color: var(--green);
        }
        /* COMPONENTS CSS */
        .container-projects {
            display: grid;
            grid-template-columns: 30% 70%;
            border-radius: 12px;
            background-color: var(--dark-transparent);
        }
        
        .skills-category h2 {
            margin: 16px;
            text-align: left;
        }
        .skills {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin: 16px;
        }
        
        .project-category h2 {
            margin: 16px;
            text-align: left;
        }
        .projects {
            display: grid;
            grid-template-columns: 50% 50%;
        }
        
        simple-card {
            margin: 16px;
        }
                
        /* RESPONSIVE CSS */
        @media (max-width: 800px) {
            .container-projects {
                grid-template-columns: 100%;
            }
            .skills {
                grid-template-columns: 100%;
            }
            .projects {
                grid-template-columns: 100%;
            }
            .skills-category h2{
                text-align: center;
            }
            .project-category h2 {
                text-align: center;
            }
        }
    `;
}

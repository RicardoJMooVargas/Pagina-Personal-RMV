import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import "../Components/SimpleCard";
import "../Components/SubComponents/S-Label.ts";
@customElement("projects-page")
export class ProjectsPage extends LitElement {


    render() {
        return html`
        <div class="container-projects">
            <div class="skills-category">
                <h2>Skills</h2>
                <div class="skills">
                    <s-label></s-label>
                    <s-label></s-label>
                    <s-label></s-label>
                </div>
            </div>
            <div class="project-category">
                <div class="projects-list">
                    <h2>Projects</h2>
                    <div class="projects">
                        <simple-card>...</simple-card>
                        <simple-card>...</simple-card>
                        <simple-card>...</simple-card>
                        <simple-card>...</simple-card>
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
            margin: 16px;
            grid-template-columns: 50% 50%;
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


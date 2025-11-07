import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../../Components/SimpleCard.ts'; // Importar el componente SimpleCard

@customElement('about-page')
export class AboutPage extends LitElement {
    render() {
        return html`
            <div class="about-container">
                <div class="header-section">
                    <div class="title-wrapper">
                        <h1 class="main-title">Sobre Este Proyecto</h1>
                        <div class="title-underline"></div>
                    </div>
                    <p class="subtitle">Un Portafolio Web Moderno y Profesional</p>
                </div>

                <div class="content-grid">
                    <!-- Card de Descripción -->
                    <simple-card type="info" title="Stack Tecnológico" description="Esta página web está construida con tecnologías modernas y eficientes:" .items=${['⚡ <strong>Lit</strong> - Web Components modernos', '📘 <strong>TypeScript</strong> - Tipado estático', '⚙️ <strong>Vite</strong> - Build tool rápido', '🎨 <strong>CSS3</strong> - Diseño responsive']} icon='<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'></simple-card>

                    <!-- Card de Características -->
                    <simple-card type="info" title="Características" description="Un portafolio diseñado para mostrar habilidades y proyectos:" .items=${['🚀 Navegación SPA sin recargas', '📱 Diseño responsive', '♿ Accesible y semántico', '⚡ Optimizado para rendimiento']} icon='<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 6V12L16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'></simple-card>
                </div>

                <!-- GitHub Repository Card -->
                <simple-card type="repo" title="Github" description="El código fuente completo de este proyecto está disponible públicamente. Puedes explorarlo, clonarlo, estudiarlo o comentar y contribuir con mejoras." .stats=${[{icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" stroke-width="2"/><circle cx="12" cy="12" r="3" fill="currentColor"/></svg>', text: 'Open Source'}, {icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke-width="2"/><circle cx="12" cy="7" r="4" stroke-width="2"/></svg>', text: 'Comentarios de mejor'}, {icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke-width="2"/><polyline points="22 4 12 14.01 9 11.01" stroke-width="2"/></svg>', text: 'Actualizando contenido cada Tanto'}]} buttonText="Ver Repositorio en GitHub" buttonHref="https://github.com/RicardoJMooVargas/Pagina-Personal-RMV" icon='<svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>'></simple-card>
            </div>
        `;
    }

    static styles = css`
        :host {
            display: block;
            color: var(--light);
            animation: fadeIn 0.6s ease-in-out;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .about-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 20px;
        }

        /* Header Section */
        .header-section {
            text-align: center;
            margin-bottom: 60px;
        }

        .title-wrapper {
            display: inline-block;
            margin-bottom: 16px;
        }

        .main-title {
            font-size: 3rem;
            font-weight: 700;
            margin: 0;
            background: linear-gradient(135deg, var(--green), var(--primary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: slideDown 0.8s ease-out;
        }

        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .title-underline {
            height: 4px;
            background: linear-gradient(90deg, transparent, var(--green), transparent);
            margin-top: 12px;
            border-radius: 2px;
            animation: expandWidth 1s ease-out;
        }

        @keyframes expandWidth {
            from {
                width: 0;
            }
            to {
                width: 100%;
            }
        }

        .subtitle {
            font-size: 1.3rem;
            color: var(--light);
            opacity: 0.8;
            margin: 0;
        }

        /* Content Grid */
        .content-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin-bottom: 60px;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .content-grid {
                grid-template-columns: 1fr;
            }
        }
    `;
}

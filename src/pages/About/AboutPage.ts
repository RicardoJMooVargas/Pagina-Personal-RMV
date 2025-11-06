import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

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
                    <div class="info-card">
                        <div class="card-icon">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <h2>Stack Tecnológico</h2>
                        <p>
                            Esta página web está construida con tecnologías modernas y eficientes:
                        </p>
                        <ul class="tech-list">
                            <li><span class="tech-bullet">⚡</span> <strong>Lit</strong> - Web Components modernos</li>
                            <li><span class="tech-bullet">📘</span> <strong>TypeScript</strong> - Tipado estático</li>
                            <li><span class="tech-bullet">⚙️</span> <strong>Vite</strong> - Build tool rápido</li>
                            <li><span class="tech-bullet">🎨</span> <strong>CSS3</strong> - Diseño responsive</li>
                        </ul>
                    </div>

                    <!-- Card de Características -->
                    <div class="info-card">
                        <div class="card-icon">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 6V12L16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <h2>Características</h2>
                        <p>
                            Un portafolio diseñado para mostrar habilidades y proyectos:
                        </p>
                        <ul class="tech-list">
                            <li><span class="tech-bullet">🚀</span> Navegación SPA sin recargas</li>
                            <li><span class="tech-bullet">📱</span> Diseño responsive</li>
                            <li><span class="tech-bullet">♿</span> Accesible y semántico</li>
                            <li><span class="tech-bullet">⚡</span> Optimizado para rendimiento</li>
                        </ul>
                    </div>
                </div>

                <!-- GitHub Repository Card -->
                <div class="repo-card">
                    <div class="repo-header">
                        <svg class="github-icon" width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <h2>Github</h2>
                        <p class="repo-description">
                            El código fuente completo de este proyecto está disponible públicamente.
                            Puedes explorarlo, clonarlo, estudiarlo o comentar y contribuir con mejoras.
                        </p>
                    </div>
                    
                    <div class="repo-stats">
                        <div class="stat-item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <circle cx="12" cy="12" r="10" stroke-width="2"/>
                                <circle cx="12" cy="12" r="3" fill="currentColor"/>
                            </svg>
                            <span>Open Source</span>
                        </div>
                        <div class="stat-item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke-width="2"/>
                                <circle cx="12" cy="7" r="4" stroke-width="2"/>
                            </svg>
                            <span>Comentarios de mejor</span>
                        </div>
                        <div class="stat-item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke-width="2"/>
                                <polyline points="22 4 12 14.01 9 11.01" stroke-width="2"/>
                            </svg>
                            <span>Actualizando contenido cada Tanto</span>
                        </div>
                    </div>

                    <a href="https://github.com/RicardoJMooVargas/Pagina-Personal-RMV" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       class="repo-button">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>x
                        <span>Ver Repositorio en GitHub</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M7 17L17 7" stroke-width="2" stroke-linecap="round"/>
                            <path d="M7 7h10v10" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                </div>
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
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
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

        /* GitHub Repository Card */
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
        }

        .repo-card h2 {
            font-size: 2.2rem;
            margin: 0 0 16px 0;
            color: var(--light);
        }

        .repo-description {
            font-size: 1.1rem;
            align-items: center;
            gap: 12px;
            color: var(--green);
            font-weight: 600;
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

        .repo-button:active {
            transform: translateY(-2px);
        }

        .repo-footer {
            margin-top: 40px;
            padding-top: 30px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            text-align: center;
        }

        .repo-footer p {
            line-height: 1.8;
            color: var(--light);
            opacity: 0.8;
        }

        /* Footer Info */
        .footer-info {
            text-align: center;
            padding: 30px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 12px;
        }

        .footer-info p {
            margin: 0;
            font-size: 1.1rem;
            opacity: 0.9;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .main-title {
            }

            color: var(--light);
            .repo-card {
                padding: 32px 24px;
            }

            .repo-stats {
                flex-direction: column;
                align-items: center;
                gap: 20px;
            }

            .content-grid {
                grid-template-columns: 1fr;
            }
        }
    `;
}


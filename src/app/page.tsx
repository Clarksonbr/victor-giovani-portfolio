"use client";

import { useSyncExternalStore } from "react";
import type { ReactNode } from "react";

type Language = "pt" | "en";

const profileLinks = {
  github: "https://github.com/Clarksonbr",
  linkedin: "https://www.linkedin.com/in/victor-giovani-b00b58271/",
  email: "vipecefa16@gmail.com",
  whatsapp: ""
};

const translations = {
  pt: {
    nav: {
      method: "Método",
      projects: "Projetos",
      deliveries: "Entregas",
      contact: "Contato"
    },
    buttons: {
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email",
      whatsapp: "WhatsApp",
      soon: "em breve",
      viewDeploy: "Ver deploy",
      deploySoon: "Deploy em breve",
      githubSoon: "GitHub em breve"
    },
    hero: {
      badge: "Web Developer | AI Automation Assistant",
      title: "Desenvolvedor Web para IA, automações, integrações e MVPs",
      subtitle:
        "Construo soluções simples e funcionais usando IA em planejamento, arquitetura, código, debugging, testes e documentação, sempre com revisão humana, validação prática e foco no problema real. Aberto a oportunidades CLT, PJ, remotas ou híbridas.",
      highlight:
        "Método AI-first: IA acelera o processo, mas eu valido, testo, ajusto e tomo as decisões.",
      cards: [
        ["01", "Entender", "Contexto, objetivo, restrições e usuário."],
        ["02", "Construir", "Código, integrações, automações e ajustes."],
        ["03", "Validar", "Testes manuais, revisão e decisão humana."]
      ]
    },
    about: {
      eyebrow: "Sobre mim",
      title: "Júnior em evolução, com prática real e vontade de contribuir",
      description:
        "Tenho mais de 200 horas práticas construindo, testando, corrigindo e organizando projetos. Uso IA para acelerar o desenvolvimento, mas meu foco é entender o problema, validar as respostas e entregar algo funcional.",
      cards: [
        "Uso IA em planejamento, arquitetura, código, debugging, testes, documentação e refatoração.",
        "Tenho facilidade alta para aprender ferramentas novas, adaptar processos e transformar instruções em entregas práticas.",
        "Estou aberto a atuar em desenvolvimento, automações, IA, integrações, low-code/no-code, suporte técnico e implementação.",
        "Quero entrar em um ambiente onde eu possa aprender com o time, contribuir com entregas reais e evoluir com responsabilidade."
      ]
    },
    method: {
      eyebrow: "Método AI-first",
      title: "Um fluxo de trabalho assistido por IA, com critério humano",
      description:
        "Meu método usa IA para ganhar velocidade e clareza, mas cada etapa passa por revisão, teste e decisão humana. A ferramenta ajuda a produzir caminhos; eu valido se eles fazem sentido.",
      highlight: "IA acelera o processo, mas eu valido, testo, ajusto e tomo as decisões.",
      steps: [
        {
          title: "Entender o problema",
          description: "Mapear contexto, objetivo, restrições e resultado esperado."
        },
        {
          title: "Planejar com IA",
          description: "Usar IA para organizar ideias, levantar caminhos e antecipar riscos."
        },
        {
          title: "Estruturar a solução",
          description: "Definir telas, dados, componentes, integrações e prioridades."
        },
        {
          title: "Implementar com apoio de IA",
          description: "Acelerar código, ajustes e alternativas sem abrir mão da revisão."
        },
        {
          title: "Revisar o código",
          description: "Ler a solução, checar consistência e corrigir pontos frágeis."
        },
        {
          title: "Testar manualmente",
          description: "Validar fluxo, estados, responsividade e comportamento real."
        },
        {
          title: "Documentar",
          description: "Registrar objetivo, setup, decisões e próximos passos."
        },
        {
          title: "Refatorar",
          description: "Simplificar o que ficou confuso e remover complexidade desnecessária."
        },
        {
          title: "Validar valor real",
          description: "Conferir se a entrega resolve o problema que precisava resolver."
        }
      ]
    },
    projectsSection: {
      eyebrow: "Projetos",
      title: "Projetos com foco em produto, automação e aplicação real de IA",
      description:
        "Os projetos mostram minha direção técnica: construir ferramentas simples, documentadas e úteis para conteúdo, relacionamento com clientes e automações.",
      labels: {
        problem: "Problema",
        solution: "Solução",
        features: "Funcionalidades",
        demonstrates: "Demonstra"
      }
    },
    projects: [
      {
        title: "AI Social Media Studio",
        problem:
          "Pequenos negócios e criadores perdem tempo transformando ideias soltas em posts, legendas e chamadas consistentes.",
        description:
          "Aplicação web para social medias e pequenas empresas criarem briefings, legendas, ideias de arte, CTAs, hashtags e variações para stories com um fluxo AI-first. A primeira versão usa geração mock estruturada, preparada para futura integração com API real.",
        features: [
          "Cadastro de clientes e segmentos",
          "Geração de ideias, legendas e CTAs",
          "Organização por tom de voz e campanha"
        ],
        demonstrates:
          "Demonstra uso de Next.js, modelagem simples de produto, prompts aplicados e organização de conteúdo por contexto.",
        status: "MVP publicado",
        stack: ["Next.js", "TypeScript", "Tailwind", "IA mock"],
        githubUrl: "https://github.com/Clarksonbr/ai-social-media-studio",
        deployUrl: "https://ai-social-media-studio.vercel.app/",
        featured: true
      },
      {
        title: "AI CRM",
        problem:
          "Pequenas empresas precisam acompanhar clientes e próximas ações sem depender de planilhas confusas.",
        description:
          "Mini CRM para pequenas empresas organizarem clientes, status de atendimento, próximas ações, filtros e mensagens sugeridas com IA simulada. O projeto demonstra CRUD, dashboard, persistência local com localStorage, filtros e lógica de negócio.",
        features: [
          "Lista de clientes por status",
          "Registro de próximas ações",
          "Sugestões de mensagens com IA"
        ],
        demonstrates:
          "Demonstra CRUD, organização de dados, estados de negócio e uso de IA para apoiar comunicação comercial.",
        status: "MVP publicado",
        stack: ["Next.js", "TypeScript", "localStorage", "IA mock"],
        githubUrl: "https://github.com/Clarksonbr/ai-crm",
        deployUrl: "https://ai-crm-ebon.vercel.app/",
        featured: true
      },
      {
        title: "AI Automation Hub",
        problem:
          "Automações ficam espalhadas entre ferramentas, scripts e anotações, dificultando manutenção e testes.",
        description:
          "Central operacional para pequenas empresas documentarem, acompanharem e testarem automações internas. O projeto demonstra CRUD de automações, dashboard operacional, filtros, logs simulados, checklist de testes, webhooks simulados, persistência local com localStorage e IA mock para análise de riscos e melhorias.",
        features: [
          "Catálogo de automações",
          "Documentação de fluxos e webhooks",
          "Checklist de testes e manutenção"
        ],
        demonstrates:
          "Demonstra organização de processos, pensamento de integração, documentação técnica, simulação de webhooks, logs operacionais e análise com IA mock.",
        status: "MVP publicado",
        stack: ["Next.js", "TypeScript", "localStorage", "IA mock"],
        githubUrl: "https://github.com/Clarksonbr/ai-automation-hub",
        deployUrl: "https://ai-automation-hub-pi.vercel.app/",
        featured: true
      }
    ],
    services: {
      eyebrow: "O que posso fazer hoje",
      title: "Entregas práticas para times, pequenas empresas e produtos digitais",
      description:
        "Meu foco atual é ajudar a tirar ideias do papel, organizar processos e criar soluções simples que possam ser testadas, usadas e melhoradas.",
      items: [
        "Criar landing pages objetivas e responsivas",
        "Montar dashboards simples para acompanhamento",
        "Criar automações com IA para tarefas repetitivas",
        "Integrar APIs e organizar fluxos de dados",
        "Construir MVPs para validar ideias rapidamente",
        "Documentar processos, projetos e rotinas técnicas",
        "Apoiar suporte técnico e implementação de ferramentas",
        "Melhorar fluxos manuais com tecnologia e automação"
      ]
    },
    skills: {
      eyebrow: "Skills",
      title: "Habilidades técnicas e profissionais",
      description:
        "Base em desenvolvimento web, dados, automações e uso prático de IA no processo de construção.",
      groups: [
        {
          title: "Desenvolvimento",
          skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind"]
        },
        {
          title: "Back-end e dados",
          skills: ["Node.js", "APIs REST", "Supabase", "PostgreSQL", "Prisma"]
        },
        {
          title: "IA e automações",
          skills: ["OpenAI API", "Codex", "ChatGPT", "n8n", "Prompting", "Debugging com IA"]
        },
        {
          title: "Profissional",
          skills: [
            "Aprendizado rápido",
            "Adaptação",
            "Comunicação clara",
            "Resolução de problemas",
            "Documentação",
            "Testes manuais"
          ]
        }
      ]
    },
    opportunities: {
      eyebrow: "Oportunidades que busco",
      title: "Aberto a vagas júnior, automação, implementação e suporte técnico",
      description:
        "Busco uma oportunidade onde eu possa aprender com consistência, contribuir com entregas práticas e crescer em desenvolvimento, IA e operações técnicas.",
      items: [
        "Desenvolvedor Júnior",
        "AI Automation Assistant",
        "Analista de Automação",
        "Desenvolvedor Low-code/No-code",
        "Suporte Técnico N2",
        "Implementation Specialist",
        "Estágio ou vaga júnior em tecnologia",
        "CLT, PJ, remoto ou híbrido"
      ]
    },
    contact: {
      eyebrow: "Contato",
      title: "Vamos conversar sobre oportunidades e projetos",
      description:
        "Se você procura alguém com aprendizado rápido, alta adaptação e domínio prático de IA para construir soluções simples e funcionais, vamos conversar."
    }
  },
  en: {
    nav: {
      method: "Method",
      projects: "Projects",
      deliveries: "What I Do",
      contact: "Contact"
    },
    buttons: {
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email",
      whatsapp: "WhatsApp",
      soon: "soon",
      viewDeploy: "View deploy",
      deploySoon: "Deploy soon",
      githubSoon: "GitHub soon"
    },
    hero: {
      badge: "Web Developer | AI Automation Assistant",
      title: "Web Developer focused on AI, automations, integrations and MVPs",
      subtitle:
        "I build simple, functional solutions using AI across planning, architecture, code, debugging, testing and documentation, always with human review, practical validation and a clear focus on the real problem. Open to full-time, contract, remote or hybrid opportunities.",
      highlight:
        "AI-first method: AI speeds up the process, but I validate, test, adjust and make the decisions.",
      cards: [
        ["01", "Understand", "Context, goal, constraints and user needs."],
        ["02", "Build", "Code, integrations, automations and adjustments."],
        ["03", "Validate", "Manual testing, review and human decision-making."]
      ]
    },
    about: {
      eyebrow: "About me",
      title: "Junior profile in progress, with hands-on practice and willingness to contribute",
      description:
        "I have 200+ hours of hands-on practice building, testing, fixing and organizing projects. I use AI to speed up development, but my focus is understanding the problem, validating the answers and shipping something useful.",
      cards: [
        "I use AI in planning, architecture, code, debugging, testing, documentation and refactoring.",
        "I learn new tools quickly, adapt processes and turn instructions into practical deliverables.",
        "I am open to work in web development, automations, AI, integrations, low-code/no-code, technical support and implementation.",
        "I want to join an environment where I can learn from the team, contribute to real deliveries and grow responsibly."
      ]
    },
    method: {
      eyebrow: "AI-first method",
      title: "An AI-assisted workflow with human judgment",
      description:
        "My method uses AI to gain speed and clarity, but every step goes through review, testing and human decision-making. The tool helps generate paths; I validate whether they make sense.",
      highlight: "AI speeds up the process, but I validate, test, adjust and make the decisions.",
      steps: [
        {
          title: "Understand the problem",
          description: "Map context, goals, constraints and expected outcome."
        },
        {
          title: "Plan with AI",
          description: "Use AI to organize ideas, explore paths and anticipate risks."
        },
        {
          title: "Structure the solution",
          description: "Define screens, data, components, integrations and priorities."
        },
        {
          title: "Implement with AI support",
          description: "Speed up code, adjustments and alternatives without skipping review."
        },
        {
          title: "Review the code",
          description: "Read the solution, check consistency and fix weak points."
        },
        {
          title: "Test manually",
          description: "Validate flows, states, responsiveness and real behavior."
        },
        {
          title: "Document",
          description: "Record goals, setup, decisions and next steps."
        },
        {
          title: "Refactor",
          description: "Simplify what became confusing and remove unnecessary complexity."
        },
        {
          title: "Validate real value",
          description: "Check whether the delivery solves the problem it was meant to solve."
        }
      ]
    },
    projectsSection: {
      eyebrow: "Projects",
      title: "Projects focused on product thinking, automation and practical AI use",
      description:
        "These projects show my technical direction: building simple, documented and useful tools for content, customer management and automations.",
      labels: {
        problem: "Problem",
        solution: "Solution",
        features: "Features",
        demonstrates: "Demonstrates"
      }
    },
    projects: [
      {
        title: "AI Social Media Studio",
        problem:
          "Small businesses and creators spend too much time turning loose ideas into consistent posts, captions and calls to action.",
        description:
          "Web application for social media professionals and small businesses to create briefings, captions, visual ideas, CTAs, hashtags and story variations with an AI-first workflow. The first version uses structured mock generation and is prepared for future integration with a real API.",
        features: [
          "Client and segment setup",
          "Idea, caption and CTA generation",
          "Organization by tone of voice and campaign"
        ],
        demonstrates:
          "Demonstrates Next.js usage, simple product modeling, applied prompts and context-based content organization.",
        status: "MVP published",
        stack: ["Next.js", "TypeScript", "Tailwind", "AI mock"],
        githubUrl: "https://github.com/Clarksonbr/ai-social-media-studio",
        deployUrl: "https://ai-social-media-studio.vercel.app/",
        featured: true
      },
      {
        title: "AI CRM",
        problem:
          "Small businesses need to track customers and next actions without relying on messy spreadsheets.",
        description:
          "Mini CRM for small businesses to organize customers, service status, next actions, filters and AI-simulated message suggestions. The project demonstrates CRUD, dashboard, local persistence with localStorage, filters and business logic.",
        features: [
          "Customer list by status",
          "Next-action tracking",
          "AI-simulated message suggestions"
        ],
        demonstrates:
          "Demonstrates CRUD, data organization, business states and AI support for commercial communication.",
        status: "MVP published",
        stack: ["Next.js", "TypeScript", "localStorage", "AI mock"],
        githubUrl: "https://github.com/Clarksonbr/ai-crm",
        deployUrl: "https://ai-crm-ebon.vercel.app/",
        featured: true
      },
      {
        title: "AI Automation Hub",
        problem:
          "Automations often get scattered across tools, scripts and notes, making maintenance and testing harder.",
        description:
          "Operational hub for small businesses to document, track and test internal automations. The project demonstrates automation CRUD, operational dashboard, filters, simulated logs, testing checklist, simulated webhooks, local persistence with localStorage and AI mock for risk and improvement analysis.",
        features: [
          "Automation catalog",
          "Flow and webhook documentation",
          "Testing and maintenance checklist"
        ],
        demonstrates:
          "Demonstrates process organization, integration thinking, technical documentation, webhook simulation, operational logs and AI mock analysis.",
        status: "MVP published",
        stack: ["Next.js", "TypeScript", "localStorage", "AI mock"],
        githubUrl: "https://github.com/Clarksonbr/ai-automation-hub",
        deployUrl: "https://ai-automation-hub-pi.vercel.app/",
        featured: true
      }
    ],
    services: {
      eyebrow: "What I can do today",
      title: "Practical deliveries for teams, small businesses and digital products",
      description:
        "My current focus is helping turn ideas into working versions, organize processes and create simple solutions that can be tested, used and improved.",
      items: [
        "Build clear, responsive landing pages",
        "Create simple tracking dashboards",
        "Build AI-assisted automations for repetitive tasks",
        "Integrate APIs and organize data flows",
        "Build MVPs to validate ideas quickly",
        "Document processes, projects and technical routines",
        "Support technical implementation and tool setup",
        "Improve manual workflows with technology and automation"
      ]
    },
    skills: {
      eyebrow: "Skills",
      title: "Technical and professional skills",
      description:
        "Foundation in web development, data, automations and practical AI use in the building process.",
      groups: [
        {
          title: "Development",
          skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind"]
        },
        {
          title: "Back-end and data",
          skills: ["Node.js", "REST APIs", "Supabase", "PostgreSQL", "Prisma"]
        },
        {
          title: "AI and automations",
          skills: ["OpenAI API", "Codex", "ChatGPT", "n8n", "Prompting", "AI debugging"]
        },
        {
          title: "Professional",
          skills: [
            "Fast learning",
            "Adaptability",
            "Clear communication",
            "Problem solving",
            "Documentation",
            "Manual testing"
          ]
        }
      ]
    },
    opportunities: {
      eyebrow: "Opportunities I am looking for",
      title: "Open to junior roles, automation, implementation and technical support",
      description:
        "I am looking for an opportunity where I can learn consistently, contribute with practical deliveries and grow in development, AI and technical operations.",
      items: [
        "Junior Web Developer",
        "AI Automation Assistant",
        "Automation Analyst",
        "Low-code/No-code Developer",
        "Technical Support N2",
        "Implementation Specialist",
        "Internship or junior tech role",
        "Full-time, contract, remote or hybrid"
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk about opportunities and projects",
      description:
        "If you are looking for someone with fast learning, strong adaptability and practical AI skills to build simple and functional solutions, let's talk."
    }
  }
} as const;

function isLanguage(value: string | null): value is Language {
  return value === "pt" || value === "en";
}

function getStoredLanguage(): Language {
  if (typeof window === "undefined") {
    return "pt";
  }

  const savedLanguage = window.localStorage.getItem("portfolio-language");

  return isLanguage(savedLanguage) ? savedLanguage : "pt";
}

function subscribeToLanguageChange(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener("portfolio-language-change", onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener("portfolio-language-change", onStoreChange);
  };
}

function SectionHeader({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-teal-300">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

function ContactButton({
  href,
  children,
  variant = "primary",
  soonLabel
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  soonLabel: string;
}) {
  if (!href) {
    return <DisabledButton>{children} {soonLabel}</DisabledButton>;
  }

  const className =
    variant === "primary"
      ? "border-teal-300/60 bg-teal-300 text-slate-950 hover:bg-teal-200"
      : "border-slate-600/70 bg-white/5 text-slate-100 hover:border-slate-400 hover:bg-white/10";
  const resolvedHref = href.includes("@") && !href.startsWith("mailto:") ? `mailto:${href}` : href;

  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center rounded-md border px-5 py-3 text-sm font-semibold transition ${className}`}
      href={resolvedHref}
      target={resolvedHref.startsWith("http") ? "_blank" : undefined}
      rel={resolvedHref.startsWith("http") ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

function DisabledButton({ children }: { children: ReactNode }) {
  return (
    <button
      className="inline-flex min-h-11 cursor-not-allowed items-center justify-center rounded-md border border-slate-700 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-slate-500"
      disabled
    >
      {children}
    </button>
  );
}

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-line bg-white/[0.04] px-3 py-2 text-sm text-slate-200">
      {children}
    </span>
  );
}

function ProjectCard({
  project,
  labels,
  buttons
}: {
  project: (typeof translations)[Language]["projects"][number];
  labels: (typeof translations)[Language]["projectsSection"]["labels"];
  buttons: (typeof translations)[Language]["buttons"];
}) {
  return (
    <article
      className={`flex h-full flex-col rounded-lg border p-6 shadow-soft ${
        project.featured
          ? "border-teal-300/45 bg-teal-300/[0.06]"
          : "border-line bg-slate-950/42"
      }`}
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <span className="shrink-0 rounded-md border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
          {project.status}
        </span>
      </div>

      <div className="space-y-5">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-300">
            {labels.problem}
          </p>
          <p className="leading-7 text-slate-300">{project.problem}</p>
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-300">
            {labels.solution}
          </p>
          <p className="leading-7 text-slate-300">{project.description}</p>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-300">
            {labels.features}
          </p>
          <ul className="space-y-2 text-sm leading-6 text-slate-300">
            {project.features.map((feature) => (
              <li className="flex gap-2" key={feature}>
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-300">
            {labels.demonstrates}
          </p>
          <p className="text-sm leading-6 text-slate-300">{project.demonstrates}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            className="rounded-md bg-slate-800 px-2.5 py-1.5 text-xs font-medium text-slate-200"
            key={item}
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        {project.githubUrl ? (
          <a
            className="inline-flex min-h-10 items-center justify-center rounded-md border border-slate-600/70 bg-white/5 px-3 text-sm font-semibold text-slate-100 transition hover:border-slate-400 hover:bg-white/10"
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            {buttons.github}
          </a>
        ) : (
          <button
            className="min-h-10 cursor-not-allowed rounded-md border border-slate-700 bg-slate-900 px-3 text-sm font-semibold text-slate-500"
            disabled
          >
            {buttons.githubSoon}
          </button>
        )}
        {project.deployUrl ? (
          <a
            className="inline-flex min-h-10 items-center justify-center rounded-md border border-teal-300/60 bg-teal-300 px-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-200"
            href={project.deployUrl}
            target="_blank"
            rel="noreferrer"
          >
            {buttons.viewDeploy}
          </a>
        ) : (
          <button
            className="min-h-10 cursor-not-allowed rounded-md border border-slate-700 bg-slate-900 px-3 text-sm font-semibold text-slate-500"
            disabled
          >
            {buttons.deploySoon}
          </button>
        )}
      </div>
    </article>
  );
}

export default function Home() {
  const language = useSyncExternalStore<Language>(
    subscribeToLanguageChange,
    getStoredLanguage,
    () => "pt"
  );
  const t = translations[language];

  function changeLanguage(nextLanguage: Language) {
    window.localStorage.setItem("portfolio-language", nextLanguage);
    window.dispatchEvent(new Event("portfolio-language-change"));
  }

  return (
    <main className="overflow-hidden">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6 sm:px-8">
        <a className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-200" href="#top">
          AI Builder
        </a>
        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a className="transition hover:text-white" href="#metodo">
              {t.nav.method}
            </a>
            <a className="transition hover:text-white" href="#projetos">
              {t.nav.projects}
            </a>
            <a className="transition hover:text-white" href="#posso-fazer">
              {t.nav.deliveries}
            </a>
            <a className="transition hover:text-white" href="#contato">
              {t.nav.contact}
            </a>
          </nav>
          <div className="grid grid-cols-2 rounded-md border border-line bg-white/[0.04] p-1">
            {(["pt", "en"] as const).map((item) => (
              <button
                className={`min-h-8 rounded px-3 text-xs font-semibold transition ${
                  language === item
                    ? "bg-teal-300 text-slate-950"
                    : "text-slate-300 hover:text-white"
                }`}
                key={item}
                onClick={() => changeLanguage(item)}
                type="button"
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      <section className="mx-auto grid min-h-[calc(100vh-88px)] max-w-6xl items-center gap-12 px-5 pb-20 pt-8 sm:px-8 lg:grid-cols-[1.08fr_0.92fr]">
        <div id="top">
          <p className="mb-5 inline-flex rounded-md border border-teal-300/25 bg-teal-300/10 px-3 py-2 text-sm font-semibold text-teal-200">
            {t.hero.badge}
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{t.hero.subtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ContactButton href={profileLinks.github} soonLabel={t.buttons.soon}>
              {t.buttons.github}
            </ContactButton>
            <ContactButton href={profileLinks.linkedin} soonLabel={t.buttons.soon} variant="secondary">
              {t.buttons.linkedin}
            </ContactButton>
            <ContactButton href={profileLinks.email} soonLabel={t.buttons.soon} variant="secondary">
              {t.buttons.email}
            </ContactButton>
          </div>
          <p className="mt-8 max-w-2xl rounded-lg border border-amber-300/25 bg-amber-300/10 p-4 text-sm leading-7 text-amber-100">
            {t.hero.highlight}
          </p>
        </div>

        <div className="relative">
          <div className="rounded-lg border border-line bg-slate-950/60 p-5 shadow-soft backdrop-blur">
            <div className="mb-5 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-amber-300" />
              <span className="h-3 w-3 rounded-full bg-teal-300" />
            </div>
            <div className="space-y-4">
              {t.hero.cards.map(([number, title, text]) => (
                <div className="rounded-md border border-line bg-white/[0.035] p-4" key={number}>
                  <div className="mb-2 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-md bg-teal-300 text-sm font-bold text-slate-950">
                      {number}
                    </span>
                    <h3 className="font-semibold text-white">{title}</h3>
                  </div>
                  <p className="text-sm leading-6 text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-slate-950/30 px-5 py-20 sm:px-8" id="sobre">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow={t.about.eyebrow}
            title={t.about.title}
            description={t.about.description}
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {t.about.cards.map((item) => (
              <p
                className="rounded-lg border border-line bg-white/[0.04] p-5 leading-7 text-slate-300"
                key={item}
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8" id="metodo">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow={t.method.eyebrow}
            title={t.method.title}
            description={t.method.description}
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {t.method.steps.map((step, index) => (
              <div className="rounded-lg border border-line bg-slate-950/44 p-5" key={step.title}>
                <p className="mb-4 text-sm font-semibold text-teal-300">
                  {language === "pt" ? "Etapa" : "Step"} {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 rounded-lg border border-amber-300/25 bg-amber-300/10 p-5 leading-7 text-amber-100">
            {t.method.highlight}
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-slate-950/30 px-5 py-20 sm:px-8" id="projetos">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow={t.projectsSection.eyebrow}
            title={t.projectsSection.title}
            description={t.projectsSection.description}
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {t.projects.map((project) => (
              <ProjectCard
                buttons={t.buttons}
                key={project.title}
                labels={t.projectsSection.labels}
                project={project}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8" id="posso-fazer">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow={t.services.eyebrow}
            title={t.services.title}
            description={t.services.description}
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {t.services.items.map((service) => (
              <div
                className="rounded-lg border border-line bg-white/[0.04] p-5 text-sm leading-6 text-slate-200"
                key={service}
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-slate-950/30 px-5 py-20 sm:px-8" id="skills">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow={t.skills.eyebrow}
            title={t.skills.title}
            description={t.skills.description}
          />
          <div className="grid gap-5 md:grid-cols-2">
            {t.skills.groups.map((group) => (
              <div className="rounded-lg border border-line bg-white/[0.04] p-6" key={group.title}>
                <h3 className="mb-4 text-xl font-semibold text-white">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Pill key={skill}>{skill}</Pill>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8" id="oportunidades">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow={t.opportunities.eyebrow}
            title={t.opportunities.title}
            description={t.opportunities.description}
          />
          <div className="flex flex-wrap gap-3">
            {t.opportunities.items.map((item) => (
              <Pill key={item}>{item}</Pill>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line px-5 py-20 sm:px-8" id="contato">
        <div className="mx-auto max-w-6xl rounded-lg border border-line bg-slate-950/55 p-6 shadow-soft sm:p-10">
          <SectionHeader
            eyebrow={t.contact.eyebrow}
            title={t.contact.title}
            description={t.contact.description}
          />
          <div className="flex flex-col gap-3 sm:flex-row">
            <ContactButton href={profileLinks.linkedin} soonLabel={t.buttons.soon}>
              {t.buttons.linkedin}
            </ContactButton>
            <ContactButton href={profileLinks.github} soonLabel={t.buttons.soon} variant="secondary">
              {t.buttons.github}
            </ContactButton>
            <ContactButton href={profileLinks.email} soonLabel={t.buttons.soon} variant="secondary">
              {t.buttons.email}
            </ContactButton>
            <ContactButton href={profileLinks.whatsapp} soonLabel={t.buttons.soon} variant="secondary">
              {t.buttons.whatsapp}
            </ContactButton>
          </div>
        </div>
      </section>
    </main>
  );
}

const profileLinks = {
  github: "https://github.com/Clarksonbr",
  linkedin: "https://www.linkedin.com/in/victor-giovani-b00b58271/",
  email: "vipecefa16@gmail.com",
  whatsapp: ""
};

const aiFlow = [
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
];

const projects = [
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
    stack: ["Next.js", "TypeScript", "Tailwind", "IA"],
    githubUrl: "https://github.com/Clarksonbr/ai-social-media-studio",
    deployUrl: "https://ai-social-media-studio.vercel.app/",
    featured: true
  },
  {
    title: "AI CRM",
    problem:
      "Pequenas empresas precisam acompanhar clientes e próximas ações sem depender de planilhas confusas.",
    description:
      "Mini CRM para controlar clientes, status, próximas ações e mensagens sugeridas por IA.",
    features: [
      "Lista de clientes por status",
      "Registro de próximas ações",
      "Sugestões de mensagens com IA"
    ],
    demonstrates:
      "Demonstra CRUD, organização de dados, estados de negócio e uso de IA para apoiar comunicação comercial.",
    status: "Planejado",
    stack: ["Next.js", "Supabase", "TypeScript", "IA"],
    githubUrl: "",
    deployUrl: "",
    featured: false
  },
  {
    title: "AI Automation Hub",
    problem:
      "Automações ficam espalhadas entre ferramentas, scripts e anotações, dificultando manutenção e testes.",
    description:
      "Central simples para documentar, acompanhar e testar automações com IA, webhooks e integrações.",
    features: [
      "Catálogo de automações",
      "Documentação de fluxos e webhooks",
      "Checklist de testes e manutenção"
    ],
    demonstrates:
      "Demonstra pensamento de integração, documentação técnica, APIs, webhooks e organização de processos automatizados.",
    status: "Planejado",
    stack: ["Next.js", "n8n", "APIs", "IA"],
    githubUrl: "",
    deployUrl: "",
    featured: false
  }
];

const practicalServices = [
  "Criar landing pages objetivas e responsivas",
  "Montar dashboards simples para acompanhamento",
  "Criar automações com IA para tarefas repetitivas",
  "Integrar APIs e organizar fluxos de dados",
  "Construir MVPs para validar ideias rapidamente",
  "Documentar processos, projetos e rotinas técnicas",
  "Apoiar suporte técnico e implementação de ferramentas",
  "Melhorar fluxos manuais com tecnologia e automação"
];

const skillGroups = [
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
];

const opportunities = [
  "Desenvolvedor Júnior",
  "AI Automation Builder",
  "Analista de Automação",
  "Desenvolvedor Low-code/No-code",
  "Suporte Técnico N2",
  "Implementation Specialist",
  "Estágio ou vaga júnior em tecnologia",
  "CLT, PJ, remoto ou híbrido"
];

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
  variant = "primary"
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  if (!href) {
    return <DisabledButton>{children} em breve</DisabledButton>;
  }

  const className =
    variant === "primary"
      ? "border-teal-300/60 bg-teal-300 text-slate-950 hover:bg-teal-200"
      : "border-slate-600/70 bg-white/5 text-slate-100 hover:border-slate-400 hover:bg-white/10";

  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center rounded-md border px-5 py-3 text-sm font-semibold transition ${className}`}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

function DisabledButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="inline-flex min-h-11 cursor-not-allowed items-center justify-center rounded-md border border-slate-700 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-slate-500"
      disabled
    >
      {children}
    </button>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-line bg-white/[0.04] px-3 py-2 text-sm text-slate-200">
      {children}
    </span>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
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
            Problema
          </p>
          <p className="leading-7 text-slate-300">{project.problem}</p>
        </div>

        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-300">
            Solucao
          </p>
          <p className="leading-7 text-slate-300">{project.description}</p>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-300">
            Funcionalidades
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
            Demonstra
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
            GitHub
          </a>
        ) : (
          <button
            className="min-h-10 cursor-not-allowed rounded-md border border-slate-700 bg-slate-900 px-3 text-sm font-semibold text-slate-500"
            disabled
          >
            GitHub em breve
          </button>
        )}
        {project.deployUrl ? (
          <a
            className="inline-flex min-h-10 items-center justify-center rounded-md border border-teal-300/60 bg-teal-300 px-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-200"
            href={project.deployUrl}
            target="_blank"
            rel="noreferrer"
          >
            Ver deploy
          </a>
        ) : (
          <button
            className="min-h-10 cursor-not-allowed rounded-md border border-slate-700 bg-slate-900 px-3 text-sm font-semibold text-slate-500"
            disabled
          >
            Deploy em breve
          </button>
        )}
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6 sm:px-8">
        <a className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-200" href="#top">
          AI Builder
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a className="transition hover:text-white" href="#metodo">
            Método
          </a>
          <a className="transition hover:text-white" href="#projetos">
            Projetos
          </a>
          <a className="transition hover:text-white" href="#posso-fazer">
            Entregas
          </a>
          <a className="transition hover:text-white" href="#contato">
            Contato
          </a>
        </nav>
      </header>

      <section className="mx-auto grid min-h-[calc(100vh-88px)] max-w-6xl items-center gap-12 px-5 pb-20 pt-8 sm:px-8 lg:grid-cols-[1.08fr_0.92fr]">
        <div id="top">
          <p className="mb-5 inline-flex rounded-md border border-teal-300/25 bg-teal-300/10 px-3 py-2 text-sm font-semibold text-teal-200">
            Junior Developer | AI Automation Builder
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Desenvolvedor Júnior para IA, automações, integrações e MVPs
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Construo soluções simples e funcionais usando IA em planejamento, arquitetura, código,
            debugging, testes e documentação, sempre com revisão humana, validação prática e foco no
            problema real. Aberto a oportunidades CLT, PJ, remotas ou híbridas.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ContactButton href={profileLinks.github}>GitHub</ContactButton>
            <ContactButton href={profileLinks.linkedin} variant="secondary">
              LinkedIn
            </ContactButton>
            <ContactButton href={profileLinks.email} variant="secondary">
              Email
            </ContactButton>
          </div>
          <p className="mt-8 max-w-2xl rounded-lg border border-amber-300/25 bg-amber-300/10 p-4 text-sm leading-7 text-amber-100">
            Método AI-first: IA acelera o processo, mas eu valido, testo, ajusto e tomo as decisões.
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
              {[
                ["01", "Entender", "Contexto, objetivo, restrições e usuário."],
                ["02", "Construir", "Código, integrações, automações e ajustes."],
                ["03", "Validar", "Testes manuais, revisão e decisão humana."]
              ].map(([number, title, text]) => (
                <div
                  className="rounded-md border border-line bg-white/[0.035] p-4"
                  key={number}
                >
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
            eyebrow="Sobre mim"
            title="Júnior em evolução, com prática real e vontade de contribuir"
            description="Tenho mais de 200 horas práticas construindo, testando, corrigindo e organizando projetos. Uso IA para acelerar o desenvolvimento, mas meu foco é entender o problema, validar as respostas e entregar algo funcional."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Uso IA em planejamento, arquitetura, código, debugging, testes, documentação e refatoração.",
              "Tenho facilidade alta para aprender ferramentas novas, adaptar processos e transformar instruções em entregas práticas.",
              "Estou aberto a atuar em desenvolvimento, automações, IA, integrações, low-code/no-code, suporte técnico e implementação.",
              "Quero entrar em um ambiente onde eu possa aprender com o time, contribuir com entregas reais e evoluir com responsabilidade."
            ].map((item) => (
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
            eyebrow="Método AI-first"
            title="Um fluxo de trabalho assistido por IA, com critério humano"
            description="Meu método usa IA para ganhar velocidade e clareza, mas cada etapa passa por revisão, teste e decisão humana. A ferramenta ajuda a produzir caminhos; eu valido se eles fazem sentido."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {aiFlow.map((step, index) => (
              <div className="rounded-lg border border-line bg-slate-950/44 p-5" key={step.title}>
                <p className="mb-4 text-sm font-semibold text-teal-300">
                  Etapa {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 rounded-lg border border-amber-300/25 bg-amber-300/10 p-5 leading-7 text-amber-100">
            IA acelera o processo, mas eu valido, testo, ajusto e tomo as decisões.
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-slate-950/30 px-5 py-20 sm:px-8" id="projetos">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Projetos"
            title="Projetos com foco em produto, automação e aplicação real de IA"
            description="Os projetos mostram minha direção técnica: construir ferramentas simples, documentadas e úteis para conteúdo, relacionamento com clientes e automações."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8" id="posso-fazer">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="O que posso fazer hoje"
            title="Entregas práticas para times, pequenas empresas e produtos digitais"
            description="Meu foco atual é ajudar a tirar ideias do papel, organizar processos e criar soluções simples que possam ser testadas, usadas e melhoradas."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {practicalServices.map((service) => (
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
            eyebrow="Skills"
            title="Habilidades técnicas e profissionais"
            description="Base em desenvolvimento web, dados, automações e uso prático de IA no processo de construção."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {skillGroups.map((group) => (
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
            eyebrow="Oportunidades que busco"
            title="Aberto a vagas júnior, automação, implementação e suporte técnico"
            description="Busco uma oportunidade onde eu possa aprender com consistência, contribuir com entregas práticas e crescer em desenvolvimento, IA e operações técnicas."
          />
          <div className="flex flex-wrap gap-3">
            {opportunities.map((item) => (
              <Pill key={item}>{item}</Pill>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line px-5 py-20 sm:px-8" id="contato">
        <div className="mx-auto max-w-6xl rounded-lg border border-line bg-slate-950/55 p-6 shadow-soft sm:p-10">
          <SectionHeader
            eyebrow="Contato"
            title="Vamos conversar sobre oportunidades e projetos"
            description="Se você procura alguém com aprendizado rápido, alta adaptação e domínio prático de IA para construir soluções simples e funcionais, vamos conversar."
          />
          <div className="flex flex-col gap-3 sm:flex-row">
            <ContactButton href={profileLinks.linkedin}>LinkedIn</ContactButton>
            <ContactButton href={profileLinks.github} variant="secondary">
              GitHub
            </ContactButton>
            <ContactButton href={profileLinks.email} variant="secondary">
              Email
            </ContactButton>
            <ContactButton href={profileLinks.whatsapp} variant="secondary">
              WhatsApp
            </ContactButton>
          </div>
        </div>
      </section>
    </main>
  );
}

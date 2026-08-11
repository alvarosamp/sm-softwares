const PROJECTS = {
  "edital-matcher": {
    tag: "Produto 01 · Motor de IA",
    title: "Edital Matcher",
    tagline: "O edital em PDF vira uma lista de \"atende / verificar / não atende\" em minutos.",
    description: "Pipeline próprio de OCR (Docling) → embeddings (Ollama nomic-embed-text, pgvector) → RAG → LLM (llama3.2:1b): lê o PDF do edital, extrai os requisitos técnicos item a item e cruza automaticamente com o catálogo de produtos da empresa. Cada requisito recebe um score (Atende / Verificar / Não atende) com justificativa gerada por IA, e o resultado inteiro pode ser exportado em XLSX, PDF ou CSV para anexar à proposta.",
    features: [
      "Upload de edital em PDF com extração automática de requisitos técnicos",
      "Matching semântico contra o catálogo de produtos (RAG + embeddings)",
      "Score por item com justificativa gerada por LLM",
      "Exportação de laudo em XLSX, PDF e CSV",
      "Multi-tenant com autenticação JWT — várias equipes/clientes isolados",
      "Rastreamento de experimentos (MLflow) e monitoramento de drift (Evidently)"
    ],
    stack: ["Docling (OCR)", "Ollama + nomic-embed-text", "pgvector", "RAG", "LLM llama3.2:1b", "MLflow", "Evidently"],
    status: "Em produção — é o mesmo motor usado hoje na disputa real de editais da TOR Tecnologia.",
    visual: `
      <div class="mock-window">
        <div class="mock-topbar"><span></span><span></span><span></span></div>
        <div class="mock-body">
          <div class="mock-row"><span>Switch PoE 24 portas Gigabit — req. 3.2</span><span class="mock-badge open">Atende</span></div>
          <div class="mock-row"><span>Módulo óptico SFP+ 10G — req. 4.1</span><span class="mock-badge open">Atende</span></div>
          <div class="mock-row"><span>Budget PoE mínimo 370W — req. 3.5</span><span class="mock-badge progress">Verificar</span></div>
          <div class="mock-row"><span>Suporte a QinQ nativo — req. 5.0</span><span class="mock-badge danger">Não atende</span></div>
          <div class="mock-row"><span>Gerenciamento via SNMP v3 — req. 5.4</span><span class="mock-badge open">Atende</span></div>
        </div>
      </div>`
  },
  "bid-bunny": {
    tag: "Produto 02",
    title: "Bid Bunny CRM",
    tagline: "Do portal ao pós-disputa, tudo num único lugar.",
    description: "CRM operacional para o ciclo inteiro de licitação: cadastro de portais (PNCP, Comprasnet, Licitanet, BLL Compras — cada um com modo manual, assistido ou automático), acompanhamento de editais, produtos vinculados, disputa e pós-disputa, com roteiro de operação por portal para a equipe nunca perder um prazo. Embarca no site da TOR em /crm/.",
    features: [
      "Cadastro de portais com modo manual, assistido ou automático (bot)",
      "Painel de editais com prazos e status por etapa",
      "Vínculo direto com o catálogo de produtos",
      "Fluxo de disputa e pós-disputa com histórico",
      "Roteiro operacional por portal para padronizar a equipe"
    ],
    stack: ["CRM operacional", "Integração multi-portal (PNCP, Comprasnet, Licitanet, BLL)", "Bots assistidos/automáticos"],
    status: "Em produção — subproduto do Edital Matcher, já embarcado no site da TOR Tecnologia.",
    visual: `
      <div class="mock-window">
        <div class="mock-topbar"><span></span><span></span><span></span></div>
        <div class="mock-kanban">
          <div class="kanban-col">
            <div class="kanban-col-title">Portal aberto</div>
            <div class="kanban-card">PNCP — Pref. Itajubá</div>
            <div class="kanban-card">Comprasnet — DNIT</div>
          </div>
          <div class="kanban-col">
            <div class="kanban-col-title">Em disputa</div>
            <div class="kanban-card">Licitanet — Cemig</div>
          </div>
          <div class="kanban-col">
            <div class="kanban-col-title">Pós-disputa</div>
            <div class="kanban-card">BLL — Pref. Poços de Caldas</div>
          </div>
        </div>
      </div>`
  },
  agora: {
    tag: "Produto 03 · Chatbot com IA",
    title: "Ágora",
    tagline: "Atendimento no WhatsApp que entende o menu, coleta dados e sabe a hora de chamar um humano.",
    description: "Plataforma de atendimento digital via WhatsApp Business API, com assistente virtual, fluxos conversacionais editáveis, módulo receptivo (busca, status, transferência com histórico preservado) e relatórios exportáveis. Portal de administração web incluído, pronto para Prova de Conceito em ambiente operacional.",
    features: [
      "Integração oficial com a API do WhatsApp Business",
      "Fluxos conversacionais editáveis, sem precisar mexer em código",
      "Módulo receptivo: busca, status e transferência com histórico preservado",
      "Transferência para atendente humano no momento certo",
      "Portal de administração web incluído",
      "Relatórios exportáveis em CSV, XLSX e PDF"
    ],
    stack: ["WhatsApp Business API", "Assistente virtual conversacional", "Portal web de administração"],
    status: "Pronto para Prova de Conceito — construído e testado em ambiente operacional real.",
    visual: `
      <div class="mock-window">
        <div class="mock-topbar"><span></span><span></span><span></span></div>
        <div class="mock-chat">
          <div class="bubble in">Olá! Sou o assistente da Ágora 👋 Como posso ajudar hoje?</div>
          <div class="bubble out">Quero saber o status do meu chamado #4821</div>
          <div class="bubble in">Chamado #4821 está em andamento, previsão de retorno em 2h. Quer falar com um atendente?</div>
          <div class="bubble out">Sim, por favor</div>
          <div class="bubble in">Transferindo você agora, com todo o histórico da conversa preservado.</div>
        </div>
      </div>`
  },
  erario: {
    tag: "Produto 04 · Motor preditivo · Setor público",
    title: "Erário",
    tagline: "Prevê o mês seguinte da arrecadação e avisa antes do desvio virar problema de caixa.",
    description: "ERP financeiro/orçamentário com motor preditivo próprio: previsão de arrecadação por fonte de receita usando Holt-Winters com sazonalidade, a partir de 24 meses de histórico, mais detecção automática de desvio orçamentário, classificada por severidade. API multi-tenant, testada de ponta a ponta. Hoje é consumido via API/Swagger — dashboard web para o usuário final ainda está em desenvolvimento.",
    features: [
      "Previsão de arrecadação por fonte de receita (Holt-Winters sazonal)",
      "Requer no mínimo 24 meses de histórico para treinar o modelo",
      "Detecção automática de desvio orçamentário com severidade",
      "API multi-tenant testada de ponta a ponta",
      "Importação de histórico via CSV"
    ],
    stack: ["Holt-Winters (séries temporais)", "API REST multi-tenant", "Swagger"],
    status: "Em desenvolvimento — motor e API já funcionam com testes automatizados; falta dashboard web e exportação de relatório (XLSX/PDF).",
    visual: `
      <div class="mock-window">
        <div class="mock-topbar"><span></span><span></span><span></span></div>
        <div class="mock-chart">
          <div class="chart-bars">
            <div class="bar" style="height:55%"></div>
            <div class="bar" style="height:68%"></div>
            <div class="bar" style="height:50%"></div>
            <div class="bar" style="height:74%"></div>
            <div class="bar" style="height:62%"></div>
            <div class="bar forecast" style="height:80%"></div>
            <div class="bar forecast" style="height:86%"></div>
          </div>
          <div class="chart-legend">
            <span>Arrecadação real</span>
            <span class="forecast">Previsão (Holt-Winters)</span>
          </div>
        </div>
      </div>`
  },
  portico: {
    tag: "Produto 05 · Planejamento · Setor público",
    title: "Pórtico",
    tagline: "Transforma a fase preparatória da contratação em dossiê pronto para publicar.",
    description: "Módulo de planejamento e dossiê da contratação exigido pela Lei nº 14.133/2021: monta DFD, estudo técnico preliminar (ETP) e termo de referência (TR) a partir de modelos parametrizados, organiza anexos, mantém histórico de aprovação e prepara o pacote para publicação no PNCP. Pensado para municípios pequenos e médios, autarquias e consórcios com equipe enxuta e prazo apertado.",
    features: [
      "Modelos parametrizados de DFD, ETP e TR",
      "Organização automática de anexos do processo",
      "Trilha de aprovação com histórico completo",
      "Pacote pronto para publicação no PNCP",
      "Reaproveita a base de auth/RBAC/workflow do backend já existente"
    ],
    stack: ["Lei nº 14.133/2021", "Workflow de aprovação", "Integração PNCP (planejada)"],
    status: "Em planejamento — ainda sem código, é o próximo módulo do roadmap de gestão pública.",
    visual: `
      <div class="mock-window">
        <div class="mock-topbar"><span></span><span></span><span></span></div>
        <div class="mock-checklist">
          <div class="checklist-row"><span class="step-num">1</span> DFD — Documento de Formalização da Demanda</div>
          <div class="checklist-row"><span class="step-num">2</span> ETP — Estudo Técnico Preliminar</div>
          <div class="checklist-row"><span class="step-num">3</span> TR — Termo de Referência</div>
          <div class="checklist-row"><span class="step-num">4</span> Trilha de aprovação e assinatura</div>
          <div class="checklist-row"><span class="step-num">5</span> Pacote final para publicação no PNCP</div>
        </div>
      </div>`
  },
  compasso: {
    tag: "Produto 06 · Agenda online · Fora do universo de licitação",
    title: "Compasso",
    tagline: "Site de agendamento e painel de agenda para negócios de serviço.",
    description: "Núcleo multi-tenant configurável por segmento: cada cliente recebe um site público próprio para o cliente final marcar horário, mais um painel de agenda, catálogo de serviços e cadastro de clientes. Motor de agendamento e site público já funcionam e foram testados de ponta a ponta. Faltam integração de WhatsApp, cobrança e templates visuais por segmento.",
    features: [
      "Site público de agendamento por cliente (salão, clínica, oficina, academia)",
      "Painel de agenda com visão por profissional/dia",
      "Catálogo de serviços configurável por segmento",
      "Cadastro de clientes",
      "Núcleo multi-tenant — um sistema, vários negócios isolados"
    ],
    stack: ["Multi-tenant", "Agenda + catálogo + CRM básico", "Site público de agendamento"],
    status: "MVP em validação — agenda e site público testados de ponta a ponta; sem cliente pagante ainda, sem WhatsApp/pagamento integrados.",
    visual: `
      <div class="mock-window">
        <div class="mock-topbar"><span></span><span></span><span></span></div>
        <div class="mock-calendar">
          <div class="cal-col"><div class="cal-day-label">Seg</div><div class="cal-slot booked">09:00</div><div class="cal-slot">10:00</div><div class="cal-slot booked">11:00</div></div>
          <div class="cal-col"><div class="cal-day-label">Ter</div><div class="cal-slot">09:00</div><div class="cal-slot booked">10:00</div><div class="cal-slot">11:00</div></div>
          <div class="cal-col"><div class="cal-day-label">Qua</div><div class="cal-slot booked">09:00</div><div class="cal-slot booked">10:00</div><div class="cal-slot">11:00</div></div>
          <div class="cal-col"><div class="cal-day-label">Qui</div><div class="cal-slot">09:00</div><div class="cal-slot">10:00</div><div class="cal-slot booked">11:00</div></div>
          <div class="cal-col"><div class="cal-day-label">Sex</div><div class="cal-slot booked">09:00</div><div class="cal-slot">10:00</div><div class="cal-slot booked">11:00</div></div>
        </div>
      </div>`
  }
};

function openProjectModal(id) {
  const data = PROJECTS[id];
  if (!data) return;
  const modal = document.getElementById("project-modal");
  document.getElementById("pm-tag").textContent = data.tag;
  document.getElementById("pm-title").textContent = data.title;
  document.getElementById("pm-tagline").textContent = data.tagline;
  document.getElementById("pm-description").textContent = data.description;
  document.getElementById("pm-visual").innerHTML = data.visual;
  document.getElementById("pm-features").innerHTML = data.features.map((f) => `<li>${f}</li>`).join("");
  document.getElementById("pm-stack").innerHTML = data.stack.map((s) => `<span>${s}</span>`).join("");
  document.getElementById("pm-status").textContent = data.status;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  modal.querySelector(".project-modal-close").focus();
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  modal.hidden = true;
  document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => nav.classList.remove("open"));
    });
  }

  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const status = form.querySelector(".form-status");
      if (status) {
        status.textContent = "Mensagem registrada. Este site é um protótipo local — conecte um backend ou serviço de formulário (ex.: Formspree, e-mail) antes de publicar.";
        status.hidden = false;
      }
      form.reset();
    });
  }

  document.getElementById("year").textContent = new Date().getFullYear();

  document.querySelectorAll(".segment-card[data-project]").forEach((card) => {
    card.addEventListener("click", () => openProjectModal(card.dataset.project));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openProjectModal(card.dataset.project);
      }
    });
  });

  const modal = document.getElementById("project-modal");
  if (modal) {
    modal.querySelectorAll("[data-close]").forEach((el) => {
      el.addEventListener("click", closeProjectModal);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !modal.hidden) closeProjectModal();
    });
  }
});

// Todo o conteúdo do cartão fica aqui. Para adaptar a um cliente real:
// 1) troque os textos PT e EN, 2) preencha site.url, 3) troque o WhatsApp e o telefone,
// 4) apague a linha <meta name="robots" content="noindex, nofollow"> em index.html.

export const site = {
  // Endereço final do cartão (ex.: "https://tavareseletrica.com.br"). Vazio = sem canonical/hreflang/og:url.
  url: "",
  // QR code: usa site.url; enquanto estiver vazio, mostra este endereço de exemplo.
  qrFallback: "https://exemplo.com.br/",
  // Números fictícios. whatsapp e phone: formato internacional, só dígitos.
  whatsapp: "5511900000000",
  phone: "5511900000000",
  phoneDisplay: "(11) 90000-0000",
  instagram: "tavares.eletrica",
  brand: "Tavares Elétrica",
  person: "Marcos Tavares",
  initials: "MT",
};

// ---- Orçamento rápido (valores fictícios, em R$) ----
export const visitFee = 80; // visita técnica, abatida se o serviço for fechado
export const urgencyFee = { now: 60, today: 0, week: 0 }; // taxa extra por urgência

export const serviceIds = ["outlets", "shower", "panel", "lighting", "ac", "other"];
// "a partir de" por serviço; null = sob orçamento
export const servicePrice = { outlets: 90, shower: 120, panel: 350, lighting: 180, ac: 250, reform: null };

export const content = {
  pt: {
    meta: {
      title: "Marcos Tavares | Eletricista no Tatuapé e Zona Leste de São Paulo",
      description:
        "Cartão de visita digital do eletricista Marcos Tavares: chame no WhatsApp, salve o contato e peça um orçamento rápido. Plantão 24h para emergências na Zona Leste de São Paulo.",
      ogAlt: "Tavares Elétrica: eletricista no Tatuapé, São Paulo",
    },
    skip: "Pular para o conteúdo",
    langLabel: "Idioma",
    demoNotice: "Cartão de demonstração. Nome, telefone, preços e avaliações são fictícios.",
    profile: {
      role: "Eletricista residencial e predial",
      place: "Tatuapé · Zona Leste, São Paulo",
      badge: "Plantão 24h para emergências",
      about: "Instalação, manutenção e reformas elétricas com segurança, orçamento claro e garantia de 90 dias.",
      actions: { whatsapp: "Chamar no WhatsApp", call: "Ligar", save: "Salvar contato", share: "Compartilhar" },
      shared: "Link copiado!",
      shareFail: "Não foi possível compartilhar. Copie o endereço da barra do navegador.",
      shareText: "Cartão de visita do eletricista Marcos Tavares",
      instagramLabel: "Instagram",
      waMessage: "Olá, Marcos! Vi seu cartão digital e preciso de um serviço elétrico.",
      vcardNote: "Eletricista residencial e predial. Plantão 24h para emergências.",
    },
    quote: {
      id: "orcamento",
      eyebrow: "Orçamento rápido",
      title: "Conte o que precisa e eu respondo",
      intro: "Escolha o serviço e a urgência. A mensagem já vai pronta para o meu WhatsApp.",
      serviceLabel: "Qual serviço?",
      services: [
        { id: "outlets", label: "Tomadas e interruptores" },
        { id: "shower", label: "Chuveiro ou torneira elétrica" },
        { id: "panel", label: "Quadro de luz e disjuntores" },
        { id: "lighting", label: "Iluminação e spots" },
        { id: "ac", label: "Ar-condicionado e pontos de força" },
        { id: "other", label: "Outro serviço" },
      ],
      urgencyLabel: "Para quando?",
      urgencies: [
        { id: "now", label: "Emergência agora", text: "Falta de energia, faísca, cheiro de queimado" },
        { id: "today", label: "Hoje ou amanhã", text: "Atendimento no próximo horário livre" },
        { id: "week", label: "Agendar na semana", text: "Escolhemos o melhor dia juntos" },
      ],
      emergencyTip: "Se houver fogo ou fumaça, saia do local e ligue 193 (Bombeiros). Se for seguro, desligue a chave geral.",
      placeLabel: "Onde é o serviço?",
      places: [
        { id: "home", label: "Casa" },
        { id: "apt", label: "Apartamento" },
        { id: "shop", label: "Comércio" },
      ],
      hoodLabel: "Bairro (opcional)",
      hoodPlaceholder: "Ex.: Tatuapé",
      summaryTitle: "Resumo do pedido",
      visit: "Visita técnica",
      urgency: "Taxa de emergência",
      total: "Total da visita",
      free: "Sem taxa",
      visitNote: "A visita técnica é abatida do valor se você fechar o serviço. Valores fictícios de demonstração.",
      cta: "Enviar pelo WhatsApp",
      serviceWord: "Serviço",
      urgencyWord: "Urgência",
      placeWord: "Local",
      waMessage: ({ service, urgency, place, hood, total }) =>
        `Olá, Marcos! Montei meu pedido no seu cartão digital:\n- Serviço: ${service}\n- Urgência: ${urgency}\n- Local: ${place}${hood ? `\n- Bairro: ${hood}` : ""}\n- Visita técnica estimada: ${total}\nPode me atender?`,
    },
    services: {
      id: "servicos",
      eyebrow: "Serviços",
      title: "O que eu faço",
      from: "a partir de",
      onRequest: "sob orçamento",
      items: [
        { id: "outlets", icon: "plug", title: "Tomadas e interruptores", text: "Troca, instalação e novos pontos, com fiação no padrão." },
        { id: "shower", icon: "drop", title: "Chuveiro e torneira elétrica", text: "Instalação segura, com aterramento e disjuntor correto." },
        { id: "panel", icon: "panel", title: "Quadro de luz e disjuntores", text: "Troca de quadro, DR e organização dos circuitos." },
        { id: "lighting", icon: "bulb", title: "Iluminação, spots e LED", text: "Projeto de luz para sala, cozinha, área externa e comércio." },
        { id: "ac", icon: "snow", title: "Ar-condicionado e pontos de força", text: "Circuito dedicado e infraestrutura elétrica para a instalação." },
        { id: "reform", icon: "wrench", title: "Reformas e adequações", text: "Revisão elétrica, laudos simples e adequação de imóveis." },
      ],
    },
    trust: {
      eyebrow: "Por que me chamar",
      title: "Seguro, claro e com garantia",
      items: [
        { icon: "shield", title: "Garantia de 90 dias", text: "Todo serviço tem garantia por escrito." },
        { icon: "check", title: "Orçamento sem compromisso", text: "Você aprova o valor antes de eu começar." },
        { icon: "bolt", title: "Segurança em primeiro lugar", text: "Desligo o circuito e testo tudo antes e depois." },
      ],
      reviewsTitle: "O que dizem os clientes",
      reviews: [
        { name: "Renata P.", role: "Tatuapé", text: "Chegou no horário, explicou tudo e deixou tudo limpo. Resolveu o chuveiro no mesmo dia." },
        { name: "Seu Carlos", role: "Mooca", text: "Troquei o quadro de luz do prédio com ele. Serviço caprichado e preço justo." },
        { name: "Juliana M.", role: "Anália Franco", text: "Atendeu à noite numa emergência. Salvou a minha noite." },
      ],
    },
    info: {
      id: "info",
      eyebrow: "Informações",
      title: "Onde e como atendo",
      areasLabel: "Bairros atendidos",
      areas: ["Tatuapé", "Mooca", "Penha", "Vila Formosa", "Anália Franco", "Carrão", "Belém", "Vila Matilde"],
      hoursLabel: "Horário",
      hours: "Seg a sáb, 7h às 19h. Plantão 24h para emergências.",
      payLabel: "Pagamento",
      pay: "Pix, cartão em até 12x e dinheiro.",
    },
    qr: {
      id: "qr",
      title: "Seu contato na palma da mão",
      text: "Aponte a câmera do celular para o QR code e abra este cartão. Dá para imprimir em adesivo, cartão físico ou na van.",
      alt: "QR code que abre este cartão digital",
      demo: "QR de exemplo. Ele passa a apontar para o endereço real quando o site for publicado.",
    },
    footer: "Tavares Elétrica. Cartão de demonstração com dados fictícios.",
    jsonLd: {
      name: "Tavares Elétrica",
      description: "Eletricista residencial e predial no Tatuapé e Zona Leste de São Paulo.",
      address: { street: "Rua Exemplo, 000", locality: "São Paulo", region: "SP", country: "BR" },
    },
  },

  en: {
    meta: {
      title: "Marcos Tavares | Electrician in Tatuapé and East São Paulo",
      description:
        "Digital business card of electrician Marcos Tavares: message on WhatsApp, save the contact and get a quick quote. 24/7 emergency service in East São Paulo.",
      ogAlt: "Tavares Electric: electrician in Tatuapé, São Paulo",
    },
    skip: "Skip to content",
    langLabel: "Language",
    demoNotice: "Demo card. Name, phone, prices and reviews are fictional.",
    profile: {
      role: "Residential and building electrician",
      place: "Tatuapé · East side, São Paulo",
      badge: "24/7 emergency service",
      about: "Electrical installation, maintenance and renovation done safely, with clear quotes and a 90-day warranty.",
      actions: { whatsapp: "Chat on WhatsApp", call: "Call", save: "Save contact", share: "Share" },
      shared: "Link copied!",
      shareFail: "Could not share. Copy the address from your browser's address bar.",
      shareText: "Business card of electrician Marcos Tavares",
      instagramLabel: "Instagram",
      waMessage: "Hi, Marcos! I saw your digital card and I need an electrical service.",
      vcardNote: "Residential and building electrician. 24/7 emergency service.",
    },
    quote: {
      id: "orcamento",
      eyebrow: "Quick quote",
      title: "Tell me what you need and I'll reply",
      intro: "Pick the service and how urgent it is. The message goes ready to my WhatsApp.",
      serviceLabel: "Which service?",
      services: [
        { id: "outlets", label: "Outlets and switches" },
        { id: "shower", label: "Electric shower or tap" },
        { id: "panel", label: "Breaker panel and breakers" },
        { id: "lighting", label: "Lighting and spotlights" },
        { id: "ac", label: "Air conditioning and power points" },
        { id: "other", label: "Other service" },
      ],
      urgencyLabel: "When do you need it?",
      urgencies: [
        { id: "now", label: "Emergency now", text: "Power outage, sparks, burning smell" },
        { id: "today", label: "Today or tomorrow", text: "Next available slot" },
        { id: "week", label: "Book this week", text: "We pick the best day together" },
      ],
      emergencyTip: "If there is fire or smoke, leave the place and call 193 (Fire Department). If it is safe, switch off the main breaker.",
      placeLabel: "Where is the job?",
      places: [
        { id: "home", label: "House" },
        { id: "apt", label: "Apartment" },
        { id: "shop", label: "Business" },
      ],
      hoodLabel: "Neighborhood (optional)",
      hoodPlaceholder: "E.g.: Tatuapé",
      summaryTitle: "Request summary",
      visit: "Technical visit",
      urgency: "Emergency fee",
      total: "Visit total",
      free: "No fee",
      visitNote: "The visit fee is deducted if you hire the service. Demo prices in Brazilian reais (BRL).",
      cta: "Send on WhatsApp",
      serviceWord: "Service",
      urgencyWord: "Urgency",
      placeWord: "Place",
      waMessage: ({ service, urgency, place, hood, total }) =>
        `Hi, Marcos! I built my request on your digital card:\n- Service: ${service}\n- Urgency: ${urgency}\n- Place: ${place}${hood ? `\n- Neighborhood: ${hood}` : ""}\n- Estimated visit fee: ${total}\nCan you help me?`,
    },
    services: {
      id: "servicos",
      eyebrow: "Services",
      title: "What I do",
      from: "from",
      onRequest: "quote on request",
      items: [
        { id: "outlets", icon: "plug", title: "Outlets and switches", text: "Replacement, installation and new points, wired to code." },
        { id: "shower", icon: "drop", title: "Electric shower and tap", text: "Safe installation, with grounding and the right breaker." },
        { id: "panel", icon: "panel", title: "Breaker panel", text: "Panel replacement, RCD and circuit organization." },
        { id: "lighting", icon: "bulb", title: "Lighting, spots and LED", text: "Lighting for living rooms, kitchens, outdoor areas and shops." },
        { id: "ac", icon: "snow", title: "Air conditioning and power points", text: "Dedicated circuit and electrical groundwork for the installation." },
        { id: "reform", icon: "wrench", title: "Renovations and upgrades", text: "Electrical review, simple reports and property upgrades." },
      ],
    },
    trust: {
      eyebrow: "Why call me",
      title: "Safe, clear and guaranteed",
      items: [
        { icon: "shield", title: "90-day warranty", text: "Every job comes with a written warranty." },
        { icon: "check", title: "No-obligation quote", text: "You approve the price before I start." },
        { icon: "bolt", title: "Safety first", text: "I switch off the circuit and test everything before and after." },
      ],
      reviewsTitle: "What clients say",
      reviews: [
        { name: "Renata P.", role: "Tatuapé", text: "He arrived on time, explained everything and left it all clean. Fixed my shower the same day." },
        { name: "Mr. Carlos", role: "Mooca", text: "We replaced our building's panel with him. Neat work and a fair price." },
        { name: "Juliana M.", role: "Anália Franco", text: "He came at night during an emergency. He saved my evening." },
      ],
    },
    info: {
      id: "info",
      eyebrow: "Info",
      title: "Where and how I work",
      areasLabel: "Neighborhoods served",
      areas: ["Tatuapé", "Mooca", "Penha", "Vila Formosa", "Anália Franco", "Carrão", "Belém", "Vila Matilde"],
      hoursLabel: "Hours",
      hours: "Mon to Sat, 7 am to 7 pm. 24/7 for emergencies.",
      payLabel: "Payment",
      pay: "Pix, card in up to 12 installments, and cash.",
    },
    qr: {
      id: "qr",
      title: "Your contact in the palm of your hand",
      text: "Point your phone camera at the QR code to open this card. You can print it on a sticker, a physical card or the van.",
      alt: "QR code that opens this digital card",
      demo: "Sample QR. It points to the real address once the site is published.",
    },
    footer: "Tavares Electric. Demo card with fictional data.",
    jsonLd: {
      name: "Tavares Electric",
      description: "Residential and building electrician in Tatuapé and East São Paulo.",
      address: { street: "Rua Exemplo, 000", locality: "São Paulo", region: "SP", country: "BR" },
    },
  },
};

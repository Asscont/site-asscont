/* Inglês. Só precisa conter as chaves já traduzidas — o que faltar aqui
   aparece em português. Chave com string vazia também cai para o português,
   então dá para deixar o campo criado e preencher depois.

   REVISAR COM A ASSCONT: 'publicacoes' (Publications x Insights) e o nome
   comercial das páginas institucionais. */

import type { Textos, Traducao } from './pt';

const en: Traducao<Textos> = {
  header: {
    logoAlt: 'Asscont — home page',
    navegacao: 'Main navigation',
    abrirMenu: 'Open menu',
    fecharMenu: 'Close menu',
    inicio: 'Home',
    servicos: 'Services',
    quemSomos: 'About Us',
    publicacoes: 'Publications',
    contato: 'Contact',
  },

  idioma: {
    rotulo: 'Language',
    trocarPara: 'View the site in',
  },

  newsletter: {
    titulo: 'Subscribe to our newsletter',
    subtitulo: 'And stay up to date with what matters most.',
    placeholder: 'Enter your e-mail:',
    rotuloCampo: 'E-mail',
    enviar: 'Send e-mail',
  },

  rodape: {
    navegacao: 'Navigation',
    inicio: 'Home',
    servicos: 'Services',
    quemSomos: 'About us',
    publicacoes: 'Publications',
    contato: 'Contact',
    legal: 'Legal',
    faq: 'FAQ',
    termos: 'Terms of Use',
    privacidade: 'Privacy',
    trabalheConosco: 'Careers',
    carreiras: 'Explore our careers area',
    redesSociais: 'Asscont on social media',
    copyright: 'Copyright © 2026',
  },
  inicio: {
    heroTagline: 'Tradition, innovation and excellence for nearly 50 years',
    heroTitulo: 'Integrated solutions for business management.',
    heroBotao: 'Learn more',

    redeDestaque: '26th largest',
    redeSubtitulo: 'Accounting network in the world (IAB 2024)',
    redeRotulos: [
      'member firms',
      'countries',
      'continents',
      'different languages',
      'connected partners',
      'professionals',
    ],
    redeChamadaL1: 'Your company in Brazil.',
    redeChamadaL2: 'Connected to the world.',
    redeLegenda: 'Members of IECnet — international network of independent firms',

    servicosTitulo: 'Solutions',
    servicosSub: 'Our services',
    servicosNomes: [
      'Accounting Outsourcing',
      'Tax Management',
      'Payroll BPO',
      'Audit',
      'Corporate Services',
      'And much more',
    ],
    servicosLegenda: 'Explore our services',

    certTitulo: 'Certifications',
    certLinha1: 'Accounting intelligence with',
    certLinha2: 'a standard of excellence',
    selosAlt: [
      'PQEC Executivo Gold — Innovation',
      'PQEC Executivo Gold — Entrepreneurship',
      'PQEC Executivo Gold — Quality',
      'PQEC Executivo Gold — Management',
      'ABNT — Certified System',
    ],

    sobreFotoAlt: 'Corporate buildings',
    sobreTitulo: 'Who we are',
    sobreSub: 'About us',
    sobreP1:
      'With nearly 50 years of experience, Grupo ASSCONT brings together professionals with the highest level of expertise in accounting, auditing, financial BPO, business and corporate registration, forensic accounting, and tax and management consulting.',
    sobreP2:
      'We deliver tailored strategic solutions with security, excellence and business insight for Brazilian and multinational companies.',
    sobreP3:
      'Our track record rests on three core principles: technical excellence, close client relationships and a lasting commitment to the quality of the information we produce.',
    sobreP4:
      'ASSCONT is a member of IECnet — International Association of Accounting and Auditing Professionals, one of the most established international associations of independent audit and consulting firms. This connection means closer technical alignment, continuous updating and an integrated view of regulatory and governance trends.',
    sobreLinkServicos: 'Our Services',
    sobreLinkPublicacoes: 'Publications',

    clientesTag: 'Some of our clients',

    fundadorAlt: 'Antonio Carlos Lopes, founder of Asscont',
    diferenciaisL1: 'Competitive',
    diferenciaisL2: 'advantages',
    diferenciais: [
      'Nearly 50 years of experience',
      'Integrated end-to-end structure',
      'Advisory and strategic approach',
      'Strong expertise in tax consulting',
      'International presence (IECnet)',
      'High standard of compliance and governance',
      'Close and personalised relationships',
    ],

    parceriasTitulo: 'International partnerships',
    camaraSub: 'ITALIAN-BRAZILIAN CHAMBER OF COMMERCE',
    camaraTexto:
      "Asscont's international reach is reinforced by the appointment of Antonio Carlos Lopes, the company's director and founder, as representative of the Italian-Brazilian Chamber of Commerce in the state of São Paulo. The appointment strengthens Asscont's connection to the business environment between Brazil and Italy, reinforcing its institutional presence and its ability to support companies in international relations and expansion.",
    camaraLogoAlt: 'Italian-Brazilian Chamber of Commerce',
    iecnetTexto:
      'Asscont is a member of IECnet, an international network founded in 1987 that brings together around 80 firms across six continents. This connection expands its ability to support clients in local and international operations, with access to a global network built on high professional standards, strategic cooperation and qualified support in different markets.',
    iecnetFotoAlt: 'IECnet network meeting',
    forumOfFirmsAlt: 'Member of the Forum of Firms',

    socialKicker: 'Content and updates',
    socialTituloL1: 'On our',
    socialTituloL2: 'channels',
    socialTabsAria: 'Choose the social network',
    socialLinkedinTexto:
      'Keep up with our analyses, updates and exclusive content on LinkedIn.',
    socialLinkedinBotao: 'View LinkedIn',
    socialInstagramTexto:
      "Follow ASSCONT's day-to-day, technical content and news at",
    socialInstagramBotao: 'View Instagram',
    postsLinkedinAria: 'LinkedIn posts',
    postsInstagramAria: 'Recent Instagram highlights',
    postsLinkedinAlt: [
      'Artificial intelligence speeds up processes',
      'Income Tax 2026',
      'Mental health at work',
    ],
    postsInstagramAlt: [
      'NFS-e in leasing transactions',
      'High performance in practice',
      'PER/DCOMP: certainty before filing',
    ],

    publicacoesTitulo: 'Publications',
    publicacoesAria: 'Asscont publications',
    publicacoesLerMais: 'Read more',

    contatoTitulo: "Let's build safer decisions for your business.",
    contatoLead1:
      'Our team is ready to understand your company\u2019s challenges and point to the safest, most suitable solutions, tailored to you.',
    contatoLead2:
      'With nearly 50 years of experience, ISO 9001:2015 certification and international reach through IECnet, we offer close, advisory-led service aligned with the needs of growing companies.',
    contatoBarueriEnderecoL1: 'Av. Marcos Penteado de Ulhoa Rodrigues, 1.119 | 17th floor',
    contatoBarueriEnderecoL2: 'Suite 1.711 | Tamboré',
    contatoSpEndereco: 'Rua Boa Vista, 254 | 11th floor | Suite 1.101 | Centro | São Paulo',
    contatoLabel: 'Contact',
    horarioLabel: 'Opening hours',
    horarioDias: 'Monday to Friday',
    horarioHoras: '8:30 am to 5:30 pm',

    mapasKicker: 'Where we are',
    mapasTitulo: 'Our offices',
    mapasAjuda: 'Choose an office and open directions straight in Google Maps.',
    mapaUnidade: 'Office',
    mapaEnderecoBarueri:
      'Av. Marcos Penteado de Ulhoa Rodrigues, 1.119 · 17th floor · Suite 1.711 · Tamboré',
    mapaEnderecoSp: 'Rua Boa Vista, 254 · 11th floor · Suite 1.101 · Centro · São Paulo',
    mapaTituloBarueri: 'Map of the ASSCONT office in Barueri',
    mapaTituloSp: 'Map of the ASSCONT office in São Paulo',
    mapaAbrir: 'Open in Google Maps',
  },
  quemSomos: {
    heroTitulo: 'WHO WE ARE',
    heroP1:
      'SINCE 1977, WE HAVE DELIVERED TAILORED STRATEGIC SOLUTIONS WITH SECURITY, EXCELLENCE AND BUSINESS INSIGHT FOR BRAZILIAN AND MULTINATIONAL COMPANIES.',
    heroP2:
      'WE SEEK TO BUILD LONG-TERM RELATIONSHIPS GROUNDED IN TRUST, TRANSPARENCY, TECHNICAL QUALITY AND THE CONTINUOUS CREATION OF VALUE.',

    certAria: 'Certifications',
    certTitulo: 'CERTIFICATIONS',
    certChamada: 'Accounting intelligence with\na standard of excellence',
    certInformacoes: 'Details',
    certVerSobre: 'See details about',
    certModalLabel: 'Certification',
    certModalFechar: 'Close certification details',
    certTitulos: [
      'PQEC Executivo Gold – Entrepreneurship',
      'PQEC Executivo Gold – Management',
      'PQEC Executivo Gold – Innovation',
      'PQEC Executivo Gold – Quality',
      'ABNT Certified System',
    ],
    certDescricoes: [
      'Recognition of expertise in growth strategies, entrepreneurial vision and sustainable business development.',
      'Certifies expertise in business management, strategic planning, leadership and organisational development.',
      'Recognises companies equipped to implement innovation processes, continuous improvement and business transformation.',
      'Certifies the knowledge and application of practices focused on quality management, standardisation and excellence in service delivery.',
      'Confirms that the company holds a Management System certified by ABNT, reinforcing its commitment to quality, compliance and continuous improvement.',
    ],

    pilaresTag: 'PILLARS',
    missaoTitulo: 'MISSION',
    missaoTexto: 'To deliver solutions with\nexcellence, security and agility.',
    visaoTitulo: 'VISION',
    visaoTexto: 'To be a benchmark in accounting\nand advisory services.',

    propositoAntes: 'OUR',
    propositoDestaque: 'PURPOSE',
    propositoResto:
      'IS TO MEET CLIENT NEEDS WITH EXCELLENCE,\nDRIVING THE CONTINUOUS IMPROVEMENT OF PROCESSES, OPERATIONAL\nEFFICIENCY AND THE DEVELOPMENT OF BUSINESSES AND PEOPLE.',

    valoresL1: 'DISCOVER',
    valoresL2: 'OUR',
    valoresL3: 'VALUES',
    valorCompromissoTitulo: 'Commitment',
    valorCompromissoTexto:
      "Asscont's commitment\nis to excellence in\nservice and to the\nsatisfaction of our\nclients in every\ninteraction.",
    valorResponsabilidadeTitulo: 'Responsibility',
    valorResponsabilidadeTexto:
      'We take on the\nresponsibility of making\na positive impact on\nsociety and the\nenvironment, promoting\nsustainable and fair\npractices',
    valorEticaTitulo: 'Ethics',
    valorEticaTexto:
      'The basis of everything\nwe do, ensuring\ntransparency and\nbalance across all\nprofessional and\npersonal relationships.',

    experienciaAntes: 'The',
    experienciaDestaque: 'experience',
    experienciaResto: 'of ASSCONT working for\nyour company and your business',
    metricaUnidades: ['years', 'billion', 'countries', '', ''],
    metricaRotulos: [
      'of experience',
      'in revenue\nunder management',
      'with client companies',
      'employees under management',
      'clients served',
    ],

    depoimentosAria: 'Client testimonials',
    depoimentoLerAria: 'Read the full testimonial from',
    depoimentoMais: 'Read full testimonial',
    depoimentoFechar: 'Close testimonial',
    /* vazio: a ASSCONT autorizou a tradução dos depoimentos */
    depoimentosOriginal: '',

    depoimentosTraduzidos: {
      recepta: {
        cargo: 'President and CEO',
        texto: `Dear Antonio Carlos and dear Asscont team,

It is a pleasure to share with you my view of the quality of the services provided to Recepta over more than 20 years of collaboration.

Throughout this period, working with Asscont has fully met our expectations. There has been no request from Recepta that was not satisfactorily handled, for which we are very grateful.

So all that remains is to congratulate the excellent Asscont team.`,
      },
      moma: {
        cargo: 'CEO | MOMA',
        texto: `Over the past 15 years, Asscont has been far more than the firm responsible for Moma's accounting. It has become a partner we trust completely, one that gives us confidence to make decisions and lets us focus our efforts on growing our business.

Throughout that time we have always found an extremely competent, up-to-date and committed team, able to guide us clearly on accounting, tax, labour and corporate matters. More than responding to day-to-day demands, Asscont works preventively, consultatively and strategically, anticipating scenarios and offering consistent solutions.

Asscont's great strength lies in the combination of technical excellence and close service. It is rare to find a firm that can maintain, over so many years, the same standard of quality, responsiveness and dedication in its client relationships.

For Moma, Asscont means peace of mind, credibility and a long-term partnership. We are proud of this relationship built over 15 years and recommend Asscont to any company looking for a serious, competent partner committed to its clients' success.`,
      },
      comscore: {
        cargo: 'Finance Manager',
        texto: `Over the years, Asscont has become more than a service provider to our company: it is a true business partner.

In an increasingly complex and dynamic regulatory environment, having a highly qualified, committed and always available team makes all the difference. Asscont gives us confidence in its accounting, tax, labour and corporate guidance, allowing us to make decisions with certainty and keep our obligations in compliance.

I would also highlight the quality of the advice provided and the responsiveness of the service. We have always been treated with professionalism, courtesy and a genuine interest in finding the best solution for each situation, however complex.

Asscont's great strength is its people. Their dedication, technical knowledge and close relationships with clients create a partnership based on trust, transparency and excellence.

Our sincere thanks to everyone at Asscont for the constant support and for contributing to the growth and security of our company's operations.`,
      },
      bichuetti: {
        cargo: 'Business Consultant',
        texto: `I first met Antônio Carlos and Asscont in 1983. In the beginning it was guidance on setting up Bichuetti Consultoria Empresarial - BCE and on how to keep records fully compliant with the law, but also valuable advice on something widely debated today in corporate governance: the separation between family, company and ownership. Over these years we have had professional and personal support that always gave us the impression that we were Client #1; and I believe everyone advised by Asscont feels the same. I feel privileged by 43 years of partnership and by the friendship I have built with Antônio Carlos, and now with Bruno as well. Congratulations and thank you to the whole Asscont team!`,
      },
      'milton-terra': {
        cargo: 'Chief Operating Officer',
        texto: `Over the past 20 years we have had, in ASSCONT, a secure and reliable accounting partner that supported the solid growth of our company.

Across every area (tax, accounting, corporate taxation and HR) we have always had impeccable service — fast, accurate and delivered by a team of high technical quality.

I have always heard in the market how hard it is to find a serious, highly competent firm to provide this kind of support, and ASSCONT is one of the very few companies I would recommend without any fear of being wrong.`,
      },
      'arthur-brandi': {
        cargo: 'Lawyer',
        texto: `The solid partnership built between our firm and ASSCONT over many years rests on fundamental pillars: mutual trust, impeccable technical rigour and ASSCONT's consistent professional efficiency.

Having the advisory support and operational excellence of the ASSCONT team in accounting, tax, labour and corporate matters gives us complete security, peace of mind and the certainty that all legal obligations are being strictly met. That security lets us devote our full attention to practising law and serving our clients.

Beyond the high level of technical expertise and the preventive, strategic nature of ASSCONT's advice, the firm's great strength lies in the relationship: close, dynamic, responsive and genuinely human service, marked by a readiness to understand and meet our specific needs.

It is an honour to see our path intertwined with these 48 years of history and to follow closely the continuous evolution, modernisation and refinement of a company like ASSCONT, a benchmark for integrity, commitment and quality.`,
      },
      'adega-alentejana': {
        cargo: 'Administrative and Financial Director',
        texto: `Throughout our partnership, which began in 2021, Asscont has established itself as far more than a service provider: it is a strategic partner, committed to the highest standards of efficiency, compliance and technical excellence.

The support provided in accounting, tax, labour and corporate matters has been essential in allowing Adega Alentejana to maintain secure management aligned with best practice. This partnership contributed directly to important recognitions from regulatory bodies, such as the A+ rating in the Brazilian Federal Revenue Service's Sintonia Programme, the renewal of our status as an AEO (Authorised Economic Operator) partner company, the A+ rating in the SEFAZ-SP Compliance Programme, and positive, consistent results in independent audits.

In an increasingly complex and challenging business environment, having a highly qualified, accessible and committed technical team gives us the peace of mind we need to focus our efforts on growing the business.

We congratulate Asscont on its 48-year track record, built with integrity, competence and trust. We are glad to be part of this story and recommend its work to companies seeking a solid, reliable and results-driven partnership.`,
      },
      'grupo-maya': {
        cargo: 'CEO | Grupo Maya',
        texto: `The Asscont team is made up of highly qualified and dedicated professionals, led by Mr Antônio Carlos, who brings extensive business and corporate experience. We can say that the firm is deeply committed to delivering the best accounting, tax, labour and corporate advice, conveying complete security and confidence to its partners.`,
      },
      mam: {
        cargo: 'Financial Director',
        texto: `Asscont has served the Museu de Arte Moderna, MAM-SP, for more than six years. In this period, important steps were taken to improve the museum's accounting practices, and the partnership with Asscont was essential to that process. At critical moments — implementing a new accounting system, keeping up with changes in tax legislation, and the major challenge of running the museum with its building closed for refurbishment — we could count on Asscont's support and professionalism, always open to dialogue and willing to support the museum's team through these challenges. A relationship of mutual trust was established between the museum and the consultancy teams. The quality of the consultancy's work is also recognised elsewhere, including by the museum's Audit Committee and by the firm that carries out the annual audit of its financial information.`,
      },
      'studio-gamba': {
        cargo: 'Partner | Studio Gamba Consultoria Empresarial',
        texto: `Congratulations, Antonio Carlos: we are in this together!

YOU ARE A PARTNER OF INESTIMABLE VALUE`,
      },
      'celso-tomanik': {
        cargo: 'Business Consultant',
        texto: `I have been an Asscont client for more than 25 years. In that time Asscont has been instrumental to the development of my businesses. I think one of the biggest mistakes entrepreneurs make is looking for a "cheap" or purely digital firm to simply "do my accounting". Asscont has always brought enormous value in its advice and in precise execution — 25 years without a single tax or labour incident. That is priceless! Its professionals are dedicated, attentive and always a step ahead.`,
      },
      techsearch: {
        cargo: 'Partner and Senior Consultant',
        texto: `Dear Antonio Carlos,

We have known Asscont for more than 25 years and have been very well served throughout all that time. It is a serious firm, always doing its best to meet the Client's needs.

Kind regards.`,
      },
      abralimp: {
        cargo: 'Client Relations Coordinator',
        texto: `For more than 20 years, Asscont has been a strategic partner to ABRALIMP, contributing consistently to the strength of our management and to the reinforcement of our governance.

Throughout this journey we have always had a highly qualified team that conveys security and confidence in its accounting, tax, labour and corporate guidance. More than an accounting advisor, Asscont helps us maintain the high standards of transparency that are part of ABRALIMP's principles, ensuring compliance, credibility and peace of mind in our work.

This partnership of more than two decades is marked by commitment, availability and a close relationship — factors that make all the difference for an organisation like ours, responsible for representing the professional cleaning market and organising major events such as HIGIEXPO.

We are proud of this history built together and recommend Asscont for the excellence of its services, the competence of its team and the confidence it inspires in its clients.`,
      },
    },

    apoioTag: 'SOCIAL SUPPORT',
    apoioLink: 'Get to know it and support it too!',
    blandinaTexto:
      'A non-profit organisation working since 1952 on the development of children,\nadolescents and young people in situations of social vulnerability, promoting education,\nstronger bonds and citizenship through socio-educational programmes.',
    blandinaFotoAlt: 'Activities at Instituto Blandina Meirelles',
    olhinhosTexto:
      'Dedicated to raising awareness of retinoblastoma, the initiative promotes\ninformation, guidance and education to encourage early diagnosis, an essential\nstep in saving lives and preserving children\u2019s eye health.',

    parceirosTag: 'NATIONAL PARTNERS',
    parceirosAria: 'National partners',
    parceirosTextos: [
      'A benchmark in accounting technology, developing solutions that automate processes and boost the efficiency of accounting firms.',
      'A business management platform combining ERP and financial services, simplifying processes and supporting business growth.',
      'A Business Intelligence specialist that turns data into strategic dashboards to support smarter, more efficient decisions.',
      'A corporate law firm offering strategic legal solutions with technical excellence and a business-focused approach.',
    ],
  },
  trabalheConosco: {
    heroEyebrow: 'São Paulo · On-site',
    heroTitulo: 'Join our team.',
    heroTexto:
      'ASSCONT is growing and looking for people who want to build a solid career in accounting, tax, payroll and technology — with purpose and real progression.',
    heroBotao: 'See open roles',

    numerosAria: 'ASSCONT in numbers',
    numerosRotulos: ['Open roles', 'On-site in SP', 'Benefits included', 'Career path'],
    numeroCarreira: 'Individual',

    introEyebrow: 'Why ASSCONT',
    introTitulo: 'Good people do excellent work.',
    introTexto:
      'We value close relationships, responsibility, technical knowledge and continuous improvement. We want everyone to find room to contribute, learn and grow alongside the company.',
    introFotoAlt: 'ASSCONT corporate environment',
    badgeTitulo: 'Since 1977',
    badgeTexto: 'experience that grows with people',

    culturaAria: 'Our culture',
    valoresTitulos: ['Continuous development', 'Teamwork', 'Excellence with purpose'],
    valoresTextos: [
      'An environment that values learning, technical updating and professional growth.',
      'Collaboration across teams, closeness and knowledge sharing are part of our routine.',
      'We pursue quality, responsibility and security in everything we deliver to our clients.',
    ],

    vagasEyebrow: 'Featured roles',
    vagasTitulo: 'The fastest-growing opportunities in the company',
    vagasNota:
      'All positions are on-site in São Paulo/SP, from 8:12 am to 6:00 pm, Monday to Friday.',
    destaqueTag: 'Featured',
    verDetalhesCandidatar: 'See details and apply',

    listaAria: 'All roles',
    listaEyebrow: 'All roles',
    listaTitulo: 'More opportunities for you',
    verDetalhes: 'See details',

    vagasOriginal:
      'Role descriptions are shown in Portuguese: these are on-site positions in Brazil whose day-to-day work is conducted in Portuguese.',

    beneficiosAria: 'Benefits',
    beneficiosEyebrow: 'Why ASSCONT?',
    beneficiosTitulo: 'Benefits that make a difference day to day',
    beneficiosTitulos: [
      'Meal allowance',
      'Full health cover',
      'Life insurance',
      'Birthday day off',
      'Wellhub',
      'University partnership',
      'SESC membership',
      'Central location',
    ],
    beneficiosTextos: [
      'R$ 35.00 for each working day',
      'Medical and dental cover with a 50% subsidy',
      'Protection for you',
      'A day off on your special day, no need to ask',
      "Access to Brazil's largest gym and wellbeing network",
      'Discounts at partner institutions so you can keep qualifying',
      'Access to culture, leisure, sport and services',
      'Office in São Paulo/SP, Monday to Friday',
    ],

    processoEyebrow: 'Next step',
    processoTitulo: "Didn't find the right role?",
    processoTexto:
      'Send your CV to our HR team. We keep your details on file and get in touch as soon as an opportunity matching your profile comes up.',
    processoBotao: 'Talk to HR',
    processoAssunto: 'Talent pool — ASSCONT',

    modalFechar: 'Close role',
    fichaHorario: 'Hours',
    fichaRegime: 'Arrangement',
    fichaFormacao: 'Education',
    fichaNivel: 'Level',
    modalAtividades: 'Responsibilities',
    modalDesejavel: 'Desirable',
    modalConhecimentos: 'Skills',
    modalCta: 'I want to apply',
    candidaturaAssunto: 'Application',
  },
  servicos: {
    heroFotoAlt: 'Professional using a calculator',
    heroTitulo: 'Integrated solutions for\nyour business challenges.',
    heroTexto:
      'Experience, technical knowledge and an advisory approach to\nsupport your company with security, efficiency and strategic vision.',
    heroBotao: 'Get in touch',

    setoresTitulos: [
      'Industry and Commerce',
      'Services',
      'Technology Companies and Startups',
      'Non-profit Sector',
    ],
    setoresTextos: [
      'Experience serving industrial, commercial, importing and distribution companies across a wide range of sectors.',
      'Experience serving service companies, including advertising and communications agencies and a broad range of other specialised services.',
      'Experience serving technology companies, digital businesses and start-ups.',
      'Experience serving non-profit organisations such as museums, foundations, associations and NGOs.',
    ],
    setorLink: 'Meet our clients',

    oferecemosTitulo: 'What we offer',
    oferecemosSub: 'Experience that builds trust. Work that creates value.',
    oferecemosTexto:
      'For nearly 50 years we have combined technical knowledge, strategic vision and close service to support companies of all sizes and segments.\nOur integrated approach lets us understand each business as a whole, offering tailored solutions, confident decisions and support at every stage of management.',

    servicoTitulos: [
      'Accounting Outsourcing',
      'Tax Management',
      'Payroll BPO',
      'Audit',
      'Financial BPO',
      'Corporate Services',
      'Forensic Accounting',
      'Tax Consulting',
      'Management Consulting',
    ],
    servicoTextos: [
      'Full accounting management, focused on compliance and decision support.',
      'Tax calculation and management of tax obligations, focused on efficiency and risk mitigation.',
      'Full management of payroll and labour routines.',
      'Audit of Financial Statements, agreed-upon procedures and due diligence.',
      'Structured financial management for control, security and predictability.',
      'Articles of association, bylaws, company registration, valuation reports, mergers and acquisitions.',
      'Forensic accounting work, including expert accounting reports and technical accounting opinions.',
      'Beyond day-to-day routines, ASSCONT also offers:',
      'We turn data into management strategies for decision-making.',
    ],
    servicoAlts: [
      'Bookkeeping on a computer',
      'Analysis of tax documents',
      'HR team at work',
      'Review of financial statements',
      'Financial analysis meeting',
      'Statue of justice',
      'Analysis of forensic documents',
      'Tax consulting meeting',
      'Team analysing management indicators',
    ],

    gestaoFiscalItens: [
      'Tax calculation',
      'Ancillary tax obligations',
      'Tax planning',
      'Support during tax audits',
    ],
    bpoTrabalhistaItens: [
      'Payroll',
      'eSocial and payroll charges',
      'Hiring and terminations',
      'Preventive advisory',
    ],
    bpoFinanceiroItens: [
      'Accounts payable and receivable',
      'Bank reconciliation',
      'Cash flow',
      'Financial reporting',
    ],
    consultoriaTributariaItens: [
      'Interpretation of legislation',
      'Tax queries',
      'Support on specific projects',
      'Analysis of regulatory impacts',
      'Improvement recommendations',
    ],
    reformaTributariaTitulo: 'Brazilian Tax Reform',
    reformaTributariaItens: [
      'Continuous legislative monitoring',
      'Regular executive meetings',
      'Assessment of the impact on operations',
    ],
    consultoriaGestaoItens: [
      'We analyse your company\u2019s current financial and tax health',
      'We design tailored strategies to cut costs and streamline routines',
    ],
    contrate: 'Hire us',

    faqTitulo: 'FAQ',
    faqPerguntas: [
      'What services does ASSCONT offer?',
      'What kind of companies does ASSCONT serve?',
      'How does switching from my current accountant to ASSCONT work?',
      'Who looks after my account day to day?',
      'How does ASSCONT keep my data secure?',
      'Does ASSCONT serve companies with operations abroad?',
    ],
    faqRespostas: [
      'Accounting outsourcing, tax management, payroll BPO, financial BPO, and legal and corporate BPO. We also work in consulting, auditing and forensic accounting.',
      'Industry and commerce, services and consulting, technology and innovation. Our client base includes more than 600 companies across 6 countries, from museums to importers.',
      'We take on the transition: we assess the company\u2019s accounting and tax position, identify outstanding items and set the migration schedule before starting the routines.',
      'Each client has a dedicated team with a direct technical lead. You never go through a call centre to reach the people doing your work.',
      'We are ISO 9001 certified, with audited processes and access control over each client\u2019s information.',
      'Yes. We are members of IECnet and represent the Italian-Brazilian Chamber of Commerce in the state of São Paulo, which allows us to support operations between Brazil and other markets.',
    ],

    ctaTitulo: 'Book a meeting',
    ctaBotao: 'Get in touch',
  },

  blog: {
    heroKicker: 'Asscont content',
    heroTitulo: 'Publications',
    heroSub: 'Information for safer business decisions.',
    lerMais: 'Read more',
    voltar: 'All publications',
    falarBotao: 'Talk to Asscont',
    artigos: {
      '2026-previsibilidade': {
        titulo: '2026 will demand more than growth. It will demand predictability.',
        resumo:
          'The business environment projected for the next cycle points to a scenario of strategic caution.',
        texto:
          'The business environment projected for the next cycle points to a scenario of strategic caution. The consolidation of the Brazilian tax reform, the behaviour of public accounts and the political context all reinforce the importance of structured decisions grounded in reliable data.',
        categoria: 'Business management',
      },
      'stf-distribuicao-lucros-dividendos': {
        titulo:
          'Supreme Court ruling reinforces legal certainty and guides corporate planning.',
        resumo:
          'The ruling extends the deadline tied to approving the distribution of profits and dividends for the 2025 financial year.',
        texto:
          'Brazil\u2019s Federal Supreme Court (STF) has extended to 31 January 2026 the deadline for approving the distribution of profits and dividends relating to the 2025 financial year — a condition set out in Law No. 15,270/2025 for maintaining the income tax exemption.',
        categoria: 'Tax and corporate',
      },
      'departamento-pessoal-estrategico': {
        titulo:
          'Strategic Payroll and HR: the quiet pillar behind security, growth and trust in companies',
        resumo:
          'Payroll and HR go far beyond the operational routines of hiring, terminations, payroll and time tracking.',
        texto:
          'The payroll and HR department is fundamental to how a company runs. Although it is often associated only with operational routines — hiring, terminations, payroll and time tracking — its role goes well beyond those activities.',
        categoria: 'Payroll and HR',
      },
    },
  },
  legal: {
    kicker: 'Legal information',
    termosTitulo: 'Terms of Use',
    privacidadeTitulo: 'Privacy Policy',
    atualizadoEm: 'Last updated',
    verTermos: 'View the Terms of Use',
    verPrivacidade: 'View the Privacy Policy',
    somentePortugues:
      'This document is available in Portuguese only. The Portuguese version is the binding one. If you need help understanding it, please get in touch.',
  },
};

export default en;

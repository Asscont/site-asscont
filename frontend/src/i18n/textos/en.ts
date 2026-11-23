import { traducoesFimEscala6x1 } from '../../data/artigoFimEscala6x1';
/* Inglês. Só precisa conter as chaves já traduzidas — o que faltar aqui
   aparece em português. Chave com string vazia também cai para o português,
   então dá para deixar o campo criado e preencher depois.

   REVISAR COM A ASSCONT: 'publicacoes' (Publications x Insights) e o nome
   comercial das páginas institucionais. */

import type { Textos, Traducao } from './pt';

const en: Traducao<Textos> = {
  meta: {
    sufixo: ' | ASSCONT',
    inicioTitulo: 'ASSCONT — Accounting, Audit and Consulting',
    inicioDescricao:
      'For nearly 50 years, integrated accounting, audit, tax and consulting solutions for Brazilian and multinational companies. IECnet member.',
    servicosTitulo: 'Services',
    servicosDescricao:
      'Accounting outsourcing, tax management, payroll and financial BPO, audit, corporate services, forensic accounting and tax consulting.',
    quemSomosTitulo: 'About Us',
    quemSomosDescricao:
      'Since 1977, serving more than 600 clients across 6 countries. ISO 9001 certified, with international reach through IECnet.',
    publicacoesTitulo: 'Publications',
    publicacoesDescricao:
      'Analysis and updates on Brazilian accounting, tax and labour legislation for safer business decisions.',
    contatoTitulo: 'Contact',
    contatoDescricao:
      'Get in touch with ASSCONT. Offices in Barueri and São Paulo, Monday to Friday, 8:30 am to 5:30 pm.',
    trabalheConoscoTitulo: 'Careers',
    trabalheConoscoDescricao:
      'Open roles in accounting, tax, payroll and technology. On-site in São Paulo, with benefits and a career path.',
    termosTitulo: 'Terms of Use',
    termosDescricao: 'Terms of use for the ASSCONT corporate website.',
    privacidadeTitulo: 'Privacy Policy',
    privacidadeDescricao:
      'How ASSCONT handles the personal data collected on this website, under Brazilian data protection law.',
  },
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
    enviando: 'Sending…',
    sucesso: 'Done! Your e-mail has been registered.',
    emailInvalido: 'Please check the e-mail address you entered.',
    erro: 'We could not register you right now. Please write to contato@asscont.com.br.',
    avisoP1:
      'Asscont values your privacy. When you subscribe to our newsletter, your data will be used solely to send Asscont content, news and information.',
    aceite:
      'I agree to the collection and use of the data provided in order to receive the Asscont newsletter. To learn more about how we look after your data, see our',
    avisoLink: 'Privacy Policy',
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
      'We deliver tailored strategic solutions with confidence, excellence and business insight for Brazilian and multinational companies.',
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
    postsLinkedinAltModelo: 'ASSCONT LinkedIn post from {data}',
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

    experienciaAntes: 'ASSCONT\u2019s',
    experienciaDestaque: 'experience',
    experienciaResto: 'at the service of\nyour company and your business',
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
      'A law firm with a multidisciplinary practice, offering tailored legal solutions focused on preventing and resolving disputes, protecting rights and building solid relationships.',
      'A law firm operating nationally and internationally, specialised in corporate, regulatory and strategic legal advice for organisations across different sectors of the economy.',
      'A corporate law firm that develops legal intelligence to make business possible, combining technical knowledge, innovation and work on highly complex matters.',
      'A firm specialised in Corporate and Company Law, with tailored work on transactions, reorganisations, deals and corporate matters of varying complexity.',
      'A consultancy specialised in the incorporation, structuring and administrative and asset management of Brazilian companies, supporting foreign investors seeking to operate in Brazil.',
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
    vagasTitulo: 'Our most in-demand roles',
    vagasNota:
      'All positions are on-site in São Paulo/SP, from 8:12 am to 6:00 pm, Monday to Friday.',
    destaqueTag: 'Featured',
    verDetalhesCandidatar: 'See details and apply',
    semVagas:
      'There are no open positions right now. Send us your résumé and we will let you know when a matching opportunity opens.',
    enviarCurriculo: 'Send résumé',

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
      'Discounts at partner institutions to support your continued professional development',
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
      'Experience, technical knowledge and an advisory approach to\nsupport your company with confidence, efficiency and strategic insight.',
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
      'Financial statement audits, agreed-upon procedures and due diligence.',
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
      'Industry and commerce, services and the non-profit sector, technology and innovation. Our client base includes more than 600 companies across 6 countries, from museums to importers.',
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
      'novo-pacote-fiscal-impactos-2027': {
        titulo: "New fiscal package: what may change for companies and the impacts for 2027",
        resumo: "A review of tax benefits, changes to Presumed Profit and restrictions on offsetting tax credits increase the need for planning and financial predictability.",
        texto: "ASSCONT | Business Information and Guidance 19 November 2026\n\nThe Brazilian tax environment is going through a period of significant change. While companies prepare for the gradual implementation of the Consumption Tax Reform, new fiscal adjustment proposals are moving forward in the National Congress, with possible impacts on the tax burden, operating costs and financial planning for 2027.\n\nOn 18 November 2026, according to the legislative information considered in this analysis, the Federal Senate completed its vote on Supplementary Bill No. 299/2026, which brings together measures aimed at increasing revenue, reviewing tax benefits and controlling public spending.\n\nIt is important to stress that the bill still has to be considered by the Chamber of Deputies and go through the remaining stages of the legislative process. The measures presented should therefore not be interpreted as definitively established tax obligations.\n\nFor the business sector, the main question goes beyond the possible changes to the legislation: it is understanding how different tax changes may simultaneously affect organisations’ profitability, competitiveness and capacity to invest.\n\n## 1. Presumed Profit: possible increase in taxation\n\nOne of the most significant proposals involves raising the presumption percentages used to calculate Corporate Income Tax (IRPJ) and the Social Contribution on Net Profit (CSLL) for companies with annual revenue above BRL 5 million.\n\nUnder the Presumed Profit regime, these taxes are calculated by applying percentages to revenue, according to the company’s activity, rather than directly to the profit actually earned.\n\nUnder the 2026 rules considered in the proposal, there is already a 10% increase on the presumption percentages applicable to the portion of revenue that exceeds the established threshold. The new text provides for raising this increase to 20%.\n\nFor certain service providers subject to the 32% presumption percentage, this would mean a rise from 35.2% to 38.4% on the excess portion, if the proposal is approved as presented.\n\nThe main impact lies in the possibility of higher taxation without a proportional increase in the company’s actual profit.\n\nThis scenario deserves particular attention from organisations that operate on tight margins or have more complex cost structures.\n\nIt also reinforces the importance of periodic assessments of whether the tax regime remains suitable, especially when comparing Presumed Profit and Actual Profit, taking into account the specific features of each operation.\n\n## 2. Reduction of tax benefits: possible effects on costs and competitiveness\n\nAnother relevant point is the proposal to increase the across-the-board cut in certain federal tax benefits from 10% to 20%, subject to the exceptions set out in the legislative text.\n\nTax incentives can be important components of the financial structure of companies operating in specific sectors or using special tax regimes.\n\nA possible reduction of these advantages may change cost projections, operating margins and investment decisions.\n\nFor business management, the challenge is to understand to what extent the benefits considered in current planning will remain available and what the economic effects of possible changes would be.\n\nThe analysis of tax incentives needs to be integrated into the organisation’s financial planning and long-term strategy.\n\n## 3. Offsetting of tax credits: attention to cash flow\n\nThe package also includes mechanisms that may establish temporary limits on certain offsets of federal taxes.\n\nTax offsetting allows, under the conditions provided by law, recognised credits to be used to settle tax liabilities.\n\nAny restrictions on this mechanism do not necessarily mean higher tax rates, but they may change companies’ available funds.\n\nThis is because amounts that would be used to offset tax obligations may, depending on the rules approved, require cash outlays in certain periods.\n\nFor companies with more complex operations, the effects on working capital and on the predictability of payments may be significant.\n\nIn this context, managing tax credits and monitoring legislative changes become even more important in organising cash flow.\n\n## 4. Personal Income Tax: what needs to be distinguished?\n\nFiscal adjustment proposals also call for attention to the difference between the taxation of companies and the taxation of individuals’ income.\n\nThe bill under analysis does not, in itself, establish a new general Personal Income Tax (IRPF) table, nor does it represent a general increase in the tax levied on salaries.\n\nHowever, other legislative initiatives may affect the taxation of personal income and the financial relationships between companies and their partners.\n\nFor this reason, it is important that business analyses consider all the legislative changes together, without confusing separate proposals or anticipating effects that still depend on approval.\n\n## 5. Tax Reform and fiscal adjustment: simultaneous challenges for 2027\n\nOne of the most relevant aspects of the current scenario is the overlap of tax changes.\n\nOn the one hand, companies are moving ahead with preparations for the Consumption Tax Reform, which involves adapting processes, systems, contracts and tax routines.\n\nOn the other, new fiscal adjustment proposals may change the taxation of results, the use of benefits and the management of tax credits.\n\nThese changes should not be analysed in isolation.\n\nA tax change can affect pricing. A review of incentives can change operating margins. Restrictions on offsetting credits can put pressure on cash flow.\n\nWhen these effects occur at the same time, the complexity of business planning increases.\n\nThe challenge for 2027 will be to turn regulatory changes into understandable financial scenarios, enabling safer and better-grounded decisions.\n\nTo achieve this, integration between accounting, controllership, financial management and strategic planning will be especially relevant.\n\n## 6. Business planning: which aspects deserve attention?\n\nIn view of the proposals under discussion, some points become more relevant in organisations’ tax and financial assessments:\n\n- Tax planning: periodic analysis of whether the tax regime suits the company’s structure of revenue, costs and results.\n- 2027 budget: preparing projections that consider different tax scenarios and their possible effects on profitability.\n- Pricing: assessing the impact of tax changes on costs, margins and competitive positioning.\n- Tax benefits: monitoring the incentives used and identifying possible exposure to legislative changes.\n- Cash flow: analysing the effects of possible restrictions on the use of tax credits and working capital needs.\n- Commercial contracts: specialised assessment of contractual provisions that may be affected by significant changes in taxation.\n\nThese aspects should be examined in light of the legislation in force, the characteristics of each company and the progress of the proposals in the National Congress, with the support of specialised professionals.\n\nMore than anticipating obligations, the goal is to increase the ability to understand risks and build decision scenarios.\n\n## 7. Fiscal balance and its effects on the business environment\n\nThe debate on fiscal adjustment involves the need to balance public accounts while preserving conditions that favour investment, productivity and economic growth.\n\nFor the productive sector, successive tax changes may pose additional challenges, especially when they coincide with a structural reform of the consumption tax system.\n\nPredictable rules are an important element for medium- and long-term business decisions.\n\nFor this reason, following legislative developments should not be merely a compliance activity, but also part of organisations’ strategic analysis.\n\nCompanies that understand the possible economic effects of the changes are better prepared to assess risks, preserve their operational efficiency and support their decisions.\n\n## Final remarks | ASSCONT’s view\n\nThe 2027 tax scenario will require more from companies than knowledge of new rules. They will need to understand how different changes may relate to one another and influence business results.\n\nAt ASSCONT, we believe that accounting should go beyond meeting legal obligations. Its strategic contribution lies in its ability to organise information, interpret scenarios and provide certainty for business decisions.\n\nIn an environment of regulatory change, technical rigour, planning and an integrated view become essential to the sustainability of organisations.\n\nASSCONT follows the progress of legislative proposals and stresses the importance of specialised assessments that take into account the tax, financial and operational specifics of each company.\n\nASSCONT | Accounting intelligence that supports sound decisions.\n\nEditorial note: this article presents an informative analysis of legislative proposals under discussion, based on the scenario described on 19 November 2026. The measures mentioned depend on the completion of the legislative process and may change. The content does not replace an individual tax or legal assessment.",
        categoria: "Tax and corporate law",
      },
      'holdings-seguranca-juridica-propostas-tributarias': {
        titulo: "Asset and business holding companies: the risks of legal uncertainty in light of new tax proposals",
        resumo: "The debate on the taxation of dividends revives a fundamental question: how can abusive practices be combated without compromising legitimate structures for organising assets and businesses?",
        texto: "ASSCONT | Business Information and Guidance 19 November 2026\n\nUsing holding companies as a tool for corporate organisation, asset management, succession planning and investment management is a legitimate practice, widely adopted in Brazil and in other countries.\n\nThese structures play an important role in corporate governance, in the continuity of family businesses and in the management of shareholdings and investments.\n\nHowever, recent legislative proposals on the taxation of profits and dividends widen a discussion that deserves attention: the risk that duly incorporated structures may be challenged on the basis of overly broad interpretations of tax planning and abuse of rights.\n\nBill No. 5,854/2026, submitted to the Chamber of Deputies on 13 November 2026, proposes changes to the taxation of dividends and restrictions on the use of mechanisms that interpose legal entities to reduce or avoid Income Tax.\n\nAccording to the legislative information considered in this analysis, the proposal is not yet law and, on 19 November, a request was filed for its withdrawal.\n\nEven so, the content of the proposal highlights an issue that matters to business owners, investors and families who use holding companies: the importance of preserving objective criteria and legal certainty in the interpretation of corporate structures.\n\n## 1. What is under discussion in the taxation of holding companies?\n\nThe bill proposes taxing profits and dividends distributed to individuals at a rate of 15%, regardless of the amount received.\n\nOn the other hand, it preserves, in principle, the non-taxation of profit distributions between legal entities domiciled in Brazil.\n\nThe concern arises from the proviso intended to prevent the use of corporate structures whose purpose is to artificially avoid taxation of the ultimate beneficiaries.\n\nCombating tax evasion, fraud and sham transactions is necessary for the integrity of the tax system.\n\nHowever, there is a fundamental distinction between a structure set up to serve legitimate business purposes and an artificial transaction designed to conceal income or disguise taxable events.\n\nThe existence of a holding company should not, on its own, be interpreted as a sign of tax irregularity.\n\nA corporate structure may serve different economic, asset and succession objectives, including when its organisation also provides tax efficiency within legal limits.\n\nThe challenge lies in establishing criteria clear enough to distinguish legitimate planning from genuinely abusive practices.\n\n## 2. The risk of subjective interpretations and their effects on legal certainty\n\nOne of the challenges of the Brazilian tax environment is the need for predictability in how rules are applied.\n\nWhen legislation uses broad concepts without properly defining the criteria for applying them, disputes may arise between taxpayers and tax authorities.\n\nIn the context of holding companies, this concern becomes more relevant because a single structure may combine different legitimate purposes, such as:\n\n- Centralising shareholdings and investments.\n- Organising family succession and business continuity.\n- Separating operating activities from asset management.\n- Establishing governance rules and rules for the relationship between partners.\n- Managing real estate, financial investments and other assets.\n- Reinvesting results received from subsidiaries.\n\nThese purposes do not cease to be legitimate simply because the structure may also offer tax advantages provided for by law.\n\nTax efficiency, when achieved by legally permitted means, does not in itself constitute an irregularity.\n\nOn the other hand, the formal regularity of a company does not remove the need to examine the economic substance of its transactions and compliance with legal requirements.\n\nLegal certainty depends on clear rules, objective criteria and analyses grounded in the specific circumstances of each transaction.\n\nThis balance is essential to preserve both the legitimate work of the tax authorities and the rights of taxpayers.\n\n## 3. Tax inspection: the importance of objective criteria\n\nAnother relevant aspect of the debate concerns the limits of tax authorities’ action regarding duly incorporated corporate structures.\n\nTaxpayers have the right to organise their activities and assets within the alternatives permitted by law.\n\nAt the same time, tax authorities have the power to examine transactions and challenge situations where there are legal grounds and concrete evidence of irregularities.\n\nThe central point is the need for proper grounds.\n\nAny disregard of corporate acts or structures must observe the applicable legal requirements, the facts actually demonstrated and the guarantees of due process.\n\nIt would not be appropriate to presume abuse solely because a given business organisation produces more favourable tax effects.\n\nLikewise, the analysis of a holding company cannot be limited to its formal incorporation while disregarding how its activities are actually carried out.\n\nFor business owners and investors, the predictability of these interpretations is especially important.\n\nAsset and corporate structures often involve long-term decisions, such as family succession, reorganisation of shareholdings, investments and the preservation of assets.\n\nThe possibility of unpredictable interpretations may increase the perception of risk and make it harder to plan these transactions.\n\nThe stability of tax rules is an essential component of the confidence that long-term business decisions require.\n\n## 4. Governance and documentation: relevant aspects for the security of holding companies\n\nIn view of the legislative discussions, attention should not be focused on hasty changes to legitimate corporate structures.\n\nThe most important aspect is to understand the legal, economic, accounting and asset consistency of these organisations.\n\nIn this context, some elements deserve attention in specialised assessments.\n\n## Economic and asset purpose\n\nSetting up a holding company may be related to investment management, corporate organisation, family succession or business continuity.\n\nClarity about these purposes helps demonstrate consistency between the structure adopted and its objectives.\n\n## Corporate regularity\n\nArticles of association, minutes, resolutions, registrations and other corporate documents are important elements to show that the organisation exists and actually operates.\n\n## Asset separation\n\nThe distinction between the company’s resources and its partners’ personal assets is a fundamental aspect of governance.\n\nProper accounting and financial organisation contributes to the transparency of transactions and the consistency of records.\n\n## Distribution of profits\n\nDistributions made between companies or to partners involve legal, accounting and corporate requirements that must be considered according to the nature of each transaction.\n\n## Related-party transactions\n\nLoans, advances, payment of expenses and other transactions between companies and partners may require specific attention as to their nature, documentation and tax treatment.\n\n## Periodic review of the structure\n\nChanges in legislation and in business or family objectives may make a specialised assessment of the corporate organisation necessary.\n\nThese elements are not an automatic guarantee against tax challenges, but they form part of a more transparent and consistent governance structure.\n\n## 5. The importance of holding companies for business continuity\n\nHolding companies perform functions that go beyond the tax dimension.\n\nIn family businesses, for example, they can help organise succession and establish rules for management and shareholding.\n\nIn business groups, they can make it easier to centralise investments, organise shareholdings and define responsibilities among different companies.\n\nIn asset management, they can be part of asset management strategies and long-term planning.\n\nThese uses show that the discussion about holding companies should not be reduced to the possibility of tax savings.\n\nCorporate organisation is also an instrument of governance, continuity and business predictability.\n\nFor this reason, legislative changes affecting these structures need to consider their effects on the security of investments and the stability of business relationships.\n\n## 6. Freedom of business organisation and combating tax abuse\n\nImproving tax legislation and combating abusive practices are objectives compatible with preserving the freedom of business organisation.\n\nThis is not about removing tax inspection or preventing irregular transactions from being challenged.\n\nIt is about ensuring that such challenges are based on legal, objective and verifiable criteria.\n\nThe pursuit of greater revenue and tax fairness must be accompanied by mechanisms that preserve the predictability of rules and respect for taxpayers’ rights.\n\nFor companies, investors and families, legal stability is an important element in defining asset strategies and long-term decisions.\n\nCombating tax abuse must not turn into a general presumption of irregularity. Likewise, legitimate tax planning cannot automatically be confused with tax evasion.\n\nThe balance between efficient tax inspection and legal certainty is fundamental to a business environment that encourages investment, governance and economic development.\n\n## Final remarks | ASSCONT’s view\n\nThe debate on the taxation of dividends and the use of holding companies reinforces the importance of corporate structures grounded in legitimate objectives, supported by governance, transparency and accounting consistency.\n\nAt ASSCONT, we believe that asset and business organisation should be analysed in an integrated way, considering its economic, corporate, accounting and tax aspects.\n\nThe existence of new legislative proposals does not, in itself, mean that duly incorporated structures should be abandoned or changed.\n\nAbove all, the scenario reinforces the relevance of specialised monitoring and periodic assessment of the conditions under which these organisations operate.\n\nASSCONT follows the progress of the legislative discussions, recognising the importance of clear rules, legal certainty and respect for taxpayers’ rights.\n\nIn an environment of constant change, predictable rules and the quality of accounting information remain fundamental to protecting business continuity and supporting long-term decisions.\n\nASSCONT | Accounting intelligence that supports sound decisions.\n\nTechnical note: this article addresses discussions related to Bill No. 5,854/2026, submitted on 13 November 2026, according to the information considered in preparing the content. The proposal should not be interpreted as legislation in force. The considerations on risks of interpretation and inspection are preventive in nature and do not state that the Federal Revenue Service is already adopting such procedures as a result of this bill. The content is informative and does not replace specialised legal, corporate or tax analysis.",
        categoria: "Tax and corporate law",
      },
      'fim-da-escala-6x1-o-que-as-empresas-precisam-fazer-agora': traducoesFimEscala6x1.en,
      'pro-labore-distribuicao-lucros-seguranca-socios': {
        titulo: "Pró-labore and profit distributions: proper separation protects companies and their owners",
        resumo: "Understand why remuneration for owners’ work differs from profit distributions and how accurate accounting and corporate records help protect the business.",
        texto: "In many companies, one person holds two roles: they are a shareholder or partner in the business and also take part in its management or operations. Although these roles are held by the same person, the payments received in each capacity have different legal and accounting characteristics and must be properly identified.\n\nAs an owner, that person shares in the company's results and bears business risks. For work performed, they receive remuneration. This distinction should be reflected in documents, accounting records, and payment procedures.\n\n**Profit distributions** arise from ownership interests and depend on the existence of duly determined, distributable profits, as well as compliance with corporate rules.\n\n**Pró-labore**, by contrast, is remuneration for work performed in the company, whether in management, leadership, or professional activities.\n\nA working owner may receive both. The essential safeguard is to document the basis for each payment.\n\n## Why does this distinction matter?\n\nIn Decision No. 2201-010.366 of March 2023, Brazil's Administrative Council of Tax Appeals (CARF) upheld the assessment of social security contributions on amounts classified as profit distributions by a medical services company.\n\nFactors considered included payments linked to individual services, advances without sufficient accounting determination of profits, and the absence of a reliable separation between remuneration and profit.\n\nThrough Cosit Tax Ruling No. 120/2016, the Brazilian Federal Revenue Service also emphasized, for professional-services civil partnerships, the obligation to distinguish compensation for work from amounts corresponding to profits.\n\nThese interpretations reinforce an important principle: **the label assigned to a payment must match its actual nature.**\n\nAn accounting entry or bank transfer described as “profits” does not replace evidence of the underlying result and the origin of the withdrawal.\n\n## How should payments to owners be organized?\n\nOrganizing withdrawals requires clear criteria, appropriate documentation, and consistent accounting records.\n\nThe main points deserving attention include:\n\n## 1. Define each owner's role\n\nDistinguish those who participate only as investors from those who also manage or work directly in the business.\n\n## 2. Formalize remuneration for work\n\nCompensation should follow criteria consistent with the duties performed, together with the applicable records and statutory contributions.\n\n## 3. Determine profits before distributing them\n\nAccounting records must be up to date, supported by financial statements that substantiate the amounts distributed, including any advances.\n\n## 4. Document corporate decisions\n\nThe allocation of profits must comply with the company's governing documents and the approvals required.\n\n## 5. Record withdrawals separately\n\nAccounting records and supporting documents must make it possible to distinguish pró-labore, profit distributions, and other transactions involving owners.\n\n## Why remuneration criteria should be reviewed\n\nAs a management measure, the amount of pró-labore deserves review when an owner's responsibilities change.\n\nSetting merely nominal compensation without considering the work actually performed and other withdrawals can leave important questions unanswered.\n\nLikewise, the status of an owner who only invests in the business without providing services must be clearly documented.\n\nThis separation goes beyond accounting classification: it provides a more accurate view of the company's financial and ownership structure.\n\n## Accounting transparency and sound decisions\n\nProperly distinguishing pró-labore from profit distributions improves management transparency, the quality of accounting information, and confidence in business decisions.\n\nIt also helps identify the cost of owners' work and assess the company's results more accurately.\n\n**A well-documented withdrawal structure strengthens corporate governance and helps reduce tax and social security risks.**\n\nAsscont can help review withdrawal arrangements, organize accounting records, and assess the necessary supporting documents, taking into account each company's characteristics and applicable law.\n\nAsscont — accounting excellence for confident decisions and lasting relationships.",
        categoria: "Tax and corporate law",
      },
      'nr-1-suspensao-sancoes-stf': {
        titulo: 'NR-1: Supreme Court temporarily suspends penalties, with guidance for companies',
        resumo:
          'Brazil’s Federal Supreme Court has temporarily suspended certain penalties linked to the psychosocial risk factors of NR-1. The standard itself, however, remains in force.',
        texto:
          'Information updated on 11 November 2026.\n\nDear clients,\n\nAsscont wishes to inform you that Brazil’s Federal Supreme Court (STF) has ordered the temporary suspension of certain penalties relating to the assessment of psychosocial risk factors in the workplace, as set out in Regulatory Standard No. 1 (NR-1).\n\nThe decision comes amid questions about the clarity of the criteria for assessing these risks and for holding companies accountable.\n\nIt is important to stress that the measure does not suspend NR-1 in its entirety, nor does it remove any of the other obligations relating to occupational health and safety.\n\n## 1. What did the Supreme Court decide?\n\nAccording to the information presented in Claim of Non-Compliance with a Fundamental Precept (ADPF) No. 1,316, the suspension was first ordered on 25 June 2026 for a period of 90 days and was later confirmed by the full bench of the STF.\n\nOn 24 September 2026, the measure was extended for a further 90 days, allowing technical discussions aimed at establishing more objective criteria for applying the rules to continue.\n\nThe suspension covers infringement notices, fines, punitive notifications and other coercive measures based on items 1.5.3.1.4, 1.5.3.2.1, 1.5.4.4.2.1, 1.5.4.4.2.2 and 1.5.4.4.5.3 of NR-1, solely as regards work-related psychosocial risk factors.\n\nIn October 2026, the STF also authorised the Office of the Attorney General (AGU) to take part in the technical discussions and suspended the proceedings for 60 days, keeping in place, during that period, the effects of the interim decision on the penalties in question.\n\nPlease note: the suspension has a specific scope and does not amount to a general waiver of companies’ responsibilities regarding Occupational Health and Safety (OHS).\n\n## 2. What precautions should companies maintain?\n\nEven with the temporary suspension of these penalties, the general guidelines on preventing harm to and protecting the health of workers remain relevant.\n\nIn this context, organisations are advised — with the support of professionals specialised in Occupational Health and Safety (OHS) and the involvement of their Human Resources and Administration teams — to keep the following aspects in mind:\n\n- Assessment of working conditions: analysis of factors such as workload, working hours, management practices, harassment and other conditions that may compromise workers’ health and well-being.\n- Review of risk management tools: checking whether the Preliminary Ergonomic Assessment (AEP), the inventory of occupational risks and the action plan of the Risk Management Programme (PGR) need updating, taking into account the requirements and any exemptions applicable to each organisation.\n- Continuity of preventive measures: maintaining prevention and corrective actions, with clearly assigned responsibilities, monitoring of deadlines and documentation of the steps taken.\n- Participation and monitoring: involving workers in the assessment of working conditions and monitoring the effectiveness of the measures implemented.\n\nThese practices support more structured preventive management, helping to organise internal processes and reduce exposure to labour and operational risks.\n\n## 3. What to do in the event of an inspection or infringement notice?\n\nIf a company receives a notification or infringement notice relating to psychosocial risk factors, the situation should be analysed by the company’s legal advisers together with the professionals responsible for OHS.\n\nThis assessment should consider the basis of the requirement, whether it falls within the scope of the STF decision and the applicable administrative deadlines.\n\nThe suspension of certain penalties does not mean that all notifications or requirements relating to NR-1 are automatically set aside.\n\nEach situation therefore calls for individual analysis, especially regarding the obligations that remain in force.\n\n## 4. What does this scenario mean for companies?\n\nThe suspension period is an opportunity for organisations to review their internal processes, improve their documentation and strengthen their prevention practices.\n\nBeyond following the legal developments, it is important to understand that occupational risk management is part of a broader framework of governance, regulatory compliance and corporate responsibility.\n\nAs the technical discussions progress, they may bring clarity on the criteria for assessing and inspecting psychosocial risk factors.\n\nUntil a decision is reached, keeping up with regulatory and judicial updates, together with the support of specialised professionals, remains essential to acting safely and consistently.\n\n## Asscont’s guidance\n\nAsscont stresses the importance of following the developments of the STF decision and of maintaining a preventive, organised approach aligned with the applicable legal obligations.\n\nOur team remains available to clarify the possible labour implications and to help coordinate with the professionals responsible for the necessary technical assessments and adjustments.\n\nKind regards,\n\nAsscont Assessoria Contábil e Auditoria',
        categoria: 'Labour',
      },
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
        categoria: 'Tax and corporate law',
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
    sumario: 'Document index',
    kicker: 'Legal information',
    termosTitulo: 'Terms of Use',
    privacidadeTitulo: 'Privacy Policy',
    atualizadoEm: 'Last updated',
    verTermos: 'View the Terms of Use',
    verPrivacidade: 'View the Privacy Policy',
    somentePortugues:
      'This document is available in Portuguese only. The Portuguese version is the binding one. If you need help understanding it, please get in touch.',
  },

  erro404: {
    kicker: 'Error 404',
    titulo: 'Page not found',
    descricao:
      'The address you opened does not exist on this site. It may have been mistyped, or the content may have moved.',
    voltar: 'Go to the home page',
    sugestoes: 'You may be looking for:',
  },
};

export default en;

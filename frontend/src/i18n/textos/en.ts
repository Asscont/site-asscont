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
    termos: 'Terms of Service',
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
};

export default en;

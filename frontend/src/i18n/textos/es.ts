/* Espanhol. Mesma regra do inglês: o que faltar cai para o português.

   Atenção: em espanhol o texto costuma ficar mais comprido que em português.
   Depois de traduzir um bloco, conferir se nada quebrou o layout em 390px. */

import type { Textos, Traducao } from './pt';

const es: Traducao<Textos> = {
  header: {
    logoAlt: 'Asscont — página de inicio',
    navegacao: 'Navegación principal',
    abrirMenu: 'Abrir menú',
    fecharMenu: 'Cerrar menú',
    inicio: 'Inicio',
    servicos: 'Servicios',
    quemSomos: 'Quiénes Somos',
    publicacoes: 'Publicaciones',
    contato: 'Contacto',
  },

  idioma: {
    rotulo: 'Idioma',
    trocarPara: 'Ver el sitio en',
  },

  newsletter: {
    titulo: 'Suscríbete a nuestro boletín',
    subtitulo: 'Y mantente al día con las principales novedades.',
    placeholder: 'Registra tu correo:',
    rotuloCampo: 'Correo electrónico',
    enviar: 'Enviar correo',
  },

  rodape: {
    navegacao: 'Navegación',
    inicio: 'Inicio',
    servicos: 'Servicios',
    quemSomos: 'Quiénes somos',
    publicacoes: 'Publicaciones',
    contato: 'Contacto',
    legal: 'Legal',
    faq: 'Preguntas frecuentes',
    termos: 'Términos de Servicio',
    privacidade: 'Privacidad',
    trabalheConosco: 'Trabaja con nosotros',
    carreiras: 'Conoce nuestra área de carreras',
    redesSociais: 'Redes sociales de Asscont',
    copyright: 'Copyright © 2026',
  },
  inicio: {
    heroTagline: 'Tradición, innovación y excelencia desde hace casi 50 años',
    heroTitulo: 'Soluciones integradas para la gestión empresarial.',
    heroBotao: 'Saber más',

    redeDestaque: '26ª mayor',
    redeSubtitulo: 'Red contable del mundo (IAB 2024)',
    redeRotulos: [
      'empresas miembro',
      'países',
      'continentes',
      'idiomas diferentes',
      'socios conectados',
      'profesionales',
    ],
    redeChamadaL1: 'Su empresa en Brasil.',
    redeChamadaL2: 'Conectada al mundo.',
    redeLegenda: 'Miembros de IECnet — red internacional de firmas independientes',

    servicosTitulo: 'Soluciones',
    servicosSub: 'Nuestros servicios',
    servicosNomes: [
      'Outsourcing Contable',
      'Gestión Fiscal',
      'BPO Laboral',
      'Auditoría',
      'Societario',
      'Y mucho más',
    ],
    servicosLegenda: 'Conozca nuestros servicios',

    certTitulo: 'Certificaciones',
    certLinha1: 'Inteligencia contable con',
    certLinha2: 'estándar de excelencia',
    selosAlt: [
      'PQEC Executivo Gold — Innovación',
      'PQEC Executivo Gold — Emprendimiento',
      'PQEC Executivo Gold — Calidad',
      'PQEC Executivo Gold — Gestión',
      'ABNT — Sistema Certificado',
    ],

    sobreFotoAlt: 'Edificios corporativos',
    sobreTitulo: 'Quiénes somos',
    sobreSub: 'Sobre nosotros',
    sobreP1:
      'El Grupo ASSCONT, con casi 50 años de experiencia, reúne a profesionales con la más alta especialización en contabilidad, auditoría, BPO financiero, legalización empresarial y societaria, peritaje contable, consultoría tributaria y de gestión.',
    sobreP2:
      'Ofrecemos soluciones estratégicas personalizadas con seguridad, excelencia y visión de negocio para empresas nacionales y multinacionales.',
    sobreP3:
      'Nuestra trayectoria se construyó sobre tres principios fundamentales: excelencia técnica, relación cercana con los clientes y compromiso permanente con la calidad de la información que producimos.',
    sobreP4:
      'ASSCONT integra IECnet — International Association of Accounting and Auditing Professionals, una de las asociaciones internacionales de firmas independientes de auditoría y consultoría con más tradición. Esta conexión representa mayor alineación técnica, actualización constante y una visión integrada de las tendencias regulatorias y de gobernanza.',
    sobreLinkServicos: 'Nuestros Servicios',
    sobreLinkPublicacoes: 'Publicaciones',

    clientesTag: 'Algunos de nuestros clientes',

    fundadorAlt: 'Antonio Carlos Lopes, fundador de Asscont',
    diferenciaisL1: 'Diferenciales',
    diferenciaisL2: 'competitivos',
    diferenciais: [
      'Casi 50 años de experiencia',
      'Estructura integrada (end-to-end)',
      'Actuación consultiva y estratégica',
      'Fuerte experiencia en consultoría tributaria',
      'Presencia internacional (IECnet)',
      'Alto estándar de compliance y gobernanza',
      'Relación cercana y personalizada',
    ],

    parceriasTitulo: 'Alianzas internacionales',
    camaraSub: 'CÁMARA DE COMERCIO ÍTALO-BRASILEÑA',
    camaraTexto:
      'La actuación internacional de Asscont se refuerza con el nombramiento de Antonio Carlos Lopes, director y fundador de la empresa, como representante de la Cámara de Comercio Ítalo-Brasileña en el estado de São Paulo. La iniciativa amplía la conexión de Asscont con el entorno de negocios entre Brasil e Italia, fortaleciendo su presencia institucional y su capacidad de apoyar a empresas en procesos de relación y expansión internacional.',
    camaraLogoAlt: 'Cámara de Comercio Ítalo-Brasileña',
    iecnetTexto:
      'Asscont integra IECnet, red internacional fundada en 1987 que reúne cerca de 80 firmas en seis continentes. Esta conexión amplía su capacidad de apoyar a los clientes en operaciones locales e internacionales, con acceso a una red global guiada por altos estándares profesionales, cooperación estratégica y soporte cualificado en distintos mercados.',
    iecnetFotoAlt: 'Encuentro de la red IECnet',
    forumOfFirmsAlt: 'Member of the Forum of Firms',

    socialKicker: 'Contenido y novedades',
    socialTituloL1: 'En nuestras',
    socialTituloL2: 'redes',
    socialTabsAria: 'Elija la red social',
    socialLinkedinTexto:
      'Manténgase al día con nuestros análisis, novedades y contenidos exclusivos en LinkedIn.',
    socialLinkedinBotao: 'Ver LinkedIn',
    socialInstagramTexto:
      'Siga también el día a día de ASSCONT, contenidos técnicos y novedades en',
    socialInstagramBotao: 'Ver Instagram',
    postsLinkedinAria: 'Publicaciones de LinkedIn',
    postsInstagramAria: 'Destacados recientes de Instagram',
    postsLinkedinAlt: [
      'La inteligencia artificial acelera procesos',
      'Impuesto sobre la Renta 2026',
      'Salud mental en el trabajo',
    ],
    postsInstagramAlt: [
      'NFS-e en operaciones de arrendamiento',
      'Alto rendimiento en la práctica',
      'PER/DCOMP: seguridad antes de la transmisión',
    ],

    publicacoesTitulo: 'Publicaciones',
    publicacoesAria: 'Publicaciones de Asscont',
    publicacoesLerMais: 'Leer más',

    contatoTitulo: 'Construyamos decisiones más seguras para su negocio.',
    contatoLead1:
      'Nuestro equipo está preparado para entender los desafíos de su empresa e indicar las soluciones más seguras y adecuadas, de forma personalizada.',
    contatoLead2:
      'Con casi 50 años de experiencia, certificación ISO 9001:2015 y actuación internacional a través de IECnet, ofrecemos una atención cercana, consultiva y alineada con las necesidades de empresas en crecimiento.',
    contatoBarueriEnderecoL1: 'Av. Marcos Penteado de Ulhoa Rodrigues, 1.119 | piso 17',
    contatoBarueriEnderecoL2: 'Oficina 1.711 | Tamboré',
    contatoSpEndereco: 'Rua Boa Vista, 254 | piso 11 | Oficina 1.101 | Centro | São Paulo',
    contatoLabel: 'Contacto',
    horarioLabel: 'Horario de atención',
    horarioDias: 'De lunes a viernes',
    horarioHoras: 'De 8:30 a 17:30',

    mapasKicker: 'Dónde estamos',
    mapasTitulo: 'Nuestras oficinas',
    mapasAjuda: 'Elija la oficina y abra la ruta directamente en Google Maps.',
    mapaUnidade: 'Oficina',
    mapaEnderecoBarueri:
      'Av. Marcos Penteado de Ulhoa Rodrigues, 1.119 · piso 17 · Oficina 1.711 · Tamboré',
    mapaEnderecoSp: 'Rua Boa Vista, 254 · piso 11 · Oficina 1.101 · Centro · São Paulo',
    mapaTituloBarueri: 'Mapa de la oficina ASSCONT en Barueri',
    mapaTituloSp: 'Mapa de la oficina ASSCONT en São Paulo',
    mapaAbrir: 'Abrir en Google Maps',
  },
};

export default es;

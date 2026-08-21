/* ==========================================================================
   Português — dicionário BASE.

   Este arquivo é a fonte da verdade. Toda chave nasce aqui, com o texto que
   já está no site. Os arquivos en.ts e es.ts traduzem as chaves daqui; o que
   faltar neles cai automaticamente para o português, sem quebrar a página.

   Ao migrar um trecho novo: cria a chave aqui primeiro, troca o texto do JSX
   pela chave, e só depois traduz nos outros dois arquivos.

   NÃO entram aqui: razões sociais, logradouros, telefones e nomes próprios.
   Esses ficam no componente, porque são iguais em qualquer idioma.
   ========================================================================== */

const pt = {
  header: {
    logoAlt: 'Asscont — página inicial',
    navegacao: 'Navegação principal',
    abrirMenu: 'Abrir menu',
    fecharMenu: 'Fechar menu',
    inicio: 'Início',
    servicos: 'Serviços',
    quemSomos: 'Quem Somos',
    publicacoes: 'Publicações',
    contato: 'Contato',
  },

  idioma: {
    rotulo: 'Idioma',
    trocarPara: 'Ver o site em',
  },

  newsletter: {
    titulo: 'Assine nossa newsletter',
    subtitulo: 'E fique por dentro das principais novidades.',
    placeholder: 'Cadastre seu e-mail:',
    rotuloCampo: 'E-mail',
    enviar: 'Enviar e-mail',
  },

  rodape: {
    navegacao: 'Navegação',
    inicio: 'Início',
    servicos: 'Serviços',
    quemSomos: 'Quem somos',
    publicacoes: 'Publicações',
    contato: 'Contato',
    legal: 'Legal',
    faq: 'FAQ',
    termos: 'Termos de Serviço',
    privacidade: 'Privacidade',
    trabalheConosco: 'Trabalhe conosco',
    carreiras: 'Conheça nossa área de carreiras',
    redesSociais: 'Redes sociais da Asscont',
    copyright: 'Copyright © 2026',
  },

  inicio: {
    /* ------------------------------------------------- banner 1: manchete */
    heroTagline: 'Tradição, inovação e excelência há quase 50 anos',
    heroTitulo: 'Soluções integradas para a gestão empresarial.',
    heroBotao: 'Saiba mais',

    /* ------------------------------------------------------ banner 2: rede */
    redeDestaque: '26ª maior',
    redeSubtitulo: 'Rede contábil do mundo (IAB 2024)',
    redeRotulos: [
      'empresas-membro',
      'países',
      'continentes',
      'idiomas diferentes',
      'sócios conectados',
      'profissionais',
    ],
    redeChamadaL1: 'Sua empresa no Brasil.',
    redeChamadaL2: 'Conectada ao mundo.',
    redeLegenda: 'Membros da IECnet — rede internacional de firmas independentes',

    /* -------------------------------------------------- banner 3: serviços */
    servicosTitulo: 'Soluções',
    servicosSub: 'Nossos serviços',
    servicosNomes: [
      'Outsourcing Contábil',
      'Gestão Fiscal',
      'BPO Trabalhista',
      'Auditoria',
      'Societário',
      'E muito mais',
    ],
    servicosLegenda: 'Conheça nossos serviços',

    /* --------------------------------------------- banner 4: certificações */
    certTitulo: 'Certificações',
    certLinha1: 'Inteligência contábil com',
    certLinha2: 'padrão de excelência',
    selosAlt: [
      'PQEC Executivo Gold — Inovação',
      'PQEC Executivo Gold — Empreendedorismo',
      'PQEC Executivo Gold — Qualidade',
      'PQEC Executivo Gold — Gestão',
      'ABNT — Sistema Certificado',
    ],

    /* ---------------------------------------------------------- sobre nós */
    sobreFotoAlt: 'Edifícios corporativos',
    sobreTitulo: 'Quem somos',
    sobreSub: 'Sobre nós',
    sobreP1:
      'O Grupo ASSCONT, com quase 50 anos de experiência, reúne profissionais com a mais alta especialização em contabilidade, auditoria, BPO financeiro, legalização empresarial e societária, perícia contábil, consultoria tributária e de gestão.',
    sobreP2:
      'Oferecemos soluções estratégicas personalizadas com segurança, excelência e visão de negócios para empresas nacionais e multinacionais.',
    sobreP3:
      'Nossa trajetória foi construída sobre três princípios fundamentais: excelência técnica, relacionamento próximo aos clientes e compromisso permanente com a qualidade das informações produzidas.',
    sobreP4:
      'A ASSCONT integra a IECnet — International Association of Accounting and Auditing Professionals, uma das mais tradicionais associações internacionais de firmas independentes de auditoria e consultoria. Essa conexão representa maior alinhamento técnico, atualização constante e uma visão integrada das tendências regulatórias de governança.',
    sobreLinkServicos: 'Nossos Serviços',
    sobreLinkPublicacoes: 'Publicações',

    /* ----------------------------------------------------------- clientes */
    clientesTag: 'Alguns de nossos clientes',

    /* ------------------------------------------------------- diferenciais */
    fundadorAlt: 'Antonio Carlos Lopes, fundador da Asscont',
    diferenciaisL1: 'Diferenciais',
    diferenciaisL2: 'competitivos',
    diferenciais: [
      'Quase 50 anos de experiência',
      'Estrutura integrada (end-to-end)',
      'Atuação consultiva e estratégica',
      'Forte expertise em consultoria tributária',
      'Presença internacional (IECnet)',
      'Alto padrão de compliance e governança',
      'Relacionamento próximo e personalizado',
    ],

    /* ------------------------------------------ parcerias internacionais */
    parceriasTitulo: 'Parcerias internacionais',
    camaraSub: 'CÂMARA DE COMÉRCIO ÍTALO-BRASILEIRA',
    camaraTexto:
      'A atuação internacional da Asscont é reforçada pela nomeação de Antonio Carlos Lopes, diretor e fundador da empresa, como representante da Câmara de Comércio Ítalo-Brasileira no estado de São Paulo. A iniciativa amplia a conexão da Asscont com o ambiente de negócios entre Brasil e Itália, fortalecendo sua presença institucional e sua capacidade de apoiar empresas em processos de relacionamento e expansão internacional.',
    camaraLogoAlt: 'Câmara de Comércio Ítalo-Brasileira',
    iecnetTexto:
      'A Asscont integra a IECnet, rede internacional fundada em 1987 que reúne cerca de 80 firmas em seis continentes. Essa conexão amplia sua capacidade de apoiar clientes em operações locais e internacionais, com acesso a uma rede global pautada por altos padrões profissionais, cooperação estratégica e suporte qualificado em diferentes mercados.',
    iecnetFotoAlt: 'Encontro da rede IECnet',
    forumOfFirmsAlt: 'Member of the Forum of Firms',

    /* ------------------------------------------------------ redes sociais */
    socialKicker: 'Conteúdo e atualizações',
    socialTituloL1: 'Nas nossas',
    socialTituloL2: 'redes',
    socialTabsAria: 'Escolha a rede social',
    socialLinkedinTexto:
      'Fique por dentro das nossas análises, atualizações e conteúdos exclusivos no LinkedIn.',
    socialLinkedinBotao: 'Ver LinkedIn',
    /* o perfil @asscont.oficial fica no componente e fecha a frase */
    socialInstagramTexto:
      'Acompanhe também o dia a dia da ASSCONT, conteúdos técnicos e novidades em',
    socialInstagramBotao: 'Ver Instagram',
    postsLinkedinAria: 'Posts do LinkedIn',
    postsInstagramAria: 'Destaques recentes do Instagram',
    postsLinkedinAlt: [
      'A inteligência artificial acelera processos',
      'Imposto de Renda 2026',
      'Saúde mental no trabalho',
    ],
    postsInstagramAlt: [
      'NFS-e em operações de locação',
      'Alta performance na prática',
      'PER/DCOMP: segurança antes da transmissão',
    ],

    /* -------------------------------------------------------- publicações */
    publicacoesTitulo: 'Publicações',
    publicacoesAria: 'Publicações da Asscont',
    publicacoesLerMais: 'Ler mais',

    /* ------------------------------------------------------------ contato */
    contatoTitulo: 'Vamos construir decisões mais seguras para o seu negócio.',
    contatoLead1:
      'Nossa equipe está preparada para entender os desafios da sua empresa e indicar as soluções mais seguras e adequadas, de forma personalizada.',
    contatoLead2:
      'Com quase 50 anos de experiência, certificação ISO 9001:2015 e atuação internacional por meio da IECnet, oferecemos um atendimento próximo, consultivo e alinhado às necessidades de empresas em crescimento.',
    contatoBarueriEnderecoL1: 'Av. Marcos Penteado de Ulhoa Rodrigues, 1.119 | 17º andar',
    contatoBarueriEnderecoL2: 'Conjunto 1.711 | Tamboré',
    contatoSpEndereco: 'Rua Boa Vista, 254 | 11º andar | Conjunto 1.101 | Centro | São Paulo',
    contatoLabel: 'Contato',
    horarioLabel: 'Horário de atendimento',
    horarioDias: 'Segunda a sexta-feira',
    horarioHoras: 'Das 8h30 às 17h30',

    /* ------------------------------------------------------------- mapas */
    mapasKicker: 'Onde estamos',
    mapasTitulo: 'Nossas unidades',
    mapasAjuda: 'Escolha a unidade e abra a rota diretamente no Google Maps.',
    mapaUnidade: 'Unidade',
    mapaEnderecoBarueri:
      'Av. Marcos Penteado de Ulhoa Rodrigues, 1.119 · 17º andar · Conjunto 1.711 · Tamboré',
    mapaEnderecoSp: 'Rua Boa Vista, 254 · 11º andar · Conjunto 1.101 · Centro · São Paulo',
    mapaTituloBarueri: 'Mapa da unidade ASSCONT em Barueri',
    mapaTituloSp: 'Mapa da unidade ASSCONT em São Paulo',
    mapaAbrir: 'Abrir no Google Maps',
  },
};

/** Formato completo do dicionário. en.ts e es.ts se apoiam neste tipo. */
export type Textos = typeof pt;

/** Versão parcial: permite traduzir aos poucos, chave por chave. */
export type Traducao<T> = {
  [K in keyof T]?: T[K] extends string[] ? string[] : T[K] extends object ? Traducao<T[K]> : T[K];
};

export default pt;

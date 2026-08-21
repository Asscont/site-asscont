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
  quemSomos: {
    heroTitulo: 'QUEM SOMOS',
    heroP1:
      'DESDE 1977, OFERECEMOS SOLUÇÕES ESTRATÉGICAS PERSONALIZADAS COM SEGURANÇA, EXCELÊNCIA E VISÃO DE NEGÓCIOS PARA EMPRESAS NACIONAIS E MULTINACIONAIS.',
    heroP2:
      'BUSCAMOS CONSTRUIR RELAÇÕES DE LONGO PRAZO FUNDAMENTADAS EM CONFIANÇA, TRANSPARÊNCIA, QUALIDADE TÉCNICA E GERAÇÃO CONTÍNUA DE VALOR.',

    /* ----------------------------------------------------- certificações */
    certAria: 'Certificações',
    certTitulo: 'CERTIFICAÇÕES',
    certChamada: 'Inteligência contábil com\npadrão de excelência',
    certInformacoes: 'Informações',
    certVerSobre: 'Ver informações sobre',
    certModalLabel: 'Certificação',
    certModalFechar: 'Fechar informações da certificação',
    certTitulos: [
      'PQEC Executivo Gold – Empreendedorismo',
      'PQEC Executivo Gold – Gestão',
      'PQEC Executivo Gold – Inovação',
      'PQEC Executivo Gold – Qualidade',
      'Sistema Certificado ABNT',
    ],
    certDescricoes: [
      'Reconhecimento da qualificação em estratégias de crescimento, visão empreendedora e desenvolvimento sustentável dos negócios.',
      'Certifica a qualificação em gestão empresarial, planejamento estratégico, liderança e desenvolvimento organizacional.',
      'Reconhece empresas capacitadas para implementar processos de inovação, melhoria contínua e transformação dos negócios.',
      'Certifica o conhecimento e a aplicação de práticas voltadas à gestão da qualidade, padronização e excelência na prestação de serviços.',
      'Comprova que a empresa possui um Sistema de Gestão certificado pela ABNT, reforçando o compromisso com a qualidade, conformidade e melhoria contínua.',
    ],

    /* ---------------------------------------------------------- pilares */
    pilaresTag: 'PILARES',
    missaoTitulo: 'MISSÃO',
    missaoTexto: 'Entregar soluções com\nexcelência, segurança e agilidade.',
    visaoTitulo: 'VISÃO',
    visaoTexto: 'Ser referência em serviços\ncontábeis e consultivos.',

    /* -------------------------------------------------------- propósito */
    propositoAntes: 'NOSSO',
    propositoDestaque: 'PROPÓSITO',
    propositoResto:
      'É ATENDER COM EXCELÊNCIA AS NECESSIDADES DOS\nCLIENTES, PROMOVENDO A MELHORIA CONTÍNUA DOS PROCESSOS, A EFICIÊNCIA\nOPERACIONAL E O DESENVOLVIMENTO DOS NEGÓCIOS E DAS PESSOAS.',

    /* ---------------------------------------------------------- valores */
    valoresL1: 'CONHEÇA',
    valoresL2: 'NOSSOS',
    valoresL3: 'VALORES',
    valorCompromissoTitulo: 'Compromisso',
    valorCompromissoTexto:
      'O compromisso da\nAsscont é com a\nexcelência em\nserviços e a satisfação\ndos nossos clientes\nem todas as\ninterações.',
    valorResponsabilidadeTitulo: 'Responsabilidade',
    valorResponsabilidadeTexto:
      'Assumimos a\nresponsabilidade de\ngerar um impacto\npositivo na sociedade\ne meio ambiente,\npromovendo práticas\nsustentáveis e justas',
    valorEticaTitulo: 'Ética',
    valorEticaTexto:
      'Base de todas as\nnossas ações,\ngarantindo\ntransparência e\nequilíbrio em todas\nas relações\nprofissionais e\npessoais.',

    /* --------------------------------------------------------- métricas */
    experienciaAntes: 'A',
    experienciaDestaque: 'experiência',
    experienciaResto: 'da ASSCONT a favor\nda sua empresa e dos seus negócios',
    metricaUnidades: ['anos', 'bilhões', 'países', '', ''],
    metricaRotulos: [
      'de experiência',
      'de faturamento\nadministrados',
      'de empresas atendidas',
      'colaboradores sob gestão',
      'clientes atendidos',
    ],

    /* ------------------------------------------------------ depoimentos */
    depoimentosAria: 'Depoimentos de clientes',
    depoimentoLerAria: 'Ler o depoimento completo de',
    depoimentoMais: 'Ler depoimento completo',
    depoimentoFechar: 'Fechar depoimento',
    /* Aviso de depoimento no idioma original. A ASSCONT autorizou a tradução,
       então a chave fica vazia nos três idiomas e o aviso não aparece. Se um
       depoimento novo entrar sem tradução, ele cai para o português sozinho. */
    depoimentosOriginal: '',
    /* Os depoimentos em português vivem em TelaQuemSomos.tsx. Aqui entram só as
       traduções, indexadas pelo `id` do depoimento. */
    depoimentosTraduzidos: {} as Record<string, { cargo: string; texto: string }>,

    /* ------------------------------------------------------ apoio social */
    apoioTag: 'APOIO SOCIAL',
    apoioLink: 'Conheça e apoie você também!',
    blandinaTexto:
      'Organização sem fins lucrativos que atua desde 1952 no desenvolvimento de crianças,\nadolescentes e jovens em situação de vulnerabilidade social, promovendo educação,\nfortalecimento de vínculos e cidadania por meio de programas socioeducativos.',
    blandinaFotoAlt: 'Atividades do Instituto Blandina Meirelles',
    olhinhosTexto:
      'Dedicada à conscientização sobre o retinoblastoma, a iniciativa promove\ninformação, orientação e educação para incentivar o diagnóstico precoce, etapa\nessencial para salvar vidas e preservar a saúde ocular infantil.',

    /* --------------------------------------------------------- parceiros */
    parceirosTag: 'PARCEIROS NACIONAIS',
    parceirosAria: 'Parceiros nacionais',
    parceirosTextos: [
      'Referência em tecnologia para a contabilidade, desenvolve soluções que automatizam processos e impulsionam a eficiência dos escritórios contábeis.',
      'Plataforma de gestão empresarial que integra ERP e serviços financeiros, simplificando processos e apoiando o crescimento dos negócios.',
      'Especialista em Business Intelligence, transforma dados em dashboards estratégicos para apoiar decisões mais inteligentes e eficientes.',
      'Escritório de advocacia empresarial que oferece soluções jurídicas estratégicas com excelência técnica e foco nos negócios.',
    ],
  },
  trabalheConosco: {
    heroEyebrow: 'São Paulo · Presencial',
    heroTitulo: 'Faça parte do nosso time.',
    heroTexto:
      'A ASSCONT está crescendo e busca profissionais que queiram construir uma carreira sólida em contabilidade, fiscal, DP e tecnologia — com propósito e evolução real.',
    heroBotao: 'Ver vagas abertas',

    numerosAria: 'A ASSCONT em números',
    numerosRotulos: ['Vagas abertas', 'Presencial SP', 'Benefícios inclusos', 'Plano de carreira'],
    numeroCarreira: 'Individual',

    introEyebrow: 'Por que ASSCONT',
    introTitulo: 'Gente boa faz trabalho excelente.',
    introTexto:
      'Valorizamos relações próximas, responsabilidade, conhecimento técnico e melhoria contínua. Queremos que cada pessoa encontre espaço para contribuir, aprender e crescer junto com a empresa.',
    introFotoAlt: 'Ambiente corporativo da ASSCONT',
    badgeTitulo: 'Desde 1977',
    badgeTexto: 'experiência que evolui com as pessoas',

    culturaAria: 'Nossa cultura',
    valoresTitulos: ['Desenvolvimento contínuo', 'Trabalho em equipe', 'Excelência com propósito'],
    valoresTextos: [
      'Um ambiente que valoriza aprendizado, atualização técnica e evolução profissional.',
      'Colaboração entre áreas, proximidade e troca de conhecimento fazem parte da nossa rotina.',
      'Buscamos qualidade, responsabilidade e segurança em cada entrega para nossos clientes.',
    ],

    vagasEyebrow: 'Vagas em destaque',
    vagasTitulo: 'As oportunidades que mais crescem na empresa',
    vagasNota:
      'Todas as posições são presenciais em São Paulo/SP, com horário das 08:12 às 18:00, de segunda a sexta.',
    destaqueTag: 'Destaque',
    verDetalhesCandidatar: 'Ver detalhes e candidatar',

    listaAria: 'Todas as vagas',
    listaEyebrow: 'Todas as vagas',
    listaTitulo: 'Mais oportunidades para você',
    verDetalhes: 'Ver detalhes',

    /* Só aparece fora do português: as vagas são posições presenciais no Brasil,
       com exigências e rotinas em português, e ficam no idioma original. Em
       português a chave fica vazia e nada é exibido. */
    vagasOriginal: '',

    beneficiosAria: 'Benefícios',
    beneficiosEyebrow: 'Por que a ASSCONT?',
    beneficiosTitulo: 'Benefícios que fazem diferença no dia a dia',
    beneficiosTitulos: [
      'Vale Refeição',
      'Saúde Completa',
      'Seguro de Vida',
      'Day Off Aniversário',
      'Wellhub',
      'Convênio Faculdade',
      'Convênio SESC',
      'Localização Central',
    ],
    beneficiosTextos: [
      'R$ 35,00 por dia útil trabalhado',
      'Assistência médica e odontológica com 50% de subsídio',
      'Proteção para você',
      'Folga no seu dia especial, sem precisar pedir',
      'Acesso à maior rede de academias e bem-estar do Brasil',
      'Descontos em instituições parceiras para você se qualificar',
      'Acesso a cultura, lazer, esporte e serviços',
      'Escritório em São Paulo/SP, segunda a sexta',
    ],

    processoEyebrow: 'Próximo passo',
    processoTitulo: 'Não encontrou a vaga ideal?',
    processoTexto:
      'Envie seu currículo para o nosso RH. Guardamos seu contato e retornamos assim que surgir uma oportunidade compatível com o seu perfil.',
    processoBotao: 'Falar com o RH',
    processoAssunto: 'Banco de talentos — ASSCONT',

    modalFechar: 'Fechar vaga',
    fichaHorario: 'Horário',
    fichaRegime: 'Regime',
    fichaFormacao: 'Formação',
    fichaNivel: 'Nível',
    modalAtividades: 'Atividades',
    modalDesejavel: 'Desejável',
    modalConhecimentos: 'Conhecimentos',
    modalCta: 'Quero me candidatar',
    candidaturaAssunto: 'Candidatura',
  },
  servicos: {
    heroFotoAlt: 'Profissional utilizando calculadora',
    heroTitulo: 'Soluções integradas para\nos desafios do seu negócio.',
    heroTexto:
      'Experiência, conhecimento técnico e atuação consultiva para\napoiar sua empresa com segurança, eficiência e visão estratégica.',
    heroBotao: 'Entre em contato',

    setoresTitulos: [
      'Indústria e Comércio',
      'Serviços',
      'Empresas de Tecnologia e Startup',
      'Terceiro Setor',
    ],
    setoresTextos: [
      'Experiência no atendimento a empresas industriais, comerciais, importadoras e distribuidoras dos mais diversos setores.',
      'Experiência no atendimento a empresas de serviços, incluindo agências de publicidade, comunicação e uma grande diversidade de demais serviços especializados.',
      'Experiência no atendimento a empresas de tecnologia, negócios digitais e start-up.',
      'Experiência no atendimento a entidades do terceiro setor, como museus, fundações, associações e ONGs.',
    ],
    setorLink: 'Conheça nossos clientes',

    oferecemosTitulo: 'O que oferecemos',
    oferecemosSub: 'Experiência que gera confiança. Atuação que gera valor.',
    oferecemosTexto:
      'Há quase 50 anos, unimos conhecimento técnico, visão estratégica e atendimento próximo para apoiar empresas de diferentes portes e segmentos.\nNossa atuação integrada permite compreender cada negócio de forma ampla, oferecendo soluções personalizadas, segurança nas decisões e suporte em todas as etapas da gestão.',

    /* As nove faixas de serviço, na ordem da tela. */
    servicoTitulos: [
      'Outsourcing Contábil',
      'Gestão Fiscal',
      'BPO Trabalhista',
      'Auditoria',
      'BPO Financeiro',
      'Societário',
      'Perícia Contábil',
      'Consultoria Tributária',
      'Consultoria de Gestão',
    ],
    servicoTextos: [
      'Gestão contábil completa, com foco em conformidade e suporte à decisão.',
      'Apuração de tributos e administração das obrigações fiscais com foco em eficiência e mitigação de riscos.',
      'Gestão completa da folha de pagamentos e rotinas trabalhistas.',
      'Auditoria de Demonstrações Financeiras, serviços pré-acordados e due diligence.',
      'Gestão financeira estruturada para controle, segurança e previsibilidade.',
      'Contratos sociais, estatutos, legalização de empresas, laudos, fusões e incorporações.',
      'Trabalhos de perícia contábil, com a elaboração de laudos periciais contábeis ou pareceres técnico-contábeis.',
      'Além das rotinas operacionais, a ASSCONT disponibiliza:',
      'Traduzimos dados em estratégias de gestão para a tomada de decisão.',
    ],
    servicoAlts: [
      'Escrituração contábil em computador',
      'Análise de documentos fiscais',
      'Atendimento de equipe de RH',
      'Revisão de demonstrações financeiras',
      'Reunião de análise financeira',
      'Estátua da justiça',
      'Análise de documentos periciais',
      'Reunião de consultoria tributária',
      'Equipe analisando indicadores de gestão',
    ],

    gestaoFiscalItens: [
      'Apuração de tributos',
      'Obrigações acessórias',
      'Planejamento fiscal',
      'Suporte a fiscalizações',
    ],
    bpoTrabalhistaItens: [
      'Folha de pagamento',
      'eSocial e encargos',
      'Admissões e rescisões',
      'Consultoria preventiva',
    ],
    bpoFinanceiroItens: [
      'Contas a pagar e receber',
      'Conciliação bancária',
      'Fluxo de caixa',
      'Relatórios financeiros',
    ],
    consultoriaTributariaItens: [
      'Interpretação da legislação',
      'Consultas tributárias',
      'Apoio em projetos específicos',
      'Análise de impactos regulatórios',
      'Recomendações de melhorias',
    ],
    reformaTributariaTitulo: 'Reforma Tributária',
    reformaTributariaItens: [
      'Monitoramento legislativo contínuo',
      'Reuniões executivas periódicas',
      'Avaliação dos impactos na operação',
    ],
    consultoriaGestaoItens: [
      'Analisamos a saúde financeira e fiscal atual da sua empresa',
      'Desenhamos estratégias customizadas para reduzir custos e otimizar rotinas',
    ],
    contrate: 'Contrate',

    /* ATENÇÃO: o FAQ ainda depende de validação da ASSCONT, em qualquer idioma. */
    faqTitulo: 'FAQ',
    faqPerguntas: [
      'Quais serviços a ASSCONT oferece?',
      'Que tipo de empresa a ASSCONT atende?',
      'Como funciona a troca do contador atual pela ASSCONT?',
      'Quem cuida da minha conta no dia a dia?',
      'Como a ASSCONT garante a segurança dos meus dados?',
      'A ASSCONT atende empresas com operação no exterior?',
    ],
    faqRespostas: [
      'Outsourcing contábil, gestão fiscal, BPO trabalhista, BPO financeiro e BPO legal e societário. Além disso, atuamos em consultoria, auditoria e perícia.',
      'Indústria e comércio, serviços e consultoria, tecnologia e inovação. Nossa carteira reúne mais de 600 clientes em 6 países, de museus a importadoras.',
      'Assumimos a transição: levantamos a situação contábil e fiscal da empresa, identificamos pendências e definimos o cronograma de migração antes de iniciar as rotinas.',
      'Cada cliente tem uma equipe designada, com responsável técnico direto. Você não passa por central de atendimento para falar com quem executa o seu trabalho.',
      'Somos certificados na ISO 9001, com processos auditados e controle de acesso às informações de cada cliente.',
      'Sim. Somos membros da IECnet e representamos a Câmara de Comércio Ítalo-Brasileira no estado de São Paulo, o que nos permite apoiar operações entre o Brasil e outros mercados.',
    ],

    ctaTitulo: 'Agende sua reunião',
    ctaBotao: 'Entre em contato',
  },

  blog: {
    heroKicker: 'Conteúdo Asscont',
    heroTitulo: 'Publicações',
    heroSub: 'Informação para decisões empresariais mais seguras.',
    lerMais: 'Ler mais',
    voltar: 'Todas as publicações',
    falarBotao: 'Fale com a Asscont',
    /* Os artigos em português vivem em data/publicacoes.ts, que continua sendo
       o lugar de publicar. Aqui entram SÓ as traduções, com a mesma chave do
       slug do artigo. Artigo sem tradução aparece em português. */
    artigos: {} as Record<
      string,
      { titulo: string; resumo: string; texto: string; categoria: string }
    >,
  },
};

/** Formato completo do dicionário. en.ts e es.ts se apoiam neste tipo. */
export type Textos = typeof pt;

/** Versão parcial: permite traduzir aos poucos, chave por chave. */
export type Traducao<T> = {
  [K in keyof T]?: T[K] extends string[] ? string[] : T[K] extends object ? Traducao<T[K]> : T[K];
};

export default pt;

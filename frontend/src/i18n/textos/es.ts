/* Espanhol. Mesma regra do inglês: o que faltar cai para o português.

   Atenção: em espanhol o texto costuma ficar mais comprido que em português.
   Depois de traduzir um bloco, conferir se nada quebrou o layout em 390px. */

import type { Textos, Traducao } from './pt';

const es: Traducao<Textos> = {
  meta: {
    sufixo: ' | ASSCONT',
    inicioTitulo: 'ASSCONT — Contabilidad, Auditoría y Consultoría',
    inicioDescricao:
      'Desde hace casi 50 años, soluciones integradas en contabilidad, auditoría, fiscal y consultoría para empresas nacionales y multinacionales.',
    servicosTitulo: 'Servicios',
    servicosDescricao:
      'Outsourcing contable, gestión fiscal, BPO laboral y financiero, auditoría, societario, peritaje y consultoría tributaria.',
    quemSomosTitulo: 'Quiénes Somos',
    quemSomosDescricao:
      'Desde 1977, atendiendo a más de 600 clientes en 6 países. Certificación ISO 9001 y actuación internacional a través de IECnet.',
    publicacoesTitulo: 'Publicaciones',
    publicacoesDescricao:
      'Análisis y novedades sobre legislación contable, fiscal y laboral brasileña para decisiones empresariales más seguras.',
    contatoTitulo: 'Contacto',
    contatoDescricao:
      'Hable con ASSCONT. Oficinas en Barueri y São Paulo, de lunes a viernes, de 8:30 a 17:30.',
    trabalheConoscoTitulo: 'Trabaja con Nosotros',
    trabalheConoscoDescricao:
      'Vacantes en contabilidad, fiscal, departamento de personal y tecnología. Presencial en São Paulo, con beneficios y plan de carrera.',
    termosTitulo: 'Términos de Uso',
    termosDescricao: 'Condiciones de uso del sitio institucional de ASSCONT.',
    privacidadeTitulo: 'Política de Privacidad',
    privacidadeDescricao:
      'Cómo ASSCONT trata los datos personales recogidos en este sitio, conforme a la LGPD brasileña.',
  },
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
    titulo: 'Suscríbase a nuestro boletín',
    subtitulo: 'Y manténgase al día con las principales novedades.',
    placeholder: 'Ingrese su correo electrónico:',
    rotuloCampo: 'Correo electrónico',
    enviar: 'Suscribirse',
    enviando: 'Enviando…',
    sucesso: '¡Listo! Su correo ha sido registrado.',
    emailInvalido: 'Verifique la dirección de correo introducida.',
    erro: 'No fue posible registrarlo ahora. Escriba a contato@asscont.com.br.',
    avisoP1:
      'Asscont valora su privacidad. Al suscribirse a nuestro boletín, sus datos serán utilizados exclusivamente para el envío de contenidos, noticias e información de Asscont.',
    aceite:
      'Acepto la recopilación y el uso de los datos facilitados para recibir el boletín de Asscont. Para saber más sobre cómo cuidamos sus datos, consulte nuestra',
    avisoLink: 'Política de Privacidad',
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
    termos: 'Términos de Uso',
    privacidade: 'Privacidad',
    trabalheConosco: 'Trabaja con nosotros',
    carreiras: 'Conozca nuestra área de carreras',
    redesSociais: 'Redes sociales de Asscont',
    copyright: 'Copyright © 2026',
  },
  inicio: {
    heroTagline: 'Tradición, innovación y excelencia desde hace casi 50 años',
    heroTitulo: 'Soluciones integradas para la gestión empresarial.',
    heroBotao: 'Saber más',

    redeDestaque: '26.ª mayor',
    redeSubtitulo: 'red contable del mundo (IAB 2024)',
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
      'Servicios societarios',
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
    diferenciaisL1: 'Ventajas',
    diferenciaisL2: 'competitivas',
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
    postsLinkedinAltModelo: 'Publicación de ASSCONT en LinkedIn del {data}',
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
  quemSomos: {
    heroTitulo: 'QUIÉNES SOMOS',
    heroP1:
      'DESDE 1977 OFRECEMOS SOLUCIONES ESTRATÉGICAS PERSONALIZADAS CON SEGURIDAD, EXCELENCIA Y VISIÓN DE NEGOCIO PARA EMPRESAS NACIONALES Y MULTINACIONALES.',
    heroP2:
      'BUSCAMOS CONSTRUIR RELACIONES DE LARGO PLAZO BASADAS EN CONFIANZA, TRANSPARENCIA, CALIDAD TÉCNICA Y GENERACIÓN CONTINUA DE VALOR.',

    certAria: 'Certificaciones',
    certTitulo: 'CERTIFICACIONES',
    certChamada: 'Inteligencia contable con\nestándar de excelencia',
    certInformacoes: 'Información',
    certVerSobre: 'Ver información sobre',
    certModalLabel: 'Certificación',
    certModalFechar: 'Cerrar información de la certificación',
    certTitulos: [
      'PQEC Executivo Gold – Emprendimiento',
      'PQEC Executivo Gold – Gestión',
      'PQEC Executivo Gold – Innovación',
      'PQEC Executivo Gold – Calidad',
      'Sistema Certificado ABNT',
    ],
    certDescricoes: [
      'Reconocimiento de la cualificación en estrategias de crecimiento, visión emprendedora y desarrollo sostenible de los negocios.',
      'Certifica la cualificación en gestión empresarial, planificación estratégica, liderazgo y desarrollo organizacional.',
      'Reconoce a empresas capacitadas para implementar procesos de innovación, mejora continua y transformación de los negocios.',
      'Certifica el conocimiento y la aplicación de prácticas orientadas a la gestión de la calidad, la estandarización y la excelencia en la prestación de servicios.',
      'Comprueba que la empresa cuenta con un Sistema de Gestión certificado por ABNT, reforzando el compromiso con la calidad, la conformidad y la mejora continua.',
    ],

    pilaresTag: 'PILARES',
    missaoTitulo: 'MISIÓN',
    missaoTexto: 'Entregar soluciones con\nexcelencia, seguridad y agilidad.',
    visaoTitulo: 'VISIÓN',
    visaoTexto: 'Ser un referente en servicios\nde contabilidad y consultoría.',

    propositoAntes: 'NUESTRO',
    propositoDestaque: 'PROPÓSITO',
    propositoResto:
      'ES ATENDER CON EXCELENCIA LAS NECESIDADES DE\nLOS CLIENTES, PROMOVIENDO LA MEJORA CONTINUA DE LOS PROCESOS, LA\nEFICIENCIA OPERATIVA Y EL DESARROLLO DE LOS NEGOCIOS Y DE LAS PERSONAS.',

    valoresL1: 'CONOZCA',
    valoresL2: 'NUESTROS',
    valoresL3: 'VALORES',
    valorCompromissoTitulo: 'Compromiso',
    valorCompromissoTexto:
      'El compromiso de\nAsscont es con la\nexcelencia en\nservicios y la\nsatisfacción de nuestros\nclientes en todas\nlas interacciones.',
    valorResponsabilidadeTitulo: 'Responsabilidad',
    valorResponsabilidadeTexto:
      'Asumimos la\nresponsabilidad de\ngenerar un impacto\npositivo en la sociedad\ny el medio ambiente,\npromoviendo prácticas\nsostenibles y justas',
    valorEticaTitulo: 'Ética',
    valorEticaTexto:
      'Base de todas\nnuestras acciones,\ngarantizando\ntransparencia y\nequilibrio en todas\nlas relaciones\nprofesionales y\npersonales.',

    experienciaAntes: 'La',
    experienciaDestaque: 'experiencia',
    experienciaResto: 'de ASSCONT al servicio\nde su empresa y de sus negocios',
    metricaUnidades: ['años', 'mil millones', 'países', '', ''],
    metricaRotulos: [
      'de experiencia',
      'en facturación\ngestionada',
      'con empresas atendidas',
      'colaboradores bajo gestión',
      'clientes atendidos',
    ],

    depoimentosAria: 'Testimonios de clientes',
    depoimentoLerAria: 'Leer el testimonio completo de',
    depoimentoMais: 'Leer testimonio completo',
    depoimentoFechar: 'Cerrar testimonio',
    /* vazio: a ASSCONT autorizou a tradução dos depoimentos */
    depoimentosOriginal: '',

    depoimentosTraduzidos: {
      recepta: {
        cargo: 'Director Presidente',
        texto: `Estimado Antonio Carlos y estimado equipo de Asscont:

Es un placer compartir con ustedes mi percepción sobre la calidad de los servicios prestados a Recepta en estos más de 20 años de colaboración.

En este período, la colaboración con Asscont correspondió plenamente a nuestras expectativas: no hubo ninguna solicitud por parte de Recepta que no fuera atendida satisfactoriamente, por lo que estamos muy agradecidos.

Así que solo nos queda felicitar al excelente equipo de Asscont.`,
      },
      moma: {
        cargo: 'CEO | MOMA',
        texto: `A lo largo de los últimos 15 años, Asscont ha sido mucho más que la empresa responsable de la contabilidad de Moma. Se convirtió en un socio de absoluta confianza, que nos da seguridad para tomar decisiones y nos permite concentrar nuestros esfuerzos en el crecimiento de nuestro negocio.

En todo este período siempre encontramos un equipo extremadamente competente, actualizado y comprometido, capaz de orientarnos con claridad en las cuestiones contables, fiscales, laborales y societarias. Más que responder a las demandas del día a día, Asscont actúa de forma preventiva, consultiva y estratégica, anticipando escenarios y ofreciendo soluciones consistentes.

El gran diferencial de Asscont está en la combinación entre excelencia técnica y atención cercana. Es raro encontrar una empresa que consiga mantener, a lo largo de tantos años, el mismo estándar de calidad, agilidad y dedicación en la relación con sus clientes.

Para Moma, Asscont representa tranquilidad, credibilidad y una alianza de largo plazo. Estamos orgullosos de esta relación construida a lo largo de 15 años y recomendamos Asscont a cualquier empresa que busque un socio serio, competente y comprometido con el éxito de sus clientes.`,
      },
      comscore: {
        cargo: 'Finance Manager',
        texto: `A lo largo de los años, Asscont se convirtió en algo más que un prestador de servicios para nuestra empresa: es un verdadero socio de negocios.

En un entorno regulatorio cada vez más complejo y dinámico, contar con un equipo altamente cualificado, comprometido y siempre disponible marca toda la diferencia. Asscont transmite seguridad en sus orientaciones contables, fiscales, laborales y societarias, permitiéndonos tomar decisiones con confianza y mantener nuestras obligaciones en conformidad.

Destaco también la calidad de la consultoría prestada y la agilidad en la atención. Siempre fuimos atendidos con profesionalismo, cordialidad y un interés genuino en encontrar las mejores soluciones para cada situación, con independencia de su complejidad.

El gran diferencial de Asscont está en las personas. La dedicación, el conocimiento técnico y la relación cercana con sus clientes crean una alianza basada en la confianza, la transparencia y la excelencia.

Muchas gracias a todos los profesionales de Asscont por el apoyo constante y por contribuir al crecimiento y a la seguridad de las operaciones de nuestra empresa.`,
      },
      bichuetti: {
        cargo: 'Consultor Empresarial',
        texto: `Conocí a Antônio Carlos y a Asscont en 1983. Al principio fueron orientaciones sobre la constitución de Bichuetti Consultoria Empresarial - BCE y sobre cómo mantener registros ajustados a toda la legislación, pero también valiosas recomendaciones sobre un aspecto hoy muy debatido en materia de gobernanza corporativa: la separación entre familia, empresa y propiedad. A lo largo de estos años tuvimos un apoyo profesional y personal que siempre nos dio la impresión de que éramos el Cliente n.º 1; y creo que todos los que se asesoran con Asscont tienen ese mismo sentimiento. Me siento privilegiado por 43 años de alianza y por la amistad que desarrollé con Antônio Carlos, y ahora también con Bruno. ¡Felicitaciones y gracias a todo el equipo de Asscont!`,
      },
      'milton-terra': {
        cargo: 'COO | Director de Operaciones',
        texto: `A lo largo de los últimos 20 años tuvimos, en ASSCONT, un socio contable seguro y confiable que nos dio soporte para el crecimiento sólido de la empresa.

En todas las áreas (fiscal, contable, tributaria y RR. HH.) siempre tuvimos una atención impecable, siempre rápida, precisa y con un equipo de alta calidad técnica.

Siempre escuché en el mercado lo difícil que es encontrar una empresa seria y con alta competencia para dar ese soporte, y ASSCONT es una de las poquísimas empresas que recomendaría sin temor a equivocarme.`,
      },
      'arthur-brandi': {
        cargo: 'Abogado',
        texto: `La sólida alianza construida entre nuestro despacho y ASSCONT a lo largo de muchos años tiene como pilares fundamentales la confianza mutua, el rigor técnico irreprochable y la constante eficiencia profesional de ASSCONT.

Contar con el soporte consultivo y la excelencia operativa del equipo de ASSCONT en los ámbitos contable, fiscal, laboral y societario nos garantiza absoluta seguridad, tranquilidad y la certeza del riguroso cumplimiento de todas las obligaciones legales. Esa seguridad nos permite dedicar toda nuestra atención al ejercicio de la abogacía y a la atención de nuestros clientes.

Además del alto nivel de especialización técnica y del carácter preventivo y estratégico de la consultoría de ASSCONT, el gran diferencial de esta empresa reside en la relación: una atención cercana, dinámica, ágil y verdaderamente humana, marcada por la disposición para comprender y atender nuestras demandas específicas.

Es un honor ver nuestra trayectoria entrelazada con estos 48 años de historia y acompañar de cerca la evolución continua, la modernización y el perfeccionamiento de una empresa como ASSCONT, referencia en seriedad, compromiso y calidad.`,
      },
      'adega-alentejana': {
        cargo: 'Directora Administrativa y Financiera',
        texto: `A lo largo de nuestra alianza, iniciada en 2021, Asscont se ha consolidado como mucho más que un prestador de servicios: es un socio estratégico, comprometido con los más altos estándares de eficiencia, conformidad y excelencia técnica.

El soporte prestado en las áreas contable, fiscal, laboral y societaria ha sido fundamental para que Adega Alentejana mantenga una gestión segura y alineada con las mejores prácticas. Esta alianza contribuyó directamente a importantes reconocimientos ante los organismos reguladores, como la clasificación A+ en el Programa Sintonia de la Receita Federal de Brasil, el mantenimiento de nuestro reconocimiento como empresa asociada OEA (Operador Económico Autorizado), la clasificación A+ en el Programa de Conformidad de la SEFAZ-SP, y resultados positivos y consistentes en auditorías independientes.

En un entorno de negocios cada vez más complejo y desafiante, contar con un equipo técnico altamente cualificado, accesible y comprometido nos proporciona la tranquilidad necesaria para concentrar nuestros esfuerzos en el crecimiento del negocio.

Felicitamos a Asscont por su trayectoria de 48 años construida con seriedad, competencia y confianza. Nos complace formar parte de esta historia y recomendamos su actuación a empresas que buscan una alianza sólida, confiable y orientada a resultados.`,
      },
      'grupo-maya': {
        cargo: 'CEO | Grupo Maya',
        texto: `El equipo de Asscont cuenta con profesionales altamente cualificados y dedicados, liderados por el Sr. Antônio Carlos, que acumula amplia experiencia empresarial y corporativa. Podemos afirmar que la empresa está altamente comprometida con entregar la mejor asesoría contable, fiscal, laboral y societaria, transmitiendo total seguridad y confianza a sus socios.`,
      },
      mam: {
        cargo: 'Director Financiero',
        texto: `Asscont atiende al Museu de Arte Moderna, MAM-SP, desde hace más de seis años. En este período se cumplieron etapas importantes para perfeccionar las prácticas contables del museo, y la alianza con Asscont fue fundamental en ese proceso. En momentos críticos, como la implementación de un nuevo sistema contable, el seguimiento de los cambios en la legislación fiscal y el gran desafío de administrar el museo con la sede cerrada por reforma, contamos con el apoyo y el profesionalismo de Asscont, siempre abierta al diálogo y dispuesta a apoyar al equipo del museo en estos desafíos. Se estableció entre los equipos del museo y de la consultoría una relación de confianza mutua. La calidad del trabajo de la consultoría también es reconocida en otras instancias, como por el Consejo Fiscal del museo y por la empresa que realiza la auditoría anual de su información financiera.`,
      },
      'studio-gamba': {
        cargo: 'Socio | Studio Gamba Consultoria Empresarial',
        texto: `¡Felicitaciones, Antonio Carlos: estamos juntos!

USTED ES UN SOCIO DE VALOR INESTIMABLE`,
      },
      'celso-tomanik': {
        cargo: 'Consultor Empresarial',
        texto: `Soy cliente de Asscont desde hace más de 25 años. En este período Asscont fue fundamental para el desarrollo de mis negocios. Creo que uno de los mayores errores de los emprendedores es buscar una organización «barata» o digital para simplemente «hacer mi contabilidad». Asscont siempre aportó un valor enorme en el asesoramiento y en la ejecución precisa: 25 años sin ninguna incidencia fiscal ni laboral. ¡Eso no tiene precio! Los profesionales son dedicados, atentos y siempre van un paso por delante.`,
      },
      techsearch: {
        cargo: 'Socio y Consultor Sénior',
        texto: `Estimado Antonio Carlos:

Conocemos a Asscont desde hace más de 25 años y hemos sido muy bien atendidos durante todos estos años. Es una empresa seria, que siempre hace lo mejor para atender las necesidades del Cliente.

Cordialmente.`,
      },
      abralimp: {
        cargo: 'Coordinadora de Relación con el Cliente',
        texto: `Desde hace más de 20 años, Asscont es un socio estratégico de ABRALIMP, contribuyendo de forma consistente a la solidez de nuestra gestión y al fortalecimiento de nuestra gobernanza.

A lo largo de esta trayectoria siempre contamos con un equipo altamente cualificado, que transmite seguridad y confianza en sus orientaciones contables, fiscales, laborales y societarias. Más que una asesoría contable, Asscont nos ayuda a mantener los elevados estándares de transparencia que forman parte de los principios de ABRALIMP, garantizando conformidad, credibilidad y tranquilidad en nuestra actuación.

Esta alianza de más de dos décadas está marcada por el compromiso, la disponibilidad y la relación cercana, factores que marcan toda la diferencia para una entidad como la nuestra, responsable de representar al mercado de limpieza profesional y de organizar eventos de gran relevancia, como HIGIEXPO.

Estamos orgullosos de esta historia construida en conjunto y recomendamos Asscont por la excelencia de los servicios prestados, por la competencia de su equipo y por la confianza que inspira en sus clientes.`,
      },
    },

    apoioTag: 'APOYO SOCIAL',
    apoioLink: '¡Conózcalo y apóyelo usted también!',
    blandinaTexto:
      'Organización sin fines de lucro que actúa desde 1952 en el desarrollo de niños,\nadolescentes y jóvenes en situación de vulnerabilidad social, promoviendo educación,\nfortalecimiento de vínculos y ciudadanía mediante programas socioeducativos.',
    blandinaFotoAlt: 'Actividades del Instituto Blandina Meirelles',
    olhinhosTexto:
      'Dedicada a la concienciación sobre el retinoblastoma, la iniciativa promueve\ninformación, orientación y educación para incentivar el diagnóstico precoz, etapa\nesencial para salvar vidas y preservar la salud ocular infantil.',

    parceirosTag: 'SOCIOS NACIONALES',
    parceirosAria: 'Socios nacionales',
    parceirosTextos: [
      'Referencia en tecnología para la contabilidad, desarrolla soluciones que automatizan procesos e impulsan la eficiencia de los despachos contables.',
      'Plataforma de gestión empresarial que integra ERP y servicios financieros, simplificando procesos y apoyando el crecimiento de los negocios.',
      'Especialista en Business Intelligence, transforma datos en dashboards estratégicos para apoyar decisiones más inteligentes y eficientes.',
      'Despacho de abogacía empresarial que ofrece soluciones jurídicas estratégicas con excelencia técnica y foco en los negocios.',
      'Despacho de abogados con actuación multidisciplinar, que ofrece soluciones jurídicas personalizadas centradas en la prevención y resolución de conflictos, la protección de derechos y la construcción de relaciones sólidas.',
      'Despacho de abogados con actuación nacional e internacional, especializado en asesoría jurídica empresarial, regulatoria y estratégica para organizaciones que operan en distintos sectores de la economía.',
      'Despacho de abogacía empresarial que desarrolla inteligencia jurídica para viabilizar negocios, combinando conocimiento técnico, innovación y actuación en cuestiones de alta complejidad.',
      'Despacho especializado en Derecho Empresarial y Societario, con actuación personalizada en operaciones, reorganizaciones, transacciones y cuestiones societarias de distintos niveles de complejidad.',
      'Consultoría especializada en la constitución, estructuración y gestión administrativa y patrimonial de empresas brasileñas, con apoyo a inversores extranjeros interesados en actuar en Brasil.',
    ],
  },
  trabalheConosco: {
    heroEyebrow: 'São Paulo · Presencial',
    heroTitulo: 'Forme parte de nuestro equipo.',
    heroTexto:
      'ASSCONT está creciendo y busca profesionales que quieran construir una carrera sólida en contabilidad, fiscal, laboral y tecnología — con propósito y evolución real.',
    heroBotao: 'Ver vacantes abiertas',

    numerosAria: 'ASSCONT en números',
    numerosRotulos: ['Vacantes abiertas', 'Presencial en SP', 'Beneficios incluidos', 'Plan de carrera'],
    numeroCarreira: 'Individual',

    introEyebrow: 'Por qué ASSCONT',
    introTitulo: 'Buena gente hace un trabajo excelente.',
    introTexto:
      'Valoramos las relaciones cercanas, la responsabilidad, el conocimiento técnico y la mejora continua. Queremos que cada persona encuentre espacio para aportar, aprender y crecer junto con la empresa.',
    introFotoAlt: 'Ambiente corporativo de ASSCONT',
    badgeTitulo: 'Desde 1977',
    badgeTexto: 'experiencia que evoluciona con las personas',

    culturaAria: 'Nuestra cultura',
    valoresTitulos: ['Desarrollo continuo', 'Trabajo en equipo', 'Excelencia con propósito'],
    valoresTextos: [
      'Un entorno que valora el aprendizaje, la actualización técnica y la evolución profesional.',
      'La colaboración entre áreas, la cercanía y el intercambio de conocimiento forman parte de nuestra rutina.',
      'Buscamos calidad, responsabilidad y seguridad en cada entrega para nuestros clientes.',
    ],

    vagasEyebrow: 'Vacantes destacadas',
    vagasTitulo: 'Las oportunidades que más crecen en la empresa',
    vagasNota:
      'Todas las posiciones son presenciales en São Paulo/SP, de 8:12 a 18:00, de lunes a viernes.',
    destaqueTag: 'Destacada',
    verDetalhesCandidatar: 'Ver detalles y postularse',
    semVagas:
      'No hay vacantes abiertas en este momento. Envíanos tu currículum y te avisaremos cuando surja una oportunidad para tu perfil.',
    enviarCurriculo: 'Enviar currículum',

    listaAria: 'Todas las vacantes',
    listaEyebrow: 'Todas las vacantes',
    listaTitulo: 'Más oportunidades para usted',
    verDetalhes: 'Ver detalles',

    vagasOriginal:
      'Las descripciones de las vacantes se muestran en portugués: son posiciones presenciales en Brasil cuyo trabajo diario se realiza en portugués.',

    beneficiosAria: 'Beneficios',
    beneficiosEyebrow: '¿Por qué ASSCONT?',
    beneficiosTitulo: 'Beneficios que marcan la diferencia en el día a día',
    beneficiosTitulos: [
      'Vale de comida',
      'Salud completa',
      'Seguro de vida',
      'Día libre de cumpleaños',
      'Wellhub',
      'Convenio con universidades',
      'Convenio SESC',
      'Ubicación céntrica',
    ],
    beneficiosTextos: [
      'R$ 35,00 por día hábil trabajado',
      'Asistencia médica y odontológica con 50% de subsidio',
      'Protección para usted',
      'Día libre en su día especial, sin necesidad de pedirlo',
      'Acceso a la mayor red de gimnasios y bienestar de Brasil',
      'Descuentos en instituciones asociadas para seguir formándose',
      'Acceso a cultura, ocio, deporte y servicios',
      'Oficina en São Paulo/SP, de lunes a viernes',
    ],

    processoEyebrow: 'Siguiente paso',
    processoTitulo: '¿No encontró la vacante ideal?',
    processoTexto:
      'Envíe su currículum a nuestro equipo de RR. HH. Guardamos su contacto y le respondemos en cuanto surja una oportunidad compatible con su perfil.',
    processoBotao: 'Hablar con RR. HH.',
    processoAssunto: 'Banco de talentos — ASSCONT',

    modalFechar: 'Cerrar vacante',
    fichaHorario: 'Horario',
    fichaRegime: 'Modalidad',
    fichaFormacao: 'Formación',
    fichaNivel: 'Nivel',
    modalAtividades: 'Actividades',
    modalDesejavel: 'Deseable',
    modalConhecimentos: 'Conocimientos',
    modalCta: 'Quiero postularme',
    candidaturaAssunto: 'Candidatura',
  },
  servicos: {
    heroFotoAlt: 'Profesional utilizando una calculadora',
    heroTitulo: 'Soluciones integradas para\nlos desafíos de su negocio.',
    heroTexto:
      'Experiencia, conocimiento técnico y actuación consultiva para\napoyar a su empresa con seguridad, eficiencia y visión estratégica.',
    heroBotao: 'Contáctenos',

    setoresTitulos: [
      'Industria y Comercio',
      'Servicios',
      'Empresas de Tecnología y Startups',
      'Tercer Sector',
    ],
    setoresTextos: [
      'Experiencia en la atención a empresas industriales, comerciales, importadoras y distribuidoras de los más diversos sectores.',
      'Experiencia en la atención a empresas de servicios, incluidas agencias de publicidad, comunicación y una gran diversidad de otros servicios especializados.',
      'Experiencia en la atención a empresas de tecnología, negocios digitales y start-ups.',
      'Experiencia en la atención a entidades del tercer sector, como museos, fundaciones, asociaciones y ONG.',
    ],
    setorLink: 'Conozca a nuestros clientes',

    oferecemosTitulo: 'Qué ofrecemos',
    oferecemosSub: 'Experiencia que genera confianza. Actuación que genera valor.',
    oferecemosTexto:
      'Desde hace casi 50 años unimos conocimiento técnico, visión estratégica y atención cercana para apoyar a empresas de distintos tamaños y segmentos.\nNuestra actuación integrada permite comprender cada negocio de forma amplia, ofreciendo soluciones personalizadas, seguridad en las decisiones y soporte en todas las etapas de la gestión.',

    servicoTitulos: [
      'Outsourcing Contable',
      'Gestión Fiscal',
      'BPO Laboral',
      'Auditoría',
      'BPO Financiero',
      'Servicios societarios',
      'Peritaje Contable',
      'Consultoría Tributaria',
      'Consultoría de Gestión',
    ],
    servicoTextos: [
      'Gestión contable completa, con foco en el cumplimiento normativo y el soporte a la decisión.',
      'Liquidación de tributos y administración de las obligaciones fiscales con foco en la eficiencia y la mitigación de riesgos.',
      'Gestión completa de la nómina y de las rutinas laborales.',
      'Auditoría de estados financieros, procedimientos acordados y due diligence.',
      'Gestión financiera estructurada para el control, la seguridad y la previsibilidad.',
      'Contratos y estatutos sociales, constitución y regularización de empresas, informes de valoración, fusiones y adquisiciones.',
      'Trabajos de peritaje contable, con la elaboración de informes periciales contables o dictámenes técnico-contables.',
      'Además de las rutinas operativas, ASSCONT pone a disposición:',
      'Traducimos datos en estrategias de gestión para la toma de decisiones.',
    ],
    servicoAlts: [
      'Registro contable en el ordenador',
      'Análisis de documentos fiscales',
      'Atención del equipo de RR. HH.',
      'Revisión de estados financieros',
      'Reunión de análisis financiero',
      'Estatua de la justicia',
      'Análisis de documentos periciales',
      'Reunión de consultoría tributaria',
      'Equipo analizando indicadores de gestión',
    ],

    gestaoFiscalItens: [
      'Liquidación de tributos',
      'Obligaciones accesorias',
      'Planificación fiscal',
      'Soporte en fiscalizaciones',
    ],
    bpoTrabalhistaItens: [
      'Nómina',
      'eSocial y cargas sociales',
      'Altas y bajas',
      'Consultoría preventiva',
    ],
    bpoFinanceiroItens: [
      'Cuentas por pagar y por cobrar',
      'Conciliación bancaria',
      'Flujo de caja',
      'Informes financieros',
    ],
    consultoriaTributariaItens: [
      'Interpretación de la legislación',
      'Consultas tributarias',
      'Apoyo en proyectos específicos',
      'Análisis de impactos regulatorios',
      'Recomendaciones de mejora',
    ],
    reformaTributariaTitulo: 'Reforma Tributaria brasileña',
    reformaTributariaItens: [
      'Monitoreo legislativo continuo',
      'Reuniones ejecutivas periódicas',
      'Evaluación de los impactos en la operación',
    ],
    consultoriaGestaoItens: [
      'Analizamos la salud financiera y fiscal actual de su empresa',
      'Diseñamos estrategias personalizadas para reducir costes y optimizar rutinas',
    ],
    contrate: 'Contratar',

    faqTitulo: 'Preguntas frecuentes',
    faqPerguntas: [
      '¿Qué servicios ofrece ASSCONT?',
      '¿A qué tipo de empresas atiende ASSCONT?',
      '¿Cómo funciona la transición de mi firma contable actual a ASSCONT?',
      '¿Quién se ocupa de mi cuenta en el día a día?',
      '¿Cómo garantiza ASSCONT la seguridad de mis datos?',
      '¿ASSCONT atiende a empresas con operación en el exterior?',
    ],
    faqRespostas: [
      'Outsourcing contable, gestión fiscal, BPO laboral, BPO financiero y BPO legal y societario. Además, actuamos en consultoría, auditoría y peritaje.',
      'Industria y comercio, servicios y tercer sector, tecnología e innovación. Nuestra cartera reúne más de 600 clientes en 6 países, desde museos hasta importadoras.',
      'Asumimos la transición: evaluamos la situación contable y fiscal de la empresa, identificamos pendientes y definimos el cronograma de migración antes de iniciar las rutinas.',
      'Cada cliente cuenta con un equipo asignado, con un responsable técnico directo. No pasa por un centro de atención para hablar con quien ejecuta su trabajo.',
      'Estamos certificados en ISO 9001, con procesos auditados y control de acceso a la información de cada cliente.',
      'Sí. Somos miembros de IECnet y representamos a la Cámara de Comercio Ítalo-Brasileña en el estado de São Paulo, lo que nos permite apoyar operaciones entre Brasil y otros mercados.',
    ],

    ctaTitulo: 'Agende su reunión',
    ctaBotao: 'Contáctenos',
  },

  blog: {
    heroKicker: 'Contenido Asscont',
    heroTitulo: 'Publicaciones',
    heroSub: 'Información para decisiones empresariales más seguras.',
    lerMais: 'Leer más',
    voltar: 'Todas las publicaciones',
    falarBotao: 'Hable con Asscont',
    artigos: {
      'novo-pacote-fiscal-impactos-2027': {
        titulo: "Nuevo paquete fiscal: qué puede cambiar para las empresas y cuáles son los impactos para 2027",
        resumo: "La revisión de beneficios fiscales, los cambios en el Lucro Presumido y las restricciones a la compensación de créditos tributarios amplían la necesidad de planificación y previsibilidad financiera.",
        texto: "ASSCONT | Información y Orientación Empresarial 19 de noviembre de 2026\n\nEl entorno tributario brasileño atraviesa un período de transformaciones relevantes. Mientras las empresas se preparan para la implementación gradual de la Reforma Tributaria sobre el Consumo, nuevas propuestas de ajuste fiscal avanzan en el Congreso Nacional, con posibles impactos sobre la carga tributaria, los costos operativos y la planificación financiera para 2027.\n\nEl 18 de noviembre de 2026, según la información legislativa considerada en este análisis, el Senado Federal concluyó la votación del Proyecto de Ley Complementaria n.º 299/2026, que reúne medidas orientadas a aumentar la recaudación, revisar beneficios fiscales y controlar el gasto público.\n\nEs importante destacar que el proyecto aún depende de su apreciación por la Cámara de Diputados y de las demás etapas del proceso legislativo. Por lo tanto, las medidas presentadas no deben interpretarse como obligaciones tributarias definitivamente establecidas.\n\nPara el sector empresarial, la cuestión principal va más allá de los posibles cambios en la legislación: se trata de comprender cómo distintos cambios tributarios pueden afectar, al mismo tiempo, la rentabilidad, la competitividad y la capacidad de inversión de las organizaciones.\n\n## 1. Lucro Presumido: posible aumento de la tributación\n\nUna de las propuestas más relevantes consiste en elevar los porcentajes de presunción utilizados en el cálculo del Impuesto sobre la Renta de las Personas Jurídicas (IRPJ) y de la Contribución Social sobre la Utilidad Neta (CSLL) para empresas con facturación anual superior a R$ 5 millones.\n\nEn el régimen de Lucro Presumido, estos tributos se calculan aplicando porcentajes sobre los ingresos, según la actividad de la empresa, y no directamente sobre la utilidad efectivamente obtenida.\n\nSegún las reglas de 2026 consideradas en la propuesta, ya existe un incremento del 10 % sobre los porcentajes de presunción aplicables a la parte de los ingresos que supera el límite establecido. El nuevo texto prevé elevar ese incremento al 20 %.\n\nPara determinadas empresas prestadoras de servicios, sujetas al porcentaje de presunción del 32 %, esto representaría un aumento del 35,2 % al 38,4 % sobre la parte excedente, en caso de que la propuesta se apruebe en los términos presentados.\n\nEl principal impacto está en la posibilidad de un aumento de la tributación sin un crecimiento proporcional de la utilidad efectiva de la empresa.\n\nEste escenario merece especial atención de las organizaciones que operan con márgenes reducidos o que tienen estructuras de costos más complejas.\n\nAdemás, refuerza la importancia de evaluar periódicamente la adecuación de los regímenes tributarios, especialmente al comparar el Lucro Presumido y el Lucro Real, considerando las particularidades de cada operación.\n\n## 2. Reducción de beneficios fiscales: posibles efectos sobre costos y competitividad\n\nOtro punto relevante es la propuesta de ampliar del 10 % al 20 % el recorte lineal de determinados beneficios tributarios federales, con las excepciones previstas en el texto legislativo.\n\nLos incentivos fiscales pueden ser componentes importantes de la estructura financiera de empresas que actúan en sectores específicos o utilizan regímenes especiales de tributación.\n\nUna eventual reducción de estas ventajas podría modificar proyecciones de costos, márgenes operativos y decisiones de inversión.\n\nPara la gestión empresarial, el desafío está en comprender hasta qué punto los beneficios considerados en la planificación actual seguirán disponibles y cuáles serían los efectos económicos de posibles cambios.\n\nEl análisis de los incentivos fiscales debe estar integrado en la planificación financiera y en la estrategia de largo plazo de la organización.\n\n## 3. Compensación de créditos tributarios: atención al flujo de caja\n\nEl paquete también contempla mecanismos que podrían establecer limitaciones temporales a determinadas compensaciones de tributos federales.\n\nLa compensación tributaria permite, en las condiciones previstas por la ley, utilizar créditos reconocidos para saldar deudas tributarias.\n\nEventuales restricciones a este mecanismo no implican necesariamente un aumento de las alícuotas, pero pueden alterar la disponibilidad financiera de las empresas.\n\nEsto ocurre porque los valores que se utilizarían para compensar obligaciones tributarias podrían, según las reglas que se aprueben, exigir desembolsos en determinados períodos.\n\nPara empresas con operaciones más complejas, los efectos sobre el capital de trabajo y la previsibilidad de los pagos pueden ser relevantes.\n\nEn este contexto, la gestión de los créditos tributarios y el seguimiento de los cambios legislativos adquieren una importancia aún mayor en la organización del flujo de caja.\n\n## 4. Impuesto sobre la Renta de las personas físicas: ¿qué es necesario distinguir?\n\nLas propuestas de ajuste fiscal también exigen atención a la diferencia entre la tributación de las empresas y la tributación de los ingresos de las personas físicas.\n\nEl proyecto analizado no establece, por sí solo, una nueva tabla general del Impuesto sobre la Renta de las Personas Físicas (IRPF), ni representa un aumento generalizado de la tributación sobre los salarios.\n\nSin embargo, otras iniciativas legislativas pueden producir efectos sobre la tributación de los ingresos personales y sobre las relaciones financieras entre las empresas y sus socios.\n\nPor ello, es importante que los análisis empresariales consideren el conjunto de los cambios legislativos, sin confundir propuestas distintas ni anticipar efectos que aún dependen de aprobación.\n\n## 5. Reforma Tributaria y ajuste fiscal: desafíos simultáneos para 2027\n\nUno de los aspectos más relevantes del escenario actual es la superposición de cambios tributarios.\n\nPor un lado, las empresas avanzan en la preparación para la Reforma Tributaria sobre el Consumo, que implica adaptar procesos, sistemas, contratos y rutinas fiscales.\n\nPor otro, nuevas propuestas de ajuste fiscal pueden modificar la tributación de los resultados, el uso de beneficios y la gestión de los créditos tributarios.\n\nEstas transformaciones no deben analizarse de forma aislada.\n\nUn cambio tributario puede afectar la formación de precios. La revisión de incentivos puede modificar los márgenes operativos. Las restricciones a la compensación de créditos pueden presionar el flujo de caja.\n\nCuando estos efectos se producen al mismo tiempo, aumenta la complejidad de la planificación empresarial.\n\nEl desafío para 2027 será transformar los cambios regulatorios en escenarios financieros comprensibles, que permitan decisiones más seguras y fundamentadas.\n\nPara ello, la integración entre contabilidad, contraloría, gestión financiera y planificación estratégica será especialmente relevante.\n\n## 6. Planificación empresarial: ¿qué aspectos merecen atención?\n\nAnte las propuestas en discusión, algunos puntos ganan relevancia en las evaluaciones tributarias y financieras de las organizaciones:\n\n- Planificación tributaria: análisis periódico de la adecuación del régimen de tributación a la estructura de ingresos, costos y resultados de la empresa.\n- Presupuesto de 2027: elaboración de proyecciones que consideren distintos escenarios tributarios y sus posibles efectos sobre la rentabilidad.\n- Formación de precios: evaluación de los impactos de los cambios tributarios sobre costos, márgenes y posicionamiento competitivo.\n- Beneficios fiscales: seguimiento de los incentivos utilizados e identificación de posibles exposiciones a cambios legislativos.\n- Flujo de caja: análisis de los efectos de eventuales restricciones al uso de créditos tributarios y de las necesidades de capital de trabajo.\n- Contratos comerciales: evaluación especializada de las disposiciones contractuales que puedan verse afectadas por cambios relevantes en la tributación.\n\nEstos aspectos deben examinarse conforme a la legislación vigente, las características de cada empresa y la evolución de las propuestas en el Congreso Nacional, con el acompañamiento de profesionales especializados.\n\nMás que anticipar obligaciones, el objetivo es ampliar la capacidad de comprender riesgos y construir escenarios de decisión.\n\n## 7. El equilibrio fiscal y sus efectos sobre el entorno empresarial\n\nEl debate sobre el ajuste fiscal implica la necesidad de equilibrar las cuentas públicas y, al mismo tiempo, preservar condiciones favorables a la inversión, la productividad y el crecimiento económico.\n\nPara el sector productivo, los sucesivos cambios tributarios pueden representar desafíos adicionales, especialmente cuando coinciden con una reforma estructural del sistema de tributación sobre el consumo.\n\nLa previsibilidad de las reglas es un elemento importante para las decisiones empresariales de mediano y largo plazo.\n\nPor eso, seguir la evolución legislativa no debe ser solo una actividad de cumplimiento, sino también parte del análisis estratégico de las organizaciones.\n\nLas empresas que comprenden los posibles efectos económicos de los cambios están mejor preparadas para evaluar riesgos, preservar su eficiencia operativa y fundamentar sus decisiones.\n\n## Consideraciones finales | La visión de ASSCONT\n\nEl escenario tributario de 2027 exigirá de las empresas más que conocimiento sobre nuevas reglas. Será necesario comprender cómo distintos cambios pueden relacionarse entre sí e influir en los resultados del negocio.\n\nEn ASSCONT, entendemos que la contabilidad debe ir más allá del cumplimiento de las obligaciones legales. Su contribución estratégica está en la capacidad de organizar información, interpretar escenarios y ofrecer seguridad para las decisiones empresariales.\n\nEn un entorno de transformaciones regulatorias, el rigor técnico, la planificación y una visión integrada se vuelven fundamentales para la sostenibilidad de las organizaciones.\n\nASSCONT sigue la evolución de las propuestas legislativas y refuerza la importancia de evaluaciones especializadas, que consideren las particularidades tributarias, financieras y operativas de cada empresa.\n\nASSCONT | Inteligencia contable que sustenta decisiones seguras.\n\nNota editorial: este artículo presenta un análisis informativo de propuestas legislativas en discusión, con base en el escenario descrito el 19 de noviembre de 2026. Las medidas mencionadas dependen de la conclusión del proceso legislativo y pueden sufrir cambios. El contenido no sustituye una evaluación tributaria o jurídica individualizada.",
        categoria: "Tributario y societario",
      },
      'holdings-seguranca-juridica-propostas-tributarias': {
        titulo: "Holdings patrimoniales y empresariales: los riesgos de la inseguridad jurídica ante las nuevas propuestas tributarias",
        resumo: "El debate sobre la tributación de los dividendos reaviva una cuestión fundamental: ¿cómo combatir las prácticas abusivas sin comprometer estructuras legítimas de organización patrimonial y empresarial?",
        texto: "ASSCONT | Información y Orientación Empresarial 19 de noviembre de 2026\n\nEl uso de holdings como instrumento de organización societaria, administración patrimonial, planificación sucesoria y gestión de inversiones es una práctica legítima, ampliamente adoptada en Brasil y en otros países.\n\nEstas estructuras cumplen un papel importante en la gobernanza empresarial, en la continuidad de los negocios familiares y en la administración de participaciones societarias e inversiones.\n\nSin embargo, recientes propuestas legislativas relacionadas con la tributación de utilidades y dividendos amplían una discusión que merece atención: el riesgo de que estructuras regularmente constituidas sean cuestionadas a partir de interpretaciones excesivamente amplias sobre planificación tributaria y abuso de derecho.\n\nEl Proyecto de Ley n.º 5.854/2026, presentado a la Cámara de Diputados el 13 de noviembre de 2026, propone cambios en la tributación de los dividendos y restricciones al uso de mecanismos de interposición de personas jurídicas destinados a reducir o evitar la incidencia del Impuesto sobre la Renta.\n\nSegún la información legislativa considerada en este análisis, la propuesta aún no es ley y, el 19 de noviembre, se presentó una solicitud para su retiro.\n\nAun ante esta circunstancia, el contenido de la propuesta pone de relieve una cuestión relevante para empresarios, inversionistas y familias que utilizan holdings: la importancia de preservar criterios objetivos y seguridad jurídica en la interpretación de las estructuras societarias.\n\n## 1. ¿Qué está en discusión en la tributación de las holdings?\n\nEl proyecto propone gravar las utilidades y dividendos distribuidos a personas físicas con una alícuota del 15 %, independientemente del monto recibido.\n\nPor otro lado, preserva, en principio, la no incidencia sobre las distribuciones de utilidades entre personas jurídicas domiciliadas en Brasil.\n\nLa preocupación surge en la salvedad destinada a impedir el uso de estructuras societarias que tengan como finalidad evitar artificialmente la tributación de los beneficiarios finales.\n\nCombatir la evasión fiscal, el fraude y las operaciones simuladas es necesario para la integridad del sistema tributario.\n\nSin embargo, existe una distinción fundamental entre una estructura constituida para atender finalidades empresariales legítimas y una operación artificial destinada a ocultar ingresos o disimular hechos imponibles.\n\nLa existencia de una holding no debe interpretarse, por sí sola, como indicio de irregularidad tributaria.\n\nUna estructura societaria puede atender distintos objetivos económicos, patrimoniales y sucesorios, incluso cuando su organización también proporciona eficiencia tributaria dentro de los límites legales.\n\nEl desafío está en establecer criterios suficientemente claros para distinguir la planificación legítima de las prácticas efectivamente abusivas.\n\n## 2. El riesgo de las interpretaciones subjetivas y sus efectos sobre la seguridad jurídica\n\nUno de los desafíos del entorno tributario brasileño es la necesidad de previsibilidad en la aplicación de las normas.\n\nCuando una legislación utiliza conceptos amplios, sin delimitar adecuadamente los criterios de su aplicación, pueden surgir divergencias entre los contribuyentes y las autoridades fiscales.\n\nEn el contexto de las holdings, esta preocupación cobra relevancia porque una misma estructura puede reunir distintas finalidades legítimas, como:\n\n- Centralización de participaciones societarias e inversiones.\n- Organización de la sucesión familiar y de la continuidad empresarial.\n- Separación entre las actividades operativas y la administración patrimonial.\n- Establecimiento de reglas de gobernanza y de relación entre los socios.\n- Administración de inmuebles, inversiones financieras y otros activos.\n- Reinversión de los resultados recibidos de empresas controladas.\n\nEstas finalidades no dejan de ser legítimas simplemente porque la estructura también pueda presentar ventajas tributarias previstas por la ley.\n\nLa eficiencia fiscal, cuando se obtiene por medios jurídicamente permitidos, no constituye, por sí sola, una irregularidad.\n\nPor otro lado, la regularidad formal de una sociedad tampoco elimina la necesidad de examinar la realidad económica de las operaciones y el cumplimiento de las exigencias legales.\n\nLa seguridad jurídica depende de reglas claras, criterios objetivos y análisis fundamentados en las circunstancias concretas de cada operación.\n\nEste equilibrio es esencial para preservar tanto la actuación legítima de la fiscalización como los derechos de los contribuyentes.\n\n## 3. Fiscalización tributaria: la importancia de criterios objetivos\n\nOtro aspecto relevante del debate se refiere a los límites de la actuación fiscal frente a estructuras societarias regularmente constituidas.\n\nEl contribuyente tiene derecho a organizar sus actividades y su patrimonio dentro de las alternativas admitidas por la legislación.\n\nAl mismo tiempo, las autoridades fiscales tienen competencia para examinar operaciones y cuestionar situaciones en las que existan fundamentos legales y elementos concretos que indiquen irregularidades.\n\nEl punto central está en la necesidad de fundamentación.\n\nLa eventual desconsideración de actos o estructuras societarias debe observar los requisitos legales aplicables, los hechos efectivamente demostrados y las garantías del debido proceso legal.\n\nNo sería adecuado presumir la existencia de abuso únicamente porque una determinada organización empresarial produce efectos tributarios más favorables.\n\nDel mismo modo, el análisis de una holding no puede limitarse a su constitución formal, sin considerar la manera en que sus actividades se desarrollan efectivamente.\n\nPara empresarios e inversionistas, la previsibilidad de estas interpretaciones es especialmente importante.\n\nLas estructuras patrimoniales y societarias suelen implicar decisiones de largo plazo, como la sucesión familiar, la reorganización de participaciones, las inversiones y la preservación de activos.\n\nLa posibilidad de interpretaciones imprevisibles puede aumentar la percepción de riesgo y dificultar la planificación de estas operaciones.\n\nLa estabilidad de las reglas tributarias es un componente esencial de la confianza que requieren las decisiones empresariales de largo plazo.\n\n## 4. Gobernanza y documentación: aspectos relevantes para la seguridad de las holdings\n\nAnte las discusiones legislativas, la atención no debe concentrarse en cambios precipitados de estructuras societarias legítimas.\n\nLo más importante es comprender la consistencia jurídica, económica, contable y patrimonial de estas organizaciones.\n\nEn este contexto, algunos elementos merecen atención en las evaluaciones especializadas.\n\n## Finalidad económica y patrimonial\n\nLa constitución de una holding puede estar relacionada con la administración de inversiones, la organización societaria, la sucesión familiar o la continuidad empresarial.\n\nLa claridad sobre estas finalidades contribuye a demostrar la coherencia entre la estructura adoptada y sus objetivos.\n\n## Regularidad societaria\n\nLos contratos sociales, actas, deliberaciones, registros y demás documentos societarios son elementos importantes para evidenciar la existencia y el funcionamiento efectivo de la organización.\n\n## Separación patrimonial\n\nLa distinción entre los recursos de la sociedad y el patrimonio personal de sus socios es un aspecto fundamental de la gobernanza.\n\nUna adecuada organización contable y financiera contribuye a la transparencia de los movimientos y a la consistencia de los registros.\n\n## Distribución de utilidades\n\nLas distribuciones realizadas entre sociedades o destinadas a los socios implican requisitos legales, contables y societarios que deben considerarse según la naturaleza de cada operación.\n\n## Operaciones entre partes relacionadas\n\nLos préstamos, anticipos, pagos de gastos y otros movimientos entre sociedades y socios pueden requerir una atención específica en cuanto a su naturaleza, documentación y tratamiento tributario.\n\n## Adecuación periódica de la estructura\n\nLa evolución de la legislación y los cambios en los objetivos empresariales o familiares pueden hacer necesaria una evaluación especializada de la organización societaria.\n\nEstos elementos no representan una garantía automática contra cuestionamientos fiscales, pero forman parte de una estructura de gobernanza más transparente y consistente.\n\n## 5. La importancia de las holdings para la continuidad empresarial\n\nLas holdings cumplen funciones que van más allá de la dimensión tributaria.\n\nEn las empresas familiares, por ejemplo, pueden contribuir a organizar la sucesión y a establecer reglas de administración y participación societaria.\n\nEn los grupos empresariales, pueden facilitar la centralización de inversiones, la organización de las participaciones y la definición de responsabilidades entre distintas sociedades.\n\nEn la administración patrimonial, pueden formar parte de estrategias de gestión de activos y de planificación de largo plazo.\n\nEstas aplicaciones demuestran que la discusión sobre las holdings no debe reducirse a la posibilidad de ahorro tributario.\n\nLa organización societaria también es un instrumento de gobernanza, continuidad y previsibilidad empresarial.\n\nPor ello, los cambios legislativos que afecten estas estructuras deben considerar sus efectos sobre la seguridad de las inversiones y la estabilidad de las relaciones empresariales.\n\n## 6. Libertad de organización empresarial y combate al abuso tributario\n\nEl perfeccionamiento de la legislación tributaria y el combate a las prácticas abusivas son objetivos compatibles con la preservación de la libertad de organización empresarial.\n\nNo se trata de apartar la fiscalización ni de impedir el cuestionamiento de operaciones irregulares.\n\nSe trata de asegurar que esos cuestionamientos se realicen con base en criterios legales, objetivos y verificables.\n\nLa búsqueda de una mayor recaudación y de justicia tributaria debe ir acompañada de mecanismos que preserven la previsibilidad de las reglas y el respeto a los derechos de los contribuyentes.\n\nPara empresas, inversionistas y familias, la estabilidad jurídica es un elemento importante en la definición de estrategias patrimoniales y decisiones de largo plazo.\n\nEl combate al abuso tributario no debe transformarse en una presunción generalizada de irregularidad. Del mismo modo, la planificación tributaria legítima no puede confundirse automáticamente con evasión fiscal.\n\nEl equilibrio entre una fiscalización eficiente y la seguridad jurídica es fundamental para un entorno empresarial que estimule la inversión, la gobernanza y el desarrollo económico.\n\n## Consideraciones finales | La visión de ASSCONT\n\nEl debate sobre la tributación de los dividendos y el uso de holdings refuerza la importancia de estructuras societarias fundamentadas en objetivos legítimos, acompañadas de gobernanza, transparencia y consistencia contable.\n\nEn ASSCONT, entendemos que la organización patrimonial y empresarial debe analizarse de manera integrada, considerando sus aspectos económicos, societarios, contables y tributarios.\n\nLa existencia de nuevas propuestas legislativas no significa, por sí sola, que las estructuras regularmente constituidas deban abandonarse o modificarse.\n\nEl escenario refuerza, sobre todo, la relevancia del acompañamiento especializado y de la evaluación periódica de las condiciones en que operan estas organizaciones.\n\nASSCONT sigue la evolución de las discusiones legislativas y reconoce la importancia de reglas claras, seguridad jurídica y respeto a los derechos de los contribuyentes.\n\nEn un entorno de transformaciones constantes, la previsibilidad de las reglas y la calidad de la información contable siguen siendo fundamentales para proteger la continuidad de los negocios y sustentar decisiones de largo plazo.\n\nASSCONT | Inteligencia contable que sustenta decisiones seguras.\n\nNota técnica: este artículo aborda discusiones relacionadas con el Proyecto de Ley n.º 5.854/2026, presentado el 13 de noviembre de 2026, según la información considerada en la elaboración del contenido. La propuesta no debe interpretarse como legislación vigente. Las consideraciones sobre riesgos de interpretación y fiscalización tienen carácter preventivo y no afirman que la Receita Federal ya esté adoptando tales procedimientos como consecuencia de este proyecto. El contenido es informativo y no sustituye un análisis jurídico, societario o tributario especializado.",
        categoria: "Tributario y societario",
      },
      'fim-da-escala-6x1-o-que-as-empresas-precisam-fazer-agora': {
        titulo: "Fin de la jornada 6x1: qué deben hacer ahora las empresas",
        resumo: "El cambio en la jornada laboral exige decisiones sobre operaciones, costes, atención al cliente y gestión de personas. Para las empresas, la prioridad es convertir las nuevas normas en un plan de adaptación que preserve los derechos de los trabajadores y la continuidad de las actividades.",
        texto: "En una decisión cautelar del 12 de noviembre, el magistrado Flávio Dino, del Supremo Tribunal Federal (STF) de Brasil, mantuvo el calendario de transición previsto en la Enmienda Constitucional 141/2026. A partir del 16 de diciembre de 2026, la jornada máxima será de 42 horas semanales, con dos días de descanso remunerado y sin reducción salarial. La decisión tiene efecto inmediato y está sujeta a revisión por el Pleno del Tribunal.\n\nLa siguiente etapa prevé reducir la jornada a 40 horas semanales el 16 de diciembre de 2027. Por tanto, las empresas deben planificar ambas fases del cambio.\n\n## La primera tarea es reorganizar los turnos\n\nEl comercio, la industria y los servicios deben identificar cuántas personas se necesitan en cada horario, qué funciones requieren sustituciones durante los días de descanso y cuándo se producen los picos de demanda.\n\nDos días de descanso por trabajador no significan que la empresa deba cerrar dos días a la semana. La continuidad de la actividad dependerá de la organización de los equipos y de las normas aplicables a cada sector.\n\nSi no se ha celebrado un acuerdo o convenio colectivo antes del 15 de diciembre de 2026, la decisión permite distribuir transitoriamente las 42 horas en cinco días de hasta 8 horas y 24 minutos diarios, sin recargo por horas extraordinarias sobre esos 24 minutos, hasta el 15 de diciembre de 2027. Esta autorización debe aplicarse con arreglo a las condiciones de la decisión.\n\n## La negociación colectiva cobra importancia\n\nEl magistrado permitió que los acuerdos y convenios colectivos definan la distribución y la compensación de los días de descanso, preservando íntegramente ambos descansos. También estableció un plazo de 90 días a partir del 16 de diciembre para revisar, mediante negociación, las contraprestaciones pactadas. Este plazo no aplaza el inicio de los nuevos derechos ni autoriza modificaciones unilaterales.\n\nPor ello, recomendamos identificar desde ahora los convenios colectivos aplicables a cada categoría profesional y los puntos que deben discutirse con los sindicatos y los asesores laborales.\n\n## Hay que calcular el impacto financiero\n\nMantener los salarios con menos horas disponibles exige revisar los costes operativos. El efecto variará según la empresa: algunas podrán reorganizar horarios y procesos; otras necesitarán ampliar sus plantillas para mantener la cobertura.\n\nEl presupuesto debe considerar posibles contrataciones, formación, horas extraordinarias, prestaciones y sustituciones. El análisis también debe incluir los contratos de prestación de servicios que dependan de puestos fijos o de una atención prolongada. Cualquier renegociación debe basarse en costes demostrables y en las condiciones contractuales.\n\n## Medidas que recomendamos a nuestros clientes\n\n- Identificar empleados, jornadas y turnos por establecimiento y categoría profesional.\n- Simular la cobertura operativa en las etapas de 42 y 40 horas.\n- Revisar convenios colectivos, compensaciones y bancos de horas.\n- Preparar los ajustes en los sistemas de control horario.\n- Preparar el presupuesto de adaptación y evaluar los contratos afectados.\n- Comunicar los cambios a los equipos una vez definido el modelo aplicable.\n\nLa reducción de la jornada también ofrece una oportunidad para eliminar tareas repetidas, mejorar procesos y distribuir responsabilidades. Estas mejoras deben lograrse sin convertir la reducción de horas en una sobrecarga para los trabajadores.\n\nAsscont está a disposición de sus clientes para ayudarles a analizar jornadas, simular costes y ajustar los procesos del Departamento de Personal, junto con la asesoría jurídica laboral de cada empresa.\n\nPreparar la transición desde ahora permite organizar personas, compromisos y recursos con mayor seguridad.\n\nActualización del 17 de noviembre de 2026: las acciones sobre la transición se han encaminado hacia una sentencia definitiva del STF. Las medidas cautelares del 12 de noviembre siguen vigentes; todavía no se ha fijado la fecha del fallo final.\n\nLa aplicación de las normas debe tener en cuenta las circunstancias de cada empresa, los convenios colectivos y los próximos acontecimientos judiciales.\n\n[Fuente: Supremo Tribunal Federal — decisión del 12/11/2026.](https://noticias.stf.jus.br/postsnoticias/stf-mantem-regra-de-transicao-para-implementacao-da-jornada-5x2)\n\n[Actualización judicial del 17/11/2026.](https://www.gazetadopovo.com.br/republica/dino-fixa-prazos-para-manifestacoes-e-prepara-julgamento-definitivo-sobre-fim-da-escala-6x1/)",
        categoria: "Laboral",
      },
      'pro-labore-distribuicao-lucros-seguranca-socios': {
        titulo: "Pró-labore y distribución de utilidades: una separación correcta protege a la empresa y a sus socios",
        resumo: "Conozca por qué la remuneración por el trabajo de los socios es distinta de la distribución de utilidades y qué medidas contables y societarias ayudan a proteger el negocio.",
        texto: "En muchas empresas, una misma persona ocupa dos posiciones: es socia del negocio y también participa en su administración u operación. Aunque ambas funciones recaigan en la misma persona, los importes que recibe por cada una tienen naturalezas distintas y deben identificarse correctamente.\n\nComo socio, participa en los resultados y asume los riesgos del negocio. Por el trabajo realizado, percibe una remuneración. Esta distinción debe reflejarse en los documentos, en la contabilidad y en la forma en que se efectúan los pagos.\n\nLa **distribución de utilidades** deriva de la condición de socio y presupone la existencia de resultados disponibles, debidamente determinados, así como el cumplimiento de las normas societarias.\n\nEl **pró-labore**, en cambio, corresponde a la remuneración por el trabajo realizado en la empresa, ya sea en la administración, la dirección o la ejecución de actividades profesionales.\n\nEl socio que trabaja en la empresa puede recibir ambos conceptos. Lo importante es poder demostrar el fundamento de cada pago.\n\n## ¿Por qué merece atención esta separación?\n\nEn la Resolución n.º 2201-010.366, de marzo de 2023, el Consejo Administrativo de Recursos Fiscales de Brasil (CARF) mantuvo el cobro de contribuciones a la seguridad social sobre importes clasificados como distribución de utilidades en una sociedad de servicios médicos.\n\nEntre los elementos considerados figuraban pagos relacionados con servicios individuales, anticipos sin una determinación contable suficiente de utilidades y la falta de una separación fiable entre remuneración y beneficios.\n\nLa Receita Federal de Brasil, mediante la Solución de Consulta Cosit n.º 120/2016, también destacó, para sociedades civiles dedicadas a servicios profesionales, la obligación de distinguir la parte pagada por el trabajo de la correspondiente a las utilidades.\n\nEstos criterios refuerzan un principio importante: **la denominación asignada a un pago debe corresponder a su naturaleza real.**\n\nUn asiento contable o una transferencia bancaria identificada como «utilidades» no sustituye la acreditación del resultado ni del origen del retiro.\n\n## ¿Cómo organizar los pagos a los socios?\n\nLa organización de los retiros exige criterios claros, documentación adecuada y registros contables coherentes.\n\nEntre los principales aspectos que merecen atención se encuentran los siguientes:\n\n## 1. Definir las funciones de cada socio\n\nEs importante distinguir a quienes participan únicamente como inversores de quienes también realizan tareas de administración o trabajan directamente en el negocio.\n\n## 2. Formalizar la remuneración por el trabajo\n\nLa remuneración debe ajustarse a criterios compatibles con las funciones desempeñadas, acompañados de los registros y aportaciones aplicables.\n\n## 3. Determinar las utilidades antes de distribuirlas\n\nLa contabilidad debe estar actualizada y contar con estados financieros que respalden los importes distribuidos, incluso cuando existan anticipos.\n\n## 4. Documentar las decisiones societarias\n\nLa asignación de resultados debe respetar lo previsto en el contrato social y las aprobaciones necesarias.\n\n## 5. Identificar los retiros por separado\n\nLos registros contables y justificantes deben permitir distinguir entre pró-labore, distribución de utilidades y otras operaciones realizadas con los socios.\n\n## La importancia de revisar los criterios de remuneración\n\nComo medida de gestión, conviene revisar el importe del pró-labore cuando cambian las responsabilidades del socio.\n\nFijar una remuneración meramente simbólica, sin evaluar el trabajo realmente realizado y los demás retiros, puede dejar cuestiones importantes sin resolver.\n\nDel mismo modo, debe quedar claramente documentada la situación del socio que solo invierte en el negocio y no presta servicios a la empresa.\n\nMás allá de una clasificación contable, esta separación contribuye a una visión más precisa de la estructura financiera y societaria del negocio.\n\n## Transparencia contable y seguridad en las decisiones\n\nSeparar correctamente el pró-labore de la distribución de utilidades mejora la transparencia de la gestión, la calidad de la información contable y la seguridad de las decisiones empresariales.\n\nEsta distinción también permite conocer el costo del trabajo de los socios y evaluar con mayor precisión los resultados de la empresa.\n\n**Una estructura de retiros bien documentada fortalece el gobierno corporativo y contribuye a reducir los riesgos fiscales y de seguridad social.**\n\nAsscont está a disposición para apoyar el análisis de la estructura de retiros, la organización de los registros y la evaluación de la documentación necesaria, teniendo en cuenta las características de cada empresa y la legislación aplicable.\n\nAsscont — excelencia contable para decisiones seguras y relaciones duraderas.",
        categoria: "Tributario y societario",
      },
      'nr-1-suspensao-sancoes-stf': {
        titulo: 'NR-1: suspensión temporal de sanciones por el STF y orientaciones para las empresas',
        resumo:
          'El Supremo Tribunal Federal de Brasil suspendió temporalmente determinadas sanciones vinculadas a los factores de riesgo psicosocial de la NR-1. La norma, sin embargo, sigue vigente.',
        texto:
          'Información actualizada el 11 de noviembre de 2026.\n\nEstimados clientes:\n\nAsscont les informa que el Supremo Tribunal Federal (STF) de Brasil determinó la suspensión temporal de determinadas sanciones relacionadas con la evaluación de los factores de riesgo psicosocial en el entorno laboral, previstos en la Norma Reglamentaria n.º 1 (NR-1).\n\nLa decisión se produce en medio de cuestionamientos sobre la claridad de los criterios de evaluación de estos riesgos y de responsabilización de las empresas.\n\nEs importante destacar que la medida no suspende la NR-1 en su totalidad ni elimina las demás obligaciones relacionadas con la seguridad y la salud en el trabajo.\n\n## 1. ¿Qué decidió el STF?\n\nSegún la información presentada en la Acción por Incumplimiento de Precepto Fundamental (ADPF) n.º 1.316, la suspensión se determinó inicialmente el 25 de junio de 2026, por un plazo de 90 días, y fue confirmada posteriormente por el Pleno del STF.\n\nEl 24 de septiembre de 2026, la medida se prorrogó por otros 90 días, lo que permite continuar las discusiones técnicas destinadas a establecer criterios más objetivos para la aplicación de las reglas.\n\nLa suspensión abarca actas de infracción, multas, notificaciones de carácter punitivo y otras medidas coercitivas basadas en los ítems 1.5.3.1.4, 1.5.3.2.1, 1.5.4.4.2.1, 1.5.4.4.2.2 y 1.5.4.4.5.3 de la NR-1, exclusivamente en lo que se refiere a los factores de riesgo psicosocial relacionados con el trabajo.\n\nEn octubre de 2026, el STF también autorizó la participación de la Abogacía General de la Unión (AGU) en las negociaciones técnicas y determinó la suspensión de la tramitación de las acciones por 60 días, manteniendo, durante ese período, los efectos de la decisión provisional sobre las sanciones cuestionadas.\n\nAtención: la suspensión tiene un alcance específico y no representa una exención general de las responsabilidades de las empresas en materia de Seguridad y Salud en el Trabajo (SST).\n\n## 2. ¿Qué cuidados deben mantener las empresas?\n\nAun con la suspensión temporal de las sanciones mencionadas, las directrices generales de prevención y protección de la salud de los trabajadores siguen siendo relevantes.\n\nEn este contexto, se recomienda que las organizaciones, con el apoyo de profesionales especializados en Seguridad y Salud en el Trabajo (SST) y la participación de las áreas de Recursos Humanos y Administración, presten atención a los siguientes aspectos:\n\n- Evaluación de las condiciones de trabajo: análisis de factores como sobrecarga de actividades, jornadas laborales, prácticas de gestión, situaciones de acoso y otras condiciones que puedan comprometer la salud y el bienestar de los trabajadores.\n- Revisión de los instrumentos de gestión de riesgos: verificación de la necesidad de actualizar la Evaluación Ergonómica Preliminar (AEP), el inventario de riesgos laborales y el plan de acción del Programa de Gestión de Riesgos (PGR), considerando las exigencias y eventuales exenciones aplicables a cada organización.\n- Continuidad de las medidas preventivas: mantenimiento de las acciones de prevención y corrección, con definición de responsables, seguimiento de plazos y documentación de las medidas adoptadas.\n- Participación y seguimiento: participación de los trabajadores en la evaluación de las condiciones de trabajo y monitoreo de la eficacia de las medidas implementadas.\n\nEstas prácticas contribuyen a una gestión preventiva más estructurada, favoreciendo la organización de los procesos internos y la reducción de la exposición a riesgos laborales y operativos.\n\n## 3. ¿Cómo proceder en caso de inspección o acta de infracción?\n\nAnte la recepción de una notificación o acta de infracción relacionada con los factores de riesgo psicosocial, es importante que la situación sea analizada por la asesoría jurídica de la empresa, junto con los profesionales responsables de SST.\n\nEsta evaluación deberá considerar el fundamento de la exigencia, su eventual inclusión en el alcance de la decisión del STF y los plazos administrativos aplicables.\n\nLa suspensión de determinadas sanciones no significa que todas las notificaciones o exigencias relacionadas con la NR-1 queden automáticamente sin efecto.\n\nPor ello, cada situación requiere un análisis individualizado, especialmente en cuanto a las obligaciones que siguen vigentes.\n\n## 4. ¿Qué representa este escenario para las empresas?\n\nEl período de suspensión es una oportunidad para que las organizaciones revisen sus procesos internos, mejoren su documentación y fortalezcan sus prácticas de prevención.\n\nMás allá de seguir la evolución judicial, es importante comprender que la gestión de los riesgos laborales forma parte de una estructura más amplia de gobernanza, cumplimiento normativo y responsabilidad empresarial.\n\nLa evolución de las discusiones técnicas podrá aportar aclaraciones sobre los criterios de evaluación e inspección de los factores de riesgo psicosocial.\n\nHasta que haya una definición, el seguimiento de las actualizaciones normativas y judiciales, junto con el apoyo de profesionales especializados, sigue siendo fundamental para una actuación segura y coherente.\n\n## Orientación de Asscont\n\nAsscont reafirma la importancia de seguir la evolución de la decisión del STF y de mantener una actuación preventiva, organizada y alineada con las obligaciones legales aplicables.\n\nNuestro equipo sigue a su disposición para aclarar los posibles efectos laborales y apoyar la coordinación con los profesionales responsables de las evaluaciones y adecuaciones técnicas necesarias.\n\nAtentamente,\n\nAsscont Assessoria Contábil e Auditoria',
        categoria: 'Laboral',
      },
      '2026-previsibilidade': {
        titulo: '2026 exigirá más que crecimiento. Exigirá previsibilidad.',
        resumo:
          'El entorno empresarial proyectado para el próximo ciclo apunta a un escenario de cautela estratégica.',
        texto:
          'El entorno empresarial proyectado para el próximo ciclo apunta a un escenario de cautela estratégica. La consolidación de la reforma tributaria brasileña, el comportamiento de las cuentas públicas y el contexto político refuerzan la importancia de decisiones estructuradas y fundamentadas en datos fiables.',
        categoria: 'Gestión empresarial',
      },
      'stf-distribuicao-lucros-dividendos': {
        titulo:
          'La decisión del Supremo refuerza la seguridad jurídica y orienta la planificación societaria de las empresas.',
        resumo:
          'La decisión prorroga el plazo vinculado a la aprobación de la distribución de utilidades y dividendos del ejercicio 2025.',
        texto:
          'El Supremo Tribunal Federal (STF) de Brasil decidió prorrogar hasta el 31 de enero de 2026 el plazo para la aprobación de la distribución de utilidades y dividendos correspondientes al ejercicio 2025, condición prevista en la Ley n.º 15.270/2025 para mantener la exención del Impuesto sobre la Renta.',
        categoria: 'Tributario y societario',
      },
      'departamento-pessoal-estrategico': {
        titulo:
          'Departamento de Personal estratégico: el pilar silencioso que sostiene la seguridad, el crecimiento y la confianza en las empresas',
        resumo:
          'El Departamento de Personal va mucho más allá de las rutinas operativas de altas, bajas, nómina y control horario.',
        texto:
          'El Departamento de Personal es un área fundamental para el buen funcionamiento de las empresas. Aunque muchas veces se asocia únicamente a las rutinas operativas —altas, bajas, nómina y control horario—, su actuación va mucho más allá de esas actividades.',
        categoria: 'Departamento de personal',
      },
    },
  },
  legal: {
    sumario: 'Índice del documento',
    kicker: 'Información legal',
    termosTitulo: 'Términos de Uso',
    privacidadeTitulo: 'Política de Privacidad',
    atualizadoEm: 'Actualizado el',
    verTermos: 'Ver los Términos de Uso',
    verPrivacidade: 'Ver la Política de Privacidad',
    somentePortugues:
      'Este documento está disponible únicamente en portugués. La versión en portugués es la que tiene validez. Si necesita ayuda para comprenderlo, contáctenos.',
  },

  erro404: {
    kicker: 'Error 404',
    titulo: 'Página no encontrada',
    descricao:
      'La dirección que abrió no existe en este sitio. Puede haber un error de escritura, o el contenido puede haber cambiado de lugar.',
    voltar: 'Ir a la página de inicio',
    sugestoes: 'Quizá busque:',
  },
};

export default es;

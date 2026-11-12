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

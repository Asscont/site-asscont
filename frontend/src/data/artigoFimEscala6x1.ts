import imagemFimEscala6x1 from '../assets/publicacoes/fim-da-escala-6x1.jpg';
export type BlocoEscala6x1 =
  | { tipo: 'titulo' | 'paragrafo' | 'nota'; texto: string }
  | { tipo: 'lista'; itens: string[] }
  | { tipo: 'fonte'; texto: string; url: string };

export type ArtigoEscala6x1 = {
  slug: string;
  imagem: string;
  titulo: string;
  resumo: string;
  texto: string;
  categoria: string;
  conteudo: BlocoEscala6x1[];
};

// Artigo recebido da ASSCONT (PDF de novembro de 2026).
// O texto integral e as traduções compartilham a mesma estrutura de blocos.
export const artigoFimEscala6x1: ArtigoEscala6x1 = {
  slug: 'fim-da-escala-6x1-o-que-as-empresas-precisam-fazer-agora',
  imagem: imagemFimEscala6x1,

  "titulo": "Fim da escala 6x1: o que as empresas precisam fazer agora",
  "resumo": "A mudança na jornada de trabalho exige decisões que envolvem operação, custos, atendimento e gestão de pessoas. Para as empresas, a prioridade é transformar as novas regras em um plano de adaptação que preserve os direitos dos trabalhadores e a continuidade das atividades.",
  "texto": "Em decisão liminar de 12 de novembro, o ministro Flávio Dino, do Supremo Tribunal Federal, manteve o início da transição prevista na Emenda Constitucional 141/2026.",
  "categoria": "Legislação trabalhista",
  "conteudo": [
    {
      "tipo": "paragrafo",
      "texto": "Em decisão liminar de 12 de novembro, o ministro Flávio Dino, do Supremo Tribunal Federal, manteve o início da transição prevista na Emenda Constitucional 141/2026: a partir de 16 de dezembro de 2026, a jornada máxima passa para 42 horas semanais, com dois repousos remunerados e sem redução salarial. A decisão tem eficácia imediata e está sujeita ao referendo do Plenário."
    },
    {
      "tipo": "paragrafo",
      "texto": "A etapa seguinte prevê a redução para 40 horas semanais em 16 de dezembro de 2027. Portanto, as empresas devem planejar as duas fases da mudança."
    },
    {
      "tipo": "titulo",
      "texto": "O primeiro trabalho é redesenhar as escalas"
    },
    {
      "tipo": "paragrafo",
      "texto": "Comércio, indústria e serviços precisam identificar quantas pessoas são necessárias em cada horário, quais funções exigem substituição durante as folgas e onde existem períodos de maior demanda."
    },
    {
      "tipo": "paragrafo",
      "texto": "Dois dias de descanso por empregado não significam que a empresa precise fechar dois dias por semana. A continuidade do funcionamento dependerá da organização das equipes, observadas as regras aplicáveis à atividade."
    },
    {
      "tipo": "paragrafo",
      "texto": "A decisão admite, na ausência de instrumento coletivo celebrado até 15 de dezembro de 2026, a distribuição transitória das 42 horas em cinco dias, com até 8 horas e 24 minutos diários, sem adicional extraordinário sobre esses 24 minutos, até 15 de dezembro de 2027. Essa autorização deve ser aplicada dentro das condições da decisão."
    },
    {
      "tipo": "titulo",
      "texto": "A negociação coletiva ganha importância"
    },
    {
      "tipo": "paragrafo",
      "texto": "O ministro permitiu que acordos e convenções coletivas definam a distribuição e a compensação das folgas, preservando integralmente os dois repousos. Também fixou prazo de 90 dias, contado de 16 de dezembro, para eventual revisão de contrapartidas negociadas. Esse prazo não adia o início dos novos direitos nem autoriza alterações unilaterais dessas contrapartidas."
    },
    {
      "tipo": "paragrafo",
      "texto": "Por isso, recomendamos levantar desde já os instrumentos coletivos de cada categoria e identificar os pontos que precisam ser discutidos com os sindicatos e a assessoria trabalhista."
    },
    {
      "tipo": "titulo",
      "texto": "O impacto financeiro precisa ser calculado"
    },
    {
      "tipo": "paragrafo",
      "texto": "A manutenção do salário com menos horas disponíveis exige revisar o custo da operação. O efeito será diferente conforme a empresa: algumas poderão reorganizar horários e processos; outras precisarão ampliar equipes para manter a cobertura."
    },
    {
      "tipo": "paragrafo",
      "texto": "O orçamento deve considerar possíveis contratações, treinamento, horas extras, benefícios e substituições. A análise também deve alcançar contratos de prestação de serviços que dependam de postos fixos ou atendimento prolongado. Eventuais renegociações precisam estar apoiadas em custos demonstráveis e nas condições contratuais."
    },
    {
      "tipo": "titulo",
      "texto": "Providências que recomendamos aos clientes"
    },
    {
      "tipo": "lista",
      "itens": [
        "Mapear empregados, jornadas e escalas por estabelecimento e categoria.",
        "Simular a cobertura da operação nas etapas de 42 e 40 horas.",
        "Revisar acordos coletivos, compensações e bancos de horas.",
        "Preparar os ajustes nos sistemas de ponto.",
        "Elaborar o orçamento da adaptação e avaliar contratos afetados.",
        "Comunicar as mudanças às equipes depois de definido o modelo aplicável."
      ]
    },
    {
      "tipo": "paragrafo",
      "texto": "A redução da jornada também oferece uma oportunidade para eliminar retrabalho, melhorar processos e distribuir responsabilidades. Esses ganhos precisam ser construídos sem transformar a diminuição das horas em sobrecarga para os trabalhadores."
    },
    {
      "tipo": "paragrafo",
      "texto": "A Asscont está à disposição para apoiar seus clientes no diagnóstico das jornadas, nas simulações de custos e nos ajustes do Departamento Pessoal, em conjunto com a assessoria jurídica trabalhista de cada empresa."
    },
    {
      "tipo": "paragrafo",
      "texto": "Preparar a transição agora permite organizar pessoas, compromissos e recursos com maior segurança."
    },
    {
      "tipo": "nota",
      "texto": "Atualização de 17 de novembro de 2026: as ações sobre a transição foram encaminhadas para julgamento definitivo no STF. As medidas cautelares de 12 de novembro seguem em vigor; ainda não há data definida para a decisão final."
    },
    {
      "tipo": "nota",
      "texto": "A aplicação das regras deve considerar o enquadramento de cada empresa, as normas coletivas e os próximos desdobramentos do julgamento."
    },
    {
      "tipo": "fonte",
      "texto": "Fonte: Supremo Tribunal Federal — decisão de 12/11/2026.",
      "url": "https://noticias.stf.jus.br/postsnoticias/stf-mantem-regra-de-transicao-para-implementacao-da-jornada-5x2"
    },
    {
      "tipo": "fonte",
      "texto": "Atualização processual de 17/11/2026.",
      "url": "https://www.gazetadopovo.com.br/republica/dino-fixa-prazos-para-manifestacoes-e-prepara-julgamento-definitivo-sobre-fim-da-escala-6x1/"
    }
  ]
};

export const traducoesFimEscala6x1: Record<'en' | 'es', Omit<ArtigoEscala6x1, 'slug' | 'imagem'>> = {
  en: {
  "titulo": "The end of the 6-on, 1-off work schedule: what companies need to do now",
  "resumo": "The changes to Brazil’s working hours require decisions about operations, costs, customer service and people management. Businesses should turn the new rules into an adaptation plan that protects employees’ rights and keeps their operations running.",
  "texto": "In an interim ruling on 12 November, Justice Flávio Dino of Brazil’s Federal Supreme Court upheld the transition timetable established by Constitutional Amendment 141/2026.",
  "categoria": "Employment law",
  "conteudo": [
    {
      "tipo": "paragrafo",
      "texto": "In an interim ruling on 12 November, Justice Flávio Dino of Brazil’s Federal Supreme Court (STF) upheld the transition timetable established by Constitutional Amendment 141/2026. From 16 December 2026, the maximum working week will fall to 42 hours, with two paid weekly rest days and no reduction in pay. The ruling takes immediate effect and remains subject to review by the full Court."
    },
    {
      "tipo": "paragrafo",
      "texto": "The next stage reduces the maximum to 40 hours per week on 16 December 2027. Companies therefore need to plan for both phases."
    },
    {
      "tipo": "titulo",
      "texto": "The first task is to redesign work schedules"
    },
    {
      "tipo": "paragrafo",
      "texto": "Retail, manufacturing and service businesses must identify how many people they need at each time, which roles require cover during rest days and when demand peaks."
    },
    {
      "tipo": "paragrafo",
      "texto": "Two rest days per employee do not mean that a business must close two days a week. Continued operations will depend on team scheduling and the rules applicable to each activity."
    },
    {
      "tipo": "paragrafo",
      "texto": "Where no collective bargaining agreement is concluded by 15 December 2026, the ruling allows the transitional 42-hour week to be spread over five days of up to 8 hours and 24 minutes each, without overtime premiums on those additional 24 minutes, until 15 December 2027. This authorisation must be applied within the conditions of the ruling."
    },
    {
      "tipo": "titulo",
      "texto": "Collective bargaining becomes more important"
    },
    {
      "tipo": "paragrafo",
      "texto": "The justice allowed collective agreements to define how rest days are distributed and compensated, while fully preserving the two rest days. He also set a 90-day period starting on 16 December for any negotiated review of existing contractual concessions. That period does not postpone the new rights or authorise unilateral changes to those concessions."
    },
    {
      "tipo": "paragrafo",
      "texto": "We therefore recommend identifying the collective agreements that apply to each employee category now and determining which matters require discussion with unions and employment law advisers."
    },
    {
      "tipo": "titulo",
      "texto": "The financial impact needs to be calculated"
    },
    {
      "tipo": "paragrafo",
      "texto": "Maintaining salaries while reducing available working hours requires a review of operating costs. The impact will vary: some businesses can reorganise schedules and processes, while others may need more staff to maintain coverage."
    },
    {
      "tipo": "paragrafo",
      "texto": "Budgets should account for possible recruitment, training, overtime, benefits and replacement cover. The analysis should also include service contracts that depend on fixed posts or extended operating hours. Any renegotiations should be supported by demonstrable costs and the terms of the relevant contracts."
    },
    {
      "tipo": "titulo",
      "texto": "Steps we recommend to clients"
    },
    {
      "tipo": "lista",
      "itens": [
        "Map employees, working hours and schedules by location and employee category.",
        "Simulate operational coverage under both the 42-hour and 40-hour stages.",
        "Review collective agreements, compensatory arrangements and time banks.",
        "Prepare adjustments to time and attendance systems.",
        "Budget for the transition and assess affected contracts.",
        "Communicate changes to teams once the applicable model has been defined."
      ]
    },
    {
      "tipo": "paragrafo",
      "texto": "Shorter working hours are also an opportunity to remove duplicated work, improve processes and allocate responsibilities more effectively. These gains must not come at the cost of additional pressure on employees."
    },
    {
      "tipo": "paragrafo",
      "texto": "Asscont is available to support clients in assessing work schedules, modelling costs and adjusting payroll and personnel administration procedures, alongside each company’s employment law advisers."
    },
    {
      "tipo": "paragrafo",
      "texto": "Preparing for the transition now will help businesses organise people, obligations and resources with greater confidence."
    },
    {
      "tipo": "nota",
      "texto": "Update — 17 November 2026: the cases concerning the transition have been moved towards a final judgment by Brazil’s Supreme Court. The interim measures of 12 November remain in force; no date has yet been set for the final ruling."
    },
    {
      "tipo": "nota",
      "texto": "Implementation must reflect each company’s circumstances, the applicable collective agreements and further developments in the Court proceedings."
    },
    {
      "tipo": "fonte",
      "texto": "Source: Federal Supreme Court — ruling of 12 November 2026.",
      "url": "https://noticias.stf.jus.br/postsnoticias/stf-mantem-regra-de-transicao-para-implementacao-da-jornada-5x2"
    },
    {
      "tipo": "fonte",
      "texto": "Court proceedings update — 17 November 2026.",
      "url": "https://www.gazetadopovo.com.br/republica/dino-fixa-prazos-para-manifestacoes-e-prepara-julgamento-definitivo-sobre-fim-da-escala-6x1/"
    }
  ]
},
  es: {
  "titulo": "Fin de la jornada 6x1: qué deben hacer ahora las empresas",
  "resumo": "El cambio en la jornada laboral exige decisiones sobre operaciones, costes, atención al cliente y gestión de personas. Para las empresas, la prioridad es convertir las nuevas normas en un plan de adaptación que preserve los derechos de los trabajadores y la continuidad de las actividades.",
  "texto": "En una decisión cautelar del 12 de noviembre, el magistrado Flávio Dino, del Supremo Tribunal Federal de Brasil, mantuvo el calendario de transición previsto en la Enmienda Constitucional 141/2026.",
  "categoria": "Legislación laboral",
  "conteudo": [
    {
      "tipo": "paragrafo",
      "texto": "En una decisión cautelar del 12 de noviembre, el magistrado Flávio Dino, del Supremo Tribunal Federal (STF) de Brasil, mantuvo el calendario de transición previsto en la Enmienda Constitucional 141/2026. A partir del 16 de diciembre de 2026, la jornada máxima será de 42 horas semanales, con dos días de descanso remunerado y sin reducción salarial. La decisión tiene efecto inmediato y está sujeta a revisión por el Pleno del Tribunal."
    },
    {
      "tipo": "paragrafo",
      "texto": "La siguiente etapa prevé reducir la jornada a 40 horas semanales el 16 de diciembre de 2027. Por tanto, las empresas deben planificar ambas fases del cambio."
    },
    {
      "tipo": "titulo",
      "texto": "La primera tarea es reorganizar los turnos"
    },
    {
      "tipo": "paragrafo",
      "texto": "El comercio, la industria y los servicios deben identificar cuántas personas se necesitan en cada horario, qué funciones requieren sustituciones durante los días de descanso y cuándo se producen los picos de demanda."
    },
    {
      "tipo": "paragrafo",
      "texto": "Dos días de descanso por trabajador no significan que la empresa deba cerrar dos días a la semana. La continuidad de la actividad dependerá de la organización de los equipos y de las normas aplicables a cada sector."
    },
    {
      "tipo": "paragrafo",
      "texto": "Si no se ha celebrado un acuerdo o convenio colectivo antes del 15 de diciembre de 2026, la decisión permite distribuir transitoriamente las 42 horas en cinco días de hasta 8 horas y 24 minutos diarios, sin recargo por horas extraordinarias sobre esos 24 minutos, hasta el 15 de diciembre de 2027. Esta autorización debe aplicarse con arreglo a las condiciones de la decisión."
    },
    {
      "tipo": "titulo",
      "texto": "La negociación colectiva cobra importancia"
    },
    {
      "tipo": "paragrafo",
      "texto": "El magistrado permitió que los acuerdos y convenios colectivos definan la distribución y la compensación de los días de descanso, preservando íntegramente ambos descansos. También estableció un plazo de 90 días a partir del 16 de diciembre para revisar, mediante negociación, las contraprestaciones pactadas. Este plazo no aplaza el inicio de los nuevos derechos ni autoriza modificaciones unilaterales."
    },
    {
      "tipo": "paragrafo",
      "texto": "Por ello, recomendamos identificar desde ahora los convenios colectivos aplicables a cada categoría profesional y los puntos que deben discutirse con los sindicatos y los asesores laborales."
    },
    {
      "tipo": "titulo",
      "texto": "Hay que calcular el impacto financiero"
    },
    {
      "tipo": "paragrafo",
      "texto": "Mantener los salarios con menos horas disponibles exige revisar los costes operativos. El efecto variará según la empresa: algunas podrán reorganizar horarios y procesos; otras necesitarán ampliar sus plantillas para mantener la cobertura."
    },
    {
      "tipo": "paragrafo",
      "texto": "El presupuesto debe considerar posibles contrataciones, formación, horas extraordinarias, prestaciones y sustituciones. El análisis también debe incluir los contratos de prestación de servicios que dependan de puestos fijos o de una atención prolongada. Cualquier renegociación debe basarse en costes demostrables y en las condiciones contractuales."
    },
    {
      "tipo": "titulo",
      "texto": "Medidas que recomendamos a nuestros clientes"
    },
    {
      "tipo": "lista",
      "itens": [
        "Identificar empleados, jornadas y turnos por establecimiento y categoría profesional.",
        "Simular la cobertura operativa en las etapas de 42 y 40 horas.",
        "Revisar convenios colectivos, compensaciones y bancos de horas.",
        "Preparar los ajustes en los sistemas de control horario.",
        "Preparar el presupuesto de adaptación y evaluar los contratos afectados.",
        "Comunicar los cambios a los equipos una vez definido el modelo aplicable."
      ]
    },
    {
      "tipo": "paragrafo",
      "texto": "La reducción de la jornada también ofrece una oportunidad para eliminar tareas repetidas, mejorar procesos y distribuir responsabilidades. Estas mejoras deben lograrse sin convertir la reducción de horas en una sobrecarga para los trabajadores."
    },
    {
      "tipo": "paragrafo",
      "texto": "Asscont está a disposición de sus clientes para ayudarles a analizar jornadas, simular costes y ajustar los procesos del Departamento de Personal, junto con la asesoría jurídica laboral de cada empresa."
    },
    {
      "tipo": "paragrafo",
      "texto": "Preparar la transición desde ahora permite organizar personas, compromisos y recursos con mayor seguridad."
    },
    {
      "tipo": "nota",
      "texto": "Actualización del 17 de noviembre de 2026: las acciones sobre la transición se han encaminado hacia una sentencia definitiva del STF. Las medidas cautelares del 12 de noviembre siguen vigentes; todavía no se ha fijado la fecha del fallo final."
    },
    {
      "tipo": "nota",
      "texto": "La aplicación de las normas debe tener en cuenta las circunstancias de cada empresa, los convenios colectivos y los próximos acontecimientos judiciales."
    },
    {
      "tipo": "fonte",
      "texto": "Fuente: Supremo Tribunal Federal — decisión del 12/11/2026.",
      "url": "https://noticias.stf.jus.br/postsnoticias/stf-mantem-regra-de-transicao-para-implementacao-da-jornada-5x2"
    },
    {
      "tipo": "fonte",
      "texto": "Actualización judicial del 17/11/2026.",
      "url": "https://www.gazetadopovo.com.br/republica/dino-fixa-prazos-para-manifestacoes-e-prepara-julgamento-definitivo-sobre-fim-da-escala-6x1/"
    }
  ]
}
};

/* Vagas migradas do portal antigo (vagas.asscont.com.br).
   Este arquivo e a unica fonte de verdade da pagina Trabalhe Conosco: para
   abrir, fechar ou editar uma vaga, mexa so aqui — a tela se monta sozinha.

   ATENCAO: as duas vagas em destaque (Assistente Fiscal Jr e Auxiliar
   Contabil Trainee) vieram do portal sem a ficha completa. Elas estao com
   `atividades` e `desejavel` vazios de proposito; a tela simplesmente nao
   renderiza essas listas enquanto o RH nao enviar os textos. */

export type Vaga = {
  id: string;
  titulo: string;
  /* linha curta da listagem: "Fiscal · Trainee · Superior em andamento" */
  meta: string;
  salario: string;
  resumo: string;
  destaque: boolean;
  etiqueta?: string;
  tags: string[];
  horario: string;
  regime: string;
  formacao: string;
  nivel: string;
  atividades: string[];
  desejavel: string[];
  conhecimentos: string[];
};

const HORARIO_PADRAO = '08:12 – 18:00, Seg–Sex';
const REGIME_PADRAO = 'Presencial · São Paulo/SP';

export const emailRh = 'rh@asscont.com.br';

export const vagas: Vaga[] = [
  {
    id: 'assistente-fiscal-jr',
    titulo: 'Assistente Fiscal Jr',
    meta: 'Fiscal · Júnior · São Paulo/SP',
    salario: 'R$ 4.200,00',
    resumo:
      'Apure tributos federais, municipais e estaduais. Gerencie EFD Contribuições, SPED Fiscal e preste suporte consultivo direto aos clientes da carteira.',
    destaque: true,
    tags: ['ISS · PIS · COFINS', 'EFD Contribuições', 'SPED Fiscal', 'ICMS-ST · IPI'],
    horario: HORARIO_PADRAO,
    regime: REGIME_PADRAO,
    formacao: '',
    nivel: 'Júnior',
    atividades: [],
    desejavel: [],
    conhecimentos: [],
  },
  {
    id: 'auxiliar-contabil-trainee',
    titulo: 'Auxiliar Contábil Trainee',
    meta: 'Contábil · Trainee · São Paulo/SP',
    salario: 'R$ 2.500,00',
    resumo:
      'Lançamentos contábeis, conciliação bancária, conferência de folha de pagamento e contabilização de ativos. Ideal para quem está no início da jornada contábil.',
    destaque: true,
    tags: ['Protheus / TOTVS', 'Lucro Presumido', 'Lucro Real', 'Office 365'],
    horario: HORARIO_PADRAO,
    regime: REGIME_PADRAO,
    formacao: '',
    nivel: 'Trainee',
    atividades: [],
    desejavel: [],
    conhecimentos: [],
  },
  {
    id: 'auxiliar-fiscal-trainee',
    titulo: 'Auxiliar Fiscal Trainee',
    meta: 'Fiscal · Trainee · Superior em andamento',
    salario: 'R$ 2.500,00',
    resumo:
      'Apoio às rotinas fiscais: escrituração de notas, classificação tributária, retenções e suporte ao time nos fechamentos.',
    destaque: false,
    tags: [],
    horario: HORARIO_PADRAO,
    regime: REGIME_PADRAO,
    formacao: 'Ciências Contábeis, Adm. ou Economia',
    nivel: 'Trainee',
    atividades: [
      'Escriturar notas fiscais de serviços prestados, tomados, entradas e saídas',
      'Classificar corretamente CST de ICMS, IPI, PIS e COFINS',
      'Realizar retenções municipais (ISS) e federais (IRRF e CSRF)',
      'Apoiar nas apurações de PIS e COFINS nos regimes cumulativo e não cumulativo',
      'Apoiar na validação de SPED Fiscal e EFD Contribuições',
      'Apoiar o time fiscal nas rotinas de fechamento e atendimento aos clientes',
    ],
    desejavel: [
      'Ensino superior em andamento em Ciências Contábeis, Administração ou Economia',
      'Conhecimentos em classificação tributária e obrigações acessórias',
      'Boa comunicação e vontade de aprender — o resto, a gente ensina!',
    ],
    conhecimentos: [],
  },
  {
    id: 'auxiliar-departamento-pessoal-trainee',
    titulo: 'Auxiliar Depto. Pessoal Trainee',
    meta: 'DP · Trainee · 3º semestre',
    salario: 'R$ 2.500,00',
    resumo:
      'Apoio à folha de pagamento, cálculos de férias, rescisões e encargos, com cuidado no tratamento de dados dos colaboradores.',
    destaque: false,
    tags: [],
    horario: HORARIO_PADRAO,
    regime: REGIME_PADRAO,
    formacao: 'RH, Gestão, Adm. ou Contábeis (3º sem.)',
    nivel: 'Trainee',
    atividades: [
      'Preparar a folha de pagamento com precisão e pontualidade',
      'Calcular adiantamentos, férias, rescisões e encargos obrigatórios',
      'Manter cadastros atualizados garantindo integridade dos dados',
      'Apoiar nas atividades de registros e controles de pessoal',
      'Conferir documentos e lançamentos pertinentes ao DP',
      'Colaborar na organização de processos internos e atendimento aos colaboradores',
    ],
    desejavel: [
      'Conhecimento em legislação trabalhista e previdenciária',
      'Ética no tratamento de informações confidenciais',
      'Proatividade, atenção aos detalhes e vontade de aprender',
      'Boa comunicação e espírito de equipe',
    ],
    conhecimentos: [],
  },
  {
    id: 'auxiliar-legalizacao-trainee',
    titulo: 'Aux. Legalização Trainee',
    meta: 'Legalização · Trainee · Ensino médio completo',
    salario: 'R$ 2.500,00',
    resumo:
      'Rotinas de legalização societária: registros, certidões, retificações e diligências junto a órgãos públicos.',
    destaque: false,
    tags: [],
    horario: HORARIO_PADRAO,
    regime: REGIME_PADRAO,
    formacao: 'Ensino médio completo',
    nivel: 'Trainee',
    atividades: [
      'Preenchimento de formulários e requerimentos para registro de sociedades',
      'Preenchimento de requerimentos de expedição de certidões negativas',
      'Retificação de guias de recolhimento de tributos',
      'Atualizar fichas de processos e realizar pesquisas doutrinárias e legislativas',
      'Apoiar o departamento em diligências a órgãos públicos',
    ],
    desejavel: [
      'Cursando graduação em Ciências Contábeis, Direito ou Administração (diferencial)',
      'Organização e atenção a detalhes',
    ],
    conhecimentos: [],
  },
];

/* Título e texto de cada benefício em t.trabalheConosco.beneficiosTitulos /
   beneficiosTextos, na mesma ordem. Aqui fica só a quantidade. */
export const totalBeneficios = 8;

/* Rótulos em t.trabalheConosco.numerosRotulos, na mesma ordem. */
export const numeros = [
  { valor: String(vagas.length) },
  { valor: '100%' },
  { valor: String(totalBeneficios) },
  { valor: '' }, // "Individual" vem do dicionário: é texto, não número
];

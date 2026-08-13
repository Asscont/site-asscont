import { imgPublicacao1, imgPublicacao2, imgPublicacao3 } from '../figmaAssets';

export type Publicacao = {
  slug: string;
  titulo: string;
  resumo: string;
  texto: string;
  imagem: string;
  categoria: string;
};

export const publicacoes: Publicacao[] = [
  {
    slug: '2026-previsibilidade',
    titulo: '2026 exigirá mais do que crescimento. Exigirá previsibilidade.',
    resumo:
      'O ambiente empresarial projetado para o próximo ciclo aponta para um cenário de cautela estratégica.',
    texto:
      'O ambiente empresarial projetado para o próximo ciclo aponta para um cenário de cautela estratégica. A consolidação da reforma tributária, o comportamento das contas públicas e o contexto político reforçam a importância de decisões estruturadas e fundamentadas em dados confiáveis.',
    imagem: imgPublicacao1,
    categoria: 'Gestão empresarial',
  },
  {
    slug: 'stf-distribuicao-lucros-dividendos',
    titulo:
      'Decisão do Supremo reforça a segurança jurídica e orienta o planejamento societário das empresas.',
    resumo:
      'A decisão prorroga o prazo ligado à aprovação da distribuição de lucros e dividendos relativos ao exercício de 2025.',
    texto:
      'O Supremo Tribunal Federal (STF) decidiu prorrogar até 31 de janeiro de 2026 o prazo para a aprovação da distribuição de lucros e dividendos relativos ao exercício de 2025, condição prevista na Lei nº 15.270/2025 para a manutenção da isenção do Imposto de Renda.',
    imagem: imgPublicacao2,
    categoria: 'Tributário e societário',
  },
  {
    slug: 'departamento-pessoal-estrategico',
    titulo:
      'Departamento Pessoal Estratégico: o pilar silencioso que sustenta a segurança, o crescimento e a confiança nas empresas',
    resumo:
      'O Departamento Pessoal vai muito além das rotinas operacionais de admissão, demissão, folha e controle de ponto.',
    texto:
      'O Departamento Pessoal (DP) é uma área fundamental para o bom funcionamento das empresas. Embora muitas vezes seja associado apenas às rotinas operacionais — como admissões, demissões, folha de pagamento e controle de ponto — sua atuação vai muito além dessas atividades.',
    imagem: imgPublicacao3,
    categoria: 'Departamento pessoal',
  },
];

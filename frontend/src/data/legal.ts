/* ==========================================================================
   RASCUNHO — NÃO PUBLICAR SEM REVISÃO JURÍDICA.

   Estes dois documentos são um ponto de partida, escritos a partir do que o
   site realmente faz hoje (newsletter, candidaturas por e-mail, mapa do
   Google, hospedagem no GitHub Pages). Não substituem a análise de um
   advogado, e a Política de Privacidade em especial precisa de conferência
   à luz da LGPD antes de ir ao ar.

   Todas as lacunas foram preenchidas. Dois pontos merecem confirmação:

   - FORO: adotado Barueri, sede da ASSCONT Assessoria Contábil e endereço
     principal do site. Se o jurídico preferir São Paulo, é uma palavra na
     secao 10 dos Termos.
   - DATA DE REVISÃO: está a data em que os textos foram concluídos. Deve ser
     atualizada para a data em que o advogado aprovar o documento.

   Observação de nomenclatura: o rodapé chama de "Termos de Serviço", mas o
   site é institucional e não vende nem contrata nada online. O documento
   adequado é "Termos de Uso" do site. O rótulo do rodapé foi ajustado.

   Os textos estão em português apenas. Em inglês e espanhol a página exibe
   um aviso de que a versão em português é a que vale — prática comum em
   documento jurídico de empresa brasileira, e que evita retrabalho: o texto
   ainda vai mudar na revisão do advogado.
   ========================================================================== */

export type SecaoLegal = {
  titulo: string;
  paragrafos: string[];
  itens?: string[];
};

export const atualizadoEm = '25 de agosto de 2026';

export const termosDeUso: SecaoLegal[] = [
  {
    titulo: '1. Aceitação',
    paragrafos: [
      'Ao acessar e navegar por este site, você concorda com estes Termos de Uso. Se não concordar com qualquer disposição, pedimos que não utilize o site.',
    ],
  },
  {
    titulo: '2. Quem somos',
    paragrafos: [
      'Este site é mantido pelo Grupo ASSCONT, formado pelas seguintes sociedades:',
    ],
    itens: [
      'ASSCONT ASSESSORIA CONTABIL E AUDITORIA S/S, CNPJ nº 49.483.225/0001-35, com sede na Av. Marcos Penteado de Ulhoa Rodrigues, 1.119, 17º andar, Conjunto 1.711, Tamboré, Barueri/SP;',
      'ASSCONT OUTSOURCING CONTABIL E SERVICOS LTDA - EPP, CNPJ nº 07.513.000/0001-34, com sede na Rua Boa Vista, 254, 11º andar, Conjunto 1.101, Centro, São Paulo/SP.',
    ],
  },
  {
    titulo: '3. Finalidade do site e ausência de aconselhamento profissional',
    paragrafos: [
      'O conteúdo publicado aqui, incluindo artigos, publicações e descrições de serviços, tem caráter exclusivamente informativo e institucional.',
      'Nenhum material deste site constitui parecer contábil, fiscal, trabalhista, societário ou jurídico, nem cria relação de prestação de serviços entre você e a ASSCONT. Decisões empresariais não devem ser tomadas com base apenas neste conteúdo. A contratação de serviços ocorre por instrumento próprio, firmado separadamente.',
      'A legislação brasileira muda com frequência. Um artigo correto na data em que foi publicado pode estar desatualizado quando você o lê.',
    ],
  },
  {
    titulo: '4. Uso permitido',
    paragrafos: ['Você pode navegar, ler e compartilhar o conteúdo deste site. Não é permitido:'],
    itens: [
      'reproduzir ou republicar o conteúdo como se fosse próprio, ou sem indicar a fonte;',
      'utilizar o conteúdo para fins comerciais sem autorização prévia por escrito;',
      'empregar meios automatizados de coleta em massa que comprometam o funcionamento do site;',
      'tentar obter acesso não autorizado a qualquer parte do site ou a sistemas associados.',
    ],
  },
  {
    titulo: '5. Propriedade intelectual',
    paragrafos: [
      'A marca ASSCONT, o logotipo, os textos, as imagens e a identidade visual deste site pertencem à ASSCONT ou são utilizados mediante autorização.',
      'Marcas, logotipos e depoimentos de clientes e parceiros pertencem aos seus respectivos titulares e são exibidos com autorização.',
    ],
  },
  {
    titulo: '6. Links para sites de terceiros',
    paragrafos: [
      'Este site contém links para páginas externas, como redes sociais, instituições parceiras e organizações apoiadas. A ASSCONT não controla o conteúdo desses sites e não se responsabiliza por eles. O acesso é por sua conta.',
    ],
  },
  {
    titulo: '7. Vagas e candidaturas',
    paragrafos: [
      'As vagas divulgadas na área de carreiras refletem oportunidades disponíveis na data da publicação e podem ser alteradas ou encerradas a qualquer momento.',
      'O envio de currículo não gera obrigação de contratação, de resposta individual ou de participação em processo seletivo. O tratamento dos dados enviados está descrito na Política de Privacidade.',
    ],
  },
  {
    titulo: '8. Disponibilidade e alterações',
    paragrafos: [
      'A ASSCONT busca manter o site disponível e atualizado, mas não garante funcionamento ininterrupto ou livre de falhas. O site pode ser alterado, suspenso ou descontinuado, no todo ou em parte, sem aviso prévio.',
      'Estes Termos podem ser revisados a qualquer momento. A versão vigente é sempre a publicada nesta página, com a data de atualização indicada acima.',
    ],
  },
  {
    titulo: '9. Limitação de responsabilidade',
    paragrafos: [
      'Na medida permitida pela legislação aplicável, a ASSCONT não responde por perdas ou danos decorrentes do uso ou da impossibilidade de uso deste site, nem de decisões tomadas com base no conteúdo informativo aqui publicado.',
    ],
  },
  {
    titulo: '10. Legislação aplicável e foro',
    paragrafos: [
      'Estes Termos são regidos pela legislação brasileira. Fica eleito o foro da Comarca de Barueri, Estado de São Paulo, com renúncia a qualquer outro, por mais privilegiado que seja.',
    ],
  },
  {
    titulo: '11. Contato',
    paragrafos: [
      'Dúvidas sobre estes Termos podem ser enviadas para contato@asscont.com.br.',
    ],
  },
];

export const politicaPrivacidade: SecaoLegal[] = [
  {
    titulo: '1. Quem trata seus dados',
    paragrafos: [
      'São controladoras dos dados pessoais coletados por meio deste site, nos termos da Lei nº 13.709/2018 (LGPD), as seguintes sociedades do Grupo ASSCONT:',
    ],
    itens: [
      'ASSCONT ASSESSORIA CONTABIL E AUDITORIA S/S, CNPJ nº 49.483.225/0001-35, Barueri/SP;',
      'ASSCONT OUTSOURCING CONTABIL E SERVICOS LTDA - EPP, CNPJ nº 07.513.000/0001-34, São Paulo/SP.',
    ],
  },
  {
    titulo: '2. Encarregada pelo tratamento de dados (DPO)',
    paragrafos: [
      'Priscila dos Santos Melati — asscont@asscont.com.br',
      'É o canal para exercer os direitos previstos nesta Política e para qualquer dúvida sobre o tratamento dos seus dados pessoais.',
    ],
  },
  {
    titulo: '3. Quais dados coletamos',
    paragrafos: ['Coletamos apenas o necessário para as finalidades descritas abaixo:'],
    itens: [
      'Newsletter: o endereço de e-mail que você informa no rodapé do site.',
      'Candidaturas: os dados que você envia por e-mail ao se candidatar a uma vaga, incluindo currículo e as informações que ele contiver.',
      'Contato: os dados que você informa ao nos escrever ou ligar.',
      'Navegação: dados técnicos gerados automaticamente pelo servidor de hospedagem, como endereço IP, data e hora de acesso e tipo de navegador.',
    ],
  },
  {
    titulo: '4. Para que usamos e com qual base legal',
    paragrafos: [
      'Newsletter: envio de conteúdos e comunicados institucionais, com base no seu consentimento. Você pode cancelar a qualquer momento pelo link de descadastro presente nas mensagens.',
      'Candidaturas: condução de processos seletivos e formação de banco de talentos, com base em procedimentos preliminares relacionados a contrato, a seu pedido.',
      'Contato: resposta às suas solicitações, com base no legítimo interesse de atender quem nos procura.',
      'Navegação: segurança, funcionamento e diagnóstico do site, com base no legítimo interesse.',
    ],
  },
  {
    titulo: '5. Com quem compartilhamos',
    paragrafos: [
      'Não vendemos dados pessoais. Compartilhamos apenas com prestadores que atuam em nosso nome e na medida necessária:',
    ],
    itens: [
      'Zenvia — plataforma utilizada para a gestão e o envio da newsletter;',
      'Microsoft (Azure) — hospedagem do site; e Cloudflare — distribuição e proteção do endereço;',
      'Google — o mapa das unidades é exibido por meio do Google Maps, que pode coletar dados de navegação segundo suas próprias políticas;',
      'autoridades públicas, quando houver obrigação legal ou requisição judicial.',
    ],
  },
  {
    titulo: '6. Cookies e serviços de terceiros',
    paragrafos: [
      'Este site não utiliza cookies próprios de publicidade nem ferramentas de rastreamento de audiência.',
      'A escolha de idioma fica salva no seu navegador, no armazenamento local, apenas para que o site abra no idioma que você preferiu. Essa informação não é enviada a nenhum servidor.',
      'O mapa incorporado do Google Maps e os links para redes sociais podem instalar cookies próprios desses serviços, sujeitos às políticas de privacidade deles.',
    ],
  },
  {
    titulo: '7. Por quanto tempo guardamos',
    paragrafos: [
      'E-mails da newsletter: enquanto durar a inscrição, e por 2 anos após o cancelamento, para comprovar o atendimento ao pedido de descadastro.',
      'Currículos: por 6 meses a contar do recebimento, salvo se você pedir a exclusão antes disso.',
      'Registros de acesso: pelo prazo previsto na legislação aplicável.',
    ],
  },
  {
    titulo: '8. Transferência internacional',
    paragrafos: [
      'Alguns dos serviços utilizados podem armazenar dados fora do Brasil. Nesses casos, adotamos as garantias exigidas pela LGPD para a transferência internacional.',
    ],
  },
  {
    titulo: '9. Seus direitos',
    paragrafos: [
      'A LGPD assegura a você, a qualquer momento e gratuitamente, o direito de:',
    ],
    itens: [
      'confirmar se tratamos dados seus e acessá-los;',
      'corrigir dados incompletos, inexatos ou desatualizados;',
      'solicitar anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade com a lei;',
      'solicitar a portabilidade dos dados;',
      'revogar o consentimento e pedir a eliminação dos dados tratados com base nele;',
      'opor-se a tratamento realizado com base em legítimo interesse;',
      'obter informação sobre com quem compartilhamos seus dados.',
    ],
  },
  {
    titulo: '10. Como exercer seus direitos',
    paragrafos: [
      'Escreva para asscont@asscont.com.br. Podemos pedir informações adicionais para confirmar sua identidade antes de atender ao pedido, como medida de segurança. Responderemos no prazo previsto na legislação.',
    ],
  },
  {
    titulo: '11. Segurança',
    paragrafos: [
      'Adotamos medidas técnicas e administrativas para proteger os dados pessoais contra acesso não autorizado, perda ou alteração indevida. Nenhum sistema é totalmente imune a incidentes; em caso de incidente relevante, comunicaremos os titulares e a Autoridade Nacional de Proteção de Dados na forma da lei.',
    ],
  },
  {
    titulo: '12. Alterações desta Política',
    paragrafos: [
      'Esta Política pode ser atualizada para refletir mudanças na legislação, nas ferramentas utilizadas ou nas nossas práticas. A versão vigente é sempre a publicada nesta página, com a data de atualização indicada acima.',
    ],
  },
];

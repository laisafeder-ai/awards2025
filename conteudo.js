const conteudoMeses = [
  {
    mes: "Julho",
    textoCompleto: `🔵 Retornei de licença-maternidade no dia 25 de junho, fazendo de julho um mês de readaptação — tanto profissional quanto pessoal. Foi um período dedicado a reaprender os novos processos do time, compreender as novas KRs, as prioridades estratégicas da empresa para o ano e reorganizar minha rotina de trabalho conciliando a maternidade, com um bebê de seis meses.

O retorno ao trabalho após a licença é desafiador: depois de meses totalmente dedicada aos cuidados do bebê e da casa, é preciso retomar o papel profissional, reconstruir ritmo e confiança. Costumo comparar esse momento a voltar a andar de bicicleta — nunca se esquece, mas é necessário ganhar novamente equilíbrio e segurança.

Nesse mês, aprofundei-me no plano IPP e nas novas formas de registro de atividades, além de ter sido direcionada ao squad de novas integrações, provenientes de diferentes canais (Yungas, Implementação, Intercom, entre outros).

🔵 Logo no início de julho, iniciei uma colaboração direta com o time de Desenvolvimento, que estava construindo a API de integração com o sistema Domínio para envio de notas fiscais registradas no Omie. Em conjunto com o Wesley (desenvolvedor do time do Painel do Contador), realizamos parametrizações em bases de teste tanto no Omie quanto no Domínio, com o objetivo de validar operacionalmente como as notas seriam transportadas entre os sistemas.

Ao estudar a documentação e os materiais de apoio do Domínio, identifiquei todas as configurações necessárias, incluindo a geração da chave de integração, e elaborei uma documentação técnica detalhada, que foi compartilhada com o Desenvolvimento.

Após a liberação da funcionalidade em ambiente de testes, realizei as validações junto ao Wesley, com sucesso. Esse trabalho colaborativo foi essencial para viabilizar uma funcionalidade estratégica no Painel do Contador, que ao longo do semestre passou a ser amplamente divulgada e bem avaliada nos treinamentos realizados com contadores usuários do Domínio.

Além disso:
Criei um material completo de configuração entre os dois sistemas, compartilhado com o time:
👉 https://drive.google.com/file/d/1iIrCYsAH88Rx8Gx1qweJ8Y2G8IDby8tr/view

Repassei o conteúdo para a Júlia Lima (Analista de QA & Documentação), que estruturou o artigo oficial na Central de Ajuda:
👉 https://ajuda.omie.com.br/pt-BR/articles/12051153-configurando-a-integracao-com-a-dominio-via-api


🔵 Ainda em julho, passei a integrar o Squad do Experimento de IA, com reuniões quinzenais voltadas à troca de ideias e construção da entrega do semestre.

🔵 Como parte do meu plano de desenvolvimento — já desenhado antes da licença — iniciei um investimento pessoal no curso de Product Manager da PM3, com foco em uma futura migração para a área de Produto.

<b>Resultados do mês:</b>
53 treinamentos realizados  
36 integrações concluídas  
Meta: 35 integrações → Meta superada 💯🚀🎯`,
    badge: "🏅 Recomeço"
  },

  {
    mes: "Agosto",
    textoCompleto: `Agosto foi um mês de manutenção da consistência nas entregas, mantendo participação ativa no Squad do Experimento de IA.

🔵 Incluí no meu PDI o aprofundamento no produto OneFlow, assistindo às demonstrações ao vivo dos módulos Contábil, Fiscal e Folha, ampliando minha visão sobre o ecossistema de produtos da empresa.

🔵 Tive também uma colaboração ativa com o time de Enablement, participando de duas agendas voltadas à melhoria do ramp-up de analistas de Integração Contábil.

Contribuí com:
* Diagnóstico de gargalos operacionais (onboarding, acessos, materiais)  
* Visão prática da operação  
* Proposta de formalização e centralização dos processos de ramp-up  
* Cocriação de uma solução com uso de IA (NotebookLM) integrada à Universidade Corporativa, com foco em escala e aceleração do aprendizado

🔵 Como ação complementar, gravei um vídeo explicativo sobre os benefícios da integração contábil, compartilhado nos grupos de WhatsApp das unidades franqueadas.

🔵 Outro marco importante foi o início da minha mentoria com o Product Manager do Omie Cash, Rapha Matos, com o primeiro encontro realizado em 27 de agosto, focado em troca de experiências, boas práticas e entendimento do dia a dia da área de Produto.

<b>Resultados do mês:</b> 
67 treinamentos realizados  
39 integrações concluídas  
Meta: 35 integrações → Meta superada 💯🚀🎯
`,
    badge: "🏅 Consistência"
  },

  {
    mes: "Setembro",
    textoCompleto: `Em setembro, além da agenda intensa, passei a atender também contabilidades do IPP, ampliando meu escopo de atuação.

🔵 O grande destaque do mês foi o atendimento da DI RIENZO Contabilidade, que se tornou um case de sucesso relevante. O contador Felipe tinha como objetivo integrar 40 empresas da sua base, e estruturamos um projeto de acompanhamento contínuo ao longo do mês.

Em setembro, conseguimos concluir a integração de metade da carteira, com resultados expressivos.

🔵 Também finalizei minha entrega no Experimento de IA, realizando o agrupamento e organização de todos os materiais técnicos desenvolvidos ao longo dos anos (manuais de sistemas contábeis, layouts do Desenvolvimento, documentações internas).

Esses materiais foram estruturados em um NotebookLM, testados e validados, criando uma base única para consulta dos analistas da área.
👉 https://notebooklm.google.com/notebook/0ff9de5e-7932-411f-a661-ace8a077aa92

<b>Resultados do mês:</b>
63 treinamentos realizados  
45 integrações concluídas  
Meta: 35 integrações → Meta superada 💯🚀🎯
`,
    badge: "🏅 Escala"
  },

  {
    mes: "Outubro",
    textoCompleto: `Em outubro, aprofundei meus conhecimentos em Google Apps Script, desenvolvendo automações que trouxeram ganhos claros de eficiência operacional para o time.

🔵 Criação automática de links do Google Meet:
Antes, os links não eram gerados automaticamente ao criar compromissos na agenda, exigindo ajustes manuais. Desenvolvi uma automação que cria o link automaticamente 5 minutos após a criação do compromisso, eliminando retrabalho. A solução foi replicada para todos os analistas do time.

🔵 Envio automático de e-mails de lembrete e solicitação de plano de contas:
Desenvolvi um script que envia diariamente e-mails aos participantes das reuniões do dia seguinte, lembrando do treinamento e solicitando o envio do plano de contas em Excel (excluindo participantes com domínio @omie.com.br ou reuniões que não fossem treinamentos).

🔵 Paralelamente, dei continuidade ao atendimento da DI RIENZO Contabilidade, concluindo a integração da segunda metade da carteira.

<b>Resultados do mês:</b>
66 reuniões realizadas  
49 integrações concluídas  
Meta: 44 integrações → Meta superada 💯🚀🎯
`,
    badge: "🏅 Automação"
  },

  {
    mes: "Novembro",
    textoCompleto: `Em novembro, a partir de um estudo que havia realizado em 2024 sobre o tempo gasto em lançamentos manuais versus integração, fui procurada pelo Léo para avaliar a viabilidade de transformar esse material em uma calculadora prática para uso no onboarding e pelas franquias.

🔵 Estruturei e desenvolvi a Calculadora de ROI da Integração, em HTML e JavaScript, permitindo que o usuário informe:

* Salário do analista contábil

* Horas trabalhadas

* Quantidade de empresas por regime e segmento

A ferramenta calcula:

* Tempo gasto no fechamento manual

* Tempo com integração

* Economia de horas

* Economia financeira baseada no custo hora do analista

A calculadora foi amplamente divulgada e utilizada pelos analistas em seus cases de sucesso do semestre.

Abaixo segue o link para fazer donwload da calculadora:
👉 https://drive.usercontent.google.com/u/0/uc?id=1Wst2ird_PZq_soXXCgtny0KugGr-Zwdy&export=download

<img src="imgs/3.png" alt="Calculadora ROI de Integração" class="img-conteudo">

🔵 Também resolvi um problema recorrente relacionado à integração de empresas filiais no sistema Domínio. Após estudar a documentação e validar configurações em ambiente de testes, consegui realizar a integração sem necessidade de manipulação manual de arquivos, tornando o processo mais limpo e correto. Documentei todo o procedimento para acesso do time:

👉 https://drive.google.com/file/d/1J4TsiaqLTYm3pvUPg7VdzmHqqxUbjZp-/view

🔵 Além disso, tive meu segundo encontro de mentoria com o PM Rapha Matos, em 18 de novembro.

<b>Resultados do mês:</b>
57 treinamentos realizados  
36 integrações concluídas  
Meta: 35 integrações → Meta superada 💯🚀🎯
`,
    badge: "🏅 Produto na prática"
  },

  {
    mes: "Dezembro",
    textoCompleto: `🔵 Em 11 de dezembro, participei do evento DestaqueEC, conduzindo a apresentação da Calculadora de ROI da Integração para as franquias, demonstrando na prática como a ferramenta pode ser utilizada pelo time comercial para evidenciar ganhos de eficiência aos contadores.

👉 https://docs.google.com/presentation/d/1-eA50FWb_N3t5OD8rEBz4Cdqd1ZoJi3hyxYM9hP-2JM

Acesso à apresentação na íntegra (Senha: y+M5r&*W):
👉  https://omie-br.zoom.us/rec/share/6UrNvZ5t2ztCzD7Edlfmtv3UQoiCeYu5NhhcnUgTaf4ywrZ26gBiscX6RMH-SGns.hO6E_c5ZjccS5Y_Q


<img src="imgs/2.png" alt="Apresentação DestaquEC" class="img-conteudo">


🔵 Em conjunto com a analista Lu, estruturamos uma automação padronizada de envio de lembretes e solicitação de plano de contas via Google Apps Script,aplicando a solução nas agendas de todos os analistas e realizando reuniões rápidas para orientação e configuração.

🔵Concluí também as trilhas de OneFlow e Inteligência Artificial na Universidade Corporativa, conforme previsto no meu PDI.

🔵 Ainda em dezembro, iniciei o desenvolvimento de uma solução mais robusta para conversão do plano de contas da Domínio diretamente no Painel do Contador, utilizando a API da Omie. Em parceria com o time de Desenvolvimento, estudei a documentação, desenvolvi o backend em Python e iniciei o frontend em HTML. O projeto foi concluído e liberado em janeiro, ficando como destaque para o próximo semestre.

<b>Resultados do mês:</b>
44 reuniões realizadas  
28 integrações concluídas  
Meta: 35 integrações
`,
    badge: "🏅 Visão de futuro"
  }
];

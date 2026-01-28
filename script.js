let indiceAtual = 0;

const boneco = document.getElementById("boneco");
const pontos = document.querySelectorAll(".ponto");

const badgeEl = document.getElementById("badge");
const mesEl = document.getElementById("mes");
const tituloEl = document.getElementById("titulo");
const textoEl = document.getElementById("texto");

const btnAvancar = document.getElementById("btnAvancar");

// BLOCO FINAL
const resumoFinal = {
  mes: "Resumo do Semestre",
  badge: "🏆 Valores Vivenciados ",
  textoCompleto: `<b>Destaques e Números:</b>

🔵 Case de sucesso – DI RIENZO Contabilidade (IPP Alto):

Aplicativos Integrados: 40
Tempo gasto com Integração: 19.50h
Horas Economizadas: 59.18h
Economia Financeira: R$833,90

Feedbak do parceiro Felipe: <i>“Quero agradecer por todo empenho e dedicação do seu atendimento com a Di Rienzo, estava comentando com o meu Diretor e você foi muito dedicada em nos ajudar com os parâmetros e cadastro de nossos clientes do Omie, e na mudança de sistema. Muito obrigado e parabéns pelo seu trabalho.”</i>


🔵 <b>Atendimentos Intercom:</b>
Ao longo do semestre trabalhei ativamente no Intercom, auxiliando com as demandas de chamados, convertendo oportunidades identificadas em reuniões e integrações. 

240 conversas atendidas , 2.574 respostas enviadas.
Pontuação CSAT: 92.5%

<img src="imgs/4.png" alt="Atendimentos Intercom" class="img-conteudo">
<img src="imgs/5.png" alt="CSAT Intercom" class="img-conteudo">

🔵 <b>Números relevantes:</b>
Meus treinamentos representaram 15% de tudo que o time executou no período.
Enquanto a média mensal foi de 48 treinamentos por analista, minha média foi 57, e foram 25 repescagens.
Na pontuação de pesquisa pós treinamento: 9,8 de satisfação
No total foram 234 integrações no semestre, representando 13,3% do volume do time.

👩🏻<b>Meu relato pessoal:</b> Ao resumir este semestre, considero que foi um período desafiador. Além das responsabilidades profissionais, vivencio uma rotina familiar intensa, com três filhos em diferentes fases, incluindo um bebê, e a gestão de uma casa. O retorno ao trabalho após a maternidade exige adaptação e organização, especialmente quando envolve a confiança em terceiros para os cuidados com um filho pequeno. Ainda assim, desde o início, manifestei de forma clara meu desejo de retomar minhas atividades profissionais.

Na Omie, estou em um ambiente no qual me sinto integrada, com espaço para desenvolvimento, autonomia e crescimento. Ao estruturar este case e revisitar minha trajetória ao longo do semestre, reconheço a evolução profissional conquistada e a capacidade de conciliar desafios pessoais e profissionais de forma responsável.

Os obstáculos enfrentados ao longo desse período exigiram resiliência, disciplina e constância, reforçando minha capacidade de adaptação e superação. Esse semestre evidenciou minha maturidade profissional e meu comprometimento com os resultados, mesmo em um contexto pessoal mais sensível.

Destaco também o apoio do time e do meu líder, Leonardo, que teve uma atuação consistente, oferecendo direcionamento, incentivo e suporte, respeitando o momento vivido sem perder o foco no desenvolvimento e na entrega profissional.

<i><b>"Paixão para fazer, execução para entregar, confiança para construir, aprendizado para evoluir, respeito à jornada e empreendedorismo para gerar impacto."</i></b>

<img src="imgs/giphy.gif" alt="GIF Inspirador" style="display:block; margin:20px auto; max-width:300px; height:auto;">
<footer style="text-align:center; font-size:12px; color:#888;">
  &copy; 2026 Laisa Féder – Página 100% autoral construída com HTML, CSS e JavaScript.
</footer>
`
};

const fases = [...conteudoMeses, resumoFinal];

function transformarLinksEmAnchor(texto) {
  const regex = /(https?:\/\/[^\s<"]+)/g;
  return texto.replace(
    regex,
    '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
  );
}

function moverBoneco() {
  const ponto = pontos[indiceAtual];
  const container = ponto.parentElement.getBoundingClientRect();
  const alvo = ponto.getBoundingClientRect();

  const left =
    alvo.left -
    container.left +
    alvo.width / 2 -
    boneco.offsetWidth / 2;

  boneco.style.left = `${left}px`;
}

function renderizar() {
  pontos.forEach((p, i) => {
    p.classList.toggle("ativo", i === indiceAtual);
  });

  const fase = fases[indiceAtual];

  badgeEl.textContent = fase.badge || "";
  mesEl.textContent = fase.mes;
  tituloEl.textContent = fase.titulo;
  textoEl.innerHTML = transformarLinksEmAnchor(
    fase.textoCompleto.replace(/\n/g, "<br>")
  );

  // Mostrar ou esconder botão Avançar
  if (indiceAtual === fases.length - 1) {
    btnAvancar.style.display = "none"; // some na última fase
  } else {
    btnAvancar.style.display = "block"; // aparece nas outras fases
  }

  moverBoneco();
}

// clique nos meses
pontos.forEach((ponto) => {
  ponto.addEventListener("click", () => {
    indiceAtual = Number(ponto.dataset.index);
    renderizar(true);
  });
});

// botões
btnAvancar.addEventListener("click", () => {
  if (indiceAtual < fases.length - 1) {
    indiceAtual++;
    renderizar();

    // força voltar pro topo da página
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
});


// inicial
renderizar(false);

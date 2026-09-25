const content = {
  dados: {
    title: "Coleta de dados",
    text:
      "A primeira etapa é reunir informações de satélites, sensores, estações climáticas, redes elétricas e sistemas de monitoramento urbano, criando uma base sólida para a tomada de decisão.",
    list: [
      "Imagens de satélite para acompanhar florestas e campos.",
      "Sensores para medir temperatura, qualidade do ar e consumo de água.",
      "Dados de energia e logística para detectar desperdícios.",
    ],
  },
  analise: {
    title: "Análise inteligente",
    text:
      "Com algoritmos de machine learning e visão computacional, a IA identifica padrões, compara tendências e prevê problemas antes que eles se agravem.",
    list: [
      "Detecção de áreas com maior risco de desmatamento.",
      "Previsão de consumo energético e de água em tempo real.",
      "Análise de dados ambientais para priorizar ações de proteção.",
    ],
  },
  acao: {
    title: "Ações e decisões",
    text:
      "A partir da análise, governos, empresas e comunidades conseguem agir mais rápido, priorizando medidas com maior impacto ambiental e maior eficiência operacional.",
    list: [
      "Melhor gestão de recursos naturais e energia.",
      "Planejamento de políticas públicas mais assertivas.",
      "Uso de tecnologias sustentáveis e monitoramento contínuo.",
    ],
  },
  resultado: {
    title: "Resultado positivo",
    text:
      "O resultado é uma redução do desperdício, proteção de ecossistemas, uso mais inteligente dos recursos naturais e uma resposta mais eficiente às mudanças climáticas.",
    list: [
      "Menos emissões e menos resíduos.",
      "Mais produtividade com menor impacto ambiental.",
      "Ambientes mais resilientes e equilibrados.",
    ],
  },
};

const nodes = document.querySelectorAll(".node");
const panelTitle = document.getElementById("panel-title");
const panelText = document.getElementById("panel-text");
const panelList = document.getElementById("panel-list");

function renderPanel(key) {
  const item = content[key];
  if (!item) return;

  panelTitle.textContent = item.title;
  panelText.textContent = item.text;
  panelList.innerHTML = "";

  item.list.forEach((entry) => {
    const li = document.createElement("li");
    li.textContent = entry;
    panelList.appendChild(li);
  });
}

nodes.forEach((node) => {
  node.addEventListener("click", () => {
    nodes.forEach((el) => el.classList.remove("active"));
    node.classList.add("active");
    renderPanel(node.dataset.key);
  });
});

renderPanel("dados");
        
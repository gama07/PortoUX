let catData = {
  "categories": [
    {
      "category": "Clareza Visual",
      "colour": "#4A90E2",
      "description": "Minimize ruído visual, use cores com propósito e garanta que cada elemento contribua para a compreensão dos dados.",
      /* MUDANÇA: 'example' agora é um objeto com texto e imagem */
      "example": {
        "text": "Paleta semântica: verde para operação normal, amarelo para atenção, vermelho para alerta.",
        "img": "img/clareza-visual.png.png"
      },
      "children": [
        { "name": "Paleta Semântica do Porto", "img": "icons/semantic-colors.svg", "description": "Sistema de cores padronizado que comunica status operacional instantaneamente.", "usePara": "Mapas de navios, escalas de atracação e status de terminais.", "faca": ["Padronizar semântica em todo o sistema", "Redundar com ícone/forma além da cor"], "evite": ["Usar cor como único sinal", "Arco-íris sem lógica"] },
        { "name": "Tipografia Robusta", "img": "icons/typography.svg", "description": "Hierarquia tipográfica clara com fontes legíveis e tamanhos adequados.", "usePara": "KPIs de topo, rótulos de eixos e legendas de gráficos.", "faca": ["Sans-serif (Roboto/Open Sans/Lato)", "Números de KPI em negrito (48-72px)", "Rótulos menores (14-16px)"], "evite": ["Misturar muitas fontes", "Caps Lock em textos longos"] },
        { "name": "Contraste por Ambiente", "img": "icons/contrast.svg", "description": "Ajuste de contraste baseado no ambiente de visualização (escritório vs. sala de controle).", "usePara": "Dashboards em diferentes ambientes de iluminação.", "faca": ["Escuro: #111 com texto #FFF", "Claro: #FFF com texto #111", "Checar contraste AA (4.5:1)"], "evite": ["Texto cinza claro em fundo claro", "Cores próximas sem contraste"] },
        { "name": "Redução de Chartjunk", "img": "icons/minimalism.svg", "description": "Eliminação de elementos decorativos que não agregam informação.", "usePara": "Todos os gráficos e visualizações de dados.", "faca": ["Eixos/unidades claros", "Escalas corretas", "Grid sutil (se necessário)"], "evite": ["Pizza com muitas categorias", "3D desnecessário", "Eixos truncados sem aviso"] },
        { "name": "Consistência de Ícones", "img": "icons/icons.svg", "description": "Utilizar conjuntos de ícones uniformes (ex: Font Awesome) para representar KPIs de forma rápida.", "usePara": "Botões de ação, legendas e identificação de tipo de carga.", "faca": ["Usar ícones vetoriais (SVG)", "Manter o peso e estilo visual dos ícones"], "evite": ["Misturar estilos de ícones", "Usar ícones abstratos sem *tooltip*"] },
        { "name": "Espaçamento (Whitespace)", "img": "icons/whitespace.svg", "description": "Usar espaços vazios para agrupar visualmente e dar 'respiro' à interface, evitando a sensação de sobrecarga.", "usePara": "Separação de KPIs, seções de filtros e blocos de gráficos.", "faca": ["Espaçamento vertical (1.5x) para separar seções", "Manter margens e *paddings* consistentes"], "evite": ["Aglutinar informações", "Usar linhas separadoras em excesso"] }
      ]
    },
    {
      "category": "Hierarquia",
      "colour": "#50C878",
      "description": "Organize do geral para o específico, guiando o olhar por prioridade de decisão.",
      
      "example": {
        "text": "Topo com KPIs críticos → seção por terminal → detalhe por embarcação.",
        "img": "img/hierarquia.png.png"
      },
      "children": [
        { "name": "KPIs no Topo (F/Z)", "img": "icons/kpi-top.svg", "description": "Posicionamento estratégico de indicadores-chave no topo do dashboard, seguindo padrões de leitura.", "usePara": "Métricas críticas que exigem atenção imediata (Ex: TME na Barra, Produtividade).", "faca": ["TME na Barra (destaque)", "Prioridade visual clara", "Números grandes e legíveis"], "evite": ["Esconder KPIs no rodapé", "Tamanhos iguais para tudo"] },
        { "name": "Fluxo Visão→Filtro→Detalhe", "img": "icons/drill-down.svg", "description": "Navegação progressiva de informações gerais para específicas (Shneiderman).", "usePara": "Análise multinível de dados portuários (Geral do porto → Terminal → Embarcação).", "faca": ["Geral do porto → filtro (terminal/período) → detalhe", "Breadcrumbs para navegação", "Transições suaves"], "evite": ["Pular níveis de hierarquia", "Filtros escondidos"] },
        { "name": "Rótulos e Alinhamento", "img": "icons/alignment.svg", "description": "Organização visual que facilita a leitura rápida de valores e categorias.", "usePara": "Tabelas, listas e comparações de dados.", "faca": ["Rótulos à esquerda", "Números à direita", "Alinhamento consistente"], "evite": ["Centralizar tudo", "Desalinhamento aleatório"] },
        { "name": "Agrupamento Visual", "img": "icons/grouping.svg", "description": "Proximidade e separação (Princípio da Proximidade da Gestalt) para indicar relacionamentos.", "usePara": "Organização de painéis e seções relacionadas (Ex: Agrupar KPIs de Granel Sólido).", "faca": ["Agrupar métricas relacionadas", "Espaçamento consistente", "Bordas ou fundos sutis"], "evite": ["Misturar contextos diferentes", "Espaçamento irregular"] },
        { "name": "Estrutura Multi-Aba", "img": "icons/tabs.svg", "description": "Uso de abas para separar contextos complexos sem sobrecarregar a tela principal.", "usePara": "Dashboards com muitas métricas (Ex: Abas para 'Carga Geral', 'Granel Líquido', 'Contêineres').", "faca": ["Separar contextos distintos", "Manter a navegação por abas clara"], "evite": ["Esconder informações críticas em abas", "Usar abas para dados sequenciais"] },
        { "name": "Uso de Múltiplos Painéis", "img": "icons/multi-panel.svg", "description": "Dividir informações complexas em vários painéis menores e focados em tarefas específicas.", "usePara": "Salas de controle ou telas de grande formato.", "faca": ["Cada painel com um objetivo único", "Conexão de dados entre painéis"], "evite": ["Um único painel com 20 gráficos", "Métricas repetidas"] }
      ]
    },
    {
      "category": "Usabilidade",
      "colour": "#9B59B6",
      "description": "Reduza atrito cognitivo com padrões previsíveis e feedback instantâneo.",
      
      "example": {
        "text": "Filtros consistentes, resposta imediata ao hover e confirmação de ações críticas.",
        "img": "img/usabilidade.png.png"
      },
      "children": [
        { "name": "Controles Consistentes", "img": "icons/controls.svg", "description": "Padrões de interação uniformes em todo o sistema (Lei de Jakob).", "usePara": "Filtros, seleções e navegação.", "faca": ["Mesmos controles em todos os painéis", "Posições fixas para filtros", "Ícones padronizados"], "evite": ["Mudar padrões entre telas", "Controles escondidos"] },
        { "name": "Feedback Instantâneo", "img": "icons/feedback.svg", "description": "Resposta visual imediata às ações do usuário (Ex: tela atualiza após filtro).", "usePara": "Interações com gráficos e controles.", "faca": ["Hover mostra detalhes", "Loading indicators em ações longas", "Confirmação de ações"], "evite": ["Ações sem feedback", "Delays longos sem aviso"] },
        { "name": "Estados Visuais Claros", "img": "icons/states.svg", "description": "Diferenciação visual entre estados ativos, inativos e desabilitados.", "usePara": "Botões, filtros e elementos interativos.", "faca": ["Ativo: cor forte", "Hover: transição suave", "Desabilitado: opacidade reduzida"], "evite": ["Estados ambíguos", "Sem indicação visual"] },
        { "name": "Prevenção de Erros", "img": "icons/error-prevention.svg", "description": "Design que antecipa e previne erros do usuário (Lei de Fitts em ações críticas).", "usePara": "Ações críticas e entrada de dados.", "faca": ["Confirmação para ações críticas (Ex: 'Zerar Estoque')", "Validação em tempo real", "Mensagens claras"], "evite": ["Permitir erros facilmente", "Mensagens genéricas"] },
        { "name": "Filtro Simples vs. Avançado", "img": "icons/simple-advanced-filter.svg", "description": "Oferecer opções de filtro básicas na tela principal e avançadas em uma modal ou painel lateral.", "usePara": "Dashboards que precisam de filtros rápidos e detalhados (Ex: data/terminal vs. código ISPS).", "faca": ["Filtros mais usados visíveis", "Opções avançadas em 'esconder'"], "evite": ["15 filtros abertos na tela", "Esconder filtros essenciais"] },
        { "name": "Exploração Intuitiva", "img": "icons/intuitive-exploration.svg", "description": "Recursos como *drill-down* e *tooltips* para permitir a exploração de dados sem sair da tela.", "usePara": "Gráficos de barra onde se clica para ver detalhes do Terminal.", "faca": ["Tooltips claros e rápidos", "Clareza no que é clicável"], "evite": ["Forçar o usuário a abrir nova tela para cada detalhe", "Tooltips que não desaparecem"] }
      ]
    },
    {
      "category": "Acessibilidade e UX",
      "colour": "#E74C3C",
      "description": "Inclua todos: contraste, redundância à cor, toque/teclado e linguagem simples.",
     
      "example": {
        "text": "Cores + ícones, hotspots grandes e foco visível.",
        "img": "img/acessibilidade.png.png"
      },
      "children": [
        { "name": "Redundância à Cor", "img": "icons/redundancy.svg", "description": "Múltiplos canais visuais além da cor para transmitir informação (Ex: Triângulo para 'alerta').", "usePara": "Status, alertas e categorizações.", "faca": ["Cor + ícone/forma", "Padrões visuais distintos", "Texto descritivo"], "evite": ["Depender só de cor", "Ícones sem significado"] },
        { "name": "Tamanhos e Espaçamento", "img": "icons/spacing.svg", "description": "Áreas de toque e clique adequadas (Lei de Fitts) para diferentes dispositivos.", "usePara": "Botões, controles e elementos interativos.", "faca": ["Mínimo 44x44px para toque", "Espaçamento generoso", "Alvos grandes"], "evite": ["Botões muito pequenos", "Elementos muito próximos"] },
        { "name": "Navegação por Teclado", "img": "icons/keyboard.svg", "description": "Suporte completo para navegação sem mouse (fundamental em salas de controle).", "usePara": "Todos os elementos interativos.", "faca": ["Tab order lógico", "Focus visível (anéis de foco)", "Atalhos documentados"], "evite": ["Trap de foco", "Sem indicação de foco"] },
        { "name": "Linguagem Simples", "img": "icons/language.svg", "description": "Comunicação clara e direta, evitando jargões desnecessários (ou explicando-os).", "usePara": "Rótulos, mensagens e instruções.", "faca": ["Termos técnicos explicados", "Frases curtas", "Ação clara"], "evite": ["Jargão sem contexto", "Ambiguidade"] },
        { "name": "Paleta para Daltonismo", "img": "icons/daltonism.svg", "description": "Escolha de cores que mantêm o contraste e a diferenciação para daltônicos (Ex: Usar azul e laranja em vez de verde e vermelho).", "usePara": "Gráficos de comparação com múltiplas séries de dados.", "faca": ["Usar ferramentas de checagem", "Aumentar a luminosidade e escuridão para contraste"], "evite": ["Verde e vermelho juntos", "Paletas muito saturadas"] },
        { "name": "Design Responsivo", "img": "icons/responsive.svg", "description": "Garantir que o painel se adapte e funcione bem em diferentes tamanhos de tela (desktop, tablet, celular).", "usePara": "Acesso a dados em campo ou em diferentes dispositivos de controle.", "faca": ["Priorizar conteúdo móvel primeiro (*mobile first*)", "Uso de *grids* flexíveis (CSS Grid)"], "evite": ["Elementos que quebram em telas pequenas", "Tabelas que não rolam horizontalmente"] }
      ]
    },
    {
      "category": "Contexto Decisório",
      "colour": "#E67E22",
      "description": "Gráfico certo, narrativa coerente e transparência de incerteza aceleram a decisão.",
      
      "example": {
        "text": "Linha com picos anotados + barras comparando terminais, com flags de atraso visíveis.",
        "img": "img/contexto.png.png"
      },
      "children": [
        { "name": "Gráfico de Linhas (Tendência)", "img": "icons/line-chart.svg", "description": "Ideal para mostrar a evolução contínua de um valor ao longo do tempo. Essencial para identificar sazonalidade e picos.", "usePara": "Volume de Carga Mensal, Tempo Médio de Espera (TME) por semana/mês.", "faca": ["Usar anotações em picos/quedas relevantes", "Começar o eixo Y em zero (se a escala for relativa)"], "evite": ["Usar linha para dados categóricos", "Excesso de linhas (máx. 4-5)"] },
        { "name": "Gráfico de Barras (Comparação)", "img": "icons/bar-chart.svg", "description": "O mais eficaz para comparar valores entre diferentes categorias discretas.", "usePara": "Produtividade de Guindastes por Terminal, Peso de Carga por Grupo de Mercadoria.", "faca": ["Usar barras horizontais para rótulos longos", "Começar o eixo em zero"], "evite": ["Gráficos 3D", "Espaçamento maior que a largura da barra"] },
        { "name": "Gráfico de Dispersão (Correlação)", "img": "icons/scatter-plot.svg", "description": "Visualiza a relação ou correlação entre duas variáveis quantitativas (Ex: tempo de permanência vs. contêineres).", "usePara": "Relação entre Tempo de Permanência no Porto e Volume de Carga Descarregada.", "faca": ["Usar cores para adicionar uma terceira variável categórica", "Anotar *outliers* críticos"], "evite": ["Usar para grandes volumes de dados que se sobrepõem", "Assumir causalidade"] },
        { "name": "Gráfico de Funil (Fluxo)", "img": "icons/funnel-chart.svg", "description": "Representa o fluxo de um processo em estágios, mostrando perdas em cada etapa do processo portuário.", "usePara": "Fluxo de Embarcação (Chegada → Atracação → Operação → Saída) e perdas no processo.", "faca": ["Mostrar a taxa de perda entre os estágios", "Usar cores suaves"], "evite": ["Usar para mais de 5-6 estágios", "Misturar com dados de tempo"] },
        { "name": "Narrativa e Anotações", "img": "icons/annotations.svg", "description": "Adicionar anotações que explicam picos, quedas ou eventos que justificam anomalias nos dados.", "usePara": "Picos de atraso devido a clima, greve ou eventos importantes.", "faca": ["Setas e rótulos no gráfico", "Legenda próxima", "Ordem visual guiada"], "evite": ["Informação solta", "Jargões sem explicação"] },
        { "name": "Indicadores de Incerteza", "img": "icons/quality.svg", "description": "Transparência sobre a confiabilidade e margem de erro dos dados (Ex: previsões de chegada - ETA).", "usePara": "Previsões de chegada, alocação de recursos e dados em tempo real com lag.", "faca": ["*Timestamp* de atualização", "Bandas de previsão (margem de erro)", "Sinalizar imputações"], "evite": ["Esconder limitações", "Apresentar previsão como fato certo"] }
      ]
    }
  ]
};
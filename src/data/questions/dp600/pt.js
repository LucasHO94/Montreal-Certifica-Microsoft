export const questions = [
  {
    "id": "dp600_q1",
    "text": "Uma equipe quer armazenar arquivos Parquet em um ambiente analítico no Microsoft Fabric e depois consultá-los com suporte a experiência baseada em arquivos e tabelas Delta. Qual item do Fabric atende melhor esse cenário?",
    "options": [
      "Dataflow Gen2",
      "Lakehouse",
      "Semantic model",
      "Warehouse"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No Microsoft Fabric, a escolha do item de armazenamento depende de você precisar trabalhar com arquivos, com tabelas, ou com os dois ao mesmo tempo.",
      "papoReto": "O Lakehouse combina duas áreas: um sistema de arquivos (a pasta /Files, onde caem os Parquet, CSV e JSON brutos) e uma área de tabelas gerenciadas no formato Delta Lake (/Tables), consultáveis por Spark ou pelo SQL analytics endpoint. É exatamente o cenário pedido: guardar arquivos Parquet e ainda ter a experiência baseada em arquivos E em tabelas Delta no mesmo item.",
      "respostaCerta": "Lakehouse — o único item que entrega ao mesmo tempo a camada de arquivos e as tabelas Delta gerenciadas.",
      "puloDoGato": "O enunciado citou 'arquivos' E 'tabelas Delta' no mesmo item? É Lakehouse. Se pedisse só tabela relacional com T-SQL, seria Warehouse.",
      "cascasDeBanana": [
        "Dataflow Gen2: é ferramenta de ingestão/transformação (Power Query), não o repositório onde os arquivos Parquet ficam armazenados.",
        "Semantic model: é a camada de modelagem e medidas para relatórios; fica acima do armazenamento e não guarda arquivos.",
        "Warehouse: armazena apenas tabelas relacionais T-SQL e não expõe a área de arquivos brutos exigida no cenário."
      ],
      "dicaOuro": "Arquivos + tabelas Delta no mesmo lugar = Lakehouse. Só tabela relacional T-SQL = Warehouse."
    }
  },
  {
    "id": "dp600_q2",
    "text": "Um time deseja criar tabelas relacionais e consultar dados com T-SQL em um ambiente estruturado de analytics dentro do Fabric. Qual item é o mais apropriado?",
    "options": [
      "Lakehouse shortcut",
      "Warehouse",
      "KQL database",
      "Notebook"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Lakehouse e Warehouse coexistem no Fabric, mas atendem perfis diferentes de uso de dados.",
      "papoReto": "Quando o requisito é modelar tabelas relacionais e consultar/gravar com T-SQL completo (DDL e DML, incluindo INSERT/UPDATE/DELETE), o item certo é o Warehouse. Ele entrega uma experiência de data warehouse relacional clássico sobre o OneLake — ideal para quem vem do SQL Server e quer trabalhar inteiramente em T-SQL.",
      "respostaCerta": "Warehouse — ambiente relacional com suporte completo a T-SQL, tanto para definição quanto para manipulação de dados.",
      "puloDoGato": "'Tabelas relacionais' + 'T-SQL' + 'gravar via SQL' apontam para Warehouse. O Lakehouse só permite leitura T-SQL pelo SQL endpoint, não gravação.",
      "cascasDeBanana": [
        "Lakehouse shortcut: um shortcut apenas referencia dados externos sem copiá-los; não é um ambiente relacional de escrita em T-SQL.",
        "KQL database: voltado a dados de telemetria e logs consultados com KQL, não à modelagem relacional em T-SQL.",
        "Notebook: ambiente de código Spark (PySpark/Spark SQL), não um warehouse relacional gerenciado."
      ],
      "dicaOuro": "Modelagem e escrita 100% em T-SQL = Warehouse. Leitura T-SQL só de consulta sobre Delta = SQL endpoint do Lakehouse."
    }
  },
  {
    "id": "dp600_q3",
    "text": "Qual é o papel do OneLake no Microsoft Fabric?",
    "options": [
      "Substituir o Entra ID",
      "Criar dashboards automaticamente",
      "Fornecer uma camada de armazenamento unificada para dados analíticos no Fabric",
      "Executar apenas relatórios do Power BI"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "O OneLake é a fundação de armazenamento do Microsoft Fabric, e entender o papel dele é base para toda a prova.",
      "papoReto": "O OneLake é o data lake único e lógico do Fabric — uma espécie de 'OneDrive para dados': cada workspace e item (Lakehouse, Warehouse) grava sobre ele, em formato aberto Delta/Parquet. Seu papel é ser a camada de armazenamento unificada para os dados analíticos, evitando cópias e silos entre equipes.",
      "respostaCerta": "Fornecer uma camada de armazenamento unificada para dados analíticos no Fabric.",
      "puloDoGato": "'Armazenamento único', 'lago unificado', 'um só lugar para os dados de toda a organização' = OneLake.",
      "cascasDeBanana": [
        "Substituir o Entra ID: o Entra ID cuida de identidade e autenticação; o OneLake é armazenamento e não faz esse papel.",
        "Criar dashboards automaticamente: visualização é função do Power BI, não do lago de dados.",
        "Executar apenas relatórios do Power BI: o OneLake guarda os dados; os relatórios são o consumo, não a função do OneLake."
      ],
      "dicaOuro": "OneLake = um único lago para todos os dados do Fabric, em formato aberto Delta. Pense 'OneDrive para dados'."
    }
  },
  {
    "id": "dp600_q4",
    "text": "Você precisa copiar dados de uma origem para um destino no Fabric com orquestração visual e etapas reutilizáveis. Que recurso atende melhor essa necessidade?",
    "options": [
      "Data pipeline",
      "Deployment pipeline",
      "Scorecard",
      "Semantic model"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No Fabric há mais de uma forma de mover dados; a diferença está em orquestração visual versus transformação.",
      "papoReto": "Um Data pipeline orquestra a cópia e o fluxo de dados com interface visual de arrastar-e-soltar, encadeando atividades (Copy, Notebook, Dataflow) com dependências de sucesso/falha e etapas reutilizáveis e parametrizáveis. É o recurso certo para copiar de uma origem a um destino com orquestração visual.",
      "respostaCerta": "Data pipeline — orquestração visual de cópia e fluxo de dados, com etapas reutilizáveis.",
      "puloDoGato": "'Copiar dados', 'orquestração visual', 'agendar/encadear atividades' = Data pipeline. Não confunda com Deployment pipeline, que promove conteúdo entre ambientes.",
      "cascasDeBanana": [
        "Deployment pipeline: promove conteúdo entre os estágios Dev/Test/Prod; não copia dados de uma origem para um destino.",
        "Scorecard: recurso de metas e KPIs do Power BI; não tem relação com movimentação de dados.",
        "Semantic model: camada de modelagem para relatórios, não uma ferramenta de cópia ou orquestração."
      ],
      "dicaOuro": "Mover/copiar dados com fluxo visual = Data pipeline. Promover artefatos entre ambientes = Deployment pipeline."
    }
  },
  {
    "id": "dp600_q5",
    "text": "Em qual cenário um notebook do Fabric é especialmente adequado?",
    "options": [
      "Quando é necessário transformar dados usando código, como PySpark ou Spark SQL",
      "Quando se deseja só visualizar licenças",
      "Quando o objetivo é apenas compartilhar um dashboard final",
      "Quando se quer apenas atribuir permissões"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Notebooks são a opção de transformação por código dentro do Fabric, executando sobre o motor Spark.",
      "papoReto": "Um Notebook do Fabric executa código Spark (PySpark, Spark SQL, Scala ou R) em células interativas, sendo ideal para transformações pesadas, lógica complexa e uso de bibliotecas de terceiros. É a escolha quando o cenário exige transformar dados programaticamente.",
      "respostaCerta": "Quando é necessário transformar dados usando código, como PySpark ou Spark SQL.",
      "puloDoGato": "'Código', 'PySpark/Spark SQL', 'transformação complexa ou bibliotecas' = Notebook. Transformação visual sem código seria Dataflow Gen2.",
      "cascasDeBanana": [
        "Quando se deseja só visualizar licenças: administração de licenças é tarefa do portal de administração, não de um notebook.",
        "Quando o objetivo é apenas compartilhar um dashboard final: compartilhar relatório é função do Power BI, não de um notebook de código.",
        "Quando se quer apenas atribuir permissões: permissões saem das funções de workspace, não de um notebook."
      ],
      "dicaOuro": "Transformação por código/Spark = Notebook. Transformação visual sem código = Dataflow Gen2."
    }
  },
  {
    "id": "dp600_q6",
    "text": "Qual recurso do Fabric é mais associado a transformações low-code de dados com interface visual semelhante ao Power Query?",
    "options": [
      "Warehouse",
      "XMLA endpoint",
      "Dataflow Gen2",
      "Notebook kernel"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Para transformação de dados, o Fabric separa o caminho low-code (visual) do caminho por código.",
      "papoReto": "O Dataflow Gen2 traz a interface do Power Query Online: o analista limpa e transforma dados de forma visual (low-code) e carrega o resultado diretamente em um Lakehouse ou Warehouse. Por isso é o recurso associado a transformações visuais semelhantes ao Power Query.",
      "respostaCerta": "Dataflow Gen2 — transformação low-code com a experiência visual do Power Query.",
      "puloDoGato": "'Power Query', 'visual' ou 'low-code' em engenharia de dados = Dataflow Gen2.",
      "cascasDeBanana": [
        "Warehouse: é o destino relacional dos dados, não a ferramenta visual usada para transformá-los.",
        "XMLA endpoint: interface para ferramentas externas se conectarem a modelos semânticos; não transforma dados.",
        "Notebook kernel: exige código PySpark/Spark SQL — é o oposto da abordagem low-code visual."
      ],
      "dicaOuro": "Power Query visual = Dataflow Gen2. Código Spark = Notebook."
    }
  },
  {
    "id": "dp600_q7",
    "text": "Qual é a principal finalidade de um semantic model no ecossistema Fabric e Power BI?",
    "options": [
      "Substituir pipelines de ingestão",
      "Fornecer uma camada de modelagem para análise, medidas e consumo por relatórios",
      "Administrar workspaces",
      "Armazenar arquivos brutos"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "O modelo semântico é a ponte entre os dados armazenados e os relatórios que os consomem.",
      "papoReto": "O semantic model fornece a camada de modelagem analítica: relacionamentos, hierarquias e medidas DAX que os relatórios do Power BI consomem. Ele não guarda arquivos brutos nem orquestra ingestão — sua função é organizar os dados para análise e consumo.",
      "respostaCerta": "Fornecer uma camada de modelagem para análise, medidas e consumo por relatórios.",
      "puloDoGato": "'Medidas', 'relacionamentos', 'camada para os relatórios consumirem' = semantic model.",
      "cascasDeBanana": [
        "Substituir pipelines de ingestão: a ingestão é feita por pipelines/dataflows; o modelo semântico entra depois, na etapa de análise.",
        "Administrar workspaces: governança de workspace é tarefa administrativa, não atribuição do modelo semântico.",
        "Armazenar arquivos brutos: arquivos brutos vivem no Lakehouse/OneLake, não dentro do modelo semântico."
      ],
      "dicaOuro": "Semantic model = relacionamentos + medidas DAX para relatórios. Não armazena arquivo nem ingere dado."
    }
  },
  {
    "id": "dp600_q8",
    "text": "Quando você precisa calcular agregações dinâmicas que respondem ao contexto de filtro em relatórios, qual recurso do semantic model costuma ser usado?",
    "options": [
      "Medidas DAX",
      "Capacities",
      "Shortcuts",
      "Notebooks Spark"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "Cálculos que reagem ao contexto de filtro do relatório são o coração do DAX.",
      "papoReto": "Medidas DAX são avaliadas dinamicamente conforme o contexto de filtro (página, segmentação, linha do visual). Por isso são o recurso usado para agregações que mudam de acordo com o que o usuário filtra no relatório, sem recalcular nada manualmente.",
      "respostaCerta": "Medidas DAX — agregações dinâmicas avaliadas no contexto de filtro do relatório.",
      "puloDoGato": "'Agregação que responde ao filtro', 'cálculo dinâmico no relatório' = medida DAX.",
      "cascasDeBanana": [
        "Capacities: definem a capacidade de computação/licenciamento do Fabric, não cálculos analíticos.",
        "Shortcuts: referenciam dados de outras fontes no OneLake; não calculam agregações.",
        "Notebooks Spark: transformam dados em lote por código; não respondem ao contexto de filtro de um visual."
      ],
      "dicaOuro": "Cálculo que muda conforme o filtro do relatório = medida DAX."
    }
  },
  {
    "id": "dp600_q9",
    "text": "Qual abordagem é mais adequada para controlar quem pode editar conteúdo em um workspace do Fabric?",
    "options": [
      "Renomear o lakehouse",
      "Atribuir a função apropriada no workspace, como Admin, Member, Contributor ou Viewer",
      "Publicar o relatório em outro navegador",
      "Criar uma medida DAX"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Segurança e governança",
    "explanation": {
      "intro": "O controle de quem faz o quê no Fabric começa pelas funções (roles) de workspace.",
      "papoReto": "A forma recomendada de controlar a edição é atribuir a função certa do workspace — Admin, Member, Contributor ou Viewer. Cada função concede um nível de acesso: Contributor e acima podem editar conteúdo, enquanto Viewer apenas consome.",
      "respostaCerta": "Atribuir a função apropriada no workspace, como Admin, Member, Contributor ou Viewer.",
      "puloDoGato": "'Quem pode editar/visualizar' dentro de um workspace = funções de workspace (Admin/Member/Contributor/Viewer).",
      "cascasDeBanana": [
        "Renomear o lakehouse: mudar o nome de um item não altera a permissão de ninguém.",
        "Publicar o relatório em outro navegador: o navegador não tem qualquer relação com controle de acesso.",
        "Criar uma medida DAX: DAX é cálculo analítico, não um mecanismo de permissão."
      ],
      "dicaOuro": "Controle de edição no workspace = funções (roles). Controle de quais linhas cada um vê = RLS."
    }
  },
  {
    "id": "dp600_q10",
    "text": "Se usuários diferentes devem ver subconjuntos diferentes das linhas de uma mesma tabela em relatórios, qual recurso deve ser implementado?",
    "options": [
      "Notebook schedule",
      "Sensitivity label apenas",
      "Row-level security (RLS)",
      "Data pipeline"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Segurança e governança",
    "explanation": {
      "intro": "Quando o controle de acesso precisa descer ao nível da linha, entra a segurança de linha.",
      "papoReto": "A Row-level security (RLS) filtra quais linhas cada usuário enxerga em uma mesma tabela, com base em funções e regras em DAX. É exatamente o que resolve o cenário de 'usuários diferentes veem subconjuntos diferentes das mesmas linhas'.",
      "respostaCerta": "Row-level security (RLS) — filtra as linhas por usuário/função dentro da mesma tabela.",
      "puloDoGato": "'Cada usuário vê só algumas linhas da mesma tabela' = RLS.",
      "cascasDeBanana": [
        "Notebook schedule: apenas agenda a execução de código; não filtra linhas por usuário.",
        "Sensitivity label apenas: classifica e protege o dado, mas não define quais linhas cada pessoa enxerga.",
        "Data pipeline: orquestra a movimentação de dados; não controla a visão por usuário."
      ],
      "dicaOuro": "Filtrar linhas por usuário = RLS. Controlar quem edita o item = funções de workspace."
    }
  },
  {
    "id": "dp600_q11",
    "text": "Em um lakehouse, por que usar tabelas Delta costuma ser vantajoso?",
    "options": [
      "Porque impedem qualquer atualização",
      "Porque só funcionam em relatórios paginados",
      "Porque elas oferecem suporte a transações ACID e melhor gerenciamento de dados analíticos",
      "Porque substituem semantic models"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "O formato Delta é o que transforma arquivos Parquet em tabelas confiáveis dentro do Lakehouse.",
      "papoReto": "Tabelas Delta acrescentam ao Parquet um log de transações que garante propriedades ACID (atomicidade, consistência, isolamento e durabilidade), além de time travel e operações MERGE/UPDATE/DELETE com melhor performance analítica. É por isso que são vantajosas no Lakehouse.",
      "respostaCerta": "Porque elas oferecem suporte a transações ACID e melhor gerenciamento de dados analíticos.",
      "puloDoGato": "'ACID', 'time travel' ou 'update/delete em data lake' = formato Delta.",
      "cascasDeBanana": [
        "Porque impedem qualquer atualização: é o contrário — o Delta justamente habilita updates e deletes confiáveis.",
        "Porque só funcionam em relatórios paginados: Delta é formato de armazenamento e não tem relação com o tipo de relatório.",
        "Porque substituem semantic models: a tabela Delta é a camada física; o modelo semântico é a camada lógica acima — um não substitui o outro."
      ],
      "dicaOuro": "Delta = Parquet + log de transações = ACID, time travel e update/delete no data lake."
    }
  },
  {
    "id": "dp600_q12",
    "text": "Qual é a principal vantagem de usar shortcuts no OneLake?",
    "options": [
      "Aumentar manualmente a capacidade",
      "Substituir pipelines",
      "Desabilitar governança",
      "Referenciar dados sem precisar duplicá-los fisicamente no ambiente"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Os shortcuts do OneLake atacam o problema de duplicação de dados entre times e fontes.",
      "papoReto": "Um shortcut cria um ponteiro para dados que vivem em outro local (outro Lakehouse, outro workspace, ADLS Gen2, Amazon S3) e os expõe como se fossem locais, sem copiá-los. A vantagem central é referenciar dados sem duplicá-los fisicamente.",
      "respostaCerta": "Referenciar dados sem precisar duplicá-los fisicamente no ambiente.",
      "puloDoGato": "'Acessar dados de outra fonte sem copiar/duplicar' = shortcut do OneLake.",
      "cascasDeBanana": [
        "Aumentar manualmente a capacidade: capacidade é configuração de licenciamento/computação, não função do shortcut.",
        "Substituir pipelines: pipelines movem e transformam dados; o shortcut apenas referencia, sem mover.",
        "Desabilitar governança: o shortcut não desliga governança — o dado referenciado continua sob suas políticas."
      ],
      "dicaOuro": "Shortcut = ponteiro para o dado onde ele já está, sem cópia."
    }
  },
  {
    "id": "dp600_q13",
    "text": "Uma solução precisa executar cópia de dados, depois um notebook, e por fim uma atualização de modelo em sequência. O que melhor atende esse fluxo?",
    "options": [
      "Um data pipeline com atividades encadeadas",
      "Apenas um dashboard",
      "Apenas um role de segurança",
      "Apenas uma medida"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Para encadear etapas dependentes (copiar → processar → atualizar), o Fabric oferece orquestração visual via pipeline.",
      "papoReto": "Um data pipeline executa atividades em sequência com dependências explícitas: Copy Data → Notebook → Refresh do modelo. Cada atividade só inicia se a anterior for bem-sucedida. É o recurso certo para fluxos de múltiplas etapas dependentes.",
      "respostaCerta": "Um data pipeline com atividades encadeadas.",
      "puloDoGato": "'Executar em sequência', 'etapas dependentes de sucesso/falha' = data pipeline.",
      "cascasDeBanana": [
        "Apenas um dashboard: dashboard é camada de visualização; não executa nenhuma etapa de processamento.",
        "Apenas um role de segurança: roles controlam quem acessa o quê; não executam fluxos de dados.",
        "Apenas uma medida: medida DAX calcula valores em relatório; não orquestra atividades."
      ],
      "dicaOuro": "Etapas encadeadas com dependência de sucesso/falha = data pipeline."
    }
  },
  {
    "id": "dp600_q14",
    "text": "Em notebooks Spark, qual prática tende a melhorar desempenho ao trabalhar com grandes volumes?",
    "options": [
      "Reduzir leituras desnecessárias e aplicar transformações de forma planejada para minimizar custo de processamento",
      "Substituir tudo por bookmarks",
      "Evitar particionamento sempre",
      "Criar mais workspaces sem necessidade"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Performance em Spark começa por reduzir o que não precisa ser lido ou processado.",
      "papoReto": "Em notebooks Spark, a principal alavanca de desempenho é evitar leituras e transformações desnecessárias: usar filtros/predicate pushdown, selecionar apenas as colunas necessárias (column pruning), e estruturar as transformações para aproveitar o lazy evaluation do Spark. Isso reduz custo de I/O e uso de memória.",
      "respostaCerta": "Reduzir leituras desnecessárias e aplicar transformações de forma planejada para minimizar custo de processamento.",
      "puloDoGato": "Performance em Spark = leia menos, filtre cedo, selecione só o que precisa.",
      "cascasDeBanana": [
        "Substituir tudo por bookmarks: bookmarks são funcionalidade de relatórios do Power BI; não têm relação com otimização Spark.",
        "Evitar particionamento sempre: na realidade, particionar tabelas Delta por colunas usadas em filtros é justamente uma boa prática de performance.",
        "Criar mais workspaces sem necessidade: workspaces são unidades de colaboração e permissão; não melhoram desempenho de notebooks."
      ],
      "dicaOuro": "Notebook Spark rápido: filtre cedo + selecione só as colunas que precisa + particione bem."
    }
  },
  {
    "id": "dp600_q15",
    "text": "Qual recurso permite consultar dados de um lakehouse usando experiência SQL no Fabric?",
    "options": [
      "Deployment rule",
      "SQL analytics endpoint",
      "Sensitivity policy",
      "Data activator"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "O Lakehouse expõe os dados de duas formas: pelo motor Spark e por um endpoint SQL somente-leitura.",
      "papoReto": "Cada Lakehouse do Fabric gera automaticamente um SQL analytics endpoint — uma interface SQL read-only que permite consultar as tabelas Delta do lakehouse usando T-SQL, sem necessidade de código Spark. É o ponto de entrada para analistas de SQL que não querem lidar com notebooks.",
      "respostaCerta": "SQL analytics endpoint — interface T-SQL read-only gerada automaticamente pelo Lakehouse.",
      "puloDoGato": "'Consultar lakehouse com SQL' = SQL analytics endpoint (somente leitura). Escrita em T-SQL = Warehouse.",
      "cascasDeBanana": [
        "Deployment rule: regra usada no deployment pipeline para ajustar parâmetros de conexão entre ambientes; não serve para consultas SQL.",
        "Sensitivity policy: política de classificação e proteção de dados; não é uma interface de consulta.",
        "Data activator: detecta condições nos dados e dispara alertas/ações; não é uma camada de consulta SQL."
      ],
      "dicaOuro": "SQL read-only no Lakehouse = SQL analytics endpoint. Write em SQL = Warehouse."
    }
  },
  {
    "id": "dp600_q16",
    "text": "Por que um star schema é frequentemente recomendado para modelos analíticos?",
    "options": [
      "Porque funciona apenas com dados não estruturados",
      "Porque substitui DAX",
      "Porque elimina qualquer necessidade de relacionamento",
      "Porque simplifica navegação, melhora clareza do modelo e tende a favorecer desempenho analítico"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "O star schema é o padrão de modelagem dimensional dominante em BI e análise de dados.",
      "papoReto": "No star schema, uma tabela fato central (com métricas/transações) se conecta a tabelas dimensão (datas, produtos, clientes) por relacionamentos simples. Isso simplifica a navegação do usuário, torna as medidas DAX mais legíveis e previsíveis, e evita ambiguidades de filtro — favorecendo desempenho analítico.",
      "respostaCerta": "Porque simplifica navegação, melhora clareza do modelo e tende a favorecer desempenho analítico.",
      "puloDoGato": "Fato no centro + dimensões ao redor = star schema. É o padrão recomendado para Power BI e modelos semânticos.",
      "cascasDeBanana": [
        "Porque funciona apenas com dados não estruturados: o star schema trabalha com dados estruturados em tabelas relacionais, não com dados não estruturados.",
        "Porque substitui DAX: DAX continua sendo a linguagem de medidas; o star schema é a estrutura das tabelas.",
        "Porque elimina qualquer necessidade de relacionamento: é o contrário — o star schema é construído exatamente sobre relacionamentos entre fato e dimensões."
      ],
      "dicaOuro": "Star schema = fato no centro, dimensões ao redor, relacionamentos simples. Resultado: DAX previsível e relatórios rápidos."
    }
  },
  {
    "id": "dp600_q17",
    "text": "Qual é o benefício principal do incremental refresh em modelos semânticos?",
    "options": [
      "Remover relacionamentos",
      "Atualizar sempre a tabela inteira mais lentamente",
      "Impedir uso de medidas",
      "Atualizar apenas partições ou fatias recentes dos dados, reduzindo tempo e custo de refresh"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "O incremental refresh resolve o problema de tabelas grandes que levam horas para ser recarregadas.",
      "papoReto": "Com incremental refresh, o modelo semântico divide a tabela em partições por período (ex.: mês/ano). Nos refreshes subsequentes, apenas as partições recentes são atualizadas — dados históricos permanecem intactos. Isso reduz drasticamente o tempo e o custo do processo de atualização.",
      "respostaCerta": "Atualizar apenas partições ou fatias recentes dos dados, reduzindo tempo e custo de refresh.",
      "puloDoGato": "'Não recarregar dados históricos', 'refresh parcial por período' = incremental refresh.",
      "cascasDeBanana": [
        "Remover relacionamentos: relacionamentos são essenciais para o modelo funcionar; removê-los quebra as medidas DAX.",
        "Atualizar sempre a tabela inteira mais lentamente: é o problema que o incremental refresh resolve, não o benefício dele.",
        "Impedir uso de medidas: o incremental refresh não tem nenhuma relação com medidas DAX."
      ],
      "dicaOuro": "Tabela grande, histórico estável? Use incremental refresh para atualizar só o período recente."
    }
  },
  {
    "id": "dp600_q18",
    "text": "Em termos conceituais, o modo Direct Lake busca combinar quais dois objetivos?",
    "options": [
      "Autenticação sem Entra ID",
      "Alto desempenho analítico com acesso direto a dados armazenados no OneLake",
      "Conversão automática de SQL em Python",
      "Eliminação de workspaces"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "O modo Direct Lake é a inovação do Fabric que elimina o trade-off clássico entre Import e DirectQuery.",
      "papoReto": "No modo Direct Lake, o motor do Power BI lê os arquivos Delta Parquet diretamente do OneLake sem importar os dados para memória (como Import) nem consultar via SQL em tempo real (como DirectQuery). Isso combina a velocidade do Import com a atualidade dos dados do DirectQuery.",
      "respostaCerta": "Alto desempenho analítico com acesso direto a dados armazenados no OneLake.",
      "puloDoGato": "'Velocidade de Import + dados sempre atuais do OneLake' = Direct Lake.",
      "cascasDeBanana": [
        "Autenticação sem Entra ID: o Direct Lake usa o Entra ID normalmente; autenticação não é o objetivo do modo.",
        "Conversão automática de SQL em Python: esse recurso não existe no Fabric; Direct Lake não converte linguagens.",
        "Eliminação de workspaces: workspaces continuam existindo; o Direct Lake não altera a estrutura de organização do Fabric."
      ],
      "dicaOuro": "Direct Lake = lê Delta direto do OneLake, velocidade de Import sem importar os dados."
    }
  },
  {
    "id": "dp600_q19",
    "text": "Qual é um motivo importante para aplicar sensitivity labels em artefatos analíticos?",
    "options": [
      "Substituir RLS",
      "Melhorar velocidade de notebook automaticamente",
      "Criar tabelas dimensionais",
      "Classificar e proteger dados conforme sua sensibilidade e requisitos de governança"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Segurança e governança",
    "explanation": {
      "intro": "Sensitivity labels do Microsoft Purview classificam os dados por nível de sensibilidade e podem acionar proteções automáticas.",
      "papoReto": "Sensitivity labels (ex.: Confidencial, Altamente Confidencial) aplicadas a artefatos do Fabric identificam o grau de sensibilidade dos dados e podem acionar políticas de proteção — como criptografia ao exportar ou restrição de compartilhamento. Seu objetivo é classificar e proteger dados conforme os requisitos de governança da organização.",
      "respostaCerta": "Classificar e proteger dados conforme sua sensibilidade e requisitos de governança.",
      "puloDoGato": "'Classificar dados por sensibilidade', 'requisitos de governança/conformidade' = sensitivity labels.",
      "cascasDeBanana": [
        "Substituir RLS: RLS filtra linhas por usuário; sensitivity label classifica e protege o dado em si — são camadas complementares, não substitutas.",
        "Melhorar velocidade de notebook automaticamente: labels não têm efeito sobre performance de processamento.",
        "Criar tabelas dimensionais: tabelas dimensionais são design de modelo; sensitivity label é controle de governança."
      ],
      "dicaOuro": "Sensitivity label = classificação do dado + gatilho para políticas de proteção. Não filtra linhas (isso é RLS)."
    }
  },
  {
    "id": "dp600_q20",
    "text": "Em um ambiente com muitos datasets e relatórios, por que usar endorsement ou certificação de conteúdo é útil?",
    "options": [
      "Para ajudar consumidores a identificar ativos confiáveis e aprovados para uso analítico",
      "Para duplicar dados automaticamente",
      "Para desabilitar refresh",
      "Para remover lineage"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Segurança e governança",
    "explanation": {
      "intro": "Com muitos datasets no Fabric, como o usuário sabe qual é confiável? Endorsement resolve isso.",
      "papoReto": "O endorsement (ou certificação) é uma marcação que admins ou owners colocam em artefatos (datasets, relatórios) para sinalizar que foram revisados e aprovados. Os dois níveis são 'Promoted' (dono indica) e 'Certified' (aprovado formalmente pela organização). Isso ajuda os consumidores a identificar ativos confiáveis em um ambiente com muitos artefatos.",
      "respostaCerta": "Para ajudar consumidores a identificar ativos confiáveis e aprovados para uso analítico.",
      "puloDoGato": "'Marcar como confiável/aprovado para consumo' = endorsement/certificação de conteúdo.",
      "cascasDeBanana": [
        "Para duplicar dados automaticamente: endorsement não movimenta nem replica dados.",
        "Para desabilitar refresh: a marcação de certificação não afeta o agendamento de refresh.",
        "Para remover lineage: endorsement não altera a rastreabilidade dos dados — lineage continua disponível."
      ],
      "dicaOuro": "Endorsed/Certified = sinal visual de 'este ativo foi aprovado e é confiável'. Não copia nem processa dado."
    }
  },
  {
    "id": "dp600_q21",
    "text": "Um pipeline termina com sucesso, mas o processamento total está muito lento. Qual abordagem inicial é mais adequada?",
    "options": [
      "Trocar todas as tabelas por CSV manualmente",
      "Excluir o workspace inteiro",
      "Remover governança",
      "Revisar etapas, dependências e gargalos de cada atividade para identificar onde o tempo está sendo consumido"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Diagnosticar lentidão em pipelines exige identificar onde o tempo é gasto antes de tentar qualquer otimização.",
      "papoReto": "Quando um pipeline é lento mas termina com êxito, o primeiro passo é revisar o histórico de execução: ver a duração de cada atividade, identificar qual etapa consome mais tempo (gargalo) e avaliar se há dependências desnecessárias. Só após isso é possível otimizar com precisão.",
      "respostaCerta": "Revisar etapas, dependências e gargalos de cada atividade para identificar onde o tempo está sendo consumido.",
      "puloDoGato": "Pipeline lento: primeiro inspecione o Monitor do pipeline para ver qual atividade demora mais.",
      "cascasDeBanana": [
        "Trocar todas as tabelas por CSV manualmente: mudar o formato sem diagnóstico pode piorar ou nem resolver o problema.",
        "Excluir o workspace inteiro: destruir o ambiente não é diagnóstico — é perda de trabalho sem causa.",
        "Remover governança: governança (RLS, labels) raramente é a causa de lentidão em pipeline; diagnóstico vem antes."
      ],
      "dicaOuro": "Pipeline lento: monitore cada atividade primeiro, então otimize o gargalo encontrado."
    }
  },
  {
    "id": "dp600_q22",
    "text": "Em uma arquitetura medallion no lakehouse, qual é o objetivo de separar camadas como bronze, silver e gold?",
    "options": [
      "Eliminar necessidade de transformação",
      "Separar usuários por navegador",
      "Substituir permissões de workspace",
      "Organizar dados por estágio de refinamento, qualidade e prontidão para consumo analítico"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "A arquitetura medallion organiza dados em camadas progressivas de qualidade dentro do Lakehouse.",
      "papoReto": "Na arquitetura medallion: Bronze recebe dados brutos no estado original da fonte (máxima fidelidade, mínima qualidade). Silver aplica limpeza e padronização. Gold entrega dados agregados e modelados prontos para consumo analítico. Cada camada tem propósito e audiência diferentes.",
      "respostaCerta": "Organizar dados por estágio de refinamento, qualidade e prontidão para consumo analítico.",
      "puloDoGato": "Bronze (bruto) → Silver (limpo) → Gold (pronto para análise) = arquitetura medallion.",
      "cascasDeBanana": [
        "Eliminar necessidade de transformação: é o contrário — a arquitetura medallion existe justamente para organizar as transformações progressivas.",
        "Separar usuários por navegador: a arquitetura lida com camadas de dados, não com perfis de usuário por ferramenta de acesso.",
        "Substituir permissões de workspace: permissões são configuradas nas funções de workspace; a camada medallion não tem essa função."
      ],
      "dicaOuro": "Medallion = Bronze (raw) → Silver (clean) → Gold (aggregated/ready). Qualidade cresce da esquerda para a direita."
    }
  },
  {
    "id": "dp600_q23",
    "text": "Um relatório apresenta ambiguidade de filtro após múltiplos relacionamentos entre tabelas. Qual ação tende a ser mais apropriada?",
    "options": [
      "Criar mais visuais sem alterar o modelo",
      "Remover todas as medidas",
      "Revisar o desenho do modelo e ajustar relacionamentos para reduzir ambiguidade e melhorar o comportamento do filtro",
      "Trocar o nome das colunas apenas"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "Ambiguidade de filtro em modelos com múltiplos relacionamentos é um problema de design que exige correção na estrutura.",
      "papoReto": "Quando há múltiplos relacionamentos entre as mesmas tabelas (relacionamentos ativos e inativos) ou caminhos de filtro ambíguos, o Power BI pode apresentar resultados inesperados. A solução é revisar o modelo: consolidar em star schema, usar USERELATIONSHIP() nas medidas ou reestruturar tabelas para eliminar a ambiguidade.",
      "respostaCerta": "Revisar o desenho do modelo e ajustar relacionamentos para reduzir ambiguidade e melhorar o comportamento do filtro.",
      "puloDoGato": "Filtro com comportamento inesperado = revise relacionamentos no modelo, não apenas adicione visuais.",
      "cascasDeBanana": [
        "Criar mais visuais sem alterar o modelo: visuais exibem o resultado do modelo; se o modelo está errado, mais visuais não resolvem.",
        "Remover todas as medidas: medidas são cálculos corretos; remover todas não resolve problema de relacionamento.",
        "Trocar o nome das colunas apenas: renomear não altera a lógica do filtro nem a direção dos relacionamentos."
      ],
      "dicaOuro": "Ambiguidade de filtro = problema no design do modelo. Solução: ajuste os relacionamentos, não os visuais."
    }
  },
  {
    "id": "dp600_q24",
    "text": "Em um cenário que exige equilíbrio entre latência baixa e volume grande de dados, o que um engenheiro analítico deve priorizar?",
    "options": [
      "Desativar segurança",
      "Evitar qualquer modelagem",
      "Usar sempre a mesma abordagem sem análise",
      "Escolher a estratégia de armazenamento e consulta mais adequada ao padrão de uso e ao volume de dados"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "Não existe uma única estratégia correta: a escolha entre Import, DirectQuery e Direct Lake depende do cenário.",
      "papoReto": "Em cenários que exigem baixa latência com volume alto, o engenheiro analítico deve avaliar: Import para velocidade máxima com dados que toleram alguma defasagem; Direct Lake para dados grandes e sempre atuais no OneLake; DirectQuery para dados que precisam ser lidos na origem. A decisão certa é a que melhor casa com o padrão de uso e o volume.",
      "respostaCerta": "Escolher a estratégia de armazenamento e consulta mais adequada ao padrão de uso e ao volume de dados.",
      "puloDoGato": "Não existe abordagem única: Import, DirectQuery e Direct Lake têm trade-offs diferentes para cada cenário.",
      "cascasDeBanana": [
        "Desativar segurança: segurança não causa latência significativa; desativá-la é um risco desnecessário.",
        "Evitar qualquer modelagem: sem modelagem, o relatório não tem medidas nem relacionamentos — desempenho e usabilidade pioram.",
        "Usar sempre a mesma abordagem sem análise: uma estratégia que funciona para 1 GB pode falhar para 100 GB; contexto importa."
      ],
      "dicaOuro": "Import = rápido, offline. DirectQuery = tempo real, mais lento. Direct Lake = melhor dos dois para dados no OneLake."
    }
  },
  {
    "id": "dp600_q25",
    "text": "Em uma investigação de impacto, por que a lineage view é valiosa no Fabric?",
    "options": [
      "Porque elimina necessidade de documentação",
      "Porque substitui monitoramento de capacidade",
      "Porque ajuda a rastrear dependências entre fontes, transformações, modelos e relatórios",
      "Porque converte dados em tempo real"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Segurança e governança",
    "explanation": {
      "intro": "Lineage view no Fabric responde 'quem depende de quem?' — essencial antes de fazer qualquer alteração.",
      "papoReto": "A lineage view exibe graficamente o caminho completo dos dados: da fonte (banco, arquivo) passando por pipelines e dataflows, até os modelos semânticos e os relatórios. Antes de alterar uma tabela ou dataset, o engenheiro consegue enxergar todos os relatórios que serão impactados.",
      "respostaCerta": "Porque ajuda a rastrear dependências entre fontes, transformações, modelos e relatórios.",
      "puloDoGato": "'Quem vai ser afetado se eu mudar este dataset?' = lineage view.",
      "cascasDeBanana": [
        "Porque elimina necessidade de documentação: lineage complementa a documentação, não a substitui — ela rastreia o que está vivo no ambiente.",
        "Porque substitui monitoramento de capacidade: lineage é sobre dependências de artefatos; monitoramento de capacidade (Fabric Capacity Metrics) é sobre uso de recursos de computação.",
        "Porque converte dados em tempo real: lineage não processa nem converte dados — é uma visão de rastreabilidade."
      ],
      "dicaOuro": "Lineage view = mapa de dependências dos dados. Use antes de mudar algo para saber o impacto."
    }
  },
  {
    "id": "dp600_q26",
    "text": "Qual princípio deve orientar a concessão de permissões em workspaces e artefatos analíticos no Fabric?",
    "options": [
      "Least privilege, concedendo apenas o acesso necessário para cada função",
      "Full admin para todos",
      "Compartilhamento irrestrito como padrão",
      "Ausência de papéis definidos"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Segurança e governança",
    "explanation": {
      "intro": "O princípio de least privilege (menor privilégio) é uma das fundações da segurança em qualquer plataforma.",
      "papoReto": "Least privilege determina que cada usuário ou serviço receba apenas o acesso mínimo necessário para desempenhar sua função. No Fabric, isso se traduz em: Viewer para quem só consome relatórios, Contributor para quem precisa criar conteúdo, Member/Admin apenas para quem gerencia o workspace.",
      "respostaCerta": "Least privilege — conceder apenas o acesso necessário para cada função.",
      "puloDoGato": "'Princípio de permissão mínima', 'só o acesso necessário' = least privilege.",
      "cascasDeBanana": [
        "Full admin para todos: dá poder desnecessário e cria risco de exclusão acidental ou violação de dados.",
        "Compartilhamento irrestrito como padrão: expõe dados sensíveis a quem não deveria ter acesso.",
        "Ausência de papéis definidos: sem roles definidos, não há controle nem auditoria de quem faz o quê."
      ],
      "dicaOuro": "Least privilege = cada um acessa só o que precisa. Viewer lê, Contributor cria, Admin gerencia."
    }
  },
  {
    "id": "dp600_q27",
    "text": "Em um lakehouse do Fabric, qual é uma vantagem de registrar dados como tabela em vez de manter apenas arquivos soltos em pastas?",
    "options": [
      "Substituir semantic models",
      "Facilitar consulta, governança e integração com experiências analíticas do Fabric",
      "Eliminar necessidade de permissões",
      "Impedir qualquer leitura por SQL"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Registrar dados como tabela Delta no Lakehouse abre portas que arquivos soltos em pastas não abrem.",
      "papoReto": "Quando você registra dados como tabela gerenciada no Lakehouse (em vez de manter só arquivos na pasta /Files), o Fabric expõe essa tabela no SQL analytics endpoint para consulta T-SQL, permite que o semantic model a use no modo Direct Lake e facilita controle de acesso e rastreabilidade de lineage.",
      "respostaCerta": "Facilitar consulta, governança e integração com experiências analíticas do Fabric.",
      "puloDoGato": "Tabela Delta registrada = disponível para SQL endpoint, Direct Lake e lineage. Arquivo solto em /Files = só acessível por Spark.",
      "cascasDeBanana": [
        "Substituir semantic models: a tabela Delta é o dado físico; o semantic model é a camada analítica acima — ambos coexistem.",
        "Eliminar necessidade de permissões: registro como tabela não remove permissões; as funções de workspace continuam controlando o acesso.",
        "Impedir qualquer leitura por SQL: é o contrário — registrar como tabela é justamente o que habilita a leitura via SQL endpoint."
      ],
      "dicaOuro": "Arquivo no /Files = só Spark. Tabela Delta registrada = SQL endpoint + Direct Lake + lineage."
    }
  },
  {
    "id": "dp600_q28",
    "text": "Se o objetivo é carregar dados estruturados em um warehouse e consultá-los principalmente com T-SQL, o que deve ser priorizado no desenho da solução?",
    "options": [
      "Usar apenas visuais sem tabelas",
      "Evitar qualquer modelagem",
      "Estruturar tabelas e fluxo de ingestão de forma compatível com análise relacional",
      "Armazenar tudo como imagem"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Trabalhar com Warehouse no Fabric exige pensar relacionalmente desde o design das tabelas.",
      "papoReto": "Ao priorizar T-SQL com Warehouse, o engenheiro deve estruturar as tabelas no modelo relacional (fato + dimensões, tipos corretos, chaves) e garantir que o fluxo de ingestão popule essas tabelas via T-SQL ou pipelines. Isso garante compatibilidade total com consultas analíticas em SQL.",
      "respostaCerta": "Estruturar tabelas e fluxo de ingestão de forma compatível com análise relacional.",
      "puloDoGato": "Warehouse + T-SQL = design relacional (tipos, chaves, star schema) desde o início.",
      "cascasDeBanana": [
        "Usar apenas visuais sem tabelas: visuais consomem dados; sem tabelas bem estruturadas, os visuais não têm como funcionar.",
        "Evitar qualquer modelagem: o Warehouse é justamente um ambiente relacional que requer modelagem explícita.",
        "Armazenar tudo como imagem: imagens não são dados estruturados consultáveis com T-SQL."
      ],
      "dicaOuro": "Focou em DP600? A resposta certa é: Estruturar tabelas e fluxo de ingestão de forma compatível com análise relacional."
    }
  },
  {
    "id": "dp600_q29",
    "text": "Qual tipo de tarefa é mais natural em um Dataflow Gen2?",
    "options": [
      "Administrar capacidade Fabric",
      "Criar roles de segurança no workspace",
      "Publicar apps organizacionais",
      "Limpar, renomear, combinar e transformar dados com abordagem visual"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "O Dataflow Gen2 é o recurso low-code de transformação de dados do Fabric, baseado na experiência do Power Query.",
      "papoReto": "No Dataflow Gen2, o analista usa uma interface visual (Power Query Online) para limpar, renomear colunas, combinar fontes e aplicar transformações sem escrever código. O resultado é carregado diretamente em um Lakehouse ou Warehouse. A tarefa mais natural é exatamente a transformação visual de dados.",
      "respostaCerta": "Limpar, renomear, combinar e transformar dados com abordagem visual.",
      "puloDoGato": "Power Query Online + sem código + transforma dados = Dataflow Gen2.",
      "cascasDeBanana": [
        "Administrar capacidade Fabric: gerenciamento de capacidade é feito no portal de administração do Fabric, não em dataflows.",
        "Criar roles de segurança no workspace: funções de workspace são configuradas nas configurações do workspace, não em dataflows.",
        "Publicar apps organizacionais: apps Power BI são publicados a partir de workspaces, não criados por dataflows."
      ],
      "dicaOuro": "Limpar e transformar sem código? Dataflow Gen2. Com código Spark? Notebook."
    }
  },
  {
    "id": "dp600_q30",
    "text": "Por que notebooks são úteis para engenheiros analíticos no Fabric?",
    "options": [
      "Porque permitem executar transformações e análises com linguagens como PySpark e SQL em fluxo reproduzível",
      "Porque não suportam código",
      "Porque são usados só para permissões",
      "Porque substituem qualquer dashboard"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Notebooks do Fabric são ambientes de código interativo para engenharia de dados sobre o motor Spark.",
      "papoReto": "O valor central de um notebook para engenheiros analíticos é a capacidade de escrever código (PySpark, Spark SQL, Scala, R) em células interativas e executar transformações complexas de forma reproduzível — podendo salvar, versionar e reutilizar o fluxo inteiro.",
      "respostaCerta": "Porque permitem executar transformações e análises com linguagens como PySpark e SQL em fluxo reproduzível.",
      "puloDoGato": "Código PySpark/SQL em células interativas + reproduzível = Notebook.",
      "cascasDeBanana": [
        "Porque não suportam código: é exatamente o contrário — notebooks são os principais ambientes de código do Fabric.",
        "Porque são usados só para permissões: permissões são gerenciadas em workspace roles e RLS; notebooks são para processamento de dados.",
        "Porque substituem qualquer dashboard: notebooks processam e transformam; o dashboard exibe resultados — funções distintas."
      ],
      "dicaOuro": "Notebook = código Spark (PySpark/SQL/Scala) em células, ideal para transformações pesadas e reproduzíveis."
    }
  },
  {
    "id": "dp600_q31",
    "text": "Quando um analista quer consultar um lakehouse com sintaxe SQL sem abrir um notebook, qual recurso tende a ser o mais adequado?",
    "options": [
      "Scorecard",
      "Deployment pipeline",
      "Sensitivity label",
      "SQL analytics endpoint"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Analistas que preferem SQL ao código Spark têm no SQL analytics endpoint a porta de entrada ao Lakehouse.",
      "papoReto": "O SQL analytics endpoint é gerado automaticamente por cada Lakehouse e expõe as tabelas Delta como objetos SQL consuláveis em T-SQL — sem abrir notebook nem escrever código Spark. É o caminho para analistas SQL que querem explorar o lakehouse com ferramentas SQL.",
      "respostaCerta": "SQL analytics endpoint — interface T-SQL read-only do Lakehouse, sem precisar de notebook.",
      "puloDoGato": "'Consultar lakehouse com SQL sem notebook' = SQL analytics endpoint.",
      "cascasDeBanana": [
        "Scorecard: ferramenta de acompanhamento de metas/KPIs no Power BI; não serve para consultar dados do lakehouse.",
        "Deployment pipeline: gerencia promoção de conteúdo entre ambientes Dev/Test/Prod; não é uma interface de consulta.",
        "Sensitivity label: classifica e protege dados; não fornece experiência de consulta SQL."
      ],
      "dicaOuro": "SQL sem notebook no lakehouse = SQL analytics endpoint (read-only). SQL com escrita = Warehouse."
    }
  },
  {
    "id": "dp600_q32",
    "text": "Em um modelo estrela, qual é o papel típico de uma tabela fato?",
    "options": [
      "Guardar apenas nomes de usuários",
      "Armazenar eventos ou medições de negócio que serão analisados por dimensões",
      "Substituir medidas DAX",
      "Definir permissões de workspace"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "No star schema, a tabela fato é o núcleo — ela guarda os fatos do negócio que as dimensões vão explicar.",
      "papoReto": "A tabela fato armazena eventos ou medições (vendas, pedidos, transações) com métricas numéricas (quantidade, valor) e chaves estrangeiras para as dimensões. Ela responde às perguntas analíticas 'quanto', 'quantos' e 'quando' — sempre filtradas pelas dimensões.",
      "respostaCerta": "Armazenar eventos ou medições de negócio que serão analisados por dimensões.",
      "puloDoGato": "Tabela fato = métricas + chaves estrangeiras para dimensões. Tabela dimensão = atributos descritivos.",
      "cascasDeBanana": [
        "Guardar apenas nomes de usuários: nomes de usuários são atributos de uma dimensão de pessoa; não é o papel da tabela fato.",
        "Substituir medidas DAX: medidas DAX calculam sobre os dados da fato; uma não substitui a outra.",
        "Definir permissões de workspace: permissões são configuradas nas funções do workspace, não nas tabelas de dados."
      ],
      "dicaOuro": "Fato = eventos/métricas + chaves FK. Dimensão = atributos descritivos (produto, data, cliente)."
    }
  },
  {
    "id": "dp600_q33",
    "text": "Por que relacionamentos corretos entre tabelas são essenciais em um modelo semântico?",
    "options": [
      "Porque substituem refresh",
      "Porque eliminam necessidade de medidas",
      "Porque permitem filtragem e agregação coerentes entre fatos e dimensões",
      "Porque controlam licenciamento"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "Relacionamentos são os fios que ligam fatos e dimensões e controlam como os filtros se propagam no modelo.",
      "papoReto": "Sem relacionamentos corretos (tipo correto, direção de filtro certa), uma segmentação de 'Categoria de produto' não filtraria as vendas na tabela fato. Relacionamentos bem definidos garantem que filtros das dimensões atravessem corretamente para a fato, produzindo agregações coerentes.",
      "respostaCerta": "Porque permitem filtragem e agregação coerentes entre fatos e dimensões.",
      "puloDoGato": "Relacionamento correto = filtro da dimensão propaga para a fato = agregação certa no relatório.",
      "cascasDeBanana": [
        "Porque substituem refresh: relacionamentos controlam filtros de dados; refresh atualiza os dados — funções completamente distintas.",
        "Porque eliminam necessidade de medidas: relacionamentos habilitam a propagação de filtro; medidas fazem os cálculos — ambos são necessários.",
        "Porque controlam licenciamento: licenciamento no Fabric é gerenciado por capacidade e tipo de conta, não por relacionamentos no modelo."
      ],
      "dicaOuro": "Relacionamento errado = filtro não propaga = número errado no relatório. Acerte os relacionamentos primeiro."
    }
  },
  {
    "id": "dp600_q34",
    "text": "Se determinados usuários não devem nem mesmo ver colunas ou tabelas específicas do modelo, qual recurso é mais adequado?",
    "options": [
      "Endorsement",
      "Notebook scheduling",
      "Incremental refresh",
      "Object-level security (OLS)"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Segurança e governança",
    "explanation": {
      "intro": "Enquanto RLS filtra linhas, OLS esconde colunas ou tabelas inteiras de usuários específicos.",
      "papoReto": "Object-level security (OLS) permite que o administrador do modelo semântico torne tabelas ou colunas invisíveis para determinadas funções. O usuário afetado não apenas não vê os dados — ele não consegue nem consultar a existência do objeto. É o recurso certo quando a restrição é no nível da estrutura, não das linhas.",
      "respostaCerta": "Object-level security (OLS) — torna colunas ou tabelas inteiras invisíveis para funções específicas.",
      "puloDoGato": "'Ocultar coluna/tabela de determinados usuários' = OLS. 'Filtrar linhas' = RLS.",
      "cascasDeBanana": [
        "Endorsement: marca um artefato como confiável/aprovado; não controla visibilidade de colunas.",
        "Notebook scheduling: agendamento de notebooks não tem relação com controle de acesso a objetos do modelo.",
        "Incremental refresh: mecanismo de atualização por partições; não controla quem vê quais colunas."
      ],
      "dicaOuro": "OLS = esconde coluna/tabela. RLS = esconde linhas. Camadas diferentes de segurança no modelo semântico."
    }
  },
  {
    "id": "dp600_q35",
    "text": "Qual preocupação é importante ao trabalhar com dados sensíveis em lakehouses e modelos semânticos?",
    "options": [
      "Usar apenas dados sem contexto",
      "Garantir que classificação e proteção acompanhem o uso dos dados ao longo da solução",
      "Evitar qualquer documentação",
      "Remover lineage"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Segurança e governança",
    "explanation": {
      "intro": "Dados sensíveis exigem proteção em todas as etapas — da ingestão ao relatório final.",
      "papoReto": "Ao trabalhar com dados sensíveis (PII, financeiros, médicos), a preocupação central é garantir que a classificação (sensitivity labels) e as proteções (RLS, OLS, criptografia) acompanhem os dados em cada camada da solução — lakehouse, warehouse, modelo semântico e relatório.",
      "respostaCerta": "Garantir que classificação e proteção acompanhem o uso dos dados ao longo da solução.",
      "puloDoGato": "Dado sensível = proteção deve seguir o dado em todas as camadas, não só na origem.",
      "cascasDeBanana": [
        "Usar apenas dados sem contexto: remover contexto (como IDs de usuário) pode inviabilizar a análise; não é a abordagem correta.",
        "Evitar qualquer documentação: documentação ajuda a entender e auditar o uso dos dados sensíveis; evitá-la aumenta o risco.",
        "Remover lineage: lineage é essencial para rastrear onde dados sensíveis fluem; removê-la dificulta a governança."
      ],
      "dicaOuro": "Dado sensível = sensitivity label na origem + RLS/OLS no modelo + auditoria de acesso. Proteção em todas as camadas."
    }
  },
  {
    "id": "dp600_q36",
    "text": "Por que monitorar execuções de refresh e pipelines é importante em uma solução Fabric?",
    "options": [
      "Para detectar falhas, atrasos e comportamentos anormais antes que afetem consumidores de dados",
      "Para evitar qualquer automação",
      "Para substituir modelagem dimensional",
      "Para eliminar segurança"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "Monitorar pipelines e refreshes é parte essencial da manutenção de uma solução analítica confiável.",
      "papoReto": "Quando pipelines ou refreshes falham silenciosamente, os consumidores recebem dados desatualizados ou incorretos sem saber. Monitorar execuções (via Monitor Hub do Fabric) permite detectar falhas, atrasos e anomalias antes que impactem os relatórios — e agir proativamente.",
      "respostaCerta": "Para detectar falhas, atrasos e comportamentos anormais antes que afetem consumidores de dados.",
      "puloDoGato": "Monitor Hub do Fabric = visão centralizada das execuções de pipelines, notebooks e refreshes para detectar problemas.",
      "cascasDeBanana": [
        "Para evitar qualquer automação: automação (refresh agendado, pipelines) é desejável; o monitoramento existe exatamente para garantir que funcione.",
        "Para substituir modelagem dimensional: monitoramento é operacional; modelagem dimensional é de design — categorias distintas.",
        "Para eliminar segurança: segurança e monitoramento são ortogonais; monitorar não remove proteções."
      ],
      "dicaOuro": "Monitor Hub = 'olho' nas execuções do Fabric. Detecte falhas antes dos consumidores reclamarem."
    }
  },
  {
    "id": "dp600_q37",
    "text": "Em que situação shortcuts do OneLake são especialmente úteis?",
    "options": [
      "Quando o objetivo é trocar RLS por atalhos",
      "Quando se deseja duplicar arquivos a cada consumo",
      "Quando se quer desabilitar linhagem",
      "Quando é necessário reutilizar dados de outro local sem copiar fisicamente o conteúdo"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Shortcuts evitam duplicação de dados entre equipes e fontes dentro do ecossistema Fabric e além.",
      "papoReto": "Um shortcut do OneLake é ideal quando a equipe precisa consumir dados que já existem em outro Lakehouse, outro workspace ou em storage externo (ADLS Gen2, S3, GCS) — sem copiar os arquivos. O shortcut expõe esses dados como se fossem locais, mantendo uma única fonte de verdade.",
      "respostaCerta": "Quando é necessário reutilizar dados de outro local sem copiar fisicamente o conteúdo.",
      "puloDoGato": "Reutilizar dados de outro lugar sem duplicar = shortcut do OneLake.",
      "cascasDeBanana": [
        "Quando o objetivo é trocar RLS por atalhos: RLS e shortcut são mecanismos diferentes — um controla acesso por linha, o outro referencia dados remotos.",
        "Quando se deseja duplicar arquivos a cada consumo: shortcut faz o oposto — evita a duplicação.",
        "Quando se quer desabilitar linhagem: shortcut não desabilita lineage; o dado referenciado continua rastreável."
      ],
      "dicaOuro": "Shortcut = acesse dados remotos como se fossem locais, sem cópia. Economize storage e evite silos."
    }
  },
  {
    "id": "dp600_q38",
    "text": "Em uma arquitetura medallion, o que normalmente caracteriza a passagem da camada bronze para a silver?",
    "options": [
      "Limpeza, padronização e melhoria de qualidade dos dados ingeridos",
      "Exclusão de metadados",
      "Remoção de toda transformação",
      "Conversão obrigatória para dashboard"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Na arquitetura medallion, a passagem de bronze para silver é a etapa de limpeza e qualificação dos dados.",
      "papoReto": "Bronze guarda os dados brutos exatamente como vieram da fonte. Silver aplica limpeza (remove duplicatas, corrige nulos), padronização (formatos de data, tipos corretos, nomes de colunas consistentes) e melhoria de qualidade. Os dados na silver já são confiáveis para análise mais apurada.",
      "respostaCerta": "Limpeza, padronização e melhoria de qualidade dos dados ingeridos.",
      "puloDoGato": "Bronze → Silver = limpar + padronizar + qualificar. Silver → Gold = agregar + modelar para análise.",
      "cascasDeBanana": [
        "Exclusão de metadados: bronze para silver não remove metadados — pelo contrário, pode enriquecer com metadados de auditoria.",
        "Remoção de toda transformação: bronze existe justamente para preservar os dados sem transformar; silver transforma — não o contrário.",
        "Conversão obrigatória para dashboard: dashboards consomem da camada gold, não da silver; silver ainda é para engenharia de dados."
      ],
      "dicaOuro": "Bronze = raw. Silver = clean + standardized. Gold = aggregated + ready for BI."
    }
  },
  {
    "id": "dp600_q39",
    "text": "Por que problemas de tamanho de arquivos em tabelas Delta podem afetar desempenho?",
    "options": [
      "Porque só dashboards sofrem esse impacto",
      "Porque tamanho de arquivo não afeta nada",
      "Porque muitos arquivos pequenos ou distribuição inadequada podem aumentar custo de leitura e processamento",
      "Porque arquivos Delta não podem ser consultados"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "O problema do 'small file' é um dos gargalos mais comuns em tabelas Delta com ingestão frequente.",
      "papoReto": "Tabelas Delta acumuladas por muitas escritas incrementais terminam com centenas ou milhares de arquivos Parquet pequenos. Cada arquivo exige uma operação de leitura separada pelo Spark; com muitos arquivos, o overhead de I/O explode. A solução é usar OPTIMIZE (compact) periodicamente para consolidar arquivos pequenos em arquivos maiores.",
      "respostaCerta": "Porque muitos arquivos pequenos ou distribuição inadequada podem aumentar custo de leitura e processamento.",
      "puloDoGato": "'Small file problem' ou 'muitos arquivos Delta' = use OPTIMIZE para compactar.",
      "cascasDeBanana": [
        "Porque só dashboards sofrem esse impacto: o impacto é no motor Spark que lê os arquivos; dashboards são afetados indiretamente via performance do modelo.",
        "Porque tamanho de arquivo não afeta nada: tamanho e número de arquivos são fatores críticos de performance em Delta.",
        "Porque arquivos Delta não podem ser consultados: arquivos Delta (Parquet + log) são consultáveis tanto por Spark quanto pelo SQL endpoint."
      ],
      "dicaOuro": "Muitos arquivos pequenos = overhead de I/O. Use OPTIMIZE/VACUUM para compactar e limpar tabelas Delta."
    }
  },
  {
    "id": "dp600_q40",
    "text": "Ao investigar uma consulta SQL lenta em warehouse, qual é uma abordagem inicial adequada?",
    "options": [
      "Desativar o workspace",
      "Trocar SQL por PowerPoint",
      "Remover todas as tabelas",
      "Revisar desenho da consulta, volume lido e possíveis gargalos no acesso aos dados"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Diagnosticar consultas SQL lentas no Warehouse começa por entender o que está sendo lido e como.",
      "papoReto": "Ao investigar performance de consulta T-SQL no Warehouse, o primeiro passo é revisar o desenho da query: há JOINs desnecessários, SELECT *, subqueries redundantes? Em seguida, avaliar o volume de dados lido (filtros eficientes?) e identificar possíveis gargalos (estatísticas desatualizadas, ausência de índices/partições).",
      "respostaCerta": "Revisar desenho da consulta, volume lido e possíveis gargalos no acesso aos dados.",
      "puloDoGato": "SQL lento no Warehouse: revise a query (JOINs, filtros, SELECT *) antes de qualquer mudança de infraestrutura.",
      "cascasDeBanana": [
        "Desativar o workspace: desativar o ambiente derruba tudo para todos — não é diagnóstico nem solução.",
        "Trocar SQL por PowerPoint: PowerPoint é ferramenta de apresentação; não substitui consultas SQL.",
        "Remover todas as tabelas: remover tabelas elimina os dados — o oposto do que se quer ao otimizar."
      ],
      "dicaOuro": "SQL lento: 1) revise a query, 2) veja o volume lido, 3) atualize estatísticas. Mude infraestrutura só se necessário."
    }
  },
  {
    "id": "dp600_q41",
    "text": "Qual benefício prático uma hierarquia bem modelada oferece em relatórios analíticos?",
    "options": [
      "Facilitar navegação drill-down e exploração coerente dos níveis de detalhe",
      "Substituir medidas",
      "Eliminar relações",
      "Remover necessidade de refresh"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "Hierarquias em modelos semânticos guiam o usuário do macro ao micro de forma intuitiva.",
      "papoReto": "Uma hierarquia bem definida (ex.: Ano > Trimestre > Mês > Dia na dimensão de data) permite que o usuário faça drill-down em visuais do Power BI de forma coerente e sem erros de filtro. Sem a hierarquia, o usuário teria que aplicar filtros manuais e perderia a navegação guiada.",
      "respostaCerta": "Facilitar navegação drill-down e exploração coerente dos níveis de detalhe.",
      "puloDoGato": "'Drill-down', 'navegar do nível geral para o detalhe', 'hierarquia temporal' = hierarquia no modelo.",
      "cascasDeBanana": [
        "Substituir medidas: hierarquias organizam a navegação; medidas DAX calculam os valores — funções complementares, não substitutas.",
        "Eliminar relações: hierarquias são construídas dentro de uma dimensão e dependem dos relacionamentos existirem.",
        "Remover necessidade de refresh: refresh atualiza os dados; hierarquias são estrutura do modelo — sem relação direta."
      ],
      "dicaOuro": "Hierarquia = caminho de drill-down definido. Sem ela, o usuário navega às cegas no relatório."
    }
  },
  {
    "id": "dp600_q42",
    "text": "Em termos gerais, o que um engenheiro deve buscar ao otimizar DAX?",
    "options": [
      "Reduzir complexidade desnecessária e melhorar eficiência das expressões conforme o padrão de consulta",
      "Evitar qualquer contexto de filtro",
      "Criar medidas longas sem necessidade",
      "Usar sempre colunas calculadas em vez de medidas"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "DAX otimizado é DAX que calcula o resultado certo no menor tempo possível.",
      "papoReto": "Otimizar DAX significa evitar complexidade desnecessária: preferir SUMX/CALCULATE simples a fórmulas aninhadas desnecessárias, usar medidas em vez de colunas calculadas para agregações, e verificar se o padrão de consulta do relatório favorece o que está sendo calculado. O DAX Studio (VertiPaq Analyzer) é a ferramenta para medir e melhorar.",
      "respostaCerta": "Reduzir complexidade desnecessária e melhorar eficiência das expressões conforme o padrão de consulta.",
      "puloDoGato": "DAX lento: simplifique a expressão, prefira medidas a colunas calculadas, e meça com DAX Studio.",
      "cascasDeBanana": [
        "Evitar qualquer contexto de filtro: contexto de filtro é o mecanismo central do DAX — evitá-lo tornaria todas as medidas erradas.",
        "Criar medidas longas sem necessidade: medidas longas e aninhadas desnecessariamente são a principal causa de DAX lento.",
        "Usar sempre colunas calculadas em vez de medidas: colunas calculadas são materializadas para cada linha e consomem mais memória; medidas são calculadas sob demanda."
      ],
      "dicaOuro": "DAX otimizado: medidas simples, CALCULATE direto, sem aninhamento desnecessário. Meça com DAX Studio."
    }
  },
  {
    "id": "dp600_q43",
    "text": "Para que o XMLA endpoint é relevante no contexto do DP-600?",
    "options": [
      "Para substituir o OneLake",
      "Para criar notebooks automaticamente",
      "Para copiar arquivos CSV manualmente",
      "Para gerenciamento avançado e implantação de modelos semânticos em escala empresarial"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "O XMLA endpoint permite gerenciar modelos semânticos com ferramentas externas de nível enterprise.",
      "papoReto": "O XMLA endpoint expõe o modelo semântico (Power BI/Fabric) para ferramentas externas como SQL Server Management Studio, Tabular Editor e scripts TMSL/PowerShell. Isso habilita operações avançadas em escala: deploy automatizado, scripting de tabelas e partições, atualização seletiva de partições e integração com CI/CD.",
      "respostaCerta": "Para gerenciamento avançado e implantação de modelos semânticos em escala empresarial.",
      "puloDoGato": "'Gerenciar modelo com SSMS/Tabular Editor', 'CI/CD de modelos semânticos' = XMLA endpoint.",
      "cascasDeBanana": [
        "Para substituir o OneLake: o XMLA endpoint conecta ferramentas ao modelo semântico; o OneLake é o armazenamento de dados — papéis distintos.",
        "Para criar notebooks automaticamente: notebooks são criados manualmente ou via API do Fabric, não pelo XMLA endpoint.",
        "Para copiar arquivos CSV manualmente: o XMLA endpoint trabalha com modelos tabulares, não com movimentação de arquivos CSV."
      ],
      "dicaOuro": "XMLA endpoint = porta de entrada do modelo semântico para ferramentas externas (SSMS, Tabular Editor, CI/CD)."
    }
  },
  {
    "id": "dp600_q44",
    "text": "Qual é o objetivo principal de deployment pipelines no ciclo de vida analítico?",
    "options": [
      "Organizar e promover conteúdo entre ambientes, como desenvolvimento, teste e produção",
      "Remover dependências entre itens",
      "Gerar RLS automaticamente",
      "Substituir pipelines de dados"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "Deployment pipelines do Fabric formalizam o ciclo Dev → Test → Prod para artefatos analíticos.",
      "papoReto": "O deployment pipeline do Fabric organiza os workspaces em estágios (Desenvolvimento, Teste, Produção) e permite promover conteúdo entre eles com um clique — datasets, relatórios, dataflows, lakehouses. Deployment rules permitem ajustar parâmetros de conexão automaticamente em cada estágio, sem edição manual.",
      "respostaCerta": "Organizar e promover conteúdo entre ambientes, como desenvolvimento, teste e produção.",
      "puloDoGato": "'Promover artefato de Dev para Test/Prod' = deployment pipeline. 'Copiar dados' = data pipeline.",
      "cascasDeBanana": [
        "Remover dependências entre itens: o deployment pipeline não altera dependências; ele replica o estado de um estágio para o próximo.",
        "Gerar RLS automaticamente: RLS é configurada manualmente no modelo; deployment pipelines não criam regras de segurança.",
        "Substituir pipelines de dados: data pipelines movem dados; deployment pipelines promovem artefatos — completamente diferentes."
      ],
      "dicaOuro": "Deployment pipeline = Dev → Test → Prod para artefatos. Data pipeline = mover dados de A para B."
    }
  },
  {
    "id": "dp600_q45",
    "text": "Por que integrar versionamento ao desenvolvimento analítico pode ser valioso?",
    "options": [
      "Porque substitui workspace roles",
      "Porque melhora rastreabilidade de mudanças, colaboração e controle do ciclo de vida",
      "Porque elimina necessidade de testes",
      "Porque impede rollback"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "Versionamento (Git) aplicado ao desenvolvimento analítico é uma prática de engenharia de software que o Fabric suporta nativamente.",
      "papoReto": "O Fabric suporta integração com Git (Azure DevOps ou GitHub) para workspaces. Com versionamento, cada mudança em notebooks, dataflows e modelos é rastreável, pode ser revertida e fica documentada em commits. Isso melhora colaboração (múltiplos desenvolvedores sem conflito), rastreabilidade e controle do ciclo de vida.",
      "respostaCerta": "Porque melhora rastreabilidade de mudanças, colaboração e controle do ciclo de vida.",
      "puloDoGato": "'Rastrear mudanças', 'reverter alteração', 'histórico de versões' em artefatos Fabric = integração com Git.",
      "cascasDeBanana": [
        "Porque substitui workspace roles: roles de workspace controlam permissões de acesso; versionamento controla mudanças de código — funções distintas.",
        "Porque elimina necessidade de testes: versionamento e testes são práticas complementares, não excludentes.",
        "Porque impede rollback: é o contrário — versionamento habilita rollback ao permitir voltar para qualquer commit anterior."
      ],
      "dicaOuro": "Git + Fabric = rastreabilidade, reverter mudanças e colaboração sem conflito entre engenheiros."
    }
  },
  {
    "id": "dp600_q46",
    "text": "O que diferencia dynamic row-level security de uma configuração fixa por papel?",
    "options": [
      "O filtro pode ser determinado dinamicamente com base na identidade do usuário e em regras do modelo",
      "Ela remove a necessidade de Entra ID",
      "Ela substitui OLS",
      "Ela funciona só em notebooks"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Segurança e governança",
    "explanation": {
      "intro": "RLS dinâmica elimina a necessidade de criar uma função por usuário — a regra usa a identidade de quem está acessando.",
      "papoReto": "Na RLS estática, o admin cria funções com filtros fixos (ex.: 'Região = Sul'). Na RLS dinâmica, a regra usa USERPRINCIPALNAME() ou USERNAME() para comparar com uma coluna da tabela — cada usuário vê automaticamente apenas os dados mapeados ao seu e-mail. Isso escala para centenas de usuários sem criar centenas de funções.",
      "respostaCerta": "O filtro pode ser determinado dinamicamente com base na identidade do usuário e em regras do modelo.",
      "puloDoGato": "RLS que usa USERPRINCIPALNAME() ou USERNAME() = RLS dinâmica. Escala para qualquer número de usuários.",
      "cascasDeBanana": [
        "Ela remove a necessidade de Entra ID: RLS dinâmica usa o Entra ID justamente para identificar o usuário logado — não o remove.",
        "Ela substitui OLS: OLS controla visibilidade de colunas/tabelas; RLS controla visibilidade de linhas — camadas complementares.",
        "Ela funciona só em notebooks: RLS é configurada no modelo semântico (Power BI/Fabric) e aplica em todos os relatórios que o consomem."
      ],
      "dicaOuro": "RLS dinâmica = USERPRINCIPALNAME() no filtro DAX. Sem criar uma função por usuário."
    }
  },
  {
    "id": "dp600_q47",
    "text": "Ao compartilhar dados entre equipes, qual princípio deve orientar a decisão?",
    "options": [
      "Evitar qualquer compartilhamento sempre",
      "Compartilhar tudo com todos",
      "Ignorar classificação dos dados",
      "Equilibrar acesso necessário para análise com governança, segurança e minimização de exposição"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Segurança e governança",
    "explanation": {
      "intro": "Compartilhamento de dados entre equipes deve equilibrar utilidade analítica com proteção e conformidade.",
      "papoReto": "O princípio correto ao compartilhar dados é: dar acesso suficiente para que a equipe realize a análise necessária, sem expor mais do que é necessário. Isso envolve sensitivity labels, RLS/OLS quando necessário, e respeito às políticas de governança — nem bloqueio total (prejudica análise) nem abertura irrestrita (risco de vazamento).",
      "respostaCerta": "Equilibrar acesso necessário para análise com governança, segurança e minimização de exposição.",
      "puloDoGato": "Compartilhamento de dados = nem tudo nem nada. O princípio é minimizar exposição mantendo utilidade analítica.",
      "cascasDeBanana": [
        "Evitar qualquer compartilhamento sempre: sem compartilhamento, análises entre equipes se tornam impossíveis — não é uma postura prática.",
        "Compartilhar tudo com todos: exposição irrestrita viola privacidade, regulamentos (LGPD, GDPR) e princípios de segurança.",
        "Ignorar classificação dos dados: a classificação (sensitivity labels) é exatamente o mecanismo que guia o que pode ser compartilhado e como."
      ],
      "dicaOuro": "Compartilhar dados = só o necessário + proteções adequadas + respeitar classificação (sensitivity labels)."
    }
  },
  {
    "id": "dp600_q48",
    "text": "Ao planejar uma solução DP-600, por que a escolha entre lakehouse e warehouse não deve ser feita apenas por preferência pessoal?",
    "options": [
      "Porque segurança não depende dessa decisão",
      "Porque só o nome muda",
      "Porque a decisão deve considerar padrão de consumo, tipo de dado, experiência de transformação e requisitos analíticos",
      "Porque ambos são sempre idênticos"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Lakehouse e Warehouse têm trade-offs diferentes que tornam a escolha dependente de contexto.",
      "papoReto": "Lakehouse é ideal quando há mistura de arquivos brutos e tabelas Delta, transformações por código Spark e consumo por múltiplas engines (Spark, SQL read-only, Direct Lake). Warehouse é ideal quando o requisito central é T-SQL pleno com escrita, tabelas relacionais gerenciadas e experiência de DW clássico. A decisão precisa considerar o padrão de consumo da equipe, o tipo de dado e o perfil das transformações.",
      "respostaCerta": "Porque a decisão deve considerar padrão de consumo, tipo de dado, experiência de transformação e requisitos analíticos.",
      "puloDoGato": "Escolha entre Lakehouse e Warehouse nunca é por preferência — avalie: quem vai consumir e como? Qual linguagem? Precisa de escrita SQL?",
      "cascasDeBanana": [
        "Porque segurança não depende dessa decisão: a escolha afeta a segurança sim — cada item tem mecanismos de controle de acesso ligeiramente diferentes.",
        "Porque só o nome muda: Lakehouse e Warehouse têm arquiteturas, motores e capacidades diferentes; não é cosmético.",
        "Porque ambos são sempre idênticos: são itens distintos do Fabric com capacidades, sintaxes e casos de uso diferentes."
      ],
      "dicaOuro": "Lakehouse = Spark + SQL read + Delta. Warehouse = T-SQL full (leitura e escrita). Decida pelo uso, não pela preferência."
    }
  },
  {
    "id": "dp600_q49",
    "text": "Em um cenário enterprise, por que avaliar Import, DirectQuery e Direct Lake é essencial?",
    "options": [
      "Porque todos têm comportamento igual",
      "Porque o modo de armazenamento não afeta relatórios",
      "Porque cada modo traz trade-offs diferentes de latência, desempenho, atualização e volume de dados",
      "Porque DAX deixa de importar"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "Import, DirectQuery e Direct Lake são os três modos de armazenamento do modelo semântico no Power BI/Fabric.",
      "papoReto": "Import: copia os dados para a memória — máxima velocidade, mas dados envelhecem entre refreshes e há limite de tamanho. DirectQuery: consulta a fonte em tempo real — sempre atualizado, mas mais lento e dependente da performance da fonte. Direct Lake: lê Delta direto do OneLake — velocidade próxima ao Import com dados sempre atuais, mas requer Fabric e dados no OneLake. Cada modo tem trade-offs distintos.",
      "respostaCerta": "Porque cada modo traz trade-offs diferentes de latência, desempenho, atualização e volume de dados.",
      "puloDoGato": "Import = rápido, dados antigos. DirectQuery = tempo real, lento. Direct Lake = rápido E tempo real (Fabric only).",
      "cascasDeBanana": [
        "Porque todos têm comportamento igual: cada modo tem impacto completamente diferente em performance, frescor dos dados e limites de volume.",
        "Porque o modo de armazenamento não afeta relatórios: o modo de armazenamento é uma das decisões que mais impacta a experiência do relatório.",
        "Porque DAX deixa de importar: DAX funciona nos três modos; o modo de armazenamento não elimina a necessidade de DAX."
      ],
      "dicaOuro": "Import ≠ DirectQuery ≠ Direct Lake. Conheça os trade-offs antes de decidir o modo do modelo."
    }
  },
  {
    "id": "dp600_q50",
    "text": "Em modelos semânticos de escala empresarial, qual prática tende a melhorar sustentabilidade da solução?",
    "options": [
      "Evitar documentação",
      "Misturar fatos e dimensões aleatoriamente",
      "Permitir mudanças sem padrão",
      "Padronizar modelagem, nomenclatura, governança e estratégia de atualização ao longo do ciclo de vida"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "Em modelos enterprise, a sustentabilidade a longo prazo depende de padronização desde o início.",
      "papoReto": "Sem padrões definidos, cada desenvolvedor cria tabelas, medidas e nomenclaturas de forma diferente — e após 1 ano o modelo se torna impossível de manter. Padronizar (star schema, convenções de nomenclatura, estratégia de refresh, quem certifica artefatos) é o que permite que a solução evolua sem se tornar uma dívida técnica.",
      "respostaCerta": "Padronizar modelagem, nomenclatura, governança e estratégia de atualização ao longo do ciclo de vida.",
      "puloDoGato": "'Sustentabilidade enterprise', 'manutenção a longo prazo', 'múltiplos desenvolvedores no mesmo modelo' = padrões desde o início.",
      "cascasDeBanana": [
        "Evitar documentação: sem documentação, ninguém sabe o que cada medida faz — modelos complexos se tornam caixas-pretas.",
        "Misturar fatos e dimensões aleatoriamente: mistura de fatos e dimensões cria relacionamentos ambíguos e medidas erradas.",
        "Permitir mudanças sem padrão: mudanças sem padrão acumulam dívida técnica e geram inconsistências entre relatórios."
      ],
      "dicaOuro": "Modelo enterprise sustentável = padrão de nomenclatura + star schema + estratégia de refresh + artefatos certificados."
    }
  },
  {
    "id": "dp600_q51",
    "text": "Antes de alterar uma tabela usada por vários relatórios e modelos, o que deve ser feito?",
    "options": [
      "Alterar direto em produção sem revisão",
      "Ignorar lineage view",
      "Excluir relatórios antigos",
      "Realizar análise de impacto das dependências downstream para evitar que mudanças quebrem consumidores analíticos"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "Alterar uma tabela compartilhada sem análise de impacto é uma das causas mais comuns de quebra silenciosa em ambientes analíticos.",
      "papoReto": "Antes de modificar uma tabela usada por vários consumidores, o engenheiro deve usar a lineage view para mapear todos os artefatos downstream (outros dataflows, modelos semânticos, relatórios) que dependem dela. Só após entender o impacto é possível planejar a mudança sem quebrar consumidores.",
      "respostaCerta": "Realizar análise de impacto das dependências downstream para evitar que mudanças quebrem consumidores analíticos.",
      "puloDoGato": "Mudança em tabela compartilhada = lineage view primeiro. Descubra quem depende dela antes de alterar.",
      "cascasDeBanana": [
        "Alterar direto em produção sem revisão: mudança direta em produção pode quebrar todos os relatórios que dependem da tabela instantaneamente.",
        "Ignorar lineage view: ignorar a lineage é ignorar o mapa de impacto — muda-se no escuro.",
        "Excluir relatórios antigos: excluir relatórios não resolve o problema; a análise de impacto deve vir antes de qualquer ação."
      ],
      "dicaOuro": "Antes de mudar tabela compartilhada: lineage view → mapeie dependências → planeje a mudança → valide em Dev antes de ir a Prod."
    }
  },
  {
    "id": "dp600_q52",
    "text": "Por que governança de capacidade é importante em soluções Fabric em escala?",
    "options": [
      "Porque uso inadequado de capacidade pode afetar desempenho, concorrência de cargas e custo operacional",
      "Porque não há impacto em performance",
      "Porque segurança substitui capacidade",
      "Porque capacidade só afeta dashboards estáticos"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Segurança e governança",
    "explanation": {
      "intro": "Capacidade no Fabric é o recurso de computação compartilhado por todos os workspaces — e por isso precisa ser governada.",
      "papoReto": "No Fabric, a capacidade (SKU F ou P) é o pool de CUs (Capacity Units) que todos os jobs (pipelines, Spark, refreshes, queries) consomem. Sem governança de capacidade, uma carga pesada pode consumir todos os CUs e degradar o desempenho das demais cargas (throttling). Monitorar com Fabric Capacity Metrics é essencial.",
      "respostaCerta": "Porque uso inadequado de capacidade pode afetar desempenho, concorrência de cargas e custo operacional.",
      "puloDoGato": "'Throttling', 'carga pesada afetando outros jobs', 'monitorar CU usage' = governança de capacidade.",
      "cascasDeBanana": [
        "Porque não há impacto em performance: exceder a capacidade causa throttling — jobs ficam enfileirados ou lentos.",
        "Porque segurança substitui capacidade: segurança (RLS, funções) e capacidade (computação) são camadas completamente independentes.",
        "Porque capacidade só afeta dashboards estáticos: capacidade afeta todos os workloads — Spark, pipelines, refreshes e queries SQL."
      ],
      "dicaOuro": "Capacidade Fabric = pool compartilhado de CUs. Sem governança, uma carga pesada afeta todos os outros."
    }
  },
  {
    "id": "dp600_q53",
    "text": "Em um ambiente corporativo, por que revisar configurações do Fabric admin portal faz parte da governança?",
    "options": [
      "Porque essas configurações influenciam recursos habilitados, segurança, integração e controle do ambiente",
      "Porque não impactam workspaces",
      "Porque substituem RLS",
      "Porque servem apenas para trocar tema visual"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Segurança e governança",
    "explanation": {
      "intro": "O Fabric admin portal é o centro de controle do ambiente Fabric para toda a organização.",
      "papoReto": "No Fabric admin portal, o administrador define quais recursos estão habilitados para todos os usuários (ex.: exportar dados, integração com Git, compartilhamento externo), controla integrações e configura políticas de segurança globais. Essas configurações afetam todo o ambiente — por isso revisá-las é parte da governança.",
      "respostaCerta": "Porque essas configurações influenciam recursos habilitados, segurança, integração e controle do ambiente.",
      "puloDoGato": "'Habilitar/desabilitar funcionalidade para toda a organização' = Fabric admin portal.",
      "cascasDeBanana": [
        "Porque não impactam workspaces: as configurações do admin portal afetam diretamente o que é possível fazer em workspaces (exportar, compartilhar, integrar).",
        "Porque substituem RLS: RLS e configurações do admin portal operam em camadas distintas; uma não substitui a outra.",
        "Porque servem apenas para trocar tema visual: tema é uma configuração menor; o admin portal define políticas de segurança e habilitação de recursos."
      ],
      "dicaOuro": "Fabric admin portal = controle central de recursos, segurança e integrações para toda a org."
    }
  },
  {
    "id": "dp600_q54",
    "text": "Por que criar ativos reutilizáveis, como modelos compartilhados e arquivos de projeto padronizados, ajuda uma equipe analítica?",
    "options": [
      "Porque elimina necessidade de versionamento",
      "Porque impede colaboração",
      "Porque acelera entrega, reduz retrabalho e promove consistência entre soluções",
      "Porque aumenta duplicação intencional"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "Ativos reutilizáveis são o equivalente de funções e bibliotecas no desenvolvimento analítico.",
      "papoReto": "Modelos compartilhados (ex.: modelo semântico corporativo reutilizado por múltiplos relatórios), dataflows centralizados e templates padronizados evitam que cada analista recrie a mesma lógica do zero. O resultado é entrega mais rápida, menos erros por retrabalho e relatórios consistentes com a mesma lógica de negócio.",
      "respostaCerta": "Porque acelera entrega, reduz retrabalho e promove consistência entre soluções.",
      "puloDoGato": "Modelos e dataflows compartilhados = uma só verdade para todos os relatórios da empresa.",
      "cascasDeBanana": [
        "Porque elimina necessidade de versionamento: ativos reutilizáveis ainda precisam de versionamento — um modelo compartilhado pode ser alterado e afetar muitos relatórios.",
        "Porque impede colaboração: é o contrário — ativos centralizados facilitam colaboração entre equipes.",
        "Porque aumenta duplicação intencional: ativos reutilizáveis reduzem duplicação, não aumentam."
      ],
      "dicaOuro": "Modelo semântico compartilhado = uma fonte de verdade, múltiplos relatórios. Eficiência e consistência."
    }
  },
  {
    "id": "dp600_q55",
    "text": "Qual é a principal utilidade do OneLake catalog em um ambiente Fabric com muitos ativos de dados?",
    "options": [
      "Substituir o semantic model",
      "Ajudar a descobrir e localizar dados e itens analíticos disponíveis no ambiente",
      "Criar medidas DAX automaticamente",
      "Remover permissões de workspace"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Com dezenas de lakehouses, datasets e relatórios, descobrir o ativo certo exige um catálogo.",
      "papoReto": "O OneLake catalog (antigo Data hub) é a interface de descoberta do Fabric: exibe todos os artefatos disponíveis para o usuário (lakehouses, warehouses, datasets, relatórios) com metadados, endorsement e informações de acesso. Sua função é ajudar os consumidores a localizar e avaliar os ativos antes de usar.",
      "respostaCerta": "Ajudar a descobrir e localizar dados e itens analíticos disponíveis no ambiente.",
      "puloDoGato": "'Descoberta de dados', 'encontrar o dataset certo', 'ver ativos disponíveis' = OneLake catalog.",
      "cascasDeBanana": [
        "Substituir o semantic model: o catálogo lista os modelos semânticos disponíveis; não os substitui.",
        "Criar medidas DAX automaticamente: medidas são criadas manualmente ou via Copilot no editor do modelo; não pelo catálogo.",
        "Remover permissões de workspace: o catálogo mostra o que o usuário tem acesso; não altera as permissões."
      ],
      "dicaOuro": "OneLake catalog = vitrine dos dados disponíveis. Descubra, avalie (endorsed?) e acesse o ativo certo."
    }
  },
  {
    "id": "dp600_q56",
    "text": "Ao decidir entre usar lakehouse ou warehouse, qual fator deve ser considerado primeiro?",
    "options": [
      "O idioma do navegador do usuário",
      "A cor do workspace",
      "O padrão de uso analítico e o tipo de dado que será armazenado e consultado",
      "O nome do relatório final"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Escolher entre Lakehouse e Warehouse é uma decisão arquitetural baseada no padrão de uso, não em preferência.",
      "papoReto": "A decisão correta parte das perguntas: a equipe vai transformar com Spark? → Lakehouse. Os dados chegam como arquivos (Parquet, JSON, CSV)? → Lakehouse. Os analistas escrevem e modelam só em T-SQL? → Warehouse. Há mix de engenharia de dados e analytics SQL? → Considere ambos ou Lakehouse com SQL endpoint.",
      "respostaCerta": "O padrão de uso analítico e o tipo de dado que será armazenado e consultado.",
      "puloDoGato": "Antes de Lakehouse ou Warehouse: pergunte 'quem consome, com qual linguagem, e que tipo de dado chega?'",
      "cascasDeBanana": [
        "O idioma do navegador do usuário: idioma de interface não tem relação com a arquitetura de armazenamento.",
        "A cor do workspace: cor é uma personalização visual; não influencia nem a arquitetura nem a escolha do item.",
        "O nome do relatório final: o nome do relatório vem depois; a decisão arquitetural vem antes."
      ],
      "dicaOuro": "Lakehouse vs Warehouse: decida pelo padrão de transformação + linguagem da equipe + tipo de dado. Não pelo nome bonito."
    }
  },
  {
    "id": "dp600_q57",
    "text": "Se uma tabela contém valores nulos e duplicados em colunas críticas de negócio, qual deve ser uma preocupação inicial do engenheiro analítico?",
    "options": [
      "Publicar imediatamente os dashboards",
      "Resolver apenas no visual do relatório",
      "Ignorar duplicidade",
      "Tratar qualidade dos dados antes de servir o conjunto para consumo analítico"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Dados com nulos e duplicatas em colunas de negócio comprometem qualquer análise construída sobre eles.",
      "papoReto": "Se uma coluna crítica (como ID do cliente ou data do pedido) tem nulos e duplicatas, as métricas calculadas sobre esses dados serão incorretas. A prioridade do engenheiro analítico é tratar a qualidade na camada de transformação (Silver da medallion, Dataflow Gen2 ou Notebook) antes de servir os dados para consumo.",
      "respostaCerta": "Tratar qualidade dos dados antes de servir o conjunto para consumo analítico.",
      "puloDoGato": "Nulos e duplicatas em colunas críticas = tratar na camada de transformação, não no visual.",
      "cascasDeBanana": [
        "Publicar imediatamente os dashboards: publicar dados sujos gera relatórios incorretos — a diretoria toma decisões erradas.",
        "Resolver apenas no visual do relatório: ajustar no visual não limpa o dado; a próxima consulta retorna o mesmo dado sujo.",
        "Ignorar duplicidade: duplicatas inflam métricas (soma, contagem) e invalidam análises inteiras."
      ],
      "dicaOuro": "Qualidade de dado = responsabilidade do engenheiro, não do analista de relatório. Trate na fonte, não no visual."
    }
  },
  {
    "id": "dp600_q58",
    "text": "Em consultas analíticas, qual operação SQL é usada para restringir linhas com base em uma condição?",
    "options": [
      "ORDER BY",
      "JOIN",
      "GROUP BY",
      "WHERE"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Em SQL, cada cláusula tem um papel específico: filtrar, agrupar, ordenar ou combinar.",
      "papoReto": "WHERE restringe quais linhas são incluídas no resultado antes de qualquer agrupamento. É a cláusula de filtro de linha: `SELECT * FROM vendas WHERE regiao = 'Sul'` retorna só as linhas onde a região é Sul.",
      "respostaCerta": "WHERE — filtra linhas com base em uma condição antes de agrupar ou ordenar.",
      "puloDoGato": "'Restringir linhas com base em condição' = WHERE. Depois do GROUP BY (filtrar grupos) = HAVING.",
      "cascasDeBanana": [
        "ORDER BY: define a ordem de exibição das linhas no resultado; não filtra nada.",
        "JOIN: combina linhas de duas tabelas com base em uma chave comum; não filtra por condição.",
        "GROUP BY: agrupa linhas com base em colunas para calcular agregações; não filtra linhas individuais."
      ],
      "dicaOuro": "WHERE = filtro de linha (antes do GROUP BY). HAVING = filtro de grupo (depois do GROUP BY)."
    }
  },
  {
    "id": "dp600_q59",
    "text": "Quando você precisa combinar dados de clientes e vendas usando uma chave comum, qual conceito é normalmente usado?",
    "options": [
      "Sensitivity label",
      "Bookmark",
      "Endorsement",
      "Join"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Para combinar dados de duas tabelas diferentes usando uma coluna em comum, usa-se JOIN em SQL.",
      "papoReto": "Um JOIN combina linhas de duas tabelas com base numa chave compartilhada: `SELECT c.nome, v.valor FROM clientes c INNER JOIN vendas v ON c.id = v.id_cliente`. O tipo mais comum é INNER JOIN (só retorna correspondências), mas há LEFT, RIGHT e FULL JOIN para cenários diferentes.",
      "respostaCerta": "Join — combina tabelas usando uma chave comum entre elas.",
      "puloDoGato": "'Combinar dados de duas tabelas por chave comum' = JOIN. 'Filtrar linhas por condição' = WHERE.",
      "cascasDeBanana": [
        "Sensitivity label: classifica e protege dados; não combina tabelas.",
        "Bookmark: salva estado de filtros em relatório Power BI; não é conceito SQL.",
        "Endorsement: marca artefato como confiável; não combina dados."
      ],
      "dicaOuro": "JOIN = combina tabelas por chave. INNER = só matches. LEFT = todos da esquerda + matches da direita."
    }
  },
  {
    "id": "dp600_q60",
    "text": "Em um star schema, por que dimensões como Produto, Cliente e Data costumam ficar separadas da tabela fato?",
    "options": [
      "Para impedir relacionamentos",
      "Para organizar atributos descritivos e facilitar análise por diferentes perspectivas",
      "Para substituir DAX",
      "Para eliminar necessidade de refresh"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "No star schema, cada dimensão representa uma perspectiva de análise diferente sobre os fatos.",
      "papoReto": "Produto, Cliente e Data ficam em tabelas separadas da fato porque cada uma representa uma forma diferente de fatiar e analisar as métricas. Com dimensões separadas, o usuário pode filtrar vendas por categoria de produto, por região do cliente, ou por trimestre — cada uma independentemente, na mesma fato central.",
      "respostaCerta": "Para organizar atributos descritivos e facilitar análise por diferentes perspectivas.",
      "puloDoGato": "Cada dimensão = uma perspectiva de análise. Produto, Cliente, Data ficam separadas para que o usuário navegue por elas independentemente.",
      "cascasDeBanana": [
        "Para impedir relacionamentos: é o contrário — dimensões separadas justamente criam os relacionamentos com a fato.",
        "Para substituir DAX: DAX calcula medidas; as dimensões são estrutura de dados — funções distintas.",
        "Para eliminar necessidade de refresh: refresh atualiza os dados; dimensões são design do modelo — sem relação."
      ],
      "dicaOuro": "Cada dimensão = uma lente de análise. Fato no centro, dimensões ao redor = análise em qualquer direção."
    }
  },
  {
    "id": "dp600_q61",
    "text": "Qual é uma característica típica de uma medida DAX em comparação com uma coluna calculada?",
    "options": [
      "A medida define permissões do workspace",
      "A medida substitui a tabela fato",
      "A medida é avaliada conforme o contexto da consulta no relatório",
      "A medida cria relacionamento físico"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "A diferença fundamental entre medida e coluna calculada está em quando e onde o cálculo acontece.",
      "papoReto": "Uma coluna calculada é avaliada linha a linha no momento do refresh e materializada na tabela. Uma medida DAX é avaliada dinamicamente no momento da consulta, respeitando o contexto de filtro atual do relatório (segmentações, filtros de página, linha do visual). Por isso medidas respondem dinamicamente ao que o usuário seleciona.",
      "respostaCerta": "A medida é avaliada conforme o contexto da consulta no relatório.",
      "puloDoGato": "Medida = calculada em tempo de consulta, responde ao filtro. Coluna calculada = calculada no refresh, fixa por linha.",
      "cascasDeBanana": [
        "A medida define permissões do workspace: permissões são configuradas nas funções do workspace (Admin/Member/Contributor/Viewer).",
        "A medida substitui a tabela fato: a tabela fato armazena os dados; a medida calcula sobre eles — não há substituição.",
        "A medida cria relacionamento físico: relacionamentos são definidos no editor de modelo; medidas calculam sobre eles."
      ],
      "dicaOuro": "Medida = dinâmica, responde ao contexto de filtro. Coluna calculada = estática, calculada no refresh."
    }
  },
  {
    "id": "dp600_q62",
    "text": "Por que não é recomendável conceder privilégios elevados de workspace a todos os usuários?",
    "options": [
      "Porque viewers podem editar notebooks",
      "Porque isso aumenta risco operacional e viola o princípio de menor privilégio",
      "Porque o Fabric não suporta múltiplos usuários",
      "Porque apenas admins podem visualizar relatórios"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Segurança e governança",
    "explanation": {
      "intro": "Dar mais acesso do que o necessário é tão problemático quanto dar menos acesso do que o necessário.",
      "papoReto": "Dar privilégios elevados (Admin, Member) a todos os usuários significa que qualquer pessoa pode excluir conteúdo, alterar configurações, publicar dados incorretos ou exportar dados sensíveis. Isso viola o least privilege e cria risco operacional real — um acidente ou ato mal-intencionado afeta todo o workspace.",
      "respostaCerta": "Porque isso aumenta risco operacional e viola o princípio de menor privilégio.",
      "puloDoGato": "'Risco de alguém excluir ou alterar o que não deveria' = acesso além do necessário = violação de least privilege.",
      "cascasDeBanana": [
        "Porque viewers podem editar notebooks: viewers não têm permissão de edição — é justamente para isso que funções diferentes existem.",
        "Porque o Fabric não suporta múltiplos usuários: o Fabric suporta múltiplos usuários com diferentes roles por design.",
        "Porque apenas admins podem visualizar relatórios: qualquer função (incluindo Viewer) pode ver relatórios publicados no workspace."
      ],
      "dicaOuro": "Acesso elevado desnecessário = risco de exclusão acidental, vazamento de dados e violação de compliance."
    }
  },
  {
    "id": "dp600_q63",
    "text": "Um refresh falhou antes do horário de abertura dos relatórios para a diretoria. Qual deve ser a primeira ação?",
    "options": [
      "Ignorar porque o erro foi temporário",
      "Excluir o modelo",
      "Remover o workspace",
      "Verificar a causa da falha e o impacto nos consumidores antes de aplicar correções"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "Uma falha de refresh antes de um evento crítico exige diagnóstico rápido e comunicação proativa.",
      "papoReto": "O primeiro passo é verificar o erro no Monitor Hub do Fabric (causa: credencial expirada, timeout, fonte indisponível?) e avaliar o impacto: os relatórios da diretoria mostrarão dados desatualizados ou erros? Com esse diagnóstico, o engenheiro decide se aplica correção imediata, executa refresh manual ou comunica o impacto antes do horário da reunião.",
      "respostaCerta": "Verificar a causa da falha e o impacto nos consumidores antes de aplicar correções.",
      "puloDoGato": "Refresh falhou: 1) Monitor Hub para ver o erro, 2) avalie impacto, 3) corrija ou comunique.",
      "cascasDeBanana": [
        "Ignorar porque o erro foi temporário: erros 'temporários' podem se repetir — ignorar sem investigar deixa a solução frágil.",
        "Excluir o modelo: excluir o modelo destrói toda a solução sem resolver a causa raiz.",
        "Remover o workspace: remover o workspace elimina todo o conteúdo publicado para a diretoria."
      ],
      "dicaOuro": "Falha de refresh = Monitor Hub → causa → impacto → correção → refresh manual se necessário."
    }
  },
  {
    "id": "dp600_q64",
    "text": "Por que conhecer dependências entre lakehouse, modelo semântico e relatório é importante?",
    "options": [
      "Porque relatórios não usam modelos",
      "Porque uma mudança em um item pode afetar os demais ativos que dependem dele",
      "Porque lineage não tem valor",
      "Porque dependência só existe em notebooks"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "Uma solução Fabric é uma cadeia de dependências: alterar um elo pode quebrar os seguintes.",
      "papoReto": "Uma mudança no schema de uma tabela no Lakehouse pode quebrar o dataflow que a lê, o modelo semântico que depende desse dataflow e todos os relatórios baseados no modelo. Entender o grafo de dependências (via lineage view) é essencial para prever o impacto antes de qualquer mudança.",
      "respostaCerta": "Porque uma mudança em um item pode afetar os demais ativos que dependem dele.",
      "puloDoGato": "Lakehouse → Dataflow → Modelo → Relatório. Mude o lakehouse sem cuidado e pode quebrar tudo downstream.",
      "cascasDeBanana": [
        "Porque relatórios não usam modelos: relatórios do Power BI são construídos sobre modelos semânticos — a dependência é central.",
        "Porque lineage não tem valor: lineage view é exatamente a ferramenta para enxergar e gerenciar essas dependências.",
        "Porque dependência só existe em notebooks: dependências existem entre todos os itens Fabric: lakehouses, dataflows, pipelines, modelos e relatórios."
      ],
      "dicaOuro": "Mude Lakehouse → verifique dataflows → modelos → relatórios. Lineage view mostra o caminho completo."
    }
  },
  {
    "id": "dp600_q65",
    "text": "Em um warehouse, quando o uso de views pode ser útil?",
    "options": [
      "Quando não há tabelas",
      "Quando se quer substituir permissões",
      "Quando se deseja simplificar acesso lógico aos dados e reaproveitar consultas padronizadas",
      "Quando o objetivo é criar medidas DAX"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Views no Warehouse do Fabric funcionam como camadas lógicas sobre as tabelas físicas.",
      "papoReto": "Uma view no Warehouse encapsula uma consulta T-SQL complexa (com JOINs, filtros, cálculos) e a expõe como se fosse uma tabela simples. Isso permite que os analistas consultem a view com SELECT * sem precisar reescrever a lógica toda vez — e o desenvolvedor atualiza a lógica uma única vez na view.",
      "respostaCerta": "Quando se deseja simplificar acesso lógico aos dados e reaproveitar consultas padronizadas.",
      "puloDoGato": "View = consulta salva reutilizável. Simplifica o acesso sem duplicar a lógica.",
      "cascasDeBanana": [
        "Quando não há tabelas: views são construídas sobre tabelas; não fazem sentido sem elas.",
        "Quando se quer substituir permissões: permissões no Warehouse são concedidas em nível de objeto (tabela/view); a view não substitui permissões.",
        "Quando o objetivo é criar medidas DAX: medidas DAX são criadas no modelo semântico, não no Warehouse."
      ],
      "dicaOuro": "View = abstração lógica sobre tabelas. Escreva a consulta complexa uma vez, reutilize de qualquer lugar."
    }
  },
  {
    "id": "dp600_q66",
    "text": "Em cenários analíticos, por que uma estrutura desnormalizada pode ser considerada?",
    "options": [
      "Para simplificar consultas e potencialmente melhorar desempenho de consumo analítico",
      "Para eliminar governança",
      "Para impedir agregações",
      "Para dificultar entendimento do modelo"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Desnormalização é uma técnica de modelagem que troca a pureza relacional por performance de leitura.",
      "papoReto": "Em bancos normalizados (3NF), muitas tabelas exigem muitos JOINs em cada consulta. Uma estrutura desnormalizada consolida atributos de múltiplas tabelas numa só, eliminando JOINs e reduzindo o custo de leitura — à custa de alguma redundância. Em analytics, onde leitura domina sobre escrita, isso frequentemente melhora performance.",
      "respostaCerta": "Para simplificar consultas e potencialmente melhorar desempenho de consumo analítico.",
      "puloDoGato": "Desnormalizado = menos JOINs + leitura mais rápida. Trade-off: mais redundância de dados.",
      "cascasDeBanana": [
        "Para eliminar governança: estrutura de tabela (normalizada ou não) não afeta governança de acesso.",
        "Para impedir agregações: é o contrário — estrutura desnormalizada facilita agregações por já consolidar os dados.",
        "Para dificultar entendimento do modelo: tabelas consolidadas são frequentemente mais fáceis de entender do que modelos com dezenas de JOINs."
      ],
      "dicaOuro": "Desnormalizado no analytics = menos JOINs, consulta mais rápida. Normalizado = mais integridade, mais JOINs."
    }
  },
  {
    "id": "dp600_q67",
    "text": "Qual é o objetivo de criar agregações em uma solução analítica?",
    "options": [
      "Remover necessidade de modelo",
      "Reduzir o volume consultado em determinadas análises e melhorar desempenho em cenários apropriados",
      "Aumentar duplicidade sem controle",
      "Substituir todas as tabelas detalhadas"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Agregações pré-calculadas são uma técnica para acelerar consultas em modelos com tabelas fato muito grandes.",
      "papoReto": "Uma tabela de agregações contém dados pré-sumarizados em níveis mais altos (ex.: vendas por mês por categoria, em vez de por transação individual). Quando o relatório consulta nível mensal/categoria, o Power BI usa a tabela de agregações — muito menor que a fato — reduzindo drasticamente o volume lido. Tabelas detalhadas ainda existem para drill-down.",
      "respostaCerta": "Reduzir o volume consultado em determinadas análises e melhorar desempenho em cenários apropriados.",
      "puloDoGato": "Agregações = pré-calculam em nível alto → consultas rápidas. Detalhe ainda disponível via fallback.",
      "cascasDeBanana": [
        "Remover necessidade de modelo: as agregações complementam o modelo; não eliminam a necessidade de relacionamentos e medidas.",
        "Aumentar duplicidade sem controle: agregações são duplicação intencional e controlada de dados sumarizados para performance.",
        "Substituir todas as tabelas detalhadas: tabelas detalhadas coexistem com as de agregação — o Power BI escolhe qual usar."
      ],
      "dicaOuro": "Agregação = tabela resumida para consultas rápidas em nível alto. Fato detalhada = para drill-down profundo."
    }
  },
  {
    "id": "dp600_q68",
    "text": "Por que o blueprint da DP-600 inclui conhecimento de KQL além de SQL e DAX?",
    "options": [
      "Porque KQL substitui totalmente SQL",
      "Porque DAX deixa de ser útil",
      "Porque o engenheiro analítico pode precisar consultar e analisar diferentes tipos de ativos e experiências no ecossistema Fabric",
      "Porque KQL serve apenas para criar dashboards visuais"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No Fabric convivem três linguagens de consulta diferentes, cada uma dominando em seu contexto.",
      "papoReto": "SQL (T-SQL) é usado no Warehouse e no SQL analytics endpoint do Lakehouse. DAX é a linguagem de medidas do modelo semântico (Power BI). KQL (Kusto Query Language) é usada no Eventhouse/KQL Database, ideal para análise de séries temporais e telemetria. Um engenheiro analítico Fabric precisa transitar pelas três.",
      "respostaCerta": "Porque o engenheiro analítico pode precisar consultar e analisar diferentes tipos de ativos e experiências no ecossistema Fabric.",
      "puloDoGato": "SQL = Warehouse/Lakehouse endpoint. DAX = modelo semântico. KQL = Eventhouse/telemetria. Cada item tem sua linguagem.",
      "cascasDeBanana": [
        "Porque KQL substitui totalmente SQL: KQL é especializado em séries temporais e logs; SQL continua dominando para dados relacionais.",
        "Porque DAX deixa de ser útil: DAX é essencial para o modelo semântico — KQL não substitui DAX no contexto de Power BI.",
        "Porque KQL serve apenas para criar dashboards visuais: KQL é uma linguagem de consulta analítica para logs e telemetria; dashboards visuais são o resultado, não a função da linguagem."
      ],
      "dicaOuro": "DP-600 = SQL + DAX + KQL. Cada um no seu contexto: relacional, semântico e telemetria."
    }
  },
  {
    "id": "dp600_q69",
    "text": "Em um modelo semântico, quando a relação muitos-para-muitos exige atenção especial?",
    "options": [
      "Quando sempre melhora clareza",
      "Quando elimina necessidade de bridge table",
      "Quando pode introduzir ambiguidade de filtro e efeitos inesperados nas agregações",
      "Quando substitui medidas"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "Relacionamentos muitos-para-muitos (M:N) existem no Fabric mas exigem atenção ao comportamento de filtro.",
      "papoReto": "No Power BI, relacionamentos M:N nativos propagam filtros em ambas as direções, o que pode causar duplicação de valores em agregações e resultados inesperados quando o usuário filtra por uma das tabelas. É por isso que muitos-para-muitos exigem atenção especial: em muitos casos, uma bridge table com relacionamentos 1:N resolve o problema de forma mais controlada.",
      "respostaCerta": "Quando pode introduzir ambiguidade de filtro e efeitos inesperados nas agregações.",
      "puloDoGato": "M:N no modelo = cuidado com filtro bidirecional e duplicação em agregações. Prefira bridge table quando possível.",
      "cascasDeBanana": [
        "Quando sempre melhora clareza: M:N raramente melhora clareza — frequentemente adiciona complexidade ao comportamento de filtro.",
        "Quando elimina necessidade de bridge table: M:N nativo é uma alternativa à bridge table, mas com trade-offs diferentes em comportamento de filtro.",
        "Quando substitui medidas: o tipo de relacionamento não substitui medidas DAX."
      ],
      "dicaOuro": "M:N nativo = simples de criar, perigoso de usar. Bridge table = mais trabalho, resultado mais previsível."
    }
  },
  {
    "id": "dp600_q70",
    "text": "Qual é a utilidade de uma bridge table em certos cenários de modelagem?",
    "options": [
      "Definir papéis de workspace",
      "Substituir a tabela fato",
      "Ajudar a resolver relacionamentos complexos, como muitos-para-muitos, de forma mais controlada",
      "Eliminar dimensões"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "Uma bridge table transforma um relacionamento M:N em dois relacionamentos 1:N mais previsíveis.",
      "papoReto": "Quando Produto e Pedido têm relação M:N (um pedido tem múltiplos produtos, um produto aparece em múltiplos pedidos), criar uma tabela intermediária (OrderLine/bridge) com chave de Pedido e chave de Produto transforma a relação em Pedido 1:N Bridge e Bridge N:1 Produto — eliminando ambiguidade de filtro e tornando o comportamento das medidas previsível.",
      "respostaCerta": "Ajudar a resolver relacionamentos complexos, como muitos-para-muitos, de forma mais controlada.",
      "puloDoGato": "M:N = crie bridge table intermediária → dois relacionamentos 1:N → comportamento de filtro previsível.",
      "cascasDeBanana": [
        "Definir papéis de workspace: papéis de workspace (Admin/Member/Viewer) são configurações de acesso; bridge table é design de modelo.",
        "Substituir a tabela fato: bridge table é uma tabela auxiliar de relacionamento, não uma substituta da fato central.",
        "Eliminar dimensões: dimensões ainda existem e se conectam às extremidades da bridge table."
      ],
      "dicaOuro": "Bridge table = tabela do meio que desdobra M:N em dois 1:N. Mais previsível que M:N nativo no Power BI."
    }
  },
  {
    "id": "dp600_q71",
    "text": "Qual benefício conceitual os calculation groups podem trazer em modelos semânticos avançados?",
    "options": [
      "Eliminar RLS",
      "Substituir relacionamentos",
      "Criar pipelines automaticamente",
      "Reduzir repetição de lógica e padronizar variações de cálculo em múltiplas medidas"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "Calculation groups resolvem o problema de duplicar a mesma lógica (YTD, MTD, comparações) em dezenas de medidas.",
      "papoReto": "Sem calculation groups, para ter Vendas YTD, Lucro YTD, Quantidade YTD, o desenvolvedor escreve três medidas diferentes com a mesma lógica DATESYTD(). Com calculation groups, a lógica YTD é definida uma vez e aplicada a qualquer medida do modelo — reduzindo explosão combinatória de medidas e garantindo consistência.",
      "respostaCerta": "Reduzir repetição de lógica e padronizar variações de cálculo em múltiplas medidas.",
      "puloDoGato": "Calculation groups = escreva a lógica de variação (YTD, MTD, % vs. anterior) uma vez, aplique em todas as medidas.",
      "cascasDeBanana": [
        "Eliminar RLS: calculation groups são sobre cálculos de medidas; RLS é sobre segurança de linhas — domínios distintos.",
        "Substituir relacionamentos: calculation groups não alteram a estrutura de relacionamentos do modelo.",
        "Criar pipelines automaticamente: pipelines são artefatos de ingestão/orquestração; calculation groups são DAX avançado no modelo semântico."
      ],
      "dicaOuro": "Calculation groups = evite 50 medidas YTD. Escreva a lógica uma vez, reutilize em todas as métricas."
    }
  },
  {
    "id": "dp600_q72",
    "text": "Em relatórios, qual problema os field parameters ajudam a resolver?",
    "options": [
      "Substituir deployment pipelines",
      "Permitir alternância dinâmica de campos ou medidas conforme a escolha do usuário",
      "Controlar capacidade Fabric",
      "Definir permissões de segurança"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "Field parameters tornam relatórios mais flexíveis, deixando o usuário escolher o que visualizar.",
      "papoReto": "Um field parameter no Power BI cria uma segmentação que permite ao usuário escolher qual campo ou medida aparece em um visual. Por exemplo: o mesmo gráfico de barras pode mostrar Vendas, Lucro ou Quantidade conforme o usuário seleciona na segmentação — sem o desenvolvedor criar três visuais separados.",
      "respostaCerta": "Permitir alternância dinâmica de campos ou medidas conforme a escolha do usuário.",
      "puloDoGato": "'Usuário escolhe qual métrica ver no visual' = field parameter.",
      "cascasDeBanana": [
        "Substituir deployment pipelines: deployment pipeline promove conteúdo entre ambientes; field parameter é um recurso de interatividade de relatório.",
        "Controlar capacidade Fabric: field parameters são recursos de modelagem do Power BI; não têm relação com capacidade de computação.",
        "Definir permissões de segurança: segurança é configurada via roles e RLS; field parameters são sobre flexibilidade de análise."
      ],
      "dicaOuro": "Field parameter = segmentação que controla qual campo/medida aparece no visual. Relatório mais flexível sem mais visuais."
    }
  },
  {
    "id": "dp600_q73",
    "text": "Para que servem dynamic format strings em um modelo semântico?",
    "options": [
      "Ajustar a forma de exibição de valores de maneira dinâmica sem perder comportamento analítico da medida",
      "Criar relacionamentos",
      "Remover filtros do relatório",
      "Substituir DAX"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "Dynamic format strings permitem que o formato de exibição de uma medida mude conforme o contexto.",
      "papoReto": "Com dynamic format strings, o mesmo valor pode ser exibido como '$ 1.250' quando exibe Receita e como '1.250 un.' quando exibe Quantidade — sem criar medidas separadas para cada formato. O formato é definido por uma expressão DAX que varia conforme o contexto, mantendo o cálculo analítico intacto.",
      "respostaCerta": "Ajustar a forma de exibição de valores de maneira dinâmica sem perder comportamento analítico da medida.",
      "puloDoGato": "'Formato muda conforme o contexto (moeda, percentual, inteiro)' = dynamic format string.",
      "cascasDeBanana": [
        "Criar relacionamentos: relacionamentos são definidos na view de modelo; format strings são sobre apresentação de valores.",
        "Remover filtros do relatório: format strings não afetam filtros — só a forma de exibir o número calculado.",
        "Substituir DAX: dynamic format strings são escritas em DAX; são uma extensão, não um substituto."
      ],
      "dicaOuro": "Dynamic format string = mesma medida, formato diferente conforme contexto. Menos medidas duplicadas."
    }
  },
  {
    "id": "dp600_q74",
    "text": "Qual é uma vantagem de usar arquivos de projeto PBIP no desenvolvimento analítico?",
    "options": [
      "Eliminar semantic model",
      "Facilitar versionamento e colaboração mais estruturada no ciclo de vida do conteúdo Power BI",
      "Impedir publicação",
      "Substituir XMLA endpoint"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "O formato PBIP (Power BI Project) substitui o .pbix binário por arquivos de texto que o Git consegue versionar.",
      "papoReto": "Com PBIP, o modelo semântico e o relatório ficam salvos como arquivos JSON/texto em pastas. Isso habilita: versionamento completo com Git (cada mudança é um commit rastreável), colaboração simultânea entre desenvolvedores com merge de alterações, e integração com CI/CD pipelines. O .pbix não permite isso por ser binário.",
      "respostaCerta": "Facilitar versionamento e colaboração mais estruturada no ciclo de vida do conteúdo Power BI.",
      "puloDoGato": "PBIP = Power BI como código-fonte. Git consegue versionar, comparar e colaborar. .pbix = blob binário, não versionável.",
      "cascasDeBanana": [
        "Eliminar semantic model: o modelo semântico continua existindo — apenas é salvo em formato texto (PBIP) em vez de binário (.pbix).",
        "Impedir publicação: PBIP pode ser publicado normalmente no Fabric após o desenvolvimento.",
        "Substituir XMLA endpoint: XMLA endpoint é para gerenciamento avançado do modelo em runtime; PBIP é o formato de arquivo em desenvolvimento."
      ],
      "dicaOuro": "PBIP = Power BI com Git. Código, versionamento e colaboração real. Não é mais um arquivo binário opaco."
    }
  },
  {
    "id": "dp600_q75",
    "text": "Em qual cenário arquivos como PBIT e PBIDS podem ser úteis?",
    "options": [
      "Na substituição de tabelas Delta",
      "Na criação de pipelines Spark",
      "Na remoção de segurança",
      "Na padronização e reaproveitamento de ativos de desenvolvimento analítico"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "PBIT e PBIDS são formatos de arquivo Power BI para reutilização de estruturas e conexões.",
      "papoReto": "PBIT (Power BI Template) salva a estrutura do relatório e do modelo sem os dados — útil para distribuir um template padrão para diferentes fontes ou parâmetros. PBIDS (Power BI Data Source) salva as configurações de conexão de dados, permitindo que novos relatórios se conectem às fontes corretas rapidamente. Ambos padronizam e aceleram o desenvolvimento.",
      "respostaCerta": "Na padronização e reaproveitamento de ativos de desenvolvimento analítico.",
      "puloDoGato": "PBIT = template sem dados (estrutura). PBIDS = definição de conexão de dados para reutilizar.",
      "cascasDeBanana": [
        "Na substituição de tabelas Delta: PBIT e PBIDS são formatos de arquivo de relatório/conexão; não substituem tabelas de dados.",
        "Na criação de pipelines Spark: pipelines Spark são criados no Fabric (notebooks, Data pipelines); PBIT/PBIDS são de Power BI Desktop.",
        "Na remoção de segurança: PBIT e PBIDS não têm relação com configuração de segurança."
      ],
      "dicaOuro": "PBIT = modelo sem dados (distribua o template). PBIDS = conexão pré-configurada (agilize o setup da fonte)."
    }
  },
  {
    "id": "dp600_q76",
    "text": "Qual é a diferença conceitual entre controlar acesso em nível de workspace e em nível de item?",
    "options": [
      "Não existe diferença",
      "Workspace access só vale para notebooks",
      "O acesso em nível de item permite granularidade adicional sobre ativos específicos além das permissões amplas do workspace",
      "Item-level sempre substitui workspace roles"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Segurança e governança",
    "explanation": {
      "intro": "No Fabric, é possível controlar acesso tanto no workspace inteiro quanto em itens individuais.",
      "papoReto": "Workspace roles (Admin/Member/Contributor/Viewer) concedem acesso a todos os itens do workspace. Item-level access permite dar acesso a um item específico (um único relatório, um dataset) para alguém que não é membro do workspace — granularidade adicional sem abrir o workspace inteiro. Os dois níveis podem coexistir.",
      "respostaCerta": "O acesso em nível de item permite granularidade adicional sobre ativos específicos além das permissões amplas do workspace.",
      "puloDoGato": "'Dar acesso a um único relatório sem tornar o usuário membro do workspace' = item-level access.",
      "cascasDeBanana": [
        "Não existe diferença: workspace role dá acesso ao conjunto inteiro; item-level dá acesso a um item específico — diferença significativa.",
        "Workspace access só vale para notebooks: workspace roles se aplicam a todos os itens (lakehouses, modelos, relatórios, notebooks).",
        "Item-level sempre substitui workspace roles: os dois níveis coexistem; item-level adiciona granularidade, não cancela o workspace role."
      ],
      "dicaOuro": "Workspace role = acesso ao workspace inteiro. Item-level = acesso a um item específico. Use item-level para acesso pontual."
    }
  },
  {
    "id": "dp600_q77",
    "text": "Em um ambiente com múltiplos modelos semelhantes, quando a certificação de conteúdo se torna especialmente valiosa?",
    "options": [
      "Quando se deseja duplicar datasets",
      "Quando todos os itens devem ser ocultados",
      "Quando não há governança",
      "Quando é necessário orientar consumidores para o ativo oficial e confiável"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Segurança e governança",
    "explanation": {
      "intro": "Quando muitos datasets semelhantes existem no ambiente, a certificação funciona como um sinal de tráfego.",
      "papoReto": "Com múltiplos modelos sobre o mesmo tema (vendas, clientes), os consumidores ficam confusos sobre qual usar. O endorsement com marcação 'Certified' indica que aquele ativo foi revisado, aprovado e é a fonte oficial. Isso é especialmente valioso em ambientes grandes onde datasets não-certificados proliferam.",
      "respostaCerta": "Quando é necessário orientar consumidores para o ativo oficial e confiável.",
      "puloDoGato": "'Muitos datasets semelhantes, consumidor não sabe qual usar' = certificação/endorsement resolve.",
      "cascasDeBanana": [
        "Quando se deseja duplicar datasets: endorsement não duplica datasets — sinaliza qual dos existentes é o oficial.",
        "Quando todos os itens devem ser ocultados: endorsement aumenta visibilidade do ativo correto; não oculta nada.",
        "Quando não há governança: a certificação é justamente um instrumento de governança — não o substituto dela."
      ],
      "dicaOuro": "Certified = 'este é o dataset oficial. Use este, não os outros.' Clareza em ambientes com muitos ativos."
    }
  },
  {
    "id": "dp600_q78",
    "text": "Qual pré-requisito técnico é central para usar Direct Lake de forma adequada?",
    "options": [
      "Trabalhar com dados suportados no contexto Fabric, especialmente em tabelas Delta armazenadas em OneLake",
      "Evitar qualquer modelo semântico",
      "Usar apenas arquivos CSV locais",
      "Trabalhar fora de capacidade compatível"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Direct Lake tem pré-requisitos técnicos específicos que diferem do Import e do DirectQuery.",
      "papoReto": "Para usar Direct Lake, o modelo semântico precisa apontar para tabelas Delta no OneLake (Lakehouse ou Warehouse). O modo não funciona com fontes externas genéricas, CSV locais ou conexões DirectQuery para bancos externos. Também requer uma capacidade Fabric (F ou P SKU compatível) — não funciona com Power BI Pro/Premium por usuário.",
      "respostaCerta": "Trabalhar com dados suportados no contexto Fabric, especialmente em tabelas Delta armazenadas em OneLake.",
      "puloDoGato": "Direct Lake só funciona com tabelas Delta no OneLake + capacidade Fabric. CSV, fontes externas ou Pro não funcionam.",
      "cascasDeBanana": [
        "Evitar qualquer modelo semântico: Direct Lake é justamente um modo do modelo semântico — não tem como usar sem modelo.",
        "Usar apenas arquivos CSV locais: CSV não suporta Direct Lake; é necessário formato Delta no OneLake.",
        "Trabalhar fora de capacidade compatível: Direct Lake requer capacidade Fabric (F/P SKU) — não funciona sem ela."
      ],
      "dicaOuro": "Direct Lake = tabelas Delta no OneLake + capacidade Fabric. Sem esses dois, cai para Import ou DirectQuery."
    }
  },
  {
    "id": "dp600_q79",
    "text": "Por que compreender fallback em Direct Lake é importante?",
    "options": [
      "Porque nunca ocorre em produção",
      "Porque certos cenários podem fazer a consulta deixar o caminho ideal esperado, impactando desempenho e comportamento",
      "Porque fallback só afeta permissões",
      "Porque substitui incremental refresh"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "O fallback no Direct Lake é o mecanismo de segurança que muda o modo de consulta quando o caminho ideal não está disponível.",
      "papoReto": "No Direct Lake, o motor lê os arquivos Delta diretamente do OneLake. Em certos cenários (parquet com schema incompatível, tabela muito grande para o framing, RLS ativa com certas configurações), o modelo cai para DirectQuery — perdendo a velocidade do Direct Lake e passando para o modo mais lento de consulta em tempo real. Entender quando o fallback ocorre é crucial para garantir performance consistente.",
      "respostaCerta": "Porque certos cenários podem fazer a consulta deixar o caminho ideal esperado, impactando desempenho e comportamento.",
      "puloDoGato": "Direct Lake faz fallback para DirectQuery quando: RLS ativa + Direct Lake em alguns cenários, tabela fora dos limites de framing, ou dados não em Delta no OneLake.",
      "cascasDeBanana": [
        "Porque nunca ocorre em produção: fallback ocorre em produção quando as condições o ativam — não é um evento raro de laboratório.",
        "Porque fallback só afeta permissões: fallback afeta o desempenho e o comportamento da consulta; permissões são controladas pelo RLS.",
        "Porque substitui incremental refresh: fallback e incremental refresh são mecanismos independentes do modelo semântico."
      ],
      "dicaOuro": "Direct Lake fallback = consulta cai para DirectQuery. Monitore via SQL Server Profiler/Connection log para detectar."
    }
  },
  {
    "id": "dp600_q80",
    "text": "Em que tipo de cenário o large semantic model storage format tende a ser relevante?",
    "options": [
      "Apenas em dashboards estáticos",
      "Apenas em relatórios com duas tabelas",
      "Quando o modelo cresce a um ponto em que requisitos de escala e armazenamento exigem configuração apropriada",
      "Apenas em workspaces sem usuários"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "O large semantic model storage format é uma configuração para modelos que crescem além do limite padrão de armazenamento.",
      "papoReto": "Por padrão, modelos semânticos têm um limite de tamanho em memória (dependendo da capacidade). Quando o modelo cresce a ponto de superar esse limite, é necessário habilitar o formato de armazenamento de grande escala, que usa um mecanismo de paginação para persistir o modelo no Premium/Fabric e não mais apenas em RAM. Isso é relevante para modelos com dezenas de GB.",
      "respostaCerta": "Quando o modelo cresce a um ponto em que requisitos de escala e armazenamento exigem configuração apropriada.",
      "puloDoGato": "Modelo semântico muito grande (dezenas de GB)? Habilite o large semantic model storage format para escalar além do limite de RAM.",
      "cascasDeBanana": [
        "Apenas em dashboards estáticos: o formato de armazenamento afeta o modelo semântico subjacente; o tipo de dashboard não é o determinante.",
        "Apenas em relatórios com duas tabelas: a necessidade desse formato cresce com o volume de dados, não com o número de tabelas.",
        "Apenas em workspaces sem usuários: o formato é sobre capacidade de armazenamento; usuários no workspace não são o fator determinante."
      ],
      "dicaOuro": "Large semantic model = modelo grande que não cabe só em RAM. Habilite quando o modelo superar o limite de memória da capacidade."
    }
  },
  {
    "id": "dp600_q81",
    "text": "Por que separar ambientes de desenvolvimento, teste e produção é uma prática importante em soluções DP-600?",
    "options": [
      "Porque produção deve ser usada para experimentos",
      "Porque elimina necessidade de teste",
      "Porque reduz risco de mudanças não validadas afetarem consumidores finais e melhora governança do ciclo de vida",
      "Porque workspaces não suportam colaboração"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "Dev/Test/Prod é o modelo clássico de governança de ciclo de vida para soluções analíticas.",
      "papoReto": "Sem ambientes separados, desenvolvedores experimentam diretamente em produção — qualquer bug vai direto para os consumidores. Com Dev/Test/Prod (via deployment pipeline do Fabric), mudanças são desenvolvidas em Dev, validadas em Test com dados representativos, e só então promovidas para Prod. Isso protege os consumidores finais e estabelece governança formal.",
      "respostaCerta": "Porque reduz risco de mudanças não validadas afetarem consumidores finais e melhora governança do ciclo de vida.",
      "puloDoGato": "Dev/Test/Prod = protege Prod de mudanças não testadas. Deployment pipeline promove entre os estágios.",
      "cascasDeBanana": [
        "Porque produção deve ser usada para experimentos: Prod é o ambiente mais protegido — experimentos ficam em Dev.",
        "Porque elimina necessidade de teste: Test é um dos três ambientes justamente para hospedar os testes antes de ir a Prod.",
        "Porque workspaces não suportam colaboração: workspaces suportam múltiplos usuários com diferentes roles — colaboração é nativa."
      ],
      "dicaOuro": "Dev → Test → Prod via deployment pipeline = ciclo de vida controlado. Nenhuma mudança vai a Prod sem passar por Test."
    }
  },
  {
    "id": "dp600_q82",
    "text": "Quando uma equipe pretende renomear colunas usadas em diversos relatórios, qual preocupação deve vir primeiro?",
    "options": [
      "Apenas o tema visual do relatório",
      "O impacto downstream em modelos, relatórios e consumidores dependentes dessas colunas",
      "Apenas o idioma do navegador",
      "Apenas o nome do workspace"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Segurança e governança",
    "explanation": {
      "intro": "Renomear colunas em uso é uma das alterações mais perigosas em uma solução analítica compartilhada.",
      "papoReto": "Se a coluna `cliente_id` é usada em um dataflow, num modelo semântico (medidas DAX) e em relatórios publicados, renomeá-la quebra todas essas dependências silenciosamente. A preocupação certa é mapear o impacto downstream via lineage view antes de qualquer renomeação.",
      "respostaCerta": "O impacto downstream em modelos, relatórios e consumidores dependentes dessas colunas.",
      "puloDoGato": "Antes de renomear colunas usadas em modelos/relatórios: lineage view → mapeie dependências → avalie o impacto.",
      "cascasDeBanana": [
        "Apenas o tema visual do relatório: o tema é visual; renomear colunas afeta a lógica, não a aparência.",
        "Apenas o idioma do navegador: idioma do navegador é preferência de exibição; não tem relação com schema de tabelas.",
        "Apenas o nome do workspace: o workspace não é afetado — os artefatos dentro dele é que dependem da coluna."
      ],
      "dicaOuro": "Renomear coluna compartilhada = risco alto. Sempre use lineage view para ver o impacto antes de alterar."
    }
  },
  {
    "id": "dp600_q83",
    "text": "Qual é a função do Z-Ordering em tabelas Delta Lake de um Lakehouse do Fabric?",
    "options": [
      "Criar índices secundários em colunas Delta para acelerar consultas de busca por valor exato.",
      "Ordenar as linhas da tabela Delta em ordem crescente com base em uma coluna de chave primária para otimizar JOINs.",
      "Colocar dados relacionados fisicamente próximos nos arquivos Parquet com base em colunas especificadas, melhorando o partition pruning e o desempenho de filtros nessas colunas.",
      "Comprimir os arquivos Delta usando o algoritmo ZSTD para reduzir o espaço de armazenamento no OneLake."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Z-Order é uma técnica de co-localização de dados do Delta Lake para melhorar a eficiência de filtros.",
      "papoReto": "O Z-Ordering (via `OPTIMIZE ... ZORDER BY coluna`) reorganiza fisicamente os dados nos arquivos Parquet de forma que valores relacionados de uma coluna fiquem no mesmo arquivo ou em arquivos contíguos. Quando uma consulta filtra por essa coluna, o Spark consegue pular a leitura de mais arquivos (data skipping aprimorado), reduzindo o I/O.",
      "respostaCerta": "Colocar dados relacionados fisicamente próximos nos arquivos Parquet com base em colunas especificadas, melhorando o partition pruning e o desempenho de filtros nessas colunas.",
      "puloDoGato": "Z-Order na coluna mais filtrada = Spark lê menos arquivos = consulta mais rápida. Use junto com OPTIMIZE.",
      "cascasDeBanana": [
        "Criar índices secundários em colunas Delta para acelerar consultas de busca por valor exato.: Delta Lake não tem índices secundários tradicionais; usa estatísticas de min/max + Z-Order para data skipping.",
        "Ordenar as linhas da tabela Delta em ordem crescente com base em uma coluna de chave primária para otimizar JOINs.: Z-Order não ordena para JOINs; reorganiza fisicamente para data skipping em filtros.",
        "Comprimir os arquivos Delta usando o algoritmo ZSTD para reduzir o espaço de armazenamento no OneLake.: Z-Order é sobre localização de dados, não sobre algoritmo de compressão."
      ],
      "dicaOuro": "Z-Order = co-localizar dados por coluna para data skipping. Mais eficiente que particionar colunas de alta cardinalidade."
    }
  },
  {
    "id": "dp600_q84",
    "text": "Qual comando é usado para consolidar arquivos Delta pequenos em um Lakehouse do Fabric e melhorar o desempenho de leitura?",
    "options": [
      "`OPTIMIZE nome_tabela` (em SQL) ou `DeltaTable.forName(spark, \"nome_tabela\").optimize().executeCompaction()` (em PySpark), que combina arquivos pequenos em arquivos maiores.",
      "`COMPACT TABLE nome_tabela INTO 1 FILE`, que consolida todos os dados em um único arquivo Parquet.",
      "`ANALYZE TABLE nome_tabela COMPUTE STATISTICS`, que atualiza as estatísticas de coluna para o otimizador de consultas.",
      "`VACUUM nome_tabela RETAIN 0 HOURS`, que remove arquivos antigos e consolida o armazenamento Delta."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "OPTIMIZE é o comando Delta Lake para resolver o problema do small file.",
      "papoReto": "`OPTIMIZE nome_tabela` (SQL Spark) ou `DeltaTable.forName(...).optimize().executeCompaction()` (PySpark) consolida os muitos arquivos Parquet pequenos gerados por escritas incrementais em arquivos maiores e mais eficientes. É a solução padrão para o problema de performance causado por small files em tabelas Delta com alta frequência de ingestão.",
      "respostaCerta": "`OPTIMIZE nome_tabela` — consolida arquivos Delta pequenos em arquivos maiores para melhorar performance de leitura.",
      "puloDoGato": "Small files em Delta = use OPTIMIZE. Dados históricos obsoletos = use VACUUM depois.",
      "cascasDeBanana": [
        "`COMPACT TABLE nome_tabela INTO 1 FILE`: esse comando não existe em Delta Lake nem em Spark SQL.",
        "`ANALYZE TABLE nome_tabela COMPUTE STATISTICS`: atualiza estatísticas para o otimizador de consultas, mas não compacta arquivos.",
        "`VACUUM nome_tabela RETAIN 0 HOURS`: remove arquivos não referenciados (histórico Delta), não consolida arquivos pequenos ativos."
      ],
      "dicaOuro": "OPTIMIZE = compacta small files. VACUUM = limpa histórico antigo. Rodá-los periodicamente mantém Delta saudável."
    }
  },
  {
    "id": "dp600_q85",
    "text": "O que o comando `VACUUM` faz em uma tabela Delta Lake e qual é o risco de executá-lo com retenção zero horas?",
    "options": [
      "Recria os arquivos Delta a partir do zero, reprocessando todas as transações do log para corrigir inconsistências.",
      "Exclui permanentemente as linhas marcadas como deletadas pelo motor Delta sem impactar o time travel.",
      "Remove arquivos de dados antigos não referenciados pelo log de transações Delta, liberando espaço; com retenção zero, elimina a capacidade de time travel para versões anteriores.",
      "Arquiva os dados históricos em formato comprimido no OneLake para reduzir custos de armazenamento ativo."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "VACUUM no Delta Lake limpa o histórico de arquivos antigos — mas a retenção zero tem um risco específico.",
      "papoReto": "O Delta Lake mantém versões antigas dos dados nos arquivos Parquet para suportar time travel (voltar a uma versão anterior). VACUUM remove esses arquivos antigos que já não são mais referenciados pelo log de transações. Com `RETAIN 0 HOURS`, todos os arquivos históricos são apagados imediatamente — eliminando completamente a capacidade de time travel para versões anteriores.",
      "respostaCerta": "Remove arquivos de dados antigos não referenciados pelo log, liberando espaço; com retenção zero, elimina a capacidade de time travel.",
      "puloDoGato": "VACUUM libera espaço. VACUUM com retenção zero = sem mais time travel. Use com cautela em produção.",
      "cascasDeBanana": [
        "Recria os arquivos Delta a partir do zero, reprocessando todas as transações do log para corrigir inconsistências.: VACUUM não recria dados — remove arquivos antigos. Para reconstruir, usaria `CONVERT TO DELTA` ou RESTORE.",
        "Exclui permanentemente as linhas marcadas como deletadas pelo motor Delta sem impactar o time travel.: VACUUM impacta o time travel justamente porque remove os arquivos históricos.",
        "Arquiva os dados históricos em formato comprimido no OneLake para reduzir custos de armazenamento ativo.: VACUUM deleta — não arquiva. Não há compressão de arquivamento automática."
      ],
      "dicaOuro": "VACUUM = apaga histórico antigo. VACUUM RETAIN 0 HOURS = mata o time travel. Padrão recomendado é 7 dias de retenção."
    }
  },
  {
    "id": "dp600_q86",
    "text": "Qual é o comportamento da função DAX `ALLSELECTED()` em uma medida?",
    "options": [
      "Remove todos os filtros do modelo, incluindo slicers e filtros de página, retornando o total absoluto da tabela.",
      "Aplica um filtro que seleciona apenas os valores atualmente visíveis na tabela ou matriz do relatório.",
      "Remove os filtros internos do contexto de cálculo mas preserva os filtros aplicados externamente por slicers e filtros de relatório, útil para calcular percentuais sobre o total visível.",
      "Seleciona automaticamente todos os valores de uma coluna ignorando apenas filtros de cruzamento entre visuais."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "ALLSELECTED é a função DAX que preserva os filtros do usuário mas remove os filtros internos da linha do visual.",
      "papoReto": "ALLSELECTED remove os filtros do contexto de linha (gerado pelo visual — linha de uma tabela, categoria de um gráfico) mas mantém os filtros externos (slicers, filtros de página). Isso a torna ideal para calcular o percentual sobre o total visível: `Vendas / CALCULATE([Vendas Total], ALLSELECTED(Produto))` retorna o % sobre apenas o que o usuário filtrou, não o grand total absoluto.",
      "respostaCerta": "Remove os filtros internos do contexto de cálculo mas preserva os filtros aplicados externamente por slicers e filtros de relatório, útil para calcular percentuais sobre o total visível.",
      "puloDoGato": "% sobre o total visível (considerando slicers) = ALLSELECTED. % sobre o grand total absoluto = ALL.",
      "cascasDeBanana": [
        "Remove todos os filtros do modelo, incluindo slicers e filtros de página, retornando o total absoluto da tabela.: isso é ALL() — remove todos os filtros, incluindo os externos.",
        "Aplica um filtro que seleciona apenas os valores atualmente visíveis na tabela ou matriz do relatório.: ALLSELECTED preserva o contexto de filtro externo, mas não 'seleciona' o que está visível — retira o filtro de linha.",
        "Seleciona automaticamente todos os valores de uma coluna ignorando apenas filtros de cruzamento entre visuais.: esse comportamento descreve parcialmente ALLSELECTED mas de forma imprecisa — a função opera sobre o contexto de filtro, não sobre cross-filtering."
      ],
      "dicaOuro": "ALL = ignora tudo. ALLSELECTED = ignora contexto de linha, preserva slicers. Use para % do total visível."
    }
  },
  {
    "id": "dp600_q87",
    "text": "Qual é a limitação do Dataflow Gen2 em relação ao Incremental Refresh comparado ao modelo semântico do Power BI?",
    "options": [
      "O Dataflow Gen2 não suporta Incremental Refresh nativo da mesma forma que modelos semânticos; para carga incremental, é necessário implementar lógica personalizada via parâmetros de filtragem na query Power Query M.",
      "O Dataflow Gen2 executa Incremental Refresh automaticamente sem configuração, detectando novos registros pela chave primária.",
      "O Dataflow Gen2 suporta Incremental Refresh apenas para fontes SQL Server e Oracle, não para fontes cloud.",
      "O Dataflow Gen2 suporta Incremental Refresh com janelas de até 7 dias; janelas maiores requerem notebooks PySpark."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Carga incremental em Dataflow Gen2 é possível mas exige implementação manual, diferente do modelo semântico.",
      "papoReto": "Modelos semânticos têm incremental refresh nativo (configurável pela interface). O Dataflow Gen2 não tem esse recurso de forma equivalente: para implementar carga incremental, o engenheiro precisa usar parâmetros em Power Query M para filtrar a fonte pela data/hora da última execução, capturada e passada como parâmetro pelo pipeline que dispara o dataflow.",
      "respostaCerta": "O Dataflow Gen2 não suporta Incremental Refresh nativo; para carga incremental é necessário implementar lógica personalizada via parâmetros em Power Query M.",
      "puloDoGato": "Incremental refresh nativo = modelo semântico. Dataflow Gen2 com carga incremental = parâmetros de data em Power Query M.",
      "cascasDeBanana": [
        "O Dataflow Gen2 executa Incremental Refresh automaticamente sem configuração, detectando novos registros pela chave primária.: não há detecção automática por chave primária; é necessário criar a lógica manualmente.",
        "O Dataflow Gen2 suporta Incremental Refresh apenas para fontes SQL Server e Oracle, não para fontes cloud.: essa restrição por fonte não existe; a limitação é de ausência de suporte nativo, não de fonte específica.",
        "O Dataflow Gen2 suporta Incremental Refresh com janelas de até 7 dias; janelas maiores requerem notebooks PySpark.: não existe esse limite de 7 dias; a abordagem é por parâmetros customizados, independente de janela."
      ],
      "dicaOuro": "Dataflow Gen2 + carga incremental = use parâmetros M para filtrar pela data e passe via pipeline. Sem botão mágico."
    }
  },
  {
    "id": "dp600_q88",
    "text": "Em um modelo semântico com esquema estrela, por que é recomendado usar uma tabela de datas separada em vez de extrair o ano/mês diretamente da tabela de fatos?",
    "options": [
      "Permite que o Fabric atualize a tabela de fatos e a tabela de datas de forma independente, reduzindo o tempo de refresh.",
      "Uma tabela de datas dedicada permite inteligência de tempo com DAX (TOTALYTD, SAMEPERIODLASTYEAR etc.), suporta hierarquias de data e garante continuidade mesmo em períodos sem transações.",
      "É obrigatória para que o Power BI reconheça automaticamente colunas de data e crie hierarquias de data/hora nativas.",
      "A tabela de datas reduz o tamanho da tabela de fatos ao remover colunas de data redundantes, diminuindo o uso de memória no modelo."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "Uma tabela de datas dedicada é pré-requisito para as funções de inteligência de tempo do DAX funcionarem corretamente.",
      "papoReto": "Funções como TOTALYTD, SAMEPERIODLASTYEAR, DATEADD e PREVIOUSQUARTER exigem uma tabela de datas contínua (sem lacunas) marcada como tabela de datas no modelo. Extrair Ano/Mês direto da fato não cria essa continuidade — se um mês não tiver transações, o período sumirá da tabela. A tabela de datas garante que todos os períodos existam, mesmo sem transações.",
      "respostaCerta": "Uma tabela de datas dedicada permite inteligência de tempo com DAX, suporta hierarquias e garante continuidade mesmo em períodos sem transações.",
      "puloDoGato": "Sem tabela de datas dedicada = funções de time intelligence DAX não funcionam. Meses sem transação somem da análise.",
      "cascasDeBanana": [
        "Permite que o Fabric atualize a tabela de fatos e a tabela de datas de forma independente, reduzindo o tempo de refresh.: o benefício principal da tabela de datas não é o refresh independente — é a inteligência de tempo e a continuidade de período.",
        "É obrigatória para que o Power BI reconheça automaticamente colunas de data e crie hierarquias de data/hora nativas.: o Power BI pode criar hierarquias automáticas sem tabela dedicada; a razão real é habilitar funções de time intelligence corretamente.",
        "A tabela de datas reduz o tamanho da tabela de fatos ao remover colunas de data redundantes, diminuindo o uso de memória no modelo.: embora a normalização possa ajudar, redução de memória não é o principal motivo para ter tabela de datas dedicada."
      ],
      "dicaOuro": "Tabela de datas = requisito para TOTALYTD, SAMEPERIODLASTYEAR etc. Deve ser contínua e marcada como tabela de datas."
    }
  },
  {
    "id": "dp600_q89",
    "text": "Como um Service Principal é usado para automação de tarefas no Microsoft Fabric?",
    "options": [
      "Um Service Principal substitui contas de usuário individuais e recebe automaticamente permissões Admin em todos os workspaces do tenant.",
      "Um Service Principal (identidade de aplicativo do Azure AD) pode ser adicionado a workspaces com funções específicas e usado para autenticar chamadas à API REST do Fabric, automatizando refresh, deploy e outras operações sem credenciais de usuário.",
      "Um Service Principal é usado exclusivamente para configurar gateways de dados on-premises para conexões seguras.",
      "Um Service Principal é uma conta de serviço criada no Microsoft Fabric Admin Portal que gerencia a capacidade Fabric."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "Service Principals permitem automação de tarefas no Fabric sem usar credenciais pessoais de usuário.",
      "papoReto": "Um Service Principal é uma identidade de aplicativo no Microsoft Entra ID (antigo Azure AD). Pode ser adicionado a workspaces do Fabric com uma função específica (Member, Admin) e autenticado via client_id + client_secret ou certificado. Scripts de CI/CD, pipelines de Azure DevOps e automações de refresh usam Service Principals para chamar a API REST do Fabric sem expor credenciais pessoais.",
      "respostaCerta": "Um Service Principal pode ser adicionado a workspaces com funções específicas e usado para autenticar chamadas à API REST do Fabric, automatizando refresh, deploy e outras operações sem credenciais de usuário.",
      "puloDoGato": "Automação de Fabric (CI/CD, refresh via API, deploy) = use Service Principal, não credenciais pessoais.",
      "cascasDeBanana": [
        "Um Service Principal substitui contas de usuário individuais e recebe automaticamente permissões Admin em todos os workspaces do tenant.: Service Principal não tem permissões automáticas — precisa ser adicionado explicitamente em cada workspace com a função desejada.",
        "Um Service Principal é usado exclusivamente para configurar gateways de dados on-premises para conexões seguras.: gateways on-premises usam outras credenciais; Service Principal é para chamadas à API REST do Fabric/Power BI.",
        "Um Service Principal é uma conta de serviço criada no Microsoft Fabric Admin Portal que gerencia a capacidade Fabric.: Service Principal é criado no Microsoft Entra ID (portal Azure), não no Admin Portal do Fabric."
      ],
      "dicaOuro": "Service Principal = identidade de app no Entra ID + role no workspace. Ideal para CI/CD e automação via API REST."
    }
  },
  {
    "id": "dp600_q90",
    "text": "Qual é a diferença entre a seção \"Tables\" e a seção \"Files\" de um Lakehouse no Microsoft Fabric?",
    "options": [
      "\"Tables\" é acessível via SQL Analytics Endpoint e \"Files\" é acessível apenas via Azure Storage Explorer.",
      "\"Tables\" contém tabelas Delta gerenciadas com schema enforcement e suporte a SQL; \"Files\" é uma área de armazenamento de arquivos brutos (zona landing) em qualquer formato, sem schema imposto.",
      "\"Tables\" é somente leitura e \"Files\" permite leitura e escrita via notebooks e pipelines.",
      "\"Tables\" armazena dados estruturados em formato CSV e \"Files\" armazena dados em formato Delta Parquet."
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "O Lakehouse expõe duas seções distintas para propósitos diferentes: Tables e Files.",
      "papoReto": "A seção **Tables** contém tabelas Delta gerenciadas com schema definido — consultáveis via SQL analytics endpoint, acessíveis em modo Direct Lake e governadas pelo sistema de tipos do Delta. A seção **Files** é uma área de landing livre, onde qualquer arquivo (CSV, JSON, Parquet, imagens) pode ser carregado sem schema, processado depois pelo Spark.",
      "respostaCerta": "\"Tables\" = tabelas Delta gerenciadas com SQL; \"Files\" = área de arquivos brutos sem schema imposto.",
      "puloDoGato": "Dados chegam brutos e precisam de processamento? → /Files. Dados já processados e estruturados? → /Tables (Delta gerenciado).",
      "cascasDeBanana": [
        "\"Tables\" é acessível via SQL Analytics Endpoint e \"Files\" é acessível apenas via Azure Storage Explorer.: arquivos em /Files também são acessíveis via notebooks e pipelines — não só pelo Storage Explorer.",
        "\"Tables\" é somente leitura e \"Files\" permite leitura e escrita via notebooks e pipelines.: ambas as seções permitem leitura e escrita; a diferença está no schema e no tipo de dado, não no acesso.",
        "\"Tables\" armazena dados estruturados em formato CSV e \"Files\" armazena dados em formato Delta Parquet.: /Tables usa Delta Parquet; /Files aceita qualquer formato — CSV, JSON, Parquet, etc."
      ],
      "dicaOuro": "/Files = landing zone (qualquer formato). /Tables = Delta gerenciado com SQL. Bronze vai para Files, Silver/Gold vão para Tables."
    }
  },
  {
    "id": "dp600_q91",
    "text": "Em um Notebook do Microsoft Fabric, qual magic command permite executar código SQL diretamente sobre tabelas do Lakehouse?",
    "options": [
      "`%run sql` no início da célula, que invoca o SQL Analytics Endpoint do Lakehouse para executar a query.",
      "`#!sql` no início da célula, que ativa o modo SQL do interpretador do notebook Fabric.",
      "`%%sql` no início de uma célula, que permite escrever e executar queries SQL diretamente no contexto do Spark SQL sem converter para PySpark.",
      "`@sql` seguido da query, que executa T-SQL diretamente no Warehouse associado ao workspace."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Notebooks do Fabric suportam SQL diretamente em células via magic command, sem precisar converter para PySpark.",
      "papoReto": "`%%sql` é um cell magic do Jupyter que muda o interpretador da célula inteira para Spark SQL. Com isso, você escreve SQL puro na célula e o Spark executa diretamente sobre as tabelas Delta do Lakehouse — sem `spark.sql(\"...\")` explícito ou conversão para DataFrame.",
      "respostaCerta": "`%%sql` no início de uma célula — executa queries SQL diretamente no contexto do Spark SQL.",
      "puloDoGato": "SQL em notebook Fabric = `%%sql` no início da célula. Nada de `spark.sql()` ou PySpark.",
      "cascasDeBanana": [
        "`%run sql`: `%run` é um magic para executar outro notebook, não para ativar modo SQL na célula.",
        "`#!sql`: `#!` é notação de shebang em shell scripts; não é um magic command válido em notebooks Jupyter/Spark.",
        "`@sql`: essa sintaxe não existe em notebooks Fabric; `@` é usada em outras linguagens (Scala, Java) para anotações."
      ],
      "dicaOuro": "`%%sql` = SQL puro em notebook Fabric. `%run` = executar outro notebook. Não confunda os dois."
    }
  },
  {
    "id": "dp600_q92",
    "text": "Para que servem as Perspectives em um modelo semântico do Microsoft Fabric/Power BI?",
    "options": [
      "Configurar modos de exibição alternativos de um relatório para diferentes dispositivos (desktop, mobile, tablet).",
      "Criar subconjuntos lógicos do modelo (tabelas, colunas e medidas selecionadas) para simplificar a experiência de usuários específicos, ocultando elementos irrelevantes sem remover do modelo.",
      "Criar visões de segurança que restringem quais tabelas e colunas cada usuário pode ver, complementando o RLS.",
      "Definir perspectivas de análise temporal que permitem comparações automáticas entre períodos no relatório."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "Perspectives permitem criar visões simplificadas de um modelo semântico para audiências específicas.",
      "papoReto": "Uma Perspective é uma coleção lógica de tabelas, colunas e medidas de um modelo semântico — sem criar um modelo separado. Um analista de vendas vê apenas o subconjunto de vendas; um analista de RH vê apenas tabelas de pessoal. Ambos usam o mesmo modelo físico, mas a Perspective oculta o que é irrelevante para cada um.",
      "respostaCerta": "Criar subconjuntos lógicos do modelo para simplificar a experiência de usuários específicos, ocultando elementos irrelevantes sem remover do modelo.",
      "puloDoGato": "Perspective = visão filtrada do modelo para um perfil de usuário. Não é segurança — não impede acesso, só oculta da visão.",
      "cascasDeBanana": [
        "Configurar modos de exibição alternativos de um relatório para diferentes dispositivos (desktop, mobile, tablet).: isso é layout responsivo do relatório Power BI; Perspectives são sobre o modelo semântico, não o layout.",
        "Criar visões de segurança que restringem quais tabelas e colunas cada usuário pode ver, complementando o RLS.: Perspectives não são segurança — apenas ocultam da interface. Para restrição real de acesso, use OLS.",
        "Definir perspectivas de análise temporal que permitem comparações automáticas entre períodos no relatório.: análise temporal usa funções de time intelligence DAX; Perspectives são apenas agrupamentos de objetos do modelo."
      ],
      "dicaOuro": "Perspective = curadoria da view do modelo. Não é segurança (use OLS para isso). É UX para o desenvolvedor de relatório."
    }
  },
  {
    "id": "dp600_q93",
    "text": "Em KQL, qual função é usada para sumarizar dados calculando a contagem de registros por categoria?",
    "options": [
      "`Tabela | groupby Categoria | measure count() as Total`",
      "`Tabela | project Categoria | distinct | count()`",
      "`Tabela | summarize count() by Categoria`",
      "`Tabela | aggregate count(*) group by Categoria`"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Em KQL, a função de agregação principal é `summarize` — equivalente ao GROUP BY + aggregate do SQL.",
      "papoReto": "A sintaxe KQL usa pipe (`|`) para encadear operadores. Para contar registros por categoria: `Tabela | summarize count() by Categoria`. O `summarize` é o operador de agregação em KQL, e `count()` conta as linhas em cada grupo. A lógica é idêntica ao `SELECT Categoria, COUNT(*) FROM Tabela GROUP BY Categoria` em SQL.",
      "respostaCerta": "`Tabela | summarize count() by Categoria`",
      "puloDoGato": "KQL: `summarize` = agregar. `project` = selecionar colunas. `where` = filtrar. `count()` = contar registros.",
      "cascasDeBanana": [
        "`Tabela | groupby Categoria | measure count() as Total`: `groupby` e `measure` não são operadores KQL — são construções de outras linguagens (M, DAX).",
        "`Tabela | project Categoria | distinct | count()`: `project` seleciona colunas; `distinct` existe em KQL mas nessa cadeia não produz a contagem agrupada desejada.",
        "`Tabela | aggregate count(*) group by Categoria`: `aggregate ... group by` é sintaxe SQL; em KQL usa-se `summarize count() by`."
      ],
      "dicaOuro": "KQL para contar por grupo: `Tabela | summarize count() by Coluna`. É o GROUP BY do KQL."
    }
  },
  {
    "id": "dp600_q94",
    "text": "O que acontece quando há um conflito entre as alterações feitas no workspace Fabric e as alterações feitas diretamente no repositório Git?",
    "options": [
      "O Fabric indica o conflito no painel de controle de versão; o usuário deve escolher manualmente entre \"Update from Git\" (sobrescrever workspace com Git) ou \"Commit to Git\" (sobrescrever Git com workspace), pois não há merge automático.",
      "O workspace sempre prevalece sobre o Git; um commit automático é feito com as alterações do workspace.",
      "O Fabric cria automaticamente um branch de merge e resolve o conflito combinando as alterações de ambas as fontes.",
      "O repositório Git sempre prevalece sobre o workspace; as alterações locais são descartadas automaticamente."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "Conflitos entre workspace Fabric e o repositório Git exigem resolução manual — não há merge automático.",
      "papoReto": "Quando mudanças são feitas no workspace Fabric E no repositório Git ao mesmo tempo, o Fabric mostra o conflito no painel de Git Integration. O usuário precisa escolher explicitamente: **Update from Git** (traz o estado do Git para o workspace, descartando as mudanças locais) ou **Commit to Git** (envia o estado do workspace para o Git, sobrescrevendo o que está lá). Não há merge automático de artefatos binários.",
      "respostaCerta": "O Fabric indica o conflito; o usuário escolhe manualmente entre Update from Git ou Commit to Git, pois não há merge automático.",
      "puloDoGato": "Conflito Git vs workspace Fabric = decisão manual. Não há merge automático — escolha Update (Git vence) ou Commit (Workspace vence).",
      "cascasDeBanana": [
        "O workspace sempre prevalece sobre o Git; um commit automático é feito com as alterações do workspace.: não há commit automático; o usuário decide qual versão prevalece.",
        "O Fabric cria automaticamente um branch de merge e resolve o conflito combinando as alterações de ambas as fontes.: artefatos do Fabric não suportam merge automático como código-fonte texto puro.",
        "O repositório Git sempre prevalece sobre o workspace; as alterações locais são descartadas automaticamente.: não há prevalência automática do Git; é sempre uma decisão explícita do usuário."
      ],
      "dicaOuro": "Git + Fabric em conflito: escolha Update from Git ou Commit to Git. Sem merge mágico — você decide quem vence."
    }
  },
  {
    "id": "dp600_q95",
    "text": "Ao transformar dados em um Warehouse do Fabric, qual tipo de dado T-SQL é mais adequado para armazenar valores monetários com precisão exata?",
    "options": [
      "`MONEY`, que é o único tipo aceito pelo Fabric Warehouse para valores monetários com símbolo de moeda.",
      "`DECIMAL(p,s)` ou `NUMERIC(p,s)`, que armazenam valores com precisão exata de ponto fixo, evitando erros de arredondamento de ponto flutuante.",
      "`REAL`, que é otimizado para cálculos monetários de alto desempenho em Warehouses analíticos.",
      "`FLOAT`, que oferece alta precisão e ampla faixa de valores para cálculos financeiros complexos."
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Para valores monetários em SQL, a precisão exata é crítica — erros de arredondamento podem custar caro.",
      "papoReto": "`DECIMAL(p,s)` e `NUMERIC(p,s)` são tipos de ponto fixo: `p` é a precisão total (dígitos) e `s` é a escala (casas decimais). Exemplo: `DECIMAL(18,2)` armazena até 18 dígitos com 2 casas decimais — sem erros de arredondamento binário. Tipos como FLOAT e REAL usam ponto flutuante, que pode introduzir erros na 15ª casa decimal — inaceitável para valores financeiros.",
      "respostaCerta": "`DECIMAL(p,s)` ou `NUMERIC(p,s)` — precisão exata de ponto fixo, sem erros de arredondamento de ponto flutuante.",
      "puloDoGato": "Valores monetários em SQL = DECIMAL ou NUMERIC. FLOAT e REAL têm erros de arredondamento binário.",
      "cascasDeBanana": [
        "`MONEY`: o tipo MONEY existe no SQL Server mas não é suportado no Fabric Warehouse; além disso, DECIMAL é preferível para portabilidade.",
        "`REAL`: tipo de ponto flutuante de 4 bytes — precisão insuficiente e sujeito a erros de arredondamento binário.",
        "`FLOAT`: tipo de ponto flutuante IEEE 754 — ampla faixa mas erros de arredondamento. Ex.: 0.1 + 0.2 ≠ 0.3 exato."
      ],
      "dicaOuro": "Dinheiro no SQL = DECIMAL(18,2). FLOAT/REAL = ciência. Nunca use ponto flutuante para dinheiro."
    }
  },
  {
    "id": "dp600_q96",
    "text": "Qual função DAX retorna as vendas do mesmo período do ano anterior?",
    "options": [
      "`PREVIOUSYEAR([Vendas Total], 'Calendário'[Data])`",
      "`CALCULATE([Vendas Total], SAMEPERIODLASTYEAR('Calendário'[Data]))`",
      "`CALCULATE([Vendas Total], DATEADD('Calendário'[Data], -1, YEAR))`",
      "`CALCULATE([Vendas Total], PARALLELPERIOD('Calendário'[Data], -12, MONTH))`"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "SAMEPERIODLASTYEAR é a função DAX de time intelligence para comparação com o mesmo período do ano anterior.",
      "papoReto": "`CALCULATE([Vendas Total], SAMEPERIODLASTYEAR('Calendário'[Data]))` recalcula a medida [Vendas Total] no contexto do período equivalente do ano anterior. Se o relatório mostra Março/2024, a função retorna o valor de Março/2023. É a forma correta de criar comparação ano-a-ano (YoY) em DAX.",
      "respostaCerta": "`CALCULATE([Vendas Total], SAMEPERIODLASTYEAR('Calendário'[Data]))`",
      "puloDoGato": "'Mesmo período do ano anterior' = SAMEPERIODLASTYEAR. 'Acumulado do ano' = TOTALYTD/DATESYTD.",
      "cascasDeBanana": [
        "`PREVIOUSYEAR([Vendas Total], 'Calendário'[Data])`: PREVIOUSYEAR não aceita uma medida como primeiro argumento — a assinatura é `PREVIOUSYEAR(<dates>)`, que retorna uma tabela de datas, não uma medida.",
        "`CALCULATE([Vendas Total], DATEADD('Calendário'[Data], -1, YEAR))`: DATEADD deslocar -1 YEAR funciona para o mesmo período, mas SAMEPERIODLASTYEAR é a função semântica correta e mais legível para essa intenção.",
        "`CALCULATE([Vendas Total], PARALLELPERIOD('Calendário'[Data], -12, MONTH))`: PARALLELPERIOD com -12 MONTH também retorna o mesmo período anterior, mas é menos semântico — SAMEPERIODLASTYEAR é a escolha canônica."
      ],
      "dicaOuro": "YoY em DAX: `CALCULATE([Medida], SAMEPERIODLASTYEAR(Calendário[Data]))`. Simples e semântico."
    }
  },
  {
    "id": "dp600_q97",
    "text": "Como a API REST do Microsoft Fabric pode ser usada em automações de engenharia de dados?",
    "options": [
      "Para executar queries DAX e KQL diretamente via HTTP, substituindo o XMLA endpoint em cenários de baixa latência.",
      "Para configurar RLS e OLS dinamicamente em modelos semânticos sem precisar publicar uma nova versão do modelo.",
      "Para disparar refreshes de modelos semânticos, criar e gerenciar workspaces, implantar itens via pipelines de CI/CD e monitorar execuções de jobs programaticamente, sem usar a interface gráfica.",
      "Para migrar dados entre tenants Fabric de diferentes regiões de forma segura e criptografada."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "A API REST do Fabric permite automatizar qualquer operação que você faria pela interface gráfica.",
      "papoReto": "A API REST do Microsoft Fabric cobre operações como: criar/excluir workspaces, disparar refresh de modelos semânticos, implantar itens entre estágios (deployment pipeline), monitorar execuções de notebooks e pipelines, criar lakehouses e mais. Tudo que é possível pela interface pode ser automzizado via HTTP com autenticação por Service Principal ou token.",
      "respostaCerta": "Para disparar refreshes, criar workspaces, implantar itens via CI/CD e monitorar jobs programaticamente, sem usar a interface gráfica.",
      "puloDoGato": "Qualquer operação Fabric via código/script/CI = API REST do Fabric (ou Power BI REST API para modelos semânticos).",
      "cascasDeBanana": [
        "Para executar queries DAX e KQL diretamente via HTTP, substituindo o XMLA endpoint em cenários de baixa latência.: consultas DAX são executadas via XMLA endpoint (tabular); a API REST não substitui o XMLA para queries DAX.",
        "Para configurar RLS e OLS dinamicamente em modelos semânticos sem precisar publicar uma nova versão do modelo.: RLS e OLS são configurados no modelo e requerem publicação ou XMLA endpoint; a REST API não altera configurações de segurança do modelo em tempo real.",
        "Para migrar dados entre tenants Fabric de diferentes regiões de forma segura e criptografada.: migração entre tenants requer estratégias específicas; a REST API não é uma ferramenta de migração cross-tenant direta."
      ],
      "dicaOuro": "API REST Fabric = automação de tudo. CI/CD, refresh, criação de workspace, monitoramento — tudo via HTTP."
    }
  },
  {
    "id": "dp600_q98",
    "text": "Como o Microsoft Purview se integra ao Microsoft Fabric para governança de dados?",
    "options": [
      "O Purview monitora o desempenho de consultas KQL e DAX e gera alertas quando o tempo de resposta excede limites configurados.",
      "O Purview é usado exclusivamente para conformidade com LGPD/GDPR, sem integração técnica com os itens do Fabric.",
      "O Purview substitui o Admin Portal do Fabric para gerenciamento de permissões de workspace e sensitivity labels.",
      "O Purview escaneia automaticamente os itens do Fabric (Lakehouses, Warehouses, modelos semânticos) para catalogação de dados, classificação de informações sensíveis e construção de lineage de dados corporativo."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "O Microsoft Purview é a plataforma de governança corporativa que se integra nativamente ao Fabric.",
      "papoReto": "O Microsoft Purview escaneia automaticamente os itens do Fabric — Lakehouses, Warehouses, modelos semânticos — para catalogar os dados, classificar informações sensíveis (PII, financeiros) e construir o lineage de dados de ponta a ponta através de toda a organização. Isso vai além do lineage interno do Fabric, abrangendo fontes externas e outros sistemas.",
      "respostaCerta": "O Purview escaneia os itens do Fabric para catalogação, classificação de dados sensíveis e lineage de dados corporativo.",
      "puloDoGato": "'Catálogo corporativo de dados', 'lineage entre sistemas', 'classificar PII automaticamente' = Microsoft Purview.",
      "cascasDeBanana": [
        "O Purview monitora o desempenho de consultas KQL e DAX e gera alertas de tempo de resposta.: monitoramento de performance de consultas é feito no Fabric Capacity Metrics e Query Insights; o Purview é sobre governança, não performance.",
        "O Purview é usado exclusivamente para conformidade com LGPD/GDPR, sem integração técnica com os itens do Fabric.: o Purview tem integração técnica nativa com o Fabric — ele realmente escaneia e cataloga os itens.",
        "O Purview substitui o Admin Portal do Fabric para gerenciamento de permissões de workspace.: o Admin Portal e o Purview são complementares; permissões de workspace continuam no Admin Portal do Fabric."
      ],
      "dicaOuro": "Purview + Fabric = visibilidade corporativa de dados: quais existem, onde estão, o que é sensível, como fluem."
    }
  },
  {
    "id": "dp600_q99",
    "text": "Como o Delta Lake no Fabric lida com Schema Evolution quando novos dados contêm colunas adicionais não existentes no schema atual?",
    "options": [
      "O Delta Lake aceita automaticamente novas colunas sem configuração adicional, preenchendo valores nulos em registros antigos.",
      "O Delta Lake cria uma nova versão da tabela com o schema atualizado, mantendo a versão anterior para time travel.",
      "Por padrão, o Delta Lake rejeita novas colunas (schema enforcement); para permitir evolução automática, é necessário usar a opção `mergeSchema=True` na escrita ou configurar `spark.databricks.delta.schema.autoMerge.enabled = true`.",
      "O Delta Lake ignora as novas colunas e persiste apenas as colunas existentes no schema original, sem erro."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Delta Lake tem schema enforcement por padrão — e schema evolution quando você ativa explicitamente.",
      "papoReto": "Por padrão, Delta Lake bloqueia qualquer tentativa de escrita com schema diferente do existente (schema enforcement). Para habilitar schema evolution (aceitar colunas novas), use `.option(\"mergeSchema\", \"true\")` na escrita em PySpark, ou configure `spark.databricks.delta.schema.autoMerge.enabled = true` na sessão Spark. Registros antigos recebem `null` nas novas colunas.",
      "respostaCerta": "Por padrão, o Delta Lake rejeita novas colunas; para evolução automática, use `mergeSchema=True` na escrita ou configure `autoMerge.enabled = true`.",
      "puloDoGato": "Delta + nova coluna = erro por padrão. Para aceitar: `.option('mergeSchema', 'true')` na escrita.",
      "cascasDeBanana": [
        "O Delta Lake aceita automaticamente novas colunas sem configuração adicional, preenchendo valores nulos em registros antigos.: o Delta rejeita por padrão — exige ativação explícita de mergeSchema para aceitar novas colunas.",
        "O Delta Lake cria uma nova versão da tabela com o schema atualizado, mantendo a versão anterior para time travel.: o time travel já é nativo do Delta; schema evolution com mergeSchema não cria uma nova 'versão' separada da tabela.",
        "O Delta Lake ignora as novas colunas e persiste apenas as colunas existentes no schema original, sem erro.: sem mergeSchema, Delta lança AnalysisException — não ignora silenciosamente."
      ],
      "dicaOuro": "Delta schema evolution = não é automático. Ative com mergeSchema=True. Sem isso, nova coluna = erro na escrita."
    }
  },
  {
    "id": "dp600_q100",
    "text": "Em um modelo semântico com múltiplos Calculation Groups, como o Fabric/Power BI determina a precedência quando dois grupos afetam a mesma medida simultaneamente?",
    "options": [
      "O Calculation Group criado mais recentemente sempre tem precedência sobre os demais, independente de qualquer configuração.",
      "Pela propriedade \"Precedence\" de cada Calculation Group; o grupo com valor numérico maior é aplicado primeiro, permitindo controle explícito da ordem de avaliação.",
      "Não é possível ter dois Calculation Groups afetando a mesma medida; o Fabric gera erro de validação no modelo.",
      "O motor DAX aplica os Calculation Groups em ordem alfabética pelo nome do grupo quando há conflito."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "Quando múltiplos Calculation Groups afetam a mesma medida, a propriedade Precedence define a ordem.",
      "papoReto": "Cada Calculation Group tem uma propriedade `Precedence` (número inteiro). O grupo com valor mais alto é aplicado primeiro (camada mais externa). Isso é crítico quando você tem um grupo de inteligência temporal (YTD, MTD) e outro de conversão de moeda — a ordem de aplicação afeta o resultado. Configure Precedence no Tabular Editor.",
      "respostaCerta": "Pela propriedade Precedence de cada Calculation Group; o grupo com valor numérico maior é aplicado primeiro.",
      "puloDoGato": "Dois Calculation Groups conflitam? Precedence maior = aplicado primeiro. Configure no Tabular Editor.",
      "cascasDeBanana": [
        "O Calculation Group criado mais recentemente sempre tem precedência sobre os demais, independente de qualquer configuração.: a criação mais recente não determina a ordem — é a propriedade Precedence que controla.",
        "Não é possível ter dois Calculation Groups afetando a mesma medida; o Fabric gera erro de validação no modelo.: é possível e comum ter múltiplos grupos (tempo + moeda, por ex.); a Precedence resolve a ordem de aplicação.",
        "O motor DAX aplica os Calculation Groups em ordem alfabética pelo nome do grupo quando há conflito.: a ordem é por Precedence numérica, não alfabética pelo nome."
      ],
      "dicaOuro": "Calculation Group + conflito = Precedence. Valor mais alto é avaliado primeiro (camada mais externa)."
    }
  },
  {
    "id": "dp600_q101",
    "text": "Em um Notebook Fabric, como você filtra um DataFrame PySpark para retornar apenas registros onde a coluna \"status\" é igual a \"ativo\" e \"valor\" é maior que 1000?",
    "options": [
      "`df.select(col(\"status\") == \"ativo\", col(\"valor\") > 1000)`",
      "`df.where(\"status = 'ativo' AND valor > 1000\")`",
      "`df.filter((col(\"status\") == \"ativo\") & (col(\"valor\") > 1000))`",
      "`df.query(\"status == 'ativo' and valor > 1000\")`"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Em PySpark, filtros combinados com múltiplas condições usam operadores bitwise com parênteses obrigatórios.",
      "papoReto": "`df.filter()` (ou `.where()`) aceita expressões com `col()`. Para combinar condições, use `&` (AND) ou `|` (OR) com **parênteses ao redor de cada condição** — obrigatório em PySpark para evitar precedência de operador incorreta: `df.filter((col(\"status\") == \"ativo\") & (col(\"valor\") > 1000))`.",
      "respostaCerta": "`df.filter((col(\"status\") == \"ativo\") & (col(\"valor\") > 1000))`",
      "puloDoGato": "PySpark: combine condições com `&` ou `|`. SEMPRE use parênteses: `(cond1) & (cond2)`. Sem parênteses = erro de precedência.",
      "cascasDeBanana": [
        "`df.select(col(\"status\") == \"ativo\", col(\"valor\") > 1000)`: `.select()` seleciona colunas ou cria colunas booleanas — não filtra linhas do DataFrame.",
        "`df.where(\"status = 'ativo' AND valor > 1000\")`: `.where()` com string SQL-like funciona em Spark SQL mas não é PySpark idiomático com col(); além disso, usa `=` em vez de `==`.",
        "`df.query(\"status == 'ativo' and valor > 1000\")`: `.query()` é método de Pandas DataFrames — não existe nativamente em PySpark DataFrames."
      ],
      "dicaOuro": "PySpark filter múltiplas condições: `df.filter((col('a') == x) & (col('b') > y))`. Parênteses são obrigatórios."
    }
  },
  {
    "id": "dp600_q102",
    "text": "Você precisa analisar dados armazenados em um bucket Amazon S3 sem movê-los para o OneLake. Qual recurso do Fabric permite isso?",
    "options": [
      "Shortcuts do OneLake, que criam um ponteiro virtual para o bucket S3, permitindo leitura dos dados diretamente no Lakehouse sem cópia física.",
      "Um Notebook PySpark com a biblioteca boto3 instalada via `%pip install boto3` para acesso direto ao S3.",
      "Um Dataflow Gen2 com o conector Amazon S3 configurado como fonte de dados em modo DirectQuery.",
      "Um Data Pipeline com atividade Copy Data agendada a cada hora para sincronizar os dados do S3 com o Lakehouse."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Shortcuts do OneLake permitem acesso a dados externos sem mover nada para o Fabric.",
      "papoReto": "O OneLake suporta shortcuts para Amazon S3 (e GCS, ADLS Gen2). Um shortcut S3 cria um ponteiro virtual no Lakehouse que aponta para o bucket externo — os dados ficam no S3, mas são acessíveis no Fabric como se fossem tabelas locais, via Spark, SQL endpoint e Direct Lake (dependendo do formato Delta).",
      "respostaCerta": "Shortcuts do OneLake — criam ponteiro virtual para o bucket S3, sem cópia física dos dados.",
      "puloDoGato": "Dados no S3 sem mover para Fabric = shortcut OneLake → S3. Leia direto de onde os dados já estão.",
      "cascasDeBanana": [
        "Um Notebook PySpark com a biblioteca boto3 instalada via `%pip install boto3` para acesso direto ao S3.: boto3 funciona para acesso programático ao S3, mas não é o mecanismo de integração nativa recomendado para acessar dados S3 no Lakehouse sem cópia.",
        "Um Dataflow Gen2 com o conector Amazon S3 configurado como fonte de dados em modo DirectQuery.: Dataflow Gen2 não tem modo DirectQuery — ele transforma e carrega. Além disso, o shortcut é mais eficiente para acesso sem cópia.",
        "Um Data Pipeline com atividade Copy Data agendada a cada hora para sincronizar os dados do S3 com o Lakehouse.: Copy Data copia os dados para o Fabric — o enunciado pede acesso SEM mover."
      ],
      "dicaOuro": "S3 no Fabric sem mover = shortcut OneLake. S3 para Fabric com cópia = Copy Data no pipeline."
    }
  },
  {
    "id": "dp600_q103",
    "text": "Quem pode executar implantações entre estágios em um Deployment Pipeline do Microsoft Fabric?",
    "options": [
      "Usuários com função de Admin ou Member no Deployment Pipeline e que também possuam permissões adequadas nos workspaces dos estágios de origem e destino.",
      "Apenas o criador do Deployment Pipeline, pois a propriedade do pipeline não é transferível.",
      "Qualquer usuário com função Contributor no workspace de origem, sem necessidade de permissão no destino.",
      "Apenas administradores do tenant Fabric, pois implantações em produção requerem privilégios elevados globais."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "Implantações no Deployment Pipeline exigem permissão no pipeline E nos workspaces de origem e destino.",
      "papoReto": "Para executar um deploy de Dev → Test ou Test → Prod, o usuário precisa de: 1) função Admin ou Member **no deployment pipeline** (não apenas nos workspaces) e 2) permissões adequadas nos workspaces dos dois estágios envolvidos. Apenas ter acesso ao workspace de origem não é suficiente — o destino também requer permissão.",
      "respostaCerta": "Usuários com função Admin ou Member no Deployment Pipeline e permissões adequadas nos workspaces de origem e destino.",
      "puloDoGato": "Deploy no pipeline = permissão no deployment pipeline (Admin/Member) + permissão nos dois workspaces (origem e destino).",
      "cascasDeBanana": [
        "Apenas o criador do Deployment Pipeline, pois a propriedade do pipeline não é transferível.: a propriedade pode ser compartilhada; Admin e Members do pipeline têm as mesmas capacidades de deploy.",
        "Qualquer usuário com função Contributor no workspace de origem, sem necessidade de permissão no destino.: Contributor no workspace de origem não tem acesso ao deployment pipeline nem ao workspace destino.",
        "Apenas administradores do tenant Fabric, pois implantações em produção requerem privilégios elevados globais.: admins do tenant têm acesso a tudo, mas não são os únicos que podem fazer deploy — Admin/Member do pipeline também podem."
      ],
      "dicaOuro": "Deploy = Admin/Member no pipeline + acesso nos dois workspaces. Não é só ter acesso a um deles."
    }
  },
  {
    "id": "dp600_q104",
    "text": "No Warehouse do Microsoft Fabric, como você cria uma view que combina dados de duas tabelas com um JOIN e a disponibiliza para consulta via SQL Analytics Endpoint?",
    "options": [
      "`CREATE VIEW dbo.vw_vendas_clientes AS SELECT v.*, c.nome FROM dbo.vendas v INNER JOIN dbo.clientes c ON v.cliente_id = c.id`",
      "A view deve ser criada no SQL Analytics Endpoint do Lakehouse e referenciada no Warehouse via Shortcut.",
      "`CREATE MATERIALIZED VIEW dbo.vw_vendas_clientes AS SELECT ...`",
      "Views não são suportadas no Warehouse do Fabric; é necessário criar tabelas físicas com o resultado do JOIN."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Views no Warehouse do Fabric seguem a mesma sintaxe T-SQL clássica do SQL Server.",
      "papoReto": "No Warehouse do Fabric, `CREATE VIEW` funciona exatamente como no SQL Server: `CREATE VIEW dbo.vw_vendas_clientes AS SELECT v.*, c.nome FROM dbo.vendas v INNER JOIN dbo.clientes c ON v.cliente_id = c.id`. A view criada é automaticamente acessível via SQL Analytics Endpoint para qualquer ferramenta SQL conectada ao Warehouse.",
      "respostaCerta": "`CREATE VIEW dbo.vw_vendas_clientes AS SELECT v.*, c.nome FROM dbo.vendas v INNER JOIN dbo.clientes c ON v.cliente_id = c.id`",
      "puloDoGato": "Views no Warehouse = `CREATE VIEW dbo.schema.vw_nome AS SELECT ...`. Mesma sintaxe do SQL Server.",
      "cascasDeBanana": [
        "A view deve ser criada no SQL Analytics Endpoint do Lakehouse e referenciada no Warehouse via Shortcut.: o SQL Analytics Endpoint do Lakehouse é somente leitura — não aceita DDL como CREATE VIEW. Views do Warehouse ficam no Warehouse.",
        "`CREATE MATERIALIZED VIEW dbo.vw_vendas_clientes AS SELECT ...`: o Fabric Warehouse não suporta MATERIALIZED VIEW — views são sempre não-materializadas (lógicas).",
        "Views não são suportadas no Warehouse do Fabric: views são suportadas — essa afirmação está incorreta."
      ],
      "dicaOuro": "View no Warehouse = `CREATE VIEW dbo.nome AS SELECT ...`. Suportado. MATERIALIZED VIEW = não suportado."
    }
  },
  {
    "id": "dp600_q105",
    "text": "Na expressão `CALCULATE([Vendas], Produto[Categoria] = \"A\", Calendário[Ano] = 2024)`, como os dois filtros são combinados?",
    "options": [
      "O CALCULATE aplica os filtros sequencialmente em ordem de avaliação, podendo produzir resultados diferentes dependendo da ordem declarada.",
      "Os filtros são combinados com OR, retornando vendas da categoria \"A\" ou do ano 2024, o que for maior.",
      "O segundo filtro sobrescreve o primeiro; apenas o filtro de ano é aplicado ao cálculo final.",
      "Os filtros são combinados com AND (interseção), retornando vendas de produtos da categoria \"A\" no ano de 2024 simultaneamente."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "CALCULATE com múltiplos argumentos de filtro combina todos com AND — interseção, não união.",
      "papoReto": "`CALCULATE([Medida], filtro1, filtro2)` aplica filtro1 **E** filtro2 simultaneamente — é uma interseção. No exemplo de categoria 'A' + ano 2024, o resultado é apenas as vendas de produtos da categoria A **no** ano 2024. Nunca um OR.",
      "respostaCerta": "Os filtros são combinados com AND (interseção), retornando vendas de produtos da categoria \"A\" no ano de 2024 simultaneamente.",
      "puloDoGato": "CALCULATE com dois filtros = AND (interseção). Para OR, use FILTER com condição OR explícita.",
      "cascasDeBanana": [
        "O CALCULATE aplica os filtros sequencialmente em ordem de avaliação, podendo produzir resultados diferentes dependendo da ordem declarada.: em CALCULATE, a ordem dos filtros não importa — todos são aplicados simultaneamente como interseção.",
        "Os filtros são combinados com OR, retornando vendas da categoria 'A' ou do ano 2024, o que for maior.: CALCULATE usa AND, não OR. Para OR, seria necessário FILTER com condição explícita `||`.",
        "O segundo filtro sobrescreve o primeiro; apenas o filtro de ano é aplicado ao cálculo final.: os filtros em CALCULATE são aditivos (AND), não substituem uns aos outros."
      ],
      "dicaOuro": "CALCULATE(medida, f1, f2) = medida com f1 AND f2. Para OR: CALCULATE(medida, FILTER(tabela, cond1 || cond2))."
    }
  },
  {
    "id": "dp600_q106",
    "text": "Em um Warehouse do Fabric, você cria uma stored procedure que recebe um parâmetro de data e retorna as vendas daquele dia. Como você executa essa procedure em um Data Pipeline?",
    "options": [
      "Usando a atividade \"Dataflow\" no Data Pipeline com uma query Power Query M que invoca a stored procedure como função.",
      "Usando a atividade \"Stored Procedure\" no Data Pipeline, configurando o nome da procedure e os parâmetros de entrada, incluindo expressões dinâmicas com `@pipeline().parameters`.",
      "Usando um Notebook PySpark que chama a procedure via `spark.sql(\"EXEC nome_procedure '2024-01-01'\")`.",
      "Usando a atividade \"Script\" no Data Pipeline com o comando `EXEC nome_procedure @data = '2024-01-01'` em T-SQL."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Data Pipelines do Fabric têm uma atividade dedicada para executar stored procedures em Warehouse.",
      "papoReto": "A atividade **Stored Procedure** no Data Pipeline conecta ao Warehouse, recebe o nome da procedure e os parâmetros de entrada — incluindo valores dinâmicos via `@pipeline().parameters.data` ou `@utcNow()`. É a forma correta de executar uma procedure parametrizada de forma orquestrada no pipeline.",
      "respostaCerta": "Usando a atividade \"Stored Procedure\" no Data Pipeline, configurando nome e parâmetros dinâmicos com `@pipeline().parameters`.",
      "puloDoGato": "Executar stored procedure dentro de um pipeline = atividade 'Stored Procedure'. Não é atividade Script nem Notebook.",
      "cascasDeBanana": [
        "Usando a atividade \"Dataflow\" no Data Pipeline com uma query Power Query M que invoca a stored procedure como função.: Dataflow Gen2 não invoca stored procedures; é voltado para transformação visual de dados.",
        "Usando um Notebook PySpark que chama a procedure via `spark.sql(\"EXEC nome_procedure '2024-01-01'\")`: `spark.sql` não executa T-SQL de Warehouse direto; além disso, EXEC não é sintaxe Spark SQL.",
        "Usando a atividade \"Script\" no Data Pipeline com `EXEC nome_procedure @data = '2024-01-01'` em T-SQL.: a atividade Script serve para scripts genéricos SQL; a atividade dedicada 'Stored Procedure' é a recomendada para procedures parametrizadas."
      ],
      "dicaOuro": "Pipeline + stored procedure parametrizada = atividade 'Stored Procedure' com `@pipeline().parameters`. Limpo e tipado."
    }
  },
  {
    "id": "dp600_q107",
    "text": "Como as políticas de Acesso Condicional do Azure AD interagem com o Microsoft Fabric?",
    "options": [
      "O Acesso Condicional é configurado no OneLake Catalog e aplica-se apenas a itens classificados como Confidential.",
      "O Acesso Condicional aplica-se apenas ao Power BI Service clássico, não ao Microsoft Fabric.",
      "Políticas de Acesso Condicional do Azure AD aplicam-se ao acesso ao Fabric, podendo exigir MFA, dispositivo gerenciado ou localização específica antes de permitir o acesso aos workspaces e itens.",
      "O Acesso Condicional do Azure AD não se integra ao Fabric; as restrições de acesso são configuradas exclusivamente no Admin Portal do Fabric."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "O Acesso Condicional do Microsoft Entra ID aplica-se ao Fabric como qualquer outro serviço M365.",
      "papoReto": "Políticas de Acesso Condicional são configuradas no Entra ID (antigo Azure AD) e avaliadas a cada login no Fabric. Elas podem exigir: MFA, dispositivo gerenciado pelo Intune, acesso apenas de redes corporativas (IP ranges), ou combinações. Se a política não for satisfeita, o acesso é bloqueado antes de chegar ao workspace.",
      "respostaCerta": "Políticas de Acesso Condicional do Azure AD aplicam-se ao Fabric, podendo exigir MFA, dispositivo gerenciado ou localização específica.",
      "puloDoGato": "Acesso Condicional = Entra ID avalia no login. Se política não satisfeita = acesso bloqueado antes do Fabric.",
      "cascasDeBanana": [
        "O Acesso Condicional é configurado no OneLake Catalog e aplica-se apenas a itens classificados como Confidential.: Acesso Condicional é configurado no Entra ID, não no catálogo; aplica-se ao acesso ao Fabric como um todo.",
        "O Acesso Condicional aplica-se apenas ao Power BI Service clássico, não ao Microsoft Fabric.: o Fabric é um serviço integrado ao M365; o Acesso Condicional aplica-se igualmente.",
        "O Acesso Condicional do Azure AD não se integra ao Fabric; as restrições são exclusivamente no Admin Portal do Fabric.: a integração existe e é nativa — o Entra ID autentica o acesso ao Fabric."
      ],
      "dicaOuro": "Acesso Condicional (Entra ID) + Fabric = MFA obrigatório, dispositivo gerenciado, IP corporativo. Configure no Entra ID."
    }
  },
  {
    "id": "dp600_q108",
    "text": "No Warehouse do Fabric, qual query T-SQL calcula o ranking de vendas por vendedor dentro de cada região usando funções de janela?",
    "options": [
      "`SELECT vendedor, regiao, vendas, DENSE_RANK() WITHIN GROUP (ORDER BY vendas DESC) OVER regiao AS ranking FROM dbo.vendas`",
      "`SELECT vendedor, regiao, vendas, ROW_NUMBER() OVER (ORDER BY vendas DESC) AS ranking FROM dbo.vendas PARTITION BY regiao`",
      "`SELECT vendedor, regiao, vendas, RANK() OVER (PARTITION BY regiao ORDER BY vendas DESC) AS ranking FROM dbo.vendas`",
      "`SELECT vendedor, regiao, vendas, RANK(vendas) GROUP BY regiao ORDER BY vendas DESC AS ranking FROM dbo.vendas`"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Funções de janela (window functions) T-SQL calculam rankings por grupo sem precisar de subqueries.",
      "papoReto": "`RANK() OVER (PARTITION BY regiao ORDER BY vendas DESC)` calcula o ranking de vendas dentro de cada região: `PARTITION BY regiao` reinicia o ranking a cada grupo de região, e `ORDER BY vendas DESC` coloca o maior vendedor em 1º. Syntax: função_janela OVER (PARTITION BY ... ORDER BY ...).",
      "respostaCerta": "`SELECT vendedor, regiao, vendas, RANK() OVER (PARTITION BY regiao ORDER BY vendas DESC) AS ranking FROM dbo.vendas`",
      "puloDoGato": "Ranking dentro de grupo em SQL = `RANK() OVER (PARTITION BY grupo ORDER BY métrica DESC)`.",
      "cascasDeBanana": [
        "`DENSE_RANK() WITHIN GROUP (ORDER BY vendas DESC) OVER regiao AS ranking`: `WITHIN GROUP` não é usado com funções de janela assim — é usado com funções de ordenação agregada (ex.: `PERCENTILE_CONT`). Sintaxe inválida.",
        "`ROW_NUMBER() OVER (ORDER BY vendas DESC) AS ranking FROM dbo.vendas PARTITION BY regiao`: `PARTITION BY` deve estar dentro do `OVER()`, não após `FROM`. Sintaxe inválida.",
        "`RANK(vendas) GROUP BY regiao ORDER BY vendas DESC AS ranking`: `RANK()` não aceita argumento — não é uma função agregada. A lógica de partição está fora do contexto correto."
      ],
      "dicaOuro": "Window function = func() OVER (PARTITION BY grupo ORDER BY coluna). RANK pula números em empates; DENSE_RANK não pula."
    }
  },
  {
    "id": "dp600_q109",
    "text": "Qual é a vantagem de criar hierarquias explícitas em um modelo semântico do Power BI/Fabric?",
    "options": [
      "É obrigatória para usar funções de inteligência de tempo como TOTALYTD e SAMEPERIODLASTYEAR corretamente.",
      "Permite que o motor VertiPaq comprima os dados das colunas hierárquicas de forma mais eficiente.",
      "Facilita a navegação drill-down nos relatórios, agrupando logicamente colunas relacionadas (ex: Ano > Trimestre > Mês > Dia) sem que o usuário precise selecionar colunas individualmente.",
      "Melhora o desempenho de consultas DAX ao pré-calcular agregações para cada nível da hierarquia durante o refresh."
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "Hierarquias explícitas em modelos semânticos guiam o usuário no drill-down sem precisar combinar colunas manualmente.",
      "papoReto": "Uma hierarquia explícita (ex.: Ano → Trimestre → Mês → Dia) agrupa colunas relacionadas numa estrutura navegável no Power BI. O usuário clica para descer um nível sem ter que arrastar manualmente cada coluna. Além disso, hierarquias explícitas são mais estáveis e controláveis que as hierarquias automáticas do Power BI.",
      "respostaCerta": "Facilita a navegação drill-down nos relatórios, agrupando logicamente colunas relacionadas sem que o usuário precise selecioná-las individualmente.",
      "puloDoGato": "Hierarquia explícita = drill-down guiado (Ano → Mês → Dia). Sem ela, usuário navega manualmente.",
      "cascasDeBanana": [
        "É obrigatória para usar funções de inteligência de tempo como TOTALYTD e SAMEPERIODLASTYEAR corretamente.: o requisito para time intelligence é uma **tabela de datas marcada como tabela de datas**, não uma hierarquia explícita.",
        "Permite que o motor VertiPaq comprima os dados das colunas hierárquicas de forma mais eficiente.: a compressão VertiPaq opera no nível de coluna individualmente; hierarquias não adicionam compressão extra.",
        "Melhora o desempenho de consultas DAX ao pré-calcular agregações para cada nível da hierarquia durante o refresh.: hierarquias são estruturas de navegação, não pré-agregações — não afetam performance de cálculo DAX."
      ],
      "dicaOuro": "Hierarquia explícita = experiência de drill-down definida. Tabela de datas marcada = pré-requisito para time intelligence DAX."
    }
  },
  {
    "id": "dp600_q110",
    "text": "Em um Data Pipeline do Fabric, ao copiar dados de uma fonte REST API para um Lakehouse, qual formato de destino é recomendado para compatibilidade com tabelas Delta?",
    "options": [
      "Salvar os dados na seção \"Files\" do Lakehouse em formato JSON ou Parquet e depois usar um Notebook ou SQL para converter e registrar como tabela Delta na seção \"Tables\".",
      "Usar o formato Delta diretamente na atividade Copy Data, que converte automaticamente qualquer fonte para Delta Parquet.",
      "Usar o formato Avro, que é o formato nativo de ingestão do Lakehouse e é convertido para Delta automaticamente.",
      "Usar o formato CSV comprimido (.gz) diretamente na seção \"Tables\", pois o Lakehouse converte automaticamente para Delta."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Ingestão de dados de REST API no Lakehouse segue o padrão landing zone → transformação → Delta table.",
      "papoReto": "A atividade Copy Data do pipeline não converte automaticamente para Delta ao copiar de REST API. O fluxo correto é: 1) pipeline copia a resposta JSON/Parquet para a pasta /Files (zona landing); 2) um notebook PySpark ou script SQL lê os arquivos de /Files, transforma e grava como tabela Delta em /Tables. Isso segue a arquitetura medallion.",
      "respostaCerta": "Salvar na seção Files em JSON ou Parquet e depois usar Notebook ou SQL para converter e registrar como tabela Delta em Tables.",
      "puloDoGato": "REST API → Lakehouse: Copy Data grava em /Files, depois Notebook converte para Delta em /Tables.",
      "cascasDeBanana": [
        "Usar o formato Delta diretamente na atividade Copy Data, que converte automaticamente qualquer fonte para Delta Parquet.: a atividade Copy Data não converte para Delta automaticamente ao carregar de REST API; é necessário um passo de transformação.",
        "Usar o formato Avro, que é o formato nativo de ingestão do Lakehouse e é convertido para Delta automaticamente.: Avro não é o formato nativo do Lakehouse e não é convertido automaticamente para Delta.",
        "Usar o formato CSV comprimido (.gz) diretamente na seção Tables, pois o Lakehouse converte automaticamente para Delta.: /Tables só aceita Delta; CSV não é convertido automaticamente ao ser gravado lá."
      ],
      "dicaOuro": "Ingestão de API no Lakehouse = /Files primeiro (landing), depois Notebook converte para Delta em /Tables."
    }
  },
  {
    "id": "dp600_q111",
    "text": "Como você reverte um workspace Fabric para um estado anterior usando a integração Git?",
    "options": [
      "No painel de Source Control do workspace, selecionar o commit desejado no histórico do repositório Git e usar \"Update workspace\" para restaurar o estado dos itens para aquela versão.",
      "Usando o botão \"Undo Last Deployment\" no Deployment Pipeline, que restaura automaticamente o último estado estável.",
      "Executando `git revert` no repositório e aguardando a sincronização automática do Fabric com o novo estado do branch.",
      "Criando um novo workspace a partir do branch anterior e substituindo manualmente os itens no workspace de produção."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "Reverter um workspace Fabric para um estado anterior usa a integração Git como fonte de verdade.",
      "papoReto": "No painel Source Control do workspace (Git Integration), é possível visualizar o histórico de commits do branch conectado. Ao selecionar um commit anterior e usar **Update workspace**, os itens do workspace voltam ao estado daquele ponto no tempo. É o equivalente de um `git checkout <commit>` aplicado ao workspace.",
      "respostaCerta": "No painel Source Control do workspace, selecionar o commit desejado e usar \"Update workspace\" para restaurar os itens para aquela versão.",
      "puloDoGato": "Reverter workspace = Source Control → histórico de commits → selecionar commit → Update workspace.",
      "cascasDeBanana": [
        "Usando o botão \"Undo Last Deployment\" no Deployment Pipeline: o Deployment Pipeline não tem botão de desfazer — ele promove artefatos; não reverte.",
        "Executando `git revert` no repositório e aguardando a sincronização automática: `git revert` cria um novo commit que desfaz mudanças; o Fabric não sincroniza automaticamente — é necessário usar Update workspace manualmente.",
        "Criando um novo workspace a partir do branch anterior e substituindo manualmente os itens: é um workaround manual desnecessário — a funcionalidade de reverter pelo painel Source Control é mais direta."
      ],
      "dicaOuro": "Rollback de workspace = Source Control → commit anterior → Update workspace. Sem criar novo workspace."
    }
  },
  {
    "id": "dp600_q112",
    "text": "Você percebe que uma tabela Delta no Lakehouse acumulou milhares de arquivos pequenos após semanas de cargas incrementais. Qual é a sequência correta de manutenção?",
    "options": [
      "Executar `ANALYZE TABLE` para recalcular estatísticas e depois `COMPACT` para consolidar os arquivos automaticamente.",
      "Executar `OPTIMIZE nome_tabela` para compactar arquivos pequenos e, opcionalmente, aplicar `ZORDER BY (coluna_filtro)` para colocar dados correlacionados juntos; depois executar `VACUUM` para remover arquivos obsoletos.",
      "Executar `VACUUM` primeiro para liberar espaço e depois `OPTIMIZE` para reorganizar os arquivos restantes.",
      "Recriar a tabela Delta com `CREATE TABLE AS SELECT` e excluir a tabela original para eliminar os arquivos fragmentados."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "A sequência correta de manutenção de tabela Delta com small files é OPTIMIZE primeiro, VACUUM depois.",
      "papoReto": "A ordem importa: 1) `OPTIMIZE nome_tabela` (+ `ZORDER BY coluna_mais_filtrada` se quiser) compacta os small files em arquivos maiores e reorganiza fisicamente os dados. 2) `VACUUM nome_tabela` remove os arquivos antigos que o OPTIMIZE marcou como obsoletos. Se inverter a ordem e rodar VACUUM antes, pode remover arquivos que OPTIMIZE ainda precisa referenciar.",
      "respostaCerta": "`OPTIMIZE nome_tabela` para compactar arquivos + `ZORDER BY` opcional; depois `VACUUM` para remover arquivos obsoletos.",
      "puloDoGato": "Manutenção Delta: OPTIMIZE primeiro (compacta) → VACUUM depois (limpa). Nunca invertido.",
      "cascasDeBanana": [
        "Executar `ANALYZE TABLE` e depois `COMPACT`: `COMPACT TABLE` não existe em Delta/Spark SQL. ANALYZE atualiza estatísticas mas não compacta arquivos.",
        "Executar `VACUUM` primeiro para liberar espaço e depois `OPTIMIZE`: VACUUM antes pode remover arquivos que OPTIMIZE precisaria usar para referenciar o histórico — risco de corrupção do time travel.",
        "Recriar com `CREATE TABLE AS SELECT` e excluir a original: funciona mas é destrutivo (apaga o histórico Delta/time travel) e demorado para tabelas grandes — não é a forma recomendada."
      ],
      "dicaOuro": "OPTIMIZE → VACUUM (nessa ordem). OPTIMIZE compacta; VACUUM limpa o que OPTIMIZE deixou para trás."
    }
  },
  {
    "id": "dp600_q113",
    "text": "Para que serve a função DAX `SELECTEDVALUE(coluna, alternativa)`?",
    "options": [
      "Retorna sempre o primeiro valor da coluna em ordem alfabética, independente do filtro aplicado.",
      "Retorna uma tabela com todos os valores selecionados na coluna, equivalente a VALUES() com filtro de contexto.",
      "Retorna o valor único selecionado em uma coluna pelo contexto de filtro; se nenhum ou múltiplos valores estiverem selecionados, retorna o valor alternativo especificado.",
      "Seleciona automaticamente o valor mais frequente da coluna no contexto de filtro atual."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "SELECTEDVALUE é uma função DAX para capturar o valor único selecionado por um slicer com fallback seguro.",
      "papoReto": "`SELECTEDVALUE(coluna, alternativa)` retorna o valor da coluna quando exatamente **um** valor está no contexto de filtro. Se zero valores ou múltiplos valores estiverem selecionados, retorna o valor `alternativa`. É mais limpo e seguro que `VALUES()` direto para esse cenário.",
      "respostaCerta": "Retorna o valor único da coluna no contexto de filtro; se nenhum ou múltiplos valores, retorna o valor alternativo.",
      "puloDoGato": "'Capturar o que o slicer selecionou' = SELECTEDVALUE(coluna, valor_padrão).",
      "cascasDeBanana": [
        "Retorna sempre o primeiro valor da coluna em ordem alfabética, independente do filtro aplicado.: SELECTEDVALUE respeita o contexto de filtro; não ordena nem retorna alfabeticamente por padrão.",
        "Retorna uma tabela com todos os valores selecionados na coluna, equivalente a VALUES() com filtro de contexto.: SELECTEDVALUE retorna um **valor escalar** (ou a alternativa), não uma tabela. Para tabela, use VALUES().",
        "Seleciona automaticamente o valor mais frequente da coluna no contexto de filtro atual.: frequência não é o critério — SELECTEDVALUE retorna o único valor quando há exatamente um."
      ],
      "dicaOuro": "SELECTEDVALUE = retorna o único valor selecionado. Se 0 ou múltiplos, retorna o alternativo. Ideal para slicers de seleção única."
    }
  },
  {
    "id": "dp600_q114",
    "text": "Em qual cenário o uso de um Notebook PySpark é preferível ao Dataflow Gen2 para transformação de dados no Fabric?",
    "options": [
      "Quando a fonte de dados é um arquivo Excel, pois o Dataflow Gen2 não suporta leitura de arquivos .xlsx.",
      "Quando o destino dos dados é um modelo semântico do Power BI, pois notebooks têm integração direta com o Analysis Services.",
      "Quando o usuário não tem conhecimento de programação e precisa de uma interface visual para criar transformações.",
      "Quando a transformação requer lógica complexa em Python/Scala, processamento de grandes volumes com Spark distribuído, ML feature engineering, ou operações não suportadas pelo Power Query M."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Notebook e Dataflow Gen2 resolvem problemas diferentes — a escolha depende da complexidade e do volume.",
      "papoReto": "Prefira Notebook quando: a lógica exige Python/Scala não disponível em Power Query M; o volume é muito grande para processamento Dataflow; há necessidade de ML feature engineering com Spark MLlib; ou operações como joins complexos, window functions Spark, ou bibliotecas de terceiros (pandas, scikit-learn). Para transformações visuais simples, Dataflow Gen2 é mais rápido de implementar.",
      "respostaCerta": "Quando a transformação requer lógica complexa em Python/Scala, grandes volumes Spark, ML feature engineering, ou operações não suportadas pelo Power Query M.",
      "puloDoGato": "Lógica complexa/Python/Scala/ML = Notebook. Visual sem código = Dataflow Gen2.",
      "cascasDeBanana": [
        "Quando a fonte é um arquivo Excel e o Dataflow Gen2 não suporta .xlsx.: Dataflow Gen2 suporta Excel via Power Query — essa premissa é falsa.",
        "Quando o destino é um modelo semântico do Power BI, pois notebooks têm integração direta com o Analysis Services.: Notebooks não gravam diretamente em modelos semânticos; o Dataflow Gen2 pode servir como fonte, mas a integração com modelos não é exclusiva de nenhum deles.",
        "Quando o usuário não tem conhecimento de programação: é exatamente o cenário oposto — sem programação, use Dataflow Gen2 (visual)."
      ],
      "dicaOuro": "Notebook = código + Spark + ML. Dataflow Gen2 = visual + Power Query + low-code. Escolha pelo nível de complexidade."
    }
  },
  {
    "id": "dp600_q115",
    "text": "Como os Private Endpoints são usados com o Microsoft Fabric para aumentar a segurança de rede?",
    "options": [
      "Criptografam automaticamente todos os dados em trânsito entre o Lakehouse e o modelo semântico usando chaves gerenciadas pelo cliente.",
      "Restringem o acesso ao portal do Fabric apenas a endereços IP corporativos configurados na lista de permissões.",
      "Permitem que o tráfego entre recursos Azure (como Azure SQL, ADLS Gen2) e o Fabric trafegue pela rede privada da Microsoft sem exposição à internet pública, reduzindo a superfície de ataque.",
      "Criam uma VPN dedicada entre o workspace Fabric e o datacenter on-premises para acesso seguro a dados locais."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "Private Endpoints eliminam a exposição de recursos Azure à internet pública ao conectar via backbone privado da Microsoft.",
      "papoReto": "Quando o Fabric precisa acessar recursos Azure (Azure SQL Database, ADLS Gen2), sem Private Endpoints o tráfego transita pela internet pública. Com Private Endpoints configurados, o tráfego fica inteiramente na rede privada da Microsoft (Azure backbone) — reduzindo drasticamente a superfície de ataque e atendendo requisitos de compliance que exigem isolamento de rede.",
      "respostaCerta": "Permitem que o tráfego entre recursos Azure e o Fabric trafegue pela rede privada da Microsoft, sem exposição à internet pública.",
      "puloDoGato": "'Sem internet pública', 'isolamento de rede', 'backbone Azure' = Private Endpoints.",
      "cascasDeBanana": [
        "Criptografam automaticamente todos os dados em trânsito entre o Lakehouse e o modelo semântico usando chaves gerenciadas pelo cliente.: Private Endpoints são sobre roteamento de rede; criptografia em trânsito (TLS) e chaves gerenciadas pelo cliente são recursos separados.",
        "Restringem o acesso ao portal do Fabric apenas a endereços IP corporativos configurados na lista de permissões.: isso é controle de acesso por IP no portal; Private Endpoints são sobre o canal de comunicação entre serviços.",
        "Criam uma VPN dedicada entre o workspace Fabric e o datacenter on-premises: Private Endpoints são para recursos Azure-a-Azure; para on-premises, usa-se VPN Gateway ou ExpressRoute."
      ],
      "dicaOuro": "Private Endpoint = tráfego Azure-a-Azure pelo backbone Microsoft, sem internet. VPN/ExpressRoute = para on-premises."
    }
  },
  {
    "id": "dp600_q116",
    "text": "Qual expressão DAX retorna uma tabela com os 3 produtos com maior receita total para uso em uma medida de ranking?",
    "options": [
      "`FILTER(Produto, RANK([Receita Total]) <= 3)`",
      "`TOPN(3, ALL(Produto[Nome]), [Receita Total], DESC)`",
      "`FIRSTN(3, Produto[Nome], [Receita Total])`",
      "`SELECTTOP(Produto[Nome], 3, [Receita Total], DESC)`"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "TOPN é a função DAX para selecionar os N principais registros de uma tabela por uma expressão de ordenação.",
      "papoReto": "`TOPN(3, ALL(Produto[Nome]), [Receita Total], DESC)` retorna os 3 produtos com maior receita: `3` = quantos retornar; `ALL(Produto[Nome])` = a tabela de produtos sem filtros ativos; `[Receita Total]` = expressão de ordenação; `DESC` = do maior para o menor. Essa tabela é usada como filtro em CALCULATE ou em medidas de ranking.",
      "respostaCerta": "`TOPN(3, ALL(Produto[Nome]), [Receita Total], DESC)`",
      "puloDoGato": "Top N registros em DAX = `TOPN(N, tabela, expressao_ordenacao, DESC)`. Use com ALL() para ignorar filtros do contexto.",
      "cascasDeBanana": [
        "`FILTER(Produto, RANK([Receita Total]) <= 3)`: `RANK()` não é uma função DAX nativa que funcione assim; dentro de FILTER, é necessária uma expressão DAX válida por linha.",
        "`FIRSTN(3, Produto[Nome], [Receita Total])`: `FIRSTN` não existe no DAX. É uma confusão com `TOPN`.",
        "`SELECTTOP(Produto[Nome], 3, [Receita Total], DESC)`: `SELECTTOP` não existe no DAX. O nome correto é `TOPN`."
      ],
      "dicaOuro": "Top N em DAX = TOPN(). Use com ALL() para ignorar contexto de filtro externo. FIRSTN e SELECTTOP não existem."
    }
  },
  {
    "id": "dp600_q117",
    "text": "Na arquitetura Medallion, qual é a responsabilidade da camada Bronze de um Lakehouse no Fabric?",
    "options": [
      "Receber e armazenar dados brutos das fontes originais sem transformação, preservando o formato e conteúdo original como fonte da verdade histórica.",
      "Armazenar dados agregados e otimizados para consumo direto por modelos semânticos e relatórios Power BI.",
      "Aplicar transformações de limpeza e padronização sobre os dados recebidos antes de disponibilizá-los para análise.",
      "Servir como camada de staging temporária que é truncada após cada ciclo de processamento dos dados."
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Na arquitetura medallion, Bronze é a camada de preservação fiel dos dados originais.",
      "papoReto": "A camada Bronze recebe os dados exatamente como vieram da fonte — sem limpeza, sem normalização. O objetivo é criar um registro histórico imutável que permite reprocessamento completo se as regras de negócio mudarem. Um dado errado que foi armazenado no Bronze pode ser reprocessado pela Silver com as novas regras; se tivesse sido transformado direto, a versão original estaria perdida.",
      "respostaCerta": "Receber e armazenar dados brutos das fontes originais sem transformação, preservando o formato original como fonte da verdade histórica.",
      "puloDoGato": "Bronze = ingestão raw sem transformação. Preserva o original para reprocessamento futuro.",
      "cascasDeBanana": [
        "Armazenar dados agregados e otimizados para consumo por modelos semânticos e relatórios Power BI.: isso é a camada Gold — o oposto de Bronze.",
        "Aplicar transformações de limpeza e padronização sobre os dados recebidos: isso é a camada Silver — Bronze não transforma.",
        "Servir como camada de staging temporária que é truncada após cada ciclo: Bronze é persistente e histórico — não é truncado. Staging temporário seria um pattern diferente."
      ],
      "dicaOuro": "Bronze = raw, imutável, histórico. Silver = clean. Gold = aggregated. Nunca transforme no Bronze."
    }
  },
  {
    "id": "dp600_q118",
    "text": "Qual é a diferença prática entre `HASONEVALUE(coluna)` e `SELECTEDVALUE(coluna)` em DAX?",
    "options": [
      "São funções idênticas com sintaxe diferente; ambas retornam o valor único ou BLANK se múltiplos valores estiverem selecionados.",
      "`HASONEVALUE` funciona apenas em medidas; `SELECTEDVALUE` pode ser usado em colunas calculadas e medidas.",
      "`HASONEVALUE` retorna TRUE/FALSE indicando se há exatamente um valor selecionado na coluna; `SELECTEDVALUE` retorna o valor em si ou um alternativo, sendo usado diretamente em expressões de cálculo.",
      "`HASONEVALUE` ignora filtros de slicer; `SELECTEDVALUE` considera apenas filtros aplicados por slicers no relatório."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "HASONEVALUE e SELECTEDVALUE resolvem problemas diferentes: um verifica, o outro retorna.",
      "papoReto": "`HASONEVALUE(coluna)` retorna TRUE se exatamente um valor está no contexto de filtro da coluna — ideal para uso em IFs: `IF(HASONEVALUE(Produto[Categoria]), ...)`. `SELECTEDVALUE(coluna, alternativa)` vai além: retorna o valor diretamente ou o alternativo se não houver seleção única — elimina a necessidade do IF.",
      "respostaCerta": "`HASONEVALUE` retorna TRUE/FALSE; `SELECTEDVALUE` retorna o valor em si ou o alternativo — direto em expressões de cálculo.",
      "puloDoGato": "HASONEVALUE = booleano (sim/não). SELECTEDVALUE = o próprio valor (ou fallback). SELECTEDVALUE é mais direto na maioria dos casos.",
      "cascasDeBanana": [
        "São funções idênticas com sintaxe diferente; ambas retornam o valor único ou BLANK se múltiplos valores: HASONEVALUE retorna booleano; SELECTEDVALUE retorna o valor escalar — tipos de retorno diferentes.",
        "`HASONEVALUE` funciona apenas em medidas; `SELECTEDVALUE` pode ser usado em colunas calculadas e medidas.: ambas funcionam em medidas e colunas calculadas — não há restrição de contexto.",
        "`HASONEVALUE` ignora filtros de slicer; `SELECTEDVALUE` considera apenas filtros de slicers: ambas respeitam todos os filtros do contexto; não há distinção de fonte de filtro."
      ],
      "dicaOuro": "HASONEVALUE = verifica se há um único valor (booleano). SELECTEDVALUE = retorna o valor ou fallback (escalar)."
    }
  },
  {
    "id": "dp600_q119",
    "text": "O que é o recurso de Mirroring no Microsoft Fabric e para quais fontes ele está disponível?",
    "options": [
      "É um recurso de disaster recovery que replica workspaces Fabric inteiros entre regiões geográficas do Azure automaticamente.",
      "É a funcionalidade que espelha permissões de workspace do ambiente de desenvolvimento para o ambiente de produção via Deployment Pipeline.",
      "É um recurso que replica continuamente dados de fontes externas (como Azure SQL Database, Azure Cosmos DB, Snowflake) para o OneLake em formato Delta Parquet, sem necessidade de pipelines de ETL, mantendo os dados sincronizados em near real-time.",
      "É um conector bidirecional que sincroniza dados entre Lakehouses de tenants Fabric diferentes para colaboração entre organizações."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Mirroring no Fabric resolve a ingestão contínua de bancos externos sem ETL manual.",
      "papoReto": "O Mirroring do Fabric lê o log de transações de bancos externos (Azure SQL DB, Azure Cosmos DB, Snowflake, etc.) e replica continuamente as mudanças para o OneLake em formato Delta Parquet — near real-time, sem pipelines ETL. O resultado é uma cópia analítica sempre atualizada no Fabric, disponível para Spark, SQL analytics endpoint e Direct Lake.",
      "respostaCerta": "Réplica contínua de dados de fontes externas (Azure SQL, Cosmos DB, Snowflake) para o OneLake em Delta Parquet, sem ETL, near real-time.",
      "puloDoGato": "'Sincronização contínua sem ETL' de banco externo para OneLake = Mirroring.",
      "cascasDeBanana": [
        "Recurso de disaster recovery que replica workspaces Fabric entre regiões: DR multi-região do Fabric é um recurso separado de disponibilidade; Mirroring é sobre sincronização de dados de fontes externas.",
        "Espelha permissões de workspace do Dev para Prod via Deployment Pipeline: permissões não são espelhadas pelo Deployment Pipeline; Mirroring é sobre dados, não permissões.",
        "Conector bidirecional que sincroniza dados entre Lakehouses de tenants diferentes: Mirroring é unidirecional (da fonte para o OneLake) e não cross-tenant."
      ],
      "dicaOuro": "Mirroring = banco externo → OneLake Delta, contínuo, sem ETL. É a alternativa mais simples ao pipeline de ingestão."
    }
  },
  {
    "id": "dp600_q120",
    "text": "No contexto do controle de versão Git no Fabric, o que significa o status \"Uncommitted changes\" de um item no workspace?",
    "options": [
      "O item está em conflito entre o workspace e o Git e requer resolução manual antes de qualquer operação de sincronização.",
      "O item foi modificado no workspace Fabric mas as alterações ainda não foram enviadas (committed) ao repositório Git; é necessário fazer commit para sincronizar.",
      "O item foi excluído do workspace mas ainda existe no repositório Git, aguardando confirmação de exclusão permanente.",
      "O item foi modificado no repositório Git mas ainda não foi atualizado no workspace; é necessário fazer pull para sincronizar."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "No Git Integration do Fabric, 'Uncommitted changes' tem o mesmo significado que na maioria das ferramentas Git.",
      "papoReto": "Status 'Uncommitted changes' significa que o item foi modificado no workspace Fabric, mas a mudança ainda não foi enviada (committed) ao repositório Git. O workspace está à frente do Git. Para sincronizar, é necessário selecionar o item no painel Source Control e clicar em 'Commit'.",
      "respostaCerta": "O item foi modificado no workspace Fabric mas as alterações ainda não foram enviadas ao repositório Git.",
      "puloDoGato": "'Uncommitted changes' no Fabric = workspace mudou, Git não sabe ainda. Faça commit para sincronizar.",
      "cascasDeBanana": [
        "O item está em conflito entre workspace e Git e requer resolução manual: conflito tem status próprio no painel (geralmente indicado diferente de 'uncommitted').",
        "O item foi excluído do workspace mas ainda existe no Git: exclusão teria status 'deleted' ou similar; uncommitted indica modificação, não exclusão.",
        "O item foi modificado no repositório Git mas não foi atualizado no workspace (faz pull): isso seria o oposto — Git à frente do workspace. Uncommitted = workspace à frente do Git."
      ],
      "dicaOuro": "Uncommitted = workspace mudou, Git não sabe. Commit = push da mudança para o Git. Pull = trazer Git para o workspace."
    }
  },
  {
    "id": "dp600_q121",
    "text": "No Warehouse do Fabric, qual função T-SQL você usaria para retornar o primeiro dia do mês de uma coluna de data?",
    "options": [
      "`FIRSTDAY(coluna_data, 'month')`",
      "`CONVERT(date, MONTH(coluna_data))`",
      "`DATETRUNC(month, coluna_data)` ou `DATEFROMPARTS(YEAR(coluna_data), MONTH(coluna_data), 1)` para retornar o primeiro dia do mês correspondente.",
      "`DATE_TRUNC('month', coluna_data)`"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Truncar uma data para o primeiro dia do mês é uma necessidade comum em consultas analíticas T-SQL.",
      "papoReto": "`DATETRUNC(month, coluna_data)` (disponível no SQL Server 2022 e Fabric Warehouse) retorna o primeiro dia do mês de forma direta. Alternativamente, `DATEFROMPARTS(YEAR(col), MONTH(col), 1)` constrói a data do primeiro dia explicitamente — compatível com versões mais antigas do T-SQL.",
      "respostaCerta": "`DATETRUNC(month, coluna_data)` ou `DATEFROMPARTS(YEAR(coluna_data), MONTH(coluna_data), 1)` — primeiro dia do mês correspondente.",
      "puloDoGato": "Primeiro dia do mês em T-SQL = `DATETRUNC(month, data)` (moderno) ou `DATEFROMPARTS(YEAR(data), MONTH(data), 1)` (compatível).",
      "cascasDeBanana": [
        "`FIRSTDAY(coluna_data, 'month')`: essa função não existe em T-SQL — é uma invenção. A função correta é DATETRUNC.",
        "`CONVERT(date, MONTH(coluna_data))`: `MONTH()` retorna o número do mês (1–12), não uma data; `CONVERT(date, 3)` não produz '2024-03-01'.",
        "`DATE_TRUNC('month', coluna_data)`: sintaxe PostgreSQL — não funciona no T-SQL do Fabric Warehouse."
      ],
      "dicaOuro": "Primeiro dia do mês T-SQL: `DATETRUNC(month, data)` ou `DATEFROMPARTS(YEAR(data), MONTH(data), 1)`. Nenhum outro atalho existe."
    }
  },
  {
    "id": "dp600_q122",
    "text": "Quais são as principais limitações do modo DirectQuery em um modelo semântico conectado a um Warehouse do Fabric?",
    "options": [
      "Não suporta algumas funções DAX complexas (ex: certas funções de inteligência de tempo), não permite colunas calculadas eficientes, depende da performance da fonte e não armazena dados em memória.",
      "Não suporta RLS, pois as credenciais do usuário não são propagadas para o Warehouse subjacente.",
      "Limita o número de visuais por relatório a 10, pois cada visual gera uma query separada para a fonte.",
      "Requer que o Warehouse esteja em uma capacity Premium P3 ou superior para suportar concorrência adequada."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "DirectQuery tem trade-offs reais que tornam certas funcionalidades do modelo semântico limitadas.",
      "papoReto": "No modo DirectQuery, cada interação do relatório gera queries SQL na fonte (Warehouse). Limitações: 1) algumas funções de time intelligence DAX não funcionam (DATESYTD com grain diferente, PARALLELPERIOD); 2) colunas calculadas são materializadas no refresh mas têm performance degradada; 3) sem cache em memória — cada query vai ao Warehouse; 4) latência depende da performance da fonte.",
      "respostaCerta": "Não suporta algumas funções DAX complexas, não permite colunas calculadas eficientes, depende da performance da fonte e não armazena dados em memória.",
      "puloDoGato": "DirectQuery = sempre na fonte, sem cache. Funcionalidades DAX limitadas. Performance depende do Warehouse.",
      "cascasDeBanana": [
        "Não suporta RLS, pois as credenciais não são propagadas para o Warehouse: RLS funciona em DirectQuery — as credenciais do usuário são propagadas para a fonte nos cenários suportados.",
        "Limita o número de visuais por relatório a 10: não há limite numérico de visuais por tipo de conexão; a limitação é de performance, não um teto fixo.",
        "Requer capacity Premium P3 ou superior: DirectQuery funciona em qualquer capacidade Fabric (incluindo F2); não há requisito de P3."
      ],
      "dicaOuro": "DirectQuery = consulta a fonte a cada interação, sem cache. Rápido para dados frescos, custoso em funcionalidades DAX."
    }
  },
  {
    "id": "dp600_q123",
    "text": "Em um Notebook Fabric, como você lê um arquivo CSV armazenado na seção \"Files\" do Lakehouse usando PySpark?",
    "options": [
      "`df = pd.read_csv(\"abfss://lakehouse/Files/pasta/arquivo.csv\")` usando pandas com o caminho ABFSS.",
      "`df = spark.load(\"Files/pasta/arquivo.csv\", format=\"csv\", schema=\"infer\")`",
      "`df = spark.read.csv(\"Tables/pasta/arquivo.csv\", header=True, inferSchema=True)`",
      "`df = spark.read.format(\"csv\").option(\"header\", \"true\").option(\"inferSchema\", \"true\").load(\"Files/pasta/arquivo.csv\")`"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Ler um CSV da seção Files do Lakehouse em PySpark usa o caminho relativo ao Lakehouse montado.",
      "papoReto": "Nos notebooks do Fabric Lakehouse, o sistema de arquivos do Lakehouse é montado automaticamente. O caminho `Files/pasta/arquivo.csv` já aponta para a seção /Files do Lakehouse. A sintaxe correta em PySpark: `spark.read.format(\"csv\").option(\"header\", \"true\").option(\"inferSchema\", \"true\").load(\"Files/pasta/arquivo.csv\")`.",
      "respostaCerta": "`df = spark.read.format(\"csv\").option(\"header\", \"true\").option(\"inferSchema\", \"true\").load(\"Files/pasta/arquivo.csv\")`",
      "puloDoGato": "CSV no /Files do Lakehouse = `spark.read.format('csv').option('header','true').load('Files/caminho/arquivo.csv')`.",
      "cascasDeBanana": [
        "`df = pd.read_csv(\"abfss://lakehouse/Files/pasta/arquivo.csv\")` usando pandas com o caminho ABFSS.: pandas não é otimizado para o caminho ABFSS no Fabric Lakehouse; a API PySpark com SparkSession é a forma correta.",
        "`df = spark.load(\"Files/pasta/arquivo.csv\", format=\"csv\", schema=\"infer\")`: `spark.load()` não existe — o método correto é `spark.read.format(...).load()`.",
        "`df = spark.read.csv(\"Tables/pasta/arquivo.csv\", header=True, inferSchema=True)`: o arquivo CSV está em /Files, não em /Tables; /Tables contém apenas tabelas Delta registradas."
      ],
      "dicaOuro": "CSV em /Files: `spark.read.format('csv').option('header','true').option('inferSchema','true').load('Files/...')`. Path relativo ao Lakehouse."
    }
  },
  {
    "id": "dp600_q124",
    "text": "No Admin Portal do Fabric, qual configuração de tenant permite que usuários publiquem aplicativos Power BI para toda a organização sem aprovação individual?",
    "options": [
      "A configuração \"Export and sharing settings > Allow sharing links to anyone\", que permite links públicos de acesso.",
      "A configuração \"Allow service principals to use Fabric APIs\", que habilita automações sem intervenção humana.",
      "A configuração \"Users can publish to web\", que cria links públicos anônimos para relatórios publicados.",
      "A configuração \"Publish apps to the entire organization\" na seção de configurações de tenant, que quando habilitada permite distribuição de apps sem selecionar destinatários específicos."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "Publicar apps para toda a organização é controlado por uma configuração específica no Admin Portal do Fabric.",
      "papoReto": "A configuração de tenant **'Publish apps to the entire organization'** (no Admin Portal → Tenant settings → App settings) quando habilitada permite que criadores de apps publiquem para toda a organização sem precisar selecionar usuários ou grupos específicos. Com ela desabilitada, o publicador deve sempre selecionar os destinatários manualmente.",
      "respostaCerta": "A configuração 'Publish apps to the entire organization' no Admin Portal, que permite distribuição de apps sem selecionar destinatários.",
      "puloDoGato": "Apps para toda organização sem selecionar usuários = 'Publish apps to the entire organization' habilitada no tenant.",
      "cascasDeBanana": [
        "Export and sharing settings > Allow sharing links to anyone: essa configuração cria links públicos anônimos — é diferente de publicar apps para a organização.",
        "Allow service principals to use Fabric APIs: habilita Service Principals para automação via API; não tem relação com publicação de apps.",
        "Users can publish to web: permite criar links públicos anônimos para relatórios (embed público); não é a mesma coisa que distribuir apps para a organização."
      ],
      "dicaOuro": "App para toda org = 'Publish apps to the entire organization'. Atenção: diferente de 'publish to web' (link anônimo público)."
    }
  },
  {
    "id": "dp600_q125",
    "text": "No Warehouse do Fabric, qual query calcula a diferença de vendas entre o mês atual e o mês anterior usando funções de janela T-SQL?",
    "options": [
      "`SELECT mes, vendas, vendas",
      "`SELECT mes, vendas, DIFF(vendas, 1) OVER (PARTITION BY mes) AS diferenca FROM dbo.vendas_mensais`",
      "`SELECT mes, vendas, vendas",
      "`SELECT mes, vendas, vendas"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Questão 125 cobre Warehouse/T-SQL, um tópico importante do DP-600.",
      "papoReto": "Analise o cenário apresentado: No Warehouse do Fabric, qual query calcula a diferença de vendas entre o mês atual e o mês anterior ... Considere qual opção melhor atende o requisito técnico descrito.",
      "respostaCerta": "A opção correta reflete o conceito ou prática Warehouse/T-SQL adequada para o cenário.",
      "puloDoGato": "Em questões Warehouse/T-SQL, procure pela solução que resolve exatamente o requisito, não aproximações.",
      "cascasDeBanana": [
        "Opção alternativa 1: abordagem válida mas não resolve o cenário específico.",
        "Opção alternativa 2: conceito relacionado em contexto errado.",
        "Opção alternativa 3: armadilha comum ou confusão frequente entre conceitos."
      ],
      "dicaOuro": "Warehouse = T-SQL padrão com suporte completo a DDL/DML."
    }
  },
  {
    "id": "dp600_q126",
    "text": "Qual é a vantagem de usar `SWITCH(TRUE(), ...)` em vez de `IF` aninhados em DAX?",
    "options": [
      "`SWITCH(TRUE(), ...)` usa lazy evaluation e para na primeira condição verdadeira, consumindo menos memória que IF aninhados.",
      "`SWITCH(TRUE(), ...)` é avaliado em paralelo pelo motor DAX, enquanto IFs aninhados são sempre sequenciais.",
      "`SWITCH(TRUE(), ...)` melhora a legibilidade do código e é mais fácil de manter ao avaliar múltiplas condições sequencialmente, funcionando como um case/when sem criar aninhamentos profundos de IF.",
      "`SWITCH` suporta até 64 condições, enquanto IFs aninhados têm limite de 7 níveis no DAX do Fabric."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "SWITCH(TRUE(), ...) oferece alternativa elegante e performática aos IFs aninhados em DAX.",
      "papoReto": "SWITCH(TRUE(), condicao1, resultado1, condicao2, resultado2, ..., padrao) avalia cada condição em sequência e retorna o resultado da primeira verdadeira. Comparado a IFs aninhados: `IF(c1, r1, IF(c2, r2, IF(c3, r3, ...)))`, SWITCH é muito mais legível e o compilador DAX o otimiza melhor — reduzindo a complexidade aninhada exponencialmente.",
      "respostaCerta": "SWITCH(TRUE(), ...) é mais legível que IFs aninhados e oferece melhor performance de compilação.",
      "puloDoGato": "Múltiplas condições DAX? SWITCH(TRUE(), ...) é a forma idiomática — mais clara que IFs aninhados.",
      "cascasDeBanana": [
        "SWITCH não avalia lazy (avalia tudo antes): SWITCH é lazy — avalia até encontrar primeira verdadeira e para.",
        "IF aninhado é mais rápido: não — SWITCH geralmente mais otimizado.",
        "SWITCH só para valores, não condições: SWITCH(TRUE(), ...) funciona perfeitamente com booleanos."
      ],
      "dicaOuro": "DAX com múltiplas IFs aninhadas = SWITCH(TRUE(), cond1, res1, cond2, res2, ..., default). Mais legível."
    }
  },
  {
    "id": "dp600_q127",
    "text": "O que é o Eventstream no Microsoft Fabric e qual é sua função principal?",
    "options": [
      "Uma fila de mensagens assíncrona que buffer transformações de Dataflow Gen2 para execução em horários de baixa carga.",
      "Um serviço de ingestão e roteamento de dados de streaming em tempo real que captura eventos de fontes como Azure Event Hubs, IoT Hub e Kafka, transforma e direciona para destinos como Eventhouse, Lakehouse ou outros Eventstreams.",
      "Um sistema de notificações que envia alertas por e-mail ou Teams quando thresholds de dados são atingidos em Lakehouses.",
      "Um agendador de eventos baseado em calendário que dispara Data Pipelines em horários configurados com suporte a feriados regionais."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Eventstream é o hub central de ingestão e roteamento de eventos em tempo real no Microsoft Fabric.",
      "papoReto": "Eventstream captura eventos de múltiplas fontes (IoT devices, Kafka, APIs, eventos de aplicação) em tempo real e os roteia para múltiplos destinos (Lakehouse, KQL Database, Power BI). Um único Eventstream alimenta múltiplos consumers — elimina duplicação de pipelines e mantém dados centralizados no OneLake.",
      "respostaCerta": "Hub central que ingesta eventos em tempo real de múltiplas fontes e roteia para destinos diversos.",
      "puloDoGato": "'Dados em tempo real', 'múltiplas fontes', 'eventos Kafka/IoT' = Eventstream. Data Pipeline é para batch agendado.",
      "cascasDeBanana": [
        "Eventstream é apenas para ingestão, não roteamento: roteamento para múltiplos destinos é exatamente o propósito.",
        "Eventstream funciona apenas com Kafka externo: suporta Kafka, IoT, aplicações, HTTP — diversas fontes.",
        "Para real-time, use Data Pipeline: Data Pipeline é agendado/batch. Real-time requer Eventstream."
      ],
      "dicaOuro": "Real-time multichannel → Eventstream. Batch agendado → Data Pipeline. Cores completamente diferentes."
    }
  },
  {
    "id": "dp600_q128",
    "text": "Como o Lineage View do Microsoft Fabric ajuda no gerenciamento de dependências entre itens?",
    "options": [
      "Calcula automaticamente a ordem de atualização dos itens no workspace com base nas dependências identificadas.",
      "Monitora em tempo real o desempenho de cada item do workspace e gera alertas quando há degradação de performance.",
      "Exibe o histórico completo de alterações de cada item com data, usuário responsável e descrição da mudança.",
      "Exibe visualmente o fluxo de dados entre fontes, Lakehouses, Warehouses, modelos semânticos e relatórios, permitindo identificar impactos de alterações e rastrear a origem dos dados."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "Lineage View fornece visibilidade gráfica das dependências de dados entre itens do workspace.",
      "papoReto": "Lineage View (UI do Fabric) mostra graficamente: qual API alimenta qual Dataflow, qual Lakehouse consome qual origem, qual modelo semântico depende de qual tabela. Ajuda a: 1) entender impacto de mudança (mudar tabela X quebra qual relatório?); 2) detectar silos ou duplicação desnecessária; 3) rastrear problemas até origem; 4) validar arquitetura de dados.",
      "respostaCerta": "Visualização gráfica da linhagem de dados, mostrando como cada item depende de outros e impactos de mudanças.",
      "puloDoGato": "'Mudei tabela X e quebrou relatório Y' = Lineage View mostra exatamente o caminho de dependência.",
      "cascasDeBanana": [
        "Lineage é apenas visual, não mostra conteúdo de dados: mostra estrutura e dependências, não dados.",
        "Lineage View só para Power BI: funciona para todos itens Fabric (Lakehouse, Warehouse, Dataflow, Eventstream, Pipeline).",
        "Lineage deve ser atualizado manualmente: é automático — reflete dependências reais e atualizadas."
      ],
      "dicaOuro": "Lineage View = mapa de dependências de dados. Essencial para entender impacto de mudanças e governança."
    }
  },
  {
    "id": "dp600_q129",
    "text": "Em PySpark com Delta Lake no Fabric, qual é a sintaxe correta para um MERGE (upsert) em uma tabela Delta?",
    "options": [
      "`df_fonte.write.format(\"delta\").mode(\"merge\").option(\"mergeKey\", \"id\").save(\"Tables/tabela_destino\")`",
      "`DeltaTable.forName(spark, \"tabela_destino\").alias(\"dest\").merge(df_fonte.alias(\"src\"), \"dest.id = src.id\").whenMatchedUpdateAll().whenNotMatchedInsertAll().execute()`",
      "`DeltaTable.merge(df_fonte, tabela_destino, on=\"id\", how=\"upsert\").execute(spark)`",
      "`spark.sql(\"MERGE INTO tabela_destino USING df_fonte ON id WHEN MATCHED UPDATE WHEN NOT MATCHED INSERT\")`"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "MERGE em PySpark Delta Lake executa operação de upsert (insert ou update) baseada em condição de match.",
      "papoReto": "Sintaxe: `DeltaTable.forName(spark, 'tabela').merge(source, 'condicao_match').whenMatched().update(...).whenNotMatched().insert(...).execute()`. Exemplo: `merge on id` — se ID existe em ambas tabelas, update; se ID só em source, insert. Isso substitui delete + insert (menos eficiente).",
      "respostaCerta": "`DeltaTable.forName(spark, 'tabela').merge(...).whenMatched().update(...).whenNotMatched().insert(...).execute()`",
      "puloDoGato": "Upsert em Delta (insert ou update conforme match) = MERGE com whenMatched/whenNotMatched.",
      "cascasDeBanana": [
        "MERGE substitui INSERT (nunca UPDATE): MERGE faz ambos — insere se não encontra, atualiza se encontra.",
        "MERGE em PySpark usa modo='merge': não — usa API DeltaTable.merge(), não modo no write.",
        "MERGE requer tabela externa: tabela deve ser managed Delta; tabelas externas não suportam MERGE."
      ],
      "dicaOuro": "MERGE = upsert Delta atômico. Condição match → update ou insert. Melhor que delete+insert."
    }
  },
  {
    "id": "dp600_q130",
    "text": "Em um Composite Model, por que tabelas de dimensão geralmente são configuradas no modo Dual em vez de Import ou DirectQuery?",
    "options": [
      "O modo Dual habilita a atualização automática das dimensões a cada 15 minutos sem necessidade de refresh manual.",
      "O modo Dual é obrigatório para tabelas de dimensão em modelos que usam Direct Lake, pois Import não é compatível com esse modo.",
      "O modo Dual reduz o tamanho do modelo semântico ao não armazenar os dados de dimensão em memória, usando apenas cache temporário.",
      "O modo Dual permite que a tabela funcione como Import ao ser combinada com tabelas Import (desempenho máximo) e como DirectQuery ao ser combinada com tabelas DirectQuery, eliminando a necessidade de cross-source joins desnecessários."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "Composite Models combinam Import e DirectQuery na mesma estrutura, otimizando tamanho e performance.",
      "papoReto": "Em um Composite Model: dimensões (pequenas) em modo Dual + Import para cache local quando usado com Import; fatos (gigantescos) em DirectQuery para consultar fonte sob demanda. Modo Dual em dimensão permite que funcione como Import quando combinada com fatos Import (cache rápido) e como DirectQuery quando combinada com fatos DirectQuery (evita cross-source join). Resultado: reduz tamanho do modelo + mantém responsividade.",
      "respostaCerta": "Modo Dual permite dimensões funcionarem como Import/DirectQuery conforme necessário, reduzindo tamanho e mantendo performance.",
      "puloDoGato": "Fatos grandes + dimensões pequenas = Composite. Dimensão (Dual) + Fato (DirectQuery). Melhor dos dois mundos.",
      "cascasDeBanana": [
        "Modo Dual atualiza dimensões a cada 15 min automaticamente: Dual não é sobre refresh automático — é modo conectividade.",
        "Modo Dual é obrigatório com Direct Lake: Direct Lake não usa Composite — é seu próprio modelo.",
        "Dual reduz tamanho não armazenando em memória: Dual em modo Import sim armazena — o ponto é flexibilidade."
      ],
      "dicaOuro": "Composite Model: dimensão Dual + fato DirectQuery. Reduz tamanho, mantém performance. Sem cross-source join."
    }
  },
  {
    "id": "dp600_q131",
    "text": "Em KQL, qual função retorna a data e hora atual no Eventhouse para uso em filtros temporais?",
    "options": [
      "`current_timestamp()`",
      "`TODAY()`",
      "`GETDATE()`",
      "`now()` retorna o timestamp atual em UTC; também pode ser usado `datetime(yyyy-mm-dd)` para datas fixas ou `ago(Xh)` para intervalos relativos."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "KQL oferece funções nativas otimizadas para trabalhar com datas e séries temporais.",
      "papoReto": "`now()` retorna data/hora atual em KQL. Para filtros de intervalo: `| where EventTime > ago(1h)` captura últimas 1 hora. Idiomaticamente em KQL: `ago(1h)`, `ago(30m)`, `ago(7d)` — não `GETDATE()` (T-SQL) ou `CURRENT_TIMESTAMP` (SQL standard).",
      "respostaCerta": "`now()` retorna data/hora atual; `ago(timespan)` para intervalos relativos (1h, 30m, 7d).",
      "puloDoGato": "Data atual KQL = now(). Últimas 24h = ago(24h). Idiomático para séries temporais/logs.",
      "cascasDeBanana": [
        "`GETDATE()`: função T-SQL, não KQL. Nem `CURRENT_TIMESTAMP` (SQL standard).",
        "`ago()` retorna valor absoluto: `ago()` retorna tempo relativo — `ago(1h)` = 1 hora atrás.",
        "`now()` + timegran para arredondar: use `now() - (now() % 1h)` para arredondar — padrão em séries."
      ],
      "dicaOuro": "KQL séries temporais: now() + ago(timespan). Idiomático em Eventhouse/KQL DB para logs/eventos."
    }
  },
  {
    "id": "dp600_q132",
    "text": "Como uma Managed Identity do Azure é usada para autenticar conexões de recursos do Fabric com serviços externos como Azure Key Vault ou Azure SQL?",
    "options": [
      "A Managed Identity da capacity Fabric pode ser configurada como identidade de autenticação para acessar serviços Azure sem armazenar credenciais explícitas, usando o token gerenciado automaticamente pelo Azure AD.",
      "A Managed Identity substitui completamente o gateway de dados on-premises para conexões com fontes Azure externas ao Fabric.",
      "A Managed Identity é criada manualmente no workspace e precisa ter suas credenciais rotacionadas a cada 90 dias via Azure Key Vault.",
      "A Managed Identity é usada exclusivamente para autenticar o Deployment Pipeline com repositórios Git privados no Azure DevOps."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "Managed Identity do Azure permite automação segura sem credenciais armazenadas no código.",
      "papoReto": "Managed Identity é identidade gerenciada automaticamente pelo Azure. Workspace Fabric com Managed Identity pode acessar recursos Azure (Azure SQL, Key Vault, ADLS Gen2, Cognitive Services) sem armazenar credenciais — apenas permissões RBAC configuradas no recurso Azure. Pipeline/Notebook herda permissões da identidade automaticamente. Seguro, auditável, sem vazamento de secrets.",
      "respostaCerta": "Identidade gerenciada Azure que permite acesso seguro a recursos sem credenciais hardcoded; usa RBAC.",
      "puloDoGato": "Automação Fabric → Azure sem secrets: use Workspace Identity (Managed Identity) + configure RBAC no recurso.",
      "cascasDeBanana": [
        "Managed Identity requer senha configurada: não — totalmente gerenciada pelo Azure.",
        "Service Principal é mais seguro que Managed Identity: complementários — Managed Identity é mais simples para Fabric.",
        "Managed Identity apenas para Fabric, não para recursos Azure: funciona com qualquer recurso Azure."
      ],
      "dicaOuro": "Automação segura: Workspace Identity (Managed) + RBAC. Sem credenciais, auditável, conformidade."
    }
  },
  {
    "id": "dp600_q133",
    "text": "Além do formato Delta, quais outros formatos de arquivo o Fabric suporta para leitura na seção Files de um Lakehouse?",
    "options": [
      "Apenas Delta Parquet e CSV; outros formatos precisam ser convertidos antes da ingestão no Lakehouse.",
      "Parquet, CSV, JSON, Avro, ORC, Excel (.xlsx), XML e outros formatos via notebooks PySpark ou Dataflows Gen2.",
      "Apenas formatos Microsoft nativos: Excel, Access (.accdb) e texto delimitado (.txt).",
      "Apenas Parquet e Delta"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "O Fabric suporta múltiplos formatos de arquivo para máxima flexibilidade de ingestão.",
      "papoReto": "A seção /Files do Lakehouse aceita qualquer formato que PySpark (Apache Spark) possa ler nativamente: CSV, JSON, Parquet, Avro, ORC, Excel (.xlsx), XML, Delta e muitos outros. Dataflow Gen2 (Power Query) também suporta vasta gama. Se precisar registrar como tabela Delta formal, dados precisam ser estruturados ou schema precisar ser inferido — semi-estruturado (JSON) funciona com `inferSchema` ou schema explícito.",
      "respostaCerta": "Parquet, CSV, JSON, Avro, ORC, Excel, XML e outros — qualquer formato que Spark suporta.",
      "puloDoGato": "'Preciso guardar arquivo em /Files' = qualquer formato. Spark lê. Depois transforma e registra como Delta se precisar.",
      "cascasDeBanana": [
        "Apenas Delta e Parquet suportados: Spark lê CSV, JSON, Avro, ORC, Excel direto — sem conversão.",
        "Binário (PDF, imagens) suportado para análise: binário puro não é \"suportado\" para análise estruturada.",
        "Excel requer PowerQuery para ingestão: Excel suportado direto em PySpark (openpyxl) e Dataflow."
      ],
      "dicaOuro": "Formatos /Files: CSV, JSON, Parquet, Avro, ORC, Excel, XML — Spark é agnóstico a formato de arquivo."
    }
  },
  {
    "id": "dp600_q134",
    "text": "Para que serve a função DAX `CROSSFILTER()` e quando ela é necessária?",
    "options": [
      "Modifica a direção de filtragem de um relacionamento dentro de uma expressão CALCULATE, permitindo ativar filtragem bidirecional ou desativar um relacionamento pontualmente sem alterar a configuração permanente do modelo.",
      "Aplica um filtro cruzado entre todos os visuais de uma página de relatório, sincronizando seleções automaticamente.",
      "Substitui o CROSSJOIN ao calcular produtos cartesianos de tabelas dentro de expressões de tabela DAX.",
      "Cria um relacionamento temporário entre duas tabelas não relacionadas no modelo para uso exclusivo dentro de uma medida DAX."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "CROSSFILTER modifica a direcao de filtragem entre tabelas relacionadas em expressoes DAX.",
      "papoReto": "CROSSFILTER(tabela1, tabela2, direccao) dentro de CALCULATE modifica como um relacionamento filtra: 'Both' (bidirecional), 'OneWay' (tabela1 para tabela2), 'None' (desativa). Util quando direcao padrao nao atende uma medida especifica.",
      "respostaCerta": "Modifica direcao de filtragem do relacionamento (Both/OneWay/None) apenas dentro de CALCULATE.",
      "puloDoGato": "Relacionamento nao filtra conforme esperado em medida DAX? Use CROSSFILTER dentro de CALCULATE.",
      "cascasDeBanana": [
        "CROSSFILTER cria novo relacionamento: modifica existente temporariamente.",
        "CROSSFILTER funciona fora de CALCULATE: apenas dentro de CALCULATE.",
        "Para cartesiano, use CROSSFILTER: para cartesiano use CROSSJOIN."
      ],
      "dicaOuro": "CROSSFILTER = mudar direcao filtro DAX. Dentro CALCULATE. Both/OneWay/None opcoes."
    }
  },
  {
    "id": "dp600_q135",
    "text": "Como um modelo semântico no modo Direct Lake acessa os dados do OneLake sem importá-los para memória?",
    "options": [
      "O motor Direct Lake carrega os segmentos de coluna (column segments) dos arquivos Delta Parquet do OneLake diretamente no buffer de memória do motor analítico sob demanda, sem passar por uma query SQL intermediária.",
      "O motor Direct Lake importa automaticamente apenas as colunas usadas nos visuais ativos, descartando o restante após cada sessão.",
      "O motor Direct Lake usa o SQL Analytics Endpoint do Lakehouse como intermediário para todas as consultas DAX geradas pelo modelo.",
      "O motor Direct Lake cria uma conexão ODBC permanente com o OneLake e transmite os dados por streaming conforme as queries DAX são executadas."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "Direct Lake quebra o dilema entre Import (rapido) e DirectQuery (fresco).",
      "papoReto": "Direct Lake carrega column segments de Delta Parquet do OneLake sob demanda sem importar memoria e sem query SQL. Motor VertiPaq analítico acessa segments conforme consultado.",
      "respostaCerta": "Motor analítico acessa column segments Delta sob demanda, sem import nem query SQL.",
      "puloDoGato": "Import rapido desatualiza; DirectQuery fresco lento = use Direct Lake (rapido + fresco).",
      "cascasDeBanana": [
        "Direct Lake importa memoria: carrega segments sob demanda.",
        "Direct Lake requer tabela inteira memoria: segments carregam conforme consultados.",
        "Direct Lake qualquer SQL externo: apenas Delta nativo OneLake."
      ],
      "dicaOuro": "Direct Lake = column segments sob demanda. Sem import, sem SQL. Modo ideal Fabric."
    }
  },
  {
    "id": "dp600_q136",
    "text": "Qual é o endpoint correto da API REST do Fabric para disparar o refresh de um modelo semântico programaticamente?",
    "options": [
      "`POST https://api.powerbi.com/v1.0/myorg/datasets/{datasetId}/refreshes`",
      "`GET https://api.fabric.microsoft.com/v1/workspaces/{workspaceId}/refresh?itemType=SemanticModel`",
      "`POST https://api.fabric.microsoft.com/v1/workspaces/{workspaceId}/items/{semanticModelId}/jobs/instances?jobType=DefaultDatasetRefreshJob`",
      "`POST https://management.azure.com/fabric/workspaces/{workspaceId}/semanticmodels/{modelId}/refresh`"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "As APIs REST do Microsoft Fabric fornecem múltiplos endpoints, e escolher o correto depende da versão e do tipo de job desejado.",
      "papoReto": "O Fabric v1 API usa a estrutura `/v1/workspaces/{workspaceId}/items/{semanticModelId}/jobs/instances` com `jobType=DefaultDatasetRefreshJob` via POST. Este é o endpoint moderno e recomendado para disparar refreshes de modelos semânticos no Fabric. Os endpoints antigos do Power BI (power bi.com) ou Azure Management plane não seguem essa hierarquia ou não existem para essa operação.",
      "respostaCerta": "POST para /v1/workspaces/{workspaceId}/items/{semanticModelId}/jobs/instances com jobType=DefaultDatasetRefreshJob.",
      "puloDoGato": "Se vê `/v1/workspaces/` + `/items/{semanticModelId}/jobs/instances`, é Fabric moderno. Endpoints com `/datasets/` ou `/management.azure.com/` são antigos.",
      "cascasDeBanana": [
        "power bi.com datasets endpoint: é o endpoint legado do Power BI. Não funciona com Fabric v1 API.",
        "GET com fabric.microsoft.com: refresh sempre requer POST, não GET. Um GET consultaria status, não iniciaria refresh.",
        "management.azure.com: Azure Management plane não fornece esse endpoint para refresh; Fabric usa seu próprio v1 API."
      ],
      "dicaOuro": "Fabric v1 API estrutura: `/v1/workspaces/{id}/items/{itemId}/jobs/instances?jobType=DefaultDatasetRefreshJob`. POST para iniciar."
    }
  },
  {
    "id": "dp600_q137",
    "text": "Em um Notebook Fabric, como você configura o Spark para permitir evolução automática de schema ao escrever em uma tabela Delta?",
    "options": [
      "`DeltaTable.forName(spark, \"nome\").alterSchema(evolve=True)`",
      "`spark.enableSchemaEvolution(table=\"nome_tabela\", mode=\"auto\")`",
      "`spark.conf.set(\"spark.sql.delta.schemaEvolution\", \"auto\")`",
      "`spark.conf.set(\"spark.databricks.delta.schema.autoMerge.enabled\", \"true\")` antes da operação de escrita, ou usando `.option(\"mergeSchema\", \"true\")` diretamente no writer."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "A evolução automática de schema no Delta Lake permite que novas colunas sejam adicionadas durante escritas sem truncar a tabela.",
      "papoReto": "No Spark, a evolução de schema é habilitada via `spark.conf.set('spark.sql.delta.schemaEvolution', 'auto')` ou localmente no writer com `.option('mergeSchema', 'true')`. A config global afeta todas as operações subsequentes; a opção no writer é específica daquela escrita. A sintaxe `spark.enableSchemaEvolution()` ou `DeltaTable.alterSchema()` não são mecanismos de evolução automática.",
      "respostaCerta": "Usar spark.conf.set com 'spark.sql.delta.schemaEvolution' = 'auto' ou .option('mergeSchema', 'true') no writer.",
      "puloDoGato": "Se a questão fala 'evolução automática de schema' em Spark/Delta, procure `mergeSchema=true` ou `schemaEvolution`. DeltaTable.alterSchema é estático.",
      "cascasDeBanana": [
        "DeltaTable.forName com alterSchema: método para alteração manual de schema, não automática. Não funciona em modo escrita contínua.",
        "spark.enableSchemaEvolution(): sintaxe não existe no Apache Spark. O correto é conf.set(), não um método spark direto.",
        "spark.databricks.delta.schema.autoMerge: sintaxe Databricks proprietária, não Microsoft Fabric/Spark. Fabric usa spark.sql.delta.schemaEvolution."
      ],
      "dicaOuro": "Schema Evolution automático: `.option('mergeSchema', 'true')` ou `spark.conf.set('spark.sql.delta.schemaEvolution', 'auto')`. Aplica durante escritas."
    }
  },
  {
    "id": "dp600_q138",
    "text": "O que é a opção \"Auto Date/Time\" no Power BI Desktop e qual é seu impacto em modelos semânticos no Fabric?",
    "options": [
      "Detecta automaticamente colunas de data nas fontes e converte para o tipo Date durante a importação, sem criar tabelas adicionais.",
      "Sincroniza o fuso horário das colunas de data com o fuso do tenant Azure automaticamente durante o refresh do modelo.",
      "Atualiza automaticamente os filtros de data nos relatórios para sempre mostrar o período mais recente disponível nos dados.",
      "Cria automaticamente tabelas de data ocultas para cada coluna de data no modelo, habilitando inteligência de tempo sem tabela de datas explícita; deve ser desabilitada em modelos grandes pois aumenta o tamanho e o tempo de refresh."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "A opção 'Auto Date/Time' no Power BI Desktop cria automaticamente infraestrutura de datas para análises temporais.",
      "papoReto": "Quando habilitada, Auto Date/Time cria tabelas de data ocultas (Year-Quarter-Month-Day hierarchies) para cada coluna Date no modelo. Isso habilita time intelligence (YTD, MTD, growth rates) e cálculos de período sem dimensão de data manual. Porém, em modelos grandes, essas tabelas ocultas aumentam significativamente o tamanho do arquivo .pbix e degradam a velocidade de refresh — por isso deve ser desabilitada em ambientes Production.",
      "respostaCerta": "Cria tabelas de data ocultas para cada coluna Date, habilitando time intelligence; deve ser desabilitada em modelos grandes.",
      "puloDoGato": "'Auto Date/Time' = tabelas ocultas de hierarquias de data. Grande vantagem em modelos pequenos, problema em modelos enterprise-scale.",
      "cascasDeBanana": [
        "Detecta e converte tipo durante importação: Auto Date/Time não converte tipo; pressupõe que coluna já seja Date. Apenas cria hierarquias.",
        "Sincroniza fuso horário: o recurso não lida com fusos horários; é puro mapeamento Date → Hierarchy.",
        "Atualiza filtros de data automaticamente: Auto Date/Time estrutura o modelo, não atualiza filtros de relatório em tempo de execução."
      ],
      "dicaOuro": "Auto Date/Time = tabelas ocultas Date-Hierarchy. Bom para small models, prejudicial em enterprise-scale. Always disable em Production."
    }
  },
  {
    "id": "dp600_q139",
    "text": "Como você cria uma tabela externa no SQL Analytics Endpoint de um Lakehouse para referenciar arquivos Parquet na seção Files?",
    "options": [
      "Executando `sp_create_external_table 'Files/caminho', 'nome_tabela'` via stored procedure nativa do SQL Analytics Endpoint.",
      "Usando `CREATE EXTERNAL TABLE` não é suportado diretamente; a abordagem correta é usar um Notebook PySpark para registrar a tabela Delta com `spark.sql(\"CREATE TABLE nome USING DELTA LOCATION 'Files/caminho'\")` tornando-a visível no SQL endpoint.",
      "Usando o Visual Query Editor com a opção \"New External Table\" disponível no menu de contexto da seção Files.",
      "`CREATE EXTERNAL TABLE dbo.nome (colunas) WITH (LOCATION = 'Files/caminho', DATA_SOURCE = OneLake, FILE_FORMAT = PARQUET)`"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No SQL Analytics Endpoint do Lakehouse, não há suporte direto a CREATE EXTERNAL TABLE como há em SQL Server.",
      "papoReto": "O Lakehouse SQL Analytics Endpoint é um endpoint de leitura apenas sobre Delta Lake. Para expor arquivos como tabelas consultáveis via SQL, registre via Notebook PySpark usando `spark.sql('CREATE TABLE nome USING DELTA LOCATION ...')`. Uma vez registrada no catálogo Spark, a tabela fica automaticamente visível no SQL endpoint como tabela gerenciada Delta (não externa).",
      "respostaCerta": "Usar Notebook PySpark para registrar a tabela com CREATE TABLE USING DELTA, que então aparece no SQL endpoint.",
      "puloDoGato": "SQL Analytics Endpoint = leitura apenas sobre Delta. Para expor arquivos, use PySpark `CREATE TABLE USING DELTA LOCATION`, não CREATE EXTERNAL TABLE.",
      "cascasDeBanana": [
        "sp_create_external_table: procedure não existe em Fabric. Seria sintaxe legada de SQL Server, não Lakehouse nativo.",
        "Visual Query Editor 'New External Table': opção não existe na UI. Lakehouse requer PySpark ou T-SQL gerenciado.",
        "CREATE EXTERNAL TABLE com sintaxe tradicional: Lakehouse é cloud-native e usa tabelas Delta gerenciadas, não external tables."
      ],
      "dicaOuro": "Lakehouse SQL endpoint: apenas tabelas Delta gerenciadas. Registre via PySpark CREATE TABLE USING DELTA LOCATION. Zero external tables."
    }
  },
  {
    "id": "dp600_q140",
    "text": "O que é a Workspace Identity no Microsoft Fabric e qual é seu caso de uso principal?",
    "options": [
      "A identidade visual do workspace, incluindo tema, ícone e descrição, usada para personalizar a experiência dos usuários no portal Fabric.",
      "Uma identidade gerenciada associada ao workspace que permite que itens do Fabric (como pipelines e notebooks) acessem recursos externos do Azure de forma segura sem credenciais de usuário armazenadas.",
      "Uma conta de serviço criada automaticamente no Azure AD para representar o workspace em integrações com Microsoft Teams.",
      "O alias único do workspace usado na URL de acesso e nas APIs REST para identificar o workspace no tenant."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "A Workspace Identity no Fabric é um serviço de segurança que permite que itens do workspace acessem recursos Azure sem armazenar credenciais.",
      "papoReto": "Workspace Identity é uma identidade gerenciada (Managed Identity) associada ao workspace. Ela permite que Data Pipelines, Notebooks, KQL Databases e outros itens Fabric autentiquem-se contra recursos do Azure (Storage, Key Vault, SQL Database) usando RBAC sem armazenar senhas ou connection strings. É a abordagem moderna de autenticação zero-trust.",
      "respostaCerta": "Uma identidade gerenciada que permite acesso seguro a recursos Azure sem credenciais de usuário.",
      "puloDoGato": "Workspace Identity para acesso seguro a recursos Azure; sem credenciais hardcoded. Similar a Service Principal, mas gerenciado nativamente.",
      "cascasDeBanana": [
        "Identidade visual do workspace: isso seria branding (tema, ícone); não é um mecanismo de autenticação.",
        "Conta de serviço Azure AD para Teams: Workspace Identity não é específica para Teams; funciona para qualquer recurso Azure.",
        "Alias único na URL: isso seria identificador técnico/nome, não um mecanismo de acesso seguro."
      ],
      "dicaOuro": "Workspace Identity = Managed Identity para o workspace. Casos: Data Pipeline acessar Data Lake, Notebook executar API externa, sem credenciais."
    }
  },
  {
    "id": "dp600_q141",
    "text": "O que são Computed Entities em Dataflows Gen2 e qual é sua vantagem?",
    "options": [
      "São entidades (queries) baseadas em outras entidades já processadas dentro do mesmo dataflow, que reutilizam o resultado em cache da etapa anterior, evitando reprocessamento da fonte original e melhorando o desempenho.",
      "São entidades que executam cálculos DAX dentro do Dataflow Gen2, integrando lógica de modelo semântico na camada de preparação.",
      "São tabelas calculadas criadas automaticamente pelo Dataflow Gen2 ao detectar padrões de agregação frequentes nas transformações.",
      "São entidades externas referenciadas por Shortcuts que o dataflow processa sem copiar os dados para o workspace."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Computed Entities são queries baseadas em outras entidades já processadas dentro do mesmo dataflow. Ao invés de reler a fonte original, elas reutilizam o resultado em cache da etapa anterior — isso reduz latência, economia de banda e evita processamento redundante. Internamente, o Dataflow Gen2 mantém o estado do resultado anterior em cache antes de prosseguir para a próxima entidade.",
      "respostaCerta": "São entidades (queries) baseadas em outras entidades já processadas dentro do mesmo dataflow, que reutilizam o resultado em cache da etapa anterior, evitando reprocessamento da fonte original e melhorando o desempenho. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Dataflow com múltiplas etapas? Computed Entities reutilizam cache anterior. Sem cache, seria reprocessar a fonte original toda vez.",
      "cascasDeBanana": [
        "Cálculos DAX no Dataflow: DAX é linguagem de modelagem (modelo semântico), não transformação no dataflow. Power Query no Dataflow Gen2 usa expressões M, não DAX.",
        "Tabelas calculadas automáticas: nenhuma automação detecta padrões de agregação e cria tabelas. Computed Entities exigem definição manual no dataflow.",
        "Entidades externas via Shortcuts: Shortcuts referenciam dados sem copiar, mas não são 'computed' — são referências diretas, sem processamento no dataflow."
      ],
      "dicaOuro": "Computed Entities = 'query sobre resultado anterior, não sobre fonte original'. Benchmark: etapa 1 lê SQL (5min), etapa 2 (computed) processa resultado em cache (30s)."
    }
  },
  {
    "id": "dp600_q142",
    "text": "Para que serve a função DAX `TREATAS(tabela, coluna1, coluna2, ...)` em um modelo semântico?",
    "options": [
      "Aplica formatação condicional a uma medida com base nos valores de uma tabela de configuração externa ao contexto de filtro.",
      "Cria uma hierarquia de tratamento de erros DAX que redireciona o cálculo para colunas alternativas quando a principal retorna BLANK.",
      "Trata valores nulos em uma tabela substituindo-os pelos valores correspondentes das colunas especificadas de outra tabela.",
      "Aplica os valores de uma tabela como filtro em colunas especificadas de outra tabela, simulando um relacionamento virtual entre tabelas não diretamente relacionadas no modelo."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "No contexto do DP-600, implementar e gerenciar modelo semântico exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "TREATAS() simula um relacionamento virtual: ele pega valores de uma tabela e os aplica como filtro em colunas de outra tabela, criando uma conexão implícita que o DAX então usa em cálculos. É útil quando tabelas não têm relacionamento explícito no modelo mas você quer filtros cruzados — o TREATAS força a correspondência de valores.",
      "respostaCerta": "Aplica os valores de uma tabela como filtro em colunas especificadas de outra tabela, simulando um relacionamento virtual entre tabelas não diretamente relacionadas no modelo. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "'Sem relacionamento explícito mas preciso filtrar por coluna de outra tabela?' Use TREATAS(). Tipo Power Query join virtual em DAX.",
      "cascasDeBanana": [
        "Formatação condicional com TREATAS: formatação condicional usa TRUE/FALSE lógico, não TREATAS. TREATAS cria contextos de filtro, não aplica estilos.",
        "Tratamento de erros/redirecionamento: TREATAS não é mecanismo de fallback. IFERROR() ou IF() lidam com erros; TREATAS lida com filtros virtuais.",
        "Substituição de valores nulos: TREATAS não substitui NULLs. Use COALESCE() ou IF() para isso. TREATAS simula relacionamentos, não preenche valores."
      ],
      "dicaOuro": "TREATAS: virtual relationships em DAX. Diferente de USERELATIONSHIP (usa relação que existe), TREATAS cria a relação não relacionado."
    }
  },
  {
    "id": "dp600_q143",
    "text": "Um engenheiro precisa armazenar dados de logs de aplicação em formato semi-estruturado (JSON) e também disponibilizar dados transformados para um time de analistas SQL. Qual combinação de itens Fabric é mais adequada?",
    "options": [
      "Lakehouse para ingestão e armazenamento dos logs JSON na zona Files e transformação via notebooks, com exposição dos dados transformados via SQL Analytics Endpoint para os analistas.",
      "Warehouse para ingestão direta dos logs JSON com OPENROWSET e exposição via views T-SQL para os analistas.",
      "Dataflow Gen2 para processar os JSON e carregar em um modelo semântico DirectQuery para os analistas.",
      "Eventhouse para armazenar os logs JSON e KQL Database para disponibilizar os dados via SQL aos analistas."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Um Lakehouse armazena JSON bruto na zona Files (arquivos semi-estruturados), você processa com PySpark em Notebooks (parse JSON, transformação), escreve os dados transformados em formato Delta nas /Tables. O SQL Analytics Endpoint expõe automaticamente essas tabelas Delta para analistas SQL via T-SQL — leitura apenas, mas sem migração de dados.",
      "respostaCerta": "Lakehouse para ingestão e armazenamento dos logs JSON na zona Files e transformação via notebooks, com exposição dos dados transformados via SQL Analytics Endpoint para os analistas. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "JSON logs + SQL analytics = Lakehouse (Files para JSON, PySpark para transformação, Tables para exposição SQL). Caminho natural no Fabric.",
      "cascasDeBanana": [
        "Warehouse + OPENROWSET: Warehouse é relacional puro. OPENROWSET poderia ler JSON, mas exigiria schema rígido e cópia dos dados; não é a abordagem cloud-native do Fabric.",
        "Dataflow Gen2 → modelo semântico DirectQuery: Dataflow é orquestração, não transformação para JSON complexo. DirectQuery aumenta latência; Import seria cópia permanente.",
        "Eventhouse + KQL Database: Eventhouse/KQL é para telemetria e logs consultados com KQL (linguagem especializada). Não é SQL padrão; exige migração de expertise."
      ],
      "dicaOuro": "Lakehouse = files + tables + SQL endpoint. Warehouse = tabelas relacionais apenas. Para dados semi-estruturados, Lakehouse é a escolha."
    }
  },
  {
    "id": "dp600_q144",
    "text": "No Deployment Pipeline do Fabric, o que a funcionalidade de \"Compare\" entre estágios exibe?",
    "options": [
      "Gera um relatório de conformidade comparando as configurações de segurança entre os estágios.",
      "Compara o volume de dados entre os Lakehouses dos estágios para verificar se a implantação está completa.",
      "Exibe métricas de desempenho comparativas entre os ambientes de desenvolvimento e produção.",
      "Exibe as diferenças entre os itens do estágio de origem e destino, mostrando quais itens são novos, modificados ou idênticos, permitindo decisão informada antes de executar a implantação."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "No contexto do DP-600, manter a solução analítica exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "A funcionalidade Compare no Deployment Pipeline faz varredura dos objetos entre os estágios (Dev, Test, Prod) e mostra para cada item: 'novo no destino', 'modificado desde a última implantação', ou 'idêntico'. Isso permite ao desenvolvedor ver exatamente o que será alterado ou adicionado antes de clicar Deploy — visibilidade crítica para evitar surpresas em Production.",
      "respostaCerta": "Exibe as diferenças entre os itens do estágio de origem e destino, mostrando quais itens são novos, modificados ou idênticos, permitindo decisão informada antes de executar a implantação. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Antes de Deploy, clique Compare: vê quais itens são novos, quais foram alterados. Ferramenta de controle de mudanças.",
      "cascasDeBanana": [
        "Relatório de conformidade de segurança: Deployment Pipeline não é ferramenta de auditoria ou conformidade. Compare é visual, não automatiza compliance checks.",
        "Comparação de volume de dados: Pipeline gerencia artefatos (itens), não dados. Compare mostra modificações de código/configuração, não alterações em bytes.",
        "Métricas de desempenho comparativas: Pipeline não executa benchmarks. Compare é pré-deploy, informativo, não executará testes de performance."
      ],
      "dicaOuro": "Deployment Pipeline Compare = git diff para artefatos Fabric. Novo/modificado/idêntico em cada item entre estágios."
    }
  },
  {
    "id": "dp600_q145",
    "text": "Como você passa parâmetros externos para um Notebook Fabric quando ele é executado por um Data Pipeline?",
    "options": [
      "Usando variáveis de ambiente do workspace configuradas no Admin Portal que o notebook lê automaticamente via `os.environ`.",
      "Usando a função `spark.conf.get(\"pipeline.parameter.nome\")` para acessar parâmetros passados pelo pipeline em tempo de execução.",
      "Criando um arquivo de configuração JSON na seção Files do Lakehouse que o notebook lê no início da execução.",
      "Usando a célula de parâmetros do notebook (marcada com a tag \"parameters\" no Fabric), que permite sobrescrever variáveis com valores passados pela atividade \"Notebook\" do Data Pipeline via campo \"Base parameters\"."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Notebooks Fabric suportam uma célula especial marcada com tag 'parameters' — essa célula contém variáveis com valores padrão. Quando o Data Pipeline executa o notebook via atividade 'Notebook', pode passar parâmetros no campo 'Base parameters', que sobrescrevem os valores padrão da célula parameters antes de o notebook executar. Internamente, Fabric injeta as variáveis na célula.",
      "respostaCerta": "Usando a célula de parâmetros do notebook (marcada com a tag \"parameters\" no Fabric), que permite sobrescrever variáveis com valores passados pela atividade \"Notebook\" do Data Pipeline via campo \"Base parameters\". — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Pipeline executando Notebook? Use célula 'parameters', não arquivo de config. Data Pipeline → Notebook activity → Base parameters field.",
      "cascasDeBanana": [
        "Variáveis de ambiente do workspace: Admin Portal permite definir env vars, mas Notebooks não as acessa automaticamente via `os.environ`. Seria preciso código PySpark custom.",
        "spark.conf.get('pipeline.parameter.nome'): Spark config é para tuning do Spark (shuffle, memory), não para injetar parâmetros do pipeline. Pipeline passa via célula parameters.",
        "Arquivo de configuração JSON em Files: seria abordagem manual (o notebook lê arquivo), não native. Fabric oferece o mecanismo 'parameters' mais simplificado."
      ],
      "dicaOuro": "Notebook parameters = célula marcada com tag 'parameters'. Pipeline sobrescreve via 'Base parameters'. Clean e nativo."
    }
  },
  {
    "id": "dp600_q146",
    "text": "Em qual cenário o modo Import é preferível ao Direct Lake em um modelo semântico no Fabric?",
    "options": [
      "Quando o volume de dados é superior a 1 TB, pois o Direct Lake não suporta datasets muito grandes.",
      "Quando o modelo é acessado por mais de 50 usuários simultâneos, pois o Import tem melhor gerenciamento de concorrência.",
      "Quando o modelo requer transformações DAX complexas não suportadas pelo Direct Lake, quando os dados precisam de cálculos pré-agregados em memória, ou quando a fonte não é um Lakehouse/Warehouse Fabric nativo.",
      "Quando os dados mudam com frequência superior a 1 vez por hora, pois o Direct Lake não detecta alterações automáticas nos arquivos Delta."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "No contexto do DP-600, implementar e gerenciar modelo semântico exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Import copia dados em memória (RAM da Power BI capacity); Direct Lake lê diretamente do Delta Lake no OneLake sem cópia. Escolha Import quando: (1) modelo precisa transformações DAX que Direct Lake não suporta (calculated tables complexas), (2) dados precisam agregação pré-calculada em memória (folded aggregations), (3) fonte é externa (SQL Server, não Fabric). Direct Lake é padrão — Import é exceção.",
      "respostaCerta": "Quando o modelo requer transformações DAX complexas não suportadas pelo Direct Lake, quando os dados precisam de cálculos pré-agregados em memória, ou quando a fonte não é um Lakehouse/Warehouse Fabric nativo. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "'Transformação DAX complexa' ou 'fonte não-Fabric' = Import. Senão, Direct Lake (mais rápido, menos custo).",
      "cascasDeBanana": [
        "1TB+ = use Import: limite de Direct Lake não é 1TB. Direct Lake funciona com datasets enormes; o limite é técnico (versionamento Delta, schema), não tamanho.",
        "50+ usuários = Import: concorrência não é problema. Direct Lake escala igualmente. Import paga em memória; Direct Lake em latência de leitura.",
        "Mudanças > 1 vez/hora = Direct Lake: Direct Lake detecta mudanças automaticamente ao fazer query (vacuum, versioning). Frequência não é limite."
      ],
      "dicaOuro": "Direct Lake = padrão moderno (Fabric/OneLake nativo). Import = legacy para transformações complexas ou fontes externas."
    }
  },
  {
    "id": "dp600_q147",
    "text": "No Warehouse do Fabric, qual função T-SQL concatena duas colunas de texto com um separador \" - \" entre elas?",
    "options": [
      "`STRING_CONCAT(coluna1, coluna2, separator=' - ')`",
      "`JOIN(coluna1, ' - ', coluna2)`",
      "`MERGE(coluna1, ' - ', coluna2)`",
      "`CONCAT(coluna1, '"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em T-SQL, `CONCAT()` concatena múltiplas colunas ou strings. Syntax: `CONCAT(col1, ' - ', col2)`. Diferente de `+` (retorna NULL se qualquer operando é NULL), CONCAT trata NULLs implicitamente como strings vazias. Isso torna CONCAT mais robusto para dados com gaps.",
      "respostaCerta": "`CONCAT(coluna1, ' — implementa corretamente o requisito técnico para este cenário de iniciante.",
      "puloDoGato": "Concatenar em T-SQL = CONCAT(). Se vê STRING_AGG, é agregação (group_concat), não concatenação simples.",
      "cascasDeBanana": [
        "STRING_CONCAT com separator=: T-SQL não tem esse parâmetro em STRING_CONCAT(). STRING_CONCAT() simplesmente concatena lista de valores; separador exige `CONCAT(col1, separador, col2)`.",
        "JOIN ou MERGE: funções SQL Server não têm JOIN ou MERGE para concatenação. São sintaxes inventadas. CONCAT, STRING_CONCAT ou + são as opções reais.",
        "CONCAT com + (operador): `+` é operador legado. CONCAT é moderna, NULL-safe, recomendada para novo código T-SQL."
      ],
      "dicaOuro": "T-SQL: CONCAT() = NULL-safe concatenation. `+` = legacy, retorna NULL se operando é NULL. Warehouse use CONCAT."
    }
  },
  {
    "id": "dp600_q148",
    "text": "Como as Sensitivity Labels do Microsoft Purview interagem com itens do Fabric quando dados são exportados para Excel ou PDF?",
    "options": [
      "A sensitivity label é removida automaticamente ao exportar, pois políticas de proteção só se aplicam dentro do ambiente Fabric.",
      "A sensitivity label bloqueia completamente a exportação de itens classificados como Confidential ou superior.",
      "A sensitivity label converte o arquivo exportado para formato criptografado .sensitivity que requer o Microsoft Purview para abrir.",
      "A sensitivity label é herdada pelo arquivo exportado, aplicando as políticas de proteção configuradas (como criptografia ou marca d'água) ao arquivo gerado, mantendo a classificação fora do Fabric."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "No contexto do DP-600, manter a solução analítica exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Sensitivity Labels do Purview são tags de classificação (Confidential, Public, etc.) que seguem arquivos. Ao exportar um item do Fabric (copiar arquivo ou consumir em aplicação), a label é preservada no arquivo — ela é herdada, não removida. Isso mantém a cadeia de custódia de segurança: dados nunca perdem sua classificação de sensibilidade durante fluxos de dados.",
      "respostaCerta": "A sensitivity label é herdada pelo arquivo exportado, aplicando as políticas de proteção configuradas (como criptografia ou marca d'água) ao arquivo gerado, mantendo a classificação fora do Fabric. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Arquivo com Sensitivity Label sai do Fabric? Label viaja junto (herdada). Como identificação permanente, não como restrição executável.",
      "cascasDeBanana": [
        "Label removida automaticamente: labels são persistentes, não efêmeras. Remover label é ação explícita de administrador.",
        "Label bloqueia completamente a exposição: labels são metadados informativos, não bloqueios. RLS ou Data Loss Prevention policies bloqueiam; labels apenas informam/rastreiam.",
        "Label converte arquivo para formato diferente: label não modifica formato do arquivo. PNG permanece PNG, CSV permanece CSV com label embedded."
      ],
      "dicaOuro": "Sensitivity Labels = metadados de classificação, não bloqueios. Herdadas durante export; informam contexto de sensibilidade, não controlam acesso."
    }
  },
  {
    "id": "dp600_q149",
    "text": "Em um Data Pipeline do Fabric, como você configura o tratamento de erros para executar uma atividade de notificação quando uma atividade anterior falha?",
    "options": [
      "Configurando a propriedade \"Retry Policy\" da atividade com \"On Failure Action\" apontando para a atividade de notificação.",
      "Usando um bloco try-catch T-SQL dentro de uma atividade Script que captura exceções e chama a procedure de notificação.",
      "Criando um trigger de evento no workspace que detecta falhas de pipeline e dispara automaticamente um fluxo do Power Automate.",
      "Conectando as atividades com o path \"On Failure\" (seta vermelha), que direciona o fluxo para a atividade de notificação apenas quando a atividade anterior falha, permitindo lógica de erro independente do fluxo principal."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "No contexto do DP-600, manter a solução analítica exige entender indexação e performance. Índices em Warehouse aceleram queries ao criar estruturas de busca rápida em colunas específicas. Em T-SQL Warehouse, você cria índices via `CREATE INDEX nome ON tabela(coluna)` — isso reduz tempo de scan de tabela inteira para busca focada.",
      "respostaCerta": "Conectando as atividades com o path \"On Failure\" (seta vermelha), que direciona o fluxo para a atividade de notificação apenas quando a atividade anterior falha, permitindo lógica de erro independente do fluxo principal. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Query lenta em Warehouse? Procure índices em colunas WHERE/JOIN. Índice = busca rápida, sem índice = table scan completo.",
      "cascasDeBanana": [
        "Opção anterior: abordagem superficialmente relacionada ao conceito, mas não resolve o cenário específico de indexação.",
        "Opção alternativa: conceito relacionado, mas aplicado em contexto incorreto ou para objetivo diferente.",
        "Terceira opção: confusão frequente com conceito similar; é uma armadilha comum que testa discriminação entre índices, partições e hints."
      ],
      "dicaOuro": "Warehouse indexing: índices em colunas de filtro reduzem scans. Clustered = ordem primária; non-clustered = estrutura de lookup."
    }
  },
  {
    "id": "dp600_q150",
    "text": "Qual expressão DAX formata um número como moeda brasileira com símbolo R$ e duas casas decimais?",
    "options": [
      "`FORMAT([Medida], \"Currency\")`",
      "`CURRENCY([Medida], \"BRL\")`",
      "`TEXT([Medida], \"R$0,00\")`",
      "`FORMAT([Medida], \"R$ #,##0.00\")` ou usando Dynamic Format String com `\"R$ #,##0.00\"` na propriedade de formato da medida."
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "No contexto do DP-600, implementar e gerenciar modelo semântico exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "RLS (Row-Level Security) no Fabric filtra linhas baseado na identidade do usuário. Você define DAX filters nas tabelas (ex: `[Sales].[Region] = USERNAME()`). Quando um usuário acessa o relatório, o DAX engine aplica filtro automaticamente — ele vê apenas linhas que correspondem à sua identidade. Sem RLS, todos veriam todos os dados.",
      "respostaCerta": "`FORMAT([Medida], \"R$ #,##0.00\")` ou usando Dynamic Format String com `\"R$ #,##0.00\"` na propriedade de formato da medida. — implementa corretamente o requisito técnico para este cenário de iniciante.",
      "puloDoGato": "RLS = filtro DAX por linha baseado em usuário. Se vê `ROLE` e `permission` é OLS/column security, não RLS.",
      "cascasDeBanana": [
        "OLS (Object-Level Security): OLS bloqueia objetos inteiros (tabelas/colunas); RLS bloqueia linhas dentro de tabelas.",
        "DLP (Data Loss Prevention): DLP é política de endpoint que impede export não-autorizado; não filtra dados em modelo.",
        "Column-level security via role: roles controlam acesso a colunas (quem vê column X); RLS controla quais linhas aparecem."
      ],
      "dicaOuro": "RLS: cada usuário vê subset diferente de linhas (mesmo relatório, dados filtrados). Implementado via DAX filters na tabela."
    }
  },
  {
    "id": "dp600_q151",
    "text": "Qual é a diferença entre tabelas gerenciadas (managed) e tabelas externas (unmanaged) em um Lakehouse do Fabric?",
    "options": [
      "Tabelas gerenciadas têm seus dados controlados pelo Lakehouse (criadas na seção Tables); tabelas externas referenciam dados em caminhos externos ao Lakehouse, onde o Fabric gerencia apenas os metadados, não os arquivos físicos.",
      "Tabelas gerenciadas têm schema fixo definido na criação; tabelas externas suportam schema on read com inferência automática.",
      "Tabelas gerenciadas suportam operações ACID e time travel; tabelas externas são somente leitura e não suportam Delta.",
      "Tabelas gerenciadas são acessíveis via SQL Analytics Endpoint; tabelas externas são acessíveis apenas via notebooks PySpark."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "DirectQuery no Fabric executa queries no source em tempo real ao invés de cachear dados localmente. Vantagem: dados sempre atualizados, sem custo de memória no Fabric. Desvantagem: latência de network, menor performance em cálculos complexos (DAX routed para source). Use DirectQuery quando: source é enorme (100GB+) ou dados mudam muito frequentemente (real-time), e latência é aceitável.",
      "respostaCerta": "Tabelas gerenciadas têm seus dados controlados pelo Lakehouse (criadas na seção Tables); tabelas externas referenciam dados em caminhos externos ao Lakehouse, onde o Fabric gerencia apenas os metadados, não os arquivos físicos. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "'Dados em tempo real' + 'source enorme' = DirectQuery. Se source é Lakehouse, Direct Lake (não DirectQuery).",
      "cascasDeBanana": [
        "Import: copia dados para Power BI, excelente performance, mas custo de memória. Para dados estáticos ou agregados.",
        "Dual: combina Import + DirectQuery. Alguns fatos são cached (Import), outros em tempo real (DirectQuery). Menos comum, complexo.",
        "Direct Lake: acessa Fabric native storage (Delta Lake) sem copy. Padrão moderno no Fabric; melhor que DirectQuery se source é Lakehouse."
      ],
      "dicaOuro": "DirectQuery = query live ao source. Direct Lake = query live ao Fabric Delta (mais rápido). Import = cached (mais rápido mas stale)."
    }
  },
  {
    "id": "dp600_q152",
    "text": "Como você usa um relacionamento inativo em um modelo semântico DAX e por que ele é necessário?",
    "options": [
      "Relacionamentos inativos são ativados automaticamente pelo motor DAX quando o relacionamento ativo não retorna resultados para o contexto de filtro atual.",
      "Usando `ACTIVATERELATIONSHIP(tabela1[coluna], tabela2[coluna])` fora de um CALCULATE para tornar o relacionamento permanentemente ativo.",
      "Usando `USERELATIONSHIP(coluna1, coluna2)` dentro de uma função CALCULATE para ativar pontualmente o relacionamento inativo, necessário quando há múltiplos relacionamentos entre as mesmas tabelas (ex: data de pedido e data de entrega).",
      "Relacionamentos inativos são usados exclusivamente para relacionamentos M:N e são ativados ao habilitar filtragem bidirecional no modelo."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "No contexto do DP-600, implementar e gerenciar modelo semântico exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "KQL (Kusto Query Language) é linguagem especializada para queries em KQL Databases do Fabric/Microsoft Sentinel. Syntax é declarativo (tipo SQL, mas otimizado para telemetria): `database | where condition | summarize metric by dimension`. KQL é mais eficiente que SQL para time-series e log analytics porque entende naturalmente timestamps, agregações de série temporal (time buckets), e detecção de anomalias.",
      "respostaCerta": "Usando `USERELATIONSHIP(coluna1, coluna2)` dentro de uma função CALCULATE para ativar pontualmente o relacionamento inativo, necessário quando há múltiplos relacionamentos entre as mesmas tabelas (ex: data de pedido e data de entrega). — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Logs de aplicação, telemetria, séries de tempo? KQL é a linguagem. Dados estruturados em tabelas? SQL ou T-SQL.",
      "cascasDeBanana": [
        "SQL padrão: SQL é relacional, ótimo para estruturado; KQL é otimizado para semi-estruturado e logs.",
        "T-SQL: T-SQL é dialeto Microsoft de SQL; KQL é linguagem separada do Kusto, não compatível com T-SQL.",
        "PySpark/Scala: linguagens de programação; KQL é query language, não general purpose."
      ],
      "dicaOuro": "KQL = telemetry query language (Kusto). SQL/T-SQL = relational. KQL mais rápido para logs; SQL/T-SQL para data warehouse."
    }
  },
  {
    "id": "dp600_q153",
    "text": "Como você instala uma biblioteca Python de terceiros em um Notebook do Microsoft Fabric?",
    "options": [
      "Usando `%pip install nome_biblioteca` em uma célula do notebook para instalação na sessão atual, ou configurando bibliotecas no nível do workspace via Environment para persistência entre sessões.",
      "Fazendo upload do arquivo .whl na seção Files do Lakehouse e executando `spark.addFile(\"Files/biblioteca.whl\")`.",
      "Acessando o Admin Portal do Fabric e adicionando a biblioteca na seção \"Spark Libraries\" das configurações de capacity.",
      "Editando o arquivo `requirements.txt` do workspace no repositório Git e fazendo commit para instalação automática."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Datamarts no Fabric são modelo semântico pré-configurado com criação automática de relacionamentos baseado em chave primária/externa. Diferente de criar modelo semântico manually (arrastar tabelas, definir relações), Datamart infere automaticamente schema e relacionamentos — mais rápido para cenários padrão. Use Datamart quando esquema é relativamente simples e você quer productivity; use modelo semântico quando precisa de granularidade em relacionamentos ou transformações DAX complexas.",
      "respostaCerta": "Usando `%pip install nome_biblioteca` em uma célula do notebook para instalação na sessão atual, ou configurando bibliotecas no nível do workspace via Environment para persistência entre sessões. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Schema simples, chaves primárias/estrangeiras explícitas? Datamart infere relacionamentos automaticamente. Schema complexo? Modelo semântico manual.",
      "cascasDeBanana": [
        "Datamart = modelo automático com inferência; modelo semântico = design manual com controle total.",
        "Datamart requer dados estruturados; modelo semântico pode combinar Import, DirectQuery, Direct Lake.",
        "Datamart é para analistas; modelo semântico é para designers de BI."
      ],
      "dicaOuro": "Datamart = automated semantic model (fast, simple). Semantic model = manual design (control, complexity)."
    }
  },
  {
    "id": "dp600_q154",
    "text": "O que é um Environment no Microsoft Fabric e qual problema ele resolve?",
    "options": [
      "Um perfil de segurança que define quais itens do workspace são visíveis para cada grupo de usuários no tenant.",
      "Um contêiner de isolamento de dados que separa ambientes de desenvolvimento, teste e produção dentro de um único workspace.",
      "Um item do Fabric que define bibliotecas Python, configurações Spark e recursos de computação reutilizáveis, garantindo consistência de ambiente entre notebooks e jobs Spark do workspace sem reinstalação manual.",
      "Um conjunto de configurações de tema visual aplicado a todos os relatórios Power BI de um workspace para padronização."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "No contexto do DP-600, manter a solução analítica exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em um Notebook Fabric, `spark.sql()` executa SQL contra Delta Lake (tabelas nas /Tables do Lakehouse). Você passa string SQL e Spark retorna DataFrame com resultados. Exemplo: `df = spark.sql('SELECT * FROM myTable WHERE year=2024')` — isso query a tabela Delta e retorna um PySpark DataFrame que você pode depois processar em Python.",
      "respostaCerta": "Um item do Fabric que define bibliotecas Python, configurações Spark e recursos de computação reutilizáveis, garantindo consistência de ambiente entre notebooks e jobs Spark do workspace sem reinstalação manual. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Notebook quer executar SQL contra Delta? `spark.sql('SELECT ...')` retorna DataFrame processável em Python.",
      "cascasDeBanana": [
        "spark.read: lê arquivos (CSV, Parquet) ou tabelas Delta, retorna DataFrame. Sem SQL query — é leitura direta.",
        "spark.sql vs spark.read: spark.sql executa SQL; spark.read é Python API. Ambas retornam DataFrame.",
        "sqlContext: API legada. spark.sql é moderna."
      ],
      "dicaOuro": "spark.sql() = SQL execution. spark.read = file/table read. Ambos retornam DataFrame para transformação Python."
    }
  },
  {
    "id": "dp600_q155",
    "text": "Em DAX, qual é a diferença entre contexto de linha (row context) e contexto de filtro (filter context)?",
    "options": [
      "São sinônimos no DAX moderno; a distinção foi eliminada com a introdução do CALCULATE em versões recentes do motor.",
      "Contexto de linha aplica-se apenas a medidas DAX; contexto de filtro aplica-se apenas a colunas calculadas.",
      "Contexto de linha ocorre em iterações (colunas calculadas, funções X) e avalia expressões linha por linha; contexto de filtro é criado por slicers, filtros de relatório e CALCULATE, determinando quais linhas são visíveis para medidas.",
      "Contexto de linha é criado por slicers e visuais do relatório; contexto de filtro é criado por funções iteradoras como SUMX."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "A função DAX `SUMMARIZE()` cria uma tabela de resumo com grupos (GROUP BY implícito) e colunas de agregação opcionais. Syntax: `SUMMARIZE(table, col1, col2, ..., 'name', aggregation)`. Útil em medidas avançadas quando você precisa transformar dados em grupos antes de aplicar lógica adicional. Diferente de `GROUPBY()` (que permite cálculos em cada grupo inline), `SUMMARIZE()` primeiro cria a tabela de resumo.",
      "respostaCerta": "Contexto de linha ocorre em iterações (colunas calculadas, funções X) e avalia expressões linha por linha; contexto de filtro é criado por slicers, filtros de relatório e CALCULATE, determinando quais linhas são visíveis para medidas. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Precisa resumir tabela por grupos (GROUP BY) antes de aplicar lógica? SUMMARIZE(). Caso simples de agregação? GROUPBY().",
      "cascasDeBanana": [
        "ADDCOLUMNS: adiciona colunas calculadas a uma tabela existente, não sumariza.",
        "GROUPBY: agrupa e permite cálculos inline em cada grupo. Menos flexível que SUMMARIZE.",
        "CALCULATETABLE: retorna tabela com contexto de filtro aplicado; não faz GROUP BY automaticamente."
      ],
      "dicaOuro": "SUMMARIZE() = cria tabela de resumo com aggregations. GROUP BY explícito em DAX. Use em medidas complexas."
    }
  },
  {
    "id": "dp600_q156",
    "text": "Em um Data Pipeline do Fabric, como você implementa lógica condicional para executar diferentes atividades com base no resultado de uma atividade anterior?",
    "options": [
      "Usando uma atividade \"Script\" com T-SQL condicional que retorna um flag e redireciona o pipeline via trigger externo.",
      "Usando a atividade \"Switch\", que avalia múltiplas condições e executa o bloco correspondente ao primeiro valor verdadeiro.",
      "Usando os paths \"On Success\" e \"On Failure\" em conjunto para simular lógica if/else baseada no status de execução.",
      "Usando a atividade \"If Condition\", que avalia uma expressão dinâmica e direciona o fluxo para atividades do bloco \"True\" ou \"False\" conforme o resultado da condição."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Quando uma medida referencia múltiplas colunas de data no mesmo contexto de filtro (ex: tabela Fatos com DateOrder e DateShip), ambas criam relacionamento com a dimensão de data. USERELATIONSHIP() ativa um relacionamento específico (inativo) para aquela medida. Syntax: `CALCULATE(aggregation, USERELATIONSHIP(coluna_inativa, dim_coluna))`. Isso permite a mesma fact table ter dois contextos de data diferentes em medidas diferentes.",
      "respostaCerta": "Usando a atividade \"If Condition\", que avalia uma expressão dinâmica e direciona o fluxo para atividades do bloco \"True\" ou \"False\" conforme o resultado da condição. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Multiple date columns numa fact table? USERELATIONSHIP() dentro de CALCULATE() para ativar a relação correta.",
      "cascasDeBanana": [
        "ACTIVATERELATIONSHIP: função não existe. USERELATIONSHIP ativa relação inativa apenas para aquela medida, não globalmente.",
        "BIDIRECTIONAL: configuração de relacionamento que ativa filtros bidirecionais, não a mesma coisa que USERELATIONSHIP.",
        "CROSSFILTER: controla direção de filtro; USERELATIONSHIP ativa/usa relação específica."
      ],
      "dicaOuro": "USERELATIONSHIP() = temporary activation (one measure only). ACTIVATERELATIONSHIP seria permanent — but doesn't exist. Use USERELATIONSHIP."
    }
  },
  {
    "id": "dp600_q157",
    "text": "Qual é a vantagem de usar o Tabular Editor 3 para gerenciar modelos semânticos no Microsoft Fabric via XMLA Endpoint?",
    "options": [
      "Permite configurar RLS e OLS com interface gráfica avançada e sincronizar automaticamente com o Azure Active Directory.",
      "Permite criar visuais personalizados para relatórios Power BI diretamente no modelo semântico sem usar o Power BI Desktop.",
      "Permite edição avançada de modelos semânticos com recursos como Best Practice Analyzer, edição em lote de propriedades, gerenciamento de Calculation Groups, C# scripts e deploy via linha de comando, muito além do que o Power BI Desktop oferece.",
      "Substitui completamente o DAX Studio para análise de desempenho de consultas com profiling detalhado de memória."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "No contexto do DP-600, implementar e gerenciar modelo semântico exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Quando dados em Fabric sofrem DELETE/UPDATE via Spark ou Warehouse, a versão anterior é retida no histórico do Delta Lake (vacuum recolhe versões antigas). Se você faz query antes de DELETE, vê dados originais; após DELETE, vê dados filtrados. ZORDER (otimização Delta) reordena dados para agrupar linhas similares, melhorando compression e velocity de leitura — útil para colunas frequentes em filtros.",
      "respostaCerta": "Permite edição avançada de modelos semânticos com recursos como Best Practice Analyzer, edição em lote de propriedades, gerenciamento de Calculation Groups, C# scripts e deploy via linha de comando, muito além do que o Power BI Desktop oferece. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "DELETE em Delta deixa rastro no histórico. VACUUM limpa versões antigas. ZORDER otimiza leitura de filtros.",
      "cascasDeBanana": [
        "VACUUM remove histórico imediatamente: VACUUM remove apenas versões antigas (default 30 dias), não dados atuais.",
        "DELTA LAKE LOG: arquivo interno de histórico; não é para query direto pelo usuário.",
        "Cópia de backup: Fabric Lakehouse tem versionamento automático; backup manual é redundante."
      ],
      "dicaOuro": "Delta Lake = MVCC (multi-version concurrency). Histórico retenido até VACUUM. ZORDER = índice por proximidade."
    }
  },
  {
    "id": "dp600_q158",
    "text": "Como o Azure Data Factory se relaciona com os Data Pipelines do Microsoft Fabric?",
    "options": [
      "O ADF e os Data Pipelines do Fabric são completamente independentes, sem compatibilidade de conectores ou atividades.",
      "Os Data Pipelines do Fabric são baseados na mesma tecnologia do Azure Data Factory, compartilhando conectores, atividades e conceitos; porém são gerenciados dentro do Fabric sem necessidade de um recurso ADF separado no Azure.",
      "O Azure Data Factory é o único meio de ingestão de dados externos no Fabric; os Data Pipelines nativos são apenas para orquestração interna.",
      "Os Data Pipelines do Fabric substituem completamente o ADF e não são compatíveis com pipelines ADF existentes."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Um Shortcut em Lakehouse referencia dados em outro workspace/Lakehouse sem cópia (referência, não clone). Você criava Shortcut via UI, aponta para /Tables ou /Files de outra locação. Internamente, OneLake mapeia o caminho — quando você faz query via shortcut, Fabric resolve para o local original. Isso economiza storage (sem duplication) mas deixa você dependente do workspace original estar disponível.",
      "respostaCerta": "Os Data Pipelines do Fabric são baseados na mesma tecnologia do Azure Data Factory, compartilhando conectores, atividades e conceitos; porém são gerenciados dentro do Fabric sem necessidade de um recurso ADF separado no Azure. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Dados em outro workspace precisam ser consultados? Shortcut = referência sem cópia. Novo Lakehouse, mesmo dados.",
      "cascasDeBanana": [
        "Hard copy: seria copiar dados fisicamente — não é shortcut, é duplicação.",
        "Symbolic link de OS: shortcut é nível Fabric, não filesystem. Fabric gerencia resolução.",
        "Replicação: replica copia e mantém sincronização; shortcut é apenas referência sem sync."
      ],
      "dicaOuro": "Shortcut = Fabric pointer (no copy). Symbolic link analogy. Zero storage overhead; dependency no source workspace."
    }
  },
  {
    "id": "dp600_q159",
    "text": "O que é o recurso de proteção contra exfiltração de dados (Data Exfiltration Protection) no Microsoft Fabric e como ele funciona?",
    "options": [
      "Monitora e bloqueia downloads de relatórios Power BI por usuários não autorizados com base em políticas de DLP.",
      "Criptografa automaticamente todos os dados exportados do Fabric com chaves gerenciadas pelo cliente no Azure Key Vault.",
      "Impede que dados do tenant Fabric sejam enviados para destinos externos não autorizados, controlando quais tenants Azure AD e domínios externos podem receber dados via conectores, pipelines e notebooks.",
      "Restringe o acesso ao Fabric a dispositivos registrados no Intune, prevenindo acesso por dispositivos pessoais não gerenciados."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "No contexto do DP-600, manter a solução analítica exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Incremental Refresh em Power BI refresh apenas dados novos/modificados baseado em parâmetros (RangeStart, RangeEnd). Você define qual coluna (ex: timestamp) determina 'novo' e qual período é 'incremental' (ex: últimos 30 dias). Apenas dados onde timestamp > RangeStart são fetched — histórico não é tocado. Isso reduz volume de dados refetched, économia de tempo e custo.",
      "respostaCerta": "Impede que dados do tenant Fabric sejam enviados para destinos externos não autorizados, controlando quais tenants Azure AD e domínios externos podem receber dados via conectores, pipelines e notebooks. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Refresh lento em modelo grande? Incremental refresh: fetch apenas últimos 30 dias, não história inteira.",
      "cascasDeBanana": [
        "Full refresh: atualiza tudo — ineficiente para grandes datasets.",
        "Scheduled refresh: apenas agenda quando rodar, não quanto de dados fetch.",
        "Query folding: otimização de Dataflow; incremental refresh é estratégia de modelo semântico."
      ],
      "dicaOuro": "Incremental Refresh = RangeStart/RangeEnd parameters. Fetch apenas delta. Crítico para grandes modelos."
    }
  },
  {
    "id": "dp600_q160",
    "text": "Em um Notebook Fabric com PySpark, o que é o \"lazy evaluation\" e como ele impacta a execução de transformações?",
    "options": [
      "O Spark executa apenas as colunas referenciadas nas transformações, ignorando colunas não utilizadas no DataFrame original.",
      "As transformações PySpark (map, filter, join etc.) não são executadas imediatamente; o Spark constrói um plano de execução (DAG) e só processa os dados quando uma ação (count, show, write) é chamada, permitindo otimizações automáticas do plano.",
      "O Spark carrega os dados de forma incremental em blocos menores para evitar sobrecarga de memória durante transformações complexas.",
      "O Spark adia a execução de notebooks agendados para horários de baixa utilização da capacity automaticamente."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em DAX, `SUMMARIZECOLUMNS()` combina GROUP BY + CALCULATE() em uma única função. Retorna tabela com colunas de grupo e agregações calculadas. Diferente de `SUMMARIZE()` (que cria tabela e depois você adiciona agregações), `SUMMARIZECOLUMNS()` calcula tudo de uma vez, aplicando contextos de filtro corretamente. Use quando precisa agregação complexa respeitando relationships e filter context.",
      "respostaCerta": "As transformações PySpark (map, filter, join etc.) não são executadas imediatamente; o Spark constrói um plano de execução (DAG) e só processa os dados quando uma ação (count, show, write) é chamada, permitindo otimizações automáticas do plano. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Agregação complexa com relationships? SUMMARIZECOLUMNS(). Caso simples? GROUPBY() ou SUMMARIZE().",
      "cascasDeBanana": [
        "SUMMARIZE: primeiro cria tabela de resumo, depois agregações — menos eficiente.",
        "ADDCOLUMNS: adiciona colunas a tabela existente; não faz GROUP BY.",
        "SUMMARIZECOLUMNS vs GROUPBY: SUMMARIZECOLUMNS respeita relationships; GROUPBY é mais direto mas menos flexível."
      ],
      "dicaOuro": "SUMMARIZECOLUMNS = GROUP BY + CALCULATE in one. Respects relationships and context."
    }
  },
  {
    "id": "dp600_q161",
    "text": "Qual é o comportamento da função DAX `ALLEXCEPT(Tabela, Tabela[Coluna1], Tabela[Coluna2])`?",
    "options": [
      "Remove filtros de todas as tabelas do modelo exceto da tabela e colunas especificadas.",
      "Retorna todas as linhas da tabela exceto as que correspondem aos valores das colunas especificadas.",
      "Remove todos os filtros da tabela especificada, exceto os filtros aplicados às colunas listadas, que são preservados no contexto de filtro.",
      "Remove apenas os filtros das colunas especificadas, preservando todos os outros filtros da tabela."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "No contexto do DP-600, implementar e gerenciar modelo semântico exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Power BI Embedded é licensing model onde você (independente software vendor) embeça relatórios do Power BI em sua aplicação e vende para clientes. Capacidade é paga por você (capacity units), não pelo cliente. Ideal para SaaS: seu app é customer-facing, você gerencia Power BI backend. Diferente de Premium (Direct), onde o cliente paga diretamente por capacidade.",
      "respostaCerta": "Remove todos os filtros da tabela especificada, exceto os filtros aplicados às colunas listadas, que são preservados no contexto de filtro. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "SaaS independente vendendo BI para clientes? Power BI Embedded (você paga capacity). Cliente próprio? Premium.",
      "cascasDeBanana": [
        "Power BI Premium (Direct): cliente paga Microsoft por capacidade (SkuCapacity). Você consome o que contrata.",
        "Power BI Free/Pro: licensing por usuário, não capacity. Não permite embedar para clientes não-Power BI.",
        "Fabric Capacity: é o sucessor — você rented capacidade no Fabric."
      ],
      "dicaOuro": "Embedded = ISV licensing (você paga, customers usa). Premium = end-user licensing (customer pays). Different models."
    }
  },
  {
    "id": "dp600_q162",
    "text": "O que é uma Fabric Capacity e como ela afeta o desempenho dos workloads no Microsoft Fabric?",
    "options": [
      "É a unidade de computação do Fabric (medida em CUs",
      "É o número máximo de workspaces que podem ser criados em um tenant Fabric baseado no plano de licenciamento.",
      "É a configuração de retenção de dados que determina por quanto tempo os arquivos Delta são mantidos no OneLake.",
      "É o espaço de armazenamento dedicado no OneLake para um tenant, com limites de GB por SKU contratado."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Quando você publica relatório Power BI e atribui roles (Admin, Member, Viewer) em um Workspace, cada role tem permissões diferentes: Admin gerencia workspace e segurança; Member cria/edita conteúdo; Viewer consome apenas. Essas permissões controlam quem pode acessar artefatos — mas isso é workspace-level security, não row-level (RLS filtra linhas dentro de relatório).",
      "respostaCerta": "É a unidade de computação do Fabric (medida em CUs — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Roles em Workspace = Admin/Member/Viewer. Controla acesso a artefatos. RLS = filtra linhas em modelo.",
      "cascasDeBanana": [
        "RLS: filtra linhas dentro do modelo; roles filtram acesso a artifacts/workspace.",
        "OLS: Object-Level Security filtra colunas/tabelas; roles controlam workspace.",
        "DLP: Data Loss Prevention policy bloqueia exports; não relacionado a roles."
      ],
      "dicaOuro": "Workspace Roles = artifact access control. RLS = row filter control. Different layers of security."
    }
  },
  {
    "id": "dp600_q163",
    "text": "Como você integra o Microsoft Fabric com Azure DevOps para um pipeline de CI/CD completo?",
    "options": [
      "Conectando o workspace ao Azure DevOps via Git integration, usando a API REST do Fabric em pipelines YAML do Azure DevOps para deploy automático entre ambientes, combinado com Deployment Pipelines do Fabric para promoção controlada de itens.",
      "Exportando os itens do Fabric como arquivos .pbix e usando o task \"Power BI Actions\" do Azure DevOps Marketplace para deploy automatizado.",
      "Criando um Logic App no Azure que monitora commits no repositório e dispara refreshes dos modelos semânticos automaticamente.",
      "Usando o conector nativo do Azure DevOps no Fabric que sincroniza automaticamente branches com estágios do Deployment Pipeline sem configuração adicional."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "No contexto do DP-600, manter a solução analítica exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Query Folding em Power Query otimiza ingestão: quando você faz transformações (filter, select columns), Power Query tenta 'fold' essas operações para a source (SQL, Warehouse, etc.) ao invés de puxar tudo e transformar localmente. Internamente, Power Query gera SQL nativo e manda pro source — source faz o trabalho, não Power Query. Isso economiza bandwidth e tempo.",
      "respostaCerta": "Conectando o workspace ao Azure DevOps via Git integration, usando a API REST do Fabric em pipelines YAML do Azure DevOps para deploy automático entre ambientes, combinado com Deployment Pipelines do Fabric para promoção controlada de itens. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Power Query com filters/selects? Se vê 'foldable' na UI, Power Query folding =SQL nativo ao source.",
      "cascasDeBanana": [
        "Push-down: é o conceito, mas 'Query Folding' é termo Power Query.",
        "Lazy evaluation: não é folding — é adiamento de cálculo até que seja necessário.",
        "ETL vs ELT: Query Folding é exemplo de ELT (Extract, Load, Transform at source) — diferente de ETL (transform depois de extract)."
      ],
      "dicaOuro": "Query Folding = push transformations to source. Efficient ELT pattern."
    }
  },
  {
    "id": "dp600_q164",
    "text": "Em um Notebook Fabric, como você exibe as primeiras 5 linhas de um DataFrame PySpark para validação dos dados?",
    "options": [
      "`df.show(5)` para saída em texto ou `display(df.limit(5))` para saída visual formatada na interface do notebook Fabric.",
      "`print(df.head(5))`",
      "`spark.show(df, rows=5)`",
      "`df.preview(5)`"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "DAX Context Transition ocorre quando você coloca uma medida (que opera em contexto agregado) dentro de uma expressão que opera em row context. O DAX engine converte row context para filter context, permitindo a medida calcular corretamente. Exemplo: numa calculated column `[Profit Ratio] = [Total Profit] / [Total Sales]` — a medida `[Total Profit]` normalmente agrupa em contexto agregado, mas aqui transita para filter context (1 row = 1 filter).",
      "respostaCerta": "`df.show(5)` para saída em texto ou `display(df.limit(5))` para saída visual formatada na interface do notebook Fabric. — implementa corretamente o requisito técnico para este cenário de iniciante.",
      "puloDoGato": "Medida em calculated column precisa transitar row → filter context. CALCULATE() força transition explícita.",
      "cascasDeBanana": [
        "Filter context: contexto inicial quando report é filtrado. Context transition ocorre ao chamar medida em row context.",
        "Implicit vs explicit conversion: context transition pode ser implícita (faz automaticamente) ou explícita (via CALCULATE).",
        "Row context sem medida: se você referencia coluna (não medida) em calculated column, não há transition — é direto row context."
      ],
      "dicaOuro": "Context Transition = conversion row context → filter context. Automatic quando medida é chamada em row context."
    }
  },
  {
    "id": "dp600_q165",
    "text": "O que é um Power BI App no contexto do Microsoft Fabric e qual é sua finalidade?",
    "options": [
      "Um pacote de distribuição que agrupa relatórios e dashboards de um workspace para publicação a usuários finais, oferecendo uma experiência navegável e controlada sem expor o workspace diretamente.",
      "Um conector de dados que permite que aplicações externas consumam dados de modelos semânticos via API REST.",
      "Um template de relatório pré-construído disponível no marketplace do Fabric para aceleração de projetos de BI.",
      "Um aplicativo móvel nativo do Fabric instalado em dispositivos iOS e Android para acesso offline a relatórios."
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "No contexto do DP-600, implementar e gerenciar modelo semântico exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Data Pipeline, a atividade 'Script' executa Python ou Scala Spark code. Você define células inline ou referencia um Notebook já existente. A atividade Script é mais lightweight que 'Notebook activity' (não cria/modifica notebook, apenas executa code) — ideal para transformações rápidas ou validações durante pipeline execution.",
      "respostaCerta": "Um pacote de distribuição que agrupa relatórios e dashboards de um workspace para publicação a usuários finais, oferecendo uma experiência navegável e controlada sem expor o workspace diretamente. — implementa corretamente o requisito técnico para este cenário de iniciante.",
      "puloDoGato": "Pipeline precisa executar Python rápido? Script activity (inline code). Muitas linhas? Referencia Notebook.",
      "cascasDeBanana": [
        "Notebook activity: referencia existing notebook, executa toda ela, permite parameters.",
        "Script activity: código inline, sem notebook overhead. Mais rápido para código curto.",
        "Copy activity: move dados de source para destino; Script é transformação, não cópia."
      ],
      "dicaOuro": "Script activity = inline Spark code in pipeline. Lightweight, fast for simple transforms."
    }
  },
  {
    "id": "dp600_q166",
    "text": "Em KQL, qual operador seleciona apenas colunas específicas de uma tabela, equivalente ao SELECT em SQL?",
    "options": [
      "`pick`, como em `Tabela | pick coluna1, coluna2`",
      "`select`, como em `Tabela | select coluna1, coluna2`",
      "`extend`, que adiciona colunas calculadas mas não remove as existentes.",
      "`project`, como em `Tabela | project coluna1, coluna2, coluna3`"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Fabric, o Warehouse é engine SQL relacional (T-SQL) que permite Stored Procedures (SP). Você define SP via `CREATE PROCEDURE nome AS BEGIN ... END`, depois chama `EXEC nome`. SPs encapsulam lógica (loops, condicionals, cálculos) sem precisar de código client. Útil para transformações complexas ou batch jobs executáveis via Data Pipeline.",
      "respostaCerta": "`project`, como em `Tabela | project coluna1, coluna2, coluna3` — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Lógica SQL complexa com loops? Stored Procedure em Warehouse. Simples SELECT? Use View.",
      "cascasDeBanana": [
        "User-Defined Functions (UDFs): functions são escalares ou table-valued; SPs são blocos executáveis com control flow.",
        "Views: views são SELECT encapsulado; SPs permitem INSERT/UPDATE/DELETE + control flow.",
        "Triggers: auto-executam em ação de tabela; SPs são explicitamente chamadas."
      ],
      "dicaOuro": "Stored Procedures = T-SQL blocks with control flow. Encapsulate complex logic for reuse/scheduling."
    }
  },
  {
    "id": "dp600_q167",
    "text": "Em um Data Pipeline do Fabric, qual atividade permite iterar sobre uma lista de itens e executar um conjunto de atividades para cada elemento?",
    "options": [
      "A atividade \"Until\", que repete um bloco de atividades até que uma condição de parada seja satisfeita.",
      "A atividade \"ForEach\", que recebe uma coleção de itens (ex: lista de tabelas via expressão dinâmica) e executa o bloco interno de atividades para cada elemento, com opção de execução sequencial ou paralela.",
      "A atividade \"Execute Pipeline\", que chama um pipeline filho passando parâmetros diferentes a cada chamada manual.",
      "A atividade \"Lookup\" combinada com \"Switch\", que recupera uma lista e redireciona o fluxo para cada branch correspondente."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Benchmark na ferramenta de Capacity Metrics do Fabric mostra CPU/Memory/Duration de uma operação ou query. Você pode identificar queries lentas ou operações que consomem muitos recursos. Internamente, Fabric coleta métricas de cada execução e as expõe via admin API ou portal — permitem otimizações de índices, query rewriting, ou alocação de capacidade.",
      "respostaCerta": "A atividade \"ForEach\", que recebe uma coleção de itens (ex: lista de tabelas via expressão dinâmica) e executa o bloco interno de atividades para cada elemento, com opção de execução sequencial ou paralela. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Query lenta? Check Capacity Metrics para CPU/Duration. Identify resource bottleneck.",
      "cascasDeBanana": [
        "Query Plan: mostra passos de execução (join order, scans); Capacity Metrics mostra recursos consumidos (CPU, memory).",
        "DMVs (Dynamic Management Views): query SQL Server diagnostic; Capacity Metrics é Fabric-specific.",
        "Profiling: análise de código; benchmarking é medição de performance."
      ],
      "dicaOuro": "Capacity Metrics = resource consumption visibility (CPU, Memory, Duration). Use for optimization."
    }
  },
  {
    "id": "dp600_q168",
    "text": "Para que serve a função DAX `ISINSCOPE(coluna)` em medidas com hierarquias?",
    "options": [
      "Retorna TRUE se o valor atual da coluna está visível no visual do relatório, considerando paginação e filtros de rolagem.",
      "Retorna TRUE quando a coluna especificada está ativa no contexto de agrupamento atual de uma matriz ou tabela, permitindo criar medidas que se comportam diferente em cada nível da hierarquia (ex: mostrar percentual apenas no nível de detalhe).",
      "Verifica se uma coluna faz parte do modelo semântico atual, útil para validações em modelos compostos com múltiplas fontes.",
      "Verifica se uma coluna está dentro do escopo de filtragem atual, retornando TRUE se algum filtro está aplicado sobre ela."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "No contexto do DP-600, implementar e gerenciar modelo semântico exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Notebooks, a Magic Command `%%sql` execute SQL direto contra Delta Lake tabelas (ou via SQL Analytics Endpoint). Você escreve SQL dentro uma célula, Spark converte para DataFrame internamente, você acessa resultado em Python. Útil para queries uma-off ou exploração de dados sem escrever `spark.sql()` explicitamente.",
      "respostaCerta": "Retorna TRUE quando a coluna especificada está ativa no contexto de agrupamento atual de uma matriz ou tabela, permitindo criar medidas que se comportam diferente em cada nível da hierarquia (ex: mostrar percentual apenas no nível de detalhe). — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Notebook quer executar SQL rápido? `%%sql` magic command (syntax magic) vs `spark.sql()` (explicit call).",
      "cascasDeBanana": [
        "%%pyspark: default, executa Python code.",
        "%%scala: executa Scala code (menos comum em Fabric).",
        "Magic vs spark.sql: `%%sql` é syntactic sugar; `spark.sql()` é explicit API."
      ],
      "dicaOuro": "Magic commands = shortcuts in Notebooks. %%sql, %%pyspark, %%scala. Convenience, not necessary."
    }
  },
  {
    "id": "dp600_q169",
    "text": "Como você consulta dados de um Lakehouse a partir de um Warehouse no mesmo workspace do Fabric usando T-SQL?",
    "options": [
      "Usando OPENROWSET com a string de conexão ABFSS do OneLake para acessar os arquivos Delta do Lakehouse diretamente.",
      "Criando um Linked Server no Warehouse apontando para o SQL Analytics Endpoint do Lakehouse com credenciais de serviço.",
      "Exportando os dados do Lakehouse para um arquivo CSV via notebook e importando no Warehouse com BULK INSERT.",
      "Usando notação de três partes `[nome_lakehouse].[dbo].[nome_tabela]` diretamente na query T-SQL do Warehouse, pois o Fabric permite cross-database queries dentro do mesmo workspace sem configuração adicional."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Quando você faz Batch Copy em Data Pipeline (Copy activity com source e destination), a atividade copia dados em paralelo (mini-batches) se supported. Para Lakehouse, você pode configurar partitioning para paralelizar — dados são divididos por coluna, cada partition copia em thread separada. Isso acelera cópia de grandes volumes.",
      "respostaCerta": "Usando notação de três partes `[nome_lakehouse].[dbo].[nome_tabela]` diretamente na query T-SQL do Warehouse, pois o Fabric permite cross-database queries dentro do mesmo workspace sem configuração adicional. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Copiar TB de dados? Configure partitioning em Copy activity para paralelizar.",
      "cascasDeBanana": [
        "Streaming copy: contínuo, ideal para real-time. Batch é discrete, com start/stop.",
        "Incremental copy: reuse checkpoint; batch é fresh copy (ou filtered).",
        "Parallelism vs partitioning: ambos aceleram; parallelism é threads, partitioning é divisão de dados."
      ],
      "dicaOuro": "Batch Copy with partitioning = parallel data transfer. Accelerates large volume copies."
    }
  },
  {
    "id": "dp600_q170",
    "text": "Como usuários convidados (guest users) do Azure AD podem acessar conteúdo do Microsoft Fabric?",
    "options": [
      "Usuários convidados têm acesso automático a todos os workspaces públicos do tenant sem necessidade de convite explícito.",
      "Usuários convidados podem ser adicionados a workspaces com funções específicas ou receber acesso a Apps e itens individuais, desde que a configuração de tenant \"Allow guest users to access Microsoft Fabric\" esteja habilitada pelo administrador.",
      "Usuários convidados não podem acessar o Fabric; é necessário criar uma conta membro no tenant da organização.",
      "Usuários convidados só podem acessar relatórios publicados via \"Publish to Web\" com link público anônimo."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "No contexto do DP-600, manter a solução analítica exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Lakehouse SQL Analytics Endpoint é API read-only que expõe /Tables como tabelas SQL consultáveis. Você escreve T-SQL queries, Fabric traduz para Spark SQL e executa contra Delta Lake. O endpoint é performance-tuned para SQL (não Spark API). Ideal para analistas SQL puros que querem evitar Python/Spark.",
      "respostaCerta": "Usuários convidados podem ser adicionados a workspaces com funções específicas ou receber acesso a Apps e itens individuais, desde que a configuração de tenant \"Allow guest users to access Microsoft Fabric\" esteja habilitada pelo administrador. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "SQL Analyst querequer Lakehouse data? SQL Analytics Endpoint = T-SQL queries against Delta Lake tables.",
      "cascasDeBanana": [
        "Spark SQL: programmatic API em Notebooks; SQL Endpoint é UI/API SQL.",
        "Warehouse SQL: relational puro; Lakehouse SQL é read-only Delta Lake via SQL.",
        "Data Lake query: genérico; SQL Analytics Endpoint é Fabric-specific."
      ],
      "dicaOuro": "SQL Analytics Endpoint = SQL interface to Delta Lake. Read-only. No data copy."
    }
  },
  {
    "id": "dp600_q171",
    "text": "Como você consulta uma versão anterior de uma tabela Delta no Lakehouse do Fabric usando PySpark?",
    "options": [
      "`spark.sql(\"SELECT * FROM nome_tabela VERSION AS OF 5 TIMESTAMP AS OF '2024-01-15'\")`",
      "`spark.read.delta(\"Tables/nome_tabela\").version(5)`",
      "`DeltaTable.forName(spark, \"nome_tabela\").history(5).load()`",
      "`spark.read.format(\"delta\").option(\"versionAsOf\", 5).load(\"Tables/nome_tabela\")` para versão específica, ou `.option(\"timestampAsOf\", \"2024-01-15\")` para versão por data."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Dataflow Gen2, a opção 'Refresh Schedule' permite agendar quando o dataflow executa (diariamente, semanalmente, etc.). Você define frequência e hora — Fabric automaticamente executa em background. Internamente, scheduler Fabric enfileira o job e executa quando está programado.",
      "respostaCerta": "`spark.read.format(\"delta\").option(\"versionAsOf\", 5).load(\"Tables/nome_tabela\")` para versão específica, ou `.option(\"timestampAsOf\", \"2024-01-15\")` para versão por data. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Dataflow executar todas as noites? Configure Refresh Schedule.",
      "cascasDeBanana": [
        "Manual refresh: você clica Refresh botão; scheduled é automático.",
        "Refresh triggered by another item: dependency-based (espera outro item terminar); scheduled é time-based.",
        "Real-time: contínuo; scheduled é discrete intervals."
      ],
      "dicaOuro": "Refresh Schedule = automated time-based execution. Set frequency/time, Fabric handles."
    }
  },
  {
    "id": "dp600_q172",
    "text": "Ao configurar uma tabela de agregação em um modelo semântico, quais propriedades precisam ser definidas para cada coluna da tabela de agregação?",
    "options": [
      "A expressão DAX equivalente para cada coluna agregada e o threshold de linhas a partir do qual a agregação é ativada.",
      "Para cada coluna da tabela de agregação, deve-se definir o tipo de sumarização (Sum, Count, Min, Max, GroupBy) e a coluna de detalhe correspondente na tabela de fatos, para que o motor saiba quando usar a agregação.",
      "Apenas o modo de armazenamento (Import ou Dual) e o relacionamento com a tabela de fatos; o motor infere automaticamente as sumarizações.",
      "O nome da partição da tabela de fatos correspondente e a janela de tempo coberta por cada linha da tabela de agregação."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "No contexto do DP-600, implementar e gerenciar modelo semântico exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Power BI, Bookmarks capture estado visual do relatório (filters, selections, página, zoom). Você clica Bookmark button, captura. Depois, quando clica bookmark novamente, report volta exatamente aquele estado. Bookmarks são úteis para narrativas (ex: 'Click to see executive summary' bookmark). Internamente, bookmarks salvam state como JSON no arquivo .pbix.",
      "respostaCerta": "Para cada coluna da tabela de agregação, deve-se definir o tipo de sumarização (Sum, Count, Min, Max, GroupBy) e a coluna de detalhe correspondente na tabela de fatos, para que o motor saiba quando usar a agregação. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Relatório precisa capturar 'favorite views'? Bookmarks = saved states.",
      "cascasDeBanana": [
        "Drill-through: navigate para página diferente com filtro; bookmark é snapshot de estado.",
        "Spotlight: foca um visual; bookmark é estado inteiro do relatório.",
        "Animation: transição visual; bookmark é snapshot."
      ],
      "dicaOuro": "Bookmarks = saved report states. Useful for narratives/tours."
    }
  },
  {
    "id": "dp600_q173",
    "text": "No Warehouse do Fabric, como você usa uma CTE (Common Table Expression) para calcular a receita por categoria e depois filtrar apenas as que excedem R$ 100.000?",
    "options": [
      "`SELECT categoria, SUM(receita) AS total FROM dbo.vendas GROUP BY categoria HAVING total > 100000`",
      "`CREATE TEMP TABLE receita_categoria AS SELECT categoria, SUM(receita) AS total FROM dbo.vendas GROUP BY categoria; SELECT * FROM receita_categoria WHERE total > 100000`",
      "`WITH receita_categoria AS (SELECT categoria, SUM(receita) AS total FROM dbo.vendas GROUP BY categoria) SELECT * FROM receita_categoria WHERE total > 100000`",
      "`WITH (SELECT categoria, SUM(receita) FROM dbo.vendas GROUP BY categoria) AS receita_categoria WHERE total > 100000`"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Fabric, as Permissions controlam o acesso: você pode dar Admin/Member/Viewer role para usuários/grupos a level de Workspace. Essas permissões controlam quem vê artifacts (Lakehouse, modelo, relatório). A segurança é then enforced: se usuário não tem Member role, não pode editar; se não tem Viewer, não pode acessar. Permissions é workspace-level; RLS é modelo-level (filtra linhas).",
      "respostaCerta": "`WITH receita_categoria AS (SELECT categoria, SUM(receita) AS total FROM dbo.vendas GROUP BY categoria) SELECT * FROM receita_categoria WHERE total > 100000` — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Usuário não pode ver Lakehouse? Check Workspace Permissions (Admin/Member/Viewer role).",
      "cascasDeBanana": [
        "RLS: filtra linhas; Permissions filtra acesso a artifacts.",
        "Data Loss Prevention: política de endpoint; Permissions é controle de acesso.",
        "Sensitivity Labels: metadados; Permissions é controle executável."
      ],
      "dicaOuro": "Permissions = artifact access control by role. RLS = row-level data filtering."
    }
  },
  {
    "id": "dp600_q174",
    "text": "O que acontece com os dados de um Lakehouse se um workspace do Microsoft Fabric for excluído acidentalmente?",
    "options": [
      "Os dados ficam retidos no OneLake indefinidamente mesmo após a exclusão do workspace, podendo ser acessados via Azure Storage Explorer.",
      "O workspace fica em estado \"deleted\" por um período de retenção (geralmente 90 dias) durante o qual um administrador do Fabric pode restaurá-lo com todos os itens e dados do OneLake via Admin Portal.",
      "Os dados são excluídos permanentemente e imediatamente; não há período de retenção para workspaces no Fabric.",
      "O Fabric cria automaticamente um backup do workspace nas últimas 24 horas antes da exclusão, restaurável apenas via suporte Microsoft."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "No contexto do DP-600, manter a solução analítica exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Columnstore index em Warehouse agrupa dados por coluna (não por linha como b-tree tradicional). Quando você query apenas poucas colunas, columnstore lê só elas — economiza I/O. Também comprime bem (similar values agrupadas). Use columnstore para OLAP (analytical, wide scans); use row-store (non-clustered b-tree) para OLTP (narrow, transactional).",
      "respostaCerta": "O workspace fica em estado \"deleted\" por um período de retenção (geralmente 90 dias) durante o qual um administrador do Fabric pode restaurá-lo com todos os itens e dados do OneLake via Admin Portal. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Warehouse com queries analyticals (SELECT 5 columns from 100)? Columnstore index.",
      "cascasDeBanana": [
        "Clustered index: ordena tabela inteira; columnstore é reorganização por coluna.",
        "Non-clustered index: cria estrutura separada; columnstore é alteração de armazenamento físico.",
        "Partitioning: divide tabela por ranges; columnstore é compressão de formato."
      ],
      "dicaOuro": "Columnstore = compress by column. Efficient for analytical queries. Use in Warehouse OLAP."
    }
  },
  {
    "id": "dp600_q175",
    "text": "Em um Notebook Fabric com PySpark, como você implementa leitura de dados em streaming de um Eventstream e escrita contínua em uma tabela Delta?",
    "options": [
      "Usando `DeltaTable.streamFrom(spark, \"eventstream://nome\").writeTo(\"Tables/nome\").streaming().start()`",
      "Usando `spark.read.stream(\"eventstream://nome\")` e `df.write.delta(\"Tables/nome\", mode=\"streaming\")` com configuração automática de checkpoint.",
      "Usando um Dataflow Gen2 com modo de atualização \"Streaming\" que processa eventos do Eventstream e grava na tabela Delta.",
      "Usando `spark.readStream` com o conector Eventstream como fonte e `df.writeStream.format(\"delta\").outputMode(\"append\").option(\"checkpointLocation\", \"...\").start(\"Tables/nome\")` para escrita contínua com controle de checkpoint."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Um Semantic Model no Fabric pode ter modo Mixed: alguns fatos em Import (memória), outros em Direct Lake (OneLake live). Quando medida agrega ambos, Fabric executa cada parte em seu modo (Import aggregation em memória, Direct Lake via OneLake), depois combina resultados. Useful for grandes datasets (Direct Lake) que precisam de alguns aggregates pré-calculados (Import).",
      "respostaCerta": "Usando `spark.readStream` com o conector Eventstream como fonte e `df.writeStream.format(\"delta\").outputMode(\"append\").option(\"checkpointLocation\", \"...\").start(\"Tables/nome\")` para escrita contínua com controle de checkpoint. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Modelo grande com alguns aggregates? Mixed Mode: Direct Lake + Import.",
      "cascasDeBanana": [
        "Dual mode: diferente de Mixed — Dual combina Import + DirectQuery, não Import + Direct Lake.",
        "Composite Model: combina tabelas multiplamente relacionadas; Mixed Mode é sobre Import/Direct Lake.",
        "Fallback: Direct Lake pode fallback para DirectQuery se query não é supported; Mixed é intenção."
      ],
      "dicaOuro": "Mixed Mode = Import + Direct Lake in one model. Execute each in its mode, combine results."
    }
  },
  {
    "id": "dp600_q176",
    "text": "Para que serve a função DAX `NAMEOF(objeto)` em modelos semânticos?",
    "options": [
      "Retorna o nome de uma coluna ou medida como string, útil para criar medidas dinâmicas que referenciam seus próprios nomes sem hardcode, facilitando manutenção em renomeações.",
      "Retorna o nome da tabela de origem de uma coluna, útil para debugging de modelos compostos com múltiplas fontes.",
      "Retorna o nome do usuário autenticado atualmente acessando o relatório, equivalente a USERPRINCIPALNAME().",
      "Retorna o nome do papel RLS ativo para o usuário atual, equivalente a CUSTOMDATA() em cenários de segurança dinâmica."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "No contexto do DP-600, implementar e gerenciar modelo semântico exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em um modelo semântico com Bi-directional relationships, filtros fluem em ambas direções: se você filtra DimDate via Date[Year], Fatos filtra automaticamente AND Fatos filtra DimDate. Isso simplifica medidas (menos CALCULATE() necessário), mas pode causar ciclos se não configurado cuidadosamente. Use Bi-directional apenas quando ambas tabelas precisam filtrar uma a outra.",
      "respostaCerta": "Retorna o nome de uma coluna ou medida como string, útil para criar medidas dinâmicas que referenciam seus próprios nomes sem hardcode, facilitando manutenção em renomeações. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Filtros precisam fluir dos dois lados? Bi-directional. Ciclos potenciais? Revise schema.",
      "cascasDeBanana": [
        "One-to-many: direção padrão do filtro; não é mesma coisa que Bi-directional.",
        "Cross-filter direction: direção do filtro em uma relação; Bi-directional é ambas direções.",
        "Circular relationship: ciclo de relações; Bi-directional é configuração de uma relação."
      ],
      "dicaOuro": "Bi-directional relationship = two-way filter flow (rare, risky). Single direction (default) is safer."
    }
  },
  {
    "id": "dp600_q177",
    "text": "O que é o OneLake File Explorer e como ele é usado por engenheiros de dados?",
    "options": [
      "O painel de navegação de arquivos integrado ao portal do Fabric que exibe a estrutura de pastas do OneLake.",
      "Um aplicativo Windows que monta o OneLake como uma unidade local no Windows Explorer, permitindo arrastar e soltar arquivos, copiar e gerenciar dados do Fabric diretamente pelo sistema de arquivos sem usar o portal web.",
      "Uma extensão do Visual Studio Code que permite navegar e editar arquivos Delta do Lakehouse diretamente no editor de código.",
      "Uma ferramenta de linha de comando (CLI) para sincronização de arquivos entre o OneLake e o Azure Data Lake Storage Gen2."
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Fabric Capacity mede recursos em FCUs (Fabric Capacity Units) — contrata X FCUs/mês, pool compartilhado entre todos itens (Lakehouse, Warehouse, modelos, pipelines). Cada operação consome FCU baseado em CPU/memory/duração. Monitor via Capacity Metrics para ver consumo e planejar alocação.",
      "respostaCerta": "Um aplicativo Windows que monta o OneLake como uma unidade local no Windows Explorer, permitindo arrastar e soltar arquivos, copiar e gerenciar dados do Fabric diretamente pelo sistema de arquivos sem usar o portal web. — implementa corretamente o requisito técnico para este cenário de iniciante.",
      "puloDoGato": "Fabric Capacity = shared resource pool. Todos itens consomem dela. Monitor via Capacity Metrics.",
      "cascasDeBanana": [
        "Premium Capacity (Power BI): legacy Power BI licensing; Fabric Capacity é modelo novo com FCUs.",
        "Workspace vs Capacity: Workspace é container lógico; Capacity é alocação física.",
        "Throttling: quando capacity saturado, queries desaceleram; Slots/FCUs reservam recursos."
      ],
      "dicaOuro": "FCUs (Fabric Capacity Units) = Fabric pricing model. All workloads share pool. Allocate based on patterns."
    }
  },
  {
    "id": "dp600_q178",
    "text": "Como os logs de auditoria do Microsoft Fabric são acessados por administradores para rastrear atividades de usuários?",
    "options": [
      "Via OneLake Catalog, que registra todas as operações de leitura e escrita realizadas em itens do tenant.",
      "Via Monitor Hub do Fabric, que centraliza todos os logs de auditoria e atividade de usuários em tempo real.",
      "Via Azure Monitor com Log Analytics Workspace configurado para receber os logs do Fabric automaticamente.",
      "Via Microsoft Purview Audit (anteriormente Microsoft 365 Compliance Center) ou via API de Auditoria do Office 365, que registra eventos como acesso a relatórios, exportações, alterações de permissão e execuções de pipelines."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "No contexto do DP-600, manter a solução analítica exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Warehouse, Transaction Isolation Levels controlam visibilidade entre transactions concorrentes. READ COMMITTED (default): não vê dirty reads. SNAPSHOT: vê versão consistente ao início da transaction. SERIALIZABLE: mais restritivo, order total. Escolha balance entre consistency e concorrência — READ COMMITTED para maioria dos casos.",
      "respostaCerta": "Via Microsoft Purview Audit (anteriormente Microsoft 365 Compliance Center) ou via API de Auditoria do Office 365, que registra eventos como acesso a relatórios, exportações, alterações de permissão e execuções de pipelines. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Transactions concorrentes? READ COMMITTED = default balance. Higher levels = more consistency, less concurrency.",
      "cascasDeBanana": [
        "Locking: mecanismo de controle; Isolation é visibilidade de dados.",
        "Deadlock: mutual blocking; Isolation Level afeta probability.",
        "Pessimistic vs Optimistic: READ COMMITTED é otimista; SERIALIZABLE é pessimista."
      ],
      "dicaOuro": "Isolation Levels: READ COMMITTED (good) > SNAPSHOT (version consistency) > SERIALIZABLE (strict)."
    }
  },
  {
    "id": "dp600_q179",
    "text": "Em um Data Pipeline do Fabric, qual é a função da atividade \"Lookup\"?",
    "options": [
      "Realiza uma busca full-text em arquivos do OneLake e retorna os caminhos dos arquivos que contêm o termo pesquisado.",
      "Conecta-se a um Key Vault do Azure para recuperar credenciais de conexão de forma segura para uso no pipeline.",
      "Busca e valida a existência de um item específico no workspace Fabric antes de executar atividades dependentes.",
      "Executa uma query (SQL ou outra) em uma fonte de dados e retorna o resultado como variável para uso em atividades subsequentes, como obter a data da última carga para uso em filtros incrementais."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Spark, `applyInPandas()` UDF executa função Python customizada em chunks de DataFrame. Spark passa pandas DataFrame, função processa, retorna pandas DataFrame — Spark paraleliza aplicação em partições. Útil para lógica que Spark SQL não suporta (ML, custom aggregations, complex transformations).",
      "respostaCerta": "Executa uma query (SQL ou outra) em uma fonte de dados e retorna o resultado como variável para uso em atividades subsequentes, como obter a data da última carga para uso em filtros incrementais. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Custom lógica que Spark SQL não pode fazer? applyInPandas() — Python function on batches.",
      "cascasDeBanana": [
        "applyInPandas vs UDF (Scala): ambos custom, mas applyInPandas é pandas-batches, UDF é escalar.",
        "Pandas vs PySpark native: Pandas conveniente para lógica complexa; PySpark mais rápido.",
        "Vectorized execution: applyInPandas otimizado para pandas operations em batches."
      ],
      "dicaOuro": "applyInPandas() = pandas-based UDF. Executed in batches per partition. Flexible for complex logic."
    }
  },
  {
    "id": "dp600_q180",
    "text": "Quais configurações de interação visual no Power BI ajudam a reduzir o número de queries enviadas ao modelo semântico?",
    "options": [
      "Habilitar o modo \"Performance Mode\" no relatório, que agrupa todas as queries de visuais em uma única chamada ao modelo.",
      "Configurar cache de relatório no Fabric Service para servir resultados pré-calculados sem consultar o modelo semântico.",
      "Usar o modo \"Static Dashboard\" que renderiza os visuais como imagens estáticas sem enviar queries ao modelo.",
      "Desabilitar cross-filtering entre visuais específicos via \"Edit Interactions\", usar \"Apply all slicers\" button para aplicar múltiplos filtros de uma vez, e configurar \"Reduce number of queries sent\" nas opções do relatório."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "No contexto do DP-600, implementar e gerenciar modelo semântico exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Quando você exporta relatório Power BI (PBIX file), contém: definições modelo semântico (tabelas, medidas, relationships), queries M (data sources), layouts report (pages, visuals). Se modelo Direct Lake/DirectQuery, dados NÃO são salvos (metadata apenas). Por isso Embedded é comum — backend controla updates, clients consomem via Embedded API.",
      "respostaCerta": "Desabilitar cross-filtering entre visuais específicos via \"Edit Interactions\", usar \"Apply all slicers\" button para aplicar múltiplos filtros de uma vez, e configurar \"Reduce number of queries sent\" nas opções do relatório. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "PBIX file = model definition. Dados se Import; metadata-only se Direct Lake/DirectQuery.",
      "cascasDeBanana": [
        "Backup vs Export: Backup copia dataset inteiro; Export é PBIX com metadata.",
        "Publish vs Export: Publish para Power BI service; Export é arquivo local.",
        "Data inclusion: Import = dados included, Direct Lake/DirectQuery = metadata-only."
      ],
      "dicaOuro": "Export PBIX: includes data if Import, metadata-only if Direct Lake/DirectQuery."
    }
  },
  {
    "id": "dp600_q181",
    "text": "Como você configura a retenção de dados em uma tabela KQL de um Eventhouse no Fabric?",
    "options": [
      "Criando um Data Pipeline agendado que executa `DELETE FROM tabela WHERE timestamp < DATEADD(day, -30, GETDATE())` periodicamente.",
      "Configurando uma política de lifecycle no OneLake que arquiva automaticamente dados KQL mais antigos que o período configurado.",
      "Usando a opção \"Data Retention\" nas configurações do Eventhouse no portal Fabric, que aplica a política a todas as tabelas simultaneamente.",
      "Usando o comando KQL `.alter table nome_tabela policy retention softdelete = 30d` para definir o período de retenção, após o qual os dados são automaticamente removidos da tabela."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Quando medidas num visual têm contextos diferentes (ex: [2023 Sales] vs [2024 Sales]), use CALCULATE() com filter override para cada. Fabric avalia cada medida em seu context, depois combina visualmente. Permite side-by-side período comparison num visual.",
      "respostaCerta": "Usando o comando KQL `.alter table nome_tabela policy retention softdelete = 30d` para definir o período de retenção, após o qual os dados são automaticamente removidos da tabela. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Comparar períodos num visual? CALCULATE(measure, year_filter) para cada período.",
      "cascasDeBanana": [
        "Slicers: filtram page inteira; CALCULATE override é per-measure.",
        "Drill-down: navega hierarquia; CALCULATE é contexto específico.",
        "Relative dates: filtros dinâmicos; CALCULATE é manual."
      ],
      "dicaOuro": "CALCULATE() override = different filter contexts per measure (side-by-side comparison)."
    }
  },
  {
    "id": "dp600_q182",
    "text": "Como você faz backup de um modelo semântico no Microsoft Fabric usando o XMLA Endpoint?",
    "options": [
      "Usando a API REST do Fabric com o endpoint `/semanticmodels/{id}/export` que gera um arquivo .bak compatível com SQL Server.",
      "Usando o comando XMLA `{ \"backup\": { \"database\": \"nome_modelo\", \"file\": \"caminho.abf\", \"allowOverwrite\": true } }` via SSMS ou Tabular Editor conectado ao XMLA Endpoint, gerando um arquivo .abf restaurável.",
      "Exportando o modelo como arquivo .pbix pelo Power BI Service, que inclui o modelo semântico e os dados em modo Import.",
      "Criando um snapshot do workspace via Admin Portal que captura todos os itens incluindo o modelo semântico em formato binário."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "No contexto do DP-600, manter a solução analítica exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Dataflow scheduled refresh: extrai dados daily/hourly, limpa, carrega Warehouse. Configure Refresh Schedule, Dataflow executa automaticamente. Cada execução tem log (success/failure) monitável — permite detecção rápida data quality issues ou source failures.",
      "respostaCerta": "Usando o comando XMLA `{ \"backup\": { \"database\": \"nome_modelo\", \"file\": \"caminho.abf\", \"allowOverwrite\": true } }` via SSMS ou Tabular Editor conectado ao XMLA Endpoint, gerando um arquivo .abf restaurável. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "ETL diário? Dataflow scheduled = automatic execution + monitoring.",
      "cascasDeBanana": [
        "Manual refresh: você clica Refresh button — não automático.",
        "Data Pipeline scheduled: orquestração visual diferente; Dataflow é transformação específica.",
        "Real-time: contínuo vs scheduled (discrete)."
      ],
      "dicaOuro": "Dataflow Refresh Schedule = automate ETL. Monitor via activity logs for failures."
    }
  },
  {
    "id": "dp600_q183",
    "text": "Em PySpark com Delta Lake no Fabric, como você implementa um MERGE que também deleta registros marcados como inativos na fonte?",
    "options": [
      "`deltaTable.alias(\"dest\").merge(df_fonte.alias(\"src\"), \"dest.id = src.id\").whenMatchedDelete(condition=\"src.ativo = false\").whenMatchedUpdateAll(condition=\"src.ativo = true\").whenNotMatchedInsertAll().execute()`",
      "`deltaTable.merge(df_fonte, \"id\").delete(condition=\"ativo = false\").update().insert().run()`",
      "`df_fonte.filter(\"ativo = false\").write.format(\"delta\").mode(\"delete_matching\").save(\"Tables/destino\")`",
      "`spark.sql(\"MERGE INTO destino USING fonte ON id WHEN MATCHED AND ativo = false THEN DELETE WHEN MATCHED THEN UPDATE SET * WHEN NOT MATCHED THEN INSERT *\")`— sintaxe válida em SQL mas não via API PySpark do DeltaTable."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "KQL Database: otimizado ingestão/queries dados semi-estruturados (JSON logs, telemetria). Engine columnar comprime e indexes timestamp automaticamente. Ingesta rápida (1M+ rows/sec), queries históricas via KQL — ideal observabilidade e detecção anomalias logs.",
      "respostaCerta": "`deltaTable.alias(\"dest\").merge(df_fonte.alias(\"src\"), \"dest.id = src.id\").whenMatchedDelete(condition=\"src.ativo = false\").whenMatchedUpdateAll(condition=\"src.ativo = true\").whenNotMatchedInsertAll().execute()` — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Logs, telemetria, observabilidade? KQL Database is standard.",
      "cascasDeBanana": [
        "Warehouse: OLAP relacional; KQL é time-series telemetry.",
        "Lakehouse: Delta/Parquet storage; KQL é query engine (not file-based).",
        "Structured vs semi-structured: KQL schema flexível; Warehouse schema fixo."
      ],
      "dicaOuro": "KQL Database = time-series telemetry engine (schema-flexible, fast ingest, Kusto query)."
    }
  },
  {
    "id": "dp600_q184",
    "text": "O que faz a função DAX `OFFSET(-1, ALLSELECTED(Calendário[Mês]), ORDERBY(Calendário[Mês]))` em uma medida?",
    "options": [
      "Retorna o valor da medida com offset de 1 linha na tabela física, independente da ordenação aplicada no visual.",
      "Desloca o contexto de filtro 1 mês para o futuro, retornando os valores do próximo mês em relação ao selecionado.",
      "Remove o primeiro mês da seleção atual e recalcula a medida para os meses restantes.",
      "Retorna os valores da linha anterior na sequência ordenada de meses, permitindo cálculos de variação período a período sem necessidade de funções de inteligência de tempo tradicionais como DATEADD."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "No contexto do DP-600, implementar e gerenciar modelo semântico exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Calculated Column: coluna que Fabric calcula para cada row durante refresh (não real-time via DAX formula). Exemplo: `[Total] = [Quantity] * [Price]`. Durante refresh, DAX avalia por row, armazena resultado memória. Diferente medida (query-time), calculated column é pré-calculada.",
      "respostaCerta": "Retorna os valores da linha anterior na sequência ordenada de meses, permitindo cálculos de variação período a período sem necessidade de funções de inteligência de tempo tradicionais como DATEADD. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Coluna calculada per-row durante refresh? Calculated Column. Durante query? Measure.",
      "cascasDeBanana": [
        "Measure: calcula durante query; Calculated Column durante refresh.",
        "Calculated table: tabela inteira via DAX; Calculated Column é coluna.",
        "Dynamic calculation: não existe — Calculated Column precisa refresh para atualizar."
      ],
      "dicaOuro": "Calculated Column = DAX per-row at refresh. Stored in model (pre-calculated)."
    }
  },
  {
    "id": "dp600_q185",
    "text": "No Warehouse do Fabric, qual função T-SQL calcula a diferença em dias entre duas colunas de data?",
    "options": [
      "`DATESUBTRACT(data_fim, data_inicio, 'day')`",
      "`DATE_DIFF('day', data_inicio, data_fim)`",
      "`DATEDIFF(day, data_inicio, data_fim)` que retorna o número inteiro de dias entre as duas datas.",
      "`(data_fim - data_inicio)`"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Deployment Pipeline: alterações em Dev → Deploy copia apenas delta para Test (não full history). Fabric rastreia versões — Deploy incremental. Conflitos destino (coluna existe)? Compare UI permite decide overwrite/skip.",
      "respostaCerta": "`DATEDIFF(day, data_inicio, data_fim)` que retorna o número inteiro de dias entre as duas datas. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Deploy altera apenas mudanças (delta). Compare mostra o quê.",
      "cascasDeBanana": [
        "Full copy: copiar tudo; Deploy é incremental delta.",
        "Merge: reconcile branches; Deploy é overwrite stage.",
        "Backup: recomendado antes Deploy, não automático."
      ],
      "dicaOuro": "Deployment Pipeline = incremental promotion with change tracking and conflict resolution."
    }
  },
  {
    "id": "dp600_q186",
    "text": "Qual é a diferença de acesso entre um usuário adicionado diretamente ao workspace e um usuário que acessa apenas via Power BI App?",
    "options": [
      "Usuários do App têm permissão de exportar dados; usuários do workspace precisam de permissão explícita de exportação configurada no Admin Portal.",
      "Usuários do workspace veem todos os itens e podem interagir conforme sua função (Viewer, Contributor etc.); usuários do App veem apenas o conteúdo publicado no App com a navegação definida pelo publicador, sem acesso direto aos itens do workspace.",
      "Usuários do workspace podem editar relatórios; usuários do App podem apenas visualizar mas têm acesso aos dados brutos do modelo semântico.",
      "Não há diferença funcional; o App é apenas uma interface alternativa que mostra o mesmo conteúdo do workspace."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "No contexto do DP-600, manter a solução analítica exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Table Alias em T-SQL: renomeação curta para legibilidade/ambiguidade. Ex: `SELECT a.ID FROM dbo.Orders a JOIN dbo.Customers b...`. Aliases não têm overhead — purely syntactic. Use em queries multi-table.",
      "respostaCerta": "Usuários do workspace veem todos os itens e podem interagir conforme sua função (Viewer, Contributor etc.); usuários do App veem apenas o conteúdo publicado no App com a navegação definida pelo publicador, sem acesso direto aos itens do workspace. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Query multi-table? Use aliases (a, b, c) for brevity.",
      "cascasDeBanana": [
        "CTE: nomeia subquery inteira, não tabela.",
        "View: objeto permanente; Alias é temporary (query-scope).",
        "Schema qualification: `dbo.Orders` é qual nome; Alias é apelido."
      ],
      "dicaOuro": "Table Alias = shorthand (no performance impact, improves readability)."
    }
  },
  {
    "id": "dp600_q187",
    "text": "Como você usa parâmetros em um Dataflow Gen2 do Fabric para criar transformações dinâmicas reutilizáveis?",
    "options": [
      "Criando uma tabela de parâmetros no Lakehouse que o Dataflow lê na primeira etapa da query para configurar as transformações.",
      "Usando variáveis de workspace do Fabric que são automaticamente injetadas no Dataflow Gen2 como parâmetros de configuração.",
      "Criando parâmetros Power Query M via \"Manage Parameters\" no editor, que podem ser referenciados em filtros, caminhos de fonte e transformações, e sobrescritos por um Data Pipeline via atividade Dataflow com parâmetros dinâmicos.",
      "Usando a função M `Parameter.Value(\"nome\")` que lê parâmetros de um arquivo de configuração JSON na seção Files do Lakehouse."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Premium Auto-Refresh: modelo Import atualiza automaticamente sem schedule — Fabric detecta source changes, inicia refresh. Ideal dados frequentes mas não-previsíveis. Internamente, Fabric monitora data source, triggers refresh em mudança.",
      "respostaCerta": "Criando parâmetros Power Query M via \"Manage Parameters\" no editor, que podem ser referenciados em filtros, caminhos de fonte e transformações, e sobrescritos por um Data Pipeline via atividade Dataflow com parâmetros dinâmicos. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Dados frequente/imprevisível? Premium Auto-Refresh = change-detection + automatic refresh.",
      "cascasDeBanana": [
        "Scheduled Refresh: time-based; Auto-Refresh é change-triggered.",
        "Incremental Refresh: fetch delta; Auto-Refresh é detection + full refresh.",
        "Real-time: contínuo; Auto-Refresh é discrete (on change)."
      ],
      "dicaOuro": "Premium Auto-Refresh = change-triggered refresh (not time-based)."
    }
  },
  {
    "id": "dp600_q188",
    "text": "O que faz a função DAX `INDEX(1, ALLSELECTED(Produto[Nome]), ORDERBY([Receita Total], DESC))`?",
    "options": [
      "Retorna o índice numérico do produto com maior receita na tabela, equivalente a um número de linha sequencial.",
      "Cria um índice de pesquisa na coluna Produto[Nome] ordenado por receita para otimizar consultas subsequentes.",
      "Retorna os valores da linha na posição 1 (primeira posição) da tabela de produtos ordenada por Receita Total decrescente, ou seja, o produto com maior receita no contexto de filtro atual.",
      "Retorna a primeira linha da tabela Produto na ordem física de armazenamento, ignorando qualquer ordenação por receita."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "No contexto do DP-600, implementar e gerenciar modelo semântico exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Web Activity em Data Pipeline: chama HTTP endpoint (REST API) e captura resposta. Define URL, method (GET/POST), headers, body. Resposta armazenado variável pipeline que atividades subsequentes usam. Útil API calls como part ETL (fetch config, trigger ação externa).",
      "respostaCerta": "Retorna os valores da linha na posição 1 (primeira posição) da tabela de produtos ordenada por Receita Total decrescente, ou seja, o produto com maior receita no contexto de filtro atual. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Pipeline chamar REST API? Web Activity = HTTP request + capture response.",
      "cascasDeBanana": [
        "Copy Activity: move dados; Web Activity é API call.",
        "Script Activity: executa code; Web Activity é HTTP request.",
        "Webhook: callback mechanism; Web Activity é outbound."
      ],
      "dicaOuro": "Web Activity = HTTP request in Data Pipeline (API integration, webhooks, external triggers)."
    }
  },
  {
    "id": "dp600_q189",
    "text": "Em um Data Pipeline do Fabric, como você configura a atividade Copy Data para consumir uma API REST que requer paginação?",
    "options": [
      "Usando a atividade ForEach com uma lista de números de página hardcoded e chamando a API individualmente para cada página.",
      "Configurando um trigger de evento que dispara o pipeline novamente para cada página retornada pela API até receber resposta vazia.",
      "Configurando o conector REST como fonte com as opções de paginação (ex: `AbsoluteUrl`, `QueryParameters` ou `ResponseBody` como regra de paginação) que automaticamente itera pelas páginas até não haver mais dados.",
      "Usando um Notebook PySpark com a biblioteca `requests` para consumir a API paginada e salvar no Lakehouse, pois o conector REST nativo não suporta paginação."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Spark Streaming em Notebook: processa data continuamente em mini-batches a partir source (Event Hub, Kafka, arquivo stream). Define DataFrame com `.readStream`, aplica transformações, `.writeStream` para sink (Lakehouse). Streaming para real-time (alertas, live dashboards). Diferente batch (discrete), streaming é contínuo.",
      "respostaCerta": "Configurando o conector REST como fonte com as opções de paginação (ex: `AbsoluteUrl`, `QueryParameters` ou `ResponseBody` como regra de paginação) que automaticamente itera pelas páginas até não haver mais dados. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Dados chegar continuamente (Event Hub, Kafka)? Spark Streaming.",
      "cascasDeBanana": [
        "Batch processing: discrete runs; Streaming é contínuo.",
        "Micro-batching: batches pequenas; Full streaming é event-by-event.",
        "Event processing: event-at-a-time; Micro-batching é grupos pequenos."
      ],
      "dicaOuro": "Spark Streaming = micro-batch continuous processing (real-time, Event Hub/Kafka)."
    }
  },
  {
    "id": "dp600_q190",
    "text": "O que acontece com os workspaces e dados do Fabric quando uma capacity é pausada?",
    "options": [
      "Todos os dados são arquivados no Azure Blob Storage frio e precisam ser restaurados manualmente ao retomar a capacity.",
      "Os dados no OneLake são preservados; apenas os workloads computacionais (execução de pipelines, notebooks, refreshes) ficam indisponíveis; ao retomar a capacity, tudo volta ao estado anterior.",
      "Os workspaces ficam em modo somente leitura, permitindo visualizar relatórios mas não executar qualquer processamento.",
      "Os dados são excluídos após 7 dias de capacity pausada como medida de economia de armazenamento do OneLake."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "No contexto do DP-600, manter a solução analítica exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "DAX ALLEXCEPT(table, col1, col2): remove todos filtros EXCEPT colunas especificadas. Útil medidas que precisam contexto coluna específica mas ignorar outros filtros. Ex: `[Total All Region] = CALCULATE([Total], ALLEXCEPT(DimDate, DimDate[Year]))` — mantém Year filter, remove Region/Product.",
      "respostaCerta": "Os dados no OneLake são preservados; apenas os workloads computacionais (execução de pipelines, notebooks, refreshes) ficam indisponíveis; ao retomar a capacity, tudo volta ao estado anterior. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Medida ignorar alguns filtros mas manter outros? ALLEXCEPT(table, keep_cols).",
      "cascasDeBanana": [
        "ALL: remove todos; ALLEXCEPT é seletivo.",
        "CALCULATE: aplica filtros; ALLEXCEPT remove (inverso).",
        "VALUES: retorna distinct; ALLEXCEPT é contexto function."
      ],
      "dicaOuro": "ALLEXCEPT() = remove all filters except specified columns (selective context)."
    }
  },
  {
    "id": "dp600_q191",
    "text": "Em um Notebook Fabric, quando é mais apropriado usar pandas em vez de PySpark para transformação de dados?",
    "options": [
      "Para datasets pequenos (que cabem na memória do driver), prototipagem rápida, uso de bibliotecas Python específicas não disponíveis em PySpark, ou quando a simplicidade da API pandas é preferível para transformações simples.",
      "Quando a tabela Delta tem mais de 1 milhão de linhas, pois pandas usa otimizações de memória superiores ao PySpark nesses casos.",
      "Sempre que os dados vierem de arquivos Excel ou CSV, pois PySpark não suporta leitura desses formatos nativamente.",
      "Para dados em streaming, pois pandas tem melhor integração com o Eventstream do Fabric que o PySpark."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Implicit Measure: Power BI cria automaticamente ao arrastar coluna numérica → visual (assume SUM agregação default). Você pode editar (rightclick → Summarization) para AVG, COUNT, etc. Implicit são convenientes para exploração rápida, não reutilizáveis (não field list) — use Explicit Measures para reuse.",
      "respostaCerta": "Para datasets pequenos (que cabem na memória do driver), prototipagem rápida, uso de bibliotecas Python específicas não disponíveis em PySpark, ou quando a simplicidade da API pandas é preferível para transformações simples. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Coluna dragged vira SUM automaticamente? Implicit. Create Explicit se precisa reutilizar.",
      "cascasDeBanana": [
        "Explicit Measure: criada manual, reutilizável.",
        "Calculated Column: pré-calculada per-row; Implicit é agregação durante query.",
        "Default Summarization: comportamento ao drag column; Implicit é resultado."
      ],
      "dicaOuro": "Implicit Measure = auto-created aggregation (SUM default, not reusable). Use Explicit for reuse."
    }
  },
  {
    "id": "dp600_q192",
    "text": "Ao configurar Incremental Refresh em um modelo semântico no Fabric, quais são os parâmetros obrigatórios que devem ser criados no Power Query?",
    "options": [
      "Os parâmetros `RefreshFrom` e `RefreshTo` do tipo Date, configurados nas propriedades avançadas do modelo semântico no Fabric Service.",
      "Os parâmetros `IncrementalStart` e `IncrementalEnd` do tipo Text, que recebem datas em formato ISO 8601 para filtragem.",
      "Os parâmetros `PartitionKey` e `PartitionWindow`, que definem a coluna de particionamento e o intervalo em horas ou dias.",
      "Os parâmetros `RangeStart` e `RangeEnd` do tipo Date/Time, que definem a janela de dados incremental e são reconhecidos automaticamente pelo motor de refresh para criar partições."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "No contexto do DP-600, implementar e gerenciar modelo semântico exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Polybase em Warehouse: query dados em Lakehouse (Delta/Parquet) via T-SQL. Cria External Data Source (OneLake) + External Table (schema mapping). Queries combinam Warehouse (relacional) com Lakehouse (semi-structured) numa statement — híbrido sem data copy.",
      "respostaCerta": "Os parâmetros `RangeStart` e `RangeEnd` do tipo Date/Time, que definem a janela de dados incremental e são reconhecidos automaticamente pelo motor de refresh para criar partições. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Warehouse query Lakehouse data? Polybase (External Data Source + External Table).",
      "cascasDeBanana": [
        "Linked Service: conexão external system; Polybase é query mechanism.",
        "Shortcut: referência Fabric-to-Fabric; Polybase é Warehouse → Lakehouse específico.",
        "OPENROWSET: ad-hoc query; Polybase é structured external table."
      ],
      "dicaOuro": "Polybase = query external data from Warehouse using T-SQL (Lakehouse integration)."
    }
  },
  {
    "id": "dp600_q193",
    "text": "Em KQL, qual operador adiciona uma coluna calculada a uma tabela sem remover as colunas existentes?",
    "options": [
      "`project-keep`, que seleciona colunas existentes e cria novas mantendo o schema original inalterado.",
      "`extend`, como em `Tabela | extend nova_coluna = coluna1 + coluna2`, que acrescenta a coluna calculada mantendo todas as outras.",
      "`compute`, como em `Tabela | compute nova_coluna = expressao`",
      "`add-column`, como em `Tabela | add-column nome = expressao`"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Measure vs Calculated Column: Measure calcula durante query (dinâmico), Calculated Column durante refresh (estático). Use Measure para agregações (SUM, AVG) dependentes filtro. Use Calculated Column para valores derivados per-row não-dinamicamente filtrados.",
      "respostaCerta": "`extend`, como em `Tabela | extend nova_coluna = coluna1 + coluna2`, que acrescenta a coluna calculada mantendo todas as outras. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Agregação varia por filtro? Measure. Valor derivado estático per-row? Calculated Column.",
      "cascasDeBanana": [
        "Ambos DAX, contexto diferente (query vs refresh).",
        "Performance: Calculated Columns consomem memória; Measures são query-time.",
        "Reusability: Measures reutilizáveis múltiplos visuals; Calculated Columns por-tabela."
      ],
      "dicaOuro": "Measure = query-time dynamic aggregation. Calculated Column = refresh-time per-row static."
    }
  },
  {
    "id": "dp600_q194",
    "text": "Como você implementa Row-Level Security nativamente em um Warehouse do Microsoft Fabric via T-SQL?",
    "options": [
      "Configurando RLS no modelo semântico conectado ao Warehouse, que automaticamente propaga os filtros para o SQL Analytics Endpoint.",
      "Criando uma função de predicado inline (TVF) que filtra linhas com base no usuário, uma security policy com `CREATE SECURITY POLICY` que associa o predicado à tabela, e ativando com `WITH (STATE = ON)`.",
      "Criando roles T-SQL com `CREATE ROLE` e associando filtros de linha via `GRANT SELECT WHERE` com cláusula de filtragem por usuário.",
      "Usando a propriedade `ROW FILTER` na instrução `CREATE TABLE` para definir a expressão de filtragem por usuário."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "No contexto do DP-600, manter a solução analítica exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "`mssparkutils` em Notebooks: Fabric-specific utilities. `mssparkutils.fs` para file operations, `mssparkutils.notebook` para notebook control (run, exit). Ex: `mssparkutils.notebook.run('AnotherNotebook', 60)` executa outro notebook com timeout 60s — orchestration sem Data Pipeline.",
      "respostaCerta": "Criando uma função de predicado inline (TVF) que filtra linhas com base no usuário, uma security policy com `CREATE SECURITY POLICY` que associa o predicado à tabela, e ativando com `WITH (STATE = ON)`. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Notebook chamar outro? mssparkutils.notebook.run(). Fabric files? mssparkutils.fs.",
      "cascasDeBanana": [
        "pyspark: data processing; mssparkutils é Fabric integration.",
        "os module: filesystem Python nativo; mssparkutils.fs é Fabric-aware (OneLake).",
        "Subprocess: executa programas; mssparkutils.notebook é Fabric-specific."
      ],
      "dicaOuro": "mssparkutils = Fabric integration library (fs, notebook, credentials)."
    }
  },
  {
    "id": "dp600_q195",
    "text": "Em PySpark no Fabric, como você escreve um DataFrame particionado por coluna \"ano\" e \"mes\" em uma tabela Delta do Lakehouse?",
    "options": [
      "`spark.sql(\"INSERT INTO nome_tabela PARTITION BY (ano, mes) SELECT * FROM temp_view\")`",
      "`df.write.delta(\"Tables/nome_tabela\", partitions=[\"ano\", \"mes\"], mode=\"overwrite\")`",
      "`df.write.format(\"delta\").partitionBy(\"ano\", \"mes\").mode(\"overwrite\").saveAsTable(\"nome_tabela\")` ou `.save(\"Tables/nome_tabela\")`",
      "`df.write.format(\"delta\").option(\"partition.columns\", \"ano,mes\").mode(\"overwrite\").save(\"Tables/nome_tabela\")`"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "DAX NONBLANK(table): retorna table removendo rows onde coluna é BLANK. Útil SUMMARIZE ou funções que podem retornar blanks. Ex: `SUMMARIZE(...) EXCEPT (NONBLANK(...))` — compara resumos, remove blank rows. Performance impact minimal — filtragem simples.",
      "respostaCerta": "`df.write.format(\"delta\").partitionBy(\"ano\", \"mes\").mode(\"overwrite\").saveAsTable(\"nome_tabela\")` ou `.save(\"Tables/nome_tabela\")` — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Tabela com blanks? NONBLANK() para remover blank rows.",
      "cascasDeBanana": [
        "BLANK vs NULL: ambos 'vazio'; NONBLANK é DAX function.",
        "COALESCE: substitui BLANK; NONBLANK apenas remove.",
        "Filter context: NONBLANK é tabela function, não contexto."
      ],
      "dicaOuro": "NONBLANK() = filter out blank rows (simple filtering)."
    }
  },
  {
    "id": "dp600_q196",
    "text": "O que faz a função DAX `WINDOW(1, ABS, 0, REL, ALLSELECTED(Calendário[Mês]), ORDERBY(Calendário[Mês]))`?",
    "options": [
      "Retorna apenas a janela de 1 mês relativo ao mês atual, equivalente ao período selecionado no slicer de data.",
      "Define uma janela de 1 linha antes e 0 linhas depois da posição atual, retornando apenas o valor do mês anterior.",
      "Define uma janela que começa na primeira linha absoluta (posição 1 ABS) e termina na linha atual (posição 0 REL), criando uma janela acumulativa do início ao mês atual",
      "Cria uma partição de 1 elemento absoluto a partir do início da tabela para cálculos de média móvel de janela fixa."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "No contexto do DP-600, implementar e gerenciar modelo semântico exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Data Pipeline Triggers: Schedule (time-based), Tumbling Window (recorrente intervals), Event-based (arquivo, dataset refresh). Configure ao criar/editar pipeline. Internamente, Fabric scheduler ou event handler dispara automaticamente.",
      "respostaCerta": "Define uma janela que começa na primeira linha absoluta (posição 1 ABS) e termina na linha atual (posição 0 REL), criando uma janela acumulativa do início ao mês atual — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Pipeline daily 2AM? Schedule Trigger. On arquivo? Event-based.",
      "cascasDeBanana": [
        "Manual trigger: você clica Run; Trigger é automático.",
        "Dependency: pipeline espera outro; Trigger é início automático.",
        "Timeout: limite duração; Trigger é início mecanismo."
      ],
      "dicaOuro": "Triggers = Schedule, Tumbling Window, Event-based automatic execution."
    }
  },
  {
    "id": "dp600_q197",
    "text": "Quais transformações podem ser aplicadas diretamente no Eventstream do Fabric antes de rotear os dados para o destino?",
    "options": [
      "Apenas filtragem simples e projeção de campos; transformações complexas como agregações devem ser feitas no destino (Eventhouse ou Lakehouse) após a ingestão.",
      "Transformações completas equivalentes ao Dataflow Gen2, incluindo joins complexos, pivoting e funções de limpeza de dados.",
      "Filtragem de eventos, projeção de campos (selecionar colunas), agregações temporais por janela (tumbling/hopping/session windows), união de streams e enriquecimento com dados de referência via lookup.",
      "Apenas conversão de formato de serialização (JSON para Avro, Avro para Parquet) sem suporte a filtragem ou agregação no stream."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Drill-through em Power BI Report: click valor → direcionado página detalhada com filtro. Configure na página destino — define quais columns/valores trigger drill. Internamente, valores passam URL parâmetros, página filtra baseado neles.",
      "respostaCerta": "Filtragem de eventos, projeção de campos (selecionar colunas), agregações temporais por janela (tumbling/hopping/session windows), união de streams e enriquecimento com dados de referência via lookup. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Click valor → página detalhada filtrada? Drill-through configuration.",
      "cascasDeBanana": [
        "Bookmark: captura visual state; Drill-through é navegação filtrada.",
        "Drill-down: navega hierarquia (Year → Month → Day); Drill-through é página diferente.",
        "Slicers: filtram visual atual; Drill-through é navegação."
      ],
      "dicaOuro": "Drill-through = click navigation with filtered context transfer to detail page."
    }
  },
  {
    "id": "dp600_q198",
    "text": "O que é a Trial Capacity do Microsoft Fabric e quais são suas limitações em relação a uma capacity paga?",
    "options": [
      "É uma capacity permanentemente gratuita para pequenas organizações com até 10 usuários e 1 workspace ativo.",
      "É uma capacity de desenvolvimento exclusiva para parceiros Microsoft certificados, sem restrição de tempo mas limitada a ambientes não produtivos.",
      "É uma assinatura mensal de baixo custo equivalente ao SKU F2 que pode ser renovada indefinidamente por empresas em fase de piloto.",
      "É uma capacity gratuita de 60 dias que oferece acesso a todos os workloads Fabric com recursos limitados (equivalente a F64), sem SLA de produção, e expira automaticamente ao final do período sem renovação automática."
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "No contexto do DP-600, manter a solução analítica exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Composite Model: tabelas Import + DirectQuery. Medida combina dados? Fabric executa separadamente (Import memória, DirectQuery source), combina. Pode resultar inconsistência se timestamps/aggregations diferem — planejamento cuidado. Use quando dados enormes precisam some pré-aggregates.",
      "respostaCerta": "É uma capacity gratuita de 60 dias que oferece acesso a todos os workloads Fabric com recursos limitados (equivalente a F64), sem SLA de produção, e expira automaticamente ao final do período sem renovação automática. — implementa corretamente o requisito técnico para este cenário de iniciante.",
      "puloDoGato": "Modelo grande + pré-aggregates? Composite Model (Import + DirectQuery).",
      "cascasDeBanana": [
        "Mixed Mode: Import + Direct Lake; Composite é Import + DirectQuery.",
        "Direct Lake: Fabric nativo, sem DirectQuery; Composite exige DirectQuery.",
        "Chained calculations: medida chama outra; Composite é mode mixing."
      ],
      "dicaOuro": "Composite Model = Import + DirectQuery in one model (aggregation consistency critical)."
    }
  },
  {
    "id": "dp600_q199",
    "text": "Em um Notebook Fabric, como você aumenta a memória disponível por executor Spark para processar datasets muito grandes sem erro de OutOfMemory?",
    "options": [
      "Dividindo o DataFrame em chunks com `df.repartition(1000)` antes das transformações para distribuir a memória entre mais partições menores.",
      "Usando `spark.sparkContext.setLocalProperty(\"executor.memory\", \"8g\")` em tempo de execução para ajustar dinamicamente a memória.",
      "Aumentando o tamanho da capacity Fabric no portal Azure, que automaticamente distribui mais memória para todos os notebooks em execução.",
      "Configurando as propriedades Spark no Environment do workspace ou diretamente no notebook com `%%configure -f {\"conf\": {\"spark.executor.memory\": \"8g\", \"spark.executor.cores\": \"4\"}}` antes de iniciar a sessão."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "CTE (Common Table Expression) em T-SQL: `WITH nome AS (SELECT ...)` define subquery reutilizável. CTEs melhoram readability (vs nested) e permitam recursão. Ex: `WITH OrderedSales AS (SELECT ...) SELECT * FROM OrderedSales WHERE ...`. Internamente, CTE compilado once, depois referenciado.",
      "respostaCerta": "Configurando as propriedades Spark no Environment do workspace ou diretamente no notebook com `%%configure -f {\"conf\": {\"spark.executor.memory\": \"8g\", \"spark.executor.cores\": \"4\"}}` antes de iniciar a sessão. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Query com múltiplas subqueries? CTE (WITH) para clarity e reuse.",
      "cascasDeBanana": [
        "Subquery: inline sem nome; CTE é nomeado reutilizável.",
        "View: objeto permanente; CTE é temporary (query-scope).",
        "Recursive: CTE pode auto-referência (hierarchies); subquery não."
      ],
      "dicaOuro": "CTE (WITH) = named temporary query (readability, recursion, better than nested)."
    }
  },
  {
    "id": "dp600_q200",
    "text": "Em um Composite Model que combina tabelas Direct Lake com tabelas Import, qual é o comportamento esperado quando uma medida agrega dados de ambos os tipos?",
    "options": [
      "O motor usa exclusivamente o Direct Lake para todas as tabelas, ignorando os dados Import para manter consistência de fonte.",
      "O motor executa as partes Import em memória e as partes Direct Lake via acesso ao OneLake separadamente, combinando os resultados; se necessário, o Direct Lake pode realizar fallback para DirectQuery para completar o cálculo.",
      "O modelo gera um erro de validação pois Direct Lake e Import não podem coexistir no mesmo modelo semântico.",
      "O motor converte automaticamente todas as tabelas para Import antes de processar a medida, garantindo consistência de desempenho."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "No contexto do DP-600, implementar e gerenciar modelo semântico exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Shortcut em Lakehouse: referência cruzada workspaces. Vai Files/Tables, 'New Shortcut', seleciona workspace/Lakehouse destino, aponta para /Files ou /Tables. Query shortcut como tabela local — Fabric resolve internamente. Zero armazenamento cost (referência, não cópia).",
      "respostaCerta": "O motor executa as partes Import em memória e as partes Direct Lake via acesso ao OneLake separadamente, combinando os resultados; se necessário, o Direct Lake pode realizar fallback para DirectQuery para completar o cálculo. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Workspace A precisa dados Workspace B? Create Shortcut A → B.",
      "cascasDeBanana": [
        "Hard copy: cópia física; Shortcut é referência.",
        "Cross-workspace copy: export/import; Shortcut é native reference.",
        "Replication: sync contínua; Shortcut é static pointer."
      ],
      "dicaOuro": "Shortcut = cross-workspace reference without data copy (zero storage overhead)."
    }
  },
  {
    "id": "dp600_q201",
    "text": "Qual é a diferença entre as funções DAX `GENERATE()` e `GENERATEALL()`?",
    "options": [
      "`GENERATE()` cria sequências numéricas; `GENERATEALL()` cria sequências com todas as combinações possíveis entre duas tabelas.",
      "`GENERATE()` executa um INNER JOIN entre a tabela externa e o resultado da expressão interna, excluindo linhas onde o resultado interno é vazio; `GENERATEALL()` executa um LEFT OUTER JOIN, mantendo todas as linhas externas mesmo quando o resultado interno está vazio.",
      "`GENERATE()` processa linha por linha sequencialmente; `GENERATEALL()` processa em paralelo usando todos os núcleos disponíveis.",
      "São funções idênticas, `GENERATEALL()` sendo apenas um alias criado para compatibilidade com versões antigas do DAX."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "`GENERATE()` executa INNER JOIN lógico: mantém apenas linhas externas que têm correspondência no resultado interno. Se resultado interno é vazio, a linha externa é descartada. `GENERATEALL()` executa LEFT OUTER JOIN: mantém todas linhas externas mesmo se resultado interno é vazio (preenchendo com BLANK). Escolha depende se você quer filtar (GENERATE) ou manter tudo (GENERATEALL).",
      "respostaCerta": "`GENERATE()` executa um INNER JOIN entre a tabela externa e o resultado da expressão interna, excluindo linhas onde o resultado interno é vazio; `GENERATEALL()` executa um LEFT OUTER JOIN, mantendo todas as linhas externas mesmo quando o resultado interno está vazio. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "GENERATE = INNER JOIN (filtra linhas vazias). GENERATEALL = LEFT JOIN (mantém tudo). Escolha por comportamento desejado.",
      "cascasDeBanana": [
        "Números vs séries: GENERATE não cria sequências numéricas — cria tabelas de produto cartesiano.",
        "Paralelo vs sequencial: nenhum dos dois é paralelo — ambos processam sequencialmente linha-a-linha.",
        "Alias vs função real: GENERATEALL não é alias — são two distinct funções com comportamento diferente."
      ],
      "dicaOuro": "GENERATE vs GENERATEALL = diferença é NULL/BLANK handling. INNER vs LEFT JOIN analogy."
    }
  },
  {
    "id": "dp600_q202",
    "text": "Como você usa variáveis em um Data Pipeline do Fabric para armazenar e reutilizar valores intermediários durante a execução?",
    "options": [
      "Definindo variáveis na seção \"Variables\" do pipeline, usando a atividade \"Set Variable\" para atribuir valores (incluindo resultados de atividades anteriores via expressões dinâmicas `@activity('nome').output`) e referenciando com `@variables('nome')`.",
      "Usando a atividade \"Cache\" do pipeline, que armazena resultados intermediários em memória acessíveis por atividades subsequentes.",
      "Criando uma tabela temporária no Warehouse com `CREATE TABLE #variaveis` e usando atividades Script para ler e gravar valores.",
      "Usando parâmetros de pipeline com `@pipeline().parameters.nome`, que permitem leitura e escrita durante a execução."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Variáveis em Data Pipeline são definidas na seção 'Variables' e atribuídas via 'Set Variable' activity. Você passa valores (constantes ou outputs de atividades anteriores via `@activity('name').output`) e as referencia com `@variables('varName')` em steps subsequentes. Tipicamente usado para passar valores entre atividades (ex: count de linhas para log, file path dinâmico).",
      "respostaCerta": "Definindo variáveis na seção \"Variables\" do pipeline, usando a atividade \"Set Variable\" para atribuir valores (incluindo resultados de atividades anteriores via expressões dinâmicas `@activity('nome').output`) e referenciando com `@variables('nome')`. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Pipeline precisa passar valores entre atividades? Variables (Set Variable activity + @variables()).",
      "cascasDeBanana": [
        "Pipeline Parameters: são inputs do pipeline, não variables. Parameters são configuração, variables são estado runtime.",
        "Cache activity: armazena dataset em memória, não escalares — não é mecanismo de variable.",
        "Stored procedures com temp tables: são SQL-level, não pipeline-level."
      ],
      "dicaOuro": "Pipeline Variables = runtime state via Set Variable activity. Parameters = inputs. Variables = intermediates."
    }
  },
  {
    "id": "dp600_q203",
    "text": "Como o Object-Level Security (OLS) é configurado em um modelo semântico no Fabric para restringir acesso a uma tabela inteira?",
    "options": [
      "Removendo a tabela do modelo semântico e criando uma view SQL que exclui os dados para usuários não autorizados.",
      "Criando uma role RLS com filtro DAX `FALSE()` aplicado à tabela, que bloqueia todas as linhas e efetivamente oculta os dados.",
      "Usando `DENY SELECT ON tabela TO role` via T-SQL no SQL Analytics Endpoint, que propaga automaticamente para o modelo semântico.",
      "Usando o Tabular Editor ou XMLA, definindo a propriedade `MetadataPermission` da tabela como `None` para a role específica, tornando a tabela completamente invisível para usuários dessa role."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "No contexto do DP-600, manter a solução analítica exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Object-Level Security (OLS) no Fabric bloqueia objetos inteiros (tabelas ou colunas) para usuários sem permissão — eles não veem no field list. RLS filtra linhas. Você configura OLS na modelagem (Admin Portal), define roles + object permissions. Quando usuário sem permissão acessa relatório, objeto simplesmente não aparece (diferente de RLS que mostra objeto mas filtra dados).",
      "respostaCerta": "Usando o Tabular Editor ou XMLA, definindo a propriedade `MetadataPermission` da tabela como `None` para a role específica, tornando a tabela completamente invisível para usuários dessa role. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Usuário não vê tabela inteira? OLS bloqueia objeto. Vê tabela mas not todas linhas? RLS.",
      "cascasDeBanana": [
        "Row-Level Security: filtra linhas via DAX; OLS bloqueia objeto todo.",
        "Column-level security: é tipo de OLS para colunas específicas.",
        "Sensitivity Labels: metadados informativos; OLS é enforced hiding."
      ],
      "dicaOuro": "OLS = object-level blocking (users don't see it). RLS = row-level filtering (users see object, filtered data)."
    }
  },
  {
    "id": "dp600_q204",
    "text": "Em um Notebook Fabric, como você implementa validação de qualidade de dados verificando se uma coluna obrigatória contém valores nulos antes de gravar no Lakehouse?",
    "options": [
      "`df.schema[\"coluna_obrigatoria\"].nullable = False`",
      "`null_count = df.filter(col(\"coluna_obrigatoria\").isNull()).count(); assert null_count == 0, f\"Erro: {null_count} valores nulos encontrados\"`",
      "`spark.sql(\"ALTER TABLE destino ADD CONSTRAINT not_null CHECK (coluna_obrigatoria IS NOT NULL)\")`",
      "`df.na.drop(subset=[\"coluna_obrigatoria\"]).write.format(\"delta\").save(\"Tables/destino\")`"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Quando você atualiza dados em Lakehouse via Spark (INSERT/UPDATE), Delta Lake valida schema — nova coluna precisa corresponder ao tipo existente ou schema evolution deve estar habilitada. Se esquema não corresponde, operação falha. ABORT ocorre quando a validação falha. Para permitir evolução, use `.option('mergeSchema', 'true')` no writer.",
      "respostaCerta": "`null_count = df.filter(col(\"coluna_obrigatoria\").isNull()).count(); assert null_count == 0, f\"Erro: {null_count} valores nulos encontrados\"` — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Escrever dados com schema novo? mergeSchema=true. Sem isso, schema mismatch causa ABORT.",
      "cascasDeBanana": [
        "Type casting: conversão dentro da coluna existente — diferente de schema evolution.",
        "Truncate and reload: descarta dados; schema evolution adiciona/modifica colunas.",
        "Partition evolution: adiciona partitions — não é schema evolution."
      ],
      "dicaOuro": "Delta Lake Schema Evolution = .option('mergeSchema', 'true'). Permite adicionar colunas."
    }
  },
  {
    "id": "dp600_q205",
    "text": "O que faz a função DAX `COALESCE(expressão1, expressão2, expressão3)`?",
    "options": [
      "Calcula a média dos valores não nulos entre as expressões numéricas fornecidas como argumentos.",
      "Combina múltiplas tabelas verticalmente retornando todas as linhas não nulas de cada expressão tabular.",
      "Retorna o primeiro valor não-BLANK (não nulo) entre as expressões avaliadas em ordem, equivalente a uma série de `IF(ISBLANK(expr1), IF(ISBLANK(expr2), expr3, expr2), expr1)`.",
      "Retorna o maior valor não nulo entre as expressões, equivalente ao MAX aplicado a múltiplas colunas."
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "No contexto do DP-600, implementar e gerenciar modelo semântico exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Um Threshold em Data Pipeline é limite configurável (ex: tolerância de erro). Se operação excede threshold (ex: 1000 rows falham), pipeline pode abortar ou continuar baseado em configuração. Você define via Try/Catch activities ou error handling policy. Útil para validação de qualidade — se dados muito ruins, interrompe antes de estragar downstream.",
      "respostaCerta": "Retorna o primeiro valor não-BLANK (não nulo) entre as expressões avaliadas em ordem, equivalente a uma série de `IF(ISBLANK(expr1), IF(ISBLANK(expr2), expr3, expr2), expr1)`. — implementa corretamente o requisito técnico para este cenário de iniciante.",
      "puloDoGato": "Pipeline validar dados? Threshold check: se failed rows > X, abortar.",
      "cascasDeBanana": [
        "Timeout: limite de duração da atividade, não limite de erro count.",
        "Monitoring: observação de métricas; threshold é condição executável.",
        "Alert: notificação de problema; threshold é validação antes de continuar."
      ],
      "dicaOuro": "Threshold = configurable limit (errors, rows, etc). Abort or continue based on policy."
    }
  },
  {
    "id": "dp600_q206",
    "text": "Usando a API REST do Fabric, como você lista todos os itens de um workspace específico?",
    "options": [
      "`GET https://api.powerbi.com/v1.0/myorg/groups/{workspaceId}/datasets`",
      "`GET https://api.fabric.microsoft.com/v1/workspaces/{workspaceId}/contents`",
      "`GET https://api.fabric.microsoft.com/v1/workspaces/{workspaceId}/items` que retorna uma lista paginada de todos os itens com tipo, ID e nome.",
      "`GET https://management.azure.com/fabric/workspaces/{workspaceId}/items?api-version=2024-01`"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em modelagem Fabric, Attribute Relationships em hierarquias permitem relacionar attributes (ano→trimestre→mês). Quando bem definidos, DAX pode otimizar queries (sabe que mês sempre dentro trimestre, não precisa verificar ambiguidade). Configuração via 'Attribute Relationships' no Model View. Útil para séries temporais complexas.",
      "respostaCerta": "`GET https://api.fabric.microsoft.com/v1/workspaces/{workspaceId}/items` que retorna uma lista paginada de todos os itens com tipo, ID e nome. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Hierarquia com múltiplos levels (Year-Quarter-Month)? Attribute Relationships para otimização.",
      "cascasDeBanana": [
        "Relationships de tabela: relacionam colunas entre tabelas diferentes; attribute é within tabela.",
        "Hierarchies: ordena levels visually; attribute relationship é otimização lógica.",
        "Parent-child relationships: mecanismo diferente para dados hierárquicos."
      ],
      "dicaOuro": "Attribute Relationships = optimize hierarchies by defining level relationships within dimension table."
    }
  },
  {
    "id": "dp600_q207",
    "text": "Como você configura alertas de falha para um Data Pipeline no Microsoft Fabric?",
    "options": [
      "Criando um Azure Monitor Alert Rule que detecta falhas de pipeline via métricas do Log Analytics Workspace do Fabric.",
      "Usando o Microsoft Purview para criar políticas de alerta baseadas em eventos de qualidade de dados em pipelines.",
      "Nas configurações do pipeline, habilitando notificações por e-mail na seção \"Notifications\" para eventos de falha, sucesso ou conclusão, ou usando a atividade \"Office 365 Outlook\" no path \"On Failure\" para envio programático.",
      "Configurando um webhook no Azure Event Grid que captura eventos de falha do Fabric e dispara notificações externas."
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "No contexto do DP-600, manter a solução analítica exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Notebooks Fabric, quando você cria DataFrame via `.createDataFrame()` ou `.read`, você pode aplicar transformações encadeadas (map, filter, groupBy, etc.). Cada transformação retorna novo DataFrame — isso é lazy evaluation. Operações não executam até você chamar `.collect()` ou escrever para sink. Isso permite otimizações (Catalyst optimizer).",
      "respostaCerta": "Nas configurações do pipeline, habilitando notificações por e-mail na seção \"Notifications\" para eventos de falha, sucesso ou conclusão, ou usando a atividade \"Office 365 Outlook\" no path \"On Failure\" para envio programático. — implementa corretamente o requisito técnico para este cenário de iniciante.",
      "puloDoGato": "Transformações de DataFrame construídas até `.collect()`. Lazy = otimizáveis.",
      "cascasDeBanana": [
        "Eager evaluation: execute imediatamente; Spark Lazy é padrão.",
        "RDD vs DataFrame: RDD é genérico; DataFrame é otimizado com lazy evaluation.",
        "Collect: força execução — cuidado em large datasets (traz para driver)."
      ],
      "dicaOuro": "Spark Lazy Evaluation = transformations queued until action (collect, write). Enables Catalyst optimization."
    }
  },
  {
    "id": "dp600_q208",
    "text": "No Warehouse do Microsoft Fabric, como você cria uma tabela temporária para armazenar resultados intermediários de uma transformação T-SQL?",
    "options": [
      "Usando `DECLARE @tabela TABLE (...)`",
      "Usando `CREATE STAGING TABLE tabela_temp (...)`",
      "Usando `CREATE TABLE #tabela_temp (...)` ou `SELECT ... INTO #tabela_temp FROM ...`",
      "Usando `CREATE TEMPORARY TABLE tabela_temp (...)`"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Um Measure Hide é opção para ocultar medida do field list mas mantê-la consultável via DAX. Você marca 'Hide in reporting clients' na definição de medida. Útil para medidas helpers (usadas por outras medidas internamente) ou experimentos. Usuários não veem, mas DAX pode referenciar.",
      "respostaCerta": "Usando `CREATE TABLE #tabela_temp (...)` ou `SELECT ... INTO #tabela_temp FROM ...` — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Medida helper usada internamente? Hide in reporting clients.",
      "cascasDeBanana": [
        "Column hide: oculta coluna de field list; measure hide é medida específica.",
        "Table hide: bloqueia tabela inteira; measure hide é granular.",
        "RLS/OLS: segurança; measure hide é UI convenience."
      ],
      "dicaOuro": "Measure Hide = suppress from field list, keep accessible to DAX (helper measures)."
    }
  },
  {
    "id": "dp600_q209",
    "text": "O que são Auto Aggregations (anteriormente chamadas de Automatic Aggregations) no Power BI Premium/Fabric?",
    "options": [
      "Uma funcionalidade que cria automaticamente hierarquias de data e geografia com base nas colunas detectadas no modelo.",
      "Um processo automático de compactação VertiPaq que reorganiza as tabelas Import para minimizar o uso de memória baseado nos padrões de uso.",
      "Um recurso que agrega automaticamente medidas DAX similares em uma única medida otimizada durante o processo de publicação do modelo.",
      "Um recurso de IA que analisa os padrões de consulta do modelo semântico e cria automaticamente tabelas de agregação em cache para acelerar as queries mais frequentes em modelos DirectQuery, sem configuração manual."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "No contexto do DP-600, implementar e gerenciar modelo semântico exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Spark Notebooks, SparkSQL é componente que permite T-SQL-like syntax contra DataFrames via `spark.sql()`. Você registra DataFrame como temporary view (`df.createOrReplaceTempView('name')`), depois queries com SQL. SparkSQL suporta SELECT/JOIN/GROUP BY/etc — mais acessível que DataFrame API para analistas SQL.",
      "respostaCerta": "Um recurso de IA que analisa os padrões de consulta do modelo semântico e cria automaticamente tabelas de agregação em cache para acelerar as queries mais frequentes em modelos DirectQuery, sem configuração manual. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Analista SQL em Notebook? spark.sql('SELECT ...') contra registered views.",
      "cascasDeBanana": [
        "DataFrame API: PySpark programmatic; SparkSQL é declarativo SQL.",
        "Hive: SQL engine antigo; SparkSQL é moderno e integrado ao Spark.",
        "T-SQL: SQL Server dialect; SparkSQL é Apache Spark implementação de SQL."
      ],
      "dicaOuro": "SparkSQL = SQL interface to Spark DataFrames. Temporary views + SQL queries."
    }
  },
  {
    "id": "dp600_q210",
    "text": "Em KQL, qual é a diferença entre os operadores `join` e `lookup`?",
    "options": [
      "`join` é um join completo entre duas tabelas de tamanhos similares com múltiplas variantes (inner, outer etc.); `lookup` é otimizado para enriquecer uma tabela de fatos grande com valores de uma tabela de dimensão pequena, sendo mais eficiente nesse cenário específico.",
      "`join` suporta múltiplas chaves de junção; `lookup` suporta apenas uma chave de junção simples por operação.",
      "`join` funciona apenas dentro do mesmo KQL Database; `lookup` permite cruzar dados entre KQL Databases diferentes no mesmo Eventhouse.",
      "`join` é síncrono e bloqueia a query até completar; `lookup` é assíncrono e retorna resultados parciais enquanto processa."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Quando você configurar Workspace Identity no Fabric, permite que itens (Pipelines, Notebooks) autentiquem contra Azure resources usando Managed Identity em vez de credenciais armazenadas. Você configura via Admin Portal: Workspace Settings → Workspace Identity. Depois, Notebooks podem usar `mssparkutils.credentials` para acessar credenciais automaticamente.",
      "respostaCerta": "`join` é um join completo entre duas tabelas de tamanhos similares com múltiplas variantes (inner, outer etc.); `lookup` é otimizado para enriquecer uma tabela de fatos grande com valores de uma tabela de dimensão pequena, sendo mais eficiente nesse cenário específico. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Pipeline/Notebook acessar Data Lake sem credenciais hardcoded? Workspace Identity.",
      "cascasDeBanana": [
        "Service Principal: AD-level identity — similar mas diferente de workspace identity (Fabric-specific).",
        "Shared credentials: armazenar passwords — menos seguro que identity.",
        "Access keys/tokens: mantenha em Key Vault; workspace identity evita armazenamento local."
      ],
      "dicaOuro": "Workspace Identity = Fabric-managed identity for items. Zero-trust, no credential storage."
    }
  },
  {
    "id": "dp600_q211",
    "text": "Em um Notebook Fabric com Python, como você implementa tratamento de erros para capturar exceções e registrar falhas em uma tabela de log no Lakehouse?",
    "options": [
      "Configurando `spark.conf.set(\"spark.sql.error.logging\", \"Tables/log_erros\")` para redirecionamento automático de erros.",
      "Usando blocos `try/except` para capturar exceções, criando um DataFrame com os detalhes do erro e gravando com `spark.createDataFrame([log_row]).write.format(\"delta\").mode(\"append\").saveAsTable(\"log_erros\")`.",
      "Usando a função `dbutils.notebook.exit(\"ERRO: \" + str(e))` que grava automaticamente o erro no log do workspace.",
      "Usando `spark.sparkContext.setCheckpointDir(\"Tables/checkpoints\")` que automaticamente registra erros e estados de falha."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Lakehouse, Archive Zone é opcional tier armazenamento para dados históricos/infrequently accessed. Fabric oferece Archive option ao configurar Lakehouse. Arquive reduz custo armazenagem mas aumenta latência leitura (trade-off). Use para dados que precisam estar disponíveis mas são acessados raramente.",
      "respostaCerta": "Usando blocos `try/except` para capturar exceções, criando um DataFrame com os detalhes do erro e gravando com `spark.createDataFrame([log_row]).write.format(\"delta\").mode(\"append\").saveAsTable(\"log_erros\")`. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Dados históricos raramente acessados? Archive tier reduce custo.",
      "cascasDeBanana": [
        "Hot storage: acesso rápido, custo alto; Archive é custo baixo, acesso lento.",
        "Tier between Hot/Cold: Archive é tipo de cold storage.",
        "Backup: separado; Archive é tier de acesso."
      ],
      "dicaOuro": "Archive Zone = infrequent access storage tier (cost optimization, latency trade-off)."
    }
  },
  {
    "id": "dp600_q212",
    "text": "Quais permissões específicas podem ser concedidas ao compartilhar um modelo semântico individualmente no Fabric?",
    "options": [
      "View, Edit, Admin e Delete",
      "Read (leitura básica), Build (criar conteúdo baseado no modelo como relatórios), Write (editar o modelo) e Reshare (compartilhar com outros usuários).",
      "Viewer, Contributor, Member e Admin",
      "ReadOnly, ReadWrite, FullControl e NoAccess"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "No contexto do DP-600, manter a solução analítica exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Nos Lakehouse Files, você pode criar Folders para organizar arquivos logicamente. Quando você carrega dados via Notebook ou Pipeline, você especifica caminho (`/Files/folder/subfolder/file.csv`). Fabric cria estrutura sob OneLake — internamente, isso é namespace, não hierarquia física real.",
      "respostaCerta": "Read (leitura básica), Build (criar conteúdo baseado no modelo como relatórios), Write (editar o modelo) e Reshare (compartilhar com outros usuários). — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Organizar arquivos? Create Folders in Files zone.",
      "cascasDeBanana": [
        "Partitioning: organiza dados por coluna; folders são UI-level organization.",
        "Delta table path: pode estar em folder; folders são containers.",
        "Shortcuts: podem apontar para folders."
      ],
      "dicaOuro": "Lakehouse Folders = logical organization of files (namespace, not physical hierarchy)."
    }
  },
  {
    "id": "dp600_q213",
    "text": "O Warehouse do Microsoft Fabric suporta constraints de integridade referencial (PRIMARY KEY, FOREIGN KEY) de forma enforçada?",
    "options": [
      "Sim, suporta PRIMARY KEY e FOREIGN KEY enforçadas com validação em tempo de INSERT/UPDATE, igual ao SQL Server tradicional.",
      "Não suporta nenhum tipo de constraint; integridade referencial deve ser implementada via stored procedures de validação.",
      "Não de forma enforçada; o Fabric Warehouse suporta declaração de PRIMARY KEY e UNIQUE como constraints NOT ENFORCED, usadas apenas como dicas para o otimizador de consultas, sem validação automática de integridade.",
      "Suporta apenas PRIMARY KEY enforçada; FOREIGN KEY é aceita na sintaxe mas nunca validada em nenhum cenário."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Spark, uma Partition é divisão de DataFrame/tabela por coluna valores. Quando você queries, Spark processa cada partition em paralelo. You configure via `.repartition(coluna)` ou `.partitionBy()` ao escrever. Partitionamento bem feito acelera queries que filtram por coluna de partição (Spark skips partitions não relevantes).",
      "respostaCerta": "Não de forma enforçada; o Fabric Warehouse suporta declaração de PRIMARY KEY e UNIQUE como constraints NOT ENFORCED, usadas apenas como dicas para o otimizador de consultas, sem validação automática de integridade. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "DataFrame grande com filtros por coluna? Particionamento acelera.",
      "cascasDeBanana": [
        "Shuffle: reorganiza dados; partitionamento é pré-configurado.",
        "Bucketing: similar a partitioning mas para tabelas, não DataFrames.",
        "Sorting: ordenação; partitionamento é divisão lógica."
      ],
      "dicaOuro": "Partitioning = divide data by column for parallel processing and query optimization."
    }
  },
  {
    "id": "dp600_q214",
    "text": "Para que serve a expressão DAX `DETAILROWS` (Detail Rows Expression) em uma medida?",
    "options": [
      "Define quais colunas e linhas são exibidas quando o usuário faz drill-through ou clica em \"Show as table\" em um visual, personalizando os dados de detalhe retornados ao invés do comportamento padrão.",
      "Retorna o número de linhas da tabela de fatos que contribuem para o valor atual da medida no contexto de filtro.",
      "Define a expressão de cálculo alternativa usada quando a medida principal retorna BLANK ou zero.",
      "Especifica as colunas de detalhe exibidas no tooltip de um visual quando o usuário passa o mouse sobre um ponto de dados."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "No contexto do DP-600, implementar e gerenciar modelo semântico exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Data Pipeline, o Try/Catch error handling permite que você capture falhas de atividade e tome ação (log, retry, skip). Você coloca atividades em Try, define ações em Catch. Útil para pipelines que precisam de resiliência (ex: se API falha, log e continua em vez de abort).",
      "respostaCerta": "Define quais colunas e linhas são exibidas quando o usuário faz drill-through ou clica em \"Show as table\" em um visual, personalizando os dados de detalhe retornados ao invés do comportamento padrão. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Pipeline precisa resilência a falhas? Try/Catch + Catch activities.",
      "cascasDeBanana": [
        "Retry policy: built-in retry; Try/Catch é manual handling.",
        "Timeout: limite de duração; Try/Catch é error handling.",
        "Alerts: notificações pós-execução; Try/Catch é durante."
      ],
      "dicaOuro": "Try/Catch = error handling in Data Pipeline (capture failures and act)."
    }
  },
  {
    "id": "dp600_q215",
    "text": "No Microsoft Fabric, o que faz a opção \"Load to Table\" disponível ao clicar com botão direito em um arquivo na seção Files de um Lakehouse?",
    "options": [
      "Copia o arquivo para a seção Tables mantendo o formato original sem converter para Delta.",
      "Converte automaticamente o arquivo (CSV, Parquet, JSON etc.) em uma tabela Delta gerenciada na seção Tables do Lakehouse, tornando-a acessível via SQL Analytics Endpoint e notebooks.",
      "Cria um Dataflow Gen2 automaticamente configurado para carregar o arquivo na tabela com agendamento diário.",
      "Publica o arquivo como tabela externa referenciada no modelo semântico padrão do workspace."
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Power BI, um Slot é alocação de capacidade Premium que você pode usar para datasets. Você aloca Slots no Admin Portal — cada Slot é capacidade reservada. Datasets podem usar um ou múltiplos Slots. Útil quando você tem datasets que compete por recursos; Slots garantem capacidade.",
      "respostaCerta": "Converte automaticamente o arquivo (CSV, Parquet, JSON etc.) em uma tabela Delta gerenciada na seção Tables do Lakehouse, tornando-a acessível via SQL Analytics Endpoint e notebooks. — implementa corretamente o requisito técnico para este cenário de iniciante.",
      "puloDoGato": "Datasets compete por Premium Capacity? Use Slots para reservar.",
      "cascasDeBanana": [
        "Capacity: pool total de recursos; Slot é alocação dentro capacidade.",
        "Autoscale: aumenta capacidade dinamicamente; Slot é reserva estática.",
        "Throttling: reduz performance; Slots evitam throttling por reservation."
      ],
      "dicaOuro": "Power BI Slots = reserved capacity allocation (conflicts avoidance)."
    }
  },
  {
    "id": "dp600_q216",
    "text": "No Deployment Pipeline do Fabric, é possível implantar apenas itens selecionados em vez de todo o workspace?",
    "options": [
      "Sim, mas apenas para itens do tipo relatório e modelo semântico; Lakehouses e Warehouses sempre são implantados completamente.",
      "Sim, mas requer a criação de regras de exclusão no Deployment Pipeline antes de cada implantação seletiva.",
      "Não; o Deployment Pipeline sempre implanta todos os itens do estágio de origem para garantir consistência entre os ambientes.",
      "Sim, o Deployment Pipeline permite selecionar itens específicos para implantação no painel de deploy, permitindo promoção granular de apenas os itens alterados."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "No contexto do DP-600, manter a solução analítica exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Manter a solução analítica (intermediario): Sim, o Deployment Pipeline permite selecionar itens específicos para i... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "Sim, o Deployment Pipeline permite selecionar itens específicos para implantação no painel de deploy, permitindo promoção granular de apenas os itens alterados. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Q216 trigger: palavras-chave em 'Manter a solução analítica' indicam intermediario profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve intermediario requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Manter a solução analítica completo.",
        "Opção C: padrão alternativo válido mas não otimizado para intermediario proficiency."
      ],
      "dicaOuro": "Q216 diferenciar: este conceito intermediario de Manter a solução analítica é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q217",
    "text": "No Warehouse do Fabric, como você cria uma nova tabela a partir do resultado de uma query SELECT de forma eficiente?",
    "options": [
      "`CREATE TABLE dbo.nova_tabela AS SELECT * FROM dbo.tabela_origem WHERE condicao`",
      "`CREATE TABLE dbo.nova_tabela LIKE dbo.tabela_origem; INSERT INTO dbo.nova_tabela SELECT * FROM dbo.tabela_origem WHERE condicao`",
      "`INSERT INTO dbo.nova_tabela SELECT * FROM dbo.tabela_origem WHERE condicao`",
      "`SELECT * INTO dbo.nova_tabela FROM dbo.tabela_origem WHERE condicao`"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em KQL (intermediario): `CREATE TABLE dbo.nova_tabela AS SELECT * FROM dbo.tabela_origem WHERE... Esta syntax é Kusto query language nativa.",
      "respostaCerta": "`CREATE TABLE dbo.nova_tabela AS SELECT * FROM dbo.tabela_origem WHERE condicao` — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Q217 trigger: palavras-chave em 'Preparar e servir dados' indicam intermediario profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve intermediario requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Preparar e servir dados completo.",
        "Opção C: padrão alternativo válido mas não otimizado para intermediario proficiency."
      ],
      "dicaOuro": "Q217 diferenciar: este conceito intermediario de Preparar e servir dados é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q218",
    "text": "Qual é a vantagem de usar `SUMMARIZECOLUMNS()` em vez de `SUMMARIZE()` em queries DAX para relatórios?",
    "options": [
      "`SUMMARIZECOLUMNS()` suporta colunas calculadas como agrupadores, enquanto `SUMMARIZE()` aceita apenas colunas físicas do modelo.",
      "`SUMMARIZECOLUMNS()` executa em paralelo por padrão; `SUMMARIZE()` é sempre sequencial independente da complexidade.",
      "`SUMMARIZECOLUMNS()` é mais eficiente pois é a função usada internamente pelo motor quando gera queries para visuais, suporta múltiplas tabelas sem relacionamento explícito e filtra automaticamente combinações sem dados (BLANK rows).",
      "`SUMMARIZECOLUMNS()` retorna resultados ordenados automaticamente; `SUMMARIZE()` requer `ORDER BY` explícito para ordenação."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "No contexto do DP-600, implementar e gerenciar modelo semântico exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Função DAX Implementar e gerenciar modelo semântico: `SUMMARIZECOLUMNS()` é mais eficiente pois é a função usada internamen... Esta abordagem resolve avancado requisito com syntax nativa.",
      "respostaCerta": "`SUMMARIZECOLUMNS()` é mais eficiente pois é a função usada internamente pelo motor quando gera queries para visuais, suporta múltiplas tabelas sem relacionamento explícito e filtra automaticamente combinações sem dados (BLANK rows). — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q218 trigger: palavras-chave em 'Implementar e gerenciar modelo semântico' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Implementar e gerenciar modelo semântico completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q218 diferenciar: este conceito avancado de Implementar e gerenciar modelo semântico é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q219",
    "text": "Em um Data Pipeline do Fabric, qual atividade permite chamar uma API REST externa (como um webhook ou endpoint HTTP) durante a execução do pipeline?",
    "options": [
      "A atividade \"Script\" com código Python usando a biblioteca `requests` para fazer chamadas HTTP externas.",
      "A atividade \"Azure Function\", que é o único meio de chamar APIs externas de forma segura dentro de um Data Pipeline.",
      "A atividade \"Web\", que realiza chamadas HTTP (GET, POST, PUT, DELETE) para endpoints externos, com suporte a autenticação, headers customizados e corpo da requisição em JSON.",
      "A atividade \"REST Connector\", disponível exclusivamente na atividade Copy Data para fontes de dados REST."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em contexto Preparar e servir dados, o endpoint correto é: A atividade \"Web\", que realiza chamadas HTTP (GET, POST, PUT, DELETE) ... Este é padrão nativo Fabric API v1 para intermediario proficiency.",
      "respostaCerta": "A atividade \"Web\", que realiza chamadas HTTP (GET, POST, PUT, DELETE) para endpoints externos, com suporte a autenticação, headers customizados e corpo da requisição em JSON. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Q219 trigger: palavras-chave em 'Preparar e servir dados' indicam intermediario profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve intermediario requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Preparar e servir dados completo.",
        "Opção C: padrão alternativo válido mas não otimizado para intermediario proficiency."
      ],
      "dicaOuro": "Q219 diferenciar: este conceito intermediario de Preparar e servir dados é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q220",
    "text": "Como os dados armazenados no OneLake do Microsoft Fabric são criptografados em repouso?",
    "options": [
      "Os dados são criptografados em repouso por padrão usando AES-256 com chaves gerenciadas pela Microsoft; opcionalmente, chaves gerenciadas pelo cliente (CMK) podem ser configuradas via Azure Key Vault para maior controle.",
      "Os dados não são criptografados por padrão; a criptografia deve ser habilitada manualmente nas configurações de cada Lakehouse.",
      "Os dados são criptografados apenas quando sensitivity labels de nível Confidential ou superior são aplicadas aos itens.",
      "A criptografia em repouso só está disponível em SKUs F64 ou superiores; capacities menores armazenam dados sem criptografia."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "No contexto do DP-600, manter a solução analítica exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Manter a solução analítica (intermediario): Os dados são criptografados em repouso por padrão usando AES-256 com c... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "Os dados são criptografados em repouso por padrão usando AES-256 com chaves gerenciadas pela Microsoft; opcionalmente, chaves gerenciadas pelo cliente (CMK) podem ser configuradas via Azure Key Vault para maior controle. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Q220 trigger: palavras-chave em 'Manter a solução analítica' indicam intermediario profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve intermediario requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Manter a solução analítica completo.",
        "Opção C: padrão alternativo válido mas não otimizado para intermediario proficiency."
      ],
      "dicaOuro": "Q220 diferenciar: este conceito intermediario de Manter a solução analítica é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q221",
    "text": "Em um Notebook Fabric, o que faz o comando `%%configure -f` e quando deve ser usado?",
    "options": [
      "Configura propriedades da sessão Spark (memória, cores, packages, conf) antes de iniciá-la; o `-f` força a reinicialização da sessão existente para aplicar as novas configurações, devendo ser a primeira célula executada.",
      "Habilita o modo de depuração detalhado do Spark, registrando todas as transformações e planos de execução no log do workspace.",
      "Força a reexecução de todas as células anteriores do notebook para garantir consistência do estado do DataFrame.",
      "Configura credenciais de autenticação da sessão Spark para acesso a fontes externas protegidas por Azure AD."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Notebook Spark (avancado): Configura propriedades da sessão Spark (memória, cores, packages, conf... Esta abordagem integra Spark com Fabric nativo.",
      "respostaCerta": "Configura propriedades da sessão Spark (memória, cores, packages, conf) antes de iniciá-la; o `-f` força a reinicialização da sessão existente para aplicar as novas configurações, devendo ser a primeira célula executada. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q221 trigger: palavras-chave em 'Preparar e servir dados' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Preparar e servir dados completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q221 diferenciar: este conceito avancado de Preparar e servir dados é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q222",
    "text": "Um modelo tem dois Calculation Groups: \"Moeda\" (precedência 10) e \"Período\" (precedência 20). Qual é aplicado primeiro?",
    "options": [
      "Os dois grupos são aplicados simultaneamente pelo motor DAX em avaliação paralela, sem ordem definida entre eles.",
      "\"Período\" (precedência 20) é aplicado primeiro pois maior valor numérico de precedência indica avaliação anterior; depois \"Moeda\" (precedência 10) é aplicado sobre o resultado, permitindo que conversões de moeda sejam feitas após os cálculos de período.",
      "\"Moeda\" (precedência 10) é aplicado primeiro pois menor valor numérico indica maior prioridade, similar à ordenação de CSS.",
      "A ordem de aplicação é sempre alfabética quando os valores de precedência são diferentes, independente dos números atribuídos."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "No contexto do DP-600, implementar e gerenciar modelo semântico exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Implementar e gerenciar modelo semântico (avancado): \"Período\" (precedência 20) é aplicado primeiro pois maior valor numéri... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "\"Período\" (precedência 20) é aplicado primeiro pois maior valor numérico de precedência indica avaliação anterior; depois \"Moeda\" (precedência 10) é aplicado sobre o resultado, permitindo que conversões de moeda sejam feitas após os cálculos de período. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q222 trigger: palavras-chave em 'Implementar e gerenciar modelo semântico' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Implementar e gerenciar modelo semântico completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q222 diferenciar: este conceito avancado de Implementar e gerenciar modelo semântico é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q223",
    "text": "Em KQL, qual operador é usado para visualizar os resultados de uma query como gráfico diretamente no Eventhouse do Fabric?",
    "options": [
      "`plot`, como em `Tabela | plot(barchart, x=categoria, y=total)`",
      "`visualize`, como em `Tabela | visualize type=barchart`",
      "`render`, como em `Tabela | summarize total=count() by categoria | render barchart` que exibe os resultados como gráfico de barras na interface do KQL Queryset.",
      "`chart`, como em `Tabela | chart barchart by categoria`"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em KQL (iniciante): `render`, como em `Tabela | summarize total=count() by categoria | ren... Esta syntax é Kusto query language nativa.",
      "respostaCerta": "`render`, como em `Tabela | summarize total=count() by categoria | render barchart` que exibe os resultados como gráfico de barras na interface do KQL Queryset. — implementa corretamente o requisito técnico para este cenário de iniciante.",
      "puloDoGato": "Q223 trigger: palavras-chave em 'Preparar e servir dados' indicam iniciante profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve iniciante requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Preparar e servir dados completo.",
        "Opção C: padrão alternativo válido mas não otimizado para iniciante proficiency."
      ],
      "dicaOuro": "Q223 diferenciar: este conceito iniciante de Preparar e servir dados é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q224",
    "text": "O que é o Microsoft Fabric Capacity Metrics App e para que serve?",
    "options": [
      "Um aplicativo Power BI que monitora o consumo de CUs (Capacity Units) por workload, workspace e operação no Fabric, permitindo identificar gargalos, operações custosas e planejar o dimensionamento da capacity.",
      "Um aplicativo de governança que exibe todas as sensitivity labels e políticas de proteção ativas em itens do tenant Fabric.",
      "Um dashboard automático gerado pelo Fabric que monitora KPIs de negócio dos relatórios publicados em todos os workspaces.",
      "Uma ferramenta de auditoria que registra todas as ações de usuários no Fabric para conformidade com regulamentações de dados."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "No contexto do DP-600, manter a solução analítica exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Manter a solução analítica (intermediario): Um aplicativo Power BI que monitora o consumo de CUs (Capacity Units) ... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "Um aplicativo Power BI que monitora o consumo de CUs (Capacity Units) por workload, workspace e operação no Fabric, permitindo identificar gargalos, operações custosas e planejar o dimensionamento da capacity. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Q224 trigger: palavras-chave em 'Manter a solução analítica' indicam intermediario profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve intermediario requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Manter a solução analítica completo.",
        "Opção C: padrão alternativo válido mas não otimizado para intermediario proficiency."
      ],
      "dicaOuro": "Q224 diferenciar: este conceito intermediario de Manter a solução analítica é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q225",
    "text": "O Warehouse do Microsoft Fabric usa Columnstore Indexes por padrão? Qual é o impacto dessa escolha para workloads analíticos?",
    "options": [
      "Não; o Fabric Warehouse usa Row Store por padrão igual ao SQL Server, com Columnstore disponível via `CREATE COLUMNSTORE INDEX` explícito.",
      "Sim, o Fabric Warehouse armazena dados em formato colunar por padrão (similar ao Columnstore), ideal para workloads analíticos com agregações sobre grandes volumes pois lê apenas as colunas necessárias, reduzindo I/O significativamente.",
      "O Fabric Warehouse usa armazenamento híbrido que combina Row Store e Columnstore automaticamente baseado na frequência de acesso.",
      "Sim, mas apenas para tabelas com mais de 1 milhão de linhas; tabelas menores usam Row Store automaticamente."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Preparar e servir dados (avancado): Sim, o Fabric Warehouse armazena dados em formato colunar por padrão (... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "Sim, o Fabric Warehouse armazena dados em formato colunar por padrão (similar ao Columnstore), ideal para workloads analíticos com agregações sobre grandes volumes pois lê apenas as colunas necessárias, reduzindo I/O significativamente. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q225 trigger: palavras-chave em 'Preparar e servir dados' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Preparar e servir dados completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q225 diferenciar: este conceito avancado de Preparar e servir dados é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q226",
    "text": "Como você evita que erros de divisão por zero em uma medida DAX exibam mensagem de erro no relatório?",
    "options": [
      "Usando `DIVIDE([Numerador], [Denominador], 0)` que retorna 0 (ou outro valor alternativo) quando o denominador é zero, ou `IFERROR([Numerador] / [Denominador], 0)` como alternativa.",
      "Adicionando `ON ERROR RESUME NEXT` antes da expressão DAX para ignorar erros silenciosamente.",
      "Usando `TRY([Numerador] / [Denominador])` que captura automaticamente erros aritméticos e retorna BLANK.",
      "Usando `SAFE_DIVIDE([Numerador], [Denominador])`"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "No contexto do DP-600, implementar e gerenciar modelo semântico exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Função DAX Implementar e gerenciar modelo semântico: Usando `DIVIDE([Numerador], [Denominador], 0)` que retorna 0 (ou outro... Esta abordagem resolve intermediario requisito com syntax nativa.",
      "respostaCerta": "Usando `DIVIDE([Numerador], [Denominador], 0)` que retorna 0 (ou outro valor alternativo) quando o denominador é zero, ou `IFERROR([Numerador] / [Denominador], 0)` como alternativa. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Q226 trigger: palavras-chave em 'Implementar e gerenciar modelo semântico' indicam intermediario profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve intermediario requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Implementar e gerenciar modelo semântico completo.",
        "Opção C: padrão alternativo válido mas não otimizado para intermediario proficiency."
      ],
      "dicaOuro": "Q226 diferenciar: este conceito intermediario de Implementar e gerenciar modelo semântico é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q227",
    "text": "Como você habilita múltiplos schemas (além do schema padrão \"dbo\") em um Lakehouse do Microsoft Fabric?",
    "options": [
      "Usando a notação de três partes `lakehouse.schema.tabela` diretamente nas queries SQL sem necessidade de habilitação prévia.",
      "Criando subpastas na seção Tables do Lakehouse; cada subpasta é automaticamente reconhecida como um schema separado.",
      "Schemas múltiplos não são suportados em Lakehouses; apenas Warehouses do Fabric suportam múltiplos schemas nativamente.",
      "Habilitando a opção \"Lakehouse Schemas\" nas configurações do Lakehouse, que permite criar schemas adicionais via `CREATE SCHEMA nome` no SQL Analytics Endpoint para organizar tabelas em namespaces separados."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Preparar e servir dados (intermediario): Habilitando a opção \"Lakehouse Schemas\" nas configurações do Lakehouse... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "Habilitando a opção \"Lakehouse Schemas\" nas configurações do Lakehouse, que permite criar schemas adicionais via `CREATE SCHEMA nome` no SQL Analytics Endpoint para organizar tabelas em namespaces separados. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Q227 trigger: palavras-chave em 'Preparar e servir dados' indicam intermediario profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve intermediario requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Preparar e servir dados completo.",
        "Opção C: padrão alternativo válido mas não otimizado para intermediario proficiency."
      ],
      "dicaOuro": "Q227 diferenciar: este conceito intermediario de Preparar e servir dados é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q228",
    "text": "Em um cenário onde diferentes departamentos devem ver apenas suas próprias tabelas em um Warehouse do Fabric, qual é a abordagem mais escalável?",
    "options": [
      "Criar views por departamento e conceder acesso apenas às views correspondentes, revogando acesso direto a todas as tabelas base.",
      "Implementar RLS via security policy T-SQL com predicado de filtro baseado no schema ou nome da tabela combinado com `SESSION_CONTEXT()` ou `SYSTEM_USER`, agrupando usuários por departamento em roles do Warehouse.",
      "Criar um Warehouse separado para cada departamento, garantindo isolamento total sem necessidade de configuração de segurança granular.",
      "Usar OLS no modelo semântico conectado ao Warehouse, ocultando tabelas específicas por role sem alterar o Warehouse diretamente."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "No contexto do DP-600, manter a solução analítica exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Manter a solução analítica (avancado): Implementar RLS via security policy T-SQL com predicado de filtro base... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "Implementar RLS via security policy T-SQL com predicado de filtro baseado no schema ou nome da tabela combinado com `SESSION_CONTEXT()` ou `SYSTEM_USER`, agrupando usuários por departamento em roles do Warehouse. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q228 trigger: palavras-chave em 'Manter a solução analítica' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Manter a solução analítica completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q228 diferenciar: este conceito avancado de Manter a solução analítica é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q229",
    "text": "Em um Notebook Fabric, como você itera sobre uma lista de tabelas de um Lakehouse para aplicar a mesma transformação a cada uma?",
    "options": [
      "`DeltaTable.listAll(spark).forEach(t -> processar(t))`",
      "`for tabela in mssparkutils.fs.ls(\"Tables/\"): spark.read.table(tabela.name).transform().write.save()`",
      "`tabelas = spark.catalog.listTables(\"nome_lakehouse\"); [processar_tabela(t.name) for t in tabelas]`",
      "`spark.sql(\"SHOW TABLES\").foreach(lambda t: spark.read.table(t.tableName).process().save())`"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Notebook Spark (avancado): `tabelas = spark.catalog.listTables(\"nome_lakehouse\"); [processar_tabe... Esta abordagem integra Spark com Fabric nativo.",
      "respostaCerta": "`tabelas = spark.catalog.listTables(\"nome_lakehouse\"); [processar_tabela(t.name) for t in tabelas]` — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q229 trigger: palavras-chave em 'Preparar e servir dados' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Preparar e servir dados completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q229 diferenciar: este conceito avancado de Preparar e servir dados é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q230",
    "text": "Para que serve a função `ROLLUPADDISSUBTOTAL()` dentro de `SUMMARIZECOLUMNS()` em DAX?",
    "options": [
      "Adiciona linhas de subtotal e total geral ao resultado de SUMMARIZECOLUMNS, criando uma coluna booleana indicadora que identifica as linhas de subtotal, similar ao ROLLUP do SQL para relatórios hierárquicos.",
      "Remove linhas de subtotal duplicadas de uma tabela calculada, mantendo apenas os totais gerais no resultado final.",
      "Adiciona automaticamente uma coluna de ranking ao resultado ordenado por subtotal, útil para análises de Pareto.",
      "Agrupa colunas com valores similares em subtotais automáticos baseados em threshold de similaridade configurável."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "No contexto do DP-600, implementar e gerenciar modelo semântico exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Função DAX Implementar e gerenciar modelo semântico: Adiciona linhas de subtotal e total geral ao resultado de SUMMARIZECOL... Esta abordagem resolve avancado requisito com syntax nativa.",
      "respostaCerta": "Adiciona linhas de subtotal e total geral ao resultado de SUMMARIZECOLUMNS, criando uma coluna booleana indicadora que identifica as linhas de subtotal, similar ao ROLLUP do SQL para relatórios hierárquicos. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q230 trigger: palavras-chave em 'Implementar e gerenciar modelo semântico' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Implementar e gerenciar modelo semântico completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q230 diferenciar: este conceito avancado de Implementar e gerenciar modelo semântico é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q231",
    "text": "No Warehouse do Fabric, qual é a diferença entre `ROWS BETWEEN` e `RANGE BETWEEN` em funções de janela T-SQL?",
    "options": [
      "São sinônimos no T-SQL do Fabric Warehouse; a distinção existia no SQL Server tradicional mas foi unificada no Fabric.",
      "`ROWS BETWEEN` define a janela por número físico de linhas (posição); `RANGE BETWEEN` define por valores lógicos do ORDER BY, agrupando linhas com o mesmo valor de ordenação",
      "`ROWS BETWEEN` requer ORDER BY explícito; `RANGE BETWEEN` pode ser usado sem ORDER BY com PARTITION BY apenas.",
      "`ROWS BETWEEN` funciona apenas com funções de agregação; `RANGE BETWEEN` funciona com funções de ranking como ROW_NUMBER e RANK."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em T-SQL Warehouse (avancado): `ROWS BETWEEN` define a janela por número físico de linhas (posição); ... Esta syntax é padrão SQL Server nativo no Fabric.",
      "respostaCerta": "`ROWS BETWEEN` define a janela por número físico de linhas (posição); `RANGE BETWEEN` define por valores lógicos do ORDER BY, agrupando linhas com o mesmo valor de ordenação — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q231 trigger: palavras-chave em 'Preparar e servir dados' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Preparar e servir dados completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q231 diferenciar: este conceito avancado de Preparar e servir dados é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q232",
    "text": "O que é TMDL (Tabular Model Definition Language) e qual é sua vantagem no contexto do Fabric com Git?",
    "options": [
      "Uma extensão do T-SQL para manipular metadados de tabelas Delta no Lakehouse via SQL Analytics Endpoint do Fabric.",
      "Um formato de template de implantação que define como modelos semânticos são promovidos entre estágios no Deployment Pipeline.",
      "Uma linguagem de query similar ao DAX criada para substituir o MDX em modelos multidimensionais do Analysis Services migrados para o Fabric.",
      "Um formato de texto legível (similar ao YAML) para definir modelos semânticos tabulares linha por linha, permitindo diffs granulares no Git, revisões de código e edições manuais de medidas DAX e propriedades do modelo sem usar ferramentas gráficas."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "No contexto do DP-600, manter a solução analítica exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Manter a solução analítica (avancado): Um formato de texto legível (similar ao YAML) para definir modelos sem... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "Um formato de texto legível (similar ao YAML) para definir modelos semânticos tabulares linha por linha, permitindo diffs granulares no Git, revisões de código e edições manuais de medidas DAX e propriedades do modelo sem usar ferramentas gráficas. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q232 trigger: palavras-chave em 'Manter a solução analítica' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Manter a solução analítica completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q232 diferenciar: este conceito avancado de Manter a solução analítica é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q233",
    "text": "O que é o Staging do Dataflow Gen2 no Fabric e como ele melhora o desempenho?",
    "options": [
      "É uma área intermediária de processamento onde os dados da fonte são carregados antes das transformações, permitindo que o processamento ocorra no motor Fabric (Spark) em vez de na fonte original, habilitando query folding mesmo quando a fonte não suporta.",
      "É uma camada de cache que armazena os resultados finais do dataflow para servir consultas repetidas sem reprocessar os dados.",
      "É uma área de buffer temporária no OneLake onde os dados aguardam processamento em horários de baixa demanda da capacity.",
      "É um workspace separado criado automaticamente pelo Fabric para isolar o processamento de Dataflows Gen2 de outros workloads."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Preparar e servir dados (avancado): É uma área intermediária de processamento onde os dados da fonte são c... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "É uma área intermediária de processamento onde os dados da fonte são carregados antes das transformações, permitindo que o processamento ocorra no motor Fabric (Spark) em vez de na fonte original, habilitando query folding mesmo quando a fonte não suporta. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q233 trigger: palavras-chave em 'Preparar e servir dados' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Preparar e servir dados completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q233 diferenciar: este conceito avancado de Preparar e servir dados é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q234",
    "text": "Como você adiciona descrições e documentação a tabelas, colunas e medidas em um modelo semântico do Fabric para auxiliar usuários finais?",
    "options": [
      "Criando uma tabela especial chamada \"Dicionário de Dados\" no modelo com colunas de nome e descrição de cada elemento.",
      "Adicionando comentários DAX com `//` ou `/* */` dentro das expressões de medidas, que são exibidos automaticamente como documentação.",
      "Configurando a propriedade \"Description\" de cada objeto no modelo via Power BI Desktop, Tabular Editor ou XMLA, que aparece como tooltip no painel de campos dos relatórios Power BI.",
      "Publicando um documento Word no SharePoint e vinculando-o ao modelo semântico via propriedade \"Documentation URL\" no Fabric."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "No contexto do DP-600, implementar e gerenciar modelo semântico exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Implementar e gerenciar modelo semântico (intermediario): Configurando a propriedade \"Description\" de cada objeto no modelo via ... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "Configurando a propriedade \"Description\" de cada objeto no modelo via Power BI Desktop, Tabular Editor ou XMLA, que aparece como tooltip no painel de campos dos relatórios Power BI. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Q234 trigger: palavras-chave em 'Implementar e gerenciar modelo semântico' indicam intermediario profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve intermediario requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Implementar e gerenciar modelo semântico completo.",
        "Opção C: padrão alternativo válido mas não otimizado para intermediario proficiency."
      ],
      "dicaOuro": "Q234 diferenciar: este conceito intermediario de Implementar e gerenciar modelo semântico é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q235",
    "text": "Qual é a finalidade do pacote `mssparkutils` disponível em Notebooks do Microsoft Fabric?",
    "options": [
      "É a biblioteca de machine learning nativa do Fabric para treinamento de modelos preditivos integrados com o MLflow.",
      "É o pacote de conectividade que substitui o JDBC para conexões com fontes externas via Spark no ambiente Fabric.",
      "Fornece utilitários específicos do Fabric para operações de sistema de arquivos (`mssparkutils.fs`), gerenciamento de credenciais (`mssparkutils.credentials`), execução de outros notebooks (`mssparkutils.notebook`) e interação com o ambiente Fabric.",
      "É um conjunto de funções DAX disponíveis em notebooks para calcular medidas do modelo semântico diretamente no PySpark."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Notebook Spark (intermediario): Fornece utilitários específicos do Fabric para operações de sistema de... Esta abordagem integra Spark com Fabric nativo.",
      "respostaCerta": "Fornece utilitários específicos do Fabric para operações de sistema de arquivos (`mssparkutils.fs`), gerenciamento de credenciais (`mssparkutils.credentials`), execução de outros notebooks (`mssparkutils.notebook`) e interação com o ambiente Fabric. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Q235 trigger: palavras-chave em 'Preparar e servir dados' indicam intermediario profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve intermediario requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Preparar e servir dados completo.",
        "Opção C: padrão alternativo válido mas não otimizado para intermediario proficiency."
      ],
      "dicaOuro": "Q235 diferenciar: este conceito intermediario de Preparar e servir dados é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q236",
    "text": "É possível aplicar Object-Level Security (OLS) a medidas DAX individuais em um modelo semântico do Fabric?",
    "options": [
      "Sim, OLS pode ser aplicado a medidas individuais configurando `MetadataPermission = None` para a medida em uma role específica via Tabular Editor ou XMLA, tornando a medida invisível para usuários dessa role.",
      "Não é necessário OLS em medidas pois elas herdam automaticamente as permissões RLS das tabelas de origem que usam.",
      "Sim, mas apenas via RLS com filtro DAX `FALSE()` aplicado à tabela de origem da medida, ocultando indiretamente a medida.",
      "Não; OLS aplica-se apenas a tabelas e colunas físicas, não a medidas calculadas que são derivadas de dados existentes."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "No contexto do DP-600, manter a solução analítica exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Função DAX Manter a solução analítica: Sim, OLS pode ser aplicado a medidas individuais configurando `Metadat... Esta abordagem resolve avancado requisito com syntax nativa.",
      "respostaCerta": "Sim, OLS pode ser aplicado a medidas individuais configurando `MetadataPermission = None` para a medida em uma role específica via Tabular Editor ou XMLA, tornando a medida invisível para usuários dessa role. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q236 trigger: palavras-chave em 'Manter a solução analítica' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Manter a solução analítica completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q236 diferenciar: este conceito avancado de Manter a solução analítica é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q237",
    "text": "Em um Data Pipeline do Fabric, qual é o uso da atividade \"Until\"?",
    "options": [
      "Executa atividades em paralelo até que a primeira seja concluída, cancelando as demais automaticamente.",
      "Executa um bloco de atividades até que uma data/hora específica seja atingida, funcionando como agendador inline dentro do pipeline.",
      "Executa repetidamente um bloco de atividades até que uma expressão booleana de parada seja avaliada como verdadeira, útil para polling de status de processos externos ou retry com espera.",
      "Aguarda até que um arquivo específico apareça no OneLake antes de prosseguir com as atividades seguintes do pipeline."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Preparar e servir dados (intermediario): Executa repetidamente um bloco de atividades até que uma expressão boo... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "Executa repetidamente um bloco de atividades até que uma expressão booleana de parada seja avaliada como verdadeira, útil para polling de status de processos externos ou retry com espera. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Q237 trigger: palavras-chave em 'Preparar e servir dados' indicam intermediario profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve intermediario requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Preparar e servir dados completo.",
        "Opção C: padrão alternativo válido mas não otimizado para intermediario proficiency."
      ],
      "dicaOuro": "Q237 diferenciar: este conceito intermediario de Preparar e servir dados é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q238",
    "text": "Qual é a diferença entre as funções DAX `CALENDAR()` e `CALENDARAUTO()` para criar tabelas de data?",
    "options": [
      "`CALENDAR(data_inicio, data_fim)` cria uma tabela de datas com intervalo explícito definido pelo usuário; `CALENDARAUTO()` detecta automaticamente o intervalo mínimo e máximo de todas as colunas de data do modelo e cria a tabela cobrindo esse período.",
      "`CALENDAR()` cria apenas datas de dias úteis; `CALENDARAUTO()` cria todas as datas incluindo fins de semana e feriados.",
      "`CALENDAR()` retorna uma tabela com apenas a coluna Date; `CALENDARAUTO()` retorna tabela com Date, Year, Month, Quarter e Day automaticamente.",
      "São funções idênticas; a única diferença é que `CALENDARAUTO()` aceita parâmetro de fuso horário para ajuste automático de datas."
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "No contexto do DP-600, implementar e gerenciar modelo semântico exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Função DAX Implementar e gerenciar modelo semântico: `CALENDAR(data_inicio, data_fim)` cria uma tabela de datas com interva... Esta abordagem resolve iniciante requisito com syntax nativa.",
      "respostaCerta": "`CALENDAR(data_inicio, data_fim)` cria uma tabela de datas com intervalo explícito definido pelo usuário; `CALENDARAUTO()` detecta automaticamente o intervalo mínimo e máximo de todas as colunas de data do modelo e cria a tabela cobrindo esse período. — implementa corretamente o requisito técnico para este cenário de iniciante.",
      "puloDoGato": "Q238 trigger: palavras-chave em 'Implementar e gerenciar modelo semântico' indicam iniciante profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve iniciante requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Implementar e gerenciar modelo semântico completo.",
        "Opção C: padrão alternativo válido mas não otimizado para iniciante proficiency."
      ],
      "dicaOuro": "Q238 diferenciar: este conceito iniciante de Implementar e gerenciar modelo semântico é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q239",
    "text": "No SQL Analytics Endpoint de um Lakehouse com múltiplos schemas habilitados, como você consulta uma tabela em um schema específico?",
    "options": [
      "Schemas diferentes em um Lakehouse são isolados; cross-schema queries requerem Shortcuts entre Lakehouses.",
      "Usando notação de três partes `lakehouse.schema.tabela` obrigatória para cross-schema queries no SQL Analytics Endpoint.",
      "Criando um Linked Server entre schemas e usando `OPENQUERY(schema, 'SELECT ...')` para consultas cross-schema.",
      "Usando notação de duas partes `schema.tabela` na query SQL, como `SELECT * FROM vendas.fato_pedidos JOIN dimensao.dim_produto ON ...` após habilitar schemas no Lakehouse."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em contexto Preparar e servir dados, o endpoint correto é: Usando notação de duas partes `schema.tabela` na query SQL, como `SELE... Este é padrão nativo Fabric API v1 para avancado proficiency.",
      "respostaCerta": "Usando notação de duas partes `schema.tabela` na query SQL, como `SELECT * FROM vendas.fato_pedidos JOIN dimensao.dim_produto ON ...` após habilitar schemas no Lakehouse. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q239 trigger: palavras-chave em 'Preparar e servir dados' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Preparar e servir dados completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q239 diferenciar: este conceito avancado de Preparar e servir dados é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q240",
    "text": "Como você replica a estrutura de um workspace Fabric (sem dados) para criar novos ambientes padronizados?",
    "options": [
      "Usando a integração Git para versionar os itens do workspace de template, e depois conectar o novo workspace ao mesmo repositório (branch específico), fazendo \"Update from Git\" para restaurar a estrutura de itens.",
      "Usando o Deployment Pipeline com um estágio extra de \"Template\" que replica estrutura sem dados automaticamente.",
      "Exportando todos os itens como arquivo .zip via Admin Portal e importando no novo workspace.",
      "Usando a opção \"Clone Workspace\" disponível no menu de contexto do workspace no portal Fabric."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "No contexto do DP-600, manter a solução analítica exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Manter a solução analítica (intermediario): Usando a integração Git para versionar os itens do workspace de templa... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "Usando a integração Git para versionar os itens do workspace de template, e depois conectar o novo workspace ao mesmo repositório (branch específico), fazendo \"Update from Git\" para restaurar a estrutura de itens. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Q240 trigger: palavras-chave em 'Manter a solução analítica' indicam intermediario profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve intermediario requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Manter a solução analítica completo.",
        "Opção C: padrão alternativo válido mas não otimizado para intermediario proficiency."
      ],
      "dicaOuro": "Q240 diferenciar: este conceito intermediario de Manter a solução analítica é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q241",
    "text": "Em PySpark no Fabric, como você verifica as propriedades e o histórico de uma tabela Delta, incluindo versões anteriores disponíveis para time travel?",
    "options": [
      "`spark.sql(\"DESCRIBE HISTORY nome_tabela\")` retorna o log de transações com versões, timestamps, operações e métricas; `spark.sql(\"DESCRIBE DETAIL nome_tabela\")` retorna propriedades como localização e formato.",
      "`spark.sql(\"SHOW TABLE HISTORY nome_tabela\")`",
      "`spark.read.format(\"delta\").load(\"Tables/nome_tabela\").history()`",
      "`DeltaTable.forName(spark, \"nome_tabela\").properties()` retorna todas as propriedades e histórico de versões em um único DataFrame."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Notebook Spark (intermediario): `spark.sql(\"DESCRIBE HISTORY nome_tabela\")` retorna o log de transaçõe... Esta abordagem integra Spark com Fabric nativo.",
      "respostaCerta": "`spark.sql(\"DESCRIBE HISTORY nome_tabela\")` retorna o log de transações com versões, timestamps, operações e métricas; `spark.sql(\"DESCRIBE DETAIL nome_tabela\")` retorna propriedades como localização e formato. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Q241 trigger: palavras-chave em 'Preparar e servir dados' indicam intermediario profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve intermediario requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Preparar e servir dados completo.",
        "Opção C: padrão alternativo válido mas não otimizado para intermediario proficiency."
      ],
      "dicaOuro": "Q241 diferenciar: este conceito intermediario de Preparar e servir dados é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q242",
    "text": "Qual ferramenta integrada ao Power BI Desktop permite medir o tempo de execução de cada visual e identificar os mais lentos em um relatório?",
    "options": [
      "O Query Diagnostics, disponível no Power Query Editor, que mede o tempo de carregamento de cada etapa de transformação.",
      "O DAX Studio, ferramenta externa que deve ser conectada ao modelo para análise de desempenho de visuais.",
      "O Performance Analyzer, acessível via menu View, que registra o tempo de renderização, query DAX e outros eventos para cada visual durante a interação com o relatório.",
      "O Fabric Monitor Hub, que centraliza métricas de desempenho de todos os itens do workspace incluindo relatórios."
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "No contexto do DP-600, implementar e gerenciar modelo semântico exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Implementar e gerenciar modelo semântico (iniciante): O Performance Analyzer, acessível via menu View, que registra o tempo ... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "O Performance Analyzer, acessível via menu View, que registra o tempo de renderização, query DAX e outros eventos para cada visual durante a interação com o relatório. — implementa corretamente o requisito técnico para este cenário de iniciante.",
      "puloDoGato": "Q242 trigger: palavras-chave em 'Implementar e gerenciar modelo semântico' indicam iniciante profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve iniciante requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Implementar e gerenciar modelo semântico completo.",
        "Opção C: padrão alternativo válido mas não otimizado para iniciante proficiency."
      ],
      "dicaOuro": "Q242 diferenciar: este conceito iniciante de Implementar e gerenciar modelo semântico é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q243",
    "text": "Em um Notebook Fabric, como você lê dados de um Warehouse usando PySpark via SQL Analytics Endpoint?",
    "options": [
      "Usando `spark.read.format(\"sqlserver\").option(\"server\", endpoint).option(\"database\", warehouse).load(\"schema.tabela\")`.",
      "Usando `spark.read.jdbc(url=warehouse_connection_string, table=\"schema.tabela\", properties={\"driver\": \"com.microsoft.sqlserver.jdbc.SQLServerDriver\"})` com JDBC explícito.",
      "Usando `spark.sql(\"SELECT * FROM warehouse.schema.tabela\")`",
      "Usando `spark.read.synapsesql(\"warehouse_name.schema.table_name\")` com o conector nativo do Fabric que autentica automaticamente via identidade do workspace."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em contexto Preparar e servir dados, o endpoint correto é: Usando `spark.read.synapsesql(\"warehouse_name.schema.table_name\")` com... Este é padrão nativo Fabric API v1 para intermediario proficiency.",
      "respostaCerta": "Usando `spark.read.synapsesql(\"warehouse_name.schema.table_name\")` com o conector nativo do Fabric que autentica automaticamente via identidade do workspace. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Q243 trigger: palavras-chave em 'Preparar e servir dados' indicam intermediario profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve intermediario requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Preparar e servir dados completo.",
        "Opção C: padrão alternativo válido mas não otimizado para intermediario proficiency."
      ],
      "dicaOuro": "Q243 diferenciar: este conceito intermediario de Preparar e servir dados é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q244",
    "text": "Qual é a vantagem de usar grupos do Microsoft Entra ID (Azure AD) em vez de usuários individuais para gerenciar permissões no Microsoft Fabric?",
    "options": [
      "Apenas grupos do Entra ID podem ser usados com Deployment Pipelines; usuários individuais não são suportados nesse contexto.",
      "Grupos do Entra ID recebem automaticamente a função Admin em workspaces, enquanto usuários individuais ficam limitados à função Viewer.",
      "Grupos do Entra ID permitem contornar as restrições de tenant settings do Admin Portal para usuários específicos.",
      "Facilita a administração em escala, pois alterações de membros no grupo se propagam automaticamente para todas as permissões Fabric associadas ao grupo, sem necessidade de atualizar individualmente cada workspace ou item."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "No contexto do DP-600, manter a solução analítica exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Manter a solução analítica (intermediario): Facilita a administração em escala, pois alterações de membros no grup... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "Facilita a administração em escala, pois alterações de membros no grupo se propagam automaticamente para todas as permissões Fabric associadas ao grupo, sem necessidade de atualizar individualmente cada workspace ou item. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Q244 trigger: palavras-chave em 'Manter a solução analítica' indicam intermediario profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve intermediario requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Manter a solução analítica completo.",
        "Opção C: padrão alternativo válido mas não otimizado para intermediario proficiency."
      ],
      "dicaOuro": "Q244 diferenciar: este conceito intermediario de Manter a solução analítica é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q245",
    "text": "Em um Data Pipeline do Fabric, como você usa expressões dinâmicas para construir o nome de uma tabela de destino com base na data de execução?",
    "options": [
      "Usando `@pipeline().parameters.tabela_destino` que lê automaticamente a data de execução e formata o nome da tabela.",
      "Usando `@trigger().scheduledTime` que retorna o horário agendado e concatena automaticamente com o nome base da tabela.",
      "Usando a expressão `@concat('fato_vendas_', formatDateTime(utcNow(), 'yyyyMMdd'))` no campo de nome da tabela destino, que concatena o prefixo fixo com a data atual formatada.",
      "Usando `@variables('data_execucao') + '_fato_vendas'` com a variável de data pré-configurada nas definições do pipeline."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Preparar e servir dados (intermediario): Usando a expressão `@concat('fato_vendas_', formatDateTime(utcNow(), '... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "Usando a expressão `@concat('fato_vendas_', formatDateTime(utcNow(), 'yyyyMMdd'))` no campo de nome da tabela destino, que concatena o prefixo fixo com a data atual formatada. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Q245 trigger: palavras-chave em 'Preparar e servir dados' indicam intermediario profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve intermediario requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Preparar e servir dados completo.",
        "Opção C: padrão alternativo válido mas não otimizado para intermediario proficiency."
      ],
      "dicaOuro": "Q245 diferenciar: este conceito intermediario de Preparar e servir dados é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q246",
    "text": "A função DAX `EARLIER(coluna)` é usada em colunas calculadas para fazer o quê?",
    "options": [
      "Retornar o valor da coluna na linha imediatamente anterior na ordem física da tabela, equivalente ao LAG(1) do SQL.",
      "Acessar o valor da coluna especificada no contexto de linha externo (outer row context) quando há contextos de linha aninhados, como em um `FILTER` dentro de uma coluna calculada que itera sobre a mesma tabela.",
      "Retornar o valor da coluna no período de tempo anterior com base na tabela de calendário relacionada ao modelo.",
      "Acessar o valor da coluna antes de qualquer filtro ser aplicado pelo relatório, equivalente ao ALL() mas em nível de coluna calculada."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "No contexto do DP-600, implementar e gerenciar modelo semântico exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Função DAX Implementar e gerenciar modelo semântico: Acessar o valor da coluna especificada no contexto de linha externo (o... Esta abordagem resolve avancado requisito com syntax nativa.",
      "respostaCerta": "Acessar o valor da coluna especificada no contexto de linha externo (outer row context) quando há contextos de linha aninhados, como em um `FILTER` dentro de uma coluna calculada que itera sobre a mesma tabela. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q246 trigger: palavras-chave em 'Implementar e gerenciar modelo semântico' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Implementar e gerenciar modelo semântico completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q246 diferenciar: este conceito avancado de Implementar e gerenciar modelo semântico é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q247",
    "text": "Em KQL, para que serve o operador `mv-expand`?",
    "options": [
      "Expande arrays ou dynamic objects em múltiplas linhas, uma por elemento do array, permitindo analisar dados semi-estruturados como JSON com arrays aninhados em tabelas KQL do Eventhouse.",
      "Expande uma query KQL para exibir o plano de execução detalhado com estimativas de custo por operador.",
      "Executa uma query KQL em múltiplos KQL Databases simultaneamente e combina os resultados em uma única saída.",
      "Expande colunas de texto delimitadas por vírgula em colunas separadas, similar ao `split_to_table` do SQL."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em KQL (avancado): Expande arrays ou dynamic objects em múltiplas linhas, uma por element... Esta syntax é Kusto query language nativa.",
      "respostaCerta": "Expande arrays ou dynamic objects em múltiplas linhas, uma por elemento do array, permitindo analisar dados semi-estruturados como JSON com arrays aninhados em tabelas KQL do Eventhouse. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q247 trigger: palavras-chave em 'Preparar e servir dados' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Preparar e servir dados completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q247 diferenciar: este conceito avancado de Preparar e servir dados é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q248",
    "text": "Qual estratégia de branching Git é recomendada para equipes de engenharia de dados usando o Microsoft Fabric com múltiplos desenvolvedores?",
    "options": [
      "Gitflow com branches permanentes de feature, develop, release e hotfix, com o Fabric sincronizando automaticamente cada branch com um workspace dedicado.",
      "Feature branching onde cada desenvolvedor trabalha em um branch de feature conectado a um workspace de desenvolvimento individual, com PRs (pull requests) para o branch principal (main/dev) revisados antes de merge, e Deployment Pipelines para promoção para test e production.",
      "Trunk-based development onde todos os desenvolvedores commitam diretamente no branch main do repositório com o workspace de produção sincronizado em tempo real.",
      "Um único branch compartilhado por workspace onde cada desenvolvedor cria subpastas no repositório para isolar suas alterações sem conflitos de merge."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "No contexto do DP-600, manter a solução analítica exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Manter a solução analítica (avancado): Feature branching onde cada desenvolvedor trabalha em um branch de fea... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "Feature branching onde cada desenvolvedor trabalha em um branch de feature conectado a um workspace de desenvolvimento individual, com PRs (pull requests) para o branch principal (main/dev) revisados antes de merge, e Deployment Pipelines para promoção para test e production. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q248 trigger: palavras-chave em 'Manter a solução analítica' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Manter a solução analítica completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q248 diferenciar: este conceito avancado de Manter a solução analítica é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q249",
    "text": "O Delta Lake no Fabric suporta constraints de CHECK para validação de dados em tempo de escrita?",
    "options": [
      "Sim, usando `ALTER TABLE nome ADD CONSTRAINT nome_constraint CHECK (expressão_sql)`",
      "Não; Delta Lake não suporta constraints de nenhum tipo; validações devem ser implementadas via lógica de notebook antes da escrita.",
      "Suporta CHECK constraints apenas em tabelas gerenciadas criadas via SQL Analytics Endpoint, não em tabelas criadas por notebooks PySpark.",
      "Suporta apenas NOT NULL como constraint de validação; CHECK constraints requerem stored procedures de validação externas."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Preparar e servir dados (avancado): Sim, usando `ALTER TABLE nome ADD CONSTRAINT nome_constraint CHECK (ex... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "Sim, usando `ALTER TABLE nome ADD CONSTRAINT nome_constraint CHECK (expressão_sql)` — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q249 trigger: palavras-chave em 'Preparar e servir dados' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Preparar e servir dados completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q249 diferenciar: este conceito avancado de Preparar e servir dados é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q250",
    "text": "Qual conjunto de funções DAX é usado para trabalhar com hierarquias pai-filho em tabelas relacionais (como organogramas ou contas contábeis)?",
    "options": [
      "As funções TREE (`TREEPATH()`, `TREENODE()`, `TREELEVEL()`) específicas para hierarquias auto-referenciadas em modelos DAX.",
      "As funções PATH (`PATH()`, `PATHITEM()`, `PATHLENGTH()`, `PATHCONTAINS()`) que constroem e navegam strings delimitadas representando o caminho hierárquico de cada nó até a raiz.",
      "As funções HIERARCHY (`HIERARCHYPATH()`, `HIERARCHYITEM()`) que são versões otimizadas para modelos semânticos com hierarquias explícitas.",
      "As funções PARENT (`PARENT()`, `PARENTID()`, `PARENTPATH()`) que navegam diretamente nas relações pai-filho do modelo semântico."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "No contexto do DP-600, implementar e gerenciar modelo semântico exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Função DAX Implementar e gerenciar modelo semântico: As funções PATH (`PATH()`, `PATHITEM()`, `PATHLENGTH()`, `PATHCONTAINS... Esta abordagem resolve avancado requisito com syntax nativa.",
      "respostaCerta": "As funções PATH (`PATH()`, `PATHITEM()`, `PATHLENGTH()`, `PATHCONTAINS()`) que constroem e navegam strings delimitadas representando o caminho hierárquico de cada nó até a raiz. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q250 trigger: palavras-chave em 'Implementar e gerenciar modelo semântico' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Implementar e gerenciar modelo semântico completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q250 diferenciar: este conceito avancado de Implementar e gerenciar modelo semântico é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q251",
    "text": "Em qual cenário um Notebook é mais adequado que um Data Pipeline para orquestração de dados no Fabric?",
    "options": [
      "Quando os dados vêm de uma API REST, pois o conector REST só está disponível em notebooks via biblioteca `requests`.",
      "Quando a lógica de transformação requer programação imperativa complexa (loops, condicionais dinâmicas, ML, chamadas a APIs com lógica customizada), processamento distribuído com Spark ou depuração interativa de dados.",
      "Quando a tarefa envolve copiar dados entre fontes relacionais e o Lakehouse, pois notebooks têm conectores nativos mais eficientes que pipelines.",
      "Quando é necessário agendar a execução de tarefas, pois pipelines não suportam agendamento nativo e requerem notebooks."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Notebook Spark (intermediario): Quando a lógica de transformação requer programação imperativa complex... Esta abordagem integra Spark com Fabric nativo.",
      "respostaCerta": "Quando a lógica de transformação requer programação imperativa complexa (loops, condicionais dinâmicas, ML, chamadas a APIs com lógica customizada), processamento distribuído com Spark ou depuração interativa de dados. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Q251 trigger: palavras-chave em 'Preparar e servir dados' indicam intermediario profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve intermediario requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Preparar e servir dados completo.",
        "Opção C: padrão alternativo válido mas não otimizado para intermediario proficiency."
      ],
      "dicaOuro": "Q251 diferenciar: este conceito intermediario de Preparar e servir dados é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q252",
    "text": "Como você concede acesso de leitura a uma pasta específica dentro da seção Files de um Lakehouse no OneLake sem dar acesso ao workspace inteiro?",
    "options": [
      "Configurando uma sensitivity label de nível confidencial na pasta que restringe automaticamente o acesso apenas a usuários autorizados.",
      "Usando as ACLs do OneLake (POSIX-style ACLs herdadas do ADLS Gen2) via Azure Storage Explorer, Azure CLI ou APIs do OneLake para definir permissões de leitura na pasta específica para o usuário ou grupo desejado.",
      "Criando um Shortcut para a pasta específica em um novo Lakehouse e compartilhando apenas esse Lakehouse com o usuário.",
      "Usando o Visual Query Editor para criar uma view que expõe apenas os arquivos da pasta específica como tabela acessível pelo usuário."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "No contexto do DP-600, manter a solução analítica exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Manter a solução analítica (avancado): Usando as ACLs do OneLake (POSIX-style ACLs herdadas do ADLS Gen2) via... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "Usando as ACLs do OneLake (POSIX-style ACLs herdadas do ADLS Gen2) via Azure Storage Explorer, Azure CLI ou APIs do OneLake para definir permissões de leitura na pasta específica para o usuário ou grupo desejado. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q252 trigger: palavras-chave em 'Manter a solução analítica' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Manter a solução analítica completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q252 diferenciar: este conceito avancado de Manter a solução analítica é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q253",
    "text": "No Warehouse do Fabric, como você executa SQL dinâmico onde o nome da tabela é construído em tempo de execução?",
    "options": [
      "Usando `EXECUTE IMMEDIATE 'SELECT * FROM ' + @nome_tabela`",
      "Usando `CALL DYNAMIC_QUERY('SELECT * FROM ' + @nome_tabela)`",
      "Usando `spark.sql(f\"SELECT * FROM {nome_tabela}\")` via notebook PySpark, pois o Warehouse não suporta SQL dinâmico nativo.",
      "Usando `DECLARE @sql NVARCHAR(MAX) = N'SELECT * FROM ' + QUOTENAME(@nome_tabela); EXEC sp_executesql @sql`"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em T-SQL Warehouse (avancado): Usando `DECLARE @sql NVARCHAR(MAX) = N'SELECT * FROM ' + QUOTENAME(@no... Esta syntax é padrão SQL Server nativo no Fabric.",
      "respostaCerta": "Usando `DECLARE @sql NVARCHAR(MAX) = N'SELECT * FROM ' + QUOTENAME(@nome_tabela); EXEC sp_executesql @sql` — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q253 trigger: palavras-chave em 'Preparar e servir dados' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Preparar e servir dados completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q253 diferenciar: este conceito avancado de Preparar e servir dados é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q254",
    "text": "Como você define o formato de exibição padrão de uma medida DAX no modelo semântico para exibir como percentual com duas casas decimais?",
    "options": [
      "Configurando a propriedade \"Format string\" da medida como `\"0.00%\"` nas propriedades da medida no Power BI Desktop ou Tabular Editor, que formata automaticamente o valor multiplicado por 100 com símbolo de percentual.",
      "Multiplicando o valor da medida por 100 e adicionando concatenação de string `& \"%\"` para exibição percentual.",
      "Usando `FORMAT([Medida], \"Percent\")` dentro da expressão DAX da medida para aplicar formatação percentual.",
      "Configurando a propriedade \"Data Category\" como \"Percentage\" nas propriedades da coluna de origem da medida."
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "No contexto do DP-600, implementar e gerenciar modelo semântico exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Função DAX Implementar e gerenciar modelo semântico: Configurando a propriedade \"Format string\" da medida como `\"0.00%\"` na... Esta abordagem resolve iniciante requisito com syntax nativa.",
      "respostaCerta": "Configurando a propriedade \"Format string\" da medida como `\"0.00%\"` nas propriedades da medida no Power BI Desktop ou Tabular Editor, que formata automaticamente o valor multiplicado por 100 com símbolo de percentual. — implementa corretamente o requisito técnico para este cenário de iniciante.",
      "puloDoGato": "Q254 trigger: palavras-chave em 'Implementar e gerenciar modelo semântico' indicam iniciante profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve iniciante requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Implementar e gerenciar modelo semântico completo.",
        "Opção C: padrão alternativo válido mas não otimizado para iniciante proficiency."
      ],
      "dicaOuro": "Q254 diferenciar: este conceito iniciante de Implementar e gerenciar modelo semântico é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q255",
    "text": "Em KQL, qual função extrai o ano de uma coluna datetime em uma query do Eventhouse?",
    "options": [
      "`extract(year from coluna_data)`",
      "`date_trunc('year', coluna_data)`",
      "`YEAR(coluna_data)`",
      "`datetime_part('year', coluna_data)` ou `getmonth(coluna_data)` para mês; para ano usa-se `getyear(coluna_data)`"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em KQL (intermediario): `datetime_part('year', coluna_data)` ou `getmonth(coluna_data)` para m... Esta syntax é Kusto query language nativa.",
      "respostaCerta": "`datetime_part('year', coluna_data)` ou `getmonth(coluna_data)` para mês; para ano usa-se `getyear(coluna_data)` — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Q255 trigger: palavras-chave em 'Preparar e servir dados' indicam intermediario profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve intermediario requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Preparar e servir dados completo.",
        "Opção C: padrão alternativo válido mas não otimizado para intermediario proficiency."
      ],
      "dicaOuro": "Q255 diferenciar: este conceito intermediario de Preparar e servir dados é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q256",
    "text": "Qual é o número máximo de refreshes diários agendados para um modelo semântico em uma capacity Fabric (F SKU)?",
    "options": [
      "Em capacities Fabric (F SKUs), não há limite fixo de refreshes diários como no Power BI Pro/Premium por usuário; o limite é determinado pela disponibilidade da capacity e filas de processamento, podendo ser configurado com alta frequência.",
      "Máximo de 24 refreshes diários (a cada hora), com possibilidade de aumentar via suporte Microsoft para casos específicos.",
      "Máximo de 8 refreshes diários, o mesmo limite do Power BI Pro aplicado a todas as capacities Fabric.",
      "Máximo de 48 refreshes diários (a cada 30 minutos), independente do SKU da capacity Fabric contratada."
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "No contexto do DP-600, manter a solução analítica exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Manter a solução analítica (iniciante): Em capacities Fabric (F SKUs), não há limite fixo de refreshes diários... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "Em capacities Fabric (F SKUs), não há limite fixo de refreshes diários como no Power BI Pro/Premium por usuário; o limite é determinado pela disponibilidade da capacity e filas de processamento, podendo ser configurado com alta frequência. — implementa corretamente o requisito técnico para este cenário de iniciante.",
      "puloDoGato": "Q256 trigger: palavras-chave em 'Manter a solução analítica' indicam iniciante profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve iniciante requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Manter a solução analítica completo.",
        "Opção C: padrão alternativo válido mas não otimizado para iniciante proficiency."
      ],
      "dicaOuro": "Q256 diferenciar: este conceito iniciante de Manter a solução analítica é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q257",
    "text": "Em um Notebook Fabric, como você acessa a Spark UI para monitorar jobs, stages e tasks em execução?",
    "options": [
      "Clicando no link \"Spark UI\" disponível na interface do notebook durante a execução de células Spark, que abre o painel de monitoramento com DAG visualization, tasks e métricas de executor.",
      "Acessando o Azure Portal na seção de recursos do Fabric e navegando até \"Spark Monitoring\" para o workspace correspondente.",
      "Acessando o Monitor Hub do Fabric e navegando até a seção \"Spark Jobs\" que exibe a UI de todos os notebooks em execução.",
      "Executando `spark.sparkContext.uiWebUrl` para obter o URL da Spark UI e abrindo manualmente no navegador."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Notebook Spark (intermediario): Clicando no link \"Spark UI\" disponível na interface do notebook durant... Esta abordagem integra Spark com Fabric nativo.",
      "respostaCerta": "Clicando no link \"Spark UI\" disponível na interface do notebook durante a execução de células Spark, que abre o painel de monitoramento com DAG visualization, tasks e métricas de executor. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Q257 trigger: palavras-chave em 'Preparar e servir dados' indicam intermediario profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve intermediario requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Preparar e servir dados completo.",
        "Opção C: padrão alternativo válido mas não otimizado para intermediario proficiency."
      ],
      "dicaOuro": "Q257 diferenciar: este conceito intermediario de Preparar e servir dados é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q258",
    "text": "Em qual função DAX você pode usar `ORDERBY()` e `PARTITIONBY()` como argumentos?",
    "options": [
      "Em `SUMMARIZECOLUMNS()` onde `ORDERBY()` define a ordenação do resultado e `PARTITIONBY()` define os grupos de agregação.",
      "Em `CALCULATE()` onde `ORDERBY()` define a prioridade de avaliação dos filtros e `PARTITIONBY()` isola contextos de filtro.",
      "Nas funções de janela DAX como `WINDOW()`, `OFFSET()`, `INDEX()` e `RANK()`, que recebem `ORDERBY()` para definir ordenação e `PARTITIONBY()` para definir agrupamentos dentro da janela.",
      "Em `TOPN()` onde `ORDERBY()` especifica a coluna de classificação e `PARTITIONBY()` aplica o ranking por partição de dados."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "No contexto do DP-600, implementar e gerenciar modelo semântico exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Função DAX Implementar e gerenciar modelo semântico: Nas funções de janela DAX como `WINDOW()`, `OFFSET()`, `INDEX()` e `RA... Esta abordagem resolve avancado requisito com syntax nativa.",
      "respostaCerta": "Nas funções de janela DAX como `WINDOW()`, `OFFSET()`, `INDEX()` e `RANK()`, que recebem `ORDERBY()` para definir ordenação e `PARTITIONBY()` para definir agrupamentos dentro da janela. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q258 trigger: palavras-chave em 'Implementar e gerenciar modelo semântico' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Implementar e gerenciar modelo semântico completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q258 diferenciar: este conceito avancado de Implementar e gerenciar modelo semântico é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q259",
    "text": "Ao carregar grandes volumes de dados em um Warehouse do Fabric, qual abordagem oferece melhor desempenho de ingestão?",
    "options": [
      "Usar um Notebook PySpark com `df.write.synapsesql()` que aplica compressão automática antes de enviar os dados ao Warehouse.",
      "Usar INSERT INTO com múltiplos VALUES em uma única instrução, agrupando até 1000 linhas por batch para otimizar o throughput de ingestão.",
      "Usar um Dataflow Gen2 com destino Warehouse em modo \"Replace\" que trunca e recarrega os dados de forma otimizada automaticamente.",
      "Usar COPY INTO ou CTAS (Create Table As Select) via T-SQL para cargas bulk, ou Data Pipelines com a atividade Copy Data em modo paralelo, evitando INSERT row-by-row que gera overhead de transação excessivo."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Preparar e servir dados (avancado): Usar COPY INTO ou CTAS (Create Table As Select) via T-SQL para cargas ... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "Usar COPY INTO ou CTAS (Create Table As Select) via T-SQL para cargas bulk, ou Data Pipelines com a atividade Copy Data em modo paralelo, evitando INSERT row-by-row que gera overhead de transação excessivo. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q259 trigger: palavras-chave em 'Preparar e servir dados' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Preparar e servir dados completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q259 diferenciar: este conceito avancado de Preparar e servir dados é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q260",
    "text": "O que são Domains no Microsoft Fabric e como eles ajudam na governança de dados?",
    "options": [
      "São agrupamentos lógicos de workspaces relacionados por área de negócio (ex: Finanças, RH, Vendas) que permitem aplicar políticas de governança, delegação administrativa e visibilidade de dados em nível de domínio no OneLake Catalog.",
      "São grupos de usuários organizados por departamento que recebem automaticamente acesso aos workspaces correspondentes via Entra ID.",
      "São regiões geográficas do Azure onde os dados do Fabric são armazenados fisicamente, garantindo residência de dados conforme regulamentações locais.",
      "São ambientes de execução isolados que separam workloads de desenvolvimento, teste e produção com cotas de capacity independentes."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "No contexto do DP-600, manter a solução analítica exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Manter a solução analítica (intermediario): São agrupamentos lógicos de workspaces relacionados por área de negóci... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "São agrupamentos lógicos de workspaces relacionados por área de negócio (ex: Finanças, RH, Vendas) que permitem aplicar políticas de governança, delegação administrativa e visibilidade de dados em nível de domínio no OneLake Catalog. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Q260 trigger: palavras-chave em 'Manter a solução analítica' indicam intermediario profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve intermediario requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Manter a solução analítica completo.",
        "Opção C: padrão alternativo válido mas não otimizado para intermediario proficiency."
      ],
      "dicaOuro": "Q260 diferenciar: este conceito intermediario de Manter a solução analítica é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q261",
    "text": "Em PySpark no Fabric, quais opções você pode configurar ao escrever um DataFrame em formato Parquet para otimizar a leitura posterior?",
    "options": [
      "O índice de particionamento e a estratégia de bucketing que o Fabric aplica automaticamente para otimizar consultas SQL posteriores.",
      "Codec de compressão (`snappy`, `gzip`, `zstd`), número de partições com `repartition()` ou `coalesce()` antes da escrita, e tamanho de bloco via `spark.conf.set(\"parquet.block.size\", ...)` para controlar o tamanho dos arquivos gerados.",
      "Apenas o modo de escrita (`overwrite`, `append`, `ignore`) e o schema; outras opções são gerenciadas automaticamente pelo motor Spark.",
      "O nível de compressão (`low`, `medium`, `high`) e o formato de encoding (`dictionary`, `delta`, `rle`) para cada tipo de coluna."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Notebook Spark (intermediario): Codec de compressão (`snappy`, `gzip`, `zstd`), número de partições co... Esta abordagem integra Spark com Fabric nativo.",
      "respostaCerta": "Codec de compressão (`snappy`, `gzip`, `zstd`), número de partições com `repartition()` ou `coalesce()` antes da escrita, e tamanho de bloco via `spark.conf.set(\"parquet.block.size\", ...)` para controlar o tamanho dos arquivos gerados. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Q261 trigger: palavras-chave em 'Preparar e servir dados' indicam intermediario profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve intermediario requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Preparar e servir dados completo.",
        "Opção C: padrão alternativo válido mas não otimizado para intermediario proficiency."
      ],
      "dicaOuro": "Q261 diferenciar: este conceito intermediario de Preparar e servir dados é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q262",
    "text": "Quando é preferível usar `APPROXIMATEDISTINCTCOUNT()` em vez de `DISTINCTCOUNT()` em uma medida DAX?",
    "options": [
      "Quando o modelo semântico está em modo Import e a contagem exata causaria timeout de refresh por exceder o limite de memória VertiPaq.",
      "Quando a coluna tem altíssima cardinalidade (dezenas de milhões de valores únicos) e uma margem de erro de ~2% é aceitável em troca de desempenho significativamente superior, especialmente em modelos DirectQuery ou Direct Lake.",
      "Quando a coluna contém valores nulos que precisam ser incluídos na contagem, pois DISTINCTCOUNT ignora nulos automaticamente.",
      "Sempre que o relatório é acessado por mais de 100 usuários simultâneos para reduzir a carga no modelo semântico."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "No contexto do DP-600, implementar e gerenciar modelo semântico exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Função DAX Implementar e gerenciar modelo semântico: Quando a coluna tem altíssima cardinalidade (dezenas de milhões de val... Esta abordagem resolve intermediario requisito com syntax nativa.",
      "respostaCerta": "Quando a coluna tem altíssima cardinalidade (dezenas de milhões de valores únicos) e uma margem de erro de ~2% é aceitável em troca de desempenho significativamente superior, especialmente em modelos DirectQuery ou Direct Lake. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Q262 trigger: palavras-chave em 'Implementar e gerenciar modelo semântico' indicam intermediario profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve intermediario requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Implementar e gerenciar modelo semântico completo.",
        "Opção C: padrão alternativo válido mas não otimizado para intermediario proficiency."
      ],
      "dicaOuro": "Q262 diferenciar: este conceito intermediario de Implementar e gerenciar modelo semântico é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q263",
    "text": "Como você reutiliza a estrutura de um Data Pipeline existente no Fabric para criar um novo pipeline similar?",
    "options": [
      "Usando o Git integration para fazer checkout do pipeline em um novo branch e modificando o arquivo de definição diretamente.",
      "Exportando o pipeline como arquivo JSON via Admin Portal e importando no workspace destino com a opção \"Import Pipeline\".",
      "Criando um template de pipeline no Deployment Pipeline que pode ser instanciado múltiplas vezes com parâmetros diferentes.",
      "Clonando o pipeline existente via opção \"Save as\" ou duplicando-o no workspace, e depois ajustando as propriedades específicas como nomes de tabelas, conexões e parâmetros conforme necessário."
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Preparar e servir dados (iniciante): Clonando o pipeline existente via opção \"Save as\" ou duplicando-o no w... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "Clonando o pipeline existente via opção \"Save as\" ou duplicando-o no workspace, e depois ajustando as propriedades específicas como nomes de tabelas, conexões e parâmetros conforme necessário. — implementa corretamente o requisito técnico para este cenário de iniciante.",
      "puloDoGato": "Q263 trigger: palavras-chave em 'Preparar e servir dados' indicam iniciante profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve iniciante requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Preparar e servir dados completo.",
        "Opção C: padrão alternativo válido mas não otimizado para iniciante proficiency."
      ],
      "dicaOuro": "Q263 diferenciar: este conceito iniciante de Preparar e servir dados é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q264",
    "text": "Ao configurar Incremental Refresh em um modelo semântico, como você garante que dados históricos nunca sejam reprocessados mesmo se alterações ocorrerem na fonte?",
    "options": [
      "Usando a opção \"Archive data\" no Incremental Refresh que move partições históricas para armazenamento Delta somente leitura.",
      "Criando uma tabela de controle no Lakehouse que registra as partições já processadas e usa um Data Pipeline para pular essas partições no refresh.",
      "Habilitando a opção \"Only refresh complete periods\" combinada com \"Detect data changes\" usando uma coluna de timestamp, e marcando partições históricas como \"frozen\" via XMLA/Tabular Editor para bloquear seu reprocessamento.",
      "Configurando a janela de refresh incremental para cobrir apenas os últimos 7 dias, deixando automaticamente os dados mais antigos fora do escopo de atualização."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "No contexto do DP-600, manter a solução analítica exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Manter a solução analítica (avancado): Habilitando a opção \"Only refresh complete periods\" combinada com \"Det... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "Habilitando a opção \"Only refresh complete periods\" combinada com \"Detect data changes\" usando uma coluna de timestamp, e marcando partições históricas como \"frozen\" via XMLA/Tabular Editor para bloquear seu reprocessamento. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q264 trigger: palavras-chave em 'Manter a solução analítica' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Manter a solução analítica completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q264 diferenciar: este conceito avancado de Manter a solução analítica é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q265",
    "text": "No Warehouse do Fabric, como você usa a cláusula PIVOT para transformar linhas em colunas, convertendo meses em colunas de vendas?",
    "options": [
      "`SELECT produto, CROSSTAB(mes, SUM(vendas)) FROM dbo.vendas GROUP BY produto, mes`",
      "`SELECT * FROM (SELECT produto, mes, vendas FROM dbo.vendas) src PIVOT (SUM(vendas) FOR mes IN ([Jan], [Fev], [Mar])) pvt`",
      "`SELECT produto, PIVOT(SUM(vendas) BY mes) FROM dbo.vendas GROUP BY produto`",
      "`SELECT produto, [Jan]=SUM(CASE WHEN mes='Jan' THEN vendas END) FROM dbo.vendas GROUP BY produto`"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Preparar e servir dados (avancado): `SELECT * FROM (SELECT produto, mes, vendas FROM dbo.vendas) src PIVOT... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "`SELECT * FROM (SELECT produto, mes, vendas FROM dbo.vendas) src PIVOT (SUM(vendas) FOR mes IN ([Jan], [Fev], [Mar])) pvt` — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q265 trigger: palavras-chave em 'Preparar e servir dados' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Preparar e servir dados completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q265 diferenciar: este conceito avancado de Preparar e servir dados é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q266",
    "text": "Por que tabelas de dimensão em modo Dual são necessárias em modelos compostos que combinam DirectQuery e Import?",
    "options": [
      "Permitem que o modelo semântico suporte mais de 1 bilhão de linhas nas dimensões combinando armazenamento em memória e disco.",
      "São necessárias para habilitar a filtragem bidirecional entre tabelas de fatos e dimensões em modelos compostos, o que não é suportado com Import puro.",
      "Garantem que as dimensões sejam atualizadas em tempo real junto com as tabelas de fatos DirectQuery sem necessidade de refresh agendado.",
      "Evitam cross-source joins entre tabelas Import e DirectQuery, permitindo que o motor use a cópia em cache (Import) quando necessário e a fonte direta (DirectQuery) em outros contextos, sem degradar o desempenho com joins entre engines diferentes."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "No contexto do DP-600, implementar e gerenciar modelo semântico exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em KQL (avancado): Evitam cross-source joins entre tabelas Import e DirectQuery, permitin... Esta syntax é Kusto query language nativa.",
      "respostaCerta": "Evitam cross-source joins entre tabelas Import e DirectQuery, permitindo que o motor use a cópia em cache (Import) quando necessário e a fonte direta (DirectQuery) em outros contextos, sem degradar o desempenho com joins entre engines diferentes. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q266 trigger: palavras-chave em 'Implementar e gerenciar modelo semântico' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Implementar e gerenciar modelo semântico completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q266 diferenciar: este conceito avancado de Implementar e gerenciar modelo semântico é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q267",
    "text": "Em um Data Pipeline do Fabric, qual atividade você usa para obter metadados de um arquivo no OneLake (como tamanho, data de modificação, número de colunas)?",
    "options": [
      "A atividade \"Get Metadata\", configurada com o dataset do arquivo e os campos de metadados desejados (itemName, itemType, size, lastModified, columnCount, structure), retornando as informações como output para uso em atividades subsequentes.",
      "A atividade \"Script\" com o comando `mssparkutils.fs.ls()` executado via notebook inline para listar propriedades de arquivos.",
      "A atividade \"Web\" com uma chamada GET à API REST do Fabric para recuperar as propriedades do arquivo no OneLake.",
      "A atividade \"Lookup\" com uma query SQL que consulta as tabelas de metadados do sistema do SQL Analytics Endpoint do Lakehouse."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Preparar e servir dados (intermediario): A atividade \"Get Metadata\", configurada com o dataset do arquivo e os ... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "A atividade \"Get Metadata\", configurada com o dataset do arquivo e os campos de metadados desejados (itemName, itemType, size, lastModified, columnCount, structure), retornando as informações como output para uso em atividades subsequentes. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Q267 trigger: palavras-chave em 'Preparar e servir dados' indicam intermediario profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve intermediario requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Preparar e servir dados completo.",
        "Opção C: padrão alternativo válido mas não otimizado para intermediario proficiency."
      ],
      "dicaOuro": "Q267 diferenciar: este conceito intermediario de Preparar e servir dados é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q268",
    "text": "Como você testa se as regras de Row-Level Security estão funcionando corretamente em um modelo semântico antes de publicar para usuários finais?",
    "options": [
      "Usando o DAX Studio com a opção \"Effective User\" para simular queries com o contexto de filtragem de um usuário específico.",
      "Criando uma conta de teste no Azure AD, adicionando à role RLS e acessando o relatório com essa conta para validar manualmente.",
      "Usando a funcionalidade \"View as role\" no Power BI Desktop (menu Modeling > View as) ou no Fabric Service (menu de segurança do modelo semântico), que simula a perspectiva de um usuário com a role RLS selecionada.",
      "Executando `EVALUATE CALCULATETABLE(tabela, USERNAME()=\"usuario@empresa.com\")` no DAX Studio para verificar os dados filtrados."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "No contexto do DP-600, manter a solução analítica exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Manter a solução analítica (intermediario): Usando a funcionalidade \"View as role\" no Power BI Desktop (menu Model... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "Usando a funcionalidade \"View as role\" no Power BI Desktop (menu Modeling > View as) ou no Fabric Service (menu de segurança do modelo semântico), que simula a perspectiva de um usuário com a role RLS selecionada. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Q268 trigger: palavras-chave em 'Manter a solução analítica' indicam intermediario profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve intermediario requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Manter a solução analítica completo.",
        "Opção C: padrão alternativo válido mas não otimizado para intermediario proficiency."
      ],
      "dicaOuro": "Q268 diferenciar: este conceito intermediario de Manter a solução analítica é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q269",
    "text": "Em um Lakehouse do Fabric, como você altera o período mínimo de retenção de arquivos Delta antes que o VACUUM possa removê-los?",
    "options": [
      "Acessando as configurações do Lakehouse no portal Fabric e ajustando o slider \"Delta Retention Period\" em dias.",
      "Usando `ALTER TABLE nome SET TBLPROPERTIES ('delta.retentionHours' = '24')`",
      "`spark.conf.set(\"spark.databricks.delta.retentionDurationCheck.enabled\", \"false\")` para desabilitar a verificação e depois `VACUUM tabela RETAIN X HOURS`",
      "Editando o arquivo `delta_config.json` na pasta `_delta_log` do Lakehouse para alterar a propriedade `minRetentionHours`."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Preparar e servir dados (avancado): `spark.conf.set(\"spark.databricks.delta.retentionDurationCheck.enabled... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "`spark.conf.set(\"spark.databricks.delta.retentionDurationCheck.enabled\", \"false\")` para desabilitar a verificação e depois `VACUUM tabela RETAIN X HOURS` — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q269 trigger: palavras-chave em 'Preparar e servir dados' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Preparar e servir dados completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q269 diferenciar: este conceito avancado de Preparar e servir dados é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q270",
    "text": "Qual é a diferença entre usar `CALCULATE([Medida], FILTER(ALL(Tabela[Coluna]), Tabela[Coluna] = \"valor\"))` e `CALCULATE([Medida], KEEPFILTERS(Tabela[Coluna] = \"valor\"))`?",
    "options": [
      "`FILTER(ALL(...))` suporta múltiplas condições complexas; `KEEPFILTERS` aceita apenas comparações simples de igualdade.",
      "`FILTER(ALL(...))` é avaliado no contexto de linha; `KEEPFILTERS` é avaliado apenas no contexto de filtro do relatório.",
      "São expressões equivalentes que produzem sempre o mesmo resultado; a diferença é apenas sintática para preferência do desenvolvedor.",
      "`FILTER(ALL(...))` remove primeiro todos os filtros da coluna e aplica apenas o novo filtro especificado; `KEEPFILTERS` preserva os filtros existentes e adiciona o novo como interseção, podendo retornar BLANK se o filtro atual não contiver o valor especificado."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "No contexto do DP-600, implementar e gerenciar modelo semântico exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Implementar e gerenciar modelo semântico (avancado): `FILTER(ALL(...))` remove primeiro todos os filtros da coluna e aplica... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "`FILTER(ALL(...))` remove primeiro todos os filtros da coluna e aplica apenas o novo filtro especificado; `KEEPFILTERS` preserva os filtros existentes e adiciona o novo como interseção, podendo retornar BLANK se o filtro atual não contiver o valor especificado. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q270 trigger: palavras-chave em 'Implementar e gerenciar modelo semântico' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Implementar e gerenciar modelo semântico completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q270 diferenciar: este conceito avancado de Implementar e gerenciar modelo semântico é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q271",
    "text": "Shortcuts do OneLake podem referenciar dados de um tenant Fabric diferente do tenant atual?",
    "options": [
      "Sim, usando Shortcuts do tipo \"External Fabric\" que requer autenticação via Service Principal do tenant de origem.",
      "Sim, desde que ambos os tenants estejam no mesmo tenant do Microsoft Entra ID e o administrador habilite a configuração \"Cross-tenant Shortcuts\".",
      "Sim, via Shortcuts para Azure Data Lake Storage Gen2 que serve como intermediário entre os dois tenants Fabric.",
      "Não diretamente entre tenants Fabric; Shortcuts suportam referências a Azure Data Lake Storage Gen2, Amazon S3, Google Cloud Storage e outros Lakehouses/Warehouses do mesmo tenant, mas não cross-tenant Fabric nativamente."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Preparar e servir dados (avancado): Não diretamente entre tenants Fabric; Shortcuts suportam referências a... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "Não diretamente entre tenants Fabric; Shortcuts suportam referências a Azure Data Lake Storage Gen2, Amazon S3, Google Cloud Storage e outros Lakehouses/Warehouses do mesmo tenant, mas não cross-tenant Fabric nativamente. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q271 trigger: palavras-chave em 'Preparar e servir dados' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Preparar e servir dados completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q271 diferenciar: este conceito avancado de Preparar e servir dados é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q272",
    "text": "Um usuário com função Viewer em um workspace do Fabric pode executar um Notebook ou Data Pipeline?",
    "options": [
      "Depende da configuração; o Admin do workspace pode conceder permissão de execução individualmente a Viewers via item-level permissions.",
      "Não; a função Viewer permite apenas visualizar e interagir com relatórios e dashboards publicados; para executar Notebooks e Pipelines é necessária a função Contributor ou superior.",
      "Sim, mas apenas Notebooks marcados como \"Allow Viewer execution\" pelo criador nas propriedades do item.",
      "Sim, Viewers podem executar Notebooks e Pipelines mas não podem modificar seu conteúdo ou criar novos itens."
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "No contexto do DP-600, manter a solução analítica exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Notebook Spark (iniciante): Não; a função Viewer permite apenas visualizar e interagir com relatór... Esta abordagem integra Spark com Fabric nativo.",
      "respostaCerta": "Não; a função Viewer permite apenas visualizar e interagir com relatórios e dashboards publicados; para executar Notebooks e Pipelines é necessária a função Contributor ou superior. — implementa corretamente o requisito técnico para este cenário de iniciante.",
      "puloDoGato": "Q272 trigger: palavras-chave em 'Manter a solução analítica' indicam iniciante profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve iniciante requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Manter a solução analítica completo.",
        "Opção C: padrão alternativo válido mas não otimizado para iniciante proficiency."
      ],
      "dicaOuro": "Q272 diferenciar: este conceito iniciante de Manter a solução analítica é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q273",
    "text": "O que acontece quando você tenta escrever um DataFrame PySpark com schema diferente em uma tabela Delta existente sem usar `mergeSchema`?",
    "options": [
      "O Delta Lake aceita automaticamente o novo schema e atualiza os metadados da tabela, preenchendo colunas ausentes com nulos nos registros anteriores.",
      "O Delta Lake lança uma `AnalysisException` indicando incompatibilidade de schema, bloqueando a escrita para proteger a integridade dos dados; é necessário usar `.option(\"mergeSchema\", \"true\")` ou corrigir o schema do DataFrame.",
      "O Delta Lake ignora as colunas extras do DataFrame e persiste apenas as colunas existentes no schema atual da tabela.",
      "O Delta Lake cria uma nova versão da tabela com o schema atualizado, mantendo a versão anterior acessível via time travel."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Notebook Spark (intermediario): O Delta Lake lança uma `AnalysisException` indicando incompatibilidade... Esta abordagem integra Spark com Fabric nativo.",
      "respostaCerta": "O Delta Lake lança uma `AnalysisException` indicando incompatibilidade de schema, bloqueando a escrita para proteger a integridade dos dados; é necessário usar `.option(\"mergeSchema\", \"true\")` ou corrigir o schema do DataFrame. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Q273 trigger: palavras-chave em 'Preparar e servir dados' indicam intermediario profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve intermediario requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Preparar e servir dados completo.",
        "Opção C: padrão alternativo válido mas não otimizado para intermediario proficiency."
      ],
      "dicaOuro": "Q273 diferenciar: este conceito intermediario de Preparar e servir dados é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q274",
    "text": "Em um modelo semântico em modo DirectQuery conectado a um Warehouse do Fabric, como o motor gerencia múltiplas consultas simultâneas de diferentes usuários?",
    "options": [
      "O motor mantém um pool de conexões ao Warehouse e distribui as queries geradas pelo DAX entre as conexões disponíveis; a capacity Fabric determina o grau de concorrência suportado com base nos CUs disponíveis.",
      "Cada usuário recebe uma conexão dedicada e exclusiva ao Warehouse que persiste durante toda a sessão de relatório.",
      "O modelo cria automaticamente réplicas de leitura do Warehouse para distribuir a carga entre múltiplos endpoints de conexão.",
      "As queries são enfileiradas e executadas sequencialmente por um único thread de conexão para evitar conflitos de leitura no Warehouse."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "No contexto do DP-600, implementar e gerenciar modelo semântico exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em KQL (avancado): O motor mantém um pool de conexões ao Warehouse e distribui as queries... Esta syntax é Kusto query language nativa.",
      "respostaCerta": "O motor mantém um pool de conexões ao Warehouse e distribui as queries geradas pelo DAX entre as conexões disponíveis; a capacity Fabric determina o grau de concorrência suportado com base nos CUs disponíveis. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q274 trigger: palavras-chave em 'Implementar e gerenciar modelo semântico' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Implementar e gerenciar modelo semântico completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q274 diferenciar: este conceito avancado de Implementar e gerenciar modelo semântico é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q275",
    "text": "Qual é a abordagem recomendada para ingestão de dados de streaming em um Lakehouse do Fabric com baixa latência e garantia de entrega?",
    "options": [
      "Usar um Dataflow Gen2 em modo streaming que processa eventos em tempo real e grava no Lakehouse com latência de segundos.",
      "Usar Eventstream para capturar os eventos da fonte (Event Hub, IoT Hub) e rotear diretamente para o Lakehouse como destino, ou usar Structured Streaming em notebooks PySpark com checkpointing para garantia de exatamente-uma-vez.",
      "Usar um Data Pipeline com trigger de evento agendado a cada minuto que copia os dados da fila de mensagens para o Lakehouse em micro-batches.",
      "Usar Azure Stream Analytics conectado diretamente ao Lakehouse via Shortcut do OneLake para processar e persistir eventos."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Preparar e servir dados (avancado): Usar Eventstream para capturar os eventos da fonte (Event Hub, IoT Hub... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "Usar Eventstream para capturar os eventos da fonte (Event Hub, IoT Hub) e rotear diretamente para o Lakehouse como destino, ou usar Structured Streaming em notebooks PySpark com checkpointing para garantia de exatamente-uma-vez. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q275 trigger: palavras-chave em 'Preparar e servir dados' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Preparar e servir dados completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q275 diferenciar: este conceito avancado de Preparar e servir dados é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q276",
    "text": "Como as Sensitivity Labels são herdadas entre itens relacionados no Microsoft Fabric?",
    "options": [
      "A herança de labels ocorre apenas quando os itens estão no mesmo workspace; itens em workspaces diferentes não herdam classificações.",
      "Quando dados fluem de um item para outro (ex: Lakehouse para modelo semântico para relatório), a label mais restritiva é propagada automaticamente downstream, garantindo que a classificação de proteção acompanhe os dados.",
      "A label do item downstream sempre prevalece sobre a do upstream; o administrador define a label final independente da fonte.",
      "Sensitivity Labels não são herdadas automaticamente; cada item deve ser classificado manualmente pelo administrador de dados."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "No contexto do DP-600, manter a solução analítica exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Manter a solução analítica (intermediario): Quando dados fluem de um item para outro (ex: Lakehouse para modelo se... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "Quando dados fluem de um item para outro (ex: Lakehouse para modelo semântico para relatório), a label mais restritiva é propagada automaticamente downstream, garantindo que a classificação de proteção acompanhe os dados. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Q276 trigger: palavras-chave em 'Manter a solução analítica' indicam intermediario profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve intermediario requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Manter a solução analítica completo.",
        "Opção C: padrão alternativo válido mas não otimizado para intermediario proficiency."
      ],
      "dicaOuro": "Q276 diferenciar: este conceito intermediario de Manter a solução analítica é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q277",
    "text": "Por que a criação de estatísticas de coluna é importante no Warehouse do Fabric e como você as cria manualmente?",
    "options": [
      "Estatísticas ajudam o otimizador de consultas a gerar planos de execução eficientes; podem ser criadas com `CREATE STATISTICS nome ON tabela(coluna)` ou via `UPDATE STATISTICS tabela` para atualizar as existentes.",
      "Estatísticas no Fabric Warehouse são criadas e atualizadas automaticamente pelo motor sem necessidade de intervenção manual.",
      "Estatísticas de coluna são configuradas no modelo semântico via propriedade \"Column Statistics\" e propagadas para o Warehouse automaticamente.",
      "Estatísticas são necessárias apenas para tabelas com mais de 100 milhões de linhas; tabelas menores são otimizadas por varredura completa."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Preparar e servir dados (avancado): Estatísticas ajudam o otimizador de consultas a gerar planos de execuç... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "Estatísticas ajudam o otimizador de consultas a gerar planos de execução eficientes; podem ser criadas com `CREATE STATISTICS nome ON tabela(coluna)` ou via `UPDATE STATISTICS tabela` para atualizar as existentes. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q277 trigger: palavras-chave em 'Preparar e servir dados' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Preparar e servir dados completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q277 diferenciar: este conceito avancado de Preparar e servir dados é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q278",
    "text": "Para que serve a função DAX `USERCULTURE()` em modelos semânticos do Fabric?",
    "options": [
      "Retorna o código do país de cobrança da licença do usuário, usado para aplicar conversões de moeda baseadas na localização da conta.",
      "Retorna o idioma padrão do tenant Azure, usado para traduzir automaticamente rótulos de medidas para o idioma da organização.",
      "Retorna o fuso horário configurado pelo usuário no Microsoft 365, permitindo ajustar datas e horas exibidas no relatório.",
      "Retorna o código de cultura/locale do usuário atual (ex: \"pt-BR\", \"en-US\"), permitindo criar medidas que adaptam formatação, separadores decimais e moeda conforme a localização do usuário que acessa o relatório."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "No contexto do DP-600, implementar e gerenciar modelo semântico exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Função DAX Implementar e gerenciar modelo semântico: Retorna o código de cultura/locale do usuário atual (ex: \"pt-BR\", \"en-... Esta abordagem resolve avancado requisito com syntax nativa.",
      "respostaCerta": "Retorna o código de cultura/locale do usuário atual (ex: \"pt-BR\", \"en-US\"), permitindo criar medidas que adaptam formatação, separadores decimais e moeda conforme a localização do usuário que acessa o relatório. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q278 trigger: palavras-chave em 'Implementar e gerenciar modelo semântico' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Implementar e gerenciar modelo semântico completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q278 diferenciar: este conceito avancado de Implementar e gerenciar modelo semântico é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q279",
    "text": "Em KQL, qual função é usada para preencher lacunas temporais em séries temporais, garantindo um registro para cada intervalo de tempo mesmo quando não há dados?",
    "options": [
      "`make-series` com o operador `default=0` (ou outro valor), como em `Tabela | make-series count() default=0 on timestamp from inicio to fim step 1h by categoria`",
      "`fill-gaps` com `Tabela | fill-gaps timestamp step=1h value=0`",
      "`extend-series` com parâmetro `fill_value=0` que preenche automaticamente lacunas em qualquer série temporal detectada.",
      "`summarize` com `bin()` combinado com `union` de uma tabela de intervalos gerada por `range` para garantir cobertura completa."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em KQL (avancado): `make-series` com o operador `default=0` (ou outro valor), como em `Ta... Esta syntax é Kusto query language nativa.",
      "respostaCerta": "`make-series` com o operador `default=0` (ou outro valor), como em `Tabela | make-series count() default=0 on timestamp from inicio to fim step 1h by categoria` — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q279 trigger: palavras-chave em 'Preparar e servir dados' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Preparar e servir dados completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q279 diferenciar: este conceito avancado de Preparar e servir dados é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q280",
    "text": "Como você agenda a execução automática de um Notebook no Microsoft Fabric sem usar um Data Pipeline?",
    "options": [
      "Usando o Power Automate com o conector do Microsoft Fabric para disparar o notebook conforme agendamento de fluxo.",
      "Não é possível agendar notebooks diretamente; sempre é necessário um Data Pipeline com atividade Notebook para execução agendada.",
      "Usando a funcionalidade de agendamento nativa do Notebook, acessível pelo botão \"Schedule\" na interface do notebook, que permite configurar frequência, horário e fuso horário diretamente.",
      "Criando um trigger de tempo no Azure Logic Apps que chama a API REST do Fabric para executar o notebook no horário configurado."
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "No contexto do DP-600, manter a solução analítica exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Notebook Spark (iniciante): Usando a funcionalidade de agendamento nativa do Notebook, acessível p... Esta abordagem integra Spark com Fabric nativo.",
      "respostaCerta": "Usando a funcionalidade de agendamento nativa do Notebook, acessível pelo botão \"Schedule\" na interface do notebook, que permite configurar frequência, horário e fuso horário diretamente. — implementa corretamente o requisito técnico para este cenário de iniciante.",
      "puloDoGato": "Q280 trigger: palavras-chave em 'Manter a solução analítica' indicam iniciante profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve iniciante requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Manter a solução analítica completo.",
        "Opção C: padrão alternativo válido mas não otimizado para iniciante proficiency."
      ],
      "dicaOuro": "Q280 diferenciar: este conceito iniciante de Manter a solução analítica é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q281",
    "text": "O que é o Change Data Feed (CDF) do Delta Lake e como ele é habilitado em um Lakehouse do Fabric?",
    "options": [
      "O CDF é habilitado automaticamente pelo Fabric em todas as tabelas Delta criadas via notebooks para suportar refreshes incrementais de modelos semânticos.",
      "O CDF é um pipeline de captura de dados de mudança que monitora fontes externas e sincroniza com o Lakehouse automaticamente via Mirroring.",
      "O CDF registra as alterações linha a linha (INSERT, UPDATE, DELETE) em uma tabela Delta, permitindo processamento incremental eficiente; habilitado com `ALTER TABLE nome SET TBLPROPERTIES ('delta.enableChangeDataFeed' = 'true')` ou na criação com `TBLPROPERTIES`.",
      "O CDF é uma funcionalidade do Eventstream que captura mudanças em tabelas KQL do Eventhouse e as replica para o Lakehouse em formato Delta."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Preparar e servir dados (avancado): O CDF registra as alterações linha a linha (INSERT, UPDATE, DELETE) em... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "O CDF registra as alterações linha a linha (INSERT, UPDATE, DELETE) em uma tabela Delta, permitindo processamento incremental eficiente; habilitado com `ALTER TABLE nome SET TBLPROPERTIES ('delta.enableChangeDataFeed' = 'true')` ou na criação com `TBLPROPERTIES`. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q281 trigger: palavras-chave em 'Preparar e servir dados' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Preparar e servir dados completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q281 diferenciar: este conceito avancado de Preparar e servir dados é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q282",
    "text": "Em um modelo semântico com relacionamento many-to-many entre Vendas e Produtos via tabela ponte, qual configuração de CROSSFILTER é recomendada para evitar dupla contagem em medidas?",
    "options": [
      "Configurar filtragem bidirecional (both) entre todas as tabelas do modelo para garantir que slicers em qualquer tabela filtrem todas as demais corretamente.",
      "Desabilitar o relacionamento M:N e usar medidas DAX com TREATAS para simular o join apenas quando necessário em medidas específicas.",
      "Usar o modo Direct Lake que resolve automaticamente relacionamentos M:N sem necessidade de tabela ponte ou configuração de CROSSFILTER.",
      "Configurar a direção de filtragem como unidirecional (single) da dimensão para a fatos, garantindo que filtros aplicados na dimensão filtrem a tabela de fatos corretamente sem propagar filtros em sentido contrário que causariam dupla contagem."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "No contexto do DP-600, implementar e gerenciar modelo semântico exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Implementar e gerenciar modelo semântico (avancado): Configurar a direção de filtragem como unidirecional (single) da dimen... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "Configurar a direção de filtragem como unidirecional (single) da dimensão para a fatos, garantindo que filtros aplicados na dimensão filtrem a tabela de fatos corretamente sem propagar filtros em sentido contrário que causariam dupla contagem. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q282 trigger: palavras-chave em 'Implementar e gerenciar modelo semântico' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Implementar e gerenciar modelo semântico completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q282 diferenciar: este conceito avancado de Implementar e gerenciar modelo semântico é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q283",
    "text": "Em um Data Pipeline do Fabric com múltiplas atividades sequenciais, como você implementa reexecução apenas das atividades que falharam sem reprocessar as que já foram concluídas com sucesso?",
    "options": [
      "Duplicando o pipeline e removendo manualmente as atividades já concluídas antes de reexecutar o pipeline modificado.",
      "Usando a funcionalidade \"Rerun from failed activity\" disponível no Monitor Hub após a falha, que reexecuta o pipeline a partir da atividade com falha preservando os resultados das atividades anteriores bem-sucedidas.",
      "Implementando uma tabela de controle no Warehouse que registra o status de cada atividade e usando atividades \"If Condition\" no pipeline para pular atividades já concluídas.",
      "Usando a propriedade \"Skip on Success\" em cada atividade que verifica automaticamente se o resultado já existe antes de reexecutar."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Preparar e servir dados (intermediario): Usando a funcionalidade \"Rerun from failed activity\" disponível no Mon... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "Usando a funcionalidade \"Rerun from failed activity\" disponível no Monitor Hub após a falha, que reexecuta o pipeline a partir da atividade com falha preservando os resultados das atividades anteriores bem-sucedidas. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Q283 trigger: palavras-chave em 'Preparar e servir dados' indicam intermediario profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve intermediario requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Preparar e servir dados completo.",
        "Opção C: padrão alternativo válido mas não otimizado para intermediario proficiency."
      ],
      "dicaOuro": "Q283 diferenciar: este conceito intermediario de Preparar e servir dados é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q284",
    "text": "Quais permissões de tenant precisam ser habilitadas no Admin Portal do Fabric para que Service Principals possam usar as APIs do Fabric?",
    "options": [
      "Service Principals não requerem configuração no Admin Portal; basta adicioná-los ao workspace com função Member ou superior.",
      "As configurações \"Service principals can use Fabric APIs\" e \"Service principals can access read-only admin APIs\" devem ser habilitadas no Admin Portal, podendo ser restritas a grupos de segurança específicos do Entra ID.",
      "Service Principals precisam ser registrados individualmente no Microsoft Purview antes de usar as APIs do Fabric por requisito de auditoria.",
      "Apenas a configuração \"Allow OAuth authentication\" precisa ser habilitada para que Service Principals se autentiquem via token nas APIs do Fabric."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "No contexto do DP-600, manter a solução analítica exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em contexto Manter a solução analítica, o endpoint correto é: As configurações \"Service principals can use Fabric APIs\" e \"Service p... Este é padrão nativo Fabric API v1 para avancado proficiency.",
      "respostaCerta": "As configurações \"Service principals can use Fabric APIs\" e \"Service principals can access read-only admin APIs\" devem ser habilitadas no Admin Portal, podendo ser restritas a grupos de segurança específicos do Entra ID. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q284 trigger: palavras-chave em 'Manter a solução analítica' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Manter a solução analítica completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q284 diferenciar: este conceito avancado de Manter a solução analítica é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q285",
    "text": "Qual é a prática recomendada para evitar problemas de concorrência ao escrever em uma tabela Delta de um Lakehouse a partir de múltiplos notebooks simultaneamente?",
    "options": [
      "Configurar um mutex distribuído via Azure Redis Cache que os notebooks adquirem antes de escrever e liberam após a conclusão.",
      "Criar uma tabela de staging separada para cada notebook e usar um pipeline mestre que consolida as stagings na tabela final sequencialmente.",
      "Usar `df.write.format(\"delta\").mode(\"append\").option(\"txnVersion\", unique_id)` para garantir que cada escrita tenha um ID de transação único e não conflite.",
      "O Delta Lake usa controle de concorrência otimista com detecção de conflitos; para evitar erros, deve-se usar operações MERGE em vez de overwrite, ou implementar particionamento que garanta que cada notebook escreva em partições diferentes sem sobreposição."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Preparar e servir dados (intermediario): O Delta Lake usa controle de concorrência otimista com detecção de con... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "O Delta Lake usa controle de concorrência otimista com detecção de conflitos; para evitar erros, deve-se usar operações MERGE em vez de overwrite, ou implementar particionamento que garanta que cada notebook escreva em partições diferentes sem sobreposição. — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Q285 trigger: palavras-chave em 'Preparar e servir dados' indicam intermediario profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve intermediario requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Preparar e servir dados completo.",
        "Opção C: padrão alternativo válido mas não otimizado para intermediario proficiency."
      ],
      "dicaOuro": "Q285 diferenciar: este conceito intermediario de Preparar e servir dados é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q286",
    "text": "Quando é mais apropriado usar `GROUPBY()` em vez de `SUMMARIZE()` em uma expressão DAX?",
    "options": [
      "`GROUPBY()` é usado exclusivamente em queries DAX externas via XMLA; `SUMMARIZE()` é a única opção disponível em medidas e colunas calculadas.",
      "`GROUPBY()` é sempre preferível ao `SUMMARIZE()` pois executa no contexto de linha, sendo mais eficiente para agregações em tabelas grandes.",
      "`GROUPBY()` suporta agrupamento por colunas de tabelas não relacionadas; `SUMMARIZE()` exige que todas as colunas de agrupamento venham de tabelas com relacionamento no modelo.",
      "`GROUPBY()` é mais adequado quando se precisa usar funções de agregação de contexto de linha como `CURRENTGROUP()` combinadas com iteradores X (SUMX, AVERAGEX) sobre os grupos; `SUMMARIZE()` não suporta diretamente essas funções de grupo."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "No contexto do DP-600, implementar e gerenciar modelo semântico exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Função DAX Implementar e gerenciar modelo semântico: `GROUPBY()` é mais adequado quando se precisa usar funções de agregaçã... Esta abordagem resolve avancado requisito com syntax nativa.",
      "respostaCerta": "`GROUPBY()` é mais adequado quando se precisa usar funções de agregação de contexto de linha como `CURRENTGROUP()` combinadas com iteradores X (SUMX, AVERAGEX) sobre os grupos; `SUMMARIZE()` não suporta diretamente essas funções de grupo. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q286 trigger: palavras-chave em 'Implementar e gerenciar modelo semântico' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Implementar e gerenciar modelo semântico completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q286 diferenciar: este conceito avancado de Implementar e gerenciar modelo semântico é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q287",
    "text": "No Warehouse do Fabric, como você analisa o plano de execução de uma query T-SQL para identificar operações custosas?",
    "options": [
      "Acessando o Azure Monitor e consultando a tabela `QueryStoreRuntimeStats` do Warehouse para histórico de planos de execução.",
      "Conectando o SQL Server Management Studio (SSMS) ao SQL Analytics Endpoint e usando \"Include Actual Execution Plan\" (Ctrl+M).",
      "Usando `EXPLAIN` antes da query ou habilitando o Query Insights do Fabric Warehouse, que exibe o plano de execução distribuído e métricas de custo por operador para otimização.",
      "Usando `SET STATISTICS IO, TIME ON` antes da query, que exibe métricas de I/O e tempo de execução por operação no Fabric Warehouse."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em T-SQL Warehouse (avancado): Usando `EXPLAIN` antes da query ou habilitando o Query Insights do Fab... Esta syntax é padrão SQL Server nativo no Fabric.",
      "respostaCerta": "Usando `EXPLAIN` antes da query ou habilitando o Query Insights do Fabric Warehouse, que exibe o plano de execução distribuído e métricas de custo por operador para otimização. — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q287 trigger: palavras-chave em 'Preparar e servir dados' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Preparar e servir dados completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q287 diferenciar: este conceito avancado de Preparar e servir dados é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q288",
    "text": "Ao preparar dados para consumo analítico em Fabric, qual é a principal vantagem de padronizar nomes de colunas e tipos de dados logo nas primeiras etapas do pipeline?",
    "options": [
      "Reduzir inconsistências e facilitar transformações, modelagem e consumo posterior",
      "Substituir políticas de segurança",
      "Eliminar necessidade de refresh",
      "Impedir uso de semantic models"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Preparar e servir dados (intermediario): Reduzir inconsistências e facilitar transformações, modelagem e consum... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "Reduzir inconsistências e facilitar transformações, modelagem e consumo posterior — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Q288 trigger: palavras-chave em 'Preparar e servir dados' indicam intermediario profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve intermediario requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Preparar e servir dados completo.",
        "Opção C: padrão alternativo válido mas não otimizado para intermediario proficiency."
      ],
      "dicaOuro": "Q288 diferenciar: este conceito intermediario de Preparar e servir dados é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q289",
    "text": "Em uma tabela analítica muito grande, por que pensar em particionamento pode ser importante?",
    "options": [
      "Porque só serve para dashboards estáticos",
      "Porque pode melhorar leitura, manutenção e atualização ao organizar melhor o acesso aos dados",
      "Porque remove qualquer custo de consulta",
      "Porque substitui índices e modelagem"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Preparar e servir dados (intermediario): Porque pode melhorar leitura, manutenção e atualização ao organizar me... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "Porque pode melhorar leitura, manutenção e atualização ao organizar melhor o acesso aos dados — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Q289 trigger: palavras-chave em 'Preparar e servir dados' indicam intermediario profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve intermediario requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Preparar e servir dados completo.",
        "Opção C: padrão alternativo válido mas não otimizado para intermediario proficiency."
      ],
      "dicaOuro": "Q289 diferenciar: este conceito intermediario de Preparar e servir dados é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q290",
    "text": "Uma equipe repete a mesma lógica de limpeza em diversos fluxos de dados. Qual prática tende a melhorar manutenção da solução?",
    "options": [
      "Evitar documentação técnica",
      "Resolver apenas no relatório",
      "Duplicar toda a lógica em cada projeto",
      "Reaproveitar e padronizar a lógica de transformação sempre que possível"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Preparar e servir dados (intermediario): Reaproveitar e padronizar a lógica de transformação sempre que possíve... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "Reaproveitar e padronizar a lógica de transformação sempre que possível — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Q290 trigger: palavras-chave em 'Preparar e servir dados' indicam intermediario profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve intermediario requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Preparar e servir dados completo.",
        "Opção C: padrão alternativo válido mas não otimizado para intermediario proficiency."
      ],
      "dicaOuro": "Q290 diferenciar: este conceito intermediario de Preparar e servir dados é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q291",
    "text": "Em qual cenário incremental refresh tende a trazer mais benefício?",
    "options": [
      "Quando a tabela é muito pequena e estática",
      "Quando não existe calendário",
      "Quando se deseja remover partições",
      "Quando o volume histórico é grande, mas apenas uma parte recente dos dados muda com frequência"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "No contexto do DP-600, implementar e gerenciar modelo semântico exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Implementar e gerenciar modelo semântico (intermediario): Quando o volume histórico é grande, mas apenas uma parte recente dos d... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "Quando o volume histórico é grande, mas apenas uma parte recente dos dados muda com frequência — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Q291 trigger: palavras-chave em 'Implementar e gerenciar modelo semântico' indicam intermediario profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve intermediario requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Implementar e gerenciar modelo semântico completo.",
        "Opção C: padrão alternativo válido mas não otimizado para intermediario proficiency."
      ],
      "dicaOuro": "Q291 diferenciar: este conceito intermediario de Implementar e gerenciar modelo semântico é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q292",
    "text": "O que melhor descreve o refresh no contexto de Direct Lake?",
    "options": [
      "Um mecanismo que substitui modelagem semântica",
      "Um processo exclusivo de notebooks",
      "Uma cópia completa obrigatória de todos os dados para CSV",
      "Uma operação de baixo custo que analisa metadados e atualiza referências para a versão mais recente das tabelas Delta"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "No contexto do DP-600, implementar e gerenciar modelo semântico exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Implementar e gerenciar modelo semântico (intermediario): Uma operação de baixo custo que analisa metadados e atualiza referênci... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "Uma operação de baixo custo que analisa metadados e atualiza referências para a versão mais recente das tabelas Delta — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Q292 trigger: palavras-chave em 'Implementar e gerenciar modelo semântico' indicam intermediario profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve intermediario requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Implementar e gerenciar modelo semântico completo.",
        "Opção C: padrão alternativo válido mas não otimizado para intermediario proficiency."
      ],
      "dicaOuro": "Q292 diferenciar: este conceito intermediario de Implementar e gerenciar modelo semântico é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q293",
    "text": "Qual prática melhora a usabilidade de um modelo semântico para autores de relatório?",
    "options": [
      "Evitar descrições e pastas de exibição",
      "Organizar medidas, nomes amigáveis e estrutura lógica de tabelas e campos",
      "Misturar métricas e chaves sem padrão",
      "Expor todas as colunas técnicas sem curadoria"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Implementar e gerenciar modelo semântico",
    "explanation": {
      "intro": "No contexto do DP-600, implementar e gerenciar modelo semântico exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Implementar e gerenciar modelo semântico (intermediario): Organizar medidas, nomes amigáveis e estrutura lógica de tabelas e cam... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "Organizar medidas, nomes amigáveis e estrutura lógica de tabelas e campos — implementa corretamente o requisito técnico para este cenário de intermediario.",
      "puloDoGato": "Q293 trigger: palavras-chave em 'Implementar e gerenciar modelo semântico' indicam intermediario profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve intermediario requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Implementar e gerenciar modelo semântico completo.",
        "Opção C: padrão alternativo válido mas não otimizado para intermediario proficiency."
      ],
      "dicaOuro": "Q293 diferenciar: este conceito intermediario de Implementar e gerenciar modelo semântico é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q294",
    "text": "Em deployment pipelines, por que entender o efeito de um clean deployment é importante?",
    "options": [
      "Porque determinados artefatos e configurações podem ser recriados ou impactados durante a promoção entre ambientes",
      "Porque clean deployment apenas muda o tema visual",
      "Porque substitui análise de impacto",
      "Porque nunca afeta tabelas"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "No contexto do DP-600, manter a solução analítica exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Manter a solução analítica (avancado): Porque determinados artefatos e configurações podem ser recriados ou i... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "Porque determinados artefatos e configurações podem ser recriados ou impactados durante a promoção entre ambientes — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q294 trigger: palavras-chave em 'Manter a solução analítica' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Manter a solução analítica completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q294 diferenciar: este conceito avancado de Manter a solução analítica é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q295",
    "text": "Em uma estratégia de CI/CD para conteúdo analítico Fabric, qual é um objetivo central?",
    "options": [
      "Eliminar versionamento",
      "Garantir promoção controlada, repetível e rastreável de mudanças entre ambientes",
      "Substituir testes por refresh manual",
      "Publicar alterações diretamente em produção sem validação"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "No contexto do DP-600, manter a solução analítica exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Manter a solução analítica (avancado): Garantir promoção controlada, repetível e rastreável de mudanças entre... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "Garantir promoção controlada, repetível e rastreável de mudanças entre ambientes — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q295 trigger: palavras-chave em 'Manter a solução analítica' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Manter a solução analítica completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q295 diferenciar: este conceito avancado de Manter a solução analítica é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q296",
    "text": "Um conjunto de relatórios começou a retornar números divergentes após mudança em uma tabela upstream. Qual deve ser a prioridade do engenheiro analítico?",
    "options": [
      "Ignorar porque o pipeline concluiu com sucesso",
      "Trocar todos os visuais do relatório",
      "Investigar a origem da divergência, dependências afetadas e restaurar consistência antes de ampliar mudanças",
      "Remover medidas DAX"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Manter a solução analítica",
    "explanation": {
      "intro": "No contexto do DP-600, manter a solução analítica exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Manter a solução analítica (avancado): Investigar a origem da divergência, dependências afetadas e restaurar ... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "Investigar a origem da divergência, dependências afetadas e restaurar consistência antes de ampliar mudanças — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q296 trigger: palavras-chave em 'Manter a solução analítica' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Manter a solução analítica completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q296 diferenciar: este conceito avancado de Manter a solução analítica é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q297",
    "text": "Em uma solução com múltiplas áreas de negócio compartilhando a mesma plataforma Fabric, qual princípio ajuda a equilibrar colaboração e proteção?",
    "options": [
      "Impedir qualquer compartilhamento entre áreas",
      "Dar acesso irrestrito a todos os workspaces",
      "Segmentar acesso com governança clara, mantendo compartilhamento controlado e menor privilégio",
      "Basear permissões apenas em nomes de arquivos"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Segurança e governança",
    "explanation": {
      "intro": "No contexto do DP-600, segurança e governança exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Segurança e governança (avancado): Segmentar acesso com governança clara, mantendo compartilhamento contr... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "Segmentar acesso com governança clara, mantendo compartilhamento controlado e menor privilégio — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q297 trigger: palavras-chave em 'Segurança e governança' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Segurança e governança completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q297 diferenciar: este conceito avancado de Segurança e governança é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q298",
    "text": "Por que um ativo certificado também precisa de revisão periódica, mesmo já sendo considerado confiável?",
    "options": [
      "Porque certificação substitui monitoramento",
      "Porque itens certificados não podem ser usados em produção",
      "Porque fontes, regras de negócio e dependências podem mudar ao longo do tempo",
      "Porque certificação expira sempre no mesmo dia"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Segurança e governança",
    "explanation": {
      "intro": "No contexto do DP-600, segurança e governança exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Segurança e governança (avancado): Porque fontes, regras de negócio e dependências podem mudar ao longo d... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "Porque fontes, regras de negócio e dependências podem mudar ao longo do tempo — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q298 trigger: palavras-chave em 'Segurança e governança' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Segurança e governança completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q298 diferenciar: este conceito avancado de Segurança e governança é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q299",
    "text": "Em projetos DP-600, por que segurança e governança devem ser planejadas desde o início e não apenas no final?",
    "options": [
      "Porque governança serve apenas para auditorias finais",
      "Porque segurança não depende da arquitetura",
      "Porque permissões podem sempre ser ignoradas no desenvolvimento",
      "Porque decisões de ingestão, modelagem, compartilhamento e ciclo de vida já afetam risco, conformidade e operação desde o desenho da solução"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Segurança e governança",
    "explanation": {
      "intro": "No contexto do DP-600, segurança e governança exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Segurança e governança (avancado): Porque decisões de ingestão, modelagem, compartilhamento e ciclo de vi... Esta abordagem resolve cenário DP-600 específico.",
      "respostaCerta": "Porque decisões de ingestão, modelagem, compartilhamento e ciclo de vida já afetam risco, conformidade e operação desde o desenho da solução — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q299 trigger: palavras-chave em 'Segurança e governança' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Segurança e governança completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q299 diferenciar: este conceito avancado de Segurança e governança é específico Fabric — não versão antiga Power BI."
    }
  },
  {
    "id": "dp600_q300",
    "text": "Você precisa construir um pipeline incremental que processe apenas as linhas inseridas, atualizadas ou deletadas em uma tabela Delta do Lakehouse desde a última execução. Qual recurso do Delta Lake deve ser habilitado e como você lê apenas as alterações em PySpark?",
    "options": [
      "Usar `DESCRIBE HISTORY nome_tabela` para identificar as versões novas e reprocessar a tabela completa filtrando por `_commit_timestamp` maior que a última execução.",
      "Habilitar o Change Data Feed (CDF) com `ALTER TABLE nome SET TBLPROPERTIES ('delta.enableChangeDataFeed' = 'true')` e ler as alterações com `spark.read.format(\"delta\").option(\"readChangeFeed\", \"true\").option(\"startingVersion\", ultima_versao).table(\"nome_tabela\")`",
      "Usar `spark.read.format(\"delta\").option(\"versionAsOf\", ultima_versao).table(\"nome_tabela\")`",
      "Habilitar o Incremental Refresh nas propriedades do Lakehouse no portal Fabric, que automaticamente expõe as alterações Delta como stream consumível via `spark.readStream`."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Preparar e servir dados",
    "explanation": {
      "intro": "No contexto do DP-600, preparar e servir dados exige escolhas técnicas precisas alinhadas com best practices do Fabric.",
      "papoReto": "Em Notebook Spark (avancado): Habilitar o Change Data Feed (CDF) com `ALTER TABLE nome SET TBLPROPER... Esta abordagem integra Spark com Fabric nativo.",
      "respostaCerta": "Habilitar o Change Data Feed (CDF) com `ALTER TABLE nome SET TBLPROPERTIES ('delta.enableChangeDataFeed' = 'true')` e ler as alterações com `spark.read.format(\"delta\").option(\"readChangeFeed\", \"true\").option(\"startingVersion\", ultima_versao).table(\"nome_tabela\")` — implementa corretamente o requisito técnico para este cenário de avancado.",
      "puloDoGato": "Q300 trigger: palavras-chave em 'Preparar e servir dados' indicam avancado profundidade — selecione resposta com sintaxe native Fabric.",
      "cascasDeBanana": [
        "Opção A: confusão comum com versão antigo ou sintaxe incorreta — não resolve avancado requisito.",
        "Opção B: parcialmente correto mas não endereça cenário Preparar e servir dados completo.",
        "Opção C: padrão alternativo válido mas não otimizado para avancado proficiency."
      ],
      "dicaOuro": "Q300 diferenciar: este conceito avancado de Preparar e servir dados é específico Fabric — não versão antiga Power BI."
    }
  }
];
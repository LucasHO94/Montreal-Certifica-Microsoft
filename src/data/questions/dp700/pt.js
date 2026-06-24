export const questions = [
  {
    "id": "dp700_q1",
    "text": "No Microsoft Fabric, onde você configura as propriedades do ambiente Spark de um workspace, como o pool de nós e a versão do runtime?",
    "options": [
      "No Admin Portal do Fabric tenant, na seção \"Capacity Settings\", que define as configurações Spark globais aplicadas a todos os workspaces.",
      "Nas configurações do workspace, seção \"Data Engineering/Science\" > \"Spark settings\", onde é possível definir o runtime Spark, configurar pools de nós personalizados e habilitar High Concurrency mode.",
      "No Azure Portal, na seção \"Spark Pools\" do recurso Fabric associado ao workspace, onde os pools são criados e versionados independentemente.",
      "Dentro de cada Notebook individualmente, usando a célula `%%configure` que aplica configurações Spark apenas ao workspace atual."
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Implementar e gerenciar uma solução analítica",
    "explanation": {
      "respostaCerta": "Nas configurações do workspace, seção \"Data Engineering/Science\" > \"Spark settings\", onde é possível definir o runtime Spark, configurar pools de nós personalizados e habilitar High Concurrency mode.",
      "intro": "Entendendo High Concurrency e session sharing em Spark",
      "papoReto": "Nas configurações do workspace, seção \"Data Engineering/Science\" > \"Spark settings\", onde é possível definir o runtime Spark, configurar pools de nós personalizados e habilitar High Concurrency mode. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "No Admin Portal do Fabric tenant, na seção \"Capacity Settings\", que define as configurações Spark globais aplicadas a todos os workspaces.: Esta opção contém erro técnico ou implementação não recomendada",
        "No Azure Portal, na seção \"Spark Pools\" do recurso Fabric associado ao workspace, onde os pools são criados e versionados independentemente.: Esta opção contém erro técnico ou implementação não recomendada",
        "Dentro de cada Notebook individualmente, usando a célula `%%configure` que aplica configurações Spark apenas ao workspace atual.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q2",
    "text": "O que é o modo High Concurrency em workspaces Fabric e qual é seu benefício principal para engenheiros de dados?",
    "options": [
      "Aumenta automaticamente o número de executores Spark durante picos de processamento para garantir SLA de tempo de execução configurado pelo administrador.",
      "Permite que múltiplos usuários editem o mesmo notebook simultaneamente sem conflitos de versão, similar ao Google Docs para código.",
      "Permite que múltiplos notebooks compartilhem a mesma sessão Spark ativa, reduzindo o tempo de inicialização de sessão e o consumo de CUs ao evitar a criação de sessões individuais para cada notebook executado em paralelo.",
      "Habilita a execução de notebooks em múltiplas capacities Fabric simultaneamente para distribuir a carga entre regiões geográficas."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Implementar e gerenciar uma solução analítica",
    "explanation": {
      "respostaCerta": "Permite que múltiplos notebooks compartilhem a mesma sessão Spark ativa, reduzindo o tempo de inicialização de sessão e o consumo de CUs ao evitar a criação de sessões individuais para cada notebook executado em paralelo.",
      "intro": "Entendendo High Concurrency e session sharing em Spark",
      "papoReto": "High Concurrency permite múltiplos notebooks compartilharem uma sessão Spark ativa, eliminando o overhead de inicializar JVM por notebook. Isso reduz cold starts e economiza CUs. Configurado em \"Data Engineering/Science\" > \"Spark settings\" no workspace.",
      "puloDoGato": "Múltiplos notebooks, 1 sessão compartilhada = economia de CUs e redução de latência",
      "cascasDeBanana": [
        "Admin Portal: controla políticas globais, não configurações Spark específicas de workspace",
        "Azure Portal: Fabric usa Spark serverless, sem pools clássicos do Azure",
        "%%configure: cria sessão isolada para aquele notebook, não compartilha"
      ],
      "dicaOuro": "High Concurrency = session sharing, não autoscaling"
    }
  },
  {
    "id": "dp700_q3",
    "text": "Quais configurações de OneLake podem ser ajustadas nas configurações de workspace do Microsoft Fabric?",
    "options": [
      "Gerenciamento de chaves de criptografia CMK (Customer Managed Keys) para cada workspace individualmente nas configurações de OneLake.",
      "Habilitação de OneLake integration para Eventhouses (espelhamento Delta), configuração de caching de Shortcuts e definição de regiões de armazenamento para novos itens criados no workspace.",
      "Definição da capacidade máxima de armazenamento em GB e configuração de políticas de retenção automática de arquivos antigos.",
      "Configuração de replicação geográfica automática entre regiões Azure para alta disponibilidade dos dados do workspace."
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Implementar e gerenciar uma solução analítica",
    "explanation": {
      "respostaCerta": "Habilitação de OneLake integration para Eventhouses (espelhamento Delta), configuração de caching de Shortcuts e definição de regiões de armazenamento para novos itens criados no workspace.",
      "intro": "Entendendo Shortcuts como virtual links vs. Mirror para cópias reais",
      "papoReto": "Habilitação de OneLake integration para Eventhouses (espelhamento Delta), configuração de caching de Shortcuts e definição de regiões de armazenamento para novos itens criados no workspace. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Gerenciamento de chaves de criptografia CMK (Customer Managed Keys) para cada workspace individualmente nas configurações de OneLake.: Esta opção contém erro técnico ou implementação não recomendada",
        "Definição da capacidade máxima de armazenamento em GB e configuração de políticas de retenção automática de arquivos antigos.: Esta opção contém erro técnico ou implementação não recomendada",
        "Configuração de replicação geográfica automática entre regiões Azure para alta disponibilidade dos dados do workspace.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q4",
    "text": "O que são as \"Data Workflow workspace settings\" no Microsoft Fabric e o que elas controlam?",
    "options": [
      "Configurações de billing e alocação de CUs específicos para pipelines e dataflows, separados dos recursos Spark do workspace.",
      "Políticas de aprovação para execuções de pipelines em ambientes de produção, exigindo revisão manual antes de cada deploy.",
      "Configurações que controlam o comportamento de Data Pipelines e Dataflows Gen2 no workspace, incluindo configurações de timeout, retry policies padrão e integração com recursos externos como Azure Key Vault para credenciais.",
      "Configurações visuais do canvas de Data Pipelines, como tema de cores, grid de alinhamento e tamanho padrão das atividades no editor gráfico."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Implementar e gerenciar uma solução analítica",
    "explanation": {
      "respostaCerta": "Configurações que controlam o comportamento de Data Pipelines e Dataflows Gen2 no workspace, incluindo configurações de timeout, retry policies padrão e integração com recursos externos como Azure Key Vault para credenciais.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Configurações que controlam o comportamento de Data Pipelines e Dataflows Gen2 no workspace, incluindo configurações de timeout, retry policies padrão e integração com recursos externos como Azure Key Vault para credenciais. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Configurações de billing e alocação de CUs específicos para pipelines e dataflows, separados dos recursos Spark do workspace.: Esta opção contém erro técnico ou implementação não recomendada",
        "Políticas de aprovação para execuções de pipelines em ambientes de produção, exigindo revisão manual antes de cada deploy.: Esta opção contém erro técnico ou implementação não recomendada",
        "Configurações visuais do canvas de Data Pipelines, como tema de cores, grid de alinhamento e tamanho padrão das atividades no editor gráfico.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q5",
    "text": "Ao configurar controle de versão Git para um workspace Fabric como engenheiro de dados, quais tipos de itens são sincronizados com o repositório?",
    "options": [
      "Todos os itens são sincronizados incluindo os dados das tabelas Delta, que são versionados como arquivos Parquet no repositório Git.",
      "Apenas relatórios Power BI e modelos semânticos são sincronizados; itens de engenharia de dados como notebooks e pipelines requerem exportação manual.",
      "Notebooks, Data Pipelines, Lakehouses (definição de metadados), Warehouses, Dataflows Gen2 e outros itens suportados são sincronizados como arquivos de definição JSON/TMDL no repositório Git configurado.",
      "Apenas itens marcados manualmente como \"version controlled\" pelo desenvolvedor são sincronizados; por padrão nenhum item é incluído."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Implementar e gerenciar uma solução analítica",
    "explanation": {
      "respostaCerta": "Notebooks, Data Pipelines, Lakehouses (definição de metadados), Warehouses, Dataflows Gen2 e outros itens suportados são sincronizados como arquivos de definição JSON/TMDL no repositório Git configurado.",
      "intro": "Entendendo Git integration e versionamento de artefatos",
      "papoReto": "Notebooks, Data Pipelines, Lakehouses (definição de metadados), Warehouses, Dataflows Gen2 e outros itens suportados são sincronizados como arquivos de definição JSON/TMDL no repositório Git configurado. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Todos os itens são sincronizados incluindo os dados das tabelas Delta, que são versionados como arquivos Parquet no repositório Git.: Esta opção contém erro técnico ou implementação não recomendada",
        "Apenas relatórios Power BI e modelos semânticos são sincronizados; itens de engenharia de dados como notebooks e pipelines requerem exportação manual.: Esta opção contém erro técnico ou implementação não recomendada",
        "Apenas itens marcados manualmente como \"version controlled\" pelo desenvolvedor são sincronizados; por padrão nenhum item é incluído.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q6",
    "text": "O que são Database Projects no Microsoft Fabric e qual é o fluxo de trabalho típico para um engenheiro de dados?",
    "options": [
      "Projetos baseados em SQL que definem objetos de banco de dados (tabelas, views, stored procedures) como scripts T-SQL versionados no Git, permitindo desenvolvimento declarativo com comparação de schema, publicação via deploy e integração com CI/CD pipelines.",
      "Templates de projeto que criam automaticamente a estrutura de um Warehouse com tabelas de fatos e dimensões baseados em um schema relacional importado.",
      "Projetos de gerenciamento de banco de dados que fazem backup automático e versionamento dos dados das tabelas Delta no repositório Git do workspace.",
      "Coleções de notebooks organizados por projeto que compartilham variáveis de ambiente e são executados em sequência definida pelo diagrama de dependências."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar uma solução analítica",
    "explanation": {
      "respostaCerta": "Projetos baseados em SQL que definem objetos de banco de dados (tabelas, views, stored procedures) como scripts T-SQL versionados no Git, permitindo desenvolvimento declarativo com comparação de schema, publicação via deploy e integração com CI/CD pipelines.",
      "intro": "Entendendo Git integration e versionamento de artefatos",
      "papoReto": "Database Projects versio nam scripts T-SQL (DDL para tabelas, views, procedures) em Git como código declarativo. Workflow: escrever .sql → Git → compilar (dacpac) → comparar schema → publicar no Warehouse com versionamento.",
      "puloDoGato": "SQL Projects = DDL versionado em Git com schema comparison e publish",
      "cascasDeBanana": [
        "Templates gerados: Projects são developer-led SQL files, não templates automáticos",
        "Backup de dados: Projects definem schema, nunca versionam dados",
        "Notebooks organizados: Notebooks são iterativos, Projects são declarativos"
      ],
      "dicaOuro": "Database Projects = CI/CD nativo para warehouse schemas"
    }
  },
  {
    "id": "dp700_q7",
    "text": "Como um Deployment Pipeline do Fabric é configurado para um fluxo de engenharia de dados com três ambientes (Dev, Test, Prod)?",
    "options": [
      "Configurando três capacities Fabric separadas (uma por ambiente) e usando Shortcuts cross-capacity para compartilhar dados entre os ambientes.",
      "Criando três branches Git (dev, test, prod) e configurando o Fabric para sincronizar automaticamente cada branch com o workspace correspondente sem necessidade de Deployment Pipeline.",
      "Criando um Deployment Pipeline com três estágios, associando um workspace a cada estágio, configurando Deployment Rules para substituir strings de conexão e parâmetros específicos por ambiente, e definindo as permissões de quem pode implantar em cada estágio.",
      "Usando Azure DevOps com tasks específicas do Fabric que fazem deploy automaticamente baseado em pull requests aprovados para cada branch de ambiente."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Implementar e gerenciar uma solução analítica",
    "explanation": {
      "respostaCerta": "Criando um Deployment Pipeline com três estágios, associando um workspace a cada estágio, configurando Deployment Rules para substituir strings de conexão e parâmetros específicos por ambiente, e definindo as permissões de quem pode implantar em cada estágio.",
      "intro": "Entendendo Deployment Pipelines e transformação de parâmetros",
      "papoReto": "Deployment Pipeline cria fluxo multi-stage (Dev → Test → Prod) com Deployment Rules transformando automaticamente parâmetros por ambiente (connection strings, dataflow endpoints). Cada estágio tem um workspace dedicado com permissões definidas.",
      "puloDoGato": "Dev→Test→Prod com Rules injetando valores per-environment automaticamente",
      "cascasDeBanana": [
        "Capacities separadas: um workspace por stage em um pipeline, capacities são para compute allocation",
        "Git branches automáticas: Git e deployment pipeline são complementares, não substitutos",
        "Azure DevOps exclusivo: Fabric tem deployment pipeline nativo, pode integrar com DevOps"
      ],
      "dicaOuro": "Deployment Pipeline = multi-stage com parameter transformation automática"
    }
  },
  {
    "id": "dp700_q8",
    "text": "Como o Dynamic Data Masking (DDM) é implementado em um Warehouse do Microsoft Fabric e qual é sua limitação fundamental?",
    "options": [
      "Configurado no modelo semântico do Power BI via propriedade de coluna \"Mask Data\", que aplica mascaramento automático para todos os usuários que não têm role RLS.",
      "Implementado no nível do OneLake via ACLs que substituem valores sensíveis por tokens criptografados antes de servir os dados a usuários não autorizados.",
      "Aplicado via Sensitivity Labels do Microsoft Purview que automaticamente mascaram colunas classificadas como PII para usuários sem licença Microsoft 365 E5.",
      "Aplicado via T-SQL com `ALTER TABLE ADD MASKED WITH (FUNCTION = 'tipo()')` em colunas específicas; usuários sem permissão `UNMASK` veem dados mascarados; limitação: não protege contra inferência de dados via filtros WHERE que podem revelar valores mascarados."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar uma solução analítica",
    "explanation": {
      "respostaCerta": "Aplicado via T-SQL com `ALTER TABLE ADD MASKED WITH (FUNCTION = 'tipo()')` em colunas específicas; usuários sem permissão `UNMASK` veem dados mascarados; limitação: não protege contra inferência de dados via filtros WHERE que podem revelar valores mascarados.",
      "intro": "Entendendo Dynamic Data Masking e suas limitações",
      "papoReto": "DDM é implementado via T-SQL: `ALTER TABLE ADD MASKED WITH (FUNCTION = 'tipo()')`. Usuarios sem UNMASK veem valores mascarados. Limitação: não protege contra inferência via filtros WHERE. Combine com RLS para segurança robusta.",
      "puloDoGato": "DDM mascara display, não acesso. RLS filtra linhas. Use ambas",
      "cascasDeBanana": [
        "Modelo semântico Power BI: DDM é feature T-SQL/warehouse, não de modelo Power BI",
        "ACLs OneLake: mascaramento de display é database-level, não storage-level",
        "Sensitivity Labels: classificam dados, não mascaram displays"
      ],
      "dicaOuro": "DDM sem RLS = falsa segurança (inferência pode revelar valores)"
    }
  },
  {
    "id": "dp700_q9",
    "text": "Quais são as funções de mascaramento disponíveis no Dynamic Data Masking do Fabric Warehouse?",
    "options": [
      "Apenas `default()` e `email()` estão disponíveis no Fabric Warehouse; outras funções requerem implementação customizada via stored procedure.",
      "`hide()`, `replace()`, `encrypt()`, `hash()` e `nullify()`",
      "`mask_text()`, `mask_number()`, `mask_date()` e `mask_custom(regex)`",
      "`default()` (mascara com XXXX ou 0), `email()` (mascara como aX@XXXX.com), `random(low, high)` (número aleatório no intervalo), `partial(prefix, padding, suffix)` (expõe partes do valor) e `datetime(\"formato\")` para datas."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Implementar e gerenciar uma solução analítica",
    "explanation": {
      "respostaCerta": "`default()` (mascara com XXXX ou 0), `email()` (mascara como aX@XXXX.com), `random(low, high)` (número aleatório no intervalo), `partial(prefix, padding, suffix)` (expõe partes do valor) e `datetime(\"formato\")` para datas.",
      "intro": "Entendendo Dynamic Data Masking e suas limitações",
      "papoReto": "DDM é implementado via T-SQL: `ALTER TABLE ADD MASKED WITH (FUNCTION = 'tipo()')`. Usuarios sem UNMASK veem valores mascarados. Limitação: não protege contra inferência via filtros WHERE. Combine com RLS para segurança robusta.",
      "puloDoGato": "DDM mascara display, não acesso. RLS filtra linhas. Use ambas",
      "cascasDeBanana": [
        "Modelo semântico Power BI: DDM é feature T-SQL/warehouse, não de modelo Power BI",
        "ACLs OneLake: mascaramento de display é database-level, não storage-level",
        "Sensitivity Labels: classificam dados, não mascaram displays"
      ],
      "dicaOuro": "DDM sem RLS = falsa segurança (inferência pode revelar valores)"
    }
  },
  {
    "id": "dp700_q10",
    "text": "O que é o Workspace Logging no Microsoft Fabric e como um engenheiro de dados o configura?",
    "options": [
      "Um recurso que envia logs de operações do workspace (execuções de notebooks, pipelines, acessos a dados) para um Lakehouse ou Eventhouse designado, habilitado nas configurações de workspace em \"Workspace diagnostics settings\" com seleção das categorias de log desejadas.",
      "Um painel de monitoramento integrado ao workspace que exibe em tempo real os logs de todas as execuções dos últimos 30 dias sem necessidade de configuração adicional.",
      "Uma integração automática com o Azure Monitor que envia todos os logs do workspace para um Log Analytics Workspace configurado no Admin Portal do Fabric.",
      "Uma função do Monitor Hub que consolida logs de múltiplos workspaces em um repositório central gerenciado pelo administrador do tenant Fabric."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar uma solução analítica",
    "explanation": {
      "respostaCerta": "Um recurso que envia logs de operações do workspace (execuções de notebooks, pipelines, acessos a dados) para um Lakehouse ou Eventhouse designado, habilitado nas configurações de workspace em \"Workspace diagnostics settings\" com seleção das categorias de log desejadas.",
      "intro": "Entendendo Git integration e versionamento de artefatos",
      "papoReto": "Um recurso que envia logs de operações do workspace (execuções de notebooks, pipelines, acessos a dados) para um Lakehouse ou Eventhouse designado, habilitado nas configurações de workspace em \"Workspace diagnostics settings\" com seleção das categorias de log desejadas. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Um painel de monitoramento integrado ao workspace que exibe em tempo real os logs de todas as execuções dos últimos 30 dias sem necessidade de configuração adicional.: Esta opção contém erro técnico ou implementação não recomendada",
        "Uma integração automática com o Azure Monitor que envia todos os logs do workspace para um Log Analytics Workspace configurado no Admin Portal do Fabric.: Esta opção contém erro técnico ou implementação não recomendada",
        "Uma função do Monitor Hub que consolida logs de múltiplos workspaces em um repositório central gerenciado pelo administrador do tenant Fabric.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q11",
    "text": "Como você implementa controle de acesso em nível de arquivo/pasta dentro de um Lakehouse no Microsoft Fabric para um cenário onde times diferentes devem acessar partições diferentes dos dados?",
    "options": [
      "Usando ACLs do OneLake (POSIX-style, baseadas em ADLS Gen2) configuradas via Azure Storage Explorer, SDK do Azure ou Azure CLI para definir permissões de leitura/escrita em pastas específicas dentro do Lakehouse para grupos do Entra ID correspondentes.",
      "Particionando os dados em Lakehouses separados, um por time, e usando Shortcuts para consolidar os dados em um Lakehouse de leitura compartilhada somente leitura.",
      "Usando Sensitivity Labels do Purview aplicadas a pastas específicas que restringem automaticamente o acesso por grupo de usuários configurado na política.",
      "Criando funções RLS no SQL Analytics Endpoint do Lakehouse que filtram automaticamente os dados baseado no grupo de segurança do usuário autenticado."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar uma solução analítica",
    "explanation": {
      "respostaCerta": "Usando ACLs do OneLake (POSIX-style, baseadas em ADLS Gen2) configuradas via Azure Storage Explorer, SDK do Azure ou Azure CLI para definir permissões de leitura/escrita em pastas específicas dentro do Lakehouse para grupos do Entra ID correspondentes.",
      "intro": "Entendendo Shortcuts como virtual links vs. Mirror para cópias reais",
      "papoReto": "Usando ACLs do OneLake (POSIX-style, baseadas em ADLS Gen2) configuradas via Azure Storage Explorer, SDK do Azure ou Azure CLI para definir permissões de leitura/escrita em pastas específicas dentro do Lakehouse para grupos do Entra ID correspondentes. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Particionando os dados em Lakehouses separados, um por time, e usando Shortcuts para consolidar os dados em um Lakehouse de leitura compartilhada somente leitura.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando Sensitivity Labels do Purview aplicadas a pastas específicas que restringem automaticamente o acesso por grupo de usuários configurado na política.: Esta opção contém erro técnico ou implementação não recomendada",
        "Criando funções RLS no SQL Analytics Endpoint do Lakehouse que filtram automaticamente os dados baseado no grupo de segurança do usuário autenticado.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q12",
    "text": "Em qual cenário um Data Pipeline é mais adequado que um Notebook para orquestração no Fabric?",
    "options": [
      "Quando a tarefa envolve copiar dados entre sistemas heterogêneos, orquestrar múltiplas atividades com dependências visuais, gerenciar retries automáticos, enviar notificações e executar stored procedures sem necessidade de lógica de programação complexa.",
      "Quando o volume de dados excede 1 TB, pois pipelines têm melhor gerenciamento de memória distribuída que notebooks para grandes volumes.",
      "Quando é necessário agendar execuções em intervalos menores que 15 minutos, pois notebooks têm limite mínimo de agendamento de 15 minutos.",
      "Quando os dados precisam ser transformados com PySpark, pois pipelines executam Spark nativamente sem overhead de inicialização de sessão."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Implementar e gerenciar uma solução analítica",
    "explanation": {
      "respostaCerta": "Quando a tarefa envolve copiar dados entre sistemas heterogêneos, orquestrar múltiplas atividades com dependências visuais, gerenciar retries automáticos, enviar notificações e executar stored procedures sem necessidade de lógica de programação complexa.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Quando a tarefa envolve copiar dados entre sistemas heterogêneos, orquestrar múltiplas atividades com dependências visuais, gerenciar retries automáticos, enviar notificações e executar stored procedures sem necessidade de lógica de programação complexa. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Quando o volume de dados excede 1 TB, pois pipelines têm melhor gerenciamento de memória distribuída que notebooks para grandes volumes.: Esta opção contém erro técnico ou implementação não recomendada",
        "Quando é necessário agendar execuções em intervalos menores que 15 minutos, pois notebooks têm limite mínimo de agendamento de 15 minutos.: Esta opção contém erro técnico ou implementação não recomendada",
        "Quando os dados precisam ser transformados com PySpark, pois pipelines executam Spark nativamente sem overhead de inicialização de sessão.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q13",
    "text": "Quais tipos de triggers baseados em eventos estão disponíveis para Data Pipelines no Microsoft Fabric?",
    "options": [
      "Apenas triggers de agendamento por cron expression e triggers manuais; triggers baseados em eventos requerem Azure Logic Apps externo ao Fabric.",
      "Triggers de conclusão de outro pipeline (pipeline chaining), triggers de threshold de dados e triggers de falha de item para recovery automático.",
      "Triggers baseados em chegada de arquivos no OneLake/Azure Storage (Storage Event Trigger), triggers de agendamento (Schedule Trigger) e triggers manuais via API REST ou botão na interface.",
      "Triggers de mensagem via Azure Service Bus, triggers de fila via Azure Queue Storage e triggers de webhook HTTP para integração com sistemas externos."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Implementar e gerenciar uma solução analítica",
    "explanation": {
      "respostaCerta": "Triggers baseados em chegada de arquivos no OneLake/Azure Storage (Storage Event Trigger), triggers de agendamento (Schedule Trigger) e triggers manuais via API REST ou botão na interface.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Data Pipeline é orquestração visual low-code de atividades (Copy, Lookup, ForEach, Execute Pipeline, Script). Suporta dependências, retries automáticos, notificações. Ideal para cópia de dados e orquestração sem programação. Notebooks são para transformação complexa com Spark (PySpark).",
      "puloDoGato": "Pipeline = visual, low-code. Notebook = programação Spark. Escolha conforme lógica necessária",
      "cascasDeBanana": [
        "Volume > 1TB: ambos lidam igualmente—volume não é diferenciador",
        "Agendamento < 15min: ambos suportam triggers de alta frequência",
        "PySpark: Pipelines podem chamar Notebooks, mas para lógica complexa use direto"
      ],
      "dicaOuro": "Copiar + orquestrar visualmente = Pipeline. Transformar com código = Notebook"
    }
  },
  {
    "id": "dp700_q14",
    "text": "Como você passa um parâmetro de data dinâmica para um pipeline filho chamado por um pipeline pai no Fabric?",
    "options": [
      "Criando uma variável global de workspace que ambos os pipelines leem automaticamente sem necessidade de configuração de parâmetro explícita.",
      "No pipeline pai, na atividade \"Execute Pipeline\", configurando os parâmetros do pipeline filho com expressões dinâmicas como `@formatDateTime(utcNow(), 'yyyy-MM-dd')` ou `@pipeline().parameters.data_referencia` para passar a data atual ou um parâmetro recebido.",
      "Configurando o trigger do pipeline pai com a data como propriedade `@trigger().scheduledTime` que é propagada automaticamente para todos os pipelines filhos.",
      "Usando uma tabela de configuração no Lakehouse que o pipeline filho consulta no início da execução para obter os parâmetros de data."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Implementar e gerenciar uma solução analítica",
    "explanation": {
      "respostaCerta": "No pipeline pai, na atividade \"Execute Pipeline\", configurando os parâmetros do pipeline filho com expressões dinâmicas como `@formatDateTime(utcNow(), 'yyyy-MM-dd')` ou `@pipeline().parameters.data_referencia` para passar a data atual ou um parâmetro recebido.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "No pipeline pai, na atividade \"Execute Pipeline\", configurando os parâmetros do pipeline filho com expressões dinâmicas como `@formatDateTime(utcNow(), 'yyyy-MM-dd')` ou `@pipeline().parameters.data_referencia` para passar a data atual ou um parâmetro recebido. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Criando uma variável global de workspace que ambos os pipelines leem automaticamente sem necessidade de configuração de parâmetro explícita.: Esta opção contém erro técnico ou implementação não recomendada",
        "Configurando o trigger do pipeline pai com a data como propriedade `@trigger().scheduledTime` que é propagada automaticamente para todos os pipelines filhos.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando uma tabela de configuração no Lakehouse que o pipeline filho consulta no início da execução para obter os parâmetros de data.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q15",
    "text": "Qual é a diferença fundamental entre uma carga completa (full load) e uma carga incremental (incremental load) em engenharia de dados no Fabric?",
    "options": [
      "Full load é executada manualmente; incremental load é sempre agendada automaticamente pelo Fabric baseado no volume de novos dados detectados.",
      "Full load usa Data Pipelines; incremental load usa exclusivamente notebooks PySpark com Delta Lake para garantir consistência transacional.",
      "Full load processa dados em lote; incremental load processa dados em streaming em tempo real com latência de milissegundos.",
      "Full load trunca e recarrega todos os dados da fonte a cada execução; incremental load processa apenas os registros novos ou modificados desde a última execução, usando um watermark (timestamp, ID sequencial ou CDC) para identificar as alterações."
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Full load trunca e recarrega todos os dados da fonte a cada execução; incremental load processa apenas os registros novos ou modificados desde a última execução, usando um watermark (timestamp, ID sequencial ou CDC) para identificar as alterações.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Carga incremental usa watermark (timestamp, ID sequencial, CDC) para identificar registros novos/modificados desde última execução. Lookup recupera último watermark → Copy filtra com watermark → Procedure atualiza watermark. Apenas novos dados são processados.",
      "puloDoGato": "Watermark = identifica último processado. Lookup→Filter→Update = padrão incremental",
      "cascasDeBanana": [
        "Delta Load activity: não existe—use Lookup + Filter conforme padrão",
        "Incremental Load na Copy: Copy Data não detecta automaticamente—configure watermark manualmente",
        "CDC automático: CDC existe mas requer CDC enable na fonte; watermark é mais flexível"
      ],
      "dicaOuro": "Incremental não reprocessa histórico—usa watermark para marcar progresso"
    }
  },
  {
    "id": "dp700_q16",
    "text": "Como você implementa um padrão de carga incremental com watermark em um Data Pipeline do Fabric?",
    "options": [
      "Usando a atividade \"Delta Load\" disponível no Data Pipeline que compara automaticamente a fonte e o destino e copia apenas as diferenças.",
      "Configurando a propriedade \"Incremental Load\" na atividade Copy Data que automaticamente detecta e carrega apenas registros novos sem necessidade de tabela de controle.",
      "Habilitando o Change Data Capture no pipeline via propriedade \"CDC Mode\" que monitora automaticamente alterações na fonte e as aplica no destino.",
      "Usando uma atividade Lookup para recuperar o último watermark de uma tabela de controle, filtrando a fonte com o watermark na atividade Copy Data, carregando os novos dados no destino e atualizando o watermark na tabela de controle com uma atividade Stored Procedure ou Script."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Usando uma atividade Lookup para recuperar o último watermark de uma tabela de controle, filtrando a fonte com o watermark na atividade Copy Data, carregando os novos dados no destino e atualizando o watermark na tabela de controle com uma atividade Stored Procedure ou Script.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Carga incremental usa watermark (timestamp, ID sequencial, CDC) para identificar registros novos/modificados desde última execução. Lookup recupera último watermark → Copy filtra com watermark → Procedure atualiza watermark. Apenas novos dados são processados.",
      "puloDoGato": "Watermark = identifica último processado. Lookup→Filter→Update = padrão incremental",
      "cascasDeBanana": [
        "Delta Load activity: não existe—use Lookup + Filter conforme padrão",
        "Incremental Load na Copy: Copy Data não detecta automaticamente—configure watermark manualmente",
        "CDC automático: CDC existe mas requer CDC enable na fonte; watermark é mais flexível"
      ],
      "dicaOuro": "Incremental não reprocessa histórico—usa watermark para marcar progresso"
    }
  },
  {
    "id": "dp700_q17",
    "text": "Ao preparar dados para carga em um modelo dimensional (star schema) em um Lakehouse do Fabric, qual é a sequência correta de transformações?",
    "options": [
      "Implementar o modelo dimensional diretamente na camada Bronze usando notebooks PySpark, pois a transformação antecipada reduz o custo de processamento nas etapas subsequentes.",
      "Carregar dados brutos diretamente na camada Gold, criar o modelo dimensional no Power BI Desktop e publicar o modelo semântico no Fabric para uso pelos analistas.",
      "Limpar e padronizar dados na camada Silver, criar surrogate keys para dimensões, implementar SCD (Slowly Changing Dimensions) conforme necessário, construir tabelas de fatos com foreign keys para as dimensões e carregar na camada Gold otimizada para consulta.",
      "Criar primeiro a tabela de fatos com todos os atributos desnormalizados e depois gerar as dimensões extraindo colunas únicas de cada atributo via CTAS no Warehouse."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Limpar e padronizar dados na camada Silver, criar surrogate keys para dimensões, implementar SCD (Slowly Changing Dimensions) conforme necessário, construir tabelas de fatos com foreign keys para as dimensões e carregar na camada Gold otimizada para consulta.",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "Limpar e padronizar dados na camada Silver, criar surrogate keys para dimensões, implementar SCD (Slowly Changing Dimensions) conforme necessário, construir tabelas de fatos com foreign keys para as dimensões e carregar na camada Gold otimizada para consulta. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Implementar o modelo dimensional diretamente na camada Bronze usando notebooks PySpark, pois a transformação antecipada reduz o custo de processamento nas etapas subsequentes.: Esta opção contém erro técnico ou implementação não recomendada",
        "Carregar dados brutos diretamente na camada Gold, criar o modelo dimensional no Power BI Desktop e publicar o modelo semântico no Fabric para uso pelos analistas.: Esta opção contém erro técnico ou implementação não recomendada",
        "Criar primeiro a tabela de fatos com todos os atributos desnormalizados e depois gerar as dimensões extraindo colunas únicas de cada atributo via CTAS no Warehouse.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q18",
    "text": "Qual é o padrão recomendado para implementar carga de dados de streaming no Microsoft Fabric para dados de IoT em alta velocidade?",
    "options": [
      "Azure Stream Analytics conectado via Shortcut ao OneLake que processa os dados IoT e grava diretamente nas tabelas Delta do Lakehouse.",
      "Data Pipeline com trigger baseado em evento que processa micro-batches de 1 minuto da fila IoT Hub e carrega no Lakehouse via atividade Copy Data.",
      "Dataflow Gen2 em modo streaming configurado com o conector IoT Hub como fonte e o Lakehouse como destino com latência configurável.",
      "Eventstream para capturar e rotear os eventos da fonte (IoT Hub, Event Hubs) → Eventhouse para análise em tempo real via KQL → Lakehouse para persistência histórica em Delta via Structured Streaming em notebooks ou destino direto do Eventstream."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Eventstream para capturar e rotear os eventos da fonte (IoT Hub, Event Hubs) → Eventhouse para análise em tempo real via KQL → Lakehouse para persistência histórica em Delta via Structured Streaming em notebooks ou destino direto do Eventstream.",
      "intro": "Entendendo Shortcuts como virtual links vs. Mirror para cópias reais",
      "papoReto": "Para dados de streaming/IoT em alta velocidade: Eventstream captura eventos (IoT Hub, Event Hubs) → Eventhouse processa tempo real com KQL → Lakehouse persistencia via Structured Streaming/Eventstream destination.",
      "puloDoGato": "Eventstream → Eventhouse (tempo real KQL) → Lakehouse (persistencia Delta)",
      "cascasDeBanana": [
        "Stream Analytics via Shortcut: Shortcuts são read-only, não processam streams",
        "Dataflow Gen2 streaming: Dataflows é low-code, não nativo para high-speed IoT",
        "Data Pipeline de 1min: Pipelines batched em 1 minuto não é ideal para IoT contínuo"
      ],
      "dicaOuro": "Real-time streaming = Eventstream + Eventhouse. Persistencia = Delta em Lakehouse"
    }
  },
  {
    "id": "dp700_q19",
    "text": "Um engenheiro precisa armazenar dados de log em formato semi-estruturado (JSON) com necessidade de consultas SQL ad-hoc por analistas e processamento Spark para ML. Qual data store do Fabric é mais adequado?",
    "options": [
      "Eventhouse com KQL Database, pois é otimizado para dados semi-estruturados de log com ingestão rápida e consultas KQL de alta performance.",
      "Warehouse, pois suporta T-SQL nativo com OPENJSON para processar dados JSON e tem melhor desempenho para consultas analíticas dos analistas.",
      "SQL Database do Fabric, pois combina suporte a JSON via colunas nvarchar com processamento transacional ACID necessário para dados de log em alta velocidade.",
      "Lakehouse, que suporta armazenamento de arquivos JSON na seção Files, processamento via notebooks PySpark para ML, e exposição via SQL Analytics Endpoint para consultas SQL pelos analistas."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Lakehouse, que suporta armazenamento de arquivos JSON na seção Files, processamento via notebooks PySpark para ML, e exposição via SQL Analytics Endpoint para consultas SQL pelos analistas.",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "Lakehouse, que suporta armazenamento de arquivos JSON na seção Files, processamento via notebooks PySpark para ML, e exposição via SQL Analytics Endpoint para consultas SQL pelos analistas. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Eventhouse com KQL Database, pois é otimizado para dados semi-estruturados de log com ingestão rápida e consultas KQL de alta performance.: Esta opção contém erro técnico ou implementação não recomendada",
        "Warehouse, pois suporta T-SQL nativo com OPENJSON para processar dados JSON e tem melhor desempenho para consultas analíticas dos analistas.: Esta opção contém erro técnico ou implementação não recomendada",
        "SQL Database do Fabric, pois combina suporte a JSON via colunas nvarchar com processamento transacional ACID necessário para dados de log em alta velocidade.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q20",
    "text": "Quais fontes externas são suportadas por Shortcuts no OneLake do Microsoft Fabric?",
    "options": [
      "Qualquer fonte JDBC (SQL Server, Oracle, MySQL, PostgreSQL) via gateway de dados on-premises configurado no workspace.",
      "Apenas Azure Data Lake Storage Gen2 e Azure Blob Storage; fontes externas à nuvem Microsoft requerem replicação física dos dados para o OneLake.",
      "Azure Data Lake Storage Gen2 (ADLS Gen2), Azure Blob Storage, Amazon S3, Google Cloud Storage, e outros Lakehouses/Warehouses do mesmo tenant Fabric, criando ponteiros virtuais sem cópia dos dados.",
      "Apenas fontes dentro do mesmo tenant Fabric; fontes Azure externas requerem um Data Pipeline de cópia para integração com o OneLake."
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Azure Data Lake Storage Gen2 (ADLS Gen2), Azure Blob Storage, Amazon S3, Google Cloud Storage, e outros Lakehouses/Warehouses do mesmo tenant Fabric, criando ponteiros virtuais sem cópia dos dados.",
      "intro": "Entendendo Shortcuts como virtual links vs. Mirror para cópias reais",
      "papoReto": "Shortcuts são pointers virtuais read-only para dados externos (ADLS Gen2, S3, Google Cloud, Lakehouses Fabric) sem copiar. Mirror copia incrementalmente dados. Escolha shortcuts para acesso virtual, mirror para cópias gerenciadas.",
      "puloDoGato": "Shortcut = read-only pointer. Mirror = incremental copy. Escolha conforme precisa escrever",
      "cascasDeBanana": [
        "Lakehouses separados: possível mas ineficiente—shortcuts no mesmo é melhor",
        "Sensitivity Labels: classificam, não controlam acesso como ACLs",
        "RLS: filtra linhas de tabelas, diferente de acesso a arquivos"
      ],
      "dicaOuro": "Shortcuts referenciam, Mirrors copiam. Use conforme necessidade de escrita"
    }
  },
  {
    "id": "dp700_q21",
    "text": "Em um Data Pipeline do Fabric, quais configurações de desempenho você pode ajustar na atividade Copy Data para maximizar o throughput de ingestão de um Azure SQL Database para um Lakehouse?",
    "options": [
      "Habilitar a opção \"Turbo Mode\" na atividade Copy Data que automaticamente otimiza os parâmetros de paralelismo baseado no tamanho estimado dos dados.",
      "Configurar o modo \"Bulk Insert\" com tamanho de buffer de 10 GB e habilitar compressão ZSTD para reduzir o tráfego de rede durante a cópia.",
      "Aumentar o \"Degree of copy parallelism\" (DIUs — Data Integration Units), configurar \"Partition option\" para particionar a query SQL por range ou coluna física, e ajustar o tamanho do batch de escrita no sink Lakehouse.",
      "Usar múltiplas atividades Copy Data em paralelo no pipeline com OFFSET/FETCH na query SQL para dividir manualmente os dados em chunks iguais."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Aumentar o \"Degree of copy parallelism\" (DIUs — Data Integration Units), configurar \"Partition option\" para particionar a query SQL por range ou coluna física, e ajustar o tamanho do batch de escrita no sink Lakehouse.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Aumentar o \"Degree of copy parallelism\" (DIUs — Data Integration Units), configurar \"Partition option\" para particionar a query SQL por range ou coluna física, e ajustar o tamanho do batch de escrita no sink Lakehouse. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Habilitar a opção \"Turbo Mode\" na atividade Copy Data que automaticamente otimiza os parâmetros de paralelismo baseado no tamanho estimado dos dados.: Esta opção contém erro técnico ou implementação não recomendada",
        "Configurar o modo \"Bulk Insert\" com tamanho de buffer de 10 GB e habilitar compressão ZSTD para reduzir o tráfego de rede durante a cópia.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usar múltiplas atividades Copy Data em paralelo no pipeline com OFFSET/FETCH na query SQL para dividir manualmente os dados em chunks iguais.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q22",
    "text": "Quando um engenheiro de dados deve escolher um Dataflow Gen2 em vez de um Notebook PySpark para transformação de dados no Fabric?",
    "options": [
      "Quando é necessário escrever em múltiplos destinos simultaneamente, pois Dataflows Gen2 suportam múltiplos outputs nativamente ao contrário dos notebooks.",
      "Quando os dados vêm de uma API REST, pois Dataflows Gen2 têm o único conector REST nativo do Fabric com suporte a paginação automática.",
      "Quando a transformação pode ser expressa visualmente via Power Query M sem código, o volume de dados é moderado, não há necessidade de lógica imperativa complexa e a equipe inclui profissionais sem experiência em programação.",
      "Quando o volume de dados supera 100 GB, pois Dataflows Gen2 têm otimizações de memória superiores ao Spark para grandes volumes."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Quando a transformação pode ser expressa visualmente via Power Query M sem código, o volume de dados é moderado, não há necessidade de lógica imperativa complexa e a equipe inclui profissionais sem experiência em programação.",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "Quando a transformação pode ser expressa visualmente via Power Query M sem código, o volume de dados é moderado, não há necessidade de lógica imperativa complexa e a equipe inclui profissionais sem experiência em programação. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Quando é necessário escrever em múltiplos destinos simultaneamente, pois Dataflows Gen2 suportam múltiplos outputs nativamente ao contrário dos notebooks.: Esta opção contém erro técnico ou implementação não recomendada",
        "Quando os dados vêm de uma API REST, pois Dataflows Gen2 têm o único conector REST nativo do Fabric com suporte a paginação automática.: Esta opção contém erro técnico ou implementação não recomendada",
        "Quando o volume de dados supera 100 GB, pois Dataflows Gen2 têm otimizações de memória superiores ao Spark para grandes volumes.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q23",
    "text": "Em um Notebook Fabric, como você implementa deduplicação de registros em um DataFrame PySpark mantendo o registro mais recente por chave?",
    "options": [
      "`df.orderBy(col(\"timestamp\").desc()).coalesce(1).dropDuplicates([\"chave\"])`",
      "`df.dropDuplicates([\"chave\"])`",
      "`from pyspark.sql.window import Window; from pyspark.sql.functions import row_number; w = Window.partitionBy(\"chave\").orderBy(col(\"timestamp\").desc()); df.withColumn(\"rn\", row_number().over(w)).filter(col(\"rn\") == 1).drop(\"rn\")`",
      "`df.groupBy(\"chave\").agg(last(\"timestamp\").alias(\"timestamp\"))`"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`from pyspark.sql.window import Window; from pyspark.sql.functions import row_number; w = Window.partitionBy(\"chave\").orderBy(col(\"timestamp\").desc()); df.withColumn(\"rn\", row_number().over(w)).filter(col(\"rn\") == 1).drop(\"rn\")`",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "`from pyspark.sql.window import Window; from pyspark.sql.functions import row_number; w = Window.partitionBy(\"chave\").orderBy(col(\"timestamp\").desc()); df.withColumn(\"rn\", row_number().over(w)).filter(col(\"rn\") == 1).drop(\"rn\")` é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "`df.orderBy(col(\"timestamp\").desc()).coalesce(1).dropDuplicates([\"chave\"])`: Esta opção contém erro técnico ou implementação não recomendada",
        "`df.dropDuplicates([\"chave\"])`: Esta opção contém erro técnico ou implementação não recomendada",
        "`df.groupBy(\"chave\").agg(last(\"timestamp\").alias(\"timestamp\"))`: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q24",
    "text": "No Warehouse do Fabric, como você implementa uma transformação que padroniza capitalização de nomes, remove espaços extras e trata valores nulos em uma única query T-SQL?",
    "options": [
      "`SELECT PROPER(COALESCE(TRIM(nome), 'N/A')) AS nome_padronizado FROM tabela`",
      "`SELECT TRIM(ISNULL(UPPER(LEFT(nome,1)) + LOWER(SUBSTRING(nome,2,LEN(nome))), 'N/A')) AS nome_padronizado FROM tabela`",
      "`SELECT FORMAT(NULLIF(LTRIM(RTRIM(nome)), ''), 'ProperCase') AS nome_padronizado FROM tabela`",
      "`SELECT INITCAP(COALESCE(STRIP(nome), 'N/A')) AS nome_padronizado FROM tabela`"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`SELECT TRIM(ISNULL(UPPER(LEFT(nome,1)) + LOWER(SUBSTRING(nome,2,LEN(nome))), 'N/A')) AS nome_padronizado FROM tabela`",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "`SELECT TRIM(ISNULL(UPPER(LEFT(nome,1)) + LOWER(SUBSTRING(nome,2,LEN(nome))), 'N/A')) AS nome_padronizado FROM tabela` é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "`SELECT PROPER(COALESCE(TRIM(nome), 'N/A')) AS nome_padronizado FROM tabela`: Esta opção contém erro técnico ou implementação não recomendada",
        "`SELECT FORMAT(NULLIF(LTRIM(RTRIM(nome)), ''), 'ProperCase') AS nome_padronizado FROM tabela`: Esta opção contém erro técnico ou implementação não recomendada",
        "`SELECT INITCAP(COALESCE(STRIP(nome), 'N/A')) AS nome_padronizado FROM tabela`: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q25",
    "text": "Em um KQL Queryset do Fabric, como você transforma uma coluna de timestamp UTC para o fuso horário de Brasília (UTC-3) e filtra eventos das últimas 6 horas?",
    "options": [
      "`Tabela | where timestamp > now() - 6h | extend timestamp_brasilia = timestamp - 3h | project timestamp_brasilia, evento, valor`",
      "`Tabela | filter ingestion_time() >= dateadd(hour, -6, now()) | extend timestamp_brasilia = convert_timezone('UTC', 'BRT', timestamp)`",
      "`Tabela | where ingestion_time() > ago(6h) | extend timestamp_brasilia = datetime_utc_to_local(timestamp, 'America/Sao_Paulo') | project timestamp_brasilia, evento, valor`",
      "`Tabela | where timestamp between (ago(6h) .. now()) | extend timestamp_brasilia = format_datetime(timestamp, 'UTC-3')`"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`Tabela | where ingestion_time() > ago(6h) | extend timestamp_brasilia = datetime_utc_to_local(timestamp, 'America/Sao_Paulo') | project timestamp_brasilia, evento, valor`",
      "intro": "Entendendo Fabric workspace e gerenciamento de recursos",
      "papoReto": "`Tabela | where ingestion_time() > ago(6h) | extend timestamp_brasilia = datetime_utc_to_local(timestamp, 'America/Sao_Paulo') | project timestamp_brasilia, evento, valor` é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "`Tabela | where timestamp > now() - 6h | extend timestamp_brasilia = timestamp - 3h | project timestamp_brasilia, evento, valor`: Esta opção contém erro técnico ou implementação não recomendada",
        "`Tabela | filter ingestion_time() >= dateadd(hour, -6, now()) | extend timestamp_brasilia = convert_timezone('UTC', 'BRT', timestamp)`: Esta opção contém erro técnico ou implementação não recomendada",
        "`Tabela | where timestamp between (ago(6h) .. now()) | extend timestamp_brasilia = format_datetime(timestamp, 'UTC-3')`: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q26",
    "text": "Ao identificar registros duplicados em uma tabela Delta de um Lakehouse do Fabric usando SQL, qual query retorna os grupos com mais de uma ocorrência?",
    "options": [
      "`SELECT chave, COUNT(*) FROM tabela GROUP BY chave WHERE COUNT(*) > 1`",
      "`SELECT chave, COUNT(*) as total FROM tabela GROUP BY chave HAVING COUNT(*) > 1 ORDER BY total DESC`",
      "`SELECT chave FROM tabela HAVING COUNT(chave) > 1 GROUP BY chave`",
      "`SELECT DISTINCT chave FROM tabela WHERE chave IN (SELECT chave FROM tabela GROUP BY chave HAVING COUNT(*) > 1)`"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`SELECT chave, COUNT(*) as total FROM tabela GROUP BY chave HAVING COUNT(*) > 1 ORDER BY total DESC`",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "`SELECT chave, COUNT(*) as total FROM tabela GROUP BY chave HAVING COUNT(*) > 1 ORDER BY total DESC` é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "`SELECT chave, COUNT(*) FROM tabela GROUP BY chave WHERE COUNT(*) > 1`: Esta opção contém erro técnico ou implementação não recomendada",
        "`SELECT chave FROM tabela HAVING COUNT(chave) > 1 GROUP BY chave`: Esta opção contém erro técnico ou implementação não recomendada",
        "`SELECT DISTINCT chave FROM tabela WHERE chave IN (SELECT chave FROM tabela GROUP BY chave HAVING COUNT(*) > 1)`: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q27",
    "text": "Em PySpark no Fabric, como você identifica o percentual de valores nulos por coluna em um DataFrame para análise de qualidade de dados?",
    "options": [
      "`df.na.drop().count()`",
      "`df.select([sum(col(c).isNull().cast(\"int\")).alias(c) for c in df.columns]).show()`",
      "`total = df.count(); df.select([(count(when(col(c).isNull(), c))/total*100).alias(c) for c in df.columns]).show()`",
      "`df.describe().filter(col(\"summary\") == \"count\").show()`"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`total = df.count(); df.select([(count(when(col(c).isNull(), c))/total*100).alias(c) for c in df.columns]).show()`",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "`total = df.count(); df.select([(count(when(col(c).isNull(), c))/total*100).alias(c) for c in df.columns]).show()` é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "`df.na.drop().count()`: Esta opção contém erro técnico ou implementação não recomendada",
        "`df.select([sum(col(c).isNull().cast(\"int\")).alias(c) for c in df.columns]).show()`: Esta opção contém erro técnico ou implementação não recomendada",
        "`df.describe().filter(col(\"summary\") == \"count\").show()`: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q28",
    "text": "Como você trata dados que chegam atrasados (late-arriving data) em uma pipeline de carga incremental com Delta Lake no Fabric?",
    "options": [
      "Usando operação MERGE INTO com condição de upsert que verifica se o registro já existe pelo ID; para partições fechadas, habilitando `delta.enableChangeDataFeed` e reprocessando apenas as partições afetadas pelos dados tardios.",
      "Usando `spark.conf.set(\"spark.sql.streaming.allowMultipleStatefulOperators\", \"true\")` para habilitar reprocessamento automático de dados tardios no Delta Lake.",
      "Criando uma tabela de quarentena separada para dados tardios e processando-a em um job semanal de reconciliação manual.",
      "Descartando registros com timestamp anterior ao watermark atual, pois dados tardios comprometem a consistência do pipeline incremental."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Usando operação MERGE INTO com condição de upsert que verifica se o registro já existe pelo ID; para partições fechadas, habilitando `delta.enableChangeDataFeed` e reprocessando apenas as partições afetadas pelos dados tardios.",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "Carga incremental usa watermark (timestamp, ID sequencial, CDC) para identificar registros novos/modificados desde última execução. Lookup recupera último watermark → Copy filtra com watermark → Procedure atualiza watermark. Apenas novos dados são processados.",
      "puloDoGato": "Watermark = identifica último processado. Lookup→Filter→Update = padrão incremental",
      "cascasDeBanana": [
        "Delta Load activity: não existe—use Lookup + Filter conforme padrão",
        "Incremental Load na Copy: Copy Data não detecta automaticamente—configure watermark manualmente",
        "CDC automático: CDC existe mas requer CDC enable na fonte; watermark é mais flexível"
      ],
      "dicaOuro": "Incremental não reprocessa histórico—usa watermark para marcar progresso"
    }
  },
  {
    "id": "dp700_q29",
    "text": "Em um Notebook Fabric, como você implementa Structured Streaming para ler de um Eventstream e escrever continuamente em uma tabela Delta com garantia exactly-once?",
    "options": [
      "`df = spark.read.stream(\"eventstream://nome\"); df.write.format(\"delta\").mode(\"streaming\").save(\"Tables/destino\")`",
      "`spark.streaming.read(\"eventstream\").write(\"Tables/destino\", format=\"delta\", mode=\"exactly_once\", checkpoint=\"Files/cp\")`",
      "`df = spark.readStream.eventstream(\"nome_eventstream\"); df.writeStream.delta(\"Tables/destino\", exactly_once=True).start()`",
      "`df = spark.readStream.format(\"delta\").load(\"eventstream_path\"); df.writeStream.format(\"delta\").outputMode(\"append\").option(\"checkpointLocation\", \"Files/checkpoints/stream1\").trigger(processingTime=\"30 seconds\").start(\"Tables/destino\")`"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`df = spark.readStream.format(\"delta\").load(\"eventstream_path\"); df.writeStream.format(\"delta\").outputMode(\"append\").option(\"checkpointLocation\", \"Files/checkpoints/stream1\").trigger(processingTime=\"30 seconds\").start(\"Tables/destino\")`",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Para dados de streaming/IoT em alta velocidade: Eventstream captura eventos (IoT Hub, Event Hubs) → Eventhouse processa tempo real com KQL → Lakehouse persistencia via Structured Streaming/Eventstream destination.",
      "puloDoGato": "Eventstream → Eventhouse (tempo real KQL) → Lakehouse (persistencia Delta)",
      "cascasDeBanana": [
        "Stream Analytics via Shortcut: Shortcuts são read-only, não processam streams",
        "Dataflow Gen2 streaming: Dataflows é low-code, não nativo para high-speed IoT",
        "Data Pipeline de 1min: Pipelines batched em 1 minuto não é ideal para IoT contínuo"
      ],
      "dicaOuro": "Real-time streaming = Eventstream + Eventhouse. Persistencia = Delta em Lakehouse"
    }
  },
  {
    "id": "dp700_q30",
    "text": "No Eventhouse do Fabric, como você processa dados de streaming aplicando uma agregação por janela de tempo de 5 minutos usando KQL?",
    "options": [
      "`Telemetria | window(5m) | summarize avg(temperatura) by dispositivo`",
      "`Telemetria | group by tumbling(timestamp, 5m) | aggregate avg(temperatura) by dispositivo`",
      "`Telemetria | extend janela = floor(timestamp, 5m) | summarize avg(temperatura) by janela, dispositivo`",
      "`Telemetria | summarize avg(temperatura), count() by bin(timestamp, 5m), dispositivo`"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`Telemetria | summarize avg(temperatura), count() by bin(timestamp, 5m), dispositivo`",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "Para dados de streaming/IoT em alta velocidade: Eventstream captura eventos (IoT Hub, Event Hubs) → Eventhouse processa tempo real com KQL → Lakehouse persistencia via Structured Streaming/Eventstream destination.",
      "puloDoGato": "Eventstream → Eventhouse (tempo real KQL) → Lakehouse (persistencia Delta)",
      "cascasDeBanana": [
        "Stream Analytics via Shortcut: Shortcuts são read-only, não processam streams",
        "Dataflow Gen2 streaming: Dataflows é low-code, não nativo para high-speed IoT",
        "Data Pipeline de 1min: Pipelines batched em 1 minuto não é ideal para IoT contínuo"
      ],
      "dicaOuro": "Real-time streaming = Eventstream + Eventhouse. Persistencia = Delta em Lakehouse"
    }
  },
  {
    "id": "dp700_q31",
    "text": "Em um Eventstream do Fabric, qual tipo de operação de janela temporal é mais adequado para calcular totais acumulados dentro de sessões de usuário sem duração fixa?",
    "options": [
      "Session window, que agrupa eventos dentro de uma sessão definida por um período de inatividade (gap timeout); quando não há novos eventos pelo tempo configurado, a janela é fechada e o resultado é emitido.",
      "Snapshot window, que captura o estado dos dados em um momento específico sem agrupamento temporal, ideal para relatórios de estado atual do sistema.",
      "Hopping window, que cria janelas sobrepostas deslizantes, adequada para médias móveis onde o mesmo evento pode pertencer a múltiplas janelas.",
      "Tumbling window, que divide o tempo em janelas fixas não sobrepostas, ideal para relatórios periódicos de intervalos regulares como a cada 5 minutos."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Session window, que agrupa eventos dentro de uma sessão definida por um período de inatividade (gap timeout); quando não há novos eventos pelo tempo configurado, a janela é fechada e o resultado é emitido.",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "Session window, que agrupa eventos dentro de uma sessão definida por um período de inatividade (gap timeout); quando não há novos eventos pelo tempo configurado, a janela é fechada e o resultado é emitido. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Snapshot window, que captura o estado dos dados em um momento específico sem agrupamento temporal, ideal para relatórios de estado atual do sistema.: Esta opção contém erro técnico ou implementação não recomendada",
        "Hopping window, que cria janelas sobrepostas deslizantes, adequada para médias móveis onde o mesmo evento pode pertencer a múltiplas janelas.: Esta opção contém erro técnico ou implementação não recomendada",
        "Tumbling window, que divide o tempo em janelas fixas não sobrepostas, ideal para relatórios periódicos de intervalos regulares como a cada 5 minutos.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q32",
    "text": "Quais permissões podem ser concedidas ao compartilhar um Lakehouse individualmente no Microsoft Fabric?",
    "options": [
      "Read (acesso ao SQL Analytics Endpoint e metadados), ReadAll (acesso aos arquivos Delta via OneLake), ReadData (acesso apenas aos dados via SQL endpoint) e Write (permissão de escrita no Lakehouse).",
      "Select, Insert, Update e Delete",
      "View, Edit, Admin e Delete",
      "Viewer, Contributor, Member e Admin"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Implementar e gerenciar uma solução analítica",
    "explanation": {
      "respostaCerta": "Read (acesso ao SQL Analytics Endpoint e metadados), ReadAll (acesso aos arquivos Delta via OneLake), ReadData (acesso apenas aos dados via SQL endpoint) e Write (permissão de escrita no Lakehouse).",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "Read (acesso ao SQL Analytics Endpoint e metadados), ReadAll (acesso aos arquivos Delta via OneLake), ReadData (acesso apenas aos dados via SQL endpoint) e Write (permissão de escrita no Lakehouse). é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Select, Insert, Update e Delete: Esta opção contém erro técnico ou implementação não recomendada",
        "View, Edit, Admin e Delete: Esta opção contém erro técnico ou implementação não recomendada",
        "Viewer, Contributor, Member e Admin: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q33",
    "text": "Em PySpark no Fabric, qual é a diferença de comportamento entre `whenMatchedUpdate()` e `whenMatchedUpdateAll()` em uma operação MERGE?",
    "options": [
      "`whenMatchedUpdateAll()` funciona apenas com tabelas gerenciadas; `whenMatchedUpdate()` funciona tanto com tabelas gerenciadas quanto externas.",
      "`whenMatchedUpdateAll()` processa todos os registros em paralelo; `whenMatchedUpdate()` processa sequencialmente para garantir ordem de atualização.",
      "`whenMatchedUpdateAll()` atualiza todas as colunas do destino com os valores da fonte quando há match; `whenMatchedUpdate(set={\"col\": expr})` permite especificar apenas as colunas e expressões específicas a atualizar, dando controle granular.",
      "São equivalentes; a diferença é apenas semântica para legibilidade do código sem impacto no resultado da operação Delta."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`whenMatchedUpdateAll()` atualiza todas as colunas do destino com os valores da fonte quando há match; `whenMatchedUpdate(set={\"col\": expr})` permite especificar apenas as colunas e expressões específicas a atualizar, dando controle granular.",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "`whenMatchedUpdateAll()` atualiza todas as colunas do destino com os valores da fonte quando há match; `whenMatchedUpdate(set={\"col\": expr})` permite especificar apenas as colunas e expressões específicas a atualizar, dando controle granular. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "`whenMatchedUpdateAll()` funciona apenas com tabelas gerenciadas; `whenMatchedUpdate()` funciona tanto com tabelas gerenciadas quanto externas.: Esta opção contém erro técnico ou implementação não recomendada",
        "`whenMatchedUpdateAll()` processa todos os registros em paralelo; `whenMatchedUpdate()` processa sequencialmente para garantir ordem de atualização.: Esta opção contém erro técnico ou implementação não recomendada",
        "São equivalentes; a diferença é apenas semântica para legibilidade do código sem impacto no resultado da operação Delta.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q34",
    "text": "Como um engenheiro de dados monitora o progresso e o status de execuções de Data Pipelines no Microsoft Fabric?",
    "options": [
      "Via Monitor Hub, acessível no menu de navegação do Fabric, que exibe histórico de execuções com status, duração, início/fim, erros detalhados e permite drill-down em cada atividade individual do pipeline.",
      "Via Admin Portal do Fabric, seção \"Pipeline Monitoring\", que exibe métricas de execução de todos os workspaces do tenant em tempo real.",
      "Via o painel \"Pipeline Runs\" integrado ao editor de pipeline, que exibe as últimas 10 execuções com métricas básicas de duração e status.",
      "Via Azure Monitor no portal Azure, configurando Log Analytics Workspace para receber os logs de execução dos pipelines do Fabric automaticamente."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Via Monitor Hub, acessível no menu de navegação do Fabric, que exibe histórico de execuções com status, duração, início/fim, erros detalhados e permite drill-down em cada atividade individual do pipeline.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Via Monitor Hub, acessível no menu de navegação do Fabric, que exibe histórico de execuções com status, duração, início/fim, erros detalhados e permite drill-down em cada atividade individual do pipeline. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Via Admin Portal do Fabric, seção \"Pipeline Monitoring\", que exibe métricas de execução de todos os workspaces do tenant em tempo real.: Esta opção contém erro técnico ou implementação não recomendada",
        "Via o painel \"Pipeline Runs\" integrado ao editor de pipeline, que exibe as últimas 10 execuções com métricas básicas de duração e status.: Esta opção contém erro técnico ou implementação não recomendada",
        "Via Azure Monitor no portal Azure, configurando Log Analytics Workspace para receber os logs de execução dos pipelines do Fabric automaticamente.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q35",
    "text": "Ao monitorar a execução de um Notebook Fabric com PySpark, quais informações a Spark UI fornece para identificar gargalos de performance?",
    "options": [
      "DAG (Directed Acyclic Graph) de execução por job e stage, tempo por task e executor, shuffle read/write, spill de memória para disco, skew de dados entre partições e métricas de GC (Garbage Collection) por executor.",
      "Apenas o número de linhas processadas por transformação e o tamanho dos DataFrames intermediários em memória.",
      "Apenas o tempo total de execução por célula e o consumo total de memória do cluster; detalhes por stage requerem Azure Monitor.",
      "Métricas de CPU e RAM do nó driver apenas; métricas de executores requerem acesso ao Azure Log Analytics configurado para o workspace."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "DAG (Directed Acyclic Graph) de execução por job e stage, tempo por task e executor, shuffle read/write, spill de memória para disco, skew de dados entre partições e métricas de GC (Garbage Collection) por executor.",
      "intro": "Entendendo Deployment Pipelines e transformação de parâmetros",
      "papoReto": "DAG (Directed Acyclic Graph) de execução por job e stage, tempo por task e executor, shuffle read/write, spill de memória para disco, skew de dados entre partições e métricas de GC (Garbage Collection) por executor. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Apenas o número de linhas processadas por transformação e o tamanho dos DataFrames intermediários em memória.: Esta opção contém erro técnico ou implementação não recomendada",
        "Apenas o tempo total de execução por célula e o consumo total de memória do cluster; detalhes por stage requerem Azure Monitor.: Esta opção contém erro técnico ou implementação não recomendada",
        "Métricas de CPU e RAM do nó driver apenas; métricas de executores requerem acesso ao Azure Log Analytics configurado para o workspace.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q36",
    "text": "Como um engenheiro de dados monitora falhas no refresh de modelos semânticos no Microsoft Fabric?",
    "options": [
      "Via Microsoft Purview, que monitora automaticamente todos os refreshes de modelos semânticos e gera alertas de conformidade quando falham.",
      "Via Monitor Hub (histórico de refresh com erros detalhados), via notificações por e-mail configuradas nas configurações do modelo semântico, ou via API REST do Fabric consultando o status de refresh programaticamente.",
      "Via o painel \"Refresh History\" no Power BI Desktop, que se conecta ao Fabric Service e exibe o histórico completo de refreshes com erros.",
      "Via Azure Application Insights configurado com o SDK do Power BI que envia telemetria de refresh automaticamente para o workspace de monitoramento."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Via Monitor Hub (histórico de refresh com erros detalhados), via notificações por e-mail configuradas nas configurações do modelo semântico, ou via API REST do Fabric consultando o status de refresh programaticamente.",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "Via Monitor Hub (histórico de refresh com erros detalhados), via notificações por e-mail configuradas nas configurações do modelo semântico, ou via API REST do Fabric consultando o status de refresh programaticamente. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Via Microsoft Purview, que monitora automaticamente todos os refreshes de modelos semânticos e gera alertas de conformidade quando falham.: Esta opção contém erro técnico ou implementação não recomendada",
        "Via o painel \"Refresh History\" no Power BI Desktop, que se conecta ao Fabric Service e exibe o histórico completo de refreshes com erros.: Esta opção contém erro técnico ou implementação não recomendada",
        "Via Azure Application Insights configurado com o SDK do Power BI que envia telemetria de refresh automaticamente para o workspace de monitoramento.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q37",
    "text": "Um Data Pipeline falhou com erro \"The specified path does not exist\" ao tentar ler arquivos de um Lakehouse. Qual é a abordagem correta para identificar e resolver o problema?",
    "options": [
      "Verificar no Monitor Hub os detalhes do erro com o caminho exato tentado, validar se o arquivo existe no Lakehouse via OneLake File Explorer ou notebook, corrigir o caminho na atividade Copy Data ou implementar a atividade \"Get Metadata\" para verificar existência antes da cópia.",
      "Recriar o Lakehouse e reimplantar o pipeline, pois erros de caminho indicam corrupção de metadados no OneLake que não pode ser corrigida sem recriar o item.",
      "Reiniciar a capacity Fabric para limpar o cache de metadados do OneLake que pode estar desatualizado e causando o erro de caminho não encontrado.",
      "Verificar as permissões do Service Principal usado pelo pipeline, pois erro de caminho não encontrado geralmente indica falta de permissão ReadAll no Lakehouse."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Verificar no Monitor Hub os detalhes do erro com o caminho exato tentado, validar se o arquivo existe no Lakehouse via OneLake File Explorer ou notebook, corrigir o caminho na atividade Copy Data ou implementar a atividade \"Get Metadata\" para verificar existência antes da cópia.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Verificar no Monitor Hub os detalhes do erro com o caminho exato tentado, validar se o arquivo existe no Lakehouse via OneLake File Explorer ou notebook, corrigir o caminho na atividade Copy Data ou implementar a atividade \"Get Metadata\" para verificar existência antes da cópia. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Recriar o Lakehouse e reimplantar o pipeline, pois erros de caminho indicam corrupção de metadados no OneLake que não pode ser corrigida sem recriar o item.: Esta opção contém erro técnico ou implementação não recomendada",
        "Reiniciar a capacity Fabric para limpar o cache de metadados do OneLake que pode estar desatualizado e causando o erro de caminho não encontrado.: Esta opção contém erro técnico ou implementação não recomendada",
        "Verificar as permissões do Service Principal usado pelo pipeline, pois erro de caminho não encontrado geralmente indica falta de permissão ReadAll no Lakehouse.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q38",
    "text": "Ao depurar um Dataflow Gen2 com falha no Fabric, onde você encontra os logs detalhados de erro de transformação?",
    "options": [
      "No Azure Data Factory Monitor, seção \"Dataflow debug runs\", que registra todos os erros de Dataflows Gen2 do Fabric automaticamente.",
      "No editor do Dataflow Gen2, habilitando o modo \"Debug\" que reexecuta o dataflow passo a passo mostrando os dados intermediários de cada transformação.",
      "Nos logs do workspace Git, onde o Dataflow Gen2 registra automaticamente erros de execução como commits de log no repositório configurado.",
      "No Monitor Hub, selecionando a execução com falha do Dataflow e expandindo os detalhes do erro, que exibe a etapa Power Query M que falhou, a mensagem de erro e uma amostra dos dados que causaram a falha."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "No Monitor Hub, selecionando a execução com falha do Dataflow e expandindo os detalhes do erro, que exibe a etapa Power Query M que falhou, a mensagem de erro e uma amostra dos dados que causaram a falha.",
      "intro": "Entendendo Git integration e versionamento de artefatos",
      "papoReto": "No Monitor Hub, selecionando a execução com falha do Dataflow e expandindo os detalhes do erro, que exibe a etapa Power Query M que falhou, a mensagem de erro e uma amostra dos dados que causaram a falha. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "No Azure Data Factory Monitor, seção \"Dataflow debug runs\", que registra todos os erros de Dataflows Gen2 do Fabric automaticamente.: Esta opção contém erro técnico ou implementação não recomendada",
        "No editor do Dataflow Gen2, habilitando o modo \"Debug\" que reexecuta o dataflow passo a passo mostrando os dados intermediários de cada transformação.: Esta opção contém erro técnico ou implementação não recomendada",
        "Nos logs do workspace Git, onde o Dataflow Gen2 registra automaticamente erros de execução como commits de log no repositório configurado.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q39",
    "text": "Um Notebook Fabric está demorando muito para processar uma join entre duas tabelas Delta grandes. Qual técnica de otimização PySpark é mais eficaz quando uma das tabelas é pequena (< 100 MB)?",
    "options": [
      "Usar Broadcast Join com `df_grande.join(broadcast(df_pequena), \"chave\")`",
      "Usar `df_grande.repartition(200, \"chave\").join(df_pequena.repartition(200, \"chave\"), \"chave\")` para garantir que os dados de mesma chave estejam na mesma partição.",
      "Converter ambas as tabelas para formato Parquet sem particionamento antes do join, pois Delta Lake adiciona overhead de leitura do transaction log que impacta joins.",
      "Habilitar o Adaptive Query Execution (AQE) com `spark.conf.set(\"spark.sql.adaptive.enabled\", \"true\")` que automaticamente escolhe a estratégia de join mais eficiente."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Usar Broadcast Join com `df_grande.join(broadcast(df_pequena), \"chave\")`",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "Usar Broadcast Join com `df_grande.join(broadcast(df_pequena), \"chave\")` é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Usar `df_grande.repartition(200, \"chave\").join(df_pequena.repartition(200, \"chave\"), \"chave\")` para garantir que os dados de mesma chave estejam na mesma partição.: Esta opção contém erro técnico ou implementação não recomendada",
        "Converter ambas as tabelas para formato Parquet sem particionamento antes do join, pois Delta Lake adiciona overhead de leitura do transaction log que impacta joins.: Esta opção contém erro técnico ou implementação não recomendada",
        "Habilitar o Adaptive Query Execution (AQE) com `spark.conf.set(\"spark.sql.adaptive.enabled\", \"true\")` que automaticamente escolhe a estratégia de join mais eficiente.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q40",
    "text": "Um engenheiro identifica que queries SQL no Lakehouse estão lentas em uma tabela Delta com 500 milhões de linhas filtradas por data. Qual conjunto de otimizações deve ser aplicado?",
    "options": [
      "Executar `OPTIMIZE tabela ZORDER BY (data_coluna)` para colocar dados relacionados por data próximos fisicamente, garantir particionamento por ano/mês na escrita futura e executar `VACUUM` periodicamente para remover arquivos obsoletos.",
      "Criar índices B-Tree na coluna de data usando `CREATE INDEX idx_data ON tabela(data_coluna)`",
      "Aumentar o número de partições Spark com `spark.conf.set(\"spark.sql.shuffle.partitions\", \"1000\")` que melhora automaticamente o desempenho de filtros no SQL Analytics Endpoint.",
      "Converter a tabela Delta para formato Parquet puro sem transaction log, pois o overhead do Delta Lake impacta consultas de filtro por data."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Executar `OPTIMIZE tabela ZORDER BY (data_coluna)` para colocar dados relacionados por data próximos fisicamente, garantir particionamento por ano/mês na escrita futura e executar `VACUUM` periodicamente para remover arquivos obsoletos.",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "Executar `OPTIMIZE tabela ZORDER BY (data_coluna)` para colocar dados relacionados por data próximos fisicamente, garantir particionamento por ano/mês na escrita futura e executar `VACUUM` periodicamente para remover arquivos obsoletos. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Criar índices B-Tree na coluna de data usando `CREATE INDEX idx_data ON tabela(data_coluna)`: Esta opção contém erro técnico ou implementação não recomendada",
        "Aumentar o número de partições Spark com `spark.conf.set(\"spark.sql.shuffle.partitions\", \"1000\")` que melhora automaticamente o desempenho de filtros no SQL Analytics Endpoint.: Esta opção contém erro técnico ou implementação não recomendada",
        "Converter a tabela Delta para formato Parquet puro sem transaction log, pois o overhead do Delta Lake impacta consultas de filtro por data.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q41",
    "text": "Um Warehouse do Fabric está com queries de relatório lentas envolvendo múltiplos JOINs. Quais ações melhoram o desempenho?",
    "options": [
      "Criar estatísticas de coluna nas colunas de JOIN e filtro com `CREATE STATISTICS`, usar CTAS para criar tabelas de agregação pré-calculadas, analisar o plano de execução via Query Insights e verificar a distribuição de dados para evitar skew.",
      "Converter o Warehouse para um Lakehouse e usar o SQL Analytics Endpoint, que tem desempenho superior para queries com múltiplos JOINs por usar Spark como motor de execução.",
      "Criar índices clusterizados nas colunas de JOIN usando `CREATE CLUSTERED INDEX`",
      "Aumentar o número de nós do Warehouse nas configurações de capacity, pois queries lentas com JOINs indicam insuficiência de recursos computacionais dedicados ao item."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Criar estatísticas de coluna nas colunas de JOIN e filtro com `CREATE STATISTICS`, usar CTAS para criar tabelas de agregação pré-calculadas, analisar o plano de execução via Query Insights e verificar a distribuição de dados para evitar skew.",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "Criar estatísticas de coluna nas colunas de JOIN e filtro com `CREATE STATISTICS`, usar CTAS para criar tabelas de agregação pré-calculadas, analisar o plano de execução via Query Insights e verificar a distribuição de dados para evitar skew. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Converter o Warehouse para um Lakehouse e usar o SQL Analytics Endpoint, que tem desempenho superior para queries com múltiplos JOINs por usar Spark como motor de execução.: Esta opção contém erro técnico ou implementação não recomendada",
        "Criar índices clusterizados nas colunas de JOIN usando `CREATE CLUSTERED INDEX`: Esta opção contém erro técnico ou implementação não recomendada",
        "Aumentar o número de nós do Warehouse nas configurações de capacity, pois queries lentas com JOINs indicam insuficiência de recursos computacionais dedicados ao item.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q42",
    "text": "Qual é a diferença entre os padrões ETL (Extract-Transform-Load) e ELT (Extract-Load-Transform) e qual é mais comum no Microsoft Fabric?",
    "options": [
      "São sinônimos modernos; a distinção foi eliminada com plataformas cloud como o Fabric que executam transformação e carga simultaneamente em um único passo.",
      "ETL transforma dados antes de carregar no destino (processamento externo); ELT carrega dados brutos primeiro e transforma no destino usando o poder computacional da plataforma; no Fabric, ELT é mais comum pois aproveita Spark e SQL nativos do Lakehouse/Warehouse.",
      "ETL usa Data Pipelines; ELT usa exclusivamente Notebooks PySpark; o Fabric suporta apenas ELT por design da arquitetura Medallion.",
      "ETL é mais adequado para dados em batch; ELT é exclusivo para dados de streaming; o Fabric usa automaticamente o padrão correto baseado no tipo de fonte."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "ETL transforma dados antes de carregar no destino (processamento externo); ELT carrega dados brutos primeiro e transforma no destino usando o poder computacional da plataforma; no Fabric, ELT é mais comum pois aproveita Spark e SQL nativos do Lakehouse/Warehouse.",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "ETL transforma dados antes de carregar no destino (processamento externo); ELT carrega dados brutos primeiro e transforma no destino usando o poder computacional da plataforma; no Fabric, ELT é mais comum pois aproveita Spark e SQL nativos do Lakehouse/Warehouse. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "São sinônimos modernos; a distinção foi eliminada com plataformas cloud como o Fabric que executam transformação e carga simultaneamente em um único passo.: Esta opção contém erro técnico ou implementação não recomendada",
        "ETL usa Data Pipelines; ELT usa exclusivamente Notebooks PySpark; o Fabric suporta apenas ELT por design da arquitetura Medallion.: Esta opção contém erro técnico ou implementação não recomendada",
        "ETL é mais adequado para dados em batch; ELT é exclusivo para dados de streaming; o Fabric usa automaticamente o padrão correto baseado no tipo de fonte.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q43",
    "text": "Como você implementa Row-Level Security em um Lakehouse do Fabric para que analistas de cada região vejam apenas seus dados via SQL Analytics Endpoint?",
    "options": [
      "Configurando partições separadas por região no Delta Lake e usando ACLs do OneLake para restringir acesso de cada analista à pasta de sua região.",
      "Criando uma security policy T-SQL com predicado inline usando `SESSION_CONTEXT()` ou `SYSTEM_USER`, ou usando views filtradas por `SUSER_SNAME()` combinadas com uma tabela de mapeamento usuário-região, concedendo acesso apenas às views.",
      "Usando Sensitivity Labels do Purview com política de acesso condicional que filtra automaticamente as linhas baseado no atributo de departamento do token Azure AD.",
      "Criando um modelo semântico com RLS DAX sobre o SQL Analytics Endpoint e obrigando todos os analistas a acessar apenas via Power BI."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar uma solução analítica",
    "explanation": {
      "respostaCerta": "Criando uma security policy T-SQL com predicado inline usando `SESSION_CONTEXT()` ou `SYSTEM_USER`, ou usando views filtradas por `SUSER_SNAME()` combinadas com uma tabela de mapeamento usuário-região, concedendo acesso apenas às views.",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "Criando uma security policy T-SQL com predicado inline usando `SESSION_CONTEXT()` ou `SYSTEM_USER`, ou usando views filtradas por `SUSER_SNAME()` combinadas com uma tabela de mapeamento usuário-região, concedendo acesso apenas às views. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Configurando partições separadas por região no Delta Lake e usando ACLs do OneLake para restringir acesso de cada analista à pasta de sua região.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando Sensitivity Labels do Purview com política de acesso condicional que filtra automaticamente as linhas baseado no atributo de departamento do token Azure AD.: Esta opção contém erro técnico ou implementação não recomendada",
        "Criando um modelo semântico com RLS DAX sobre o SQL Analytics Endpoint e obrigando todos os analistas a acessar apenas via Power BI.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q44",
    "text": "Como um engenheiro de dados identifica quais workloads estão consumindo mais CUs na capacity Fabric e causando throttling?",
    "options": [
      "Usando o Microsoft Fabric Capacity Metrics App (aplicativo Power BI) que exibe consumo de CUs por workspace, item e tipo de operação, permitindo identificar picos de uso e operações mais custosas.",
      "Acessando o Azure Cost Management no portal Azure que detalha o consumo de recursos do Fabric por workspace e tipo de workload em tempo real.",
      "Consultando a tabela `sys.dm_exec_query_stats` no Warehouse que registra o consumo de recursos de todas as queries executadas na capacity.",
      "Habilitando o Azure Monitor Diagnostics nas configurações do Fabric e consultando os logs no Log Analytics Workspace para análise de consumo."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Usando o Microsoft Fabric Capacity Metrics App (aplicativo Power BI) que exibe consumo de CUs por workspace, item e tipo de operação, permitindo identificar picos de uso e operações mais custosas.",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "Usando o Microsoft Fabric Capacity Metrics App (aplicativo Power BI) que exibe consumo de CUs por workspace, item e tipo de operação, permitindo identificar picos de uso e operações mais custosas. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Acessando o Azure Cost Management no portal Azure que detalha o consumo de recursos do Fabric por workspace e tipo de workload em tempo real.: Esta opção contém erro técnico ou implementação não recomendada",
        "Consultando a tabela `sys.dm_exec_query_stats` no Warehouse que registra o consumo de recursos de todas as queries executadas na capacity.: Esta opção contém erro técnico ou implementação não recomendada",
        "Habilitando o Azure Monitor Diagnostics nas configurações do Fabric e consultando os logs no Log Analytics Workspace para análise de consumo.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q45",
    "text": "Em um workspace Fabric com Git integration conectado ao Azure DevOps, o que acontece quando um desenvolvedor faz checkout de um branch diferente no repositório?",
    "options": [
      "O workspace continua no branch anterior; é necessário desconectar e reconectar o workspace ao Git selecionando o novo branch nas configurações.",
      "O Fabric detecta a mudança de branch e solicita ao usuário que sincronize o workspace com o novo branch, atualizando os itens do workspace para refletir o estado do branch selecionado via \"Update from Git\".",
      "O Fabric cria automaticamente um novo workspace temporário para o novo branch, preservando o workspace original no branch anterior.",
      "Os itens do workspace são automaticamente atualizados para o estado do novo branch sem intervenção do usuário, garantindo sincronia imediata."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar uma solução analítica",
    "explanation": {
      "respostaCerta": "O Fabric detecta a mudança de branch e solicita ao usuário que sincronize o workspace com o novo branch, atualizando os itens do workspace para refletir o estado do branch selecionado via \"Update from Git\".",
      "intro": "Entendendo Git integration e versionamento de artefatos",
      "papoReto": "Git integration sincroniza definições de artefatos (JSON/TMDL para notebooks, pipelines, warehouses) com repositório. Importante: NUNCA sincroniza dados reais das tabelas Delta—apenas metadata. Dados sempre permanecem no OneLake.",
      "puloDoGato": "Git = definições (código + schema). Dados = OneLake. Nunca confunda",
      "cascasDeBanana": [
        "Dados Delta como Parquet: Delta tables nunca são sincronizadas—só metadata é versionada",
        "Exportação manual: Git sync é automático para itens suportados quando habilitado",
        "Marcação manual de itens: Sync é automático, sem necessidade de marcação individual"
      ],
      "dicaOuro": "Separação crítica: Git versioniza definições, OneLake guarda dados"
    }
  },
  {
    "id": "dp700_q46",
    "text": "Em um Data Pipeline do Fabric, como você implementa retry automático para uma atividade Copy Data que pode falhar por timeout de conexão com uma fonte externa instável?",
    "options": [
      "Conectando o path \"On Failure\" de volta para a mesma atividade Copy Data, criando um loop de retry controlado por uma variável de contador.",
      "Configurando um trigger de evento no workspace que detecta falhas do pipeline e o reexecuta automaticamente com os mesmos parâmetros.",
      "Configurando as propriedades \"Retry\" (número de tentativas) e \"Retry interval\" (tempo de espera entre tentativas) diretamente nas propriedades da atividade Copy Data, sem necessidade de lógica adicional no pipeline.",
      "Usando a atividade \"Until\" que envolve o Copy Data e tenta novamente enquanto uma variável de erro não for nula, com limite máximo de iterações configurável."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Configurando as propriedades \"Retry\" (número de tentativas) e \"Retry interval\" (tempo de espera entre tentativas) diretamente nas propriedades da atividade Copy Data, sem necessidade de lógica adicional no pipeline.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Configurando as propriedades \"Retry\" (número de tentativas) e \"Retry interval\" (tempo de espera entre tentativas) diretamente nas propriedades da atividade Copy Data, sem necessidade de lógica adicional no pipeline. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Conectando o path \"On Failure\" de volta para a mesma atividade Copy Data, criando um loop de retry controlado por uma variável de contador.: Esta opção contém erro técnico ou implementação não recomendada",
        "Configurando um trigger de evento no workspace que detecta falhas do pipeline e o reexecuta automaticamente com os mesmos parâmetros.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando a atividade \"Until\" que envolve o Copy Data e tenta novamente enquanto uma variável de erro não for nula, com limite máximo de iterações configurável.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q47",
    "text": "Após habilitar o Workspace Logging no Fabric com destino a um Lakehouse, como você consulta os logs para identificar quais usuários acessaram um Lakehouse específico nas últimas 24 horas?",
    "options": [
      "Consultando as tabelas de log geradas no Lakehouse de destino via SQL Analytics Endpoint ou PySpark, filtrando por `ItemId` ou `ItemName` do Lakehouse alvo e `Timestamp` das últimas 24 horas e agrupando por `UserId`.",
      "Usando o Microsoft Purview Audit Log API com filtro por `workload = \"Lakehouse\"` e intervalo de tempo das últimas 24 horas para obter os acessos.",
      "Consultando a tabela `sys.dm_exec_sessions` no SQL Analytics Endpoint do Lakehouse monitorado que registra automaticamente todas as sessões de acesso.",
      "Acessando o Monitor Hub e filtrando por tipo de item \"Lakehouse\" e período de tempo, que exibe automaticamente os logs de acesso por usuário."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Consultando as tabelas de log geradas no Lakehouse de destino via SQL Analytics Endpoint ou PySpark, filtrando por `ItemId` ou `ItemName` do Lakehouse alvo e `Timestamp` das últimas 24 horas e agrupando por `UserId`.",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "Consultando as tabelas de log geradas no Lakehouse de destino via SQL Analytics Endpoint ou PySpark, filtrando por `ItemId` ou `ItemName` do Lakehouse alvo e `Timestamp` das últimas 24 horas e agrupando por `UserId`. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Usando o Microsoft Purview Audit Log API com filtro por `workload = \"Lakehouse\"` e intervalo de tempo das últimas 24 horas para obter os acessos.: Esta opção contém erro técnico ou implementação não recomendada",
        "Consultando a tabela `sys.dm_exec_sessions` no SQL Analytics Endpoint do Lakehouse monitorado que registra automaticamente todas as sessões de acesso.: Esta opção contém erro técnico ou implementação não recomendada",
        "Acessando o Monitor Hub e filtrando por tipo de item \"Lakehouse\" e período de tempo, que exibe automaticamente os logs de acesso por usuário.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q48",
    "text": "Em um Notebook Fabric, como você lista recursivamente todos os arquivos em uma pasta do Lakehouse e filtra apenas arquivos CSV usando mssparkutils?",
    "options": [
      "`mssparkutils.fs.listFiles(\"Files/pasta\", pattern=\"*.csv\", depth=-1)`",
      "`glob.glob(\"Files/pasta/**/*.csv\", recursive=True)`",
      "`mssparkutils.fs.find(\"Files/pasta\", \"*.csv\", recursive=True)`",
      "`files = mssparkutils.fs.ls(\"Files/pasta\"); csv_files = [f.path for f in files if f.name.endswith(\".csv\")]`"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`files = mssparkutils.fs.ls(\"Files/pasta\"); csv_files = [f.path for f in files if f.name.endswith(\".csv\")]`",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "`files = mssparkutils.fs.ls(\"Files/pasta\"); csv_files = [f.path for f in files if f.name.endswith(\".csv\")]` é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "`mssparkutils.fs.listFiles(\"Files/pasta\", pattern=\"*.csv\", depth=-1)`: Esta opção contém erro técnico ou implementação não recomendada",
        "`glob.glob(\"Files/pasta/**/*.csv\", recursive=True)`: Esta opção contém erro técnico ou implementação não recomendada",
        "`mssparkutils.fs.find(\"Files/pasta\", \"*.csv\", recursive=True)`: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q49",
    "text": "Um Data Pipeline do Fabric está demorando 3 horas para copiar 50 tabelas de um Azure SQL Database para um Lakehouse sequencialmente. Qual é a melhor otimização?",
    "options": [
      "Substituir a atividade Copy Data por uma atividade Notebook com PySpark que usa `spark.read.jdbc` com múltiplas partições para copiar todas as tabelas de uma vez.",
      "Usar a atividade ForEach com a propriedade \"Batch count\" configurada para executar múltiplas cópias em paralelo (ex: 10 tabelas simultâneas), reduzindo o tempo total proporcionalmente ao grau de paralelismo suportado pela fonte e pelo Fabric.",
      "Configurar o pipeline para usar uma integration runtime dedicada de alto desempenho com 32 vCores para aumentar o throughput de cópia.",
      "Pré-comprimir os dados no Azure SQL Database antes da cópia usando `COMPRESS()` e descomprimir no Lakehouse com uma atividade Script pós-cópia."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Usar a atividade ForEach com a propriedade \"Batch count\" configurada para executar múltiplas cópias em paralelo (ex: 10 tabelas simultâneas), reduzindo o tempo total proporcionalmente ao grau de paralelismo suportado pela fonte e pelo Fabric.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Usar a atividade ForEach com a propriedade \"Batch count\" configurada para executar múltiplas cópias em paralelo (ex: 10 tabelas simultâneas), reduzindo o tempo total proporcionalmente ao grau de paralelismo suportado pela fonte e pelo Fabric. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Substituir a atividade Copy Data por uma atividade Notebook com PySpark que usa `spark.read.jdbc` com múltiplas partições para copiar todas as tabelas de uma vez.: Esta opção contém erro técnico ou implementação não recomendada",
        "Configurar o pipeline para usar uma integration runtime dedicada de alto desempenho com 32 vCores para aumentar o throughput de cópia.: Esta opção contém erro técnico ou implementação não recomendada",
        "Pré-comprimir os dados no Azure SQL Database antes da cópia usando `COMPRESS()` e descomprimir no Lakehouse com uma atividade Script pós-cópia.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q50",
    "text": "Qual é a diferença entre os níveis de endorsement \"Promoted\" e \"Certified\" para itens do Microsoft Fabric?\n## LOTE 2 — Questões 51 a 100 | DP-700",
    "options": [
      "São equivalentes em nível de confiança; a diferença é apenas visual",
      "\"Promoted\" é configurado no Admin Portal pelo administrador do tenant; \"Certified\" é atribuído automaticamente pelo Microsoft Purview após validação de qualidade de dados.",
      "\"Promoted\" pode ser aplicado por qualquer membro do workspace para indicar que o item está pronto para uso; \"Certified\" requer permissão especial concedida pelo administrador do tenant e indica validação formal por um processo de governança organizacional.",
      "\"Promoted\" aplica-se apenas a relatórios e dashboards; \"Certified\" aplica-se apenas a modelos semânticos e Lakehouses como fontes de dados confiáveis."
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Implementar e gerenciar uma solução analítica",
    "explanation": {
      "respostaCerta": "\"Promoted\" pode ser aplicado por qualquer membro do workspace para indicar que o item está pronto para uso; \"Certified\" requer permissão especial concedida pelo administrador do tenant e indica validação formal por um processo de governança organizacional.",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "\"Promoted\" pode ser aplicado por qualquer membro do workspace para indicar que o item está pronto para uso; \"Certified\" requer permissão especial concedida pelo administrador do tenant e indica validação formal por um processo de governança organizacional. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "São equivalentes em nível de confiança; a diferença é apenas visual: Esta opção contém erro técnico ou implementação não recomendada",
        "\"Promoted\" é configurado no Admin Portal pelo administrador do tenant; \"Certified\" é atribuído automaticamente pelo Microsoft Purview após validação de qualidade de dados.: Esta opção contém erro técnico ou implementação não recomendada",
        "\"Promoted\" aplica-se apenas a relatórios e dashboards; \"Certified\" aplica-se apenas a modelos semânticos e Lakehouses como fontes de dados confiáveis.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q51",
    "text": "No SQL Analytics Endpoint de um Lakehouse, você cria uma view para encapsular uma transformação complexa. Qual é a limitação importante dessa view?",
    "options": [
      "Views no SQL Analytics Endpoint não são visíveis no modelo semântico Direct Lake; é necessário criar tabelas físicas para exposição ao Power BI.",
      "Views no SQL Analytics Endpoint são somente leitura e não persistem dados; cada consulta à view reprocessa a lógica subjacente; para melhor desempenho em consultas frequentes, deve-se materializar o resultado em uma tabela Delta via notebook ou pipeline.",
      "Views no SQL Analytics Endpoint não suportam JOINs entre tabelas de diferentes schemas; todos os objetos referenciados devem estar no mesmo schema dbo.",
      "Views são recriadas automaticamente após cada refresh do Lakehouse, exigindo que o engenheiro as recrie manualmente via script de inicialização."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Views no SQL Analytics Endpoint são somente leitura e não persistem dados; cada consulta à view reprocessa a lógica subjacente; para melhor desempenho em consultas frequentes, deve-se materializar o resultado em uma tabela Delta via notebook ou pipeline.",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "Views no SQL Analytics Endpoint são somente leitura e não persistem dados; cada consulta à view reprocessa a lógica subjacente; para melhor desempenho em consultas frequentes, deve-se materializar o resultado em uma tabela Delta via notebook ou pipeline. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Views no SQL Analytics Endpoint não são visíveis no modelo semântico Direct Lake; é necessário criar tabelas físicas para exposição ao Power BI.: Esta opção contém erro técnico ou implementação não recomendada",
        "Views no SQL Analytics Endpoint não suportam JOINs entre tabelas de diferentes schemas; todos os objetos referenciados devem estar no mesmo schema dbo.: Esta opção contém erro técnico ou implementação não recomendada",
        "Views são recriadas automaticamente após cada refresh do Lakehouse, exigindo que o engenheiro as recrie manualmente via script de inicialização.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q52",
    "text": "Um Notebook Fabric está falhando com OutOfMemoryError ao processar um DataFrame de 200 GB. Quais estratégias resolvem o problema sem aumentar o tamanho do cluster?",
    "options": [
      "Usar `df.repartition(500)` para distribuir melhor os dados entre executores, processar em chunks com `df.filter()` por partição temporal, usar `persist(StorageLevel.DISK_ONLY)` para spill controlado, e otimizar transformações para evitar shuffles desnecessários.",
      "Usar `df.coalesce(1)` para consolidar todos os dados em um único executor que tem acesso a toda a memória disponível do nó driver.",
      "Desabilitar o lazy evaluation com `spark.conf.set(\"spark.sql.lazy.evaluation\", \"false\")` para que o Spark aloque memória previamente e evite o erro em tempo de execução.",
      "Converter o DataFrame para pandas com `df.toPandas()` antes do processamento, pois pandas tem gerenciamento de memória superior ao PySpark para grandes volumes."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Usar `df.repartition(500)` para distribuir melhor os dados entre executores, processar em chunks com `df.filter()` por partição temporal, usar `persist(StorageLevel.DISK_ONLY)` para spill controlado, e otimizar transformações para evitar shuffles desnecessários.",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "Usar `df.repartition(500)` para distribuir melhor os dados entre executores, processar em chunks com `df.filter()` por partição temporal, usar `persist(StorageLevel.DISK_ONLY)` para spill controlado, e otimizar transformações para evitar shuffles desnecessários. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Usar `df.coalesce(1)` para consolidar todos os dados em um único executor que tem acesso a toda a memória disponível do nó driver.: Esta opção contém erro técnico ou implementação não recomendada",
        "Desabilitar o lazy evaluation com `spark.conf.set(\"spark.sql.lazy.evaluation\", \"false\")` para que o Spark aloque memória previamente e evite o erro em tempo de execução.: Esta opção contém erro técnico ou implementação não recomendada",
        "Converter o DataFrame para pandas com `df.toPandas()` antes do processamento, pois pandas tem gerenciamento de memória superior ao PySpark para grandes volumes.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q53",
    "text": "Na atividade Copy Data de um pipeline Fabric com destino Lakehouse, qual é a diferença entre os modos de escrita \"Overwrite\" e \"Append\"?",
    "options": [
      "\"Overwrite\" aplica-se apenas à seção Tables do Lakehouse; \"Append\" aplica-se apenas à seção Files, pois arquivos não podem ser sobrescritos no OneLake.",
      "\"Overwrite\" é mais rápido pois usa transação única; \"Append\" é mais lento pois verifica duplicatas antes de inserir cada registro.",
      "\"Overwrite\" cria uma nova versão Delta preservando o histórico para time travel; \"Append\" sobrescreve a versão atual sem criar nova entrada no transaction log.",
      "\"Overwrite\" trunca os dados existentes no destino antes de escrever os novos dados, substituindo completamente o conteúdo; \"Append\" adiciona os novos dados ao existente sem remover registros anteriores, ideal para cargas incrementais."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "\"Overwrite\" trunca os dados existentes no destino antes de escrever os novos dados, substituindo completamente o conteúdo; \"Append\" adiciona os novos dados ao existente sem remover registros anteriores, ideal para cargas incrementais.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "\"Overwrite\" trunca os dados existentes no destino antes de escrever os novos dados, substituindo completamente o conteúdo; \"Append\" adiciona os novos dados ao existente sem remover registros anteriores, ideal para cargas incrementais. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "\"Overwrite\" aplica-se apenas à seção Tables do Lakehouse; \"Append\" aplica-se apenas à seção Files, pois arquivos não podem ser sobrescritos no OneLake.: Esta opção contém erro técnico ou implementação não recomendada",
        "\"Overwrite\" é mais rápido pois usa transação única; \"Append\" é mais lento pois verifica duplicatas antes de inserir cada registro.: Esta opção contém erro técnico ou implementação não recomendada",
        "\"Overwrite\" cria uma nova versão Delta preservando o histórico para time travel; \"Append\" sobrescreve a versão atual sem criar nova entrada no transaction log.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q54",
    "text": "O que é um Domain no Microsoft Fabric e como ele é configurado para um workspace de engenharia de dados?",
    "options": [
      "Um Domain é um namespace de nomenclatura para itens do workspace que evita conflitos de nome entre workspaces diferentes do mesmo tenant Fabric.",
      "Um Domain é uma configuração de rede que define quais endereços IP externos podem acessar os itens do workspace via API REST do Fabric.",
      "Um Domain é uma região geográfica do Azure onde os dados do workspace são armazenados fisicamente, configurado nas propriedades de cada workspace para conformidade com residência de dados.",
      "Um Domain é um agrupamento lógico de workspaces relacionados por área de negócio (ex: \"Dados Financeiros\"), configurado pelo administrador do tenant no Admin Portal; permite aplicar políticas de governança, delegação de administração e visibilidade no OneLake Catalog por domínio."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Implementar e gerenciar uma solução analítica",
    "explanation": {
      "respostaCerta": "Um Domain é um agrupamento lógico de workspaces relacionados por área de negócio (ex: \"Dados Financeiros\"), configurado pelo administrador do tenant no Admin Portal; permite aplicar políticas de governança, delegação de administração e visibilidade no OneLake Catalog por domínio.",
      "intro": "Entendendo Fabric workspace e gerenciamento de recursos",
      "papoReto": "Um Domain é um agrupamento lógico de workspaces relacionados por área de negócio (ex: \"Dados Financeiros\"), configurado pelo administrador do tenant no Admin Portal; permite aplicar políticas de governança, delegação de administração e visibilidade no OneLake Catalog por domínio. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Um Domain é um namespace de nomenclatura para itens do workspace que evita conflitos de nome entre workspaces diferentes do mesmo tenant Fabric.: Esta opção contém erro técnico ou implementação não recomendada",
        "Um Domain é uma configuração de rede que define quais endereços IP externos podem acessar os itens do workspace via API REST do Fabric.: Esta opção contém erro técnico ou implementação não recomendada",
        "Um Domain é uma região geográfica do Azure onde os dados do workspace são armazenados fisicamente, configurado nas propriedades de cada workspace para conformidade com residência de dados.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q55",
    "text": "Por que é recomendado definir o schema explicitamente ao ler arquivos CSV em PySpark no Fabric em vez de usar `inferSchema=True`?",
    "options": [
      "`inferSchema=True` usa sempre o tipo String para todas as colunas por segurança; a inferência real de tipos requer bibliotecas externas não disponíveis no Fabric.",
      "`inferSchema=True` funciona apenas para arquivos com menos de 1 milhão de linhas; arquivos maiores requerem schema explícito para evitar timeout durante a inferência.",
      "`inferSchema=True` não é suportado no runtime Spark do Fabric; é necessário sempre definir o schema explicitamente usando `StructType` para evitar erros de execução.",
      "`inferSchema=True` requer uma passagem extra pelos dados para inferir os tipos, aumentando o tempo de leitura; schemas inferidos podem ser incorretos (ex: IDs numéricos lidos como inteiros quando deveriam ser strings); schema explícito é mais eficiente e confiável em produção."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`inferSchema=True` requer uma passagem extra pelos dados para inferir os tipos, aumentando o tempo de leitura; schemas inferidos podem ser incorretos (ex: IDs numéricos lidos como inteiros quando deveriam ser strings); schema explícito é mais eficiente e confiável em produção.",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "`inferSchema=True` requer uma passagem extra pelos dados para inferir os tipos, aumentando o tempo de leitura; schemas inferidos podem ser incorretos (ex: IDs numéricos lidos como inteiros quando deveriam ser strings); schema explícito é mais eficiente e confiável em produção. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "`inferSchema=True` usa sempre o tipo String para todas as colunas por segurança; a inferência real de tipos requer bibliotecas externas não disponíveis no Fabric.: Esta opção contém erro técnico ou implementação não recomendada",
        "`inferSchema=True` funciona apenas para arquivos com menos de 1 milhão de linhas; arquivos maiores requerem schema explícito para evitar timeout durante a inferência.: Esta opção contém erro técnico ou implementação não recomendada",
        "`inferSchema=True` não é suportado no runtime Spark do Fabric; é necessário sempre definir o schema explicitamente usando `StructType` para evitar erros de execução.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q56",
    "text": "Em um Queryset KQL do Fabric, você recebe o erro \"semantic error: 'coluna' is not defined\". Qual é a causa mais provável e como resolvê-la?",
    "options": [
      "A coluna referenciada não existe na tabela KQL ou foi renomeada; verificar o schema da tabela com `.show table NomeTabela schema as json` e corrigir o nome da coluna na query ou usar `project-rename` se o nome foi alterado recentemente.",
      "A query excedeu o limite de memória do Eventhouse; reduzir o número de colunas selecionadas com `project` para diminuir o consumo de recursos.",
      "A coluna existe mas tem tipo de dado incompatível com a operação aplicada; converter o tipo com `tostring()`, `toint()` ou `todatetime()` antes de usar na expressão.",
      "A coluna é uma coluna calculada que requer materialização prévia; executar `ALTER TABLE NomeTabela refresh` para atualizar os metadados da tabela KQL."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "A coluna referenciada não existe na tabela KQL ou foi renomeada; verificar o schema da tabela com `.show table NomeTabela schema as json` e corrigir o nome da coluna na query ou usar `project-rename` se o nome foi alterado recentemente.",
      "intro": "Entendendo Fabric workspace e gerenciamento de recursos",
      "papoReto": "A coluna referenciada não existe na tabela KQL ou foi renomeada; verificar o schema da tabela com `.show table NomeTabela schema as json` e corrigir o nome da coluna na query ou usar `project-rename` se o nome foi alterado recentemente. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "A query excedeu o limite de memória do Eventhouse; reduzir o número de colunas selecionadas com `project` para diminuir o consumo de recursos.: Esta opção contém erro técnico ou implementação não recomendada",
        "A coluna existe mas tem tipo de dado incompatível com a operação aplicada; converter o tipo com `tostring()`, `toint()` ou `todatetime()` antes de usar na expressão.: Esta opção contém erro técnico ou implementação não recomendada",
        "A coluna é uma coluna calculada que requer materialização prévia; executar `ALTER TABLE NomeTabela refresh` para atualizar os metadados da tabela KQL.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q57",
    "text": "Quais são os métodos de ingestão disponíveis para carregar dados em um KQL Database de um Eventhouse no Fabric?",
    "options": [
      "Via Dataflow Gen2 com o conector KQL Database como destino, e via notebooks PySpark usando a biblioteca `azure-kusto-data` instalada via `%pip install`.",
      "Apenas via comandos KQL `.ingest from` e `.ingest inline`; outros métodos requerem um Lakehouse intermediário como staging area.",
      "Ingestão via Eventstream (streaming), ingestão via Data Pipeline (batch com atividade copy), ingestão via comando KQL `.ingest` ou `.set-or-append`, ingestão via One-click ingestion na interface do Fabric e via API de ingestão do Azure Data Explorer.",
      "Apenas via Eventstream para dados em streaming e via notebooks PySpark para dados em batch; o Eventhouse não suporta ingestão direta via Data Pipeline."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Ingestão via Eventstream (streaming), ingestão via Data Pipeline (batch com atividade copy), ingestão via comando KQL `.ingest` ou `.set-or-append`, ingestão via One-click ingestion na interface do Fabric e via API de ingestão do Azure Data Explorer.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Para dados de streaming/IoT em alta velocidade: Eventstream captura eventos (IoT Hub, Event Hubs) → Eventhouse processa tempo real com KQL → Lakehouse persistencia via Structured Streaming/Eventstream destination.",
      "puloDoGato": "Eventstream → Eventhouse (tempo real KQL) → Lakehouse (persistencia Delta)",
      "cascasDeBanana": [
        "Stream Analytics via Shortcut: Shortcuts são read-only, não processam streams",
        "Dataflow Gen2 streaming: Dataflows é low-code, não nativo para high-speed IoT",
        "Data Pipeline de 1min: Pipelines batched em 1 minuto não é ideal para IoT contínuo"
      ],
      "dicaOuro": "Real-time streaming = Eventstream + Eventhouse. Persistencia = Delta em Lakehouse"
    }
  },
  {
    "id": "dp700_q58",
    "text": "Como você restringe o acesso de um grupo de usuários a uma tabela específica no SQL Analytics Endpoint de um Lakehouse no Fabric?",
    "options": [
      "Criando uma sensitivity label de nível Confidential na tabela, que automaticamente restringe o acesso via SQL a usuários sem licença Microsoft 365 E5 Compliance.",
      "Configurando OLS (Object-Level Security) no modelo semântico Power BI conectado ao Lakehouse, que propaga automaticamente a restrição para o SQL Analytics Endpoint.",
      "Usando `DENY SELECT ON [dbo].[tabela_restrita] TO [grupo_usuarios]` via T-SQL no SQL Analytics Endpoint, ou criando views que expõem apenas as tabelas permitidas e concedendo `GRANT SELECT` apenas nas views.",
      "Usando ACLs do OneLake para restringir acesso aos arquivos Delta da tabela, que automaticamente bloqueia o acesso via SQL Analytics Endpoint para usuários não autorizados."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar uma solução analítica",
    "explanation": {
      "respostaCerta": "Usando `DENY SELECT ON [dbo].[tabela_restrita] TO [grupo_usuarios]` via T-SQL no SQL Analytics Endpoint, ou criando views que expõem apenas as tabelas permitidas e concedendo `GRANT SELECT` apenas nas views.",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "Usando `DENY SELECT ON [dbo].[tabela_restrita] TO [grupo_usuarios]` via T-SQL no SQL Analytics Endpoint, ou criando views que expõem apenas as tabelas permitidas e concedendo `GRANT SELECT` apenas nas views. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Criando uma sensitivity label de nível Confidential na tabela, que automaticamente restringe o acesso via SQL a usuários sem licença Microsoft 365 E5 Compliance.: Esta opção contém erro técnico ou implementação não recomendada",
        "Configurando OLS (Object-Level Security) no modelo semântico Power BI conectado ao Lakehouse, que propaga automaticamente a restrição para o SQL Analytics Endpoint.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando ACLs do OneLake para restringir acesso aos arquivos Delta da tabela, que automaticamente bloqueia o acesso via SQL Analytics Endpoint para usuários não autorizados.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q59",
    "text": "Em uma arquitetura Medallion implementada em um Lakehouse do Fabric, quais transformações são tipicamente aplicadas na camada Silver?",
    "options": [
      "Aplicação de criptografia em colunas sensíveis, compressão de dados históricos e arquivamento de registros com mais de 2 anos para redução de custos de armazenamento.",
      "Limpeza e padronização de dados (remoção de duplicatas, tratamento de nulos, normalização de formatos), validação de schema, enriquecimento básico com dados de referência e conversão para formato Delta com tipos de dados corretos.",
      "Recepção de dados brutos das fontes originais sem qualquer transformação, mantendo o formato e estrutura originais como fonte da verdade histórica.",
      "Criação de agregações e métricas de negócio, construção do modelo dimensional (star schema) e otimização para consumo por ferramentas de BI e analistas."
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Limpeza e padronização de dados (remoção de duplicatas, tratamento de nulos, normalização de formatos), validação de schema, enriquecimento básico com dados de referência e conversão para formato Delta com tipos de dados corretos.",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "Medallion (Bronze → Silver → Gold): Bronze = dados brutos, Silver = limpos/padronizados, Gold = dimensional otimizado. Em cada camada use transformações apropriadas: Bronze (parsing), Silver (SCD, surrogate keys), Gold (fatos/dimensões).",
      "puloDoGato": "Bronze = raw. Silver = cleaned + SCD. Gold = fact+dim optimized. Camada = transformação",
      "cascasDeBanana": [
        "Modelo dimensional em Bronze: transformação antecipada desperdiça; Silver é para limpeza, Gold para dimensional",
        "Dados direto em Gold: sem validação—Silver é camada crítica de qualidade",
        "Desnormalizado em Fato: star schema exige dimensões separadas, não atributos na fato"
      ],
      "dicaOuro": "Cada camada é transformação incremental: raw→clean→dimensional"
    }
  },
  {
    "id": "dp700_q60",
    "text": "Em um Eventhouse do Fabric, como você monitora a taxa de ingestão de dados em tempo real para verificar se os eventos estão chegando conforme esperado?",
    "options": [
      "Usando o Monitor Hub do Fabric filtrado por tipo \"Eventhouse\" que exibe métricas de ingestão em tempo real para todos os KQL Databases do workspace.",
      "Acessando o Azure Event Hubs no portal Azure e verificando as métricas de \"Incoming Messages\" que mostram os eventos recebidos antes da ingestão no Eventhouse.",
      "Usando o comando KQL `.show ingestion failures` para verificar falhas, `Telemetria | summarize count() by bin(ingestion_time(), 1m)` para ver a taxa por minuto, e o painel de métricas do Eventhouse no portal Fabric que exibe throughput de ingestão.",
      "Consultando a tabela `system.ingestion_monitoring` no KQL Database que registra automaticamente todas as operações de ingestão com timestamps e volumes."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Usando o comando KQL `.show ingestion failures` para verificar falhas, `Telemetria | summarize count() by bin(ingestion_time(), 1m)` para ver a taxa por minuto, e o painel de métricas do Eventhouse no portal Fabric que exibe throughput de ingestão.",
      "intro": "Entendendo Fabric workspace e gerenciamento de recursos",
      "papoReto": "Para dados de streaming/IoT em alta velocidade: Eventstream captura eventos (IoT Hub, Event Hubs) → Eventhouse processa tempo real com KQL → Lakehouse persistencia via Structured Streaming/Eventstream destination.",
      "puloDoGato": "Eventstream → Eventhouse (tempo real KQL) → Lakehouse (persistencia Delta)",
      "cascasDeBanana": [
        "Stream Analytics via Shortcut: Shortcuts são read-only, não processam streams",
        "Dataflow Gen2 streaming: Dataflows é low-code, não nativo para high-speed IoT",
        "Data Pipeline de 1min: Pipelines batched em 1 minuto não é ideal para IoT contínuo"
      ],
      "dicaOuro": "Real-time streaming = Eventstream + Eventhouse. Persistencia = Delta em Lakehouse"
    }
  },
  {
    "id": "dp700_q61",
    "text": "Como você implementa um padrão de pipeline no Fabric onde a lista de tabelas a processar é lida dinamicamente de uma tabela de configuração no Lakehouse?",
    "options": [
      "Criando um Notebook com PySpark que lê a configuração e chama a API REST do Fabric para disparar pipelines individuais para cada tabela via `mssparkutils.notebook.run()`.",
      "Atividade Web chama uma API REST que retorna a lista de tabelas em JSON → atividade ForEach processa o JSON com expressão `@json(activity('Web').output.content)`.",
      "Atividade Script lê a tabela de configuração e cria variáveis de pipeline → atividade Switch redireciona para branches individuais para cada tabela configurada.",
      "Atividade Lookup lê a tabela de configuração retornando a lista de tabelas → atividade ForEach itera sobre `@activity('Lookup').output.value` → dentro do ForEach, atividade Copy Data usa `@item().nome_tabela` dinamicamente como parâmetro de source e sink."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Atividade Lookup lê a tabela de configuração retornando a lista de tabelas → atividade ForEach itera sobre `@activity('Lookup').output.value` → dentro do ForEach, atividade Copy Data usa `@item().nome_tabela` dinamicamente como parâmetro de source e sink.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Atividade Lookup lê a tabela de configuração retornando a lista de tabelas → atividade ForEach itera sobre `@activity('Lookup').output.value` → dentro do ForEach, atividade Copy Data usa `@item().nome_tabela` dinamicamente como parâmetro de source e sink. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Criando um Notebook com PySpark que lê a configuração e chama a API REST do Fabric para disparar pipelines individuais para cada tabela via `mssparkutils.notebook.run()`.: Esta opção contém erro técnico ou implementação não recomendada",
        "Atividade Web chama uma API REST que retorna a lista de tabelas em JSON → atividade ForEach processa o JSON com expressão `@json(activity('Web').output.content)`.: Esta opção contém erro técnico ou implementação não recomendada",
        "Atividade Script lê a tabela de configuração e cria variáveis de pipeline → atividade Switch redireciona para branches individuais para cada tabela configurada.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q62",
    "text": "Como Database Projects do Fabric se integram com Azure DevOps para um fluxo de CI/CD de engenharia de dados?",
    "options": [
      "A integração é automática; qualquer commit no repositório Git do workspace é imediatamente aplicado no Warehouse de produção sem necessidade de pipeline CI/CD adicional.",
      "O projeto SQL é versionado no Azure Repos como scripts T-SQL; um pipeline YAML do Azure DevOps compila o projeto (dacpac), executa testes de integração e publica as mudanças de schema no Warehouse de destino via SqlPackage ou extensão Fabric do DevOps.",
      "Database Projects usam apenas pipelines do Fabric (não Azure DevOps); a publicação é feita via Deployment Pipeline do Fabric com regras de substituição de connection strings.",
      "O Database Project é exportado como arquivo .bacpac mensalmente e importado manualmente no Warehouse de produção pelo DBA responsável pela governança de schema."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar uma solução analítica",
    "explanation": {
      "respostaCerta": "O projeto SQL é versionado no Azure Repos como scripts T-SQL; um pipeline YAML do Azure DevOps compila o projeto (dacpac), executa testes de integração e publica as mudanças de schema no Warehouse de destino via SqlPackage ou extensão Fabric do DevOps.",
      "intro": "Entendendo Deployment Pipelines e transformação de parâmetros",
      "papoReto": "Database Projects versio nam scripts T-SQL (DDL para tabelas, views, procedures) em Git como código declarativo. Workflow: escrever .sql → Git → compilar (dacpac) → comparar schema → publicar no Warehouse com versionamento.",
      "puloDoGato": "SQL Projects = DDL versionado em Git com schema comparison e publish",
      "cascasDeBanana": [
        "Templates gerados: Projects são developer-led SQL files, não templates automáticos",
        "Backup de dados: Projects definem schema, nunca versionam dados",
        "Notebooks organizados: Notebooks são iterativos, Projects são declarativos"
      ],
      "dicaOuro": "Database Projects = CI/CD nativo para warehouse schemas"
    }
  },
  {
    "id": "dp700_q63",
    "text": "Um job de Structured Streaming no Fabric está com latência crescente ao longo do tempo. Qual é a causa mais provável e como diagnosticar?",
    "options": [
      "Fragmentação dos arquivos checkpoint que cresce indefinidamente; limpar o diretório de checkpoint e reiniciar o stream do início para resolver a latência crescente.",
      "Memory leak no driver Spark causado por acumulação de variáveis Python não liberadas; reiniciar a sessão periodicamente e usar `del variavel; gc.collect()` após cada micro-batch.",
      "Acúmulo de dados não processados (backlog) por throughput insuficiente; diagnosticar via Spark UI na aba \"Structured Streaming\" verificando métricas de \"inputRowsPerSecond\" vs \"processedRowsPerSecond\" e ajustar `trigger(processingTime)` ou aumentar o paralelismo.",
      "Conflito de transações Delta Lake entre o stream de escrita e queries de leitura concorrentes; usar `option(\"txnAppId\", uuid)` para isolar as transações do stream."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Acúmulo de dados não processados (backlog) por throughput insuficiente; diagnosticar via Spark UI na aba \"Structured Streaming\" verificando métricas de \"inputRowsPerSecond\" vs \"processedRowsPerSecond\" e ajustar `trigger(processingTime)` ou aumentar o paralelismo.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Para dados de streaming/IoT em alta velocidade: Eventstream captura eventos (IoT Hub, Event Hubs) → Eventhouse processa tempo real com KQL → Lakehouse persistencia via Structured Streaming/Eventstream destination.",
      "puloDoGato": "Eventstream → Eventhouse (tempo real KQL) → Lakehouse (persistencia Delta)",
      "cascasDeBanana": [
        "Stream Analytics via Shortcut: Shortcuts são read-only, não processam streams",
        "Dataflow Gen2 streaming: Dataflows é low-code, não nativo para high-speed IoT",
        "Data Pipeline de 1min: Pipelines batched em 1 minuto não é ideal para IoT contínuo"
      ],
      "dicaOuro": "Real-time streaming = Eventstream + Eventhouse. Persistencia = Delta em Lakehouse"
    }
  },
  {
    "id": "dp700_q64",
    "text": "Em um Notebook Fabric implementando a camada Silver de uma arquitetura Medallion, como você carrega dados da Bronze, aplica transformações e salva na Silver de forma idempotente?",
    "options": [
      "Ler da Bronze via SQL Analytics Endpoint com `spark.read.jdbc()` e escrever na Silver como arquivo CSV para compatibilidade com ferramentas externas de BI.",
      "Usar `df.write.format(\"parquet\").mode(\"overwrite\").save(\"Files/silver/tabela\")`",
      "Usar `df.write.format(\"delta\").mode(\"append\").saveAsTable(\"silver_tabela\")` sem verificação de duplicatas, pois a camada Silver aceita dados duplicados que são resolvidos na Gold.",
      "Ler da Bronze com `spark.read.format(\"delta\").load(\"Tables/bronze/tabela\")`, aplicar transformações, escrever na Silver com `df.write.format(\"delta\").mode(\"overwrite\").option(\"overwriteSchema\", \"true\").saveAsTable(\"silver_tabela\")`"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Ler da Bronze com `spark.read.format(\"delta\").load(\"Tables/bronze/tabela\")`, aplicar transformações, escrever na Silver com `df.write.format(\"delta\").mode(\"overwrite\").option(\"overwriteSchema\", \"true\").saveAsTable(\"silver_tabela\")`",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "Medallion (Bronze → Silver → Gold): Bronze = dados brutos, Silver = limpos/padronizados, Gold = dimensional otimizado. Em cada camada use transformações apropriadas: Bronze (parsing), Silver (SCD, surrogate keys), Gold (fatos/dimensões).",
      "puloDoGato": "Bronze = raw. Silver = cleaned + SCD. Gold = fact+dim optimized. Camada = transformação",
      "cascasDeBanana": [
        "Modelo dimensional em Bronze: transformação antecipada desperdiça; Silver é para limpeza, Gold para dimensional",
        "Dados direto em Gold: sem validação—Silver é camada crítica de qualidade",
        "Desnormalizado em Fato: star schema exige dimensões separadas, não atributos na fato"
      ],
      "dicaOuro": "Cada camada é transformação incremental: raw→clean→dimensional"
    }
  },
  {
    "id": "dp700_q65",
    "text": "Como Sensitivity Labels do Microsoft Purview são aplicadas a itens do Microsoft Fabric por um engenheiro de dados?",
    "options": [
      "Via Power BI Desktop na propriedade \"Information Protection\" do relatório ou modelo, que propaga automaticamente para todos os itens relacionados no Fabric.",
      "Apenas via Microsoft Purview Compliance Portal pelo administrador de conformidade; engenheiros de dados não têm permissão para aplicar ou alterar sensitivity labels.",
      "Via interface do Fabric (botão de sensitivity label no item), via API REST do Fabric programaticamente, ou via políticas de auto-labeling do Purview que aplicam labels automaticamente baseado em classificação de conteúdo detectada nos dados.",
      "Via configurações de workspace no Admin Portal do Fabric, onde o administrador define qual label é aplicada a todos os itens do workspace automaticamente."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Implementar e gerenciar uma solução analítica",
    "explanation": {
      "respostaCerta": "Via interface do Fabric (botão de sensitivity label no item), via API REST do Fabric programaticamente, ou via políticas de auto-labeling do Purview que aplicam labels automaticamente baseado em classificação de conteúdo detectada nos dados.",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "Via interface do Fabric (botão de sensitivity label no item), via API REST do Fabric programaticamente, ou via políticas de auto-labeling do Purview que aplicam labels automaticamente baseado em classificação de conteúdo detectada nos dados. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Via Power BI Desktop na propriedade \"Information Protection\" do relatório ou modelo, que propaga automaticamente para todos os itens relacionados no Fabric.: Esta opção contém erro técnico ou implementação não recomendada",
        "Apenas via Microsoft Purview Compliance Portal pelo administrador de conformidade; engenheiros de dados não têm permissão para aplicar ou alterar sensitivity labels.: Esta opção contém erro técnico ou implementação não recomendada",
        "Via configurações de workspace no Admin Portal do Fabric, onde o administrador define qual label é aplicada a todos os itens do workspace automaticamente.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q66",
    "text": "O que é Liquid Clustering no Delta Lake e como ele difere do particionamento tradicional para otimização de queries no Fabric?",
    "options": [
      "Liquid Clustering é uma funcionalidade exclusiva do Databricks Delta Lake e não está disponível no Microsoft Fabric; a alternativa no Fabric é sempre o particionamento com Z-Ordering.",
      "Liquid Clustering organiza fisicamente os dados por colunas de clustering sem criar partições rígidas de diretório, permitindo reclustering incremental com `OPTIMIZE` sem reescrever toda a tabela; é mais flexível que particionamento quando as colunas de filtro mudam com frequência.",
      "Liquid Clustering cria índices secundários líquidos que se adaptam automaticamente aos padrões de query observados, sem necessidade de configuração manual das colunas.",
      "Liquid Clustering é um alias para Z-Ordering no Delta Lake do Fabric; ambos organizam os dados da mesma forma e podem ser usados intercambiavelmente."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Liquid Clustering organiza fisicamente os dados por colunas de clustering sem criar partições rígidas de diretório, permitindo reclustering incremental com `OPTIMIZE` sem reescrever toda a tabela; é mais flexível que particionamento quando as colunas de filtro mudam com frequência.",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "Liquid Clustering organiza fisicamente os dados por colunas de clustering sem criar partições rígidas de diretório, permitindo reclustering incremental com `OPTIMIZE` sem reescrever toda a tabela; é mais flexível que particionamento quando as colunas de filtro mudam com frequência. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Liquid Clustering é uma funcionalidade exclusiva do Databricks Delta Lake e não está disponível no Microsoft Fabric; a alternativa no Fabric é sempre o particionamento com Z-Ordering.: Esta opção contém erro técnico ou implementação não recomendada",
        "Liquid Clustering cria índices secundários líquidos que se adaptam automaticamente aos padrões de query observados, sem necessidade de configuração manual das colunas.: Esta opção contém erro técnico ou implementação não recomendada",
        "Liquid Clustering é um alias para Z-Ordering no Delta Lake do Fabric; ambos organizam os dados da mesma forma e podem ser usados intercambiavelmente.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q67",
    "text": "No Warehouse do Fabric, como você cria uma função inline table-valued (iTVF) para encapsular uma query parametrizada e reutilizá-la em múltiplas queries?",
    "options": [
      "`CREATE TABLE FUNCTION dbo.fn_vendas_regiao (@regiao VARCHAR(50)) RETURNS TABLE AS SELECT * FROM dbo.vendas WHERE regiao = @regiao`",
      "`CREATE VIEW dbo.fn_vendas_regiao AS SELECT * FROM dbo.vendas WHERE regiao = @regiao`",
      "`CREATE PROCEDURE dbo.fn_vendas_regiao @regiao VARCHAR(50) AS SELECT * FROM dbo.vendas WHERE regiao = @regiao`",
      "`CREATE FUNCTION dbo.fn_vendas_regiao (@regiao VARCHAR(50)) RETURNS TABLE AS RETURN (SELECT * FROM dbo.vendas WHERE regiao = @regiao)`"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`CREATE FUNCTION dbo.fn_vendas_regiao (@regiao VARCHAR(50)) RETURNS TABLE AS RETURN (SELECT * FROM dbo.vendas WHERE regiao = @regiao)`",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "`CREATE FUNCTION dbo.fn_vendas_regiao (@regiao VARCHAR(50)) RETURNS TABLE AS RETURN (SELECT * FROM dbo.vendas WHERE regiao = @regiao)` é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "`CREATE TABLE FUNCTION dbo.fn_vendas_regiao (@regiao VARCHAR(50)) RETURNS TABLE AS SELECT * FROM dbo.vendas WHERE regiao = @regiao`: Esta opção contém erro técnico ou implementação não recomendada",
        "`CREATE VIEW dbo.fn_vendas_regiao AS SELECT * FROM dbo.vendas WHERE regiao = @regiao`: Esta opção contém erro técnico ou implementação não recomendada",
        "`CREATE PROCEDURE dbo.fn_vendas_regiao @regiao VARCHAR(50) AS SELECT * FROM dbo.vendas WHERE regiao = @regiao`: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q68",
    "text": "Como o caching de Shortcuts no OneLake melhora o desempenho de leitura de dados externos no Fabric?",
    "options": [
      "O caching replica automaticamente todos os dados de Shortcuts para o OneLake local como cópia completa permanente, sincronizando com a fonte a cada hora.",
      "O caching de Shortcuts só está disponível para fontes Azure internas (ADLS Gen2, Blob Storage); fontes externas como S3 não são cacheadas por restrições de conformidade.",
      "O caching é habilitado automaticamente pelo Fabric quando detecta que um Shortcut é acessado mais de 10 vezes por hora, sem necessidade de configuração manual.",
      "Quando habilitado, o OneLake mantém uma cópia local em cache dos dados acessados via Shortcuts de fontes externas (ADLS Gen2, S3), reduzindo a latência de leitura e o custo de egress de dados ao servir leituras subsequentes do cache local em vez da fonte original."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Quando habilitado, o OneLake mantém uma cópia local em cache dos dados acessados via Shortcuts de fontes externas (ADLS Gen2, S3), reduzindo a latência de leitura e o custo de egress de dados ao servir leituras subsequentes do cache local em vez da fonte original.",
      "intro": "Entendendo Shortcuts como virtual links vs. Mirror para cópias reais",
      "papoReto": "Shortcuts são pointers virtuais read-only para dados externos (ADLS Gen2, S3, Google Cloud, Lakehouses Fabric) sem copiar. Mirror copia incrementalmente dados. Escolha shortcuts para acesso virtual, mirror para cópias gerenciadas.",
      "puloDoGato": "Shortcut = read-only pointer. Mirror = incremental copy. Escolha conforme precisa escrever",
      "cascasDeBanana": [
        "Lakehouses separados: possível mas ineficiente—shortcuts no mesmo é melhor",
        "Sensitivity Labels: classificam, não controlam acesso como ACLs",
        "RLS: filtra linhas de tabelas, diferente de acesso a arquivos"
      ],
      "dicaOuro": "Shortcuts referenciam, Mirrors copiam. Use conforme necessidade de escrita"
    }
  },
  {
    "id": "dp700_q69",
    "text": "Em um KQL Database do Eventhouse, como você configura uma política de ingestão em batch para otimizar o custo de ingestão de dados que chegam em alto volume mas não requerem latência de segundos?",
    "options": [
      "Usando `.alter table NomeTabela policy ingestionbatching @'{\"MaximumBatchingTimeSpan\":\"00:05:00\",\"MaximumNumberOfItems\":10000,\"MaximumRawDataSizeMB\":1024}'` para agrupar registros antes da ingestão e reduzir o overhead de transações individuais.",
      "Configurando `spark.conf.set(\"eventhouse.batching.enabled\", \"true\")` no notebook PySpark que envia dados para o Eventhouse via Structured Streaming.",
      "Usando `.set-or-replace NomeTabela <| query` que automaticamente agrupa os dados em batch de 5 minutos antes de confirmar a transação de ingestão.",
      "Habilitando a opção \"Batch Ingestion Mode\" nas configurações do Eventstream antes de rotear os dados para o Eventhouse como destino."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Usando `.alter table NomeTabela policy ingestionbatching @'{\"MaximumBatchingTimeSpan\":\"00:05:00\",\"MaximumNumberOfItems\":10000,\"MaximumRawDataSizeMB\":1024}'` para agrupar registros antes da ingestão e reduzir o overhead de transações individuais.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Para dados de streaming/IoT em alta velocidade: Eventstream captura eventos (IoT Hub, Event Hubs) → Eventhouse processa tempo real com KQL → Lakehouse persistencia via Structured Streaming/Eventstream destination.",
      "puloDoGato": "Eventstream → Eventhouse (tempo real KQL) → Lakehouse (persistencia Delta)",
      "cascasDeBanana": [
        "Stream Analytics via Shortcut: Shortcuts são read-only, não processam streams",
        "Dataflow Gen2 streaming: Dataflows é low-code, não nativo para high-speed IoT",
        "Data Pipeline de 1min: Pipelines batched em 1 minuto não é ideal para IoT contínuo"
      ],
      "dicaOuro": "Real-time streaming = Eventstream + Eventhouse. Persistencia = Delta em Lakehouse"
    }
  },
  {
    "id": "dp700_q70",
    "text": "Como você encadeia a execução de múltiplos notebooks no Fabric em um fluxo orquestrado onde o notebook B só executa se o notebook A for bem-sucedido?",
    "options": [
      "Usando `spark.submitJob(\"NotebookB\")` no final do Notebook A, que submete o job assincronamente e monitora o status via API do Spark.",
      "Usando `mssparkutils.notebook.run(\"NotebookB\", timeout=3600, arguments={\"param\": \"valor\"})` dentro do Notebook A após as transformações, o que garante execução sequencial com propagação de erros; ou usando um Data Pipeline com múltiplas atividades Notebook conectadas pelo path \"On Success\".",
      "Criando uma variável global de workspace que o Notebook A define como \"concluído\" e o Notebook B verifica periodicamente antes de iniciar sua execução.",
      "Configurando uma dependência de trigger entre os notebooks nas propriedades de agendamento do workspace, onde o agendamento do Notebook B tem como pré-requisito a conclusão do Notebook A."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Implementar e gerenciar uma solução analítica",
    "explanation": {
      "respostaCerta": "Usando `mssparkutils.notebook.run(\"NotebookB\", timeout=3600, arguments={\"param\": \"valor\"})` dentro do Notebook A após as transformações, o que garante execução sequencial com propagação de erros; ou usando um Data Pipeline com múltiplas atividades Notebook conectadas pelo path \"On Success\".",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Usando `mssparkutils.notebook.run(\"NotebookB\", timeout=3600, arguments={\"param\": \"valor\"})` dentro do Notebook A após as transformações, o que garante execução sequencial com propagação de erros; ou usando um Data Pipeline com múltiplas atividades Notebook conectadas pelo path \"On Success\". é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Usando `spark.submitJob(\"NotebookB\")` no final do Notebook A, que submete o job assincronamente e monitora o status via API do Spark.: Esta opção contém erro técnico ou implementação não recomendada",
        "Criando uma variável global de workspace que o Notebook A define como \"concluído\" e o Notebook B verifica periodicamente antes de iniciar sua execução.: Esta opção contém erro técnico ou implementação não recomendada",
        "Configurando uma dependência de trigger entre os notebooks nas propriedades de agendamento do workspace, onde o agendamento do Notebook B tem como pré-requisito a conclusão do Notebook A.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q71",
    "text": "Um pipeline Fabric falha intermitentemente com erro \"429 Too Many Requests\" ao chamar uma API REST externa. Qual é a solução mais robusta?",
    "options": [
      "Configurar retry com backoff exponencial na atividade Web usando as propriedades de retry, adicionar uma atividade \"Wait\" com duração dinâmica baseada no cabeçalho `Retry-After` da resposta 429, e considerar implementar circuit breaker com atividade \"If Condition\" para pausar após N falhas consecutivas.",
      "Criar um Service Principal dedicado para o pipeline com tier de API mais alto, pois erros 429 indicam que a cota da conta de serviço foi excedida.",
      "Aumentar o timeout da atividade Web de 30 segundos para 300 segundos, pois o erro 429 indica que a API está demorando mais que o timeout configurado para responder.",
      "Substituir a atividade Web por uma atividade Copy Data com o conector REST, que tem tratamento automático de rate limiting com retry inteligente embutido."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Configurar retry com backoff exponencial na atividade Web usando as propriedades de retry, adicionar uma atividade \"Wait\" com duração dinâmica baseada no cabeçalho `Retry-After` da resposta 429, e considerar implementar circuit breaker com atividade \"If Condition\" para pausar após N falhas consecutivas.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Configurar retry com backoff exponencial na atividade Web usando as propriedades de retry, adicionar uma atividade \"Wait\" com duração dinâmica baseada no cabeçalho `Retry-After` da resposta 429, e considerar implementar circuit breaker com atividade \"If Condition\" para pausar após N falhas consecutivas. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Criar um Service Principal dedicado para o pipeline com tier de API mais alto, pois erros 429 indicam que a cota da conta de serviço foi excedida.: Esta opção contém erro técnico ou implementação não recomendada",
        "Aumentar o timeout da atividade Web de 30 segundos para 300 segundos, pois o erro 429 indica que a API está demorando mais que o timeout configurado para responder.: Esta opção contém erro técnico ou implementação não recomendada",
        "Substituir a atividade Web por uma atividade Copy Data com o conector REST, que tem tratamento automático de rate limiting com retry inteligente embutido.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q72",
    "text": "Em um Notebook Fabric, quando é apropriado usar uma UDF (User Defined Function) Python e qual é seu impacto de performance?",
    "options": [
      "UDFs Python são adequadas para lógica complexa não disponível em funções Spark nativas; têm impacto de performance pois quebram a otimização Catalyst e serializam dados entre JVM e Python por linha; preferir funções nativas do Spark ou Pandas UDFs (vectorized) quando possível.",
      "UDFs Python têm melhor performance que funções Spark nativas pois executam diretamente no Python sem overhead de tradução para bytecode JVM.",
      "UDFs são sempre executadas no nó driver sem paralelismo, independente do número de executores; devem ser usadas apenas para transformações de dados com menos de 1 milhão de linhas.",
      "UDFs no Fabric Spark são compiladas JIT automaticamente pelo runtime, eliminando o overhead de serialização presente em versões anteriores do PySpark."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "UDFs Python são adequadas para lógica complexa não disponível em funções Spark nativas; têm impacto de performance pois quebram a otimização Catalyst e serializam dados entre JVM e Python por linha; preferir funções nativas do Spark ou Pandas UDFs (vectorized) quando possível.",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "UDFs Python são adequadas para lógica complexa não disponível em funções Spark nativas; têm impacto de performance pois quebram a otimização Catalyst e serializam dados entre JVM e Python por linha; preferir funções nativas do Spark ou Pandas UDFs (vectorized) quando possível. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "UDFs Python têm melhor performance que funções Spark nativas pois executam diretamente no Python sem overhead de tradução para bytecode JVM.: Esta opção contém erro técnico ou implementação não recomendada",
        "UDFs são sempre executadas no nó driver sem paralelismo, independente do número de executores; devem ser usadas apenas para transformações de dados com menos de 1 milhão de linhas.: Esta opção contém erro técnico ou implementação não recomendada",
        "UDFs no Fabric Spark são compiladas JIT automaticamente pelo runtime, eliminando o overhead de serialização presente em versões anteriores do PySpark.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q73",
    "text": "O que acontece com os workloads do Fabric quando a capacity atinge 100% de utilização de CUs por período prolongado?",
    "options": [
      "O Fabric cancela automaticamente todos os jobs em execução e bloqueia novas submissões até que a utilização caia abaixo de 80% por 5 minutos consecutivos.",
      "O Fabric aplica throttling (limitação de recursos) enfileirando ou atrasando operações interativas e em background; operações críticas têm prioridade; o Capacity Metrics App mostra o período de smoothing e o impacto do throttling por tipo de workload.",
      "O Fabric escala automaticamente para uma capacity maior quando a utilização excede 100% por mais de 1 minuto, cobrando o custo adicional automaticamente.",
      "Apenas workloads de baixa prioridade são cancelados; jobs críticos como refreshes de modelos semânticos têm garantia de execução independente da utilização da capacity."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "O Fabric aplica throttling (limitação de recursos) enfileirando ou atrasando operações interativas e em background; operações críticas têm prioridade; o Capacity Metrics App mostra o período de smoothing e o impacto do throttling por tipo de workload.",
      "intro": "Entendendo Fabric workspace e gerenciamento de recursos",
      "papoReto": "O Fabric aplica throttling (limitação de recursos) enfileirando ou atrasando operações interativas e em background; operações críticas têm prioridade; o Capacity Metrics App mostra o período de smoothing e o impacto do throttling por tipo de workload. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "O Fabric cancela automaticamente todos os jobs em execução e bloqueia novas submissões até que a utilização caia abaixo de 80% por 5 minutos consecutivos.: Esta opção contém erro técnico ou implementação não recomendada",
        "O Fabric escala automaticamente para uma capacity maior quando a utilização excede 100% por mais de 1 minuto, cobrando o custo adicional automaticamente.: Esta opção contém erro técnico ou implementação não recomendada",
        "Apenas workloads de baixa prioridade são cancelados; jobs críticos como refreshes de modelos semânticos têm garantia de execução independente da utilização da capacity.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q74",
    "text": "Qual é a diferença entre usar Mirroring e um Data Pipeline para ingestão de dados de um Azure SQL Database no Fabric?",
    "options": [
      "Mirroring replica continuamente as alterações em near real-time via CDC sem necessidade de desenvolver lógica de pipeline; Data Pipeline oferece mais controle sobre transformações, agendamento e orquestração mas requer desenvolvimento e manutenção da lógica de extração incremental.",
      "Mirroring suporta apenas fontes Azure; Data Pipeline suporta fontes on-premises e multicloud; para SQL Server on-premises é obrigatório usar Data Pipeline com gateway.",
      "Mirroring é mais caro que Data Pipeline pois consome CUs continuamente; Data Pipeline é mais econômico pois só consume CUs durante a execução agendada.",
      "Mirroring cria uma cópia exata somente leitura da fonte no Fabric; Data Pipeline permite transformações mas não garante consistência transacional dos dados copiados."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Mirroring replica continuamente as alterações em near real-time via CDC sem necessidade de desenvolver lógica de pipeline; Data Pipeline oferece mais controle sobre transformações, agendamento e orquestração mas requer desenvolvimento e manutenção da lógica de extração incremental.",
      "intro": "Entendendo Shortcuts como virtual links vs. Mirror para cópias reais",
      "papoReto": "Shortcuts são pointers virtuais read-only para dados externos (ADLS Gen2, S3, Google Cloud, Lakehouses Fabric) sem copiar. Mirror copia incrementalmente dados. Escolha shortcuts para acesso virtual, mirror para cópias gerenciadas.",
      "puloDoGato": "Shortcut = read-only pointer. Mirror = incremental copy. Escolha conforme precisa escrever",
      "cascasDeBanana": [
        "Lakehouses separados: possível mas ineficiente—shortcuts no mesmo é melhor",
        "Sensitivity Labels: classificam, não controlam acesso como ACLs",
        "RLS: filtra linhas de tabelas, diferente de acesso a arquivos"
      ],
      "dicaOuro": "Shortcuts referenciam, Mirrors copiam. Use conforme necessidade de escrita"
    }
  },
  {
    "id": "dp700_q75",
    "text": "Como você implementa Column-Level Security no Warehouse do Fabric para impedir que usuários sem autorização vejam a coluna \"salario\" de uma tabela de funcionários?",
    "options": [
      "Usando OLS no modelo semântico Power BI configurando `MetadataPermission = None` para a coluna salario, que propaga automaticamente para o Warehouse SQL endpoint.",
      "`DENY SELECT ON dbo.funcionarios(salario) TO [grupo_restrito]` via T-SQL",
      "Criando uma view `dbo.vw_funcionarios_sem_salario` sem a coluna salario e removendo o acesso direto à tabela base; válido como alternativa mas não implementa CLS nativo.",
      "`CREATE SECURITY POLICY salario_policy ADD FILTER PREDICATE fn_salario_check(usuario) ON dbo.funcionarios`"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar uma solução analítica",
    "explanation": {
      "respostaCerta": "`DENY SELECT ON dbo.funcionarios(salario) TO [grupo_restrito]` via T-SQL",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "`DENY SELECT ON dbo.funcionarios(salario) TO [grupo_restrito]` via T-SQL é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Usando OLS no modelo semântico Power BI configurando `MetadataPermission = None` para a coluna salario, que propaga automaticamente para o Warehouse SQL endpoint.: Esta opção contém erro técnico ou implementação não recomendada",
        "Criando uma view `dbo.vw_funcionarios_sem_salario` sem a coluna salario e removendo o acesso direto à tabela base; válido como alternativa mas não implementa CLS nativo.: Esta opção contém erro técnico ou implementação não recomendada",
        "`CREATE SECURITY POLICY salario_policy ADD FILTER PREDICATE fn_salario_check(usuario) ON dbo.funcionarios`: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q76",
    "text": "Como você usa o Query Insights do Warehouse do Fabric para identificar as queries mais lentas executadas na última semana?",
    "options": [
      "Acessando o Azure Monitor e consultando a tabela `AzureDiagnostics` filtrada por `Category = \"QueryStore\"` para o recurso Fabric Warehouse correspondente.",
      "`SELECT * FROM information_schema.query_history WHERE execution_date >= NOW() - INTERVAL 7 DAY ORDER BY duration DESC`",
      "`SELECT * FROM sys.dm_exec_query_stats ORDER BY total_elapsed_time DESC`",
      "`SELECT TOP 10 query_text, total_elapsed_time_ms, execution_count FROM queryinsights.exec_requests_history WHERE start_time >= DATEADD(day, -7, GETDATE()) ORDER BY total_elapsed_time_ms DESC`"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "`SELECT TOP 10 query_text, total_elapsed_time_ms, execution_count FROM queryinsights.exec_requests_history WHERE start_time >= DATEADD(day, -7, GETDATE()) ORDER BY total_elapsed_time_ms DESC`",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "`SELECT TOP 10 query_text, total_elapsed_time_ms, execution_count FROM queryinsights.exec_requests_history WHERE start_time >= DATEADD(day, -7, GETDATE()) ORDER BY total_elapsed_time_ms DESC` é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Acessando o Azure Monitor e consultando a tabela `AzureDiagnostics` filtrada por `Category = \"QueryStore\"` para o recurso Fabric Warehouse correspondente.: Esta opção contém erro técnico ou implementação não recomendada",
        "`SELECT * FROM information_schema.query_history WHERE execution_date >= NOW() - INTERVAL 7 DAY ORDER BY duration DESC`: Esta opção contém erro técnico ou implementação não recomendada",
        "`SELECT * FROM sys.dm_exec_query_stats ORDER BY total_elapsed_time DESC`: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q77",
    "text": "Qual é a vantagem de usar um Environment no Fabric em vez de instalar bibliotecas com `%pip install` diretamente no notebook?",
    "options": [
      "`%pip install` não está disponível em notebooks de produção no Fabric; a única forma de instalar bibliotecas é via Environment configurado pelo administrador do workspace.",
      "Environments permitem instalar bibliotecas Java (.jar) e Scala além de Python, enquanto `%pip install` suporta apenas pacotes Python do PyPI.",
      "Environments são mais rápidos pois as bibliotecas são pré-compiladas para o runtime Spark do Fabric, enquanto `%pip install` compila as bibliotecas em tempo de execução.",
      "Um Environment persiste as bibliotecas e configurações Spark entre sessões e notebooks do workspace, evita reinstalação a cada sessão, garante consistência de versões entre todos os notebooks e pode ser reutilizado por múltiplos notebooks sem duplicação de configuração."
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Um Environment persiste as bibliotecas e configurações Spark entre sessões e notebooks do workspace, evita reinstalação a cada sessão, garante consistência de versões entre todos os notebooks e pode ser reutilizado por múltiplos notebooks sem duplicação de configuração.",
      "intro": "Entendendo High Concurrency e session sharing em Spark",
      "papoReto": "Um Environment persiste as bibliotecas e configurações Spark entre sessões e notebooks do workspace, evita reinstalação a cada sessão, garante consistência de versões entre todos os notebooks e pode ser reutilizado por múltiplos notebooks sem duplicação de configuração. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "`%pip install` não está disponível em notebooks de produção no Fabric; a única forma de instalar bibliotecas é via Environment configurado pelo administrador do workspace.: Esta opção contém erro técnico ou implementação não recomendada",
        "Environments permitem instalar bibliotecas Java (.jar) e Scala além de Python, enquanto `%pip install` suporta apenas pacotes Python do PyPI.: Esta opção contém erro técnico ou implementação não recomendada",
        "Environments são mais rápidos pois as bibliotecas são pré-compiladas para o runtime Spark do Fabric, enquanto `%pip install` compila as bibliotecas em tempo de execução.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q78",
    "text": "Um Notebook Fabric falha com `AnalysisException: cannot resolve 'coluna_x' given input columns`. Como você diagnostica e resolve esse erro?",
    "options": [
      "Verificar o schema do DataFrame com `df.printSchema()` para confirmar os nomes reais das colunas, verificar se houve rename ou drop em etapas anteriores, e corrigir a referência à coluna usando o nome exato",
      "Adicionar `spark.conf.set(\"spark.sql.caseSensitive\", \"false\")` para desabilitar a sensibilidade a maiúsculas e resolver o erro automaticamente.",
      "Recriar o DataFrame com `spark.read.table(\"tabela_origem\")` pois o erro indica que o DataFrame em memória perdeu a referência à tabela Delta subjacente.",
      "Executar `df.explain()` para ver o plano de execução físico que indica qual estágio de transformação gerou a coluna ausente e revertê-lo."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Verificar o schema do DataFrame com `df.printSchema()` para confirmar os nomes reais das colunas, verificar se houve rename ou drop em etapas anteriores, e corrigir a referência à coluna usando o nome exato",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "Verificar o schema do DataFrame com `df.printSchema()` para confirmar os nomes reais das colunas, verificar se houve rename ou drop em etapas anteriores, e corrigir a referência à coluna usando o nome exato é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Adicionar `spark.conf.set(\"spark.sql.caseSensitive\", \"false\")` para desabilitar a sensibilidade a maiúsculas e resolver o erro automaticamente.: Esta opção contém erro técnico ou implementação não recomendada",
        "Recriar o DataFrame com `spark.read.table(\"tabela_origem\")` pois o erro indica que o DataFrame em memória perdeu a referência à tabela Delta subjacente.: Esta opção contém erro técnico ou implementação não recomendada",
        "Executar `df.explain()` para ver o plano de execução físico que indica qual estágio de transformação gerou a coluna ausente e revertê-lo.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q79",
    "text": "Em um Deployment Pipeline do Fabric com estágios Dev→Test→Prod, como você configura uma Deployment Rule para que o Lakehouse de destino seja diferente em cada ambiente?",
    "options": [
      "Editando manualmente as connection strings nos itens do workspace de produção após cada deploy, pois Deployment Rules não suportam mapeamento de Lakehouses entre ambientes.",
      "Nas configurações do estágio de destino no Deployment Pipeline, criando uma regra do tipo \"Lakehouse Rule\" que substitui o Lakehouse de origem pelo Lakehouse de destino correspondente ao ambiente, mapeando o ID do item fonte para o ID do item destino.",
      "Criando arquivos de configuração `.env` no repositório Git para cada branch de ambiente que o Fabric lê automaticamente durante a sincronização.",
      "Usando parâmetros de pipeline que referenciam variáveis de ambiente definidas nas configurações de workspace, que são automaticamente substituídas durante o deploy."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar uma solução analítica",
    "explanation": {
      "respostaCerta": "Nas configurações do estágio de destino no Deployment Pipeline, criando uma regra do tipo \"Lakehouse Rule\" que substitui o Lakehouse de origem pelo Lakehouse de destino correspondente ao ambiente, mapeando o ID do item fonte para o ID do item destino.",
      "intro": "Entendendo Deployment Pipelines e transformação de parâmetros",
      "papoReto": "Deployment Pipeline cria fluxo multi-stage (Dev → Test → Prod) com Deployment Rules transformando automaticamente parâmetros por ambiente (connection strings, dataflow endpoints). Cada estágio tem um workspace dedicado com permissões definidas.",
      "puloDoGato": "Dev→Test→Prod com Rules injetando valores per-environment automaticamente",
      "cascasDeBanana": [
        "Capacities separadas: um workspace por stage em um pipeline, capacities são para compute allocation",
        "Git branches automáticas: Git e deployment pipeline são complementares, não substitutos",
        "Azure DevOps exclusivo: Fabric tem deployment pipeline nativo, pode integrar com DevOps"
      ],
      "dicaOuro": "Deployment Pipeline = multi-stage com parameter transformation automática"
    }
  },
  {
    "id": "dp700_q80",
    "text": "Em um KQL Database do Fabric, qual comando você usa para ingerir dados de um arquivo CSV armazenado no OneLake diretamente em uma tabela KQL existente?",
    "options": [
      "`INSERT INTO NomeTabela SELECT * FROM external_table('https://onelake.dfs.fabric.microsoft.com/workspace/lakehouse/Files/dados.csv', 'csv')`",
      "`.ingest into table NomeTabela ('https://onelake.dfs.fabric.microsoft.com/workspace/lakehouse/Files/dados.csv') with (format='csv', ignoreFirstRecord=true)`",
      "`spark.read.csv(\"Files/dados.csv\").write.kusto(eventhouse_uri, NomeTabela)`",
      "`.import csv NomeTabela from 'Files/dados.csv' with (header=true)`"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`.ingest into table NomeTabela ('https://onelake.dfs.fabric.microsoft.com/workspace/lakehouse/Files/dados.csv') with (format='csv', ignoreFirstRecord=true)`",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "`.ingest into table NomeTabela ('https://onelake.dfs.fabric.microsoft.com/workspace/lakehouse/Files/dados.csv') with (format='csv', ignoreFirstRecord=true)` é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "`INSERT INTO NomeTabela SELECT * FROM external_table('https://onelake.dfs.fabric.microsoft.com/workspace/lakehouse/Files/dados.csv', 'csv')`: Esta opção contém erro técnico ou implementação não recomendada",
        "`spark.read.csv(\"Files/dados.csv\").write.kusto(eventhouse_uri, NomeTabela)`: Esta opção contém erro técnico ou implementação não recomendada",
        "`.import csv NomeTabela from 'Files/dados.csv' with (header=true)`: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q81",
    "text": "Um engenheiro precisa decidir a estratégia de particionamento para uma tabela Delta de 500 GB com queries predominantemente filtradas por \"ano\" e \"regiao\". Qual é a abordagem correta?",
    "options": [
      "Particionar por ambas as colunas usando `partitionBy(\"ano\", \"regiao\")`, criando uma estrutura hierárquica que otimiza queries com filtros em ambas as colunas simultaneamente.",
      "Não particionar a tabela e usar apenas Z-ORDER BY nas duas colunas, pois particionamento em tabelas Delta acima de 100 GB sempre degrada o desempenho de escrita.",
      "Particionar por \"ano\" (baixa cardinalidade, bom para partition pruning) e aplicar Z-ORDER BY \"regiao\" dentro de cada partição (alta cardinalidade relativa), evitando particionar por \"regiao\" diretamente pois geraria muitas partições pequenas prejudicando o desempenho.",
      "Particionar por \"regiao\" com maior cardinalidade para garantir que cada partição seja pequena o suficiente para ser processada por um único executor Spark."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Particionar por \"ano\" (baixa cardinalidade, bom para partition pruning) e aplicar Z-ORDER BY \"regiao\" dentro de cada partição (alta cardinalidade relativa), evitando particionar por \"regiao\" diretamente pois geraria muitas partições pequenas prejudicando o desempenho.",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "Particionar por \"ano\" (baixa cardinalidade, bom para partition pruning) e aplicar Z-ORDER BY \"regiao\" dentro de cada partição (alta cardinalidade relativa), evitando particionar por \"regiao\" diretamente pois geraria muitas partições pequenas prejudicando o desempenho. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Particionar por ambas as colunas usando `partitionBy(\"ano\", \"regiao\")`, criando uma estrutura hierárquica que otimiza queries com filtros em ambas as colunas simultaneamente.: Esta opção contém erro técnico ou implementação não recomendada",
        "Não particionar a tabela e usar apenas Z-ORDER BY nas duas colunas, pois particionamento em tabelas Delta acima de 100 GB sempre degrada o desempenho de escrita.: Esta opção contém erro técnico ou implementação não recomendada",
        "Particionar por \"regiao\" com maior cardinalidade para garantir que cada partição seja pequena o suficiente para ser processada por um único executor Spark.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q82",
    "text": "Um engenheiro de dados precisa criar Lakehouses, executar Notebooks e criar Data Pipelines em um workspace, mas não deve gerenciar membros. Qual função de workspace deve ser atribuída?",
    "options": [
      "Viewer com permissões elevadas de item, atribuindo individualmente permissões de escrita em cada Lakehouse e Pipeline via compartilhamento de item.",
      "Member, que é necessário para criar itens como Lakehouses; Contributor apenas permite editar itens existentes criados por outros usuários.",
      "Admin, pois criação de Lakehouses requer permissão de administração do workspace independente da função atribuída.",
      "Contributor, que permite criar, editar e executar todos os itens do workspace (Lakehouses, Notebooks, Pipelines) sem poder adicionar ou remover membros do workspace."
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Implementar e gerenciar uma solução analítica",
    "explanation": {
      "respostaCerta": "Contributor, que permite criar, editar e executar todos os itens do workspace (Lakehouses, Notebooks, Pipelines) sem poder adicionar ou remover membros do workspace.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Contributor, que permite criar, editar e executar todos os itens do workspace (Lakehouses, Notebooks, Pipelines) sem poder adicionar ou remover membros do workspace. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Viewer com permissões elevadas de item, atribuindo individualmente permissões de escrita em cada Lakehouse e Pipeline via compartilhamento de item.: Esta opção contém erro técnico ou implementação não recomendada",
        "Member, que é necessário para criar itens como Lakehouses; Contributor apenas permite editar itens existentes criados por outros usuários.: Esta opção contém erro técnico ou implementação não recomendada",
        "Admin, pois criação de Lakehouses requer permissão de administração do workspace independente da função atribuída.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q83",
    "text": "No Data Pipeline do Fabric, como você usa a linguagem de expressão para criar condicionalmente o nome de um arquivo de saída com o formato `vendas_YYYYMMDD_HHMMSS.parquet`?",
    "options": [
      "`@format('vendas_{yyyyMMdd}_{HHmmss}.parquet', utcNow())`",
      "`@string.format('vendas_{0}_{1}.parquet', date.today('yyyyMMdd'), time.now('HHmmss'))`",
      "`@{concat('vendas_', pipeline().TriggerTime.ToString('yyyyMMdd_HHmmss'), '.parquet')}`",
      "`@concat('vendas_', formatDateTime(utcNow(), 'yyyyMMdd'), '_', formatDateTime(utcNow(), 'HHmmss'), '.parquet')`"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`@concat('vendas_', formatDateTime(utcNow(), 'yyyyMMdd'), '_', formatDateTime(utcNow(), 'HHmmss'), '.parquet')`",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "`@concat('vendas_', formatDateTime(utcNow(), 'yyyyMMdd'), '_', formatDateTime(utcNow(), 'HHmmss'), '.parquet')` é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "`@format('vendas_{yyyyMMdd}_{HHmmss}.parquet', utcNow())`: Esta opção contém erro técnico ou implementação não recomendada",
        "`@string.format('vendas_{0}_{1}.parquet', date.today('yyyyMMdd'), time.now('HHmmss'))`: Esta opção contém erro técnico ou implementação não recomendada",
        "`@{concat('vendas_', pipeline().TriggerTime.ToString('yyyyMMdd_HHmmss'), '.parquet')}`: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q84",
    "text": "Como o Lineage View do Microsoft Fabric auxilia um engenheiro de dados na gestão de dependências entre itens do workspace?",
    "options": [
      "Exibe o histórico de alterações de cada item com data, usuário e descrição da mudança, funcionando como um changelog visual do workspace.",
      "Exibe um grafo visual das dependências entre fontes de dados, Lakehouses, Warehouses, pipelines, notebooks, modelos semânticos e relatórios, permitindo identificar o impacto de alterações upstream e rastrear a origem dos dados em cada item downstream.",
      "Executa automaticamente análise de impacto e notifica por e-mail todos os proprietários de itens downstream quando um item upstream é modificado.",
      "Calcula e exibe o custo em CUs de cada dependência no grafo, permitindo identificar quais relações entre itens são mais custosas para a capacity."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Exibe um grafo visual das dependências entre fontes de dados, Lakehouses, Warehouses, pipelines, notebooks, modelos semânticos e relatórios, permitindo identificar o impacto de alterações upstream e rastrear a origem dos dados em cada item downstream.",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "Exibe um grafo visual das dependências entre fontes de dados, Lakehouses, Warehouses, pipelines, notebooks, modelos semânticos e relatórios, permitindo identificar o impacto de alterações upstream e rastrear a origem dos dados em cada item downstream. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Exibe o histórico de alterações de cada item com data, usuário e descrição da mudança, funcionando como um changelog visual do workspace.: Esta opção contém erro técnico ou implementação não recomendada",
        "Executa automaticamente análise de impacto e notifica por e-mail todos os proprietários de itens downstream quando um item upstream é modificado.: Esta opção contém erro técnico ou implementação não recomendada",
        "Calcula e exibe o custo em CUs de cada dependência no grafo, permitindo identificar quais relações entre itens são mais custosas para a capacity.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q85",
    "text": "Quais destinos são suportados pelo Eventstream do Microsoft Fabric para roteamento de dados de streaming?",
    "options": [
      "Apenas Eventhouse e Lakehouse como destinos nativos do Fabric; outros destinos externos requerem um conector customizado desenvolvido via Azure Functions.",
      "Eventhouse (KQL Database), Lakehouse, outro Eventstream (stream derivado), Azure Event Hubs, Azure Data Explorer, Reflexes (alertas), e Fabric Real-Time Dashboard como destinos suportados.",
      "Warehouse, Lakehouse e modelos semânticos Direct Lake como únicos destinos nativos; Eventhouse requer configuração adicional de connector externo.",
      "Apenas Azure Event Hubs e Azure IoT Hub como destinos; o Eventstream é exclusivamente uma ferramenta de ingestão, não de roteamento para itens internos do Fabric."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Eventhouse (KQL Database), Lakehouse, outro Eventstream (stream derivado), Azure Event Hubs, Azure Data Explorer, Reflexes (alertas), e Fabric Real-Time Dashboard como destinos suportados.",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "Para dados de streaming/IoT em alta velocidade: Eventstream captura eventos (IoT Hub, Event Hubs) → Eventhouse processa tempo real com KQL → Lakehouse persistencia via Structured Streaming/Eventstream destination.",
      "puloDoGato": "Eventstream → Eventhouse (tempo real KQL) → Lakehouse (persistencia Delta)",
      "cascasDeBanana": [
        "Stream Analytics via Shortcut: Shortcuts são read-only, não processam streams",
        "Dataflow Gen2 streaming: Dataflows é low-code, não nativo para high-speed IoT",
        "Data Pipeline de 1min: Pipelines batched em 1 minuto não é ideal para IoT contínuo"
      ],
      "dicaOuro": "Real-time streaming = Eventstream + Eventhouse. Persistencia = Delta em Lakehouse"
    }
  },
  {
    "id": "dp700_q86",
    "text": "Como você configura um Data Pipeline no Fabric para executar todos os dias úteis às 06:00 horário de Brasília (UTC-3)?",
    "options": [
      "Usando um Power Automate flow agendado que chama a API REST do Fabric às 06:00 BRT para disparar o pipeline manualmente nos dias úteis.",
      "Configurando um cron expression `0 6 * * 1-5` no campo de agendamento avançado do pipeline, que executa às 06:00 no fuso horário local do servidor automaticamente.",
      "Criando um Schedule Trigger com frequência \"Daily\", horário 09:00 UTC (equivalente a 06:00 BRT em UTC-3) e configurando os dias da semana para Monday-Friday, desabilitando Saturday e Sunday.",
      "Criando um trigger com fuso horário \"America/Sao_Paulo\" e horário 06:00, pois o Fabric converte automaticamente para UTC baseado no fuso selecionado."
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Implementar e gerenciar uma solução analítica",
    "explanation": {
      "respostaCerta": "Criando um Schedule Trigger com frequência \"Daily\", horário 09:00 UTC (equivalente a 06:00 BRT em UTC-3) e configurando os dias da semana para Monday-Friday, desabilitando Saturday e Sunday.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Criando um Schedule Trigger com frequência \"Daily\", horário 09:00 UTC (equivalente a 06:00 BRT em UTC-3) e configurando os dias da semana para Monday-Friday, desabilitando Saturday e Sunday. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Usando um Power Automate flow agendado que chama a API REST do Fabric às 06:00 BRT para disparar o pipeline manualmente nos dias úteis.: Esta opção contém erro técnico ou implementação não recomendada",
        "Configurando um cron expression `0 6 * * 1-5` no campo de agendamento avançado do pipeline, que executa às 06:00 no fuso horário local do servidor automaticamente.: Esta opção contém erro técnico ou implementação não recomendada",
        "Criando um trigger com fuso horário \"America/Sao_Paulo\" e horário 06:00, pois o Fabric converte automaticamente para UTC baseado no fuso selecionado.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q87",
    "text": "O que é o Adaptive Query Execution (AQE) no Spark e como ele é habilitado no Fabric para melhorar automaticamente o desempenho de queries?",
    "options": [
      "AQE otimiza apenas queries SQL; transformações PySpark com DataFrames não se beneficiam do AQE independente da configuração habilitada.",
      "AQE deve ser desabilitado em produção no Fabric pois a reotimização em tempo de execução consome CUs adicionais que podem causar throttling inesperado.",
      "AQE é uma funcionalidade exclusiva do Azure Databricks não disponível no Fabric Spark; alternativas são Z-Ordering e Broadcast Join para otimização de queries no Fabric.",
      "AQE reotimiza o plano de execução em tempo de execução usando estatísticas reais das stages concluídas (como tamanho de partições e skew de dados), podendo ajustar automaticamente joins, coalescer partições pequenas e tratar skew; habilitado com `spark.conf.set(\"spark.sql.adaptive.enabled\", \"true\")` — ativado por padrão no Fabric Runtime 1.2+."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "AQE reotimiza o plano de execução em tempo de execução usando estatísticas reais das stages concluídas (como tamanho de partições e skew de dados), podendo ajustar automaticamente joins, coalescer partições pequenas e tratar skew; habilitado com `spark.conf.set(\"spark.sql.adaptive.enabled\", \"true\")` — ativado por padrão no Fabric Runtime 1.2+.",
      "intro": "Entendendo Deployment Pipelines e transformação de parâmetros",
      "papoReto": "AQE reotimiza o plano de execução em tempo de execução usando estatísticas reais das stages concluídas (como tamanho de partições e skew de dados), podendo ajustar automaticamente joins, coalescer partições pequenas e tratar skew; habilitado com `spark.conf.set(\"spark.sql.adaptive.enabled\", \"true\")` — ativado por padrão no Fabric Runtime 1.2+. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "AQE otimiza apenas queries SQL; transformações PySpark com DataFrames não se beneficiam do AQE independente da configuração habilitada.: Esta opção contém erro técnico ou implementação não recomendada",
        "AQE deve ser desabilitado em produção no Fabric pois a reotimização em tempo de execução consome CUs adicionais que podem causar throttling inesperado.: Esta opção contém erro técnico ou implementação não recomendada",
        "AQE é uma funcionalidade exclusiva do Azure Databricks não disponível no Fabric Spark; alternativas são Z-Ordering e Broadcast Join para otimização de queries no Fabric.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q88",
    "text": "O SQL Analytics Endpoint de um Lakehouse suporta a criação de Stored Procedures para encapsular lógica de transformação?",
    "options": [
      "Sim, mas apenas stored procedures sem parâmetros de saída (OUTPUT); procedures com parâmetros OUT requerem migração para o Warehouse do Fabric.",
      "Sim, stored procedures são suportadas no SQL Analytics Endpoint usando a sintaxe `CREATE PROCEDURE` padrão do T-SQL, igual ao SQL Server.",
      "Sim, com a sintaxe `CREATE OR REPLACE PROCEDURE` disponível no SQL Analytics Endpoint para compatibilidade com scripts migrados do Azure Synapse Analytics.",
      "Não; o SQL Analytics Endpoint de um Lakehouse é somente leitura e não suporta DDL como CREATE PROCEDURE; para stored procedures, deve-se usar o Fabric Warehouse que suporta T-SQL completo incluindo objetos programáticos."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Não; o SQL Analytics Endpoint de um Lakehouse é somente leitura e não suporta DDL como CREATE PROCEDURE; para stored procedures, deve-se usar o Fabric Warehouse que suporta T-SQL completo incluindo objetos programáticos.",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "Não; o SQL Analytics Endpoint de um Lakehouse é somente leitura e não suporta DDL como CREATE PROCEDURE; para stored procedures, deve-se usar o Fabric Warehouse que suporta T-SQL completo incluindo objetos programáticos. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Sim, mas apenas stored procedures sem parâmetros de saída (OUTPUT); procedures com parâmetros OUT requerem migração para o Warehouse do Fabric.: Esta opção contém erro técnico ou implementação não recomendada",
        "Sim, stored procedures são suportadas no SQL Analytics Endpoint usando a sintaxe `CREATE PROCEDURE` padrão do T-SQL, igual ao SQL Server.: Esta opção contém erro técnico ou implementação não recomendada",
        "Sim, com a sintaxe `CREATE OR REPLACE PROCEDURE` disponível no SQL Analytics Endpoint para compatibilidade com scripts migrados do Azure Synapse Analytics.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q89",
    "text": "Um pipeline falha com `SchemaMismatchException` ao tentar fazer append de novos dados em uma tabela Delta existente. Qual é a causa e como resolver sem perder dados existentes?",
    "options": [
      "Aumentar o limite de colunas da tabela Delta com `ALTER TABLE nome SET TBLPROPERTIES ('delta.columnMapping.mode' = 'name', 'delta.minReaderVersion' = '2')` antes de tentar o append.",
      "O schema do DataFrame de entrada tem colunas novas ou tipos diferentes da tabela Delta; resolver com `.option(\"mergeSchema\", \"true\")` para adicionar novas colunas automaticamente, ou com `.option(\"overwriteSchema\", \"true\")` para substituir completamente — este último apaga dados existentes se combinado com `mode(\"overwrite\")`.",
      "Converter a tabela Delta para formato Parquet sem schema enforcement usando `spark.conf.set(\"spark.sql.parquet.enableVectorizedReader\", \"false\")` para aceitar qualquer schema.",
      "A tabela Delta está corrompida e precisa ser recriada; executar `RESTORE TABLE nome TO VERSION AS OF 0` para voltar ao estado inicial e reprocessar todos os dados."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "O schema do DataFrame de entrada tem colunas novas ou tipos diferentes da tabela Delta; resolver com `.option(\"mergeSchema\", \"true\")` para adicionar novas colunas automaticamente, ou com `.option(\"overwriteSchema\", \"true\")` para substituir completamente — este último apaga dados existentes se combinado com `mode(\"overwrite\")`.",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "O schema do DataFrame de entrada tem colunas novas ou tipos diferentes da tabela Delta; resolver com `.option(\"mergeSchema\", \"true\")` para adicionar novas colunas automaticamente, ou com `.option(\"overwriteSchema\", \"true\")` para substituir completamente — este último apaga dados existentes se combinado com `mode(\"overwrite\")`. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Aumentar o limite de colunas da tabela Delta com `ALTER TABLE nome SET TBLPROPERTIES ('delta.columnMapping.mode' = 'name', 'delta.minReaderVersion' = '2')` antes de tentar o append.: Esta opção contém erro técnico ou implementação não recomendada",
        "Converter a tabela Delta para formato Parquet sem schema enforcement usando `spark.conf.set(\"spark.sql.parquet.enableVectorizedReader\", \"false\")` para aceitar qualquer schema.: Esta opção contém erro técnico ou implementação não recomendada",
        "A tabela Delta está corrompida e precisa ser recriada; executar `RESTORE TABLE nome TO VERSION AS OF 0` para voltar ao estado inicial e reprocessar todos os dados.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q90",
    "text": "Como os Private Endpoints (Private Links) são usados para proteger a comunicação entre recursos Azure e o Microsoft Fabric?",
    "options": [
      "Private Endpoints criam uma interface de rede privada no VNet do cliente para recursos Azure (ADLS Gen2, Azure SQL), garantindo que o tráfego entre esses recursos e o Fabric trafegue pela rede privada da Microsoft sem exposição à internet pública.",
      "Private Endpoints restringem o acesso ao portal do Fabric apenas a endereços IP do VNet corporativo, bloqueando acesso externo de usuários remotos.",
      "Private Endpoints criam uma VPN dedicada entre o datacenter on-premises e o Microsoft Fabric, substituindo o gateway de dados on-premises para conexões seguras.",
      "Private Endpoints criptografam automaticamente todos os dados em repouso no OneLake usando chaves privadas armazenadas no Key Vault do VNet corporativo."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar uma solução analítica",
    "explanation": {
      "respostaCerta": "Private Endpoints criam uma interface de rede privada no VNet do cliente para recursos Azure (ADLS Gen2, Azure SQL), garantindo que o tráfego entre esses recursos e o Fabric trafegue pela rede privada da Microsoft sem exposição à internet pública.",
      "intro": "Entendendo Fabric workspace e gerenciamento de recursos",
      "papoReto": "Private Endpoints criam uma interface de rede privada no VNet do cliente para recursos Azure (ADLS Gen2, Azure SQL), garantindo que o tráfego entre esses recursos e o Fabric trafegue pela rede privada da Microsoft sem exposição à internet pública. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Private Endpoints restringem o acesso ao portal do Fabric apenas a endereços IP do VNet corporativo, bloqueando acesso externo de usuários remotos.: Esta opção contém erro técnico ou implementação não recomendada",
        "Private Endpoints criam uma VPN dedicada entre o datacenter on-premises e o Microsoft Fabric, substituindo o gateway de dados on-premises para conexões seguras.: Esta opção contém erro técnico ou implementação não recomendada",
        "Private Endpoints criptografam automaticamente todos os dados em repouso no OneLake usando chaves privadas armazenadas no Key Vault do VNet corporativo.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q91",
    "text": "Em PySpark no Fabric, qual é o uso de variáveis Broadcast e quando elas melhoram o desempenho?",
    "options": [
      "Broadcast variables substituem o `spark.conf` para configurações que precisam ser acessíveis em todas as partições sem reconfigurar a sessão Spark.",
      "Broadcast variables são usadas para compartilhar estado mutável entre tasks paralelas de forma thread-safe, similar a variáveis globais protegidas por lock.",
      "Broadcast variables armazenam resultados intermediários de stages anteriores em cache distribuído para reutilização em múltiplos jobs da mesma sessão Spark.",
      "Broadcast variables enviam uma cópia de um objeto read-only (ex: dicionário de lookup, tabela de referência pequena) para todos os executores uma única vez, evitando serialização repetida por task e melhorando o desempenho de operações de lookup em grandes DataFrames."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Broadcast variables enviam uma cópia de um objeto read-only (ex: dicionário de lookup, tabela de referência pequena) para todos os executores uma única vez, evitando serialização repetida por task e melhorando o desempenho de operações de lookup em grandes DataFrames.",
      "intro": "Entendendo Deployment Pipelines e transformação de parâmetros",
      "papoReto": "Broadcast variables enviam uma cópia de um objeto read-only (ex: dicionário de lookup, tabela de referência pequena) para todos os executores uma única vez, evitando serialização repetida por task e melhorando o desempenho de operações de lookup em grandes DataFrames. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Broadcast variables substituem o `spark.conf` para configurações que precisam ser acessíveis em todas as partições sem reconfigurar a sessão Spark.: Esta opção contém erro técnico ou implementação não recomendada",
        "Broadcast variables são usadas para compartilhar estado mutável entre tasks paralelas de forma thread-safe, similar a variáveis globais protegidas por lock.: Esta opção contém erro técnico ou implementação não recomendada",
        "Broadcast variables armazenam resultados intermediários de stages anteriores em cache distribuído para reutilização em múltiplos jobs da mesma sessão Spark.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q92",
    "text": "Como você configura alertas automáticos para notificar a equipe quando um refresh de modelo semântico falha no Microsoft Fabric?",
    "options": [
      "Nas configurações do modelo semântico no Fabric Service, habilitando notificações de refresh com e-mails para os contatos configurados em caso de falha, ou usando a API REST do Fabric para monitorar status de refresh e integrar com sistemas externos via Power Automate.",
      "Criando uma Azure Monitor Alert Rule que detecta eventos de falha de refresh via métricas do Log Analytics Workspace automaticamente associado ao Fabric.",
      "Usando o Microsoft Purview para criar políticas de alerta de qualidade de dados que detectam quando um modelo semântico não é atualizado no prazo esperado.",
      "Configurando um webhook no Azure Event Grid que captura eventos de falha de refresh do Fabric e dispara notificações via Azure Communication Services."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Nas configurações do modelo semântico no Fabric Service, habilitando notificações de refresh com e-mails para os contatos configurados em caso de falha, ou usando a API REST do Fabric para monitorar status de refresh e integrar com sistemas externos via Power Automate.",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "Nas configurações do modelo semântico no Fabric Service, habilitando notificações de refresh com e-mails para os contatos configurados em caso de falha, ou usando a API REST do Fabric para monitorar status de refresh e integrar com sistemas externos via Power Automate. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Criando uma Azure Monitor Alert Rule que detecta eventos de falha de refresh via métricas do Log Analytics Workspace automaticamente associado ao Fabric.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando o Microsoft Purview para criar políticas de alerta de qualidade de dados que detectam quando um modelo semântico não é atualizado no prazo esperado.: Esta opção contém erro técnico ou implementação não recomendada",
        "Configurando um webhook no Azure Event Grid que captura eventos de falha de refresh do Fabric e dispara notificações via Azure Communication Services.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q93",
    "text": "Por que o CTAS (Create Table As Select) é considerado a forma mais eficiente de criar tabelas no Fabric Warehouse em comparação com INSERT INTO ... SELECT?",
    "options": [
      "CTAS cria a tabela e insere os dados em uma única operação paralela e minimamente logada, sem overhead de log de transação linha por linha; INSERT INTO ... SELECT gera log completo de todas as linhas inseridas, sendo significativamente mais lento para grandes volumes.",
      "CTAS executa em memória sem acessar o OneLake durante a operação; INSERT INTO acessa o disco a cada batch de 1000 linhas, criando overhead de I/O adicional.",
      "CTAS usa compressão columnstore automaticamente enquanto INSERT INTO cria tabelas em formato rowstore por padrão, gerando arquivos maiores e queries mais lentas.",
      "CTAS é mais eficiente apenas para tabelas acima de 10 milhões de linhas; para tabelas menores, INSERT INTO é equivalente em desempenho e preferível por ser mais legível."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "CTAS cria a tabela e insere os dados em uma única operação paralela e minimamente logada, sem overhead de log de transação linha por linha; INSERT INTO ... SELECT gera log completo de todas as linhas inseridas, sendo significativamente mais lento para grandes volumes.",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "CTAS cria a tabela e insere os dados em uma única operação paralela e minimamente logada, sem overhead de log de transação linha por linha; INSERT INTO ... SELECT gera log completo de todas as linhas inseridas, sendo significativamente mais lento para grandes volumes. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "CTAS executa em memória sem acessar o OneLake durante a operação; INSERT INTO acessa o disco a cada batch de 1000 linhas, criando overhead de I/O adicional.: Esta opção contém erro técnico ou implementação não recomendada",
        "CTAS usa compressão columnstore automaticamente enquanto INSERT INTO cria tabelas em formato rowstore por padrão, gerando arquivos maiores e queries mais lentas.: Esta opção contém erro técnico ou implementação não recomendada",
        "CTAS é mais eficiente apenas para tabelas acima de 10 milhões de linhas; para tabelas menores, INSERT INTO é equivalente em desempenho e preferível por ser mais legível.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q94",
    "text": "Qual é a diferença entre parâmetros e variáveis em um Data Pipeline do Fabric?",
    "options": [
      "Parâmetros suportam apenas tipos primitivos (string, int, bool); variáveis suportam tipos complexos como arrays e objetos JSON para armazenamento de resultados intermediários.",
      "São equivalentes em funcionalidade; parâmetros são usados por convenção para valores externos e variáveis para valores internos, sem diferença técnica real de comportamento.",
      "Parâmetros são persistidos entre execuções do pipeline; variáveis são reinicializadas a cada execução, perdendo o valor da execução anterior.",
      "Parâmetros são valores de entrada definidos externamente ao pipeline (passados no trigger ou chamada), imutáveis durante a execução; variáveis são valores internos mutáveis que podem ser modificados por atividades \"Set Variable\" ao longo da execução do pipeline."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Implementar e gerenciar uma solução analítica",
    "explanation": {
      "respostaCerta": "Parâmetros são valores de entrada definidos externamente ao pipeline (passados no trigger ou chamada), imutáveis durante a execução; variáveis são valores internos mutáveis que podem ser modificados por atividades \"Set Variable\" ao longo da execução do pipeline.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Parâmetros são valores de entrada definidos externamente ao pipeline (passados no trigger ou chamada), imutáveis durante a execução; variáveis são valores internos mutáveis que podem ser modificados por atividades \"Set Variable\" ao longo da execução do pipeline. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Parâmetros suportam apenas tipos primitivos (string, int, bool); variáveis suportam tipos complexos como arrays e objetos JSON para armazenamento de resultados intermediários.: Esta opção contém erro técnico ou implementação não recomendada",
        "São equivalentes em funcionalidade; parâmetros são usados por convenção para valores externos e variáveis para valores internos, sem diferença técnica real de comportamento.: Esta opção contém erro técnico ou implementação não recomendada",
        "Parâmetros são persistidos entre execuções do pipeline; variáveis são reinicializadas a cada execução, perdendo o valor da execução anterior.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q95",
    "text": "Em um Notebook Fabric com PySpark, como você usa o cache de forma estratégica para melhorar o desempenho de um DataFrame que é referenciado múltiplas vezes?",
    "options": [
      "Usando `df.cache()` ou `df.persist(StorageLevel.MEMORY_AND_DISK)` após a transformação inicial e antes de múltiplas ações sobre o mesmo DataFrame, forçando a materialização com `df.count()` e liberando com `df.unpersist()` quando não for mais necessário.",
      "O Spark cacheia automaticamente DataFrames referenciados mais de uma vez; não é necessária intervenção manual pois o Catalyst optimizer detecta e aplica cache automaticamente.",
      "Usando `df.checkpoint()` que armazena o DataFrame no diretório de checkpoint do HDFS, eliminando o plano de execução e melhorando o desempenho de DataFrames com lineage muito longa.",
      "Usando `spark.catalog.cacheTable(\"nome_tabela\")` que cacheia a tabela Delta subjacente em memória, beneficiando todos os DataFrames que leem dessa tabela no workspace."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Usando `df.cache()` ou `df.persist(StorageLevel.MEMORY_AND_DISK)` após a transformação inicial e antes de múltiplas ações sobre o mesmo DataFrame, forçando a materialização com `df.count()` e liberando com `df.unpersist()` quando não for mais necessário.",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "Usando `df.cache()` ou `df.persist(StorageLevel.MEMORY_AND_DISK)` após a transformação inicial e antes de múltiplas ações sobre o mesmo DataFrame, forçando a materialização com `df.count()` e liberando com `df.unpersist()` quando não for mais necessário. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "O Spark cacheia automaticamente DataFrames referenciados mais de uma vez; não é necessária intervenção manual pois o Catalyst optimizer detecta e aplica cache automaticamente.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando `df.checkpoint()` que armazena o DataFrame no diretório de checkpoint do HDFS, eliminando o plano de execução e melhorando o desempenho de DataFrames com lineage muito longa.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando `spark.catalog.cacheTable(\"nome_tabela\")` que cacheia a tabela Delta subjacente em memória, beneficiando todos os DataFrames que leem dessa tabela no workspace.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q96",
    "text": "Como você adiciona uma constraint de CHECK em uma tabela Delta no Lakehouse do Fabric para garantir que valores de uma coluna \"quantidade\" sejam sempre positivos?",
    "options": [
      "Criando uma coluna calculada `quantidade_validada = CASE WHEN quantidade > 0 THEN quantidade ELSE NULL END` que filtra automaticamente valores inválidos na leitura.",
      "`spark.sql(\"ALTER TABLE nome_tabela MODIFY COLUMN quantidade INT NOT NULL CHECK (quantidade > 0)\")`",
      "`spark.sql(\"ALTER TABLE nome_tabela ADD CONSTRAINT qtd_positiva CHECK (quantidade > 0)\")`",
      "Usando `df.filter(col(\"quantidade\") > 0).write.format(\"delta\").mode(\"append\").save(\"Tables/nome_tabela\")`"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`spark.sql(\"ALTER TABLE nome_tabela ADD CONSTRAINT qtd_positiva CHECK (quantidade > 0)\")`",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "`spark.sql(\"ALTER TABLE nome_tabela ADD CONSTRAINT qtd_positiva CHECK (quantidade > 0)\")` é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Criando uma coluna calculada `quantidade_validada = CASE WHEN quantidade > 0 THEN quantidade ELSE NULL END` que filtra automaticamente valores inválidos na leitura.: Esta opção contém erro técnico ou implementação não recomendada",
        "`spark.sql(\"ALTER TABLE nome_tabela MODIFY COLUMN quantidade INT NOT NULL CHECK (quantidade > 0)\")`: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando `df.filter(col(\"quantidade\") > 0).write.format(\"delta\").mode(\"append\").save(\"Tables/nome_tabela\")`: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q97",
    "text": "No Monitor Hub do Fabric, como você filtra para ver apenas execuções de pipelines que falharam nas últimas 48 horas em um workspace específico?",
    "options": [
      "Acessando o Azure DevOps e filtrando os logs de pipeline pelo status de falha no repositório Git associado ao workspace Fabric.",
      "Executando uma query T-SQL no Warehouse do workspace: `SELECT * FROM sys.pipeline_runs WHERE status = 'Failed' AND start_time >= DATEADD(hour, -48, GETDATE())`.",
      "Consultando a tabela `fabric.monitor.pipeline_history` no SQL Analytics Endpoint do Lakehouse de logging configurado para o workspace.",
      "No Monitor Hub, aplicando filtros de \"Status = Failed\", \"Item type = Data pipeline\", \"Time range = Last 48 hours\" e selecionando o workspace desejado no filtro de workspace, visualizando as execuções com detalhes de erro."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "No Monitor Hub, aplicando filtros de \"Status = Failed\", \"Item type = Data pipeline\", \"Time range = Last 48 hours\" e selecionando o workspace desejado no filtro de workspace, visualizando as execuções com detalhes de erro.",
      "intro": "Entendendo Git integration e versionamento de artefatos",
      "papoReto": "No Monitor Hub, aplicando filtros de \"Status = Failed\", \"Item type = Data pipeline\", \"Time range = Last 48 hours\" e selecionando o workspace desejado no filtro de workspace, visualizando as execuções com detalhes de erro. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Acessando o Azure DevOps e filtrando os logs de pipeline pelo status de falha no repositório Git associado ao workspace Fabric.: Esta opção contém erro técnico ou implementação não recomendada",
        "Executando uma query T-SQL no Warehouse do workspace: `SELECT * FROM sys.pipeline_runs WHERE status = 'Failed' AND start_time >= DATEADD(hour, -48, GETDATE())`.: Esta opção contém erro técnico ou implementação não recomendada",
        "Consultando a tabela `fabric.monitor.pipeline_history` no SQL Analytics Endpoint do Lakehouse de logging configurado para o workspace.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q98",
    "text": "Em um Warehouse do Fabric, como você executa uma stored procedure dentro de um Data Pipeline para carregar dados de staging para produção?",
    "options": [
      "Usando a atividade \"Lookup\" configurada com a query `EXEC dbo.sp_carga_producao` que executa a procedure e retorna o resultado como saída da atividade.",
      "Usando a atividade \"Stored Procedure\" no Data Pipeline, configurando a connection ao Warehouse, o nome da procedure e os parâmetros de entrada via expressões dinâmicas como `@pipeline().parameters.data_carga`.",
      "Usando a atividade \"Script\" com a instrução `EXEC dbo.sp_carga_producao @data = '@{pipeline().parameters.data_carga}'` em modo T-SQL no Warehouse.",
      "Usando a atividade \"Notebook\" com PySpark que chama a stored procedure via `spark.read.synapsesql(\"EXEC dbo.sp_carga_producao\")` usando o conector nativo."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Usando a atividade \"Stored Procedure\" no Data Pipeline, configurando a connection ao Warehouse, o nome da procedure e os parâmetros de entrada via expressões dinâmicas como `@pipeline().parameters.data_carga`.",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "Usando a atividade \"Stored Procedure\" no Data Pipeline, configurando a connection ao Warehouse, o nome da procedure e os parâmetros de entrada via expressões dinâmicas como `@pipeline().parameters.data_carga`. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Usando a atividade \"Lookup\" configurada com a query `EXEC dbo.sp_carga_producao` que executa a procedure e retorna o resultado como saída da atividade.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando a atividade \"Script\" com a instrução `EXEC dbo.sp_carga_producao @data = '@{pipeline().parameters.data_carga}'` em modo T-SQL no Warehouse.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando a atividade \"Notebook\" com PySpark que chama a stored procedure via `spark.read.synapsesql(\"EXEC dbo.sp_carga_producao\")` usando o conector nativo.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q99",
    "text": "O que é o Delta Clone no Fabric e como ele pode ser usado em cenários de engenharia de dados para testes e desenvolvimento?",
    "options": [
      "Delta Clone cria uma cópia rasa (shallow clone) ou profunda (deep clone) de uma tabela Delta; shallow clone referencia os arquivos originais sem copiá-los, ideal para criar ambientes de teste rápidos sem duplicar armazenamento; deep clone copia todos os arquivos, criando independência total da tabela original.",
      "Delta Clone cria uma réplica em tempo real da tabela que se mantém sincronizada com a original via CDC, sem necessidade de reprocessamento manual.",
      "Delta Clone funciona apenas entre Lakehouses do mesmo workspace; clonar tabelas entre workspaces requer exportar para Parquet e reimportar no destino.",
      "Delta Clone é sinônimo de Delta Time Travel; ambos permitem acessar versões anteriores da tabela sem criar uma nova tabela física no Lakehouse."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Delta Clone cria uma cópia rasa (shallow clone) ou profunda (deep clone) de uma tabela Delta; shallow clone referencia os arquivos originais sem copiá-los, ideal para criar ambientes de teste rápidos sem duplicar armazenamento; deep clone copia todos os arquivos, criando independência total da tabela original.",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "Delta Clone cria uma cópia rasa (shallow clone) ou profunda (deep clone) de uma tabela Delta; shallow clone referencia os arquivos originais sem copiá-los, ideal para criar ambientes de teste rápidos sem duplicar armazenamento; deep clone copia todos os arquivos, criando independência total da tabela original. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Delta Clone cria uma réplica em tempo real da tabela que se mantém sincronizada com a original via CDC, sem necessidade de reprocessamento manual.: Esta opção contém erro técnico ou implementação não recomendada",
        "Delta Clone funciona apenas entre Lakehouses do mesmo workspace; clonar tabelas entre workspaces requer exportar para Parquet e reimportar no destino.: Esta opção contém erro técnico ou implementação não recomendada",
        "Delta Clone é sinônimo de Delta Time Travel; ambos permitem acessar versões anteriores da tabela sem criar uma nova tabela física no Lakehouse.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q100",
    "text": "Como uma Workspace Identity (Managed Identity do workspace Fabric) é usada para autenticar acesso seguro a um Azure Key Vault sem armazenar credenciais no pipeline?\n## LOTE 3 — Questões 101 a 150 | DP-700",
    "options": [
      "Configurando um Service Principal no Azure AD, armazenando seu client secret no Key Vault e usando a atividade Lookup para recuperar a credencial antes de cada operação autenticada.",
      "Concedendo à Workspace Identity a role \"Key Vault Secrets User\" no Key Vault via Azure RBAC, e usando a atividade Web no pipeline com autenticação \"Managed Identity\" para chamar a API do Key Vault e recuperar segredos sem expor credenciais hardcoded.",
      "Habilitando a opção \"Use Workspace Identity\" nas configurações de conexão do pipeline, que automaticamente injeta o token da Managed Identity em todas as chamadas HTTP do pipeline.",
      "Criando uma conexão do tipo \"Azure Key Vault\" no Data Pipeline que autentica automaticamente via certificado digital do workspace sem necessidade de configuração de RBAC."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar uma solução analítica",
    "explanation": {
      "respostaCerta": "Concedendo à Workspace Identity a role \"Key Vault Secrets User\" no Key Vault via Azure RBAC, e usando a atividade Web no pipeline com autenticação \"Managed Identity\" para chamar a API do Key Vault e recuperar segredos sem expor credenciais hardcoded.",
      "intro": "Entendendo Git integration e versionamento de artefatos",
      "papoReto": "Concedendo à Workspace Identity a role \"Key Vault Secrets User\" no Key Vault via Azure RBAC, e usando a atividade Web no pipeline com autenticação \"Managed Identity\" para chamar a API do Key Vault e recuperar segredos sem expor credenciais hardcoded. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Configurando um Service Principal no Azure AD, armazenando seu client secret no Key Vault e usando a atividade Lookup para recuperar a credencial antes de cada operação autenticada.: Esta opção contém erro técnico ou implementação não recomendada",
        "Habilitando a opção \"Use Workspace Identity\" nas configurações de conexão do pipeline, que automaticamente injeta o token da Managed Identity em todas as chamadas HTTP do pipeline.: Esta opção contém erro técnico ou implementação não recomendada",
        "Criando uma conexão do tipo \"Azure Key Vault\" no Data Pipeline que autentica automaticamente via certificado digital do workspace sem necessidade de configuração de RBAC.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q101",
    "text": "Em PySpark no Fabric, como você calcula o total acumulado de vendas por cliente ordenado por data usando Window Functions?",
    "options": [
      "`from pyspark.sql.window import Window; w = Window.partitionBy(\"cliente_id\").orderBy(\"data\").rowsBetween(Window.unboundedPreceding, Window.currentRow); df.withColumn(\"total_acumulado\", sum(\"vendas\").over(w))`",
      "`df.groupBy(\"cliente_id\").agg(sum(\"vendas\").alias(\"total_acumulado\")).orderBy(\"data\")`",
      "`df.withColumn(\"total_acumulado\", cumsum(col(\"vendas\")).over(Window.partitionBy(\"cliente_id\").orderBy(\"data\")))`",
      "`df.select(\"cliente_id\", \"data\", \"vendas\", running_total(\"vendas\").partitionBy(\"cliente_id\").orderBy(\"data\").alias(\"total_acumulado\"))`"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`from pyspark.sql.window import Window; w = Window.partitionBy(\"cliente_id\").orderBy(\"data\").rowsBetween(Window.unboundedPreceding, Window.currentRow); df.withColumn(\"total_acumulado\", sum(\"vendas\").over(w))`",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "`from pyspark.sql.window import Window; w = Window.partitionBy(\"cliente_id\").orderBy(\"data\").rowsBetween(Window.unboundedPreceding, Window.currentRow); df.withColumn(\"total_acumulado\", sum(\"vendas\").over(w))` é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "`df.groupBy(\"cliente_id\").agg(sum(\"vendas\").alias(\"total_acumulado\")).orderBy(\"data\")`: Esta opção contém erro técnico ou implementação não recomendada",
        "`df.withColumn(\"total_acumulado\", cumsum(col(\"vendas\")).over(Window.partitionBy(\"cliente_id\").orderBy(\"data\")))`: Esta opção contém erro técnico ou implementação não recomendada",
        "`df.select(\"cliente_id\", \"data\", \"vendas\", running_total(\"vendas\").partitionBy(\"cliente_id\").orderBy(\"data\").alias(\"total_acumulado\"))`: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q102",
    "text": "Qual é o impacto de executar `OPTIMIZE` com frequência excessiva em uma tabela Delta do Fabric?",
    "options": [
      "Execuções muito frequentes de OPTIMIZE consomem CUs desnecessariamente para reescrever arquivos que ainda não estão suficientemente fragmentados; o recomendado é executar periodicamente (diariamente ou semanalmente) após cargas que geram muitos arquivos pequenos.",
      "Execuções frequentes de OPTIMIZE corrompem o transaction log Delta por exceder o limite de 1000 entradas por tabela, exigindo rebuild completo da tabela.",
      "OPTIMIZE pode ser executado com qualquer frequência sem impacto negativo, pois o Delta Lake detecta automaticamente se a compactação é necessária e pula a operação se não houver fragmentação.",
      "Execuções frequentes de OPTIMIZE aumentam o número de versões no time travel desnecessariamente, crescendo o transaction log e degradando o desempenho de leitura da tabela."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Execuções muito frequentes de OPTIMIZE consomem CUs desnecessariamente para reescrever arquivos que ainda não estão suficientemente fragmentados; o recomendado é executar periodicamente (diariamente ou semanalmente) após cargas que geram muitos arquivos pequenos.",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "Execuções muito frequentes de OPTIMIZE consomem CUs desnecessariamente para reescrever arquivos que ainda não estão suficientemente fragmentados; o recomendado é executar periodicamente (diariamente ou semanalmente) após cargas que geram muitos arquivos pequenos. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Execuções frequentes de OPTIMIZE corrompem o transaction log Delta por exceder o limite de 1000 entradas por tabela, exigindo rebuild completo da tabela.: Esta opção contém erro técnico ou implementação não recomendada",
        "OPTIMIZE pode ser executado com qualquer frequência sem impacto negativo, pois o Delta Lake detecta automaticamente se a compactação é necessária e pula a operação se não houver fragmentação.: Esta opção contém erro técnico ou implementação não recomendada",
        "Execuções frequentes de OPTIMIZE aumentam o número de versões no time travel desnecessariamente, crescendo o transaction log e degradando o desempenho de leitura da tabela.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q103",
    "text": "Em um Data Pipeline do Fabric, como você implementa lógica para redirecionar registros com erros de validação para uma tabela de quarentena enquanto registros válidos são carregados na tabela principal?",
    "options": [
      "Usando a atividade \"Data Quality\" do pipeline que automaticamente detecta e redireciona registros inválidos baseado em regras de qualidade configuradas no catálogo do Purview.",
      "Usando a atividade \"Conditional Split\" do Data Pipeline que divide o fluxo de dados em múltiplas saídas baseado em expressões de filtro aplicadas linha a linha.",
      "Usando um Notebook PySpark que aplica validações, separa o DataFrame em `df_validos` e `df_invalidos`, escrevendo cada um em suas respectivas tabelas Delta; ou usando a propriedade \"Fault tolerance\" da atividade Copy Data que salva linhas incompatíveis em um arquivo de log de erros.",
      "Configurando duas atividades Copy Data em paralelo com filtros opostos: uma com `WHERE validacao = 1` para a tabela principal e outra com `WHERE validacao = 0` para quarentena."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Usando um Notebook PySpark que aplica validações, separa o DataFrame em `df_validos` e `df_invalidos`, escrevendo cada um em suas respectivas tabelas Delta; ou usando a propriedade \"Fault tolerance\" da atividade Copy Data que salva linhas incompatíveis em um arquivo de log de erros.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Usando um Notebook PySpark que aplica validações, separa o DataFrame em `df_validos` e `df_invalidos`, escrevendo cada um em suas respectivas tabelas Delta; ou usando a propriedade \"Fault tolerance\" da atividade Copy Data que salva linhas incompatíveis em um arquivo de log de erros. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Usando a atividade \"Data Quality\" do pipeline que automaticamente detecta e redireciona registros inválidos baseado em regras de qualidade configuradas no catálogo do Purview.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando a atividade \"Conditional Split\" do Data Pipeline que divide o fluxo de dados em múltiplas saídas baseado em expressões de filtro aplicadas linha a linha.: Esta opção contém erro técnico ou implementação não recomendada",
        "Configurando duas atividades Copy Data em paralelo com filtros opostos: uma com `WHERE validacao = 1` para a tabela principal e outra com `WHERE validacao = 0` para quarentena.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q104",
    "text": "Em um KQL Database do Eventhouse com bilhões de registros, como você otimiza uma query que filtra por um intervalo de tempo e uma coluna de alta cardinalidade?",
    "options": [
      "Criar um índice B-Tree na coluna de alta cardinalidade usando `.create index` no KQL Database para acelerar filtros por essa coluna.",
      "Configurar `set query_now=datetime(2024-01-01)` para fixar o ponto de referência temporal e eliminar o recálculo dinâmico de `ago()` em cada execução da query.",
      "Usar `hint.strategy=broadcast` na query para forçar o motor KQL a usar broadcast join ao invés de hash join, melhorando queries com filtros de alta cardinalidade.",
      "Garantir que o filtro de tempo use `where timestamp > ago(Xd)` primeiro (aproveitando o índice temporal nativo do KQL), depois filtrar pela coluna de alta cardinalidade; usar `project` para selecionar apenas colunas necessárias e considerar criar uma tabela materializada para agregações frequentes."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Garantir que o filtro de tempo use `where timestamp > ago(Xd)` primeiro (aproveitando o índice temporal nativo do KQL), depois filtrar pela coluna de alta cardinalidade; usar `project` para selecionar apenas colunas necessárias e considerar criar uma tabela materializada para agregações frequentes.",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "Para dados de streaming/IoT em alta velocidade: Eventstream captura eventos (IoT Hub, Event Hubs) → Eventhouse processa tempo real com KQL → Lakehouse persistencia via Structured Streaming/Eventstream destination.",
      "puloDoGato": "Eventstream → Eventhouse (tempo real KQL) → Lakehouse (persistencia Delta)",
      "cascasDeBanana": [
        "Stream Analytics via Shortcut: Shortcuts são read-only, não processam streams",
        "Dataflow Gen2 streaming: Dataflows é low-code, não nativo para high-speed IoT",
        "Data Pipeline de 1min: Pipelines batched em 1 minuto não é ideal para IoT contínuo"
      ],
      "dicaOuro": "Real-time streaming = Eventstream + Eventhouse. Persistencia = Delta em Lakehouse"
    }
  },
  {
    "id": "dp700_q105",
    "text": "Em PySpark no Fabric, como você cria um shallow clone de uma tabela Delta para uso em ambiente de desenvolvimento sem duplicar os dados?",
    "options": [
      "`spark.sql(\"CREATE TABLE dev_tabela SHALLOW CLONE prod_tabela\")`",
      "`spark.read.format(\"delta\").load(\"Tables/prod_tabela\").write.format(\"delta\").option(\"shallowClone\", \"true\").save(\"Tables/dev_tabela\")`",
      "`DeltaTable.forName(spark, \"prod_tabela\").clone(\"dev_tabela\", isShallow=True)`",
      "`spark.sql(\"CREATE TABLE dev_tabela AS SELECT * FROM prod_tabela\")`"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`spark.sql(\"CREATE TABLE dev_tabela SHALLOW CLONE prod_tabela\")`",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "`spark.sql(\"CREATE TABLE dev_tabela SHALLOW CLONE prod_tabela\")` é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "`spark.read.format(\"delta\").load(\"Tables/prod_tabela\").write.format(\"delta\").option(\"shallowClone\", \"true\").save(\"Tables/dev_tabela\")`: Esta opção contém erro técnico ou implementação não recomendada",
        "`DeltaTable.forName(spark, \"prod_tabela\").clone(\"dev_tabela\", isShallow=True)`: Esta opção contém erro técnico ou implementação não recomendada",
        "`spark.sql(\"CREATE TABLE dev_tabela AS SELECT * FROM prod_tabela\")`: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q106",
    "text": "Quais métricas operacionais são importantes monitorar em um Eventhouse do Fabric para garantir a saúde da ingestão em tempo real?",
    "options": [
      "CPU e RAM dos nós do cluster Eventhouse via Azure Monitor, número de conexões ativas e throughput de rede entre o Event Hub e o Eventhouse.",
      "Métricas de IOPS de disco, fragmentação de índices e crescimento do transaction log disponíveis no painel de administração do KQL Database.",
      "Número de queries simultâneas, tempo médio de resposta de queries KQL e percentual de cache hit no buffer pool do Eventhouse.",
      "Taxa de ingestão (eventos/segundo), falhas de ingestão (`.show ingestion failures`), latência de ingestão (tempo entre evento e disponibilidade para query), utilização de cache, e tamanho das tabelas KQL via `.show tables details`."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Taxa de ingestão (eventos/segundo), falhas de ingestão (`.show ingestion failures`), latência de ingestão (tempo entre evento e disponibilidade para query), utilização de cache, e tamanho das tabelas KQL via `.show tables details`.",
      "intro": "Entendendo Fabric workspace e gerenciamento de recursos",
      "papoReto": "Para dados de streaming/IoT em alta velocidade: Eventstream captura eventos (IoT Hub, Event Hubs) → Eventhouse processa tempo real com KQL → Lakehouse persistencia via Structured Streaming/Eventstream destination.",
      "puloDoGato": "Eventstream → Eventhouse (tempo real KQL) → Lakehouse (persistencia Delta)",
      "cascasDeBanana": [
        "Stream Analytics via Shortcut: Shortcuts são read-only, não processam streams",
        "Dataflow Gen2 streaming: Dataflows é low-code, não nativo para high-speed IoT",
        "Data Pipeline de 1min: Pipelines batched em 1 minuto não é ideal para IoT contínuo"
      ],
      "dicaOuro": "Real-time streaming = Eventstream + Eventhouse. Persistencia = Delta em Lakehouse"
    }
  },
  {
    "id": "dp700_q107",
    "text": "No Warehouse do Fabric, qual tipo de dado você deve usar para armazenar identificadores únicos gerados automaticamente (UUIDs) de forma eficiente?",
    "options": [
      "`NVARCHAR(50)` para garantir compatibilidade internacional com UUIDs que podem conter caracteres especiais em implementações não-padrão de sistemas legados.",
      "`UNIQUEIDENTIFIER` para armazenar GUIDs/UUIDs nativamente, ou `VARCHAR(36)` para compatibilidade com sistemas externos; `UNIQUEIDENTIFIER` ocupa 16 bytes fixos e tem funções nativas como `NEWID()` para geração automática.",
      "`BIGINT IDENTITY(1,1)` que gera automaticamente IDs sequenciais únicos com melhor desempenho de join que UUIDs aleatórios no Fabric Warehouse.",
      "`BINARY(16)` que armazena os 16 bytes do UUID sem overhead de formatação string, com melhor desempenho de armazenamento que `UNIQUEIDENTIFIER`."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`UNIQUEIDENTIFIER` para armazenar GUIDs/UUIDs nativamente, ou `VARCHAR(36)` para compatibilidade com sistemas externos; `UNIQUEIDENTIFIER` ocupa 16 bytes fixos e tem funções nativas como `NEWID()` para geração automática.",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "`UNIQUEIDENTIFIER` para armazenar GUIDs/UUIDs nativamente, ou `VARCHAR(36)` para compatibilidade com sistemas externos; `UNIQUEIDENTIFIER` ocupa 16 bytes fixos e tem funções nativas como `NEWID()` para geração automática. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "`NVARCHAR(50)` para garantir compatibilidade internacional com UUIDs que podem conter caracteres especiais em implementações não-padrão de sistemas legados.: Esta opção contém erro técnico ou implementação não recomendada",
        "`BIGINT IDENTITY(1,1)` que gera automaticamente IDs sequenciais únicos com melhor desempenho de join que UUIDs aleatórios no Fabric Warehouse.: Esta opção contém erro técnico ou implementação não recomendada",
        "`BINARY(16)` que armazena os 16 bytes do UUID sem overhead de formatação string, com melhor desempenho de armazenamento que `UNIQUEIDENTIFIER`.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q108",
    "text": "Um Data Pipeline do Fabric está copiando dados de uma tabela Oracle on-premises com 500 milhões de linhas e demorando 8 horas. Qual estratégia de otimização é mais eficaz?",
    "options": [
      "Habilitar a opção de particionamento físico na atividade Copy Data com \"Partition column\", \"Partition upper bound\" e \"Partition lower bound\" para dividir a query em múltiplas sub-queries paralelas executadas simultaneamente, reduzindo o tempo proporcionalmente ao número de partições.",
      "Substituir o gateway de dados on-premises por uma réplica Azure SQL Database sincronizada, eliminando a latência de rede WAN da cópia on-premises.",
      "Usar compressão GZIP na atividade Copy Data que reduz o volume de dados transferidos pela rede e automaticamente divide a carga em chunks menores.",
      "Aumentar o número de DIUs (Data Integration Units) para 256, que é o máximo suportado pelo Fabric para cópias de fontes on-premises via gateway."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Habilitar a opção de particionamento físico na atividade Copy Data com \"Partition column\", \"Partition upper bound\" e \"Partition lower bound\" para dividir a query em múltiplas sub-queries paralelas executadas simultaneamente, reduzindo o tempo proporcionalmente ao número de partições.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Habilitar a opção de particionamento físico na atividade Copy Data com \"Partition column\", \"Partition upper bound\" e \"Partition lower bound\" para dividir a query em múltiplas sub-queries paralelas executadas simultaneamente, reduzindo o tempo proporcionalmente ao número de partições. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Substituir o gateway de dados on-premises por uma réplica Azure SQL Database sincronizada, eliminando a latência de rede WAN da cópia on-premises.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usar compressão GZIP na atividade Copy Data que reduz o volume de dados transferidos pela rede e automaticamente divide a carga em chunks menores.: Esta opção contém erro técnico ou implementação não recomendada",
        "Aumentar o número de DIUs (Data Integration Units) para 256, que é o máximo suportado pelo Fabric para cópias de fontes on-premises via gateway.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q109",
    "text": "O que são Materialized Views em um KQL Database do Fabric e como elas melhoram o desempenho de queries recorrentes?",
    "options": [
      "São snapshots diários da tabela KQL gerados automaticamente pelo Eventhouse para suportar queries de time travel sem impacto no desempenho da ingestão.",
      "São cópias físicas de tabelas KQL armazenadas em formato Delta no OneLake para serem consultadas via SQL Analytics Endpoint como alternativa ao KQL.",
      "São agregações pré-calculadas e persistidas que se atualizam incrementalmente à medida que novos dados chegam, criadas com `.create materialized-view NomeView on table NomeTabela (query KQL de agregação)`, respondendo queries com muito menos custo que recalcular sobre a tabela base.",
      "São views somente leitura que encapsulam queries complexas sem persistir dados; o recálculo é feito a cada acesso mas com plano de execução otimizado em cache."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "São agregações pré-calculadas e persistidas que se atualizam incrementalmente à medida que novos dados chegam, criadas com `.create materialized-view NomeView on table NomeTabela (query KQL de agregação)`, respondendo queries com muito menos custo que recalcular sobre a tabela base.",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "São agregações pré-calculadas e persistidas que se atualizam incrementalmente à medida que novos dados chegam, criadas com `.create materialized-view NomeView on table NomeTabela (query KQL de agregação)`, respondendo queries com muito menos custo que recalcular sobre a tabela base. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "São snapshots diários da tabela KQL gerados automaticamente pelo Eventhouse para suportar queries de time travel sem impacto no desempenho da ingestão.: Esta opção contém erro técnico ou implementação não recomendada",
        "São cópias físicas de tabelas KQL armazenadas em formato Delta no OneLake para serem consultadas via SQL Analytics Endpoint como alternativa ao KQL.: Esta opção contém erro técnico ou implementação não recomendada",
        "São views somente leitura que encapsulam queries complexas sem persistir dados; o recálculo é feito a cada acesso mas com plano de execução otimizado em cache.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q110",
    "text": "Em um workspace Fabric com Git integration, dois desenvolvedores modificam o mesmo notebook simultaneamente em branches diferentes. Como o conflito é resolvido ao fazer merge?",
    "options": [
      "O Fabric bloqueia automaticamente edição de notebooks quando detecta que outro usuário está editando o mesmo arquivo em um branch diferente, evitando conflitos.",
      "Conflitos em notebooks Fabric não podem ser resolvidos via Git; é necessário usar a funcionalidade \"Compare versions\" do Fabric que faz merge visual célula por célula.",
      "O conflito é resolvido no repositório Git (Azure DevOps ou GitHub) via PR (Pull Request); como notebooks são arquivos JSON/código, ferramentas de merge do Git podem resolver conflitos de texto; conflitos de células específicas requerem resolução manual escolhendo qual versão manter.",
      "O Fabric resolve automaticamente conflitos de notebooks usando a versão mais recente (last-write-wins) quando os dois branches são sincronizados com o workspace."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar uma solução analítica",
    "explanation": {
      "respostaCerta": "O conflito é resolvido no repositório Git (Azure DevOps ou GitHub) via PR (Pull Request); como notebooks são arquivos JSON/código, ferramentas de merge do Git podem resolver conflitos de texto; conflitos de células específicas requerem resolução manual escolhendo qual versão manter.",
      "intro": "Entendendo Git integration e versionamento de artefatos",
      "papoReto": "Git integration sincroniza definições de artefatos (JSON/TMDL para notebooks, pipelines, warehouses) com repositório. Importante: NUNCA sincroniza dados reais das tabelas Delta—apenas metadata. Dados sempre permanecem no OneLake.",
      "puloDoGato": "Git = definições (código + schema). Dados = OneLake. Nunca confunda",
      "cascasDeBanana": [
        "Dados Delta como Parquet: Delta tables nunca são sincronizadas—só metadata é versionada",
        "Exportação manual: Git sync é automático para itens suportados quando habilitado",
        "Marcação manual de itens: Sync é automático, sem necessidade de marcação individual"
      ],
      "dicaOuro": "Separação crítica: Git versioniza definições, OneLake guarda dados"
    }
  },
  {
    "id": "dp700_q111",
    "text": "Em um Dataflow Gen2 do Fabric, o que é a área de Staging e como ela afeta o comportamento das transformações?",
    "options": [
      "A área de Staging é um buffer de memória do Power Query que armazena os resultados intermediários de cada etapa de transformação para exibição no editor visual.",
      "A área de Staging é uma tabela temporária no Warehouse do workspace onde os dados aguardam validação de qualidade antes de serem carregados no destino final configurado.",
      "A área de Staging é um Lakehouse intermediário onde os dados são materializados durante o processamento do Dataflow Gen2, permitindo que transformações complexas sejam executadas pelo motor Spark do Fabric em vez de na fonte, habilitando Query Folding parcial e melhorando o desempenho de transformações encadeadas.",
      "A área de Staging é um armazenamento externo no Azure Blob Storage onde o Dataflow Gen2 salva checkpoints para garantir recuperação em caso de falha durante o processamento."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "A área de Staging é um Lakehouse intermediário onde os dados são materializados durante o processamento do Dataflow Gen2, permitindo que transformações complexas sejam executadas pelo motor Spark do Fabric em vez de na fonte, habilitando Query Folding parcial e melhorando o desempenho de transformações encadeadas.",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "A área de Staging é um Lakehouse intermediário onde os dados são materializados durante o processamento do Dataflow Gen2, permitindo que transformações complexas sejam executadas pelo motor Spark do Fabric em vez de na fonte, habilitando Query Folding parcial e melhorando o desempenho de transformações encadeadas. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "A área de Staging é um buffer de memória do Power Query que armazena os resultados intermediários de cada etapa de transformação para exibição no editor visual.: Esta opção contém erro técnico ou implementação não recomendada",
        "A área de Staging é uma tabela temporária no Warehouse do workspace onde os dados aguardam validação de qualidade antes de serem carregados no destino final configurado.: Esta opção contém erro técnico ou implementação não recomendada",
        "A área de Staging é um armazenamento externo no Azure Blob Storage onde o Dataflow Gen2 salva checkpoints para garantir recuperação em caso de falha durante o processamento.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q112",
    "text": "Um job de Structured Streaming no Fabric parou de processar novos eventos sem gerar erros explícitos. Como você diagnostica o problema?",
    "options": [
      "Verificar na Spark UI a aba \"Structured Streaming\" para métricas de `inputRowsPerSecond` e `processedRowsPerSecond`; verificar se o stream está em estado \"Idle\" ou \"Stopped\"; inspecionar o diretório de checkpoint para corrupção; verificar logs do executor para warnings de timeout ou conexão com a fonte.",
      "Verificar no Azure Event Hubs se há eventos novos; se não houver, o comportamento é esperado",
      "Executar `spark.streams.resetAll()` para reiniciar todos os streams ativos da sessão e verificar se o job é recriado corretamente com o mesmo checkpoint.",
      "Reiniciar a sessão Spark e o job de streaming, pois parada silenciosa indica memory leak no driver que só é resolvido com restart completo da sessão."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Verificar na Spark UI a aba \"Structured Streaming\" para métricas de `inputRowsPerSecond` e `processedRowsPerSecond`; verificar se o stream está em estado \"Idle\" ou \"Stopped\"; inspecionar o diretório de checkpoint para corrupção; verificar logs do executor para warnings de timeout ou conexão com a fonte.",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "Para dados de streaming/IoT em alta velocidade: Eventstream captura eventos (IoT Hub, Event Hubs) → Eventhouse processa tempo real com KQL → Lakehouse persistencia via Structured Streaming/Eventstream destination.",
      "puloDoGato": "Eventstream → Eventhouse (tempo real KQL) → Lakehouse (persistencia Delta)",
      "cascasDeBanana": [
        "Stream Analytics via Shortcut: Shortcuts são read-only, não processam streams",
        "Dataflow Gen2 streaming: Dataflows é low-code, não nativo para high-speed IoT",
        "Data Pipeline de 1min: Pipelines batched em 1 minuto não é ideal para IoT contínuo"
      ],
      "dicaOuro": "Real-time streaming = Eventstream + Eventhouse. Persistencia = Delta em Lakehouse"
    }
  },
  {
    "id": "dp700_q113",
    "text": "O Fabric Warehouse suporta transações explícitas com BEGIN TRANSACTION, COMMIT e ROLLBACK? Quais são as limitações?",
    "options": [
      "Suporta transações explícitas apenas para stored procedures; operações T-SQL avulsas são sempre executadas em auto-commit independente de BEGIN TRANSACTION.",
      "Não; o Fabric Warehouse usa apenas auto-commit por design de arquitetura cloud; transações explícitas requerem uso do SQL Database do Fabric que oferece ACID completo.",
      "Suporta apenas transações de leitura (BEGIN TRANSACTION READ ONLY); operações de escrita são sempre auto-committed para garantir consistência do armazenamento colunar.",
      "Sim, suporta transações explícitas T-SQL; limitações incluem: não suporte a transações distribuídas entre múltiplos Warehouses, timeout de transação configurável e ausência de SAVEPOINTS"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Sim, suporta transações explícitas T-SQL; limitações incluem: não suporte a transações distribuídas entre múltiplos Warehouses, timeout de transação configurável e ausência de SAVEPOINTS",
      "intro": "Entendendo Git integration e versionamento de artefatos",
      "papoReto": "Sim, suporta transações explícitas T-SQL; limitações incluem: não suporte a transações distribuídas entre múltiplos Warehouses, timeout de transação configurável e ausência de SAVEPOINTS é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Suporta transações explícitas apenas para stored procedures; operações T-SQL avulsas são sempre executadas em auto-commit independente de BEGIN TRANSACTION.: Esta opção contém erro técnico ou implementação não recomendada",
        "Não; o Fabric Warehouse usa apenas auto-commit por design de arquitetura cloud; transações explícitas requerem uso do SQL Database do Fabric que oferece ACID completo.: Esta opção contém erro técnico ou implementação não recomendada",
        "Suporta apenas transações de leitura (BEGIN TRANSACTION READ ONLY); operações de escrita são sempre auto-committed para garantir consistência do armazenamento colunar.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q114",
    "text": "Em PySpark no Fabric, como você trata data skew (distribuição desigual de dados entre partições) que causa algumas tasks muito mais lentas que outras?",
    "options": [
      "Aumentar o número de executores do cluster para que cada executor processe uma partição skewed individualmente sem competir por recursos.",
      "Usar `salt key` adicionando um sufixo aleatório à chave de join para distribuir os dados de forma mais uniforme, habilitar AQE com `spark.sql.adaptive.skewJoin.enabled=true` que detecta e divide automaticamente partições skewed, ou usar `hint.skew` em queries Spark SQL.",
      "Usar `df.repartition(1)` para consolidar todos os dados em uma única partição onde o skew não causa problema de distribuição entre executores.",
      "Filtrar os valores que causam skew antes do join e processá-los separadamente com lógica diferente, depois fazer union com os resultados do join normal."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Usar `salt key` adicionando um sufixo aleatório à chave de join para distribuir os dados de forma mais uniforme, habilitar AQE com `spark.sql.adaptive.skewJoin.enabled=true` que detecta e divide automaticamente partições skewed, ou usar `hint.skew` em queries Spark SQL.",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "Usar `salt key` adicionando um sufixo aleatório à chave de join para distribuir os dados de forma mais uniforme, habilitar AQE com `spark.sql.adaptive.skewJoin.enabled=true` que detecta e divide automaticamente partições skewed, ou usar `hint.skew` em queries Spark SQL. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Aumentar o número de executores do cluster para que cada executor processe uma partição skewed individualmente sem competir por recursos.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usar `df.repartition(1)` para consolidar todos os dados em uma única partição onde o skew não causa problema de distribuição entre executores.: Esta opção contém erro técnico ou implementação não recomendada",
        "Filtrar os valores que causam skew antes do join e processá-los separadamente com lógica diferente, depois fazer union com os resultados do join normal.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q115",
    "text": "Ao criar um Shortcut no OneLake apontando para um Azure Data Lake Storage Gen2, qual método de autenticação é recomendado para ambientes de produção?",
    "options": [
      "Autenticação via Organizational Account (delegated) para acessos interativos ou via Service Principal (account key ou SAS token) para automações, com preferência por Workspace Identity (Managed Identity) quando disponível para evitar gerenciamento de credenciais.",
      "Apenas Account Key é suportado para Shortcuts de ADLS Gen2; outros métodos de autenticação requerem criar uma conexão separada via Data Pipeline.",
      "Autenticação anônima via SAS token público é o único método suportado para Shortcuts de fontes externas ao tenant Fabric por restrições de segurança cross-tenant.",
      "Service Principal com certificado X.509 é o único método aprovado para produção; autenticação por account key é bloqueada automaticamente pelo Admin Portal do Fabric."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Autenticação via Organizational Account (delegated) para acessos interativos ou via Service Principal (account key ou SAS token) para automações, com preferência por Workspace Identity (Managed Identity) quando disponível para evitar gerenciamento de credenciais.",
      "intro": "Entendendo Shortcuts como virtual links vs. Mirror para cópias reais",
      "papoReto": "Shortcuts são pointers virtuais read-only para dados externos (ADLS Gen2, S3, Google Cloud, Lakehouses Fabric) sem copiar. Mirror copia incrementalmente dados. Escolha shortcuts para acesso virtual, mirror para cópias gerenciadas.",
      "puloDoGato": "Shortcut = read-only pointer. Mirror = incremental copy. Escolha conforme precisa escrever",
      "cascasDeBanana": [
        "Lakehouses separados: possível mas ineficiente—shortcuts no mesmo é melhor",
        "Sensitivity Labels: classificam, não controlam acesso como ACLs",
        "RLS: filtra linhas de tabelas, diferente de acesso a arquivos"
      ],
      "dicaOuro": "Shortcuts referenciam, Mirrors copiam. Use conforme necessidade de escrita"
    }
  },
  {
    "id": "dp700_q116",
    "text": "Um Data Pipeline falha com \"Unable to connect to the on-premises data gateway\" ao tentar acessar um SQL Server local. Quais são as etapas de diagnóstico?\n**117 | DP-700 | Ingest and Transform |",
    "options": [
      "Reiniciar o workspace Fabric e recriar a conexão de dados, pois erros de gateway geralmente são causados por cache de credenciais expirado no serviço do Fabric.",
      "Verificar se o serviço do gateway está ativo na máquina on-premises, confirmar que as credenciais de conexão estão corretas, validar regras de firewall permitindo comunicação do gateway com o SQL Server, e verificar no Admin Portal do Fabric se o gateway está online e saudável.",
      "Verificar as configurações de proxy HTTP do workspace Fabric no Admin Portal, pois erros de gateway on-premises são causados por bloqueio de proxy na comunicação cloud-to-on-premises.",
      "Migrar os dados do SQL Server on-premises para o Azure SQL Database antes de reexecutar o pipeline, pois o gateway on-premises não é suportado em workspaces com capacity F64 ou superior."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Verificar se o serviço do gateway está ativo na máquina on-premises, confirmar que as credenciais de conexão estão corretas, validar regras de firewall permitindo comunicação do gateway com o SQL Server, e verificar no Admin Portal do Fabric se o gateway está online e saudável.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Verificar se o serviço do gateway está ativo na máquina on-premises, confirmar que as credenciais de conexão estão corretas, validar regras de firewall permitindo comunicação do gateway com o SQL Server, e verificar no Admin Portal do Fabric se o gateway está online e saudável. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Reiniciar o workspace Fabric e recriar a conexão de dados, pois erros de gateway geralmente são causados por cache de credenciais expirado no serviço do Fabric.: Esta opção contém erro técnico ou implementação não recomendada",
        "Verificar as configurações de proxy HTTP do workspace Fabric no Admin Portal, pois erros de gateway on-premises são causados por bloqueio de proxy na comunicação cloud-to-on-premises.: Esta opção contém erro técnico ou implementação não recomendada",
        "Migrar os dados do SQL Server on-premises para o Azure SQL Database antes de reexecutar o pipeline, pois o gateway on-premises não é suportado em workspaces com capacity F64 ou superior.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q117",
    "text": "Em um Lakehouse do Fabric, quando você deve armazenar dados na seção \"Files\" em vez de \"Tables\"?",
    "options": [
      "Sempre que os dados excedem 1 TB, pois a seção Tables tem limite de tamanho por tabela e arquivos grandes devem ser armazenados na seção Files sem restrição.",
      "Quando os dados precisam ser acessados por múltiplos workspaces via Shortcuts, pois apenas arquivos na seção Files podem ser referenciados por Shortcuts de outros Lakehouses.",
      "Na seção Files quando os dados são brutos/semi-estruturados (JSON, XML, imagens, CSV sem schema definido), servem como zona de landing temporária antes de transformação, ou quando o acesso via SQL não é necessário e os dados são consumidos apenas por notebooks PySpark.",
      "Quando os dados precisam de controle de versão, pois arquivos na seção Files são automaticamente versionados pelo OneLake enquanto tabelas Delta não suportam time travel no Fabric."
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Na seção Files quando os dados são brutos/semi-estruturados (JSON, XML, imagens, CSV sem schema definido), servem como zona de landing temporária antes de transformação, ou quando o acesso via SQL não é necessário e os dados são consumidos apenas por notebooks PySpark.",
      "intro": "Entendendo Shortcuts como virtual links vs. Mirror para cópias reais",
      "papoReto": "Na seção Files quando os dados são brutos/semi-estruturados (JSON, XML, imagens, CSV sem schema definido), servem como zona de landing temporária antes de transformação, ou quando o acesso via SQL não é necessário e os dados são consumidos apenas por notebooks PySpark. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Sempre que os dados excedem 1 TB, pois a seção Tables tem limite de tamanho por tabela e arquivos grandes devem ser armazenados na seção Files sem restrição.: Esta opção contém erro técnico ou implementação não recomendada",
        "Quando os dados precisam ser acessados por múltiplos workspaces via Shortcuts, pois apenas arquivos na seção Files podem ser referenciados por Shortcuts de outros Lakehouses.: Esta opção contém erro técnico ou implementação não recomendada",
        "Quando os dados precisam de controle de versão, pois arquivos na seção Files são automaticamente versionados pelo OneLake enquanto tabelas Delta não suportam time travel no Fabric.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q118",
    "text": "O que é o processo de \"framing\" no modo Direct Lake de um modelo semântico do Fabric e qual é seu impacto para engenheiros de dados?",
    "options": [
      "Framing é o processo pelo qual o Direct Lake cria um snapshot consistente dos arquivos Delta para garantir que uma query veja um estado coerente dos dados; ocorre automaticamente quando dados são atualizados no Lakehouse e pode ser disparado manualmente via `XMLA refresh` para garantir que o modelo veja os dados mais recentes.",
      "Framing é a criação automática de tabelas de agregação pelo Direct Lake baseado nos padrões de query observados nos primeiros 30 dias de uso do modelo semântico.",
      "Framing é o processo de particionamento automático dos arquivos Delta pelo Direct Lake para otimizar o carregamento de colunas individuais em memória sob demanda.",
      "Framing é o processo de compressão VertiPaq aplicado aos dados Delta ao serem carregados em memória pelo Direct Lake, transformando o formato colunar Parquet em formato otimizado para DAX."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Framing é o processo pelo qual o Direct Lake cria um snapshot consistente dos arquivos Delta para garantir que uma query veja um estado coerente dos dados; ocorre automaticamente quando dados são atualizados no Lakehouse e pode ser disparado manualmente via `XMLA refresh` para garantir que o modelo veja os dados mais recentes.",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "Framing é o processo pelo qual o Direct Lake cria um snapshot consistente dos arquivos Delta para garantir que uma query veja um estado coerente dos dados; ocorre automaticamente quando dados são atualizados no Lakehouse e pode ser disparado manualmente via `XMLA refresh` para garantir que o modelo veja os dados mais recentes. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Framing é a criação automática de tabelas de agregação pelo Direct Lake baseado nos padrões de query observados nos primeiros 30 dias de uso do modelo semântico.: Esta opção contém erro técnico ou implementação não recomendada",
        "Framing é o processo de particionamento automático dos arquivos Delta pelo Direct Lake para otimizar o carregamento de colunas individuais em memória sob demanda.: Esta opção contém erro técnico ou implementação não recomendada",
        "Framing é o processo de compressão VertiPaq aplicado aos dados Delta ao serem carregados em memória pelo Direct Lake, transformando o formato colunar Parquet em formato otimizado para DAX.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q119",
    "text": "O Fabric Warehouse suporta objetos SEQUENCE para geração de valores sequenciais? Como você gera surrogate keys sem SEQUENCE?",
    "options": [
      "O Fabric Warehouse usa `AUTO_INCREMENT` em vez de `SEQUENCE` ou `IDENTITY`; a sintaxe é `CREATE TABLE tabela (id INT AUTO_INCREMENT PRIMARY KEY)`.",
      "Sequences são desnecessárias no Fabric Warehouse pois o Delta Lake gera automaticamente IDs únicos para cada linha inserida via metadados do transaction log.",
      "O Fabric Warehouse não suporta objetos SEQUENCE; alternativas são usar `IDENTITY(1,1)` em colunas de tabela para auto-incremento, `ROW_NUMBER() OVER (ORDER BY coluna)` em queries CTAS para gerar surrogate keys, ou gerar GUIDs com `NEWID()`.",
      "Sim, suporta `CREATE SEQUENCE nome START WITH 1 INCREMENT BY 1`; é o método recomendado para gerar surrogate keys em tabelas de dimensão no Warehouse."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "O Fabric Warehouse não suporta objetos SEQUENCE; alternativas são usar `IDENTITY(1,1)` em colunas de tabela para auto-incremento, `ROW_NUMBER() OVER (ORDER BY coluna)` em queries CTAS para gerar surrogate keys, ou gerar GUIDs com `NEWID()`.",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "O Fabric Warehouse não suporta objetos SEQUENCE; alternativas são usar `IDENTITY(1,1)` em colunas de tabela para auto-incremento, `ROW_NUMBER() OVER (ORDER BY coluna)` em queries CTAS para gerar surrogate keys, ou gerar GUIDs com `NEWID()`. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "O Fabric Warehouse usa `AUTO_INCREMENT` em vez de `SEQUENCE` ou `IDENTITY`; a sintaxe é `CREATE TABLE tabela (id INT AUTO_INCREMENT PRIMARY KEY)`.: Esta opção contém erro técnico ou implementação não recomendada",
        "Sequences são desnecessárias no Fabric Warehouse pois o Delta Lake gera automaticamente IDs únicos para cada linha inserida via metadados do transaction log.: Esta opção contém erro técnico ou implementação não recomendada",
        "Sim, suporta `CREATE SEQUENCE nome START WITH 1 INCREMENT BY 1`; é o método recomendado para gerar surrogate keys em tabelas de dimensão no Warehouse.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q120",
    "text": "Como você implementa um sistema de alertas para notificar a equipe de engenharia quando um pipeline Fabric não executa dentro da janela de tempo esperada?",
    "options": [
      "Configurando Azure Monitor Metric Alerts que monitoram automaticamente o tempo de execução de pipelines Fabric e disparam alertas quando excedem o SLA configurado.",
      "Combinando Workspace Logging (enviando logs para um Lakehouse), um notebook de monitoramento agendado que consulta os logs e verifica execuções atrasadas, e Power Automate ou API REST para disparar notificações Teams/e-mail quando a condição de atraso é detectada.",
      "Usando o recurso \"SLA Monitoring\" integrado ao Monitor Hub do Fabric que permite definir janelas de tempo esperadas para cada pipeline e gera alertas automáticos.",
      "Criando uma Logic App no Azure que monitora a fila de mensagens do Fabric Service Bus e dispara alertas quando não recebe a mensagem de conclusão do pipeline no prazo."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Combinando Workspace Logging (enviando logs para um Lakehouse), um notebook de monitoramento agendado que consulta os logs e verifica execuções atrasadas, e Power Automate ou API REST para disparar notificações Teams/e-mail quando a condição de atraso é detectada.",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "Combinando Workspace Logging (enviando logs para um Lakehouse), um notebook de monitoramento agendado que consulta os logs e verifica execuções atrasadas, e Power Automate ou API REST para disparar notificações Teams/e-mail quando a condição de atraso é detectada. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Configurando Azure Monitor Metric Alerts que monitoram automaticamente o tempo de execução de pipelines Fabric e disparam alertas quando excedem o SLA configurado.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando o recurso \"SLA Monitoring\" integrado ao Monitor Hub do Fabric que permite definir janelas de tempo esperadas para cada pipeline e gera alertas automáticos.: Esta opção contém erro técnico ou implementação não recomendada",
        "Criando uma Logic App no Azure que monitora a fila de mensagens do Fabric Service Bus e dispara alertas quando não recebe a mensagem de conclusão do pipeline no prazo.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q121",
    "text": "Em PySpark no Fabric, quais operações são \"eager\" (executadas imediatamente) e quais são \"lazy\" (adiadas até uma ação)?",
    "options": [
      "Apenas operações de escrita (`write()`, `save()`) são eager; todas as demais operações incluindo `count()` e `show()` são lazy e podem ser otimizadas pelo Catalyst.",
      "Transformações como `filter()`, `select()`, `join()`, `groupBy()`, `withColumn()` são lazy (apenas constroem o plano); ações como `count()`, `show()`, `collect()`, `write()`, `save()` são eager e disparam a execução do plano completo.",
      "No Fabric, todas as operações PySpark são eager por padrão para melhorar a previsibilidade de uso de recursos; o lazy evaluation deve ser habilitado explicitamente.",
      "Operações com shuffle (join, groupBy, repartition) são sempre eager pois requerem materialização imediata dos dados para redistribuição entre executores."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Transformações como `filter()`, `select()`, `join()`, `groupBy()`, `withColumn()` são lazy (apenas constroem o plano); ações como `count()`, `show()`, `collect()`, `write()`, `save()` são eager e disparam a execução do plano completo.",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "Transformações como `filter()`, `select()`, `join()`, `groupBy()`, `withColumn()` são lazy (apenas constroem o plano); ações como `count()`, `show()`, `collect()`, `write()`, `save()` são eager e disparam a execução do plano completo. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Apenas operações de escrita (`write()`, `save()`) são eager; todas as demais operações incluindo `count()` e `show()` são lazy e podem ser otimizadas pelo Catalyst.: Esta opção contém erro técnico ou implementação não recomendada",
        "No Fabric, todas as operações PySpark são eager por padrão para melhorar a previsibilidade de uso de recursos; o lazy evaluation deve ser habilitado explicitamente.: Esta opção contém erro técnico ou implementação não recomendada",
        "Operações com shuffle (join, groupBy, repartition) são sempre eager pois requerem materialização imediata dos dados para redistribuição entre executores.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q122",
    "text": "Qual é a diferença entre o Fabric Warehouse e o Fabric SQL Database, e quando cada um é mais adequado para engenharia de dados?",
    "options": [
      "Fabric SQL Database é exclusivo para workloads de machine learning via SQL; Fabric Warehouse é para BI e relatórios; ambos compartilham o mesmo motor de armazenamento Delta Lake.",
      "Fabric Warehouse é otimizado para workloads analíticos com armazenamento colunar e T-SQL para grandes volumes; Fabric SQL Database é um banco relacional OLTP com suporte a transações ACID completas, ideal para aplicações transacionais que também precisam integrar com o ecossistema Fabric.",
      "São o mesmo produto com nomes diferentes; Fabric SQL Database é o nome técnico e Fabric Warehouse é o nome de marketing para o mesmo serviço de banco de dados analítico.",
      "Fabric Warehouse suporta T-SQL completo incluindo triggers e foreign keys enforçadas; Fabric SQL Database usa apenas dialeto SQL simplificado sem suporte a objetos programáticos avançados."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Fabric Warehouse é otimizado para workloads analíticos com armazenamento colunar e T-SQL para grandes volumes; Fabric SQL Database é um banco relacional OLTP com suporte a transações ACID completas, ideal para aplicações transacionais que também precisam integrar com o ecossistema Fabric.",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "Fabric Warehouse é otimizado para workloads analíticos com armazenamento colunar e T-SQL para grandes volumes; Fabric SQL Database é um banco relacional OLTP com suporte a transações ACID completas, ideal para aplicações transacionais que também precisam integrar com o ecossistema Fabric. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Fabric SQL Database é exclusivo para workloads de machine learning via SQL; Fabric Warehouse é para BI e relatórios; ambos compartilham o mesmo motor de armazenamento Delta Lake.: Esta opção contém erro técnico ou implementação não recomendada",
        "São o mesmo produto com nomes diferentes; Fabric SQL Database é o nome técnico e Fabric Warehouse é o nome de marketing para o mesmo serviço de banco de dados analítico.: Esta opção contém erro técnico ou implementação não recomendada",
        "Fabric Warehouse suporta T-SQL completo incluindo triggers e foreign keys enforçadas; Fabric SQL Database usa apenas dialeto SQL simplificado sem suporte a objetos programáticos avançados.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q123",
    "text": "Em um Notebook Fabric de produção, como você implementa um padrão de tratamento de erros robusto que registra falhas, envia alertas e permite reprocessamento?",
    "options": [
      "Usando `spark.sparkContext.setCheckpointDir()` que automaticamente captura e registra todos os erros de execução do notebook em uma tabela de log do workspace.",
      "Usando blocos `try/except` com logging estruturado em uma tabela Delta de auditoria, `mssparkutils.notebook.exit()` com código de status para sinalizar sucesso/falha ao pipeline orquestrador, e integração com Power Automate via webhook para notificações em caso de exceção crítica.",
      "Configurando `spark.conf.set(\"spark.sql.error.handling\", \"log_and_continue\")` que registra erros automaticamente e continua a execução sem interromper o notebook.",
      "Usando `dbutils.fs.put(\"Files/errors/log.txt\", str(error), True)` para gravar erros em arquivo texto e um pipeline separado que verifica periodicamente a existência do arquivo de erro."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Usando blocos `try/except` com logging estruturado em uma tabela Delta de auditoria, `mssparkutils.notebook.exit()` com código de status para sinalizar sucesso/falha ao pipeline orquestrador, e integração com Power Automate via webhook para notificações em caso de exceção crítica.",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "Usando blocos `try/except` com logging estruturado em uma tabela Delta de auditoria, `mssparkutils.notebook.exit()` com código de status para sinalizar sucesso/falha ao pipeline orquestrador, e integração com Power Automate via webhook para notificações em caso de exceção crítica. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Usando `spark.sparkContext.setCheckpointDir()` que automaticamente captura e registra todos os erros de execução do notebook em uma tabela de log do workspace.: Esta opção contém erro técnico ou implementação não recomendada",
        "Configurando `spark.conf.set(\"spark.sql.error.handling\", \"log_and_continue\")` que registra erros automaticamente e continua a execução sem interromper o notebook.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando `dbutils.fs.put(\"Files/errors/log.txt\", str(error), True)` para gravar erros em arquivo texto e um pipeline separado que verifica periodicamente a existência do arquivo de erro.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q124",
    "text": "O Fabric Warehouse cria estatísticas automaticamente? Quando é necessário criar estatísticas manuais?",
    "options": [
      "O Fabric Warehouse não cria estatísticas automaticamente; todas as estatísticas devem ser criadas manualmente pelo engenheiro para garantir planos de execução eficientes.",
      "Estatísticas são gerenciadas pelo Delta Lake subjacente e não podem ser configuradas manualmente no Fabric Warehouse; o motor usa sempre as estatísticas de arquivo Parquet.",
      "O Fabric Warehouse cria estatísticas automáticas para colunas usadas em predicados de filtro e join durante a execução de queries; estatísticas manuais via `CREATE STATISTICS` são necessárias para colunas com distribuição de dados muito desigual onde as estatísticas automáticas não capturam bem a seletividade real.",
      "Estatísticas automáticas são criadas apenas para colunas do tipo INT e BIGINT; colunas de texto e data requerem `CREATE STATISTICS` manual para que o otimizador gere planos eficientes."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "O Fabric Warehouse cria estatísticas automáticas para colunas usadas em predicados de filtro e join durante a execução de queries; estatísticas manuais via `CREATE STATISTICS` são necessárias para colunas com distribuição de dados muito desigual onde as estatísticas automáticas não capturam bem a seletividade real.",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "O Fabric Warehouse cria estatísticas automáticas para colunas usadas em predicados de filtro e join durante a execução de queries; estatísticas manuais via `CREATE STATISTICS` são necessárias para colunas com distribuição de dados muito desigual onde as estatísticas automáticas não capturam bem a seletividade real. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "O Fabric Warehouse não cria estatísticas automaticamente; todas as estatísticas devem ser criadas manualmente pelo engenheiro para garantir planos de execução eficientes.: Esta opção contém erro técnico ou implementação não recomendada",
        "Estatísticas são gerenciadas pelo Delta Lake subjacente e não podem ser configuradas manualmente no Fabric Warehouse; o motor usa sempre as estatísticas de arquivo Parquet.: Esta opção contém erro técnico ou implementação não recomendada",
        "Estatísticas automáticas são criadas apenas para colunas do tipo INT e BIGINT; colunas de texto e data requerem `CREATE STATISTICS` manual para que o otimizador gere planos eficientes.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q125",
    "text": "No Eventstream do Fabric, como você combina dados de múltiplas fontes de streaming (Azure Event Hub e Azure IoT Hub) em um único fluxo antes de rotear para o destino?",
    "options": [
      "Adicionando múltiplas fontes ao mesmo Eventstream e usando o operador \"Union\" disponível no canvas do Eventstream para combinar os fluxos em um único stream unificado antes de aplicar transformações e rotear para o destino.",
      "Usando um notebook PySpark com `spark.readStream` de múltiplas fontes e `union()` para combinar os DataFrames de streaming antes de escrever no destino único.",
      "Criando dois Eventstreams separados (um por fonte) e um terceiro Eventstream que os consome como fontes via conector \"Eventstream-to-Eventstream\" nativo do Fabric.",
      "Configurando o Azure Event Grid para rotear eventos do IoT Hub para o mesmo Event Hub usado como fonte do Eventstream, consolidando as fontes antes do Fabric."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Adicionando múltiplas fontes ao mesmo Eventstream e usando o operador \"Union\" disponível no canvas do Eventstream para combinar os fluxos em um único stream unificado antes de aplicar transformações e rotear para o destino.",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "Para dados de streaming/IoT em alta velocidade: Eventstream captura eventos (IoT Hub, Event Hubs) → Eventhouse processa tempo real com KQL → Lakehouse persistencia via Structured Streaming/Eventstream destination.",
      "puloDoGato": "Eventstream → Eventhouse (tempo real KQL) → Lakehouse (persistencia Delta)",
      "cascasDeBanana": [
        "Stream Analytics via Shortcut: Shortcuts são read-only, não processam streams",
        "Dataflow Gen2 streaming: Dataflows é low-code, não nativo para high-speed IoT",
        "Data Pipeline de 1min: Pipelines batched em 1 minuto não é ideal para IoT contínuo"
      ],
      "dicaOuro": "Real-time streaming = Eventstream + Eventhouse. Persistencia = Delta em Lakehouse"
    }
  },
  {
    "id": "dp700_q126",
    "text": "O que é o mecanismo de \"smoothing\" de capacity no Microsoft Fabric e como ele afeta o planejamento de workloads de engenharia de dados?",
    "options": [
      "Smoothing é um algoritmo de compressão de dados que reduz o consumo de CUs durante a ingestão de dados de streaming ao agrupar eventos similares antes do processamento.",
      "Smoothing distribui o consumo de CUs de operações em background (como pipelines e refreshes) ao longo de 24 horas em vez de cobrar o pico instantâneo, permitindo que workloads intensos ocasionais não causem throttling imediato; operações interativas não têm smoothing e consomem CUs imediatamente.",
      "Smoothing aumenta automaticamente a capacity quando a utilização excede 80% por mais de 5 minutos, distribuindo o custo do scale-up ao longo do mês de cobrança.",
      "Smoothing aplica média móvel de 1 hora no consumo de CUs exibido no Capacity Metrics App para suavizar picos visuais sem impacto no consumo real cobrado."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Smoothing distribui o consumo de CUs de operações em background (como pipelines e refreshes) ao longo de 24 horas em vez de cobrar o pico instantâneo, permitindo que workloads intensos ocasionais não causem throttling imediato; operações interativas não têm smoothing e consomem CUs imediatamente.",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "Smoothing distribui o consumo de CUs de operações em background (como pipelines e refreshes) ao longo de 24 horas em vez de cobrar o pico instantâneo, permitindo que workloads intensos ocasionais não causem throttling imediato; operações interativas não têm smoothing e consomem CUs imediatamente. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Smoothing é um algoritmo de compressão de dados que reduz o consumo de CUs durante a ingestão de dados de streaming ao agrupar eventos similares antes do processamento.: Esta opção contém erro técnico ou implementação não recomendada",
        "Smoothing aumenta automaticamente a capacity quando a utilização excede 80% por mais de 5 minutos, distribuindo o custo do scale-up ao longo do mês de cobrança.: Esta opção contém erro técnico ou implementação não recomendada",
        "Smoothing aplica média móvel de 1 hora no consumo de CUs exibido no Capacity Metrics App para suavizar picos visuais sem impacto no consumo real cobrado.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q127",
    "text": "Em um Data Pipeline do Fabric, como você configura a atividade Copy Data para executar um script SQL de pré-processamento na fonte antes da cópia e um script de pós-processamento no destino após a carga?",
    "options": [
      "Configurando triggers de pipeline: um trigger de \"Before\" que executa o script de pré-processamento e um trigger de \"After\" que executa o script de pós-processamento.",
      "Usando as propriedades \"Before copy\" e \"After copy\" da atividade Copy Data que aceitam scripts T-SQL executados na fonte e no destino respectivamente.",
      "Adicionando atividades Script separadas antes e depois da atividade Copy Data no pipeline, conectadas pelos paths \"On Success\" para garantir a ordem de execução.",
      "Usando as propriedades \"Pre-copy script\" no sink (destino) para executar SQL antes da carga (ex: truncar tabela staging) e \"Post-copy script\" para executar após (ex: chamar stored procedure de merge); no source, usar \"Additional columns\" ou query SQL parametrizada para pré-filtrar."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Usando as propriedades \"Pre-copy script\" no sink (destino) para executar SQL antes da carga (ex: truncar tabela staging) e \"Post-copy script\" para executar após (ex: chamar stored procedure de merge); no source, usar \"Additional columns\" ou query SQL parametrizada para pré-filtrar.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Usando as propriedades \"Pre-copy script\" no sink (destino) para executar SQL antes da carga (ex: truncar tabela staging) e \"Post-copy script\" para executar após (ex: chamar stored procedure de merge); no source, usar \"Additional columns\" ou query SQL parametrizada para pré-filtrar. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Configurando triggers de pipeline: um trigger de \"Before\" que executa o script de pré-processamento e um trigger de \"After\" que executa o script de pós-processamento.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando as propriedades \"Before copy\" e \"After copy\" da atividade Copy Data que aceitam scripts T-SQL executados na fonte e no destino respectivamente.: Esta opção contém erro técnico ou implementação não recomendada",
        "Adicionando atividades Script separadas antes e depois da atividade Copy Data no pipeline, conectadas pelos paths \"On Success\" para garantir a ordem de execução.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q128",
    "text": "Como você cria uma Materialized View no KQL Database do Eventhouse para pré-calcular contagens de eventos por hora e categoria?",
    "options": [
      "`.create materialized-view EventosPorHora on table Eventos (Eventos | summarize count() by bin(timestamp, 1h), categoria)`",
      "`CREATE MATERIALIZED VIEW EventosPorHora AS SELECT count(*), bin(timestamp, 1h), categoria FROM Eventos GROUP BY 2, 3`",
      "`.create function EventosPorHora() { Eventos | summarize count() by bin(timestamp, 1h), categoria }`",
      "`.create table EventosPorHora (timestamp:datetime, categoria:string, total:long) with (autoUpdatePolicy=true)`"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "`.create materialized-view EventosPorHora on table Eventos (Eventos | summarize count() by bin(timestamp, 1h), categoria)`",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "Para dados de streaming/IoT em alta velocidade: Eventstream captura eventos (IoT Hub, Event Hubs) → Eventhouse processa tempo real com KQL → Lakehouse persistencia via Structured Streaming/Eventstream destination.",
      "puloDoGato": "Eventstream → Eventhouse (tempo real KQL) → Lakehouse (persistencia Delta)",
      "cascasDeBanana": [
        "Stream Analytics via Shortcut: Shortcuts são read-only, não processam streams",
        "Dataflow Gen2 streaming: Dataflows é low-code, não nativo para high-speed IoT",
        "Data Pipeline de 1min: Pipelines batched em 1 minuto não é ideal para IoT contínuo"
      ],
      "dicaOuro": "Real-time streaming = Eventstream + Eventhouse. Persistencia = Delta em Lakehouse"
    }
  },
  {
    "id": "dp700_q129",
    "text": "Como você cria uma tabela externa no Fabric Warehouse que referencia arquivos Parquet armazenados no OneLake sem importar os dados?",
    "options": [
      "Usando `CREATE EXTERNAL TABLE dbo.tabela_externa (colunas...) WITH (LOCATION = 'abfss://workspace@onelake.dfs.fabric.microsoft.com/lakehouse.Lakehouse/Files/pasta/', DATA_SOURCE = fonte_onelake, FILE_FORMAT = parquet_format)` após criar o DATA SOURCE e FILE FORMAT externos.",
      "Usando `CREATE TABLE dbo.tabela_externa AS EXTERNAL SELECT * FROM OPENROWSET(BULK 'Files/pasta/', FORMAT='PARQUET')`",
      "Criando um Shortcut no Warehouse apontando para a pasta do OneLake, que automaticamente expõe os arquivos Parquet como tabela consultável via T-SQL.",
      "Usando `CREATE VIEW dbo.tabela_externa AS SELECT * FROM EXTERNAL_TABLE('abfss://...', 'PARQUET')`"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Usando `CREATE EXTERNAL TABLE dbo.tabela_externa (colunas...) WITH (LOCATION = 'abfss://workspace@onelake.dfs.fabric.microsoft.com/lakehouse.Lakehouse/Files/pasta/', DATA_SOURCE = fonte_onelake, FILE_FORMAT = parquet_format)` após criar o DATA SOURCE e FILE FORMAT externos.",
      "intro": "Entendendo Shortcuts como virtual links vs. Mirror para cópias reais",
      "papoReto": "Usando `CREATE EXTERNAL TABLE dbo.tabela_externa (colunas...) WITH (LOCATION = 'abfss://workspace@onelake.dfs.fabric.microsoft.com/lakehouse.Lakehouse/Files/pasta/', DATA_SOURCE = fonte_onelake, FILE_FORMAT = parquet_format)` após criar o DATA SOURCE e FILE FORMAT externos. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Usando `CREATE TABLE dbo.tabela_externa AS EXTERNAL SELECT * FROM OPENROWSET(BULK 'Files/pasta/', FORMAT='PARQUET')`: Esta opção contém erro técnico ou implementação não recomendada",
        "Criando um Shortcut no Warehouse apontando para a pasta do OneLake, que automaticamente expõe os arquivos Parquet como tabela consultável via T-SQL.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando `CREATE VIEW dbo.tabela_externa AS SELECT * FROM EXTERNAL_TABLE('abfss://...', 'PARQUET')`: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q130",
    "text": "Em um Eventhouse do Fabric, como você identifica e investiga falhas de ingestão de dados em uma tabela KQL?",
    "options": [
      "Acessando o Monitor Hub do Fabric filtrado por tipo \"Eventhouse\" que exibe automaticamente todas as falhas de ingestão com stack trace completo.",
      "Executando `.show ingestion failures | where Table == 'NomeTabela' | order by FailedOn desc` para ver as falhas recentes com detalhes do erro, arquivo afetado e mensagem de diagnóstico; também verificando `.show commands` para histórico de comandos de ingestão.",
      "Consultando a tabela de sistema `sys.ingestion_errors` no KQL Database via query SQL pelo SQL Analytics Endpoint do Eventhouse.",
      "Verificando o Azure Event Hubs dead-letter queue onde o Eventhouse automaticamente move mensagens que falham na ingestão após 3 tentativas."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Executando `.show ingestion failures | where Table == 'NomeTabela' | order by FailedOn desc` para ver as falhas recentes com detalhes do erro, arquivo afetado e mensagem de diagnóstico; também verificando `.show commands` para histórico de comandos de ingestão.",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "Para dados de streaming/IoT em alta velocidade: Eventstream captura eventos (IoT Hub, Event Hubs) → Eventhouse processa tempo real com KQL → Lakehouse persistencia via Structured Streaming/Eventstream destination.",
      "puloDoGato": "Eventstream → Eventhouse (tempo real KQL) → Lakehouse (persistencia Delta)",
      "cascasDeBanana": [
        "Stream Analytics via Shortcut: Shortcuts são read-only, não processam streams",
        "Dataflow Gen2 streaming: Dataflows é low-code, não nativo para high-speed IoT",
        "Data Pipeline de 1min: Pipelines batched em 1 minuto não é ideal para IoT contínuo"
      ],
      "dicaOuro": "Real-time streaming = Eventstream + Eventhouse. Persistencia = Delta em Lakehouse"
    }
  },
  {
    "id": "dp700_q131",
    "text": "Qual é a vantagem de usar Pandas UDFs (vetorizadas) em vez de Python UDFs tradicionais em PySpark no Fabric?",
    "options": [
      "Pandas UDFs processam dados em chunks de Series/DataFrame pandas usando Apache Arrow para serialização, eliminando a serialização linha por linha das UDFs Python tradicionais; resultam em performance até 100x superior para funções que operam sobre arrays de dados.",
      "Pandas UDFs são equivalentes às UDFs Python em termos de performance; a vantagem é apenas sintática permitindo usar bibliotecas pandas que não têm equivalente PySpark.",
      "Pandas UDFs são compiladas para bytecode JVM automaticamente pelo runtime do Fabric, eliminando completamente o overhead de comunicação Python-JVM.",
      "Pandas UDFs executam no driver Spark sem distribuição entre executores, garantindo consistência de resultados para funções que dependem de estado global do processo Python."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Pandas UDFs processam dados em chunks de Series/DataFrame pandas usando Apache Arrow para serialização, eliminando a serialização linha por linha das UDFs Python tradicionais; resultam em performance até 100x superior para funções que operam sobre arrays de dados.",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "Pandas UDFs processam dados em chunks de Series/DataFrame pandas usando Apache Arrow para serialização, eliminando a serialização linha por linha das UDFs Python tradicionais; resultam em performance até 100x superior para funções que operam sobre arrays de dados. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Pandas UDFs são equivalentes às UDFs Python em termos de performance; a vantagem é apenas sintática permitindo usar bibliotecas pandas que não têm equivalente PySpark.: Esta opção contém erro técnico ou implementação não recomendada",
        "Pandas UDFs são compiladas para bytecode JVM automaticamente pelo runtime do Fabric, eliminando completamente o overhead de comunicação Python-JVM.: Esta opção contém erro técnico ou implementação não recomendada",
        "Pandas UDFs executam no driver Spark sem distribuição entre executores, garantindo consistência de resultados para funções que dependem de estado global do processo Python.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q132",
    "text": "Como você reduz o custo de CUs de um Data Pipeline que executa 48 vezes por dia mas na maioria das execuções não encontra dados novos para processar?",
    "options": [
      "Reduzindo a frequência de execução do trigger para 4 vezes por dia, aceitando latência maior na detecção de novos dados em troca de menor custo operacional.",
      "Implementando um padrão de detecção prévia com atividade Lookup que verifica se há novos dados (ex: conta registros com timestamp recente) e usa atividade \"If Condition\" para pular o processamento quando não há dados, reduzindo o tempo de execução e consumo de CUs das execuções vazias.",
      "Habilitando a opção \"Skip empty runs\" nas configurações avançadas do pipeline que automaticamente detecta e pula execuções sem dados novos sem consumir CUs.",
      "Substituindo o Schedule Trigger por um Storage Event Trigger que só dispara o pipeline quando novos arquivos chegam ao OneLake, eliminando execuções desnecessárias."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Implementando um padrão de detecção prévia com atividade Lookup que verifica se há novos dados (ex: conta registros com timestamp recente) e usa atividade \"If Condition\" para pular o processamento quando não há dados, reduzindo o tempo de execução e consumo de CUs das execuções vazias.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Implementando um padrão de detecção prévia com atividade Lookup que verifica se há novos dados (ex: conta registros com timestamp recente) e usa atividade \"If Condition\" para pular o processamento quando não há dados, reduzindo o tempo de execução e consumo de CUs das execuções vazias. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Reduzindo a frequência de execução do trigger para 4 vezes por dia, aceitando latência maior na detecção de novos dados em troca de menor custo operacional.: Esta opção contém erro técnico ou implementação não recomendada",
        "Habilitando a opção \"Skip empty runs\" nas configurações avançadas do pipeline que automaticamente detecta e pula execuções sem dados novos sem consumir CUs.: Esta opção contém erro técnico ou implementação não recomendada",
        "Substituindo o Schedule Trigger por um Storage Event Trigger que só dispara o pipeline quando novos arquivos chegam ao OneLake, eliminando execuções desnecessárias.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q133",
    "text": "No Warehouse do Fabric, como você extrai um valor específico de uma coluna que contém dados JSON armazenados como VARCHAR?",
    "options": [
      "Usando `coluna_json::json->>'campo'`",
      "Usando `JSON_VALUE(coluna_json, '$.campo.subcampo')` para extrair um valor escalar, `JSON_QUERY(coluna_json, '$.array')` para extrair objetos/arrays, e `OPENJSON(coluna_json) WITH (campo tipo '$.campo')` para transformar JSON em colunas relacionais.",
      "Usando `GET_JSON_OBJECT(coluna_json, '$.campo')`",
      "Usando `PARSE_JSON(coluna_json).campo`"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Usando `JSON_VALUE(coluna_json, '$.campo.subcampo')` para extrair um valor escalar, `JSON_QUERY(coluna_json, '$.array')` para extrair objetos/arrays, e `OPENJSON(coluna_json) WITH (campo tipo '$.campo')` para transformar JSON em colunas relacionais.",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "Usando `JSON_VALUE(coluna_json, '$.campo.subcampo')` para extrair um valor escalar, `JSON_QUERY(coluna_json, '$.array')` para extrair objetos/arrays, e `OPENJSON(coluna_json) WITH (campo tipo '$.campo')` para transformar JSON em colunas relacionais. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Usando `coluna_json::json->>'campo'`: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando `GET_JSON_OBJECT(coluna_json, '$.campo')`: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando `PARSE_JSON(coluna_json).campo`: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q134",
    "text": "Como um engenheiro de dados verifica o histórico de execuções de um Notebook específico no Microsoft Fabric?",
    "options": [
      "Acessando as propriedades do notebook no workspace e clicando em \"Run History\" que exibe as últimas 30 execuções com métricas de performance por célula.",
      "Verificando os logs do Spark UI no Azure Portal na seção de recursos do Fabric onde execuções de notebooks ficam armazenadas por 90 dias.",
      "Acessando o Monitor Hub do workspace, filtrando por tipo de item \"Notebook\" e pelo nome do notebook específico, visualizando o histórico de execuções com status, duração, usuário que executou e possíveis erros.",
      "Consultando o repositório Git associado ao workspace onde os logs de execução de notebooks são automaticamente commitados após cada run."
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Acessando o Monitor Hub do workspace, filtrando por tipo de item \"Notebook\" e pelo nome do notebook específico, visualizando o histórico de execuções com status, duração, usuário que executou e possíveis erros.",
      "intro": "Entendendo Git integration e versionamento de artefatos",
      "papoReto": "Acessando o Monitor Hub do workspace, filtrando por tipo de item \"Notebook\" e pelo nome do notebook específico, visualizando o histórico de execuções com status, duração, usuário que executou e possíveis erros. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Acessando as propriedades do notebook no workspace e clicando em \"Run History\" que exibe as últimas 30 execuções com métricas de performance por célula.: Esta opção contém erro técnico ou implementação não recomendada",
        "Verificando os logs do Spark UI no Azure Portal na seção de recursos do Fabric onde execuções de notebooks ficam armazenadas por 90 dias.: Esta opção contém erro técnico ou implementação não recomendada",
        "Consultando o repositório Git associado ao workspace onde os logs de execução de notebooks são automaticamente commitados após cada run.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q135",
    "text": "O que é um Real-Time Dashboard no Microsoft Fabric e como ele se integra com dados de streaming do Eventhouse?",
    "options": [
      "Um painel de monitoramento operacional integrado ao Monitor Hub que exibe métricas de performance dos itens Fabric em tempo real sem necessidade de configuração.",
      "Um dashboard Power BI especial com conexão push que recebe eventos do Eventstream diretamente via API, atualizando visuais em tempo real sem passar pelo Eventhouse.",
      "Um dashboard de visualização que consulta dados do KQL Database do Eventhouse com refresh automático configurável (segundos a minutos), exibindo métricas em tempo real sem necessidade de modelo semântico intermediário, usando queries KQL diretamente como fonte de dados dos tiles.",
      "Uma extensão do Power BI Desktop que permite criar relatórios com conexão streaming ao Eventhouse, exportados como arquivo .pbix para publicação no Fabric."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Um dashboard de visualização que consulta dados do KQL Database do Eventhouse com refresh automático configurável (segundos a minutos), exibindo métricas em tempo real sem necessidade de modelo semântico intermediário, usando queries KQL diretamente como fonte de dados dos tiles.",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "Para dados de streaming/IoT em alta velocidade: Eventstream captura eventos (IoT Hub, Event Hubs) → Eventhouse processa tempo real com KQL → Lakehouse persistencia via Structured Streaming/Eventstream destination.",
      "puloDoGato": "Eventstream → Eventhouse (tempo real KQL) → Lakehouse (persistencia Delta)",
      "cascasDeBanana": [
        "Stream Analytics via Shortcut: Shortcuts são read-only, não processam streams",
        "Dataflow Gen2 streaming: Dataflows é low-code, não nativo para high-speed IoT",
        "Data Pipeline de 1min: Pipelines batched em 1 minuto não é ideal para IoT contínuo"
      ],
      "dicaOuro": "Real-time streaming = Eventstream + Eventhouse. Persistencia = Delta em Lakehouse"
    }
  },
  {
    "id": "dp700_q136",
    "text": "Quais configurações de tenant do Admin Portal do Fabric um engenheiro de dados precisa que o administrador habilite para usar Service Principals em automações de pipeline?",
    "options": [
      "\"Service principals can use Fabric APIs\" e opcionalmente \"Service principals can access read-only admin APIs\"; também pode ser necessário \"Allow service principals to create and use profiles\" dependendo do cenário de automação implementado.",
      "Apenas \"Enable Fabric for the entire organization\" precisa estar habilitado; Service Principals têm acesso automático às APIs quando o Fabric está habilitado no tenant.",
      "\"Allow OAuth 2.0 authentication\" e \"Enable API access for external applications\" nas configurações de segurança avançada do Admin Portal do Fabric.",
      "Não há configurações de tenant necessárias; basta adicionar o Service Principal ao workspace com função Member para que tenha acesso completo às APIs do Fabric."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Implementar e gerenciar uma solução analítica",
    "explanation": {
      "respostaCerta": "\"Service principals can use Fabric APIs\" e opcionalmente \"Service principals can access read-only admin APIs\"; também pode ser necessário \"Allow service principals to create and use profiles\" dependendo do cenário de automação implementado.",
      "intro": "Entendendo Fabric workspace e gerenciamento de recursos",
      "papoReto": "\"Service principals can use Fabric APIs\" e opcionalmente \"Service principals can access read-only admin APIs\"; também pode ser necessário \"Allow service principals to create and use profiles\" dependendo do cenário de automação implementado. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Apenas \"Enable Fabric for the entire organization\" precisa estar habilitado; Service Principals têm acesso automático às APIs quando o Fabric está habilitado no tenant.: Esta opção contém erro técnico ou implementação não recomendada",
        "\"Allow OAuth 2.0 authentication\" e \"Enable API access for external applications\" nas configurações de segurança avançada do Admin Portal do Fabric.: Esta opção contém erro técnico ou implementação não recomendada",
        "Não há configurações de tenant necessárias; basta adicionar o Service Principal ao workspace com função Member para que tenha acesso completo às APIs do Fabric.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q137",
    "text": "Os Mapping Data Flows do Azure Data Factory estão disponíveis nos Data Pipelines do Microsoft Fabric? Qual é a alternativa recomendada?",
    "options": [
      "Mapping Data Flows do ADF não estão disponíveis nos pipelines do Fabric; as alternativas recomendadas são Dataflow Gen2 para transformações visuais baseadas em Power Query, ou notebooks PySpark para transformações mais complexas com Spark.",
      "Mapping Data Flows estão disponíveis apenas em workspaces com capacity F128 ou superior; capacities menores devem usar Dataflow Gen2 como alternativa.",
      "Sim, Mapping Data Flows estão disponíveis nos pipelines Fabric via atividade \"Data Flow\" que é idêntica à do Azure Data Factory com os mesmos conectores e transformações.",
      "Mapping Data Flows foram descontinuados no ADF e substituídos pelos Dataflow Gen2 do Fabric, que oferecem as mesmas funcionalidades com melhor integração ao ecossistema Fabric."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Mapping Data Flows do ADF não estão disponíveis nos pipelines do Fabric; as alternativas recomendadas são Dataflow Gen2 para transformações visuais baseadas em Power Query, ou notebooks PySpark para transformações mais complexas com Spark.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Mapping Data Flows do ADF não estão disponíveis nos pipelines do Fabric; as alternativas recomendadas são Dataflow Gen2 para transformações visuais baseadas em Power Query, ou notebooks PySpark para transformações mais complexas com Spark. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Mapping Data Flows estão disponíveis apenas em workspaces com capacity F128 ou superior; capacities menores devem usar Dataflow Gen2 como alternativa.: Esta opção contém erro técnico ou implementação não recomendada",
        "Sim, Mapping Data Flows estão disponíveis nos pipelines Fabric via atividade \"Data Flow\" que é idêntica à do Azure Data Factory com os mesmos conectores e transformações.: Esta opção contém erro técnico ou implementação não recomendada",
        "Mapping Data Flows foram descontinuados no ADF e substituídos pelos Dataflow Gen2 do Fabric, que oferecem as mesmas funcionalidades com melhor integração ao ecossistema Fabric.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q138",
    "text": "Qual é o tamanho ideal de arquivo para tabelas Delta no Lakehouse do Fabric e como você garante que os arquivos sejam criados nesse tamanho durante a ingestão?",
    "options": [
      "Arquivos Delta devem ter exatamente 512 MB cada; arquivos menores ou maiores causam degradação de performance no SQL Analytics Endpoint do Lakehouse.",
      "O tamanho ideal é entre 128 MB e 1 GB por arquivo para equilibrar paralelismo de leitura e overhead de listagem de arquivos; controlar com `spark.conf.set(\"spark.sql.files.maxPartitionBytes\", \"134217728\")` e `df.repartition(n)` antes de escrever para gerar arquivos do tamanho desejado.",
      "O Fabric determina automaticamente o tamanho ideal de arquivo baseado na capacity contratada; engenheiros de dados não devem intervir nessa configuração para evitar degradação de performance.",
      "O tamanho de arquivo não impacta o desempenho de leitura no Fabric pois o OneLake usa compressão adaptativa que normaliza arquivos de qualquer tamanho durante a leitura."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "O tamanho ideal é entre 128 MB e 1 GB por arquivo para equilibrar paralelismo de leitura e overhead de listagem de arquivos; controlar com `spark.conf.set(\"spark.sql.files.maxPartitionBytes\", \"134217728\")` e `df.repartition(n)` antes de escrever para gerar arquivos do tamanho desejado.",
      "intro": "Entendendo Deployment Pipelines e transformação de parâmetros",
      "papoReto": "O tamanho ideal é entre 128 MB e 1 GB por arquivo para equilibrar paralelismo de leitura e overhead de listagem de arquivos; controlar com `spark.conf.set(\"spark.sql.files.maxPartitionBytes\", \"134217728\")` e `df.repartition(n)` antes de escrever para gerar arquivos do tamanho desejado. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Arquivos Delta devem ter exatamente 512 MB cada; arquivos menores ou maiores causam degradação de performance no SQL Analytics Endpoint do Lakehouse.: Esta opção contém erro técnico ou implementação não recomendada",
        "O Fabric determina automaticamente o tamanho ideal de arquivo baseado na capacity contratada; engenheiros de dados não devem intervir nessa configuração para evitar degradação de performance.: Esta opção contém erro técnico ou implementação não recomendada",
        "O tamanho de arquivo não impacta o desempenho de leitura no Fabric pois o OneLake usa compressão adaptativa que normaliza arquivos de qualquer tamanho durante a leitura.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q139",
    "text": "Em um Notebook Fabric, como você gera um perfil estatístico completo de um DataFrame PySpark para análise exploratória de dados?",
    "options": [
      "Executando `spark.sql(\"ANALYZE TABLE nome_tabela COMPUTE STATISTICS FOR ALL COLUMNS\")` que gera estatísticas completas acessíveis via `df.describe()` aprimorado.",
      "Usando `df.describe()` para estatísticas básicas (count, mean, stddev, min, max), `df.summary()` para percentis adicionais, e a função `display(df)` no Fabric que oferece perfil visual automático com distribuição de valores, ou bibliotecas como `ydata-profiling` instaladas via `%pip install`.",
      "Usando `mssparkutils.data.profile(df)` que gera automaticamente um relatório de qualidade de dados e o publica no OneLake Catalog do workspace.",
      "Usando `df.profile()`"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Usando `df.describe()` para estatísticas básicas (count, mean, stddev, min, max), `df.summary()` para percentis adicionais, e a função `display(df)` no Fabric que oferece perfil visual automático com distribuição de valores, ou bibliotecas como `ydata-profiling` instaladas via `%pip install`.",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "Usando `df.describe()` para estatísticas básicas (count, mean, stddev, min, max), `df.summary()` para percentis adicionais, e a função `display(df)` no Fabric que oferece perfil visual automático com distribuição de valores, ou bibliotecas como `ydata-profiling` instaladas via `%pip install`. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Executando `spark.sql(\"ANALYZE TABLE nome_tabela COMPUTE STATISTICS FOR ALL COLUMNS\")` que gera estatísticas completas acessíveis via `df.describe()` aprimorado.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando `mssparkutils.data.profile(df)` que gera automaticamente um relatório de qualidade de dados e o publica no OneLake Catalog do workspace.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando `df.profile()`: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q140",
    "text": "Um notebook Fabric falha com `java.nio.file.AccessDeniedException` ao tentar escrever em uma pasta do Lakehouse. Quais são as causas possíveis e como resolver?",
    "options": [
      "O erro indica que o arquivo de checkpoint do Spark está corrompido; resolver limpando o diretório `Files/checkpoints` e reiniciando o notebook.",
      "O erro é causado por concurrent writes de outro notebook no mesmo arquivo Delta; usar `delta.enableConcurrentReads=true` para resolver conflitos de acesso simultâneo.",
      "Causas possíveis: usuário ou identidade do notebook não tem permissão Write no Lakehouse (verificar item-level permissions), ACLs do OneLake restringem acesso à pasta específica, ou o Lakehouse está em modo somente leitura (verificar se é um Shortcut somente leitura); resolver ajustando permissões do item ou ACLs via Storage Explorer.",
      "O erro indica que a cota de armazenamento do workspace foi atingida; verificar no Admin Portal o uso de OneLake e solicitar aumento de cota ao administrador do tenant."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Causas possíveis: usuário ou identidade do notebook não tem permissão Write no Lakehouse (verificar item-level permissions), ACLs do OneLake restringem acesso à pasta específica, ou o Lakehouse está em modo somente leitura (verificar se é um Shortcut somente leitura); resolver ajustando permissões do item ou ACLs via Storage Explorer.",
      "intro": "Entendendo Shortcuts como virtual links vs. Mirror para cópias reais",
      "papoReto": "Causas possíveis: usuário ou identidade do notebook não tem permissão Write no Lakehouse (verificar item-level permissions), ACLs do OneLake restringem acesso à pasta específica, ou o Lakehouse está em modo somente leitura (verificar se é um Shortcut somente leitura); resolver ajustando permissões do item ou ACLs via Storage Explorer. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "O erro indica que o arquivo de checkpoint do Spark está corrompido; resolver limpando o diretório `Files/checkpoints` e reiniciando o notebook.: Esta opção contém erro técnico ou implementação não recomendada",
        "O erro é causado por concurrent writes de outro notebook no mesmo arquivo Delta; usar `delta.enableConcurrentReads=true` para resolver conflitos de acesso simultâneo.: Esta opção contém erro técnico ou implementação não recomendada",
        "O erro indica que a cota de armazenamento do workspace foi atingida; verificar no Admin Portal o uso de OneLake e solicitar aumento de cota ao administrador do tenant.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q141",
    "text": "Como você otimiza uma operação MERGE INTO em um Warehouse do Fabric que processa 10 milhões de linhas e está demorando excessivamente?\n**142 | DP-700 | Monitor and Optimize |",
    "options": [
      "Habilitar o modo \"Fast MERGE\" com `SET MERGE_FAST_MODE = ON` antes da operação, que usa processamento paralelo otimizado para grandes volumes no Fabric Warehouse.",
      "Pré-filtrar a tabela fonte para incluir apenas o delta de alterações, criar estatísticas nas colunas de join antes do MERGE, usar CTAS para criar uma tabela staging intermediária com apenas as chaves afetadas, e dividir o MERGE em batches menores por range de chave para reduzir o tamanho de cada transação.",
      "Usar `MERGE HINT (LOOP JOIN)` para forçar o uso de Loop Join em vez de Hash Join, que tem melhor desempenho para tabelas com muitos registros correspondentes.",
      "Substituir o MERGE por operações separadas de DELETE seguido de INSERT que têm melhor desempenho individual que a operação combinada MERGE no armazenamento colunar."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Pré-filtrar a tabela fonte para incluir apenas o delta de alterações, criar estatísticas nas colunas de join antes do MERGE, usar CTAS para criar uma tabela staging intermediária com apenas as chaves afetadas, e dividir o MERGE em batches menores por range de chave para reduzir o tamanho de cada transação.",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "Pré-filtrar a tabela fonte para incluir apenas o delta de alterações, criar estatísticas nas colunas de join antes do MERGE, usar CTAS para criar uma tabela staging intermediária com apenas as chaves afetadas, e dividir o MERGE em batches menores por range de chave para reduzir o tamanho de cada transação. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Habilitar o modo \"Fast MERGE\" com `SET MERGE_FAST_MODE = ON` antes da operação, que usa processamento paralelo otimizado para grandes volumes no Fabric Warehouse.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usar `MERGE HINT (LOOP JOIN)` para forçar o uso de Loop Join em vez de Hash Join, que tem melhor desempenho para tabelas com muitos registros correspondentes.: Esta opção contém erro técnico ou implementação não recomendada",
        "Substituir o MERGE por operações separadas de DELETE seguido de INSERT que têm melhor desempenho individual que a operação combinada MERGE no armazenamento colunar.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q142",
    "text": "Em um Notebook Fabric, como você configura o Spark para otimizar o processamento de uma operação de join com skew severo em uma coluna de chave estrangeira com alta concentração em poucos valores?",
    "options": [
      "Usando `df.hint(\"skew\", \"coluna_chave\")` que instrui o Catalyst optimizer a ignorar o skew e usar Full Outer Join para garantir que todos os registros sejam processados uniformemente.",
      "Reparticionando o DataFrame pela coluna de join com `df.repartition(1000, \"coluna_chave\")` antes do join, garantindo que valores repetidos fiquem na mesma partição para processamento otimizado.",
      "Habilitando `spark.conf.set(\"spark.sql.adaptive.skewJoin.enabled\", \"true\")` e `spark.conf.set(\"spark.sql.adaptive.skewJoin.skewedPartitionFactor\", \"5\")` para que o AQE detecte e divida automaticamente partições com skew, combinado com salt key para distribuir valores concentrados.",
      "Configurando `spark.conf.set(\"spark.sql.shuffle.partitions\", \"10000\")` para criar partições suficientemente pequenas que diluam automaticamente o efeito do skew entre mais executores."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Habilitando `spark.conf.set(\"spark.sql.adaptive.skewJoin.enabled\", \"true\")` e `spark.conf.set(\"spark.sql.adaptive.skewJoin.skewedPartitionFactor\", \"5\")` para que o AQE detecte e divida automaticamente partições com skew, combinado com salt key para distribuir valores concentrados.",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "Habilitando `spark.conf.set(\"spark.sql.adaptive.skewJoin.enabled\", \"true\")` e `spark.conf.set(\"spark.sql.adaptive.skewJoin.skewedPartitionFactor\", \"5\")` para que o AQE detecte e divida automaticamente partições com skew, combinado com salt key para distribuir valores concentrados. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Usando `df.hint(\"skew\", \"coluna_chave\")` que instrui o Catalyst optimizer a ignorar o skew e usar Full Outer Join para garantir que todos os registros sejam processados uniformemente.: Esta opção contém erro técnico ou implementação não recomendada",
        "Reparticionando o DataFrame pela coluna de join com `df.repartition(1000, \"coluna_chave\")` antes do join, garantindo que valores repetidos fiquem na mesma partição para processamento otimizado.: Esta opção contém erro técnico ou implementação não recomendada",
        "Configurando `spark.conf.set(\"spark.sql.shuffle.partitions\", \"10000\")` para criar partições suficientemente pequenas que diluam automaticamente o efeito do skew entre mais executores.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q143",
    "text": "O que é um Tumbling Window Trigger em Data Pipelines do Fabric e quando ele é usado em engenharia de dados?",
    "options": [
      "Um trigger que monitora janelas de arquivos no OneLake e dispara o pipeline quando o tamanho total dos arquivos na pasta excede um threshold configurável em MB.",
      "Um trigger que executa o pipeline repetidamente dentro de uma janela de tempo configurada, parando automaticamente quando todos os dados da janela foram processados.",
      "Um trigger baseado em eventos de streaming que agrupa eventos em janelas temporais de tamanho fixo antes de disparar o pipeline de processamento batch.",
      "Um trigger que divide o tempo em janelas não sobrepostas de tamanho fixo, garantindo que cada janela seja processada exatamente uma vez mesmo em caso de reexecução; ideal para processamento de dados históricos (backfill) e cargas que devem cobrir períodos específicos sem gaps ou overlaps."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Um trigger que divide o tempo em janelas não sobrepostas de tamanho fixo, garantindo que cada janela seja processada exatamente uma vez mesmo em caso de reexecução; ideal para processamento de dados históricos (backfill) e cargas que devem cobrir períodos específicos sem gaps ou overlaps.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Data Pipeline é orquestração visual low-code de atividades (Copy, Lookup, ForEach, Execute Pipeline, Script). Suporta dependências, retries automáticos, notificações. Ideal para cópia de dados e orquestração sem programação. Notebooks são para transformação complexa com Spark (PySpark).",
      "puloDoGato": "Pipeline = visual, low-code. Notebook = programação Spark. Escolha conforme lógica necessária",
      "cascasDeBanana": [
        "Volume > 1TB: ambos lidam igualmente—volume não é diferenciador",
        "Agendamento < 15min: ambos suportam triggers de alta frequência",
        "PySpark: Pipelines podem chamar Notebooks, mas para lógica complexa use direto"
      ],
      "dicaOuro": "Copiar + orquestrar visualmente = Pipeline. Transformar com código = Notebook"
    }
  },
  {
    "id": "dp700_q144",
    "text": "Após configurar Workspace Logging no Fabric com destino a um Lakehouse, quais tabelas de log são geradas e como você analisa padrões de acesso a dados?",
    "options": [
      "Tabelas no formato do Azure Monitor Schema com colunas `TimeGenerated`, `Category`, `OperationName` e `Properties` (JSON); análise via Kusto queries no Eventhouse conectado ao Log Analytics Workspace.",
      "Arquivos JSON individuais por execução armazenados na seção Files do Lakehouse de destino; análise requer um Dataflow Gen2 para consolidar os arquivos em tabela estruturada antes da consulta.",
      "Uma única tabela `workspace_audit_log` com todas as operações consolidadas; análise via KQL no Eventhouse ao qual o workspace de logging está automaticamente conectado.",
      "Tabelas como `lakehouses`, `warehouses`, `notebooks`, `pipelines` com colunas de `OperationName`, `UserId`, `ItemId`, `Timestamp` e `Status`; análise via SQL Analytics Endpoint ou PySpark com queries de agrupamento por usuário, item e período para identificar padrões de acesso, operações mais frequentes e usuários mais ativos."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Tabelas como `lakehouses`, `warehouses`, `notebooks`, `pipelines` com colunas de `OperationName`, `UserId`, `ItemId`, `Timestamp` e `Status`; análise via SQL Analytics Endpoint ou PySpark com queries de agrupamento por usuário, item e período para identificar padrões de acesso, operações mais frequentes e usuários mais ativos.",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "Tabelas como `lakehouses`, `warehouses`, `notebooks`, `pipelines` com colunas de `OperationName`, `UserId`, `ItemId`, `Timestamp` e `Status`; análise via SQL Analytics Endpoint ou PySpark com queries de agrupamento por usuário, item e período para identificar padrões de acesso, operações mais frequentes e usuários mais ativos. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Tabelas no formato do Azure Monitor Schema com colunas `TimeGenerated`, `Category`, `OperationName` e `Properties` (JSON); análise via Kusto queries no Eventhouse conectado ao Log Analytics Workspace.: Esta opção contém erro técnico ou implementação não recomendada",
        "Arquivos JSON individuais por execução armazenados na seção Files do Lakehouse de destino; análise requer um Dataflow Gen2 para consolidar os arquivos em tabela estruturada antes da consulta.: Esta opção contém erro técnico ou implementação não recomendada",
        "Uma única tabela `workspace_audit_log` com todas as operações consolidadas; análise via KQL no Eventhouse ao qual o workspace de logging está automaticamente conectado.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q145",
    "text": "O Microsoft Fabric suporta Delta Live Tables (DLT) para pipelines declarativos de dados? Qual é a alternativa recomendada?",
    "options": [
      "Delta Live Tables está disponível no Fabric apenas em workspaces com capacity F128 ou superior, usando a atividade \"Lakehouse Pipeline\" com sintaxe DLT simplificada.",
      "Delta Live Tables foi integrado ao Fabric como \"Fabric Live Tables\" com sintaxe compatível com DLT do Databricks; habilitado via feature flag nas configurações do workspace.",
      "Sim, Delta Live Tables está disponível no Fabric via atividade \"DLT Pipeline\" nos Data Pipelines, usando a mesma sintaxe de decoradores Python `@dlt.table` do Databricks.",
      "Delta Live Tables é uma funcionalidade exclusiva do Azure Databricks e não está disponível no Microsoft Fabric; a alternativa são notebooks PySpark com Delta Lake para pipelines imperativos, ou Dataflow Gen2 para pipelines declarativos visuais com destinos Delta no Lakehouse."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Delta Live Tables é uma funcionalidade exclusiva do Azure Databricks e não está disponível no Microsoft Fabric; a alternativa são notebooks PySpark com Delta Lake para pipelines imperativos, ou Dataflow Gen2 para pipelines declarativos visuais com destinos Delta no Lakehouse.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Delta Live Tables é uma funcionalidade exclusiva do Azure Databricks e não está disponível no Microsoft Fabric; a alternativa são notebooks PySpark com Delta Lake para pipelines imperativos, ou Dataflow Gen2 para pipelines declarativos visuais com destinos Delta no Lakehouse. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Delta Live Tables está disponível no Fabric apenas em workspaces com capacity F128 ou superior, usando a atividade \"Lakehouse Pipeline\" com sintaxe DLT simplificada.: Esta opção contém erro técnico ou implementação não recomendada",
        "Delta Live Tables foi integrado ao Fabric como \"Fabric Live Tables\" com sintaxe compatível com DLT do Databricks; habilitado via feature flag nas configurações do workspace.: Esta opção contém erro técnico ou implementação não recomendada",
        "Sim, Delta Live Tables está disponível no Fabric via atividade \"DLT Pipeline\" nos Data Pipelines, usando a mesma sintaxe de decoradores Python `@dlt.table` do Databricks.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q146",
    "text": "Queries no SQL Analytics Endpoint de um Lakehouse com 50 tabelas Delta estão lentas. Quais fatores podem causar isso e como otimizar?",
    "options": [
      "Causas: muitos arquivos pequenos (executar OPTIMIZE nas tabelas problemáticas), falta de particionamento adequado, tabelas não registradas no metastore (verificar se as tabelas aparecem no endpoint), e queries sem pushdown de filtros; otimizar com OPTIMIZE/ZORDER nas colunas de filtro mais usadas.",
      "Habilitar o modo \"Performance Mode\" do SQL Analytics Endpoint nas configurações do Lakehouse que usa cache em memória para as queries mais frequentes automaticamente.",
      "O SQL Analytics Endpoint tem limite de 50 tabelas simultâneas; mover tabelas excedentes para um Warehouse dedicado para recuperar o desempenho.",
      "Criar índices columnstore no SQL Analytics Endpoint com `CREATE COLUMNSTORE INDEX` nas colunas mais consultadas para melhorar o desempenho das queries analíticas."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Causas: muitos arquivos pequenos (executar OPTIMIZE nas tabelas problemáticas), falta de particionamento adequado, tabelas não registradas no metastore (verificar se as tabelas aparecem no endpoint), e queries sem pushdown de filtros; otimizar com OPTIMIZE/ZORDER nas colunas de filtro mais usadas.",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "Causas: muitos arquivos pequenos (executar OPTIMIZE nas tabelas problemáticas), falta de particionamento adequado, tabelas não registradas no metastore (verificar se as tabelas aparecem no endpoint), e queries sem pushdown de filtros; otimizar com OPTIMIZE/ZORDER nas colunas de filtro mais usadas. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Habilitar o modo \"Performance Mode\" do SQL Analytics Endpoint nas configurações do Lakehouse que usa cache em memória para as queries mais frequentes automaticamente.: Esta opção contém erro técnico ou implementação não recomendada",
        "O SQL Analytics Endpoint tem limite de 50 tabelas simultâneas; mover tabelas excedentes para um Warehouse dedicado para recuperar o desempenho.: Esta opção contém erro técnico ou implementação não recomendada",
        "Criar índices columnstore no SQL Analytics Endpoint com `CREATE COLUMNSTORE INDEX` nas colunas mais consultadas para melhorar o desempenho das queries analíticas.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q147",
    "text": "Em um pipeline de ingestão do Fabric, novos campos são adicionados periodicamente ao schema da fonte JSON. Como você implementa schema evolution automática na tabela Delta de destino?",
    "options": [
      "Usando `spark.conf.set(\"spark.sql.schema.evolution\", \"auto\")` que habilita detecção automática de mudanças de schema em fontes JSON e atualiza o destino Delta sem intervenção.",
      "Configurando `spark.conf.set(\"spark.databricks.delta.schema.autoMerge.enabled\", \"true\")` na sessão Spark antes da escrita, ou usando `.option(\"mergeSchema\", \"true\")` no writer; novas colunas são adicionadas automaticamente e colunas removidas mantêm valor NULL nos registros anteriores.",
      "Criando um job de comparação de schema agendado que executa `ALTER TABLE ADD COLUMN` para cada nova coluna detectada antes da ingestão principal do dia.",
      "Usando o modo `overwriteSchema=true` em todas as escritas que automaticamente atualiza o schema sem adicionar novas colunas para registros históricos."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Configurando `spark.conf.set(\"spark.databricks.delta.schema.autoMerge.enabled\", \"true\")` na sessão Spark antes da escrita, ou usando `.option(\"mergeSchema\", \"true\")` no writer; novas colunas são adicionadas automaticamente e colunas removidas mantêm valor NULL nos registros anteriores.",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "Configurando `spark.conf.set(\"spark.databricks.delta.schema.autoMerge.enabled\", \"true\")` na sessão Spark antes da escrita, ou usando `.option(\"mergeSchema\", \"true\")` no writer; novas colunas são adicionadas automaticamente e colunas removidas mantêm valor NULL nos registros anteriores. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Usando `spark.conf.set(\"spark.sql.schema.evolution\", \"auto\")` que habilita detecção automática de mudanças de schema em fontes JSON e atualiza o destino Delta sem intervenção.: Esta opção contém erro técnico ou implementação não recomendada",
        "Criando um job de comparação de schema agendado que executa `ALTER TABLE ADD COLUMN` para cada nova coluna detectada antes da ingestão principal do dia.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando o modo `overwriteSchema=true` em todas as escritas que automaticamente atualiza o schema sem adicionar novas colunas para registros históricos.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q148",
    "text": "Como você monitora a latência de ponta a ponta (end-to-end) de um pipeline de Real-Time Intelligence no Fabric, desde a chegada do evento até a disponibilidade no dashboard?",
    "options": [
      "Comparando o timestamp do evento na fonte (ingestion_time do Event Hub) com o timestamp de disponibilidade no KQL Database usando `.show table NomeTabela ingestion statistics`, e monitorando o atraso de refresh do Real-Time Dashboard via métricas de query.",
      "Acessando o painel \"Latency Metrics\" do Eventstream que exibe automaticamente a latência end-to-end desde a fonte até cada destino configurado em tempo real.",
      "Usando o Azure Monitor com métricas de latência do Event Hub e do Eventhouse que são automaticamente correlacionadas no Log Analytics para calcular a latência end-to-end.",
      "Inserindo timestamps personalizados em cada estágio do pipeline via atividade Script e consultando a diferença no Monitor Hub do Fabric para cálculo de latência."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Comparando o timestamp do evento na fonte (ingestion_time do Event Hub) com o timestamp de disponibilidade no KQL Database usando `.show table NomeTabela ingestion statistics`, e monitorando o atraso de refresh do Real-Time Dashboard via métricas de query.",
      "intro": "Entendendo Fabric workspace e gerenciamento de recursos",
      "papoReto": "Comparando o timestamp do evento na fonte (ingestion_time do Event Hub) com o timestamp de disponibilidade no KQL Database usando `.show table NomeTabela ingestion statistics`, e monitorando o atraso de refresh do Real-Time Dashboard via métricas de query. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Acessando o painel \"Latency Metrics\" do Eventstream que exibe automaticamente a latência end-to-end desde a fonte até cada destino configurado em tempo real.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando o Azure Monitor com métricas de latência do Event Hub e do Eventhouse que são automaticamente correlacionadas no Log Analytics para calcular a latência end-to-end.: Esta opção contém erro técnico ou implementação não recomendada",
        "Inserindo timestamps personalizados em cada estágio do pipeline via atividade Script e consultando a diferença no Monitor Hub do Fabric para cálculo de latência.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q149",
    "text": "Como você implementa uma carga incremental no Warehouse do Fabric usando a tabela de destino como controle do último estado carregado?",
    "options": [
      "`MERGE INTO dbo.tabela_destino USING dbo.tabela_staging ON (1=1) WHEN NOT MATCHED THEN INSERT *`",
      "`DECLARE @ultimo_id INT = (SELECT ISNULL(MAX(id_origem), 0) FROM dbo.tabela_destino); INSERT INTO dbo.tabela_destino SELECT * FROM dbo.tabela_staging WHERE id > @ultimo_id;`",
      "`INSERT INTO dbo.tabela_destino SELECT * FROM dbo.tabela_staging EXCEPT SELECT * FROM dbo.tabela_destino`",
      "`INSERT INTO dbo.tabela_destino SELECT * FROM dbo.tabela_staging WHERE NOT EXISTS (SELECT 1 FROM dbo.tabela_destino d WHERE d.id = s.id)`"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`DECLARE @ultimo_id INT = (SELECT ISNULL(MAX(id_origem), 0) FROM dbo.tabela_destino); INSERT INTO dbo.tabela_destino SELECT * FROM dbo.tabela_staging WHERE id > @ultimo_id;`",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "Carga incremental usa watermark (timestamp, ID sequencial, CDC) para identificar registros novos/modificados desde última execução. Lookup recupera último watermark → Copy filtra com watermark → Procedure atualiza watermark. Apenas novos dados são processados.",
      "puloDoGato": "Watermark = identifica último processado. Lookup→Filter→Update = padrão incremental",
      "cascasDeBanana": [
        "Delta Load activity: não existe—use Lookup + Filter conforme padrão",
        "Incremental Load na Copy: Copy Data não detecta automaticamente—configure watermark manualmente",
        "CDC automático: CDC existe mas requer CDC enable na fonte; watermark é mais flexível"
      ],
      "dicaOuro": "Incremental não reprocessa histórico—usa watermark para marcar progresso"
    }
  },
  {
    "id": "dp700_q150",
    "text": "Um engenheiro de dados precisa recomendar o SKU de capacity Fabric adequado para uma equipe com 10 engenheiros executando notebooks diariamente, 5 pipelines de ingestão a cada hora e refresh de 3 modelos semânticos a cada 30 minutos. Como você aborda essa decisão?\n## LOTE 4 — Questões 151 a 200 | DP-700",
    "options": [
      "Iniciar com o SKU F2 e escalar automaticamente conforme a demanda, pois o Fabric suporta auto-scaling dinâmico sem downtime entre SKUs adjacentes.",
      "Calcular o número total de usuários e multiplicar por 4 CUs por usuário, acrescentando 2 CUs por pipeline e 1 CU por modelo semântico para obter o total de CUs necessários.",
      "Selecionar o SKU F64 como padrão para qualquer equipe acima de 5 usuários, pois é o SKU mínimo recomendado pela Microsoft para uso corporativo com SLA garantido.",
      "Analisar o consumo de CUs de cada workload via Capacity Metrics App em um ambiente de teste, calcular o pico de consumo simultâneo, verificar o smoothing disponível para operações em background, e selecionar o SKU com folga de 20-30% acima do pico calculado para absorver variações sem throttling."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Analisar o consumo de CUs de cada workload via Capacity Metrics App em um ambiente de teste, calcular o pico de consumo simultâneo, verificar o smoothing disponível para operações em background, e selecionar o SKU com folga de 20-30% acima do pico calculado para absorver variações sem throttling.",
      "intro": "Entendendo Fabric workspace e gerenciamento de recursos",
      "papoReto": "Analisar o consumo de CUs de cada workload via Capacity Metrics App em um ambiente de teste, calcular o pico de consumo simultâneo, verificar o smoothing disponível para operações em background, e selecionar o SKU com folga de 20-30% acima do pico calculado para absorver variações sem throttling. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Iniciar com o SKU F2 e escalar automaticamente conforme a demanda, pois o Fabric suporta auto-scaling dinâmico sem downtime entre SKUs adjacentes.: Esta opção contém erro técnico ou implementação não recomendada",
        "Calcular o número total de usuários e multiplicar por 4 CUs por usuário, acrescentando 2 CUs por pipeline e 1 CU por modelo semântico para obter o total de CUs necessários.: Esta opção contém erro técnico ou implementação não recomendada",
        "Selecionar o SKU F64 como padrão para qualquer equipe acima de 5 usuários, pois é o SKU mínimo recomendado pela Microsoft para uso corporativo com SLA garantido.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q151",
    "text": "Em Structured Streaming no Fabric, o que acontece se o diretório de checkpoint for excluído acidentalmente durante a execução?",
    "options": [
      "O stream entra em modo de pausa automática e aguarda que o checkpoint seja restaurado de um backup automático mantido pelo OneLake por 7 dias.",
      "O stream continua processando normalmente usando o offset em memória do driver Spark, sem impacto funcional na entrega de dados ao destino Delta.",
      "O stream perde o estado de progresso e offset da fonte; ao reiniciar sem checkpoint, o stream reprocessa os dados a partir do início (ou do offset padrão da fonte), podendo causar duplicações no destino Delta; é necessário implementar idempotência via MERGE ou deduplicação para mitigar.",
      "O Fabric detecta automaticamente a ausência do checkpoint e recria o diretório a partir do último estado salvo no transaction log Delta da tabela de destino."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "O stream perde o estado de progresso e offset da fonte; ao reiniciar sem checkpoint, o stream reprocessa os dados a partir do início (ou do offset padrão da fonte), podendo causar duplicações no destino Delta; é necessário implementar idempotência via MERGE ou deduplicação para mitigar.",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "Para dados de streaming/IoT em alta velocidade: Eventstream captura eventos (IoT Hub, Event Hubs) → Eventhouse processa tempo real com KQL → Lakehouse persistencia via Structured Streaming/Eventstream destination.",
      "puloDoGato": "Eventstream → Eventhouse (tempo real KQL) → Lakehouse (persistencia Delta)",
      "cascasDeBanana": [
        "Stream Analytics via Shortcut: Shortcuts são read-only, não processam streams",
        "Dataflow Gen2 streaming: Dataflows é low-code, não nativo para high-speed IoT",
        "Data Pipeline de 1min: Pipelines batched em 1 minuto não é ideal para IoT contínuo"
      ],
      "dicaOuro": "Real-time streaming = Eventstream + Eventhouse. Persistencia = Delta em Lakehouse"
    }
  },
  {
    "id": "dp700_q152",
    "text": "Um Data Pipeline falha com \"Activity timeout reached\" em uma atividade Copy Data que copia dados de uma API REST lenta. Como você resolve sem aumentar o timeout global?",
    "options": [
      "Configurando um proxy Azure API Management na frente da API REST que implementa cache e retorna respostas mais rápidas para o pipeline do Fabric.",
      "Aumentando a propriedade \"Request timeout\" do conector REST para 24 horas, que é o máximo suportado pelo Fabric para conexões com APIs externas lentas.",
      "Substituindo a atividade Copy Data por uma atividade Web que usa streaming HTTP para receber os dados sem timeout fixo, salvando diretamente no Lakehouse.",
      "Implementando paginação na atividade Copy Data para dividir a extração em múltiplas chamadas menores, cada uma dentro do timeout; usando ForEach para paralelizar as chamadas paginadas; ou pré-extraindo os dados para staging via Notebook com `requests` e depois copiando do staging para o destino."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Implementando paginação na atividade Copy Data para dividir a extração em múltiplas chamadas menores, cada uma dentro do timeout; usando ForEach para paralelizar as chamadas paginadas; ou pré-extraindo os dados para staging via Notebook com `requests` e depois copiando do staging para o destino.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Data Pipeline é orquestração visual low-code de atividades (Copy, Lookup, ForEach, Execute Pipeline, Script). Suporta dependências, retries automáticos, notificações. Ideal para cópia de dados e orquestração sem programação. Notebooks são para transformação complexa com Spark (PySpark).",
      "puloDoGato": "Pipeline = visual, low-code. Notebook = programação Spark. Escolha conforme lógica necessária",
      "cascasDeBanana": [
        "Volume > 1TB: ambos lidam igualmente—volume não é diferenciador",
        "Agendamento < 15min: ambos suportam triggers de alta frequência",
        "PySpark: Pipelines podem chamar Notebooks, mas para lógica complexa use direto"
      ],
      "dicaOuro": "Copiar + orquestrar visualmente = Pipeline. Transformar com código = Notebook"
    }
  },
  {
    "id": "dp700_q153",
    "text": "O Fabric Warehouse suporta particionamento de tabelas nativamente via T-SQL? Qual é a estratégia recomendada para gerenciar grandes volumes de dados históricos?",
    "options": [
      "Sim, via `ALTER TABLE tabela ADD PARTITION (ano=2024)` que cria partições dinâmicas gerenciadas automaticamente pelo motor de armazenamento colunar do Warehouse.",
      "Particionamento é automático no Fabric Warehouse baseado na distribuição de dados detectada pelo otimizador; engenheiros não precisam configurar partições manualmente.",
      "O Fabric Warehouse não suporta particionamento nativo de tabelas via `CREATE PARTITION FUNCTION/SCHEME`; a estratégia recomendada é usar tabelas separadas por período (ex: `vendas_2024`, `vendas_2025`) com views unificadoras, ou usar o Lakehouse com Delta particionado e acessar via SQL Analytics Endpoint.",
      "Sim, suporta particionamento com `CREATE TABLE tabela PARTITION BY RANGE (data_coluna) (PARTITION p2024 VALUES LESS THAN ('2025-01-01'))` igual ao Azure Synapse Analytics."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "O Fabric Warehouse não suporta particionamento nativo de tabelas via `CREATE PARTITION FUNCTION/SCHEME`; a estratégia recomendada é usar tabelas separadas por período (ex: `vendas_2024`, `vendas_2025`) com views unificadoras, ou usar o Lakehouse com Delta particionado e acessar via SQL Analytics Endpoint.",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "O Fabric Warehouse não suporta particionamento nativo de tabelas via `CREATE PARTITION FUNCTION/SCHEME`; a estratégia recomendada é usar tabelas separadas por período (ex: `vendas_2024`, `vendas_2025`) com views unificadoras, ou usar o Lakehouse com Delta particionado e acessar via SQL Analytics Endpoint. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Sim, via `ALTER TABLE tabela ADD PARTITION (ano=2024)` que cria partições dinâmicas gerenciadas automaticamente pelo motor de armazenamento colunar do Warehouse.: Esta opção contém erro técnico ou implementação não recomendada",
        "Particionamento é automático no Fabric Warehouse baseado na distribuição de dados detectada pelo otimizador; engenheiros não precisam configurar partições manualmente.: Esta opção contém erro técnico ou implementação não recomendada",
        "Sim, suporta particionamento com `CREATE TABLE tabela PARTITION BY RANGE (data_coluna) (PARTITION p2024 VALUES LESS THAN ('2025-01-01'))` igual ao Azure Synapse Analytics.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q154",
    "text": "Um engenheiro recebe reclamações de lentidão em queries no SQL Analytics Endpoint de um Lakehouse. Qual é a sequência correta de diagnóstico e otimização?",
    "options": [
      "1) Migrar todas as tabelas para o Warehouse que tem motor SQL dedicado; 2) Criar índices columnstore em todas as colunas; 3) Habilitar cache de resultados de queries nas configurações do Lakehouse.",
      "1) Converter tabelas Delta para formato Parquet puro removendo o transaction log; 2) Criar views materializadas no SQL endpoint; 3) Aumentar o número de partições Spark para 2000.",
      "1) Verificar fragmentação com `DESCRIBE DETAIL tabela` e executar `OPTIMIZE` nas tabelas problemáticas; 2) Aplicar `ZORDER BY` nas colunas de filtro mais usadas; 3) Verificar particionamento adequado; 4) Executar `VACUUM` para remover arquivos obsoletos; 5) Analisar as queries no Query Insights para identificar padrões de acesso.",
      "1) Aumentar a capacity Fabric para SKU superior; 2) Recriar todas as tabelas Delta com `DROP TABLE / CREATE TABLE AS SELECT`; 3) Desabilitar o SQL Analytics Endpoint e usar apenas PySpark para consultas analíticas."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "1) Verificar fragmentação com `DESCRIBE DETAIL tabela` e executar `OPTIMIZE` nas tabelas problemáticas; 2) Aplicar `ZORDER BY` nas colunas de filtro mais usadas; 3) Verificar particionamento adequado; 4) Executar `VACUUM` para remover arquivos obsoletos; 5) Analisar as queries no Query Insights para identificar padrões de acesso.",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "1) Verificar fragmentação com `DESCRIBE DETAIL tabela` e executar `OPTIMIZE` nas tabelas problemáticas; 2) Aplicar `ZORDER BY` nas colunas de filtro mais usadas; 3) Verificar particionamento adequado; 4) Executar `VACUUM` para remover arquivos obsoletos; 5) Analisar as queries no Query Insights para identificar padrões de acesso. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "1) Migrar todas as tabelas para o Warehouse que tem motor SQL dedicado; 2) Criar índices columnstore em todas as colunas; 3) Habilitar cache de resultados de queries nas configurações do Lakehouse.: Esta opção contém erro técnico ou implementação não recomendada",
        "1) Converter tabelas Delta para formato Parquet puro removendo o transaction log; 2) Criar views materializadas no SQL endpoint; 3) Aumentar o número de partições Spark para 2000.: Esta opção contém erro técnico ou implementação não recomendada",
        "1) Aumentar a capacity Fabric para SKU superior; 2) Recriar todas as tabelas Delta com `DROP TABLE / CREATE TABLE AS SELECT`; 3) Desabilitar o SQL Analytics Endpoint e usar apenas PySpark para consultas analíticas.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q155",
    "text": "Em um Notebook Fabric, como você converte um DataFrame PySpark para pandas para usar uma biblioteca de ML que não suporta Spark, e quais são os riscos dessa abordagem?",
    "options": [
      "Não há risco na conversão; o Fabric gerencia automaticamente a memória do driver durante `toPandas()` usando paginação transparente para evitar OutOfMemoryError.",
      "`df_pandas = pandas_api.DataFrame(df)` usando a Pandas API on Spark que mantém a execução distribuída sem coletar dados no driver, eliminando o risco de memória.",
      "`df_pandas = df.collect().toDataFrame()`",
      "`df_pandas = df.toPandas()`"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`df_pandas = df.toPandas()`",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "`df_pandas = df.toPandas()` é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Não há risco na conversão; o Fabric gerencia automaticamente a memória do driver durante `toPandas()` usando paginação transparente para evitar OutOfMemoryError.: Esta opção contém erro técnico ou implementação não recomendada",
        "`df_pandas = pandas_api.DataFrame(df)` usando a Pandas API on Spark que mantém a execução distribuída sem coletar dados no driver, eliminando o risco de memória.: Esta opção contém erro técnico ou implementação não recomendada",
        "`df_pandas = df.collect().toDataFrame()`: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q156",
    "text": "No Monitor Hub do Fabric, ao investigar uma execução de pipeline com falha, quais informações de diagnóstico estão disponíveis no drill-down de uma atividade com erro?",
    "options": [
      "Input e output de cada atividade são ocultados por padrão por segurança; é necessário habilitar \"Activity logging\" nas configurações avançadas do workspace para ver esses detalhes.",
      "Apenas métricas de performance (duração, linhas processadas, bytes transferidos); informações de erro requerem habilitação prévia de \"Diagnostic logging\" nas configurações do pipeline.",
      "Apenas status e mensagem de erro resumida; detalhes completos de stack trace requerem acesso ao Azure Monitor Log Analytics configurado para o workspace.",
      "Nome da atividade, tipo, status, horário de início/fim, duração, mensagem de erro detalhada com stack trace, input e output da atividade (incluindo parâmetros utilizados), e link para os logs do Spark se a atividade envolver processamento Spark."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Nome da atividade, tipo, status, horário de início/fim, duração, mensagem de erro detalhada com stack trace, input e output da atividade (incluindo parâmetros utilizados), e link para os logs do Spark se a atividade envolver processamento Spark.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Nome da atividade, tipo, status, horário de início/fim, duração, mensagem de erro detalhada com stack trace, input e output da atividade (incluindo parâmetros utilizados), e link para os logs do Spark se a atividade envolver processamento Spark. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Input e output de cada atividade são ocultados por padrão por segurança; é necessário habilitar \"Activity logging\" nas configurações avançadas do workspace para ver esses detalhes.: Esta opção contém erro técnico ou implementação não recomendada",
        "Apenas métricas de performance (duração, linhas processadas, bytes transferidos); informações de erro requerem habilitação prévia de \"Diagnostic logging\" nas configurações do pipeline.: Esta opção contém erro técnico ou implementação não recomendada",
        "Apenas status e mensagem de erro resumida; detalhes completos de stack trace requerem acesso ao Azure Monitor Log Analytics configurado para o workspace.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q157",
    "text": "No Fabric, como você executa uma query que combina dados de um Warehouse e de um Lakehouse no mesmo workspace usando T-SQL?",
    "options": [
      "Criando um Linked Server no Warehouse apontando para o SQL Analytics Endpoint do Lakehouse e usando `OPENQUERY(linked_server, 'SELECT...')` para acessar as tabelas do Lakehouse.",
      "Cross-database queries entre Warehouse e Lakehouse não são suportadas; é necessário criar um Shortcut do Lakehouse dentro do Warehouse para acessar os dados via T-SQL.",
      "Exportando os dados do Lakehouse para um arquivo Parquet no OneLake e usando `OPENROWSET` no Warehouse para ler o arquivo Parquet como tabela externa temporária.",
      "Usando notação de três partes `[nome_lakehouse].[dbo].[nome_tabela]` diretamente na query do Warehouse"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Usando notação de três partes `[nome_lakehouse].[dbo].[nome_tabela]` diretamente na query do Warehouse",
      "intro": "Entendendo Shortcuts como virtual links vs. Mirror para cópias reais",
      "papoReto": "Usando notação de três partes `[nome_lakehouse].[dbo].[nome_tabela]` diretamente na query do Warehouse é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Criando um Linked Server no Warehouse apontando para o SQL Analytics Endpoint do Lakehouse e usando `OPENQUERY(linked_server, 'SELECT...')` para acessar as tabelas do Lakehouse.: Esta opção contém erro técnico ou implementação não recomendada",
        "Cross-database queries entre Warehouse e Lakehouse não são suportadas; é necessário criar um Shortcut do Lakehouse dentro do Warehouse para acessar os dados via T-SQL.: Esta opção contém erro técnico ou implementação não recomendada",
        "Exportando os dados do Lakehouse para um arquivo Parquet no OneLake e usando `OPENROWSET` no Warehouse para ler o arquivo Parquet como tabela externa temporária.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q158",
    "text": "Como você otimiza o throughput de processamento de um Eventstream do Fabric que está processando 100.000 eventos por segundo com latência crescente?",
    "options": [
      "Aumentar o buffer do Eventstream com `eventstream.conf.set(\"buffer.size\", \"10GB\")` para absorver os picos de volume sem impactar a latência de processamento.",
      "Verificar se o processador do Eventstream está com recursos suficientes de capacity, simplificar as transformações aplicadas no canvas (remover operações desnecessárias), aumentar o paralelismo do destino (ex: múltiplas partições no Eventhouse), e considerar dividir o Eventstream em múltiplos streams paralelos por partição da fonte.",
      "Habilitar o modo \"High Throughput\" do Eventstream nas configurações avançadas que automaticamente escala os recursos de processamento baseado no volume detectado.",
      "Substituir o Eventstream por um notebook PySpark com Structured Streaming que tem melhor throughput para volumes acima de 50.000 eventos por segundo."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Verificar se o processador do Eventstream está com recursos suficientes de capacity, simplificar as transformações aplicadas no canvas (remover operações desnecessárias), aumentar o paralelismo do destino (ex: múltiplas partições no Eventhouse), e considerar dividir o Eventstream em múltiplos streams paralelos por partição da fonte.",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "Verificar se o processador do Eventstream está com recursos suficientes de capacity, simplificar as transformações aplicadas no canvas (remover operações desnecessárias), aumentar o paralelismo do destino (ex: múltiplas partições no Eventhouse), e considerar dividir o Eventstream em múltiplos streams paralelos por partição da fonte. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Aumentar o buffer do Eventstream com `eventstream.conf.set(\"buffer.size\", \"10GB\")` para absorver os picos de volume sem impactar a latência de processamento.: Esta opção contém erro técnico ou implementação não recomendada",
        "Habilitar o modo \"High Throughput\" do Eventstream nas configurações avançadas que automaticamente escala os recursos de processamento baseado no volume detectado.: Esta opção contém erro técnico ou implementação não recomendada",
        "Substituir o Eventstream por um notebook PySpark com Structured Streaming que tem melhor throughput para volumes acima de 50.000 eventos por segundo.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q159",
    "text": "Em um Notebook Fabric preparando dados para machine learning, como você implementa one-hot encoding de uma coluna categórica usando PySpark?",
    "options": [
      "`pd.get_dummies(df[\"categoria\"])`",
      "`spark.ml.transform.OneHot(df, col=\"categoria\", output=\"categoria_ohe\")`",
      "`df.withColumn(\"categoria_ohe\", explode(array([when(col(\"categoria\")==v, 1).otherwise(0) for v in categorias])))`",
      "`from pyspark.ml.feature import StringIndexer, OneHotEncoder; indexer = StringIndexer(inputCol=\"categoria\", outputCol=\"categoria_idx\"); encoder = OneHotEncoder(inputCol=\"categoria_idx\", outputCol=\"categoria_ohe\"); Pipeline(stages=[indexer, encoder]).fit(df).transform(df)`"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`from pyspark.ml.feature import StringIndexer, OneHotEncoder; indexer = StringIndexer(inputCol=\"categoria\", outputCol=\"categoria_idx\"); encoder = OneHotEncoder(inputCol=\"categoria_idx\", outputCol=\"categoria_ohe\"); Pipeline(stages=[indexer, encoder]).fit(df).transform(df)`",
      "intro": "Entendendo Deployment Pipelines e transformação de parâmetros",
      "papoReto": "`from pyspark.ml.feature import StringIndexer, OneHotEncoder; indexer = StringIndexer(inputCol=\"categoria\", outputCol=\"categoria_idx\"); encoder = OneHotEncoder(inputCol=\"categoria_idx\", outputCol=\"categoria_ohe\"); Pipeline(stages=[indexer, encoder]).fit(df).transform(df)` é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "`pd.get_dummies(df[\"categoria\"])`: Esta opção contém erro técnico ou implementação não recomendada",
        "`spark.ml.transform.OneHot(df, col=\"categoria\", output=\"categoria_ohe\")`: Esta opção contém erro técnico ou implementação não recomendada",
        "`df.withColumn(\"categoria_ohe\", explode(array([when(col(\"categoria\")==v, 1).otherwise(0) for v in categorias])))`: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q160",
    "text": "Em um KQL Database do Fabric, você tenta ingerir um arquivo CSV mas recebe erro de incompatibilidade de schema. Como você resolve sem modificar os dados originais?",
    "options": [
      "Usando `.ingest into table NomeTabela (...) with (format='csv', ignoreSchema=true)` que ignora incompatibilidades e ingere os dados no tipo de dado padrão string para todas as colunas.",
      "Convertendo o CSV para formato JSON antes da ingestão usando um notebook Python, pois o formato JSON é mais flexível com schema no KQL Database do Fabric.",
      "Usando `.ingest into table NomeTabela (...) with (format='csv', ingestionMappingReference='mapeamento_csv')` com um mapeamento de ingestão criado via `.create ingestion mapping` que define como colunas do CSV mapeiam para colunas da tabela, resolvendo incompatibilidades de nome e tipo.",
      "Recriando a tabela KQL com o schema exato do arquivo CSV usando `.drop table` e `.create table` com as colunas do CSV, adaptando o schema da tabela à fonte."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Usando `.ingest into table NomeTabela (...) with (format='csv', ingestionMappingReference='mapeamento_csv')` com um mapeamento de ingestão criado via `.create ingestion mapping` que define como colunas do CSV mapeiam para colunas da tabela, resolvendo incompatibilidades de nome e tipo.",
      "intro": "Entendendo Fabric workspace e gerenciamento de recursos",
      "papoReto": "Usando `.ingest into table NomeTabela (...) with (format='csv', ingestionMappingReference='mapeamento_csv')` com um mapeamento de ingestão criado via `.create ingestion mapping` que define como colunas do CSV mapeiam para colunas da tabela, resolvendo incompatibilidades de nome e tipo. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Usando `.ingest into table NomeTabela (...) with (format='csv', ignoreSchema=true)` que ignora incompatibilidades e ingere os dados no tipo de dado padrão string para todas as colunas.: Esta opção contém erro técnico ou implementação não recomendada",
        "Convertendo o CSV para formato JSON antes da ingestão usando um notebook Python, pois o formato JSON é mais flexível com schema no KQL Database do Fabric.: Esta opção contém erro técnico ou implementação não recomendada",
        "Recriando a tabela KQL com o schema exato do arquivo CSV usando `.drop table` e `.create table` com as colunas do CSV, adaptando o schema da tabela à fonte.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q161",
    "text": "Como você automatiza o pipeline completo de uma arquitetura Medallion (Bronze→Silver→Gold) no Fabric garantindo que falhas em qualquer camada não corrompam dados das camadas subsequentes?",
    "options": [
      "Usando um único notebook que processa as três camadas em sequência com `df.cache()` entre cada transformação, garantindo que dados parcialmente processados não sejam persistidos em caso de falha.",
      "Habilitando o modo \"Transactional Pipeline\" nas configurações avançadas do Data Pipeline que garante atomicidade entre todas as atividades, revertendo automaticamente camadas já processadas em caso de falha.",
      "Usando um Data Pipeline orquestrador com atividades Notebook em sequência (Bronze→Silver→Gold), conectadas por paths \"On Success\"; cada notebook usa transações Delta (escrita atômica) e implementa validação de qualidade antes de confirmar a escrita; em caso de falha, a camada atual não é atualizada e a camada seguinte não é executada.",
      "Usando três pipelines independentes com Schedule Triggers em cascata (Bronze às 01:00, Silver às 02:00, Gold às 03:00), confiando no tempo de execução para garantir a sequência sem dependência explícita."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Usando um Data Pipeline orquestrador com atividades Notebook em sequência (Bronze→Silver→Gold), conectadas por paths \"On Success\"; cada notebook usa transações Delta (escrita atômica) e implementa validação de qualidade antes de confirmar a escrita; em caso de falha, a camada atual não é atualizada e a camada seguinte não é executada.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Medallion (Bronze → Silver → Gold): Bronze = dados brutos, Silver = limpos/padronizados, Gold = dimensional otimizado. Em cada camada use transformações apropriadas: Bronze (parsing), Silver (SCD, surrogate keys), Gold (fatos/dimensões).",
      "puloDoGato": "Bronze = raw. Silver = cleaned + SCD. Gold = fact+dim optimized. Camada = transformação",
      "cascasDeBanana": [
        "Modelo dimensional em Bronze: transformação antecipada desperdiça; Silver é para limpeza, Gold para dimensional",
        "Dados direto em Gold: sem validação—Silver é camada crítica de qualidade",
        "Desnormalizado em Fato: star schema exige dimensões separadas, não atributos na fato"
      ],
      "dicaOuro": "Cada camada é transformação incremental: raw→clean→dimensional"
    }
  },
  {
    "id": "dp700_q162",
    "text": "O que é Query Pushdown no contexto do SQL Analytics Endpoint do Lakehouse e como ele melhora o desempenho?",
    "options": [
      "Query Pushdown é um mecanismo que cacheia resultados de queries frequentes no buffer pool do SQL Analytics Endpoint para servir respostas sem reprocessar os arquivos Delta.",
      "Query Pushdown envia a query SQL do usuário diretamente para a fonte de dados original (ex: Azure SQL Database) via Shortcut, sem processar dados no Lakehouse, reduzindo a latência para fontes externas.",
      "Query Pushdown transfere o processamento de predicados de filtro, projeções de coluna e agregações diretamente para o motor de leitura dos arquivos Delta Parquet (usando column pruning e predicate pushdown), evitando que dados desnecessários sejam carregados em memória antes da filtragem.",
      "Query Pushdown divide automaticamente queries complexas em sub-queries que são executadas em paralelo por múltiplos executores Spark, aumentando o throughput de processamento."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Query Pushdown transfere o processamento de predicados de filtro, projeções de coluna e agregações diretamente para o motor de leitura dos arquivos Delta Parquet (usando column pruning e predicate pushdown), evitando que dados desnecessários sejam carregados em memória antes da filtragem.",
      "intro": "Entendendo Shortcuts como virtual links vs. Mirror para cópias reais",
      "papoReto": "Query Pushdown transfere o processamento de predicados de filtro, projeções de coluna e agregações diretamente para o motor de leitura dos arquivos Delta Parquet (usando column pruning e predicate pushdown), evitando que dados desnecessários sejam carregados em memória antes da filtragem. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Query Pushdown é um mecanismo que cacheia resultados de queries frequentes no buffer pool do SQL Analytics Endpoint para servir respostas sem reprocessar os arquivos Delta.: Esta opção contém erro técnico ou implementação não recomendada",
        "Query Pushdown envia a query SQL do usuário diretamente para a fonte de dados original (ex: Azure SQL Database) via Shortcut, sem processar dados no Lakehouse, reduzindo a latência para fontes externas.: Esta opção contém erro técnico ou implementação não recomendada",
        "Query Pushdown divide automaticamente queries complexas em sub-queries que são executadas em paralelo por múltiplos executores Spark, aumentando o throughput de processamento.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q163",
    "text": "Como você implementa validação de qualidade de dados em um Data Pipeline do Fabric antes de carregar dados em produção?",
    "options": [
      "Usando a atividade \"Data Quality\" disponível no Data Pipeline que aplica automaticamente regras de qualidade configuradas no Microsoft Purview Data Catalog.",
      "Usando uma atividade Notebook após a ingestão que executa checks de qualidade (contagem de registros, verificação de nulos, validação de ranges), retornando sucesso/falha via `mssparkutils.notebook.exit()`; atividade If Condition verifica o resultado e decide entre carregar em produção ou redirecionar para quarentena.",
      "Usando a atividade Lookup para contar registros na staging e comparar com a tabela de destino; se a diferença exceder 10%, o pipeline envia alerta e para automaticamente.",
      "Configurando \"Schema Validation\" na atividade Copy Data que verifica automaticamente se os dados de entrada correspondem ao schema da tabela de destino antes da carga."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Usando uma atividade Notebook após a ingestão que executa checks de qualidade (contagem de registros, verificação de nulos, validação de ranges), retornando sucesso/falha via `mssparkutils.notebook.exit()`; atividade If Condition verifica o resultado e decide entre carregar em produção ou redirecionar para quarentena.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Usando uma atividade Notebook após a ingestão que executa checks de qualidade (contagem de registros, verificação de nulos, validação de ranges), retornando sucesso/falha via `mssparkutils.notebook.exit()`; atividade If Condition verifica o resultado e decide entre carregar em produção ou redirecionar para quarentena. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Usando a atividade \"Data Quality\" disponível no Data Pipeline que aplica automaticamente regras de qualidade configuradas no Microsoft Purview Data Catalog.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando a atividade Lookup para contar registros na staging e comparar com a tabela de destino; se a diferença exceder 10%, o pipeline envia alerta e para automaticamente.: Esta opção contém erro técnico ou implementação não recomendada",
        "Configurando \"Schema Validation\" na atividade Copy Data que verifica automaticamente se os dados de entrada correspondem ao schema da tabela de destino antes da carga.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q164",
    "text": "Como você atribui e rastreia o custo de CUs por projeto ou equipe em uma capacity Fabric compartilhada por múltiplos times de engenharia de dados?",
    "options": [
      "Criando uma capacity Fabric separada por equipe para isolamento completo de custos; compartilhamento de capacity não permite rastreamento granular por projeto ou equipe.",
      "Usando tags de recurso Azure no portal Azure para marcar operações do Fabric por equipe, que são automaticamente associadas ao custo no Azure Cost Management.",
      "Habilitando \"Cost Allocation\" nas configurações avançadas de cada workspace que gera automaticamente relatórios de custo por item e usuário no Admin Portal do Fabric.",
      "Organizando workspaces por projeto/equipe e usando o Capacity Metrics App para filtrar o consumo por workspace, combinado com Domains para agrupamento lógico por área de negócio; exportando métricas para um Lakehouse centralizado para criação de relatórios de chargeback personalizados."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Organizando workspaces por projeto/equipe e usando o Capacity Metrics App para filtrar o consumo por workspace, combinado com Domains para agrupamento lógico por área de negócio; exportando métricas para um Lakehouse centralizado para criação de relatórios de chargeback personalizados.",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "Organizando workspaces por projeto/equipe e usando o Capacity Metrics App para filtrar o consumo por workspace, combinado com Domains para agrupamento lógico por área de negócio; exportando métricas para um Lakehouse centralizado para criação de relatórios de chargeback personalizados. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Criando uma capacity Fabric separada por equipe para isolamento completo de custos; compartilhamento de capacity não permite rastreamento granular por projeto ou equipe.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando tags de recurso Azure no portal Azure para marcar operações do Fabric por equipe, que são automaticamente associadas ao custo no Azure Cost Management.: Esta opção contém erro técnico ou implementação não recomendada",
        "Habilitando \"Cost Allocation\" nas configurações avançadas de cada workspace que gera automaticamente relatórios de custo por item e usuário no Admin Portal do Fabric.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q165",
    "text": "Como o MLflow é integrado ao Microsoft Fabric para rastreamento de experimentos de machine learning em notebooks?",
    "options": [
      "MLflow não está disponível nativamente no Fabric; requer instalação via `%pip install mlflow` e configuração de um servidor MLflow Tracking no Azure Container Instances.",
      "O Fabric usa o Azure Machine Learning como backend para MLflow; é necessário criar um Azure ML Workspace e conectá-lo ao workspace Fabric antes de usar `mlflow.log_metric()`.",
      "O Fabric inclui MLflow pré-instalado nos notebooks; usando `import mlflow; mlflow.set_experiment(\"nome_experimento\"); mlflow.start_run()` para registrar métricas, parâmetros e artefatos que são automaticamente armazenados no workspace Fabric sem configuração de servidor MLflow externo.",
      "MLflow no Fabric funciona apenas com modelos scikit-learn e PyTorch; modelos PySpark MLlib requerem o Synapse ML tracking server para registro de experimentos."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "O Fabric inclui MLflow pré-instalado nos notebooks; usando `import mlflow; mlflow.set_experiment(\"nome_experimento\"); mlflow.start_run()` para registrar métricas, parâmetros e artefatos que são automaticamente armazenados no workspace Fabric sem configuração de servidor MLflow externo.",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "O Fabric inclui MLflow pré-instalado nos notebooks; usando `import mlflow; mlflow.set_experiment(\"nome_experimento\"); mlflow.start_run()` para registrar métricas, parâmetros e artefatos que são automaticamente armazenados no workspace Fabric sem configuração de servidor MLflow externo. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "MLflow não está disponível nativamente no Fabric; requer instalação via `%pip install mlflow` e configuração de um servidor MLflow Tracking no Azure Container Instances.: Esta opção contém erro técnico ou implementação não recomendada",
        "O Fabric usa o Azure Machine Learning como backend para MLflow; é necessário criar um Azure ML Workspace e conectá-lo ao workspace Fabric antes de usar `mlflow.log_metric()`.: Esta opção contém erro técnico ou implementação não recomendada",
        "MLflow no Fabric funciona apenas com modelos scikit-learn e PyTorch; modelos PySpark MLlib requerem o Synapse ML tracking server para registro de experimentos.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q166",
    "text": "Um pipeline Fabric falha com `ConcurrentAppendException` ao tentar fazer append em uma tabela Delta que outro processo está escrevendo simultaneamente. Como você resolve?",
    "options": [
      "Usar `df.write.format(\"delta\").mode(\"overwrite\").option(\"txnAppId\", uuid).save()` com ID de transação único que resolve conflitos automaticamente via two-phase commit.",
      "Habilitar `SERIALIZABLE` isolation level na tabela Delta com `ALTER TABLE nome SET TBLPROPERTIES ('delta.isolationLevel' = 'Serializable')` que bloqueia escritas concorrentes e garante acesso exclusivo.",
      "O Delta Lake usa controle de concorrência otimista; configurar `spark.conf.set(\"spark.databricks.delta.retryWriteConflict.enabled\", \"true\")` para retry automático, ou redesenhar o pipeline para que escritas simultâneas ocorram em partições diferentes (evitando conflito), ou serializar as escritas usando orquestração sequencial no pipeline pai.",
      "Converter a tabela Delta para formato Parquet sem transaction log, eliminando o mecanismo de controle de concorrência que causa o conflito entre escritores paralelos."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "O Delta Lake usa controle de concorrência otimista; configurar `spark.conf.set(\"spark.databricks.delta.retryWriteConflict.enabled\", \"true\")` para retry automático, ou redesenhar o pipeline para que escritas simultâneas ocorram em partições diferentes (evitando conflito), ou serializar as escritas usando orquestração sequencial no pipeline pai.",
      "intro": "Entendendo Git integration e versionamento de artefatos",
      "papoReto": "O Delta Lake usa controle de concorrência otimista; configurar `spark.conf.set(\"spark.databricks.delta.retryWriteConflict.enabled\", \"true\")` para retry automático, ou redesenhar o pipeline para que escritas simultâneas ocorram em partições diferentes (evitando conflito), ou serializar as escritas usando orquestração sequencial no pipeline pai. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Usar `df.write.format(\"delta\").mode(\"overwrite\").option(\"txnAppId\", uuid).save()` com ID de transação único que resolve conflitos automaticamente via two-phase commit.: Esta opção contém erro técnico ou implementação não recomendada",
        "Habilitar `SERIALIZABLE` isolation level na tabela Delta com `ALTER TABLE nome SET TBLPROPERTIES ('delta.isolationLevel' = 'Serializable')` que bloqueia escritas concorrentes e garante acesso exclusivo.: Esta opção contém erro técnico ou implementação não recomendada",
        "Converter a tabela Delta para formato Parquet sem transaction log, eliminando o mecanismo de controle de concorrência que causa o conflito entre escritores paralelos.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q167",
    "text": "Em um Data Pipeline do Fabric, como você processa um arquivo JSON com estrutura aninhada (arrays de objetos) e carrega os dados achatados em uma tabela do Lakehouse?",
    "options": [
      "Usando a atividade Copy Data com o conector JSON configurado com \"Flatten hierarchy\" habilitado que automaticamente achata estruturas aninhadas até 5 níveis de profundidade.",
      "Usando um Notebook PySpark com `spark.read.option(\"multiLine\", \"true\").json(\"Files/dados.json\")` para ler o JSON, `explode()` para expandir arrays aninhados, `select()` com notação de ponto para achatar campos aninhados, e `write.format(\"delta\").save(\"Tables/destino\")` para persistir.",
      "Usando um Dataflow Gen2 com a transformação \"Expand Record\" do Power Query que expande objetos JSON aninhados em colunas separadas sem necessidade de código PySpark.",
      "Usando a atividade Script com `OPENJSON` no Warehouse que processa o arquivo JSON diretamente do OneLake e insere os dados achatados na tabela de destino via T-SQL."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Usando um Notebook PySpark com `spark.read.option(\"multiLine\", \"true\").json(\"Files/dados.json\")` para ler o JSON, `explode()` para expandir arrays aninhados, `select()` com notação de ponto para achatar campos aninhados, e `write.format(\"delta\").save(\"Tables/destino\")` para persistir.",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "Usando um Notebook PySpark com `spark.read.option(\"multiLine\", \"true\").json(\"Files/dados.json\")` para ler o JSON, `explode()` para expandir arrays aninhados, `select()` com notação de ponto para achatar campos aninhados, e `write.format(\"delta\").save(\"Tables/destino\")` para persistir. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Usando a atividade Copy Data com o conector JSON configurado com \"Flatten hierarchy\" habilitado que automaticamente achata estruturas aninhadas até 5 níveis de profundidade.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando um Dataflow Gen2 com a transformação \"Expand Record\" do Power Query que expande objetos JSON aninhados em colunas separadas sem necessidade de código PySpark.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando a atividade Script com `OPENJSON` no Warehouse que processa o arquivo JSON diretamente do OneLake e insere os dados achatados na tabela de destino via T-SQL.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q168",
    "text": "Quando é necessário executar um refresh explícito de um modelo semântico Direct Lake após atualizar dados no Lakehouse?",
    "options": [
      "Nunca é necessário refresh explícito; o Direct Lake detecta automaticamente qualquer alteração nos arquivos Delta em até 30 segundos e atualiza o framing sem intervenção.",
      "Um refresh explícito é necessário quando se quer garantir que o framing (snapshot) do Direct Lake seja atualizado imediatamente após a carga; sem refresh explícito, o Direct Lake usa o framing anterior até que o próximo acesso detecte novos arquivos Delta; para garantia de consistência em relatórios críticos, disparar refresh via API REST após cada carga.",
      "Refresh explícito é sempre obrigatório após qualquer escrita no Lakehouse; sem ele, o Direct Lake continua servindo dados da versão anterior indefinidamente até o próximo refresh agendado.",
      "Refresh explícito é necessário apenas quando o número de arquivos Delta na tabela excede 1000; abaixo desse limite o Direct Lake atualiza automaticamente o framing em tempo real."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Um refresh explícito é necessário quando se quer garantir que o framing (snapshot) do Direct Lake seja atualizado imediatamente após a carga; sem refresh explícito, o Direct Lake usa o framing anterior até que o próximo acesso detecte novos arquivos Delta; para garantia de consistência em relatórios críticos, disparar refresh via API REST após cada carga.",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "Um refresh explícito é necessário quando se quer garantir que o framing (snapshot) do Direct Lake seja atualizado imediatamente após a carga; sem refresh explícito, o Direct Lake usa o framing anterior até que o próximo acesso detecte novos arquivos Delta; para garantia de consistência em relatórios críticos, disparar refresh via API REST após cada carga. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Nunca é necessário refresh explícito; o Direct Lake detecta automaticamente qualquer alteração nos arquivos Delta em até 30 segundos e atualiza o framing sem intervenção.: Esta opção contém erro técnico ou implementação não recomendada",
        "Refresh explícito é sempre obrigatório após qualquer escrita no Lakehouse; sem ele, o Direct Lake continua servindo dados da versão anterior indefinidamente até o próximo refresh agendado.: Esta opção contém erro técnico ou implementação não recomendada",
        "Refresh explícito é necessário apenas quando o número de arquivos Delta na tabela excede 1000; abaixo desse limite o Direct Lake atualiza automaticamente o framing em tempo real.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q169",
    "text": "Quais tipos de índices são suportados no Fabric Warehouse e como eles se relacionam com o armazenamento colunar padrão?",
    "options": [
      "Índices são criados automaticamente pelo Fabric Warehouse baseado nos padrões de query observados no Query Insights; índices manuais são ignorados pelo otimizador.",
      "Suporta `CREATE CLUSTERED COLUMNSTORE INDEX`, `CREATE NONCLUSTERED INDEX` e `CREATE HASH INDEX`",
      "O Fabric Warehouse usa armazenamento colunar (similar a clustered columnstore) por padrão para todas as tabelas; suporta estatísticas de coluna via `CREATE STATISTICS` para auxiliar o otimizador; índices B-Tree tradicionais como no SQL Server não são suportados pois o modelo de armazenamento é fundamentalmente diferente.",
      "Suporta apenas `CREATE UNIQUE INDEX` para enforcement de unicidade em colunas de chave; outros tipos de índice são gerenciados automaticamente pelo motor de armazenamento colunar."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "O Fabric Warehouse usa armazenamento colunar (similar a clustered columnstore) por padrão para todas as tabelas; suporta estatísticas de coluna via `CREATE STATISTICS` para auxiliar o otimizador; índices B-Tree tradicionais como no SQL Server não são suportados pois o modelo de armazenamento é fundamentalmente diferente.",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "O Fabric Warehouse usa armazenamento colunar (similar a clustered columnstore) por padrão para todas as tabelas; suporta estatísticas de coluna via `CREATE STATISTICS` para auxiliar o otimizador; índices B-Tree tradicionais como no SQL Server não são suportados pois o modelo de armazenamento é fundamentalmente diferente. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Índices são criados automaticamente pelo Fabric Warehouse baseado nos padrões de query observados no Query Insights; índices manuais são ignorados pelo otimizador.: Esta opção contém erro técnico ou implementação não recomendada",
        "Suporta `CREATE CLUSTERED COLUMNSTORE INDEX`, `CREATE NONCLUSTERED INDEX` e `CREATE HASH INDEX`: Esta opção contém erro técnico ou implementação não recomendada",
        "Suporta apenas `CREATE UNIQUE INDEX` para enforcement de unicidade em colunas de chave; outros tipos de índice são gerenciados automaticamente pelo motor de armazenamento colunar.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q170",
    "text": "Como você analisa o transaction log de uma tabela Delta no Lakehouse do Fabric para entender o histórico de operações e diagnosticar problemas de performance?",
    "options": [
      "Lendo diretamente os arquivos JSON do `_delta_log` com `spark.read.json(\"Tables/nome_tabela/_delta_log/*.json\")` para análise de baixo nível das entradas do log de transações.",
      "Consultando a view `sys.delta_transaction_log` no SQL Analytics Endpoint do Lakehouse que expõe o histórico de operações de todas as tabelas em formato tabular.",
      "Usando `mssparkutils.fs.ls(\"Tables/nome_tabela/_delta_log/\")` para listar os arquivos de checkpoint e calcular manualmente o número de operações desde o último checkpoint.",
      "Usando `spark.sql(\"DESCRIBE HISTORY nome_tabela\")` que retorna todas as versões com operação (WRITE, MERGE, DELETE, OPTIMIZE), timestamp, usuário, métricas de linhas afetadas e parâmetros da operação; ou `DeltaTable.forName(spark, \"nome_tabela\").history()` via API PySpark."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Usando `spark.sql(\"DESCRIBE HISTORY nome_tabela\")` que retorna todas as versões com operação (WRITE, MERGE, DELETE, OPTIMIZE), timestamp, usuário, métricas de linhas afetadas e parâmetros da operação; ou `DeltaTable.forName(spark, \"nome_tabela\").history()` via API PySpark.",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "Usando `spark.sql(\"DESCRIBE HISTORY nome_tabela\")` que retorna todas as versões com operação (WRITE, MERGE, DELETE, OPTIMIZE), timestamp, usuário, métricas de linhas afetadas e parâmetros da operação; ou `DeltaTable.forName(spark, \"nome_tabela\").history()` via API PySpark. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Lendo diretamente os arquivos JSON do `_delta_log` com `spark.read.json(\"Tables/nome_tabela/_delta_log/*.json\")` para análise de baixo nível das entradas do log de transações.: Esta opção contém erro técnico ou implementação não recomendada",
        "Consultando a view `sys.delta_transaction_log` no SQL Analytics Endpoint do Lakehouse que expõe o histórico de operações de todas as tabelas em formato tabular.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando `mssparkutils.fs.ls(\"Tables/nome_tabela/_delta_log/\")` para listar os arquivos de checkpoint e calcular manualmente o número de operações desde o último checkpoint.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q171",
    "text": "Em um Notebook Fabric, como você consome dados de uma API REST autenticada com OAuth 2.0 usando a Workspace Identity?",
    "options": [
      "Usando `requests.get(url, auth=HTTPBasicAuth(client_id, client_secret))` com o Client ID e Secret do Service Principal armazenados em variáveis de ambiente do notebook.",
      "Usando `mssparkutils.credentials.getSecret(\"keyvault_uri\", \"nome_segredo\")` para recuperar o API key do Key Vault e passando como header `X-API-Key` nas requisições HTTP.",
      "Usando `mssparkutils.credentials.getToken(\"recurso_api\")` para obter o token OAuth da Workspace Identity sem expor credenciais, e `requests.get(url, headers={\"Authorization\": f\"Bearer {token}\"})` para chamar a API com autenticação gerenciada automaticamente pelo Fabric.",
      "Configurando `spark.conf.set(\"spark.rest.oauth.token\", mssparkutils.credentials.getToken())` que injeta automaticamente o token em todas as chamadas HTTP feitas pelo notebook."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Usando `mssparkutils.credentials.getToken(\"recurso_api\")` para obter o token OAuth da Workspace Identity sem expor credenciais, e `requests.get(url, headers={\"Authorization\": f\"Bearer {token}\"})` para chamar a API com autenticação gerenciada automaticamente pelo Fabric.",
      "intro": "Entendendo Fabric workspace e gerenciamento de recursos",
      "papoReto": "Usando `mssparkutils.credentials.getToken(\"recurso_api\")` para obter o token OAuth da Workspace Identity sem expor credenciais, e `requests.get(url, headers={\"Authorization\": f\"Bearer {token}\"})` para chamar a API com autenticação gerenciada automaticamente pelo Fabric. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Usando `requests.get(url, auth=HTTPBasicAuth(client_id, client_secret))` com o Client ID e Secret do Service Principal armazenados em variáveis de ambiente do notebook.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando `mssparkutils.credentials.getSecret(\"keyvault_uri\", \"nome_segredo\")` para recuperar o API key do Key Vault e passando como header `X-API-Key` nas requisições HTTP.: Esta opção contém erro técnico ou implementação não recomendada",
        "Configurando `spark.conf.set(\"spark.rest.oauth.token\", mssparkutils.credentials.getToken())` que injeta automaticamente o token em todas as chamadas HTTP feitas pelo notebook.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q172",
    "text": "Como você implementa uma política de retenção automática de dados em um KQL Database do Eventhouse para deletar automaticamente eventos com mais de 90 dias?",
    "options": [
      "Usando `.create or alter table NomeTabela (timestamp:datetime, ...) with (ttl=timespan(90.00:00:00))` que define TTL por linha na criação da tabela KQL.",
      "Criando um Data Pipeline agendado diariamente que executa `.drop table NomeTabela_antiga` e recria a tabela com apenas os últimos 90 dias de dados via query KQL.",
      "Configurando `ALTER TABLE NomeTabela SET (retention_period = 90)` via T-SQL no SQL Analytics Endpoint do Eventhouse que propaga a política para o KQL Database subjacente.",
      "`.alter table NomeTabela policy retention softdelete = 90d recoverability = disabled`"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "`.alter table NomeTabela policy retention softdelete = 90d recoverability = disabled`",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Para dados de streaming/IoT em alta velocidade: Eventstream captura eventos (IoT Hub, Event Hubs) → Eventhouse processa tempo real com KQL → Lakehouse persistencia via Structured Streaming/Eventstream destination.",
      "puloDoGato": "Eventstream → Eventhouse (tempo real KQL) → Lakehouse (persistencia Delta)",
      "cascasDeBanana": [
        "Stream Analytics via Shortcut: Shortcuts são read-only, não processam streams",
        "Dataflow Gen2 streaming: Dataflows é low-code, não nativo para high-speed IoT",
        "Data Pipeline de 1min: Pipelines batched em 1 minuto não é ideal para IoT contínuo"
      ],
      "dicaOuro": "Real-time streaming = Eventstream + Eventhouse. Persistencia = Delta em Lakehouse"
    }
  },
  {
    "id": "dp700_q173",
    "text": "Em um Data Pipeline do Fabric copiando dados de múltiplas tabelas SQL para um Lakehouse, como você implementa transformações de tipo de dado durante a cópia sem usar um notebook separado?",
    "options": [
      "Usando a atividade \"Script\" após o Copy Data que executa `ALTER TABLE tabela ALTER COLUMN coluna TYPE novo_tipo` para converter os tipos após a carga inicial no Lakehouse.",
      "Usando a atividade \"Type Conversion\" disponível no Data Pipeline entre o source e o sink que aplica mapeamentos de tipo configurados visualmente no canvas do pipeline.",
      "Configurando o schema do destino Lakehouse com os tipos corretos; o Fabric Warehouse automaticamente converte os tipos durante a cópia para corresponder ao schema de destino.",
      "Usando a funcionalidade \"Column Mapping\" na atividade Copy Data com expressões de conversão de tipo, ou configurando uma \"Source Query\" com CAST/CONVERT na query SQL de origem para transformar os tipos durante a extração antes de carregar no Lakehouse."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Usando a funcionalidade \"Column Mapping\" na atividade Copy Data com expressões de conversão de tipo, ou configurando uma \"Source Query\" com CAST/CONVERT na query SQL de origem para transformar os tipos durante a extração antes de carregar no Lakehouse.",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "Usando a funcionalidade \"Column Mapping\" na atividade Copy Data com expressões de conversão de tipo, ou configurando uma \"Source Query\" com CAST/CONVERT na query SQL de origem para transformar os tipos durante a extração antes de carregar no Lakehouse. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Usando a atividade \"Script\" após o Copy Data que executa `ALTER TABLE tabela ALTER COLUMN coluna TYPE novo_tipo` para converter os tipos após a carga inicial no Lakehouse.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando a atividade \"Type Conversion\" disponível no Data Pipeline entre o source e o sink que aplica mapeamentos de tipo configurados visualmente no canvas do pipeline.: Esta opção contém erro técnico ou implementação não recomendada",
        "Configurando o schema do destino Lakehouse com os tipos corretos; o Fabric Warehouse automaticamente converte os tipos durante a cópia para corresponder ao schema de destino.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q174",
    "text": "Um Data Pipeline falha com \"Authentication failed\" ao acessar um Azure Data Lake Storage Gen2 via Shortcut no Lakehouse. Quais são as causas mais comuns e como investigar?",
    "options": [
      "O erro é causado por firewall do ADLS Gen2 bloqueando conexões do Fabric; adicionar os IPs do Fabric à lista de permitidos nas configurações de rede do storage account.",
      "O erro indica que o arquivo no ADLS Gen2 está criptografado com CMK (Customer Managed Key) expirada; renovar a chave no Azure Key Vault e aguardar propagação de 15 minutos.",
      "O erro indica que a subscrição Azure do ADLS Gen2 está em tenant diferente do Fabric; cross-tenant Shortcuts requerem configuração de peering de tenant aprovado pelo administrador global.",
      "Causas: credenciais da conexão do Shortcut expiradas (SAS token ou Account Key rotacionado), Service Principal sem permissão adequada no ADLS Gen2 (Storage Blob Data Reader no mínimo), ou Managed Identity do workspace sem RBAC no storage; investigar nas configurações do Shortcut e nos logs de autenticação do Azure AD."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Causas: credenciais da conexão do Shortcut expiradas (SAS token ou Account Key rotacionado), Service Principal sem permissão adequada no ADLS Gen2 (Storage Blob Data Reader no mínimo), ou Managed Identity do workspace sem RBAC no storage; investigar nas configurações do Shortcut e nos logs de autenticação do Azure AD.",
      "intro": "Entendendo Shortcuts como virtual links vs. Mirror para cópias reais",
      "papoReto": "Shortcuts são pointers virtuais read-only para dados externos (ADLS Gen2, S3, Google Cloud, Lakehouses Fabric) sem copiar. Mirror copia incrementalmente dados. Escolha shortcuts para acesso virtual, mirror para cópias gerenciadas.",
      "puloDoGato": "Shortcut = read-only pointer. Mirror = incremental copy. Escolha conforme precisa escrever",
      "cascasDeBanana": [
        "Lakehouses separados: possível mas ineficiente—shortcuts no mesmo é melhor",
        "Sensitivity Labels: classificam, não controlam acesso como ACLs",
        "RLS: filtra linhas de tabelas, diferente de acesso a arquivos"
      ],
      "dicaOuro": "Shortcuts referenciam, Mirrors copiam. Use conforme necessidade de escrita"
    }
  },
  {
    "id": "dp700_q175",
    "text": "Em um Lakehouse de produção do Fabric com tabelas Delta que recebem atualizações frequentes, qual é a estratégia recomendada para execução do VACUUM sem comprometer o time travel?",
    "options": [
      "Executar VACUUM diariamente com retenção de 0 horas para maximizar a liberação de espaço; time travel pode ser substituído por backups externos se necessário para auditoria.",
      "Executar VACUUM apenas em tabelas com mais de 1 TB de dados; tabelas menores não acumulam arquivos suficientes para justificar o overhead de CUs do VACUUM no Fabric.",
      "Nunca executar VACUUM em tabelas de produção; o Delta Lake gerencia automaticamente o espaço descartando arquivos obsoletos via garbage collection interno sem intervenção manual.",
      "Manter o período de retenção padrão de 7 dias (168 horas) para preservar versões de time travel necessárias para auditoria e reprocessamento; executar VACUUM semanalmente após confirmar que não há queries de time travel em andamento; aumentar a retenção com `delta.logRetentionDuration` se auditorias exigem histórico mais longo."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Manter o período de retenção padrão de 7 dias (168 horas) para preservar versões de time travel necessárias para auditoria e reprocessamento; executar VACUUM semanalmente após confirmar que não há queries de time travel em andamento; aumentar a retenção com `delta.logRetentionDuration` se auditorias exigem histórico mais longo.",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "Manter o período de retenção padrão de 7 dias (168 horas) para preservar versões de time travel necessárias para auditoria e reprocessamento; executar VACUUM semanalmente após confirmar que não há queries de time travel em andamento; aumentar a retenção com `delta.logRetentionDuration` se auditorias exigem histórico mais longo. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Executar VACUUM diariamente com retenção de 0 horas para maximizar a liberação de espaço; time travel pode ser substituído por backups externos se necessário para auditoria.: Esta opção contém erro técnico ou implementação não recomendada",
        "Executar VACUUM apenas em tabelas com mais de 1 TB de dados; tabelas menores não acumulam arquivos suficientes para justificar o overhead de CUs do VACUUM no Fabric.: Esta opção contém erro técnico ou implementação não recomendada",
        "Nunca executar VACUUM em tabelas de produção; o Delta Lake gerencia automaticamente o espaço descartando arquivos obsoletos via garbage collection interno sem intervenção manual.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q176",
    "text": "Em um Data Pipeline do Fabric copiando dados de uma fonte SQL para um Lakehouse em modo append, como o \"Write batch size\" no sink afeta o desempenho e como você o configura?",
    "options": [
      "Write batch size é ignorado pelo Fabric quando o destino é um Lakehouse; o Delta Lake sempre acumula todos os dados na memória antes de fazer um único commit transacional.",
      "Write batch size deve sempre ser configurado como 0 (automático) pois o Fabric determina o tamanho ideal dinamicamente baseado na memória disponível e na velocidade da fonte.",
      "Write batch size afeta apenas o número de conexões simultâneas ao sink; valores maiores criam mais conexões paralelas melhorando o throughput independente do tamanho dos dados.",
      "Write batch size define quantas linhas são acumuladas antes de cada commit no Lakehouse; valores muito pequenos geram muitos arquivos Delta pequenos (fragmentação); valores muito grandes podem causar timeout de transação; recomendado entre 100.000 e 1.000.000 linhas por batch dependendo do tamanho das linhas e da latência aceitável."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Write batch size define quantas linhas são acumuladas antes de cada commit no Lakehouse; valores muito pequenos geram muitos arquivos Delta pequenos (fragmentação); valores muito grandes podem causar timeout de transação; recomendado entre 100.000 e 1.000.000 linhas por batch dependendo do tamanho das linhas e da latência aceitável.",
      "intro": "Entendendo Git integration e versionamento de artefatos",
      "papoReto": "Write batch size define quantas linhas são acumuladas antes de cada commit no Lakehouse; valores muito pequenos geram muitos arquivos Delta pequenos (fragmentação); valores muito grandes podem causar timeout de transação; recomendado entre 100.000 e 1.000.000 linhas por batch dependendo do tamanho das linhas e da latência aceitável. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Write batch size é ignorado pelo Fabric quando o destino é um Lakehouse; o Delta Lake sempre acumula todos os dados na memória antes de fazer um único commit transacional.: Esta opção contém erro técnico ou implementação não recomendada",
        "Write batch size deve sempre ser configurado como 0 (automático) pois o Fabric determina o tamanho ideal dinamicamente baseado na memória disponível e na velocidade da fonte.: Esta opção contém erro técnico ou implementação não recomendada",
        "Write batch size afeta apenas o número de conexões simultâneas ao sink; valores maiores criam mais conexões paralelas melhorando o throughput independente do tamanho dos dados.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q177",
    "text": "Em um processo ETL no Warehouse do Fabric, como você usa tabelas temporárias para staging intermediário e quais são suas limitações?",
    "options": [
      "Tabelas temporárias no Fabric Warehouse persistem por 24 horas após a sessão terminar, permitindo seu uso como staging entre execuções de pipeline agendadas a cada hora.",
      "Tabelas temporárias são compartilhadas entre todas as sessões do Warehouse; usar prefixos únicos como `#staging_jobid` para evitar conflitos entre execuções paralelas de pipelines.",
      "Criando `#tabela_temp` com `CREATE TABLE #staging (...)` ou `SELECT INTO #staging FROM ...`; limitação principal: tabelas temporárias são locais à sessão e não persistem entre execuções; para staging entre pipelines diferentes, usar tabelas permanentes com prefixo de convenção e truncar no início de cada execução.",
      "O Fabric Warehouse não suporta tabelas temporárias com `#`; a alternativa é usar `CREATE TABLE` no schema `tempdb` que é automaticamente limpo após cada sessão."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Criando `#tabela_temp` com `CREATE TABLE #staging (...)` ou `SELECT INTO #staging FROM ...`; limitação principal: tabelas temporárias são locais à sessão e não persistem entre execuções; para staging entre pipelines diferentes, usar tabelas permanentes com prefixo de convenção e truncar no início de cada execução.",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "Criando `#tabela_temp` com `CREATE TABLE #staging (...)` ou `SELECT INTO #staging FROM ...`; limitação principal: tabelas temporárias são locais à sessão e não persistem entre execuções; para staging entre pipelines diferentes, usar tabelas permanentes com prefixo de convenção e truncar no início de cada execução. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Tabelas temporárias no Fabric Warehouse persistem por 24 horas após a sessão terminar, permitindo seu uso como staging entre execuções de pipeline agendadas a cada hora.: Esta opção contém erro técnico ou implementação não recomendada",
        "Tabelas temporárias são compartilhadas entre todas as sessões do Warehouse; usar prefixos únicos como `#staging_jobid` para evitar conflitos entre execuções paralelas de pipelines.: Esta opção contém erro técnico ou implementação não recomendada",
        "O Fabric Warehouse não suporta tabelas temporárias com `#`; a alternativa é usar `CREATE TABLE` no schema `tempdb` que é automaticamente limpo após cada sessão.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q178",
    "text": "Como você usa a API REST do Microsoft Fabric para construir um dashboard de monitoramento personalizado que exibe o status de todos os pipelines de um workspace?",
    "options": [
      "Usando a API do Azure Monitor `GET https://management.azure.com/subscriptions/{subId}/resources?$filter=resourceType eq 'Microsoft.Fabric/pipelines'` que expõe métricas de execução de todos os pipelines do tenant.",
      "Chamando `GET https://api.fabric.microsoft.com/v1/workspaces/{workspaceId}/items?type=DataPipeline` para listar pipelines e `GET https://api.fabric.microsoft.com/v1/workspaces/{workspaceId}/items/{pipelineId}/jobs/instances` para obter histórico de execuções; consolidando os resultados em um Lakehouse e construindo relatório Power BI sobre os dados coletados.",
      "Consultando a tabela `fabric.monitoring.pipeline_runs` disponível no SQL Analytics Endpoint de qualquer Lakehouse do workspace que agrega automaticamente as execuções de todos os pipelines.",
      "Usando a API Power BI REST `GET https://api.powerbi.com/v1.0/myorg/groups/{workspaceId}/dataflows` que lista e monitora todos os itens de engenharia de dados incluindo pipelines do Fabric."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Chamando `GET https://api.fabric.microsoft.com/v1/workspaces/{workspaceId}/items?type=DataPipeline` para listar pipelines e `GET https://api.fabric.microsoft.com/v1/workspaces/{workspaceId}/items/{pipelineId}/jobs/instances` para obter histórico de execuções; consolidando os resultados em um Lakehouse e construindo relatório Power BI sobre os dados coletados.",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "Chamando `GET https://api.fabric.microsoft.com/v1/workspaces/{workspaceId}/items?type=DataPipeline` para listar pipelines e `GET https://api.fabric.microsoft.com/v1/workspaces/{workspaceId}/items/{pipelineId}/jobs/instances` para obter histórico de execuções; consolidando os resultados em um Lakehouse e construindo relatório Power BI sobre os dados coletados. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Usando a API do Azure Monitor `GET https://management.azure.com/subscriptions/{subId}/resources?$filter=resourceType eq 'Microsoft.Fabric/pipelines'` que expõe métricas de execução de todos os pipelines do tenant.: Esta opção contém erro técnico ou implementação não recomendada",
        "Consultando a tabela `fabric.monitoring.pipeline_runs` disponível no SQL Analytics Endpoint de qualquer Lakehouse do workspace que agrega automaticamente as execuções de todos os pipelines.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando a API Power BI REST `GET https://api.powerbi.com/v1.0/myorg/groups/{workspaceId}/dataflows` que lista e monitora todos os itens de engenharia de dados incluindo pipelines do Fabric.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q179",
    "text": "Em um Notebook Fabric, como você verifica se existem registros que violam uma constraint CHECK em uma tabela Delta antes de aplicar a constraint para evitar falha na criação?",
    "options": [
      "Usando `DeltaTable.forName(spark, \"nome_tabela\").validateConstraint(\"condicao\")` que verifica automaticamente os dados existentes antes de aplicar a constraint.",
      "Executando `DBCC CHECKCONSTRAINTS ('nome_tabela')` no SQL Analytics Endpoint que valida todas as constraints pendentes e retorna registros violadores em formato tabular.",
      "Executando `ALTER TABLE nome_tabela ADD CONSTRAINT nome CHECK (condicao) WITH NOCHECK` que adiciona a constraint sem validar registros existentes, similar ao SQL Server.",
      "`violacoes = spark.sql(\"SELECT COUNT(*) as total FROM nome_tabela WHERE NOT (condicao_constraint)\").collect()[0][\"total\"]; assert violacoes == 0, f\"{violacoes} registros violam a constraint\"`"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`violacoes = spark.sql(\"SELECT COUNT(*) as total FROM nome_tabela WHERE NOT (condicao_constraint)\").collect()[0][\"total\"]; assert violacoes == 0, f\"{violacoes} registros violam a constraint\"`",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "`violacoes = spark.sql(\"SELECT COUNT(*) as total FROM nome_tabela WHERE NOT (condicao_constraint)\").collect()[0][\"total\"]; assert violacoes == 0, f\"{violacoes} registros violam a constraint\"` é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Usando `DeltaTable.forName(spark, \"nome_tabela\").validateConstraint(\"condicao\")` que verifica automaticamente os dados existentes antes de aplicar a constraint.: Esta opção contém erro técnico ou implementação não recomendada",
        "Executando `DBCC CHECKCONSTRAINTS ('nome_tabela')` no SQL Analytics Endpoint que valida todas as constraints pendentes e retorna registros violadores em formato tabular.: Esta opção contém erro técnico ou implementação não recomendada",
        "Executando `ALTER TABLE nome_tabela ADD CONSTRAINT nome CHECK (condicao) WITH NOCHECK` que adiciona a constraint sem validar registros existentes, similar ao SQL Server.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q180",
    "text": "Como você implementa processamento paralelo de múltiplos grupos de dados em um Notebook Fabric sem usar um Data Pipeline externo?",
    "options": [
      "Usando `mssparkutils.notebook.runMultiple([{\"path\": \"NotebookB\", \"args\": {\"grupo\": g}} for g in grupos], parallelism=5)` que executa múltiplos notebooks em paralelo com controle de concorrência máxima, retornando resultados quando todos concluem.",
      "Usando `ThreadPoolExecutor` do Python com `executor.map(processar_grupo, grupos)` que cria threads Python paralelas",
      "Criando múltiplas sessões Spark com `SparkSession.builder.getOrCreate()` em threads separadas",
      "Usando `spark.sparkContext.parallelize(grupos).foreach(lambda g: processar_grupo(g))` que distribui o processamento de grupos entre executores Spark automaticamente."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Usando `mssparkutils.notebook.runMultiple([{\"path\": \"NotebookB\", \"args\": {\"grupo\": g}} for g in grupos], parallelism=5)` que executa múltiplos notebooks em paralelo com controle de concorrência máxima, retornando resultados quando todos concluem.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Usando `mssparkutils.notebook.runMultiple([{\"path\": \"NotebookB\", \"args\": {\"grupo\": g}} for g in grupos], parallelism=5)` que executa múltiplos notebooks em paralelo com controle de concorrência máxima, retornando resultados quando todos concluem. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Usando `ThreadPoolExecutor` do Python com `executor.map(processar_grupo, grupos)` que cria threads Python paralelas: Esta opção contém erro técnico ou implementação não recomendada",
        "Criando múltiplas sessões Spark com `SparkSession.builder.getOrCreate()` em threads separadas: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando `spark.sparkContext.parallelize(grupos).foreach(lambda g: processar_grupo(g))` que distribui o processamento de grupos entre executores Spark automaticamente.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q181",
    "text": "Em um KQL Database do Fabric, como você acessa dados armazenados em um arquivo Parquet no OneLake sem ingerir os dados na tabela KQL?",
    "options": [
      "Usando `.create external table NomeTabela (colunas) kind=adl connection='abfss://path' partition by (data:datetime)` para criar tabela externa persistente no KQL Database.",
      "Criando um Shortcut no KQL Database apontando para o arquivo Parquet no OneLake, que automaticamente expõe o arquivo como tabela KQL consultável via query.",
      "Usando `externaldata` com a função KQL: `externaldata(colunas) ['https://onelake.dfs.fabric.microsoft.com/path/arquivo.parquet'] with (format='parquet')`",
      "Usando `Parquet::read('https://onelake.dfs.fabric.microsoft.com/path/arquivo.parquet')` que é uma função KQL nativa para leitura de arquivos Parquet sem ingestão."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Usando `externaldata` com a função KQL: `externaldata(colunas) ['https://onelake.dfs.fabric.microsoft.com/path/arquivo.parquet'] with (format='parquet')`",
      "intro": "Entendendo Shortcuts como virtual links vs. Mirror para cópias reais",
      "papoReto": "Usando `externaldata` com a função KQL: `externaldata(colunas) ['https://onelake.dfs.fabric.microsoft.com/path/arquivo.parquet'] with (format='parquet')` é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Usando `.create external table NomeTabela (colunas) kind=adl connection='abfss://path' partition by (data:datetime)` para criar tabela externa persistente no KQL Database.: Esta opção contém erro técnico ou implementação não recomendada",
        "Criando um Shortcut no KQL Database apontando para o arquivo Parquet no OneLake, que automaticamente expõe o arquivo como tabela KQL consultável via query.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando `Parquet::read('https://onelake.dfs.fabric.microsoft.com/path/arquivo.parquet')` que é uma função KQL nativa para leitura de arquivos Parquet sem ingestão.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q182",
    "text": "Como você identifica e resolve problemas de armazenamento no OneLake quando o workspace está próximo do limite de capacidade?",
    "options": [
      "Convertendo tabelas Delta para formato CSV que ocupa significativamente menos espaço que o formato Parquet colunar usado pelo Delta Lake no OneLake.",
      "Verificando o consumo de armazenamento no Admin Portal do Fabric por workspace, identificando as tabelas Delta com maior volume via `DESCRIBE DETAIL` e `spark.sql(\"SHOW TABLES\")`, executando VACUUM para remover arquivos obsoletos, arquivando dados históricos e deletando itens não utilizados como tabelas temporárias de desenvolvimento.",
      "Aumentando a cota de armazenamento do OneLake no Azure Portal navegando até o recurso Fabric e ajustando o slider de \"Storage Quota\" nas configurações avançadas.",
      "Habilitando a compressão automática do OneLake nas configurações do workspace que reduz automaticamente o tamanho dos arquivos Delta em até 70% sem alterar o conteúdo dos dados."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Verificando o consumo de armazenamento no Admin Portal do Fabric por workspace, identificando as tabelas Delta com maior volume via `DESCRIBE DETAIL` e `spark.sql(\"SHOW TABLES\")`, executando VACUUM para remover arquivos obsoletos, arquivando dados históricos e deletando itens não utilizados como tabelas temporárias de desenvolvimento.",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "Verificando o consumo de armazenamento no Admin Portal do Fabric por workspace, identificando as tabelas Delta com maior volume via `DESCRIBE DETAIL` e `spark.sql(\"SHOW TABLES\")`, executando VACUUM para remover arquivos obsoletos, arquivando dados históricos e deletando itens não utilizados como tabelas temporárias de desenvolvimento. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Convertendo tabelas Delta para formato CSV que ocupa significativamente menos espaço que o formato Parquet colunar usado pelo Delta Lake no OneLake.: Esta opção contém erro técnico ou implementação não recomendada",
        "Aumentando a cota de armazenamento do OneLake no Azure Portal navegando até o recurso Fabric e ajustando o slider de \"Storage Quota\" nas configurações avançadas.: Esta opção contém erro técnico ou implementação não recomendada",
        "Habilitando a compressão automática do OneLake nas configurações do workspace que reduz automaticamente o tamanho dos arquivos Delta em até 70% sem alterar o conteúdo dos dados.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q183",
    "text": "Em um Data Pipeline do Fabric, como você implementa um padrão fan-out/fan-in onde múltiplas atividades paralelas devem todas concluir antes de uma atividade de consolidação ser executada?",
    "options": [
      "Usando múltiplas atividades em paralelo (sem dependência entre elas) todas conectadas ao path \"On Success\" de uma atividade de consolidação subsequente; o pipeline automaticamente aguarda a conclusão de todas as atividades predecessoras antes de executar a consolidação.",
      "Usando a atividade \"Barrier\" disponível no Data Pipeline que sincroniza múltiplos fluxos paralelos antes de permitir a continuação do pipeline principal.",
      "Usando `mssparkutils.notebook.runMultiple()` dentro de uma atividade Notebook que gerencia a sincronização das atividades paralelas e sinaliza a conclusão ao pipeline pai.",
      "Criando variáveis de controle que cada atividade paralela atualiza ao concluir e uma atividade Until que aguarda até que todas as variáveis indiquem conclusão."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Usando múltiplas atividades em paralelo (sem dependência entre elas) todas conectadas ao path \"On Success\" de uma atividade de consolidação subsequente; o pipeline automaticamente aguarda a conclusão de todas as atividades predecessoras antes de executar a consolidação.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Usando múltiplas atividades em paralelo (sem dependência entre elas) todas conectadas ao path \"On Success\" de uma atividade de consolidação subsequente; o pipeline automaticamente aguarda a conclusão de todas as atividades predecessoras antes de executar a consolidação. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Usando a atividade \"Barrier\" disponível no Data Pipeline que sincroniza múltiplos fluxos paralelos antes de permitir a continuação do pipeline principal.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando `mssparkutils.notebook.runMultiple()` dentro de uma atividade Notebook que gerencia a sincronização das atividades paralelas e sinaliza a conclusão ao pipeline pai.: Esta opção contém erro técnico ou implementação não recomendada",
        "Criando variáveis de controle que cada atividade paralela atualiza ao concluir e uma atividade Until que aguarda até que todas as variáveis indiquem conclusão.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q184",
    "text": "Em um KQL Database do Fabric, como você encapsula uma query KQL reutilizável em uma função para uso em múltiplas queries e dashboards?",
    "options": [
      "`let nome_funcao = (parametro:string) { Tabela | where coluna == parametro };`",
      "`.create function nome_funcao(parametro:tipo) { Tabela | where coluna == parametro | summarize count() by categoria }`",
      "`.create stored procedure nome_funcao(parametro:string) { Tabela | where coluna == parametro }`",
      "`CREATE FUNCTION nome_funcao(@parametro VARCHAR(50)) RETURNS TABLE AS RETURN (SELECT * FROM Tabela WHERE coluna = @parametro)`"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "`.create function nome_funcao(parametro:tipo) { Tabela | where coluna == parametro | summarize count() by categoria }`",
      "intro": "Entendendo Fabric workspace e gerenciamento de recursos",
      "papoReto": "`.create function nome_funcao(parametro:tipo) { Tabela | where coluna == parametro | summarize count() by categoria }` é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "`let nome_funcao = (parametro:string) { Tabela | where coluna == parametro };`: Esta opção contém erro técnico ou implementação não recomendada",
        "`.create stored procedure nome_funcao(parametro:string) { Tabela | where coluna == parametro }`: Esta opção contém erro técnico ou implementação não recomendada",
        "`CREATE FUNCTION nome_funcao(@parametro VARCHAR(50)) RETURNS TABLE AS RETURN (SELECT * FROM Tabela WHERE coluna = @parametro)`: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q185",
    "text": "Em Structured Streaming no Fabric, para que serve o watermark e como ele é configurado em PySpark?",
    "options": [
      "O watermark define o atraso máximo tolerado para dados tardios (late data); usando `df.withWatermark(\"timestamp\", \"10 minutes\")` instrui o Spark a manter estado por 10 minutos além do timestamp máximo visto, descartando dados que chegam com mais de 10 minutos de atraso e permitindo que o estado de janelas antigas seja limpo da memória.",
      "O watermark é um checkpoint de progresso que garante que cada janela de tempo seja processada exatamente uma vez; configurado com `setWatermark(processingTime=\"10 minutes\")` no trigger.",
      "O watermark define o tamanho máximo do buffer em memória para o stream; `withWatermark(\"timestamp\", \"10 minutes\")` limita o buffer a 10 minutos de dados antes de forçar o flush para o destino.",
      "O watermark define o intervalo de polling da fonte de streaming; `withWatermark(\"timestamp\", \"10 minutes\")` verifica novos dados a cada 10 minutos na fonte configurada."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "O watermark define o atraso máximo tolerado para dados tardios (late data); usando `df.withWatermark(\"timestamp\", \"10 minutes\")` instrui o Spark a manter estado por 10 minutos além do timestamp máximo visto, descartando dados que chegam com mais de 10 minutos de atraso e permitindo que o estado de janelas antigas seja limpo da memória.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Para dados de streaming/IoT em alta velocidade: Eventstream captura eventos (IoT Hub, Event Hubs) → Eventhouse processa tempo real com KQL → Lakehouse persistencia via Structured Streaming/Eventstream destination.",
      "puloDoGato": "Eventstream → Eventhouse (tempo real KQL) → Lakehouse (persistencia Delta)",
      "cascasDeBanana": [
        "Stream Analytics via Shortcut: Shortcuts são read-only, não processam streams",
        "Dataflow Gen2 streaming: Dataflows é low-code, não nativo para high-speed IoT",
        "Data Pipeline de 1min: Pipelines batched em 1 minuto não é ideal para IoT contínuo"
      ],
      "dicaOuro": "Real-time streaming = Eventstream + Eventhouse. Persistencia = Delta em Lakehouse"
    }
  },
  {
    "id": "dp700_q186",
    "text": "Como o Microsoft Purview pode ser usado por engenheiros de dados para melhorar a governança e descoberta de dados em um ambiente Fabric?",
    "options": [
      "Purview escaneia automaticamente metadados de Lakehouses, Warehouses e Eventhouses do Fabric, catalogando tabelas e colunas no Data Map; engenheiros usam o catálogo para descobrir dados existentes, verificar lineage end-to-end, classificar dados sensíveis automaticamente e entender o impacto de alterações em objetos upstream.",
      "Purview substitui o Monitor Hub do Fabric para monitoramento de execuções de pipelines e notebooks, oferecendo dashboard unificado com métricas de performance e histórico de execuções.",
      "Purview é usado exclusivamente para conformidade legal (LGPD/GDPR) e não oferece funcionalidades de catalogação ou descoberta de dados relevantes para engenheiros de dados do dia a dia.",
      "Purview gerencia automaticamente as permissões de acesso a Lakehouses e Warehouses do Fabric, sincronizando grupos do Entra ID com as funções de workspace sem intervenção manual."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Purview escaneia automaticamente metadados de Lakehouses, Warehouses e Eventhouses do Fabric, catalogando tabelas e colunas no Data Map; engenheiros usam o catálogo para descobrir dados existentes, verificar lineage end-to-end, classificar dados sensíveis automaticamente e entender o impacto de alterações em objetos upstream.",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "Purview escaneia automaticamente metadados de Lakehouses, Warehouses e Eventhouses do Fabric, catalogando tabelas e colunas no Data Map; engenheiros usam o catálogo para descobrir dados existentes, verificar lineage end-to-end, classificar dados sensíveis automaticamente e entender o impacto de alterações em objetos upstream. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Purview substitui o Monitor Hub do Fabric para monitoramento de execuções de pipelines e notebooks, oferecendo dashboard unificado com métricas de performance e histórico de execuções.: Esta opção contém erro técnico ou implementação não recomendada",
        "Purview é usado exclusivamente para conformidade legal (LGPD/GDPR) e não oferece funcionalidades de catalogação ou descoberta de dados relevantes para engenheiros de dados do dia a dia.: Esta opção contém erro técnico ou implementação não recomendada",
        "Purview gerencia automaticamente as permissões de acesso a Lakehouses e Warehouses do Fabric, sincronizando grupos do Entra ID com as funções de workspace sem intervenção manual.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q187",
    "text": "Em PySpark no Fabric, como você converte uma coluna de string que contém datas no formato \"dd/MM/yyyy\" para o tipo DateType correto?",
    "options": [
      "`df.withColumn(\"data_convertida\", date_format(col(\"data_string\"), \"dd/MM/yyyy\"))`",
      "`from pyspark.sql.functions import to_date; df.withColumn(\"data_convertida\", to_date(col(\"data_string\"), \"dd/MM/yyyy\"))`",
      "`df.withColumn(\"data_convertida\", datetime.strptime(col(\"data_string\"), \"%d/%m/%Y\"))`",
      "`df.withColumn(\"data_convertida\", col(\"data_string\").cast(\"date\"))`"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`from pyspark.sql.functions import to_date; df.withColumn(\"data_convertida\", to_date(col(\"data_string\"), \"dd/MM/yyyy\"))`",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "`from pyspark.sql.functions import to_date; df.withColumn(\"data_convertida\", to_date(col(\"data_string\"), \"dd/MM/yyyy\"))` é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "`df.withColumn(\"data_convertida\", date_format(col(\"data_string\"), \"dd/MM/yyyy\"))`: Esta opção contém erro técnico ou implementação não recomendada",
        "`df.withColumn(\"data_convertida\", datetime.strptime(col(\"data_string\"), \"%d/%m/%Y\"))`: Esta opção contém erro técnico ou implementação não recomendada",
        "`df.withColumn(\"data_convertida\", col(\"data_string\").cast(\"date\"))`: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q188",
    "text": "Como o Fabric Warehouse gerencia múltiplas queries concorrentes e o que acontece quando a capacity está sob alta carga?",
    "options": [
      "O Fabric Warehouse usa um sistema de fila de queries com priorização baseada no tipo de operação; queries interativas têm prioridade sobre jobs em background; sob alta carga de capacity, queries são enfileiradas e aguardam disponibilidade de CUs; o administrador pode monitorar a fila via Query Insights e Capacity Metrics App.",
      "O Fabric Warehouse escala automaticamente para múltiplos nós quando detecta concorrência alta, distribuindo as queries entre nós adicionais sem impacto na latência observada pelo usuário.",
      "O Fabric Warehouse limita automaticamente a 10 queries concorrentes por workspace; queries adicionais recebem erro imediato e devem ser resubmetidas pelo cliente.",
      "O Fabric Warehouse usa Resource Governor para alocar percentuais fixos de CPU e memória por usuário; usuários que excedem sua cota têm queries automaticamente canceladas."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "O Fabric Warehouse usa um sistema de fila de queries com priorização baseada no tipo de operação; queries interativas têm prioridade sobre jobs em background; sob alta carga de capacity, queries são enfileiradas e aguardam disponibilidade de CUs; o administrador pode monitorar a fila via Query Insights e Capacity Metrics App.",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "O Fabric Warehouse usa um sistema de fila de queries com priorização baseada no tipo de operação; queries interativas têm prioridade sobre jobs em background; sob alta carga de capacity, queries são enfileiradas e aguardam disponibilidade de CUs; o administrador pode monitorar a fila via Query Insights e Capacity Metrics App. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "O Fabric Warehouse escala automaticamente para múltiplos nós quando detecta concorrência alta, distribuindo as queries entre nós adicionais sem impacto na latência observada pelo usuário.: Esta opção contém erro técnico ou implementação não recomendada",
        "O Fabric Warehouse limita automaticamente a 10 queries concorrentes por workspace; queries adicionais recebem erro imediato e devem ser resubmetidas pelo cliente.: Esta opção contém erro técnico ou implementação não recomendada",
        "O Fabric Warehouse usa Resource Governor para alocar percentuais fixos de CPU e memória por usuário; usuários que excedem sua cota têm queries automaticamente canceladas.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q189",
    "text": "Em um Data Pipeline do Fabric, como você acessa informações sobre a execução atual (como ID da execução, nome do pipeline e horário de início) dentro de uma expressão dinâmica?",
    "options": [
      "Usando variáveis de sistema do Fabric definidas como `@{system.runId}`, `@{system.pipelineName}` e `@{system.startTime}` disponíveis no contexto de execução de cada pipeline.",
      "Usando `mssparkutils.env.getRunId()` dentro de uma atividade Notebook que retorna o ID da execução do pipeline pai que disparou o notebook.",
      "Usando funções de sistema como `@pipeline().RunId` para o ID de execução único, `@pipeline().Pipeline` para o nome do pipeline, `@pipeline().parameters.nome` para parâmetros, e `@utcNow()` para o timestamp atual",
      "Executando uma atividade Lookup inicial que consulta a tabela `sys.pipeline_runs` do Warehouse e recupera os metadados da execução atual via `WHERE run_id = @@SPID`."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Usando funções de sistema como `@pipeline().RunId` para o ID de execução único, `@pipeline().Pipeline` para o nome do pipeline, `@pipeline().parameters.nome` para parâmetros, e `@utcNow()` para o timestamp atual",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "Usando funções de sistema como `@pipeline().RunId` para o ID de execução único, `@pipeline().Pipeline` para o nome do pipeline, `@pipeline().parameters.nome` para parâmetros, e `@utcNow()` para o timestamp atual é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Usando variáveis de sistema do Fabric definidas como `@{system.runId}`, `@{system.pipelineName}` e `@{system.startTime}` disponíveis no contexto de execução de cada pipeline.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando `mssparkutils.env.getRunId()` dentro de uma atividade Notebook que retorna o ID da execução do pipeline pai que disparou o notebook.: Esta opção contém erro técnico ou implementação não recomendada",
        "Executando uma atividade Lookup inicial que consulta a tabela `sys.pipeline_runs` do Warehouse e recupera os metadados da execução atual via `WHERE run_id = @@SPID`.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q190",
    "text": "O que é o recurso de Auto-Optimization no Lakehouse do Microsoft Fabric e como ele beneficia engenheiros de dados?",
    "options": [
      "Auto-Optimization monitora continuamente as queries SQL no Analytics Endpoint e cria automaticamente views materializadas para as queries mais frequentes acima de 100 execuções diárias.",
      "Auto-Optimization inclui Auto Compaction (compacta automaticamente arquivos pequenos após operações de escrita) e Optimized Write (ajusta o número de arquivos gerados para tamanho ideal durante a escrita); habilitado via `spark.conf.set(\"spark.microsoft.delta.optimizeWrite.enabled\", \"true\")` — reduz a necessidade de executar OPTIMIZE manualmente.",
      "Auto-Optimization é um recurso que detecta automaticamente as colunas de join mais usadas e aplica Z-Ordering nas tabelas Delta sem necessidade de comando OPTIMIZE manual.",
      "Auto-Optimization é o mecanismo de escalonamento automático da capacity Fabric que aumenta os CUs disponíveis quando detecta sobrecarga de operações de escrita em tabelas Delta."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Auto-Optimization inclui Auto Compaction (compacta automaticamente arquivos pequenos após operações de escrita) e Optimized Write (ajusta o número de arquivos gerados para tamanho ideal durante a escrita); habilitado via `spark.conf.set(\"spark.microsoft.delta.optimizeWrite.enabled\", \"true\")` — reduz a necessidade de executar OPTIMIZE manualmente.",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "Auto-Optimization inclui Auto Compaction (compacta automaticamente arquivos pequenos após operações de escrita) e Optimized Write (ajusta o número de arquivos gerados para tamanho ideal durante a escrita); habilitado via `spark.conf.set(\"spark.microsoft.delta.optimizeWrite.enabled\", \"true\")` — reduz a necessidade de executar OPTIMIZE manualmente. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Auto-Optimization monitora continuamente as queries SQL no Analytics Endpoint e cria automaticamente views materializadas para as queries mais frequentes acima de 100 execuções diárias.: Esta opção contém erro técnico ou implementação não recomendada",
        "Auto-Optimization é um recurso que detecta automaticamente as colunas de join mais usadas e aplica Z-Ordering nas tabelas Delta sem necessidade de comando OPTIMIZE manual.: Esta opção contém erro técnico ou implementação não recomendada",
        "Auto-Optimization é o mecanismo de escalonamento automático da capacity Fabric que aumenta os CUs disponíveis quando detecta sobrecarga de operações de escrita em tabelas Delta.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q191",
    "text": "No Fabric Warehouse, como você implementa um schema de múltiplos namespaces para separar objetos de staging, transformação e produção?",
    "options": [
      "Usando prefixos de nomenclatura como `stg_tabela`, `trn_tabela` e `prd_tabela` no schema padrão `dbo`, pois o Fabric Warehouse não suporta múltiplos schemas além do dbo.",
      "Criando schemas separados via `CREATE SCHEMA staging; CREATE SCHEMA transform; CREATE SCHEMA prod;` e organizando tabelas, views e procedures em cada schema conforme sua função, usando notação `schema.objeto` nas queries para referenciar objetos entre schemas.",
      "Criando um Lakehouse separado para staging, um Warehouse para transformação e outro Warehouse para produção, usando Shortcuts para conectar os dados entre as camadas.",
      "Criando um Warehouse separado para cada camada (staging, transform, prod) e usando cross-database queries para mover dados entre os Warehouses de forma controlada."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Criando schemas separados via `CREATE SCHEMA staging; CREATE SCHEMA transform; CREATE SCHEMA prod;` e organizando tabelas, views e procedures em cada schema conforme sua função, usando notação `schema.objeto` nas queries para referenciar objetos entre schemas.",
      "intro": "Entendendo Shortcuts como virtual links vs. Mirror para cópias reais",
      "papoReto": "Criando schemas separados via `CREATE SCHEMA staging; CREATE SCHEMA transform; CREATE SCHEMA prod;` e organizando tabelas, views e procedures em cada schema conforme sua função, usando notação `schema.objeto` nas queries para referenciar objetos entre schemas. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Usando prefixos de nomenclatura como `stg_tabela`, `trn_tabela` e `prd_tabela` no schema padrão `dbo`, pois o Fabric Warehouse não suporta múltiplos schemas além do dbo.: Esta opção contém erro técnico ou implementação não recomendada",
        "Criando um Lakehouse separado para staging, um Warehouse para transformação e outro Warehouse para produção, usando Shortcuts para conectar os dados entre as camadas.: Esta opção contém erro técnico ou implementação não recomendada",
        "Criando um Warehouse separado para cada camada (staging, transform, prod) e usando cross-database queries para mover dados entre os Warehouses de forma controlada.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q192",
    "text": "Como você usa o KQL para analisar logs de diagnóstico do workspace exportados para um Eventhouse no Fabric?",
    "options": [
      "Consultando as tabelas de log geradas no KQL Database (ex: `FabricOperationLogs | where OperationName == \"NotebookRun\" | summarize count() by bin(TimeGenerated, 1h), Status | render timechart`) para visualizar padrões de execução e detectar anomalias ao longo do tempo.",
      "Acessando as views `sys.diagnostic_logs` e `sys.operation_history` disponíveis no KQL Database que consolidam todos os logs de workspace automaticamente.",
      "Executando `.show diagnostic logs | where workspace == 'nome_workspace'` que é o comando KQL nativo para consultar logs de diagnóstico do Fabric armazenados no Eventhouse.",
      "Usando `SELECT OperationName, COUNT(*) FROM FabricOperationLogs GROUP BY OperationName` via T-SQL no SQL Analytics Endpoint do Eventhouse que expõe os logs de diagnóstico."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Consultando as tabelas de log geradas no KQL Database (ex: `FabricOperationLogs | where OperationName == \"NotebookRun\" | summarize count() by bin(TimeGenerated, 1h), Status | render timechart`) para visualizar padrões de execução e detectar anomalias ao longo do tempo.",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "Para dados de streaming/IoT em alta velocidade: Eventstream captura eventos (IoT Hub, Event Hubs) → Eventhouse processa tempo real com KQL → Lakehouse persistencia via Structured Streaming/Eventstream destination.",
      "puloDoGato": "Eventstream → Eventhouse (tempo real KQL) → Lakehouse (persistencia Delta)",
      "cascasDeBanana": [
        "Stream Analytics via Shortcut: Shortcuts são read-only, não processam streams",
        "Dataflow Gen2 streaming: Dataflows é low-code, não nativo para high-speed IoT",
        "Data Pipeline de 1min: Pipelines batched em 1 minuto não é ideal para IoT contínuo"
      ],
      "dicaOuro": "Real-time streaming = Eventstream + Eventhouse. Persistencia = Delta em Lakehouse"
    }
  },
  {
    "id": "dp700_q193",
    "text": "Em um cenário de auditoria, como você usa o Time Travel do Delta Lake no Fabric para verificar o estado exato de uma tabela em um momento específico no passado?",
    "options": [
      "`spark.read.format(\"delta\").option(\"timestampAsOf\", \"2024-06-01 10:00:00\").table(\"nome_tabela\")` para restaurar por timestamp, ou `.option(\"versionAsOf\", 42)` para restaurar por versão específica identificada via `DESCRIBE HISTORY nome_tabela`.",
      "`RESTORE TABLE nome_tabela TO TIMESTAMP AS OF '2024-06-01 10:00:00'`",
      "`spark.read.format(\"delta\").option(\"snapshot\", \"2024-06-01T10:00:00Z\").load(\"Tables/nome_tabela\")`",
      "`spark.sql(\"SELECT * FROM nome_tabela TIMESTAMP AS OF '2024-06-01' AT TIME ZONE 'BRT'\")`"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`spark.read.format(\"delta\").option(\"timestampAsOf\", \"2024-06-01 10:00:00\").table(\"nome_tabela\")` para restaurar por timestamp, ou `.option(\"versionAsOf\", 42)` para restaurar por versão específica identificada via `DESCRIBE HISTORY nome_tabela`.",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "`spark.read.format(\"delta\").option(\"timestampAsOf\", \"2024-06-01 10:00:00\").table(\"nome_tabela\")` para restaurar por timestamp, ou `.option(\"versionAsOf\", 42)` para restaurar por versão específica identificada via `DESCRIBE HISTORY nome_tabela`. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "`RESTORE TABLE nome_tabela TO TIMESTAMP AS OF '2024-06-01 10:00:00'`: Esta opção contém erro técnico ou implementação não recomendada",
        "`spark.read.format(\"delta\").option(\"snapshot\", \"2024-06-01T10:00:00Z\").load(\"Tables/nome_tabela\")`: Esta opção contém erro técnico ou implementação não recomendada",
        "`spark.sql(\"SELECT * FROM nome_tabela TIMESTAMP AS OF '2024-06-01' AT TIME ZONE 'BRT'\")`: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q194",
    "text": "No Data Pipeline do Fabric, qual é o número máximo de iterações paralelas suportadas pela atividade ForEach e como você equilibra paralelismo com estabilidade da fonte de dados?",
    "options": [
      "O ForEach suporta até 50 iterações paralelas configuráveis via \"Batch count\"; para proteger a fonte de dados, configurar o paralelismo baseado na capacidade da fonte (ex: 5-10 para bancos OLTP, maior para fontes cloud escaláveis), monitorando erros de throttling como indicativo de sobrecarga.",
      "O ForEach sempre executa sequencialmente para garantir ordem de processamento; para paralelismo real é necessário usar múltiplas atividades Execute Pipeline em paralelo no canvas.",
      "O ForEach não tem limite de paralelismo documentado; o Fabric aloca dinamicamente os recursos necessários baseado no número de itens na coleção e na capacity disponível.",
      "O paralelismo máximo do ForEach é 10 iterações simultâneas; para maior paralelismo é necessário dividir a coleção em sub-grupos e usar múltiplas atividades ForEach em paralelo."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "O ForEach suporta até 50 iterações paralelas configuráveis via \"Batch count\"; para proteger a fonte de dados, configurar o paralelismo baseado na capacidade da fonte (ex: 5-10 para bancos OLTP, maior para fontes cloud escaláveis), monitorando erros de throttling como indicativo de sobrecarga.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "O ForEach suporta até 50 iterações paralelas configuráveis via \"Batch count\"; para proteger a fonte de dados, configurar o paralelismo baseado na capacidade da fonte (ex: 5-10 para bancos OLTP, maior para fontes cloud escaláveis), monitorando erros de throttling como indicativo de sobrecarga. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "O ForEach sempre executa sequencialmente para garantir ordem de processamento; para paralelismo real é necessário usar múltiplas atividades Execute Pipeline em paralelo no canvas.: Esta opção contém erro técnico ou implementação não recomendada",
        "O ForEach não tem limite de paralelismo documentado; o Fabric aloca dinamicamente os recursos necessários baseado no número de itens na coleção e na capacity disponível.: Esta opção contém erro técnico ou implementação não recomendada",
        "O paralelismo máximo do ForEach é 10 iterações simultâneas; para maior paralelismo é necessário dividir a coleção em sub-grupos e usar múltiplas atividades ForEach em paralelo.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q195",
    "text": "Como você implementa validação de qualidade de dados baseada em expectativas (expectations) em um Notebook Fabric para datasets críticos antes da carga em produção?",
    "options": [
      "Configurando regras de qualidade no Microsoft Purview Data Catalog que automaticamente valida os dados durante a ingestão no Lakehouse via integration nativa com notebooks.",
      "Usando `mssparkutils.data.validate(df, rules_file=\"Files/rules.json\")` que é a ferramenta nativa de validação de qualidade de dados do Fabric integrada ao OneLake.",
      "Instalando `%pip install great-expectations` no notebook, definindo um `ExpectationSuite` com regras como `expect_column_values_to_not_be_null`, `expect_column_values_to_be_between` e `expect_column_to_exist`, executando a validação com `validator.validate()` e interrompendo a carga se o resultado contiver failures críticos.",
      "Usando `spark.sql(\"ANALYZE TABLE nome_tabela COMPUTE STATISTICS FOR ALL COLUMNS VALIDATE\")` que executa validações de qualidade baseadas nas estatísticas de coluna da tabela Delta."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Instalando `%pip install great-expectations` no notebook, definindo um `ExpectationSuite` com regras como `expect_column_values_to_not_be_null`, `expect_column_values_to_be_between` e `expect_column_to_exist`, executando a validação com `validator.validate()` e interrompendo a carga se o resultado contiver failures críticos.",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "Instalando `%pip install great-expectations` no notebook, definindo um `ExpectationSuite` com regras como `expect_column_values_to_not_be_null`, `expect_column_values_to_be_between` e `expect_column_to_exist`, executando a validação com `validator.validate()` e interrompendo a carga se o resultado contiver failures críticos. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Configurando regras de qualidade no Microsoft Purview Data Catalog que automaticamente valida os dados durante a ingestão no Lakehouse via integration nativa com notebooks.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando `mssparkutils.data.validate(df, rules_file=\"Files/rules.json\")` que é a ferramenta nativa de validação de qualidade de dados do Fabric integrada ao OneLake.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando `spark.sql(\"ANALYZE TABLE nome_tabela COMPUTE STATISTICS FOR ALL COLUMNS VALIDATE\")` que executa validações de qualidade baseadas nas estatísticas de coluna da tabela Delta.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q196",
    "text": "Em um KQL Database do Eventhouse, como você verifica o status de saúde geral do database e identifica possíveis problemas de configuração?",
    "options": [
      "Acessando o Azure Diagnostics no portal Azure e consultando logs do tipo `AzureActivity` filtrados pelo recurso Eventhouse para identificar erros de configuração.",
      "Usando `mssparkutils.eventhouse.healthCheck(\"nome_eventhouse\")` que retorna um relatório completo de saúde do KQL Database incluindo métricas de ingestão e queries.",
      "Usando comandos de administração como `.show database NomeDatabase`, `.show tables details`, `.show cluster`, `.show diagnostics` e verificando métricas no painel de administração do Eventhouse no portal Fabric para identificar problemas de ingestão, retenção ou performance.",
      "Executando `DBCC CHECKDB('NomeDatabase')` via SQL Analytics Endpoint do Eventhouse que verifica a integridade de todas as tabelas e índices do KQL Database."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Usando comandos de administração como `.show database NomeDatabase`, `.show tables details`, `.show cluster`, `.show diagnostics` e verificando métricas no painel de administração do Eventhouse no portal Fabric para identificar problemas de ingestão, retenção ou performance.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Para dados de streaming/IoT em alta velocidade: Eventstream captura eventos (IoT Hub, Event Hubs) → Eventhouse processa tempo real com KQL → Lakehouse persistencia via Structured Streaming/Eventstream destination.",
      "puloDoGato": "Eventstream → Eventhouse (tempo real KQL) → Lakehouse (persistencia Delta)",
      "cascasDeBanana": [
        "Stream Analytics via Shortcut: Shortcuts são read-only, não processam streams",
        "Dataflow Gen2 streaming: Dataflows é low-code, não nativo para high-speed IoT",
        "Data Pipeline de 1min: Pipelines batched em 1 minuto não é ideal para IoT contínuo"
      ],
      "dicaOuro": "Real-time streaming = Eventstream + Eventhouse. Persistencia = Delta em Lakehouse"
    }
  },
  {
    "id": "dp700_q197",
    "text": "Como você configura um Data Pipeline do Fabric para enviar uma notificação ao Microsoft Teams quando uma carga de dados é concluída com sucesso?",
    "options": [
      "Usando a atividade \"Send Email\" do pipeline que suporta notificações para canais Teams via endereço de e-mail do canal, sem necessidade de configurar Webhooks externos.",
      "Usando a atividade \"Web\" no path \"On Success\" da última atividade do pipeline, configurando um POST para o Incoming Webhook URL do canal Teams com corpo JSON contendo a mensagem de notificação e métricas da execução como `@{activity('CopyData').output.rowsRead}`.",
      "Configurando a atividade \"Teams Notification\" disponível no catálogo de atividades do Data Pipeline que conecta nativamente ao Teams sem necessidade de Webhook.",
      "Criando um trigger de conclusão no Pipeline que automaticamente posta no canal Teams configurado nas propriedades de notificação do workspace Fabric."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Usando a atividade \"Web\" no path \"On Success\" da última atividade do pipeline, configurando um POST para o Incoming Webhook URL do canal Teams com corpo JSON contendo a mensagem de notificação e métricas da execução como `@{activity('CopyData').output.rowsRead}`.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Usando a atividade \"Web\" no path \"On Success\" da última atividade do pipeline, configurando um POST para o Incoming Webhook URL do canal Teams com corpo JSON contendo a mensagem de notificação e métricas da execução como `@{activity('CopyData').output.rowsRead}`. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Usando a atividade \"Send Email\" do pipeline que suporta notificações para canais Teams via endereço de e-mail do canal, sem necessidade de configurar Webhooks externos.: Esta opção contém erro técnico ou implementação não recomendada",
        "Configurando a atividade \"Teams Notification\" disponível no catálogo de atividades do Data Pipeline que conecta nativamente ao Teams sem necessidade de Webhook.: Esta opção contém erro técnico ou implementação não recomendada",
        "Criando um trigger de conclusão no Pipeline que automaticamente posta no canal Teams configurado nas propriedades de notificação do workspace Fabric.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q198",
    "text": "Em um Notebook Fabric processando múltiplos DataFrames grandes sequencialmente, como você gerencia eficientemente a memória para evitar OutOfMemoryError ao longo da execução?",
    "options": [
      "Configurando `spark.conf.set(\"spark.memory.fraction\", \"0.9\")` para alocar 90% da memória JVM ao Spark, reduzindo o espaço reservado para overhead do sistema operacional.",
      "Convertendo todos os DataFrames para formato Arrow com `df.toArrow()` que usa compressão superior ao PySpark nativo e reduz o consumo de memória em até 80%.",
      "Usando `df.unpersist()` após uso de DataFrames cacheados, `del df_intermediario` seguido de `spark.catalog.clearCache()` para liberar referências e cache, quebrando processamentos grandes em batches menores com filtros temporais, e monitorando o uso de memória via Spark UI durante a execução.",
      "Usando `spark.sparkContext.setSystemProperty(\"spark.executor.memory\", \"32g\")` em tempo de execução para aumentar dinamicamente a memória dos executores sem reiniciar a sessão."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Usando `df.unpersist()` após uso de DataFrames cacheados, `del df_intermediario` seguido de `spark.catalog.clearCache()` para liberar referências e cache, quebrando processamentos grandes em batches menores com filtros temporais, e monitorando o uso de memória via Spark UI durante a execução.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Usando `df.unpersist()` após uso de DataFrames cacheados, `del df_intermediario` seguido de `spark.catalog.clearCache()` para liberar referências e cache, quebrando processamentos grandes em batches menores com filtros temporais, e monitorando o uso de memória via Spark UI durante a execução. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Configurando `spark.conf.set(\"spark.memory.fraction\", \"0.9\")` para alocar 90% da memória JVM ao Spark, reduzindo o espaço reservado para overhead do sistema operacional.: Esta opção contém erro técnico ou implementação não recomendada",
        "Convertendo todos os DataFrames para formato Arrow com `df.toArrow()` que usa compressão superior ao PySpark nativo e reduz o consumo de memória em até 80%.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando `spark.sparkContext.setSystemProperty(\"spark.executor.memory\", \"32g\")` em tempo de execução para aumentar dinamicamente a memória dos executores sem reiniciar a sessão.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q199",
    "text": "Em um Warehouse do Fabric, como você implementa geração dinâmica de relatório pivot onde as colunas variam baseadas nos dados de uma tabela de configuração?",
    "options": [
      "Criando uma View parametrizada no Warehouse que usa `CASE WHEN` para cada valor possível na tabela de configuração, gerada automaticamente pelo Fabric na publicação.",
      "`DECLARE @colunas NVARCHAR(MAX) = (SELECT STRING_AGG(QUOTENAME(valor), ',') FROM config_colunas); DECLARE @sql NVARCHAR(MAX) = N'SELECT * FROM (SELECT chave, valor, metrica FROM dados) src PIVOT (SUM(metrica) FOR valor IN (' + @colunas + ')) pvt'; EXEC sp_executesql @sql`",
      "`SELECT PIVOT_DYNAMIC(dados, groupBy='chave', pivotCol='valor', aggFunc='SUM', valueCol='metrica') FROM config_colunas`",
      "Usando um Notebook PySpark com `df.groupBy(\"chave\").pivot(\"valor\").sum(\"metrica\")` que tem suporte nativo a pivot dinâmico e escreve o resultado no Warehouse via `synapsesql`."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`DECLARE @colunas NVARCHAR(MAX) = (SELECT STRING_AGG(QUOTENAME(valor), ',') FROM config_colunas); DECLARE @sql NVARCHAR(MAX) = N'SELECT * FROM (SELECT chave, valor, metrica FROM dados) src PIVOT (SUM(metrica) FOR valor IN (' + @colunas + ')) pvt'; EXEC sp_executesql @sql`",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "`DECLARE @colunas NVARCHAR(MAX) = (SELECT STRING_AGG(QUOTENAME(valor), ',') FROM config_colunas); DECLARE @sql NVARCHAR(MAX) = N'SELECT * FROM (SELECT chave, valor, metrica FROM dados) src PIVOT (SUM(metrica) FOR valor IN (' + @colunas + ')) pvt'; EXEC sp_executesql @sql` é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Criando uma View parametrizada no Warehouse que usa `CASE WHEN` para cada valor possível na tabela de configuração, gerada automaticamente pelo Fabric na publicação.: Esta opção contém erro técnico ou implementação não recomendada",
        "`SELECT PIVOT_DYNAMIC(dados, groupBy='chave', pivotCol='valor', aggFunc='SUM', valueCol='metrica') FROM config_colunas`: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando um Notebook PySpark com `df.groupBy(\"chave\").pivot(\"valor\").sum(\"metrica\")` que tem suporte nativo a pivot dinâmico e escreve o resultado no Warehouse via `synapsesql`.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q200",
    "text": "Uma empresa precisa implementar uma solução de engenharia de dados no Fabric que ingere 50 fontes heterogêneas (SQL Server on-premises, APIs REST, arquivos S3, streaming IoT), processa 10 TB diários com SLA de 4 horas, e serve dados para 200 analistas e modelos de ML. Qual arquitetura é mais adequada?\n## LOTE 5 — Questões 201 a 250 | DP-700",
    "options": [
      "Eventhouse como único data store para todas as fontes (batch e streaming) com KQL como interface universal para analistas e modelos ML → Shortcuts para acesso externo → sem necessidade de Lakehouse ou Warehouse separados.",
      "Azure Data Factory para todas as ingestões → Azure Synapse Analytics para processamento → Azure SQL Database para analistas → Power BI Premium para relatórios; migração gradual para Fabric em 18 meses após estabilização da plataforma.",
      "Gateway on-premises para SQL Server + Shortcuts para S3 + Eventstream para IoT → Lakehouse Bronze (landing zone) → Pipelines + Notebooks PySpark para transformação Silver/Gold com Delta Lake → Warehouse para analistas SQL + SQL Analytics Endpoint para queries ad-hoc + MLflow no Fabric para modelos ML → Deployment Pipelines para governança dev/test/prod + Workspace Logging + Capacity Metrics para monitoramento.",
      "Um único Warehouse para todas as fontes e transformações → modelo semântico Direct Lake único para analistas e ML → Eventstream apenas para IoT com destino direto ao Warehouse sem Lakehouse intermediário."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Gateway on-premises para SQL Server + Shortcuts para S3 + Eventstream para IoT → Lakehouse Bronze (landing zone) → Pipelines + Notebooks PySpark para transformação Silver/Gold com Delta Lake → Warehouse para analistas SQL + SQL Analytics Endpoint para queries ad-hoc + MLflow no Fabric para modelos ML → Deployment Pipelines para governança dev/test/prod + Workspace Logging + Capacity Metrics para monitoramento.",
      "intro": "Entendendo Deployment Pipelines e transformação de parâmetros",
      "papoReto": "Para dados de streaming/IoT em alta velocidade: Eventstream captura eventos (IoT Hub, Event Hubs) → Eventhouse processa tempo real com KQL → Lakehouse persistencia via Structured Streaming/Eventstream destination.",
      "puloDoGato": "Eventstream → Eventhouse (tempo real KQL) → Lakehouse (persistencia Delta)",
      "cascasDeBanana": [
        "Stream Analytics via Shortcut: Shortcuts são read-only, não processam streams",
        "Dataflow Gen2 streaming: Dataflows é low-code, não nativo para high-speed IoT",
        "Data Pipeline de 1min: Pipelines batched em 1 minuto não é ideal para IoT contínuo"
      ],
      "dicaOuro": "Real-time streaming = Eventstream + Eventhouse. Persistencia = Delta em Lakehouse"
    }
  },
  {
    "id": "dp700_q201",
    "text": "Quais versões de Spark Runtime estão disponíveis no Microsoft Fabric e como a escolha impacta as bibliotecas disponíveis?",
    "options": [
      "A versão do Spark Runtime é determinada automaticamente pelo tipo de workload; notebooks de ML usam Spark 3.5 e notebooks de engenharia usam Spark 3.3 sem possibilidade de configuração manual.",
      "Há apenas um runtime disponível no Fabric (Spark 3.3); versões mais recentes do Spark requerem uso do Azure Databricks integrado ao workspace via Shortcut.",
      "O Fabric usa sempre a versão mais recente do Spark automaticamente; não é possível fixar uma versão de runtime para garantir compatibilidade de código entre atualizações.",
      "O Fabric oferece múltiplos runtimes (ex: Runtime 1.1 com Spark 3.3, Runtime 1.2 com Spark 3.4, Runtime 1.3 com Spark 3.5); cada runtime inclui versões específicas de Python, Delta Lake, MLflow e bibliotecas pré-instaladas; runtimes mais recentes oferecem melhor performance e suporte a funcionalidades mais novas do Delta Lake."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Implementar e gerenciar uma solução analítica",
    "explanation": {
      "respostaCerta": "O Fabric oferece múltiplos runtimes (ex: Runtime 1.1 com Spark 3.3, Runtime 1.2 com Spark 3.4, Runtime 1.3 com Spark 3.5); cada runtime inclui versões específicas de Python, Delta Lake, MLflow e bibliotecas pré-instaladas; runtimes mais recentes oferecem melhor performance e suporte a funcionalidades mais novas do Delta Lake.",
      "intro": "Entendendo Shortcuts como virtual links vs. Mirror para cópias reais",
      "papoReto": "O Fabric oferece múltiplos runtimes (ex: Runtime 1.1 com Spark 3.3, Runtime 1.2 com Spark 3.4, Runtime 1.3 com Spark 3.5); cada runtime inclui versões específicas de Python, Delta Lake, MLflow e bibliotecas pré-instaladas; runtimes mais recentes oferecem melhor performance e suporte a funcionalidades mais novas do Delta Lake. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "A versão do Spark Runtime é determinada automaticamente pelo tipo de workload; notebooks de ML usam Spark 3.5 e notebooks de engenharia usam Spark 3.3 sem possibilidade de configuração manual.: Esta opção contém erro técnico ou implementação não recomendada",
        "Há apenas um runtime disponível no Fabric (Spark 3.3); versões mais recentes do Spark requerem uso do Azure Databricks integrado ao workspace via Shortcut.: Esta opção contém erro técnico ou implementação não recomendada",
        "O Fabric usa sempre a versão mais recente do Spark automaticamente; não é possível fixar uma versão de runtime para garantir compatibilidade de código entre atualizações.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q202",
    "text": "Em um Notebook Fabric, como você cria uma view temporária de um DataFrame PySpark para usá-la em queries Spark SQL dentro da mesma sessão?",
    "options": [
      "`df.registerTempTable(\"nome_view\")`",
      "`df.toDF(\"nome_view\")`",
      "`spark.catalog.createTable(\"nome_view\", df)`",
      "`df.createOrReplaceTempView(\"nome_view\")`"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`df.createOrReplaceTempView(\"nome_view\")`",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "`df.createOrReplaceTempView(\"nome_view\")` é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "`df.registerTempTable(\"nome_view\")`: Esta opção contém erro técnico ou implementação não recomendada",
        "`df.toDF(\"nome_view\")`: Esta opção contém erro técnico ou implementação não recomendada",
        "`spark.catalog.createTable(\"nome_view\", df)`: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q203",
    "text": "O que é o Delta Cache no contexto do Microsoft Fabric e como ele difere do cache em memória do Spark?",
    "options": [
      "Delta Cache armazena apenas os metadados e estatísticas de colunas das tabelas Delta, não os dados em si; os dados sempre são lidos diretamente do OneLake a cada query.",
      "Delta Cache (também chamado de disk cache) armazena cópias locais descomprimidas de arquivos Parquet lidos do armazenamento remoto no disco SSD dos nós Spark, tornando leituras repetidas muito mais rápidas sem consumir memória JVM; difere do cache em memória (`df.cache()`) que armazena dados desserializados na heap JVM dos executores.",
      "Delta Cache é habilitado automaticamente para todas as tabelas Delta no Fabric e não pode ser configurado manualmente; é gerenciado pelo motor de armazenamento do OneLake.",
      "Delta Cache é o mesmo que `df.cache()` em modo MEMORY_AND_DISK; o nome \"Delta\" refere-se ao armazenamento Delta Lake subjacente, não a um mecanismo de cache diferente."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Delta Cache (também chamado de disk cache) armazena cópias locais descomprimidas de arquivos Parquet lidos do armazenamento remoto no disco SSD dos nós Spark, tornando leituras repetidas muito mais rápidas sem consumir memória JVM; difere do cache em memória (`df.cache()`) que armazena dados desserializados na heap JVM dos executores.",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "Delta Cache (também chamado de disk cache) armazena cópias locais descomprimidas de arquivos Parquet lidos do armazenamento remoto no disco SSD dos nós Spark, tornando leituras repetidas muito mais rápidas sem consumir memória JVM; difere do cache em memória (`df.cache()`) que armazena dados desserializados na heap JVM dos executores. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Delta Cache armazena apenas os metadados e estatísticas de colunas das tabelas Delta, não os dados em si; os dados sempre são lidos diretamente do OneLake a cada query.: Esta opção contém erro técnico ou implementação não recomendada",
        "Delta Cache é habilitado automaticamente para todas as tabelas Delta no Fabric e não pode ser configurado manualmente; é gerenciado pelo motor de armazenamento do OneLake.: Esta opção contém erro técnico ou implementação não recomendada",
        "Delta Cache é o mesmo que `df.cache()` em modo MEMORY_AND_DISK; o nome \"Delta\" refere-se ao armazenamento Delta Lake subjacente, não a um mecanismo de cache diferente.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q204",
    "text": "Em um Data Pipeline do Fabric, como você copia arquivos binários (PDFs, imagens) de um Azure Blob Storage para a seção Files de um Lakehouse preservando a estrutura de pastas?",
    "options": [
      "Arquivos binários não podem ser copiados para a seção Files de um Lakehouse via Data Pipeline; apenas formatos estruturados (CSV, Parquet, Delta) são suportados como destino no Lakehouse.",
      "Usando a atividade Copy Data com dataset de origem do tipo \"Binary\" no Azure Blob Storage e dataset de destino do tipo \"Binary\" no Lakehouse (seção Files), habilitando \"Preserve hierarchy\" nas configurações de cópia para manter a estrutura de pastas original.",
      "Usando a atividade \"File Transfer\" do pipeline que suporta cópia de qualquer tipo de arquivo com preservação automática de metadados e estrutura de diretórios.",
      "Usando um Shortcut no Lakehouse apontando para o Azure Blob Storage e depois copiando via notebook com `mssparkutils.fs.cp(\"origem\", \"destino\", recurse=True)` para preservar a hierarquia."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Usando a atividade Copy Data com dataset de origem do tipo \"Binary\" no Azure Blob Storage e dataset de destino do tipo \"Binary\" no Lakehouse (seção Files), habilitando \"Preserve hierarchy\" nas configurações de cópia para manter a estrutura de pastas original.",
      "intro": "Entendendo Shortcuts como virtual links vs. Mirror para cópias reais",
      "papoReto": "Usando a atividade Copy Data com dataset de origem do tipo \"Binary\" no Azure Blob Storage e dataset de destino do tipo \"Binary\" no Lakehouse (seção Files), habilitando \"Preserve hierarchy\" nas configurações de cópia para manter a estrutura de pastas original. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Arquivos binários não podem ser copiados para a seção Files de um Lakehouse via Data Pipeline; apenas formatos estruturados (CSV, Parquet, Delta) são suportados como destino no Lakehouse.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando a atividade \"File Transfer\" do pipeline que suporta cópia de qualquer tipo de arquivo com preservação automática de metadados e estrutura de diretórios.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando um Shortcut no Lakehouse apontando para o Azure Blob Storage e depois copiando via notebook com `mssparkutils.fs.cp(\"origem\", \"destino\", recurse=True)` para preservar a hierarquia.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q205",
    "text": "O que é o mecanismo de \"burst\" (pico) da capacity Fabric e como ele deve ser considerado no planejamento de cargas de trabalho intensas?",
    "options": [
      "Burst só está disponível em SKUs F64 ou superior; capacities menores têm consumo estritamente limitado ao SKU contratado sem possibilidade de ultrapassar o limite.",
      "Burst é um mecanismo de escalonamento automático que adiciona CUs permanentemente à capacity quando o uso excede 90% por mais de 30 minutos; o custo adicional é cobrado automaticamente na fatura Azure.",
      "Burst permite que workloads utilizem temporariamente mais CUs do que o limite contratado do SKU; o consumo extra é \"emprestado\" de períodos futuros e deve ser \"pago\" reduzindo a disponibilidade nos períodos seguintes; workloads em background têm smoothing de 24h mas operações interativas consomem instantaneamente sem burst estendido.",
      "Burst é desabilitado por padrão e deve ser habilitado pelo administrador do tenant para cada capacity; sem burst habilitado, queries são canceladas quando a capacity atinge 100% de utilização."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Burst permite que workloads utilizem temporariamente mais CUs do que o limite contratado do SKU; o consumo extra é \"emprestado\" de períodos futuros e deve ser \"pago\" reduzindo a disponibilidade nos períodos seguintes; workloads em background têm smoothing de 24h mas operações interativas consomem instantaneamente sem burst estendido.",
      "intro": "Entendendo Fabric workspace e gerenciamento de recursos",
      "papoReto": "Burst permite que workloads utilizem temporariamente mais CUs do que o limite contratado do SKU; o consumo extra é \"emprestado\" de períodos futuros e deve ser \"pago\" reduzindo a disponibilidade nos períodos seguintes; workloads em background têm smoothing de 24h mas operações interativas consomem instantaneamente sem burst estendido. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Burst só está disponível em SKUs F64 ou superior; capacities menores têm consumo estritamente limitado ao SKU contratado sem possibilidade de ultrapassar o limite.: Esta opção contém erro técnico ou implementação não recomendada",
        "Burst é um mecanismo de escalonamento automático que adiciona CUs permanentemente à capacity quando o uso excede 90% por mais de 30 minutos; o custo adicional é cobrado automaticamente na fatura Azure.: Esta opção contém erro técnico ou implementação não recomendada",
        "Burst é desabilitado por padrão e deve ser habilitado pelo administrador do tenant para cada capacity; sem burst habilitado, queries são canceladas quando a capacity atinge 100% de utilização.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q206",
    "text": "Em PySpark no Fabric, como você implementa deduplicação durante um MERGE em uma tabela Delta usando uma janela de tempo para manter apenas o registro mais recente por chave?",
    "options": [
      "Usando `df.dropDuplicates([\"id\"]).write.format(\"delta\").mode(\"overwrite\").option(\"replaceWhere\", \"id IN (SELECT id FROM df)\")` que substitui apenas os registros duplicados.",
      "Adicionando `WHEN MATCHED AND src.updated_at > dest.updated_at THEN UPDATE SET *` na condição do MERGE que automaticamente mantém o registro mais recente sem pré-deduplicação do DataFrame fonte.",
      "Configurando `spark.conf.set(\"delta.merge.deduplication.enabled\", \"true\")` que ativa deduplicação automática por chave primária durante operações MERGE no Delta Lake.",
      "Primeiro deduplica o DataFrame de fonte: `df_dedup = df.withColumn(\"rn\", row_number().over(Window.partitionBy(\"id\").orderBy(col(\"updated_at\").desc()))).filter(col(\"rn\")==1).drop(\"rn\")`; depois executa o MERGE com `whenMatchedUpdateAll().whenNotMatchedInsertAll()` usando o DataFrame deduplicado como fonte."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Primeiro deduplica o DataFrame de fonte: `df_dedup = df.withColumn(\"rn\", row_number().over(Window.partitionBy(\"id\").orderBy(col(\"updated_at\").desc()))).filter(col(\"rn\")==1).drop(\"rn\")`; depois executa o MERGE com `whenMatchedUpdateAll().whenNotMatchedInsertAll()` usando o DataFrame deduplicado como fonte.",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "Primeiro deduplica o DataFrame de fonte: `df_dedup = df.withColumn(\"rn\", row_number().over(Window.partitionBy(\"id\").orderBy(col(\"updated_at\").desc()))).filter(col(\"rn\")==1).drop(\"rn\")`; depois executa o MERGE com `whenMatchedUpdateAll().whenNotMatchedInsertAll()` usando o DataFrame deduplicado como fonte. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Usando `df.dropDuplicates([\"id\"]).write.format(\"delta\").mode(\"overwrite\").option(\"replaceWhere\", \"id IN (SELECT id FROM df)\")` que substitui apenas os registros duplicados.: Esta opção contém erro técnico ou implementação não recomendada",
        "Adicionando `WHEN MATCHED AND src.updated_at > dest.updated_at THEN UPDATE SET *` na condição do MERGE que automaticamente mantém o registro mais recente sem pré-deduplicação do DataFrame fonte.: Esta opção contém erro técnico ou implementação não recomendada",
        "Configurando `spark.conf.set(\"delta.merge.deduplication.enabled\", \"true\")` que ativa deduplicação automática por chave primária durante operações MERGE no Delta Lake.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q207",
    "text": "Qual é a diferença entre as permissões \"ReadAll\" e \"Read\" ao compartilhar um Lakehouse individualmente no Fabric e quando cada uma é adequada?",
    "options": [
      "\"Read\" acessa apenas a seção Tables do Lakehouse; \"ReadAll\" acessa tanto Tables quanto Files; a distinção é importante para usuários que precisam acessar dados brutos na zona de landing.",
      "\"Read\" permite apenas SELECT em tabelas; \"ReadAll\" permite SELECT, INSERT, UPDATE e DELETE",
      "São equivalentes em termos de acesso; \"ReadAll\" é apenas um alias criado para compatibilidade com permissões legadas do Azure Data Lake Storage Gen2.",
      "\"Read\" concede acesso ao SQL Analytics Endpoint do Lakehouse para queries SQL, mas não acesso direto aos arquivos Delta no OneLake; \"ReadAll\" concede acesso tanto ao SQL endpoint quanto aos arquivos Delta diretamente via APIs do OneLake (ABFSS), necessário para consumo via notebooks PySpark de outros workspaces."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar uma solução analítica",
    "explanation": {
      "respostaCerta": "\"Read\" concede acesso ao SQL Analytics Endpoint do Lakehouse para queries SQL, mas não acesso direto aos arquivos Delta no OneLake; \"ReadAll\" concede acesso tanto ao SQL endpoint quanto aos arquivos Delta diretamente via APIs do OneLake (ABFSS), necessário para consumo via notebooks PySpark de outros workspaces.",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "\"Read\" concede acesso ao SQL Analytics Endpoint do Lakehouse para queries SQL, mas não acesso direto aos arquivos Delta no OneLake; \"ReadAll\" concede acesso tanto ao SQL endpoint quanto aos arquivos Delta diretamente via APIs do OneLake (ABFSS), necessário para consumo via notebooks PySpark de outros workspaces. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "\"Read\" acessa apenas a seção Tables do Lakehouse; \"ReadAll\" acessa tanto Tables quanto Files; a distinção é importante para usuários que precisam acessar dados brutos na zona de landing.: Esta opção contém erro técnico ou implementação não recomendada",
        "\"Read\" permite apenas SELECT em tabelas; \"ReadAll\" permite SELECT, INSERT, UPDATE e DELETE: Esta opção contém erro técnico ou implementação não recomendada",
        "São equivalentes em termos de acesso; \"ReadAll\" é apenas um alias criado para compatibilidade com permissões legadas do Azure Data Lake Storage Gen2.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q208",
    "text": "O que é uma Update Policy em um KQL Database do Fabric e como ela automatiza transformações de dados durante a ingestão?",
    "options": [
      "Uma Update Policy é uma transformação KQL que é executada automaticamente quando dados são ingeridos em uma tabela de origem, aplicando a query definida e inserindo os resultados transformados em uma tabela de destino; criada com `.alter table DestinationTable policy update @'[{\"IsEnabled\":true,\"Source\":\"SourceTable\",\"Query\":\"query KQL\"}]'`.",
      "Uma Update Policy define a frequência de atualização automática de Materialized Views no KQL Database, controlando quando o motor recalcula as agregações pré-computadas.",
      "Uma Update Policy é uma regra de atualização incremental que sincroniza automaticamente uma tabela KQL com uma fonte externa (Lakehouse ou Warehouse) quando novos dados são detectados.",
      "Uma Update Policy é uma constraint de validação que verifica se os dados ingeridos atendem critérios específicos antes de confirmar a inserção na tabela KQL de destino."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Uma Update Policy é uma transformação KQL que é executada automaticamente quando dados são ingeridos em uma tabela de origem, aplicando a query definida e inserindo os resultados transformados em uma tabela de destino; criada com `.alter table DestinationTable policy update @'[{\"IsEnabled\":true,\"Source\":\"SourceTable\",\"Query\":\"query KQL\"}]'`.",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "Uma Update Policy é uma transformação KQL que é executada automaticamente quando dados são ingeridos em uma tabela de origem, aplicando a query definida e inserindo os resultados transformados em uma tabela de destino; criada com `.alter table DestinationTable policy update @'[{\"IsEnabled\":true,\"Source\":\"SourceTable\",\"Query\":\"query KQL\"}]'`. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Uma Update Policy define a frequência de atualização automática de Materialized Views no KQL Database, controlando quando o motor recalcula as agregações pré-computadas.: Esta opção contém erro técnico ou implementação não recomendada",
        "Uma Update Policy é uma regra de atualização incremental que sincroniza automaticamente uma tabela KQL com uma fonte externa (Lakehouse ou Warehouse) quando novos dados são detectados.: Esta opção contém erro técnico ou implementação não recomendada",
        "Uma Update Policy é uma constraint de validação que verifica se os dados ingeridos atendem critérios específicos antes de confirmar a inserção na tabela KQL de destino.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q209",
    "text": "Um Notebook Fabric está sendo encerrado automaticamente após 90 minutos mesmo com processamento em andamento. Como você resolve esse problema?",
    "options": [
      "Habilitando o modo \"Long Running Jobs\" no Admin Portal do Fabric que aumenta automaticamente o timeout para 24 horas para todos os notebooks do workspace.",
      "Adicionando `spark.conf.set(\"spark.sessionTimeout\", \"0\")` para desabilitar o timeout da sessão Spark e permitir execuções ilimitadas independente da duração.",
      "Configurando o timeout da sessão Spark nas configurações do workspace (Session timeout) para um valor maior, ou otimizando o código para processar em batches menores que completam dentro do timeout; também verificar se o notebook está usando High Concurrency mode que tem configurações de timeout diferentes.",
      "Dividindo o notebook em múltiplos notebooks encadeados via `mssparkutils.notebook.run()` que redefinem o contador de timeout a cada chamada, contornando o limite de 90 minutos."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Configurando o timeout da sessão Spark nas configurações do workspace (Session timeout) para um valor maior, ou otimizando o código para processar em batches menores que completam dentro do timeout; também verificar se o notebook está usando High Concurrency mode que tem configurações de timeout diferentes.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Configurando o timeout da sessão Spark nas configurações do workspace (Session timeout) para um valor maior, ou otimizando o código para processar em batches menores que completam dentro do timeout; também verificar se o notebook está usando High Concurrency mode que tem configurações de timeout diferentes. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Habilitando o modo \"Long Running Jobs\" no Admin Portal do Fabric que aumenta automaticamente o timeout para 24 horas para todos os notebooks do workspace.: Esta opção contém erro técnico ou implementação não recomendada",
        "Adicionando `spark.conf.set(\"spark.sessionTimeout\", \"0\")` para desabilitar o timeout da sessão Spark e permitir execuções ilimitadas independente da duração.: Esta opção contém erro técnico ou implementação não recomendada",
        "Dividindo o notebook em múltiplos notebooks encadeados via `mssparkutils.notebook.run()` que redefinem o contador de timeout a cada chamada, contornando o limite de 90 minutos.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q210",
    "text": "O que são Generated Columns no Delta Lake e como você as cria em uma tabela no Lakehouse do Fabric?",
    "options": [
      "Colunas calculadas automaticamente baseadas em expressões sobre outras colunas da tabela; criadas com `spark.sql(\"CREATE TABLE tabela (data DATE, ano INT GENERATED ALWAYS AS (YEAR(data)), mes INT GENERATED ALWAYS AS (MONTH(data))) USING DELTA\")`",
      "Generated Columns são colunas calculadas em tempo de leitura que não ocupam espaço de armazenamento; criadas com `ALTER TABLE tabela ADD COLUMN nome AS expressao VIRTUAL` no SQL Analytics Endpoint.",
      "Generated Columns são equivalentes a colunas calculadas do Power BI criadas diretamente no nível de armazenamento Delta para evitar cálculos repetidos no modelo semântico.",
      "Generated Columns são colunas criadas automaticamente pelo Delta Lake ao detectar padrões de acesso frequentes, como extrações de partes de data que podem acelerar queries de filtro."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Colunas calculadas automaticamente baseadas em expressões sobre outras colunas da tabela; criadas com `spark.sql(\"CREATE TABLE tabela (data DATE, ano INT GENERATED ALWAYS AS (YEAR(data)), mes INT GENERATED ALWAYS AS (MONTH(data))) USING DELTA\")`",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "Colunas calculadas automaticamente baseadas em expressões sobre outras colunas da tabela; criadas com `spark.sql(\"CREATE TABLE tabela (data DATE, ano INT GENERATED ALWAYS AS (YEAR(data)), mes INT GENERATED ALWAYS AS (MONTH(data))) USING DELTA\")` é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Generated Columns são colunas calculadas em tempo de leitura que não ocupam espaço de armazenamento; criadas com `ALTER TABLE tabela ADD COLUMN nome AS expressao VIRTUAL` no SQL Analytics Endpoint.: Esta opção contém erro técnico ou implementação não recomendada",
        "Generated Columns são equivalentes a colunas calculadas do Power BI criadas diretamente no nível de armazenamento Delta para evitar cálculos repetidos no modelo semântico.: Esta opção contém erro técnico ou implementação não recomendada",
        "Generated Columns são colunas criadas automaticamente pelo Delta Lake ao detectar padrões de acesso frequentes, como extrações de partes de data que podem acelerar queries de filtro.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q211",
    "text": "O que é o Starter Pool no Microsoft Fabric e como ele melhora a experiência de desenvolvimento em notebooks?",
    "options": [
      "O Starter Pool é um plano de capacity gratuito com recursos limitados disponível para experimentação; workspaces em Starter Pool têm limite de 10 GB de armazenamento e 2 CUs de processamento.",
      "O Starter Pool é um conjunto de nós Spark pré-aquecidos mantidos disponíveis pelo Fabric para inicialização instantânea de sessões Spark em notebooks; reduz o tempo de cold start de vários minutos para segundos, ideal para desenvolvimento interativo e exploração de dados.",
      "O Starter Pool é um conjunto de bibliotecas Python pré-instaladas disponíveis em todos os notebooks do Fabric sem necessidade de instalação; inclui pandas, scikit-learn, matplotlib e outras bibliotecas comuns de data science.",
      "O Starter Pool é um workspace de exemplo criado automaticamente para novos usuários do Fabric com notebooks, pipelines e dados de demonstração para aprendizado inicial da plataforma."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "O Starter Pool é um conjunto de nós Spark pré-aquecidos mantidos disponíveis pelo Fabric para inicialização instantânea de sessões Spark em notebooks; reduz o tempo de cold start de vários minutos para segundos, ideal para desenvolvimento interativo e exploração de dados.",
      "intro": "Entendendo Fabric workspace e gerenciamento de recursos",
      "papoReto": "O Starter Pool é um conjunto de nós Spark pré-aquecidos mantidos disponíveis pelo Fabric para inicialização instantânea de sessões Spark em notebooks; reduz o tempo de cold start de vários minutos para segundos, ideal para desenvolvimento interativo e exploração de dados. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "O Starter Pool é um plano de capacity gratuito com recursos limitados disponível para experimentação; workspaces em Starter Pool têm limite de 10 GB de armazenamento e 2 CUs de processamento.: Esta opção contém erro técnico ou implementação não recomendada",
        "O Starter Pool é um conjunto de bibliotecas Python pré-instaladas disponíveis em todos os notebooks do Fabric sem necessidade de instalação; inclui pandas, scikit-learn, matplotlib e outras bibliotecas comuns de data science.: Esta opção contém erro técnico ou implementação não recomendada",
        "O Starter Pool é um workspace de exemplo criado automaticamente para novos usuários do Fabric com notebooks, pipelines e dados de demonstração para aprendizado inicial da plataforma.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q212",
    "text": "No Fabric Warehouse, como você carrega dados de um arquivo CSV armazenado no OneLake usando COPY INTO para ingestão bulk eficiente?",
    "options": [
      "`LOAD DATA INFILE 'Files/dados.csv' INTO TABLE dbo.tabela_destino FIELDS TERMINATED BY ',' IGNORE 1 ROWS`",
      "`BULK INSERT dbo.tabela_destino FROM 'Files/dados.csv' WITH (DATAFILETYPE='char', FIELDTERMINATOR=',', FIRSTROW=2)`",
      "`COPY INTO dbo.tabela_destino FROM 'https://onelake.dfs.fabric.microsoft.com/workspace/lakehouse.Lakehouse/Files/dados.csv' WITH (FILE_TYPE = 'CSV', FIRSTROW = 2, FIELDTERMINATOR = ',', ROWTERMINATOR = '\\n')`",
      "`INSERT INTO dbo.tabela_destino SELECT * FROM OPENROWSET(BULK 'https://onelake.dfs.fabric.microsoft.com/path/dados.csv', FORMAT='CSV', HEADER_ROW=TRUE)`"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`COPY INTO dbo.tabela_destino FROM 'https://onelake.dfs.fabric.microsoft.com/workspace/lakehouse.Lakehouse/Files/dados.csv' WITH (FILE_TYPE = 'CSV', FIRSTROW = 2, FIELDTERMINATOR = ',', ROWTERMINATOR = '\\n')`",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "`COPY INTO dbo.tabela_destino FROM 'https://onelake.dfs.fabric.microsoft.com/workspace/lakehouse.Lakehouse/Files/dados.csv' WITH (FILE_TYPE = 'CSV', FIRSTROW = 2, FIELDTERMINATOR = ',', ROWTERMINATOR = '\\n')` é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "`LOAD DATA INFILE 'Files/dados.csv' INTO TABLE dbo.tabela_destino FIELDS TERMINATED BY ',' IGNORE 1 ROWS`: Esta opção contém erro técnico ou implementação não recomendada",
        "`BULK INSERT dbo.tabela_destino FROM 'Files/dados.csv' WITH (DATAFILETYPE='char', FIELDTERMINATOR=',', FIRSTROW=2)`: Esta opção contém erro técnico ou implementação não recomendada",
        "`INSERT INTO dbo.tabela_destino SELECT * FROM OPENROWSET(BULK 'https://onelake.dfs.fabric.microsoft.com/path/dados.csv', FORMAT='CSV', HEADER_ROW=TRUE)`: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q213",
    "text": "Em um Notebook Fabric, como você acessa programaticamente as métricas de execução Spark (como tempo de cada stage e bytes processados) para logging de performance?",
    "options": [
      "Executando `mssparkutils.spark.getMetrics(jobId)` após cada ação Spark que retorna um relatório JSON com métricas completas do job especificado.",
      "Usando `spark.metrics.get()` que retorna um dicionário com todas as métricas da sessão atual incluindo tempo de CPU, I/O e shuffle por stage executado.",
      "Usando `spark.sparkContext.statusTracker()` para obter informações de jobs e stages em andamento, ou registrando um `SparkListener` customizado via `spark.sparkContext.addSparkListener()` para capturar eventos de conclusão de stage com métricas detalhadas.",
      "Consultando a tabela `spark.catalog.listStages()` que mantém histórico de todos os stages executados na sessão com métricas de performance detalhadas."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Usando `spark.sparkContext.statusTracker()` para obter informações de jobs e stages em andamento, ou registrando um `SparkListener` customizado via `spark.sparkContext.addSparkListener()` para capturar eventos de conclusão de stage com métricas detalhadas.",
      "intro": "Entendendo Deployment Pipelines e transformação de parâmetros",
      "papoReto": "Usando `spark.sparkContext.statusTracker()` para obter informações de jobs e stages em andamento, ou registrando um `SparkListener` customizado via `spark.sparkContext.addSparkListener()` para capturar eventos de conclusão de stage com métricas detalhadas. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Executando `mssparkutils.spark.getMetrics(jobId)` após cada ação Spark que retorna um relatório JSON com métricas completas do job especificado.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando `spark.metrics.get()` que retorna um dicionário com todas as métricas da sessão atual incluindo tempo de CPU, I/O e shuffle por stage executado.: Esta opção contém erro técnico ou implementação não recomendada",
        "Consultando a tabela `spark.catalog.listStages()` que mantém histórico de todos os stages executados na sessão com métricas de performance detalhadas.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q214",
    "text": "Na atividade Lookup de um Data Pipeline do Fabric, como você configura para retornar múltiplas linhas em vez de apenas a primeira?",
    "options": [
      "Usando múltiplas atividades Lookup em paralelo, cada uma com um filtro diferente, e combinando os resultados via atividade \"Union\" disponível no catálogo de atividades do pipeline.",
      "Desabilitando a opção \"First row only\" nas configurações da atividade Lookup, que retorna todas as linhas da query como um array em `@activity('Lookup').output.value`; iterável pela atividade ForEach com `@item()` referenciando cada elemento do array.",
      "Substituindo a atividade Lookup por uma atividade Script que executa a query e armazena o resultado em uma variável de pipeline do tipo Array para uso nas atividades seguintes.",
      "Configurando \"Return all rows = true\" na propriedade avançada da atividade Lookup que alterna o comportamento para retornar o resultado completo como dataset."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Desabilitando a opção \"First row only\" nas configurações da atividade Lookup, que retorna todas as linhas da query como um array em `@activity('Lookup').output.value`; iterável pela atividade ForEach com `@item()` referenciando cada elemento do array.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Desabilitando a opção \"First row only\" nas configurações da atividade Lookup, que retorna todas as linhas da query como um array em `@activity('Lookup').output.value`; iterável pela atividade ForEach com `@item()` referenciando cada elemento do array. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Usando múltiplas atividades Lookup em paralelo, cada uma com um filtro diferente, e combinando os resultados via atividade \"Union\" disponível no catálogo de atividades do pipeline.: Esta opção contém erro técnico ou implementação não recomendada",
        "Substituindo a atividade Lookup por uma atividade Script que executa a query e armazena o resultado em uma variável de pipeline do tipo Array para uso nas atividades seguintes.: Esta opção contém erro técnico ou implementação não recomendada",
        "Configurando \"Return all rows = true\" na propriedade avançada da atividade Lookup que alterna o comportamento para retornar o resultado completo como dataset.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q215",
    "text": "Quais são as melhores práticas de escrita de queries KQL no Fabric para maximizar o desempenho em tabelas com bilhões de registros?",
    "options": [
      "Criar índices explícitos em colunas de alta cardinalidade com `.create index on table NomeTabela (coluna)` antes de executar queries com filtros nessas colunas.",
      "Aplicar filtros temporais primeiro com `where timestamp > ago(Xd)` (aproveitando o índice temporal nativo), usar `project` para selecionar apenas colunas necessárias, evitar `count()` sem filtros, usar `summarize` antes de `join` para reduzir cardinalidade, e preferir `has` sobre `contains` para busca em strings.",
      "Usar sempre `take 1000000` no início da query para limitar o escaneamento da tabela a 1 milhão de registros antes de aplicar filtros e agregações subsequentes.",
      "Usar `hint.num_partitions=1` para forçar execução single-thread em queries complexas, evitando overhead de coordenação entre partições que degrada performance em tabelas grandes."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Aplicar filtros temporais primeiro com `where timestamp > ago(Xd)` (aproveitando o índice temporal nativo), usar `project` para selecionar apenas colunas necessárias, evitar `count()` sem filtros, usar `summarize` antes de `join` para reduzir cardinalidade, e preferir `has` sobre `contains` para busca em strings.",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "Aplicar filtros temporais primeiro com `where timestamp > ago(Xd)` (aproveitando o índice temporal nativo), usar `project` para selecionar apenas colunas necessárias, evitar `count()` sem filtros, usar `summarize` antes de `join` para reduzir cardinalidade, e preferir `has` sobre `contains` para busca em strings. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Criar índices explícitos em colunas de alta cardinalidade com `.create index on table NomeTabela (coluna)` antes de executar queries com filtros nessas colunas.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usar sempre `take 1000000` no início da query para limitar o escaneamento da tabela a 1 milhão de registros antes de aplicar filtros e agregações subsequentes.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usar `hint.num_partitions=1` para forçar execução single-thread em queries complexas, evitando overhead de coordenação entre partições que degrada performance em tabelas grandes.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q216",
    "text": "Como você implementa um pipeline incremental completo usando Change Data Feed (CDF) do Delta Lake no Fabric para sincronizar alterações de uma tabela source para uma tabela target?",
    "options": [
      "`spark.readStream.format(\"delta\").option(\"readChangeFeed\",\"true\").load(\"Tables/source\").writeStream.format(\"delta\").outputMode(\"append\").start(\"Tables/target\")`",
      "`changes = spark.read.format(\"delta\").option(\"readChangeFeed\", \"true\").option(\"startingVersion\", get_last_version()).table(\"source\"); inserts = changes.filter(col(\"_change_type\")==\"insert\"); updates = changes.filter(col(\"_change_type\")==\"update_postimage\"); deletes = changes.filter(col(\"_change_type\")==\"delete\"); DeltaTable.forName(spark,\"target\").alias(\"t\").merge(inserts.union(updates).alias(\"s\"),\"t.id=s.id\").whenMatchedUpdateAll().whenNotMatchedInsertAll().execute(); target.delete(col(\"id\").isin([r.id for r in deletes.collect()]))`",
      "`DeltaTable.forName(spark,\"source\").restoreToVersion(last_version).write.format(\"delta\").mode(\"overwrite\").saveAsTable(\"target\")`",
      "Usando `MERGE INTO target USING (SELECT * FROM source_changes WHERE _commit_timestamp > last_sync) ON id WHEN MATCHED THEN UPDATE WHEN NOT MATCHED THEN INSERT` sem filtrar por `_change_type`, processando incorretamente todas as versões do registro."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`changes = spark.read.format(\"delta\").option(\"readChangeFeed\", \"true\").option(\"startingVersion\", get_last_version()).table(\"source\"); inserts = changes.filter(col(\"_change_type\")==\"insert\"); updates = changes.filter(col(\"_change_type\")==\"update_postimage\"); deletes = changes.filter(col(\"_change_type\")==\"delete\"); DeltaTable.forName(spark,\"target\").alias(\"t\").merge(inserts.union(updates).alias(\"s\"),\"t.id=s.id\").whenMatchedUpdateAll().whenNotMatchedInsertAll().execute(); target.delete(col(\"id\").isin([r.id for r in deletes.collect()]))`",
      "intro": "Entendendo Git integration e versionamento de artefatos",
      "papoReto": "Carga incremental usa watermark (timestamp, ID sequencial, CDC) para identificar registros novos/modificados desde última execução. Lookup recupera último watermark → Copy filtra com watermark → Procedure atualiza watermark. Apenas novos dados são processados.",
      "puloDoGato": "Watermark = identifica último processado. Lookup→Filter→Update = padrão incremental",
      "cascasDeBanana": [
        "Delta Load activity: não existe—use Lookup + Filter conforme padrão",
        "Incremental Load na Copy: Copy Data não detecta automaticamente—configure watermark manualmente",
        "CDC automático: CDC existe mas requer CDC enable na fonte; watermark é mais flexível"
      ],
      "dicaOuro": "Incremental não reprocessa histórico—usa watermark para marcar progresso"
    }
  },
  {
    "id": "dp700_q217",
    "text": "Como um engenheiro de dados usa o Impact Analysis no Fabric antes de modificar um Lakehouse que é fonte de múltiplos modelos semânticos e pipelines?",
    "options": [
      "Acessando o Impact Analysis via configurações do Lakehouse ou do item no workspace, visualizando todos os itens downstream dependentes (modelos semânticos, pipelines, notebooks, relatórios), identificando o impacto potencial da mudança e comunicando os responsáveis pelos itens afetados antes de executar a alteração.",
      "Verificando o repositório Git do workspace onde as dependências entre itens são automaticamente documentadas como comentários nos arquivos de definição dos itens downstream.",
      "Usando o Purview Lineage Graph que automaticamente calcula o impacto de alterações em qualquer item do Fabric e envia notificações por e-mail aos proprietários afetados.",
      "Executando uma query no SQL Analytics Endpoint do Lakehouse: `SELECT * FROM sys.object_dependencies WHERE source_object = 'nome_lakehouse'` que retorna todos os objetos dependentes."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Implementar e gerenciar uma solução analítica",
    "explanation": {
      "respostaCerta": "Acessando o Impact Analysis via configurações do Lakehouse ou do item no workspace, visualizando todos os itens downstream dependentes (modelos semânticos, pipelines, notebooks, relatórios), identificando o impacto potencial da mudança e comunicando os responsáveis pelos itens afetados antes de executar a alteração.",
      "intro": "Entendendo Git integration e versionamento de artefatos",
      "papoReto": "Acessando o Impact Analysis via configurações do Lakehouse ou do item no workspace, visualizando todos os itens downstream dependentes (modelos semânticos, pipelines, notebooks, relatórios), identificando o impacto potencial da mudança e comunicando os responsáveis pelos itens afetados antes de executar a alteração. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Verificando o repositório Git do workspace onde as dependências entre itens são automaticamente documentadas como comentários nos arquivos de definição dos itens downstream.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando o Purview Lineage Graph que automaticamente calcula o impacto de alterações em qualquer item do Fabric e envia notificações por e-mail aos proprietários afetados.: Esta opção contém erro técnico ou implementação não recomendada",
        "Executando uma query no SQL Analytics Endpoint do Lakehouse: `SELECT * FROM sys.object_dependencies WHERE source_object = 'nome_lakehouse'` que retorna todos os objetos dependentes.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q218",
    "text": "No Warehouse do Fabric, como você calcula a média móvel de 7 dias de vendas por produto usando funções de janela T-SQL?",
    "options": [
      "`SELECT produto, data, vendas, AVG(vendas) OVER (PARTITION BY produto ORDER BY data ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS media_movel_7d FROM dbo.vendas_diarias ORDER BY produto, data`",
      "`SELECT produto, data, vendas, MOVING_AVG(vendas, 7) OVER (PARTITION BY produto ORDER BY data) AS media_movel_7d FROM dbo.vendas_diarias`",
      "`SELECT produto, data, vendas, AVG(vendas) OVER (PARTITION BY produto ORDER BY data RANGE BETWEEN INTERVAL '7 DAYS' PRECEDING AND CURRENT ROW) AS media_movel_7d FROM dbo.vendas_diarias`",
      "`SELECT produto, data, vendas, (SELECT AVG(v2.vendas) FROM dbo.vendas_diarias v2 WHERE v2.produto=v1.produto AND v2.data BETWEEN DATEADD(day,-6,v1.data) AND v1.data) AS media_movel_7d FROM dbo.vendas_diarias v1`"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`SELECT produto, data, vendas, AVG(vendas) OVER (PARTITION BY produto ORDER BY data ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS media_movel_7d FROM dbo.vendas_diarias ORDER BY produto, data`",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "`SELECT produto, data, vendas, AVG(vendas) OVER (PARTITION BY produto ORDER BY data ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS media_movel_7d FROM dbo.vendas_diarias ORDER BY produto, data` é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "`SELECT produto, data, vendas, MOVING_AVG(vendas, 7) OVER (PARTITION BY produto ORDER BY data) AS media_movel_7d FROM dbo.vendas_diarias`: Esta opção contém erro técnico ou implementação não recomendada",
        "`SELECT produto, data, vendas, AVG(vendas) OVER (PARTITION BY produto ORDER BY data RANGE BETWEEN INTERVAL '7 DAYS' PRECEDING AND CURRENT ROW) AS media_movel_7d FROM dbo.vendas_diarias`: Esta opção contém erro técnico ou implementação não recomendada",
        "`SELECT produto, data, vendas, (SELECT AVG(v2.vendas) FROM dbo.vendas_diarias v2 WHERE v2.produto=v1.produto AND v2.data BETWEEN DATEADD(day,-6,v1.data) AND v1.data) AS media_movel_7d FROM dbo.vendas_diarias v1`: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q219",
    "text": "Um Dataflow Gen2 no Fabric falha com \"Expression.Error: The column 'coluna_x' does not exist\". Como você diagnostica e resolve o problema?",
    "options": [
      "Executar o Dataflow Gen2 em modo debug que automaticamente identifica e corrige referências a colunas inexistentes substituindo por NULL para colunas não encontradas.",
      "Verificar se a fonte de dados mudou de schema adicionando uma etapa de \"Detect Schema Changes\" no início do Dataflow que atualiza automaticamente as referências de coluna.",
      "Recriar o Dataflow Gen2 do zero pois erros de coluna inexistente indicam corrupção da definição do dataflow que não pode ser corrigida via editor visual.",
      "Abrir o editor do Dataflow Gen2 e navegar para a etapa que referencia 'coluna_x', verificar se a coluna foi removida ou renomeada em uma etapa anterior do pipeline de transformação Power Query, corrigir a referência ou adicionar tratamento de erro com `try` no M para colunas opcionais."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Abrir o editor do Dataflow Gen2 e navegar para a etapa que referencia 'coluna_x', verificar se a coluna foi removida ou renomeada em uma etapa anterior do pipeline de transformação Power Query, corrigir a referência ou adicionar tratamento de erro com `try` no M para colunas opcionais.",
      "intro": "Entendendo Fabric workspace e gerenciamento de recursos",
      "papoReto": "Abrir o editor do Dataflow Gen2 e navegar para a etapa que referencia 'coluna_x', verificar se a coluna foi removida ou renomeada em uma etapa anterior do pipeline de transformação Power Query, corrigir a referência ou adicionar tratamento de erro com `try` no M para colunas opcionais. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Executar o Dataflow Gen2 em modo debug que automaticamente identifica e corrige referências a colunas inexistentes substituindo por NULL para colunas não encontradas.: Esta opção contém erro técnico ou implementação não recomendada",
        "Verificar se a fonte de dados mudou de schema adicionando uma etapa de \"Detect Schema Changes\" no início do Dataflow que atualiza automaticamente as referências de coluna.: Esta opção contém erro técnico ou implementação não recomendada",
        "Recriar o Dataflow Gen2 do zero pois erros de coluna inexistente indicam corrupção da definição do dataflow que não pode ser corrigida via editor visual.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q220",
    "text": "Em PySpark no Fabric, como você explode um array de structs aninhados em um DataFrame para criar uma linha por elemento do array?",
    "options": [
      "`df.pivot(\"array_coluna\").agg(first(\"id\"))`",
      "`df.flatMap(lambda row: [(row.id, item.campo1, item.campo2) for item in row.array_coluna])`",
      "`from pyspark.sql.functions import explode; df_exploded = df.withColumn(\"item\", explode(col(\"array_coluna\"))).select(\"id\", \"item.campo1\", \"item.campo2\", col(\"item.campo3\").alias(\"campo3\"))`",
      "`df.select(\"id\", posexplode(\"array_coluna\").alias(\"pos\", \"item\"))`"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`from pyspark.sql.functions import explode; df_exploded = df.withColumn(\"item\", explode(col(\"array_coluna\"))).select(\"id\", \"item.campo1\", \"item.campo2\", col(\"item.campo3\").alias(\"campo3\"))`",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "`from pyspark.sql.functions import explode; df_exploded = df.withColumn(\"item\", explode(col(\"array_coluna\"))).select(\"id\", \"item.campo1\", \"item.campo2\", col(\"item.campo3\").alias(\"campo3\"))` é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "`df.pivot(\"array_coluna\").agg(first(\"id\"))`: Esta opção contém erro técnico ou implementação não recomendada",
        "`df.flatMap(lambda row: [(row.id, item.campo1, item.campo2) for item in row.array_coluna])`: Esta opção contém erro técnico ou implementação não recomendada",
        "`df.select(\"id\", posexplode(\"array_coluna\").alias(\"pos\", \"item\"))`: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q221",
    "text": "Como você configura alertas proativos para notificar administradores quando a utilização da capacity Fabric excede 80% por mais de 30 minutos?",
    "options": [
      "Exportando métricas do Capacity Metrics App para um Lakehouse via pipeline agendado, criando um notebook de monitoramento que verifica o threshold e dispara notificação via Power Automate ou Teams Webhook quando a condição é detectada; ou usando Azure Monitor com métricas exportadas do Fabric.",
      "Configurando \"Capacity Alerts\" no Admin Portal do Fabric seção \"Capacity Settings\" onde é possível definir threshold de utilização e endereços de e-mail para notificação automática.",
      "Criando uma Azure Monitor Alert Rule que monitora a métrica \"CapacityUtilization\" do recurso Fabric e dispara alertas via Action Group configurado com e-mail e SMS.",
      "Usando o Microsoft Purview para criar uma política de monitoramento de capacity que envia relatórios de utilização diários e alertas em tempo real quando thresholds são excedidos."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Exportando métricas do Capacity Metrics App para um Lakehouse via pipeline agendado, criando um notebook de monitoramento que verifica o threshold e dispara notificação via Power Automate ou Teams Webhook quando a condição é detectada; ou usando Azure Monitor com métricas exportadas do Fabric.",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "Exportando métricas do Capacity Metrics App para um Lakehouse via pipeline agendado, criando um notebook de monitoramento que verifica o threshold e dispara notificação via Power Automate ou Teams Webhook quando a condição é detectada; ou usando Azure Monitor com métricas exportadas do Fabric. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Configurando \"Capacity Alerts\" no Admin Portal do Fabric seção \"Capacity Settings\" onde é possível definir threshold de utilização e endereços de e-mail para notificação automática.: Esta opção contém erro técnico ou implementação não recomendada",
        "Criando uma Azure Monitor Alert Rule que monitora a métrica \"CapacityUtilization\" do recurso Fabric e dispara alertas via Action Group configurado com e-mail e SMS.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando o Microsoft Purview para criar uma política de monitoramento de capacity que envia relatórios de utilização diários e alertas em tempo real quando thresholds são excedidos.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q222",
    "text": "Em PySpark no Fabric, como você restaura uma tabela Delta para uma versão anterior após uma carga incorreta de dados?",
    "options": [
      "`spark.sql(\"RESTORE TABLE nome_tabela TO VERSION AS OF 5\")` ou `spark.sql(\"RESTORE TABLE nome_tabela TO TIMESTAMP AS OF '2024-06-01 10:00:00'\")`",
      "`DeltaTable.forName(spark, \"nome_tabela\").rollback(version=5)`",
      "`spark.read.format(\"delta\").option(\"versionAsOf\", 5).load(\"Tables/nome_tabela\").write.format(\"delta\").mode(\"overwrite\").saveAsTable(\"nome_tabela\")`",
      "`DeltaTable.forName(spark, \"nome_tabela\").delete(); spark.sql(\"CREATE TABLE nome_tabela AS SELECT * FROM nome_tabela VERSION AS OF 5\")`"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`spark.sql(\"RESTORE TABLE nome_tabela TO VERSION AS OF 5\")` ou `spark.sql(\"RESTORE TABLE nome_tabela TO TIMESTAMP AS OF '2024-06-01 10:00:00'\")`",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "`spark.sql(\"RESTORE TABLE nome_tabela TO VERSION AS OF 5\")` ou `spark.sql(\"RESTORE TABLE nome_tabela TO TIMESTAMP AS OF '2024-06-01 10:00:00'\")` é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "`DeltaTable.forName(spark, \"nome_tabela\").rollback(version=5)`: Esta opção contém erro técnico ou implementação não recomendada",
        "`spark.read.format(\"delta\").option(\"versionAsOf\", 5).load(\"Tables/nome_tabela\").write.format(\"delta\").mode(\"overwrite\").saveAsTable(\"nome_tabela\")`: Esta opção contém erro técnico ou implementação não recomendada",
        "`DeltaTable.forName(spark, \"nome_tabela\").delete(); spark.sql(\"CREATE TABLE nome_tabela AS SELECT * FROM nome_tabela VERSION AS OF 5\")`: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q223",
    "text": "O que é o Trusted Workspace Access no Microsoft Fabric e como ele elimina a necessidade de credenciais explícitas para acessar Azure Storage Accounts protegidos por firewall?",
    "options": [
      "Trusted Workspace Access é uma configuração de tenant que permite que workspaces de parceiros externos acessem dados do tenant principal sem necessidade de guest accounts no Azure AD.",
      "Trusted Workspace Access permite que workspaces Fabric acessem Azure Storage Accounts com firewall habilitado usando a identidade gerenciada do workspace (Workspace Identity), configurando o storage account para confiar em workspaces Fabric específicos via \"Resource Instance Rules\" sem expor a conta publicamente.",
      "Trusted Workspace Access cria um peering de rede VNet entre o workspace Fabric e o Azure Storage Account, eliminando a necessidade de configurar Private Endpoints individualmente.",
      "Trusted Workspace Access é um recurso que permite que usuários acessem o Fabric sem autenticação MFA quando conectados à rede corporativa, confiando automaticamente no dispositivo gerenciado pelo Intune."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar uma solução analítica",
    "explanation": {
      "respostaCerta": "Trusted Workspace Access permite que workspaces Fabric acessem Azure Storage Accounts com firewall habilitado usando a identidade gerenciada do workspace (Workspace Identity), configurando o storage account para confiar em workspaces Fabric específicos via \"Resource Instance Rules\" sem expor a conta publicamente.",
      "intro": "Entendendo Fabric workspace e gerenciamento de recursos",
      "papoReto": "Trusted Workspace Access permite que workspaces Fabric acessem Azure Storage Accounts com firewall habilitado usando a identidade gerenciada do workspace (Workspace Identity), configurando o storage account para confiar em workspaces Fabric específicos via \"Resource Instance Rules\" sem expor a conta publicamente. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Trusted Workspace Access é uma configuração de tenant que permite que workspaces de parceiros externos acessem dados do tenant principal sem necessidade de guest accounts no Azure AD.: Esta opção contém erro técnico ou implementação não recomendada",
        "Trusted Workspace Access cria um peering de rede VNet entre o workspace Fabric e o Azure Storage Account, eliminando a necessidade de configurar Private Endpoints individualmente.: Esta opção contém erro técnico ou implementação não recomendada",
        "Trusted Workspace Access é um recurso que permite que usuários acessem o Fabric sem autenticação MFA quando conectados à rede corporativa, confiando automaticamente no dispositivo gerenciado pelo Intune.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q224",
    "text": "Em PySpark no Fabric, como você substitui apenas partições específicas de uma tabela Delta sem sobrescrever as demais partições existentes?",
    "options": [
      "Usando `df.write.format(\"delta\").mode(\"overwrite\").option(\"overwritePartitions\", \"ano=2024/mes=6\").saveAsTable(\"nome_tabela\")`",
      "Executando `DELETE FROM nome_tabela WHERE ano = 2024 AND mes = 6` seguido de `df.write.format(\"delta\").mode(\"append\").saveAsTable(\"nome_tabela\")`",
      "Usando `df.write.format(\"delta\").mode(\"overwrite\").option(\"replaceWhere\", \"ano = 2024 AND mes = 6\").saveAsTable(\"nome_tabela\")`",
      "Configurando `spark.conf.set(\"spark.sql.sources.partitionOverwriteMode\", \"dynamic\")` antes da escrita e usando `df.write.format(\"delta\").mode(\"overwrite\").saveAsTable(\"nome_tabela\")`"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Configurando `spark.conf.set(\"spark.sql.sources.partitionOverwriteMode\", \"dynamic\")` antes da escrita e usando `df.write.format(\"delta\").mode(\"overwrite\").saveAsTable(\"nome_tabela\")`",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "Configurando `spark.conf.set(\"spark.sql.sources.partitionOverwriteMode\", \"dynamic\")` antes da escrita e usando `df.write.format(\"delta\").mode(\"overwrite\").saveAsTable(\"nome_tabela\")` é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Usando `df.write.format(\"delta\").mode(\"overwrite\").option(\"overwritePartitions\", \"ano=2024/mes=6\").saveAsTable(\"nome_tabela\")`: Esta opção contém erro técnico ou implementação não recomendada",
        "Executando `DELETE FROM nome_tabela WHERE ano = 2024 AND mes = 6` seguido de `df.write.format(\"delta\").mode(\"append\").saveAsTable(\"nome_tabela\")`: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando `df.write.format(\"delta\").mode(\"overwrite\").option(\"replaceWhere\", \"ano = 2024 AND mes = 6\").saveAsTable(\"nome_tabela\")`: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q225",
    "text": "Como o Copilot no Microsoft Fabric auxilia engenheiros de dados especificamente em tarefas de ingestão e transformação de dados?",
    "options": [
      "O Copilot executa automaticamente otimizações de performance em notebooks existentes, reescrevendo o código PySpark para usar funções nativas mais eficientes sem intervenção manual do engenheiro.",
      "O Copilot está disponível apenas para criação de relatórios Power BI; funcionalidades de engenharia de dados como notebooks e pipelines requerem o plano Copilot for Azure separado.",
      "O Copilot substitui completamente o Monitor Hub, analisando automaticamente logs de execução e resolvendo erros de pipeline sem necessidade de intervenção humana.",
      "Gera código PySpark para transformações a partir de descrições em linguagem natural, sugere queries KQL e T-SQL para análise de dados, explica erros de código com sugestões de correção, auxilia na criação de Data Pipelines descrevendo o fluxo desejado e documenta notebooks automaticamente."
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Gera código PySpark para transformações a partir de descrições em linguagem natural, sugere queries KQL e T-SQL para análise de dados, explica erros de código com sugestões de correção, auxilia na criação de Data Pipelines descrevendo o fluxo desejado e documenta notebooks automaticamente.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Gera código PySpark para transformações a partir de descrições em linguagem natural, sugere queries KQL e T-SQL para análise de dados, explica erros de código com sugestões de correção, auxilia na criação de Data Pipelines descrevendo o fluxo desejado e documenta notebooks automaticamente. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "O Copilot executa automaticamente otimizações de performance em notebooks existentes, reescrevendo o código PySpark para usar funções nativas mais eficientes sem intervenção manual do engenheiro.: Esta opção contém erro técnico ou implementação não recomendada",
        "O Copilot está disponível apenas para criação de relatórios Power BI; funcionalidades de engenharia de dados como notebooks e pipelines requerem o plano Copilot for Azure separado.: Esta opção contém erro técnico ou implementação não recomendada",
        "O Copilot substitui completamente o Monitor Hub, analisando automaticamente logs de execução e resolvendo erros de pipeline sem necessidade de intervenção humana.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q226",
    "text": "No Fabric Warehouse, como você usa OPENROWSET para consultar arquivos Parquet armazenados no OneLake sem criar uma tabela externa permanente?",
    "options": [
      "`SELECT * FROM OPENROWSET('Microsoft.Fabric.OneLake', 'workspace/lakehouse/Files/dados.parquet', 'SELECT * FROM Parquet') AS r`",
      "OPENROWSET não está disponível no Fabric Warehouse; para acessar arquivos Parquet do OneLake via SQL é necessário criar uma tabela externa com CREATE EXTERNAL TABLE.",
      "`SELECT * FROM PARQUET_FILE('https://onelake.dfs.fabric.microsoft.com/path/dados.parquet') AS r`",
      "`SELECT * FROM OPENROWSET(BULK 'https://onelake.dfs.fabric.microsoft.com/workspace/lakehouse.Lakehouse/Files/dados.parquet', FORMAT = 'PARQUET') AS r`"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`SELECT * FROM OPENROWSET(BULK 'https://onelake.dfs.fabric.microsoft.com/workspace/lakehouse.Lakehouse/Files/dados.parquet', FORMAT = 'PARQUET') AS r`",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "`SELECT * FROM OPENROWSET(BULK 'https://onelake.dfs.fabric.microsoft.com/workspace/lakehouse.Lakehouse/Files/dados.parquet', FORMAT = 'PARQUET') AS r` é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "`SELECT * FROM OPENROWSET('Microsoft.Fabric.OneLake', 'workspace/lakehouse/Files/dados.parquet', 'SELECT * FROM Parquet') AS r`: Esta opção contém erro técnico ou implementação não recomendada",
        "OPENROWSET não está disponível no Fabric Warehouse; para acessar arquivos Parquet do OneLake via SQL é necessário criar uma tabela externa com CREATE EXTERNAL TABLE.: Esta opção contém erro técnico ou implementação não recomendada",
        "`SELECT * FROM PARQUET_FILE('https://onelake.dfs.fabric.microsoft.com/path/dados.parquet') AS r`: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q227",
    "text": "Como você extrai métricas detalhadas de execução de uma atividade Copy Data (como rows copied, throughput em MB/s e duration) para logging em uma tabela de auditoria no Fabric?",
    "options": [
      "Usando a atividade \"Log Metrics\" disponível no catálogo de atividades do Data Pipeline que persiste automaticamente as métricas da atividade anterior em um destino configurável.",
      "Usando a expressão `@activity('CopyActivity').output` após a conclusão da atividade, que retorna um objeto JSON com `rowsRead`, `rowsCopied`, `throughput`, `copyDuration` e outros metadados; salvando via atividade Script ou Stored Procedure em uma tabela de auditoria no Warehouse ou Lakehouse.",
      "Habilitando \"Activity Metrics Logging\" nas configurações avançadas do pipeline que automaticamente salva as métricas em uma tabela `pipeline_metrics` no Lakehouse padrão do workspace.",
      "Consultando a view `sys.copy_activity_stats` no Warehouse após cada execução que registra automaticamente as métricas de todas as atividades Copy Data executadas no workspace."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Usando a expressão `@activity('CopyActivity').output` após a conclusão da atividade, que retorna um objeto JSON com `rowsRead`, `rowsCopied`, `throughput`, `copyDuration` e outros metadados; salvando via atividade Script ou Stored Procedure em uma tabela de auditoria no Warehouse ou Lakehouse.",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "Usando a expressão `@activity('CopyActivity').output` após a conclusão da atividade, que retorna um objeto JSON com `rowsRead`, `rowsCopied`, `throughput`, `copyDuration` e outros metadados; salvando via atividade Script ou Stored Procedure em uma tabela de auditoria no Warehouse ou Lakehouse. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Usando a atividade \"Log Metrics\" disponível no catálogo de atividades do Data Pipeline que persiste automaticamente as métricas da atividade anterior em um destino configurável.: Esta opção contém erro técnico ou implementação não recomendada",
        "Habilitando \"Activity Metrics Logging\" nas configurações avançadas do pipeline que automaticamente salva as métricas em uma tabela `pipeline_metrics` no Lakehouse padrão do workspace.: Esta opção contém erro técnico ou implementação não recomendada",
        "Consultando a view `sys.copy_activity_stats` no Warehouse após cada execução que registra automaticamente as métricas de todas as atividades Copy Data executadas no workspace.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q228",
    "text": "Como o Microsoft Fabric suporta o conceito de Feature Store para machine learning e como engenheiros de dados podem implementar um usando Lakehouses?",
    "options": [
      "Features devem ser armazenadas exclusivamente no Fabric Warehouse com stored procedures para cálculo on-demand; armazenar features em Delta Lake no Lakehouse não garante consistência entre treinamento e inferência.",
      "Feature Stores no Fabric requerem integração com Azure Machine Learning Feature Store; o Fabric sozinho não suporta gestão de features para ML sem o serviço AML externo.",
      "O Fabric tem um item dedicado \"Feature Store\" no workspace que gerencia automaticamente o versionamento, serving e monitoramento de features para projetos de ML sem necessidade de configuração manual.",
      "Usando um Lakehouse como feature store, criando tabelas Delta Gold com features calculadas e versionadas, registrando features com MLflow no Fabric para rastreabilidade, e disponibilizando via SQL Analytics Endpoint para treinamento e via API/notebook para inferência em tempo real."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Usando um Lakehouse como feature store, criando tabelas Delta Gold com features calculadas e versionadas, registrando features com MLflow no Fabric para rastreabilidade, e disponibilizando via SQL Analytics Endpoint para treinamento e via API/notebook para inferência em tempo real.",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "Usando um Lakehouse como feature store, criando tabelas Delta Gold com features calculadas e versionadas, registrando features com MLflow no Fabric para rastreabilidade, e disponibilizando via SQL Analytics Endpoint para treinamento e via API/notebook para inferência em tempo real. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Features devem ser armazenadas exclusivamente no Fabric Warehouse com stored procedures para cálculo on-demand; armazenar features em Delta Lake no Lakehouse não garante consistência entre treinamento e inferência.: Esta opção contém erro técnico ou implementação não recomendada",
        "Feature Stores no Fabric requerem integração com Azure Machine Learning Feature Store; o Fabric sozinho não suporta gestão de features para ML sem o serviço AML externo.: Esta opção contém erro técnico ou implementação não recomendada",
        "O Fabric tem um item dedicado \"Feature Store\" no workspace que gerencia automaticamente o versionamento, serving e monitoramento de features para projetos de ML sem necessidade de configuração manual.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q229",
    "text": "Um gateway de dados on-premises no Fabric está com status \"Degraded\" intermitentemente, causando falhas em pipelines que acessam SQL Server local. Qual é a abordagem sistemática de diagnóstico?",
    "options": [
      "Reinstalar o gateway de dados on-premises no servidor e reconfigurar todas as conexões, pois status \"Degraded\" indica corrupção da instalação que só é resolvida com reinstalação completa.",
      "Verificar logs do gateway no servidor on-premises (Event Viewer e logs do serviço do gateway), confirmar conectividade de rede entre o servidor gateway e o SQL Server, verificar uso de CPU/memória do servidor gateway durante as falhas, validar se há atualizações pendentes do gateway, e verificar se múltiplos pipelines estão sobrecarregando o gateway simultaneamente.",
      "Verificar no Admin Portal do Fabric se o gateway tem licença válida, pois status \"Degraded\" frequentemente indica expiração de licença do gateway de dados on-premises.",
      "Migrar todas as conexões on-premises para um Azure SQL Database via replicação, eliminando a dependência do gateway que é uma fonte de instabilidade por design."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Verificar logs do gateway no servidor on-premises (Event Viewer e logs do serviço do gateway), confirmar conectividade de rede entre o servidor gateway e o SQL Server, verificar uso de CPU/memória do servidor gateway durante as falhas, validar se há atualizações pendentes do gateway, e verificar se múltiplos pipelines estão sobrecarregando o gateway simultaneamente.",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "Verificar logs do gateway no servidor on-premises (Event Viewer e logs do serviço do gateway), confirmar conectividade de rede entre o servidor gateway e o SQL Server, verificar uso de CPU/memória do servidor gateway durante as falhas, validar se há atualizações pendentes do gateway, e verificar se múltiplos pipelines estão sobrecarregando o gateway simultaneamente. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Reinstalar o gateway de dados on-premises no servidor e reconfigurar todas as conexões, pois status \"Degraded\" indica corrupção da instalação que só é resolvida com reinstalação completa.: Esta opção contém erro técnico ou implementação não recomendada",
        "Verificar no Admin Portal do Fabric se o gateway tem licença válida, pois status \"Degraded\" frequentemente indica expiração de licença do gateway de dados on-premises.: Esta opção contém erro técnico ou implementação não recomendada",
        "Migrar todas as conexões on-premises para um Azure SQL Database via replicação, eliminando a dependência do gateway que é uma fonte de instabilidade por design.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q230",
    "text": "O que é uma Clustering Policy em um KQL Database do Fabric e como ela melhora o desempenho de queries?",
    "options": [
      "Clustering Policy configura o algoritmo de compressão usado pelo Eventhouse para armazenar os dados da tabela KQL; opções incluem LZ4, ZSTD e Snappy com diferentes tradeoffs de velocidade/tamanho.",
      "Clustering Policy é sinônimo de Partitioning Policy no KQL Database; ambos definem como os dados são divididos entre partições para isolamento de workloads concorrentes.",
      "Uma Clustering Policy define colunas pelo qual os dados de uma tabela KQL são organizados fisicamente nos extents (shards), similar ao Z-Ordering do Delta Lake; configurada com `.alter table NomeTabela policy clustering @'{\"AttributesForClustering\": [{\"ColumnName\": \"coluna\", \"Kind\": \"Hash\"}]}'` para melhorar queries com filtros nessas colunas.",
      "Clustering Policy define o número de shards (extents) em que a tabela KQL é dividida para processamento paralelo; mais shards significa maior paralelismo mas também maior overhead de coordenação."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Uma Clustering Policy define colunas pelo qual os dados de uma tabela KQL são organizados fisicamente nos extents (shards), similar ao Z-Ordering do Delta Lake; configurada com `.alter table NomeTabela policy clustering @'{\"AttributesForClustering\": [{\"ColumnName\": \"coluna\", \"Kind\": \"Hash\"}]}'` para melhorar queries com filtros nessas colunas.",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "Uma Clustering Policy define colunas pelo qual os dados de uma tabela KQL são organizados fisicamente nos extents (shards), similar ao Z-Ordering do Delta Lake; configurada com `.alter table NomeTabela policy clustering @'{\"AttributesForClustering\": [{\"ColumnName\": \"coluna\", \"Kind\": \"Hash\"}]}'` para melhorar queries com filtros nessas colunas. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Clustering Policy configura o algoritmo de compressão usado pelo Eventhouse para armazenar os dados da tabela KQL; opções incluem LZ4, ZSTD e Snappy com diferentes tradeoffs de velocidade/tamanho.: Esta opção contém erro técnico ou implementação não recomendada",
        "Clustering Policy é sinônimo de Partitioning Policy no KQL Database; ambos definem como os dados são divididos entre partições para isolamento de workloads concorrentes.: Esta opção contém erro técnico ou implementação não recomendada",
        "Clustering Policy define o número de shards (extents) em que a tabela KQL é dividida para processamento paralelo; mais shards significa maior paralelismo mas também maior overhead de coordenação.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q231",
    "text": "Quais são as limitações de performance ao usar Pandas API on Spark (pyspark.pandas) em um Notebook Fabric comparado ao PySpark nativo?",
    "options": [
      "Pandas API on Spark tem limitação de 2 GB de dados por DataFrame; volumes maiores requerem PySpark nativo com particionamento explícito para processamento distribuído eficiente.",
      "Operações que não podem ser paralelizadas geram conversões implícitas para pandas (collected to driver), causando overhead; algumas operações Pandas API on Spark são mais lentas que PySpark equivalente por conversões internas; verificar com `pyspark.pandas.config.set_option(\"compute.ops_on_diff_frames\", True)` se necessário.",
      "Pandas API on Spark não suporta execução distribuída; todo o processamento ocorre no nó driver tornando-o equivalente ao pandas puro sem benefício do cluster Spark.",
      "Pandas API on Spark tem sempre performance superior ao PySpark nativo pois usa Arrow para serialização vetorizada que é mais eficiente que o formato Row do PySpark tradicional."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Operações que não podem ser paralelizadas geram conversões implícitas para pandas (collected to driver), causando overhead; algumas operações Pandas API on Spark são mais lentas que PySpark equivalente por conversões internas; verificar com `pyspark.pandas.config.set_option(\"compute.ops_on_diff_frames\", True)` se necessário.",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "Operações que não podem ser paralelizadas geram conversões implícitas para pandas (collected to driver), causando overhead; algumas operações Pandas API on Spark são mais lentas que PySpark equivalente por conversões internas; verificar com `pyspark.pandas.config.set_option(\"compute.ops_on_diff_frames\", True)` se necessário. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Pandas API on Spark tem limitação de 2 GB de dados por DataFrame; volumes maiores requerem PySpark nativo com particionamento explícito para processamento distribuído eficiente.: Esta opção contém erro técnico ou implementação não recomendada",
        "Pandas API on Spark não suporta execução distribuída; todo o processamento ocorre no nó driver tornando-o equivalente ao pandas puro sem benefício do cluster Spark.: Esta opção contém erro técnico ou implementação não recomendada",
        "Pandas API on Spark tem sempre performance superior ao PySpark nativo pois usa Arrow para serialização vetorizada que é mais eficiente que o formato Row do PySpark tradicional.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q232",
    "text": "Em um Data Pipeline do Fabric, como você implementa a extração completa de uma API REST que retorna dados paginados com um cursor no response body?",
    "options": [
      "Usando atividade Until com condição de parada `@equals(variables('next_cursor'), '')`, dentro do loop uma atividade Web chama a API com o cursor atual, atividade Set Variable atualiza o cursor com `@activity('Web').output.next_cursor`, e atividade Copy Data ou Append acumula os dados; o loop para quando o cursor está vazio.",
      "Usando um Notebook PySpark com `requests.get()` em loop que implementa a paginação via cursor, acumula os resultados em um DataFrame e salva no Lakehouse ao final; mais flexível que pipeline para APIs complexas.",
      "Configurando a opção \"Pagination Rules\" na atividade Copy Data com o conector REST, definindo `AbsoluteUrl` ou `QueryParameters` como tipo de paginação com expressão de extração do cursor do response body.",
      "Criando múltiplas atividades Web em paralelo com números de página hardcoded baseados na contagem total retornada pela primeira chamada dividida pelo page_size configurado."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Usando atividade Until com condição de parada `@equals(variables('next_cursor'), '')`, dentro do loop uma atividade Web chama a API com o cursor atual, atividade Set Variable atualiza o cursor com `@activity('Web').output.next_cursor`, e atividade Copy Data ou Append acumula os dados; o loop para quando o cursor está vazio.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Usando atividade Until com condição de parada `@equals(variables('next_cursor'), '')`, dentro do loop uma atividade Web chama a API com o cursor atual, atividade Set Variable atualiza o cursor com `@activity('Web').output.next_cursor`, e atividade Copy Data ou Append acumula os dados; o loop para quando o cursor está vazio. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Usando um Notebook PySpark com `requests.get()` em loop que implementa a paginação via cursor, acumula os resultados em um DataFrame e salva no Lakehouse ao final; mais flexível que pipeline para APIs complexas.: Esta opção contém erro técnico ou implementação não recomendada",
        "Configurando a opção \"Pagination Rules\" na atividade Copy Data com o conector REST, definindo `AbsoluteUrl` ou `QueryParameters` como tipo de paginação com expressão de extração do cursor do response body.: Esta opção contém erro técnico ou implementação não recomendada",
        "Criando múltiplas atividades Web em paralelo com números de página hardcoded baseados na contagem total retornada pela primeira chamada dividida pelo page_size configurado.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q233",
    "text": "Como você implementa monitoramento de SLA para pipelines de engenharia de dados no Fabric garantindo que cargas críticas completem dentro da janela de tempo acordada?",
    "options": [
      "Usando Azure Monitor com Metric Alerts configurados para a métrica \"PipelineExecutionDuration\" do recurso Fabric que dispara alertas quando excede o threshold de SLA definido.",
      "Integrando o Fabric com Azure DevOps Work Items para criação automática de bugs quando pipelines violam SLA, rastreando o histórico de violações no backlog do time de engenharia.",
      "Configurando \"SLA Settings\" no Monitor Hub do Fabric que permite definir janelas de tempo esperadas para cada pipeline e gera alertas automáticos quando o SLA é violado.",
      "Registrando timestamps de início e fim de cada execução via Workspace Logging ou tabela de auditoria custom, criando um modelo semântico sobre esses dados, construindo um relatório Power BI com alertas Data-Driven configurados que notificam quando o tempo de execução excede o SLA ou quando uma execução esperada não ocorreu."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Registrando timestamps de início e fim de cada execução via Workspace Logging ou tabela de auditoria custom, criando um modelo semântico sobre esses dados, construindo um relatório Power BI com alertas Data-Driven configurados que notificam quando o tempo de execução excede o SLA ou quando uma execução esperada não ocorreu.",
      "intro": "Entendendo Fabric workspace e gerenciamento de recursos",
      "papoReto": "Registrando timestamps de início e fim de cada execução via Workspace Logging ou tabela de auditoria custom, criando um modelo semântico sobre esses dados, construindo um relatório Power BI com alertas Data-Driven configurados que notificam quando o tempo de execução excede o SLA ou quando uma execução esperada não ocorreu. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Usando Azure Monitor com Metric Alerts configurados para a métrica \"PipelineExecutionDuration\" do recurso Fabric que dispara alertas quando excede o threshold de SLA definido.: Esta opção contém erro técnico ou implementação não recomendada",
        "Integrando o Fabric com Azure DevOps Work Items para criação automática de bugs quando pipelines violam SLA, rastreando o histórico de violações no backlog do time de engenharia.: Esta opção contém erro técnico ou implementação não recomendada",
        "Configurando \"SLA Settings\" no Monitor Hub do Fabric que permite definir janelas de tempo esperadas para cada pipeline e gera alertas automáticos quando o SLA é violado.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q234",
    "text": "O que é o Row Tracking no Delta Lake do Fabric e como ele facilita operações de CDC downstream?",
    "options": [
      "Row Tracking adiciona uma coluna `_row_number` sequencial imutável a cada linha durante a ingestão inicial, usada como surrogate key natural para joins e lookups em pipelines downstream.",
      "Row Tracking adiciona um identificador único estável por linha (`_metadata.row_id`) que persiste mesmo após operações de UPDATE que reescrevem a linha em novo arquivo Parquet; habilitado com `delta.enableRowTracking=true` nas propriedades da tabela; facilita CDC downstream ao identificar unicamente linhas sem depender apenas de chaves de negócio.",
      "Row Tracking é sinônimo de Change Data Feed (CDF) no Delta Lake; ambos rastreiam alterações de linhas mas Row Tracking persiste os IDs históricos enquanto CDF mantém apenas as últimas alterações.",
      "Row Tracking é uma funcionalidade exclusiva do Azure Databricks Delta Lake que não está disponível no Microsoft Fabric; a alternativa no Fabric é usar `IDENTITY(1,1)` em colunas surrogate key para rastreamento de linhas."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Row Tracking adiciona um identificador único estável por linha (`_metadata.row_id`) que persiste mesmo após operações de UPDATE que reescrevem a linha em novo arquivo Parquet; habilitado com `delta.enableRowTracking=true` nas propriedades da tabela; facilita CDC downstream ao identificar unicamente linhas sem depender apenas de chaves de negócio.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Row Tracking adiciona um identificador único estável por linha (`_metadata.row_id`) que persiste mesmo após operações de UPDATE que reescrevem a linha em novo arquivo Parquet; habilitado com `delta.enableRowTracking=true` nas propriedades da tabela; facilita CDC downstream ao identificar unicamente linhas sem depender apenas de chaves de negócio. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Row Tracking adiciona uma coluna `_row_number` sequencial imutável a cada linha durante a ingestão inicial, usada como surrogate key natural para joins e lookups em pipelines downstream.: Esta opção contém erro técnico ou implementação não recomendada",
        "Row Tracking é sinônimo de Change Data Feed (CDF) no Delta Lake; ambos rastreiam alterações de linhas mas Row Tracking persiste os IDs históricos enquanto CDF mantém apenas as últimas alterações.: Esta opção contém erro técnico ou implementação não recomendada",
        "Row Tracking é uma funcionalidade exclusiva do Azure Databricks Delta Lake que não está disponível no Microsoft Fabric; a alternativa no Fabric é usar `IDENTITY(1,1)` em colunas surrogate key para rastreamento de linhas.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q235",
    "text": "Como você implementa uma estratégia de materialização de dados no Fabric Warehouse para suportar queries analíticas de alto desempenho sobre dados históricos de 5 anos?",
    "options": [
      "Criando tabelas de agregação via CTAS por período (diário, mensal, anual) atualizadas por pipelines incrementais, usando views unificadoras que combinam agregações pré-calculadas para períodos antigos com dados detalhados recentes, e configurando estatísticas nas colunas de join e filtro mais usadas.",
      "Criando índices clusterizados por data em todas as tabelas históricas usando `CREATE CLUSTERED INDEX idx_data ON tabela(data_coluna)` que organiza fisicamente os dados para acesso sequencial eficiente.",
      "Particionando todas as tabelas por ano com `CREATE PARTITION FUNCTION` e transferindo partições antigas para armazenamento frio automaticamente após 2 anos via política de lifecycle configurada no Warehouse.",
      "Habilitando o modo \"Historical Optimization\" no Warehouse que automaticamente comprime e materializa dados com mais de 1 ano em formato de leitura otimizado sem necessidade de configuração manual."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Criando tabelas de agregação via CTAS por período (diário, mensal, anual) atualizadas por pipelines incrementais, usando views unificadoras que combinam agregações pré-calculadas para períodos antigos com dados detalhados recentes, e configurando estatísticas nas colunas de join e filtro mais usadas.",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "Criando tabelas de agregação via CTAS por período (diário, mensal, anual) atualizadas por pipelines incrementais, usando views unificadoras que combinam agregações pré-calculadas para períodos antigos com dados detalhados recentes, e configurando estatísticas nas colunas de join e filtro mais usadas. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Criando índices clusterizados por data em todas as tabelas históricas usando `CREATE CLUSTERED INDEX idx_data ON tabela(data_coluna)` que organiza fisicamente os dados para acesso sequencial eficiente.: Esta opção contém erro técnico ou implementação não recomendada",
        "Particionando todas as tabelas por ano com `CREATE PARTITION FUNCTION` e transferindo partições antigas para armazenamento frio automaticamente após 2 anos via política de lifecycle configurada no Warehouse.: Esta opção contém erro técnico ou implementação não recomendada",
        "Habilitando o modo \"Historical Optimization\" no Warehouse que automaticamente comprime e materializa dados com mais de 1 ano em formato de leitura otimizado sem necessidade de configuração manual.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q236",
    "text": "Em um Data Pipeline do Fabric, como você passa o resultado de uma atividade Lookup como parâmetro para um Notebook subsequente?",
    "options": [
      "Na atividade Notebook, configurando \"Base parameters\" com expressão dinâmica como `{\"data_inicio\": \"@{activity('Lookup').output.firstRow.data_inicio}\", \"total_registros\": \"@{activity('Lookup').output.firstRow.total}\"}` que injeta os valores na célula de parâmetros do notebook.",
      "Salvando o resultado do Lookup em uma variável de pipeline e acessando no notebook via `spark.conf.get(\"pipeline.variable.data_inicio\")` que é automaticamente injetado no contexto Spark.",
      "Usando `mssparkutils.notebook.entry({\"data_inicio\": \"@activity('Lookup').output.firstRow.data_inicio\"})` no início do notebook que lê automaticamente os parâmetros do contexto do pipeline pai.",
      "Criando uma tabela temporária no Lakehouse com os resultados do Lookup e lendo no notebook via `spark.read.table(\"temp_lookup_results\")` como mecanismo de passagem de dados entre atividades."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Na atividade Notebook, configurando \"Base parameters\" com expressão dinâmica como `{\"data_inicio\": \"@{activity('Lookup').output.firstRow.data_inicio}\", \"total_registros\": \"@{activity('Lookup').output.firstRow.total}\"}` que injeta os valores na célula de parâmetros do notebook.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Na atividade Notebook, configurando \"Base parameters\" com expressão dinâmica como `{\"data_inicio\": \"@{activity('Lookup').output.firstRow.data_inicio}\", \"total_registros\": \"@{activity('Lookup').output.firstRow.total}\"}` que injeta os valores na célula de parâmetros do notebook. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Salvando o resultado do Lookup em uma variável de pipeline e acessando no notebook via `spark.conf.get(\"pipeline.variable.data_inicio\")` que é automaticamente injetado no contexto Spark.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando `mssparkutils.notebook.entry({\"data_inicio\": \"@activity('Lookup').output.firstRow.data_inicio\"})` no início do notebook que lê automaticamente os parâmetros do contexto do pipeline pai.: Esta opção contém erro técnico ou implementação não recomendada",
        "Criando uma tabela temporária no Lakehouse com os resultados do Lookup e lendo no notebook via `spark.read.table(\"temp_lookup_results\")` como mecanismo de passagem de dados entre atividades.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q237",
    "text": "Como você usa funções analíticas KQL no Eventhouse do Fabric para detectar anomalias em séries temporais de dados de telemetria?",
    "options": [
      "Usando `anomaly_detection(table=Telemetria, column=valor, time_column=timestamp, sensitivity=high)` que é a função KQL nativa de alto nível para detecção de anomalias em séries temporais.",
      "Usando `detect_anomaly(valor, threshold=3)` diretamente em uma query `summarize` que aplica automaticamente detecção de outliers baseada em desvio padrão por grupo temporal.",
      "Criando uma Materialized View com `series_stats()` que calcula automaticamente médias e desvios e marca linhas anomalas com flag booleano acessível via query SQL no endpoint.",
      "Usando `series_decompose_anomalies()` ou `series_outliers()` em conjunto com `make-series` para criar a série temporal e detectar pontos anômalos: `Telemetria | make-series avg_valor=avg(valor) on timestamp step 1h | extend anomalias=series_decompose_anomalies(avg_valor) | mvexpand timestamp, avg_valor, anomalias | where anomalias != 0`"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Usando `series_decompose_anomalies()` ou `series_outliers()` em conjunto com `make-series` para criar a série temporal e detectar pontos anômalos: `Telemetria | make-series avg_valor=avg(valor) on timestamp step 1h | extend anomalias=series_decompose_anomalies(avg_valor) | mvexpand timestamp, avg_valor, anomalias | where anomalias != 0`",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "Para dados de streaming/IoT em alta velocidade: Eventstream captura eventos (IoT Hub, Event Hubs) → Eventhouse processa tempo real com KQL → Lakehouse persistencia via Structured Streaming/Eventstream destination.",
      "puloDoGato": "Eventstream → Eventhouse (tempo real KQL) → Lakehouse (persistencia Delta)",
      "cascasDeBanana": [
        "Stream Analytics via Shortcut: Shortcuts são read-only, não processam streams",
        "Dataflow Gen2 streaming: Dataflows é low-code, não nativo para high-speed IoT",
        "Data Pipeline de 1min: Pipelines batched em 1 minuto não é ideal para IoT contínuo"
      ],
      "dicaOuro": "Real-time streaming = Eventstream + Eventhouse. Persistencia = Delta em Lakehouse"
    }
  },
  {
    "id": "dp700_q238",
    "text": "Como você implementa SCD Tipo 2 (Slowly Changing Dimension Type 2) no Fabric Warehouse para preservar histórico completo de alterações em uma dimensão de clientes?",
    "options": [
      "Usando `ALTER TABLE dim_clientes ADD SYSTEM_TIME VERSIONING` que habilita temporal tables no Fabric Warehouse com histórico automático de todas as alterações sem necessidade de lógica MERGE customizada.",
      "`MERGE INTO dim_clientes AS dest USING staging_clientes AS src ON dest.cliente_id = src.cliente_id AND dest.data_fim IS NULL WHEN MATCHED AND (dest.nome != src.nome OR dest.endereco != src.endereco) THEN UPDATE SET dest.data_fim = GETDATE(), dest.ativo = 0 WHEN NOT MATCHED THEN INSERT (cliente_id, nome, endereco, data_inicio, data_fim, ativo) VALUES (src.cliente_id, src.nome, src.endereco, GETDATE(), NULL, 1)` seguido de INSERT para novos registros históricos dos clientes modificados.",
      "Criando uma tabela de histórico separada `dim_clientes_historico` e usando triggers no Warehouse para copiar registros automaticamente antes de cada UPDATE na dimensão principal.",
      "Usando `UPDATE dim_clientes SET nome = src.nome, endereco = src.endereco WHERE cliente_id = src.cliente_id` que atualiza o registro existente sem preservar o histórico"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`MERGE INTO dim_clientes AS dest USING staging_clientes AS src ON dest.cliente_id = src.cliente_id AND dest.data_fim IS NULL WHEN MATCHED AND (dest.nome != src.nome OR dest.endereco != src.endereco) THEN UPDATE SET dest.data_fim = GETDATE(), dest.ativo = 0 WHEN NOT MATCHED THEN INSERT (cliente_id, nome, endereco, data_inicio, data_fim, ativo) VALUES (src.cliente_id, src.nome, src.endereco, GETDATE(), NULL, 1)` seguido de INSERT para novos registros históricos dos clientes modificados.",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "`MERGE INTO dim_clientes AS dest USING staging_clientes AS src ON dest.cliente_id = src.cliente_id AND dest.data_fim IS NULL WHEN MATCHED AND (dest.nome != src.nome OR dest.endereco != src.endereco) THEN UPDATE SET dest.data_fim = GETDATE(), dest.ativo = 0 WHEN NOT MATCHED THEN INSERT (cliente_id, nome, endereco, data_inicio, data_fim, ativo) VALUES (src.cliente_id, src.nome, src.endereco, GETDATE(), NULL, 1)` seguido de INSERT para novos registros históricos dos clientes modificados. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Usando `ALTER TABLE dim_clientes ADD SYSTEM_TIME VERSIONING` que habilita temporal tables no Fabric Warehouse com histórico automático de todas as alterações sem necessidade de lógica MERGE customizada.: Esta opção contém erro técnico ou implementação não recomendada",
        "Criando uma tabela de histórico separada `dim_clientes_historico` e usando triggers no Warehouse para copiar registros automaticamente antes de cada UPDATE na dimensão principal.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando `UPDATE dim_clientes SET nome = src.nome, endereco = src.endereco WHERE cliente_id = src.cliente_id` que atualiza o registro existente sem preservar o histórico: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q239",
    "text": "Em um Notebook Fabric, como você usa o Vectorized Reader do Delta Lake para maximizar a performance de leitura de tabelas Delta em consultas SQL?",
    "options": [
      "Usando `df = spark.read.option(\"vectorized\", \"true\").format(\"delta\").load(\"Tables/nome\")` para ativar a leitura vetorizada para um DataFrame específico sem alterar as configurações globais da sessão.",
      "Convertendo todas as colunas para tipos fixed-width (INT, BIGINT, FLOAT) antes de salvar no Delta Lake, pois apenas colunas de tamanho fixo se beneficiam da leitura vetorizada no Fabric.",
      "Habilitando explicitamente com `spark.conf.set(\"spark.sql.delta.vectorizedReader.enabled\", \"true\")` e `spark.conf.set(\"spark.sql.delta.vectorizedReader.batchSize\", \"4096\")` para ativar leitura vetorizada em tabelas Delta.",
      "O Vectorized Reader está habilitado por padrão no Fabric Runtime para leitura de arquivos Parquet em formato colunar com operações SIMD; verificar com `spark.conf.get(\"spark.sql.parquet.enableVectorizedReader\")` que deve retornar \"true\"; garantir que colunas são do tipo primitivo (int, double, string) pois tipos complexos desabilitam a vetorização automaticamente."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "O Vectorized Reader está habilitado por padrão no Fabric Runtime para leitura de arquivos Parquet em formato colunar com operações SIMD; verificar com `spark.conf.get(\"spark.sql.parquet.enableVectorizedReader\")` que deve retornar \"true\"; garantir que colunas são do tipo primitivo (int, double, string) pois tipos complexos desabilitam a vetorização automaticamente.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "O Vectorized Reader está habilitado por padrão no Fabric Runtime para leitura de arquivos Parquet em formato colunar com operações SIMD; verificar com `spark.conf.get(\"spark.sql.parquet.enableVectorizedReader\")` que deve retornar \"true\"; garantir que colunas são do tipo primitivo (int, double, string) pois tipos complexos desabilitam a vetorização automaticamente. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Usando `df = spark.read.option(\"vectorized\", \"true\").format(\"delta\").load(\"Tables/nome\")` para ativar a leitura vetorizada para um DataFrame específico sem alterar as configurações globais da sessão.: Esta opção contém erro técnico ou implementação não recomendada",
        "Convertendo todas as colunas para tipos fixed-width (INT, BIGINT, FLOAT) antes de salvar no Delta Lake, pois apenas colunas de tamanho fixo se beneficiam da leitura vetorizada no Fabric.: Esta opção contém erro técnico ou implementação não recomendada",
        "Habilitando explicitamente com `spark.conf.set(\"spark.sql.delta.vectorizedReader.enabled\", \"true\")` e `spark.conf.set(\"spark.sql.delta.vectorizedReader.batchSize\", \"4096\")` para ativar leitura vetorizada em tabelas Delta.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q240",
    "text": "Como você configura uma Partitioning Policy em um KQL Database do Fabric para melhorar queries que filtram por uma coluna de alta cardinalidade como `tenant_id`?",
    "options": [
      "Partitioning Policy em KQL Database é apenas para particionamento por tempo (datetime); particionamento por colunas de alta cardinalidade como tenant_id requer Clustering Policy com Kind=\"Hash\".",
      "`.create table NomeTabela (tenant_id:string, ...) with (partitionBy=tenant_id, numPartitions=256)`",
      "`.alter table NomeTabela policy partitioning @'{\"PartitionKeys\": [{\"ColumnName\": \"tenant_id\", \"Kind\": \"Hash\", \"Properties\": {\"Function\": \"XxHash64\", \"MaxPartitionCount\": 256, \"Seed\": 1}}]}'`",
      "`ALTER TABLE NomeTabela PARTITION BY HASH(tenant_id) PARTITIONS 256`"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`.alter table NomeTabela policy partitioning @'{\"PartitionKeys\": [{\"ColumnName\": \"tenant_id\", \"Kind\": \"Hash\", \"Properties\": {\"Function\": \"XxHash64\", \"MaxPartitionCount\": 256, \"Seed\": 1}}]}'`",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "`.alter table NomeTabela policy partitioning @'{\"PartitionKeys\": [{\"ColumnName\": \"tenant_id\", \"Kind\": \"Hash\", \"Properties\": {\"Function\": \"XxHash64\", \"MaxPartitionCount\": 256, \"Seed\": 1}}]}'` é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Partitioning Policy em KQL Database é apenas para particionamento por tempo (datetime); particionamento por colunas de alta cardinalidade como tenant_id requer Clustering Policy com Kind=\"Hash\".: Esta opção contém erro técnico ou implementação não recomendada",
        "`.create table NomeTabela (tenant_id:string, ...) with (partitionBy=tenant_id, numPartitions=256)`: Esta opção contém erro técnico ou implementação não recomendada",
        "`ALTER TABLE NomeTabela PARTITION BY HASH(tenant_id) PARTITIONS 256`: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q241",
    "text": "Em um Data Pipeline do Fabric com 10 atividades em sequência, como você configura para que atividades de cleanup sempre executem mesmo quando atividades anteriores falham?",
    "options": [
      "Conectando as atividades de cleanup com o path \"On Completion\" (que dispara em caso de sucesso, falha ou cancelamento), garantindo que a limpeza sempre ocorra independente do resultado das atividades anteriores do pipeline.",
      "Configurando as atividades de cleanup com a propriedade \"Always Execute = true\" nas configurações avançadas da atividade que as executa independente do status do pipeline.",
      "Criando um pipeline separado de cleanup com trigger baseado em evento que detecta a conclusão do pipeline principal (com qualquer status) e executa automaticamente a limpeza.",
      "Usando a atividade \"Finally\" disponível no catálogo de atividades do Data Pipeline que sempre é executada ao final do pipeline independente de erros, similar ao bloco finally do Python."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Conectando as atividades de cleanup com o path \"On Completion\" (que dispara em caso de sucesso, falha ou cancelamento), garantindo que a limpeza sempre ocorra independente do resultado das atividades anteriores do pipeline.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Conectando as atividades de cleanup com o path \"On Completion\" (que dispara em caso de sucesso, falha ou cancelamento), garantindo que a limpeza sempre ocorra independente do resultado das atividades anteriores do pipeline. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Configurando as atividades de cleanup com a propriedade \"Always Execute = true\" nas configurações avançadas da atividade que as executa independente do status do pipeline.: Esta opção contém erro técnico ou implementação não recomendada",
        "Criando um pipeline separado de cleanup com trigger baseado em evento que detecta a conclusão do pipeline principal (com qualquer status) e executa automaticamente a limpeza.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando a atividade \"Finally\" disponível no catálogo de atividades do Data Pipeline que sempre é executada ao final do pipeline independente de erros, similar ao bloco finally do Python.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q242",
    "text": "Como você registra e versiona um modelo de machine learning treinado em um Notebook Fabric usando o MLflow integrado?",
    "options": [
      "`mlflow.save_model(model, path=\"Files/models/v1\")` seguido de `mlflow.register_model(\"Files/models/v1\", \"NomeModelo\")`",
      "`with mlflow.start_run(): mlflow.log_params(params); mlflow.log_metrics(metrics); mlflow.sklearn.log_model(model, \"model_artifact\"); mlflow.register_model(f\"runs:/{run.info.run_id}/model_artifact\", \"NomeModelo\")`",
      "`model.save(\"abfss://workspace@onelake.dfs.fabric.microsoft.com/lakehouse/Files/models/NomeModelo\")`",
      "`mssparkutils.ml.registerModel(model, name=\"NomeModelo\", version=\"1.0\")`"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`with mlflow.start_run(): mlflow.log_params(params); mlflow.log_metrics(metrics); mlflow.sklearn.log_model(model, \"model_artifact\"); mlflow.register_model(f\"runs:/{run.info.run_id}/model_artifact\", \"NomeModelo\")`",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "`with mlflow.start_run(): mlflow.log_params(params); mlflow.log_metrics(metrics); mlflow.sklearn.log_model(model, \"model_artifact\"); mlflow.register_model(f\"runs:/{run.info.run_id}/model_artifact\", \"NomeModelo\")` é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "`mlflow.save_model(model, path=\"Files/models/v1\")` seguido de `mlflow.register_model(\"Files/models/v1\", \"NomeModelo\")`: Esta opção contém erro técnico ou implementação não recomendada",
        "`model.save(\"abfss://workspace@onelake.dfs.fabric.microsoft.com/lakehouse/Files/models/NomeModelo\")`: Esta opção contém erro técnico ou implementação não recomendada",
        "`mssparkutils.ml.registerModel(model, name=\"NomeModelo\", version=\"1.0\")`: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q243",
    "text": "Como você monitora a saúde de tabelas Delta críticas em um Lakehouse do Fabric verificando fragmentação, tamanho e versões disponíveis para time travel?",
    "options": [
      "Combinando `DESCRIBE DETAIL tabela` (tamanho, número de arquivos, particionamento), `DESCRIBE HISTORY tabela` (versões disponíveis, operações recentes), e `spark.sql(\"SELECT * FROM delta.`Tables/tabela`._delta_log\")` para análise do log; criando um notebook de health check agendado que registra métricas em tabela de monitoramento.",
      "Usando a atividade \"Delta Health Check\" disponível no Data Pipeline que executa automaticamente diagnóstico completo de tabelas Delta e gera relatório no Monitor Hub.",
      "Consultando a view `sys.delta_table_health` no SQL Analytics Endpoint do Lakehouse que consolida métricas de todas as tabelas Delta com indicadores de fragmentação e recomendações de OPTIMIZE.",
      "Usando `mssparkutils.delta.healthReport(\"nome_tabela\")` que gera relatório detalhado de saúde da tabela incluindo score de fragmentação, retenção e estimativa de economia do VACUUM."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Combinando `DESCRIBE DETAIL tabela` (tamanho, número de arquivos, particionamento), `DESCRIBE HISTORY tabela` (versões disponíveis, operações recentes), e `spark.sql(\"SELECT * FROM delta.`Tables/tabela`._delta_log\")` para análise do log; criando um notebook de health check agendado que registra métricas em tabela de monitoramento.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Combinando `DESCRIBE DETAIL tabela` (tamanho, número de arquivos, particionamento), `DESCRIBE HISTORY tabela` (versões disponíveis, operações recentes), e `spark.sql(\"SELECT * FROM delta.`Tables/tabela`._delta_log\")` para análise do log; criando um notebook de health check agendado que registra métricas em tabela de monitoramento. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Usando a atividade \"Delta Health Check\" disponível no Data Pipeline que executa automaticamente diagnóstico completo de tabelas Delta e gera relatório no Monitor Hub.: Esta opção contém erro técnico ou implementação não recomendada",
        "Consultando a view `sys.delta_table_health` no SQL Analytics Endpoint do Lakehouse que consolida métricas de todas as tabelas Delta com indicadores de fragmentação e recomendações de OPTIMIZE.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando `mssparkutils.delta.healthReport(\"nome_tabela\")` que gera relatório detalhado de saúde da tabela incluindo score de fragmentação, retenção e estimativa de economia do VACUUM.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q244",
    "text": "Em um Data Pipeline do Fabric, como você usa uma expressão dinâmica para calcular a data de início do mês anterior para uso em uma query SQL de uma atividade Copy Data?",
    "options": [
      "`@substractMonths(startOfMonth(utcNow()), 1)`",
      "`@dateAdd('month', -1, startOfMonth(utcNow()))`",
      "`@formatDateTime(addDays(startOfMonth(utcNow()), -1), 'yyyy-MM-01')`",
      "`@pipeline().TriggerTime.AddMonths(-1).StartOfMonth()`"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`@formatDateTime(addDays(startOfMonth(utcNow()), -1), 'yyyy-MM-01')`",
      "intro": "Entendendo Dynamic Data Masking e suas limitações",
      "papoReto": "`@formatDateTime(addDays(startOfMonth(utcNow()), -1), 'yyyy-MM-01')` é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "`@substractMonths(startOfMonth(utcNow()), 1)`: Esta opção contém erro técnico ou implementação não recomendada",
        "`@dateAdd('month', -1, startOfMonth(utcNow()))`: Esta opção contém erro técnico ou implementação não recomendada",
        "`@pipeline().TriggerTime.AddMonths(-1).StartOfMonth()`: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q245",
    "text": "Como você usa o Query Insights do Fabric Warehouse para identificar regressões de performance entre duas semanas consecutivas e priorizar otimizações?",
    "options": [
      "Usando `sys.dm_exec_query_stats` com filtro `creation_time` para comparar planos de execução entre semanas e identificar automaticamente queries com planos regredidos.",
      "Acessando o painel \"Performance Insights\" do Fabric Warehouse no portal Azure que exibe automaticamente comparações de performance semana a semana com destaque para regressões.",
      "Comparando `queryinsights.exec_requests_history` entre as duas semanas agrupando por `query_hash` ou texto normalizado, calculando a diferença de `avg_elapsed_time_ms` e `execution_count`, identificando queries com maior aumento absoluto e relativo de tempo; priorizando aquelas com maior impacto total (tempo_médio × execuções).",
      "Habilitando o \"Query Store\" no Fabric Warehouse com `ALTER DATABASE SET QUERY_STORE ON` que rastreia automaticamente regressões de plano e gera relatórios comparativos semanais."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Comparando `queryinsights.exec_requests_history` entre as duas semanas agrupando por `query_hash` ou texto normalizado, calculando a diferença de `avg_elapsed_time_ms` e `execution_count`, identificando queries com maior aumento absoluto e relativo de tempo; priorizando aquelas com maior impacto total (tempo_médio × execuções).",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "Comparando `queryinsights.exec_requests_history` entre as duas semanas agrupando por `query_hash` ou texto normalizado, calculando a diferença de `avg_elapsed_time_ms` e `execution_count`, identificando queries com maior aumento absoluto e relativo de tempo; priorizando aquelas com maior impacto total (tempo_médio × execuções). é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Usando `sys.dm_exec_query_stats` com filtro `creation_time` para comparar planos de execução entre semanas e identificar automaticamente queries com planos regredidos.: Esta opção contém erro técnico ou implementação não recomendada",
        "Acessando o painel \"Performance Insights\" do Fabric Warehouse no portal Azure que exibe automaticamente comparações de performance semana a semana com destaque para regressões.: Esta opção contém erro técnico ou implementação não recomendada",
        "Habilitando o \"Query Store\" no Fabric Warehouse com `ALTER DATABASE SET QUERY_STORE ON` que rastreia automaticamente regressões de plano e gera relatórios comparativos semanais.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q246",
    "text": "O que são Deletion Vectors no Delta Lake do Fabric e qual é o benefício para operações de DELETE e UPDATE?",
    "options": [
      "Deletion Vectors são arquivos de bitmap que marcam linhas como deletadas sem reescrever os arquivos Parquet originais; habilitados com `delta.enableDeletionVectors=true`; benefício: DELETE e UPDATE single-row ficam muito mais rápidos pois não requerem reescrita de arquivos grandes — apenas o vetor de deleção é atualizado; a compactação real ocorre no próximo OPTIMIZE.",
      "Deletion Vectors são vetores de features calculados automaticamente pelo Delta Lake durante operações de DELETE para uso em modelos de ML que detectam padrões de deleção nos dados.",
      "Deletion Vectors são logs comprimidos de todas as operações de deleção mantidos separadamente do transaction log principal, permitindo auditoria detalhada de quais linhas foram deletadas e por quem.",
      "Deletion Vectors são índices secundários criados automaticamente pelo Delta Lake para colunas de chave primária, acelerando operações de DELETE e UPDATE por chave sem reescrever partições inteiras."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Deletion Vectors são arquivos de bitmap que marcam linhas como deletadas sem reescrever os arquivos Parquet originais; habilitados com `delta.enableDeletionVectors=true`; benefício: DELETE e UPDATE single-row ficam muito mais rápidos pois não requerem reescrita de arquivos grandes — apenas o vetor de deleção é atualizado; a compactação real ocorre no próximo OPTIMIZE.",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "Deletion Vectors são arquivos de bitmap que marcam linhas como deletadas sem reescrever os arquivos Parquet originais; habilitados com `delta.enableDeletionVectors=true`; benefício: DELETE e UPDATE single-row ficam muito mais rápidos pois não requerem reescrita de arquivos grandes — apenas o vetor de deleção é atualizado; a compactação real ocorre no próximo OPTIMIZE. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Deletion Vectors são vetores de features calculados automaticamente pelo Delta Lake durante operações de DELETE para uso em modelos de ML que detectam padrões de deleção nos dados.: Esta opção contém erro técnico ou implementação não recomendada",
        "Deletion Vectors são logs comprimidos de todas as operações de deleção mantidos separadamente do transaction log principal, permitindo auditoria detalhada de quais linhas foram deletadas e por quem.: Esta opção contém erro técnico ou implementação não recomendada",
        "Deletion Vectors são índices secundários criados automaticamente pelo Delta Lake para colunas de chave primária, acelerando operações de DELETE e UPDATE por chave sem reescrever partições inteiras.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q247",
    "text": "Como você usa a API REST do Fabric para criar e configurar um novo Lakehouse em um workspace existente programaticamente?",
    "options": [
      "`POST https://management.azure.com/subscriptions/{subId}/resourceGroups/{rg}/providers/Microsoft.Fabric/workspaces/{workspaceId}/lakehouses` usando a API do Azure Resource Manager para criação de itens Fabric.",
      "`POST https://api.fabric.microsoft.com/v1/workspaces/{workspaceId}/items` com body `{\"displayName\": \"NomeLakehouse\", \"type\": \"Lakehouse\"}` usando autenticação Bearer token do Azure AD; após criação, configurar propriedades adicionais via `PATCH /workspaces/{workspaceId}/items/{itemId}` conforme necessário.",
      "Usando o PowerShell module `Az.Fabric` com cmdlet `New-AzFabricLakehouse -WorkspaceId {id} -Name \"NomeLakehouse\"` que é o método oficial recomendado para criação de itens Fabric via automação.",
      "`PUT https://api.fabric.microsoft.com/v1/workspaces/{workspaceId}/lakehouses` com body JSON contendo a definição completa do Lakehouse incluindo schema inicial e configurações de particionamento."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar uma solução analítica",
    "explanation": {
      "respostaCerta": "`POST https://api.fabric.microsoft.com/v1/workspaces/{workspaceId}/items` com body `{\"displayName\": \"NomeLakehouse\", \"type\": \"Lakehouse\"}` usando autenticação Bearer token do Azure AD; após criação, configurar propriedades adicionais via `PATCH /workspaces/{workspaceId}/items/{itemId}` conforme necessário.",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "`POST https://api.fabric.microsoft.com/v1/workspaces/{workspaceId}/items` com body `{\"displayName\": \"NomeLakehouse\", \"type\": \"Lakehouse\"}` usando autenticação Bearer token do Azure AD; após criação, configurar propriedades adicionais via `PATCH /workspaces/{workspaceId}/items/{itemId}` conforme necessário. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "`POST https://management.azure.com/subscriptions/{subId}/resourceGroups/{rg}/providers/Microsoft.Fabric/workspaces/{workspaceId}/lakehouses` usando a API do Azure Resource Manager para criação de itens Fabric.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando o PowerShell module `Az.Fabric` com cmdlet `New-AzFabricLakehouse -WorkspaceId {id} -Name \"NomeLakehouse\"` que é o método oficial recomendado para criação de itens Fabric via automação.: Esta opção contém erro técnico ou implementação não recomendada",
        "`PUT https://api.fabric.microsoft.com/v1/workspaces/{workspaceId}/lakehouses` com body JSON contendo a definição completa do Lakehouse incluindo schema inicial e configurações de particionamento.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q248",
    "text": "No Fabric Warehouse, como você usa uma CTE recursiva para percorrer uma hierarquia de funcionários (manager-subordinate) e calcular o nível de cada funcionário na organização?",
    "options": [
      "`WITH hierarquia AS (SELECT id, nome, manager_id, 0 AS nivel FROM funcionarios WHERE manager_id IS NULL UNION ALL SELECT f.id, f.nome, f.manager_id, h.nivel + 1 FROM funcionarios f INNER JOIN hierarquia h ON f.manager_id = h.id) SELECT * FROM hierarquia OPTION (MAXRECURSION 100)` — âncora seleciona raiz, parte recursiva junta subordinados incrementando nível.",
      "`WITH RECURSIVE hierarquia AS (SELECT id, nome, 0 AS nivel FROM funcionarios WHERE manager_id IS NULL UNION ALL SELECT f.id, f.nome, h.nivel + 1 FROM funcionarios f JOIN hierarquia h ON f.manager_id = h.id) SELECT * FROM hierarquia`",
      "`SELECT id, nome, CONNECT_BY_LEVEL AS nivel FROM funcionarios START WITH manager_id IS NULL CONNECT BY PRIOR id = manager_id`",
      "`SELECT id, nome, hierarquia_level(manager_id, id) AS nivel FROM funcionarios WHERE hierarquia_level(manager_id, id) <= 10`"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`WITH hierarquia AS (SELECT id, nome, manager_id, 0 AS nivel FROM funcionarios WHERE manager_id IS NULL UNION ALL SELECT f.id, f.nome, f.manager_id, h.nivel + 1 FROM funcionarios f INNER JOIN hierarquia h ON f.manager_id = h.id) SELECT * FROM hierarquia OPTION (MAXRECURSION 100)` — âncora seleciona raiz, parte recursiva junta subordinados incrementando nível.",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "`WITH hierarquia AS (SELECT id, nome, manager_id, 0 AS nivel FROM funcionarios WHERE manager_id IS NULL UNION ALL SELECT f.id, f.nome, f.manager_id, h.nivel + 1 FROM funcionarios f INNER JOIN hierarquia h ON f.manager_id = h.id) SELECT * FROM hierarquia OPTION (MAXRECURSION 100)` — âncora seleciona raiz, parte recursiva junta subordinados incrementando nível. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "`WITH RECURSIVE hierarquia AS (SELECT id, nome, 0 AS nivel FROM funcionarios WHERE manager_id IS NULL UNION ALL SELECT f.id, f.nome, h.nivel + 1 FROM funcionarios f JOIN hierarquia h ON f.manager_id = h.id) SELECT * FROM hierarquia`: Esta opção contém erro técnico ou implementação não recomendada",
        "`SELECT id, nome, CONNECT_BY_LEVEL AS nivel FROM funcionarios START WITH manager_id IS NULL CONNECT BY PRIOR id = manager_id`: Esta opção contém erro técnico ou implementação não recomendada",
        "`SELECT id, nome, hierarquia_level(manager_id, id) AS nivel FROM funcionarios WHERE hierarquia_level(manager_id, id) <= 10`: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q249",
    "text": "Quais configurações Spark são mais importantes para otimizar em um Notebook Fabric que processa joins complexos com grandes volumes de dados?",
    "options": [
      "`spark.sql.adaptive.enabled=true` (AQE para otimização automática), `spark.sql.adaptive.coalescePartitions.enabled=true` (reduz partições pequenas), `spark.sql.shuffle.partitions=200` (ajustar baseado no volume), `spark.sql.adaptive.skewJoin.enabled=true` (trata skew automaticamente), e `spark.sql.broadcastTimeout=600` (aumentar para joins com tabelas grandes).",
      "`spark.executor.instances=100`, `spark.executor.memory=64g`, `spark.executor.cores=8`",
      "`spark.sql.execution.arrow.pyspark.enabled=true`, `spark.sql.execution.arrow.maxRecordsPerBatch=10000`",
      "`spark.serializer=org.apache.spark.serializer.KryoSerializer`, `spark.kryoserializer.buffer.max=1g`"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "`spark.sql.adaptive.enabled=true` (AQE para otimização automática), `spark.sql.adaptive.coalescePartitions.enabled=true` (reduz partições pequenas), `spark.sql.shuffle.partitions=200` (ajustar baseado no volume), `spark.sql.adaptive.skewJoin.enabled=true` (trata skew automaticamente), e `spark.sql.broadcastTimeout=600` (aumentar para joins com tabelas grandes).",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "`spark.sql.adaptive.enabled=true` (AQE para otimização automática), `spark.sql.adaptive.coalescePartitions.enabled=true` (reduz partições pequenas), `spark.sql.shuffle.partitions=200` (ajustar baseado no volume), `spark.sql.adaptive.skewJoin.enabled=true` (trata skew automaticamente), e `spark.sql.broadcastTimeout=600` (aumentar para joins com tabelas grandes). é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "`spark.executor.instances=100`, `spark.executor.memory=64g`, `spark.executor.cores=8`: Esta opção contém erro técnico ou implementação não recomendada",
        "`spark.sql.execution.arrow.pyspark.enabled=true`, `spark.sql.execution.arrow.maxRecordsPerBatch=10000`: Esta opção contém erro técnico ou implementação não recomendada",
        "`spark.serializer=org.apache.spark.serializer.KryoSerializer`, `spark.kryoserializer.buffer.max=1g`: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q250",
    "text": "Como você implementa um pipeline Fabric completo usando CDC (Change Data Capture) de um SQL Server on-premises para sincronização near real-time com um Lakehouse?\n## LOTE 6 — Questões 251 a 300 | DP-700",
    "options": [
      "Usar Azure Database Migration Service para sincronização contínua CDC do SQL Server on-premises para o Fabric, eliminando necessidade de desenvolvimento de pipeline customizado.",
      "Instalar o Fabric CDC Agent no servidor SQL Server que envia automaticamente as alterações para o Eventstream do Fabric via protocolo AMQP sem necessidade de gateway ou pipeline.",
      "Configurar CDC no SQL Server nas tabelas fonte; Data Pipeline com trigger agendado a cada 15 minutos que usa atividade Copy Data com \"Enable CDC\" lendo as tabelas `cdc.fn_cdc_get_all_changes_*` com LSN watermark armazenado em tabela de controle; carregando net changes no Lakehouse Bronze; notebook PySpark aplicando MERGE na Silver.",
      "Configurar Mirroring do SQL Server on-premises no Fabric que replica automaticamente via CDC sem necessidade de pipeline; Mirroring suporta SQL Server on-premises com gateway de dados."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Configurar CDC no SQL Server nas tabelas fonte; Data Pipeline com trigger agendado a cada 15 minutos que usa atividade Copy Data com \"Enable CDC\" lendo as tabelas `cdc.fn_cdc_get_all_changes_*` com LSN watermark armazenado em tabela de controle; carregando net changes no Lakehouse Bronze; notebook PySpark aplicando MERGE na Silver.",
      "intro": "Entendendo Shortcuts como virtual links vs. Mirror para cópias reais",
      "papoReto": "Configurar CDC no SQL Server nas tabelas fonte; Data Pipeline com trigger agendado a cada 15 minutos que usa atividade Copy Data com \"Enable CDC\" lendo as tabelas `cdc.fn_cdc_get_all_changes_*` com LSN watermark armazenado em tabela de controle; carregando net changes no Lakehouse Bronze; notebook PySpark aplicando MERGE na Silver. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Usar Azure Database Migration Service para sincronização contínua CDC do SQL Server on-premises para o Fabric, eliminando necessidade de desenvolvimento de pipeline customizado.: Esta opção contém erro técnico ou implementação não recomendada",
        "Instalar o Fabric CDC Agent no servidor SQL Server que envia automaticamente as alterações para o Eventstream do Fabric via protocolo AMQP sem necessidade de gateway ou pipeline.: Esta opção contém erro técnico ou implementação não recomendada",
        "Configurar Mirroring do SQL Server on-premises no Fabric que replica automaticamente via CDC sem necessidade de pipeline; Mirroring suporta SQL Server on-premises com gateway de dados.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q251",
    "text": "Como políticas de Acesso Condicional do Azure AD afetam o acesso de engenheiros de dados ao Microsoft Fabric e como configurá-las adequadamente?",
    "options": [
      "Acesso Condicional aplica-se apenas ao portal web do Fabric; acessos via API REST, notebooks e pipelines são isentos de políticas de acesso condicional por design de segurança do Azure.",
      "Políticas de Acesso Condicional aplicam-se ao acesso ao Fabric Service e suas APIs; podem exigir MFA, dispositivo gerenciado (Compliant Device) ou localização específica; para automações com Service Principal, as políticas devem excluir os SPs ou configurar trusted locations para os IPs dos servidores de automação.",
      "Acesso Condicional não se aplica ao Microsoft Fabric; as políticas de acesso são controladas exclusivamente pelo Admin Portal do Fabric através de configurações de tenant e workspace.",
      "Políticas de Acesso Condicional bloqueiam automaticamente Service Principals de acessar o Fabric; automações devem usar Account Key de storage ao invés de autenticação Azure AD para contornar as restrições."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar uma solução analítica",
    "explanation": {
      "respostaCerta": "Políticas de Acesso Condicional aplicam-se ao acesso ao Fabric Service e suas APIs; podem exigir MFA, dispositivo gerenciado (Compliant Device) ou localização específica; para automações com Service Principal, as políticas devem excluir os SPs ou configurar trusted locations para os IPs dos servidores de automação.",
      "intro": "Entendendo Fabric workspace e gerenciamento de recursos",
      "papoReto": "Políticas de Acesso Condicional aplicam-se ao acesso ao Fabric Service e suas APIs; podem exigir MFA, dispositivo gerenciado (Compliant Device) ou localização específica; para automações com Service Principal, as políticas devem excluir os SPs ou configurar trusted locations para os IPs dos servidores de automação. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Acesso Condicional aplica-se apenas ao portal web do Fabric; acessos via API REST, notebooks e pipelines são isentos de políticas de acesso condicional por design de segurança do Azure.: Esta opção contém erro técnico ou implementação não recomendada",
        "Acesso Condicional não se aplica ao Microsoft Fabric; as políticas de acesso são controladas exclusivamente pelo Admin Portal do Fabric através de configurações de tenant e workspace.: Esta opção contém erro técnico ou implementação não recomendada",
        "Políticas de Acesso Condicional bloqueiam automaticamente Service Principals de acessar o Fabric; automações devem usar Account Key de storage ao invés de autenticação Azure AD para contornar as restrições.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q252",
    "text": "O que é Delta Sharing no contexto do Microsoft Fabric e como engenheiros de dados podem usar para compartilhar dados com organizações externas?",
    "options": [
      "Delta Sharing é um recurso de compartilhamento interno entre workspaces do mesmo tenant; para compartilhamento externo entre organizações é necessário usar Azure Data Share com snapshots agendados.",
      "Delta Sharing no Fabric replica automaticamente dados para o tenant do parceiro externo via Azure Data Share, mantendo sincronização bidirecional em tempo real sem necessidade de configuração adicional.",
      "Delta Sharing é um protocolo aberto para compartilhar tabelas Delta com consumidores externos sem cópia dos dados; no Fabric, configurado via OneLake com criação de shares que expõem tabelas específicas via endpoint REST seguro; consumidores externos acessam via clientes Delta Sharing (Python, Spark, PowerBI) com token de autenticação.",
      "Delta Sharing é exclusivo do Azure Databricks e não está disponível no Microsoft Fabric; para compartilhamento externo no Fabric usar Shortcuts cross-tenant ou exportação manual de arquivos Parquet."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Delta Sharing é um protocolo aberto para compartilhar tabelas Delta com consumidores externos sem cópia dos dados; no Fabric, configurado via OneLake com criação de shares que expõem tabelas específicas via endpoint REST seguro; consumidores externos acessam via clientes Delta Sharing (Python, Spark, PowerBI) com token de autenticação.",
      "intro": "Entendendo Shortcuts como virtual links vs. Mirror para cópias reais",
      "papoReto": "Delta Sharing é um protocolo aberto para compartilhar tabelas Delta com consumidores externos sem cópia dos dados; no Fabric, configurado via OneLake com criação de shares que expõem tabelas específicas via endpoint REST seguro; consumidores externos acessam via clientes Delta Sharing (Python, Spark, PowerBI) com token de autenticação. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Delta Sharing é um recurso de compartilhamento interno entre workspaces do mesmo tenant; para compartilhamento externo entre organizações é necessário usar Azure Data Share com snapshots agendados.: Esta opção contém erro técnico ou implementação não recomendada",
        "Delta Sharing no Fabric replica automaticamente dados para o tenant do parceiro externo via Azure Data Share, mantendo sincronização bidirecional em tempo real sem necessidade de configuração adicional.: Esta opção contém erro técnico ou implementação não recomendada",
        "Delta Sharing é exclusivo do Azure Databricks e não está disponível no Microsoft Fabric; para compartilhamento externo no Fabric usar Shortcuts cross-tenant ou exportação manual de arquivos Parquet.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q253",
    "text": "Quais estratégias de otimização são específicas para a camada Gold de um Lakehouse no Fabric, considerando que ela é a camada de consumo direto por modelos semânticos e analistas?",
    "options": [
      "Habilitar modo Direct Lake em todas as tabelas Gold automaticamente via configuração do workspace que elimina a necessidade de refresh de modelos semânticos para dados sempre atualizados.",
      "Implementar tabelas de agregação pré-calculadas por dimensão temporal, aplicar OPTIMIZE com ZORDER BY nas colunas de filtro mais usadas, garantir particionamento por data para queries de período, criar views SQL para encapsular lógica de negócio complexa, e habilitar Auto-Optimization para manter a camada Gold sempre compactada após cargas incrementais.",
      "Criar índices B-Tree em todas as colunas de chave primária das tabelas Gold para otimizar JOINs no SQL Analytics Endpoint; índices são obrigatórios para performance aceitável na camada de consumo.",
      "Converter todas as tabelas Gold para formato CSV para compatibilidade máxima com ferramentas externas; o overhead do Delta Lake é desnecessário na camada de consumo final."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Implementar tabelas de agregação pré-calculadas por dimensão temporal, aplicar OPTIMIZE com ZORDER BY nas colunas de filtro mais usadas, garantir particionamento por data para queries de período, criar views SQL para encapsular lógica de negócio complexa, e habilitar Auto-Optimization para manter a camada Gold sempre compactada após cargas incrementais.",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "Implementar tabelas de agregação pré-calculadas por dimensão temporal, aplicar OPTIMIZE com ZORDER BY nas colunas de filtro mais usadas, garantir particionamento por data para queries de período, criar views SQL para encapsular lógica de negócio complexa, e habilitar Auto-Optimization para manter a camada Gold sempre compactada após cargas incrementais. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Habilitar modo Direct Lake em todas as tabelas Gold automaticamente via configuração do workspace que elimina a necessidade de refresh de modelos semânticos para dados sempre atualizados.: Esta opção contém erro técnico ou implementação não recomendada",
        "Criar índices B-Tree em todas as colunas de chave primária das tabelas Gold para otimizar JOINs no SQL Analytics Endpoint; índices são obrigatórios para performance aceitável na camada de consumo.: Esta opção contém erro técnico ou implementação não recomendada",
        "Converter todas as tabelas Gold para formato CSV para compatibilidade máxima com ferramentas externas; o overhead do Delta Lake é desnecessário na camada de consumo final.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q254",
    "text": "Em um Data Pipeline do Fabric com 20 atividades, como você implementa um padrão robusto de tratamento de erros que captura detalhes do erro, registra em tabela de auditoria e notifica a equipe via Teams?",
    "options": [
      "Para cada atividade crítica, conectar o path \"On Failure\" a um sub-pipeline de error handling que: 1) recebe o nome da atividade e mensagem via parâmetros, 2) usa atividade Script para inserir em tabela de auditoria com `@activity('falha').error.message`, 3) usa atividade Web para POST no Teams Webhook com detalhes formatados, 4) propaga a falha com \"Fail activity\" para sinalizar o pipeline como falho.",
      "Configurando um Azure Monitor Alert que detecta falhas do pipeline e dispara um Logic App para registrar em banco de dados e notificar via Teams, sem necessidade de lógica de error handling dentro do próprio pipeline.",
      "Envolvendo todo o pipeline em um bloco try-catch via atividade \"Error Handler\" disponível no catálogo do Data Pipeline que captura qualquer falha e executa o conjunto de atividades de tratamento configuradas.",
      "Usando a propriedade \"Global Error Handler\" do pipeline nas configurações avançadas que define um pipeline filho executado automaticamente em qualquer falha, recebendo o contexto de erro como parâmetro padrão."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Para cada atividade crítica, conectar o path \"On Failure\" a um sub-pipeline de error handling que: 1) recebe o nome da atividade e mensagem via parâmetros, 2) usa atividade Script para inserir em tabela de auditoria com `@activity('falha').error.message`, 3) usa atividade Web para POST no Teams Webhook com detalhes formatados, 4) propaga a falha com \"Fail activity\" para sinalizar o pipeline como falho.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Para cada atividade crítica, conectar o path \"On Failure\" a um sub-pipeline de error handling que: 1) recebe o nome da atividade e mensagem via parâmetros, 2) usa atividade Script para inserir em tabela de auditoria com `@activity('falha').error.message`, 3) usa atividade Web para POST no Teams Webhook com detalhes formatados, 4) propaga a falha com \"Fail activity\" para sinalizar o pipeline como falho. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Configurando um Azure Monitor Alert que detecta falhas do pipeline e dispara um Logic App para registrar em banco de dados e notificar via Teams, sem necessidade de lógica de error handling dentro do próprio pipeline.: Esta opção contém erro técnico ou implementação não recomendada",
        "Envolvendo todo o pipeline em um bloco try-catch via atividade \"Error Handler\" disponível no catálogo do Data Pipeline que captura qualquer falha e executa o conjunto de atividades de tratamento configuradas.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando a propriedade \"Global Error Handler\" do pipeline nas configurações avançadas que define um pipeline filho executado automaticamente em qualquer falha, recebendo o contexto de erro como parâmetro padrão.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q255",
    "text": "Como você usa a API de Administração do Fabric para criar um inventário automatizado de todos os itens de engenharia de dados (Lakehouses, Pipelines, Notebooks) em todos os workspaces do tenant?",
    "options": [
      "Acessando o Microsoft Purview Data Map que mantém automaticamente um inventário de todos os itens Fabric escaneados, exportável via API REST do Purview sem necessidade de chamadas à API do Fabric.",
      "Usando `GET https://api.powerbi.com/v1.0/myorg/admin/workspaces/getInfo?expand=datasets,reports,dashboards` que retorna inventário completo de todos os itens Fabric de todos os workspaces do tenant.",
      "Executando um script PowerShell com `Get-FabricItem -WorkspaceId All -ItemType Lakehouse,Pipeline,Notebook` usando o módulo oficial MicrosoftFabric do PowerShell Gallery.",
      "Usando `GET https://api.fabric.microsoft.com/v1/admin/items?type=Lakehouse` (e DataPipeline, Notebook) com autenticação de administrador, paginando os resultados com `@odata.nextLink`, consolidando em um Lakehouse centralizado e construindo relatório de governança com Power BI sobre o inventário."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Usando `GET https://api.fabric.microsoft.com/v1/admin/items?type=Lakehouse` (e DataPipeline, Notebook) com autenticação de administrador, paginando os resultados com `@odata.nextLink`, consolidando em um Lakehouse centralizado e construindo relatório de governança com Power BI sobre o inventário.",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "Usando `GET https://api.fabric.microsoft.com/v1/admin/items?type=Lakehouse` (e DataPipeline, Notebook) com autenticação de administrador, paginando os resultados com `@odata.nextLink`, consolidando em um Lakehouse centralizado e construindo relatório de governança com Power BI sobre o inventário. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Acessando o Microsoft Purview Data Map que mantém automaticamente um inventário de todos os itens Fabric escaneados, exportável via API REST do Purview sem necessidade de chamadas à API do Fabric.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando `GET https://api.powerbi.com/v1.0/myorg/admin/workspaces/getInfo?expand=datasets,reports,dashboards` que retorna inventário completo de todos os itens Fabric de todos os workspaces do tenant.: Esta opção contém erro técnico ou implementação não recomendada",
        "Executando um script PowerShell com `Get-FabricItem -WorkspaceId All -ItemType Lakehouse,Pipeline,Notebook` usando o módulo oficial MicrosoftFabric do PowerShell Gallery.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q256",
    "text": "Como você implementa um notebook de manutenção automática no Fabric que executa OPTIMIZE e VACUUM apenas nas tabelas Delta que realmente precisam, baseado em métricas de fragmentação?",
    "options": [
      "Usando `mssparkutils.delta.autoOptimize(lakehouse=\"nome\", threshold_files=100)` que implementa a lógica de manutenção seletiva automaticamente baseada nas métricas de fragmentação do OneLake.",
      "Criando uma stored procedure no SQL Analytics Endpoint que consulta `sys.delta_table_stats` e executa `OPTIMIZE` via `sp_executesql` para tabelas fragmentadas acima do threshold configurado.",
      "Habilitando \"Auto Maintenance\" nas configurações do Lakehouse no portal Fabric que automaticamente executa OPTIMIZE e VACUUM nas tabelas com mais de 100 arquivos diariamente sem necessidade de notebook.",
      "`tabelas = spark.sql(\"SHOW TABLES IN lakehouse_db\").collect(); for t in tabelas: detail = spark.sql(f\"DESCRIBE DETAIL {t.tableName}\").collect()[0]; num_files = detail.numFiles; if num_files > 100: spark.sql(f\"OPTIMIZE {t.tableName}\"); spark.sql(f\"VACUUM {t.tableName} RETAIN 168 HOURS\")` — executando manutenção seletiva baseada no número de arquivos."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`tabelas = spark.sql(\"SHOW TABLES IN lakehouse_db\").collect(); for t in tabelas: detail = spark.sql(f\"DESCRIBE DETAIL {t.tableName}\").collect()[0]; num_files = detail.numFiles; if num_files > 100: spark.sql(f\"OPTIMIZE {t.tableName}\"); spark.sql(f\"VACUUM {t.tableName} RETAIN 168 HOURS\")` — executando manutenção seletiva baseada no número de arquivos.",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "`tabelas = spark.sql(\"SHOW TABLES IN lakehouse_db\").collect(); for t in tabelas: detail = spark.sql(f\"DESCRIBE DETAIL {t.tableName}\").collect()[0]; num_files = detail.numFiles; if num_files > 100: spark.sql(f\"OPTIMIZE {t.tableName}\"); spark.sql(f\"VACUUM {t.tableName} RETAIN 168 HOURS\")` — executando manutenção seletiva baseada no número de arquivos. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Usando `mssparkutils.delta.autoOptimize(lakehouse=\"nome\", threshold_files=100)` que implementa a lógica de manutenção seletiva automaticamente baseada nas métricas de fragmentação do OneLake.: Esta opção contém erro técnico ou implementação não recomendada",
        "Criando uma stored procedure no SQL Analytics Endpoint que consulta `sys.delta_table_stats` e executa `OPTIMIZE` via `sp_executesql` para tabelas fragmentadas acima do threshold configurado.: Esta opção contém erro técnico ou implementação não recomendada",
        "Habilitando \"Auto Maintenance\" nas configurações do Lakehouse no portal Fabric que automaticamente executa OPTIMIZE e VACUUM nas tabelas com mais de 100 arquivos diariamente sem necessidade de notebook.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q257",
    "text": "No Eventhouse do Fabric, quando você deve usar Partitioning Policy versus Clustering Policy para otimizar queries KQL?",
    "options": [
      "São equivalentes em funcionalidade; Partitioning Policy é a versão mais recente que substitui Clustering Policy; usar apenas Partitioning Policy em novas implementações para compatibilidade futura.",
      "Partitioning Policy é para colunas de data/hora (temporal sharding); Clustering Policy é para qualquer outra coluna; não podem ser usadas simultaneamente na mesma tabela KQL.",
      "Partitioning Policy organiza dados em partições lógicas por hash ou uniform range de uma coluna (ex: tenant_id), ideal para isolamento de dados e queries que filtram por tenant; Clustering Policy organiza dados dentro de extents por colunas específicas (ex: timestamp + device_id), ideal para queries que combinam múltiplos filtros em colunas relacionadas sem necessidade de isolamento por partição.",
      "Partitioning Policy é configurada automaticamente pelo Eventhouse baseado no padrão de ingestão; Clustering Policy deve ser configurada manualmente pelo engenheiro para otimização de queries específicas."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Partitioning Policy organiza dados em partições lógicas por hash ou uniform range de uma coluna (ex: tenant_id), ideal para isolamento de dados e queries que filtram por tenant; Clustering Policy organiza dados dentro de extents por colunas específicas (ex: timestamp + device_id), ideal para queries que combinam múltiplos filtros em colunas relacionadas sem necessidade de isolamento por partição.",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "Para dados de streaming/IoT em alta velocidade: Eventstream captura eventos (IoT Hub, Event Hubs) → Eventhouse processa tempo real com KQL → Lakehouse persistencia via Structured Streaming/Eventstream destination.",
      "puloDoGato": "Eventstream → Eventhouse (tempo real KQL) → Lakehouse (persistencia Delta)",
      "cascasDeBanana": [
        "Stream Analytics via Shortcut: Shortcuts são read-only, não processam streams",
        "Dataflow Gen2 streaming: Dataflows é low-code, não nativo para high-speed IoT",
        "Data Pipeline de 1min: Pipelines batched em 1 minuto não é ideal para IoT contínuo"
      ],
      "dicaOuro": "Real-time streaming = Eventstream + Eventhouse. Persistencia = Delta em Lakehouse"
    }
  },
  {
    "id": "dp700_q258",
    "text": "O Fabric SQL Database (não o Warehouse) suporta Temporal Tables com SYSTEM_TIME VERSIONING? Como isso se diferencia da abordagem de SCD Tipo 2 manual?",
    "options": [
      "Temporal Tables e SCD Tipo 2 são idênticos em funcionalidade; a única diferença é que Temporal Tables usam nomes de colunas padronizados (`ValidFrom`, `ValidTo`) enquanto SCD Tipo 2 permite nomes personalizados.",
      "Temporal Tables estão disponíveis tanto no Fabric SQL Database quanto no Fabric Warehouse; a diferença é que no Warehouse as tabelas históricas são armazenadas automaticamente no formato Delta Lake.",
      "Sim, o Fabric SQL Database (OLTP) suporta Temporal Tables com `ALTER TABLE tabela ADD PERIOD FOR SYSTEM_TIME (ValidFrom, ValidTo); ALTER TABLE tabela SET (SYSTEM_VERSIONING = ON (HISTORY_TABLE = dbo.tabela_historico))`; automatiza o versionamento sem lógica MERGE manual; o Fabric Warehouse (OLAP) não suporta esse recurso.",
      "O Fabric SQL Database não suporta Temporal Tables; apenas o Azure SQL Database tem esse recurso; no Fabric é necessário implementar SCD Tipo 2 manualmente via MERGE em ambos os serviços."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Sim, o Fabric SQL Database (OLTP) suporta Temporal Tables com `ALTER TABLE tabela ADD PERIOD FOR SYSTEM_TIME (ValidFrom, ValidTo); ALTER TABLE tabela SET (SYSTEM_VERSIONING = ON (HISTORY_TABLE = dbo.tabela_historico))`; automatiza o versionamento sem lógica MERGE manual; o Fabric Warehouse (OLAP) não suporta esse recurso.",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "Sim, o Fabric SQL Database (OLTP) suporta Temporal Tables com `ALTER TABLE tabela ADD PERIOD FOR SYSTEM_TIME (ValidFrom, ValidTo); ALTER TABLE tabela SET (SYSTEM_VERSIONING = ON (HISTORY_TABLE = dbo.tabela_historico))`; automatiza o versionamento sem lógica MERGE manual; o Fabric Warehouse (OLAP) não suporta esse recurso. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Temporal Tables e SCD Tipo 2 são idênticos em funcionalidade; a única diferença é que Temporal Tables usam nomes de colunas padronizados (`ValidFrom`, `ValidTo`) enquanto SCD Tipo 2 permite nomes personalizados.: Esta opção contém erro técnico ou implementação não recomendada",
        "Temporal Tables estão disponíveis tanto no Fabric SQL Database quanto no Fabric Warehouse; a diferença é que no Warehouse as tabelas históricas são armazenadas automaticamente no formato Delta Lake.: Esta opção contém erro técnico ou implementação não recomendada",
        "O Fabric SQL Database não suporta Temporal Tables; apenas o Azure SQL Database tem esse recurso; no Fabric é necessário implementar SCD Tipo 2 manualmente via MERGE em ambos os serviços.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q259",
    "text": "Um Data Pipeline do Fabric executa com sucesso em modo de debug (manual) mas falha quando disparado pelo trigger agendado. Quais são as causas mais comuns?",
    "options": [
      "O modo de debug sempre usa dados de amostra (primeiras 100 linhas); quando disparado pelo trigger, o pipeline processa o volume real que pode exceder o timeout configurado para o modo de debug.",
      "Pipelines em modo de debug executam em servidores dedicados de desenvolvimento com mais recursos; triggers agendados usam servidores compartilhados com menos memória e CPU disponível.",
      "O modo de debug ignora atividades marcadas como \"Skip in debug\"; quando disparado pelo trigger, essas atividades são executadas e podem falhar se não estiverem corretamente configuradas.",
      "Diferenças entre contextos de execução: em debug usa credenciais do usuário interativo com mais permissões; trigger agendado usa Service Principal ou Managed Identity que pode ter menos permissões; parâmetros passados pelo trigger diferem dos defaults usados no debug; timezone do trigger pode gerar datas inesperadas em expressões dinâmicas."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Diferenças entre contextos de execução: em debug usa credenciais do usuário interativo com mais permissões; trigger agendado usa Service Principal ou Managed Identity que pode ter menos permissões; parâmetros passados pelo trigger diferem dos defaults usados no debug; timezone do trigger pode gerar datas inesperadas em expressões dinâmicas.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Data Pipeline é orquestração visual low-code de atividades (Copy, Lookup, ForEach, Execute Pipeline, Script). Suporta dependências, retries automáticos, notificações. Ideal para cópia de dados e orquestração sem programação. Notebooks são para transformação complexa com Spark (PySpark).",
      "puloDoGato": "Pipeline = visual, low-code. Notebook = programação Spark. Escolha conforme lógica necessária",
      "cascasDeBanana": [
        "Volume > 1TB: ambos lidam igualmente—volume não é diferenciador",
        "Agendamento < 15min: ambos suportam triggers de alta frequência",
        "PySpark: Pipelines podem chamar Notebooks, mas para lógica complexa use direto"
      ],
      "dicaOuro": "Copiar + orquestrar visualmente = Pipeline. Transformar com código = Notebook"
    }
  },
  {
    "id": "dp700_q260",
    "text": "Como você implementa um framework de qualidade de dados reutilizável em PySpark no Fabric que valida múltiplas regras e gera relatório de conformidade?",
    "options": [
      "Configurando regras de qualidade no Microsoft Purview Data Catalog e ativando a integração automática com notebooks via `mssparkutils.purview.validateDataframe(df, \"nome_dataset\")`.",
      "Usando a biblioteca `deequ` da AWS que foi portada para o Microsoft Fabric e oferece validação declarativa de qualidade de dados com integração nativa ao Delta Lake do Fabric.",
      "Criando uma classe Python com métodos para cada tipo de validação (`check_nulls`, `check_ranges`, `check_uniqueness`, `check_referential_integrity`), cada método retornando DataFrame com violações; acumulando resultados em lista e gerando relatório consolidado via `reduce(DataFrame.union, resultados)` salvo como tabela Delta de qualidade.",
      "Usando o módulo `pyspark.sql.quality` que contém funções nativas de validação de qualidade de dados integradas ao runtime Spark do Fabric com suporte a regras declarativas em JSON."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Criando uma classe Python com métodos para cada tipo de validação (`check_nulls`, `check_ranges`, `check_uniqueness`, `check_referential_integrity`), cada método retornando DataFrame com violações; acumulando resultados em lista e gerando relatório consolidado via `reduce(DataFrame.union, resultados)` salvo como tabela Delta de qualidade.",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "Criando uma classe Python com métodos para cada tipo de validação (`check_nulls`, `check_ranges`, `check_uniqueness`, `check_referential_integrity`), cada método retornando DataFrame com violações; acumulando resultados em lista e gerando relatório consolidado via `reduce(DataFrame.union, resultados)` salvo como tabela Delta de qualidade. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Configurando regras de qualidade no Microsoft Purview Data Catalog e ativando a integração automática com notebooks via `mssparkutils.purview.validateDataframe(df, \"nome_dataset\")`.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando a biblioteca `deequ` da AWS que foi portada para o Microsoft Fabric e oferece validação declarativa de qualidade de dados com integração nativa ao Delta Lake do Fabric.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando o módulo `pyspark.sql.quality` que contém funções nativas de validação de qualidade de dados integradas ao runtime Spark do Fabric com suporte a regras declarativas em JSON.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q261",
    "text": "Como você automatiza completamente o ciclo de deployment de um projeto de engenharia de dados no Fabric usando Azure DevOps, do commit ao ambiente de produção?",
    "options": [
      "Usando GitHub Actions com o action `microsoft/fabric-deploy@v1` que gerencia automaticamente o ciclo completo de CI/CD para projetos Fabric sem necessidade de scripts customizados.",
      "Configurando webhooks no repositório Git do workspace que automaticamente disparam o Deployment Pipeline quando commits são feitos no branch main, sem necessidade de Azure DevOps separado.",
      "Usando o Azure DevOps Fabric Extension disponível no Marketplace que automatiza todo o ciclo de deployment com tasks pré-configuradas para sync de workspace, promoção de Deployment Pipeline e validação de itens.",
      "Pipeline YAML no Azure DevOps: 1) trigger em merge para main; 2) stage Build: validar notebooks via `nbformat`, lint T-SQL, executar testes unitários; 3) stage Deploy Dev: API REST Fabric para update do workspace Dev via Git sync; 4) stage Deploy Test: chamar API de Deployment Pipeline para promover Dev→Test; 5) stage Deploy Prod: aprovação manual + chamar API de Deployment Pipeline para promover Test→Prod."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar uma solução analítica",
    "explanation": {
      "respostaCerta": "Pipeline YAML no Azure DevOps: 1) trigger em merge para main; 2) stage Build: validar notebooks via `nbformat`, lint T-SQL, executar testes unitários; 3) stage Deploy Dev: API REST Fabric para update do workspace Dev via Git sync; 4) stage Deploy Test: chamar API de Deployment Pipeline para promover Dev→Test; 5) stage Deploy Prod: aprovação manual + chamar API de Deployment Pipeline para promover Test→Prod.",
      "intro": "Entendendo Deployment Pipelines e transformação de parâmetros",
      "papoReto": "Pipeline YAML no Azure DevOps: 1) trigger em merge para main; 2) stage Build: validar notebooks via `nbformat`, lint T-SQL, executar testes unitários; 3) stage Deploy Dev: API REST Fabric para update do workspace Dev via Git sync; 4) stage Deploy Test: chamar API de Deployment Pipeline para promover Dev→Test; 5) stage Deploy Prod: aprovação manual + chamar API de Deployment Pipeline para promover Test→Prod. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Usando GitHub Actions com o action `microsoft/fabric-deploy@v1` que gerencia automaticamente o ciclo completo de CI/CD para projetos Fabric sem necessidade de scripts customizados.: Esta opção contém erro técnico ou implementação não recomendada",
        "Configurando webhooks no repositório Git do workspace que automaticamente disparam o Deployment Pipeline quando commits são feitos no branch main, sem necessidade de Azure DevOps separado.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando o Azure DevOps Fabric Extension disponível no Marketplace que automatiza todo o ciclo de deployment com tasks pré-configuradas para sync de workspace, promoção de Deployment Pipeline e validação de itens.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q262",
    "text": "Em KQL no Fabric Eventhouse, como você implementa análise de tendência e forecasting de uma série temporal de métricas de negócio?",
    "options": [
      "`MetricasDiarias | evaluate time_series_analysis(data, metrica, decompose=true, forecast_steps=30)`",
      "`MetricasDiarias | project data, valor=sum(metrica) | series_decompose_forecast(valor, 30) on data`",
      "`MetricasDiarias | make-series valor=sum(metrica) on data step 1d | extend (tendencia, sazonalidade, residual) = series_decompose(valor) | extend forecast = series_forecast(valor, 30)`",
      "`MetricasDiarias | summarize valor=sum(metrica) by data | extend tendencia=linear_regression(data, valor) | extend forecast=tendencia * 1.1`"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`MetricasDiarias | make-series valor=sum(metrica) on data step 1d | extend (tendencia, sazonalidade, residual) = series_decompose(valor) | extend forecast = series_forecast(valor, 30)`",
      "intro": "Entendendo Fabric workspace e gerenciamento de recursos",
      "papoReto": "Para dados de streaming/IoT em alta velocidade: Eventstream captura eventos (IoT Hub, Event Hubs) → Eventhouse processa tempo real com KQL → Lakehouse persistencia via Structured Streaming/Eventstream destination.",
      "puloDoGato": "Eventstream → Eventhouse (tempo real KQL) → Lakehouse (persistencia Delta)",
      "cascasDeBanana": [
        "Stream Analytics via Shortcut: Shortcuts são read-only, não processam streams",
        "Dataflow Gen2 streaming: Dataflows é low-code, não nativo para high-speed IoT",
        "Data Pipeline de 1min: Pipelines batched em 1 minuto não é ideal para IoT contínuo"
      ],
      "dicaOuro": "Real-time streaming = Eventstream + Eventhouse. Persistencia = Delta em Lakehouse"
    }
  },
  {
    "id": "dp700_q263",
    "text": "Quais são as considerações de performance e governança ao arquitetar uma solução Fabric com múltiplos workspaces (Dev, Test, Prod) compartilhando a mesma capacity?",
    "options": [
      "Workloads de Dev/Test podem impactar a performance de Prod por consumo de CUs na capacity compartilhada; mitigar usando Capacity Metrics para monitorar consumo por workspace, configurando janelas de execução (ex: jobs de Dev apenas fora do horário comercial), considerando capacity separada para Prod em cenários críticos, e usando Deployment Pipelines para promoção controlada.",
      "Múltiplos workspaces na mesma capacity são completamente isolados com recursos dedicados por workspace; não há risco de impacto entre Dev/Test e Prod quando todos estão na mesma capacity Fabric.",
      "Workspaces em capacities diferentes não podem compartilhar dados via Shortcuts ou Deployment Pipelines; toda a arquitetura multi-ambiente deve obrigatoriamente usar a mesma capacity para funcionar corretamente.",
      "A melhor prática é ter todos os workspaces em capacities separadas por ambiente; compartilhar capacity entre Dev/Test/Prod viola as diretrizes de arquitetura do Microsoft Fabric para ambientes corporativos."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Workloads de Dev/Test podem impactar a performance de Prod por consumo de CUs na capacity compartilhada; mitigar usando Capacity Metrics para monitorar consumo por workspace, configurando janelas de execução (ex: jobs de Dev apenas fora do horário comercial), considerando capacity separada para Prod em cenários críticos, e usando Deployment Pipelines para promoção controlada.",
      "intro": "Entendendo Deployment Pipelines e transformação de parâmetros",
      "papoReto": "Workloads de Dev/Test podem impactar a performance de Prod por consumo de CUs na capacity compartilhada; mitigar usando Capacity Metrics para monitorar consumo por workspace, configurando janelas de execução (ex: jobs de Dev apenas fora do horário comercial), considerando capacity separada para Prod em cenários críticos, e usando Deployment Pipelines para promoção controlada. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Múltiplos workspaces na mesma capacity são completamente isolados com recursos dedicados por workspace; não há risco de impacto entre Dev/Test e Prod quando todos estão na mesma capacity Fabric.: Esta opção contém erro técnico ou implementação não recomendada",
        "Workspaces em capacities diferentes não podem compartilhar dados via Shortcuts ou Deployment Pipelines; toda a arquitetura multi-ambiente deve obrigatoriamente usar a mesma capacity para funcionar corretamente.: Esta opção contém erro técnico ou implementação não recomendada",
        "A melhor prática é ter todos os workspaces em capacities separadas por ambiente; compartilhar capacity entre Dev/Test/Prod viola as diretrizes de arquitetura do Microsoft Fabric para ambientes corporativos.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q264",
    "text": "Em PySpark no Fabric, como você calcula percentis (P50, P95, P99) de latência de API agrupados por endpoint, de forma eficiente sem coletar dados no driver?",
    "options": [
      "`from pyspark.sql.functions import percentile_approx; df.groupBy(\"endpoint\").agg(percentile_approx(\"latencia_ms\", 0.5).alias(\"p50\"), percentile_approx(\"latencia_ms\", 0.95).alias(\"p95\"), percentile_approx(\"latencia_ms\", 0.99).alias(\"p99\"))`",
      "`df.groupBy(\"endpoint\").agg(expr(\"percentile(latencia_ms, array(0.5, 0.95, 0.99))\").alias(\"percentis\"))`",
      "`df.groupBy(\"endpoint\").apply(lambda g: pd.Series({\"p50\": g.latencia_ms.quantile(0.5), \"p95\": g.latencia_ms.quantile(0.95), \"p99\": g.latencia_ms.quantile(0.99)}))`",
      "`df.groupBy(\"endpoint\").agg(kurtosis(\"latencia_ms\"), skewness(\"latencia_ms\"))`"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`from pyspark.sql.functions import percentile_approx; df.groupBy(\"endpoint\").agg(percentile_approx(\"latencia_ms\", 0.5).alias(\"p50\"), percentile_approx(\"latencia_ms\", 0.95).alias(\"p95\"), percentile_approx(\"latencia_ms\", 0.99).alias(\"p99\"))`",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "`from pyspark.sql.functions import percentile_approx; df.groupBy(\"endpoint\").agg(percentile_approx(\"latencia_ms\", 0.5).alias(\"p50\"), percentile_approx(\"latencia_ms\", 0.95).alias(\"p95\"), percentile_approx(\"latencia_ms\", 0.99).alias(\"p99\"))` é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "`df.groupBy(\"endpoint\").agg(expr(\"percentile(latencia_ms, array(0.5, 0.95, 0.99))\").alias(\"percentis\"))`: Esta opção contém erro técnico ou implementação não recomendada",
        "`df.groupBy(\"endpoint\").apply(lambda g: pd.Series({\"p50\": g.latencia_ms.quantile(0.5), \"p95\": g.latencia_ms.quantile(0.95), \"p99\": g.latencia_ms.quantile(0.99)}))`: Esta opção contém erro técnico ou implementação não recomendada",
        "`df.groupBy(\"endpoint\").agg(kurtosis(\"latencia_ms\"), skewness(\"latencia_ms\"))`: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q265",
    "text": "Como você implementa observabilidade end-to-end em uma arquitetura Fabric complexa com múltiplos pipelines, notebooks e Eventstreams interdependentes?",
    "options": [
      "Habilitando Azure Application Insights para o workspace Fabric que automaticamente rastreia todas as execuções de pipeline, notebook e Eventstream com correlation IDs sem configuração adicional.",
      "Implementando Azure OpenTelemetry SDK nos notebooks e pipelines que envia traces automaticamente para o Azure Monitor com correlation IDs nativos do protocolo OpenTelemetry.",
      "Usando o Monitor Hub do Fabric como única fonte de verdade para observabilidade end-to-end; ele consolida automaticamente todos os eventos de todos os itens do workspace sem necessidade de instrumentação adicional.",
      "Implementando correlation IDs únicos por execução lógica propagados entre todos os componentes via parâmetros de pipeline e variáveis de notebook; registrando eventos de início/fim/erro em tabela Delta centralizada de observabilidade; criando dashboard Power BI com lineage de execução, SLA tracking e anomaly detection sobre os logs consolidados."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Implementando correlation IDs únicos por execução lógica propagados entre todos os componentes via parâmetros de pipeline e variáveis de notebook; registrando eventos de início/fim/erro em tabela Delta centralizada de observabilidade; criando dashboard Power BI com lineage de execução, SLA tracking e anomaly detection sobre os logs consolidados.",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "Implementando correlation IDs únicos por execução lógica propagados entre todos os componentes via parâmetros de pipeline e variáveis de notebook; registrando eventos de início/fim/erro em tabela Delta centralizada de observabilidade; criando dashboard Power BI com lineage de execução, SLA tracking e anomaly detection sobre os logs consolidados. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Habilitando Azure Application Insights para o workspace Fabric que automaticamente rastreia todas as execuções de pipeline, notebook e Eventstream com correlation IDs sem configuração adicional.: Esta opção contém erro técnico ou implementação não recomendada",
        "Implementando Azure OpenTelemetry SDK nos notebooks e pipelines que envia traces automaticamente para o Azure Monitor com correlation IDs nativos do protocolo OpenTelemetry.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando o Monitor Hub do Fabric como única fonte de verdade para observabilidade end-to-end; ele consolida automaticamente todos os eventos de todos os itens do workspace sem necessidade de instrumentação adicional.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q266",
    "text": "No Fabric Warehouse, como você implementa um processo ETL complexo que carrega dados de múltiplas tabelas de staging, aplica transformações de negócio e popula um star schema em uma única transação atômica?",
    "options": [
      "`BEGIN TRANSACTION; BEGIN TRY INSERT INTO dim_produto SELECT DISTINCT ... FROM stg_produtos WHERE NOT EXISTS ...; INSERT INTO dim_cliente ...; INSERT INTO fato_vendas SELECT s.*, dp.id_produto_sk, dc.id_cliente_sk FROM stg_vendas s JOIN dim_produto dp ON ... JOIN dim_cliente dc ON ...; COMMIT TRANSACTION; END TRY BEGIN CATCH ROLLBACK TRANSACTION; INSERT INTO log_erros VALUES (ERROR_MESSAGE(), GETDATE()); END CATCH`",
      "Criando um notebook PySpark que executa todas as transformações e usa `spark.sql(\"CALL sp_etl_completo()\")` para invocar a stored procedure transacional no Warehouse via conector synapsesql.",
      "Executando cada INSERT em transação separada com MERGE idempotente para garantir que reexecuções não causem duplicatas; transações únicas grandes são antipadrão no Fabric Warehouse por causar bloqueios excessivos.",
      "Usando a atividade \"Atomic ETL\" do Data Pipeline que agrupa múltiplas atividades de inserção em uma transação atômica; se qualquer atividade falhar, todas as inserções são automaticamente revertidas."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`BEGIN TRANSACTION; BEGIN TRY INSERT INTO dim_produto SELECT DISTINCT ... FROM stg_produtos WHERE NOT EXISTS ...; INSERT INTO dim_cliente ...; INSERT INTO fato_vendas SELECT s.*, dp.id_produto_sk, dc.id_cliente_sk FROM stg_vendas s JOIN dim_produto dp ON ... JOIN dim_cliente dc ON ...; COMMIT TRANSACTION; END TRY BEGIN CATCH ROLLBACK TRANSACTION; INSERT INTO log_erros VALUES (ERROR_MESSAGE(), GETDATE()); END CATCH`",
      "intro": "Entendendo Git integration e versionamento de artefatos",
      "papoReto": "`BEGIN TRANSACTION; BEGIN TRY INSERT INTO dim_produto SELECT DISTINCT ... FROM stg_produtos WHERE NOT EXISTS ...; INSERT INTO dim_cliente ...; INSERT INTO fato_vendas SELECT s.*, dp.id_produto_sk, dc.id_cliente_sk FROM stg_vendas s JOIN dim_produto dp ON ... JOIN dim_cliente dc ON ...; COMMIT TRANSACTION; END TRY BEGIN CATCH ROLLBACK TRANSACTION; INSERT INTO log_erros VALUES (ERROR_MESSAGE(), GETDATE()); END CATCH` é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Criando um notebook PySpark que executa todas as transformações e usa `spark.sql(\"CALL sp_etl_completo()\")` para invocar a stored procedure transacional no Warehouse via conector synapsesql.: Esta opção contém erro técnico ou implementação não recomendada",
        "Executando cada INSERT em transação separada com MERGE idempotente para garantir que reexecuções não causem duplicatas; transações únicas grandes são antipadrão no Fabric Warehouse por causar bloqueios excessivos.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando a atividade \"Atomic ETL\" do Data Pipeline que agrupa múltiplas atividades de inserção em uma transação atômica; se qualquer atividade falhar, todas as inserções são automaticamente revertidas.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q267",
    "text": "Um Eventstream no Fabric está com latência de processamento aumentando progressivamente ao longo de horas. Como você diagnostica e resolve o problema sistematicamente?",
    "options": [
      "Verificar métricas do Eventstream no portal Fabric (backlog crescente, throughput de entrada vs saída), analisar se as transformações aplicadas no canvas são computacionalmente custosas, verificar se o destino (Eventhouse) está com latência de ingestão alta via `.show ingestion failures`, e considerar simplificar transformações ou aumentar o paralelismo do destino reduzindo o tamanho dos batches de ingestão.",
      "Reiniciar o Eventstream via botão \"Reset\" no portal Fabric que limpa o backlog acumulado e reprocessa todos os eventos desde o início da fonte configurada.",
      "Converter o Eventstream para um notebook PySpark com Structured Streaming que tem melhor throughput e menor latência para volumes acima de 50.000 eventos por segundo.",
      "Aumentar a retenção do Azure Event Hubs fonte de 1 dia para 7 dias, pois latência crescente indica que o Eventstream está reprocessando eventos históricos ao invés de processar em tempo real."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Verificar métricas do Eventstream no portal Fabric (backlog crescente, throughput de entrada vs saída), analisar se as transformações aplicadas no canvas são computacionalmente custosas, verificar se o destino (Eventhouse) está com latência de ingestão alta via `.show ingestion failures`, e considerar simplificar transformações ou aumentar o paralelismo do destino reduzindo o tamanho dos batches de ingestão.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Verificar métricas do Eventstream no portal Fabric (backlog crescente, throughput de entrada vs saída), analisar se as transformações aplicadas no canvas são computacionalmente custosas, verificar se o destino (Eventhouse) está com latência de ingestão alta via `.show ingestion failures`, e considerar simplificar transformações ou aumentar o paralelismo do destino reduzindo o tamanho dos batches de ingestão. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Reiniciar o Eventstream via botão \"Reset\" no portal Fabric que limpa o backlog acumulado e reprocessa todos os eventos desde o início da fonte configurada.: Esta opção contém erro técnico ou implementação não recomendada",
        "Converter o Eventstream para um notebook PySpark com Structured Streaming que tem melhor throughput e menor latência para volumes acima de 50.000 eventos por segundo.: Esta opção contém erro técnico ou implementação não recomendada",
        "Aumentar a retenção do Azure Event Hubs fonte de 1 dia para 7 dias, pois latência crescente indica que o Eventstream está reprocessando eventos históricos ao invés de processar em tempo real.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q268",
    "text": "Em um Notebook Fabric, como você implementa o padrão Slowly Changing Dimension Tipo 2 usando PySpark com Delta Lake de forma eficiente?",
    "options": [
      "`df_novos.write.format(\"delta\").mode(\"overwrite\").option(\"replaceWhere\", \"ativo=true\").saveAsTable(\"dim_cliente\")`",
      "`df_novos.join(dim_cliente, \"cliente_id\", \"left_anti\").union(df_modificados).write.format(\"delta\").mode(\"append\").saveAsTable(\"dim_cliente\")`",
      "`from delta.tables import DeltaTable; dt = DeltaTable.forName(spark, \"dim_cliente\"); dt.alias(\"dest\").merge(df_novos.alias(\"src\"), \"dest.cliente_id = src.cliente_id AND dest.ativo = true\").whenMatchedUpdate(condition=\"dest.hash_atributos != src.hash_atributos\", set={\"ativo\": \"false\", \"data_fim\": \"current_timestamp()\"}).whenNotMatchedInsert(values={...todos os campos..., \"ativo\": \"true\", \"data_inicio\": \"current_timestamp()\", \"data_fim\": \"null\"}).execute(); df_modificados.write.format(\"delta\").mode(\"append\").saveAsTable(\"dim_cliente\")`",
      "`spark.sql(\"MERGE INTO dim_cliente USING df_novos ON cliente_id WHEN MATCHED AND hash != src.hash THEN UPDATE SET ativo=false WHEN NOT MATCHED THEN INSERT *\")`"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`from delta.tables import DeltaTable; dt = DeltaTable.forName(spark, \"dim_cliente\"); dt.alias(\"dest\").merge(df_novos.alias(\"src\"), \"dest.cliente_id = src.cliente_id AND dest.ativo = true\").whenMatchedUpdate(condition=\"dest.hash_atributos != src.hash_atributos\", set={\"ativo\": \"false\", \"data_fim\": \"current_timestamp()\"}).whenNotMatchedInsert(values={...todos os campos..., \"ativo\": \"true\", \"data_inicio\": \"current_timestamp()\", \"data_fim\": \"null\"}).execute(); df_modificados.write.format(\"delta\").mode(\"append\").saveAsTable(\"dim_cliente\")`",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "`from delta.tables import DeltaTable; dt = DeltaTable.forName(spark, \"dim_cliente\"); dt.alias(\"dest\").merge(df_novos.alias(\"src\"), \"dest.cliente_id = src.cliente_id AND dest.ativo = true\").whenMatchedUpdate(condition=\"dest.hash_atributos != src.hash_atributos\", set={\"ativo\": \"false\", \"data_fim\": \"current_timestamp()\"}).whenNotMatchedInsert(values={...todos os campos..., \"ativo\": \"true\", \"data_inicio\": \"current_timestamp()\", \"data_fim\": \"null\"}).execute(); df_modificados.write.format(\"delta\").mode(\"append\").saveAsTable(\"dim_cliente\")` é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "`df_novos.write.format(\"delta\").mode(\"overwrite\").option(\"replaceWhere\", \"ativo=true\").saveAsTable(\"dim_cliente\")`: Esta opção contém erro técnico ou implementação não recomendada",
        "`df_novos.join(dim_cliente, \"cliente_id\", \"left_anti\").union(df_modificados).write.format(\"delta\").mode(\"append\").saveAsTable(\"dim_cliente\")`: Esta opção contém erro técnico ou implementação não recomendada",
        "`spark.sql(\"MERGE INTO dim_cliente USING df_novos ON cliente_id WHEN MATCHED AND hash != src.hash THEN UPDATE SET ativo=false WHEN NOT MATCHED THEN INSERT *\")`: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q269",
    "text": "Quais são as principais estratégias de otimização de custo para uma equipe de engenharia de dados usando Microsoft Fabric em escala corporativa?",
    "options": [
      "Pausar capacities em horários de baixo uso (noite/fim de semana via Azure Automation), usar smoothing de operações em background agendando jobs pesados fora do horário de pico interativo, implementar OPTIMIZE/VACUUM para reduzir storage, remover itens e dados não utilizados, monitorar continuamente com Capacity Metrics App e rightsize o SKU baseado em uso real.",
      "Migrar todos os workloads para Azure Databricks que tem modelo de pricing por spot instances mais econômico para cargas de trabalho batch comparado ao modelo de CUs fixos do Fabric.",
      "Converter todos os Lakehouses para Warehouses que têm modelo de pricing mais econômico para armazenamento analítico; Lakehouses têm custo premium por usar Delta Lake como formato nativo.",
      "Limitar o número de usuários com acesso ao Fabric, pois o custo é calculado por usuário ativo simultaneamente; menos usuários acessando resulta em menor consumo de CUs e custo total."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Pausar capacities em horários de baixo uso (noite/fim de semana via Azure Automation), usar smoothing de operações em background agendando jobs pesados fora do horário de pico interativo, implementar OPTIMIZE/VACUUM para reduzir storage, remover itens e dados não utilizados, monitorar continuamente com Capacity Metrics App e rightsize o SKU baseado em uso real.",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "Pausar capacities em horários de baixo uso (noite/fim de semana via Azure Automation), usar smoothing de operações em background agendando jobs pesados fora do horário de pico interativo, implementar OPTIMIZE/VACUUM para reduzir storage, remover itens e dados não utilizados, monitorar continuamente com Capacity Metrics App e rightsize o SKU baseado em uso real. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Migrar todos os workloads para Azure Databricks que tem modelo de pricing por spot instances mais econômico para cargas de trabalho batch comparado ao modelo de CUs fixos do Fabric.: Esta opção contém erro técnico ou implementação não recomendada",
        "Converter todos os Lakehouses para Warehouses que têm modelo de pricing mais econômico para armazenamento analítico; Lakehouses têm custo premium por usar Delta Lake como formato nativo.: Esta opção contém erro técnico ou implementação não recomendada",
        "Limitar o número de usuários com acesso ao Fabric, pois o custo é calculado por usuário ativo simultaneamente; menos usuários acessando resulta em menor consumo de CUs e custo total.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q270",
    "text": "Em um Notebook Fabric, como você implementa orquestração de um pipeline de dados complexo com dependências condicionais usando `mssparkutils.notebook.runMultiple()`?",
    "options": [
      "Criando um arquivo YAML de DAG compatível com Apache Airflow e usando `mssparkutils.workflow.submitDAG(\"dag.yaml\")` que é o orquestrador nativo de notebooks do Microsoft Fabric.",
      "Usando `spark.sparkContext.submitJob([notebook_a, notebook_b], resultHandler=None, partitions=[0])` que submete notebooks como jobs Spark com dependências gerenciadas pelo Spark DAGScheduler.",
      "Usando `asyncio.gather(*[mssparkutils.notebook.runAsync(nb) for nb in notebooks_paralelos])` para execução assíncrona paralela, seguido de chamadas sequenciais para notebooks dependentes após o `await`.",
      "`dag = {\"notebook_a\": {\"timeout\": 1800, \"retry\": 2}, \"notebook_b\": {\"depends_on\": [\"notebook_a\"], \"timeout\": 3600}, \"notebook_c\": {\"depends_on\": [\"notebook_a\"], \"timeout\": 1800}, \"notebook_d\": {\"depends_on\": [\"notebook_b\", \"notebook_c\"], \"timeout\": 900}}; mssparkutils.notebook.runMultiple(dag)` — o DAG define dependências explícitas e paralelismo automático onde possível."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`dag = {\"notebook_a\": {\"timeout\": 1800, \"retry\": 2}, \"notebook_b\": {\"depends_on\": [\"notebook_a\"], \"timeout\": 3600}, \"notebook_c\": {\"depends_on\": [\"notebook_a\"], \"timeout\": 1800}, \"notebook_d\": {\"depends_on\": [\"notebook_b\", \"notebook_c\"], \"timeout\": 900}}; mssparkutils.notebook.runMultiple(dag)` — o DAG define dependências explícitas e paralelismo automático onde possível.",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "`dag = {\"notebook_a\": {\"timeout\": 1800, \"retry\": 2}, \"notebook_b\": {\"depends_on\": [\"notebook_a\"], \"timeout\": 3600}, \"notebook_c\": {\"depends_on\": [\"notebook_a\"], \"timeout\": 1800}, \"notebook_d\": {\"depends_on\": [\"notebook_b\", \"notebook_c\"], \"timeout\": 900}}; mssparkutils.notebook.runMultiple(dag)` — o DAG define dependências explícitas e paralelismo automático onde possível. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Criando um arquivo YAML de DAG compatível com Apache Airflow e usando `mssparkutils.workflow.submitDAG(\"dag.yaml\")` que é o orquestrador nativo de notebooks do Microsoft Fabric.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando `spark.sparkContext.submitJob([notebook_a, notebook_b], resultHandler=None, partitions=[0])` que submete notebooks como jobs Spark com dependências gerenciadas pelo Spark DAGScheduler.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando `asyncio.gather(*[mssparkutils.notebook.runAsync(nb) for nb in notebooks_paralelos])` para execução assíncrona paralela, seguido de chamadas sequenciais para notebooks dependentes após o `await`.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q271",
    "text": "Como você implementa telemetria customizada em Data Pipelines do Fabric para rastrear métricas de negócio específicas (como registros processados por categoria) além das métricas padrão do Monitor Hub?",
    "options": [
      "Configurando \"Custom Metrics\" nas propriedades avançadas de cada atividade do pipeline que automaticamente registra métricas adicionais no Monitor Hub além das métricas padrão de duração e status.",
      "Usando Azure Application Insights SDK dentro de atividades Script do pipeline que envia eventos customizados via `track_event()` para o workspace de Application Insights configurado no tenant.",
      "Usando atividades Script ou Stored Procedure após cada etapa crítica para inserir métricas customizadas em tabela Delta de telemetria com campos como `pipeline_run_id = @pipeline().RunId`, `metrica_nome`, `metrica_valor` e `timestamp`; consultável via SQL Analytics Endpoint para dashboards de operações customizados.",
      "Habilitando \"Extended Telemetry\" nas configurações do workspace Fabric que registra automaticamente todas as métricas de execução em uma tabela `workspace_telemetry` no Lakehouse padrão do workspace."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Usando atividades Script ou Stored Procedure após cada etapa crítica para inserir métricas customizadas em tabela Delta de telemetria com campos como `pipeline_run_id = @pipeline().RunId`, `metrica_nome`, `metrica_valor` e `timestamp`; consultável via SQL Analytics Endpoint para dashboards de operações customizados.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Usando atividades Script ou Stored Procedure após cada etapa crítica para inserir métricas customizadas em tabela Delta de telemetria com campos como `pipeline_run_id = @pipeline().RunId`, `metrica_nome`, `metrica_valor` e `timestamp`; consultável via SQL Analytics Endpoint para dashboards de operações customizados. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Configurando \"Custom Metrics\" nas propriedades avançadas de cada atividade do pipeline que automaticamente registra métricas adicionais no Monitor Hub além das métricas padrão de duração e status.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando Azure Application Insights SDK dentro de atividades Script do pipeline que envia eventos customizados via `track_event()` para o workspace de Application Insights configurado no tenant.: Esta opção contém erro técnico ou implementação não recomendada",
        "Habilitando \"Extended Telemetry\" nas configurações do workspace Fabric que registra automaticamente todas as métricas de execução em uma tabela `workspace_telemetry` no Lakehouse padrão do workspace.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q272",
    "text": "No Fabric Warehouse, como você implementa análise de cohort de clientes usando T-SQL para identificar retenção por mês de aquisição?",
    "options": [
      "`WITH cohorts AS (SELECT cliente_id, MIN(DATE_TRUNC('month', data_compra)) AS cohort_mes FROM compras GROUP BY cliente_id), retencao AS (SELECT c.cohort_mes, DATEDIFF(month, c.cohort_mes, DATE_TRUNC('month', cp.data_compra)) AS mes_relativo, COUNT(DISTINCT cp.cliente_id) AS clientes FROM compras cp JOIN cohorts c ON cp.cliente_id = c.cliente_id GROUP BY c.cohort_mes, mes_relativo) SELECT cohort_mes, mes_relativo, clientes, clientes * 100.0 / FIRST_VALUE(clientes) OVER (PARTITION BY cohort_mes ORDER BY mes_relativo) AS taxa_retencao FROM retencao ORDER BY cohort_mes, mes_relativo`",
      "Criando uma stored procedure com cursor que itera sobre cada mês de cohort e calcula a retenção individualmente, inserindo em tabela resultado linha por linha para cada combinação cohort/mes_relativo.",
      "Usando `PIVOT (COUNT(cliente_id) FOR mes_relativo IN ([0],[1],[2],[3],[4],[5]))` diretamente sobre a tabela de compras sem CTE intermediária para cálculo de cohort dinâmico.",
      "Usando `CROSS APPLY (SELECT COUNT(*) FROM compras WHERE cliente_id = c.cliente_id AND DATEDIFF(month, cohort_mes, data_compra) = n.mes) AS retencao(clientes)` com tabela de números gerada por `GENERATE_SERIES(0,12,1)`."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`WITH cohorts AS (SELECT cliente_id, MIN(DATE_TRUNC('month', data_compra)) AS cohort_mes FROM compras GROUP BY cliente_id), retencao AS (SELECT c.cohort_mes, DATEDIFF(month, c.cohort_mes, DATE_TRUNC('month', cp.data_compra)) AS mes_relativo, COUNT(DISTINCT cp.cliente_id) AS clientes FROM compras cp JOIN cohorts c ON cp.cliente_id = c.cliente_id GROUP BY c.cohort_mes, mes_relativo) SELECT cohort_mes, mes_relativo, clientes, clientes * 100.0 / FIRST_VALUE(clientes) OVER (PARTITION BY cohort_mes ORDER BY mes_relativo) AS taxa_retencao FROM retencao ORDER BY cohort_mes, mes_relativo`",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "`WITH cohorts AS (SELECT cliente_id, MIN(DATE_TRUNC('month', data_compra)) AS cohort_mes FROM compras GROUP BY cliente_id), retencao AS (SELECT c.cohort_mes, DATEDIFF(month, c.cohort_mes, DATE_TRUNC('month', cp.data_compra)) AS mes_relativo, COUNT(DISTINCT cp.cliente_id) AS clientes FROM compras cp JOIN cohorts c ON cp.cliente_id = c.cliente_id GROUP BY c.cohort_mes, mes_relativo) SELECT cohort_mes, mes_relativo, clientes, clientes * 100.0 / FIRST_VALUE(clientes) OVER (PARTITION BY cohort_mes ORDER BY mes_relativo) AS taxa_retencao FROM retencao ORDER BY cohort_mes, mes_relativo` é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Criando uma stored procedure com cursor que itera sobre cada mês de cohort e calcula a retenção individualmente, inserindo em tabela resultado linha por linha para cada combinação cohort/mes_relativo.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando `PIVOT (COUNT(cliente_id) FOR mes_relativo IN ([0],[1],[2],[3],[4],[5]))` diretamente sobre a tabela de compras sem CTE intermediária para cálculo de cohort dinâmico.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando `CROSS APPLY (SELECT COUNT(*) FROM compras WHERE cliente_id = c.cliente_id AND DATEDIFF(month, cohort_mes, data_compra) = n.mes) AS retencao(clientes)` com tabela de números gerada por `GENERATE_SERIES(0,12,1)`.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q273",
    "text": "Quais são as melhores práticas de engenharia de dados no Microsoft Fabric para garantir pipelines resilientes, eficientes e governados em ambiente de produção?",
    "options": [
      "Centralizar toda a lógica de transformação em stored procedures no Warehouse para facilitar debugging via SSMS, usar pipelines apenas para orquestração sequencial simples, e manter ambientes Dev/Test/Prod em capacities completamente separadas sem compartilhamento.",
      "Implementar idempotência em todas as cargas (MERGE em vez de INSERT/OVERWRITE cego), usar Git integration para versionamento, Deployment Pipelines para promoção controlada, Workspace Logging para auditoria, testes de qualidade de dados antes de cada carga Gold, OPTIMIZE/VACUUM agendados, monitoramento via Capacity Metrics App e alertas proativos para SLA violations.",
      "Usar exclusivamente overwrite mode em todas as cargas para garantir idempotência simples, manter todos os ambientes em um único workspace com prefixos de nomenclatura para separação, e executar OPTIMIZE apenas mensalmente para minimizar consumo de CUs.",
      "Priorizar Dataflows Gen2 para todas as transformações por sua interface visual de fácil manutenção, evitar notebooks PySpark em produção por seu código imperativo difícil de testar, e usar Direct Lake para todos os modelos semânticos eliminando necessidade de refresh."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Implementar idempotência em todas as cargas (MERGE em vez de INSERT/OVERWRITE cego), usar Git integration para versionamento, Deployment Pipelines para promoção controlada, Workspace Logging para auditoria, testes de qualidade de dados antes de cada carga Gold, OPTIMIZE/VACUUM agendados, monitoramento via Capacity Metrics App e alertas proativos para SLA violations.",
      "intro": "Entendendo Deployment Pipelines e transformação de parâmetros",
      "papoReto": "Implementar idempotência em todas as cargas (MERGE em vez de INSERT/OVERWRITE cego), usar Git integration para versionamento, Deployment Pipelines para promoção controlada, Workspace Logging para auditoria, testes de qualidade de dados antes de cada carga Gold, OPTIMIZE/VACUUM agendados, monitoramento via Capacity Metrics App e alertas proativos para SLA violations. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Centralizar toda a lógica de transformação em stored procedures no Warehouse para facilitar debugging via SSMS, usar pipelines apenas para orquestração sequencial simples, e manter ambientes Dev/Test/Prod em capacities completamente separadas sem compartilhamento.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usar exclusivamente overwrite mode em todas as cargas para garantir idempotência simples, manter todos os ambientes em um único workspace com prefixos de nomenclatura para separação, e executar OPTIMIZE apenas mensalmente para minimizar consumo de CUs.: Esta opção contém erro técnico ou implementação não recomendada",
        "Priorizar Dataflows Gen2 para todas as transformações por sua interface visual de fácil manutenção, evitar notebooks PySpark em produção por seu código imperativo difícil de testar, e usar Direct Lake para todos os modelos semânticos eliminando necessidade de refresh.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q274",
    "text": "Em um Notebook Fabric, como você lê dados de um Warehouse do mesmo workspace usando o conector nativo `synapsesql` e qual é a vantagem sobre JDBC?",
    "options": [
      "`df = spark.read.format(\"com.microsoft.sqlserver.jdbc.spark\").option(\"url\", warehouse_connection_string).option(\"dbtable\", \"schema.table\").load()`",
      "`df = spark.sql(\"SELECT * FROM warehouse_name.schema.table_name\")`",
      "`df = spark.read.jdbc(url=f\"jdbc:sqlserver://{warehouse_endpoint};database={warehouse_name}\", table=\"schema.table\", properties={\"authentication\": \"ActiveDirectoryMSI\"})`",
      "`df = spark.read.synapsesql(\"warehouse_name.schema.table_name\")`"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`df = spark.read.synapsesql(\"warehouse_name.schema.table_name\")`",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "`df = spark.read.synapsesql(\"warehouse_name.schema.table_name\")` é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "`df = spark.read.format(\"com.microsoft.sqlserver.jdbc.spark\").option(\"url\", warehouse_connection_string).option(\"dbtable\", \"schema.table\").load()`: Esta opção contém erro técnico ou implementação não recomendada",
        "`df = spark.sql(\"SELECT * FROM warehouse_name.schema.table_name\")`: Esta opção contém erro técnico ou implementação não recomendada",
        "`df = spark.read.jdbc(url=f\"jdbc:sqlserver://{warehouse_endpoint};database={warehouse_name}\", table=\"schema.table\", properties={\"authentication\": \"ActiveDirectoryMSI\"})`: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q275",
    "text": "Um notebook Fabric falha com `DeltaConcurrentModificationException: Files were added to the root of the table by a concurrent update` durante uma operação MERGE. Qual é a causa e solução correta?",
    "options": [
      "O erro ocorre quando dois processos simultâneos tentam modificar a mesma tabela Delta ao mesmo tempo sem particionamento adequado; resolver redesenhando o pipeline para serializar escritas na mesma tabela, usando partições diferentes para escritas paralelas, ou habilitando `spark.conf.set(\"spark.databricks.delta.retryWriteConflict.enabled\", \"true\")` para retry automático com backoff.",
      "O erro indica que a tabela atingiu o limite máximo de 10.000 arquivos por diretório do OneLake; executar OPTIMIZE para compactar arquivos e reduzir abaixo do limite antes de tentar o MERGE novamente.",
      "O erro é causado por versão incompatível do Delta Lake entre notebooks; verificar se todos os notebooks usam o mesmo runtime Spark e atualizar os que usam versões antigas do Delta Lake via Environment do workspace.",
      "O erro indica corrupção do transaction log Delta; resolver executando `FSCK REPAIR TABLE nome_tabela` que verifica e corrige automaticamente inconsistências nos arquivos de log."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "O erro ocorre quando dois processos simultâneos tentam modificar a mesma tabela Delta ao mesmo tempo sem particionamento adequado; resolver redesenhando o pipeline para serializar escritas na mesma tabela, usando partições diferentes para escritas paralelas, ou habilitando `spark.conf.set(\"spark.databricks.delta.retryWriteConflict.enabled\", \"true\")` para retry automático com backoff.",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "O erro ocorre quando dois processos simultâneos tentam modificar a mesma tabela Delta ao mesmo tempo sem particionamento adequado; resolver redesenhando o pipeline para serializar escritas na mesma tabela, usando partições diferentes para escritas paralelas, ou habilitando `spark.conf.set(\"spark.databricks.delta.retryWriteConflict.enabled\", \"true\")` para retry automático com backoff. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "O erro indica que a tabela atingiu o limite máximo de 10.000 arquivos por diretório do OneLake; executar OPTIMIZE para compactar arquivos e reduzir abaixo do limite antes de tentar o MERGE novamente.: Esta opção contém erro técnico ou implementação não recomendada",
        "O erro é causado por versão incompatível do Delta Lake entre notebooks; verificar se todos os notebooks usam o mesmo runtime Spark e atualizar os que usam versões antigas do Delta Lake via Environment do workspace.: Esta opção contém erro técnico ou implementação não recomendada",
        "O erro indica corrupção do transaction log Delta; resolver executando `FSCK REPAIR TABLE nome_tabela` que verifica e corrige automaticamente inconsistências nos arquivos de log.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q276",
    "text": "Em KQL no Fabric Eventhouse, como você implementa um join eficiente entre uma tabela de eventos grande (bilhões de linhas) e uma tabela de dimensão pequena (milhares de linhas)?",
    "options": [
      "`EventosGrandes | join kind=inner hint.strategy=broadcast (DimensaoPequena) on chave_comum`",
      "`EventosGrandes | join kind=rightouter (DimensaoPequena) on chave_comum | where chave_comum != \"\"`",
      "`DimensaoPequena | join kind=inner (EventosGrandes) on chave_comum`",
      "`EventosGrandes | lookup kind=leftouter (DimensaoPequena) on chave_comum`"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`EventosGrandes | lookup kind=leftouter (DimensaoPequena) on chave_comum`",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Para dados de streaming/IoT em alta velocidade: Eventstream captura eventos (IoT Hub, Event Hubs) → Eventhouse processa tempo real com KQL → Lakehouse persistencia via Structured Streaming/Eventstream destination.",
      "puloDoGato": "Eventstream → Eventhouse (tempo real KQL) → Lakehouse (persistencia Delta)",
      "cascasDeBanana": [
        "Stream Analytics via Shortcut: Shortcuts são read-only, não processam streams",
        "Dataflow Gen2 streaming: Dataflows é low-code, não nativo para high-speed IoT",
        "Data Pipeline de 1min: Pipelines batched em 1 minuto não é ideal para IoT contínuo"
      ],
      "dicaOuro": "Real-time streaming = Eventstream + Eventhouse. Persistencia = Delta em Lakehouse"
    }
  },
  {
    "id": "dp700_q277",
    "text": "Como você implementa os princípios de Zero Trust em uma arquitetura de engenharia de dados no Microsoft Fabric?",
    "options": [
      "Zero Trust no contexto do Fabric significa usar exclusivamente Sensitive Labels do nível mais alto (Highly Confidential) em todos os itens e dados, independente da classificação real dos dados.",
      "Aplicar least privilege em permissões de workspace e itens (sem Admin desnecessário), usar Managed Identities em vez de credenciais hardcoded, habilitar Conditional Access para acesso ao Fabric, configurar Private Endpoints para fontes de dados críticas, implementar Workspace Logging para auditoria contínua, e aplicar Sensitivity Labels em dados classificados com políticas de DLP.",
      "Zero Trust no Fabric requer apenas habilitar MFA para todos os usuários; as demais configurações de segurança são opcionais e relevantes apenas para organizações em setores regulados como financeiro e saúde.",
      "Zero Trust é implementado exclusivamente via Azure Firewall e Network Security Groups que bloqueiam todo o tráfego não explicitamente permitido para os endpoints do Fabric; configurações dentro do Fabric não fazem parte do modelo Zero Trust."
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Implementar e gerenciar uma solução analítica",
    "explanation": {
      "respostaCerta": "Aplicar least privilege em permissões de workspace e itens (sem Admin desnecessário), usar Managed Identities em vez de credenciais hardcoded, habilitar Conditional Access para acesso ao Fabric, configurar Private Endpoints para fontes de dados críticas, implementar Workspace Logging para auditoria contínua, e aplicar Sensitivity Labels em dados classificados com políticas de DLP.",
      "intro": "Entendendo Fabric workspace e gerenciamento de recursos",
      "papoReto": "Aplicar least privilege em permissões de workspace e itens (sem Admin desnecessário), usar Managed Identities em vez de credenciais hardcoded, habilitar Conditional Access para acesso ao Fabric, configurar Private Endpoints para fontes de dados críticas, implementar Workspace Logging para auditoria contínua, e aplicar Sensitivity Labels em dados classificados com políticas de DLP. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Zero Trust no contexto do Fabric significa usar exclusivamente Sensitive Labels do nível mais alto (Highly Confidential) em todos os itens e dados, independente da classificação real dos dados.: Esta opção contém erro técnico ou implementação não recomendada",
        "Zero Trust no Fabric requer apenas habilitar MFA para todos os usuários; as demais configurações de segurança são opcionais e relevantes apenas para organizações em setores regulados como financeiro e saúde.: Esta opção contém erro técnico ou implementação não recomendada",
        "Zero Trust é implementado exclusivamente via Azure Firewall e Network Security Groups que bloqueiam todo o tráfego não explicitamente permitido para os endpoints do Fabric; configurações dentro do Fabric não fazem parte do modelo Zero Trust.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q278",
    "text": "No Fabric Warehouse, como você calcula o percentual de contribuição de cada produto para o total de vendas por categoria usando funções de janela T-SQL?",
    "options": [
      "`SELECT produto, categoria, vendas, PERCENT_RANK() OVER (PARTITION BY categoria ORDER BY vendas) AS pct_contribuicao FROM dbo.fato_vendas`",
      "`SELECT produto, categoria, vendas, vendas * 100.0 / SUM(vendas) OVER (PARTITION BY categoria) AS pct_contribuicao, RANK() OVER (PARTITION BY categoria ORDER BY vendas DESC) AS ranking_categoria FROM dbo.fato_vendas ORDER BY categoria, ranking_categoria`",
      "`SELECT produto, categoria, vendas, vendas / SUM(vendas) GROUP BY categoria * 100 AS pct_contribuicao FROM dbo.fato_vendas`",
      "`SELECT produto, categoria, vendas, CUME_DIST() OVER (PARTITION BY categoria ORDER BY vendas) * 100 AS pct_contribuicao FROM dbo.fato_vendas`"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`SELECT produto, categoria, vendas, vendas * 100.0 / SUM(vendas) OVER (PARTITION BY categoria) AS pct_contribuicao, RANK() OVER (PARTITION BY categoria ORDER BY vendas DESC) AS ranking_categoria FROM dbo.fato_vendas ORDER BY categoria, ranking_categoria`",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "`SELECT produto, categoria, vendas, vendas * 100.0 / SUM(vendas) OVER (PARTITION BY categoria) AS pct_contribuicao, RANK() OVER (PARTITION BY categoria ORDER BY vendas DESC) AS ranking_categoria FROM dbo.fato_vendas ORDER BY categoria, ranking_categoria` é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "`SELECT produto, categoria, vendas, PERCENT_RANK() OVER (PARTITION BY categoria ORDER BY vendas) AS pct_contribuicao FROM dbo.fato_vendas`: Esta opção contém erro técnico ou implementação não recomendada",
        "`SELECT produto, categoria, vendas, vendas / SUM(vendas) GROUP BY categoria * 100 AS pct_contribuicao FROM dbo.fato_vendas`: Esta opção contém erro técnico ou implementação não recomendada",
        "`SELECT produto, categoria, vendas, CUME_DIST() OVER (PARTITION BY categoria ORDER BY vendas) * 100 AS pct_contribuicao FROM dbo.fato_vendas`: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q279",
    "text": "Em um pipeline de produção no Fabric, como você usa profiling de dados de forma eficiente sem impactar o tempo total de execução?",
    "options": [
      "Usando `df.describe().toPandas()` no início de cada execução de produção para garantir que os dados estão dentro dos limites esperados; o overhead é desprezível mesmo para DataFrames de 100 GB.",
      "Desabilitando completamente o profiling em produção e executando análises de qualidade apenas em ambiente de desenvolvimento; profiling em produção sempre impacta negativamente o SLA de processamento.",
      "Executando profiling em amostras representativas com `df.sample(0.1)` em vez do dataset completo, armazenando o resultado do profiling como artefato Delta separado para análise posterior, e condicionando a execução do profiling a uma variável de configuração (`ENABLE_PROFILING=true`) para evitar overhead em execuções normais de produção.",
      "Usando profiling assíncrono com `threading.Thread(target=profile_data, args=(df,)).start()` que executa o profiling em paralelo com o processamento principal sem impactar o tempo total de execução."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Executando profiling em amostras representativas com `df.sample(0.1)` em vez do dataset completo, armazenando o resultado do profiling como artefato Delta separado para análise posterior, e condicionando a execução do profiling a uma variável de configuração (`ENABLE_PROFILING=true`) para evitar overhead em execuções normais de produção.",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "Executando profiling em amostras representativas com `df.sample(0.1)` em vez do dataset completo, armazenando o resultado do profiling como artefato Delta separado para análise posterior, e condicionando a execução do profiling a uma variável de configuração (`ENABLE_PROFILING=true`) para evitar overhead em execuções normais de produção. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Usando `df.describe().toPandas()` no início de cada execução de produção para garantir que os dados estão dentro dos limites esperados; o overhead é desprezível mesmo para DataFrames de 100 GB.: Esta opção contém erro técnico ou implementação não recomendada",
        "Desabilitando completamente o profiling em produção e executando análises de qualidade apenas em ambiente de desenvolvimento; profiling em produção sempre impacta negativamente o SLA de processamento.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando profiling assíncrono com `threading.Thread(target=profile_data, args=(df,)).start()` que executa o profiling em paralelo com o processamento principal sem impactar o tempo total de execução.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q280",
    "text": "Em um Data Pipeline do Fabric, como você implementa o padrão Idempotent Load que garante que reexecuções do pipeline não causem duplicação de dados no Lakehouse?",
    "options": [
      "Usando MERGE INTO na tabela de destino baseado na chave de negócio (garantindo upsert em vez de insert cego), ou usando `replaceWhere` no modo overwrite para substituir apenas as partições afetadas pela execução, ou implementando deduplicação via `dropDuplicates()` antes do append combinado com constraint CHECK na tabela Delta.",
      "Truncando a tabela de destino no início de cada execução com atividade Script antes do Copy Data; truncate + insert garante que a tabela sempre reflita o estado atual da fonte sem duplicatas.",
      "Usando o modo \"Idempotent\" disponível na atividade Copy Data do pipeline que automaticamente verifica duplicatas antes de cada inserção usando hash MD5 de todas as colunas.",
      "Adicionando timestamp de carga como coluna e filtrando por `WHERE data_carga < @data_atual` antes de cada INSERT que ignora automaticamente registros já carregados em execuções anteriores."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Usando MERGE INTO na tabela de destino baseado na chave de negócio (garantindo upsert em vez de insert cego), ou usando `replaceWhere` no modo overwrite para substituir apenas as partições afetadas pela execução, ou implementando deduplicação via `dropDuplicates()` antes do append combinado com constraint CHECK na tabela Delta.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Usando MERGE INTO na tabela de destino baseado na chave de negócio (garantindo upsert em vez de insert cego), ou usando `replaceWhere` no modo overwrite para substituir apenas as partições afetadas pela execução, ou implementando deduplicação via `dropDuplicates()` antes do append combinado com constraint CHECK na tabela Delta. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Truncando a tabela de destino no início de cada execução com atividade Script antes do Copy Data; truncate + insert garante que a tabela sempre reflita o estado atual da fonte sem duplicatas.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando o modo \"Idempotent\" disponível na atividade Copy Data do pipeline que automaticamente verifica duplicatas antes de cada inserção usando hash MD5 de todas as colunas.: Esta opção contém erro técnico ou implementação não recomendada",
        "Adicionando timestamp de carga como coluna e filtrando por `WHERE data_carga < @data_atual` antes de cada INSERT que ignora automaticamente registros já carregados em execuções anteriores.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q281",
    "text": "Como você constrói um dashboard de governança de dados no Fabric que consolida métricas de qualidade, linhagem e utilização de dados de toda a organização?",
    "options": [
      "Exportando todos os logs do Azure Monitor para o Power BI via conector nativo de Log Analytics que gera automaticamente dashboards de governança com as métricas do Fabric organizadas por workspace e usuário.",
      "Contratando o Microsoft Purview como solução standalone de governança que inclui dashboard pré-configurado com todas as métricas necessárias, sem necessidade de desenvolvimento customizado no Fabric.",
      "Combinando dados do Workspace Logging (acessos e operações), Capacity Metrics (utilização por workspace), logs de qualidade das tabelas de auditoria dos pipelines, e metadados do Purview via API em um Lakehouse centralizado de governança; construindo modelo semântico Power BI sobre esse Lakehouse com relatório executivo de KPIs de governança.",
      "Usando o dashboard de governança nativo do Microsoft Fabric Admin Portal que consolida automaticamente todas as métricas de qualidade, linhagem e utilização de todos os workspaces do tenant sem configuração adicional."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Combinando dados do Workspace Logging (acessos e operações), Capacity Metrics (utilização por workspace), logs de qualidade das tabelas de auditoria dos pipelines, e metadados do Purview via API em um Lakehouse centralizado de governança; construindo modelo semântico Power BI sobre esse Lakehouse com relatório executivo de KPIs de governança.",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "Combinando dados do Workspace Logging (acessos e operações), Capacity Metrics (utilização por workspace), logs de qualidade das tabelas de auditoria dos pipelines, e metadados do Purview via API em um Lakehouse centralizado de governança; construindo modelo semântico Power BI sobre esse Lakehouse com relatório executivo de KPIs de governança. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Exportando todos os logs do Azure Monitor para o Power BI via conector nativo de Log Analytics que gera automaticamente dashboards de governança com as métricas do Fabric organizadas por workspace e usuário.: Esta opção contém erro técnico ou implementação não recomendada",
        "Contratando o Microsoft Purview como solução standalone de governança que inclui dashboard pré-configurado com todas as métricas necessárias, sem necessidade de desenvolvimento customizado no Fabric.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando o dashboard de governança nativo do Microsoft Fabric Admin Portal que consolida automaticamente todas as métricas de qualidade, linhagem e utilização de todos os workspaces do tenant sem configuração adicional.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q282",
    "text": "Em um Notebook Fabric, como você implementa uma transformação de pivoting dinâmico onde as colunas são determinadas em tempo de execução baseadas nos dados?",
    "options": [
      "`df.groupBy(\"produto\").pivot(\"categoria\").sum(\"vendas\")`",
      "`categorias = [row[0] for row in df.select(\"categoria\").distinct().collect()]; pivot_df = df.groupBy(\"produto\").pivot(\"categoria\", categorias).agg(sum(\"vendas\")); pivot_df.write.format(\"delta\").mode(\"overwrite\").saveAsTable(\"vendas_pivot\")`",
      "`spark.sql(f\"SELECT produto, {', '.join([f'SUM(CASE WHEN categoria = \\\"{c}\\\" THEN vendas END) AS {c}' for c in categorias])} FROM vendas GROUP BY produto\")`",
      "`df.withColumn(\"pivot_col\", concat(lit(\"vendas_\"), col(\"categoria\"))).groupBy(\"produto\").agg(collect_list(struct(\"pivot_col\", \"vendas\")).alias(\"metricas\"))`"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`categorias = [row[0] for row in df.select(\"categoria\").distinct().collect()]; pivot_df = df.groupBy(\"produto\").pivot(\"categoria\", categorias).agg(sum(\"vendas\")); pivot_df.write.format(\"delta\").mode(\"overwrite\").saveAsTable(\"vendas_pivot\")`",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "`categorias = [row[0] for row in df.select(\"categoria\").distinct().collect()]; pivot_df = df.groupBy(\"produto\").pivot(\"categoria\", categorias).agg(sum(\"vendas\")); pivot_df.write.format(\"delta\").mode(\"overwrite\").saveAsTable(\"vendas_pivot\")` é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "`df.groupBy(\"produto\").pivot(\"categoria\").sum(\"vendas\")`: Esta opção contém erro técnico ou implementação não recomendada",
        "`spark.sql(f\"SELECT produto, {', '.join([f'SUM(CASE WHEN categoria = \\\"{c}\\\" THEN vendas END) AS {c}' for c in categorias])} FROM vendas GROUP BY produto\")`: Esta opção contém erro técnico ou implementação não recomendada",
        "`df.withColumn(\"pivot_col\", concat(lit(\"vendas_\"), col(\"categoria\"))).groupBy(\"produto\").agg(collect_list(struct(\"pivot_col\", \"vendas\")).alias(\"metricas\"))`: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q283",
    "text": "Uma empresa quer migrar de Azure Synapse Analytics para Microsoft Fabric. Quais são os principais mapeamentos de componentes e considerações de migração para engenheiros de dados?",
    "options": [
      "Fabric não suporta cargas de trabalho do tipo SQL Pool Dedicado; empresas com Synapse Dedicated SQL Pool devem migrar para Azure SQL Database Hyperscale que tem melhor compatibilidade de arquitetura com o Fabric.",
      "Synapse Analytics é completamente substituído pelo Fabric sem necessidade de migração; a Microsoft migra automaticamente todos os recursos Synapse para Fabric quando o tenant habilita o Microsoft Fabric no Admin Portal.",
      "Synapse Spark Pools → Fabric Notebooks/Lakehouses (Delta Lake nativo); Synapse SQL Pools (Dedicated) → Fabric Warehouse; Synapse SQL Serverless → Fabric SQL Analytics Endpoint; Synapse Pipelines → Fabric Data Pipelines (mesma tecnologia ADF); Synapse Link → Fabric Mirroring; considerações: retestar performance, adaptar scripts para Fabric Runtime, migrar linked services para conexões Fabric.",
      "A migração de Synapse para Fabric requer reescrever todo o código PySpark pois o Fabric usa uma versão proprietária do Spark incompatível com o Synapse Spark; apenas T-SQL pode ser reutilizado sem modificações."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Synapse Spark Pools → Fabric Notebooks/Lakehouses (Delta Lake nativo); Synapse SQL Pools (Dedicated) → Fabric Warehouse; Synapse SQL Serverless → Fabric SQL Analytics Endpoint; Synapse Pipelines → Fabric Data Pipelines (mesma tecnologia ADF); Synapse Link → Fabric Mirroring; considerações: retestar performance, adaptar scripts para Fabric Runtime, migrar linked services para conexões Fabric.",
      "intro": "Entendendo Shortcuts como virtual links vs. Mirror para cópias reais",
      "papoReto": "Synapse Spark Pools → Fabric Notebooks/Lakehouses (Delta Lake nativo); Synapse SQL Pools (Dedicated) → Fabric Warehouse; Synapse SQL Serverless → Fabric SQL Analytics Endpoint; Synapse Pipelines → Fabric Data Pipelines (mesma tecnologia ADF); Synapse Link → Fabric Mirroring; considerações: retestar performance, adaptar scripts para Fabric Runtime, migrar linked services para conexões Fabric. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Fabric não suporta cargas de trabalho do tipo SQL Pool Dedicado; empresas com Synapse Dedicated SQL Pool devem migrar para Azure SQL Database Hyperscale que tem melhor compatibilidade de arquitetura com o Fabric.: Esta opção contém erro técnico ou implementação não recomendada",
        "Synapse Analytics é completamente substituído pelo Fabric sem necessidade de migração; a Microsoft migra automaticamente todos os recursos Synapse para Fabric quando o tenant habilita o Microsoft Fabric no Admin Portal.: Esta opção contém erro técnico ou implementação não recomendada",
        "A migração de Synapse para Fabric requer reescrever todo o código PySpark pois o Fabric usa uma versão proprietária do Spark incompatível com o Synapse Spark; apenas T-SQL pode ser reutilizado sem modificações.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q284",
    "text": "Um banco de dados transacional Oracle on-premises com 200 tabelas precisa ser migrado para um Lakehouse no Fabric com processamento diário incremental, qualidade de dados garantida e disponibilidade para analistas SQL e modelos ML. Descreva a arquitetura completa.",
    "options": [
      "Instalar Azure Data Migration Service que migra automaticamente as 200 tabelas Oracle para Fabric Warehouse com mapeamento de tipos automático e pipeline incremental pré-configurado sem necessidade de desenvolvimento customizado.",
      "Usar Mirroring do Oracle on-premises para o Fabric que replica em near real-time todas as alterações CDC sem necessidade de gateway ou pipeline; configurar modelo semântico Direct Lake para analistas e exportar Delta para ML.",
      "Gateway on-premises → Data Pipeline com ForEach paralelo (lendo watermark de tabela de controle por tabela) → Bronze Lakehouse (Delta raw); Notebooks PySpark Bronze→Silver (deduplicação, validação, padronização por domínio); Notebooks Silver→Gold (agregações, star schema); SQL Analytics Endpoint para analistas; MLflow + notebooks para features ML; Deployment Pipelines para gov Dev→Prod; Workspace Logging + Capacity Metrics para monitoramento.",
      "Usar um único Dataflow Gen2 com as 200 tabelas Oracle como fontes, configurando transformações Power Query para cada tabela e carregando diretamente no Warehouse; mais simples que a abordagem com notebooks e mais fácil de manter para equipes sem experiência em PySpark."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Gateway on-premises → Data Pipeline com ForEach paralelo (lendo watermark de tabela de controle por tabela) → Bronze Lakehouse (Delta raw); Notebooks PySpark Bronze→Silver (deduplicação, validação, padronização por domínio); Notebooks Silver→Gold (agregações, star schema); SQL Analytics Endpoint para analistas; MLflow + notebooks para features ML; Deployment Pipelines para gov Dev→Prod; Workspace Logging + Capacity Metrics para monitoramento.",
      "intro": "Entendendo Deployment Pipelines e transformação de parâmetros",
      "papoReto": "Carga incremental usa watermark (timestamp, ID sequencial, CDC) para identificar registros novos/modificados desde última execução. Lookup recupera último watermark → Copy filtra com watermark → Procedure atualiza watermark. Apenas novos dados são processados.",
      "puloDoGato": "Watermark = identifica último processado. Lookup→Filter→Update = padrão incremental",
      "cascasDeBanana": [
        "Delta Load activity: não existe—use Lookup + Filter conforme padrão",
        "Incremental Load na Copy: Copy Data não detecta automaticamente—configure watermark manualmente",
        "CDC automático: CDC existe mas requer CDC enable na fonte; watermark é mais flexível"
      ],
      "dicaOuro": "Incremental não reprocessa histórico—usa watermark para marcar progresso"
    }
  },
  {
    "id": "dp700_q285",
    "text": "Como você implementa monitoramento de qualidade de dados em tempo real no Fabric para alertar imediatamente quando dados de streaming apresentam anomalias?",
    "options": [
      "Configurando Azure Stream Analytics com regras de anomalia que processam os dados antes de chegarem ao Fabric, eliminando a necessidade de lógica de qualidade dentro do ecossistema Fabric.",
      "Criando um Data Pipeline agendado a cada minuto que consulta o Eventhouse via KQL e verifica métricas de qualidade dos dados chegados no último minuto; dispara alertas via atividade Web quando anomalias são detectadas.",
      "Configurando transformações no Eventstream que calculam métricas de qualidade (contagem de nulos, valores fora de range, taxa de chegada) com janelas temporais; roteando eventos de violação para um Eventhouse de qualidade; criando um Real-Time Dashboard com alertas automáticos via Reflex que dispara notificações quando thresholds são violados.",
      "Usando um notebook PySpark com Structured Streaming que valida cada micro-batch e envia alertas via `smtplib` quando detecta anomalias; mais flexível que Eventstream para lógica de validação complexa."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Configurando transformações no Eventstream que calculam métricas de qualidade (contagem de nulos, valores fora de range, taxa de chegada) com janelas temporais; roteando eventos de violação para um Eventhouse de qualidade; criando um Real-Time Dashboard com alertas automáticos via Reflex que dispara notificações quando thresholds são violados.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Para dados de streaming/IoT em alta velocidade: Eventstream captura eventos (IoT Hub, Event Hubs) → Eventhouse processa tempo real com KQL → Lakehouse persistencia via Structured Streaming/Eventstream destination.",
      "puloDoGato": "Eventstream → Eventhouse (tempo real KQL) → Lakehouse (persistencia Delta)",
      "cascasDeBanana": [
        "Stream Analytics via Shortcut: Shortcuts são read-only, não processam streams",
        "Dataflow Gen2 streaming: Dataflows é low-code, não nativo para high-speed IoT",
        "Data Pipeline de 1min: Pipelines batched em 1 minuto não é ideal para IoT contínuo"
      ],
      "dicaOuro": "Real-time streaming = Eventstream + Eventhouse. Persistencia = Delta em Lakehouse"
    }
  },
  {
    "id": "dp700_q286",
    "text": "Em PySpark no Fabric, como você implementa um padrão de \"soft delete\" em uma tabela Delta onde registros excluídos são marcados como inativos em vez de fisicamente removidos?",
    "options": [
      "`DeltaTable.forName(spark, \"tabela\").update(condition=col(\"id\").isin(ids_deletar), set={\"ativo\": \"false\", \"data_exclusao\": \"current_timestamp()\", \"usuario_exclusao\": f\"'{usuario}'\"})`",
      "`spark.sql(f\"DELETE FROM tabela WHERE id IN ({','.join(ids_deletar)}) AND ativo = true\")`",
      "`df_deletar.write.format(\"delta\").mode(\"overwrite\").option(\"replaceWhere\", f\"id IN ({ids_deletar})\").saveAsTable(\"tabela\")`",
      "Usando `DeltaTable.forName(spark, \"tabela\").delete(col(\"id\").isin(ids_deletar))` e dependendo do time travel para recuperar registros excluídos quando necessário; abordagem válida mas não implementa soft delete que permite queries regulares incluindo registros históricos."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`DeltaTable.forName(spark, \"tabela\").update(condition=col(\"id\").isin(ids_deletar), set={\"ativo\": \"false\", \"data_exclusao\": \"current_timestamp()\", \"usuario_exclusao\": f\"'{usuario}'\"})`",
      "intro": "Entendendo Spark DataFrames e lazy evaluation",
      "papoReto": "`DeltaTable.forName(spark, \"tabela\").update(condition=col(\"id\").isin(ids_deletar), set={\"ativo\": \"false\", \"data_exclusao\": \"current_timestamp()\", \"usuario_exclusao\": f\"'{usuario}'\"})` é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "`spark.sql(f\"DELETE FROM tabela WHERE id IN ({','.join(ids_deletar)}) AND ativo = true\")`: Esta opção contém erro técnico ou implementação não recomendada",
        "`df_deletar.write.format(\"delta\").mode(\"overwrite\").option(\"replaceWhere\", f\"id IN ({ids_deletar})\").saveAsTable(\"tabela\")`: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando `DeltaTable.forName(spark, \"tabela\").delete(col(\"id\").isin(ids_deletar))` e dependendo do time travel para recuperar registros excluídos quando necessário; abordagem válida mas não implementa soft delete que permite queries regulares incluindo registros históricos.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q287",
    "text": "Quais são os indicadores de maturidade de uma prática de engenharia de dados no Microsoft Fabric e como evoluir de nível básico para avançado?",
    "options": [
      "Maturidade é determinada pelo SKU da capacity Fabric contratada; organizações com F128 ou superior são automaticamente classificadas como maduras pois têm recursos suficientes para implementar todas as práticas avançadas de engenharia de dados.",
      "O único indicador de maturidade relevante é o tempo de processamento dos pipelines; equipes que processam dados em menos de 1 hora são consideradas avançadas; equipes com SLA de 4+ horas precisam evoluir para práticas mais maduras de engenharia.",
      "Nível básico: pipelines manuais, sem testes, sem versionamento; Intermediário: Git integration, Deployment Pipelines, qualidade de dados básica, monitoramento via Monitor Hub; Avançado: CI/CD automatizado, testes unitários e de integração, observabilidade end-to-end com correlation IDs, SLA monitoring, capacity optimization contínua, framework de qualidade de dados automatizado e governança via Purview.",
      "Maturidade no Fabric é medida pelo número de itens no workspace; equipes com mais de 100 Lakehouses e 50 pipelines são consideradas maduras enquanto equipes menores são classificadas como básicas independente das práticas adotadas."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Nível básico: pipelines manuais, sem testes, sem versionamento; Intermediário: Git integration, Deployment Pipelines, qualidade de dados básica, monitoramento via Monitor Hub; Avançado: CI/CD automatizado, testes unitários e de integração, observabilidade end-to-end com correlation IDs, SLA monitoring, capacity optimization contínua, framework de qualidade de dados automatizado e governança via Purview.",
      "intro": "Entendendo Deployment Pipelines e transformação de parâmetros",
      "papoReto": "Nível básico: pipelines manuais, sem testes, sem versionamento; Intermediário: Git integration, Deployment Pipelines, qualidade de dados básica, monitoramento via Monitor Hub; Avançado: CI/CD automatizado, testes unitários e de integração, observabilidade end-to-end com correlation IDs, SLA monitoring, capacity optimization contínua, framework de qualidade de dados automatizado e governança via Purview. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Maturidade é determinada pelo SKU da capacity Fabric contratada; organizações com F128 ou superior são automaticamente classificadas como maduras pois têm recursos suficientes para implementar todas as práticas avançadas de engenharia de dados.: Esta opção contém erro técnico ou implementação não recomendada",
        "O único indicador de maturidade relevante é o tempo de processamento dos pipelines; equipes que processam dados em menos de 1 hora são consideradas avançadas; equipes com SLA de 4+ horas precisam evoluir para práticas mais maduras de engenharia.: Esta opção contém erro técnico ou implementação não recomendada",
        "Maturidade no Fabric é medida pelo número de itens no workspace; equipes com mais de 100 Lakehouses e 50 pipelines são consideradas maduras enquanto equipes menores são classificadas como básicas independente das práticas adotadas.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q288",
    "text": "Em um Data Pipeline do Fabric, como você constrói dinamicamente uma query SQL de extração que varia o conjunto de colunas baseado em uma tabela de mapeamento de metadados no Lakehouse?",
    "options": [
      "Usando uma atividade Script no Warehouse que lê a tabela de metadados e executa `sp_executesql` com a query dinâmica construída em T-SQL, retornando o resultado diretamente para o destino do pipeline.",
      "Usando a opção \"Dynamic Schema\" na atividade Copy Data que lê automaticamente a tabela de metadados do Lakehouse configurado como \"schema source\" e aplica o mapeamento de colunas sem necessidade de lógica adicional.",
      "Usando atividade Lookup para ler a tabela de metadados retornando a lista de colunas, atividade Set Variable para construir a string SQL com `@join(activity('Lookup').output.value, ',', 'coluna')`, e atividade Copy Data com a query dinâmica `@concat('SELECT ', variables('colunas_sql'), ' FROM tabela_fonte WHERE data >= ''', formatDateTime(utcNow(), 'yyyy-MM-dd'), '''')`.",
      "Criando um Dataflow Gen2 que lê a tabela de metadados e usa a função M `Table.SelectColumns(fonte, List.Select(colunas_meta, each _ <> null))` para selecionar dinamicamente as colunas configuradas."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Usando atividade Lookup para ler a tabela de metadados retornando a lista de colunas, atividade Set Variable para construir a string SQL com `@join(activity('Lookup').output.value, ',', 'coluna')`, e atividade Copy Data com a query dinâmica `@concat('SELECT ', variables('colunas_sql'), ' FROM tabela_fonte WHERE data >= ''', formatDateTime(utcNow(), 'yyyy-MM-dd'), '''')`.",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "Usando atividade Lookup para ler a tabela de metadados retornando a lista de colunas, atividade Set Variable para construir a string SQL com `@join(activity('Lookup').output.value, ',', 'coluna')`, e atividade Copy Data com a query dinâmica `@concat('SELECT ', variables('colunas_sql'), ' FROM tabela_fonte WHERE data >= ''', formatDateTime(utcNow(), 'yyyy-MM-dd'), '''')`. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Usando uma atividade Script no Warehouse que lê a tabela de metadados e executa `sp_executesql` com a query dinâmica construída em T-SQL, retornando o resultado diretamente para o destino do pipeline.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando a opção \"Dynamic Schema\" na atividade Copy Data que lê automaticamente a tabela de metadados do Lakehouse configurado como \"schema source\" e aplica o mapeamento de colunas sem necessidade de lógica adicional.: Esta opção contém erro técnico ou implementação não recomendada",
        "Criando um Dataflow Gen2 que lê a tabela de metadados e usa a função M `Table.SelectColumns(fonte, List.Select(colunas_meta, each _ <> null))` para selecionar dinamicamente as colunas configuradas.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q289",
    "text": "Um pipeline Fabric falha em produção mas não em desenvolvimento com os mesmos dados. Após análise, você descobre que o pipeline de produção tem permissões diferentes. Como você resolve sistematicamente?",
    "options": [
      "Conceder permissões Admin ao Service Principal de produção para eliminar diferenças de permissão entre ambientes; o princípio de least privilege pode ser aplicado gradualmente após a estabilização do pipeline.",
      "Usar credenciais de usuário interativo em produção em vez de Service Principal para garantir que as permissões sejam idênticas ao ambiente de desenvolvimento onde o pipeline funciona corretamente.",
      "Recriar o pipeline de produção manualmente replicando exatamente a configuração do desenvolvimento, sem usar Deployment Pipeline, para garantir que não haja diferenças introduzidas pelo processo de promoção automática.",
      "Documentar as diferenças de permissão entre os ambientes (Service Principal vs usuário interativo, permissões de Lakehouse/Warehouse, acesso a Key Vault, configurações de gateway), replicar exatamente as condições de produção em um ambiente de staging, e usar Deployment Rules no Deployment Pipeline para garantir que configurações específicas de ambiente sejam aplicadas corretamente na promoção."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Documentar as diferenças de permissão entre os ambientes (Service Principal vs usuário interativo, permissões de Lakehouse/Warehouse, acesso a Key Vault, configurações de gateway), replicar exatamente as condições de produção em um ambiente de staging, e usar Deployment Rules no Deployment Pipeline para garantir que configurações específicas de ambiente sejam aplicadas corretamente na promoção.",
      "intro": "Entendendo Deployment Pipelines e transformação de parâmetros",
      "papoReto": "Documentar as diferenças de permissão entre os ambientes (Service Principal vs usuário interativo, permissões de Lakehouse/Warehouse, acesso a Key Vault, configurações de gateway), replicar exatamente as condições de produção em um ambiente de staging, e usar Deployment Rules no Deployment Pipeline para garantir que configurações específicas de ambiente sejam aplicadas corretamente na promoção. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Conceder permissões Admin ao Service Principal de produção para eliminar diferenças de permissão entre ambientes; o princípio de least privilege pode ser aplicado gradualmente após a estabilização do pipeline.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usar credenciais de usuário interativo em produção em vez de Service Principal para garantir que as permissões sejam idênticas ao ambiente de desenvolvimento onde o pipeline funciona corretamente.: Esta opção contém erro técnico ou implementação não recomendada",
        "Recriar o pipeline de produção manualmente replicando exatamente a configuração do desenvolvimento, sem usar Deployment Pipeline, para garantir que não haja diferenças introduzidas pelo processo de promoção automática.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q290",
    "text": "Como você integra um pipeline de treinamento de modelo ML no Fabric com o pipeline de ingestão de dados para garantir que o modelo seja retreinado automaticamente quando novos dados chegam?",
    "options": [
      "Criando um trigger de evento no workspace que monitora alterações no Lakehouse e automaticamente executa o notebook de treinamento para qualquer modificação em tabelas do Lakehouse Gold.",
      "Configurando um MLflow Autolog trigger no workspace Fabric que automaticamente inicia retreinamento quando detecta novos dados no Lakehouse sem necessidade de pipeline orquestrador.",
      "Usando Azure Machine Learning Pipelines integradas ao Fabric via Shortcut que gerenciam automaticamente o ciclo de retreinamento baseado em drift de dados detectado pelo Azure ML Monitor.",
      "Criando um Data Pipeline orquestrador que: 1) executa o notebook de ingestão e transformação de dados; 2) verifica o volume de novos dados com atividade Lookup; 3) usa atividade If Condition para decidir se retreinamento é necessário (ex: >10.000 novos registros); 4) executa notebook de treinamento via atividade Notebook; 5) registra o novo modelo via MLflow; 6) notifica a equipe com métricas comparativas do novo modelo."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Criando um Data Pipeline orquestrador que: 1) executa o notebook de ingestão e transformação de dados; 2) verifica o volume de novos dados com atividade Lookup; 3) usa atividade If Condition para decidir se retreinamento é necessário (ex: >10.000 novos registros); 4) executa notebook de treinamento via atividade Notebook; 5) registra o novo modelo via MLflow; 6) notifica a equipe com métricas comparativas do novo modelo.",
      "intro": "Entendendo Shortcuts como virtual links vs. Mirror para cópias reais",
      "papoReto": "Criando um Data Pipeline orquestrador que: 1) executa o notebook de ingestão e transformação de dados; 2) verifica o volume de novos dados com atividade Lookup; 3) usa atividade If Condition para decidir se retreinamento é necessário (ex: >10.000 novos registros); 4) executa notebook de treinamento via atividade Notebook; 5) registra o novo modelo via MLflow; 6) notifica a equipe com métricas comparativas do novo modelo. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Criando um trigger de evento no workspace que monitora alterações no Lakehouse e automaticamente executa o notebook de treinamento para qualquer modificação em tabelas do Lakehouse Gold.: Esta opção contém erro técnico ou implementação não recomendada",
        "Configurando um MLflow Autolog trigger no workspace Fabric que automaticamente inicia retreinamento quando detecta novos dados no Lakehouse sem necessidade de pipeline orquestrador.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando Azure Machine Learning Pipelines integradas ao Fabric via Shortcut que gerenciam automaticamente o ciclo de retreinamento baseado em drift de dados detectado pelo Azure ML Monitor.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q291",
    "text": "Como você cria um \"Health Score\" de engenharia de dados no Fabric que consolida múltiplas métricas em um único indicador de saúde do ambiente de dados?",
    "options": [
      "Definindo métricas ponderadas (ex: taxa de sucesso de pipelines 30%, SLA compliance 25%, qualidade de dados 20%, utilização de capacity 15%, tempo médio de resolução de incidentes 10%), calculando cada métrica via queries sobre logs e tabelas de auditoria, normalizando para 0-100 e agregando com pesos no modelo semântico Power BI para exibição em scorecard executivo.",
      "Configurando o Microsoft Purview Health Management que monitora continuamente o ambiente Fabric e gera um score de saúde baseado em conformidade com políticas de governança definidas no catálogo.",
      "Usando o Fabric Advisor disponível no portal Azure que analisa o ambiente Fabric e gera recomendações pontuadas para melhorar a saúde geral, similar ao Azure Advisor para outros serviços Azure.",
      "Usando o \"Data Health Score\" integrado ao Admin Portal do Fabric que calcula automaticamente um score de 0-100 baseado nas métricas de todos os workspaces do tenant sem necessidade de desenvolvimento customizado."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Definindo métricas ponderadas (ex: taxa de sucesso de pipelines 30%, SLA compliance 25%, qualidade de dados 20%, utilização de capacity 15%, tempo médio de resolução de incidentes 10%), calculando cada métrica via queries sobre logs e tabelas de auditoria, normalizando para 0-100 e agregando com pesos no modelo semântico Power BI para exibição em scorecard executivo.",
      "intro": "Entendendo Lakehouse architecture e SQL Analytics Endpoint",
      "papoReto": "Definindo métricas ponderadas (ex: taxa de sucesso de pipelines 30%, SLA compliance 25%, qualidade de dados 20%, utilização de capacity 15%, tempo médio de resolução de incidentes 10%), calculando cada métrica via queries sobre logs e tabelas de auditoria, normalizando para 0-100 e agregando com pesos no modelo semântico Power BI para exibição em scorecard executivo. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Configurando o Microsoft Purview Health Management que monitora continuamente o ambiente Fabric e gera um score de saúde baseado em conformidade com políticas de governança definidas no catálogo.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando o Fabric Advisor disponível no portal Azure que analisa o ambiente Fabric e gera recomendações pontuadas para melhorar a saúde geral, similar ao Azure Advisor para outros serviços Azure.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando o \"Data Health Score\" integrado ao Admin Portal do Fabric que calcula automaticamente um score de 0-100 baseado nas métricas de todos os workspaces do tenant sem necessidade de desenvolvimento customizado.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q292",
    "text": "No Fabric Warehouse, como você implementa uma arquitetura de data vault simplificada (hubs, links e satellites) para um domínio de clientes e pedidos?",
    "options": [
      "`CREATE TABLE hub_cliente (hk_cliente BINARY(16) PRIMARY KEY, bk_cliente VARCHAR(50), data_carga DATETIME, fonte VARCHAR(50)); CREATE TABLE hub_pedido (hk_pedido BINARY(16) PRIMARY KEY, bk_pedido VARCHAR(50), data_carga DATETIME, fonte VARCHAR(50)); CREATE TABLE lnk_cliente_pedido (hk_lnk BINARY(16) PRIMARY KEY, hk_cliente BINARY(16), hk_pedido BINARY(16), data_carga DATETIME); CREATE TABLE sat_cliente (hk_cliente BINARY(16), data_inicio DATETIME, data_fim DATETIME, nome VARCHAR(100), email VARCHAR(200))` — estrutura Data Vault com hash keys e separação de metadados de negócio.",
      "Data Vault não é compatível com o Fabric Warehouse pois requer triggers para geração automática de hash keys; a abordagem recomendada no Fabric é sempre star schema ou terceira forma normal para dimensional modeling.",
      "Usando o template \"Data Vault\" disponível no catálogo de Database Projects do Fabric que gera automaticamente a estrutura de hubs, links e satellites baseado em um arquivo de configuração YAML com as entidades de negócio.",
      "Data Vault requer banco de dados relacional com suporte a foreign keys enforçadas; como o Fabric Warehouse não suporta foreign keys enforçadas, é necessário usar o Fabric SQL Database para implementação correta de Data Vault."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "`CREATE TABLE hub_cliente (hk_cliente BINARY(16) PRIMARY KEY, bk_cliente VARCHAR(50), data_carga DATETIME, fonte VARCHAR(50)); CREATE TABLE hub_pedido (hk_pedido BINARY(16) PRIMARY KEY, bk_pedido VARCHAR(50), data_carga DATETIME, fonte VARCHAR(50)); CREATE TABLE lnk_cliente_pedido (hk_lnk BINARY(16) PRIMARY KEY, hk_cliente BINARY(16), hk_pedido BINARY(16), data_carga DATETIME); CREATE TABLE sat_cliente (hk_cliente BINARY(16), data_inicio DATETIME, data_fim DATETIME, nome VARCHAR(100), email VARCHAR(200))` — estrutura Data Vault com hash keys e separação de metadados de negócio.",
      "intro": "Entendendo Git integration e versionamento de artefatos",
      "papoReto": "`CREATE TABLE hub_cliente (hk_cliente BINARY(16) PRIMARY KEY, bk_cliente VARCHAR(50), data_carga DATETIME, fonte VARCHAR(50)); CREATE TABLE hub_pedido (hk_pedido BINARY(16) PRIMARY KEY, bk_pedido VARCHAR(50), data_carga DATETIME, fonte VARCHAR(50)); CREATE TABLE lnk_cliente_pedido (hk_lnk BINARY(16) PRIMARY KEY, hk_cliente BINARY(16), hk_pedido BINARY(16), data_carga DATETIME); CREATE TABLE sat_cliente (hk_cliente BINARY(16), data_inicio DATETIME, data_fim DATETIME, nome VARCHAR(100), email VARCHAR(200))` — estrutura Data Vault com hash keys e separação de metadados de negócio. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Data Vault não é compatível com o Fabric Warehouse pois requer triggers para geração automática de hash keys; a abordagem recomendada no Fabric é sempre star schema ou terceira forma normal para dimensional modeling.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando o template \"Data Vault\" disponível no catálogo de Database Projects do Fabric que gera automaticamente a estrutura de hubs, links e satellites baseado em um arquivo de configuração YAML com as entidades de negócio.: Esta opção contém erro técnico ou implementação não recomendada",
        "Data Vault requer banco de dados relacional com suporte a foreign keys enforçadas; como o Fabric Warehouse não suporta foreign keys enforçadas, é necessário usar o Fabric SQL Database para implementação correta de Data Vault.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q293",
    "text": "Como você implementa uma estratégia de gerenciamento de capacity Fabric para uma organização com workloads críticos de negócio que não podem ser impactados por jobs de engenharia pesados?",
    "options": [
      "Limitando o número de notebooks e pipelines que podem executar simultaneamente via \"Concurrent Jobs Limit\" nas configurações do workspace para garantir recursos sempre disponíveis para workloads críticos.",
      "Habilitando \"Priority Queuing\" nas configurações avançadas da capacity que automaticamente prioriza queries interativas sobre jobs de engenharia sem necessidade de separação física de capacities.",
      "Usando capacities separadas para workloads críticos (relatórios interativos) e engenharia (pipelines pesados), configurando janelas de execução para jobs de engenharia fora do horário de pico, monitorando via Capacity Metrics App com alertas proativos, e implementando throttling controls agendando OPTIMIZE/VACUUM em horários de baixa utilização.",
      "Usando Resource Governor no Fabric Warehouse para alocar 80% dos recursos de capacity para relatórios interativos e 20% para pipelines de engenharia, com ajuste dinâmico baseado na carga observada."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Usando capacities separadas para workloads críticos (relatórios interativos) e engenharia (pipelines pesados), configurando janelas de execução para jobs de engenharia fora do horário de pico, monitorando via Capacity Metrics App com alertas proativos, e implementando throttling controls agendando OPTIMIZE/VACUUM em horários de baixa utilização.",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "Usando capacities separadas para workloads críticos (relatórios interativos) e engenharia (pipelines pesados), configurando janelas de execução para jobs de engenharia fora do horário de pico, monitorando via Capacity Metrics App com alertas proativos, e implementando throttling controls agendando OPTIMIZE/VACUUM em horários de baixa utilização. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Limitando o número de notebooks e pipelines que podem executar simultaneamente via \"Concurrent Jobs Limit\" nas configurações do workspace para garantir recursos sempre disponíveis para workloads críticos.: Esta opção contém erro técnico ou implementação não recomendada",
        "Habilitando \"Priority Queuing\" nas configurações avançadas da capacity que automaticamente prioriza queries interativas sobre jobs de engenharia sem necessidade de separação física de capacities.: Esta opção contém erro técnico ou implementação não recomendada",
        "Usando Resource Governor no Fabric Warehouse para alocar 80% dos recursos de capacity para relatórios interativos e 20% para pipelines de engenharia, com ajuste dinâmico baseado na carga observada.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q294",
    "text": "Como você implementa o padrão \"Lambda Architecture\" usando componentes do Microsoft Fabric para suportar tanto análise em batch quanto em tempo real?",
    "options": [
      "Implementar Lambda Architecture no Fabric requer Azure Databricks para o Batch Layer (Spark histórico) e Fabric apenas para o Speed Layer (Eventstream); o Fabric sozinho não suporta os requisitos de processamento histórico em escala da Lambda Architecture.",
      "Lambda Architecture no Fabric usa um único Warehouse para ambas as camadas; tabelas de fatos recebem dados em streaming via MERGE incremental e histórico via bulk load, com views que não distinguem a origem dos dados para os consumidores finais.",
      "Batch Layer: Data Pipelines + Notebooks PySpark processando histórico completo no Lakehouse (Bronze→Silver→Gold); Speed Layer: Eventstream + Eventhouse para dados de streaming em tempo real; Serving Layer: SQL Analytics Endpoint e modelos semânticos que combinam dados Gold do Lakehouse com dados recentes do Eventhouse via KQL cross-query ou views unificadoras.",
      "Lambda Architecture está obsoleta no Fabric; usar exclusivamente Kappa Architecture (streaming only) com Eventstream processando todos os dados em tempo real e Lakehouse apenas para persistência histórica, eliminando a complexidade de manter dois pipelines separados."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Batch Layer: Data Pipelines + Notebooks PySpark processando histórico completo no Lakehouse (Bronze→Silver→Gold); Speed Layer: Eventstream + Eventhouse para dados de streaming em tempo real; Serving Layer: SQL Analytics Endpoint e modelos semânticos que combinam dados Gold do Lakehouse com dados recentes do Eventhouse via KQL cross-query ou views unificadoras.",
      "intro": "Entendendo Warehouse security: RLS vs. DDM",
      "papoReto": "Batch Layer: Data Pipelines + Notebooks PySpark processando histórico completo no Lakehouse (Bronze→Silver→Gold); Speed Layer: Eventstream + Eventhouse para dados de streaming em tempo real; Serving Layer: SQL Analytics Endpoint e modelos semânticos que combinam dados Gold do Lakehouse com dados recentes do Eventhouse via KQL cross-query ou views unificadoras. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Implementar Lambda Architecture no Fabric requer Azure Databricks para o Batch Layer (Spark histórico) e Fabric apenas para o Speed Layer (Eventstream); o Fabric sozinho não suporta os requisitos de processamento histórico em escala da Lambda Architecture.: Esta opção contém erro técnico ou implementação não recomendada",
        "Lambda Architecture no Fabric usa um único Warehouse para ambas as camadas; tabelas de fatos recebem dados em streaming via MERGE incremental e histórico via bulk load, com views que não distinguem a origem dos dados para os consumidores finais.: Esta opção contém erro técnico ou implementação não recomendada",
        "Lambda Architecture está obsoleta no Fabric; usar exclusivamente Kappa Architecture (streaming only) com Eventstream processando todos os dados em tempo real e Lakehouse apenas para persistência histórica, eliminando a complexidade de manter dois pipelines separados.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q295",
    "text": "Um Lakehouse do Fabric com cargas incrementais diárias acumula milhares de arquivos pequenos ao longo de semanas, degradando o desempenho das queries. Qual é a estratégia correta para manutenção do Delta Lake?",
    "options": [
      "VACUUM deve ser executado com `RETAIN 0 HOURS` para máxima economia de armazenamento, removendo imediatamente todos os arquivos não usados pela versão atual; o time travel pode ser desabilitado em produção para reduzir custos.",
      "O Fabric executa OPTIMIZE e VACUUM automaticamente em background para todas as tabelas Delta do Lakehouse, sem necessidade de agendamento manual; a execução manual pode causar conflitos com a manutenção automática.",
      "Executar `OPTIMIZE nometabela ZORDER BY (colunamaisfiltrada)` periodicamente para compactar arquivos pequenos em arquivos maiores e reorganizar fisicamente os dados pela coluna de filtro mais usada; executar `VACUUM nometabela RETAIN 168 HOURS` para remover arquivos obsoletos não referenciados pelo transaction log, preservando 7 dias de histórico para time travel. Agendar ambos via Data Pipeline fora do horário de pico.",
      "Executar `OPTIMIZE` a cada execução de carga incremental garante que nunca haja arquivos pequenos; o overhead é desprezível e não impacta o tempo total do pipeline mesmo em tabelas com bilhões de registros."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Executar `OPTIMIZE nometabela ZORDER BY (colunamaisfiltrada)` periodicamente para compactar arquivos pequenos em arquivos maiores e reorganizar fisicamente os dados pela coluna de filtro mais usada; executar `VACUUM nometabela RETAIN 168 HOURS` para remover arquivos obsoletos não referenciados pelo transaction log, preservando 7 dias de histórico para time travel. Agendar ambos via Data Pipeline fora do horário de pico.",
      "intro": "Entendendo Data Pipeline activities e orquestração",
      "papoReto": "Executar `OPTIMIZE nometabela ZORDER BY (colunamaisfiltrada)` periodicamente para compactar arquivos pequenos em arquivos maiores e reorganizar fisicamente os dados pela coluna de filtro mais usada; executar `VACUUM nometabela RETAIN 168 HOURS` para remover arquivos obsoletos não referenciados pelo transaction log, preservando 7 dias de histórico para time travel. Agendar ambos via Data Pipeline fora do horário de pico. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "VACUUM deve ser executado com `RETAIN 0 HOURS` para máxima economia de armazenamento, removendo imediatamente todos os arquivos não usados pela versão atual; o time travel pode ser desabilitado em produção para reduzir custos.: Esta opção contém erro técnico ou implementação não recomendada",
        "O Fabric executa OPTIMIZE e VACUUM automaticamente em background para todas as tabelas Delta do Lakehouse, sem necessidade de agendamento manual; a execução manual pode causar conflitos com a manutenção automática.: Esta opção contém erro técnico ou implementação não recomendada",
        "Executar `OPTIMIZE` a cada execução de carga incremental garante que nunca haja arquivos pequenos; o overhead é desprezível e não impacta o tempo total do pipeline mesmo em tabelas com bilhões de registros.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q296",
    "text": "No Microsoft Fabric, como você configura um Eventstream para rotear eventos de um único Event Hub para múltiplos destinos simultaneamente — Eventhouse para análise em tempo real e Lakehouse para persistência histórica?",
    "options": [
      "No editor do Eventstream, após adicionar o Event Hub como fonte, adicionar dois destinos distintos: um destino KQL Database (Eventhouse) configurando a tabela de destino e o mapeamento de campos, e um destino Lakehouse configurando a tabela Delta de destino; o Eventstream roteia os eventos para ambos em paralelo sem duplicar o consumo da fonte.",
      "É necessário criar dois Eventstreams separados, cada um consumindo o mesmo Event Hub com consumer groups diferentes; um Eventstream suporta apenas um destino de saída por definição de design.",
      "Usar uma atividade Fork no editor do Eventstream que divide o fluxo em dois branches paralelos, cada um com transformações e destinos independentes; sem a atividade Fork, o roteamento para múltiplos destinos não é possível.",
      "Configurar o Eventhouse como destino primário e usar uma Update Policy KQL para copiar os dados ingeridos automaticamente para o Lakehouse via Shortcut; múltiplos destinos nativos no Eventstream estão disponíveis apenas em SKUs F64 ou superior."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "No editor do Eventstream, após adicionar o Event Hub como fonte, adicionar dois destinos distintos: um destino KQL Database (Eventhouse) configurando a tabela de destino e o mapeamento de campos, e um destino Lakehouse configurando a tabela Delta de destino; o Eventstream roteia os eventos para ambos em paralelo sem duplicar o consumo da fonte.",
      "intro": "Entendendo Shortcuts como virtual links vs. Mirror para cópias reais",
      "papoReto": "Para dados de streaming/IoT em alta velocidade: Eventstream captura eventos (IoT Hub, Event Hubs) → Eventhouse processa tempo real com KQL → Lakehouse persistencia via Structured Streaming/Eventstream destination.",
      "puloDoGato": "Eventstream → Eventhouse (tempo real KQL) → Lakehouse (persistencia Delta)",
      "cascasDeBanana": [
        "Stream Analytics via Shortcut: Shortcuts são read-only, não processam streams",
        "Dataflow Gen2 streaming: Dataflows é low-code, não nativo para high-speed IoT",
        "Data Pipeline de 1min: Pipelines batched em 1 minuto não é ideal para IoT contínuo"
      ],
      "dicaOuro": "Real-time streaming = Eventstream + Eventhouse. Persistencia = Delta em Lakehouse"
    }
  },
  {
    "id": "dp700_q297",
    "text": "O que são Managed Private Endpoints no Microsoft Fabric e como eles diferem de Private Endpoints tradicionais do Azure para acesso seguro a fontes de dados?",
    "options": [
      "Managed Private Endpoints estão disponíveis apenas para conexões com Azure SQL Database e Azure Storage; para Key Vault e Cosmos DB é necessário configurar Private Endpoints tradicionais via Azure Portal.",
      "Managed Private Endpoints são equivalentes a Private Endpoints tradicionais do Azure, criados automaticamente pelo Fabric ao configurar conexões com fontes protegidas; a única diferença é que a cobrança é incluída no custo da capacity Fabric em vez de cobrada separadamente no Azure.",
      "Managed Private Endpoints substituem completamente a necessidade de gateways de dados on-premises; ao habilitá-los no workspace, todos os conectores passam automaticamente a usar conexão privada sem configuração adicional por conector.",
      "Managed Private Endpoints são endpoints privados gerenciados pelo Fabric que permitem que itens do workspace (notebooks, pipelines, dataflows) acessem fontes de dados protegidas por firewall ou VNet de forma segura, sem expor dados à internet pública; diferem dos tradicionais pois são criados e gerenciados dentro do contexto do Fabric, sem necessidade de configurar VNet injection ou infraestrutura de rede adicional pelo administrador."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Implementar e gerenciar uma solução analítica",
    "explanation": {
      "respostaCerta": "Managed Private Endpoints são endpoints privados gerenciados pelo Fabric que permitem que itens do workspace (notebooks, pipelines, dataflows) acessem fontes de dados protegidas por firewall ou VNet de forma segura, sem expor dados à internet pública; diferem dos tradicionais pois são criados e gerenciados dentro do contexto do Fabric, sem necessidade de configurar VNet injection ou infraestrutura de rede adicional pelo administrador.",
      "intro": "Entendendo Fabric workspace e gerenciamento de recursos",
      "papoReto": "Managed Private Endpoints são endpoints privados gerenciados pelo Fabric que permitem que itens do workspace (notebooks, pipelines, dataflows) acessem fontes de dados protegidas por firewall ou VNet de forma segura, sem expor dados à internet pública; diferem dos tradicionais pois são criados e gerenciados dentro do contexto do Fabric, sem necessidade de configurar VNet injection ou infraestrutura de rede adicional pelo administrador. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Managed Private Endpoints estão disponíveis apenas para conexões com Azure SQL Database e Azure Storage; para Key Vault e Cosmos DB é necessário configurar Private Endpoints tradicionais via Azure Portal.: Esta opção contém erro técnico ou implementação não recomendada",
        "Managed Private Endpoints são equivalentes a Private Endpoints tradicionais do Azure, criados automaticamente pelo Fabric ao configurar conexões com fontes protegidas; a única diferença é que a cobrança é incluída no custo da capacity Fabric em vez de cobrada separadamente no Azure.: Esta opção contém erro técnico ou implementação não recomendada",
        "Managed Private Endpoints substituem completamente a necessidade de gateways de dados on-premises; ao habilitá-los no workspace, todos os conectores passam automaticamente a usar conexão privada sem configuração adicional por conector.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q298",
    "text": "Como um engenheiro de dados gerencia dependências de bibliotecas Python customizadas em notebooks do Microsoft Fabric para garantir consistência entre os ambientes Dev, Test e Prod?",
    "options": [
      "Criando um Environment no workspace com as bibliotecas necessárias especificadas via requirements.txt ou upload de wheel (.whl), versionando a definição do Environment no repositório Git junto com os notebooks, e configurando cada notebook para usar o Environment específico; ao promover via Deployment Pipeline, o Environment é promovido junto com os demais itens, garantindo paridade de versões entre todos os ambientes.",
      "Adicionando `%pip install biblioteca==versao` no início de cada notebook garante a versão correta a cada execução; é preferível ao Environment pois não requer configuração adicional e funciona automaticamente em qualquer runtime Spark.",
      "O Fabric não suporta bibliotecas Python customizadas em notebooks de produção; apenas bibliotecas pré-instaladas no runtime Spark padrão estão disponíveis, sendo necessário containerizar o código em Azure Container Instances para uso de bibliotecas externas.",
      "Bibliotecas customizadas devem ser instaladas pelo administrador do tenant via Admin Portal em Tenant Settings > Python Libraries, tornando-as disponíveis globalmente para todos os workspaces sem necessidade de Environment por workspace."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Ingerir e transformar dados",
    "explanation": {
      "respostaCerta": "Criando um Environment no workspace com as bibliotecas necessárias especificadas via requirements.txt ou upload de wheel (.whl), versionando a definição do Environment no repositório Git junto com os notebooks, e configurando cada notebook para usar o Environment específico; ao promover via Deployment Pipeline, o Environment é promovido junto com os demais itens, garantindo paridade de versões entre todos os ambientes.",
      "intro": "Entendendo Deployment Pipelines e transformação de parâmetros",
      "papoReto": "Criando um Environment no workspace com as bibliotecas necessárias especificadas via requirements.txt ou upload de wheel (.whl), versionando a definição do Environment no repositório Git junto com os notebooks, e configurando cada notebook para usar o Environment específico; ao promover via Deployment Pipeline, o Environment é promovido junto com os demais itens, garantindo paridade de versões entre todos os ambientes. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Adicionando `%pip install biblioteca==versao` no início de cada notebook garante a versão correta a cada execução; é preferível ao Environment pois não requer configuração adicional e funciona automaticamente em qualquer runtime Spark.: Esta opção contém erro técnico ou implementação não recomendada",
        "O Fabric não suporta bibliotecas Python customizadas em notebooks de produção; apenas bibliotecas pré-instaladas no runtime Spark padrão estão disponíveis, sendo necessário containerizar o código em Azure Container Instances para uso de bibliotecas externas.: Esta opção contém erro técnico ou implementação não recomendada",
        "Bibliotecas customizadas devem ser instaladas pelo administrador do tenant via Admin Portal em Tenant Settings > Python Libraries, tornando-as disponíveis globalmente para todos os workspaces sem necessidade de Environment por workspace.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q299",
    "text": "No Capacity Metrics App do Microsoft Fabric, como você identifica qual workspace ou item específico está consumindo CUs excessivamente e causando throttling na capacity?",
    "options": [
      "Para identificar o item causando throttling é necessário abrir ticket de suporte Microsoft que fornece acesso aos logs internos de consumo por item; essas informações não estão disponíveis para administradores via ferramentas self-service.",
      "Navegar para a visualização de consumo por período identificando os picos de CUs; usar o drill-down por Workspace para ver o consumo agregado; depois drill-down por Item dentro do workspace suspeito para identificar o notebook, pipeline ou dataflow específico; comparar consumo de operações interativas (consumo imediato) vs. background (smoothing de 24h) para priorizar a investigação e a ação corretiva.",
      "O Capacity Metrics App exibe apenas métricas agregadas da capacity total; para identificar o item específico é necessário habilitar Workspace Logging e consultar os logs via KQL no Eventhouse de monitoramento.",
      "Acessar o Monitor Hub e filtrar por duração decrescente identifica os itens mais custosos em CUs; o Capacity Metrics App exibe apenas métricas financeiras de custo por workspace sem granularidade por item."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "Navegar para a visualização de consumo por período identificando os picos de CUs; usar o drill-down por Workspace para ver o consumo agregado; depois drill-down por Item dentro do workspace suspeito para identificar o notebook, pipeline ou dataflow específico; comparar consumo de operações interativas (consumo imediato) vs. background (smoothing de 24h) para priorizar a investigação e a ação corretiva.",
      "intro": "Entendendo Fabric workspace e gerenciamento de recursos",
      "papoReto": "Navegar para a visualização de consumo por período identificando os picos de CUs; usar o drill-down por Workspace para ver o consumo agregado; depois drill-down por Item dentro do workspace suspeito para identificar o notebook, pipeline ou dataflow específico; comparar consumo de operações interativas (consumo imediato) vs. background (smoothing de 24h) para priorizar a investigação e a ação corretiva. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Para identificar o item causando throttling é necessário abrir ticket de suporte Microsoft que fornece acesso aos logs internos de consumo por item; essas informações não estão disponíveis para administradores via ferramentas self-service.: Esta opção contém erro técnico ou implementação não recomendada",
        "O Capacity Metrics App exibe apenas métricas agregadas da capacity total; para identificar o item específico é necessário habilitar Workspace Logging e consultar os logs via KQL no Eventhouse de monitoramento.: Esta opção contém erro técnico ou implementação não recomendada",
        "Acessar o Monitor Hub e filtrar por duração decrescente identifica os itens mais custosos em CUs; o Capacity Metrics App exibe apenas métricas financeiras de custo por workspace sem granularidade por item.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  },
  {
    "id": "dp700_q300",
    "text": "Um pipeline de engenharia de dados no Fabric processa 500 GB diários com SLA de 2 horas, mas está levando 4 horas consistentemente. Qual é a abordagem sistemática completa de diagnóstico e otimização?",
    "options": [
      "Migrar o processamento de PySpark para T-SQL no Fabric Warehouse resolve a maioria dos problemas de performance, pois o motor SQL é significativamente mais otimizado que o Spark para volumes de 500 GB em cargas batch diárias.",
      "Habilitar o modo High Concurrency e aumentar o número de executores para 100 por notebook resolve automaticamente o problema; o Fabric ajusta dinamicamente os recursos baseado no SLA configurado nas propriedades avançadas do pipeline.",
      "1) **Diagnóstico:** Monitor Hub para identificar a atividade gargalo; Spark UI para analisar stages com maior duração, shuffle read/write excessivo, data skew e spill de memória; Capacity Metrics App para verificar throttling por CUs; 2) **Otimização de dados:** `OPTIMIZE` + `ZORDER BY` nas tabelas Delta de origem, revisão do particionamento; 3) **Otimização Spark:** ajustar `spark.sql.shuffle.partitions`, habilitar AQE (Adaptive Query Execution), usar `cache()` em DataFrames reutilizados; 4) **Otimização de pipeline:** paralelizar atividades independentes com branches paralelos, aumentar DIUs no Copy Data; 5) **Capacity:** ajustar janela de execução para fora do horário de pico e avaliar upgrade de SKU somente se throttling for recorrente mesmo após otimizações de código e arquitetura.",
      "Aumentar o SKU da capacity de F64 para F128 é sempre a solução mais eficiente; problemas de performance em pipelines de 500 GB invariavelmente indicam insuficiência de recursos de capacity, não de código ou arquitetura."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Monitorar e otimizar uma solução analítica",
    "explanation": {
      "respostaCerta": "1) **Diagnóstico:** Monitor Hub para identificar a atividade gargalo; Spark UI para analisar stages com maior duração, shuffle read/write excessivo, data skew e spill de memória; Capacity Metrics App para verificar throttling por CUs; 2) **Otimização de dados:** `OPTIMIZE` + `ZORDER BY` nas tabelas Delta de origem, revisão do particionamento; 3) **Otimização Spark:** ajustar `spark.sql.shuffle.partitions`, habilitar AQE (Adaptive Query Execution), usar `cache()` em DataFrames reutilizados; 4) **Otimização de pipeline:** paralelizar atividades independentes com branches paralelos, aumentar DIUs no Copy Data; 5) **Capacity:** ajustar janela de execução para fora do horário de pico e avaliar upgrade de SKU somente se throttling for recorrente mesmo após otimizações de código e arquitetura.",
      "intro": "Entendendo Deployment Pipelines e transformação de parâmetros",
      "papoReto": "1) **Diagnóstico:** Monitor Hub para identificar a atividade gargalo; Spark UI para analisar stages com maior duração, shuffle read/write excessivo, data skew e spill de memória; Capacity Metrics App para verificar throttling por CUs; 2) **Otimização de dados:** `OPTIMIZE` + `ZORDER BY` nas tabelas Delta de origem, revisão do particionamento; 3) **Otimização Spark:** ajustar `spark.sql.shuffle.partitions`, habilitar AQE (Adaptive Query Execution), usar `cache()` em DataFrames reutilizados; 4) **Otimização de pipeline:** paralelizar atividades independentes com branches paralelos, aumentar DIUs no Copy Data; 5) **Capacity:** ajustar janela de execução para fora do horário de pico e avaliar upgrade de SKU somente se throttling for recorrente mesmo após otimizações de código e arquitetura. é a resposta correta porque descreve tecnicamente o conceito solicitado. As demais opções contêm erros implementação ou confundem conceitos relacionados do Fabric.",
      "puloDoGato": "Procure pela opção que descreve corretamente o cenário técnico específico",
      "cascasDeBanana": [
        "Migrar o processamento de PySpark para T-SQL no Fabric Warehouse resolve a maioria dos problemas de performance, pois o motor SQL é significativamente mais otimizado que o Spark para volumes de 500 GB em cargas batch diárias.: Esta opção contém erro técnico ou implementação não recomendada",
        "Habilitar o modo High Concurrency e aumentar o número de executores para 100 por notebook resolve automaticamente o problema; o Fabric ajusta dinamicamente os recursos baseado no SLA configurado nas propriedades avançadas do pipeline.: Esta opção contém erro técnico ou implementação não recomendada",
        "Aumentar o SKU da capacity de F64 para F128 é sempre a solução mais eficiente; problemas de performance em pipelines de 500 GB invariavelmente indicam insuficiência de recursos de capacity, não de código ou arquitetura.: Esta opção contém erro técnico ou implementação não recomendada"
      ],
      "dicaOuro": "Resposta correta = implementação recomendada para o cenário"
    }
  }
];
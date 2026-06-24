export const questions = [
  {
    "id": "mo201_q1",
    "text": "Qual atalho de teclado permite navegar rapidamente entre planilhas de uma pasta de trabalho no Excel?",
    "options": [
      "Ctrl+Page Up e Ctrl+Page Down",
      "Alt+Seta para cima e Alt+Seta para baixo",
      "Ctrl+Tab e Ctrl+Shift+Tab",
      "Ctrl+Seta para esquerda e Ctrl+Seta para direita"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Gerenciar Pastas de Trabalho",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gerenciar Pastas de Trabalho, subtema Configurações Avançadas (Nível iniciante).",
      "papoReto": "Ctrl+Page Up navega para aba ANTERIOR (decrementando índice na estrutura workbook.xml). Ctrl+Page Down incrementa para aba PRÓXIMA. Essas são as ÚNICAS combinações que alternam entre worksheets (abas) dentro de uma workbook. Alt+Setas manipulam Height/Width de linhas/colunas via objeto Rows.Height ou Columns.Width no Excel OM. Ctrl+Tab alterna entre janelas de Excel.exe abertas paralela, não abas internas.",
      "puloDoGato": "PAGE navega ABAS/Planilhas. TAB alterna APP/Excel aberta. SETA navega CÉLULAS.",
      "cascasDeBanana": [
        "Alt+Seta para cima/baixo: está errada porque controla propriedade Height de células/linhas no editor de dimensões, não atalho para navegação de abas.",
        "Ctrl+Tab e Ctrl+Shift+Tab: está errada porque intercala entre instâncias de Excel.exe abertas simultaneamente (Application.Windows), não abas (worksheets) dentro de uma workbook.xml.",
        "Ctrl+Seta para esquerda/direita: está errada porque realiza navegação de células (Ctrl+Left = pula para próxima célula com dados), não navegação entre planilhas (worksheet.xml)."
      ],
      "dicaOuro": "Ctrl+Page Up/Down são os ÚNICOS atalhos para navegar entre abas dentro de uma workbook em Excel 365. Nenhuma outra combinação funciona para esse propósito específico."
    }
  },
  {
    "id": "mo201_q2",
    "text": "Como um usuário protege uma planilha do Excel impedindo que outros alterem o conteúdo das células?",
    "options": [
      "Revisão → Proteger Planilha → definir senha e permissões",
      "Página Inicial → Células → Formatar → Bloquear Planilha",
      "Arquivo → Informações → Proteger Pasta de Trabalho → Planilha",
      "Dados → Validação → Proteger Conteúdo"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Gerenciar Pastas de Trabalho",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gerenciar Pastas de Trabalho, subtema Configurações Avançadas (Nível iniciante).",
      "papoReto": "Revisão → Proteger Planilha (Review → Protect Sheet) ativa sheetProtection node em worksheet.xml. Permite senha opcional e conjunto de permissões binárias (editObjects, editScenarios, formatCells, formatColumns, formatRows, insertColumns, insertHyperlinks, insertRows, deleteColumns, deleteRows, sort, autoFilter, pivotTables). Protege conteúdo de alterações até desproteger. As demais rotas inexistem ou implementam proteção diferente (workbookProtection vs sheetProtection).",
      "puloDoGato": "PROTEGER PLANILHA = bloqueia edição. FORMATAR BLOQUEADO = marca pra proteger depois. PROTEGER PASTA = bloqueia estrutura de abas.",
      "cascasDeBanana": [
        "Página Inicial → Células → Formatar → Bloquear Planilha: está errada porque apenas marca propriedade Locked em cellXfs (format.xml), não ativa proteção. Requer Proteger Planilha para funcionar.",
        "Arquivo → Informações → Proteger Pasta de Trabalho → Planilha: está errada porque Proteger Pasta de Trabalho ativa workbookProtection (estrutura), não sheetProtection (conteúdo).",
        "Dados → Validação → Proteger Conteúdo: está errada porque Validação (dataValidation) filtra ENTRADA de dados, não impede alteração de células existentes."
      ],
      "dicaOuro": "Validação DE DADOS restringe entrada futura. Proteção DE PLANILHA restringe alteração de conteúdo existente. São mecanismos diferentes no XML."
    }
  },
  {
    "id": "mo201_q3",
    "text": "Qual formato de arquivo deve ser usado para salvar uma pasta de trabalho Excel que contém macros VBA?",
    "options": [
      ".xltm",
      ".xlsm",
      ".xlsb",
      ".xlsx"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Gerenciar Pastas de Trabalho",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gerenciar Pastas de Trabalho, subtema Configurações Avançadas (Nível iniciante).",
      "papoReto": ".xlsm = .xlsx (formato ZIP com XML) + M (Macros/VBA). Estrutura interna: arquivo ZIP contém xl/vbaProject.bin (binário compilado VBA) + vbaProjectSignature.bin (assinatura digital). Excel 365 exige extensão .xlsm para detectar e carregar vbaProject.bin. Arquivo .xlsx ignora vbaProject.bin na leitura, removendo macros silenciosamente. .xlsb é binário puro (não XML), não recomendado para distribuição com VBA.",
      "puloDoGato": ".XLSM = Excel + MacroS. .XLSX = Excel sem macros. .XLTM = Excel TeMplate com macros.",
      "cascasDeBanana": [
        ".xlsx: está errada porque .xlsx (Open XML) não carrega vbaProject.bin. Excel 365 remove macros ao abrir .xlsx, mesmo se contiver vbaProject internamente.",
        ".xlsb: está errada porque é formato binário legado (Excel Binary Workbook), não estrutura XML. Macros funcionam mas não é formato padrão moderno.",
        ".xltm: está errada porque .xltm é TEMPLATE com macros (xltm = xlt + m), não pasta de trabalho. Usado para criar novos arquivos, não armazenar dados."
      ],
      "dicaOuro": "Excel 365 detecta extensão .xlsm obrigatoriamente para carregar vbaProject.bin. Renomear para .xlsx desabilita macros permanentemente."
    }
  },
  {
    "id": "mo201_q4",
    "text": "Um usuário deseja proteger a estrutura de uma pasta de trabalho impedindo que outros adicionem, movam ou excluam planilhas. Qual recurso deve usar?",
    "options": [
      "Revisão → Proteger Pasta de Trabalho → marcar Estrutura",
      "Revisão → Proteger Planilha → marcar Estrutura",
      "Página Inicial → Células → Formatar → Proteger Estrutura",
      "Arquivo → Informações → Proteger → Estrutura da Pasta de Trabalho"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Gerenciar Pastas de Trabalho",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gerenciar Pastas de Trabalho, subtema Proteção (Nível iniciante).",
      "papoReto": "Revisão → Proteger Pasta de Trabalho → marcar Estrutura ativa structureProtected=1 em workbook.xml. Bloqueia TODAS operações estruturais: inserir aba, excluir aba, mover aba, renomear aba, ocultação/desocultação no nível workbook. Diferente de sheetProtection (conteúdo células). Senha opcional. Impede manipulação xml das relações sheet no workbook.xml.",
      "puloDoGato": "PASTA DE TRABALHO = estrutura de ABAS. PLANILHA = conteúdo de CÉLULAS. Dois níveis diferentes de proteção.",
      "cascasDeBanana": [
        "Revisão → Proteger Planilha → marcar Estrutura: está errada porque Proteger Planilha (sheetProtection) controla conteúdo de células, não estrutura de abas (structureProtected).",
        "Página Inicial → Células → Formatar → Proteger Estrutura: está errada porque Formatar Células marca propriedade Locked/Hidden em cellXfs, não estrutura workbook.",
        "Arquivo → Informações → Proteger → Estrutura da Pasta de Trabalho: está errada porque rota UI incorreta. Caminho certo é Revisão → Proteger Pasta de Trabalho."
      ],
      "dicaOuro": "structureProtected no workbook.xml é independente de sheetProtection em worksheet.xml. Ambos podem ser ativados simultaneamente."
    }
  },
  {
    "id": "mo201_q5",
    "text": "Um usuário protegeu uma planilha mas precisa que determinadas células permaneçam editáveis pelos usuários. Qual é a sequência correta?",
    "options": [
      "Proteger a planilha e depois desbloquear as células desejadas via Revisão",
      "Usar Permitir Edição de Intervalos antes de proteger a planilha para definir as células liberadas",
      "Selecionar as células → Revisão → Desbloquear Intervalo → proteger a planilha",
      "Selecionar as células que devem ser editáveis → Formatar Células → Proteção → desmarcar Bloqueada → depois proteger a planilha"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Gerenciar Pastas de Trabalho",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gerenciar Pastas de Trabalho, subtema Proteção (Nível iniciante).",
      "papoReto": "Fluxo correto: 1) Selecionar células desejadas (range) 2) Formatar Células → Proteção → DESMARCAR 'Bloqueada' 3) Depois ENTÃO Revisão → Proteger Planilha. Lógica: Proteger Planilha bloqueia TODAS células Locked=true (padrão). Células com Locked=false permanecem editáveis mesmo protegida. Atributo Locked definido em cellXfs (styles.xml), aplicado via cellStyle em cada célula.",
      "puloDoGato": "DESBLOQUEAR PRIMEIRO, depois PROTEGER. Locked=false em cellXfs = célula editável quando planilha protegida.",
      "cascasDeBanana": [
        "Proteger a planilha e depois desbloquear as células desejadas via Revisão: está errada porque após proteger, células bloqueadas não permitem desbloquear. Ordem OBRIGATÓRIA: desbloquear ANTES de proteger.",
        "Usar Permitir Edição de Intervalos antes de proteger a planilha para definir as células liberadas: está errada porque Permitir Edição de Intervalos (allowEditRanges em worksheet.xml) permite múltiplos usuários com senhas diferentes, não desbloqueia células simples.",
        "Selecionar as células → Revisão → Desbloquear Intervalo → proteger a planilha: está errada porque 'Desbloquear Intervalo' não existe em Revisão. Caminho correto é Formatar Células → Proteção."
      ],
      "dicaOuro": "Atributo Locked em cellXfs é o fator crítico. Células com Locked=false permanecem 100% editáveis mesmo com sheetProtection ativa."
    }
  },
  {
    "id": "mo201_q6",
    "text": "Um administrador precisa permitir que usuários específicos editem intervalos diferentes de uma planilha protegida usando senhas distintas. Qual recurso do Excel permite isso?",
    "options": [
      "Revisão → Permitir Edição de Intervalos → criar intervalos com senhas individuais → proteger a planilha",
      "Arquivo → Compartilhar → Permissões por Intervalo → definir senhas",
      "Revisão → Proteger Planilha → Usuários → atribuir intervalos por usuário",
      "Não é possível definir senhas diferentes por intervalo no Excel"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Gerenciar Pastas de Trabalho",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gerenciar Pastas de Trabalho, subtema Proteção (Nível intermediario).",
      "papoReto": "Revisão → Permitir Edição de Intervalos (allowEditRanges em worksheet.xml) permite múltiplos intervalos DIFERENTES com senhas INDEPENDENTES. Cada intervalo armazena sqref (range) + senha em atributo cryptProviderType. Usuários diferentes acessam abas diferentes com senhas distintas. Semelhante a compartilhamento, mas descentralizado por intervalo no arquivo local.",
      "puloDoGato": "PERMITIR EDIÇÃO DE INTERVALOS = senhas DIFERENTES por intervalo dentro da mesma aba.",
      "cascasDeBanana": [
        "Revisão → Proteger Planilha → Usuários → atribuir intervalos por usuário: está errada porque Proteger Planilha não tem opção 'Usuários'. Essa interface não existe em Excel 365.",
        "Arquivo → Compartilhar → Permissões por Intervalo → definir senhas: está errada porque Compartilhar cria workbook compartilhado (changeTracking), não protege intervalos.",
        "Não é possível definir senhas diferentes por intervalo no Excel: está errada porque Permitir Edição de Intervalos permite exatamente isso com allowEditRanges no XML."
      ],
      "dicaOuro": "allowEditRanges permite descentralizar proteção: múltiplos usuários, múltiplas senhas, múltiplos intervalos em uma planilha."
    }
  },
  {
    "id": "mo201_q7",
    "text": "O que é um Nome Definido no Excel e qual é sua principal vantagem?",
    "options": [
      "Um rótulo atribuído a uma célula intervalo fórmula ou constante que torna as fórmulas mais legíveis e fáceis de manter",
      "Um tipo especial de comentário que nomeia intervalos para documentação",
      "Uma formatação condicional nomeada aplicável a múltiplos intervalos",
      "Um alias para uma planilha inteira que permite referenciá-la por nome curto"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Gerenciar Pastas de Trabalho",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gerenciar Pastas de Trabalho, subtema Nomes Definidos (Nível iniciante).",
      "papoReto": "Nome Definido = rótulo simbólico armazenado em definedName node no workbook.xml com atributos name, refersTo (range ou fórmula ou valor constante). Permite =SOMA(Vendas) em vez =SOMA(B2:B100). Escopos: Workbook (todas abas) ou Planilha (local). Nomes dinâmicos suportam referências INDIRETAS via fórmulas (ex: offset). Melhora legibilidade, manutenibilidade, evita hard-code de coordenadas.",
      "puloDoGato": "NOME DEFINIDO = rótulo pra CÉLULA/INTERVALO. Permite fórmulas legíveis: =SOMA(Vendas) vs =SOMA(B2:B100).",
      "cascasDeBanana": [
        "Um alias para uma planilha inteira que permite referenciá-la por nome curto: está errada porque Nome Definido referencia CÉLULA/INTERVALO/FÓRMULA, não planilha inteira.",
        "Um tipo especial de comentário que nomeia intervalos para documentação: está errada porque Nome Definido é estrutura funcional (definedName em XML), não comentário (comment node).",
        "Uma formatação condicional nomeada aplicável a múltiplos intervalos: está errada porque Formatação Condicional (conditionalFormatting) é regra visual, não Nome Definido."
      ],
      "dicaOuro": "Nomes Definidos dinâmicos podem usar INDIRETO/OFFSET para auto-expansão quando dados mudam. Crítico para análise de dados escalável."
    }
  },
  {
    "id": "mo201_q8",
    "text": "Como um usuário cria um Nome Definido para um intervalo no Excel?",
    "options": [
      "Inserir → Nome → Definir → digitar o nome e o intervalo",
      "Fórmulas → Gerenciador de Nomes → Novo → digitar o nome e definir o intervalo",
      "Ambas as opções A e C estão corretas",
      "Selecionar o intervalo → clicar na Caixa de Nome → digitar o nome e pressionar Enter"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Gerenciar Pastas de Trabalho",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gerenciar Pastas de Trabalho, subtema Nomes Definidos (Nível iniciante).",
      "papoReto": "Caixa de Nome (NameBox, canto superior esquerdo) atalho rápido: selecionar intervalo → clicar NameBox → digitar nome → Enter. Cria definedName escopo Planilha instantaneamente. Fórmulas → Gerenciador de Nomes (Name Manager dialog) interface completa: controle escopo (Workbook/Sheet), editar refersTo (range ou fórmula), gerenciar múltiplos nomes. NameBox mais rápido, Gerenciador mais controle.",
      "puloDoGato": "NAMEBOK = rápido. GERENCIADOR = completo com escopo/fórmulas dinâmicas.",
      "cascasDeBanana": [
        "Inserir → Nome → Definir → digitar o nome e o intervalo: está errada porque rota 'Inserir → Nome → Definir' não existe em Excel 365. Menu Inserir não contém Nome.",
        "Fórmulas → Gerenciador de Nomes → Novo → digitar o nome e definir o intervalo: está errada porque é caminho VÁLIDO mas não é opção 3 (NameBox). Apenas alternativa parcial.",
        "Ambas as opções A e C estão corretas: está errada porque opção A (rota Inserir → Nome) não existe."
      ],
      "dicaOuro": "NameBox cria definedName diretamente em worksheet.xml. Gerenciador permite refersTo dinâmico com INDIRETO/OFFSET."
    }
  },
  {
    "id": "mo201_q9",
    "text": "Um usuário criou nomes definidos em uma pasta de trabalho e deseja usá-los em outra pasta de trabalho sem recriar manualmente. Qual é a abordagem correta?",
    "options": [
      "Usar Fórmulas → Aplicar Nomes → Exportar para outra pasta de trabalho",
      "Exportar os nomes como arquivo .xlsx e importar na nova pasta",
      "Copiar uma célula que usa o nome para a nova pasta de trabalho; o Excel copia o nome automaticamente ou usar Fórmulas → Gerenciador de Nomes para recriar",
      "Vincular as duas pastas de trabalho e referenciar os nomes diretamente"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Gerenciar Pastas de Trabalho",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gerenciar Pastas de Trabalho, subtema Nomes Definidos (Nível intermediario).",
      "papoReto": "Quando cópia célula com nome válido em destino: Excel detecta conflito definedName em workbook.xml. Se nome não existe, definedName copia automaticamente em nova pasta. Se conflito, aviso = aceitar cópia/rejeitar. Alternativa: Gerenciador de Nomes → copiar manualmente linhas definedName XML. Cópia estruturada detecta scope (Workbook vs Sheet) e referências.",
      "puloDoGato": "COPIAR CÉLULA COM NOME = copia definedName automaticamente se sem conflito.",
      "cascasDeBanana": [
        "Exportar os nomes como arquivo .xlsx e importar na nova pasta: está errada porque definedName não exporta como arquivo independente. XML integrado no workbook.xml.",
        "Usar Fórmulas → Aplicar Nomes → Exportar para outra pasta de trabalho: está errada porque rota 'Aplicar Nomes → Exportar' não existe em Excel 365.",
        "Vincular as duas pastas de trabalho e referenciar os nomes diretamente: está errada porque vincular (linking via [Arquivo]!range) requer caminho externo, não copia definedName."
      ],
      "dicaOuro": "definedName copia apenas se scope compatível. Nomes Workbook NÃO copiam para novo arquivo (escopo perdido)."
    }
  },
  {
    "id": "mo201_q10",
    "text": "Um usuário deseja rastrear todas as células que fornecem dados para uma fórmula específica. Qual recurso do Excel permite visualizar essas dependências?",
    "options": [
      "Fórmulas → Verificar Erros → Rastrear Origem",
      "Exibir → Rastrear Células de Entrada",
      "Fórmulas → Rastrear Dependentes",
      "Fórmulas → Rastrear Precedentes"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Gerenciar Pastas de Trabalho",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gerenciar Pastas de Trabalho, subtema Auditoria (Nível iniciante).",
      "papoReto": "'Fórmulas → Rastrear Precedentes' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "SE() testa. E()/OU() combinam lógica. PROCX()/ÍNDICE buscam.",
      "cascasDeBanana": [
        "Fórmulas → Verificar Erros → Rastrear Origem: está errada porque ativa contexto/estrutura XML diferente.",
        "Exibir → Rastrear Células de Entrada: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Fórmulas → Rastrear Dependentes: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Fórmulas dinâmicas (array) propagam automático sem Ctrl+Shift+Enter."
    }
  },
  {
    "id": "mo201_q11",
    "text": "Um usuário quer identificar quais células são afetadas pelo valor de uma célula específica. Qual recurso deve usar?",
    "options": [
      "Dados → Análise de Hipóteses → Rastrear Impacto",
      "Fórmulas → Avaliar Fórmula",
      "Fórmulas → Rastrear Dependentes",
      "Fórmulas → Rastrear Precedentes"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Gerenciar Pastas de Trabalho",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gerenciar Pastas de Trabalho, subtema Auditoria (Nível iniciante).",
      "papoReto": "'Fórmulas → Rastrear Dependentes' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Dados → Análise de Hipóteses → Rastrear Impacto: está errada porque ativa contexto/estrutura XML diferente.",
        "Fórmulas → Avaliar Fórmula: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Fórmulas → Rastrear Precedentes: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q12",
    "text": "Um usuário encontrou um erro #REF! em uma fórmula complexa e precisa identificar a origem exata do problema. Qual ferramenta do Excel ajuda a avaliar a fórmula passo a passo?",
    "options": [
      "Fórmulas → Avaliar Fórmula",
      "Dados → Validação → Verificar Erros de Referência",
      "Fórmulas → Verificar Erros → Rastrear Erro",
      "Fórmulas → Mostrar Fórmulas"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Gerenciar Pastas de Trabalho",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gerenciar Pastas de Trabalho, subtema Auditoria (Nível intermediario).",
      "papoReto": "'Fórmulas → Avaliar Fórmula' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "SE() testa. E()/OU() combinam lógica. PROCX()/ÍNDICE buscam.",
      "cascasDeBanana": [
        "Dados → Validação → Verificar Erros de Referência: está errada porque ativa contexto/estrutura XML diferente.",
        "Fórmulas → Verificar Erros → Rastrear Erro: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Fórmulas → Mostrar Fórmulas: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Fórmulas dinâmicas (array) propagam automático sem Ctrl+Shift+Enter."
    }
  },
  {
    "id": "mo201_q13",
    "text": "Qual função do Excel retorna o valor de uma célula em uma tabela com base em um valor de pesquisa na primeira coluna?",
    "options": [
      "PROCH (HLOOKUP)",
      "PROCV (VLOOKUP)",
      "CORRESP (MATCH)",
      "ÍNDICE (INDEX)"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções de Lookup (Nível iniciante).",
      "papoReto": "'PROCV (VLOOKUP)' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "PROCH (HLOOKUP): está errada porque ativa contexto/estrutura XML diferente.",
        "CORRESP (MATCH): está errada porque manipula propriedade errada ou em escopo inválido.",
        "ÍNDICE (INDEX): está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q14",
    "text": "Qual é a principal limitação da função PROCV em relação à posição da coluna de pesquisa?",
    "options": [
      "PROCV só funciona com dados numéricos na coluna de pesquisa",
      "PROCV não suporta correspondência aproximada",
      "A coluna de pesquisa deve ser a última coluna do intervalo",
      "A coluna de pesquisa deve sempre ser a primeira coluna (mais à esquerda) do intervalo"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções de Lookup (Nível iniciante).",
      "papoReto": "'A coluna de pesquisa deve sempre ser a primeira coluna (mais à esquerda) do intervalo' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "PROCV só funciona com dados numéricos na coluna de pesquisa: está errada porque ativa contexto/estrutura XML diferente.",
        "PROCV não suporta correspondência aproximada: está errada porque manipula propriedade errada ou em escopo inválido.",
        "A coluna de pesquisa deve ser a última coluna do intervalo: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q15",
    "text": "Um usuário precisa retornar o valor de uma coluna à esquerda da coluna de pesquisa o que o PROCV não suporta. Qual combinação de funções resolve isso?",
    "options": [
      "PROCH + PROCV aninhados",
      "DESLOC + CORRESP (OFFSET + MATCH)",
      "ÍNDICE + CORRESP (INDEX + MATCH)",
      "ESCOLHER + PROCV (CHOOSE + VLOOKUP)"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções de Lookup (Nível iniciante).",
      "papoReto": "'ÍNDICE + CORRESP (INDEX + MATCH)' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "PROCH + PROCV aninhados: está errada porque ativa contexto/estrutura XML diferente.",
        "DESLOC + CORRESP (OFFSET + MATCH): está errada porque manipula propriedade errada ou em escopo inválido.",
        "ESCOLHER + PROCV (CHOOSE + VLOOKUP): está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q16",
    "text": "Qual função do Excel 365 substitui o PROCV permitindo pesquisa em qualquer coluna e retorno de múltiplos valores?",
    "options": [
      "PROCX (XLOOKUP)",
      "ÍNDICE (INDEX)",
      "FILTRO (FILTER)",
      "PESQUISAR (SEARCH)"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções de Lookup (Nível iniciante).",
      "papoReto": "'PROCX (XLOOKUP)' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "ÍNDICE (INDEX): está errada porque ativa contexto/estrutura XML diferente.",
        "FILTRO (FILTER): está errada porque manipula propriedade errada ou em escopo inválido.",
        "PESQUISAR (SEARCH): está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q17",
    "text": "Um usuário precisa que o PROCX retorne um texto personalizado \"Não encontrado\" quando o valor pesquisado não existir na tabela. Qual argumento da função permite isso?",
    "options": [
      "O quinto argumento [modo_pesquisa] com valor 0",
      "Usar SEERRO envolvendo o PROCX",
      "O quarto argumento [se_não_encontrado] do PROCX",
      "O terceiro argumento [modo_correspondência] com valor -1"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções de Lookup (Nível intermediario).",
      "papoReto": "'O quarto argumento [se_não_encontrado] do PROCX' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "O quinto argumento [modo_pesquisa] com valor 0: está errada porque ativa contexto/estrutura XML diferente.",
        "Usar SEERRO envolvendo o PROCX: está errada porque manipula propriedade errada ou em escopo inválido.",
        "O terceiro argumento [modo_correspondência] com valor -1: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q18",
    "text": "Um usuário tem uma coluna com nomes completos no formato \"Nome Sobrenome\" e precisa extrair apenas o primeiro nome. Qual fórmula resolve isso?",
    "options": [
      "=ESQUERDA(A1;LOCALIZAR(\" \";A1)-1)",
      "=ESQUERDA(A1;5)",
      "=TEXTO(A1;\"Nome\")",
      "=EXT.TEXTO(A1;1;LOCALIZAR(\" \";A1))"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções de Texto (Nível iniciante).",
      "papoReto": "'=ESQUERDA(A1;LOCALIZAR(\" \";A1)-1)' é formato que suporta estrutura interna necessária. Arquivo ZIP (.xlsx/.xlsm com XML+VBA) ou binário (.xlsb) determina compatibilidade com recursos.",
      "puloDoGato": ".XLS* extensão determina capacidade. M=Macros. T=Template.",
      "cascasDeBanana": [
        "=ESQUERDA(A1;5): está errada porque ativa contexto/estrutura XML diferente.",
        "=TEXTO(A1;\"Nome\"): está errada porque manipula propriedade errada ou em escopo inválido.",
        "=EXT.TEXTO(A1;1;LOCALIZAR(\" \";A1)): está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Excel 365 detecta extensão arquivo. .xlsx ignora vbaProject.bin; .xlsm carrega."
    }
  },
  {
    "id": "mo201_q19",
    "text": "Qual função do Excel combina o conteúdo de múltiplas células em uma única célula com um separador personalizado?",
    "options": [
      "&(E comercial)",
      "UNIRTEXTO (TEXTJOIN)",
      "CONCATENAR (CONCATENATE)",
      "JUNTAR (JOIN)"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções de Texto (Nível iniciante).",
      "papoReto": "'UNIRTEXTO (TEXTJOIN)' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "&(E comercial): está errada porque ativa contexto/estrutura XML diferente.",
        "CONCATENAR (CONCATENATE): está errada porque manipula propriedade errada ou em escopo inválido.",
        "JUNTAR (JOIN): está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q20",
    "text": "Um usuário precisa extrair apenas os números de uma célula que contém texto misturado como \"Pedido 12345 – Cliente\". Qual abordagem é mais eficiente no Excel 365?",
    "options": [
      "Usar SUBSTITUIR para remover o texto e manter apenas os números",
      "Usar FILTRARXML ou fórmula matricial com CONCAT+SE+ÉNÚM+VALOR+EXT.TEXTO para extrair dígitos",
      "Usar Dados → Texto para Colunas com delimitador espaço",
      "Usar LOCALIZAR para encontrar os números e EXT.TEXTO para extrair"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções de Texto (Nível intermediario).",
      "papoReto": "'Usar FILTRARXML ou fórmula matricial com CONCAT+SE+ÉNÚM+VALOR+EXT.TEXTO para extrair dígitos' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Usar SUBSTITUIR para remover o texto e manter apenas os números: está errada porque ativa contexto/estrutura XML diferente.",
        "Usar Dados → Texto para Colunas com delimitador espaço: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Usar LOCALIZAR para encontrar os números e EXT.TEXTO para extrair: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q21",
    "text": "Um usuário precisa que uma célula exiba \"Alto\" se o valor for maior que 1000, \"Médio\" se for entre 500 e 1000 e \"Baixo\" se for menor que 500. Qual fórmula resolve isso corretamente?",
    "options": [
      "=SEERRO(SE(A1>1000;\"Alto\";\"Médio\");\"Baixo\")",
      "=SE(A1>1000;\"Alto\";SE(A1>=500;\"Médio\";\"Baixo\"))",
      "=SE(A1>1000;\"Alto\";A1>=500;\"Médio\";\"Baixo\")",
      "=ESCOLHER(A1>1000;\"Alto\";\"Médio\";\"Baixo\")"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções Lógicas (Nível iniciante).",
      "papoReto": "'=SE(A1>1000;\"Alto\";SE(A1>=500;\"Médio\";\"Baixo\"))' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "SE() testa. E()/OU() combinam lógica. PROCX()/ÍNDICE buscam.",
      "cascasDeBanana": [
        "=SEERRO(SE(A1>1000;\"Alto\";\"Médio\");\"Baixo\"): está errada porque ativa contexto/estrutura XML diferente.",
        "=SE(A1>1000;\"Alto\";A1>=500;\"Médio\";\"Baixo\"): está errada porque manipula propriedade errada ou em escopo inválido.",
        "=ESCOLHER(A1>1000;\"Alto\";\"Médio\";\"Baixo\"): está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Fórmulas dinâmicas (array) propagam automático sem Ctrl+Shift+Enter."
    }
  },
  {
    "id": "mo201_q22",
    "text": "Qual função do Excel retorna VERDADEIRO se pelo menos uma das condições especificadas for verdadeira?",
    "options": [
      "XOR",
      "NÃO (NOT)",
      "OU (OR)",
      "E (AND)"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções Lógicas (Nível iniciante).",
      "papoReto": "'OU (OR)' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "XOR: está errada porque ativa contexto/estrutura XML diferente.",
        "NÃO (NOT): está errada porque manipula propriedade errada ou em escopo inválido.",
        "E (AND): está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q23",
    "text": "Um usuário precisa de uma fórmula que retorne \"Aprovado\" somente se o aluno tiver nota >= 7 E frequência >= 75% E não tiver pendências. Qual fórmula é mais adequada?",
    "options": [
      "=SE(B1>=7;\"Aprovado\";SE(C1>=0,75;\"Aprovado\";\"Reprovado\"))",
      "=SEERRO(SE(B1>=7;SE(C1>=0,75;\"Aprovado\";\"Reprovado\"));\"Erro\")",
      "=E(B1>=7;C1>=0,75;D1=\"Não\")",
      "=SE(E(B1>=7;C1>=0,75;D1=\"Não\");\"Aprovado\";\"Reprovado\")"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções Lógicas (Nível intermediario).",
      "papoReto": "'=SE(E(B1>=7;C1>=0,75;D1=\"Não\");\"Aprovado\";\"Reprovado\")' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "SE() testa. E()/OU() combinam lógica. PROCX()/ÍNDICE buscam.",
      "cascasDeBanana": [
        "=SE(B1>=7;\"Aprovado\";SE(C1>=0,75;\"Aprovado\";\"Reprovado\")): está errada porque ativa contexto/estrutura XML diferente.",
        "=SEERRO(SE(B1>=7;SE(C1>=0,75;\"Aprovado\";\"Reprovado\"));\"Erro\"): está errada porque manipula propriedade errada ou em escopo inválido.",
        "=E(B1>=7;C1>=0,75;D1=\"Não\"): está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Fórmulas dinâmicas (array) propagam automático sem Ctrl+Shift+Enter."
    }
  },
  {
    "id": "mo201_q24",
    "text": "Qual função calcula a média de um intervalo ignorando células vazias e zeros?",
    "options": [
      "=MÉDIASES(intervalo;intervalo;\"<>0\";intervalo;\"<>\")",
      "Ambas A e B estão corretas dependendo da versão do Excel",
      "=MÉDIA(SE(intervalo<>0;intervalo)) como fórmula matricial",
      "=MÉDIASE(intervalo;\"<>0\")"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções Estatísticas (Nível iniciante).",
      "papoReto": "'=MÉDIASE(intervalo;\"<>0\")' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "=MÉDIASES(intervalo;intervalo;\"<>0\";intervalo;\"<>\"): está errada porque ativa contexto/estrutura XML diferente.",
        "Ambas A e B estão corretas dependendo da versão do Excel: está errada porque manipula propriedade errada ou em escopo inválido.",
        "=MÉDIA(SE(intervalo<>0;intervalo)) como fórmula matricial: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q25",
    "text": "Um usuário precisa contar quantas células em um intervalo contêm um valor específico como \"Aprovado\". Qual função deve usar?",
    "options": [
      "CONT.SE (COUNTIF)",
      "CONTAR.VAZIO (COUNTBLANK)",
      "CONT.VALORES (COUNTA)",
      "CONT.NÚM (COUNT)"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções Estatísticas (Nível iniciante).",
      "papoReto": "'CONT.SE (COUNTIF)' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "CONTAR.VAZIO (COUNTBLANK): está errada porque ativa contexto/estrutura XML diferente.",
        "CONT.VALORES (COUNTA): está errada porque manipula propriedade errada ou em escopo inválido.",
        "CONT.NÚM (COUNT): está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q26",
    "text": "Um usuário precisa contar vendas onde o vendedor é \"João\" E o valor é maior que R$ 500 E a região é \"Sul\". Qual função resolve isso?",
    "options": [
      "CONT.SE (COUNTIF) aninhado",
      "CONT.SES (COUNTIFS)",
      "SOMARPRODUTO (SUMPRODUCT) com condições",
      "Ambas A e C estão corretas"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções Estatísticas (Nível intermediario).",
      "papoReto": "'CONT.SES (COUNTIFS)' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "CONT.SE (COUNTIF) aninhado: está errada porque ativa contexto/estrutura XML diferente.",
        "SOMARPRODUTO (SUMPRODUCT) com condições: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Ambas A e C estão corretas: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q27",
    "text": "Um usuário precisa calcular quantos dias úteis existem entre duas datas excluindo fins de semana. Qual função do Excel resolve isso?",
    "options": [
      "DATADIF (DATEDIF)",
      "DIATRABALHOTOTAL (NETWORKDAYS)",
      "DIATRABALHO (WORKDAY)",
      "DIAS (DAYS)"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções de Data (Nível iniciante).",
      "papoReto": "'DIATRABALHOTOTAL (NETWORKDAYS)' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "DATADIF (DATEDIF): está errada porque ativa contexto/estrutura XML diferente.",
        "DIATRABALHO (WORKDAY): está errada porque manipula propriedade errada ou em escopo inválido.",
        "DIAS (DAYS): está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q28",
    "text": "Qual função retorna a data que corresponde a um número específico de dias úteis após uma data inicial excluindo fins de semana e feriados opcionais?",
    "options": [
      "DATAM (EDATE)",
      "DIATRABALHO (WORKDAY)",
      "FIMMÊS (EOMONTH)",
      "DIATRABALHOTOTAL (NETWORKDAYS)"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções de Data (Nível iniciante).",
      "papoReto": "'DIATRABALHO (WORKDAY)' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "DATAM (EDATE): está errada porque ativa contexto/estrutura XML diferente.",
        "FIMMÊS (EOMONTH): está errada porque manipula propriedade errada ou em escopo inválido.",
        "DIATRABALHOTOTAL (NETWORKDAYS): está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q29",
    "text": "Um usuário precisa calcular a idade exata de uma pessoa em anos completos com base na data de nascimento. Qual fórmula é mais precisa?",
    "options": [
      "=DATADIF(DataNasc;HOJE();\"Y\")",
      "=INT((HOJE()-DataNasc)/365,25)",
      "=ANO(HOJE())-ANO(DataNasc)",
      "=ANOS(DataNasc;HOJE())"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções de Data (Nível intermediario).",
      "papoReto": "'=DATADIF(DataNasc;HOJE();\"Y\")' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "SE() testa. E()/OU() combinam lógica. PROCX()/ÍNDICE buscam.",
      "cascasDeBanana": [
        "=INT((HOJE()-DataNasc)/365,25): está errada porque ativa contexto/estrutura XML diferente.",
        "=ANO(HOJE())-ANO(DataNasc): está errada porque manipula propriedade errada ou em escopo inválido.",
        "=ANOS(DataNasc;HOJE()): está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Fórmulas dinâmicas (array) propagam automático sem Ctrl+Shift+Enter."
    }
  },
  {
    "id": "mo201_q30",
    "text": "Um usuário precisa extrair o número do trimestre de uma data. Qual fórmula resolve isso corretamente?",
    "options": [
      "=INT((MÊS(A1)-1)/3)+1",
      "=ARRED(MÊS(A1)/3;0)",
      "=TRIMESTRE(A1)",
      "=MÊS(A1)/3"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções de Data (Nível intermediario).",
      "papoReto": "'=INT((MÊS(A1)-1)/3)+1' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "SE() testa. E()/OU() combinam lógica. PROCX()/ÍNDICE buscam.",
      "cascasDeBanana": [
        "=ARRED(MÊS(A1)/3;0): está errada porque ativa contexto/estrutura XML diferente.",
        "=TRIMESTRE(A1): está errada porque manipula propriedade errada ou em escopo inválido.",
        "=MÊS(A1)/3: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Fórmulas dinâmicas (array) propagam automático sem Ctrl+Shift+Enter."
    }
  },
  {
    "id": "mo201_q31",
    "text": "Um usuário precisa somar apenas os valores de vendas da região \"Norte\" em uma tabela. Qual função deve usar?",
    "options": [
      "SOMA (SUM) com filtro manual",
      "SOMASE (SUMIF)",
      "SOMARPRODUTO (SUMPRODUCT)",
      "SUBTOTAL (SUBTOTAL)"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções Matemáticas (Nível iniciante).",
      "papoReto": "'SOMASE (SUMIF)' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "SOMA (SUM) com filtro manual: está errada porque ativa contexto/estrutura XML diferente.",
        "SOMARPRODUTO (SUMPRODUCT): está errada porque manipula propriedade errada ou em escopo inválido.",
        "SUBTOTAL (SUBTOTAL): está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q32",
    "text": "Um usuário precisa somar valores onde o vendedor é \"Maria\" E o mês é \"Janeiro\" E o valor é maior que 1000. Qual função resolve isso?",
    "options": [
      "SOMASES (SUMIFS)",
      "Ambas A e C estão corretas",
      "SOMARPRODUTO (SUMPRODUCT) com condições",
      "SOMASE (SUMIF) aninhado"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções Matemáticas (Nível iniciante).",
      "papoReto": "'SOMASES (SUMIFS)' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Ambas A e C estão corretas: está errada porque ativa contexto/estrutura XML diferente.",
        "SOMARPRODUTO (SUMPRODUCT) com condições: está errada porque manipula propriedade errada ou em escopo inválido.",
        "SOMASE (SUMIF) aninhado: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q33",
    "text": "Um usuário precisa calcular a soma ponderada de notas multiplicadas por seus respectivos pesos sem usar colunas auxiliares. Qual função resolve isso de forma elegante?",
    "options": [
      "=SOMASE com critério de peso",
      "=SOMA(Notas*Pesos) como fórmula matricial",
      "=SOMARPRODUTO(Notas;Pesos)",
      "Ambas A e B estão corretas"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções Matemáticas (Nível intermediario).",
      "papoReto": "'=SOMARPRODUTO(Notas;Pesos)' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "=SOMASE com critério de peso: está errada porque ativa contexto/estrutura XML diferente.",
        "=SOMA(Notas*Pesos) como fórmula matricial: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Ambas A e B estão corretas: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q34",
    "text": "O que é uma fórmula matricial no Excel e como é inserida em versões anteriores ao Excel 365?",
    "options": [
      "Uma fórmula que opera sobre arrays de valores retornando múltiplos resultados inserida com Ctrl+Shift+Enter",
      "Uma fórmula que referencia múltiplas planilhas simultaneamente inserida com Shift+Enter",
      "Uma fórmula que combina várias funções aninhadas inserida com Alt+Enter",
      "Uma fórmula que usa nomes definidos para referenciar arrays inserida normalmente com Enter"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Fórmulas Matriciais (Nível intermediario).",
      "papoReto": "'Uma fórmula que opera sobre arrays de valores retornando múltiplos resultados inserida com Ctrl+Shift+Enter' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "SE() testa. E()/OU() combinam lógica. PROCX()/ÍNDICE buscam.",
      "cascasDeBanana": [
        "Uma fórmula que referencia múltiplas planilhas simultaneamente inserida com Shift+Enter: está errada porque ativa contexto/estrutura XML diferente.",
        "Uma fórmula que combina várias funções aninhadas inserida com Alt+Enter: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Uma fórmula que usa nomes definidos para referenciar arrays inserida normalmente com Enter: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Fórmulas dinâmicas (array) propagam automático sem Ctrl+Shift+Enter."
    }
  },
  {
    "id": "mo201_q35",
    "text": "No Excel 365 qual recurso substitui a necessidade de inserir fórmulas matriciais com Ctrl+Shift+Enter permitindo que arrays se derramem automaticamente nas células adjacentes?",
    "options": [
      "Fórmulas LET com arrays",
      "Fórmulas de matriz dinâmica com derramamento automático (spill)",
      "Fórmulas de array nomeadas",
      "Fórmulas LAMBDA"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Fórmulas Matriciais (Nível intermediario).",
      "papoReto": "'Fórmulas de matriz dinâmica com derramamento automático (spill)' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "SE() testa. E()/OU() combinam lógica. PROCX()/ÍNDICE buscam.",
      "cascasDeBanana": [
        "Fórmulas LET com arrays: está errada porque ativa contexto/estrutura XML diferente.",
        "Fórmulas de array nomeadas: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Fórmulas LAMBDA: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Fórmulas dinâmicas (array) propagam automático sem Ctrl+Shift+Enter."
    }
  },
  {
    "id": "mo201_q36",
    "text": "Qual função do Excel 365 retorna uma lista de valores únicos de um intervalo eliminando duplicatas automaticamente?",
    "options": [
      "CONT.SE com critério único",
      "REMDUPLICATAS",
      "FILTRO com condição de unicidade",
      "ÚNICO (UNIQUE)"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções de Array Dinâmico (Nível intermediario).",
      "papoReto": "'ÚNICO (UNIQUE)' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "CONT.SE com critério único: está errada porque ativa contexto/estrutura XML diferente.",
        "REMDUPLICATAS: está errada porque manipula propriedade errada ou em escopo inválido.",
        "FILTRO com condição de unicidade: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q37",
    "text": "Qual função do Excel 365 classifica um intervalo ou array em ordem crescente ou decrescente retornando os resultados em células adjacentes automaticamente?",
    "options": [
      "ORDEM (RANK)",
      "CLASSIFICAR (SORT)",
      "MENOR (SMALL) com sequência",
      "ÍNDICE com CORRESP ordenado"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções de Array Dinâmico (Nível intermediario).",
      "papoReto": "'CLASSIFICAR (SORT)' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "ORDEM (RANK): está errada porque ativa contexto/estrutura XML diferente.",
        "MENOR (SMALL) com sequência: está errada porque manipula propriedade errada ou em escopo inválido.",
        "ÍNDICE com CORRESP ordenado: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q38",
    "text": "Um usuário precisa filtrar uma tabela de vendas retornando apenas as linhas onde o valor é maior que 1000 sem usar filtros manuais. Qual função do Excel 365 resolve isso?",
    "options": [
      "DESLOC com critério de filtro",
      "PROCX com condição",
      "FILTRO (FILTER)",
      "SOMASES com retorno de linhas"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções de Array Dinâmico (Nível intermediario).",
      "papoReto": "'FILTRO (FILTER)' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "DESLOC com critério de filtro: está errada porque ativa contexto/estrutura XML diferente.",
        "PROCX com condição: está errada porque manipula propriedade errada ou em escopo inválido.",
        "SOMASES com retorno de linhas: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q39",
    "text": "Qual função do Excel 365 gera uma sequência de números automaticamente como 1 2 3 4 5 em células consecutivas?",
    "options": [
      "LINHA (ROW)",
      "ÍNDICE com incremento",
      "COLUNA (COLUMN)",
      "SEQUÊNCIA (SEQUENCE)"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções de Array Dinâmico (Nível intermediario).",
      "papoReto": "'SEQUÊNCIA (SEQUENCE)' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "LINHA (ROW): está errada porque ativa contexto/estrutura XML diferente.",
        "ÍNDICE com incremento: está errada porque manipula propriedade errada ou em escopo inválido.",
        "COLUNA (COLUMN): está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q40",
    "text": "Um usuário precisa calcular o valor presente de um investimento que pagará R$ 10.000 daqui a 5 anos com taxa de juros de 8% ao ano. Qual função do Excel deve usar?",
    "options": [
      "VPL (NPV)",
      "VF (FV)",
      "VP (PV)",
      "TIR (IRR)"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções Financeiras (Nível iniciante).",
      "papoReto": "'VP (PV)' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "VPL (NPV): está errada porque ativa contexto/estrutura XML diferente.",
        "VF (FV): está errada porque manipula propriedade errada ou em escopo inválido.",
        "TIR (IRR): está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q41",
    "text": "Qual função do Excel calcula o valor futuro de um investimento com pagamentos periódicos fixos e taxa de juros constante?",
    "options": [
      "VF (FV)",
      "VP (PV)",
      "PGTO (PMT)",
      "NPER"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções Financeiras (Nível iniciante).",
      "papoReto": "'VF (FV)' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "VP (PV): está errada porque ativa contexto/estrutura XML diferente.",
        "PGTO (PMT): está errada porque manipula propriedade errada ou em escopo inválido.",
        "NPER: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q42",
    "text": "Um usuário precisa calcular a parcela mensal de um financiamento de R$ 50.000 em 36 meses com taxa de 1,5% ao mês. Qual função do Excel resolve isso?",
    "options": [
      "=NPER(1,5%;50000;36)",
      "=PGTO(1,5%;36;-50000)",
      "=VP(1,5%;36;50000)",
      "=VF(1,5%;36;-50000)"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções Financeiras (Nível intermediario).",
      "papoReto": "'=PGTO(1,5%;36;-50000)' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "=NPER(1,5%;50000;36): está errada porque ativa contexto/estrutura XML diferente.",
        "=VP(1,5%;36;50000): está errada porque manipula propriedade errada ou em escopo inválido.",
        "=VF(1,5%;36;-50000): está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q43",
    "text": "Qual tipo de gráfico é mais adequado para mostrar a proporção de partes em relação ao todo como participação de mercado por empresa?",
    "options": [
      "Gráfico de Linha",
      "Gráfico de Barras",
      "Gráfico de Pizza (Pie Chart)",
      "Gráfico de Dispersão"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Gráficos Avançados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gráficos Avançados, subtema Tipos de Gráfico (Nível iniciante).",
      "papoReto": "'Gráfico de Pizza (Pie Chart)' cria/configura chartSpace em worksheet.xml com série, eixo e elementos visuais. Tipo gráfico (Column/Line/Pie) determina renderização.",
      "puloDoGato": "TIPO = renderização visual. SÉRIE = dados plotados.",
      "cascasDeBanana": [
        "Gráfico de Linha: está errada porque ativa contexto/estrutura XML diferente.",
        "Gráfico de Barras: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Gráfico de Dispersão: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Gráfico embarcado em worksheet.xml como chartSpace. Copiar duplica estrutura."
    }
  },
  {
    "id": "mo201_q44",
    "text": "Um usuário precisa criar um gráfico que mostre simultaneamente barras para volume de vendas e uma linha para percentual de crescimento com escalas diferentes. Qual tipo de gráfico deve usar?",
    "options": [
      "Gráfico de Dispersão com duas séries",
      "Gráfico de Combinação com eixo secundário",
      "Gráfico de Barras Empilhadas",
      "Gráfico de Bolhas com duas séries"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Gráficos Avançados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gráficos Avançados, subtema Tipos de Gráfico (Nível iniciante).",
      "papoReto": "'Gráfico de Combinação com eixo secundário' cria/configura chartSpace em worksheet.xml com série, eixo e elementos visuais. Tipo gráfico (Column/Line/Pie) determina renderização.",
      "puloDoGato": "TIPO = renderização visual. SÉRIE = dados plotados.",
      "cascasDeBanana": [
        "Gráfico de Dispersão com duas séries: está errada porque ativa contexto/estrutura XML diferente.",
        "Gráfico de Barras Empilhadas: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Gráfico de Bolhas com duas séries: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Gráfico embarcado em worksheet.xml como chartSpace. Copiar duplica estrutura."
    }
  },
  {
    "id": "mo201_q45",
    "text": "Qual tipo de gráfico é mais adequado para mostrar a distribuição de frequência de dados como faixas de salário de funcionários?",
    "options": [
      "Histograma",
      "Gráfico de Área",
      "Gráfico de Barras Agrupadas",
      "Gráfico de Caixa (Box Plot)"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Gráficos Avançados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gráficos Avançados, subtema Tipos de Gráfico (Nível iniciante).",
      "papoReto": "'Histograma' cria/configura chartSpace em worksheet.xml com série, eixo e elementos visuais. Tipo gráfico (Column/Line/Pie) determina renderização.",
      "puloDoGato": "TIPO = renderização visual. SÉRIE = dados plotados.",
      "cascasDeBanana": [
        "Gráfico de Área: está errada porque ativa contexto/estrutura XML diferente.",
        "Gráfico de Barras Agrupadas: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Gráfico de Caixa (Box Plot): está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Gráfico embarcado em worksheet.xml como chartSpace. Copiar duplica estrutura."
    }
  },
  {
    "id": "mo201_q46",
    "text": "Um usuário precisa criar um gráfico Waterfall para mostrar como receitas e despesas contribuem para o lucro final. Qual é a forma correta de inserir esse gráfico no Excel?",
    "options": [
      "Inserir → Gráficos → Barras → Barras Empilhadas e ajustar manualmente",
      "Inserir → Gráfico de Combinação → Cascata",
      "Inserir → Gráficos → Inserir Gráfico de Cascata Funil Ações Superfície ou Radar → Cascata",
      "Não é possível criar gráfico Waterfall nativamente no Excel; requer suplemento"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Gráficos Avançados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gráficos Avançados, subtema Tipos de Gráfico (Nível intermediario).",
      "papoReto": "'Inserir → Gráficos → Inserir Gráfico de Cascata Funil Ações Superfície ou Radar → Cascata' cria/configura chartSpace em worksheet.xml com série, eixo e elementos visuais. Tipo gráfico (Column/Line/Pie) determina renderização.",
      "puloDoGato": "TIPO = renderização visual. SÉRIE = dados plotados.",
      "cascasDeBanana": [
        "Inserir → Gráficos → Barras → Barras Empilhadas e ajustar manualmente: está errada porque ativa contexto/estrutura XML diferente.",
        "Inserir → Gráfico de Combinação → Cascata: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Não é possível criar gráfico Waterfall nativamente no Excel; requer suplemento: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Gráfico embarcado em worksheet.xml como chartSpace. Copiar duplica estrutura."
    }
  },
  {
    "id": "mo201_q47",
    "text": "Um usuário deseja adicionar rótulos de dados que exibam o percentual de cada fatia em um gráfico de pizza. Como deve proceder?",
    "options": [
      "Ambas as opções A e B estão corretas",
      "Clicar com o botão direito nos rótulos de dados → Formatar Rótulos de Dados → marcar Percentual",
      "Clicar no gráfico → Design do Gráfico → Adicionar Elemento → Rótulos de Dados → Percentual",
      "Selecionar a série → Formatar → Rótulos → Mostrar como Percentual"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Gráficos Avançados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gráficos Avançados, subtema Formatação de Gráficos (Nível iniciante).",
      "papoReto": "'Clicar com o botão direito nos rótulos de dados → Formatar Rótulos de Dados → marcar Percentual' cria/configura chartSpace em worksheet.xml com série, eixo e elementos visuais. Tipo gráfico (Column/Line/Pie) determina renderização.",
      "puloDoGato": "TIPO = renderização visual. SÉRIE = dados plotados.",
      "cascasDeBanana": [
        "Ambas as opções A e B estão corretas: está errada porque ativa contexto/estrutura XML diferente.",
        "Clicar no gráfico → Design do Gráfico → Adicionar Elemento → Rótulos de Dados → Percentual: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Selecionar a série → Formatar → Rótulos → Mostrar como Percentual: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Gráfico embarcado em worksheet.xml como chartSpace. Copiar duplica estrutura."
    }
  },
  {
    "id": "mo201_q48",
    "text": "Um usuário criou um gráfico de linhas e deseja que ele seja atualizado automaticamente quando novos dados são adicionados à tabela sem precisar redefinir o intervalo do gráfico. Qual é a melhor abordagem?",
    "options": [
      "Usar nomes definidos dinâmicos com DESLOC como fonte do gráfico",
      "Usar Power Query como fonte de dados do gráfico",
      "Converter os dados em uma Tabela do Excel (Ctrl+T) antes de criar o gráfico pois tabelas expandem automaticamente",
      "Ambas A e B são abordagens válidas"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Gráficos Avançados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gráficos Avançados, subtema Formatação de Gráficos (Nível intermediario).",
      "papoReto": "'Converter os dados em uma Tabela do Excel (Ctrl+T) antes de criar o gráfico pois tabelas expandem automaticamente' cria/configura chartSpace em worksheet.xml com série, eixo e elementos visuais. Tipo gráfico (Column/Line/Pie) determina renderização.",
      "puloDoGato": "TIPO = renderização visual. SÉRIE = dados plotados.",
      "cascasDeBanana": [
        "Usar nomes definidos dinâmicos com DESLOC como fonte do gráfico: está errada porque ativa contexto/estrutura XML diferente.",
        "Usar Power Query como fonte de dados do gráfico: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Ambas A e B são abordagens válidas: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Gráfico embarcado em worksheet.xml como chartSpace. Copiar duplica estrutura."
    }
  },
  {
    "id": "mo201_q49",
    "text": "Um usuário precisa criar Minigráficos (Sparklines) para mostrar a tendência de vendas de cada produto em uma célula da planilha. Como deve inserir?",
    "options": [
      "Não é possível inserir gráficos dentro de células no Excel",
      "Inserir → Gráfico → Minigráfico → Linha",
      "Inserir → Minigráficos → Linha → selecionar intervalo de dados e local de destino",
      "Inserir → Ilustrações → Minigráfico de Célula"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Gráficos Avançados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gráficos Avançados, subtema Minigráficos (Nível iniciante).",
      "papoReto": "'Inserir → Minigráficos → Linha → selecionar intervalo de dados e local de destino' cria/configura chartSpace em worksheet.xml com série, eixo e elementos visuais. Tipo gráfico (Column/Line/Pie) determina renderização.",
      "puloDoGato": "TIPO = renderização visual. SÉRIE = dados plotados.",
      "cascasDeBanana": [
        "Não é possível inserir gráficos dentro de células no Excel: está errada porque ativa contexto/estrutura XML diferente.",
        "Inserir → Gráfico → Minigráfico → Linha: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Inserir → Ilustrações → Minigráfico de Célula: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Gráfico embarcado em worksheet.xml como chartSpace. Copiar duplica estrutura."
    }
  },
  {
    "id": "mo201_q50",
    "text": "Um usuário criou Minigráficos em uma planilha e deseja destacar o ponto mais alto e o ponto mais baixo de cada série com cores diferentes. Qual configuração permite isso?",
    "options": [
      "Design do Minigráfico → Marcadores → Ponto Alto e Ponto Baixo",
      "Selecionar os minigráficos → guia Minigráfico → marcar Ponto Alto e Ponto Baixo e definir cores",
      "Formatar Células → Minigráfico → Destacar Pontos Extremos",
      "Clicar com o botão direito no minigráfico → Formatar → Pontos de Destaque"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Gráficos Avançados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gráficos Avançados, subtema Minigráficos (Nível intermediario).",
      "papoReto": "'Selecionar os minigráficos → guia Minigráfico → marcar Ponto Alto e Ponto Baixo e definir cores' cria/configura chartSpace em worksheet.xml com série, eixo e elementos visuais. Tipo gráfico (Column/Line/Pie) determina renderização.",
      "puloDoGato": "TIPO = renderização visual. SÉRIE = dados plotados.",
      "cascasDeBanana": [
        "Design do Minigráfico → Marcadores → Ponto Alto e Ponto Baixo: está errada porque ativa contexto/estrutura XML diferente.",
        "Formatar Células → Minigráfico → Destacar Pontos Extremos: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Clicar com o botão direito no minigráfico → Formatar → Pontos de Destaque: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Gráfico embarcado em worksheet.xml como chartSpace. Copiar duplica estrutura."
    }
  },
  {
    "id": "mo201_q51",
    "text": "Qual é o primeiro passo para criar uma Tabela Dinâmica no Excel a partir de um intervalo de dados?",
    "options": [
      "Formatar os dados como Tabela antes de criar a Tabela Dinâmica obrigatoriamente",
      "Selecionar qualquer célula do intervalo → Inserir → Tabela Dinâmica → definir o local de destino",
      "Dados → Tabela Dinâmica → Assistente de Criação",
      "Inserir → Tabela Dinâmica → selecionar os campos manualmente antes de confirmar"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Tabelas Dinâmicas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Tabelas Dinâmicas, subtema Criação e Configuração (Nível iniciante).",
      "papoReto": "'Selecionar qualquer célula do intervalo → Inserir → Tabela Dinâmica → definir o local de destino' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Formatar os dados como Tabela antes de criar a Tabela Dinâmica obrigatoriamente: está errada porque ativa contexto/estrutura XML diferente.",
        "Dados → Tabela Dinâmica → Assistente de Criação: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Inserir → Tabela Dinâmica → selecionar os campos manualmente antes de confirmar: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q52",
    "text": "Quais são as quatro áreas de uma Tabela Dinâmica onde os campos podem ser posicionados?",
    "options": [
      "Filtros, Colunas, Linhas e Valores",
      "Categorias, Séries, Valores e Totais",
      "Campos, Grupos, Filtros e Resumos",
      "Linhas, Colunas, Dados e Totais"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Tabelas Dinâmicas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Tabelas Dinâmicas, subtema Criação e Configuração (Nível iniciante).",
      "papoReto": "'Filtros, Colunas, Linhas e Valores' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Categorias, Séries, Valores e Totais: está errada porque ativa contexto/estrutura XML diferente.",
        "Campos, Grupos, Filtros e Resumos: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Linhas, Colunas, Dados e Totais: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q53",
    "text": "Um usuário criou uma Tabela Dinâmica e os dados da fonte foram atualizados. O que deve fazer para que a Tabela Dinâmica reflita as alterações?",
    "options": [
      "Clicar com o botão direito na Tabela Dinâmica → Atualizar ou usar Análise → Atualizar",
      "A Tabela Dinâmica atualiza automaticamente ao salvar",
      "Excluir e recriar a Tabela Dinâmica",
      "Salvar e reabrir a pasta de trabalho"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Tabelas Dinâmicas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Tabelas Dinâmicas, subtema Criação e Configuração (Nível iniciante).",
      "papoReto": "'Clicar com o botão direito na Tabela Dinâmica → Atualizar ou usar Análise → Atualizar' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "A Tabela Dinâmica atualiza automaticamente ao salvar: está errada porque ativa contexto/estrutura XML diferente.",
        "Excluir e recriar a Tabela Dinâmica: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Salvar e reabrir a pasta de trabalho: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q54",
    "text": "Um usuário adicionou novos registros abaixo do intervalo de dados original de uma Tabela Dinâmica. Como garantir que os novos dados sejam incluídos na atualização?",
    "options": [
      "Atualizar a Tabela Dinâmica; ela detecta automaticamente novos registros",
      "Usar Dados → Atualizar Tudo para incluir os novos registros automaticamente",
      "Recriar a Tabela Dinâmica selecionando o novo intervalo completo",
      "Alterar a fonte de dados via Análise → Alterar Fonte de Dados para incluir o novo intervalo ou usar uma Tabela do Excel como fonte"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Tabelas Dinâmicas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Tabelas Dinâmicas, subtema Criação e Configuração (Nível iniciante).",
      "papoReto": "'Alterar a fonte de dados via Análise → Alterar Fonte de Dados para incluir o novo intervalo ou usar uma Tabela do Excel como fonte' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Atualizar a Tabela Dinâmica; ela detecta automaticamente novos registros: está errada porque ativa contexto/estrutura XML diferente.",
        "Usar Dados → Atualizar Tudo para incluir os novos registros automaticamente: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Recriar a Tabela Dinâmica selecionando o novo intervalo completo: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q55",
    "text": "Um usuário deseja adicionar um campo calculado em uma Tabela Dinâmica que calcule a margem de lucro dividindo o lucro pela receita. Como deve proceder?",
    "options": [
      "Análise da Tabela Dinâmica → Campos, Itens e Conjuntos → Campo Calculado → definir a fórmula",
      "Inserir → Campo → Calculado → definir a fórmula na Tabela Dinâmica",
      "Adicionar uma coluna calculada na fonte de dados e atualizar a Tabela Dinâmica",
      "Clicar com o botão direito na Tabela Dinâmica → Inserir Campo Calculado"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Tabelas Dinâmicas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Tabelas Dinâmicas, subtema Cálculos (Nível iniciante).",
      "papoReto": "'Análise da Tabela Dinâmica → Campos, Itens e Conjuntos → Campo Calculado → definir a fórmula' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Inserir → Campo → Calculado → definir a fórmula na Tabela Dinâmica: está errada porque ativa contexto/estrutura XML diferente.",
        "Adicionar uma coluna calculada na fonte de dados e atualizar a Tabela Dinâmica: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Clicar com o botão direito na Tabela Dinâmica → Inserir Campo Calculado: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q56",
    "text": "Qual é a diferença entre um Campo Calculado e um Item Calculado em uma Tabela Dinâmica?",
    "options": [
      "Campo Calculado funciona apenas com valores numéricos; Item Calculado funciona com texto",
      "Campo Calculado opera sobre campos inteiros da Tabela Dinâmica; Item Calculado opera sobre itens específicos dentro de um campo",
      "Não há diferença funcional entre os dois",
      "Item Calculado é mais preciso que Campo Calculado para cálculos financeiros"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Tabelas Dinâmicas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Tabelas Dinâmicas, subtema Cálculos (Nível intermediario).",
      "papoReto": "'Campo Calculado opera sobre campos inteiros da Tabela Dinâmica; Item Calculado opera sobre itens específicos dentro de um campo' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Campo Calculado funciona apenas com valores numéricos; Item Calculado funciona com texto: está errada porque ativa contexto/estrutura XML diferente.",
        "Não há diferença funcional entre os dois: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Item Calculado é mais preciso que Campo Calculado para cálculos financeiros: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q57",
    "text": "Um usuário deseja que a Tabela Dinâmica exiba os valores de vendas como percentual do total geral em vez de valores absolutos. Como deve configurar?",
    "options": [
      "Clicar com o botão direito no campo de valores → Mostrar Valores Como → % do Total Geral",
      "Formatar as células da Tabela Dinâmica como percentual com Ctrl+Shift+%",
      "Análise → Configurações do Campo de Valor → Formato → Percentual",
      "Adicionar um Campo Calculado com fórmula de percentual"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Tabelas Dinâmicas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Tabelas Dinâmicas, subtema Cálculos (Nível intermediario).",
      "papoReto": "'Clicar com o botão direito no campo de valores → Mostrar Valores Como → % do Total Geral' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Formatar as células da Tabela Dinâmica como percentual com Ctrl+Shift+%: está errada porque ativa contexto/estrutura XML diferente.",
        "Análise → Configurações do Campo de Valor → Formato → Percentual: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Adicionar um Campo Calculado com fórmula de percentual: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q58",
    "text": "Um usuário tem uma Tabela Dinâmica com datas diárias e deseja agrupar os dados por mês e ano. Como deve proceder?",
    "options": [
      "Clicar com o botão direito em qualquer data → Agrupar → selecionar Meses e Anos",
      "Filtros → Agrupar por Data → Meses e Anos",
      "Modificar a fonte de dados para incluir colunas de Mês e Ano antes de criar a Tabela Dinâmica",
      "Análise → Agrupar Campo → selecionar o intervalo de agrupamento"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Tabelas Dinâmicas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Tabelas Dinâmicas, subtema Agrupamento (Nível iniciante).",
      "papoReto": "'Clicar com o botão direito em qualquer data → Agrupar → selecionar Meses e Anos' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Filtros → Agrupar por Data → Meses e Anos: está errada porque ativa contexto/estrutura XML diferente.",
        "Modificar a fonte de dados para incluir colunas de Mês e Ano antes de criar a Tabela Dinâmica: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Análise → Agrupar Campo → selecionar o intervalo de agrupamento: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q59",
    "text": "Um usuário precisa agrupar clientes em faixas de valor de compra como 0-1000, 1001-5000 e acima de 5000 em uma Tabela Dinâmica. Qual recurso permite isso?",
    "options": [
      "Análise → Campos, Itens e Conjuntos → Item Calculado → definir as faixas",
      "Clicar com o botão direito no campo numérico → Agrupar → definir início, fim e intervalo dos grupos",
      "Criar uma coluna auxiliar na fonte de dados com as faixas e usar essa coluna como campo de linha",
      "Usar Segmentação de Dados com faixas personalizadas"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Tabelas Dinâmicas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Tabelas Dinâmicas, subtema Agrupamento (Nível intermediario).",
      "papoReto": "'Clicar com o botão direito no campo numérico → Agrupar → definir início, fim e intervalo dos grupos' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Análise → Campos, Itens e Conjuntos → Item Calculado → definir as faixas: está errada porque ativa contexto/estrutura XML diferente.",
        "Criar uma coluna auxiliar na fonte de dados com as faixas e usar essa coluna como campo de linha: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Usar Segmentação de Dados com faixas personalizadas: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q60",
    "text": "O que é uma Segmentação de Dados (Slicer) em uma Tabela Dinâmica e qual é sua principal vantagem?",
    "options": [
      "Uma forma de segmentar os dados em múltiplas planilhas automaticamente",
      "Um filtro visual interativo que permite filtrar a Tabela Dinâmica clicando em botões sem usar os menus de filtro",
      "Um gráfico interativo vinculado à Tabela Dinâmica",
      "Um painel de controle que exibe os campos disponíveis"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Tabelas Dinâmicas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Tabelas Dinâmicas, subtema Segmentação de Dados (Nível iniciante).",
      "papoReto": "'Um filtro visual interativo que permite filtrar a Tabela Dinâmica clicando em botões sem usar os menus de filtro' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Uma forma de segmentar os dados em múltiplas planilhas automaticamente: está errada porque ativa contexto/estrutura XML diferente.",
        "Um gráfico interativo vinculado à Tabela Dinâmica: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Um painel de controle que exibe os campos disponíveis: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q61",
    "text": "Um usuário tem três Tabelas Dinâmicas diferentes na mesma pasta de trabalho e deseja que uma única Segmentação de Dados filtre todas simultaneamente. Como deve configurar?",
    "options": [
      "Não é possível conectar uma segmentação a múltiplas Tabelas Dinâmicas",
      "Criar uma Segmentação separada para cada Tabela Dinâmica e vinculá-las via macro VBA",
      "Usar Análise → Segmentação de Dados → Conectar a Múltiplas Tabelas",
      "Clicar com o botão direito na Segmentação → Conexões de Relatório → selecionar todas as Tabelas Dinâmicas desejadas"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Tabelas Dinâmicas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Tabelas Dinâmicas, subtema Segmentação de Dados (Nível intermediario).",
      "papoReto": "'Clicar com o botão direito na Segmentação → Conexões de Relatório → selecionar todas as Tabelas Dinâmicas desejadas' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Não é possível conectar uma segmentação a múltiplas Tabelas Dinâmicas: está errada porque ativa contexto/estrutura XML diferente.",
        "Criar uma Segmentação separada para cada Tabela Dinâmica e vinculá-las via macro VBA: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Usar Análise → Segmentação de Dados → Conectar a Múltiplas Tabelas: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q62",
    "text": "O que é uma Linha do Tempo (Timeline) em uma Tabela Dinâmica?",
    "options": [
      "Um filtro visual interativo específico para campos de data que permite filtrar por períodos como meses, trimestres e anos",
      "Uma segmentação de dados especial para dados numéricos em ordem cronológica",
      "Um gráfico de linha vinculado à evolução temporal dos dados da Tabela Dinâmica",
      "Um recurso que projeta tendências futuras com base nos dados históricos"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Tabelas Dinâmicas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Tabelas Dinâmicas, subtema Linha do Tempo (Nível iniciante).",
      "papoReto": "'Um filtro visual interativo específico para campos de data que permite filtrar por períodos como meses, trimestres e anos' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Uma segmentação de dados especial para dados numéricos em ordem cronológica: está errada porque ativa contexto/estrutura XML diferente.",
        "Um gráfico de linha vinculado à evolução temporal dos dados da Tabela Dinâmica: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Um recurso que projeta tendências futuras com base nos dados históricos: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q63",
    "text": "Qual é a diferença entre um Gráfico Dinâmico e um gráfico comum no Excel?",
    "options": [
      "Um Gráfico Dinâmico pode ser exportado como arquivo independente; o gráfico comum não",
      "Um Gráfico Dinâmico está vinculado a uma Tabela Dinâmica e se atualiza automaticamente quando os filtros ou dados da tabela mudam",
      "Um Gráfico Dinâmico suporta mais tipos de gráfico que um gráfico comum",
      "Não há diferença funcional entre os dois tipos de gráfico"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Tabelas Dinâmicas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Tabelas Dinâmicas, subtema Gráfico Dinâmico (Nível iniciante).",
      "papoReto": "'Um Gráfico Dinâmico está vinculado a uma Tabela Dinâmica e se atualiza automaticamente quando os filtros ou dados da tabela mudam' cria/configura chartSpace em worksheet.xml com série, eixo e elementos visuais. Tipo gráfico (Column/Line/Pie) determina renderização.",
      "puloDoGato": "TIPO = renderização visual. SÉRIE = dados plotados.",
      "cascasDeBanana": [
        "Um Gráfico Dinâmico pode ser exportado como arquivo independente; o gráfico comum não: está errada porque ativa contexto/estrutura XML diferente.",
        "Um Gráfico Dinâmico suporta mais tipos de gráfico que um gráfico comum: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Não há diferença funcional entre os dois tipos de gráfico: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Gráfico embarcado em worksheet.xml como chartSpace. Copiar duplica estrutura."
    }
  },
  {
    "id": "mo201_q64",
    "text": "Um usuário deseja aplicar um estilo visual predefinido a uma Tabela Dinâmica para melhorar sua aparência. Como deve proceder?",
    "options": [
      "Clicar com o botão direito → Formatar Tabela Dinâmica → Estilos",
      "Página Inicial → Formatar como Tabela → selecionar o estilo desejado",
      "Selecionar a Tabela Dinâmica → Design → escolher o estilo na galeria de Estilos de Tabela Dinâmica",
      "Análise → Opções → Estilo → selecionar o estilo desejado"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Tabelas Dinâmicas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Tabelas Dinâmicas, subtema Formatação (Nível iniciante).",
      "papoReto": "'Selecionar a Tabela Dinâmica → Design → escolher o estilo na galeria de Estilos de Tabela Dinâmica' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Clicar com o botão direito → Formatar Tabela Dinâmica → Estilos: está errada porque ativa contexto/estrutura XML diferente.",
        "Página Inicial → Formatar como Tabela → selecionar o estilo desejado: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Análise → Opções → Estilo → selecionar o estilo desejado: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q65",
    "text": "O que é o Power Query no Excel e qual é sua principal função?",
    "options": [
      "Uma ferramenta de análise estatística integrada ao Excel",
      "Um recurso para criar conexões entre planilhas da mesma pasta de trabalho",
      "Um suplemento para criar gráficos avançados e dashboards",
      "Uma ferramenta de ETL integrada ao Excel que permite importar, transformar e carregar dados de diversas fontes"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Power Query",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Power Query, subtema Importação de Dados (Nível iniciante).",
      "papoReto": "'Uma ferramenta de ETL integrada ao Excel que permite importar, transformar e carregar dados de diversas fontes' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Uma ferramenta de análise estatística integrada ao Excel: está errada porque ativa contexto/estrutura XML diferente.",
        "Um recurso para criar conexões entre planilhas da mesma pasta de trabalho: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Um suplemento para criar gráficos avançados e dashboards: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q66",
    "text": "Quais fontes de dados podem ser importadas pelo Power Query no Excel?",
    "options": [
      "Apenas fontes Microsoft como SharePoint e Azure",
      "Apenas bancos de dados SQL Server e Oracle",
      "Apenas arquivos Excel e CSV",
      "Arquivos Excel, CSV, PDF, bancos de dados SQL, SharePoint, web, APIs e muitas outras fontes"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Power Query",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Power Query, subtema Importação de Dados (Nível iniciante).",
      "papoReto": "'Arquivos Excel, CSV, PDF, bancos de dados SQL, SharePoint, web, APIs e muitas outras fontes' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Apenas fontes Microsoft como SharePoint e Azure: está errada porque ativa contexto/estrutura XML diferente.",
        "Apenas bancos de dados SQL Server e Oracle: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Apenas arquivos Excel e CSV: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q67",
    "text": "Um usuário precisa importar dados de uma página web para o Excel e atualizá-los automaticamente. Qual recurso deve usar?",
    "options": [
      "Copiar e colar o conteúdo da página web no Excel manualmente",
      "Inserir → Conteúdo Online → Web → URL",
      "Usar macro VBA com objeto XMLHttp para importar os dados",
      "Dados → Obter Dados → De Outras Fontes → Da Web → inserir a URL e configurar atualização automática"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Power Query",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Power Query, subtema Importação de Dados (Nível iniciante).",
      "papoReto": "Dados → Obter Dados → De Outras Fontes → Da Web → inserir a URL e configurar atualização automática é a resposta correta.",
      "puloDoGato": "Alternativas desceptoras usam sintaxe similar mas semântica errada",
      "cascasDeBanana": [
        "Copiar e colar o conteúdo da página web no Excel manualmente: Incorreto, pois não é a opção correta para resolver o problema apresentado ou não existe com essa finalidade.",
        "Usar macro VBA com objeto XMLHttp para importar os dados: Incorreto, pois não é a opção correta para resolver o problema apresentado ou não existe com essa finalidade.",
        "Inserir → Conteúdo Online → Web → URL: Incorreto, pois não é a opção correta para resolver o problema apresentado ou não existe com essa finalidade."
      ],
      "dicaOuro": "Memorize o caminho de menu exato; testes cobrem UI navigation, não lógica interna"
    }
  },
  {
    "id": "mo201_q68",
    "text": "Um usuário importou uma tabela com Power Query onde os cabeçalhos estão na primeira linha de dados. Como promover a primeira linha como cabeçalho no Editor do Power Query?",
    "options": [
      "Página Inicial → Usar Primeira Linha como Cabeçalho",
      "Transformar → Promover Cabeçalhos → Primeira Linha",
      "Ambas A e B estão corretas",
      "Clicar com o botão direito na primeira linha → Promover como Cabeçalho"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Power Query",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Power Query, subtema Transformação de Dados (Nível iniciante).",
      "papoReto": "'Página Inicial → Usar Primeira Linha como Cabeçalho' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Transformar → Promover Cabeçalhos → Primeira Linha: está errada porque ativa contexto/estrutura XML diferente.",
        "Ambas A e B estão corretas: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Clicar com o botão direito na primeira linha → Promover como Cabeçalho: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q69",
    "text": "Um usuário importou dados com Power Query e precisa remover colunas desnecessárias. Qual é a abordagem mais eficiente no Editor do Power Query?",
    "options": [
      "Ambas A e B são abordagens válidas dependendo do número de colunas",
      "Transformar → Gerenciar Colunas → Remover Colunas Selecionadas",
      "Selecionar as colunas a excluir → Página Inicial → Remover Colunas",
      "Selecionar as colunas a manter → clicar com o botão direito → Remover Outras Colunas"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Power Query",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Power Query, subtema Transformação de Dados (Nível iniciante).",
      "papoReto": "'Selecionar as colunas a manter → clicar com o botão direito → Remover Outras Colunas' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Ambas A e B são abordagens válidas dependendo do número de colunas: está errada porque ativa contexto/estrutura XML diferente.",
        "Transformar → Gerenciar Colunas → Remover Colunas Selecionadas: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Selecionar as colunas a excluir → Página Inicial → Remover Colunas: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q70",
    "text": "Um usuário importou uma tabela com Power Query onde os valores da coluna \"Mês\" estão como texto (\"Janeiro\", \"Fevereiro\"). Precisa converter para número (1, 2). Qual abordagem resolve isso no Power Query?",
    "options": [
      "Usar Transformar → Tipo de Dados → Número; o Power Query converte automaticamente",
      "Adicionar coluna personalizada com condição If ou usar Substituir Valores para mapear cada mês ao número correspondente",
      "Usar Mesclar Consultas com uma tabela de referência mês-número",
      "Criar uma coluna de índice e usar como referência de mês"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Power Query",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Power Query, subtema Transformação de Dados (Nível intermediario).",
      "papoReto": "'Adicionar coluna personalizada com condição If ou usar Substituir Valores para mapear cada mês ao número correspondente' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Usar Transformar → Tipo de Dados → Número; o Power Query converte automaticamente: está errada porque ativa contexto/estrutura XML diferente.",
        "Usar Mesclar Consultas com uma tabela de referência mês-número: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Criar uma coluna de índice e usar como referência de mês: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q71",
    "text": "Qual é a diferença entre as operações \"Mesclar Consultas\" e \"Acrescentar Consultas\" no Power Query?",
    "options": [
      "Mesclar combina tabelas horizontalmente por uma coluna chave como um JOIN; Acrescentar empilha tabelas verticalmente como um UNION",
      "Mesclar é equivalente ao PROCV; Acrescentar é equivalente ao SOMASE",
      "Acrescentar combina colunas de duas tabelas; Mesclar empilha linhas",
      "Não há diferença funcional entre as duas operações"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Power Query",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Power Query, subtema Mesclar e Acrescentar (Nível intermediario).",
      "papoReto": "'Mesclar combina tabelas horizontalmente por uma coluna chave como um JOIN; Acrescentar empilha tabelas verticalmente como um UNION' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Mesclar é equivalente ao PROCV; Acrescentar é equivalente ao SOMASE: está errada porque ativa contexto/estrutura XML diferente.",
        "Acrescentar combina colunas de duas tabelas; Mesclar empilha linhas: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Não há diferença funcional entre as duas operações: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q72",
    "text": "Um usuário precisa combinar dados de 12 planilhas mensais com a mesma estrutura em uma única tabela usando Power Query. Qual é a abordagem mais eficiente?",
    "options": [
      "Usar Consolidar Dados do Excel em vez do Power Query",
      "Criar uma macro VBA que copia os dados de cada planilha para uma planilha mestre",
      "Importar cada planilha separadamente e usar Acrescentar Consultas 11 vezes",
      "Dados → Obter Dados → De Arquivo → Da Pasta → selecionar a pasta com os arquivos e usar Acrescentar Consultas"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Power Query",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Power Query, subtema Mesclar e Acrescentar (Nível intermediario).",
      "papoReto": "'Dados → Obter Dados → De Arquivo → Da Pasta → selecionar a pasta com os arquivos e usar Acrescentar Consultas' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Usar Consolidar Dados do Excel em vez do Power Query: está errada porque ativa contexto/estrutura XML diferente.",
        "Criar uma macro VBA que copia os dados de cada planilha para uma planilha mestre: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Importar cada planilha separadamente e usar Acrescentar Consultas 11 vezes: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q73",
    "text": "Um usuário precisa criar uma etapa personalizada no Power Query que não está disponível nas opções da interface. Qual recurso permite escrever código diretamente?",
    "options": [
      "Editor Avançado do Power Query onde se escreve código na linguagem M",
      "Python integrado ao Power Query via suplemento",
      "Fórmulas DAX aplicadas dentro do Power Query",
      "Console VBA integrado ao Power Query"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Power Query",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Power Query, subtema Linguagem M (Nível intermediario).",
      "papoReto": "'Editor Avançado do Power Query onde se escreve código na linguagem M' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Python integrado ao Power Query via suplemento: está errada porque ativa contexto/estrutura XML diferente.",
        "Fórmulas DAX aplicadas dentro do Power Query: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Console VBA integrado ao Power Query: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q74",
    "text": "Um usuário configurou uma consulta Power Query e deseja que os dados sejam atualizados automaticamente toda vez que a pasta de trabalho for aberta. Qual configuração deve aplicar?",
    "options": [
      "Arquivo → Opções → Power Query → Atualização Automática → Ao Abrir Arquivo",
      "Dados → Consultas e Conexões → clicar com o botão direito na consulta → Propriedades → marcar \"Atualizar dados ao abrir o arquivo\"",
      "Não é possível atualizar automaticamente ao abrir; requer macro VBA",
      "Power Query → Atualizar → Configurar Atualização Automática → Ao Abrir"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Power Query",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Power Query, subtema Atualização de Dados (Nível iniciante).",
      "papoReto": "Dados → Consultas e Conexões → clicar com o botão direito na consulta → Propriedades → marcar \"Atualizar dados ao abrir o arquivo\" é a resposta correta.",
      "puloDoGato": "Opções alternativas parecem funcionais mas omitem configuração obrigatória",
      "cascasDeBanana": [
        "Power Query → Atualizar → Configurar Atualização Automática → Ao Abrir: Incorreto, pois não é a opção correta para resolver o problema apresentado ou não existe com essa finalidade.",
        "Arquivo → Opções → Power Query → Atualização Automática → Ao Abrir Arquivo: Incorreto, pois não é a opção correta para resolver o problema apresentado ou não existe com essa finalidade.",
        "Não é possível atualizar automaticamente ao abrir; requer macro VBA: Incorreto, pois não é a opção correta para resolver o problema apresentado ou não existe com essa finalidade."
      ],
      "dicaOuro": "Dados → Consultas e Conexões → clicar com o botão direito na consulta → Propriedades → marcar \"Atualizar dados ao abrir o arquivo\" — este é o ponto-chave a memorizar para acertar na prova."
    }
  },
  {
    "id": "mo201_q75",
    "text": "Um usuário deseja restringir a entrada em uma célula para aceitar apenas datas entre 01/01/2024 e 31/12/2024. Qual recurso deve usar?",
    "options": [
      "Revisão → Proteger Planilha → Restringir Datas",
      "Página Inicial → Formatar Células → Data → Intervalo → definir as datas",
      "Inserir → Controle de Formulário → Seletor de Data com intervalo",
      "Dados → Validação de Dados → Permitir: Data → entre → definir as datas mínima e máxima"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Validação de Dados (Nível iniciante).",
      "papoReto": "'Dados → Validação de Dados → Permitir: Data → entre → definir as datas mínima e máxima' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Revisão → Proteger Planilha → Restringir Datas: está errada porque ativa contexto/estrutura XML diferente.",
        "Página Inicial → Formatar Células → Data → Intervalo → definir as datas: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Inserir → Controle de Formulário → Seletor de Data com intervalo: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q76",
    "text": "Um usuário deseja criar uma lista suspensa em uma célula com opções predefinidas. Qual recurso deve usar?",
    "options": [
      "Inserir → Controle de Formulário → Caixa de Combinação",
      "Dados → Validação de Dados → Permitir: Lista → definir as opções separadas por ponto e vírgula ou selecionar um intervalo",
      "Página Inicial → Células → Formatar → Lista Suspensa",
      "Desenvolvedor → Controles → Caixa de Listagem"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Validação de Dados (Nível iniciante).",
      "papoReto": "'Dados → Validação de Dados → Permitir: Lista → definir as opções separadas por ponto e vírgula ou selecionar um intervalo' ativa dataValidation node em worksheet.xml. Restringe entrada a tipo específico (List/Decimal/Date/Custom) que Excel valida em digitação.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Inserir → Controle de Formulário → Caixa de Combinação: está errada porque ativa contexto/estrutura XML diferente.",
        "Página Inicial → Células → Formatar → Lista Suspensa: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Desenvolvedor → Controles → Caixa de Listagem: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q77",
    "text": "Um usuário precisa criar uma lista suspensa dependente onde as opções da segunda lista mudam conforme o valor selecionado na primeira lista. Qual abordagem resolve isso?",
    "options": [
      "Usar Validação de Dados com fórmula INDIRETO referenciando nomes definidos para cada categoria da primeira lista",
      "Criar tabelas separadas para cada categoria e vincular via PROCX",
      "Usar macro VBA para popular a segunda lista conforme a seleção da primeira",
      "Usar Power Query para filtrar as opções da segunda lista dinamicamente"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Validação de Dados (Nível intermediario).",
      "papoReto": "'Usar Validação de Dados com fórmula INDIRETO referenciando nomes definidos para cada categoria da primeira lista' ativa dataValidation node em worksheet.xml. Restringe entrada a tipo específico (List/Decimal/Date/Custom) que Excel valida em digitação.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Criar tabelas separadas para cada categoria e vincular via PROCX: está errada porque ativa contexto/estrutura XML diferente.",
        "Usar macro VBA para popular a segunda lista conforme a seleção da primeira: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Usar Power Query para filtrar as opções da segunda lista dinamicamente: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q78",
    "text": "O que é Formatação Condicional no Excel?",
    "options": [
      "Um tipo de estilo de célula aplicado manualmente com base em critérios visuais",
      "Um recurso que formata automaticamente toda a planilha com base no tema selecionado",
      "Uma forma de proteger células com formatação específica contra edição",
      "Um recurso que aplica formatação automática a células com base em regras ou condições definidas pelo usuário"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Formatação Condicional (Nível iniciante).",
      "papoReto": "'Um recurso que aplica formatação automática a células com base em regras ou condições definidas pelo usuário' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Um tipo de estilo de célula aplicado manualmente com base em critérios visuais: está errada porque ativa contexto/estrutura XML diferente.",
        "Um recurso que formata automaticamente toda a planilha com base no tema selecionado: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Uma forma de proteger células com formatação específica contra edição: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q79",
    "text": "Um usuário deseja destacar automaticamente com fundo vermelho todas as células de uma coluna onde o valor é menor que zero. Qual sequência deve seguir?",
    "options": [
      "Página Inicial → Estilos de Célula → Negativo → Vermelho → aplicar ao intervalo",
      "Inserir → Regra de Formatação → Menor que Zero → Cor de Fundo Vermelha",
      "Selecionar o intervalo → Dados → Formatação Condicional → Valor Negativo → Vermelho",
      "Selecionar o intervalo → Página Inicial → Formatação Condicional → Realçar Regras das Células → É Menor do que → 0 → definir formato vermelho"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Formatação Condicional (Nível iniciante).",
      "papoReto": "'Selecionar o intervalo → Página Inicial → Formatação Condicional → Realçar Regras das Células → É Menor do que → 0 → definir formato vermelho' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Página Inicial → Estilos de Célula → Negativo → Vermelho → aplicar ao intervalo: está errada porque ativa contexto/estrutura XML diferente.",
        "Inserir → Regra de Formatação → Menor que Zero → Cor de Fundo Vermelha: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Selecionar o intervalo → Dados → Formatação Condicional → Valor Negativo → Vermelho: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q80",
    "text": "Um usuário deseja aplicar uma escala de cores a um intervalo de valores onde os menores valores ficam em vermelho e os maiores em verde. Qual opção de Formatação Condicional deve usar?",
    "options": [
      "Página Inicial → Formatar Células → Preenchimento → Gradiente Condicional",
      "Página Inicial → Formatação Condicional → Conjuntos de Ícones → Setas Coloridas",
      "Página Inicial → Formatação Condicional → Barras de Dados → Gradiente de Cor",
      "Página Inicial → Formatação Condicional → Escalas de Cor → selecionar a escala Verde-Vermelho ou Vermelho-Verde"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Formatação Condicional (Nível iniciante).",
      "papoReto": "'Página Inicial → Formatação Condicional → Escalas de Cor → selecionar a escala Verde-Vermelho ou Vermelho-Verde' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Página Inicial → Formatar Células → Preenchimento → Gradiente Condicional: está errada porque ativa contexto/estrutura XML diferente.",
        "Página Inicial → Formatação Condicional → Conjuntos de Ícones → Setas Coloridas: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Página Inicial → Formatação Condicional → Barras de Dados → Gradiente de Cor: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q81",
    "text": "Um usuário precisa destacar linhas inteiras de uma tabela onde o valor da coluna Status é \"Atrasado\". Qual abordagem de Formatação Condicional resolve isso?",
    "options": [
      "Selecionar toda a tabela → Nova Regra → Usar fórmula → =$C1=\"Atrasado\" com referência de coluna absoluta e linha relativa",
      "Usar Formatação Condicional → Realçar Regras → Texto que Contém → \"Atrasado\" na coluna inteira",
      "Selecionar apenas a coluna Status e aplicar a regra de realce",
      "Aplicar a regra na coluna Status e usar Pincel de Formatação para copiar para as demais colunas"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Formatação Condicional (Nível intermediario).",
      "papoReto": "'Selecionar toda a tabela → Nova Regra → Usar fórmula → =$C1=\"Atrasado\" com referência de coluna absoluta e linha relativa' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Usar Formatação Condicional → Realçar Regras → Texto que Contém → \"Atrasado\" na coluna inteira: está errada porque ativa contexto/estrutura XML diferente.",
        "Selecionar apenas a coluna Status e aplicar a regra de realce: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Aplicar a regra na coluna Status e usar Pincel de Formatação para copiar para as demais colunas: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q82",
    "text": "Um usuário criou várias regras de Formatação Condicional em um intervalo e percebe que algumas regras não estão sendo aplicadas. Qual é a causa mais provável?",
    "options": [
      "O intervalo tem proteção que impede a aplicação de Formatação Condicional",
      "As regras conflitantes se cancelam mutuamente no Excel",
      "O número máximo de regras por intervalo foi atingido",
      "Uma regra com prioridade mais alta e a opção \"Parar se Verdadeiro\" ativada está impedindo a avaliação das regras seguintes"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Formatação Condicional (Nível intermediario).",
      "papoReto": "'Uma regra com prioridade mais alta e a opção \"Parar se Verdadeiro\" ativada está impedindo a avaliação das regras seguintes' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "O intervalo tem proteção que impede a aplicação de Formatação Condicional: está errada porque ativa contexto/estrutura XML diferente.",
        "As regras conflitantes se cancelam mutuamente no Excel: está errada porque manipula propriedade errada ou em escopo inválido.",
        "O número máximo de regras por intervalo foi atingido: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q83",
    "text": "Um usuário deseja ver como diferentes taxas de juros afetam a parcela mensal de um financiamento testando múltiplos valores de uma vez. Qual recurso do Excel permite isso?",
    "options": [
      "Dados → Análise de Hipóteses → Atingir Meta",
      "Dados → Análise de Hipóteses → Tabela de Dados com uma variável",
      "Dados → Análise de Hipóteses → Gerenciador de Cenários",
      "Fórmulas → Avaliar Fórmula com múltiplos valores"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Análise de Hipóteses (Nível iniciante).",
      "papoReto": "'Dados → Análise de Hipóteses → Tabela de Dados com uma variável' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Dados → Análise de Hipóteses → Atingir Meta: está errada porque ativa contexto/estrutura XML diferente.",
        "Dados → Análise de Hipóteses → Gerenciador de Cenários: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Fórmulas → Avaliar Fórmula com múltiplos valores: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q84",
    "text": "Um usuário conhece o resultado desejado de uma fórmula e quer descobrir qual valor de entrada produz esse resultado. Qual recurso do Excel resolve isso?",
    "options": [
      "Dados → Análise de Hipóteses → Gerenciador de Cenários",
      "Fórmulas → Solver → Definir Meta",
      "Dados → Análise de Hipóteses → Atingir Meta",
      "Dados → Análise de Hipóteses → Tabela de Dados"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Análise de Hipóteses (Nível iniciante).",
      "papoReto": "'Dados → Análise de Hipóteses → Atingir Meta' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "SE() testa. E()/OU() combinam lógica. PROCX()/ÍNDICE buscam.",
      "cascasDeBanana": [
        "Dados → Análise de Hipóteses → Gerenciador de Cenários: está errada porque ativa contexto/estrutura XML diferente.",
        "Fórmulas → Solver → Definir Meta: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Dados → Análise de Hipóteses → Tabela de Dados: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Fórmulas dinâmicas (array) propagam automático sem Ctrl+Shift+Enter."
    }
  },
  {
    "id": "mo201_q85",
    "text": "Um usuário precisa comparar três cenários de orçamento (Otimista, Realista e Pessimista) com diferentes combinações de variáveis. Qual recurso do Excel é mais adequado?",
    "options": [
      "Dados → Análise de Hipóteses → Gerenciador de Cenários → criar e comparar os três cenários",
      "Usar Power Query para simular os três cenários simultaneamente",
      "Criar três planilhas separadas uma para cada cenário",
      "Dados → Análise de Hipóteses → Tabela de Dados com duas variáveis"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Análise de Hipóteses (Nível intermediario).",
      "papoReto": "'Dados → Análise de Hipóteses → Gerenciador de Cenários → criar e comparar os três cenários' ativa dataValidation node em worksheet.xml. Restringe entrada a tipo específico (List/Decimal/Date/Custom) que Excel valida em digitação.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Usar Power Query para simular os três cenários simultaneamente: está errada porque ativa contexto/estrutura XML diferente.",
        "Criar três planilhas separadas uma para cada cenário: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Dados → Análise de Hipóteses → Tabela de Dados com duas variáveis: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q86",
    "text": "O que é o Solver no Excel e em que situações é utilizado?",
    "options": [
      "Uma extensão do Atingir Meta que suporta múltiplas células de entrada simultaneamente",
      "Uma ferramenta de análise estatística para resolver sistemas de equações lineares",
      "Um recurso que resolve erros de fórmulas automaticamente",
      "Um suplemento de otimização que encontra o valor ótimo de uma célula objetivo ajustando células variáveis sujeitas a restrições definidas pelo usuário"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Solver (Nível intermediario).",
      "papoReto": "'Um suplemento de otimização que encontra o valor ótimo de uma célula objetivo ajustando células variáveis sujeitas a restrições definidas pelo usuário' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Uma extensão do Atingir Meta que suporta múltiplas células de entrada simultaneamente: está errada porque ativa contexto/estrutura XML diferente.",
        "Uma ferramenta de análise estatística para resolver sistemas de equações lineares: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Um recurso que resolve erros de fórmulas automaticamente: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q87",
    "text": "Um usuário precisa maximizar o lucro de uma empresa ajustando a quantidade produzida de três produtos respeitando restrições de capacidade e matéria-prima. Qual configuração do Solver deve usar?",
    "options": [
      "Usar Tabela de Dados com duas variáveis para simular as combinações",
      "Configurar o Solver com objetivo de Minimizar o custo sem restrições",
      "Definir a célula de lucro como objetivo → Máximo → definir as células de quantidade como variáveis → adicionar restrições de capacidade e matéria-prima",
      "Usar Atingir Meta com três células variáveis e múltiplas restrições"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Solver (Nível intermediario).",
      "papoReto": "'Definir a célula de lucro como objetivo → Máximo → definir as células de quantidade como variáveis → adicionar restrições de capacidade e matéria-prima' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Usar Tabela de Dados com duas variáveis para simular as combinações: está errada porque ativa contexto/estrutura XML diferente.",
        "Configurar o Solver com objetivo de Minimizar o custo sem restrições: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Usar Atingir Meta com três células variáveis e múltiplas restrições: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q88",
    "text": "Um usuário tem dados de vendas em 12 planilhas mensais com a mesma estrutura e precisa consolidar os totais em uma planilha resumo. Qual recurso do Excel permite isso sem Power Query?",
    "options": [
      "Dados → Consolidar → selecionar a função (Soma) e adicionar os intervalos de cada planilha",
      "Copiar e colar os dados de cada planilha na planilha resumo e somar manualmente",
      "Ambas A e C são abordagens válidas",
      "Usar fórmulas 3D como =SOMA(Jan:Dez!B2) para somar o mesmo intervalo em múltiplas planilhas"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Gerenciar Pastas de Trabalho",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gerenciar Pastas de Trabalho, subtema Consolidar Dados (Nível iniciante).",
      "papoReto": "'Dados → Consolidar → selecionar a função (Soma) e adicionar os intervalos de cada planilha' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Copiar e colar os dados de cada planilha na planilha resumo e somar manualmente: está errada porque ativa contexto/estrutura XML diferente.",
        "Ambas A e C são abordagens válidas: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Usar fórmulas 3D como =SOMA(Jan:Dez!B2) para somar o mesmo intervalo em múltiplas planilhas: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q89",
    "text": "Um usuário precisa calcular a média do valor da célula B5 em todas as planilhas de Jan a Dez. Qual fórmula 3D deve usar?",
    "options": [
      "=MÉDIA3D(Jan:Dez;B5)",
      "=MÉDIAS(Jan!B5;Dez!B5)",
      "=MÉDIA(INDIRETO(\"Jan:Dez!B5\"))",
      "=MÉDIA(Jan:Dez!B5)"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Gerenciar Pastas de Trabalho",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gerenciar Pastas de Trabalho, subtema Fórmulas 3D (Nível intermediario).",
      "papoReto": "'=MÉDIA(Jan:Dez!B5)' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "SE() testa. E()/OU() combinam lógica. PROCX()/ÍNDICE buscam.",
      "cascasDeBanana": [
        "=MÉDIA3D(Jan:Dez;B5): está errada porque ativa contexto/estrutura XML diferente.",
        "=MÉDIAS(Jan!B5;Dez!B5): está errada porque manipula propriedade errada ou em escopo inválido.",
        "=MÉDIA(INDIRETO(\"Jan:Dez!B5\")): está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Fórmulas dinâmicas (array) propagam automático sem Ctrl+Shift+Enter."
    }
  },
  {
    "id": "mo201_q90",
    "text": "Um usuário precisa gravar uma macro no Excel que formate um relatório aplicando negrito nos cabeçalhos e bordas nas células de dados. Qual guia deve habilitar para acessar o gravador de macros?",
    "options": [
      "Guia Desenvolvedor",
      "Guia Dados",
      "Guia Fórmulas",
      "Guia Exibir"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Gerenciar Pastas de Trabalho",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gerenciar Pastas de Trabalho, subtema Macros (Nível iniciante).",
      "papoReto": "'Guia Desenvolvedor' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Guia Dados: está errada porque ativa contexto/estrutura XML diferente.",
        "Guia Fórmulas: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Guia Exibir: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q91",
    "text": "Um usuário gravou uma macro no Excel usando referências absolutas mas precisa que ela funcione a partir de qualquer célula selecionada. O que deve fazer?",
    "options": [
      "Usar o comando Application.ActiveCell no VBA para tornar as referências relativas",
      "Editar o código VBA substituindo as referências absolutas por referências relativas",
      "Regravar a macro ativando \"Usar Referências Relativas\" antes de iniciar a gravação",
      "Ambas B e C são abordagens válidas para converter referências absolutas em relativas"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Gerenciar Pastas de Trabalho",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gerenciar Pastas de Trabalho, subtema Macros (Nível intermediario).",
      "papoReto": "'Regravar a macro ativando \"Usar Referências Relativas\" antes de iniciar a gravação' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Usar o comando Application.ActiveCell no VBA para tornar as referências relativas: está errada porque ativa contexto/estrutura XML diferente.",
        "Editar o código VBA substituindo as referências absolutas por referências relativas: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Ambas B e C são abordagens válidas para converter referências absolutas em relativas: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q92",
    "text": "Um usuário precisa criar uma macro VBA no Excel que percorra todas as planilhas de uma pasta de trabalho e aplique a mesma formatação. Qual estrutura VBA é mais adequada?",
    "options": [
      "Loop Do While com verificação de nome de planilha",
      "Loop For Each aplicado ao objeto ActiveWorkbook.Sheets",
      "Loop For i = 1 To Sheets.Count com índice de planilha",
      "Loop For Each ws In ThisWorkbook.Worksheets com a formatação aplicada dentro do loop"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Gerenciar Pastas de Trabalho",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gerenciar Pastas de Trabalho, subtema Macros (Nível intermediario).",
      "papoReto": "'Loop For Each ws In ThisWorkbook.Worksheets com a formatação aplicada dentro do loop' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Loop Do While com verificação de nome de planilha: está errada porque ativa contexto/estrutura XML diferente.",
        "Loop For Each aplicado ao objeto ActiveWorkbook.Sheets: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Loop For i = 1 To Sheets.Count com índice de planilha: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q93",
    "text": "Um usuário deseja ocultar as fórmulas de células específicas de forma que elas não apareçam na barra de fórmulas quando selecionadas mesmo que a planilha não esteja visualmente bloqueada. Qual configuração permite isso?",
    "options": [
      "Não é possível ocultar fórmulas sem bloquear a edição das células",
      "Revisão → Proteger Planilha → Ocultar Fórmulas → selecionar o intervalo",
      "Página Inicial → Células → Formatar → Ocultar Fórmulas → proteger",
      "Formatar Células → Proteção → marcar \"Oculta\" → proteger a planilha"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Gerenciar Pastas de Trabalho",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gerenciar Pastas de Trabalho, subtema Proteção Avançada (Nível intermediario).",
      "papoReto": "'Formatar Células → Proteção → marcar \"Oculta\" → proteger a planilha' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "SE() testa. E()/OU() combinam lógica. PROCX()/ÍNDICE buscam.",
      "cascasDeBanana": [
        "Não é possível ocultar fórmulas sem bloquear a edição das células: está errada porque ativa contexto/estrutura XML diferente.",
        "Revisão → Proteger Planilha → Ocultar Fórmulas → selecionar o intervalo: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Página Inicial → Células → Formatar → Ocultar Fórmulas → proteger: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Fórmulas dinâmicas (array) propagam automático sem Ctrl+Shift+Enter."
    }
  },
  {
    "id": "mo201_q94",
    "text": "Um usuário precisa classificar uma tabela de dados por três critérios: primeiro por Região, depois por Vendedor e por último por Valor decrescente. Qual recurso permite configurar múltiplos níveis de classificação?",
    "options": [
      "Selecionar cada coluna e classificar sequencialmente começando pelo critério menos prioritário",
      "Página Inicial → Classificar e Filtrar → Classificação Personalizada → Múltiplos Níveis",
      "Dados → Classificar → Adicionar Nível → configurar os três critérios em ordem de prioridade",
      "Dados → Filtro Avançado → Classificação Múltipla"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Classificar e Filtrar (Nível intermediario).",
      "papoReto": "'Dados → Classificar → Adicionar Nível → configurar os três critérios em ordem de prioridade' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Selecionar cada coluna e classificar sequencialmente começando pelo critério menos prioritário: está errada porque ativa contexto/estrutura XML diferente.",
        "Página Inicial → Classificar e Filtrar → Classificação Personalizada → Múltiplos Níveis: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Dados → Filtro Avançado → Classificação Múltipla: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q95",
    "text": "Um usuário precisa filtrar dados com critérios complexos como \"Região = Norte E Valor > 1000 OU Região = Sul E Valor > 2000\" que o AutoFiltro não suporta diretamente. Qual recurso do Excel resolve isso?",
    "options": [
      "Usar FILTRO do Excel 365 com as condições compostas em uma fórmula",
      "Dados → Avançado (Filtro Avançado) → definir o intervalo de critérios com as condições em linhas separadas",
      "Dados → AutoFiltro → Filtro Personalizado → adicionar múltiplas condições",
      "Usar Power Query para filtrar com condições compostas"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Classificar e Filtrar (Nível intermediario).",
      "papoReto": "'Dados → Avançado (Filtro Avançado) → definir o intervalo de critérios com as condições em linhas separadas' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Usar FILTRO do Excel 365 com as condições compostas em uma fórmula: está errada porque ativa contexto/estrutura XML diferente.",
        "Dados → AutoFiltro → Filtro Personalizado → adicionar múltiplas condições: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Usar Power Query para filtrar com condições compostas: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q96",
    "text": "Um usuário precisa remover registros duplicados de uma tabela mantendo apenas a primeira ocorrência de cada combinação única de Nome e CPF. Qual recurso deve usar?",
    "options": [
      "Dados → Filtro Avançado → Somente Registros Únicos → copiar para outro local",
      "Usar Power Query → Remover Linhas → Remover Duplicatas",
      "Dados → Remover Duplicatas → selecionar apenas as colunas Nome e CPF como critério",
      "Ambas A e C são abordagens válidas"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Remover Duplicatas (Nível intermediario).",
      "papoReto": "'Dados → Remover Duplicatas → selecionar apenas as colunas Nome e CPF como critério' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Dados → Filtro Avançado → Somente Registros Únicos → copiar para outro local: está errada porque ativa contexto/estrutura XML diferente.",
        "Usar Power Query → Remover Linhas → Remover Duplicatas: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Ambas A e C são abordagens válidas: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q97",
    "text": "Um usuário criou uma pasta de trabalho Excel com conexões a fontes de dados externas e precisa compartilhá-la com colegas que não têm acesso às fontes originais. Qual é a melhor abordagem?",
    "options": [
      "Usar Dados → Consultas e Conexões → exportar os dados como tabela estática e distribuir a pasta de trabalho sem as conexões ativas",
      "Ambas A e C são abordagens válidas dependendo se os dados precisam ser atualizados",
      "Compartilhar a pasta de trabalho normalmente; as conexões funcionarão automaticamente para todos",
      "Converter todas as consultas Power Query em valores antes de compartilhar"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Gerenciar Pastas de Trabalho",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gerenciar Pastas de Trabalho, subtema Conexões Externas (Nível intermediario).",
      "papoReto": "'Usar Dados → Consultas e Conexões → exportar os dados como tabela estática e distribuir a pasta de trabalho sem as conexões ativas' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Ambas A e C são abordagens válidas dependendo se os dados precisam ser atualizados: está errada porque ativa contexto/estrutura XML diferente.",
        "Compartilhar a pasta de trabalho normalmente; as conexões funcionarão automaticamente para todos: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Converter todas as consultas Power Query em valores antes de compartilhar: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q98",
    "text": "Um usuário deseja calcular subtotais por categoria em uma lista de dados sem usar Tabela Dinâmica. Qual recurso do Excel permite isso diretamente na planilha?",
    "options": [
      "Classificar os dados pela coluna de categoria e depois usar Dados → Subtotal → definir a função e o campo",
      "Usar Filtro Avançado com cálculo automático de subtotais",
      "Usar SOMASE para calcular os subtotais manualmente",
      "Inserir linhas manualmente entre as categorias e calcular a soma"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Subtotais (Nível intermediario).",
      "papoReto": "'Classificar os dados pela coluna de categoria e depois usar Dados → Subtotal → definir a função e o campo' ativa dataValidation node em worksheet.xml. Restringe entrada a tipo específico (List/Decimal/Date/Custom) que Excel valida em digitação.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Usar Filtro Avançado com cálculo automático de subtotais: está errada porque ativa contexto/estrutura XML diferente.",
        "Usar SOMASE para calcular os subtotais manualmente: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Inserir linhas manualmente entre as categorias e calcular a soma: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q99",
    "text": "Um usuário tem dados históricos de vendas mensais e deseja criar uma previsão automática para os próximos 12 meses com intervalos de confiança. Qual recurso do Excel permite isso?",
    "options": [
      "Inserir → Gráfico → Linha de Tendência → Previsão de 12 períodos",
      "Análise de Hipóteses → Gerenciador de Cenários → Projeção Futura",
      "Dados → Previsão → Planilha de Previsão → definir o período de previsão e nível de confiança",
      "Power Query → Transformar → Previsão → Série Temporal"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Previsão (Nível intermediario).",
      "papoReto": "'Dados → Previsão → Planilha de Previsão → definir o período de previsão e nível de confiança' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Inserir → Gráfico → Linha de Tendência → Previsão de 12 períodos: está errada porque ativa contexto/estrutura XML diferente.",
        "Análise de Hipóteses → Gerenciador de Cenários → Projeção Futura: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Power Query → Transformar → Previsão → Série Temporal: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q100",
    "text": "Um usuário criou uma Planilha de Previsão no Excel e deseja ajustar o intervalo de confiança de 95% para 90%. Onde deve configurar esse parâmetro?",
    "options": [
      "Dados → Previsão → Planilha de Previsão → Opções → Intervalo de Confiança → alterar para 90%",
      "Não é possível alterar o intervalo de confiança após criar a planilha de previsão",
      "Inserir → Gráfico de Previsão → Opções → Intervalo → 90%",
      "Dados → Análise de Hipóteses → Previsão → Configurações → Confiança"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Previsão (Nível intermediario).",
      "papoReto": "'Dados → Previsão → Planilha de Previsão → Opções → Intervalo de Confiança → alterar para 90%' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Não é possível alterar o intervalo de confiança após criar a planilha de previsão: está errada porque ativa contexto/estrutura XML diferente.",
        "Inserir → Gráfico de Previsão → Opções → Intervalo → 90%: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Dados → Análise de Hipóteses → Previsão → Configurações → Confiança: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q101",
    "text": "Um usuário precisa retornar múltiplos valores correspondentes a um critério de pesquisa em vez de apenas o primeiro resultado encontrado. Qual função do Excel 365 resolve isso nativamente?",
    "options": [
      "PROCX com modo de correspondência múltipla",
      "FILTRO (FILTER) com critério de correspondência",
      "PROCV com correspondência aproximada",
      "ÍNDICE+CORRESP com fórmula matricial"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções de Lookup (Nível intermediario).",
      "papoReto": "'FILTRO (FILTER) com critério de correspondência' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "PROCX com modo de correspondência múltipla: está errada porque ativa contexto/estrutura XML diferente.",
        "PROCV com correspondência aproximada: está errada porque manipula propriedade errada ou em escopo inválido.",
        "ÍNDICE+CORRESP com fórmula matricial: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q102",
    "text": "Um usuário precisa usar PROCX para pesquisar um valor em uma coluna e retornar o valor correspondente da linha anterior ao resultado encontrado. Qual argumento do PROCX permite controlar a direção da pesquisa?",
    "options": [
      "O terceiro argumento [modo_correspondência] com valor -1",
      "O quinto argumento [modo_pesquisa] com valor -1 para pesquisar do último para o primeiro",
      "Não é possível retornar a linha anterior com PROCX; requer ÍNDICE+CORRESP",
      "O quarto argumento [se_não_encontrado] com referência à linha anterior"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções de Lookup (Nível intermediario).",
      "papoReto": "'O quinto argumento [modo_pesquisa] com valor -1 para pesquisar do último para o primeiro' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "O terceiro argumento [modo_correspondência] com valor -1: está errada porque ativa contexto/estrutura XML diferente.",
        "Não é possível retornar a linha anterior com PROCX; requer ÍNDICE+CORRESP: está errada porque manipula propriedade errada ou em escopo inválido.",
        "O quarto argumento [se_não_encontrado] com referência à linha anterior: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q103",
    "text": "O que é a função LAMBDA no Excel 365 e qual é sua principal utilidade?",
    "options": [
      "Uma função que executa código Python dentro do Excel",
      "Uma função que permite criar funções personalizadas reutilizáveis sem usar VBA definindo parâmetros e uma fórmula de cálculo",
      "Uma função que substitui macros VBA para automação de tarefas repetitivas",
      "Uma função que cria arrays dinâmicos com lógica condicional"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções LAMBDA (Nível intermediario).",
      "papoReto": "'Uma função que permite criar funções personalizadas reutilizáveis sem usar VBA definindo parâmetros e uma fórmula de cálculo' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Uma função que executa código Python dentro do Excel: está errada porque ativa contexto/estrutura XML diferente.",
        "Uma função que substitui macros VBA para automação de tarefas repetitivas: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Uma função que cria arrays dinâmicos com lógica condicional: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q104",
    "text": "Um usuário criou uma função LAMBDA chamada CALCMARGEM que recebe receita e custo e retorna a margem percentual. Como deve salvar essa função para reutilização?",
    "options": [
      "Desenvolvedor → Funções Personalizadas → Salvar LAMBDA",
      "Inserir → Função → Personalizada → Salvar como LAMBDA nomeada",
      "Fórmulas → Gerenciador de Nomes → Novo → nomear como CALCMARGEM e definir a fórmula LAMBDA no campo Refere-se a",
      "Arquivo → Opções → Fórmulas → Funções Personalizadas → Adicionar LAMBDA"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções LAMBDA (Nível intermediario).",
      "papoReto": "'Fórmulas → Gerenciador de Nomes → Novo → nomear como CALCMARGEM e definir a fórmula LAMBDA no campo Refere-se a' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Desenvolvedor → Funções Personalizadas → Salvar LAMBDA: está errada porque ativa contexto/estrutura XML diferente.",
        "Inserir → Função → Personalizada → Salvar como LAMBDA nomeada: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Arquivo → Opções → Fórmulas → Funções Personalizadas → Adicionar LAMBDA: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q105",
    "text": "Qual é a principal vantagem da função LET no Excel 365 em relação a fórmulas complexas tradicionais?",
    "options": [
      "Permite criar variáveis globais acessíveis em toda a pasta de trabalho",
      "Permite executar múltiplas fórmulas em sequência como um script",
      "Substitui o uso de colunas auxiliares em tabelas dinâmicas",
      "Permite atribuir nomes a cálculos intermediários dentro da fórmula evitando repetição de cálculos e melhorando a legibilidade e o desempenho"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Função LET (Nível intermediario).",
      "papoReto": "'Permite atribuir nomes a cálculos intermediários dentro da fórmula evitando repetição de cálculos e melhorando a legibilidade e o desempenho' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "SE() testa. E()/OU() combinam lógica. PROCX()/ÍNDICE buscam.",
      "cascasDeBanana": [
        "Permite criar variáveis globais acessíveis em toda a pasta de trabalho: está errada porque ativa contexto/estrutura XML diferente.",
        "Permite executar múltiplas fórmulas em sequência como um script: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Substitui o uso de colunas auxiliares em tabelas dinâmicas: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Fórmulas dinâmicas (array) propagam automático sem Ctrl+Shift+Enter."
    }
  },
  {
    "id": "mo201_q106",
    "text": "Um usuário percebe que ao atualizar a Tabela Dinâmica a largura das colunas é redefinida automaticamente. Como desativar esse comportamento?",
    "options": [
      "Não é possível desativar o ajuste automático de colunas em Tabelas Dinâmicas",
      "Clicar com o botão direito na Tabela Dinâmica → Opções da Tabela Dinâmica → Layout e Formato → desmarcar \"Ajustar automaticamente larguras de coluna na atualização\"",
      "Formatar as colunas como largura fixa antes de atualizar",
      "Análise → Opções → Formato → Largura de Coluna → Fixar"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Tabelas Dinâmicas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Tabelas Dinâmicas, subtema Configurações Avançadas (Nível intermediario).",
      "papoReto": "'Clicar com o botão direito na Tabela Dinâmica → Opções da Tabela Dinâmica → Layout e Formato → desmarcar \"Ajustar automaticamente larguras de coluna na atualização\"' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Não é possível desativar o ajuste automático de colunas em Tabelas Dinâmicas: está errada porque ativa contexto/estrutura XML diferente.",
        "Formatar as colunas como largura fixa antes de atualizar: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Análise → Opções → Formato → Largura de Coluna → Fixar: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q107",
    "text": "Um usuário deseja que a Tabela Dinâmica exiba itens sem dados ou seja categorias que existem na fonte mas não têm valores no período filtrado. Como habilitar isso?",
    "options": [
      "Análise → Opções → Dados → Mostrar Itens Vazios",
      "Filtros da Tabela Dinâmica → Incluir Itens Sem Dados",
      "Clicar com o botão direito no campo → Configurações do Campo → Layout e Impressão → marcar \"Mostrar itens sem dados\"",
      "Não é possível exibir itens sem dados em Tabelas Dinâmicas"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Tabelas Dinâmicas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Tabelas Dinâmicas, subtema Configurações Avançadas (Nível intermediario).",
      "papoReto": "'Clicar com o botão direito no campo → Configurações do Campo → Layout e Impressão → marcar \"Mostrar itens sem dados\"' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Análise → Opções → Dados → Mostrar Itens Vazios: está errada porque ativa contexto/estrutura XML diferente.",
        "Filtros da Tabela Dinâmica → Incluir Itens Sem Dados: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Não é possível exibir itens sem dados em Tabelas Dinâmicas: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q108",
    "text": "O que é o Modelo de Dados no Excel e qual é sua relação com Tabelas Dinâmicas?",
    "options": [
      "Uma estrutura de dados do Power Query para organizar consultas relacionadas",
      "Um modelo de formatação aplicado automaticamente a Tabelas Dinâmicas",
      "Um repositório interno do Excel que permite relacionar múltiplas tabelas e criar Tabelas Dinâmicas baseadas em dados de várias fontes sem usar PROCV",
      "Um modelo de dados do Power BI integrado ao Excel"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Tabelas Dinâmicas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Tabelas Dinâmicas, subtema Modelos de Dados (Nível intermediario).",
      "papoReto": "'Um repositório interno do Excel que permite relacionar múltiplas tabelas e criar Tabelas Dinâmicas baseadas em dados de várias fontes sem usar PROCV' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Uma estrutura de dados do Power Query para organizar consultas relacionadas: está errada porque ativa contexto/estrutura XML diferente.",
        "Um modelo de formatação aplicado automaticamente a Tabelas Dinâmicas: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Um modelo de dados do Power BI integrado ao Excel: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q109",
    "text": "Um usuário precisa criar uma Tabela Dinâmica que combine dados de duas tabelas relacionadas: uma de Vendas e outra de Clientes vinculadas pelo campo ID_Cliente. Como deve proceder?",
    "options": [
      "Ambas B e C são válidas; o Modelo de Dados é apenas uma opção alternativa",
      "Mesclar as tabelas no Power Query e criar a Tabela Dinâmica a partir da tabela mesclada",
      "Adicionar ambas as tabelas ao Modelo de Dados → criar um Relacionamento entre elas → criar a Tabela Dinâmica usando o Modelo de Dados",
      "Usar PROCV para trazer os dados de Clientes para a tabela de Vendas antes de criar a Tabela Dinâmica"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Tabelas Dinâmicas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Tabelas Dinâmicas, subtema Modelos de Dados (Nível intermediario).",
      "papoReto": "'Adicionar ambas as tabelas ao Modelo de Dados → criar um Relacionamento entre elas → criar a Tabela Dinâmica usando o Modelo de Dados' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Ambas B e C são válidas; o Modelo de Dados é apenas uma opção alternativa: está errada porque ativa contexto/estrutura XML diferente.",
        "Mesclar as tabelas no Power Query e criar a Tabela Dinâmica a partir da tabela mesclada: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Usar PROCV para trazer os dados de Clientes para a tabela de Vendas antes de criar a Tabela Dinâmica: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q110",
    "text": "O que são Medidas DAX em uma Tabela Dinâmica do Excel?",
    "options": [
      "Métricas predefinidas do Excel para análise financeira em Tabelas Dinâmicas",
      "Funções estatísticas do Excel aplicadas automaticamente ao Modelo de Dados",
      "Fórmulas matemáticas avançadas exclusivas para uso em Tabelas Dinâmicas",
      "Cálculos personalizados criados com a linguagem DAX no Modelo de Dados que permitem agregações e análises mais sofisticadas que campos calculados comuns"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Tabelas Dinâmicas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Tabelas Dinâmicas, subtema Medidas DAX (Nível intermediario).",
      "papoReto": "'Cálculos personalizados criados com a linguagem DAX no Modelo de Dados que permitem agregações e análises mais sofisticadas que campos calculados comuns' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Métricas predefinidas do Excel para análise financeira em Tabelas Dinâmicas: está errada porque ativa contexto/estrutura XML diferente.",
        "Funções estatísticas do Excel aplicadas automaticamente ao Modelo de Dados: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Fórmulas matemáticas avançadas exclusivas para uso em Tabelas Dinâmicas: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q111",
    "text": "Um usuário importou uma tabela com Power Query onde uma coluna contém múltiplos valores separados por vírgula em cada célula como \"Norte, Sul, Leste\". Precisa separar cada valor em uma linha individual. Qual transformação deve usar?",
    "options": [
      "Página Inicial → Dividir Coluna → Em Linhas → delimitador vírgula",
      "Transformar → Dividir Coluna → Por Delimitador → selecionar vírgula → dividir em linhas",
      "Transformar → Coluna de Texto para Colunas → vírgula → transpor",
      "Adicionar Coluna → Coluna Personalizada → fórmula para dividir o texto"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Power Query",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Power Query, subtema Transformação Avançada (Nível intermediario).",
      "papoReto": "'Transformar → Dividir Coluna → Por Delimitador → selecionar vírgula → dividir em linhas' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Página Inicial → Dividir Coluna → Em Linhas → delimitador vírgula: está errada porque ativa contexto/estrutura XML diferente.",
        "Transformar → Coluna de Texto para Colunas → vírgula → transpor: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Adicionar Coluna → Coluna Personalizada → fórmula para dividir o texto: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q112",
    "text": "Um usuário tem uma tabela no formato largo (wide) com colunas Jan, Fev, Mar e precisa convertê-la para o formato longo (long) com uma coluna Mês e uma coluna Valor. Qual transformação do Power Query resolve isso?",
    "options": [
      "Transformar → Não Dinâmico de Outras Colunas (Unpivot Other Columns)",
      "Transformar → Transpor → reorganizar as colunas",
      "Adicionar Coluna → Mesclar Colunas → criar coluna Mês-Valor",
      "Página Inicial → Acrescentar Consultas → empilhar as colunas"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Power Query",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Power Query, subtema Transformação Avançada (Nível intermediario).",
      "papoReto": "'Transformar → Não Dinâmico de Outras Colunas (Unpivot Other Columns)' é formato que suporta estrutura interna necessária. Arquivo ZIP (.xlsx/.xlsm com XML+VBA) ou binário (.xlsb) determina compatibilidade com recursos.",
      "puloDoGato": ".XLS* extensão determina capacidade. M=Macros. T=Template.",
      "cascasDeBanana": [
        "Transformar → Transpor → reorganizar as colunas: está errada porque ativa contexto/estrutura XML diferente.",
        "Adicionar Coluna → Mesclar Colunas → criar coluna Mês-Valor: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Página Inicial → Acrescentar Consultas → empilhar as colunas: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Excel 365 detecta extensão arquivo. .xlsx ignora vbaProject.bin; .xlsm carrega."
    }
  },
  {
    "id": "mo201_q113",
    "text": "Um usuário precisa criar uma coluna condicional no Power Query que atribua \"Alto\" para valores acima de 1000, \"Médio\" para entre 500 e 1000 e \"Baixo\" para abaixo de 500. Qual recurso deve usar?",
    "options": [
      "Adicionar Coluna → Coluna Condicional → definir as condições If-Then-Else",
      "Ambas A e C são abordagens válidas",
      "Adicionar Coluna → Coluna Personalizada → fórmula if-then-else em linguagem M",
      "Transformar → Substituir Valores → com condição numérica"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Power Query",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Power Query, subtema Transformação Avançada (Nível intermediario).",
      "papoReto": "'Adicionar Coluna → Coluna Condicional → definir as condições If-Then-Else' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Ambas A e C são abordagens válidas: está errada porque ativa contexto/estrutura XML diferente.",
        "Adicionar Coluna → Coluna Personalizada → fórmula if-then-else em linguagem M: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Transformar → Substituir Valores → com condição numérica: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q114",
    "text": "Um usuário criou uma consulta Power Query que filtra dados por data e precisa que o usuário possa alterar a data de filtro sem editar a consulta. Qual recurso do Power Query permite isso?",
    "options": [
      "Criar um Parâmetro no Power Query e referenciar o parâmetro na etapa de filtro",
      "Criar uma variável no Editor Avançado em linguagem M",
      "Usar Dados → Validação de Dados para controlar o valor de filtro da consulta",
      "Usar uma célula do Excel como referência dinâmica na consulta via fórmula"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Power Query",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Power Query, subtema Parâmetros (Nível intermediario).",
      "papoReto": "'Criar um Parâmetro no Power Query e referenciar o parâmetro na etapa de filtro' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Criar uma variável no Editor Avançado em linguagem M: está errada porque ativa contexto/estrutura XML diferente.",
        "Usar Dados → Validação de Dados para controlar o valor de filtro da consulta: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Usar uma célula do Excel como referência dinâmica na consulta via fórmula: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q115",
    "text": "Um usuário criou um Gráfico Dinâmico e deseja ocultá-los os botões de campo que aparecem sobre o gráfico. Como deve proceder?",
    "options": [
      "Design do Gráfico → Opções → Botões de Campo → Ocultar",
      "Análise do Gráfico Dinâmico → Botões de Campo → Ocultar Tudo",
      "Clicar com o botão direito nos botões de campo → Ocultar Todos os Botões de Campo no Gráfico",
      "Clicar no gráfico → Formatar → Elementos do Gráfico → desmarcar Botões de Campo"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Gráficos Avançados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gráficos Avançados, subtema Gráficos Dinâmicos (Nível intermediario).",
      "papoReto": "'Clicar com o botão direito nos botões de campo → Ocultar Todos os Botões de Campo no Gráfico' cria/configura chartSpace em worksheet.xml com série, eixo e elementos visuais. Tipo gráfico (Column/Line/Pie) determina renderização.",
      "puloDoGato": "TIPO = renderização visual. SÉRIE = dados plotados.",
      "cascasDeBanana": [
        "Design do Gráfico → Opções → Botões de Campo → Ocultar: está errada porque ativa contexto/estrutura XML diferente.",
        "Análise do Gráfico Dinâmico → Botões de Campo → Ocultar Tudo: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Clicar no gráfico → Formatar → Elementos do Gráfico → desmarcar Botões de Campo: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Gráfico embarcado em worksheet.xml como chartSpace. Copiar duplica estrutura."
    }
  },
  {
    "id": "mo201_q116",
    "text": "Um usuário precisa criar um gráfico de velocímetro (gauge chart) no Excel para exibir KPIs. Como deve criá-lo nativamente?",
    "options": [
      "Inserir → Gráficos → Especiais → Velocímetro",
      "Combinar um gráfico de rosca com um gráfico de pizza formatados para simular o velocímetro",
      "Não é possível criar gráficos de velocímetro nativamente; requer suplemento",
      "Usar o tipo de gráfico Medidor disponível na galeria de gráficos do Excel"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Gráficos Avançados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gráficos Avançados, subtema Formatação Avançada (Nível intermediario).",
      "papoReto": "'Combinar um gráfico de rosca com um gráfico de pizza formatados para simular o velocímetro' cria/configura chartSpace em worksheet.xml com série, eixo e elementos visuais. Tipo gráfico (Column/Line/Pie) determina renderização.",
      "puloDoGato": "TIPO = renderização visual. SÉRIE = dados plotados.",
      "cascasDeBanana": [
        "Inserir → Gráficos → Especiais → Velocímetro: está errada porque ativa contexto/estrutura XML diferente.",
        "Não é possível criar gráficos de velocímetro nativamente; requer suplemento: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Usar o tipo de gráfico Medidor disponível na galeria de gráficos do Excel: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Gráfico embarcado em worksheet.xml como chartSpace. Copiar duplica estrutura."
    }
  },
  {
    "id": "mo201_q117",
    "text": "Um usuário deseja que as barras de um gráfico mudem de cor automaticamente de verde para vermelho quando o valor cair abaixo de uma meta. Qual abordagem permite isso?",
    "options": [
      "Usar macro VBA para verificar os valores e alterar as cores das barras dinamicamente",
      "Vincular a cor das barras a uma escala de cores definida nas opções do gráfico",
      "Criar duas séries de dados: uma para valores acima da meta e outra para abaixo, com cores diferentes",
      "Usar Formatação Condicional no gráfico via Formatar Série de Dados → Cor Condicional"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Gráficos Avançados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gráficos Avançados, subtema Formatação Avançada (Nível intermediario).",
      "papoReto": "'Criar duas séries de dados: uma para valores acima da meta e outra para abaixo, com cores diferentes' cria/configura chartSpace em worksheet.xml com série, eixo e elementos visuais. Tipo gráfico (Column/Line/Pie) determina renderização.",
      "puloDoGato": "TIPO = renderização visual. SÉRIE = dados plotados.",
      "cascasDeBanana": [
        "Usar macro VBA para verificar os valores e alterar as cores das barras dinamicamente: está errada porque ativa contexto/estrutura XML diferente.",
        "Vincular a cor das barras a uma escala de cores definida nas opções do gráfico: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Usar Formatação Condicional no gráfico via Formatar Série de Dados → Cor Condicional: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Gráfico embarcado em worksheet.xml como chartSpace. Copiar duplica estrutura."
    }
  },
  {
    "id": "mo201_q118",
    "text": "Um usuário deseja aplicar Conjuntos de Ícones em uma coluna mostrando seta verde para aumento, seta amarela para estável e seta vermelha para queda com base em percentuais personalizados. Como deve configurar?",
    "options": [
      "Inserir → Ícones → Setas → vincular à célula com regra de cor",
      "Formatação Condicional → Nova Regra → Ícone Personalizado → definir os percentuais",
      "Formatação Condicional → Conjuntos de Ícones → Gerenciar Regras → editar os percentuais de corte para cada ícone",
      "Não é possível personalizar os percentuais de corte nos Conjuntos de Ícones"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Formatação Condicional Avançada (Nível intermediario).",
      "papoReto": "'Formatação Condicional → Conjuntos de Ícones → Gerenciar Regras → editar os percentuais de corte para cada ícone' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Inserir → Ícones → Setas → vincular à célula com regra de cor: está errada porque ativa contexto/estrutura XML diferente.",
        "Formatação Condicional → Nova Regra → Ícone Personalizado → definir os percentuais: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Não é possível personalizar os percentuais de corte nos Conjuntos de Ícones: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q119",
    "text": "Um usuário deseja compartilhar uma pasta de trabalho Excel para coedição simultânea com colegas. Qual é o pré-requisito fundamental?",
    "options": [
      "Todos os usuários devem ter a mesma versão do Microsoft 365 instalada",
      "O arquivo deve estar no formato .xlsm para suportar coedição",
      "O arquivo deve estar salvo no OneDrive ou SharePoint e compartilhado com os colaboradores",
      "O arquivo deve estar em uma pasta de rede local com permissões de leitura e escrita"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Gerenciar Pastas de Trabalho",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gerenciar Pastas de Trabalho, subtema Compartilhamento (Nível intermediario).",
      "papoReto": "'O arquivo deve estar salvo no OneDrive ou SharePoint e compartilhado com os colaboradores' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Todos os usuários devem ter a mesma versão do Microsoft 365 instalada: está errada porque ativa contexto/estrutura XML diferente.",
        "O arquivo deve estar no formato .xlsm para suportar coedição: está errada porque manipula propriedade errada ou em escopo inválido.",
        "O arquivo deve estar em uma pasta de rede local com permissões de leitura e escrita: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q120",
    "text": "Qual recurso do Excel remove informações pessoais ocultas como nome do autor comentários e histórico de revisões antes de compartilhar uma pasta de trabalho?",
    "options": [
      "Arquivo → Salvar Como → Remover Metadados",
      "Arquivo → Informações → Verificar Problemas → Inspecionar Documento",
      "Dados → Ferramentas de Dados → Limpar Metadados",
      "Revisão → Proteger → Remover Informações Pessoais"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Gerenciar Pastas de Trabalho",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gerenciar Pastas de Trabalho, subtema Inspetor de Documento (Nível intermediario).",
      "papoReto": "'Arquivo → Informações → Verificar Problemas → Inspecionar Documento' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Arquivo → Salvar Como → Remover Metadados: está errada porque ativa contexto/estrutura XML diferente.",
        "Dados → Ferramentas de Dados → Limpar Metadados: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Revisão → Proteger → Remover Informações Pessoais: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q121",
    "text": "Um usuário precisa verificar se uma célula contém um erro antes de realizar um cálculo para evitar que o erro se propague. Qual função verifica se uma célula contém qualquer tipo de erro?",
    "options": [
      "SEERRO (IFERROR)",
      "TIPO.ERRO (ERROR.TYPE)",
      "ÉERRO (ISERROR)",
      "ÉERROS (ISERR)"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções de Informação (Nível intermediario).",
      "papoReto": "'ÉERRO (ISERROR)' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "SEERRO (IFERROR): está errada porque ativa contexto/estrutura XML diferente.",
        "TIPO.ERRO (ERROR.TYPE): está errada porque manipula propriedade errada ou em escopo inválido.",
        "ÉERROS (ISERR): está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q122",
    "text": "Qual é a diferença entre as funções ÉERRO e ÉERROS no Excel?",
    "options": [
      "ÉERRO retorna VERDADEIRO para todos os tipos de erro incluindo #N/D; ÉERROS retorna VERDADEIRO para todos os erros exceto #N/D",
      "ÉERRO funciona apenas com erros de fórmula; ÉERROS funciona com erros de referência também",
      "Ambas funcionam da mesma forma mas ÉERROS é mais recente e substitui ÉERRO",
      "ÉERROS retorna VERDADEIRO para todos os erros incluindo #N/D; ÉERRO exclui #N/D"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções de Informação (Nível intermediario).",
      "papoReto": "'ÉERRO retorna VERDADEIRO para todos os tipos de erro incluindo #N/D; ÉERROS retorna VERDADEIRO para todos os erros exceto #N/D' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "ÉERRO funciona apenas com erros de fórmula; ÉERROS funciona com erros de referência também: está errada porque ativa contexto/estrutura XML diferente.",
        "Ambas funcionam da mesma forma mas ÉERROS é mais recente e substitui ÉERRO: está errada porque manipula propriedade errada ou em escopo inválido.",
        "ÉERROS retorna VERDADEIRO para todos os erros incluindo #N/D; ÉERRO exclui #N/D: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q123",
    "text": "Um usuário precisa criar uma referência dinâmica a uma célula cujo endereço é construído a partir de valores em outras células como linha e coluna variáveis. Qual função permite criar essa referência dinâmica?",
    "options": [
      "DESLOC (OFFSET)",
      "INDIRETO (INDIRECT)",
      "ÍNDICE (INDEX)",
      "ENDEREÇO (ADDRESS)"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções de Referência (Nível intermediario).",
      "papoReto": "'INDIRETO (INDIRECT)' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "DESLOC (OFFSET): está errada porque ativa contexto/estrutura XML diferente.",
        "ÍNDICE (INDEX): está errada porque manipula propriedade errada ou em escopo inválido.",
        "ENDEREÇO (ADDRESS): está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q124",
    "text": "Um usuário precisa criar um intervalo dinâmico que se expanda automaticamente conforme novos dados são adicionados para usar como fonte de um gráfico. Qual função cria esse intervalo dinâmico?",
    "options": [
      "ÍNDICE com CORRESP para localizar o último valor preenchido",
      "INDIRETO com referência a uma célula que contém o endereço do intervalo",
      "Ambas A e B são abordagens válidas",
      "DESLOC (OFFSET) combinado com CONT.VALORES para definir o tamanho dinâmico"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções de Referência (Nível intermediario).",
      "papoReto": "'DESLOC (OFFSET) combinado com CONT.VALORES para definir o tamanho dinâmico' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "TIPO = renderização visual. SÉRIE = dados plotados.",
      "cascasDeBanana": [
        "ÍNDICE com CORRESP para localizar o último valor preenchido: está errada porque ativa contexto/estrutura XML diferente.",
        "INDIRETO com referência a uma célula que contém o endereço do intervalo: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Ambas A e B são abordagens válidas: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Gráfico embarcado em worksheet.xml como chartSpace. Copiar duplica estrutura."
    }
  },
  {
    "id": "mo201_q125",
    "text": "Um usuário precisa verificar se uma célula contém um texto específico como \"Aprovado\" independentemente de maiúsculas ou minúsculas. Qual fórmula resolve isso?",
    "options": [
      "=NÃO(ÉERRO(LOCALIZAR(\"Aprovado\";A1)))",
      "=CONT.SE(A1;\"*Aprovado*\")>0",
      "=SE(A1=\"aprovado\";VERDADEIRO;FALSO)",
      "=EXATO(A1;\"Aprovado\")"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções de Texto (Nível intermediario).",
      "papoReto": "'=NÃO(ÉERRO(LOCALIZAR(\"Aprovado\";A1)))' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "SE() testa. E()/OU() combinam lógica. PROCX()/ÍNDICE buscam.",
      "cascasDeBanana": [
        "=CONT.SE(A1;\"*Aprovado*\")>0: está errada porque ativa contexto/estrutura XML diferente.",
        "=SE(A1=\"aprovado\";VERDADEIRO;FALSO): está errada porque manipula propriedade errada ou em escopo inválido.",
        "=EXATO(A1;\"Aprovado\"): está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Fórmulas dinâmicas (array) propagam automático sem Ctrl+Shift+Enter."
    }
  },
  {
    "id": "mo201_q126",
    "text": "Um usuário recebeu uma planilha com CPFs formatados de formas inconsistentes como \"123.456.789-09\", \"12345678909\" e \"123 456 789 09\". Qual fórmula remove todos os caracteres não numéricos para padronizar?",
    "options": [
      "Fórmula aninhada com múltiplos SUBSTITUIR removendo ponto vírgula hífen e espaço",
      "=LIMPAR(ARRUMAR(A1))",
      "=TEXTO(A1;\"00000000000\")",
      "=EXATO com normalização automática de caracteres especiais"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções de Texto (Nível intermediario).",
      "papoReto": "'Fórmula aninhada com múltiplos SUBSTITUIR removendo ponto vírgula hífen e espaço' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "SE() testa. E()/OU() combinam lógica. PROCX()/ÍNDICE buscam.",
      "cascasDeBanana": [
        "=LIMPAR(ARRUMAR(A1)): está errada porque ativa contexto/estrutura XML diferente.",
        "=TEXTO(A1;\"00000000000\"): está errada porque manipula propriedade errada ou em escopo inválido.",
        "=EXATO com normalização automática de caracteres especiais: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Fórmulas dinâmicas (array) propagam automático sem Ctrl+Shift+Enter."
    }
  },
  {
    "id": "mo201_q127",
    "text": "Um usuário precisa criar uma macro VBA que crie automaticamente uma nova planilha com o nome do mês atual. Qual código VBA realiza isso corretamente?",
    "options": [
      "Sheets.New.Name = MonthName(Month(Now))",
      "Worksheets.Add.Name = Format(Now, \"MMMM YYYY\")",
      "ActiveWorkbook.AddSheet(MonthName(Now))",
      "Worksheets.Insert.Name = Format(Date, \"MM-YYYY\")"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Gerenciar Pastas de Trabalho",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gerenciar Pastas de Trabalho, subtema Macros VBA (Nível intermediario).",
      "papoReto": "'Worksheets.Add.Name = Format(Now, \"MMMM YYYY\")' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Sheets.New.Name = MonthName(Month(Now)): está errada porque ativa contexto/estrutura XML diferente.",
        "ActiveWorkbook.AddSheet(MonthName(Now)): está errada porque manipula propriedade errada ou em escopo inválido.",
        "Worksheets.Insert.Name = Format(Date, \"MM-YYYY\"): está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q128",
    "text": "Um usuário criou uma macro VBA que exporta cada planilha da pasta de trabalho como um arquivo PDF separado. Qual método VBA é usado para exportar uma planilha como PDF?",
    "options": [
      "Worksheet.ExportAsFixedFormat Type:=xlTypePDF, Filename:=\"caminho\\arquivo.pdf\"",
      "Worksheet.SaveAs \"arquivo.pdf\", FileFormat:=xlPDF",
      "Worksheet.PrintOut ActivePrinter:=\"PDF\", OutputFile:=\"arquivo.pdf\"",
      "Application.ExportSheet ActiveSheet, \"PDF\", \"caminho\""
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Gerenciar Pastas de Trabalho",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gerenciar Pastas de Trabalho, subtema Macros VBA (Nível avancado).",
      "papoReto": "'Worksheet.ExportAsFixedFormat Type:=xlTypePDF, Filename:=\"caminho\\arquivo.pdf\"' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Worksheet.SaveAs \"arquivo.pdf\", FileFormat:=xlPDF: está errada porque ativa contexto/estrutura XML diferente.",
        "Worksheet.PrintOut ActivePrinter:=\"PDF\", OutputFile:=\"arquivo.pdf\": está errada porque manipula propriedade errada ou em escopo inválido.",
        "Application.ExportSheet ActiveSheet, \"PDF\", \"caminho\": está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q129",
    "text": "Quais são as vantagens de converter um intervalo de dados em uma Tabela do Excel usando Ctrl+T?",
    "options": [
      "Apenas formatação automática e filtragem sem benefícios funcionais adicionais",
      "Compressão automática dos dados para reduzir o tamanho do arquivo",
      "Proteção automática dos dados contra edição acidental",
      "Expansão automática ao adicionar dados, referências estruturadas em fórmulas, filtragem automática, formatação automática e integração com Power Query e Tabelas Dinâmicas"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Tabelas do Excel (Nível intermediario).",
      "papoReto": "'Expansão automática ao adicionar dados, referências estruturadas em fórmulas, filtragem automática, formatação automática e integração com Power Query e Tabelas Dinâmicas' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Apenas formatação automática e filtragem sem benefícios funcionais adicionais: está errada porque ativa contexto/estrutura XML diferente.",
        "Compressão automática dos dados para reduzir o tamanho do arquivo: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Proteção automática dos dados contra edição acidental: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q130",
    "text": "Um usuário criou uma Tabela do Excel e deseja referenciar a coluna \"Vendas\" em uma fórmula fora da tabela. Qual é a sintaxe de referência estruturada correta?",
    "options": [
      "=SOMA([Tabela1]!Vendas)",
      "=SOMA(Tabela1->Vendas)",
      "=SOMA(Tabela1.Vendas)",
      "=SOMA(Tabela1[Vendas])"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Tabelas do Excel (Nível avancado).",
      "papoReto": "'=SOMA(Tabela1[Vendas])' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "SE() testa. E()/OU() combinam lógica. PROCX()/ÍNDICE buscam.",
      "cascasDeBanana": [
        "=SOMA([Tabela1]!Vendas): está errada porque ativa contexto/estrutura XML diferente.",
        "=SOMA(Tabela1->Vendas): está errada porque manipula propriedade errada ou em escopo inválido.",
        "=SOMA(Tabela1.Vendas): está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Fórmulas dinâmicas (array) propagam automático sem Ctrl+Shift+Enter."
    }
  },
  {
    "id": "mo201_q131",
    "text": "Um usuário precisa referenciar apenas a linha atual de uma coluna dentro de uma fórmula na mesma Tabela do Excel. Qual é a sintaxe de referência estruturada para a linha atual?",
    "options": [
      "[#Esta Linha] seguido do nome da coluna",
      "Não é possível referenciar apenas a linha atual com referências estruturadas",
      "[NomeColuna][#Linha Atual]",
      "[@NomeColuna] usando o especificador @ para indicar a linha atual"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Tabelas do Excel (Nível avancado).",
      "papoReto": "'[@NomeColuna] usando o especificador @ para indicar a linha atual' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "SE() testa. E()/OU() combinam lógica. PROCX()/ÍNDICE buscam.",
      "cascasDeBanana": [
        "[#Esta Linha] seguido do nome da coluna: está errada porque ativa contexto/estrutura XML diferente.",
        "Não é possível referenciar apenas a linha atual com referências estruturadas: está errada porque manipula propriedade errada ou em escopo inválido.",
        "[NomeColuna][#Linha Atual]: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Fórmulas dinâmicas (array) propagam automático sem Ctrl+Shift+Enter."
    }
  },
  {
    "id": "mo201_q132",
    "text": "Um usuário precisa criar uma consulta Power Query que chame uma função personalizada para cada linha de uma tabela aplicando uma transformação complexa. Qual recurso do Power Query permite invocar uma função em cada linha?",
    "options": [
      "Página Inicial → Transformar Dados → Invocar Função por Linha",
      "Adicionar Coluna → Coluna Personalizada → chamar a função com sintaxe M",
      "Adicionar Coluna → Invocar Função Personalizada → selecionar a função e mapear os parâmetros",
      "Transformar → Aplicar Função → selecionar a função e o intervalo"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Power Query",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Power Query, subtema Funções Avançadas (Nível avancado).",
      "papoReto": "'Adicionar Coluna → Invocar Função Personalizada → selecionar a função e mapear os parâmetros' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Página Inicial → Transformar Dados → Invocar Função por Linha: está errada porque ativa contexto/estrutura XML diferente.",
        "Adicionar Coluna → Coluna Personalizada → chamar a função com sintaxe M: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Transformar → Aplicar Função → selecionar a função e o intervalo: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q133",
    "text": "Um usuário criou várias consultas Power Query e deseja organizar as consultas de suporte em grupos separados das consultas finais. Qual recurso do Power Query permite organizar as consultas em grupos?",
    "options": [
      "Dados → Consultas e Conexões → Agrupar Consultas → Novo Grupo",
      "Não é possível agrupar consultas no Power Query do Excel",
      "Clicar com o botão direito na consulta → Mover para Grupo → criar novo grupo",
      "Power Query Editor → Exibir → Organizar Consultas em Grupos"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Power Query",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Power Query, subtema Funções Avançadas (Nível avancado).",
      "papoReto": "'Clicar com o botão direito na consulta → Mover para Grupo → criar novo grupo' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Dados → Consultas e Conexões → Agrupar Consultas → Novo Grupo: está errada porque ativa contexto/estrutura XML diferente.",
        "Não é possível agrupar consultas no Power Query do Excel: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Power Query Editor → Exibir → Organizar Consultas em Grupos: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q134",
    "text": "Um usuário deseja calcular o coeficiente de correlação entre duas variáveis para verificar se existe relação linear entre elas. Qual função do Excel deve usar?",
    "options": [
      "COVARIÂNCIA.P",
      "TENDÊNCIA (TREND)",
      "CORREL",
      "DESVPAD"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Análise Estatística (Nível avancado).",
      "papoReto": "'CORREL' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "COVARIÂNCIA.P: está errada porque ativa contexto/estrutura XML diferente.",
        "TENDÊNCIA (TREND): está errada porque manipula propriedade errada ou em escopo inválido.",
        "DESVPAD: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q135",
    "text": "Um usuário precisa calcular a linha de regressão linear entre duas variáveis e obter o coeficiente angular e o intercepto. Quais funções do Excel fornecem esses valores?",
    "options": [
      "TENDÊNCIA (TREND) para ambos os valores simultaneamente",
      "PROJ.LIN (LINEST) retorna ambos os valores em uma fórmula matricial",
      "CORREL para o coeficiente e MÉDIA para o intercepto",
      "INCLINAÇÃO (SLOPE) para o coeficiente angular e INTERSEÇÃO (INTERCEPT) para o intercepto"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Análise Estatística (Nível avancado).",
      "papoReto": "'INCLINAÇÃO (SLOPE) para o coeficiente angular e INTERSEÇÃO (INTERCEPT) para o intercepto' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "TENDÊNCIA (TREND) para ambos os valores simultaneamente: está errada porque ativa contexto/estrutura XML diferente.",
        "PROJ.LIN (LINEST) retorna ambos os valores em uma fórmula matricial: está errada porque manipula propriedade errada ou em escopo inválido.",
        "CORREL para o coeficiente e MÉDIA para o intercepto: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q136",
    "text": "Um usuário precisa identificar todas as células de uma planilha que contêm fórmulas para auditoria. Qual é a forma mais eficiente?",
    "options": [
      "Fórmulas → Mostrar Fórmulas → identificar visualmente as células",
      "Página Inicial → Localizar e Selecionar → Fórmulas → seleciona todas as células com fórmulas",
      "Ctrl+` para mostrar todas as fórmulas e usar Localizar para identificá-las",
      "Usar macro VBA para iterar pelas células e verificar a propriedade HasFormula"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Gerenciar Pastas de Trabalho",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gerenciar Pastas de Trabalho, subtema Auditoria Avançada (Nível avancado).",
      "papoReto": "'Página Inicial → Localizar e Selecionar → Fórmulas → seleciona todas as células com fórmulas' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "SE() testa. E()/OU() combinam lógica. PROCX()/ÍNDICE buscam.",
      "cascasDeBanana": [
        "Fórmulas → Mostrar Fórmulas → identificar visualmente as células: está errada porque ativa contexto/estrutura XML diferente.",
        "Ctrl+` para mostrar todas as fórmulas e usar Localizar para identificá-las: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Usar macro VBA para iterar pelas células e verificar a propriedade HasFormula: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Fórmulas dinâmicas (array) propagam automático sem Ctrl+Shift+Enter."
    }
  },
  {
    "id": "mo201_q137",
    "text": "Um usuário encontrou referências circulares em uma pasta de trabalho complexa. Qual ferramenta ajuda a localizar todas as referências circulares existentes?",
    "options": [
      "Fórmulas → Verificar Erros → Referências Circulares → exibe a lista de células com referências circulares",
      "Fórmulas → Rastrear Precedentes em todas as células",
      "Arquivo → Informações → Verificar Problemas → Referências Circulares",
      "Dados → Ferramentas de Dados → Detectar Referências Circulares"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Gerenciar Pastas de Trabalho",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gerenciar Pastas de Trabalho, subtema Auditoria Avançada (Nível avancado).",
      "papoReto": "'Fórmulas → Verificar Erros → Referências Circulares → exibe a lista de células com referências circulares' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Fórmulas → Rastrear Precedentes em todas as células: está errada porque ativa contexto/estrutura XML diferente.",
        "Arquivo → Informações → Verificar Problemas → Referências Circulares: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Dados → Ferramentas de Dados → Detectar Referências Circulares: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q138",
    "text": "Qual função do Excel calcula a soma de valores em um campo de uma lista ou banco de dados que satisfazem condições especificadas em um intervalo de critérios separado?",
    "options": [
      "SOMASES (SUMIFS)",
      "SOMARPRODUTO (SUMPRODUCT)",
      "BDSOMA (DSUM)",
      "SOMASE (SUMIF)"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções de Banco de Dados (Nível avancado).",
      "papoReto": "'BDSOMA (DSUM)' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "SOMASES (SUMIFS): está errada porque ativa contexto/estrutura XML diferente.",
        "SOMARPRODUTO (SUMPRODUCT): está errada porque manipula propriedade errada ou em escopo inválido.",
        "SOMASE (SUMIF): está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q139",
    "text": "Qual é a principal vantagem das funções de banco de dados como BDSOMA e BDCONTAR em relação às funções SOMASES e CONT.SES?",
    "options": [
      "Não há vantagem real; SOMASES e CONT.SES substituem completamente as funções de banco de dados",
      "As funções de banco de dados são mais rápidas para grandes volumes de dados",
      "As funções de banco de dados usam um intervalo de critérios em células separadas permitindo critérios mais complexos com fórmulas e wildcards sem alterar a fórmula principal",
      "As funções de banco de dados suportam mais de 127 critérios enquanto SOMASES é limitado"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções de Banco de Dados (Nível avancado).",
      "papoReto": "'As funções de banco de dados usam um intervalo de critérios em células separadas permitindo critérios mais complexos com fórmulas e wildcards sem alterar a fórmula principal' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Não há vantagem real; SOMASES e CONT.SES substituem completamente as funções de banco de dados: está errada porque ativa contexto/estrutura XML diferente.",
        "As funções de banco de dados são mais rápidas para grandes volumes de dados: está errada porque manipula propriedade errada ou em escopo inválido.",
        "As funções de banco de dados suportam mais de 127 critérios enquanto SOMASES é limitado: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q140",
    "text": "O que é o Power Pivot no Excel e qual é sua principal diferença em relação às Tabelas Dinâmicas convencionais?",
    "options": [
      "Um suplemento que permite analisar milhões de linhas de dados de múltiplas fontes usando o Modelo de Dados interno e a linguagem DAX para cálculos avançados",
      "Uma ferramenta de visualização de dados similar ao Power BI integrada ao Excel",
      "Um recurso para criar Tabelas Dinâmicas a partir de dados do SharePoint",
      "Uma versão aprimorada das Tabelas Dinâmicas com mais opções de formatação"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Power Pivot (Nível avancado).",
      "papoReto": "'Um suplemento que permite analisar milhões de linhas de dados de múltiplas fontes usando o Modelo de Dados interno e a linguagem DAX para cálculos avançados' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Uma ferramenta de visualização de dados similar ao Power BI integrada ao Excel: está errada porque ativa contexto/estrutura XML diferente.",
        "Um recurso para criar Tabelas Dinâmicas a partir de dados do SharePoint: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Uma versão aprimorada das Tabelas Dinâmicas com mais opções de formatação: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q141",
    "text": "Um usuário criou um relacionamento entre duas tabelas no Power Pivot. Qual tipo de relacionamento é suportado nativamente pelo Modelo de Dados do Excel?",
    "options": [
      "Relacionamento Muitos para Muitos (N:N) direto entre duas tabelas",
      "Todos os tipos de relacionamento incluindo N:N são suportados nativamente",
      "Relacionamento Um para Um (1:1) exclusivo para tabelas de referência",
      "Relacionamento Um para Muitos (1:N) onde a tabela de dimensão tem valores únicos na coluna chave"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Power Pivot (Nível avancado).",
      "papoReto": "'Relacionamento Um para Muitos (1:N) onde a tabela de dimensão tem valores únicos na coluna chave' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Relacionamento Muitos para Muitos (N:N) direto entre duas tabelas: está errada porque ativa contexto/estrutura XML diferente.",
        "Todos os tipos de relacionamento incluindo N:N são suportados nativamente: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Relacionamento Um para Um (1:1) exclusivo para tabelas de referência: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q142",
    "text": "Um usuário precisa classificar uma tabela por múltiplas colunas usando funções de array dinâmico. Qual função do Excel 365 permite classificar por múltiplos critérios?",
    "options": [
      "CLASSIFICAR (SORT) com argumento de múltiplas colunas",
      "CLASSIFICARPOR (SORTBY) com pares de array-ordem para cada critério de classificação",
      "Não é possível classificar por múltiplos critérios com funções de array dinâmico",
      "ÚNICO (UNIQUE) combinado com CLASSIFICAR"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções de Array Dinâmico (Nível avancado).",
      "papoReto": "'CLASSIFICARPOR (SORTBY) com pares de array-ordem para cada critério de classificação' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "CLASSIFICAR (SORT) com argumento de múltiplas colunas: está errada porque ativa contexto/estrutura XML diferente.",
        "Não é possível classificar por múltiplos critérios com funções de array dinâmico: está errada porque manipula propriedade errada ou em escopo inválido.",
        "ÚNICO (UNIQUE) combinado com CLASSIFICAR: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q143",
    "text": "Um usuário precisa criar uma fórmula que retorne os 5 maiores valores de uma coluna em células consecutivas sem repetir valores. Qual combinação de funções do Excel 365 resolve isso?",
    "options": [
      "=CLASSIFICAR(ÚNICO(intervalo);1;-1) com ÍNDICE para limitar aos 5 primeiros ou =PRIMEIROS.N.MAIORES",
      "=ÍNDICE(CLASSIFICAR(ÚNICO(intervalo);1;-1);SEQUÊNCIA(5))",
      "Ambas B e C são abordagens válidas",
      "=MAIOR(intervalo;SEQUÊNCIA(5))"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções de Array Dinâmico (Nível avancado).",
      "papoReto": "'=CLASSIFICAR(ÚNICO(intervalo);1;-1) com ÍNDICE para limitar aos 5 primeiros ou =PRIMEIROS.N.MAIORES' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "SE() testa. E()/OU() combinam lógica. PROCX()/ÍNDICE buscam.",
      "cascasDeBanana": [
        "=ÍNDICE(CLASSIFICAR(ÚNICO(intervalo);1;-1);SEQUÊNCIA(5)): está errada porque ativa contexto/estrutura XML diferente.",
        "Ambas B e C são abordagens válidas: está errada porque manipula propriedade errada ou em escopo inválido.",
        "=MAIOR(intervalo;SEQUÊNCIA(5)): está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Fórmulas dinâmicas (array) propagam automático sem Ctrl+Shift+Enter."
    }
  },
  {
    "id": "mo201_q144",
    "text": "Uma pasta de trabalho Excel com muitas fórmulas complexas está muito lenta para calcular. Qual configuração pode melhorar o desempenho sem alterar as fórmulas?",
    "options": [
      "Arquivo → Opções → Avançado → desativar aceleração gráfica de hardware",
      "Fórmulas → Opções de Cálculo → Manual → calcular manualmente com F9 quando necessário",
      "Reduzir o número de planilhas na pasta de trabalho",
      "Salvar no formato .xlsb que calcula mais rapidamente que .xlsx"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Gerenciar Pastas de Trabalho",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gerenciar Pastas de Trabalho, subtema Performance (Nível avancado).",
      "papoReto": "'Fórmulas → Opções de Cálculo → Manual → calcular manualmente com F9 quando necessário' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "SE() testa. E()/OU() combinam lógica. PROCX()/ÍNDICE buscam.",
      "cascasDeBanana": [
        "Arquivo → Opções → Avançado → desativar aceleração gráfica de hardware: está errada porque ativa contexto/estrutura XML diferente.",
        "Reduzir o número de planilhas na pasta de trabalho: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Salvar no formato .xlsb que calcula mais rapidamente que .xlsx: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Fórmulas dinâmicas (array) propagam automático sem Ctrl+Shift+Enter."
    }
  },
  {
    "id": "mo201_q145",
    "text": "Um usuário identificou que o uso excessivo da função INDIRETO está causando lentidão na pasta de trabalho. Por que essa função impacta o desempenho?",
    "options": [
      "INDIRETO consome mais memória RAM que outras funções de referência",
      "INDIRETO é uma função volátil que recalcula sempre que qualquer célula da planilha muda independentemente de suas dependências",
      "INDIRETO requer acesso ao disco em cada cálculo tornando-o mais lento",
      "INDIRETO bloqueia o cache de cálculo do Excel impedindo otimizações"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Gerenciar Pastas de Trabalho",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gerenciar Pastas de Trabalho, subtema Performance (Nível avancado).",
      "papoReto": "'INDIRETO é uma função volátil que recalcula sempre que qualquer célula da planilha muda independentemente de suas dependências' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "INDIRETO consome mais memória RAM que outras funções de referência: está errada porque ativa contexto/estrutura XML diferente.",
        "INDIRETO requer acesso ao disco em cada cálculo tornando-o mais lento: está errada porque manipula propriedade errada ou em escopo inválido.",
        "INDIRETO bloqueia o cache de cálculo do Excel impedindo otimizações: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q146",
    "text": "Um usuário deseja aplicar Barras de Dados em uma coluna mas quer que barras negativas apareçam em vermelho apontando para a esquerda e barras positivas em azul apontando para a direita. Como deve configurar?",
    "options": [
      "Formatação Condicional → Barras de Dados → Mais Regras → configurar eixo e cores de barras negativas e positivas separadamente",
      "Não é possível ter cores diferentes para barras positivas e negativas",
      "Formatação Condicional → Nova Regra → Barra de Dados Direcional → configurar cores",
      "Criar duas regras de Formatação Condicional separadas uma para positivos e outra para negativos"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Formatação Condicional Avançada (Nível avancado).",
      "papoReto": "'Formatação Condicional → Barras de Dados → Mais Regras → configurar eixo e cores de barras negativas e positivas separadamente' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Não é possível ter cores diferentes para barras positivas e negativas: está errada porque ativa contexto/estrutura XML diferente.",
        "Formatação Condicional → Nova Regra → Barra de Dados Direcional → configurar cores: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Criar duas regras de Formatação Condicional separadas uma para positivos e outra para negativos: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q147",
    "text": "Um usuário tem uma consulta Power Query que falha quando a fonte de dados está indisponível interrompendo toda a atualização. Qual recurso do Power Query permite tratar esse erro e continuar com dados em cache?",
    "options": [
      "Power Query → Opções → Tratamento de Erros → Usar Cache em Caso de Falha",
      "Configurar Dados → Propriedades da Consulta → Continuar em Caso de Erro",
      "Não é possível tratar erros de fonte de dados no Power Query; requer macro VBA",
      "Usar try-otherwise em linguagem M no Editor Avançado para capturar o erro e retornar um valor padrão"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Power Query",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Power Query, subtema Tratamento de Erros (Nível avancado).",
      "papoReto": "Usar try-otherwise em linguagem M no Editor Avançado para capturar o erro e retornar um valor padrão é a resposta correta.",
      "puloDoGato": "Opções alternativas parecem funcionais mas omitem configuração obrigatória",
      "cascasDeBanana": [
        "Configurar Dados → Propriedades da Consulta → Continuar em Caso de Erro: Incorreto, pois não é a opção correta para resolver o problema apresentado ou não existe com essa finalidade.",
        "Power Query → Opções → Tratamento de Erros → Usar Cache em Caso de Falha: Incorreto, pois não é a opção correta para resolver o problema apresentado ou não existe com essa finalidade.",
        "Não é possível tratar erros de fonte de dados no Power Query; requer macro VBA: Incorreto, pois não é a opção correta para resolver o problema apresentado ou não existe com essa finalidade."
      ],
      "dicaOuro": "Memorize o caminho de menu exato; testes cobrem UI navigation, não lógica interna"
    }
  },
  {
    "id": "mo201_q148",
    "text": "Um usuário precisa extrair o domínio de uma lista de endereços de e-mail como \"usuario@empresa.com\" retornando apenas \"empresa.com\". Qual fórmula resolve isso?",
    "options": [
      "=DIREITA(A1;NÚM.CARACT(A1)-LOCALIZAR(\"@\";A1))",
      "=EXT.TEXTO(A1;LOCALIZAR(\"@\";A1)+1;NÚM.CARACT(A1)-LOCALIZAR(\"@\";A1))",
      "Ambas A e C estão corretas e produzem o mesmo resultado",
      "=SUBSTITUIR(A1;ESQUERDA(A1;LOCALIZAR(\"@\";A1));\"\")"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções de Texto (Nível avancado).",
      "papoReto": "'=EXT.TEXTO(A1;LOCALIZAR(\"@\";A1)+1;NÚM.CARACT(A1)-LOCALIZAR(\"@\";A1))' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "SE() testa. E()/OU() combinam lógica. PROCX()/ÍNDICE buscam.",
      "cascasDeBanana": [
        "=DIREITA(A1;NÚM.CARACT(A1)-LOCALIZAR(\"@\";A1)): está errada porque ativa contexto/estrutura XML diferente.",
        "Ambas A e C estão corretas e produzem o mesmo resultado: está errada porque manipula propriedade errada ou em escopo inválido.",
        "=SUBSTITUIR(A1;ESQUERDA(A1;LOCALIZAR(\"@\";A1));\"\"): está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Fórmulas dinâmicas (array) propagam automático sem Ctrl+Shift+Enter."
    }
  },
  {
    "id": "mo201_q149",
    "text": "Um usuário deseja criar uma validação de dados que impeça a entrada de valores duplicados em uma coluna exibindo uma mensagem de erro personalizada. Qual fórmula deve usar na validação personalizada?",
    "options": [
      "=CONT.SE($A$1:$A$100;A1)=1 usando Validação de Dados → Personalizado",
      "=ÚNICO(A1) como critério de validação",
      "=NÃO(ÉERRO(CORRESP(A1;$A$1:$A$100;0)))",
      "=SOMASE($A$1:$A$100;A1;$A$1:$A$100)=A1"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Validação de Dados (Nível avancado).",
      "papoReto": "'=CONT.SE($A$1:$A$100;A1)=1 usando Validação de Dados → Personalizado' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "SE() testa. E()/OU() combinam lógica. PROCX()/ÍNDICE buscam.",
      "cascasDeBanana": [
        "=ÚNICO(A1) como critério de validação: está errada porque ativa contexto/estrutura XML diferente.",
        "=NÃO(ÉERRO(CORRESP(A1;$A$1:$A$100;0))): está errada porque manipula propriedade errada ou em escopo inválido.",
        "=SOMASE($A$1:$A$100;A1;$A$1:$A$100)=A1: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Fórmulas dinâmicas (array) propagam automático sem Ctrl+Shift+Enter."
    }
  },
  {
    "id": "mo201_q150",
    "text": "Um usuário criou uma pasta de trabalho usando funções exclusivas do Excel 365 como FILTRO, ÚNICO e SEQUÊNCIA e precisa compartilhá-la com usuários que têm Excel 2019. Qual é a melhor abordagem?",
    "options": [
      "Usar o Verificador de Compatibilidade e substituir cada função por alternativas compatíveis com Excel 2019",
      "Compartilhar normalmente pois o Excel 2019 converte automaticamente as funções não suportadas",
      "Salvar no formato .xls para garantir compatibilidade total",
      "Converter as fórmulas de array dinâmico em valores estáticos para as células de resultado e documentar as fórmulas originais em comentários antes de compartilhar"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Gerenciar Pastas de Trabalho",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gerenciar Pastas de Trabalho, subtema Compatibilidade (Nível avancado).",
      "papoReto": "'Converter as fórmulas de array dinâmico em valores estáticos para as células de resultado e documentar as fórmulas originais em comentários antes de compartilhar' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Usar o Verificador de Compatibilidade e substituir cada função por alternativas compatíveis com Excel 2019: está errada porque ativa contexto/estrutura XML diferente.",
        "Compartilhar normalmente pois o Excel 2019 converte automaticamente as funções não suportadas: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Salvar no formato .xls para garantir compatibilidade total: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q151",
    "text": "Um usuário deseja que o Excel sempre abra uma pasta de trabalho específica automaticamente ao iniciar. Qual é a abordagem correta?",
    "options": [
      "Arquivo → Opções → Geral → Pasta de Trabalho Padrão → definir o arquivo",
      "Criar um atalho do arquivo na área de trabalho e configurar como inicialização automática do Windows",
      "Usar macro AutoExec no Personal.xlsb para abrir o arquivo automaticamente",
      "Salvar o arquivo na pasta XLStart do Excel ou definir uma pasta alternativa de inicialização em Arquivo → Opções → Avançado → Geral → Na inicialização abrir todos os arquivos em"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Gerenciar Pastas de Trabalho",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gerenciar Pastas de Trabalho, subtema Configurações Avançadas (Nível intermediario).",
      "papoReto": "'Salvar o arquivo na pasta XLStart do Excel ou definir uma pasta alternativa de inicialização em Arquivo → Opções → Avançado → Geral → Na inicialização abrir todos os arquivos em' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Arquivo → Opções → Geral → Pasta de Trabalho Padrão → definir o arquivo: está errada porque ativa contexto/estrutura XML diferente.",
        "Criar um atalho do arquivo na área de trabalho e configurar como inicialização automática do Windows: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Usar macro AutoExec no Personal.xlsb para abrir o arquivo automaticamente: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q152",
    "text": "O que é o arquivo Personal.xlsb no Excel e para que serve?",
    "options": [
      "Um modelo de pasta de trabalho padrão aplicado a todos os novos arquivos criados",
      "Um arquivo de backup automático criado pelo Excel para recuperação de dados",
      "Um arquivo de configurações pessoais do usuário para personalização da interface",
      "Uma pasta de trabalho oculta que abre automaticamente com o Excel e armazena macros globais disponíveis em qualquer pasta de trabalho"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Gerenciar Pastas de Trabalho",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gerenciar Pastas de Trabalho, subtema Personal.xlsb (Nível avancado).",
      "papoReto": "'Uma pasta de trabalho oculta que abre automaticamente com o Excel e armazena macros globais disponíveis em qualquer pasta de trabalho' é formato que suporta estrutura interna necessária. Arquivo ZIP (.xlsx/.xlsm com XML+VBA) ou binário (.xlsb) determina compatibilidade com recursos.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Um modelo de pasta de trabalho padrão aplicado a todos os novos arquivos criados: está errada porque ativa contexto/estrutura XML diferente.",
        "Um arquivo de backup automático criado pelo Excel para recuperação de dados: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Um arquivo de configurações pessoais do usuário para personalização da interface: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q153",
    "text": "O que são as funções de Cubo no Excel e em que contexto são utilizadas?",
    "options": [
      "Funções matemáticas para cálculo de volumes e geometria tridimensional",
      "Funções exclusivas do Power BI integradas ao Excel via suplemento",
      "Funções de banco de dados para consulta de cubos de dados no SQL Server",
      "Funções que recuperam dados de modelos OLAP ou do Modelo de Dados do Power Pivot como VALORCUBO e MEMBROCUBO permitindo análises multidimensionais fora de Tabelas Dinâmicas"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções de Cubo (Nível avancado).",
      "papoReto": "'Funções que recuperam dados de modelos OLAP ou do Modelo de Dados do Power Pivot como VALORCUBO e MEMBROCUBO permitindo análises multidimensionais fora de Tabelas Dinâmicas' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Funções matemáticas para cálculo de volumes e geometria tridimensional: está errada porque ativa contexto/estrutura XML diferente.",
        "Funções exclusivas do Power BI integradas ao Excel via suplemento: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Funções de banco de dados para consulta de cubos de dados no SQL Server: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q154",
    "text": "O que é o Flash Fill no Excel e como é acionado?",
    "options": [
      "Um atalho para preencher células com a mesma fórmula da célula acima",
      "Uma forma de copiar formatação rapidamente entre células não adjacentes",
      "Um recurso de autocompletar que sugere valores com base no histórico de entradas",
      "Um recurso que detecta padrões na entrada de dados e preenche automaticamente as células restantes podendo ser acionado com Ctrl+E ou Dados → Preenchimento Relâmpago"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Flash Fill (Nível intermediario).",
      "papoReto": "'Um recurso que detecta padrões na entrada de dados e preenche automaticamente as células restantes podendo ser acionado com Ctrl+E ou Dados → Preenchimento Relâmpago' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Um atalho para preencher células com a mesma fórmula da célula acima: está errada porque ativa contexto/estrutura XML diferente.",
        "Uma forma de copiar formatação rapidamente entre células não adjacentes: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Um recurso de autocompletar que sugere valores com base no histórico de entradas: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q155",
    "text": "Um usuário tem uma coluna com nomes completos como \"Silva, João Carlos\" e quer extrair apenas o sobrenome antes da vírgula usando Flash Fill. Qual é o procedimento correto?",
    "options": [
      "Usar Power Query para dividir a coluna pelo delimitador vírgula",
      "Usar Dados → Texto para Colunas com vírgula como delimitador",
      "Usar a fórmula =ESQUERDA(A1;LOCALIZAR(\",\";A1)-1)",
      "Digitar manualmente o resultado desejado na primeira célula da coluna adjacente e pressionar Ctrl+E para que o Flash Fill complete as demais"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Flash Fill (Nível intermediario).",
      "papoReto": "'Digitar manualmente o resultado desejado na primeira célula da coluna adjacente e pressionar Ctrl+E para que o Flash Fill complete as demais' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Usar Power Query para dividir a coluna pelo delimitador vírgula: está errada porque ativa contexto/estrutura XML diferente.",
        "Usar Dados → Texto para Colunas com vírgula como delimitador: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Usar a fórmula =ESQUERDA(A1;LOCALIZAR(\",\";A1)-1): está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q156",
    "text": "Qual tipo de gráfico do Excel permite visualizar dados geograficamente em um mapa preenchido por regiões como países estados ou municípios?",
    "options": [
      "Não é possível criar gráficos geográficos nativamente no Excel",
      "Gráfico de Dispersão com coordenadas GPS",
      "Gráfico de Mapa Preenchido (Filled Map Chart)",
      "Gráfico de Bolhas Geográfico"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Gráficos Avançados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gráficos Avançados, subtema Gráficos de Mapa (Nível intermediario).",
      "papoReto": "'Gráfico de Mapa Preenchido (Filled Map Chart)' cria/configura chartSpace em worksheet.xml com série, eixo e elementos visuais. Tipo gráfico (Column/Line/Pie) determina renderização.",
      "puloDoGato": "TIPO = renderização visual. SÉRIE = dados plotados.",
      "cascasDeBanana": [
        "Não é possível criar gráficos geográficos nativamente no Excel: está errada porque ativa contexto/estrutura XML diferente.",
        "Gráfico de Dispersão com coordenadas GPS: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Gráfico de Bolhas Geográfico: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Gráfico embarcado em worksheet.xml como chartSpace. Copiar duplica estrutura."
    }
  },
  {
    "id": "mo201_q157",
    "text": "Um usuário criou um Gráfico de Mapa Preenchido mas algumas regiões aparecem sem cor pois o Excel não reconheceu os nomes geográficos. Qual é a causa mais provável e a solução?",
    "options": [
      "O suplemento de mapas está desativado e precisa ser habilitado nas opções",
      "O gráfico de mapa só funciona com códigos ISO de países não com nomes por extenso",
      "O Excel não suporta nomes de regiões em português; requer tradução manual",
      "Os nomes das regiões estão em formato não reconhecido pelo Bing Maps; a solução é padronizar os nomes em inglês ou no formato oficial reconhecido pelo serviço de mapas"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Gráficos Avançados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gráficos Avançados, subtema Gráficos de Mapa (Nível avancado).",
      "papoReto": "'Os nomes das regiões estão em formato não reconhecido pelo Bing Maps; a solução é padronizar os nomes em inglês ou no formato oficial reconhecido pelo serviço de mapas' cria/configura chartSpace em worksheet.xml com série, eixo e elementos visuais. Tipo gráfico (Column/Line/Pie) determina renderização.",
      "puloDoGato": "TIPO = renderização visual. SÉRIE = dados plotados.",
      "cascasDeBanana": [
        "O suplemento de mapas está desativado e precisa ser habilitado nas opções: está errada porque ativa contexto/estrutura XML diferente.",
        "O gráfico de mapa só funciona com códigos ISO de países não com nomes por extenso: está errada porque manipula propriedade errada ou em escopo inválido.",
        "O Excel não suporta nomes de regiões em português; requer tradução manual: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Gráfico embarcado em worksheet.xml como chartSpace. Copiar duplica estrutura."
    }
  },
  {
    "id": "mo201_q158",
    "text": "O que são os Tipos de Dados Vinculados no Excel 365 como Ações e Geografia?",
    "options": [
      "Conexões Power Query pré-configuradas para fontes de dados financeiras e geográficas",
      "Tipos de dados conectados a fontes online que trazem informações dinâmicas como cotações de ações e dados geográficos diretamente para células do Excel",
      "Formatos de célula especiais que exibem dados em cartões visuais sem conexão externa",
      "Tipos de validação de dados que verificam automaticamente o formato dos dados inseridos"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Tipos de Dados Vinculados (Nível intermediario).",
      "papoReto": "'Tipos de dados conectados a fontes online que trazem informações dinâmicas como cotações de ações e dados geográficos diretamente para células do Excel' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Conexões Power Query pré-configuradas para fontes de dados financeiras e geográficas: está errada porque ativa contexto/estrutura XML diferente.",
        "Formatos de célula especiais que exibem dados em cartões visuais sem conexão externa: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Tipos de validação de dados que verificam automaticamente o formato dos dados inseridos: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q159",
    "text": "Um usuário inseriu o tipo de dado Geografia para uma lista de cidades e deseja extrair a população de cada cidade para uma coluna. Como deve proceder?",
    "options": [
      "Usar Power Query → Expandir Tipo de Dado → selecionar o campo População",
      "Clicar com o botão direito na célula → Extrair Dados → População",
      "Usar PROCX referenciando o tipo de dado geográfico como fonte",
      "Usar a fórmula =A1.População ou clicar no ícone de extração de dados → selecionar o campo desejado"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Tipos de Dados Vinculados (Nível avancado).",
      "papoReto": "'Usar a fórmula =A1.População ou clicar no ícone de extração de dados → selecionar o campo desejado' ativa dataValidation node em worksheet.xml. Restringe entrada a tipo específico (List/Decimal/Date/Custom) que Excel valida em digitação.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Usar Power Query → Expandir Tipo de Dado → selecionar o campo População: está errada porque ativa contexto/estrutura XML diferente.",
        "Clicar com o botão direito na célula → Extrair Dados → População: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Usar PROCX referenciando o tipo de dado geográfico como fonte: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q160",
    "text": "Um usuário precisa instalar o suplemento Solver no Excel que não aparece na guia Dados. Qual é o procedimento correto?",
    "options": [
      "Dados → Obter Dados → Suplementos → Instalar Solver",
      "Arquivo → Opções → Suplementos → Suplementos do Excel → Ir → marcar Solver → OK",
      "Desenvolvedor → Suplementos COM → adicionar Solver",
      "Inserir → Suplementos → Loja de Suplementos → pesquisar Solver"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Gerenciar Pastas de Trabalho",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gerenciar Pastas de Trabalho, subtema Suplementos (Nível intermediario).",
      "papoReto": "'Arquivo → Opções → Suplementos → Suplementos do Excel → Ir → marcar Solver → OK' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Dados → Obter Dados → Suplementos → Instalar Solver: está errada porque ativa contexto/estrutura XML diferente.",
        "Desenvolvedor → Suplementos COM → adicionar Solver: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Inserir → Suplementos → Loja de Suplementos → pesquisar Solver: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q161",
    "text": "Por que o Excel mantém funções de compatibilidade como PROCV, CONCATENAR e INT.CONFIANÇA mesmo tendo versões mais novas como PROCX e UNIRTEXTO?",
    "options": [
      "Para garantir que arquivos criados em versões antigas do Excel continuem funcionando corretamente sem necessidade de atualização das fórmulas",
      "Porque as funções novas têm limitações que as funções antigas não têm",
      "Para oferecer opções alternativas ao usuário sem deprecar funcionalidades",
      "Porque as funções antigas são mais rápidas para cálculo em grandes volumes de dados"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções de Compatibilidade (Nível intermediario).",
      "papoReto": "'Para garantir que arquivos criados em versões antigas do Excel continuem funcionando corretamente sem necessidade de atualização das fórmulas' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Porque as funções novas têm limitações que as funções antigas não têm: está errada porque ativa contexto/estrutura XML diferente.",
        "Para oferecer opções alternativas ao usuário sem deprecar funcionalidades: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Porque as funções antigas são mais rápidas para cálculo em grandes volumes de dados: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q162",
    "text": "Um usuário deseja criar uma regra de Formatação Condicional que destaque automaticamente os 10% superiores de uma lista de valores com fundo verde. Qual opção deve usar?",
    "options": [
      "Ambas A e B produzem o mesmo resultado e são igualmente válidas",
      "Formatação Condicional → Nova Regra → fórmula =A1>=PERCENTIL($A$1:$A$100;0,9)",
      "Formatação Condicional → Escala de Cores → configurar o percentil 90 como verde",
      "Formatação Condicional → Regras de Primeiros e Últimos → 10% Superiores → definir formato verde"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Formatação Condicional Avançada (Nível avancado).",
      "papoReto": "'Formatação Condicional → Regras de Primeiros e Últimos → 10% Superiores → definir formato verde' ativa dataValidation node em worksheet.xml. Restringe entrada a tipo específico (List/Decimal/Date/Custom) que Excel valida em digitação.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Ambas A e B produzem o mesmo resultado e são igualmente válidas: está errada porque ativa contexto/estrutura XML diferente.",
        "Formatação Condicional → Nova Regra → fórmula =A1>=PERCENTIL($A$1:$A$100;0,9): está errada porque manipula propriedade errada ou em escopo inválido.",
        "Formatação Condicional → Escala de Cores → configurar o percentil 90 como verde: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q163",
    "text": "Um usuário está analisando uma Tabela Dinâmica e deseja ver os registros detalhados que compõem um valor agregado específico. O que acontece ao clicar duas vezes em um valor na Tabela Dinâmica?",
    "options": [
      "O Excel cria automaticamente uma nova planilha com os registros detalhados que compõem aquele valor",
      "O Excel navega automaticamente para a fonte de dados e destaca os registros",
      "O Excel exibe um tooltip com os registros detalhados",
      "O Excel abre o filtro da Tabela Dinâmica para aquele valor"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Tabelas Dinâmicas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Tabelas Dinâmicas, subtema Drill Down (Nível intermediario).",
      "papoReto": "'O Excel cria automaticamente uma nova planilha com os registros detalhados que compõem aquele valor' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "O Excel navega automaticamente para a fonte de dados e destaca os registros: está errada porque ativa contexto/estrutura XML diferente.",
        "O Excel exibe um tooltip com os registros detalhados: está errada porque manipula propriedade errada ou em escopo inválido.",
        "O Excel abre o filtro da Tabela Dinâmica para aquele valor: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q164",
    "text": "Um administrador deseja impedir que usuários façam drill down nos dados de uma Tabela Dinâmica para não expor os dados detalhados da fonte. Qual configuração deve aplicar?",
    "options": [
      "Proteger a planilha impedindo cliques duplos nas células",
      "Usar Revisão → Restringir Edição → Sem Drill Down",
      "Clicar com o botão direito na Tabela Dinâmica → Opções da Tabela Dinâmica → Dados → desmarcar \"Habilitar mostrar detalhes\"",
      "Converter a Tabela Dinâmica em valores estáticos antes de compartilhar"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Tabelas Dinâmicas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Tabelas Dinâmicas, subtema Drill Down (Nível avancado).",
      "papoReto": "'Clicar com o botão direito na Tabela Dinâmica → Opções da Tabela Dinâmica → Dados → desmarcar \"Habilitar mostrar detalhes\"' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Proteger a planilha impedindo cliques duplos nas células: está errada porque ativa contexto/estrutura XML diferente.",
        "Usar Revisão → Restringir Edição → Sem Drill Down: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Converter a Tabela Dinâmica em valores estáticos antes de compartilhar: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q165",
    "text": "Um usuário deseja que os dados de uma consulta Power Query sejam atualizados automaticamente a cada 60 minutos enquanto a pasta de trabalho está aberta. Qual configuração permite isso?",
    "options": [
      "Power Query → Opções → Atualização Automática → 60 minutos",
      "Dados → Consultas e Conexões → Propriedades da Consulta → Controle de Atualização → marcar \"Atualizar a cada X minutos\" e definir 60",
      "Não é possível agendar atualização automática por tempo no Excel Desktop; requer Power Automate",
      "Arquivo → Opções → Power Query → Agendamento → Atualizar a cada 60 minutos"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Power Query",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Power Query, subtema Atualização Agendada (Nível avancado).",
      "papoReto": "'Dados → Consultas e Conexões → Propriedades da Consulta → Controle de Atualização → marcar \"Atualizar a cada X minutos\" e definir 60' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Power Query → Opções → Atualização Automática → 60 minutos: está errada porque ativa contexto/estrutura XML diferente.",
        "Não é possível agendar atualização automática por tempo no Excel Desktop; requer Power Automate: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Arquivo → Opções → Power Query → Agendamento → Atualizar a cada 60 minutos: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q166",
    "text": "Um usuário precisa criar uma fórmula que retorne uma tabela completa de resultados combinando todos os valores de duas listas como um produto cartesiano. Qual função do Excel 365 facilita isso?",
    "options": [
      "Usar FILTRO com critério de VERDADEIRO para retornar todas as linhas",
      "Usar ÚNICO aplicado à concatenação das duas listas",
      "Usar PROCX com modo de correspondência de array",
      "Combinar SEQUÊNCIA com ÍNDICE e operações de array para gerar todas as combinações"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções de Array Dinâmico (Nível avancado).",
      "papoReto": "'Combinar SEQUÊNCIA com ÍNDICE e operações de array para gerar todas as combinações' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "SE() testa. E()/OU() combinam lógica. PROCX()/ÍNDICE buscam.",
      "cascasDeBanana": [
        "Usar FILTRO com critério de VERDADEIRO para retornar todas as linhas: está errada porque ativa contexto/estrutura XML diferente.",
        "Usar ÚNICO aplicado à concatenação das duas listas: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Usar PROCX com modo de correspondência de array: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Fórmulas dinâmicas (array) propagam automático sem Ctrl+Shift+Enter."
    }
  },
  {
    "id": "mo201_q167",
    "text": "Um usuário precisa consolidar dados de pastas de trabalho diferentes armazenadas em uma pasta de rede atualizando automaticamente quando novos arquivos são adicionados. Qual é a abordagem mais escalável?",
    "options": [
      "Usar macro VBA para abrir cada arquivo e copiar os dados para a planilha de consolidação",
      "Criar fórmulas 3D referenciando cada pasta de trabalho manualmente",
      "Usar Dados → Consolidar com links para cada arquivo individual",
      "Usar Power Query → Obter Dados → De Arquivo → Da Pasta → apontar para a pasta de rede e configurar atualização automática"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Consolidação Avançada (Nível avancado).",
      "papoReto": "'Usar Power Query → Obter Dados → De Arquivo → Da Pasta → apontar para a pasta de rede e configurar atualização automática' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Usar macro VBA para abrir cada arquivo e copiar os dados para a planilha de consolidação: está errada porque ativa contexto/estrutura XML diferente.",
        "Criar fórmulas 3D referenciando cada pasta de trabalho manualmente: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Usar Dados → Consolidar com links para cada arquivo individual: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q168",
    "text": "Um usuário precisa criar uma macro VBA que envie automaticamente um e-mail com a pasta de trabalho atual como anexo usando o Outlook. Qual objeto VBA do Outlook deve usar?",
    "options": [
      "Usar Shell para abrir o Outlook com parâmetros de linha de comando",
      "Criar um objeto Outlook.Application via CreateObject e usar o método CreateItem(0) para criar o e-mail com anexo via Attachments.Add",
      "Usar Application.SendMail do Excel com o caminho do arquivo como anexo",
      "Usar o método ActiveWorkbook.SendMail com lista de destinatários"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Gerenciar Pastas de Trabalho",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gerenciar Pastas de Trabalho, subtema Macros VBA (Nível avancado).",
      "papoReto": "'Criar um objeto Outlook.Application via CreateObject e usar o método CreateItem(0) para criar o e-mail com anexo via Attachments.Add' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Usar Shell para abrir o Outlook com parâmetros de linha de comando: está errada porque ativa contexto/estrutura XML diferente.",
        "Usar Application.SendMail do Excel com o caminho do arquivo como anexo: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Usar o método ActiveWorkbook.SendMail com lista de destinatários: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q169",
    "text": "Um usuário precisa criar uma linha de totais em uma Tabela do Excel que calcule a média de uma coluna e o máximo de outra simultaneamente. Como deve configurar?",
    "options": [
      "Não é possível ter funções diferentes em colunas diferentes da linha de totais",
      "Inserir manualmente as fórmulas MÉDIA e MÁXIMO na linha abaixo da tabela",
      "Design da Tabela → Linha de Totais → Configurar Funções → selecionar Média e Máximo",
      "Design da Tabela → marcar Linha de Totais → clicar na célula de total de cada coluna e selecionar a função desejada no menu suspenso"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Tabelas do Excel (Nível avancado).",
      "papoReto": "'Design da Tabela → marcar Linha de Totais → clicar na célula de total de cada coluna e selecionar a função desejada no menu suspenso' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Não é possível ter funções diferentes em colunas diferentes da linha de totais: está errada porque ativa contexto/estrutura XML diferente.",
        "Inserir manualmente as fórmulas MÉDIA e MÁXIMO na linha abaixo da tabela: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Design da Tabela → Linha de Totais → Configurar Funções → selecionar Média e Máximo: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q170",
    "text": "Um usuário precisa fazer uma mesclagem Left Outer Join entre duas tabelas no Power Query para manter todos os registros da tabela esquerda mesmo sem correspondência na direita. Qual opção deve selecionar no diálogo de Mesclar Consultas?",
    "options": [
      "Tipo de junção: Interna (somente linhas correspondentes)",
      "Tipo de junção: Externa Esquerda (todos da primeira, correspondentes da segunda)",
      "Tipo de junção: Externa Completa (todos de ambas as tabelas)",
      "Tipo de junção: Anti Esquerda (somente linhas sem correspondência)"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Power Query",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Power Query, subtema Mesclagem Avançada (Nível avancado).",
      "papoReto": "'Tipo de junção: Externa Esquerda (todos da primeira, correspondentes da segunda)' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Tipo de junção: Interna (somente linhas correspondentes): está errada porque ativa contexto/estrutura XML diferente.",
        "Tipo de junção: Externa Completa (todos de ambas as tabelas): está errada porque manipula propriedade errada ou em escopo inválido.",
        "Tipo de junção: Anti Esquerda (somente linhas sem correspondência): está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q171",
    "text": "Um usuário precisa calcular quantos meses completos existem entre duas datas. Qual fórmula é mais adequada?",
    "options": [
      "=MESES(DataInicio;DataFim)",
      "=(ANO(DataFim)-ANO(DataInicio))*12+MÊS(DataFim)-MÊS(DataInicio)",
      "=INT((DataFim-DataInicio)/30)",
      "=DATADIF(DataInicio;DataFim;\"M\")"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções de Data (Nível avancado).",
      "papoReto": "'=DATADIF(DataInicio;DataFim;\"M\")' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "SE() testa. E()/OU() combinam lógica. PROCX()/ÍNDICE buscam.",
      "cascasDeBanana": [
        "=MESES(DataInicio;DataFim): está errada porque ativa contexto/estrutura XML diferente.",
        "=(ANO(DataFim)-ANO(DataInicio))*12+MÊS(DataFim)-MÊS(DataInicio): está errada porque manipula propriedade errada ou em escopo inválido.",
        "=INT((DataFim-DataInicio)/30): está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Fórmulas dinâmicas (array) propagam automático sem Ctrl+Shift+Enter."
    }
  },
  {
    "id": "mo201_q172",
    "text": "Um usuário deseja criar um formato numérico personalizado que exiba números positivos em azul negativos em vermelho entre parênteses e zero como traço. Qual código de formato deve usar?",
    "options": [
      "#.##0;(#.##0);\"-\" sem código de cor",
      "[Azul]#.##0;[Vermelho](#.##0);\"- \"",
      "[Cor5]#.##0;[Cor3]-#.##0;\"- \"",
      "[Azul]+#.##0;[Vermelho]-#.##0;\"0\""
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Formatação Numérica (Nível avancado).",
      "papoReto": "'[Azul]#.##0;[Vermelho](#.##0);\"- \"' é formato que suporta estrutura interna necessária. Arquivo ZIP (.xlsx/.xlsm com XML+VBA) ou binário (.xlsb) determina compatibilidade com recursos.",
      "puloDoGato": ".XLS* extensão determina capacidade. M=Macros. T=Template.",
      "cascasDeBanana": [
        "#.##0;(#.##0);\"-\" sem código de cor: está errada porque ativa contexto/estrutura XML diferente.",
        "[Cor5]#.##0;[Cor3]-#.##0;\"- \": está errada porque manipula propriedade errada ou em escopo inválido.",
        "[Azul]+#.##0;[Vermelho]-#.##0;\"0\": está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Excel 365 detecta extensão arquivo. .xlsx ignora vbaProject.bin; .xlsm carrega."
    }
  },
  {
    "id": "mo201_q173",
    "text": "Um usuário recebeu uma pasta de trabalho Excel de fonte externa que contém macros. O arquivo abriu com aviso de segurança e as macros estão desabilitadas. Qual é a forma segura de habilitar as macros apenas para esse arquivo específico sem alterar as configurações globais?",
    "options": [
      "Clicar em \"Habilitar Conteúdo\" no aviso de segurança; o Excel adiciona o arquivo à lista de documentos confiáveis para sessões futuras",
      "Ambas A e B são abordagens válidas e seguras",
      "Mover o arquivo para uma pasta configurada como Local Confiável nas configurações da Central de Confiabilidade",
      "Arquivo → Informações → Habilitar Conteúdo → Habilitar Todas as Macros apenas para este arquivo"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Gerenciar Pastas de Trabalho",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gerenciar Pastas de Trabalho, subtema Segurança (Nível avancado).",
      "papoReto": "'Clicar em \"Habilitar Conteúdo\" no aviso de segurança; o Excel adiciona o arquivo à lista de documentos confiáveis para sessões futuras' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Ambas A e B são abordagens válidas e seguras: está errada porque ativa contexto/estrutura XML diferente.",
        "Mover o arquivo para uma pasta configurada como Local Confiável nas configurações da Central de Confiabilidade: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Arquivo → Informações → Habilitar Conteúdo → Habilitar Todas as Macros apenas para este arquivo: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q174",
    "text": "Um usuário precisa classificar uma lista de meses pelo calendário (Janeiro, Fevereiro, Março..) e não em ordem alfabética. Qual recurso do Excel permite isso?",
    "options": [
      "Dados → Classificar → Opções → Classificar da Esquerda para a Direita → meses",
      "Dados → Classificar → Ordem → Lista Personalizada → selecionar a lista de meses predefinida",
      "Ambas A e B são abordagens válidas",
      "Criar uma coluna auxiliar com o número do mês e classificar por ela"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Classificação Personalizada (Nível avancado).",
      "papoReto": "'Dados → Classificar → Ordem → Lista Personalizada → selecionar a lista de meses predefinida' ativa dataValidation node em worksheet.xml. Restringe entrada a tipo específico (List/Decimal/Date/Custom) que Excel valida em digitação.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Dados → Classificar → Opções → Classificar da Esquerda para a Direita → meses: está errada porque ativa contexto/estrutura XML diferente.",
        "Ambas A e B são abordagens válidas: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Criar uma coluna auxiliar com o número do mês e classificar por ela: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q175",
    "text": "Um usuário deseja comparar dados de duas planilhas da mesma pasta de trabalho lado a lado. Qual sequência deve seguir?",
    "options": [
      "Exibir → Nova Janela → Exibir → Exibir Lado a Lado → navegar para planilhas diferentes em cada janela",
      "Inserir → Nova Planilha → Exibir Lado a Lado → selecionar as planilhas",
      "Exibir → Dividir → selecionar as planilhas desejadas em cada painel",
      "Ctrl+Clique nas abas das planilhas → Exibir Lado a Lado"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Gerenciar Pastas de Trabalho",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gerenciar Pastas de Trabalho, subtema Janelas (Nível intermediario).",
      "papoReto": "'Exibir → Nova Janela → Exibir → Exibir Lado a Lado → navegar para planilhas diferentes em cada janela' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Inserir → Nova Planilha → Exibir Lado a Lado → selecionar as planilhas: está errada porque ativa contexto/estrutura XML diferente.",
        "Exibir → Dividir → selecionar as planilhas desejadas em cada painel: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Ctrl+Clique nas abas das planilhas → Exibir Lado a Lado: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q176",
    "text": "Um usuário precisa converter um número decimal para hexadecimal no Excel. Qual função deve usar?",
    "options": [
      "DEC2HEX",
      "DECAHEX",
      "BASE com base 16",
      "CONVERTER (CONVERT) com argumento \"hex\""
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções de Engenharia (Nível intermediario).",
      "papoReto": "'DEC2HEX' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "DECAHEX: está errada porque ativa contexto/estrutura XML diferente.",
        "BASE com base 16: está errada porque manipula propriedade errada ou em escopo inválido.",
        "CONVERTER (CONVERT) com argumento \"hex\": está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q177",
    "text": "Um usuário tem uma coluna com datas no formato texto \"20240115\" e precisa converter para o formato \"15/01/2024\" usando Flash Fill. Qual é o procedimento?",
    "options": [
      "Usar fórmula =DATA(ESQUERDA(A1;4);EXT.TEXTO(A1;5;2);DIREITA(A1;2))",
      "Digitar manualmente \"15/01/2024\" na célula adjacente ao primeiro registro e pressionar Ctrl+E para aplicar o padrão às demais",
      "Usar Dados → Texto para Colunas para converter o formato de data",
      "Ambas A e C são válidas mas Flash Fill é mais rápido para transformações simples de padrão"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Preenchimento Relâmpago (Nível avancado).",
      "papoReto": "'Digitar manualmente \"15/01/2024\" na célula adjacente ao primeiro registro e pressionar Ctrl+E para aplicar o padrão às demais' é formato que suporta estrutura interna necessária. Arquivo ZIP (.xlsx/.xlsm com XML+VBA) ou binário (.xlsb) determina compatibilidade com recursos.",
      "puloDoGato": ".XLS* extensão determina capacidade. M=Macros. T=Template.",
      "cascasDeBanana": [
        "Usar fórmula =DATA(ESQUERDA(A1;4);EXT.TEXTO(A1;5;2);DIREITA(A1;2)): está errada porque ativa contexto/estrutura XML diferente.",
        "Usar Dados → Texto para Colunas para converter o formato de data: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Ambas A e C são válidas mas Flash Fill é mais rápido para transformações simples de padrão: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Excel 365 detecta extensão arquivo. .xlsx ignora vbaProject.bin; .xlsm carrega."
    }
  },
  {
    "id": "mo201_q178",
    "text": "Um usuário importou uma tabela com Power Query e precisa criar uma coluna que calcule o número de dias entre a data de pedido e a data de entrega. Qual é a abordagem correta no Power Query?",
    "options": [
      "Transformar → Coluna de Data → Diferença entre Datas → Dias",
      "Transformar → Calcular → Diferença de Datas com unidade Dias",
      "Adicionar Coluna → Coluna Personalizada → fórmula Duration.Days([DataEntrega]-[DataPedido])",
      "Adicionar Coluna → Data → Subtrair Datas → Dias"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Power Query",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Power Query, subtema Transformação Avançada (Nível avancado).",
      "papoReto": "'Adicionar Coluna → Coluna Personalizada → fórmula Duration.Days([DataEntrega]-[DataPedido])' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Transformar → Coluna de Data → Diferença entre Datas → Dias: está errada porque ativa contexto/estrutura XML diferente.",
        "Transformar → Calcular → Diferença de Datas com unidade Dias: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Adicionar Coluna → Data → Subtrair Datas → Dias: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q179",
    "text": "Um usuário aplicou Subtotais a uma lista de dados e deseja realizar um cálculo apenas sobre os valores visíveis ignorando as linhas ocultas pelos subtotais. Qual função do Excel realiza cálculos apenas em células visíveis?",
    "options": [
      "SUBTOTAL (SUBTOTAL) com o código de função adequado",
      "SOMASE com critério de visibilidade",
      "AGREGAR (AGGREGATE) com opção de ignorar linhas ocultas",
      "SOMA com intervalo filtrado manualmente"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Subtotais Avançados (Nível avancado).",
      "papoReto": "'SUBTOTAL (SUBTOTAL) com o código de função adequado' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "SOMASE com critério de visibilidade: está errada porque ativa contexto/estrutura XML diferente.",
        "AGREGAR (AGGREGATE) com opção de ignorar linhas ocultas: está errada porque manipula propriedade errada ou em escopo inválido.",
        "SOMA com intervalo filtrado manualmente: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q180",
    "text": "Qual é a diferença entre as funções SUBTOTAL e AGREGAR no Excel?",
    "options": [
      "AGREGAR oferece mais funções que SUBTOTAL e permite ignorar além de linhas ocultas também erros e linhas filtradas com opções mais granulares de controle",
      "Não há diferença funcional entre as duas funções",
      "AGREGAR funciona apenas com Tabelas do Excel enquanto SUBTOTAL funciona com qualquer intervalo",
      "SUBTOTAL suporta mais tipos de cálculo que AGREGAR"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Subtotais Avançados (Nível avancado).",
      "papoReto": "'AGREGAR oferece mais funções que SUBTOTAL e permite ignorar além de linhas ocultas também erros e linhas filtradas com opções mais granulares de controle' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Não há diferença funcional entre as duas funções: está errada porque ativa contexto/estrutura XML diferente.",
        "AGREGAR funciona apenas com Tabelas do Excel enquanto SUBTOTAL funciona com qualquer intervalo: está errada porque manipula propriedade errada ou em escopo inválido.",
        "SUBTOTAL suporta mais tipos de cálculo que AGREGAR: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q181",
    "text": "Um usuário precisa retornar o endereço de célula (como \"$B$5\") de onde um valor foi encontrado em vez do próprio valor. Qual combinação de funções resolve isso?",
    "options": [
      "Ambas A e B são abordagens válidas",
      "=PROCV(valor;intervalo;0;FALSO) com retorno de referência",
      "=ENDEREÇO(CORRESP(valor;intervalo;0)+LINHA(intervalo)-1;COLUNA(intervalo))",
      "=CÉLULA(\"endereço\";ÍNDICE(intervalo;CORRESP(valor;intervalo;0)))"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções de Pesquisa (Nível avancado).",
      "papoReto": "'=ENDEREÇO(CORRESP(valor;intervalo;0)+LINHA(intervalo)-1;COLUNA(intervalo))' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Ambas A e B são abordagens válidas: está errada porque ativa contexto/estrutura XML diferente.",
        "=PROCV(valor;intervalo;0;FALSO) com retorno de referência: está errada porque manipula propriedade errada ou em escopo inválido.",
        "=CÉLULA(\"endereço\";ÍNDICE(intervalo;CORRESP(valor;intervalo;0))): está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q182",
    "text": "Um usuário precisa criar um nome definido que referencie dinamicamente o último valor preenchido em uma coluna. Qual fórmula deve usar na definição do nome?",
    "options": [
      "=DESLOC(Plan1!$A$1;CONT.VALORES(Plan1!$A:$A)-1;0)",
      "Ambas A e B são abordagens válidas",
      "=PROCX(2;1/(Plan1!$A:$A<>\"\");Plan1!$A:$A)",
      "=ÍNDICE(Plan1!$A:$A;CONT.VALORES(Plan1!$A:$A))"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Gerenciar Pastas de Trabalho",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gerenciar Pastas de Trabalho, subtema Nomes Definidos Avançados (Nível avancado).",
      "papoReto": "'=ÍNDICE(Plan1!$A:$A;CONT.VALORES(Plan1!$A:$A))' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "SE() testa. E()/OU() combinam lógica. PROCX()/ÍNDICE buscam.",
      "cascasDeBanana": [
        "=DESLOC(Plan1!$A$1;CONT.VALORES(Plan1!$A:$A)-1;0): está errada porque ativa contexto/estrutura XML diferente.",
        "Ambas A e B são abordagens válidas: está errada porque manipula propriedade errada ou em escopo inválido.",
        "=PROCX(2;1/(Plan1!$A:$A<>\"\");Plan1!$A:$A): está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Fórmulas dinâmicas (array) propagam automático sem Ctrl+Shift+Enter."
    }
  },
  {
    "id": "mo201_q183",
    "text": "Um usuário precisa importar um arquivo CSV com separador ponto e vírgula e codificação UTF-8 para o Excel sem distorcer os caracteres especiais. Qual é a abordagem mais segura?",
    "options": [
      "Renomear o arquivo para .txt e usar o Assistente de Importação de Texto",
      "Abrir o arquivo CSV diretamente pelo Excel clicando duas vezes",
      "Usar Arquivo → Abrir → Todos os Arquivos → selecionar o CSV e configurar na importação",
      "Dados → Obter Dados → De Arquivo → De Texto/CSV → selecionar o arquivo → configurar delimitador e codificação no Power Query antes de carregar"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Importação de Dados (Nível intermediario).",
      "papoReto": "'Dados → Obter Dados → De Arquivo → De Texto/CSV → selecionar o arquivo → configurar delimitador e codificação no Power Query antes de carregar' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Renomear o arquivo para .txt e usar o Assistente de Importação de Texto: está errada porque ativa contexto/estrutura XML diferente.",
        "Abrir o arquivo CSV diretamente pelo Excel clicando duas vezes: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Usar Arquivo → Abrir → Todos os Arquivos → selecionar o CSV e configurar na importação: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q184",
    "text": "Um usuário precisa contar quantas palavras existem em uma célula de texto. Qual fórmula resolve isso corretamente?",
    "options": [
      "=CONT.SE(A1;\"* *\")+1",
      "=NÚM.CARACT(ARRUMAR(A1))-NÚM.CARACT(SUBSTITUIR(ARRUMAR(A1);\" \";\"\"))+1",
      "=CONT.PALAVRAS(A1)",
      "=NÚM.CARACT(A1)-NÚM.CARACT(SUBSTITUIR(A1;\" \";\"\"))"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções de Texto (Nível avancado).",
      "papoReto": "'=NÚM.CARACT(ARRUMAR(A1))-NÚM.CARACT(SUBSTITUIR(ARRUMAR(A1);\" \";\"\"))+1' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "SE() testa. E()/OU() combinam lógica. PROCX()/ÍNDICE buscam.",
      "cascasDeBanana": [
        "=CONT.SE(A1;\"* *\")+1: está errada porque ativa contexto/estrutura XML diferente.",
        "=CONT.PALAVRAS(A1): está errada porque manipula propriedade errada ou em escopo inválido.",
        "=NÚM.CARACT(A1)-NÚM.CARACT(SUBSTITUIR(A1;\" \";\"\")): está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Fórmulas dinâmicas (array) propagam automático sem Ctrl+Shift+Enter."
    }
  },
  {
    "id": "mo201_q185",
    "text": "Um usuário deseja que uma mensagem de entrada apareça automaticamente quando o usuário selecionar uma célula com validação orientando sobre o preenchimento correto. Qual configuração permite isso?",
    "options": [
      "Dados → Validação de Dados → guia Alerta de Erro → configurar mensagem de orientação",
      "Revisão → Comentários → Mostrar ao Selecionar Célula com Validação",
      "Dados → Validação de Dados → guia Mensagem de Entrada → marcar \"Mostrar mensagem de entrada ao selecionar célula\" → digitar o título e a mensagem",
      "Inserir → Comentário → vincular à célula de validação"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Validação de Dados (Nível avancado).",
      "papoReto": "'Dados → Validação de Dados → guia Mensagem de Entrada → marcar \"Mostrar mensagem de entrada ao selecionar célula\" → digitar o título e a mensagem' ativa dataValidation node em worksheet.xml. Restringe entrada a tipo específico (List/Decimal/Date/Custom) que Excel valida em digitação.",
      "puloDoGato": "VALIDAÇÃO entrada futura. PROTEÇÃO conteúdo existente.",
      "cascasDeBanana": [
        "Dados → Validação de Dados → guia Alerta de Erro → configurar mensagem de orientação: está errada porque ativa contexto/estrutura XML diferente.",
        "Revisão → Comentários → Mostrar ao Selecionar Célula com Validação: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Inserir → Comentário → vincular à célula de validação: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Validação funciona apenas entrada NOVA. Dados existentes requerem limpeza."
    }
  },
  {
    "id": "mo201_q186",
    "text": "Um usuário precisa criar uma macro VBA que proteja automaticamente todas as planilhas de uma pasta de trabalho com a mesma senha. Qual estrutura VBA é mais eficiente?",
    "options": [
      "Usar ActiveWorkbook.Protect com argumento Structure para proteger todas as planilhas simultaneamente",
      "Criar uma macro separada para cada planilha e executá-las sequencialmente",
      "Loop For i = 1 To ActiveWorkbook.Sheets.Count com Sheets(i).Protect \"senha123\"",
      "Loop For Each ws In ThisWorkbook.Worksheets seguido de ws.Protect Password:=\"senha123\" dentro do loop"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Gerenciar Pastas de Trabalho",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gerenciar Pastas de Trabalho, subtema Macros VBA (Nível avancado).",
      "papoReto": "Loop For Each ws In ThisWorkbook.Worksheets seguido de ws.Protect Password:=\"senha123\" dentro do loop é a resposta correta.",
      "puloDoGato": "Opções alternativas parecem funcionais mas omitem configuração obrigatória",
      "cascasDeBanana": [
        "Loop For i = 1 To ActiveWorkbook.Sheets.Count com Sheets: Incorreto, pois não é a opção correta para resolver o problema apresentado ou não existe com essa finalidade.",
        "Usar ActiveWorkbook.Protect com argumento Structure para proteger todas as planilhas simultaneamente: Incorreto, pois não é a opção correta para resolver o problema apresentado ou não existe com essa finalidade.",
        "Criar uma macro separada para cada planilha e executá-las sequencialmente: Incorreto, pois não é a opção correta para resolver o problema apresentado ou não existe com essa finalidade."
      ],
      "dicaOuro": "Loop For Each ws In ThisWorkbook.Worksheets seguido de ws.Protect Password:=\"senha123\" dentro do loop — este é o ponto-chave a memorizar para acertar na prova."
    }
  },
  {
    "id": "mo201_q187",
    "text": "Um usuário deseja aplicar Formatação Condicional em uma Tabela Dinâmica de forma que as regras sejam mantidas mesmo após atualização e filtragem dos dados. Qual configuração garante isso?",
    "options": [
      "Aplicar a Formatação Condicional após cada atualização da Tabela Dinâmica",
      "Converter a Tabela Dinâmica em valores estáticos antes de aplicar a Formatação Condicional",
      "Ao aplicar a Formatação Condicional selecionar a opção \"Todas as células que mostram valores de [campo]\" em vez de um intervalo fixo",
      "Usar macro VBA para reaplicar a Formatação Condicional após cada atualização"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Tabelas Dinâmicas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Tabelas Dinâmicas, subtema Formatação Avançada (Nível avancado).",
      "papoReto": "'Ao aplicar a Formatação Condicional selecionar a opção \"Todas as células que mostram valores de [campo]\" em vez de um intervalo fixo' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Aplicar a Formatação Condicional após cada atualização da Tabela Dinâmica: está errada porque ativa contexto/estrutura XML diferente.",
        "Converter a Tabela Dinâmica em valores estáticos antes de aplicar a Formatação Condicional: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Usar macro VBA para reaplicar a Formatação Condicional após cada atualização: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q188",
    "text": "Um usuário precisa criar uma função no Power Query em linguagem M que receba um texto e retorne apenas as letras maiúsculas. Qual é a estrutura correta em M?",
    "options": [
      "Criar uma função com let e Text.Select combinado com List.Select e Character.IsUpper para filtrar apenas caracteres maiúsculos",
      "Usar Text.Remove com lista de caracteres minúsculos para remover as letras minúsculas",
      "Usar Text.Upper para converter todo o texto em maiúsculas",
      "Usar Text.Split e filtrar os caracteres com condição de maiúscula"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Power Query",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Power Query, subtema Linguagem M Avançada (Nível avancado).",
      "papoReto": "'Criar uma função com let e Text.Select combinado com List.Select e Character.IsUpper para filtrar apenas caracteres maiúsculos' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "Usar Text.Remove com lista de caracteres minúsculos para remover as letras minúsculas: está errada porque ativa contexto/estrutura XML diferente.",
        "Usar Text.Upper para converter todo o texto em maiúsculas: está errada porque manipula propriedade errada ou em escopo inválido.",
        "Usar Text.Split e filtrar os caracteres com condição de maiúscula: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q189",
    "text": "Um usuário precisa criar um gráfico de Pareto que mostre as barras de frequência em ordem decrescente e uma linha de percentual acumulado. Como criar isso nativamente no Excel?",
    "options": [
      "Não é possível criar gráfico de Pareto nativamente; requer configuração manual com gráfico de combinação",
      "Inserir → Gráficos → Inserir Gráfico Estatístico → Histograma → Pareto",
      "Inserir → Gráficos → Estatístico → Pareto com linha de Lorenz",
      "Inserir → Gráficos → Combinação → configurar barras decrescentes e linha de percentual acumulado manualmente"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Gráficos Avançados (Nível avancado).",
      "papoReto": "Excel 365 integra gráfico Pareto nativo em Inserir → Gráficos → Inserir Gráfico Estatístico → Histograma → Pareto. Estrutura interna chartType='pareto' ordena dados decrescente automaticamente, calcula percentual acumulado em eixo secundário (linha), exibe barras + linha combinadas. Pareto automático versus manual (Combinação): nativo economiza 5+ passos (ordenação, cálculo %, eixo secundário, formatação). Gráfico Pareto é subtype de Histograma no modelo Office Open XML.",
      "puloDoGato": "Gráfico Pareto NATIVO = Inserir → Gráficos Estatístico → Histograma → Pareto. Combinação = manual (PROIBIDO).",
      "cascasDeBanana": [
        "Inserir → Gráficos → Combinação → configurar barras decrescentes e linha de percentual acumulado manualmente: está errada porque Combinação requer ordenação manual, cálculo percentual acumulado (fórmula), eixo secundário (configuração), formatação = 5+ passos vs nativo 1.",
        "Não é possível criar gráfico de Pareto nativamente; requer configuração manual com gráfico de combinação: está errada porque Pareto EXISTE nativo em Excel 365+ (adicionado 2016), suporta estrutura chartType='pareto'.",
        "Inserir → Gráficos → Estatístico → Pareto com linha de Lorenz: está errada porque caminho INCORRETO ('Estatístico' é submenu genérico de Histogramas, não nome de tipo); Lorenz é gráfico DIFERENTE (não Pareto)."
      ],
      "dicaOuro": "Pareto nativo Excel 365 está sob Inserir → Gráficos → Inserir Gráfico Estatístico (não 'Estatístico'), subcategoria Histograma. Este é o caminho EXATO na prova."
    }
  },
  {
    "id": "mo201_q190",
    "text": "Um usuário precisa criar uma lista única e ordenada de valores a partir de um intervalo com duplicatas usando apenas funções nativas do Excel 365. Qual combinação de funções resolve isso?",
    "options": [
      "=FILTRO(ÚNICO(intervalo);ÚNICO(intervalo)<>\"\")",
      "=ÚNICO(CLASSIFICAR(intervalo))",
      "=CLASSIFICAR(ÚNICO(intervalo))",
      "Ambas A e B produzem o mesmo resultado quando o intervalo não tem erros"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções de Array Dinâmico (Nível avancado).",
      "papoReto": "'=CLASSIFICAR(ÚNICO(intervalo))' ativa dataValidation node em worksheet.xml. Restringe entrada a tipo específico (List/Decimal/Date/Custom) que Excel valida em digitação.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "=FILTRO(ÚNICO(intervalo);ÚNICO(intervalo)<>\"\"): está errada porque ativa contexto/estrutura XML diferente.",
        "=ÚNICO(CLASSIFICAR(intervalo)): está errada porque manipula propriedade errada ou em escopo inválido.",
        "Ambas A e B produzem o mesmo resultado quando o intervalo não tem erros: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q191",
    "text": "Um usuário precisa documentar todas as fórmulas de uma planilha em um relatório separado para auditoria. Qual é a abordagem mais eficiente?",
    "options": [
      "Usar Fórmulas → Rastrear Precedentes em cada célula e documentar manualmente",
      "Exportar a planilha como CSV que converte automaticamente fórmulas em texto",
      "Ativar Fórmulas → Mostrar Fórmulas (Ctrl+`) → copiar a planilha para um novo documento → desativar o modo de exibição de fórmulas",
      "Usar macro VBA para iterar por cada célula com fórmula e listar o endereço e a fórmula em uma planilha de relatório"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Gerenciar Pastas de Trabalho",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gerenciar Pastas de Trabalho, subtema Auditoria (Nível avancado).",
      "papoReto": "Fórmulas → Mostrar Fórmulas (Ctrl+`) ativa view mode em worksheet XML showFormulas='1' renderizando =FÓRMULA em vez de resultado. Copiar planilha inteira (com showFormulas ativo) preserva todas 10k+ fórmulas em nova pasta. Desativar toggle restaura view cálculos. Alternativa VBA = O(n) iteração + alocação range = lentidão 1000+ fórmulas. CSV não preserva fórmulas (exporta valores calculados apenas). Rastrear Precedentes = UI manual (impraticável 100+ células).",
      "puloDoGato": "Mostrar Fórmulas (Ctrl+`) = render TODAS fórmulas. Copiar = captura tudo. Desativar toggle = restaura normal.",
      "cascasDeBanana": [
        "Usar macro VBA para iterar por cada célula com fórmula e listar o endereço e a fórmula em uma planilha de relatório: está errada porque VBA O(n) iteração cada célula = LENTÍSSIMO 1000+ fórmulas, requer compilação/debug, vs toggle Ctrl+` = instantâneo UI.",
        "Exportar a planilha como CSV que converte automaticamente fórmulas em texto: está errada porque CSV export serializa VALUES (resultado cálculo), não fórmulas; =SOMA(A:B) exporta como número, perdendo toda informação fórmula.",
        "Usar Fórmulas → Rastrear Precedentes em cada célula e documentar manualmente: está errada porque Rastrear Precedentes = ferramenta VISUAL (setas), não exportação; documentar manualmente cada célula = impraticável centenas fórmulas (O(n) manual vs O(1) Mostrar Fórmulas)."
      ],
      "dicaOuro": "Ctrl+` ativa showFormulas='1' no worksheet XML, renderiza TODAS fórmulas simultaneamente, copia intactas para novo arquivo. Nenhuma outra método documenta 100% fórmulas em 3 cliques."
    }
  },
  {
    "id": "mo201_q192",
    "text": "Um usuário criou uma medida DAX no Power Pivot para calcular o total de vendas. Agora precisa criar uma medida que calcule o percentual de participação de cada produto no total geral. Qual função DAX é essencial para isso?",
    "options": [
      "CALCULATE() com filtro de produto específico",
      "RELATED() para trazer o total da tabela de dimensão",
      "TOTALYTD() para acumular os valores no denominador",
      "ALL() para remover os filtros do contexto e calcular o total geral no denominador da divisão"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Power Pivot DAX (Nível avancado).",
      "papoReto": "'ALL() para remover os filtros do contexto e calcular o total geral no denominador da divisão' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "CALCULATE() com filtro de produto específico: está errada porque ativa contexto/estrutura XML diferente.",
        "RELATED() para trazer o total da tabela de dimensão: está errada porque manipula propriedade errada ou em escopo inválido.",
        "TOTALYTD() para acumular os valores no denominador: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q193",
    "text": "Um usuário precisa criar uma medida DAX que calcule o total de vendas acumulado do início do ano até a data atual (YTD). Qual função DAX resolve isso?",
    "options": [
      "SUMX(FILTER(Vendas;Vendas[Data]<=TODAY());Vendas[Valor])",
      "TOTALYTD([Total Vendas];Calendario[Data])",
      "Ambas A e B produzem o mesmo resultado sendo igualmente válidas",
      "CALCULATE([Total Vendas];DATESYTD(Calendario[Data]))"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Power Pivot DAX (Nível avancado).",
      "papoReto": "'TOTALYTD([Total Vendas];Calendario[Data])' implementa lógica em cellFormula node XML conforme sintaxe. Avalia argumentos e retorna tipo/valor que satisfaz o requisito.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "SUMX(FILTER(Vendas;Vendas[Data]<=TODAY());Vendas[Valor]): está errada porque ativa contexto/estrutura XML diferente.",
        "Ambas A e B produzem o mesmo resultado sendo igualmente válidas: está errada porque manipula propriedade errada ou em escopo inválido.",
        "CALCULATE([Total Vendas];DATESYTD(Calendario[Data])): está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q194",
    "text": "Um usuário precisa exportar apenas uma planilha específica de uma pasta de trabalho com múltiplas planilhas como um arquivo Excel separado. Qual é a abordagem correta?",
    "options": [
      "Selecionar toda a planilha → Copiar → Arquivo → Nova Pasta de Trabalho → Colar Especial → Valores",
      "Usar macro VBA para copiar a planilha para um novo arquivo e salvar",
      "Clicar com o botão direito na aba da planilha → Mover ou Copiar → Nova Pasta de Trabalho → marcar Criar uma Cópia → salvar o novo arquivo",
      "Arquivo → Exportar → Planilha Específica → selecionar a planilha e salvar"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Gerenciar Pastas de Trabalho",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gerenciar Pastas de Trabalho, subtema Exportação (Nível intermediario).",
      "papoReto": "Context menu aba planilha → Mover ou Copiar → Nova Pasta de Trabalho → ✓Criar uma Cópia aciona MoveSheet dialog preservando sheet definition completa (worksheet.xml, referenciadosWrkbk.xml, _rels links). Output = novo .xlsx arquivo com planilha clonada + metadados intactos (nomes definidos sheet-scope, validação dados, proteção). 'Colar Especial → Valores' descarta fórmulas (output valores apenas). VBA = overhead compilação/debug vs UI built-in. Arquivo→Exportar caminho não existe Excel 365 UI padrão.",
      "puloDoGato": "Context menu aba → Mover ou Copiar → Nova PdT → ✓Cópia = clone completo sheet com metadados.",
      "cascasDeBanana": [
        "Selecionar toda a planilha → Copiar → Arquivo → Nova Pasta de Trabalho → Colar Especial → Valores: está errada porque Colar Especial → Valores DESCARTA FÓRMULAS (output apenas valores calculados), perde estrutura sheet (nomes definidos sheet-scope, validação, proteção), recriação manual necessária.",
        "Usar macro VBA para copiar a planilha para um novo arquivo e salvar: está errada porque VBA requer Sheets.Copy (objeto worksheet), compilação/debug overhead, vs context menu = built-in UI sem code (idêntico resultado, ineficiente código).",
        "Arquivo → Exportar → Planilha Específica → selecionar a planilha e salvar: está errada porque caminho Arquivo→Exportar NÃO existe Excel 365 UI padrão (confundindo com funções PowerPoint/Word export); Excel usa Save As (.xlsx) ou context menu sheet operations."
      ],
      "dicaOuro": "Context menu aba planilha 'Mover ou Copiar' = ÚNICA UI opção clonar sheet inteira com metadados intactos (nomes definidos, validação, proteção). Sem VBA."
    }
  },
  {
    "id": "mo201_q195",
    "text": "Um usuário precisa usar PROCX para realizar uma pesquisa bidirecional retornando o valor na interseção de uma linha e coluna específicas como uma matriz cruzada. Qual é a abordagem correta?",
    "options": [
      "=PROCX(ValorLinha;ColunaCabeçalho;PROCX(ValorColuna;LinhaCabeçalho;MatrizDados)) aninhando dois PROCX",
      "=PROCX(ValorLinha&ValorColuna;ColunaCabeçalho&LinhaCabeçalho;MatrizDados)",
      "=ÍNDICE(Matriz;CORRESP(ValorLinha;Coluna;0);CORRESP(ValorColuna;Linha;0))",
      "Ambas A e B são abordagens válidas para pesquisa bidirecional"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Fórmulas Avançadas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Fórmulas Avançadas, subtema Funções de Lookup (Nível avancado).",
      "papoReto": "'=PROCX(ValorLinha;ColunaCabeçalho;PROCX(ValorColuna;LinhaCabeçalho;MatrizDados)) aninhando dois PROCX' implementa comportamento esperado segundo padrão técnico Excel 365.",
      "puloDoGato": "Identifique recurso correto conforme contexto.",
      "cascasDeBanana": [
        "=PROCX(ValorLinha&ValorColuna;ColunaCabeçalho&LinhaCabeçalho;MatrizDados): está errada porque ativa contexto/estrutura XML diferente.",
        "=ÍNDICE(Matriz;CORRESP(ValorLinha;Coluna;0);CORRESP(ValorColuna;Linha;0)): está errada porque manipula propriedade errada ou em escopo inválido.",
        "Ambas A e B são abordagens válidas para pesquisa bidirecional: está errada porque não existe como caminho menu ou realiza ação diferente."
      ],
      "dicaOuro": "Detalhe crítico segundo documentação Excel 365."
    }
  },
  {
    "id": "mo201_q196",
    "text": "Um usuário precisa importar dados de uma API REST que retorna JSON para o Excel. Qual é a abordagem recomendada?",
    "options": [
      "Copiar o JSON manualmente e usar Dados → Texto para Colunas para parsear",
      "Usar macro VBA com objeto XMLHttp para chamar a API e parsear o JSON",
      "Dados → Obter Dados → De Outras Fontes → Da Web → inserir a URL da API e usar o Power Query para transformar o JSON em tabela",
      "Ambas A e C são abordagens válidas sendo Power Query mais recomendada para atualizações recorrentes"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Importação Avançada (Nível avancado).",
      "papoReto": "Dados → Obter Dados → De Outras Fontes → Da Web = integração Power Query nativa. URL API chamada WEB(url) função M, retorna JSON raw bytes, Power Query auto-detecta JSON schema e deserializa tabela estruturada. Refresh automático = atualização recorrente SEM recodagem manual. Alternativa manual JSON copy + Texto Colunas FALHA JSON (delimitado por vírgula, não tab/CSV = parseamento incompleto). VBA XMLHttp = válido mas overhead compilação/sign vbaProject.bin vs Power Query no-code (refresh automático, auditoria segurança integrada).",
      "puloDoGato": "Power Query Web() = auto-deserializa JSON. VBA XMLHttp = manual parsing complexo. Texto Colunas = falha JSON (não CSV).",
      "cascasDeBanana": [
        "Copiar o JSON manualmente e usar Dados → Texto para Colunas para parsear: está errada porque Texto Colunas = delimitador-baseado (vírgula/tab/espaço), não JSON structure-aware parsing; JSON com nested objects/arrays falha fragmentação incorreta.",
        "Usar macro VBA com objeto XMLHttp para chamar a API e parsear o JSON: está errada porque VBA XMLHttp = código manual parsing (JsonConvert libraries necessário, compilação overhead), sem refresh automático built-in, auditoria vbaProject.bin assinatura requerida vs Power Query UI.",
        "Ambas A e C são abordagens válidas sendo Power Query mais recomendada para atualizações recorrentes: está errada porque opção A (JSON copy + Texto Colunas) NÃO valida nested JSON; Power Query NÃO apenas 'recomendada' — é ÚNICA abordagem nativa com refresh automático sem código."
      ],
      "dicaOuro": "Power Query Web(url) + JSON auto-schema = ÚNICA abordagem Excel 365 nativa refresh automático API JSON. Manual copy + Texto Colunas falha JSON. VBA = overhead código."
    }
  },
  {
    "id": "mo201_q197",
    "text": "Um usuário precisa criar um UserForm VBA no Excel com campos de entrada para Nome CPF e Valor que ao confirmar insira os dados na próxima linha vazia de uma planilha. Qual propriedade VBA identifica a próxima linha vazia?",
    "options": [
      "Cells(Rows.Count;\"A\").End(xlUp).Row + 1 para encontrar a última linha preenchida e adicionar 1",
      "ActiveSheet.UsedRange.Rows.Count + 1",
      "Range(\"A1\").End(xlDown).Row + 1",
      "ActiveCell.Row + 1 após selecionar a última célula"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Gerenciar Pastas de Trabalho",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gerenciar Pastas de Trabalho, subtema Macros VBA (Nível avancado).",
      "papoReto": "Cells(Rows.Count,\"A\").End(xlUp).Row + 1 navega coluna A até última linha Excel (1048576), executa Ctrl+Up (xlUp direction = reverso até primeira célula não-vazia), retorna Row índice, soma 1 = próxima linha vazia. Estrutura robusta: ignora gaps dados (não depende UsedRange desatualizado), funciona dados crescem dinamicamente sem reinicialização macro. UsedRange.Rows.Count = retorna contagem APENAS linhas objeto UsedRange (pode estar desatualizado se deleteRows anterior), Range.End(xlDown) = navega PARA BAIXO não PARA CIMA (encontra gap, não EOF último dado).",
      "puloDoGato": "Rows.Count + End(xlUp) = navega ao TOPO dados, +1 = próxima vazia. End(xlDown) = navega gap (ERRADO).",
      "cascasDeBanana": [
        "ActiveSheet.UsedRange.Rows.Count + 1: está errada porque UsedRange = range últimas células com dados HISTORICAMENTE (Excel caches, pode estar desatualizado após Delete Row operations); se usuário deletou linhas, UsedRange não reflete novo tamanho real = insere dados em linhas não-vazias ou gap.",
        "Range(\"A1\").End(xlDown).Row + 1: está errada porque End(xlDown) navega FOR WARD até primeira célula VAZIA ou fim dados (encontra GAP, não EOF); se dados A1:A10 com A5 vazio, End(xlDown) retorna A5 (gap), não A11 (última vazia real).",
        "ActiveCell.Row + 1 após selecionar a última célula: está errada porque requer seleção MANUAL última célula (não automático), acesso usuário pode selecionar célula intermediária = insere dados linha incorreta, sem validação VBA."
      ],
      "dicaOuro": "Cells(Rows.Count,\"A\").End(xlUp).Row + 1 = PADRÃO VBA inserir dados última linha vazia. Excel Excel-esconde Rows.Count (1M+) mas End(xlUp) reverso eficiente = única solução robusta gaps dados."
    }
  },
  {
    "id": "mo201_q198",
    "text": "Um usuário criou uma Tabela de Dados com duas variáveis e percebe que o Excel está recalculando lentamente toda a pasta de trabalho ao alterar qualquer célula. Qual configuração resolve esse problema de desempenho?",
    "options": [
      "Converter a Tabela de Dados em valores estáticos após calcular",
      "Mover a Tabela de Dados para uma planilha separada com cálculo manual",
      "Reduzir o tamanho da Tabela de Dados diminuindo o número de variáveis",
      "Fórmulas → Opções de Cálculo → Automático Exceto para Tabelas de Dados → calcular as tabelas manualmente com F9"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Análise de Dados",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Análise de Dados, subtema Análise de Hipóteses (Nível avancado).",
      "papoReto": "Fórmulas → Opções de Cálculo → Automático Exceto para Tabelas de Dados (calcMode='autoExceptTable') desativa recálculo automático Tabelas Dados Excel ignora qualquer mudança célula entrada TabelaDados até CTRL+ALT+F9 (CalculateFull) pressionado usuário. Tabelas Dados = iteração exponencial (n variáveis × m saídas = complexidade O(n×m) recalc), Excel engine otimizado isolate essa overhead. Mover para planilha = overhead linked formulas. Valores estáticos = perde funcionalidade Tabela. Reduzir variáveis = não soluciona (problema estrutural excel engine).",
      "puloDoGato": "Automático Exceto Tabelas Dados = skip TabelaDados recálc automático. F9/Ctrl+Alt+F9 = recalc manual on-demand.",
      "cascasDeBanana": [
        "Converter a Tabela de Dados em valores estáticos após calcular: está errada porque valores estáticos (Paste Special → Values) REMOVE funcionalidade Tabela Dados (não resimula si usuário muda células entrada); converte ferramenta análise = snapshot estático (inútil análise hipóteses).",
        "Mover a Tabela de Dados para uma planilha separada com cálculo manual: está errada porque mover planilha = não reduz overhead recálc Tabela (engine Excel recalcRecalc todos formulas linked independente local sheet); adiciona complexidade linked workbooks (overhead cross-sheet dependency).",
        "Reduzir o tamanho da Tabela de Dados diminuindo o número de variáveis: está errada porque reduzir variáveis pode não ser opção (análise requer 2+ variáveis); não soluciona problema estrutural = overhead O(n×m) TabelaDados engine Excel (somente isolate com calcMode='autoExceptTable')."
      ],
      "dicaOuro": "calcMode='autoExceptTable' = ÚNICA setting Excel que isola recálc TabelaDados automático. Sem isso, qualquer mudança célula = full TabelaDados recalc = lentidão exponencial. F9 = recalc manual on-demand."
    }
  },
  {
    "id": "mo201_q199",
    "text": "Um usuário criou uma consulta Power Query muito complexa com dezenas de etapas. Qual boa prática melhora a manutenibilidade dessa consulta?",
    "options": [
      "Consolidar todas as etapas em uma única fórmula M no Editor Avançado",
      "Documentar as etapas em comentários no código M usando // para cada linha",
      "Dividir a consulta em múltiplas consultas intermediárias com nomes descritivos desabilitando o carregamento das intermediárias e usando apenas a consulta final",
      "Ambas A e C são boas práticas complementares"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Power Query",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Power Query, subtema Boas Práticas (Nível avancado).",
      "papoReto": "Dividir consulta complexa múltiplas intermediárias (Enable Load = false) + final (Enable Load = true) cria pipeline modular. Cada etapa = função M chamável referenciável: let Query1 = source, Query2 = Query1 expand, Query_Final = Query2 sort in Query_Final. queryLoadBehavior='loadToWorksheet' apenas final. Consolidar uma fórmula = monolith 100+ linhas (difícil debug, refactor, reuso). Comentários // = legibilidade somente (não manutenibilidade testabilidade).",
      "puloDoGato": "Múltiplas consultas (Enable Load false intermediárias) = pipeline modular testável. Uma fórmula consolidada = monolith non-refactorable.",
      "cascasDeBanana": [
        "Consolidar todas as etapas em uma única fórmula M no Editor Avançado: está errada porque monolith 100+ linhas M = refactoring impossível, bug isolamento difícil, reuso etapas intermediárias inviável (tudo aninhado).",
        "Documentar as etapas em comentários no código M usando // para cada linha: está errada porque // comentários = legibilidade VISUAL apenas (não estrutural manutenibilidade); não permite debug etapas individuais ou reuso intermediárias (tudo 1 fórmula = black box).",
        "Ambas A e C são boas práticas complementares: está errada porque opção A (consolidate) OPOSTA opção C (dividir); não são complementares — dividir = boas prática, consolidar = antipattern."
      ],
      "dicaOuro": "Múltiplas queries intermediárias com Enable Load false = PADRÃO Power Query enterprise. Permite debug cada etapa isoladamente (Test Formula button), reuso, refactor sem impacto cascata."
    }
  },
  {
    "id": "mo201_q200",
    "text": "Um usuário deseja garantir que uma pasta de trabalho Excel não possa ser aberta nem modificada sem as respectivas senhas e que as senhas sejam suficientemente seguras. Quais são as boas práticas para proteção de pastas de trabalho no Excel?",
    "options": [
      "Usar o recurso Marcar como Final que impede qualquer modificação sem necessidade de senha",
      "Usar apenas a proteção de planilha com senha simples pois é suficiente para uso corporativo",
      "Salvar no formato .xlsb que tem criptografia nativa mais forte que o .xlsx",
      "Usar senhas longas e complexas separadas para abertura e modificação via Arquivo → Salvar Como → Ferramentas → Opções Gerais sendo que o Excel 365 usa criptografia AES-256 para proteção de abertura"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Gerenciar Pastas de Trabalho",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre a certificação MO-201 — domínio Gerenciar Pastas de Trabalho, subtema Segurança Avançada (Nível avancado).",
      "papoReto": "Arquivo → Salvar Como → Ferramentas → Opções Gerais = arquivo.docProps.security: reservedForOwner (Password to open) + reservedForSheets (Password to modify). Excel 365 implementa AES-256 opening password (militargrade criptografia), hash SHA2 modify password. Senhas separadas = dois níveis: open_password requer decrypt conteúdo inteiro workbook.xml (impede leitura), modify_password = sheetProtection apenas (permite leitura, impede edição). Marcar como Final = documentProperty flag (não criptografia, bypassável Open With → Edit anyway). Sheet protection simples = O(sec) brute force (inadequado corporativo). .xlsb = mesmo engine criptografia Excel (.xlsx vs .xlsb = apenas formato compressão, criptografia idêntica).",
      "puloDoGato": "AES-256 opening password = impede LEITURA. Modify password = impede EDIÇÃO. Ambas necessárias corporativo.",
      "cascasDeBanana": [
        "Usar o recurso Marcar como Final que impede qualquer modificação sem necessidade de senha: está errada porque 'Marcar como Final' = informational flag documento (documentProperty, não criptografia); Excel permite 'Edit Anyway' button sem prompt senha = segurança cosmética (não tecnológica).",
        "Usar apenas a proteção de planilha com senha simples pois é suficiente para uso corporativo: está errada porque sheet protection = lockedCells atributos apenas (conteúdo ainda legível), senha simples = O(segundos) brute force (inadequado corporativo requer AES-256 opening password).",
        "Salvar no formato .xlsb que tem criptografia nativa mais forte que o .xlsx: está errada porque .xlsb vs .xlsx = formato compressão diferente APENAS; criptografia engine = idêntico (AES-256 both), .xlsb não oferece segurança adicional vs .xlsx."
      ],
      "dicaOuro": "Arquivo→Salvar Como→Ferramentas→Opções Gerais = ÚNICO UI Excel aplicar dual passwords: AES-256 opening (impede abertura) + modify (impede edição). Senhas longas (20+ chars) + complexidade (upper+lower+digit+symbol) = corporate standard."
    }
  }
];
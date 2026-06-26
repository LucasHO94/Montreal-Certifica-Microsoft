export const questions = [
  {
    "id": "mo101_q1",
    "text": "Qual opção permite salvar um documento Word automaticamente em intervalos regulares para evitar perda de dados?",
    "options": [
      "Controle de Versões do SharePoint",
      "Backup Automático do Windows",
      "AutoRecuperação (AutoRecover)",
      "AutoSalvar no OneDrive"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "A AutoRecuperação (AutoRecover) é um mecanismo nativo do Word que salva cópias temporárias do seu documento automaticamente em intervalos regulares.",
      "papoReto": "O AutoRecover funciona em background, independente da ação do usuário. Mesmo se o Word travar ou houver queda de energia, ao reabrir o programa você será oferecido um documento recuperado com as alterações até antes do incidente. As demais opções referem-se a sincronização na nuvem, backup do SO ou versionamento, mas não ao salvamento automático em intervalos que o Word mantém.",
      "respostaCerta": "AutoRecuperação (AutoRecover)",
      "puloDoGato": "A pegadinha é confundir AutoRecover (salva temporários) com AutoSalvar no OneDrive (salva arquivo definitivo na nuvem) — AutoRecover é um mecanismo de segurança offline, enquanto OneDrive é sincronização online.",
      "cascasDeBanana": [
        "Controle de Versões do SharePoint: gerencia histórico de versões de um arquivo já compartilhado, mas não faz salvamento automático contínuo.",
        "Backup Automático do Windows: faz cópia do SO todo, não é específico do Word nem salva em intervalos curtos dentro da aplicação.",
        "AutoSalvar no OneDrive: sincroniza o arquivo salvo na nuvem (exige internet e conta), não é a mesma coisa que recuperação automática local."
      ],
      "dicaOuro": "AutoRecover: salva temporários localmente a cada X minutos. Ativa em Arquivo → Opções → Salvar → 'Manter a última versão salva automaticamente'."
    }
  },
  {
    "id": "mo101_q2",
    "text": "Onde o usuário define o local padrão para salvar novos documentos no Word?",
    "options": [
      "Arquivo → Opções → Salvar → Local padrão de arquivo",
      "Exibir → Opções de Documento",
      "Layout → Configurar Página",
      "Arquivo → Informações → Propriedades"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "A configuração de local padrão de arquivo no Word permite definir um diretório onde todos os novos documentos serão salvos por padrão.",
      "papoReto": "Essa configuração está em Arquivo → Opções → Salvar, na seção \"Salvar documentos\", onde você encontra o campo 'Local padrão de arquivo'. Ao preencher esse campo com um caminho (ex.: C:\\Meus Documentos), todo novo documento criado será direcionado para lá automaticamente.",
      "respostaCerta": "Arquivo → Opções → Salvar → Local padrão de arquivo",
      "puloDoGato": "Propriedades (Arquivo → Informações → Propriedades) é para metadados (autor, título, assunto), não para configurar diretórios. Não confunda!",
      "cascasDeBanana": [
        "Exibir → Opções de Documento: Menu do painel de exibição, não contém configurações de salvamento.",
        "Layout → Configurar Página: Define margens e orientação, não o diretório de salva.",
        "Arquivo → Informações → Propriedades: Gerencia metadados do documento, não o local padrão."
      ],
      "dicaOuro": "Local padrão = Arquivo → Opções → Salvar → 'Local padrão de arquivo'. Deixe a pasta vazia para usar Documentos."
    }
  },
  {
    "id": "mo101_q3",
    "text": "Qual formato de arquivo deve ser usado para garantir compatibilidade com versões antigas do Word (97-2003)?",
    "options": [
      ".odt",
      ".doc",
      ".dotx",
      ".docx"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "O formato .doc é o formato nativo do Microsoft Word 97-2003. Criado antes da mudança para XML em 2007.",
      "papoReto": "Word 97-2003 (.doc) é o único formato que garante compatibilidade total com versões antigas do Word — funcionará sem problemas em máquinas com Word XP, 2000 ou 97. O formato .docx (Word 2007+) é baseado em XML e não é retrocompatível com essas versões antigas.",
      "respostaCerta": ".doc",
      "puloDoGato": "A pegadinha é .docx parecer a alternativa \"moderna\" correta, mas a questão exige especificamente compatibilidade com 97-2003 — aí só .doc funciona.",
      "cascasDeBanana": [
        ".docx: formato XML moderno, requer Word 2007 ou posterior para abrir nativamente.",
        ".dotx: é um template (modelo) moderno, não um documento para compatibilidade retroativa.",
        ".odt: padrão aberto, mas não é Word — desenvolvido por OpenOffice/LibreOffice."
      ],
      "dicaOuro": ".doc = Word 97-2003 (compatibilidade retroativa). .docx = Word 2007+ (não abre em versões antigas)."
    }
  },
  {
    "id": "mo101_q4",
    "text": "Um usuário deseja impedir que outros editem partes específicas de um documento Word, permitindo apenas preenchimento de formulários. Qual recurso deve usar?",
    "options": [
      "Proteger com Assinatura Digital",
      "Criptografar Documento",
      "Restringir Edição com proteção por senha",
      "Marcar como Final"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Restringir Edição permite bloquear partes específicas do documento e liberar apenas certas seções para edição.",
      "papoReto": "Em Revisão → Restringir Edição, você pode definir quais seções permitem apenas preenchimento de formulários. Com proteção por senha, outras partes ficarão totalmente travadas — nem texto será editável, apenas campos de formulário serão preenchíveis. Isso é diferente de criptografia (que bloqueia toda abertura) ou assinatura (que autentica origem).",
      "respostaCerta": "Restringir Edição com proteção por senha",
      "puloDoGato": "A questão pede 'impedir edição permitindo SÓ preenchimento de formulários' — isso é a definição exata de Restringir Edição + seção de formulário.",
      "cascasDeBanana": [
        "Proteger com Assinatura Digital: autentica quem criou, não restringe edição.",
        "Criptografar Documento: bloqueia abertura inteira, não permite formulário — muito restritivo.",
        "Marcar como Final: sinaliza que é versão final, mas usuário consegue desabilitar a marca e editar."
      ],
      "dicaOuro": "Proteção de formulário = Revisão → Restringir Edição → 'Permitir que pessoas apenas preencham campos de formulário'."
    }
  },
  {
    "id": "mo101_q5",
    "text": "Qual opção no Word permite criptografar um documento com senha para impedir abertura não autorizada?",
    "options": [
      "Revisão → Restringir Edição → Senha",
      "Arquivo → Informações → Proteger Documento → Criptografar com Senha",
      "Inserir → Assinatura Digital",
      "Arquivo → Salvar Como → Ferramentas → Opções Gerais"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Criptografar com senha torna o arquivo ilegível sem a senha — é encriptação no nível do arquivo, a abertura fica bloqueada até inserir a chave correta.",
      "papoReto": "Arquivo → Informações → Proteger Documento → Criptografar com Senha abre uma janela para você digitar uma senha. Daí em diante, o arquivo fica encriptado (AES-256 por padrão) — sem a senha correta, o arquivo não abre em nenhum programa Word.",
      "respostaCerta": "Arquivo → Informações → Proteger Documento → Criptografar com Senha",
      "puloDoGato": "Criptografar protege a ABERTURA do arquivo (senha pré-abertura); Restringir Edição (Revisão) protege PARTES do documento já aberto (senha pós-abertura). São dois mecanismos diferentes.",
      "cascasDeBanana": [
        "Revisão → Restringir Edição → Senha: restringe edição de conteúdo, não a abertura do arquivo.",
        "Arquivo → Salvar Como → Ferramentas → Opções Gerais: opção obsoleta de versões antigas (Word 97-2003), não existe no Office 365.",
        "Inserir → Assinatura Digital: autentica origem/integridade do documento, não o criptografa."
      ],
      "dicaOuro": "Criptografia = apertura bloqueada por senha. Localização: Arquivo → Informações → Proteger Documento → Criptografar com Senha."
    }
  },
  {
    "id": "mo101_q6",
    "text": "Onde o usuário pode adicionar metadados como autor, empresa e palavras-chave a um documento Word?",
    "options": [
      "Exibir → Painel de Navegação",
      "Inserir → Cabeçalho e Rodapé",
      "Arquivo → Informações → Propriedades",
      "Layout → Configurar Página"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "As propriedades do documento armazenam metadados — informações sobre o documento (quem criou, quando, empresa, assunto, palavras-chave).",
      "papoReto": "Arquivo → Informações mostra um painel à direita com 'Propriedades' — abre uma caixa onde você preenche Título, Assunto, Palavras-chave, Categoria, Autor e Empresa. Esses dados são embarcados no arquivo e ajudam em buscas/organizações corporativas.",
      "respostaCerta": "Arquivo → Informações → Propriedades",
      "puloDoGato": "Cabeçalho/Rodapé (Inserir) é conteúdo visual no documento; Propriedades é metadados invisíveis (no arquivo, não na página).",
      "cascasDeBanana": [
        "Exibir → Painel de Navegação: mostra estrutura de seções/capítulos do documento, não metadados.",
        "Inserir → Cabeçalho e Rodapé: adiciona texto/números que aparecem no topo/fim de cada página (conteúdo visual).",
        "Layout → Configurar Página: configura margens, orientação, tamanho de papel (formatting de página)."
      ],
      "dicaOuro": "Propriedades = metadados (autor, empresa, palavras-chave). Encontra em: Arquivo → Informações → Propriedades (painel direito)."
    }
  },
  {
    "id": "mo101_q7",
    "text": "Um editor recebeu duas versões de um mesmo documento e precisa identificar todas as diferenças entre elas. Qual recurso do Word deve utilizar?",
    "options": [
      "Inserir → Comentários",
      "Revisão → Controlar Alterações",
      "Revisão → Comparar → Comparar",
      "Exibir → Lado a Lado"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Comparar é um recurso que analisa duas versões de um documento e destaca automaticamente todas as diferenças, como um diff visual.",
      "papoReto": "Revisão → Comparar → Comparar abre uma caixa onde você escolhe o documento original e o documento revisado. O Word então gera um novo documento com todas as diferenças marcadas em cores/barras laterais — texto adicionado, deletado, formatação alterada, tudo fica visível.",
      "respostaCerta": "Revisão → Comparar → Comparar",
      "puloDoGato": "Lado a Lado (Exibir) coloca dois documentos na tela para você comparar visualmente; Comparar (Revisão) faz uma comparação automatizada e gera um relatório com diferenças marcadas — bem mais poderoso.",
      "cascasDeBanana": [
        "Exibir → Lado a Lado: mostra dois documentos abertos lado-a-lado na tela, mas não marca diferenças automaticamente — visual apenas.",
        "Revisão → Controlar Alterações: rastreia edições que você faz AGORA, não compara documentos históricos.",
        "Inserir → Comentários: adiciona notas/observações, não compara versões."
      ],
      "dicaOuro": "Comparar = análise automática de duas versões com diferenças destacadas. Localização: Revisão → Comparar → Comparar."
    }
  },
  {
    "id": "mo101_q8",
    "text": "Qual é a diferença entre as funções \"Comparar\" e \"Combinar\" no menu Revisão do Word?",
    "options": [
      "Comparar é para documentos locais; Combinar é para documentos na nuvem",
      "Combinar cria um PDF; Comparar gera um relatório HTML",
      "Comparar mostra diferenças entre dois documentos; Combinar mescla revisões de múltiplos revisores em um único documento",
      "Ambas têm a mesma função mas com interfaces diferentes"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Comparar e Combinar são duas operações distintas em Revisão, cada uma com um propósito específico.",
      "papoReto": "Comparar toma dois documentos e gera um terceiro mostrando diferenças. Combinar toma vários documentos (muitas vezes, cópias do mesmo arquivo editadas por diferentes revisores, cada uma com Controlar Alterações ativo) e os mescla em UM documento único com todas as alterações rastreadas lado-a-lado, permitindo aceitar/rejeitar mudanças de cada revisor. Combinar é essencial em workflows colaborativos.",
      "respostaCerta": "Comparar mostra diferenças entre dois documentos; Combinar mescla revisões de múltiplos revisores em um único documento",
      "puloDoGato": "A pegadinha comum é confundir: Comparar é para dois documentos históricos (versão A vs B, qual é a diferença?). Combinar é para múltiplos editores (João fez v1, Maria fez v2, Pedro fez v3 — mescla tudo).",
      "cascasDeBanana": [
        "Combinar cria um PDF; Comparar gera um relatório HTML: falso — ambas geram documentos .docx nativos.",
        "Comparar é para documentos locais; Combinar é para documentos na nuvem: falso — ambas funcionam com documentos locais/nuvem.",
        "Ambas têm a mesma função mas com interfaces diferentes: falso — funções completamente distintas (análise vs merge)."
      ],
      "dicaOuro": "Comparar = diff entre 2 docs. Combinar = merge de múltiplas cópias editadas. Ambas em Revisão → Comparar."
    }
  },
  {
    "id": "mo101_q9",
    "text": "Um gerente quer aceitar todas as alterações rastreadas de um documento de uma só vez. Qual sequência deve seguir?",
    "options": [
      "Revisão → Comentários → Resolver Todos",
      "Revisão → Controlar Alterações → Finalizar",
      "Arquivo → Informações → Aceitar Revisões",
      "Revisão → Aceitar → Aceitar Todas as Alterações"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Quando Controlar Alterações está ativo, todas as mudanças ficam marcadas. Para aplicar todas de uma vez, usamos Aceitar Todas as Alterações.",
      "papoReto": "Revisão → Aceitar → Aceitar Todas as Alterações processa de uma só vez todas as mudanças rastreadas no documento, incorporando-as ao texto sem as marcações visuais. É diferente de aceitar uma por uma — essa ação em massa é muito mais rápida para documentos com centenas de alterações.",
      "respostaCerta": "Revisão → Aceitar → Aceitar Todas as Alterações",
      "puloDoGato": "Aceitar (individual) vs Aceitar Todas (em massa) — ambas estão em Revisão, mas 'Todas' está no botão com seta/dropdown.",
      "cascasDeBanana": [
        "Revisão → Controlar Alterações → Finalizar: desativa o rastreamento, não aceita alterações já feitas.",
        "Arquivo → Informações → Aceitar Revisões: caminho incorreto (não existe em versão moderna).",
        "Revisão → Comentários → Resolver Todos: resolve comentários (feedback), não alterações rastreadas."
      ],
      "dicaOuro": "Aceitar Todas = Revisão → Aceitar (botão com dropdown) → Aceitar Todas as Alterações."
    }
  },
  {
    "id": "mo101_q10",
    "text": "Um administrador precisa garantir que o Controle de Alterações não possa ser desativado por outros usuários em um documento compartilhado. Qual recurso deve configurar?",
    "options": [
      "Marcar Documento como Final",
      "Criptografar com senha de abertura",
      "Compartilhar com permissão somente leitura no SharePoint",
      "Restringir Edição com a opção \"Controlar alterações\" bloqueada por senha"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Para evitar que usuários desativem o Controle de Alterações (e editem sem rastreamento), precisa-se uma proteção que seja impossível de contornar sem a senha.",
      "papoReto": "Revisão → Restringir Edição abre um painel onde você marca 'Pessoas podem editar apenas as seguintes seções sem senha' E marca a opção especial de 'Controlar alterações' para ficar obrigatório. Com uma senha de proteção, o usuário não conseguirá desativar o rastreamento nem editar fora das seções permitidas.",
      "respostaCerta": "Restringir Edição com a opção \"Controlar alterações\" bloqueada por senha",
      "puloDoGato": "Simplesmente ativar Controlar Alterações não impede usuário de desativar — precisa de Restringir Edição + senha para tornar obrigatório.",
      "cascasDeBanana": [
        "Marcar Documento como Final: apenas sinaliza que é versão final; usuário consegue desabilitar a marca.",
        "Criptografar com senha de abertura: bloqueia abertura inteira, mas não força rastreamento — documento aberto fica sem restrição.",
        "Compartilhar com permissão somente leitura no SharePoint: impede edição toda, não força rastreamento (muito restritivo)."
      ],
      "dicaOuro": "Bloquear Controlar Alterações = Revisão → Restringir Edição → marcar 'Controlar alterações' + senha."
    }
  },
  {
    "id": "mo101_q11",
    "text": "O que é um Estilo no Microsoft Word?",
    "options": [
      "Um conjunto de formatações salvas que pode ser aplicado rapidamente a texto ou parágrafos",
      "Um tema visual que altera cores e fontes do documento inteiro",
      "Um modelo de documento com layout pré-definido",
      "Uma macro que formata texto automaticamente"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Estilos e Modelos",
    "explanation": {
      "intro": "Um Estilo é um conjunto nomeado de formatações (fonte, tamanho, cor, espaçamento, alinhamento) que você pode salvar e aplicar de uma só vez.",
      "papoReto": "Ao invés de selecionar texto e manualmente fazer Ariel 12pt negrito com espaçamento 1,5, você cria um Estilo chamado 'Parágrafo Normal' com tudo pronto. Daí aplica em um clique — e se mudar a definição do estilo, todos os parágrafos com esse estilo atualizam automaticamente.",
      "respostaCerta": "Um conjunto de formatações salvas que pode ser aplicado rapidamente a texto ou parágrafos",
      "puloDoGato": "Tema (Design) altera cores e efeitos de TODA a palheta do doc; Estilo é para parágrafos/caracteres específicos. Não confunda.",
      "cascasDeBanana": [
        "Um tema visual: altera a paleta de cores/fontes do documento inteiro, não é aplicável por parágrafo.",
        "Um modelo com layout: .dotx pré-definido é mais abrangente — estilo é só uma parte disso.",
        "Uma macro: é código VBA, não um conjunto de formatações."
      ],
      "dicaOuro": "Estilo = formatações salvas reutilizáveis. Aplicar Estilo = Ctrl+S select + galeria estilos (ou Ctrl+Shift+S)."
    }
  },
  {
    "id": "mo101_q12",
    "text": "Um usuário criou um estilo personalizado e deseja que ele esteja disponível em todos os novos documentos. O que deve fazer?",
    "options": [
      "Salvar o documento como .dotx e compartilhar",
      "Salvar o estilo no modelo Normal.dotm",
      "Exportar o estilo como arquivo .css",
      "Copiar o estilo para a galeria de temas"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Estilos e Modelos",
    "explanation": {
      "intro": "Normal.dotm é o modelo padrão do Word que todos os novos documentos herdam. Qualquer estilo salvo nele fica disponível globalmente.",
      "papoReto": "Para fazer um estilo aparecer em TODOS os documentos futuros, você precisa salvá-lo no arquivo modelo padrão: Normal.dotm. Abra Normal.dotm, crie o estilo lá, salve. Daí em diante, novo documento + novo estilo automático. Se só salvar em um documento .dotx, o estilo fica restrito a que usar aquele template.",
      "respostaCerta": "Salvar o estilo no modelo Normal.dotm",
      "puloDoGato": "Não confunda: .dotx compartilhado é para UMA série de documentos que usam aquele template; Normal.dotm é para TUDO globalmente.",
      "cascasDeBanana": [
        "Salvar como .dotx e compartilhar: restringe o estilo a quem usa aquele template específico, não globalmente.",
        "Exportar como .css: Word não exporta estilos em CSS — é formato Office.",
        "Copiar para galeria de temas: temas são Design, não estilos de parágrafo."
      ],
      "dicaOuro": "Estilo global = Arquivo → Abrir → Normal.dotm → Criar/Salvar estilo lá."
    }
  },
  {
    "id": "mo101_q13",
    "text": "Qual recurso permite copiar estilos de um documento para outro no Word?",
    "options": [
      "Salvar Como Modelo e abrir no destino",
      "Copiar e Colar Formatação com o Pincel",
      "Temas → Salvar Tema Atual",
      "Gerenciar Estilos → Importar/Exportar"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Estilos e Modelos",
    "explanation": {
      "intro": "Gerenciar Estilos é um painel lateral que abre uma caixa de diálogo com botões de Importar/Exportar para transferir estilos entre documentos.",
      "papoReto": "Abra Inicial → Estilos → Gerenciar Estilos (ícone com 3 linhas + seta no canto inferior). No painel direito, encontre o botão de menu (3 pontos) e selecione 'Importar/Exportar Estilos'. Uma caixa de diálogo abre para você escolher os estilos a copiar e o arquivo destino.",
      "respostaCerta": "Gerenciar Estilos → Importar/Exportar",
      "puloDoGato": "Pincel (Format Painter) copia formatação visual de texto, não estilos nomeados — são coisas diferentes.",
      "cascasDeBanana": [
        "Pincel: copia formatação visual, não estilos reutilizáveis.",
        "Salvar como Modelo: cria um .dotx, não copia estilos entre docs abertos.",
        "Tema → Salvar: Salva palheta de cores, não estilos de parágrafo."
      ],
      "dicaOuro": "Copiar estilos entre docs = Inicial → Estilos → Gerenciar Estilos → menu (3 pontos) → Importar/Exportar."
    }
  },
  {
    "id": "mo101_q14",
    "text": "Um usuário precisa que ao modificar o estilo \"Título 1\" todas as ocorrências no documento sejam atualizadas automaticamente. Qual configuração do estilo garante esse comportamento?",
    "options": [
      "Ativar \"Atualizar automaticamente\" nas propriedades do estilo",
      "Usar Localizar e Substituir com formatação",
      "Usar macro para reaplica o estilo manualmente",
      "Aplicar tema diferente ao documento"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Estilos e Modelos",
    "explanation": {
      "intro": "Por padrão, estilos no Word já herdam mudanças — se editar Título 1, todos Título 1 atualizam. A opção \"Atualizar automaticamente\" existe para casos especiais.",
      "papoReto": "Na verdade, o Word atualiza estilos por padrão — modificar a definição de Título 1 propaga para todo o doc. Mas há um checkbox nas propriedades do estilo (clicar direito → Modificar) chamado 'Atualizar automaticamente', que força atualização de base (útil com estilos baseados em caracteres).",
      "respostaCerta": "Ativar \"Atualizar automaticamente\" nas propriedades do estilo",
      "puloDoGato": "A pegadinha é que MUITOS usuários não sabem que estilos atualizam automaticamente — pensam que é coisa manual.",
      "cascasDeBanana": [
        "Localizar/Substituir: é manual, não automático.",
        "Macro: desnecessária — Word já faz automaticamente.",
        "Tema diferente: altera cores/fontes, não a relação de herança."
      ],
      "dicaOuro": "Estilos atualizam POR PADRÃO no Word — modificar o estilo = todos os parágrafos com esse estilo já mudam."
    }
  },
  {
    "id": "mo101_q15",
    "text": "Qual extensão de arquivo corresponde a um modelo do Word habilitado para macros?",
    "options": [
      ".dotx",
      ".docm",
      ".docx",
      ".dotm"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Estilos e Modelos",
    "explanation": {
      "intro": "A extensão .dotm = DOT (template) + M (macro-enabled) — é a extensão de um modelo que contém VBA ou macros.",
      "papoReto": ".dotm permite guardar VBA/macros dentro do modelo. Quando você cria um novo documento a partir desse .dotm, as macros vêm junto. Sem o 'm', .dotx é um modelo seguro (sem macros).",
      "respostaCerta": ".dotm",
      "puloDoGato": "Não confunda: .docm é documento COM macros; .dotm é TEMPLATE COM macros. O 'dot' indica template, não documento.",
      "cascasDeBanana": [
        ".docm: documento (não template) com macros — herança, não modelo-base.",
        ".dotx: template sem macros (seguro).",
        ".docx: documento padrão sem macros."
      ],
      "dicaOuro": ".dotm = template + macros. Lembre: dot=template, 'm'=macro-enabled."
    }
  },
  {
    "id": "mo101_q16",
    "text": "Um usuário deseja criar um modelo corporativo que inclua logotipo, estilos personalizados e macros, disponível para toda a equipe. Qual é a melhor abordagem?",
    "options": [
      "Usar o SharePoint para publicar um documento .docx padrão",
      "Salvar como .docx e compartilhar via e-mail",
      "Criar um arquivo .dotm com os elementos desejados e armazenar na pasta de modelos compartilhada da rede",
      "Criar um tema do Office e distribuir via OneDrive"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Estilos e Modelos",
    "explanation": {
      "intro": "Um modelo corporativo com logotipo, estilos E macros precisa ser um .dotm salvo na pasta correta para que apareça automaticamente na galeria de modelos de todos.",
      "papoReto": "Salvar como .dotm + colocar em \\\\servidor\\pasta_modelos (atalho que IT configura em Arquivo → Opções → Locais de Arquivo → Modelos de Usuário ou StartupPath) faz o template aparecer automaticamente no painel de novos documentos de TODOS que tiverem acesso à pasta. Novos docs criados a partir dele herdam logotipo, estilos e macros.",
      "respostaCerta": "Criar um arquivo .dotm com os elementos desejados e armazenar na pasta de modelos compartilhada da rede",
      "puloDoGato": "Tema (Design) só altera cores/fontes, não inclui macros nem logotipos. SharePoint/.docx são documentos, não templates.",
      "cascasDeBanana": [
        ".docx por email: usuários criam documentos, não templates — cada um precisa do arquivo.",
        "Tema via OneDrive: apenas palheta visual (cores/fontes).",
        "SharePoint .docx: gerencia documentos, não templates corporativos."
      ],
      "dicaOuro": "Modelo corporativo = .dotm salvo em pasta de modelos compartilhada (Arquivo → Opções → Locais de Arquivo → Modelos de Usuário)."
    }
  },
  {
    "id": "mo101_q17",
    "text": "Qual é o pré-requisito para gerar um Sumário Automático no Word?",
    "options": [
      "Os títulos do documento devem estar formatados com estilos de Título (Título 1, Título 2, etc.)",
      "O documento deve ter pelo menos 10 páginas",
      "O documento deve estar salvo no formato .pdf",
      "Os títulos devem ser digitados em maiúsculas"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Estilos e Modelos",
    "explanation": {
      "intro": "Sumário Automático funciona identificando títulos no documento — Word procura especificamente pelos estilos Título 1, Título 2, etc.",
      "papoReto": "Para gerar Sumário (Referências → Sumário), você PRECISA ter títulos formatados com estilos de Título. Não é sobre o arquivo ser .pdf ou ter maiúscula — é estrutural. Se os títulos forem texto comum (nem que você tenha feito negrito), o Sumário não encontra nada.",
      "respostaCerta": "Os títulos do documento devem estar formatados com estilos de Título (Título 1, Título 2, etc.)",
      "puloDoGato": "Muitos usuários fórmulam título manualmente em BOLD e acham que é 'Título' — precisa ser aplicado o Estilo 'Título 1' via galeria de estilos.",
      "cascasDeBanana": [
        "10 páginas: sumário funciona em documentos pequenos também.",
        "Maiúsculas: caso não importa — a estrutura sim.",
        ".pdf: sumário é gerado em .docx; PDF é apenas exportação final."
      ],
      "dicaOuro": "Sumário = estrutura de estilos de Título. Sem Título 1/2/3, sem sumário."
    }
  },
  {
    "id": "mo101_q18",
    "text": "Como um usuário atualiza um Sumário Automático após adicionar novas seções ao documento?",
    "options": [
      "Pressionar Ctrl+S para salvar e o sumário atualiza automaticamente",
      "Excluir e reinserir o sumário manualmente",
      "Clicar com o botão direito no sumário e selecionar \"Atualizar Campo\"",
      "Usar Revisão → Atualizar Documento"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Estilos e Modelos",
    "explanation": {
      "intro": "Sumário é um 'campo' (field) dinâmico no Word — para refletir mudanças nos títulos, você precisa atualizar manualmente.",
      "papoReto": "Clique direito no sumário → Atualizar Campo abre uma caixa pedindo se quer atualizar só números de página ou TODO o sumário. Escolha 'Atualizar todo o sumário' e pronto — títulos adicionados/deletados aparecerão.",
      "respostaCerta": "Clicar com o botão direito no sumário e selecionar \"Atualizar Campo\"",
      "puloDoGato": "Ctrl+S salva o arquivo, não atualiza campos — são dois conceitos diferentes.",
      "cascasDeBanana": [
        "Salvar (Ctrl+S): persiste arquivo, não atualiza campos.",
        "Excluir/reinserir: funciona, mas é manual — ineficiente.",
        "Revisão → Atualizar Documento: atualiza links/campos todo, mas é mais pesado."
      ],
      "dicaOuro": "Atualizar Sumário = clique direito → Atualizar Campo → Atualizar todo o sumário."
    }
  },
  {
    "id": "mo101_q19",
    "text": "Um usuário precisa que o Sumário exiba apenas os níveis Título 1 e Título 2, excluindo o Título 3. Como deve configurar?",
    "options": [
      "Usar Localizar e Substituir para remover entradas de nível 3",
      "Alterar o estilo Título 3 para um estilo sem nível de estrutura de tópicos",
      "Referências → Sumário → Sumário Personalizado → definir \"Mostrar níveis\" como 2",
      "Excluir manualmente as entradas de Título 3 do sumário"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Estilos e Modelos",
    "explanation": {
      "intro": "A opção 'Mostrar níveis' em Sumário Personalizado controla quantos níveis de hierarquia o Word exibe no sumário.",
      "papoReto": "Referências → Sumário → (menu dropdown) → Sumário Personalizado abre uma caixa com 'Mostrar níveis' — mude de 3 para 2. Pronto: Título 1 e 2 aparecem, Título 3 fica oculto no sumário (não do documento — continua lá).",
      "respostaCerta": "Referências → Sumário → Sumário Personalizado → definir \"Mostrar níveis\" como 2",
      "puloDoGato": "Não confunda: 'Mostrar níveis' controla QUANTOS níveis exibir. Alterar o estilo Título 3 afeta todo o documento, não só o sumário.",
      "cascasDeBanana": [
        "Localizar/Substituir: altera conteúdo do documento, não a exibição do sumário.",
        "Alterar estilo Título 3: muda estrutura visual do doc inteiro.",
        "Excluir manualmente: edição manual, não configuração de filtro."
      ],
      "dicaOuro": "Mostrar níveis = Referências → Sumário → Sumário Personalizado (personalizado) → campo numérico 'Mostrar níveis'."
    }
  },
  {
    "id": "mo101_q20",
    "text": "O que um Tema do Office modifica em um documento Word?",
    "options": [
      "Apenas o cabeçalho e rodapé",
      "As configurações de impressão e layout",
      "Apenas as margens e o tamanho do papel",
      "Cores, fontes e efeitos visuais do documento"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Estilos e Modelos",
    "explanation": {
      "intro": "Um Tema (Design) é uma palheta coordenada de cores, fontes e efeitos que se aplica ao documento inteiro.",
      "papoReto": "Design → Temas permite escolher temas pré-definidos (ex: Ion, Office Classic, Ubuntu). Isso muda as cores de TUDO (títulos, gráficos, formas) e as fontes dos estilos (Título muda de Arial para, digamos, Calibri). É uma mudança VISUAL/ESTÉTICA, não estrutural (margens/layout permanecem iguais).",
      "respostaCerta": "Cores, fontes e efeitos visuais do documento",
      "puloDoGato": "Tema não altera margens, cabeçalho/rodapé, impressão — isso fica igual. Tema = só cor e fonte.",
      "cascasDeBanana": [
        "Cabeçalho/rodapé: controlados por Inserir → Cabeçalho e Rodapé, não tema.",
        "Margens/papel: Layout → Margens e Tamanho do Papel.",
        "Impressão: arquivo → Imprimir → configurações, não tema."
      ],
      "dicaOuro": "Tema = Design → Temas → altera cores + fontes. Pronto."
    }
  },
  {
    "id": "mo101_q21",
    "text": "Qual é a diferença entre Nota de Rodapé e Nota de Fim no Word?",
    "options": [
      "Nota de Rodapé é numerada; Nota de Fim usa letras",
      "Nota de Rodapé é para citações; Nota de Fim é para comentários do autor",
      "Não há diferença funcional entre elas",
      "Nota de Rodapé aparece no final da página; Nota de Fim aparece no final do documento ou seção"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Referências",
    "explanation": {
      "intro": "Rodapé (Footnote) e Fim (Endnote) são dois tipos de anotações — a diferença é ONDE aparecem na página.",
      "papoReto": "Nota de Rodapé aparece ao pé da PÁGINA atual (fim da página em que o número está). Nota de Fim aparece ao final do DOCUMENTO inteiro ou da SEÇÃO. Ambas podem usar números ou letras — não importa.",
      "respostaCerta": "Nota de Rodapé aparece no final da página; Nota de Fim aparece no final do documento ou seção",
      "puloDoGato": "Usuários confundem porque ambas têm o mesmo nome e numeração parecida. Chave: Rodapé = pé da página, Fim = fim do doc.",
      "cascasDeBanana": [
        "Numeração diferente (números vs letras): falso — ambas podem usar qualquer formato.",
        "Rodapé para citações, Fim para comentários: falso — uso é idêntico, só local muda.",
        "Não há diferença funcional: falso — local é bem diferente (página vs documento)."
      ],
      "dicaOuro": "Rodapé = foot of page. Fim = end of document. Só o LOCAL muda."
    }
  },
  {
    "id": "mo101_q22",
    "text": "Um usuário deseja converter todas as Notas de Rodapé de um documento em Notas de Fim. Qual caminho deve seguir?",
    "options": [
      "Localizar e Substituir cada nota manualmente",
      "Não é possível converter automaticamente no Word",
      "Excluir as notas de rodapé e reinserir como notas de fim",
      "Referências → Notas de Rodapé (menu de diálogo) → Converter → Converter todas as notas de rodapé em notas de fim"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Referências",
    "explanation": {
      "intro": "O Word permite converter em lote TODAS as notas de rodapé para fim de uma só vez, sem perder conteúdo.",
      "papoReto": "Referências → (seta pequena no grupo Notas de Rodapé) → abre diálogo → botão 'Converter' → escolha 'Converter todas as notas de rodapé em notas de fim' → pronto. Todas as notas passam de pé-de-página para fim-de-documento automaticamente.",
      "respostaCerta": "Referências → Notas de Rodapé (menu de diálogo) → Converter → Converter todas as notas de rodapé em notas de fim",
      "puloDoGato": "Existe conversão automática no Word — muita gente acha que não existe e deleta/reinsere manualmente (desnecessário).",
      "cascasDeBanana": [
        "Localizar/Substituir: não funciona para notas — estrutura especial.",
        "Excluir e reinserir: manual, ineficiente.",
        "Não é possível: falso — existe sim, em Referências."
      ],
      "dicaOuro": "Converter notas = Referências → (seta do grupo) → Converter → 'Converter todas as notas de rodapé em notas de fim'."
    }
  },
  {
    "id": "mo101_q23",
    "text": "Qual estilo de citação é comumente usado em documentos acadêmicos das ciências humanas e sociais no Word?",
    "options": [
      "APA (American Psychological Association)",
      "MLA",
      "Chicago",
      "IEEE"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Referências",
    "explanation": {
      "intro": "APA é o padrão de citação criado pela American Psychological Association — amplamente usado em humanidades e ciências sociais (psicologia, educação, sociologia).",
      "papoReto": "APA usa formato (Autor, Ano) no texto e uma lista alfabética de Referências no fim. IEEE é para engenharia (numérico). Chicago é alternativo para história. MLA é principalmente para literatura em inglês.",
      "respostaCerta": "APA (American Psychological Association)",
      "puloDoGato": "APA é praticamente SINÔNIMO de \"humanidades/ciências sociais\" — se a questão fala desse contexto, pense APA.",
      "cascasDeBanana": [
        "IEEE: para engenharia e tecnologia — numérico [1], [2]...",
        "MLA: para literatura/inglês — usa letras/nomes.",
        "Chicago: alternativa menos comum em ciências sociais."
      ],
      "dicaOuro": "APA = humanidades. IEEE = engenharia. MLA = literatura. Chicago = história."
    }
  },
  {
    "id": "mo101_q24",
    "text": "Após inserir todas as fontes em um documento, qual é o passo para gerar automaticamente a lista de referências no Word?",
    "options": [
      "Revisão → Verificar Citações → Gerar Referências",
      "Inserir → Referências Cruzadas → Gerar Lista",
      "Referências → Bibliografia → selecionar o formato desejado",
      "Arquivo → Exportar → Gerar Bibliografia"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Referências",
    "explanation": {
      "intro": "Após inserir citações no documento (via Inserir Citação), a bibliografia se gera automaticamente em um lugar que você escolher.",
      "papoReto": "Referências → Bibliografia (não é listas cruzadas, é a seção de Citações) → escolha um formato de estilo (APA, MLA, etc.) → pronto. O Word gera a lista de referências ordenada no local do cursor.",
      "respostaCerta": "Referências → Bibliografia → selecionar o formato desejado",
      "puloDoGato": "Referências Cruzadas é para apontar para figuras/tabelas. Citação é para artigos/livros. Dois recursos diferentes.",
      "cascasDeBanana": [
        "Referências Cruzadas: aponta para figuras/tabelas, não faz bibliog.",
        "Revisão → Verificar: ferramentas de edição, não geração de refs.",
        "Arquivo → Exportar: salva o documento, não gera bibliog."
      ],
      "dicaOuro": "Gerar referências = Referências → Bibliografia (dropdown de estilos)."
    }
  },
  {
    "id": "mo101_q25",
    "text": "Um usuário inseriu várias figuras em um documento e quer que cada uma tenha numeração automática. Qual recurso deve usar?",
    "options": [
      "Referências → Inserir Legenda",
      "Layout → Numeração de Figuras",
      "Inserir → Objeto → Número Automático",
      "Inserir → Caixa de Texto com número manual"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Referências",
    "explanation": {
      "intro": "Legenda é texto descritivo (ex: \"Figura 1: Gráfico de vendas\") automaticamente numerado pelo Word.",
      "papoReto": "Selecione a figura → Referências → Inserir Legenda → preencha o texto → escolha tipo (Figura, Tabela, Equação) → pronto. Word numera automaticamente e permite gerar um índice de figuras depois.",
      "respostaCerta": "Referências → Inserir Legenda",
      "puloDoGato": "Caixa de Texto manual não cria número automático — se adicionar outra figura, a numeração fica manual (problema).",
      "cascasDeBanana": [
        "Caixa de Texto manual: numeração não automática — quebra facilmente.",
        "Layout → Numeração: não existe esse caminho/recurso.",
        "Inserir → Objeto: muito genérico, não é o recurso correto."
      ],
      "dicaOuro": "Legendas = Referências → Inserir Legenda. Numeração automática e atualizável."
    }
  },
  {
    "id": "mo101_q26",
    "text": "Um usuário precisa criar uma referência cruzada no texto que aponte para a figura 3 do documento e atualize automaticamente se a numeração mudar. Qual recurso usa?",
    "options": [
      "Inserir → Indicador com link para a figura",
      "Referências → Referência Cruzada → Figura → Número de Legenda",
      "Hyperlink interno apontando para a figura",
      "Nota de Rodapé referenciando a figura"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Referências",
    "explanation": {
      "intro": "Referência Cruzada insere no texto um campo dinâmico que aponta para figura/tabela/seção com número que atualiza automaticamente.",
      "papoReto": "Referências → Referência Cruzada → escolha o tipo (Figura) → escolha a legenda específica (Figura 3) → escolha formato (Número de Legenda = só \"3\") → OK. No texto aparecerá \"3\", e se a numeração de figuras mudar, isso atualiza também.",
      "respostaCerta": "Referências → Referência Cruzada → Figura → Número de Legenda",
      "puloDoGato": "Hyperlink é estático (link clicável). Ref Cruzada é campo dinâmico que reflete mudanças de numeração — bem diferente.",
      "cascasDeBanana": [
        "Hyperlink: aponta estaticamente, não atualiza com mudanças de numeração.",
        "Indicador: marca um ponto, não cria referência automática.",
        "Nota de Rodapé: anotação, não referência."
      ],
      "dicaOuro": "Ref Cruzada = campo dinâmico a figura/tabela. Localização: Referências → Referência Cruzada."
    }
  },
  {
    "id": "mo101_q27",
    "text": "Qual é o processo correto para criar um Índice Remissivo no Word?",
    "options": [
      "Copiar os termos para uma tabela e ordenar alfabeticamente",
      "Marcar entradas com \"Marcar Entrada\" (Alt+Shift+X) e depois inserir o índice via Referências → Inserir Índice",
      "Digitar manualmente o índice no final do documento",
      "Usar o Sumário Automático com estilos de índice"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Referências",
    "explanation": {
      "intro": "Índice Remissivo (Index) é uma lista alfabética de palavras-chave do documento com página — diferente de Sumário que usa títulos.",
      "papoReto": "Workflow: (1) Selecione uma palavra ou termo no doc → Alt+Shift+X (Marcar Entrada) → adicione variantes se quiser → OK (com XE { } fields criados). (2) Depois, no final do doc, Referências → Inserir Índice → escolha formato → OK. Word gera a lista alfabética com páginas.",
      "respostaCerta": "Marcar entradas com \"Marcar Entrada\" (Alt+Shift+X) e depois inserir o índice via Referências → Inserir Índice",
      "puloDoGato": "Sumário usa TÍTULOS (estrutura). Índice usa PALAVRAS MARCADAS (conteúdo). Bem diferentes.",
      "cascasDeBanana": [
        "Manual/tabela: muito trabalho, numeração de página fica errada após edições.",
        "Sumário com estilos de índice: sumário não trabalha com palavras marcadas — usa títulos.",
        "Copiar/ordenar: sem automação, perde-se nas edições."
      ],
      "dicaOuro": "Índice = Alt+Shift+X (marcar) + Referências → Inserir Índice (gerar)."
    }
  },
  {
    "id": "mo101_q28",
    "text": "Um usuário marcou entradas de índice em um documento mas percebe que o índice não reflete as últimas adições. O que deve fazer?",
    "options": [
      "Clicar com o botão direito no índice e selecionar \"Atualizar Campo\"",
      "Excluir e recriar o índice manualmente",
      "Salvar o documento e reabrir",
      "Usar Revisão → Atualizar Documento"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Referências",
    "explanation": {
      "intro": "O Índice é um campo dinâmico — quando adiciona novas entradas marcadas, precisa atualizar manualmente.",
      "papoReto": "Clique direito no Índice → Atualizar Campo → escolha 'Atualizar todo o índice' → pronto. Novas entradas marcadas e mudanças de página se refletem.",
      "respostaCerta": "Clicar com o botão direito no índice e selecionar \"Atualizar Campo\"",
      "puloDoGato": "Salvar não atualiza campos — são dois conceitos. Revisão → Atualizar Documento é para todos os campos, mais pesado.",
      "cascasDeBanana": [
        "Salvar: persiste arquivo, não atualiza campos.",
        "Excluir/recriar: manual, ineficiente.",
        "Revisão → Atualizar Documento: funciona, mas é mais abrangente (overkill)."
      ],
      "dicaOuro": "Atualizar Índice = clique direito → Atualizar Campo."
    }
  },
  {
    "id": "mo101_q29",
    "text": "Qual tipo de controle de conteúdo permite que o usuário selecione uma data em um calendário em um formulário Word?",
    "options": [
      "Controle de Conteúdo de Seletor de Data",
      "Controle de Conteúdo de Imagem",
      "Controle de Conteúdo de Caixa de Combinação",
      "Controle de Conteúdo de Texto Simples"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Formulários e Macros",
    "explanation": {
      "intro": "Seletor de Data é um Controle de Conteúdo que abre um calendário para o usuário escolher uma data clicando.",
      "papoReto": "Em Desenvolvedor → Controles, há um com ícone de calendário: 'Date Picker Content Control'. Insira no formulário → usuário clica → abre calendário interativo → escolhe data → data aparece no campo.",
      "respostaCerta": "Controle de Conteúdo de Seletor de Data",
      "puloDoGato": "Texto Simples não é interativo. Caixa de Combinação é para listas de opções. Imagem é para inserir fotos.",
      "cascasDeBanana": [
        "Texto Simples: usuário digita manualmente (sem validação de formato).",
        "Caixa de Combinação: para listas, não datas.",
        "Imagem: para fotos, não datas."
      ],
      "dicaOuro": "Seletor de Data = Desenvolvedor → Controles (ícone calendário)."
    }
  },
  {
    "id": "mo101_q30",
    "text": "Onde o usuário encontra as ferramentas para inserir controles de conteúdo em um formulário Word?",
    "options": [
      "Guia Layout → grupo Campos",
      "Guia Revisão → grupo Proteger",
      "Guia Desenvolvedor → grupo Controles",
      "Guia Inserir → grupo Formulários"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Formulários e Macros",
    "explanation": {
      "intro": "Guia Desenvolvedor (Developer) é a aba especial para criar formulários avançados com controles interativos.",
      "papoReto": "Se não aparecer a aba Desenvolvedor, ative em Arquivo → Opções → Personalizar Faixa de Opções → marque Desenvolvedor → OK. Depois, Desenvolvedor → grupo Controles mostra todos os controles (Texto, Data, Combo, Checkbox, etc.).",
      "respostaCerta": "Guia Desenvolvedor → grupo Controles",
      "puloDoGato": "Inserir tem Forma/Campo, mas não controles avançados. Layout é para margens/página, não formulários.",
      "cascasDeBanana": [
        "Inserir: não tem controles avançados.",
        "Revisão → Proteger: restrições, não controles.",
        "Layout: páginas/margens, não formulários."
      ],
      "dicaOuro": "Controles = Desenvolvedor (aba especial, ativar em Opções) → grupo Controles."
    }
  },
  {
    "id": "mo101_q31",
    "text": "Um administrador criou um formulário Word e deseja que os usuários preencham apenas os campos designados, sem alterar o restante do documento. Qual configuração deve aplicar?",
    "options": [
      "Criptografar o documento com senha",
      "Restringir Edição → Permitir apenas este tipo de edição → Preenchimento de formulários",
      "Compartilhar com permissão de comentários apenas",
      "Marcar o documento como Final"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Formulários e Macros",
    "explanation": {
      "intro": "Depois de criar controles em um formulário, é crítico bloquear o edição para que usuários preencham APENAS os campos, não o resto.",
      "papoReto": "Revisão → Restringir Edição (ou Arquivar → Informações → Proteger Documento) → marca 'Permitir apenas este tipo de edição' → escolha 'Preenchimento de formulários' → defina senha → OK. Daí em diante, usuários só conseguem preencher os controles — não podem mudar layout/texto fixo.",
      "respostaCerta": "Restringir Edição → Permitir apenas este tipo de edição → Preenchimento de formulários",
      "puloDoGato": "Criptografia bloqueia abertura; Marcar como Final é apenas sinalização (usuário consegue desabilitar); Restringir Edição com formulários é a proteção real.",
      "cascasDeBanana": [
        "Criptografar: bloqueia abertura toda, não só edição de conteúdo.",
        "Marcar como Final: sinalização, usuário consegue desabilitar.",
        "Comentários: usuário consegue editar tudo, só não comenta."
      ],
      "dicaOuro": "Proteção de formulário = Revisão → Restringir Edição → Preenchimento de formulários."
    }
  },
  {
    "id": "mo101_q32",
    "text": "O que é uma Macro no Microsoft Word?",
    "options": [
      "Uma sequência de comandos gravada que pode ser executada automaticamente para realizar tarefas repetitivas",
      "Um plugin de terceiros para automatização",
      "Um estilo avançado com formatação condicional",
      "Um script Python integrado ao Word"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Formulários e Macros",
    "explanation": {
      "intro": "Macro é um programa gravado em VBA (Visual Basic for Applications) que automatiza tarefas repetitivas no Word.",
      "papoReto": "Exemplo: gravar uma macro que (1) aplica Estilo, (2) insere header, (3) salva — tudo em um clique depois. Macro é GRAVAÇÃO de cliques/ações, não plugin externo, não Python, não estilo.",
      "respostaCerta": "Uma sequência de comandos gravada que pode ser executada automaticamente para realizar tarefas repetitivas",
      "puloDoGato": "Python é linguagem fora do Word. Plugin é programa externo. Macro é VBA nativo do Word.",
      "cascasDeBanana": [
        "Plugin terceiros: software externo, não integrado.",
        "Python: linguagem incompatível com Word.",
        "Estilo avançado: formatação, não lógica programada."
      ],
      "dicaOuro": "Macro = VBA gravado/programado no Word. Automatiza sequência de ações."
    }
  },
  {
    "id": "mo101_q33",
    "text": "Qual guia da faixa de opções deve estar habilitada para gravar e executar macros no Word?",
    "options": [
      "Guia Exibir",
      "Guia Desenvolvedor",
      "Guia Inserir",
      "Guia Revisão"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Formulários e Macros",
    "explanation": {
      "intro": "Guia Desenvolvedor é o hub para programação em Word — macros, controles, editor VBA, tudo lá.",
      "papoReto": "Se não aparecer Desenvolvedor, ativa-se em Arquivo → Opções → Personalizar Faixa → marca Desenvolvedor → OK. Depois, Desenvolvedor → grupo Macros → 'Gravar Macro' ou 'Visual Basic' para criar/editar.",
      "respostaCerta": "Guia Desenvolvedor",
      "puloDoGato": "Inserir é para objetos (tabelas, imagens). Revisão é para edição (comentários, alterações). Exibir é para painéis. Desenvolvedor é PROGRAMAÇÃO.",
      "cascasDeBanana": [
        "Inserir: objetos, não macros.",
        "Revisão: edição, não programação.",
        "Exibir: painéis, não macros."
      ],
      "dicaOuro": "Macros = Desenvolvedor (aba especial, ativar em Opções)."
    }
  },
  {
    "id": "mo101_q34",
    "text": "Um usuário gravou uma macro no Word e deseja que ela esteja disponível em todos os documentos futuros. Onde deve armazená-la?",
    "options": [
      "No OneDrive como arquivo de macro",
      "Em um arquivo .bas exportado",
      "No modelo Normal.dotm (Todos os Documentos)",
      "No documento atual apenas"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Formulários e Macros",
    "explanation": {
      "intro": "Normal.dotm é o modelo padrão — macros lá ficam globalmente acessíveis, como estilos.",
      "papoReto": "Ao gravar macro, a caixa pergunta: 'Guardar macro em?'. Escolha 'Normal.dotm (Todos os Documentos)' → pronto, disponível em QUALQUER doc novo.",
      "respostaCerta": "No modelo Normal.dotm (Todos os Documentos)",
      "puloDoGato": "Documento atual = só nesse arquivo. Normal.dotm = todos futuros. Bem diferente.",
      "cascasDeBanana": [
        "Documento atual: local, não global.",
        ".bas: arquivo externo, difícil distribui.",
        "OneDrive: cloud, sem acesso offline seguro."
      ],
      "dicaOuro": "Macro global = Normal.dotm (modelo padrão)."
    }
  },
  {
    "id": "mo101_q35",
    "text": "Um usuário precisa editar o código VBA de uma macro gravada para adicionar uma condição lógica. Qual ferramenta deve usar?",
    "options": [
      "Editor de Código de AutoCorreção",
      "Editor do Visual Basic (Alt+F11)",
      "Gerenciador de Estilos de Macro",
      "Painel de Navegação de Código VBA"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Formulários e Macros",
    "explanation": {
      "intro": "Editor do Visual Basic (VBE) é o IDE onde você edita, debugga e programa macros em VBA.",
      "papoReto": "Alt+F11 abre a janela VBE. Lá você pode adicionar condições, loops, variáveis — código puro. Ou Desenvolvedor → Visual Basic.",
      "respostaCerta": "Editor do Visual Basic (Alt+F11)",
      "puloDoGato": "AutoCorreção é para substituições automáticas, não edição de macro. Não há 'Gerenciador de Estilos de Macro'.",
      "cascasDeBanana": [
        "AutoCorreção: substituições texto, não VBA.",
        "Estilos de Macro: não existe.",
        "Navegação VBA: ferramentas, mas não é o editor."
      ],
      "dicaOuro": "Editor VBA = Alt+F11 (ou Desenvolvedor → Visual Basic)."
    }
  },
  {
    "id": "mo101_q36",
    "text": "Qual configuração de segurança no Word permite executar macros apenas de fontes confiáveis assinadas digitalmente?",
    "options": [
      "Arquivo → Opções → Central de Confiabilidade → Configurações de Macro → Desabilitar macros exceto as assinadas digitalmente",
      "Guia Desenvolvedor → Segurança → Macros Confiáveis",
      "Revisão → Restringir Edição → Permitir Macros",
      "Arquivo → Informações → Proteger Documento → Habilitar Macros"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Formulários e Macros",
    "explanation": {
      "intro": "Central de Confiabilidade é onde configura políticas de segurança de macro para toda a máquina.",
      "papoReto": "Arquivo → Opções → Central de Confiabilidade → Configurações de Macro → opção 'Desabilitar macros exceto as assinadas digitalmente' garante que SÓ macros com certificado digital válido executem.",
      "respostaCerta": "Arquivo → Opções → Central de Confiabilidade → Configurações de Macro → Desabilitar macros exceto as assinadas digitalmente",
      "puloDoGato": "Arquivo → Informações → Proteger Documento é para criptografia/senha, não macro. Desenvolvedor não tem submenu de segurança.",
      "cascasDeBanana": [
        "Proteger Documento: para criptografia, não macro.",
        "Desenvolvedor: não tem configurações de segurança.",
        "Revisão → Restringir: para edição, não macro."
      ],
      "dicaOuro": "Segurança de macro = Arquivo → Opções → Central de Confiabilidade → Configurações de Macro."
    }
  },
  {
    "id": "mo101_q37",
    "text": "Qual é o primeiro passo para iniciar uma Mala Direta no Word?",
    "options": [
      "Arquivo → Novo → Modelo de Mala Direta",
      "Inserir → Campos → Mala Direta",
      "Correspondências → Iniciar Mala Direta → selecionar o tipo de documento",
      "Revisão → Mala Direta → Configurar Fonte"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Mala Direta",
    "explanation": {
      "intro": "Mala Direta começa escolhendo o tipo de documento (carta, envelope, etiqueta, email, diretório).",
      "papoReto": "Correspondências → Iniciar Mala Direta → dropdown com tipos → escolha (ex: Cartas) → OK. Documento atual vira template de mala direta.",
      "respostaCerta": "Correspondências → Iniciar Mala Direta → selecionar o tipo de documento",
      "puloDoGato": "Inserir → Campos é para adicionar campos DEPOIS. Correspondências → Iniciar é o passo 1. Bem diferente.",
      "cascasDeBanana": [
        "Inserir → Campos: passo 2+, não passo 1.",
        "Arquivo → Novo → Modelo: cria template vazio, não inicia mala direta.",
        "Revisão: para edição, não mala direta."
      ],
      "dicaOuro": "Iniciar Mala Direta = Correspondências → Iniciar Mala Direta (passo 1)."
    }
  },
  {
    "id": "mo101_q38",
    "text": "Quais tipos de documentos podem ser criados com o recurso de Mala Direta no Word?",
    "options": [
      "Apenas documentos PDF e HTML",
      "Apenas envelopes e etiquetas",
      "Apenas cartas e e-mails",
      "Cartas, envelopes, etiquetas, e-mails e diretórios"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Mala Direta",
    "explanation": {
      "intro": "Mala Direta suporta 5 tipos de documentos — cada um usa o template de forma diferente.",
      "papoReto": "Cartas = documento com texto. Envelopes = só endereço. Etiquetas = múltiplas etiquetas por página. E-mails = corpo de email + destinatários. Diretórios = lista formatada (tipo catálogo).",
      "respostaCerta": "Cartas, envelopes, etiquetas, e-mails e diretórios",
      "puloDoGato": "PDF/HTML são formatos de saída (depois de gerar), não tipos iniciais. Nem todos os tipos cobrem PDF/HTML.",
      "cascasDeBanana": [
        "PDF/HTML: formatos, não tipos de documento.",
        "Só cartas: restringe — faltam envelopes, etiquetas.",
        "Só envelopes: restringe — faltam cartas, emails."
      ],
      "dicaOuro": "5 tipos de mala direta: Cartas, Envelopes, Etiquetas, E-mails, Diretórios."
    }
  },
  {
    "id": "mo101_q39",
    "text": "Quais fontes de dados podem ser usadas em uma Mala Direta no Word?",
    "options": [
      "Planilhas Excel, bancos de dados Access, listas do Outlook e arquivos CSV",
      "Apenas bancos de dados SQL Server",
      "Apenas listas do SharePoint",
      "Apenas planilhas Excel"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Mala Direta",
    "explanation": {
      "intro": "Mala Direta aceita múltiplas fontes de dados — qualquer que tenha colunas/linhas é válida.",
      "papoReto": "Excel (tabela com cabeçalhos), Access (tabela de banco), Outlook (contactos), CSV (arquivo texto delimitado). Correspondências → Selecionar Destinatários → escolhe fonte.",
      "respostaCerta": "Planilhas Excel, bancos de dados Access, listas do Outlook e arquivos CSV",
      "puloDoGato": "SQL Server é possível via ODBC, mas não é opção \"nativa/comum\" como as 4 principais. SharePoint também funciona, mas não é tão direto.",
      "cascasDeBanana": [
        "Só Excel: ignora os outros 3.",
        "SQL Server: funciona, mas via ODBC, não direto.",
        "Só SharePoint: funciona, mas não é a mais comum."
      ],
      "dicaOuro": "Principais fontes: Excel, Access, Outlook, CSV."
    }
  },
  {
    "id": "mo101_q40",
    "text": "Um usuário está configurando uma mala direta e percebe que a lista de destinatários tem registros duplicados. Qual recurso do Word permite remover as duplicatas?",
    "options": [
      "Correspondências → Editar Lista de Destinatários → Localizar Duplicatas",
      "Localizar e Substituir com filtro de duplicatas",
      "Dados → Remover Duplicatas (função do Excel)",
      "Revisão → Comparar → Remover Duplicatas"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Mala Direta",
    "explanation": {
      "intro": "Dentro de Mala Direta, há ferramenta própria para detectar/remover duplicatas na lista de destinatários.",
      "papoReto": "Correspondências → Editar Lista de Destinatários (abre diálogo) → botão 'Localizar Duplicatas' → Word marca duplicatas → você marca para deletar → OK.",
      "respostaCerta": "Correspondências → Editar Lista de Destinatários → Localizar Duplicatas",
      "puloDoGato": "Dados (Excel) → Remover Duplicatas é para Excel, não Word. Comparar é para documentos, não listas.",
      "cascasDeBanana": [
        "Dados → Remover: ferramenta Excel, não Word.",
        "Comparar: compara dois docs, não listas.",
        "Localizar/Substituir: não funciona para duplicatas de contato."
      ],
      "dicaOuro": "Remover duplicatas em mala direta = Correspondências → Editar Lista → Localizar Duplicatas."
    }
  },
  {
    "id": "mo101_q41",
    "text": "Como um usuário insere um campo de mesclagem personalizado em um documento de mala direta no Word?",
    "options": [
      "Inserir → Texto Rápido → Campo de Mala Direta",
      "Correspondências → Regras → Inserir Campo",
      "Inserir → Campo → Mesclagem",
      "Correspondências → Inserir Campo de Mesclagem → selecionar o campo da fonte de dados"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Mala Direta",
    "explanation": {
      "intro": "Campo de Mesclagem insere um placeholder no template — na hora de gerar, Word substitui pelo valor real da fonte de dados.",
      "papoReto": "Correspondências → Inserir Campo de Mesclagem (dropdown) → escolha coluna (ex: Nome) → OK. No template aparecerá <<Nome>>, depois substitui por \"João\", \"Maria\", etc.",
      "respostaCerta": "Correspondências → Inserir Campo de Mesclagem → selecionar o campo da fonte de dados",
      "puloDoGato": "Texto Rápido é para blocos de texto pré-salvos, não campos dinâmicos de mala direta.",
      "cascasDeBanana": [
        "Inserir → Campo: genérico, não mesclagem.",
        "Inserir → Texto Rápido: blocos pré-salvos.",
        "Correspondências → Regras: condicionais, não campos simples."
      ],
      "dicaOuro": "Inserir Campo = Correspondências → Inserir Campo de Mesclagem."
    }
  },
  {
    "id": "mo101_q42",
    "text": "Um usuário precisa que o campo de saudação da mala direta exiba \"Sr.\" para homens e \"Sra.\" para mulheres com base em uma coluna \"Gênero\" da fonte de dados. Qual recurso do Word permite isso?",
    "options": [
      "Fórmula condicional no Excel antes da mesclagem",
      "Macro VBA para substituição após mesclagem",
      "Correspondências → Regras → Se...Então...Senão",
      "Correspondências → Inserir Campo de Mesclagem com fórmula"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Mala Direta",
    "explanation": {
      "intro": "Se...Então...Senão é uma regra condicional em mala direta que testa um campo da fonte e executa ações diferentes.",
      "papoReto": "Correspondências → Regras (dropdown) → Se...Então...Senão → define: if Gênero = \"M\" then \"Sr.\" else \"Sra.\" → OK. Automático, sem Excel/VBA.",
      "respostaCerta": "Correspondências → Regras → Se...Então...Senão",
      "puloDoGato": "Excel fórmula é antes de conectar Word; Regra em Word é durante a mala direta — diferença crítica.",
      "cascasDeBanana": [
        "Excel: fórmula condicionada antes da mesclagem.",
        "Macro: após mesclagem, manual.",
        "Campo com fórmula: campos não suportam if/then no MERGEFIELD básico."
      ],
      "dicaOuro": "Condicional na mala direta = Correspondências → Regras → Se...Então...Senão."
    }
  },
  {
    "id": "mo101_q43",
    "text": "Qual regra de mala direta no Word permite pular um registro e passar para o próximo com base em uma condição?",
    "options": [
      "Mesclar Sequência (Merge Sequence)",
      "Definir Indicador (Set Bookmark)",
      "Ignorar Registro Se (Skip Record If)",
      "Próximo Registro Se (Next Record If)"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Mala Direta",
    "explanation": {
      "intro": "Skip Record If pula um registro inteiro se uma condição for verdadeira — não gera documento para esse destinatário.",
      "papoReto": "Correspondências → Regras → Ignorar Registro Se → if Status = \"Inativo\" → pronto, registros inativos não geram documento.",
      "respostaCerta": "Ignorar Registro Se (Skip Record If)",
      "puloDoGato": "Não confunda: \"Próximo Registro\" não existe. \"Skip\" pula REGISTRO (pula linha na fonte). Se...Então...Senão muda TEXTO.",
      "cascasDeBanana": [
        "Próximo Registro Se: não existe essa regra.",
        "Definir Indicador: marca local no doc, não pula registro.",
        "Mesclar Sequência: numera registros, não pula."
      ],
      "dicaOuro": "Pular registro = Correspondências → Regras → Ignorar Registro Se."
    }
  },
  {
    "id": "mo101_q44",
    "text": "Antes de finalizar uma mala direta, um usuário quer revisar como cada documento ficará para destinatários específicos. Qual recurso usa?",
    "options": [
      "Arquivo → Imprimir → Visualizar Impressão por destinatário",
      "Revisão → Controlar Alterações → Visualizar por Autor",
      "Correspondências → Visualizar Resultados → navegar pelos registros",
      "Exibir → Modo de Leitura com filtro de destinatário"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Mala Direta",
    "explanation": {
      "intro": "Visualizar Resultados mostra o template com dados **reais** de cada destinatário — prévia antes de finalizar.",
      "papoReto": "Correspondências → Visualizar Resultados (liga o botão) → usa setas para navegar entre registros → vê como ficará cada documento.",
      "respostaCerta": "Correspondências → Visualizar Resultados → navegar pelos registros",
      "puloDoGato": "Imprimir visualiza, mas é a última etapa. Visualizar Resultados é pré-revisão, antes de imprimir/enviar.",
      "cascasDeBanana": [
        "Imprimir: última etapa, não pré-revisão.",
        "Modo de Leitura: visualiza doc, sem navegação de registros.",
        "Controlar Alterações: rastreia edições, não mostra mesclagem."
      ],
      "dicaOuro": "Pré-visualizar mala direta = Correspondências → Visualizar Resultados."
    }
  },
  {
    "id": "mo101_q45",
    "text": "Um usuário deseja finalizar a mala direta enviando os documentos diretamente por e-mail para cada destinatário. Qual opção deve usar?",
    "options": [
      "Arquivo → Compartilhar → Enviar por Email",
      "Inserir → Hyperlink → Email em Massa",
      "Correspondências → Concluir e Mesclar → Enviar Mensagens de Email",
      "Correspondências → Concluir e Mesclar → Imprimir Documentos"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Mala Direta",
    "explanation": {
      "intro": "Concluir e Mesclar → Enviar Email finaliza a mala direta enviando cada documento mesclado como email.",
      "papoReto": "Correspondências → Concluir e Mesclar → Enviar Mensagens de Email → escolhe campo de email → Word abre sua conta de email e envia cada documento como anexo/corpo.",
      "respostaCerta": "Correspondências → Concluir e Mesclar → Enviar Mensagens de Email",
      "puloDoGato": "Arquivo → Compartilhar é para um doc, não mala direta. Concluir e Mesclar é mala-direta-específico.",
      "cascasDeBanana": [
        "Compartilhar: um documento, não automação.",
        "Imprimir: saída física, não email.",
        "Hyperlink: link, não email automático."
      ],
      "dicaOuro": "Enviar mala direta por email = Correspondências → Concluir e Mesclar → Enviar Mensagens de Email."
    }
  },
  {
    "id": "mo101_q46",
    "text": "Um usuário precisa criar etiquetas de endereçamento para 500 clientes usando uma planilha Excel como fonte. Qual sequência deve seguir?",
    "options": [
      "Layout → Margens → configurar para etiqueta → copiar e colar dados do Excel",
      "Correspondências → Iniciar Mala Direta → Etiquetas → selecionar tipo de etiqueta → conectar à fonte Excel → inserir campos → concluir e mesclar",
      "Inserir → Tabela → formatar como etiqueta → digitar manualmente",
      "Correspondências → Envelopes → importar lista do Excel"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Mala Direta",
    "explanation": {
      "intro": "Etiquetas em mala direta = template de etiqueta + dados da fonte Excel = múltiplas etiquetas por página, cada uma preenchida.",
      "papoReto": "Correspondências → Iniciar Mala Direta → Etiquetas → escolha tipo (Avery 5160, etc) → selecione fonte Excel → insira campos (Nome, Rua, etc) → Concluir e Mesclar → Imprimir. Pronto: 500 etiquetas prontas.",
      "respostaCerta": "Correspondências → Iniciar Mala Direta → Etiquetas → selecionar tipo de etiqueta → conectar à fonte Excel → inserir campos → concluir e mesclar",
      "puloDoGato": "Copiar/colar é manual e sem automação. Mala direta = automático, sem erros de alinhamento.",
      "cascasDeBanana": [
        "Tabela: manual, sem mesclagem.",
        "Copiar/colar: sem automação.",
        "Envelopes: para cartas, não etiquetas."
      ],
      "dicaOuro": "Etiquetas com Excel = Correspondências → Iniciar Mala Direta → Etiquetas (tipo) → Excel → campos → Concluir."
    }
  },
  {
    "id": "mo101_q47",
    "text": "Um usuário precisa que um campo numérico de valor monetário na mala direta seja exibido com formatação de moeda (R$ 1.500,00). Qual recurso aplica essa formatação ao campo de mesclagem?",
    "options": [
      "Aplicar estilo de célula monetária ao campo no Word",
      "Adicionar chave de formatação numérica ao campo: { MERGEFIELD Valor \\# \"R$ #.##0,00\" }",
      "Usar macro VBA para formatar após a mesclagem",
      "Formatar a coluna no Excel antes de mesclar"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Mala Direta",
    "explanation": {
      "intro": "Campos MERGEFIELD aceitam chaves de formatação para converter números em moeda/porcentagem/etc.",
      "papoReto": "Clique direito no campo → Editar Campo → adicione chave { MERGEFIELD Valor \\# \"R$ #.##0,00\" } → OK. Número 1500 vira \"R$ 1.500,00\".",
      "respostaCerta": "Adicionar chave de formatação numérica ao campo: { MERGEFIELD Valor \\# \"R$ #.##0,00\" }",
      "puloDoGato": "Excel formatação não traversa a mala direta — Word precisa da chave \\#. Macro é overkill.",
      "cascasDeBanana": [
        "Excel: formatação local, não passa pelo campo.",
        "Macro: desnecessária, existe chave nativa.",
        "Estilo de célula: Excel, não Word."
      ],
      "dicaOuro": "Formatar campo mesclagem = { MERGEFIELD Nome \\# \"formato\" }."
    }
  },
  {
    "id": "mo101_q48",
    "text": "Qual código de campo no Word permite exibir a data atual formatada como \"dd/MM/yyyy\" em um documento de mala direta?",
    "options": [
      "{ FIELD DATE formato=\"dd/MM/yyyy\" }",
      "{ TODAY \\# \"dd/MM/yyyy\" }",
      "{ DATE \\@ \"dd/MM/yyyy\" }",
      "{ MERGEFIELD Data \\@ \"dd/MM/yyyy\" }"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Mala Direta",
    "explanation": {
      "intro": "DATE é um campo que insere a data atual do sistema no documento, formatada conforme especificado.",
      "papoReto": "{ DATE \\@ \"dd/MM/yyyy\" } insere data como \"24/06/2026\". Símbolo @ (não #) formatador de data. TODAY não é sintaxe Word real.",
      "respostaCerta": "{ DATE \\@ \"dd/MM/yyyy\" }",
      "puloDoGato": "\\@ é para DATA. \\# é para NÚMERO. Errar a chave = sintaxe inválida.",
      "cascasDeBanana": [
        "TODAY: não é comando Word real.",
        "MERGEFIELD Data: campo dinâmico da fonte, não data do sistema.",
        "FIELD DATE formato=: sintaxe errada (seria @, não atributo)."
      ],
      "dicaOuro": "Data do sistema = { DATE \\@ \"formato\" }. Chave = \\@, não \\#."
    }
  },
  {
    "id": "mo101_q49",
    "text": "Um usuário precisa que a primeira página de um documento tenha orientação paisagem e as demais permaneçam em retrato. Qual recurso do Word permite isso?",
    "options": [
      "Inserir Quebra de Seção e definir orientação diferente para cada seção",
      "Inserir Quebra de Página e alterar as margens manualmente",
      "Usar cabeçalhos e rodapés diferentes por página",
      "Alterar a orientação em Layout → Orientação e aplicar a todo o documento"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Seções permitem orientações/margens/estilos diferentes em regiões do mesmo documento.",
      "papoReto": "Página 1: Inserir → Quebra → Quebra de Seção (coluna/contínua) → depois layout página 2 diferente. Seções são compartimentos — cada uma configura independentemente.",
      "respostaCerta": "Inserir Quebra de Seção e definir orientação diferente para cada seção",
      "puloDoGato": "Quebra de PÁGINA não permite orientação diferente. Quebra de SEÇÃO sim.",
      "cascasDeBanana": [
        "Layout → Orientação (todo doc): aplica a TUDO, não seções.",
        "Quebra de Página: pula linha, não permite config diferente.",
        "Cabeçalho/rodapé: visual, não estrutura."
      ],
      "dicaOuro": "Orientação diferente por seção = Inserir → Quebra → Quebra de Seção."
    }
  },
  {
    "id": "mo101_q50",
    "text": "Um usuário tem um documento com 4 seções e precisa que a numeração de páginas reinicie em 1 a partir da terceira seção. Qual configuração deve aplicar?",
    "options": [
      "Formatar Números de Página na seção 3 com \"Iniciar em: 1\" desvinculando do anterior",
      "Inserir campo de número de página com fórmula de subtração",
      "Usar macro VBA para renumerar as páginas",
      "Excluir os números das seções anteriores e reinserir a partir da seção 3"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Cada seção pode ter numeração de página independente — basta desvincular e resetar.",
      "papoReto": "Seção 3: Inserir → Número de Página → clique direito → Formatar Números de Página → marca 'Começar em:' 1 → OK. Seção 3 agora começa página 1 (seções 1-2 seguem 1-X como eram).",
      "respostaCerta": "Formatar Números de Página na seção 3 com \"Iniciar em: 1\" desvinculando do anterior",
      "puloDoGato": "Sem desvincular do anterior, qualquer número digitado será relativo. Desvinculação é pré-requisito.",
      "cascasDeBanana": [
        "Excluir/reinserir: deleta toda numeração, manual.",
        "Macro: desnecessária, existe função nativa.",
        "Fórmula de subtração: campo numérico não é suficiente (não automático)."
      ],
      "dicaOuro": "Reiniciar número = Inserir → Número → clique direito → Formatar → Começar em: 1."
    }
  },
  {
    "id": "mo101_q51",
    "text": "Um usuário deseja que todos os parágrafos com o estilo \"Corpo de Texto\" sejam automaticamente seguidos pelo mesmo estilo ao pressionar Enter. Qual configuração define isso?",
    "options": [
      "Modificar Estilo → Estilo do parágrafo seguinte → Corpo de Texto",
      "Configurar AutoCorreção para aplicar o estilo",
      "Criar uma macro que aplica o estilo ao pressionar Enter",
      "Definir atalho de teclado para o estilo"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Estilos e Modelos",
    "explanation": {
      "intro": "\"Estilo do parágrafo seguinte\" determina automaticamente qual estilo Word aplica ao pressionar Enter.",
      "papoReto": "Modificar Estilo (Corpo de Texto) → Estilos (coluna \"Estilo do parágrafo seguinte\") → escolha \"Corpo de Texto\" → OK. Daqui em diante, quando digitar Corpo de Texto e pressionar Enter, automático aplica Corpo de Texto novamente (não volta para Normal ou outro).",
      "respostaCerta": "Modificar Estilo → Estilo do parágrafo seguinte → Corpo de Texto",
      "puloDoGato": "Não é atalho (atalho só acelera digitação), não é macro (automação), não é AutoCorreção (substituição de texto).",
      "cascasDeBanana": [
        "Macro: você digita manualmente, sem automação nativa.",
        "Atalho: acelera digitação, não muda estilo ao Enter.",
        "AutoCorreção: substitui texto enquanto digita, não muda estilo."
      ],
      "dicaOuro": "Estilo automático após Enter = Modificar Estilo → Estilo do parágrafo seguinte."
    }
  },
  {
    "id": "mo101_q52",
    "text": "Um usuário precisa localizar todos os parágrafos de um documento que usam o estilo \"Título 2\" e substituí-los pelo estilo \"Título 3\". Qual recurso do Word permite isso?",
    "options": [
      "Usar macro VBA para iterar pelos parágrafos e alterar o estilo",
      "Selecionar todas as ocorrências via Painel de Estilos → Selecionar Todas e reaplicar manualmente",
      "Localizar e Substituir → Mais → Formatar → Estilo → selecionar os estilos de origem e destino",
      "Modificar o estilo Título 2 para herdar as propriedades do Título 3"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Estilos e Modelos",
    "explanation": {
      "intro": "Localizar e Substituir pode operar em nível de estilo, não só texto — substitui todos os parágrafos com um estilo por outro.",
      "papoReto": "Editar → Localizar e Substituir (Ctrl+H) → Mais → (Localizar) Formatar → Estilo → Título 2 → OK → (Substituir) Formatar → Estilo → Título 3 → OK → Substituir Tudo. Automático.",
      "respostaCerta": "Localizar e Substituir → Mais → Formatar → Estilo → selecionar os estilos de origem e destino",
      "puloDoGato": "Modificar Título 2 herança de Título 3 muda aparência de Título 2 globalmente, não substitui o estilo. Manual é impossível em grande volume.",
      "cascasDeBanana": [
        "Modificar herança: muda Título 2 inteiro, não substitui.",
        "Manual Painel de Estilos: tediante, propenso a erro.",
        "Macro: válida, mas built-in é mais simples."
      ],
      "dicaOuro": "Substituir estilo = Localizar e Substituir → Formatar → Estilo (ambos lados)."
    }
  },
  {
    "id": "mo101_q53",
    "text": "O que são Conjuntos de Estilos no Word?",
    "options": [
      "Bibliotecas de modelos armazenadas no OneDrive",
      "Coleções predefinidas de estilos coordenados que alteram a aparência geral do documento",
      "Configurações de impressão salvas para diferentes tipos de documento",
      "Grupos de macros organizados por função"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Estilos e Modelos",
    "explanation": {
      "intro": "Conjuntos de Estilos (Style Sets) são temas completos: cores, fontes, efeitos coordenados aplicados a Títulos, Corpo, etc.",
      "papoReto": "Design → Estilos (galeria visual) → escolhe Moderno, Clássico, Colorido, etc → pronto, documento inteiro muda de aparência. Cada estilo (Título, Corpo) atualizamudando cores/fontes de forma coordenada.",
      "respostaCerta": "Coleções predefinidas de estilos coordenados que alteram a aparência geral do documento",
      "puloDoGato": "Não é tema (temas em Design são suplementares). Não é macro (não é VBA). Não é impressão (não afeta output só).",
      "cascasDeBanana": [
        "Macros: não são visual/coordenadas.",
        "Modelos OneDrive: são templates, não style sets.",
        "Impressão: não muda aparência, só output."
      ],
      "dicaOuro": "Conjuntos de Estilos = Design → Estilos (galeria com nomes: Moderno, Clássico, etc)."
    }
  },
  {
    "id": "mo101_q54",
    "text": "Um usuário modificou o modelo Normal.dotm e deseja restaurá-lo para as configurações padrão do Word. Qual é a abordagem correta?",
    "options": [
      "Reinstalar o Microsoft Office",
      "Usar Arquivo → Opções → Avançado → Restaurar Padrões",
      "Usar Arquivo → Informações → Restaurar Versão Anterior",
      "Fechar o Word, localizar o arquivo Normal.dotm e excluí-lo; o Word criará um novo padrão na próxima abertura"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Estilos e Modelos",
    "explanation": {
      "intro": "Normal.dotm é o modelo padrão carregado toda vez que abre Word. Excluir força o Word recriar um novo.",
      "papoReto": "Feche o Word → Localize Normal.dotm (C:\\Users\\[user]\\AppData\\Roaming\\Microsoft\\Templates\\) → Exclua → Abra Word novamente → cria Normal.dotm novo com configurações padrão.",
      "respostaCerta": "Fechar o Word, localizar o arquivo Normal.dotm e excluí-lo; o Word criará um novo padrão na próxima abertura",
      "puloDoGato": "Opções → Restaurar Padrões não existe (genérico demais). Versão Anterior é para restaurar arquivo de backup. Reinstalar Office é overkill.",
      "cascasDeBanana": [
        "Opções → Restaurar: não existe (genérico).",
        "Reinstalar: excessivo, não necessário.",
        "Versão Anterior: para backup local, não padrão Word."
      ],
      "dicaOuro": "Reset Normal.dotm = Fechar Word → Excluir Normal.dotm → Reabrir."
    }
  },
  {
    "id": "mo101_q55",
    "text": "Um usuário precisa adicionar texto personalizado ao Sumário que não corresponde a nenhum título do documento. Como deve proceder?",
    "options": [
      "Usar o campo TC para marcar entradas de sumário personalizadas e incluir o switch \\F no campo TOC",
      "Usar Referências → Marcar Entrada de Índice para adicionar ao sumário",
      "Digitar manualmente no sumário após gerá-lo",
      "Criar um estilo de título oculto para o texto"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Estilos e Modelos",
    "explanation": {
      "intro": "TC (Table of Contents Entry) marca texto customizado como entrada de sumário sem ser um título de estilo.",
      "papoReto": "Selecione o texto → Alt+Shift+O (marca como TC) → na caixa marca \"Tabela de Conteúdos\" → OK. Depois, ao gerar o Sumário (TOC), use switch \\F no campo para incluir entradas TC junto com títulos.",
      "respostaCerta": "Usar o campo TC para marcar entradas de sumário personalizadas e incluir o switch \\F no campo TOC",
      "puloDoGato": "Manual é perder automação. Índice é para palavras-chave, não sumário. Estilo oculto não passa no sumário automático.",
      "cascasDeBanana": [
        "Manual: perde automação, confuso ao atualizar.",
        "Marcar Entrada Índice: é para índice remissivo, não sumário.",
        "Estilo oculto: não passa em TOC automático."
      ],
      "dicaOuro": "Entrada customizada no sumário = Alt+Shift+O (TC) + \\F no TOC."
    }
  },
  {
    "id": "mo101_q56",
    "text": "Um usuário precisa que as notas de rodapé de um documento sejam numeradas com algarismos romanos (i, ii, iii) em vez de números arábicos. Onde deve configurar isso?",
    "options": [
      "Arquivo → Opções → Avançado → Notas de Rodapé",
      "Inserir → Número de Página → Formatar Números de Página",
      "Layout → Configurar Página → Notas",
      "Referências → menu de diálogo Notas de Rodapé → Formato do número"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Referências",
    "explanation": {
      "intro": "Notas de Rodapé usam numeração personalizável: árabes, romanos, letras, símbolos.",
      "papoReto": "Referências → (clique no sinal da seta em Notas de Rodapé) → Formato do número → dropdown → escolhe \"i, ii, iii\" (romanos minúsculos) → OK. Automático.",
      "respostaCerta": "Referências → menu de diálogo Notas de Rodapé → Formato do número",
      "puloDoGato": "Número de Página formata páginas, não notas. Opções → Avançado é genérico (não existe submenu de notas lá).",
      "cascasDeBanana": [
        "Número de Página: páginas, não notas.",
        "Layout → Configurar: margens/página, não notas.",
        "Opções Avançado: não tem submenu de notas."
      ],
      "dicaOuro": "Formato notas = Referências → Notas de Rodapé (seta) → Formato do número."
    }
  },
  {
    "id": "mo101_q57",
    "text": "Um usuário precisa adicionar uma fonte bibliográfica que não está entre os tipos padrão do Word. Qual é a abordagem correta?",
    "options": [
      "Usar um gerenciador externo como Zotero e importar para o Word",
      "Digitar a referência manualmente no final do documento",
      "Referências → Gerenciar Fontes → Novo → selecionar o tipo mais próximo e preencher campos personalizados",
      "Criar um estilo de parágrafo personalizado para a referência"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Referências",
    "explanation": {
      "intro": "Word oferece tipos padrão de referência (Livro, Artigo, Website) e permite criar personalizados.",
      "papoReto": "Referências → Gerenciar Fontes → Novo → escolha tipo mais próximo (ex: Livro) → preencha campos (autor, título, data) → OK. Salva na biblioteca; pode usar em outros docs.",
      "respostaCerta": "Referências → Gerenciar Fontes → Novo → selecionar o tipo mais próximo e preencher campos personalizados",
      "puloDoGato": "Manual é perder rastreamento/automação. Zotero é externo (não integrado bem). Estilo é formatação, não armazenamento.",
      "cascasDeBanana": [
        "Manual: sem automação, difícil atualizar.",
        "Zotero: externo, integração limitada.",
        "Estilo: formatação apenas, não fonte."
      ],
      "dicaOuro": "Fonte customizada = Referências → Gerenciar Fontes → Novo → tipo próximo."
    }
  },
  {
    "id": "mo101_q58",
    "text": "Um usuário deseja criar uma lista de todas as figuras do documento gerada automaticamente a partir das legendas inseridas. Qual recurso usa?",
    "options": [
      "Referências → Inserir Índice de Ilustrações",
      "Inserir → Tabela → Lista de Figuras manual",
      "Referências → Sumário → Sumário de Figuras",
      "Exibir → Painel de Navegação → Figuras"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Referências",
    "explanation": {
      "intro": "Índice de Ilustrações (LOF = List of Figures) é gerado automaticamente a partir de legendas inseridas em figuras.",
      "papoReto": "Insira Legendas em cada figura (Referências → Inserir Legenda → escolhe tipo Figura → OK). Depois, Referências → Inserir Índice de Ilustrações → OK. Automático, com números e páginas.",
      "respostaCerta": "Referências → Inserir Índice de Ilustrações",
      "puloDoGato": "Tabela manual perde automação. Painel de Navegação mostra figuras, não gera lista.",
      "cascasDeBanana": [
        "Tabela manual: sem automação, erro-prone.",
        "Painel de Navegação: visualiza, não lista.",
        "Sumário de Figuras: não existe (genérico)."
      ],
      "dicaOuro": "Lista de Figuras = Legendas → Referências → Inserir Índice de Ilustrações."
    }
  },
  {
    "id": "mo101_q59",
    "text": "Um usuário precisa criar uma entrada de índice remissivo com subentradas. Como deve proceder ao marcar a entrada?",
    "options": [
      "Alt+Shift+X → preencher o campo Entrada principal e o campo Subentrada separados por dois-pontos",
      "Criar dois índices separados e mesclar manualmente",
      "Usar Referências → Inserir Índice → Subentradas",
      "Marcar a entrada principal e depois marcar a subentrada separadamente com Alt+Shift+X"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Referências",
    "explanation": {
      "intro": "Índice Remissivo suporta hierarquia: entradas principais com subentradas aninhadas.",
      "papoReto": "Selecione texto → Alt+Shift+X → Entrada Principal: \"Gatos\" | Subentrada: \"Raças\" → OK. Resultado: Gatos aparece no índice, com \"Raças\" indentada abaixo.",
      "respostaCerta": "Alt+Shift+X → preencher o campo Entrada principal e o campo Subentrada separados por dois-pontos",
      "puloDoGato": "Marcar duas vezes (separadamente) cria duas entradas iguais, não hierarquia. A caixa tem campos específicos para isso.",
      "cascasDeBanana": [
        "Duas marcações: cria entradas paralelas, não hierarquia.",
        "Inserir Índice → Subentradas: não existe (interface é marcação).",
        "Dois índices: impossível de mesclar depois."
      ],
      "dicaOuro": "Subentrada = Alt+Shift+X → Entrada Principal + Subentrada (campos separados)."
    }
  },
  {
    "id": "mo101_q60",
    "text": "Um usuário inseriu um Controle de Conteúdo de Lista Suspensa em um formulário Word. Como adiciona os itens da lista?",
    "options": [
      "Usar Guia Dados → Validação → Lista",
      "Selecionar o controle → Propriedades → adicionar itens na seção Lista Suspensa",
      "Digitar os itens diretamente no controle em modo de edição",
      "Vincular o controle a uma planilha Excel com os itens"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Formulários e Macros",
    "explanation": {
      "intro": "Controles de Conteúdo Lista Suspensa armazenam opções em suas Propriedades internas (não em Excel).",
      "papoReto": "Clique no controle → Desenvolvedor → Propriedades (ou Ctrl+Shift+Alt+P) → guia Conteúdo → seção \"Itens da Lista Suspensa\" → Adicionar → digita \"Opção 1\" → OK → repete. Usuário depois seleciona entre essas opções.",
      "respostaCerta": "Selecionar o controle → Propriedades → adicionar itens na seção Lista Suspensa",
      "puloDoGato": "Digitar no controle é input, não config. Validação de Dados é Excel, não Word. Excel é externo, cria complexidade.",
      "cascasDeBanana": [
        "Digitar no controle: input de usuário, não setup.",
        "Validação de Dados: ferramenta Excel, não Word.",
        "Vincular a Excel: externo, desnecessário."
      ],
      "dicaOuro": "Configurar lista = Desenvolvedor → Propriedades → Itens da Lista Suspensa."
    }
  },
  {
    "id": "mo101_q61",
    "text": "Um usuário gravou uma macro que formata um parágrafo, mas ela não funciona corretamente em parágrafos com estilos diferentes. Qual é a melhor abordagem para corrigir isso via VBA?",
    "options": [
      "Regravar a macro em cada estilo separadamente",
      "Criar estilos que já incluam a formatação desejada",
      "Usar Localizar e Substituir com formatação em vez de macro",
      "Editar a macro no Editor VBA adicionando lógica condicional para verificar o estilo antes de aplicar a formatação"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Formulários e Macros",
    "explanation": {
      "intro": "Macros VBA podem testar condições: se estilo = X, então faça isso; se estilo = Y, faça aquilo.",
      "papoReto": "Alt+F11 (abre VBA) → adicione IF/THEN lógica → if Selection.Style = \"Título\" then... else... → OK. Eficiente.",
      "respostaCerta": "Editar a macro no Editor VBA adicionando lógica condicional para verificar o estilo antes de aplicar a formatação",
      "puloDoGato": "Regravar por estilo é repetitivo e frágil. Localizar/Substituir é limitado (não entende estilos facilmente).",
      "cascasDeBanana": [
        "Regravar por estilo: repetitivo, frágil.",
        "Criar estilos: muda aparência, não respeita lógica.",
        "Localizar/Substituir: limitado, sem condições."
      ],
      "dicaOuro": "Macro inteligente = IF/THEN no VBA."
    }
  },
  {
    "id": "mo101_q62",
    "text": "Um usuário precisa que a mala direta pule automaticamente registros onde o campo \"Email\" está vazio. Qual regra de mala direta deve usar?",
    "options": [
      "Correspondências → Editar Lista de Destinatários → filtrar por Email não vazio",
      "Filtrar os registros na fonte de dados Excel antes de mesclar",
      "Usar macro VBA para verificar e pular registros vazios",
      "Correspondências → Regras → Ignorar Registro Se → campo Email → está em branco"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Mala Direta",
    "explanation": {
      "intro": "Ignorar Registro Se é a ferramenta Word para pular linhas da fonte durante mesclagem.",
      "papoReto": "Correspondências → Regras → Ignorar Registro Se → campo Email → está em branco → OK. Registros sem email não geram documento.",
      "respostaCerta": "Correspondências → Regras → Ignorar Registro Se → campo Email → está em branco",
      "puloDoGato": "Filtrar Excel é pré-mesclagem. Macro é pós. Regra em Word é on-the-fly durante mesclagem.",
      "cascasDeBanana": [
        "Excel: modifica a fonte, não reversível em Word.",
        "Macro: pós-mesclagem, manual.",
        "Editar Lista: filtra, mas não tão automático/robusto."
      ],
      "dicaOuro": "Pular registro = Correspondências → Regras → Ignorar Registro Se."
    }
  },
  {
    "id": "mo101_q63",
    "text": "Um usuário precisa criar envelopes personalizados para 300 destinatários usando mala direta. Qual tamanho de envelope padrão é mais comum para correspondência comercial no Word?",
    "options": [
      "Envelope DL (110 x 220 mm)",
      "Envelope Ofício",
      "Envelope Tamanho 10 (4 1/8 x 9 1/2 polegadas)",
      "Envelope A4"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Mala Direta",
    "explanation": {
      "intro": "Envelope Tamanho 10 (\"business envelope\") é padrão comercial nos EUA para mala direta corporativa.",
      "papoReto": "Correspondências → Iniciar Mala Direta → Envelopes → Tamanho 10 → conecte fonte → insira campos de endereço. Compatível com máquinas de franquia.",
      "respostaCerta": "Envelope Tamanho 10 (4 1/8 x 9 1/2 polegadas)",
      "puloDoGato": "DL é europeu. A4 é folha, não envelope. Ofício é papel grande, não envelope padrão.",
      "cascasDeBanana": [
        "A4: papel, não envelope.",
        "DL: europeu, não EUA.",
        "Ofício: grande, não padrão."
      ],
      "dicaOuro": "Envelope comercial padrão = Tamanho 10."
    }
  },
  {
    "id": "mo101_q64",
    "text": "Qual recurso do Word verifica se um documento está acessível para pessoas com deficiência visual que usam leitores de tela?",
    "options": [
      "Exibir → Modo de Leitura → Acessibilidade",
      "Arquivo → Informações → Inspecionar Documento",
      "Revisão → Verificar Acessibilidade",
      "Arquivo → Opções → Acessibilidade"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Verificar Acessibilidade é um scanner/auditor que detecta problemas para leitores de tela (imagens sem alt text, tabelas mal estruturadas, etc).",
      "papoReto": "Revisão → Verificar Acessibilidade → relata problemas → painél lateral mostra erros/avisos → clique para ir direto.",
      "respostaCerta": "Revisão → Verificar Acessibilidade",
      "puloDoGato": "Inspecionar Documento é para metadados/comentários. Modo Leitura é para visualizar. Opções é preferences.",
      "cascasDeBanana": [
        "Inspecionar: metadados/privacidade.",
        "Modo Leitura: visualização.",
        "Opções: preferências."
      ],
      "dicaOuro": "Auditar acessibilidade = Revisão → Verificar Acessibilidade."
    }
  },
  {
    "id": "mo101_q65",
    "text": "Um usuário inseriu uma imagem em um documento Word. O que deve adicionar para tornar o documento acessível para usuários de leitores de tela?",
    "options": [
      "Texto Alternativo (Alt Text) na imagem",
      "Marca d'água com descrição da imagem",
      "Hiperlink descritivo na imagem",
      "Legenda abaixo da imagem"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Alt Text (texto alternativo) é descrição invisível que leitores de tela leem quando encontram uma imagem.",
      "papoReto": "Clique direito na imagem → Editar Texto Alternativo → descreva o conteúdo (ex: \"Gráfico mostrando crescimento de vendas 2024\") → OK. Acessível.",
      "respostaCerta": "Texto Alternativo (Alt Text) na imagem",
      "puloDoGato": "Legenda é visual. Hiperlink é navegação. Marca d'água é visual. Alt Text é legível programaticamente.",
      "cascasDeBanana": [
        "Legenda: visual, não tela lê.",
        "Hiperlink: navegação, não descrição.",
        "Marca d'água: visual."
      ],
      "dicaOuro": "Alt Text = descrição invisível para leitores de tela."
    }
  },
  {
    "id": "mo101_q66",
    "text": "Qual recurso do Word remove informações ocultas como comentários, revisões e metadados pessoais antes de compartilhar um documento?",
    "options": [
      "Revisão → Excluir Todos os Comentários",
      "Arquivo → Salvar Como → Remover Metadados",
      "Ferramentas → Limpar Documento",
      "Arquivo → Informações → Verificar Problemas → Inspecionar Documento"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Inspecionar Documento scanner para metadados, comentários, versões, dados XML ocultos — antes de compartilhar.",
      "papoReto": "Arquivo → Informações → Verificar Problemas → Inspecionar Documento → mostra o que está oculto → você remove → compartilha limpo.",
      "respostaCerta": "Arquivo → Informações → Verificar Problemas → Inspecionar Documento",
      "puloDoGato": "Excluir Comentários é manual (só comentários). Salvar Como não remove tudo (só alguns metadados). Inspecionar é completo.",
      "cascasDeBanana": [
        "Excluir Comentários: só comentários, incompleto.",
        "Salvar Como: incompleto.",
        "Limpar Documento: não existe (genérico)."
      ],
      "dicaOuro": "Limpar tudo = Inspecionar Documento."
    }
  },
  {
    "id": "mo101_q67",
    "text": "Um usuário executou o Inspetor de Documento e encontrou \"Dados XML Personalizados\". O que representa esse item?",
    "options": [
      "Hiperlinks com código XML embutido",
      "Imagens incorporadas em formato XML",
      "Dados armazenados em partes XML personalizadas do documento, como propriedades de suplementos ou vinculações de dados",
      "Estilos exportados em formato XML"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Dados XML Personalizados = partes do arquivo .docx (que é ZIP) que armazenam metadados de suplementos/apps/vinculações.",
      "papoReto": "Quando instala suplemento ou vincula dados a um banco, Word armazena em partes XML internas (invisíveis visualmente, mas detectáveis pelo Inspecionador).",
      "respostaCerta": "Dados armazenados em partes XML personalizadas do documento, como propriedades de suplementos ou vinculações de dados",
      "puloDoGato": "Não é imagens/hiperlinks/estilos (esses são estrutura visual). É dados de aplicação/estrutura.",
      "cascasDeBanana": [
        "Imagens: embedidas, não XML.",
        "Hiperlinks: campos, não XML custom.",
        "Estilos: styles.xml, não custom."
      ],
      "dicaOuro": "Dados XML = metadados de apps/suplementos/vinculações."
    }
  },
  {
    "id": "mo101_q68",
    "text": "Um documento Word criado no formato .docx apresenta recursos que não são suportados em versões antigas do Word. Qual ferramenta verifica esses problemas antes de salvar no formato .doc?",
    "options": [
      "Arquivo → Salvar Como → Verificar Versão",
      "Arquivo → Informações → Verificar Problemas → Verificar Compatibilidade",
      "Revisão → Comparar → Verificar Compatibilidade",
      "Arquivo → Opções → Compatibilidade"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Verificar Compatibilidade testa qual .doc (Word 97-2003) não suportará — antes de converter/salvar.",
      "papoReto": "Arquivo → Informações → Verificar Problemas → Verificar Compatibilidade → relata recursos novos que .doc não aceita → você decide remover ou manter .docx.",
      "respostaCerta": "Arquivo → Informações → Verificar Problemas → Verificar Compatibilidade",
      "puloDoGato": "Opções → Compatibilidade é preferência global. Salvar Como não avisa de incompatibilidade.",
      "cascasDeBanana": [
        "Opções: preferência global, não auditoria.",
        "Salvar Como: não avisa.",
        "Comparar: compara dois docs, não versões."
      ],
      "dicaOuro": "Auditoria compatibilidade = Verificar Compatibilidade."
    }
  },
  {
    "id": "mo101_q69",
    "text": "Um usuário fechou acidentalmente um documento Word sem salvar. Qual recurso pode ajudar a recuperar o trabalho perdido?",
    "options": [
      "Lixeira do Windows",
      "Arquivo → Informações → Gerenciar Documento → Recuperar Documentos Não Salvos",
      "Histórico de Versões do OneDrive",
      "Restaurar Ponto de Sistema do Windows"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Recuperar Documentos Não Salvos acessa rascunhos temporários que Word mantém mesmo após fechar sem salvar.",
      "papoReto": "Arquivo → Informações → Gerenciar Documento → Recuperar Documentos Não Salvos → lista antigos (com data/hora) → clique → abre → Salvar Como.",
      "respostaCerta": "Arquivo → Informações → Gerenciar Documento → Recuperar Documentos Não Salvos",
      "puloDoGato": "Lixeira é para arquivo deletado. OneDrive é só se foi pra cloud. Ponto de Sistema é sistema inteiro (overkill).",
      "cascasDeBanana": [
        "Lixeira: arquivo deletado, não não-salvo.",
        "OneDrive: só se em cloud.",
        "Ponto de Sistema: sistema, não arquivo."
      ],
      "dicaOuro": "Recuperar não-salvo = Arquivo → Informações → Gerenciar Documento → Recuperar Não Salvos."
    }
  },
  {
    "id": "mo101_q70",
    "text": "Com que frequência o Word salva automaticamente versões de recuperação por padrão e onde essa configuração pode ser alterada?",
    "options": [
      "A cada 10 minutos; Arquivo → Opções → Salvar → Salvar informações de AutoRecuperação a cada X minutos",
      "A cada 15 minutos; Exibir → Opções de Recuperação",
      "A cada 30 minutos; não pode ser alterado",
      "A cada 5 minutos; Arquivo → Informações → AutoRecuperação"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "AutoRecuperação salva cópia temporária periodicamente — padrão 10 min, customizável.",
      "papoReto": "Arquivo → Opções → Salvar → checkbox \"Salvar informações de AutoRecuperação a cada X minutos\" (padrão 10) → mude para 5 se quiser mais frequência.",
      "respostaCerta": "A cada 10 minutos; Arquivo → Opções → Salvar → Salvar informações de AutoRecuperação a cada X minutos",
      "puloDoGato": "30 min é muito espaçado. 5 min é customizável mas padrão é 10. Não pode ser desabilitado (sempre está).",
      "cascasDeBanana": [
        "30 min: padrão é 10, não 30.",
        "5 min: customizável, mas padrão é 10.",
        "15 min: customizável, mas padrão é 10."
      ],
      "dicaOuro": "AutoRecuperação padrão = 10 minutos (configurável em Opções → Salvar)."
    }
  },
  {
    "id": "mo101_q71",
    "text": "Qual é a diferença entre um Estilo de Parágrafo e um Estilo de Caractere no Word?",
    "options": [
      "Não há diferença funcional entre os dois tipos",
      "Estilo de Parágrafo aplica formatação a um parágrafo inteiro incluindo recuos e espaçamento; Estilo de Caractere aplica formatação apenas ao texto selecionado",
      "Estilo de Parágrafo é permanente; Estilo de Caractere é temporário",
      "Estilo de Parágrafo usa fontes; Estilo de Caractere usa cores"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Estilos e Modelos",
    "explanation": {
      "intro": "Parágrafo: formatação inteira (parágrafo + espaçamento + recuos). Caractere: só texto selecionado.",
      "papoReto": "Parágrafo = Título, Corpo (afeta espaçamento/recuos). Caractere = Ênfase, Hiperlink (afeta só fonte/cor).",
      "respostaCerta": "Estilo de Parágrafo aplica formatação a um parágrafo inteiro incluindo recuos e espaçamento; Estilo de Caractere aplica formatação apenas ao texto selecionado",
      "puloDoGato": "Ambos são permanentes. Ambos usam fontes/cores. Diferença é ESCOPO: parágrafo vs trecho.",
      "cascasDeBanana": [
        "Permanente vs Temporário: ambos persistem.",
        "Fontes vs Cores: ambos podem ter ambos.",
        "Sem diferença: diferença clara (escopo)."
      ],
      "dicaOuro": "Parágrafo = parágrafo todo. Caractere = trecho."
    }
  },
  {
    "id": "mo101_q72",
    "text": "Um usuário criou um Estilo de Caractere para destacar termos técnicos com negrito e cor azul. Como aplicar esse estilo via atalho de teclado?",
    "options": [
      "Modificar o estilo → Formatar → Atalho de Teclado → atribuir combinação de teclas",
      "Usar Alt+número correspondente à posição na galeria",
      "Arrastar o estilo para a barra de ferramentas de acesso rápido",
      "Não é possível criar atalhos para estilos de caractere"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Estilos e Modelos",
    "explanation": {
      "intro": "Estilos de Caractere aceitam atalhos customizáveis (Ctrl+Alt+X, etc).",
      "papoReto": "Clique direito no estilo → Modificar → Formatar → Atalho de Teclado → escolha combinação → Atribuir → OK.",
      "respostaCerta": "Modificar o estilo → Formatar → Atalho de Teclado → atribuir combinação de teclas",
      "puloDoGato": "Alt+número é para estilos padrão, não custom. Barra de acesso rápido é para macros. Atalhos SÃO possíveis.",
      "cascasDeBanana": [
        "Alt+número: padrão, não custom.",
        "Barra rápida: macros.",
        "Não possível: É possível."
      ],
      "dicaOuro": "Atalho estilo = Modificar → Formatar → Atalho de Teclado."
    }
  },
  {
    "id": "mo101_q73",
    "text": "O que é um Campo no Microsoft Word?",
    "options": [
      "Um marcador de posição para imagens",
      "Um controle de formulário para entrada de dados",
      "Um espaço reservado que insere informações dinâmicas que podem ser atualizadas automaticamente",
      "Um elemento de cabeçalho e rodapé fixo"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Referências",
    "explanation": {
      "intro": "Campo = placeholder dinâmico (data, página, autor, etc) — atualiza automático.",
      "papoReto": "Inserir → Campo → escolha (ex: DATE, NUMPAGES) → OK. Quando abre doc, campo mostra valor atual. F9 atualiza.",
      "respostaCerta": "Um espaço reservado que insere informações dinâmicas que podem ser atualizadas automaticamente",
      "puloDoGato": "Controle é interativo. Marcador é para imagens. Cabeçalho é localização, não campo.",
      "cascasDeBanana": [
        "Controle: interação, não info dinâmica.",
        "Marcador: imagem.",
        "Cabeçalho: localização."
      ],
      "dicaOuro": "Campo = info dinâmica (data, página, autor)."
    }
  },
  {
    "id": "mo101_q74",
    "text": "Um usuário deseja inserir o número total de páginas do documento no rodapé. Qual campo deve usar?",
    "options": [
      "{ NUMPAGES }",
      "{ PAGE }",
      "{ PAGES }",
      "{ DOCPAGES }"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Referências",
    "explanation": {
      "intro": "NUMPAGES = total de páginas do doc.",
      "papoReto": "{ NUMPAGES } = total. { PAGE } = página atual.",
      "respostaCerta": "{ NUMPAGES }",
      "puloDoGato": "PAGE é atual, PAGES/DOCPAGES são não-reais.",
      "cascasDeBanana": [
        "PAGE: atual, não total.",
        "PAGES: não-real.",
        "DOCPAGES: não-real."
      ],
      "dicaOuro": "Total páginas = { NUMPAGES }."
    }
  },
  {
    "id": "mo101_q75",
    "text": "Um usuário precisa que um campo mostre o nome do autor do documento extraído das propriedades do arquivo. Qual campo deve inserir?",
    "options": [
      "{ DOCPROPERTY Author }",
      "{ USERNAME }",
      "{ INFO Author }",
      "{ AUTHOR }"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Referências",
    "explanation": {
      "intro": "{ AUTHOR } = proprietário do doc (Arquivo → Propriedades).",
      "papoReto": "{ AUTHOR } lê das propriedades internas.",
      "respostaCerta": "{ AUTHOR }",
      "puloDoGato": "{ USERNAME } é login Windows, não autor.",
      "cascasDeBanana": [
        "USERNAME: login.",
        "DOCPROPERTY: sintaxe alternativa (funciona).",
        "INFO: não-real."
      ],
      "dicaOuro": "Autor doc = { AUTHOR }."
    }
  },
  {
    "id": "mo101_q76",
    "text": "Um usuário precisa que a mala direta exiba \"Prezado Cliente\" quando o campo Nome estiver vazio e o nome completo quando estiver preenchido. Qual recurso usa?",
    "options": [
      "Correspondências → Inserir Campo de Mesclagem com valor padrão",
      "Macro VBA pós-mesclagem para substituir campos vazios",
      "Editar a fonte de dados Excel para preencher valores padrão",
      "Correspondências → Regras → Se...Então...Senão com condição no campo Nome"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Mala Direta",
    "explanation": {
      "intro": "Se...Então...Senão testa campo vazio e substitui texto.",
      "papoReto": "Regras → Se...Então...Senão → if Nome is empty then \"Prezado Cliente\" else { MERGEFIELD Nome }.",
      "respostaCerta": "Correspondências → Regras → Se...Então...Senão com condição no campo Nome",
      "puloDoGato": "Campo com padrão = campo só, sem lógica. Excel pré-mescla. Macro é pós.",
      "cascasDeBanana": [
        "Campo padrão: sem lógica.",
        "Excel: pré-mesclagem.",
        "Macro: pós-mesclagem."
      ],
      "dicaOuro": "Valor padrão se vazio = Regras → Se...Então...Senão."
    }
  },
  {
    "id": "mo101_q77",
    "text": "Quando um documento Word está salvo no OneDrive ou SharePoint, qual recurso permite visualizar e restaurar versões anteriores do arquivo?",
    "options": [
      "Arquivo → Informações → Histórico de Versões",
      "Revisão → Controlar Alterações → Ver Versões",
      "Exibir → Painel de Navegação → Versões",
      "Arquivo → Salvar Como → Versão Anterior"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "OneDrive/SharePoint histórico = Arquivo → Informações → Histórico.",
      "papoReto": "Arquivo → Informações → Histórico de Versões → lista com data/hora/autor → clique → abre/restaura.",
      "respostaCerta": "Arquivo → Informações → Histórico de Versões",
      "puloDoGato": "Alterações é revisões (redações). Navegação é estrutura. Salvar Como é salvamento.",
      "cascasDeBanana": [
        "Alterações: revisões, não versões.",
        "Navegação: estrutura.",
        "Salvar Como: salvamento local."
      ],
      "dicaOuro": "Histórico versões = Arquivo → Informações → Histórico de Versões."
    }
  },
  {
    "id": "mo101_q78",
    "text": "Um usuário precisa que colaboradores vejam apenas a versão final de um documento sem acesso ao histórico de revisões e comentários. Qual é a abordagem correta?",
    "options": [
      "Salvar como PDF antes de compartilhar",
      "Marcar o documento como Final",
      "Aceitar todas as alterações, excluir todos os comentários, executar o Inspetor de Documento e compartilhar o arquivo limpo",
      "Usar Arquivo → Proteger Documento → Ocultar Revisões"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Antes de compartilhar versão final: aceite revisões, delete comentários, inspecione.",
      "papoReto": "Revisão → Aceitar Todos → Revisão → Excluir Todos Comentários → Arquivo → Verificar Problemas → Inspecionar → Remover Tudo → Salvar.",
      "respostaCerta": "Aceitar todas as alterações, excluir todos os comentários, executar o Inspetor de Documento e compartilhar o arquivo limpo",
      "puloDoGato": "PDF é conversão, não limpeza. Marcar Final é sinalização. Ocultar é mascarar, não remove.",
      "cascasDeBanana": [
        "PDF: conversão.",
        "Marcar Final: sinalização.",
        "Ocultar: mascaramento."
      ],
      "dicaOuro": "Compartilhar limpo = Aceitar + Deletar + Inspecionar."
    }
  },
  {
    "id": "mo101_q79",
    "text": "Qual é a diferença entre Controles de Conteúdo e Campos de Formulário Legado no Word?",
    "options": [
      "Controles de Conteúdo só funcionam em documentos .dotm",
      "Não há diferença funcional entre os dois",
      "Controles de Conteúdo são mais modernos e flexíveis suportando vinculação a dados XML; Campos Legados são mais simples e compatíveis com versões antigas",
      "Campos Legados suportam mais tipos de dados que os Controles de Conteúdo"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Formulários e Macros",
    "explanation": {
      "intro": "Controles = modernos (XML). Legado = antigos (simples, compatível Word 97).",
      "papoReto": "Controles: XML vinculação, propriedades avançadas. Legado: apenas dados, sem XML.",
      "respostaCerta": "Controles de Conteúdo são mais modernos e flexíveis suportando vinculação a dados XML; Campos Legados são mais simples e compatíveis com versões antigas",
      "puloDoGato": "Ambos trabalham em .docx e .dotm. Legado suporta MENOS, não mais.",
      "cascasDeBanana": [
        "Legado mais tipos: não, menos.",
        ".dotm só: ambos funcionam em .docx.",
        "Sem diferença: diferença clara."
      ],
      "dicaOuro": "Controles = moderno. Legado = antigo."
    }
  },
  {
    "id": "mo101_q80",
    "text": "Um usuário precisa que um campo de formulário legado do tipo texto aceite apenas números com no máximo 10 dígitos. Qual configuração deve aplicar?",
    "options": [
      "Propriedades do Campo de Texto Legado → Tipo: Número → Comprimento máximo: 10",
      "Restringir Edição → Formato de Número",
      "Inserir → Controle de Conteúdo → Validação Numérica",
      "Usar macro VBA para validar a entrada do campo"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Formulários e Macros",
    "explanation": {
      "intro": "Campo Legado texto pode ser restringido a número/tamanho via Propriedades.",
      "papoReto": "Duplo-clique no campo → Propriedades → Tipo: Número → Máximo: 10 dígitos → OK.",
      "respostaCerta": "Propriedades do Campo de Texto Legado → Tipo: Número → Comprimento máximo: 10",
      "puloDoGato": "Restringir Edição é proteção doc. Controle de Conteúdo é mais moderno. Macro é externo.",
      "cascasDeBanana": [
        "Restringir: proteção doc.",
        "Controle: moderno.",
        "Macro: externo."
      ],
      "dicaOuro": "Validação campo legado = Propriedades → Tipo/Máximo."
    }
  },
  {
    "id": "mo101_q81",
    "text": "Um usuário criou um documento Word com tabelas complexas. O que deve configurar nas tabelas para garantir acessibilidade para leitores de tela?",
    "options": [
      "Usar cores de alto contraste nas células de cabeçalho",
      "Adicionar bordas visíveis em todas as células",
      "Converter a tabela em imagem com texto alternativo",
      "Definir a linha de cabeçalho da tabela e adicionar texto alternativo à tabela"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Tabelas acessíveis = cabeçalho marcado + alt text.",
      "papoReto": "Clique tabela → Design → linha 1ª marca como cabeçalho. Clique tabela → clique direito → Texto Alternativo. Leitor de tela entende estrutura.",
      "respostaCerta": "Definir a linha de cabeçalho da tabela e adicionar texto alternativo à tabela",
      "puloDoGato": "Cores/bordas são visuais. Imagem é conversão.",
      "cascasDeBanana": [
        "Adicionar bordas visíveis em todas as células: Incorreto, pois alternativa inválida para o cenário.",
        "Converter a tabela em imagem com texto alternativo: Incorreto, pois alternativa inválida para o cenário.",
        "Usar cores de alto contraste nas células de cabeçalho: Incorreto, pois alternativa inválida para o cenário."
      ],
      "dicaOuro": "Tabela acessível = cabeçalho + alt text."
    }
  },
  {
    "id": "mo101_q82",
    "text": "Ao verificar a acessibilidade de um documento Word, o verificador aponta \"Ordem de Leitura Ambígua\" em um objeto. O que isso significa?",
    "options": [
      "O objeto tem texto alternativo duplicado",
      "O objeto está sobreposto a outro elemento do documento",
      "A posição do objeto em relação ao texto não está clara para leitores de tela, sendo necessário definir a ordem de leitura explicitamente",
      "A fonte usada no objeto não é compatível com leitores de tela"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "O verificador de acessibilidade do Word avisa quando um objeto pode confundir leitores de tela sobre a sequência de leitura.",
      "papoReto": "Ordem de Leitura Ambígua significa que um objeto flutuante (imagem, caixa de texto, forma) não está claramente posicionado na sequência lógica. Leitores de tela leem na ordem de inserção no fluxo de documento ou pela posição visual — sem marcação explícita, eles ficam confusos. Solução: clicar no objeto → clique direito → propriedades/opções avançadas → definir ordem de leitura ou converter para ancorado.",
      "respostaCerta": "A posição do objeto em relação ao texto não está clara para leitores de tela, sendo necessário definir a ordem de leitura explicitamente",
      "puloDoGato": "Alt text descreve O QUÊ é o objeto. Ordem de leitura define ONDE e QUANDO o leitor vê. São dois problemas diferentes — alt text sozinho não resolve ordem ambígua.",
      "cascasDeBanana": [
        "O objeto tem texto alternativo duplicado: Alt text duplicado não causa aviso de 'Ordem Ambígua' — o validador avisa de duplicação de alt text, não de ordem.",
        "O objeto está sobreposto a outro elemento do documento: Sobreposição visual não é o mesmo que ordem ambígua. Word avisa se for acessibilidade ruim, mas 'Ordem Ambígua' específica = posição não definida na sequência.",
        "A fonte usada no objeto não é compatível com leitores de tela: Compatibilidade de fonte é outra validação. Ordem de leitura é independente de fonte."
      ],
      "dicaOuro": "Ordem Ambígua ≈ posição não está clara na sequência. Fix: selecionar objeto → definir Opções de Disposição → alterar para 'Em linha com o texto' ou marcar ordem explicitamente."
    }
  },
  {
    "id": "mo101_q83",
    "text": "Um usuário deseja que um modelo Word carregue automaticamente um suplemento VBA específico sempre que for aberto. Como deve configurar?",
    "options": [
      "Criar uma macro AutoOpen no documento principal",
      "Salvar o suplemento como .dotm e adicioná-lo à pasta de Inicialização do Word (STARTUP)",
      "Usar o Gerenciador de Suplementos COM no Word",
      "Inserir o código VBA diretamente no Normal.dotm"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Estilos e Modelos",
    "explanation": {
      "intro": "Suplementos VBA (add-ins) precisam ser instalados em um local que Word reconheça na inicialização.",
      "papoReto": "A pasta STARTUP do Word é onde Word procura suplementos .dotm ao iniciar. Salvar o suplemento .dotm lá garante que carregue automaticamente sempre. Caminho típico: C:\\Users\\[User]\\AppData\\Roaming\\Microsoft\\Word\\STARTUP\\. AutoOpen em Normal.dotm só executa código em normal.dotm, não carrega suplemento externo.",
      "respostaCerta": "Salvar o suplemento como .dotm e adicioná-lo à pasta de Inicialização do Word (STARTUP)",
      "puloDoGato": "AutoOpen é para macros dentro de um modelo. STARTUP é para carregar modelos inteiros como suplementos. Confundir os dois é erro comum.",
      "cascasDeBanana": [
        "Inserir o código VBA diretamente no Normal.dotm: Modifica o template global — funciona para um única macro, mas não é ideal para suplementos reutilizáveis/mantíveis.",
        "Criar uma macro AutoOpen no documento principal: AutoOpen executa código, mas não carrega um suplemento externo (.dotm). Só funciona se você abrir aquele documento.",
        "Usar o Gerenciador de Suplementos COM no Word: Isso é para suplementos .dll COM (extensões compiladas), não para modelos .dotm."
      ],
      "dicaOuro": "STARTUP folder = carrega .dotm automaticamente. AutoOpen = executa macro ao abrir documento. Duas coisas diferentes."
    }
  },
  {
    "id": "mo101_q84",
    "text": "Um usuário precisa que um campo exiba o conteúdo de um Indicador (Bookmark) específico do documento e seja atualizado automaticamente se o indicador mudar. Qual campo deve usar?",
    "options": [
      "{ LINK NomeDoIndicador }",
      "{ REF NomeDoIndicador }",
      "{ DOCVARIABLE NomeDoIndicador }",
      "{ BOOKMARK NomeDoIndicador }"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Referências",
    "explanation": {
      "intro": "Word tem vários campos de campo (field codes) — REF é o que puxa conteúdo de um Indicador (bookmark) e permite atualização automática.",
      "papoReto": "REF = Reference (referência). Quando um Indicador é nomeado e marcado no documento, { REF NomeDoIndicador } busca o conteúdo e atualiza se o conteúdo do bookmark mudar. Pressione F9 ou clicar direito → Atualizar Campo.",
      "respostaCerta": "{ REF NomeDoIndicador }",
      "puloDoGato": "Bookmark é apenas um rótulo de posição. REF busca o conteúdo dentro desse bookmark. LINK é para links externos/OLE. DOCVARIABLE é para variáveis de documento (predefinidas pelo sistema).",
      "cascasDeBanana": [
        "{ BOOKMARK NomeDoIndicador }: BOOKMARK é o campo de DEFINIÇÃO do indicador, não de busca. Não retorna conteúdo.",
        "{ LINK NomeDoIndicador }: LINK é para links para documentos externos ou objetos OLE, não para bookmarks internos.",
        "{ DOCVARIABLE NomeDoIndicador }: DOCVARIABLE busca variáveis predefinidas do Word (Title, Author, etc.), não conteúdo de bookmarks."
      ],
      "dicaOuro": "REF = busca bookmark. LINK = busca externo. DOCVARIABLE = variáveis do sistema. Cada um tem seu propósito."
    }
  },
  {
    "id": "mo101_q85",
    "text": "Um usuário inseriu vários campos em um documento e deseja atualizá-los todos de uma vez antes de imprimir. Qual é a forma mais eficiente?",
    "options": [
      "Selecionar tudo com Ctrl+A e pressionar F9 para atualizar todos os campos",
      "Salvar o documento; os campos atualizam automaticamente ao salvar",
      "Arquivo → Imprimir → Atualizar Campos Antes de Imprimir",
      "Clicar com o botão direito em cada campo e selecionar Atualizar Campo"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Referências",
    "explanation": {
      "intro": "Campos em Word (como PAGE, DATE, REF, MERGEFIELD) mostram valores dinâmicos que precisam ser atualizados.",
      "papoReto": "F9 é o atalho universal para atualizar campos. Ctrl+A seleciona tudo, então Ctrl+A + F9 atualiza todos os campos do documento de uma vez — muito mais rápido que clicar em cada um. Isso é essencial antes de imprimir para garantir números de página, datas e referências cruzadas corretos.",
      "respostaCerta": "Selecionar tudo com Ctrl+A e pressionar F9 para atualizar todos os campos",
      "puloDoGato": "Salvar NÃO atualiza campos automaticamente (essa é a grande pegadinha). O usuário precisa pressionar F9 manualmente ou Ctrl+A → F9.",
      "cascasDeBanana": [
        "Clicar com o botão direito em cada campo: Funciona, mas é extremamente lento para dezenas de campos. Impraticável.",
        "Salvar automaticamente atualiza: FALSO. Salvar preserva os valores atuais dos campos, não os recalcula.",
        "Arquivo → Imprimir → Atualizar Campos: Essa opção não existe em Word moderno. Impressoras usam valores atuais dos campos no momento."
      ],
      "dicaOuro": "Antes de imprimir: sempre Ctrl+A → F9 para garantir que todos os campos estão atualizados."
    }
  },
  {
    "id": "mo101_q86",
    "text": "Um usuário precisa que o campo de mesclagem exiba o valor em maiúsculas independentemente de como está na fonte de dados. Qual chave de formatação deve adicionar ao campo?",
    "options": [
      "{ MERGEFIELD Nome \\* CAPS }",
      "{ MERGEFIELD Nome \\* Maiúsculas }",
      "{ MERGEFIELD Nome \\* Upper }",
      "{ MERGEFIELD Nome \\* Upper Case }"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Mala Direta",
    "explanation": {
      "intro": "Campos de mesclagem (merge fields) aceitam modificadores de formato (format switches) para alterar a apresentação dos dados.",
      "papoReto": "O switch \\* Upper (com barra invertida e asterisco) força o campo a exibir o resultado em MAIÚSCULAS, independente do caso na fonte de dados. Syntax exata: { MERGEFIELD Nome \\* Upper }. Outros switches: \\* FirstCap (primeira letra maiúscula), \\* Lower (tudo minúsculo).",
      "respostaCerta": "{ MERGEFIELD Nome \\* Upper }",
      "puloDoGato": "A barra invertida e asterisco (\\*) são sintaxe de switch de formatação no Word. Português tem tradução 'MAIÚSC' mas a prova usa 'Upper' (inglês técnico).",
      "cascasDeBanana": [
        "{ MERGEFIELD Nome \\* CAPS }: CAPS não é um switch válido. Não existe esse modificador no Word.",
        "{ MERGEFIELD Nome \\* Maiúsculas }: Nome da função em português, mas Word não reconhece. Precisa ser exatamente 'Upper'.",
        "{ MERGEFIELD Nome \\* Upper Case }: Upper Case é duas palavras, mas o switch é apenas 'Upper' (sem espaço ou 'Case')."
      ],
      "dicaOuro": "Switches exatos: \\* Upper, \\* Lower, \\* FirstCap. Word é rígido com sintaxe — espaços/variação de nome quebram."
    }
  },
  {
    "id": "mo101_q87",
    "text": "Em uma mala direta, um usuário precisa numerar sequencialmente cada documento gerado (1, 2, 3...). Qual campo do Word fornece essa numeração automática durante a mesclagem?",
    "options": [
      "{ SEQ Número }",
      "{ PAGE }",
      "{ MERGESEQ }",
      "{ MERGEREC }"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Mala Direta",
    "explanation": {
      "intro": "Mail merge precisa numerar cada documento gerado sequencialmente (doc 1, doc 2, doc 3, etc.).",
      "papoReto": "MERGESEQ conta quantos documentos foram gerados durante a mesclagem. Começa em 1 e incrementa a cada documento mesclado. Colocar { MERGESEQ } na página torna cada saída única e numerada.",
      "respostaCerta": "{ MERGESEQ }",
      "puloDoGato": "MERGEREC também existe, mas retorna o número da linha na fonte de dados (pode ter gaps se há filtros). MERGESEQ = contador de documentos gerados (sempre 1, 2, 3, 4...).",
      "cascasDeBanana": [
        "{ MERGEREC }: Retorna o número do registro na lista de dados, não o número do documento. Se filtrar dados, MERGEREC pula números.",
        "{ SEQ Número }: Campo genérico para sequências, mas precisa de sintaxe diferente e não é feito para mail merge.",
        "{ PAGE }: Número da página física dentro do documento, não número do documento gerado."
      ],
      "dicaOuro": "MERGESEQ = contagem de documentos gerados (1, 2, 3...). Use para numerar saídas de mail merge."
    }
  },
  {
    "id": "mo101_q88",
    "text": "O que uma Assinatura Digital em um documento Word garante ao destinatário?",
    "options": [
      "Que o documento não foi alterado desde que foi assinado e que a identidade do signatário foi verificada",
      "Que o documento foi aprovado pelo administrador do tenant",
      "Que o documento está criptografado com senha",
      "Que o documento está protegido contra cópia e impressão"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Assinatura digital criptografica vincula a identidade do signatário e o estado do documento em um momento específico.",
      "papoReto": "Assinatura digital oferece duas garantias: (1) Integridade — qualquer alteração no documento após a assinatura invalida a assinatura (detecta mudanças). (2) Autenticidade — o certificado digital do signatário comprova quem assinou (com base em PKI/autoridade certificadora). Senha criptografa o arquivo, mas não prova identidade. Proteção contra cópia é controle de permissão, não assinatura.",
      "respostaCerta": "Que o documento não foi alterado desde que foi assinado e que a identidade do signatário foi verificada",
      "puloDoGato": "Senha = confidencialidade. Assinatura = autenticidade + integridade. Dois mecanismos de segurança diferentes.",
      "cascasDeBanana": [
        "Criptografia com senha: Protege o arquivo contra acesso, mas não prova quem o criou ou se foi alterado. Qualquer pessoa com a senha pode abrir e modificar.",
        "Aprovação de administrador: Nem assinatura digital (baseada em certificado PKI) nem controle de acesso de tenant — conceito não relacionado.",
        "Proteção contra cópia e impressão: Restrição de permissões, não de autenticidade/integridade. Não envolve certificado ou chave privada."
      ],
      "dicaOuro": "Assinatura digital = certificado + integridade. Detecta: quem assinou + se documento mudou depois."
    }
  },
  {
    "id": "mo101_q89",
    "text": "Ao adicionar uma linha de assinatura digital em um documento Word, qual informação é exibida visualmente no documento para o signatário?",
    "options": [
      "O certificado digital completo em formato texto",
      "Apenas a data e hora da assinatura",
      "Nome do signatário, cargo e instruções para assinar",
      "O hash criptográfico do documento"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Uma linha de assinatura é um espaço visual no documento onde o signatário assina — é um convite legível antes da assinatura criptográfica ser aplicada.",
      "papoReto": "A linha de assinatura exibe: (1) linha horizontal (espaço para assinar), (2) nome da pessoa esperada que assine, (3) cargo/título, (4) instruções legíveis (ex.: 'Clique para assinar' ou 'Assinado em: [data]'). Isso é UI/conteúdo legível. O hash e certificado são dados internos da assinatura — não aparecem visualmente ali.",
      "respostaCerta": "Nome do signatário, cargo e instruções para assinar",
      "puloDoGato": "Linha de assinatura = apresentação visual para o usuário. Certificado/hash = metadados internos criptografados. A pergunta trata do que APARECE na linha, não do que está escondido.",
      "cascasDeBanana": [
        "Data e hora apenas: A linha exibe MAIS do que só data/hora — inclui nome, cargo e instruções.",
        "Certificado em texto: O certificado inteiro em texto estaria gigantesco e ilegível. Fica codificado/escondido nos metadados.",
        "Hash criptográfico: O hash é o digest seguro, não exibido visualmente. É calculado internamente e armazenado na assinatura."
      ],
      "dicaOuro": "Linha de assinatura = o que vê em papel. Certificado/hash = o que Word guarda digitalmente depois. Não são a mesma coisa."
    }
  },
  {
    "id": "mo101_q90",
    "text": "Um usuário percebe que o painel de estilos exibe dezenas de estilos que nunca usa. Como pode configurar o painel para mostrar apenas os estilos em uso no documento atual?",
    "options": [
      "Criar um conjunto de estilos personalizado com apenas os estilos desejados",
      "Excluir os estilos não utilizados pelo Gerenciador de Estilos",
      "Arquivo → Opções → Avançado → Filtrar Estilos",
      "Opções do Painel de Estilos → Selecionar estilos a mostrar → \"Estilos em uso\""
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Estilos e Modelos",
    "explanation": {
      "intro": "O painel de Estilos mostra TODOS os estilos disponíveis do template por padrão — dezenas deles aparecem mesmo que nunca sejam usados.",
      "papoReto": "Clicar no botão '≡' (Menu) do Painel de Estilos → 'Opções' → em 'Selecionar estilos a mostrar', escolher 'Estilos em uso'. Isso filtra a lista para exibir APENAS os estilos já aplicados no documento atual. Reduz a poluição visual e facilita encontrar estilos relevantes.",
      "respostaCerta": "Opções do Painel de Estilos → Selecionar estilos a mostrar → \"Estilos em uso\"",
      "puloDoGato": "Esse filtro é LOCAL (por documento) — não deleta estilos, só esconde. Se você aplicar um novo estilo depois, ele aparecerá na lista.",
      "cascasDeBanana": [
        "Excluir estilos via Gerenciador: Deletar estilos pode quebrar formatação se fossem usados (mesmo que você não visse). Melhor filtrar que deletar.",
        "Criar conjunto de estilos personalizado: Isso CRIA um novo set, não filtra a exibição. Você teria que gerenciar dois conjuntos.",
        "Arquivo → Opções → Avançado → Filtrar Estilos: Caminho incorreto. Essa opção não fica lá — fica nas 'Opções do Painel de Estilos' (botão no próprio painel)."
      ],
      "dicaOuro": "Painel de Estilos → botão Opções (≡) → 'Selecionar estilos' → 'Estilos em uso' = mostra só o usado."
    }
  },
  {
    "id": "mo101_q91",
    "text": "Um usuário precisa que uma macro seja executada automaticamente sempre que um documento baseado em um modelo específico for aberto. Qual nome especial deve dar à macro?",
    "options": [
      "AutoOpen",
      "AutoExec",
      "AutoStart",
      "AutoRun"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Formulários e Macros",
    "explanation": {
      "intro": "Word reconhece nomes especiais de macro que disparam automaticamente em eventos específicos.",
      "papoReto": "AutoOpen é o nome que Word procura quando um DOCUMENTO é aberto. Quando você abre um .docm ou documento baseado em um .dotm, Word procura por uma Sub AutoOpen() no VBA. Se existir, executa automaticamente.",
      "respostaCerta": "AutoOpen",
      "puloDoGato": "AutoOpen = evento de ABERTURA de documento. AutoExec = evento de INICIALIZAÇÃO do Word (muito raro). AutoStart é invenção (não existe).",
      "cascasDeBanana": [
        "AutoExec: Existe, mas executa quando o Word INICIA, não quando um documento abre. É menos comum e menos útil para documentos específicos.",
        "AutoStart: Nome de macro inválido — Word não reconhece esse evento.",
        "AutoRun: Nome inválido — Word não tem evento AutoRun para documentos."
      ],
      "dicaOuro": "AutoOpen = abre doc → roda macro. AutoExec = inicia Word → roda (muito raro). Lembre: Open = documento."
    }
  },
  {
    "id": "mo101_q92",
    "text": "Qual é a diferença entre as macros AutoOpen e AutoExec no Word?",
    "options": [
      "AutoOpen executa quando um documento específico é aberto; AutoExec executa quando o próprio Word é iniciado",
      "AutoExec executa quando qualquer documento é aberto; AutoOpen executa apenas no modelo Normal",
      "AutoOpen executa macros em sequência; AutoExec executa uma única macro",
      "Não há diferença funcional entre as duas"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Formulários e Macros",
    "explanation": {
      "intro": "Word tem dois eventos automáticos diferentes para macros — um no documento, outro na aplicação.",
      "papoReto": "AutoOpen: Dispara quando você ABRE UM DOCUMENTO (qualquer .doc/.docm). Está em Normal.dotm ou no template do documento. AutoExec: Dispara quando WORD INICIA (ao abrir a aplicação). Procura por AutoExec em Normal.dotm apenas. Cronologia: Word inicia → AutoExec (se houver) → Usuário abre documento → AutoOpen (se houver).",
      "respostaCerta": "AutoOpen executa quando um documento específico é aberto; AutoExec executa quando o próprio Word é iniciado",
      "puloDoGato": "AutoOpen = aciona a cada novo documento aberto. AutoExec = aciona UMA VEZ por sessão Word. Frequência diferentes, eventos diferentes.",
      "cascasDeBanana": [
        "AutoExec executa quando qualquer documento abre: Não — AutoExec é apenas na inicialização do Word. Qualquer documento que abre dispara AutoOpen, não AutoExec.",
        "AutoOpen executa macros em sequência vs. AutoExec uma única: Ambos podem conter múltiplas linhas de código. Não é uma diferença entre eles.",
        "Não há diferença: FALSO — são eventos completamente distintos em tempo de execução."
      ],
      "dicaOuro": "AutoOpen = por documento (cada vez que abre algo). AutoExec = por sessão (só quando Word inicia)."
    }
  },
  {
    "id": "mo101_q93",
    "text": "Um usuário precisa criar um índice remissivo que inclua referências cruzadas entre termos como \"Veja também: Formatação\". Como deve proceder?",
    "options": [
      "Usar Referências → Referência Cruzada → Índice",
      "Alt+Shift+X → selecionar \"Referência cruzada\" e digitar o termo relacionado no campo",
      "Criar dois índices separados e vincular manualmente",
      "Inserir manualmente a referência cruzada após gerar o índice"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Referências",
    "explanation": {
      "intro": "Índice remissivo lista termos chave com páginas; 'Veja também' = entrada de índice que referencia outro termo.",
      "papoReto": "Alt+Shift+X abre o diálogo de Entrada de Índice Remissivo. Lá você marca 'Referência cruzada' e digita o termo relacionado (ex.: 'Veja também: Formatação'). Isso cria uma entrada especial no índice que aponta para outro termo, não para uma página.",
      "respostaCerta": "Alt+Shift+X → selecionar \"Referência cruzada\" e digitar o termo relacionado no campo",
      "puloDoGato": "Alt+Shift+X é o atalho universal para MARCAR termos para índice. Depois que todos estão marcados, você insere o índice via Referências → Índice → OK.",
      "cascasDeBanana": [
        "Referências → Referência Cruzada → Índice: Caminho errado. Referência Cruzada é para apontar para partes do documento (headings, bookmarks). Índice remissivo usa Alt+Shift+X.",
        "Criar dois índices separados: Desnecessário e trabalhoso. Um índice com referências cruzadas é a solução.",
        "Inserir manualmente após gerar: Possível, mas não automatizado. Qualquer alteração no documento quebra a entrada manual."
      ],
      "dicaOuro": "Alt+Shift+X = marcar para índice remissivo (inclui 'Veja também'). Depois insere índice normalmente."
    }
  },
  {
    "id": "mo101_q94",
    "text": "Um usuário deseja que o Word sempre mostre caracteres não imprimíveis como marcas de parágrafo e espaços. Qual configuração define esse comportamento permanentemente?",
    "options": [
      "Exibir → Mostrar/Ocultar → Configurar como padrão",
      "Layout → Configurar Página → Mostrar Formatação",
      "Pressionar Ctrl+Shift+8 em cada sessão",
      "Arquivo → Opções → Exibir → marcar \"Sempre mostrar estas marcas de formatação na tela\""
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Caracteres não imprimíveis (¶ parágrafo, · espaço) são úteis para debugging de formatação, mas Ctrl+Shift+8 apenas ativa na sessão atual.",
      "papoReto": "Arquivo → Opções → Exibir (em inglês: 'Display') → checkmark 'Always show formatting marks' (ou similar, conforme versão). Isso persiste entre sessões. Ctrl+Shift+8 é toggle rápido, mas reseta ao fechar/reabrir Word.",
      "respostaCerta": "Arquivo → Opções → Exibir → marcar \"Sempre mostrar estas marcas de formatação na tela\"",
      "puloDoGato": "Precisa de Opções (não há outro lugar para \"permanentemente\" em Exibir/Layout). Opções = preferências globais do Word.",
      "cascasDeBanana": [
        "Ctrl+Shift+8 em cada sessão: Funciona TEMPORARIAMENTE, mas a pergunta pede PERMANENTEMENTE.",
        "Exibir → Mostrar/Ocultar: Existe um botão lá para toggle, mas não tem 'Configurar como padrão'. Exibir é para ações rápidas, não persistência.",
        "Layout → Configurar Página → Mostrar Formatação: Essa é para margens/layout. Não tem opção de marcas de formatação."
      ],
      "dicaOuro": "Permanente = Opções (gear icon). Sessão = atalhos. Lembre: para persistir, vai para Opções."
    }
  },
  {
    "id": "mo101_q95",
    "text": "Um usuário deseja personalizar os atalhos de teclado do Word e garantir que estejam disponíveis em todos os documentos. Onde deve salvar essas personalizações?",
    "options": [
      "Exibir → Macros → Atribuir Atalhos",
      "Arquivo → Opções → Avançado → Atalhos Globais",
      "Ferramentas → Personalizar → Atalhos → Salvar em Todos os Documentos",
      "Arquivo → Opções → Personalizar Faixa de Opções → Atalhos de Teclado → salvar em Normal.dotm"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Atalhos de teclado são configurações que precisam ser armazenadas no template global para persistir entre documentos.",
      "papoReto": "Arquivo → Opções → Personalizar Faixa de Opções (Customize Ribbon) → em 'Keyboard Shortcuts', clique 'Customize...'. Na dialog, escolha um comando, atribua a tecla. Na base da dialog, há dropdown 'Save in:' — selecionar 'Normal.dotm' salva os atalhos no template global. Qualquer novo documento herdará esses atalhos.",
      "respostaCerta": "Arquivo → Opções → Personalizar Faixa de Opções → Atalhos de Teclado → salvar em Normal.dotm",
      "puloDoGato": "Se salvar em 'Normal' em vez de 'Normal.dotm', atalhos aplicam apenas ao documento. Precisa de .dotm (template) para persistir.",
      "cascasDeBanana": [
        "Exibir → Macros → Atribuir Atalhos: Esse menu não existe em versões modernas (Ribbon). Pode aparecer em VBA legacy.",
        "Arquivo → Opções → Avançado: Opção 'Atalhos Globais' não existe lá. Avançado não é o lugar de customização.",
        "Ferramentas → Personalizar: Menu 'Ferramentas' também é legacy. Versões modernas usam Arquivo → Opções."
      ],
      "dicaOuro": "Atalhos persistentes = Normal.dotm. Atalhos temporários = salvar em documento específico. Sempre que 'todos os documentos', pense .dotm."
    }
  },
  {
    "id": "mo101_q96",
    "text": "Um usuário precisa criar um catálogo de produtos com mala direta onde cada página lista múltiplos registros em formato de tabela. Qual tipo de mala direta deve selecionar?",
    "options": [
      "Correspondências → Iniciar Mala Direta → Catálogo Personalizado",
      "Correspondências → Iniciar Mala Direta → Diretório",
      "Correspondências → Iniciar Mala Direta → Cartas",
      "Correspondências → Iniciar Mala Direta → Etiquetas com múltiplas colunas"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Mala Direta",
    "explanation": {
      "intro": "Mail merge tem vários tipos: Cartas (1 registro = 1 documento), Etiquetas, Diretório (múltiplos registros por página).",
      "papoReto": "Diretório cria um documento único que mostra TODOS os registros da lista em sequência (sem quebra de página automática entre registros). Perfeito para catálogos onde você quer múltiplos produtos/pessoas em tabela contínua ou lista formatada. Cartas cria 1 documento por registro.",
      "respostaCerta": "Correspondências → Iniciar Mala Direta → Diretório",
      "puloDoGato": "Diretório = lista tudo junto. Cartas = separa por documento. Catálogo = não é termo padrão (distrator inventado).",
      "cascasDeBanana": [
        "Cartas: Cria 1 documento por registro (quebra de página entre cada). Errado para catálogo contínuo.",
        "Etiquetas: Para impressão de múltiplas etiquetas em folha. Estrutura diferente, não para tabela/catálogo.",
        "Catálogo Personalizado: Nome inválido — não existe essa opção em Word."
      ],
      "dicaOuro": "Diretório = 1 documento com todos os registros. Use para catálogos/listas. Cartas = múltiplos documentos separados."
    }
  },
  {
    "id": "mo101_q97",
    "text": "Um usuário precisa que o Sumário exiba os números de página alinhados à direita com pontos de preenchimento entre o título e o número. Como deve configurar?",
    "options": [
      "Usar tabulações manuais em cada linha do sumário",
      "Formatar manualmente o sumário após gerá-lo",
      "Referências → Sumário → Sumário Personalizado → definir caractere de preenchimento e alinhamento à direita",
      "Modificar o estilo \"Sumário 1\" para incluir tabulação à direita"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Estilos e Modelos",
    "explanation": {
      "intro": "Sumário pode ser personalizado em apresentação — pontos/preenchimento é configuração de estilo aplicado ao gerar.",
      "papoReto": "Referências → Sumário → clicar seta no Sumário Automático → 'Sumário Personalizado' (ou 'Custom Table of Contents'). Dialog exibe opções: 'Caractere de preenchimento' dropdown (escolhe .), 'Alinhamento' radio buttons. Essas configurações aplicam ao sumário inteiro quando gerado. Regenerar sumário (direito → Atualizar Campo) mantém as configurações.",
      "respostaCerta": "Referências → Sumário → Sumário Personalizado → definir caractere de preenchimento e alinhamento à direita",
      "puloDoGato": "Personalizar ANTES de gerar (ou ao atualizar) é automático. Formatar MANUALMENTE depois = cada regeneração perde.",
      "cascasDeBanana": [
        "Tabulações manuais: Funciona, mas quebra ao regenerar o sumário. Não é automático.",
        "Formatar manualmente após gerar: Perdido ao atualizar/regenerar (pense em quando editor adiciona novo capítulo).",
        "Modificar estilo Sumário 1: Estilos controlam fonte/tamanho, mas 'caractere de preenchimento' é da dialog do Sumário, não do estilo."
      ],
      "dicaOuro": "Sumário Personalizado = config antes de gerar. Estilos = fonte/tamanho dos títulos. Dois controles diferentes."
    }
  },
  {
    "id": "mo101_q98",
    "text": "Um usuário precisa compartilhar a lista de fontes bibliográficas com um colega para que ele use no próprio documento. Como exportar as fontes no Word?",
    "options": [
      "Referências → Gerenciar Fontes → copiar fontes da Lista Principal para um arquivo XML exportado",
      "Copiar e colar a bibliografia gerada no documento do colega",
      "Compartilhar o arquivo Sources.xml localizado na pasta AppData do usuário",
      "Salvar o documento como modelo .dotx com as fontes incluídas"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Referências",
    "explanation": {
      "intro": "Fontes bibliográficas em Word são armazenadas em lista privada do usuário; compartilhar exige exportar para arquivo reutilizável.",
      "papoReto": "Referências → Gerenciar Fontes abre dialog com 'Master List' (todas as fontes do Word) e 'Current List' (as que você usa no documento). Há botão 'Copy' que passa de Master para Current, e 'Save As' que exporta Current para .xml. Colega importa esse .xml na sua 'Master List', então usa em qualquer documento.",
      "respostaCerta": "Referências → Gerenciar Fontes → copiar fontes da Lista Principal para um arquivo XML exportado",
      "puloDoGato": "Sources.xml em AppData é privado ao usuário — é LEITURA, não compartilhamento. Exportar via 'Save As' gera arquivo .xml que você envia.",
      "cascasDeBanana": [
        "Copiar/colar bibliografia: Copia apenas o texto gerado (formatado), não as fontes originais — colega não consegue citar ou editar fontes.",
        "Compartilhar Sources.xml da AppData: Arquivo local do usuário, não é rota de compartilhamento. Além disso, padrão de Word não encontra fontes ali automaticamente.",
        "Salvar como .dotx com fontes: Modelos .dotx não armazenam lista de fontes — armazenam estilos/conteúdo padrão."
      ],
      "dicaOuro": "Exportar fontes = Gerenciar Fontes → Save As → .xml. Importar = colega abre Gerenciar Fontes → Open → arquivo .xml."
    }
  },
  {
    "id": "mo101_q99",
    "text": "Um usuário criou um formulário Word com Controles de Conteúdo vinculados a partes XML personalizadas. Qual é a vantagem dessa abordagem em relação aos controles simples?",
    "options": [
      "Garante que o formulário funcione offline sem necessidade de licença",
      "Permite que os dados preenchidos sejam extraídos programaticamente por sistemas externos sem abrir o documento",
      "Torna o formulário compatível com versões antigas do Word",
      "Permite usar fórmulas matemáticas nos campos do formulário"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Formulários e Macros",
    "explanation": {
      "intro": "Content Controls (controles simples) armazenam dados visualmente no documento. XML personalizadas expõem dados em estrutura processável.",
      "papoReto": "Controle de Conteúdo vinculado a XML personalizado armazena dados em partes XML dentro do documento (.docx é ZIP com XML interno). Sistemas externos podem extrair esses dados via API/código sem abrir visualmente — leem a estrutura XML. Controles simples = dados apenas visíveis no UI; hard para automação.",
      "respostaCerta": "Permite que os dados preenchidos sejam extraídos programaticamente por sistemas externos sem abrir o documento",
      "puloDoGato": "XML personalizado = Integração com ERP/CRM. Sistema recebe .docx, processa XML, extrai dados, povoa banco de dados automaticamente.",
      "cascasDeBanana": [
        "Funcione offline: Ambos funcionam offline. Conectividade não é diferença.",
        "Compatível com versões antigas: XML personalizado é MAIS novo — older Word não reconhece. Pelo contrário.",
        "Fórmulas matemáticas: Controles não executam fórmulas — eles armazenam texto/números. Isso não é característica deles."
      ],
      "dicaOuro": "XML personalizado = dados estruturados para automação. Controles simples = apenas UI. Integração de sistemas = sempre XML."
    }
  },
  {
    "id": "mo101_q100",
    "text": "Um usuário precisa permitir que revisores diferentes editem seções específicas de um documento enquanto o restante permanece bloqueado. Qual recurso do Word permite essa configuração granular?",
    "options": [
      "Proteger Documento com senha diferente por seção",
      "Criar documentos separados para cada seção e mesclar ao final",
      "Revisão → Restringir Edição → Exceções → selecionar seções e atribuir grupos ou usuários específicos",
      "Usar permissões de arquivo do Windows para cada seção"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Restrição granular de edição no Word permite bloquear o documento inteiro mas liberar seções específicas para usuários/grupos.",
      "papoReto": "Primeiro, inserir Seções (quebras contínuas) para dividir o documento. Depois Revisão → Restringir Edição → marca-se 'Permitir apenas edição nessas regiões' → clica em 'Exceções'. Dialog exibe lista de seções — você seleciona quais são editáveis e atribui usuário ou grupo AD específico a cada uma. Salva, distribui arquivo. Revisor A só edita Seção 1, Revisor B só Seção 3, resto bloqueado.",
      "respostaCerta": "Revisão → Restringir Edição → Exceções → selecionar seções e atribuir grupos ou usuários específicos",
      "puloDoGato": "'Exceções' = as áreas QUE PODEM ser editadas. Tudo mais fica protegido. Precisa de senhas ou autenticação AD para que restrição seja legítima.",
      "cascasDeBanana": [
        "Senhas diferentes por seção: Não existe. Senha é global ao documento — você só pode ter 1 para desbloquear tudo.",
        "Documentos separados mesclados: Funciona mas não é elegante. Depois da colaboração, mesclagem é manual e propenso a erros.",
        "Permissões do Windows: NTFS permissions controlam arquivo (abrir/fechar), não edição dentro do documento em nível de seção."
      ],
      "dicaOuro": "Seções + Restringir Edição + Exceções = reviwers específicos em áreas específicas. Isso é controle de colaboração nativa."
    }
  },
  {
    "id": "mo101_q101",
    "text": "Um usuário deseja aplicar um estilo a todos os parágrafos do documento que atualmente usam formatação manual sem estilo definido. Qual é a abordagem mais eficiente?",
    "options": [
      "Usar o Pincel de Formatação em cada parágrafo individualmente",
      "Usar Localizar e Substituir → Mais → Formatar → Sem Estilo e substituir pelo estilo desejado",
      "Selecionar todo o documento com Ctrl+A e aplicar o estilo",
      "Criar uma macro que percorre todos os parágrafos e aplica o estilo"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Estilos e Modelos",
    "explanation": {
      "intro": "Parágrafos com formatação manual em vez de estilos precisam ser convertidos para aplicar estilos globalmente.",
      "papoReto": "Localizar e Substituir (Ctrl+H) → clica 'Mais' → 'Formatar' → busca por 'Sem Estilo' (texto sem estilo aplicado). Depois na seção de Substituição, escolhe o estilo desejado e substitui todos. Isso detecta apenas parágrafos SEM estilo, ignorando os que já têm.",
      "respostaCerta": "Usar Localizar e Substituir → Mais → Formatar → Sem Estilo e substituir pelo estilo desejado",
      "puloDoGato": "Ctrl+A e aplicar estilo SOBRESCREVE estilos existentes. Localizar específico 'Sem Estilo' = laser-targeted, não vai quebrar o que já está certo.",
      "cascasDeBanana": [
        "Pincel de Formatação: Aplicar 1 por 1 é impossível em centenas de parágrafos. Manual demais.",
        "Ctrl+A + aplicar estilo: Sobrescreve TUDO, inclusive estilos já aplicados (títulos, cabeçalhos, etc).",
        "Macro: Funciona, mas Localizar é built-in e mais rápido (e não precisa confiar em código VBA)."
      ],
      "dicaOuro": "Converter formatação manual para estilo = Localizar 'Sem Estilo' → Substituir por estilo desejado."
    }
  },
  {
    "id": "mo101_q102",
    "text": "Um usuário precisa que um estilo de parágrafo herde automaticamente as propriedades de outro estilo base e adicione apenas recuo à esquerda de 1,25 cm. Como deve configurar?",
    "options": [
      "Usar o Painel de Estilos → Inspecionar Estilo para clonar o estilo base",
      "Copiar o estilo base e renomear com as alterações",
      "Modificar o estilo → Estilo baseado em → selecionar o estilo base → adicionar apenas o recuo desejado",
      "Criar um novo estilo do zero com todas as propriedades"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Estilos e Modelos",
    "explanation": {
      "intro": "Herança de estilos permite que um novo estilo herde propriedades de outro e só adicione diferenças mínimas.",
      "papoReto": "Painel de Estilos (F11) → direito no estilo → Modificar → em 'Estilo baseado em' dropdown, seleciona o estilo pai. Agora este estilo herda TODAS as propriedades do pai (fonte, tamanho, cor, espaçamento). Você modifica apenas o que precisa (ex.: recuo à esquerda). Se o pai mudar, este novo estilo atualiza automaticamente.",
      "respostaCerta": "Modificar o estilo → Estilo baseado em → selecionar o estilo base → adicionar apenas o recuo desejado",
      "puloDoGato": "Herança = documentação viva. Cópia estática = quebra-cabeça de manutenção. Sempre que 'deve herdar', pense 'Estilo baseado em'.",
      "cascasDeBanana": [
        "Copiar e renomear: Cria cópia congelada — não herda mais. Mudanças no pai não afetam a cópia.",
        "Do zero: Reescreve todas as propriedades — redundância e manutenção difícil.",
        "Inspecionar Estilo: Ferramenta para entender estilos existentes, não para criar novos herdeiros."
      ],
      "dicaOuro": "'Estilo baseado em' = herança. Novo estilo é 'delta' (diferença) do pai, não cópia completa."
    }
  },
  {
    "id": "mo101_q103",
    "text": "Um usuário precisa que o cabeçalho da seção 2 de um documento seja diferente do cabeçalho da seção 1. O que deve fazer primeiro?",
    "options": [
      "Usar campos condicionais no cabeçalho para alternar o conteúdo",
      "Quebrar o vínculo entre os cabeçalhos das seções clicando em \"Vincular ao Anterior\" para desativá-lo",
      "Criar um estilo de cabeçalho diferente para cada seção",
      "Inserir uma Quebra de Página entre as seções"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Por padrão, cabeçalhos de diferentes seções são VINCULADOS — mudanças em um afetam todos.",
      "papoReto": "Duplo-clique no cabeçalho da Seção 2 → Design (Ferramentas de Cabeçalho e Rodapé) → desmarcar 'Vincular ao Anterior'. Agora Seção 2 tem cabeçalho independente. Editar cabeçalho de Seção 2 não afeta Seção 1. Você pode ter cabeçalhos totalmente diferentes por seção.",
      "respostaCerta": "Quebrar o vínculo entre os cabeçalhos das seções clicando em \"Vincular ao Anterior\" para desativá-lo",
      "puloDoGato": "Padrão = vinculado (economiza trabalho repetitivo em docs simples). Desvinculação = controle granular para docs complexos.",
      "cascasDeBanana": [
        "Quebra de Página: Quebra de página = nova página mesma seção. Não afeta cabeçalhos. Precisa ser quebra de SEÇÃO.",
        "Estilo de cabeçalho diferente: Estilos controlam formatação, não conteúdo. Mesmo estilo, você ainda precisa desvinc ular para ter textos diferentes.",
        "Campos condicionais: Possível, mas hacky. Desvinculação é simples e nativa."
      ],
      "dicaOuro": "Cabeçalhos vinculados = mesmos em todas seções (default). Desvinc ular = cabeçalhos únicos por seção."
    }
  },
  {
    "id": "mo101_q104",
    "text": "Qual tipo de Quebra de Seção deve ser inserida para que o conteúdo após a quebra inicie sempre em uma página ímpar?",
    "options": [
      "Quebra de Seção → Contínua",
      "Quebra de Seção → Próxima Página",
      "Quebra de Seção → Página Ímpar",
      "Quebra de Seção → Página Par"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Quebras de seção controlam quando um novo conteúdo força nova página e qual tipo (par, ímpar, contínua).",
      "papoReto": "Página Ímpar = conteúdo após quebra sempre começa em página ímpar (1, 3, 5...). Útil em livros/relatórios onde capítulos sempre começam do lado direito. Layout → Quebras → Quebra de Seção → Página Ímpar.",
      "respostaCerta": "Quebra de Seção → Página Ímpar",
      "puloDoGato": "Página Par = lado esquerdo (2, 4, 6...). Próxima Página = deixa uma página em branco se necessário, mas não garante par/ímpar.",
      "cascasDeBanana": [
        "Próxima Página: Pula para página seguinte, MAS pode ser par ou ímpar — não força par/ímpar específico.",
        "Contínua: Sem quebra de página — conteúdo flui na mesma página.",
        "Página Par: Força lado esquerdo (par) — contrário do pedido."
      ],
      "dicaOuro": "Ímpar/Par = para livros/relatórios profissionais. Próxima Página = apenas garante página nova, não posição."
    }
  },
  {
    "id": "mo101_q105",
    "text": "Um usuário deseja que apenas uma parte do documento seja formatada em duas colunas enquanto o restante permanece em uma coluna. Qual é a abordagem correta?",
    "options": [
      "Formatar o documento inteiro em duas colunas e inserir colunas em branco nas demais seções",
      "Selecionar o texto desejado → Layout → Colunas → Duas; o Word insere quebras de seção automaticamente",
      "Usar uma tabela de duas colunas para simular o layout de colunas",
      "Inserir manualmente Quebras de Seção antes e depois do trecho e depois aplicar colunas à seção do meio"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Colunas (multi-column layout) aplicam-se a SEÇÕES — para uma seção, Word cria quebras automaticamente.",
      "papoReto": "Seleciona o texto que quer em colunas → Layout → Colunas → escolhe 'Duas' (ou mais). Word detecta a seleção, cria uma seção automaticamente em volta, aplica colunas. Sem necessidade de inserir quebras manualmente — Word faz.",
      "respostaCerta": "Selecionar o texto desejado → Layout → Colunas → Duas; o Word insere quebras de seção automaticamente",
      "puloDoGato": "Quando você seleciona, Word é inteligente: 'ah, usuário quer colunas nesse trecho específico' → cria seção e aplica.",
      "cascasDeBanana": [
        "Tabela: Simula colunas, mas sem o fluxo de texto — coluna A vai até o final, depois coluna B. Não é fluxo genuíno.",
        "Manual breakpoints: Você faz tudo — quebras antes, depois, aplica colunas. Mais passos, prone to error.",
        "Documento todo + branco: Toda coluna tem conteúdo ou está vazia — não dá para ter uma seção com colunas e outra sem em um passo simples."
      ],
      "dicaOuro": "Quer colunas em parte do doc? Seleciona a parte → Layout → Colunas. Word cuida das seções."
    }
  },
  {
    "id": "mo101_q106",
    "text": "Um usuário formatou um trecho em duas colunas e quer que o texto se distribua igualmente entre as duas colunas sem atingir o final da página. O que deve inserir ao final do trecho?",
    "options": [
      "Quebra de Página ao final da segunda coluna",
      "Quebra de Seção Contínua ao final do trecho de duas colunas",
      "Campo de Balanceamento de Colunas via Inserir → Campo",
      "Quebra de Coluna manual em cada parágrafo"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Depois de um trecho em colunas, você precisa encerrar as colunas para voltar a 1 coluna no resto do documento.",
      "papoReto": "Coloca-se o cursor no final do trecho com colunas → Layout → Quebras → Quebra de Seção Contínua. Isso cria uma nova seção após as colunas, com formatação de 1 coluna (padrão). Texto após a quebra volta ao normal. Contínua = na mesma página (não pula para nova página).",
      "respostaCerta": "Quebra de Seção Contínua ao final do trecho de duas colunas",
      "puloDoGato": "Contínua = mesma página. Se você usar 'Próxima Página', aí pula página (desnecessário se quer fluxo).",
      "cascasDeBanana": [
        "Quebra de Coluna manual: Pula colunas (força texto para próxima coluna), não termina coluna.",
        "Quebra de Página: Cria nova página — desperdiça espaço em branco se colunas não preencheram a página.",
        "Campo de Balanceamento: Não existe esse campo padrão. Balanceamento automático é feature da seção, não campo."
      ],
      "dicaOuro": "Encerrar colunas = Quebra de Seção Contínua + mude Colunas para 1. Tudo no mesmo lugar (Layout)."
    }
  },
  {
    "id": "mo101_q107",
    "text": "O que é um Indicador (Bookmark) no Word e para que serve?",
    "options": [
      "Um marcador de posição nomeado no documento que permite navegação rápida e referência cruzada a esse ponto",
      "Um campo automático que exibe o número da página atual",
      "Uma âncora de hiperlink para páginas externas",
      "Um comentário oculto inserido pelo revisor"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Referências",
    "explanation": {
      "intro": "Um Indicador é um ponto nomeado no documento — permite ir lá rapidamente ou referenciar em outro lugar.",
      "papoReto": "Bookmark = marca uma posição (ou intervalo de texto) e dá um nome. Depois você cria hyperlink interno para lá, ou usa em campos REF para puxar o conteúdo. Exemplo: marca cabeçalho 'Introdução' como bookmark 'IntroSection' → em outro lugar insere { REF IntroSection } → aparece o texto do bookmark, atualizado se mudar.",
      "respostaCerta": "Um marcador de posição nomeado no documento que permite navegação rápida e referência cruzada a esse ponto",
      "puloDoGato": "Bookmark é ESTRUTURAL (posição/conteúdo nomeado), não visual (como comentário). Invisível ao leitor a não ser que você crie hyperlink.",
      "cascasDeBanana": [
        "Comentário: Comentários são anotações, visíveis em painel lateral. Bookmarks são silenciosos.",
        "Âncora de hiperlink externo: Bookmarks são para DENTRO do documento. Hiperlinks externos apontam para URLs/outros arquivos.",
        "Campo de página: { PAGE } exibe número dinâmico. Bookmark é posição/conteúdo, não número."
      ],
      "dicaOuro": "Bookmark = nome para posição/texto. Referenciar depois com REF ou hiperlink interno."
    }
  },
  {
    "id": "mo101_q108",
    "text": "Como um usuário insere um Indicador em um trecho de texto no Word?",
    "options": [
      "Inserir → Hyperlink → Indicador → Novo",
      "Selecionar o texto → Referências → Marcar Entrada → Indicador",
      "Selecionar o texto → Inserir → Indicador → digitar o nome → Adicionar",
      "Revisão → Comentários → Inserir Indicador"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Referências",
    "explanation": {
      "intro": "Criar um Indicador envolve seleção de texto e nomeação via menu Inserir.",
      "papoReto": "Seleciona o texto (ou apenas posição do cursor) → Inserir (aba) → Indicador (dropdown) → digita nome (ex.: 'Conclusão', sem espaços) → clica 'Adicionar'. Indicador fica invisível no documento, mas você pode agora referenciar com { REF Conclusão } ou criar hyperlink para lá.",
      "respostaCerta": "Selecionar o texto → Inserir → Indicador → digitar o nome → Adicionar",
      "puloDoGato": "Nomes sem espaços, sem caracteres especiais. 'Conclusão' OK, 'Conclusão da Seção' não (espaços).",
      "cascasDeBanana": [
        "Referências → Marcar Entrada: Isso é para ÍNDICE remissivo (XE fields), não bookmarks.",
        "Hyperlink → Indicador: Hyperlinks usam bookmarks como alvo, não criam. Caminho reverso.",
        "Revisão → Comentários: Comentários é outra coisa — não tem relação com bookmarks."
      ],
      "dicaOuro": "Inserir → Indicador = criar bookmark. Depois: REF ou hyperlink para usar."
    }
  },
  {
    "id": "mo101_q109",
    "text": "Um usuário precisa que o texto de um Indicador apareça em outro local do documento e seja atualizado automaticamente se o original mudar. Qual campo deve usar?",
    "options": [
      "{ LINK NomeDoIndicador }",
      "{ COPY NomeDoIndicador }",
      "{ HYPERLINK NomeDoIndicador }",
      "{ REF NomeDoIndicador }"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Referências",
    "explanation": {
      "intro": "O campo REF puxa conteúdo de um indicador (bookmark) e atualiza automaticamente se o original mudar.",
      "papoReto": "{ REF NomeDoIndicador } = reference (referência) ao bookmark. Busca o conteúdo do bookmark e exibe. Se o bookmark mudar, você pressiona F9 (atualizar campo) e o REF atualiza. HYPERLINK cria link clicável, não puxa conteúdo.",
      "respostaCerta": "{ REF NomeDoIndicador }",
      "puloDoGato": "REF = content pulling (busca o texto). LINK/HYPERLINK = navigation (leva você lá). Diferença de propósito.",
      "cascasDeBanana": [
        "HYPERLINK: Cria link clicável, mas não exibe o conteúdo do bookmark — você precisa clicar para ir lá.",
        "COPY: Campo inexistente — não há { COPY }.",
        "LINK: Usado para links a arquivos externos, não para bookmarks internos."
      ],
      "dicaOuro": "REF = exibe conteúdo do bookmark aqui. HYPERLINK = leva para o bookmark (você clica)."
    }
  },
  {
    "id": "mo101_q110",
    "text": "Um usuário precisa que um modelo corporativo seja atualizado automaticamente em todos os documentos existentes baseados nele quando os estilos do modelo forem modificados. Qual configuração dos documentos garante esse comportamento?",
    "options": [
      "Ativar \"Atualizar estilos do documento automaticamente a partir do modelo\" nas configurações do documento via Desenvolvedor → Modelos de Documento",
      "Reabrir cada documento e aceitar as atualizações manualmente",
      "Usar o Gerenciador de Estilos para sincronizar individualmente",
      "Salvar o modelo com o mesmo nome e substituir o arquivo original"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Estilos e Modelos",
    "explanation": {
      "intro": "Documentos baseados em um template podem se manter sincronizados com estilos do template automaticamente.",
      "papoReto": "Aba Desenvolvedor (Developer) → Modelos de Documento (Templates) → checkbox 'Atualizar estilos do documento automaticamente a partir do modelo' (Automatically Update Document Styles). Ativa isso. Agora sempre que você abre o documento, se o .dotm foi modificado, o documento puxa os estilos atualizados. Sem necessidade de sincronização manual.",
      "respostaCerta": "Ativar \"Atualizar estilos do documento automaticamente a partir do modelo\" nas configurações do documento via Desenvolvedor → Modelos de Documento",
      "puloDoGato": "Isso é útil em ambiente corporativo onde o template é centralizado e precisa aplicar mudanças de formatação em lote.",
      "cascasDeBanana": [
        "Reabrir e aceitar manualmente: Possível, mas manual demais. Você quer automático para 100 documentos.",
        "Gerenciador de Estilos individual: Sincroniza um por um — escalabilidade ruim.",
        "Substituir arquivo .dotm: Risco de perder a associação ou sobrescrever documentos. Não é a abordagem segura."
      ],
      "dicaOuro": "Template atualização automática = Desenvolvedor → Modelos de Documento → checkbox. Documentos ficam sincronizados."
    }
  },
  {
    "id": "mo101_q111",
    "text": "Um usuário precisa criar uma macro que insira automaticamente a data atual formatada em um local específico do documento ao ser executada. Qual objeto VBA representa o ponto de inserção no documento?",
    "options": [
      "Application.ActiveWindow.Selection",
      "ActiveDocument.Content.InsertAfter",
      "Selection.TypeText ou ActiveDocument.Bookmarks(\"\\Sel\").Range",
      "Document.Paragraphs.Last.Range.InsertAfter"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Formulários e Macros",
    "explanation": {
      "intro": "VBA em Word tem objetos que representam a posição atual — Selection é o mais direto.",
      "papoReto": "Selection representa a seleção/cursor do usuário no documento. Selection.TypeText() insere texto ali. Ou: ActiveDocument.Bookmarks(\"\\Sel\") é um bookmark especial que aponta para a seleção atual. Ambas funcionam para 'inserir no ponto de inserção'.",
      "respostaCerta": "Selection.TypeText ou ActiveDocument.Bookmarks(\"\\Sel\").Range",
      "puloDoGato": "Content = documento inteiro. Selection = ponto específico. Para 'aqui', use Selection.",
      "cascasDeBanana": [
        "Content.InsertAfter: Insere no FIM do documento, não no ponto de inserção.",
        "Application.ActiveWindow.Selection: Redundante — Selection (sozinho) já refere a janela ativa.",
        "Paragraphs.Last.Range: Último parágrafo do documento, não a seleção atual."
      ],
      "dicaOuro": "Selection = onde o cursor está. Selection.TypeText() = insere ali. Padrão para macros de inserção."
    }
  },
  {
    "id": "mo101_q112",
    "text": "Um usuário quer atribuir uma macro a um botão na Barra de Ferramentas de Acesso Rápido. Qual caminho deve seguir?",
    "options": [
      "Arquivo → Opções → Barra de Ferramentas de Acesso Rápido → Escolher comandos de: Macros → selecionar e adicionar",
      "Exibir → Macros → Opções → Adicionar à Barra de Acesso Rápido",
      "Guia Desenvolvedor → Macros → Atribuir a Botão",
      "Clicar com o botão direito na macro no Painel VBA e selecionar \"Adicionar à Barra\""
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Formulários e Macros",
    "explanation": {
      "intro": "Personalizar a Barra de Ferramentas de Acesso Rápido envolve selecionar macros como comandos disponíveis.",
      "papoReto": "Arquivo → Opções → Barra de Ferramentas de Acesso Rápido → dropdown 'Escolher comandos de:' → seleciona 'Macros' → lista exibe todas suas macros → seleciona a desejada → clica 'Adicionar >' → macro aparece na barra.",
      "respostaCerta": "Arquivo → Opções → Barra de Ferramentas de Acesso Rápido → Escolher comandos de: Macros → selecionar e adicionar",
      "puloDoGato": "Macros não são 'comandos built-in' — precisa explicitamente dizer ao Word 'busque em Macros' (não em Comandos Populares).",
      "cascasDeBanana": [
        "Desenvolvedor → Macros → Atribuir: Menu não tem isso — Desenvolvedor tem Macros (para gerenciar), não atribuir.",
        "Exibir → Macros: Exibir mostra painéis e views, não para adicionar à barra.",
        "Clicar direito no Painel VBA: Painel VBA é editor, não interface de customização da barra."
      ],
      "dicaOuro": "Opções → Barra de Ferramentas → Escolher 'Macros' → selecionar → Adicionar."
    }
  },
  {
    "id": "mo101_q113",
    "text": "Um usuário precisa usar uma consulta SQL personalizada como fonte de dados de uma mala direta conectada a um banco de dados Access. Como deve proceder?",
    "options": [
      "Correspondências → Selecionar Destinatários → Digitar Nova Lista → importar SQL",
      "Criar uma macro VBA que executa a consulta e preenche a fonte de dados",
      "Exportar a consulta do Access para Excel e usar o Excel como fonte",
      "Correspondências → Selecionar Destinatários → Usar Lista Existente → selecionar o arquivo .accdb → selecionar a consulta desejada"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Mala Direta",
    "explanation": {
      "intro": "Word pode usar uma consulta SQL (query) diretamente de um banco Access como fonte de dados para mail merge.",
      "papoReto": "Correspondências → Selecionar Destinatários → 'Usar Lista Existente' → procura o .accdb → Word detecta as tables E queries dentro → seleciona a query desejada. Word conecta direto — sem exportar para Excel ou criar macro.",
      "respostaCerta": "Correspondências → Selecionar Destinatários → Usar Lista Existente → selecionar o arquivo .accdb → selecionar a consulta desejada",
      "puloDoGato": "Access .accdb é formato nativo suportado. SQL query dentro do Access fica acessível como 'lista' para Word.",
      "cascasDeBanana": [
        "Exportar para Excel: Funciona, mas cria arquivo intermediário — menos eficiente se dados mudam.",
        "Macro VBA: Possível, mas manual — Word nativo suporta Access, não precisa VBA.",
        "Digitar Nova Lista com SQL: Word não interpreta SQL raw — precisa ser banco acessível (Access/ODBC)."
      ],
      "dicaOuro": "Word + Access = integração nativa. Selecionar Destinatários → Usar Lista Existente → .accdb → query."
    }
  },
  {
    "id": "mo101_q114",
    "text": "Um usuário precisa que a mala direta exiba valores numéricos com duas casas decimais e separador de milhar. Qual chave de formatação aplica esse formato ao campo de mesclagem?",
    "options": [
      "{ MERGEFIELD Valor \\@ \"0.00\" }",
      "{ MERGEFIELD Valor \\# \"#.##0,00\" }",
      "{ MERGEFIELD Valor \\* Decimal }",
      "{ MERGEFIELD Valor \\# \"0,00\" }"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Mala Direta",
    "explanation": {
      "intro": "Números em merge fields precisam de formatação — switch \\# (hash) define padrão de exibição.",
      "papoReto": "Switch \\# define número format. \"#.##0,00\" = mil-separador (.) + dois decimais (,). # = dígito opcional, 0 = obrigatório. Exemplo: 1234.56 → \"1.234,56\" (padrão Português).",
      "respostaCerta": "{ MERGEFIELD Valor \\# \"#.##0,00\" }",
      "puloDoGato": "\\@ é para DATA (não número). \\* é para formato geral. \\# é NÚMEROs especificamente.",
      "cascasDeBanana": [
        "\\@ \"0.00\": Switch de data, não número.",
        "\\* Decimal: Converte para texto decimal, não formata casas.",
        "\"0,00\" sem #: Não inclui separador de milhar (só dois decimais, sem pontos mil)."
      ],
      "dicaOuro": "Números em merge: \\# \"#.##0,00\". Data: \\@ \"dd/mm/yyyy\"."
    }
  },
  {
    "id": "mo101_q115",
    "text": "Um usuário deseja inserir um hiperlink em um documento Word que abra um endereço de e-mail ao ser clicado. Qual tipo de hiperlink deve usar?",
    "options": [
      "Inserir → Link → Página Web → prefixo mailto:",
      "Inserir → Texto Rápido → Email → Hiperlink",
      "Inserir → Link → Endereço de Email → preencher o endereço e assunto",
      "Correspondências → Inserir Campo de Mesclagem → Email"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Hiperlinks de email têm uma opção dedicada no diálogo de inserção.",
      "papoReto": "Inserir → Link (ou Ctrl+K) → em vez de 'Site da Web', escolhe 'Endereço de Email' (lado esquerdo) → preenche email + assunto opcional → OK.",
      "respostaCerta": "Inserir → Link → Endereço de Email → preencher o endereço e assunto",
      "puloDoGato": "Campo dedicado de email facilita — sem precisar digitar 'mailto:' manualmente ou usar Página Web.",
      "cascasDeBanana": [
        "Página Web + mailto: Funciona técnicamente, mas requer digitar mailto: manualmente. Caminho mais longo.",
        "Texto Rápido: Para fragmentos repetidos, não para hiperlinks.",
        "Correspondências/Campo: Para dados dinâmicos, não para criar hiperlink estático."
      ],
      "dicaOuro": "Email hiperlink = Inserir → Link → 'Endereço de Email'. Caminho direto."
    }
  },
  {
    "id": "mo101_q116",
    "text": "Um usuário inseriu hiperlinks em um documento Word e deseja remover todos os hiperlinks de uma só vez mantendo o texto. Qual é a forma mais eficiente?",
    "options": [
      "Selecionar tudo com Ctrl+A e pressionar Ctrl+Shift+F9 para desvincular todos os campos",
      "Usar Localizar e Substituir → Formatar → Estilo → Hiperlink e substituir por texto sem formatação",
      "Usar macro VBA para iterar pelos hiperlinks e remover individualmente",
      "Clicar com o botão direito em cada hiperlink e selecionar \"Remover Hiperlink\""
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Hiperlinks em Word são campos — Ctrl+Shift+F9 desvincula TODOS os campos (hiperlinks inclusive) em uma só vez.",
      "papoReto": "Ctrl+A (seleciona tudo) → Ctrl+Shift+F9 (desvincular campos) → hiperlinks viram texto puro (azul sublinhado vira preto normal). Conteúdo mantém, formatação de hiperlink vai.",
      "respostaCerta": "Selecionar tudo com Ctrl+A e pressionar Ctrl+Shift+F9 para desvincular todos os campos",
      "puloDoGato": "Desvincular = converte campo para valor estático. Hiperlinks não funcionam mais, mas texto fica.",
      "cascasDeBanana": [
        "Clicar direito um por um: Funciona, mas com 100 hiperlinks é impraticável.",
        "Localizar/Substituir de estilo: Controla formatação, mas não remove hiperlinks propriamente.",
        "Macro: Necessário apenas se quer lógica condicional. Ctrl+Shift+F9 nativo é mais simples."
      ],
      "dicaOuro": "Remover todos hiperlinks = Ctrl+A → Ctrl+Shift+F9. Rápido e universal."
    }
  },
  {
    "id": "mo101_q117",
    "text": "Um usuário precisa criar uma lista numerada em vários níveis onde o nível 2 exibe o número do pai seguido do próprio número (ex: 1.1, 1.2, 2.1). Qual recurso do Word permite isso?",
    "options": [
      "Usar Numeração Automática com Tab para subníveis",
      "Criar uma tabela numerada com fórmulas",
      "Formatar manualmente cada item da lista",
      "Definir Nova Lista Multinível com a opção \"Incluir número do nível\" para os subníveis"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Estilos e Modelos",
    "explanation": {
      "intro": "Listas multinível precisam incluir o número do nível pai para gerar numeração hierárquica (1.1, 1.2).",
      "papoReto": "Página Inicial (Home) → Numeração dropdown → 'Definir Nova Lista Multinível' → dialog exibe níveis 1, 2, 3... → seleciona nível 2 → em 'Formato:', marca 'Incluir número do nível anterior' (ou 'Include level number from') → formato fica 'Nível 1 . Nível 2'. Resultado: 1.1, 1.2.",
      "respostaCerta": "Definir Nova Lista Multinível com a opção \"Incluir número do nível\" para os subníveis",
      "puloDoGato": "Sem 'Incluir nível anterior', nível 2 seria apenas \"1, 2, 3\" (aparentemente igual ao nível 1).",
      "cascasDeBanana": [
        "Tab para subníveis: Tab muda de nível, mas não controla FORMAT (como números aparecem).",
        "Manual: Impraticável em 100 itens. Não é dinâmico.",
        "Tabela com fórmulas: Simula estrutura, mas não é lista nativa — não funciona com estilos de título."
      ],
      "dicaOuro": "Numeração hierárquica (1.1, 1.2) = Definir Nova Lista Multinível + 'Incluir nível anterior'."
    }
  },
  {
    "id": "mo101_q118",
    "text": "Um usuário criou uma lista multinível vinculada a estilos de Título. Após editar o documento, a numeração de alguns títulos ficou incorreta. Qual é a forma mais eficiente de corrigir?",
    "options": [
      "Usar Localizar e Substituir para corrigir os números",
      "Desvincular a lista dos estilos e numerar manualmente",
      "Clicar no título com numeração incorreta → Parágrafo → Lista → Continuar Numeração ou Reiniciar Numeração conforme necessário",
      "Excluir e redigitar todos os títulos com numeração"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Estilos e Modelos",
    "explanation": {
      "intro": "Listas multinível vinculadas a estilos podem 'quebrar' a sequência após edições — opção Parágrafo corrige.",
      "papoReto": "Clica no parágrafo (título) com número errado → clique direito → Parágrafo → aba Esboco (Outline) / Lista → opções 'Continuar Numeração' (prossegue sequência) ou 'Reiniciar Numeração' (volta a 1). Repete conforme necessário para cada título fora de sequência.",
      "respostaCerta": "Clicar no título com numeração incorreta → Parágrafo → Lista → Continuar Numeração ou Reiniciar Numeração conforme necessário",
      "puloDoGato": "Word às vezes 'reseta' contadores ao deletar/inserir. Essas opções reparar sem refazer tudo.",
      "cascasDeBanana": [
        "Redigitar: Destruidor. Perde conteúdo e estilos.",
        "Desvinc ular e manual: Perde vínculo com estilos — futuras mudanças de template não propagam.",
        "Localizar/Substituir: Opera em texto, não em estrutura de lista."
      ],
      "dicaOuro": "Numeração errada em lista = Parágrafo → 'Continuar/Reiniciar Numeração'."
    }
  },
  {
    "id": "mo101_q119",
    "text": "Um usuário deseja imprimir apenas as páginas 1, 3 e as páginas de 7 a 10 de um documento Word. Como deve especificar no diálogo de impressão?",
    "options": [
      "Selecionar \"Impressão Personalizada\" e marcar as páginas individualmente",
      "Digitar \"1,3,7-10\" no campo Páginas do diálogo de impressão",
      "Imprimir cada intervalo separadamente em três operações",
      "Usar Ctrl+Clique para selecionar as páginas no Painel de Navegação antes de imprimir"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "O diálogo de impressão aceita sintaxe para selecionar páginas não-contíguas.",
      "papoReto": "Arquivo → Imprimir → campo 'Páginas' (Pages) → digita \"1,3,7-10\" (sem 'Páginas: ' prefixo) → Print. Sintaxe: vírgula separa itens soltos, hífen define intervalo. Imprime página 1, depois 3, depois 7–10.",
      "respostaCerta": "Digitar \"1,3,7-10\" no campo Páginas do diálogo de impressão",
      "puloDoGato": "Espaços na sintaxe são OK: \"1, 3, 7-10\" = \"1,3,7-10\".",
      "cascasDeBanana": [
        "Impressão Personalizada: Termo vago — nenhuma opção com esse nome exato em Word moderno.",
        "Ctrl+Clique no Painel: Painel permite navegação (ir para página), não seleção para impressão.",
        "Três operações: Funciona, mas ineficiente — uma sintaxe faz em um passo."
      ],
      "dicaOuro": "Páginas customizadas ao imprimir: campo 'Páginas' → \"1,3,7-10\". Vírgula = solto, hífen = intervalo."
    }
  },
  {
    "id": "mo101_q120",
    "text": "Um usuário precisa imprimir um documento Word de 20 páginas como um livreto dobrado em folhas A4. Qual configuração de impressão deve usar?",
    "options": [
      "Arquivo → Imprimir → Propriedades da Impressora → Livreto",
      "Exibir → Layout de Impressão → Livreto → Confirmar Impressão",
      "Layout → Margens → Livreto → Imprimir",
      "Arquivo → Imprimir → Configurar Página → Várias Páginas → Livreto"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Livretos (booklet layout) imprimem 2 páginas por folha, frente-verso, em sequência para dobra e grampeamento.",
      "papoReto": "Arquivo → Imprimir → no dialog, antes de clicar Imprimir, procura 'Configurar Página' ou 'Página Setup' button → aba 'Várias Páginas' (ou 'Multiple Pages') → dropdown 'Livreto' (Booklet) → OK → Imprimir. Word automaticamente ordena páginas (1-2 juntas na primeira folha impressa, 3-4 na segunda, etc.) para dobra central.",
      "respostaCerta": "Arquivo → Imprimir → Configurar Página → Várias Páginas → Livreto",
      "puloDoGato": "Livreto é configuração de layout/impressão, não format de arquivo. Precisa estar acessível via Imprimir (print dialog).",
      "cascasDeBanana": [
        "Propriedades da Impressora: Algumas impressoras têm opção, mas não é lugar padrão do Word.",
        "Layout → Margens: Isso controla margens do documento, não impressão como livreto.",
        "Exibir → Layout de Impressão: Preview visual, não executar impressão em livreto."
      ],
      "dicaOuro": "Imprimir como livreto = Arquivo → Imprimir → Configurar Página (button) → Várias Páginas → Livreto."
    }
  },
  {
    "id": "mo101_q121",
    "text": "Um usuário está escrevendo um trabalho acadêmico e precisa inserir uma citação de um livro já cadastrado na lista de fontes. Qual sequência deve seguir?",
    "options": [
      "Referências → Gerenciar Fontes → Inserir → selecionar a fonte",
      "Referências → Notas de Rodapé → Inserir Citação",
      "Referências → Inserir Citação → selecionar a fonte existente na lista",
      "Inserir → Campo → Citação → selecionar a fonte"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Referências",
    "explanation": {
      "intro": "Inserir citação é diferente de gerenciar fontes — uma é ação, outra é configuração.",
      "papoReto": "Referências → Inserir Citação (directamente) → dropdown exibe todas as fontes cadastradas → seleciona a que quer citar → insere citação no ponto de cursor. Gerenciar Fontes é para CRIAR/EDITAR/ORGANIZAR fontes.",
      "respostaCerta": "Referências → Inserir Citação → selecionar a fonte existente na lista",
      "puloDoGato": "Gerenciar = setup. Inserir Citação = usar setup já feito. Dois menus, dois propósitos.",
      "cascasDeBanana": [
        "Gerenciar Fontes → Inserir: Menu errado — Gerenciar é para criação, não para citações rápidas.",
        "Notas de Rodapé: Para citação em rodapé, mas a pergunta pede 'fonte já cadastrada' — Inserir Citação é direto.",
        "Campo → Citação: Rota indireta — Inserir Citação é native."
      ],
      "dicaOuro": "Inserir Citação = citação rápida da lista. Gerenciar Fontes = manutenção do banco."
    }
  },
  {
    "id": "mo101_q122",
    "text": "Um usuário precisa que as notas de rodapé reiniciem a numeração em 1 a cada nova página. Onde deve configurar esse comportamento?",
    "options": [
      "Layout → Configurar Página → Notas → Reiniciar por Página",
      "Arquivo → Opções → Avançado → Notas de Rodapé",
      "Inserir → Notas de Rodapé → Opções → Reiniciar Numeração",
      "Referências → menu de diálogo Notas de Rodapé → Numeração → Reiniciar a cada página"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Referências",
    "explanation": {
      "intro": "Notas de rodapé podem reiniciar numeração por página — isso se configura no diálogo específico.",
      "papoReto": "Referências → clique no pequeno expand button/seta (↘) no grupo 'Notas de Rodapé' → dialog abre → aba 'Numeração' ou seção → choose 'Reiniciar a cada página' (Restart each page). OK. Próximas páginas: notas começam em 1 novamente.",
      "respostaCerta": "Referências → menu de diálogo Notas de Rodapé → Numeração → Reiniciar a cada página",
      "puloDoGato": "Botão seta do grupo = abre dialog completo (não é botão 'Inserir Nota'). Dialog é o lugar de configuração global.",
      "cascasDeBanana": [
        "Inserir → Notas de Rodapé: Insere 1 nota, não configura formato.",
        "Layout → Configurar Página: Página setup, não notas.",
        "Opções → Avançado: Preferências globais Word, não notas específicas."
      ],
      "dicaOuro": "Notas → expand seta (↘) → dialog → Numeração → Reiniciar cada página."
    }
  },
  {
    "id": "mo101_q123",
    "text": "Um usuário deseja que o Word substitua automaticamente a abreviação \"sds\" pelo texto \"Sem mais para o momento, despedimo-nos cordialmente\" sempre que digitada. Qual recurso deve usar?",
    "options": [
      "Inserir → Texto Rápido → criar entrada de AutoTexto",
      "Ferramentas → Substituição Automática → adicionar par",
      "Criar uma macro atribuída a um atalho de teclado",
      "Arquivo → Opções → Revisão de Texto → Opções de AutoCorreção → AutoCorreção → adicionar a entrada"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "AutoCorreção substitui automaticamente abreviações enquanto o usuário digita — configuração central em Opções.",
      "papoReto": "Arquivo → Opções → Revisão de Texto (ou Proofing) → 'Opções de AutoCorreção' button → aba 'AutoCorreção' → adiciona entrada: 'Substituir: sds' / 'Por: Sem mais para o momento, despedimo-nos cordialmente' → OK. Depois ao digitar 'sds', Word substitui automaticamente.",
      "respostaCerta": "Arquivo → Opções → Revisão de Texto → Opções de AutoCorreção → AutoCorreção → adicionar a entrada",
      "puloDoGato": "AutoCorreção é automática (triggers ao digitar). AutoTexto é manual (Ctrl+Shift+T ou menu).",
      "cascasDeBanana": [
        "Texto Rápido: Manual (demanda). AutoCorreção: Automática (sem demanda).",
        "Ferramentas: Menu legacy — Opções é moderna.",
        "Macro: Possível, mas overkill — AutoCorreção é built-in simples."
      ],
      "dicaOuro": "AutoCorreção automática = Opções → Revisão de Texto → Opções de AutoCorreção."
    }
  },
  {
    "id": "mo101_q124",
    "text": "Qual é a diferença entre AutoCorreção e AutoTexto (Texto Rápido) no Word?",
    "options": [
      "AutoCorreção substitui texto enquanto o usuário digita automaticamente; AutoTexto armazena blocos de conteúdo formatado que são inseridos sob demanda",
      "AutoCorreção é global para todos os aplicativos Office; AutoTexto é exclusivo do Word",
      "AutoTexto substitui texto automaticamente; AutoCorreção requer confirmação do usuário",
      "Ambos funcionam da mesma forma mas AutoTexto suporta imagens"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "AutoCorreção e AutoTexto (Texto Rápido) são dois mecanismos de expansão diferentes com propósitos distintos.",
      "papoReto": "AutoCorreção: automática, simples (texto curto → texto curto), sem demanda. Exemplo: 'sds' → 'Sem mais...'. AutoTexto/Texto Rápido: manual, complexo (blocos formatados, com imagens/tabelas), sob demanda (Ctrl+Shift+T ou menu). Exemplo: template de contrato.",
      "respostaCerta": "AutoCorreção substitui texto enquanto o usuário digita automaticamente; AutoTexto armazena blocos de conteúdo formatado que são inseridos sob demanda",
      "puloDoGato": "AutoCorreção = speed typing (corrige enquanto digita). AutoTexto = library (armazena templates para reutilizar).",
      "cascasDeBanana": [
        "Automáticas ambas: AutoTexto é manual (demanda usuário).",
        "Imagens em ambos: AutoTexto suporta, AutoCorreção não.",
        "Global Office vs Word-only: AutoCorreção TAMBÉM é Word-specific (não Excel/Outlook)."
      ],
      "dicaOuro": "AutoCorreção = typing speed. AutoTexto = content library."
    }
  },
  {
    "id": "mo101_q125",
    "text": "Um usuário deseja salvar um bloco de texto formatado com logotipo para reutilização futura em qualquer documento. Qual recurso do Word é mais adequado?",
    "options": [
      "Copiar e colar em um documento de referência",
      "Arquivo → Salvar Como → Modelo .dotx",
      "Criar uma macro que insere o bloco de texto",
      "Inserir → Texto Rápido → Salvar Seleção na Galeria de Texto Rápido"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Selecionar e salvar um bloco formatado como Texto Rápido permite reutilização instant nos documentos.",
      "papoReto": "Seleciona o texto/logo (com toda formatação e imagens) → Inserir → Texto Rápido → 'Salvar Seleção na Galeria de Texto Rápido' → noma entrada (ex.: 'LogoHeader') → salva. Depois em qualquer documento: Inserir → Texto Rápido → escolhe 'LogoHeader' → insere.",
      "respostaCerta": "Inserir → Texto Rápido → Salvar Seleção na Galeria de Texto Rápido",
      "puloDoGato": "Texto Rápido preserva formatação/imagens. Template .dotx é para estrutura de documento inteiro, não blocos reutilizáveis.",
      "cascasDeBanana": [
        "Template .dotx: Para novo documento baseado em template. Não é para blocos reutilizáveis dentro de docs.",
        "Copiar/colar em doc de referência: Manual — não reutilizável centralmente.",
        "Macro: Overcomplicated. Texto Rápido é built-in simples."
      ],
      "dicaOuro": "Bloco reutilizável formatado = Inserir → Texto Rápido → Salvar Seleção."
    }
  },
  {
    "id": "mo101_q126",
    "text": "Um usuário criou entradas de Texto Rápido e deseja compartilhá-las com toda a equipe. Qual é a abordagem correta?",
    "options": [
      "Publicar as entradas no SharePoint como lista de itens",
      "Compartilhar o arquivo Normal.dotm pessoal do usuário",
      "Exportar as entradas como arquivo .docx e enviar por e-mail",
      "Salvar as entradas no modelo corporativo .dotx ou .dotm armazenado em local de rede compartilhado e distribuir o modelo"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Compartilhar Texto Rápido entre equipe requer distribuição centralizada — templates corporativos são o método.",
      "papoReto": "Criar/salvar Texto Rápido entradas (Inserir → Texto Rápido → Salvar Seleção) em um modelo .dotm corporativo → armazenar o modelo em pasta de rede compartilhada (ex.: \\\\servidor\\templates\\) → distribuir o modelo para todos. Quando abrem documentos baseados nesse modelo, Texto Rápido está disponível.",
      "respostaCerta": "Salvar as entradas no modelo corporativo .dotx ou .dotm armazenado em local de rede compartilhado e distribuir o modelo",
      "puloDoGato": "Texto Rápido é armazenado no template atual. Para compartilhar, template deve ser compartilhado.",
      "cascasDeBanana": [
        "Enviar .docx: Documento, não template — não distribuirá Texto Rápido globalmente.",
        "Normal.dotm pessoal: Cada usuário tem seu próprio Normal — não compartilhado.",
        "SharePoint lista: Texto Rápido não é recurso SharePoint — é recurso Word/template."
      ],
      "dicaOuro": "Compartilhar Texto Rápido em equipe = salvar em .dotm corporativo em rede compartilhada."
    }
  },
  {
    "id": "mo101_q127",
    "text": "Um usuário recebeu um documento com alterações rastreadas de três revisores diferentes e precisa aceitar apenas as alterações de um revisor específico. Qual é a abordagem correta?",
    "options": [
      "Usar Comparar para isolar as alterações de cada revisor",
      "Aceitar todas as alterações e desfazer as dos outros revisores manualmente",
      "Revisão → Mostrar Marcações → Revisores específicos → filtrar pelo revisor desejado → aceitar as alterações visíveis",
      "Não é possível filtrar alterações por revisor no Word"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Alterações rastreadas de múltiplos revisores podem ser filtradas por autor — Word oferece isso nativamente.",
      "papoReto": "Revisão → Mostrar Marcações (dropdown) → seleciona 'Revisores Específicos' → checkboxes aparecem com nomes dos revisores → desmarcar todos exceto o desejado → agora só aparecem alterações daquele revisor → Aceitar/Rejeitar as visíveis → depois repetir para próximo revisor.",
      "respostaCerta": "Revisão → Mostrar Marcações → Revisores específicos → filtrar pelo revisor desejado → aceitar as alterações visíveis",
      "puloDoGato": "Filtro é visual (temporário) — não deleta alterações, só mostra/esconde. Reversível.",
      "cascasDeBanana": [
        "Aceitar tudo e desfazer: Impossível reverter sem rastreamento ativado novamente.",
        "Comparar: Para documentos inteiros, não para filtro de revisor.",
        "Não é possível: FALSO — opção nativa existe."
      ],
      "dicaOuro": "Filtrar revisões por autor = Revisão → Mostrar Marcações → Revisores Específicos."
    }
  },
  {
    "id": "mo101_q128",
    "text": "Qual é a diferença entre os modos de exibição \"Mostrar Marcações\" e \"Sem Marcações\" no painel de Controle de Alterações?",
    "options": [
      "Sem Marcações aceita permanentemente todas as alterações",
      "Mostrar Marcações exibe todas as inserções e exclusões rastreadas visualmente; Sem Marcações mostra como o documento ficaria se todas as alterações fossem aceitas sem removê-las",
      "Mostrar Marcações bloqueia novas edições no documento",
      "Sem Marcações oculta apenas os comentários mantendo as alterações visíveis"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Modos de exibição no Controle de Alterações mostram diferentes perspectivas — um editorial, outro preview.",
      "papoReto": "Mostrar Marcações: vermelho riscado (deletado), azul inserido (novo). Você vê COMO foi editado (histórico visual). Sem Marcações: preview limpo — mostra resultado FINAL se todas forem aceitas. Nenhum dos dois aceita automaticamente — são vistas, não ações.",
      "respostaCerta": "Mostrar Marcações exibe todas as inserções e exclusões rastreadas visualmente; Sem Marcações mostra como o documento ficaria se todas as alterações fossem aceitas sem removê-las",
      "puloDoGato": "Mostrar Marcações = 'que mudou'. Sem Marcações = 'como ficaria pronto'.",
      "cascasDeBanana": [
        "Aceita permanentemente: Ambos modos apenas MOSTRAM — aceitação é ação separada (botão).",
        "Bloqueia edições: Ambos permitem edição — rastreamento de alterações não bloqueia.",
        "Oculta comentários: Comentários são separados de alterações."
      ],
      "dicaOuro": "Marcações = editorial view. Sem Marcações = clean preview. Nenhum aceita auto."
    }
  },
  {
    "id": "mo101_q129",
    "text": "Um usuário precisa que uma lista numerada continue a sequência de uma lista anterior interrompida por um parágrafo de texto. Qual opção deve usar?",
    "options": [
      "Inserir Quebra de Seção entre a lista e o parágrafo",
      "Usar campo SEQ para controlar a numeração",
      "Redigitar os números manualmente a partir do ponto correto",
      "Clicar com o botão direito na lista → Continuar Numeração"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Estilos e Modelos",
    "explanation": {
      "intro": "Listas quebradas por texto podem retomar a sequência — Word oferece 'Continuar Numeração' para isso.",
      "papoReto": "Lista 1 (items 1-3) → parágrafo de texto → Lista 2 começa em 1 (em vez de 4). Clica no primeiro item da Lista 2 → direito → 'Continuar Numeração' → agora começa em 4. Sequência restaurada sem refazer.",
      "respostaCerta": "Clicar com o botão direito na lista → Continuar Numeração",
      "puloDoGato": "Opção é específica para retomar — não pede qual número, Word sabe que é 'próximo da anterior'.",
      "cascasDeBanana": [
        "Manual: Impraticável em listas grandes. Quebradiço.",
        "SEQ: Possível, mas complexo — opção simples exists.",
        "Quebra de Seção: Isso não afeta numeração de lista — lista é elemento de parágrafo, não seção."
      ],
      "dicaOuro": "Lista retoma após parágr afo = direito → Continuar Numeração."
    }
  },
  {
    "id": "mo101_q130",
    "text": "Um usuário inseriu uma tabela longa no Word e deseja que a linha de cabeçalho se repita automaticamente no topo de cada página quando a tabela quebrar entre páginas. Qual configuração deve aplicar?",
    "options": [
      "Copiar e colar a linha de cabeçalho no início de cada página manualmente",
      "Selecionar a linha de cabeçalho → Layout da Tabela → Repetir Linhas de Cabeçalho",
      "Inserir Quebra de Página antes de cada nova seção da tabela",
      "Usar cabeçalho de página para exibir o cabeçalho da tabela"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Tabelas longas quebram entre páginas — cabeçalho deve repetir em cada página para legibilidade.",
      "papoReto": "Seleciona a(s) linha(s) de cabeçalho (primeira(s) linha(s)) → clique direito (ou aba Design/Layout da Tabela) → 'Repetir Linhas de Cabeçalho' (Repeat Header Rows). Agora quando tabela quebra em página nova, cabeçalho aparece automaticamente no topo da próxima página.",
      "respostaCerta": "Selecionar a linha de cabeçalho → Layout da Tabela → Repetir Linhas de Cabeçalho",
      "puloDoGato": "Funcionalidade automática (não manual). Cada quebra = cabeçalho repetido.",
      "cascasDeBanana": [
        "Cópia manual: Impraticável — se tabela cresce, você refaz manualmente?",
        "Quebra de Página: Cria nova página, mas não repete cabeçalho.",
        "Cabeçalho de página: Para conteúdo de página (separado), não para tabela."
      ],
      "dicaOuro": "Tabela longa com cabeçalho repetido = seleciona cabeçalho → Layout → 'Repetir Linhas'."
    }
  },
  {
    "id": "mo101_q131",
    "text": "Um usuário deseja classificar os dados de uma tabela Word em ordem alfabética pela segunda coluna. Como deve proceder?",
    "options": [
      "Não é possível classificar tabelas diretamente no Word",
      "Copiar a tabela para o Excel, classificar e colar de volta",
      "Selecionar a tabela → Layout → Classificar → definir a coluna 2 como critério de classificação",
      "Usar Localizar e Substituir para reorganizar as linhas"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Tabelas no Word podem ser classificadas como listas — Layout oferece ordenação.",
      "papoReto": "Seleciona tabela → Layout → Classificar → dialog: escolhe 'Coluna 2' em dropdown → Crescente/Decrescente → OK. Tabela reordena por coluna 2 alfabética/numericamente.",
      "respostaCerta": "Selecionar a tabela → Layout → Classificar → definir a coluna 2 como critério de classificação",
      "puloDoGato": "Classificação = native em tabelas. Não precisa Excel intermediário.",
      "cascasDeBanana": [
        "Excel: Intermediário desnecessário.",
        "Find & Replace: Opera em texto, não estrutura tabela.",
        "Impossível: FALSO — Layout → Classificar existe."
      ],
      "dicaOuro": "Tabelas: Layout → Classificar → escolhe coluna/ordem."
    }
  },
  {
    "id": "mo101_q132",
    "text": "Um usuário precisa realizar um cálculo de soma em uma coluna de uma tabela Word. Qual recurso permite inserir uma fórmula na célula?",
    "options": [
      "Referências → Inserir Fórmula de Tabela",
      "Layout da Tabela → Fórmula → inserir =SUM(ABOVE)",
      "Tabela → Calcular → Soma da Coluna",
      "Inserir → Campo → Fórmula → SUM"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Fórmulas em tabelas Word usam Layout — clique célula → Fórmula button.",
      "papoReto": "Clica célula → Layout da Tabela → Fórmula → =SUM(ABOVE) (soma acima). Funções: SUM, AVERAGE, COUNT, etc. Sintaxe ABOVE/BELOW/LEFT/RIGHT.",
      "respostaCerta": "Layout da Tabela → Fórmula → inserir =SUM(ABOVE)",
      "puloDoGato": "Layout exclusive — não Inserir Campo.",
      "cascasDeBanana": [
        "Inserir Campo: Rota errada.",
        "Referências: Não tabelas.",
        "Tabela → Calcular: Não existe."
      ],
      "dicaOuro": "Fórmula tabela = Layout → Fórmula → =SUM(ABOVE)."
    }
  },
  {
    "id": "mo101_q133",
    "text": "Um usuário inseriu fórmulas em uma tabela Word e depois alterou os valores. Como atualizar os resultados das fórmulas?",
    "options": [
      "Clicar com o botão direito → Atualizar Fórmula",
      "Selecionar as células com fórmulas e pressionar F9 para atualizar os campos",
      "Salvar e reabrir o documento para forçar o recálculo",
      "As fórmulas atualizam automaticamente ao alterar os valores"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Fórmulas tabela não recalculam automaticamente — precisa F9.",
      "papoReto": "Altera valores → seleciona células com fórmulas → F9. Fórmulas atualizam. F9 = universal update campos (como em REF, DATE, etc).",
      "respostaCerta": "Selecionar as células com fórmulas e pressionar F9 para atualizar os campos",
      "puloDoGato": "Manual, não automático.",
      "cascasDeBanana": [
        "Auto-update: Falso — F9 obrigatório.",
        "Direito: Não existe.",
        "Salvar: Preserva, não recalcula."
      ],
      "dicaOuro": "Fórmula tabela não auto-update: F9 para recalc."
    }
  },
  {
    "id": "mo101_q134",
    "text": "Como um usuário aplica um Estilo de Tabela predefinido a uma tabela existente no Word?",
    "options": [
      "Selecionar a tabela → guia Design da Tabela → escolher o estilo na galeria de Estilos de Tabela",
      "Selecionar a tabela → Página Inicial → Estilos → Tabela",
      "Inserir → Tabela → Estilo → selecionar o estilo desejado",
      "Clicar com o botão direito → Propriedades da Tabela → Estilo"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Estilos e Modelos",
    "explanation": {
      "intro": "Estilos de tabela predefinidos aplicam-se via Design (Context) tab.",
      "papoReto": "Seleciona tabela → Design → galeria de estilos → clica estilo → aplica (formatação + cores + bordas).",
      "respostaCerta": "Selecionar a tabela → guia Design da Tabela → escolher o estilo na galeria de Estilos de Tabela",
      "puloDoGato": "Design contextual = aparece só quando tabela selected.",
      "cascasDeBanana": [
        "Página Inicial: Estilos genéricos, não tabelas.",
        "Inserir → Tabela: Cria, não formata.",
        "Direito → Propriedades: Não tem 'Estilo'."
      ],
      "dicaOuro": "Estilo tabela: select → Design → galeria."
    }
  },
  {
    "id": "mo101_q135",
    "text": "Um usuário criou um Estilo de Tabela personalizado e deseja que ele esteja disponível em todos os novos documentos da organização. Qual é a abordagem correta?",
    "options": [
      "Publicar o estilo no SharePoint como item de galeria",
      "Salvar o estilo de tabela no modelo corporativo .dotx e distribuir o modelo para a equipe",
      "Copiar uma tabela com o estilo aplicado para cada novo documento",
      "Exportar o estilo como arquivo separado e importar em cada documento"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Estilos e Modelos",
    "explanation": {
      "intro": "Compartilhar estilos de tabela = template corporativo.",
      "papoReto": "Cria estilo em tabela → Design → dropdown estilos → 'New Table Style' → configura → OK → estilo agora em template atual. Salva template .dotx em rede compartilhada. Equipe abre docs baseados nele → estilo disponível.",
      "respostaCerta": "Salvar o estilo de tabela no modelo corporativo .dotx e distribuir o modelo para a equipe",
      "puloDoGato": "Estilos são template-bound.",
      "cascasDeBanana": [
        "Export separado: Sem padrão mecanismo.",
        "Copiar tabela: Manual cada doc.",
        "SharePoint galeria: Estilos não em SP."
      ],
      "dicaOuro": "Compartilhar estilo tabela: save em .dotx corporativo em rede."
    }
  },
  {
    "id": "mo101_q136",
    "text": "Um usuário precisa criar uma referência cruzada que exiba o texto da legenda completa de uma figura (ex: \"Figura 3 – Fluxo do Processo\"). Qual opção deve selecionar no diálogo de Referência Cruzada?",
    "options": [
      "Tipo de referência: Figura → Inserir referência a: Texto inteiro da legenda",
      "Tipo de referência: Item Numerado → Texto completo do parágrafo",
      "Tipo de referência: Indicador → Inserir referência a: Texto do Indicador",
      "Tipo de referência: Figura → Inserir referência a: Número de legenda"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Referências",
    "explanation": {
      "intro": "Referências cruzadas para legendas podem exibir número ou texto completo.",
      "papoReto": "Referências → Referência Cruzada → Tipo: 'Figura' → Inserir referência a: 'Texto inteiro da legenda' → OK. Exibe: \"Figura 3 – Fluxo do Processo\".",
      "respostaCerta": "Tipo de referência: Figura → Inserir referência a: Texto inteiro da legenda",
      "puloDoGato": "'Número legenda' = só \"3\". 'Texto inteiro' = completo com contexto.",
      "cascasDeBanana": [
        "Número legenda: Só dígito.",
        "Indicador: Para bookmarks, não legendas.",
        "Item Numerado: Para listas/títulos, não figuras."
      ],
      "dicaOuro": "Ref legenda completa: Tipo 'Figura' → 'Texto inteiro da legenda'."
    }
  },
  {
    "id": "mo101_q137",
    "text": "Um usuário deseja incorporar uma planilha Excel em um documento Word de forma que ela possa ser editada diretamente no Word com duplo clique. Qual recurso deve usar?",
    "options": [
      "Inserir → Tabela → Importar do Excel",
      "Copiar no Excel e Colar Especial → Colar como Planilha Excel incorporada no Word",
      "Arquivo → Importar → Planilha Excel",
      "Inserir → Objeto → Criar do Arquivo → marcar \"Vincular ao arquivo\" desmarcado para incorporar"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Incorporar Excel em Word = objeto editável com duplo-clique.",
      "papoReto": "Inserir → Objeto → 'Criar do Arquivo' → escolhe .xlsx → checkbox 'Vincular ao arquivo' DESMARKED = incorpora (cópia dentro Word).",
      "respostaCerta": "Inserir → Objeto → Criar do Arquivo → marcar \"Vincular ao arquivo\" desmarcado para incorporar",
      "puloDoGato": "Desmarked = independente. Marked = referência dinâmica ao original.",
      "cascasDeBanana": [
        "Copiar/Colar: Pode funcionar mas não é objeto reedível.",
        "Tabela → Importar: Converte, não incorpora.",
        "Arquivo → Importar: Não existe."
      ],
      "dicaOuro": "Incorporar Excel: Inserir → Objeto → 'Criar Arquivo' → uncheck 'Vincular'."
    }
  },
  {
    "id": "mo101_q138",
    "text": "Qual é a diferença entre incorporar e vincular um objeto Excel em um documento Word?",
    "options": [
      "Vincular armazena o objeto no Word; Incorporar mantém o arquivo separado",
      "Incorporar armazena uma cópia do objeto no documento Word; Vincular mantém uma referência ao arquivo original que reflete atualizações automaticamente",
      "Ambos funcionam da mesma forma mas Vincular permite edição; Incorporar é somente leitura",
      "Não há diferença; o Word sempre cria uma cópia independente"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Incorporar vs Vincular = cópia vs referência.",
      "papoReto": "Incorporar: cópia dentro Word, independente, arquivo original não importa. Vincular: referência ao arquivo, atualiza se original muda, arquivo deve estar acessível.",
      "respostaCerta": "Incorporar armazena uma cópia do objeto no documento Word; Vincular mantém uma referência ao arquivo original que reflete atualizações automaticamente",
      "puloDoGato": "Incorporar = standalone. Vincular = dinâmico.",
      "cascasDeBanana": [
        "Terminologia reversa: Falso.",
        "Edição: Ambos editáveis.",
        "Sem diferença: FALSO."
      ],
      "dicaOuro": "Incorporar = cópia. Vincular = referência dinâmica."
    }
  },
  {
    "id": "mo101_q139",
    "text": "Qual modo de exibição do Word é mais adequado para escrever documentos longos pois oculta cabeçalhos, rodapés e margens?",
    "options": [
      "Layout de Impressão",
      "Modo de Leitura",
      "Modo de Rascunho",
      "Layout da Web"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Rascunho = modo minimalista para escrita longa.",
      "papoReto": "Exibir → Rascunho: oculta cabeçalhos, rodapés, margens, imagens → texto puro para foco. Ideal livros/artigos longos.",
      "respostaCerta": "Modo de Rascunho",
      "puloDoGato": "Rascunho = edição pura. Layout = visão final.",
      "cascasDeBanana": [
        "Leitura: Lê, não escreve.",
        "Layout Impressão: Mostra margens/cabeçalhos (oposto).",
        "Web: Para publicação web."
      ],
      "dicaOuro": "Escrever longo documento: Rascunho (ocult a formatação)."
    }
  },
  {
    "id": "mo101_q140",
    "text": "Um usuário deseja visualizar dois partes diferentes do mesmo documento simultaneamente sem usar dois arquivos. Qual recurso do Word permite isso?",
    "options": [
      "Exibir → Lado a Lado → comparar o documento consigo mesmo",
      "Exibir → Nova Janela → abrir o mesmo documento em duas janelas",
      "Exibir → Dividir → dividir a janela em dois painéis do mesmo documento",
      "Inserir → Painel de Navegação → abrir duas visualizações"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Dividir janela = ver 2 partes mesmo doc 1 janela.",
      "papoReto": "Exibir → Dividir → divide horizontalmente → scroll independente cada painel. Útil: cabeçalho em painel 1, conteúdo em painel 2.",
      "respostaCerta": "Exibir → Dividir → dividir a janela em dois painéis do mesmo documento",
      "puloDoGato": "Dividir = 1 doc, 1 janela, 2 painéis scrolláveis. Nova Janela = 2 janelas separadas.",
      "cascasDeBanana": [
        "Nova Janela: 2 janelas (não 1).",
        "Lado a Lado: Para comparar 2 docs diferentes.",
        "Painel Navegação: Para estrutura, não split view."
      ],
      "dicaOuro": "2 partes mesmo doc 1 janela: Exibir → Dividir."
    }
  },
  {
    "id": "mo101_q141",
    "text": "Para que serve o Painel de Navegação no Word?",
    "options": [
      "Controla as macros e campos do documento",
      "Permite navegar pelo documento usando títulos, páginas e resultados de pesquisa",
      "Gerencia os estilos e modelos aplicados ao documento",
      "Exibe o histórico de versões do documento"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Painel Navegação = mapa documento.",
      "papoReto": "Exibir → Painel de Navegação: lado esquerdo mostra títulos (headings) em árvore + abas para pesquisa/páginas. Clica título → pula lá. Atalho: Ctrl+F5.",
      "respostaCerta": "Permite navegar pelo documento usando títulos, páginas e resultados de pesquisa",
      "puloDoGato": "Navegação estrutural (titles), não histórico/estilos.",
      "cascasDeBanana": [
        "Histórico: Nada a ver.",
        "Estilos: Painel separado (F11).",
        "Macros: Outro painel."
      ],
      "dicaOuro": "Painel Navegação: títulos + pesquisa + páginas."
    }
  },
  {
    "id": "mo101_q142",
    "text": "Um usuário deseja reorganizar seções inteiras de um documento longo movendo títulos de lugar. Qual recurso permite fazer isso de forma visual sem recortar e colar?",
    "options": [
      "Arrastar os títulos no Painel de Navegação → guia Títulos para reordenar as seções",
      "Usar o modo Estrutura de Tópicos para mover seções",
      "Recortar e colar as seções manualmente no Layout de Impressão",
      "Usar Exibir → Classificar Seções para reordenar"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Painel Navegação permite reorganizar seções via drag-drop títulos.",
      "papoReto": "Painel Navegação → guia Títulos → arrasta 'Capítulo 3' acima de 'Capítulo 2' → reordena seção inteira (com conteúdo) visualmente.",
      "respostaCerta": "Arrastar os títulos no Painel de Navegação → guia Títulos para reordenar as seções",
      "puloDoGato": "Drag-drop em Painel = reorganização rápida.",
      "cascasDeBanana": [
        "Outline: Também permite, mas moins visual.",
        "Manual recortar: Lento, propenso a erros.",
        "Classificar: Não existe."
      ],
      "dicaOuro": "Reorganizar seções visualmente: Painel Navegação → drag títulos."
    }
  },
  {
    "id": "mo101_q143",
    "text": "Qual modo de exibição do Word permite reorganizar a hierarquia do documento promovendo e rebaixando títulos e movendo seções inteiras?",
    "options": [
      "Exibir → Layout de Impressão com Painel de Navegação",
      "Exibir → Estrutura de Tópicos",
      "Exibir → Rascunho",
      "Exibir → Modo de Leitura → Estrutura"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Estilos e Modelos",
    "explanation": {
      "intro": "Estrutura de Tópicos = modo reorg hierarquia.",
      "papoReto": "Exibir → Estrutura de Tópicos: mostra títulos em árvore, botões promote/demote (+/−), drag seções, expandir/colapsar.",
      "respostaCerta": "Exibir → Estrutura de Tópicos",
      "puloDoGato": "Outline = manipulação hierarquia. Painel Navegação = navegação leitura.",
      "cascasDeBanana": [
        "Rascunho: Escrever, não reorg.",
        "Layout Impressão: Não reorg.",
        "Modo Leitura: Ler, não editar."
      ],
      "dicaOuro": "Reorg hierarquia seções: Exibir → Estrutura de Tópicos."
    }
  },
  {
    "id": "mo101_q144",
    "text": "Um usuário está trabalhando em um documento mestre com subdocumentos no modo Estrutura de Tópicos. Qual é a vantagem do uso de Documento Mestre para documentos longos?",
    "options": [
      "Permite que múltiplos usuários editem o mesmo parágrafo simultaneamente",
      "Reduz o tamanho do arquivo principal movendo o conteúdo para a nuvem",
      "Permite proteger cada capítulo com senha diferente automaticamente",
      "Permite dividir um documento grande em subdocumentos independentes que podem ser editados separadamente e combinados no mestre"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Estilos e Modelos",
    "explanation": {
      "intro": "Documento Mestre = agrupa subdocs.",
      "papoReto": "Mestre: projeto vazio que 'puxa' subdocs (caps). Cada cap = arquivo separado. Edita caps independentemente, Mestre 'compila' numeração/índice global.",
      "respostaCerta": "Permite dividir um documento grande em subdocumentos independentes que podem ser editados separadamente e combinados no mestre",
      "puloDoGato": "Mestre = escalabilidade livros (dividir colaboração).",
      "cascasDeBanana": [
        "Senha por cap: Não automático.",
        "Nuvem: Mestre é local.",
        "Multi-user simultâneo: Não suportado diretamente."
      ],
      "dicaOuro": "Documento Mestre: separa caps em subdocs, edita junto."
    }
  },
  {
    "id": "mo101_q145",
    "text": "Um usuário precisa criar um campo que exiba automaticamente o número da seção atual do documento baseado nos estilos de Título. Qual campo deve usar?",
    "options": [
      "{ STYLEREF \"Título 1\" \\n } para exibir o número do título de nível 1 atual",
      "{ REF Título1 \\n }",
      "{ SECTIONNUM }",
      "{ SECTION }"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Referências",
    "explanation": {
      "intro": "Campo STYLEREF busca número de estilo (título) perto do ponto inserção.",
      "papoReto": "{ STYLEREF \"Título 1\" \\n } = exibe número Título 1 mais próximo (acima no doc). Atalho: Ctrl+Shift+F. Útil: cabeçalhos/rodapés mostrar capítulo atual.",
      "respostaCerta": "{ STYLEREF \"Título 1\" \\n } para exibir o número do título de nível 1 atual",
      "puloDoGato": "STYLEREF = número estilo. \\n = alterna formato (número vs nome).",
      "cascasDeBanana": [
        "SECTION: Número seção, não título.",
        "SECTIONNUM: Inválido.",
        "REF: Busca bookmark, não estilo."
      ],
      "dicaOuro": "Número título atual: { STYLEREF \"Título 1\" \\n }."
    }
  },
  {
    "id": "mo101_q146",
    "text": "Um usuário deseja permitir que apenas comentários sejam adicionados ao documento impedindo qualquer edição de texto. Qual configuração deve aplicar?",
    "options": [
      "Revisão → Restringir Edição → Permitir apenas este tipo de edição → Sem alterações (Somente leitura)",
      "Criptografar o documento com senha de modificação",
      "Revisão → Restringir Edição → Permitir apenas este tipo de edição → Comentários",
      "Arquivo → Informações → Proteger Documento → Marcar como Final"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Formulário só comentários = restricao edição.",
      "papoReto": "Revisão → Restringir Edição → checkbox 'Permitir apenas...' → dropdown 'Comentários' → OK (senha opt). Doc protegido: novo texto bloqueado, comentários OK.",
      "respostaCerta": "Revisão → Restringir Edição → Permitir apenas este tipo de edição → Comentários",
      "puloDoGato": "Comentários = não-edição feedback.",
      "cascasDeBanana": [
        "Sem alterações: Bloqueia tudo, até comentários.",
        "Marcar Final: Sugere ler-only, não bloqueia estruturalmente.",
        "Criptografia: Cifra acesso, não restringe edição granular."
      ],
      "dicaOuro": "Só comentários: Revisão → Restringir Edição → Comentários."
    }
  },
  {
    "id": "mo101_q147",
    "text": "Um usuário criou um formulário Word protegido para preenchimento. Os usuários relatam que não conseguem usar a tecla Tab para navegar entre os campos. Qual pode ser a causa?",
    "options": [
      "Os controles de conteúdo estão bloqueados individualmente",
      "A versão do Word dos usuários não suporta navegação por Tab em formulários",
      "O modelo do formulário está corrompido",
      "O documento está protegido com a opção errada; deve usar \"Preenchimento de formulários\" e não \"Sem alterações\""
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Formulários e Macros",
    "explanation": {
      "intro": "Proteção formulário com opção errada bloqueia navegação.",
      "papoReto": "Revisão → Restringir Edição: escolher 'Preenchimento de formulários' permite Tab entre controles. Se 'Sem alterações' está marcado, tudo congelado. Solução: mudar opção.",
      "respostaCerta": "O documento está protegido com a opção errada; deve usar \"Preenchimento de formulários\" e não \"Sem alterações\"",
      "puloDoGato": "'Preenchimento' = Tab funciona. 'Sem alterações' = Tab travado.",
      "cascasDeBanana": [
        "Bloqueio individual: Cada controle tem proteção separada.",
        "Versão: Todas Word suportam Tab.",
        "Corrupção: Carregamento falha, não Tab."
      ],
      "dicaOuro": "Formulário Tab não funciona = restrição 'Sem alterações'. Troque para 'Preenchimento'."
    }
  },
  {
    "id": "mo101_q148",
    "text": "Um usuário precisa filtrar os destinatários de uma mala direta para incluir apenas clientes de São Paulo com compras acima de R$ 1.000. Como deve configurar o filtro?",
    "options": [
      "Criar uma consulta SQL na fonte de dados antes de conectar ao Word",
      "Correspondências → Editar Lista de Destinatários → Filtrar → adicionar condições para Cidade = \"São Paulo\" E Compras > 1000",
      "Filtrar manualmente desmarcando os registros não desejados na lista",
      "Usar macro VBA para verificar cada registro durante a mesclagem"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Mala Direta",
    "explanation": {
      "intro": "Mala direta: Editar Lista permite filtrar por condições.",
      "papoReto": "Correspondências → Editar Lista de Destinatários → Filtrar: add conditions 'Cidade = São Paulo' AND 'Compras > 1000'. Preview filtra. Retorna só registros que match.",
      "respostaCerta": "Correspondências → Editar Lista de Destinatários → Filtrar → adicionar condições para Cidade = \"São Paulo\" E Compras > 1000",
      "puloDoGato": "Filtro em UI, não SQL backend.",
      "cascasDeBanana": [
        "SQL anterior: DB pre-filter (não nativo Word).",
        "Manual deselect: Lento, humano-error.",
        "Macro: VBA desnecessário (UI existe)."
      ],
      "dicaOuro": "Filtrar mala direta = Correspondências → Editar Lista → Filtrar."
    }
  },
  {
    "id": "mo101_q149",
    "text": "Um usuário precisa salvar um documento Word com todos os recursos modernos mas garantir que usuários com Word 2010 consigam abrir sem perder conteúdo crítico. Qual é a melhor abordagem?",
    "options": [
      "Salvar no formato .doc para garantir compatibilidade total",
      "Executar o Verificador de Compatibilidade, identificar os recursos problemáticos e substituí-los por alternativas compatíveis antes de salvar no formato .docx",
      "Usar PDF como formato de distribuição",
      "Salvar no formato .rtf que é compatível com todas as versões"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Compatibilidade backward = usar verificador antes de salvar.",
      "papoReto": "Arquivo → Info → Verificador de Compatibilidade: escaneia recursos 2013+ (SmartArt, efeitos, gráficos) que 2010 não suporta. Mostra lista → user remove/substitui por equivalentes 2010. Aí salva .docx seguro.",
      "respostaCerta": "Executar o Verificador de Compatibilidade, identificar os recursos problemáticos e substituí-los por alternativas compatíveis antes de salvar no formato .docx",
      "puloDoGato": ".doc antigo perde recursos. Verificador mantém conteúdo critical.",
      "cascasDeBanana": [
        ".doc: Formato legado, perde recursos modernos.",
        "PDF: Distribuição fixa, não edição.",
        ".rtf: Básico, sem suporte estilos avançados."
      ],
      "dicaOuro": "Compatibilidade Word 2010 = Verificador de Compatibilidade + fix + .docx."
    }
  },
  {
    "id": "mo101_q150",
    "text": "Um usuário deseja exportar um documento Word para PDF garantindo que os hiperlinks e o sumário permaneçam clicáveis no PDF. Qual opção deve usar?",
    "options": [
      "Arquivo → Exportar → Criar PDF/XPS → Opções → marcar \"Criar marcadores usando: Títulos\" e garantir que hiperlinks estejam incluídos",
      "Inserir → Exportar → PDF Interativo",
      "Arquivo → Imprimir → Impressora Microsoft Print to PDF",
      "Salvar Como → PDF → configuração padrão sem ajustes"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "PDF interativo = bookmarks + links clicáveis.",
      "papoReto": "Arquivo → Exportar → Criar PDF/XPS → Opções: check 'Criar marcadores usando Títulos' (gera outline PDF = clicável) + hiperlinks incluídos (default on). PDF resultado tem sumário navegável + links ativos.",
      "respostaCerta": "Arquivo → Exportar → Criar PDF/XPS → Opções → marcar \"Criar marcadores usando: Títulos\" e garantir que hiperlinks estejam incluídos",
      "puloDoGato": "Opções exportação = controla interatividade.",
      "cascasDeBanana": [
        "Print to PDF: Rasteriza, perde links.",
        "Salvar Como padrão: Sem marcadores.",
        "Inserir Exportar: Não existe."
      ],
      "dicaOuro": "PDF clicável = Exportar → marcar 'Bookmarks por Títulos' + links."
    }
  },
  {
    "id": "mo101_q151",
    "text": "Um usuário exportou um documento Word para PDF mas as imagens ficaram com baixa resolução. Qual configuração deve ajustar antes de exportar?",
    "options": [
      "Arquivo → Exportar → Criar PDF/XPS → Opções → Qualidade de imagem → selecionar resolução maior",
      "Inserir → Imagens → Compactar Imagens → desmarcar compressão antes de exportar",
      "Layout → Configurar Página → Qualidade de Impressão → Alta Resolução",
      "Arquivo → Opções → Avançado → Qualidade de Imagem no PDF"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "PDF: qualidade imagem em Opções.",
      "papoReto": "Arquivo → Exportar → Criar PDF/XPS → Opções → 'Quality' → 'Maximum' (300+ dpi). PDF resultado com imagens nítidas.",
      "respostaCerta": "Arquivo → Exportar → Criar PDF/XPS → Opções → Qualidade de imagem → selecionar resolução maior",
      "puloDoGato": "Qualidade imagem = PDF export option.",
      "cascasDeBanana": [
        "Compactar Imagens: Word feature, não PDF.",
        "Layout Qualidade: Impressão, não PDF.",
        "Opções Avançado: Não controla PDF image quality."
      ],
      "dicaOuro": "PDF imagem baixa = Exportar → Quality máxima."
    }
  },
  {
    "id": "mo101_q152",
    "text": "Um usuário precisa exportar apenas as páginas 5 a 10 de um documento Word para PDF. Qual configuração permite isso?",
    "options": [
      "Arquivo → Exportar → Criar PDF/XPS → Opções → Intervalo de páginas → Páginas: 5-10",
      "Dividir o documento e exportar apenas a parte desejada",
      "Selecionar as páginas no Painel de Navegação e exportar a seleção",
      "Imprimir para PDF com intervalo de páginas especificado"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "PDF: exportar intervalo páginas.",
      "papoReto": "Arquivo → Exportar → Criar PDF/XPS → Opções → 'Pages' field → '5-10'. Exporta só páginas 5 a 10 em PDF.",
      "respostaCerta": "Arquivo → Exportar → Criar PDF/XPS → Opções → Intervalo de páginas → Páginas: 5-10",
      "puloDoGato": "Intervalo em Opções exportação.",
      "cascasDeBanana": [
        "Painel Navegação: Não há export seleção.",
        "Imprimir PDF: Outro fluxo.",
        "Dividir documento: Manual, desnecessário."
      ],
      "dicaOuro": "Exportar intervalo = Exportar → Pages field → 5-10."
    }
  },
  {
    "id": "mo101_q153",
    "text": "Um usuário deseja co-editar um documento Word simultaneamente com colegas em tempo real. Qual é o pré-requisito para isso?",
    "options": [
      "Todos os usuários devem ter a mesma versão do Word instalada",
      "O documento deve estar em uma pasta de rede local compartilhada",
      "O documento deve estar no formato .docx com Controle de Alterações ativado",
      "O documento deve estar salvo no OneDrive ou SharePoint e compartilhado com os colaboradores"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Co-edição: OneDrive/SharePoint obrigatório.",
      "papoReto": "OneDrive ou SharePoint = cloud storage com versioning. Compartilha doc → users veem updates real-time quando salvam (autosave on). Rede local não suporta co-edit.",
      "respostaCerta": "O documento deve estar salvo no OneDrive ou SharePoint e compartilhado com os colaboradores",
      "puloDoGato": "Cloud + sharing = co-edit. Rede local não.",
      "cascasDeBanana": [
        "Rede local: Não sincroniza real-time.",
        "Mesma versão: Versões diferentes suportadas.",
        ".docx + Track Changes: Não pré-requisito (nice-to-have)."
      ],
      "dicaOuro": "Co-edição Word = OneDrive/SharePoint + compartilhado."
    }
  },
  {
    "id": "mo101_q154",
    "text": "Durante a coedição em tempo real no Word, um usuário percebe que as alterações de um colega não aparecem automaticamente. Qual pode ser a causa?",
    "options": [
      "O colega não tem permissão de edição no documento",
      "A conexão de internet do colega está instável",
      "O colega está usando o Word Desktop sem a opção de salvamento automático ativada; alterações aparecem apenas ao salvar",
      "O documento está no formato .doc que não suporta coedição"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Co-edição: autosave controla sincronização.",
      "papoReto": "Word Desktop: Arquivo → Opções → Save → 'AutoSave' checkbox. Sem autosave, updates só via Save manual (Ctrl+S). Com autosave on, updates fluem continuous.",
      "respostaCerta": "O colega está usando o Word Desktop sem a opção de salvamento automático ativada; alterações aparecem apenas ao salvar",
      "puloDoGato": "AutoSave = enable real-time sync.",
      "cascasDeBanana": [
        "Permissão: Teria acesso negado message.",
        "Conexão instável: Teria sync error, não ausência.",
        ".doc: Compatível com SharePoint/OneDrive."
      ],
      "dicaOuro": "Co-edição não-sync = AutoSave OFF. Ativa em Options → Save."
    }
  },
  {
    "id": "mo101_q155",
    "text": "Um usuário precisa criar uma macro que percorra todos os parágrafos do documento e aplique negrito apenas nos parágrafos que contenham a palavra \"IMPORTANTE\". Qual estrutura VBA é adequada?",
    "options": [
      "Evento Document_Open com verificação de conteúdo",
      "Loop While com Select Case para verificar estilos",
      "Loop For Each com condicional If InStr para verificar o texto e aplicar Bold = True",
      "Função Recursive que chama a si mesma por parágrafo"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Formulários e Macros",
    "explanation": {
      "intro": "VBA macro: loop parágrafo com condição texto.",
      "papoReto": "For Each para iterar doc.Paragraphs. InStr() busca 'IMPORTANTE' em texto. If match: aplicar .Range.Font.Bold = True.",
      "respostaCerta": "Loop For Each com condicional If InStr para verificar o texto e aplicar Bold = True",
      "puloDoGato": "For Each universal loop. InStr() = substring search. Recursive = ineficiente.",
      "cascasDeBanana": [
        "While + Select Case: Inadequado para paragraphs.",
        "Recursive: Stack overflow risk.",
        "Document_Open: Evento, não estrutura loop."
      ],
      "dicaOuro": "Loop paragraphs + text search = For Each + InStr."
    }
  },
  {
    "id": "mo101_q156",
    "text": "Um usuário quer que uma macro solicite ao usuário um valor de entrada antes de executar uma ação. Qual função VBA exibe uma caixa de diálogo de entrada de texto?",
    "options": [
      "UserForm.Show",
      "InputBox",
      "GetValue",
      "MsgBox"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Formulários e Macros",
    "explanation": {
      "intro": "VBA: função dialog texto input.",
      "papoReto": "InputBox(prompt, title) = exibe caixa de diálogo com campo texto + OK/Cancel. Retorna string ou empty se cancelado.",
      "respostaCerta": "InputBox",
      "puloDoGato": "InputBox = text entry. MsgBox = message only. UserForm = custom dialog.",
      "cascasDeBanana": [
        "MsgBox: Botões yes/no/ok, não input.",
        "GetValue: Não existe VBA function.",
        "UserForm: Muito complexo para input simples."
      ],
      "dicaOuro": "Pedir input texto = InputBox()."
    }
  },
  {
    "id": "mo101_q157",
    "text": "Um usuário precisa que um campo exiba o número de palavras do documento atualizado automaticamente. Qual campo deve inserir?",
    "options": [
      "{ WORDCOUNT }",
      "{ NUMWORDS }",
      "{ STATISTICS Words }",
      "{ DOCPROPERTY Words }"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Referências",
    "explanation": {
      "intro": "Field: exibir contagem palavras documento.",
      "papoReto": "{ NUMWORDS } = Word field que automaticamente conta e exibe total de palavras. Atualiza via F9 ou print.",
      "respostaCerta": "{ NUMWORDS }",
      "puloDoGato": "NUMWORDS = built-in Word field.",
      "cascasDeBanana": [
        "WORDCOUNT: Não existe.",
        "STATISTICS Words: Sintaxe incorreta.",
        "DOCPROPERTY Words: Property, não count."
      ],
      "dicaOuro": "Contar palavras doc = { NUMWORDS } field."
    }
  },
  {
    "id": "mo101_q158",
    "text": "Um usuário inseriu o campo { IF { MERGEFIELD Valor } > 1000 \"Aprovado\" \"Reprovado\" } em uma mala direta. O que esse campo faz?",
    "options": [
      "Filtra registros onde o valor é maior que 1000",
      "Compara dois campos de mesclagem e exibe o maior",
      "Formata o campo Valor com duas casas decimais condicionalmente",
      "Exibe \"Aprovado\" se o campo Valor for maior que 1000 e \"Reprovado\" caso contrário"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Referências",
    "explanation": {
      "intro": "Field IF: condicional em mala direta.",
      "papoReto": "{ IF { MERGEFIELD Valor } > 1000 \"Aprovado\" \"Reprovado\" } = se Valor > 1000, exibe \"Aprovado\"; senão, \"Reprovado\". Lógica condicional por record.",
      "respostaCerta": "Exibe \"Aprovado\" se o campo Valor for maior que 1000 e \"Reprovado\" caso contrário",
      "puloDoGato": "IF field + MERGEFIELD = conditional mala direta.",
      "cascasDeBanana": [
        "Filtra registros: IF gera texto condição, não filtra.",
        "Compara 2 campos: MAX não mencionado.",
        "Formata decimais: FORMAT field, não IF."
      ],
      "dicaOuro": "Condição mala direta = { IF { MERGEFIELD } > valor \"texto1\" \"texto2\" }."
    }
  },
  {
    "id": "mo101_q159",
    "text": "Um usuário personalizou as cores e fontes de um Tema do Office no Word e deseja salvar para usar em outros documentos e aplicativos Office. Qual caminho deve seguir?",
    "options": [
      "Design → Temas → Salvar Tema Atual → salvar como arquivo .thmx",
      "Arquivo → Opções → Temas → Exportar Tema Personalizado",
      "Não é possível exportar temas personalizados entre documentos",
      "Design → Cores → Salvar e Design → Fontes → Salvar separadamente"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Estilos e Modelos",
    "explanation": {
      "intro": "Tema custom: salvar .thmx para reutilizar.",
      "papoReto": "Design → Themes (dropdown) → 'Save Current Theme' → escolhe nome + location → .thmx. Abre em Word/Excel/PowerPoint.",
      "respostaCerta": "Design → Temas → Salvar Tema Atual → salvar como arquivo .thmx",
      "puloDoGato": ".thmx = formato theme Office universal.",
      "cascasDeBanana": [
        "Arquivo Opções: Não existe Theme export.",
        "Cores + Fontes separado: Não theme unified.",
        "Impossível exportar: FALSE — .thmx permite."
      ],
      "dicaOuro": "Salvar tema custom = Design → Save Current Theme → .thmx."
    }
  },
  {
    "id": "mo101_q160",
    "text": "Um usuário deseja adicionar uma marca d'água com o texto \"CONFIDENCIAL\" em todas as páginas de um documento Word. Qual caminho deve seguir?",
    "options": [
      "Layout → Fundo da Página → Marca D'água",
      "Inserir → Cabeçalho → Marca D'água de Texto",
      "Design → Marca D'água → Marca D'água Personalizada → Marca d'água de texto",
      "Exibir → Marca D'água → Inserir Texto"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Marca d'água: watermark all pages.",
      "papoReto": "Design → Watermark dropdown → 'Custom Watermark' → 'Text watermark' → tipo 'CONFIDENCIAL' → OK. Todas páginas recebem marca.",
      "respostaCerta": "Design → Marca D'água → Marca D'água Personalizada → Marca d'água de texto",
      "puloDoGato": "Design tab = marca d'água. Não Layout ou Inserir.",
      "cascasDeBanana": [
        "Inserir Cabeçalho: Cabeçalho, não watermark.",
        "Layout Fundo: Fundo, não watermark.",
        "Exibir Marca: Não existe."
      ],
      "dicaOuro": "Marca d'água texto = Design → Watermark → Custom Text."
    }
  },
  {
    "id": "mo101_q161",
    "text": "Um usuário aplicou uma marca d'água em um documento mas ela não aparece na primeira página. Qual é a causa mais provável?",
    "options": [
      "A marca d'água foi aplicada apenas a partir da segunda seção",
      "O formato de arquivo .docx não suporta marca d'água na primeira página",
      "A primeira página tem cabeçalho diferente com \"Primeira página diferente\" ativado e a marca d'água não foi inserida nesse cabeçalho",
      "A marca d'água está configurada como imagem flutuante sem âncora na primeira página"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Questão técnica do MO-101.",
      "papoReto": "A resposta correta é 'A primeira página tem cabeçalho diferente com \"Primeira página diferente\" ativado e a marca d'água não foi inserida nesse cabeçalho'. ",
      "respostaCerta": "A primeira página tem cabeçalho diferente com \"Primeira página diferente\" ativado e a marca d'água não foi inserida nesse cabeçalho ",
      "puloDoGato": "Atenção: alguns distratores usam caminhos ou termos plausíveis de Marca D'água.",
      "cascasDeBanana": [
        "A marca d'água foi aplicada apenas a partir da segunda seção: Incorreto, pois alternativa inválida para o cenário.",
        "O formato de arquivo .docx não suporta marca d'água na primeira página: Incorreto, pois alternativa inválida para o cenário.",
        "A marca d'água está configurada como imagem flutuante sem âncora na primeira página: Incorreto, pois alternativa inválida para o cenário."
      ],
      "dicaOuro": "Dica de prova: Ao lidar com Marca D'água, associe mentalmente a funcionalidade correta 'A primeira página tem cabeçalho diferente com \"Primeira página diferente\" ativado e a marca d'água não foi inserida nesse cabeçalho'."
    }
  },
  {
    "id": "mo101_q162",
    "text": "Como um usuário aplica uma borda decorativa apenas na primeira página de um documento Word?",
    "options": [
      "Layout → Margens → Bordas → Primeira Página",
      "Design → Bordas de Página → definir o estilo → Em: Apenas primeira página",
      "Inserir → Formas → Borda → aplicar apenas na primeira página",
      "Design → Bordas de Página → aplicar e depois remover das demais páginas manualmente"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Questão técnica do MO-101.",
      "papoReto": "A resposta correta é 'Design → Bordas de Página → definir o estilo → Em: Apenas primeira página'. ",
      "respostaCerta": "Design → Bordas de Página → definir o estilo → Em: Apenas primeira página ",
      "puloDoGato": "Atenção: alguns distratores usam caminhos ou termos plausíveis de Bordas de Página.",
      "cascasDeBanana": [
        "Layout → Margens → Bordas → Primeira Página: Incorreto, pois alternativa inválida para o cenário.",
        "Inserir → Formas → Borda → aplicar apenas na primeira página: Incorreto, pois alternativa inválida para o cenário.",
        "Design → Bordas de Página → aplicar e depois remover das demais páginas manualmente: Incorreto, pois alternativa inválida para o cenário."
      ],
      "dicaOuro": "Dica de prova: Ao lidar com Bordas de Página, associe mentalmente a funcionalidade correta 'Design → Bordas de Página → definir o estilo → Em: Apenas primeira página'."
    }
  },
  {
    "id": "mo101_q163",
    "text": "Um usuário deseja substituir todas as ocorrências de texto em negrito por texto em itálico em um documento Word. Como deve usar o Localizar e Substituir?",
    "options": [
      "Não é possível localizar e substituir formatação no Word",
      "Ctrl+H → Mais → Formatar → Fonte → Negrito no campo Localizar e Fonte → Itálico no campo Substituir",
      "Aplicar manualmente usando o Pincel de Formatação em cada ocorrência",
      "Usar Localizar e Substituir com expressões regulares para identificar negrito"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Questão técnica do MO-101.",
      "papoReto": "A resposta correta é 'Ctrl+H → Mais → Formatar → Fonte → Negrito no campo Localizar e Fonte → Itálico no campo Substituir'. ",
      "respostaCerta": "Ctrl+H → Mais → Formatar → Fonte → Negrito no campo Localizar e Fonte → Itálico no campo Substituir ",
      "puloDoGato": "O Localizar e Substituir atua sobre FORMATAÇÃO, não só texto: deixe os campos de texto vazios e aplique o formato via 'Formatar → Fonte' (Negrito em Localizar, Itálico em Substituir). Ele troca o atributo em todo o documento.",
      "cascasDeBanana": [
        "Não é possível localizar e substituir formatação no Word: Incorreto, pois alternativa inválida para o cenário.",
        "Usar Localizar e Substituir com expressões regulares para identificar negrito: Incorreto, pois alternativa inválida para o cenário.",
        "Aplicar manualmente usando o Pincel de Formatação em cada ocorrência: Incorreto, pois alternativa inválida para o cenário."
      ],
      "dicaOuro": "Dica de prova: Ao lidar com Localizar e Substituir, associe mentalmente a funcionalidade correta 'Ctrl+H → Mais → Formatar → Fonte → Negrito no campo Localizar e Fonte → Itálico no campo Substituir'."
    }
  },
  {
    "id": "mo101_q164",
    "text": "Um usuário precisa substituir todas as quebras de parágrafo duplas por quebras simples em um documento Word. Como deve usar o recurso de Localizar e Substituir?",
    "options": [
      "Ctrl+H → Localizar: \\n\\n → Substituir: \\n com expressões regulares",
      "Usar macro VBA para percorrer os parágrafos e remover os vazios",
      "Editar → Limpar Formatação → Quebras de Parágrafo Duplas",
      "Ctrl+H → Mais → Usar caracteres especiais → ^p^p no campo Localizar e ^p no campo Substituir"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Questão técnica do MO-101.",
      "papoReto": "A resposta correta é 'Ctrl+H → Mais → Usar caracteres especiais → ^p^p no campo Localizar e ^p no campo Substituir'. ",
      "respostaCerta": "Ctrl+H → Mais → Usar caracteres especiais → ^p^p no campo Localizar e ^p no campo Substituir ",
      "puloDoGato": "Marcas de parágrafo têm o código especial ^p. Para colapsar linhas em branco, procure ^p^p (duas marcas) e substitua por ^p (uma só). Repita até não restarem duplas.",
      "cascasDeBanana": [
        "Ctrl+H → Localizar: \\n\\n → Substituir: \\n com expressões regulares: Incorreto, pois alternativa inválida para o cenário.",
        "Editar → Limpar Formatação → Quebras de Parágrafo Duplas: Incorreto, pois alternativa inválida para o cenário.",
        "Usar macro VBA para percorrer os parágrafos e remover os vazios: Incorreto, pois alternativa inválida para o cenário."
      ],
      "dicaOuro": "Dica de prova: Ao lidar com Localizar e Substituir, associe mentalmente a funcionalidade correta 'Ctrl+H → Mais → Usar caracteres especiais → ^p^p no campo Localizar e ^p no campo Substituir'."
    }
  },
  {
    "id": "mo101_q165",
    "text": "Um usuário precisa localizar todas as palavras que começam com \"micro\" seguidas de qualquer conjunto de caracteres usando Localizar e Substituir no Word. Qual opção deve habilitar?",
    "options": [
      "Não é possível usar expressões regulares no Word",
      "Ativar \"Palavras inteiras\" e digitar micro no campo Localizar",
      "Usar \"Correspondência exata de maiúsculas\" com a expressão micro",
      "Ativar \"Usar caracteres curinga\" e usar a expressão micro* no campo Localizar"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Questão técnica do MO-101.",
      "papoReto": "A resposta correta é 'Ativar \"Usar caracteres curinga\" e usar a expressão micro* no campo Localizar'. ",
      "respostaCerta": "Ativar \"Usar caracteres curinga\" e usar a expressão micro* no campo Localizar ",
      "puloDoGato": "Com 'Usar caracteres curinga' ativado, o asterisco (*) representa qualquer sequência de caracteres. micro* localiza microsoft, microfone, micro-ondas. Sem o curinga, o * é tratado como caractere literal.",
      "cascasDeBanana": [
        "Ativar \"Palavras inteiras\" e digitar micro no campo Localizar: Incorreto, pois alternativa inválida para o cenário.",
        "Usar \"Correspondência exata de maiúsculas\" com a expressão micro: Incorreto, pois alternativa inválida para o cenário.",
        "Não é possível usar expressões regulares no Word: Incorreto, pois alternativa inválida para o cenário."
      ],
      "dicaOuro": "Dica de prova: Ao lidar com Localizar e Substituir, associe mentalmente a funcionalidade correta 'Ativar \"Usar caracteres curinga\" e usar a expressão micro* no campo Localizar'."
    }
  },
  {
    "id": "mo101_q166",
    "text": "Um usuário precisa que itens específicos de uma lista numerada usem formatação diferente como cor vermelha sem afetar o restante da lista. Qual é a abordagem correta?",
    "options": [
      "Usar campos IF para alternar a formatação dos itens",
      "Modificar o estilo da lista para incluir formatação condicional por cor",
      "Criar um estilo de lista separado para os itens vermelhos",
      "Selecionar apenas os itens desejados e aplicar formatação de caractere diretamente sobrepondo o estilo da lista"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Estilos e Modelos",
    "explanation": {
      "intro": "Questão técnica do MO-101.",
      "papoReto": "A resposta correta é 'Selecionar apenas os itens desejados e aplicar formatação de caractere diretamente sobrepondo o estilo da lista'. ",
      "respostaCerta": "Selecionar apenas os itens desejados e aplicar formatação de caractere diretamente sobrepondo o estilo da lista ",
      "puloDoGato": "Atenção: alguns distratores usam caminhos ou termos plausíveis de Numeração e Listas.",
      "cascasDeBanana": [
        "Criar um estilo de lista separado para os itens vermelhos: Incorreto, pois alternativa inválida para o cenário.",
        "Modificar o estilo da lista para incluir formatação condicional por cor: Incorreto, pois alternativa inválida para o cenário.",
        "Usar campos IF para alternar a formatação dos itens: Incorreto, pois alternativa inválida para o cenário."
      ],
      "dicaOuro": "Dica de prova: Ao lidar com Numeração e Listas, associe mentalmente a funcionalidade correta 'Selecionar apenas os itens desejados e aplicar formatação de caractere diretamente sobrepondo o estilo da lista'."
    }
  },
  {
    "id": "mo101_q167",
    "text": "Qual recurso do Word sugere automaticamente a conclusão de palavras longas ou frases enquanto o usuário digita com base em entradas anteriores?",
    "options": [
      "AutoTexto com sugestão automática via F3 ou Enter",
      "AutoCorreção com sugestão preditiva",
      "Copilot com preenchimento automático de texto",
      "Editor do Word com sugestões de completação"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Questão técnica do MO-101.",
      "papoReto": "A resposta correta é 'AutoTexto com sugestão automática via F3 ou Enter'. ",
      "respostaCerta": "AutoTexto com sugestão automática via F3 ou Enter ",
      "puloDoGato": "Atenção: alguns distratores usam caminhos ou termos plausíveis de Autocomplete e Sugestões.",
      "cascasDeBanana": [
        "AutoCorreção com sugestão preditiva: Incorreto, pois alternativa inválida para o cenário.",
        "Editor do Word com sugestões de completação: Incorreto, pois alternativa inválida para o cenário.",
        "Copilot com preenchimento automático de texto: Incorreto, pois alternativa inválida para o cenário."
      ],
      "dicaOuro": "Dica de prova: Ao lidar com Autocomplete e Sugestões, associe mentalmente a funcionalidade correta 'AutoTexto com sugestão automática via F3 ou Enter'."
    }
  },
  {
    "id": "mo101_q168",
    "text": "O que o Editor do Word oferece além da verificação ortográfica e gramatical tradicional?",
    "options": [
      "Tradução automática integrada ao documento",
      "Sugestões de refinamento de estilo, clareza, concisão, vocabulário e tom do texto",
      "Apenas correção ortográfica aprimorada com mais idiomas",
      "Geração automática de resumos executivos do documento"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Questão técnica do MO-101.",
      "papoReto": "A resposta correta é 'Sugestões de refinamento de estilo, clareza, concisão, vocabulário e tom do texto'. ",
      "respostaCerta": "Sugestões de refinamento de estilo, clareza, concisão, vocabulário e tom do texto ",
      "puloDoGato": "O Editor (Microsoft 365) vai além de ortografia e gramática: avalia estilo, clareza, concisão, vocabulário e tom — sugestões de escrita assistidas por IA, organizadas por categoria de refinamento.",
      "cascasDeBanana": [
        "Apenas correção ortográfica aprimorada com mais idiomas: Incorreto, pois alternativa inválida para o cenário.",
        "Tradução automática integrada ao documento: Incorreto, pois alternativa inválida para o cenário.",
        "Geração automática de resumos executivos do documento: Incorreto, pois alternativa inválida para o cenário."
      ],
      "dicaOuro": "Dica de prova: Ao lidar com Editor do Word, associe mentalmente a funcionalidade correta 'Sugestões de refinamento de estilo, clareza, concisão, vocabulário e tom do texto'."
    }
  },
  {
    "id": "mo101_q169",
    "text": "Um usuário deseja configurar o Editor do Word para verificar apenas questões de gramática e ignorar sugestões de estilo e clareza. Como deve proceder?",
    "options": [
      "Arquivo → Opções → Idioma → Editor → Somente Gramática",
      "Revisão → Editor → Configurações → desativar sugestões de estilo",
      "Arquivo → Opções → Revisão de Texto → configurar as categorias do Editor desativando as verificações de estilo",
      "Revisão → Ortografia e Gramática → Opções → Apenas Gramática"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Questão técnica do MO-101.",
      "papoReto": "A resposta correta é 'Arquivo → Opções → Revisão de Texto → configurar as categorias do Editor desativando as verificações de estilo'. ",
      "respostaCerta": "Arquivo → Opções → Revisão de Texto → configurar as categorias do Editor desativando as verificações de estilo ",
      "puloDoGato": "As categorias do Editor são configuráveis em Arquivo → Opções → Revisão de Texto. Desmarque as verificações de Estilo/Clareza para que ele cheque apenas gramática, sem sugestões estilísticas.",
      "cascasDeBanana": [
        "Revisão → Editor → Configurações → desativar sugestões de estilo: Incorreto, pois alternativa inválida para o cenário.",
        "Arquivo → Opções → Idioma → Editor → Somente Gramática: Incorreto, pois alternativa inválida para o cenário.",
        "Revisão → Ortografia e Gramática → Opções → Apenas Gramática: Incorreto, pois alternativa inválida para o cenário."
      ],
      "dicaOuro": "Dica de prova: Ao lidar com Editor do Word, associe mentalmente a funcionalidade correta 'Arquivo → Opções → Revisão de Texto → configurar as categorias do Editor desativando as verificações de estilo'."
    }
  },
  {
    "id": "mo101_q170",
    "text": "Um usuário escreve um documento com partes em português e partes em inglês. Como configurar a verificação ortográfica para funcionar corretamente em ambos os idiomas?",
    "options": [
      "Usar dois documentos separados um para cada idioma",
      "Desativar a verificação ortográfica nas partes em inglês",
      "Selecionar cada trecho em idioma diferente → Revisão → Idioma → Definir Idioma de Revisão de Texto → selecionar o idioma correspondente",
      "Configurar o idioma padrão do documento e usar dicionário bilíngue"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Questão técnica do MO-101.",
      "papoReto": "A resposta correta é 'Selecionar cada trecho em idioma diferente → Revisão → Idioma → Definir Idioma de Revisão de Texto → selecionar o idioma correspondente'. ",
      "respostaCerta": "Selecionar cada trecho em idioma diferente → Revisão → Idioma → Definir Idioma de Revisão de Texto → selecionar o idioma correspondente ",
      "puloDoGato": "A verificação ortográfica é definida POR TRECHO: selecione cada parte e use Revisão → Idioma → Definir Idioma de Revisão de Texto. Assim o Word aplica o dicionário certo a cada idioma no mesmo documento.",
      "cascasDeBanana": [
        "Configurar o idioma padrão do documento e usar dicionário bilíngue: Incorreto, pois alternativa inválida para o cenário.",
        "Desativar a verificação ortográfica nas partes em inglês: Incorreto, pois alternativa inválida para o cenário.",
        "Usar dois documentos separados um para cada idioma: Incorreto, pois alternativa inválida para o cenário."
      ],
      "dicaOuro": "Dica de prova: Ao lidar com Idioma, associe mentalmente a funcionalidade correta 'Selecionar cada trecho em idioma diferente → Revisão → Idioma → Definir Idioma de Revisão de Texto → selecionar o idioma correspondente'."
    }
  },
  {
    "id": "mo101_q171",
    "text": "O que é um Sumário de Autoridades no Word e em que tipo de documento é mais utilizado?",
    "options": [
      "É um índice de citações legais como casos processos e estatutos usado principalmente em documentos jurídicos",
      "É uma lista de todas as fontes bibliográficas do documento",
      "É um sumário automático baseado em estilos de título para documentos acadêmicos",
      "É um índice remissivo especializado para termos técnicos"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Referências",
    "explanation": {
      "intro": "Questão técnica do MO-101.",
      "papoReto": "A resposta correta é 'É um índice de citações legais como casos processos e estatutos usado principalmente em documentos jurídicos'. ",
      "respostaCerta": "É um índice de citações legais como casos processos e estatutos usado principalmente em documentos jurídicos ",
      "puloDoGato": "Atenção: alguns distratores usam caminhos ou termos plausíveis de Sumário de Autoridades.",
      "cascasDeBanana": [
        "É um sumário automático baseado em estilos de título para documentos acadêmicos: Incorreto, pois alternativa inválida para o cenário.",
        "É uma lista de todas as fontes bibliográficas do documento: Incorreto, pois alternativa inválida para o cenário.",
        "É um índice remissivo especializado para termos técnicos: Incorreto, pois alternativa inválida para o cenário."
      ],
      "dicaOuro": "Dica de prova: Ao lidar com Sumário de Autoridades, associe mentalmente a funcionalidade correta 'É um índice de citações legais como casos processos e estatutos usado principalmente em documentos jurídicos'."
    }
  },
  {
    "id": "mo101_q172",
    "text": "Qual é o processo para criar um Sumário de Autoridades no Word?",
    "options": [
      "Marcar cada citação com Referências → Marcar Citação (Alt+Shift+I) e depois inserir o sumário via Referências → Inserir Sumário de Autoridades",
      "Usar Índice Remissivo com categoria Jurídico para gerar o sumário",
      "Inserir as citações como notas de rodapé e gerar o sumário automaticamente",
      "Usar Referências → Gerenciar Fontes → Sumário de Autoridades"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Referências",
    "explanation": {
      "intro": "Questão técnica do MO-101.",
      "papoReto": "A resposta correta é 'Marcar cada citação com Referências → Marcar Citação (Alt+Shift+I) e depois inserir o sumário via Referências → Inserir Sumário de Autoridades'. ",
      "respostaCerta": "Marcar cada citação com Referências → Marcar Citação (Alt+Shift+I) e depois inserir o sumário via Referências → Inserir Sumário de Autoridades ",
      "puloDoGato": "Atenção: alguns distratores usam caminhos ou termos plausíveis de Sumário de Autoridades.",
      "cascasDeBanana": [
        "Usar Referências → Gerenciar Fontes → Sumário de Autoridades: Incorreto, pois alternativa inválida para o cenário.",
        "Inserir as citações como notas de rodapé e gerar o sumário automaticamente: Incorreto, pois alternativa inválida para o cenário.",
        "Usar Índice Remissivo com categoria Jurídico para gerar o sumário: Incorreto, pois alternativa inválida para o cenário."
      ],
      "dicaOuro": "Dica de prova: Ao lidar com Sumário de Autoridades, associe mentalmente a funcionalidade correta 'Marcar cada citação com Referências → Marcar Citação'."
    }
  },
  {
    "id": "mo101_q173",
    "text": "Um usuário precisa criar um formulário de entrada de dados personalizado com caixas de texto botões e listas suspensas que apareça ao abrir o documento. Qual recurso do Word permite isso?",
    "options": [
      "Usar Controles de Conteúdo com proteção de formulário",
      "Criar um UserForm no Editor VBA e chamar UserForm.Show no evento AutoOpen",
      "Usar o Designer de Formulários do SharePoint integrado ao Word",
      "Criar um formulário HTML vinculado ao documento Word"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Formulários e Macros",
    "explanation": {
      "intro": "Questão técnica do MO-101.",
      "papoReto": "A resposta correta é 'Criar um UserForm no Editor VBA e chamar UserForm.Show no evento AutoOpen'. ",
      "respostaCerta": "Criar um UserForm no Editor VBA e chamar UserForm.Show no evento AutoOpen ",
      "puloDoGato": "Formulários com caixas de texto, botões e listas exigem um UserForm no Editor VBA. Para exibi-lo na abertura, chame UserForm.Show dentro do evento AutoOpen (ou Document_Open).",
      "cascasDeBanana": [
        "Usar Controles de Conteúdo com proteção de formulário: Incorreto, pois alternativa inválida para o cenário.",
        "Criar um formulário HTML vinculado ao documento Word: Incorreto, pois alternativa inválida para o cenário.",
        "Usar o Designer de Formulários do SharePoint integrado ao Word: Incorreto, pois alternativa inválida para o cenário."
      ],
      "dicaOuro": "Dica de prova: Ao lidar com UserForms VBA, associe mentalmente a funcionalidade correta 'Criar um UserForm no Editor VBA e chamar UserForm.Show no evento AutoOpen'."
    }
  },
  {
    "id": "mo101_q174",
    "text": "Qual evento VBA do objeto Document é acionado automaticamente quando o documento Word é fechado permitindo executar ações de limpeza ou salvamento?",
    "options": [
      "Document_Close",
      "Document_Exit",
      "Document_BeforeClose",
      "AutoClose"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Formulários e Macros",
    "explanation": {
      "intro": "Questão técnica do MO-101.",
      "papoReto": "A resposta correta é 'Document_Close'. ",
      "respostaCerta": "Document_Close ",
      "puloDoGato": "O evento Document_Close dispara automaticamente ao fechar o documento — ideal para limpeza ou salvamento. Não confunda com AutoClose (macro de escopo global) nem com Document_Open.",
      "cascasDeBanana": [
        "Document_BeforeClose: Incorreto, pois alternativa inválida para o cenário.",
        "AutoClose: Incorreto, pois alternativa inválida para o cenário.",
        "Document_Exit: Incorreto, pois alternativa inválida para o cenário."
      ],
      "dicaOuro": "Dica de prova: Ao lidar com UserForms VBA, associe mentalmente a funcionalidade correta 'Document_Close'."
    }
  },
  {
    "id": "mo101_q175",
    "text": "Um usuário deseja que o Word não corrija automaticamente a primeira letra de células de tabela para maiúscula. Onde deve desativar essa opção?",
    "options": [
      "Arquivo → Opções → Revisão de Texto → Opções de AutoCorreção → AutoCorreção → desmarcar \"Colocar em maiúscula a primeira letra das células de tabela\"",
      "Arquivo → Opções → Avançado → Edição → Maiúsculas em Tabelas",
      "Inserir → Tabela → Propriedades → Formatação → desativar AutoMaiúsculas",
      "Revisão → Ortografia → Opções → Tabelas → Desativar Maiúsculas"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Questão técnica do MO-101.",
      "papoReto": "A resposta correta é 'Arquivo → Opções → Revisão de Texto → Opções de AutoCorreção → AutoCorreção → desmarcar \"Colocar em maiúscula a primeira letra das células de tabela\"'. ",
      "respostaCerta": "Arquivo → Opções → Revisão de Texto → Opções de AutoCorreção → AutoCorreção → desmarcar \"Colocar em maiúscula a primeira letra das células de tabela\" ",
      "puloDoGato": "Atenção: alguns distratores usam caminhos ou termos plausíveis de Configurações Avançadas.",
      "cascasDeBanana": [
        "Arquivo → Opções → Avançado → Edição → Maiúsculas em Tabelas: Incorreto, pois alternativa inválida para o cenário.",
        "Revisão → Ortografia → Opções → Tabelas → Desativar Maiúsculas: Incorreto, pois alternativa inválida para o cenário.",
        "Inserir → Tabela → Propriedades → Formatação → desativar AutoMaiúsculas: Incorreto, pois alternativa inválida para o cenário."
      ],
      "dicaOuro": "Dica de prova: Ao lidar com Configurações Avançadas, associe mentalmente a funcionalidade correta 'Arquivo → Opções → Revisão de Texto → Opções de AutoCorreção → AutoCorreção → desmarcar \"Colocar em maiúscula a primeira letra das células de tabela\"'."
    }
  },
  {
    "id": "mo101_q176",
    "text": "Um usuário precisa que o campo { DOCPROPERTY } exiba uma propriedade personalizada criada pelo usuário como \"Número do Contrato\". Como deve criar essa propriedade?",
    "options": [
      "Arquivo → Opções → Propriedades do Documento → Personalizar",
      "Arquivo → Informações → Propriedades → Propriedades Avançadas → guia Personalizar → adicionar a propriedade e o valor",
      "Desenvolvedor → Propriedades do Documento → Adicionar Campo Personalizado",
      "Inserir → Campo → DocProperty → Nova Propriedade"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Questão técnica do MO-101.",
      "papoReto": "A resposta correta é 'Arquivo → Informações → Propriedades → Propriedades Avançadas → guia Personalizar → adicionar a propriedade e o valor'. ",
      "respostaCerta": "Arquivo → Informações → Propriedades → Propriedades Avançadas → guia Personalizar → adicionar a propriedade e o valor ",
      "puloDoGato": "Atenção: alguns distratores usam caminhos ou termos plausíveis de Propriedades Avançadas.",
      "cascasDeBanana": [
        "Inserir → Campo → DocProperty → Nova Propriedade: Incorreto, pois alternativa inválida para o cenário.",
        "Arquivo → Opções → Propriedades do Documento → Personalizar: Incorreto, pois alternativa inválida para o cenário.",
        "Desenvolvedor → Propriedades do Documento → Adicionar Campo Personalizado: Incorreto, pois alternativa inválida para o cenário."
      ],
      "dicaOuro": "Dica de prova: Ao lidar com Propriedades Avançadas, associe mentalmente a funcionalidade correta 'Arquivo → Informações → Propriedades → Propriedades Avançadas → guia Personalizar → adicionar a propriedade e o valor'."
    }
  },
  {
    "id": "mo101_q177",
    "text": "Um usuário precisa criar documentos de mala direta onde cada destinatário receba um documento com múltiplas páginas de conteúdo personalizado. Qual abordagem garante que cada destinatário receba todas as suas páginas corretamente agrupadas?",
    "options": [
      "Criar um documento por destinatário manualmente",
      "Usar macro VBA para dividir o documento mesclado por destinatário após a geração",
      "Usar Mala Direta do tipo Diretório com controle manual de páginas",
      "Usar Mala Direta do tipo Cartas com quebras de página entre registros e concluir para novo documento"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Mala Direta",
    "explanation": {
      "intro": "Questão técnica do MO-101.",
      "papoReto": "A resposta correta é 'Usar Mala Direta do tipo Cartas com quebras de página entre registros e concluir para novo documento'. ",
      "respostaCerta": "Usar Mala Direta do tipo Cartas com quebras de página entre registros e concluir para novo documento ",
      "puloDoGato": "Atenção: alguns distratores usam caminhos ou termos plausíveis de Configuração da Mala Direta.",
      "cascasDeBanana": [
        "Usar Mala Direta do tipo Diretório com controle manual de páginas: Incorreto, pois alternativa inválida para o cenário.",
        "Criar um documento por destinatário manualmente: Incorreto, pois alternativa inválida para o cenário.",
        "Usar macro VBA para dividir o documento mesclado por destinatário após a geração: Incorreto, pois alternativa inválida para o cenário."
      ],
      "dicaOuro": "Dica de prova: Ao lidar com Configuração da Mala Direta, associe mentalmente a funcionalidade correta 'Usar Mala Direta do tipo Cartas com quebras de página entre registros e concluir para novo documento'."
    }
  },
  {
    "id": "mo101_q178",
    "text": "Um usuário deseja criar um modelo Word que force o usuário a preencher propriedades do documento como Título e Autor antes de começar a editar. Como implementar isso?",
    "options": [
      "Criar uma macro AutoNew no modelo que exibe um UserForm solicitando as propriedades antes de liberar a edição",
      "Usar Arquivo → Opções → Personalizar → Propriedades Obrigatórias",
      "Usar Controles de Conteúdo vinculados às propriedades do documento sem macro",
      "Configurar Restringir Edição até que as propriedades sejam preenchidas"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Estilos e Modelos",
    "explanation": {
      "intro": "Questão técnica do MO-101.",
      "papoReto": "A resposta correta é 'Criar uma macro AutoNew no modelo que exibe um UserForm solicitando as propriedades antes de liberar a edição'. ",
      "respostaCerta": "Criar uma macro AutoNew no modelo que exibe um UserForm solicitando as propriedades antes de liberar a edição ",
      "puloDoGato": "A macro AutoNew roda toda vez que um novo documento é criado A PARTIR do modelo — o momento certo para exibir um UserForm que obriga o preenchimento das propriedades antes de liberar a edição.",
      "cascasDeBanana": [
        "Usar Controles de Conteúdo vinculados às propriedades do documento sem macro: Incorreto, pois alternativa inválida para o cenário.",
        "Configurar Restringir Edição até que as propriedades sejam preenchidas: Incorreto, pois alternativa inválida para o cenário.",
        "Usar Arquivo → Opções → Personalizar → Propriedades Obrigatórias: Incorreto, pois alternativa inválida para o cenário."
      ],
      "dicaOuro": "Dica de prova: Ao lidar com Modelos, associe mentalmente a funcionalidade correta 'Criar uma macro AutoNew no modelo que exibe um UserForm solicitando as propriedades antes de liberar a edição'."
    }
  },
  {
    "id": "mo101_q179",
    "text": "Um usuário precisa impedir que colaboradores externos vejam os comentários feitos por revisores internos antes de compartilhar o documento externamente. Qual é a abordagem correta?",
    "options": [
      "Proteger o documento com senha ocultando os comentários",
      "Converter o documento para PDF antes de compartilhar",
      "Usar Revisão → Mostrar Marcações → desativar Comentários antes de compartilhar",
      "Executar o Inspetor de Documento para remover comentários e depois compartilhar o arquivo limpo"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Questão técnica do MO-101.",
      "papoReto": "A resposta correta é 'Executar o Inspetor de Documento para remover comentários e depois compartilhar o arquivo limpo'. ",
      "respostaCerta": "Executar o Inspetor de Documento para remover comentários e depois compartilhar o arquivo limpo ",
      "puloDoGato": "Atenção: alguns distratores usam caminhos ou termos plausíveis de Colaboração.",
      "cascasDeBanana": [
        "Usar Revisão → Mostrar Marcações → desativar Comentários antes de compartilhar: Incorreto, pois alternativa inválida para o cenário.",
        "Proteger o documento com senha ocultando os comentários: Incorreto, pois alternativa inválida para o cenário.",
        "Converter o documento para PDF antes de compartilhar: Incorreto, pois alternativa inválida para o cenário."
      ],
      "dicaOuro": "Dica de prova: Ao lidar com Colaboração, associe mentalmente a funcionalidade correta 'Executar o Inspetor de Documento para remover comentários e depois compartilhar o arquivo limpo'."
    }
  },
  {
    "id": "mo101_q180",
    "text": "Um usuário criou uma macro no Word que abre uma caixa de diálogo para selecionar um arquivo. Qual função VBA permite exibir o diálogo padrão de abertura de arquivo do Windows?",
    "options": [
      "GetOpenFilename do objeto Application",
      "Application.Dialogs(wdDialogFileOpen).Show",
      "Application.FileDialog(msoFileDialogFilePicker).Show",
      "Shell \"explorer.exe\" para selecionar arquivo"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Formulários e Macros",
    "explanation": {
      "intro": "Questão técnica do MO-101.",
      "papoReto": "A resposta correta é 'Application.FileDialog(msoFileDialogFilePicker).Show'. ",
      "respostaCerta": "Application.FileDialog(msoFileDialogFilePicker).Show ",
      "puloDoGato": "Para abrir o diálogo nativo de seleção de arquivo do Windows no VBA, use Application.FileDialog(msoFileDialogFilePicker) e chame .Show. O tipo msoFileDialogFilePicker é o seletor de arquivo padrão.",
      "cascasDeBanana": [
        "Shell \"explorer.exe\" para selecionar arquivo: Incorreto, pois alternativa inválida para o cenário.",
        "GetOpenFilename do objeto Application: Incorreto, pois alternativa inválida para o cenário.",
        "Application.Dialogs: Incorreto, pois alternativa inválida para o cenário."
      ],
      "dicaOuro": "Dica de prova: Ao lidar com Macros, associe mentalmente a funcionalidade correta 'Application.FileDialog'."
    }
  },
  {
    "id": "mo101_q181",
    "text": "Um usuário precisa que um campo exiba o caminho completo e o nome do arquivo do documento atual. Qual campo deve inserir?",
    "options": [
      "{ DOCPATH }",
      "{ FILEINFO Path }",
      "{ FILEPATH }",
      "{ FILENAME \\p }"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Referências",
    "explanation": {
      "intro": "Questão técnica do MO-101.",
      "papoReto": "A resposta correta é '{ FILENAME \\p }'. ",
      "respostaCerta": "{ FILENAME \\p } ",
      "puloDoGato": "O campo { FILENAME } exibe o nome do arquivo; o switch \\p acrescenta o caminho completo. Sem \\p, mostra só o nome. Atualize os campos com F9.",
      "cascasDeBanana": [
        "{ DOCPATH }: Incorreto, pois alternativa inválida para o cenário.",
        "{ FILEPATH }: Incorreto, pois alternativa inválida para o cenário.",
        "{ FILEINFO Path }: Incorreto, pois alternativa inválida para o cenário."
      ],
      "dicaOuro": "Dica de prova: Ao lidar com Campos do Word, associe mentalmente a funcionalidade correta '{ FILENAME \\p }'."
    }
  },
  {
    "id": "mo101_q182",
    "text": "Um usuário tem um documento com seções de orientação diferente e percebe que as margens de impressão estão incorretas nas páginas paisagem. Qual é a causa mais provável?",
    "options": [
      "O estilo de página não foi atualizado após a mudança de orientação",
      "O Word aplica automaticamente as margens corretas e o problema é da impressora",
      "As margens da seção com orientação paisagem não foram ajustadas individualmente após a mudança de orientação",
      "A impressora não suporta impressão em paisagem"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Questão técnica do MO-101.",
      "papoReto": "A resposta correta é 'As margens da seção com orientação paisagem não foram ajustadas individualmente após a mudança de orientação'. ",
      "respostaCerta": "As margens da seção com orientação paisagem não foram ajustadas individualmente após a mudança de orientação ",
      "puloDoGato": "Atenção: alguns distratores usam caminhos ou termos plausíveis de Seções e Layout.",
      "cascasDeBanana": [
        "A impressora não suporta impressão em paisagem: Incorreto, pois alternativa inválida para o cenário.",
        "O estilo de página não foi atualizado após a mudança de orientação: Incorreto, pois alternativa inválida para o cenário.",
        "O Word aplica automaticamente as margens corretas e o problema é da impressora: Incorreto, pois alternativa inválida para o cenário."
      ],
      "dicaOuro": "Dica de prova: Ao lidar com Seções e Layout, associe mentalmente a funcionalidade correta 'As margens da seção com orientação paisagem não foram ajustadas individualmente após a mudança de orientação'."
    }
  },
  {
    "id": "mo101_q183",
    "text": "Um usuário precisa que um estilo de parágrafo impeça que o parágrafo seja separado do parágrafo seguinte por uma quebra de página. Qual configuração de parágrafo deve ativar nas propriedades do estilo?",
    "options": [
      "Formato → Parágrafo → Quebras de linha e de página → marcar \"Controle de linhas isoladas\"",
      "Formato → Parágrafo → Quebras de linha e de página → marcar \"Manter com o próximo\"",
      "Inserir → Quebra → Sem Quebra de Página entre parágrafos",
      "Formato → Parágrafo → Espaçamento → definir espaçamento antes como negativo"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Estilos e Modelos",
    "explanation": {
      "intro": "Questão técnica do MO-101.",
      "papoReto": "A resposta correta é 'Formato → Parágrafo → Quebras de linha e de página → marcar \"Manter com o próximo\"'. ",
      "respostaCerta": "Formato → Parágrafo → Quebras de linha e de página → marcar \"Manter com o próximo\" ",
      "puloDoGato": "Atenção: alguns distratores usam caminhos ou termos plausíveis de Estilos Avançados.",
      "cascasDeBanana": [
        "Formato → Parágrafo → Quebras de linha e de página → marcar \"Controle de linhas isoladas\": Incorreto, pois alternativa inválida para o cenário.",
        "Formato → Parágrafo → Espaçamento → definir espaçamento antes como negativo: Incorreto, pois alternativa inválida para o cenário.",
        "Inserir → Quebra → Sem Quebra de Página entre parágrafos: Incorreto, pois alternativa inválida para o cenário."
      ],
      "dicaOuro": "Dica de prova: Ao lidar com Estilos Avançados, associe mentalmente a funcionalidade correta 'Formato → Parágrafo → Quebras de linha e de página → marcar \"Manter com o próximo\"'."
    }
  },
  {
    "id": "mo101_q184",
    "text": "Um usuário precisa que um parágrafo de título nunca seja dividido entre páginas ficando sempre inteiro em uma única página. Qual configuração de parágrafo garante isso?",
    "options": [
      "Formato → Parágrafo → Quebras de linha e de página → marcar \"Manter linhas juntas\"",
      "Formato → Parágrafo → Quebras de linha e de página → marcar \"Manter com o próximo\"",
      "Configurar o estilo com espaçamento fixo que caiba em uma página",
      "Inserir → Quebra de Página antes do parágrafo sempre"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Estilos e Modelos",
    "explanation": {
      "intro": "Questão técnica do MO-101.",
      "papoReto": "A resposta correta é 'Formato → Parágrafo → Quebras de linha e de página → marcar \"Manter linhas juntas\"'. ",
      "respostaCerta": "Formato → Parágrafo → Quebras de linha e de página → marcar \"Manter linhas juntas\" ",
      "puloDoGato": "Atenção: alguns distratores usam caminhos ou termos plausíveis de Estilos Avançados.",
      "cascasDeBanana": [
        "Formato → Parágrafo → Quebras de linha e de página → marcar \"Manter com o próximo\": Incorreto, pois alternativa inválida para o cenário.",
        "Inserir → Quebra de Página antes do parágrafo sempre: Incorreto, pois alternativa inválida para o cenário.",
        "Configurar o estilo com espaçamento fixo que caiba em uma página: Incorreto, pois alternativa inválida para o cenário."
      ],
      "dicaOuro": "Dica de prova: Ao lidar com Estilos Avançados, associe mentalmente a funcionalidade correta 'Formato → Parágrafo → Quebras de linha e de página → marcar \"Manter linhas juntas\"'."
    }
  },
  {
    "id": "mo101_q185",
    "text": "Um usuário precisa converter um texto separado por tabulações em uma tabela Word automaticamente. Qual recurso deve usar?",
    "options": [
      "Copiar o texto para o Excel, formatar como tabela e colar de volta no Word",
      "Inserir → Tabela → Importar Texto Tabulado",
      "Usar macro VBA para dividir o texto e criar a tabela",
      "Selecionar o texto → Inserir → Tabela → Converter Texto em Tabela → selecionar Tabulação como separador"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Questão técnica do MO-101.",
      "papoReto": "A resposta correta é 'Selecionar o texto → Inserir → Tabela → Converter Texto em Tabela → selecionar Tabulação como separador'. ",
      "respostaCerta": "Selecionar o texto → Inserir → Tabela → Converter Texto em Tabela → selecionar Tabulação como separador ",
      "puloDoGato": "Inserir → Tabela → Converter Texto em Tabela detecta o separador (tabulação, vírgula, parágrafo) para definir as colunas. Com texto tabulado, escolha 'Tabulações' para alinhar cada coluna.",
      "cascasDeBanana": [
        "Copiar o texto para o Excel, formatar como tabela e colar de volta no Word: Incorreto, pois alternativa inválida para o cenário.",
        "Inserir → Tabela → Importar Texto Tabulado: Incorreto, pois alternativa inválida para o cenário.",
        "Usar macro VBA para dividir o texto e criar a tabela: Incorreto, pois alternativa inválida para o cenário."
      ],
      "dicaOuro": "Dica de prova: Ao lidar com Tabelas, associe mentalmente a funcionalidade correta 'Selecionar o texto → Inserir → Tabela → Converter Texto em Tabela → selecionar Tabulação como separador'."
    }
  },
  {
    "id": "mo101_q186",
    "text": "Um usuário precisa mesclar células de uma tabela Word para criar um cabeçalho que abranja três colunas. Qual sequência deve seguir?",
    "options": [
      "Clicar com o botão direito → Propriedades da Tabela → Mesclar",
      "Selecionar as células → Página Inicial → Parágrafo → Mesclar Células",
      "Selecionar as células → Layout da Tabela → Mesclar Células",
      "Selecionar as células → Design da Tabela → Mesclar"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Questão técnica do MO-101.",
      "papoReto": "A resposta correta é 'Selecionar as células → Layout da Tabela → Mesclar Células'. ",
      "respostaCerta": "Selecionar as células → Layout da Tabela → Mesclar Células ",
      "puloDoGato": "Para um cabeçalho que abrange várias colunas, selecione as células e use Layout da Tabela → Mesclar Células. O conteúdo vira uma única célula contínua; o inverso é 'Dividir Células'.",
      "cascasDeBanana": [
        "Selecionar as células → Design da Tabela → Mesclar: Incorreto, pois alternativa inválida para o cenário.",
        "Clicar com o botão direito → Propriedades da Tabela → Mesclar: Incorreto, pois alternativa inválida para o cenário.",
        "Selecionar as células → Página Inicial → Parágrafo → Mesclar Células: Incorreto, pois alternativa inválida para o cenário."
      ],
      "dicaOuro": "Dica de prova: Ao lidar com Tabelas, associe mentalmente a funcionalidade correta 'Selecionar as células → Layout da Tabela → Mesclar Células'."
    }
  },
  {
    "id": "mo101_q187",
    "text": "Um usuário precisa usar uma lista de contatos do Outlook como fonte de dados de uma mala direta. Qual opção deve selecionar?",
    "options": [
      "Correspondências → Selecionar Destinatários → Usar Lista Existente → importar .pst do Outlook",
      "Correspondências → Selecionar Destinatários → Selecionar dos Contatos do Outlook",
      "Correspondências → Selecionar Destinatários → Contatos Microsoft 365",
      "Exportar os contatos do Outlook para CSV e usar como fonte"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Mala Direta",
    "explanation": {
      "intro": "Questão técnica do MO-101.",
      "papoReto": "A resposta correta é 'Correspondências → Selecionar Destinatários → Selecionar dos Contatos do Outlook'. ",
      "respostaCerta": "Correspondências → Selecionar Destinatários → Selecionar dos Contatos do Outlook ",
      "puloDoGato": "Na mala direta, a fonte de dados é definida em Correspondências → Selecionar Destinatários. 'Selecionar dos Contatos do Outlook' puxa a lista direto do catálogo do Outlook, sem exportar arquivo.",
      "cascasDeBanana": [
        "Correspondências → Selecionar Destinatários → Usar Lista Existente → importar .pst do Outlook: Incorreto, pois alternativa inválida para o cenário.",
        "Exportar os contatos do Outlook para CSV e usar como fonte: Incorreto, pois alternativa inválida para o cenário.",
        "Correspondências → Selecionar Destinatários → Contatos Microsoft 365: Incorreto, pois alternativa inválida para o cenário."
      ],
      "dicaOuro": "Dica de prova: Ao lidar com Fonte de Dados, associe mentalmente a funcionalidade correta 'Correspondências → Selecionar Destinatários → Selecionar dos Contatos do Outlook'."
    }
  },
  {
    "id": "mo101_q188",
    "text": "Um usuário deseja desativar a hifenização automática apenas em parágrafos específicos de um documento que já tem hifenização automática global ativada. Como deve proceder?",
    "options": [
      "Desativar a hifenização global e aplicar manualmente nos demais parágrafos",
      "Selecionar os parágrafos → Formato → Parágrafo → Linha e Quebra de Página → marcar \"Não hifenizar\"",
      "Usar estilo de parágrafo sem hifenização e aplicar aos parágrafos desejados",
      "Não é possível desativar a hifenização em parágrafos individuais"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Questão técnica do MO-101.",
      "papoReto": "A resposta correta é 'Selecionar os parágrafos → Formato → Parágrafo → Linha e Quebra de Página → marcar \"Não hifenizar\"'. ",
      "respostaCerta": "Selecionar os parágrafos → Formato → Parágrafo → Linha e Quebra de Página → marcar \"Não hifenizar\" ",
      "puloDoGato": "Atenção: alguns distratores usam caminhos ou termos plausíveis de Configurações Avançadas.",
      "cascasDeBanana": [
        "Desativar a hifenização global e aplicar manualmente nos demais parágrafos: Incorreto, pois alternativa inválida para o cenário.",
        "Usar estilo de parágrafo sem hifenização e aplicar aos parágrafos desejados: Incorreto, pois alternativa inválida para o cenário.",
        "Não é possível desativar a hifenização em parágrafos individuais: Incorreto, pois alternativa inválida para o cenário."
      ],
      "dicaOuro": "Dica de prova: Ao lidar com Configurações Avançadas, associe mentalmente a funcionalidade correta 'Selecionar os parágrafos → Formato → Parágrafo → Linha e Quebra de Página → marcar \"Não hifenizar\"'."
    }
  },
  {
    "id": "mo101_q189",
    "text": "Um usuário precisa que as legendas de figuras usem numeração por capítulo como \"Figura 2-1, Figura 2-2\". Qual configuração deve aplicar?",
    "options": [
      "Usar campo SEQ com argumento de capítulo na legenda",
      "Referências → Inserir Legenda → Numeração → marcar \"Incluir número do capítulo\" e definir o estilo de título separador",
      "Referências → Inserir Legenda → Formato → Numeração por Capítulo",
      "Modificar o estilo de legenda para incluir o número do capítulo manualmente"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Referências",
    "explanation": {
      "intro": "Questão técnica do MO-101.",
      "papoReto": "A resposta correta é 'Referências → Inserir Legenda → Numeração → marcar \"Incluir número do capítulo\" e definir o estilo de título separador'. ",
      "respostaCerta": "Referências → Inserir Legenda → Numeração → marcar \"Incluir número do capítulo\" e definir o estilo de título separador ",
      "puloDoGato": "Atenção: alguns distratores usam caminhos ou termos plausíveis de Legendas e Referências Cruzadas.",
      "cascasDeBanana": [
        "Referências → Inserir Legenda → Formato → Numeração por Capítulo: Incorreto, pois alternativa inválida para o cenário.",
        "Modificar o estilo de legenda para incluir o número do capítulo manualmente: Incorreto, pois alternativa inválida para o cenário.",
        "Usar campo SEQ com argumento de capítulo na legenda: Incorreto, pois alternativa inválida para o cenário."
      ],
      "dicaOuro": "Dica de prova: Ao lidar com Legendas e Referências Cruzadas, associe mentalmente a funcionalidade correta 'Referências → Inserir Legenda → Numeração → marcar \"Incluir número do capítulo\" e definir o estilo de título separador'."
    }
  },
  {
    "id": "mo101_q190",
    "text": "Um usuário precisa imprimir um documento Word com comentários e marcações de revisão visíveis na impressão. Qual configuração deve usar?",
    "options": [
      "Arquivo → Exportar → PDF → incluir marcações antes de imprimir o PDF",
      "Não é possível imprimir comentários e marcações no Word",
      "Arquivo → Imprimir → Configurações → Imprimir Todas as Páginas → marcar \"Imprimir Marcação\"",
      "Revisão → Mostrar Marcações → Ativar antes de imprimir sem ajuste no diálogo"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Questão técnica do MO-101.",
      "papoReto": "A resposta correta é 'Arquivo → Imprimir → Configurações → Imprimir Todas as Páginas → marcar \"Imprimir Marcação\"'. ",
      "respostaCerta": "Arquivo → Imprimir → Configurações → Imprimir Todas as Páginas → marcar \"Imprimir Marcação\" ",
      "puloDoGato": "Atenção: alguns distratores usam caminhos ou termos plausíveis de Impressão.",
      "cascasDeBanana": [
        "Revisão → Mostrar Marcações → Ativar antes de imprimir sem ajuste no diálogo: Incorreto, pois alternativa inválida para o cenário.",
        "Arquivo → Exportar → PDF → incluir marcações antes de imprimir o PDF: Incorreto, pois alternativa inválida para o cenário.",
        "Não é possível imprimir comentários e marcações no Word: Incorreto, pois alternativa inválida para o cenário."
      ],
      "dicaOuro": "Dica de prova: Ao lidar com Impressão, associe mentalmente a funcionalidade correta 'Arquivo → Imprimir → Configurações → Imprimir Todas as Páginas → marcar \"Imprimir Marcação\"'."
    }
  },
  {
    "id": "mo101_q191",
    "text": "Um usuário precisa que uma macro verifique se um documento foi modificado antes de fechá-lo e pergunte ao usuário se deseja salvar. Qual propriedade VBA indica se o documento foi modificado?",
    "options": [
      "ActiveDocument.IsChanged",
      "ActiveDocument.HasUnsavedChanges",
      "ActiveDocument.Modified",
      "ActiveDocument.Saved (retorna False se houver alterações não salvas)"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Formulários e Macros",
    "explanation": {
      "intro": "Questão técnica do MO-101.",
      "papoReto": "A resposta correta é 'ActiveDocument.Saved (retorna False se houver alterações não salvas)'. ",
      "respostaCerta": "ActiveDocument.Saved (retorna False se houver alterações não salvas) ",
      "puloDoGato": "A propriedade ActiveDocument.Saved retorna False quando há alterações não salvas. Teste-a antes de fechar para decidir se pergunta ao usuário. Definir Saved=True suprime o aviso de salvamento.",
      "cascasDeBanana": [
        "ActiveDocument.Modified: Incorreto, pois alternativa inválida para o cenário.",
        "ActiveDocument.IsChanged: Incorreto, pois alternativa inválida para o cenário.",
        "ActiveDocument.HasUnsavedChanges: Incorreto, pois alternativa inválida para o cenário."
      ],
      "dicaOuro": "Dica de prova: Ao lidar com Macros, associe mentalmente a funcionalidade correta 'ActiveDocument.Saved'."
    }
  },
  {
    "id": "mo101_q192",
    "text": "Um administrador precisa garantir que todos os documentos Word criados por uma equipe incluam automaticamente o nome do departamento nas propriedades personalizadas. Qual é a abordagem mais escalável?",
    "options": [
      "Criar um modelo .dotm com macro AutoNew que preenche a propriedade personalizada automaticamente ao criar o documento",
      "Usar uma política de grupo (GPO) para definir propriedades padrão de documentos Word",
      "Configurar o SharePoint para adicionar metadados automaticamente aos arquivos Word",
      "Instruir cada usuário a preencher manualmente as propriedades ao criar o documento"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Questão técnica do MO-101.",
      "papoReto": "A resposta correta é 'Criar um modelo .dotm com macro AutoNew que preenche a propriedade personalizada automaticamente ao criar o documento'. ",
      "respostaCerta": "Criar um modelo .dotm com macro AutoNew que preenche a propriedade personalizada automaticamente ao criar o documento ",
      "puloDoGato": "Atenção: alguns distratores usam caminhos ou termos plausíveis de Colaboração.",
      "cascasDeBanana": [
        "Instruir cada usuário a preencher manualmente as propriedades ao criar o documento: Incorreto, pois alternativa inválida para o cenário.",
        "Usar uma política de grupo: Incorreto, pois alternativa inválida para o cenário.",
        "Configurar o SharePoint para adicionar metadados automaticamente aos arquivos Word: Incorreto, pois alternativa inválida para o cenário."
      ],
      "dicaOuro": "Dica de prova: Ao lidar com Colaboração, associe mentalmente a funcionalidade correta 'Criar um modelo .dotm com macro AutoNew que preenche a propriedade personalizada automaticamente ao criar o documento'."
    }
  },
  {
    "id": "mo101_q193",
    "text": "Um usuário precisa marcar automaticamente todas as ocorrências de uma lista de termos técnicos no documento para o índice remissivo. Qual recurso do Word automatiza esse processo?",
    "options": [
      "Referências → Inserir Índice → Marcar Entrada Automática → usar um arquivo de concordância",
      "Referências → Marcar Citação → Marcar Todas",
      "Usar macro VBA com Localizar e Substituir para marcar os termos",
      "Referências → Índice → Automarcar com dicionário técnico"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Referências",
    "explanation": {
      "intro": "Questão técnica do MO-101.",
      "papoReto": "A resposta correta é 'Referências → Inserir Índice → Marcar Entrada Automática → usar um arquivo de concordância'. ",
      "respostaCerta": "Referências → Inserir Índice → Marcar Entrada Automática → usar um arquivo de concordância ",
      "puloDoGato": "Atenção: alguns distratores usam caminhos ou termos plausíveis de Índice Remissivo.",
      "cascasDeBanana": [
        "Referências → Marcar Citação → Marcar Todas: Incorreto, pois alternativa inválida para o cenário.",
        "Usar macro VBA com Localizar e Substituir para marcar os termos: Incorreto, pois alternativa inválida para o cenário.",
        "Referências → Índice → Automarcar com dicionário técnico: Incorreto, pois alternativa inválida para o cenário."
      ],
      "dicaOuro": "Dica de prova: Ao lidar com Índice Remissivo, associe mentalmente a funcionalidade correta 'Referências → Inserir Índice → Marcar Entrada Automática → usar um arquivo de concordância'."
    }
  },
  {
    "id": "mo101_q194",
    "text": "Um usuário percebe que ao abrir documentos existentes os estilos são alterados automaticamente para os do modelo Normal.dotm. Qual configuração do documento está causando isso?",
    "options": [
      "A versão do Word está desatualizada causando conflito de estilos",
      "A opção \"Atualizar estilos do documento automaticamente\" está ativada nas configurações do modelo vinculado",
      "O documento está corrompido e precisa ser reparado",
      "O modelo Normal.dotm foi modificado e substituiu os estilos dos documentos"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Estilos e Modelos",
    "explanation": {
      "intro": "Questão técnica do MO-101.",
      "papoReto": "A resposta correta é 'A opção \"Atualizar estilos do documento automaticamente\" está ativada nas configurações do modelo vinculado'. ",
      "respostaCerta": "A opção \"Atualizar estilos do documento automaticamente\" está ativada nas configurações do modelo vinculado ",
      "puloDoGato": "Com 'Atualizar estilos do documento automaticamente' ativado, o Word reaplica os estilos do modelo vinculado a cada abertura — por isso a formatação muda sozinha. Desative para preservar os estilos locais.",
      "cascasDeBanana": [
        "O documento está corrompido e precisa ser reparado: Incorreto, pois alternativa inválida para o cenário.",
        "O modelo Normal.dotm foi modificado e substituiu os estilos dos documentos: Incorreto, pois alternativa inválida para o cenário.",
        "A versão do Word está desatualizada causando conflito de estilos: Incorreto, pois alternativa inválida para o cenário."
      ],
      "dicaOuro": "Dica de prova: Ao lidar com Modelos, associe mentalmente a funcionalidade correta 'A opção \"Atualizar estilos do documento automaticamente\" está ativada nas configurações do modelo vinculado'."
    }
  },
  {
    "id": "mo101_q195",
    "text": "Um usuário abriu um documento Word que estava corrompido. O Word tentou reparar automaticamente mas alguns conteúdos foram perdidos. Qual recurso pode tentar recuperar o conteúdo manualmente?",
    "options": [
      "Usar o Verificador de Erros do Word para reparar o arquivo",
      "Arquivo → Abrir → selecionar o arquivo → seta ao lado de Abrir → Abrir e Reparar",
      "Arquivo → Informações → Reparar Documento",
      "Ferramentas → Recuperar Documento Corrompido"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Questão técnica do MO-101.",
      "papoReto": "A resposta correta é 'Arquivo → Abrir → selecionar o arquivo → seta ao lado de Abrir → Abrir e Reparar'. ",
      "respostaCerta": "Arquivo → Abrir → selecionar o arquivo → seta ao lado de Abrir → Abrir e Reparar ",
      "puloDoGato": "Atenção: alguns distratores usam caminhos ou termos plausíveis de Recuperação.",
      "cascasDeBanana": [
        "Ferramentas → Recuperar Documento Corrompido: Incorreto, pois alternativa inválida para o cenário.",
        "Arquivo → Informações → Reparar Documento: Incorreto, pois alternativa inválida para o cenário.",
        "Usar o Verificador de Erros do Word para reparar o arquivo: Incorreto, pois alternativa inválida para o cenário."
      ],
      "dicaOuro": "Dica de prova: Ao lidar com Recuperação, associe mentalmente a funcionalidade correta 'Arquivo → Abrir → selecionar o arquivo → seta ao lado de Abrir → Abrir e Reparar'."
    }
  },
  {
    "id": "mo101_q196",
    "text": "Um usuário precisa localizar todas as ocorrências de números de telefone no formato (XX) XXXXX-XXXX em um documento Word usando expressões curinga. Qual expressão deve usar no campo Localizar?",
    "options": [
      "(##) #####-#### com modo de curinga padrão",
      "Não é possível usar expressões regulares completas no Word; apenas curingas básicos",
      "\\d{2} \\d{5}-\\d{4} com expressões regulares",
      "\\([0-9]{2}\\) [0-9]{5}-[0-9]{4} com \"Usar caracteres curinga\" ativado"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Questão técnica do MO-101.",
      "papoReto": "A resposta correta é '\\([0-9]{2}\\) [0-9]{5}-[0-9]{4} com \"Usar caracteres curinga\" ativado'. ",
      "respostaCerta": "\\([0-9]{2}\\) [0-9]{5}-[0-9]{4} com \"Usar caracteres curinga\" ativado ",
      "puloDoGato": "Com curingas, os parênteses literais precisam ser escapados com barra invertida \\( \\), e {n} define a quantidade exata de dígitos. O padrão \\([0-9]{2}\\) [0-9]{5}-[0-9]{4} casa exatamente (XX) XXXXX-XXXX.",
      "cascasDeBanana": [
        ": Incorreto, pois alternativa inválida para o cenário.",
        "\\d{2} \\d{5}-\\d{4} com expressões regulares: Incorreto, pois alternativa inválida para o cenário.",
        "Não é possível usar expressões regulares completas no Word; apenas curingas básicos: Incorreto, pois alternativa inválida para o cenário."
      ],
      "dicaOuro": "Dica de prova: Ao lidar com Localizar e Substituir, associe mentalmente a funcionalidade correta '\\'."
    }
  },
  {
    "id": "mo101_q197",
    "text": "Um usuário precisa que uma macro exporte automaticamente o documento Word ativo para PDF em uma pasta específica sem exibir diálogos. Qual método VBA deve usar?",
    "options": [
      "ActiveDocument.SaveAs \"C:\\Pasta\\arquivo.pdf\", FileFormat:=wdFormatPDF",
      "Application.ExportPDF ActiveDocument, \"C:\\Pasta\\arquivo.pdf\"",
      "ActiveDocument.Print OutputFormat:=\"PDF\", Path:=\"C:\\Pasta\\\"",
      "ActiveDocument.ExportAsFixedFormat OutputFileName:=\"C:\\Pasta\\arquivo.pdf\", ExportFormat:=wdExportFormatPDF"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Formulários e Macros",
    "explanation": {
      "intro": "Questão técnica do MO-101.",
      "papoReto": "A resposta correta é 'ActiveDocument.ExportAsFixedFormat OutputFileName:=\"C:\\Pasta\\arquivo.pdf\", ExportFormat:=wdExportFormatPDF'. ",
      "respostaCerta": "ActiveDocument.ExportAsFixedFormat OutputFileName:=\"C:\\Pasta\\arquivo.pdf\", ExportFormat:=wdExportFormatPDF ",
      "puloDoGato": "O método ExportAsFixedFormat com ExportFormat:=wdExportFormatPDF gera o PDF sem abrir diálogos — diferente de SaveAs2. Informe OutputFileName com o caminho completo para salvar direto na pasta desejada.",
      "cascasDeBanana": [
        "ActiveDocument.SaveAs \"C:\\Pasta\\arquivo.pdf\", FileFormat:=wdFormatPDF: Incorreto, pois alternativa inválida para o cenário.",
        "Application.ExportPDF ActiveDocument, \"C:\\Pasta\\arquivo.pdf\": Incorreto, pois alternativa inválida para o cenário.",
        "ActiveDocument.Print OutputFormat:=\"PDF\", Path:=\"C:\\Pasta\\\": Incorreto, pois alternativa inválida para o cenário."
      ],
      "dicaOuro": "Dica de prova: Ao lidar com Macros, associe mentalmente a funcionalidade correta 'ActiveDocument.ExportAsFixedFormat OutputFileName:=\"C:\\Pasta\\arquivo.pdf\", ExportFormat:=wdExportFormatPDF'."
    }
  },
  {
    "id": "mo101_q198",
    "text": "Um usuário deseja que o Word mostre sempre a faixa de opções expandida sem precisar clicar para expandir a cada sessão. Qual configuração define esse comportamento permanentemente?",
    "options": [
      "Arquivo → Opções → Geral → Faixa de Opções → Sempre Expandida",
      "Pressionar Ctrl+F1 e configurar como padrão nas opções",
      "Clicar com o botão direito na faixa de opções → Recolher a Faixa de Opções → desmarcar para manter expandida permanentemente",
      "Exibir → Faixa de Opções → Fixar Expandida"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Questão técnica do MO-101.",
      "papoReto": "A resposta correta é 'Clicar com o botão direito na faixa de opções → Recolher a Faixa de Opções → desmarcar para manter expandida permanentemente'. ",
      "respostaCerta": "Clicar com o botão direito na faixa de opções → Recolher a Faixa de Opções → desmarcar para manter expandida permanentemente ",
      "puloDoGato": "Atenção: alguns distratores usam caminhos ou termos plausíveis de Configurações Avançadas.",
      "cascasDeBanana": [
        "Arquivo → Opções → Geral → Faixa de Opções → Sempre Expandida: Incorreto, pois alternativa inválida para o cenário.",
        "Exibir → Faixa de Opções → Fixar Expandida: Incorreto, pois alternativa inválida para o cenário.",
        "Pressionar Ctrl+F1 e configurar como padrão nas opções: Incorreto, pois alternativa inválida para o cenário."
      ],
      "dicaOuro": "Dica de prova: Ao lidar com Configurações Avançadas, associe mentalmente a funcionalidade correta 'Clicar com o botão direito na faixa de opções → Recolher a Faixa de Opções → desmarcar para manter expandida permanentemente'."
    }
  },
  {
    "id": "mo101_q199",
    "text": "Um usuário recebeu um documento Word de fonte externa que abriu em Modo de Exibição Protegido. Quais são os riscos de clicar em \"Habilitar Edição\" nesse documento?",
    "options": [
      "Não há riscos; o Modo de Exibição Protegido é apenas uma medida de desempenho",
      "O Word bloqueará permanentemente o documento após habilitar a edição",
      "O documento pode conter macros maliciosas ou conteúdo ativo que pode ser executado ao habilitar a edição comprometendo a segurança do sistema",
      "O documento perderá a formatação original ao ser habilitado para edição"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Questão técnica do MO-101.",
      "papoReto": "A resposta correta é 'O documento pode conter macros maliciosas ou conteúdo ativo que pode ser executado ao habilitar a edição comprometendo a segurança do sistema'. ",
      "respostaCerta": "O documento pode conter macros maliciosas ou conteúdo ativo que pode ser executado ao habilitar a edição comprometendo a segurança do sistema ",
      "puloDoGato": "Atenção: alguns distratores usam caminhos ou termos plausíveis de Segurança.",
      "cascasDeBanana": [
        "O documento perderá a formatação original ao ser habilitado para edição: Incorreto, pois alternativa inválida para o cenário.",
        "O Word bloqueará permanentemente o documento após habilitar a edição: Incorreto, pois alternativa inválida para o cenário.",
        "Não há riscos; o Modo de Exibição Protegido é apenas uma medida de desempenho: Incorreto, pois alternativa inválida para o cenário."
      ],
      "dicaOuro": "Dica de prova: Ao lidar com Segurança, associe mentalmente a funcionalidade correta 'O documento pode conter macros maliciosas ou conteúdo ativo que pode ser executado ao habilitar a edição comprometendo a segurança do sistema'."
    }
  },
  {
    "id": "mo101_q200",
    "text": "Um usuário deseja adicionar o domínio de um fornecedor confiável à lista de Locais Confiáveis do Word para que documentos desse domínio não abram em Modo de Exibição Protegido. Onde deve configurar isso?",
    "options": [
      "Arquivo → Opções → Central de Confiabilidade → Configurações da Central de Confiabilidade → Locais Confiáveis → Adicionar novo local",
      "Arquivo → Opções → Segurança → Domínios Confiáveis → Adicionar",
      "Desenvolvedor → Central de Confiabilidade → Domínios Permitidos",
      "Revisão → Proteger → Locais Confiáveis → Adicionar Domínio"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Gerenciar Documento",
    "explanation": {
      "intro": "Questão técnica do MO-101.",
      "papoReto": "A resposta correta é 'Arquivo → Opções → Central de Confiabilidade → Configurações da Central de Confiabilidade → Locais Confiáveis → Adicionar novo local'. ",
      "respostaCerta": "Arquivo → Opções → Central de Confiabilidade → Configurações da Central de Confiabilidade → Locais Confiáveis → Adicionar novo local ",
      "puloDoGato": "Atenção: alguns distratores usam caminhos ou termos plausíveis de Segurança.",
      "cascasDeBanana": [
        "Arquivo → Opções → Segurança → Domínios Confiáveis → Adicionar: Incorreto, pois alternativa inválida para o cenário.",
        "Revisão → Proteger → Locais Confiáveis → Adicionar Domínio: Incorreto, pois alternativa inválida para o cenário.",
        "Desenvolvedor → Central de Confiabilidade → Domínios Permitidos: Incorreto, pois alternativa inválida para o cenário."
      ],
      "dicaOuro": "Dica de prova: Ao lidar com Segurança, associe mentalmente a funcionalidade correta 'Arquivo → Opções → Central de Confiabilidade → Configurações da Central de Confiabilidade → Locais Confiáveis → Adicionar novo local'."
    }
  }
];

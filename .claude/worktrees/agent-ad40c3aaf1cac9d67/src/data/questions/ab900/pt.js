export const questions = [
  {
    "id": "ab900_q1",
    "text": "Qual afirmação descreve melhor o que é o Microsoft 365 em um contexto de administração?",
    "options": [
      "Um conjunto de serviços SaaS de produtividade, colaboração e segurança, como Exchange Online, SharePoint, Teams e mais",
      "Um sistema operacional de desktop instalado localmente",
      "Apenas uma suíte de ferramentas de BI",
      "Apenas um serviço de armazenamento de arquivos"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão aborda o conceito básico do Microsoft 365.",
      "papoReto": "O Microsoft 365 não é apenas um Office offline ou armazenamento. É um ecossistema completo de SaaS (Software as a Service) que reúne produtividade, colaboração em tempo real (Teams, SharePoint) e segurança de nível corporativo.",
      "respostaCerta": "Um conjunto de serviços SaaS de produtividade, colaboração e segurança, como Exchange Online, SharePoint, Teams e mais.",
      "puloDoGato": "Viu 'Microsoft 365 em contexto de administração' na prova? Lembre-se que ele é o exemplo clássico de SaaS (Software como Serviço) da Microsoft.",
      "cascasDeBanana": [
        "Um sistema operacional de desktop instalado localmente: O Windows 11/10 é o sistema operacional, enquanto o M365 é a suíte de serviços de nuvem.",
        "Apenas uma suíte de ferramentas de BI: O Power BI faz parte do ecossistema, mas o M365 é muito maior.",
        "Apenas um serviço de armazenamento de arquivos: O OneDrive e o SharePoint cuidam de arquivos, mas a suíte inclui e-mail, chat e segurança."
      ],
      "dicaOuro": "M365 = SaaS completo para produtividade e colaboração corporativa."
    }
  },
  {
    "id": "ab900_q2",
    "text": "Quais são alguns objetos centrais em um tenant do Microsoft 365 que um administrador precisa conhecer?",
    "options": [
      "Modems, impressoras, switches físicos",
      "Usuários, grupos, equipes, sites e bibliotecas",
      "Apenas estações de trabalho",
      "Apenas domínios locais sem nuvem"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão valida a compreensão dos objetos fundamentais de governança no tenant.",
      "papoReto": "Para administrar o M365, você gerencia identidades (Usuários), agrupamentos de controle (Grupos/Equipes) e repositórios de informação (Sites/Bibliotecas). Esses são os blocos básicos da administração.",
      "respostaCerta": "Usuários, grupos, equipes, sites e bibliotecas.",
      "puloDoGato": "Objetos de tenant M365 sempre representam pessoas (usuários), formas de cooperação (grupos/equipes) ou armazenamento (sites/bibliotecas).",
      "cascasDeBanana": [
        "Modems, impressoras, switches físicos: Dispositivos de infraestrutura física local não são objetos gerenciados nativamente no tenant M365 de nuvem.",
        "Apenas estações de trabalho: A administração inclui identidades e colaboração, não apenas o hardware dos computadores.",
        "Apenas domínios locais sem nuvem: A administração no M365 é focada na nuvem."
      ],
      "dicaOuro": "Objetos básicos do Tenant = Pessoas, Grupos de colaboração e Espaços de arquivos."
    }
  },
  {
    "id": "ab900_q3",
    "text": "Qual é o papel principal do Exchange Online dentro do Microsoft 365?",
    "options": [
      "Hospedar apenas sites de intranet",
      "Armazenar apenas arquivos de projeto",
      "Fornecer serviços de e‑mail, calendário e contatos hospedados na nuvem",
      "Gerenciar apenas identidades de rede local"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão aborda o propósito central do serviço de e-mail corporativo na nuvem.",
      "papoReto": "O Exchange Online é o cérebro das comunicações por e-mail e gerenciamento de agendas (calendários) no Microsoft 365. Ele substituiu os antigos servidores locais físicos do Exchange.",
      "respostaCerta": "Fornecer serviços de e‑mail, calendário e contatos hospedados na nuvem.",
      "puloDoGato": "Focou em e-mail, caixas de correio eletrônicas, calendários compartilhados ou contatos da empresa? A resposta é Exchange Online.",
      "cascasDeBanana": [
        "Hospedar apenas sites de intranet: Isso é tarefa do SharePoint.",
        "Armazenar apenas arquivos de projeto: Compartilhamento de arquivos em geral é do SharePoint/OneDrive.",
        "Gerenciar apenas identidades de rede local: O gerenciamento de identidades na nuvem é do Microsoft Entra ID."
      ],
      "dicaOuro": "Exchange Online = E-mail corporativo + Calendário + Contatos."
    }
  },
  {
    "id": "ab900_q4",
    "text": "Para que é mais comumente usado o SharePoint no Microsoft 365?",
    "options": [
      "Gerenciar apenas DNS público",
      "Criar VMs Azure",
      "Controlar roteadores físicos",
      "Criar sites, bibliotecas de documentos e repositórios de conteúdo colaborativo"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão foca na utilidade do SharePoint Online no ecossistema M365.",
      "papoReto": "O SharePoint Online é o motor de arquivos por trás de toda a colaboração corporativa. É lá que criamos intranets, sites de equipe e bibliotecas de documentos compartilhadas.",
      "respostaCerta": "Criar sites, bibliotecas de documentos e repositórios de conteúdo colaborativo.",
      "puloDoGato": "O Teams e o OneDrive salvam seus arquivos compartilhados no SharePoint. SharePoint = Intranet e Biblioteca de Documentos estruturada.",
      "cascasDeBanana": [
        "Gerenciar apenas DNS público: Realizado em registradores externos ou zonas DNS no Azure, não no SharePoint.",
        "Criar VMs Azure: Feito no portal do Azure (IaaS), não no SharePoint.",
        "Controlar roteadores físicos: O SharePoint é um serviço SaaS de arquivos, não de rede física."
      ],
      "dicaOuro": "SharePoint = Intranet, portais internos e armazenamento estruturado de arquivos de equipe."
    }
  },
  {
    "id": "ab900_q5",
    "text": "Qual descrição melhor representa o Microsoft Teams para fins de administração?",
    "options": [
      "Hub de colaboração para chat, reuniões, chamadas e trabalho em equipe integrado com outros serviços Microsoft 365",
      "Ferramenta apenas de e‑mail",
      "Apenas editor de documentos offline",
      "Apenas sistema de arquivos"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão aborda o Microsoft Teams e sua função central de integração.",
      "papoReto": "O Microsoft Teams atua como um hub central. Ele conecta chat, chamadas, reuniões de vídeo e integra arquivos do SharePoint/OneDrive e aplicativos em uma única interface.",
      "respostaCerta": "Hub de colaboração para chat, reuniões, chamadas e trabalho em equipe integrado com outros serviços Microsoft 365.",
      "puloDoGato": "Lembre-se da palavra-chave 'Hub de colaboração' (Collaboration hub). Essa é a definição oficial da Microsoft para o Teams.",
      "cascasDeBanana": [
        "Ferramenta apenas de e‑mail: E-mail é no Outlook/Exchange, não no Teams.",
        "Apenas editor de documentos offline: O Word e o Excel lidam com isso; o Teams é online e focado em comunicação.",
        "Apenas sistema de arquivos: Embora use o SharePoint, o foco do Teams é a colaboração e comunicação em tempo real."
      ],
      "dicaOuro": "Teams = Hub de colaboração integrado com chamadas, chats e arquivos."
    }
  },
  {
    "id": "ab900_q6",
    "text": "Qual centro de administração é usado como ponto central para gerenciar assinaturas, usuários e configurações globais do Microsoft 365?",
    "options": [
      "Exchange admin center",
      "Microsoft 365 admin center",
      "Teams admin center",
      "Microsoft Entra admin center"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão aborda o ponto central de controle do tenant.",
      "papoReto": "O Centro de Administração do Microsoft 365 (admin.microsoft.com) é o painel de controle principal do administrador global. É lá que se compram licenças, gerenciam usuários e monitoram relatórios básicos.",
      "respostaCerta": "Microsoft 365 admin center.",
      "puloDoGato": "O painel principal que une faturamento, usuários e atalhos para os outros painéis é o Microsoft 365 admin center.",
      "cascasDeBanana": [
        "Exchange admin center: Focado apenas em caixas de e-mail e fluxos de correio.",
        "Teams admin center: Focado em chamadas, dispositivos de conferência e políticas de chat do Teams.",
        "Microsoft Entra admin center: Focado especificamente em identidades, segurança de logins e MFA."
      ],
      "dicaOuro": "Ponto de partida central de administração = Microsoft 365 admin center."
    }
  },
  {
    "id": "ab900_q7",
    "text": "Você precisa configurar políticas de reunião e voz para equipes de colaboração. Qual centro de administração deve usar?",
    "options": [
      "SharePoint admin center",
      "Purview portal",
      "Teams admin center",
      "Microsoft 365 Defender"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão aborda a delegação administrativa para o Teams.",
      "papoReto": "Para gerenciar configurações do Teams (como políticas de reuniões, permissões de chats e dispositivos de telefone), os administradores delegados usam o Teams admin center.",
      "respostaCerta": "Teams admin center.",
      "puloDoGato": "Qualquer configuração específica de comportamento de áudio, vídeo, voz ou reuniões no Teams é resolvida no Teams admin center.",
      "cascasDeBanana": [
        "SharePoint admin center: Controla permissões e compartilhamento de sites, não políticas de voz.",
        "Purview portal: Focado em conformidade, rótulos e DLP.",
        "Microsoft 365 Defender: Portal unificado focado em segurança contra ameaças e antivírus."
      ],
      "dicaOuro": "Políticas de reunião, voz e chamadas do Teams = Teams admin center."
    }
  },
  {
    "id": "ab900_q8",
    "text": "Por que é importante para o administrador compreender os tipos de licenças atribuídas aos usuários?",
    "options": [
      "Porque não impactam o acesso",
      "Porque apenas definem idioma",
      "Porque só afetam o hardware do dispositivo",
      "Porque as licenças definem quais serviços e recursos (incluindo Copilot) cada usuário pode acessar"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão aborda o modelo de licenciamento no Microsoft 365.",
      "papoReto": "No M365, o acesso a aplicativos e funcionalidades (como a inteligência artificial do Copilot, caixas de correio maiores ou segurança avançada) é determinado pela licença atribuída ao usuário.",
      "respostaCerta": "Porque as licenças definem quais serviços e recursos (incluindo Copilot) cada usuário pode acessar.",
      "puloDoGato": "Licença = Permissão de uso de software/SaaS. Sem a licença correta associada à conta, o usuário não consegue abrir o app correspondente.",
      "cascasDeBanana": [
        "Porque não impactam o acesso: O licenciamento é o principal fator de liberação de recursos.",
        "Porque apenas definem idioma: O idioma é configurável pelo próprio usuário ou por política, sem depender da licença.",
        "Porque só afetam o hardware do dispositivo: Licenças M365 são SaaS de nuvem, não hardware de PCs."
      ],
      "dicaOuro": "Licenciamento M365 = Controle de direitos de uso e acesso aos recursos SaaS."
    }
  },
  {
    "id": "ab900_q9",
    "text": "Qual serviço do Microsoft 365 é responsável por identidade, autenticação e single sign‑on (SSO) na nuvem?",
    "options": [
      "Microsoft Entra ID (antigo Azure AD)",
      "Exchange Online",
      "SharePoint Online",
      "Microsoft Defender XDR"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão aborda a segurança e gerenciamento de identidades na nuvem da Microsoft.",
      "papoReto": "O Microsoft Entra ID (antigo Azure Active Directory) é o coração da identidade do Microsoft 365. Ele cuida do login dos usuários, valida senhas, gerencia grupos de segurança e provê o Single Sign-On (SSO) para outras aplicações.",
      "respostaCerta": "Microsoft Entra ID (antigo Azure AD).",
      "puloDoGato": "Falou em 'identidade', 'autenticação', 'login', 'senha', 'SSO' ou 'MFA'? O provedor de identidade do Microsoft 365 é sempre o Microsoft Entra ID.",
      "cascasDeBanana": [
        "Exchange Online: Cuida de e-mails, não de identidades gerais.",
        "SharePoint Online: Armazena arquivos, embora consulte o Entra ID para saber as permissões.",
        "Microsoft Defender XDR: Ferramenta de segurança de endpoint e detecção de ataques, não o diretório de identidade base."
      ],
      "dicaOuro": "Identidade e logins na nuvem Microsoft = Microsoft Entra ID."
    }
  },
  {
    "id": "ab900_q10",
    "text": "Ativar autenticação multifator (MFA) para administradores do tenant ajuda principalmente a quê?",
    "options": [
      "Acelerar logon sem senha",
      "Reduzir o risco de comprometer contas privilegiadas exigindo mais de um fator de autenticação",
      "Desabilitar proteção contra ataques",
      "Reduzir necessidade de logs"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão foca na autenticação multifator (MFA) como barreira de segurança.",
      "papoReto": "Contas com privilégios administrativos (como Global Admin) são alvos prioritários de hackers. O MFA adiciona uma camada de segurança física (como um código no celular) além da senha básica, bloqueando ataques de força bruta.",
      "respostaCerta": "Reduzir o risco de comprometer contas privilegiadas exigindo mais de um fator de autenticação.",
      "puloDoGato": "MFA protege contra credenciais vazadas ou adivinhadas, pois exige algo que você sabe (senha) e algo que você possui (dispositivo móvel).",
      "cascasDeBanana": [
        "Acelerar logon sem senha: Embora ajude no passwordless, o MFA por si só serve para aumentar a segurança, não para acelerar a digitação.",
        "Desabilitar proteção contra ataques: O MFA ativa proteção, nunca desabilita.",
        "Reduzir necessidade de logs: Logs continuam sendo gerados e monitorados normalmente."
      ],
      "dicaOuro": "MFA = Dupla verificação para segurança contra ataques de roubo de credenciais."
    }
  },
  {
    "id": "ab900_q11",
    "text": "Qual exemplo descreve o uso de política de Acesso Condicional em Microsoft Entra?",
    "options": [
      "Bloquear logon para todos os usuários",
      "Desativar MFA para administradores",
      "Exigir MFA apenas quando o usuário estiver fora da rede corporativa ou em dispositivo não gerenciado",
      "Permitir acesso irrestrito de qualquer lugar"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão aborda o Acesso Condicional do Entra ID.",
      "papoReto": "O Acesso Condicional funciona como regras inteligentes de 'se-então'. Por exemplo: Se o usuário estiver acessando de fora do escritório (contexto), Então exija que ele faça verificação via MFA (ação).",
      "respostaCerta": "Exigir MFA apenas quando o usuário estiver fora da rede corporativa ou em dispositivo não gerenciado.",
      "puloDoGato": "Acesso Condicional = Sinais (IP, dispositivo, localização) + Decisão (Permitir, Bloquear, Exigir MFA).",
      "cascasDeBanana": [
        "Bloquear logon para todos os usuários: Isso impediria o trabalho corporativo, não sendo uma política produtiva.",
        "Desativar MFA para administradores: Administradores sempre devem usar MFA por questões de compliance.",
        "Permitir acesso irrestrito de qualquer lugar: Contraria o princípio básico de segurança."
      ],
      "dicaOuro": "Acesso Condicional = Políticas baseadas em contexto (localização, dispositivo, risco) para liberar ou auditar o login."
    }
  },
  {
    "id": "ab900_q12",
    "text": "Por que é importante atribuir funções administrativas granulares em Microsoft Entra em vez de tornar todos Global Admin?",
    "options": [
      "Para complicar a administração sem motivo",
      "Para impedir monitoramento",
      "Para eliminar necessidade de logs",
      "Para seguir o princípio de privilégio mínimo, limitando o escopo de impacto de cada conta"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão aborda as boas práticas de privilégio mínimo em identidades.",
      "papoReto": "Se todas as contas administrativas forem 'Global Admin', um único vazamento pode destruir o tenant inteiro. Usar funções específicas (como Exchange Admin ou User Admin) limita o estrago em caso de ataque.",
      "respostaCerta": "Para seguir o princípio de privilégio mínimo, limitando o escopo de impacto de cada conta.",
      "puloDoGato": "Sempre que a Microsoft falar sobre gerenciar acessos de TI de forma segura, o conceito-chave é o Princípio do Menor Privilégio (Least Privilege).",
      "cascasDeBanana": [
        "Para complicar a administração sem motivo: A granularidade visa segurança, não burocracia voluntária.",
        "Para impedir monitoramento: A divisão de funções na verdade facilita a auditoria de quem fez o que.",
        "Para eliminar necessidade de logs: Funções granulares exigem ainda mais monitoramento de logs."
      ],
      "dicaOuro": "Menor Privilégio = Dar o acesso exato que a pessoa precisa para trabalhar, e nada a mais."
    }
  },
  {
    "id": "ab900_q13",
    "text": "Qual benefício o single sign‑on (SSO) traz para os usuários do Microsoft 365?",
    "options": [
      "Permite acessar vários aplicativos autorizados após uma única autenticação, reduzindo prompts de senha",
      "Aumenta o número de logins necessários",
      "Desativa MFA",
      "Exige troca de senha a cada minuto"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão foca no Single Sign-On (SSO).",
      "papoReto": "O SSO permite que o usuário faça o login uma única vez (no Entra ID) e acesse automaticamente outros portais corporativos autorizados, sem precisar redigitar senhas toda vez.",
      "respostaCerta": "Permite acessar vários aplicativos autorizados após uma única autenticação, reduzindo prompts de senha.",
      "puloDoGato": "SSO = Login único. Aumenta a produtividade dos usuários e reduz os chamados de 'esqueci minha senha' no suporte de TI.",
      "cascasDeBanana": [
        "Aumenta o número de logins necessários: O SSO reduz a quantidade de logins.",
        "Desativa MFA: O SSO trabalha junto com o MFA no login inicial.",
        "Exige troca de senha a cada minuto: O SSO não gerencia políticas de expiração periódica rápida de senhas."
      ],
      "dicaOuro": "SSO = Faça login uma vez, acesse múltiplos sistemas sem prompts extras."
    }
  },
  {
    "id": "ab900_q14",
    "text": "Em alto nível, qual é o objetivo da proteção de dados no Microsoft 365?",
    "options": [
      "Apenas reduzir custo de armazenamento",
      "Preservar confidencialidade, integridade e disponibilidade das informações da organização",
      "Apenas bloquear acesso legítimo",
      "Apenas aumentar tamanho de logs"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda os princípios da segurança e governança de dados.",
      "papoReto": "A governança de dados no M365 visa garantir a tríade da segurança (CIA): Confidencialidade (só quem deve vê os dados), Integridade (os dados não são alterados indevidamente) e Disponibilidade (os dados estão acessíveis aos usuários autorizados).",
      "respostaCerta": "Preservar confidencialidade, integridade e disponibilidade das informações da organização.",
      "puloDoGato": "Governança de dados na nuvem Microsoft visa mitigar vazamentos e perdas acidentais de informações sensíveis.",
      "cascasDeBanana": [
        "Apenas reduzir custo de armazenamento: É uma consequência de políticas de exclusão, mas não o objetivo central de segurança.",
        "Apenas bloquear acesso legítimo: O objetivo é permitir o acesso legítimo e bloquear o ilegítimo.",
        "Apenas aumentar tamanho de logs: Logs são ferramentas de auditoria, não o objetivo final de proteção."
      ],
      "dicaOuro": "Proteção de dados = Garantir Confidencialidade, Integridade e Acesso às informações corporativas."
    }
  },
  {
    "id": "ab900_q15",
    "text": "Qual portal o administrador usa para configurar rótulos de confidencialidade, políticas de DLP e classificação de dados?",
    "options": [
      "Teams admin center",
      "Exchange admin center",
      "Microsoft Purview portal",
      "Entra admin center"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda o ecossistema Microsoft Purview.",
      "papoReto": "O Microsoft Purview é a suíte de soluções da Microsoft para governança, conformidade e proteção de informações. É lá que configuramos DLP, rótulos de confidencialidade e retenção.",
      "respostaCerta": "Microsoft Purview portal.",
      "puloDoGato": "Se a pergunta envolver 'rótulos de confidencialidade' (sensitivity labels), 'DLP' (data loss prevention) ou 'retenção de dados', o portal correto é o Purview.",
      "cascasDeBanana": [
        "Teams admin center: Gerencia chamadas e canais de chat do Teams.",
        "Exchange admin center: Administra caixas de e-mail e políticas de correio.",
        "Entra admin center: Focado em usuários, grupos e autenticação."
      ],
      "dicaOuro": "Informações confidenciais, DLP e Compliance = Microsoft Purview."
    }
  },
  {
    "id": "ab900_q16",
    "text": "Qual é a função principal dos rótulos de confidencialidade no Microsoft 365?",
    "options": [
      "Fazer backup físico de servidores",
      "Gerenciar identidades locais",
      "Criar grupos de Teams automaticamente",
      "Classificar e proteger conteúdo (por exemplo, criptografar, aplicar marcação e restringir acesso) com base em sensibilidade"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda os rótulos de confidencialidade do Purview.",
      "papoReto": "Os Rótulos de Confidencialidade (Sensitivity Labels) marcam documentos e e-mails (como 'Altamente Confidencial'). Eles podem aplicar criptografia, marcas d'água e restrições de exportação automaticamente.",
      "respostaCerta": "Classificar e proteger conteúdo (por exemplo, criptografar, aplicar marcação e restringir acesso) com base em sensibilidade.",
      "puloDoGato": "Rótulos de confidencialidade viajam junto com o arquivo. Se você enviar um Word rotulado por e-mail, a criptografia e restrições continuam ativas.",
      "cascasDeBanana": [
        "Fazer backup físico de servidores: O Purview lida com conformidade de dados lógicos, não com infraestrutura de backup físico.",
        "Gerenciar identidades locais: Responsabilidade do Active Directory local / Entra Connect.",
        "Criar grupos de Teams automaticamente: Feito por scripts ou regras de grupos dinâmicos no Entra ID."
      ],
      "dicaOuro": "Rótulos de Confidencialidade = Marcar, Criptografar e Proteger documentos onde quer que eles estejam."
    }
  },
  {
    "id": "ab900_q17",
    "text": "Qual cenário descreve o uso de uma política de prevenção contra perda de dados (DLP)?",
    "options": [
      "Bloquear ou alertar quando informações confidenciais, como números de cartão, saem da organização por e‑mail ou chat",
      "Aumentar o tamanho máximo de anexos",
      "Forçar temas escuros",
      "Alterar idioma do portal"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda a Prevenção contra Perda de Dados (DLP).",
      "papoReto": "A Prevenção contra Perda de Dados (DLP) monitora informações sensíveis (como cartões de crédito ou CPFs). Ela avisa ou impede que o usuário envie esses dados por e-mail ou chat para fora da empresa.",
      "respostaCerta": "Bloquear ou alertar quando informações confidenciais, como números de cartão, saem da organização por e‑mail ou chat.",
      "puloDoGato": "Palavra-chave para DLP na prova: 'evitar vazamento de informações confidenciais' (DLP = Data Loss Prevention).",
      "cascasDeBanana": [
        "Aumentar o tamanho máximo de anexos: Configuração técnica do Exchange Online, não tem relação com DLP.",
        "Forçar temas escuros: Preferência visual do usuário final.",
        "Alterar idioma do portal: Configuração de localidade."
      ],
      "dicaOuro": "DLP = Detectar e impedir o vazamento ou compartilhamento inadequado de dados confidenciais."
    }
  },
  {
    "id": "ab900_q18",
    "text": "Por que políticas de retenção são importantes em Microsoft 365?",
    "options": [
      "Apenas para liberar espaço de disco sem critério",
      "Para manter ou descartar conteúdo de acordo com requisitos legais, regulatórios e de negócios",
      "Para remover conteúdo ativo aleatoriamente",
      "Para desativar auditoria"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda as políticas de retenção do Microsoft Purview.",
      "papoReto": "Políticas de retenção garantem que documentos importantes (como contratos ou registros financeiros) não sejam deletados antes do tempo exigido por lei, ou que dados antigos inúteis sejam limpos automaticamente.",
      "respostaCerta": "Para manter ou descartar conteúdo de acordo com requisitos legais, regulatórios e de negócios.",
      "puloDoGato": "Diferença clássica: Retenção serve para fins de conformidade legal de longo prazo (ex: guardar notas por 5 anos). Backup serve para recuperação de desastres operacionais.",
      "cascasDeBanana": [
        "Apenas para liberar espaço de disco sem critério: A exclusão sob retenção segue regras rígidas, nunca é aleatória ou sem critério.",
        "Para remover conteúdo ativo aleatoriamente: O conteúdo é preservado ou removido com base em datas pré-definidas.",
        "Para desativar auditoria: Políticas de retenção não desativam auditorias, elas ajudam nelas."
      ],
      "dicaOuro": "Políticas de Retenção = Guardar o que é obrigatório e descartar o que não é mais necessário."
    }
  },
  {
    "id": "ab900_q19",
    "text": "Qual é o objetivo do eDiscovery no Microsoft 365?",
    "options": [
      "Criar backups diários de VMs",
      "Gerenciar senhas de usuários",
      "Localizar, preservar e exportar conteúdo relevante para investigações legais ou de compliance",
      "Configurar domínios DNS"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão foca na ferramenta de eDiscovery para investigações.",
      "papoReto": "O eDiscovery (descoberta eletrônica) é a ferramenta que a equipe de compliance usa para buscar em todo o tenant (e-mails do Exchange, arquivos do SharePoint, chats do Teams) evidências de um termo específico para auditorias ou disputas judiciais.",
      "respostaCerta": "Localizar, preservar e exportar conteúdo relevante para investigações legais ou de compliance.",
      "puloDoGato": "Viu 'investigação legal', 'litígio', 'busca de provas em e-mails e chats'? A resposta na prova da Microsoft é eDiscovery.",
      "cascasDeBanana": [
        "Criar backups diários de VMs: Função de IaaS do Azure Backup, não de compliance SaaS do M365.",
        "Gerenciar senhas de usuários: Tarefa executada no Entra ID.",
        "Configurar domínios DNS: Configurado no painel do M365 admin center para roteamento de domínios."
      ],
      "dicaOuro": "eDiscovery = Busca forense de termos corporativos para auditorias e investigações legais."
    }
  },
  {
    "id": "ab900_q20",
    "text": "Como o modelo Zero Trust se aplica a um ambiente Microsoft 365 com Copilot?",
    "options": [
      "Confiar automaticamente em qualquer dispositivo interno",
      "Desativar logs",
      "Permitir acesso irrestrito a todos",
      "Nenhuma solicitação é confiável por padrão; acesso a dados do Copilot é concedido com base em identidade, dispositivo e contexto"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda a aplicação do paradigma Zero Trust no Microsoft 365.",
      "papoReto": "No Zero Trust, a premissa é: 'nunca confie, sempre verifique'. Mesmo que o acesso venha de dentro da empresa, o sistema verifica a identidade do usuário, a saúde do dispositivo e o contexto de segurança antes de liberar o acesso aos dados do Copilot.",
      "respostaCerta": "Nenhuma solicitação é confiável por padrão; acesso a dados do Copilot é concedido com base em identidade, dispositivo e contexto.",
      "puloDoGato": "Zero Trust baseia-se em 3 pilares: (1) Verificar explicitamente, (2) Usar acesso com privilégios mínimos e (3) Assumir a violação (breach).",
      "cascasDeBanana": [
        "Confiar automaticamente em qualquer dispositivo interno: Contraria diretamente o princípio de 'nunca confie' do Zero Trust.",
        "Desativar logs: Zero Trust exige logs e auditoria constante de acessos.",
        "Permitir acesso irrestrito a todos: Viola as regras de controle de acesso granular."
      ],
      "dicaOuro": "Zero Trust = Nunca confiar em redes ou dispositivos por padrão, validando cada acesso explicitamente."
    }
  },
  {
    "id": "ab900_q21",
    "text": "Qual afirmação melhor descreve o Microsoft 365 Copilot?",
    "options": [
      "Um assistente de IA integrado a aplicativos Microsoft 365 que usa dados da organização respeitando permissões existentes",
      "Um novo tipo de licença de sistema operacional",
      "Um serviço de armazenamento independente",
      "Um antivírus baseado em nuvem"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão aborda o papel do Microsoft 365 Copilot.",
      "papoReto": "O M365 Copilot é a inteligência artificial generativa integrada aos aplicativos do dia a dia (Word, Outlook, Teams). O diferencial dele é que ele lê apenas os dados da organização aos quais o usuário logado já tem acesso formal.",
      "respostaCerta": "Um assistente de IA integrado a aplicativos Microsoft 365 que usa dados da organização respeitando permissões existentes.",
      "puloDoGato": "O Copilot respeita as permissões do SharePoint/Teams de forma rígida. Se o usuário comum não tem acesso à pasta financeira, o Copilot dele não consegue ler esses arquivos para responder.",
      "cascasDeBanana": [
        "Um novo tipo de licença de sistema operacional: O Copilot é um add-on de inteligência artificial de aplicativos, não de OS.",
        "Um serviço de armazenamento independente: O Copilot lê dados existentes, ele não é um novo disco virtual.",
        "Um antivírus baseado em nuvem: A ferramenta de antivírus é o Microsoft Defender."
      ],
      "dicaOuro": "Copilot M365 = Assistente de IA que trabalha de forma segura dentro do seu contexto de permissões."
    }
  },
  {
    "id": "ab900_q22",
    "text": "De onde o Copilot obtém contexto para responder aos usuários em um tenant bem configurado?",
    "options": [
      "De qualquer dado da organização, mesmo sem permissão",
      "De dados aos quais o usuário já tem permissão, como e‑mails, arquivos, chats e sites do Microsoft 365",
      "De dados de outras empresas",
      "De backups offline"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão aborda o contexto de dados do Copilot.",
      "papoReto": "O Copilot funciona utilizando o Microsoft Graph para varrer e processar apenas as informações que o usuário atual já tem permissão de leitura ativa no tenant.",
      "respostaCerta": "De dados aos quais o usuário já tem permissão, como e‑mails, arquivos, chats e sites do Microsoft 365.",
      "puloDoGato": "O Microsoft Graph garante o isolamento e governança de dados. O Copilot nunca cruza dados de tenants diferentes ou arquivos bloqueados para o usuário.",
      "cascasDeBanana": [
        "De qualquer dado da organização, mesmo sem permissão: Isso criaria vazamentos graves de dados (oversharing) e viola a segurança do M365.",
        "De dados de outras empresas: Os dados são estritamente isolados no tenant de cada cliente.",
        "De backups offline: O Copilot trabalha em tempo real com arquivos ativos da nuvem."
      ],
      "dicaOuro": "Copilot = Contexto de dados do próprio usuário obtidos via Microsoft Graph."
    }
  },
  {
    "id": "ab900_q23",
    "text": "Como um administrador normalmente habilita o Copilot para um conjunto de usuários piloto?",
    "options": [
      "Habilitando globalmente para todos sem controle",
      "Instalando um aplicativo local em cada máquina",
      "Atribuindo licenças de Copilot específicas a um grupo de usuários selecionado",
      "Mudando apenas o idioma do tenant"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão aborda a implantação e distribuição de licenças do Copilot.",
      "papoReto": "Para iniciar pilotos ou disponibilizar o Copilot, os administradores compram o add-on de licenciamento apropriado e o atribuem a usuários ou grupos específicos no portal de administração do M365.",
      "respostaCerta": "Atribuindo licenças de Copilot específicas a um grupo de usuários selecionado.",
      "puloDoGato": "O Copilot requer uma licença base ativa (como M365 E3/E5 ou Business Standard) mais a licença add-on específica do Copilot atribuída à conta.",
      "cascasDeBanana": [
        "Habilitando globalmente para todos sem controle: Sem licenças compradas e atribuídas individualmente, a ferramenta não funciona.",
        "Instalando um aplicativo local em cada máquina: O Copilot é um recurso de nuvem integrado nos apps padrão, não exige instalador de terceiros separado.",
        "Mudando apenas o idioma do tenant: O idioma não afeta o licenciamento do produto."
      ],
      "dicaOuro": "Habilitar Copilot = Licença M365 elegível + Licença Add-on do Copilot atribuída."
    }
  },
  {
    "id": "ab900_q24",
    "text": "Qual atividade faz parte das tarefas básicas de administração do Copilot e agentes?",
    "options": [
      "Criar scripts PowerShell avançados para todos usuários",
      "Configurar rotas de rede on‑premises",
      "Alterar firmware de dispositivos",
      "Configurar quem pode criar e publicar agentes, aprovar agentes e monitorar uso em relatórios"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão aborda a governança básica sobre a criação de IA e Agentes.",
      "papoReto": "Além de usar a IA, os administradores gerenciam quem pode estender o Copilot criando agentes customizados (usando o Copilot Studio) e monitoram o uso dessas ferramentas por meio do M365 admin center.",
      "respostaCerta": "Configurar quem pode criar e publicar agentes, aprovar agentes e monitorar uso em relatórios.",
      "puloDoGato": "O gerenciamento de agentes envolve controle de publicação, monitoramento de conectores de dados corporativos e relatórios de satisfação e uso.",
      "cascasDeBanana": [
        "Criar scripts PowerShell avançados para todos usuários: O PowerShell ajuda na automação geral, mas a administração básica foca em painéis e políticas.",
        "Configurar rotas de rede on‑premises: Conectividade local não faz parte do escopo de administração de agentes SaaS.",
        "Alterar firmware de dispositivos: Atualizações de BIOS/firmware são de responsabilidade do fabricante ou TI local."
      ],
      "dicaOuro": "Governança de agentes = Controlar quem cria, publicar com segurança e auditar logs de uso."
    }
  },
  {
    "id": "ab900_q25",
    "text": "Um agente é publicado como app no Microsoft Teams. O que o administrador precisa verificar antes de disponibilizá‑lo para todos?",
    "options": [
      "Se o app está permitido nas políticas de apps e se o agente cumpre políticas de segurança e privacidade",
      "Apenas se o ícone do app é atraente",
      "Apenas se o Teams está em tema escuro",
      "Apenas se o agente usa o mesmo idioma de todos"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão foca na publicação de agentes dentro do Teams.",
      "papoReto": "Agentes criados no Copilot Studio podem ser disponibilizados no catálogo corporativo do Teams. Cabe ao administrador aprovar o aplicativo e aplicar as políticas de permissão correspondentes para garantir que dados sensíveis não fiquem expostos.",
      "respostaCerta": "Se o app está permitido nas políticas de apps e se o agente cumpre políticas de segurança e privacidade.",
      "puloDoGato": "No Teams, as políticas de permissão de aplicativos (App Permission Policies) determinam quem pode ver ou instalar aplicativos de terceiros ou desenvolvidos internamente.",
      "cascasDeBanana": [
        "Apenas se o ícone do app é atraente: Um ícone bonito não garante conformidade de dados.",
        "Apenas se o Teams está em tema escuro: Configuração visual individual sem relação com segurança.",
        "Apenas se o agente usa o mesmo idioma de todos: O Teams suporta múltiplos idiomas nativamente."
      ],
      "dicaOuro": "Publicar agentes no Teams = Aprovar aplicativo nas políticas de apps corporativas do Teams Admin."
    }
  },
  {
    "id": "ab900_q26",
    "text": "Por que um administrador deve documentar claramente o que um agente corporativo pode e não pode fazer?",
    "options": [
      "Para confundir usuários",
      "Para alinhar expectativas, reduzir risco de uso indevido e facilitar suporte e governança",
      "Para esconder limitações",
      "Para evitar qualquer revisão"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão aborda o alinhamento de expectativas no uso de agentes de IA.",
      "papoReto": "Agentes baseados em modelos de linguagem podem produzir respostas incorretas ou incompletas (alucinações). Documentar as capacidades, limitações e escopos do agente ajuda a mitigar o uso indevido e melhora a adoção.",
      "respostaCerta": "Para alinhar expectativas, reduzir risco de uso indevido e facilitar suporte e governança.",
      "puloDoGato": "Transparência de uso de IA é um princípio de IA Responsável. O usuário deve saber onde a IA atua e quando chamar um atendente humano.",
      "cascasDeBanana": [
        "Para confundir usuários: Documentação deve clarear ideias, não confundir.",
        "Para esconder limitações: Limitações devem ser explícitas para evitar incidentes.",
        "Para evitar qualquer revisão: Agentes corporativos devem ser revisados constantemente."
      ],
      "dicaOuro": "IA Responsável = Deixar claro para o usuário o escopo de atuação e as limitações do agente de IA."
    }
  },
  {
    "id": "ab900_q27",
    "text": "Qual é um objetivo de revisar periodicamente relatórios de uso do Copilot e agentes?",
    "options": [
      "Desativar logs sem análise",
      "Penalizar usuários que usam a ferramenta",
      "Identificar padrões de adoção, possíveis abusos e oportunidades de treinamento adicional",
      "Reduzir licenças aleatoriamente"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão aborda o monitoramento e relatórios de IA.",
      "papoReto": "Ao revisar relatórios de uso do Copilot e agentes, o administrador identifica gargalos de adoção, detecta prompts suspeitos de vazamento ou uso indevido e ajusta licenças para economizar custos.",
      "respostaCerta": "Identificar padrões de adoção, possíveis abusos e oportunidades de treinamento adicional.",
      "puloDoGato": "Relatórios de uso (Usage reports) ajudam a TI a entender se o investimento financeiro alto nas licenças do Copilot está gerando retorno real e produtividade.",
      "cascasDeBanana": [
        "Desativar logs sem análise: A análise é necessária antes de qualquer ação drástica.",
        "Penalizar usuários que usam a ferramenta: A TI quer incentivar o uso correto, não punir adoção.",
        "Reduzir licenças aleatoriamente: Reduções devem ser baseadas em dados de inatividade, não aleatórias."
      ],
      "dicaOuro": "Auditar uso de IA = Avaliar adoção de usuários e garantir conformidade de prompts."
    }
  },
  {
    "id": "ab900_q28",
    "text": "Qual é o foco do portal Microsoft 365 Defender para administradores AB‑900?",
    "options": [
      "Gerenciar backups de arquivos",
      "Configurar apenas Teams",
      "Criar sites SharePoint",
      "Fornecer visão unificada de alertas de segurança, incidentes e postura de proteção em endpoints, identidades e e‑mail"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão aborda a segurança no ecossistema do Microsoft 365 Defender.",
      "papoReto": "O Microsoft 365 Defender (agora Microsoft Defender XDR) consolida sinais de e-mail (Defender for Office 365), identidades (Defender for Identity) e computadores (Defender for Endpoint) em um único painel integrado.",
      "respostaCerta": "Fornecer visão unificada de alertas de segurança, incidentes e postura de proteção em endpoints, identidades e e‑mail.",
      "puloDoGato": "XDR significa 'Extended Detection and Response'. O portal do Defender consolida vários produtos de segurança de forma centralizada.",
      "cascasDeBanana": [
        "Gerenciar backups de arquivos: O Defender cuida de segurança e antivírus, não de infraestrutura de backups.",
        "Configurar apenas Teams: O escopo do Defender é muito mais amplo do que apenas uma aplicação.",
        "Criar sites SharePoint: Feito no SharePoint admin center."
      ],
      "dicaOuro": "Microsoft 365 Defender = Central de alertas de segurança contra phishing, malware e ataques de identidade."
    }
  },
  {
    "id": "ab900_q29",
    "text": "Por que configurar alertas e relatórios em segurança e compliance é importante para o administrador?",
    "options": [
      "Para ser notificado de eventos críticos e acompanhar tendências de risco e conformidade",
      "Apenas para encher a caixa de entrada",
      "Para desativar investigação",
      "Para ocultar incidentes"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão aborda a importância de alertas operacionais de segurança.",
      "papoReto": "Sem alertas ativos, vazamentos ou logins suspeitos de locais remotos passariam despercebidos por semanas. Configurar alertas no Defender notifica a equipe de segurança em tempo real para conter ameaças rapidamente.",
      "respostaCerta": "Para ser notificado de eventos críticos e acompanhar tendências de risco e conformidade.",
      "puloDoGato": "Alertas de segurança podem acionar respostas automáticas, como suspender a conta do usuário temporariamente caso um login em dois países diferentes seja detectado em menos de 1 hora.",
      "cascasDeBanana": [
        "Apenas para encher a caixa de entrada: Alertas de spam ou e-mails em massa são ineficientes e devem ser evitados na TI.",
        "Para desativar investigação: Alertas acionam investigações, não as desativam.",
        "Para ocultar incidentes: O objetivo de alertas é expor incidentes para tratamento imediato."
      ],
      "dicaOuro": "Configurar alertas = Garantir reação rápida a incidentes de segurança cibernética."
    }
  },
  {
    "id": "ab900_q30",
    "text": "Além do Microsoft 365 admin center, qual outro portal é essencial para configurar identidades e acesso?",
    "options": [
      "Teams admin center apenas",
      "Microsoft Entra admin center",
      "SharePoint admin center apenas",
      "Windows Admin Center"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão foca na administração do Microsoft Entra.",
      "papoReto": "Embora o M365 admin center permita criar usuários básicos, a administração avançada de identidades, MFA, registro de aplicativos e Acesso Condicional é feita no Microsoft Entra admin center (entra.microsoft.com).",
      "respostaCerta": "Microsoft Entra admin center.",
      "puloDoGato": "A Microsoft renomeou a marca de segurança de identidade de Azure AD para Microsoft Entra ID. O portal correspondente é o Entra admin center.",
      "cascasDeBanana": [
        "Teams admin center apenas: Focado apenas em chamadas e chats.",
        "SharePoint admin center apenas: Focado em sites e arquivos.",
        "Windows Admin Center: Ferramenta local para administrar servidores Windows Server físicos ou virtuais."
      ],
      "dicaOuro": "Portal de identidades e acessos avançados = Microsoft Entra admin center."
    }
  },
  {
    "id": "ab900_q31",
    "text": "Por que usar funções integradas (built‑in roles) em vez de criar sempre contas com privilégios totais?",
    "options": [
      "Para simplificar concessão de acesso irrestrito",
      "Para evitar pensar em segurança",
      "Para atribuir apenas as permissões necessárias para cada função administrativa, reduzindo impacto de compromissos",
      "Para desativar auditoria"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão aborda a governança de acessos via RBAC.",
      "papoReto": "Atribuir funções nativas prontas (built-in roles) do M365/Entra (como 'User Administrator' ou 'Helpdesk Administrator') impede que você precise dar acesso de 'Global Admin' (proprietário total) para técnicos realizarem tarefas simples de reset de senha.",
      "respostaCerta": "Para atribuir apenas as permissões necessárias para cada função administrativa, reduzindo impacto de compromissos.",
      "puloDoGato": "RBAC = Role-Based Access Control (Controle de Acesso Baseado em Funções). Segue estritamente a filosofia do menor privilégio.",
      "cascasDeBanana": [
        "Para simplificar concessão de acesso irrestrito: O RBAC limita e restringe o acesso, não o torna irrestrito.",
        "Para evitar pensar em segurança: O RBAC exige planejamento de quem deve receber cada acesso.",
        "Para desativar auditoria: Auditorias são fundamentais ao conceder privilégios RBAC."
      ],
      "dicaOuro": "Built-in roles (Funções Integradas) = Perfis prontos de acesso limitado para tarefas específicas de TI."
    }
  },
  {
    "id": "ab900_q32",
    "text": "Qual recurso do Microsoft 365 registra eventos de atividades em vários serviços (como Teams, SharePoint, Exchange) para investigação posterior?",
    "options": [
      "Relatório de uso de licenças",
      "Histórico de versões de documento",
      "Lista de contatos do Exchange",
      "Log de auditoria unificada do Microsoft 365"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão aborda o log de auditoria unificada no M365.",
      "papoReto": "O Log de Auditoria Unificada (Unified Audit Log) consolida logs de atividades de diversos serviços do M365 em um repositório central pesquisável, permitindo descobrir quem compartilhou um arquivo ou removeu um usuário.",
      "respostaCerta": "Log de auditoria unificada do Microsoft 365.",
      "puloDoGato": "Se precisar auditar ações feitas por usuários e administradores em múltiplos serviços M365 de uma vez, a resposta é Log de Auditoria Unificada no portal do Purview/Compliance.",
      "cascasDeBanana": [
        "Relatório de uso de licenças: Mostra apenas quais licenças estão ativas, sem log de ações de usuários.",
        "Histórico de versões de documento: Mostra apenas edições em um arquivo Word/Excel específico.",
        "Lista de contatos do Exchange: Cadastro de e-mails de pessoas."
      ],
      "dicaOuro": "Auditar ações de administradores e usuários em todo o tenant = Log de Auditoria Unificada."
    }
  },
  {
    "id": "ab900_q33",
    "text": "Em alto nível, o que diferencia um plano Microsoft 365 Business de um plano Enterprise?",
    "options": [
      "Os planos Enterprise oferecem recursos adicionais de segurança, compliance e escalabilidade para grandes organizações",
      "Os planos Business são sempre mais caros",
      "Não há diferença",
      "Os planos Enterprise só funcionam on‑premises"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão aborda os planos do Microsoft 365.",
      "papoReto": "Os planos M365 são divididos principalmente em Business (pequenas e médias empresas, limite de até 300 usuários) e Enterprise (grandes organizações, usuários ilimitados, segurança e conformidade avançadas como E3 e E5).",
      "respostaCerta": "Os planos Enterprise oferecem recursos adicionais de segurança, compliance e escalabilidade para grandes organizações.",
      "puloDoGato": "Se uma empresa tem mais de 300 funcionários, ela é obrigada a usar planos Enterprise (como M365 E3/E5 ou F3), pois os planos Business possuem limite rígido de 300 licenças por tenant.",
      "cascasDeBanana": [
        "Os planos Business são sempre mais caros: Planos Enterprise são mais caros devido aos recursos avançados.",
        "Não há diferença: Existem grandes diferenças em segurança, limites e direitos de uso do Windows Enterprise.",
        "Os planos Enterprise só funcionam on‑premises: São planos de nuvem SaaS."
      ],
      "dicaOuro": "Planos Business = Limite de até 300 usuários. Planos Enterprise = Sem limite + Segurança avançada."
    }
  },
  {
    "id": "ab900_q34",
    "text": "Qual combinação mostra três aplicativos comuns incluídos em muitos planos do Microsoft 365?",
    "options": [
      "Visual Studio, Windows Server e System Center",
      "Outlook, Teams e SharePoint",
      "Azure DevOps, GitHub e Power BI",
      "SQL Server, Hyper‑V e Intune"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão foca nos aplicativos inclusos na assinatura M365.",
      "papoReto": "As assinaturas M365 padrão reúnem serviços colaborativos essenciais: Outlook para e-mails, Teams para chat e chamadas, e SharePoint para bibliotecas de arquivos compartilhados.",
      "respostaCerta": "Outlook, Teams e SharePoint.",
      "puloDoGato": "Estes são os três pilares de colaboração incluídos em praticamente todos os planos comerciais do Microsoft 365.",
      "cascasDeBanana": [
        "Visual Studio, Windows Server e System Center: Ferramentas de desenvolvimento e infraestrutura local de servidores.",
        "Azure DevOps, GitHub e Power BI: Ferramentas de desenvolvimento e analytics avançados (DevOps e BI).",
        "SQL Server, Hyper‑V e Intune: Servidor de banco de dados e virtualizadores locais."
      ],
      "dicaOuro": "Pilares de colaboração do M365 = Exchange (Outlook), Teams e SharePoint."
    }
  },
  {
    "id": "ab900_q35",
    "text": "Em um tenant Microsoft 365 típico, qual é o tipo mais comum de conta usada pelos colaboradores?",
    "options": [
      "Conta local em um servidor de arquivos",
      "Conta de convidado sempre anônima",
      "Conta de usuário de nuvem em Microsoft Entra ID",
      "Conta de administrador local em cada PC"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão aborda as identidades de nuvem.",
      "papoReto": "A conta usada por colaboradores em empresas que usam o Microsoft 365 é chamada de 'Cloud User Account', criada e armazenada no diretório do Microsoft Entra ID na nuvem.",
      "respostaCerta": "Conta de usuário de nuvem em Microsoft Entra ID.",
      "puloDoGato": "Mesmo se houver sincronização local (Active Directory local), na nuvem a conta se torna um objeto de identidade do Entra ID.",
      "cascasDeBanana": [
        "Conta local em um servidor de arquivos: Identidade isolada local que não acessa serviços de nuvem SaaS.",
        "Conta de convidado sempre anônima: Contas convidadas exigem identificação de e-mail e não são anônimas.",
        "Conta de administrador local em cada PC: Gerencia apenas o Windows local da máquina física."
      ],
      "dicaOuro": "Identidade corporativa M365 = Conta de usuário registrada no Entra ID."
    }
  },
  {
    "id": "ab900_q36",
    "text": "Para que servem as identidades de convidado (guest) no Microsoft 365?",
    "options": [
      "Dar acesso total a qualquer pessoa",
      "Criar contas anônimas sem autenticação",
      "Compartilhar senhas internas",
      "Permitir que usuários externos, como parceiros, acessem recursos específicos com controle de permissões"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão aborda o gerenciamento de acessos externos.",
      "papoReto": "Contas de Convidado (Guest Accounts) no Entra ID permitem que parceiros externos, fornecedores ou clientes entrem em canais do Teams ou leiam arquivos no SharePoint com credenciais controladas.",
      "respostaCerta": "Permitir que usuários externos, como parceiros, acessem recursos específicos com controle de permissões.",
      "puloDoGato": "A conta de convidado usa o recurso Entra B2B, permitindo que a pessoa use o e-mail dela de fora para logar com segurança nos recursos compartilhados da sua empresa.",
      "cascasDeBanana": [
        "Dar acesso total a qualquer pessoa: O acesso do convidado é restrito e deve ser autorizado explicitamente.",
        "Criar contas anônimas sem autenticação: O convidado é autenticado pelo seu próprio provedor de e-mail (ex: Gmail ou outra empresa).",
        "Compartilhar senhas internas: Prática insegura que o Entra ID combate."
      ],
      "dicaOuro": "Contas Guest (Convidado) = Acesso externo controlado para colaboração no Teams e SharePoint."
    }
  },
  {
    "id": "ab900_q37",
    "text": "Qual é um exemplo de dado que normalmente deve ser protegido por políticas de DLP no Microsoft 365?",
    "options": [
      "Números de cartão de crédito ou dados de identificação pessoal",
      "Temas de e‑mail",
      "Cores de fonte",
      "Páginas de ajuda públicas"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda a identificação de dados confidenciais.",
      "papoReto": "Políticas de DLP buscam tipos de informações confidenciais (Sensitive Information Types), como números de cartões de crédito ou CPF, para aplicar ações automáticas de bloqueio e evitar violações da LGPD/GDPR.",
      "respostaCerta": "Números de cartão de crédito ou dados de identificação pessoal.",
      "puloDoGato": "Informações confidenciais padrão (PII - Personally Identifiable Information) e dados de pagamento são os alvos primários de DLP.",
      "cascasDeBanana": [
        "Temas de e‑mail: Texto descritivo de e-mail, sem dados sensíveis estruturados.",
        "Cores de fonte: Formatação visual de texto.",
        "Páginas de ajuda públicas: Conteúdo de utilidade pública livre de restrições de sigilo."
      ],
      "dicaOuro": "DLP = Focado em proteger cartões de crédito, CPFs e dados de identificação pessoal (PII)."
    }
  },
  {
    "id": "ab900_q38",
    "text": "Qual a diferença entre a lixeira de um site SharePoint e uma política de retenção aplicada a esse conteúdo?",
    "options": [
      "São exatamente a mesma coisa",
      "A lixeira é voltada a recuperação a curto prazo; a retenção controla quanto tempo o conteúdo deve ser mantido,",
      "Ambas removem dados permanentemente",
      "A retenção só muda o idioma"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda o ciclo de vida de arquivos deletados.",
      "papoReto": "A lixeira do SharePoint ajuda o usuário a recuperar um arquivo deletado sem precisar acionar a TI (recuperação de curto prazo). A retenção é uma política de compliance para manter os arquivos seguros por anos caso haja auditorias, mesmo se deletados da lixeira.",
      "respostaCerta": "A lixeira é voltada a recuperação a curto prazo; a retenção controla quanto tempo o conteúdo deve ser mantido.",
      "puloDoGato": "Se um usuário deletar um arquivo e limpar a lixeira, a TI não consegue restaurar facilmente via lixeira. Mas se houver uma política de retenção ativa, o arquivo estará salvo na pasta oculta 'Preservation Hold Library'.",
      "cascasDeBanana": [
        "São exatamente a mesma coisa: Lixeira é local e para usuários; Retenção é corporativa e de compliance.",
        "Ambas removem dados permanentemente: A retenção preserva dados, a lixeira pode expirar e apagar após 93 dias no SharePoint.",
        "A retenção só muda o idioma: Configuração puramente de segurança, sem relação com tradução."
      ],
      "dicaOuro": "Lixeira = Acidentes diários dos usuários. Retenção = Compliance e obrigações jurídicas de longo prazo."
    }
  },
  {
    "id": "ab900_q39",
    "text": "Onde o administrador pode verificar se há incidentes ou interrupções em serviços Microsoft 365?",
    "options": [
      "No Windows Update",
      "Apenas em comunicados por e‑mail",
      "No painel de integridade do serviço (Service Health) no Microsoft 365 admin center",
      "No painel de controle do Windows"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão aborda a monitoração de integridade de serviços M365.",
      "papoReto": "Se os usuários reclamarem que o Teams caiu, o administrador deve ir no painel Service Health (Integridade do Serviço) no M365 admin center para verificar se a Microsoft já reportou um incidente global de infraestrutura na nuvem.",
      "respostaCerta": "No painel de integridade do serviço (Service Health) no Microsoft 365 admin center.",
      "puloDoGato": "Service Health mostra o status de saúde real de cada serviço (Exchange, Teams, SharePoint, OneDrive) com base nos recursos que o seu tenant consome.",
      "cascasDeBanana": [
        "No Windows Update: Cuida apenas de atualizações locais de patches do sistema operacional Windows.",
        "Apenas em comunicados por e‑mail: Comunicados por e-mail demoram a chegar; o painel é atualizado quase em tempo real.",
        "No painel de controle do Windows: Utilitário local de sistema do computador do usuário."
      ],
      "dicaOuro": "Saber se o Microsoft 365 caiu globalmente = Service Health no Admin Center."
    }
  },
  {
    "id": "ab900_q40",
    "text": "Para que servem os relatórios de uso (usage reports) no Microsoft 365 admin center?",
    "options": [
      "Para alterar licenças automaticamente",
      "Para configurar políticas de senha",
      "Para desligar servidores locais",
      "Para acompanhar adoção de serviços, como uso de e‑mail, Teams e armazenamento"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão foca em relatórios de adoção no portal do administrador.",
      "papoReto": "Relatórios de Uso (Usage Reports) no admin center geram gráficos que mostram quantos usuários estão enviando e-mails ativos, quantas chamadas são feitas no Teams e quanto espaço do OneDrive está livre, ajudando na governança de adoção e custos.",
      "respostaCerta": "Para acompanhar adoção de serviços, como uso de e‑mail, Teams e armazenamento.",
      "puloDoGato": "Usage Reports respondem à pergunta: 'Nossos funcionários estão realmente usando o Teams e o SharePoint que estamos pagando nas licenças?'.",
      "cascasDeBanana": [
        "Para alterar licenças automaticamente: A remoção ou compra de licenças é um processo manual ou via regras de grupo, não automático por uso.",
        "Para configurar políticas de senha: Feito no menu de configurações de segurança ou no Entra ID.",
        "Para desligar servidores locais: Relatórios do M365 medem serviços de nuvem SaaS, sem contato com servidores físicos locais."
      ],
      "dicaOuro": "Relatórios de Uso = Medir a adoção e o engajamento dos colaboradores com a suíte M365."
    }
  },
  {
    "id": "ab900_q41",
    "text": "Um administrador global quer delegar gerenciamento diário de e‑mail sem dar acesso total ao tenant. O que deve fazer?",
    "options": [
      "Atribuir uma função administrativa específica, como Exchange admin, a um outro usuário",
      "Tornar todos os usuários Global Admin",
      "Compartilhar a conta de administrador",
      "Desativar MFA"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão aborda a delegação administrativa granular.",
      "papoReto": "Atribuir a função de Exchange Administrator delega permissões exclusivas para gerenciar caixas de correio e e-mails, sem conceder acesso a outros painéis como SharePoint ou Entra ID.",
      "respostaCerta": "Atribuir uma função administrativa específica, como Exchange admin, a um outro usuário.",
      "puloDoGato": "Nunca dê Global Admin se uma função especializada (como Teams Admin, SharePoint Admin ou Exchange Admin) resolve o problema. Esse é o pilar de menor privilégio na prática.",
      "cascasDeBanana": [
        "Tornar todos os usuários Global Admin: Viola gravemente a segurança corporativa.",
        "Compartilhar a conta de administrador: Compartilhar credenciais impede a auditoria e rastreabilidade de ações e é uma falha de conformidade.",
        "Desativar MFA: Aumentaria o risco de invasão do tenant."
      ],
      "dicaOuro": "Delegação segura = Funções administrativas nativas específicas (Exchange Admin, SharePoint Admin)."
    }
  },
  {
    "id": "ab900_q42",
    "text": "Habilitar o autosserviço de grupos Microsoft 365 permite que os usuários façam o quê?",
    "options": [
      "Alterem qualquer configuração do tenant",
      "Criem grupos e equipes sem envolver diretamente o administrador, de acordo com políticas definidas",
      "Desativem políticas de segurança",
      "Apaguem outros usuários"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão foca na criação autônoma de grupos.",
      "papoReto": "Habilitar o autosserviço (Self‑service) de grupos M365 permite que os usuários criem grupos e equipes do Teams diretamente pelos aplicativos, sem precisar abrir chamados na TI.",
      "respostaCerta": "Criem grupos e equipes sem envolver diretamente o administrador, de acordo com políticas definidas.",
      "puloDoGato": "Embora o autosserviço facilite a produtividade, a TI pode limitar a criação automatizada usando políticas para evitar proliferação de grupos abandonados ou duplicados (sprawl de grupos).",
      "cascasDeBanana": [
        "Alterem qualquer configuração do tenant: Configurações de tenant exigem privilégios elevados de administrador global.",
        "Desativem políticas de segurança: Políticas de segurança são imutáveis por usuários comuns.",
        "Apaguem outros usuários: Exclusão de usuários é privilégio de administradores de identidade."
      ],
      "dicaOuro": "Autosserviço de grupos = Usuários criam equipes e grupos sozinhos, de acordo com as regras de governança de TI."
    }
  },
  {
    "id": "ab900_q43",
    "text": "Qual é um exemplo de método de autenticação sem senha (passwordless) compatível com Microsoft Entra ID?",
    "options": [
      "Envio de senha em texto puro por e‑mail",
      "Uso de senhas compartilhadas entre usuários",
      "Autenticação com Microsoft Authenticator usando notificação de aprovação",
      "Login apenas com nome de usuário"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão aborda métodos de login sem senha (Passwordless).",
      "papoReto": "A autenticação passwordless substitui a senha tradicional por métodos mais seguros e práticos, como biometria (Windows Hello) ou aprovações por notificação push no celular (Microsoft Authenticator).",
      "respostaCerta": "Autenticação com Microsoft Authenticator usando notificação de aprovação.",
      "puloDoGato": "Métodos passwordless suportados pelo Entra ID: Microsoft Authenticator app, chaves de segurança FIDO2 e Windows Hello for Business.",
      "cascasDeBanana": [
        "Envio de senha em texto puro por e‑mail: Prática de segurança extremamente perigosa.",
        "Uso de senhas compartilhadas entre usuários: Viola o princípio de não-repúdio e identificação individual de acessos.",
        "Login apenas com nome de usuário: Nome de usuário (e-mail) é público, exige um fator de validação de identidade associado."
      ],
      "dicaOuro": "Passwordless = Entrar no sistema sem digitar senhas, usando biometria ou aplicativos de aprovação confiáveis."
    }
  },
  {
    "id": "ab900_q44",
    "text": "Por que políticas de bloqueio de conta com base em tentativas de login inválidas são importantes?",
    "options": [
      "Para dificultar o uso legítimo",
      "Para desativar MFA",
      "Para impedir auditoria",
      "Para mitigar ataques de força bruta e proteger contas contra adivinhação de senha"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão aborda a proteção de contas contra tentativas de invasão.",
      "papoReto": "Políticas de bloqueio inteligente (Smart Lockout) no Entra ID bloqueiam temporariamente a conta de um usuário após tentativas consecutivas de senha errada, bloqueando scripts hackers de força bruta sem incomodar o funcionário legítimo.",
      "respostaCerta": "Para mitigar ataques de força bruta e proteger contas contra adivinhação de senha.",
      "puloDoGato": "O Smart Lockout do Entra ID diferencia tentativas de login vindas de IPs de hackers de tentativas de login do próprio dono da conta no escritório local.",
      "cascasDeBanana": [
        "Para dificultar o uso legítimo: As políticas visam proteger, não dificultar o trabalho dos funcionários.",
        "Para desativar MFA: Políticas de bloqueio trabalham em conjunto com MFA, nunca o substituem.",
        "Para impedir auditoria: Tentativas bloqueadas geram logs detalhados para auditoria."
      ],
      "dicaOuro": "Smart Lockout = Bloquear tentativas repetitivas erradas para frustrar ataques de força bruta."
    }
  },
  {
    "id": "ab900_q45",
    "text": "Qual é a diferença entre aplicar rótulos de confidencialidade manualmente e automaticamente?",
    "options": [
      "Manual: o usuário escolhe o rótulo; Automático: políticas identificam padrões e aplicam rótulos conforme regras",
      "Manual sempre falha",
      "Automático sempre ignora dados",
      "Não há diferença prática"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda a aplicação de Rótulos de Confidencialidade.",
      "papoReto": "Rótulos manuais exigem que o usuário clique no botão e escolha a sensibilidade do arquivo. Rótulos automáticos utilizam políticas que varrem o arquivo à procura de dados sensíveis (ex: CPF) e aplicam a proteção sozinhos.",
      "respostaCerta": "Manual: o usuário escolhe o rótulo; Automático: políticas identificam padrões e aplicam rótulos conforme regras.",
      "puloDoGato": "O licenciamento mais básico exige rotulação manual. A rotulação automática em tempo real requer licenças mais avançadas (M365 E5 ou Purview Information Protection Premium).",
      "cascasDeBanana": [
        "Manual sempre falha: A rotulação manual funciona, mas depende do treinamento de conscientização das pessoas.",
        "Automático sempre ignora dados: O automático analisa as regras de texto com precisão.",
        "Não há diferença prática: As diferenças de governança e de esforço do usuário final são gigantes."
      ],
      "dicaOuro": "Rotulação Automática = O sistema detecta dados confidenciais e rotula/criptografa sem intervenção do usuário."
    }
  },
  {
    "id": "ab900_q46",
    "text": "Em quais locais uma política de DLP pode ser aplicada no Microsoft 365?",
    "options": [
      "Apenas em dispositivos móveis",
      "Exchange, SharePoint, OneDrive e Teams (mensagens e arquivos)",
      "Apenas em servidores locais",
      "Apenas em DNS"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda o alcance das políticas de DLP.",
      "papoReto": "Políticas de DLP no Purview podem ser implantadas em múltiplos pontos do M365 de forma unificada: impedindo e-mails no Exchange, arquivos no SharePoint/OneDrive e mensagens confidenciais no Teams.",
      "respostaCerta": "Exchange, SharePoint, OneDrive e Teams (mensagens e arquivos).",
      "puloDoGato": "Viu 'onde aplicar DLP' na prova? O DLP é integrado nativamente em toda a suíte colaborativa principal do Microsoft 365.",
      "cascasDeBanana": [
        "Apenas em dispositivos móveis: O DLP atua na nuvem SaaS, independente de onde o usuário acesse.",
        "Apenas em servidores locais: Funciona principalmente na nuvem, embora exista o DLP Endpoint para computadores.",
        "Apenas em DNS: DNS cuida de rotas e resoluções de nomes de domínio, sem acesso ao conteúdo dos arquivos."
      ],
      "dicaOuro": "Locais de DLP = Toda a suíte M365 (e-mails, arquivos na nuvem e chats)."
    }
  },
  {
    "id": "ab900_q47",
    "text": "Qual é um exemplo de alerta que um administrador pode ver no Microsoft 365 Defender?",
    "options": [
      "Notificação de alteração de tema do portal",
      "Aviso de troca de idioma",
      "Detecção de login suspeito de localização incomum ou sinal de malware em e‑mail",
      "Informação de atualização de ícone"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão aborda a monitoração de segurança do Defender.",
      "papoReto": "O Defender monitora o comportamento das contas. Se um usuário logar no Brasil e, 20 minutos depois, logar na Europa (impossibilidade de viagem), um alerta de 'Viagem Impossível' (Impossible Travel) é gerado no portal.",
      "respostaCerta": "Detecção de login suspeito de localização incomum ou sinal de malware em e‑mail.",
      "puloDoGato": "Alertas do Defender mostram riscos reais de comprometimento de contas e vírus/phishings enviados nas caixas de e-mail.",
      "cascasDeBanana": [
        "Notificação de alteração de tema do portal: Configuração de preferência cosmética do usuário.",
        "Aviso de troca de idioma: Alteração trivial de preferência local do usuário.",
        "Informação de atualização de ícone: Notificação visual que não representa ameaça de TI."
      ],
      "dicaOuro": "Alertas do Defender = Incidentes de segurança (login hacker, malware em anexo, phishing)."
    }
  },
  {
    "id": "ab900_q48",
    "text": "Para que serve o Message Center no Microsoft 365 admin center?",
    "options": [
      "Gerenciar backups de banco de dados",
      "Configurar redes locais",
      "Editar documentos de usuários",
      "Informar administradores sobre mudanças planejadas, novos recursos e anúncios importantes"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão aborda a comunicação de atualizações de TI da Microsoft.",
      "papoReto": "Como o Microsoft 365 é SaaS, novos recursos e telas mudam toda semana. O Message Center (Central de Mensagens) avisa com antecedência quais mudanças estão chegando para que os administradores preparem os usuários.",
      "respostaCerta": "Informar administradores sobre mudanças planejadas, novos recursos e anúncios importantes.",
      "puloDoGato": "Palavra-chave do Message Center: 'mudanças planejadas' (planned changes) e 'novos recursos' (new features) que chegam ao tenant.",
      "cascasDeBanana": [
        "Gerenciar backups de banco de dados: O Message Center é um painel informativo, não realiza tarefas técnicas operacionais de infraestrutura.",
        "Configurar redes locais: O M365 lida com nuvem, redes locais são tratadas no roteador físico da empresa.",
        "Editar documentos de usuários: Executado pelos próprios donos dos arquivos."
      ],
      "dicaOuro": "Message Center = Painel de anúncios de atualizações e mudanças nos aplicativos Microsoft 365."
    }
  },
  {
    "id": "ab900_q49",
    "text": "Se um usuário não tem acesso a uma biblioteca do SharePoint, o Copilot pode usar documentos dessa biblioteca na resposta para esse usuário?",
    "options": [
      "Não, o Copilot respeita as permissões existentes e não expõe conteúdo ao qual o usuário não tem acesso",
      "Sim, o Copilot pode trazer qualquer conteúdo do tenant",
      "Sim, desde que o documento seja antigo",
      "Sim, se o usuário pedir"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão foca na segurança de dados lidos pelo Copilot.",
      "papoReto": "O Copilot não desrespeita permissões. Se o usuário comum não tem acesso à biblioteca financeira, a IA não lerá os arquivos dali para criar respostas, evitando vazamento interno de informações.",
      "respostaCerta": "Não, o Copilot respeita as permissões existentes e não expõe conteúdo ao qual o usuário não tem acesso.",
      "puloDoGato": "O Copilot respeita rigorosamente o RBAC do SharePoint e Teams. Não existe 'elevação de privilégio' automática para a IA ler arquivos bloqueados.",
      "cascasDeBanana": [
        "Sim, o Copilot pode trazer qualquer conteúdo do tenant: Isso violaria gravemente a conformidade de dados da empresa.",
        "Sim, desde que o documento seja antigo: O tempo de existência do arquivo não altera as regras de segurança dele.",
        "Sim, se o usuário pedir: Desejos do usuário não alteram políticas de segurança de arquivos."
      ],
      "dicaOuro": "Segurança no Copilot = Ele lê apenas o que o usuário logado tem permissão para abrir manualmente."
    }
  },
  {
    "id": "ab900_q50",
    "text": "Por que políticas de aplicativos em Teams são relevantes para agentes baseados em Copilot?",
    "options": [
      "Porque definem apenas o tema visual",
      "Porque controlam quais apps (incluindo agentes) podem ser instalados, fixados ou bloqueados para diferentes usuários",
      "Porque mudam o idioma",
      "Porque controlam apenas notificações sonoras"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão aborda o gerenciamento de permissões de aplicativos no Teams.",
      "papoReto": "Agentes criados para o Teams funcionam como aplicativos. O administrador usa as políticas de permissão de apps no Teams admin center para controlar quais usuários ou departamentos podem instalar esses agentes.",
      "respostaCerta": "Porque controlam quais apps (incluindo agentes) podem ser instalados, fixados ou bloqueados para diferentes usuários.",
      "puloDoGato": "No Teams, 'App permission policies' liberam ou bloqueiam aplicativos da Microsoft, de terceiros ou desenvolvidos internamente (custom apps).",
      "cascasDeBanana": [
        "Porque definem apenas o tema visual: O tema é cosmético e definido pelo usuário nas opções básicas do Teams.",
        "Porque mudam o idioma: O idioma é alterado no menu de perfil, sem ligação com políticas de apps.",
        "Porque controlam apenas notificações sonoras: Configurações de som e alertas são geridas localmente."
      ],
      "dicaOuro": "Políticas de Apps no Teams = Gerenciar quem pode instalar ou ver agentes e robôs de chat."
    }
  },
  {
    "id": "ab900_q51",
    "text": "Em um cenário com vários agentes corporativos, que tipo de métrica é útil monitorar?",
    "options": [
      "Velocidade do cooler da CPU",
      "Número de impressoras instaladas",
      "Quantidade de interações, taxa de sucesso nas tarefas e tipos de erro encontrados",
      "Tamanho de anexos em e‑mail"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão aborda o monitoramento de bots e agentes de IA.",
      "papoReto": "Para justificar o uso e otimizar agentes, os administradores auditam relatórios de uso que mostram a quantidade de sessões (chats iniciados), taxas de resolução de problemas e mensagens de erros dos conectores.",
      "respostaCerta": "Quantidade de interações, taxa de sucesso nas tarefas e tipos de erro encontrados.",
      "puloDoGato": "Métricas de engajamento e qualidade (como CSAT dos chats) ajudam a TI a aprimorar as bases de conhecimento dos agentes.",
      "cascasDeBanana": [
        "Velocidade do cooler da CPU: Monitoramento de hardware físico feito em infraestruturas locais ou IaaS, não em agentes SaaS.",
        "Número de impressoras instaladas: Configuração local de hardware e rede de impressão de escritório físico.",
        "Tamanho de anexos em e‑mail: Regra técnica do Exchange Online de limites de correio."
      ],
      "dicaOuro": "Auditar agentes de IA = Monitorar sessões ativas, taxas de sucesso e erros operacionais."
    }
  },
  {
    "text": "Sua empresa tem 250 funcionários e precisa de uma solução Microsoft 365 que inclua ferramentas de produtividade, gerenciamento de dispositivos móveis (MDM) e segurança avançada contra ameaças cibernéticas. Qual plano atende melhor a essas necessidades com o menor custo?",
    "options": [
      "Microsoft 365 Business Basic",
      "Microsoft 365 F3",
      "Office 365 E3",
      "Microsoft 365 Business Premium"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão aborda a seleção do plano ideal baseado no tamanho da empresa e recursos de segurança.",
      "papoReto": "O Microsoft 365 Business Premium é voltado para pequenas e médias empresas (até 300 usuários) e inclui segurança robusta (Defender for Business e Intune para MDM). Ele é muito mais barato que os planos Enterprise E3/E5 e atende perfeitamente ao cenário de 250 usuários.",
      "respostaCerta": "Microsoft 365 Business Premium",
      "puloDoGato": "Viu 'até 300 usuários', 'segurança avançada' e 'Intune/gerenciamento de dispositivos' no mesmo cenário? A resposta ideal na prova da Microsoft é o Business Premium.",
      "cascasDeBanana": [
        "Microsoft 365 Business Basic: Não inclui aplicativos desktop instalados nem recursos avançados de segurança e MDM.",
        "Microsoft 365 F3: Voltado para trabalhadores de linha de frente (firstline workers), com limitações de tamanho de caixa de e-mail e sem apps de desktop completos.",
        "Office 365 E3: Mais caro e focado em grandes corporações sem limite de usuários, excedendo a necessidade de custo-benefício de 250 usuários."
      ],
      "dicaOuro": "Até 300 usuários + Segurança Avançada + MDM = Business Premium."
    },
    "id": "ab900_q52"
  },
  {
    "text": "Um administrador precisa planejar a aquisição de licenças para uma multinacional que possui 450 colaboradores. Por que o administrador NÃO deve contratar o plano Microsoft 365 Business Standard?",
    "options": [
      "Os planos da família Business têm um limite máximo de 300 licenças por tenant.",
      "O plano Business Standard não permite o uso de domínios personalizados.",
      "O plano Business Standard não inclui acesso ao Exchange Online.",
      "O plano Business Standard é restrito a conexões locais de rede física."
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão testa o conhecimento sobre os limites de licenciamento das famílias de planos.",
      "papoReto": "Toda a família de planos Microsoft 365 Business (Basic, Standard e Premium) tem um limite máximo rígido de 300 licenças por usuário por assinatura no mesmo tenant. Para empresas com mais de 300 funcionários, deve-se contratar planos da linha Enterprise (E3, E5, F3).",
      "respostaCerta": "Os planos da família Business têm um limite máximo de 300 licenças por tenant.",
      "puloDoGato": "O número '300' é mágico na prova de licenciamento do M365. Passou de 300 usuários, a resposta obrigatoriamente envolve planos Enterprise.",
      "cascasDeBanana": [
        "O plano Business Standard não permite o uso de domínios personalizados: Permite perfeitamente cadastrar o domínio da empresa (ex: @suaempresa.com).",
        "O plano Business Standard não inclui acesso ao Exchange Online: Inclui caixa de correio eletrônico de 50GB por usuário.",
        "O plano Business Standard é restrito a conexões locais de rede física: É um serviço 100% em nuvem acessível via web."
      ],
      "dicaOuro": "Limite de planos Business = 300 usuários. Acima disso = Enterprise."
    },
    "id": "ab900_q53"
  },
  {
    "text": "Sua empresa deseja assinar um plano do Microsoft 365 voltado exclusivamente para trabalhadores de linha de frente (firstline workers) que utilizam principalmente dispositivos móveis e tablets para tarefas básicas. Qual o plano mais indicado?",
    "options": [
      "Microsoft 365 E5",
      "Microsoft 365 F3",
      "Microsoft 365 Business Standard",
      "Office 365 E1"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão avalia o conhecimento sobre a linha de planos voltados para trabalhadores operacionais.",
      "papoReto": "A família 'F' (F1, F3) da Microsoft é projetada para funcionários de linha de frente (firstline workers), como atendentes, operários de fábrica ou caixas. Eles não precisam de computadores robustos ou aplicativos de desktop pesados, e o plano F3 oferece acesso web/mobile leve por um custo muito menor.",
      "respostaCerta": "Microsoft 365 F3",
      "puloDoGato": "Apareceu 'firstline workers' ou 'trabalhadores de linha de frente' na prova? O plano correto sempre começará com a letra 'F'.",
      "cascasDeBanana": [
        "Microsoft 365 E5: O plano Enterprise mais caro e completo, overkill total para tarefas básicas de operários.",
        "Microsoft 365 Business Standard: Focado em usuários de escritório de pequenas empresas com uso de aplicativos desktop completos.",
        "Office 365 E1: Plano Enterprise de entrada para escritório, focado em web mas sem os benefícios de governança de segurança integrados da família F."
      ],
      "dicaOuro": "Trabalhador de linha de frente = Planos Microsoft 365 F."
    },
    "id": "ab900_q54"
  },
  {
    "text": "Qual plano do Microsoft 365 Enterprise inclui o nível mais alto de recursos de segurança integrados, como proteção avançada contra ameaças de identidade, conformidade automatizada e telefonia em nuvem nativa?",
    "options": [
      "Microsoft 365 E3",
      "Office 365 E3",
      "Microsoft 365 E5",
      "Microsoft 365 F1"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão aborda o topo da pirâmide de planos da Microsoft.",
      "papoReto": "O Microsoft 365 E5 é a assinatura Enterprise mais completa do mercado. Ela traz todos os recursos do E3 e adiciona segurança inteligente em tempo real (Defender for Identity, Purview avançado), ferramentas de voz e telefonia em nuvem (Teams Phone) e análise corporativa avançada (Power BI Pro).",
      "respostaCerta": "Microsoft 365 E5",
      "puloDoGato": "Pediu 'segurança máxima corporativa', 'telefonia em nuvem' (Voice/Phone System) ou 'Power BI Pro incluído' no pacote Enterprise? A resposta é E5.",
      "cascasDeBanana": [
        "Microsoft 365 E3: Possui segurança e compliance ótimos, mas não inclui telefonia avançada ou segurança de identidade automática nível 5 de série.",
        "Office 365 E3: Focado apenas em produtividade e colaboração, sem as ferramentas modernas de gerenciamento de dispositivos móveis (Intune) e segurança da linha M365.",
        "Microsoft 365 F1: Plano básico de linha de frente com armazenamento muito limitado e sem voz nativa."
      ],
      "dicaOuro": "Segurança Máxima + Telefonia/Voice + Analytics Pro = Plano E5."
    },
    "id": "ab900_q55"
  },
  {
    "text": "Um cliente deseja contratar serviços do Microsoft 365, mas prefere gerenciar e hospedar todos os seus dados e servidores localmente (on-premises) por motivos de compliance militar. Ele pode usar as licenças de nuvem puras como o Microsoft 365 E5 para esse fim?",
    "options": [
      "Sim, basta instalar o servidor do Microsoft 365 em um pendrive e configurar a rede local.",
      "Sim, todos os planos do M365 incluem direito a servidores locais ilimitados sem custos adicionais.",
      "Não, exceto se a empresa for do setor educacional ou filantrópico.",
      "Não, pois os planos do Microsoft 365 são essencialmente baseados em nuvem pública SaaS e hospedados nos datacenters da Microsoft."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão esclarece a natureza da nuvem pública SaaS do Microsoft 365.",
      "papoReto": "O M365 é um serviço essencialmente de nuvem pública do tipo Software as a Service (SaaS). Embora algumas licenças permitam o uso híbrido ou concedam direitos de uso de servidores locais (Exchange/SharePoint Server) via licenciamento dual, a suíte M365 é projetada e hospedada fisicamente nos datacenters mundiais da própria Microsoft.",
      "respostaCerta": "Não, pois os planos do Microsoft 365 são essencialmente baseados em nuvem pública SaaS e hospedados nos datacenters da Microsoft.",
      "puloDoGato": "Diferencie SaaS (M365 na nuvem) de On-premises (servidores físicos locais na empresa). A migração para o M365 significa mover os servidores locais para a nuvem da Microsoft.",
      "cascasDeBanana": [
        "Sim, basta instalar em um pendrive: Totalmente absurdo e tecnicamente inviável.",
        "Sim, todos incluem direitos de servidores locais ilimitados: Licenciamentos de servidores físicos locais (on-premises) exigem acordos comerciais e contratos de licença específicos.",
        "Não, exceto se for do setor educacional: A natureza SaaS do M365 afeta todos os setores comerciais igualmente."
      ],
      "dicaOuro": "M365 = SaaS na Nuvem Pública da Microsoft."
    },
    "id": "ab900_q56"
  },
  {
    "text": "Sua empresa deseja utilizar apenas a versão web simplificada do Word, Excel e PowerPoint, além do e-mail corporativo do Exchange Online e chat do Teams, sem a necessidade de instalar qualquer aplicativo de desktop nos computadores. Qual o plano de menor custo aplicável?",
    "options": [
      "Microsoft 365 Business Basic",
      "Microsoft 365 Business Standard",
      "Microsoft 365 Business Premium",
      "Office 365 E3"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão aborda a diferença de escopo entre o plano de entrada e o plano intermediário.",
      "papoReto": "O Microsoft 365 Business Basic é o plano de entrada mais barato para empresas com até 300 usuários. Ele inclui todos os serviços corporativos de nuvem (Exchange, Teams, SharePoint, OneDrive), mas os aplicativos do Office (Word, Excel, PPT) só podem ser executados pelo navegador web ou dispositivos móveis.",
      "respostaCerta": "Microsoft 365 Business Basic",
      "puloDoGato": "Palavra-chave: 'aplicativos apenas na web' ou 'sem aplicativos instalados no desktop'. A resposta é o Business Basic.",
      "cascasDeBanana": [
        "Microsoft 365 Business Standard: Inclui a instalação local dos aplicativos clássicos do Office no computador, custando mais caro.",
        "Microsoft 365 Business Premium: Plano avançado que inclui recursos de segurança corporativa complexos e MDM além dos aplicativos desktop.",
        "Office 365 E3: Plano Enterprise muito mais caro e com foco em grandes corporações sem limite de usuários."
      ],
      "dicaOuro": "Apps do Office apenas no Navegador + E-mail + Teams = Business Basic."
    },
    "id": "ab900_q57"
  },
  {
    "text": "Qual tipo de assinatura do Microsoft 365 é voltado especificamente para instituições de ensino e acadêmicas, oferecendo recursos de salas de aula digitais e preços subsidiados?",
    "options": [
      "Planos Microsoft 365 Government (família 'G')",
      "Planos Microsoft 365 Education (família 'A')",
      "Planos Microsoft 365 Business",
      "Planos Microsoft 365 Enterprise (família 'E')"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão foca na segmentação de planos por setor de atuação.",
      "papoReto": "A Microsoft possui famílias de planos dedicadas a setores específicos. A família 'A' (A1, A3, A5) refere-se a Academic/Education, oferecendo ferramentas específicas para professores e alunos (como Teams de Classe) por valores adaptados para o setor escolar.",
      "respostaCerta": "Planos Microsoft 365 Education (família 'A')",
      "puloDoGato": "Memorize a letra correspondente a cada setor de plano: 'E' para Enterprise (Corporativo), 'A' para Academic/Education (Ensino) e 'G' para Government (Governo).",
      "cascasDeBanana": [
        "Planos Government (família 'G'): Destinados a entidades governamentais dos EUA com datacenters isolados para compliance de segurança nacional.",
        "Planos Business: Focados no mercado comercial de pequenas e médias empresas.",
        "Planos Enterprise: Focados em grandes corporações comerciais."
      ],
      "dicaOuro": "Escolas e Universidades = Planos Academic/Education (Família A)."
    },
    "id": "ab900_q58"
  },
  {
    "text": "Sua empresa deseja licenciar o Microsoft 365 Copilot para um grupo de colaboradores. Qual requisito de licenciamento básico deve ser cumprido antes de adquirir o add-on do Copilot?",
    "options": [
      "Os usuários devem ter obrigatoriamente um plano do Azure DevOps ativo.",
      "O tenant da empresa deve estar configurado no plano militar Government.",
      "Os usuários devem ter uma licença elegível de plano Microsoft 365 ou Office 365 ativa no tenant.",
      "Os usuários devem possuir licenças do Power BI Premium individuais."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão testa o conhecimento sobre pré-requisitos de add-ons de IA.",
      "papoReto": "O Microsoft 365 Copilot é comercializado como um add-on. Isso significa que ele não funciona de forma isolada; você precisa que o usuário já possua uma licença básica elegível (como Business Standard/Premium ou Enterprise E3/E5) ativa para poder atribuir a licença do Copilot a ele.",
      "respostaCerta": "Os usuários devem ter uma licença elegível de plano Microsoft 365 ou Office 365 ativa no tenant.",
      "puloDoGato": "Copilot é um 'acessório' (add-on). Sem o 'plano de produtividade principal' ativo por baixo, você não consegue anexar a licença de IA para o colaborador.",
      "cascasDeBanana": [
        "Azure DevOps ativo: DevOps é focado em engenharia de software e não tem relação com o uso de produtividade de escritório do Copilot.",
        "Plano militar Government: O Copilot comercial é amplamente disponível e não restrito a governos.",
        "Power BI Premium individual: O Power BI é para análise de dados e não é pré-requisito para habilitar a IA do Copilot."
      ],
      "dicaOuro": "Copilot = Add-on. Exige plano de produtividade M365 ativo por baixo."
    },
    "id": "ab900_q59"
  },
  {
    "text": "Uma organização precisa implantar ferramentas de conformidade e segurança avançadas, mas deseja manter as caixas de correio e arquivos locais do usuário em servidores próprios on-premises. Qual recurso de licenciamento permite que ela combine seus servidores locais com os serviços de conformidade da nuvem?",
    "options": [
      "Contratar o plano do Windows Home local",
      "Utilizar apenas contas gratuitas do Outlook.com",
      "Licenciar todos os servidores físicos como SaaS purificados",
      "Uso de licenças com direitos de uso híbrido (Dual Use Rights)"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão aborda o modelo de licenciamento de uso híbrido ou dual.",
      "papoReto": "Muitas licenças do M365 (especialmente Enterprise) incluem os chamados 'Dual Use Rights' ou direitos de uso híbrido. Isso permite que a empresa compre a licença da nuvem, mas opte por rodar o software de servidor localmente em sua própria infraestrutura, facilitando a transição gradual ou compliance técnico de armazenamento local.",
      "respostaCerta": "Uso de licenças com direitos de uso híbrido (Dual Use Rights)",
      "puloDoGato": "Os direitos de uso duplo (Dual Use Rights) são fundamentais para empresas com infraestruturas híbridas complexas que querem centralizar as compras de licenças.",
      "cascasDeBanana": [
        "Windows Home local: O Windows Home é para uso doméstico básico, não possui recursos de servidor corporativo ou conformidade.",
        "Contas gratuitas do Outlook.com: Não são permitidas para uso corporativo oficial e não possuem ferramentas de conformidade.",
        "Licenciar servidores como SaaS purificados: Esse conceito de 'SaaS purificado' para hardware físico local não existe na nomenclatura de licenciamento Microsoft."
      ],
      "dicaOuro": "Licenciamento unificado nuvem + local = Dual Use Rights (Direitos de Uso Duplo)."
    },
    "id": "ab900_q60"
  },
  {
    "text": "Um administrador quer simular as diferenças financeiras estimadas entre manter o datacenter físico local da empresa por mais 3 anos ou migrar toda a operação de infraestrutura e correio eletrônico para o Microsoft 365. Qual ferramenta pública deve ser recomendada para esse cálculo financeiro?",
    "options": [
      "Calculadora de TCO (Total Cost of Ownership)",
      "Calculadora de Preços do Azure",
      "Message Center do M365",
      "Portal do Microsoft Purview"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão foca na análise de viabilidade financeira de migração (TCO).",
      "papoReto": "A Calculadora de TCO (Custo Total de Propriedade) estima os gastos ocultos de se manter servidores locais (energia física, ar condicionado, manutenção, pessoal de TI) e compara isso com o custo de assinatura do Microsoft 365 / Azure. Ela ajuda a comprovar a economia de se sair do CapEx para o OpEx.",
      "respostaCerta": "Calculadora de TCO (Total Cost of Ownership)",
      "puloDoGato": "Pediu 'comparação financeira entre on-premises (local) e nuvem'? O termo técnico é TCO (Custo Total de Propriedade).",
      "cascasDeBanana": [
        "Calculadora de Preços do Azure: Serve para estimar o custo mensal de recursos de nuvem que você pretende criar (ex: VMs no Azure), mas não realiza a simulação de comparação do TCO local.",
        "Message Center: Destinado a avisos técnicos de novos recursos no M365.",
        "Portal do Microsoft Purview: Focado em compliance e proteção de dados lógicos."
      ],
      "dicaOuro": "Comparar custo total de datacenter próprio vs Nuvem = Calculadora de TCO."
    },
    "id": "ab900_q61"
  },
  {
    "text": "Um departamento de RH precisa de uma caixa de correio compartilhada para que vários colaboradores possam ler e responder aos e-mails de candidatos recebidos em 'recrutamento@empresa.com'. O que é correto afirmar sobre a necessidade de licenças para essa caixa de correio compartilhada?",
    "options": [
      "Cada colaborador que lê os e-mails precisa pagar uma licença adicional chamada 'Exchange Share Pro'.",
      "Caixas de correio compartilhadas no Exchange Online são gratuitas e não exigem licença própria, contanto que não excedam o limite de 50 GB de armazenamento.",
      "A caixa de correio compartilhada exige obrigatoriamente a mesma licença Enterprise E5 de um usuário normal.",
      "A caixa compartilhada não pode ser acessada por mais de 2 pessoas simultaneamente por questões de conformidade."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão testa as regras de licenciamento de caixas de correio compartilhadas (Shared Mailboxes).",
      "papoReto": "No Exchange Online, caixas de correio compartilhadas (Shared Mailboxes) são projetadas para cooperação. Elas são 100% gratuitas e não requerem licença, desde que o tamanho da caixa não passe de 50GB. Se precisar de mais espaço, basta atribuir uma licença de Exchange Online à caixa compartilhada.",
      "respostaCerta": "Caixas de correio compartilhadas no Exchange Online são gratuitas e não exigem licença própria, contanto que não excedam o limite de 50 GB de armazenamento.",
      "puloDoGato": "Shared Mailbox é gratuita até 50 GB. Para os colaboradores acessarem, eles só precisam ter uma licença M365 individual ativa e permissão de acesso delegada.",
      "cascasDeBanana": [
        "Licença adicional Exchange Share Pro: Essa licença não existe.",
        "Exige licença Enterprise E5: Não exige licença de série, a menos que passe do limite de 50GB.",
        "Não pode ser acessada por mais de 2 pessoas: Dezenas de usuários podem acessar a mesma caixa compartilhada ao mesmo tempo via Outlook/Web."
      ],
      "dicaOuro": "Caixa Compartilhada = Sem senha direta, sem licença paga e gratuita até 50 GB."
    },
    "id": "ab900_q62"
  },
  {
    "text": "Sua empresa deseja configurar salas de reuniões no calendário corporativo do Outlook para que os colaboradores possam reservar a 'Sala de Conferência Principal' ao agendarem compromissos. Qual tipo de caixa de correio deve ser criada no Exchange Online?",
    "options": [
      "Caixa de correio compartilhada (Shared Mailbox)",
      "Caixa de correio de usuário (User Mailbox)",
      "Caixa de correio de recurso (Resource/Room Mailbox)",
      "Grupo dinâmico de contatos"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão foca na tipagem de caixas de correio do Exchange Online.",
      "papoReto": "No Exchange, recursos físicos como salas de reunião ou projetores que precisam ser reservados por agenda recebem caixas de correio dedicadas de Recurso (Resource Mailbox), divididas em caixas de Sala (Room) ou Equipamento (Equipment). Elas respondem convites automaticamente se estiverem livres.",
      "respostaCerta": "Caixa de correio de recurso (Resource/Room Mailbox)",
      "puloDoGato": "Reserva de salas físicas ou projetores = Caixa de correio de Recurso (Resource/Room/Equipment Mailbox). O sistema gerencia conflitos de horário sozinho.",
      "cascasDeBanana": [
        "Caixa de correio compartilhada: Usada para e-mails comuns de equipe (ex: vendas@empresa.com), não otimizada para reservar espaços físicos.",
        "Caixa de correio de usuário: Destinada a pessoas físicas reais e exige licença paga associada.",
        "Grupo dinâmico de contatos: Apenas uma lista de distribuição de e-mails de pessoas, sem calendário para agendamento."
      ],
      "dicaOuro": "Reservar Salas no Calendário = Caixa de Recurso (Room Mailbox)."
    },
    "id": "ab900_q63"
  },
  {
    "text": "Para evitar que e-mails falsificados com o nome da sua empresa cheguem aos seus clientes, qual registro DNS de autenticação de e-mail deve ser cadastrado no seu provedor de domínio para listar quais servidores IPs têm autorização para enviar e-mails em nome do seu domínio?",
    "options": [
      "Registro CNAME de aliases",
      "Registro MX (Mail Exchanger)",
      "Registro TXT de verificação simples de domínio",
      "Registro SPF (Sender Policy Framework)"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão aborda a segurança e conformidade de rede DNS no Exchange.",
      "papoReto": "O registro SPF é uma linha de texto adicionada ao seu DNS que funciona como uma lista autorizada. Ela diz: 'Apenas os servidores de e-mail da Microsoft (do M365) têm direito de enviar e-mails usando o endereço @minhaempresa.com'. Se um hacker enviar e-mail fingindo ser você, o servidor de destino rejeita.",
      "respostaCerta": "Registro SPF (Sender Policy Framework)",
      "puloDoGato": "Os três pilares da segurança de entrega de e-mail no Exchange são: SPF (lista de IPs autorizados), DKIM (assinatura digital criptografada) e DMARC (política de ação para falhas de SPF/DKIM).",
      "cascasDeBanana": [
        "Registro CNAME: Usado para apontar apelidos amigáveis, como apontar o portal autodiscover para a nuvem da Microsoft.",
        "Registro MX: Aponta para onde os e-mails recebidos devem ser entregues (no caso, ao Exchange Online). Não serve para listar IPs de envio.",
        "Registro TXT de verificação simples: Usado apenas uma vez para provar à Microsoft que você é dono daquele domínio."
      ],
      "dicaOuro": "Proteger domínio contra spoofing/envio falso = Configurar registros SPF, DKIM e DMARC."
    },
    "id": "ab900_q64"
  },
  {
    "text": "O que acontece com os dados e e-mails de uma caixa de correio de usuário no Exchange Online se o administrador simplesmente remover a licença do Microsoft 365 desse usuário sem aplicar nenhuma política de retenção prévia?",
    "options": [
      "Os dados da caixa de correio são mantidos por um período de carência de 30 dias, após o qual são excluídos permanentemente.",
      "Os e-mails são excluídos na mesma hora de forma irreversível.",
      "Os dados são migrados automaticamente para a conta pessoal do OneDrive do chefe do departamento.",
      "A caixa de correio permanece ativa para recebimento de e-mails indefinidamente, apenas sem acesso ao login."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão aborda o ciclo de vida dos dados após a remoção de licenças.",
      "papoReto": "Quando você remove a licença de um usuário no M365, o Exchange não deleta tudo na mesma hora. Há um período de carência padrão de 30 dias (30-day grace period). Se você reatribuir a licença dentro desse prazo, a caixa é reativada inteira. Passados os 30 dias, os dados são apagados definitivamente.",
      "respostaCerta": "Os dados da caixa de correio são mantidos por um período de carência de 30 dias, após o qual são excluídos permanentemente.",
      "puloDoGato": "Quer guardar a caixa de e-mail de um ex-funcionário demitido sem gastar licença? O caminho correto é convertê-la em Caixa Compartilhada (Shared Mailbox) antes de remover a licença.",
      "cascasDeBanana": [
        "Excluídos na mesma hora: A Microsoft aplica carência de segurança contra cliques errados de administradores.",
        "Migrados para o OneDrive do chefe: Backups e migrações devem ser feitos manualmente pelo administrador de TI.",
        "Permanece ativa para recebimento indefinidamente: Sem licença e sem conversão, a caixa é desativada após 30 dias."
      ],
      "dicaOuro": "Remover licença = 30 dias de tolerância antes da exclusão definitiva."
    },
    "id": "ab900_q65"
  },
  {
    "text": "Sua empresa deseja configurar o redirecionamento automático de e-mails para caixas externas fora da organização (como endereços particulares de funcionários). Qual recurso de segurança do Exchange Online Protection (EOP) bloqueia esse redirecionamento por padrão para evitar vazamentos?",
    "options": [
      "Políticas de conexões de entrada (Inbound connector policies)",
      "Políticas anti-spam de saída (Outbound anti-spam policies)",
      "Filtro de lixo eletrônico básico do Outlook",
      "Quarentena administrativa do Defender"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão foca na proteção de exfiltração de dados por e-mail.",
      "papoReto": "Para evitar que funcionários ou contas hackeadas criem regras silenciosas de encaminhamento automático para roubar dados corporativos, as Políticas Anti-Spam de Saída (Outbound Anti-Spam) do M365 bloqueiam por padrão o encaminhamento automático para fora do domínio.",
      "respostaCerta": "Políticas anti-spam de saída (Outbound anti-spam policies)",
      "puloDoGato": "Se um usuário reclamar que configurou um encaminhamento automático para o Gmail dele e as mensagens estão sendo rejeitadas com erro (NDR), a causa é o bloqueio padrão nas Outbound Anti-Spam Policies.",
      "cascasDeBanana": [
        "Políticas de conexões de entrada: Gerenciam e-mails que CHEGAM à sua organização, não os que saem.",
        "Filtro de lixo eletrônico do Outlook: Ferramenta local do aplicativo do usuário para mover spans para a pasta lixo.",
        "Quarentena administrativa: Onde e-mails bloqueados por suspeita de phishing ou vírus aguardam liberação, não uma regra de encaminhamento."
      ],
      "dicaOuro": "Encaminhamento automático de e-mail bloqueado = Regra padrão de Anti-Spam de Saída (Outbound Anti-Spam)."
    },
    "id": "ab900_q66"
  },
  {
    "text": "Qual o limite padrão de tamanho de caixa de correio do Exchange Online para um usuário que possui a licença corporativa básica Microsoft 365 Business Standard?",
    "options": [
      "100 GB",
      "10 GB",
      "50 GB",
      "Ilimitado"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão aborda limites práticos de armazenamento no Exchange.",
      "papoReto": "A maioria dos planos de pequenas e médias empresas (como Business Basic/Standard/Premium) e os planos corporativos de entrada (como Office 365 E1) oferecem caixas de correio de 50GB por usuário. Já os planos avançados (E3/E5) sobem esse limite para 100GB.",
      "respostaCerta": "50 GB",
      "puloDoGato": "Decore: Planos Business (Basic/Standard/Premium) = 50 GB. Planos Enterprise (E3/E5) = 100 GB. Essa diferença é cobrada constantemente nas provas da Microsoft.",
      "cascasDeBanana": [
        "100 GB: É o limite do plano E3/E5 Enterprise, mais caros.",
        "10 GB: Limite muito baixo, não utilizado nos planos comerciais ativos de escritório da Microsoft.",
        "Ilimitado: Nenhum plano possui caixa de correio principal ilimitada de fábrica sem recursos de arquivamento ativo."
      ],
      "dicaOuro": "Caixa M365 Business = 50 GB. Caixa M365 Enterprise = 100 GB."
    },
    "id": "ab900_q67"
  },
  {
    "text": "Um usuário precisa dar permissão para que seu assistente possa enviar e-mails diretamente 'em seu nome' (Send on Behalf), aparecendo claramente para os destinatários que o assistente enviou a mensagem representando o gestor. Onde essa permissão deve ser configurada?",
    "options": [
      "No console do Azure Active Directory Connect local",
      "Nas regras de lixo eletrônico do portal Defender",
      "No centro de administração do Microsoft Purview",
      "Nas configurações de delegação da caixa de correio no Exchange admin center ou Outlook"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão foca no recurso de delegação de envio de e-mails.",
      "papoReto": "Para permitir que secretários ou assistentes enviem e-mails representando outra pessoa, o proprietário da caixa (ou o administrador de TI) concede privilégios de delegação no Exchange. Existem três tipos: Enviar como (Send As), Enviar em nome de (Send on Behalf) e Acesso Total (Full Access).",
      "respostaCerta": "Nas configurações de delegação da caixa de correio no Exchange admin center ou Outlook",
      "puloDoGato": "'Enviar como' (Send As) não mostra quem enviou de verdade (parece 100% que foi o dono). 'Enviar em nome de' (Send on Behalf) mostra: 'Assistente em nome de Gestor'.",
      "cascasDeBanana": [
        "Azure AD Connect: Ferramenta de sincronização de contas locais para a nuvem, não trata de delegações lógicas de e-mail diárias.",
        "Regras de lixo eletrônico do Defender: Tratam de segurança cibernética contra malwares, não permissões de negócios do correio.",
        "Microsoft Purview: Focado em compliance e governança de dados sensíveis."
      ],
      "dicaOuro": "Delegar envio de e-mail = Configuração de Delegação (Exchange Admin / Outlook)."
    },
    "id": "ab900_q68"
  },
  {
    "text": "Qual recurso do Exchange Online permite reter e-mails apagados acidentalmente pelos usuários na pasta 'Itens Excluídos' por até 14 dias (expansível a 30 dias) para que eles mesmos possam recuperar sem acionar o suporte?",
    "options": [
      "Recuperação de Itens Excluídos (Deleted Item Recovery)",
      "Retenção de Litígio (Litigation Hold)",
      "Log de Auditoria de Acesso",
      "Cofre de chaves de criptografia (Key Vault)"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão aborda a lixeira de segundo estágio do e-mail do usuário.",
      "papoReto": "Quando um usuário apaga um e-mail no Outlook e depois limpa a lixeira ('Itens Excluídos'), a mensagem vai para uma pasta oculta de segurança temporária. O usuário pode clicar em 'Recuperar itens excluídos desta pasta' no topo da lixeira do Outlook para reaver as mensagens em até 14 dias por padrão.",
      "respostaCerta": "Recuperação de Itens Excluídos (Deleted Item Recovery)",
      "puloDoGato": "Isso serve para o autosserviço (self-service) de recuperação do próprio colaborador. O limite padrão é 14 dias, mas o administrador de TI pode estender a configuração para 30 dias no Exchange admin center.",
      "cascasDeBanana": [
        "Retenção de Litígio (Litigation Hold): Mantém os e-mails guardados para a empresa para fins jurídicos em eDiscovery, de forma oculta ao usuário final.",
        "Log de Auditoria: Apenas registra quem fez a ação de deletar, não recupera o e-mail.",
        "Key Vault: Serviço do Azure para guardar chaves criptográficas e senhas."
      ],
      "dicaOuro": "Apagou e esvaziou a lixeira? Use a pasta 'Recuperar Itens Excluídos'."
    },
    "id": "ab900_q69"
  },
  {
    "text": "Sua empresa deseja implantar caixas de e-mail adicionais de arquivamento (Archive Mailboxes) para que usuários antigos possam mover e-mails históricos liberando espaço da caixa de correio principal. Como esse recurso funciona nativamente?",
    "options": [
      "O arquivamento cria arquivos .PST gigantes locais que são salvos no disco rígido do computador do usuário.",
      "Uma caixa de correio secundária (Archive) é vinculada à conta do usuário, permitindo o arquivamento automático ou manual via Outlook.",
      "O arquivamento desliga a caixa de correio principal do usuário permanentemente por 24 horas.",
      "O arquivo de arquivamento é migrado e salvo nos servidores públicos do Google Drive."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão foca no recurso de arquivamento em nuvem (In-Place Archiving).",
      "papoReto": "O In-Place Archiving cria uma segunda caixa de correio associada à conta do usuário no Outlook. E-mails antigos podem ser movidos para lá automaticamente por políticas de retenção da empresa (ex: e-mails com mais de 2 anos vão para o arquivo) ou manualmente pelo usuário. Fica tudo seguro na nuvem, sem ocupar o limite da caixa principal.",
      "respostaCerta": "Uma caixa de correio secundária (Archive) é vinculada à conta do usuário, permitindo o arquivamento automático ou manual via Outlook.",
      "puloDoGato": "O arquivamento na nuvem da Microsoft elimina a necessidade de criar arquivos locais .PST, que vivem quebrando e corrompendo no disco dos computadores.",
      "cascasDeBanana": [
        "Cria arquivos .PST locais: É exatamente o que o arquivamento na nuvem visa eliminar para evitar perda de dados por quebra de hardware local.",
        "Desliga a caixa principal por 24 horas: O processo é 100% online e invisível para o usuário, que continua trabalhando normalmente.",
        "Salvo nos servidores do Google: Os dados permanecem isolados e protegidos dentro da nuvem da Microsoft."
      ],
      "dicaOuro": "Arquivamento em Nuvem (Archive Mailbox) = Caixa secundária online ligada à conta do usuário."
    },
    "id": "ab900_q70"
  },
  {
    "text": "Um administrador quer configurar regras globais no Exchange para que avisos automáticos de segurança (MailTips) apareçam no Outlook dos colaboradores quando eles estiverem prestes a enviar um e-mail para destinatários fora da organização. Esse recurso serve para quê?",
    "options": [
      "Bloquear totalmente o envio de e-mails para qualquer pessoa fora da empresa.",
      "Criptografar o e-mail obrigatoriamente usando chaves RSA militares.",
      "Evitar o envio acidental de informações confidenciais para contatos externos alertando o usuário antes do clique em 'Enviar'.",
      "Traduzir o texto do e-mail automaticamente para o idioma do destinatário."
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão aborda a funcionalidade e o valor das MailTips no Exchange.",
      "papoReto": "As MailTips (Dicas de Email) são avisos que aparecem como banners amarelos discretos no topo do e-mail enquanto o usuário está redigindo a mensagem. Exemplos comuns: avisar se o destinatário está com Resposta Automática de Férias ativada, se a caixa dele está cheia ou se você adicionou destinatários externos à mensagem.",
      "respostaCerta": "Evitar o envio acidental de informações confidenciais para contatos externos alertando o usuário antes do clique em 'Enviar'.",
      "puloDoGato": "MailTips previnem erros humanos comuns (como o clique acidental em 'Responder a Todos' em listas com centenas de pessoas). É uma barreira preventiva.",
      "cascasDeBanana": [
        "Bloquear o envio de e-mails: Ela apenas exibe uma dica informativa, o usuário ainda pode enviar se quiser.",
        "Criptografar o e-mail: Criptografia é configurada via políticas de e-mail do Purview/Message Encryption, não por MailTips.",
        "Traduzir o texto: Tradutores são add-ins ou recursos embutidos de revisão de texto do próprio Word/Outlook."
      ],
      "dicaOuro": "MailTips = Banners informativos que previnem erros antes do envio de mensagens."
    },
    "id": "ab900_q71"
  },
  {
    "text": "Qual recurso do SharePoint Online permite centralizar a navegação, pesquisa e identidade visual de vários sites de equipe independentes sob um mesmo portal corporativo comum?",
    "options": [
      "Resource Groups",
      "Active Directory Federation Services",
      "Bibliotecas de mídia isoladas",
      "Hub Sites (Sites de Hub)"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão aborda a arquitetura de portais modernos no SharePoint.",
      "papoReto": "Em vez de criar sub-sites hierárquicos e rígidos como antigamente, o SharePoint moderno usa estruturas planas. Você cria sites independentes e os vincula a um Hub Site. O Hub unifica o visual, a barra de navegação superior e permite que pesquisas mostrem arquivos de todos os sites vinculados.",
      "respostaCerta": "Hub Sites (Sites de Hub)",
      "puloDoGato": "Pediu 'unificar navegação, busca e branding' de vários sites diferentes? A resposta no SharePoint é Hub Sites.",
      "cascasDeBanana": [
        "Resource Groups: São pastas lógicas no portal do Azure para agrupar recursos de TI físicos (VMs, storages), sem relação com o SharePoint.",
        "Active Directory Federation Services: Protocolo local de autenticação SSO legado, não é recurso de design do SharePoint.",
        "Bibliotecas de mídia: Pastas comuns para salvar fotos, sem recursos de unificação de múltiplos portais."
      ],
      "dicaOuro": "Hub Site = O guarda-chuva que une visual e buscas de vários sites de departamentos."
    },
    "id": "ab900_q72"
  },
  {
    "text": "Ao compartilhar um documento confidencial salvo no SharePoint Online, o proprietário deseja gerar um link que permita o acesso apenas a pessoas internas da organização, impedindo o envio e visualização por terceiros de fora da empresa. Qual opção de link atende a essa necessidade?",
    "options": [
      "Pessoas em sua organização (People in your organization)",
      "Qualquer pessoa com o link (Anyone with the link)",
      "Pessoas específicas (Specific people) incluindo domínios externos",
      "Disponibilizar o site publicamente no Google Search"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão foca nas opções e governança de compartilhamento de links.",
      "papoReto": "O SharePoint oferece 4 tipos básicos de links de compartilhamento. Para restringir a visualização estritamente à rede corporativa da própria empresa, a opção recomendada é 'Pessoas em sua organização com o link'. Se alguém de fora receber o link por e-mail, o Entra ID exigirá um login corporativo da empresa e bloqueará o acesso.",
      "respostaCerta": "Pessoas em sua organização (People in your organization)",
      "puloDoGato": "'Anyone' = Links anônimos (baixo controle). 'People in your organization' = Apenas funcionários do tenant. 'People with existing access' = Não muda permissões. 'Specific people' = Apenas os e-mails listados na hora.",
      "cascasDeBanana": [
        "Qualquer pessoa com o link: Cria um link público/anônimo que pode ser acessado por qualquer pessoa no mundo, violando o sigilo.",
        "Pessoas específicas incluindo externos: Abre acesso para contas externas específicas, não restringindo exclusivamente ao público interno.",
        "Publicar no Google Search: Deixaria os arquivos da empresa visíveis publicamente na internet aberta."
      ],
      "dicaOuro": "Restringir acesso apenas a funcionários = Escolher 'People in your organization'."
    },
    "id": "ab900_q73"
  },
  {
    "text": "Qual a diferença conceitual e prática entre o SharePoint Online e o OneDrive for Business no que tange ao compartilhamento de arquivos?",
    "options": [
      "O OneDrive é local e offline, enquanto o SharePoint funciona apenas online.",
      "O OneDrive é destinado a arquivos individuais de trabalho pessoal de cada usuário, enquanto o SharePoint é voltado para colaboração corporativa e sites de equipe.",
      "O SharePoint é gratuito e o OneDrive exige licenças adicionais pagas.",
      "O OneDrive só funciona em dispositivos móveis e o SharePoint no desktop."
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão testa a distinção clássica dos produtos de arquivos da Microsoft.",
      "papoReto": "A regra de ouro da Microsoft é simples: OneDrive é o seu espaço de rascunhos pessoais de trabalho (ex: seus relatórios semanais antes de apresentar). SharePoint é a 'cozinha comunitária' onde os arquivos pertencem ao setor ou projeto, com controle de sites estruturados.",
      "respostaCerta": "O OneDrive é destinado a arquivos individuais de trabalho pessoal de cada usuário, enquanto o SharePoint é voltado para colaboração corporativa e sites de equipe.",
      "puloDoGato": "OneDrive = Meus arquivos (My files). SharePoint = Nossos arquivos / Arquivos de Equipe (Our files / Team files). Ambas as ferramentas rodam sobre a mesma tecnologia do SharePoint por baixo.",
      "cascasDeBanana": [
        "OneDrive local e SharePoint online: Ambos são sincronizáveis localmente e funcionam 100% online na nuvem.",
        "SharePoint gratuito e OneDrive pago: Ambos vêm inclusos e integrados nos mesmos pacotes de licença comerciais do M365.",
        "OneDrive móvel e SharePoint desktop: Ambas as plataformas possuem aplicativos mobile e web dedicados de alto desempenho."
      ],
      "dicaOuro": "OneDrive = Arquivos individuais. SharePoint = Arquivos do departamento/projeto compartilhados."
    },
    "id": "ab900_q74"
  },
  {
    "text": "Sua empresa deseja evitar que usuários deletem acidentalmente arquivos importantes de um site de equipe do SharePoint. Se um arquivo for excluído, ele vai para a Lixeira do Site. Qual o período máximo que esse arquivo permanece na Lixeira do Site antes de ser excluído permanentemente?",
    "options": [
      "30 dias",
      "14 dias",
      "93 dias",
      "Indefinidamente"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão aborda o tempo de preservação padrão da lixeira do SharePoint.",
      "papoReto": "No SharePoint Online, quando um usuário exclui um documento, ele vai para a lixeira do site. Ele permanece lá (dividido entre a lixeira de primeiro estágio e a lixeira de segundo estágio do administrador) por exatamente 93 dias a partir da data de exclusão original, após o qual é limpo definitivamente.",
      "respostaCerta": "93 dias",
      "puloDoGato": "Decore o número '93' para o SharePoint e '30' para remoção de licenças de usuários no Azure AD. A prova testa muito esses números.",
      "cascasDeBanana": [
        "30 dias: Período padrão de retenção de dados após excluir licenças, mas não da lixeira do SharePoint.",
        "14 dias: Limite de recuperação padrão para e-mails do Outlook, não do SharePoint.",
        "Indefinidamente: Lixeiras expiram para evitar consumo infinito de armazenamento do tenant."
      ],
      "dicaOuro": "Lixeira do SharePoint = 93 dias de prazo para resgate."
    },
    "id": "ab900_q75"
  },
  {
    "text": "Um administrador deseja criar permissões customizadas em um site do SharePoint para que colaboradores terceirizados apenas leiam os documentos das pastas de projetos, sem poder baixar (download) ou editar nenhum arquivo. Qual recurso do SharePoint gerencia essa segurança granular?",
    "options": [
      "Políticas de Acesso Condicional globais do tenant",
      "Grupos de distribuição de e-mail do Exchange",
      "Controle de hardware local via Windows Defender",
      "Níveis de permissão e grupos de segurança do site (Site Permissions)"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão aborda o modelo de segurança nativo do SharePoint.",
      "papoReto": "O SharePoint gerencia segurança em níveis. Por padrão, ele cria três grupos básicos no site: Proprietários (Acesso Total), Membros (Edição) e Visitantes (Leitura). Para restrições avançadas (como bloquear download), você pode ir no SharePoint admin center e configurar níveis de permissão personalizados (Permission Levels).",
      "respostaCerta": "Níveis de permissão e grupos de segurança do site (Site Permissions)",
      "puloDoGato": "As permissões são herdadas por padrão do site para as bibliotecas, pastas e arquivos, mas você pode quebrar a herança para pastas específicas e aplicar permissões exclusivas.",
      "cascasDeBanana": [
        "Políticas de Acesso Condicional: Bloqueiam o login geral no portal da empresa, não as ações de clique locais nas pastas de sites.",
        "Grupos de distribuição de e-mail: Listas para receber informativos de correio, não gerenciam acessos lógicos do SharePoint.",
        "Windows Defender: Antivírus de sistema local de PCs."
      ],
      "dicaOuro": "Controle de acesso do site = Proprietários (Full), Membros (Edit) e Visitantes (Read)."
    },
    "id": "ab900_q76"
  },
  {
    "text": "Sua empresa deseja configurar um site do SharePoint para que ele avise os membros do time sempre que um arquivo for adicionado, editado ou excluído de uma pasta crítica. Qual recurso do usuário final resolve essa automação?",
    "options": [
      "Alertas (Alert Me / Alertar-me)",
      "Criar um fluxo síncrono no Azure DevOps",
      "Regras de negócios automáticas do Dataverse",
      "Configurações de lixo eletrônico locais"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão foca nas automações básicas integradas do SharePoint.",
      "papoReto": "O SharePoint possui um recurso clássico de colaboração chamado 'Alert Me'. O usuário clica na biblioteca ou arquivo, seleciona 'Alertar-me' e configura regras simples como: 'Envie um e-mail diário mostrando o resumo de todas as alterações feitas por outros membros'.",
      "respostaCerta": "Alertas (Alert Me / Alertar-me)",
      "puloDoGato": "Isso não exige código ou Power Automate. É um recurso nativo que o próprio usuário ativa em segundos na interface web do SharePoint.",
      "cascasDeBanana": [
        "Azure DevOps: Destinado a controle de código fonte de desenvolvedores, complexo demais para o cenário.",
        "Dataverse: Banco de dados relacional para Power Apps, não lida com notificações simples de pastas de arquivos.",
        "Configurações de lixo eletrônico: Move e-mails indesejados no Outlook, sem relação com as ações do SharePoint."
      ],
      "dicaOuro": "Notificar mudanças em pastas do SharePoint = Recurso 'Alert Me' (Alertar-me)."
    },
    "id": "ab900_q77"
  },
  {
    "text": "O que são 'Metadados' no contexto de uma biblioteca de documentos do SharePoint Online?",
    "options": [
      "Arquivos temporários criados automaticamente pelo Microsoft 365 que devem ser deletados.",
      "Colunas de informações estruturadas (ex: Autor, Status, Data de Validade) que ajudam a organizar e filtrar arquivos sem precisar criar pastas físicas.",
      "Scripts de vírus criptografados gerados pelo navegador web do usuário.",
      "Backups lógicos compactados gerados pelo servidor de e-mail do Exchange."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão aborda o conceito de colunas e metadados no SharePoint.",
      "papoReto": "No SharePoint, evitamos criar pastas dentro de pastas. Em vez disso, usamos Metadados (Metadata). Criamos colunas como 'Status do Contrato' ou 'Setor'. Assim, o usuário pode filtrar e ordenar centenas de arquivos na tela em segundos, independente de onde estejam salvos.",
      "respostaCerta": "Colunas de informações estruturadas (ex: Autor, Status, Data de Validade) que ajudam a organizar e filtrar arquivos sem precisar criar pastas físicas.",
      "puloDoGato": "Metadados = Dados sobre dados. SharePoint moderno estimula o uso de metadados e visualizações (views) em vez da estrutura legada de pastas aninhadas no Windows.",
      "cascasDeBanana": [
        "Arquivos temporários: Arquivos temporários são gerados pelo Word ou cache, sem relação com as colunas organizacionais do SharePoint.",
        "Scripts de vírus: Vírus são bloqueados pelo Defender, metadados são recursos úteis de governança de arquivos.",
        "Backups do Exchange: Exchange lida com caixas de correio, SharePoint lida com arquivos."
      ],
      "dicaOuro": "Metadados no SharePoint = Colunas customizadas para classificar e filtrar documentos."
    },
    "id": "ab900_q78"
  },
  {
    "text": "Ao sincronizar uma biblioteca de documentos do SharePoint Online para o seu computador local usando o aplicativo do OneDrive, qual recurso do Windows economiza espaço em disco fazendo com que os arquivos pareçam estar no computador, mas sejam baixados somente no momento em que forem abertos?",
    "options": [
      "Criptografia BitLocker",
      "Backup do Windows",
      "Arquivos sob Demanda (Files On-Demand)",
      "Espelhamento de Rede Físico"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão aborda o recurso Files On-Demand para otimização de armazenamento local.",
      "papoReto": "O recurso 'Arquivos sob Demanda' (Files On-Demand) permite sincronizar gigabytes de dados do SharePoint/OneDrive com o computador sem encher o disco local. O arquivo exibe um ícone de nuvem azul; quando você dá dois cliques nele, ele é baixado e aberto instantaneamente.",
      "respostaCerta": "Arquivos sob Demanda (Files On-Demand)",
      "puloDoGato": "Ícone de Nuvem Azul = Apenas na nuvem (sem espaço ocupado). Círculo Verde com Borda = Baixado temporariamente. Círculo Verde Preenchido = Sempre disponível localmente (ocupa espaço definitivo).",
      "cascasDeBanana": [
        "Criptografia BitLocker: Protege o disco local em caso de roubo físico de hardware, não gerencia downloads sob demanda.",
        "Backup do Windows: Ferramenta para cópia de segurança de arquivos locais para o OneDrive, não otimização de espaço.",
        "Espelhamento de Rede: Termo de infraestrutura física de servidores, sem relação com o sincronizador."
      ],
      "dicaOuro": "Poupar espaço local sincronizando arquivos = Ativar 'Files On-Demand'."
    },
    "id": "ab900_q79"
  },
  {
    "text": "Uma empresa deseja criar um site público na internet do SharePoint para vender seus produtos diretamente ao público geral externo de forma anônima. Por que essa estratégia NÃO é recomendada pela Microsoft?",
    "options": [
      "O SharePoint limita as vendas a um valor máximo de $100 dólares por transação.",
      "Os sites públicos no SharePoint exigem a compra de hardware local adicional de rede.",
      "O SharePoint só pode ser exibido no navegador Microsoft Edge legado.",
      "O SharePoint Online moderno não suporta mais a criação de sites públicos voltados à internet aberta sem autenticação."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão foca na limitação de uso dos sites do SharePoint modernos.",
      "papoReto": "Antigamente o SharePoint permitia sites públicos. Mas, há anos, a Microsoft desativou esse recurso. O SharePoint Online moderno é estritamente uma ferramenta de INTRANET e EXTRANET (exige login e autenticação dos usuários, mesmo que convidados). Para sites abertos ao público anônimo, deve-se usar outras tecnologias web.",
      "respostaCerta": "O SharePoint Online moderno não suporta mais a criação de sites públicos voltados à internet aberta sem autenticação.",
      "puloDoGato": "SharePoint = Colaboração corporativa fechada (Intranet/Extranet). Não tente usá-lo para hospedar o e-commerce público da empresa.",
      "cascasDeBanana": [
        "Limite de vendas a $100: O SharePoint não é um sistema de e-commerce nem gerencia gateways financeiros de vendas.",
        "Exigência de hardware local: Trata-se de um serviço 100% em nuvem e gerenciado.",
        "Edge legado: O SharePoint moderno funciona em qualquer navegador web de mercado atualizado (Chrome, Firefox, Safari, Edge)."
      ],
      "dicaOuro": "SharePoint modernizado = Apenas sites internos ou de acesso controlado (sem sites públicos de internet)."
    },
    "id": "ab900_q80"
  },
  {
    "text": "Qual o papel do 'Term Store' (Repositório de Termos) na administração do SharePoint Online em escala corporativa?",
    "options": [
      "Centralizar o gerenciamento de taxonomia, palavras-chave e termos padronizados compartilhados por múltiplos sites da organização.",
      "Armazenar senhas e chaves de acesso a bancos de dados externos.",
      "Registrar os históricos de mensagens de erro ocorridos nas páginas web.",
      "Traduzir automaticamente os documentos salvos no site para outros idiomas."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão aborda o gerenciamento de metadados avançado (Taxonomia).",
      "papoReto": "Para garantir a consistência dos metadados (evitar que um site escreva 'RH', outro 'Recursos Humanos' e outro 'Dept. Pessoal'), o administrador do SharePoint configura o Term Store. É um dicionário centralizado de termos corporativos padronizados que todos os sites consultam.",
      "respostaCerta": "Centralizar o gerenciamento de taxonomia, palavras-chave e termos padronizados compartilhados por múltiplos sites da organização.",
      "puloDoGato": "Pediu 'padronização de termos de taxonomia', 'palavras-chave organizacionais' ou 'metadados gerenciados centralizados'? O recurso é o Term Store.",
      "cascasDeBanana": [
        "Armazenar senhas: Cofres de senhas do M365 são gerenciados pelo Key Vault, não pelo SharePoint Term Store.",
        "Histórico de mensagens de erro: Logs de depuração de rede ficam no Azure Monitor ou ferramentas de depuração do navegador.",
        "Traduzir documentos: A tradução automatizada exige serviços cognitivos como Translator, não um dicionário de taxonomia."
      ],
      "dicaOuro": "Padronização de taxonomia e palavras-chave de colunas = Term Store."
    },
    "id": "ab900_q81"
  },
  {
    "text": "Sua empresa deseja realizar uma grande apresentação online de final de ano para mais de 5.000 colaboradores do grupo, onde a diretoria falará por vídeo e os participantes apenas farão perguntas escritas por meio do painel de Q&A (Perguntas e Respostas), sem áudio ou webcam ativos para evitar bagunça. Qual o formato de reunião do Teams mais indicado?",
    "options": [
      "Reunião padrão do Teams (Meet Now)",
      "Reunião de Prefeitura (Town Hall / Live Event)",
      "Canal privado do Teams",
      "Agendamento via calendário do Outlook compartilhado simples"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão aborda os diferentes cenários de videoconferência no Teams.",
      "papoReto": "Para eventos massivos de comunicação unidirecional (um para muitos), como anúncios do CEO, usamos as transmissões ao vivo. O Teams moderno usa o formato Town Hall (Reunião de Prefeitura, que substituiu os antigos Live Events). Os apresentadores controlam o streaming e a plateia assiste sem interrupções de áudio.",
      "respostaCerta": "Reunião de Prefeitura (Town Hall / Live Event)",
      "puloDoGato": "Reunião clássica = Colaboração bidirecional (todo mundo fala). Town Hall / Webinar = Apresentadores falam, plateia assiste/interage via chat ou Q&A.",
      "cascasDeBanana": [
        "Reunião padrão: Limita a colaboração ordenada e seria um caos gerenciar 5.000 webcams e microfones abertos.",
        "Canal privado: Estrutura permanente de colaboração de chat em grupo restrito, não uma ferramenta de streaming.",
        "Calendário do Outlook simples: Apenas gera o convite físico, não o recurso técnico de videoconferência massiva."
      ],
      "dicaOuro": "Transmissões gigantes 'um para muitos' com controle rígido = Town Hall (Prefeitura)."
    },
    "id": "ab900_q82"
  },
  {
    "text": "Um administrador do Teams precisa garantir que apenas os gerentes da empresa possam iniciar chats privados individuais com outros colaboradores, desabilitando o recurso de chat particular para estagiários temporários por motivos de compliance ético. Qual política do Teams deve ser configurada?",
    "options": [
      "Políticas de Reunião (Meeting Policies)",
      "Políticas de Aplicativos (App Setup Policies)",
      "Políticas de Mensagens (Messaging Policies)",
      "Políticas de Evento ao Vivo (Live Events Policies)"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão avalia a capacidade de gerenciamento de políticas do Teams.",
      "papoReto": "No Teams admin center, controlamos o que as pessoas fazem por políticas. Para habilitar/desabilitar o chat privado, envio de GIFs, exclusão de mensagens enviadas ou edição de conversas, o administrador altera as Políticas de Mensagens (Messaging Policies) e as atribui aos usuários correspondentes.",
      "respostaCerta": "Políticas de Mensagens (Messaging Policies)",
      "puloDoGato": "Controlar conversas por chat, GIFs, memes e edição = Messaging Policies. Controlar comportamento de chamadas de vídeo e microfone = Meeting Policies.",
      "cascasDeBanana": [
        "Políticas de Reunião: Tratam das configurações de câmera, gravação automática e lousa digital nas chamadas de vídeo.",
        "Políticas de Aplicativos: Controlam quais aplicativos adicionais (como Trello ou Jira) são instalados ou fixados na barra lateral do Teams.",
        "Políticas de Evento ao Vivo: Gerenciam recursos de streaming em massa, sem relação com chats diários."
      ],
      "dicaOuro": "Ligar/desligar chat privado e recursos de texto = Messaging Policies."
    },
    "id": "ab900_q83"
  },
  {
    "text": "Sua empresa colabora com parceiros externos e deseja permitir que colaboradores conversem via chat do Teams com contatos de fora da organização, contanto que estes contatos externos também tenham contas válidas de Teams de suas respectivas empresas, sem que precisem ser adicionados como convidados (Guests) no seu tenant. Qual recurso de conectividade resolve isso?",
    "options": [
      "Acesso de Convidado (Guest Access)",
      "Acesso Condicional via IP local",
      "Conector AD Connect síncrono",
      "Acesso Externo (Federação)"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão aborda a diferença crítica entre Acesso Externo (Federação) e Acesso de Convidado.",
      "papoReto": "A federação (Acesso Externo) é a capacidade de colocar o e-mail de um funcionário de outra empresa na busca do Teams e começar a conversar diretamente com ele. Ele responde usando o Teams dele e você no seu. Sem login extra e sem entrar em outro tenant.",
      "respostaCerta": "Acesso Externo (Federação)",
      "puloDoGato": "Federação = Comunicação direta externa (sem mudança de tenant). Guest Access = O usuário externo entra no seu tenant como um objeto, podendo ler arquivos em canais.",
      "cascasDeBanana": [
        "Acesso de Convidado: Exige convidar o usuário para uma equipe de canal, fazendo-o alternar de tenant para acessar dados internos.",
        "Acesso Condicional: Política de segurança para bloquear ou liberar logins, não de interconexão de chats.",
        "Conector AD Connect: Ferramenta técnica de sincronização interna local para nuvem."
      ],
      "dicaOuro": "Conversar com outra empresa sem mudar de tenant = Acesso Externo (Federação)."
    },
    "id": "ab900_q84"
  },
  {
    "text": "Um colaborador deseja fixar o aplicativo do 'Microsoft Planner' automaticamente na barra lateral esquerda do Teams de todos os funcionários da empresa de forma padronizada por padrão. Onde o administrador do Teams deve fazer essa configuração?",
    "options": [
      "Nas Políticas de Configuração de Aplicativos (App Setup Policies) no Teams admin center",
      "Nas configurações de inicialização locais do Windows do computador do usuário",
      "No centro de administração do Microsoft 365 Defender",
      "Nas regras de caixas de correio no Exchange admin center"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão foca na distribuição de aplicativos na barra lateral do Teams.",
      "papoReto": "As Políticas de Configuração de Aplicativos (App Setup Policies) permitem que os administradores selecionem quais aplicativos adicionais devem ser instalados e fixados de antemão na barra lateral esquerda do Teams dos funcionários, facilitando o acesso rápido a ferramentas homologadas.",
      "respostaCerta": "Nas Políticas de Configuração de Aplicativos (App Setup Policies) no Teams admin center",
      "puloDoGato": "Setup Policies gerenciam o layout da interface esquerda do Teams corporativo. Você pode, por exemplo, fixar o App de RH para facilitar o autosserviço.",
      "cascasDeBanana": [
        "Inicialização do Windows: Apenas inicializa o Teams com o computador local, não altera o layout interno de aplicativos do produto.",
        "M365 Defender: Trata de segurança contra malwares e ataques hackers.",
        "Exchange admin center: Administra fluxos de e-mails, sem controle sobre a interface do Teams."
      ],
      "dicaOuro": "Fixar aplicativos na barra do Teams para os usuários = App Setup Policies."
    },
    "id": "ab900_q85"
  },
  {
    "text": "Ao criar uma nova equipe (Team) no Microsoft Teams, qual recurso do Microsoft 365 é provisionado e configurado automaticamente por trás para gerenciar a lista de membros, permissões, caixas de correio e arquivos compartilhados dessa equipe?",
    "options": [
      "Resource Group do Azure",
      "Grupo do Microsoft 365 (M365 Group)",
      "Assinatura dedicada de faturamento",
      "Domínio DNS adicional"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão foca na relação de dependência de arquitetura do Teams.",
      "papoReto": "O Microsoft Teams não funciona de forma isolada. Por baixo de toda equipe do Teams, o sistema cria automaticamente um Grupo do Microsoft 365. Este grupo gerencia a identidade dos membros, cria um site do SharePoint para salvar os arquivos dos canais e uma caixa de correio compartilhada no Exchange.",
      "respostaCerta": "Grupo do Microsoft 365 (M365 Group)",
      "puloDoGato": "Criei uma equipe no Teams. O que ganhei nos bastidores? Um Grupo M365 + Um site do SharePoint + Um bloco no Exchange + Um plano no Planner.",
      "cascasDeBanana": [
        "Resource Group: Contêiner lógico para governança de recursos físicos do Azure, não de identidades de escritório.",
        "Assinatura dedicada: Faturamento é unificado na assinatura do tenant, sem cobranças adicionais por equipe criada.",
        "Domínio DNS adicional: O M365 usa o domínio principal cadastrado no tenant, sem criar novos domínios por time."
      ],
      "dicaOuro": "Equipe do Teams = Por baixo roda um Grupo do Microsoft 365."
    },
    "id": "ab900_q86"
  },
  {
    "text": "Sua empresa deseja criar um canal de comunicação dentro de uma equipe do Teams onde apenas um subconjunto selecionado de membros da equipe possa participar e ler as mensagens, bloqueando o acesso de todos os outros participantes comuns da equipe. Qual tipo de canal atende a essa necessidade?",
    "options": [
      "Canal Padrão (Standard Channel)",
      "Canal Compartilhado (Shared Channel)",
      "Canal Privado (Private Channel)",
      "Canal Dinâmico Federado"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão foca nos tipos de canais do Teams.",
      "papoReto": "O Teams moderno possui três tipos de canais. O Canal Privado permite criar um espaço restrito apenas para algumas pessoas que já pertencem à equipe (ex: apenas a diretoria dentro da equipe geral da empresa), criando permissões isoladas.",
      "respostaCerta": "Canal Privado (Private Channel)",
      "puloDoGato": "Standard = Todos da equipe leem. Private = Apenas os membros escolhidos da equipe leem. Shared = Pessoas de fora da equipe (e de fora da empresa) podem ler sem precisar entrar na equipe principal.",
      "cascasDeBanana": [
        "Canal Padrão: Aberto para todos os membros da equipe lerem e participarem.",
        "Canal Compartilhado: Permite colaborar com pessoas de fora da equipe sem que elas entrem na equipe pai, mas não é restrito estritamente a um subconjunto isolado da própria equipe original.",
        "Canal Dinâmico Federado: Esse tipo de canal não existe na nomenclatura padrão do Teams."
      ],
      "dicaOuro": "Subconjunto de membros da mesma equipe = Canal Privado."
    },
    "id": "ab900_q87"
  },
  {
    "text": "Sua empresa utiliza telefonia analógica antiga e deseja migrar para que todos os colaboradores possam fazer e receber chamadas telefônicas para números fixos e celulares diretamente pela interface do Microsoft Teams, usando a internet. Qual recurso do M365 habilita essa integração?",
    "options": [
      "Exchange Mailbox Integrator",
      "Azure IoT Hub",
      "Conexão VPN de rede local",
      "Telefone do Teams (Teams Phone / Cloud Voice)"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão aborda a funcionalidade de telefonia integrada da Microsoft.",
      "papoReto": "O Microsoft Teams Phone (antigo Phone System) transforma o Teams em um PABX na nuvem. Com ele, você pode atribuir números de telefone reais aos usuários e fazer chamadas telefônicas clássicas (PSTN) pelo Teams, dispensando telefones físicos nas mesas.",
      "respostaCerta": "Telefone do Teams (Teams Phone / Cloud Voice)",
      "puloDoGato": "Telefonia externa no Teams exige: Licença do Teams Phone (Cloud Voice) + Um plano de chamadas (Calling Plan da Microsoft ou operadora terceirizada integrada via Direct Routing).",
      "cascasDeBanana": [
        "Exchange Mailbox: Lida com e-mails, sem capacidade de discagem telefônica PSTN.",
        "Azure IoT Hub: Ferramenta do Azure para conectar e coletar dados de dispositivos inteligentes (sensores, eletrodomésticos).",
        "VPN de rede local: Utilizada para conectar filiais de escritórios, sem relação com números de telefonia."
      ],
      "dicaOuro": "Teams substituindo telefone físico fixo = Teams Phone."
    },
    "id": "ab900_q88"
  },
  {
    "text": "Qual aplicativo do Microsoft 365 permite criar pesquisas rápidas e enquetes em tempo real durante o andamento de uma reunião do Teams para obter feedback rápido dos participantes?",
    "options": [
      "Microsoft Forms (Forms em reuniões)",
      "Microsoft Bookings",
      "Microsoft Sway",
      "Azure App Center"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão foca na integração de enquetes rápidas em reuniões.",
      "papoReto": "Durante chamadas ou apresentações no Teams, você pode adicionar o aplicativo Forms na reunião. Isso permite que os apresentadores publiquem perguntas de múltipla escolha que saltam na tela dos participantes para coleta de respostas na hora.",
      "respostaCerta": "Microsoft Forms (Forms em reuniões)",
      "puloDoGato": "Enquetes, formulários de pesquisa ou testes na reunião = Integração do Microsoft Forms.",
      "cascasDeBanana": [
        "Microsoft Bookings: Destinado a agendamento de horários e serviços para clientes externos.",
        "Microsoft Sway: Ferramenta de criação de apresentações e relatórios interativos web estilo páginas dinâmicas.",
        "Azure App Center: Plataforma de testes de aplicativos móveis para desenvolvedores."
      ],
      "dicaOuro": "Pesquisas e Enquetes rápidas na tela = Microsoft Forms."
    },
    "id": "ab900_q89"
  },
  {
    "text": "Ao agendar uma reunião do Teams que contará com participantes externos que não dominam o idioma do apresentador, qual recurso de acessibilidade permite que eles visualizem legendas traduzidas em tempo real durante a chamada?",
    "options": [
      "Exchange Translation Service local",
      "Legendas ao Vivo com tradução (Live Captions with translation)",
      "Tradutor de documentos do SharePoint",
      "Microsoft Sway Integrator"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão aborda recursos de acessibilidade e IA nas reuniões do Teams.",
      "papoReto": "O Teams possui o recurso Live Captions (Legendas ao Vivo). Quando ativado, ele escuta a voz do palestrante e exibe legendas em tempo real na tela do participante. Nas versões premium ou com licenças específicas, ele pode traduzir essa legenda para dezenas de idiomas de forma instantânea.",
      "respostaCerta": "Legendas ao Vivo com tradução (Live Captions with translation)",
      "puloDoGato": "Acessibilidade e quebra de barreiras de idiomas em chamadas de vídeo do Teams = Live Captions.",
      "cascasDeBanana": [
        "Exchange Translation: O Exchange traduz mensagens de e-mail de texto recebidas, não áudio ao vivo.",
        "Tradutor do SharePoint: Traduz arquivos de texto salvos nas bibliotecas.",
        "Sway Integrator: Sway é para apresentações de relatórios estáticos, sem recursos de streaming de chamadas."
      ],
      "dicaOuro": "Legendas de vídeo em tempo real traduzidas = Live Captions."
    },
    "id": "ab900_q90"
  },
  {
    "text": "Qual a utilidade do recurso 'Coexistence Mode' (Modo de Coexistência / Teams Upgrade) na transição de plataformas de comunicação corporativas legadas?",
    "options": [
      "Permitir que o Teams funcione junto com o WhatsApp de forma integrada e sem senhas.",
      "Possibilitar a execução do Teams e do Zoom no mesmo painel de chat simultaneamente.",
      "Gerenciar a transição e migração gradual de usuários do Skype for Business local para o Microsoft Teams.",
      "Sincronizar contas do Teams com caixas de correio locais do Yahoo Mail."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão aborda o processo de migração de ferramentas de comunicação.",
      "papoReto": "Antes do Teams se tornar o hub padrão, muitas empresas usavam o Skype for Business. O Modo de Coexistência define como as duas ferramentas se comportam na empresa durante a migração (ex: 'Island Mode', onde usam os dois de forma isolada, ou 'Teams Only', onde todo o tráfego é direcionado ao Teams).",
      "respostaCerta": "Gerenciar a transição e migração gradual de usuários do Skype for Business local para o Microsoft Teams.",
      "puloDoGato": "Transição de Skype for Business para o Teams = Coexistence Mode / Modo 'Teams Only'.",
      "cascasDeBanana": [
        "Integração com WhatsApp: O Teams é voltado para colaboração corporativa interna e não possui integração nativa síncrona desse tipo.",
        "Teams e Zoom no mesmo chat: São ferramentas concorrentes que rodam de forma isolada, embora você possa participar de reuniões do Zoom pelo Teams Room.",
        "Sincronizar com Yahoo Mail: O e-mail corporativo padrão do M365 é o Exchange Online."
      ],
      "dicaOuro": "Sair do Skype for Business para o Teams = Coexistence Mode."
    },
    "id": "ab900_q91"
  },
  {
    "text": "Sua empresa deseja criar um fluxo de agendamento online onde clientes externos possam acessar uma página web, selecionar qual consultor desejam contratar, escolher um horário livre de acordo com a agenda dele no Outlook e agendar a reunião de forma autônoma. Qual serviço atende a essa necessidade?",
    "options": [
      "Microsoft Planner",
      "Microsoft Sway",
      "Power BI Desktop",
      "Microsoft Bookings"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão foca na utilidade do Microsoft Bookings para serviços externos.",
      "papoReto": "O Microsoft Bookings serve para agendamento de consultas, serviços ou reuniões por clientes externos. Ele sincroniza de forma nativa com os calendários individuais do Outlook da equipe e envia confirmações automáticas por e-mail e SMS.",
      "respostaCerta": "Microsoft Bookings",
      "puloDoGato": "Pediu 'página para clientes externos agendarem horários baseados na agenda do Outlook'? A resposta na prova da Microsoft é o Bookings.",
      "cascasDeBanana": [
        "Microsoft Planner: Destinado a gerenciamento e distribuição de tarefas internas em quadros Kanban.",
        "Microsoft Sway: Utilizado para criar relatórios e boletins web interativos.",
        "Power BI Desktop: Aplicativo de desktop de modelagem de relatórios e painéis de dados."
      ],
      "dicaOuro": "Página de agendamento online para clientes = Microsoft Bookings."
    },
    "id": "ab900_q92"
  },
  {
    "text": "Sua equipe de projetos precisa organizar as tarefas diárias do setor usando quadros de estilo Kanban (onde cartões de tarefas são arrastados entre colunas como 'A Fazer', 'Em Progresso' e 'Concluído'). Qual serviço integrado do M365 atende a essa necessidade?",
    "options": [
      "Microsoft Planner",
      "Microsoft Bookings",
      "Microsoft Viva Goals",
      "SharePoint Hub"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão aborda o organizador de tarefas integrado Planner.",
      "papoReto": "O Microsoft Planner é o organizador visual padrão da suíte. Ele permite criar planos, dividir tarefas em baldes (buckets), atribuir responsáveis, definir prazos e acompanhar gráficos de status básicos, tudo integrado de forma nativa ao Teams.",
      "respostaCerta": "Microsoft Planner",
      "puloDoGato": "Organizar tarefas em equipe de forma visual, Kanban, colunas e cartões = Microsoft Planner. (Não confunda com o To Do, que é individual).",
      "cascasDeBanana": [
        "Microsoft Bookings: Focado em agendamento de horários para clientes.",
        "Microsoft Viva Goals: Ferramenta avançada para definição e acompanhamento de OKRs (objetivos de negócios e metas macro).",
        "SharePoint Hub: Estrutura de portal para unificar sites, não possui quadros Kanban de tarefas diárias de série."
      ],
      "dicaOuro": "Gerenciamento de tarefas em equipe (Kanban) = Microsoft Planner."
    },
    "id": "ab900_q93"
  },
  {
    "text": "Um colaborador precisa criar um relatório de bordo interativo e dinâmico sobre as metas da empresa para apresentar à diretoria de forma elegante, de modo que a apresentação pareça uma página web navegável e moderna, com suporte a vídeos incorporados. Qual aplicativo de produtividade é mais indicado?",
    "options": [
      "Microsoft Bookings",
      "Microsoft Sway",
      "Microsoft Planner",
      "Power BI Desktop"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão foca na ferramenta de apresentações dinâmicas Sway.",
      "papoReto": "O Microsoft Sway é uma alternativa moderna ao PowerPoint. Ele cria boletins informativos, relatórios anuais, portfólios e apresentações baseadas em web. Você insere o conteúdo e a IA do Sway cuida do layout dinâmico que se adapta a celulares e telas.",
      "respostaCerta": "Microsoft Sway",
      "puloDoGato": "Viu 'boletins informativos interativos', 'narrativa digital' ou 'apresentação baseada em página web responsiva'? A resposta é Sway.",
      "cascasDeBanana": [
        "Microsoft Bookings: Destinado a reserva de serviços por clientes externos.",
        "Microsoft Planner: Usado apenas para gestão e organização de tarefas em equipe.",
        "Power BI Desktop: Ferramenta de modelagem técnica e cálculos estatísticos de dados complexos de BI."
      ],
      "dicaOuro": "Apresentação estilo página web interativa = Microsoft Sway."
    },
    "id": "ab900_q94"
  },
  {
    "text": "Sua organização deseja implantar um portal de intranet social integrado ao Teams para que a diretoria publique comunicados corporativos oficiais, notícias e os funcionários possam interagir como em uma rede social interna. Qual produto da família Microsoft Viva atende a esse cenário?",
    "options": [
      "Viva Insights",
      "Viva Learning",
      "Viva Connections",
      "Viva Goals"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão aborda a família de experiência do funcionário (Employee Experience Platform) Microsoft Viva.",
      "papoReto": "O Microsoft Viva é dividido em vários módulos. O Viva Connections funciona como a 'porta de entrada' da intranet moderna no Teams. Ele traz as notícias do SharePoint da empresa, comunicações da liderança e atalhos corporativos úteis direto na interface de chat dos funcionários.",
      "respostaCerta": "Viva Connections",
      "puloDoGato": "Unificar notícias da empresa, comunicados e intranet social no Teams = Viva Connections.",
      "cascasDeBanana": [
        "Viva Insights: Focado em produtividade e bem-estar (mostra tempo de reuniões, sugere pausas para meditação).",
        "Viva Learning: Agrega cursos de capacitação e treinamentos em um único portal de aprendizado.",
        "Viva Goals: Gerencia metas estratégicas da empresa através do framework de OKRs."
      ],
      "dicaOuro": "Portal de notícias internas e comunicação da liderança = Viva Connections."
    },
    "id": "ab900_q95"
  },
  {
    "text": "Um gestor de equipe deseja analisar padrões de trabalho coletivos para reduzir a exaustão (burnout) dos colaboradores, identificando se a equipe está trabalhando muitas horas fora do expediente ou se reuniões em excesso estão consumindo o tempo de trabalho produtivo. Qual módulo do Microsoft Viva gera esses relatórios de produtividade e bem-estar?",
    "options": [
      "Viva Connections",
      "Viva Learning",
      "Viva Goals",
      "Viva Insights"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão foca nas análises de bem-estar do Viva Insights.",
      "papoReto": "O Viva Insights analisa dados de uso de e-mail e reuniões para gerar relatórios de bem-estar. Para o colaborador individual, ele sugere horários de foco protegidos. Para o gestor, ele exibe relatórios agregados e anônimos sobre sobrecarga de trabalho e risco de exaustão do time.",
      "respostaCerta": "Viva Insights",
      "puloDoGato": "Evitar burnout, reservar tempo de foco (focus time), hábitos de reunião e bem-estar = Viva Insights.",
      "cascasDeBanana": [
        "Viva Connections: Intranet social da liderança no Teams.",
        "Viva Learning: Hub de agregação de cursos e treinamentos de capacitação profissional.",
        "Viva Goals: Definição e controle de metas e OKRs."
      ],
      "dicaOuro": "Produtividade saudável, tempo de foco e prevenção de burnout = Viva Insights."
    },
    "id": "ab900_q96"
  },
  {
    "text": "Qual o principal objetivo do módulo Microsoft Viva Learning no ecossistema do Microsoft 365?",
    "options": [
      "Centralizar o acesso a cursos e treinamentos de fontes internas e externas (como LinkedIn Learning, Coursera) diretamente no Microsoft Teams.",
      "Gerenciar a criação de sites de notícias do SharePoint da organização.",
      "Configurar a lixeira de segurança de documentos de projetos locais.",
      "Realizar auditorias legais de conformidade regulatória nas caixas de e-mail."
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão aborda o hub de aprendizado Viva Learning.",
      "papoReto": "O Viva Learning traz o treinamento profissional para o fluxo de trabalho. Ele permite que os gestores distribuam cursos de fontes como LinkedIn Learning, e-learning próprio da empresa ou plataformas parceiras, permitindo que o colaborador aprenda sem sair do Teams.",
      "respostaCerta": "Centralizar o acesso a cursos e treinamentos de fontes internas e externas (como LinkedIn Learning, Coursera) diretamente no Microsoft Teams.",
      "puloDoGato": "Hub de cursos, capacitação de funcionários e treinamentos corporativos = Viva Learning.",
      "cascasDeBanana": [
        "Criar sites de notícias: Tarefa realizada pelo SharePoint, não pelo Viva Learning.",
        "Lixeira de segurança: Gerenciada no escopo do SharePoint e OneDrive.",
        "Auditorias legais: eDiscovery do Microsoft Purview é a ferramenta para isso."
      ],
      "dicaOuro": "Capacitação de colaboradores e cursos na mesma tela = Viva Learning."
    },
    "id": "ab900_q97"
  },
  {
    "text": "Qual serviço do Microsoft 365 permite que o próprio colaborador gerencie sua lista de tarefas individuais (To Do) e sincronize de forma automática suas pendências com os e-mails sinalizados (flagged emails) do Outlook?",
    "options": [
      "Microsoft Planner",
      "Microsoft To Do",
      "Microsoft Sway",
      "Microsoft Forms"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão foca na ferramenta de organização de pendências pessoais To Do.",
      "papoReto": "O Microsoft To Do é o organizador pessoal de tarefas. Ele exibe suas tarefas individuais de cada dia, as tarefas que foram atribuídas a você em planos do Microsoft Planner da equipe e e-mails que você marcou com sinalizador no Outlook, ajudando a organizar seu dia de trabalho.",
      "respostaCerta": "Microsoft To Do",
      "puloDoGato": "To Do = Gestão de tarefas individuais e e-mails sinalizados. Planner = Gestão de tarefas em equipe (Kanban). Ambos se integram de forma nativa.",
      "cascasDeBanana": [
        "Microsoft Planner: Gerenciamento coletivo e visual de times, não focado em sinalizadores e anotações pessoais rápidas de rotina.",
        "Microsoft Sway: Narrativa digital web para boletins, sem relação com tarefas diárias.",
        "Microsoft Forms: Utilizado para criação de formulários e testes digitais."
      ],
      "dicaOuro": "Minha lista de tarefas pessoais do dia + E-mails sinalizados = Microsoft To Do."
    },
    "id": "ab900_q98"
  },
  {
    "text": "Sua empresa deseja criar um portal de treinamentos interativo e moderno para integrar e treinar novos contratados. Para isso, os administradores de TI utilizam um recurso gratuito do SharePoint que oferece modelos prontos de sites de capacitação baseados em nuvem da Microsoft. Qual o nome desse recurso?",
    "options": [
      "Office Deployment Tool (ODT)",
      "Active Directory Federation Portal",
      "Caminhos de Aprendizado do Microsoft 365 (M365 Learning Pathways)",
      "Servidor local de mídias"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão aborda o recurso gratuito de adoção de treinamentos da Microsoft.",
      "papoReto": "O M365 Learning Pathways é um portal de aprendizagem sob demanda customizável baseado no SharePoint Online. Ele traz treinamentos e tutoriais oficiais da Microsoft atualizados de forma automática sobre como usar o Outlook, Word, Teams e SharePoint para facilitar o treinamento de adoção das ferramentas na empresa de forma gratuita.",
      "respostaCerta": "Caminhos de Aprendizado do Microsoft 365 (M365 Learning Pathways)",
      "puloDoGato": "Adoção de tecnologia e tutoriais de uso do M365 nativos e atualizados de fábrica = Learning Pathways.",
      "cascasDeBanana": [
        "Office Deployment Tool (ODT): Utilitário de linha de comando para administradores configurarem e instalarem o Office em larga escala nas máquinas locais de usuários.",
        "Active Directory Federation Portal: Portal técnico legado de validação de identidades locais com a nuvem.",
        "Servidor local de mídias: Solução física on-premises custosa e ineficiente."
      ],
      "dicaOuro": "Portal pronto do SharePoint de tutoriais oficiais do M365 = Learning Pathways."
    },
    "id": "ab900_q99"
  },
  {
    "text": "Sua organização tem um servidor Exchange Server local legado (on-premises) e está planejando migrar todas as caixas de correio para o Exchange Online na nuvem de uma só vez em um único fim de semana, por possuir apenas 70 usuários. Qual o método de migração recomendado?",
    "options": [
      "Migração preparada (Staged Migration)",
      "Migração híbrida mínima (Minimal Hybrid)",
      "Migração IMAP manual individual",
      "Migração de substituição rápida (Cutover Migration)"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão aborda estratégias de migração de correio eletrônico.",
      "papoReto": "A migração de substituição rápida (Cutover Migration) move todas as contas de e-mail de uma única vez para a nuvem. Ela é recomendada para pequenas organizações (limite técnico de 2.000 caixas de correio, mas comercialmente indicada para menos de 150 usuários) por ser simples e direta.",
      "respostaCerta": "Migração de substituição rápida (Cutover Migration)",
      "puloDoGato": "Pequena empresa + Migração rápida de e-mail local para nuvem de uma vez = Cutover Migration.",
      "cascasDeBanana": [
        "Migração preparada (Staged Migration): Recomendada para empresas com mais de 2.000 caixas locais de versões legadas do Exchange que migrarão em ondas graduais por meses.",
        "Migração híbrida mínima: Cria uma coexistência temporária curta de servidores, útil para acelerar o processo, mas exige configuração de topologia de conectores que podem ser evitados para apenas 70 usuários.",
        "Migração IMAP manual: Trabalhosa, lenta e exige reconfiguração manual de perfil máquina por máquina."
      ],
      "dicaOuro": "Migrar tudo de uma vez (empresa pequena) = Cutover Migration."
    },
    "id": "ab900_q100"
  },
  {
    "text": "Uma corporação com 10.000 caixas de correio locais precisa migrar para o Exchange Online, mas de forma gradual, necessitando manter usuários no servidor local conversando e compartilhando calendários com os usuários já migrados na nuvem por tempo indeterminado. Qual topologia de migração deve ser configurada?",
    "options": [
      "Migração Híbrida Completa (Full Hybrid Deployment)",
      "Migração de substituição rápida (Cutover Migration)",
      "Migração baseada no protocolo IMAP simples",
      "Exclusão total e recriação de contas limpas"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão foca na coexistência de longo prazo de servidores de e-mail (Arquitetura Híbrida).",
      "papoReto": "Quando a migração precisa ser em ondas longas e os usuários da nuvem precisam ver o status de disponibilidade do calendário (Free/Busy) de quem ainda está no servidor físico local, a única solução de coexistência avançada é o Híbrido Completo (Full Hybrid).",
      "respostaCerta": "Migração Híbrida Completa (Full Hybrid Deployment)",
      "puloDoGato": "Grande empresa + Coexistência longa local/nuvem + Compartilhamento rico de calendários (Free/Busy) = Full Hybrid.",
      "cascasDeBanana": [
        "Cutover Migration: Projetada para migrações em lote único e desativação imediata do servidor local, impraticável para 10.000 caixas.",
        "Migração IMAP: Não sincroniza calendários, contatos ou status de disponibilidade, apenas mensagens de texto de e-mail básicas.",
        "Exclusão e recriação limpa: Causaria perda total do histórico de e-mails corporativos, inviável comercialmente."
      ],
      "dicaOuro": "Coexistência de longo prazo e compartilhamento de calendários = Híbrido Completo (Full Hybrid)."
    },
    "id": "ab900_q101"
  },
  {
    "text": "Sua empresa deseja importar 5 TB de arquivos históricos salvos localmente em fitas e HDs antigos (.PST) para as caixas do Exchange Online na nuvem, mas a internet corporativa é lenta demais para transferir o volume por upload. Qual serviço da Microsoft resolve esse gargalo?",
    "options": [
      "Redirecionar e-mails via conectores IMAP",
      "Serviço de Importação do Office 365 via Envio Físico (Drive Shipping)",
      "Contratar uma VPN de rede local básica",
      "Dividir os arquivos .PST em disquetes"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão aborda a migração física de dados volumosos (Drive Shipping).",
      "papoReto": "Para migrações em massa onde a banda de internet é um obstáculo, a Microsoft oferece o Drive Shipping. A empresa copia os arquivos .PST para HDs criptografados com BitLocker e envia fisicamente pelo correio/transportadora para os datacenters da Microsoft. Lá, técnicos conectam o disco localmente à rede de alta velocidade da nuvem e sobem os dados.",
      "respostaCerta": "Serviço de Importação do Office 365 via Envio Físico (Drive Shipping)",
      "puloDoGato": "Mapeou 'migração de dados massivos' + 'internet local lenta' para o M365? O recurso de envio físico de discos é o Drive Shipping.",
      "cascasDeBanana": [
        "Conectores IMAP: Continuam dependendo de upload de rede pela internet local lenta.",
        "VPN básica: Apenas fecha uma conexão lógica criptografada de rede, sem acelerar fisicamente a velocidade máxima da internet local.",
        "Dividir em disquetes: Inviável para volumes corporativos modernos de 5 Terabytes."
      ],
      "dicaOuro": "Dados volumosos + Internet lenta = Envio físico de HDs (Drive Shipping)."
    },
    "id": "ab900_q102"
  },
  {
    "text": "Um administrador de TI precisa configurar o canal de atualização dos aplicativos do M365 (como Word e Excel) nos computadores dos colaboradores de modo que eles recebam novas funcionalidades de IA apenas duas vezes por ano, em janeiro e julho, para garantir a estabilidade dos plugins legados. Qual canal de atualização deve ser escolhido?",
    "options": [
      "Canal Atual (Current Channel)",
      "Canal Corporativo Mensal (Monthly Enterprise Channel)",
      "Canal Corporativo Semestral (Semi-Annual Enterprise Channel)",
      "Atualizações via Windows Insider apenas"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão foca na governança de atualizações de aplicativos do Office (Update Channels).",
      "papoReto": "Para computadores corporativos que exigem testes rígidos de compatibilidade de macros e plugins, o canal Semestral (Semi-Annual Enterprise Channel) é o ideal. Ele segura atualizações de recursos de software e as entrega compiladas apenas de 6 em 6 meses, recebendo apenas patches de segurança críticos mensalmente.",
      "respostaCerta": "Canal Corporativo Semestral (Semi-Annual Enterprise Channel)",
      "puloDoGato": "Current Channel = Na hora (mensal sem data). Monthly Enterprise = Uma vez por mês (segunda terça-feira). Semi-Annual = Duas vezes por ano (janeiro e julho).",
      "cascasDeBanana": [
        "Canal Atual: Entrega as novas ferramentas assim que ficam prontas na Microsoft, sem datas fixas de controle, podendo quebrar compatibilidades.",
        "Canal Mensal: Atualizações mensais que podem instabilizar plugins antigos com frequência indesejada.",
        "Windows Insider: Canal beta de testes de versões preliminares instáveis, não recomendado para computadores de produção de trabalho."
      ],
      "dicaOuro": "Estabilidade máxima para sistemas antigos = Canal Semestral (Semi-Annual Enterprise Channel)."
    },
    "id": "ab900_q103"
  },
  {
    "text": "Ao configurar a instalação automatizada do Microsoft 365 Apps em 500 computadores da empresa usando ferramentas de distribuição como o SCCM ou Intune, qual utilitário de linha de comando da Microsoft é usado para baixar e instalar os arquivos do Office com base em um arquivo XML de configuração?",
    "options": [
      "Azure Active Directory Connect console",
      "Power Platform Admin Console",
      "Microsoft Purview Connector",
      "Ferramenta de Implantação do Office (ODT / Office Deployment Tool)"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão aborda a implantação automatizada de aplicativos cliente (ODT).",
      "papoReto": "A Office Deployment Tool (ODT) é o utilitário oficial de implantação em massa. O administrador edita um arquivo XML contendo regras (quais apps instalar, idioma e canal de atualização) e roda o executável `setup.exe` por linha de comando para instalar de forma silenciosa para o usuário.",
      "respostaCerta": "Ferramenta de Implantação do Office (ODT / Office Deployment Tool)",
      "puloDoGato": "Instalação silenciosa em massa via linha de comando/XML do Office = ODT (Office Deployment Tool).",
      "cascasDeBanana": [
        "AD Connect Connect: Sincroniza identidades na nuvem, sem envolvimento na instalação de softwares instalados nas máquinas físicas.",
        "Power Platform Console: Administra fluxos e aplicativos de negócios sem código (Power Apps).",
        "Purview Connector: Configura conexões de conformidade de dados."
      ],
      "dicaOuro": "Instalar o Office em lote via XML configurável = ODT (Office Deployment Tool)."
    },
    "id": "ab900_q104"
  },
  {
    "text": "Sua empresa assinou o plano Microsoft 365 Enterprise E5. O administrador precisa abrir um chamado de suporte técnico crítico diretamente com a Microsoft porque o serviço do Exchange Online caiu globalmente. Qual o nível de suporte e tempo de resposta garantidos de fábrica para incidentes de severidade máxima (Severidade A) neste plano?",
    "options": [
      "Suporte 24 horas por dia, 7 dias por semana, com tempo de resposta inicial de 1 hora para incidentes críticos.",
      "Suporte apenas em horário comercial local, com resposta em até 3 dias úteis por e-mail.",
      "Suporte gratuito apenas via fóruns comunitários da internet.",
      "Nenhum suporte corporativo nativo está incluído sem contratação de contratos Premier adicionais."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão aborda as garantias de suporte corporativo básico do M365.",
      "papoReto": "Todos os planos comerciais e corporativos pagos do Microsoft 365 incluem suporte técnico corporativo global de fábrica. Para incidentes de severidade crítica (onde o serviço fica totalmente indisponível), a resposta garantida é 24x7 e o tempo de retorno padrão é de até 1 hora.",
      "respostaCerta": "Suporte 24 horas por dia, 7 dias por semana, com tempo de resposta inicial de 1 hora para incidentes críticos.",
      "puloDoGato": "M365 Comercial = Suporte técnico 24x7 incluído na mensalidade. Tempo de resposta para queda crítica = 1 hora.",
      "cascasDeBanana": [
        "Apenas horário comercial / 3 dias: Prazo inaceitável para contratos corporativos que afetam a operação diária de empresas.",
        "Fóruns comunitários: São canais de ajuda informal, planos corporativos têm suporte profissional prioritário direto do fabricante.",
        "Sem suporte corporativo incluído: O suporte básico está incluso em todas as assinaturas pagas comerciais."
      ],
      "dicaOuro": "Suporte corporativo M365 = 24x7 incluso. Resposta crítica = Até 1 hora."
    },
    "id": "ab900_q105"
  },
  {
    "text": "Qual o papel do Acordo de Nível de Serviço (SLA / Service Level Agreement) fornecido financeiramente pela Microsoft para os serviços de nuvem do Microsoft 365?",
    "options": [
      "Garantir que os usuários nunca esquecerão suas senhas de acesso.",
      "Garantir um percentual mínimo de uptime mensal (geralmente 99.9%), sob pena de créditos de compensação financeira na fatura caso o limite seja violado.",
      "Comprometer-se a realizar backups físicos diários gratuitos em HDs externos enviados à sede da empresa.",
      "Garantir que a internet corporativa local do cliente nunca cairá."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão foca na garantia operacional do SLA de nuvem pública.",
      "papoReto": "O SLA da Microsoft garante a disponibilidade (uptime) mensal dos serviços de nuvem de 99,9%. Caso a Microsoft falhe em entregar esse uptime (por quedas de datacenter globais provadas), a empresa tem direito a pleitear abatimentos e créditos financeiros diretos na fatura do mês.",
      "respostaCerta": "Garantir um percentual mínimo de uptime mensal (geralmente 99.9%), sob pena de créditos de compensação financeira na fatura caso o limite seja violado.",
      "puloDoGato": "SLA M365 = 99.9% de disponibilidade mínima garantida financeiramente. Se cair abaixo disso, a Microsoft paga de volta créditos na fatura.",
      "cascasDeBanana": [
        "Garantir que os usuários não esquecerão senhas: Não há tecnologia de IA capaz de controlar a memória humana.",
        "Enviar backups físicos: A Microsoft lida com redundância na nuvem, sem envio físico de HDs para escritórios locais de clientes.",
        "Garantir que a internet local não cairá: A conectividade local de internet é de responsabilidade do provedor de telecomunicações do cliente."
      ],
      "dicaOuro": "SLA Microsoft 365 = 99.9% de disponibilidade com compensação financeira na fatura."
    },
    "id": "ab900_q106"
  },
  {
    "text": "O que descreve melhor o painel 'Service Health' (Integridade do Serviço) presente no Microsoft 365 Admin Center?",
    "options": [
      "Uma ferramenta de varredura que mede a temperatura física dos servidores locais na empresa.",
      "Um portal para agendamento de consultas médicas e telemedicina para funcionários da TI.",
      "Um painel personalizado que mostra o status operacional detalhado e incidentes ativos dos serviços do M365 que impactam diretamente a sua assinatura.",
      "Uma lista de softwares de antivírus de terceiros disponíveis para compra."
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão aborda o portal Service Health para diagnóstico de problemas na nuvem.",
      "papoReto": "Diferente de uma página de status pública geral, o Service Health no Admin Center é customizado para o seu tenant. Ele exibe se há incidentes ativos nas caixas de e-mail dos seus usuários, manutenções preventivas programadas ou melhorias de estabilidade na sua região.",
      "respostaCerta": "Um painel personalizado que mostra o status operacional detalhado e incidentes ativos dos serviços do M365 que impactam diretamente a sua assinatura.",
      "puloDoGato": "Service Health = Status de saúde dos serviços do PROVEDOR de nuvem (Microsoft) aplicados ao seu tenant.",
      "cascasDeBanana": [
        "Temperatura de servidores locais: O M365 é SaaS na nuvem da Microsoft, ele não lê sensores de hardware local da empresa do cliente.",
        "Consultas médicas de funcionários: Trata-se de saúde lógica operacional do software M365, não saúde médica humana.",
        "Antivírus de terceiros: O painel é focado no status operacional dos próprios serviços nativos da Microsoft."
      ],
      "dicaOuro": "Problemas de instabilidade ou queda nos aplicativos Microsoft = Consultar painel Service Health."
    },
    "id": "ab900_q107"
  },
  {
    "text": "Sua empresa deseja receber notificações proativas por e-mail ou via Teams sempre que um novo aviso de mudança planejada ou lançamento de novas ferramentas for publicado na Central de Mensagens (Message Center). Como o administrador pode configurar isso de forma simples?",
    "options": [
      "Instalar um utilitário local do Windows Update em cada computador físico.",
      "Configurar uma regra de firewall física na rede corporativa local.",
      "Contratar uma consultoria de desenvolvimento de IA externa.",
      "Configurar preferências de notificação por e-mail diretamente no Message Center do Admin Center."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão foca na automação de alertas de anúncios da Microsoft.",
      "papoReto": "No Message Center do M365 Admin Center, existe uma opção nativa chamada 'Preferences' (Preferências). O administrador pode cadastrar os e-mails da equipe de TI para receber resumos semanais ou alertas imediatos sempre que avisos importantes sobre alterações forem postados.",
      "respostaCerta": "Configurar preferências de notificação por e-mail diretamente no Message Center do Admin Center.",
      "puloDoGato": "Centralizar e alertar novidades do tenant = Message Center > Preferências de Email.",
      "cascasDeBanana": [
        "Utilitário local do Windows Update: Windows Update lida com patches de segurança locais, não informativos web do Message Center.",
        "Regra de firewall física: Firewall atua bloqueando tráfego de rede física, sem relação com recebimento de newsletters da Microsoft.",
        "Consultoria externa de IA: O recurso é totalmente nativo e gratuito, sem necessidade de desenvolvimento customizado."
      ],
      "dicaOuro": "Assinar novidades e atualizações de ferramentas = Configurar e-mail de resumo no Message Center."
    },
    "id": "ab900_q108"
  },
  {
    "text": "Sua equipe de TI precisa de um relatório que analise a pontuação de conformidade e uso de tecnologia (Productivity Score) de toda a empresa, comparando a produtividade dos seus colaboradores com a média de mercado de empresas de mesmo porte. Qual portal de relatórios do M365 provê esse painel?",
    "options": [
      "Relatórios de uso (Productivity Score / Relatórios de Produtividade) no M365 Admin Center",
      "Portal do Azure DevOps de auditorias de código",
      "Centro de administração local do roteador físico da empresa",
      "Central de segurança do Windows 11 local"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Serviços Microsoft 365",
    "explanation": {
      "intro": "Esta questão foca no recurso de análise de adoção comparativo Productivity Score.",
      "papoReto": "O Productivity Score avalia a adoção tecnológica da empresa em 8 categorias básicas (colaboração, reuniões, mobilidade). Ele gera uma pontuação de 0 a 800 e compara isso com outras empresas semelhantes no mundo, ajudando a identificar se a empresa está usando bem a tecnologia comprada.",
      "respostaCerta": "Relatórios de uso (Productivity Score / Relatórios de Produtividade) no M365 Admin Center",
      "puloDoGato": "Comparar maturidade de adoção digital da empresa com concorrentes do mesmo tamanho = Painel de Productivity Score.",
      "cascasDeBanana": [
        "Azure DevOps: Usado para organizar ciclos de vida de desenvolvimento de software.",
        "Roteador físico: Controla tráfego de cabos e Wi-Fi de rede local do escritório físico.",
        "Segurança do Windows 11: Antivírus local da máquina do usuário."
      ],
      "dicaOuro": "Pontuar adoção tecnológica corporativa vs médias de mercado = Productivity Score."
    },
    "id": "ab900_q109"
  },
  {
    "text": "Sua empresa precisa classificar automaticamente todos os novos arquivos do Word que contenham a palavra 'Confidencial - Projeto Alfa' e aplicar criptografia de forma que apenas membros do grupo 'Diretoria' possam abrir o arquivo. Qual ferramenta do Microsoft Purview atende a essa necessidade?",
    "options": [
      "Políticas anti-malware do Microsoft Defender",
      "Rótulos de confidencialidade com rotulação automática (Auto-labeling sensitivity labels)",
      "Log de auditoria unificada do SharePoint",
      "Grupos de distribuição dinâmicos do Exchange"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda o uso do recurso de rotulação automática do Purview.",
      "papoReto": "Os Rótulos de Confidencialidade com rotulação automática (Auto-labeling sensitivity labels) varrem os documentos em tempo real. Se localizarem a palavra-chave configurada, aplicam o rótulo e as regras de criptografia especificadas para o grupo 'Diretoria' de forma automática.",
      "respostaCerta": "Rótulos de confidencialidade com rotulação automática (Auto-labeling sensitivity labels)",
      "puloDoGato": "Viu 'aplicar criptografia e classificação automaticamente com base em palavras-chave ou padrões'? A resposta no Purview é Auto-labeling (Rotulação Automática).",
      "cascasDeBanana": [
        "Políticas anti-malware: Protegem contra vírus e códigos maliciosos nas caixas de e-mail e computadores, sem gerenciar a classificação e criptografia lógica de documentos confidenciais.",
        "Log de auditoria: Apenas registra as ações passadas que ocorreram nos arquivos, sem proteger ou classificar o conteúdo de forma ativa.",
        "Grupos de distribuição dinâmicos: Apenas gerenciam listas de envio de e-mails corporativos em massa."
      ],
      "dicaOuro": "Classificar e criptografar arquivos sem intervenção do usuário = Rotulação Automática do Purview."
    },
    "id": "ab900_q110"
  },
  {
    "text": "Um colaborador de TI aplicou um rótulo de confidencialidade com criptografia RMS (Rights Management Service) a uma planilha de salários. Qual das seguintes ações o destinatário externo do e-mail que receber a planilha NÃO conseguirá realizar se a permissão configurada for 'Apenas Visualização' (View Only)?",
    "options": [
      "Abrir o arquivo no navegador web.",
      "Ler o conteúdo dos dados da planilha.",
      "Copiar trechos do texto e imprimir o documento.",
      "Verificar o nome das guias (sheets) existentes."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda o controle granular de direitos de uso (RMS) em rótulos do Purview.",
      "papoReto": "A criptografia RMS permite bloquear ações específicas do usuário mesmo após ele abrir o arquivo. Se a permissão for 'Apenas Visualização' (View Only), o usuário comum perde os botões de copiar dados (Ctrl+C), imprimir (Ctrl+P) ou tirar prints de tela em aplicativos Microsoft.",
      "respostaCerta": "Copiar trechos do texto e imprimir o documento.",
      "puloDoGato": "RMS vai muito além da senha. Ele diz O QUE o usuário autenticado pode fazer com o arquivo aberto (Ler sim, Copiar e Imprimir não).",
      "cascasDeBanana": [
        "Abrir o arquivo no navegador: O visualizador web do M365 autentica o usuário e abre a planilha de forma protegida para leitura.",
        "Ler o conteúdo dos dados: A visualização é permitida, o que é bloqueado são as ações destrutivas ou de exportação.",
        "Verificar o nome das guias: Informação visual que faz parte da leitura básica permitida."
      ],
      "dicaOuro": "Criptografia RMS = Controlar ações de ler, editar, copiar e imprimir de forma granular."
    },
    "id": "ab900_q111"
  },
  {
    "text": "Sua empresa deseja aplicar um rótulo de confidencialidade global em nível de contêiner. O que isso significa no contexto de governança de dados do Microsoft 365?",
    "options": [
      "Compactar arquivos grandes em formato .ZIP para economizar espaço de armazenamento nos servidores.",
      "Excluir sites abandonados do SharePoint após 90 dias de inatividade.",
      "Criptografar fisicamente os computadores locais de todos os gerentes da empresa.",
      "Aplicar políticas de compartilhamento externo e privacidade de forma automática a um site inteiro do SharePoint ou equipe do Teams."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda rótulos aplicados em contêineres lógicos (Sites e Grupos).",
      "papoReto": "Rótulos de confidencialidade podem ser aplicados a arquivos individuais ou ao 'contêiner' (site do SharePoint ou grupo do Teams). Ao aplicar a um site do SharePoint, por exemplo, o rótulo impede que arquivos desse site sejam compartilhados externamente ou força que o site seja privado.",
      "respostaCerta": "Aplicar políticas de compartilhamento externo e privacidade de forma automática a um site inteiro do SharePoint ou equipe do Teams.",
      "puloDoGato": "Rótulo de contêiner = Controlar o site inteiro ou equipe (privacidade pública/privada, acesso de dispositivos não gerenciados, compartilhamento externo).",
      "cascasDeBanana": [
        "Compactar em formato .ZIP: O M365 não realiza tarefas locais automáticas de compactação de arquivos para economizar espaço.",
        "Excluir sites abandonados: Tarefa realizada por políticas de expiração de Grupos M365, não por rótulos de confidencialidade.",
        "Criptografar computadores locais: Criptografia de discos rígidos físicos de PCs é feita pelo BitLocker do Windows, não por rótulos SaaS."
      ],
      "dicaOuro": "Rótulo de Contêiner = Segurança no nível do Site do SharePoint ou Equipe do Teams."
    },
    "id": "ab900_q112"
  },
  {
    "text": "Um administrador quer saber em qual portal web os rótulos de confidencialidade devem ser criados e publicados para os usuários finais do Microsoft 365. Qual a resposta correta?",
    "options": [
      "Portal de conformidade do Microsoft Purview (Microsoft Purview compliance portal)",
      "Centro de administração do Microsoft Entra ID",
      "Centro de administração do Teams admin center",
      "Portal do Azure DevOps de engenharia"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda o centro administrativo correto para conformidade e rótulos.",
      "papoReto": "Toda a configuração de rótulos de confidencialidade, políticas de proteção de informações, DLP e conformidade de dados é centralizada no Portal de Conformidade do Microsoft Purview (compliance.microsoft.com).",
      "respostaCerta": "Portal de conformidade do Microsoft Purview (Microsoft Purview compliance portal)",
      "puloDoGato": "Se envolver 'conformidade', 'DLP', 'Information Protection', 'retenção' ou 'rótulos', o painel correto é o Microsoft Purview.",
      "cascasDeBanana": [
        "Entra ID: Administra contas, grupos e MFA, sem painéis de criação de rótulos de documentos.",
        "Teams admin center: Focado em voz, vídeo e chamadas no Teams.",
        "Azure DevOps: Plataforma de engenharia para repositórios de códigos Git."
      ],
      "dicaOuro": "Rótulos de Confidencialidade e Proteção de Dados = Portal do Microsoft Purview."
    },
    "id": "ab900_q113"
  },
  {
    "text": "Sua empresa deseja aplicar uma marca d'água visual contendo o texto 'Confidencial' no fundo de todos os documentos que forem classificados com o rótulo de segurança nível 3. Qual recurso do Purview gerencia essa marcação?",
    "options": [
      "Criptografia nativa do Azure Key Vault",
      "Marcação de conteúdo (Content marking)",
      "Políticas de Prevenção contra Perda de Dados (DLP)",
      "Acesso Condicional baseado em localização"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda a funcionalidade de marcação de conteúdo associada a rótulos.",
      "papoReto": "Ao configurar um rótulo de confidencialidade no Purview, você pode ativar a 'Marcação de conteúdo' (Content marking). Isso insere marcas d'água, cabeçalhos ou rodapés personalizados contendo textos de aviso diretamente nos arquivos.",
      "respostaCerta": "Marcação de conteúdo (Content marking)",
      "puloDoGato": "Marca d'água, cabeçalho e rodapé em documentos = Content marking (Marcação de conteúdo) nas opções de Rótulos de Confidencialidade.",
      "cascasDeBanana": [
        "Key Vault: Guarda chaves de APIs corporativas, sem atuar na interface visual do Word.",
        "DLP: Evita o vazamento enviando alertas e bloqueando uploads, mas não adiciona marca d'água física nos arquivos.",
        "Acesso Condicional: Libera ou bloqueia logins em computadores, sem contato com o conteúdo de texto dos arquivos."
      ],
      "dicaOuro": "Marcas d'água visuais automáticas nos arquivos = Content marking."
    },
    "id": "ab900_q114"
  },
  {
    "text": "O que descreve melhor o recurso 'Trainable Classifiers' (Classificadores Treináveis) no contexto de classificação de dados do Microsoft Purview?",
    "options": [
      "Cursos online em vídeo integrados no painel do Microsoft Viva para ensinar administradores sobre segurança.",
      "Filtros de rede locais configurados nos switches físicos da empresa para redirecionar dados.",
      "Modelos de inteligência artificial treinados pela Microsoft ou pela organização para classificar documentos com base em categorias conceituais, como currículos, contratos ou assédio.",
      "Ferramenta de testes manuais para que desenvolvedores depurem o código de aplicativos de tela."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda a classificação avançada de dados baseada em Machine Learning.",
      "papoReto": "Diferente de buscar por palavras exatas (como CPF), os Classificadores Treináveis (Trainable Classifiers) usam machine learning. O sistema analisa a estrutura do documento e compreende se ele se parece com um 'Contrato de Parceria', um 'Currículo de RH' ou uma mensagem de 'Código de Conduta Violação', classificando o arquivo pelo contexto.",
      "respostaCerta": "Modelos de inteligência artificial treinados pela Microsoft ou pela organização para classificar documentos com base em categorias conceituais, como currículos, contratos ou assédio.",
      "puloDoGato": "Pesquisa sem palavras-chave rígidas / baseada em inteligência artificial e aprendizado de máquina = Trainable Classifiers do Purview.",
      "cascasDeBanana": [
        "Cursos online no Viva: Viva Learning é para capacitação de pessoas, não classificação lógica de dados de conformidade.",
        "Filtros de rede nos switches: Swicthes trabalham na camada física e lógica de rede IP local, sem inteligência de análise de texto corporativo de documentos.",
        "Ferramenta de testes de código: Azure DevOps e App Center são voltados para depurações de códigos de softwares."
      ],
      "dicaOuro": "Classificação baseada em contexto e inteligência artificial = Classificadores Treináveis."
    },
    "id": "ab900_q115"
  },
  {
    "text": "Sua empresa deseja rastrear quais arquivos rotulados como 'Confidencial' foram baixados por colaboradores nos últimos 7 dias e em quais dispositivos foram abertos. Qual ferramenta do Microsoft Purview fornece essa auditoria visual de eventos?",
    "options": [
      "Message Center",
      "Log de eventos do Windows local",
      "Azure Key Vault Console",
      "Gerenciador de Atividades (Activity Explorer)"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda o monitoramento visual de rotulação e atividades (Activity Explorer).",
      "papoReto": "O Gerenciador de Atividades (Activity Explorer) no Purview é uma ferramenta de auditoria visual. Ele exibe em gráficos interativos todas as ações feitas com rótulos de confidencialidade e regras de DLP (como quem alterou o rótulo de um arquivo ou quem compartilhou externamente).",
      "respostaCerta": "Gerenciador de Atividades (Activity Explorer)",
      "puloDoGato": "Quer ver o histórico de ações e o comportamento de rotulação de arquivos na empresa de forma gráfica? O painel é o Activity Explorer.",
      "cascasDeBanana": [
        "Message Center: Informativo técnico do admin center sobre novos recursos na nuvem da Microsoft.",
        "Log de eventos do Windows local: Monitora travamentos e inicialização de serviços no sistema operacional local da máquina.",
        "Azure Key Vault: Serviço técnico de guarda de chaves criptográficas de bancos de dados."
      ],
      "dicaOuro": "Histórico gráfico de aplicação e uso de rótulos = Activity Explorer."
    },
    "id": "ab900_q116"
  },
  {
    "text": "Qual o papel do 'Content Explorer' (Gerenciador de Conteúdo) na administração de dados do Microsoft Purview?",
    "options": [
      "Permitir que administradores com permissões específicas visualizem todos os arquivos e dados confidenciais ativos do tenant e onde estão salvos.",
      "Criar apresentações web interativas dinâmicas baseadas na internet pública.",
      "Bloquear o recebimento de e-mails contendo spams no Exchange Online.",
      "Migrar servidores físicos locais de bancos de dados para nuvem do Azure."
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda o Content Explorer e a visibilidade de dados confidenciais.",
      "papoReto": "O Content Explorer (Gerenciador de Conteúdo) permite que o administrador de compliance (com as permissões adequadas de eDiscovery ou Auditoria) veja de fato quais arquivos contêm dados protegidos (como CPFs) no SharePoint/OneDrive, ajudando a identificar riscos de exfiltração de dados (oversharing).",
      "respostaCerta": "Permitir que administradores com permissões específicas visualizem todos os arquivos e dados confidenciais ativos do tenant e onde estão salvos.",
      "puloDoGato": "Content Explorer = Ver O CONTEÚDO real e onde estão salvos os arquivos com dados confidenciais. Activity Explorer = Ver as AÇÕES/ATIVIDADES feitas com os rótulos.",
      "cascasDeBanana": [
        "Criar apresentações web: Isso é função do Microsoft Sway.",
        "Bloquear spams: Executado pelas políticas de anti-spam do Exchange Online Protection (EOP).",
        "Migrar servidores físicos: Utiliza ferramentas de migração como o Azure Migrate."
      ],
      "dicaOuro": "Ver onde estão e o que têm os arquivos com dados confidenciais = Content Explorer."
    },
    "id": "ab900_q117"
  },
  {
    "text": "Para que os usuários finais consigam visualizar e aplicar os Rótulos de Confidencialidade nos aplicativos como Word, Excel e Outlook, o que o administrador de TI deve criar e implantar no Microsoft Purview após criar os rótulos?",
    "options": [
      "Políticas de Acesso Condicional baseadas em senhas",
      "Políticas de rótulo (Sensitivity label policies)",
      "Grupos de distribuição dinâmica no Teams",
      "Políticas de atualizações de patches locais do Windows"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda o fluxo de publicação de rótulos do Purview.",
      "papoReto": "Criar o rótulo de confidencialidade é apenas o primeiro passo. Para que ele apareça na barra de ferramentas dos usuários finais nos aplicativos Office, o administrador deve publicar o rótulo por meio de uma Política de Rótulo (Sensitivity Label Policy).",
      "respostaCerta": "Políticas de rótulo (Sensitivity label policies)",
      "puloDoGato": "Rótulo criado sem Sensitivity Label Policy associada fica invisível para os usuários finais.",
      "cascasDeBanana": [
        "Políticas de Acesso Condicional: Tratam do login e autenticação multifator no Entra ID.",
        "Grupos de distribuição dinâmica: Listas de envio de e-mails ou mensagens de chat em grupo.",
        "Patches locais do Windows: Configurados pelo Windows Update ou Intune para atualizações do sistema."
      ],
      "dicaOuro": "Exibir rótulos criados para os funcionários = Criar uma Política de Rótulo (Label Policy)."
    },
    "id": "ab900_q118"
  },
  {
    "text": "Sua empresa deseja exigir que todos os colaboradores insiram uma justificativa de negócios válida por escrito caso decidam rebaixar o nível de um rótulo de confidencialidade (ex: mudar de 'Altamente Confidencial' para 'Público'). Onde essa regra de justificativa deve ser configurada?",
    "options": [
      "Nas configurações de rede local do Active Directory local",
      "No console do painel do Azure Monitor de logs",
      "Nas opções de configuração de uma Política de Rótulo (Sensitivity Label Policy) no Purview",
      "Nas configurações de perfil de faturamento da assinatura"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda a governança de rebaixamento de rótulos de segurança.",
      "papoReto": "Ao publicar rótulos por meio de uma Sensitivity Label Policy, o administrador pode ativar a opção 'Exigir que os usuários forneçam uma justificativa para remover um rótulo ou reduzir a classificação'. Isso inibe a remoção injustificada de proteções de documentos críticos.",
      "respostaCerta": "Nas opções de configuração de uma Política de Rótulo (Sensitivity Label Policy) no Purview",
      "puloDoGato": "Justificativa obrigatória para remover ou rebaixar rótulos é uma opção de compliance ativada nas Sensitivity Label Policies.",
      "cascasDeBanana": [
        "AD local: Gerencia infraestruturas locais, sem contato com políticas de rotulação de aplicativos SaaS na nuvem.",
        "Azure Monitor: Apenas coleta telemetria de funcionamento, sem gerenciar formulários de interface de documentos.",
        "Perfil de faturamento: Lida com cobrança e cartões de pagamento corporativos."
      ],
      "dicaOuro": "Forçar justificativa de negócios para diminuir a segurança do arquivo = Configuração de Sensitivity Label Policy."
    },
    "id": "ab900_q119"
  },
  {
    "text": "O que descreve melhor o recurso 'Double Key Encryption' (DKE - Criptografia de Chave Dupla) disponível para clientes com requisitos rígidos de compliance militar no Microsoft Purview?",
    "options": [
      "Processo de inserção de duas senhas idênticas ao salvar um documento Word comum.",
      "Algoritmo de compressão de arquivos que reduz o tamanho do anexo do e-mail pela metade.",
      "Conexão VPN de redundância dupla de cabos de fibra óptica de operadoras locais.",
      "Um método de criptografia onde duas chaves são usadas para proteger o arquivo: uma mantida de forma segura pela Microsoft na nuvem e outra sob o controle exclusivo e físico do cliente localmente."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda a segurança de chaves avançada (DKE).",
      "papoReto": "A Criptografia de Chave Dupla (DKE) garante soberania total de dados. A Microsoft criptografa o arquivo com uma chave na nuvem, mas o arquivo só pode ser descriptografado com uma segunda chave mantida fisicamente nos servidores locais do próprio cliente. Sem a autorização local do cliente, nem a Microsoft consegue ler o conteúdo.",
      "respostaCerta": "Um método de criptografia onde duas chaves são usadas para proteger o arquivo: uma mantida de forma segura pela Microsoft na nuvem e outra sob o controle exclusivo e físico do cliente localmente.",
      "puloDoGato": "DKE = Chave da Microsoft + Chave do Cliente. Protege dados de nível ultra-secreto contra qualquer espionagem ou intimação judicial em datacenters públicos.",
      "cascasDeBanana": [
        "Digitar duas senhas comuns: O DKE lida com chaves criptográficas lógicas integradas, sem exigir que o usuário digite senhas repetitivas.",
        "Compressão de arquivos: Criptografia visa segurança, não redução de consumo de espaço de arquivos.",
        "VPN de redundância: Infraestrutura física de cabos de rede local, fora do escopo de criptografia lógica SaaS."
      ],
      "dicaOuro": "Criptografia máxima de dados com chave local própria do cliente = Double Key Encryption (DKE)."
    },
    "id": "ab900_q120"
  },
  {
    "text": "Ao aplicar um rótulo de confidencialidade a um arquivo do Excel, o proprietário percebe que ele pode definir datas de expiração automáticas para o acesso a esse arquivo. O que acontece quando a expiração do rótulo é atingida?",
    "options": [
      "O usuário não consegue mais abrir o arquivo criptografado, perdendo o acesso à leitura dos dados.",
      "O arquivo é deletado de forma permanente e irreversível do disco rígido.",
      "A senha do arquivo é alterada automaticamente para 'admin123'.",
      "O arquivo é enviado por e-mail para todos os contatos do Outlook do autor."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão foca na validade temporal de criptografias de arquivos.",
      "papoReto": "Ao rotular um documento crítico com expiração ativa, o Purview RMS valida as credenciais do usuário online. Se a data limite configurada expirar, o visualizador do M365 barra o acesso, informando que a permissão de leitura expirou.",
      "respostaCerta": "O usuário não consegue mais abrir o arquivo criptografado, perdendo o acesso à leitura dos dados.",
      "puloDoGato": "A expiração bloqueia o acesso lógico de descriptografia, mas preserva a integridade física do arquivo no local original (o arquivo não some do disco).",
      "cascasDeBanana": [
        "Deletado permanentemente: Exclusões são geridas por retenções e lixeiras, não por expiração lógica de chaves RMS.",
        "Senha alterada para admin123: Criptografias profissionais não utilizam senhas fracas padrão legadas.",
        "Enviado por e-mail: Causaria vazamentos graves de dados confidenciais."
      ],
      "dicaOuro": "Expiração de rótulo de confidencialidade = Bloqueio definitivo de leitura do arquivo após a data limite."
    },
    "id": "ab900_q121"
  },
  {
    "text": "Sua empresa deseja classificar arquivos que contenham dados confidenciais baseando-se em formulários e layouts de documentos pré-definidos (ex: o layout exato do formulário de admissão do RH da empresa). Qual recurso do Microsoft Purview permite carregar um arquivo modelo para ensinar o sistema a identificar documentos idênticos?",
    "options": [
      "Criação de expressões regulares simples de texto",
      "Impressão digital de documento (Document Fingerprinting)",
      "Log de conexões do Active Directory",
      "Configurar políticas de firewall físicas locais"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda a técnica de correspondência de padrões complexos Document Fingerprinting.",
      "papoReto": "O Document Fingerprinting (Impressão Digital de Documentos) converte um formulário padrão em um modelo de classificação. O Purview analisa o layout e, sempre que localizar um arquivo preenchido que siga a mesma estrutura física de formulário, aplica as restrições de conformidade de DLP configuradas.",
      "respostaCerta": "Impressão digital de documento (Document Fingerprinting)",
      "puloDoGato": "Formulários fixos, questionários estruturados ou layouts de documentos modelo na segurança M365 = Document Fingerprinting.",
      "cascasDeBanana": [
        "Expressões regulares: Úteis para encontrar strings numéricas variáveis (como padrões de cartões de crédito), mas não reconhecem layouts físicos de papéis.",
        "Log de conexões do AD: Apenas audita IPs e horários de logins dos funcionários corporativos.",
        "Firewall física local: Filtra tráfegos de redes de pacotes de dados, sem ler layouts de formulários do Word."
      ],
      "dicaOuro": "Reconhecer e classificar arquivos com base em um formulário padrão de modelo = Document Fingerprinting."
    },
    "id": "ab900_q122"
  },
  {
    "text": "Ao configurar a criptografia RMS em um rótulo de confidencialidade no Purview, qual a diferença prática entre as opções de permissões 'Definir agora' (Assign permissions now) e 'Permitir que os usuários definam' (Let users decide)?",
    "options": [
      "Definir agora é gratuito; Permitir que os usuários definam cobra licenças adicionais pagas.",
      "Definir agora só funciona no Outlook; Permitir que os usuários definam só funciona no Word.",
      "Definir agora: o administrador escolhe quem acessa de antemão. Permitir que os usuários definam: o colaborador escolhe na hora de salvar o arquivo.",
      "Não há diferença na prática de conformidade de criptografia."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda a flexibilidade de atribuição de permissões RMS.",
      "papoReto": "Na opção 'Definir agora' (Assign permissions now), o administrador de TI define as permissões (ex: Grupo X lê, Grupo Y edita). Na opção 'Let users decide', o colaborador escolhe no Outlook ou Word quem pode ver e o que pode fazer com o arquivo no momento em que aplica o rótulo.",
      "respostaCerta": "Definir agora: o administrador escolhe quem acessa de antemão. Permitir que os usuários definam: o colaborador escolhe na hora de salvar o arquivo.",
      "puloDoGato": "'Assign now' garante governança estrita e padronizada. 'Let users decide' dá flexibilidade para envios manuais dinâmicos confidenciais a parceiros externos.",
      "cascasDeBanana": [
        "Carga de custos: O licenciamento é baseado nos planos adquiridos, sem tarifas extras baseadas na forma de atribuição lógica de chaves.",
        "Restrição a aplicativos: Ambos os recursos funcionam em toda a suíte Office (Outlook, Word, Excel, PowerPoint).",
        "Sem diferença de conformidade: A flexibilidade operacional de governança e controle de segurança de arquivos é completamente diferente."
      ],
      "dicaOuro": "Definir agora = TI manda. Permitir decidir = Usuário escolhe destinatários e permissões."
    },
    "id": "ab900_q123"
  },
  {
    "text": "Sua empresa deseja usar o recurso de Rótulos de Confidencialidade para criptografar arquivos confidenciais do Word. Qual a principal vantagem de usar criptografia RMS integrada em vez de apenas definir uma senha comum para abrir o arquivo no Word?",
    "options": [
      "A criptografia RMS reduz o tamanho físico de armazenamento do arquivo em até 90% no OneDrive.",
      "O RMS dispensa a necessidade de ter internet ativa no computador para a verificação inicial de chaves.",
      "O RMS impede o envio do documento como anexo de e-mail de forma irreversível.",
      "A criptografia RMS protege o arquivo de forma persistente baseando-se na autenticação da conta de e-mail do usuário no Entra ID, impedindo que pessoas não autorizadas acessem mesmo se tiverem o arquivo físico."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda a segurança e superioridade do RMS sobre senhas simples.",
      "papoReto": "Senhas simples podem ser compartilhadas ou quebradas por softwares de força bruta. Com o RMS, a segurança é baseada na identidade (login no Entra ID). Se alguém de fora roubar o arquivo físico (pendrive) e tentar abrir, o Office pedirá autenticação no tenant e bloqueará o acesso.",
      "respostaCerta": "A criptografia RMS protege o arquivo de forma persistente baseando-se na autenticação da conta de e-mail do usuário no Entra ID, impedindo que pessoas não autorizadas acessem mesmo se tiverem o arquivo físico.",
      "puloDoGato": "RMS = Proteção persistente baseada em identidade. Se o funcionário vazar o arquivo por e-mail para terceiros, o arquivo continuará ilegível para quem estiver fora das permissões.",
      "cascasDeBanana": [
        "Reduzir tamanho do arquivo: Criptografia adiciona metadados lógicos de cabeçalho, podendo aumentar levemente o tamanho do arquivo, nunca diminuir.",
        "Dispensa internet para validação: O RMS exige conexão periódica de internet para autenticar as identidades dos usuários nas APIs de conformidade da Microsoft.",
        "Impede o envio como anexo: O arquivo pode ser anexado, o receptor apenas não conseguirá descriptografar se não estiver listado nas permissões."
      ],
      "dicaOuro": "RMS = Proteção baseada em logins autenticados no Microsoft Entra ID (sem senhas estáticas compartilháveis)."
    },
    "id": "ab900_q124"
  },
  {
    "text": "Uma política de DLP (Prevenção contra Perda de Dados) no M365 detectou um número de cartão de crédito sendo enviado para um destinatário externo. Qual recurso exibe um aviso em tempo real na tela do usuário no Outlook ou Teams alertando sobre a infração de segurança antes do envio?",
    "options": [
      "Dicas de Política (Policy Tips)",
      "Dicas de Email (MailTips)",
      "Acesso Condicional baseado em localidade",
      "Quarentena administrativa do Defender"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão foca na notificação preventiva de conformidade do DLP (Policy Tips).",
      "papoReto": "O Policy Tip é a versão do DLP para as dicas do Exchange. Enquanto o usuário escreve uma mensagem ou anexa um arquivo no Teams/Outlook contendo dados confidenciais, um banner informativo avisa que a ação viola as políticas de DLP da organização.",
      "respostaCerta": "Dicas de Política (Policy Tips)",
      "puloDoGato": "MailTips = Exchange (mensagens cheias, férias, destinatários externos). Policy Tips = DLP (violação de conformidade de dados confidenciais detectada no arquivo).",
      "cascasDeBanana": [
        "MailTips: Avisos gerais de e-mail no Exchange, sem capacidade de analisar violações estruturadas de conformidade de DLP de cartões de crédito.",
        "Acesso Condicional: Bloqueia logins gerais, sem atuação em banners informativos do Word/Outlook.",
        "Quarentena: Onde e-mails com vírus ficam retidos na administração, não atua de forma preventiva antes do clique."
      ],
      "dicaOuro": "Aviso preventivo de violação de dados do DLP = Policy Tips."
    },
    "id": "ab900_q125"
  },
  {
    "text": "Sua empresa deseja configurar regras de DLP de modo que, se um colaborador precisar enviar informações confidenciais de forma legítima para um parceiro homologado, ele possa fazê-lo justificando o motivo de negócio diretamente pela dica de política. Qual a nomenclatura desse recurso?",
    "options": [
      "Acesso Condicional sob demanda",
      "Substituição de política pelo usuário (User override)",
      "Delegação de caixas de correio RMS",
      "Assinatura digital padrão RSA"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda o controle flexível de substituição de regras pelo usuário (User Override).",
      "papoReto": "O User Override permite flexibilizar a segurança sem travar a operação da empresa. Ao detectar o envio de dados sensíveis, a regra de DLP avisa o usuário (Policy Tip). O usuário pode clicar e selecionar 'Substituir política', digitando a justificativa técnica. O envio é liberado e a justificativa é salva nos logs da TI.",
      "respostaCerta": "Substituição de política pelo usuário (User override)",
      "puloDoGato": "User Override = Permitir envio mediante justificativa de negócios. A ação é registrada no log de auditoria unificada do Purview.",
      "cascasDeBanana": [
        "Acesso Condicional: Lida com segurança de acesso ao tenant, sem controle granular de botões de justificativa de e-mails.",
        "Delegação de caixas: Concede direitos de uso e leitura de contas de e-mail.",
        "Assinatura digital: Prova a autoria do envio de e-mails através de chaves criptográficas."
      ],
      "dicaOuro": "Liberar e-mail bloqueado por DLP mediante justificativa = Ativar recurso de User Override."
    },
    "id": "ab900_q126"
  },
  {
    "text": "Qual das seguintes opções representa uma 'Condição' típica a ser configurada pelo administrador de TI ao criar uma nova regra de Prevenção contra Perda de Dados (DLP) no Microsoft Purview?",
    "options": [
      "Bloquear o acesso dos usuários ao arquivo de forma definitiva.",
      "Enviar uma notificação por e-mail para o administrador de conformidade.",
      "O conteúdo contém informações confidenciais (ex: Número de passaporte do Brasil).",
      "Excluir o site do SharePoint onde o arquivo estava salvo."
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão foca na estrutura lógica de regras de DLP (Condições vs Ações).",
      "papoReto": "Regras de DLP funcionam com a lógica: Se (Condição), Então (Ação). As 'Condições' definem o gatilho da regra, como verificar se o arquivo contém dados sensíveis (SIT), se foi compartilhado externamente ou se o autor pertence a um grupo de risco.",
      "respostaCerta": "O conteúdo contém informações confidenciais (ex: Número de passaporte do Brasil).",
      "puloDoGato": "Condição = O que ativa a regra (ex: Contém CPF e o receptor é externo). Ação = O que o sistema faz (ex: Bloqueia, Alerta, Quarentena).",
      "cascasDeBanana": [
        "Bloquear o acesso: Trata-se de uma 'Ação' que o sistema toma quando a condição é atendida, não de um gatilho.",
        "Enviar notificação: Também é uma 'Ação' administrativa configurada após a validação lógica.",
        "Excluir o site: Ações de DLP atuam nos arquivos lógicos e compartilhamentos, sem realizar destruições físicas de sites estruturados de série."
      ],
      "dicaOuro": "Condição de DLP = O gatilho de busca (O que ativa a regra de segurança)."
    },
    "id": "ab900_q127"
  },
  {
    "text": "Sua empresa deseja criar um tipo de informação confidencial (SIT - Sensitive Information Type) customizado para detectar números de matrículas de funcionários que seguem o padrão de texto fixo de duas letras maiúsculas seguidas por 5 números (ex: MT12345). Qual método de detecção do Purview deve ser configurado?",
    "options": [
      "Classificadores treináveis de machine learning.",
      "Acesso Condicional baseado no local de login.",
      "Criação de marcas d'água no Purview.",
      "Uso de expressões regulares (Regular Expressions / RegEx) associadas a palavras-chave secundárias."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda a customização de tipos de informações confidenciais (SIT).",
      "papoReto": "Para identificar padrões numéricos ou alfanuméricos específicos da sua empresa (como matrículas ou formatos de contratos customizados), os administradores de conformidade criam um SIT customizado usando expressões regulares (RegEx) no portal do Purview.",
      "respostaCerta": "Uso de expressões regulares (Regular Expressions / RegEx) associadas a palavras-chave secundárias.",
      "puloDoGato": "Padrão de texto fixo matemático (letras, números, traços) na conformidade Microsoft = Expressão Regular (RegEx).",
      "cascasDeBanana": [
        "Classificadores treináveis: Úteis para categorizar tipos de documentos inteiros (ex: currículos), não para buscar strings curtas com formatos exatos matemáticos de matrículas.",
        "Acesso Condicional: Lida com controle de acessos globais de rede e login.",
        "Marcas d'água: São impressões visuais em arquivos, não têm capacidade de processar buscas automáticas."
      ],
      "dicaOuro": "Customizar busca de padrões lógicos de texto (letras e números) = Expressões Regulares (RegEx) no Purview."
    },
    "id": "ab900_q128"
  },
  {
    "text": "Ao criar uma regra de DLP no Microsoft Purview, qual 'Ação' (Action) padrão o administrador pode escolher para impedir que o e-mail que violou as regras de segurança chegue ao destinatário externo?",
    "options": [
      "Bloquear o acesso ao arquivo e reter a mensagem de e-mail (Block access and restrict the email message).",
      "Remover a licença do Microsoft 365 do usuário de forma automática na mesma hora.",
      "Apagar o arquivo do disco rígido local do remetente sem confirmação.",
      "Desligar o switch físico de rede corporativa local."
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão foca nas ações de mitigação executadas pelo DLP.",
      "papoReto": "A ação principal do DLP contra vazamentos externos é o bloqueio. O sistema impede o envio do e-mail (rejeita a mensagem com uma notificação de erro - NDR) ou remove as permissões de compartilhamento externo do link do arquivo no SharePoint/OneDrive.",
      "respostaCerta": "Bloquear o acesso ao arquivo e reter a mensagem de e-mail (Block access and restrict the email message).",
      "puloDoGato": "Ação clássica de DLP na prova: Bloquear (Block) ou Restringir (Restrict).",
      "cascasDeBanana": [
        "Remover a licença do usuário: Processo de faturamento administrativo, nunca feito de forma automática por violação de e-mail de série.",
        "Apagar o arquivo do disco: O DLP lida com controle de fluxos de compartilhamento, sem destruir arquivos do disco rígido local de PCs corporativos de forma intrusiva.",
        "Desligar rede local: Viola a continuidade de negócios de todos os outros departamentos."
      ],
      "dicaOuro": "Gatilho de DLP ativado = Bloquear o compartilhamento ou reter a mensagem externa."
    },
    "id": "ab900_q129"
  },
  {
    "text": "Sua empresa deseja evitar o compartilhamento inadequado de dados confidenciais por meio do Microsoft Teams. Como as políticas de DLP protegem mensagens de chat e conversas em canais em tempo real?",
    "options": [
      "O chat do Teams é desativado permanentemente para toda a empresa sempre que alguém digitar a palavra 'senha'.",
      "As mensagens são verificadas em tempo real; se dados sensíveis forem detectados, a mensagem é bloqueada e substituída por um aviso de segurança para os destinatários.",
      "A IA do Teams altera o texto incorreto automaticamente para piadas inofensivas.",
      "O Teams grava o áudio do microfone do usuário para validar conversas faladas de forma contínua."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda o DLP aplicado ao Microsoft Teams.",
      "papoReto": "O DLP para Teams varre as mensagens de chat e canais. Se um usuário digitar um número de cartão de crédito no chat, a mensagem é oculta na mesma hora para os outros participantes e um banner aparece para o remetente informando: 'Esta mensagem foi bloqueada devido a políticas corporativas'.",
      "respostaCerta": "As mensagens são verificadas em tempo real; se dados sensíveis forem detectados, a mensagem é bloqueada e substituída por um aviso de segurança para os destinatários.",
      "puloDoGato": "DLP no Teams = Bloquear mensagens e arquivos de chat confidenciais na mesma hora em que são compartilhados.",
      "cascasDeBanana": [
        "Desativar o Teams permanentemente: Seria ineficiente operacionalmente para a empresa.",
        "Alterar texto para piadas: O sistema remove ou bloqueia a visualização de forma séria e profissional para conformidade.",
        "Gravar áudio do microfone: Viola severamente leis de privacidade e não faz parte do processamento textual do DLP."
      ],
      "dicaOuro": "Cartão digitado no chat do Teams = Mensagem bloqueada e oculta na hora pelo DLP."
    },
    "id": "ab900_q130"
  },
  {
    "text": "Qual o papel do recurso 'Exact Data Match' (EDM - Correspondência de Dados Exatos) nas políticas de DLP do Microsoft Purview?",
    "options": [
      "Garantir que os usuários digitem a senha exata de login do Windows.",
      "Fazer a correspondência matemática de hashes de vírus na nuvem do Defender.",
      "Detectar informações confidenciais carregando um banco de dados estruturado modelo (ex: lista exata de CPFs e nomes de todos os seus clientes reais) para evitar falsos positivos.",
      "Validar se os arquivos do Office possuem o mesmo tamanho físico de disco."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda o método avançado de busca exata EDM do Purview.",
      "papoReto": "Padrões simples de CPF podem gerar muitos falsos positivos. O EDM resolve isso. Você sobe uma tabela criptografada com os CPFs, Nomes e RGs reais dos seus clientes ou funcionários. O DLP só gerará bloqueios se detectar a combinação exata de dados que realmente pertencem a um cliente cadastrado no seu banco de dados.",
      "respostaCerta": "Detectar informações confidenciais carregando um banco de dados estruturado modelo (ex: lista exata de CPFs e nomes de todos os seus clientes reais) para evitar falsos positivos.",
      "puloDoGato": "Viu 'importar banco de dados estruturado com chaves reais da empresa' ou 'evitar falsos positivos com dados reais de clientes'? A resposta de conformidade é EDM (Exact Data Match).",
      "cascasDeBanana": [
        "Senha exata de login: Tarefa de autenticação gerenciada no Entra ID, sem ligação com a busca lógica de DLP em arquivos.",
        "Hashes de vírus: Função dos mecanismos de antivírus do Microsoft Defender (assinaturas e heurística).",
        "Tamanho de arquivos: Irrelevante para a proteção de conteúdo de conformidade de dados sensíveis."
      ],
      "dicaOuro": "DLP ultra-preciso comparado com banco de dados real da empresa = Exact Data Match (EDM)."
    },
    "id": "ab900_q131"
  },
  {
    "text": "Um administrador quer criar uma regra de DLP que bloqueie o compartilhamento de arquivos sensíveis salvos no SharePoint, mas deseja que essa regra se aplique APENAS a sites específicos de projetos sigilosos, excluindo sites comuns de notícias públicas da empresa. Onde essa granularidade deve ser configurada?",
    "options": [
      "No menu de conexões físicas de rede do Teams admin center",
      "Nas regras de lixo eletrônico locais do Outlook dos usuários",
      "Nas políticas de faturamento de cobranças da assinatura M365",
      "Nas opções de 'Locais' (Locations) de escopo da política de DLP no Purview"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão foca no escopo e segmentação de locais nas políticas de DLP.",
      "papoReto": "Ao criar ou editar uma política de DLP, você define os Locais (Locations). É possível marcar opções amplas (todos os sites do SharePoint) ou especificar exatamente quais sites devem ser incluídos ou excluídos da varredura, economizando processamento e falsos alertas.",
      "respostaCerta": "Nas opções de 'Locais' (Locations) de escopo da política de DLP no Purview",
      "puloDoGato": "Locations no DLP = Escolher onde aplicar (SharePoint, Exchange, OneDrive, Teams, Endpoints). É possível refinar por contas de usuários e sites individuais.",
      "cascasDeBanana": [
        "Teams admin center: Gerencia ferramentas de áudio, vídeo e conferência, sem controle de regras do motor de DLP do Purview.",
        "Regras do Outlook: Filtragens locais do cliente que não atuam sobre as restrições globais de compartilhamento de arquivos da nuvem.",
        "Faturamento de cobranças: Trata especificamente de pagamentos da conta Microsoft corporativa."
      ],
      "dicaOuro": "Aplicar DLP apenas em sites específicos = Configurar nas opções de 'Locations' (Locais) da política."
    },
    "id": "ab900_q132"
  },
  {
    "text": "Sua empresa deseja receber relatórios consolidados sobre quantas vezes a política de DLP de informações financeiras foi ativada nas últimas duas semanas, exibindo quais departamentos geraram mais incidentes de segurança. Qual painel de controle do Purview reúne esses dados históricos?",
    "options": [
      "Painel de Relatórios de DLP (DLP Reports) no Portal de Conformidade",
      "Painel do Microsoft Defender for Endpoint local",
      "Message Center do Microsoft 365 admin center",
      "Configurações locais de dispositivos móveis no Intune"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda o monitoramento e relatórios do DLP.",
      "papoReto": "O portal do Purview traz o painel DLP Reports (Relatórios de DLP). Nele, os administradores de compliance visualizam gráficos detalhados sobre correspondências de políticas, falsos positivos e ações tomadas (bloqueios, alertas) ao longo do tempo.",
      "respostaCerta": "Painel de Relatórios de DLP (DLP Reports) no Portal de Conformidade",
      "puloDoGato": "Quer ver consolidados em gráficos os incidentes de DLP acionados na empresa? Vá em DLP > Relatórios (DLP Reports).",
      "cascasDeBanana": [
        "Defender for Endpoint: Focado em monitorar ameaças locais em notebooks físicos (vírus, malwares), não nos fluxos gerais lógicos do Purview.",
        "Message Center: Informativo de lançamentos de software da Microsoft.",
        "Intune: Configura regras de conformidade de hardware físico de celulares (MDM), não regras de documentos lógicos."
      ],
      "dicaOuro": "Consolidar incidentes históricos de DLP em gráficos = DLP Reports no Purview."
    },
    "id": "ab900_q133"
  },
  {
    "text": "Ao criar uma regra de DLP que bloqueie o compartilhamento externo de dados confidenciais, qual o impacto imediato para o usuário externo que tentar acessar o link de um arquivo que foi bloqueado pelo sistema?",
    "options": [
      "O computador do usuário externo é formatado de forma automática e silenciosa.",
      "O link se torna inválido para o usuário externo, exibindo uma mensagem de que ele não possui permissões de acesso ao recurso.",
      "O arquivo original é excluído automaticamente da nuvem.",
      "A conta de e-mail do usuário externo é suspensa permanentemente pelo suporte."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda o impacto de bloqueio de links de DLP em usuários externos.",
      "papoReto": "Quando o DLP bloqueia um arquivo compartilhado indevidamente no SharePoint/OneDrive, o sistema quebra o link público. Se um usuário externo tentar clicar, o navegador exibirá que o acesso foi negado por políticas de segurança, preservando o arquivo original intacto na conta do autor interno.",
      "respostaCerta": "O link se torna inválido para o usuário externo, exibindo uma mensagem de que ele não possui permissões de acesso ao recurso.",
      "puloDoGato": "O link quebrado impede o acesso externo de descriptografia dos arquivos, mantendo a proteção dos dados lógicos corporativos na nuvem.",
      "cascasDeBanana": [
        "Formatar computador do externo: Seria invasão cibernética ilegal de computadores pessoais de terceiros de fora da empresa.",
        "Arquivo excluído automaticamente: O arquivo original permanece a salvo, apenas o canal de compartilhamento dele com a internet é cortado.",
        "Suspender conta do externo: A Microsoft não suspende e-mails externos de terceiros (como contas do Gmail) por tentar acessar links bloqueados."
      ],
      "dicaOuro": "Link bloqueado por DLP = Acesso negado e link quebrado para o público externo."
    },
    "id": "ab900_q134"
  },
  {
    "text": "O que descreve melhor o recurso 'Sensitive Information Types' (SIT - Tipos de Informações Confidenciais) integrados no Microsoft 365 de fábrica?",
    "options": [
      "Formatos de criptografia de HDs físicos locais de computadores corporativos.",
      "Tipos de canais de reuniões que exigem senhas adicionais no Teams.",
      "Definições lógicas prontas fornecidas pela Microsoft para reconhecer dados confidenciais padrões globais baseados em formatos estruturados (ex: CPF, cartão de crédito, passaporte).",
      "Categorias de licenças comerciais pagas voltadas para compliance financeiro."
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda o conceito de SIT (Sensitive Information Types) nativos.",
      "papoReto": "A Microsoft já nos entrega de fábrica centenas de SITs prontos. O sistema já sabe como procurar um CPF do Brasil (formato de 11 dígitos estruturados), número de cartão Visa ou passaporte europeu, eliminando o trabalho de criar regras complexas do zero.",
      "respostaCerta": "Definições lógicas prontas fornecidas pela Microsoft para reconhecer dados confidenciais padrões globais baseados em formatos estruturados (ex: CPF, cartão de crédito, passaporte).",
      "puloDoGato": "SIT = Modelos de dados sensíveis prontos (CPF, cartão, passaporte). A Microsoft gerencia e atualiza esses padrões de fábrica.",
      "cascasDeBanana": [
        "Criptografia de HDs: Feito pelo BitLocker local das máquinas de usuários.",
        "Tipos de canais de reuniões: Canais são padrão, privados ou compartilhados, sem ligação com SITs.",
        "Categorias de licenças: Licenças determinam acesso ao software, SITs são recursos lógicos de DLP e Purview."
      ],
      "dicaOuro": "Identificar dados sensíveis padrões de mercado = Sensitive Information Types (SIT) nativos da Microsoft."
    },
    "id": "ab900_q135"
  },
  {
    "text": "Sua empresa deseja evitar o envio de documentos contendo números de cartões de crédito pelo e-mail do Outlook. Ao criar a regra de DLP, qual a 'Condição' lógica nativa que deve ser atrelada ao fluxo para que a regra afete apenas envios de e-mails para contatos de fora da organização?",
    "options": [
      "O remetente é o administrador global do tenant",
      "A mensagem contém anexos compactados .ZIP",
      "O assunto do e-mail começa com a palavra 'Urgente'",
      "O destinatário é externo (Recipient is external / is outside my organization)"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda a segmentação de escopo interno vs externo em regras de DLP.",
      "papoReto": "Para evitar incomodar os funcionários em fluxos de trabalho legítimos internos (onde enviar cartões de crédito entre o setor financeiro é normal), configuramos na regra de DLP a condição: 'O destinatário é externo' (is outside my organization) para bloquear apenas vazamentos para a internet pública.",
      "respostaCerta": "O destinatário é externo (Recipient is external / is outside my organization)",
      "puloDoGato": "DLP para vazamento de dados = Contém dados sensíveis + Destinatário é externo (is outside my organization). Esta combinação é clássica em provas de conformidade Microsoft.",
      "cascasDeBanana": [
        "Remetente administrador: Administradores também devem seguir as regras de conformidade e não devem ser os únicos bloqueados.",
        "Mensagem com anexo .ZIP: Ignoraria e-mails contendo cartões de crédito digitados em texto simples no corpo da mensagem.",
        "Assunto começa com Urgente: Deixaria passar qualquer envio de cartão de crédito em e-mails com assuntos comuns."
      ],
      "dicaOuro": "Bloquear vazamento externo de dados confidenciais = Condição 'Recipient is external' ativada."
    },
    "id": "ab900_q136"
  },
  {
    "text": "Ao configurar uma regra de DLP que exiba dicas de políticas (Policy Tips) para os usuários no Outlook, qual recurso o administrador pode habilitar para que os usuários possam reportar um alerta de segurança como 'Falso Positivo' se o e-mail não contiver dados confidenciais reais?",
    "options": [
      "Relato de falsos positivos pelo usuário (User reports of false positives)",
      "Acesso Condicional dinâmico por e-mail",
      "Delegação de chaves de descriptografia RMS",
      "Desativar as regras de DLP globalmente por 24 horas"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda o feedback de falsos positivos do usuário final.",
      "papoReto": "Sistemas de DLP podem confundir padrões de códigos de produtos internos com números de cartões. Habilitar a opção para o usuário reportar 'Falso Positivo' ajuda a TI a aprimorar as regras e reduz os falsos alarmes na corporação.",
      "respostaCerta": "Relato de falsos positivos pelo usuário (User reports of false positives)",
      "puloDoGato": "Falsos positivos reportados por usuários aparecem em relatórios consolidados para revisão periódica dos administradores de compliance no Purview.",
      "cascasDeBanana": [
        "Acesso Condicional: Lida especificamente com restrições e regras de login do Entra ID.",
        "Delegação de chaves RMS: Concede acessos permanentes a arquivos protegidos, sem tratar de enquetes de falso positivo de e-mail.",
        "Desativar DLP globalmente: Exporia a empresa inteira a vazamentos de dados severos desnecessariamente."
      ],
      "dicaOuro": "Aprimorar regras de DLP com feedback de usuários = Habilitar opção de reportar Falso Positivo."
    },
    "id": "ab900_q137"
  },
  {
    "text": "Sua empresa deseja impedir que colaboradores salvem cópias de arquivos contendo dados sensíveis de clientes em pendrives ou dispositivos USB pessoais conectados a notebooks corporativos da empresa. Onde essa regra de DLP de endpoint deve ser configurada?",
    "options": [
      "Regras de segurança física do firewall local do escritório",
      "DLP de Endpoint (Endpoint DLP) configurado no Purview e aplicado a dispositivos gerenciados",
      "Configurações locais de perfil de impressoras",
      "Políticas de chamadas do Teams admin center"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda a proteção de dados no dispositivo físico do usuário (Endpoint DLP).",
      "papoReto": "O Endpoint DLP estende a segurança do Purview para o computador Windows do funcionário. Ele monitora ações locais: impede a cópia de arquivos confidenciais para dispositivos USB não homologados, bloqueia a impressão física do arquivo em impressoras locais ou impede o envio para navegadores web não autorizados (como Google Chrome pessoal).",
      "respostaCerta": "DLP de Endpoint (Endpoint DLP) configurado no Purview e aplicado a dispositivos gerenciados",
      "puloDoGato": "Proteger arquivos sensíveis em pendrives, impressões locais ou cópias locais no Windows = Endpoint DLP.",
      "cascasDeBanana": [
        "Firewall local: Monitora tráfego de rede e portas de IP, sem capacidade de controlar cliques físicos do mouse de cópia para portas USB locais de computadores.",
        "Perfil de impressoras: Gerencia apenas drivers locais de impressão de papéis.",
        "Políticas do Teams: Cuidam exclusivamente de comunicação de chat e vídeo."
      ],
      "dicaOuro": "Impedir cópia de dados corporativos para pendrives = Ativar políticas de Endpoint DLP."
    },
    "id": "ab900_q138"
  },
  {
    "text": "Ao criar uma regra de DLP no Purview, qual a nomenclatura padrão usada para definir o nível de correspondência de dados de segurança necessário para disparar a regra baseando-se no número de ocorrências detectadas em um mesmo arquivo (ex: disparar a regra apenas se houver mais de 10 cartões de crédito no mesmo documento)?",
    "options": [
      "Nível de Severidade de Risco",
      "Cofre de chaves de segurança",
      "Contagem de instâncias (Instance count)",
      "Grau de confiança de Taxonomia"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda o parâmetro lógico de contagem de instâncias no DLP.",
      "papoReto": "Ao configurar a regra de DLP, o administrador define a Contagem de Instâncias (Instance Count). Isso ajuda a tratar cenários de forma diferente: Se houver de 1 a 9 cartões (baixo risco), apenas alerte o usuário. Se houver 10 ou mais instâncias (alto risco/vazamento em lote), bloqueie o compartilhamento imediatamente.",
      "respostaCerta": "Contagem de instâncias (Instance count)",
      "puloDoGato": "Viu 'número de ocorrências de dados confidenciais no arquivo para ativar a regra'? O termo é Instance Count (Contagem de Instâncias).",
      "cascasDeBanana": [
        "Nível de Severidade: Campo para categorizar o impacto técnico do alerta de TI, sem computar contagens lógicas matemáticas de termos de texto do arquivo de série.",
        "Cofre de chaves: Utilizado para gerenciar segredos digitais criptografados.",
        "Grau de confiança: Mede a precisão da detecção das palavras-chave pela IA, não a quantidade de vezes que a palavra aparece no texto."
      ],
      "dicaOuro": "Volume de dados sensíveis no arquivo (ex: mais de 10 CPFs) = Configurar 'Instance Count' na regra."
    },
    "id": "ab900_q139"
  },
  {
    "text": "Sua empresa é do setor de saúde e, por exigência regulatória governamental, deve manter todos os prontuários de pacientes arquivados e imutáveis na nuvem do SharePoint por exatamente 10 anos, impedindo qualquer modificação ou exclusão por qualquer colaborador, inclusive a TI. Qual recurso do Purview atende a essa necessidade legal?",
    "options": [
      "Criação de rotinas de arquivamento manuais",
      "Backup local físico diário em fitas magnéticas",
      "Configuração de Acesso Condicional temporário",
      "Políticas de retenção com bloqueio de preservação (Retention policies with Preservation Lock)"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda a segurança máxima de retenção com imutabilidade (Preservation Lock).",
      "papoReto": "Para conformidades rígidas (como a SEC dos EUA ou LGPD médica), a empresa usa o Preservation Lock nas políticas de retenção. Uma vez ativado, a política se torna imutável e ninguém (nem o administrador global do tenant) consegue diminuir o tempo de retenção ou desativar a regra, blindando os dados contra intimações ou fraudes internas.",
      "respostaCerta": "Políticas de retenção com bloqueio de preservação (Retention policies with Preservation Lock)",
      "puloDoGato": "Viu 'impedir exclusão por qualquer pessoa, inclusive a TI' ou 'impedir alteração da própria regra de retenção por compliance'? A resposta é Preservation Lock.",
      "cascasDeBanana": [
        "Rotinas de arquivamento manuais: Suscetíveis a falhas operacionais e exclusões acidentais por erros humanos de funcionários.",
        "Backup local físico: Medida de recuperação de desastres físicos obsoleta e sem governança de exclusão e conformidade lógica automática na nuvem M365.",
        "Acesso Condicional: Bloqueia logins de computadores de funcionários, sem proteger arquivos existentes contra exclusões indevidas de proprietários autorizados."
      ],
      "dicaOuro": "Impedir exclusão de dados e alteração de regras por qualquer administrador = Ativar Preservation Lock."
    },
    "id": "ab900_q140"
  },
  {
    "text": "Quando uma política de retenção do Microsoft Purview está aplicada a um site do SharePoint Online e um usuário decide editar ou apagar permanentemente um documento importante, o que acontece de forma oculta nos bastidores do site?",
    "options": [
      "A versão original do documento é preservada de forma automática e silenciosa em uma biblioteca oculta e protegida chamada Preservation Hold Library.",
      "O documento é excluído do site imediatamente e o suporte técnico precisa restaurar a partir dos datacenters físicos da Microsoft.",
      "A conta de e-mail do usuário é bloqueada pelo firewall local da rede física corporativa.",
      "A inteligência artificial do Purview recria o texto do documento usando dados públicos da internet."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão foca na mecânica de funcionamento interno da retenção do SharePoint.",
      "papoReto": "O usuário acha que deletou o arquivo. Mas, por baixo, o SharePoint percebe a política de retenção ativa. Ele move a cópia original intacta para a Preservation Hold Library, uma pasta oculta e inacessível aos colaboradores comuns. O site continua limpo na tela, mas os dados de compliance estão salvos.",
      "respostaCerta": "A versão original do documento é preservada de forma automática e silenciosa em uma biblioteca oculta e protegida chamada Preservation Hold Library.",
      "puloDoGato": "Retenção no SharePoint = Preservation Hold Library (oculta no site). Retenção no Exchange (Outlook) = Recoverable Items Folder (oculta na caixa do usuário).",
      "cascasDeBanana": [
        "Restaurar a partir de datacenters: O M365 gerencia a retenção de forma lógica e automática no próprio site, sem depender de chamados manuais para os datacenters de hardware da Microsoft.",
        "Bloquear e-mail pelo firewall: Exclusões de arquivos não afetam a segurança de roteamento de redes físicas locais.",
        "Recriar texto usando IA pública: Comprometeria o sigilo corporativo e geraria alucinações de dados jurídicos."
      ],
      "dicaOuro": "Mecanismo oculto de retenção de arquivos do SharePoint = Preservation Hold Library."
    },
    "id": "ab900_q141"
  },
  {
    "text": "Sua empresa deseja configurar regras de conformidade de modo que, ao final do período de retenção de 5 anos de contratos corporativos antigos, a equipe de governança de dados receba um e-mail para validar manualmente se os arquivos podem ser destruídos de verdade ou se devem ser guardados por mais tempo. Qual a nomenclatura desse recurso?",
    "options": [
      "eDiscovery de segundo estágio",
      "Revisão de descarte (Disposition review)",
      "Auditoria unificada de exclusões",
      "Retenção de Litígio automática"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda o descarte controlado de dados via Disposition Review.",
      "papoReto": "Em vez de excluir dados antigos automaticamente ao final do prazo (o que pode ser perigoso), a empresa pode configurar uma Revisão de Descarte (Disposition Review). O sistema notifica os revisores de conformidade, que revisam os arquivos e aprovam a exclusão definitiva ou renovam a retenção.",
      "respostaCerta": "Revisão de descarte (Disposition review)",
      "puloDoGato": "Viu 'aprovação humana manual antes de apagar arquivos de retenção expirados'? O termo correto de Purview é Disposition Review.",
      "cascasDeBanana": [
        "eDiscovery: Ferramenta de busca forense de termos em litígios legais, não gerencia fluxos periódicos de expiração de rotinas de descarte de arquivos.",
        "Auditoria unificada: Apenas logs passados das ações de rede de TI.",
        "Retenção de Litígio: Mantém e-mails guardados indefinidamente para processos na justiça, sem fluxos de expiração periódica estruturados."
      ],
      "dicaOuro": "Validar manualmente antes da exclusão definitiva pós-retenção = Disposition Review."
    },
    "id": "ab900_q142"
  },
  {
    "text": "Uma corporação está enfrentando uma disputa judicial e a equipe jurídica externa exige que todos os e-mails e arquivos de chat do Teams de 3 gerentes de projetos sejam mantidos intactos e não possam ser apagados de forma alguma sob pena de multa de obstrução de justiça. Qual recurso do Purview deve ser ativado imediatamente nas caixas de correio e contas dos gerentes?",
    "options": [
      "Auditoria Unificada de logs",
      "Smart Lockout do Entra ID",
      "Retenção de Litígio (Litigation Hold)",
      "Prevenção de spam de saída (EOP)"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão foca na preservação jurídica de dados através do Litigation Hold.",
      "papoReto": "A Retenção de Litígio (Litigation Hold) congela a conta de e-mail e dados do colaborador para a justiça. O usuário continua enviando e recebendo mensagens e pode apagar e-mails da lixeira dele normalmente. No entanto, para a TI de compliance, uma cópia de todos os e-mails e edições feitas permanece salva de forma oculta na pasta de Itens Recuperáveis.",
      "respostaCerta": "Retenção de Litígio (Litigation Hold)",
      "puloDoGato": "Exigência judicial de congelar dados de um usuário sem que ele saiba ou seja afetado na rotina = Litigation Hold.",
      "cascasDeBanana": [
        "Auditoria Unificada: Apenas registra as ações históricas do funcionário, sem impedir que ele delete e-mails permanentemente da lixeira.",
        "Smart Lockout: Bloqueia o login após erros repetidos de senha no Entra ID.",
        "Prevenção de spam: Filtra spams nas mensagens enviadas, sem relação com congelamentos judiciais de dados lógicos."
      ],
      "dicaOuro": "Congelar e-mails e arquivos para disputas judiciais = Ativar Litigation Hold."
    },
    "id": "ab900_q143"
  },
  {
    "text": "Ao configurar uma política de retenção no Purview, qual a diferença prática de aplicação entre o uso de uma 'Política de Retenção' (Retention Policy) e um 'Rótulo de Retenção' (Retention Label)?",
    "options": [
      "A Política de Retenção exige internet ativa nos computadores locais; o Rótulo de Retenção funciona de forma offline.",
      "Políticas são pagas e Rótulos de Retenção são recursos gratuitos padrão do Outlook.",
      "Não há diferenças técnicas de governança de dados lógicos.",
      "Política de Retenção: é aplicada de forma global e silenciosa a todos os locais escolhidos. Rótulo de Retenção: é aplicado individualmente a pastas ou arquivos específicos (pelo administrador ou usuário)."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda a diferença de aplicação entre políticas e rótulos de retenção.",
      "papoReto": "A Retention Policy atua em escala global (ex: reter todos os e-mails do departamento Financeiro por 3 anos). O Retention Label é mais específico; ele é uma tag que você (ou regras automáticas) anexa a um arquivo Word individual (ex: 'Reter este Contrato por 10 anos'), garantindo governança granular de dados.",
      "respostaCerta": "Política de Retenção: é aplicada de forma global e silenciosa a todos os locais escolhidos. Rótulo de Retenção: é aplicado individualmente a pastas ou arquivos específicos (pelo administrador ou usuário).",
      "puloDoGato": "Policy = Amplo e silencioso. Label = Específico (anexado ao arquivo) e visível para o usuário final.",
      "cascasDeBanana": [
        "Conexão de internet offline: Ambos exigem conectividade de nuvem para processar as regras centrais de segurança do Purview.",
        "Carga de custos: O preço é definido no licenciamento do M365 (normalmente planos como E3/E5), sem cobranças avulsas por regras de compliance criadas na TI.",
        "Sem diferenças técnicas: A forma de administração e o escopo de atuação lógicos de governança de dados no site são completamente diferentes."
      ],
      "dicaOuro": "Regra global para todo o site = Retention Policy. Regra específica para um documento individual = Retention Label."
    },
    "id": "ab900_q144"
  },
  {
    "text": "Sua empresa deseja que todos os e-mails e documentos relacionados a 'Impostos Federais' sejam guardados por 7 anos. Se um colaborador tentar apagar um e-mail com esse rótulo, o sistema deve impedir a ação. Qual a ferramenta do Purview que gerencia esse arquivamento corporativo?",
    "options": [
      "Políticas de retenção do Purview (Retention Policies)",
      "Bloqueios físicos de portas de rede de TI",
      "Regras de filtragem do Windows Defender local",
      "Gerenciamento de faturamento da assinatura Microsoft"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda o uso do recurso de Políticas de Retenção do Purview.",
      "papoReto": "O Microsoft Purview gerencia o ciclo de vida dos e-mails e arquivos. A criação de políticas de retenção (Retention Policies) garante que, mesmo que o usuário exclua as mensagens do Outlook ou do SharePoint, a Microsoft guardará as cópias de forma segura para fins regulatórios durante o prazo configurado.",
      "respostaCerta": "Políticas de retenção do Purview (Retention Policies)",
      "puloDoGato": "Guarda de dados por longos períodos obrigatórios = Políticas de Retenção (Retention Policies) do Purview.",
      "cascasDeBanana": [
        "Bloqueios de portas de rede: Cuidam de tráfego de IPs locais e hacking físico de roteadores.",
        "Windows Defender: Antivírus de notebooks de colaboradores.",
        "Gerenciamento de faturamento: Cuida do pagamento e renovações comerciais de licenças."
      ],
      "dicaOuro": "Preservar e-mails e documentos por prazo fixo de compliance = Retention Policies."
    },
    "id": "ab900_q145"
  },
  {
    "text": "Qual das seguintes ferramentas do Microsoft Purview é usada especificamente por equipes jurídicas para localizar, congelar sob custódia (hold) e exportar e-mails e conversas de chats como evidências lógicas para litígios judiciais?",
    "options": [
      "Auditoria Unificada de logs",
      "eDiscovery (Standard / Premium)",
      "Microsoft Defender for Identity",
      "Azure App Center Console"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda o eDiscovery (Descoberta Eletrônica).",
      "papoReto": "O eDiscovery (Standard ou Premium) é a central jurídica do Purview. Nele, advogados da empresa criam 'casos' de investigação, definem termos de busca (ex: e-mails contendo 'Projeto Secreto'), congelam as caixas de correio de suspeitos (holds) e exportam os resultados em formato .PST ou arquivos brutos para entregar em tribunais.",
      "respostaCerta": "eDiscovery (Standard / Premium)",
      "puloDoGato": "Termos chave na prova: 'busca forense', 'casos de litígio', 'exportar evidências em e-mails e chats'. A resposta é eDiscovery.",
      "cascasDeBanana": [
        "Auditoria Unificada: Apenas exibe o histórico de quem clicou em botões de TI, sem ferramentas de congelamento jurídico de conteúdo ou exportações formatadas para justiça.",
        "Defender for Identity: Monitora logins suspeitos e ataques cibernéticos contra servidores de domínio locais.",
        "Azure App Center: Plataforma de engenharia de desenvolvimento de aplicativos móveis."
      ],
      "dicaOuro": "Investigar termos e exportar e-mails para processos judiciais = eDiscovery."
    },
    "id": "ab900_q146"
  },
  {
    "text": "O que acontece com um e-mail importante quando ele é colocado sob 'Custódia Legal' (eDiscovery Hold) no portal do Microsoft Purview?",
    "options": [
      "O e-mail é impresso de forma física automática e enviado para a sede da Microsoft.",
      "O e-mail é criptografado e enviado de volta para todos os contatos do autor no Outlook.",
      "O e-mail é preservado intacto na pasta oculta do usuário e não pode ser apagado definitivamente, mesmo se o usuário tentar esvaziar a lixeira.",
      "A conta de e-mail inteira do usuário é desativada por 30 dias."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão foca na mecânica de preservação do eDiscovery Hold.",
      "papoReto": "Colocar um usuário sob eDiscovery Hold (congelamento) é invisível para ele. Ele pode deletar e-mails e esvaziar a pasta 'Itens Excluídos' normalmente para manter a caixa limpa. Contudo, as cópias continuam salvas silenciosamente na pasta de Itens Recuperáveis para que a TI possa buscar e exportar em investigações.",
      "respostaCerta": "O e-mail é preservado intacto na pasta oculta do usuário e não pode ser apagado definitivamente, mesmo se o usuário tentar esvaziar a lixeira.",
      "puloDoGato": "Holds de eDiscovery preservam os dados no local (Preservation-in-place), impedindo a exclusão definitiva do servidor pela ação do usuário comum.",
      "cascasDeBanana": [
        "Impresso automaticamente: A Microsoft não realiza impressões de papéis físicos em datacenters por compliance lógicos.",
        "Enviado para contatos: Causaria quebras gravíssimas de privacidade corporativa.",
        "Desativar conta do usuário: O usuário continua trabalhando normalmente sem perceber que está sendo auditado."
      ],
      "dicaOuro": "eDiscovery Hold = Preservar cópias no servidor de forma 100% invisível ao usuário final."
    },
    "id": "ab900_q147"
  },
  {
    "text": "Ao configurar a expiração de uma política de retenção do Purview para 'Excluir dados após 3 anos', qual a regra padrão de prioridade de conformidade caso o mesmo arquivo também esteja sob uma política de 'Reter dados por 5 anos'?",
    "options": [
      "A exclusão sempre ganha da retenção (o arquivo será apagado após 3 anos).",
      "As duas políticas se anulam e o arquivo é apagado na mesma hora.",
      "A política mais recente cadastrada apaga a anterior de forma automática.",
      "A retenção sempre ganha da exclusão (o arquivo será retido por 5 anos e excluído apenas no final do prazo)."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda os princípios de prioridade de retenção (Principles of Retention) do Purview.",
      "papoReto": "O Purview segue 4 princípios de retenção caso haja conflito: (1) Retenção ganha de exclusão; (2) O período de retenção mais longo ganha; (3) A retenção mais específica ganha do geral; (4) O período de exclusão mais curto ganha do longo no final.",
      "respostaCerta": "A retenção sempre ganha da exclusão (o arquivo será retido por 5 anos e excluído apenas no final do prazo).",
      "puloDoGato": "Decore a regra número 1 do Purview: Retenção (Preservar) sempre vence Exclusão (Deletar). A empresa prefere guardar dados a mais por segurança a apagá-los por engano.",
      "cascasDeBanana": [
        "Exclusão ganha de retenção: Contraria diretamente o princípio de conformidade e segurança da informação.",
        "Se anulam e apaga na hora: Causaria perdas críticas irreparáveis de dados corporativos jurídicos.",
        "Mais recente apaga a anterior: Regras se acumulam de forma lógica, sem substituição aleatória por data de criação."
      ],
      "dicaOuro": "Princípios de Retenção = Reter ganha de Deletar. Período mais longo ganha do mais curto."
    },
    "id": "ab900_q148"
  },
  {
    "text": "Sua empresa deseja auditar conversas de chat no Teams para coibir mensagens contendo assédio, ameaças ou linguagem ofensiva que violem o Código de Conduta da corporação. Qual solução do Purview monitora e reporta essas infrações de chat?",
    "options": [
      "Conformidade de Comunicações (Communication Compliance)",
      "Prevenção contra Perda de Dados (DLP)",
      "Gerenciador de Acesso Condicional",
      "Log do firewall do Microsoft 365 Defender"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda o monitoramento ético corporativo via Communication Compliance.",
      "papoReto": "O Communication Compliance (Conformidade de Comunicações) é a ferramenta ética do Purview. Ela monitora mensagens de chat no Teams, e-mails ou canais à procura de palavrões, insultos, assédio ou dados sensíveis vazados, alertando a equipe de Recursos Humanos/Compliance de forma confidencial.",
      "respostaCerta": "Conformidade de Comunicações (Communication Compliance)",
      "puloDoGato": "Auditar conversas internas de colaboradores à procura de bullying, assédio, linguajar inadequado ou vazamento de segredos = Communication Compliance.",
      "cascasDeBanana": [
        "DLP: Focado em bloquear vazamentos de dados estruturados específicos (cartões, CPFs), não em interpretar linguajar ou ofensas de assédio textual.",
        "Acesso Condicional: Lida exclusivamente com liberação de logs de login no Entra ID.",
        "Firewall Defender: Bloqueia IPs e tráfego físico de rede de hackers."
      ],
      "dicaOuro": "Mensagens ofensivas ou violações éticas no Teams/E-mail = Communication Compliance."
    },
    "id": "ab900_q149"
  },
  {
    "text": "Em uma instituição financeira, a área de Pesquisa e Análise de Mercado (Research) NÃO pode se comunicar ou compartilhar informações sigilosas com a área de Fusões e Aquisições (M&A) para evitar manipulação de informações no mercado financeiro (conflito de interesse). Qual ferramenta do Purview impõe esse bloqueio de comunicação interna no Teams?",
    "options": [
      "Prevenção contra Perda de Dados (DLP)",
      "Barreiras de Informação (Information Barriers)",
      "Acesso Condicional baseado no Azure AD",
      "Políticas de Acesso local de redes"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda a segregação de comunicação interna via Information Barriers.",
      "papoReto": "As Barreiras de Informação (Information Barriers) impedem que dois departamentos se comuniquem por e-mail ou chat no Teams. Se um analista de Research tentar adicionar um assessor de M&A em um chat do Teams, o sistema avisa que a ação é bloqueada devido a políticas de conformidade regulatória (Muralha da China corporativa).",
      "respostaCerta": "Barreiras de Informação (Information Barriers)",
      "puloDoGato": "Impedir que dois departamentos de uma mesma empresa conversem por chat ou e-mail por conflito de interesse = Information Barriers.",
      "cascasDeBanana": [
        "DLP: Evita o vazamento de dados específicos, mas não impede a comunicação geral de chat rotineira entre as pessoas.",
        "Acesso Condicional: Gerencia a autenticação multifator e logins no portal.",
        "Políticas de rede local: Atuam em cabos e roteadores físicos locais, sem controle sobre aplicativos SaaS em nuvem."
      ],
      "dicaOuro": "Segregar departamentos e bloquear contatos de chat e-mail = Information Barriers (Barreiras de Informação)."
    },
    "id": "ab900_q150"
  },
  {
    "text": "Sua empresa deseja detectar comportamentos suspeitos de funcionários internos (como um colaborador que baixa 1.000 arquivos confidenciais do SharePoint no mesmo dia e tenta copiá-los para um pendrive pessoal perto da data de sua demissão voluntária). Qual ferramenta do Purview correlaciona esses eventos para identificar o risco interno?",
    "options": [
      "Microsoft Defender for Identity",
      "Azure Key Vault Console",
      "Gerenciamento de Risco Interno (Insider Risk Management)",
      "Políticas anti-malware do Exchange"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda a segurança contra ameaças internas via Insider Risk Management.",
      "papoReto": "O Insider Risk Management correlaciona sinais de uso do M365 com eventos do RH (como demissões cadastradas no sistema). Se o usuário estiver saindo da empresa e começar a baixar massivamente arquivos confidenciais ou compartilhá-los externamente, o sistema aciona um alerta de risco interno prioritário.",
      "respostaCerta": "Gerenciamento de Risco Interno (Insider Risk Management)",
      "puloDoGato": "Vazamento de dados por funcionário interno demissionário, download em massa suspeito ou roubo de propriedade intelectual = Insider Risk Management.",
      "cascasDeBanana": [
        "Defender for Identity: Monitora ataques cibernéticos contra servidores de diretório Active Directory local.",
        "Azure Key Vault: Lida com armazenamento de chaves de APIs criptografadas.",
        "Anti-malware: Filtra e-mails de spam que chegam à caixa de correio externa."
      ],
      "dicaOuro": "Detectar espionagem, sabotagem ou roubo de dados por funcionários internos = Insider Risk Management."
    },
    "id": "ab900_q151"
  },
  {
    "text": "Um cliente da Europa enviou um e-mail solicitando que a sua empresa mostre todos os dados pessoais dele que estão sob a custódia de vocês, além de exigir a exclusão imediata desses dados (Direito ao Esquecimento da GDPR/LGPD). Qual ferramenta do Microsoft Purview ajuda a TI a localizar de forma automatizada todos os arquivos e dados desse cliente no tenant?",
    "options": [
      "eDiscovery de segundo estágio apenas",
      "Log de Auditoria de logins",
      "Políticas de Acesso Condicional dinâmicas",
      "Solicitações de direitos do titular (Subject Rights Requests - SRR)"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão foca nas ferramentas de compliance específicas para LGPD/GDPR no Purview.",
      "papoReto": "Sob a LGPD/GDPR, os clientes têm direito de solicitar seus dados. A ferramenta Subject Rights Requests (SRR) - disponível no módulo Microsoft Priva / Purview - automatiza a busca pelo nome e CPF do cliente em e-mails, chats e arquivos, coletando tudo de uma vez para envio ou exclusão.",
      "respostaCerta": "Solicitações de direitos do titular (Subject Rights Requests - SRR)",
      "puloDoGato": "LGPD/GDPR + Titular solicitando dados pessoais dele na empresa = Subject Rights Requests (SRR).",
      "cascasDeBanana": [
        "eDiscovery: Ferramenta de busca forense voltada a investigações judiciais de crimes ou fraudes corporativas internas da empresa, não solicitações rotineiras de LGPD.",
        "Log de Auditoria: Apenas rastreia logins de contas, sem buscar textos de dados pessoais de terceiros salvos em arquivos.",
        "Acesso Condicional: Gerencia a autenticação e MFA de acessos de rede."
      ],
      "dicaOuro": "Atender pedidos de LGPD/GDPR de clientes que querem seus dados = Subject Rights Requests (SRR)."
    },
    "id": "ab900_q152"
  },
  {
    "text": "Ao configurar uma política de retenção para e-mails de colaboradores no Exchange Online, qual a pasta padrão oculta no Outlook de cada usuário onde os e-mails apagados da lixeira são preservados e aguardam a auditoria legal?",
    "options": [
      "Recoverable Items Folder (Pasta de Itens Recuperáveis)",
      "Preservation Hold Library",
      "Lixo Eletrônico (Junk Email)",
      "Cofre local de arquivos .PST"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão foca na mecânica de armazenamento oculta do Exchange para retenções.",
      "papoReto": "No Exchange Online, quando e-mails são apagados e limpos da lixeira, eles são movidos de forma silenciosa para a pasta oculta 'Recoverable Items' (Itens Recuperáveis). Esta pasta é inacessível para o usuário comum no dia a dia, mas o administrador de compliance a acessa via eDiscovery.",
      "respostaCerta": "Recoverable Items Folder (Pasta de Itens Recuperáveis)",
      "puloDoGato": "Exchange (Outlook) = Recoverable Items Folder. SharePoint/OneDrive (Arquivos) = Preservation Hold Library. Decore este mapa lógico de pastas ocultas de retenção.",
      "cascasDeBanana": [
        "Preservation Hold Library: Pasta oculta correspondente no SharePoint e OneDrive, não no Exchange de caixas de correio.",
        "Lixo Eletrônico: Pasta visível onde e-mails suspeitos de spam são movidos temporariamente para o usuário.",
        "Cofre de .PST: Arquivos locais criados no computador, obsoletos para governança de nuvem."
      ],
      "dicaOuro": "Pasta de retenção oculta do Exchange = Recoverable Items Folder."
    },
    "id": "ab900_q153"
  },
  {
    "text": "Sua empresa deseja analisar o nível de conformidade de toda a sua nuvem do Microsoft 365, avaliando quais políticas de proteção de dados recomendadas estão ativas e gerando uma lista de tarefas passo a passo de melhorias de governança com pontuação (Compliance Score). Qual portal fornece esse diagnóstico de conformidade?",
    "options": [
      "Message Center do Microsoft 365 admin center",
      "Gerenciador de Conformidade (Compliance Manager) no Microsoft Purview",
      "Políticas do Windows Defender local",
      "Gerenciador de Faturamento comercial Microsoft"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão foca na governança macro através do Compliance Manager.",
      "papoReto": "O Gerenciador de Conformidade (Compliance Manager) avalia a conformidade geral da empresa contra regulamentos de mercado (ISO 27001, LGPD, GDPR). Ele gera uma pontuação de 0% a 100% (Compliance Score) e ensina o administrador a configurar políticas no tenant para subir o nível de segurança.",
      "respostaCerta": "Gerenciador de Conformidade (Compliance Manager) no Microsoft Purview",
      "puloDoGato": "Compliance Score, pontuação de conformidade corporativa contra leis LGPD/GDPR e tarefas de melhoria = Compliance Manager (Gerenciador de Conformidade).",
      "cascasDeBanana": [
        "Message Center: Destinado a avisos técnicos semanais de mudanças de softwares da Microsoft.",
        "Windows Defender: Antivírus local das máquinas físicas de funcionários.",
        "Faturamento: Lida com pagamentos e contratos de cartões."
      ],
      "dicaOuro": "Mapear conformidade corporativa contra leis LGPD/GDPR e auditorias = Compliance Manager."
    },
    "id": "ab900_q154"
  },
  {
    "text": "Ao configurar uma política de retenção que se aplica globalmente a todas as caixas de correio no Exchange Online, o que acontece com a capacidade de recebimento de e-mails novos de um usuário cuja caixa de correio principal esteja totalmente cheia (100% de uso do limite de armazenamento)?",
    "options": [
      "O Exchange apaga e-mails novos recebidos de forma silenciosa sem notificar ninguém.",
      "O sistema remove arquivos de outros usuários da empresa de forma aleatória para abrir espaço.",
      "O recebimento de novos e-mails é bloqueado devido à falta de espaço físico, exigindo a expansão de armazenamento ou uso de caixas de arquivamento (Archive Mailbox).",
      "A conta do usuário é excluída de forma irreversível e definitiva na hora."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão foca na capacidade física de armazenamento sob políticas de retenção.",
      "papoReto": "Políticas de retenção protegem e-mails existentes contra exclusões, mas elas não expandem o espaço físico de armazenamento básico contratado. Se a caixa atingir 100% de uso, o recebimento de e-mails novos é bloqueado por falta de espaço físico. O administrador de TI deve ativar o Arquivamento Online (In-Place Archive) para liberar espaço.",
      "respostaCerta": "O recebimento de novos e-mails é bloqueado devido à falta de espaço físico, exigindo a expansão de armazenamento ou uso de caixas de arquivamento (Archive Mailbox).",
      "puloDoGato": "A retenção pode lotar as caixas mais rápido porque impede a exclusão lógica definitiva de e-mails antigos. Ativar caixas de arquivamento é a solução padrão do Exchange.",
      "cascasDeBanana": [
        "Apagar e-mails silenciosamente: Causaria perdas críticas inexplicáveis de comunicações comerciais.",
        "Remover arquivos de outros usuários: A estrutura de dados das caixas de usuários é completamente isolada por segurança lógica.",
        "Excluir conta do usuário: Contas não são deletadas automaticamente por caixa cheia, apenas param de receber mensagens."
      ],
      "dicaOuro": "Caixa cheia sob retenção = Ativar e mover e-mails antigos para o In-Place Archive."
    },
    "id": "ab900_q155"
  },
  {
    "text": "Sua empresa deseja configurar o descarte automatizado de documentos de projetos no SharePoint Online de modo que todos os arquivos marcados com o rótulo de retenção expirado 'Projetos Concluídos' sejam excluídos definitivamente após 3 anos da sua data de criação original. O que descreve essa ação?",
    "options": [
      "Um processo manual que o usuário final deve executar arquivo por arquivo no Outlook.",
      "Uma rotina criptográfica local gerenciada pelo firewall de rede física.",
      "Uma exclusão realizada pelo suporte técnico da operadora local de telefonia.",
      "Uma ação de descarte automatizado configurada nas definições de ciclo de vida do rótulo de retenção."
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Proteção de Dados e Governança",
    "explanation": {
      "intro": "Esta questão aborda o descarte programado automático no final do ciclo de vida da retenção.",
      "papoReto": "Rótulos de retenção no Purview lidas com o fim da vida do dado. É possível definir que, após o prazo de retenção (ex: 3 anos), o próprio sistema apague o arquivo de forma definitiva e silenciosa, sem exigir cliques manuais dos funcionários e liberando armazenamento do tenant.",
      "respostaCerta": "Uma ação de descarte automatizado configurada nas definições de ciclo de vida do rótulo de retenção.",
      "puloDoGato": "Terminado o tempo de retenção, existem 3 caminhos padrão: (1) Apagar automático, (2) Disposition Review (aprovação humana) ou (3) Fazer nada (remover apenas a proteção de retenção).",
      "cascasDeBanana": [
        "Processo manual de usuário: Sujeito a esquecimentos corporativos e ineficiências na TI.",
        "Rotina criptográfica do firewall: Firewall atua bloqueando tráfego de IPs de rede, sem controle de ciclo de vida de arquivos do SharePoint.",
        "Exclusão pelo suporte de telefonia: A operadora local cuida de conectividade de cabos físicos de telefone, sem gerenciar a nuvem M365."
      ],
      "dicaOuro": "Apagar arquivos automaticamente após o prazo regulatório = Ação de Exclusão do Rótulo de Retenção."
    },
    "id": "ab900_q156"
  },
  {
    "text": "Ao processar um prompt enviado por um usuário no Word, o Microsoft 365 Copilot realiza um processo de pré-processamento para refinar o prompt usando dados organizacionais do usuário antes de enviar a requisição ao modelo de linguagem (LLM). Qual a nomenclatura técnica desse fluxo?",
    "options": [
      "Aterramento (Grounding) realizado via Microsoft Graph",
      "Tradução criptográfica RSA sem fio",
      "Sincronização de diretório síncrono local",
      "Compilação de código no Azure DevOps"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão aborda o processo de Grounding (aterramento) do Copilot.",
      "papoReto": "O Copilot não envia seu prompt cru para o modelo de linguagem (LLM). Ele usa o Microsoft Graph para fazer o Aterramento (Grounding), buscando e-mails, arquivos e reuniões relevantes sobre o assunto e anexando isso ao prompt. Isso garante que a resposta da IA seja precisa e baseada nos dados reais da sua empresa.",
      "respostaCerta": "Aterramento (Grounding) realizado via Microsoft Graph",
      "puloDoGato": "Viu 'refinar o prompt com dados do usuário antes de enviar ao LLM' na prova? O termo técnico oficial é Grounding (Aterramento).",
      "cascasDeBanana": [
        "Tradução criptográfica: RMS cuida de chaves de arquivos, não de refinar buscas de IA.",
        "Sincronização de diretório: AD Connect lida com senhas locais de TI, sem relação com prompts de LLM.",
        "Compilação de código: Ferramenta de desenvolvedores Git no Azure DevOps."
      ],
      "dicaOuro": "Aterramento (Grounding) = Enriquecer o prompt com contexto real do Microsoft Graph."
    },
    "id": "ab900_q157"
  },
  {
    "text": "Sua empresa deseja garantir que os dados de prompts digitados pelos colaboradores no Microsoft 365 Copilot não sejam utilizados pela Microsoft para treinar seus modelos de inteligência artificial públicos. Como a Microsoft garante essa proteção de dados?",
    "options": [
      "Os dados são impressos de forma física em papel e arquivados nos datacenters locais.",
      "Os dados do tenant são isolados logicamente e os prompts são descartados após o processamento, sem nunca serem usados para treinar LLMs públicos.",
      "A empresa deve assinar um contrato adicional pago de auditoria militar de IA.",
      "O Copilot só funciona em computadores locais sem qualquer acesso à internet pública."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão aborda a privacidade comercial de dados de prompts no Copilot.",
      "papoReto": "A Microsoft garante Proteção de Dados Comerciais (Commercial Data Protection). Seus prompts e as respostas do Copilot permanecem confidenciais dentro da sua empresa e nunca são salvos ou usados para treinar os modelos globais públicos de IA da OpenAI ou da Microsoft.",
      "respostaCerta": "Os dados do tenant são isolados logicamente e os prompts são descartados após o processamento, sem nunca serem usados para treinar LLMs públicos.",
      "puloDoGato": "Privacidade de IA comercial = Os prompts da sua empresa morrem no seu tenant e não alimentam modelos públicos.",
      "cascasDeBanana": [
        "Imprimir em papel: Absurdo operacional e inviável em serviços modernos de IA SaaS.",
        "Contrato militar de IA: A proteção de dados comerciais está inclusa de fábrica nas licenças padrão do Copilot.",
        "Funcionar sem internet: O Copilot é um serviço SaaS em nuvem que exige conectividade constante."
      ],
      "dicaOuro": "Prompts do Copilot = Seguros no seu tenant, nunca usados para treinar IA pública."
    },
    "id": "ab900_q158"
  },
  {
    "text": "Qual o papel do 'Índice Semântico' (Semantic Index for Copilot) no armazenamento de arquivos do SharePoint Online para otimizar o funcionamento do assistente de IA?",
    "options": [
      "Compactar arquivos duplicados de imagem no OneDrive de forma dinâmica.",
      "Gerenciar chaves de criptografia e senhas locais dos administradores do tenant.",
      "Criar um mapa conceitual de significados e intenções das palavras contidas nos arquivos, permitindo que o Copilot localize dados de forma muito mais rápida e contextual.",
      "Traduzir automaticamente todas as páginas do site para o inglês padrão."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão aborda o Semantic Index do M365 Copilot.",
      "papoReto": "O Semantic Index não busca apenas palavras idênticas; ele entende o significado das frases. Ao indexar o SharePoint, ele sabe que se você pedir 'relatório de vendas', ele deve trazer arquivos contendo 'faturamento de clientes' ou 'receita trimestral', porque as palavras são semanticamente próximas.",
      "respostaCerta": "Criar um mapa conceitual de significados e intenções das palavras contidas nos arquivos, permitindo que o Copilot localize dados de forma muito mais rápida e contextual.",
      "puloDoGato": "Semantic Index = Indexador avançado que entende a intenção e o significado lógico, e não apenas correspondências exatas de letras.",
      "cascasDeBanana": [
        "Compactar imagens: Otimizações de imagens são feitas por compressões de mídia, sem ligação com indexação de IA.",
        "Gerenciar chaves: Responsabilidade do Azure Key Vault ou RMS.",
        "Traduzir páginas: O SharePoint traduz páginas por meio de variações multilíngues de design, não pelo Semantic Index do Copilot."
      ],
      "dicaOuro": "Semantic Index = Índice inteligente que mapeia o significado contextual dos dados da empresa."
    },
    "id": "ab900_q159"
  },
  {
    "text": "Sua empresa deseja licenciar o Microsoft 365 Copilot. Qual painel de controle central o administrador de faturamento da empresa deve acessar para adquirir as licenças add-on e atribuí-las aos colaboradores selecionados?",
    "options": [
      "Centro de administração do Microsoft Teams apenas",
      "Portal do Azure DevOps de engenharia",
      "Gerenciador de Acesso Condicional do Entra ID",
      "Microsoft 365 admin center (na aba Faturamento/Licenciamento)"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão aborda a compra e atribuição de licenças de Copilot.",
      "papoReto": "Toda a gestão comercial de compras de assinaturas e add-ons (como o Copilot) e a atribuição de licenças para as contas dos usuários corporativos são de responsabilidade do painel central Microsoft 365 admin center.",
      "respostaCerta": "Microsoft 365 admin center (na aba Faturamento/Licenciamento)",
      "puloDoGato": "Compra de licenças ou atribuição a usuários novos no M365 = Microsoft 365 admin center.",
      "cascasDeBanana": [
        "Teams admin center: Gerencia apenas funcionalidades do Teams (chats, chamadas), não trata de compras e licenciamentos globais da Microsoft.",
        "Azure DevOps: Utilizado para gerenciar desenvolvimento e códigos-fonte.",
        "Acesso Condicional: Lida com restrições lógicas de login de segurança, sem interface de compras e faturamento."
      ],
      "dicaOuro": "Atribuir licenças do Copilot a funcionários = Microsoft 365 admin center."
    },
    "id": "ab900_q160"
  },
  {
    "text": "Qual das seguintes tarefas de administração do Copilot pode ser realizada pelo painel de configurações do Microsoft 365 admin center?",
    "options": [
      "Habilitar ou desabilitar quais plugins adicionais de parceiros homologados (como Jira ou ServiceNow) podem ser ativados pelos usuários no Copilot.",
      "Reescrever o código binário nativo dos aplicativos do Word instalados localmente.",
      "Verificar a temperatura física das CPUs locais no escritório.",
      "Formatar de forma remota o sistema operacional Windows 11 dos colaboradores."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão aborda o controle administrativo de plugins no Copilot.",
      "papoReto": "No portal de administração do M365, os administradores gerenciam a governança da IA. Eles podem definir políticas de segurança globais, liberar ou bloquear quais plugins e extensões externas os usuários podem ativar nas conversas com o Copilot.",
      "respostaCerta": "Habilitar ou desabilitar quais plugins adicionais de parceiros homologados (como Jira ou ServiceNow) podem ser ativados pelos usuários no Copilot.",
      "puloDoGato": "Gerenciar plugins permitidos de terceiros no Copilot = Configurações do M365 Admin Center.",
      "cascasDeBanana": [
        "Reescrever código binário: O código fonte dos aplicativos do Office é fechado e gerenciado apenas pela engenharia da Microsoft.",
        "Temperatura de CPUs: O M365 lida com nuvem SaaS, hardware local é monitorado por softwares locais.",
        "Formatar computadores: A formatação e reinstalação de OS é gerenciada por ferramentas MDM de provisionamento como Autopilot/Intune."
      ],
      "dicaOuro": "Governança de plugins e conectores de IA = M365 Admin Center."
    },
    "id": "ab900_q161"
  },
  {
    "text": "Ao redigir um e-mail longo de resposta a um cliente no Outlook, qual recurso do Copilot integrado à janela de redação ajuda o usuário a resumir a conversa de e-mails anteriores e sugerir opções de tom (formal, casual, curto) de escrita de forma rápida?",
    "options": [
      "Ferramenta de Mala Direta clássica do Word",
      "Copilot no Outlook (Rascunhar com Copilot / Tom de escrita)",
      "Assinatura de e-mail dinâmica baseada em DNS",
      "Log de auditoria unificada do Defender"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão foca na funcionalidade do Copilot integrado no Outlook.",
      "papoReto": "Na janela de nova mensagem do Outlook, o ícone do Copilot permite 'Rascunhar com Copilot'. Você digita instruções básicas (ex: 'agradeça o convite e recuse de forma formal') e a IA gera o rascunho completo no tom selecionado.",
      "respostaCerta": "Copilot no Outlook (Rascunhar com Copilot / Tom de escrita)",
      "puloDoGato": "Rascunhar respostas e escolher o tom (formal, casual) diretamente no e-mail = Copilot no Outlook.",
      "cascasDeBanana": [
        "Mala Direta: Recurso clássico de impressão em lote antigo de cartas físicas, sem inteligência generativa de e-mails.",
        "Assinatura dinâmica baseada em DNS: DNS gerencia domínios lógicos de e-mails, assinaturas visuais de e-mails são cosméticas.",
        "Log de auditoria: Registra eventos de conformidade de acessos de TI, sem criar textos."
      ],
      "dicaOuro": "Criar e-mails inteligentes no tom certo = Copilot no Outlook."
    },
    "id": "ab900_q162"
  },
  {
    "text": "Sua empresa deseja analisar o impacto do uso do Copilot na produtividade diária dos colaboradores (como quantas horas de reuniões foram economizadas ou a satisfação dos funcionários com as sugestões de IA). Qual painel fornece esses dados consolidados de ROI de IA?",
    "options": [
      "Portal do Microsoft Defender for Identity local",
      "Message Center do Microsoft 365 admin center",
      "Painel do Copilot (Copilot Dashboard) no Viva Insights / M365 admin center",
      "Centro de administração local do roteador Wi-Fi"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão aborda o monitoramento de retorno financeiro e produtividade de IA (Copilot Dashboard).",
      "papoReto": "A Microsoft fornece o Copilot Dashboard no Viva Insights. Nele, a TI e os gestores visualizam gráficos agregados e anônimos sobre o uso de IA, taxas de adoção por setor e estimativas de horas de trabalho economizadas pelo uso de resumos inteligentes.",
      "respostaCerta": "Painel do Copilot (Copilot Dashboard) no Viva Insights / M365 admin center",
      "puloDoGato": "Avaliar retorno financeiro (ROI) e adoção qualitativa do Copilot na empresa = Copilot Dashboard.",
      "cascasDeBanana": [
        "Defender for Identity: Monitora ataques e vulnerabilidades lógicas cibernéticas locais de senhas.",
        "Message Center: Notificações de novos lançamentos de ferramentas de software.",
        "Roteador Wi-Fi: Gerencia conectividade local de cabos e Wi-Fi de computadores."
      ],
      "dicaOuro": "Análise gráfica de uso de IA e retorno de produtividade = Copilot Dashboard."
    },
    "id": "ab900_q163"
  },
  {
    "text": "O que descreve melhor o recurso 'Grounding' (Aterramento) no processamento de linguagem natural do Microsoft 365 Copilot?",
    "options": [
      "Ação física de conectar um cabo de aterramento de energia nos servidores físicos locais.",
      "Configurar políticas de Smart Lockout no Entra ID para bloquear contas hackers.",
      "Algoritmo de compressão de arquivos que reduz o tamanho de planilhas no OneDrive.",
      "Processo de buscar informações corporativas relevantes às quais o usuário tem acesso legal para enriquecer o prompt com dados confiáveis antes de gerar a resposta de IA."
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão foca no conceito de Aterramento (Grounding) no contexto de IA corporativa.",
      "papoReto": "Os modelos de IA públicos não conhecem os dados da sua empresa. O Aterramento (Grounding) resolve isso. Ele extrai informações do seu SharePoint/OneDrive/E-mails (via Microsoft Graph) e as anexa ao prompt. Assim, a resposta da IA é precisa e 100% contextualizada na realidade da sua empresa.",
      "respostaCerta": "Processo de buscar informações corporativas relevantes às quais o usuário tem acesso legal para enriquecer o prompt com dados confiáveis antes de gerar a resposta de IA.",
      "puloDoGato": "Grounding = Conectar o modelo de IA aos dados reais e confidenciais do tenant para garantir respostas verídicas e personalizadas.",
      "cascasDeBanana": [
        "Aterramento de energia: Medida física de eletricidade local para evitar queima de hardware, fora de IA SaaS.",
        "Smart Lockout: Funcionalidade de bloqueio de logins de usuários no Entra ID.",
        "Compressão de planilhas: Compactações matemáticas para poupar espaço de armazenamento."
      ],
      "dicaOuro": "Evitar respostas falsas de IA (alucinações) conectando dados da empresa = Grounding (Aterramento)."
    },
    "id": "ab900_q164"
  },
  {
    "text": "Ao utilizar o Microsoft 365 Copilot no Microsoft Teams para resumir uma reunião online que acabou de terminar, o que é correto afirmar sobre os requisitos técnicos para que a IA consiga gerar o resumo e a lista de tarefas da reunião?",
    "options": [
      "A gravação da reunião ou a transcrição ao vivo (Transcription) deve ter sido ativada durante a chamada de vídeo.",
      "A reunião deve ter contado obrigatoriamente com a participação de um robô físico de TI.",
      "Todos os participantes devem possuir planos de internet dedicada síncrona acima de 1 Gbps.",
      "A reunião deve ter durado exatamente 60 minutos para validação de logs."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão foca nos requisitos do Copilot em reuniões do Teams.",
      "papoReto": "Para que o Copilot consiga gerar o resumo de quem falou o que, as decisões tomadas e os próximos passos, a reunião do Teams precisa ter a Transcrição (Transcription) ativa. A IA lê a transcrição gerada pelo Teams para construir os insights.",
      "respostaCerta": "A gravação da reunião ou a transcrição ao vivo (Transcription) deve ter sido ativada durante a chamada de vídeo.",
      "puloDoGato": "Sem transcrição ativa na chamada do Teams, o Copilot não tem dados de fala convertidos em texto para ler e gerar resumos.",
      "cascasDeBanana": [
        "Robô físico de TI: Totalmente desnecessário, o processamento de áudio é feito por APIs de nuvem lógicas.",
        "Internet acima de 1 Gbps: O Teams funciona perfeitamente com conexões móveis e domésticas normais estáveis.",
        "Duração exata de 60 minutos: O Copilot resume chamadas de qualquer duração, desde reuniões curtas de 5 minutos até reuniões longas de horas."
      ],
      "dicaOuro": "Resumo de reuniões pelo Copilot = Ativar a Transcrição (Transcription) no Teams."
    },
    "id": "ab900_q165"
  },
  {
    "text": "Sua empresa deseja criar um assistente de IA customizado para atuar no chat de ajuda técnica interna, conectado a bases de dados próprias de manuais de roteadores e servidores locais. Qual a ferramenta oficial da Microsoft recomendada para construir esse agente de IA?",
    "options": [
      "Microsoft Bookings",
      "Microsoft Copilot Studio",
      "Microsoft Sway",
      "Azure DevOps Pipeline console"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão aborda a ferramenta de criação de agentes Copilot Studio.",
      "papoReto": "O Microsoft Copilot Studio (antigo Power Virtual Agents) é a ferramenta no-code/low-code que permite criar, gerenciar e publicar agentes de IA personalizados. Você pode conectar o agente a fontes de dados externas e publicar no Teams da empresa.",
      "respostaCerta": "Microsoft Copilot Studio",
      "puloDoGato": "Criar agentes, bots inteligentes de IA, diálogos customizados e conectar a APIs externas na Power Platform = Copilot Studio.",
      "cascasDeBanana": [
        "Microsoft Bookings: Destinado a agendamento de consultas por clientes externos.",
        "Microsoft Sway: Cria apresentações e narrativas digitais web interativas.",
        "Azure DevOps Pipeline: Automatiza testes e deploys de códigos de softwares."
      ],
      "dicaOuro": "Criar e customizar agentes e robôs de chat de IA = Microsoft Copilot Studio."
    },
    "id": "ab900_q166"
  },
  {
    "text": "Qual a principal vantagem de integrar o Microsoft Graph nas consultas feitas ao Microsoft 365 Copilot no dia a dia corporativo?",
    "options": [
      "O Graph melhora a velocidade da placa gráfica de vídeo local (GPU) do computador do usuário.",
      "O Graph dispensa o uso de contas e logins Entra ID para uso de IA.",
      "O Graph unifica o acesso a e-mails, chats, sites e calendários do usuário de forma segura, garantindo que o Copilot tenha visibilidade contextual ampla de dados do colaborador.",
      "O Graph migra planilhas Excel automaticamente para formato de imagem de dados."
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão foca na importância do Microsoft Graph no ecossistema de produtividade M365.",
      "papoReto": "O Microsoft Graph é o grande integrador. Ele mapeia os relacionamentos de dados do colaborador (quais reuniões ele participou, quais arquivos editou, com quem conversa por chat). O Copilot consulta o Graph para entender o contexto de trabalho real do usuário e dar respostas personalizadas.",
      "respostaCerta": "O Graph unifica o acesso a e-mails, chats, sites e calendários do usuário de forma segura, garantindo que o Copilot tenha visibilidade contextual ampla de dados do colaborador.",
      "puloDoGato": "Microsoft Graph = O motor de conexões lógicas de informações de e-mails, chats e arquivos do tenant.",
      "cascasDeBanana": [
        "Placa de vídeo local (GPU): O termo 'Graph' refere-se ao modelo de gráfico de conexões de dados lógicos (Data Graph), sem relação com hardware local de placas de vídeo.",
        "Dispensar logins Entra ID: O Entra ID é a base de login e autenticação obrigatória de todo o ecossistema.",
        "Migrar planilhas para imagens: O Graph lida com dados brutos, sem realizar conversões de formatos de mídias."
      ],
      "dicaOuro": "Motor que conecta seus e-mails, chats e arquivos ao Copilot = Microsoft Graph."
    },
    "id": "ab900_q167"
  },
  {
    "text": "Um administrador quer impedir que estagiários da empresa publiquem novos agentes criados no Copilot Studio diretamente como aplicativos no catálogo de aplicativos padrão do Microsoft Teams. Onde essa governança de permissões deve ser configurada?",
    "options": [
      "Nas configurações locais do sistema operacional Windows 11 dos estagiários",
      "Nas configurações de faturamento e compras do tenant",
      "Nas regras de lixo eletrônico locais do Outlook do administrador",
      "Nas políticas de permissão de aplicativos (App Permission Policies) do Teams admin center"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão aborda as políticas de governança de publicação de agentes.",
      "papoReto": "Agentes publicados no Teams atuam como aplicativos. Controlar quem pode instalar, visualizar ou publicar aplicativos customizados (custom apps) no catálogo de aplicativos do Teams é feito por meio de Políticas de Permissão de Aplicativos (App Permission Policies) no Teams admin center.",
      "respostaCerta": "Nas políticas de permissão de aplicativos (App Permission Policies) do Teams admin center",
      "puloDoGato": "Publicação ou instalação controlada de robôs/agentes no Teams = App Permission Policies no Teams Admin.",
      "cascasDeBanana": [
        "Windows 11 local: O bloqueio é lógico de nuvem no tenant, não local na máquina física do colaborador.",
        "Configurações de faturamento: Gerenciam pagamentos e assinaturas comerciais de licenças.",
        "Regras do Outlook: Apenas organizam a caixa de entrada do Outlook."
      ],
      "dicaOuro": "Bloquear ou liberar aplicativos e bots customizados para os funcionários no Teams = App Permission Policies."
    },
    "id": "ab900_q168"
  },
  {
    "text": "Sua equipe jurídica deseja garantir que o Copilot e os agentes customizados criados na empresa cumpram princípios básicos de 'IA Responsável' (Responsible AI). Qual das seguintes alternativas representa um desses princípios oficiais?",
    "options": [
      "Transparência, equidade, confiabilidade e privacidade de dados lógicos.",
      "Garantir velocidade máxima de conexões físicas de roteadores.",
      "Proibir o uso de temas escuros nos aplicativos do Office.",
      "Exigir que todos os logs de logins sejam apagados a cada 24 horas."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão foca nos pilares oficiais da IA Responsável (Responsible AI) da Microsoft.",
      "papoReto": "A Microsoft desenvolve suas IAs sob a filosofia de IA Responsável, baseada em 6 pilares básicos: Equidade (Fairness), Confiabilidade e Segurança (Reliability and Safety), Privacidade e Segurança (Privacy and Security), Inclusão (Inclusiveness), Transparência (Transparency) e Responsabilidade (Accountability).",
      "respostaCerta": "Transparência, equidade, confiabilidade e privacidade de dados lógicos.",
      "puloDoGato": "Responsible AI da Microsoft preza por ética, inclusão, transparência e segurança de dados lógicos.",
      "cascasDeBanana": [
        "Velocidade de roteadores: Infraestrutura física local, sem relação com comportamento ético de modelos matemáticos de IA.",
        "Proibir temas escuros: Preferência visual e de ergonomia estética dos usuários, sem impacto ético de IA.",
        "Apagar logs a cada 24 horas: Reduziria a auditoria e rastreabilidade, violando a segurança e responsabilidade (Accountability)."
      ],
      "dicaOuro": "Pilares éticos oficiais de IA da Microsoft = Princípios de IA Responsável (Responsible AI)."
    },
    "id": "ab900_q169"
  },
  {
    "text": "Ao agendar uma reunião do Teams que contará com o suporte do Copilot para gerar o resumo dos diálogos em tempo real, o que acontece com a segurança das transcrições geradas se a reunião tratar de assuntos altamente confidenciais?",
    "options": [
      "As transcrições são publicadas na internet de forma automática para validação de dados.",
      "As transcrições e os prompts do Copilot permanecem confidenciais e protegidos pelas regras de segurança de dados do tenant M365.",
      "A Microsoft cobra uma taxa extra na fatura de $10 dólares por palavra confidencial falada na chamada.",
      "O Teams impede reuniões confidenciais com IA ativa por questões militares."
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão aborda a segurança e conformidade de reuniões com uso de IA.",
      "papoReto": "As transcrições e logs gerados pelo Copilot durante as chamadas do Teams seguem as mesmas diretrizes rígidas de segurança do M365. Seus dados continuam privados, protegidos no seu tenant e sem vazamentos externos.",
      "respostaCerta": "As transcrições e os prompts do Copilot permanecem confidenciais e protegidos pelas regras de segurança de dados do tenant M365.",
      "puloDoGato": "Transcrições de reuniões do Teams têm o mesmo nível de proteção de conformidade que um arquivo de texto confidencial salvo no SharePoint.",
      "cascasDeBanana": [
        "Publicar na internet: Causaria quebras de sigilo graves que destruiriam a reputação da nuvem pública corporativa.",
        "Taxa de $10 por palavra: Cobranças são baseadas em assinaturas de licenças mensais estáveis, sem taxas avulsas baseadas em falas.",
        "Impedir reuniões confidenciais: O M365 é projetado para lidar com dados altamente confidenciais em conformidade."
      ],
      "dicaOuro": "Transcrições e resumos de reuniões do Teams = 100% seguros dentro do tenant."
    },
    "id": "ab900_q170"
  },
  {
    "text": "Sua empresa deseja configurar um agente de IA do Copilot para que ele possa responder a perguntas de clientes externos sobre o status de entregas de pedidos no site de vendas da empresa. Onde esse agente pode ser publicado além do Teams para o público geral?",
    "options": [
      "Apenas localmente no prompt de comando (CMD) dos computadores corporativos",
      "Nas atualizações de drivers locais do Windows Update",
      "Páginas de sites públicos na web ou portais de clientes (Custom Websites / Portals) integrados via Copilot Studio",
      "Nos cabeçalhos de DNS do provedor de domínio externo"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão foca nos canais de publicação de agentes do Copilot Studio.",
      "papoReto": "Com o Copilot Studio, você pode publicar o agente em múltiplos canais: no Teams (interno), em aplicativos móveis customizados ou integrados diretamente em sites públicos (websites) e portais de autoatendimento para clientes externos e anônimos da empresa.",
      "respostaCerta": "Páginas de sites públicos na web ou portais de clientes (Custom Websites / Portals) integrados via Copilot Studio",
      "puloDoGato": "Canais de agentes do Copilot Studio = Teams, Websites, Apps Móveis, Facebook, Telegram, etc.",
      "cascasDeBanana": [
        "Prompt de comando (CMD): Interface de texto local do Windows para técnicos, inadequada para autoatendimento de clientes comerciais.",
        "Windows Update: Serviço de patches de segurança locais do Windows, sem ligação com bots de atendimento.",
        "Cabeçalhos DNS: Rotas lógicas de rede, sem interface visual de conversas de chat."
      ],
      "dicaOuro": "Estender o robô de IA do Copilot Studio para clientes externos = Publicar no canal 'Custom Website'."
    },
    "id": "ab900_q171"
  },
  {
    "text": "Ao criar um agente de IA personalizado no Microsoft Copilot Studio, o desenvolvedor configura frases de exemplo (como 'Como resgatar reembolso' ou 'Pedir reembolso') para que o robô de chat entenda quando deve iniciar um determinado fluxo de conversa. Qual a nomenclatura técnica desse gatilho de início de diálogo?",
    "options": [
      "Variáveis locais de banco de dados",
      "Expressões regulares simples de e-mail",
      "Políticas de Acesso Condicional",
      "Frases de gatilho (Trigger Phrases)"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão foca na lógica de gatilhos do Copilot Studio (Trigger Phrases).",
      "papoReto": "No Copilot Studio, cada conversa (tópico) precisa de um gatilho. As Frases de Gatilho (Trigger Phrases) são frases de exemplo que ensinam a IA a reconhecer a intenção do usuário. Se o usuário digitar algo parecido (mesmo com erros de digitação), o bot ativa o tópico correto.",
      "respostaCerta": "Frases de gatilho (Trigger Phrases)",
      "puloDoGato": "Frases de exemplo digitadas pelo usuário para ativar um fluxo de conversa do bot = Trigger Phrases (Frases de Gatilho).",
      "cascasDeBanana": [
        "Variáveis locais: Armazenam valores temporários durante a conversa (como salvar o nome do usuário), não iniciam tópicos.",
        "Expressões regulares: Buscam strings de textos fixas padronizadas, o Copilot Studio usa inteligência semântica e não apenas correspondências exatas de RegEx.",
        "Acesso Condicional: Lida com restrições lógicas de segurança de logins do tenant."
      ],
      "dicaOuro": "Treinar o robô a reconhecer a intenção de início de chat = Configurar Trigger Phrases."
    },
    "id": "ab900_q172"
  },
  {
    "text": "Sua empresa criou um agente de IA no Copilot Studio para coletar os dados de reembolso dos funcionários. Durante a conversa, o bot precisa extrair e validar dados específicos como datas e valores monetários das frases digitadas. Qual recurso nativo do Copilot Studio gerencia essa extração inteligente de conceitos?",
    "options": [
      "Entidades (Entities)",
      "Variáveis de Ambiente síncronas",
      "Regras de lixo eletrônico locais",
      "Cofres de senhas do Azure Key Vault"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão aborda o uso de Entidades (Entities) no Copilot Studio.",
      "papoReto": "No Copilot Studio, Entidades (Entities) funcionam como detectores inteligentes. O bot escuta a conversa e extrai tipos de dados estruturados, como Datas, Cidades, Números, Valores em Dinheiro ou E-mails, poupando o desenvolvedor de ter que perguntar e validar os dados campo a campo.",
      "respostaCerta": "Entidades (Entities)",
      "puloDoGato": "Extrair informações complexas da fala do usuário (como reconhecer que 'próxima quarta' é uma Data) = Uso de Entidades (Entities).",
      "cascasDeBanana": [
        "Variáveis de Ambiente: Configurações do Power Apps para guardar URLs de banco de dados, sem processamento de linguagem de chat.",
        "Regras de lixo eletrônico: Organizam a caixa de e-mails de spam no Outlook.",
        "Azure Key Vault: Guarda credenciais criptografadas de APIs."
      ],
      "dicaOuro": "Extrair dados de linguagem natural estruturando como variáveis de chat = Entidades (Entities)."
    },
    "id": "ab900_q173"
  },
  {
    "text": "Ao planejar a criação de um agente de IA no Copilot Studio, o administrador deseja que o robô consiga consultar um sistema de terceiros que não é da Microsoft (como o ServiceNow ou Salesforce) para verificar o status de chamados de suporte. Qual recurso habilita essa comunicação com APIs externas?",
    "options": [
      "Políticas de Acesso Condicional baseadas em IP local",
      "Conectores de integração (Connectors / Power Platform Connectors)",
      "Log de Auditoria unificada do Purview",
      "Configurações de rede física do roteador corporativo local"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão foca na extensibilidade de agentes através de conectores.",
      "papoReto": "O Copilot Studio herda o ecossistema de conectores da Power Platform. Existem centenas de conectores prontos para sistemas de mercado (Salesforce, ServiceNow, SQL). Com eles, o robô de chat pode ler e gravar dados em sistemas externos com autenticação segura.",
      "respostaCerta": "Conectores de integração (Connectors / Power Platform Connectors)",
      "puloDoGato": "Conectar o bot com Salesforce, ServiceNow ou outros sistemas fora do M365 = Usar Connectores (Connectors).",
      "cascasDeBanana": [
        "Acesso Condicional: Lida com restrições lógicas e MFA de acessos do tenant.",
        "Log de Auditoria: Rastreia logs históricos de cliques de TI.",
        "Roteador corporativo: Conectividade física de internet local de computadores."
      ],
      "dicaOuro": "Falar com sistemas externos no Copilot Studio = Utilizar Conectores (Connectors)."
    },
    "id": "ab900_q174"
  },
  {
    "text": "Um administrador de TI ativou uma regra de DLP (Prevenção contra Perda de Dados) no Purview que bloqueia o compartilhamento externo de arquivos sigilosos da empresa. O que acontece se um desenvolvedor tentar criar um agente no Copilot Studio que acesse esses mesmos arquivos bloqueados e tente enviar para usuários de fora do tenant?",
    "options": [
      "O agente do Copilot Studio ignora as regras de DLP e envia o arquivo de qualquer forma.",
      "O tenant inteiro do Microsoft 365 é suspenso por violação comercial.",
      "A política de DLP do Purview bloqueia o acesso do agente ao documento sensível, preservando as restrições lógicas do tenant.",
      "O arquivo é convertido automaticamente em uma apresentação de PowerPoint de imagens."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão aborda a segurança integrada entre Copilot Studio e Purview DLP.",
      "papoReto": "Os agentes criados no Copilot Studio respeitam rigorosamente a governança de dados do Purview. Se uma regra de DLP ou de rótulo de confidencialidade proíbe o compartilhamento externo de um documento do SharePoint, o agente de IA herdará essa regra e será bloqueado caso tente expor os dados.",
      "respostaCerta": "A política de DLP do Purview bloqueia o acesso do agente ao documento sensível, preservando as restrições lógicas do tenant.",
      "puloDoGato": "IA e agentes não são brechas de segurança. O DLP e as restrições de permissões do Microsoft Graph barram ações indevidas de bots.",
      "cascasDeBanana": [
        "Agente ignora o DLP: Seria uma falha gravíssima de segurança na nuvem pública Microsoft.",
        "Tenant suspenso: A infraestrutura protege de forma lógica, sem punir com suspensões automáticas comerciais do tenant de série.",
        "PowerPoint de imagens: O arquivo permanece intacto e bloqueado, sem sofrer conversões de formatos."
      ],
      "dicaOuro": "Segurança de dados e DLP > Funcionamento de Agentes (IA respeita o DLP)."
    },
    "id": "ab900_q175"
  },
  {
    "text": "Sua empresa deseja criar um agente de IA no Copilot Studio para atuar no Microsoft Teams corporativo. Qual o tipo de licença de acesso padrão do M365 necessário para que os colaboradores comuns consigam interagir com o agente criado dentro dos canais de chat do Teams?",
    "options": [
      "Uma licença avulsa cara do Power BI Premium por usuário",
      "Licença dedicada de desenvolvimento de softwares do Azure DevOps",
      "Nenhuma licença, pois o Teams é um aplicativo público aberto sem autenticação",
      "Uma licença ativa de Microsoft Teams (incluída em planos comerciais padrão como Business ou Enterprise)"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão foca na acessibilidade e licenciamento de bots no Teams.",
      "papoReto": "Para os usuários comuns conversarem com agentes e bots integrados no Teams, eles não precisam comprar licenças adicionais caras do Copilot Studio. Basta que possuam a licença padrão ativa do Microsoft Teams corporativo para acessar as interfaces de chat do canal.",
      "respostaCerta": "Uma licença ativa de Microsoft Teams (incluída em planos comerciais padrão como Business ou Enterprise)",
      "puloDoGato": "Interagir com robôs criados no Teams = Ter licença padrão de acesso do Teams ativada.",
      "cascasDeBanana": [
        "Power BI Premium: Destinado a visualizações avançadas de relatórios estatísticos corporativos.",
        "Azure DevOps: Destinado a orquestrações de testes de softwares de desenvolvedores.",
        "Aplicativo público sem autenticação: O Teams corporativo é um serviço SaaS fechado e exige logins Entra ID estáveis."
      ],
      "dicaOuro": "Conversar com agentes no Teams = Apenas ter licença ativa do Teams."
    },
    "id": "ab900_q176"
  },
  {
    "text": "Ao configurar tópicos de conversa (Topics) no Copilot Studio, qual a diferença entre 'System Topics' (Tópicos do Sistema) e 'Custom Topics' (Tópicos Personalizados)?",
    "options": [
      "System Topics: são tópicos nativos prontos da Microsoft (como saudações, fim de conversa). Custom Topics: são criados pelo desenvolvedor para resolver fluxos específicos de negócios.",
      "System Topics são gratuitos; Custom Topics são pagos por execução.",
      "System Topics só funcionam no Outlook; Custom Topics só funcionam no Teams.",
      "Não há diferenças práticas nas regras de diálogos de chat."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão aborda a tipagem de tópicos no Copilot Studio.",
      "papoReto": "Tópicos são o coração da conversa. O Copilot Studio traz System Topics prontos de fábrica (ex: saudações como 'Olá', ou tópicos de encerramento como 'Obrigado, era só isso'). Já os Custom Topics são criados pela TI para responder regras de negócios (ex: 'Como pedir férias').",
      "respostaCerta": "System Topics: são tópicos nativos prontos da Microsoft (como saudações, fim de conversa). Custom Topics: são criados pelo desenvolvedor para resolver fluxos específicos de negócios.",
      "puloDoGato": "Gatilhos básicos de saudações e redirecionamentos prontos = System Topics. Fluxos de negócios próprios do cliente = Custom Topics.",
      "cascasDeBanana": [
        "Carga de custos por execução: O licenciamento é baseado em assinaturas gerais, sem tarifas extras por tipo de tópico executado.",
        "Restrições a aplicativos: Ambos funcionam de forma integrada em qualquer canal de publicação (Teams, Web, Facebook).",
        "Sem diferenças práticas: O comportamento e a origem da criação lógicos são completamente distintos."
      ],
      "dicaOuro": "Tópicos de saudações nativos = System Topics. Tópicos de negócios do cliente = Custom Topics."
    },
    "id": "ab900_q177"
  },
  {
    "text": "Sua equipe de TI desenvolveu um agente de IA no Copilot Studio, mas o robô de chat falha ao responder perguntas que não foram previamente configuradas em seus tópicos de conversas estruturados. Qual recurso do Copilot Studio pode ser ativado para que a IA busque respostas automaticamente nas páginas públicas de ajuda da empresa na web sempre que não souber a resposta?",
    "options": [
      "Políticas de Acesso Condicional",
      "Respostas Generativas (Generative Answers / Conversational Boosting)",
      "Log de Auditoria unificada",
      "Smart Lockout do Entra ID"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão foca na funcionalidade de Conversational Boosting (Respostas Generativas).",
      "papoReto": "As Respostas Generativas (Generative Answers / Conversational Boosting) utilizam o poder dos LLMs. Você cadastra a URL do site de ajuda pública ou manuais da empresa. Se o usuário fizer uma pergunta que o bot não tem em tópicos fixos, a IA varre o site cadastrado, extrai a informação e gera uma resposta de forma dinâmica e imediata.",
      "respostaCerta": "Respostas Generativas (Generative Answers / Conversational Boosting)",
      "puloDoGato": "Fazer o bot responder a partir de um site cadastrado ou arquivos carregados de forma dinâmica quando não houver tópicos manuais prontos = Generative Answers.",
      "cascasDeBanana": [
        "Acesso Condicional: Lida com segurança de acesso ao portal do tenant.",
        "Log de Auditoria: Apenas exibe o histórico de cliques feitos por técnicos no console.",
        "Smart Lockout: Bloqueia tentativas de invasão por força bruta no login corporativo."
      ],
      "dicaOuro": "Buscar respostas automáticas em sites e manuais da empresa = Ativar Generative Answers."
    },
    "id": "ab900_q178"
  },
  {
    "text": "Ao testar um novo agente de IA no painel do Copilot Studio, qual ferramenta do portal permite aos desenvolvedores acompanhar o fluxo lógico das conversas em tempo real, visualizando quais variáveis estão sendo preenchidas a cada resposta digitada no chat de teste?",
    "options": [
      "Portal do Azure Monitor",
      "Activity Explorer do Microsoft Purview",
      "Rastreamento de Tópicos (Topic Tracing / Test Bot Canvas)",
      "Message Center do admin center"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão aborda o Test Bot Canvas de depuração do Copilot Studio.",
      "papoReto": "O Copilot Studio possui um painel de teste integrado. Ao digitar no chat de teste (Test Bot Canvas), a ferramenta de Rastreamento de Tópicos exibe em tempo real o fluxo lógico, mostrando caixas verdes nos caminhos executados e os valores das variáveis salvas, facilitando a depuração rápida.",
      "respostaCerta": "Rastreamento de Tópicos (Topic Tracing / Test Bot Canvas)",
      "puloDoGato": "Ver em tempo real quais caixas de diálogo o bot está ativando no portal do desenvolvedor = Topic Tracing.",
      "cascasDeBanana": [
        "Azure Monitor: Monitora a saúde global de APIs e consumo de servidores do Azure na nuvem.",
        "Activity Explorer: Exibe auditoria e logs de alterações feitas em arquivos e rótulos de confidencialidade do Purview.",
        "Message Center: Mostra avisos semanais de novidades da Microsoft."
      ],
      "dicaOuro": "Depurar o bot visualizando a execução lógicas de diálogos = Usar Topic Tracing."
    },
    "id": "ab900_q179"
  },
  {
    "text": "Sua empresa deseja criar um agente de IA no Copilot Studio que possa enviar e-mails de notificação automáticos para o RH utilizando o e-mail corporativo do próprio funcionário que está conversando com o bot. Qual ação de fluxo da Power Platform deve ser ativada na conversa do bot?",
    "options": [
      "Ativar uma política de Acesso Condicional",
      "Mapear conectores físicos locais de rede",
      "Desativar o MFA da conta do colaborador",
      "Chamar uma ação do Power Automate (Call an Action)"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão foca na integração entre Copilot Studio e Power Automate.",
      "papoReto": "Para realizar tarefas ativas (enviar e-mails, criar registros no SharePoint ou resetar senhas no AD), o Copilot Studio chama um fluxo do Power Automate por meio do nó 'Call an Action' (Chamar uma Ação), retornando dados processados de volta para a conversa do bot.",
      "respostaCerta": "Chamar uma ação do Power Automate (Call an Action)",
      "puloDoGato": "Pediu 'fazer o bot executar uma tarefa ativa em outros sistemas do M365 (enviar e-mail, criar contatos, etc)'? A resposta é Chamar um fluxo do Power Automate.",
      "cascasDeBanana": [
        "Acesso Condicional: Lida com restrições e regras de segurança de logins no Entra ID.",
        "Mapear conectores locais: Termo de infraestrutura física de rede local de switches.",
        "Desativar MFA: Prática insegura que viola regras básicas de conformidade e segurança corporativa."
      ],
      "dicaOuro": "Bot executando ações ativas de sistemas M365 = Chamar fluxo do Power Automate."
    },
    "id": "ab900_q180"
  },
  {
    "text": "O que descreve melhor as 'Variáveis Globais' (Global Variables / Bot Variables) configuradas nas conversas de agentes no Copilot Studio?",
    "options": [
      "Valores e informações de contexto (como o nome do usuário ou departamento) que permanecem salvos na memória do bot durante toda a conversa, independente de qual tópico seja ativado.",
      "Endereços IPs físicos das máquinas locais de colaboradores no escritório.",
      "Códigos criptografados salvos de chaves RMS de arquivos.",
      "Regras de segurança globais configuradas no firewall local."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão foca no gerenciamento de estado e dados (Variáveis) nas conversas de IA.",
      "papoReto": "Variáveis Globais salvam dados coletados durante a conversa inteira. Se o usuário digitar o nome dele no primeiro tópico (Saudações), a informação é salva em uma variável global. Assim, quando o bot mudar de assunto (ex: no tópico de Reembolso), ele ainda lembrará do nome dele sem precisar perguntar de novo.",
      "respostaCerta": "Valores e informações de contexto (como o nome do usuário ou departamento) que permanecem salvos na memória do bot durante toda a conversa, independente de qual tópico seja ativado.",
      "puloDoGato": "Salvar e compartilhar dados lógicos coletados entre múltiplos tópicos de conversas na mesma sessão do bot = Variáveis Globais (Global/Bot Variables).",
      "cascasDeBanana": [
        "IPs físicos: Gerenciados pelo protocolo DHCP da rede local de TI.",
        "Chaves RMS: Lidadas em cabeçalhos de arquivos protegidos pelo Purview.",
        "Firewall local: Controla portas lógicas de redes contra hackers."
      ],
      "dicaOuro": "Manter dados salvos na memória do bot na conversa inteira = Variáveis Globais."
    },
    "id": "ab900_q181"
  },
  {
    "text": "Sua empresa deseja disponibilizar um agente do Copilot Studio para ajudar candidatos externos a preencherem vagas no site de carreiras. Como o bot gerencia a autenticação de acessos caso ele não precise de dados privados de funcionários no Entra ID?",
    "options": [
      "Exigir que os candidatos externos comprem licenças Enterprise E5 antes de conversar com o bot",
      "Configurar a autenticação do bot como 'Sem Autenticação' (No Authentication / Public access)",
      "Usar uma conexão física de rede privada dedicada (ExpressRoute)",
      "Desativar a segurança do tenant inteiro"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão aborda as configurações de autenticação de bots do Copilot Studio.",
      "papoReto": "Bots criados no Copilot Studio podem ter três tipos de autenticação. Para bots públicos e anônimos (como suporte de vendas ou carreiras no site público), configura-se 'No Authentication'. Qualquer pessoa acessando o site conversa na hora, sem prompts de login.",
      "respostaCerta": "Configurar a autenticação do bot como 'Sem Autenticação' (No Authentication / Public access)",
      "puloDoGato": "Bot de intranet = Autenticação manual ou nativa integrada (Entra ID). Bot público de site de internet = Sem autenticação (No Authentication).",
      "cascasDeBanana": [
        "Comprar licenças E5: Candidatos externos são terceiros públicos, inviabilizaria o uso do site.",
        "ExpressRoute: Conexão física privada para interligar datacenters, sem utilidade para logins de usuários móveis web.",
        "Desativar segurança do tenant: Comprometeria todos os e-mails e dados confidenciais lógicos internos da organização."
      ],
      "dicaOuro": "Bot de autoatendimento anônimo na internet = Autenticação configurada como 'No Authentication'."
    },
    "id": "ab900_q182"
  },
  {
    "text": "Qual o principal objetivo de configurar 'Entity Extraction' (Extração de Entidades) em campos de resposta no painel do Copilot Studio?",
    "options": [
      "Eliminar arquivos corrompidos de bancos de dados locais.",
      "Bloquear e-mails falsificados no Exchange Protection.",
      "Ensinar o robô a isolar e converter dados falados variáveis em formatos de dados limpos do sistema (como datas ou números de telefone) independente de como foram digitados pelo usuário.",
      "Mudar o layout do canal do Microsoft Teams dos estagiários."
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão foca no conceito de Processamento de Linguagem Natural (NLP) via Entity Extraction.",
      "papoReto": "Se você pedir um telefone, o usuário pode digitar '(11) 99999-9999' ou 'meu cel é 11999999999'. A Extração de Entidades (Entity Extraction) do Copilot Studio escuta a mensagem, filtra os ruídos e salva apenas a cadeia de números padronizada no sistema.",
      "respostaCerta": "Ensinar o robô a isolar e converter dados falados variáveis em formatos de dados limpos do sistema (como datas ou números de telefone) independente de como foram digitados pelo usuário.",
      "puloDoGato": "Entity Extraction = Converter linguagem natural solta em variáveis prontas e estruturadas para processamento de TI.",
      "cascasDeBanana": [
        "Eliminar arquivos corrompidos: Tarefa de reparação de sistema de arquivos locais.",
        "Bloquear e-mails falsificados: Gerenciado no Exchange por regras SPF e anti-spoofing.",
        "Mudar layout do Teams: O layout do Teams é cosmético e padronizado nas configurações do software."
      ],
      "dicaOuro": "Extrair e padronizar dados variáveis da fala do usuário = Entity Extraction."
    },
    "id": "ab900_q183"
  },
  {
    "text": "Sua organização deseja implantar um agente de IA no Copilot Studio para responder a perguntas frequentes (FAQs) internas. O desenvolvedor deseja que o bot redirecione a conversa para um atendente humano real (Live Agent) da empresa sempre que a resposta for classificada como crítica ou insatisfatória. Como essa integração é realizada?",
    "options": [
      "Fazer o bot ligar de forma física automática para o telefone móvel do chefe do setor.",
      "Enviar um e-mail de alerta em formato .ZIP criptografado para o suporte técnico local.",
      "A IA do bot é desativada permanentemente e o computador do usuário é reiniciado.",
      "Configurar o nó de desvio 'Transferência para agente de chat ao vivo' (Transfer to Live Agent) apontando para um sistema integrado de Helpdesk (como Omnichannel for Customer Service)."
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão foca na transferência de conversação para agentes humanos (Hand-off).",
      "papoReto": "No Copilot Studio, a transição entre robô e humano é chamada de Hand-off. O nó 'Transfer to Live Agent' (Transferência para agente) envia todo o histórico de conversas que o usuário teve com a IA para o painel de atendimento (como Dynamics 365 Omnichannel), permitindo que o atendente continue de onde o bot parou.",
      "respostaCerta": "Configurar o nó de desvio 'Transferência para agente de chat ao vivo' (Transfer to Live Agent) apontando para um sistema integrado de Helpdesk (como Omnichannel for Customer Service).",
      "puloDoGato": "Transição transparente e com histórico de chat de Robô para Atendente Humano = Hand-off via 'Transfer to Live Agent'.",
      "cascasDeBanana": [
        "Ligar para o chefe do setor: Processo informal sem governança profissional de filas de suporte.",
        "Enviar e-mail compactado: Demoraria para ser aberto e não resolveria o chat em tempo real.",
        "Reiniciar computador do usuário: Causaria transtornos de perda de trabalho diário de forma grosseira."
      ],
      "dicaOuro": "Passar a conversa do bot para um atendente de chat ao vivo = Transfer to Live Agent (Hand-off)."
    },
    "id": "ab900_q184"
  },
  {
    "text": "Ao criar um novo bot no Copilot Studio, qual a diferença prática entre as opções de publicação 'Publish to Demo Website' (Publicar em site demo) e 'Publish to Production Website' (Publicar em produção)?",
    "options": [
      "Demo Website: cria uma página web simples temporária hospedada pela Microsoft para testes internos de validação visual. Production: gera o código Iframe/API de incorporação no site real da empresa.",
      "Demo Website é pago por cliques; Production é gratuito nativamente.",
      "Demo Website exige instalação física local; Production funciona apenas online.",
      "Não há diferenças técnicas nos canais de publicação lógicos."
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão aborda a diferença de publicação e homologação de bots.",
      "papoReto": "O Demo Website do Copilot Studio é excelente para apresentar o bot para aprovação da diretoria em reuniões. É uma página web pronta e provida pela Microsoft onde qualquer um com o link pode interagir com o bot. O Production Channel gera as chaves e códigos Iframe que a TI usará para embutir o bot de fato no portal oficial da empresa.",
      "respostaCerta": "Demo Website: cria uma página web simples temporária hospedada pela Microsoft para testes internos de validação visual. Production: gera o código Iframe/API de incorporação no site real da empresa.",
      "puloDoGato": "Compartilhar o bot em desenvolvimento para homologação rápida de forma funcional = Publicar no Demo Website.",
      "cascasDeBanana": [
        "Carga de custos: Páginas de homologação demo são gratuitas para desenvolvimento ativo no tenant.",
        "Instalação física local: Ambas as páginas são 100% online e rodam na nuvem SaaS da Microsoft.",
        "Sem diferenças técnicas: O público-alvo de acessos e a forma física de integração web são completamente distintos."
      ],
      "dicaOuro": "Página rápida provida pela Microsoft para testes visuais com terceiros = Demo Website."
    },
    "id": "ab900_q185"
  },
  {
    "text": "Sua empresa deseja rastrear os logs de auditoria e conformidade dos agentes criados no Copilot Studio, identificando quem alterou o fluxo lógico de um bot de ajuda técnica. Qual ferramenta do Purview/M365 reúne esses registros de governança de TI?",
    "options": [
      "Message Center do Microsoft 365 admin center",
      "Log de auditoria unificada do Microsoft 365 (via portal de conformidade Purview)",
      "Log de eventos do Windows Defender local",
      "Azure Key Vault Console"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão aborda a auditoria de governança de agentes do Copilot Studio.",
      "papoReto": "Toda ação administrativa executada no Copilot Studio (como criar, excluir ou alterar tópicos de bots) gera logs. Esses eventos de auditoria são consolidados no Log de Auditoria Unificada do M365 no portal do Purview, permitindo investigações técnicas futuras.",
      "respostaCerta": "Log de auditoria unificada do Microsoft 365 (via portal de conformidade Purview)",
      "puloDoGato": "Auditar quem alterou ou excluiu um agente/bot do Copilot Studio = Buscar logs de auditoria unificada no Purview.",
      "cascasDeBanana": [
        "Message Center: Informativo de novidades e atualizações de softwares M365.",
        "Windows Defender: Antivírus local das estações físicas locais de colaboradores.",
        "Azure Key Vault: Guarda credenciais de APIs na nuvem, sem logs lógicos do Copilot Studio."
      ],
      "dicaOuro": "Auditoria de criação e exclusões de agentes de IA = Log de Auditoria Unificada do Purview."
    },
    "id": "ab900_q186"
  },
  {
    "text": "Ao configurar as opções lógicas de diálogos do bot no Copilot Studio, qual a nomenclatura padrão usada para definir a ação de redirecionar o fluxo da conversa de um assunto para outro de forma síncrona (ex: sair do assunto 'Saudações' e iniciar o assunto 'Reembolso')?",
    "options": [
      "Chamar uma ação de Rede local",
      "Configurar política de Smart Lockout",
      "Redirecionar para outro tópico (Redirect to another topic)",
      "Enviar e-mail em formato compactado .ZIP"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão foca no nó lógico de fluxo de conversas do Copilot Studio.",
      "papoReto": "No editor visual de conversas do Copilot Studio, os tópicos podem se conectar. Para não precisar duplicar lógicas de diálogos, o desenvolvedor usa o nó 'Redirect to another topic' (Redirecionar para outro tópico) para saltar o usuário de fluxo de forma invisível.",
      "respostaCerta": "Redirecionar para outro tópico (Redirect to another topic)",
      "puloDoGato": "Saltar de um tópico de conversa para outro assunto nas regras de fluxo do bot = Redirect (Redirecionar).",
      "cascasDeBanana": [
        "Chamar uma ação de Rede local: Isso envolve infraestrutura física e não faz sentido na modelagem de fluxo do bot de chat na nuvem.",
        "Configurar política de Smart Lockout: É uma funcionalidade do Entra ID para prevenir ataques de força bruta, sem relação com fluxos de diálogos.",
        "Enviar e-mail em formato compactado .ZIP: É uma ação de envio de e-mail e não um redirecionamento de tópico do robô."
      ],
      "dicaOuro": "Saltar para outro assunto/fluxo de forma organizada = Redirect to another topic."
    },
    "id": "ab900_q187"
  },
  {
    "text": "Sua equipe de TI desenvolveu um bot de autoatendimento no Copilot Studio e deseja analisar o tempo médio de conversação e a taxa de abandono (quando o usuário desiste no meio do chat) para aprimorar as respostas. Qual portal de relatórios do Copilot Studio fornece essas métricas de performance?",
    "options": [
      "Log de conexões do roteador Wi-Fi local do escritório",
      "Painel do Microsoft Defender for Endpoint local",
      "Histórico de atualizações do Windows Update local",
      "Aba de Análise (Analytics) integrada no console do Copilot Studio"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão aborda a monitoração estatística de bots (Analytics).",
      "papoReto": "No console do Copilot Studio, existe uma aba dedicada chamada Analytics (Análise). Ela traz painéis de relatórios detalhados contendo taxas de resolução, taxas de abandono, tempo médio de conversas e satisfação dos usuários com as respostas.",
      "respostaCerta": "Aba de Análise (Analytics) integrada no console do Copilot Studio",
      "puloDoGato": "Métricas de performance de chat de IA, taxa de abandono e satisfação de usuários = Aba Analytics do Copilot Studio.",
      "cascasDeBanana": [
        "Roteador Wi-Fi local: Gerencia conectividade de internet, sem ler métricas lógicas de bots SaaS.",
        "Defender for Endpoint: Antivírus local das máquinas físicas.",
        "Windows Update: Atualizações de patches do sistema Windows local."
      ],
      "dicaOuro": "Auditar estatísticas de conversação e taxas de resolução de bots = Aba Analytics do Copilot Studio."
    },
    "id": "ab900_q188"
  },
  {
    "text": "Sua empresa deseja implantar o Microsoft 365 Copilot para otimizar a análise de dados financeiros. Qual aplicativo do ecossistema Office permite ao usuário solicitar à IA a criação de fórmulas complexas, formatação condicional e geração instantânea de gráficos interativos a partir de uma tabela de vendas?",
    "options": [
      "Microsoft Excel (com Copilot)",
      "Microsoft Loop apenas",
      "Microsoft Planner clássico",
      "Microsoft Exchange Admin Center"
    ],
    "difficulty": "iniciante",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão aborda a funcionalidade do Copilot integrado ao Excel.",
      "papoReto": "No Microsoft Excel, o Copilot atua diretamente analisando tabelas de dados. O usuário pode pedir fórmulas, formatação de cores por desempenho e novos gráficos sem precisar saber programar ou usar macros.",
      "puloDoGato": "Viu 'criação de fórmulas, formatação condicional e gráficos de tabelas com IA'? A resposta é Copilot no Excel.",
      "cascasDeBanana": [
        "Microsoft Loop: Ferramenta de workspaces colaborativos com blocos compartilhados, sem foco em planilhas pesadas.",
        "Microsoft Planner: Gerenciador de tarefas visuais (cards/quadros Kanban).",
        "Exchange Admin Center: Console administrativo para configuração de caixas de correio."
      ],
      "dicaOuro": "Copilot no Excel = Análise de dados, fórmulas e gráficos automáticos.",
      "respostaCerta": "Microsoft Excel (com Copilot)"
    },
    "id": "ab900_q189",
    "correctAnswer": 0
  },
  {
    "text": "Ao criar um novo bot no Copilot Studio, qual o comportamento padrão da ferramenta no-code/low-code em relação a chamadas de APIs externas que necessitam de chaves de autenticação privadas?",
    "options": [
      "O bot expõe as chaves públicas em formato de texto claro nas variáveis de chat.",
      "Deve-se configurar um fluxo do Power Automate com conexões seguras para gerenciar a autenticação e retornar as respostas ao bot.",
      "O Copilot Studio proíbe qualquer chamada externa por segurança.",
      "Deve-se desabilitar o firewall físico do tenant para permitir o tráfego."
    ],
    "difficulty": "avancado",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão valida a arquitetura de integrações seguras no Copilot Studio.",
      "papoReto": "O Copilot Studio não gerencia diretamente o armazenamento seguro de tokens complexos em chamadas brutas. A boa prática é chamar uma ação do Power Automate, onde os conectores lidam com as credenciais com segurança e repassam as variáveis filtradas para o robô de chat.",
      "puloDoGato": "Chamar APIs privadas no Copilot Studio de forma segura = Chamar fluxo do Power Automate.",
      "cascasDeBanana": [
        "Expor chaves em texto claro: Falha crítica de segurança que violaria as regras do Purview.",
        "Proibir chamadas externas: O Copilot Studio é altamente integrável por meio da Power Platform.",
        "Desabilitar firewall físico: O tenant roda em nuvem pública multilocatária, não há firewalls físicos locais de servidores sob controle do cliente."
      ],
      "dicaOuro": "Integração segura com APIs no Copilot Studio = Chamar Ação do Power Automate.",
      "respostaCerta": "Deve-se configurar um fluxo do Power Automate com conexões seguras para gerenciar a autenticação e retornar as respostas ao bot."
    },
    "id": "ab900_q190",
    "correctAnswer": 1
  },
  {
    "text": "Sua organização deseja disponibilizar um agente do Copilot Studio no canal de suporte interno. Qual é o papel da funcionalidade de 'Conversational Boosting' (Aumento de Conversação) usando o SharePoint como fonte de dados?",
    "options": [
      "Aumentar o limite físico de armazenamento da biblioteca de documentos em 1 TB.",
      "Traduzir todos os arquivos PDF do SharePoint para o espanhol automaticamente.",
      "Permitir que a IA pesquise e gere respostas dinâmicas baseadas nos documentos armazenados nas bibliotecas do SharePoint sem precisar criar tópicos manuais.",
      "Bloquear o acesso dos usuários ao SharePoint se o bot falhar na autenticação."
    ],
    "difficulty": "intermediario",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão aborda o Conversational Boosting com SharePoint no Copilot Studio.",
      "papoReto": "Com o Conversational Boosting (Respostas Generativas), você aponta o bot para um site do SharePoint. Se o usuário fizer uma pergunta sem tópico pré-configurado, a IA pesquisa os PDFs e Word lá armazenados e redige uma resposta na hora.",
      "puloDoGato": "Aumentar inteligência do bot sem programar tópicos individuais = Apontar Generative Answers para o SharePoint.",
      "cascasDeBanana": [
        "Aumentar limite físico: Armazenamento é gerido pelo licenciamento geral do SharePoint, sem relação com IA.",
        "Traduzir arquivos automaticamente: A tradução de arquivos requer ferramentas específicas do SharePoint/Word.",
        "Bloquear acesso ao SharePoint: O bot não gerencia as permissões globais do SharePoint."
      ],
      "dicaOuro": "Generative Answers + SharePoint = Respostas automáticas a partir de documentos corporativos.",
      "respostaCerta": "Permitir que a IA pesquise e gere respostas dinâmicas baseadas nos documentos armazenados nas bibliotecas do SharePoint sem precisar criar tópicos manuais."
    },
    "id": "ab900_q191",
    "correctAnswer": 2
  },
  {
    "text": "O Microsoft 365 Copilot é integrado ao Microsoft PowerPoint. Qual das alternativas representa uma ação que o usuário pode realizar por meio do painel do Copilot neste aplicativo?",
    "options": [
      "Aumentar a resolução de vídeos pesados incorporados nos slides locais.",
      "Substituir o tema visual padrão por arquivos de som MP3 locais.",
      "Criar um formulário público de pesquisa no Microsoft Forms de forma direta.",
      "Solicitar a criação de uma nova apresentação com slides estruturados a partir de um documento Word existente."
    ],
    "difficulty": "iniciante",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão aborda o Copilot integrado ao PowerPoint.",
      "papoReto": "No PowerPoint, o Copilot pode criar novos slides e organizar a apresentação inteira usando como referência um arquivo de texto (como um contrato no Word ou documento de planejamento).",
      "puloDoGato": "Pedir 'criar apresentação inteira com base em arquivo Word' = Copilot no PowerPoint.",
      "cascasDeBanana": [
        "Aumentar resolução de vídeos: Tarefa de editores de vídeo locais, não de IA generativa de slides.",
        "Substituir temas por MP3: Não é possível substituir layouts visuais por arquivos de som.",
        "Criar formulário no Forms: O Forms é uma aplicação web separada, gerenciada fora do PowerPoint."
      ],
      "dicaOuro": "Copilot no PowerPoint = Converter texto do Word em slides profissionais.",
      "respostaCerta": "Solicitar a criação de uma nova apresentação com slides estruturados a partir de um documento Word existente."
    },
    "id": "ab900_q192",
    "correctAnswer": 3
  },
  {
    "text": "Ao configurar tópicos personalizados no Copilot Studio, qual funcionalidade gerencia o desvio do fluxo de conversa quando o robô detecta que o usuário quer mudar radicalmente de assunto durante um diálogo em andamento?",
    "options": [
      "Interrupções lógicas (Topic Interruptions / Conversational Switching)",
      "Configuração de conexões físicas locais",
      "Alteração de chaves criptográficas RSA",
      "Política de MFA obrigatória por IP"
    ],
    "difficulty": "avancado",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão aborda o conceito de interrupção de tópicos no Copilot Studio.",
      "papoReto": "Se o bot estiver coletando dados para o tópico 'Reembolso' e o usuário repentinamente digitar 'Como pedir férias', o Copilot Studio gerencia a interrupção. Ele pausa o tópico atual, inicia o tópico de férias e depois pergunta se deseja voltar para concluir o reembolso.",
      "puloDoGato": "Usuário mudou de ideia no meio do chat = Interrupções lógicas tratam a transição suave.",
      "cascasDeBanana": [
        "Conexões físicas: Fiação de rede e hardware local.",
        "Chaves criptográficas RSA: Segurança de certificados de segurança, sem relação com fluxos de diálogos de chat.",
        "MFA obrigatória: Lida com autenticação de login de usuário no tenant."
      ],
      "dicaOuro": "Mudança brusca de assunto do usuário no chat = Topic Interruptions.",
      "respostaCerta": "Interrupções lógicas (Topic Interruptions / Conversational Switching)"
    },
    "id": "ab900_q193",
    "correctAnswer": 0
  },
  {
    "text": "Sua empresa deseja garantir que agentes do Copilot Studio acessem de forma dinâmica dados de um banco de dados local da rede física corporativa. Qual ferramenta da Power Platform deve ser instalada no servidor local para viabilizar essa comunicação segura com a nuvem?",
    "options": [
      "Microsoft Authenticator App",
      "On-premises Data Gateway (Gateway de Dados Local)",
      "Windows Defender Firewall local",
      "Azure Key Vault Connector"
    ],
    "difficulty": "avancado",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão aborda a ponte de conectividade híbrida via On-premises Data Gateway.",
      "papoReto": "Para que os fluxos do Power Automate (chamados pelo bot) alcancem bancos de dados ou sistemas locais da empresa (on-premises), é obrigatório o uso do On-premises Data Gateway da Power Platform, que estabelece um canal criptografado seguro de comunicação.",
      "puloDoGato": "Integrar nuvem M365/Power Platform com banco de dados físico local = Instalar On-premises Data Gateway.",
      "cascasDeBanana": [
        "Microsoft Authenticator: App móvel de geração de tokens de MFA para logins de pessoas.",
        "Windows Defender Firewall: Bloqueia conexões de portas locais em máquinas locais.",
        "Azure Key Vault Connector: Conector de nuvem para buscar chaves, sem realizar conexões físicas híbridas de rede local."
      ],
      "dicaOuro": "Integrar nuvem com sistemas on-premises locais = On-premises Data Gateway.",
      "respostaCerta": "On-premises Data Gateway (Gateway de Dados Local)"
    },
    "id": "ab900_q194",
    "correctAnswer": 1
  },
  {
    "text": "Ao utilizar o Copilot integrado no Microsoft Loop, qual o benefício principal das áreas de trabalho interativas (Loop Workspaces) na escrita colaborativa com inteligência artificial?",
    "options": [
      "Fazer backups em fita magnética física local dos logs do chat.",
      "Impedir a visualização de documentos fora do escritório por VPN.",
      "Vários colaboradores podem interagir com o Copilot simultaneamente na mesma página para rascunhar, editar e resumir ideias em tempo real.",
      "Reduzir o consumo elétrico dos monitores dos usuários locais."
    ],
    "difficulty": "intermediario",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão foca na colaboração conjunta com Copilot no Loop.",
      "papoReto": "O Microsoft Loop é uma ferramenta de colaboração dinâmica. O Copilot no Loop ajuda os times a criarem planos de projeto e relatórios juntos, rascunhando e refinando o conteúdo na mesma página de forma colaborativa e simultânea.",
      "puloDoGato": "Loop + Copilot = Criação colaborativa e interativa de ideias de forma síncrona com IA.",
      "cascasDeBanana": [
        "Backups em fita magnética: Método legado físico de backup físico local, sem ligação com Loop SaaS.",
        "Impedir visualização por VPN: Tarefa lida no Acesso Condicional do Entra ID.",
        "Reduzir consumo elétrico: O hardware do monitor lida com energia, sem interferência lógica do software Loop."
      ],
      "dicaOuro": "Loop com Copilot = Cocriação colaborativa em tempo real de blocos de ideias.",
      "respostaCerta": "Vários colaboradores podem interagir com o Copilot simultaneamente na mesma página para rascunhar, editar e resumir ideias em tempo real."
    },
    "id": "ab900_q195",
    "correctAnswer": 2
  },
  {
    "text": "Para qual das seguintes tarefas um usuário do Microsoft 365 Copilot no Microsoft OneNote pode usar a inteligência artificial?",
    "options": [
      "Limpar os cabeçalhos DNS públicos configurados no roteador da empresa.",
      "Substituir o antivírus corporativo instalado nas estações de trabalho.",
      "Excluir logs de auditoria de segurança armazenados no Purview.",
      "Criar listas de tarefas pendentes, resumir páginas inteiras de anotações desorganizadas e formular ideias para novos projetos."
    ],
    "difficulty": "iniciante",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão valida o uso do Copilot no OneNote.",
      "papoReto": "No OneNote, o Copilot atua como um assistente de escrita. Ele organiza suas notas soltas de reuniões, cria resumos dos pontos-chave, cria checklists estruturados de tarefas e gera novas ideias para projetos.",
      "puloDoGato": "Organizar anotações e resumir rascunhos no bloco de notas digital = Copilot no OneNote.",
      "cascasDeBanana": [
        "Limpar cabeçalhos DNS: Tarefa de servidores DNS de rede local, fora do escopo do OneNote.",
        "Substituir antivírus: OneNote é um app de anotações, não um sistema de segurança de computadores.",
        "Excluir logs de auditoria: O OneNote não possui privilégios de administração de segurança do Purview."
      ],
      "dicaOuro": "Copilot no OneNote = Organização e resumo de anotações soltas.",
      "respostaCerta": "Criar listas de tarefas pendentes, resumir páginas inteiras de anotações desorganizadas e formular ideias para novos projetos."
    },
    "id": "ab900_q196",
    "correctAnswer": 3
  },
  {
    "text": "Sua empresa deseja criar um bot no Copilot Studio para publicação no canal público do Telegram. O que o desenvolvedor deve obter junto à plataforma Telegram antes de concluir a publicação no console da Microsoft?",
    "options": [
      "Um token de API do bot do Telegram (Bot Token) gerado pelo canal oficial de controle do Telegram.",
      "Uma licença de acesso de faturamento Enterprise E5.",
      "Um cabo físico de conexão externa dedicado para o datacenter.",
      "Uma chave de criptografia do Windows BitLocker local."
    ],
    "difficulty": "intermediario",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão aborda a integração de bots com redes sociais via Copilot Studio.",
      "papoReto": "Para publicar um robô do Copilot Studio no Telegram, o desenvolvedor deve criar o bot no aplicativo Telegram e extrair o Token de API fornecido pelo BotFather, inserindo essa chave de autenticação nas configurações de canal do Copilot Studio.",
      "puloDoGato": "Configurar canal de chat externo no Copilot Studio = Inserir o token de autenticação gerado pela rede de destino.",
      "cascasDeBanana": [
        "Licença Enterprise E5: É uma licença do Microsoft 365, não tem relação com as APIs do Telegram.",
        "Cabo físico dedicado: Conexões em nuvem usam protocolos web (HTTPS) sem cabos físicos diretos de datacenters privados.",
        "Chave do BitLocker: Criptografia de disco rígido físico de computadores locais."
      ],
      "dicaOuro": "Publicar bot no Telegram = Fornecer o token de API do bot gerado no Telegram.",
      "respostaCerta": "Um token de API do bot do Telegram (Bot Token) gerado pelo canal oficial de controle do Telegram."
    },
    "id": "ab900_q197",
    "correctAnswer": 0
  },
  {
    "text": "Ao utilizar o Copilot no Microsoft Whiteboard para auxiliar em sessões de brainstorm criativo, qual tarefa a IA pode realizar de forma imediata na tela compartilhada?",
    "options": [
      "Desligar as máquinas virtuais ativas do Azure DevOps.",
      "Sugerir ideias inovadoras sobre um tema, agrupar ideias semelhantes em categorias e resumir tópicos visuais criados pela equipe.",
      "Resetar a senha dos administradores de TI do tenant.",
      "Aumentar o limite físico de usuários permitidos na chamada de voz."
    ],
    "difficulty": "iniciante",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão aborda as funcionalidades do Copilot no Whiteboard.",
      "papoReto": "No quadro branco digital (Whiteboard), o Copilot ajuda a destravar o processo de ideias. Ele gera sugestões na tela, categoriza notas autoadesivas (sticky notes) por temas e gera resumos do brainstorm.",
      "puloDoGato": "Gerar ideias em notas autoadesivas e organizá-las visualmente em grupos na tela digital = Copilot no Whiteboard.",
      "cascasDeBanana": [
        "Desligar VMs do Azure: Realizado via portal do Azure ou Azure CLI, não no quadro de notas visuais.",
        "Resetar senhas de TI: Ação exclusiva do console de administração do Entra ID.",
        "Aumentar limites de chamada: Limites físicos de chamadas são geridos por políticas globais do Teams."
      ],
      "dicaOuro": "Copilot no Whiteboard = Brainstorm digital, ideias e categorização automática em notas.",
      "respostaCerta": "Sugerir ideias inovadoras sobre um tema, agrupar ideias semelhantes em categorias e resumir tópicos visuais criados pela equipe."
    },
    "id": "ab900_q198",
    "correctAnswer": 1
  },
  {
    "text": "Sua empresa deseja licenciar o Copilot Studio para criar agentes complexos e customizados. O que descreve corretamente o modelo de cobrança desse serviço comercial da Microsoft?",
    "options": [
      "Carga financeira baseada no consumo físico de energia dos computadores da empresa.",
      "Cobrança avulsa por cada palavra digitada nas janelas de suporte pelos clientes.",
      "Assinatura baseada em capacidade de tenant (número de sessões de chat mensais inclusas) com complementos adicionais opcionais.",
      "Gratuito e sem restrições de uso para qualquer tenant corporativo."
    ],
    "difficulty": "intermediario",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão valida o modelo de licenciamento de tenant do Copilot Studio.",
      "papoReto": "O licenciamento do Copilot Studio difere do Copilot por usuário. Ele é cobrado por tenant como uma capacidade mensal (por exemplo, permitindo até 25.000 sessões de mensagens por mês), e a empresa pode adquirir pacotes de mensagens extras caso exceda o limite.",
      "puloDoGato": "Licenciamento do Copilot Studio = Baseado em cota de sessões de chat do tenant.",
      "cascasDeBanana": [
        "Consumo de energia local: Não há como medir a eletricidade física local de notebooks de terceiros na nuvem SaaS.",
        "Cobrança por palavra: A contagem é por sessão de conversa ativa (chat), não por caracteres digitados.",
        "Gratuito sem restrições: Serviços corporativos de IA de ponta envolvem custos de processamento e licenciamento."
      ],
      "dicaOuro": "Copilot Studio = Cobrança baseada em volume de sessões de chat por mês no tenant.",
      "respostaCerta": "Assinatura baseada em capacidade de tenant (número de sessões de chat mensais inclusas) com complementos adicionais opcionais."
    },
    "id": "ab900_q199",
    "correctAnswer": 2
  },
  {
    "text": "Qual a principal diferença de comportamento na entrega de respostas do Copilot para um usuário que possui permissão de leitura a um documento corporativo sigiloso vs. um usuário que não tem acesso a esse documento?",
    "options": [
      "O Copilot fornece o arquivo para ambos os usuários para aumentar a produtividade global da empresa.",
      "O Copilot envia o arquivo criptografado por e-mail para o usuário sem acesso para validação offline.",
      "O Copilot desativa temporariamente o login de rede de quem tentar fazer perguntas sem acesso.",
      "O Copilot exibe as respostas com o contexto do documento apenas para o usuário com acesso legal; o usuário sem acesso não receberá as informações, preservando a governança."
    ],
    "difficulty": "avancado",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão aborda a segurança e governança de dados no processamento de buscas com Copilot.",
      "papoReto": "O Copilot herda exatamente os privilégios do usuário (User Context) por meio do Microsoft Graph. Se o colaborador não tem permissão para ler 'Folha_Salarial_Diretoria.docx', a IA do Copilot agirá como se esse arquivo sequer existisse, não usando os dados para responder.",
      "puloDoGato": "IA M365 respeita as permissões do SharePoint. Se o usuário não tem permissão de leitura física do arquivo, o Copilot não extrairá dados dele.",
      "cascasDeBanana": [
        "Fornecer o arquivo para ambos: Seria uma violação de segurança crítica de dados corporativos confidenciais.",
        "Enviar arquivo criptografado: O Copilot não gera links ou e-mails de desvio para burlar restrições.",
        "Desativar login de rede: Apenas regras do Entra ID realizam bloqueios de contas de usuários."
      ],
      "dicaOuro": "Copilot e permissões = O Copilot apenas vê o que o usuário logado tem permissão para visualizar.",
      "respostaCerta": "O Copilot exibe as respostas com o contexto do documento apenas para o usuário com acesso legal; o usuário sem acesso não receberá as informações, preservando a governança."
    },
    "id": "ab900_q200",
    "correctAnswer": 3
  },
  {
    "text": "Sua equipe de TI precisa habilitar uma extensão externa no Microsoft 365 Copilot para permitir que a IA busque informações em tempo real sobre passagens aéreas no portal da agência de viagens parceira da empresa. Qual o nome desse recurso de extensão de recursos do assistente?",
    "options": [
      "Plugins do Copilot (Copilot Plugins)",
      "Redes virtuais físicas dedicadas (ExpressRoute)",
      "Cofre de senhas de administradores de TI",
      "Log de conformidade do Windows Defender local"
    ],
    "difficulty": "intermediario",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão foca na extensibilidade de IA por plugins.",
      "papoReto": "Para integrar serviços externos de terceiros no Copilot (como sistemas de viagem ou CRMs), o administrador ou usuário utiliza Plugins (Plugins). Eles traduzem a intenção do prompt do usuário em chamadas de API estruturadas para o parceiro externo, trazendo a resposta de volta ao chat.",
      "puloDoGato": "Integrar sistemas e serviços de terceiros para que a IA busque dados externos dinâmicos = Usar Plugins.",
      "cascasDeBanana": [
        "ExpressRoute: Conexão física dedicada de infraestrutura de rede híbrida do Azure.",
        "Cofre de senhas: Guarda chaves de APIs, sem estender funcionalidades lógicas de conversação.",
        "Log do Windows Defender: Antivírus local de estações de trabalho de usuários."
      ],
      "dicaOuro": "Estender capacidades da IA do Copilot para fontes externas = Ativar Plugins.",
      "respostaCerta": "Plugins do Copilot (Copilot Plugins)"
    },
    "id": "ab900_q201",
    "correctAnswer": 0
  },
  {
    "text": "O que são as 'Instruções do Sistema' (System Instructions / Developer Prompts) configuradas nos bastidores do desenvolvimento de bots no Copilot Studio?",
    "options": [
      "Procedimentos físicos de manutenção dos cabos de rede locais.",
      "Diretrizes fixas que definem a persona do bot, tom de voz, regras éticas e comportamentos que o robô deve seguir obrigatoriamente em todas as conversas.",
      "Políticas de Acesso Condicional globais do tenant.",
      "Listas de preços e faturamento de licenças comerciais."
    ],
    "difficulty": "avancado",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão aborda as System Instructions em agentes do Copilot Studio.",
      "papoReto": "Ao criar um bot, o desenvolvedor escreve as System Instructions. É ali que você diz à IA: 'Você é um assistente de suporte educado e só pode falar de TI. Nunca fale de assuntos pessoais'. O bot lerá isso antes de processar qualquer chat para manter o alinhamento de comportamento.",
      "puloDoGato": "Definir o comportamento de base e a personalidade da IA de chat = Configurar System Instructions.",
      "cascasDeBanana": [
        "Manutenção de cabos: Serviços físicos de técnicos locais de infraestrutura local.",
        "Políticas de Acesso Condicional: Lidadas no Entra ID de segurança de acessos.",
        "Preços de licenças: Configurado na área de Faturamento comercial."
      ],
      "dicaOuro": "Persona e regras de comportamento do robô de IA = System Instructions.",
      "respostaCerta": "Diretrizes fixas que definem a persona do bot, tom de voz, regras éticas e comportamentos que o robô deve seguir obrigatoriamente em todas as conversas."
    },
    "id": "ab900_q202",
    "correctAnswer": 1
  },
  {
    "text": "Um desenvolvedor do Copilot Studio configurou um bot para responder a dúvidas de clientes externos sobre prazos de entrega, mas percebeu que a IA está gerando respostas longas demais e confusas. O que o desenvolvedor deve refinar para garantir melhores respostas sem programar novos fluxos?",
    "options": [
      "Comprar mais licenças adicionais do Power BI Premium",
      "Formatar os computadores locais dos usuários de suporte",
      "Melhorar a Engenharia de Prompts (Prompt Engineering) nas diretrizes do bot",
      "Excluir o banco de dados de logs do Purview"
    ],
    "difficulty": "iniciante",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão valida o refinamento de respostas usando Engenharia de Prompts.",
      "papoReto": "A Engenharia de Prompts (Prompt Engineering) é o ato de escrever instruções claras. Em vez de pedir 'responda a prazos', a diretriz deve detalhar: 'responda de forma curta, em português e em no máximo 3 tópicos de lista'. Isso melhora as respostas sem exigir linhas de código de TI.",
      "puloDoGato": "Otimizar comportamento e formato das respostas do bot sem codificar = Refinar a Engenharia de Prompts.",
      "cascasDeBanana": [
        "Licenças do Power BI: Relatórios analíticos não afetam a escrita do robô.",
        "Formatar computadores: Não altera as instruções do modelo LLM hospedado na nuvem.",
        "Excluir logs do Purview: Ação de auditoria sem interferência no comportamento inteligente de chat."
      ],
      "dicaOuro": "Aprimorar comportamento da IA por meio de textos e instruções = Engenharia de Prompts.",
      "respostaCerta": "Melhorar a Engenharia de Prompts (Prompt Engineering) nas diretrizes do bot"
    },
    "id": "ab900_q203",
    "correctAnswer": 2
  },
  {
    "text": "Sua empresa deseja disponibilizar um agente do Copilot Studio no canal de chat corporativo interno do Microsoft Teams. Qual o procedimento de segurança recomendado para garantir que o bot só converse com funcionários ativos e autenticados da organização?",
    "options": [
      "Exigir que os funcionários mostrem o crachá físico para a webcam do notebook local.",
      "Desativar a política de MFA de todos os usuários corporativos.",
      "Redirecionar o bot para responder a partir de um domínio público de internet.",
      "Configurar a autenticação do bot como 'Apenas para o Teams e Power Apps' (Only for Teams and Power Apps / Azure AD integrated)."
    ],
    "difficulty": "intermediario",
    "domain": "Copilot e Agentes",
    "explanation": {
      "intro": "Esta questão aborda a autenticação interna em agentes do Copilot Studio.",
      "papoReto": "Para bots corporativos internos instalados no Teams, o Copilot Studio permite usar a autenticação integrada. O bot usa o próprio login seguro do usuário no Teams (via Entra ID), dispensando prompts de login adicionais e bloqueando qualquer acesso de fora da empresa.",
      "puloDoGato": "Autenticação transparente e segura de funcionários corporativos no Teams = Usar o perfil integrado do Entra ID/Teams.",
      "cascasDeBanana": [
        "Mostrar crachá na webcam: Não há recurso nativo no Copilot Studio para processar crachás físicos visuais de autenticação.",
        "Desativar política de MFA: Reduziria drasticamente a segurança lógica do tenant.",
        "Responder a partir de domínio público: Expõe dados privados a qualquer pessoa externa anônima na internet."
      ],
      "dicaOuro": "Autenticação segura de funcionários no bot do Teams = Usar a opção integrada 'Only for Teams and Power Apps'.",
      "respostaCerta": "Configurar a autenticação do bot como 'Apenas para o Teams e Power Apps' (Only for Teams and Power Apps / Azure AD integrated)."
    },
    "id": "ab900_q204",
    "correctAnswer": 3
  },
  {
    "text": "Qual é a principal plataforma baseada em nuvem para gerenciamento de identidades e acessos (IAM) utilizada nativamente pelo Microsoft 365?",
    "options": [
      "Microsoft Entra ID (antigo Azure Active Directory)",
      "Microsoft Exchange Admin Center",
      "Microsoft Defender for Cloud Apps",
      "Active Directory Domain Services local apenas"
    ],
    "difficulty": "iniciante",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão valida o entendimento básico sobre o gerenciamento de identidade no M365.",
      "papoReto": "Toda a segurança, criação de contas, senhas e grupos do Microsoft 365 roda sob o Microsoft Entra ID. Ele é o serviço de identidade (IAM) em nuvem que substituiu a necessidade de servidores Active Directory locais (on-premises) para serviços online.",
      "puloDoGato": "Serviço oficial de gerenciamento de identidades e acessos na nuvem Microsoft = Microsoft Entra ID.",
      "cascasDeBanana": [
        "Exchange Admin Center: Lida com e-mails e caixas de correio, não com identidades globais.",
        "Defender for Cloud Apps: Um serviço Cloud Access Security Broker (CASB) para conformidade de shadow IT.",
        "Active Directory local: É o serviço local tradicional físico, o Entra ID é o que atende a nuvem M365."
      ],
      "dicaOuro": "Motor de identidades e logins do Microsoft 365 = Microsoft Entra ID.",
      "respostaCerta": "Microsoft Entra ID (antigo Azure Active Directory)"
    },
    "id": "ab900_q205",
    "correctAnswer": 0
  },
  {
    "text": "Sua empresa deseja garantir que o acesso dos administradores de TI ao console do Microsoft 365 seja permitido apenas se eles estiverem acessando a partir de um endereço IP da rede física da matriz. Qual recurso do Microsoft Entra ID atende a este requisito?",
    "options": [
      "Padrões de Segurança (Security Defaults)",
      "Políticas de Acesso Condicional (Conditional Access)",
      "Gerenciamento de Identidade Privilegiada (PIM)",
      "Autoatendimento de Redefinição de Senha (SSPR)"
    ],
    "difficulty": "intermediario",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão aborda o Acesso Condicional baseado em localidade.",
      "papoReto": "As políticas de Acesso Condicional funcionam como um fluxo do tipo 'se-então'. Se um usuário tentar fazer login, o Entra ID avalia fatores como quem é o usuário, de qual IP/localização e qual dispositivo está usando antes de conceder ou bloquear o acesso.",
      "puloDoGato": "Viu na prova 'bloquear ou exigir regras adicionais baseadas em IP, localização ou estado do dispositivo'? A resposta é Acesso Condicional.",
      "cascasDeBanana": [
        "Padrões de Segurança: Conjunto básico de segurança padrão (MFA ativo para todos), mas não aceita customização por regras de IP ou exceções.",
        "PIM: Lida com atribuição temporária de cargos (Just-In-Time) de administração, não com regras de restrição de IP.",
        "SSPR: Permite que usuários alterem suas senhas sozinhos."
      ],
      "dicaOuro": "Controle de acesso granular baseado em 'Se-Então' (IP, Dispositivo, Risco) = Acesso Condicional.",
      "respostaCerta": "Políticas de Acesso Condicional (Conditional Access)"
    },
    "id": "ab900_q206",
    "correctAnswer": 1
  },
  {
    "text": "Uma organização de pequeno porte deseja ativar a autenticação multifator (MFA) para todos os colaboradores do tenant M365 de forma imediata e simplificada, sem precisar adquirir licenças Premium do Entra ID. Qual recurso padrão gratuito deve ser habilitado no console?",
    "options": [
      "Políticas de Acesso Condicional customizadas",
      "Privileged Identity Management (PIM)",
      "Padrões de Segurança (Security Defaults)",
      "Microsoft Entra B2B External Access"
    ],
    "difficulty": "intermediario",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão foca na ativação de MFA gratuita via Security Defaults.",
      "papoReto": "Para tenants que não têm licenças caras (Entra ID P1 ou P2), a Microsoft fornece os Padrões de Segurança (Security Defaults). Ao ativar essa única opção, a MFA é exigida para todos os usuários do tenant e logins suspeitos são bloqueados por padrão.",
      "puloDoGato": "Habilitar segurança e MFA básico de forma gratuita e global sem licenças premium = Security Defaults.",
      "cascasDeBanana": [
        "Políticas de Acesso Condicional customizadas: Exigem licença premium Entra ID P1 ou superior.",
        "PIM: Requer licença premium Entra ID P2 para controle temporário de privilégios.",
        "Entra B2B: Lida com colaboração de usuários convidados externos, não com regras básicas de MFA global."
      ],
      "dicaOuro": "Segurança básica de MFA gratuita global = Ativar Security Defaults.",
      "respostaCerta": "Padrões de Segurança (Security Defaults)"
    },
    "id": "ab900_q207",
    "correctAnswer": 2
  },
  {
    "text": "Qual o principal benefício da funcionalidade de Autoatendimento de Redefinição de Senha (SSPR - Self-Service Password Reset) no Microsoft Entra ID?",
    "options": [
      "Bloquear o acesso dos administradores de faturamento se eles tentarem gastar fora da cota.",
      "Forçar a troca física de teclados locais que possam ter sido expostos a softwares espiões.",
      "Traduzir automaticamente os emails de boas-vindas do tenant.",
      "Permitir que os próprios colaboradores redefinam suas senhas esquecidas no portal web sem precisar abrir um chamado de suporte para o time de TI."
    ],
    "difficulty": "iniciante",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão aborda o SSPR do Entra ID.",
      "papoReto": "O SSPR reduz o custo da mesa de suporte de TI (Helpdesk). Quando habilitado, o usuário esquecido pode usar métodos cadastrados (como SMS, aplicativo autenticador ou e-mail secundário) para alterar sua senha corporativa sozinho na web.",
      "puloDoGato": "Reduzir fila de suporte permitindo ao usuário alterar sua própria senha esquecida = SSPR (Self-Service Password Reset).",
      "cascasDeBanana": [
        "Bloquear gastos de administradores: Gerenciado em alertas de faturamento e orçamentos do Azure Billing.",
        "Forçar troca física de hardware: O M365 não tem controle ou gerência de hardware físico local.",
        "Traduzir e-mails: Feito por configurações de localidade de idioma, não pelo SSPR."
      ],
      "dicaOuro": "Usuário alterando a própria senha esquecida com segurança = SSPR.",
      "respostaCerta": "Permitir que os próprios colaboradores redefinam suas senhas esquecidas no portal web sem precisar abrir um chamado de suporte para o time de TI."
    },
    "id": "ab900_q208",
    "correctAnswer": 3
  },
  {
    "text": "Qual das seguintes opções representa um método oficial de Autenticação Sem Senha (Passwordless) suportado nativamente pelo Microsoft Entra ID?",
    "options": [
      "Chaves de segurança FIDO2 e aplicativo Microsoft Authenticator",
      "Envio de foto impressa em papel para o suporte técnico local",
      "Envio de mensagem de fax física para o datacenter da Microsoft",
      "Pergunta de segurança baseada no modelo de carro do usuário"
    ],
    "difficulty": "iniciante",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão valida os métodos modernos de Passwordless.",
      "papoReto": "O Entra ID suporta autenticação sem senha (Passwordless) para combater phishing. Os métodos principais são: Chaves físicas FIDO2 (como YubiKey), Windows Hello for Business (biometria integrada) e o aplicativo de smartphone Microsoft Authenticator (com aprovação por correspondência de número).",
      "puloDoGato": "Focou em métodos modernizados de login 'Sem Senha' (Passwordless)? Pense em FIDO2, Microsoft Authenticator ou Windows Hello.",
      "cascasDeBanana": [
        "Envio de foto impressa em papel: Métodos analógicos de papel não possuem integração ou criptografia digital com o Entra ID.",
        "Envio de mensagem de fax física: Método legado inviável de comunicação digital para logins na nuvem.",
        "Pergunta de segurança baseada no modelo de carro: Perguntas estáticas de segurança clássicas são inseguras e não fazem parte do padrão Passwordless moderno."
      ],
      "dicaOuro": "Passwordless no Entra ID = FIDO2, Microsoft Authenticator e Windows Hello.",
      "respostaCerta": "Chaves de segurança FIDO2 e aplicativo Microsoft Authenticator"
    },
    "id": "ab900_q209",
    "correctAnswer": 0
  },
  {
    "text": "Sua empresa deseja integrar as identidades existentes no servidor físico do Active Directory (local) com a nuvem do Microsoft Entra ID, permitindo que alterações de contas locais sejam sincronizadas automaticamente. Qual ferramenta oficial atende a este requisito?",
    "options": [
      "Microsoft Purview Audit Premium console",
      "Microsoft Entra Connect (Sincronização de Diretórios)",
      "Microsoft Endpoint Manager local Connector",
      "Windows Defender local Admin console"
    ],
    "difficulty": "intermediario",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão aborda a ferramenta de integração de identidades híbridas (Entra Connect).",
      "papoReto": "O Microsoft Entra Connect (antigo Azure AD Connect) é o utilitário instalado no servidor local que cria uma ponte. Ele lê os usuários, grupos e hashes de senhas locais e os replica na nuvem, garantindo a identidade híbrida.",
      "puloDoGato": "Sincronizar identidades do Active Directory local físico com o Entra ID na nuvem = Microsoft Entra Connect.",
      "cascasDeBanana": [
        "Purview Audit: Registra logs de conformidade de documentos.",
        "Endpoint Manager: Antigo nome do Intune para gerenciar PCs, não replica identidades de AD local.",
        "Windows Defender: Trata de segurança local de antivírus."
      ],
      "dicaOuro": "Ponte de sincronização entre AD local e nuvem = Microsoft Entra Connect.",
      "respostaCerta": "Microsoft Entra Connect (Sincronização de Diretórios)"
    },
    "id": "ab900_q210",
    "correctAnswer": 1
  },
  {
    "text": "Qual recurso de licenciamento do Microsoft Entra ID é necessário para habilitar as políticas granulares de Acesso Condicional (Conditional Access) no tenant corporativo?",
    "options": [
      "Apenas plano gratuito padrão do Microsoft Entra ID Free",
      "Licença exclusiva para dispositivos do Windows Defender local",
      "Microsoft Entra ID P1 (ou superior)",
      "Assinatura básica para Exchange Online Plan 1 apenas"
    ],
    "difficulty": "intermediario",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão aborda o licenciamento necessário para Acesso Condicional.",
      "papoReto": "As políticas de Acesso Condicional (regras granulares baseadas em IP, localização e conformidade) não estão incluídas na versão gratuita. É obrigatório possuir a licença Microsoft Entra ID Premium P1 (ou licenças suite que a contenham, como M365 Business Premium, E3 ou E5).",
      "puloDoGato": "Requisito mínimo de licença para regras de Acesso Condicional = Entra ID Premium P1.",
      "cascasDeBanana": [
        "Entra ID Free: Concede gerenciamento básico de identidades e MFA básico via Security Defaults, mas não aceita políticas de Acesso Condicional customizadas.",
        "Windows Defender local: Licenciamento de antivírus de endpoints.",
        "Exchange Online Plan 1: Concede apenas caixas de e-mail corporativas básicas."
      ],
      "dicaOuro": "Acesso Condicional = Requer licença Entra ID P1 no mínimo.",
      "respostaCerta": "Microsoft Entra ID P1 (ou superior)"
    },
    "id": "ab900_q211",
    "correctAnswer": 2
  },
  {
    "text": "Sua empresa deseja dar permissões temporárias (Just-In-Time) para que técnicos seniores ativem o cargo de Administrador Global apenas durante janelas de manutenção autorizadas, com expiração automática após 2 horas. Qual ferramenta do Entra ID gerencia essa elevação de acesso?",
    "options": [
      "Padrões de Segurança do Entra ID (Security Defaults)",
      "Gerenciamento de Identidade Híbrida do Entra Connect",
      "Políticas de retenção de arquivos do Purview",
      "Microsoft Entra Privileged Identity Management (PIM)"
    ],
    "difficulty": "avancado",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão foca na funcionalidade do PIM.",
      "papoReto": "O PIM (Privileged Identity Management) resolve o problema de 'privilégios eternos'. Em vez de o técnico ser Administrador Global o dia inteiro, ele solicita a ativação do cargo no PIM quando for trabalhar. O acesso é liberado por tempo limitado (ex: 2 horas) e expira sozinho.",
      "puloDoGato": "Falou em 'Just-In-Time (JIT) access', 'elevação temporária de privilégios' ou 'aprovação de cargos'? Pensou em PIM.",
      "cascasDeBanana": [
        "Security Defaults: Ativa MFA básico para o tenant inteiro de forma permanente.",
        "Entra Connect: Sincroniza usuários do AD local para a nuvem.",
        "Políticas de retenção: Tratam de manter ou excluir arquivos do SharePoint após anos."
      ],
      "dicaOuro": "Elevação temporária de direitos administrativos por tempo limitado = Entra ID PIM.",
      "respostaCerta": "Microsoft Entra Privileged Identity Management (PIM)"
    },
    "id": "ab900_q212",
    "correctAnswer": 3
  },
  {
    "text": "O que descreve melhor o recurso 'Microsoft Entra ID Governance' (Governança de Identidade) em relação ao ciclo de vida de acesso de colaboradores na empresa?",
    "options": [
      "Garantir que as pessoas certas tenham o acesso correto aos recursos certos, automatizando os fluxos de entrada, movimentação interna e saída de funcionários da empresa.",
      "Limpar fisicamente poeira acumulada nos servidores locais de TI.",
      "Bloquear logins de todos os usuários a partir de qualquer celular.",
      "Aumentar a velocidade da rede de banda larga local física."
    ],
    "difficulty": "avancado",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão aborda o conceito de Governança de Identidade (Entra ID Governance).",
      "papoReto": "A Governança de Identidade automatiza o ciclo de vida. Quando o funcionário é contratado (Joiner), ele recebe os acessos padrão. Se mudar de setor (Mover), os acessos são atualizados. Ao ser demitido (Leaver), as contas são bloqueadas de forma imediata.",
      "puloDoGato": "Automatizar ciclo de vida de contratação e demissões corporativas e auditoria de direitos = Entra ID Governance.",
      "cascasDeBanana": [
        "Limpar poeira de servidores: Manutenção mecânica de hardware físico local.",
        "Bloquear logins de celulares: Seria feito por Acesso Condicional, mas impediria a produtividade móvel de forma extrema.",
        "Aumentar velocidade local: Tarefa lida no provedor de internet (link físico)."
      ],
      "dicaOuro": "Ciclo de vida de contas de contratação e demissões = Entra ID Governance.",
      "respostaCerta": "Garantir que as pessoas certas tenham o acesso correto aos recursos certos, automatizando os fluxos de entrada, movimentação interna e saída de funcionários da empresa."
    },
    "id": "ab900_q213",
    "correctAnswer": 0
  },
  {
    "text": "Ao configurar o Microsoft Entra ID para um grande grupo corporativo, qual a diferença entre 'Grupos de Segurança' (Security Groups) e 'Grupos do Microsoft 365' (M365 Groups)?",
    "options": [
      "Grupos de Segurança são locais e físicos; Grupos do M365 são virtuais na nuvem.",
      "Grupos de Segurança: gerenciam permissões de acessos a pastas, licenças e recursos. Grupos do M365: criam espaços colaborativos com e-mail compartilhado, site de equipe no SharePoint e canal no Teams.",
      "Grupos de Segurança exigem pagamento adicional por usuário convidado.",
      "Não existem diferenças técnicas no gerenciamento de políticas lógicas de TI."
    ],
    "difficulty": "intermediario",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão aborda a diferença de tipos de grupos no Entra ID.",
      "papoReto": "Se você quer dar permissões a uma pasta ou atribuir licenças em lote, usa 'Security Groups' (Grupos de Segurança). Se você quer criar uma área de trabalho compartilhada para um projeto (com calendário, e-mail de grupo e pasta), usa 'Microsoft 365 Groups'.",
      "puloDoGato": "Apenas dar direitos e permissões de TI = Security Group. Espaço de colaboração completo com e-mail do grupo e SharePoint = M365 Group.",
      "cascasDeBanana": [
        "Security Groups locais/físicos: Ambos os grupos rodam em nuvem no console lógico do Entra ID.",
        "Pagamento adicional por usuários convidados: O licenciamento do Entra ID permite a colaboração externa na nuvem sem tarifas extras por grupos.",
        "Sem diferenças técnicas: A estrutura lógica e os recursos acoplados são completamente diferentes."
      ],
      "dicaOuro": "Permissões de acesso = Security Group. Colaboração completa = Microsoft 365 Group.",
      "respostaCerta": "Grupos de Segurança: gerenciam permissões de acessos a pastas, licenças e recursos. Grupos do M365: criam espaços colaborativos com e-mail compartilhado, site de equipe no SharePoint e canal no Teams."
    },
    "id": "ab900_q214",
    "correctAnswer": 1
  },
  {
    "text": "Sua empresa deseja configurar logins simplificados no Microsoft 365 de modo que o usuário só precise memorizar e digitar as credenciais corporativas no computador Windows local para ter acesso automático às ferramentas web sem precisar digitar a senha novamente. Como é chamado esse recurso?",
    "options": [
      "Autenticação Multifator Granular (MFA)",
      "Autoatendimento de Redefinição de Senha (SSPR)",
      "Logon Único (SSO - Single Sign-On)",
      "Microsoft Entra B2C External login"
    ],
    "difficulty": "iniciante",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão aborda o Single Sign-On (SSO).",
      "papoReto": "O SSO (Logon Único) permite que, após fazer o login principal na rede ou no computador, o usuário navegue pelos portais web do M365 (e outros aplicativos conectados) sem que o sistema fique solicitando usuário e senha a todo momento, melhorando a experiência.",
      "puloDoGato": "Entrar uma vez e ter acesso imediato a várias ferramentas sem digitar a senha de novo = SSO (Single Sign-On).",
      "cascasDeBanana": [
        "MFA: Exige verificação adicional de segurança (como aprovar no app do celular).",
        "SSPR: Ferramenta de troca de senha caso o funcionário tenha esquecido a senha.",
        "Entra B2C: Lida com logins de clientes finais da internet."
      ],
      "dicaOuro": "Logar uma única vez para todos os serviços = Single Sign-On (SSO).",
      "respostaCerta": "Logon Único (SSO - Single Sign-On)"
    },
    "id": "ab900_q215",
    "correctAnswer": 2
  },
  {
    "text": "Qual o papel do recurso 'Microsoft Entra ID Protection' no monitoramento de logins de risco do tenant corporativo?",
    "options": [
      "Bloquear computadores locais fisicamente com trancas mecânicas de segurança.",
      "Comprar mais armazenamento de dados para planilhas no OneDrive.",
      "Desinstalar patches de segurança do Windows 11 local.",
      "Utilizar aprendizado de máquina para analisar comportamentos suspeitos (como logins de locais impossíveis no mesmo dia) e forçar redefinição de senhas de contas comprometidas."
    ],
    "difficulty": "avancado",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão foca na inteligência de ameaças do Entra ID Protection.",
      "papoReto": "O Entra ID Protection analisa telemetria de ameaças. Se o funcionário faz login em São Paulo às 10h e depois em Nova York às 10h15, o sistema sinaliza como 'Viagem Impossível' (Impossible Travel), eleva o nível de risco e bloqueia o acesso ou força a troca de senha via MFA.",
      "puloDoGato": "Detecção de ameaças automatizada por inteligência artificial baseada em riscos de login = Entra ID Protection.",
      "cascasDeBanana": [
        "Trancas mecânicas físicas: Hardware e proteção mecânica local, fora de IA SaaS.",
        "Comprar armazenamento: Tarefa comercial de cotas de licenças.",
        "Desinstalar patches do Windows: Atitude insegura que viola conformidade corporativa."
      ],
      "dicaOuro": "Detecção automática de logins suspeitos por IA = Microsoft Entra ID Protection.",
      "respostaCerta": "Utilizar aprendizado de máquina para analisar comportamentos suspeitos (como logins de locais impossíveis no mesmo dia) e forçar redefinição de senhas de contas comprometidas."
    },
    "id": "ab900_q216",
    "correctAnswer": 3
  },
  {
    "text": "Sua empresa quer permitir que fornecedores parceiros externos colaborem em canais do Microsoft Teams e visualizem planilhas no SharePoint usando suas próprias credenciais corporativas originais da empresa de origem. Qual funcionalidade do Entra ID gerencia esse acesso de convidados?",
    "options": [
      "Microsoft Entra B2B Collaboration",
      "Microsoft Entra B2C Connection",
      "Microsoft Entra Connect Sync local",
      "On-premises Data Gateway"
    ],
    "difficulty": "intermediario",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão foca no Entra ID B2B (Business-to-Business).",
      "papoReto": "Para trazer fornecedores e parceiros externos para dentro do seu Teams ou SharePoint, a Microsoft usa o Entra B2B. O parceiro é cadastrado como um usuário convidado (Guest User) e usa o próprio e-mail corporativo de origem para se autenticar com segurança.",
      "puloDoGato": "Colaborar com terceiros/parceiros usando suas próprias credenciais corporativas originais = Entra B2B.",
      "cascasDeBanana": [
        "Entra B2C: Focado em gerenciar logins de clientes finais e consumidores de internet pública (como cadastro em e-commerce).",
        "Entra Connect: Sincroniza identidades de AD local para nuvem da própria empresa.",
        "Data Gateway: Faz ponte de rede com servidores físicos locais."
      ],
      "dicaOuro": "Usuários convidados externos corporativos (Parceiros/Fornecedores) = Microsoft Entra B2B.",
      "respostaCerta": "Microsoft Entra B2B Collaboration"
    },
    "id": "ab900_q217",
    "correctAnswer": 0
  },
  {
    "text": "Ao habilitar a autenticação multifator (MFA) para os colaboradores do tenant Microsoft 365, qual das seguintes alternativas é considerada uma boa prática em relação à segurança dos métodos de segundo fator?",
    "options": [
      "Desativar a obrigatoriedade de senha no tenant sem configurar o segundo fator.",
      "Priorizar métodos resistentes a phishing como chaves físicas FIDO2 e aprovação no Microsoft Authenticator com correspondência de número (Number Matching).",
      "Exigir que todos anotem seus códigos de token em folhas de papel físicas coladas no monitor local.",
      "Usar exclusivamente conexões telefônicas analógicas fixas para receber os códigos de segurança."
    ],
    "difficulty": "intermediario",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão valida as práticas seguras de MFA.",
      "papoReto": "Receber códigos por SMS clássico ou aprovar simples popups de sim/não no celular são vulneráveis a ataques de phishing e fadiga de MFA (MFA Fatigue). O Number Matching (onde o usuário deve digitar na tela do celular o número mostrado no computador) e FIDO2 são considerados resistentes a ataques.",
      "puloDoGato": "Evitar ataques de fadiga de MFA e phishing = Ativar Number Matching no Microsoft Authenticator ou usar FIDO2.",
      "cascasDeBanana": [
        "Desativar senhas sem segundo fator: Deixaria a conta do usuário totalmente desprotegida na internet pública.",
        "Anotar tokens em papel no monitor: Prática descuidada de segurança física que expõe dados.",
        "Conexões telefônicas analógicas: Inviabiliza logins móveis e reduz a usabilidade no trabalho remoto."
      ],
      "dicaOuro": "Segurança robusta contra fadiga de MFA = Microsoft Authenticator com Number Matching.",
      "respostaCerta": "Priorizar métodos resistentes a phishing como chaves físicas FIDO2 e aprovação no Microsoft Authenticator com correspondência de número (Number Matching)."
    },
    "id": "ab900_q218",
    "correctAnswer": 1
  },
  {
    "text": "Sua organização deseja configurar uma política de acesso que exige MFA apenas se o colaborador tentar acessar o portal do SharePoint de fora do escritório. Onde essa regra condicional de segurança deve ser configurada?",
    "options": [
      "No console do Exchange Admin Center nas regras de fluxo de emails",
      "Nas configurações de registro do Windows Registry local das estações de trabalho",
      "Nas Políticas de Acesso Condicional (Conditional Access) no console do Microsoft Entra ID",
      "Nas regras de firewall do roteador físico local da empresa"
    ],
    "difficulty": "iniciante",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão aborda o uso do Acesso Condicional do Entra ID.",
      "papoReto": "O Acesso Condicional permite criar regras inteligentes baseadas na localização. Se o funcionário estiver na rede interna (IP confiável do escritório), ele entra direto. Se estiver fora da empresa (em casa ou viagem), o sistema exige o segundo fator de autenticação (MFA).",
      "puloDoGato": "Regras de login baseadas em 'onde o usuário está logando' = Acesso Condicional.",
      "cascasDeBanana": [
        "Exchange Admin Center: Lida com e-mail corporativo, sem relação com controle de identidade de rede.",
        "Windows Registry local: Configurações internas do sistema operacional local do computador.",
        "Firewall do roteador físico: Controla portas físicas locais de hardware de rede local."
      ],
      "dicaOuro": "Exigir MFA baseado em localização externa = Política de Acesso Condicional.",
      "respostaCerta": "Nas Políticas de Acesso Condicional (Conditional Access) no console do Microsoft Entra ID"
    },
    "id": "ab900_q219",
    "correctAnswer": 2
  },
  {
    "text": "Um analista de RH foi desligado da empresa e o administrador de TI precisa garantir que seu acesso a todas as ferramentas do Microsoft 365 e downloads locais de arquivos seja bloqueado imediatamente. Qual o primeiro passo lógico no console do Entra ID?",
    "options": [
      "Apagar todos os e-mails recebidos pelo colaborador nos últimos 30 dias",
      "Desligar fisicamente a rede local de switches do escritório",
      "Alterar a licença de faturamento do tenant de E5 para E3",
      "Bloquear o login (Block Sign-in) do usuário no painel do Microsoft Entra ID"
    ],
    "difficulty": "iniciante",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão foca no desligamento imediato de acessos.",
      "papoReto": "No desligamento de funcionários, o primeiro passo é bloquear o login. No Entra ID, o administrador marca a opção 'Block Sign-in' na conta dele. Isso nega imediatamente qualquer nova tentativa de login nos serviços de nuvem.",
      "puloDoGato": "Desligar funcionário = Bloquear login (Block Sign-in) imediatamente no console Entra ID.",
      "cascasDeBanana": [
        "Apagar e-mails: Ação de conformidade posterior, não bloqueia o acesso em tempo real.",
        "Desligar switches físicos: Prejudicaria o trabalho físico de todos os outros colaboradores ativos na empresa.",
        "Alterar licenças globais do tenant: Apenas altera a cobrança, não bloqueia a conta do usuário demitido."
      ],
      "dicaOuro": "Bloquear acessos de funcionário demitido = Block Sign-in no Entra ID.",
      "respostaCerta": "Bloquear o login (Block Sign-in) do usuário no painel do Microsoft Entra ID"
    },
    "id": "ab900_q220",
    "correctAnswer": 3
  },
  {
    "text": "Qual o papel do serviço 'Microsoft Entra Verified ID' (Identificação Verificada) no ecossistema de gerenciamento de identidades descentralizadas?",
    "options": [
      "Permitir que usuários e organizações comprovem de forma criptográfica credenciais digitais (como diplomas ou cargo de funcionário) usando padrões abertos sem intermediários.",
      "Verificar se o cabo de internet físico está conectado corretamente na placa local.",
      "Realizar auditorias físicas de hardware locais nas instalações da empresa.",
      "Desativar a proteção de MFA de todos os usuários convidados por segurança."
    ],
    "difficulty": "avancado",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão aborda as identidades descentralizadas (Verified ID).",
      "papoReto": "O Microsoft Entra Verified ID implementa identidades descentralizadas. Ele permite que a empresa emita credenciais digitais criptografadas (ex: comprovante de emprego). O funcionário pode armazenar no smartphone e compartilhar com terceiros de forma segura e com validação criptográfica imediata.",
      "puloDoGato": "Credenciais digitais descentralizadas e assinadas criptograficamente para comprovações externas rápidas = Microsoft Entra Verified ID.",
      "cascasDeBanana": [
        "Verificar cabos físicos: Tarefa de suporte físico local de hardware de rede.",
        "Auditorias físicas: Responsabilidade de inspetores de conformidade física locais.",
        "Desativar MFA de convidados: Prática insegura que viola regras básicas de segurança de acessos."
      ],
      "dicaOuro": "Credenciais digitais criptografadas e descentralizadas = Microsoft Entra Verified ID.",
      "respostaCerta": "Permitir que usuários e organizações comprovem de forma criptográfica credenciais digitais (como diplomas ou cargo de funcionário) usando padrões abertos sem intermediários."
    },
    "id": "ab900_q221",
    "correctAnswer": 0
  },
  {
    "text": "Sua empresa deseja licenciar o Microsoft Entra ID. Qual recurso de proteção avançada contra vazamento de credenciais na Deep Web e detecção de logins suspeitos por inteligência artificial é exclusivo da licença Premium P2?",
    "options": [
      "Criação básica de usuários e grupos na nuvem",
      "Microsoft Entra ID Protection (Políticas de Risco de Usuário e Logon)",
      "Ativação de MFA via Security Defaults de tenant",
      "Autenticação de emails SPF no Exchange Online"
    ],
    "difficulty": "avancado",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão valida as diferenças de licenciamento P1 vs. P2 do Entra ID.",
      "papoReto": "Embora a licença Premium P1 ofereça Acesso Condicional padrão, o gerenciamento avançado de risco do Entra ID Protection (que analisa vazamento de senhas e riscos em tempo real) é um recurso exclusivo do Microsoft Entra ID Premium P2 (incluído no Microsoft 365 E5).",
      "puloDoGato": "Detecção avançada de riscos e proteção cibernética de identidades com políticas automáticas baseadas em risco = Entra ID Premium P2 (via Entra ID Protection).",
      "cascasDeBanana": [
        "Criação básica de usuários: Disponível no plano gratuito do Entra ID Free.",
        "MFA via Security Defaults: Recurso padrão gratuito para todos os tenants.",
        "Autenticação SPF: Recurso básico de segurança de e-mail do Exchange Online, sem relação com licenças Entra ID."
      ],
      "dicaOuro": "Entra ID Protection e políticas avançadas de risco = Requer licença Premium P2.",
      "respostaCerta": "Microsoft Entra ID Protection (Políticas de Risco de Usuário e Logon)"
    },
    "id": "ab900_q222",
    "correctAnswer": 1
  },
  {
    "text": "Um colaborador esqueceu a senha e não consegue fazer login no Microsoft 365. O SSPR está desativado no tenant. Qual função administrativa de TI possui privilégios necessários para redefinir a senha do usuário comum?",
    "options": [
      "Administrador do Exchange Online apenas",
      "Administrador do SharePoint Online apenas",
      "Administrador de Ajuda Técnica (Helpdesk Administrator / Password Administrator)",
      "Administrador de Faturamento (Billing Administrator)"
    ],
    "difficulty": "intermediario",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão foca na hierarquia de funções administrativas (RBAC) do Entra ID.",
      "papoReto": "Nem todo administrador precisa ser Administrador Global. A função 'Helpdesk Administrator' (Administrador de Ajuda Técnica) possui a permissão específica de redefinir senhas de usuários comuns e de outros administradores de helpdesk, garantindo o menor privilégio necessário.",
      "puloDoGato": "Resetar senhas de colaboradores comuns de forma segura sem ser Admin Global = Helpdesk Administrator.",
      "cascasDeBanana": [
        "Exchange Admin: Focado na gestão de caixas de correio e filas de e-mail.",
        "SharePoint Admin: Gerencia sites de intranet e armazenamento.",
        "Billing Admin: Cuida de faturamento de compras de licenças corporativas."
      ],
      "dicaOuro": "Resetar senhas de funcionários = Função de Helpdesk Administrator.",
      "respostaCerta": "Administrador de Ajuda Técnica (Helpdesk Administrator / Password Administrator)"
    },
    "id": "ab900_q223",
    "correctAnswer": 2
  },
  {
    "text": "Sua empresa deseja configurar o Microsoft Entra ID para gerenciar o login de clientes em um novo aplicativo de e-commerce da organização, permitindo que eles se cadastrem e usem contas pessoais do Google ou Facebook para fazer login. Qual solução do Entra ID atende a esse cenário?",
    "options": [
      "Microsoft Entra Connect Sync local",
      "Microsoft Entra Verified ID",
      "On-premises Data Gateway",
      "Microsoft Entra External ID (antigo Entra B2C / Business-to-Consumer)"
    ],
    "difficulty": "intermediario",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão aborda o Microsoft Entra B2C (External ID para consumidores).",
      "papoReto": "Se você precisa lidar com clientes finais da internet (consumidores públicos) em portais de vendas, usa a solução de Customer IAM (CIAM) chamada Microsoft Entra External ID (B2C). Ele isola esses usuários em um diretório próprio e aceita logins de redes sociais (Facebook, Google).",
      "puloDoGato": "Logins de clientes públicos finais no portal da empresa com contas de redes sociais = Entra External ID (B2C).",
      "cascasDeBanana": [
        "Entra Connect: Sincroniza identidades de AD local corporativo.",
        "Verified ID: Credenciais descentralizadas de identificação para parcerias e RH.",
        "Data Gateway: Conecta bancos de dados físicos locais à nuvem."
      ],
      "dicaOuro": "Identidades e logins de clientes corporativos (B2C) = Microsoft Entra External ID.",
      "respostaCerta": "Microsoft Entra External ID (antigo Entra B2C / Business-to-Consumer)"
    },
    "id": "ab900_q224",
    "correctAnswer": 3
  },
  {
    "text": "O que descreve corretamente o funcionamento das regras de 'Conformidade de Dispositivo' (Device Compliance) quando integradas ao Microsoft Intune e ao Acesso Condicional do Entra ID?",
    "options": [
      "O Intune monitora o estado de segurança do dispositivo (ex: se o antivírus está ativo). Se estiver em conformidade, o Acesso Condicional libera o login de nuvem.",
      "O Intune formata fisicamente todos os computadores a cada tentativa falhada de login por segurança.",
      "O Intune desliga a energia elétrica do escritório se detectar um celular desatualizado.",
      "O dispositivo é enviado fisicamente para auditoria técnica na matriz da Microsoft."
    ],
    "difficulty": "avancado",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão aborda a integração de segurança lógica dispositivo-nuvem (Intune + Entra ID).",
      "papoReto": "O Acesso Condicional pode exigir que o dispositivo do usuário esteja em conformidade (Mark device as compliant). O Intune avalia se o Windows está atualizado, se há criptografia (BitLocker) e se o antivírus está rodando. Se tudo estiver ok, o Entra ID libera o acesso aos dados da empresa.",
      "puloDoGato": "Bloquear acessos de dispositivos desatualizados ou sem antivírus = Integrar Acesso Condicional com conformidade do Intune.",
      "cascasDeBanana": [
        "Formatar computadores automaticamente: Perderia dados produtivos por erros cotidianos simples de senhas.",
        "Desligar energia: Inviável em infraestruturas e redes físicas.",
        "Enviar dispositivo para a Microsoft: A auditoria de conformidade é 100% lógica e feita online pela nuvem SaaS."
      ],
      "dicaOuro": "Garantir segurança do dispositivo antes do login = Integrar Acesso Condicional com Intune.",
      "respostaCerta": "O Intune monitora o estado de segurança do dispositivo (ex: se o antivírus está ativo). Se estiver em conformidade, o Acesso Condicional libera o login de nuvem."
    },
    "id": "ab900_q225",
    "correctAnswer": 0
  },
  {
    "text": "Qual a principal vantagem de implementar o recurso de 'Autenticação Pass-through' (PTA - Pass-through Authentication) no Microsoft Entra Connect em vez da Sincronização de Hash de Senha (PHS)?",
    "options": [
      "A autenticação dispensa o uso de cabos físicos de internet no servidor local.",
      "A validação da senha do usuário é realizada em tempo real diretamente no controlador de domínio físico local (on-premises), sem armazenar hashes de senhas na nuvem Microsoft.",
      "A senha do funcionário é alterada automaticamente a cada 24 horas por segurança.",
      "Os dados das planilhas são criptografados de forma síncrona contra exclusões."
    ],
    "difficulty": "avancado",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão aborda os métodos de autenticação híbrida (Pass-through vs. PHS).",
      "papoReto": "Algumas empresas possuem regras rígidas de compliance e proíbem que hashes de senhas saiam do datacenter local. A Autenticação Pass-through (PTA) atende isso. Ela valida as senhas em tempo real contra o Active Directory local corporativo usando agentes locais seguros, sem subir senhas para a nuvem.",
      "puloDoGato": "Validar login localmente em tempo real no servidor físico local sem salvar hashes na nuvem = Pass-through Authentication (PTA).",
      "cascasDeBanana": [
        "Dispensar cabos físicos: Redes locais e servidores necessitam de cabeamento físico de conectividade.",
        "Alterar senha a cada 24 horas: Causaria transtornos de esquecimentos de senhas contínuos aos funcionários.",
        "Criptografar dados de planilhas: Ação gerenciada por AIP/RMS, sem relação com métodos de logins de redes."
      ],
      "dicaOuro": "Login validado na hora no servidor local corporativo = Pass-through Authentication (PTA).",
      "respostaCerta": "A validação da senha do usuário é realizada em tempo real diretamente no controlador de domínio físico local (on-premises), sem armazenar hashes de senhas na nuvem Microsoft."
    },
    "id": "ab900_q226",
    "correctAnswer": 1
  },
  {
    "text": "Ao configurar as restrições lógicas de acessos no Microsoft Entra ID, qual o objetivo principal da criação de uma 'Localização Nomeada' (Named Location) baseada em faixas de IPs no portal de segurança?",
    "options": [
      "Mapear o endereço residencial de todos os funcionários em um mapa visual do SharePoint.",
      "Criar um provedor de internet local alternativo na nuvem corporativa.",
      "Cadastrar as faixas de IPs públicos dos escritórios físicos da empresa para que o Acesso Condicional possa liberar ou restringir logins com base na origem física da conexão.",
      "Bloquear e-mails recebidos do Exchange Protection."
    ],
    "difficulty": "intermediario",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão foca nas Localizações Nomeadas (Named Locations) do Entra ID.",
      "papoReto": "No Entra ID, você pode definir as 'Named Locations'. Você cadastra a faixa de IPs públicos da sua empresa e nomeia como 'Matriz'. Depois, cria regras: 'Se o acesso vier da Matriz, não peça MFA. Se ver de fora, exija MFA'. Isso melhora a produtividade interna.",
      "puloDoGato": "Cadastrar faixas de IPs corporativos confiáveis para uso em regras lógicas de login = Criar Named Locations.",
      "cascasDeBanana": [
        "Mapear endereço residencial: Invasão de privacidade residencial de colaboradores e sem utilidade prática de TI.",
        "Criar provedor de internet: O M365 é SaaS na nuvem, conexões de internet dependem de teles físicas contratadas locais.",
        "Bloquear e-mails: Lado do Exchange Online com regras de spam e filtros."
      ],
      "dicaOuro": "Definir faixas de IPs seguros da empresa = Named Locations no Entra ID.",
      "respostaCerta": "Cadastrar as faixas de IPs públicos dos escritórios físicos da empresa para que o Acesso Condicional possa liberar ou restringir logins com base na origem física da conexão."
    },
    "id": "ab900_q227",
    "correctAnswer": 2
  },
  {
    "text": "Sua empresa deseja habilitar a autenticação multifator (MFA) para os colaboradores, mas alguns funcionários seniores não utilizam smartphones corporativos. Qual método alternativo seguro de segundo fator de hardware é homologado pela Microsoft?",
    "options": [
      "Envio de código por telegrama impresso físico",
      "Leitura óptica do crachá do funcionário pela câmera traseira",
      "Desativar a segurança de login para os executivos",
      "Chaves físicas USB de segurança padrão FIDO2"
    ],
    "difficulty": "intermediario",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão aborda o uso de chaves FIDO2 como segundo fator de hardware.",
      "papoReto": "Se o colaborador não pode ou não quer instalar aplicativos no celular pessoal, a TI pode adquirir chaves físicas de segurança USB homologadas FIDO2. O funcionário insere a chave na porta USB e encosta o dedo para autenticar, de forma muito segura.",
      "puloDoGato": "Segundo fator de autenticação por hardware físico sem celular = Chaves FIDO2 USB.",
      "cascasDeBanana": [
        "Telegrama físico: Inviável em tempo de resposta de logins corporativos instantâneos.",
        "Leitura óptica de crachá: Exigiria leitores dedicados em todas as máquinas e residências, inviabilizando o trabalho híbrido remoto.",
        "Desativar segurança para executivos: Prática arriscada, executivos são os alvos principais de ataques de phishing."
      ],
      "dicaOuro": "MFA físico por chave USB = Chaves de Segurança FIDO2.",
      "respostaCerta": "Chaves físicas USB de segurança padrão FIDO2"
    },
    "id": "ab900_q228",
    "correctAnswer": 3
  },
  {
    "text": "Qual das seguintes alternativas representa o conceito de 'Identidade Híbrida' no contexto de infraestrutura de rede corporativa?",
    "options": [
      "Um modelo onde os colaboradores utilizam a mesma conta de login para acessar recursos locais do servidor físico corporativo e serviços do Microsoft 365 na nuvem.",
      "Uma conta de usuário que é compartilhada por dois funcionários ao mesmo tempo.",
      "O uso de redes locais que alternam a internet por Wi-Fi e cabos físicos simultaneamente.",
      "Um tipo de licença de cobrança mista de faturamento mensal."
    ],
    "difficulty": "iniciante",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão aborda a definição de Identidade Híbrida.",
      "papoReto": "Muitas empresas não podem desligar os servidores locais físicos de uma vez. A Identidade Híbrida é a solução. Os usuários são sincronizados. Assim, o login e a senha para acessar o PC do escritório físico local e o e-mail no Outlook Web são exatamente os mesmos.",
      "puloDoGato": "Mesmo usuário corporativo operando de forma integrada na nuvem e na rede local = Identidade Híbrida.",
      "cascasDeBanana": [
        "Compartilhar contas: Prática insegura que quebra o princípio de não repúdio de acessos lógicos.",
        "Alternar Wi-Fi e cabos: Conceito físico de conexões de hardware de computadores locais.",
        "Licença mista de faturamento: Assunto comercial financeiro, sem relação com gerenciamento de identidades lógicas."
      ],
      "dicaOuro": "Um único login para o AD local e o Entra ID na nuvem = Identidade Híbrida.",
      "respostaCerta": "Um modelo onde os colaboradores utilizam a mesma conta de login para acessar recursos locais do servidor físico corporativo e serviços do Microsoft 365 na nuvem."
    },
    "id": "ab900_q229",
    "correctAnswer": 0
  },
  {
    "text": "Sua empresa deseja auditar todos os logins de colaboradores que foram classificados como de risco médio ou alto nas últimas 24 horas. Qual portal reúne esses relatórios e alertas de segurança de identidades no M365?",
    "options": [
      "Centro de administração do SharePoint Online apenas",
      "Microsoft Entra admin center (na aba de logs do Entra ID Protection)",
      "Portal do Azure DevOps Pipeline console",
      "Console local do roteador de TI física"
    ],
    "difficulty": "intermediario",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão foca na localização de relatórios de risco de identidades.",
      "papoReto": "No portal administrativo do Entra ID (ou no Microsoft Entra admin center), os relatórios de segurança de identidades concentram logs de logins suspeitos, informando se o risco foi mitigado ou se a conta do colaborador exige intervenção técnica.",
      "puloDoGato": "Verificar tentativas de invasões e riscos de logins corporativos suspeitos = Microsoft Entra Admin Center (Entra ID Protection).",
      "cascasDeBanana": [
        "SharePoint Admin: Gerencia apenas permissões de sites e cotas de arquivos de intranets.",
        "Azure DevOps: Destinado a controle de branches e builds de engenheiros de softwares.",
        "Console do roteador: Gerencia rotas de conectividade de cabos de redes locais físicas."
      ],
      "dicaOuro": "Auditar ameaças e riscos lógicos de logins = Microsoft Entra admin center (ID Protection).",
      "respostaCerta": "Microsoft Entra admin center (na aba de logs do Entra ID Protection)"
    },
    "id": "ab900_q230",
    "correctAnswer": 1
  },
  {
    "text": "Ao configurar o Acesso Condicional no Microsoft Entra ID, o administrador pode escolher entre as opções 'Grant' (Conceder Acesso) e 'Block' (Bloquear Acesso). Caso a opção 'Grant' seja selecionada, quais controles adicionais de segurança podem ser exigidos do colaborador?",
    "options": [
      "Excluir o histórico de navegação local do navegador corporativo.",
      "Formatar remotamente o disco rígido físico de armazenamento do usuário.",
      "Exigir a autenticação multifator (MFA) e que o dispositivo seja marcado como em conformidade (compliant).",
      "Cadastrar uma nova conta de e-mail privada secundária obrigatória."
    ],
    "difficulty": "avancado",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão aborda as regras adicionais de controle de acesso (Grant Controls).",
      "papoReto": "Conceder acesso (Grant) não significa liberar geral. O administrador pode impor condições lógicas: 'Eu concedo o acesso, DESDE QUE você aprove o MFA no celular E esteja usando um computador homologado da empresa'.",
      "puloDoGato": "Grant com condições = Conceder acesso sob a exigência de MFA ou conformidade do computador.",
      "cascasDeBanana": [
        "Excluir histórico: Ação local do navegador, sem relação com controle lógico de login no tenant.",
        "Formatar disco rígido: Medida destrutiva drástica desproporcional a um login comum.",
        "Cadastrar e-mail privado secundário: Detalhe pessoal do funcionário, sem impacto na segurança lógica corporativa."
      ],
      "dicaOuro": "Conceder acesso com condições = Grant + Require MFA / Device Compliance.",
      "respostaCerta": "Exigir a autenticação multifator (MFA) e que o dispositivo seja marcado como em conformidade (compliant)."
    },
    "id": "ab900_q231",
    "correctAnswer": 2
  },
  {
    "text": "Sua empresa deseja garantir que contas de administradores não tenham privilégios globais permanentes para evitar ataques hackers. Como o Privileged Identity Management (PIM) ajuda a reduzir a superfície de ataque da organização?",
    "options": [
      "Ao desativar os logins de todos os colaboradores de nível técnico por segurança.",
      "Ao criptografar fisicamente todas as placas-mãe dos servidores locais.",
      "Ao forçar o uso de logins compartilhados entre os técnicos de TI.",
      "Ao remover privilégios ativos permanentes de administradores seniores e convertê-los em 'qualificados' a ativar cargos apenas em janelas temporárias de trabalho autorizadas."
    ],
    "difficulty": "avancado",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão aborda o funcionamento estratégico do PIM contra ameaças.",
      "papoReto": "Com o PIM, as contas administrativas perdem o acesso eterno. Elas ficam em estado 'Qualificado' (Eligible). Quando o técnico precisa administrar, ele solicita no PIM. Se aprovado, o acesso dura 1 ou 2 horas. Se a conta for invadida fora da janela, o hacker não terá poder algum.",
      "puloDoGato": "Princípio do menor privilégio e acesso por tempo limitado (Just-In-Time) = Microsoft Entra ID PIM.",
      "cascasDeBanana": [
        "Desativar logins de técnicos: Inviabilizaria o suporte cotidiano de rede corporativo.",
        "Criptografar placas-mãe: Medidas físicas de hardware local, fora da alçada lógica do Entra ID.",
        "Forçar logins compartilhados: Viola práticas de governança de segurança por anular a responsabilidade pessoal de logs."
      ],
      "dicaOuro": "Reduzir tempo de privilégios de TI = Habilitar funções qualificadas temporárias via PIM.",
      "respostaCerta": "Ao remover privilégios ativos permanentes de administradores seniores e convertê-los em 'qualificados' a ativar cargos apenas em janelas temporárias de trabalho autorizadas."
    },
    "id": "ab900_q232",
    "correctAnswer": 3
  },
  {
    "text": "Qual o papel do Microsoft Entra ID Free (Plano Gratuito) em tenants novos do Microsoft 365 que não adquiriram licenças suite Premium?",
    "options": [
      "Fornecer recursos básicos de gerenciamento de usuários, grupos, sincronização de AD local e MFA básico via Security Defaults.",
      "Liberar políticas customizadas de Acesso Condicional baseadas em riscos de rede.",
      "Garantir atendimento telefônico de suporte local 24 horas físico por técnicos da Microsoft.",
      "Integrar redes virtuais dedicadas ExpressRoute com datacenters locais."
    ],
    "difficulty": "intermediario",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão aborda as capacidades do Entra ID Free.",
      "papoReto": "Todo tenant do M365 vem com o Entra ID Free por padrão. Ele permite criar usuários, configurar grupos simples, usar o Entra Connect para sincronizar o AD local e ativar o MFA básico global pelo Security Defaults, sem custos extras.",
      "puloDoGato": "Entra ID Free = O básico essencial para o tenant rodar de fábrica de forma segura.",
      "cascasDeBanana": [
        "Acesso Condicional customizado: Recurso exclusivo das licenças Premium P1/P2.",
        "Suporte local físico: Atendimentos físicos locais não ocorrem em serviços SaaS padrões da nuvem.",
        "ExpressRoute: Recurso do Azure IaaS para conectividade física de datacenters híbridos."
      ],
      "dicaOuro": "Recursos essenciais de identidade gratuitos = Entra ID Free.",
      "respostaCerta": "Fornecer recursos básicos de gerenciamento de usuários, grupos, sincronização de AD local e MFA básico via Security Defaults."
    },
    "id": "ab900_q233",
    "correctAnswer": 0
  },
  {
    "text": "Sua organização deseja permitir que os funcionários usem a autenticação sem senha (Passwordless) por meio da biometria facial (Face ID / Windows Hello) dos próprios computadores Windows 11 corporativos homologados pela TI. Qual recurso oficial habilita esse comportamento?",
    "options": [
      "Microsoft Authenticator SMS login",
      "Windows Hello for Business",
      "Chaves RMS de criptografia local",
      "Políticas de Acesso Condicional por localização"
    ],
    "difficulty": "iniciante",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão foca na biometria do Windows Hello for Business.",
      "papoReto": "O Windows Hello for Business substitui senhas por biometria (facial ou digital) vinculada ao hardware físico do PC (chip TPM). O usuário faz login no computador e já é autenticado com segurança nos serviços M365 associados à sua identidade corporativa.",
      "puloDoGato": "Biometria facial/digital atrelada ao chip físico do computador Windows corporativo = Windows Hello for Business.",
      "cascasDeBanana": [
        "Authenticator SMS login: Envia códigos SMS para aparelhos celulares de usuários.",
        "Chaves RMS: Lidam com segurança de arquivos criptografados no Purview.",
        "Acesso Condicional por localização: Restringe acessos por faixas de IP ou localização de conexões."
      ],
      "dicaOuro": "Biometria segura de login no Windows corporativo = Windows Hello for Business.",
      "respostaCerta": "Windows Hello for Business"
    },
    "id": "ab900_q234",
    "correctAnswer": 1
  },
  {
    "text": "Qual das seguintes tarefas pode ser configurada na aba de autoatendimento de redefinição de senha (SSPR) no portal do Microsoft Entra ID?",
    "options": [
      "Aumentar a cota comercial de armazenamento das contas dos usuários no SharePoint.",
      "Mudar as chaves DNS públicas associadas ao tenant M365.",
      "Definir quais métodos de validação (SMS, ligação telefônica, app de celular) o colaborador pode escolher para alterar a senha esquecida.",
      "Controlar as assinaturas mensais de licenças cobradas no faturamento."
    ],
    "difficulty": "intermediario",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão foca na configuração dos canais do SSPR.",
      "papoReto": "O administrador configura o SSPR definindo o número de métodos exigidos para redefinir a senha (ex: exige 1 ou 2 métodos) e marca quais opções os colaboradores podem usar: aplicativo autenticador, e-mail externo ou códigos por SMS.",
      "puloDoGato": "Configurar SSPR = Escolher quais canais de comunicação seguros os usuários usarão para resetar senhas esquecidas.",
      "cascasDeBanana": [
        "Cota de armazenamento: Lidadas no painel de controle do SharePoint.",
        "Mudar DNS: Realizado na área de Domínios do M365 Admin Center.",
        "Controlar cobranças: Feito na área de Faturamento e Licenciamento."
      ],
      "dicaOuro": "Configurações de SSPR = Definir canais de validação de identidades (SMS, App, E-mail).",
      "respostaCerta": "Definir quais métodos de validação (SMS, ligação telefônica, app de celular) o colaborador pode escolher para alterar a senha esquecida."
    },
    "id": "ab900_q235",
    "correctAnswer": 2
  },
  {
    "text": "Sua empresa deseja garantir que o acesso aos relatórios confidenciais de faturamento financeiro exija autenticação multifator (MFA) em todas as tentativas, mesmo se o colaborador estiver no escritório físico. Qual recurso do Entra ID do tipo 'se-então' permite criar essa regra específica para um aplicativo selecionado?",
    "options": [
      "Security Defaults (Padrões de Segurança)",
      "Microsoft Entra Connect Sync",
      "Azure Key Vault Console",
      "Políticas de Acesso Condicional (Conditional Access)"
    ],
    "difficulty": "intermediario",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão aborda o Acesso Condicional granular por aplicativo.",
      "papoReto": "O Acesso Condicional permite criar regras para apps específicos. Você pode definir: 'Se o usuário acessar o app X (Financeiro), exija MFA obrigatoriamente'. Os outros apps (como Word) continuarão acessíveis sem prompts desnecessários.",
      "puloDoGato": "Regras de MFA específicas por aplicativo selecionado = Configurar políticas de Acesso Condicional.",
      "cascasDeBanana": [
        "Security Defaults: Ativa MFA global e fixo para todos os apps de uma vez, sem flexibilidade de regras.",
        "Entra Connect: Sincroniza identidades de redes híbridas.",
        "Azure Key Vault: Guarda segredos de APIs de desenvolvedores."
      ],
      "dicaOuro": "Segurança granular por aplicativo = Criar política de Acesso Condicional.",
      "respostaCerta": "Políticas de Acesso Condicional (Conditional Access)"
    },
    "id": "ab900_q236",
    "correctAnswer": 3
  },
  {
    "text": "Qual o principal objetivo do recurso 'Revisões de Acesso' (Access Reviews) do Microsoft Entra ID Governance no controle de acessos da TI?",
    "options": [
      "Revisar periodicamente se determinados usuários (como fornecedores terceiros) ainda precisam de privilégios de acessos a grupos confidenciais, removendo-os automaticamente caso não haja justificativa ativa.",
      "Revisar a velocidade física das conexões de rede locais dos computadores.",
      "Apagar logs de auditoria de e-mails recebidos pelos estagiários.",
      "Modificar os temas visuais cosméticos da interface de login do tenant."
    ],
    "difficulty": "avancado",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão foca nas Revisões de Acesso (Access Reviews) do Entra ID.",
      "papoReto": "Fornecedores externos ou funcionários temporários costumam acumular acessos que nunca mais usam. Com o Access Reviews (Revisões de Acesso), o sistema envia e-mails periódicos aos gestores perguntando: 'O fulano ainda precisa desse acesso?'. Se o gestor não responder ou disser não, o Entra ID revoga a permissão sozinho.",
      "puloDoGato": "Auditar e revogar acessos antigos acumulados por terceiros ou funcionários antigos = Access Reviews.",
      "cascasDeBanana": [
        "Velocidade física: Trata-se de infraestrutura física de rede local.",
        "Apagar logs: Rastreabilidade e logs são obrigatórios por leis de conformidade de TI.",
        "Modificar temas visuais: É cosmético e cosméticos não gerenciam acessos lógicos."
      ],
      "dicaOuro": "Auditoria periódica de direitos acumulados = Access Reviews.",
      "respostaCerta": "Revisar periodicamente se determinados usuários (como fornecedores terceiros) ainda precisam de privilégios de acessos a grupos confidenciais, removendo-os automaticamente caso não haja justificativa ativa."
    },
    "id": "ab900_q237",
    "correctAnswer": 0
  },
  {
    "text": "Sua empresa deseja simplificar a governança de TI definindo que novos estagiários contratados recebam licenças e acessos a pastas de forma automática com base no preenchimento do campo 'Cargo: Estagiário' em seus cadastros. Qual recurso do Entra ID gerencia esse agrupamento dinâmico?",
    "options": [
      "Security Defaults de tenant gratuito",
      "Associações de Grupo Dinâmico (Dynamic Groups)",
      "Microsoft Entra Connect Sync",
      "Regras locais do Windows Defender Antivírus"
    ],
    "difficulty": "intermediario",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão foca em Dynamic Groups (Grupos Dinâmicos) do Entra ID.",
      "papoReto": "Em vez de colocar cada novo estagiário manualmente no grupo, você cria um Dynamic Group (Grupo Dinâmico). A regra diz: 'se o campo Cargo for Estagiário, adicione a este grupo'. O Entra ID avalia os cadastros e gerencia as entradas e saídas do grupo sozinho.",
      "puloDoGato": "Gerenciar membros de grupos automaticamente com base em regras (ex: Cidade = São Paulo) = Dynamic Groups (Grupos Dinâmicos).",
      "cascasDeBanana": [
        "Security Defaults: Ativa MFA básico, sem lógicas de agrupamentos de contas.",
        "Entra Connect: Apenas sincroniza usuários locais físicos.",
        "Windows Defender: Antivírus local, sem relação com grupos em nuvem."
      ],
      "dicaOuro": "Agrupamento de usuários baseado em atributos automáticos = Dynamic Groups.",
      "respostaCerta": "Associações de Grupo Dinâmico (Dynamic Groups)"
    },
    "id": "ab900_q238",
    "correctAnswer": 1
  },
  {
    "text": "O que descreve corretamente o funcionamento da funcionalidade 'Self-Service Group Management' (Gerenciamento de Grupos por Autoatendimento) no Microsoft Entra ID?",
    "options": [
      "Permitir que a IA crie grupos aleatórios no tenant baseados em fotos de redes sociais.",
      "Impor a formatação automática de computadores de membros que saírem de grupos.",
      "Permitir que os próprios colaboradores solicitem a entrada em grupos de trabalho pelo portal web, com a aprovação sendo feita diretamente pelos proprietários dos grupos sem precisar acionar a TI.",
      "Excluir as caixas de correio de todos os membros do grupo por inatividade."
    ],
    "difficulty": "intermediario",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão aborda o autoatendimento de grupos corporativos.",
      "papoReto": "Para poupar a equipe de TI, o Entra ID permite que os usuários busquem grupos de trabalho no portal da Microsoft e peçam para entrar. A solicitação de entrada vai direto para o e-mail do proprietário do grupo (ex: o gestor da área), que aprova ou rejeita com um clique.",
      "puloDoGato": "Usuários pedindo para entrar em grupos com aprovação direta do dono do grupo sem TI = Self-Service Group Management.",
      "cascasDeBanana": [
        "Grupos por fotos de redes sociais: Não há inteligência de colagem de mídias para modelar grupos lógicos.",
        "Formatar computadores de membros: Punição desproporcional por sair de projetos.",
        "Excluir caixas de correio: As caixas permanecem salvas, a menos que as contas sejam desativadas de forma geral."
      ],
      "dicaOuro": "Colaboradores ingressando em grupos via portal de autoatendimento = Self-Service Group Management.",
      "respostaCerta": "Permitir que os próprios colaboradores solicitem a entrada em grupos de trabalho pelo portal web, com a aprovação sendo feita diretamente pelos proprietários dos grupos sem precisar acionar a TI."
    },
    "id": "ab900_q239",
    "correctAnswer": 2
  },
  {
    "text": "Sua empresa deseja implantar o Microsoft Entra ID em um cenário híbrido. Qual das seguintes opções representa uma boa prática recomendada para mitigar o risco de vazamento de senhas sincronizadas?",
    "options": [
      "Armazenar as senhas em formato de texto simples e descriptografado no SharePoint.",
      "Exigir que todos anotem as senhas em blocos de papel físicos corporativos.",
      "Desativar a política de expiração de senhas de todos os administradores.",
      "Habilitar a Sincronização de Hash de Senha (PHS - Password Hash Sync) e ativar a proteção contra credenciais vazadas do Entra ID Protection."
    ],
    "difficulty": "avancado",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão aborda a segurança lógica em identidades híbridas.",
      "papoReto": "A Sincronização de Hash de Senha (PHS) é muito segura porque ela não sobe a senha original, mas sim um hash criptografado (e salgado) do hash original. Ao integrar isso com o Entra ID Protection, a Microsoft monitora se essa mesma senha aparece em listas vazadas na internet e força a troca preventiva.",
      "puloDoGato": "Sincronizar senhas de forma altamente segura e monitorar vazamentos na Deep Web = PHS + Entra ID Protection.",
      "cascasDeBanana": [
        "Texto simples no SharePoint: Exposição gravíssima que destruiria a conformidade de dados corporativos da empresa.",
        "Blocos de papel físico: Prática vulnerável a roubos visuais simples locais.",
        "Desativar expiração de senhas de administradores: Contas de TI ficariam vulneráveis a ataques de força bruta perpetuamente."
      ],
      "dicaOuro": "Sincronização segura de senhas híbridas = Sincronização de Hash de Senha (PHS).",
      "respostaCerta": "Habilitar a Sincronização de Hash de Senha (PHS - Password Hash Sync) e ativar a proteção contra credenciais vazadas do Entra ID Protection."
    },
    "id": "ab900_q240",
    "correctAnswer": 3
  },
  {
    "text": "Qual a finalidade principal de configurar 'Termos de Uso' (Terms of Use) integrados às políticas de Acesso Condicional do Microsoft Entra ID?",
    "options": [
      "Exigir que fornecedores terceiros ou novos funcionários aceitem formalmente um acordo de confidencialidade legal na tela antes de ter acesso aos sistemas corporativos.",
      "Traduzir automaticamente os contratos de compras do faturamento financeiro.",
      "Impedir o uso de monitores locais de marcas de concorrentes da Microsoft.",
      "Deletar arquivos temporários locais das estações de trabalho físicas."
    ],
    "difficulty": "intermediario",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão aborda a conformidade via Termos de Uso (Terms of Use) do Entra ID.",
      "papoReto": "Para fins legais de conformidade, você pode configurar 'Terms of Use'. Quando o parceiro externo tenta logar, a tela exibe o PDF do contrato. Ele deve clicar em 'Aceito' para entrar. O Entra ID registra a hora e a data do aceite em logs para fins de auditorias jurídicas.",
      "puloDoGato": "Exibir e registrar o aceite de contratos legais na tela de login de TI = Termos de Uso (Terms of Use).",
      "cascasDeBanana": [
        "Traduzir contratos: Tradução lógica é feita por ferramentas do Word ou tradutores de arquivos dedicados.",
        "Impedir marcas de monitores: Restrições físicas de hardware local, sem gerência lógica pela nuvem SaaS.",
        "Deletar arquivos locais: Tarefa de ferramentas locais de limpeza de OS do computador."
      ],
      "dicaOuro": "Aceite de contrato obrigatório na tela de login = Termos de Uso (Terms of Use).",
      "respostaCerta": "Exigir que fornecedores terceiros ou novos funcionários aceitem formalmente um acordo de confidencialidade legal na tela antes de ter acesso aos sistemas corporativos."
    },
    "id": "ab900_q241",
    "correctAnswer": 0
  },
  {
    "text": "Sua empresa deseja dar acessos administrativas a um técnico de suporte para gerenciar apenas a criação e exclusão de contas de usuários comuns no tenant. Qual função administrativa (Role) do Entra ID confere o menor privilégio necessário para essa tarefa?",
    "options": [
      "Administrador Global (Global Administrator)",
      "Administrador de Usuários (User Administrator)",
      "Administrador de Faturamento (Billing Administrator)",
      "Administrador do Exchange (Exchange Administrator)"
    ],
    "difficulty": "iniciante",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão aborda o princípio do menor privilégio usando funções administrativas do Entra ID.",
      "papoReto": "Para manter o tenant seguro, evite usar Administrador Global para tarefas cotidianas simples. Para gerenciar a criação, edição e exclusão de contas de colaboradores e redefinições de senhas comuns, a função correta e restrita é a de 'User Administrator' (Administrador de Usuários).",
      "puloDoGato": "Gerenciar criação e exclusões de usuários do tenant de forma restrita = User Administrator.",
      "cascasDeBanana": [
        "Global Admin: Tem direitos totais a todo o tenant (compras, segurança, e-mails), viola a regra do menor privilégio.",
        "Billing Admin: Gerencia apenas faturamento e compras de assinaturas.",
        "Exchange Admin: Controla apenas e-mails e caixas de correio eletrônicas."
      ],
      "dicaOuro": "Gerenciar ciclo de contas de usuários comuns = User Administrator.",
      "respostaCerta": "Administrador de Usuários (User Administrator)"
    },
    "id": "ab900_q242",
    "correctAnswer": 1
  },
  {
    "text": "Qual das seguintes alternativas representa uma funcionalidade padrão do aplicativo móvel 'Microsoft Authenticator' utilizado nas validações de MFA corporativas?",
    "options": [
      "Backup físico de arquivos PDF salvos nas pastas do SharePoint local.",
      "Rastreamento de velocidade física de internet móvel do colaborador.",
      "Geração de códigos de verificação dinâmicos em tempo real (OTP) e aprovações seguras por notificações push com correspondência de número (Number Matching).",
      "Exclusão remota de e-mails marcados como spam no Exchange Online."
    ],
    "difficulty": "iniciante",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão aborda o Microsoft Authenticator app.",
      "papoReto": "O Microsoft Authenticator é o app oficial de MFA. Ele gera códigos temporários de 6 dígitos mesmo sem internet (OTP) e processa notificações push. O Number Matching exibe um número na tela do PC para o usuário digitar no app do celular, barrando fraudes.",
      "puloDoGato": "App móvel de MFA da Microsoft = Microsoft Authenticator.",
      "cascasDeBanana": [
        "Backup do SharePoint: OneDrive ou SharePoint Syncer realizam sincronização de arquivos de mídia.",
        "Rastreamento de velocidade de rede: Tarefa de testadores de internet locais.",
        "Exclusão de spam no Exchange: Ação de filtros do Exchange, não de app de logins de identidade."
      ],
      "dicaOuro": "Microsoft Authenticator = OTP e notificações push com Number Matching.",
      "respostaCerta": "Geração de códigos de verificação dinâmicos em tempo real (OTP) e aprovações seguras por notificações push com correspondência de número (Number Matching)."
    },
    "id": "ab900_q243",
    "correctAnswer": 2
  },
  {
    "text": "Sua empresa deseja garantir que contas de administradores não tenham privilégios globais permanentes para evitar ataques hackers. Se a TI configurar uma política de Acesso Condicional com MFA obrigatório para toda tentativa de login de técnicos de fora do país, qual recurso de nuvem do Entra ID avalia em tempo real a origem geográfica da conexão?",
    "options": [
      "Sincronização de identidades via Entra Connect local",
      "Autoatendimento de redefinição de senhas (SSPR)",
      "Cofre de segredos do Azure Key Vault",
      "Localizações Nomeadas baseadas em país/região (GPS / IP Named Locations)"
    ],
    "difficulty": "intermediario",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão aborda o Acesso Condicional com base em localizações geográficas por países.",
      "papoReto": "Além de IPs fixos de escritórios, o Entra ID possui as 'GPS/IP Named Locations'. O sistema analisa as coordenadas geográficas do dispositivo (GPS) ou a faixa de IPs do país de origem para bloquear logins vindos de fora do país comercial autorizado.",
      "puloDoGato": "Bloquear ou exigir MFA baseado no país de origem geográfica de quem tenta logar = Usar Named Locations de país/região.",
      "cascasDeBanana": [
        "Entra Connect Sync: Apenas replica identidades locais físicas na nuvem.",
        "SSPR: Canal de redefinições e trocas de senhas esquecidas.",
        "Azure Key Vault: Guarda segredos e senhas de códigos de APIs."
      ],
      "dicaOuro": "Logins baseados na rota geográfica por países = Named Locations (IP/GPS).",
      "respostaCerta": "Localizações Nomeadas baseadas em país/região (GPS / IP Named Locations)"
    },
    "id": "ab900_q244",
    "correctAnswer": 3
  },
  {
    "text": "Ao configurar o Microsoft Entra ID, o que acontece se o administrador excluir acidentalmente a conta de um colaborador comum? Qual o prazo limite padrão para restaurar a conta com todas as suas permissões e e-mails originais no portal?",
    "options": [
      "30 dias (exclusão reversível / Soft Delete)",
      "2 horas (exclusão imediata irremediável)",
      "365 dias (exclusão programada)",
      "Nenhum prazo, pois a conta é apagada de forma instantânea sem restauração possível"
    ],
    "difficulty": "iniciante",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão aborda o período de exclusão reversível (Soft Delete) do Entra ID.",
      "papoReto": "No Entra ID, quando uma conta de usuário é deletada, ela vai para uma lixeira lógica (Soft Delete) e permanece lá por exatamente 30 dias. Nesse prazo, o administrador de identidades pode restaurar a conta com um clique, recuperando todos os e-mails, acessos e arquivos associados.",
      "puloDoGato": "Recuperar usuário excluído por acidente no Entra ID = Prazo de 30 dias na lixeira antes de apagar permanentemente (Hard Delete).",
      "cascasDeBanana": [
        "2 horas: Curto demais e causaria catástrofes operacionais permanentes por falhas humanas cotidianas.",
        "365 dias: Longo demais para armazenamento de contas fantasmas em tenants corporativos de TI.",
        "Sem restauração: O M365 preza por resiliência de dados lógicos contra falhas de operações."
      ],
      "dicaOuro": "Prazo para restaurar conta excluída por acidente = 30 dias.",
      "respostaCerta": "30 dias (exclusão reversível / Soft Delete)"
    },
    "id": "ab900_q245",
    "correctAnswer": 0
  },
  {
    "text": "Sua empresa deseja migrar a infraestrutura do Active Directory local para o Microsoft Entra ID. Qual o termo técnico para contas criadas diretamente na nuvem no console do Entra ID que não possuem qualquer vínculo físico de sincronização local?",
    "options": [
      "Contas Híbridas Sincronizadas",
      "Contas Exclusivas de Nuvem (Cloud-Only Accounts)",
      "Contas de Usuários Convidados B2B",
      "Contas Locais de Logon Único"
    ],
    "difficulty": "iniciante",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão aborda os tipos de provimento de contas (Cloud-Only).",
      "papoReto": "Contas Cloud-only são criadas do zero no M365 Admin Center ou Entra ID Portal. Elas não exigem servidores AD locais e são perfeitas para empresas modernas que operam 100% integradas à nuvem pública.",
      "puloDoGato": "Contas geridas 100% de forma digital e nativa na nuvem sem servidores locais = Cloud-Only.",
      "cascasDeBanana": [
        "Contas Híbridas: São criadas localmente no AD físico local e sincronizadas via AD Connect.",
        "Usuários Convidados B2B: Parceiros terceiros externos convidados para colaboração no Teams.",
        "Contas Locais: Refere-se a contas do Windows local sem conectividade com a nuvem."
      ],
      "dicaOuro": "Nativa e gerida exclusivamente no Entra ID = Conta Cloud-Only.",
      "respostaCerta": "Contas Exclusivas de Nuvem (Cloud-Only Accounts)"
    },
    "id": "ab900_q246",
    "correctAnswer": 1
  },
  {
    "text": "O que descreve corretamente o funcionamento do recurso 'Microsoft Entra Self-Service Password Reset (SSPR)' em relação à escrita de senhas de volta ao servidor Active Directory local (on-premises)?",
    "options": [
      "O SSPR proíbe qualquer gravação local por segurança lógica.",
      "As senhas locais devem ser atualizadas manualmente pelo suporte local a cada reset.",
      "Password Writeback (Gravação de Senha de Volta) sincroniza as redefinições na nuvem de volta ao AD local instantaneamente.",
      "O SSPR desliga o servidor Active Directory físico local em caso de falha de login."
    ],
    "difficulty": "avancado",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão aborda o Password Writeback do SSPR híbrido.",
      "papoReto": "Para empresas híbridas, o Entra Connect oferece o 'Password Writeback'. Se o colaborador redefinir a senha esquecida usando o portal SSPR na nuvem, a alteração é escrita de volta no Active Directory local físico instantaneamente, mantendo a senha sincronizada.",
      "puloDoGato": "Sincronizar a senha trocada na nuvem de volta para o servidor físico local = Password Writeback.",
      "cascasDeBanana": [
        "Proibir gravação local: O Password Writeback é um recurso premium amplamente incentivado.",
        "Atualização manual: Anularia os benefícios de produtividade do autoatendimento.",
        "Desligar servidor local: Causaria paradas severas desnecessárias à empresa."
      ],
      "dicaOuro": "Trocar na nuvem e atualizar no local = Habilitar Password Writeback.",
      "respostaCerta": "Password Writeback (Gravação de Senha de Volta) sincroniza as redefinições na nuvem de volta ao AD local instantaneamente."
    },
    "id": "ab900_q247",
    "correctAnswer": 2
  },
  {
    "text": "Sua empresa deseja automatizar a governança de TI criando uma regra que remove os acessos a ferramentas confidenciais caso o funcionário passe mais de 90 dias inativo sem fazer login no tenant. Qual recurso do Entra ID ID Governance atende a esse requisito?",
    "options": [
      "Padrões de Segurança padrão do Entra ID Free",
      "Sincronização básica do Entra Connect local",
      "Política de MFA obrigatória por IPs lógicos",
      "Revisões de Acesso (Access Reviews) configuradas por tempo de inatividade"
    ],
    "difficulty": "avancado",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão aborda o Access Reviews com base em inatividade.",
      "papoReto": "O Access Reviews (Revisões de Acesso) do Entra ID Governance aceita filtros de inatividade. Você pode criar revisões periódicas focadas em contas que não registram logins há mais de 90 dias, aplicando revogações de direitos ou bloqueios automáticos.",
      "puloDoGato": "Revogar direitos e limpar licenças de usuários inativos no tenant = Access Reviews baseados em inatividade.",
      "cascasDeBanana": [
        "Security Defaults: Ativa apenas MFA global síncrono padrão.",
        "Entra Connect: Apenas sincroniza usuários do AD local físico.",
        "Política de MFA: Obriga validação secundária, sem remover direitos por tempo."
      ],
      "dicaOuro": "Remover acessos acumulados de contas inativas = Configurar Access Reviews.",
      "respostaCerta": "Revisões de Acesso (Access Reviews) configuradas por tempo de inatividade"
    },
    "id": "ab900_q248",
    "correctAnswer": 3
  },
  {
    "text": "Qual das seguintes alternativas representa um benefício estratégico do uso de 'Security Defaults' (Padrões de Segurança) em relação à proteção contra ataques cibernéticos em pequenos tenants corporativos?",
    "options": [
      "Bloquear por padrão protocolos de autenticação legados obsoletos (como IMAP/POP3) que não suportam autenticações multifator (MFA).",
      "Garantir faturamento gratuito de licenças M365 por 2 anos.",
      "Substituir o uso de senhas de logins corporativos por crachás físicos visuais locais.",
      "Desinstalar firewalls locais físicos de roteadores da empresa."
    ],
    "difficulty": "intermediario",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão aborda o bloqueio de protocolos obsoletos via Security Defaults.",
      "papoReto": "Ataques de força bruta e password spraying costumam explorar protocolos antigos (IMAP, SMTP, POP3) que ignoram MFA. Os Padrões de Segurança (Security Defaults) barram isso desativando a autenticação herdada (Legacy Authentication) por padrão no tenant.",
      "puloDoGato": "Bloquear logins via protocolos legados sem suporte a MFA = Ativar Security Defaults.",
      "cascasDeBanana": [
        "Faturamento gratuito: Licenciamento corporativo segue tabelas de vendas padrão da Microsoft.",
        "Crachás físicos visuais: Não há integração de hardware com autenticações SaaS da nuvem Microsoft.",
        "Desinstalar firewalls: Atitude arriscada que expõe a rede física a hackers locais."
      ],
      "dicaOuro": "Security Defaults = MFA para todos + Bloqueio de autenticação legada (POP3/IMAP).",
      "respostaCerta": "Bloquear por padrão protocolos de autenticação legados obsoletos (como IMAP/POP3) que não suportam autenticações multifator (MFA)."
    },
    "id": "ab900_q249",
    "correctAnswer": 0
  },
  {
    "text": "Sua empresa deseja garantir que o acesso dos técnicos seniores a relatórios de faturamento corporativo no M365 exija o uso de computadores Windows 11 corporativos que possuam criptografia de disco ativa. Qual recurso do Intune integrado ao Entra ID audita esse parâmetro?",
    "options": [
      "Políticas de Acesso Condicional baseadas em IPs lógicos",
      "Políticas de Conformidade de Dispositivo (Device Compliance Policies)",
      "Log de Auditoria unificada do Purview",
      "Autoatendimento de redefinição de senhas (SSPR)"
    ],
    "difficulty": "avancado",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão foca nas políticas de conformidade física e lógica do Intune (Compliance).",
      "papoReto": "Para exigir criptografia (como BitLocker ativo no PC) antes de conceder acesso aos e-mails corporativos, a TI configura uma 'Device Compliance Policy' no Microsoft Intune. O Acesso Condicional do Entra ID consultará essa conformidade para liberar o login.",
      "puloDoGato": "Auditar e exigir BitLocker ativo no disco rígido do PC antes de liberar login = Device Compliance Policy do Intune.",
      "cascasDeBanana": [
        "Acesso Condicional: Lida com a liberação baseada na resposta da auditoria, mas não audita o disco rígido local diretamente.",
        "Purview: Rastreia logs e conformidades de mídias de documentos salvos.",
        "SSPR: Gerencia resets e redefinições de senhas esquecidas."
      ],
      "dicaOuro": "Auditar criptografia de disco de computadores = Compliance Policy do Intune.",
      "respostaCerta": "Políticas de Conformidade de Dispositivo (Device Compliance Policies)"
    },
    "id": "ab900_q250",
    "correctAnswer": 1
  },
  {
    "text": "Ao configurar a autenticação no Microsoft Entra ID, o que descreve corretamente a funcionalidade de 'Smart Lockout' (Bloqueio Inteligente) contra invasões por força bruta na internet?",
    "options": [
      "Formatar remotamente o disco rígido físico de armazenamento do hacker local.",
      "Desligar fisicamente a fiação de internet local do escritório.",
      "Isolar tentativas de login repetidas vindas de atacantes hackers e bloquear temporariamente a senha apenas para eles, enquanto o funcionário real continua acessando normalmente.",
      "Notificar o hacker com a senha correta para encerrar a tentativa de invasão."
    ],
    "difficulty": "intermediario",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão valida a proteção inteligente Smart Lockout.",
      "papoReto": "O Smart Lockout do Entra ID analisa o comportamento de logins legítimos. Se um invasor tenta chutar a senha de um funcionário de forma repetida na internet, o Smart Lockout bloqueia apenas as tentativas vindas daquele IP hostil do invasor, sem prejudicar o funcionário real que está trabalhando de casa.",
      "puloDoGato": "Bloquear tentativas de força bruta de invasores sem trancar a conta do funcionário legítimo = Smart Lockout.",
      "cascasDeBanana": [
        "Formatar computador: Ação impraticável contra invasores anônimos na web pública.",
        "Desligar fiação: Prejudicaria as redes físicas de técnicos locais.",
        "Notificar senha correta: Seria uma falha de segurança absurda que entregaria o tenant."
      ],
      "dicaOuro": "Smart Lockout = Bloquear tentativas hackers de força bruta sem trancar o usuário legítimo.",
      "respostaCerta": "Isolar tentativas de login repetidas vindas de atacantes hackers e bloquear temporariamente a senha apenas para eles, enquanto o funcionário real continua acessando normalmente."
    },
    "id": "ab900_q251",
    "correctAnswer": 2
  },
  {
    "text": "Sua empresa deseja delegar o gerenciamento de licenças do M365 (atribuir e remover assinaturas de contas) a analistas de faturamento administrativo de nível júnior. Qual função (Role) do Entra ID ID confere esse privilégio restrito?",
    "options": [
      "Administrador Global (Global Administrator)",
      "Administrador do Exchange (Exchange Administrator)",
      "Administrador de Segurança (Security Administrator)",
      "Administrador de Licenças (License Administrator)"
    ],
    "difficulty": "intermediario",
    "domain": "Identidade e Acesso",
    "explanation": {
      "intro": "Esta questão aborda a função License Administrator (RBAC).",
      "papoReto": "Para gerenciar as licenças e faturamentos das contas de usuários (atribuir assinaturas E5, revogar E3), você não precisa dar direitos globais de TI. O cargo de 'License Administrator' (Administrador de Licenças) confere o direito exato e restrito para esse fim.",
      "puloDoGato": "Atribuir ou remover licenças das contas de funcionários do tenant = License Administrator.",
      "cascasDeBanana": [
        "Global Admin: Dá direitos totais a tudo no tenant (redes, compras, e-mails), viola o privilégio mínimo.",
        "Exchange Admin: Gerencia caixas de e-mail e correio eletrônico.",
        "Security Admin: Lida com logs de ameaças lógicas e políticas de Acesso Condicional."
      ],
      "dicaOuro": "Atribuição de licenças de usuários = License Administrator.",
      "respostaCerta": "Administrador de Licenças (License Administrator)"
    },
    "id": "ab900_q252",
    "correctAnswer": 3
  },
  {
    "text": "Sua empresa precisa verificar se os serviços de e-mail do Exchange Online ou chamadas no Teams estão enfrentando instabilidades globais e lentidões técnicas na nuvem Microsoft. Qual painel no Microsoft 365 admin center exibe o estado de saúde desses serviços em tempo real?",
    "options": [
      "Painel de Saúde do Serviço (Service Health Dashboard)",
      "Central de Mensagens (Message Center)",
      "Log de Auditoria unificada do Purview",
      "Painel de Conformidade de Dispositivos do Intune"
    ],
    "difficulty": "iniciante",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão aborda a monitoração de saúde de serviços pelo Service Health Dashboard.",
      "papoReto": "O Service Health Dashboard é o primeiro portal que o administrador consulta quando os funcionários reclamam: 'meu Teams caiu'. Ele mostra o status de todos os serviços M365, detalhando incidentes globais ativos na nuvem da Microsoft.",
      "puloDoGato": "Descobrir se o Teams ou Outlook parou por causa de um problema geral nos datacenters da Microsoft = Consultar Service Health.",
      "cascasDeBanana": [
        "Message Center: Canal informativo que avisa sobre novidades semanais e futuras alterações de recursos lógicos.",
        "Log de Auditoria: Rastreia ações de administradores locais no console de TI.",
        "Conformidade de Dispositivos: Lida com a integridade física de computadores gerenciados."
      ],
      "dicaOuro": "Checar instabilidades da Microsoft na nuvem = Service Health Dashboard.",
      "respostaCerta": "Painel de Saúde do Serviço (Service Health Dashboard)"
    },
    "id": "ab900_q253",
    "correctAnswer": 0
  },
  {
    "text": "Sua empresa deseja licenciar o Microsoft 365 para colaboradores da linha de frente (como caixas, porteiros ou assistentes de varejo) que necessitam de acesso a e-mails e chat no celular, mas não precisam dos aplicativos do Office pesados instalados localmente em computadores físicos. Qual plano é mais econômico e indicado?",
    "options": [
      "Microsoft 365 Enterprise E5",
      "Microsoft 365 F3 (plano Frontline)",
      "Microsoft 365 Enterprise E3",
      "Office 365 Enterprise E1"
    ],
    "difficulty": "intermediario",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão foca na diferenciação de planos de licenciamento da linha de frente (Frontline).",
      "papoReto": "A família 'F' (F1, F3) destina-se a trabalhadores da linha de frente (Frontline workers). O plano F3 oferece acesso a e-mail básico, Teams, SharePoint e aplicativos do Office apenas na versão web e mobile, reduzindo custos de faturamento significativamente por usuário.",
      "puloDoGato": "Linha de frente, sem aplicativos Office instalados locais em PC, focando em celular/web = Licenças F3.",
      "cascasDeBanana": [
        "Enterprise E5: Plano completo mais caro com segurança e ferramentas avançadas de IA.",
        "Enterprise E3: Plano tradicional para escritório que inclui os apps instalados localmente em computadores físicos.",
        "Office E1: Plano legado de nuvem apenas de e-mail básico para funcionários corporativos tradicionais."
      ],
      "dicaOuro": "Colaboradores de linha de frente = Família de planos F (como F3).",
      "respostaCerta": "Microsoft 365 F3 (plano Frontline)"
    },
    "id": "ab900_q254",
    "correctAnswer": 1
  },
  {
    "text": "Qual o canal oficial no Microsoft 365 admin center utilizado para notificar os administradores de TI sobre futuras mudanças, novos lançamentos de ferramentas de software ou recursos descontinuados na nuvem?",
    "options": [
      "Service Health Dashboard",
      "Aba de Faturamento de Licenciamento",
      "Central de Mensagens (Message Center)",
      "Console do Windows Defender local"
    ],
    "difficulty": "iniciante",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão aborda o papel informativo da Central de Mensagens (Message Center).",
      "papoReto": "O Message Center funciona como a 'caixa de entrada de notícias' de TI do M365. Ele avisa semanalmente: 'Em 30 dias mudaremos o layout do Teams' ou 'A funcionalidade X será descontinuada em outubro', dando tempo para a equipe planejar adaptações.",
      "puloDoGato": "Notificar antecipadamente sobre novas atualizações de softwares ou recursos descontinuados = Message Center.",
      "cascasDeBanana": [
        "Service Health: Mostra apenas interrupções lógicas ativas de serviços caídos no dia a dia.",
        "Faturamento: Lida com cobranças financeiras de assinaturas comerciais.",
        "Windows Defender: Trata de patches de antivírus locais físicos de computadores."
      ],
      "dicaOuro": "Planejar TI contra atualizações e mudanças futuras = Ler o Message Center.",
      "respostaCerta": "Central de Mensagens (Message Center)"
    },
    "id": "ab900_q255",
    "correctAnswer": 2
  },
  {
    "text": "Sua organização precisa abrir um chamado de suporte com a Microsoft para resolver uma lentidão técnica crítica no envio de e-mails corporativos. Onde o administrador com privilégios adequados deve acessar para iniciar o atendimento online?",
    "options": [
      "Portal público do MSN de notícias da Microsoft",
      "Console de faturamento comercial do banco local",
      "Windows Defender local Admin console",
      "Microsoft 365 admin center (na aba 'Ajuda e Suporte' / Support)"
    ],
    "difficulty": "iniciante",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão valida o processo de abertura de chamados no console.",
      "papoReto": "No Microsoft 365 admin center, existe um botão fixo no canto inferior ou na aba lateral chamado 'Ajuda e Suporte' (Help & Support). Por ali, você detalha o problem de TI e a Microsoft abre o ticket de atendimento online ou liga para o técnico.",
      "puloDoGato": "Abrir chamado técnico diretamente com a Microsoft para suporte = Menu Ajuda e Suporte do M365 admin center.",
      "cascasDeBanana": [
        "MSN Notícias: Portal público de mídia e notícias cotidianas sem canais de TI.",
        "Console do banco local: Lida com contas bancárias financeiras e pagamentos.",
        "Windows Defender local: Antivírus local de estações locais físicas."
      ],
      "dicaOuro": "Chamados de suporte técnico da nuvem = Microsoft 365 admin center.",
      "respostaCerta": "Microsoft 365 admin center (na aba 'Ajuda e Suporte' / Support)"
    },
    "id": "ab900_q256",
    "correctAnswer": 3
  },
  {
    "text": "O que descreve corretamente o conceito de SLA (Acordo de Nível de Serviço) financeiramente garantido oferecido pela Microsoft para serviços na nuvem como o Microsoft 365?",
    "options": [
      "Uma garantia contratual de disponibilidade de tempo de atividade (uptime) lógica de rede (geralmente de 99,9%), com devolução de créditos de faturamento na mensalidade caso o serviço caia além do limite autorizado.",
      "Um compromisso de trocar gratuitamente todos os computadores locais da empresa se eles quebrarem.",
      "Uma política que proíbe o cancelamento de assinaturas antes de decorridos 10 anos.",
      "Um canal de suporte físico local de engenharia mecânica 24 horas no escritório."
    ],
    "difficulty": "intermediario",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão aborda o SLA financeiro oferecido pela nuvem Microsoft.",
      "papoReto": "A Microsoft garante alta disponibilidade nos serviços. A maioria deles (Exchange, Teams) possui SLA garantido de 99.9%. Se no fechamento do mês o serviço ficou caído por mais tempo do que o acordado, a empresa pode reivindicar descontos ou reembolsos lógicos na fatura (crédito de serviço).",
      "puloDoGato": "SLA garantido financeiramente = Microsoft reembolsa créditos se o uptime da nuvem ficar abaixo da meta.",
      "cascasDeBanana": [
        "Trocar computadores locais: O hardware físico local é de responsabilidade da empresa consumidora.",
        "Proibir cancelamento: Assinaturas são flexíveis e podem ser canceladas conforme termos comerciais contratuais.",
        "Suporte mecânico: O suporte do M365 SaaS é lógico de software e 100% focado em nuvem."
      ],
      "dicaOuro": "Uptime garantido por contrato com restituições financeiras em falhas = SLA.",
      "respostaCerta": "Uma garantia contratual de disponibilidade de tempo de atividade (uptime) lógica de rede (geralmente de 99,9%), com devolução de créditos de faturamento na mensalidade caso o serviço caia além do limite autorizado."
    },
    "id": "ab900_q257",
    "correctAnswer": 0
  },
  {
    "text": "Sua empresa deseja analisar de forma agregada a adoção de tecnologia pelos colaboradores, descobrindo o percentual de funcionários que colaboram ativamente em arquivos do OneDrive e participam de chats no Teams para aprimorar os treinamentos de TI. Qual recurso fornece essas métricas?",
    "options": [
      "Activity Explorer do Microsoft Purview",
      "Pontuação de Adoção (Adoption Score) no M365 admin center",
      "Painel do Microsoft Defender for Identity local",
      "Log de conexões do roteador Wi-Fi local"
    ],
    "difficulty": "intermediario",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão foca na funcionalidade do Adoption Score.",
      "papoReto": "O Adoption Score (Pontuação de Adoção) ajuda a TI a avaliar se os investimentos em nuvem estão dando resultado. Ele analisa, de forma anônima e agregada, como as pessoas usam os softwares (compartilhamento de links, reuniões eficientes) e pontua a empresa em relação a referências de mercado.",
      "puloDoGato": "Métricas qualitativas sobre como os funcionários adotam e usam de fato as ferramentas do M365 = Adoption Score.",
      "cascasDeBanana": [
        "Activity Explorer: Exibe logs de modificações de arquivos e rótulos de DLP do Purview.",
        "Defender for Identity: Monitora ataques e vulnerabilidades de senhas corporativas.",
        "Roteador Wi-Fi local: Gerencia conectividade física de internet local de computadores."
      ],
      "dicaOuro": "Medir a maturidade digital e adoção das ferramentas M365 = Adoption Score.",
      "respostaCerta": "Pontuação de Adoção (Adoption Score) no M365 admin center"
    },
    "id": "ab900_q258",
    "correctAnswer": 1
  },
  {
    "text": "Um administrador de TI precisa criar um relatório listando todas as caixas de correio do Exchange Online que estão quase atingindo o limite de cota de armazenamento de dados. Qual console especializado fornece esse tipo de relatório de caixas de correio?",
    "options": [
      "Centro de Administração do SharePoint (SharePoint Admin Center)",
      "Portal do Microsoft Purview Compliance",
      "Centro de Administração do Exchange (Exchange Admin Center)",
      "Windows Defender local Admin console"
    ],
    "difficulty": "iniciante",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão valida o uso de consoles administrativos especializados (Exchange Admin Center).",
      "papoReto": "Embora o M365 Admin Center seja o console central, tarefas profundas de gerenciamento de e-mails, cotas de caixas de correio de e-mails, regras de fluxo de correio e migrações são de competência do Exchange Admin Center.",
      "puloDoGato": "Gerenciar detalhes avançados de caixas de correio, e-mails ou cotas de mensagens = Exchange Admin Center.",
      "cascasDeBanana": [
        "SharePoint Admin: Controla sites de intranets e pastas de arquivos do SharePoint/OneDrive.",
        "Purview Compliance: Cuida de retenções de dados legais, DLP e governança de dados.",
        "Windows Defender: Antivírus local das máquinas físicas dos funcionários."
      ],
      "dicaOuro": "Governança técnica profunda de e-mails = Exchange Admin Center.",
      "respostaCerta": "Centro de Administração do Exchange (Exchange Admin Center)"
    },
    "id": "ab900_q259",
    "correctAnswer": 2
  },
  {
    "text": "Sua empresa deseja assinar planos comerciais do Microsoft 365 para 150 colaboradores. Qual das seguintes categorias de planos oferece o limite máximo recomendado de até 300 usuários por tenant, sendo ideal para pequenas e médias empresas?",
    "options": [
      "Planos Microsoft 365 Enterprise (E3 ou E5)",
      "Planos Microsoft 365 Education (A3 ou A5)",
      "Planos Microsoft 365 Home (Personal ou Family)",
      "Planos Microsoft 365 Business (Basic, Standard ou Premium)"
    ],
    "difficulty": "intermediario",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão aborda o limite de assentos dos planos Business.",
      "papoReto": "Os planos da família Business (M365 Business Basic, Standard e Premium) são projetados para pequenas e médias empresas (PMEs) e possuem um limite técnico de faturamento de no máximo 300 assentos (licenças) por tenant. Se a empresa crescer além disso, deve migrar para licenças Enterprise.",
      "puloDoGato": "Plano de produtividade corporativa com limite rígido de até 300 assentos por tenant = Família Business.",
      "cascasDeBanana": [
        "Enterprise E3/E5: Planos corporativos grandes que não possuem limites máximos de assentos de faturamento.",
        "Education A3/A5: Destinados a instituições de ensino e acadêmicas de faturamento.",
        "Home: Destinados a uso doméstico e familiar sem recursos de administração corporativos do Entra ID."
      ],
      "dicaOuro": "Planos Business (PME) = Limite de até 300 usuários.",
      "respostaCerta": "Planos Microsoft 365 Business (Basic, Standard ou Premium)"
    },
    "id": "ab900_q260",
    "correctAnswer": 3
  },
  {
    "text": "Ao analisar os tipos de canais de compras de licenças corporativas do M365, qual a nomenclatura dada ao modelo de contratação direta na web com pagamento mensal via cartão de crédito ou faturamento direto na nuvem sem intermediários?",
    "options": [
      "Programa de Serviços Online Direct (MOSP - Microsoft Online Services Program)",
      "Contrato Enterprise Agreement (EA) tradicional de TI",
      "Licenciamento Open Value físico corporativo",
      "Provedor de Soluções em Nuvem (CSP) indireto"
    ],
    "difficulty": "avancado",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão foca nos canais de licenciamento direto da Microsoft.",
      "papoReto": "O MOSP (Microsoft Online Services Program) é o modelo self-service. Você entra no site da Microsoft com um cartão de crédito ou conta bancária corporativa, compra as licenças e começa a usar no mesmo dia, sem envolver parceiros ou fechar contratos de longo prazo.",
      "puloDoGato": "Compra direta de licenças no portal de faturamento sem parceiros comerciais = MOSP (Web Direct).",
      "cascasDeBanana": [
        "Contrato Enterprise Agreement (EA): Destinado a grandes empresas que compram milhares de licenças com contratos fechados de 3 anos.",
        "Open Value: Contratos de licenciamento perpétuo clássicos locais de softwares antigos locais.",
        "CSP: Modelo de compras intermediado por um parceiro de tecnologia terceirizado."
      ],
      "dicaOuro": "Compra direta na web sem intermediários = MOSP (Web Direct).",
      "respostaCerta": "Programa de Serviços Online Direct (MOSP - Microsoft Online Services Program)"
    },
    "id": "ab900_q261",
    "correctAnswer": 0
  },
  {
    "text": "Sua empresa deseja rastrear o histórico de acessos dos administradores no console para descobrir quem alterou a política de e-mail de um estagiário na semana passada. Qual ferramenta reúne esses logs de auditoria de conformidade?",
    "options": [
      "Painel do Service Health Dashboard no admin center",
      "Log de Auditoria Unificada no portal de conformidade do Microsoft Purview",
      "Central de Mensagens (Message Center) do admin center",
      "Log de eventos do Windows Update local do técnico"
    ],
    "difficulty": "intermediario",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão aborda o log de auditoria administrativa do tenant.",
      "papoReto": "Toda ação administrativa (mudar políticas, redefinir senhas, criar contas) é gravada na nuvem. Esses logs de auditoria centralizados são concentrados no Log de Auditoria Unificada (Unified Audit Log) no portal de conformidade do Purview, permitindo auditorias minuciosas de TI.",
      "puloDoGato": "Auditar quem alterou configurações lógicas de TI ou permissões de funcionários = Unified Audit Log no Purview.",
      "cascasDeBanana": [
        "Service Health: Exibe apenas quedas e falhas ativas de datacenters da Microsoft.",
        "Message Center: Informativos semanais sobre atualizações e novidades de softwares planejadas.",
        "Windows Update: Registra patches do sistema Windows local instalados na máquina do técnico."
      ],
      "dicaOuro": "Auditar ações feitas por administradores no tenant = Log de Auditoria Unificada do Purview.",
      "respostaCerta": "Log de Auditoria Unificada no portal de conformidade do Microsoft Purview"
    },
    "id": "ab900_q262",
    "correctAnswer": 1
  },
  {
    "text": "Ao configurar o Microsoft 365, o administrador de faturamento pode definir as opções de 'Assinaturas Pré-pagas' (Prepaid) ou 'Compromisso Mensal/Anual'. Caso a assinatura seja cancelada antes do fim do compromisso anual acordado, o que descreve corretamente as regras financeiras padrão da Microsoft?",
    "options": [
      "O tenant da empresa é apagado de forma definitiva e imediata.",
      "A Microsoft retém todos os computadores locais fisicamente como garantia.",
      "Pode haver cobrança de tarifas de cancelamento antecipado com base nos termos comerciais do contrato assinado no faturamento.",
      "Não existem regras financeiras de multas lógicas em cancelamentos de nuvem."
    ],
    "difficulty": "intermediario",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão valida o entendimento sobre contratos e compromissos financeiros.",
      "papoReto": "Ao contratar licenças no modelo anual (com pagamentos mensais), você concorda com um ano de fidelidade. Caso cancele no meio do caminho, a Microsoft pode aplicar multas ou cobrar taxas de cancelamento proporcional conforme o contrato de faturamento comercial.",
      "puloDoGato": "Cancelar compromisso anual antes do prazo = Possível incidência de multas lógicas contratuais comerciais.",
      "cascasDeBanana": [
        "Tenant apagado imediatamente: Os dados ainda permanecem salvos por um período curto de carência de dados.",
        "Reter computadores locais: O hardware físico local é de propriedade privada do cliente.",
        "Sem regras financeiras: Contratos corporativos de nuvem possuem regras financeiras claras de quebras contratuais."
      ],
      "dicaOuro": "Cancelamento antecipado de compromissos anuais = Sujeito a taxas de cancelamento.",
      "respostaCerta": "Pode haver cobrança de tarifas de cancelamento antecipado com base nos termos comerciais do contrato assinado no faturamento."
    },
    "id": "ab900_q263",
    "correctAnswer": 2
  },
  {
    "text": "Sua empresa deseja delegar a gestão de abertura de chamados técnicos e resets de senhas de colaboradores comuns a estagiários da TI, mas sem conceder acessos a faturamentos e configurações globais de rede. Qual função administrativa confere esses direitos restritos?",
    "options": [
      "Administrador de Faturamento (Billing Administrator / Billing Admin)",
      "Administrador Global (Global Administrator / Global Admin)",
      "Administrador do Exchange (Exchange Administrator / Exchange Admin)",
      "Administrador de Ajuda Técnica (Helpdesk Administrator / Helpdesk Admin)"
    ],
    "difficulty": "iniciante",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão foca na delegação de privilégios de helpdesk.",
      "papoReto": "A função 'Helpdesk Administrator' (Administrador de Ajuda Técnica) é perfeita para o suporte de nível 1. Ele pode resetar senhas de usuários comuns e gerenciar chamados de suporte técnico diretamente com a Microsoft, sem ver faturamentos ou comprometer a segurança do tenant.",
      "puloDoGato": "Delegação restrita para redefinir senhas e abrir chamados na Microsoft = Helpdesk Admin.",
      "cascasDeBanana": [
        "Billing Admin: Cuida apenas de faturamento, compras e assinaturas de faturamento.",
        "Global Admin: Direitos irrestritos ao tenant global (compras, acessos, rede), inadequado para estagiários.",
        "Exchange Admin: Administra apenas caixas de e-mail e regras de mensagens corporativas."
      ],
      "dicaOuro": "Suporte básico de reset de senhas e tickets na Microsoft = Helpdesk Admin.",
      "respostaCerta": "Administrador de Ajuda Técnica (Helpdesk Administrator / Helpdesk Admin)"
    },
    "id": "ab900_q264",
    "correctAnswer": 3
  },
  {
    "text": "Sua organização precisa garantir que as caixas de correio de e-mails antigos de colaboradores demitidos permaneçam salvas em logs de conformidade de TI por até 5 anos para fins de processos legais, sem continuar pagando licenças de faturamento ativas para essas contas. Qual recurso do Exchange Online atende a esta necessidade?",
    "options": [
      "Caixas de Correio Inativas (Inactive Mailboxes) gerenciadas por políticas de retenção no Purview",
      "Caixas de correio do tipo Caixa de Correio Compartilhada (Shared Mailbox)",
      "Exportações em lote de arquivos compactados .ZIP locais",
      "Desativar a segurança do tenant de faturamento corporativo"
    ],
    "difficulty": "avancado",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão aborda a governança de e-mails demitidos via Inactive Mailboxes.",
      "papoReto": "Se você demite um funcionário e precisa reter seus e-mails por anos para processos judiciais, aplique uma política de retenção do Purview na caixa de e-mail e depois apague a licença da conta. A caixa se torna uma Inactive Mailbox (Caixa de Correio Inativa), contendo os dados salvos sem gerar custos de licenciamento.",
      "puloDoGato": "Reter dados de e-mail de demitidos de graça para fins de auditoria jurídica de longo prazo = Caixas de Correio Inativas (Inactive Mailboxes) via Purview Retention.",
      "cascasDeBanana": [
        "Shared Mailbox: Útil para e-mails de equipe ativos (como contato@empresa.com), mas não é o recurso de conformidade jurídica voltado a contas demitidas inativas de longo prazo.",
        "Exportar em .ZIP: Arquivos locais correm riscos de perdas de hardware local e são difíceis de auditar na nuvem.",
        "Desativar segurança: Comprometeria todos os dados lógicos corporativos de forma grosseira."
      ],
      "dicaOuro": "Reter e-mails de demitidos sem pagar licença = Inactive Mailboxes.",
      "respostaCerta": "Caixas de Correio Inativas (Inactive Mailboxes) gerenciadas por políticas de retenção no Purview"
    },
    "id": "ab900_q265",
    "correctAnswer": 0
  },
  {
    "text": "Qual das seguintes alternativas representa um canal de compra indireto de licenças do M365 intermediado por um parceiro técnico terceirizado da Microsoft que fornece faturamento consolidado e suporte técnico especializado local?",
    "options": [
      "Programa de Serviços Online Direct (MOSP)",
      "Provedor de Soluções em Nuvem (CSP - Cloud Solution Provider)",
      "Contrato Enterprise Agreement (EA) direto",
      "Licenciamento Open Value síncrono local"
    ],
    "difficulty": "intermediario",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão aborda o licenciamento CSP.",
      "papoReto": "O modelo CSP (Cloud Solution Provider) permite que a empresa compre as licenças da Microsoft por meio de um parceiro homologado local. Esse parceiro gerencia o faturamento e pode vender serviços agregados de migração e suporte especializado em português.",
      "puloDoGato": "Comprar licenças M365 com auxílio e faturamento estruturado de um parceiro de tecnologia terceirizado = CSP.",
      "cascasDeBanana": [
        "MOSP: Compra self-service direta no site da Microsoft com cartão de crédito, sem parceiros.",
        "Enterprise Agreement: Grandes contratos diretos com a Microsoft para milhares de computadores.",
        "Open Value: Contratos perpétuos clássicos locais de softwares antigos locais."
      ],
      "dicaOuro": "Contratar M365 por meio de parceiro técnico local = Canal CSP.",
      "respostaCerta": "Provedor de Soluções em Nuvem (CSP - Cloud Solution Provider)"
    },
    "id": "ab900_q266",
    "correctAnswer": 1
  },
  {
    "text": "Sua empresa deseja configurar alertas de faturamento e limites de custos mensais automáticos para evitar gastos excessivos com licenças avulsas compradas na nuvem. Qual console central de TI reúne essas configurações de finanças?",
    "options": [
      "Centro de administração do Microsoft Teams apenas",
      "Portal de conformidade do Microsoft Purview",
      "Microsoft 365 admin center (na aba Faturamento / Billing)",
      "Console local do roteador físico de internet"
    ],
    "difficulty": "iniciante",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão valida a localização de configurações de faturamento e compras no console.",
      "papoReto": "No Microsoft 365 admin center, a aba 'Faturamento' (Billing) concentra tudo o que se refere a finanças: histórico de notas fiscais, métodos de pagamentos cadastrados (cartão/boleto), faturamento ativo e controle de faturas.",
      "puloDoGato": "Ver faturas e configurar pagamentos e gastos de assinaturas do tenant = Aba Faturamento do M365 Admin Center.",
      "cascasDeBanana": [
        "Teams Admin Center: Gerencia apenas configurações de chats de chamadas de voz.",
        "Purview: Focado em conformidade de dados e proteção de segredos contra vazamentos.",
        "Roteador físico: Lida com conectividade física local de internet de switches."
      ],
      "dicaOuro": "Financeiro e faturamento de nuvem = M365 Admin Center na aba Billing.",
      "respostaCerta": "Microsoft 365 admin center (na aba Faturamento / Billing)"
    },
    "id": "ab900_q267",
    "correctAnswer": 2
  },
  {
    "text": "Ao migrar e-mails corporativos da rede física local (servidores Exchange on-premises) para a nuvem do Exchange Online no M365, qual ferramenta de monitoramento técnico permite aos administradores acompanhar a taxa de sucesso e erros da migração?",
    "options": [
      "Painel do Service Health Dashboard no admin center",
      "Pontuação de Adoção (Adoption Score) no admin center",
      "Windows Update local Admin console",
      "Lotes de Migração (Migration Batches) no Exchange Admin Center"
    ],
    "difficulty": "avancado",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão aborda a monitoração de migrações de e-mails para a nuvem.",
      "papoReto": "No Exchange Admin Center, as migrações de caixas de correio locais para o Exchange Online são organizadas in 'Migration Batches' (Lotes de Migração). Por ali, a TI acompanha o andamento, vê relatórios de erros por e-mail e valida se a migração foi concluída.",
      "puloDoGato": "Monitorar a transferência de caixas de e-mails locais para a nuvem = Migration Batches no Exchange Admin.",
      "cascasDeBanana": [
        "Service Health: Monitora quedas gerais dos datacenters globais da Microsoft, sem olhar o tráfego da sua migração local privada.",
        "Adoption Score: Avalia a maturidade de uso de tecnologia pelos usuários corporativos no cotidiano.",
        "Windows Update: Atualizações locais de patches de estações locais."
      ],
      "dicaOuro": "Acompanhar migrações de caixas de e-mails corporativos = Migration Batches.",
      "respostaCerta": "Lotes de Migração (Migration Batches) no Exchange Admin Center"
    },
    "id": "ab900_q268",
    "correctAnswer": 3
  },
  {
    "text": "Sua empresa deseja garantir que o acesso dos técnicos seniores a relatórios de faturamento corporativo no M365 seja permitido apenas se eles estiverem logados na rede física da matriz. Qual o primeiro passo lógico para cadastrar a rede física antes de configurar a política condicional?",
    "options": [
      "Cadastrar as faixas de IPs públicos da matriz como uma 'Localização Nomeada' (Named Location) no Entra ID",
      "Aumentar o limite físico de armazenamento de dados no SharePoint do tenant",
      "Modificar as chaves DNS públicas associadas ao domínio de e-mails",
      "Desinstalar patches de segurança do Windows 11 local"
    ],
    "difficulty": "intermediario",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão aborda as etapas de configuração de restrição por IP.",
      "papoReto": "Antes de criar a política de Acesso Condicional restringindo acessos, você deve ir no Entra ID e cadastrar a faixa de IPs públicos do escritório em 'Named Locations'. Isso ensina à nuvem qual IP público é o da sua rede física da matriz corporativa.",
      "puloDoGato": "Cadastrar a rede do escritório para usá-la em regras de login do tenant = Configurar Named Location no Entra ID.",
      "cascasDeBanana": [
        "Armazenamento de SharePoint: Gerencia espaço de armazenamento de arquivos de usuários.",
        "Modificar DNS: Lida com roteamentos de domínios públicos de emails corporativos.",
        "Desinstalar patches: Deixaria as estações locais vulneráveis a ataques cibernéticos."
      ],
      "dicaOuro": "Mapear IPs confiáveis da empresa na nuvem = Named Location.",
      "respostaCerta": "Cadastrar as faixas de IPs públicos da matriz como uma 'Localização Nomeada' (Named Location) no Entra ID"
    },
    "id": "ab900_q269",
    "correctAnswer": 0
  },
  {
    "text": "Qual das seguintes alternativas representa um console especializado para governança do Microsoft M365 voltado exclusivamente ao controle de políticas de chats, canais de comunicação, permissões de instalação de bots e reuniões virtuais online?",
    "options": [
      "Centro de Administração do SharePoint (SharePoint Admin Center)",
      "Centro de Administração do Microsoft Teams (Teams Admin Center)",
      "Portal de conformidade do Microsoft Purview",
      "Windows Defender local Admin console"
    ],
    "difficulty": "iniciante",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão aborda as competências do Teams Admin Center.",
      "papoReto": "Se você precisa definir quem pode gravar reuniões no Teams, criar políticas de telefonia integrada, liberar ou proibir convidados em reuniões ou gerenciar bots de chat no Teams, o console correto é o Teams Admin Center.",
      "puloDoGato": "Governança técnica de reuniões, chats, telefonia e permissões do Teams = Teams Admin Center.",
      "cascasDeBanana": [
        "SharePoint Admin: Gerencia sites de intranet, pastas e bibliotecas de documentos do SharePoint/OneDrive.",
        "Purview: Gerencia conformidades de DLP e segredos corporativos contra vazamentos.",
        "Windows Defender: Antivírus local de estações locais físicas de colaboradores."
      ],
      "dicaOuro": "Políticas técnicas e permissões do Teams = Teams Admin Center.",
      "respostaCerta": "Centro de Administração do Microsoft Teams (Teams Admin Center)"
    },
    "id": "ab900_q270",
    "correctAnswer": 1
  },
  {
    "text": "Sua organização deseja contratar planos corporativos da Microsoft. Qual o limite padrão recomendado de até 300 usuários por tenant para os planos comerciais da família Microsoft 365 Business (Basic, Standard e Premium)?",
    "options": [
      "Até 2.000 assentos por tenant",
      "Até 10.000 usuários por tenant",
      "Até 300 licenças por usuário ativo contratadas no tenant",
      "Sem limites técnicos de assentos lógicos de faturamento"
    ],
    "difficulty": "iniciante",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão valida o limite de assentos dos planos Business.",
      "papoReto": "A Microsoft restringe os planos Business (Basic, Standard, Premium) para pequenas e médias empresas. O limite máximo de assentos é de até 300 licenças por tipo de plano contratado no tenant. Acima disso, o faturamento exige licenças Enterprise.",
      "puloDoGato": "Limite rígido de assentos da família M365 Business = 300 licenças.",
      "cascasDeBanana": [
        "Até 2.000 assentos: Limite muito alto para planos Business, que são restritos a PMEs.",
        "Até 10.000 usuários: Volume que exige faturamento de planos suites da família Enterprise (E3/E5).",
        "Sem limites técnicos: Apenas planos Enterprise não possuem limites máximos de contratações de assentos."
      ],
      "dicaOuro": "Família Microsoft 365 Business = Limite fixo de até 300 usuários.",
      "respostaCerta": "Até 300 licenças por usuário ativo contratadas no tenant"
    },
    "id": "ab900_q271",
    "correctAnswer": 2
  },
  {
    "text": "Sua empresa deseja garantir que o acesso dos técnicos seniores a relatórios de faturamento corporativo no M365 seja permitido apenas se eles estiverem logados na rede física da matriz. Qual o console especializado para governança do Microsoft M365 voltado exclusivamente ao controle de faturamento, compras e assinaturas?",
    "options": [
      "Centro de Administração do Microsoft Teams apenas",
      "Portal de conformidade do Microsoft Purview",
      "Windows Defender local Admin console",
      "Microsoft 365 admin center (na aba Faturamento / Billing)"
    ],
    "difficulty": "iniciante",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão aborda o console especializado para faturamentos.",
      "papoReto": "No ecossistema M365, o console central para faturamento e gestão comercial de compras de assinaturas e add-ons (como o Copilot) e atribuição de licenças para as contas dos usuários corporativos é a aba Faturamento do Microsoft 365 admin center.",
      "puloDoGato": "Comprar e gerenciar assinaturas de licenças corporativas do M365 = M365 Admin Center na aba Billing.",
      "cascasDeBanana": [
        "Teams admin center: Gerencia apenas funcionalidades do Teams (chats, chamadas), sem interface de compras e faturamentos.",
        "Purview: Focado em conformidades de DLP e segredos corporativos contra vazamentos.",
        "Windows Defender: Antivírus local de estações locais físicas de colaboradores."
      ],
      "dicaOuro": "Gestão financeira e faturamento = M365 Admin Center na aba Billing.",
      "respostaCerta": "Microsoft 365 admin center (na aba Faturamento / Billing)"
    },
    "id": "ab900_q272",
    "correctAnswer": 3
  },
  {
    "text": "Ao planejar as estratégias de atualização do pacote Office (Microsoft 365 Apps) nos computadores locais, qual canal de atualização (Update Channel) deve ser configurado para receber novidades apenas uma vez por mês em uma data fixa previsível?",
    "options": [
      "Canal Mensal Corporativo (Monthly Enterprise Channel)",
      "Canal Atual (Current Channel)",
      "Canal Semestral Corporativo (Semi-Annual Enterprise Channel)",
      "Canal Beta de testes (Beta Channel)"
    ],
    "difficulty": "avancado",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão aborda os canais de atualizações do M365 Apps.",
      "papoReto": "Para grandes empresas, receber atualizações a qualquer momento (Current Channel) pode sobrecarregar a rede ou gerar chamados. O Canal Mensal Corporativo (Monthly Enterprise Channel) entrega novidades e correções agrupadas apenas uma vez por mês (na segunda terça-feira), facilitando a homologação de TI.",
      "puloDoGato": "Receber novas funcionalidades agregadas uma vez por mês com dia fixo = Monthly Enterprise Channel.",
      "cascasDeBanana": [
        "Current Channel: Atualizações constantes assim que ficam prontas, sem datas previsíveis fixas.",
        "Semi-Annual: Atualizações duas vezes por ano, focado em estabilidade absoluta.",
        "Beta Channel: Voltado para testes de desenvolvedores locais e pilotos de TI."
      ],
      "dicaOuro": "Atualizações uma vez por mês na segunda terça-feira = Monthly Enterprise Channel.",
      "respostaCerta": "Canal Mensal Corporativo (Monthly Enterprise Channel)"
    },
    "id": "ab900_q273",
    "correctAnswer": 0
  },
  {
    "text": "Sua empresa deseja auditar a pontuação de saúde da infraestrutura de TI do tenant, avaliando o tempo médio que o Windows 11 local demora para iniciar nos computadores corporativos. Qual recurso no portal Endpoint Manager/Intune fornece esses insights?",
    "options": [
      "Pontuação de Adoção (Adoption Score)",
      "Análise de Ponto de Extremidade (Endpoint Analytics)",
      "Service Health Dashboard",
      "Log de Auditoria unificada do Purview"
    ],
    "difficulty": "avancado",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão aborda o Endpoint Analytics.",
      "papoReto": "Enquanto o Adoption Score analisa a adoção de softwares por pessoas, o Endpoint Analytics (dentro do Intune) foca na experiência do hardware e do sistema operacional. Ele mede o tempo de boot dos PCs, falhas de drivers locais e travamentos de apps para dar uma pontuação de experiência aos técnicos de TI.",
      "puloDoGato": "Métricas de boot do Windows e performance física de hardware local na visão de TI = Endpoint Analytics.",
      "cascasDeBanana": [
        "Adoption Score: Mede comportamento e produtividade qualitativa de colaboradores com M365.",
        "Service Health: Monitora datacenters da Microsoft, sem ler boot de PCs locais privados.",
        "Purview: Cuida de conformidade de documentos e DLP."
      ],
      "dicaOuro": "Performance de hardware e boot de computadores = Endpoint Analytics.",
      "respostaCerta": "Análise de Ponto de Extremidade (Endpoint Analytics)"
    },
    "id": "ab900_q274",
    "correctAnswer": 1
  },
  {
    "text": "Ao assinar o Microsoft 365, qual recurso permite que a empresa cadastre seu endereço web corporativo de e-mails oficial (ex: '@minhaempresa.com.br') em substituição ao domínio padrão provisório criado de fábrica?",
    "options": [
      "Exchange Mailbox Syncer",
      "Microsoft Entra Connect Sync",
      "Domínios Personalizados (Custom Domains)",
      "Roteamento físico de DNS no roteador local"
    ],
    "difficulty": "iniciante",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão foca na configuração de domínios personalizados.",
      "papoReto": "Todo tenant novo vem com o domínio '@nomedatenant.onmicrosoft.com'. Para usar os e-mails reais da empresa, a TI vai no menu 'Domains' do M365 Admin Center e adiciona o 'Custom Domain', provando a propriedade adicionando registros TXT/MX no DNS público.",
      "puloDoGato": "Substituir o domínio padrão '.onmicrosoft.com' pelo domínio real da empresa = Adicionar Custom Domain.",
      "cascasDeBanana": [
        "Mailbox Syncer: Termo fictício de sincronização.",
        "Entra Connect: Sincroniza identidades de usuários, sem gerenciar domínios de internet.",
        "Roteamento de DNS no roteador: Roteadores locais de fiação não alteram registros públicos de zonas de DNS na internet."
      ],
      "dicaOuro": "Usar e-mail real da empresa na nuvem = Cadastrar Custom Domain no M365 Admin Center.",
      "respostaCerta": "Domínios Personalizados (Custom Domains)"
    },
    "id": "ab900_q275",
    "correctAnswer": 2
  },
  {
    "text": "Sua empresa deseja assinar planos do Microsoft 365. Qual das alternativas representa uma característica oficial dos planos da família 'Business Premium' em relação à segurança de identidades e gerenciamento de computadores?",
    "options": [
      "É gratuito e ilimitado para até 300 usuários.",
      "Não possui recursos de segurança lógicos ativos.",
      "Exige obrigatoriamente um servidor Active Directory local físico.",
      "Inclui o Microsoft Entra ID Premium P1 e o Microsoft Intune para gerenciamento seguro de acessos e PCs."
    ],
    "difficulty": "intermediario",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão aborda os benefícios e escopo do plano Business Premium.",
      "papoReto": "O Microsoft 365 Business Premium é o melhor plano para PMEs. Além dos apps Office e Teams padrão do Business Standard, ele adiciona recursos de segurança avançada, trazendo de fábrica licenças de Intune e Microsoft Entra ID P1 para controle de conformidade e Acesso Condicional.",
      "puloDoGato": "Plano PME com segurança corporativa avançada e gestão de computadores (Intune) = Business Premium.",
      "cascasDeBanana": [
        "Gratuito: Planos comerciais corporativos envolvem custos por licenças.",
        "Sem recursos de segurança: Contém segurança de ponta ideal para PMEs.",
        "Exige AD local: É projetado principalmente para nuvem (cloud-first), operando com Entra ID puro."
      ],
      "dicaOuro": "Business Premium = M365 Apps + Intune + Entra ID Premium P1 + Defender para Business.",
      "respostaCerta": "Inclui o Microsoft Entra ID Premium P1 e o Microsoft Intune para gerenciamento seguro de acessos e PCs."
    },
    "id": "ab900_q276",
    "correctAnswer": 3
  },
  {
    "text": "Sua empresa deseja garantir que o acesso dos técnicos seniores a relatórios de faturamento corporativo no M365 seja permitido apenas se eles estiverem logados na rede física da matriz. Qual o prazo limite de carência que a Microsoft concede aos dados confidenciais do tenant caso uma assinatura comercial expire por falta de pagamento antes do faturamento?",
    "options": [
      "Geralmente de 90 dias (período de carência lógica onde os dados permanecem salvos antes da exclusão definitiva)",
      "Geralmente de 24 horas úteis locais",
      "Geralmente de 7 dias úteis comerciais",
      "Sem períodos de carências ou resiliência de dados em suspensões de faturamento"
    ],
    "difficulty": "avancado",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão aborda o ciclo de vida de assinaturas suspensas por faturamento.",
      "papoReto": "A Microsoft possui regras flexíveis contra inadimplências acidentais. Se o pagamento do tenant falhar, a assinatura entra em estado expirado/suspenso. O administrador tem um período de carência lógica de geralmente 90 dias para regularizar as finanças antes que a Microsoft apague os dados definitivamente.",
      "puloDoGato": "Período padrão de guarda e carência de dados corporativos de assinaturas suspensas = 90 dias.",
      "cascasDeBanana": [
        "Geralmente de 24 horas úteis: Prazo curto demais para suspensão de dados por falta de pagamento.",
        "Geralmente de 7 dias úteis: Prazo também insuficiente, a Microsoft concede uma carência maior.",
        "Sem períodos de carências: A nuvem SaaS preza por resiliência de dados corporativos contra deleções definitivas imediatas."
      ],
      "dicaOuro": "Regularizar pagamentos sem perder dados = Prazo de carência lógica de 90 dias.",
      "respostaCerta": "Geralmente de 90 dias (período de carência lógica onde os dados permanecem salvos antes da exclusão definitiva)"
    },
    "id": "ab900_q277",
    "correctAnswer": 0
  },
  {
    "text": "Sua empresa deseja garantir que o acesso dos técnicos seniores a relatórios de faturamento corporativo no M365 seja permitido apenas se eles estiverem logados na rede física da matriz. Qual das seguintes alternativas representa um console especializado para governança do Microsoft M365 voltado exclusivamente ao controle de faturamento, compras e assinaturas?",
    "options": [
      "Centro de Administração do Microsoft Teams apenas",
      "Microsoft 365 admin center (na aba Faturamento / Billing)",
      "Portal de conformidade do Microsoft Purview",
      "Windows Defender local Admin console"
    ],
    "difficulty": "iniciante",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão aborda o console especializado para faturamentos.",
      "papoReto": "No ecossistema M365, o console central para faturamento e gestão comercial de compras de assinaturas e add-ons (como o Copilot) e atribuição de licenças para as contas dos usuários corporativos é a aba Faturamento do Microsoft 365 admin center.",
      "puloDoGato": "Comprar e gerenciar assinaturas de licenças corporativas do M365 = M365 Admin Center na aba Billing.",
      "cascasDeBanana": [
        "Teams admin center: Gerencia apenas funcionalidades do Teams (chats, chamadas), sem interface de compras e faturamentos.",
        "Purview: Focado em conformidades de DLP e segredos corporativos contra vazamentos.",
        "Windows Defender: Antivírus local de estações locais físicas de colaboradores."
      ],
      "dicaOuro": "Gestão financeira e faturamento = M365 Admin Center na aba Billing.",
      "respostaCerta": "Microsoft 365 admin center (na aba Faturamento / Billing)"
    },
    "id": "ab900_q278",
    "correctAnswer": 1
  },
  {
    "text": "Sua empresa deseja configurar o M365 para que novos updates de segurança do Windows 11 sejam homologados e distribuídos automaticamente para os computadores corporativos gerenciados. Qual portal especializado realiza esse controle?",
    "options": [
      "Centro de Administração do Exchange Online apenas",
      "Portal do Azure DevOps Pipeline console",
      "Microsoft Intune (Windows Update for Business policies)",
      "Log de Auditoria unificada do Purview"
    ],
    "difficulty": "avancado",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão aborda a distribuição de atualizações de SO pelo Intune.",
      "papoReto": "O gerenciamento de anéis de atualização do Windows (Update Rings) e as políticas do Windows Update for Business são controlados de forma lógica no portal do Microsoft Intune (Endpoint Manager), garantindo que os PCs corporativos recebam patches de segurança automaticamente.",
      "puloDoGato": "Homologar e implantar atualizações de segurança do Windows 11 nos computadores corporativos = Políticas do Windows Update no Intune.",
      "cascasDeBanana": [
        "Exchange Admin: Gerencia e-mails e correio eletrônico.",
        "Azure DevOps: Destinado a controle de compilações de códigos de softwares.",
        "Purview: Cuida de conformidades e auditorias de mídias de documentos."
      ],
      "dicaOuro": "Controle de atualizações do Windows nos PCs corporativos = Microsoft Intune.",
      "respostaCerta": "Microsoft Intune (Windows Update for Business policies)"
    },
    "id": "ab900_q279",
    "correctAnswer": 2
  },
  {
    "text": "Ao analisar os relatórios de uso do Microsoft 365, qual métrica do painel de controle indica a quantidade de caixas de correio ativas que não registraram nenhuma interação (leitura ou envio de e-mails) nos últimos 30 dias?",
    "options": [
      "Painel de Saúde do Serviço (Service Health Dashboard)",
      "Central de Mensagens (Message Center) do admin center",
      "Log do Windows Defender Antivírus local",
      "Relatório de Uso de Email (Email Activity Report / Inactive users)"
    ],
    "difficulty": "intermediario",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão aborda a análise de inatividade de e-mails em relatórios de uso.",
      "papoReto": "Para ajudar a TI a economizar com licenças desnecessárias, o M365 Admin Center traz relatórios de uso de e-mail (Email Activity). Por ali, você filtra contas que estão inativas há 30 dias ou mais para planejar a desativação e colher economias de faturamento.",
      "puloDoGato": "Identificar caixas de correio inativas há mais de um mês para economizar licenças = Relatório de Uso de Email.",
      "cascasDeBanana": [
        "Service Health: Lida com quedas gerais da nuvem Microsoft.",
        "Message Center: Informativos de novidades de lançamentos.",
        "Defender Antivírus: Proteção local de computadores locais físicos."
      ],
      "dicaOuro": "Auditar caixas de e-mail inativas = Relatório de Uso de Email no Admin Center.",
      "respostaCerta": "Relatório de Uso de Email (Email Activity Report / Inactive users)"
    },
    "id": "ab900_q280",
    "correctAnswer": 3
  },
  {
    "text": "Sua empresa deseja garantir que o acesso dos técnicos seniores a relatórios de faturamento corporativo no M365 seja permitido apenas se eles estiverem logados na rede física da matriz. Qual o papel do console do Exchange Online nessa política condicional de segurança?",
    "options": [
      "Nenhum, pois o Exchange gerencia e-mails e a validação de identidades ocorre no Entra ID",
      "Compactar arquivos PDF da auditoria corporativa em formato .ZIP",
      "Substituir os firewalls físicos locais de hardware de TI",
      "Enviar e-mails informativos semanais sobre atualizações planejadas"
    ],
    "difficulty": "intermediario",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão valida os papéis lógicos de cada componente da nuvem.",
      "papoReto": "Não confunda os serviços. O Exchange cuida de e-mails. Toda a governança de acesso, IPs seguros, logins e regras condicionais ocorre no Microsoft Entra ID. O Exchange não avalia Named Locations de IPs no momento do logon de faturamento.",
      "respostaCerta": "Nenhum, pois o Exchange gerencia e-mails e a validação de identidades ocorre no Entra ID",
      "puloDoGato": "Governança de acessos e logins = Microsoft Entra ID. Exchange Online = E-mails.",
      "cascasDeBanana": [
        "Compactar arquivos: Não realiza manipulações de mídias de arquivos do SharePoint.",
        "Substituir firewalls: O Exchange é lógico em nuvem, firewalls físicos locais de hardware controlam cabos físicos.",
        "Enviar informativos: Tarefa da Central de Mensagens (Message Center)."
      ],
      "dicaOuro": "Segurança de identidades e acessos = Entra ID, não o Exchange."
    },
    "id": "ab900_q281",
    "correctAnswer": 0
  },
  {
    "text": "Qual das seguintes alternativas representa um plano comercial da família do Microsoft 365 Enterprise projetado para oferecer o menor custo possível contendo apenas aplicativos web, e-mail e Teams para colaboradores de escritório corporativos tradicionais?",
    "options": [
      "Microsoft 365 Enterprise E5",
      "Office 365 Enterprise E1",
      "Microsoft 365 Enterprise E3",
      "Microsoft 365 Business Premium"
    ],
    "difficulty": "intermediario",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão foca na diferenciação do plano Enterprise mais básico (O365 E1).",
      "papoReto": "O plano Office 365 E1 é o plano de entrada da linha Enterprise. Ele oferece todos os serviços básicos na nuvem (Exchange de 50GB, Teams, SharePoint), mas os aplicativos do Office só podem ser abertos na versão web no navegador, poupando custos de faturamento.",
      "puloDoGato": "Plano Enterprise mais barato apenas com recursos de nuvem sem apps Office instalados = Office 365 E1.",
      "cascasDeBanana": [
        "Enterprise E5: Plano topo de linha e mais caro com segurança e Power BI.",
        "Enterprise E3: Inclui os aplicativos Office instalados locais em computadores físicos.",
        "Business Premium: Voltado a PMEs com limite máximo de até 300 usuários."
      ],
      "dicaOuro": "Plano Enterprise sem aplicativos locais de desktop = Office 365 E1.",
      "respostaCerta": "Office 365 Enterprise E1"
    },
    "id": "ab900_q282",
    "correctAnswer": 1
  },
  {
    "text": "Sua empresa deseja configurar um alerta de faturamento para que a TI receba uma notificação por e-mail caso a quantidade de licenças do M365 não atribuídas no tenant seja superior a 20. Onde essa governança comercial de cotas deve ser ativada?",
    "options": [
      "Nas políticas de Acesso Condicional do Entra ID",
      "Nas regras de lixo eletrônico locais do Outlook dos técnicos de suporte",
      "Nas regras de notificações de faturamento (Billing Notifications) do M365 admin center",
      "Nas configurações de registro do Windows Registry local"
    ],
    "difficulty": "intermediario",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão foca na governança de licenças paradas via Billing Notifications.",
      "papoReto": "No M365 Admin Center, na aba de Faturamento, você pode configurar as 'Billing Notifications' para receber alertas de licenças ociosas. Isso ajuda a evitar que a empresa continue pagando por licenças que foram compradas mas não estão atribuídas a nenhum funcionário.",
      "puloDoGato": "Alertas de faturamento e licenças paradas no tenant = Configurar Billing Notifications no M365 Admin Center.",
      "cascasDeBanana": [
        "Acesso Condicional: Lida com restrições lógicas de segurança de logins de usuários.",
        "Regras de lixo eletrônico: Organizam spans na caixa de e-mails do Outlook.",
        "Windows Registry local: Configurações internas do sistema operacional local do computador."
      ],
      "dicaOuro": "Alertas sobre custos e licenças ociosas = Billing Notifications no M365 Admin Center.",
      "respostaCerta": "Nas regras de notificações de faturamento (Billing Notifications) do M365 admin center"
    },
    "id": "ab900_q283",
    "correctAnswer": 2
  },
  {
    "text": "Ao configurar o Microsoft 365 Apps para a empresa, qual recurso do console permite definir que os aplicativos (como Word e Excel) instalados localmente nos PCs dos estagiários usem preferencialmente o idioma local em português brasileiro de fábrica?",
    "options": [
      "Sincronização do Entra Connect local",
      "Autoatendimento de redefinição de senhas (SSPR)",
      "Cofre de segredos do Azure Key Vault",
      "Políticas de Implantação de Idiomas (Language Deployment) no M365 Apps Admin Center"
    ],
    "difficulty": "intermediario",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão aborda a implantação de pacotes de idiomas para os apps do Office.",
      "papoReto": "No M365 Apps Admin Center (ou via ferramenta Office Deployment Tool - ODT), o administrador define as políticas de instalação silenciosa dos aplicativos. É possível fixar que a instalação nativa inclua pacotes de idiomas locais para poupar o colaborador de downloads manuais pós-instalação.",
      "puloDoGato": "Forçar idioma padrão de instalação do Office nos computadores dos funcionários = Configurar Language Deployment.",
      "cascasDeBanana": [
        "Entra Connect: Sincroniza identidades de usuários, sem gerenciar arquivos do Office.",
        "SSPR: Canal de redefinições e trocas de senhas esquecidas.",
        "Azure Key Vault: Guarda segredos de APIs de desenvolvedores."
      ],
      "dicaOuro": "Padronizar idiomas das instalações dos apps do Office = Configurar na implantação (ODT/Apps Admin Center).",
      "respostaCerta": "Políticas de Implantação de Idiomas (Language Deployment) no M365 Apps Admin Center"
    },
    "id": "ab900_q284",
    "correctAnswer": 3
  },
  {
    "text": "Sua empresa deseja garantir que o acesso dos técnicos seniores a relatórios de faturamento corporativo no M365 seja permitido apenas se eles estiverem logados na rede física da matriz. Qual o papel do console do Purview nessa política condicional de segurança?",
    "options": [
      "Nenhum, pois o Purview gerencia conformidade de dados e a validação de identidades ocorre no Entra ID",
      "Compactar arquivos PDF da auditoria corporativa em formato .ZIP",
      "Substituir os firewalls físicos locais de hardware de TI",
      "Enviar e-mails informativos semanais sobre atualizações planejadas"
    ],
    "difficulty": "intermediario",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão aborda o escopo lógico do Microsoft Purview em relação a identidades.",
      "papoReto": "Não confunda os escopos. O Purview cuida de conformidade, classificação de dados e DLP. A validação de identidades de logon, IPs seguros e restrições de localidade de logins é de responsabilidade do Entra ID. O Purview não avalia logins em tempo real.",
      "respostaCerta": "Nenhum, pois o Purview gerencia conformidade de dados e a validação de identidades ocorre no Entra ID",
      "puloDoGato": "Segurança de identidades e acessos = Entra ID. Purview = Classificação e conformidade de documentos.",
      "cascasDeBanana": [
        "Compactar arquivos: Não realiza manipulações de mídias de arquivos do SharePoint.",
        "Substituir firewalls: O Purview é lógico em nuvem, firewalls físicos locais de hardware controlam cabos físicos.",
        "Enviar informativos: Tarefa da Central de Mensagens (Message Center)."
      ],
      "dicaOuro": "Segurança de logins e acessos = Entra ID, não o Purview."
    },
    "id": "ab900_q285",
    "correctAnswer": 0
  },
  {
    "text": "Qual o principal benefício da funcionalidade de 'Retenção Legal' (Litigation Hold) configurada em caixas de e-mails corporativas no Exchange Online?",
    "options": [
      "Compactar o tamanho físico das mensagens em 90% para economizar faturamento.",
      "Preservar permanentemente todas as mensagens e e-mails enviados ou recebidos pelo colaborador (mesmo se ele apagar as mensagens da lixeira local), permitindo investigações legais de TI futuras.",
      "Bloquear o recebimento de e-mails externos vindos de qualquer concorrente.",
      "Substituir o antivírus Defender local dos computadores de estagiários."
    ],
    "difficulty": "avancado",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão aborda a Retenção Legal (Litigation Hold) no Exchange.",
      "papoReto": "A Retenção Legal (Litigation Hold) garante que provas judiciais não sejam destruídas. Se o funcionário suspeito apagar um e-mail incriminador da lixeira (Hard Delete), a mensagem sumirá para ele, mas continuará arquivada de forma oculta na nuvem para o time de segurança pesquisar via eDiscovery.",
      "puloDoGato": "Impedir exclusão definitiva de e-mails por funcionários para fins de auditoria jurídica = Ativar Litigation Hold.",
      "cascasDeBanana": [
        "Compactar mensagens: O Exchange armazena os dados em bancos robustos de nuvem sem comprimir layouts visuais de mídias de e-mails em .ZIP.",
        "Bloquear concorrentes: Lidadas por regras de transporte ou filtros anti-spam, não por retenções legais.",
        "Substituir antivírus: Trata-se de ferramentas de segurança de endpoints locais de computadores."
      ],
      "dicaOuro": "Evitar destruição de provas de e-mails = Litigation Hold.",
      "respostaCerta": "Preservar permanentemente todas as mensagens e e-mails enviados ou recebidos pelo colaborador (mesmo se ele apagar as mensagens da lixeira local), permitindo investigações legais de TI futuras."
    },
    "id": "ab900_q286",
    "correctAnswer": 1
  },
  {
    "text": "Sua empresa deseja assinar licenças do M365 para colaboradores do time de vendas que necessitam apenas de acesso a caixas de e-mail corporativas de 50GB e aplicativos do Office na nuvem (versão web), sem Teams ou acessos de voz. Qual assinatura atende a esse requisito de faturamento?",
    "options": [
      "Microsoft 365 Enterprise E5",
      "Microsoft 365 Enterprise E3",
      "Exchange Online Plan 1 (ou Plan 2) avulso",
      "Microsoft 365 Business Premium"
    ],
    "difficulty": "intermediario",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão aborda o licenciamento individual de serviços como o Exchange Online.",
      "papoReto": "Se você precisa apenas de caixas de correio de e-mails corporativas sem a suíte completa de colaboração (Teams, Intune), a Microsoft vende o Exchange Online de forma avulsa (Plan 1 com caixa de 50GB e Plan 2 com caixa de 100GB), otimizando os custos.",
      "puloDoGato": "Necessidade exclusiva de caixas de e-mails corporativas sem a suíte M365 = Assinaturas avulsas do Exchange Online.",
      "cascasDeBanana": [
        "Enterprise E5: Plano corporativo topo de linha contendo toda a suíte de segurança e Power BI.",
        "Enterprise E3: Inclui toda a suíte de colaboração com aplicativos locais.",
        "Business Premium: Suíte completa com Intune e Entra ID P1 para PMEs."
      ],
      "dicaOuro": "Apenas e-mail profissional de 50GB = Exchange Online Plan 1.",
      "respostaCerta": "Exchange Online Plan 1 (ou Plan 2) avulso"
    },
    "id": "ab900_q287",
    "correctAnswer": 2
  },
  {
    "text": "Sua empresa deseja configurar o M365 para que novos relatórios de uso e estatísticas de reuniões do Teams sejam enviados mensalmente por e-mail para os gerentes de RH de forma automática. Onde essa governança de relatórios deve ser configurada?",
    "options": [
      "Nas políticas de Acesso Condicional do Entra ID",
      "Nas regras de firewall do roteador físico local da empresa",
      "Nas configurações locais do Windows Defender Antivírus local",
      "Nas configurações de relatórios do Microsoft 365 admin center"
    ],
    "difficulty": "intermediario",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão foca no agendamento e envio de relatórios de uso do M365.",
      "papoReto": "No M365 Admin Center, na aba de Relatórios (Reports), o administrador pode assinar e agendar o envio automático de resumos de atividade de uso para destinatários selecionados (ex: RH ou diretoria) para acompanhar a adoção de tecnologia.",
      "puloDoGato": "Agendar e enviar relatórios automáticos de adoção das ferramentas M365 = Configurações de Relatórios no Admin Center.",
      "cascasDeBanana": [
        "Acesso Condicional: Lida com restrições lógicas de segurança de logins de usuários.",
        "Roteador físico: Lida com conectividade física local de internet de switches.",
        "Windows Defender: Antivírus local, sem relação com relatórios de nuvem."
      ],
      "dicaOuro": "Enviar relatórios periódicos de uso para gerentes = Agendar na aba Reports do Admin Center.",
      "respostaCerta": "Nas configurações de relatórios do Microsoft 365 admin center"
    },
    "id": "ab900_q288",
    "correctAnswer": 3
  },
  {
    "text": "Ao planejar as estratégias de faturamento, qual a nomenclatura dada ao modelo de contratação do M365 na qual a empresa adquire licenças por meio de um contrato corporativo centralizado, com pagamentos anuais estáveis e faturas unificadas?",
    "options": [
      "Contrato Enterprise Agreement (EA) tradicional de TI",
      "Programa de Serviços Online Direct (MOSP)",
      "Compra direta no site por cartão de crédito corporativo",
      "Licenciamento Open Value síncrono local"
    ],
    "difficulty": "avancado",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão aborda o contrato Enterprise Agreement (EA) focado em faturamento.",
      "papoReto": "O Enterprise Agreement (EA) é o modelo tradicional de compras corporativas de grande porte. Ele unifica o faturamento de todas as empresas do grupo em uma única fatura anual estável e previsível, simplificando a gestão de contas de TI.",
      "puloDoGato": "Contrato corporativo centralizado para grandes grupos com faturamento anual fixo = Enterprise Agreement (EA).",
      "cascasDeBanana": [
        "MOSP Direct: Modelo de compras diretas na internet para pequenos volumes de faturamento por cartão.",
        "Compra direta por cartão: Inviável em finanças de grandes grupos corporativos.",
        "Open Value: Contratos de licenciamento perpétuo clássicos locais de softwares antigos locais."
      ],
      "dicaOuro": "Contratos corporativos de faturamento de grande porte = Enterprise Agreement (EA).",
      "respostaCerta": "Contrato Enterprise Agreement (EA) tradicional de TI"
    },
    "id": "ab900_q289",
    "correctAnswer": 0
  },
  {
    "text": "Sua empresa deseja garantir que o acesso dos técnicos seniores a relatórios de faturamento corporativo no M365 seja permitido apenas se eles estiverem logados na rede física da matriz. Qual o papel do console do SharePoint Online nessa política condicional de segurança?",
    "options": [
      "Compactar arquivos PDF da auditoria corporativa em formato .ZIP",
      "Nenhum, pois o SharePoint gerencia arquivos e a validação de identidades ocorre no Entra ID",
      "Substituir os firewalls físicos locais de hardware de TI",
      "Enviar e-mails informativos semanais sobre atualizações planejadas"
    ],
    "difficulty": "intermediario",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão aborda o escopo lógico do SharePoint Online em relação a identidades.",
      "papoReto": "Não confunda os escopos. O SharePoint cuida de arquivos e portais de intranets. A validação de identidades de logon, IPs seguros e restrições de localidade de logins é de responsabilidade do Entra ID. O SharePoint não avalia logins em tempo real.",
      "respostaCerta": "Nenhum, pois o SharePoint gerencia arquivos e a validação de identidades ocorre no Entra ID",
      "puloDoGato": "Segurança de identidades e acessos = Entra ID. SharePoint = Arquivos e colaboração.",
      "cascasDeBanana": [
        "Compactar arquivos: Não realiza manipulações de mídias de arquivos do SharePoint.",
        "Substituir firewalls: O SharePoint é lógico em nuvem, firewalls físicos locais de hardware controlam cabos físicos.",
        "Enviar informativos: Tarefa da Central de Mensagens (Message Center)."
      ],
      "dicaOuro": "Segurança de logins e acessos = Entra ID, não o SharePoint."
    },
    "id": "ab900_q290",
    "correctAnswer": 1
  },
  {
    "text": "Qual das seguintes alternativas representa um plano comercial da família do Microsoft 365 Enterprise projetado para oferecer o melhor custo contendo os aplicativos Office instalados locais em computadores físicos, e-mail e Teams para colaboradores de escritório?",
    "options": [
      "Microsoft 365 Enterprise E5",
      "Office 365 Enterprise E1",
      "Microsoft 365 Enterprise E3",
      "Microsoft 365 Business Premium"
    ],
    "difficulty": "intermediario",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão foca na diferenciação do plano Enterprise E3.",
      "papoReto": "O plano Enterprise E3 é o padrão para escritórios em médias e grandes empresas. Ele oferece toda a suíte de colaboração (Teams, SharePoint, Exchange) e inclui o direito de instalar os aplicativos do Office (M365 Apps) locais nos computadores físicos de trabalho.",
      "puloDoGato": "Plano Enterprise com aplicativos Office instalados locais de desktop = Microsoft 365 Enterprise E3.",
      "cascasDeBanana": [
        "Enterprise E5: Plano completo premium mais caro com segurança e Power BI.",
        "Office E1: Plano de entrada na nuvem apenas de e-mail básico sem aplicativos desktop locais.",
        "Business Premium: Voltado a PMEs com limite máximo de até 300 usuários."
      ],
      "dicaOuro": "Plano Enterprise com direito de instalação local do Office = Microsoft 365 Enterprise E3.",
      "respostaCerta": "Microsoft 365 Enterprise E3"
    },
    "id": "ab900_q291",
    "correctAnswer": 2
  },
  {
    "text": "Sua empresa deseja configurar um alerta de faturamento para que a TI receba uma notificação por e-mail caso a quantidade de licenças do M365 não atribuídas no tenant seja superior a 50. Onde essa governança comercial de cotas deve ser ativada?",
    "options": [
      "Nas políticas de Acesso Condicional do Entra ID",
      "Nas regras de lixo eletrônico locais do Outlook dos técnicos de suporte",
      "Nas configurações de registro do Windows Registry local",
      "Nas regras de notificações de faturamento (Billing Notifications) do M365 admin center"
    ],
    "difficulty": "intermediario",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão foca na governança de licenças paradas via Billing Notifications.",
      "papoReto": "No M365 Admin Center, na aba de Faturamento, você pode configurar as 'Billing Notifications' para receber alertas de licenças ociosas. Isso ajuda a evitar que a empresa continue pagando por licenças que foram compradas mas não estão atribuídas a nenhum funcionário.",
      "puloDoGato": "Alertas de faturamento e licenças paradas no tenant = Configurar Billing Notifications no M365 Admin Center.",
      "cascasDeBanana": [
        "Acesso Condicional: Lida com restrições lógicas de segurança de logins de usuários.",
        "Regras de lixo eletrônico: Organizam spans na caixa de e-mails do Outlook.",
        "Windows Registry local: Configurações internas do sistema operacional local do computador."
      ],
      "dicaOuro": "Alertas sobre custos e licenças ociosas = Billing Notifications no M365 Admin Center.",
      "respostaCerta": "Nas regras de notificações de faturamento (Billing Notifications) do M365 admin center"
    },
    "id": "ab900_q292",
    "correctAnswer": 3
  },
  {
    "text": "Ao configurar o Microsoft 365 Apps para a empresa, qual recurso do console permite definir que os aplicativos (como Word e Excel) instalados localmente nos PCs dos estagiários usem preferencialmente o idioma local em inglês de fábrica?",
    "options": [
      "Políticas de Implantação de Idiomas (Language Deployment) no M365 Apps Admin Center",
      "Sincronização do Entra Connect local",
      "Autoatendimento de redefinição de senhas (SSPR)",
      "Cofre de segredos do Azure Key Vault"
    ],
    "difficulty": "intermediario",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão aborda a implantação de pacotes de idiomas para os apps do Office.",
      "papoReto": "No M365 Apps Admin Center (ou via ferramenta Office Deployment Tool - ODT), o administrador define as políticas de instalação silenciosa dos aplicativos. É possível fixar que a instalação nativa inclua pacotes de idiomas locais para poupar o colaborador de downloads manuais pós-instalação.",
      "puloDoGato": "Forçar idioma padrão de instalação do Office nos computadores dos funcionários = Configurar Language Deployment.",
      "cascasDeBanana": [
        "Entra Connect: Sincroniza identidades de usuários, sem gerenciar arquivos do Office.",
        "SSPR: Canal de redefinições e trocas de senhas esquecidas.",
        "Azure Key Vault: Guarda segredos de APIs de desenvolvedores."
      ],
      "dicaOuro": "Padronizar idiomas das instalações dos apps do Office = Configurar na implantação (ODT/Apps Admin Center).",
      "respostaCerta": "Políticas de Implantação de Idiomas (Language Deployment) no M365 Apps Admin Center"
    },
    "id": "ab900_q293",
    "correctAnswer": 0
  },
  {
    "text": "Sua empresa deseja garantir que o acesso dos técnicos seniores a relatórios de faturamento corporativo no M365 seja permitido apenas se eles estiverem logados na rede física da matriz. Qual o papel do console do Teams nessa política condicional de segurança?",
    "options": [
      "Compactar arquivos PDF da auditoria corporativa em formato .ZIP",
      "Nenhum, pois o Teams gerencia reuniões e a validação de identidades ocorre no Entra ID",
      "Substituir os firewalls físicos locais de hardware de TI",
      "Enviar e-mails informativos semanais sobre atualizações planejadas"
    ],
    "difficulty": "intermediario",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão aborda o escopo lógico do Microsoft Teams em relação a identidades.",
      "papoReto": "Não confunda os escopos. O Teams cuida de reuniões, chats e chamadas de voz. A validação de identidades de logon, IPs seguros e restrições de localidade de logins é de responsabilidade do Entra ID. O Teams não avalia logins em tempo real.",
      "respostaCerta": "Nenhum, pois o Teams gerencia reuniões e a validação de identidades ocorre no Entra ID",
      "puloDoGato": "Segurança de identidades e acessos = Entra ID. Teams = Reuniões e chats.",
      "cascasDeBanana": [
        "Compactar arquivos: Não realiza manipulações de mídias de arquivos do SharePoint.",
        "Substituir firewalls: O Teams é lógico em nuvem, firewalls físicos locais de hardware controlam cabos físicos.",
        "Enviar informativos: Tarefa da Central de Mensagens (Message Center)."
      ],
      "dicaOuro": "Segurança de logins e acessos = Entra ID, não o Teams."
    },
    "id": "ab900_q294",
    "correctAnswer": 1
  },
  {
    "text": "Sua empresa deseja configurar o Microsoft 365 para que grupos de equipe inativos no Teams sejam excluídos automaticamente após 180 dias, a menos que o proprietário renove o grupo por e-mail. Qual recurso gerencia esse comportamento?",
    "options": [
      "Log do Windows Defender Antivírus local",
      "Autoatendimento de redefinição de senhas (SSPR)",
      "Política de expiração de grupos do Microsoft 365 (Group Expiration Policy)",
      "Microsoft Entra Connect Sync"
    ],
    "difficulty": "avancado",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão aborda a Group Expiration Policy.",
      "papoReto": "A política de expiração de grupos do M365 (Group Expiration Policy) ajuda a evitar o acúmulo de grupos obsoletos. Quando configurada, os donos do grupo recebem e-mails aos 30, 15 e 1 dia antes da expiração. Se não clicarem em renovar, o grupo e os arquivos associados são excluídos.",
      "puloDoGato": "Excluir de forma programada e automática grupos inativos se não forem renovados pelo dono = Group Expiration Policy.",
      "cascasDeBanana": [
        "Windows Defender: Trata de antivírus local de endpoints.",
        "SSPR: Habilita usuários a resetarem senhas esquecidas.",
        "Entra Connect Sync: Sincroniza identidades de rede híbridas."
      ],
      "dicaOuro": "Evitar grupos zumbis inativos no Teams = Ativar Group Expiration Policy.",
      "respostaCerta": "Política de expiração de grupos do Microsoft 365 (Group Expiration Policy)"
    },
    "id": "ab900_q295",
    "correctAnswer": 2
  },
  {
    "text": "Um auditor externo precisa acessar o tenant da empresa para visualizar as faturas de compras de licenças e relatórios financeiros, mas sem fazer alterações em assinaturas ou cartões cadastrados. Qual função confere o menor privilégio necessário?",
    "options": [
      "Administrador Global (Global Administrator)",
      "Administrador de Usuários (User Administrator)",
      "Administrador de Conformidade (Compliance Administrator)",
      "Leitor de Faturamento (Billing Reader)"
    ],
    "difficulty": "intermediario",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão aborda a função Billing Reader (Leitor de Faturamento).",
      "papoReto": "Seguindo o princípio do privilégio mínimo, se um auditor só precisa ler dados financeiros (faturas, notas, transações), o cargo ideal é 'Billing Reader'. Ele enxerga tudo o que se refere a faturamento, mas não tem poder para alterar e-mails ou senhas.",
      "puloDoGato": "Apenas ler dados financeiros e faturas sem poder de alteração = Billing Reader.",
      "cascasDeBanana": [
        "Global Admin: Permissões irrestritas totais de segurança e redes, violando a regra do menor privilégio.",
        "User Admin: Gerencia identidades e resets de senhas de usuários.",
        "Compliance Admin: Lida com eDiscovery, rótulos de retenção e logs no Purview."
      ],
      "dicaOuro": "Visualizar finanças sem editar nada = Billing Reader.",
      "respostaCerta": "Leitor de Faturamento (Billing Reader)"
    },
    "id": "ab900_q296",
    "correctAnswer": 3
  },
  {
    "text": "Sua empresa é uma parceira de tecnologia da Microsoft (MSP) e gerencia simultaneamente a infraestrutura M365 de 15 clientes de pequeno porte. Qual portal especializado permite gerenciar a segurança e conformidade de múltiplos tenants em uma única console unificada?",
    "options": [
      "Microsoft 365 Lighthouse",
      "Microsoft 365 Admin Center padrão",
      "Centro de Administração do Microsoft Teams",
      "Microsoft Entra admin center"
    ],
    "difficulty": "avancado",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão aborda a finalidade do Microsoft 365 Lighthouse.",
      "papoReto": "O Microsoft 365 Lighthouse é a ferramenta ideal para parceiros de tecnologia (MSPs) que gerenciam pequenas e médias empresas (PMEs). Ele reúne em uma única console a saúde, os riscos e as atualizações de múltiplos clientes (multi-tenant), otimizando o suporte.",
      "puloDoGato": " MSP gerenciando múltiplos clientes/tenants de PME em uma única console = Microsoft 365 Lighthouse.",
      "cascasDeBanana": [
        "M365 Admin Center padrão: Focado em gerenciar um único tenant de cada vez.",
        "Teams Admin Center: Governança específica para chats e reuniões do Teams de um tenant.",
        "Entra admin center: Gerencia identidades de um único tenant."
      ],
      "dicaOuro": "Gerenciamento multi-tenant para parceiros (MSPs) = Microsoft 365 Lighthouse.",
      "respostaCerta": "Microsoft 365 Lighthouse"
    },
    "id": "ab900_q297",
    "correctAnswer": 0
  },
  {
    "text": "Ao projetar a disponibilidade para serviços em nuvem, o administrador calcula o SLA composto de múltiplos serviços M365 integrados. O que descreve corretamente a regra matemática para calcular o SLA composto de dois serviços independentes com SLAs de 99,9% cada?",
    "options": [
      "Soma-se os SLAs individuais obtendo 199,8%.",
      "Multiplica-se as porcentagens dos SLAs individuais (99,9% * 99,9%), resultando em um SLA composto ligeiramente menor de 99,8%.",
      "Divide-se a diferença por dois de forma síncrona.",
      "O SLA composto é sempre igual ao maior SLA da cadeia."
    ],
    "difficulty": "avancado",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão valida o cálculo do SLA composto.",
      "papoReto": "Quando dois serviços dependem um do outro, a disponibilidade global cai. Se o App A e o App B têm 99,9% de disponibilidade, o SLA composto é calculado multiplicando-se (0.999 * 0.999 = 0.998), resultando em 99,8% de SLA composto.",
      "puloDoGato": "Cálculo de SLA composto = Multiplicar as disponibilidades individuais (sempre resultará em um número menor).",
      "cascasDeBanana": [
        "Soma dos SLAs: Matematicamente incorreto e impossível ter mais de 100% de uptime.",
        "Dividir diferença por dois: Sem fundamento matemático estatístico.",
        "Sempre igual ao maior: Se uma parte cai, o sistema inteiro cai, logo a disponibilidade deve ser menor que a do maior."
      ],
      "dicaOuro": "SLA Composto = Multiplicar os SLAs individuais.",
      "respostaCerta": "Multiplica-se as porcentagens dos SLAs individuais (99,9% * 99,9%), resultando em um SLA composto ligeiramente menor de 99,8%."
    },
    "id": "ab900_q298",
    "correctAnswer": 1
  },
  {
    "text": "Um colaborador reclama que não consegue compartilhar arquivos com usuários externos ao tenant utilizando o OneDrive corporativo dele. Onde o administrador global deve ir para verificar se o compartilhamento com externos está habilitado para o OneDrive no nível do tenant?",
    "options": [
      "Centro de Administração do Exchange (Exchange Admin Center)",
      "Central de Mensagens (Message Center) do admin center",
      "Centro de Administração do SharePoint (SharePoint Admin Center)",
      "Console do Windows Defender local"
    ],
    "difficulty": "intermediario",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão aborda a relação entre SharePoint e OneDrive na governança de compartilhamento.",
      "papoReto": "O OneDrive é estruturado sob o SharePoint Online. Por conta disso, as configurações globais de compartilhamento com externos (External Sharing) tanto para sites de equipes quanto para arquivos pessoais do OneDrive são gerenciadas na console do SharePoint Admin Center.",
      "puloDoGato": "Configurar compartilhamento externo global do OneDrive = SharePoint Admin Center.",
      "cascasDeBanana": [
        "Exchange Admin Center: Cuida exclusivamente de caixas de correio e regras de e-mails.",
        "Message Center: Informativos de alterações planejadas.",
        "Windows Defender: Antivírus local das estações locais físicas."
      ],
      "dicaOuro": "Gargalo de compartilhamento de arquivos do OneDrive = SharePoint Admin Center.",
      "respostaCerta": "Centro de Administração do SharePoint (SharePoint Admin Center)"
    },
    "id": "ab900_q299",
    "correctAnswer": 2
  },
  {
    "text": "Uma grande organização de nível Enterprise necessita de suporte técnico dedicado 24/7 com gerentes de conta de sucesso do cliente (CSAM) designados e tempos de resposta inferiores a 15 minutos para todos os serviços M365. Qual programa de suporte da Microsoft atende a esse nível de exigência?",
    "options": [
      "Suporte básico gratuito do Microsoft Online Services Program (MOSP)",
      "Suporte por fóruns públicos da comunidade do Microsoft Tech Community",
      "Suporte técnico terceirizado básico via chats de redes sociais",
      "Suporte Unificado da Microsoft (Microsoft Unified Support / Premier Support)"
    ],
    "difficulty": "intermediario",
    "domain": "Administração e Monitoramento",
    "explanation": {
      "intro": "Esta questão foca nos níveis de suporte corporativo (Unified/Premier Support).",
      "papoReto": "Grandes empresas que exigem acordos rígidos de atendimento (SLA de resposta) e consultorias preventivas contratam o Microsoft Unified Support (antigo Premier Support). Ele concede acesso a CSAMs dedicados e engenheiros de suporte de nível sênior 24/7.",
      "puloDoGato": "Suporte corporativo premium dedicado com gerentes dedicados e menor tempo de resposta = Microsoft Unified Support.",
      "cascasDeBanana": [
        "Suporte básico MOSP: Suporte padrão da assinatura da nuvem sem gerência dedicada.",
        "Fóruns públicos: Auxílio comunitário informal e sem SLAs de tempos de respostas comerciais.",
        "Redes sociais: Não constituem canais homologados profissionais para segurança empresarial."
      ],
      "dicaOuro": "Suporte topo de linha corporativo dedicado = Microsoft Unified Support.",
      "respostaCerta": "Suporte Unificado da Microsoft (Microsoft Unified Support / Premier Support)"
    },
    "id": "ab900_q300",
    "correctAnswer": 3
  }
];

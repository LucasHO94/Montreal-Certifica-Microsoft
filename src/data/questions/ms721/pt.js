export const questions = [
  {
    "id": "ms721_q1",
    "text": "Qual é o nome do sistema de PBX na nuvem da Microsoft que fornece recursos de telefonia como transferência de chamadas, correio de voz e filas de chamada dentro do Microsoft Teams?",
    "options": [
      "Microsoft Teams Calling Plan isolado sem PBX integrado",
      "Microsoft 365 Voice com gateway SIP nativo",
      "Microsoft Teams Phone (anteriormente denominado Phone System)",
      "Azure Communication Services com módulo de telefonia corporativa"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Visão Geral do Teams Phone (Nível: iniciante).",
      "papoReto": "Teams Phone é PBX gerenciado Microsoft na nuvem, core de telefonia em Teams com recursos como transferência, correio de voz, auto-atendentes, filas",
      "respostaCerta": "Microsoft Teams Phone (anteriormente denominado Phone System) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Phone = PBX nuvem Microsoft, nome antigo Phone System, mesma coisa",
      "cascasDeBanana": [
        "Calling Plan é opção conectividade PSTN, não o PBX em si — Teams Phone é PBX independente do PSTN",
        "Azure Communication Services é plataforma API para developers, não PBX corporativo gerenciado",
        "Microsoft 365 Voice não é termo atual — Phone System rebatizado Teams Phone em 2019"
      ],
      "dicaOuro": "Phone System = Teams Phone (rebrand 2019) — mesma solução, apenas nome novo da Microsoft"
    }
  },
  {
    "id": "ms721_q2",
    "text": "Quais são as três principais opções para conectar o Microsoft Teams Phone à rede telefônica pública (PSTN)?",
    "options": [
      "Azure Voice Gateway, Teams PSTN Bridge e Direct SIP Connect",
      "Calling Plan, Hybrid Voice e Skype Connect Legacy",
      "SIP Trunking direto, VoIP Gateway e Microsoft Phone Bridge",
      "Microsoft Calling Plan, Operator Connect e Direct Routing"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Opções de Conectividade PSTN (Nível: iniciante).",
      "papoReto": "Três opções PSTN em Teams: Calling Plan (Microsoft operadora), Operator Connect (parceira gerencia), Direct Routing (seu SBC + controle)",
      "respostaCerta": "Microsoft Calling Plan, Operator Connect e Direct Routing — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Calling Plan simples, Operator Connect meio-termo, Direct Routing máximo controle",
      "cascasDeBanana": [
        "Azure Voice Gateway não existe — confunde com Azure Communication Services (API, não PSTN)",
        "Skype Connect Legacy descontinuado — Microsoft removeu suporte em 2017-2018",
        "SIP Trunking direto sem SBC não se integra ao Teams Phone — exige Direct Routing com SBC certificado"
      ],
      "dicaOuro": "3 opções podem coexistir no mesmo tenant, atribuídas por usuário conforme necessidade da organização"
    }
  },
  {
    "id": "ms721_q3",
    "text": "Em qual cenário o Microsoft Calling Plan é a opção mais adequada para conectividade PSTN no Teams?",
    "options": [
      "Empresas com contratos exclusivos com operadoras locais que não são parceiras Microsoft",
      "Organizações com infraestrutura SIP própria que desejam manter controle total sobre o roteamento de chamadas",
      "Organizações em países onde apenas o Direct Routing está disponível como opção PSTN",
      "Organizações que desejam conectividade PSTN totalmente gerenciada pela Microsoft, sem necessidade de infraestrutura de telefonia própria, em países onde o Calling Plan está disponível"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Microsoft Calling Plan (Nível: iniciante).",
      "papoReto": "Calling Plan = Microsoft é operadora PSTN, cobrança por minuto/planos, zero infraestrutura SBC/SIP sua",
      "respostaCerta": "Organizações que desejam conectividade PSTN totalmente gerenciada pela Microsoft, sem necessidade de infraestrutura de telefonia própria, em países onde o Calling Plan está disponível — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Calling Plan = Microsoft cuida de tudo, você só paga e disca",
      "cascasDeBanana": [
        "Infraestrutura SIP própria exige Direct Routing com SBC — Calling Plan é totalmente gerenciado",
        "Operadoras locais não parceiras exigem Direct Routing — Calling Plan usa infraestrutura Microsoft",
        "Países sem Calling Plan devem usar Direct Routing/Operator Connect — disponibilidade varia por região"
      ],
      "dicaOuro": "Disponibilidade por país varia — verificar suporte regional em docs Microsoft antes contratação"
    }
  },
  {
    "id": "ms721_q4",
    "text": "O que diferencia o Operator Connect do Microsoft Calling Plan em termos de gerenciamento e responsabilidade?",
    "options": [
      "O Operator Connect exige implantação de SBC próprio pelo cliente; o Calling Plan não requer infraestrutura adicional",
      "O Operator Connect é exclusivo para chamadas internacionais; o Calling Plan cobre apenas chamadas domésticas",
      "Não há diferença funcional; ambos usam a mesma infraestrutura Microsoft com operadoras diferentes",
      "No Operator Connect, a operadora parceira Microsoft gerencia a infraestrutura PSTN e a configuração é feita pelo Teams Admin Center; no Calling Plan, a Microsoft é a operadora e gerencia tudo diretamente"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Operator Connect (Nível: iniciante).",
      "papoReto": "Operator Connect = operadora parceira gerencia PSTN + SBC, reduz complexidade vs Direct Routing",
      "respostaCerta": "No Operator Connect, a operadora parceira Microsoft gerencia a infraestrutura PSTN e a configuração é feita pelo Teams Admin Center; no Calling Plan, a Microsoft é a operadora e gerencia tudo diretamente — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Operator Connect = operadora terceira + SBC dela, meio termo entre Calling Plan e Direct Routing",
      "cascasDeBanana": [
        "SBC próprio é exigência de Direct Routing, não Operator Connect — operadora gerencia SBC em Operator Connect",
        "Calling Plan é Microsoft como operadora; Operator Connect é operadora terceira parceira — estruturas diferentes",
        "Operator Connect e Calling Plan funcionam globalmente — diferenças são gerenciamento, não escopo geográfico"
      ],
      "dicaOuro": "Operadora parceira em Operator Connect gerencia tanto PSTN quanto SBC por você"
    }
  },
  {
    "id": "ms721_q5",
    "text": "Qual componente de infraestrutura é obrigatório para implementar o Direct Routing no Microsoft Teams?",
    "options": [
      "Exchange Online com conector de voz habilitado para roteamento PSTN",
      "Azure VPN Gateway com configuração de túnel SIP para o Microsoft 365",
      "Microsoft Teams Rooms com módulo de telefonia PSTN integrado",
      "Session Border Controller (SBC) certificado pela Microsoft conectado ao Teams Phone via SIP TLS"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Direct Routing — Visão Geral (Nível: iniciante).",
      "papoReto": "Direct Routing = você gerencia SBC certificado Microsoft, máxima flexibilidade, controle total troncos SIP",
      "respostaCerta": "Session Border Controller (SBC) certificado pela Microsoft conectado ao Teams Phone via SIP TLS — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Direct Routing = seu SBC, seu controle, máxima complexidade",
      "cascasDeBanana": [
        "Exchange Online não participa de roteamento PSTN Teams Phone — não é componente Direct Routing",
        "Azure VPN Gateway é rede privada, não participa de SIP/PSTN — não é intermediário telefonia",
        "Teams Rooms é dispositivo sala, não gateway PSTN — não faz roteamento de chamadas externas"
      ],
      "dicaOuro": "SBCs certificados: AudioCodes, Ribbon, Lync Mediant, Acme/Ixia, etc. — verificar lista compatibilidade Microsoft"
    }
  },
  {
    "id": "ms721_q6",
    "text": "Quais são os requisitos técnicos mínimos para que um SBC seja usado com Direct Routing no Microsoft Teams?",
    "options": [
      "Suportar protocolo H.323 e SIP com codecs G.711 e G.729 obrigatoriamente habilitados",
      "Ser um dispositivo físico Cisco ou AudioCodes com firmware mínimo 8.0 e IP estático público",
      "Estar na lista de SBCs certificados Microsoft, ter FQDN público com certificado TLS válido, suportar SIP TLS na porta 5061 e SRTP para mídia, e ter conectividade com os IPs do Microsoft 365",
      "Estar hospedado no Azure com IP estático, porta 443 aberta e certificado autoassinado válido por 2 anos"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Direct Routing — SBC (Nível: intermediário).",
      "papoReto": "Direct Routing = você gerencia SBC certificado Microsoft, máxima flexibilidade e controle troncos SIP",
      "respostaCerta": "Estar na lista de SBCs certificados Microsoft, ter FQDN público com certificado TLS válido, suportar SIP TLS na porta 5061 e SRTP para mídia, e ter conectividade com os IPs do Microsoft 365 — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Direct Routing = seu SBC, seu controle, máxima complexidade",
      "cascasDeBanana": [
        "H.323 is a legacy protocol — Teams Phone requires SIP TLS for Direct Routing; H.323 cannot integrate with modern Teams phone infrastructure",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "Self-signed certificates don't pass Teams validation — Direct Routing requires certificates from trusted Certificate Authorities with proper FQDN validation"
      ],
      "dicaOuro": "SBCs certificados: AudioCodes, Ribbon, Mediant, Acme/Ixia — verificar compatibilidade Microsoft"
    }
  },
  {
    "id": "ms721_q7",
    "text": "Qual tipo de certificado TLS é necessário para o SBC utilizado em Direct Routing no Microsoft Teams?",
    "options": [
      "Certificado público emitido por uma Autoridade Certificadora (CA) confiável, com o FQDN do SBC no campo Subject Name ou Subject Alternative Name",
      "Certificado autoassinado gerado pelo próprio SBC com validade mínima de 2 anos",
      "Certificado wildcard emitido pelo Azure Key Vault associado ao tenant Microsoft 365",
      "Certificado PKI interno da organização desde que o root CA esteja publicado no DNS público"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Direct Routing — Certificados SBC (Nível: intermediário).",
      "papoReto": "Direct Routing = você gerencia SBC certificado Microsoft, máxima flexibilidade e controle troncos SIP",
      "respostaCerta": "Certificado público emitido por uma Autoridade Certificadora (CA) confiável, com o FQDN do SBC no campo Subject Name ou Subject Alternative Name — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Direct Routing = seu SBC, seu controle, máxima complexidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "SBCs certificados: AudioCodes, Ribbon, Mediant, Acme/Ixia — verificar compatibilidade Microsoft"
    }
  },
  {
    "id": "ms721_q8",
    "text": "Qual é a sequência correta de cmdlets PowerShell para configurar o Direct Routing básico no Microsoft Teams, registrando o SBC e criando uma rota de voz?",
    "options": [
      "1) New-CsOnlinePSTNGateway (registrar SBC); 2) New-CsOnlineVoiceRoutingPolicy (criar política); 3) New-CsOnlinePSTNUsage (criar uso PSTN); 4) New-CsOnlineVoiceRoute (criar rota); 5) Grant-CsOnlineVoiceRoutingPolicy (atribuir ao usuário)",
      "1) Set-CsOnlinePSTNGateway; 2) New-CsOnlineVoiceRoute; 3) Set-CsUser -VoicePolicy; 4) Sync-CsOnlineApplicationInstance",
      "1) New-CsSipTrunk; 2) New-CsVoiceNormalizationRule; 3) Set-CsDialPlan; 4) Grant-CsDialPlan",
      "1) Add-CsDirectRoutingGateway; 2) Set-CsVoicePolicy; 3) New-CsVoiceRoute; 4) Grant-CsVoicePolicy"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Direct Routing — Configuração PowerShell (Nível: intermediário).",
      "papoReto": "Direct Routing = você gerencia SBC certificado Microsoft, máxima flexibilidade e controle troncos SIP",
      "respostaCerta": "1) New-CsOnlinePSTNGateway (registrar SBC); 2) New-CsOnlineVoiceRoutingPolicy (criar política); 3) New-CsOnlinePSTNUsage (criar uso PSTN); 4) New-CsOnlineVoiceRoute (criar rota); 5) Grant-CsOnlineVoiceRoutingPolicy (atribuir ao usuário) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Direct Routing = seu SBC, seu controle, máxima complexidade",
      "cascasDeBanana": [
        "Set-CsOnlinePSTNGateway is used to update existing gateways, not register new ones — New-CsOnlinePSTNGateway is required for initial SBC registration in Direct Routing",
        "New-CsSipTrunk is a Skype for Business Online cmdlet, not Teams — Teams uses New-CsOnlinePSTNGateway for Direct Routing SBC registration",
        "Add-CsDirectRoutingGateway does not exist in Teams Online cmdlets — the correct cmdlet is New-CsOnlinePSTNGateway for SBC registration"
      ],
      "dicaOuro": "SBCs certificados: AudioCodes, Ribbon, Mediant, Acme/Ixia — verificar compatibilidade Microsoft"
    }
  },
  {
    "id": "ms721_q9",
    "text": "Onde um engenheiro pode monitorar o status da conexão SIP entre o SBC e o Microsoft Teams Phone no Direct Routing?",
    "options": [
      "Azure Monitor com workspace Log Analytics configurado para capturar eventos SIP do Direct Routing",
      "Microsoft Sentinel com conector de dados do Teams Phone para monitoramento SIP em tempo real",
      "Health Dashboard for Direct Routing no Teams Admin Center — exibe status do SBC, latência média, erros SIP e histórico de conectividade",
      "Call Quality Dashboard (CQD) com filtro de chamadas PSTN via Direct Routing"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Direct Routing — Health Dashboard (Nível: intermediário).",
      "papoReto": "Direct Routing = você gerencia SBC certificado Microsoft, máxima flexibilidade e controle troncos SIP",
      "respostaCerta": "Health Dashboard for Direct Routing no Teams Admin Center — exibe status do SBC, latência média, erros SIP e histórico de conectividade — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Direct Routing = seu SBC, seu controle, máxima complexidade",
      "cascasDeBanana": [
        "Azure Monitor with Log Analytics is for general Azure infrastructure monitoring, not Teams Phone health — it doesn't display SBC connection status or SIP errors",
        "Microsoft Sentinel is a security/SIEM tool, not a phone system monitoring dashboard — it's not designed for tracking SBC connectivity or voice quality",
        "Call Quality Dashboard shows user-side call quality metrics (jitter, packet loss, latency), not SBC connection status — use Health Dashboard for Direct Routing instead"
      ],
      "dicaOuro": "SBCs certificados: AudioCodes, Ribbon, Mediant, Acme/Ixia — verificar compatibilidade Microsoft"
    }
  },
  {
    "id": "ms721_q10",
    "text": "Qual é a função de um Dial Plan no Microsoft Teams Phone e como ele é aplicado aos usuários?",
    "options": [
      "Um Dial Plan especifica os destinos PSTN permitidos e bloqueados para cada usuário ou grupo de usuários",
      "Um Dial Plan define quais gateways SBC o usuário pode usar para chamadas PSTN de acordo com sua localização",
      "Um Dial Plan configura o correio de voz e saudações personalizadas por usuário no Teams Phone",
      "Um Dial Plan contém regras de normalização que convertem números discados em formatos E.164; é atribuído a usuários via política de dial plan (Grant-CsDialPlan) ou herdado do dial plan do serviço/tenant"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Dial Plans (Nível: intermediário).",
      "papoReto": "E.164 é formato internacional obrigatório (+55 11 98765-4321), máscara chamada mascara origem, portabilidade numérica via LOA",
      "respostaCerta": "Um Dial Plan contém regras de normalização que convertem números discados em formatos E.164; é atribuído a usuários via política de dial plan (Grant-CsDialPlan) ou herdado do dial plan do serviço/tenant — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "E.164 = +55 11 números, obrigatório PSTN; usuário vs serviço — impacto aplicabilidade",
      "cascasDeBanana": [
        "Dial Plan does not specify permitted PSTN destinations or assign gateways — it contains number normalization rules; routing is controlled by voice routes and PSTN usages",
        "Dial Plan does not specify permitted PSTN destinations or assign gateways — it contains number normalization rules; routing is controlled by voice routes and PSTN usages",
        "Dial Plan does not configure voicemail or greetings — those are handled by auto-attendants and call queues; Dial Plan is exclusively for number normalization"
      ],
      "dicaOuro": "Portabilidade exige LOA, conta faturamento, números E.164, data desejada"
    }
  },
  {
    "id": "ms721_q11",
    "text": "Um usuário no Brasil discada \"0800 123 4567\" e a chamada falha porque o sistema não reconhece o formato. Qual regra de normalização deve ser criada no Dial Plan?",
    "options": [
      "Regra que converte números iniciados com \"0800\" para o formato E.164 com código do país Brasil (+55), ex.: ^(0800\\d{7})$ → +55$1",
      "Regra que remove o prefixo \"0\" e adiciona o DDI internacional diretamente sem código de país",
      "Configuração de trunk SBC para aceitar números não normalizados em formato local",
      "Criação de rota de voz específica para números 0800 sem necessidade de normalização E.164"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Normalização de Números (Nível: intermediário).",
      "papoReto": "E.164 é formato internacional obrigatório (+55 11 98765-4321), máscara chamada mascara origem, portabilidade numérica via LOA",
      "respostaCerta": "Regra que converte números iniciados com \"0800\" para o formato E.164 com código do país Brasil (+55), ex.: ^(0800\\d{7})$ → +55$1 — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "E.164 = +55 11 números, obrigatório PSTN; usuário vs serviço — impacto aplicabilidade",
      "cascasDeBanana": [
        "Removing the \"0\" prefix alone is incomplete — normalization must result in full E.164 format including country code (+55 for Brazil); partial normalization breaks PSTN routing",
        "SBC trunks cannot accept non-normalized numbers — PSTN routing requires E.164 format; Dial Plan normalization rules must convert all local formats to +E.164",
        "Voice routes alone cannot handle unnormalized numbers — normalization to E.164 is mandatory before any routing decision; Dial Plan normalization rules are required"
      ],
      "dicaOuro": "Portabilidade exige LOA, conta faturamento, números E.164, data desejada"
    }
  },
  {
    "id": "ms721_q12",
    "text": "Em uma implementação de Direct Routing, qual objeto define quais rotas de voz estão disponíveis para um usuário e é atribuído diretamente ao usuário?",
    "options": [
      "Online Voice Routing Policy (Política de Roteamento de Voz Online) — agrupa PSTN Usages e é atribuída via Grant-CsOnlineVoiceRoutingPolicy",
      "PSTN Usage Record — objeto de uso que é atribuído diretamente a usuários individuais",
      "Online Voice Route — define o gateway SBC e padrão de número, atribuído diretamente ao usuário",
      "Dial Plan — contém rotas de voz e é atribuído via Grant-CsDialPlan ao usuário"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Políticas de Roteamento de Voz (Nível: intermediário).",
      "papoReto": "Direct Routing = você gerencia SBC certificado Microsoft, máxima flexibilidade e controle troncos SIP",
      "respostaCerta": "Online Voice Routing Policy (Política de Roteamento de Voz Online) — agrupa PSTN Usages e é atribuída via Grant-CsOnlineVoiceRoutingPolicy — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Direct Routing = seu SBC, seu controle, máxima complexidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "SBCs certificados: AudioCodes, Ribbon, Mediant, Acme/Ixia — verificar compatibilidade Microsoft"
    }
  },
  {
    "id": "ms721_q13",
    "text": "Em que situação o Location-Based Routing (LBR) é obrigatório em uma implementação de Direct Routing?",
    "options": [
      "Em qualquer implementação com mais de 5 gateways SBC para garantir roteamento eficiente por proximidade",
      "Sempre que o Operator Connect é usado em conjunto com Direct Routing no mesmo tenant",
      "Em países onde regulamentações de telecomunicações proíbem o bypass de tarifas PSTN locais — o LBR garante que chamadas usem o gateway local baseado na localização de rede do usuário",
      "Apenas em organizações com usuários em mais de 10 países diferentes com regulamentações distintas"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Location-Based Routing (LBR) (Nível: avançado).",
      "papoReto": "Direct Routing = você gerencia SBC certificado Microsoft, máxima flexibilidade e controle troncos SIP",
      "respostaCerta": "Em países onde regulamentações de telecomunicações proíbem o bypass de tarifas PSTN locais — o LBR garante que chamadas usem o gateway local baseado na localização de rede do usuário — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Direct Routing = seu SBC, seu controle, máxima complexidade",
      "cascasDeBanana": [
        "Location-Based Routing (LBR) is not required based on gateway quantity — it's mandated only by local regulations that prohibit PSTN tariff bypass",
        "Operator Connect and Direct Routing can coexist without requiring LBR — LBR is only mandatory when regulations prohibit tariff bypass in that specific region",
        "Location-Based Routing is not required based on the number of countries or regional complexity — it's only needed when regulations in that specific region mandate it"
      ],
      "dicaOuro": "SBCs certificados: AudioCodes, Ribbon, Mediant, Acme/Ixia — verificar compatibilidade Microsoft"
    }
  },
  {
    "id": "ms721_q14",
    "text": "Quais são os componentes que precisam ser configurados para habilitar o Location-Based Routing no Microsoft Teams Phone?",
    "options": [
      "Instalar agente de detecção de localização no dispositivo do usuário com sincronização ao Azure AD",
      "Configurar QoS por sub-rede e criar regras de firewall separando tráfego por localização geográfica",
      "Sites de rede com sub-redes mapeadas, política de roteamento baseado em localização habilitada no gateway SBC (New-CsOnlinePSTNGateway -LocationBasedRouting $true) e política LBR atribuída aos usuários",
      "Apenas habilitar a opção LBR no Teams Admin Center e mapear endereços IP dos usuários por região"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Location-Based Routing — Configuração (Nível: avançado).",
      "papoReto": "Teams Phone é PBX gerenciado Microsoft na nuvem, core de telefonia em Teams com transferência, correio voz, auto-atendentes, filas",
      "respostaCerta": "Sites de rede com sub-redes mapeadas, política de roteamento baseado em localização habilitada no gateway SBC (New-CsOnlinePSTNGateway -LocationBasedRouting $true) e política LBR atribuída aos usuários — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Phone = PBX nuvem Microsoft, nome antigo Phone System, mesma coisa",
      "cascasDeBanana": [
        "Location-Based Routing does not require installing client agents — it uses network site configurations and subnet mappings in Teams admin center",
        "QoS and firewall rules are network policies separate from LBR — LBR requires network sites, subnet mappings, and SBC-level policy enablement",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Phone System = Teams Phone (rebrand 2019) — mesma solução, apenas nome novo"
    }
  },
  {
    "id": "ms721_q15",
    "text": "O que é o Operator Connect Mobile e qual problema ele resolve para usuários corporativos?",
    "options": [
      "É um serviço de portabilidade numérica que migra números de celular para o Microsoft Calling Plan",
      "Permite que usuários façam chamadas PSTN pelo Teams usando dados móveis sem VPN corporativa",
      "É um aplicativo Teams otimizado para dispositivos móveis com suporte a chamadas PSTN sem Wi-Fi",
      "Permite que o número de celular SIM da operadora parceira seja usado como número corporativo Teams, unificando chamadas móveis e do Teams em uma única identidade — o celular físico torna-se um endpoint Teams nativo"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Operator Connect Mobile (Nível: avançado).",
      "papoReto": "Operator Connect = operadora parceira gerencia PSTN + SBC, reduz complexidade vs Direct Routing",
      "respostaCerta": "Permite que o número de celular SIM da operadora parceira seja usado como número corporativo Teams, unificando chamadas móveis e do Teams em uma única identidade — o celular físico torna-se um endpoint Teams nativo — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Operator Connect = operadora terceira + SBC dela, meio termo entre Calling Plan e Direct Routing",
      "cascasDeBanana": [
        "Operator Connect Mobile is not a number portability service — it allows a mobile SIM number to function as a Teams Phone number by integrating the physical phone",
        "Operator Connect Mobile is more than just enabling PSTN calls over mobile data — it makes the physical SIM a native Teams endpoint managed by the operator",
        "Operator Connect Mobile is not a Teams app — it's a service integration where the operator manages the SIM and makes it a Teams Phone endpoint"
      ],
      "dicaOuro": "Operadora parceira gerencia PSTN e SBC por você — você configura via Teams Admin Center"
    }
  },
  {
    "id": "ms721_q16",
    "text": "Um Atendedor Automático do Teams precisa redirecionar chamadas para destinos diferentes com base no idioma selecionado pelo chamador (Português ou Inglês). Como isso deve ser configurado?",
    "options": [
      "Configurar um único AA com reconhecimento de voz multilíngue e roteamento automático por idioma detectado",
      "Criar políticas de roteamento de voz diferentes por idioma atribuídas à conta de recurso do AA",
      "Criar dois Atendedores Automáticos aninhados — o principal oferece opção de idioma e redireciona para AAs secundários configurados com menus e saudações no respectivo idioma",
      "Usar uma Fila de Chamada com agentes bilíngues e roteamento por habilidade de idioma configurado no SBC"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Atendedor Automático — Configuração Avançada (Nível: intermediário).",
      "papoReto": "Teams Phone é PBX gerenciado Microsoft na nuvem, core de telefonia em Teams com transferência, correio voz, auto-atendentes, filas",
      "respostaCerta": "Criar dois Atendedores Automáticos aninhados — o principal oferece opção de idioma e redireciona para AAs secundários configurados com menus e saudações no respectivo idioma — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Phone = PBX nuvem Microsoft, nome antigo Phone System, mesma coisa",
      "cascasDeBanana": [
        "Teams auto-attendants don't have built-in multi-language voice recognition — you must create separate AAs for each language and offer language selection in the main AA",
        "Voice routing policies control PSTN trunk selection by call pattern, not language — language-based routing requires nested auto-attendants with language menus",
        "Call queues with bilingual agents don't provide language selection at entry point — auto-attendants must first present language options before transferring to language-specific queues"
      ],
      "dicaOuro": "Phone System = Teams Phone (rebrand 2019) — mesma solução, apenas nome novo"
    }
  },
  {
    "id": "ms721_q17",
    "text": "Quais são os quatro métodos de roteamento de chamadas disponíveis em uma Fila de Chamada do Microsoft Teams?",
    "options": [
      "Simultâneo, Serial, Baseado em custo e Baseado em localização geográfica",
      "Aleatório, Prioritário, Sequencial e Baseado em habilidades (Skill-based routing)",
      "Atendente (Attendant — toca em todos simultaneamente), Serial (em sequência), Round Robin (rotativo) e Ociosidade mais longa (Longest Idle)",
      "FIFO, LIFO, Round Robin e Baseado em disponibilidade de presença"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Fila de Chamada — Métodos de Roteamento (Nível: intermediário).",
      "papoReto": "Fila = buffer chamadas entrantes, música espera, presença agentes automática, roteamento (FIFO/Longest Idle), relatórios perdidas",
      "respostaCerta": "Atendente (Attendant — toca em todos simultaneamente), Serial (em sequência), Round Robin (rotativo) e Ociosidade mais longa (Longest Idle) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Fila = múltiplos agentes, FIFO + Longest Idle, presença automática, timeout/redirecionamento",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Longest Idle distribui para agente menos ocupado — combinar FIFO + Longest Idle reduz espera"
    }
  },
  {
    "id": "ms721_q18",
    "text": "Um administrador configura uma Fila de Chamada com roteamento baseado em presença (Presence-based routing). O que acontece quando todos os agentes estão com status \"Ocupado\" no Teams?",
    "options": [
      "As chamadas são automaticamente distribuídas mesmo para agentes ocupados, que recebem notificação de chamada em espera",
      "O sistema alterna automaticamente para roteamento Round Robin desconsiderando o status de presença",
      "O roteamento baseado em presença ignora agentes com status Ocupado, Não Perturbe ou Em reunião; chamadas aguardam na fila ou são redirecionadas conforme o tempo limite configurado",
      "Todos os agentes recebem alerta simultâneo de chamada aguardando independentemente do status de presença"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Fila de Chamada — Roteamento por Presença (Nível: intermediário).",
      "papoReto": "Fila = buffer chamadas entrantes, música espera, presença agentes automática, roteamento (FIFO/Longest Idle), relatórios perdidas",
      "respostaCerta": "O roteamento baseado em presença ignora agentes com status Ocupado, Não Perturbe ou Em reunião; chamadas aguardam na fila ou são redirecionadas conforme o tempo limite configurado — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Fila = múltiplos agentes, FIFO + Longest Idle, presença automática, timeout/redirecionamento",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Longest Idle distribui para agente menos ocupado — combinar FIFO + Longest Idle reduz espera"
    }
  },
  {
    "id": "ms721_q19",
    "text": "Qual serviço Microsoft fornece o correio de voz para usuários do Teams Phone e onde as mensagens de voz são armazenadas?",
    "options": [
      "Microsoft Stream Voicemail — grava mensagens como vídeo/áudio no Stream com notificação via Teams",
      "Exchange Online Unified Messaging — sistema legado mantido para compatibilidade com Teams Phone",
      "Cloud Voicemail (Correio de Voz em Nuvem) — mensagens são transcritas e armazenadas na caixa de correio Exchange Online do usuário, acessíveis pelo Teams e Outlook",
      "Azure Communication Services Voicemail — armazena mensagens no Azure Blob Storage com link de acesso pelo Teams"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Correio de Voz em Nuvem (Nível: iniciante).",
      "papoReto": "E.164 é formato internacional obrigatório (+55 11 98765-4321), máscara chamada mascara origem, portabilidade numérica via LOA",
      "respostaCerta": "Cloud Voicemail (Correio de Voz em Nuvem) — mensagens são transcritas e armazenadas na caixa de correio Exchange Online do usuário, acessíveis pelo Teams e Outlook — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "E.164 = +55 11 números, obrigatório PSTN; usuário vs serviço — impacto aplicabilidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Portabilidade exige LOA, conta faturamento, números E.164, data desejada"
    }
  },
  {
    "id": "ms721_q20",
    "text": "Um administrador deseja desativar a transcrição automática de mensagens de correio de voz para um grupo específico de usuários por razões de conformidade. Qual cmdlet PowerShell deve ser utilizado?",
    "options": [
      "Set-CsExchangeUnifiedMessagingConnectivity -TranscriptionEnabled $false por usuário",
      "New-CsVoicemailCompliancePolicy -BlockTranscription atribuído via política de conformidade",
      "Set-CsCloudVoicemailPolicy -DisableTranscription $true aplicado globalmente ao tenant",
      "Set-CsOnlineVoicemailPolicy com o parâmetro -EnableTranscription $false atribuído via Grant-CsOnlineVoicemailPolicy ao grupo"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Correio de Voz — Configurações (Nível: intermediário).",
      "papoReto": "Direct Routing = você gerencia SBC certificado Microsoft, máxima flexibilidade e controle troncos SIP",
      "respostaCerta": "Set-CsOnlineVoicemailPolicy com o parâmetro -EnableTranscription $false atribuído via Grant-CsOnlineVoicemailPolicy ao grupo — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Direct Routing = seu SBC, seu controle, máxima complexidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "SBCs certificados: AudioCodes, Ribbon, Mediant, Acme/Ixia — verificar compatibilidade Microsoft"
    }
  },
  {
    "id": "ms721_q21",
    "text": "Qual é a diferença entre números de telefone \"de usuário\" e números \"de serviço\" no contexto do Teams Phone?",
    "options": [
      "Números de usuário são atribuídos a pessoas individuais para chamadas 1:1; números de serviço suportam alto volume de chamadas simultâneas e são usados em Atendedores Automáticos, Filas de Chamada e pontes de Audioconferência",
      "Números de usuário funcionam apenas com Calling Plan; números de serviço são exclusivos do Direct Routing",
      "Números de serviço são sempre gratuitos (toll-free); números de usuário sempre têm custo por minuto de chamada",
      "Números de serviço requerem licença E5; números de usuário funcionam com qualquer licença Teams Phone"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Números de Telefone — Tipos (Nível: iniciante).",
      "papoReto": "E.164 é formato internacional obrigatório (+55 11 98765-4321), máscara chamada mascara origem, portabilidade numérica via LOA",
      "respostaCerta": "Números de usuário são atribuídos a pessoas individuais para chamadas 1:1; números de serviço suportam alto volume de chamadas simultâneas e são usados em Atendedores Automáticos, Filas de Chamada e pontes de Audioconferência — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "E.164 = +55 11 números, obrigatório PSTN; usuário vs serviço — impacto aplicabilidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Portabilidade exige LOA, conta faturamento, números E.164, data desejada"
    }
  },
  {
    "id": "ms721_q22",
    "text": "Uma empresa migra para o Microsoft Teams Phone e deseja manter seus números de telefone existentes da operadora atual. Quais informações são tipicamente necessárias para iniciar o processo de portabilidade no Teams Admin Center?",
    "options": [
      "Apenas o contrato de prestação de serviços com a operadora atual e os números em formato local",
      "Carta de autorização (LOA) assinada, conta de faturamento da operadora atual, números a portar em formato E.164 e data de portabilidade desejada",
      "Autorização do Azure AD Global Admin e confirmação da operadora via portal Microsoft Partner Center",
      "Certificado de propriedade dos números emitido pela ANATEL e comprovante de CNPJ da empresa"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Portabilidade Numérica (Nível: intermediário).",
      "papoReto": "E.164 é formato internacional obrigatório (+55 11 98765-4321), máscara chamada mascara origem, portabilidade numérica via LOA",
      "respostaCerta": "Carta de autorização (LOA) assinada, conta de faturamento da operadora atual, números a portar em formato E.164 e data de portabilidade desejada — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "E.164 = +55 11 números, obrigatório PSTN; usuário vs serviço — impacto aplicabilidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Portabilidade exige LOA, conta faturamento, números E.164, data desejada"
    }
  },
  {
    "id": "ms721_q23",
    "text": "Quais são os principais tipos de Planos de Chamada (Calling Plans) disponíveis no Microsoft Teams Phone?",
    "options": [
      "Plano Local, Plano Nacional e Plano Global — baseados na cobertura geográfica do número atribuído",
      "Plano de Voz, Plano de Dados e Plano Combinado — diferenciados pelo tipo de mídia suportada",
      "Plano Doméstico (Domestic), Plano Internacional (International) e Plano Pay-as-you-go — cada um com diferentes coberturas e modelos de cobrança",
      "Plano Básico, Plano Profissional e Plano Enterprise — diferenciados por número de minutos mensais incluídos"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Calling Plan — Tipos (Nível: iniciante).",
      "papoReto": "Calling Plan = Microsoft é operadora PSTN, cobrança por minuto/planos, zero infraestrutura SBC/SIP sua",
      "respostaCerta": "Plano Doméstico (Domestic), Plano Internacional (International) e Plano Pay-as-you-go — cada um com diferentes coberturas e modelos de cobrança — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Calling Plan = Microsoft cuida de tudo, você só paga e disca",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Disponibilidade por país varia — verificar suporte regional Microsoft antes contratação"
    }
  },
  {
    "id": "ms721_q24",
    "text": "Uma organização usa Calling Plan e Audioconferência no Teams. Em quais situações os Créditos de Comunicação são consumidos?",
    "options": [
      "Apenas chamadas internacionais para países fora do continente americano e europeu",
      "Todas as chamadas PSTN saintes independentemente do destino, calculadas por segundo de uso",
      "Chamadas de correio de voz transcritas automaticamente e gravações de reuniões armazenadas no Stream",
      "Chamadas para destinos não incluídos no plano doméstico, números gratuitos (toll-free) de entrada para reuniões de audioconferência e chamadas que excedem os minutos mensais do plano"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Créditos de Comunicação (Nível: intermediário).",
      "papoReto": "Calling Plan = Microsoft é operadora PSTN, cobrança por minuto/planos, zero infraestrutura SBC/SIP sua",
      "respostaCerta": "Chamadas para destinos não incluídos no plano doméstico, números gratuitos (toll-free) de entrada para reuniões de audioconferência e chamadas que excedem os minutos mensais do plano — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Calling Plan = Microsoft cuida de tudo, você só paga e disca",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Disponibilidade por país varia — verificar suporte regional Microsoft antes contratação"
    }
  },
  {
    "id": "ms721_q25",
    "text": "Quais são os principais parâmetros de rede que impactam a qualidade de chamadas de voz no Microsoft Teams Phone?",
    "options": [
      "Latência (RTT), jitter (variação de latência), perda de pacotes e largura de banda disponível — todos críticos para qualidade de áudio em tempo real",
      "Throughput total da WAN, velocidade de upload/download e configuração de firewall de próxima geração",
      "MTU dos pacotes, configuração de VLAN e segmentação de rede por departamento",
      "Número de usuários simultâneos, capacidade do servidor DNS e latência de resolução de nomes"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Requisitos de Rede para Teams Phone (Nível: iniciante).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Latência (RTT), jitter (variação de latência), perda de pacotes e largura de banda disponível — todos críticos para qualidade de áudio em tempo real — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q26",
    "text": "Quais são os valores máximos recomendados pela Microsoft para latência (RTT), jitter e perda de pacotes em chamadas de voz do Teams para garantir boa qualidade?",
    "options": [
      "Latência RTT < 50ms, jitter < 10ms e perda de pacotes < 0.1% — apenas para chamadas de vídeo HD",
      "Latência RTT < 100ms, jitter < 30ms e perda de pacotes < 1% — valores que garantem qualidade de voz aceitável para comunicações em tempo real",
      "Latência RTT < 500ms, jitter < 100ms e perda de pacotes < 5% — limites máximos absolutos",
      "Latência RTT < 200ms, jitter < 50ms e perda de pacotes < 2% — padrão para todas as mídias Teams"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Limites de Qualidade de Rede (Nível: intermediário).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Latência RTT < 100ms, jitter < 30ms e perda de pacotes < 1% — valores que garantem qualidade de voz aceitável para comunicações em tempo real — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q27",
    "text": "Um engenheiro implementa QoS para priorizar tráfego de voz do Teams na rede corporativa. Quais são as faixas de portas recomendadas pela Microsoft para áudio, vídeo e compartilhamento de tela respectivamente?",
    "options": [
      "Áudio: 50000–50019 TCP; Vídeo: 50020–50039 TCP; Compartilhamento: 50040–50059 TCP",
      "Áudio: 3478–3481 UDP; Vídeo: 3478–3481 UDP; Compartilhamento: 443 TCP",
      "Áudio: 50000–50019 UDP; Vídeo: 50020–50039 UDP; Compartilhamento de aplicativo/tela: 50040–50059 UDP",
      "Áudio: 1024–2000 UDP; Vídeo: 2001–3000 UDP; Compartilhamento: 3001–4000 UDP"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: QoS — Implementação (Nível: avançado).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Áudio: 50000–50019 UDP; Vídeo: 50020–50039 UDP; Compartilhamento de aplicativo/tela: 50040–50059 UDP — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q28",
    "text": "Quais valores DSCP a Microsoft recomenda para marcar tráfego de áudio, vídeo e compartilhamento de aplicativos do Teams para implementação de QoS?",
    "options": [
      "Áudio: AF41 (DSCP 34); Vídeo: AF21 (DSCP 18); Compartilhamento: CS1 (DSCP 8)",
      "Áudio: BE (DSCP 0); Vídeo: EF (DSCP 46); Compartilhamento: AF11 (DSCP 10)",
      "Áudio: EF (DSCP 46); Vídeo: AF41 (DSCP 34); Compartilhamento de aplicativos: AF21 (DSCP 18)",
      "Áudio: CS7 (DSCP 56); Vídeo: CS5 (DSCP 40); Compartilhamento: CS3 (DSCP 24)"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: QoS — Valores DSCP (Nível: avançado).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Áudio: EF (DSCP 46); Vídeo: AF41 (DSCP 34); Compartilhamento de aplicativos: AF21 (DSCP 18) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q29",
    "text": "Um engenheiro usa o Microsoft Teams Network Planner para dimensionar largura de banda. Quais informações de entrada são necessárias para gerar o relatório de largura de banda?",
    "options": [
      "Número de chamadas PSTN esperadas, capacidade do SBC e quantidade de troncos SIP contratados",
      "Versão do cliente Teams, sistema operacional dos dispositivos e resolução de câmera utilizada",
      "Endereços IP das sub-redes, configuração de VLAN por departamento e modelo de switches gerenciados",
      "Número de usuários por localização (site), personas de uso (Office Worker, Remote Worker, Teams Rooms) e capacidade de WAN existente por site"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Network Planner (Nível: intermediário).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Número de usuários por localização (site), personas de uso (Office Worker, Remote Worker, Teams Rooms) e capacidade de WAN existente por site — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q30",
    "text": "Qual é o objetivo principal da Microsoft Teams Network Assessment Tool e quando ela deve ser executada?",
    "options": [
      "Monitorar continuamente a qualidade de chamadas ativas em toda a organização em tempo real",
      "Avaliar a qualidade da conexão de rede de uma localização específica com os servidores Microsoft 365, medindo latência, jitter e perda de pacotes — deve ser executada antes da implantação e para diagnóstico de problemas",
      "Gerar relatório de capacidade de largura de banda necessária baseado no número de usuários cadastrados",
      "Configurar automaticamente QoS nos switches e roteadores da rede corporativa para tráfego Teams"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Teams Network Assessment Tool (Nível: intermediário).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Avaliar a qualidade da conexão de rede de uma localização específica com os servidores Microsoft 365, medindo latência, jitter e perda de pacotes — deve ser executada antes da implantação e para diagnóstico de problemas — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q31",
    "text": "Uma organização usa VPN para todo o tráfego corporativo e usuários remotos reclamam de baixa qualidade em chamadas Teams. Qual configuração de VPN resolve esse problema de forma mais eficaz?",
    "options": [
      "Instalar o cliente Teams em modo Citrix VDI com otimização de mídia habilitada na VPN",
      "Aumentar a largura de banda do concentrador VPN para suportar tráfego adicional de mídia Teams",
      "Configurar QoS no concentrador VPN para priorizar tráfego Teams sobre outros fluxos corporativos",
      "Configurar split tunneling na VPN para que tráfego de mídia UDP do Teams (portas 50000–50059) seja enviado diretamente à internet, sem passar pelo tunnel VPN corporativo"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Rotas de Rede e Split Tunneling (Nível: avançado).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Configurar split tunneling na VPN para que tráfego de mídia UDP do Teams (portas 50000–50059) seja enviado diretamente à internet, sem passar pelo tunnel VPN corporativo — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q32",
    "text": "Uma organização considera usar Azure ExpressRoute para melhorar a qualidade das chamadas Teams. Qual é a posição oficial da Microsoft sobre o uso de ExpressRoute especificamente para Teams Phone?",
    "options": [
      "ExpressRoute é recomendado apenas para videoconferências HD; chamadas de voz funcionam adequadamente pela internet",
      "ExpressRoute é obrigatório para Direct Routing em organizações com mais de 1.000 usuários de voz",
      "ExpressRoute é a única forma de garantir SLA de qualidade de chamadas para Teams Phone em ambientes corporativos",
      "A Microsoft não recomenda mais o ExpressRoute como solução primária para Teams; a abordagem recomendada é otimizar a saída de internet local com split tunneling e QoS, pois a maioria do tráfego Teams já usa anycast da Microsoft"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: ExpressRoute para Teams (Nível: avançado).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "A Microsoft não recomenda mais o ExpressRoute como solução primária para Teams; a abordagem recomendada é otimizar a saída de internet local com split tunneling e QoS, pois a maioria do tráfego Teams já usa anycast da Microsoft — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q33",
    "text": "Quais são as principais categorias de dispositivos certificados para Microsoft Teams disponíveis no catálogo oficial de dispositivos Microsoft?",
    "options": [
      "Apenas telefones IP e headsets; outros dispositivos não possuem certificação específica para Teams",
      "Telefones IP Teams, Teams Rooms (Windows e Android), Teams Panels, Headsets certificados, Speakerphones, Câmeras e Displays Teams",
      "Dispositivos Microsoft Surface exclusivamente, com linha completa certificada para Teams nativamente",
      "Teams Rooms, Teams Phones e Teams Hubs — três categorias principais sem subdivisões adicionais"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Categorias de Dispositivos Certificados (Nível: iniciante).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Telefones IP Teams, Teams Rooms (Windows e Android), Teams Panels, Headsets certificados, Speakerphones, Câmeras e Displays Teams — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q34",
    "text": "O Microsoft Teams Rooms (MTR) está disponível em quais plataformas de sistema operacional?",
    "options": [
      "Apenas Windows — dispositivos Android não possuem certificação Teams Rooms oficial",
      "Windows (MTR on Windows) e Android (MTR on Android) — cada plataforma com características, licenciamento e capacidades ligeiramente diferentes",
      "Windows e Linux — com imagem customizada Microsoft para dispositivos de sala baseados em Ubuntu",
      "Windows, Android e iOS — com suporte a iPads como controlador de sala certificado"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Microsoft Teams Rooms — Plataformas (Nível: iniciante).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Windows (MTR on Windows) e Android (MTR on Android) — cada plataforma com características, licenciamento e capacidades ligeiramente diferentes — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q35",
    "text": "Quais são as duas licenças disponíveis para dispositivos Microsoft Teams Rooms e qual é a principal diferença entre elas?",
    "options": [
      "Microsoft 365 Rooms E3 (sem IA) e Microsoft 365 Rooms E5 (com Copilot e análise avançada)",
      "Teams Rooms Standard (reuniões básicas sem PSTN) e Teams Rooms Premium (com voz PSTN e gravação integrada)",
      "Teams Rooms Free (apenas áudio) e Teams Rooms Full (vídeo HD, compartilhamento e PSTN incluídos)",
      "Teams Rooms Basic (gratuita, funcionalidades essenciais de reunião, até 25 salas por tenant) e Teams Rooms Pro (paga, monitoramento avançado, IA de reunião, gerenciamento remoto e relatórios detalhados)"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: MTR — Licenciamento (Nível: intermediário).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Teams Rooms Basic (gratuita, funcionalidades essenciais de reunião, até 25 salas por tenant) e Teams Rooms Pro (paga, monitoramento avançado, IA de reunião, gerenciamento remoto e relatórios detalhados) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q36",
    "text": "Ao configurar um dispositivo Microsoft Teams Rooms, qual objeto deve ser criado no Microsoft 365 para que a sala apareça como recurso agendável em reuniões?",
    "options": [
      "Grupo de distribuição no Exchange Online com a sala como membro principal",
      "Conta de recurso de sala (Room Resource Account) no Microsoft 365 com licença Teams Rooms atribuída e caixa de correio de sala configurada no Exchange Online",
      "Conta de usuário padrão com nome da sala e licença Teams Essentials atribuída",
      "Conta de serviço Azure AD com função de Device Administrator e licença Teams Phone"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: MTR — Conta de Recurso (Nível: intermediário).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Conta de recurso de sala (Room Resource Account) no Microsoft 365 com licença Teams Rooms atribuída e caixa de correio de sala configurada no Exchange Online — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q37",
    "text": "Um Teams Panel é instalado na entrada de uma sala de reunião. Quais são suas funcionalidades principais?",
    "options": [
      "Gerenciar presença e status de disponibilidade dos participantes antes do início da reunião",
      "Exibir disponibilidade da sala em tempo real, reservar a sala ad-hoc diretamente no painel, mostrar reuniões agendadas e integrar com o calendário Exchange Online da conta de recurso da sala",
      "Funcionar como segundo monitor do sistema Teams Rooms com exibição de conteúdo compartilhado",
      "Controlar remotamente o sistema de áudio e vídeo da sala e iniciar reuniões Teams pelo painel"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Teams Panels (Nível: intermediário).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Exibir disponibilidade da sala em tempo real, reservar a sala ad-hoc diretamente no painel, mostrar reuniões agendadas e integrar com o calendário Exchange Online da conta de recurso da sala — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q38",
    "text": "Um telefone IP certificado para Teams pode operar em diferentes modos. Quais são os modos de operação disponíveis nesses dispositivos?",
    "options": [
      "Modo Teams (padrão — totalmente integrado ao Teams Phone), Modo SIP legado (para interoperabilidade com PBX existente) e Modo de Área Comum (Common Area Phone — sem conta de usuário individual)",
      "Modo Executivo, Modo Recepcionista e Modo Agente de Call Center — baseados na função do usuário",
      "Modo Wired, Modo Wi-Fi e Modo Bluetooth — baseados no tipo de conectividade física do dispositivo",
      "Modo Online, Modo Híbrido e Modo Offline — baseados na conectividade com o Microsoft 365"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Telefones IP Teams — Modos (Nível: intermediário).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Modo Teams (padrão — totalmente integrado ao Teams Phone), Modo SIP legado (para interoperabilidade com PBX existente) e Modo de Área Comum (Common Area Phone — sem conta de usuário individual) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q39",
    "text": "Uma empresa deseja instalar telefones Teams em áreas comuns (recepção, corredores) sem associá-los a usuários específicos. Qual licença e tipo de conta são necessários?",
    "options": [
      "Licença Teams Essentials com add-on de voz atribuída a conta compartilhada do departamento",
      "Licença Microsoft Teams Phone Common Area (licença dedicada para telefones de área comum) atribuída a uma conta de recurso de telefone de área comum sem usuário nomeado",
      "Licença Teams Rooms Basic atribuída a conta de sala com número de telefone de serviço",
      "Qualquer licença Microsoft 365 Business Basic com Teams Phone atribuída a conta genérica de departamento"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Telefones de Área Comum (Nível: intermediário).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Licença Microsoft Teams Phone Common Area (licença dedicada para telefones de área comum) atribuída a uma conta de recurso de telefone de área comum sem usuário nomeado — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q40",
    "text": "Um administrador precisa provisionar remotamente 50 novos telefones IP Teams sem visita física a cada dispositivo. Qual método de provisionamento a Microsoft recomenda para implantação em escala?",
    "options": [
      "Script PowerShell com Set-CsPhoneNumberAssignment executado em batch para todos os dispositivos",
      "Configuração manual via interface web de cada telefone acessando o endereço IP local do dispositivo",
      "Provisionamento remoto via Teams Admin Center usando o MAC address do dispositivo para pré-associar a uma conta de usuário, ou via código de verificação gerado no portal para o usuário final",
      "Implantação via Microsoft Intune com perfil MDM específico para cada modelo de telefone Teams"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Provisionamento Remoto de Dispositivos (Nível: intermediário).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Provisionamento remoto via Teams Admin Center usando o MAC address do dispositivo para pré-associar a uma conta de usuário, ou via código de verificação gerado no portal para o usuário final — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q41",
    "text": "Como o administrador pode gerenciar e automatizar atualizações de firmware de dispositivos Teams certificados (telefones IP, Teams Rooms) em escala?",
    "options": [
      "Via Azure Arc com extensão de gerenciamento de dispositivos Teams para aplicação de patches de firmware",
      "Via script PowerShell agendado no Azure Automation que verifica e aplica firmware mensalmente",
      "Via Teams Admin Center > Dispositivos — configurar regras de atualização automática por fase (fase piloto e fase ampla), definindo horários de manutenção e grupos de dispositivos",
      "Via Microsoft Intune com política de atualização de firmware para dispositivos Teams gerenciados por MDM"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Atualização de Firmware (Nível: intermediário).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Via Teams Admin Center > Dispositivos — configurar regras de atualização automática por fase (fase piloto e fase ampla), definindo horários de manutenção e grupos de dispositivos — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q42",
    "text": "Quais são as capacidades exclusivas do Microsoft Teams Rooms Pro Management Portal que não estão disponíveis no Teams Admin Center padrão?",
    "options": [
      "Integração com Microsoft Intune para conformidade de dispositivos e Microsoft Defender para segurança de sala",
      "Gerenciamento de licenças Teams Rooms, atribuição de contas de recurso e configuração de políticas de reunião",
      "Monitoramento proativo de saúde de salas com IA, detecção automática de incidentes, planos de atualização gerenciados, relatórios avançados de utilização de salas e suporte de especialistas Microsoft para resolução de problemas",
      "Visualização de qualidade de chamadas PSTN, relatórios de CQD e análise de Direct Routing por sala"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Teams Rooms Pro Management Portal (Nível: avançado).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Monitoramento proativo de saúde de salas com IA, detecção automática de incidentes, planos de atualização gerenciados, relatórios avançados de utilização de salas e suporte de especialistas Microsoft para resolução de problemas — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "Call Quality Dashboard shows user-side call quality metrics (jitter, packet loss, latency), not SBC connection status — use Health Dashboard for Direct Routing instead"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q43",
    "text": "Qual é o propósito principal do Call Quality Dashboard (CQD) no Microsoft Teams e quem pode acessá-lo?",
    "options": [
      "Gerar relatórios de faturamento de chamadas PSTN com custo por usuário e destino de chamada",
      "Fornecer visão agregada da qualidade de chamadas e reuniões em toda a organização com dados históricos e tendências; acessível a administradores Teams, Communications Administrators e usuários com função específica de CQD",
      "Rastrear atividade de usuários no Teams incluindo mensagens, arquivos e reuniões para fins de auditoria",
      "Monitorar chamadas individuais em tempo real com alertas instantâneos de degradação de qualidade"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: Call Quality Dashboard — Visão Geral (Nível: iniciante).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "Fornecer visão agregada da qualidade de chamadas e reuniões em toda a organização com dados históricos e tendências; acessível a administradores Teams, Communications Administrators e usuários com função específica de CQD — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q44",
    "text": "No Call Quality Dashboard, o que representa a métrica \"Poor Stream Rate\" (Taxa de Streams Ruins)?",
    "options": [
      "A taxa de chamadas onde o usuário explicitamente classificou a qualidade como ruim no feedback pós-chamada",
      "A porcentagem de streams de mídia (áudio/vídeo) classificados como ruins com base em limites de qualidade predefinidos (jitter > 30ms, perda de pacotes > 1% ou latência RTT > 500ms)",
      "O número absoluto de chamadas que foram encerradas prematuramente por problemas de conectividade",
      "A porcentagem de usuários com dispositivos de áudio não certificados para Teams em chamadas ruins"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: CQD — Métricas Principais (Nível: intermediário).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "A porcentagem de streams de mídia (áudio/vídeo) classificados como ruins com base em limites de qualidade predefinidos (jitter > 30ms, perda de pacotes > 1% ou latência RTT > 500ms) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q45",
    "text": "Um usuário específico reclama de eco persistente em todas as suas chamadas Teams. Quais informações no Per-user Call Analytics ajudam a diagnosticar a causa raiz?",
    "options": [
      "Dispositivo de áudio utilizado (microfone/speaker), qualidade do dispositivo, métricas de echo cancellation, versão do cliente Teams e tipo de conexão de rede (Wi-Fi vs. com fio)",
      "Histórico de presença do usuário e reuniões recentes com participantes que relataram o mesmo problema",
      "Relatório de uso de aplicativos e versão do sistema operacional do dispositivo do usuário",
      "Latência de rede RTT, jitter e perda de pacotes — indicadores de problema de infraestrutura de rede"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: Per-User Call Analytics (Nível: intermediário).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "Dispositivo de áudio utilizado (microfone/speaker), qualidade do dispositivo, métricas de echo cancellation, versão do cliente Teams e tipo de conexão de rede (Wi-Fi vs. com fio) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q46",
    "text": "O Health Dashboard for Direct Routing mostra que um SBC está com status \"Inativo\". Quais são as causas mais prováveis e como diagnosticar?",
    "options": [
      "Certificado TLS expirado ou inválido no SBC, conectividade de rede bloqueada entre SBC e IPs Microsoft 365, configuração SIP incorreta — verificar logs SIP do SBC, testar conectividade TLS na porta 5061 e validar certificado",
      "Sobrecarga de chamadas simultâneas excedendo a capacidade do SBC e necessidade de reinicialização",
      "Expiração da licença Teams Phone do tenant que desativa conexões SBC automaticamente",
      "Atualização de firmware pendente no SBC que bloqueia novas conexões SIP automaticamente"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: Direct Routing — Diagnóstico (Nível: avançado).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "Certificado TLS expirado ou inválido no SBC, conectividade de rede bloqueada entre SBC e IPs Microsoft 365, configuração SIP incorreta — verificar logs SIP do SBC, testar conectividade TLS na porta 5061 e validar certificado — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "SBC requirements are specific — it must be on Microsoft's certified list, have valid TLS certificate with FQDN, support SIP TLS on port 5061, and SRTP for media"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q47",
    "text": "Um engenheiro deseja receber alertas automáticos quando a taxa de streams ruins (Poor Stream Rate) do CQD ultrapassar 10% na organização. Qual configuração deve ser feita?",
    "options": [
      "Configurar dashboard do Power BI com alerta de dados conectado ao CQD via conector nativo",
      "Criar um alerta no Azure Monitor com métrica de CQD via Microsoft Graph API com webhook de notificação",
      "Configurar regras de alerta (Alert Rules) no Teams Admin Center > Notificações e alertas > Qualidade de chamadas, definindo o limite e os destinatários de notificação",
      "Ativar notificações de qualidade no Microsoft Sentinel com regra analítica baseada em logs Teams"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: Alertas e Notificações (Nível: intermediário).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "Configurar regras de alerta (Alert Rules) no Teams Admin Center > Notificações e alertas > Qualidade de chamadas, definindo o limite e os destinatários de notificação — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "Call Quality Dashboard shows user-side call quality metrics (jitter, packet loss, latency), not SBC connection status — use Health Dashboard for Direct Routing instead",
        "Call Quality Dashboard shows user-side call quality metrics (jitter, packet loss, latency), not SBC connection status — use Health Dashboard for Direct Routing instead",
        "Microsoft Sentinel is a security/SIEM tool, not a phone system monitoring dashboard — it's not designed for tracking SBC connectivity or voice quality"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q48",
    "text": "Durante uma investigação de problema de chamada no cliente Teams Desktop, quais tipos de logs estão disponíveis para coleta e análise?",
    "options": [
      "Logs de depuração (debug logs), logs de mídia (media logs) e logs do Windows Event Viewer — coletados via Ctrl+Alt+Shift+1 no cliente Teams ou manualmente na pasta de logs do Teams",
      "Logs de chamada SIP exportados diretamente pelo cliente Teams via interface de configurações avançadas",
      "Apenas logs de eventos do Windows filtrados por fonte \"Microsoft Teams\" no Event Viewer",
      "Logs de rede capturados pelo Microsoft Network Monitor integrado ao cliente Teams Desktop"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: Logs de Diagnóstico do Cliente (Nível: avançado).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "Logs de depuração (debug logs), logs de mídia (media logs) e logs do Windows Event Viewer — coletados via Ctrl+Alt+Shift+1 no cliente Teams ou manualmente na pasta de logs do Teams — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q49",
    "text": "O que é o serviço de Audioconferência (Audio Conferencing) do Microsoft Teams e qual problema ele resolve?",
    "options": [
      "Habilita chamadas de voz entre usuários Teams e sistemas PBX legados sem necessidade de SBC",
      "Permite que participantes discam por telefone para ingressar em reuniões Teams usando um número PSTN, resolvendo o problema de acesso quando o usuário não tem internet ou dispositivo compatível",
      "Fornece gravação automática de todas as reuniões com transcrição via PSTN para conformidade regulatória",
      "Substitui o Teams Phone para chamadas 1:1, permitindo chamadas de voz sem licença de Phone System"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Audioconferência — Visão Geral (Nível: iniciante).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "Permite que participantes discam por telefone para ingressar em reuniões Teams usando um número PSTN, resolvendo o problema de acesso quando o usuário não tem internet ou dispositivo compatível — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q50",
    "text": "O que é uma ponte de conferência (Conference Bridge) no contexto do Microsoft Teams Audio Conferencing e como ela é configurada?",
    "options": [
      "É o serviço que atribui números PSTN de discagem às reuniões Teams; configurada no Teams Admin Center > Reuniões > Pontes de conferência, onde se gerenciam números, PIN padrão e configurações de entrada/saída",
      "É um serviço Azure que roteia chamadas de audioconferência entre regiões geográficas para redundância",
      "É um SBC dedicado exclusivamente para audioconferência, separado do SBC de Direct Routing",
      "É um dispositivo físico de hardware instalado on-premises que conecta chamadas PSTN ao Teams"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Audioconferência — Ponte de Conferência (Nível: intermediário).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "É o serviço que atribui números PSTN de discagem às reuniões Teams; configurada no Teams Admin Center > Reuniões > Pontes de conferência, onde se gerenciam números, PIN padrão e configurações de entrada/saída — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q51",
    "text": "Um administrador precisa definir o número de discagem padrão para reuniões de um usuário baseado no Brasil. Onde e como essa configuração é feita?",
    "options": [
      "PowerShell com Set-CsOnlineDialInConferencingUser -ServiceNumber para atribuir número brasileiro",
      "Exchange Admin Center > Caixa de correio > Configurações de reunião > Número de discagem padrão",
      "Teams Admin Center > Usuários > selecionar usuário > aba Conta > Audioconferência — definir número de telefone de conferência padrão para o número brasileiro disponível na ponte",
      "Microsoft 365 Admin Center > Usuários > Licenças > Configurações de audioconferência por região"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Audioconferência — Configurações de Usuário (Nível: intermediário).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "Teams Admin Center > Usuários > selecionar usuário > aba Conta > Audioconferência — definir número de telefone de conferência padrão para o número brasileiro disponível na ponte — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q52",
    "text": "Um organizador de reunião usa o PIN de audioconferência para qual finalidade específica no Microsoft Teams?",
    "options": [
      "Para gravar a reunião via telefone PSTN sem precisar usar o aplicativo Teams",
      "Para autenticar o organizador ao acessar relatórios de presença via discagem PSTN pós-reunião",
      "Para silenciar ou remover participantes PSTN que entraram pelo número de discagem gratuita",
      "Para iniciar a reunião discando pelo telefone quando a opção \"Os chamadores devem aguardar antes de entrar\" está ativada — o PIN autentica o organizador e libera os participantes do lobby telefônico"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Audioconferência — PIN de Organizador (Nível: intermediário).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "Para iniciar a reunião discando pelo telefone quando a opção \"Os chamadores devem aguardar antes de entrar\" está ativada — o PIN autentica o organizador e libera os participantes do lobby telefônico — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q53",
    "text": "Um engenheiro precisa garantir que reuniões de alta segurança não possam ser iniciadas antes da chegada do organizador e que nenhum participante anônimo possa iniciar a sessão. Qual combinação de configurações garante isso?",
    "options": [
      "Desativar o link de reunião reutilizável e gerar novo link único para cada ocorrência da reunião",
      "Usar rótulo de sensibilidade \"Altamente Confidencial\" com lobby obrigatório para todos os participantes",
      "Ativar criptografia E2EE na reunião e configurar acesso condicional bloqueando participantes sem MFA",
      "Política de reunião: \"Quem pode ignorar o lobby\" = Somente organizadores; desativar \"Participantes anônimos podem iniciar reunião\"; configurar que todos (incluindo internos) aguardem no lobby"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Políticas de Reunião — Avançado (Nível: avançado).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "Política de reunião: \"Quem pode ignorar o lobby\" = Somente organizadores; desativar \"Participantes anônimos podem iniciar reunião\"; configurar que todos (incluindo internos) aguardem no lobby — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q54",
    "text": "Ao configurar um Webinar no Microsoft Teams, quais elementos são exclusivos em relação a uma reunião comum agendada?",
    "options": [
      "Integração automática com LinkedIn Events e exportação de leads para Dynamics 365 CRM",
      "Suporte a intérpretes simultâneos, múltiplos idiomas e tradução automática por IA em tempo real",
      "Formulário de registro com campos personalizáveis, página de evento com tema visual, controle de quem pode apresentar/interagir, relatório de engajamento pós-evento e capacidade de aprovação manual de registros",
      "Capacidade de até 10.000 participantes, gravação obrigatória e transmissão simultânea pelo Microsoft Stream"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Webinars — Configuração (Nível: intermediário).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "Formulário de registro com campos personalizáveis, página de evento com tema visual, controle de quem pode apresentar/interagir, relatório de engajamento pós-evento e capacidade de aprovação manual de registros — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q55",
    "text": "Um engenheiro configura um Town Hall no Microsoft Teams para 5.000 funcionários. Quais são os papéis disponíveis e suas responsabilidades em um Town Hall?",
    "options": [
      "Organizador (configura e gerencia o evento), Co-organizador (auxilia na gestão), Apresentador (apresenta conteúdo com controles de mídia) e Participante (assiste em modo somente visualização com Q&A)",
      "Admin (configura), Producer (gerencia transmissão), Presenter (apresenta) e Attendee (participa ativamente)",
      "Host (controle total), Moderador (gerencia Q&A), Speaker (apresenta) e Viewer (assiste sem interação)",
      "Owner (cria e deleta), Manager (edita configurações), Contributor (compartilha tela) e Guest (somente leitura)"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Town Halls — Configuração (Nível: avançado).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "Organizador (configura e gerencia o evento), Co-organizador (auxilia na gestão), Apresentador (apresenta conteúdo com controles de mídia) e Participante (assiste em modo somente visualização com Q&A) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q56",
    "text": "Qual é o número máximo de participantes suportado em um Town Hall do Microsoft Teams com licença padrão Microsoft 365?",
    "options": [
      "25.000 participantes — capacidade máxima para todos os tipos de eventos Teams",
      "1.000 participantes — mesmo limite de reuniões interativas padrão do Teams",
      "50.000 participantes disponíveis para todos os planos Microsoft 365 sem licença adicional",
      "10.000 participantes por Town Hall com licença padrão; até 20.000 com Teams Premium"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Town Halls — Limites (Nível: intermediário).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "10.000 participantes por Town Hall com licença padrão; até 20.000 com Teams Premium — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q57",
    "text": "Os Eventos ao Vivo (Live Events) do Microsoft Teams estão sendo substituídos por qual novo formato e qual é o impacto para organizações que ainda os utilizam?",
    "options": [
      "Estão sendo substituídos pelos Town Halls e Webinars — a Microsoft recomenda migração para os novos formatos que oferecem mais recursos; Live Events foi descontinuado em setembro de 2024",
      "Foram migrados para o Viva Engage como Eventos Corporativos com suporte a até 100.000 participantes",
      "Estão sendo substituídos por Transmissões ao Vivo do Microsoft Stream com integração automática ao Teams",
      "Continuam disponíveis permanentemente como opção legada paralela aos novos formatos Town Hall"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Eventos ao Vivo — Legado (Nível: intermediário).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "Estão sendo substituídos pelos Town Halls e Webinars — a Microsoft recomenda migração para os novos formatos que oferecem mais recursos; Live Events foi descontinuado em setembro de 2024 — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q58",
    "text": "Um engenheiro precisa implementar reuniões com proteção máxima para discussões de diretoria. Quais recursos do Teams Premium atendem a esse requisito de segurança?",
    "options": [
      "Lobby com autenticação multifator obrigatória e verificação biométrica de participantes via Entra ID",
      "Marca d'água em vídeo e conteúdo compartilhado, criptografia E2EE para reuniões em grupo, rótulos de sensibilidade em reuniões, prevenção de cópia de chat e proteção de reunião configurável",
      "Canal privado dedicado para reuniões com barreiras de informação e DLP em tempo real ativo",
      "Gravação obrigatória com armazenamento criptografado no Azure Key Vault e acesso restrito"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Microsoft Teams Premium — Reuniões Avançadas (Nível: avançado).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "Marca d'água em vídeo e conteúdo compartilhado, criptografia E2EE para reuniões em grupo, rótulos de sensibilidade em reuniões, prevenção de cópia de chat e proteção de reunião configurável — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q59",
    "text": "Um engenheiro configura interpretação simultânea de idiomas para uma reunião global do Teams. Quais são os pré-requisitos e limitações dessa funcionalidade?",
    "options": [
      "Requer licença E5 com Copilot; tradução é feita via Azure Cognitive Services sem intérpretes designados",
      "Disponível sem licença adicional; IA do Teams traduz automaticamente sem necessidade de intérpretes humanos",
      "Funciona apenas em reuniões de canal; não disponível para reuniões agendadas via calendário Outlook",
      "Requer Teams Premium; organizador designa intérpretes por par de idiomas antes da reunião; participantes selecionam o canal de idioma preferido; intérpretes precisam de conta Microsoft 365"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Interpretação de Idiomas (Nível: avançado).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "Requer Teams Premium; organizador designa intérpretes por par de idiomas antes da reunião; participantes selecionam o canal de idioma preferido; intérpretes precisam de conta Microsoft 365 — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q60",
    "text": "Um engenheiro implanta um Survivable Branch Appliance (SBA) em uma filial que usa Direct Routing. Quais chamadas continuam funcionando se a conectividade com o Microsoft 365 cair?",
    "options": [
      "Todas as funcionalidades do Teams continuam operando normalmente, incluindo chat, reuniões e chamadas internas",
      "Apenas chamadas de emergência funcionam via SBA; chamadas PSTN normais requerem conectividade plena",
      "Chamadas PSTN de saída e entrada via SBC local continuam funcionando através do SBA; chamadas Teams-to-Teams internas falham pois requerem conectividade com o serviço Teams na nuvem",
      "O SBA mantém chamadas PSTN e Teams internas, mas bloqueia chamadas para convidados externos"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Survivable Branch Appliance (SBA) (Nível: avançado).",
      "papoReto": "Direct Routing = você gerencia SBC certificado Microsoft, máxima flexibilidade e controle troncos SIP",
      "respostaCerta": "Chamadas PSTN de saída e entrada via SBC local continuam funcionando através do SBA; chamadas Teams-to-Teams internas falham pois requerem conectividade com o serviço Teams na nuvem — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Direct Routing = seu SBC, seu controle, máxima complexidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "SBCs certificados: AudioCodes, Ribbon, Mediant, Acme/Ixia — verificar compatibilidade Microsoft"
    }
  },
  {
    "id": "ms721_q61",
    "text": "Qual cmdlet PowerShell é usado para associar um Survivable Branch Appliance a um gateway SBC no Direct Routing?",
    "options": [
      "New-CsTeamsSurvivableBranchAppliance para registrar o SBA e Set-CsOnlinePSTNGateway com o parâmetro -SurvivableBranchApplianceFqdn para associar ao SBC",
      "Add-CsDirectRoutingSBA configurado via Teams Admin Center sem necessidade de PowerShell",
      "Set-CsOnlineVoiceRoute -SurvivableBranch com FQDN do SBA e gateway associado",
      "New-CsSurvivableBranchAppliance com parâmetro -Gateway para associar diretamente ao SBC"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: SBA — Configuração (Nível: avançado).",
      "papoReto": "Direct Routing = você gerencia SBC certificado Microsoft, máxima flexibilidade e controle troncos SIP",
      "respostaCerta": "New-CsTeamsSurvivableBranchAppliance para registrar o SBA e Set-CsOnlinePSTNGateway com o parâmetro -SurvivableBranchApplianceFqdn para associar ao SBC — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Direct Routing = seu SBC, seu controle, máxima complexidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "SBCs certificados: AudioCodes, Ribbon, Mediant, Acme/Ixia — verificar compatibilidade Microsoft"
    }
  },
  {
    "id": "ms721_q62",
    "text": "Qual é o objetivo da Otimização de Mídia Local (Local Media Optimization) no Direct Routing e como ela beneficia filiais com conexão WAN limitada?",
    "options": [
      "Prioriza automaticamente tráfego de voz sobre dados na WAN sem necessidade de configuração de QoS",
      "Comprime o tráfego de mídia Teams usando codecs otimizados para reduzir consumo de largura de banda WAN",
      "Cache local de configurações de voz que permite chamadas mesmo sem conexão internet por até 4 horas",
      "Permite que o tráfego de mídia (áudio/vídeo) entre usuários Teams e o SBC local flua diretamente pela rede local da filial, sem passar pelo Microsoft 365 na nuvem, reduzindo latência e consumo de WAN"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Local Media Optimization (LMO) (Nível: avançado).",
      "papoReto": "Direct Routing = você gerencia SBC certificado Microsoft, máxima flexibilidade e controle troncos SIP",
      "respostaCerta": "Permite que o tráfego de mídia (áudio/vídeo) entre usuários Teams e o SBC local flua diretamente pela rede local da filial, sem passar pelo Microsoft 365 na nuvem, reduzindo latência e consumo de WAN — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Direct Routing = seu SBC, seu controle, máxima complexidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "SBCs certificados: AudioCodes, Ribbon, Mediant, Acme/Ixia — verificar compatibilidade Microsoft"
    }
  },
  {
    "id": "ms721_q63",
    "text": "A Otimização de Mídia Local (LMO) opera em dois modos. Quais são e qual a diferença entre eles?",
    "options": [
      "Modo Interno (Internal) — para usuários na sede; Modo Externo (External) — para usuários remotos via VPN",
      "Modo Primário — usa SBC local preferencialmente; Modo Secundário — usa SBC remoto como fallback automático",
      "Modo Sempre Bypass (Always Bypass) — mídia sempre flui pelo SBC local independentemente da localização do usuário; Modo Apenas para usuários locais (Only For Local Users) — bypass apenas quando o usuário está na mesma rede que o SBC",
      "Modo Ativo (Active) — otimização sempre ligada; Modo Passivo (Passive) — otimização apenas em horário de pico de tráfego WAN"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: LMO — Modos de Configuração (Nível: avançado).",
      "papoReto": "Teams Phone é PBX gerenciado Microsoft na nuvem, core de telefonia em Teams com transferência, correio voz, auto-atendentes, filas",
      "respostaCerta": "Modo Sempre Bypass (Always Bypass) — mídia sempre flui pelo SBC local independentemente da localização do usuário; Modo Apenas para usuários locais (Only For Local Users) — bypass apenas quando o usuário está na mesma rede que o SBC — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Phone = PBX nuvem Microsoft, nome antigo Phone System, mesma coisa",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Phone System = Teams Phone (rebrand 2019) — mesma solução, apenas nome novo"
    }
  },
  {
    "id": "ms721_q64",
    "text": "Uma empresa americana implementa Teams Phone e precisa garantir conformidade com requisitos de chamadas de emergência E911. Quais componentes devem ser configurados?",
    "options": [
      "Apenas configurar o número 911 como destino na rota de voz padrão do Direct Routing sem configurações adicionais",
      "Registrar todos os usuários com endereço da sede e configurar um único número de emergência centralizado",
      "Políticas de chamada de emergência (Emergency Calling Policy), endereços de rede registrados (Civic Addresses) mapeados a sub-redes no Teams Admin Center e roteamento de emergência para PSAP local via SBC ou Calling Plan",
      "Implementar Azure Maps com geolocalização GPS de dispositivos para detecção automática de localização de emergência"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Emergency Calling — E911 (Nível: avançado).",
      "papoReto": "E911 = localização dinâmica obrigatória, roteamento automático PSAP correto, endereço registrado, suporte para chamadas emergência",
      "respostaCerta": "Políticas de chamada de emergência (Emergency Calling Policy), endereços de rede registrados (Civic Addresses) mapeados a sub-redes no Teams Admin Center e roteamento de emergência para PSAP local via SBC ou Calling Plan — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "E911 = localização precisa obrigatória para emergência, endereço dinâmico se mudança local",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Endereço emergência atualizado automático se usuário muda prédio/escritório"
    }
  },
  {
    "id": "ms721_q65",
    "text": "No contexto de chamadas de emergência no Teams Phone, o que é um Endereço Cívico (Civic Address) e como ele é associado a usuários?",
    "options": [
      "É o número de ramal interno do usuário mapeado ao endereço físico via Active Directory na propriedade \"Office\"",
      "É o endereço do datacenter Microsoft mais próximo usado para roteamento de chamadas de emergência regionais",
      "É o endereço de e-mail corporativo do usuário usado para identificação em chamadas de emergência pelo PSAP",
      "É o endereço físico validado de um local (prédio, andar) registrado no Teams Admin Center; associado a usuários via mapeamento de sub-rede a locais de rede (network sites), identificando automaticamente a localização pelo IP"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Emergency Calling — Endereços Cívicos (Nível: avançado).",
      "papoReto": "E.164 é formato internacional obrigatório (+55 11 98765-4321), máscara chamada mascara origem, portabilidade numérica via LOA",
      "respostaCerta": "É o endereço físico validado de um local (prédio, andar) registrado no Teams Admin Center; associado a usuários via mapeamento de sub-rede a locais de rede (network sites), identificando automaticamente a localização pelo IP — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "E.164 = +55 11 números, obrigatório PSTN; usuário vs serviço — impacto aplicabilidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Portabilidade exige LOA, conta faturamento, números E.164, data desejada"
    }
  },
  {
    "id": "ms721_q66",
    "text": "Um engenheiro configura a topologia de rede no Teams Admin Center mapeando sub-redes a sites físicos. Para quais funcionalidades do Teams essa configuração é necessária?",
    "options": [
      "Apenas para relatórios de uso por localização no Microsoft 365 Admin Center e Teams Admin Center",
      "Somente para provisionamento automático de dispositivos Teams por localização física de rede",
      "Exclusivamente para configuração de QoS automático por sub-rede sem necessidade de switches gerenciados",
      "Location-Based Routing (LBR), políticas de emergência baseadas em localização, relatórios de qualidade de chamadas por site no CQD e Otimização de Mídia Local (LMO)"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Topologia de Rede no Teams Admin Center (Nível: intermediário).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Location-Based Routing (LBR), políticas de emergência baseadas em localização, relatórios de qualidade de chamadas por site no CQD e Otimização de Mídia Local (LMO) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q67",
    "text": "Qual é a hierarquia correta de objetos de topologia de rede que deve ser configurada no Teams Admin Center para suportar LBR e LMO?",
    "options": [
      "Locatário (Tenant) > Departamento (Department) > Usuário (User) — hierarquia organizacional aplicada à topologia",
      "Regiões de Rede (Network Regions) > Sites de Rede (Network Sites) > Sub-redes (Network Subnets) — cada sub-rede mapeada a um site e cada site a uma região",
      "Azure Region > Resource Group > Virtual Network — hierarquia Azure aplicada à topologia Teams",
      "Gateway SBC > Rota de Voz > Política de Roteamento — hierarquia de voz aplicada aos sites de rede"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Configuração de Sites de Rede (Nível: intermediário).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Regiões de Rede (Network Regions) > Sites de Rede (Network Sites) > Sub-redes (Network Subnets) — cada sub-rede mapeada a um site e cada site a uma região — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q68",
    "text": "Um engenheiro precisa limitar a largura de banda de vídeo usada por reuniões Teams em uma filial com WAN de 10 Mbps compartilhada. Qual configuração no Teams Admin Center permite esse controle?",
    "options": [
      "Configuração de QoS por sub-rede no Teams Admin Center limitando largura de banda por tipo de mídia",
      "Política de rede do site com limite de banda configurado no mapeamento de sub-rede",
      "Regra de firewall limitando bandwidth para destinos IP do Microsoft 365 durante horário comercial",
      "Política de largura de banda de mídia (Media Bit Rate) na política de reunião — configura limite máximo de bitrate para áudio, vídeo e compartilhamento de tela por usuário"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Bandwidth Policy — Teams (Nível: avançado).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Política de largura de banda de mídia (Media Bit Rate) na política de reunião — configura limite máximo de bitrate para áudio, vídeo e compartilhamento de tela por usuário — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q69",
    "text": "Um engenheiro carrega dados de edifício (building data) no CQD e observa alta taxa de streams ruins em um site específico. Quais dimensões do CQD devem ser analisadas para identificar se o problema é de rede interna ou ISP/internet?",
    "options": [
      "Comparar horários de pico de chamadas com janelas de backup de rede agendadas no site",
      "Verificar versão do cliente Teams e sistema operacional dos dispositivos no site com problemas",
      "Analisar relatório de uso de dispositivos para identificar modelos de headset não certificados no site",
      "Comparar streams \"Inside\" vs \"Outside\" (baseados no mapeamento de sub-rede), analisar tipo de transporte (UDP vs. TCP/relay), verificar métricas de jitter e perda de pacotes segmentadas por sub-rede e tipo de conexão"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Relatórios de Rede no CQD (Nível: avançado).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Comparar streams \"Inside\" vs \"Outside\" (baseados no mapeamento de sub-rede), analisar tipo de transporte (UDP vs. TCP/relay), verificar métricas de jitter e perda de pacotes segmentadas por sub-rede e tipo de conexão — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q70",
    "text": "Quais são os componentes físicos típicos de um sistema Microsoft Teams Rooms completo em uma sala de médio porte?",
    "options": [
      "Compute unit (mini PC ou dispositivo Android), câmera PTZ certificada, speakerphone ou sistema de microfone/alto-falante, display(s) para conteúdo e vídeo, e opcionalmente touchscreen controller e Teams Panel",
      "Azure Sphere IoT device, câmera IP de segurança com suporte SIP e monitor 4K com entrada HDMI",
      "Surface Hub 2S, câmera USB padrão, headset Bluetooth e projetor com conector HDMI",
      "Desktop Windows com Teams instalado, webcam USB, caixa de som Bluetooth e teclado sem fio"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Teams Rooms — Componentes de Sistema (Nível: intermediário).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Compute unit (mini PC ou dispositivo Android), câmera PTZ certificada, speakerphone ou sistema de microfone/alto-falante, display(s) para conteúdo e vídeo, e opcionalmente touchscreen controller e Teams Panel — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q71",
    "text": "O Microsoft Surface Hub 3 é um dispositivo de colaboração para salas. Quais são suas principais capacidades em um ambiente Teams?",
    "options": [
      "Smart TV certificada para Teams com suporte apenas a visualização de reuniões sem capacidade de apresentação",
      "Servidor de aplicativos Azure para processamento de reuniões Teams com display touchscreen como interface",
      "Dispositivo de apresentação unidirecional para exibição de conteúdo sem capacidade de videoconferência nativa",
      "Display interativo de grande formato com toque e caneta, sistema Teams Rooms integrado, Whiteboard colaborativo nativo, câmera e áudio integrados, e suporte a reuniões Teams completas sem dispositivos adicionais"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Surface Hub (Nível: intermediário).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Display interativo de grande formato com toque e caneta, sistema Teams Rooms integrado, Whiteboard colaborativo nativo, câmera e áudio integrados, e suporte a reuniões Teams completas sem dispositivos adicionais — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q72",
    "text": "O que é um Microsoft Teams Display e como ele difere de um telefone IP Teams convencional?",
    "options": [
      "É uma versão premium do telefone IP com display touchscreen maior, funcionando identicamente a um telefone Teams padrão",
      "É o painel de controle do Teams Rooms instalado na mesa de conferência para controlar a reunião da sala",
      "Teams Display é um dispositivo all-in-one com tela sensível ao toque maior, câmera e microfone integrados, focado em experiência de comunicação pessoal (chat, chamadas, calendário) com Cortana para comandos de voz — complementa o PC sem substituir o telefone IP",
      "É um monitor externo certificado para Teams que exibe status de presença e notificações sem capacidade de chamada"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Displays Teams (Nível: intermediário).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Teams Display é um dispositivo all-in-one com tela sensível ao toque maior, câmera e microfone integrados, focado em experiência de comunicação pessoal (chat, chamadas, calendário) com Cortana para comandos de voz — complementa o PC sem substituir o telefone IP — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q73",
    "text": "Por que é importante usar dispositivos certificados pela Microsoft para Teams em vez de dispositivos USB genéricos compatíveis?",
    "options": [
      "Certificação garante compatibilidade apenas com Windows 11; dispositivos genéricos funcionam somente no Teams Web",
      "Dispositivos não certificados são bloqueados pelo Teams Admin Center e impedem o usuário de fazer chamadas",
      "Dispositivos certificados são testados e otimizados para Teams, garantindo supressão de ruído, cancelamento de eco, botões de ação direta (atender/desligar/mudo) integrados ao Teams, drivers otimizados e melhor qualidade de áudio/vídeo comprovada",
      "Apenas dispositivos certificados recebem suporte técnico da Microsoft; genéricos são de responsabilidade exclusiva do fabricante"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Certificação de Dispositivos — Processo (Nível: avançado).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Dispositivos certificados são testados e otimizados para Teams, garantindo supressão de ruído, cancelamento de eco, botões de ação direta (atender/desligar/mudo) integrados ao Teams, drivers otimizados e melhor qualidade de áudio/vídeo comprovada — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q74",
    "text": "Um engenheiro recebe reclamações de problemas de qualidade de chamadas de um grupo específico de usuários em um escritório. Qual é a abordagem metodológica recomendada para investigação?",
    "options": [
      "1) Verificar integridade do serviço Teams; 2) Coletar logs via Ctrl+Alt+Shift+1; 3) Enviar logs ao suporte Microsoft imediatamente",
      "1) Verificar firewall e proxy; 2) Testar com VPN desativada; 3) Reinstalar o cliente Teams; 4) Comparar com usuários em outras redes",
      "1) Coletar dados no CQD filtrando por site/sub-rede; 2) Analisar Per-user Call Analytics de usuários afetados; 3) Verificar tipo de dispositivo e conexão; 4) Comparar métricas inside vs. outside; 5) Avaliar rede local com Network Assessment Tool",
      "1) Reiniciar o cliente Teams em todos os dispositivos; 2) Atualizar drivers de áudio; 3) Verificar se o problema persiste; 4) Abrir ticket Microsoft se continuar"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: Troubleshooting — Metodologia (Nível: intermediário).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "1) Coletar dados no CQD filtrando por site/sub-rede; 2) Analisar Per-user Call Analytics de usuários afetados; 3) Verificar tipo de dispositivo e conexão; 4) Comparar métricas inside vs. outside; 5) Avaliar rede local com Network Assessment Tool — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q75",
    "text": "A Microsoft disponibiliza templates de relatórios Power BI para CQD. Quais são os principais relatórios disponíveis nesses templates e como são obtidos?",
    "options": [
      "Dashboards nativos do CQD exportáveis para Power BI via botão de integração no portal do Teams Admin Center",
      "Templates oficiais disponíveis no GitHub Microsoft (CQD Power BI Query Templates) incluem relatórios de qualidade geral, análise helpdesk, qualidade de dispositivos, relatório de localização de rede e análise de Direct Routing PSTN",
      "Templates disponíveis no Teams Admin Center para download direto com conexão automática ao CQD via OAuth",
      "Relatórios pré-construídos no Microsoft AppSource conectados ao CQD via API do Microsoft Graph"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: CQD — Power BI Reports (Nível: avançado).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "Templates oficiais disponíveis no GitHub Microsoft (CQD Power BI Query Templates) incluem relatórios de qualidade geral, análise helpdesk, qualidade de dispositivos, relatório de localização de rede e análise de Direct Routing PSTN — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "Call Quality Dashboard shows user-side call quality metrics (jitter, packet loss, latency), not SBC connection status — use Health Dashboard for Direct Routing instead",
        "Call Quality Dashboard shows user-side call quality metrics (jitter, packet loss, latency), not SBC connection status — use Health Dashboard for Direct Routing instead",
        "Call Quality Dashboard shows user-side call quality metrics (jitter, packet loss, latency), not SBC connection status — use Health Dashboard for Direct Routing instead"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q76",
    "text": "Um usuário reporta que não consegue fazer chamadas no Teams. O administrador usa a ferramenta de diagnóstico de autoatendimento disponível no Microsoft 365 Admin Center. O que essa ferramenta verifica automaticamente?",
    "options": [
      "Status de conformidade do dispositivo no Intune, versão do cliente Teams e configurações de proxy",
      "Configuração de licença do Teams Phone, atribuição de número de telefone, políticas de voz atribuídas, status de habilitação do usuário para Enterprise Voice e configuração de roteamento de voz",
      "Qualidade da conexão de rede do usuário, latência ao Microsoft 365 e configuração de firewall local",
      "Histórico de chamadas dos últimos 30 dias, taxa de falhas e destinos mais discados pelo usuário"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: Self-help Diagnostics (Nível: intermediário).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "Configuração de licença do Teams Phone, atribuição de número de telefone, políticas de voz atribuídas, status de habilitação do usuário para Enterprise Voice e configuração de roteamento de voz — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q77",
    "text": "Um engenheiro precisa identificar chamadas PSTN via Direct Routing com alta taxa de falha de estabelecimento de chamada. Quais métricas e dimensões do CQD são mais relevantes para essa análise?",
    "options": [
      "Analisar jitter e perda de pacotes por sub-rede para identificar problemas de rede que causam falhas de chamada",
      "Verificar versão de firmware do SBC e comparar com última versão certificada pela Microsoft",
      "Filtrar por modalidade PSTN, analisar First/Final SIP Code para identificar códigos de erro SIP, verificar Connectivity Ice e comparar por gateway SBC para identificar qual gateway apresenta mais falhas",
      "Analisar relatório de presença dos usuários para correlacionar falhas com períodos de alta utilização"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: Relatório PSTN no CQD (Nível: avançado).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "Filtrar por modalidade PSTN, analisar First/Final SIP Code para identificar códigos de erro SIP, verificar Connectivity Ice e comparar por gateway SBC para identificar qual gateway apresenta mais falhas — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "SBC requirements are specific — it must be on Microsoft's certified list, have valid TLS certificate with FQDN, support SIP TLS on port 5061, and SRTP for media",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q78",
    "text": "Durante a análise de falhas em chamadas Direct Routing, o engenheiro identifica o código SIP 403 como resposta final. O que esse código indica e quais são as possíveis causas?",
    "options": [
      "SIP 403 indica que o número destino não existe na PSTN e a operadora retornou número inválido",
      "SIP 403 (Forbidden) indica que a chamada foi recusada por falta de autorização — causas incluem rota de voz não configurada para o destino, usuário sem política de roteamento atribuída ou número destino bloqueado pelo SBC",
      "SIP 403 indica que o servidor SBC está sobrecarregado e recusando novas chamadas temporariamente",
      "SIP 403 indica que o certificado TLS do SBC expirou e a chamada foi bloqueada por segurança"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: Códigos SIP — Diagnóstico (Nível: avançado).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "SIP 403 (Forbidden) indica que a chamada foi recusada por falta de autorização — causas incluem rota de voz não configurada para o destino, usuário sem política de roteamento atribuída ou número destino bloqueado pelo SBC — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q79",
    "text": "Um engenheiro observa o código SIP 503 como resposta em chamadas Direct Routing no Health Dashboard. O que esse código indica?",
    "options": [
      "SIP 503 indica que o usuário Teams está offline e não pode receber chamadas no momento",
      "SIP 503 (Service Unavailable) indica que o SBC ou a operadora PSTN está temporariamente indisponível — causas incluem sobrecarga do SBC, manutenção da operadora ou falha de conectividade entre SBC e PSTN",
      "SIP 503 indica que a licença Teams Phone do usuário expirou e o serviço de voz foi desativado",
      "SIP 503 indica que o número de telefone discado não está no formato E.164 correto"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: Códigos SIP — Diagnóstico (Nível: avançado).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "SIP 503 (Service Unavailable) indica que o SBC ou a operadora PSTN está temporariamente indisponível — causas incluem sobrecarga do SBC, manutenção da operadora ou falha de conectividade entre SBC e PSTN — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q80",
    "text": "Uma instituição financeira precisa implementar gravação de conformidade (Compliance Recording) para todas as chamadas e reuniões de traders no Teams. Como essa solução funciona tecnicamente?",
    "options": [
      "O SBC de Direct Routing intercepta e grava todas as chamadas PSTN, enquanto Teams captura reuniões internas separadamente",
      "Parceiros certificados Microsoft implementam um bot de gravação via Teams Recording API (Graph API) que é automaticamente adicionado a chamadas e reuniões dos usuários cobertos pela política, sem possibilidade de desativação pelo usuário",
      "O administrador ativa gravação automática na política de reunião e as gravações são enviadas ao Microsoft Purview automaticamente",
      "Microsoft Purview Communication Compliance grava chamadas automaticamente quando palavras-chave sensíveis são detectadas"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Conformidade de Gravação — Compliance Recording (Nível: avançado).",
      "papoReto": "Teams Phone é PBX gerenciado Microsoft na nuvem, core de telefonia em Teams com transferência, correio voz, auto-atendentes, filas",
      "respostaCerta": "Parceiros certificados Microsoft implementam um bot de gravação via Teams Recording API (Graph API) que é automaticamente adicionado a chamadas e reuniões dos usuários cobertos pela política, sem possibilidade de desativação pelo usuário — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Phone = PBX nuvem Microsoft, nome antigo Phone System, mesma coisa",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Phone System = Teams Phone (rebrand 2019) — mesma solução, apenas nome novo"
    }
  },
  {
    "id": "ms721_q81",
    "text": "Quais são os passos necessários para habilitar um usuário para chamadas PSTN via Direct Routing no Microsoft Teams?",
    "options": [
      "1) Configurar SBC; 2) Criar conta Azure AD; 3) Atribuir licença E3; 4) Registrar número na ANATEL; 5) Testar com operadora",
      "1) Comprar Calling Plan; 2) Atribuir licença Teams Essentials; 3) Atribuir número no Teams Admin Center; 4) Testar chamada de saída",
      "1) Atribuir licença Teams Phone ao usuário; 2) Habilitar Enterprise Voice (Set-CsPhoneNumberAssignment); 3) Atribuir número de telefone; 4) Atribuir política de roteamento de voz online (Grant-CsOnlineVoiceRoutingPolicy); 5) Atribuir Dial Plan se necessário",
      "1) Instalar cliente Teams; 2) Atribuir licença Business Premium; 3) Configurar correio de voz; 4) Definir saudação personalizada no Exchange Online"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Teams Phone — Habilitação de Usuário (Nível: intermediário).",
      "papoReto": "Direct Routing = você gerencia SBC certificado Microsoft, máxima flexibilidade e controle troncos SIP",
      "respostaCerta": "1) Atribuir licença Teams Phone ao usuário; 2) Habilitar Enterprise Voice (Set-CsPhoneNumberAssignment); 3) Atribuir número de telefone; 4) Atribuir política de roteamento de voz online (Grant-CsOnlineVoiceRoutingPolicy); 5) Atribuir Dial Plan se necessário — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Direct Routing = seu SBC, seu controle, máxima complexidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "SBCs certificados: AudioCodes, Ribbon, Mediant, Acme/Ixia — verificar compatibilidade Microsoft"
    }
  },
  {
    "id": "ms721_q82",
    "text": "Um administrador usa o cmdlet Set-CsPhoneNumberAssignment para atribuir um número de telefone a um usuário do Teams. Quais parâmetros são obrigatórios nesse comando?",
    "options": [
      "-UserPrincipalName, -TelephoneNumber e -VoicePolicy são os parâmetros obrigatórios mínimos",
      "-Identity (UPN ou ObjectId do usuário), -PhoneNumber (número em formato E.164), -PhoneNumberType (DirectRouting, CallingPlan ou OperatorConnect)",
      "-UPN, -E164Number e -RoutingType são os parâmetros padrão para atribuição de número",
      "-Identity, -LineUri e -EnterpriseVoiceEnabled $true são necessários para qualquer tipo de número"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Set-CsPhoneNumberAssignment (Nível: avançado).",
      "papoReto": "Direct Routing = você gerencia SBC certificado Microsoft, máxima flexibilidade e controle troncos SIP",
      "respostaCerta": "-Identity (UPN ou ObjectId do usuário), -PhoneNumber (número em formato E.164), -PhoneNumberType (DirectRouting, CallingPlan ou OperatorConnect) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Direct Routing = seu SBC, seu controle, máxima complexidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "SBCs certificados: AudioCodes, Ribbon, Mediant, Acme/Ixia — verificar compatibilidade Microsoft"
    }
  },
  {
    "id": "ms721_q83",
    "text": "O que é o Modo de Coordenação (Coordinated Meetings Mode) no Microsoft Teams Rooms e qual problema ele resolve em ambientes com múltiplos dispositivos na mesma sala?",
    "options": [
      "Permite que um MTR e um Teams Display (ou outro dispositivo Teams) na mesma sala sejam coordenados — o MTR gerencia áudio/vídeo da sala enquanto o display pessoal do usuário serve como controle, evitando eco e feedback de áudio duplicado",
      "Sincroniza automaticamente múltiplos sistemas Teams Rooms em salas adjacentes para reuniões em espaços combinados",
      "Coordena a agenda de múltiplas salas de reunião para otimizar a utilização do espaço físico automaticamente",
      "Permite que dois MTRs em salas diferentes se conectem diretamente sem passar pela nuvem Microsoft 365"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: MTR — Modo de Coordenação (Nível: avançado).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Permite que um MTR e um Teams Display (ou outro dispositivo Teams) na mesma sala sejam coordenados — o MTR gerencia áudio/vídeo da sala enquanto o display pessoal do usuário serve como controle, evitando eco e feedback de áudio duplicado — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q84",
    "text": "Câmeras inteligentes certificadas para Teams Rooms oferecem quais capacidades avançadas em comparação com câmeras USB padrão?",
    "options": [
      "Suporte a realidade aumentada com sobreposição de legendas no feed de vídeo e integração com HoloLens 2",
      "Enquadramento automático de pessoas (Active Speaker Tracking), detecção de múltiplas pessoas, zoom inteligente sem degradação de qualidade, visão panorâmica com enquadramento dividido por participante e integração com IA de reunião do Teams Premium",
      "Resolução 8K com compressão H.265, reconhecimento facial para autenticação biométrica e filtro de fundo virtual em hardware",
      "Gravação local em cartão SD, transmissão simultânea para múltiplas plataformas de videoconferência e modo de segurança câmera IP"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: MTR — Conteúdo de Câmera Inteligente (Nível: avançado).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Enquadramento automático de pessoas (Active Speaker Tracking), detecção de múltiplas pessoas, zoom inteligente sem degradação de qualidade, visão panorâmica com enquadramento dividido por participante e integração com IA de reunião do Teams Premium — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q85",
    "text": "Um engenheiro projeta uma sala de reunião híbrida grande com Microsoft Teams Rooms. Quais configurações de câmera e áudio devem ser consideradas para garantir boa experiência para participantes remotos?",
    "options": [
      "Câmera de segurança IP com suporte SIP e sistema de PA da sala redirecionado para entrada de áudio do MTR",
      "Câmera de documento para captura de materiais físicos e microfone direcional apontado apenas para o apresentador",
      "Câmera PTZ ou inteligente com enquadramento automático, microfones de mesa ou teto com captação omnidirecional cobrindo toda a sala, speakerphone ou sistema de caixas de som distribuídas, e câmera frontal para capturar conteúdo do quadro branco",
      "Uma webcam USB padrão posicionada no centro da sala e headsets individuais para cada participante presencial"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Configuração de Sala — Layouts (Nível: intermediário).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Câmera PTZ ou inteligente com enquadramento automático, microfones de mesa ou teto com captação omnidirecional cobrindo toda a sala, speakerphone ou sistema de caixas de som distribuídas, e câmera frontal para capturar conteúdo do quadro branco — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q86",
    "text": "Um Teams Panel em uma sala de reunião está mostrando status \"Offline\" no Teams Admin Center. Qual sequência de diagnóstico deve ser seguida?",
    "options": [
      "1) Desativar e reativar o Teams Panel no Teams Admin Center; 2) Aguardar sincronização automática de 24 horas; 3) Abrir ticket de suporte se persistir",
      "1) Verificar certificado TLS do dispositivo; 2) Atualizar firmware via Intune; 3) Reconfigurar a conta de recurso no Exchange Online",
      "1) Verificar conectividade física (cabo de rede/Wi-Fi); 2) Confirmar que o dispositivo está ligado; 3) Verificar se a conta de recurso associada está ativa no Azure AD; 4) Confirmar licença válida atribuída; 5) Reiniciar o dispositivo remotamente pelo Teams Admin Center",
      "1) Reinstalar o firmware de fábrica; 2) Recriar a conta de recurso; 3) Reprovisionar o dispositivo do zero via Teams Admin Center"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: Teams Admin Center — Diagnóstico de Dispositivos (Nível: intermediário).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "1) Verificar conectividade física (cabo de rede/Wi-Fi); 2) Confirmar que o dispositivo está ligado; 3) Verificar se a conta de recurso associada está ativa no Azure AD; 4) Confirmar licença válida atribuída; 5) Reiniciar o dispositivo remotamente pelo Teams Admin Center — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q87",
    "text": "Um engenheiro usa o CQD para análise de tendências de qualidade ao longo do tempo. Qual é o período máximo de dados históricos disponível no CQD e como dados mais antigos podem ser preservados?",
    "options": [
      "O CQD mantém dados por 6 meses; exportação disponível apenas via suporte Microsoft mediante solicitação formal",
      "Dados ilimitados no CQD sem necessidade de exportação; a retenção automática é gerenciada pela Microsoft sem limite",
      "O CQD mantém dados por 30 dias apenas; para histórico maior é necessário licença Microsoft 365 E5 com Purview",
      "O CQD mantém dados por até 12 meses; para preservação de longo prazo, os dados podem ser exportados via CQD Power BI connector ou Microsoft Graph API para armazenamento externo no Azure Data Lake ou Power BI Dataflows"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: Análise de Tendências no CQD (Nível: avançado).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "O CQD mantém dados por até 12 meses; para preservação de longo prazo, os dados podem ser exportados via CQD Power BI connector ou Microsoft Graph API para armazenamento externo no Azure Data Lake ou Power BI Dataflows — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "Call Quality Dashboard shows user-side call quality metrics (jitter, packet loss, latency), not SBC connection status — use Health Dashboard for Direct Routing instead",
        "Call Quality Dashboard shows user-side call quality metrics (jitter, packet loss, latency), not SBC connection status — use Health Dashboard for Direct Routing instead",
        "Call Quality Dashboard shows user-side call quality metrics (jitter, packet loss, latency), not SBC connection status — use Health Dashboard for Direct Routing instead"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q88",
    "text": "Quais configurações específicas são controladas pela Política de Chamada (Calling Policy) no Teams Phone?",
    "options": [
      "Roteamento de chamadas PSTN, seleção de gateway SBC, normalização de números e política de emergência",
      "Conformidade de gravação, retenção de chamadas, transcrição automática e exportação para Purview",
      "Chamadas privadas, encaminhamento de chamadas, toque simultâneo, correio de voz, estacionamento de chamada, chamadas internacionais, delegação de chamadas e música em espera personalizada",
      "Qualidade de áudio, codec preferencial, supressão de ruído e configurações de dispositivo de áudio"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Políticas de Chamada — Configurações Detalhadas (Nível: intermediário).",
      "papoReto": "Política de chamada controla: encaminhamento externo, toque simultâneo, delegação, máscaras de chamada, roaming PSTN, redirecionar após X segundos",
      "respostaCerta": "Chamadas privadas, encaminhamento de chamadas, toque simultâneo, correio de voz, estacionamento de chamada, chamadas internacionais, delegação de chamadas e música em espera personalizada — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Política chamada = permissões granulares usuário (encaminhamento, toque, delegação)",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Política pode bloquear encaminhamento externo para controlar custos"
    }
  },
  {
    "id": "ms721_q89",
    "text": "Um executivo configura sua assistente como delegada para chamadas no Teams. Quais são as capacidades específicas que a delegada possui após essa configuração?",
    "options": [
      "Acesso completo à conta Teams do executivo incluindo mensagens, arquivos e reuniões além das chamadas",
      "Gerenciar todas as configurações de voz do executivo incluindo alteração de políticas via Teams Admin Center",
      "Apenas receber chamadas para o executivo; não pode fazer chamadas em nome do executivo por restrições de segurança",
      "Fazer chamadas em nome do executivo, receber chamadas destinadas ao executivo, ver o calendário do executivo para contexto de chamadas, gerenciar encaminhamentos e ter linha telefônica compartilhada com o executivo no cliente Teams"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Delegação de Chamadas — Avançado (Nível: avançado).",
      "papoReto": "Teams Phone é PBX gerenciado Microsoft na nuvem, core de telefonia em Teams com transferência, correio voz, auto-atendentes, filas",
      "respostaCerta": "Fazer chamadas em nome do executivo, receber chamadas destinadas ao executivo, ver o calendário do executivo para contexto de chamadas, gerenciar encaminhamentos e ter linha telefônica compartilhada com o executivo no cliente Teams — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Phone = PBX nuvem Microsoft, nome antigo Phone System, mesma coisa",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Phone System = Teams Phone (rebrand 2019) — mesma solução, apenas nome novo"
    }
  },
  {
    "id": "ms721_q90",
    "text": "Uma fila de chamada do Teams pode ser configurada para entregar chamadas a um canal de equipe em vez de usuários individuais. Quais são as vantagens e limitações dessa abordagem?",
    "options": [
      "Vantagem: visibilidade compartilhada de chamadas por todos os agentes no canal, histórico de chamadas centralizado no canal; Limitação: suporte apenas a canais padrão (não privados), limite de 200 agentes via canal e não suporta opt-out por agente",
      "Vantagem: gravação automática de todas as chamadas recebidas na fila e arquivamento em tempo de execução no canal",
      "Vantagem: roteamento automático por habilidade baseado em tags do canal; Limitação: requer licença Teams Premium para cada agente do canal",
      "Vantagem: suporte nativo para canais compartilhados com agentes externos sem federação; Limitação: limite de 50 agentes ativos"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Filas de Chamada — Integração com Teams Channel (Nível: avançado).",
      "papoReto": "E.164 é formato internacional obrigatório (+55 11 98765-4321), máscara chamada mascara origem, portabilidade numérica via LOA",
      "respostaCerta": "Vantagem: visibilidade compartilhada de chamadas por todos os agentes no canal, histórico de chamadas centralizado no canal; Limitação: suporte apenas a canais padrão (não privados), limite de 200 agentes via canal e não suporta opt-out por agente — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "E.164 = +55 11 números, obrigatório PSTN; usuário vs serviço — impacto aplicabilidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Portabilidade exige LOA, conta faturamento, números E.164, data desejada"
    }
  },
  {
    "id": "ms721_q91",
    "text": "Uma empresa deseja disponibilizar um número gratuito (toll-free) para clientes ligarem para seu Atendedor Automático no Teams. Quais requisitos são necessários para configurar esse número?",
    "options": [
      "Números toll-free são incluídos automaticamente em qualquer Calling Plan sem configuração adicional",
      "Apenas o Direct Routing suporta números toll-free; Calling Plan não oferece essa modalidade",
      "Adquirir número toll-free via Teams Admin Center ou portabilidade, atribuir Créditos de Comunicação ao tenant (obrigatório para números toll-free), associar o número à conta de recurso do Atendedor Automático",
      "Números toll-free exigem licença Teams Premium e aprovação prévia da Microsoft para ativação"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Números Toll-Free — Configuração (Nível: intermediário).",
      "papoReto": "E.164 é formato internacional obrigatório (+55 11 98765-4321), máscara chamada mascara origem, portabilidade numérica via LOA",
      "respostaCerta": "Adquirir número toll-free via Teams Admin Center ou portabilidade, atribuir Créditos de Comunicação ao tenant (obrigatório para números toll-free), associar o número à conta de recurso do Atendedor Automático — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "E.164 = +55 11 números, obrigatório PSTN; usuário vs serviço — impacto aplicabilidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Portabilidade exige LOA, conta faturamento, números E.164, data desejada"
    }
  },
  {
    "id": "ms721_q92",
    "text": "Uma organização usa proxy com inspeção TLS (SSL inspection) em toda a rede corporativa. Qual é o impacto dessa configuração no Microsoft Teams e qual a recomendação Microsoft?",
    "options": [
      "Inspeção TLS é totalmente compatível com Teams desde que o certificado do proxy seja confiável pelo sistema operacional",
      "Inspeção TLS pode causar falhas de autenticação, degradação de qualidade de mídia e problemas de conectividade Teams — a Microsoft recomenda criar exceções (bypass) para todos os endpoints do Microsoft 365/Teams na inspeção TLS",
      "Inspeção TLS melhora a segurança do Teams sem impacto de desempenho pois o Teams usa certificados pinned",
      "Teams detecta automaticamente a inspeção TLS e usa protocolo HTTP alternativo para contornar o problema"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Proxy e Inspeção TLS (Nível: avançado).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Inspeção TLS pode causar falhas de autenticação, degradação de qualidade de mídia e problemas de conectividade Teams — a Microsoft recomenda criar exceções (bypass) para todos os endpoints do Microsoft 365/Teams na inspeção TLS — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q93",
    "text": "O Microsoft Teams usa TURN servers (Transport Relay) quando conexões diretas UDP falham. Qual é o endereço e porta dos servidores TURN da Microsoft usados pelo Teams?",
    "options": [
      "Servidores TURN em Azure datacenters regionais na porta UDP 50000-50059 exclusivamente",
      "Servidores TURN em 52.120.0.0/14 na porta TCP 5061 com fallback para HTTPS na porta 443",
      "Servidores TURN proprietários da Microsoft em IPs não publicados, acessíveis apenas via cliente Teams autenticado",
      "Servidores TURN da Microsoft em 13.107.64.0/18 e outros ranges Microsoft 365, portas UDP 3478 e TCP 443 como fallback — definidos na documentação oficial de URLs e IPs do Microsoft 365"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: TURN e ICE — Teams (Nível: avançado).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Servidores TURN da Microsoft em 13.107.64.0/18 e outros ranges Microsoft 365, portas UDP 3478 e TCP 443 como fallback — definidos na documentação oficial de URLs e IPs do Microsoft 365 — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q94",
    "text": "A Microsoft define três princípios fundamentais para otimização de rede para Teams. Quais são eles?",
    "options": [
      "1) Bloquear tráfego não essencial; 2) Priorizar DNS do Microsoft 365; 3) Usar certificados corporativos para inspeção controlada",
      "1) Implementar QoS em toda a rede; 2) Usar ExpressRoute para tráfego Microsoft 365; 3) Separar VLANs por tipo de mídia",
      "1) Identificar e diferenciar o tráfego Teams (por IPs/portas/FQDNs); 2) Permitir saída local à internet sem hairpinning desnecessário; 3) Evitar inspeção desnecessária de pacotes para tráfego Teams otimizado",
      "1) Aumentar largura de banda WAN; 2) Configurar proxies regionais; 3) Implementar SD-WAN com perfil Teams"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Otimização de Rede — Princípios (Nível: intermediário).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "1) Identificar e diferenciar o tráfego Teams (por IPs/portas/FQDNs); 2) Permitir saída local à internet sem hairpinning desnecessário; 3) Evitar inspeção desnecessária de pacotes para tráfego Teams otimizado — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q95",
    "text": "Dispositivos Microsoft Teams Rooms on Android podem ser gerenciados pelo Microsoft Intune. Qual modo de gerenciamento é usado para MTR Android e quais configurações podem ser aplicadas?",
    "options": [
      "Gerenciamento direto via Teams Admin Center sem necessidade do Intune para dispositivos MTR Android",
      "Modo de administrador de dispositivo legado (Device Admin) exclusivo para MTR Android sem suporte ao Android Enterprise",
      "Modo de dispositivo dedicado (Dedicated Device) via Android Enterprise — permite aplicar políticas de configuração de dispositivo, restringir aplicativos a apenas o Teams Rooms, configurar Wi-Fi e certificados corporativos",
      "Modo BYOD (Bring Your Own Device) com perfil de trabalho Android separando dados pessoais e corporativos no MTR"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Android Management para MTR (Nível: avançado).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Modo de dispositivo dedicado (Dedicated Device) via Android Enterprise — permite aplicar políticas de configuração de dispositivo, restringir aplicativos a apenas o Teams Rooms, configurar Wi-Fi e certificados corporativos — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q96",
    "text": "Um engenheiro usa o Microsoft 365 Network Connectivity Test (connectivity.office.com) para avaliar a rede de um escritório. Quais informações o teste fornece relevantes para Teams?",
    "options": [
      "Inventário de todos os dispositivos Teams na rede com status de firmware e certificação",
      "Configuração automática de QoS nos roteadores detectados na rota até o Microsoft 365",
      "Relatório de segurança com vulnerabilidades da rede corporativa que afetam conectividade Teams",
      "Latência ao servidor Microsoft 365 mais próximo, qualidade da saída de internet (local vs. hairpin), avaliação de uso de proxy e inspeção TLS, pontuação de conectividade comparada com benchmark e recomendações específicas para melhoria"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: Microsoft 365 Connectivity Test (Nível: intermediário).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "Latência ao servidor Microsoft 365 mais próximo, qualidade da saída de internet (local vs. hairpin), avaliação de uso de proxy e inspeção TLS, pontuação de conectividade comparada com benchmark e recomendações específicas para melhoria — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q97",
    "text": "O Atendedor Automático do Teams suporta reconhecimento de voz (speech recognition) para navegação no menu. Qual é a limitação mais importante desse recurso?",
    "options": [
      "O reconhecimento de voz no Atendedor Automático funciona para navegação no menu (dizer o nome ou número da opção), mas não suporta linguagem natural complexa ou IA conversacional — é baseado em palavras-chave predefinidas",
      "Reconhecimento de voz só funciona em inglês americano; outros idiomas requerem entrada por teclado DTMF",
      "O recurso está disponível apenas com Teams Premium e requer habilitação explícita por licença adicional",
      "Reconhecimento de voz funciona apenas em chamadas internas; chamadas PSTN externas usam apenas DTMF"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Atendedor Automático — Reconhecimento de Voz (Nível: intermediário).",
      "papoReto": "Auto-atendente = IVR integrado Teams, roteamento por teclado/voz, menus customizáveis, pode transferir fila/usuário/voicemail",
      "respostaCerta": "O reconhecimento de voz no Atendedor Automático funciona para navegação no menu (dizer o nome ou número da opção), mas não suporta linguagem natural complexa ou IA conversacional — é baseado em palavras-chave predefinidas — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Auto-atendente IVR = rotas inteligentes, menu hierárquico, presença agentes inteligente",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Auto-atendente pode ter múltiplos níveis menu para roteamento complexo com efeitos sonoros"
    }
  },
  {
    "id": "ms721_q98",
    "text": "Um administrador configura um Atendedor Automático para redirecionar chamadas durante feriados nacionais para uma mensagem especial. Como os feriados são configurados no Teams Admin Center?",
    "options": [
      "Feriados são definidos nas configurações globais do Teams Admin Center e aplicados automaticamente a todos os AAs",
      "Teams Admin Center > Voz > Feriados — criar listas de feriados com datas e horários específicos, depois associar essas listas ao fluxo de chamada de feriados no Atendedor Automático",
      "Os feriados são importados automaticamente do calendário do Exchange Online da conta de recurso do AA",
      "Configurar regras de encaminhamento no Exchange Online com datas de feriados sincronizadas ao AA via Power Automate"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Feriados — Atendedor Automático (Nível: intermediário).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação site/hora/modalidade, diagnóstico proativo, Teams Admin Center centralizador",
      "respostaCerta": "Teams Admin Center > Voz > Feriados — criar listas de feriados com datas e horários específicos, depois associar essas listas ao fluxo de chamada de feriados no Atendedor Automático — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade; Poor Stream Rate < 5% aceitável, identifica degradação proativa",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Auditoria Teams Admin Center registra todas mudanças políticas — verificar logs troubleshooting"
    }
  },
  {
    "id": "ms721_q99",
    "text": "Uma organização planeja um Town Hall com 8.000 participantes internos. O administrador está preocupado com o impacto na rede corporativa. Qual tecnologia pode ser usada para distribuir o stream de vídeo eficientemente na rede interna?",
    "options": [
      "Azure CDN configurado com origem no Microsoft Stream para distribuição global do conteúdo do Town Hall",
      "Microsoft Teams Live Events com compressão H.265 que reduz automaticamente o consumo de banda em 60%",
      "eCDN (Enterprise Content Delivery Network) — soluções de parceiros certificados Microsoft que distribuem o stream de vídeo via peer-to-peer ou caching local, reduzindo tráfego WAN para grandes eventos",
      "Split tunneling de VPN para forçar tráfego de vídeo do Town Hall direto à internet sem passar pela WAN"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Transmissão de Reunião via eCDN (Nível: avançado).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "eCDN (Enterprise Content Delivery Network) — soluções de parceiros certificados Microsoft que distribuem o stream de vídeo via peer-to-peer ou caching local, reduzindo tráfego WAN para grandes eventos — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q100",
    "text": "Um administrador deseja que todas as reuniões agendadas por usuários de um departamento específico sejam gravadas automaticamente sem ação manual. Qual configuração deve ser aplicada?",
    "options": [
      "Configuração global de reunião no Teams Admin Center habilitando gravação automática para todo o tenant",
      "Power Automate com gatilho de início de reunião que aciona gravação via Microsoft Graph API",
      "Política de reunião atribuída ao grupo — habilitar \"Gravar automaticamente\" (Auto-record meetings) para que todas as reuniões iniciadas por esses usuários sejam gravadas automaticamente no OneDrive/SharePoint",
      "Política de conformidade de gravação com bot de gravação automática via parceiro certificado Microsoft"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Políticas de Reunião — Gravação Automática (Nível: intermediário).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "Política de reunião atribuída ao grupo — habilitar \"Gravar automaticamente\" (Auto-record meetings) para que todas as reuniões iniciadas por esses usuários sejam gravadas automaticamente no OneDrive/SharePoint — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q101",
    "text": "Um engenheiro projeta uma solução de Direct Routing com alta disponibilidade para uma organização com 3.000 usuários de voz. Como a redundância de SBC deve ser configurada no Teams Phone?",
    "options": [
      "Configurar múltiplos SBCs no mesmo Voice Route com prioridade e peso diferentes (Priority e Weight no New-CsOnlineVoiceRoute) — o Teams tenta o SBC de maior prioridade primeiro e faz failover automático para o próximo em caso de falha",
      "Usar dois tenants Microsoft 365 separados com Direct Routing independente e failover manual entre tenants",
      "Configurar Azure Load Balancer na frente dos SBCs com health probes SIP para distribuição automática de chamadas",
      "Implantar dois SBCs idênticos em modo ativo-ativo com balanceamento de carga DNS round-robin apontando para o mesmo FQDN"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Direct Routing — Redundância de SBC (Nível: avançado).",
      "papoReto": "Direct Routing = você gerencia SBC certificado Microsoft, máxima flexibilidade e controle troncos SIP",
      "respostaCerta": "Configurar múltiplos SBCs no mesmo Voice Route com prioridade e peso diferentes (Priority e Weight no New-CsOnlineVoiceRoute) — o Teams tenta o SBC de maior prioridade primeiro e faz failover automático para o próximo em caso de falha — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Direct Routing = seu SBC, seu controle, máxima complexidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "SBCs certificados: AudioCodes, Ribbon, Mediant, Acme/Ixia — verificar compatibilidade Microsoft"
    }
  },
  {
    "id": "ms721_q102",
    "text": "Ao registrar um SBC para Direct Routing com New-CsOnlinePSTNGateway, qual formato de FQDN é obrigatório e quais são as restrições de nomenclatura?",
    "options": [
      "O FQDN deve ser um nome DNS público resolvível, com no mínimo dois rótulos (ex.: sbc.empresa.com.br), não pode ser endereço IP, deve corresponder ao Subject Name do certificado TLS do SBC e não pode usar subdomínios do Microsoft 365",
      "Apenas FQDNs no formato sbc.teams.microsoft.com são aceitos pela Microsoft para Direct Routing",
      "O endereço IP público do SBC pode ser usado diretamente sem necessidade de FQDN DNS público",
      "O FQDN pode ser qualquer nome interno resolvível via DNS corporativo, incluindo sufixos .local e .corp"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Direct Routing — FQDN e DNS (Nível: avançado).",
      "papoReto": "Direct Routing = você gerencia SBC certificado Microsoft, máxima flexibilidade e controle troncos SIP",
      "respostaCerta": "O FQDN deve ser um nome DNS público resolvível, com no mínimo dois rótulos (ex.: sbc.empresa.com.br), não pode ser endereço IP, deve corresponder ao Subject Name do certificado TLS do SBC e não pode usar subdomínios do Microsoft 365 — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Direct Routing = seu SBC, seu controle, máxima complexidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "SBCs certificados: AudioCodes, Ribbon, Mediant, Acme/Ixia — verificar compatibilidade Microsoft"
    }
  },
  {
    "id": "ms721_q103",
    "text": "Qual é o processo para um administrador configurar o Operator Connect no Teams Admin Center com uma operadora parceira Microsoft?",
    "options": [
      "Contatar a operadora diretamente por telefone, solicitar ativação do Operator Connect e aguardar configuração manual pela operadora no backend Microsoft",
      "Teams Admin Center > Voz > Operadoras — selecionar a operadora parceira, autorizar a operadora a gerenciar números no tenant, aguardar ativação pela operadora e depois atribuir números aos usuários via Teams Admin Center",
      "Instalar aplicativo da operadora na Teams App Store e autenticar via OAuth para autorizar gerenciamento de números",
      "Abrir ticket no portal Microsoft Partner Center para que a Microsoft intermedie a configuração entre o tenant e a operadora"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Operator Connect — Onboarding (Nível: intermediário).",
      "papoReto": "Operator Connect = operadora parceira gerencia PSTN + SBC, reduz complexidade vs Direct Routing",
      "respostaCerta": "Teams Admin Center > Voz > Operadoras — selecionar a operadora parceira, autorizar a operadora a gerenciar números no tenant, aguardar ativação pela operadora e depois atribuir números aos usuários via Teams Admin Center — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Operator Connect = operadora terceira + SBC dela, meio termo entre Calling Plan e Direct Routing",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Operadora parceira gerencia PSTN e SBC por você — você configura via Teams Admin Center"
    }
  },
  {
    "id": "ms721_q104",
    "text": "Após configurar o Operator Connect, onde o administrador pode visualizar e gerenciar os números fornecidos pela operadora no Microsoft Teams?",
    "options": [
      "Portal exclusivo da operadora parceira separado do Teams Admin Center para gerenciamento de números",
      "Azure AD > Aplicativos empresariais > aplicativo da operadora > Números gerenciados",
      "Microsoft 365 Admin Center > Faturamento > Assinaturas > Números de telefone Operator Connect",
      "Teams Admin Center > Voz > Números de telefone — exibe todos os números incluindo os do Operator Connect com status, tipo e usuário/serviço atribuído"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Operator Connect — Gerenciamento de Números (Nível: intermediário).",
      "papoReto": "Operator Connect = operadora parceira gerencia PSTN + SBC, reduz complexidade vs Direct Routing",
      "respostaCerta": "Teams Admin Center > Voz > Números de telefone — exibe todos os números incluindo os do Operator Connect com status, tipo e usuário/serviço atribuído — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Operator Connect = operadora terceira + SBC dela, meio termo entre Calling Plan e Direct Routing",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Operadora parceira gerencia PSTN e SBC por você — você configura via Teams Admin Center"
    }
  },
  {
    "id": "ms721_q105",
    "text": "O que é o Shared Calling (Chamada Compartilhada) no Microsoft Teams Phone e qual problema ele resolve em termos de licenciamento?",
    "options": [
      "Shared Calling permite que múltiplos usuários compartilhem um único número de telefone e política de voz sem necessidade de licença Teams Phone individual — ideal para trabalhadores que raramente fazem chamadas PSTN, reduzindo custos de licenciamento",
      "Shared Calling é o modo de delegação onde assistentes compartilham o número do executivo sem licença adicional",
      "Shared Calling é o recurso de filas de chamada onde múltiplos agentes recebem chamadas no mesmo número",
      "Shared Calling permite que usuários sem Teams Phone façam chamadas via ramal compartilhado do Teams Rooms da sala"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Teams Phone — Licença por Usuário vs. Shared Calling (Nível: avançado).",
      "papoReto": "Teams Phone é PBX gerenciado Microsoft na nuvem, core de telefonia em Teams com transferência, correio voz, auto-atendentes, filas",
      "respostaCerta": "Shared Calling permite que múltiplos usuários compartilhem um único número de telefone e política de voz sem necessidade de licença Teams Phone individual — ideal para trabalhadores que raramente fazem chamadas PSTN, reduzindo custos de licenciamento — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Phone = PBX nuvem Microsoft, nome antigo Phone System, mesma coisa",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Phone System = Teams Phone (rebrand 2019) — mesma solução, apenas nome novo"
    }
  },
  {
    "id": "ms721_q106",
    "text": "O que é o Media Bypass no Direct Routing e qual benefício ele traz para a arquitetura de chamadas?",
    "options": [
      "Media Bypass desativa a criptografia SRTP para melhorar desempenho em redes com alta latência",
      "Media Bypass permite que o fluxo de mídia (áudio/vídeo) vá diretamente entre o cliente Teams do usuário e o SBC, sem passar pelos servidores de processamento de mídia da Microsoft — reduz latência e consumo de largura de banda WAN",
      "Media Bypass redireciona chamadas PSTN diretamente entre dois SBCs sem passar pelo Teams na nuvem",
      "Media Bypass comprime automaticamente o tráfego de mídia entre SBC e Microsoft 365 usando codecs proprietários"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Media Bypass no Direct Routing (Nível: avançado).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Media Bypass permite que o fluxo de mídia (áudio/vídeo) vá diretamente entre o cliente Teams do usuário e o SBC, sem passar pelos servidores de processamento de mídia da Microsoft — reduz latência e consumo de largura de banda WAN — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q107",
    "text": "Quais são os requisitos para habilitar o Media Bypass no Direct Routing do Teams?",
    "options": [
      "Apenas habilitar o parâmetro -MediaBypass no SBC; não há requisitos adicionais de rede ou cliente",
      "Media Bypass é habilitado automaticamente pelo Teams quando detecta latência superior a 150ms entre cliente e Microsoft 365",
      "Media Bypass requer ExpressRoute com peering privado entre o cliente Teams e o SBC corporativo",
      "SBC certificado com suporte a Media Bypass, conectividade de mídia direta entre o cliente Teams e o SBC (sem NAT restritivo), habilitar Media Bypass no gateway (Set-CsOnlinePSTNGateway -MediaBypass $true) e o cliente Teams deve suportar o recurso"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Media Bypass — Requisitos (Nível: avançado).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "SBC certificado com suporte a Media Bypass, conectividade de mídia direta entre o cliente Teams e o SBC (sem NAT restritivo), habilitar Media Bypass no gateway (Set-CsOnlinePSTNGateway -MediaBypass $true) e o cliente Teams deve suportar o recurso — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q108",
    "text": "Quais codecs de áudio o Microsoft Teams usa para chamadas e em que ordem de preferência?",
    "options": [
      "SILK e Opus são os codecs primários do Teams para chamadas internas (wideband/fullband); para interoperabilidade PSTN via Direct Routing, G.711 (PCMU/PCMA) e G.722 são negociados com o SBC via SDP",
      "Teams usa H.264 para áudio e vídeo combinados; codecs separados de áudio não são suportados nativamente",
      "Teams usa exclusivamente G.711 para todas as chamadas de áudio incluindo chamadas internas e PSTN",
      "Teams usa AAC-LC para áudio de alta qualidade e G.729 para chamadas PSTN de baixa largura de banda"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Codecs de Áudio no Teams (Nível: avançado).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "SILK e Opus são os codecs primários do Teams para chamadas internas (wideband/fullband); para interoperabilidade PSTN via Direct Routing, G.711 (PCMU/PCMA) e G.722 são negociados com o SBC via SDP — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q109",
    "text": "Um engenheiro precisa capturar e analisar pacotes de rede durante uma chamada Teams com problemas de qualidade para identificar perda de pacotes RTP. Qual abordagem deve ser utilizada?",
    "options": [
      "Captura de pacotes com Wireshark no endpoint do usuário ou switch de rede, filtrando tráfego UDP nas portas Teams (50000-50059) e analisando sequência RTP para identificar gaps de pacotes e jitter",
      "Instalar o Microsoft Network Monitor no servidor e capturar tráfego de todos os usuários simultaneamente",
      "Executar traceroute para os IPs Microsoft 365 e analisar latência por hop para identificar o ponto de perda",
      "Usar o Teams Admin Center > Call Analytics para visualizar pacotes perdidos em tempo real durante a chamada"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Resolução de Problemas de Rede — Ferramentas (Nível: intermediário).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Captura de pacotes com Wireshark no endpoint do usuário ou switch de rede, filtrando tráfego UDP nas portas Teams (50000-50059) e analisando sequência RTP para identificar gaps de pacotes e jitter — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q110",
    "text": "Como configurações avançadas de um dispositivo Microsoft Teams Rooms on Windows podem ser aplicadas de forma centralizada, como desativar Bluetooth ou configurar resolução de display?",
    "options": [
      "Via Teams Admin Center > Dispositivos > configurações avançadas de sala com interface gráfica completa",
      "Via arquivo XML de configuração (SkypeSettings.xml) implantado na pasta C:\\Users\\Skype\\AppData\\Local\\Packages\\... ou via Microsoft Intune com perfil de configuração OMA-URI para dispositivos MTR Windows",
      "Via Group Policy Objects (GPO) com templates ADMX específicos para Microsoft Teams Rooms",
      "Via PowerShell remoto conectando ao MTR Windows e executando comandos Set-CsTeamsRoomsConfiguration"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Teams Rooms — Configuração de XML (Nível: avançado).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Via arquivo XML de configuração (SkypeSettings.xml) implantado na pasta C:\\Users\\Skype\\AppData\\Local\\Packages\\... ou via Microsoft Intune com perfil de configuração OMA-URI para dispositivos MTR Windows — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q111",
    "text": "Uma conta de recurso de sala do Teams Rooms precisa aceitar reuniões automaticamente e processar solicitações de agendamento. Quais configurações do Exchange Online devem ser aplicadas à caixa de correio de recurso?",
    "options": [
      "Configurar regra de Caixa de Entrada no Outlook Web Access da conta de recurso para aceitar todos os convites automaticamente",
      "Set-CalendarProcessing -AutomateProcessing AutoAccept para aceitar automaticamente; configurar -AllowConflicts $false para evitar duplos agendamentos; -AddOrganizerToSubject $false e -DeleteComments $false para manter informações da reunião",
      "Criar Power Automate flow que monitora o calendário da sala e aceita automaticamente solicitações de reunião",
      "Ativar \"Aceitação automática de reuniões\" no Teams Admin Center > Dispositivos > configurações da conta de recurso"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: MTR — Contas de Recurso Avançado (Nível: avançado).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Set-CalendarProcessing -AutomateProcessing AutoAccept para aceitar automaticamente; configurar -AllowConflicts $false para evitar duplos agendamentos; -AddOrganizerToSubject $false e -DeleteComments $false para manter informações da reunião — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q112",
    "text": "Os headsets certificados para Microsoft Teams são classificados em diferentes categorias. Quais são essas categorias e o que as diferencia?",
    "options": [
      "Open Office (ambiente aberto com cancelamento de ruído básico), Professional (uso intensivo com supressão de ruído avançada), Home Office (uso doméstico) e Speakerphone (mãos livres para mesa) — diferenciadas por desempenho de áudio, durabilidade e caso de uso",
      "Basic (para usuários ocasionais), Standard (para uso diário) e Premium (para executivos) — baseadas no preço e qualidade de construção",
      "Wired USB (com fio certificado), Wireless Bluetooth (sem fio certificado) e Hybrid (ambos) — diferenciadas apenas por conectividade",
      "Categoria A (apenas áudio), Categoria B (áudio e microfone) e Categoria C (áudio, microfone e câmera integrada)"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Certificação de Headsets — Categorias (Nível: intermediário).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Open Office (ambiente aberto com cancelamento de ruído básico), Professional (uso intensivo com supressão de ruído avançada), Home Office (uso doméstico) e Speakerphone (mãos livres para mesa) — diferenciadas por desempenho de áudio, durabilidade e caso de uso — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q113",
    "text": "Um engenheiro de comunicações é responsável por relatório semanal de qualidade de chamadas Teams. Quais métricas do CQD devem ser incluídas como indicadores-chave de desempenho (KPIs)?",
    "options": [
      "Consumo de largura de banda por site, utilização de CPU dos SBCs e número de chamadas simultâneas por gateway",
      "Número total de chamadas realizadas, minutos de uso PSTN, custo por chamada e satisfação do usuário via NPS",
      "Uptime do serviço Teams, número de tickets de suporte abertos e tempo médio de resolução de incidentes",
      "Taxa de streams ruins (Poor Stream Rate) por modalidade, Poor Stream Rate por localização/site, tendência de qualidade semana a semana, top 10 usuários com mais streams ruins e taxa de streams ruins por tipo de dispositivo"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: Relatório de Qualidade Semanal (Nível: intermediário).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "Taxa de streams ruins (Poor Stream Rate) por modalidade, Poor Stream Rate por localização/site, tendência de qualidade semana a semana, top 10 usuários com mais streams ruins e taxa de streams ruins por tipo de dispositivo — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q114",
    "text": "Após uma chamada Teams, os usuários podem avaliar a qualidade. Como o administrador pode analisar essas avaliações de forma agregada e correlacioná-las com dados técnicos?",
    "options": [
      "No CQD, a dimensão \"UserFeedbackRatingMax\" captura avaliações de usuários (Rate My Call) que podem ser correlacionadas com métricas técnicas de qualidade para identificar discrepâncias entre percepção e dados objetivos",
      "Microsoft Forms coleta automaticamente avaliações pós-chamada e gera relatório no Teams Admin Center",
      "Viva Insights agrega avaliações de qualidade de reuniões e as correlaciona com métricas de produtividade do usuário",
      "Power BI com conector Dynamics 365 Customer Service integra avaliações de chamadas com tickets de suporte correlacionados"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: Feedback de Qualidade de Chamada (Nível: intermediário).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "No CQD, a dimensão \"UserFeedbackRatingMax\" captura avaliações de usuários (Rate My Call) que podem ser correlacionadas com métricas técnicas de qualidade para identificar discrepâncias entre percepção e dados objetivos — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q115",
    "text": "Usuários em um escritório reclamam de qualidade ruim em chamadas Teams apenas quando conectados via Wi-Fi. O Per-user Call Analytics mostra alto jitter e perda de pacotes. Quais são as causas mais prováveis e como diagnosticar?",
    "options": [
      "Problema de MTU na rede cabeada upstream do AP causando fragmentação de pacotes UDP do Teams",
      "Configuração de proxy automático (PAC file) interferindo com resolução DNS dos endpoints Teams no Wi-Fi",
      "Versão desatualizada do driver Wi-Fi no dispositivo causando incompatibilidade com protocolo DTLS do Teams",
      "Interferência de canal Wi-Fi, roaming inadequado entre APs, capacidade insuficiente do AP e power management do adaptador — diagnosticar com analisador de espectro Wi-Fi, verificar SNR, taxa de retransmissão e separar SSID de voz em banda 5GHz com QoS WMM habilitado"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: Troubleshooting — Wi-Fi (Nível: avançado).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "Interferência de canal Wi-Fi, roaming inadequado entre APs, capacidade insuficiente do AP e power management do adaptador — diagnosticar com analisador de espectro Wi-Fi, verificar SNR, taxa de retransmissão e separar SSID de voz em banda 5GHz com QoS WMM habilitado — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q116",
    "text": "Um usuário reporta que as pessoas na outra ponta da chamada ouvem eco da própria voz. O problema persiste em diferentes chamadas e locais. Qual é a causa mais provável e como resolver?",
    "options": [
      "O dispositivo de áudio do usuário (fone ou speakerphone) não está cancelando o eco adequadamente — verificar se está usando dispositivo certificado Teams, testar com headset diferente, verificar configurações de supressão de eco no cliente Teams e garantir que não está usando alto-falante e microfone abertos simultaneamente",
      "Configuração incorreta de SRTP no SBC de Direct Routing causando duplicação de pacotes de áudio",
      "Problema de latência de rede alta causando atraso que o cérebro interpreta como eco — aumentar largura de banda resolve",
      "Bug no cliente Teams que duplica streams de áudio — atualizar para versão mais recente resolve o problema"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: Troubleshooting — Eco em Chamadas (Nível: intermediário).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "O dispositivo de áudio do usuário (fone ou speakerphone) não está cancelando o eco adequadamente — verificar se está usando dispositivo certificado Teams, testar com headset diferente, verificar configurações de supressão de eco no cliente Teams e garantir que não está usando alto-falante e microfone abertos simultaneamente — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q117",
    "text": "Uma empresa multinacional tem escritórios no Brasil e EUA usando Direct Routing. Usuários no Brasil devem usar o SBC local para chamadas domésticas e o SBC dos EUA para chamadas internacionais para a América do Norte. Como esse roteamento deve ser configurado?",
    "options": [
      "Usar um único Voice Route com múltiplos SBCs e deixar o Teams selecionar automaticamente por menor latência",
      "Criar Dial Plans com regras de normalização que redirecionam chamadas para SBCs diferentes baseados no prefixo discado",
      "Configurar Location-Based Routing que automaticamente seleciona o SBC mais próximo baseado na localização IP do usuário",
      "Criar PSTN Usages separados para Brasil e América do Norte, criar Voice Routes com padrões de número específicos (^\\\\+55 para Brasil, ^\\\\+1 para América do Norte) apontando para SBCs respectivos, e criar Voice Routing Policies combinando os usages para usuários brasileiros"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Roteamento de Voz — Cenários Complexos (Nível: avançado).",
      "papoReto": "Direct Routing = você gerencia SBC certificado Microsoft, máxima flexibilidade e controle troncos SIP",
      "respostaCerta": "Criar PSTN Usages separados para Brasil e América do Norte, criar Voice Routes com padrões de número específicos (^\\\\+55 para Brasil, ^\\\\+1 para América do Norte) apontando para SBCs respectivos, e criar Voice Routing Policies combinando os usages para usuários brasileiros — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Direct Routing = seu SBC, seu controle, máxima complexidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "SBCs certificados: AudioCodes, Ribbon, Mediant, Acme/Ixia — verificar compatibilidade Microsoft"
    }
  },
  {
    "id": "ms721_q118",
    "text": "Uma empresa precisa manter seu PBX Cisco legado funcionando em paralelo com o Teams Phone durante uma migração gradual. Como a interoperabilidade entre o PBX Cisco e o Teams pode ser configurada?",
    "options": [
      "Configurar federação SIP direta entre o PBX Cisco e o Teams usando protocolo SIP padrão sem SBC intermediário",
      "Usar um SBC como gateway de interoperabilidade entre o PBX Cisco (via SIP trunk ou ISDN) e o Teams Phone via Direct Routing — o SBC transcodifica protocolos e roteia chamadas entre os dois sistemas durante a coexistência",
      "Instalar o cliente Teams nos ramais Cisco para que funcionem como endpoints Teams nativos sem modificações",
      "Usar o Microsoft Teams Connector para Cisco disponível na Teams App Store para integração plug-and-play"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Interoperabilidade — SIP Legacy (Nível: avançado).",
      "papoReto": "Teams Phone é PBX gerenciado Microsoft na nuvem, core de telefonia em Teams com transferência, correio voz, auto-atendentes, filas",
      "respostaCerta": "Usar um SBC como gateway de interoperabilidade entre o PBX Cisco (via SIP trunk ou ISDN) e o Teams Phone via Direct Routing — o SBC transcodifica protocolos e roteia chamadas entre os dois sistemas durante a coexistência — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Phone = PBX nuvem Microsoft, nome antigo Phone System, mesma coisa",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Phone System = Teams Phone (rebrand 2019) — mesma solução, apenas nome novo"
    }
  },
  {
    "id": "ms721_q119",
    "text": "Durante a migração do Skype for Business On-Premises com Enterprise Voice para o Teams Phone, qual é a abordagem recomendada para migrar usuários de voz sem interrupção de serviço?",
    "options": [
      "Migração em fases: 1) Configurar Direct Routing no Teams com mesmo SBC do SfB; 2) Mover usuários em lotes pequenos com Move-CsUser para TeamsOnly; 3) Verificar funcionalidade de voz de cada lote antes de prosseguir; 4) Manter SfB On-Premises até todos os usuários migrados",
      "Migrar todos os usuários simultaneamente em um único fim de semana para minimizar o período de coexistência",
      "Usar o Teams Migration Tool da Microsoft para migração automática de configurações de voz do SfB para o Teams",
      "Desligar o Skype for Business primeiro e aguardar que os usuários se cadastrem automaticamente no Teams Phone"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Migração Skype for Business — Voz (Nível: avançado).",
      "papoReto": "E.164 é formato internacional obrigatório (+55 11 98765-4321), máscara chamada mascara origem, portabilidade numérica via LOA",
      "respostaCerta": "Migração em fases: 1) Configurar Direct Routing no Teams com mesmo SBC do SfB; 2) Mover usuários em lotes pequenos com Move-CsUser para TeamsOnly; 3) Verificar funcionalidade de voz de cada lote antes de prosseguir; 4) Manter SfB On-Premises até todos os usuários migrados — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "E.164 = +55 11 números, obrigatório PSTN; usuário vs serviço — impacto aplicabilidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Portabilidade exige LOA, conta faturamento, números E.164, data desejada"
    }
  },
  {
    "id": "ms721_q120",
    "text": "Um engenheiro precisa criar uma política de reunião restritiva para usuários externos convidados, impedindo gravação, compartilhamento de tela e ativação de câmera. Qual é a abordagem correta?",
    "options": [
      "Aplicar rótulo de sensibilidade \"Externo\" que automaticamente restringe essas funcionalidades em reuniões com convidados",
      "Configurar política de acesso condicional bloqueando gravação e compartilhamento para contas externas no Azure AD",
      "Desativar essas funcionalidades nas configurações globais de toda a organização para todos os usuários indiscriminadamente",
      "Criar uma nova política de reunião personalizada com gravação desativada, compartilhamento de tela desativado e vídeo IP desativado, depois atribuí-la especificamente aos usuários ou grupo que recebe convidados externos"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Política de Reunião — Completo (Nível: intermediário).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "Criar uma nova política de reunião personalizada com gravação desativada, compartilhamento de tela desativado e vídeo IP desativado, depois atribuí-la especificamente aos usuários ou grupo que recebe convidados externos — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q121",
    "text": "Um administrador precisa analisar o consumo de minutos de audioconferência por usuário para otimizar gastos com Créditos de Comunicação. Qual relatório fornece essa visibilidade?",
    "options": [
      "Power BI com conector de faturamento Microsoft 365 mostrando consumo de audioconferência por departamento",
      "Microsoft 365 Admin Center > Faturamento > Créditos de Comunicação > Relatório de consumo por usuário",
      "Teams Admin Center > Análise e relatórios > Relatórios de uso > Uso de PSTN e SMS — filtrando por tipo de chamada \"Conference call\" com detalhes por usuário, duração e destino",
      "Exchange Admin Center > Relatórios > Reuniões de audioconferência com minutos consumidos por caixa de correio"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Audioconferência — Relatórios de Uso (Nível: intermediário).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "Teams Admin Center > Análise e relatórios > Relatórios de uso > Uso de PSTN e SMS — filtrando por tipo de chamada \"Conference call\" com detalhes por usuário, duração e destino — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q122",
    "text": "Um administrador recebe reclamações de que participantes que ligam por telefone para reuniões Teams não ouvem músicas de espera enquanto aguardam o início. Como corrigir isso?",
    "options": [
      "Teams Admin Center > Reuniões > Pontes de conferência > Editar configurações da ponte — habilitar \"Tocar música para participantes em espera antes do início da reunião\"",
      "Habilitar música em espera na política de reunião individual dos organizadores que usam audioconferência",
      "Configurar política de chamada com música em espera habilitada e aplicar à conta de recurso da ponte de conferência",
      "Criar Atendedor Automático com música de espera na frente da ponte de conferência para gerenciar participantes em espera"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Configurações de Ponte de Conferência (Nível: avançado).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "Teams Admin Center > Reuniões > Pontes de conferência > Editar configurações da ponte — habilitar \"Tocar música para participantes em espera antes do início da reunião\" — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q123",
    "text": "Uma empresa implementa hot desking onde funcionários usam diferentes mesas a cada dia. Como os telefones IP Teams podem suportar esse modelo de trabalho?",
    "options": [
      "Usar Microsoft Intune para atribuir perfis dinâmicos baseados no usuário logado no Windows do computador próximo",
      "Configurar todos os telefones como telefones de área comum compartilhados com número único do departamento",
      "Configurar os telefones como Hot Desk phones no Teams Admin Center — usuários fazem login com suas credenciais Microsoft 365 no telefone e saem ao terminar, tendo acesso temporário ao seu próprio número e configurações",
      "Instalar múltiplas contas de usuário em cada telefone e criar atalhos físicos de troca rápida de perfil"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Hot Desking — Telefones Teams (Nível: intermediário).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Configurar os telefones como Hot Desk phones no Teams Admin Center — usuários fazem login com suas credenciais Microsoft 365 no telefone e saem ao terminar, tendo acesso temporário ao seu próprio número e configurações — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q124",
    "text": "Um administrador deseja que o Microsoft Teams Rooms entre automaticamente em reuniões agendadas 5 minutos antes do horário de início sem necessidade de ação manual. Como configurar isso?",
    "options": [
      "Configurar Power Automate flow que envia comando de ingresso automático ao MTR 5 minutos antes de cada reunião",
      "Habilitar \"Ingresso antecipado automático\" na política de reunião do organizador para todas as salas da organização",
      "No arquivo SkypeSettings.xml ou via Teams Admin Center > configurações de dispositivo — habilitar ingresso automático em reuniões (AutoAccept) e configurar o tempo de antecipação (BeforeMeetingDuration) para 5 minutos",
      "Criar regra de calendário no Exchange Online que aciona o MTR automaticamente baseado no horário da reunião"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Teams Rooms — Configurações de Reunião (Nível: intermediário).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "No arquivo SkypeSettings.xml ou via Teams Admin Center > configurações de dispositivo — habilitar ingresso automático em reuniões (AutoAccept) e configurar o tempo de antecipação (BeforeMeetingDuration) para 5 minutos — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q125",
    "text": "Uma organização deseja exibir no Teams Panel a ocupação real da sala em tempo real, mostrando se há pessoas presentes mesmo sem reunião agendada. Qual tecnologia viabiliza isso?",
    "options": [
      "Sensores de presença/ocupação certificados integrados ao Teams Rooms via API de sensor de espaço do Microsoft Places — detectam presença física e atualizam o status da sala em tempo real no Teams Panel e no sistema de reservas",
      "Câmera do Teams Rooms com detecção de movimento configurada para sinalizar ocupação automaticamente",
      "Sensor de CO2 conectado ao Azure IoT Hub com integração via Power Automate ao Teams Panel",
      "Sistema de controle de acesso por crachá integrado ao Exchange Online para rastrear entrada e saída da sala"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Salas Inteligentes — Sensor de Ocupação (Nível: avançado).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Sensores de presença/ocupação certificados integrados ao Teams Rooms via API de sensor de espaço do Microsoft Places — detectam presença física e atualizam o status da sala em tempo real no Teams Panel e no sistema de reservas — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q126",
    "text": "Um SBC está configurado com capacidade máxima de 100 sessões SIP simultâneas. Como o administrador pode monitorar e evitar sobrecarga desse SBC?",
    "options": [
      "Habilitar throttling automático de chamadas no Azure Front Door na frente do SBC para proteção contra sobrecarga",
      "Monitorar o Health Dashboard for Direct Routing que mostra sessões ativas por SBC; configurar alertas no Teams Admin Center; verificar logs do SBC para contagem de sessões e implementar múltiplos SBCs com distribuição de carga via peso na Voice Route",
      "Usar Azure Monitor com alerta baseado em métrica de sessões SIP que bloqueia novas chamadas quando limite é atingido",
      "Configurar limitação de chamadas simultâneas por usuário na política de chamada para nunca exceder a capacidade do SBC"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Política de Voz — Usuários Simultâneos (Nível: avançado).",
      "papoReto": "Direct Routing = você gerencia SBC certificado Microsoft, máxima flexibilidade e controle troncos SIP",
      "respostaCerta": "Monitorar o Health Dashboard for Direct Routing que mostra sessões ativas por SBC; configurar alertas no Teams Admin Center; verificar logs do SBC para contagem de sessões e implementar múltiplos SBCs com distribuição de carga via peso na Voice Route — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Direct Routing = seu SBC, seu controle, máxima complexidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "SBCs certificados: AudioCodes, Ribbon, Mediant, Acme/Ixia — verificar compatibilidade Microsoft"
    }
  },
  {
    "id": "ms721_q127",
    "text": "Um engenheiro carregou dados de edifício no CQD e agora quer criar um relatório que mostre a qualidade de chamadas segmentada por andar de um edifício específico. Quais campos do arquivo de dados de edifício permitem essa granularidade?",
    "options": [
      "A granularidade por andar requer integração com Azure Maps e configuração de geofences por coordenadas GPS",
      "Apenas endereço IP individual pode ser mapeado a andares; sub-redes inteiras são sempre agrupadas por edifício",
      "O CQD não suporta granularidade por andar; o mínimo é por edifício completo usando o campo BuildingName",
      "O arquivo de dados de edifício (building data) suporta campos de sub-rede, nome de edifício, cidade, país e campos personalizados como andar (floor) e ala (wing) — mapeando sub-redes específicas a localizações granulares dentro do edifício"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Relatórios de Localização de Rede (Nível: avançado).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "O arquivo de dados de edifício (building data) suporta campos de sub-rede, nome de edifício, cidade, país e campos personalizados como andar (floor) e ala (wing) — mapeando sub-redes específicas a localizações granulares dentro do edifício — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "Call Quality Dashboard shows user-side call quality metrics (jitter, packet loss, latency), not SBC connection status — use Health Dashboard for Direct Routing instead"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q128",
    "text": "No CQD, um engenheiro compara streams classificados como \"Inside\" (dentro da rede corporativa) com \"Outside\" (fora da rede) para um site específico. O que indica quando os streams Inside têm qualidade pior que os Outside?",
    "options": [
      "Problema nos headsets e dispositivos dos usuários corporativos que estão desconfigurados ou sem driver de áudio atualizado",
      "Problema no SBC local ou no provedor ISP — indica que a conexão PSTN está degradada afetando chamadas internas",
      "Problema na rede interna do site — possíveis causas incluem switch/AP com problemas de qualidade, ausência de QoS na rede local, congestionamento interno ou equipamentos com defeito no segmento de rede local",
      "Problema geral nos servidores do Microsoft 365 — afeta o processamento de áudio/vídeo em tempo real para todo o tenant"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Análise de Inside vs. Outside (Nível: avançado).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Problema na rede interna do site — possíveis causas incluem switch/AP com problemas de qualidade, ausência de QoS na rede local, congestionamento interno ou equipamentos com defeito no segmento de rede local — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q129",
    "text": "No CQD, um engenheiro observa que grande parte das chamadas de um site usa TCP em vez de UDP para transporte de mídia. Por que isso acontece e qual é o impacto na qualidade?",
    "options": [
      "O uso de TCP indica que os usuários estão em VPN corporativa que encapsula todo tráfego em TCP obrigatoriamente",
      "TCP é usado apenas para chamadas PSTN via Direct Routing; chamadas internas sempre usam UDP independentemente",
      "TCP é usado como fallback quando UDP está bloqueado por firewall ou proxy — TCP introduz retransmissões que aumentam latência e jitter, degradando qualidade de voz; a solução é abrir portas UDP 50000-50059 e 3478 no firewall corporativo",
      "TCP oferece melhor qualidade que UDP para voz pois garante entrega de pacotes sem perda, sendo preferido pelo Teams"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Análise de Transporte — UDP vs TCP (Nível: avançado).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "TCP é usado como fallback quando UDP está bloqueado por firewall ou proxy — TCP introduz retransmissões que aumentam latência e jitter, degradando qualidade de voz; a solução é abrir portas UDP 50000-50059 e 3478 no firewall corporativo — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q130",
    "text": "No CQD, a dimensão \"Connectivity Ice\" mostra valores como \"Direct\", \"Relay\" e \"Failed\". O que cada valor indica sobre a conectividade de mídia?",
    "options": [
      "Direct = mídia flui diretamente entre endpoints sem relay (ideal); Relay = mídia passa pelos servidores TURN da Microsoft (indica NAT restritivo ou firewall bloqueando UDP direto); Failed = não foi possível estabelecer conectividade de mídia (chamada falhou)",
      "Direct = usuário na mesma sub-rede; Relay = usuário em sub-rede diferente; Failed = usuário desconectado",
      "Direct = chamada interna sem PSTN; Relay = chamada via Direct Routing; Failed = chamada PSTN com erro SIP",
      "Direct = conexão cabeada; Relay = conexão Wi-Fi; Failed = sem conectividade de rede detectada"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Análise de Relay vs. Direct (Nível: avançado).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Direct = mídia flui diretamente entre endpoints sem relay (ideal); Relay = mídia passa pelos servidores TURN da Microsoft (indica NAT restritivo ou firewall bloqueando UDP direto); Failed = não foi possível estabelecer conectividade de mídia (chamada falhou) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q131",
    "text": "Um MTR Windows em uma sala remota está com problemas de áudio durante reuniões. O engenheiro precisa diagnosticar sem ir presencialmente à sala. Quais ferramentas de diagnóstico remoto estão disponíveis?",
    "options": [
      "Azure Bastion para acesso seguro ao MTR Windows via portal Azure sem necessidade de VPN corporativa",
      "Teams Admin Center > Call Analytics da conta de recurso da sala para ver métricas de áudio em tempo real",
      "Microsoft Intune Remote Assistance para controle remoto do MTR Windows com suporte ao usuário presencial na sala",
      "Teams Admin Center > Dispositivos > selecionar MTR > histórico de saúde e logs; Teams Rooms Pro Management Portal para diagnóstico avançado; acesso remoto via Windows Remote Desktop (se habilitado na política); logs do MTR exportáveis pelo portal de gerenciamento"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Teams Rooms — Diagnóstico Remoto (Nível: avançado).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Teams Admin Center > Dispositivos > selecionar MTR > histórico de saúde e logs; Teams Rooms Pro Management Portal para diagnóstico avançado; acesso remoto via Windows Remote Desktop (se habilitado na política); logs do MTR exportáveis pelo portal de gerenciamento — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q132",
    "text": "O que são \"barras de colaboração\" (Collaboration Bars) certificadas para Microsoft Teams e para quais espaços são mais adequadas?",
    "options": [
      "Monitores interativos de grande formato com Teams Rooms integrado para salas de treinamento e auditórios",
      "Dispositivos portáteis para uso pessoal em home office com suporte completo ao Microsoft Teams Rooms",
      "Dispositivos all-in-one compactos com câmera, microfone e alto-falante integrados numa única unidade montável em parede ou mesa — ideais para salas pequenas (huddle rooms) de 2 a 5 pessoas com custo e complexidade de instalação reduzidos",
      "Sistemas modulares de alta performance para salas grandes de conferência com até 20 participantes presenciais"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Barras de Colaboração — Huddle Rooms (Nível: intermediário).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Dispositivos all-in-one compactos com câmera, microfone e alto-falante integrados numa única unidade montável em parede ou mesa — ideais para salas pequenas (huddle rooms) de 2 a 5 pessoas com custo e complexidade de instalação reduzidos — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q133",
    "text": "Um administrador deseja permitir que usuários gravem chamadas 1:1 e em grupo, mas apenas armazenem gravações por 60 dias antes de exclusão automática. Como implementar esse ciclo de vida de gravações?",
    "options": [
      "Configurar no Teams Admin Center um limite de retenção de gravações de 60 dias nas configurações globais de chamada",
      "Definir cota de armazenamento de 60 dias no OneDrive que automaticamente elimina arquivos mais antigos por FIFO",
      "Criar Power Automate flow que verifica e exclui gravações mais antigas que 60 dias no OneDrive dos usuários",
      "Habilitar gravação de chamadas na política de chamada; configurar política de retenção no Microsoft Purview aplicada ao OneDrive/SharePoint com exclusão automática após 60 dias para o tipo de conteúdo de gravações do Teams"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Gravação de Chamadas — Política (Nível: intermediário).",
      "papoReto": "E.164 é formato internacional obrigatório (+55 11 98765-4321), máscara chamada mascara origem, portabilidade numérica via LOA",
      "respostaCerta": "Habilitar gravação de chamadas na política de chamada; configurar política de retenção no Microsoft Purview aplicada ao OneDrive/SharePoint com exclusão automática após 60 dias para o tipo de conteúdo de gravações do Teams — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "E.164 = +55 11 números, obrigatório PSTN; usuário vs serviço — impacto aplicabilidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Portabilidade exige LOA, conta faturamento, números E.164, data desejada"
    }
  },
  {
    "id": "ms721_q134",
    "text": "Em um ambiente híbrido onde alguns usuários estão no Skype for Business On-Premises e outros no Teams Online, como chamadas entre esses dois grupos são roteadas?",
    "options": [
      "Usuários SfB On-Premises e Teams Online se comunicam exclusivamente via e-mail até a migração completa para Teams",
      "Chamadas são automaticamente roteadas pelo Microsoft 365 sem configuração adicional quando o Azure AD Connect está ativo",
      "Não há suporte para chamadas diretas entre SfB On-Premises e Teams Online; todos devem ser migrados para Teams antes",
      "Chamadas entre usuários SfB On-Premises e Teams Online são roteadas via infraestrutura híbrida — requer configuração de OAuth entre SfB e Azure AD, e o servidor de mediação SfB pode rotear chamadas PSTN para usuários Teams via Direct Routing compartilhado"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Teams Phone — Usuários Híbridos (Nível: avançado).",
      "papoReto": "E.164 é formato internacional obrigatório (+55 11 98765-4321), máscara chamada mascara origem, portabilidade numérica via LOA",
      "respostaCerta": "Chamadas entre usuários SfB On-Premises e Teams Online são roteadas via infraestrutura híbrida — requer configuração de OAuth entre SfB e Azure AD, e o servidor de mediação SfB pode rotear chamadas PSTN para usuários Teams via Direct Routing compartilhado — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "E.164 = +55 11 números, obrigatório PSTN; usuário vs serviço — impacto aplicabilidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Portabilidade exige LOA, conta faturamento, números E.164, data desejada"
    }
  },
  {
    "id": "ms721_q135",
    "text": "Um engenheiro configura alertas de qualidade de chamadas no Teams Admin Center. Quais tipos de alertas relacionados a qualidade de chamadas podem ser configurados nativamente?",
    "options": [
      "Alertas de uso de licença e capacidade de armazenamento; métricas de qualidade não geram alertas nativos no Teams Admin Center",
      "Apenas alertas de disponibilidade de serviço Teams; alertas de qualidade de chamada específicos requerem licença Premium",
      "Alertas de segurança e conformidade apenas; qualidade de chamadas é monitorada exclusivamente via CQD sem alertas",
      "Alertas de qualidade de chamadas com threshold de Poor Stream Rate por período, alertas de dispositivos offline (Teams Rooms, telefones IP), alertas de Direct Routing (SBC offline, degradação de conectividade) e alertas de uso de PSTN"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: Alertas de Qualidade — Configuração Avançada (Nível: avançado).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "Alertas de qualidade de chamadas com threshold de Poor Stream Rate por período, alertas de dispositivos offline (Teams Rooms, telefones IP), alertas de Direct Routing (SBC offline, degradação de conectividade) e alertas de uso de PSTN — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "Call Quality Dashboard shows user-side call quality metrics (jitter, packet loss, latency), not SBC connection status — use Health Dashboard for Direct Routing instead"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q136",
    "text": "Uma organização deseja integrar dados do CQD com seu SIEM corporativo (Azure Sentinel/Microsoft Sentinel) para correlacionar problemas de qualidade com eventos de segurança de rede. Como essa integração pode ser realizada?",
    "options": [
      "Exportar dados do CQD via CQD Power BI connector ou Microsoft Graph API, processar via Azure Data Factory ou Power Automate e ingerir no Microsoft Sentinel via workspace Log Analytics com conector de dados customizado",
      "Configurar Diagnostic Settings no Teams Admin Center para enviar logs do CQD diretamente ao Log Analytics",
      "Instalar o agente Log Analytics no SBC para capturar métricas de qualidade SIP diretamente no Sentinel",
      "O CQD possui conector nativo para Microsoft Sentinel disponível na galeria de conectores do Sentinel"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: Integração CQD com SIEM (Nível: avançado).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "Exportar dados do CQD via CQD Power BI connector ou Microsoft Graph API, processar via Azure Data Factory ou Power Automate e ingerir no Microsoft Sentinel via workspace Log Analytics com conector de dados customizado — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "Call Quality Dashboard shows user-side call quality metrics (jitter, packet loss, latency), not SBC connection status — use Health Dashboard for Direct Routing instead",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "Microsoft Sentinel is a security/SIEM tool, not a phone system monitoring dashboard — it's not designed for tracking SBC connectivity or voice quality"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q137",
    "text": "Uma fila de chamada do Teams está configurada com limite máximo de 50 chamadas em espera. O que acontece quando a 51ª chamada tenta entrar na fila e quais são as opções de destino de estouro configuráveis?",
    "options": [
      "A chamada é automaticamente colocada em uma fila de overflow secundária criada dinamicamente pelo Teams",
      "A 51ª chamada aciona a ação de estouro (Overflow action) configurada — opções incluem desconectar a chamada, redirecionar para número externo, para outro AA ou fila, para correio de voz de usuário/grupo ou reproduzir mensagem de indisponibilidade",
      "A chamada é rejeitada com sinal de ocupado e o chamador recebe SMS automático com horário estimado de disponibilidade",
      "O sistema coloca a chamada em espera infinita e notifica o supervisor via Teams que o limite foi atingido"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Fila de Chamada — Configurações de Estouro (Nível: avançado).",
      "papoReto": "Fila = buffer chamadas entrantes, música espera, presença agentes automática, roteamento (FIFO/Longest Idle), relatórios perdidas",
      "respostaCerta": "A 51ª chamada aciona a ação de estouro (Overflow action) configurada — opções incluem desconectar a chamada, redirecionar para número externo, para outro AA ou fila, para correio de voz de usuário/grupo ou reproduzir mensagem de indisponibilidade — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Fila = múltiplos agentes, FIFO + Longest Idle, presença automática, timeout/redirecionamento",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Longest Idle distribui para agente menos ocupado — combinar FIFO + Longest Idle reduz espera"
    }
  },
  {
    "id": "ms721_q138",
    "text": "Ao configurar saudações e mensagens em um Atendedor Automático do Teams, quais são as opções disponíveis para o conteúdo de áudio?",
    "options": [
      "Apenas TTS com voz padrão em inglês americano; outros idiomas requerem upload de arquivo gravado manualmente",
      "Texto para voz (TTS — Text-to-Speech) digitando o texto diretamente no portal com seleção de idioma e voz; upload de arquivo de áudio gravado (MP3, WAV, WMA); ou gravação via chamada telefônica diretamente no sistema",
      "Apenas upload de arquivo de áudio MP3; texto para voz não é suportado nativamente no Atendedor Automático",
      "Apenas gravação via chamada telefônica; upload de arquivo e TTS são exclusivos do plano Teams Premium"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Atendedor Automático — TTS (Nível: intermediário).",
      "papoReto": "Teams Phone é PBX gerenciado Microsoft na nuvem, core de telefonia em Teams com transferência, correio voz, auto-atendentes, filas",
      "respostaCerta": "Texto para voz (TTS — Text-to-Speech) digitando o texto diretamente no portal com seleção de idioma e voz; upload de arquivo de áudio gravado (MP3, WAV, WMA); ou gravação via chamada telefônica diretamente no sistema — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Phone = PBX nuvem Microsoft, nome antigo Phone System, mesma coisa",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Phone System = Teams Phone (rebrand 2019) — mesma solução, apenas nome novo"
    }
  },
  {
    "id": "ms721_q139",
    "text": "Um engenheiro recebe reclamação de que uma reunião específica do Teams ontem teve problemas de qualidade de vídeo para todos os participantes. Qual é a ferramenta mais adequada para investigar essa reunião específica?",
    "options": [
      "Microsoft Stream > Analytics do vídeo gravado da reunião para verificar qualidade de reprodução pós-evento",
      "CQD com filtro de data e hora da reunião específica para ver métricas agregadas de qualidade de vídeo",
      "Per-user Call Analytics no Teams Admin Center — localizar a reunião no histórico de chamadas do organizador, selecionar a reunião e analisar métricas de qualidade de vídeo (resolução, frame rate, jitter de vídeo) por participante",
      "Microsoft 365 Admin Center > Relatórios > Reuniões > selecionar reunião por ID para ver detalhes de qualidade"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Relatório de Qualidade de Reuniões — Administrador (Nível: intermediário).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "Per-user Call Analytics no Teams Admin Center — localizar a reunião no histórico de chamadas do organizador, selecionar a reunião e analisar métricas de qualidade de vídeo (resolução, frame rate, jitter de vídeo) por participante — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "Call Quality Dashboard shows user-side call quality metrics (jitter, packet loss, latency), not SBC connection status — use Health Dashboard for Direct Routing instead",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q140",
    "text": "Um engenheiro precisa limitar o bitrate de vídeo em reuniões para usuários em filiais com largura de banda WAN restrita, sem afetar usuários da sede. Como implementar isso de forma granular?",
    "options": [
      "Criar política de reunião personalizada com \"Media bit rate (Kbs)\" reduzido (ex.: 500 Kbps) e atribuir apenas aos usuários das filiais afetadas via Grant-CsTeamsMeetingPolicy ou atribuição em grupo no Teams Admin Center",
      "Configurar QoS no roteador da filial para limitar banda de portas Teams sem necessidade de política específica",
      "Criar sub-rede separada para usuários da filial e aplicar política de rede com limitação de banda no Teams Admin Center",
      "Habilitar modo de economia de dados no cliente Teams Desktop de cada usuário da filial individualmente"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Políticas de Reunião — Largura de Banda (Nível: avançado).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "Criar política de reunião personalizada com \"Media bit rate (Kbs)\" reduzido (ex.: 500 Kbps) e atribuir apenas aos usuários das filiais afetadas via Grant-CsTeamsMeetingPolicy ou atribuição em grupo no Teams Admin Center — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q141",
    "text": "O que é uma \"Máscara de Número de Emergência\" (Emergency Number Mask) na Política de Chamada de Emergência do Teams e quando é usada?",
    "options": [
      "Redireciona chamadas de emergência para uma central de segurança corporativa antes de encaminhar ao PSAP público",
      "Permite que usuários discam um número alternativo (ex.: 112 na Europa ou 000 na Austrália) que é convertido para o número de emergência local padrão (ex.: 911 nos EUA) — útil para funcionários de outros países que podem discar o número de emergência do seu país natal",
      "Mascara o número real do chamador nas chamadas de emergência para proteger a privacidade do funcionário",
      "Substitui o número de exibição do usuário pelo número do PSAP local durante chamadas de emergência"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Número de Emergência — Máscara (Nível: avançado).",
      "papoReto": "E.164 é formato internacional obrigatório (+55 11 98765-4321), máscara chamada mascara origem, portabilidade numérica via LOA",
      "respostaCerta": "Permite que usuários discam um número alternativo (ex.: 112 na Europa ou 000 na Austrália) que é convertido para o número de emergência local padrão (ex.: 911 nos EUA) — útil para funcionários de outros países que podem discar o número de emergência do seu país natal — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "E.164 = +55 11 números, obrigatório PSTN; usuário vs serviço — impacto aplicabilidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Portabilidade exige LOA, conta faturamento, números E.164, data desejada"
    }
  },
  {
    "id": "ms721_q142",
    "text": "O que é Dynamic Emergency Calling no Teams Phone e como ele melhora a resposta a emergências em ambientes corporativos?",
    "options": [
      "Sistema de chamada de emergência que usa GPS do dispositivo móvel para determinar localização exata do usuário",
      "Integração com câmeras de segurança do prédio que se ativam automaticamente quando uma cham",
      "Recurso que disca automaticamente para serviços de emergência quando o usuário fica sem resposta por mais de 5 minutos",
      "Detecta automaticamente a localização atual do usuário com base na sub-rede/Wi-Fi/switch mapeados na topologia de rede, transmite o endereço físico preciso ao PSAP e pode notificar desk de segurança interno — mais preciso que localização estática por usuário"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Dynamic Emergency Calling (Nível: avançado).",
      "papoReto": "E911 = localização dinâmica obrigatória, roteamento automático PSAP correto, endereço registrado, suporte para chamadas emergência",
      "respostaCerta": "Detecta automaticamente a localização atual do usuário com base na sub-rede/Wi-Fi/switch mapeados na topologia de rede, transmite o endereço físico preciso ao PSAP e pode notificar desk de segurança interno — mais preciso que localização estática por usuário — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "E911 = localização precisa obrigatória para emergência, endereço dinâmico se mudança local",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Endereço emergência atualizado automático se usuário muda prédio/escritório"
    }
  },
  {
    "id": "ms721_q143",
    "text": "Quais são os pré-requisitos para implementar Dynamic Emergency Calling no Microsoft Teams Phone com Direct Routing?",
    "options": [
      "Topologia de rede configurada no Teams Admin Center com sub-redes mapeadas a endereços cívicos, política de roteamento de emergência dinâmico atribuída aos usuários, SBC certificado para emergency routing e cliente Teams Desktop versão compatível com detecção de localização dinâmica",
      "Apenas configurar endereços cívicos no Teams Admin Center e atribuir manualmente a cada usuário pelo seu endereço fixo",
      "Instalar agente de localização GPS em cada dispositivo e integrar ao Azure Maps para detecção em tempo real",
      "Usar Operator Connect exclusivamente — Dynamic Emergency Calling não é suportado com Direct Routing"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Dynamic Emergency Calling — Configuração (Nível: avançado).",
      "papoReto": "Direct Routing = você gerencia SBC certificado Microsoft, máxima flexibilidade e controle troncos SIP",
      "respostaCerta": "Topologia de rede configurada no Teams Admin Center com sub-redes mapeadas a endereços cívicos, política de roteamento de emergência dinâmico atribuída aos usuários, SBC certificado para emergency routing e cliente Teams Desktop versão compatível com detecção de localização dinâmica — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Direct Routing = seu SBC, seu controle, máxima complexidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "SBCs certificados: AudioCodes, Ribbon, Mediant, Acme/Ixia — verificar compatibilidade Microsoft"
    }
  },
  {
    "id": "ms721_q144",
    "text": "Um engenheiro precisa dimensionar a capacidade de um SBC para uma organização com 2.000 usuários de voz. Qual metodologia deve ser usada para calcular o número de sessões SIP simultâneas necessárias?",
    "options": [
      "Usar o modelo de tráfego Erlang B ou C baseado em número de usuários, taxa de chamadas por hora de pico (BHCA), duração média de chamadas e grau de serviço desejado — tipicamente 10-15% dos usuários em chamada simultânea em hora de pico como estimativa inicial",
      "Dimensionar 1 sessão SIP por usuário de voz como regra fixa independentemente do padrão de uso",
      "Usar o Teams Network Planner para calcular automaticamente capacidade de SBC baseado no número de usuários",
      "Contratar capacidade ilimitada de sessões no SBC para eliminar risco de sobrecarga sem necessidade de cálculo"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Planejamento de Capacidade — SBC (Nível: avançado).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Usar o modelo de tráfego Erlang B ou C baseado em número de usuários, taxa de chamadas por hora de pico (BHCA), duração média de chamadas e grau de serviço desejado — tipicamente 10-15% dos usuários em chamada simultânea em hora de pico como estimativa inicial — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q145",
    "text": "Um administrador precisa exportar um relatório completo de todos os dispositivos Teams certificados da organização, incluindo modelo, firmware, status e usuário associado. Como obter esse relatório?",
    "options": [
      "Microsoft Intune > Dispositivos > Exportar relatório de hardware com filtro por aplicativo Microsoft Teams",
      "Microsoft 365 Admin Center > Relatórios > Dispositivos registrados com filtro por aplicativo Teams instalado",
      "Teams Admin Center > Dispositivos > selecionar categoria de dispositivo > Exportar (ícone de download) — gera arquivo CSV com todos os dados de inventário de dispositivos daquela categoria",
      "PowerShell com Get-CsTeamsDevice exportando para CSV com todos os atributos de dispositivos Teams"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Gestão de Inventário de Dispositivos (Nível: intermediário).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Teams Admin Center > Dispositivos > selecionar categoria de dispositivo > Exportar (ícone de download) — gera arquivo CSV com todos os dados de inventário de dispositivos daquela categoria — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q146",
    "text": "Após configurar o Direct Routing, um engenheiro precisa validar que chamadas de saída e entrada PSTN estão funcionando corretamente. Qual é a abordagem sistemática de validação recomendada?",
    "options": [
      "Executar apenas teste de chamada interna Teams-to-Teams e assumir que PSTN funciona se a chamada interna passar",
      "Usar Teams Network Assessment Tool para validar conectividade PSTN antes de testar chamadas reais",
      "1) Teste de chamada de saída para número externo PSTN; 2) Teste de chamada de entrada de número externo para número Teams; 3) Verificar no Health Dashboard que o SBC está ativo; 4) Confirmar qualidade no Per-user Call Analytics pós-teste; 5) Testar chamada de emergência para número de teste (não 911 real)",
      "Abrir ticket de suporte Microsoft para que a equipe de validação teste remotamente as chamadas PSTN configuradas"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: Testes de Chamada — Validação (Nível: intermediário).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "1) Teste de chamada de saída para número externo PSTN; 2) Teste de chamada de entrada de número externo para número Teams; 3) Verificar no Health Dashboard que o SBC está ativo; 4) Confirmar qualidade no Per-user Call Analytics pós-teste; 5) Testar chamada de emergência para número de teste (não 911 real) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q147",
    "text": "Um engenheiro está projetando uma solução de voz Teams para 500 usuários com Microsoft 365 E3. Quais licenças adicionais são necessárias para habilitar chamadas PSTN via Direct Routing?",
    "options": [
      "Microsoft Teams Phone + Microsoft Calling Plan Doméstico — ambos obrigatórios para qualquer implementação de voz Teams",
      "Upgrade para Microsoft 365 E5 que inclui Teams Phone nativamente sem necessidade de add-ons adicionais",
      "Microsoft Teams Essentials + add-on de Direct Routing — suficiente para habilitar voz PSTN via SBC certificado",
      "Microsoft Teams Phone (add-on obrigatório para E3 — habilita PBX na nuvem e Enterprise Voice); não é necessário Calling Plan para Direct Routing pois a conectividade PSTN vem pelo SBC/operadora local"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Licenciamento — Resumo MS-721 (Nível: intermediário).",
      "papoReto": "Direct Routing = você gerencia SBC certificado Microsoft, máxima flexibilidade e controle troncos SIP",
      "respostaCerta": "Microsoft Teams Phone (add-on obrigatório para E3 — habilita PBX na nuvem e Enterprise Voice); não é necessário Calling Plan para Direct Routing pois a conectividade PSTN vem pelo SBC/operadora local — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Direct Routing = seu SBC, seu controle, máxima complexidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "SBCs certificados: AudioCodes, Ribbon, Mediant, Acme/Ixia — verificar compatibilidade Microsoft"
    }
  },
  {
    "id": "ms721_q148",
    "text": "Um engenheiro precisa planejar infraestrutura para suportar 200 reuniões simultâneas do Teams com média de 10 participantes cada. Quais considerações de capacidade são relevantes para o Microsoft 365?",
    "options": [
      "Microsoft 365 gerencia infraestrutura de reuniões na nuvem sem necessidade de planejamento de servidor pelo cliente; o foco deve ser na capacidade de rede (largura de banda, QoS) e licenciamento adequado dos usuários organizadores",
      "Configurar pool de servidores Teams On-Premises para distribuir carga de reuniões entre nuvem e local",
      "Provisionar servidores de conferência adicionais no Azure para suportar carga de reuniões acima de 100 simultâneas",
      "Adquirir licenças de Audioconferência para cada participante das 200 reuniões simultâneas planejadas"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Capacidade de Reuniões — Limites Técnicos (Nível: intermediário).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "Microsoft 365 gerencia infraestrutura de reuniões na nuvem sem necessidade de planejamento de servidor pelo cliente; o foco deve ser na capacidade de rede (largura de banda, QoS) e licenciamento adequado dos usuários organizadores — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q149",
    "text": "Uma organização deseja implementar um contact center avançado com roteamento inteligente por habilidade, análise de sentimento em tempo real e integração com CRM, usando Microsoft Teams como plataforma de comunicação. Qual é a abordagem recomendada?",
    "options": [
      "Usar Filas de Chamada nativas do Teams com roteamento round-robin e integrar manualmente ao CRM via Power Automate",
      "Implementar solução de Contact Center como Serviço (CCaaS) de parceiro certificado Microsoft via Teams extensibility APIs (Graph API, Azure Communication Services) — parceiros como Genesys, NICE, Avaya integram nativamente ao Teams mantendo a experiência unificada",
      "Configurar múltiplos Atendedores Automáticos aninhados com lógica de roteamento por habilidade via DTMF",
      "Implementar Azure Communication Services diretamente como contact center sem parceiro adicional, usando SDK do Teams"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Integração com Contact Center (Nível: avançado).",
      "papoReto": "Teams Phone é PBX gerenciado Microsoft na nuvem, core de telefonia em Teams com transferência, correio voz, auto-atendentes, filas",
      "respostaCerta": "Implementar solução de Contact Center como Serviço (CCaaS) de parceiro certificado Microsoft via Teams extensibility APIs (Graph API, Azure Communication Services) — parceiros como Genesys, NICE, Avaya integram nativamente ao Teams mantendo a experiência unificada — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Phone = PBX nuvem Microsoft, nome antigo Phone System, mesma coisa",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Phone System = Teams Phone (rebrand 2019) — mesma solução, apenas nome novo"
    }
  },
  {
    "id": "ms721_q150",
    "text": "Um engenheiro é solicitado a revisar a arquitetura de voz Teams de uma organização que reporta problemas frequentes de qualidade. O diagrama mostra: usuários → proxy corporativo → internet → Microsoft 365. Qual é o principal problema arquitetural e como corrigir?",
    "options": [
      "Falta de ExpressRoute entre a organização e o Microsoft 365 — implementar ExpressRoute resolve problemas de qualidade de voz",
      "Ausência de servidor DNS local causando resolução lenta de FQDNs do Teams — implementar DNS caching resolve",
      "Todo tráfego Teams passando pelo proxy corporativo é o problema — proxies introduzem latência adicional e podem inspecionar/bloquear tráfego UDP; correção: implementar saída de internet local com bypass de proxy para endpoints Teams (categoria Optimize dos IPs/URLs Microsoft 365) com split tunneling se VPN for usada",
      "Falta de QoS configurado nos dispositivos de usuário — implementar DSCP marking nos endpoints resolve todos os problemas"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: Revisão de Arquitetura de Voz (Nível: avançado).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "Todo tráfego Teams passando pelo proxy corporativo é o problema — proxies introduzem latência adicional e podem inspecionar/bloquear tráfego UDP; correção: implementar saída de internet local com bypass de proxy para endpoints Teams (categoria Optimize dos IPs/URLs Microsoft 365) com split tunneling se VPN for usada — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q151",
    "text": "O Microsoft Teams Phone possui uma hierarquia de Dial Plans que é aplicada aos usuários em ordem de precedência. Qual é a ordem correta dessa hierarquia?",
    "options": [
      "1) Dial Plan de usuário (atribuído diretamente ao usuário); 2) Dial Plan de tenant (atribuído ao tenant); 3) Dial Plan de serviço (baseado no país do número atribuído ao usuário) — o mais específico tem precedência",
      "1) Dial Plan global; 2) Dial Plan de tenant; 3) Dial Plan de usuário — do mais amplo para o mais específico",
      "1) Dial Plan de serviço; 2) Dial Plan de usuário; 3) Dial Plan de tenant — baseado na origem do número",
      "Apenas um Dial Plan pode existir por tenant; hierarquia múltipla não é suportada no Teams Phone"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Dial Plan — Hierarquia (Nível: avançado).",
      "papoReto": "E.164 é formato internacional obrigatório (+55 11 98765-4321), máscara chamada mascara origem, portabilidade numérica via LOA",
      "respostaCerta": "1) Dial Plan de usuário (atribuído diretamente ao usuário); 2) Dial Plan de tenant (atribuído ao tenant); 3) Dial Plan de serviço (baseado no país do número atribuído ao usuário) — o mais específico tem precedência — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "E.164 = +55 11 números, obrigatório PSTN; usuário vs serviço — impacto aplicabilidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Portabilidade exige LOA, conta faturamento, números E.164, data desejada"
    }
  },
  {
    "id": "ms721_q152",
    "text": "Um administrador cria uma regra de normalização no Dial Plan para converter ramais de 4 dígitos (ex.: 1234) para o formato E.164 completo (+55 11 3000 1234). Qual expressão regular e padrão de tradução estão corretos?",
    "options": [
      "Pattern: ^(\\\\d{4})$ | Translation: +5511300$1 — captura 4 dígitos e prefixa com código do país (+55), DDD (11) e prefixo do número do escritório (3000)",
      "Pattern: (\\\\d)+(4) | Translation: +55113000+$1 — sintaxe inválida de expressão regular",
      "Pattern: \\\\d{4} | Translation: 0055113000 — sem âncoras de início/fim e sem grupo de captura",
      "Pattern: ^$ | Translation: +55$1 — captura apenas os dígitos 1, 2, 3 ou 4 individualmente"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Dial Plan — Regras de Normalização (Nível: avançado).",
      "papoReto": "E.164 é formato internacional obrigatório (+55 11 98765-4321), máscara chamada mascara origem, portabilidade numérica via LOA",
      "respostaCerta": "Pattern: ^(\\\\d{4})$ | Translation: +5511300$1 — captura 4 dígitos e prefixa com código do país (+55), DDD (11) e prefixo do número do escritório (3000) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "E.164 = +55 11 números, obrigatório PSTN; usuário vs serviço — impacto aplicabilidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Portabilidade exige LOA, conta faturamento, números E.164, data desejada"
    }
  },
  {
    "id": "ms721_q153",
    "text": "Um engenheiro cria uma Voice Route para chamadas internacionais com o padrão \"^\\\\+(?!55)\". O que esse padrão faz?",
    "options": [
      "É uma expressão inválida — o lookahead negativo não é suportado em padrões de Voice Route do Teams",
      "Corresponde a números que começam com \"+\" seguido de qualquer dígito exceto 5 — bloqueia números com dígito 5",
      "Corresponde apenas a números que começam exatamente com \"+55\" — roteia apenas chamadas para o Brasil",
      "Corresponde a qualquer número no formato E.164 que começa com \"+\" mas NÃO é seguido por \"55\" (código do Brasil) — efetivamente roteia todas as chamadas internacionais exceto para o Brasil por essa rota"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Voice Routing — Padrões de Número (Nível: avançado).",
      "papoReto": "Teams Phone é PBX gerenciado Microsoft na nuvem, core de telefonia em Teams com transferência, correio voz, auto-atendentes, filas",
      "respostaCerta": "Corresponde a qualquer número no formato E.164 que começa com \"+\" mas NÃO é seguido por \"55\" (código do Brasil) — efetivamente roteia todas as chamadas internacionais exceto para o Brasil por essa rota — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Phone = PBX nuvem Microsoft, nome antigo Phone System, mesma coisa",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Phone System = Teams Phone (rebrand 2019) — mesma solução, apenas nome novo"
    }
  },
  {
    "id": "ms721_q154",
    "text": "Um Atendedor Automático do Teams é configurado com a opção \"Pesquisa de Diretório\" habilitada. O que essa funcionalidade permite aos chamadores externos?",
    "options": [
      "Permite que chamadores externos discam pelo nome (Dial by Name) ou pelo ramal (Dial by Extension) para localizar e ser conectado diretamente a um usuário interno da organização sem navegar pelos menus do AA",
      "Permite que administradores pesquisem usuários no diretório via interface do AA para configurar destinos de roteamento",
      "Permite que o AA pesquise automaticamente o histórico de chamadas para identificar chamadores frequentes e roteá-los preferencialmente",
      "Sincroniza o diretório do AA com o Active Directory local para atualização automática de nomes de funcionários"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Atendedor Automático — Integração com Diretório (Nível: intermediário).",
      "papoReto": "Teams Phone é PBX gerenciado Microsoft na nuvem, core de telefonia em Teams com transferência, correio voz, auto-atendentes, filas",
      "respostaCerta": "Permite que chamadores externos discam pelo nome (Dial by Name) ou pelo ramal (Dial by Extension) para localizar e ser conectado diretamente a um usuário interno da organização sem navegar pelos menus do AA — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Phone = PBX nuvem Microsoft, nome antigo Phone System, mesma coisa",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Phone System = Teams Phone (rebrand 2019) — mesma solução, apenas nome novo"
    }
  },
  {
    "id": "ms721_q155",
    "text": "Um AA tem a pesquisa de diretório habilitada, mas a empresa não quer que certos usuários (ex.: CEO e diretores) sejam localizáveis por chamadores externos via Dial by Name. Como implementar essa exclusão?",
    "options": [
      "Criar política de privacidade no Microsoft Purview bloqueando divulgação de nomes de executivos em AAs",
      "Configurar barreiras de informação entre executivos e usuários externos impedindo localização via diretório do AA",
      "Criar um escopo de inclusão/exclusão no AA — configurar \"Excluir\" usuários específicos ou grupos do Azure AD da pesquisa de diretório nas configurações de escopo do Atendedor Automático",
      "Remover o atributo DisplayName dos usuários no Azure AD para que não apareçam na pesquisa do AA"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Atendedor Automático — Exclusão de Diretório (Nível: avançado).",
      "papoReto": "E.164 é formato internacional obrigatório (+55 11 98765-4321), máscara chamada mascara origem, portabilidade numérica via LOA",
      "respostaCerta": "Criar um escopo de inclusão/exclusão no AA — configurar \"Excluir\" usuários específicos ou grupos do Azure AD da pesquisa de diretório nas configurações de escopo do Atendedor Automático — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "E.164 = +55 11 números, obrigatório PSTN; usuário vs serviço — impacto aplicabilidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Portabilidade exige LOA, conta faturamento, números E.164, data desejada"
    }
  },
  {
    "id": "ms721_q156",
    "text": "Um engenheiro precisa apresentar para a diretoria os recursos exclusivos do Microsoft Teams Premium relevantes para comunicações corporativas avançadas. Quais recursos principais devem ser destacados?",
    "options": [
      "Licença de Phone System incluída, Direct Routing sem SBC próprio e Operator Connect gratuito com qualquer operadora",
      "Chamadas PSTN ilimitadas, gravação automática sem limite de armazenamento e transcrição em tempo real para todos os idiomas",
      "Microsoft Copilot integrado, Power BI analytics e Microsoft Viva Insights avançado para análise de reuniões",
      "Proteção avançada de reuniões (marca d'água, E2EE em grupo, rótulos de sensibilidade), interpretação simultânea de idiomas, resumos inteligentes com IA, webinars avançados com relatórios de engajamento, Town Halls com até 20.000 participantes e relatórios avançados de qualidade"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Microsoft Teams Premium — Resumo de Recursos (Nível: intermediário).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "Proteção avançada de reuniões (marca d'água, E2EE em grupo, rótulos de sensibilidade), interpretação simultânea de idiomas, resumos inteligentes com IA, webinars avançados com relatórios de engajamento, Town Halls com até 20.000 participantes e relatórios avançados de qualidade — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q157",
    "text": "Um engenheiro configura um Webinar do Teams com aprovação manual de registros. Como funciona o fluxo de aprovação e quais são as opções de gerenciamento de registros?",
    "options": [
      "Registros ficam em status \"Pendente\" até aprovação manual pelo organizador no portal de gerenciamento do evento; organizador pode aprovar, rejeitar ou aguardar; aprovados recebem link de ingresso automático por e-mail; rejeições podem incluir mensagem personalizada",
      "Aprovação manual envia todos os registros para uma fila no Microsoft Forms que o organizador revisa semanalmente",
      "O sistema aprova automaticamente após 48 horas se o organizador não rejeitar — não há aprovação verdadeiramente manual",
      "Aprovação manual requer licença Teams Premium; sem ela todos os registros são aprovados automaticamente"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Webinar — Configurações Avançadas (Nível: avançado).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "Registros ficam em status \"Pendente\" até aprovação manual pelo organizador no portal de gerenciamento do evento; organizador pode aprovar, rejeitar ou aguardar; aprovados recebem link de ingresso automático por e-mail; rejeições podem incluir mensagem personalizada — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q158",
    "text": "Como um dispositivo Microsoft Teams Rooms on Windows se autentica no Microsoft 365 e quais métodos de autenticação são suportados?",
    "options": [
      "MTR Windows usa autenticação Kerberos com o Active Directory local para acesso ao Microsoft 365 via ADFS",
      "MTR Windows usa token de dispositivo Azure AD gerado durante o Azure AD Join obrigatório do dispositivo",
      "MTR Windows autentica com a conta de recurso via Modern Authentication (OAuth 2.0) — suporta autenticação com senha da conta de recurso ou certificado de dispositivo; para maior segurança, pode usar autenticação baseada em certificado eliminando necessidade de senha",
      "MTR Windows requer conta de usuário com MFA habilitado; autenticação sem MFA não é suportada em dispositivos de sala"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Teams Rooms — Autenticação de Dispositivo (Nível: avançado).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "MTR Windows autentica com a conta de recurso via Modern Authentication (OAuth 2.0) — suporta autenticação com senha da conta de recurso ou certificado de dispositivo; para maior segurança, pode usar autenticação baseada em certificado eliminando necessidade de senha — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q159",
    "text": "Como as atualizações do Windows devem ser gerenciadas em dispositivos Microsoft Teams Rooms on Windows para evitar reinicializações durante reuniões?",
    "options": [
      "Configurar Windows Update for Business via Intune ou GPO com janelas de manutenção fora do horário de reuniões (ex.: 2h-4h da madrugada), definir deferral de atualizações para validação prévia e usar rings de atualização com dispositivos piloto antes da atualização ampla",
      "Desativar completamente o Windows Update em MTRs para garantir estabilidade máxima sem riscos de reinicialização",
      "Atualizar manualmente cada MTR mensalmente visitando cada sala físicamente para instalar atualizações",
      "MTR Windows gerencia automaticamente suas atualizações sem necessidade de configuração adicional pelo administrador"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Teams Rooms — Windows Update (Nível: intermediário).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Configurar Windows Update for Business via Intune ou GPO com janelas de manutenção fora do horário de reuniões (ex.: 2h-4h da madrugada), definir deferral de atualizações para validação prévia e usar rings de atualização com dispositivos piloto antes da atualização ampla — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q160",
    "text": "O que é o \"Front Row\" (Primeira Fila) no Microsoft Teams Rooms e como ele melhora a experiência de reuniões híbridas?",
    "options": [
      "Sistema de câmera que foca automaticamente no apresentador frontal da sala ignorando outros participantes presenciais",
      "Modo de exibição que projeta legendas em tempo real na parede frontal da sala para participantes presenciais",
      "Funcionalidade que reserva automaticamente os assentos da frente da sala para participantes que chegarem primeiro",
      "Layout de exibição que posiciona vídeos dos participantes remotos na parte inferior da tela (linha do olhar) com conteúdo acima — cria sensação de presença mais natural e igualitária entre participantes presenciais e remotos em salas com display panorâmico"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: MTR — Modo de Exibição Frontal da Sala (Nível: intermediário).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Layout de exibição que posiciona vídeos dos participantes remotos na parte inferior da tela (linha do olhar) com conteúdo acima — cria sensação de presença mais natural e igualitária entre participantes presenciais e remotos em salas com display panorâmico — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q161",
    "text": "Durante um incidente onde chamadas PSTN via Direct Routing falham para todos os usuários, qual é a sequência de diagnóstico prioritária para um engenheiro MS-721?",
    "options": [
      "1) Verificar Health Dashboard for Direct Routing (status do SBC); 2) Verificar integridade do serviço Teams no M365 Admin Center; 3) Testar conectividade TLS do SBC (porta 5061); 4) Verificar logs SIP do SBC para códigos de erro; 5) Confirmar se certificado TLS do SBC está válido; 6) Testar chamada de diagnóstico",
      "1) Verificar firewall corporativo; 2) Testar ping para Microsoft 365; 3) Reiniciar cliente Teams em estações afetadas",
      "1) Reiniciar o SBC imediatamente; 2) Contatar a operadora PSTN; 3) Abrir ticket Microsoft; 4) Aguardar resolução automática",
      "1) Verificar CQD para Poor Stream Rate; 2) Analisar Per-user Call Analytics; 3) Executar Network Assessment Tool"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: Incidente de Serviço — Resposta (Nível: intermediário).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "1) Verificar Health Dashboard for Direct Routing (status do SBC); 2) Verificar integridade do serviço Teams no M365 Admin Center; 3) Testar conectividade TLS do SBC (porta 5061); 4) Verificar logs SIP do SBC para códigos de erro; 5) Confirmar se certificado TLS do SBC está válido; 6) Testar chamada de diagnóstico — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "Call Quality Dashboard shows user-side call quality metrics (jitter, packet loss, latency), not SBC connection status — use Health Dashboard for Direct Routing instead"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q162",
    "text": "Analisando logs SIP de um SBC, um engenheiro vê a sequência: INVITE → 100 Trying → 407 Proxy Authentication Required → ACK → INVITE com credenciais → 200 OK. O que essa sequência indica?",
    "options": [
      "Falha de autenticação — o código 407 indica que as credenciais SIP estão incorretas e a chamada foi rejeitada",
      "Ataque de replay SIP — a duplicação do INVITE indica tentativa de fraude que deve ser bloqueada no SBC",
      "Fluxo normal de autenticação SIP com desafio de proxy — o SBC enviou INVITE, o proxy solicitou autenticação (407), o SBC respondeu com ACK, reenvio o INVITE com credenciais e a chamada foi estabelecida com sucesso (200 OK)",
      "Problema de roteamento — o 407 indica que o destino não foi encontrado e o SBC tentou rota alternativa"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: SBC — Logs SIP Análise (Nível: avançado).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "Fluxo normal de autenticação SIP com desafio de proxy — o SBC enviou INVITE, o proxy solicitou autenticação (407), o SBC respondeu com ACK, reenvio o INVITE com credenciais e a chamada foi estabelecida com sucesso (200 OK) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q163",
    "text": "Usuários reportam áudio unidirecional em chamadas Direct Routing — o agente ouve o cliente mas o cliente não ouve o agente. Quais são as causas mais prováveis dessa assimetria de áudio?",
    "options": [
      "Política de chamada bloqueando recebimento de áudio de externos configurada incorretamente pelo administrador",
      "Problema de largura de banda afetando apenas o stream de upload causando perda assimétrica de pacotes",
      "Codec incompatível entre Teams e SBC causando falha na decodificação de áudio no sentido cliente → agente",
      "NAT assimétrico bloqueando fluxo de mídia em uma direção, regras de firewall permitindo tráfego de saída mas bloqueando entrada de mídia UDP, configuração incorreta de IP de mídia no SBC (IP privado anunciado em SDP em vez de IP público)"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: Troubleshooting — One-Way Audio (Nível: avançado).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "NAT assimétrico bloqueando fluxo de mídia em uma direção, regras de firewall permitindo tráfego de saída mas bloqueando entrada de mídia UDP, configuração incorreta de IP de mídia no SBC (IP privado anunciado em SDP em vez de IP público) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q164",
    "text": "Um engenheiro configura o firewall corporativo para suportar Microsoft Teams. Quais categorias de endpoints devem ser abertas e qual é a abordagem recomendada pela Microsoft?",
    "options": [
      "Abrir portas UDP 16384-32767 bidirecionais para qualquer IP público de internet de modo a garantir fluxo de mídia",
      "Microsoft categoriza endpoints em três grupos: Optimize (críticos para Teams — devem ter acesso direto sem inspeção), Allow (importantes — acesso direto recomendado) e Default (podem usar proxy) — documentados em aka.ms/o365endpoints com IPs, URLs e portas atualizados",
      "Bloquear todos os proxies e forçar tráfego Teams a passar por VPN corporativa com criptografia IPsec obrigatória",
      "Abrir apenas porta 443 TCP e 80 TCP para todos os IPs Microsoft — suficiente para Teams funcionar"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: NAT e Firewall — Requisitos Teams (Nível: avançado).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Microsoft categoriza endpoints em três grupos: Optimize (críticos para Teams — devem ter acesso direto sem inspeção), Allow (importantes — acesso direto recomendado) e Default (podem usar proxy) — documentados em aka.ms/o365endpoints com IPs, URLs e portas atualizados — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q165",
    "text": "Para que o Direct Routing funcione corretamente, quais portas específicas devem estar abertas no firewall entre o SBC e a infraestrutura Microsoft 365?",
    "options": [
      "Porta 5060 UDP para SIP não criptografado e 16384-32767 UDP para mídia RTP — configuração padrão SIP legado",
      "SIP TLS: porta 5061 TCP (SBC ↔ Microsoft SIP Proxy); Mídia RTP/SRTP: portas UDP 3478-3481 (para servidores de relay) e 49152-53247 UDP (mídia direta entre SBC e cliente Teams); HTTPS 443 para sinalização adicional",
      "Apenas porta 443 TCP bidirecional — o Teams encapsula todo tráfego SIP e mídia em HTTPS para simplicidade de firewall",
      "Portas 50000-50059 UDP para mídia e 5061 TCP para SIP — mesmas portas dos clientes Teams Desktop"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Firewall — Portas Específicas Teams Phone (Nível: avançado).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "SIP TLS: porta 5061 TCP (SBC ↔ Microsoft SIP Proxy); Mídia RTP/SRTP: portas UDP 3478-3481 (para servidores de relay) e 49152-53247 UDP (mídia direta entre SBC e cliente Teams); HTTPS 443 para sinalização adicional — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q166",
    "text": "Uma organização implementa SD-WAN e deseja otimizar o tráfego do Microsoft Teams. Quais capacidades do SD-WAN são mais relevantes para garantir qualidade de chamadas Teams?",
    "options": [
      "Compressão de tráfego WAN para aumentar capacidade efetiva e deduplicação de dados para reduzir uso de banda Teams",
      "Tunelamento de todo tráfego Teams pelo datacenter central para inspeção de segurança antes de saída para internet",
      "Identificação de tráfego Teams por IP/porta/FQDN, roteamento preferencial de mídia Teams pela melhor rota de internet disponível, quebra de tráfego local (local breakout) para endpoints Microsoft 365 sem backhaul ao datacenter central e QoS baseado em aplicação para priorizar fluxos Teams",
      "Aceleração WAN com caching de conteúdo Teams e otimização TCP para chamadas de voz sobre WAN de alta latência"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: SD-WAN e Teams (Nível: avançado).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Identificação de tráfego Teams por IP/porta/FQDN, roteamento preferencial de mídia Teams pela melhor rota de internet disponível, quebra de tráfego local (local breakout) para endpoints Microsoft 365 sem backhaul ao datacenter central e QoS baseado em aplicação para priorizar fluxos Teams — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q167",
    "text": "Um engenheiro precisa implementar controles para evitar uso excessivo e não autorizado do Microsoft Calling Plan gerando custos elevados. Quais mecanismos de controle estão disponíveis?",
    "options": [
      "Implementar Azure Cost Management com budget alerts configurados especificamente para serviços Teams Phone",
      "Configurar limite de minutos por usuário via PowerShell com Set-CsCallingPlanLegacyPolicy -MaxMinutes",
      "Usar Microsoft Sentinel com regra analítica detectando padrões de chamadas anômalos via log de auditoria",
      "Configurar alertas de gastos de Créditos de Comunicação no Microsoft 365 Admin Center, aplicar política de chamada desativando chamadas internacionais para usuários que não necessitam, usar relatórios PSTN no Teams Admin Center para monitoramento de uso e anomalias"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Faturamento e Monitoramento de Custos PSTN (Nível: intermediário).",
      "papoReto": "Calling Plan = Microsoft é operadora PSTN, cobrança por minuto/planos, zero infraestrutura SBC/SIP sua",
      "respostaCerta": "Configurar alertas de gastos de Créditos de Comunicação no Microsoft 365 Admin Center, aplicar política de chamada desativando chamadas internacionais para usuários que não necessitam, usar relatórios PSTN no Teams Admin Center para monitoramento de uso e anomalias — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Calling Plan = Microsoft cuida de tudo, você só paga e disca",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "Microsoft Sentinel is a security/SIEM tool, not a phone system monitoring dashboard — it's not designed for tracking SBC connectivity or voice quality"
      ],
      "dicaOuro": "Disponibilidade por país varia — verificar suporte regional Microsoft antes contratação"
    }
  },
  {
    "id": "ms721_q168",
    "text": "Um administrador deseja que todos os usuários de um departamento exibam o número principal da empresa (ex.: +55 11 3000-0000) como identificação de chamador ao invés de seus números individuais. Como configurar isso?",
    "options": [
      "Criar regra de normalização no Dial Plan que converte números individuais para o número principal na saída",
      "Configurar política de identidade de chamador (Calling ID Policy) com o número de serviço da empresa como CallerID de saída e atribuir a política aos usuários do departamento via Grant-CsCallingLineIdentity",
      "Configurar o Atendedor Automático para substituir o CallerID de saída de todos os usuários do departamento",
      "Alterar o número de telefone de cada usuário para o número principal da empresa no Teams Admin Center"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Chamadas — Identidade de Chamador (Nível: intermediário).",
      "papoReto": "E.164 é formato internacional obrigatório (+55 11 98765-4321), máscara chamada mascara origem, portabilidade numérica via LOA",
      "respostaCerta": "Configurar política de identidade de chamador (Calling ID Policy) com o número de serviço da empresa como CallerID de saída e atribuir a política aos usuários do departamento via Grant-CsCallingLineIdentity — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "E.164 = +55 11 números, obrigatório PSTN; usuário vs serviço — impacto aplicabilidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Portabilidade exige LOA, conta faturamento, números E.164, data desejada"
    }
  },
  {
    "id": "ms721_q169",
    "text": "Usuários reclamam de chamadas SPAM e robocalls recebidas via Teams Phone. Quais recursos nativos do Teams ajudam a mitigar esse problema?",
    "options": [
      "Criar listas de bloqueio de números no SBC de Direct Routing filtrando chamadas indesejadas antes de chegar ao Teams",
      "Implementar política de conformidade no Purview que detecta padrões de chamada de spam automaticamente",
      "Ativar \"Filtro de chamadas com spam\" (Spam Filtering) na política de chamada que usa inteligência da Microsoft para identificar e bloquear chamadas de spam automaticamente; complementar com configuração de \"Bloquear chamadas de entradas sem ID de chamador\"",
      "Configurar Azure Communication Services com filtro de spam aplicado antes do Direct Routing"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Bloqueio de Chamadas — SPAM (Nível: intermediário).",
      "papoReto": "E.164 é formato internacional obrigatório (+55 11 98765-4321), máscara chamada mascara origem, portabilidade numérica via LOA",
      "respostaCerta": "Ativar \"Filtro de chamadas com spam\" (Spam Filtering) na política de chamada que usa inteligência da Microsoft para identificar e bloquear chamadas de spam automaticamente; complementar com configuração de \"Bloquear chamadas de entradas sem ID de chamador\" — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "E.164 = +55 11 números, obrigatório PSTN; usuário vs serviço — impacto aplicabilidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Portabilidade exige LOA, conta faturamento, números E.164, data desejada"
    }
  },
  {
    "id": "ms721_q170",
    "text": "Um engenheiro projeta uma sala de reunião com dois displays para um sistema Teams Rooms. Como o conteúdo é distribuído entre os dois displays em uma configuração dual screen?",
    "options": [
      "Display principal: vídeos dos participantes remotos e layout de reunião; Display secundário: conteúdo compartilhado (PowerPoint, tela compartilhada) — separação entre pessoas e conteúdo melhora a experiência de colaboração",
      "Ambos os displays mostram o mesmo conteúdo em espelho para garantir visibilidade de todos os participantes na sala",
      "Display principal: conteúdo compartilhado; Display secundário: controles do MTR e agenda da reunião do dia",
      "Os dois displays são gerenciados independentemente por diferentes PCs do Teams Rooms em configuração redundante"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Teams Rooms — Dual Screen (Nível: intermediário).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Display principal: vídeos dos participantes remotos e layout de reunião; Display secundário: conteúdo compartilhado (PowerPoint, tela compartilhada) — separação entre pessoas e conteúdo melhora a experiência de colaboração — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q171",
    "text": "O que significa um dispositivo ter a certificação \"Microsoft 365 Certified\" para Teams Rooms e quais benefícios isso traz para o administrador?",
    "options": [
      "Certifica apenas que o dispositivo tem o logo Teams e pode exibir reuniões básicas sem garantia de funcionalidades avançadas",
      "Certifica que o dispositivo foi testado e validado pela Microsoft para Teams Rooms com garantia de funcionalidade completa, compatibilidade com atualizações futuras, suporte coordenado entre Microsoft e fabricante e elegibilidade para gerenciamento via Teams Admin Center e MTR Pro portal",
      "É uma certificação de segurança cibernética confirmando que o dispositivo passou em testes de penetração e vulnerabilidades",
      "Garante que o dispositivo é fabricado exclusivamente pela Microsoft sem participação de parceiros de hardware terceiros"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Certificação de Sala — Microsoft 365 Certified (Nível: intermediário).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Certifica que o dispositivo foi testado e validado pela Microsoft para Teams Rooms com garantia de funcionalidade completa, compatibilidade com atualizações futuras, suporte coordenado entre Microsoft e fabricante e elegibilidade para gerenciamento via Teams Admin Center e MTR Pro portal — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q172",
    "text": "Um administrador precisa identificar reuniões que falharam ao iniciar nos últimos 7 dias — reuniões agendadas onde nenhum participante conseguiu ingressar. Qual abordagem fornece essa visibilidade?",
    "options": [
      "Consultar log de auditoria unificado no Microsoft Purview com filtro de atividades de reunião Teams e verificar eventos de \"MeetingParticipantDetail\" sem registros de ingresso; complementar com relatório de uso de reuniões no Teams Admin Center",
      "Per-user Call Analytics do organizador mostra todas as reuniões falhas com código de erro específico",
      "CQD com filtro de Poor Stream Rate de 100% identifica reuniões completamente falhas nos últimos 7 dias",
      "Teams Admin Center > Relatórios > Reuniões falhas — relatório dedicado com filtro de período de 7 dias"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: Relatório de Falhas de Reunião (Nível: intermediário).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "Consultar log de auditoria unificado no Microsoft Purview com filtro de atividades de reunião Teams e verificar eventos de \"MeetingParticipantDetail\" sem registros de ingresso; complementar com relatório de uso de reuniões no Teams Admin Center — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "Call Quality Dashboard shows user-side call quality metrics (jitter, packet loss, latency), not SBC connection status — use Health Dashboard for Direct Routing instead",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q173",
    "text": "Um telefone IP Teams não consegue fazer login com as credenciais da conta do usuário. O dispositivo mostra erro de autenticação. Quais são as causas mais comuns e como diagnosticar?",
    "options": [
      "Verificar conectividade Bluetooth do dispositivo — problemas de pareamento causam falhas de autenticação em telefones Teams",
      "Reiniciar o dispositivo e aguardar sincronização automática — falhas de login são sempre temporárias e auto-resolvidas",
      "Verificar: 1) Credenciais corretas (UPN e senha); 2) Licença Teams atribuída ao usuário; 3) Política de acesso condicional bloqueando login de dispositivos não gerenciados; 4) MFA requerido sem método compatível com dispositivo; 5) Conta bloqueada ou senha expirada no Azure AD",
      "Verificar apenas firmware do dispositivo — versão desatualizada é sempre a causa de falhas de autenticação em telefones Teams"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: Troubleshooting — Falha de Login em Dispositivo (Nível: intermediário).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "Verificar: 1) Credenciais corretas (UPN e senha); 2) Licença Teams atribuída ao usuário; 3) Política de acesso condicional bloqueando login de dispositivos não gerenciados; 4) MFA requerido sem método compatível com dispositivo; 5) Conta bloqueada ou senha expirada no Azure AD — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q174",
    "text": "Durante uma reunião Teams, o organizador precisa discar para um participante externo que não conseguiu ingressar pelo link. Como o organizador pode fazer essa discagem de saída (Dial Out) durante a reunião?",
    "options": [
      "Usar o Atendedor Automático da organização para discar externamente para o participante e transferir para a reunião",
      "Criar uma fila de chamada temporária e adicionar o participante externo como agente durante a reunião",
      "Enviar convite de reunião adicional por e-mail durante a reunião ativa e aguardar o participante ingressar",
      "No painel de participantes da reunião > \"Convidar alguém ou discar um número\" — inserir o número PSTN do participante externo; requer que o organizador tenha licença de Audioconferência ou Teams Phone com permissão de discagem de saída"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Conferência — Discagem de Saída (Nível: intermediário).",
      "papoReto": "Teams Premium = resumo IA Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k, transcrição pesquisável, gravação avançada",
      "respostaCerta": "No painel de participantes da reunião > \"Convidar alguém ou discar um número\" — inserir o número PSTN do participante externo; requer que o organizador tenha licença de Audioconferência ou Teams Phone com permissão de discagem de saída — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + Town Halls + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação requer idiomas configurados, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q175",
    "text": "Uma organização usa Dynamics 365 Customer Service e Microsoft Teams Phone integrados. Qual é a experiência do agente quando uma chamada PSTN chega ao Teams enquanto o agente trabalha no Dynamics 365?",
    "options": [
      "A integração requer que o agente use dois monitores — Teams em um e Dynamics no outro sem comunicação entre os sistemas",
      "Com a integração Dynamics 365 + Teams Phone (via Teams Phone Integration ou canal de voz do Dynamics), o agente recebe a chamada no painel do Dynamics com CTI (Computer Telephony Integration), abrindo automaticamente o registro do cliente identificado pelo número chamador",
      "A chamada chega apenas no cliente Teams separado e o agente precisa manualmente pesquisar o cliente no Dynamics 365",
      "O Dynamics 365 bloqueia notificações de chamadas Teams durante sessões ativas para não interromper o atendimento"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Integração com Dynamics 365 (Nível: avançado).",
      "papoReto": "Teams Phone é PBX gerenciado Microsoft na nuvem, core de telefonia em Teams com transferência, correio voz, auto-atendentes, filas",
      "respostaCerta": "Com a integração Dynamics 365 + Teams Phone (via Teams Phone Integration ou canal de voz do Dynamics), o agente recebe a chamada no painel do Dynamics com CTI (Computer Telephony Integration), abrindo automaticamente o registro do cliente identificado pelo número chamador — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Phone = PBX nuvem Microsoft, nome antigo Phone System, mesma coisa",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Phone System = Teams Phone (rebrand 2019) — mesma solução, apenas nome novo"
    }
  },
  {
    "id": "ms721_q176",
    "text": "Quais são as resoluções de vídeo suportadas pelo Microsoft Teams em reuniões e quais fatores determinam a resolução efetivamente usada?",
    "options": [
      "Teams suporta até 1080p Full HD (com câmera e hardware compatíveis e largura de banda suficiente); a resolução efetiva é determinada dinamicamente pela largura de banda disponível, capacidade do hardware do endpoint, política de reunião (Media bit rate) e número de participantes visíveis",
      "Resolução de vídeo é configurada fixamente pelo administrador na política de reunião sem ajuste dinâmico",
      "A resolução é sempre 480p para chamadas com mais de 5 participantes para economizar banda automaticamente",
      "Teams usa exclusivamente resolução 720p para todas as chamadas — 1080p não é suportado nativamente pelo cliente Teams"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Qualidade de Vídeo — Padrões (Nível: intermediário).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "Teams suporta até 1080p Full HD (com câmera e hardware compatíveis e largura de banda suficiente); a resolução efetiva é determinada dinamicamente pela largura de banda disponível, capacidade do hardware do endpoint, política de reunião (Media bit rate) e número de participantes visíveis — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q177",
    "text": "Um organizador de reunião Teams criou 10 salas simultâneas (Breakout Rooms) e precisa fazer um anúncio para todos os participantes em todas as salas ao mesmo tempo. Qual recurso permite isso?",
    "options": [
      "Usar @equipe no chat principal da reunião — a mensagem aparece automaticamente para todos nas salas simultâneas",
      "O organizador deve entrar em cada sala manualmente e fazer o anúncio individualmente em cada uma das 10 salas",
      "\"Anunciar para todas as salas\" — o organizador pode enviar uma mensagem de broadcast para todas as salas simultâneas simultaneamente, que aparece como notificação para todos os participantes independentemente da sala em que estão",
      "Compartilhar a tela na sala principal e isso automaticamente transmite para todas as salas simultâneas ativas"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Salas Simultâneas — Administração (Nível: intermediário).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "\"Anunciar para todas as salas\" — o organizador pode enviar uma mensagem de broadcast para todas as salas simultâneas simultaneamente, que aparece como notificação para todos os participantes independentemente da sala em que estão — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q178",
    "text": "Um engenheiro captura tráfego com Wireshark durante uma chamada Teams com problema de qualidade. Quais filtros e análises são mais úteis para diagnosticar perda de pacotes de áudio?",
    "options": [
      "Filtrar por dns.flags.response == 1 e verificar o tempo de resposta DNS para servidores de mídia do Teams",
      "Filtrar por tcp.port == 443 e analisar retransmissões TCP como indicador de perda de pacotes de áudio Teams",
      "Usar filtro sip.status == 200 e analisar o SDP para medir a perda de pacotes acumulada informada na sinalização",
      "Filtrar por protocolo RTP (udp.port == 50000-50059), analisar sequência de números RTP para identificar gaps (pacotes fora de ordem ou perdidos), verificar delta de tempo entre pacotes para medir jitter e usar análise de stream RTP do Wireshark (Telephony > RTP > Stream Analysis)"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Wireshark — Análise de Chamadas Teams (Nível: avançado).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Filtrar por protocolo RTP (udp.port == 50000-50059), analisar sequência de números RTP para identificar gaps (pacotes fora de ordem ou perdidos), verificar delta de tempo entre pacotes para medir jitter e usar análise de stream RTP do Wireshark (Telephony > RTP > Stream Analysis) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q179",
    "text": "O CQD mostra jitter médio de 45ms em chamadas de um site específico, acima do limite recomendado de 30ms. Quais são as causas mais comuns de jitter elevado e como corrigi-las?",
    "options": [
      "Jitter de 45ms é aceitável para chamadas de voz — o limite real é 100ms; nenhuma ação é necessária",
      "Jitter elevado indica problema no SBC — atualizar firmware do SBC para versão mais recente resolve o problema",
      "Jitter elevado é sempre causado por latência alta ao Microsoft 365 — implementar ExpressRoute reduz jitter automaticamente",
      "Causas: congestionamento de rede (fila de pacotes variável), ausência de QoS priorizando tráfego de voz, switches sem suporte a QoS, conexão Wi-Fi com interferência — correções: implementar QoS com marcação DSCP, atualizar equipamentos de rede, separar VLAN de voz e migrar usuários críticos para rede cabeada"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Análise de Jitter — Diagnóstico (Nível: avançado).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Causas: congestionamento de rede (fila de pacotes variável), ausência de QoS priorizando tráfego de voz, switches sem suporte a QoS, conexão Wi-Fi com interferência — correções: implementar QoS com marcação DSCP, atualizar equipamentos de rede, separar VLAN de voz e migrar usuários críticos para rede cabeada — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "SBC requirements are specific — it must be on Microsoft's certified list, have valid TLS certificate with FQDN, support SIP TLS on port 5061, and SRTP for media",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q180",
    "text": "Um site apresenta 3% de perda de pacotes em chamadas Teams, muito acima do limite recomendado de 1%. Quais são os impactos na qualidade de voz e as abordagens de correção?",
    "options": [
      "Impacto: voz cortada, palavras truncadas, degradação severa de inteligibilidade — correções: verificar cabo de rede com erros (usar show interfaces no switch), substituir equipamentos defeituosos, implementar QoS para priorizar tráfego de voz, verificar duplex mismatch e eliminar colisões na rede",
      "Aumentar a largura de banda do link WAN resolve automaticamente a perda de pacotes por reduzir congestionamento",
      "Perda de pacotes é sempre causada por problema no ISP — contatar a operadora de internet para investigação resolve o problema",
      "3% de perda é imperceptível para voz humana — Teams usa FEC (Forward Error Correction) para corrigir 100% das perdas automaticamente"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Perda de Pacotes — Impacto e Correção (Nível: avançado).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Impacto: voz cortada, palavras truncadas, degradação severa de inteligibilidade — correções: verificar cabo de rede com erros (usar show interfaces no switch), substituir equipamentos defeituosos, implementar QoS para priorizar tráfego de voz, verificar duplex mismatch e eliminar colisões na rede — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q181",
    "text": "Uma empresa está portando 200 números de telefone para o Microsoft Calling Plan. Quais são as etapas críticas e os riscos do processo de portabilidade que o engenheiro deve gerenciar?",
    "options": [
      "Portabilidade de 200 números é imediata — Microsoft processa em até 24 horas com confirmação automática por e-mail",
      "Etapas: submeter LOA assinada com dados corretos da conta, aguardar aprovação Microsoft (pode levar semanas), confirmar data de portabilidade, preparar usuários para mudança, validar números após portabilidade; Riscos: rejeição por dados incorretos na LOA, indisponibilidade temporária de números durante corte, números parcialmente portados se lote for muito grande",
      "O único risco é o custo — a portabilidade pode gerar cobranças da operadora original que devem ser negociadas previamente",
      "Números portados funcionam imediatamente após submissão da LOA sem necessidade de configuração adicional no Teams"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Portabilidade — Processo Detalhado (Nível: avançado).",
      "papoReto": "Calling Plan = Microsoft é operadora PSTN, cobrança por minuto/planos, zero infraestrutura SBC/SIP sua",
      "respostaCerta": "Etapas: submeter LOA assinada com dados corretos da conta, aguardar aprovação Microsoft (pode levar semanas), confirmar data de portabilidade, preparar usuários para mudança, validar números após portabilidade; Riscos: rejeição por dados incorretos na LOA, indisponibilidade temporária de números durante corte, números parcialmente portados se lote for muito grande — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Calling Plan = Microsoft cuida de tudo, você só paga e disca",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Disponibilidade por país varia — verificar suporte regional Microsoft antes contratação"
    }
  },
  {
    "id": "ms721_q182",
    "text": "Um administrador deseja que o número de discagem padrão exibido nos convites de reunião do Teams seja um número local específico do Brasil em vez do número genérico internacional. Como realizar essa configuração para todos os usuários da organização?",
    "options": [
      "Editar o template de convite de reunião no Outlook para incluir manualmente o número brasileiro em todos os convites futuros",
      "Teams Admin Center > Reuniões > Pontes de conferência > configurar o número brasileiro como padrão da ponte; depois atualizar configurações de audioconferência dos usuários via PowerShell (Set-CsOnlineDialInConferencingUser) para apontar para o número brasileiro",
      "Alterar configurações de idioma e região do tenant para Brasil no Microsoft 365 Admin Center automaticamente altera o número de conferência",
      "Configurar um Atendedor Automático com número brasileiro que redireciona todas as chamadas para a ponte de conferência padrão"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Número de Conferência — Personalização (Nível: intermediário).",
      "papoReto": "Calling Plan = Microsoft é operadora PSTN, cobrança por minuto/planos, zero infraestrutura SBC/SIP sua",
      "respostaCerta": "Teams Admin Center > Reuniões > Pontes de conferência > configurar o número brasileiro como padrão da ponte; depois atualizar configurações de audioconferência dos usuários via PowerShell (Set-CsOnlineDialInConferencingUser) para apontar para o número brasileiro — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Calling Plan = Microsoft cuida de tudo, você só paga e disca",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Disponibilidade por país varia — verificar suporte regional Microsoft antes contratação"
    }
  },
  {
    "id": "ms721_q183",
    "text": "Durante uma reunião, participantes remotos reclamam que a câmera do Teams Rooms está preta (sem imagem). O áudio funciona normalmente. Qual sequência de diagnóstico deve ser seguida?",
    "options": [
      "Verificar política de reunião do organizador — câmera desativada por política é a causa mais comum de imagem preta em salas",
      "Apenas reiniciar o MTR resolve 100% dos problemas de câmera; se persistir, substituir o hardware imediatamente",
      "1) Verificar se câmera está fisicamente conectada e com LED ativo; 2) Reiniciar o sistema Teams Rooms; 3) Verificar no Teams Admin Center se a câmera aparece na lista de dispositivos da sala; 4) Verificar log do MTR para erros de câmera; 5) Testar câmera em reunião de diagnóstico; 6) Atualizar driver da câmera se necessário",
      "Problemas de câmera em MTR são sempre causados por firewall bloqueando stream de vídeo — verificar portas UDP no firewall"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Teams Rooms — Resolução de Problemas de Câmera (Nível: intermediário).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "1) Verificar se câmera está fisicamente conectada e com LED ativo; 2) Reiniciar o sistema Teams Rooms; 3) Verificar no Teams Admin Center se a câmera aparece na lista de dispositivos da sala; 4) Verificar log do MTR para erros de câmera; 5) Testar câmera em reunião de diagnóstico; 6) Atualizar driver da câmera se necessário — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q184",
    "text": "Um usuário reclama que o telefone IP Teams não reproduz som durante chamadas, mas o microfone funciona. O interlocutor ouve o usuário mas o usuário não ouve nada. Qual é a causa mais provável?",
    "options": [
      "Codec de áudio incompatível impedindo decodificação de áudio de entrada — atualizar firmware resolve",
      "Política de chamada bloqueando recebimento de áudio de chamadas externas aplicada incorretamente ao dispositivo",
      "Problema de rede bloqueando stream de áudio de entrada — verificar firewall para portas UDP de recepção de mídia",
      "Volume do alto-falante zerado ou mudo no telefone, problema no alto-falante físico do dispositivo ou configuração de áudio incorreta no perfil do dispositivo — verificar controles de volume físicos, testar com fone de ouvido e verificar configuração de perfil de áudio no Teams Admin Center"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Telefones Teams — Troubleshooting de Áudio (Nível: intermediário).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Volume do alto-falante zerado ou mudo no telefone, problema no alto-falante físico do dispositivo ou configuração de áudio incorreta no perfil do dispositivo — verificar controles de volume físicos, testar com fone de ouvido e verificar configuração de perfil de áudio no Teams Admin Center — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q185",
    "text": "Um engenheiro deseja receber notificações proativas de incidentes de serviço do Microsoft Teams diretamente no Microsoft Teams ou por e-mail. Como configurar essas notificações?",
    "options": [
      "Assinar o feed RSS do portal de status do Microsoft 365 e usar Power Automate para postar atualizações no Teams",
      "Configurar webhook do Azure Monitor para capturar eventos de saúde do Microsoft 365 e postar no Teams",
      "Microsoft 365 Admin Center > Integridade > Preferências de notificação — configurar e-mail de notificação para incidentes e avisos do Teams; complementar com Microsoft 365 Service Health app no Teams para receber notificações diretamente no canal",
      "Habilitar alertas no Microsoft Sentinel com conector de saúde de serviço Microsoft 365 para notificações em tempo real"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: Microsoft 365 Service Health — Integração (Nível: intermediário).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "Microsoft 365 Admin Center > Integridade > Preferências de notificação — configurar e-mail de notificação para incidentes e avisos do Teams; complementar com Microsoft 365 Service Health app no Teams para receber notificações diretamente no canal — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "Microsoft Sentinel is a security/SIEM tool, not a phone system monitoring dashboard — it's not designed for tracking SBC connectivity or voice quality"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q186",
    "text": "Após um incidente de 2 horas onde chamadas PSTN falharam para 500 usuários, o gestor solicita uma análise de causa raiz (RCA). Quais elementos devem compor esse documento?",
    "options": [
      "Relatório de CQD do período do incidente exportado em PDF sem análise adicional de causa raiz ou prevenção",
      "Linha do tempo do incidente (detecção, diagnóstico, resolução), causa raiz técnica identificada (ex.: certificado TLS SBC expirado), impacto no negócio quantificado, ações tomadas durante o incidente, ações corretivas implementadas e preventivas planejadas (ex.: alertas de expiração de certificado com 30 dias de antecedência)",
      "Lista completa de todos os usuários afetados com logs de chamadas individuais e custo calculado por chamada perdida",
      "Apenas a descrição técnica do problema e o comando executado para resolver — sem necessidade de timeline ou ações preventivas"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: Análise de Causa Raiz — Post-Incident (Nível: avançado).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "Linha do tempo do incidente (detecção, diagnóstico, resolução), causa raiz técnica identificada (ex.: certificado TLS SBC expirado), impacto no negócio quantificado, ações tomadas durante o incidente, ações corretivas implementadas e preventivas planejadas (ex.: alertas de expiração de certificado com 30 dias de antecedência) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "Call Quality Dashboard shows user-side call quality metrics (jitter, packet loss, latency), not SBC connection status — use Health Dashboard for Direct Routing instead",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q187",
    "text": "Uma organização tem 1.500 usuários no PBX Avaya legado e quer migrar para Teams Phone em 6 meses. Quais fases um engenheiro MS-721 deve planejar para uma migração bem-sucedida?",
    "options": [
      "Fase 1: Avaliação (inventário de números, ramais, funcionalidades PBX usadas); Fase 2: Design (escolha Direct Routing/Calling Plan, dimensionamento SBC, design de rede); Fase 3: Piloto (50 usuários não críticos); Fase 4: Migração em ondas por departamento; Fase 5: Cutover final e descomissionamento do PBX; Fase 6: Estabilização e suporte pós-migração",
      "Iniciar com fase de conformidade e eDiscovery antes de qualquer configuração técnica para garantir compliance desde o início",
      "Apenas configurar Teams Phone e enviar e-mail para usuários explicando como usar — migração de PBX não requer fases formais",
      "Migrar todos os 1.500 usuários em um único fim de semana para minimizar o período de coexistência e reduzir complexidade"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Voz — Planejamento de Migração (Nível: avançado).",
      "papoReto": "E.164 é formato internacional obrigatório (+55 11 98765-4321), máscara chamada mascara origem, portabilidade numérica via LOA",
      "respostaCerta": "Fase 1: Avaliação (inventário de números, ramais, funcionalidades PBX usadas); Fase 2: Design (escolha Direct Routing/Calling Plan, dimensionamento SBC, design de rede); Fase 3: Piloto (50 usuários não críticos); Fase 4: Migração em ondas por departamento; Fase 5: Cutover final e descomissionamento do PBX; Fase 6: Estabilização e suporte pós-migração — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "E.164 = +55 11 números, obrigatório PSTN; usuário vs serviço — impacto aplicabilidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Portabilidade exige LOA, conta faturamento, números E.164, data desejada"
    }
  },
  {
    "id": "ms721_q188",
    "text": "Uma empresa de marketing realiza webinars no Teams e deseja sincronizar automaticamente dados de registrantes (nome, e-mail, empresa) com seu CRM Salesforce. Qual abordagem Microsoft é recomendada?",
    "options": [
      "Exportar lista de registrantes manualmente do Teams em CSV e importar no Salesforce semanalmente via Data Loader",
      "Usar Power Automate com conector do Microsoft Teams Webinar (via Graph API de eventos) e conector do Salesforce para sincronizar registrantes automaticamente após cada registro ou ao final do webinar",
      "Microsoft Teams possui integração nativa com Salesforce que sincroniza automaticamente sem necessidade de configuração adicional",
      "Usar Microsoft Dynamics 365 como intermediário obrigatório — integração direta Teams Webinar → Salesforce não é suportada"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Webinar — Integração com CRM (Nível: avançado).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "Usar Power Automate com conector do Microsoft Teams Webinar (via Graph API de eventos) e conector do Salesforce para sincronizar registrantes automaticamente após cada registro ou ao final do webinar — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q189",
    "text": "Antes de implantar Teams Phone para 800 usuários em 3 sites, um engenheiro realiza avaliação de rede. Quais testes e análises devem ser conduzidos em cada site?",
    "options": [
      "Analisar relatórios históricos do CQD do site — se não há dados ruins o site está pronto para Teams Phone sem testes adicionais",
      "Apenas verificar velocidade de internet com Speedtest.net — se acima de 10 Mbps por usuário Teams funciona sem problemas",
      "Executar Teams Network Assessment Tool por pelo menos 2 semanas em horário de pico medindo latência RTT, jitter e perda de pacotes; usar Teams Network Planner para calcular requisitos de banda; verificar capacidade de saída de internet, configuração de firewall (portas UDP), QoS e redundância de link",
      "Executar ping para microsoft.com e verificar se latência é menor que 500ms — suficiente para validar prontidão para Teams Phone"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Avaliação de Rede — Pré-implantação (Nível: intermediário).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Executar Teams Network Assessment Tool por pelo menos 2 semanas em horário de pico medindo latência RTT, jitter e perda de pacotes; usar Teams Network Planner para calcular requisitos de banda; verificar capacidade de saída de internet, configuração de firewall (portas UDP), QoS e redundância de link — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "Call Quality Dashboard shows user-side call quality metrics (jitter, packet loss, latency), not SBC connection status — use Health Dashboard for Direct Routing instead",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q190",
    "text": "Como o Microsoft Teams Phone valida a identidade de um SBC durante o estabelecimento de conexão SIP TLS para Direct Routing?",
    "options": [
      "Teams usa autenticação por senha compartilhada (shared secret) configurada no New-CsOnlinePSTNGateway com parâmetro -Password",
      "Mutual TLS (mTLS) — o Teams valida o certificado do SBC verificando: FQDN corresponde ao registrado no New-CsOnlinePSTNGateway, certificado emitido por CA confiável da lista Microsoft, certificado não expirado e não revogado; o SBC também valida certificado da Microsoft",
      "Teams usa autenticação por IP — apenas o IP público do SBC precisa estar registrado, sem necessidade de certificado TLS",
      "Teams usa autenticação por token OAuth 2.0 — o SBC obtém token do Azure AD e o inclui em cada mensagem SIP"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Segurança — TLS Mutual Authentication (Nível: avançado).",
      "papoReto": "Direct Routing = você gerencia SBC certificado Microsoft, máxima flexibilidade e controle troncos SIP",
      "respostaCerta": "Mutual TLS (mTLS) — o Teams valida o certificado do SBC verificando: FQDN corresponde ao registrado no New-CsOnlinePSTNGateway, certificado emitido por CA confiável da lista Microsoft, certificado não expirado e não revogado; o SBC também valida certificado da Microsoft — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Direct Routing = seu SBC, seu controle, máxima complexidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "SBCs certificados: AudioCodes, Ribbon, Mediant, Acme/Ixia — verificar compatibilidade Microsoft"
    }
  },
  {
    "id": "ms721_q191",
    "text": "Um sistema Teams Rooms está em uma sala sem câmera instalada. Como o sistema se comporta em reuniões quando não há câmera disponível?",
    "options": [
      "O MTR entra em modo de emergência exibindo mensagem de erro e solicitando que administrador instale câmera antes de usar",
      "O MTR funciona normalmente para áudio e compartilhamento de conteúdo — apenas o vídeo da sala não é transmitido; participantes remotos veem o avatar/nome da sala e podem ouvir perfeitamente via microfone e alto-falante da sala",
      "Sem câmera o MTR bloqueia completamente o ingresso em reuniões — câmera é componente obrigatório para funcionamento do Teams Rooms",
      "O sistema usa automaticamente a câmera do notebook mais próximo via Bluetooth como câmera substituta temporária"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Teams Rooms — Modo Apenas Áudio (Nível: iniciante).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "O MTR funciona normalmente para áudio e compartilhamento de conteúdo — apenas o vídeo da sala não é transmitido; participantes remotos veem o avatar/nome da sala e podem ouvir perfeitamente via microfone e alto-falante da sala — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q192",
    "text": "Um telefone IP Teams foi provisionado remotamente via Teams Admin Center com código de verificação, mas após inserir o código o dispositivo mostra \"Falha na autenticação\". Quais são as causas mais prováveis?",
    "options": [
      "Código de verificação expirado (válido por tempo limitado), usuário sem licença Teams atribuída, política de acesso condicional bloqueando dispositivos não gerenciados, conta do usuário bloqueada no Azure AD ou clock do dispositivo muito desincronizado invalidando tokens",
      "O FQDN do tenant Microsoft 365 não está configurado no telefone — necessário configuração manual na interface web do dispositivo",
      "O código de verificação do Teams Admin Center é permanente — falha de autenticação é sempre causada por senha incorreta",
      "Problema de firmware do telefone — versão desatualizada causa falha de autenticação; atualizar via USB resolve"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: Troubleshooting — Falha de Provisionamento (Nível: intermediário).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "Código de verificação expirado (válido por tempo limitado), usuário sem licença Teams atribuída, política de acesso condicional bloqueando dispositivos não gerenciados, conta do usuário bloqueada no Azure AD ou clock do dispositivo muito desincronizado invalidando tokens — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q193",
    "text": "Um usuário do Teams Phone configura encaminhamento de chamada para número externo quando não atende após 20 segundos. O administrador precisa restringir essa capacidade para evitar custos inesperados. Qual é a abordagem correta?",
    "options": [
      "Remover a licença de Calling Plan do usuário para impedir encaminhamento para números externos automaticamente",
      "Usar política de conformidade de comunicação para detectar e bloquear chamadas encaminhadas para externos em tempo real",
      "Configurar política de chamada com \"Encaminhamento de chamada e toque simultâneo para números externos\" desativado e atribuir aos usuários que não devem ter essa permissão — usuários ainda podem encaminhar para outros usuários Teams internos",
      "Configurar regra de firewall bloqueando chamadas de saída iniciadas por encaminhamento automático no SBC"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Política de Chamada — Encaminhamento Avançado (Nível: avançado).",
      "papoReto": "E.164 é formato internacional obrigatório (+55 11 98765-4321), máscara chamada mascara origem, portabilidade numérica via LOA",
      "respostaCerta": "Configurar política de chamada com \"Encaminhamento de chamada e toque simultâneo para números externos\" desativado e atribuir aos usuários que não devem ter essa permissão — usuários ainda podem encaminhar para outros usuários Teams internos — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "E.164 = +55 11 números, obrigatório PSTN; usuário vs serviço — impacto aplicabilidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Portabilidade exige LOA, conta faturamento, números E.164, data desejada"
    }
  },
  {
    "id": "ms721_q194",
    "text": "O Microsoft Teams Premium oferece recursos de inteligência de reunião pós-evento. Quais são esses recursos e como beneficiam participantes que perderam a reunião?",
    "options": [
      "Notificação automática por e-mail com resumo executivo gerado pela equipe de suporte Microsoft para reuniões Premium",
      "Resumo inteligente com IA (capítulos de reunião, marcadores de momentos importantes, itens de ação identificados automaticamente), transcrição pesquisável, gravação com navegação por palestrante e perguntas ao Copilot sobre conteúdo da reunião — tudo acessível no Teams após a reunião",
      "Relatório de presença detalhado mostrando quanto tempo cada participante ficou na reunião e nível de engajamento individual",
      "Apenas gravação automática e transcrição básica — recursos de IA para resumo requerem licença adicional de Copilot separada"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Qualidade de Reunião — Teams Premium Intelligence (Nível: avançado).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "Resumo inteligente com IA (capítulos de reunião, marcadores de momentos importantes, itens de ação identificados automaticamente), transcrição pesquisável, gravação com navegação por palestrante e perguntas ao Copilot sobre conteúdo da reunião — tudo acessível no Teams após a reunião — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q195",
    "text": "Um engenheiro implementa um programa de monitoramento proativo de qualidade de chamadas Teams para identificar problemas antes que usuários reclamem. Quais são os componentes desse programa?",
    "options": [
      "Dashboard semanal do CQD com KPIs de Poor Stream Rate por site/modalidade, alertas automáticos no Teams Admin Center para degradação de qualidade, revisão mensal de tendências com comparação histórica, correlação de métricas de rede (QoS, utilização de WAN) com qualidade e loop de feedback com helpdesk para correlacionar tickets com dados do CQD",
      "Monitorar apenas uptime do SBC via SNMP — se o SBC está online a qualidade das chamadas é garantida automaticamente",
      "Apenas configurar alertas de email quando usuários avaliam chamadas como ruins no Rate My Call — abordagem reativa suficiente",
      "Executar Network Assessment Tool diariamente em cada site e documentar resultados em planilha Excel manualmente"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Monitoramento Proativo de Qualidade (Nível: avançado).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Dashboard semanal do CQD com KPIs de Poor Stream Rate por site/modalidade, alertas automáticos no Teams Admin Center para degradação de qualidade, revisão mensal de tendências com comparação histórica, correlação de métricas de rede (QoS, utilização de WAN) com qualidade e loop de feedback com helpdesk para correlacionar tickets com dados do CQD — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q196",
    "text": "Um supervisor de call center precisa de relatório em tempo real mostrando quais agentes estão disponíveis, em chamada ou ausentes na fila de chamada do Teams. Qual recurso fornece essa visibilidade?",
    "options": [
      "Power BI com conector nativo de filas de chamada Teams mostrando dashboard em tempo real sem configuração adicional",
      "O aplicativo de Supervisão de Fila de Chamada (Call Queue Real-time Analytics) no Teams Admin Center ou via parceiro CCaaS integrado — mostra status de agentes em tempo real, chamadas ativas e métricas de fila; relatórios históricos disponíveis no Teams Admin Center > Análise e relatórios",
      "Microsoft Viva Insights fornece relatório de disponibilidade de agentes de fila de chamada em tempo real",
      "CQD com filtro de fila de chamada específica mostra agentes disponíveis e em chamada em tempo real"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Fila de Chamada — Relatório de Agentes (Nível: intermediário).",
      "papoReto": "Fila = buffer chamadas entrantes, música espera, presença agentes automática, roteamento (FIFO/Longest Idle), relatórios perdidas",
      "respostaCerta": "O aplicativo de Supervisão de Fila de Chamada (Call Queue Real-time Analytics) no Teams Admin Center ou via parceiro CCaaS integrado — mostra status de agentes em tempo real, chamadas ativas e métricas de fila; relatórios históricos disponíveis no Teams Admin Center > Análise e relatórios — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Fila = múltiplos agentes, FIFO + Longest Idle, presença automática, timeout/redirecionamento",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "Call Quality Dashboard shows user-side call quality metrics (jitter, packet loss, latency), not SBC connection status — use Health Dashboard for Direct Routing instead"
      ],
      "dicaOuro": "Longest Idle distribui para agente menos ocupado — combinar FIFO + Longest Idle reduz espera"
    }
  },
  {
    "id": "ms721_q197",
    "text": "Um administrador deseja controlar quando a atualização do aplicativo Microsoft Teams Rooms é aplicada nos dispositivos da organização, evitando atualizações automáticas imediatas. Como configurar esse controle?",
    "options": [
      "Desativar atualizações automáticas no registro do Windows do MTR e aplicar atualizações manualmente via SCCM",
      "Teams Admin Center > Dispositivos > configurar regras de atualização do Teams Rooms — definir rings de atualização (automático ou manual), janela de manutenção e fase de implantação (piloto antes de amplo) para controlar o timing das atualizações do app MTR",
      "Configurar política de Intune bloqueando atualizações de aplicativos de terceiros no dispositivo MTR Windows",
      "Usar Windows Update for Business para controlar atualizações do aplicativo Teams Rooms como qualquer outro aplicativo Windows"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: MTR — Atualização de Aplicativo Teams Rooms (Nível: intermediário).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Teams Admin Center > Dispositivos > configurar regras de atualização do Teams Rooms — definir rings de atualização (automático ou manual), janela de manutenção e fase de implantação (piloto antes de amplo) para controlar o timing das atualizações do app MTR — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q198",
    "text": "Um engenheiro MS-721 realiza revisão mensal de saúde do ambiente de comunicações Teams. Quais verificações específicas de voz e dispositivos devem estar nessa checklist?",
    "options": [
      "Revisar tickets de suporte do mês e confirmar resolução — indicador suficiente de saúde do ambiente de comunicações",
      "Apenas verificar uptime do SBC e confirmar que o serviço Teams está online no portal Microsoft — suficiente para revisão mensal",
      "Verificar: certificados TLS dos SBCs (validade e renovação pendente), firmware de dispositivos (telefones, MTRs, painéis) com atualizações disponíveis, Poor Stream Rate no CQD por site, relatório PSTN de uso e anomalias, status de dispositivos offline, alertas ativos no Teams Admin Center e teste de chamada de emergência mensal",
      "Executar Network Assessment Tool em todos os sites mensalmente e documentar latência, jitter e perda de pacotes"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: Checklist de Saúde Mensal (Nível: intermediário).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "Verificar: certificados TLS dos SBCs (validade e renovação pendente), firmware de dispositivos (telefones, MTRs, painéis) com atualizações disponíveis, Poor Stream Rate no CQD por site, relatório PSTN de uso e anomalias, status de dispositivos offline, alertas ativos no Teams Admin Center e teste de chamada de emergência mensal — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q199",
    "text": "Como o Azure Communication Services (ACS) pode complementar o Microsoft Teams Phone em um cenário de contact center corporativo?",
    "options": [
      "ACS fornece apenas armazenamento de gravações de chamadas na nuvem Azure como complemento ao Teams Phone",
      "ACS é usado apenas para autenticação de usuários externos em reuniões Teams sem integração com chamadas PSTN",
      "ACS fornece APIs de vídeo, voz, chat e SMS para desenvolvimento de aplicativos personalizados de comunicação — pode integrar canais digitais (web chat, SMS, WhatsApp) com Teams Phone, permitindo que agentes Teams atendam múltiplos canais em uma interface unificada via arquitetura CCaaS customizada",
      "ACS substitui completamente o Teams Phone para contact centers — não há cenário de uso complementar entre os dois serviços"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Integração com Azure Communication Services (Nível: avançado).",
      "papoReto": "Teams Phone é PBX gerenciado Microsoft na nuvem, core de telefonia em Teams com transferência, correio voz, auto-atendentes, filas",
      "respostaCerta": "ACS fornece APIs de vídeo, voz, chat e SMS para desenvolvimento de aplicativos personalizados de comunicação — pode integrar canais digitais (web chat, SMS, WhatsApp) com Teams Phone, permitindo que agentes Teams atendam múltiplos canais em uma interface unificada via arquitetura CCaaS customizada — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Phone = PBX nuvem Microsoft, nome antigo Phone System, mesma coisa",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Phone System = Teams Phone (rebrand 2019) — mesma solução, apenas nome novo"
    }
  },
  {
    "id": "ms721_q200",
    "text": "Uma empresa brasileira com 300 usuários de voz avalia opções de conectividade PSTN para Teams Phone. Tem contrato vigente com operadora local, infraestrutura de rede madura e equipe técnica capacitada. Qual opção de PSTN é mais adequada e por quê?",
    "options": [
      "Direct Routing com SBC certificado é mais adequado — mantém contrato com operadora local existente, aproveita infraestrutura de rede madura para hospedar/conectar o SBC, dá controle total sobre roteamento e tem equipe técnica para gerenciar; Calling Plan não está disponível no Brasil; Operator Connect depende da operadora ser parceira Microsoft",
      "Azure Communication Services deve ser usado como PSTN para empresas brasileiras pois suporta números locais nativamente",
      "Operator Connect é automaticamente preferível ao Direct Routing por eliminar necessidade de gerenciar SBC próprio",
      "Microsoft Calling Plan é sempre a melhor opção por ser totalmente gerenciado pela Microsoft sem necessidade de SBC próprio"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Revisão Geral",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Revisão Geral — subtema: Arquitetura de Voz — Decisão de Solução (Nível: avançado).",
      "papoReto": "E.164 é formato internacional obrigatório (+55 11 98765-4321), máscara chamada mascara origem, portabilidade numérica via LOA",
      "respostaCerta": "Direct Routing com SBC certificado é mais adequado — mantém contrato com operadora local existente, aproveita infraestrutura de rede madura para hospedar/conectar o SBC, dá controle total sobre roteamento e tem equipe técnica para gerenciar; Calling Plan não está disponível no Brasil; Operator Connect depende da operadora ser parceira Microsoft — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "E.164 = +55 11 números, obrigatório PSTN; usuário vs serviço — impacto aplicabilidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Portabilidade exige LOA, conta faturamento, números E.164, data desejada"
    }
  },
  {
    "id": "ms721_q201",
    "text": "Um usuário do Teams deseja que suas chamadas recebidas toquem simultaneamente para ele e mais dois colegas específicos. Qual recurso do Teams Phone permite essa configuração e como é habilitado?",
    "options": [
      "Chamada em grupo (Group Call Pickup) — configurável nas configurações de chamada do usuário no Teams; permite adicionar membros do grupo que recebem notificação e podem atender chamadas destinadas ao usuário principal",
      "Toque simultâneo configurado no Atendedor Automático redirecionando para os três usuários em paralelo",
      "Fila de Chamada com os três usuários como agentes usando roteamento de toque simultâneo",
      "Delegação de chamadas — configurar os dois colegas como delegados do usuário nas configurações de voz"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Configuração de Chamada em Grupo (Nível: intermediário).",
      "papoReto": "E.164 é formato internacional obrigatório (+55 11 98765-4321), máscara chamada mascara origem, portabilidade numérica via LOA",
      "respostaCerta": "Chamada em grupo (Group Call Pickup) — configurável nas configurações de chamada do usuário no Teams; permite adicionar membros do grupo que recebem notificação e podem atender chamadas destinadas ao usuário principal — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "E.164 = +55 11 números, obrigatório PSTN; usuário vs serviço — impacto aplicabilidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Portabilidade exige LOA, conta faturamento, números E.164, data desejada"
    }
  },
  {
    "id": "ms721_q202",
    "text": "Um usuário do Teams Phone está em uma chamada ativa e recebe uma segunda chamada. Quais opções ele tem para gerenciar as duas chamadas simultaneamente?",
    "options": [
      "Transferir a chamada atual antes de atender a nova — não é possível ter duas chamadas ativas ao mesmo tempo",
      "A segunda chamada é automaticamente direcionada ao correio de voz sem opção de intervenção do usuário",
      "Apenas rejeitar a segunda chamada — Teams Phone não suporta múltiplas chamadas simultâneas para o mesmo usuário",
      "Colocar a chamada atual em espera e atender a nova chamada, rejeitar a nova chamada, ou usar a função de mesclar chamadas para criar uma conferência de 3 vias entre todos os participantes"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Chamada em Espera — Recursos (Nível: iniciante).",
      "papoReto": "E.164 é formato internacional obrigatório (+55 11 98765-4321), máscara chamada mascara origem, portabilidade numérica via LOA",
      "respostaCerta": "Colocar a chamada atual em espera e atender a nova chamada, rejeitar a nova chamada, ou usar a função de mesclar chamadas para criar uma conferência de 3 vias entre todos os participantes — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "E.164 = +55 11 números, obrigatório PSTN; usuário vs serviço — impacto aplicabilidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Portabilidade exige LOA, conta faturamento, números E.164, data desejada"
    }
  },
  {
    "id": "ms721_q203",
    "text": "A Microsoft classifica endpoints do Microsoft 365 em três categorias para otimização de rede. Qual é a diferença entre as categorias \"Optimize\" e \"Allow\" no contexto do Teams?",
    "options": [
      "Optimize: endpoints mais críticos para Teams (sinalização e mídia em tempo real) — devem ter bypass completo de proxy/inspeção e QoS aplicado; Allow: endpoints importantes mas com menor sensibilidade a latência — acesso direto recomendado mas inspeção leve tolerável",
      "Não há diferença prática — ambas as categorias têm os mesmos requisitos de rede e podem ser tratadas identicamente",
      "Optimize é para tráfego criptografado; Allow é para tráfego não criptografado — diferença baseada em protocolo",
      "Optimize requer ExpressRoute obrigatório; Allow pode usar internet pública sem requisitos especiais de conectividade"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Categorias de Endpoints Microsoft 365 (Nível: intermediário).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Optimize: endpoints mais críticos para Teams (sinalização e mídia em tempo real) — devem ter bypass completo de proxy/inspeção e QoS aplicado; Allow: endpoints importantes mas com menor sensibilidade a latência — acesso direto recomendado mas inspeção leve tolerável — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q204",
    "text": "Uma filial remota tem latência RTT de 180ms para os servidores Microsoft 365. Qual é o impacto esperado nas chamadas Teams e como mitigar?",
    "options": [
      "Latência alta afeta apenas videoconferências — chamadas de voz funcionam perfeitamente com até 500ms de latência RTT",
      "Implementar ExpressRoute resolve automaticamente o problema de latência para qualquer filial independentemente da localização",
      "180ms é abaixo do limite de 200ms — nenhuma ação necessária pois a qualidade está dentro dos parâmetros aceitáveis",
      "Latência de 180ms causa atraso perceptível na conversa (eco e sobreposição de fala), degradando experiência de voz — mitigação: implementar saída de internet local na filial para reduzir latência, evitar backhaul ao datacenter central e verificar se há congestionamento no link WAN"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Latência — Impacto em Chamadas (Nível: intermediário).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Latência de 180ms causa atraso perceptível na conversa (eco e sobreposição de fala), degradando experiência de voz — mitigação: implementar saída de internet local na filial para reduzir latência, evitar backhaul ao datacenter central e verificar se há congestionamento no link WAN — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q205",
    "text": "Um engenheiro gerencia 50 dispositivos MTR on Android distribuídos em salas de reunião. Quais desafios específicos do Android Enterprise o engenheiro deve considerar em relação ao MTR on Windows?",
    "options": [
      "MTR Android não é suportado pelo Intune — requer solução MDM de terceiros específica para Android corporativo",
      "MTR Android e MTR Windows são idênticos em gerenciamento — ambos usam o mesmo portal de administração sem diferenças",
      "MTR Android tem funcionalidade reduzida e não suporta reuniões com mais de 10 participantes comparado ao MTR Windows",
      "MTR Android usa Android Enterprise Dedicated Device mode (sem conta de usuário pessoal), atualizações do app Teams Rooms são gerenciadas pela Google Play Store gerenciada via Intune, o sistema operacional Android tem ciclo de atualização diferente do Windows e algumas funcionalidades avançadas do MTR Pro Portal podem ter suporte limitado em Android vs. Windows"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: MTR on Android — Gerenciamento (Nível: avançado).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "MTR Android usa Android Enterprise Dedicated Device mode (sem conta de usuário pessoal), atualizações do app Teams Rooms são gerenciadas pela Google Play Store gerenciada via Intune, o sistema operacional Android tem ciclo de atualização diferente do Windows e algumas funcionalidades avançadas do MTR Pro Portal podem ter suporte limitado em Android vs. Windows — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q206",
    "text": "O que é o recurso IntelliFrame da Microsoft para câmeras de sala Teams Rooms e qual problema ele resolve em reuniões híbridas?",
    "options": [
      "IntelliFrame é o sistema de gerenciamento centralizado de câmeras IP da Microsoft para salas de reunião corporativas",
      "IntelliFrame adiciona moldura (frame) personalizada com logo corporativo ao redor do vídeo da câmera da sala",
      "IntelliFrame usa IA para capturar uma visão panorâmica da sala e criar enquadramentos individuais virtuais de cada participante presencial — participantes remotos veem cada pessoa da sala em seu próprio quadro de vídeo individual, tornando a experiência mais equitativa entre presenciais e remotos",
      "IntelliFrame é o modo de enquadramento automático que zoom no apresentador ignorando os demais participantes da sala"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Câmeras Panorâmicas — IntelliFrame (Nível: avançado).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "IntelliFrame usa IA para capturar uma visão panorâmica da sala e criar enquadramentos individuais virtuais de cada participante presencial — participantes remotos veem cada pessoa da sala em seu próprio quadro de vídeo individual, tornando a experiência mais equitativa entre presenciais e remotos — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q207",
    "text": "Um administrador precisa adquirir 20 novos números de telefone para usuários Teams com Microsoft Calling Plan nos Estados Unidos. Onde e como esses números são adquiridos?",
    "options": [
      "Abrir ticket no Microsoft 365 Admin Center > Suporte solicitando alocação de novos números para o tenant",
      "Teams Admin Center > Voz > Números de telefone > Adicionar — selecionar país (EUA), tipo de número (usuário), quantidade (20) e área geográfica desejada; os números são disponibilizados imediatamente para atribuição",
      "Contatar a Microsoft por telefone ou e-mail solicitando novos números — não é possível adquirir números diretamente pelo portal",
      "Comprar números de uma operadora PSTN externa e importar para o Teams Admin Center via portabilidade"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Números de Telefone — Aquisição (Nível: iniciante).",
      "papoReto": "Calling Plan = Microsoft é operadora PSTN, cobrança por minuto/planos, zero infraestrutura SBC/SIP sua",
      "respostaCerta": "Teams Admin Center > Voz > Números de telefone > Adicionar — selecionar país (EUA), tipo de número (usuário), quantidade (20) e área geográfica desejada; os números são disponibilizados imediatamente para atribuição — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Calling Plan = Microsoft cuida de tudo, você só paga e disca",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Disponibilidade por país varia — verificar suporte regional Microsoft antes contratação"
    }
  },
  {
    "id": "ms721_q208",
    "text": "Uma empresa deseja que quando um usuário Teams coloca uma chamada em espera, o interlocutor ouça a música tema da empresa em vez da música padrão Microsoft. Como configurar isso?",
    "options": [
      "Substituir o arquivo de áudio padrão do Teams no servidor SharePoint da organização pelo arquivo da empresa",
      "Criar Power Automate flow que detecta chamadas em espera e injeta stream de áudio personalizado via Graph API",
      "Configurar na conta de recurso do Atendedor Automático a música personalizada que é aplicada globalmente a todas as esperas",
      "Política de chamada (Calling Policy) — habilitar \"Música em espera personalizada\" e fazer upload do arquivo de áudio (MP3/WAV) da música tema; atribuir a política aos usuários que devem usar a música personalizada"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Política de Chamada — Música em Espera Personalizada (Nível: intermediário).",
      "papoReto": "E.164 é formato internacional obrigatório (+55 11 98765-4321), máscara chamada mascara origem, portabilidade numérica via LOA",
      "respostaCerta": "Política de chamada (Calling Policy) — habilitar \"Música em espera personalizada\" e fazer upload do arquivo de áudio (MP3/WAV) da música tema; atribuir a política aos usuários que devem usar a música personalizada — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "E.164 = +55 11 números, obrigatório PSTN; usuário vs serviço — impacto aplicabilidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Portabilidade exige LOA, conta faturamento, números E.164, data desejada"
    }
  },
  {
    "id": "ms721_q209",
    "text": "Um engenheiro precisa habilitar o Microsoft Copilot para reuniões Teams na organização. Quais são os pré-requisitos técnicos e de licenciamento necessários?",
    "options": [
      "Licença Microsoft 365 Copilot atribuída ao usuário organizador, transcrição de reunião habilitada na política de reunião, Teams e Microsoft 365 Apps atualizados para versões compatíveis e tenant configurado para receber serviços Copilot (região suportada)",
      "Licença Azure OpenAI Service atribuída ao tenant para processamento de linguagem natural nas reuniões Teams",
      "Apenas licença Teams Premium — Copilot está incluído no Teams Premium sem necessidade de licença adicional",
      "Licença Microsoft 365 E5 com Compliance — Copilot de reuniões está incluído nas licenças de conformidade avançada"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Copilot em Reuniões — Requisitos (Nível: intermediário).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "Licença Microsoft 365 Copilot atribuída ao usuário organizador, transcrição de reunião habilitada na política de reunião, Teams e Microsoft 365 Apps atualizados para versões compatíveis e tenant configurado para receber serviços Copilot (região suportada) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q210",
    "text": "Um engenheiro configura uma reunião Teams para um processo seletivo onde candidatos externos devem aguardar individualmente antes de serem admitidos um a um pelo entrevistador. Qual configuração de lobby garante esse comportamento?",
    "options": [
      "Política de reunião com \"Quem pode ignorar o lobby\" configurado como \"Somente organizadores e co-organizadores\" e desativar ingresso simultâneo — o organizador admite manualmente cada participante do lobby um de cada vez conforme necessário",
      "Configurar Atendedor Automático como pré-sala que autentica candidatos antes de transferir para a reunião principal",
      "Criar uma reunião separada para cada candidato com link único e senha individual para controle de acesso",
      "Usar o recurso de Salas Simultâneas com uma sala por candidato e admiti-los sequencialmente da sala de espera"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Sala de Espera Virtual — Lobby (Nível: intermediário).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "Política de reunião com \"Quem pode ignorar o lobby\" configurado como \"Somente organizadores e co-organizadores\" e desativar ingresso simultâneo — o organizador admite manualmente cada participante do lobby um de cada vez conforme necessário — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q211",
    "text": "O Teams Admin Center mostra que 15 telefones IP Teams estão com status \"Offline\" após uma atualização de rede no escritório. Qual é a causa mais provável e como resolver em escala?",
    "options": [
      "Certificados dos dispositivos expiraram na data da atualização de rede — renovação via Intune é necessária",
      "Licenças dos usuários expiraram simultaneamente após atualização de billing — renovar licenças resolve os 15 dispositivos",
      "Firmware desatualizado nos 15 telefones causando incompatibilidade com nova versão do Teams — atualizar firmware resolve",
      "Mudança de VLAN, sub-rede ou configuração de DHCP após atualização de rede impedindo que dispositivos obtenham conectividade ou se autentiquem — verificar configuração de rede dos switches para portas onde os telefones estão conectados, confirmar VLAN de voz e DHCP corretos e reiniciar dispositivos remotamente pelo Teams Admin Center"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: Relatório de Dispositivos — Análise (Nível: intermediário).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "Mudança de VLAN, sub-rede ou configuração de DHCP após atualização de rede impedindo que dispositivos obtenham conectividade ou se autentiquem — verificar configuração de rede dos switches para portas onde os telefones estão conectados, confirmar VLAN de voz e DHCP corretos e reiniciar dispositivos remotamente pelo Teams Admin Center — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q212",
    "text": "No Per-user Call Analytics, um engenheiro observa que uma chamada usou codec G.711 em vez do esperado SILK/Opus. O que isso indica sobre a natureza da chamada?",
    "options": [
      "Indica que a chamada foi uma chamada PSTN via Direct Routing ou Calling Plan — G.711 é o codec padrão para interoperabilidade com a PSTN; chamadas Teams-to-Teams usam SILK/Opus para melhor qualidade; isso é comportamento normal e esperado para chamadas externas",
      "Indica configuração incorreta no SBC que está rejeitando codecs modernos — corrigir configuração SDP no SBC resolve",
      "Indica problema de compatibilidade — o cliente Teams do usuário está desatualizado e forçando uso de codec legado",
      "Indica que a chamada foi feita por dispositivo móvel — dispositivos Android e iOS sempre negociam G.711 por limitação de hardware"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: Análise de Chamada — Codec Negociado (Nível: avançado).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "Indica que a chamada foi uma chamada PSTN via Direct Routing ou Calling Plan — G.711 é o codec padrão para interoperabilidade com a PSTN; chamadas Teams-to-Teams usam SILK/Opus para melhor qualidade; isso é comportamento normal e esperado para chamadas externas — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q213",
    "text": "Um engenheiro precisa testar manualmente a conectividade TLS entre o SBC e o proxy SIP da Microsoft antes de configurar o Direct Routing. Qual ferramenta e método são recomendados?",
    "options": [
      "Usar telnet sip.pstnhub.microsoft.com 5061 para testar a porta — resposta indica que TLS está configurado corretamente",
      "Usar ping para sip.pstnhub.microsoft.com para verificar conectividade — se responder o TLS também funciona",
      "Executar Teams Network Assessment Tool com modo SBC que testa automaticamente conectividade TLS para Direct Routing",
      "Usar OpenSSL com comando: openssl s_client -connect sip.pstnhub.microsoft.com:5061 — verifica handshake TLS, valida cadeia de certificados e confirma conectividade na porta 5061; complementar com teste de resolução DNS do FQDN do SBC a partir da internet"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: SBC — Teste de Conectividade TLS (Nível: avançado).",
      "papoReto": "Direct Routing = você gerencia SBC certificado Microsoft, máxima flexibilidade e controle troncos SIP",
      "respostaCerta": "Usar OpenSSL com comando: openssl s_client -connect sip.pstnhub.microsoft.com:5061 — verifica handshake TLS, valida cadeia de certificados e confirma conectividade na porta 5061; complementar com teste de resolução DNS do FQDN do SBC a partir da internet — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Direct Routing = seu SBC, seu controle, máxima complexidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "SBCs certificados: AudioCodes, Ribbon, Mediant, Acme/Ixia — verificar compatibilidade Microsoft"
    }
  },
  {
    "id": "ms721_q214",
    "text": "Uma organização tem SBCs em São Paulo e no Rio de Janeiro para redundância geográfica. Como configurar o failover automático entre os dois SBCs no Teams Phone?",
    "options": [
      "Configurar dois tenants Microsoft 365 separados com Direct Routing independente e DNS geo-redundante",
      "Criar dois Dial Plans separados — um para SP e um para RJ — e alternar manualmente entre eles em caso de falha",
      "Criar uma Voice Route com dois gateways (SBC-SP e SBC-RJ) com prioridades diferentes na mesma rota — Teams tenta SBC-SP primeiro (Priority 1) e falha automaticamente para SBC-RJ (Priority 2) se SP estiver indisponível; monitorar status via Health Dashboard",
      "Usar Azure Traffic Manager com perfil de failover apontando para os dois SBCs com health probes automáticos"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Redundância Geográfica de SBC (Nível: avançado).",
      "papoReto": "Direct Routing = você gerencia SBC certificado Microsoft, máxima flexibilidade e controle troncos SIP",
      "respostaCerta": "Criar uma Voice Route com dois gateways (SBC-SP e SBC-RJ) com prioridades diferentes na mesma rota — Teams tenta SBC-SP primeiro (Priority 1) e falha automaticamente para SBC-RJ (Priority 2) se SP estiver indisponível; monitorar status via Health Dashboard — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Direct Routing = seu SBC, seu controle, máxima complexidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "SBCs certificados: AudioCodes, Ribbon, Mediant, Acme/Ixia — verificar compatibilidade Microsoft"
    }
  },
  {
    "id": "ms721_q215",
    "text": "Um funcionário chega em uma sala com Teams Panel e vê status \"Disponível\". Ele toca no painel para reservar ad-hoc por 30 minutos. O que acontece nos sistemas Microsoft 365 como resultado dessa ação?",
    "options": [
      "A reserva é criada no Microsoft Bookings automaticamente com notificação para todos os membros do departamento",
      "O painel envia e-mail de solicitação ao administrador da sala que deve aprovar manualmente antes da reserva ser confirmada",
      "A reserva é registrada apenas localmente no painel sem sincronização com o Exchange Online ou calendário corporativo",
      "O Teams Panel cria automaticamente uma reunião no calendário do Exchange Online da conta de recurso da sala pelo período solicitado, bloqueia a sala no sistema de agendamento e atualiza o status no painel para \"Ocupado\" com o tempo restante exibido"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Teams Rooms — Reserva de Sala (Nível: intermediário).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "O Teams Panel cria automaticamente uma reunião no calendário do Exchange Online da conta de recurso da sala pelo período solicitado, bloqueia a sala no sistema de agendamento e atualiza o status no painel para \"Ocupado\" com o tempo restante exibido — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q216",
    "text": "Para implementar QoS no Teams, o administrador pode configurar marcação DSCP de duas formas principais. Quais são elas e qual é a diferença?",
    "options": [
      "1) Via política de grupo (GPO) / Intune — configura QoS no sistema operacional Windows para que o cliente Teams marque pacotes com DSCP antes de enviar à rede (mais confiável, aplicado no endpoint); 2) Via switches/roteadores gerenciados — reclassificam pacotes baseados em porta/IP independentemente do endpoint (mais robusto mas requer infraestrutura gerenciada)",
      "1) Via Azure Policy aplicada ao tenant Microsoft 365; 2) Via configuração de firewall de próxima geração com perfil Teams",
      "1) Via cliente Teams Desktop com configuração manual por usuário; 2) Via Microsoft Defender com perfil de rede Teams habilitado",
      "1) Via Teams Admin Center com política de QoS global; 2) Via configuração do SBC para marcar pacotes de mídia — ambas aplicadas no servidor"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: DSCP — Implementação em Endpoints (Nível: avançado).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "1) Via política de grupo (GPO) / Intune — configura QoS no sistema operacional Windows para que o cliente Teams marque pacotes com DSCP antes de enviar à rede (mais confiável, aplicado no endpoint); 2) Via switches/roteadores gerenciados — reclassificam pacotes baseados em porta/IP independentemente do endpoint (mais robusto mas requer infraestrutura gerenciada) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q217",
    "text": "Um engenheiro analisa o CQD e observa que a Poor Stream Rate aumentou de 3% para 8% na última semana em um site específico, coincidindo com uma atualização de infraestrutura de rede. Como correlacionar esse aumento com a mudança de rede?",
    "options": [
      "Abrir ticket Microsoft com os dados do CQD — apenas o suporte Microsoft pode correlacionar mudanças de rede com qualidade de chamadas",
      "Executar Network Assessment Tool antes e depois da atualização — os relatórios mostram automaticamente o impacto da mudança",
      "Comparar dados do CQD antes e depois da data da atualização filtrando pelo site afetado; analisar dimensões de sub-rede, tipo de transporte (UDP vs. TCP) e Connectivity Ice para identificar mudança de comportamento; cruzar com métricas de jitter, latência e perda de pacotes para identificar qual parâmetro piorou após a mudança",
      "Verificar se houve incidente de serviço Teams no período — problemas de rede interna não afetam métricas do CQD"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Relatório de Tendências — CQD (Nível: avançado).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Comparar dados do CQD antes e depois da data da atualização filtrando pelo site afetado; analisar dimensões de sub-rede, tipo de transporte (UDP vs. TCP) e Connectivity Ice para identificar mudança de comportamento; cruzar com métricas de jitter, latência e perda de pacotes para identificar qual parâmetro piorou após a mudança — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "Call Quality Dashboard shows user-side call quality metrics (jitter, packet loss, latency), not SBC connection status — use Health Dashboard for Direct Routing instead",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "Call Quality Dashboard shows user-side call quality metrics (jitter, packet loss, latency), not SBC connection status — use Health Dashboard for Direct Routing instead"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q218",
    "text": "Uma organização precisa configurar políticas de correio de voz diferentes para três grupos: executivos (saudação personalizada, transcrição desativada), vendas (transcrição habilitada, retenção 90 dias) e suporte (correio de voz desativado — devem sempre atender). Como implementar?",
    "options": [
      "Criar três policies no Teams Admin Center > Voz > Correio de Voz com interface gráfica sem necessidade de PowerShell",
      "Usar Exchange Online com regras de caixa de correio diferentes por grupo para gerenciar comportamento de correio de voz",
      "Criar três Online Voicemail Policies com configurações específicas para cada grupo via New-CsOnlineVoicemailPolicy e atribuir via Grant-CsOnlineVoicemailPolicy; para suporte, desativar correio de voz na política e configurar política de chamada com encaminhamento para fila de chamada em vez de voicemail",
      "Configurar três Atendedores Automáticos separados com lógica diferente de tratamento de chamadas não atendidas por grupo"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Configuração de Voicemail — Políticas Avançadas (Nível: avançado).",
      "papoReto": "Política de chamada controla: encaminhamento externo, toque simultâneo, delegação, máscaras de chamada, roaming PSTN, redirecionar após X segundos",
      "respostaCerta": "Criar três Online Voicemail Policies com configurações específicas para cada grupo via New-CsOnlineVoicemailPolicy e atribuir via Grant-CsOnlineVoicemailPolicy; para suporte, desativar correio de voz na política e configurar política de chamada com encaminhamento para fila de chamada em vez de voicemail — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Política chamada = permissões granulares usuário (encaminhamento, toque, delegação)",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Política pode bloquear encaminhamento externo para controlar custos"
    }
  },
  {
    "id": "ms721_q219",
    "text": "Um engenheiro precisa recomendar headsets certificados Teams para dois perfis: desenvolvedores em ambiente de open office barulhento e executivos em escritório privativo. Qual categoria de certificação é mais adequada para cada perfil?",
    "options": [
      "Ambos os perfis devem usar o mesmo modelo — diferenciação por ambiente não é critério de certificação Teams",
      "Executivos devem usar speakerphone de mesa — headsets não são recomendados para escritórios privativos por questões de ergonomia",
      "Open office barulhento: headset com certificação \"Open Office\" ou superior com cancelamento de ruído ativo (ANC) robusto e supressão de ruído de microfone avançada; executivo em escritório privativo: headset \"Professional\" ou \"Business\" com qualidade de áudio premium, conforto para uso prolongado e integração com botões Teams",
      "Desenvolvedores em open office não precisam de headset certificado — qualquer fone USB funciona em ambiente barulhento"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Headsets — Certificação Open Office vs. Professional (Nível: intermediário).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Open office barulhento: headset com certificação \"Open Office\" ou superior com cancelamento de ruído ativo (ANC) robusto e supressão de ruído de microfone avançada; executivo em escritório privativo: headset \"Professional\" ou \"Business\" com qualidade de áudio premium, conforto para uso prolongado e integração com botões Teams — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q220",
    "text": "Usuários reportam que chamadas Teams caem após exatamente 30 minutos. O problema acontece de forma consistente independentemente do tipo de chamada (interna ou PSTN). O que provavelmente causa esse comportamento?",
    "options": [
      "Expiração de token de autenticação OAuth 2.0 após 30 minutos causando desconexão e necessidade de re-autenticação",
      "Timeout de sessão de firewall ou proxy configurado para 30 minutos — o equipamento de rede encerra sessões UDP/TCP ociosas após esse período, derrubando a chamada; solução: aumentar timeout de sessão para pelo menos 60 minutos para fluxos de mídia e sinalização Teams",
      "Limite de duração de chamada configurado na política de chamada do Teams Admin Center para 30 minutos",
      "Limitação de hardware do SBC que reinicia sessões SIP após 30 minutos por configuração padrão de fábrica"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: Troubleshooting — Chamadas Caindo (Nível: avançado).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "Timeout de sessão de firewall ou proxy configurado para 30 minutos — o equipamento de rede encerra sessões UDP/TCP ociosas após esse período, derrubando a chamada; solução: aumentar timeout de sessão para pelo menos 60 minutos para fluxos de mídia e sinalização Teams — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q221",
    "text": "Um Atendedor Automático do Teams tem a opção \"Operador\" configurada. Qual é a função do operador no contexto do AA e como ele é acionado?",
    "options": [
      "O operador é o número PSTN principal da empresa que o AA usa como identificação de chamador de saída",
      "O operador é um agente especial que monitora todas as chamadas do AA em tempo real para garantia de qualidade",
      "O operador é o administrador que gerencia o AA e recebe notificações automáticas sobre erros de configuração",
      "O operador é um destino de fallback configurado no AA — chamadores podem pressionar \"0\" a qualquer momento nos menus para ser transferidos diretamente ao operador (usuário Teams, fila de chamada ou número externo) sem precisar navegar pelos menus completos"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Atendedor Automático — Operador (Nível: intermediário).",
      "papoReto": "Teams Phone é PBX gerenciado Microsoft na nuvem, core de telefonia em Teams com transferência, correio voz, auto-atendentes, filas",
      "respostaCerta": "O operador é um destino de fallback configurado no AA — chamadores podem pressionar \"0\" a qualquer momento nos menus para ser transferidos diretamente ao operador (usuário Teams, fila de chamada ou número externo) sem precisar navegar pelos menus completos — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Phone = PBX nuvem Microsoft, nome antigo Phone System, mesma coisa",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Phone System = Teams Phone (rebrand 2019) — mesma solução, apenas nome novo"
    }
  },
  {
    "id": "ms721_q222",
    "text": "Um SBC conecta o Teams a um PBX legado que usa sinalização DTMF in-band para transferências de chamada. O engenheiro observa que tons DTMF não chegam corretamente ao PBX. Qual configuração no SBC deve ser verificada?",
    "options": [
      "Verificar método de transmissão DTMF configurado no SBC — deve ser compatível com o PBX legado: RFC 2833/RFC 4733 (out-of-band, preferido para VoIP), SIP INFO ou DTMF in-band; Teams prefere RFC 2833/4733 e o SBC deve transcodificar se o PBX usar método diferente",
      "Aumentar o gain de áudio no SBC para amplificar os tons DTMF e garantir detecção pelo PBX legado",
      "Verificar se o codec G.729 está habilitado — este codec comprime áudio e pode cortar frequências DTMF causando falha de detecção",
      "Configurar QoS com prioridade máxima para pacotes DTMF no SBC para garantir entrega sem perda ao PBX"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Integração PBX Legado — DTMF (Nível: avançado).",
      "papoReto": "Direct Routing = você gerencia SBC certificado Microsoft, máxima flexibilidade e controle troncos SIP",
      "respostaCerta": "Verificar método de transmissão DTMF configurado no SBC — deve ser compatível com o PBX legado: RFC 2833/RFC 4733 (out-of-band, preferido para VoIP), SIP INFO ou DTMF in-band; Teams prefere RFC 2833/4733 e o SBC deve transcodificar se o PBX usar método diferente — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Direct Routing = seu SBC, seu controle, máxima complexidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "SBCs certificados: AudioCodes, Ribbon, Mediant, Acme/Ixia — verificar compatibilidade Microsoft"
    }
  },
  {
    "id": "ms721_q223",
    "text": "Um administrador verifica que não há números de discagem locais do Brasil disponíveis na ponte de Audioconferência Microsoft padrão. Qual é a alternativa para fornecer números de discagem locais brasileiros para reuniões Teams?",
    "options": [
      "Implementar Direct Routing configurando um número de serviço local brasileiro no SBC como número de discagem para audioconferência (conferência PSTN via Direct Routing); ou adquirir números de serviço do Brasil via operadora parceira Operator Connect se disponível",
      "Usar apenas números internacionais (toll) ou gratuitos (toll-free) americanos — não há alternativa para números locais brasileiros",
      "A Microsoft garante contratualmente números locais para todos os países do mundo incluindo Brasil na Audioconferência padrão",
      "Configurar Power Automate que intercepta convites de reunião e substitui automaticamente o número de conferência por número brasileiro"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Audioconferência — Países Suportados (Nível: intermediário).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "Implementar Direct Routing configurando um número de serviço local brasileiro no SBC como número de discagem para audioconferência (conferência PSTN via Direct Routing); ou adquirir números de serviço do Brasil via operadora parceira Operator Connect se disponível — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q224",
    "text": "Antes de migrar 500 usuários para Teams Phone, um engenheiro realiza chamadas de teste piloto com 20 usuários por 2 semanas. Quais métricas devem ser coletadas e analisadas nesse piloto?",
    "options": [
      "Relatório de uso do Teams Admin Center mostrando minutos de chamada por usuário durante o piloto",
      "Número de tickets de suporte abertos durante o piloto — único indicador relevante de problemas de qualidade",
      "Apenas velocidade de internet de cada usuário piloto e uptime do cliente Teams — suficiente para validar prontidão para migração em massa",
      "Poor Stream Rate no CQD segmentado por site e tipo de conexão, métricas de latência/jitter/perda de pacotes no Per-user Call Analytics, feedback qualitativo dos usuários piloto (MOS subjetivo), taxa de chamadas caindo e problemas de estabelecimento de chamada, além de teste de todos os cenários de uso (chamadas internas, PSTN, reuniões, AA, filas)"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Teste de Qualidade de Chamada — Pré-implantação (Nível: intermediário).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Poor Stream Rate no CQD segmentado por site e tipo de conexão, métricas de latência/jitter/perda de pacotes no Per-user Call Analytics, feedback qualitativo dos usuários piloto (MOS subjetivo), taxa de chamadas caindo e problemas de estabelecimento de chamada, além de teste de todos os cenários de uso (chamadas internas, PSTN, reuniões, AA, filas) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q225",
    "text": "Uma organização implementa autenticação baseada em certificado para contas de recurso de MTR Windows, eliminando o uso de senhas. Como esse processo é configurado?",
    "options": [
      "Usar Microsoft Entra ID Certificate-Based Authentication (CBA) — emitir certificado de dispositivo via PKI corporativa ou Microsoft CA, importar certificado no MTR Windows, configurar a conta de recurso no Entra ID para aceitar autenticação por certificado e configurar o cliente Teams Rooms para usar o certificado para login",
      "Usar Managed Identity do Azure para autenticar o MTR Windows sem certificado ou senha — totalmente automático",
      "Configurar FIDO2 security key no MTR Windows conectada via USB para autenticação da conta de recurso",
      "Usar Windows Hello for Business no dispositivo MTR Windows para autenticação sem senha com biometria"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Teams Rooms — Certificado de Dispositivo (Nível: avançado).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Usar Microsoft Entra ID Certificate-Based Authentication (CBA) — emitir certificado de dispositivo via PKI corporativa ou Microsoft CA, importar certificado no MTR Windows, configurar a conta de recurso no Entra ID para aceitar autenticação por certificado e configurar o cliente Teams Rooms para usar o certificado para login — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q226",
    "text": "Um engenheiro realiza análise de custo total de propriedade (TCO) entre Microsoft Calling Plan e Direct Routing para uma organização brasileira com 200 usuários. Quais fatores devem ser considerados em cada opção?",
    "options": [
      "Os custos são idênticos — a Microsoft padronizou preços entre Calling Plan e Direct Routing globalmente em 2024",
      "Calling Plan é sempre mais barato que Direct Routing por eliminar custos de SBC — recomendado para qualquer organização brasileira",
      "Direct Routing é sempre mais caro por exigir infraestrutura dedicada — Calling Plan é preferível mesmo com custo por minuto mais alto",
      "Direct Routing TCO inclui: licença Teams Phone add-on (obrigatória), custo do SBC (hardware físico ~$5-15k ou SBC virtual em Azure ~$200-500/mês), contrato SIP trunk com operadora local, custo de implementação inicial e manutenção técnica ongoing — Calling Plan não disponível no Brasil, tornando Direct Routing ou Operator Connect as únicas opções viáveis"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Análise de Custo — Calling Plan vs. Direct Routing (Nível: avançado).",
      "papoReto": "Calling Plan = Microsoft é operadora PSTN, cobrança por minuto/planos, zero infraestrutura SBC/SIP sua",
      "respostaCerta": "Direct Routing TCO inclui: licença Teams Phone add-on (obrigatória), custo do SBC (hardware físico ~$5-15k ou SBC virtual em Azure ~$200-500/mês), contrato SIP trunk com operadora local, custo de implementação inicial e manutenção técnica ongoing — Calling Plan não disponível no Brasil, tornando Direct Routing ou Operator Connect as únicas opções viáveis — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Calling Plan = Microsoft cuida de tudo, você só paga e disca",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Disponibilidade por país varia — verificar suporte regional Microsoft antes contratação"
    }
  },
  {
    "id": "ms721_q227",
    "text": "Um engenheiro MS-721 precisa escolher a ferramenta correta para cada cenário de diagnóstico. Qual ferramenta corresponde a cada situação: (A) qualidade agregada de toda organização; (B) chamada específica de usuário específico; (C) status de SBC em Direct Routing; (D) prontidão de rede de um site novo?",
    "options": [
      "(A) Microsoft Sentinel; (B) Log de auditoria Purview; (C) Logs SIP do SBC; (D) Azure Network Watcher",
      "(A) Teams Admin Center > Relatórios; (B) CQD com filtro de UPN; (C) Intune > Dispositivos; (D) Speedtest.net corporativo",
      "(A) Per-user Call Analytics; (B) CQD com filtro de usuário; (C) Azure Monitor; (D) Microsoft 365 Admin Center > Conectividade",
      "(A) Call Quality Dashboard (CQD); (B) Per-user Call Analytics no Teams Admin Center; (C) Health Dashboard for Direct Routing no Teams Admin Center; (D) Teams Network Assessment Tool executada no site"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: Ferramentas de Diagnóstico — Resumo (Nível: intermediário).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "(A) Call Quality Dashboard (CQD); (B) Per-user Call Analytics no Teams Admin Center; (C) Health Dashboard for Direct Routing no Teams Admin Center; (D) Teams Network Assessment Tool executada no site — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "Microsoft Sentinel is a security/SIEM tool, not a phone system monitoring dashboard — it's not designed for tracking SBC connectivity or voice quality",
        "Call Quality Dashboard shows user-side call quality metrics (jitter, packet loss, latency), not SBC connection status — use Health Dashboard for Direct Routing instead",
        "Call Quality Dashboard shows user-side call quality metrics (jitter, packet loss, latency), not SBC connection status — use Health Dashboard for Direct Routing instead"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q228",
    "text": "Um cliente pergunta as diferenças entre as três opções de conectividade PSTN para Teams Phone em termos de responsabilidade de gerenciamento. Como o engenheiro deve resumir?",
    "options": [
      "Direct Routing é o mais simples pois usa hardware físico local sem dependência da nuvem Microsoft",
      "Calling Plan: Microsoft gerencia tudo (numeração, roteamento, infraestrutura PSTN) — menor complexidade técnica; Operator Connect: operadora parceira gerencia infraestrutura PSTN e configuração de números via Teams Admin Center — complexidade intermediária; Direct Routing: cliente gerencia SBC e conectividade com operadora — maior flexibilidade e controle mas maior responsabilidade técnica",
      "As três opções têm o mesmo nível de complexidade — a diferença é apenas no custo e cobertura geográfica",
      "Operator Connect e Calling Plan são idênticos tecnicamente — a única diferença é qual empresa emite a fatura"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: PSTN Connectivity — Resumo Comparativo (Nível: intermediário).",
      "papoReto": "Teams Phone é PBX gerenciado Microsoft na nuvem, core de telefonia em Teams com transferência, correio voz, auto-atendentes, filas",
      "respostaCerta": "Calling Plan: Microsoft gerencia tudo (numeração, roteamento, infraestrutura PSTN) — menor complexidade técnica; Operator Connect: operadora parceira gerencia infraestrutura PSTN e configuração de números via Teams Admin Center — complexidade intermediária; Direct Routing: cliente gerencia SBC e conectividade com operadora — maior flexibilidade e controle mas maior responsabilidade técnica — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Phone = PBX nuvem Microsoft, nome antigo Phone System, mesma coisa",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Phone System = Teams Phone (rebrand 2019) — mesma solução, apenas nome novo"
    }
  },
  {
    "id": "ms721_q229",
    "text": "Um MTR Windows em uma rede corporativa que usa proxy HTTP para acesso à internet não consegue se registrar no Teams. Como configurar o proxy no dispositivo MTR Windows?",
    "options": [
      "Configurar proxy diretamente no aplicativo Teams Rooms via arquivo XML de configuração com parâmetro ProxyServer",
      "Configurar proxy no Windows via netsh winhttp set proxy ou nas configurações de proxy do sistema Windows; adicionar exceções (bypass) para todos os endpoints Microsoft 365 categoria \"Optimize\" que não devem passar pelo proxy; verificar se o proxy suporta CONNECT tunneling para WebSocket usado pelo Teams",
      "MTR Windows não suporta configuração de proxy — deve ser colocado em VLAN separada com acesso direto à internet sem proxy",
      "Usar Microsoft Intune para configurar proxy automático via PAC file aplicado somente ao processo do Teams Rooms"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: MTR — Configuração de Proxy (Nível: avançado).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Configurar proxy no Windows via netsh winhttp set proxy ou nas configurações de proxy do sistema Windows; adicionar exceções (bypass) para todos os endpoints Microsoft 365 categoria \"Optimize\" que não devem passar pelo proxy; verificar se o proxy suporta CONNECT tunneling para WebSocket usado pelo Teams — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q230",
    "text": "Uma organização do setor jurídico precisa garantir que gravações de todas as reuniões Teams sejam retidas por 7 anos e não possam ser excluídas por usuários finais durante esse período. Qual combinação de configurações implementa isso?",
    "options": [
      "Configurar backup automático de gravações para Azure Blob Storage com política de retenção de 7 anos no Azure",
      "Habilitar gravação automática na política de reunião + configurar política de retenção no Microsoft Purview aplicada ao SharePoint/OneDrive com retenção de 7 anos e ação de preservação (bloqueio de exclusão) + aplicar Preservation Lock para tornar a política imutável durante o período legal",
      "Instruir usuários a não excluir gravações e auditar exclusões via log de auditoria do Purview mensalmente",
      "Criar grupo de segurança \"Gravações Protegidas\" no SharePoint com permissões somente leitura para usuários finais"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Reuniões — Conformidade e Gravação (Nível: avançado).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "Habilitar gravação automática na política de reunião + configurar política de retenção no Microsoft Purview aplicada ao SharePoint/OneDrive com retenção de 7 anos e ação de preservação (bloqueio de exclusão) + aplicar Preservation Lock para tornar a política imutável durante o período legal — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q231",
    "text": "Uma organização quer que quando qualquer usuário discar o número de emergência (911 ou equivalente) pelo Teams Phone, a equipe de segurança interna seja notificada imediatamente com a localização do chamador. Como implementar isso?",
    "options": [
      "Usar Microsoft Sentinel com regra analítica que detecta chamadas 911 nos logs de auditoria e alerta a equipe de segurança",
      "Configurar Atendedor Automático especial para número 911 que conferencia automaticamente com a central de segurança interna",
      "Configurar política de chamada de emergência com \"Modo de notificação de emergência\" habilitado — especificar número ou grupo Teams que recebe chamada de conferência ou notificação de chat em tempo real quando chamada de emergência é feita, incluindo informação de localização do chamador baseada na topologia de rede",
      "Configurar Power Automate com gatilho de chamada de emergência que envia push notification para app de segurança corporativa"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Número de Emergência — Notificação (Nível: avançado).",
      "papoReto": "E.164 é formato internacional obrigatório (+55 11 98765-4321), máscara chamada mascara origem, portabilidade numérica via LOA",
      "respostaCerta": "Configurar política de chamada de emergência com \"Modo de notificação de emergência\" habilitado — especificar número ou grupo Teams que recebe chamada de conferência ou notificação de chat em tempo real quando chamada de emergência é feita, incluindo informação de localização do chamador baseada na topologia de rede — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "E.164 = +55 11 números, obrigatório PSTN; usuário vs serviço — impacto aplicabilidade",
      "cascasDeBanana": [
        "Microsoft Sentinel is a security/SIEM tool, not a phone system monitoring dashboard — it's not designed for tracking SBC connectivity or voice quality",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Portabilidade exige LOA, conta faturamento, números E.164, data desejada"
    }
  },
  {
    "id": "ms721_q232",
    "text": "O que é o Microsoft Azure Peering Service no contexto do Microsoft Teams e como ele beneficia organizações com múltiplos sites?",
    "options": [
      "Azure Peering Service melhora a conectividade com a rede Microsoft usando roteamento preferencial (telemetria de prefixo) — tráfego Teams é roteado pelo ponto de peering Microsoft mais próximo com menor latência, especialmente beneficioso para ISPs parceiros que implementam o serviço para seus clientes corporativos",
      "Azure Peering Service é um CDN da Microsoft que faz cache de conteúdo Teams nas bordas da internet para reduzir latência",
      "Azure Peering Service é o serviço de DNS da Microsoft que resolve FQDNs do Teams para IPs mais próximos geograficamente",
      "Azure Peering Service é um substituto do ExpressRoute que fornece conectividade dedicada privada ao Microsoft 365 sem custo adicional"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Azure Peering Service — Teams (Nível: avançado).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Azure Peering Service melhora a conectividade com a rede Microsoft usando roteamento preferencial (telemetria de prefixo) — tráfego Teams é roteado pelo ponto de peering Microsoft mais próximo com menor latência, especialmente beneficioso para ISPs parceiros que implementam o serviço para seus clientes corporativos — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q233",
    "text": "O recurso de \"Reunião de Proximidade\" (Proximity Join) no Teams Rooms permite que usuários ingressem em reuniões de sala via seus laptops. Qual tecnologia é usada para detecção de proximidade e quais são os pré-requisitos?",
    "options": [
      "Bluetooth Low Energy (BLE) — o MTR transmite sinal BLE que é detectado pelo cliente Teams no laptop do usuário quando está próximo da sala; pré-requisito: Bluetooth habilitado no laptop, cliente Teams atualizado e funcionalidade habilitada nas configurações do MTR e política do Teams Admin Center",
      "QR Code exibido no display do MTR que o usuário escaneia com câmera do laptop para ingressar na reunião",
      "Wi-Fi Direct — o MTR cria rede ad-hoc que detecta dispositivos na mesma frequência; requer adaptador Wi-Fi 6 no laptop",
      "NFC (Near Field Communication) — usuário aproxima o laptop do painel de controle MTR para emparelhar e ingressar"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Teams Rooms — Reunião de Proximidade (Nível: intermediário).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Bluetooth Low Energy (BLE) — o MTR transmite sinal BLE que é detectado pelo cliente Teams no laptop do usuário quando está próximo da sala; pré-requisito: Bluetooth habilitado no laptop, cliente Teams atualizado e funcionalidade habilitada nas configurações do MTR e política do Teams Admin Center — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q234",
    "text": "Após configurar Dynamic Emergency Calling no Teams Phone, como o engenheiro pode validar que a localização está sendo transmitida corretamente sem fazer uma chamada 911 real?",
    "options": [
      "Microsoft fornece número de teste de emergência (933 nos EUA) que toca em serviço de teste e reproduz a localização detectada pelo sistema — permite validar endereço cívico transmitido sem acionar serviços de emergência reais; complementar verificando topologia de rede e mapeamento de sub-rede no Teams Admin Center",
      "Fazer chamada 911 em horário comercial informando previamente ao PSAP que é teste — único método válido de validação",
      "Usar Per-user Call Analytics para ver localização transmitida na última chamada de emergência do usuário de teste",
      "Verificar o log de auditoria do Purview após tentativa de chamada de emergência para ver localização registrada"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: Teste de Chamada de Emergência (Nível: intermediário).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "Microsoft fornece número de teste de emergência (933 nos EUA) que toca em serviço de teste e reproduz a localização detectada pelo sistema — permite validar endereço cívico transmitido sem acionar serviços de emergência reais; complementar verificando topologia de rede e mapeamento de sub-rede no Teams Admin Center — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q235",
    "text": "Um administrador precisa gerar relatório de todos os números de telefone do tenant Teams Phone mostrando quais estão atribuídos, a quem estão atribuídos e quais estão não atribuídos (disponíveis). Como obter esse relatório?",
    "options": [
      "Teams Admin Center > Voz > Números de telefone — visualiza todos os números com status (atribuído/não atribuído), tipo (usuário/serviço), usuário/serviço associado e tipo de conectividade (Calling Plan/Direct Routing/Operator Connect); exportar em CSV para análise detalhada",
      "Microsoft 365 Admin Center > Faturamento > Números ativos com relatório de atribuição por departamento",
      "Azure AD > Usuários > Exportar com atributo TelephoneNumber preenchido para identificar números atribuídos",
      "PowerShell com Get-CsPhoneNumberAssignment -Top 1000 exportado para CSV com todos os atributos de número"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Gerenciamento de Números — Relatório (Nível: intermediário).",
      "papoReto": "E.164 é formato internacional obrigatório (+55 11 98765-4321), máscara chamada mascara origem, portabilidade numérica via LOA",
      "respostaCerta": "Teams Admin Center > Voz > Números de telefone — visualiza todos os números com status (atribuído/não atribuído), tipo (usuário/serviço), usuário/serviço associado e tipo de conectividade (Calling Plan/Direct Routing/Operator Connect); exportar em CSV para análise detalhada — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "E.164 = +55 11 números, obrigatório PSTN; usuário vs serviço — impacto aplicabilidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Portabilidade exige LOA, conta faturamento, números E.164, data desejada"
    }
  },
  {
    "id": "ms721_q236",
    "text": "Uma organização tem usuários com diferentes licenças Teams. Quais são as limitações de reunião para usuários com Teams Essentials em comparação com usuários Microsoft 365 Business Basic ou superior?",
    "options": [
      "Teams Essentials limita reuniões a 60 minutos e 100 participantes — suficiente apenas para pequenas empresas",
      "Teams Essentials não suporta gravação de reuniões ou transcrição — recursos exclusivos de licenças Business e Enterprise",
      "Teams Essentials: reuniões de até 30 horas, 300 participantes, 10 GB de armazenamento em nuvem — sem integração completa com Microsoft 365 Apps, Exchange e SharePoint; Business Basic e superior: mesmos limites de reunião mas com ecossistema completo M365, SharePoint, Exchange e integração nativa com aplicativos Office",
      "Não há diferença em funcionalidades de reunião entre licenças — todas têm os mesmos limites e recursos de reunião"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Microsoft Teams — Limitações de Reunião por Licença (Nível: intermediário).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "Teams Essentials: reuniões de até 30 horas, 300 participantes, 10 GB de armazenamento em nuvem — sem integração completa com Microsoft 365 Apps, Exchange e SharePoint; Business Basic e superior: mesmos limites de reunião mas com ecossistema completo M365, SharePoint, Exchange e integração nativa com aplicativos Office — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q237",
    "text": "Um engenheiro recomenda speakerphones certificados Teams para salas de reunião pequenas sem sistema Teams Rooms. Quais características principais deve buscar nesses dispositivos?",
    "options": [
      "Resolução de câmera HD integrada ao speakerphone, suporte Bluetooth 5.0 e bateria com autonomia de 20 horas",
      "Alcance de captação de microfone adequado ao tamanho da sala (360° para mesas de reunião), cancelamento de eco acústico, supressão de ruído, botões físicos de controle integrados ao Teams (mudo, atender, desligar), conectividade USB e certificação Microsoft Teams confirmada no catálogo oficial",
      "Preço mais baixo do mercado — certificação Teams não é necessária para speakerphones de qualidade comprovada",
      "Compatibilidade com Zoom e Google Meet além do Teams — dispositivos multi-plataforma são sempre preferíveis"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Speakerphones Certificados — Uso (Nível: iniciante).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Alcance de captação de microfone adequado ao tamanho da sala (360° para mesas de reunião), cancelamento de eco acústico, supressão de ruído, botões físicos de controle integrados ao Teams (mudo, atender, desligar), conectividade USB e certificação Microsoft Teams confirmada no catálogo oficial — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q238",
    "text": "Uma organização multinacional usa Direct Routing e precisa garantir que usuários em diferentes regiões (Brasil, EUA, Europa) usem o SBC local da sua região para chamadas PSTN. Além do LBR, quais outros mecanismos podem ser usados?",
    "options": [
      "Criar tenant Microsoft 365 separado por região geográfica com Direct Routing independente em cada tenant",
      "Usar apenas um Voice Route global com todos os SBCs e deixar o Teams selecionar automaticamente o SBC mais próximo por latência",
      "Usar Azure Traffic Manager para rotear chamadas PSTN para o SBC regional com menor latência automaticamente",
      "Criar Voice Routing Policies regionais com PSTN Usages específicos para cada região e SBCs correspondentes — atribuir a política regional correta aos usuários de cada região; complementar com topologia de rede mapeando sub-redes regionais para suportar LBR quando regulatoriamente necessário"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Configuração de Região — Teams Phone (Nível: avançado).",
      "papoReto": "Direct Routing = você gerencia SBC certificado Microsoft, máxima flexibilidade e controle troncos SIP",
      "respostaCerta": "Criar Voice Routing Policies regionais com PSTN Usages específicos para cada região e SBCs correspondentes — atribuir a política regional correta aos usuários de cada região; complementar com topologia de rede mapeando sub-redes regionais para suportar LBR quando regulatoriamente necessário — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Direct Routing = seu SBC, seu controle, máxima complexidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "SBCs certificados: AudioCodes, Ribbon, Mediant, Acme/Ixia — verificar compatibilidade Microsoft"
    }
  },
  {
    "id": "ms721_q239",
    "text": "O CQD mostra que streams ruins estão concentrados em usuários com um tipo específico de dispositivo. Como filtrar e analisar dados do CQD por tipo de endpoint para identificar o dispositivo problemático?",
    "options": [
      "Microsoft Intune com relatório de dispositivos e cruzamento manual com tickets de suporte abertos pelos usuários afetados",
      "Per-user Call Analytics individual de cada usuário com problema para verificar dispositivo usado — sem possibilidade de análise agregada por tipo de dispositivo",
      "No CQD usar dimensões de endpoint: \"First/Second Client Device Name\" para nome do dispositivo de áudio, \"First/Second OS\" para sistema operacional, \"First/Second Client Version\" para versão do cliente Teams — cruzar com Poor Stream Rate para identificar qual dispositivo/versão concentra problemas e recomendar atualização ou substituição",
      "Exportar lista de usuários com streams ruins do CQD e verificar manualmente no Azure AD qual dispositivo cada um usa"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: Análise de Qualidade por Tipo de Endpoint (Nível: avançado).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "No CQD usar dimensões de endpoint: \"First/Second Client Device Name\" para nome do dispositivo de áudio, \"First/Second OS\" para sistema operacional, \"First/Second Client Version\" para versão do cliente Teams — cruzar com Poor Stream Rate para identificar qual dispositivo/versão concentra problemas e recomendar atualização ou substituição — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "Call Quality Dashboard shows user-side call quality metrics (jitter, packet loss, latency), not SBC connection status — use Health Dashboard for Direct Routing instead"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q240",
    "text": "Um engenheiro é solicitado a otimizar a infraestrutura Wi-Fi corporativa para suportar chamadas Teams de alta qualidade. Quais são as principais recomendações de configuração de Wi-Fi para Teams?",
    "options": [
      "Usar banda 5GHz dedicada para voz/vídeo com SSID separado, habilitar WMM (Wi-Fi Multimedia) para QoS wireless, configurar roaming rápido (802.11r Fast BSS Transition), desativar power saving em adaptadores Wi-Fi de dispositivos corporativos via GPO/Intune, garantir cobertura adequada com SNR > 25dB e evitar sobreposição de canais nos APs vizinhos",
      "Usar apenas banda 2.4GHz para maior alcance e penetração em paredes — melhor para chamadas de voz por menor interferência",
      "Configurar canal fixo 1 em todos os APs para evitar interferência de canal — uniformidade é mais importante que planejamento de RF",
      "Aumentar potência de transmissão dos APs ao máximo para garantir cobertura — mais sinal sempre resulta em melhor qualidade"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Otimização de Wi-Fi para Teams (Nível: avançado).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Usar banda 5GHz dedicada para voz/vídeo com SSID separado, habilitar WMM (Wi-Fi Multimedia) para QoS wireless, configurar roaming rápido (802.11r Fast BSS Transition), desativar power saving em adaptadores Wi-Fi de dispositivos corporativos via GPO/Intune, garantir cobertura adequada com SNR > 25dB e evitar sobreposição de canais nos APs vizinhos — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q241",
    "text": "Uma empresa multinacional precisa gerenciar números de telefone Teams Phone em múltiplos países. Quais considerações regulatórias e operacionais o engenheiro deve abordar?",
    "options": [
      "Números de telefone Microsoft funcionam globalmente sem restrições — uma única conta pode ter números de qualquer país sem documentação adicional",
      "A Microsoft gerencia todas as regulamentações locais automaticamente — o cliente não precisa se preocupar com conformidade regulatória de telecomunicações",
      "Usar apenas números americanos para toda a empresa multinacional — funcionam internacionalmente sem restrições regulatórias",
      "Cada país tem regulamentações próprias de telecomunicações (ex.: necessidade de endereço local, documentação de pessoa jurídica local, restrições de portabilidade) — verificar disponibilidade de Calling Plan/Operator Connect por país; para países sem essas opções usar Direct Routing com operadora local; considerar requisitos de emergência locais (E911 equivalente por país)"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Transferência de Número — Internacional (Nível: avançado).",
      "papoReto": "E.164 é formato internacional obrigatório (+55 11 98765-4321), máscara chamada mascara origem, portabilidade numérica via LOA",
      "respostaCerta": "Cada país tem regulamentações próprias de telecomunicações (ex.: necessidade de endereço local, documentação de pessoa jurídica local, restrições de portabilidade) — verificar disponibilidade de Calling Plan/Operator Connect por país; para países sem essas opções usar Direct Routing com operadora local; considerar requisitos de emergência locais (E911 equivalente por país) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "E.164 = +55 11 números, obrigatório PSTN; usuário vs serviço — impacto aplicabilidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Portabilidade exige LOA, conta faturamento, números E.164, data desejada"
    }
  },
  {
    "id": "ms721_q242",
    "text": "Um sistema Teams Rooms é instalado em um auditório que também é usado para apresentações locais sem reuniões Teams. Como configurar o MTR para exibir conteúdo de um laptop conectado via HDMI sem iniciar uma reunião Teams?",
    "options": [
      "MTR só funciona quando conectado a uma reunião Teams ativa — para apresentações locais é necessário usar outro dispositivo separado",
      "Configurar um segundo PC dedicado para apresentações locais com chaveador HDMI entre o PC e o MTR",
      "MTR suporta modo de \"Passthrough de HDMI\" ou \"Conteúdo apenas\" — quando um dispositivo é conectado via HDMI ao MTR, o conteúdo pode ser exibido nos monitores da sala sem iniciar reunião Teams; configuração via SkypeSettings.xml habilitando entrada HDMI ou via interface do MTR",
      "Desinstalar o aplicativo Teams Rooms temporariamente para usar o Windows do MTR como PC de apresentação normal"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: MTR — Modo de Conteúdo Apenas (Nível: intermediário).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "MTR suporta modo de \"Passthrough de HDMI\" ou \"Conteúdo apenas\" — quando um dispositivo é conectado via HDMI ao MTR, o conteúdo pode ser exibido nos monitores da sala sem iniciar reunião Teams; configuração via SkypeSettings.xml habilitando entrada HDMI ou via interface do MTR — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q243",
    "text": "Um administrador quer que participantes de reuniões não possam promover outros participantes a apresentadores durante reuniões, mantendo controle exclusivo com o organizador. Qual configuração de política de reunião implementa isso?",
    "options": [
      "Habilitar modo de conformidade de reunião no Teams Premium que bloqueia alterações de função durante a reunião",
      "Política de reunião — configurar \"Quem pode apresentar\" como \"Somente organizadores\" ou \"Pessoas específicas\" e desativar a permissão de participantes promoverem outros a apresentadores nas configurações de funções de reunião da política",
      "Configurar rótulo de sensibilidade \"Confidencial\" que automaticamente restringe promoção de participantes a apresentadores",
      "Configurar política de acesso condicional que valida funções de reunião em tempo real via Azure AD"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Política de Reunião — Configurações de Participante (Nível: intermediário).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "Política de reunião — configurar \"Quem pode apresentar\" como \"Somente organizadores\" ou \"Pessoas específicas\" e desativar a permissão de participantes promoverem outros a apresentadores nas configurações de funções de reunião da política — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q244",
    "text": "Um usuário Teams Phone reporta que ao fazer chamadas para números móveis específicos no Brasil, a chamada conecta mas o áudio tem qualidade muito ruim (robótico, cortado). Chamadas para fixos funcionam bem. Como diagnosticar esse problema específico?",
    "options": [
      "Problema de cobertura 4G/5G do destinatário — qualidade de chamada em redes móveis é responsabilidade da operadora destino",
      "Versão desatualizada do cliente Teams do usuário chamador — atualizar para versão mais recente resolve problemas de codec móvel",
      "Firewall corporativo bloqueando codecs específicos usados em chamadas para móveis — abrir portas adicionais resolve",
      "Verificar codec negociado para chamadas móveis vs. fixos no Per-user Call Analytics (possível transcodificação ineficiente no SBC), verificar se o SBC tem configuração específica para troncos móveis vs. fixos, analisar logs SIP do SBC para ver se há re-INVITE com mudança de codec e verificar com a operadora se há problema na interconexão com redes móveis específicas"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Voz — Troubleshooting Avançado (Nível: avançado).",
      "papoReto": "E.164 é formato internacional obrigatório (+55 11 98765-4321), máscara chamada mascara origem, portabilidade numérica via LOA",
      "respostaCerta": "Verificar codec negociado para chamadas móveis vs. fixos no Per-user Call Analytics (possível transcodificação ineficiente no SBC), verificar se o SBC tem configuração específica para troncos móveis vs. fixos, analisar logs SIP do SBC para ver se há re-INVITE com mudança de codec e verificar com a operadora se há problema na interconexão com redes móveis específicas — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "E.164 = +55 11 números, obrigatório PSTN; usuário vs serviço — impacto aplicabilidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Portabilidade exige LOA, conta faturamento, números E.164, data desejada"
    }
  },
  {
    "id": "ms721_q245",
    "text": "Um engenheiro recém-contratado precisa estabelecer um baseline de qualidade de chamadas Teams da organização antes de iniciar melhorias. Qual processo deve ser seguido para criar esse baseline?",
    "options": [
      "Coletar dados do CQD dos últimos 30-90 dias por modalidade (Teams, PSTN, conferência), calcular Poor Stream Rate baseline por site/departamento/tipo de dispositivo, documentar top 10 problemas identificados, registrar métricas atuais de jitter/latência/perda de pacotes por site e criar dashboard Power BI com snapshot do estado atual como referência para comparação futura",
      "Solicitar ao suporte Microsoft relatório de qualidade histórica da organização — Microsoft mantém esse baseline automaticamente",
      "Apenas documentar tickets de suporte abertos no mês atual — indicador suficiente para baseline de qualidade",
      "Executar Network Assessment Tool por 1 dia e usar os resultados como baseline definitivo — dados de 24h são suficientes"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: Baseline de Qualidade — Estabelecimento (Nível: avançado).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "Coletar dados do CQD dos últimos 30-90 dias por modalidade (Teams, PSTN, conferência), calcular Poor Stream Rate baseline por site/departamento/tipo de dispositivo, documentar top 10 problemas identificados, registrar métricas atuais de jitter/latência/perda de pacotes por site e criar dashboard Power BI com snapshot do estado atual como referência para comparação futura — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q246",
    "text": "Uma organização tem 200 telefones IP Teams com mais de 4 anos de uso. O engenheiro precisa avaliar se devem ser substituídos. Quais critérios devem guiar essa decisão?",
    "options": [
      "Substituir apenas dispositivos com firmware abaixo da versão 5.0 — versões anteriores não são suportadas pelo Teams moderno",
      "Verificar se o modelo ainda está na lista de dispositivos suportados Microsoft (end of support), disponibilidade de atualizações de firmware e segurança, compatibilidade com novas funcionalidades do Teams (ex.: Teams Phone Mobile, hot desking), taxa de falhas e chamados de suporte, e custo de manutenção vs. custo de substituição por modelos certificados atuais",
      "Substituir automaticamente qualquer dispositivo com mais de 3 anos — política padrão Microsoft para dispositivos Teams certificados",
      "Manter dispositivos enquanto funcionam — não há critério técnico para substituição de telefones IP Teams em uso"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Inventário e Ciclo de Vida de Dispositivos (Nível: intermediário).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Verificar se o modelo ainda está na lista de dispositivos suportados Microsoft (end of support), disponibilidade de atualizações de firmware e segurança, compatibilidade com novas funcionalidades do Teams (ex.: Teams Phone Mobile, hot desking), taxa de falhas e chamados de suporte, e custo de manutenção vs. custo de substituição por modelos certificados atuais — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q247",
    "text": "Usuários com caixas de correio Exchange On-Premises relatam que não conseguem agendar reuniões Teams com suplemento do Teams no Outlook. Qual é a causa mais provável e como resolver?",
    "options": [
      "O suplemento Teams para Outlook requer conexão com Exchange Online ou Exchange On-Premises 2016 CU3+ com OAuth configurado — verificar versão do Exchange, configurar OAuth entre Exchange On-Premises e Azure AD via Hybrid Modern Authentication, garantir que autodiscover está funcionando corretamente e que o suplemento Teams está habilitado na política de suplementos do Exchange",
      "Suplemento Teams não suporta Exchange On-Premises — todos os usuários precisam ser migrados para Exchange Online primeiro",
      "Reinstalar o cliente Teams em cada computador e reparar a instalação do Office — problema de instalação do suplemento",
      "Habilitar a integração Teams-Outlook no Teams Admin Center > Configurações de toda a organização > Calendário"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Integração de Calendário — Exchange Híbrido (Nível: avançado).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "O suplemento Teams para Outlook requer conexão com Exchange Online ou Exchange On-Premises 2016 CU3+ com OAuth configurado — verificar versão do Exchange, configurar OAuth entre Exchange On-Premises e Azure AD via Hybrid Modern Authentication, garantir que autodiscover está funcionando corretamente e que o suplemento Teams está habilitado na política de suplementos do Exchange — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "Location-Based Routing does not require installing client agents — it uses network site configurations and subnet mappings in Teams admin center",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q248",
    "text": "Um administrador identifica no relatório PSTN do Teams chamadas internacionais de alto custo para destinos incomuns que nenhum usuário reconhece ter feito. O que provavelmente ocorreu e como mitigar?",
    "options": [
      "Problema de faturamento Microsoft — chamadas fantasmas são erros de billing que devem ser contestados via ticket de suporte",
      "Possível fraude de telecomunicações (IRSF — International Revenue Share Fraud ou TDoS) via comprometimento de conta Teams ou configuração inadequada do SBC — mitigação: desativar chamadas internacionais para usuários que não necessitam via política de chamada, implementar alertas de anomalia de uso PSTN, revisar contas comprometidas no Entra ID Protection e verificar regras de roteamento do SBC para chamadas não autorizadas",
      "Usuários esqueceram de registrar chamadas internacionais no sistema — implementar política de declaração obrigatória de chamadas resolve",
      "Bug no relatório PSTN do Teams Admin Center que duplica entradas — exportar dados e verificar manualmente as duplicatas"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Segurança SIP — Fraud Prevention (Nível: avançado).",
      "papoReto": "E.164 é formato internacional obrigatório (+55 11 98765-4321), máscara chamada mascara origem, portabilidade numérica via LOA",
      "respostaCerta": "Possível fraude de telecomunicações (IRSF — International Revenue Share Fraud ou TDoS) via comprometimento de conta Teams ou configuração inadequada do SBC — mitigação: desativar chamadas internacionais para usuários que não necessitam via política de chamada, implementar alertas de anomalia de uso PSTN, revisar contas comprometidas no Entra ID Protection e verificar regras de roteamento do SBC para chamadas não autorizadas — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "E.164 = +55 11 números, obrigatório PSTN; usuário vs serviço — impacto aplicabilidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Portabilidade exige LOA, conta faturamento, números E.164, data desejada"
    }
  },
  {
    "id": "ms721_q249",
    "text": "Um engenheiro precisa demonstrar para a diretoria o SLA de disponibilidade do Microsoft Teams e como monitorar o cumprimento desse SLA mensalmente. Quais informações e ferramentas são relevantes?",
    "options": [
      "Teams não tem SLA publicado — disponibilidade é baseada em \"melhor esforço\" sem garantias contratuais formais",
      "Monitorar SLA usando Azure Monitor com alerts de disponibilidade configurados para endpoints Teams — única fonte confiável",
      "Microsoft garante SLA de 99,9% de uptime para Teams (Microsoft Online Services SLA documentado em microsoft.com/licensing/docs) — monitorar cumprimento via Microsoft 365 Admin Center > Integridade do serviço com histórico de incidentes; Microsoft emite créditos de serviço automaticamente quando SLA é violado; relatório mensal de disponibilidade disponível no portal",
      "SLA do Teams é de 99,99% de uptime — qualquer indisponibilidade gera crédito automático de 25% da fatura mensal"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: SLA e Disponibilidade do Teams (Nível: intermediário).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "Microsoft garante SLA de 99,9% de uptime para Teams (Microsoft Online Services SLA documentado em microsoft.com/licensing/docs) — monitorar cumprimento via Microsoft 365 Admin Center > Integridade do serviço com histórico de incidentes; Microsoft emite créditos de serviço automaticamente quando SLA é violado; relatório mensal de disponibilidade disponível no portal — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q250",
    "text": "Uma empresa de 800 usuários no Brasil contrata um engenheiro MS-721 para projetar solução completa de comunicações Teams. Necessidades: PSTN local brasileira, 50 salas de reunião equipadas, qualidade garantida em 5 sites e monitoramento contínuo. Qual arquitetura completa o engenheiro deve propor?",
    "options": [
      "Operator Connect com operadora americana, Teams Rooms apenas em salas grandes, VPN para todos os usuários remotos e monitoramento via Azure Sentinel exclusivamente",
      "Calling Plan Microsoft para PSTN (mais simples), Surface Hub em todas as salas, sem QoS (Teams se adapta automaticamente) e monitoramento apenas por tickets de suporte",
      "Direct Routing com único SBC central em São Paulo, webcams USB em todas as salas sem MTR certificado, ExpressRoute em todos os sites e CQD sem dados de edifício",
      "PSTN: Direct Routing com SBC certificado redundante (SP + RJ) conectado a operadora local via SIP trunk; Dispositivos: MTR on Windows/Android para salas grandes, barras de colaboração para huddle rooms, Teams Panels nas entradas, telefones IP para usuários de voz intensivo; Rede: QoS com DSCP em todos os sites, saída de internet local por site, Network Assessment Tool pré-implantação; Monitoramento: CQD com building data carregado, alertas no Teams Admin Center, Health Dashboard para SBCs, revisão mensal de qualidade com Power BI"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Revisão Geral",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Revisão Geral — subtema: Cenário Integrado MS-721 — Voz e Dispositivos (Nível: avançado).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "PSTN: Direct Routing com SBC certificado redundante (SP + RJ) conectado a operadora local via SIP trunk; Dispositivos: MTR on Windows/Android para salas grandes, barras de colaboração para huddle rooms, Teams Panels nas entradas, telefones IP para usuários de voz intensivo; Rede: QoS com DSCP em todos os sites, saída de internet local por site, Network Assessment Tool pré-implantação; Monitoramento: CQD com building data carregado, alertas no Teams Admin Center, Health Dashboard para SBCs, revisão mensal de qualidade com Power BI — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "Call Quality Dashboard shows user-side call quality metrics (jitter, packet loss, latency), not SBC connection status — use Health Dashboard for Direct Routing instead"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q251",
    "text": "Um administrador precisa garantir que chamadas de emergência via Direct Routing incluam a localização do usuário. Qual recurso deve ser configurado?",
    "options": [
      "Call Park Policy",
      "Dynamic Emergency Calling (E911)",
      "Location Information Server externo sem integração",
      "Static Emergency Policy"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Serviços de Voz Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Serviços de Voz Teams — subtema: Direct Routing (Nível: avançado).",
      "papoReto": "Direct Routing = você gerencia SBC certificado Microsoft, máxima flexibilidade e controle troncos SIP",
      "respostaCerta": "Dynamic Emergency Calling (E911) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Direct Routing = seu SBC, seu controle, máxima complexidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "SBCs certificados: AudioCodes, Ribbon, Lync Mediant, Acme/Ixia, etc. — verificar lista compatibilidade Microsoft"
    }
  },
  {
    "id": "ms721_q252",
    "text": "Qual componente do Direct Routing processa a sinalização SIP entre o Microsoft Phone System e o SBC?",
    "options": [
      "Teams Gateway Service",
      "Azure Communication Services",
      "SIP Proxy interno do Teams",
      "Session Border Controller (SBC)"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Serviços de Voz Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Serviços de Voz Teams — subtema: Direct Routing (Nível: avançado).",
      "papoReto": "Direct Routing = você gerencia SBC certificado Microsoft, máxima flexibilidade e controle troncos SIP",
      "respostaCerta": "Session Border Controller (SBC) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Direct Routing = seu SBC, seu controle, máxima complexidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "SBCs certificados: AudioCodes, Ribbon, Lync Mediant, Acme/Ixia, etc. — verificar lista compatibilidade Microsoft"
    }
  },
  {
    "id": "ms721_q253",
    "text": "Um administrador deseja migrar números existentes de um operador para o Operator Connect. Qual etapa é obrigatória antes da portabilidade?",
    "options": [
      "Solicitar a portabilidade diretamente pelo Teams Admin Center via Operator Connect",
      "Configurar o SBC localmente",
      "Criar um trunk SIP manual",
      "Adquirir novos números no PSTN"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Serviços de Voz Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Serviços de Voz Teams — subtema: Operator Connect (Nível: intermediário).",
      "papoReto": "Operator Connect = operadora parceira gerencia PSTN + SBC, reduz complexidade vs Direct Routing",
      "respostaCerta": "Solicitar a portabilidade diretamente pelo Teams Admin Center via Operator Connect — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Operator Connect = operadora terceira + SBC dela, meio termo entre Calling Plan e Direct Routing",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Operadora parceira em Operator Connect gerencia tanto PSTN quanto SBC por você"
    }
  },
  {
    "id": "ms721_q254",
    "text": "Qual tipo de Plano de Chamada da Microsoft permite ligações apenas dentro do mesmo país?",
    "options": [
      "Plano de Chamada Pay-As-You-Go",
      "Plano de Chamada Doméstico",
      "Plano de Chamada Internacional",
      "Plano de Chamada Zone-Based"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Serviços de Voz Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Serviços de Voz Teams — subtema: Planos de Chamada (Nível: iniciante).",
      "papoReto": "Teams Phone é PBX gerenciado Microsoft na nuvem, core de telefonia em Teams com transferência, correio voz, auto-atendentes, filas",
      "respostaCerta": "Plano de Chamada Doméstico — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Phone = PBX nuvem Microsoft, nome antigo Phone System, mesma coisa",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Phone System = Teams Phone (rebrand 2019) — mesma solução, apenas nome novo"
    }
  },
  {
    "id": "ms721_q255",
    "text": "O que é um Auto Atendedor no Teams Phone?",
    "options": [
      "Um ramal exclusivo para usuários VIP",
      "Um agente virtual baseado em IA generativa",
      "Um serviço de transcrição de chamadas",
      "Um sistema de menu de voz automatizado que direciona chamadas"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Serviços de Voz Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Serviços de Voz Teams — subtema: Auto Atendedor (Nível: iniciante).",
      "papoReto": "Teams Phone é PBX gerenciado Microsoft na nuvem, core de telefonia em Teams com transferência, correio voz, auto-atendentes, filas",
      "respostaCerta": "Um sistema de menu de voz automatizado que direciona chamadas — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Phone = PBX nuvem Microsoft, nome antigo Phone System, mesma coisa",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Phone System = Teams Phone (rebrand 2019) — mesma solução, apenas nome novo"
    }
  },
  {
    "id": "ms721_q256",
    "text": "Qual método de roteamento de fila distribui chamadas para o agente disponível há mais tempo?",
    "options": [
      "Round Robin",
      "Serial",
      "Attendant Routing",
      "Longest Idle"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Serviços de Voz Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Serviços de Voz Teams — subtema: Fila de Chamadas (Nível: intermediário).",
      "papoReto": "Fila = buffer chamadas entrantes, música espera, presença agentes, roteamento inteligente (FIFO/Longest Idle)",
      "respostaCerta": "Longest Idle — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Fila = múltiplos agentes, FIFO + Longest Idle + presença automática",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Longest Idle roteamento distribui chamadas para agente menos ocupado — reduz espera"
    }
  },
  {
    "id": "ms721_q257",
    "text": "Um administrador precisa que agentes possam optar por entrar ou sair de uma fila sem intervenção do administrador. Qual recurso habilita isso?",
    "options": [
      "Call Queues Policy",
      "Agent opt-in/opt-out via configuração de fila no Teams Admin Center",
      "Delegated Admin",
      "Supervisor Mode"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Serviços de Voz Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Serviços de Voz Teams — subtema: Fila de Chamadas (Nível: avançado).",
      "papoReto": "Fila = buffer chamadas entrantes, música espera, presença agentes, roteamento inteligente (FIFO/Longest Idle)",
      "respostaCerta": "Agent opt-in/opt-out via configuração de fila no Teams Admin Center — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Fila = múltiplos agentes, FIFO + Longest Idle + presença automática",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Longest Idle roteamento distribui chamadas para agente menos ocupado — reduz espera"
    }
  },
  {
    "id": "ms721_q258",
    "text": "Qual valor de DSCP deve ser marcado para tráfego de vídeo do Teams para garantir priorização adequada?",
    "options": [
      "CS1 (DSCP 8)",
      "AF41 (DSCP 34)",
      "EF (DSCP 46)",
      "BE (DSCP 0)"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: QoS (Nível: avançado).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "AF41 (DSCP 34) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q259",
    "text": "Para que serve o Network Planner no Teams Admin Center?",
    "options": [
      "Monitorar qualidade de chamadas em tempo real",
      "Estimar requisitos de largura de banda para implantação do Teams",
      "Gerenciar certificados de SBC",
      "Configurar políticas de QoS"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Network Planner (Nível: iniciante).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Estimar requisitos de largura de banda para implantação do Teams — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q260",
    "text": "Qual relatório no Teams Admin Center mostra a qualidade média de chamadas por localização de rede?",
    "options": [
      "Call Quality Dashboard (CQD)",
      "Network Planner",
      "Direct Routing Health Dashboard",
      "Call Analytics por usuário"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Call Quality Dashboard (Nível: intermediário).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Call Quality Dashboard (CQD) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q261",
    "text": "Qual intervalo de portas deve estar aberto para o tráfego de mídia RTP do Teams Direct Routing entre o SBC e a Microsoft?",
    "options": [
      "3478 (STUN)",
      "49152–53247 (UDP)",
      "5060 (SIP TCP)",
      "443 (HTTPS)"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Proxy e Firewall (Nível: intermediário).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "49152–53247 (UDP) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q262",
    "text": "Um cliente com filiais remotas deseja que a mídia de chamadas flua localmente sem passar pela nuvem. Qual recurso do Direct Routing resolve isso?",
    "options": [
      "Geo-Routing",
      "Media Bypass padrão",
      "Local Media Optimization (LMO)",
      "Direct Peering"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Otimização de Mídia Local (Nível: avançado).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Local Media Optimization (LMO) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q263",
    "text": "Qual é o pré-requisito de rede para habilitar o Media Bypass no Direct Routing?",
    "options": [
      "O cliente Teams deve conseguir alcançar o SBC diretamente via IP",
      "O SBC deve estar na mesma sub-rede do servidor Teams",
      "A chamada deve ser interna sem PSTN",
      "O usuário deve ter licença E5"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Media Bypass (Nível: avançado).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "O cliente Teams deve conseguir alcançar o SBC diretamente via IP — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q264",
    "text": "Qual é o processo padrão para provisionar um telefone IP Teams certificado em uma organização?",
    "options": [
      "Configuração via DHCP local sem autenticação",
      "Autenticação via conta Microsoft 365 no dispositivo",
      "Registro via portal de fabricante separado",
      "Instalação manual de firmware via USB"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Phones IP (Nível: iniciante).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Autenticação via conta Microsoft 365 no dispositivo — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q265",
    "text": "Qual licença é necessária para habilitar recursos avançados como transcrição e gravação em Salas do Teams?",
    "options": [
      "Microsoft 365 E3",
      "Teams Rooms Basic",
      "Teams Rooms Pro",
      "Teams Phone Standard"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Salas do Teams (Nível: intermediário).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Teams Rooms Pro — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q266",
    "text": "Para que serve um Painel Teams (Teams Panel)?",
    "options": [
      "Controlar áudio e vídeo durante reuniões",
      "Exibir feeds de câmera de segurança",
      "Exibir disponibilidade e agendamento de salas de reunião fora da sala",
      "Gerenciar filas de chamadas"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Painéis Teams (Nível: iniciante).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Exibir disponibilidade e agendamento de salas de reunião fora da sala — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q267",
    "text": "Qual é a função principal de um Teams Display?",
    "options": [
      "Gerenciar chamadas PSTN locais",
      "Funcionar como dispositivo dedicado para Teams com assistente Cortana integrado",
      "Substituir monitores de desktop para reuniões de vídeo",
      "Exibir dashboards de qualidade de chamadas"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Teams Display (Nível: iniciante).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Funcionar como dispositivo dedicado para Teams com assistente Cortana integrado — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q268",
    "text": "Como os administradores controlam o ciclo de atualizações de firmware de dispositivos Teams certificados?",
    "options": [
      "Configurando scripts PowerShell locais",
      "Configurando Update Policies no Teams Admin Center",
      "Usando o Microsoft Endpoint Configuration Manager exclusivamente",
      "Atualizando manualmente cada dispositivo via SSH"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Atualização de Firmware (Nível: intermediário).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Configurando Update Policies no Teams Admin Center — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q269",
    "text": "Um administrador precisa garantir que Salas do Teams iniciem automaticamente com a conta de recurso correta sem intervenção do usuário. O que deve ser configurado?",
    "options": [
      "Azure AD Join com conta de usuário padrão",
      "GPO de login automático no Active Directory local",
      "Intune Kiosk Mode com conta pessoal",
      "Auto-login com conta de recurso de sala no perfil do dispositivo"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Salas do Teams (Nível: avançado).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Auto-login com conta de recurso de sala no perfil do dispositivo — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q270",
    "text": "Um administrador quer impedir que participantes externos gravem reuniões do Teams. Qual configuração deve ser alterada?",
    "options": [
      "Remover licença de gravação dos externos",
      "Desabilitar \"Allow cloud recording\" para participantes externos na Meeting Policy",
      "Bloquear o acesso via Conditional Access",
      "Configurar Data Loss Prevention (DLP)"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Políticas de Reunião (Nível: intermediário).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "Desabilitar \"Allow cloud recording\" para participantes externos na Meeting Policy — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q271",
    "text": "Qual é o limite padrão de participantes em um Teams Live Event no plano Microsoft 365 E3?",
    "options": [
      "500 participantes",
      "20.000 participantes",
      "1.000 participantes",
      "10.000 participantes"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Live Events (Nível: intermediário).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "10.000 participantes — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q272",
    "text": "Qual recurso do Teams permite criar eventos com formulário de inscrição para participantes externos?",
    "options": [
      "Webinars do Teams",
      "Town Hall",
      "Live Events",
      "Reunião de Canal"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Webinars (Nível: iniciante).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "Webinars do Teams — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q273",
    "text": "Qual é a principal diferença entre um Town Hall e um Webinar no Teams?",
    "options": [
      "Town Hall suporta até 20.000 participantes com apresentação unidirecional; Webinar é interativo e bidirecional",
      "Town Hall usa Direct Routing; Webinar usa SIP",
      "Town Hall requer licença E5; Webinar é gratuito",
      "Webinar suporta mais participantes que Town Hall"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Town Hall (Nível: intermediário).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "Town Hall suporta até 20.000 participantes com apresentação unidirecional; Webinar é interativo e bidirecional — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q274",
    "text": "Onde são armazenadas as gravações de reuniões do Teams por padrão após a migração do Microsoft Stream Classic?",
    "options": [
      "Exchange Online mailbox do organizador",
      "Azure Storage Account do tenant",
      "OneDrive do organizador ou SharePoint do canal para reuniões de canal",
      "SharePoint do tenant raiz"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Gravação (Nível: avançado).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "OneDrive do organizador ou SharePoint do canal para reuniões de canal — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q275",
    "text": "Um administrador precisa garantir que todas as reuniões do Teams sejam gravadas automaticamente para fins de conformidade. Qual recurso deve ser configurado?",
    "options": [
      "Auto-Recording na Meeting Policy padrão",
      "Compliance Recording Policy usando parceiro certificado de gravação",
      "Microsoft Purview Communication Compliance",
      "Azure Media Services"
    ],
    "correctAnswer": 1,
    "difficulty": "avancado",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Compliance de Reunião (Nível: avançado).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "Compliance Recording Policy usando parceiro certificado de gravação — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q276",
    "text": "Onde são armazenadas as mensagens de voicemail dos usuários do Teams Phone?",
    "options": [
      "Na caixa de entrada do Exchange Online do usuário",
      "No OneDrive da organização",
      "No Azure Blob Storage do tenant",
      "No SharePoint pessoal do usuário"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Serviços de Voz Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Serviços de Voz Teams — subtema: Voicemail (Nível: intermediário).",
      "papoReto": "E.164 é formato internacional obrigatório (+55 11 98765-4321), máscara chamada mascara origem, portabilidade numérica via LOA",
      "respostaCerta": "Na caixa de entrada do Exchange Online do usuário — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "E.164 = +55 11 números, obrigatório PSTN; usuário vs serviço — impacto aplicabilidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Portabilidade exige LOA, conta faturamento, números E.164, data desejada"
    }
  },
  {
    "id": "ms721_q277",
    "text": "Qual recurso permite que o voicemail do Teams transcreva automaticamente mensagens de voz em texto?",
    "options": [
      "Speech-to-Text do Power Automate",
      "Copilot for Teams",
      "Transcrição de Voicemail (Cloud Voicemail Transcription)",
      "Azure Cognitive Services manual"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Serviços de Voz Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Serviços de Voz Teams — subtema: Voicemail (Nível: iniciante).",
      "papoReto": "Teams Phone é PBX gerenciado Microsoft na nuvem, core de telefonia em Teams com transferência, correio voz, auto-atendentes, filas",
      "respostaCerta": "Transcrição de Voicemail (Cloud Voicemail Transcription) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Phone = PBX nuvem Microsoft, nome antigo Phone System, mesma coisa",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Phone System = Teams Phone (rebrand 2019) — mesma solução, apenas nome novo"
    }
  },
  {
    "id": "ms721_q278",
    "text": "Um administrador quer permitir que apenas usuários específicos façam chamadas privadas no Teams. Qual política deve ser configurada?",
    "options": [
      "Meeting Policy com restrição de chamadas",
      "Calling Policy com \"Make private calls\" habilitado apenas para o grupo específico",
      "Conditional Access com filtro de chamadas",
      "Teams Policy com escopo de usuário"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Serviços de Voz Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Serviços de Voz Teams — subtema: Políticas de Chamada (Nível: intermediário).",
      "papoReto": "Política de chamada controla: encaminhamento externo, toque simultâneo, delegação, máscaras de chamada",
      "respostaCerta": "Calling Policy com \"Make private calls\" habilitado apenas para o grupo específico — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Política de chamada = permissões granulares por usuário",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Política de encaminhamento pode bloquear externos para controlar custos"
    }
  },
  {
    "id": "ms721_q279",
    "text": "Qual tipo de número de telefone é necessário para configurar um Auto Atendedor ou Fila de Chamadas no Teams?",
    "options": [
      "Número de Serviço (Service Number)",
      "Número de Emergência (E911)",
      "Número de Usuário (User Number)",
      "Número Virtual (Virtual DID)"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Serviços de Voz Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Serviços de Voz Teams — subtema: Números de Serviço (Nível: intermediário).",
      "papoReto": "E.164 é formato internacional obrigatório (+55 11 98765-4321), máscara de chamada mascara origem chamadas",
      "respostaCerta": "Número de Serviço (Service Number) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "E.164 = formato internacional +55 11 números, obrigatório PSTN",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Máscara de chamada permite múltiplas máscaras na mesma política para flexibilidade"
    }
  },
  {
    "id": "ms721_q280",
    "text": "Qual serviço Microsoft permite definir políticas de chamada de emergência específicas por local de rede como em uma filial?",
    "options": [
      "Direct Routing Emergency Policy",
      "Location Information Server isolado",
      "Teams Network Topology Policy",
      "Emergency Call Routing Policy com Network Sites"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Serviços de Voz Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Serviços de Voz Teams — subtema: Chamadas de Emergência (Nível: avançado).",
      "papoReto": "Política de chamada controla: encaminhamento externo, toque simultâneo, delegação, máscaras de chamada",
      "respostaCerta": "Emergency Call Routing Policy com Network Sites — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Política de chamada = permissões granulares por usuário",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Política de encaminhamento pode bloquear externos para controlar custos"
    }
  },
  {
    "id": "ms721_q281",
    "text": "Qual é a função de configurar \"Trusted IPs\" no Teams Admin Center para gerenciamento de localização?",
    "options": [
      "Configurar bypass de proxy para mídia",
      "Identificar IPs externos corporativos para mapear usuários a sites de rede",
      "Restringir acesso ao Teams por faixa de IP",
      "Definir rotas de QoS para tráfego de voz"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Trusted IP (Nível: intermediário).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Identificar IPs externos corporativos para mapear usuários a sites de rede — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q282",
    "text": "O que é um \"Network Site\" no Teams Admin Center?",
    "options": [
      "Uma localização física mapeada a sub-redes de rede para aplicar políticas de localização",
      "Um datacenter de roteamento SIP",
      "Um servidor de mídia regional da Microsoft",
      "Um nó de conectividade para Direct Routing"
    ],
    "correctAnswer": 0,
    "difficulty": "intermediario",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Network Sites (Nível: intermediário).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Uma localização física mapeada a sub-redes de rede para aplicar políticas de localização — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q283",
    "text": "Um administrador identifica alta taxa de packet loss em chamadas de uma filial específica. Qual ferramenta oferece detalhes granulares por sub-rede para diagnóstico?",
    "options": [
      "Teams Health Dashboard",
      "Call Analytics por usuário individual",
      "Network Planner",
      "Call Quality Dashboard (CQD) com filtro por sub-rede"
    ],
    "correctAnswer": 3,
    "difficulty": "avancado",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Call Quality Dashboard (Nível: avançado).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Call Quality Dashboard (CQD) com filtro por sub-rede — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q284",
    "text": "Qual ferramenta da Microsoft avalia a conectividade de rede de um local específico para o Microsoft 365 incluindo Teams?",
    "options": [
      "Microsoft 365 Network Connectivity Test",
      "Azure Network Watcher",
      "Teams Network Planner",
      "Microsoft Network Assessment Tool"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Conectividade Microsoft 365 (Nível: iniciante).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Microsoft 365 Network Connectivity Test — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q285",
    "text": "O que é o SIP Gateway no Microsoft Teams?",
    "options": [
      "Um componente de Direct Routing para roteamento de chamadas externas",
      "Um proxy SIP local implantado no datacenter do cliente",
      "Um serviço de VoIP para reuniões de conferência",
      "Um serviço que permite usar telefones SIP de terceiros certificados com o Teams"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: SIP Gateway (Nível: intermediário).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Um serviço que permite usar telefones SIP de terceiros certificados com o Teams — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q286",
    "text": "Qual é o pré-requisito de licença para usar um dispositivo SIP de terceiros via SIP Gateway no Teams?",
    "options": [
      "Teams Phone Standard ou Teams Phone with Calling Plan",
      "Licença de add-on SIP Gateway separada",
      "Microsoft 365 E5 exclusivamente",
      "Teams Rooms Pro"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: SIP Gateway (Nível: avançado).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Teams Phone Standard ou Teams Phone with Calling Plan — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q287",
    "text": "Onde um administrador pode verificar se um dispositivo de hardware é oficialmente certificado para Microsoft Teams?",
    "options": [
      "Partner Center da Microsoft",
      "Catálogo de dispositivos certificados no Teams Admin Center ou site Microsoft",
      "Microsoft AppSource",
      "Azure Marketplace"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Certificação de Dispositivos (Nível: iniciante).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Catálogo de dispositivos certificados no Teams Admin Center ou site Microsoft — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q288",
    "text": "Qual conta é usada como identidade de login padrão em um dispositivo de Sala do Teams?",
    "options": [
      "Conta pessoal do usuário da sala",
      "Conta de administrador global do tenant",
      "Conta de Recurso de Sala (Resource Account) do Exchange Online",
      "Conta de serviço genérica do Active Directory"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Salas do Teams (Nível: intermediário).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Conta de Recurso de Sala (Resource Account) do Exchange Online — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q289",
    "text": "Qual recurso de IA do Teams gera automaticamente notas, resumos e tarefas após uma reunião?",
    "options": [
      "Transcrição automática padrão",
      "Intelligent Recap (Copilot for Teams)",
      "Microsoft Viva Insights",
      "Forms pós-reunião"
    ],
    "correctAnswer": 1,
    "difficulty": "intermediario",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Inteligência Artificial (Nível: intermediário).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "Intelligent Recap (Copilot for Teams) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q290",
    "text": "Quem pode criar e gerenciar Breakout Rooms em uma reunião do Teams?",
    "options": [
      "Qualquer participante autenticado",
      "Apenas usuários com licença E5",
      "Apenas o administrador do tenant",
      "O organizador da reunião e apresentadores designados com permissão"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Breakout Rooms (Nível: intermediário).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "O organizador da reunião e apresentadores designados com permissão — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q291",
    "text": "Um usuário no Brasil discou um número com formato local sem código de país. O Teams não reconheceu o número. Qual recurso deve ser configurado para normalizar o número automaticamente?",
    "options": [
      "Dial Plan com regras de normalização para o formato local",
      "Calling Policy com PSTN habilitado",
      "Direct Routing com SBC regional",
      "Emergency Calling Policy"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Serviços de Voz Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Serviços de Voz Teams — subtema: Dial Plans (Nível: avançado).",
      "papoReto": "E.164 é formato internacional obrigatório (+55 11 98765-4321), máscara chamada mascara origem, portabilidade numérica via LOA",
      "respostaCerta": "Dial Plan com regras de normalização para o formato local — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "E.164 = +55 11 números, obrigatório PSTN; usuário vs serviço — impacto aplicabilidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Portabilidade exige LOA, conta faturamento, números E.164, data desejada"
    }
  },
  {
    "id": "ms721_q292",
    "text": "Qual é a hierarquia correta de aplicação de Dial Plans no Teams?",
    "options": [
      "Service Country Dial Plan sempre prevalece sobre o Tenant Dial Plan",
      "O Dial Plan do SBC substitui todos os outros",
      "User Dial Plan é ignorado quando existe Tenant Dial Plan",
      "Tenant Dial Plan sobrepõe o Service Country Dial Plan quando ambos estão atribuídos"
    ],
    "correctAnswer": 3,
    "difficulty": "intermediario",
    "domain": "Serviços de Voz Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Serviços de Voz Teams — subtema: Dial Plans (Nível: intermediário).",
      "papoReto": "Teams Phone é PBX gerenciado Microsoft na nuvem, core de telefonia em Teams com transferência, correio voz, auto-atendentes, filas",
      "respostaCerta": "Tenant Dial Plan sobrepõe o Service Country Dial Plan quando ambos estão atribuídos — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Phone = PBX nuvem Microsoft, nome antigo Phone System, mesma coisa",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Phone System = Teams Phone (rebrand 2019) — mesma solução, apenas nome novo"
    }
  },
  {
    "id": "ms721_q293",
    "text": "Qual comando PowerShell é usado para criar um trunk de Direct Routing associando um SBC ao Microsoft Phone System?",
    "options": [
      "New-CsOnlinePSTNGateway",
      "Add-CsOnlinePSTNTrunk",
      "New-CsVoicePolicy",
      "Set-CsOnlineVoiceRoute"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Serviços de Voz Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Serviços de Voz Teams — subtema: Direct Routing (Nível: avançado).",
      "papoReto": "Direct Routing = você gerencia SBC certificado Microsoft, máxima flexibilidade e controle troncos SIP",
      "respostaCerta": "New-CsOnlinePSTNGateway — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Direct Routing = seu SBC, seu controle, máxima complexidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "SBCs certificados: AudioCodes, Ribbon, Lync Mediant, Acme/Ixia, etc. — verificar lista compatibilidade Microsoft"
    }
  },
  {
    "id": "ms721_q294",
    "text": "Um administrador precisa garantir que chamadas para números internacionais sejam roteadas por um SBC específico no Direct Routing. Qual recurso deve ser configurado?",
    "options": [
      "Voice Route com padrão de número internacional associado ao PSTN Gateway correto",
      "Dial Plan com normalização internacional",
      "Emergency Call Routing Policy",
      "Calling Policy com restrição de chamadas internacionais"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Serviços de Voz Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Serviços de Voz Teams — subtema: Voice Routing (Nível: avançado).",
      "papoReto": "Direct Routing = você gerencia SBC certificado Microsoft, máxima flexibilidade e controle troncos SIP",
      "respostaCerta": "Voice Route com padrão de número internacional associado ao PSTN Gateway correto — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Direct Routing = seu SBC, seu controle, máxima complexidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "SBCs certificados: AudioCodes, Ribbon, Lync Mediant, Acme/Ixia, etc. — verificar lista compatibilidade Microsoft"
    }
  },
  {
    "id": "ms721_q295",
    "text": "Qual é a ordem correta de processamento de uma chamada de saída no Direct Routing do Teams?",
    "options": [
      "Calling Policy → Voice Routing Policy → Dial Plan → SBC",
      "Dial Plan → Calling Policy → PSTN Gateway → Voice Route",
      "Voice Routing Policy → PSTN Usage → Voice Route → PSTN Gateway",
      "PSTN Gateway → Voice Route → PSTN Usage → Voice Routing Policy"
    ],
    "correctAnswer": 2,
    "difficulty": "intermediario",
    "domain": "Serviços de Voz Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Serviços de Voz Teams — subtema: Voice Routing (Nível: intermediário).",
      "papoReto": "Direct Routing = você gerencia SBC certificado Microsoft, máxima flexibilidade e controle troncos SIP",
      "respostaCerta": "Voice Routing Policy → PSTN Usage → Voice Route → PSTN Gateway — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Direct Routing = seu SBC, seu controle, máxima complexidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "SBCs certificados: AudioCodes, Ribbon, Lync Mediant, Acme/Ixia, etc. — verificar lista compatibilidade Microsoft"
    }
  },
  {
    "id": "ms721_q296",
    "text": "O que é o Teams Advisor no Teams Admin Center?",
    "options": [
      "Um dashboard de qualidade de chamadas em tempo real",
      "Uma ferramenta guiada que ajuda a planejar e executar a implantação do Teams na organização",
      "Um serviço de suporte técnico da Microsoft",
      "Um relatório de licenças e uso do Teams"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Teams Advisor (Nível: iniciante).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Uma ferramenta guiada que ajuda a planejar e executar a implantação do Teams na organização — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q297",
    "text": "Um administrador precisa impedir que usuários externos iniciem uma reunião antes do organizador entrar. Qual configuração resolve isso?",
    "options": [
      "Habilitar o Lobby com a opção \"Only organizers and co-organizers can bypass the lobby\"",
      "Configurar Conditional Access para bloquear externos",
      "Remover a permissão de agendamento de reuniões dos externos",
      "Desabilitar o link de reunião para externos"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Políticas de Reunião (Nível: avançado).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "Habilitar o Lobby com a opção \"Only organizers and co-organizers can bypass the lobby\" — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q298",
    "text": "Um administrador precisa monitorar remotamente o status de saúde de todos os dispositivos de Salas do Teams na organização a partir de um único painel. Qual recurso deve ser utilizado?",
    "options": [
      "Teams Rooms Pro Management Portal",
      "Microsoft Endpoint Manager",
      "Teams Admin Center Device Inventory",
      "Azure Monitor com Log Analytics"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Salas do Teams (Nível: avançado).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Teams Rooms Pro Management Portal — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "Azure Monitor with Log Analytics is for general Azure infrastructure monitoring, not Teams Phone health — it doesn't display SBC connection status or SIP errors"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q299",
    "text": "Um administrador percebe que um número atribuído via Operator Connect não está funcionando para chamadas de saída. Qual é o primeiro passo de diagnóstico recomendado?",
    "options": [
      "Verificar o status do número e do operador diretamente no Teams Admin Center na seção Operator Connect",
      "Recriar o trunk SIP manualmente",
      "Abrir chamado no suporte Microsoft sem verificação prévia",
      "Reatribuir o número a outro usuário para testar"
    ],
    "correctAnswer": 0,
    "difficulty": "avancado",
    "domain": "Serviços de Voz Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Serviços de Voz Teams — subtema: Operator Connect (Nível: avançado).",
      "papoReto": "Operator Connect = operadora parceira gerencia PSTN + SBC, reduz complexidade vs Direct Routing",
      "respostaCerta": "Verificar o status do número e do operador diretamente no Teams Admin Center na seção Operator Connect — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Operator Connect = operadora terceira + SBC dela, meio termo entre Calling Plan e Direct Routing",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Operadora parceira em Operator Connect gerencia tanto PSTN quanto SBC por você"
    }
  },
  {
    "id": "ms721_q300",
    "text": "Um administrador precisa identificar quais sub-redes corporativas estão gerando mais chamadas com qualidade ruim no CQD. Qual funcionalidade permite essa análise?",
    "options": [
      "Relatório de usuários individuais por Call Analytics",
      "Teams Health Dashboard com alertas automáticos",
      "Relatório de Building Data com mapeamento de sub-redes por localização física",
      "Network Planner com estimativa de banda"
    ],
    "correctAnswer": 2,
    "difficulty": "avancado",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Call Quality Dashboard (Nível: avançado).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Relatório de Building Data com mapeamento de sub-redes por localização física — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q301",
    "text": "O que é necessário para um usuário do Teams fazer e receber chamadas telefônicas para números de telefone fixos ou móveis externos (PSTN)?",
    "options": [
      "Apenas o aplicativo desktop do Teams sem qualquer licença adicional ou configuração de voz",
      "Uma conta gratuita do Azure com subscrição ativa de Azure Communication Services habilitada",
      "Uma licença do Skype for Business Server local com gateway analógico conectado via USB",
      "Uma licença do Teams Phone (ou assinatura E5) combinada com uma opção de conectividade PSTN (como Calling Plan, Operator Connect ou Direct Routing)"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Visão Geral do Teams Phone (Nível: iniciante).",
      "papoReto": "E.164 é formato internacional obrigatório (+55 11 98765-4321), máscara chamada mascara origem, portabilidade numérica via LOA",
      "respostaCerta": "Uma licença do Teams Phone (ou assinatura E5) combinada com uma opção de conectividade PSTN (como Calling Plan, Operator Connect ou Direct Routing) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "E.164 = +55 11 números, obrigatório PSTN; usuário vs serviço — impacto aplicabilidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Portabilidade exige LOA, conta faturamento, números E.164, data desejada"
    }
  },
  {
    "id": "ms721_q302",
    "text": "Qual das seguintes assinaturas do Microsoft 365 já inclui a licença do Teams Phone Standard nativamente, sem necessidade de add-on?",
    "options": [
      "Office 365 E1",
      "Microsoft 365 E3",
      "Microsoft 365 Business Basic",
      "Microsoft 365 E5"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Licenciamento (Nível: iniciante).",
      "papoReto": "Teams Phone é PBX gerenciado Microsoft na nuvem, core de telefonia em Teams com transferência, correio voz, auto-atendentes, filas",
      "respostaCerta": "Microsoft 365 E5 — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Phone = PBX nuvem Microsoft, nome antigo Phone System, mesma coisa",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Phone System = Teams Phone (rebrand 2019) — mesma solução, apenas nome novo"
    }
  },
  {
    "id": "ms721_q303",
    "text": "Qual é a principal diferença entre o Microsoft Teams Rooms on Windows e o Microsoft Teams Rooms on Android?",
    "options": [
      "O Teams Rooms on Windows não requer licença do Teams Rooms Pro, funcionando com qualquer conta de usuário comum",
      "O Teams Rooms on Windows roda em um PC dedicado com Windows IoT e periféricos modulares, enquanto o Teams Rooms on Android geralmente roda em barras de colaboração integradas (tudo-em-um)",
      "O Teams Rooms on Android não suporta chamadas de vídeo, apenas chamadas de áudio e apresentações locais",
      "O Teams Rooms on Android é exclusivo para salas de conferência grandes de até 50 pessoas"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Teams Rooms (Nível: iniciante).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "O Teams Rooms on Windows roda em um PC dedicado com Windows IoT e periféricos modulares, enquanto o Teams Rooms on Android geralmente roda em barras de colaboração integradas (tudo-em-um) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q304",
    "text": "O que significa a sigla QoS em projetos de rede para implantação de comunicações em tempo real no Microsoft Teams?",
    "options": [
      "Quality of System (Qualidade do Sistema) — métrica que mede o desempenho do processador do computador durante chamadas",
      "Query on Security (Consulta de Segurança) — protocolo que verifica certificados TLS de gateways de voz automaticamente",
      "Quality of Service (Qualidade de Serviço) — tecnologia que prioriza pacotes de voz e vídeo na rede para evitar atrasos e cortes",
      "Queue of Services (Fila de Serviços) — painel de controle que gerencia a ordem de agentes na fila de chamada do Teams"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: QoS (Nível: iniciante).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Quality of Service (Qualidade de Serviço) — tecnologia que prioriza pacotes de voz e vídeo na rede para evitar atrasos e cortes — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q305",
    "text": "Ao agendar um Webinar no Microsoft Teams, qual recurso permite que os organizadores coletem informações dos participantes antes do evento?",
    "options": [
      "Formulário de inscrição personalizável (Registration Form)",
      "Gravação em nuvem automática na pasta do OneDrive",
      "Configuração de bypass do lobby para convidados externos",
      "Painel de votação rápida em tempo real (Polls)"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Webinars (Nível: iniciante).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "Formulário de inscrição personalizável (Registration Form) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q306",
    "text": "Onde um administrador do Teams pode examinar de forma rápida os detalhes de uma chamada de áudio específica realizada por um usuário que reclamou de queda de sinal?",
    "options": [
      "No painel do Microsoft Entra ID verificando logs de login e auditoria do usuário nas últimas 24 horas",
      "No Call Quality Dashboard (CQD) criando um filtro para o endereço MAC do dispositivo do usuário",
      "No aplicativo Teams do próprio usuário acessando a pasta de arquivos temporários de diagnóstico",
      "No Teams Admin Center, pesquisando pelo usuário afetado e acessando a guia 'Histórico de chamadas' (Call Analytics)"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: Call Analytics (Nível: iniciante).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "No Teams Admin Center, pesquisando pelo usuário afetado e acessando a guia 'Histórico de chamadas' (Call Analytics) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "Call Quality Dashboard shows user-side call quality metrics (jitter, packet loss, latency), not SBC connection status — use Health Dashboard for Direct Routing instead",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q307",
    "text": "Qual recurso do Teams Phone permite que um usuário coloque uma chamada em espera em um código curto e outro usuário (ou ele mesmo) a recupere de outro dispositivo discando o código?",
    "options": [
      "Estacionamento de chamadas (Call Park)",
      "Delegação de chamadas (Call Delegation)",
      "Encaminhamento de chamadas (Call Forwarding)",
      "Chamada em grupo (Group Call Pickup)"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Recursos de Chamada (Nível: iniciante).",
      "papoReto": "E.164 é formato internacional obrigatório (+55 11 98765-4321), máscara chamada mascara origem, portabilidade numérica via LOA",
      "respostaCerta": "Estacionamento de chamadas (Call Park) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "E.164 = +55 11 números, obrigatório PSTN; usuário vs serviço — impacto aplicabilidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Portabilidade exige LOA, conta faturamento, números E.164, data desejada"
    }
  },
  {
    "id": "ms721_q308",
    "text": "Qual é o formato internacional padrão de número de telefone exigido pelo Microsoft Teams Phone para garantir a correta discagem e roteamento de chamadas?",
    "options": [
      "Formato E.164 (exemplo: +551130001234)",
      "Formato SIP URI legada (exemplo: sip:user@domain.com)",
      "Formato local sem código de país ou DDD (exemplo: 3000-1234)",
      "Formato hexadecimal criptografado pelo Entra ID"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Números de Telefone (Nível: iniciante).",
      "papoReto": "Calling Plan = Microsoft é operadora PSTN, cobrança por minuto/planos, zero infraestrutura SBC/SIP sua",
      "respostaCerta": "Formato E.164 (exemplo: +551130001234) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Calling Plan = Microsoft cuida de tudo, você só paga e disca",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Disponibilidade por país varia — verificar suporte regional Microsoft antes contratação"
    }
  },
  {
    "id": "ms721_q309",
    "text": "Qual console ou painel de toque é normalmente colocado na mesa de uma sala Microsoft Teams Rooms para permitir controlar a reunião, ajustar volume e compartilhar conteúdo?",
    "options": [
      "Painel Teams externo (Teams Panel) fixado na porta da sala",
      "Aplicativo Teams no celular pessoal de qualquer participante",
      "Teclado e mouse sem fio conectados ao computador principal",
      "Console de controle de toque da sala (MTR Touch Console)"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Teams Rooms (Nível: iniciante).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Console de controle de toque da sala (MTR Touch Console) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q310",
    "text": "Qual é a recomendação básica de largura de banda simétrica por usuário do Teams para chamadas de áudio ponto a ponto de alta qualidade?",
    "options": [
      "Aproximadamente 100 kbps de download e upload",
      "Cerca de 1.5 Mbps simétricos para áudio básico",
      "Apenas 5 kbps usando compressão de codec GSM",
      "Mínimo de 10 Mbps simétricos por chamada de áudio"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Requisitos de Banda (Nível: iniciante).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Aproximadamente 100 kbps de download e upload — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q311",
    "text": "No Microsoft Teams, qual tipo de evento de transmissão em larga escala substituiu os antigos Teams Live Events para reuniões de toda a empresa (All-Hands)?",
    "options": [
      "Webinar avançado de alta definição",
      "Teams Assembly",
      "Town Hall (Prefeitura)",
      "Reunião de canal privado integrada"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Town Hall (Nível: iniciante).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "Town Hall (Prefeitura) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q312",
    "text": "Onde os engenheiros e administradores de TI do Teams verificam a integridade geral do serviço global da Microsoft em tempo real para saber se há alguma indisponibilidade?",
    "options": [
      "No console do SBC local verificando as conexões SIP ativas com o roteador corporativo",
      "No Portal de Integridade do Serviço (Service Health Dashboard) no Microsoft 365 Admin Center",
      "No painel do Call Quality Dashboard (CQD) na seção de relatórios de edifício",
      "No log de auditoria do Microsoft Purview pesquisando por eventos de compliance de comunicação"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: Uptime (Nível: iniciante).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "No Portal de Integridade do Serviço (Service Health Dashboard) no Microsoft 365 Admin Center — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "Call Quality Dashboard shows user-side call quality metrics (jitter, packet loss, latency), not SBC connection status — use Health Dashboard for Direct Routing instead",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q313",
    "text": "Para onde são enviadas as mensagens de correio de voz que os usuários do Teams Phone recebem?",
    "options": [
      "Para uma pasta oculta do OneDrive for Business compartilhada com o administrador do tenant",
      "Apenas para o histórico de chamadas do aplicativo Teams sem armazenamento permanente de arquivo",
      "Para a caixa de correio do Exchange Online do usuário, onde a mensagem de voz é entregue como anexo de e-mail junto com a transcrição em texto",
      "Para um servidor local de correio de voz configurado no gateway SBC"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Correio de Voz (Nível: iniciante).",
      "papoReto": "E.164 é formato internacional obrigatório (+55 11 98765-4321), máscara chamada mascara origem, portabilidade numérica via LOA",
      "respostaCerta": "Para a caixa de correio do Exchange Online do usuário, onde a mensagem de voz é entregue como anexo de e-mail junto com a transcrição em texto — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "E.164 = +55 11 números, obrigatório PSTN; usuário vs serviço — impacto aplicabilidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Portabilidade exige LOA, conta faturamento, números E.164, data desejada"
    }
  },
  {
    "id": "ms721_q314",
    "text": "Como as contas de recursos (Resource Accounts) associadas a Filas de Chamada e Atendedores Automáticos no Teams Phone devem ser licenciadas?",
    "options": [
      "Com uma licença gratuita de dispositivo virtual do Teams Phone (Microsoft Teams Phone Resource Account license)",
      "Com uma licença completa do Microsoft 365 E5 associada à conta de recurso",
      "Elas não exigem nenhuma licença associada no tenant do Microsoft 365",
      "Com a mesma licença pessoal de Teams Phone Standard do administrador que criou as contas"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Fila de Chamada (Nível: iniciante).",
      "papoReto": "Fila = buffer chamadas entrantes, música espera, presença agentes automática, roteamento (FIFO/Longest Idle), relatórios perdidas",
      "respostaCerta": "Com uma licença gratuita de dispositivo virtual do Teams Phone (Microsoft Teams Phone Resource Account license) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Fila = múltiplos agentes, FIFO + Longest Idle, presença automática, timeout/redirecionamento",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Longest Idle distribui para agente menos ocupado — combinar FIFO + Longest Idle reduz espera"
    }
  },
  {
    "id": "ms721_q315",
    "text": "Qual recurso do Teams Phone permite configurar um telefone de área comum (como recepção ou corredor) para discar automaticamente para um número pré-definido assim que o monofone é retirado do gancho?",
    "options": [
      "Transferência cega de chamadas",
      "Configuração de telefone de linha direta (Hotline / PLAR)",
      "Roteamento baseado em localização (LBR)",
      "Modo de acessibilidade de discagem por voz ativa"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: Telefones Comuns (Nível: iniciante).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Configuração de telefone de linha direta (Hotline / PLAR) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q316",
    "text": "Qual é a métrica de rede que mede a variação no tempo de chegada dos pacotes de áudio/vídeo e que se muito alta pode causar áudio robótico?",
    "options": [
      "Latência de ida e volta",
      "RTT (Round Trip Time)",
      "Largura de banda",
      "Jitter"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Métricas de Rede (Nível: iniciante).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Jitter — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q317",
    "text": "Qual recurso de segurança do Teams garante que participantes externos de uma reunião aguardem até que o organizador ou apresentador autorize explicitamente a sua entrada?",
    "options": [
      "Políticas de retenção de reuniões",
      "Bloqueio de chamadas externas",
      "Lobby (Sala de Espera)",
      "Acesso condicional"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Lobby (Nível: iniciante).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "Lobby (Sala de Espera) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q318",
    "text": "Como um usuário comum pode baixar rapidamente os logs de diagnóstico do cliente Teams no Windows para enviar ao suporte técnico?",
    "options": [
      "Formatando o disco local onde o Teams está instalado",
      "Abrindo o prompt de comando e digitando 'get-teams-logs'",
      "Pressionando o atalho de teclado Ctrl + Alt + Shift + 1 no Teams",
      "Acessando o Painel de Controle do Windows > Ferramentas Administrativas"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: Logs de Cliente (Nível: iniciante).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "Pressionando o atalho de teclado Ctrl + Alt + Shift + 1 no Teams — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q319",
    "text": "Qual é a principal vantagem operacional do Operator Connect para conectividade PSTN no Microsoft Teams Phone?",
    "options": [
      "Permite selecionar um operador parceiro no Teams Admin Center, que fornece os números e gerencia a conexão PSTN de forma simples na nuvem, sem necessidade de hardware local",
      "Fornece conexão PSTN gratuita para qualquer país do mundo sem taxas adicionais de assinatura",
      "Permite o uso de telefones IP Skype antigos sem suporte a criptografia SRTP",
      "Substitui completamente o uso do Azure AD/Entra ID para login de usuários de voz"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Operator Connect (Nível: iniciante).",
      "papoReto": "Operator Connect = operadora parceira gerencia PSTN + SBC, reduz complexidade vs Direct Routing",
      "respostaCerta": "Permite selecionar um operador parceiro no Teams Admin Center, que fornece os números e gerencia a conexão PSTN de forma simples na nuvem, sem necessidade de hardware local — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Operator Connect = operadora terceira + SBC dela, meio termo entre Calling Plan e Direct Routing",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Operadora parceira gerencia PSTN e SBC por você — você configura via Teams Admin Center"
    }
  },
  {
    "id": "ms721_q320",
    "text": "O que é necessário configurar no Microsoft Teams antes de associar um número de telefone externo PSTN a um Atendedor Automático?",
    "options": [
      "Uma política de roteamento baseado em localização (LBR) para a sub-rede do Atendedor",
      "Um SBC físico no local conectado via Direct Routing",
      "Uma conta de recurso (Resource Account) associada ao Atendedor Automático com a respectiva licença gratuita de conta de recurso atribuída",
      "Uma caixa de correio do Exchange Online compartilhada para receber gravações em MP3"
    ],
    "correctAnswer": 2,
    "difficulty": "iniciante",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Auto Atendedor (Nível: iniciante).",
      "papoReto": "E.164 é formato internacional obrigatório (+55 11 98765-4321), máscara chamada mascara origem, portabilidade numérica via LOA",
      "respostaCerta": "Uma conta de recurso (Resource Account) associada ao Atendedor Automático com a respectiva licença gratuita de conta de recurso atribuída — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "E.164 = +55 11 números, obrigatório PSTN; usuário vs serviço — impacto aplicabilidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "SBC requirements are specific — it must be on Microsoft's certified list, have valid TLS certificate with FQDN, support SIP TLS on port 5061, and SRTP for media",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Portabilidade exige LOA, conta faturamento, números E.164, data desejada"
    }
  },
  {
    "id": "ms721_q321",
    "text": "Para que serve o serviço SIP Gateway disponibilizado pela Microsoft no Teams?",
    "options": [
      "Permite que aparelhos telefônicos IP baseados em protocolo SIP de outros fabricantes legados (como Polycom, Cisco ou Yealink) se conectem e funcionem com o Teams Phone de forma básica",
      "É um painel de gerenciamento de vídeo integrado ao Microsoft Stream",
      "Permite conectar troncos SIP locais de operadoras ao Teams Phone usando um computador comum como SBC",
      "Conecta dispositivos de videoconferência H.323 legados a reuniões do Microsoft Teams Premium"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Dispositivos Teams",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Dispositivos Teams — subtema: SIP Gateway (Nível: iniciante).",
      "papoReto": "MTR = Microsoft Teams Rooms integra áudio/vídeo/câmera/display para salas híbridas, gerenciada via Intune",
      "respostaCerta": "Permite que aparelhos telefônicos IP baseados em protocolo SIP de outros fabricantes legados (como Polycom, Cisco ou Yealink) se conectem e funcionem com o Teams Phone de forma básica — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "MTR = caixa preta sala, gerenciada Intune, monitora via Teams Admin Center",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "MTR requer account de recurso com licença, autenticação via OAuth 2.0 ou certificado"
    }
  },
  {
    "id": "ms721_q322",
    "text": "Qual ferramenta baseada em navegador da Microsoft pode ser usada para testar o desempenho de rede e latência de um site local diretamente contra a nuvem do Microsoft 365?",
    "options": [
      "Teams Network Assessment CLI Tool",
      "Azure Speed Test local",
      "Windows Network Diagnostics",
      "Microsoft 365 Network Connectivity Test (connectivity.office.com)"
    ],
    "correctAnswer": 3,
    "difficulty": "iniciante",
    "domain": "Rede e Qualidade",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Rede e Qualidade — subtema: Verificação de Conectividade (Nível: iniciante).",
      "papoReto": "QoS = DSCP marcação + faixas UDP específicas (áudio 50000-50019, vídeo 50020-50039), prioriza media em congestionamento",
      "respostaCerta": "Microsoft 365 Network Connectivity Test (connectivity.office.com) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "QoS = DSCP + portas UDP 50000-50059 para priorizar media",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Implementar QoS em switches, roteadores, firewalls — configuração apenas um ponto é insuficiente"
    }
  },
  {
    "id": "ms721_q323",
    "text": "No Microsoft Teams, qual função pode ser atribuída a um participante de reunião para permitir que ele gerencie opções de reunião, controle breakout rooms e admita pessoas do lobby, mas sem poder remover o organizador principal?",
    "options": [
      "Administrador de Reunião (Meeting Admin)",
      "Co-organizador (Co-organizer)",
      "Supervisor de Sala (Room Supervisor)",
      "Apresentador (Presenter)"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Reuniões e Eventos",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Reuniões e Eventos — subtema: Co-organizador (Nível: iniciante).",
      "papoReto": "Teams Premium = resumo IA por Copilot, interpretação simultânea 120+ idiomas, Town Halls até 20k participantes",
      "respostaCerta": "Co-organizador (Co-organizer) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "Teams Premium = IA + interpretação simultânea + relatórios avançados",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Interpretação simultânea requer línguas configuradas previamente, intérpretes em time separado"
    }
  },
  {
    "id": "ms721_q324",
    "text": "Qual é a classificação que o Teams dá a uma transmissão de áudio quando a perda de pacotes média excede 10% ou o jitter excede 30ms?",
    "options": [
      "Transmissão Ruim (Poor Stream)",
      "Transmissão Crítica (Critical Stream)",
      "Falha de Conexão SIP (SIP Call Failure)",
      "Chamada Incompatível (Incompatible Call)"
    ],
    "correctAnswer": 0,
    "difficulty": "iniciante",
    "domain": "Monitoramento e Solução de Problemas",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Monitoramento e Solução de Problemas — subtema: Métricas de Qualidade (Nível: iniciante).",
      "papoReto": "CQD = Call Quality Dashboard, métricas Poor Stream Rate, comparação por site/hora/modalidade, diagnóstico proativo",
      "respostaCerta": "Transmissão Ruim (Poor Stream) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "CQD = dashboard qualidade chamadas, Poor Stream Rate < 5% aceitável",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Auditoria em Teams Admin Center registra todas mudanças políticas — verificar logs para troubleshooting"
    }
  },
  {
    "id": "ms721_q325",
    "text": "Como é chamada a funcionalidade que permite exibir um número corporativo principal (como o do Atendedor Automático) nas chamadas externas feitas por funcionários, ocultando os seus números de ramal individuais?",
    "options": [
      "Plano de Discagem Normalizado (Dial Plan Rule)",
      "Política de mascaramento / substituição de ID de chamada (Caller ID Policy)",
      "Política de Roteamento de Voz Online (Voice Routing Policy)",
      "Regra de Tradução SIP no SBC (SBC Header Manipulation)"
    ],
    "correctAnswer": 1,
    "difficulty": "iniciante",
    "domain": "Teams Phone",
    "explanation": {
      "intro": "Esta questão avalia conhecimentos sobre Teams Phone — subtema: Identificação de Chamada (Nível: iniciante).",
      "papoReto": "E.164 é formato internacional obrigatório (+55 11 98765-4321), máscara chamada mascara origem, portabilidade numérica via LOA",
      "respostaCerta": "Política de mascaramento / substituição de ID de chamada (Caller ID Policy) — essa opção resolve diretamente a situação do enunciado.",
      "puloDoGato": "E.164 = +55 11 números, obrigatório PSTN; usuário vs serviço — impacto aplicabilidade",
      "cascasDeBanana": [
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices",
        "This option does not meet the technical requirements for Teams Phone — review Microsoft's certified solutions and configuration best practices"
      ],
      "dicaOuro": "Portabilidade exige LOA, conta faturamento, números E.164, data desejada"
    }
  }
];

export const questions = [
  // ============================================================
  // BLOCK 1 — BEGINNER — Cloud Concepts (7 questions)
  // ============================================================
  {
    id: "az900_q1_cloud",
    text: "A company wants to shift the cost of maintaining and upgrading physical servers to a monthly operational expense, paying only for what they use. Which spending model describes this strategy when migrating to the cloud?",
    options: [
      "CapEx (Capital Expenditure)",
      "OpEx (Operational Expenditure)",
      "Long-Term Investment (Long-Term Asset)",
      "Accelerated Depreciation"
    ],
    correctAnswer: 1,
    explanation: {
      intro: "This question tests your understanding of financial models applied to cloud computing.",
      papoReto: "CapEx is when you buy a server and it becomes company property (large upfront cost). OpEx is the monthly subscription: you pay as you use. The cloud excels at OpEx because it eliminates the initial hardware investment.",
      respostaCerta: "OpEx (Operational Expenditure) — continuous, on-demand payment, no fixed asset.",
      puloDoGato: "Whenever Microsoft talks about 'pay-as-you-go', 'no CapEx' or 'predictable monthly cost', the answer involves OpEx. CapEx appears when the question mentions 'own datacenter', 'purchased physical server' or 'amortization'.",
      cascasDeBanana: [
        "CapEx: it's the exact opposite — upfront capital expenditure (buying servers) that the cloud eliminates.",
        "Long-Term Investment: this is a synonym for CapEx in the accounting context.",
        "Accelerated Depreciation: a tax concept for fixed assets, not applicable to the cloud model."
      ],
      dicaOuro: "Cloud = OpEx. Own hardware = CapEx. Done."
    },
    difficulty: "iniciante",
    domain: "Cloud Concepts"
  },
  {
    id: "az900_q2_cloud",
    text: "An e-commerce store experiences massive traffic spikes during Black Friday and is nearly idle during other periods of the year. Which cloud characteristic allows the infrastructure to automatically grow during the peak and shrink afterward, paying only for what was consumed?",
    options: [
      "High Availability",
      "Fault Tolerance",
      "Elasticity",
      "Disaster Recovery"
    ],
    correctAnswer: 2,
    explanation: {
      intro: "This question differentiates related but distinct concepts: availability, scalability, elasticity, and fault tolerance.",
      papoReto: "Scalability is the ABILITY to grow. Elasticity is growing AND SHRINKING automatically as demand changes in real time. Black Friday = pure elasticity, because after the peak it shrinks back on its own.",
      respostaCerta: "Elasticity — automatic adjustment both up and down according to demand.",
      puloDoGato: "Scalability ≠ Elasticity. Scalability is the capacity to expand (manual or auto). Elasticity is the AUTOMATIC adjustment in both directions. If the question says 'grows and shrinks automatically', it's elasticity.",
      cascasDeBanana: [
        "High Availability: ensures the service stays up (uptime), not that it grows with demand.",
        "Fault Tolerance: continuity even with a broken component — doesn't deal with load peaks.",
        "Disaster Recovery: a plan to resume operations after a catastrophic event, a continuity concept."
      ],
      dicaOuro: "Peak that goes up AND down automatically = Elasticity. System stays up = High Availability."
    },
    difficulty: "iniciante",
    domain: "Cloud Concepts"
  },
  {
    id: "az900_q3_cloud",
    text: "A startup wants to migrate to the cloud but needs full control over the operating system, install custom drivers, and manually manage patches. Which cloud service model offers this level of control?",
    options: [
      "SaaS (Software as a Service)",
      "PaaS (Platform as a Service)",
      "IaaS (Infrastructure as a Service)",
      "FaaS (Function as a Service)"
    ],
    correctAnswer: 2,
    explanation: {
      intro: "Classic question about the shared responsibility model and the three pillars IaaS/PaaS/SaaS.",
      papoReto: "The more control you want, the 'lower' you go in the stack. IaaS gives you the virtual machine and you manage from the OS up. PaaS gives you a ready platform, you just run the app. SaaS is the entire product ready (Office 365).",
      respostaCerta: "IaaS — you manage OS, drivers, patches, runtime, data, and apps. Microsoft only handles the physical layer.",
      puloDoGato: "Memorize the rule: IaaS = you manage the OS. PaaS = Microsoft manages the OS, you manage the code. SaaS = you just USE the ready software.",
      cascasDeBanana: [
        "SaaS: you have no access to the OS; you only use a ready app (Outlook, Teams).",
        "PaaS: the platform comes with a managed OS — you don't install drivers or apply patches.",
        "FaaS (serverless): you only write the function; you don't even see a server."
      ],
      dicaOuro: "Full OS control + patch responsibility = IaaS. No doubt."
    },
    difficulty: "iniciante",
    domain: "Cloud Concepts"
  },
  {
    id: "az900_q4_cloud",
    text: "A public agency needs to store sensitive citizen data under strict regulation (LGPD/GDPR), but also wants to leverage the burst capacity of the public cloud to process non-sensitive reports. Which deployment model meets this scenario?",
    options: [
      "Public Cloud",
      "Private Cloud",
      "Hybrid Cloud",
      "Community Cloud"
    ],
    correctAnswer: 2,
    explanation: {
      intro: "Differentiation between the three deployment models: public, private, and hybrid.",
      papoReto: "When the question talks about 'sensitive stays on-premises + burst loads in the public cloud', it's describing a combination of both: hybrid. You get the best of both worlds.",
      respostaCerta: "Hybrid Cloud — combines on-premises infrastructure (or private cloud) with public cloud.",
      puloDoGato: "Hybrid = public + private. Azure Arc, Azure Stack, and Site-to-Site VPN are technologies that make hybrid possible. If you see 'on-premises + Azure', it's hybrid.",
      cascasDeBanana: [
        "Public: everything in the provider's cloud — doesn't meet the requirement to keep sensitive data isolated.",
        "Private: everything on-premises or in a dedicated datacenter — doesn't leverage public cloud burst.",
        "Community: shared among organizations with similar requirements — the concept exists but is not the answer."
      ],
      dicaOuro: "On-premises + Azure in the same design = Hybrid Cloud."
    },
    difficulty: "iniciante",
    domain: "Cloud Concepts"
  },
  {
    id: "az900_q5_cloud",
    text: "Who is responsible for the PHYSICAL security of the datacenter (access control, cameras, generators) in the cloud shared responsibility model?",
    options: [
      "Always the customer",
      "Always the cloud provider (Microsoft, in the case of Azure)",
      "Depends on the model: customer in IaaS, provider in PaaS/SaaS",
      "Shared equally between customer and provider across all models"
    ],
    correctAnswer: 1,
    explanation: {
      intro: "Shared responsibility model: what changes and what does NOT change between IaaS, PaaS, and SaaS.",
      papoReto: "The physical layer of the datacenter (building, power, cooling, physical security) is ALWAYS Microsoft's. It doesn't matter if you used IaaS, PaaS, or SaaS — you never set foot in their datacenter.",
      respostaCerta: "Always the cloud provider (Microsoft).",
      puloDoGato: "Physical layer (datacenter, hardware, physical network) = ALWAYS provider. Information/data/accounts layer = ALWAYS customer. What varies (OS, middleware, apps) depends on the model.",
      cascasDeBanana: [
        "Always the customer: the customer never has physical access to the Microsoft datacenter.",
        "Depends on the model: for the PHYSICAL layer it doesn't — it's always Microsoft.",
        "Shared equally: the shared responsibility concept exists, but for the PHYSICAL LAYER it's 100% provider."
      ],
      dicaOuro: "Physical security and hardware = Microsoft, always. Data, identities, and accounts = you, always."
    },
    difficulty: "iniciante",
    domain: "Cloud Concepts"
  },
  {
    id: "az900_q6_cloud",
    text: "Which cloud benefit ensures that your application will continue responding to users even if an individual server goes offline due to a hardware failure?",
    options: [
      "Scalability",
      "Elasticity",
      "High Availability",
      "Agility"
    ],
    correctAnswer: 2,
    explanation: {
      intro: "Distinction between cloud benefits that seem similar but solve different problems.",
      papoReto: "High Availability is keeping the system UP even when something breaks. It's measured in 9's (99.9%, 99.99%). Azure uses Availability Zones and Availability Sets to deliver this.",
      respostaCerta: "High Availability — system remains accessible despite isolated failures.",
      puloDoGato: "High Availability = SLA (99.9%, 99.99%, etc.). If the question mentions 'SLA' or 'uptime', think HA.",
      cascasDeBanana: [
        "Scalability: grows with demand, doesn't deal with failures.",
        "Elasticity: grows and shrinks automatically, focused on load.",
        "Agility: speed to deploy new resources, not related to uptime."
      ],
      dicaOuro: "Server goes down and app keeps running = High Availability."
    },
    difficulty: "iniciante",
    domain: "Cloud Concepts"
  },
  {
    id: "az900_q7_cloud",
    text: "In a cloud solution, who is ALWAYS responsible for data, user accounts, and identity management, regardless of the service model (IaaS, PaaS, or SaaS)?",
    options: [
      "The cloud provider (Microsoft)",
      "The customer",
      "Shared proportionally",
      "The third-party software vendor"
    ],
    correctAnswer: 1,
    explanation: {
      intro: "Another angle of the shared responsibility model.",
      papoReto: "Data, accounts, and identity are ALWAYS the customer's. The model doesn't matter. If your user leaks a password or sensitive data is exposed due to misconfiguration, the problem is yours, not Microsoft's.",
      respostaCerta: "The customer — always responsible for data, accounts, and identity management.",
      puloDoGato: "There are 3 areas that NEVER change hands: (1) physical layer is always Microsoft; (2) data/accounts/identity are always customer; (3) the middle is shared according to the model.",
      cascasDeBanana: [
        "Microsoft: they manage the platform, not your users.",
        "Shared: identity is not shared — it's 100% customer.",
        "Third party: the legal responsibility for data lies with the customer who contracted the service."
      ],
      dicaOuro: "Data and identities = ALWAYS the customer's. In any cloud model."
    },
    difficulty: "iniciante",
    domain: "Cloud Concepts"
  },

  // ============================================================
  // BLOCK 2 — INTERMEDIATE — Azure Architecture and Services (7)
  // ============================================================
  {
    id: "az900_q8_arch",
    text: "A global company needs to deploy an application that tolerates the failure of an entire datacenter WITHIN the same Azure region, with no perceptible additional latency. Which Azure resource would you use?",
    options: [
      "Multiple geographically distant regions (Geo-Redundancy)",
      "Availability Zones",
      "Availability Sets",
      "Azure Site Recovery"
    ],
    correctAnswer: 1,
    explanation: {
      intro: "Azure's geographic hierarchy: Geographies > Regions > Availability Zones > Datacenters.",
      papoReto: "Availability Zones are PHYSICAL datacenters separated within the SAME region. Each region has 3 zones. If an entire datacenter catches fire, your VM in another zone keeps running, with very low latency (connected by dedicated fiber).",
      respostaCerta: "Availability Zones — protection against datacenter failure within the same region, with minimal latency.",
      puloDoGato: "Availability Set = protection within ONE datacenter (rack failure). Availability Zone = protection between DATACENTERS in the same region. Region Pairs = protection between REGIONS (regional disaster).",
      cascasDeBanana: [
        "Multiple regions: works, but adds significant latency and is overkill if the requirement is only to survive ONE datacenter going down.",
        "Availability Sets: protect against rack/host failure within the SAME datacenter, not against an entire building going down.",
        "Azure Site Recovery: a DR service (replication to another region), not for local HA."
      ],
      dicaOuro: "Datacenter failure in the same region = Availability Zones. Regional failure = Region Pairs."
    },
    difficulty: "intermediario",
    domain: "Azure Architecture and Services"
  },
  {
    id: "az900_q9_arch",
    text: "An administrator needs to create 30 VMs with identical configuration for a big data cluster, ensuring they are deployed consistently and can be destroyed/recreated via code. Which native Azure tool should they use?",
    options: [
      "Azure Portal (manual creation one by one)",
      "Azure Resource Manager (ARM) Templates",
      "Azure Marketplace",
      "Azure Advisor"
    ],
    correctAnswer: 1,
    explanation: {
      intro: "ARM Templates and the concept of Infrastructure as Code (IaC).",
      papoReto: "ARM Template is a JSON file that describes the ENTIRE infrastructure. You run the template and Azure creates resources exactly as specified, idempotent and reproducible. It's the foundation of IaC in Azure.",
      respostaCerta: "Azure Resource Manager (ARM) Templates — declarative, idempotent, and versionable.",
      puloDoGato: "ARM is the MANAGEMENT LAYER for ALL resources in Azure. Even when you click in the portal, ARM is running behind the scenes. ARM Templates let you automate this.",
      cascasDeBanana: [
        "Portal: manual creation is not reproducible or versioned.",
        "Marketplace: catalog of third-party solutions, not a mass provisioning tool.",
        "Azure Advisor: provides optimization recommendations (cost, security), doesn't provision resources."
      ],
      dicaOuro: "Reproducible and versioned provisioning in Azure = ARM Templates (or Bicep, which compiles to ARM)."
    },
    difficulty: "intermediario",
    domain: "Azure Architecture and Services"
  },
  {
    id: "az900_q10_arch",
    text: "You need to securely connect your on-premises network to Azure using the encrypted public internet. Which Azure resource provides this tunnel?",
    options: [
      "Azure ExpressRoute",
      "VPN Gateway (Site-to-Site)",
      "Azure Front Door",
      "Azure Bastion"
    ],
    correctAnswer: 1,
    explanation: {
      intro: "Azure hybrid connectivity options.",
      papoReto: "VPN Gateway opens an encrypted tunnel over the internet. ExpressRoute is a DEDICATED fiber connection (doesn't use the public internet). The question asked for 'encrypted public internet' — it can only be VPN Gateway.",
      respostaCerta: "VPN Gateway (Site-to-Site) — IPsec encrypted tunnel over the public internet.",
      puloDoGato: "If the question mentions 'public internet', 'encrypted' or 'IPsec', it's VPN Gateway. If it mentions 'dedicated fiber', 'not going through the internet', 'guaranteed low latency' or 'network SLA', it's ExpressRoute.",
      cascasDeBanana: [
        "ExpressRoute: dedicated connection, does NOT use the public internet — contradicts the requirement.",
        "Front Door: global web application load balancer (layer 7), not a private network connection.",
        "Bastion: provides secure RDP/SSH access to VMs without exposing a public IP — not a site-to-site connection."
      ],
      dicaOuro: "Internet + encryption = VPN Gateway. Dedicated fiber = ExpressRoute."
    },
    difficulty: "intermediario",
    domain: "Azure Architecture and Services"
  },
  {
    id: "az900_q11_arch",
    text: "A team wants to host a REST API that automatically scales with the number of requests, without worrying about VMs or OS. Billing must be per consumption (per execution). Which Azure service fits best?",
    options: [
      "Azure Virtual Machines",
      "Azure App Service",
      "Azure Functions",
      "Azure Kubernetes Service (AKS)"
    ],
    correctAnswer: 2,
    explanation: {
      intro: "Comparison between compute models: IaaS, PaaS, and serverless.",
      papoReto: "Azure Functions is pure serverless. You write the function, it runs when called and you pay per execution (consumption). No VM, no OS visible. It's the canonical example of FaaS in Azure.",
      respostaCerta: "Azure Functions — event-driven execution, consumption billing, automatic scaling.",
      puloDoGato: "Strong hints for Functions in the exam: 'pay-per-execution', 'serverless', 'event-driven', 'no server'. App Service also scales but charges per plan (not per execution).",
      cascasDeBanana: [
        "VMs: IaaS — you manage everything, pay per hour running. Opposite of serverless.",
        "App Service: PaaS for web apps, scales but billed per plan (not per execution).",
        "AKS: container orchestration, requires managing nodes and pods."
      ],
      dicaOuro: "Per-execution billing and zero visible server = Azure Functions."
    },
    difficulty: "intermediario",
    domain: "Azure Architecture and Services"
  },
  {
    id: "az900_q12_arch",
    text: "A company needs to store 50TB of medical images that are rarely accessed, but must be available when requested and have the lowest possible storage cost. Which Azure Blob Storage tier is most appropriate?",
    options: [
      "Hot Tier",
      "Cool Tier",
      "Archive Tier",
      "Premium Tier (SSD)"
    ],
    correctAnswer: 2,
    explanation: {
      intro: "Azure Blob Storage access tiers and their cost/latency relationships.",
      papoReto: "Archive is the cheapest to store but has high retrieval latency (hours) — exactly what works for rarely accessed medical images. Cool is intermediate. Hot is expensive to store but cheap to read.",
      respostaCerta: "Archive Tier — lowest storage cost, ideal for rarely accessed data.",
      puloDoGato: "Memorize the trade-off: Hot = expensive to store, cheap to read. Cool = medium. Archive = very cheap to store, more expensive/slow to read. The right tier is defined by the access pattern.",
      cascasDeBanana: [
        "Hot: best for frequently accessed data — expensive to store 50TB.",
        "Cool: occasionally accessed data (1x per month). Acceptable, but Archive is cheaper.",
        "Premium SSD: high performance (low latency), very expensive — total overkill."
      ],
      dicaOuro: "Rarely accessed + lowest cost = Archive. Accessed all the time = Hot."
    },
    difficulty: "intermediario",
    domain: "Azure Architecture and Services"
  },
  {
    id: "az900_q13_arch",
    text: "Your web application runs on three VMs and you need to distribute incoming HTTP requests among them in a balanced way at layer 4 (TCP/UDP). Which Azure service solves this?",
    options: [
      "Azure Application Gateway",
      "Azure Load Balancer",
      "Azure Traffic Manager",
      "Azure Front Door"
    ],
    correctAnswer: 1,
    explanation: {
      intro: "The four Azure balancing services operate at different layers of the OSI model.",
      papoReto: "Azure Load Balancer works at layer 4 (TCP/UDP). Application Gateway is layer 7 (HTTP/HTTPS, with WAF). Traffic Manager is DNS-based (global). Front Door is global layer 7. The question asked for layer 4 — Load Balancer.",
      respostaCerta: "Azure Load Balancer — layer 4 (TCP/UDP) distribution, regional.",
      puloDoGato: "Layer 4 = Load Balancer. Layer 7 + regional = Application Gateway. Layer 7 + global = Front Door. Global DNS = Traffic Manager. Memorize this map.",
      cascasDeBanana: [
        "Application Gateway: works at layer 7 (HTTP), with WAF and URL-based routing. Not layer 4.",
        "Traffic Manager: DNS-based balancing (global), doesn't distribute packets at layer 4.",
        "Front Door: global layer 7 balancing with CDN — not layer 4."
      ],
      dicaOuro: "TCP/UDP layer 4 regional = Azure Load Balancer."
    },
    difficulty: "intermediario",
    domain: "Azure Architecture and Services"
  },
  {
    id: "az900_q14_arch",
    text: "A company wants to run a .NET application in containers on Azure, but doesn't want to manage Kubernetes infrastructure or nodes. They want to deliver the container and have Azure handle the orchestrator. Which service fits?",
    options: [
      "Azure Kubernetes Service (AKS)",
      "Azure Container Instances (ACI)",
      "Azure Virtual Machines with Docker",
      "Azure Service Fabric"
    ],
    correctAnswer: 1,
    explanation: {
      intro: "Differences between AKS (managed) and ACI (serverless for containers).",
      papoReto: "ACI is the simplest way to run a container in Azure: you push the image, Azure runs it. No nodes, no cluster, no Kubernetes. AKS is powerful but you still manage the cluster nodes.",
      respostaCerta: "Azure Container Instances (ACI) — serverless for containers, no orchestrator to manage.",
      puloDoGato: "If the question says 'without managing Kubernetes' or 'a simple container', it's ACI. If it mentions 'cluster', 'complex orchestration', 'pod auto-scaling', it's AKS.",
      cascasDeBanana: [
        "AKS: you need to manage the nodes (even with a managed control plane), contradicts the requirement.",
        "VM with Docker: pure IaaS, you manage everything.",
        "Service Fabric: Microsoft's orchestrator (AKS predecessor), more complex."
      ],
      dicaOuro: "Single container without orchestrator = ACI. Cluster with orchestration = AKS."
    },
    difficulty: "intermediario",
    domain: "Azure Architecture and Services"
  },

  // ============================================================
  // BLOCK 3 — ADVANCED — Azure Management and Governance (6)
  // ============================================================
  {
    id: "az900_q15_gov",
    text: "A company wants to enforce that all resources created in a subscription must have a 'CostCenter' tag. Resources without this tag should not even be created. Which Azure governance tool meets this requirement?",
    options: [
      "Azure RBAC",
      "Azure Policy",
      "Azure Blueprints",
      "Microsoft Defender for Cloud"
    ],
    correctAnswer: 1,
    explanation: {
      intro: "Practical difference between RBAC (who can do) and Policy (what can be done).",
      papoReto: "RBAC controls WHO can act (permissions). Policy controls WHAT can be done (technical rules about resources). Requiring a mandatory tag is a technical rule = Azure Policy with 'Deny' effect.",
      respostaCerta: "Azure Policy — enforces technical rules (e.g., mandatory tag) and blocks creation if violated.",
      puloDoGato: "RBAC = identity/permission. Policy = compliance/technical rules. Blueprints = package (Policy + RBAC + ARM template + Resource Groups) replicable. Remember this.",
      cascasDeBanana: [
        "RBAC: controls who can create a VM, not whether it must have a tag.",
        "Blueprints: packages policies + RBAC + ARM templates — uses Policy underneath, but the direct tool for the rule is Policy.",
        "Defender for Cloud: focused on security posture, not tag compliance."
      ],
      dicaOuro: "Mandatory rule about the resource (tag, SKU, region) = Azure Policy."
    },
    difficulty: "avancado",
    domain: "Azure Management and Governance"
  },
  {
    id: "az900_q16_gov",
    text: "You need to give a finance analyst permission to VIEW costs and billing reports in a subscription, without allowing them to create or modify any resource. Which built-in RBAC role is most appropriate and follows the principle of least privilege?",
    options: [
      "Owner",
      "Contributor",
      "Reader",
      "Billing Reader"
    ],
    correctAnswer: 3,
    explanation: {
      intro: "Principle of least privilege applied to Azure built-in RBAC roles.",
      papoReto: "There is a SPECIFIC role for this scenario: Billing Reader. It allows VIEWING billing and costs without giving access to resources themselves. Reader would also work, but it provides visibility into ALL resources, which violates least privilege.",
      respostaCerta: "Billing Reader — access only to billing, without viewing resources.",
      puloDoGato: "For each least-privilege scenario, there is a specific role: Billing Reader, Reader, Cost Management Reader, Security Reader. Memorize the 'Reader' roles that exist.",
      cascasDeBanana: [
        "Owner: full control + manages access — massive overkill.",
        "Contributor: can create and modify everything except grant access — violates the requirement.",
        "Reader: sees all resources, broader than necessary — doesn't respect least privilege."
      ],
      dicaOuro: "Least possible privilege for a specific task = find the most niche 'Reader' role available."
    },
    difficulty: "avancado",
    domain: "Azure Management and Governance"
  },
  {
    id: "az900_q17_gov",
    text: "A DevOps team was tasked with creating 50 identical development environments with tag policies, role assignments, and ARM templates already applied, repeatably, across different subscriptions. Which Azure resource was specifically designed to package all of this in a reusable way?",
    options: [
      "Azure Policy",
      "Azure Blueprints",
      "Management Groups",
      "Isolated Azure Resource Manager Templates"
    ],
    correctAnswer: 1,
    explanation: {
      intro: "Difference between pure ARM Templates and Blueprints (which package multiple artifacts).",
      papoReto: "Blueprint is the 'governance kit': it joins Policy + RBAC + ARM template + Resource Groups in a single package that you assign to multiple subscriptions. When you need to replicate the SAME 'complete package' multiple times, Blueprint is the way.",
      respostaCerta: "Azure Blueprints — replicable package of Policies, RBAC, ARM Templates, and Resource Groups.",
      puloDoGato: "ARM Template alone creates resources. Blueprint orchestrates ARM + Policy + RBAC together. When the question mentions 'multiple governance artifacts applied together', it's Blueprint.",
      cascasDeBanana: [
        "Policy: defines ONE rule, doesn't package multiple artifacts.",
        "Management Groups: subscription hierarchy, not a package.",
        "Isolated ARM Templates: creates resources but doesn't include RBAC or Policy in a single package."
      ],
      dicaOuro: "Replicable governance package (Policy + RBAC + ARM) = Azure Blueprints."
    },
    difficulty: "avancado",
    domain: "Azure Management and Governance"
  },
  {
    id: "az900_q18_gov",
    text: "An Azure customer is seeing their monthly bill rising unexpectedly. They want to (1) understand current consumption, (2) set an alert when spending reaches 80% of the budget, and (3) receive recommendations to reduce costs. Which services, IN THIS ORDER, meet each need?",
    options: [
      "Azure Monitor / Azure Policy / Azure Advisor",
      "Azure Cost Management / Azure Cost Management (Budgets) / Azure Advisor",
      "Azure Advisor / Azure Monitor / Azure Cost Management",
      "Microsoft Defender / Azure Cost Management / Azure Advisor"
    ],
    correctAnswer: 1,
    explanation: {
      intro: "Set of Azure tools related to costs.",
      papoReto: "Cost Management shows consumption. Budgets (within Cost Management) configure budget alerts. Azure Advisor generates recommendations (cost, security, performance, reliability).",
      respostaCerta: "Azure Cost Management (consumption) → Budgets (80% alert) → Azure Advisor (recommendations).",
      puloDoGato: "Memorize the 5 Azure Advisor categories: Cost, Security, Reliability, Operational Excellence, and Performance. Cost is one of them.",
      cascasDeBanana: [
        "Azure Monitor: focused on operational metrics and logs, not financial cost.",
        "Azure Policy: technical compliance rules, not cost reporting.",
        "Defender for Cloud: focused on security posture."
      ],
      dicaOuro: "Azure costs = Cost Management + Budgets + Advisor."
    },
    difficulty: "avancado",
    domain: "Azure Management and Governance"
  },
  {
    id: "az900_q19_gov",
    text: "A multinational has 80 Azure subscriptions and wants to apply a single 'allow only European regions' policy across ALL of them, centrally and with inheritance. Which Azure hierarchical organization resource solves this?",
    options: [
      "Resource Groups",
      "Management Groups",
      "Azure Policy applied manually to each subscription",
      "Subscription tags"
    ],
    correctAnswer: 1,
    explanation: {
      intro: "Azure hierarchy: Management Groups > Subscriptions > Resource Groups > Resources.",
      papoReto: "Management Groups sit ABOVE subscriptions. You apply Policy/RBAC there and everything inherits downward. For 80 subscriptions, you create a root Management Group, assign the Policy there, and done.",
      respostaCerta: "Management Groups — central assignment and automatic inheritance to all child subscriptions.",
      puloDoGato: "Hierarchy: Tenant > Management Groups > Subscriptions > Resource Groups > Resources. When the question mentions 'multiple subscriptions', the answer almost always involves Management Groups.",
      cascasDeBanana: [
        "Resource Groups: located WITHIN a subscription, not above.",
        "Policy manually per subscription: works, but is not central or inherited — fails the governance at scale requirement.",
        "Tags: only label, don't enforce rules."
      ],
      dicaOuro: "Governance at scale over N subscriptions = Management Groups."
    },
    difficulty: "avancado",
    domain: "Azure Management and Governance"
  },
  {
    id: "az900_q20_gov",
    text: "You need to ensure that NOBODY, not even an Owner, can accidentally delete a production Resource Group. Which Azure resource applies this protection?",
    options: [
      "Azure Policy with Deny effect",
      "Resource Lock (CanNotDelete)",
      "RBAC removing the delete permission",
      "Tags with the 'production' label"
    ],
    correctAnswer: 1,
    explanation: {
      intro: "Resource Locks and their role in protecting against accidental destructive actions.",
      papoReto: "Resource Lock 'CanNotDelete' blocks DELETE on the resource, INCLUDING for Owners. There's also 'ReadOnly' which blocks everything that modifies. It's the definitive way to protect production against fat-finger mistakes.",
      respostaCerta: "Resource Lock (CanNotDelete) — blocks deletion even for Owners.",
      puloDoGato: "Two types of Lock: CanNotDelete (prohibits DELETE, allows changes) and ReadOnly (prohibits DELETE and CHANGES). To undo the lock, you need to remove it first — which is a separate and auditable action.",
      cascasDeBanana: [
        "Policy Deny: can block creation of non-compliant resources, but it's not the standard mechanism to protect against deletion of an existing resource.",
        "RBAC: you can remove delete permission from users, but Owners have everything and could still delete.",
        "Tags: just labels, don't block any action."
      ],
      dicaOuro: "Protection against accidental deletion (even from Owner) = Resource Lock."
    },
    difficulty: "avancado",
    domain: "Azure Management and Governance"
  }
];


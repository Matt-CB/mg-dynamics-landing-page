
export type Language = 'en' | 'es' | 'pt' | 'zh' | 'zh-TW' | 'ko' | 'de' | 'ja' | 'fr' | 'id' | 'th' | 'fil' | 'he' | 'it' | 'ar';

export interface Translations {
  header: {
    holdingCompany: string;
    home: string;
    ecosystem: string;
    impact: string;
    network: string;
    contact: string;
    est: string;
  };
  hero: {
    precision: string;
    vision: string;
    execution: string;
    scroll: string;
  };
  expansion: {
    title: string;
    subtitle: string;
  };
  philosophy: {
    title: string;
    whoWeAre: string;
    heading1: string;
    heading2: string;
    para1: string;
    para2: string;
    para3: string;
    para4: string;
    para5: string;
    para6: string;
  };
  subsidiaries: {
    count: string;
    network: string;
    capital: string;
    growth: string;
    companyNames: {
      kids: string;
      realEstate: string;
      research: string;
      education: string;
      foundation: string;
      lifeSciences: string;
    };
  };
  industries: {
    title: string;
    subtitle: string;
    heading: string;
    software: { name: string; desc: string };
    robotics: { name: string; desc: string };
    gaming: { name: string; desc: string };
    realEstate: { name: string; desc: string };
    research: { name: string; desc: string };
  };
  values: {
    title: string;
    subtitle: string;
    focus: { title: string; desc: string };
    partnership: { title: string; desc: string };
    growth: { title: string; desc: string };
    integrity: { title: string; desc: string };
  };
  impact: {
    companies: string;
    industries: string;
    countries: string;
    teamMembers: string;
    possibilities: string;
  };
  presence: {
    title: string;
    subtitle: string;
    perspective: string;
    desc: string;
    regions: string[];
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
    copied: string;
  };
  footer: {
    desc: string;
    headquarters: string;
    links: string;
    legal: string;
    privacy: string;
    terms: string;
    initiatives: string;
    subsidiaries: string;
    research: string;
    realEstate: string;
    ventures: string;
    corporate: string;
    aboutUs: string;
    leadership: string;
    careers: string;
    press: string;
    contactText: string;
    phone: string;
    rights: string;
    service: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    header: {
      holdingCompany: "A Holding Company",
      home: "Home",
      ecosystem: "Ecosystem",
      impact: "Impact",
      network: "Network",
      contact: "Contact",
      est: "EST. 2026"
    },
    hero: {
      precision: "PRECISION.",
      vision: "VISION.",
      execution: "EXECUTION.",
      scroll: "Scroll to explore"
    },
    expansion: {
      title: "A holding company building the future.",
      subtitle: "We don't follow industry trends; we architect the infrastructure that makes them possible. Driven by capital, intelligence, and execution."
    },
    philosophy: {
      title: "THE CONVERGENCE POINT",
      whoWeAre: "Who We Are",
      heading1: "We don't just invest in companies.",
      heading2: "We architect ecosystems.",
      para1: "M&G is a global holding company engineered to build, acquire, and scale the systems that define the next era of industry. Headquartered in the United States and operating across international markets, we do not position ourselves as a traditional conglomerate.",
      para2: "We operate as a structured ecosystem of companies, designed to accelerate innovation across technology, robotics, software, real estate, entertainment, and frontier research.",
      para3: "We believe industries are no longer separate, they are converging. And M&G exists to operate at that convergence point.",
      para4: "Each company within M&G functions independently, but is amplified by shared intelligence, capital efficiency, and a unified long-term vision. We are not building companies in isolation. We are building a network of interconnected capabilities designed to compound over time.",
      para5: "Beyond building and scaling our own ecosystem, we actively invest in and search for new ventures, emerging founders, and early-stage entrepreneurs with the potential to shape the future. We exist to give new businesses and new entrepreneurs the opportunity to scale, grow, and compete in this new market era, where speed, intelligence, and execution define success.",
      para6: "We believe the next generation of global companies will not be discovered in traditional systems, but accelerated through aligned capital, infrastructure, and strategic support. M&G positions itself as that catalyst."
    },
    subsidiaries: {
      count: "20+ Subsidiaries",
      network: "GLOBAL NETWORK",
      capital: "ALIGNED CAPITAL",
      growth: "STRATEGIC GROWTH",
      companyNames: {
        kids: "M&G Kids",
        realEstate: "M&G Real Estate",
        research: "M&G Research",
        education: "M&G Education",
        foundation: "M&G Foundation",
        lifeSciences: "M&G Life Sciences Division"
      }
    },
    industries: {
      title: "CORE ECOSYSTEMS",
      subtitle: "We operate across",
      heading: "multiple industries, driven by innovation.",
      software: { name: 'Software', desc: 'Building scalable digital solutions.' },
      robotics: { name: 'Robotics', desc: 'Engineering intelligent systems that move the world forward.' },
      gaming: { name: 'Video Games', desc: 'Creating immersive experiences that entertain and connect.' },
      realEstate: { name: 'Real Estate', desc: 'Developing spaces that inspire and create value.' },
      research: { name: 'Research', desc: 'Investing in ideas that shape the future.' }
    },
    values: {
      title: "Connecting vision with execution.",
      subtitle: "Empowering the next generation of global leaders.",
      focus: { title: "Focus", desc: "Core pillar of our organizational foundation." },
      partnership: { title: "Partnership", desc: "Core pillar of our organizational foundation." },
      growth: { title: "Growth", desc: "Core pillar of our organizational foundation." },
      integrity: { title: "Integrity", desc: "Core pillar of our organizational foundation." }
    },
    impact: {
      companies: "COMPANIES",
      industries: "INDUSTRIES",
      countries: "COUNTRIES",
      teamMembers: "TEAM MEMBERS",
      possibilities: "POSSIBILITIES"
    },
    presence: {
      title: "OPERATIONAL REACH",
      subtitle: "Engineered in the U.S. / Scaled Globally.",
      perspective: "Global Perspective.",
      desc: "Our reach spans across technological hubs, ensuring we are always at the heart of innovation.",
      regions: ["NORTH AMERICA", "EUROPE", "ASIA PACIFIC", "MIDDLE EAST"]
    },
    cta: {
      title: "Architect the future with M&G.",
      subtitle: "Partner With Us",
      button: "Contact Us",
      copied: "Email Copied!"
    },
    footer: {
      desc: "A global holding company engineered to build, acquire, and scale the systems that define the next era of industry.",
      headquarters: "Headquarters",
      links: "Quick Links",
      legal: "LEGAL",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      initiatives: "Initiatives",
      subsidiaries: "Subsidiaries",
      research: "Frontier Research",
      realEstate: "Real Estate",
      ventures: "Ventures",
      corporate: "Corporate",
      aboutUs: "About Us",
      leadership: "Leadership",
      careers: "Careers",
      press: "Press",
      contactText: "Contact",
      phone: "+1 (302) 201-2840",
      rights: "All rights reserved.",
      service: "Terms of Service"
    }
  },
  es: {
    header: {
      holdingCompany: "Una Compañía Holding",
      home: "Inicio",
      ecosystem: "Ecosistema",
      impact: "Impacto",
      network: "Red",
      contact: "Contacto",
      est: "EST. 2026"
    },
    hero: {
      precision: "PRECISIÓN.",
      vision: "VISIÓN.",
      execution: "EJECUCIÓN.",
      scroll: "Desliza para explorar"
    },
    expansion: {
      title: "Un holding que construye el futuro.",
      subtitle: "No seguimos tendencias de la industria; arquitecturamos la infraestructura que las hace posibles. Impulsados por capital, inteligencia y ejecución."
    },
    philosophy: {
      title: "EL PUNTO DE CONVERGENCIA",
      whoWeAre: "Quiénes Somos",
      heading1: "No solo invertimos en empresas.",
      heading2: "Arquitecturamos ecosistemas.",
      para1: "M&G es una compañía holding global diseñada para construir, adquirir y escalar los sistemas que definen la próxima era de la industria. Con sede en los Estados Unidos y operando en mercados internacionales, no nos posicionamos como un conglomerado tradicional.",
      para2: "Operamos como un ecosistema estructurado de empresas, diseñado para acelerar la innovación en tecnología, robótica, software, bienes raíces, entretenimiento e investigación de frontera.",
      para3: "Creemos que las industrias ya no están separadas, están convergiendo. Y M&G existe para operar en ese punto de convergencia.",
      para4: "Cada empresa dentro de M&G funciona de forma independiente, pero se amplifica mediante inteligencia compartida, eficiencia de capital y una visión unificada a largo plazo. No estamos construyendo empresas de forma aislada. Estamos construyendo una red de capacidades interconectadas diseñadas para capitalizarse con el tiempo.",
      para5: "Más allá de construir y escalar nuestro propio ecosistema, invertimos activamente y buscamos nuevos emprendimientos, fundadores emergentes y emprendedores en etapa inicial con el potencial de dar forma al futuro. Existimos para dar a las nuevas empresas y a los nuevos emprendedores la oportunidad de escalar, crecer y competir en esta nueva era del mercado, donde la velocidad, la inteligencia y la ejecución definen el éxito.",
      para6: "Creemos que la próxima generación de empresas globales no se descubrirá en los sistemas tradicionales, sino que se acelerará a través de capital alineado, infraestructura y apoyo estratégico. M&G se posiciona como ese catalizador."
    },
    subsidiaries: {
      count: "20+ Subsidiarias",
      network: "RED GLOBAL",
      capital: "CAPITAL ALINEADO",
      growth: "CRECIMIENTO ESTRATÉGICO",
      companyNames: {
        kids: "M&G Niños",
        realEstate: "M&G Bienes Raíces",
        research: "M&G Investigación",
        education: "M&G Educación",
        foundation: "M&G Fundación",
        lifeSciences: "División de Ciencias de la Vida M&G"
      }
    },
    industries: {
      title: "ECOSISTEMAS CENTRALES",
      subtitle: "Operamos en",
      heading: "múltiples industrias, impulsadas por la innovación.",
      software: { name: 'Software', desc: 'Construyendo soluciones digitales escalables.' },
      robotics: { name: 'Robótica', desc: 'Ingeniería de sistemas inteligentes que mueven el mundo.' },
      gaming: { name: 'Videojuegos', desc: 'Creando experiencias inmersivas que entretienen y conectan.' },
      realEstate: { name: 'Bienes Raíces', desc: 'Desarrollando espacios que inspiran y crean valor.' },
      research: { name: 'Investigación', desc: 'Invirtiendo en ideas que dan forma al futuro.' }
    },
    values: {
      title: "Conectando visión con ejecución.",
      subtitle: "Empoderando a la próxima generación de líderes globales.",
      focus: { title: "Enfoque", desc: "Pilar fundamental de nuestra base organizacional." },
      partnership: { title: "Alianza", desc: "Pilar fundamental de nuestra base organizacional." },
      growth: { title: "Crecimiento", desc: "Pilar fundamental de nuestra base organizacional." },
      integrity: { title: "Integridad", desc: "Pilar fundamental de nuestra base organizacional." }
    },
    impact: {
      companies: "EMPRESAS",
      industries: "INDUSTRIAS",
      countries: "PAÍSES",
      teamMembers: "MIEMBROS DEL EQUIPO",
      possibilities: "POSIBILIDADES"
    },
    presence: {
      title: "ALCANCE OPERATIVO",
      subtitle: "Diseñado en EE.UU. / Escalado Globalmente.",
      perspective: "Perspectiva Global.",
      desc: "Nuestro alcance se extiende a través de centros tecnológicos, asegurando que siempre estemos en el corazón de la innovación.",
      regions: ["AMÉRICA DEL NORTE", "EUROPA", "ASIA PACÍFICO", "MEDIO ORIENTE"]
    },
    cta: {
      title: "Arquitectura el futuro con M&G.",
      subtitle: "Asóciate con nosotros",
      button: "Contáctanos",
      copied: "¡Email Copiado!"
    },
    footer: {
      desc: "Una compañía holding global diseñada para construir, adquirir y escalar los sistemas que definen la próxima era de la industria.",
      headquarters: "Sede Central",
      links: "Enlaces Rápidos",
      legal: "LEGAL",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
      initiatives: "Iniciativas",
      subsidiaries: "Subsidiarias",
      research: "Investigación de Frontera",
      realEstate: "Bienes Raíces",
      ventures: "Ventures",
      corporate: "Corporativo",
      aboutUs: "Sobre Nosotros",
      leadership: "Liderazgo",
      careers: "Carreras",
      press: "Prensa",
      contactText: "Contacto",
      phone: "+1 (302) 201-2840",
      rights: "Todos los derechos reservados.",
      service: "Términos de Servicio"
    }
  },
  pt: {
    header: {
      holdingCompany: "Uma Holding",
      home: "Início",
      ecosystem: "Ecossistema",
      impact: "Impacto",
      network: "Rede",
      contact: "Contato",
      est: "EST. 2026"
    },
    hero: {
      precision: "PRECISÃO.",
      vision: "VISÃO.",
      execution: "EXECUÇÃO.",
      scroll: "Role para explorar"
    },
    expansion: {
      title: "Uma holding construindo o futuro.",
      subtitle: "Não seguimos as tendências da indústria; arquitetamos a infraestrutura que as torna possíveis. Impulsionados por capital, inteligência e execução."
    },
    philosophy: {
      title: "O PONTO DE CONVERGÊNCIA",
      whoWeAre: "Quem Somos",
      heading1: "Não apenas investimos em empresas.",
      heading2: "Arquitetamos ecossistemas.",
      para1: "A M&G é uma holding global projetada para construir, adquirir e escalar os sistemas que definem a próxima era da indústria. Sediada nos Estados Unidos e operando em mercados internacionais, não nos posicionamos como um conglomerado tradicional.",
      para2: "Operamos como um ecossistema estruturado de empresas, projetado para acelerar a inovação em tecnologia, robótica, software, imobiliário, entretenimento e pesquisa de fronteira.",
      para3: "Acreditamos que as indústrias não são mais separadas, elas estão convergindo. E a M&G existe para operar nesse ponto de convergência.",
      para4: "Cada empresa dentro da M&G funciona de forma independente, mas é amplificada por inteligência compartilhada, eficiência de capital e uma visão unificada de longo prazo. Não estamos construindo empresas isoladamente. Estamos construindo uma rede de capacidades interconectadas projetada para se compor ao longo do tempo.",
      para5: "Além de construir e escalar o nosso próprio ecossistema, investimos ativamente e procuramos novos empreendimentos, fundadores emergentes e empreendedores em fase inicial com potencial para moldar o futuro. Existimos para dar a novos negócios e novos empreendedores a oportunidade de escalar, crescer e competir nesta nova era de mercado, onde a velocidade, a inteligência e a execução definem o sucesso.",
      para6: "Acreditamos que a próxima geração de empresas globais não será descoberta nos sistemas tradicionais, mas acelerada através de capital alinhado, infraestrutura e apoio estratégico. A M&G posiciona-se como esse catalisador."
    },
    subsidiaries: {
      count: "20+ Subsidiárias",
      network: "REDE GLOBAL",
      capital: "CAPITAL ALINHADO",
      growth: "CRESCIMENTO ESTRATÉGICO",
      companyNames: {
        kids: "M&G Crianças",
        realEstate: "M&G Imobiliário",
        research: "M&G Pesquisa",
        education: "M&G Educação",
        foundation: "M&G Fundação",
        lifeSciences: "Divisão de Ciências da Vida M&G"
      }
    },
    industries: {
      title: "ECOSSISTEMAS CENTRAIS",
      subtitle: "Operamos em",
      heading: "múltiplas indústrias, impulsionadas pela inovação.",
      software: { name: 'Software', desc: 'Construindo soluções digitais escaláveis.' },
      robotics: { name: 'Robótica', desc: 'Engenharia de sistemas inteligentes que movem o mundo.' },
      gaming: { name: 'Video Games', desc: 'Criando experiências imersivas que entretêm e conectam.' },
      realEstate: { name: 'Imobiliário', desc: 'Desenvolvendo espaços que inspiram e criam valor.' },
      research: { name: 'Pesquisa', desc: 'Investindo em ideias que moldam o futuro.' }
    },
    values: {
      title: "Conectando visão com execução.",
      subtitle: "Capacitando a próxima geração de líderes globais.",
      focus: { title: "Foco", desc: "Pilar central da nossa base organizacional." },
      partnership: { title: "Parceria", desc: "Pilar central da nossa base organizacional." },
      growth: { title: "Crescimento", desc: "Pilar central da nossa base organizacional." },
      integrity: { title: "Integridade", desc: "Pilar central da nossa base organizacional." }
    },
    impact: {
      companies: "EMPRESAS",
      industries: "INDÚSTRIAS",
      countries: "PAÍSES",
      teamMembers: "MEMBROS DA EQUIPE",
      possibilities: "POSSIBILIDADES"
    },
    presence: {
      title: "ALCANCE OPERACIONAL",
      subtitle: "Projetado nos EUA / Escalonado Globalmente.",
      perspective: "Perspectiva Global.",
      desc: "O nosso alcance estende-se por centros tecnológicos, garantindo que estamos sempre no centro da inovação.",
      regions: ["AMÉRICA DO NORTE", "EUROPA", "ÁSIA PACÍFICO", "ORIENTE MÉDIO"]
    },
    cta: {
      title: "Arquitetar o futuro com a M&G.",
      subtitle: "Seja nosso parceiro",
      button: "Contate-nos",
      copied: "E-mail copiado!"
    },
    footer: {
      desc: "Uma holding global projetada para construir, adquirir e escalar os sistemas que definem a próxima era da indústria.",
      headquarters: "Sede",
      links: "Links Rápidos",
      legal: "JURÍDICO",
      privacy: "Política de Privacidade",
      terms: "Termos de Serviço",
      initiatives: "Iniciativas",
      subsidiaries: "Subsidiárias",
      research: "Pesquisa de Fronteira",
      realEstate: "Imobiliário",
      ventures: "Ventures",
      corporate: "Corporativo",
      aboutUs: "Sobre Nós",
      leadership: "Liderança",
      careers: "Carreiras",
      press: "Imprensa",
      contactText: "Contato",
      phone: "+1 (302) 201-2840",
      rights: "Todos os direitos reservados.",
      service: "Termos de Serviço"
    }
  },
  zh: {
    header: {
      holdingCompany: "一家控股公司",
      home: "首页",
      ecosystem: "生态系统",
      impact: "影响力",
      network: "网络",
      contact: "联系我们",
      est: "成立于 2026 年"
    },
    hero: {
      precision: "精准。",
      vision: "远见。",
      execution: "执行。",
      scroll: "向下滚动探索"
    },
    expansion: {
      title: "一家构建未来的控股公司。",
      subtitle: "我们不追随行业趋势；我们架构使之成为可能的底层设施。由资本、智能和执行力驱动。"
    },
    philosophy: {
      title: "汇聚点",
      whoWeAre: "关于我们",
      heading1: "我们不仅仅投资公司。",
      heading2: "我们架构生态系统。",
      para1: "M&G 是一家全球控股公司，旨在构建、收购和扩展定义下一工业时代的系统。总部位于美国，业务遍及国际市场，我们不把自己定位为传统的企业集团。",
      para2: "我们作为一个结构化的公司生态系统运行，旨在加速技术、机器人、软件、房地产、娱乐和前沿研究领域的创新。",
      para3: "我们相信各行业不再是孤立的，它们正在融合。M&G 的存在就是在那个汇聚点上运作。",
      para4: "M&G 旗下的每家公司都独立运作，但通过共享智能、资本效率和统一的长期愿景得到增强。我们不是孤立地构建公司。我们正在构建一个互联互通的能力网络，旨在随着时间的推移产生复利效应。",
      para5: "除了构建和扩展我们自己的生态系统外，我们还积极投资并寻找具有塑造未来潜力的初创企业、新兴创始人和早期企业家。我们的存在是为了让新企业和新企业家在这个由速度、智能和执行力定义成功的新市场时代中获得扩展、增长和竞争的机会。",
      para6: "我们相信，下一代全球性公司不会在传统系统中被发现，而是通过对接资本、基础设施和战略支持来加速成长。M&G 将自己定位为这种催化剂。"
    },
    subsidiaries: {
      count: "20+ 子公司",
      network: "全球网络",
      capital: "对接资本",
      growth: "战略增长",
      companyNames: {
        kids: "M&G 儿童",
        realEstate: "M&G 房地产",
        research: "M&G 研究",
        education: "M&G 教育",
        foundation: "M&G 基金会",
        lifeSciences: "M&G 生命科学部门"
      }
    },
    industries: {
      title: "核心生态系统",
      subtitle: "我们的业务覆盖",
      heading: "多个行业，由创新驱动。",
      software: { name: '软件', desc: '构建可扩展的数字解决方案。' },
      robotics: { name: '机器人', desc: '设计能够推动世界前进的智能系统。' },
      gaming: { name: '视频游戏', desc: '打造娱乐和连接的沉浸式体验。' },
      realEstate: { name: '房地产', desc: '开发激发灵感并创造价值的空间。' },
      research: { name: '研究', desc: '投资于塑造未来的理念。' }
    },
    values: {
      title: "将愿景与执行力相结合。",
      subtitle: "赋予下一代全球领导者力量。",
      focus: { title: "聚焦", desc: "我们组织的基础核心支柱。" },
      partnership: { title: "伙伴关系", desc: "我们组织的基础核心支柱。" },
      growth: { title: "增长", desc: "我们组织的基础核心支柱。" },
      integrity: { title: "诚信", desc: "我们组织的基础核心支柱。" }
    },
    impact: {
      companies: "公司",
      industries: "行业",
      countries: "国家",
      teamMembers: "团队成员",
      possibilities: "无限可能"
    },
    presence: {
      title: "业务覆盖范围",
      subtitle: "美国设计 / 全球扩展。",
      perspective: "全球视野。",
      desc: "我们的触角遍及各大技术中心，确保我们始终处于创新的核心位置。",
      regions: ["北美", "欧洲", "亚太地区", "中东"]
    },
    cta: {
      title: "与 M&G 一起架构未来。",
      subtitle: "与我们合作",
      button: "联系我们",
      copied: "邮箱已复制！"
    },
    footer: {
      desc: "一家全球控股公司，旨在构建、收购和扩展定义下一工业时代的系统。",
      headquarters: "总部",
      links: "快速链接",
      legal: "法律信息",
      privacy: "隐私政策",
      terms: "服务条款",
      initiatives: "倡议",
      subsidiaries: "子公司",
      research: "前沿研究",
      realEstate: "房地产",
      ventures: "风险投资",
      corporate: "公司信息",
      aboutUs: "关于我们",
      leadership: "领导层",
      careers: "职业生涯",
      press: "新闻中心",
      contactText: "联系",
      phone: "+1 (302) 201-2840",
      rights: "保留所有权利。",
      service: "服务条款"
    }
  },
  ko: {
    header: {
      holdingCompany: "지주 회사",
      home: "홈",
      ecosystem: "생태계",
      impact: "영향력",
      network: "네트워크",
      contact: "연락처",
      est: "2026년 설립"
    },
    hero: {
      precision: "정밀.",
      vision: "비전.",
      execution: "실행.",
      scroll: "스크롤하여 탐색"
    },
    expansion: {
      title: "미래를 건설하는 지주 회사.",
      subtitle: "우리는 산업 트렌드를 쫓지 않습니다. 트렌드를 가능하게 하는 인프라를 설계합니다. 자본, 지능, 실행력이 원동력입니다."
    },
    philosophy: {
      title: "융합의 정점",
      whoWeAre: "우리는 누구인가",
      heading1: "우리는 단순히 회사에 투자하지 않습니다.",
      heading2: "우리는 생태계를 설계합니다.",
      para1: "M&G는 차세대 산업을 정의하는 시스템을 구축, 인수 및 확장하기 위해 설계된 글로벌 지주 회사입니다. 미국에 본사를 두고 국제 시장에서 활동하며, 우리는 스스로를 전통적인 대기업으로 규정하지 않습니다.",
      para2: "우리는 기술, 로보틱스, 소프트웨어, 부동산, 엔터테인먼트 및 프런티어 연구 전반에 걸친 혁신을 가속화하기 위해 설계된 구조화된 기업 생태계로 운영됩니다.",
      para3: "우리는 산업이 더 이상 분리되어 있지 않고 융합되고 있다고 믿습니다. 그리고 M&G는 바로 그 융합의 지점에서 활동하기 위해 존재합니다.",
      para4: "M&G 내의 각 회사는 독립적으로 기능하지만, 공유된 지능, 자본 효율성 및 통합된 장기 비전을 통해 증폭됩니다. 우리는 고립된 상태에서 회사를 만들지 않습니다. 우리는 시간이 지남에 따라 가치가 복리로 증대되도록 설계된 상호 연결된 역량 네트워크를 구축하고 있습니다.",
      para5: "자체 생태계를 구축하고 확장하는 것을 넘어, 우리는 미래를 형성할 잠재력을 가진 새로운 벤처, 신예 창업자 및 초기 단계 기업가들을 적극적으로 투자하고 발굴합니다. 우리는 속도, 지능 및 실행력이 성공을 정의하는 새로운 시장 시대에 새로운 비즈니스와 기업가들이 규모를 키우고, 성장하고, 경쟁할 수 있는 기회를 제공하기 위해 존재합니다.",
      para6: "우리는 차세대 글로벌 기업이 전통적인 방식에서 발견되는 것이 아니라, 정렬된 자본, 인프라 및 전략적 지원을 통해 가속화될 것이라고 믿습니다. M&G는 그 촉매제 역할을 자처합니다."
    },
    subsidiaries: {
      count: "20개 이상의 자회사",
      network: "글로벌 네트워크",
      capital: "정렬된 자본",
      growth: "전략적 성장",
      companyNames: {
        kids: "M&G 키즈",
        realEstate: "M&G 부동산",
        research: "M&G 연구소",
        education: "M&G 교육",
        foundation: "M&G 재단",
        lifeSciences: "M&G 생명과학 부문"
      }
    },
    industries: {
      title: "핵심 생태계",
      subtitle: "우리는 다음 전반에 걸쳐 운영합니다",
      heading: "혁신에 의해 구동되는 다중 산업.",
      software: { name: '소프트웨어', desc: '확장 가능한 디지털 솔루션 구축.' },
      robotics: { name: '로보틱스', desc: '세상을 움직이는 지능형 시스템 엔지니어링.' },
      gaming: { name: '비디오 게임', desc: '즐거움과 연결을 선사하는 몰입형 경험 창출.' },
      realEstate: { name: '부동산', desc: '영감을 주고 가치를 창출하는 공간 개발.' },
      research: { name: '연구', desc: '미래를 형성하는 아이디어에 대한 투자.' }
    },
    values: {
      title: "비전과 실행의 연결.",
      subtitle: "차세대 글로벌 리더에게 힘을 실어줍니다.",
      focus: { title: "집중", desc: "조직 기반의 핵심 기둥입니다." },
      partnership: { title: "파트너십", desc: "조직 기반의 핵심 기둥입니다." },
      growth: { title: "성장", desc: "조직 기반의 핵심 기둥입니다." },
      integrity: { title: "무결성", desc: "조직 기반의 핵심 기둥입니다." }
    },
    impact: {
      companies: "기업",
      industries: "산업",
      countries: "국가",
      teamMembers: "팀원",
      possibilities: "무한한 가능성"
    },
    presence: {
      title: "운영 범위",
      subtitle: "미국 설계 / 글로벌 확장.",
      perspective: "글로벌 관점.",
      desc: "우리의 도달 범위는 주요 기술 허브를 가로지르며 항상 혁신의 중심에 있도록 보장합니다.",
      regions: ["북미", "유럽", "아시아 태평양", "중동"]
    },
    cta: {
      title: "M&G와 함께 미래를 설계하십시오.",
      subtitle: "우리의 파트너가 되십시오",
      button: "문의하기",
      copied: "이메일 복사됨!"
    },
    footer: {
      desc: "차세대 산업을 정의하는 시스템을 구축, 인수 및 확장하기 위해 설계된 글로벌 지주 회사입니다.",
      headquarters: "본사",
      links: "퀵 링크",
      legal: "법적 고지",
      privacy: "개인정보 처리방침",
      terms: "이용 약관",
      initiatives: "이니셔티브",
      subsidiaries: "자회사",
      research: "프런티어 연구",
      realEstate: "부동산",
      ventures: "벤처",
      corporate: "기업 정보",
      aboutUs: "회사 소개",
      leadership: "리더십",
      careers: "채용",
      press: "프레스",
      contactText: "연락처",
      phone: "+1 (302) 201-2840",
      rights: "모든 권리 보유.",
      service: "이용 약관"
    }
  },
  de: {
    header: {
      holdingCompany: "Eine Holdinggesellschaft",
      home: "Startseite",
      ecosystem: "Ökosystem",
      impact: "Einfluss",
      network: "Netzwerk",
      contact: "Kontakt",
      est: "GEGR. 2026"
    },
    hero: {
      precision: "PRÄZISION.",
      vision: "VISION.",
      execution: "AUSFÜHRUNG.",
      scroll: "Scrollen zum Entdecken"
    },
    expansion: {
      title: "Eine Holding, die die Zukunft baut.",
      subtitle: "Wir folgen keinen Branchentrends; wir entwerfen die Infrastruktur, die sie möglich macht. Angetrieben durch Kapital, Intelligenz und Ausführung."
    },
    philosophy: {
      title: "DER KONVERGENZPUNKT",
      whoWeAre: "Wer Wir Sind",
      heading1: "Wir investieren nicht nur in Unternehmen.",
      heading2: "Wir entwerfen Ökosysteme.",
      para1: "M&G ist eine globale Holdinggesellschaft, die darauf ausgerichtet ist, die Systeme aufzubauen, zu erwerben und zu skalieren, die die nächste Ära der Industrie definieren. Mit Hauptsitz in den Vereinigten Staaten und operativer Tätigkeit auf internationalen Märkten positionieren wir uns nicht als traditionelles Konglomerat.",
      para2: "Wir agieren als strukturiertes Ökosystem von Unternehmen, das darauf ausgelegt ist, Innovationen in den Bereichen Technologie, Robotik, Software, Immobilien, Unterhaltung und Pionierforschung zu beschleunigen.",
      para3: "Wir glauben, dass Branchen nicht mehr getrennt sind, sondern konvergieren. Und M&G existiert, um an diesem Konvergenzpunkt zu agieren.",
      para4: "Jedes Unternehmen innerhalb von M&G agiert unabhängig, wird jedoch durch gemeinsames Wissen, Kapitaleffizienz und eine einheitliche langfristige Vision verstärkt. Wir bauen Unternehmen nicht isoliert auf. Wir bauen ein Netzwerk miteinander verbundener Fähigkeiten auf, das darauf ausgelegt ist, sich im Laufe der Zeit zu potenzieren.",
      para5: "Über den Aufbau und die Skalierung unseres eigenen Ökosystems hinaus investieren und suchen wir aktiv nach neuen Unternehmungen, aufstrebenden Gründern und Unternehmern in der Frühphase mit dem Potenzial, die Zukunft zu gestalten. Wir existieren, um neuen Unternehmen und neuen Unternehmern die Möglichkeit zu geben, in dieser neuen Marktära, in der Geschwindigkeit, Intelligenz und Ausführung den Erfolg definieren, zu skalieren, zu wachsen und wettbewerbsfähig zu sein.",
      para6: "Wir glauben, dass die nächste Generation globaler Unternehmen nicht in traditionellen Systemen entdeckt wird, sondern durch abgestimmtes Kapital, Infrastruktur und strategische Unterstützung beschleunigt wird. M&G positioniert sich als dieser Katalysator."
    },
    subsidiaries: {
      count: "20+ Tochtergesellschaften",
      network: "GLOBALES NETZWERK",
      capital: "ABGESTIMMTES KAPITAL",
      growth: "STRATEGISCHES WACHSTUM",
      companyNames: {
        kids: "M&G Kinder",
        realEstate: "M&G Immobilien",
        research: "M&G Forschung",
        education: "M&G Bildung",
        foundation: "M&G Stiftung",
        lifeSciences: "M&G Biowissenschaften Abteilung"
      }
    },
    industries: {
      title: "KERNÖKOSYSTEME",
      subtitle: "Wir agieren in",
      heading: "vielfältigen Branchen, getrieben von Innovation.",
      software: { name: 'Software', desc: 'Aufbau skalierbarer digitaler Lösungen.' },
      robotics: { name: 'Robotik', desc: 'Entwicklung intelligenter Systeme, die die Welt bewegen.' },
      gaming: { name: 'Videospiele', desc: 'Schaffung immersiver Erlebnisse, die unterhalten und verbinden.' },
      realEstate: { name: 'Immobilien', desc: 'Entwicklung von Räumen, die inspirieren und Wert schaffen.' },
      research: { name: 'Forschung', desc: 'Investition in Ideen, die die Zukunft gestalten.' }
    },
    values: {
      title: "Vision mit Ausführung verbinden.",
      subtitle: "Stärkung der nächsten Generation globaler Führungskräfte.",
      focus: { title: "Fokus", desc: "Grundpfeiler unserer organisatorischen Basis." },
      partnership: { title: "Partnerschaft", desc: "Grundpfeiler unserer organisatorischen Basis." },
      growth: { title: "Wachstum", desc: "Grundpfeiler unserer organisatorischen Basis." },
      integrity: { title: "Integrität", desc: "Grundpfeiler unserer organisatorischen Basis." }
    },
    impact: {
      companies: "UNTERNEHMEN",
      industries: "BRANCHEN",
      countries: "LÄNDER",
      teamMembers: "TEAMMITGLIEDER",
      possibilities: "MÖGLICHKEITEN"
    },
    presence: {
      title: "OPERATIVE REICHWEITE",
      subtitle: "Entwickelt in den USA / Global skaliert.",
      perspective: "Globale Perspektive.",
      desc: "Unsere Reichweite erstreckt sich über technologische Zentren und stellt sicher, dass wir immer im Herzen der Innovation sind.",
      regions: ["NORDAMERIKA", "EUROPA", "ASIEN-PAZIFIK", "NAHER OSTEN"]
    },
    cta: {
      title: "Gestalten Sie die Zukunft mit M&G.",
      subtitle: "Partner werden",
      button: "Kontaktiere uns",
      copied: "E-Mail kopiert!"
    },
    footer: {
      desc: "Eine globale Holdinggesellschaft, die darauf ausgerichtet ist, die Systeme aufzubauen, zu erwerben und zu skalieren, die die nächste Ära der Industrie definieren.",
      headquarters: "Hauptsitz",
      links: "Quick Links",
      legal: "RECHTLICHES",
      privacy: "Datenschutzrichtlinie",
      terms: "Nutzungsbedingungen",
      initiatives: "Initiativen",
      subsidiaries: "Tochtergesellschaften",
      research: "Pionierforschung",
      realEstate: "Immobilien",
      ventures: "Ventures",
      corporate: "Unternehmen",
      aboutUs: "Über uns",
      leadership: "Führung",
      careers: "Karriere",
      press: "Presse",
      contactText: "Kontakt",
      phone: "+1 (302) 201-2840",
      rights: "Alle Rechte vorbehalten.",
      service: "Nutzungsbedingungen"
    }
  },
  ja: {
    header: {
      holdingCompany: "M&G ホールディング・カンパニー",
      home: "ホーム",
      ecosystem: "エコシステム",
      impact: "インパクト",
      network: "ネットワーク",
      contact: "お問い合わせ",
      est: "設立 2024年"
    },
    hero: {
      precision: "精密。",
      vision: "ビジョン。",
      execution: "実行。",
      scroll: "スクロールして探索"
    },
    expansion: {
      title: "未来を構築する持株会社。",
      subtitle: "私たちは業界のトレンドを追うのではありません。それらを可能にするインフラを構築します。資本、知性、そして実行力によって推進されます。"
    },
    philosophy: {
      title: "コンバージェンス・ポイント",
      whoWeAre: "私たちについて",
      heading1: "私たちは単に企業に投資するだけではありません。",
      heading2: "エコシステムを構築します。",
      para1: "M&Gは、次世代の産業を定義するシステムを構築、買収、拡張するために設計されたグローバルな持株会社です。米国に本社を置き、国際市場で事業を展開しており、伝統的なコングロマリットとは一線を画しています。",
      para2: "私たちは、テクノロジー、ロボット工学、ソフトウェア、不動産、エンターテインメント、先端研究にわたるイノベーションを加速させるように設計された、構造化された企業のエコシステムとして運営されています。",
      para3: "私たちは、産業はもはや独立したものではなく、収束（コンバージェンス）に向かっていると信じています。そしてM&Gは、その収束点で活動するために存在しています。",
      para4: "M&G内の各企業は独立して機能していますが、共有された知性、資本効率、および統一された長期的なビジョンによって増幅されます。私たちは孤立して企業を構築しているのではなく、時間の経過とともに複利的に成長するように設計された、相互に接続された能力のネットワークを構築しています。",
      para5: "私たち自身のエコシステムを構築し拡張するだけでなく、未来を形作る可能性のある新しいベンチャー、新興の創業者、初期段階の起業家を積極的に支援し、探求しています。私たちは、スピード、知性、そして実行力が成功を定義するこの新しい市場の時代において、新しいビジネスと新しい起業家にスケール、成長、そして競争する機会を与えるために存在しています。",
      para6: "私たちは、次世代のグローバル企業は伝統的なシステムの中では発見されず、調和された資本、インフラ、および戦略的サポートを通じて加速されると信じています。M&Gは、その触媒としての地位を確立しています。"
    },
    subsidiaries: {
      count: "20+ 子会社",
      network: "グローバル・ネットワーク",
      capital: "アラインド・キャピタル",
      growth: "戦略的成長",
      companyNames: {
        kids: "M&G キッズ",
        realEstate: "M&G 不動産",
        research: "M&G 研究",
        education: "M&G 教育",
        foundation: "M&G 財団",
        lifeSciences: "M&G ライフサイエンス部門"
      }
    },
    industries: {
      title: "コア・エコシステム",
      subtitle: "次世代を定義する",
      heading: "イノベーションの交差点。",
      software: { name: "ソフトウェア", desc: "自律システムとエンタープライズ・エンジニアリング。" },
      robotics: { name: "ロボティクス", desc: "物理的なタスクのための高度な自動化。" },
      gaming: { name: "ゲーム", desc: "次世代の没入型テクノロジー。" },
      realEstate: { name: "不動産", desc: "スマートなインフラとスマートな生活空間。" },
      research: { name: "フロンティア研究", desc: "ディープベンチャーのための基礎的な進歩。" }
    },
    values: {
      title: "コア・プリンシプル",
      subtitle: "私たちの基盤",
      focus: { title: "極限の集中", desc: "ノイズを排除し、重要な成果を出すことに専念します。" },
      partnership: { title: "真のパートナーシップ", desc: "私たちは単なる投資家ではなく、共同構築者です。" },
      growth: { title: "指数関数的成長", desc: "スケーラブルなソリューションを通じて影響力を最大化します。" },
      integrity: { title: "揺るぎない誠実さ", desc: "厳格な倫理基準と規律を守ります。" }
    },
    impact: {
      companies: "グループ企業",
      industries: "展開産業",
      countries: "展開国",
      teamMembers: "チームメンバー",
      possibilities: "無限の可能性"
    },
    presence: {
      title: "展開領域",
      subtitle: "米国で設計 / グローバルに展開。",
      perspective: "グローバルな視点。",
      desc: "私たちのネットワークは主要なテクノロジー・ハブを網羅し、常にイノベーションの中心にいることを保証します。",
      regions: ["北米", "ヨーロッパ", "アジア太平洋", "中東"]
    },
    cta: {
      title: "M&Gと共に未来を設計しましょう。",
      subtitle: "パートナーシップの提案",
      button: "お問い合わせ",
      copied: "メールアドレスをコピーしました！"
    },
    footer: {
      desc: "次世代の産業を定義するシステムを構築、買収、拡張するために設計されたグローバル・ホールディング・カンパニー。",
      headquarters: "本社所在地",
      links: "クイックリンク",
      legal: "法的情報",
      privacy: "プライバシーポリシー",
      terms: "利用規約",
      initiatives: "イニシアチブ",
      subsidiaries: "子会社",
      research: "フロンティア研究",
      realEstate: "不動産",
      ventures: "ベンチャーズ",
      corporate: "コーポレート",
      aboutUs: "会社概要",
      leadership: "リーダーシップ",
      careers: "採用情報",
      press: "プレスリリース",
      contactText: "連絡先",
      phone: "+1 (302) 201-2840",
      rights: "不許複製・無断転載を禁じます。",
      service: "利用規約"
    }
  },
  'zh-TW': {
    header: {
      holdingCompany: "M&G 控股公司",
      home: "首頁",
      ecosystem: "生態系統",
      impact: "影響力",
      network: "網絡",
      contact: "聯繫我們",
      est: "成立於 2024"
    },
    hero: {
      precision: "精密。",
      vision: "視野。",
      execution: "執行。",
      scroll: "向下捲動探索"
    },
    expansion: {
      title: "一家構建未來的控股公司。",
      subtitle: "我們不跟隨行業趨勢；我們架構使趨勢成為可能的基礎設施。由資本、智慧和執行力驅動。"
    },
    philosophy: {
      title: "匯聚點",
      whoWeAre: "我們是誰",
      heading1: "我們不僅僅是投資於公司。",
      heading2: "我們架構生態系統。",
      para1: "M&G 是一家全球控股公司，旨在構建、收購和擴展定義下一工業時代的系統。總部位於美國並在國際市場運作，我們不把自己定位為傳統的集團企業。",
      para2: "我們作為一個結構化的企業生態系統運作，旨在加速技術、機器人、軟體、房地產、娛樂和前沿研究領域的創新。",
      para3: "我們相信產業不再是獨立的，它們正在匯聚。而 M&G 的存在是為了在那個匯聚點運作。",
      para4: "M&G 內的每家公司都獨立運作，但通過共享智慧、資本效率和統一的長期遠景得到放大。我們不是在孤立地建立公司。我們正在建立一個相互連接的能力網絡，旨在隨著時間的推移產生複利效應。",
      para5: "除了構建和擴展我們自己的生態系統外，我們還積極投資並尋找具有塑造未來潛力的新創企業、新興創始人和早期企業家。我們的存在是為了給新企業和新企業家提供在這個由速度、智慧和執行力定義成功的全新市場時代擴張、增長和競爭的機會。",
      para6: "我們相信下一代全球公司不會在傳統系統中被發現，而是通過對接資本、基礎設施和戰略支持得到加速。M&G 將自己定位為那個催化劑。"
    },
    subsidiaries: {
      count: "20+ 子公司",
      network: "全球網絡",
      capital: "對接資本",
      growth: "戰略增長",
      companyNames: {
        kids: "M&G 兒童",
        realEstate: "M&G 房地產",
        research: "M&G 研究",
        education: "M&G 教育",
        foundation: "M&G 基金會",
        lifeSciences: "M&G 生命科學部門"
      }
    },
    industries: {
      title: "核心生態系統",
      subtitle: "定義次世代",
      heading: "創新的交匯點。",
      software: { name: "軟體", desc: "自主系統與企業工程。" },
      robotics: { name: "機器人技術", desc: "實體任務的先進自動化。" },
      gaming: { name: "遊戲", desc: "次世代沉浸式技術。" },
      realEstate: { name: "房地產", desc: "智慧基礎設施與智慧生活空間。" },
      research: { name: "前沿研究", desc: "深度創業的基礎性進展。" }
    },
    values: {
      title: "核心原則",
      subtitle: "我們的基礎",
      focus: { title: "極致專注", desc: "排除雜音，致力於實現重大成果。" },
      partnership: { title: "真正的合作夥伴關係", desc: "我們不僅是投資者，更是共同構建者。" },
      growth: { title: "指數級增長", desc: "通過可擴展的解決方案最大化影響力。" },
      integrity: { title: "堅定不移的誠信", desc: "保持嚴格的倫理標準與紀律。" }
    },
    impact: {
      companies: "集團企業",
      industries: "涵蓋產業",
      countries: "涵蓋國家",
      teamMembers: "團隊成員",
      possibilities: "無限可能"
    },
    presence: {
      title: "業務覆蓋範圍",
      subtitle: "美國設計 / 全球擴展。",
      perspective: "全球視野。",
      desc: "我們的觸角遍及各大技術中心，確保我們始終處於創新的核心位置。",
      regions: ["北美", "歐洲", "亞太地區", "中東"]
    },
    cta: {
      title: "與 M&G 一起架構未來。",
      subtitle: "與我們合作",
      button: "聯繫我們",
      copied: "郵箱已複製！"
    },
    footer: {
      desc: "一家全球控股公司，旨在構建、收購和擴展定義下一工業時代的系統。",
      headquarters: "總部所在地",
      links: "快速連結",
      legal: "法律資訊",
      privacy: "隱私政策",
      terms: "服務條款",
      initiatives: "倡議",
      subsidiaries: "子公司",
      research: "前沿研究",
      realEstate: "房地產",
      ventures: "風險投資",
      corporate: "公司資訊",
      aboutUs: "關於我們",
      leadership: "領導層",
      careers: "職業生涯",
      press: "新聞中心",
      contactText: "聯繫",
      phone: "+1 (302) 201-2840",
      rights: "保留所有權利。",
      service: "服務條款"
    }
  },
  fr: {
    header: {
      holdingCompany: "Société Holding M&G",
      home: "Accueil",
      ecosystem: "Écosystème",
      impact: "Impact",
      network: "Réseau",
      contact: "Contact",
      est: "EST. 2024"
    },
    hero: {
      precision: "PRÉCISION.",
      vision: "VISION.",
      execution: "EXÉCUTION.",
      scroll: "Faites défiler pour explorer"
    },
    expansion: {
      title: "Une société holding qui construit le futur.",
      subtitle: "Nous ne suivons pas les tendances de l'industrie ; nous architecturons l'infrastructure qui les rend possibles. Propulsés par le capital, l'intelligence et l'exécution."
    },
    philosophy: {
      title: "LE POINT DE CONVERGENCE",
      whoWeAre: "Qui nous sommes",
      heading1: "Nous n'investissons pas seulement dans des entreprises.",
      heading2: "Nous architecturons des écosystèmes.",
      para1: "M&G est une société holding mondiale conçue pour construire, acquérir et faire évoluer les systèmes qui définissent la prochaine ère de l'industrie. Basée aux États-Unis et opérant sur les marchés internationaux, nous ne nous positionnons pas comme un conglomérat traditionnel.",
      para2: "Nous fonctionnons comme un écosystème structuré d'entreprises, conçu pour accélérer l'innovation dans la technologie, la robotique, les logiciels, l'immobilier, le divertissement et la recherche de pointe.",
      para3: "Nous croyons que les industries ne sont plus séparées, elles convergent. Et M&G existe pour opérer à ce point de convergence.",
      para4: "Chaque entreprise au sein de M&G fonctionne de manière indépendante, mais est amplifiée par une intelligence partagée, une efficacité du capital et une vision unifiée à long terme. Nous ne construisons pas des entreprises isolées. Nous construisons un réseau de capacités interconnectées conçu pour se cumuler avec le temps.",
      para5: "Au-delà de la construction et de l'expansion de notre propre écosystème, nous investissons activement et recherchons de nouvelles entreprises, des fondateurs émergents et des entrepreneurs en phase de démarrage ayant le potentiel de façonner l'avenir. Nous existons pour donner aux nouvelles entreprises et aux nouveaux entrepreneurs l'opportunité de se développer, de croître et de rivaliser dans cette nouvelle ère du marché, où la vitesse, l'intelligence et l'exécution définissent le succès.",
      para6: "Nous croyons que la prochaine génération d'entreprises mondiales ne sera pas découverte dans les systèmes traditionnels, mais accélérée par un capital aligné, une infrastructure et un soutien stratégique. M&G se positionne comme ce catalyseur."
    },
    subsidiaries: {
      count: "20+ Filiales",
      network: "RÉSEAU MONDIAL",
      capital: "CAPITAL ALIGNÉ",
      growth: "CROISSANCE STRATÉGIQUE",
      companyNames: {
        kids: "M&G Kids",
        realEstate: "M&G Immobilier",
        research: "M&G Recherche",
        education: "M&G Éducation",
        foundation: "M&G Fondation",
        lifeSciences: "Division M&G Sciences de la Vie"
      }
    },
    industries: {
      title: "Écosystèmes Centraux",
      subtitle: "Définir la Prochaine Génération",
      heading: "L'Intersection de l'Innovation.",
      software: { name: "Logiciel", desc: "Systèmes autonomes et ingénierie d'entreprise." },
      robotics: { name: "Robotique", desc: "Automatisation avancée pour les tâches physiques." },
      gaming: { name: "Jeux", desc: "Technologie immersive de nouvelle génération." },
      realEstate: { name: "Immobilier", desc: "Infrastructure et espaces de vie intelligents." },
      research: { name: "Recherche de Pointe", desc: "Avancées fondamentales pour les entreprises profondes." }
    },
    values: {
      title: "Principes Fondamentaux",
      subtitle: "Notre Fondation",
      focus: { title: "Concentration Extrême", desc: "Éliminer le bruit pour se consacrer aux résultats critiques." },
      partnership: { title: "Partenariat Véritable", desc: "Nous ne sommes pas seulement des investisseurs, mais des co-constructeurs." },
      growth: { title: "Croissance Exponentielle", desc: "Maximiser l'impact grâce à des solutions évolutives." },
      integrity: { title: "Intégrité Inébranlable", desc: "Maintenir des normes éthiques et une discipline rigoureuses." }
    },
    impact: {
      companies: "ENTREPRISES",
      industries: "INDUSTRIES",
      countries: "PAYS",
      teamMembers: "MEMBRES DE L'ÉQUIPE",
      possibilities: "POSSIBILITÉS"
    },
    presence: {
      title: "PORTÉE OPÉRATIONNELLE",
      subtitle: "Conçu aux États-Unis / Déployé Mondialement.",
      perspective: "Perspective Mondiale.",
      desc: "Notre portée s'étend à travers les pôles technologiques, garantissant que nous sommes toujours au cœur de l'innovation.",
      regions: ["AMÉRIQUE DU NORD", "EUROPE", "ASIE-PACIFIQUE", "MOYEN-ORIENT"]
    },
    cta: {
      title: "Architecturer le futur avec M&G.",
      subtitle: "Associez-vous à nous",
      button: "Contactez-nous",
      copied: "Email Copié !"
    },
    footer: {
      desc: "Une société holding mondiale conçue pour construire, acquérir et faire évoluer les systèmes qui définissent la prochaine ère de l'industrie.",
      headquarters: "Siège Social",
      links: "Liens Rapides",
      legal: "JURIDIQUE",
      privacy: "Politique de Confidentialité",
      terms: "Conditions d'Utilisation",
      initiatives: "Initiatives",
      subsidiaries: "Filiales",
      research: "Recherche de Pointe",
      realEstate: "Immobilier",
      ventures: "Ventures",
      corporate: "Entreprise",
      aboutUs: "À Propos",
      leadership: "Direction",
      careers: "Carrières",
      press: "Presse",
      contactText: "Contact",
      phone: "+1 (302) 201-2840",
      rights: "Tous droits réservés.",
      service: "Conditions d'Utilisation"
    }
  },
  id: {
    header: {
      holdingCompany: "Perusahaan Holding M&G",
      home: "Beranda",
      ecosystem: "Ekosistem",
      impact: "Dampak",
      network: "Jaringan",
      contact: "Kontak",
      est: "EST. 2024"
    },
    hero: {
      precision: "PRESISI.",
      vision: "VISI.",
      execution: "EKSEKUSI.",
      scroll: "Gulir untuk menjelajah"
    },
    expansion: {
      title: "Perusahaan holding yang membangun masa depan.",
      subtitle: "Kami tidak mengikuti tren industri; kami merancang infrastruktur yang memungkinkannya. Didorong oleh modal, kecerdasan, dan eksekusi."
    },
    philosophy: {
      title: "Lebih dari Investasi.",
      whoWeAre: "Siapa Kami",
      heading1: "Arsitektur untuk Masa Depan",
      heading2: "yang Otonom.",
      para1: "M&G bukan perusahaan holding tradisional. Kami adalah ekosistem rekayasa yang menciptakan nilai di persimpangan perangkat lunak, robotika, dan teknologi mendalam.",
      para2: "Filosofi kami berakar pada otonomi strategis dan keunggulan operasional. Kami tidak hanya menyediakan modal; kami menyediakan infrastruktur operasional.",
      para3: "Dari penelitian hingga properti, portofolio kami dirancang untuk memaksimalkan sinergi antara daya komputasi, aset fisik, dan inovasi yang berpusat pada manusia.",
      para4: "Setiap perusahaan dalam M&G berfungsi secara independen, namun diperkuat oleh kecerdasan bersama, efisiensi modal, und visi jangka panjang yang bersatu. Kami tidak membangun perusahaan dalam isolasi. Kami membangun jaringan kapabilitas yang saling terhubung yang dirancang untuk berkembang seiring waktu.",
      para5: "Selain membangun dan menskalakan ekosistem kami sendiri, kami secara aktif berinvestasi dalam dan mencari usaha baru, pendiri yang muncul, dan pengusaha tahap awal dengan potensi untuk membentuk masa depan. Kami hadir untuk memberikan kesempatan kepada bisnis baru dan pengusaha baru untuk menskalakan, tumbuh, und bersaing di era pasar baru ini, di mana kecepatan, kecerdasan, dan eksekusi menentukan keberhasilan.",
      para6: "Kami percaya perusahaan global generasi berikutnya tidak akan ditemukan dalam sistem tradisional, tetapi dipercepat melalui modal, infrastruktur, und dukungan strategis yang selaras. M&G memposisikan dirinya sebagai katalisator tersebut."
    },
    subsidiaries: {
      count: "20+ Anak Perusahaan",
      network: "JARINGAN GLOBAL",
      capital: "MODAL TERSELARASKAN",
      growth: "PERTUMBUHAN STRATEGIS",
      companyNames: {
        kids: "M&G Kids",
        realEstate: "M&G Real Estate",
        research: "M&G Research",
        education: "M&G Education",
        foundation: "M&G Foundation",
        lifeSciences: "Divisi Ilmu Pengetahuan Hayati M&G"
      }
    },
    industries: {
      title: "Ekosistem Inti",
      subtitle: "Mendefinisikan Generasi Berikutnya",
      heading: "Persimpangan Inovasi.",
      software: { name: "Perangkat Lunak", desc: "Sistem otonom dan rekayasa perusahaan." },
      robotics: { name: "Robotika", desc: "Otomasi canggih untuk tugas fisik." },
      gaming: { name: "Game", desc: "Teknologi imersif generasi berikutnya." },
      realEstate: { name: "Properti", desc: "Infrastruktur cerdas dan ruang hidup cerdas." },
      research: { name: "Penelitian Frontier", desc: "Kemajuan mendasar untuk usaha mendalam." }
    },
    values: {
      title: "Prinsip Utama",
      subtitle: "Fondasi Kami",
      focus: { title: "Fokus Ekstrim", desc: "Menghilangkan kebisingan untuk berdedikasi pada hasil kritis." },
      partnership: { title: "Kemitraan Sejati", desc: "Kami bukan sekadar investor, tetapi mitra pembangun." },
      growth: { title: "Pertumbuhan Eksponensial", desc: "Memaksimalkan dampak melalui solusi yang dapat diskalakan." },
      integrity: { title: "Integritas Tak Teroyahkan", desc: "Menjaga standar etika dan disiplin yang ketat." }
    },
    impact: {
      companies: "PERUSAHAAN",
      industries: "INDUSTRI",
      countries: "NEGARA",
      teamMembers: "ANGGOTA TIM",
      possibilities: "KEMUNGKINAN"
    },
    presence: {
      title: "JANGKAUAN OPERASIONAL",
      subtitle: "Dirancang di AS / Diskalakan Secara Global.",
      perspective: "Perspektif Global.",
      desc: "Jangkauan kami mencakup pusat-pusat teknologi, memastikan kami selalu berada di jantung inovasi.",
      regions: ["AMERIKA UTARA", "EROPA", "ASIA PASIFIK", "TIMUR TENGAH"]
    },
    cta: {
      title: "Rancang masa depan dengan M&G.",
      subtitle: "Bermitra dengan Kami",
      button: "Hubungi Kami",
      copied: "Email Disalin!"
    },
    footer: {
      desc: "Perusahaan holding global yang dirancang untuk membangun, mengakuisisi, dan menskalakan sistem yang mendefinisikan era industri berikutnya.",
      headquarters: "Kantor Pusat",
      links: "Tautan Cepat",
      legal: "HUKUM",
      privacy: "Kebijakan Privasi",
      terms: "Syarat Layanan",
      initiatives: "Inisiatif",
      subsidiaries: "Anak Perusahaan",
      research: "Penelitian Frontier",
      realEstate: "Properti",
      ventures: "Ventura",
      corporate: "Korporat",
      aboutUs: "Tentang Kami",
      leadership: "Kepemimpinan",
      careers: "Karir",
      press: "Pers",
      contactText: "Kontak",
      phone: "+1 (302) 201-2840",
      rights: "Semua hak dilindungi undang-undang.",
      service: "Syarat Layanan"
    }
  },
  th: {
    header: {
      holdingCompany: "บริษัท เอ็มแอนด์จี โฮลดิ้ง",
      home: "หน้าแรก",
      ecosystem: "ระบบนิเวศ",
      impact: "ผลกระทบ",
      network: "เครือข่าย",
      contact: "ติดต่อเรา",
      est: "ก่อตั้งเมื่อปี 2024"
    },
    hero: {
      precision: "ความแม่นยำ",
      vision: "วิสัยทัศน์",
      execution: "การดำเนินการ",
      scroll: "เลื่อนเพื่อสำรวจ"
    },
    expansion: {
      title: "บริษัทโฮลดิ้งที่สร้างอนาคต",
      subtitle: "เราไม่ได้ทำตามเทรนด์ของอุตสาหกรรม แต่เราวางโครงสร้างพื้นฐานที่ทำให้เทรนด์เหล่านั้นเป็นไปได้ ขับเคลื่อนด้วยเงินทุน สติปัญญา และการดำเนินการ"
    },
    philosophy: {
      title: "มากกว่าการลงทุน",
      whoWeAre: "เราคือใคร",
      heading1: "ออกแบบมาเพื่อ",
      heading2: "อนาคตที่เป็นอิสระ",
      para1: "M&G ไม่ใช่บริษัทโฮลดิ้งแบบดั้งเดิม เราเป็นระบบนิเวศด้านวิศวกรรมที่สร้างมูลค่าจากการผสมผสานระหว่างซอฟต์แวร์ โรบอทิกส์ และเทคโนโลยีขั้นสูง",
      para2: "ปรัชญาของเราหยั่งรากในความเป็นอิสระเชิงกลยุทธ์และความเป็นเลิศในการดำเนินงาน เราไม่ได้เพียงแค่ให้เงินทุน แต่เราให้โครงสร้างพื้นฐานในการดำเนินงาน",
      para3: "ตั้งแต่การวิจัยไปจนถึงอสังหาริมทรัพย์ พอร์ตโฟลิโอของเราถูกออกแบบมาเพื่อเพิ่มการทำงานร่วมกันระหว่างพลังการคำนวณ สินทรัพย์ทางกายภาพ และนวัตกรรมที่มีมนุษย์เป็นศูนย์กลาง",
      para4: "แต่ละบริษัทใน M&G ดำเนินงานอย่างเป็นอิสระ แต่ได้รับการเสริมพลังด้วยสติปัญญาร่วมกัน ประสิทธิภาพของเงินทุน และวิสัยทัศน์ระยะยาวที่เป็นหนึ่งเดียว เราไม่ได้สร้างบริษัทแยกจากกันเพียงลำพัง แต่เรากำลังสร้างเครือข่ายของความสามารถที่เชื่อมโยงถึงกันซึ่งออกแบบมาเพื่อเพิ่มพูนมูลค่าเมื่อเวลาผ่านไป",
      para5: "นอกเหนือจากการสร้างและขยายระบบนิเวศของเราเองแล้ว เรายังลงทุนอย่างจริงจังและค้นหาธุรกิจใหม่ๆ ผู้ก่อตั้งที่กำลังเติบโต และผู้ประกอบการในระยะเริ่มต้นที่มีศักยภาพในการกำหนดอนาคต เรามีอยู่เพื่อให้โอกาสแก่ธุรกิจใหม่และผู้ประกอบการใหม่ในการขยายตัว เติบโต และแข่งขันในยุคตลาดใหม่นี้ ซึ่งความเร็ว สติปัญญา และการดำเนินการคือปัจจัยกำหนดความสำเร็จ",
      para6: "เราเชื่อว่าบริษัทระดับโลกรุ่นต่อไปจะไม่ถูกค้นพบในระบบดั้งเดิม แต่จะได้รับการเร่งการเติบโตผ่านเงินทุน โครงสร้างพื้นฐาน และการสนับสนุนเชิงกลยุทธ์ที่สอดคล้องกัน M&G วางตำแหน่งตัวเองเป็นตัวเร่งปฏิกิริยานั้น"
    },
    subsidiaries: {
      count: "20+ บริษัทในเครือ",
      network: "เครือข่ายระดับโลก",
      capital: "เงินทุนที่สอดคล้อง",
      growth: "การเติบโตเชิงกลยุทธ์",
      companyNames: {
        kids: "M&G Kids",
        realEstate: "M&G Real Estate",
        research: "M&G Research",
        education: "M&G Education",
        foundation: "M&G Foundation",
        lifeSciences: "แผนกวิทยาศาสตร์ชีวภาพ M&G"
      }
    },
    industries: {
      title: "ระบบนิเวศหลัก",
      subtitle: "กำหนดนิยามแห่งอนาคต",
      heading: "จุดตัดของนวัตกรรม",
      software: { name: "ซอฟต์แวร์", desc: "ระบบอัตโนมัติและวิศวกรรมระดับองค์กร" },
      robotics: { name: "โรบอทิกส์", desc: "ระบบอัตโนมัติขั้นสูงสำหรับงานทางกายภาพ" },
      gaming: { name: "เกม", desc: "เทคโนโลยีเสมือนจริงแห่งอนาคต" },
      realEstate: { name: "อสังหาริมทรัพย์", desc: "โครงสร้างพื้นฐานและพื้นที่อยู่อาศัยอัจฉริยะ" },
      research: { name: "การวิจัยขั้นสูง", desc: "ความก้าวหน้าพื้นฐานสำหรับธุรกิจเทคโนโลยีเชิงลึก" }
    },
    values: {
      title: "หลักการสำคัญ",
      subtitle: "รากฐานของเรา",
      focus: { title: "การมุ่งเน้นอย่างสูงสุด", desc: "ตัดเสียงรบกวนเพื่อทุ่มเทให้กับผลลัพธ์ที่สำคัญ" },
      partnership: { title: "พันธมิตรที่แท้จริง", desc: "เราไม่ใช่แค่ผู้ลงทุน แต่เราเป็นผู้ร่วมสร้าง" },
      growth: { title: "การเติบโตแบบก้าวกระโดด", desc: "ขยายผลกระทบให้สูงสุดผ่านโซลูชันที่ปรับขนาดได้" },
      integrity: { title: "ความซื่อสัตย์ที่มั่นคง", desc: "รักษามาตรฐานจริยธรรมและวินัยอย่างเข้มงวด" }
    },
    impact: {
      companies: "บริษัท",
      industries: "อุตสาหกรรม",
      countries: "ประเทศ",
      teamMembers: "สมาชิกในทีม",
      possibilities: "ความเป็นไปได้"
    },
    presence: {
      title: "ขอบเขตการดำเนินงาน",
      subtitle: "ออกแบบในสหรัฐอเมริกา / ขยายไปทั่วโลก",
      perspective: "มุมมองระดับโลก",
      desc: "เครือข่ายของเราครอบคลุมศูนย์กลางเทคโนโลยีที่สำคัญ เพื่อให้มั่นใจว่าเราเป็นหัวใจสำคัญของนวัตกรรมเสมอ",
      regions: ["อเมริกาเหนือ", "ยุโรโรป", "เอเชียแปซิฟิก", "ตะวันออกกลาง"]
    },
    cta: {
      title: "ร่วมวางโครงสร้างแห่งอนาคตกับ M&G",
      subtitle: "ร่วมเป็นพันธมิตรกับเรา",
      button: "ติดต่อเรา",
      copied: "คัดลอกอีเมลแล้ว!"
    },
    footer: {
      desc: "บริษัทโฮลดิ้งระดับโลกที่ออกแบบมาเพื่อสร้าง จัดซื้อ และขยายระบบที่กำหนดนิยามของยุคอุตสาหกรรมถัดไป",
      headquarters: "สำนักงานใหญ่",
      links: "ลิงก์ด่วน",
      legal: "กฎหมาย",
      privacy: "นโยบายความเป็นส่วนตัว",
      terms: "ข้อกำหนดการใช้บริการ",
      initiatives: "โครงการ",
      subsidiaries: "บริษัทในเครือ",
      research: "การวิจัยขั้นสูง",
      realEstate: "อสังหาริมทรัพย์",
      ventures: "การลงทุน",
      corporate: "องค์กร",
      aboutUs: "เกี่ยวกับเรา",
      leadership: "คณะผู้บริหาร",
      careers: "ร่วมงานกับเรา",
      press: "ข่าวประชาสัมพันธ์",
      contactText: "ติดต่อ",
      phone: "+1 (302) 201-2840",
      rights: "สงวนลิขสิทธิ์ทั้งหมด",
      service: "ข้อกำหนดการใช้บริการ"
    }
  },
  fil: {
    header: {
      holdingCompany: "M&G Holding Company",
      home: "Home",
      ecosystem: "Ecosystem",
      impact: "Epekto",
      network: "Network",
      contact: "Makipag-ugnayan",
      est: "EST. 2024"
    },
    hero: {
      precision: "PRESISYON.",
      vision: "PANGITAIN.",
      execution: "EHEKUSYON.",
      scroll: "Mag-scroll para galugarin"
    },
    expansion: {
      title: "Isang holding company na bumubuo sa kinabukasan.",
      subtitle: "Hindi namin sinusunod ang mga trend ng industriya; kami ang nag-aarkitekto ng imprastruktura na nagpapaging posible sa mga ito. Itinataguyod ng kapital, katalinuhan, at ehekusyon."
    },
    philosophy: {
      title: "Higit pa sa Pamumuhunan.",
      whoWeAre: "Sino Kami",
      heading1: "Inarkitekto para sa isang",
      heading2: "Autonomong Kinabukasan.",
      para1: "Ang M&G ay hindi isang tradisyonal na holding company. Kami ay isang engineering ecosystem na lumilikha ng halaga sa intersection ng software, robotics, at deep tech.",
      para2: "Ang aming pilosopiya ay nakaugat sa estratehikong awtonomiya at kahusayan sa operasyon. Hindi lamang kami nagbibigay ng kapital; nagbibigay kami ng imprastruktura sa pagpapatakbo.",
      para3: "Mula sa pananaliksik hanggang sa real estate, ang aming portfolio ay idinisenyo upang i-maximize ang synergy sa pagitan ng lakas ng computing, pisikal na aspeto, at inobasyong nakasentro sa tao.",
      para4: "Bawat kumpanya sa loob ng M&G ay gumagana nang hiwalay, ngunit pinalalakas ng ibinahaging katalinuhan, kahusayan sa kapital, at isang pinag-isang pangmatagalang pananaw. Hindi kami bumubuo ng mga kumpanya nang nag-iisa. Bumubuo kami ng isang network ng mga magkakaugnay na kakayahan na idinisenyo upang lumago sa paglipas ng panahon.",
      para5: "Higit pa sa pagbuo at pagpapalawak ng aming sariling ecosystem, aktibo kaming nag-i-invest at naghahanap ng mga bagong venture, mga umuusbong na founder, at mga maagang yugto ng negosyante na may potensyal na hubugin ang hinaharap. Umiiral kami upang bigyan ang mga bagong negosyo at bagong negosyante ng pagkakataong lumago, umunlad, at makipagkumpetensya sa bagong panahon ng merkado na ito, kung saan ang bilis, katalinuhan, at ehekusyon ang tumutukoy sa tagumpay.",
      para6: "Naniniwala kami na ang susunod na henerasyon ng mga pandaigdigang kumpanya ay hindi matutuklasan sa mga tradisyonal na sistema, ngunit mapapabilis sa pamamagitan ng nakahanay na kapital, imprastruktura, at estratehikong suporta. Inilalagay ng M&G ang sarili nito bilang katalistang iyon."
    },
    subsidiaries: {
      count: "20+ na Subsidiary",
      network: "GLOBAL NA NETWORK",
      capital: "ALIGNED NA KAPITAL",
      growth: "ESTRATEHIKONG PAGLAGO",
      companyNames: {
        kids: "M&G Kids",
        realEstate: "M&G Real Estate",
        research: "M&G Research",
        education: "M&G Education",
        foundation: "M&G Foundation",
        lifeSciences: "Dibisyon ng M&G Life Sciences"
      }
    },
    industries: {
      title: "Pangunahing Ecosystem",
      subtitle: "Pagbibigay-kahulugan sa Susunod na Henerasyon",
      heading: "Ang Intersection ng Inobasyon.",
      software: { name: "Software", desc: "Mga autonomong sistema at inhinyeriya para sa negosyo." },
      robotics: { name: "Robotics", desc: "Advanced na automation para sa mga pisikal na gawain." },
      gaming: { name: "Gaming", desc: "Imersibong teknolohiya ng susunod na henerasyon." },
      realEstate: { name: "Real Estate", desc: "Matalinong imprastruktura at matatalinong tirahan." },
      research: { name: "Frontier Research", desc: "Pangunahing pagsulong para sa mga deep venture." }
    },
    values: {
      title: "Pangunahing Prinsipyo",
      subtitle: "Ang Aming Batayan",
      focus: { title: "Extreme Focus", desc: "Pag-aalis ng ingay para mag-focus sa mga kritikal na resulta." },
      partnership: { title: "Tunay na Pakikipagtulungan", desc: "Hindi lang kami mga investor, kami ay mga co-builder." },
      growth: { title: "Exponential na Paglago", desc: "Pag-maximize ng epekto sa pamamagitan ng mga scalable na solusyon." },
      integrity: { title: "Matatag na Integridad", desc: "Pagpapanatili ng mahigpit na etikal na pamantayan at disiplina." }
    },
    impact: {
      companies: "MGA KUMPANYA",
      industries: "MGA INDUSTRIYA",
      countries: "MGA BANSA",
      teamMembers: "MGA MIYEMBRO NG TEAM",
      possibilities: "MGA POSIBILIDAD"
    },
    presence: {
      title: "OPERASYONAL NA SAKLAW",
      subtitle: "Idinisenyo sa U.S. / Pinalawak sa Buong Mundo.",
      perspective: "Pandaigdigang Pananaw.",
      desc: "Ang aming saklaw ay umaabot sa mga technology hub, tinitiyak na palagi kaming nasa puso ng inobasyon.",
      regions: ["HILAGANG AMERIKA", "EUROPE", "ASIA PACIFIC", "MIDDLE EAST"]
    },
    cta: {
      title: "I-arkitekto ang kinabukasan kasama ang M&G.",
      subtitle: "Makipagtulungan sa Amin",
      button: "Makipag-ugnayan",
      copied: "Email Nakopya na!"
    },
    footer: {
      desc: "Isang pandaigdigang holding company na idinisenyo upang bumuo, bumili, at magpalawak ng mga sistemang magbibigay-kahulugan sa susunod na panahon ng industriya.",
      headquarters: "Pangunahing Opisina",
      links: "Mabilis na Links",
      legal: "LEGAL",
      privacy: "Patakaran sa Pagkapribado",
      terms: "Mga Tuntunin ng Serbisyo",
      initiatives: "Mga Inisyatiba",
      subsidiaries: "Mga Subsidiary",
      research: "Frontier Research",
      realEstate: "Real Estate",
      ventures: "Ventures",
      corporate: "Kumpanya",
      aboutUs: "Tungkol sa Amin",
      leadership: "Pamumuno",
      careers: "Mga Karera",
      press: "Press",
      contactText: "Makipag-ugnayan",
      phone: "+1 (302) 201-2840",
      rights: "Lahat ng karapatan ay nakalaan.",
      service: "Mga Tuntunin ng Serbisyo"
    }
  },
  it: {
    header: {
      holdingCompany: "M&G Holding Company",
      home: "Home",
      ecosystem: "Ecosistema",
      impact: "Impatto",
      network: "Rete",
      contact: "Contatti",
      est: "FOND. 2024"
    },
    hero: {
      precision: "PRECISIONE.",
      vision: "VISIONE.",
      execution: "ESECUZIONE.",
      scroll: "Scorri per esplorare"
    },
    expansion: {
      title: "Una holding che costruisce il futuro.",
      subtitle: "Non seguiamo i trend del settore; progettiamo l'infrastruttura che li rende possibili. Guidati da capitale, intelligenza ed esecuzione."
    },
    philosophy: {
      title: "Punto di Convergenza",
      whoWeAre: "Chi Siamo",
      heading1: "Non investiamo solo in aziende.",
      heading2: "Progettiamo ecosistemi.",
      para1: "M&G è una holding globale progettata per costruire, acquisire e scalare i sistemi che definiranno la prossima era industriale. Con sede negli Stati Uniti e operativa nei mercati internazionali, non ci posizioniamo come un conglomerato tradizionale.",
      para2: "Operiamo come un ecosistema strutturato di imprese progettato per accelerare l'innovazione in tecnologia, robotica, software, immobiliare, intrattenimento e ricerca di frontiera.",
      para3: "Crediamo che le industrie non siano più indipendenti; stanno convergendo. E M&G esiste per operare in quel punto di convergenza.",
      para4: "Ogni azienda all'interno di M&G funziona in modo indipendente, ma è amplificata dall'intelligenza condivisa, dall'efficienza del capitale e da una visione a lungo termine unificata. Non stiamo costruendo aziende in isolamento. Stiamo costruendo una rete di capacità interconnesse progettate per capitalizzare nel tempo.",
      para5: "Oltre a costruire e scalare il nostro ecosistema, investiamo attivamente e cerchiamo nuove iniziative, fondatori emergenti e imprenditori in fase iniziale con il potenziale per plasmare il futuro. Esistiamo per dare alle nuove imprese e ai nuovi imprenditori l'opportunità di scalare, crescere e competere in questa nuova era di mercato dove velocità, intelligenza ed esecuzione definiscono il successo.",
      para6: "Crediamo che la prossima generazione di aziende globali non si troverà nei sistemi tradizionali, ma sarà accelerata attraverso capitale allineato, infrastruttura e supporto strategico. M&G si posiziona come quel catalizzatore."
    },
    subsidiaries: {
      count: "20+ Filiali",
      network: "RETE GLOBALE",
      capital: "CAPITALE ALLINEATO",
      growth: "CRESCITA STRATEGICA",
      companyNames: {
        kids: "M&G Kids",
        realEstate: "M&G Real Estate",
        research: "M&G Research",
        education: "M&G Education",
        foundation: "M&G Foundation",
        lifeSciences: "M&G Life Sciences Division"
      }
    },
    industries: {
      title: "Ecosistemi Core",
      subtitle: "Definire la Prossima Generazione",
      heading: "L'Intersezione dell'Innovazione.",
      software: { name: "Software", desc: "Sistemi autonomi e ingegneria aziendale." },
      robotics: { name: "Robotica", desc: "Automazione avanzata per compiti fisici." },
      gaming: { name: "Gaming", desc: "Tecnologia immersiva di nuova generazione." },
      realEstate: { name: "Immobiliare", desc: "Infrastruttura intelligente e spazi abitativi smart." },
      research: { name: "Ricerca di Frontiera", desc: "Progressi fondamentali per deep venture." }
    },
    values: {
      title: "Principi Core",
      subtitle: "La Nostra Fondazione",
      focus: { title: "Focus Estremo", desc: "Eliminare il rumore per dedicarsi ai risultati critici." },
      partnership: { title: "Vera Partnership", desc: "Non siamo solo investitori, ma co-costruttori." },
      growth: { title: "Crescita Esponenziale", desc: "Massimizzare l'impatto attraverso soluzioni scalabili." },
      integrity: { title: "Integrità Incrollabile", desc: "Mantenere rigorosi standard etici e disciplina." }
    },
    impact: {
      companies: "AZIENDE",
      industries: "SETTORI",
      countries: "PAESI",
      teamMembers: "MEMBRI DEL TEAM",
      possibilities: "POSSIBILITÀ"
    },
    presence: {
      title: "PORTATA OPERATIVA",
      subtitle: "Progettato negli USA / Scalato Globalmente.",
      perspective: "Prospettiva Globale.",
      desc: "La nostra portata si estende attraverso i poli tecnologici, assicurandoci di essere sempre al centro dell'innovazione.",
      regions: ["NORD AMERICA", "EUROPA", "ASIA PACIFICO", "MEDIO ORIENTE"]
    },
    cta: {
      title: "Progetta il futuro con M&G.",
      subtitle: "Collabora con Noi",
      button: "Contattaci",
      copied: "Email Copiata!"
    },
    footer: {
      desc: "Una holding globale progettata per costruire, acquisire e scalare i sistemi che definiscono la prossima era industriale.",
      headquarters: "Sede Centrale",
      links: "Link Rapidi",
      legal: "LEGALE",
      privacy: "Privacy Policy",
      terms: "Termini di Servizio",
      initiatives: "Iniziative",
      subsidiaries: "Filiali",
      research: "Ricerca di Frontiera",
      realEstate: "Immobiliare",
      ventures: "Ventures",
      corporate: "Aziendale",
      aboutUs: "Chi Siamo",
      leadership: "Leadership",
      careers: "Carriera",
      press: "Press",
      contactText: "Contatti",
      phone: "+1 (302) 201-2840",
      rights: "Tutti i diritti riservati.",
      service: "Termini di Servizio"
    }
  },
  he: {
    header: {
      holdingCompany: "חברת האחזקות M&G",
      home: "בית",
      ecosystem: "אקוסיסטם",
      impact: "אימפקט",
      network: "רשת",
      contact: "צור קשר",
      est: "נוסד ב-2024"
    },
    hero: {
      precision: "דיוק.",
      vision: "חזון.",
      execution: "ביצוע.",
      scroll: "גלול לחקירה"
    },
    expansion: {
      title: "חברת אחזקות שבונה את העתיד.",
      subtitle: "אנחנו לא עוקבים אחר טרנדים בתעשייה; אנחנו מתכננים את התשתית שמאפשרת אותם. מונעים על ידי הון, בינה וביצוע."
    },
    philosophy: {
      title: "נקודת התכנסות",
      whoWeAre: "מי אנחנו",
      heading1: "אנחנו לא רק משקיעים בחברות.",
      heading2: "אנחנו מתכננים אקוסיסטם.",
      para1: "M&G היא חברת אחזקות גלובלית שנועדה לבנות, לרכוש ולהרחיב את המערכות שיגדירו את העידן התעשייתי הבא. עם מטה בארה\"ב ופעילות בשווקים בינלאומיים, אנחנו לא מגדירים את עצמנו כקורפורציה מסורתית.",
      para2: "אנחנו פועלים כאקוסיסטם מובנה של ארגונים שנועד להאיץ חדשנות בטכנולוגיה, רובוטיקה, תוכנה, נדל\"ן, בידור ומחקר פורץ דרך.",
      para3: "אנחנו מאמינים שהתעשיות כבר אינן עצמאיות; הן מתכנסות. ו-M&G קיימת כדי לפעול בנקודת ההתכנסות הזו.",
      para4: "כל חברה בתוך M&G מתפקדת באופן עצמאי, אך מועצמת על ידי בינה משותפת, יעילות הון וחזון ארוך טווח מאוחד. אנחנו לא בונים חברות בבידוד. אנחנו בונים רשת של יכולות מחוברות שנועדו לצמוח לאורך זמן.",
      para5: "מעבר לבנייה והרחבה של האקוסיסטם שלנו, אנו משקיעים ומחפשים באופן פעיל מיזמים חדשים, מייסדים מבטיחים ויזמים בשלבים מוקדמים עם פוטנציאל לעצב את העתיד. אנחנו קיימים כדי לתת לעסקים חדשים וליזמים חדשים את ההזדמנות להתרחב, לצמוח ולהתחרות בעידן השוק החדש הזה, שבו מהירות, בינה וביצוע מגדירים הצלחה.",
      para6: "אנו מאמינים שהדור הבא של חברות גלובליות לא יימצא בתוך המערכות המסורתיות, אלא יואץ באמצעות הון תואם, תשתית ותמיכה אסטרטגית. M&G ממצבת את עצמה כזרז הזה."
    },
    subsidiaries: {
      count: "20+ חברות בנות",
      network: "רשת גלובלית",
      capital: "הון תואם",
      growth: "צמיחה אסטרטגית",
      companyNames: {
        kids: "M&G ילדים",
        realEstate: "M&G נדל\"ן",
        research: "M&G מחקר",
        education: "M&G חינוך",
        foundation: "קרן M&G",
        lifeSciences: "חטיבת מדעי החיים M&G"
      }
    },
    industries: {
      title: "אקוסיסטם ליבה",
      subtitle: "הגדרה של הדור הבא",
      heading: "מפגש החדשנות.",
      software: { name: "תוכנה", desc: "מערכות אוטונומיות והנדסה ארגונית." },
      robotics: { name: "רובוטיקה", desc: "אוטומציה מתקדמת למשימות פיזיות." },
      gaming: { name: "גיימינג", desc: "טכנולוגיה אימרסיבית מהדור הבא." },
      realEstate: { name: "נדל\"ן", desc: "תשתית חכמה וחללי מגורים חכמים." },
      research: { name: "מחקר פורץ דרך", desc: "התקדמות בסיסית למיזמי עומק." }
    },
    values: {
      title: "עקרונות ליבה",
      subtitle: "הבסיס שלנו",
      focus: { title: "מיקוד קיצוני", desc: "ביטול רעשי רקע לטובת תוצאות קריטיות." },
      partnership: { title: "שותפות אמיתית", desc: "אנחנו לא רק משקיעים, אלא שותפים לבנייה." },
      growth: { title: "צמיחה אקספוננציאלית", desc: "מקסום אימפקט באמצעות פתרונות ניתנים להרחבה." },
      integrity: { title: "יושרה בלתי מתפשרת", desc: "שמירה על סטנדרטים אתיים ומשמעת מחמירה." }
    },
    impact: {
      companies: "חברות",
      industries: "תעשיות",
      countries: "מדינות",
      teamMembers: "חברי צוות",
      possibilities: "אפשרויות"
    },
    presence: {
      title: "נוכחות תפעולית",
      subtitle: "תוכנן בארה\"ב / הופץ גלובלית.",
      perspective: "פרספקטיבה גלובלית.",
      desc: "הנוכחות שלנו משתרעת לאורך מוקדים טכנולוגיים, ומבטיחה שאנחנו תמיד בלב החדשנות.",
      regions: ["צפון אמריקה", "אירופה", "אסיה פסיפיק", "המזרח התיכון"]
    },
    cta: {
      title: "תכנן את העתיד עם M&G.",
      subtitle: "שתף פעולה איתנו",
      button: "צור קשר",
      copied: "הכתובת הועתקה!"
    },
    footer: {
      desc: "חברת אחזקות גלובלית שנועדה לבנות, לרכוש ולהרחיב את המערכות שיגדירו את העידן התעשייתי הבא.",
      headquarters: "מטה החברה",
      links: "קישורים מהירים",
      legal: "משפטי",
      privacy: "מדיניות פרטיות",
      terms: "תנאי שימוש",
      initiatives: "יוזמות",
      subsidiaries: "חברות בנות",
      research: "מחקר פורץ דרך",
      realEstate: "נדל\"ן",
      ventures: "מיזמים",
      corporate: "תאגידי",
      aboutUs: "אודותינו",
      leadership: "הנהגה",
      careers: "קריירה",
      press: "עיתונות",
      contactText: "יצירת קשר",
      phone: "+1 (302) 201-2840",
      rights: "כל הזכויות שמורות.",
      service: "תנאי שימוש"
    }
  },
  ar: {
    header: {
      holdingCompany: "شركة إم آند جي القابضة",
      home: "الرئيسية",
      ecosystem: "النظام البيئي",
      impact: "التأثير",
      network: "الشبكة",
      contact: "اتصل بنا",
      est: "تأسست عام 2024"
    },
    hero: {
      precision: "دقة.",
      vision: "رؤية.",
      execution: "تنفيذ.",
      scroll: "مرر للاستكشاف"
    },
    expansion: {
      title: "شركة قابضة تبني المستقبل.",
      subtitle: "نحن لا نتبع اتجاهات الصناعة؛ نحن نصمم البنية التحتية التي تجعلها ممكنة. مدفوعون برأس المال والذكاء والتنفيذ."
    },
    philosophy: {
      title: "نقطة التقاء",
      whoWeAre: "من نحن",
      heading1: "نحن لا نستثمر فقط في الشركات.",
      heading2: "نحن نصمم الأنظمة البيئية.",
      para1: "إم آند جي هي شركة قابضة عالمية مصممة لبناء والاستحواذ وتوسيع الأنظمة التي ستحدد العصر الصناعي القادم. يقع مقرها الرئيسي في الولايات المتحدة وتعمل في الأسواق الدولية، ولا نضع أنفسنا كتكتل تقليدي.",
      para2: "نحن نعمل كنظام بيئي منظم للمؤسسات المصممة لتسريع الابتكار في التكنولوجيا والروبوتات والبرمجيات والعقارات والترفيه والأبحاث الحدودية.",
      para3: "نحن نؤمن بأن الصناعات لم تعد مستقلة؛ إنها تتقارب. وتتواجد إم آند جي للعمل في نقطة التقارب تلك.",
      para4: "تعمل كل شركة داخل إم آند جي بشكل مستقل، ولكن يتم تعزيزها من خلال الذكاء المشترك وكفاءة رأس المال والرؤية الموحدة طويلة المدى. نحن لا نبني شركات في عزلة. نحن نبني شبكة من القدرات المترابطة المصممة للتضاعف بمرور الوقت.",
      para5: "بالإضافة إلى بناء وتوسيع نظامنا البيئي الخاص، فإننا نستثمر بنشاط ونبحث عن مشاريع جديدة ومؤسسين ناشئين ورواد أعمال في مراحلهم المبكرة لديهم القدرة على تشكيل المستقبل. نحن موجودون لمنح الشركات الجديدة ورواد الأعمال الجدد الفرصة للتوسع والنمو والمنافسة في عصر السوق الجديد هذا، حيث يحدد السرعة والذكاء والتنفيذ النجاح.",
      para6: "نحن نؤمن بأن الجيل القادم من الشركات العالمية لن يتم العثور عليه داخل الأنظمة التقليدية، بل سيتم تسريعه من خلال رأس المال المتوافق والبنية التحتية والدعم الاستراتيجي. تضع إم آند جي نفسها كحافز لذلك."
    },
    subsidiaries: {
      count: "أكثر من 20 شركة تابعة",
      network: "شبكة عالمية",
      capital: "رأس مال متوافق",
      growth: "نمو استراتيجي",
      companyNames: {
        kids: "إم آند جي للأطفال",
        realEstate: "إم آند جي للعقارات",
        research: "إم آند جي للأبحاث",
        education: "إم آند جي للتعليم",
        foundation: "مؤسسة إم آند جي",
        lifeSciences: "قسم إم آند جي لعلوم الحياة"
      }
    },
    industries: {
      title: "الأنظمة البيئية الأساسية",
      subtitle: "تحديد الجيل القادم",
      heading: "ملتقى الابتكار.",
      software: { name: "البرمجيات", desc: "الأنظمة الذاتية وهندسة المؤسسات." },
      robotics: { name: "الروبوتات", desc: "أتمتة متقدمة للمهام البدنية." },
      gaming: { name: "الألعاب", desc: "تكنولوجيا غامرة من الجيل القادم." },
      realEstate: { name: "العقارات", desc: "البنية التحتية الذكية ومساحات المعيشة الذكية." },
      research: { name: "أبحاث الحدود", desc: "تقدم أساسي للمشاريع العميقة." }
    },
    values: {
      title: "المبادئ الأساسية",
      subtitle: "أساسنا",
      focus: { title: "تركز شديد", desc: "إزالة الضوضاء للتفاني في النتائج الحاسمة." },
      partnership: { title: "شراكة حقيقية", desc: "نحن لسنا مجرد مستثمرين، بل بناة مشاركون." },
      growth: { title: "نمو أسي", desc: "تعظيم التأثير من خلال حلول قابلة للتوسع." },
      integrity: { title: "نزاهة لا تتزعزع", desc: "الحفاظ على معايير أخلاقية وانضباط صارم." }
    },
    impact: {
      companies: "الشركات",
      industries: "الصناعات",
      countries: "الدول",
      teamMembers: "أعضاء الفريق",
      possibilities: "إمكانيات"
    },
    presence: {
      title: "النطاق التشغيلي",
      subtitle: "صمم في الولايات المتحدة / توسع عالميًا.",
      perspective: "منظور عالمي.",
      desc: "يمتد نطاقنا عبر المراكز التكنولوجية، مما يضمن أننا دائمًا في قلب الابتكار.",
      regions: ["أمريكا الشمالية", "أوروبا", "آسيا والمحيط الهادئ", "الشرق الأوسط"]
    },
    cta: {
      title: "صمم المستقبل مع إم آند جي.",
      subtitle: "شاركنا",
      button: "اتصل بنا",
      copied: "تم نسخ البريد!"
    },
    footer: {
      desc: "شركة قابضة عالمية مصممة لبناء والاستحواذ وتوسيع الأنظمة التي تحدد الحقبة التالية من الصناعة.",
      headquarters: "المقر الرئيسي",
      links: "روابط سريعة",
      legal: "قانوني",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      initiatives: "المبادرات",
      subsidiaries: "الشركات التابعة",
      research: "أبحاث الحدود",
      realEstate: "العقارات",
      ventures: "المشاريع",
      corporate: "الشركة",
      aboutUs: "عن الشركة",
      leadership: "القيادة",
      careers: "الوظائف",
      press: "الصحافة",
      contactText: "الاتصال",
      phone: "+1 (302) 201-2840",
      rights: "جميع الحقوق محفوظة.",
      service: "شروط الخدمة"
    }
  }
};

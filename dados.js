//Esse é o banco de dados da aplicação
let dados = [
    {
        TipoDeAtaque: "Phishing",
        Descricao: "Phishing é um tipo de ataque cibernético onde os criminosos tentam enganar você para que revele informações pessoais confidenciais, como senhas, números de cartão de crédito ou dados bancários",
        MedidasDeSeguranca: "Para se proteger de ataques de phishing, é crucial manter a desconfiança em e-mails não solicitados, evitar clicar em links desconhecidos e não fornecer informações pessoais por e-mail ou em sites não confiáveis. Além disso, é fundamental manter seus softwares atualizados, utilizar senhas fortes e únicas, habilitar a autenticação de dois fatores e estar atento a redes Wi-Fi públicas.",
        LinkParaSaberMais: "https://www.ibm.com/br-pt/topics/phishing",
    },
    {
        TipoDeAtaque: "Ransomware",
        Descricao: "O ransomware é um tipo de malware que criptografa os arquivos de um sistema, tornando-os inacessíveis. Os criminosos exigem um pagamento em troca da chave de descriptografia",
        MedidasDeSeguranca: "Faça backups regulares dos seus dados, mantenha seus softwares atualizados, evite abrir arquivos de fontes desconhecidas e não clique em links suspeitos.",
        LinkParaSaberMais: "https://www.ibm.com/br-pt/topics/ransomware"
    },
    {
        TipoDeAtaque: "Ataque DDoS",
        Descricao: "Um ataque DDoS (Distributed Denial of Service) sobrecarrega um servidor ou rede com tráfego, tornando-o indisponível para os usuários legítimos",
        MedidasDeSeguranca: "Implemente soluções de proteção contra DDoS, monitore o tráfego da rede e tenha um plano de recuperação de desastres.",
        LinkParaSaberMais: "https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/"
    },
    {
        TipoDeAtaque: "Malware",
        Descricao: "Malware é um termo genérico para qualquer software projetado para causar danos a um sistema. Vírus, worms e trojans são exemplos de malware",
        MedidasDeSeguranca: "Instale um bom antivírus, mantenha seu sistema operacional e aplicativos atualizados, evite abrir anexos de e-mails suspeitos e seja cauteloso ao baixar arquivos da internet.",
        LinkParaSaberMais: "https://www.ibm.com/br-pt/topics/malware"
    },
    {
        TipoDeAtaque: "Engenharia Social",
        Descricao: "A engenharia social manipula pessoas para que divulguem informações confidenciais ou executem ações que comprometam a segurança. Phishing é um tipo de engenharia social, mas existem outras técnicas como pretexting, baiting e spear phishing",
        MedidasDeSeguranca: "Seja cético com solicitações inesperadas, verifique a identidade do remetente antes de responder, não compartilhe informações pessoais por telefone ou e-mail, e participe de treinamentos de conscientização em segurança.",
        LinkParaSaberMais: "https://www.ibm.com/br-pt/topics/social-engineering"
    },
    {
        TipoDeAtaque: "Injeção SQL",
        Descricao: "A injeção SQL permite que um atacante insira comandos SQL maliciosos em um campo de entrada de um aplicativo web para manipular o banco de dados. Isso pode levar à exfiltração de dados, modificação de dados ou até mesmo à execução de comandos no sistema operacional",
        MedidasDeSeguranca: "Utilize parâmetros preparados, escape caracteres especiais, valide e sanitize todas as entradas do usuário, e mantenha seus sistemas e aplicativos atualizados.",
        LinkParaSaberMais: "https://www.cloudflare.com/pt-br/learning/security/threats/sql-injection/"
    },
    {
        TipoDeAtaque: "XSS (Cross-Site Scripting)",
        Descricao: "O XSS permite que um atacante injete scripts maliciosos em páginas web confiáveis. Quando uma vítima acessa a página, o script é executado, permitindo ao atacante roubar cookies, redirecionar o usuário para sites maliciosos ou executar outras ações maliciosas",
        MedidasDeSeguranca: "Utilize mecanismos de escape para caracteres especiais, valide e sanitize todas as entradas do usuário, e implemente um Content Security Policy (CSP).",
        LinkParaSaberMais: "https://www.kaspersky.com.br/resource-center/definitions/what-is-a-cross-site-scripting-attack"
    },
    {
        TipoDeAtaque: "Ataques de Passwords",
        Descricao: "Ataques de força bruta, ataques de dicionário e ataques de spray de senha são técnicas utilizadas para adivinhar as senhas dos usuários. As senhas fracas e reutilizadas são alvos fáceis",
        MedidasDeSeguranca: "Utilize senhas fortes e únicas para cada conta, habilite a autenticação de dois fatores, e evite usar senhas em sites de baixa reputação.",
        LinkParaSaberMais: "https://www.kaspersky.com.br/resource-center/definitions/what-is-password-spraying"
    },
    {
        TipoDeAtaque: "Ataques de Cadeia de Suprimentos",
        Descricao: "Ataques de cadeia de suprimentos visam comprometer softwares de terceiros que são utilizados por uma organização. Ataques como o SolarWinds são exemplos desse tipo de ameaça",
        MedidasDeSeguranca: "Verifique a reputação dos fornecedores, mantenha seus softwares atualizados, e implemente um processo de verificação rigoroso para novos softwares.",
        LinkParaSaberMais: "https://www.cloudflare.com/pt-br/learning/security/what-is-a-supply-chain-attack/"
    },
    {
        TipoDeAtaque: "Ataques a Contêineres",
        Descricao: "Com o crescimento do uso de contêineres, os ataques a esses ambientes se tornaram mais comuns. Ataques podem explorar vulnerabilidades nos próprios contêineres ou na plataforma de orquestração",
        MedidasDeSeguranca: "Utilize imagens de contêineres confiáveis, mantenha seus contêineres e plataforma de orquestração atualizados, e implemente controles de acesso rigorosos.",
        LinkParaSaberMais: "https://www.trendmicro.com/pt_br/what-is/container-security.html"
    },
    {
        TipoDeAtaque: "Ataques a IoT",
        Descricao: "Ataques que exploram vulnerabilidades em dispositivos da Internet das Coisas (IoT), como câmeras de segurança, termostatos inteligentes e outros dispositivos conectados à internet",
        MedidasDeSeguranca: "Utilize senhas fortes e únicas para cada dispositivo, mantenha os dispositivos atualizados, segure suas redes Wi-Fi e limite o acesso remoto.",
        LinkParaSaberMais: "https://www.cloudflare.com/pt-br/learning/security/glossary/iot-security/"
    },
    {
        TipoDeAtaque: "Ataques a Nuvem",
        Descricao: "Ataques que visam serviços em nuvem, explorando vulnerabilidades nas configurações, interfaces de programação de aplicativos (APIs) e outras áreas",
        MedidasDeSeguranca: "Utilize provedores de nuvem confiáveis, configure seus serviços de nuvem de forma segura, monitore o acesso aos seus recursos em nuvem e implemente controles de acesso baseados em papéis.",
        LinkParaSaberMais: "https://www.cloudflare.com/pt-br/learning/cloud/what-is-cloud-security/"
    },
    {
        TipoDeAtaque: "Ataques a APIs",
        Descricao: "Ataques que exploram vulnerabilidades em APIs, como injeção, autenticação fraca e vazamento de dados.",
        MedidasDeSeguranca: "Valide e sanitize todas as entradas, implemente autenticação forte, monitore o tráfego da API e mantenha a documentação da API atualizada",
        LinkParaSaberMais: "https://www.cloudflare.com/pt-br/learning/security/api/what-is-api-security/"
    },
    {
        TipoDeAtaque: "Ataques de Elevação de Privilégios",
        Descricao: "Ataques que visam obter acesso a recursos com privilégios mais elevados do que os concedidos ao usuário ou processo",
        MedidasDeSeguranca: "Implemente o princípio do menor privilégio, mantenha seus sistemas operacionais e aplicativos atualizados e utilize ferramentas de análise de vulnerabilidades.",
        LinkParaSaberMais: "https://blog.starti.com.br/escalonamento-de-privilegios/"
    }
];

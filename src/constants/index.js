import {
  portfolio,
  publiclab,
  isen,
  esiac,
  global,
  fortinet,
  kfc,
  ad,
  browsermania,
  dock,
  docker,
  track,
  quick,
  cloud,
  othelo,
  blog,
  owasp, learn

} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiVisualstudiocode,
  SiGit,
  SiSolidity,
  SiChartdotjs,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiGnubash,
  SiPostgresql,
  SiSqlite,
  SiAngularjs,
  SiJetbrains,
  SiWireshark,
  SiKalilinux,
  SiOwasp,
  SiKubernetes,
  SiWireguard,
  SiVercel,
  SiGrafana,
  SiProxmox,
  SiRust,
  SiWebrtc,
  SiCyberdefenders,
  SiDocker, SiLocal, SiShell, SiLeaflet, SiRootme, SiTypescript, SiCss3, SiPhp
} from "react-icons/si";

import {
  FaBlog,
  FaBlogger,
  FaHardHat, FaJenkins, FaNodeJs,
  FaRust, FaVuejs
} from "react-icons/fa";

import {
  IoIosNotificationsOutline
} from "react-icons/io";

import {
  FaGolang
} from "react-icons/fa6";

import {DiCss3, DiDebian, DiJava, DiMsqlServer, DiRuby} from "react-icons/di";
import {BiLogoDocker, BiRocket} from "react-icons/bi";
import {BsFuelPumpDiesel, BsFuelPumpDieselFill} from "react-icons/bs";
import {VscGithubAction} from "react-icons/vsc";
import {GiFirewall} from "react-icons/gi";


export const dockDockGoLink = import.meta.env.VITE_DOCKDOCK_GO_LINK;
export const resumeLink = "";
export const repoLink = "https://github.com/sony-level";

export const callToAction = "https://www.linkedin.com/in/level-sony/";

export const navLinks = [
  {
    id: "skills",
    title: "Compétences et expérience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Réalisations",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "openSource",
    title: "Open Source",
  },
  {
    id: "Blog",
    title: "Blog",
  },
  {
    id: "extraCurricular",
    title: "Extrascolaire",
  },
  {
    id: "contactMe",
    title: "Me Contacter",
  },
];

export const educationList = [
  {
    id: "education-1",
    icon: isen,
    title: "ISEN Yncréa Méditerranée de Toulon",
    degree: "Diplome d'ingénieur Informatique et électronique, spécialisation Cybersécurité.",
    duration: "Septembre 2022 - Novembre 2026",
    content1: "Majeure: Cybersécurité des systèmes, réseaux, et applications",
    content2: "Mineure : Gestion, l'investigation et le développement sécurisé",
  },
  {
    id: "education-2",
    icon: cloud,
    title: "Google Cloud Skills Boost",
    degree: "Google Cloud Certifications",
    duration: "Octobre 2024",
    content1: "Développement des compétences en Cloud Computing et Intelligence Artificielle (IA)",
    content2: "Sécurité Cloud et optimisation des compétences d'intégration de l'IA dans le cadre du développement en cybersécurité",
  },
  {
    id: "education-3",
    icon: fortinet,
    title: " Fortinet training Institute",
    degree: "Certification Cybersecurité",
    duration: "Avril 2024",
    content1: "Fortinet Certified Associate Cybersecurity",
    content2: "Fortinet Certified Fundamentals Cybersecurity",
  },
  {
    id: "education-4",
    icon: esiac,
    title: "Ecole supérieure d'ingenieurs et de Manaegement d'Afrique Centrale",
    degree: "Classe Préparatoire Intégrée - Mathématiques et Physique",
    duration: "Septembre 2020 - Juin 2022",
    content1: "Formation intensive en mathématiques, physique et développement de compétences en ingénierie.",
  },
];

export const achievements = [
  {
    id: "a-1",
    icon: blog,
    event: "Blog sur la Cybersécurité",
    position: "Blogueur en herbe",
    content1: "Début de mon parcours en écriture sur la cybersécurité, partageant des connaissances et des expériences.",
    content2: "Articles sur des sujets variés : sécurité des réseaux, meilleures pratiques, et analyses de cas.",
    content3: "Objectif : Apprendre , sensibiliser et éduquer sur les enjeux de la cybersécurité.",
    article: "https://blogcyber.level.ovh/",
  },
  {
    id: "a-2",
    icon: isen,
    event: "GarageWeek 2023 | En partenariat avec le RCT de Toulon",
    position: "Projet Etudiant de fin d'année",
    content1: "",
    content2: "Prototype d'entraînement de Melée pour joueurs de rugby",
    content3: "Développé en 9 jours par des étudiants de l'ISEN Toulon",
    article: "https://isen-mediterranee.fr/le-rct-sinvite-a-la-8e-garageweek-de-lisen/",
    project: "https://www.instagram.com/reel/CtetG-7r43I/?igsh=MTF1Z3kwZmlmd3B1cw==",
    youtube: "https://www.instagram.com/reel/CtZENy1McNT/?igsh=MXF1ajlxcWlxNXdvNQ==",
  },
  {
    id: "a-3",
    icon: othelo,
    event: "Othello Game",
    position: "Equipe de trois etudiants",
    content1: "Développé en C, ce jeu Othello permet une expérience de jeu classique sur une interface simple..",
    content2: "Implémente des règles authentiques du jeu Othello, avec des fonctionnalités de sauvegarde et de chargement.",
    content3: "Inclus des fonctionnalités pour le mode joueur contre joueur et joueur contre ordinateur.",
    github: "https://github.com/sony-level/Othello_Game",
  },
];


export const skills = [
  {
    title: "Cybersécurité",
    items: [
      {
        id: "c-1",
        icon: SiWireshark,
        name: "Wireshark",
      },
      {
        id: "c-2",
        icon: SiOwasp,
        name: "Owasp",
      },
      {
        id: "c-3",
        icon: SiWireguard,
        name: "Wireguaard",
      },
      {
        id: "c-4",
        icon: GiFirewall,
        name: "Firewall",
      },
      {
        id: "c-5",
        icon: SiKalilinux,
        name: "Kali Linux",
      },
    ],
  },
    {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: SiGnubash,
        name: "Bash",
      },
      {
        id: "pl-2",
        icon: FaRust,
        name: "Rust",
      },
      {
        id: "pl-3",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-4",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-5",
        icon: SiSqlite,
        name: "SQL",
      },

      {
        id: "pl-6",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-7",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-8",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-9",
        icon: DiCss3,
        name: "CSS",
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiAngularjs,
        name: "Angular",
      },
      {
        id: "f-2",
        icon: SiNextdotjs,
        name: "Next.js",
      },
      {
        id: "f-3",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-4",
        icon: FaVuejs,
        name: "Vue.js",
      },
      {
        id: "f-5",
        icon: BiRocket,
        name: "Rocket",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: DiDebian,
        name: "Debian",
      },
      {
        id: "t-2",
        icon: BiLogoDocker,
        name: "Docker",
      },
      {
        id: "t-3",
        icon: SiKubernetes,
        name: "NKubernetes",
      },
      {
        id: "t-4",
        icon: SiPostgresql,
        name: "Postgresql",
      },
      {
        id: "t-5",
        icon: SiJetbrains,
        name: "Jetbrains",
      },
      {
        id: "t-6",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-7",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-8",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-9",
        icon: VscGithubAction,
        name: "Github Actions",
      },
      {
        id: "t-10",
        icon: FaJenkins,
        name: "Jenkins",
      },
      {
        id: "t-11",
        icon: AiOutlineGitlab,
        name: "Gitlab",
      },
      {
        id: "t-12",
        icon: SiVercel,
        name: "Vercel",
      },
      {
        id: "t-13",
        icon: SiGrafana,
        name: "Grafana",
      },
      {
        id: "t-13",
        icon: SiProxmox,
        name: "Proxmox",
      },
    ],
  },
];

export const experiences = [
  {
    organisation: "Hackvens , Pentesting conferences and CTF by Advens",
    logo: ad,
    link: "https://hackvens.fr/2023/",
    positions: [
      {
        title: "Participant - Bug Bounty et Capture The Flag (CTF)",
        duration: "Octobre 2023",
        city: "Lyon , France",
        content: [
          {
            text: "Participation active aux programmes de Bug Bounty et aux défis Capture The Flag (CTF) organisés par ADVENS pour la sécurisation des systèmes industriels.",
            link: ""
          },
          {
            text: "J'ai découvert l'importance de revoir les configurations par défaut de Kubernetes, souvent insuffisantes pour garantir une sécurité optimale.",
            link: ""
          },
          {
            text: "Expérience avec des outils spécialisés pour les objets connectés (IoT), en particulier pour l'analyse des logiciels embarqués et des protocoles de communication.",
            link: ""
          },
          {
            text: "Travaillant en équipe, nous avons partagé des idées et des stratégies pour relever les défis CTF. Ce travail d'équipe a permis de combiner des compétences en programmation, analyse de vulnérabilités, et exploitation de failles.",
            link: ""
          }
        ],
      },
    ],
  },
  {
    organisation: "Global Spes, Cameroun",
    logo: global,
    link: "",
    positions: [
      {
        title: "Stagiaire Imformatique",
        duration: "Jul 2021 - Septembre 2021",
        city: "Douala, Cameroun",
        content: [
          {
            text: "Installation et mise à jour des systèmes d'exploitation (Windows) et des applications professionnelles",
            link: "",
          },
          {
            text: "Configuration de routeurs, switches et serveurs pour la mise en place de réseaux locaux dans les entreprises clientes.",
            link: ""
          },
          {
            text: "Assistance aux utilisateurs pour la résolution des problèmes informatiques et la configuration de périphériques.",
            link: ""
          }
        ],
      },
      {
        title: "Stagiaire Imformatique ",
        duration: "Mai 2020 - Août 2020",
        city: "Douala, Cameroun",
        content: [
          {
            text: "Participation à la préparation et animation de formations sur les logiciels Microsoft Office (Word, Excel, PowerPoint, Publisher) pour utilisateurs débutants et intermédiaires.",
            link: "",
          },
          {
            text: "Résolution des problèmes réseau (connexion, partages de fichiers, accès distant) et assistance aux utilisateurs pour la configuration de périphériques réseau.",
            link: ""
          }
        ],
      },
    ],
  },

];

export const openSourceContributions = [
  {
    id: "os-1",
    organisation: "Diesel",
    logo: publiclab,
    repo: "diesel",
    type: "issue",
    status: "resolved",
    title:
      "Question sur l'implémentation de ToSql et FromSql pour UserRoleMapping dans Diesel",
    link: "https://github.com/diesel-rs/diesel/discussions/4086",
    number: "#4086",
    date: "juin 27 2024",
    linesAdded: "",
    linesDeleted: "",
  },
];



export const projects = [
  {
    id: "project-1",
    title: "BrowserMania",
    github: "https://github.com/BrowserMania",
    link: "https://browsermania.github.io/",
    image: browsermania,
    content: "BrowserMania est un projet de Master 1 en cours de développement, visant à résoudre les problèmes de sécurité liés à la navigation web. Le projet utilise des environnements de navigation isolés pour protéger les utilisateurs contre les menaces en ligne, tout en assurant une expérience fluide via WebRTC.",

    contecnt: {
      introduction: "BrowserMania est un projet de Master 1 en cours de développement, visant à résoudre les problèmes de sécurité liés à la navigation web. Le projet utilise des environnements de navigation isolés pour protéger les utilisateurs contre les menaces en ligne, tout en assurant une expérience fluide via WebRTC.",

      problem_statement: "Les menaces basées sur le web, telles que les logiciels malveillants, le phishing et les attaques réseau, exposent les utilisateurs à des risques lors de leur navigation. Les systèmes de défense traditionnels, comme les antivirus, peuvent ne pas suffire à empêcher ces menaces d'affecter les dispositifs des utilisateurs.",

      solution: "BrowserMania résout ce problème en isolant chaque session de navigation dans des environnements bac à sable sécurisés, orchestrés par Kubernetes. Ces environnements empêchent tout contenu malveillant d'atteindre le périphérique de l'utilisateur, tout en diffusant le navigateur en direct sur la machine de l'utilisateur via WebRTC.",

      key_features: [
        "Isolation des sessions de navigation web pour une sécurité renforcée",
        "Utilisation de Kubernetes pour la gestion et l'orchestration de plusieurs instances de navigateurs en bac à sable",
        "Streaming en temps réel des sessions de navigation via WebRTC pour une expérience utilisateur fluide",
        "Prévention des menaces web telles que les logiciels malveillants et le phishing"
      ],

      target_audience: "BrowserMania est destiné aux entreprises et aux particuliers soucieux de la sécurité en ligne, offrant une solution robuste pour se protéger des menaces web tout en maintenant une navigation fluide et réactive.",

      future_developments: "Le projet envisage d'ajouter des fonctionnalités telles que l'amélioration de l'intégration de WebRTC, la gestion avancée des environnements de bac à sable, et des options de personnalisation pour les utilisateurs professionnels."
    },
    stack: [
      {
        id: "icon-6",
        icon: SiCyberdefenders,
        name: "Cyber By Design"
      },
      {
        id: "icon-1",
        icon: SiKubernetes,
        name: "Kubernetes"
      },
      {
        id: "icon-2",
        icon: BiLogoDocker,
        name: "Docker"
      },
      {
        id: "icon-3",
        icon: SiOpenai,
        name: "OpenAI"
      },
      {
        id: "icon-4",
        icon: SiRust,
        name: "Rust"
      },
      {
        id: "icon-5",
        icon: SiWebrtc,
        name: "Webrtc"
      },
      {
        id: "icon-5",
        icon: SiPostgresql,
        name: "Postgresql"
      },
      {
        id: "icon-6",
        icon: SiReact,
        name: "React"
      },
    ],
  },
  {
    id: "project-2",
    title: "Docker host Manager",
    github: "https://github.com/sony-level/DockerManager",
    link: "",
    image: docker,
    content:
      "Le Tableau de bord Docker Manager est une interface graphique simple pour gérer vos conteneurs Docker en local. Ce projet vise à offrir une gestion facile et rapide des conteneurs sans passer par le terminal, simplifiant les actions courantes pour les utilisateurs de Docker.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: FaNodeJs,
        name: "Node.Js"
      },
      {
        id: "icon-3",
        icon: SiJavascript,
        name: "Javascript"
      },
      {
        id: "icon-4",
        icon: SiDocker,
        name: "Docker"
      },
      {
        id: "icon-5",
        icon: SiShell,
        name: "Shell"
      },
      {
        id: "icon-6",
        icon: SiLocal,
        name: "local"
      },
    ],
  },
  {
    id: "project-3",
    title: "DockDock-Go",
    github: "https://github.com/Dockdock-Go",
    link: dockDockGoLink ,
    image: dock,
    content:
      "Solution développée en Rust, qui permet la gestion et l'analyse des artefacts Docker via Kubernetes et Harbor. Il vise à automatiser et sécuriser l'analyse statique et dynamique des images Docker pour détecter les vulnérabilités et les malwares, tout en permettant une gestion centralisée des conteneurs et artefacts.",
    stack: [
      {
        id: "icon-1",
        icon: SiRust,
        name: "Rust"
      },
      {
        id: "icon-3",
        icon: SiDocker,
        name: "Docker"
      },
      {
        id: "icon-4",
        icon: FaJenkins,
        name: "Jenkins"
      },
      {
        id: "icon-5",
        icon: SiAngularjs,
        name: "Angular Js"
      },
      {
        id: "icon-6",
        icon: SiProxmox,
        name: "Proxmox"
      },
      {
        id: "icon-7",
        icon: SiKubernetes,
        name: "kubernetes",
      },
      {
        id: "icon-8",
        icon: SiPostgresql,
        name: "Postgresql"
      },
    ],
  },
  {
    id: "project-4",
    title: "Track IP",
    github: "https://github.com/sony-level/Track-IP",
    link: "https://trackip.level-sony.fr/",
    image: track,
    content:
      "Application web permettant de récupérer des informations détaillées sur une adresse IP, telles que l'emplacement géographique, le fuseau horaire, et le fournisseur d'accès internet (ISP), avec une visualisation sur une carte.",
    stack: [
      {
        id: "icon-1",
        icon: SiLeaflet,
        name: "Leaflet.js"
      },
      {
        id: "icon-2",
        icon: SiBootstrap,
        name: "Bootstrap"
      },
      {
        id: "icon-3",
        icon: DiMsqlServer,
        name: "MS Sql Server"
      },
      {
        id: "icon-4",
        icon: SiJquery,
        name: "jQuery"
      },
      {
        id: "icon-5",
        icon: SiTwilio,
        name: "Twillio"
      },
    ],
  },
  {
    id: "project-5",
    title: "Quick Mail",
    github: "https://github.com/sony-level/QuickMail",
    link: "https://quickmail.level-sony.fr/",
    image: quick,
    content:
      "Application web générateur d’e-mails temporaires pour votre pays protéger la vie privée et vous la évimate les spams de vos activités en ligne.",
    stack: [
      {
        id: "icon-1",
        icon: SiJavascript,
        name: "Javascript"
      },
      {
        id: "icon-2",
        icon: SiTypescript,
        name: "Typescript"
      },
      {
        id: "icon-3",
        icon: SiCss3,
        name: "CSS"
      },
    ],
  },
  {
    id: "project-6",
    title: "Owasp 10",
    github: "https://github.com/sony-level/OWASP-10",
    link: "",
    image: owasp,
    content:
      " Application web de démonstration de quelques ctf pour les 10 principales vulnérabilités de l'OWASP, avec des exemples .",
    stack: [
      {
        id: "icon-1",
        icon: SiDocker,
        name: "Docker"
      },
      {
        id: "icon-2",
        icon: SiCss3,
        name: "CSS"
      },
      {
        id: "icon-3",
        icon: SiPhp,
        name: "Php"
      },

      {
        id: "icon-3",
        icon: SiSqlite,
        name: "Sql"
      },
    ],
  },

  {
    id: "project-10",
    title: "Portfolio",
    github: "https://github.com/sony-level/Portfolio",
    link: "https://level-sony.fr/",
    image: portfolio,
    content: "",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "Tailwind CSS"
      },
      {
        id: "icon-3",
        icon: AiFillHtml5,
        name: "HTML"
      },
    ],
  },
];

export const blogPosts = [
  {
    id: "post-1",
    title: "Une plongée dans la cybersécurité et la programmation à travers mes propres yeux",
    link: "https://blogcyber.level.ovh/a-travers-mes-propres-yeux/",
    date: new Date().toLocaleDateString(),
    image: learn,
    tags: [
      {
        id: "tag-1",
        name: "Cybersécurité"
      },
      {
        id: "tag-2",
        name: "Vision"
      },
      {
        id: "tag-3",
        name: "CyberSavvy"
      },
    ],
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "3+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

export const extraCurricular = [
  {
    organisation: "Kfc Ollioules",
    title: "Equipier Polyvalent , Job etudiant",
    duration: "juin 2022 - Present",
    city: "Ollioules, France",
    content: [
      {
        text: "Coordination de la préparation et livraison des commandes pour garantir efficacité et satisfaction client, avec jusqu'à 150+ commandes par jour et 300+ lors des rushs ",
        link: "",
      },
      {
        text: "Accueil et gestion proactive des demandes clients, avec un focus sur la résolution rapide des réclamations.",
        link: "",
      },
    ],
    logo: kfc,
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/level-sony",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/sony-level",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:crsony@proton.me",
  },
  {
    id: "social-media-4",
    icon: AiOutlineTwitter,
    link: "https://x.com/sony_level",
  },
  {
    id: "social-media-5",
    icon: AiOutlineGitlab,
    link: "https://gitlab.com/sonydilane",
  },
  {
    id: "social-media-6",
    icon: FaBlog,
    link: "https://blogcyber.level.ovh/",
  },{
    id: "social-media-6",
    icon: SiRootme,
    link: "https://www.root-me.org/ony?lang=fr#4d2697c87d25e98e5347e0a51714b0ee",
  },
];

export const aboutMe = {
    name: "Level M.",
    tagLine: " Étudiant en Master Cybersécurité | ex-Stagiaire @Global spes | Futur Ingénieur Informatique | Passionné par la Sécurité Informatique & du DevOps| Participe à des CTFs et Bug Bounty |",
    intro: "Futur ingénieur informatique spécialisé en cybersécurité, avec une expérience diversifiée en développement et programmation en autodidacte. En quête permanente de nouveaux défis techniques pour perfectionner mes compétences."
}

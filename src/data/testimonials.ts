export interface Testimonial {
  name: string;
  title: string;
  company: string;
  text: string;
  date?: string;
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    name: "Leonardo Sandoval",
    title: "IT Digital Project Manager",
    company: "Lagardère Travel Retail / Duty Free Global",
    text: "Julien ne se contente pas d'enseigner la théorie du Product Owner, il donne les clés pour réussir concrètement. J'ai été marqué par sa maîtrise du sujet et surtout par sa capacité à rendre l'Agilité accessible et flexible. C'est un formateur très pédagogue qui sait rendre ses sessions vivantes et interactives.",
    date: "17 décembre 2025",
    featured: true,
  },
  {
    name: "Camille Raaberg",
    title: "Product Owner",
    company: "Lagardère Travel Retail",
    text: "J'ai eu la chance de suivre une formation Product Owner animée par Julien, et j'en ressors avec des clés concrètes, directement applicables dans mon quotidien. Julien maîtrise parfaitement son sujet autour du produit et sait surtout les transmettre avec beaucoup de pragmatisme, sans dogmatisme.",
    date: "15 décembre 2025",
    featured: true,
  },
  {
    name: "Claire Morell Grisolia",
    title: "Directeur Marketing Communication & Influence",
    company: "Randstad France",
    text: "Julien a accompagné mes équipes en tant que Product Manager d'un site web majeur du Groupe Randstad France pendant plus d'un an pour réaliser une refonte totale. A la méthodologie et la rigueur impeccable dont il a fait preuve, s'ajoute le plaisir d'avoir une personnalité aussi sympathique. Il sait embarquer les différentes parties prenantes et sait faire passer les messages difficiles avec tact et délicatesse.",
    date: "3 juin 2022",
    featured: true,
  },
  {
    name: "Olivier Arbey",
    title: "Responsable sponsoring",
    company: "Interim médical",
    text: "J'ai eu la chance de travailler avec Julien pendant 1 an sur la refonte complète d'un site web dédié au recrutement d'intérimaire dans le domaine médical. Il s'est très vite adapté à nos problématiques et a su trouver les bonnes solutions. Facilitateur méthodique, vous pouvez lui faire confiance que ce soit sur la mise en place et l'animation de workshop ou dans la gestion de projet globale.",
    date: "16 octobre 2020",
    featured: true,
  },
  {
    name: "Stéphane Macé",
    title: "Directeur Marketing",
    company: "Carac",
    text: "Julien est intervenu comme Product Owner sur le projet Extranet Client. Il a su rapidement s'adapter au contexte et aux différents intervenants Métiers et MOE. Grâce à sa ténacité et à son sens de la communication, nous avons pu mettre à disposition des clients Carac un service de qualité répondant aux besoins.",
    date: "11 décembre 2018",
    featured: false,
  },
  {
    name: "Gaëtan Alzieu",
    title: "SEO/GEO Specialist | Search, AI & Automation",
    company: "Anciens collègues",
    text: "Julien est motivé et motivant. Il gère des projets complexes en étant à l'écoute pour tirer partie des compétences de chacun. Il synthétise et organise de telle sorte que le projet paraît simple et que le travail collectif avance vite. C'est un plaisir de bosser avec lui !",
    date: "13 octobre 2020",
    featured: false,
  },
  {
    name: "Yann Delacôte",
    title: "Consultant",
    company: "Code Handler",
    text: "J'ai eu la chance d'avoir Julien en tant que PO pendant plus d'un an et ce fut une expérience très plaisante. Ce qui m'a le plus marqué sont ses capacités d'adaptation et de compréhension, aussi bien au niveau du contexte que de ses interlocuteurs. Peu importe les conditions, il est toujours prêt à relever les défis et aller de l'avant.",
    date: "11 septembre 2019",
    featured: false,
  },
  {
    name: "Christophe Pajot",
    title: "Fullstack .Net developer",
    company: "Ancien collègue",
    text: "J'ai eu le plaisir de collaborer avec Julien pendant 2 ans, dans le cadre d'un projet agile où il était le product owner. J'ai été impressionné par sa capacité à s'adapter au contexte, à le maîtriser, à être proactif et son dynamisme. Julien devrait être un véritable atout à tous les postes nécessitant de la gestion de projet.",
    date: "17 octobre 2018",
    featured: false,
  },
  {
    name: "Martijn Verpaalen",
    title: "UX Design Major | Program Lead",
    company: "Ancien collègue",
    text: "In a team, Julien is a great motivator and he has the strength and the ideas to handle any kinds of projects from A to Z. Above that, Julien is also a great guy and a pleasure to work with!",
    date: "11 février 2015",
    featured: false,
  },
  {
    name: "Chantal Iturria",
    title: "Experte en communication stratégique et interne",
    company: "Ancien manager",
    text: "Julien est aussi à l'aise pour imaginer des solutions aux problématiques de ses clients que pour les mettre en oeuvre par la suite. En effet, autonome mais doté de solides capacités relationnelles, il sait fédérer des équipes sur un projet et gérer ses échéances. Si je devais résumer ma pensée en 3 adjectifs : créatif, responsable et facilitateur.",
    date: "10 février 2015",
    featured: false,
  },
  {
    name: "Richard Bogota",
    title: "Développeur Web",
    company: "Ancien collègue",
    text: "Julien Bechkri possède un très bon sens du management de projets web. Il fait preuve d'une bonne écoute à l'égard de ses collaborateurs, sait donner les directives et les objectifs à atteindre tout en considérant les compétences de chacun. Il apporte un sentiment de bien-être avec ses collègues.",
    date: "10 février 2015",
    featured: false,
  },
];

import {
  mobile,
  backend,
  django,
  burgerKing,
  pontue,
  web,
  javascript,
  typescript,
  html,
  css,
  laravel,
  reactjs,
  redux,
  tailwind,
  php,
  mongodb,
  git,
  figma,
  wavecode,
  docker,
  postgres,
  starbucks,
  vikko,
  python,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = (t) => {
  return [
    {
      id: "about",
      title: t('about'),
    },
    {
      id: "work",
      title: t('career'),
    },
    {
      id: "contact",
      title: t('contact'),
    },
  ]
};

const services = (t) => {
  return [
    {
      title: t('frontEnd'),
      icon: web,
    },
    {
      title: t('mobile'),
      icon: mobile,
    },
    {
      title: t('backEnd'),
      icon: backend,
    },
  ]
};

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "PostgreSQL",
    icon: postgres
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "PHP Develop",
    company_name: "Vikko Designer",
    icon: vikko,
    iconBg: "#383E56",
    date: "Jan 2020 - Sep 2020",
    points: [
      "Back-end web application development using Codeigniter with PHP.",
      "Development and maintenance of web applications using BootStrap.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Wavecode",
    icon: wavecode,
    iconBg: "#E6DEDD",
    date: "Oct 2020 - Sep 2022",
    points: [
      "Dealing with front-end demands, being responsible for that part of the application.",
      "Creating and developing web applications with React.Js and Next.JS, implementing with Firebase.",
      "Using Python to do web scraping on government portals to scrape public notices and store them in the database.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "BugerKing (MediaWorks)",
    icon: burgerKing,
    iconBg: "#383E56",
    date: "Jan 2021 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participate in meetings with the manager to fix bugs in production.",
    ],
  },
  {
    title: "Full-Stack and Mobile Developer",
    company_name: "Pontue",
    icon: pontue,
    iconBg: "#E6DEDD",
    date: "Apr 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const articles = (t) => [
  {
    title: t('articleOne'),
    name: "Medium",
    link: "CFO",
    date: "12/01/2022",
    image: "https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/48424823_1103302693176323_8938151161467240448_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4whP0ZIe9psAX-xLWSn&_nc_ht=scontent-gru2-2.xx&oh=00_AfApJNZe7EQVxRzP_08YkBs21qmEGloghrRX13Q0_uLJsA&oe=64672AD9",
  },
  {
    title: t('articleTwo'),
    name: "Medium",
    link: "COO",
    date: "01/10/2022",
    image: "https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/48424823_1103302693176323_8938151161467240448_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4whP0ZIe9psAX-xLWSn&_nc_ht=scontent-gru2-2.xx&oh=00_AfApJNZe7EQVxRzP_08YkBs21qmEGloghrRX13Q0_uLJsA&oe=64672AD9",
  },
  {
    title: t('articleThree'),
    name: "Medium",
    link: "CTO",
    date: "12/12/2022",
    image: "https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/48424823_1103302693176323_8938151161467240448_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4whP0ZIe9psAX-xLWSn&_nc_ht=scontent-gru2-2.xx&oh=00_AfApJNZe7EQVxRzP_08YkBs21qmEGloghrRX13Q0_uLJsA&oe=64672AD9",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, articles, projects };

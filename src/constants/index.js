import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    itential,
    enru,
    carrent,
    jobit,
    tripguide,
    threejs,
    python,
    java,
    sql,
    wramblinwreck,
    dfas01Img,
  } from "../assets";

  
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "blog",
      title: "Blog",
    },
    {
      id: "contact",
      title: "Contact",
    },
    
  ];
  
  const services = [
    {
      title: "Frontend: React, Vue",
      icon: web,
    },
    {
      title: "UI/UX Design: Figma",
      icon: mobile,
    },
    {
      title: "Backend: NodeJS, Django, SpringBoot",
      icon: backend,
    },
    {
      title: "ML/NLP: Numpy, PyTorch",
      icon: creator,
    },
  ];
  
  const technologies = [
  
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "Python",
      icon: python
    },
    {
      name: "Java",
      icon: java
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Three JS",
      icon: threejs,
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
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineering Intern",
      company_name: "ENRU Logistics and Postal Optimization",
      icon: enru,
      iconBg: "#002d26",
      date: "May 2023 - August 2023",
      points: [
        "Led the Hometimes project through the SDLC from requirements gathering to prototyping to implementation and technical documentation before final hand-of",
        "Collaborated with Graph Analysts, Business Analysts, Software Engineers, and Product Owners to figure out fleet data and UI/UX requirements to develop new features for fleet managers to use",
        "Tools used: ReactJS, GSQL, Azure DevOps, Figma, Swagger APIs, TigerGraph, Excel, MS Teams"
      ]
    },
    {
      title: "Automation Engineer Intern",
      company_name: "Itential",
      icon: itential,
      iconBg: "#E6DEDD",
      date: "June 2022 - August 2022",
      points: [
        "Contributed to the initial development of the Inventory Project under the R&D Tools department which delivered system information for analytics and metrics",
        "Implemented a CypressJS testing suite to run e2e tests on the automations"
      ]
    }
    // {
    //   title: "React.js Developer",
    //   company_name: "Starbucks",
    //   icon: starbucks,
    //   iconBg: "#383E56",
    //   date: "March 2020 - April 2021",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
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

  export const blogs = [
    {
      title: "My First Blog Post",
      description: "I graduated last week. I was bored so I built this website 😂",
      date: "5/6/2024",
      author: "Dom Fernando",
      pfp: wramblinwreck,
      image: dfas01Img,
      id: "dfas01",
    },
    {
      title: "Summer '24: Week 1 Recap",
      description: "",
      date:"5/12/2024",
      author: "Dom Fernando",
      pfp: wramblinwreck,
      image: "path_to_image.jpg",
      id: "dfkr02",
    },
    {
      title: "Summer '24: Week 2 Recap",
      description: "",
      date:"5/20/2024",
      author: "Dom Fernando",
      pfp: wramblinwreck,
      image: "path_to_image.jpg",
      id: "dfkjg03",
    },
    // {
    //   title: "Summer '24: Week 2 Recap",
    //   description: "",
    //   date:"5/20/2024",
    //   author: "Dom Fernando",
    //   pfp: wramblinwreck,
    //   image: "path_to_image.jpg",
    //   id: "dfkjg03",
    // },
    // {
    //   title: "Summer '24: Week 2 Recap",
    //   description: "",
    //   date:"5/20/2024",
    //   author: "Dom Fernando",
    //   pfp: wramblinwreck,
    //   image: "path_to_image.jpg",
    //   id: "dfkjg03",
    // },
    // {
    //   title: "Summer '24: Week 2 Recap",
    //   description: "",
    //   date:"5/20/2024",
    //   author: "Dom Fernando",
    //   pfp: wramblinwreck,
    //   image: "path_to_image.jpg",
    //   id: "dfkjg03",
    // },
    // Add more blog articles here
  ];
  
  export { services, technologies, experiences, testimonials, projects };
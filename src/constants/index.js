import { color } from "framer-motion";
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
    bariq,
    carrent,
    jobit,
    tripguide,
    apod,
    smolbois,
    socialnet,
    threejs,
    python,
    java,
    sql,
    wramblinwreck,
    dfas01Img,
    chessbfs,
    ellapic,
    pochangfire
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
      title: "Frontend: React, Vue, NextJS",
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
      title: "ML: Numpy, PyTorch, NLP course @ GT",
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
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
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
        "Led the Hometimes project through the SDLC from requirements gathering to prototyping to implementation and technical documentation before final hand-off",
        "Collaborated with Graph Analysts, Business Analysts, Software Engineers, and Product Owners to figure out fleet data and UI/UX requirements to develop new features for fleet managers to use",
        "Tools used: ReactJS, GSQL, Azure DevOps, Figma, Swagger APIs, TigerGraph, Excel, MS Teams"
      ]
    },
    {
      title: "React Developer",
      company_name: "Bar IQ, LLC",
      icon: bariq,
      iconBg: "#383E56",
      date: "January 2023 - May 2023",
      points: [
        "Capstone project for Georgia Tech's College of Computing",
        "Worked with a team of 4 other students to deliver a modern customer web portal for our client Daniel Knotts of Bar IQ, LLC.",
        "Used React and Figma to design and develop the interactive front end.",
        "Used Cloud Firestore to handle user authentication and account management.",
        "Deployment to Vercel and final presentation @ the Capstone Expo."
      ],
    },
    {
      title: "Automation Engineer Intern",
      company_name: "Itential",
      icon: itential,
      iconBg: "#E6DEDD",
      date: "June 2022 - August 2022",
      points: [
        "Developed and documented 2 workflow automations which delivered several system and workflow information for analytics/metrics team",
        "Worked with Node, and mongoDB API, and Cisco-NSO API",
        "Implemented a CypressJS testing suite to run e2e tests on the automations",
        "Other tools used: React, JIRA, Confluence, Swagger APIs, Command Line, MacOS",
      ]
    },
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
      name: "Instagram Clone",
      description:
        "📺Welcome to KartoonNetwork, where 🎞️cartoon and 🦸🏻‍♂️comic enthusiasts connect worldwide!",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "rest-api",
          color: "yellow-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: 'django',
          color: 'green-text-gradient',
        },
        {
          name: 'sqlite',
          color: 'orange-text-gradient',
        }
      ],
      image: socialnet,
      source_code_link: "https://github.com/domfernando319/KartoonNetwork",
    },
    {
      name: "SmolBois",
      description:
        "SMOLBOIS delivers personalized workout plans tailored to your preferences, goals and fitness level.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        // {
        //   name: "restapi",
        //   color: "green-text-gradient",
        // },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: smolbois,
      source_code_link: "https://github.com/domfernando319/SmolBois",
    },
    {
      name: "Astronomy Picture of the Day",
      description:
        "A simple ReactJS application that leverages NASA API to explore themes of space and education.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "rest-api",
          color: "yellow-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: apod,
      source_code_link: "https://github.com/domfernando319/NasaApp",
    },
  ];

  export const blogs = [
    {
      title: "My First Blog Post",
      description: "I graduated last week. I was bored so I built this 😂",
      date: "5/6/2024",
      author: "Dom Fernando",
      pfp: wramblinwreck,
      image: dfas01Img,
      id: "dfas01",
    },
    {
      title: "Summer '24: Week 1 Recap",
      description: "Learned about threeJS library and how to incorporate it into this portfolio.",
      date:"5/15/2024",
      author: "Dom Fernando",
      pfp: wramblinwreck,
      image: "",
      id: "dfkr02",
    },
    {
      title: "Summer '24: Week 2 Recap",
      description: "Learned a bit about C# and .NET CORE + MVC. Started a tutorial by Teddy Smith but it was too frontend focused. What I am looking for right now is a backend fundamentals-focused course.",
      date:"5/20/2024",
      author: "Dom Fernando",
      pfp: wramblinwreck,
      image: "",
      id: "dfkjg03",
    },
    {
      title: "Summer '24: Trip to Sri Lanka",
      description: "Disappeared for 2 months",
      date:"6/1/2024-7/4/2024",
      author: "Dom Fernando",
      pfp: wramblinwreck,
      image: ellapic,
      id: "dfkjg04",
    },
    {
      title: "Finished my first React + Django App",
      description: "I learned so much about api testing, creating models using Django Rest Framework, and styling Vue components. I did have difficulties with deployment. Definitely will look into other methods later. The problem for me I think was faulty NGINX configuration using the CLI.",
      date:"7/16/2024",
      author: "Dom Fernando",
      pfp: wramblinwreck,
      image: socialnet,
      id: "dfkjg05",
    },
    {
      title: "Capital One Interview",
      description: "Took the Capital One OA this week. I was able to pass all test cases for Q1 and Q2. Got half points on Q3 and no points on Q4. 4 questions in 70 minutes is brutal!",
      date:"9/20/2024",
      author: "Dom Fernando",
      pfp: wramblinwreck,
      image: "",
      id: "dfkjg06",
    },
    {
      title: "Interview with Air Space Intelligence",
      description: "Passed the intial screening and the online assessment on HackerRank a week later. Got stumped on the techinical deep dive though on a BFS type problem. We learn from it and put in the work. Started a study plan on leetcode on graph problems.",
      date:"9/27/2024",
      author: "Dom Fernando",
      pfp: wramblinwreck,
      image: chessbfs,
      id: "dfkjg07",
    },
    {
      title: "Interview with Amazon",
      description: "Passed the online assessment on HackerRank wasn't too hard. Faced 3 back to back interviewers that were behavioral heavy. For the technical portion I had to design a binary search tree class and traversal/search methods. My weakest round was probably the low level design portion because of the time crunch to plan and implement.",
      date:"11/22/2024",
      author: "Dom Fernando",
      pfp: wramblinwreck,
      image: chessbfs,
      id: "dfkjg08",
    },
    {
      title: "Working at Advanced Hill Technologies Week 1",
      description: "Started working with Technical Lead to brainstorm a plan to create a Windows Service to run background jobs for 10+ .NET application servers. In my first week I was able to implement a POC .NET console application that supported multi-tenancy (SQL Server databases).",
      date:"3/21/2025",
      author: "Dom Fernando",
      pfp: wramblinwreck,
      image: pochangfire,
      id: "dfkjg09",
    },
    {
      title: "Working at Advanced Hill Technologies Week 2",
      description: "The next steps of the Windows Service project discussed last week is to convert the POC to a windows service. I refactored the .NET console app to follow Hangfire best practices when creating a windows service. Performed some administrative tasks to run the Service.exe on the local machine.",
      date:"3/24/2025",
      author: "Dom Fernando",
      pfp: wramblinwreck,
      image: pochangfire,
      id: "dfkjg10",
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
    // Add more blog articles here
  ];
  
  export { services, technologies, experiences, testimonials, projects };
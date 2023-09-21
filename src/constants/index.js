import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    carrent,
    jobit,
    tripguide,
    spotifyapp,
    eiscafe,
    portfolio
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Chi sono",
    },
    {
      id: "work",
      title: "Il mio lavoro",
    },
    {
      id: "contact",
      title: "Contatti",
    },
  ];
  
  const services = [
    {
      title: "Web Designer",
      icon: web,
    },
    {
      title: "Next.js Developer",
      icon: mobile,
    },
    {
      title: "React Developer",
      icon: backend,
    },
    {
      title: "Wordpress Specialist",
      icon: creator,
    },
  ];
  
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Corso di formazione in Web Marketing",
      company_name: "Agenzia formativa Dante Alighieri",
      iconBg: "#383E56",
      date: "Ottobre 2019 - Agosto 2020",
      points: [
        "Nozioni base di Economia Aziendale, Psicologia e Comunicazione.",
        "Nozioni di Web Marketing.",
        "Nozioni di Web Design.",
        "Nozioni di Ottimizzazione di un sito web in chiave SEO (Search Engine Optimization).",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Agenzia Web Dr-One",
      iconBg: "#E6DEDD",
      date: "Agosto 2020 - Ottobre 2021",
      points: [
        "Apprendistato presso agenzia web Dr-One.",
        "Realizzavo siti web in Wordpress per diverse tipologie di clienti.",
        "Ottimizzavo il sito web una volta concluso sia in chiave SEO che di perfomance.",
        "Mi occupavo della parte creativa del sito, dalla comunicazione con il cliente per capire gli obiettivi commerciali e di design fino allo sviluppo e alla pubblicazione.",
      ],
    },
    {
      title: "Corso di Web Developer Full Stack",
      company_name: "Istituto Volta",
      iconBg: "#383E56",
      date: "Marzo 2022 - Marzo 2023",
      points: [
        "Corso di formazione sui seguenti linguaggi di programmazione: HTML, CSS, JAVASCRIPT E PHP.",
        "Lezioni approfondite di php e mysql per sviluppare il backend di una applicazione.",
        "Lezioni di approfondite del linguaggio Javascript per aggiungere interattività al sito.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Pianoweb",
      iconBg: "#E6DEDD",
      date: "Aprile 2022 - Presente",
      points: [
        "Sviluppo siti web in Wordpress per diverse tipologie di clienti",
        "Mi occupo della creazione del sito a 360 gradi, dalla parte creativa a quella di sviluppo.",
        "Ho acquisito competenze nello sviluppo di plugin e temi custom per Wordpress.",
        "Infine mi occupo dell'ottimizzazione del sito sia in chiave SEO che di perfomance. ",
      ],
    },
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
      name: "Wordpress Website",
      description:
        "Sito web sviluppato utilizzando il CMS Wordpress e il builder Elementor per una gelateria che si trova in Germania.",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "mySQL",
          color: "pink-text-gradient",
        },
      ],
      image: eiscafe,
      source_code_link: "https://github.com/",
    },
    {
      name: "Spotify API App",
      description:
        "Applicazione web sviluppata utilizzando l'API di Spotify che permette l'autenticazione nel sito tramite il proprio profilo, dopo la quale sarà possibile vedere quali sono gli artisti e le canzoni che più ascolti e inoltre sarà possibile cercare gli album che hai ascoltato e aggiungerli al proprio profilo.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "next.js",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: spotifyapp,
      source_code_link: "https://github.com/",
    },
    {
      name: "3D Portfolio Website",
      description:
        "Sito web creato in React utilizzando Three js per aggiungere modelli 3D e framer motion per aggiungere animazioni. Il mio sito mostra le mie competenze e esperienze come sviluppatore web. Inoltre ho implementato Email JS per creare un form di contatto.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "framermotion",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  
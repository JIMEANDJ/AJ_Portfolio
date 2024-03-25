// import Hero_person from "./assets/images/Hero/person.png"
import Hero_person from "./assets/images/Hero/wallpaper.png"

import reactjs from "./assets/images/Skills/react.png"
import python from "./assets/images/Skills/python.png"
import django from "./assets/images/Skills/django.png"
import postgresql from "./assets/images/Skills/postgresql.png"
import mysql from "./assets/images/Skills/mysql.png"
import sqlite from "./assets/images/Skills/SQLite.png"

import services_logo1 from "./assets/images/Services/codigo.png"
import services_logo2 from "./assets/images/Services/rendimiento.png"
import services_logo3 from "./assets/images/Services/seguridad-informatica.png"

import project1 from "./assets/images/Projects/img1.png"
import project2 from "./assets/images/Projects/img2.png"
import project3 from "./assets/images/Projects/img3.png"
// import person_project from "./assets/images/projects/person.png";
import person_project from "./assets/images/Projects/Projects.png"

import avatar1 from "./assets/images/Testimonials/avatar1.png"
import avatar2 from "./assets/images/Testimonials/avatar2.png"
import avatar3 from "./assets/images/Testimonials/avatar3.png"
import avatar4 from "./assets/images/Testimonials/avatar4.png"

import Hireme_person from "./assets/images/Hireme/person.png"
// import from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr"
import { MdArrowForward, MdCall } from "react-icons/md"
import { BsInstagram } from "react-icons/bs"
import { TbSmartHome } from "react-icons/tb"
import { BiUser } from "react-icons/bi"
import { RiServiceLine, RiProjectorLine } from "react-icons/ri"
import { MdOutlinePermContactCalendar } from "react-icons/md"

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Desarrollador Backend",
    title2: " y Blockchain",
    firstName: "Andres",
    LastName: "Jimenez",
    btnText: "Acerca de mi",
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
        text: "Años de experiencia en el desarrollo web",
      },
      {
        count: "10+",
        text: "Proyectos trabajados a lo largo de mi carrera",
      },
    ],
  },
  skills: {
    title: "Habilidades",
    subtitle: "Mis habilidades",
    skills_content: [
      {
        name: "React.js",
        para: "Creación de interfaces",
        logo: reactjs,
      },
      {
        name: "Python",
        para: "Simplicidad de código",
        logo: python,
      },
      {
        name: "Django",
        para: "Adaptabilidad",
        logo: django,
      },
      {
        name: "PostgreSQL",
        para: "Poder y rendimiento",
        logo: postgresql,
      },
      {
        name: "MySQL",
        para: "Manejo eficiente de datos",
        logo: mysql,
      },
      {
        name: "SQLite3",
        para: "Ligero, portatil y eficiente",
        logo: sqlite,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Servicios",
    subtitle: "¿Que ofrezco?",
    service_content: [
      {
        title: "Desarrollo de APIs RESTFul",
        para: "Creacion de interfaces de programación para la comunicación de una o varias aplicaciones",
        logo: services_logo1,
      },
      {
        title: "Optimización de rendimiento",
        para: "Mejoras en eficiencia y velocidad de respuesta en las aplicaciones además de identificar los problemas en el redimiento",
        logo: services_logo2,
      },
      {
        title: "Seguridad de la aplicación",
        para: "Implementación de medidas de seguridad para proteger la aplicación y los datos de los usuarios",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Proyectos",
    subtitle: "Proyectos desarrollados",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
        link: "https://www.google.com/",
      },
      {
        title: "Social Media web",
        image: project2,
        link: "https://www.youtube.com/?app",
      },
      {
        title: "Creative Website",
        image: project3,
        link: "https://www.google.com/",
      },
      {
        title: "Creative Website",
        image: project3,
        link: "https://www.google.com/",
      },
    ],
  },
  Testimonials: {
    title: "Testimonios",
    subtitle: "Comentarios de mis clientes",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Contrátame",
    subtitle: "PARA TUS PROYECTOS",
    image1: Hireme_person,
    para: "Con una sólida experiencia en desarrollo backend y un compromiso constante con la innovación y el aprendizaje, ofrezco soluciones de alta calidad que impulsan el rendimiento y la eficiencia. Mi habilidad para desarrollar APIs robustas, gestionar bases de datos, optimizar el rendimiento y garantizar la seguridad, junto con mi conocimiento en blockchain, me convierten en el candidato ideal para llevar sus proyectos al siguiente nivel",
    btnText: "Contáctame",
  },
  Contact: {
    title: "Envíame un correo o sígueme en mis redes sociales",
    subtitle: "",
    social_media: [
      {
        text: "elpaitonero@gmail.com",
        icon: GrMail,
        link: "elpaitonero@gmail.com",
      },
      {
        text: "+57 354 5744 5847",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "paitonero",
        icon: BsInstagram,
        link: "https://www.instagram.com/paitonero/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2024",
  },
}

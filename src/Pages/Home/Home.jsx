import Image from './Image.jpg'
import fikraImage from "./fikra.png"
import lyonImage from "./lyon.png"
import menaImage from "./mena.jpg"
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState, useRef } from "react";
import Line from '../../components/Line/Line'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaUniversity, FaLaravel, FaGithub, FaReact, FaBootstrap, FaCss3, FaHtml5, FaJava, FaDatabase, FaPhone, FaLinkedin } from "react-icons/fa";
import { SiHtmlacademy, SiThymeleaf, SiUdemy, SiDrupal, SiJquery, SiAxios, SiApachemaven, SiSwagger, SiJsonwebtokens, SiHibernate } from "react-icons/si";
import { MdWork, MdOutlineSecurity, MdEmail } from "react-icons/md";
import { BiLogoSpringBoot } from "react-icons/bi";
import { RiPhpLine } from "react-icons/ri";
import { IoLogoJavascript, IoLogoWhatsapp } from "react-icons/io";
import { IoLogoNodejs, IoCodeSlashSharp } from "react-icons/io5";
import { TbBrandMysql, TbApi } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
import { BsFiletypeJson } from "react-icons/bs";
import Card from '../../components/Card/Card';
const educationData = [
    {
        school: "University of Al Hussein Bin Talal",
        degree: "Bachelor of Software Engineering",
        details: "During my studies, I completed a comprehensive curriculum that covered key subjects such as Programming, Object-Oriented Programming (OOP), Data Structures, Calculus I & II, and Software Engineering I, among others. This program strengthened my analytical thinking, problem-solving abilities, and technical foundation in computer science.",
        year: "03/2019 - 07/2022",
        location: "Onsite",
        address: "Ma'an - Jordan",
        otherLinks: [
            {
                link: "https://www.ahu.edu.jo/",
                title: "University website"
            },
            {
                link: "https://www.ahu.edu.jo/AR-article-6449",
                title: "Material Description"
            },
            {
                link: "https://www.ahu.edu.jo/Site_Pages/Site_Template/JM_Sys_Site/Pages/Files/Posters/file/%D9%87%D9%86%D8%AF%D8%B3%D8%A9%20%D8%A8%D8%B1%D9%85%D8%AC%D9%8A%D8%A7%D8%AA%202019.pdf",
                title: "Study Plans"
            },
            {
                link: "https://www.ahu.edu.jo/Site_Pages/Site_Template/JM_Sys_Site/Pages/Files/Posters/file/SW.jpg",
                title: "Tree and Guidance Plan"
            }
        ],
        icon: <FaUniversity />
    },
    {
        school: "EPIC Academy At Aspire",
        degree: "Full-Stack Javascript Certificate",
        year: "05/2023 - 08/2023",
        details: "AspireI successfully completed my training at Aspire Company, focusing on web developmentwith JavaScript as the primary programming language. The program covered buildingfrontend environments with React.js and backend environments using Node.js and theExpress framework. By the end of the training, I had effectively utilized thesetechnologies to develop a full MERN stack project.",
        location: "Online",
        otherLinks: [
            {
                title: "EPIC Academy",
                link: "https://aspire.jo/careers/epic-academy/",
            }
        ],
        address: "Amman - Jordan",
        icon: <SiHtmlacademy />
    },
    {
        school: "Udemy",
        degree: "Java Certificate",
        year: "08/2025 - 09/2025",
        details: "This Java course on Udemy covers core Java 17 skills, including OOP concepts, Generics, primitive data types, wrapper classes, operators, packages, keywords, variables, Java literals, JVM, JRE, JDK, heap and stack memory, strings and booleans, composition, annotations, enums, garbage collection, arrays, lists and collections, lambdas, Java streams, and other advanced Java topics.",
        link: "https://aspire.jo/careers/epic-academy/",
        location: "Online",
        otherLinks: [
            {
                title: "Java Masterclass 2025: 130+ Hours of Expert Lessons",
                link: "https://www.udemy.com/course/java-the-complete-java-developer-course/?couponCode=MT251006G1",
            }
        ],
        address: "Amman - Jordan",
        icon: <SiUdemy />
    },
    {
        school: "Udemy",
        degree: "Spring boot Certificate",
        year: "08/2025 - 09/2025",
        details: "I gained hands-on experience in Spring Boot 3, Spring Framework 6, and Hibernate 6, learning to build RESTful APIs, web applications with MVC and Thymeleaf, secure authentication and authorization, and database-driven CRUD operations using Spring Data JPA and Hibernate. I also applied dependency injection, annotations, AOP, and project management with Maven, completing real-time projects that strengthened my skills in designing, implementing, and deploying enterprise-grade Java applications.",
        link: "https://aspire.jo/careers/epic-academy/",
        location: "Online",
        address: "Amman - Jordan",
        otherLinks: [
            {
                title: "Spring Boot 3, Spring 6 & Hibernate for Beginners",
                link: "https://www.udemy.com/course/spring-hibernate-tutorial/?couponCode=MT251006G1",
            }
        ],
        icon: <SiUdemy />
    }
];
const experienceData = [
    {
        role: "Web Developer",
        company: "Fikra For Business Development",
        year: "06/2022 - 04/2023",
        details: "My responsibilities at this company encompassed the end-to-end development ofwebsites, from translating Adobe XD designs provided by the design team to deliveringfully functional production-ready solutions. This involved utilizing the Drupal CMSalongside UI technologies such as HTML5, CSS3, JavaScript, jQuery, and Bootstrap 4.",
        otherLinks: [
            {
                link: "https://fikra.online/en",
                title: "Fikra For Business Development"
            },
        ],
        img: <img src={fikraImage} alt='fikra' />,
        icon: <MdWork />,
        location: "Hybrid",
        address: "Amman - Jordan"


    },
    {
        role: "Full-Stack PHP Developer",
        company: "Lyon Jo",
        year: "10/2023 - 05-2024",
        details: `This car rental company operates several custom-built systems designed to meet its specific business requirements. For instance, the Human Resources Management System was developed using Flutter for the mobile application, Livewire for the dynamic web interface, and the Laravel framework for the backend.
        Another core platform, enabling customers to rent vehicles online, was developed with HTML, CSS, JavaScript, jQuery, and AJAX for the frontend, and native PHP for the backend.
        I was responsible for the design, development, enhancement, maintenance, monitoring, and troubleshooting of these systems—ensuring optimal performance, reliability, and swift resolution of any server-related issues.`,
        otherLinks: [
            {
                link: "https://lyon-jo.com/",
                title: "Lyon Jo"
            },
        ],
        icon: <MdWork />,
        img: <img src={lyonImage} alt='lyonjo' />,
        location: "Onsite",
        address: "Amman - Jordan"
    },
    {
        role: "AI Prompt Engineer",
        company: "Menadevs",
        year: "05/2024 - 02/2025",
        details: "Menadevs is a third-party partner of Scale AI, and Scale AI its a U.S.-based company that operates the Outlier platform, which hosts large language models designed for advanced programming-related (Java, Js) training. I was responsible for training multiple models and managing various projects using diverse methodologies, in alignment with specific project requirements. My work focused on enhancing the performance and capabilities of large language models through consistent optimization and quality-driven data curation.",
        otherLinks: [
            {
                link: "https://menadevs.io/",
                title: "Menadevs Jo"
            },
            {
                link: "https://scale.com/",
                title: "Scale AI"
            },
            {
                link: "https://outlier.ai/",
                title: "Outlier AI"
            },
        ],
        icon: <MdWork />,
        img: <img src={menaImage} alt='menadevs' />,
        location: "Hybrid",
        address: "Amman - Jordan"
    }
];
const skills = [
    { lang: "java", icon: <FaJava /> },
    { lang: "spring boot", icon: <BiLogoSpringBoot /> },
    { lang: "Hibernate", icon: <SiHibernate /> },
    { lang: "Spring Data JPA", icon: <FaDatabase /> },
    { lang: "Maven", icon: <SiApachemaven /> },
    { lang: "Spring Boot Security", icon: <MdOutlineSecurity /> },
    { lang: "Spring Data REST", icon: <FaDatabase /> },
    { lang: "Swagger", icon: <SiSwagger /> },
    { lang: "Thymeleaf", icon: <SiThymeleaf /> },
    { lang: "php", icon: <RiPhpLine /> },
    { lang: "laravel", icon: <FaLaravel /> },
    { lang: "drupal", icon: <SiDrupal /> },
    { lang: "javascript", icon: <IoLogoJavascript /> },
    { lang: "express.js", icon: <IoLogoNodejs /> },
    { lang: "react.js", icon: <FaReact /> },
    { lang: "jquery", icon: <SiJquery /> },
    { lang: "axios", icon: <SiAxios /> },
    { lang: "html", icon: <FaHtml5 /> },
    { lang: "css", icon: <FaCss3 /> },
    { lang: "bootstrap", icon: <FaBootstrap /> },
    { lang: "mysql", icon: <TbBrandMysql /> },
    { lang: "Mongodb", icon: <DiMongodb /> },
    { lang: "git & github", icon: <FaGithub /> },
    { lang: "rest full api", icon: <TbApi /> },
    { lang: "MVC", icon: <IoCodeSlashSharp /> },
    { lang: "oop", icon: <IoCodeSlashSharp /> },
    { lang: "AOP", icon: <IoCodeSlashSharp /> },
    { lang: "jwt", icon: <SiJsonwebtokens /> },
    { lang: "json", icon: <BsFiletypeJson /> },
    { lang: "problem-solving", icon: <IoCodeSlashSharp /> }
];
const languages = [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Conversational" },
];
const Home = () => {
    const [hoverTime, setHoverTime] = useState(0);
    const [showHideElement, setShowHideElement] = useState(false);
    const hoverStartRef = useRef(null);
    const handleMouseEnter = () => {
        if (!showHideElement) {
            hoverStartRef.current = Date.now();
            setTimeout(() => {
                handleMouseLeave();
            }, 10000);
        }
    };
    const handleMouseLeave = () => {
        if (!showHideElement) {
            if (hoverStartRef.current) {
                const duration = Date.now() - hoverStartRef.current;
                setHoverTime((prev) => prev + duration);
                hoverStartRef.current = null;
            }
        }
    };
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    useEffect(() => {
        if (hoverTime >= 10000) setShowHideElement(true);
    }, [hoverTime]);
    return (
        <main>
            <section className='py-5 mb-1' aos="zoom-in-up" id='profile'>
                <h2 className=' text-center py-5'>Professional Summary</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <img
                                src={Image}
                                alt="main-image"
                                loading='lazy'
                                width="100%"
                                height="100%"
                            />
                        </div>
                        <div className="col-md-6 col-12 d-flex justify-content-around flex-column">
                            <h4 className='text-capitalize'>marwan albkirat - full-stack java developer</h4>
                            <p className='text-capitalize'>Full-Stack Java Developer with over two years of experience in designing and developing dynamic web applications. Highly proficient in front-end development, backend integration, and performance optimization. Having worked across three different organizations, I have developed strong adaptability to diverse technologies, programming languages, and collaborative environments. I am seeking to contribute my expertise in Java and Spring Boot within a forward-thinking software development team.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Line />
            <section className='py-5' aos="fade-down" id="education">
                <h2 className='text-uppercase mb-5 text-center'>education & achievements</h2>
                <div className="container">
                    {educationData.map((edu, index) => (
                        <div key={index} className="education-card position-relative p-4 mb-4">
                            <h4>{edu.school}{edu.icon}</h4>
                            <h6 className='text-muted mb-3'>{edu.degree}</h6>
                            <p className='text-primary'>{edu.year}</p>
                            <p>{edu.details}</p>
                            <span className='loc education-location position-absolute text-center text-light'>{edu.location}</span>
                            <span className='loc education-address position-absolute text-center text-light'>{edu.address}</span>
                            {edu.otherLinks && (
                                <ul className='otherlinks d-flex'>
                                    <h6 className='text-capitalize'>for more information, please visit these links: </h6>
                                    {edu.otherLinks.map((lk, index) => (
                                        <li className='mx-2' key={index}>
                                            <a
                                                href={lk.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ color: "inherit" }}
                                                className="text-decoration-none"
                                            >
                                                <span>{lk.title}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}

                        </div>
                    ))}
                </div>
            </section>
            <Line />
            <section aos="fade-down" id='experience' className='py-5'>
                <h2 className='text-uppercase text-center mb-4'>experience</h2>
                <div className="timeline">
                    {experienceData.map((exp, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-icon">
                                <FontAwesomeIcon icon={exp.icon} />
                            </div>
                            <div className="timeline-content px-1 py-3">
                                <div className=" d-flex align-items-center">
                                    <h4 className='mr-1'>{exp.role}</h4>
                                    <span className='ml-1 mb-1'>{exp.icon}</span>

                                </div>
                                <h6 className="text-muted">  {exp.company}</h6>
                                <p className="text-primary">{exp.year}</p>
                                <p>{exp.details}</p>
                            </div>
                            {exp.otherLinks && (
                                <ul className='otherlinks d-flex'>
                                    <h6 className='text-capitalize'>for more information, please visit this link: </h6>
                                    {exp.otherLinks.map((lk, index) => (
                                        <li className='mx-2' key={index}>
                                            <a
                                                href={lk.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ color: "inherit" }}
                                                className="text-decoration-none"
                                            >
                                                <span>{lk.title}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            <span className='position-absolute loc education-location'>{exp.location}</span>
                            <span className='loc education-address position-absolute text-center text-light'>{exp.address}</span>
                            <span className='position-absolute exp-img'>{exp.img}</span>
                        </div>
                    ))}
                </div>
            </section>
            <Line />
            <section
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                id='skills' className='py-5'>
                <h2 className='text-uppercase text-center mb-4'>skills</h2>
                <div className="container">
                    <div className="myskills py-5">
                        {skills.map((lang, index) => (
                            <div
                                aos={`${showHideElement && index === skills.length - 1 ? "" : "flip-up"}`}
                                aos-duration="400"
                                key={index}
                                className={`lang ${showHideElement && index === skills.length - 1 ? "test" : ""}`}
                            >
                                {showHideElement && index === skills.length - 1 ? (
                                    <a href="https://leetcode.com/u/oMZuAnuJiy/" target="_blank"
                                        rel="noopener noreferrer">
                                        {lang.icon} {lang.lang && <span>{lang.lang}</span>}
                                    </a>
                                ) : (
                                    <>
                                        {lang.icon} {lang.lang && <span>{lang.lang}</span>}
                                    </>
                                )}
                                {lang.framework && <span>{lang.framework}</span>}
                                {lang.cms && <span>{lang.cms}</span>}
                            </div>
                        ))}
                    </div>
                    {showHideElement &&
                        <div className="ss">
                            <span className="hidesection bg-info text-capitalize">It seems that you are interested in this section, click on the different skill</span>
                        </div>
                    }
                </div>
            </section>
            <Line />
            <section id='projects' className='py-5'>
                <h2 className='text-uppercase text-center mb-4'>projects</h2>
                <div className="container">
                    <div className="row">
                        <div aos="flip-left" className="col-4"><Card img="https://www.fhr.fraunhofer.de/en/sections/Projekt-Management-Office-PMO/jcr:content/contentPar/sectioncomponent/sectionParsys/textwithasset_copy/imageComponent/image.img.jpg/1683010768482/Fraunhofer-FHR-Bereich-PMO-2000px.jpg" /></div>
                        <div aos="flip-left" className="col-4"><Card img="https://c8.alamy.com/comp/H5E37C/consultant-presentation-about-project-management-planning-time-scope-H5E37C.jpg" /></div>
                        <div aos="flip-left" className="col-4"><Card img="https://www.simplilearn.com/ice9/free_resources_article_thumb/project_management_coursefees.jpg" /></div>
                    </div>
                </div>
            </section>
            <Line />
            <section id='languages' className='py-5'>
                <h2 className='text-uppercase text-center mb-4'>languages</h2>
                <div className=" container">
                    <div className="row  text-center">
                        {languages.map((lang, idx) => (
                            <div aos="slide-left" key={idx} className="col">
                                <h4>{lang.name}</h4>
                                <h6>{lang.level}</h6>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Line />
            <section id='contact' className='py-5'>
                <h2 className='text-uppercase text-center mb-5'>contact</h2>
                <div className="container">
                    <div className="row text-center">
                        <div aos="zoom-out-up" className="col-3 contact-ref">
                            <a href="mailto:mario.albkirat@gmail.com">
                                <MdEmail /> mario.albkirat@gmail.com
                            </a>
                        </div>
                        <div aos="zoom-out-up" className="col-3 contact-ref">
                            <a href="tel:+962795030624">
                                <FaPhone /> +962795030624
                            </a>
                        </div>
                        <div aos="zoom-out-up" className="col-3 contact-ref">
                            <a href="https://www.linkedin.com/in/marwan-albkirat-085844382/">
                                <FaLinkedin /> Marwan Albkirat
                            </a>
                        </div>
                        <div aos="zoom-out-up" className="col-3 contact-ref">
                            <a
                                href="https://wa.me/962795030624"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <IoLogoWhatsapp /> Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    )
}
export default Home
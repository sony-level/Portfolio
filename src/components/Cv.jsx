import React, { useRef } from "react";
import jsPDF from "jspdf";
//import {educationList} from "../constants/index.js";
import { skills, educationList, experiences, projects } from "../constants/index.js"; // Importer les données du CV

const CV = () => {
    const pdfRef = useRef();

    // Fonction pour générer le PDF
    const generatePDF = () => {
        const doc = new jsPDF("portrait", "pt", "a4");
        doc.html(pdfRef.current, {
            callback: function (doc) {
                doc.save("CV_Level_Sony.pdf");
            },
            x: 10,
            y: 10,
        });
    };

    return (
        <div>
            <div ref={pdfRef} className="cv-container">
                {/* Header Section */}
                <section className="cv-header">
                    <h1>Level Sony</h1>
                    <p>Ingénieur en Cybersécurité</p>
                    <p>Email: level.sony@gmail.com | LinkedIn: linkedin.com/in/level-sony</p>
                </section>

                {/* Education Section */}
                <section className="cv-education">
                    <h2>Éducation</h2>
                    {educationList.map((education) => (
                        <div key={education.id}>
                            <h3>{education.title}</h3>
                            <p>{education.degree}</p>
                            <p>{education.duration}</p>
                            <p>{education.content1}</p>
                            <p>{education.content2}</p>
                        </div>
                    ))}
                </section>

                {/* Experience Section */}
                <section className="cv-experience">
                    <h2>Expérience professionnelle</h2>
                    {experiences.map((experience, index) => (
                        <div key={index}>
                            <h3>{experience.organisation}</h3>
                            {experience.positions.map((position, idx) => (
                                <div key={idx}>
                                    <p>{position.title}</p>
                                    <p>{position.duration}</p>
                                    <p>{position.city}</p>
                                    {position.content.map((task, i) => (
                                        <p key={i}>{task.text}</p>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
                </section>

                {/* Skills Section */}
                <section className="cv-skills">
                    <h2>Compétences</h2>
                    {skills.map((skill) => (
                        <div key={skill.title}>
                            <h3>{skill.title}</h3>
                            {skill.items.map((item) => (
                                <span key={item.id}>{item.name} </span>
                            ))}
                        </div>
                    ))}
                </section>

                {/* Projects Section */}
                <section className="cv-projects">
                    <h2>Projets</h2>
                    {projects.map((project) => (
                        <div key={project.id}>
                            <h3>{project.title}</h3>
                            <p>{project.content}</p>
                            <a href={project.github}>GitHub</a>
                        </div>
                    ))}
                </section>
            </div>

            {/* Button to Generate PDF */}
            <button onClick={generatePDF}>Télécharger le CV en PDF</button>
        </div>
    );
};

export default CV;

import React from 'react';
import agile1 from '../../assets/mini-icons/agile1.png'
import languages1 from '../../assets/mini-icons/languages1.png';
import cyber1 from '../../assets/mini-icons/cyber1.png';
import cloud1 from '../../assets/mini-icons/cloud1.png';
import object1 from '../../assets/mini-icons/object1.png';
import database1 from '../../assets/mini-icons/database1.png';

function Skills() {
    return (
        <section class="skills-section">
            <h2>Comprehensive Skills</h2>
            <div class="skills-grid">
                <div class="skill-item">
                    <img src={agile1} alt="Icon 1"/>
                    <h3>Agile Development</h3>
                    <p>Iterative and flexible software development approach that
                        emphasizes customer collaboration, continuous delivery and
                        rapid response to change.
                    </p>
                </div>

                <div class="skill-item">
                    <img src={languages1} alt="Icon 1"/>
                    <h3>Languages</h3>
                    <p>I’ve had experience coding in Java, Python, C, Javascript, and 
                        minor experience in a few other languages.</p>
                </div>

                <div class="skill-item">
                    <img src={cyber1} alt="Icon 1"/>
                    <h3>Cyber Security & Risk</h3>
                    <p>Protection of digital systems and data from unauthorized access, 
                        use, disclosure, disruption, modification, or destruction, as 
                        well as the assessment and management of potential threats and 
                        vulnerabilities.</p>
                </div>

                <div class="skill-item">
                    <img src={cloud1} alt="Icon 1"/>
                    <h3>Cloud Systems</h3>
                    <p>Provide on-demand access to scalable computing resources and 
                        services, such as virtual machines, storage, databases, and 
                        analytics tools, over the internet.</p>
                </div>

                <div class="skill-item">
                    <img src={object1} alt="Icon 1"/>
                    <h3>Object-Oriented Programming</h3>
                    <p>Paradigm that focuses on objects that have attributes and 
                        methods, enabling encapsulation, inheritance, and polymorphism 
                        to enhance code reusability and maintainability.</p>
                </div>

                <div class="skill-item">
                    <img src={database1} alt="Icon 1"/>
                    <h3>Database Systems</h3>
                    <p>Structured and efficient schema that organizes and relates data 
                        elements to meet specific requirements and optimize performance.</p>
                </div>

            </div>
        </section>
    );
}

export default Skills;
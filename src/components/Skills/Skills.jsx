import React from 'react';
import './Skills.css';
import technologiesData from '../../data/technologiesData';
import softSkillsData from '../../data/softSkillsData';

const Skills = () => {
    return (
        <div className='skills-container'>
            <h3 className='tools-title'>
                <>
                    <span className='my'>My</span> <span className='tools'>Toolkit</span>
                </>

            </h3>
            <div className='skills-list'>
                {technologiesData.map((tech, index) => (
                    <button key={index} className='skill-button'>{tech}</button>
                ))}
            </div>
            <div>
                <h3 className='skills-title'>
                    <span className='my'>My</span> <span className='tools'>SoftSkills</span>
                </h3>
                <div className='soft-skills-list'>
                    {softSkillsData.map((skill, index) => (
                        <button key={index} className='skill-button'>{skill}</button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;


